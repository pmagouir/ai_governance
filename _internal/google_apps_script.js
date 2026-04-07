// ============================================================
// DC CAP AI Pilot — Google Apps Script Web App
// ============================================================
// SETUP INSTRUCTIONS:
// 1. Open your Google Sheet: DC CAP AI Governance Tracking
// 2. Go to Extensions > Apps Script
// 3. Delete the default code and paste this entire file
// 4. Click Deploy > New deployment
// 5. Type: Web app
// 6. Execute as: Me
// 7. Who has access: Anyone
// 8. Click Deploy, authorize when prompted
// 9. Copy the Web App URL (looks like https://script.google.com/macros/s/XXXXX/exec)
// 10. Paste that URL into the SHEET_ENDPOINT variable in your HTML files
//     (I've left a placeholder: PASTE_YOUR_APPS_SCRIPT_URL_HERE)
// ============================================================

const SPREADSHEET_ID = '1efedt3aW103G2SdxPuBW7DiiFjfDXcJgiF9UuKoIaqQ';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    if (data.type === 'survey') {
      return handleSurvey(ss, data);
    } else if (data.type === 'milestone') {
      return handleMilestone(ss, data);
    } else if (data.type === 'weekly_checkin') {
      return handleWeeklyCheckin(ss, data);
    } else if (data.type === 'lookup') {
      return lookupParticipantProgress(data.participant_name || '');
    } else {
      return jsonResponse({ status: 'error', message: 'Unknown data type' });
    }
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

function doGet(e) {
  var params = e ? e.parameter : {};
  var name = params.participant || '';
  var callback = params.callback || '';

  // Health check if no participant name
  if (!name) {
    return jsonResponse({ status: 'ok', message: 'DC CAP AI Pilot tracking endpoint is live' });
  }

  // Look up participant progress
  try {
    var result = lookupParticipantProgress(name);

    // If a JSONP callback was provided, wrap the response as executable JavaScript.
    // This bypasses CORS because the browser loads it via a <script> tag.
    if (callback) {
      var jsonText = ContentService.createTextOutput('').getContent(); // unused, just for reference
      var progressData = JSON.stringify(getProgressObject(name));
      return ContentService.createTextOutput(callback + '(' + progressData + ');')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return result;
  } catch (err) {
    if (callback) {
      var errObj = JSON.stringify({ status: 'error', message: err.toString() });
      return ContentService.createTextOutput(callback + '(' + errObj + ');')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

/**
 * Returns the progress object directly (used by JSONP path to avoid
 * double-wrapping in ContentService).
 */
function getProgressObject(rawName) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var name = normalizeName(rawName);

  var milestoneSheet = ss.getSheetByName('milestones');
  var milestones = [];
  if (milestoneSheet && milestoneSheet.getLastRow() > 1) {
    var data = milestoneSheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (data[i][1] === name) {
        milestones.push({ milestone: data[i][2], phase: data[i][3], details: data[i][5] });
      }
    }
  }

  var surveySheet = ss.getSheetByName('survey_responses');
  var hasSurvey = false;
  if (surveySheet && surveySheet.getLastRow() > 1) {
    var sData = surveySheet.getDataRange().getValues();
    for (var j = 1; j < sData.length; j++) {
      if (sData[j][1] === name) { hasSurvey = true; break; }
    }
  }

  var milestoneNames = milestones.map(function(m) { return m.milestone; });

  var progress = {
    dccap_survey_completed: hasSurvey ? 'true' : 'false',
    dccap_starthere_completed: milestoneNames.indexOf('Start Here guide reviewed') > -1 ? 'true' : 'false',
    dccap_claude101_completed: milestoneNames.indexOf('Prerequisite 3a: Claude 101 completed') > -1 ? 'true' : 'false',
    dccap_fluency_completed: milestoneNames.indexOf('Prerequisite 3b: AI Fluency for Nonprofits completed') > -1 ? 'true' : 'false',
    dccap_governance_acknowledged: milestoneNames.indexOf('Governance framework acknowledged') > -1 ? 'true' : 'false'
  };

  for (var k = 0; k < milestones.length; k++) {
    var m = milestones[k];
    if (m.details) {
      try {
        var det = typeof m.details === 'string' ? JSON.parse(m.details) : m.details;
        if (det.certificate) {
          if (m.milestone === 'Prerequisite 3a: Claude 101 completed') progress.dccap_claude101_certificate = det.certificate;
          if (m.milestone === 'Prerequisite 3b: AI Fluency for Nonprofits completed') progress.dccap_fluency_certificate = det.certificate;
        }
      } catch(parseErr) {}
    }
  }

  return { status: 'found', participant: name, progress: progress, milestones: milestoneNames };
}

// ==================== SESSION RESUME LOOKUP ====================
function lookupParticipantProgress(rawName) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var name = normalizeName(rawName);

  // 1. Check milestones tab for this participant
  var milestoneSheet = ss.getSheetByName('milestones');
  var milestones = [];
  if (milestoneSheet && milestoneSheet.getLastRow() > 1) {
    var data = milestoneSheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (data[i][1] === name) {
        milestones.push({
          milestone: data[i][2],
          phase: data[i][3],
          details: data[i][5]
        });
      }
    }
  }

  // 2. Check survey_responses tab for this participant
  var surveySheet = ss.getSheetByName('survey_responses');
  var hasSurvey = false;
  if (surveySheet && surveySheet.getLastRow() > 1) {
    var sData = surveySheet.getDataRange().getValues();
    for (var j = 1; j < sData.length; j++) {
      if (sData[j][1] === name) {
        hasSurvey = true;
        break;
      }
    }
  }

  // 3. Build localStorage hydration map from milestones
  var milestoneNames = milestones.map(function(m) { return m.milestone; });

  // Map milestone names to the localStorage keys the frontend expects
  var progress = {
    dccap_survey_completed: hasSurvey ? 'true' : 'false',
    dccap_starthere_completed: milestoneNames.indexOf('Start Here guide reviewed') > -1 ? 'true' : 'false',
    dccap_claude101_completed: milestoneNames.indexOf('Prerequisite 3a: Claude 101 completed') > -1 ? 'true' : 'false',
    dccap_fluency_completed: milestoneNames.indexOf('Prerequisite 3b: AI Fluency for Nonprofits completed') > -1 ? 'true' : 'false',
    dccap_governance_acknowledged: milestoneNames.indexOf('Governance framework acknowledged') > -1 ? 'true' : 'false'
  };

  // Extract certificate values from milestone details if available
  for (var k = 0; k < milestones.length; k++) {
    var m = milestones[k];
    if (m.details) {
      try {
        var det = typeof m.details === 'string' ? JSON.parse(m.details) : m.details;
        if (det.certificate) {
          if (m.milestone === 'Prerequisite 3a: Claude 101 completed') {
            progress.dccap_claude101_certificate = det.certificate;
          }
          if (m.milestone === 'Prerequisite 3b: AI Fluency for Nonprofits completed') {
            progress.dccap_fluency_certificate = det.certificate;
          }
        }
      } catch(parseErr) {
        // details wasn't valid JSON; skip
      }
    }
  }

  return jsonResponse({
    status: 'found',
    participant: name,
    progress: progress,
    milestones: milestoneNames
  });
}

// ==================== SURVEY HANDLER ====================
function handleSurvey(ss, data) {
  const sheet = ss.getSheetByName('survey_responses');
  if (!sheet) {
    return jsonResponse({ status: 'error', message: 'survey_responses tab not found' });
  }

  // Set up headers if this is the first entry
  if (sheet.getLastRow() === 0) {
    const headers = [
      'timestamp',
      'participant_name',
      'unit',
      'survey_date',
      'survey_mode',
      'governance_acknowledged',
      'ai_orientation_raw',
      'ai_orientation_max',
      'ai_orientation_pct',
      'learning_orientation_raw',
      'learning_orientation_max',
      'learning_orientation_pct',
      'current_ai_use_raw',
      'current_ai_use_max',
      'current_ai_use_pct',
      'ai_knowledge_raw',
      'ai_knowledge_max',
      'ai_knowledge_pct',
      'applied_skills_raw',
      'applied_skills_max',
      'applied_skills_pct',
      'applied_skills_taskA',
      'applied_skills_taskB',
      'overall_percentage',
      'fluency_level',
      'full_json'
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }

  const p = data.participant || {};
  p.name = normalizeName(p.name);
  const s = data.scores || {};

  // Calculate overall from SCORED constructs only (orientation profiles excluded)
  const scoredConstructs = ['currentAIUse', 'aiKnowledge', 'appliedSkills'];
  let totalPct = 0;
  let count = 0;
  scoredConstructs.forEach(c => {
    if (s[c] && s[c].percentage !== undefined) {
      totalPct += s[c].percentage;
      count++;
    }
  });
  const overallPct = count > 0 ? Math.round(totalPct / count) : 0;

  // Determine fluency level
  let level = 'Exploring';
  if (overallPct >= 80) level = 'Leading';
  else if (overallPct >= 60) level = 'Applying';
  else if (overallPct >= 40) level = 'Building';

  const row = [
    new Date().toISOString(),
    p.name || '',
    p.unit || '',
    p.date || '',
    p.surveyMode || '',
    p.governanceAcknowledged || false,
    s.aiOrientation?.raw || 0,
    s.aiOrientation?.max || 0,
    s.aiOrientation?.percentage || 0,
    s.learningOrientation?.raw || 0,
    s.learningOrientation?.max || 0,
    s.learningOrientation?.percentage || 0,
    s.currentAIUse?.raw || 0,
    s.currentAIUse?.max || 0,
    s.currentAIUse?.percentage || 0,
    s.aiKnowledge?.raw || 0,
    s.aiKnowledge?.max || 0,
    s.aiKnowledge?.percentage || 0,
    s.appliedSkills?.raw || 0,
    s.appliedSkills?.max || 0,
    s.appliedSkills?.percentage || 0,
    s.appliedSkills?.taskA || 0,
    s.appliedSkills?.taskB || 0,
    overallPct,
    level,
    JSON.stringify(data)
  ];

  sheet.appendRow(row);

  return jsonResponse({
    status: 'success',
    message: 'Survey response recorded',
    participant: p.name,
    overallScore: overallPct,
    fluencyLevel: level
  });
}

// ==================== MILESTONE HANDLER ====================
function handleMilestone(ss, data) {
  const sheet = ss.getSheetByName('milestones');
  if (!sheet) {
    return jsonResponse({ status: 'error', message: 'milestones tab not found' });
  }

  // Set up headers if this is the first entry
  if (sheet.getLastRow() === 0) {
    const headers = [
      'timestamp',
      'participant_name',
      'milestone',
      'phase',
      'page_source',
      'details'
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }

  // Normalize participant name for consistent matching
  data.participant_name = normalizeName(data.participant_name);

  // Check for duplicate: same participant + same milestone
  const existingData = sheet.getDataRange().getValues();
  for (let i = 1; i < existingData.length; i++) {
    if (existingData[i][1] === data.participant_name && existingData[i][2] === data.milestone) {
      return jsonResponse({
        status: 'duplicate',
        message: 'Milestone already recorded for this participant'
      });
    }
  }

  const row = [
    new Date().toISOString(),
    data.participant_name || '',
    data.milestone || '',
    data.phase || '',
    data.page_source || '',
    data.details || ''
  ];

  sheet.appendRow(row);

  return jsonResponse({
    status: 'success',
    message: 'Milestone recorded',
    participant: data.participant_name,
    milestone: data.milestone
  });
}

// ==================== WEEKLY CHECK-IN HANDLER ====================
function handleWeeklyCheckin(ss, data) {
  var sheet = ss.getSheetByName('weekly_checkins');
  if (!sheet) {
    // Auto-create the tab with headers
    sheet = ss.insertSheet('weekly_checkins');
    var headers = [
      'timestamp',
      'participant_name',
      'week_number',
      'q1_iteration_frequency',
      'q2_usage_confidence',
      'q3_biggest_win',
      'q4_biggest_struggle'
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }

  var name = normalizeName(data.participant_name);

  // Check for duplicate: same participant + same week
  var existing = sheet.getDataRange().getValues();
  for (var i = 1; i < existing.length; i++) {
    if (existing[i][1] === name && existing[i][2] === data.week_number) {
      // Update in place instead of duplicating
      var rowNum = i + 1;
      sheet.getRange(rowNum, 1).setValue(new Date().toISOString());
      sheet.getRange(rowNum, 4).setValue(data.q1_iteration_frequency || '');
      sheet.getRange(rowNum, 5).setValue(data.q2_usage_confidence || '');
      sheet.getRange(rowNum, 6).setValue(data.q3_biggest_win || '');
      sheet.getRange(rowNum, 7).setValue(data.q4_biggest_struggle || '');
      return jsonResponse({
        status: 'updated',
        message: 'Weekly check-in updated for this week',
        participant: name,
        week: data.week_number
      });
    }
  }

  var row = [
    new Date().toISOString(),
    name,
    data.week_number || 0,
    data.q1_iteration_frequency || '',
    data.q2_usage_confidence || '',
    data.q3_biggest_win || '',
    data.q4_biggest_struggle || ''
  ];

  sheet.appendRow(row);

  // Also record as a milestone for session resume
  handleMilestone(ss, {
    type: 'milestone',
    participant_name: name,
    milestone: 'Weekly check-in Week ' + data.week_number + ' submitted',
    phase: data.week_number <= 4 ? 'Phase 1: Foundation' : 'Phase 2: Application',
    page_source: 'weekly_checkin.html',
    details: JSON.stringify({ week: data.week_number })
  });

  return jsonResponse({
    status: 'success',
    message: 'Weekly check-in recorded',
    participant: name,
    week: data.week_number
  });
}

// ==================== UTILITY ====================

/**
 * Normalizes participant names for consistent deduplication.
 * Trims whitespace and converts to title case (e.g., "preston magouirk" -> "Preston Magouirk").
 */
function normalizeName(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().toLowerCase().replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

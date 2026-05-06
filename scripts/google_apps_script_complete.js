// ============================================================
// DC CAP AI Pilot — Google Apps Script Web App
// ============================================================
// SETUP INSTRUCTIONS:
// 1. Open your Google Sheet: DC CAP AI Governance Tracking
// 2. Go to Extensions > Apps Script
// 3. Select all existing code and replace with this entire file
// 4. Deploy > Manage deployments > pencil icon > bump version > Deploy
// ============================================================

const SPREADSHEET_ID    = '1efedt3aW103G2SdxPuBW7DiiFjfDXcJgiF9UuKoIaqQ';
const ANALYTICS_TOKEN   = 'analytics2026';
const FAKE_PARTICIPANTS = ['Lucas Spielfogel', 'Brian Kim', 'Brian Heseung Kim'];

// ==================== POST HANDLER ====================

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

// ==================== GET HANDLER ====================
// Handles two paths:
//   ?action=read&token=analytics2026  → returns all data for preston_analytics.html
//   ?participant=Name                 → returns session-resume progress for pilot_hub.html

function doGet(e) {
  var params   = (e && e.parameter) ? e.parameter : {};
  var action   = params.action      || '';
  var token    = params.token       || '';
  var name     = params.participant || '';
  var callback = params.callback    || '';

  // ── Analytics read path (used by preston_analytics.html) ──
  if (action === 'read' && token === ANALYTICS_TOKEN) {
    try {
      var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      var result = {
        status:           'ok',
        generated_at:     new Date().toISOString(),
        survey_responses: readSheet(ss, 'survey_responses', 'participant_name'),
        milestones:       readSheet(ss, 'milestones',       'participant_name'),
        weekly_checkins:  readSheet(ss, 'weekly_checkins',  'participant_name')
      };
      return ContentService
        .createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: err.message, status: 500 }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // ── Participant session-resume lookup path (used by pilot_hub.html) ──
  if (!name) {
    return jsonResponse({ status: 'ok', message: 'DC CAP AI Pilot tracking endpoint is live' });
  }

  try {
    if (callback) {
      var progressData = JSON.stringify(getProgressObject(name));
      return ContentService.createTextOutput(callback + '(' + progressData + ');')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return lookupParticipantProgress(name);
  } catch (err) {
    if (callback) {
      return ContentService.createTextOutput(
        callback + '(' + JSON.stringify({ status: 'error', message: err.toString() }) + ');'
      ).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

// ==================== ANALYTICS READ HELPER ====================

function readSheet(ss, sheetName, nameField) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  var headers = data[0].map(function(h) { return String(h).trim(); });
  return data.slice(1)
    .map(function(row) {
      var obj = {};
      headers.forEach(function(h, i) {
        obj[h] = (row[i] instanceof Date) ? row[i].toISOString() : row[i];
      });
      return obj;
    })
    .filter(function(row) {
      var n = String(row[nameField] || '').trim();
      return n !== '' && FAKE_PARTICIPANTS.indexOf(n) === -1;
    });
}

// ==================== SESSION RESUME ====================

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
    dccap_survey_completed:          hasSurvey ? 'true' : 'false',
    dccap_starthere_completed:       milestoneNames.indexOf('Start Here guide reviewed') > -1 ? 'true' : 'false',
    dccap_claude101_completed:       milestoneNames.indexOf('Prerequisite 3a: Claude 101 completed') > -1 ? 'true' : 'false',
    dccap_fluency_completed:         milestoneNames.indexOf('Prerequisite 3b: AI Fluency for Nonprofits completed') > -1 ? 'true' : 'false',
    dccap_governance_acknowledged:   milestoneNames.indexOf('Governance framework acknowledged') > -1 ? 'true' : 'false'
  };

  for (var k = 0; k < milestones.length; k++) {
    var m = milestones[k];
    if (m.details) {
      try {
        var det = typeof m.details === 'string' ? JSON.parse(m.details) : m.details;
        if (det.certificate) {
          if (m.milestone === 'Prerequisite 3a: Claude 101 completed')            progress.dccap_claude101_certificate = det.certificate;
          if (m.milestone === 'Prerequisite 3b: AI Fluency for Nonprofits completed') progress.dccap_fluency_certificate = det.certificate;
        }
      } catch(parseErr) {}
    }
  }

  return { status: 'found', participant: name, progress: progress, milestones: milestoneNames };
}

function lookupParticipantProgress(rawName) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var name = normalizeName(rawName);

  var milestoneSheet = ss.getSheetByName('milestones');
  var milestones = [];
  if (milestoneSheet && milestoneSheet.getLastRow() > 1) {
    var data = milestoneSheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (data[i][1] === name) {
        milestones.push({
          milestone: data[i][2],
          phase:     data[i][3],
          details:   data[i][5]
        });
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
    dccap_survey_completed:          hasSurvey ? 'true' : 'false',
    dccap_starthere_completed:       milestoneNames.indexOf('Start Here guide reviewed') > -1 ? 'true' : 'false',
    dccap_claude101_completed:       milestoneNames.indexOf('Prerequisite 3a: Claude 101 completed') > -1 ? 'true' : 'false',
    dccap_fluency_completed:         milestoneNames.indexOf('Prerequisite 3b: AI Fluency for Nonprofits completed') > -1 ? 'true' : 'false',
    dccap_governance_acknowledged:   milestoneNames.indexOf('Governance framework acknowledged') > -1 ? 'true' : 'false'
  };

  for (var k = 0; k < milestones.length; k++) {
    var m = milestones[k];
    if (m.details) {
      try {
        var det = typeof m.details === 'string' ? JSON.parse(m.details) : m.details;
        if (det.certificate) {
          if (m.milestone === 'Prerequisite 3a: Claude 101 completed')                progress.dccap_claude101_certificate = det.certificate;
          if (m.milestone === 'Prerequisite 3b: AI Fluency for Nonprofits completed') progress.dccap_fluency_certificate   = det.certificate;
        }
      } catch(parseErr) {}
    }
  }

  return jsonResponse({
    status:     'found',
    participant: name,
    progress:   progress,
    milestones: milestoneNames
  });
}

// ==================== SURVEY HANDLER ====================

function handleSurvey(ss, data) {
  const sheet = ss.getSheetByName('survey_responses');
  if (!sheet) {
    return jsonResponse({ status: 'error', message: 'survey_responses tab not found' });
  }

  if (sheet.getLastRow() === 0) {
    const headers = [
      'timestamp', 'participant_name', 'unit', 'survey_date', 'survey_mode',
      'governance_acknowledged',
      'ai_orientation_raw',      'ai_orientation_max',      'ai_orientation_pct',
      'learning_orientation_raw','learning_orientation_max','learning_orientation_pct',
      'current_ai_use_raw',      'current_ai_use_max',      'current_ai_use_pct',
      'ai_knowledge_raw',        'ai_knowledge_max',        'ai_knowledge_pct',
      'applied_skills_raw',      'applied_skills_max',      'applied_skills_pct',
      'applied_skills_taskA',    'applied_skills_taskB',
      'overall_percentage', 'fluency_level', 'full_json'
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }

  const p = data.participant || {};
  p.name = normalizeName(p.name);
  const s = data.scores || {};

  const scoredConstructs = ['currentAIUse', 'aiKnowledge', 'appliedSkills'];
  let totalPct = 0, count = 0;
  scoredConstructs.forEach(c => {
    if (s[c] && s[c].percentage !== undefined) { totalPct += s[c].percentage; count++; }
  });
  const overallPct = count > 0 ? Math.round(totalPct / count) : 0;

  let level = 'Exploring';
  if (overallPct >= 80)      level = 'Leading';
  else if (overallPct >= 60) level = 'Applying';
  else if (overallPct >= 40) level = 'Building';

  const row = [
    new Date().toISOString(),
    p.name || '', p.unit || '', p.date || '', p.surveyMode || '',
    p.governanceAcknowledged || false,
    s.aiOrientation?.raw        || 0, s.aiOrientation?.max        || 0, s.aiOrientation?.percentage        || 0,
    s.learningOrientation?.raw  || 0, s.learningOrientation?.max  || 0, s.learningOrientation?.percentage  || 0,
    s.currentAIUse?.raw         || 0, s.currentAIUse?.max         || 0, s.currentAIUse?.percentage         || 0,
    s.aiKnowledge?.raw          || 0, s.aiKnowledge?.max          || 0, s.aiKnowledge?.percentage          || 0,
    s.appliedSkills?.raw        || 0, s.appliedSkills?.max        || 0, s.appliedSkills?.percentage        || 0,
    s.appliedSkills?.taskA      || 0, s.appliedSkills?.taskB      || 0,
    overallPct, level, JSON.stringify(data)
  ];

  sheet.appendRow(row);

  return jsonResponse({
    status: 'success', message: 'Survey response recorded',
    participant: p.name, overallScore: overallPct, fluencyLevel: level
  });
}

// ==================== MILESTONE HANDLER ====================

function handleMilestone(ss, data) {
  const sheet = ss.getSheetByName('milestones');
  if (!sheet) {
    return jsonResponse({ status: 'error', message: 'milestones tab not found' });
  }

  if (sheet.getLastRow() === 0) {
    const headers = ['timestamp', 'participant_name', 'milestone', 'phase', 'page_source', 'details'];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }

  data.participant_name = normalizeName(data.participant_name);

  const existingData = sheet.getDataRange().getValues();
  for (let i = 1; i < existingData.length; i++) {
    if (existingData[i][1] === data.participant_name && existingData[i][2] === data.milestone) {
      return jsonResponse({ status: 'duplicate', message: 'Milestone already recorded for this participant' });
    }
  }

  sheet.appendRow([
    new Date().toISOString(),
    data.participant_name || '',
    data.milestone        || '',
    data.phase            || '',
    data.page_source      || '',
    data.details          || ''
  ]);

  return jsonResponse({
    status: 'success', message: 'Milestone recorded',
    participant: data.participant_name, milestone: data.milestone
  });
}

// ==================== WEEKLY CHECK-IN HANDLER ====================

function handleWeeklyCheckin(ss, data) {
  var sheet = ss.getSheetByName('weekly_checkins');
  if (!sheet) {
    sheet = ss.insertSheet('weekly_checkins');
    var headers = [
      'timestamp', 'participant_name', 'week_number',
      'q1_iteration_frequency', 'q2_usage_confidence',
      'q3_biggest_win', 'q4_biggest_struggle'
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }

  var name = normalizeName(data.participant_name);

  var existing = sheet.getDataRange().getValues();
  for (var i = 1; i < existing.length; i++) {
    if (existing[i][1] === name && existing[i][2] === data.week_number) {
      var rowNum = i + 1;
      sheet.getRange(rowNum, 1).setValue(new Date().toISOString());
      sheet.getRange(rowNum, 4).setValue(data.q1_iteration_frequency || '');
      sheet.getRange(rowNum, 5).setValue(data.q2_usage_confidence    || '');
      sheet.getRange(rowNum, 6).setValue(data.q3_biggest_win         || '');
      sheet.getRange(rowNum, 7).setValue(data.q4_biggest_struggle    || '');
      return jsonResponse({
        status: 'updated', message: 'Weekly check-in updated for this week',
        participant: name, week: data.week_number
      });
    }
  }

  sheet.appendRow([
    new Date().toISOString(), name, data.week_number || 0,
    data.q1_iteration_frequency || '', data.q2_usage_confidence || '',
    data.q3_biggest_win         || '', data.q4_biggest_struggle || ''
  ]);

  handleMilestone(ss, {
    type:             'milestone',
    participant_name: name,
    milestone:        'Weekly check-in Week ' + data.week_number + ' submitted',
    phase:            data.week_number <= 4 ? 'Phase 1: Foundation' : 'Phase 2: Application',
    page_source:      'weekly_checkin.html',
    details:          JSON.stringify({ week: data.week_number })
  });

  return jsonResponse({
    status: 'success', message: 'Weekly check-in recorded',
    participant: name, week: data.week_number
  });
}

// ==================== UTILITY ====================

function normalizeName(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().toLowerCase().replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

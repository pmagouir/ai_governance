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
    } else {
      return jsonResponse({ status: 'error', message: 'Unknown data type' });
    }
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

function doGet(e) {
  // Allow GET requests to check if the endpoint is live
  return jsonResponse({ status: 'ok', message: 'DC CAP AI Pilot tracking endpoint is live' });
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

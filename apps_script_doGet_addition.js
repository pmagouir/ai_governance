// ============================================================
// ADDITION TO EXISTING APPS SCRIPT
// Paste this BELOW your existing doPost function in the Google
// Sheets Apps Script editor (Extensions > Apps Script)
// After pasting, re-deploy the web app (Deploy > Manage deployments
// > click pencil icon > bump version > Deploy)
// ============================================================

// Admin token for analytics read access.
// This must match the password used on the preston_analytics.html page.
const ANALYTICS_TOKEN = 'analytics2026';

// Participants to exclude from all analytics (test/fake accounts)
const FAKE_PARTICIPANTS = ['Lucas Spielfogel', 'Brian Kim', 'Brian Heseung Kim'];

/**
 * doGet — handles GET requests to the web app endpoint.
 * Called by preston_analytics.html to pull live data.
 *
 * Usage: GET ?action=read&token=analytics2026
 */
function doGet(e) {
  const params = (e && e.parameter) ? e.parameter : {};
  const action = params.action || '';
  const token  = params.token  || '';

  // Reject unauthorized requests immediately
  if (action !== 'read' || token !== ANALYTICS_TOKEN) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: 'Unauthorized', status: 401 }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const surveyData   = readSheet(ss, 'survey_responses', 'participant_name');
    const milestones   = readSheet(ss, 'milestones',       'participant_name');
    const checkins     = readSheet(ss, 'weekly_checkin',   'participant_name');

    const result = {
      status:           'ok',
      generated_at:     new Date().toISOString(),
      survey_responses: surveyData,
      milestones:       milestones,
      weekly_checkins:  checkins
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

/**
 * Reads a sheet by name, converts to array of objects,
 * and filters out fake/test participants.
 *
 * @param {Spreadsheet} ss         - Active spreadsheet
 * @param {string}      sheetName  - Tab name
 * @param {string}      nameField  - Column header that holds participant name
 * @returns {Array<Object>}
 */
function readSheet(ss, sheetName, nameField) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];

  const headers = data[0].map(h => String(h).trim());
  const rows    = data.slice(1);

  return rows
    .map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        // Convert Date objects to ISO strings so JSON.stringify handles them
        const val = row[i];
        obj[h] = (val instanceof Date) ? val.toISOString() : val;
      });
      return obj;
    })
    .filter(row => {
      const name = String(row[nameField] || '').trim();
      return name !== '' && !FAKE_PARTICIPANTS.includes(name);
    });
}

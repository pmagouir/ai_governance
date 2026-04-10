# Portfolio Summary Implementation Checklist

**Status:** Ready for April 18, 2026 (Task 2 Assessment Deadline)

---

## DELIVERABLES COMPLETED

### 1. Format Specification Document
- **File:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills_v3/PORTFOLIO_FORMAT.md`
- **Content:**
  - Design principles (scannability, 5-minute read, multi-audience)
  - Section-by-section breakdown (Header, Snapshot, Story, Reflection, Facilitator Insight)
  - Format examples for each task type (Tasks 1-4)
  - Multi-task comparison structure (for Tasks 2, 3, 4)
  - Rendering and output specifications
  - Accessibility guidelines
  - Version history
- **Use:** Reference document for facilitators creating summaries; shared with participants

### 2. Updated Render Script
- **File:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills/render_portfolio.js`
- **Changes:**
  - Added `mode` parameter to CLI (summary | full)
  - New function `renderSummaryPortfolio()` for compact 1-2 page format
  - Preserved `renderFullPortfolio()` for legacy full portfolios
  - Backwards compatible with old JSON structure
  - Automatic performance snapshot generation from growth trajectory (fallback)
  - Updated documentation in header comments
- **Testing:** Verified on sample data; both summary and full modes working

### 3. Sample Portfolio Summary JSON
- **File:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills_v3/sample_portfolio_summary.json`
- **Content:** Complete example for Task 2 participant (Marcus Chen, Data & Technology unit)
- **Includes:**
  - `performanceSnapshot` with 4 dimensions, levels, and evidence sentences
  - `growthStory` (5 sentences on Task 1 → Task 2 transfer)
  - `reflection` (prompt + 2-sentence response)
  - `facilitatorNotes` (pattern + discussion question)
  - `multiTaskComparison` (Task 1 → Task 2 trajectory)
- **Use:** Template for facilitators building their own summaries

### 4. Sample Rendered Output
- **File:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills/sample_portfolio_summary.docx`
- **Characteristics:**
  - 12 KB, 2 pages, branded with DC CAP colors
  - Navy header bar with white text
  - Purple section headers
  - Navy table headers with alternating row shading
  - Optimized for printing and email distribution
- **Use:** Show participants what their summary will look like

### 5. Implementation Guide
- **File:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills/README_PORTFOLIO_SUMMARY.md`
- **Content:**
  - Overview of changes (before/after comparison)
  - Complete JSON input structure with examples
  - Rendering instructions (CLI usage, output format)
  - Workflow integration (how it fits into assessment process)
  - Facilitator best practices (growth stories, discussion questions)
  - FAQ and troubleshooting
  - Timeline and rollout plan
- **Use:** Facilitator reference; sent to assessors before Task 2

---

## KEY METRICS

| Metric | Value |
|--------|-------|
| **Old Portfolio Length** | 15-20 pages (full submission + assessment + revision + trajectory) |
| **New Summary Length** | 1-2 pages (snapshot + story + reflection + insight) |
| **Page Reduction** | ~85% (from 15-20 to 1-2 pages) |
| **Old Read Time** | 15-20 minutes per portfolio |
| **New Read Time** | 5 minutes per portfolio |
| **Old File Size** | 14 KB |
| **New File Size** | 12 KB |
| **Number of Sections** | 5 core sections (Header, Snapshot, Story, Reflection, Facilitator Insight) |
| **Number of Tasks** | 4 (Guided, Supported, Independent, Capstone) |
| **Expected Cohort Portfolios by June 10** | 40 (10 participants × 4 tasks) |

---

## FORMAT COMPARISON BY TASK

| Task | Name | Duration | Key Dimensions | Expected Summary Length |
|------|------|----------|-----------------|------------------------|
| **1** | The Guided Pipeline | Week 1-2 | Diligence, Description, Delegation, Discernment | 1 page |
| **2** | The Supported Pipeline | Week 3-4 | + Real Governance, Prompt Quality | 1-1.5 pages |
| **3** | The Independent Pipeline | Week 5-6 | + Governance at Scale, Prompt Evolution | 1.5-2 pages |
| **4** | The Capstone | Week 7-8 | + Strategic Vision, Leadership Application | 2 pages |

---

## PRODUCTION WORKFLOW (Starting April 18)

### Timeline

**April 18, 2026 — Task 2 Assessment Complete**
- [ ] Facilitator completes assessment for all 10 participants
- [ ] Facilitator extracts performance data for each participant
- [ ] Creates JSON file for each participant using `sample_portfolio_summary.json` as template

**April 19-20, 2026 — Summary Creation**
- [ ] Facilitator renders all 10 summaries using render script
- [ ] Reviews each .docx file for accuracy and formatting
- [ ] Stores JSON files with assessment records
- [ ] Saves .docx files in shared portfolio folder

**April 21, 2026 — Peer Sharing**
- [ ] Email summaries to cohort for peer review and discussion
- [ ] Print physical copies for upcoming facilitated discussion session
- [ ] Participants review peer work; reflect on comparative learning

**April 25, 2026 — Cohort Discussion**
- [ ] Facilitator leads 60-minute cohort discussion using peer summaries
- [ ] Use facilitator discussion questions as conversation starters
- [ ] Identify patterns and peer learning opportunities

**May 10, 2026 — Celebration Event**
- [ ] Print all completed task summaries to date
- [ ] Display on tables for recognition and reflection
- [ ] Participants walk through peer portfolios; celebrate progress

**June 10, 2026 — Pilot Complete**
- [ ] All 40 task summaries (10 participants × 4 tasks) completed and archived
- [ ] Full portfolios also on file for formal records and KPMG review
- [ ] Board briefing includes 4-5 exemplar summaries as evidence of learning

---

## FACILITATOR STEP-BY-STEP GUIDE

### Step 1: Extract Data After Assessment (5 min per participant)
Collect from your assessment notes:
- Task name and number
- Participant name and unit assignment
- Competency dimensions (use rubric dimensions)
- Final assessment level on each dimension
- 1-2 sentence evidence for each dimension
- 3-5 sentence growth narrative
- Reflection prompt + response
- Pattern observation + discussion question

### Step 2: Populate JSON (10 min per participant)
Use the template in `sample_portfolio_summary.json`:
```json
{
  "taskNumber": [number],
  "taskName": "[Task name from SKILL.md metadata]",
  "competency": "[Dimensions from rubric]",
  "week": "[Week range]",
  "participantName": "[First + Last name]",
  "unit": "[Unit assignment from cohort list]",
  "date": "[Assessment completion date]",
  "sections": {
    "performanceSnapshot": [
      {"dimension": "...", "level": "...", "evidence": "..."},
      ...
    ],
    "growthStory": "...",
    "reflection": {"prompt": "...", "response": "..."},
    "facilitatorNotes": {"pattern": "...", "discussionQuestion": "..."},
    "multiTaskComparison": "[Optional, for Tasks 2+]"
  }
}
```

### Step 3: Render Portfolio (1 min per participant)
```bash
node render_portfolio.js portfolio_2_chen_may-01-2026.json chen_task2_summary.docx summary
```

### Step 4: Review & Store (5 min per participant)
- Open .docx in Word or Google Docs
- Verify content is accurate and formatting looks good
- Store JSON file with assessment records
- Save .docx file in `portfolios/task-2/` folder

### Step 5: Distribute (One-time)
```bash
# Email all summaries to cohort
for file in portfolios/task-2/*.docx; do
  # Send email to participants with attachment
done
```

---

## JSON VALIDATION CHECKLIST

Before rendering, verify your JSON includes:

- [ ] `taskNumber` (integer: 1, 2, 3, or 4)
- [ ] `taskName` (string, matches SKILL.md metadata)
- [ ] `competency` (string, comma-separated dimensions)
- [ ] `week` (string, e.g., "3-4 (April 18-May 1, 2026)")
- [ ] `participantName` (string, First Last format)
- [ ] `unit` (string, one of 6 DC CAP units)
- [ ] `date` (string, ISO or readable format)
- [ ] `sections.performanceSnapshot` (array of 4 objects)
  - [ ] Each has: `dimension`, `level` (Exceeds/Meets/Approaching/Below), `evidence`
- [ ] `sections.growthStory` (string, 3-5 sentences)
- [ ] `sections.reflection` (object with `prompt` and `response`)
- [ ] `sections.facilitatorNotes` (object with `pattern` and `discussionQuestion`)
- [ ] [Optional] `sections.multiTaskComparison` (string, for Tasks 2+)

---

## QUICK REFERENCE: CLI COMMANDS

### Render a summary portfolio
```bash
node render_portfolio.js input.json output.docx summary
```

### Render a full portfolio (legacy)
```bash
node render_portfolio.js input.json output.docx full
```

### Default to summary mode
```bash
node render_portfolio.js input.json output.docx
```

### Test the sample
```bash
cd /sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills
node render_portfolio.js /sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills_v3/sample_portfolio_summary.json test_output.docx summary
```

---

## QUALITY CHECKLIST FOR FACILITATORS

Before sending portfolios to cohort:

- [ ] **Accuracy:** All facts verified against assessment record
- [ ] **Specificity:** Evidence sentences reference specific work, not generic praise
- [ ] **Growth Narrative:** Explains what was learned, not just what was done
- [ ] **Peer Relevance:** Discussion question invites others to reflect on their own practice
- [ ] **Tone:** Celebratory and strengths-focused while identifying growth edges
- [ ] **Clarity:** No jargon without explanation; all framework terminology defined
- [ ] **Length:** Each section fits target word count (snapshot: 1-2 sentences; story: 3-5; reflection: 2-3)

---

## TROUBLESHOOTING

**Q: Script returns "Input file not found"**
A: Verify the file path is absolute and file exists: `ls [full-path-to-file]`

**Q: PDF fonts look wrong in output**
A: This is a .docx file, not PDF. Open in Word or Google Docs. Fonts should render correctly.

**Q: I want to customize the colors**
A: Edit the `COLORS` object at the top of `render_portfolio.js` (lines 34-40). DC CAP brand colors are:
- `navy: '101A4C'` (header background)
- `purple: '8352FF'` (section headers)
- `blue: '87B7D5'` (accent, not currently used)
- `tan: 'FFF4ED'` (alternating row color)
- `white: 'FFFFFF'`

**Q: How do I print for the celebration?**
A: Open .docx file in Word or Google Docs, then Print. Recommended: 8.5×11 white paper, color printing for header visibility, double-sided printing to save paper.

**Q: Can I batch render multiple portfolios?**
A: Yes, create a bash script:
```bash
#!/bin/bash
for json_file in *.json; do
  docx_file="${json_file%.json}.docx"
  node render_portfolio.js "$json_file" "$docx_file" summary
done
```

---

## ROLLOUT TIMELINE

| Date | Milestone | Owner | Action |
|------|-----------|-------|--------|
| Apr 10 | Format & Script Ready | Agent | All deliverables complete; documentation finalized |
| Apr 15 | Facilitator Briefing | Facilitator | Review README and format guide; understand workflow |
| Apr 18 | Task 2 Assessment Complete | Facilitator | Begin portfolio summary creation |
| Apr 19-20 | Summaries Rendered | Facilitator | All 10 summaries created and reviewed |
| Apr 21 | Peer Distribution | Facilitator | Email summaries to cohort for peer review |
| Apr 25 | Cohort Discussion | Facilitator | Lead 60-minute discussion using peer summaries |
| May 1 | Task 3 Begins | Participants | With Task 2 summaries in hand, move to Task 3 |
| May 10 | Celebration Event | All | Print and display summaries; celebrate progress |
| Jun 10 | Pilot Complete | All | All 40 portfolios (10 × 4 tasks) completed |

---

## SUPPORTING MATERIALS

**For facilitators:**
- `PORTFOLIO_FORMAT.md` — Complete format specification
- `README_PORTFOLIO_SUMMARY.md` — Implementation guide with FAQ
- `sample_portfolio_summary.json` — Example JSON data
- `sample_portfolio_summary.docx` — Example rendered output
- `render_portfolio.js` — Rendering script (updated)

**For participants:**
- Share the rendered .docx file (example output shows what their summary will look like)
- Brief explanation: "Your summary will be 1-2 pages showing your performance, growth, and key insights — designed to be shared with peers and discussed at our celebration"

**For KPMG reviewers:**
- 4-5 exemplar summaries showing learning progression (Task 1, Task 2, Task 3, Task 4)
- Complete assessment records available on request
- Aggregate metrics: 10 participants, 4 tasks each, competency development tracked

---

## SUCCESS METRICS

By **June 10, 2026**, we will have:

- [ ] **40 portfolio summaries** (10 participants × 4 tasks) in branded format
- [ ] **100% peer engagement** with peer portfolios (observed in cohort discussions)
- [ ] **Facilitator reports** of improved peer discussion quality (vs. without summaries)
- [ ] **Participant feedback** that summaries helped them understand their own learning
- [ ] **KPMG confidence** in learning outcome assessment (via summary samples)
- [ ] **Reusable asset library** of exemplar summaries for future cohorts

---

**Prepared by:** Claude Code Agent | **For:** DC CAP AI Leadership Training Pilot | **Date:** April 10, 2026

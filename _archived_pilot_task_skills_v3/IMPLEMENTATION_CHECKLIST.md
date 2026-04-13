# Portfolio Summary Implementation Checklist

**Status:** Ready for April 24, 2026 (Task 1 Assessment Deadline)

---

## DELIVERABLES COMPLETED

### 1. Format Specification Document
- **File:** `PORTFOLIO_FORMAT.md`
- **Content:**
  - Design principles (scannability, 5-minute read, multi-audience)
  - Section-by-section breakdown (Header, Snapshot, Story, Reflection, Facilitator Insight)
  - Format examples for each task type (Tasks 1-4 + Capstone)
  - Multi-task comparison structure (for Tasks 2, 3, 4, Capstone)
  - Rendering and output specifications
  - Accessibility guidelines
  - Version history
- **Use:** Reference document for facilitators creating summaries; shared with participants

### 2. Updated Render Script
- **File:** `render_portfolio.js`
- **Changes:**
  - Added `mode` parameter to CLI (summary | full)
  - New function `renderSummaryPortfolio()` for compact 1-2 page format
  - Preserved `renderFullPortfolio()` for legacy full portfolios
  - Backwards compatible with old JSON structure
  - Automatic performance snapshot generation from growth trajectory (fallback)
  - Updated documentation in header comments
- **Testing:** Verified on sample data; both summary and full modes working

### 3. Sample Portfolio Summary JSON
- **File:** `sample_portfolio_summary.json`
- **Content:** Complete example for Task 1 participant
- **Includes:**
  - `performanceSnapshot` with 4 dimensions, levels, and evidence sentences
  - `growthStory` (3-5 sentences)
  - `reflection` (prompt + 2-sentence response)
  - `facilitatorNotes` (pattern + discussion question)
- **Use:** Template for facilitators building their own summaries

### 4. Sample Rendered Output
- **File:** `sample_portfolio_summary.docx`
- **Characteristics:**
  - 12 KB, 1-2 pages, branded with DC CAP colors
  - Navy header bar with white text
  - Purple section headers
  - Navy table headers with alternating row shading
  - Optimized for printing and email distribution
- **Use:** Show participants what their summary will look like

### 5. Implementation Guide
- **File:** `README_PORTFOLIO_SUMMARY.md`
- **Content:**
  - Overview of changes (before/after comparison)
  - Complete JSON input structure with examples
  - Rendering instructions (CLI usage, output format)
  - Workflow integration (how it fits into assessment process)
  - Facilitator best practices (growth stories, discussion questions)
  - FAQ and troubleshooting
  - Timeline and rollout plan
- **Use:** Facilitator reference; sent to assessors before Task 1

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
| **Number of Tasks** | 5 (CLASSIFY, CREATE, CRITIQUE, STRATEGIZE, Capstone TEACH) |
| **Expected Cohort Portfolios by June 12** | 50 (10 participants x 5 tasks) |

---

## FORMAT COMPARISON BY TASK

| Task | Name | Duration | Key Dimensions | Key Deliverables | Expected Summary Length |
|------|------|----------|----------------|------------------|------------------------|
| **1** | CLASSIFY: The Governance Classifier | Weeks 2-3 | Classification Accuracy, Boundary Reasoning, Combination Awareness, Governance Operationalization | Classification Memo + Quick-Reference Card | 1 page |
| **2** | CREATE: The Workflow Designer | Weeks 3-4 | Design Completeness, Execution Quality, Edit Layer Rigor, Plan-vs-Reality Insight | Workflow Design + Execution Record + Plan-vs-Reality | 1-1.5 pages |
| **3** | CRITIQUE: The Quality Auditor | Weeks 5-6 | Error Detection Accuracy, Severity Calibration, Self-Audit Depth, Corrective Transfer | Planted Error Audit + Self-Audit + Prompt Improvement Memo | 1.5-2 pages |
| **4** | STRATEGIZE: The Deployment Strategist | Weeks 6-7 | Task Mapping Quality, ROI Reasoning, Implementation Feasibility, Cross-Unit Awareness | Deployment Map + Strategic Triage + Q3 Rollout Plan | 2 pages |
| **Cap** | TEACH: The Pilot Portfolio | Weeks 7-8 | Use Case Impact, Self-Assessment Calibration, Teaching Module/Proposal Quality, Growth Narrative Coherence | My Pilot Journey + Use Case + 2D Self-Assessment (Diligence + Delegation) + Teaching Module OR Proposals | 2-2.5 pages |

---

## PRODUCTION WORKFLOW

### Timeline

**April 24, 2026 — Task 1 (CLASSIFY) Assessment Complete**
- [ ] Facilitator completes assessment for all 10 participants
- [ ] Facilitator extracts performance data for each participant
- [ ] Creates JSON file for each participant using `sample_portfolio_summary.json` as template
- [ ] Dimensions: Classification Accuracy, Boundary Reasoning, Combination Awareness, Governance Operationalization

**April 25-26, 2026 — Task 1 Summary Creation**
- [ ] Facilitator renders all 10 summaries using render script
- [ ] Reviews each .docx file for accuracy and formatting
- [ ] Stores JSON files with assessment records
- [ ] Saves .docx files in shared portfolio folder

**April 28, 2026 — Task 1 Peer Sharing**
- [ ] Email summaries to cohort for peer review and discussion
- [ ] Print physical copies for upcoming facilitated discussion session
- [ ] Participants review peer work; reflect on comparative learning

**May 1, 2026 — Task 2 (CREATE) Assessment Complete**
- [ ] Dimensions: Design Completeness, Execution Quality, Edit Layer Rigor, Plan-vs-Reality Insight
- [ ] Multi-task comparison: Task 1 CLASSIFY -> Task 2 CREATE trajectory
- [ ] Render summaries, distribute to cohort

**May 15, 2026 — Task 3 (CRITIQUE) Assessment Complete**
- [ ] Dimensions: Error Detection Accuracy, Severity Calibration, Self-Audit Depth, Corrective Transfer
- [ ] Multi-task comparison: CLASSIFY -> CREATE -> CRITIQUE trajectory
- [ ] Render summaries, distribute to cohort

**May 29, 2026 — Task 4 (STRATEGIZE) Assessment Complete**
- [ ] Dimensions: Task Mapping Quality, ROI Reasoning, Implementation Feasibility, Cross-Unit Awareness
- [ ] Multi-task comparison: CLASSIFY -> CREATE -> CRITIQUE -> STRATEGIZE trajectory
- [ ] Render summaries, distribute to cohort

**June 12, 2026 — Capstone (TEACH) Assessment Complete**
- [ ] Dimensions: Use Case Impact, Self-Assessment Calibration, Teaching Module/Proposal Quality, Growth Narrative Coherence
- [ ] Full pilot trajectory: CLASSIFY -> CREATE -> CRITIQUE -> STRATEGIZE -> TEACH
- [ ] Render summaries, prepare for celebration

**June 12-15, 2026 — Celebration Event**
- [ ] Print all completed task summaries
- [ ] Display on tables for recognition and reflection
- [ ] Participants walk through peer portfolios; celebrate progress

**June 15, 2026 — Pilot Complete**
- [ ] All 50 task summaries (10 participants x 5 tasks) completed and archived
- [ ] Full portfolios also on file for formal records and KPMG review
- [ ] Board briefing includes 5-6 exemplar summaries as evidence of learning

---

## FACILITATOR STEP-BY-STEP GUIDE

### Step 1: Extract Data After Assessment (5 min per participant)
Collect from your assessment notes:
- Task name and number (CLASSIFY, CREATE, CRITIQUE, STRATEGIZE, or TEACH)
- Participant name and unit assignment
- Task-specific dimensions (use rubric dimensions from the task's SKILL.md)
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
  "competency": "[Task-specific dimensions from rubric]",
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

**Dimension names by task:**
- Task 1: Classification Accuracy, Boundary Reasoning, Combination Awareness, Governance Operationalization
- Task 2: Design Completeness, Execution Quality, Edit Layer Rigor, Plan-vs-Reality Insight
- Task 3: Error Detection Accuracy, Severity Calibration, Self-Audit Depth, Corrective Transfer
- Task 4: Task Mapping Quality, ROI Reasoning, Implementation Feasibility, Cross-Unit Awareness
- Capstone: Use Case Impact, Self-Assessment Calibration, Teaching Module Completeness, Demo/Proposal Quality + Growth Narrative Coherence

### Step 3: Render Portfolio (1 min per participant)
```bash
node render_portfolio.js portfolio_1_williams_apr-24-2026.json williams_task1_summary.docx summary
```

### Step 4: Review & Store (5 min per participant)
- Open .docx in Word or Google Docs
- Verify content is accurate and formatting looks good
- Store JSON file with assessment records
- Save .docx file in `portfolios/task-1-classify/` folder

### Step 5: Distribute (One-time)
```bash
# Email all summaries to cohort
for file in portfolios/task-1-classify/*.docx; do
  # Send email to participants with attachment
done
```

---

## JSON VALIDATION CHECKLIST

Before rendering, verify your JSON includes:

- [ ] `taskNumber` (integer: 1, 2, 3, 4, or 5)
- [ ] `taskName` (string, matches SKILL.md metadata)
- [ ] `competency` (string, comma-separated task-specific dimensions)
- [ ] `week` (string, e.g., "2-3 (April 13-24, 2026)")
- [ ] `participantName` (string, First Last format)
- [ ] `unit` (string, one of 6 DC CAP units)
- [ ] `date` (string, ISO or readable format)
- [ ] `sections.performanceSnapshot` (array of 4 objects)
  - [ ] Each has: `dimension`, `level` (Exceeds/Meets/Approaching/Below), `evidence`
  - [ ] Dimension names match the task's rubric (see dimension names by task above)
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

---

## QUALITY CHECKLIST FOR FACILITATORS

Before sending portfolios to cohort:

- [ ] **Accuracy:** All facts verified against assessment record
- [ ] **Specificity:** Evidence sentences reference specific work, not generic praise
- [ ] **Dimension Names:** Using the correct task-specific dimension names (not generic 4D labels)
- [ ] **Growth Narrative:** Explains what was learned, not just what was done
- [ ] **Cross-Task Reference:** For Tasks 2+, connects to prior task performance
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
A: Open .docx file in Word or Google Docs, then Print. Recommended: 8.5x11 white paper, color printing for header visibility, double-sided printing to save paper.

**Q: Can I batch render multiple portfolios?**
A: Yes, create a bash script:
```bash
#!/bin/bash
for json_file in *.json; do
  docx_file="${json_file%.json}.docx"
  node render_portfolio.js "$json_file" "$docx_file" summary
done
```

**Q: Which dimension names do I use for each task?**
A: Use the task-specific dimension names, not the 4D competency names. See the "Dimension names by task" reference in Step 2 above. For portfolio display, add the primary 4D competency in parentheses (e.g., "Classification Accuracy (Diligence)").

---

## ROLLOUT TIMELINE

| Date | Milestone | Owner | Action |
|------|-----------|-------|--------|
| Apr 11 | Format & Script Ready | Agent | All deliverables complete; documentation finalized |
| Apr 15 | Facilitator Briefing | Facilitator | Review README and format guide; understand workflow |
| Apr 24 | Task 1 CLASSIFY Assessment Complete | Facilitator | Begin portfolio summary creation |
| Apr 25-26 | Task 1 Summaries Rendered | Facilitator | All 10 summaries created and reviewed |
| Apr 28 | Task 1 Peer Distribution | Facilitator | Email summaries to cohort for peer review |
| May 1 | Task 2 CREATE Assessment Complete | Facilitator | Render Task 2 summaries with cross-task comparison |
| May 15 | Task 3 CRITIQUE Assessment Complete | Facilitator | Render Task 3 summaries with 3-task trajectory |
| May 29 | Task 4 STRATEGIZE Assessment Complete | Facilitator | Render Task 4 summaries with 4-task trajectory |
| Jun 12 | Capstone TEACH Assessment Complete | Facilitator | Render capstone summaries with full pilot trajectory |
| Jun 12-15 | Celebration Event | All | Print and display summaries; celebrate progress |
| Jun 15 | Pilot Complete | All | All 50 portfolios (10 x 5 tasks) completed |

---

## SUPPORTING MATERIALS

**For facilitators:**
- `PORTFOLIO_FORMAT.md` — Complete format specification
- `DIMENSION_GLOSSARY.md` — Task-specific dimension names and 4D competency mapping
- `DESIGN_RATIONALE.md` — Architecture rationale and design decisions
- `sample_portfolio_summary.json` — Example JSON data
- `sample_portfolio_summary.docx` — Example rendered output
- `render_portfolio.js` — Rendering script (updated)

**For participants:**
- Share the rendered .docx file (example output shows what their summary will look like)
- Brief explanation: "Your summary will be 1-2 pages showing your performance, growth, and key insights — designed to be shared with peers and discussed at our celebration"

**For KPMG reviewers:**
- 5-6 exemplar summaries showing learning progression (CLASSIFY, CREATE, CRITIQUE, STRATEGIZE, TEACH)
- Complete assessment records available on request
- Aggregate metrics: 10 participants, 5 tasks each, competency development tracked across cognitive demand types

---

## SUCCESS METRICS

By **June 15, 2026**, we will have:

- [ ] **50 portfolio summaries** (10 participants x 5 tasks) in branded format
- [ ] **100% peer engagement** with peer portfolios (observed in cohort discussions)
- [ ] **Facilitator reports** of improved peer discussion quality (vs. without summaries)
- [ ] **Participant feedback** that summaries helped them understand their own learning
- [ ] **KPMG confidence** in learning outcome assessment (via summary samples)
- [ ] **Reusable asset library** of exemplar summaries for future cohorts

---

**Prepared by:** Claude Code Agent | **For:** DC CAP AI Leadership Training Pilot | **Date:** April 11, 2026

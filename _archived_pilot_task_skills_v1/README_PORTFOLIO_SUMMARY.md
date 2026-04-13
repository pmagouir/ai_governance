# DC CAP Portfolio Summary Format — Implementation Guide

**Date:** April 10, 2026 | **Version:** 1.0

---

## OVERVIEW

The portfolio summary format redesigns how participant learning is captured, shared, and celebrated in the DC CAP AI Leadership Training pilot. Instead of 15-20 page portfolios that few people read, the new format produces **1-2 page summaries** that work for:

- **Peer cohort sharing** — Circulate among participants for mutual accountability and learning
- **Facilitator discussion** — Quick pattern recognition and peer learning questions
- **KPMG review** — Assessment of learning outcomes and governance competency development
- **Board visibility** — Celebration materials showing pilot impact

---

## KEY CHANGES

### Before (Full Portfolio)
- 15-20 pages per participant per task
- Included verbatim initial submission + full assessment + full revision + growth analysis
- Designed for completeness, not readability
- No differentiation between what matters to peers vs. reviewers

### After (Summary Portfolio)
- 1-2 pages per participant per task
- Includes performance snapshot + growth narrative + reflection + facilitator insight
- Designed for impact and action
- Full work available in appendix or on request; summary is the public face

---

## FORMAT SPECIFICATION

The portfolio summary has **5 core sections** (see `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills_v3/PORTFOLIO_FORMAT.md` for complete details):

### Section 1: Header Block
```
TASK: [Task Name] | PARTICIPANT: [Name] | UNIT: [Unit] | DATE: [Date]
COMPETENCIES: [Framework dimensions]
WEEK: [Week Range] | ASSESSMENT LEVEL: [Exceeds/Meets/Approaching/Below]
```

### Section 2: Performance Snapshot
A 4-row table showing:
- Dimension name
- Final level achieved
- 1-2 sentence key evidence

| Dimension | Level | Evidence |
|-----------|-------|----------|
| Real Governance | Meets | Classification was accurate; caught small-cell re-identification risk. |
| CTCC Prompt Quality | Meets | All four components present; governance constraints embedded. |
| Modality Judgment | Exceeds | Clear separation of human vs. AI roles; data governance verified by human. |
| Output Audit Rigor | Meets | Documented edits with tags and rationales; governance compliance verified. |

### Section 3: Growth Story
3-5 sentence narrative explaining:
- What was the main learning gap?
- What improved in revision (if applicable)?
- What's the transferable insight?
- For Tasks 2+: How does this compare to prior task performance?

### Section 4: Participant Reflection
Data-grounded reflection prompt + participant response (2-3 sentences). Example:

**Prompt:** "Task 1 was theory with an answer key; Task 2 was real work with no safety net. What was different?"

**Response:** "Real data made it concrete. I know our funder relationships, I know which institutions have small populations. All that context meant I wasn't memorizing tier definitions — I was mapping our actual risks."

### Section 5: Facilitator Insight
Two elements:
1. **Pattern:** Sentence describing what you observe about their learning
2. **Discussion Question:** Question for peer cohort learning

Example:
```
Pattern: Transfers Task 1 framework to real work with confidence. 
Governance classification remains accurate; prompt design is solid 
on first pass. Growth edge is iterative refinement.

Discussion Question: Marcus classified real data faster than the 
scenario. What made real data easier? Can we build that confidence 
into how we approach new governance challenges?
```

---

## JSON INPUT STRUCTURE

Create a JSON file with this structure to render a portfolio summary:

```json
{
  "taskNumber": 2,
  "taskName": "The Supported Pipeline: Real Work, Structured Checkpoints",
  "competency": "Diligence, Description, Delegation, Discernment",
  "week": "3-4 (April 18-May 1, 2026)",
  "participantName": "Marcus Chen",
  "unit": "Data & Technology",
  "date": "May 1, 2026",
  "successCriteria": "Apply the 4D pipeline to a real DC CAP task with no answer key.",
  "sections": {
    "performanceSnapshot": [
      {
        "dimension": "Real Governance",
        "level": "Meets",
        "evidence": "Correctly classified funder data request as Tier 2; identified re-identification pathway."
      },
      {
        "dimension": "CTCC Prompt Quality",
        "level": "Meets",
        "evidence": "Prompt included all four components; governance constraints explicitly embedded."
      },
      {
        "dimension": "Modality Judgment",
        "level": "Exceeds",
        "evidence": "Selected Automation + Augmentation; clear why data governance verification is human-only."
      },
      {
        "dimension": "Output Audit Rigor",
        "level": "Meets",
        "evidence": "Documented six edits with tags; all tied to governance or prompt clarity."
      }
    ],
    "growthStory": "Task 1 gave you the framework; Task 2 tested it on real work... [3-5 sentences]",
    "reflection": {
      "prompt": "Task 1 was theory; Task 2 was real work. What was different?",
      "response": "Real data made it concrete. I know our funder relationships... [2-3 sentences]"
    },
    "facilitatorNotes": {
      "pattern": "Transfers Task 1 framework to real work with confidence...",
      "discussionQuestion": "Marcus classified real data faster than scenarios. What made real data easier?"
    },
    "multiTaskComparison": "[Optional] Task 1 → Task 2 trajectory narrative..."
  }
}
```

**Required fields:** `taskNumber`, `taskName`, `competency`, `week`, `participantName`, `unit`, `date`, `sections` (with `performanceSnapshot`, `reflection`, `facilitatorNotes`)

**Optional fields:** `successCriteria`, `growthStory`, `multiTaskComparison`

---

## RENDERING

### Prerequisites
```bash
npm install docx
```

### Usage

**Render a summary portfolio:**
```bash
node render_portfolio.js sample_portfolio_summary.json output_summary.docx summary
```

**Render a full portfolio (legacy format):**
```bash
node render_portfolio.js sample_portfolio_data.json output_full.docx full
```

**Default to summary mode:**
```bash
node render_portfolio.js sample_portfolio_summary.json output.docx
```

### Output

The renderer creates a branded Word document (.docx) with:
- Navy header bar with white text
- Purple section headers
- Navy table headers with alternating row colors (white / tan)
- Georgia font for body text, Arial for headers
- DC CAP color scheme: Navy (#101A4C), Purple (#8352FF), Blue (#87B7D5), Tan (#FFF4ED)
- 1-inch margins on all sides

---

## EXAMPLE FILES

### Sample Data
- **Sample JSON:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills_v3/sample_portfolio_summary.json`
- **Rendered Output:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills/sample_portfolio_summary.docx`

### Format Specification
- **Complete Format Guide:** `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills_v3/PORTFOLIO_FORMAT.md`
- **Includes:** Design principles, multi-task examples, format rules, accessibility notes

---

## COMPARISON: OLD VS. NEW FORMAT

### File Size (for same participant)
- **Old (Full):** 14 KB (~5-6 pages)
- **New (Summary):** 12 KB (~1-2 pages)
- **Reduction:** ~2 pages of dense content distilled to key insight

### Read Time
- **Old (Full):** 15-20 minutes per portfolio
- **New (Summary):** 5 minutes per portfolio

### Use Cases
- **Old (Full):** Archive, detailed review, appeals
- **New (Summary):** Cohort sharing, facilitator discussion, board visibility, peer learning

### Accessibility
- **Old (Full):** Dense, requires deep reading, structure unclear
- **New (Summary):** Scannable, 5-minute comprehension, clear sections and tables

---

## WORKFLOW: CREATING A PORTFOLIO SUMMARY

### Step 1: Gather Participant Data
After Task completion and assessment, collect:
- Task name and number
- Participant name and unit
- Competencies/dimensions addressed
- Final assessment level on each dimension
- Evidence sentence for each dimension (1-2 sentences max)
- Growth narrative (3-5 sentences)
- Reflection prompt + response
- Facilitator pattern observation
- Facilitator discussion question
- [Optional] Multi-task comparison (Tasks 2+)

### Step 2: Populate JSON
Create a JSON file (one per participant per task) using the template above. File naming convention:
```
portfolio_[task-number]_[participant-lastname]_[date].json
```

Example:
```
portfolio_2_chen_may-01-2026.json
```

### Step 3: Render
```bash
node render_portfolio.js portfolio_2_chen_may-01-2026.json chen_task2_summary.docx summary
```

### Step 4: Review & Distribute
- Open .docx file in Word or Google Docs
- Verify content and formatting
- Print for celebration event or email to cohort
- Store alongside participant assessment records

---

## INTEGRATION WITH EXISTING ASSESSMENT WORKFLOW

### Current Workflow
1. Participant submits work
2. Facilitator assesses against rubric
3. Participant revises (if applicable)
4. Facilitator populates full portfolio with all sections
5. Participant receives feedback

### New Workflow (No Changes to Steps 1-4)
1. Participant submits work
2. Facilitator assesses against rubric
3. Participant revises (if applicable)
4. Facilitator populates BOTH full portfolio (archival) AND summary JSON (public-facing)
5. Summary JSON is rendered to branded .docx
6. Participant receives feedback; summary goes to cohort

**Key point:** You still maintain the full portfolio. The summary is an additional output, not a replacement. The summary extraction happens after the assessment is complete.

---

## FACILITATOR NOTES

### Creating Strong Growth Stories

A good growth story answers these questions:
- What concept or skill was fuzzy at the start?
- What made it clearer (revision, real data, peer discussion)?
- What's the actionable insight they can take forward?
- For Tasks 2+: Does their performance show transfer from prior task?

**Weak example:** "Marcus did well on Task 2. His governance classification was correct."

**Strong example:** "Task 1 gave Marcus the framework; Task 2 tested it on real work. His governance classification was faster and more confident — he caught a small-cell re-identification risk that the Task 1 scenarios hadn't emphasized. The growth edge is iterative prompt design, moving from 'correct once' to 'refined repeatedly.'"

### Creating Peer Discussion Questions

Good discussion questions:
- Reference something specific from the participant's work
- Invite others to reflect on their own practice
- Point to a learning edge the whole cohort shares
- Are answerable in 5 minutes of group conversation

**Weak example:** "Did you like Task 2?"

**Strong example:** "Marcus classified real data faster than scenario data. What made real data easier? Can we build that confidence — the confidence that comes from knowing your actual work — into how we approach governance challenges we've never seen before?"

---

## TECHNICAL DETAILS

### Backwards Compatibility

The render script supports **both** old (full) and new (summary) JSON formats:

**Old format:** Includes `sections.initialSubmission`, `sections.assessment`, `sections.revisedSubmission`, `sections.growthTrajectory` (detailed)

**New format:** Includes `sections.performanceSnapshot`, `sections.growthStory` (condensed), `sections.reflection`, `sections.facilitatorNotes`

The script automatically detects which format you're using and renders accordingly.

### Performance Snapshot Fallback

If you have a full portfolio JSON but want to render it as a summary, the script will automatically generate a `performanceSnapshot` from the `growthTrajectory` data. You don't need to manually convert old data.

### Mode Flag

The render script accepts a `mode` parameter:
- `"summary"` (default): 1-2 page condensed format
- `"full"`: Complete portfolio with all sections

Example:
```bash
# Summary mode (default)
node render_portfolio.js input.json output.docx

# Explicit summary
node render_portfolio.js input.json output.docx summary

# Full mode (legacy)
node render_portfolio.js input.json output.docx full
```

---

## FAQ

### Q: Do I need to create the full portfolio AND the summary?
**A:** Yes, both have different purposes. The full portfolio is your detailed assessment record (archival). The summary is what you share with the cohort and print for the celebration event.

### Q: Can I render a summary from old assessment data?
**A:** Yes. If you have `growthTrajectory` data, the script will generate a performance snapshot. You may need to manually add `growthStory`, `reflection`, and `facilitatorNotes` sections.

### Q: How do I update a summary that's already rendered?
**A:** Edit the JSON file and re-run the render command. The script overwrites the .docx file.

### Q: Can I customize the colors or fonts?
**A:** Yes. Edit the `COLORS` object at the top of `render_portfolio.js`. The default colors are DC CAP brand colors.

### Q: How do I handle multi-page summaries for Tasks 2+?
**A:** The summary naturally expands to 1-2 pages as needed. If you include a `multiTaskComparison` section (Tasks 2+), that section may push the portfolio to 2 pages. This is intentional — the multi-task comparison is important for showing growth trajectory.

### Q: Can I print these summaries?
**A:** Yes! The format is optimized for printing. Use 8.5×11 white paper, 1-inch margins, color printing recommended for header bar visibility.

---

## TIMELINE & ROLLOUT

**April 10, 2026:** Format specification complete; render script updated; sample files provided.

**April 18, 2026 (Task 2 Deadline):** Facilitators use new format to create first summaries. Participants begin seeing summaries in peer cohort materials.

**May 1, 2026 (Task 2 Assessment Complete):** First cohort of 10 summaries rendered and distributed to participants.

**May 10, 2026 (Cohort Celebration):** Printed summaries displayed; participants discuss peer insights.

**June 10, 2026 (Pilot End):** All 40 task portfolios (10 participants × 4 tasks) available as summaries + full records.

---

## SUPPORT

**Questions about the format?** See `/sessions/modest-confident-planck/mnt/ai_governance/pilot_task_skills_v3/PORTFOLIO_FORMAT.md`

**Issues with rendering?** Check the error message from the Node script; verify JSON syntax and required fields.

**Want to customize?** Edit `render_portfolio.js` or `PORTFOLIO_FORMAT.md` as needed.

---

**Created by:** Claude Code Agent | **For:** DC CAP AI Leadership Training Pilot

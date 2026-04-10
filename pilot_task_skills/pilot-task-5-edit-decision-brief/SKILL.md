---
name: pilot-task-5-edit-decision-brief
description: "Week 5 pilot task skill for the Edit Decision Brief (Show Your Work). Guides participants through documenting their prompt-output-edit workflow with tagged edit types and rationales. Assesses edit completeness, type accuracy, rationale quality, and retrospective insight against a 4-dimension rubric. Use this skill whenever a pilot participant says 'Task 5,' 'Edit Decision Brief,' 'Show Your Work,' 'document my edits,' 'edit layer,' or any reference to the Week 5 edit documentation exercise. Also trigger when participants want to submit, assess, revise, or package their Edit Decision Brief."
---

# Pilot Task 5: Show Your Work — The Edit Decision Brief

## Overview

**Week:** 5 (Week 5 check-in) | **Competency:** Discernment (Applied) | **Modality:** Augmentation

This task bridges the gap between catching errors (Task 4) and systematically improving AI output through deliberate editing. Where Task 4 asked "can you find what's wrong?", Task 5 asks "can you articulate what you changed, why, and what you'd do differently next time?" This is discernment in action — the daily practice that determines whether AI-assisted output meets DC CAP's standards.

## Stage Detection

- **First contact or "start Task 5"** → Stage 1: INTRODUCE
- **Submits Edit Decision Brief** → Stage 3: ASSESS
- **Submits revision** → Stage 3b: REASSESS
- **"Package this" or "I'm done"** → Stage 5: PACKAGE

---

## Stage 1: INTRODUCE

### Task: The Edit Decision Brief

**What you're building:** A complete documentation of one real Claude interaction — from prompt through raw output through every edit you made — with each edit tagged, explained, and analyzed. This is the artifact that makes your human judgment layer visible.

**Why this matters:** Every pilot participant edits Claude's output before using it. The question is whether those edits are deliberate and pattern-forming, or reactive and inconsistent. By documenting your edit decisions, you build awareness of your own judgment patterns, which accelerates improvement. The retrospective analysis at the end connects your editing patterns back to your prompting skills, creating a feedback loop between Description (Task 2) and Discernment (Tasks 4-5).

**Time estimate:** 60-90 minutes to document your edit decisions across all 5 sections, plus 20-30 minutes for revision.

**Prerequisite:** Tasks 1-4 should be completed. This task builds directly on the error detection skills from Task 4 and applies them to your ongoing work.

**Select one real Claude output** from work you've completed during the pilot. This should be something you actually used (sent an email, submitted a draft, shared an analysis) — not a practice exercise. The more substantive the edits, the more useful this exercise will be.

**Your Edit Decision Brief contains 5 sections:**

**Section 1: The Prompt**
Copy your prompt exactly as you submitted it. No cleanup, no improvement after the fact. If you made typos, leave them. This is the baseline.

**Section 2: The Raw Output**
Copy Claude's complete response. Everything it produced.

**Section 3: The Annotated Edit Layer**
Document every change you made between the raw output and the final version. For each edit:

- **Quote the original text** (what Claude wrote)
- **Quote the replacement text** (what you changed it to) or note the deletion
- **Tag the edit type** using exactly one of these four categories:

| Tag | Definition | Example |
|-----|-----------|---------|
| **Accuracy Fix** | Corrected a factual error, unverifiable claim, or misleading statistic | Changed "$2.1M" to "$1.8M" based on disbursement report |
| **Tone Adjustment** | Changed voice, register, formality, or emotional calibration for the audience | Changed "awesome results" to "strong outcomes" for a funder email |
| **Strategic Addition** | Added context, framing, data, or information Claude didn't have | Added "This follows our partner network expansion in FY25, which changed the comparison baseline" |
| **Removal** | Deleted content that was unnecessary, inaccurate, or risky | Deleted a paragraph claiming "all scholars" receive coaching when only first-year scholars do |

- **Write the rationale** — Why was this edit necessary? Reference the specific audience, context, policy, or risk that made it needed.

**Section 4: The Final Version**
The output as you actually sent or used it.

**Section 5: The Retrospective**
One paragraph answering: "What would I prompt differently next time to reduce the edit burden?" Connect your answer to your edit pattern. If you made 4 Tone Adjustments, your retrospective should address why your prompt didn't set the tone correctly. If you made 3 Strategic Additions, your retrospective should address what Content was missing from your prompt.

**Submit all 5 sections together.**

---

## Stage 3: ASSESS

### Pre-Assessment Verification

Before scoring, independently compare the Raw Output (Section 2) against the Final Version (Section 4) to identify all actual edits. Create a master list of changes. Then compare this list against the participant's Annotated Edit Layer (Section 3) to check for completeness.

### Rubric

**Dimension 1: Edit Documentation Rigor**

This dimension assesses how thoroughly the participant documented their editing decisions. Note: The assessment compares the participant's documented edits against their provided raw output and final version. Since both texts are participant-provided, the verification checks documentation thoroughness and internal consistency rather than independent edit detection.

| Level | Indicator |
|-------|-----------|
| Exceeds Standard | All substantive differences between raw output and final version are documented with clear before/after quotes. Documentation is thorough enough that a reviewer could reconstruct every change. |
| Meets Standard | Most substantive edits are documented. 1-2 may be missing, but no major changes are undocumented. |
| Approaching Standard | Several substantive edits are undocumented. The participant documented obvious changes but missed subtler ones. |
| Below Standard | Fewer than half of actual substantive edits are documented. |

*Assessment guidance:* Run a section-by-section comparison of Sections 2 and 4. Flag every substantive change (anything that affects meaning, accuracy, or tone). Check each flagged change against Section 3. The participant doesn't need to catch formatting changes, but content changes must be documented.

**Dimension 2: Edit Type Accuracy**

Bright line: If 75% or more of tags are correctly assigned → Meets. If 50-74% are correct → Approaching.

The most common error is confusing Accuracy Fix with Strategic Addition — the key distinction is whether Claude's original text was wrong (Accuracy Fix) or merely incomplete (Strategic Addition).

| Level | Indicator |
|-------|-----------|
| Exceeds Standard | All tags are correct. The participant demonstrates clear understanding of each category's boundaries. Rationale for each tag shows the logical distinction between categories. |
| Meets Standard | 75%+ of tags are correct. 1-2 may show reasonable boundary confusion. |
| Approaching Standard | 50-74% of tags are correct. Tags show some systematic confusion between categories. |
| Below Standard | Fewer than 50% of tags are correct, or tags are mostly absent. |

*Assessment guidance:* An Accuracy Fix corrects something Claude got wrong (a wrong number, a false claim). A Strategic Addition adds something Claude couldn't have known (context about a recent program change, a data point from an internal report). If the participant labels an addition as a "fix," check whether Claude's original text was actually wrong or just incomplete.

**Dimension 3: Rationale Quality**

Calibration anchors:
- **Approaching** looks like: "Changed the tone because it sounded wrong."
- **Meets** looks like: "Changed from casual register to formal because this email goes to foundation program officers at KPMG who expect evidence-focused, professional language. The phrase 'awesome results' would undermine the credibility of the data we're presenting."

| Level | Indicator |
|-------|-----------|
| Exceeds Standard | Each rationale references the specific audience, context, policy, or risk that made the edit necessary. Rationales are distinct from each other and show deep reasoning. A reader unfamiliar with the context could understand why each edit was made. |
| Meets Standard | Most rationales are audience- or context-specific. 1-2 may be less precise. |
| Approaching Standard | Rationales are generic ("made it sound better," "seemed off") without connecting to specific use case. |
| Below Standard | No rationales, or rationales don't explain the actual reason for the edit. |

*Assessment guidance:* The test is specificity. "Changed the tone" is not a rationale. "Changed the tone from casual to formal because this email goes to foundation program officers who expect evidence-focused language" is a rationale. Score based on whether each rationale names the WHY that an outside reader would need.

**Dimension 4: Retrospective Insight**

When evaluating this dimension, assess the quality of the participant's reasoning about their prompting patterns independently of whether their original prompt was good or bad. A participant with a weak initial prompt who writes a perceptive retrospective connecting their edit pattern to specific CTCC gaps shows stronger Discernment than a participant with a strong prompt who writes a vague retrospective.

| Level | Indicator |
|-------|-----------|
| Exceeds Standard | The retrospective identifies specific CTCC elements to change based on the edit pattern. The connection is logical and specific. The participant quantifies their pattern ("4 of my 6 edits were Tone Adjustments, which tells me...") and connects it to a concrete prompting change. |
| Meets Standard | The retrospective identifies at least one specific prompt improvement that connects logically to the edit pattern. |
| Approaching Standard | The retrospective is vague ("I'd give more detail next time") without connecting to the actual edit distribution. |
| Below Standard | No retrospective, or the retrospective doesn't connect to any observed edit pattern. |

*Assessment guidance:* Check whether the retrospective follows logically from the data in Section 3. If the participant made mostly Accuracy Fixes but their retrospective focuses on tone, there's a disconnect. The strongest retrospectives show the participant aggregating their own edit tags and drawing conclusions about their prompting habits.

### Feedback Format

```
## Task 5 Assessment: Edit Decision Brief
### Participant: [name if provided]

[COACHING ORIENTATION — 1-2 sentences summarizing the overall read before diving into scores. Name what's strong, name what needs work, and frame revision as achievable.]

---

### Edit Completeness Check

I identified [N] substantive edits between your raw output and final version.
You documented [M] of them.
[If M < N: "The following edits were undocumented:" + list]

### Edit Type Distribution

| Type | Count | % of Total |
|------|-------|-----------|
| Accuracy Fix | X | X% |
| Tone Adjustment | X | X% |
| Strategic Addition | X | X% |
| Removal | X | X% |

[Commentary on what the distribution reveals about their editing pattern]

### Dimension Assessments

| Dimension | Level | Key Evidence |
|-----------|-------|-------------|
| Edit Documentation Rigor | [Exceeds/Meets/Approaching/Below] | [Summary of documentation thoroughness] |
| Edit Type Accuracy | [Exceeds/Meets/Approaching/Below] | [Summary of tagging accuracy] |
| Rationale Quality | [Exceeds/Meets/Approaching/Below] | [Summary of rationale specificity] |
| Retrospective Insight | [Exceeds/Meets/Approaching/Below] | [Summary of pattern connection] |

**What worked:** [Cite strong examples from their submission]

**Where to strengthen:** [1-3 items, each referencing specific edits or rationales]
- [Gap #1] — [Edit or rationale cited] — [Principle explanation: why this matters for the competency] — [Transferable skill: how this applies beyond this task]
- [Gap #2] — [Edit or rationale cited] — [Principle explanation] — [Transferable skill]
- [Gap #3] — [Edit or rationale cited] — [Principle explanation] — [Transferable skill]

### Coaching Question

[One question grounded in the participant's actual levels that invites them to reason about their own performance before revising. Use their specific level gap to frame the question. Example: "Your Edit Documentation was Meets, but your Retrospective Insight was Approaching. Looking at your edit pattern — mostly Tone Adjustments — what would help you connect that pattern back to your prompting practices?"]

### Revision Guidance
[Focused on undocumented edits, mistagged types, or vague rationales]
```

---

## Stage 3b: REASSESS

Re-score, produce delta comparison. For this task, the revision typically involves adding undocumented edits, correcting tags, strengthening rationales, and connecting the retrospective to the actual edit pattern.

```
## Revision Assessment

| Dimension | Initial | Revised | What Changed |
|-----------|---------|---------|-------------|
| Edit Documentation Rigor | [Level] | [Level] | [Specific improvement narrative] |
| Edit Type Accuracy | [Level] | [Level] | [Specific improvement narrative] |
| Rationale Quality | [Level] | [Level] | [Specific improvement narrative] |
| Retrospective Insight | [Level] | [Level] | [Specific improvement narrative] |
```

### Readiness Check
- **Most dimensions at Meets or above:** Proceed to packaging.
- **Multiple dimensions at Approaching, none at Below:** One more targeted revision cycle on the 1-2 widest gaps. Focus on the dimension with the largest gap; allow the participant to revise just the weakest section rather than the full submission.
- **Any dimension at Below Standard:** Re-introduce the relevant concept before asking for another revision. Walk through one example together, then revise.

---

## Stage 5: PACKAGE

### Portfolio Format

```
═══════════════════════════════════════════════════
TASK 5: EDIT DECISION BRIEF
Show Your Work

[PARTICIPANT NAME]
[Unit] · Date Completed
═══════════════════════════════════════════════════

SECTION 1: THE PROMPT
[Participant's original prompt]

SECTION 2: THE RAW OUTPUT
[Complete Claude output]

SECTION 3: THE ANNOTATED EDIT LAYER
[Participant's documented edits with tags and rationales]

SECTION 4: THE FINAL VERSION
[Edited output as used]

SECTION 5: THE RETROSPECTIVE
[Participant's reflection on prompt improvements]

ASSESSMENT
[Scored assessment from Stage 3]

REVISED SUBMISSION
[Revised sections if needed]

GROWTH TRAJECTORY
| Dimension | Initial | Revised | What Changed |
|-----------|---------|---------|-------------|
| Edit Documentation Rigor | [Level] | [Level] | [Specific narrative of improvement] |
| Edit Type Accuracy | [Level] | [Level] | [Specific narrative of improvement] |
| Rationale Quality | [Level] | [Level] | [Specific narrative of improvement] |
| Retrospective Insight | [Level] | [Level] | [Specific narrative of improvement] |

OVERALL READINESS: [Ready for peer exchange / Targeted revision recommended]

PARTICIPANT REFLECTION
Your edit distribution was [X]% Accuracy Fixes, [Y]% Tone Adjustments, [Z]% Strategic Additions, [W]% Removals. Your edit documentation was [level] and your retrospective insight was [level]. What does that pattern tell you about what Claude gets right vs. what it misses for your type of work?

[Include the participant's response]

FACILITATOR NOTES
Pattern: [What this portfolio reveals for cohort discussion — e.g., "This participant's edit pattern reflects a gap in domain-specific content knowledge prompting, common across all operations staff"]
Discussion question: [One question using this portfolio to teach the group — e.g., "How many of you find yourself making more Tone Adjustments than Strategic Additions? What does that difference suggest about your prompting vs. your verification practices?"]

═══════════════════════════════════════════════════
DC CAP · dccapscholars.org
AI Deployment Leadership Training Pilot · 2026
═══════════════════════════════════════════════════
```

### How to Generate the Reflection Prompt and Facilitator Notes

**Reflection Prompt:** Before closing the assessment, ask the participant the task-specific reflection prompt above. Record their response. The reflection prompt is data-grounded — pull the actual percentages from their Edit Type Distribution table and their levels from the assessment.

**Facilitator Notes:** After you've assessed the portfolio, synthesize two insights:
1. **Pattern:** What does this portfolio reveal about this participant's editing behavior or prompting habits? Is this an individual signal or a cohort-wide pattern you've seen in multiple submissions?
2. **Discussion Question:** Frame one question that uses this specific portfolio to teach the whole cohort. The question should be generalizable — other participants should see themselves in it.

---

"Your Task 5 portfolio is ready. Share it with the cohort — this is where peer learning is most powerful. Seeing how colleagues in different units edit the same types of output builds a shared standard for what 'human-reviewed' actually means at DC CAP. Next up: Task 6 (The Delegation Map) shifts from individual discernment to strategic delegation planning for your unit."

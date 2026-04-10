---
name: pilot-task-1-governance-walk
description: "Week 1 pilot task skill for The Governance Walk. Guides participants through writing a Classification Rationale Memo, assesses against a 4-dimension rubric, provides revision guidance, and packages a branded portfolio artifact. Use this skill whenever a pilot participant says 'Task 1,' 'Governance Walk,' 'classification memo,' 'data tier assignment,' 'I need to classify scenarios,' or any reference to the Week 1 governance classification exercise. Also trigger when participants want to submit, assess, revise, or package their Governance Walk deliverable."
---

# Pilot Task 1: The Governance Walk

## Overview

**Week:** 1 (April 6-9) | **Competency:** Diligence | **Modality:** Automation

This skill implements the five-stage learning loop for Task 1 of the DC CAP AI Leadership Pilot. It guides the participant through classifying data scenarios using DC CAP's four-tier governance framework, then assesses and improves their work.

## Stage Detection

Determine which stage the participant is in based on their message:

- **First contact or "start Task 1" or "introduce"** → Stage 1: INTRODUCE
- **"Here is my memo" or pastes/uploads classification work** → Stage 3: ASSESS
- **"Here is my revision" or resubmission after feedback** → Stage 3b: REASSESS
- **"Package this" or "I'm done"** → Stage 5: PACKAGE
- **If unclear**, ask: "Are you starting the task, submitting your initial draft, submitting a revision, or ready to package your portfolio?"

---

## Stage 1: INTRODUCE

Present the task clearly. Use this exact structure:

### Task: The Governance Walk — Classification Rationale Memo

**What you're building:** After completing the paired Governance Walk exercise (classifying 10 data scenarios with your partner), you will independently write a Classification Rationale Memo for 3 scenarios. This memo is your individual deliverable.

**Why this matters:** Data classification is the foundation of every AI-assisted workflow at DC CAP. If you can't correctly identify what tier data belongs to, you can't safely delegate work to Claude. This task builds the Diligence competency that every subsequent pilot task depends on.

**Time estimate:** 45-60 minutes for the initial memo, plus 20-30 minutes for revision.

**Your 3 assigned scenarios** (select any 3 from the 10 you classified during the paired exercise, or use these defaults):

> **Scenario A:** A spreadsheet containing scholarship disbursement amounts listed by university partner, with no student names attached. Columns: University Name, Award Type (MSI/SAI/Last Dollar), Total Disbursed, Number of Awards.
>
> **Scenario B:** An email thread between a DC CAP counselor and a school counselor discussing a specific student's academic struggles, family hardship, and whether the student should be flagged for additional support. The student's name, school, and GPA appear in the thread.
>
> **Scenario C:** A draft board presentation slide showing DC CAP's overall persistence rate (87%) compared to the national average, with a bar chart breaking persistence down by Ward. One Ward has only 6 scholars in the cohort.

**For each scenario, your memo must include:**

1. **Tier Assignment:** Restricted (Tier 1), Sensitive (Tier 2), Internal (Tier 3), or Public (Tier 4)
2. **Primary Reasoning:** Which specific data elements in the scenario drove your classification? Name them.
3. **Combination Test:** What would change if this data were combined with data from another scenario? Would the tier escalate? Why or why not?
4. **Governance Action:** What handling requirements apply at this tier? Who can access it, where can it be stored, and can AI tools process it?

**Success criteria — what "good" looks like:**
- Tier assignments are correct per the DC CAP governance framework
- Reasoning cites the specific data elements (not generic statements like "it contains sensitive info")
- The combination test identifies at least one valid escalation pathway per scenario
- Governance actions match the framework's tier-specific handling rules

**Go write your memo, then come back and say "Here is my memo" to get your assessment.**

---

## Stage 2: DRAFT (embedded in Stage 1)

The participant writes their memo independently. The skill does not write the memo for them. If the participant asks Claude to "do the classification for me" or "write the memo," respond:

"This task is designed to build your classification judgment. I can clarify the governance framework definitions, explain what the combination test means, or answer questions about the scenarios. But the classifications and reasoning need to come from you — that's the competency we're measuring. What questions do you have before you write?"

---

## Stage 3: ASSESS

When the participant submits their memo, evaluate it against the rubric below. For each of the 3 scenarios, assess all 4 dimensions.

### Answer Key

**Scenario A (Disbursement amounts by university, no student names):**
- Correct Tier: **Tier 2 — Sensitive.** Internal financial records (disbursement totals) are Tier 2 per the framework. Even though no student names are attached, the disaggregation by university and award type could enable inference about individual awards at smaller partner institutions.
- Key reasoning elements: "internal financial records," "disbursement totals," potential for small-cell re-identification at smaller partners
- Combination risk: If combined with a roster of scholars by university (even without names), the disbursement amounts could be linked to approximate individual award sizes. This escalates the sensitivity.
- Governance action: Restricted access, role-specific. Requires de-identification verification before upload to Claude. 30-day retention. Not for open access.

**Scenario B (Email thread with student name, GPA, family hardship):**
- Correct Tier: **Tier 1 — Restricted.** Contains individual PII (student name), FERPA-protected data (academic records/GPA), and family information (hardship). This is textbook Tier 1.
- Key reasoning elements: "scholar name linked to academic records," "FERPA-protected," "family information," "health/disability information" (if hardship implies this)
- Combination risk: This scenario is already at the highest tier. Combination with any other data does not escalate it further, but combining it with Scenario A's financial data would create a comprehensive student profile (name + grades + family situation + financial award).
- Governance action: PROHIBITED. Never upload to Claude in any form. No exceptions without legal review and explicit board authorization.

**Scenario C (Board slide with persistence by Ward, one Ward N=6):**
- Correct Tier: **Tier 2 — Sensitive.** The overall persistence rate (87%) is Tier 3/Internal as a de-identified aggregate. However, the Ward-level breakdown with one Ward at N=6 falls below the small-cell threshold (N<10) per the aggregation guidance. This triggers Tier 2.
- Key reasoning elements: "small-cell aggregate," "N<10," "could enable re-identification," "aggregation guidance"
- Combination risk: If combined with public information about which schools are in that Ward and DC CAP's partner school list, the 6 scholars could potentially be identified. The small cell size is the trigger.
- Governance action: Restricted access. The slide could be shared if the small-cell Ward is suppressed or combined with an adjacent Ward to bring N above 10. In current form, requires de-identification verification before use with AI tools.

### Rubric Application

For each scenario, score these 4 dimensions on the 1-4 scale:

**Dimension 1: Classification Accuracy**
- 4: Correct tier with nuanced reasoning that addresses edge cases (e.g., recognizing Scenario C's complexity as a Tier 3 aggregate with a Tier 2 small-cell exception)
- 3: Correct tier with adequate reasoning
- 2: Correct tier but weak reasoning, OR wrong tier but reasoning shows partial understanding
- 1: Wrong tier with reasoning that shows fundamental misunderstanding

**Dimension 2: Reasoning Specificity**
- 4: Names exact data fields from the scenario text and explains why each field matters to the tier determination
- 3: Names data fields that support the classification
- 2: References the scenario generally ("it has financial data") but doesn't isolate specific fields
- 1: Reasoning is generic, could apply to any scenario

**Dimension 3: Combination Awareness**
- 4: Identifies non-obvious combinations (e.g., Scenario A + student roster = individual award inference) and explains the mechanism
- 3: Identifies at least one valid combination risk per scenario
- 2: Mentions combination risk but analysis is vague or covers only 1 of 3 scenarios
- 1: No combination analysis or analysis is fundamentally wrong

**Dimension 4: Governance Application**
- 4: Handling requirements are complete, tier-appropriate, and reference the governance framework's specific language (e.g., "30-day retention" for Tier 2)
- 3: Handling requirements are correct for the tier
- 2: Handling requirements are partially correct or incomplete
- 1: Wrong tier handling or no handling specified

### Feedback Format

Structure the assessment exactly as follows:

```
## Task 1 Assessment: The Governance Walk
### Participant: [name if provided]

[COACHING ORIENTATION — 1-2 sentences summarizing the overall read before diving into scores. Name what's strong, name what needs work, and frame revision as achievable. Example: "Your Scenario B classification is strong — you nailed the FERPA reasoning. Scenarios A and C share the same gap: both need the Tier 2 threshold, which is a single concept that will fix both at once."]

---

### Scenario [A/B/C]: [brief description]

**Tier Assignment:** [Their answer] → [Correct/Incorrect]

| Dimension | Level | Key Evidence |
|-----------|-------|-------------|
| Classification Accuracy | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Reasoning Specificity | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Combination Awareness | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Governance Application | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |

**What worked:** [Cite specific strong elements from their submission]

**Where to strengthen:** [For dimensions at Approaching or Below, provide specific, actionable feedback]
- [Cite the specific gap: what's missing or wrong, referencing their actual text]
- [Explain the underlying principle in one sentence — why this matters beyond this scenario]
- [Provide the revision direction: what to do differently, in one sentence]
- [Name the transferable skill: where else this principle applies]

---

[Repeat for each scenario]

### Coaching Question

[One question grounded in the participant's actual performance that invites them to reason about their own work before revising. Use their specific level gaps to frame the question.]

### Revision Guidance

Based on your assessment, here are the specific areas to strengthen in your revision:

[List the 1-3 most impactful improvements, ordered by which will move their performance the most. Each improvement should name the specific scenario, the specific dimension, and the specific action to take.]

**Ready to revise? Update your memo and come back with "Here is my revision."**
```

### Feedback Rules (apply to all assessments)

1. **Cite their work.** Every feedback point references a specific element of their submission.
2. **No nitpicking.** Only flag gaps that affect classification accuracy, reasoning quality, or governance compliance. Do not flag word choice, formatting, or style.
3. **Acknowledge strength.** For dimensions at Meets or Exceeds, name what worked and why it worked. Name the transferable skill so they can replicate it.
4. **Limit revision guidance to 3 items.** Focus on the highest-impact improvements. A participant with multiple dimensions at Approaching needs different guidance than one with dimensions at Below Standard.
5. **Explain principles, not just corrections.** When flagging an error, spend one sentence on the underlying principle. "The governance framework uses N<10 as the threshold because smaller cell sizes enable re-identification through cross-referencing with public data. That principle is what makes Scenario C Tier 2."

---

## Stage 3b: REASSESS

When the participant submits their revision, re-score using the same rubric. Then produce a delta comparison:

```
## Revision Assessment

### Dimension-by-Dimension Comparison

| Dimension | Initial | Revised | What Changed |
|-----------|---------|---------|-------------|
| Classification Accuracy | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Reasoning Specificity | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Combination Awareness | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Governance Application | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |

### What Improved
[Specific description of what changed and why it's better, citing their revised text]

### Remaining Gaps (if any)
[If any dimension remains below Meets, note the most important gap and what would push toward Meets. If all Meets or above, congratulate and note any refinements that would push toward Exceeds.]
```

### Readiness Check
- **Most dimensions at Meets or above:** Proceed to packaging. Note any Approaching dimensions as optional stretch goals.
- **Multiple dimensions at Approaching, none at Below:** Offer one more targeted revision cycle focused on the 1-2 dimensions with the widest gap.
- **Any dimension at Below Standard:** Re-introduce the relevant concept before another revision. Walk through one example together.

---

## Stage 5: PACKAGE

Produce the branded portfolio artifact. Read the `dccap-brand` skill first for brand formatting guidance, then generate a document with this structure:

```
═══════════════════════════════════════════════════
DC CAP SCHOLARS
AI Leadership Pilot — Task Portfolio

THE GOVERNANCE WALK
[Participant Name] · [Unit] · [Date]
═══════════════════════════════════════════════════

TASK OVERVIEW
Competency: Diligence
Week: 1 (April 6-9)
Success Criteria: Correctly classify data scenarios using DC CAP's 
four-tier governance framework with specific reasoning, combination 
analysis, and governance actions.

INITIAL SUBMISSION
[Full text of original memo]

ASSESSMENT
[Full scored assessment from Stage 3]

REVISED SUBMISSION
[Full text of revised memo]

REASSESSMENT & GROWTH TRAJECTORY
[Delta comparison from Stage 3b]

PARTICIPANT REFLECTION
Your strongest dimension was [dimension name] and your widest gap was in [dimension name]. Look at the scenario where that gap showed up most clearly. What made [lower dimension] harder than [higher dimension] for that scenario?

[Include the participant's response]

FACILITATOR NOTES
[Generate based on this participant's specific score pattern:]
Pattern: [What this portfolio reveals that's useful for cohort 
discussion. Reference specific scenarios and gaps.]
Discussion question: [One question that uses this portfolio to 
teach the group. Reference the participant's specific learning 
arc.]

═══════════════════════════════════════════════════
DC CAP · dccapscholars.org
AI Deployment Leadership Training Pilot · 2026
═══════════════════════════════════════════════════
```

### Generating Reflection and Facilitator Notes

**Reflection prompt generation:** Before packaging, ask the participant the reflection question. Use their actual scores to fill in the template:

"You scored [X] on [highest dimension] and [Y] on [lowest dimension]. Look at the scenario where that gap was widest. What made [lowest dimension] harder than [highest dimension] for that scenario?"

Wait for their response. Include it in the portfolio. If the participant gives a thin answer ("I don't know"), follow up with a more specific version: "In Scenario C, your classification was [score] but your combination analysis was [score]. You identified the right tier but didn't trace the re-identification pathway. Walk me through what you were thinking when you wrote the combination test for that scenario."

**Facilitator note generation:** Based on the score pattern, generate a 2-3 sentence note identifying:
- The pattern worth discussing (e.g., "This participant caught the obvious Tier 1 scenario but missed both Tier 2 triggers. The Tier 2 boundary — where aggregates become re-identifiable — is the most operationally important classification decision at DC CAP.")
- A discussion question for the cohort (e.g., "When you're looking at your own data, how do you decide whether an aggregate is 'safe' or whether a small cell creates risk? What's your threshold?")

Save the completed portfolio as a markdown file. Inform the participant:

"Your Task 1 portfolio is ready. Share it with the cohort in the shared pilot folder so everyone can learn from your classification reasoning. Next up: Task 2 (The Prompt Lab) builds on this governance foundation by teaching you to write effective prompts for Claude."

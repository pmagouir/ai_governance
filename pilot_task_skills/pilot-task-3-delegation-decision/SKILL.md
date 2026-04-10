---
name: pilot-task-3-delegation-decision
description: "Week 3 pilot task skill for The Delegation Decision. Guides participants through 5 realistic DC CAP scenarios requiring skill selection, modality classification, prompt writing, execution, and human judgment analysis. Assesses against a 4-dimension rubric, provides revision guidance, and packages a branded portfolio artifact. Use this skill whenever a pilot participant says 'Task 3,' 'Delegation Decision,' 'which skill should I use,' 'skill selection,' 'modality assignment,' or any reference to the Week 3 delegation exercise. Also trigger when participants want to submit, assess, revise, or package their Delegation Decision deliverable."
---

# Pilot Task 3: The Delegation Decision

## Overview

**Week:** 3 (April 15-22) | **Competency:** Delegation | **Modality:** Automation + Augmentation

This skill builds the strategic judgment that separates "I can use Claude" from "I know when and how to deploy the right Claude tool for the right situation." Participants receive 5 realistic DC CAP scenarios and must make delegation decisions — choosing the right skill, the right modality, writing an effective prompt, and identifying the human judgment layer.

## Stage Detection

- **First contact or "start Task 3"** → Stage 1: INTRODUCE
- **Submits delegation briefs for 5 scenarios** → Stage 3: ASSESS
- **Submits revision after feedback** → Stage 3b: REASSESS
- **"Package this" or "I'm done"** → Stage 5: PACKAGE
- **If unclear**, ask which stage.

---

## Stage 1: INTRODUCE

### Task: The Delegation Decision — 5-Scenario Delegation Brief

**What you're building:** For each of 5 realistic DC CAP work scenarios, you will produce a Delegation Brief containing your skill selection, modality classification, the prompt you'd use, the actual output, and your human judgment analysis.

**Why this matters:** Knowing how to prompt Claude is necessary but insufficient. Delegation — knowing *which* tool to use, *what level of human involvement* is needed, and *what to check before sending* — is where AI fluency becomes operational. A participant who picks the wrong skill or assigns the wrong modality will produce output that's either unsafe, off-target, or both.

**Time estimate:** 90-120 minutes for all 5 scenario briefs (includes running prompts and capturing output), plus 30-45 minutes for revision.

**Prerequisite:** Tasks 1-2 should be completed before starting. Task 2's CTCC prompt skills are directly used when you write prompts for each scenario.

**The DC CAP Skill Library (your toolkit):**

| Skill | Purpose | Best For |
|-------|---------|----------|
| **DC CAP FAQ** | Policy answers and eligibility rules | Quick factual lookups about scholarships, requirements, deadlines |
| **Student Outreach** | Student-facing emails across the scholarship cycle | Application reminders, award notifications, DCTAG follow-ups, renewal messages |
| **Partner Outreach** | University partner communications | Cycle updates, preference deadlines, enrollment verification, cohort confirmations |
| **Counselor Outreach** | High school counselor communications | Cycle previews, decision advance notices, year-end appreciation |
| **Situational Email** | Responsive emails to students/families | Inbound questions, appeal responses, documentation follow-ups |
| **Escalation Protocol** | Escalated inquiry routing and response | Upset parents, contested decisions, political contacts, boundary-setting |
| **sf-demo-data (Data Analysis)** | R scripts for scholar demographics and awards data | Breakdowns by university, ward, award type, demographics, GPA analysis |

**The 3 Modalities:**

| Modality | Human-AI Balance | When to Use |
|----------|-----------------|-------------|
| **Automation** | "Do this for me" — Claude handles 80%+, human reviews | Routine, repeatable tasks with clear templates and low judgment requirements |
| **Augmentation** | "Let's work together" — 50/50 iterative | Tasks requiring human context, nuance, or judgment integrated with AI drafting |
| **Agency** | "Make this repeatable" — human designs the system | Building templates, skills, or workflows that others will use |

**Your 5 Scenarios:**

**Scenario 1:** A high school counselor emails your team asking: "What documents does Maria need to submit for her DCTAG verification? She says she already sent something but isn't sure if it was the right form."

**Scenario 2:** Your unit director asks you to draft a check-in email to university partners. It's mid-April, the spring preference deadline is May 1, and 6 of 14 partners haven't submitted their preference lists yet. Trinity, Bowie State, CSU, GW, Howard, and UDC are outstanding.

**Scenario 3:** A parent calls your office upset and says: "My daughter applied and you rejected her. Nobody will explain why. I'm going to contact my council member." The student was declined because she did not meet the DC residency requirement.

**Scenario 4:** Preston asks for a breakdown of current scholars by university partner, award type (MSI/SAI/Last Dollar), and Ward of residence. He needs it for a board presentation next week.

**Scenario 5:** You need to send a student named James a reminder that his DCTAG documentation is due in 10 days. If he doesn't submit by the deadline, his award disbursement will be delayed. He's a sophomore at Trinity University.

**For each scenario, write:**

1. **Skill Selected:** Which DC CAP skill handles this? (Name it from the table above)
2. **Modality:** Automation, Augmentation, or Agency? And why — what's the human-AI balance this scenario requires?
3. **The Prompt:** Write the actual prompt you would use to activate this skill. Include scenario-specific details.
4. **The Output:** Run the prompt. Paste Claude's response.
5. **Human Judgment Layer:** Before this output leaves your desk, what do you check, edit, or add? Name the specific risks for this scenario.

**Submit all 5 briefs together.**

---

## Stage 3: ASSESS

### Answer Key

**Scenario 1 (Counselor asking about DCTAG docs):**
- Correct Skill: **DC CAP FAQ** — This is a factual policy lookup about documentation requirements.
- Correct Modality: **Automation** — The answer is policy-based and repeatable. Claude can produce the accurate response; human reviews for completeness.
- Human Judgment: Verify the specific documentation list is current. Check whether "Maria" has a specific case note that changes the standard answer. Confirm the counselor is from a partner school.

**Scenario 2 (Partner preference deadline email):**
- Correct Skill: **Partner Outreach** — This is a university partner communication about a cycle deadline.
- Correct Modality: **Augmentation** — The email needs relationship context (which partners are on track vs. behind), specific names, and a tone calibrated to the partnership. Human provides the context; Claude drafts; human refines.
- Human Judgment: Verify the list of outstanding partners is current. Check tone — this is a deadline push, not a first notice, so the register should be direct. Confirm no partner has communicated a delay that would change the message.

**Scenario 3 (Upset parent, declined student, council member threat):**
- Correct Skill: **Escalation Protocol** — This involves an upset family member, a contested decision, and a political pressure vector.
- Correct Modality: **Augmentation** — Escalation responses require careful human judgment on boundary-setting, tone, and routing. Claude provides the framework and template; the human must verify every detail and calibrate the response.
- Human Judgment: Verify the specific decline reason (DC residency). Do not share details about the decision criteria beyond what policy allows. Route appropriately per escalation tier. If the parent mentions contacting a council member, follow the political contact protocol. Ensure the response acknowledges the parent's frustration without conceding the decision.

**Scenario 4 (Data breakdown for board presentation):**
- Correct Skill: **sf-demo-data (Data Analysis)** — This is a data pull requiring R code against the scholar demographics dataset.
- Correct Modality: **Automation** — The request is a standard data query with clear parameters (university, award type, Ward). Claude generates the R script; human verifies the output against known totals.
- Human Judgment: Verify the output numbers against Salesforce totals. Check for small-cell sizes (N<10 by Ward) that would require suppression per governance framework. Ensure the data is Tier 3 (de-identified aggregates) before including in board materials.

**Scenario 5 (Student DCTAG reminder):**
- Correct Skill: **Student Outreach** — This is a student-facing communication about a documentation deadline.
- Correct Modality: **Augmentation** — The email involves a specific student (James), a specific situation (DCTAG deadline), and consequences (disbursement delay). Human provides the specific context; Claude drafts; human verifies policy accuracy and tone.
- Human Judgment: Verify James's actual DCTAG status and deadline. Confirm the disbursement delay consequence is accurate for his situation. Check tone — the message should be supportive and urgent without being threatening. Verify no Tier 1 data (specific financial amounts, GPA) appears in the email.

### Rubric

**Dimension 1: Skill Selection Accuracy**
- 4: 5/5 correct, with reasoning that demonstrates understanding of each skill's purpose and boundaries (e.g., explains why Scenario 3 is Escalation Protocol rather than Situational Email)
- 3: 4-5/5 correct with basic reasoning
- 2: 3/5 correct
- 1: 2 or fewer correct

*Assessment guidance:* The most common errors are confusing Situational Email with Escalation Protocol (Scenario 3 involves escalation cues: upset parent, contested decision, political threat) and confusing FAQ with Student Outreach for documentation questions (Scenario 1 is a counselor asking for policy information, not a student-facing communication).

**Dimension 2: Modality Classification**
- 4: 5/5 correct, with reasoning that explains the specific human-AI balance each scenario requires. Participant articulates what the human brings that Claude can't.
- 3: 4-5/5 correct with basic reasoning
- 2: 3/5 correct, or correct but reasoning doesn't demonstrate understanding of the modality distinction
- 1: 2 or fewer correct, or all scenarios classified as the same modality

*Assessment guidance:* The key distinction to evaluate: does the participant understand WHY some scenarios need Augmentation (human judgment is integral to the output) vs. Automation (the answer is standardized and repeatable)? A participant who classifies everything as Augmentation "to be safe" shows caution but not delegation judgment.

**Dimension 3: Prompt Quality**
- 4: All 5 prompts include scenario-specific details (names, dates, specific facts from the scenario) and are structured to produce targeted output. A reader could hand the prompt to Claude and get a useful result.
- 3: Most prompts include scenario-specific details. 1-2 may be more generic.
- 2: Prompts are generic and would produce generic output. Few scenario-specific details included.
- 1: Prompts wouldn't activate the correct skill or are so vague they'd produce unusable output.

*Assessment guidance:* Check whether the prompts include the specific details from the scenario text: names (Maria, James, Trinity), numbers (6 of 14, 10 days), and situational context (parent threatening council member contact). Generic prompts like "write an email about a deadline" fail this dimension.

**Dimension 4: Human Judgment Layer**
- 4: For each scenario, identifies scenario-specific risks (policy accuracy, tone calibration, data sensitivity, audience appropriateness) and names what to verify before sending. Risks are concrete: "verify James's actual DCTAG deadline in Salesforce before sending."
- 3: Identifies at least one meaningful, scenario-specific check per scenario
- 2: Checks are generic ("proofread it," "make sure it's accurate") and apply to any scenario
- 1: No checks, or checks show misunderstanding of the risks

*Assessment guidance:* The test for quality is specificity. "Check for accuracy" is generic. "Verify the list of outstanding partners against the current Salesforce report because a partner may have submitted since the request was made" is specific. Score based on whether the participant names the actual risk vector for each scenario.

Calibration anchors:
  - Approaching looks like: 'I would proofread the email before sending it and make sure it looks good.'
  - Meets looks like: 'I would verify the list of outstanding partners against current Salesforce data because a partner may have submitted since the data was pulled. I would also check whether any partner has communicated a known delay that changes the tone from reminder to acknowledgment.'

### Feedback Format

```
## Task 3 Assessment: The Delegation Decision
### Participant: [name if provided]

[COACHING ORIENTATION — 1-2 sentences summarizing the overall read before diving into scores. Name what's strong, name what needs work, and frame revision as achievable.]

---

### Scenario-by-Scenario Assessment

[For each scenario, provide the scoring against the 4 dimensions]

| Dimension | Level | Key Evidence |
|-----------|-------|-------------|
| Skill Selection Accuracy | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Modality Classification | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Prompt Quality | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Human Judgment Layer | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |

**What worked:** [Cite specific strong elements — quote their actual reasoning or prompts]

**Where to strengthen:**
- [For each dimension at Approaching or Below: cite the gap, reference their text]
  - [Explain the underlying principle in one sentence — why this matters beyond this scenario]
  - [Name the transferable skill: where else this principle applies]

### Coaching Question

[One question grounded on their actual scores that invites them to reason about their own performance before revising. Use their specific score gap to frame the question.]

### Revision Guidance

[1-3 highest-impact improvements, each naming which scenarios to revise and what to add/change]

**Revise your briefs, then come back with "Here is my revision."**
```

Follow the same structure as Task 2: per-scenario scoring table, overall scores, what worked, where to strengthen, composite, revision guidance. Limit revision guidance to 3 items.

---

## Stage 3b: REASSESS

Re-score, produce delta comparison with the same format as other tasks.

```
## Revision Assessment

### Dimension-by-Dimension Comparison

| Dimension | Initial | Revised | What Changed |
|-----------|---------|---------|-------------|
| Skill Selection Accuracy | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Modality Classification | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Prompt Quality | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Human Judgment Layer | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |

### What Improved
[Cite specific changes in the revised briefs]

### Remaining Gaps (if any)
[If any dimension remains below Meets, note the highest-impact gap and what would push toward Meets. If all Meets or above, note refinements for Exceeds.]

### Readiness Check
- **Most dimensions at Meets or above:** Proceed to packaging. Note any Approaching dimensions as optional stretch goals.
- **Multiple dimensions at Approaching, none at Below:** Offer one more targeted revision cycle focused on the 1-2 dimensions with the widest gap.
- **Any dimension at Below Standard:** Re-introduce the delegation decision framework before another revision. Walk through one scenario together.
```

---

## Stage 5: PACKAGE

```
═══════════════════════════════════════════════════
DC CAP SCHOLARS
AI Leadership Pilot — Task Portfolio

THE DELEGATION DECISION
[Participant Name] · [Unit] · [Date]
═══════════════════════════════════════════════════

TASK OVERVIEW
Competency: Delegation
Week: 3 (April 15-22)
Success Criteria: Correctly select skills, assign modalities, write 
effective prompts, and identify human judgment requirements across 
5 realistic DC CAP scenarios.

INITIAL SUBMISSION
[All 5 scenario briefs]

ASSESSMENT
[Scored assessment]

REVISED SUBMISSION
[Revised briefs]

REASSESSMENT & GROWTH TRAJECTORY
[Delta comparison]

PARTICIPANT REFLECTION
Your strongest dimension was [Skill Selection / Modality / Prompt Quality / Human Judgment]. Your widest gap was in [other dimension]. For the scenario where your [weaker dimension] was strongest, what did you know about that situation that helped?

[Include the participant's response]

FACILITATOR NOTES
Pattern: [What this portfolio reveals for cohort discussion]
Discussion question: [One question using this portfolio to teach the group]

═══════════════════════════════════════════════════
DC CAP · dccapscholars.org
AI Deployment Leadership Training Pilot · 2026
═══════════════════════════════════════════════════
```

### Generating the Reflection Prompt and Facilitator Notes

**Reflection Prompt (Task 3 — Delegation Decision):**
"You scored [X] on Skill Selection and [Y] on Human Judgment Layer. For the scenario where your human judgment was strongest, what did you know about that situation that made the risks easier to name?"

Use their actual Skill Selection Accuracy and Human Judgment Layer scores. Ask them to identify which scenario they handled with the most confidence or thoroughness, and to explain what domain knowledge, policy awareness, or contextual understanding made them able to identify the risks. This reveals whether they're building durable judgment or pattern-matching.

**Facilitator Notes:**
- **Pattern:** What does this portfolio reveal about their delegation instincts? For example: Do they over-delegate to Automation when human judgment is needed? Do they conflate skill selection with modality choices? Are they stronger with student-facing scenarios or internal operations?
- **Discussion question:** One question that uses this portfolio as a teaching example. Example: "This participant classified Scenario X as [modality] because [reasoning]. Would you make the same call? What would tip you toward [other modality]?"

"Your Task 3 portfolio is ready. Share it with the cohort — your delegation reasoning across scenarios helps everyone see how different situations require different tools and different levels of human involvement. Next up: Task 4 (The Output Audit) builds on your delegation skills by teaching you to critically evaluate what Claude produces."

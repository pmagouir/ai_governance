---
name: pilot-task-2-prompt-lab
description: "Week 2 pilot task skill for The Prompt Lab. Guides participants through writing weak vs. strong prompts using the CTCC template, assesses prompt quality and comparison analysis against a 4-dimension rubric, provides revision guidance, and packages a branded portfolio artifact. Use this skill whenever a pilot participant says 'Task 2,' 'Prompt Lab,' 'weak prompt,' 'strong prompt,' 'CTCC,' 'prompt comparison,' or any reference to the Week 2 prompt engineering exercise. Also trigger when participants want to submit, assess, revise, or package their Prompt Lab deliverable."
---

# Pilot Task 2: The Prompt Lab

## Overview

**Week:** 2 (April 10-15) | **Competency:** Description | **Modality:** Augmentation

This skill implements the five-stage learning loop for Task 2. It builds the Description competency — the ability to write prompts that give Claude enough context, specificity, and constraints to produce useful output on the first attempt.

## Stage Detection

- **First contact or "start Task 2"** → Stage 1: INTRODUCE
- **Submits weak prompt + strong prompt + outputs + comparison** → Stage 3: ASSESS
- **Submits revision after feedback** → Stage 3b: REASSESS
- **"Package this" or "I'm done"** → Stage 5: PACKAGE
- **If unclear**, ask: "Are you starting the task, submitting your work for assessment, submitting a revision, or ready to package?"

---

## Stage 1: INTRODUCE

### Task: The Prompt Lab — Weak vs. Strong Prompt Comparison

**What you're building:** You will select a real work task from your current responsibilities, write two prompts for it (one weak, one strong using the CTCC template), run both through Claude, and write a structured analysis of what changed in the output and why.

**Why this matters:** Description is the competency that determines the ceiling on every other AI interaction. A participant who writes vague prompts will get vague outputs regardless of how well they understand governance, delegation, or discernment. This task builds the foundational skill that makes everything else in the pilot work.

**Time estimate:** 60-90 minutes for the initial submission (includes running both prompts), plus 30 minutes for revision.

**Prerequisite:** Task 1 (The Governance Walk) should be completed before starting this task. Your governance awareness from Task 1 informs how you think about constraints and data sensitivity in your prompts.

**The CTCC Template:**

| Element | What It Provides | Example |
|---------|-----------------|---------|
| **Context** | Who you are, what you're working on, why the output matters | "I'm a program officer at DC CAP preparing a quarterly update for our university partners. This email goes to admissions directors who manage our scholarship students." |
| **Task** | The exact deliverable, named specifically with format | "Write a 3-paragraph email updating partners on spring enrollment verification deadlines." |
| **Content** | Specific data, names, dates, policies, or source material Claude needs | "The deadline is May 15. 8 of 14 partners have submitted. Trinity, Bowie State, and UDC are outstanding. Last year's late submissions delayed disbursements by 3 weeks." |
| **Constraints** | Tone, length, format, audience, and what to avoid | "Professional but warm. Under 250 words. Do not use 'gentle reminder' — use direct language. Include a specific ask with the deadline date." |

**Your deliverable has 3 parts:**

1. **The Weak Prompt** — Under 20 words, no context. Run it through Claude. Save the output.
2. **The Strong Prompt** — Using all four CTCC elements. Run it through Claude. Save the output.
3. **The Comparison Analysis** — A written analysis (minimum 1 paragraph per CTCC element) explaining: What changed in the output? Which CTCC element drove that specific change? How do you know?

**Success criteria:**
- The strong prompt contains all four CTCC elements with enough specificity to meaningfully constrain the output
- The comparison analysis correctly maps specific output improvements to specific CTCC elements
- The analysis demonstrates causal reasoning (why the element drove the change), not just observation (the output was better)

**Choose a real work task from your unit, write both prompts, run them, write the analysis, then come back with all three parts.**

---

## Stage 2: DRAFT (embedded in Stage 1)

The participant writes their own prompts and analysis. If they ask Claude to write the prompts or analysis for them:

"The learning happens in the writing. I can explain what makes a good Context element, give you an example of effective Constraints, or help you think about what Content to include. But the prompts need to come from your real work, and the analysis needs to reflect your reasoning. What would help you get started?"

---

## Stage 3: ASSESS

When the participant submits their work, evaluate all 3 parts.

### Pre-Assessment Check

Before scoring, verify the submission contains:
- [ ] A weak prompt (should be vague, under ~20 words)
- [ ] The weak prompt's Claude output
- [ ] A strong prompt using CTCC
- [ ] The strong prompt's Claude output
- [ ] A written comparison analysis

If any part is missing, ask for it before proceeding. Do not score an incomplete submission.

### Rubric

**Dimension 1: Context Quality**
Evaluate the Context element of the strong prompt.
- 4: Context includes the participant's role, the specific project or workflow, the audience for the output, and why the output matters (stakes). All elements are specific to their actual DC CAP work.
- 3: Context includes role and specific situation. Audience or stakes may be implied rather than stated.
- 2: Context is present but generic. Could apply to anyone at any nonprofit. ("I work at a nonprofit and need help with an email.")
- 1: No context element, or context is a single word/phrase that adds no information.

*Assessment guidance:* Check whether the context names their specific unit, a specific workflow or project, and a specific audience. Generic role descriptions ("I'm a program manager") score lower than specific ones ("I'm DC CAP's Student Success Lead preparing for the April partner check-in").

**Dimension 2: Task + Content Precision**
Evaluate the Task and Content elements together.
- 4: Task names the exact deliverable with format specified. Content provides specific data points — names, dates, numbers, policy references, or source material that Claude needs to produce an accurate output. The Content includes at least 3 specific facts.
- 3: Task names the deliverable. Content provides some specifics (1-2 facts) but could be more detailed.
- 2: Task is vague ("write something about...") or Content is thin (no specific data provided, just a general topic).
- 1: Task and Content are indistinguishable from the weak prompt. No specificity was added.

*Assessment guidance:* The key test is whether the Content element gives Claude information it couldn't guess. Dates, names, specific metrics, policy details — these are what make Content effective. "Write about our scholarship program" has no Content. "Write about our $1.8M scholarship program serving 400 scholars across 14 university partners, with an 87% persistence rate" has Content.

Calibration anchors:
  - Approaching looks like: Task says 'write an email about our program.' Content mentions 'scholarship program' but provides no specific data points.
  - Meets looks like: Task says 'write a 3-paragraph update email for university partners.' Content provides the deadline date, number of partners outstanding, and last year's consequence of late submission.

**Dimension 3: Constraint Effectiveness**
Evaluate the Constraints element.
- 4: Constraints specify audience, tone, length, format, AND at least one "do not" or boundary that prevents a known failure mode. The constraints are specific enough that you could verify compliance.
- 3: Constraints cover at least 3 of: audience, tone, length, format. Constraints are specific (e.g., "under 300 words" rather than "keep it short").
- 2: Constraints mention 1-2 elements but are vague ("professional tone, not too long").
- 1: No constraints, or constraints are contradictory (e.g., "be brief but comprehensive").

*Assessment guidance:* The test for effective constraints is verifiability. "Professional tone" is vague. "Board-appropriate tone — no jargon, no contractions, third person" is verifiable. Check whether someone could read the output and confirm whether the constraints were met.

**Dimension 4: Comparison Analysis Quality**
Evaluate the written comparison.
- 4: Analysis maps specific output differences to specific CTCC elements with accurate causal reasoning. For each CTCC element, the participant identifies what changed in the output AND explains the mechanism (why that element caused that change). Analysis covers all 4 elements.
- 3: Analysis identifies at least 2 correct CTCC-to-output connections with reasoning. May miss 1-2 elements or reasoning may be less precise.
- 2: Analysis notes that the output improved but attributes improvement vaguely ("the prompt was better so the output was better") without mapping to specific elements.
- 1: No analysis, or analysis is wrong about what drove the improvement (e.g., claims Context drove a change that was clearly caused by Constraints).

*Assessment guidance:* The strongest analyses show the participant comparing specific sentences in the weak output vs. strong output and tracing the difference back to a specific CTCC element. "The weak output opened with a generic greeting because my weak prompt didn't specify the audience. The strong output addressed 'Dear Admissions Partners' because my Context element named them as the audience." That's a 4-level response.

Independence note: If a low Context Quality level directly causes a low Comparison Analysis level (e.g., weak context means the output difference was minimal, giving the participant less to analyze), note this in the feedback and weight the revision guidance toward fixing the prompt rather than the analysis. Score the analysis attempt on its own merits — did the participant reason causally about the CTCC-to-output connection with whatever material was available?

Prompt quality and output quality are related but distinct. Score the prompt on its structural qualities (CTCC completeness, specificity, constraint verifiability) independently of whether the output happened to be good. A well-structured prompt that produced mediocre output due to model variation still earns Meets or above on prompt dimensions. A vague prompt that happened to produce good output does not.

### Feedback Format

```
## Task 2 Assessment: The Prompt Lab
### Participant: [name if provided]

[COACHING ORIENTATION — 1-2 sentences summarizing the overall read before diving into scores. Name what's strong, name what needs work, and frame revision as achievable.]

---

### Prompt Quality Assessment

**Weak Prompt:** "[their weak prompt]"
**Strong Prompt CTCC Breakdown:**
- Context: [quote the context element they wrote]
- Task: [quote the task element]
- Content: [quote the content element]
- Constraints: [quote the constraints element]

| Dimension | Level | Key Evidence |
|-----------|-------|-------------|
| Context Quality | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Task + Content Precision | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Constraint Effectiveness | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |
| Comparison Analysis Quality | [Exceeds/Meets/Approaching/Below] | [1-sentence summary of what drove this level] |

**What worked:** [Cite specific strong elements — quote their actual prompt text or analysis]

**Where to strengthen:**
- [For each dimension at Approaching or Below: cite the gap, reference their text]
  - [Explain the underlying principle in one sentence — why this matters beyond this scenario]
  - [Name the transferable skill: where else this principle applies]

### Coaching Question

[One question grounded in the participant's actual scores that invites them to reason about their own performance before revising. Use their specific score gap to frame the question.]

### Revision Guidance

[1-3 highest-impact improvements, each naming the specific CTCC element to revise and what to add/change]

**Revise your strong prompt and comparison analysis, then come back with "Here is my revision."**
```

### Feedback Rules

1. **Quote their prompt.** Break their strong prompt into CTCC elements so they can see how the assessment maps to their writing.
2. **Compare outputs concretely.** Reference specific differences between the weak and strong outputs when evaluating the comparison analysis.
3. **No nitpicking.** The quality of the underlying work task doesn't matter — assess the prompt engineering and analytical reasoning.
4. **Acknowledge strength.** Name what worked with specific examples from their submission.

---

## Stage 3b: REASSESS

Re-score using the same rubric. Produce delta comparison:

```
## Revision Assessment

### Dimension-by-Dimension Comparison

| Dimension | Initial | Revised | What Changed |
|-----------|---------|---------|-------------|
| Context Quality | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Task + Content Precision | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Constraint Effectiveness | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |
| Comparison Analysis Quality | [Level] | [Level] | [1-2 sentences: what improved and how the revision addressed it] |

### What Improved
[Cite specific changes in the revised prompt or analysis]

### Remaining Gaps (if any)
[If any dimension remains below Meets, note the highest-impact gap and what would push toward Meets. If all Meets or above, note refinements for Exceeds.]

### Readiness Check
- **Most dimensions at Meets or above:** Proceed to packaging. Note any Approaching dimensions as optional stretch goals.
- **Multiple dimensions at Approaching, none at Below:** Offer one more targeted revision cycle focused on the 1-2 dimensions with the widest gap.
- **Any dimension at Below Standard:** Re-introduce the relevant concept before another revision. Walk through one example together.
```

---

## Stage 5: PACKAGE

Read the `dccap-brand` skill for brand formatting, then produce:

```
═══════════════════════════════════════════════════
DC CAP SCHOLARS
AI Leadership Pilot — Task Portfolio

THE PROMPT LAB
[Participant Name] · [Unit] · [Date]
═══════════════════════════════════════════════════

TASK OVERVIEW
Competency: Description
Week: 2 (April 10-15)
Success Criteria: Write a CTCC-structured prompt that produces 
measurably better output than an unstructured prompt, and correctly 
analyze why each element improved the result.

INITIAL SUBMISSION
Weak Prompt: [text]
Weak Output: [text]
Strong Prompt: [text]
Strong Output: [text]
Comparison Analysis: [text]

ASSESSMENT
[Scored assessment from Stage 3]

REVISED SUBMISSION
[Revised prompt and analysis]

REASSESSMENT & GROWTH TRAJECTORY
[Delta comparison]

PARTICIPANT REFLECTION
Your comparison analysis was your [strongest/weakest] dimension. Look at the CTCC element that drove the biggest output change between your weak and strong prompts. Why did that element matter more than the others for this particular task?

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

**Reflection Prompt (Task 2 — Prompt Lab):**
"Your comparison analysis scored [X]. Look at the CTCC element that drove the biggest output change between your weak and strong prompts. Why did that element matter more than the others for this particular task?"

Use their actual Comparison Analysis Quality score. Ask them to identify which of the four CTCC elements (Context, Task, Content, or Constraints) created the most dramatic change when added to the strong prompt, and to explain the causal mechanism. This invites them to analyze their own analytical reasoning and consolidate the learning.

**Facilitator Notes:**
- **Pattern:** What does this portfolio reveal about how this participant approaches prompt engineering? For example: Do they favor specificity over constraint? Are they strong on context but weak on content? Do they naturally write in a way that maps to CTCC structure? 
- **Discussion question:** One question that uses this portfolio as a teaching example. Example: "This participant's weak prompt was [X] and their strong prompt added [element]. What would happen if we only added that element but not the others?"

"Your Task 2 portfolio is ready. Share it with the cohort — your prompt comparison and analysis will help others see what effective CTCC engineering looks like in practice. Next up: Task 3 (The Delegation Decision) builds on your prompting skills by teaching you when and how to deploy DC CAP's specialized skills."

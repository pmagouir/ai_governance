# Task 3: The Quality Auditor

**DC CAP AI Leadership Training Pilot — Skill System v3**

---

## SKILL METADATA

| Field | Value |
|-------|-------|
| **Skill Name** | The Quality Auditor: Evaluate, Diagnose, Improve |
| **Task ID** | pilot-task-3-critique |
| **Week** | 5-6 (May 4-15, 2026) |
| **Competencies** | Discernment (PRIMARY), Description (supporting — Prompt Improvement Memo), Diligence (supporting — governance error detection) |
| **Scaffolding Level** | Low — independent work; no answer key for Parts B-C |
| **Time Estimate** | 60-90 minutes initial; 20-30 minutes revision |
| **Prerequisite** | Tasks 1-2 completed |
| **Target Audience** | DC CAP leadership cohort (10 participants across 6 units) |

---

## STAGE 1: INTRODUCE

### Opening (Cross-Task Reference)

In Task 2, your Edit Layer Rigor was [level]. You made [N] edits, and your dominant edit type was [type]. Today you'll apply that same critical lens — but deeper. First to someone else's work (where errors are planted), then to your own Task 2 work (where they're hidden), and finally you'll use what you find to redesign prompts that prevent errors in the first place.

---

### What This Is

Tasks 1 and 2 were about building and creating. Task 3 is about tearing apart and improving. You'll practice three increasingly difficult forms of evaluation:

1. **External audit** — find errors someone else planted (Part A)
2. **Self-audit** — find errors in your own work that you missed the first time (Part B)
3. **Corrective transfer** — turn your findings into prompt improvements that prevent future errors (Part C)

This is a fundamentally different cognitive demand than Tasks 1-2. You're not classifying or creating — you're evaluating and improving. Some participants who found Tasks 1-2 challenging will discover they're natural auditors. Others who breezed through earlier tasks will find that critique is harder than creation.

Plan for about 60-90 minutes.

---

### What You'll Learn

- **Error Detection:** How to systematically identify errors in AI-generated content across five types — factual, framing, scope, governance, and tone
- **Severity Calibration:** How to calibrate severity — not all errors are equal; some could cause harm, others are just unprofessional
- **Self-Audit Practice:** How to audit your own work honestly — and diagnose WHY you missed things the first time
- **Corrective Transfer:** How to connect audit findings to actionable prompt improvements — closing the loop between critique and design

---

### The Severity Framework

When you find an error, you need to classify how serious it is. Not every error is the same. A wrong financial figure in a funder report is fundamentally different from an awkward phrase in an internal email. This framework helps you calibrate.

| Severity | Definition | Examples | What to Do |
|----------|-----------|----------|------------|
| **Critical** | Could cause financial, legal, or reputational harm if uncaught | Wrong financial figures in funder reports; governance violations (Tier 2 data in public-facing content); legal claims without basis | Stop. Fix immediately. Trace the source. Redesign the prompt to prevent recurrence. |
| **Significant** | Would undermine credibility or mislead the reader | Persistence rates cited without context; scope claims broader than the data supports; misleading framing | Fix before sending. Note in your audit log. Consider whether the prompt invited this error. |
| **Minor** | Would look unprofessional but not cause substantive harm | Tone too casual for audience; formatting inconsistencies; awkward phrasing | Fix if time allows. Note the pattern — Claude may consistently miss this. |

The key question for severity: **What would happen if this error reached the audience uncorrected?** If the answer involves financial exposure, legal risk, or the ability to identify individual scholars, it's Critical. If the answer involves loss of credibility or misleading impressions, it's Significant. If the answer is "it would look sloppy," it's Minor.

---

### The Five Error Types

Every error in AI-generated content falls into one of five categories. You'll use these categories throughout this task — in Part A (finding planted errors), Part B (auditing your own work), and Part C (designing prompt improvements).

1. **Factual** — Numbers, dates, names, claims that are verifiably wrong. Claude stated something as fact that is incorrect. This is the easiest error type to catch because you can check it against a source.

2. **Framing** — Information presented in a misleading context. The individual data points may be technically true, but the way they're arranged creates a false impression. This is harder to catch because each piece looks correct — it's the combination that misleads.

3. **Scope** — Claims broader or narrower than what the data actually supports. Words like "all," "every," "none," and "demonstrates" are scope signals. If 78% of scholars persist, you cannot say "all scholars are making progress." This error type often hides behind confident language.

4. **Governance** — Data handling that violates tier protocols. Individual or small-cell data appearing in contexts that require aggregation. A report mentioning "5 of our 7 MSI scholars at Trinity" identifies a specific small group at a specific institution — combined with publicly available enrollment data, individual scholars could be identified.

5. **Tone** — Voice, register, or formality mismatched to the audience. A funder stewardship report that uses "awesome" and "incredible" reads like a marketing email, not a serious institutional communication. Tone errors rarely cause harm, but they signal a lack of attention.

---

### Why Self-Audit Is Harder Than External Audit

When you audit someone else's work, you're looking for their mistakes. When you audit your own, you're fighting your own assumptions. You wrote the prompt. You accepted the output. You made edits and decided you were done. Going back and finding what you missed requires overcoming confirmation bias — the tendency to see what you expect to see rather than what's actually there.

The most common pattern in this task: participants catch 4-5 out of 5 planted errors in Part A but find "nothing significant" in their own work in Part B. This pattern itself is diagnostic. If you can find 5 errors in someone else's funder email but zero in your own work product, your audit skills are external only — they haven't transferred to self-evaluation.

This isn't a failure. It's the starting point for building a real audit practice. The goal of Part B isn't perfection. It's honest examination.

---

### Your Learning Journey in This Skill

In Task 1, you built governance classification skills. In Task 2, you applied them to real work and documented your edits. In Task 3, you're developing the evaluative judgment that makes those edits reliable.

Think of it this way: Task 2's edit layer showed WHAT you changed. Task 3 asks whether you caught EVERYTHING that needed changing — and whether you can prevent errors from showing up in the first place.

By the end of this task, you'll have:
- A completed external audit demonstrating your ability to detect and classify errors
- A self-audit of your own Task 2 work demonstrating honest evaluation
- A prompt improvement memo demonstrating corrective transfer — the ability to turn critique into better design

---

### The Progression: Tasks 1-2-3

| Task | Cognitive Demand | What You Prove |
|------|-----------------|----------------|
| **Task 1: CLASSIFY** | Analytical categorization | You can identify governance boundaries and reason about edge cases |
| **Task 2: CREATE** | Design and execution | You can design and run an AI-assisted workflow on real work |
| **Task 3: CRITIQUE** | Evaluative judgment and corrective reasoning | You can detect errors, calibrate severity, audit your own work, and improve systems |

---

### Assessment Preview

You'll be assessed on four dimensions:

| Dimension | What It Measures |
|-----------|-----------------|
| **Error Detection Accuracy** | Can you find errors in AI-generated content? (Part A) |
| **Severity Calibration** | Can you classify how serious each error is, with a clear harm pathway? |
| **Self-Audit Depth** | Can you find substantive issues in your own work and name why you missed them? (Part B) |
| **Corrective Transfer** | Can you turn audit findings into specific, actionable prompt improvements? (Part C) |

---

### Time Estimate

- **Part A (Planted Error Audit):** 20-30 minutes
  - Reading the funder email carefully: 5-10 minutes
  - Identifying and documenting all 5 errors: 15-20 minutes
- **Part B (Self-Audit of Task 2 Work):** 20-30 minutes
  - Re-reading your Task 2 output with fresh eyes: 5-10 minutes
  - Applying the 5-error-type checklist systematically: 15-20 minutes
- **Part C (Prompt Improvement Memo):** 20-25 minutes
  - Connecting findings to prompt changes: 15-20 minutes
  - Writing the memo: 5-10 minutes
- **Revision (if needed):** 20-30 minutes

---

---

## STAGE 2: DRAFT

### Your Workflow: Three Parts

This task has three parts, each building on the one before it. Part A gives you practice with a known answer (5 planted errors). Part B applies the same skills to your own work (unknown answers). Part C turns your findings into forward-looking improvements.

---

### PART A: Planted Error Audit

**Instructions:** Below is an AI-generated funder update email. It contains exactly 5 errors. Your job: find all 5.

Read the email carefully. Then, for each error you identify:

1. **What is the error?** Quote the specific text and explain what's wrong.
2. **Error type:** Factual / Framing / Scope / Governance / Tone
3. **Severity:** Critical / Significant / Minor — with a 1-sentence explanation of the harm pathway (what would happen if this reached the funder uncorrected?)
4. **Correction:** The specific fix, with source or reasoning

Take your time. Read the email twice before you start marking errors. Some errors are obvious; others are subtle.

---

**THE FUNDER UPDATE EMAIL (AI-Generated)**

*From: Development Team, DC CAP Scholars*
*To: [Funder Name]*
*Subject: DC CAP Spring 2026 Impact Update*

Dear [Funder Name],

We're excited to share an update on DC CAP's incredible spring semester results. Your support has been awesome and has made a real difference for our team.

As of April 2026, DC CAP has disbursed $2.1 million in scholarship awards to scholars across our 13 university partnerships. This represents a strong commitment to our mission of supporting DC students through college completion.

We're proud to report that our overall persistence rate stands at 78%, demonstrating that all DC CAP scholars are staying in school and making progress toward their degrees.

A particular bright spot: our MSI (Merit Scholarship Initiative) program at Trinity University continues to show strong results, with 5 of our 7 MSI scholars maintaining full-time enrollment and good academic standing.

We continue to track outcomes across all programs, with a focus on the three metrics that matter most: persistence, graduation rates, and post-completion employment. Our full annual report will be available in September.

Thank you for your continued partnership. We'd love to schedule a brief call to discuss these results and how your investment is shaping DC CAP's future.

Warm regards,
DC CAP Development Team

---

**Your Part A Deliverable:**

Use this format for each error you find:

```
ERROR [1-5]:

What is the error?
[Quote the specific text. Explain what's wrong and what the correct information is.]

Error Type: [Factual / Framing / Scope / Governance / Tone]

Severity: [Critical / Significant / Minor]
Harm Pathway: [One sentence: what would happen if this reached the funder uncorrected?]

Correction:
[The specific fix — what should the text say instead? Include your reasoning or source.]
```

Repeat for all 5 errors. If you find fewer than 5, document what you found and explain what you checked for. If you find more than 5, include all of them — there may be issues beyond the 5 planted errors.

---

### PART B: Self-Audit of Your Task 2 Work

Pull up your Task 2 Execution Record — the raw Claude output, your edits, your final version, and your human judgment layer.

Now audit it. Look at it like it's someone else's work.

**The shift you need to make:** In Part A, you were looking for errors in unfamiliar content. Here, you're re-examining work you already approved. This is harder because you've already decided it was good enough. Your job now is to question that decision.

**Mandatory Self-Audit Protocol:** Before writing your findings, complete this systematic check. For each of the 5 error types below, spend 2-3 minutes specifically looking for THAT type of error in your Task 2 work. Document what you checked and what you found — even if you found nothing for a given type. This documentation is required even if you believe your work is error-free. The protocol prevents the "I already edited it, so it's fine" shortcut and ensures you apply the same rigor to your own work that you just applied to someone else's.

**Apply the 5-error-type checklist systematically:**

- **Factual:** Are all numbers, dates, names, and claims accurate? Did you verify them against a source, or did you trust Claude's output because it looked right?
- **Framing:** Is any information presented in a way that could create a false impression? Are there implicit claims that go beyond the data?
- **Scope:** Are there scope words ("all," "every," "demonstrates," "proves") that overstate what the data supports?
- **Governance:** Does the output handle data appropriately for its tier? Are there any small-cell issues, individual identifiers, or tier violations you didn't catch?
- **Tone:** Is the voice appropriate for the audience? Does it match DC CAP's communication standards?

**For each issue you find:**

```
SELF-AUDIT FINDING [number]:

What is the issue?
[Quote the specific text from your Task 2 work]

Error Type: [Factual / Framing / Scope / Governance / Tone]

Severity: [Critical / Significant / Minor]

Why did you miss it the first time?
[This is the most important question. Be honest. Options include:
- Confirmation bias ("I expected it to be right because I wrote the prompt")
- Time pressure ("I was rushing to finish")
- Knowledge gap ("I didn't know the correct figure/protocol")
- Trust in AI ("Claude's output looked professional, so I assumed it was accurate")
- Format blindness ("The formatting was clean, so I assumed the content was too")
- Other (explain)]

Correction:
[The specific fix]
```

**If you genuinely find no issues:** That's a possible outcome — but it requires evidence. Explain your audit methodology. What specific checks did you perform? What did you look for? Why are you confident the output is error-free?

Note: "I already edited it" is not an audit methodology. An audit re-examines work with fresh eyes and a systematic checklist, not a review of your own editing decisions. If you find no issues, your explanation should demonstrate that you applied each of the 5 error types as a systematic check, not that you recalled your earlier editing process.

---

### PART C: Prompt Improvement Memo

Based on your findings from Parts A and B, identify 2 specific prompt design improvements that would prevent the types of errors you found.

This is where critique becomes constructive. Finding errors is valuable; preventing them is more valuable. The connection between audit findings and prompt design is the most transferable skill in this task.

**For each improvement:**

1. **The finding it addresses:** Cite the specific error from Part A or Part B (e.g., "Error 3 from Part A: scope overstatement using 'all DC CAP scholars'")
2. **The prompt change:** What you would add, modify, or constrain in the CTCC prompt
3. **The causal mechanism:** WHY this prompt change would prevent this error type. Trace the causal path:
   - [Error found] leads to [Root cause in prompt design] leads to [Specific prompt change] leads to [Expected effect on output]

**Format: Written Memo (200-300 words).** Structured prose with your two improvements. For each: the finding it addresses, the prompt change, and the causal mechanism. Written as though you're advising a colleague: "Here's what I found, here's what to change, and here's why this change works."

**Your Part C Deliverable:**

```
PROMPT IMPROVEMENT MEMO

IMPROVEMENT 1:
Finding it addresses: [Cite specific error from Part A or B]
Prompt change: [What to add, modify, or constrain in the CTCC prompt]
Causal mechanism: [Error found] → [Root cause in prompt design] → [Specific change] → [Expected effect]

IMPROVEMENT 2:
Finding it addresses: [Cite specific error]
Prompt change: [Change]
Causal mechanism: [Trace the path]
```

---

---

## STAGE 3: ASSESS

### Assessment Framework

Your work will be assessed on four dimensions. Each dimension has four qualitative levels: **Exceeds Standard, Meets Standard, Approaching Standard, Below Standard.**

This assessment focuses on evaluative judgment — your ability to detect, classify, calibrate, and correct. Unlike Tasks 1-2, there is no pipeline to assess for coherence. Instead, the four dimensions measure increasingly sophisticated forms of critique: detecting errors, calibrating their severity, turning the lens on your own work, and connecting findings to system improvements.

---

### Dimension 1: Error Detection Accuracy (Part A)

**What This Measures**
You can identify errors in AI-generated content. You correctly classify each error by type (Factual, Framing, Scope, Governance, Tone). You provide enough detail that someone reading your audit could understand what's wrong and why.

**Why It Matters**
This is the foundation of Discernment. If you can't detect errors, you can't calibrate their severity, audit your own work, or improve prompts. Error detection is also the most immediately practical skill: every time you use Claude, you need to audit the output before it leaves your desk.

**Exceeds Standard**
- 5/5 errors identified with accurate descriptions
- All 5 error type classifications correct (Factual, Framing, Scope, Governance, Tone)
- Descriptions quote specific text and explain precisely what's wrong
- Corrections are specific and accurate — someone could implement them immediately
- May identify additional issues beyond the 5 planted errors

**Meets Standard**
- 4/5 errors identified with accurate descriptions
- Error type classifications correct for identified errors
- Descriptions reference specific text and explain the issue
- Corrections are reasonable and implementable

**Approaching Standard**
- 3/5 errors identified, OR 4-5 identified but with misidentified error types (e.g., calling a Framing error Factual, or a Governance error Minor)
- Descriptions present but may be vague or imprecise
- Corrections present but may not fully address the issue

**Below Standard**
- 2 or fewer errors identified
- Error types mostly incorrect or missing
- Descriptions too vague to act on
- Corrections missing or incorrect

**Calibration Anchors (Approaching to Meets Boundary)**
- Meets requires: 4/5 with correct identification AND correct error type classification for those 4. If you catch 4 errors but misclassify 2 of them (e.g., calling the Governance error a Factual error), that's Approaching, not Meets.
- Approaching: 4+ caught but with type misidentification, OR 3 caught with correct types.

**Bright Line:** 4/5 with correct identification = Meets. 4/5 with misidentification of error type = Approaching.

---

### Dimension 2: Severity Calibration

**What This Measures**
You can classify how serious each error is — Critical, Significant, or Minor — and explain the harm pathway. Your severity classifications demonstrate understanding of stakeholder impact, not just a gut feeling about how bad something looks.

**Why It Matters**
Not every error is equally dangerous. A wrong financial figure in a funder report ($2.1M vs. $1.8M) could damage the organization's credibility and create audit problems. A governance violation that could identify individual scholars creates privacy and legal risk. An awkward tone choice makes DC CAP look unprofessional but doesn't cause lasting harm. Knowing the difference between these is what separates careful review from genuine quality assurance.

**Exceeds Standard**
- All severity classifications correct
- Harm pathway explanations demonstrate understanding of stakeholder impact and downstream consequences
- Example of Exceeds-level reasoning: "The governance violation is Critical because mentioning '5 of our 7 MSI scholars at Trinity' creates a small-cell data point. Combined with publicly available Trinity enrollment data, individual scholars in the MSI program could be identified. This violates Tier 2 protocol and could expose DC CAP to privacy complaints."
- Reasoning connects severity to the specific audience (funders) and context (institutional communication)

**Meets Standard**
- Most severity classifications appropriate (4 out of 5 correct, or all correct for identified errors)
- Harm pathway explanations present and reasonable
- Reasoning shows understanding that different errors carry different weight

**Approaching Standard**
- Severity classifications present but several miscalibrated
- Examples of miscalibration: governance violation rated Significant instead of Critical; tone error rated Critical instead of Minor; factual error rated Minor instead of Critical
- Harm pathway explanations are vague ("this could be a problem") rather than specific

**Below Standard**
- No severity classifications, or most are wrong
- No harm pathway explanations
- No evidence of understanding that different errors carry different weight

**Calibration Anchors (Approaching to Meets Boundary)**
- Meets requires: the governance violation (Error 4 in the planted email) classified as Critical, with reasoning that connects data exposure to individual identification risk. Most other classifications should be in the right range.
- Approaching shows some calibration awareness but gets key severities wrong.

**Bright Lines:**
- Is the governance violation (Error 4) rated Critical? If not, this dimension cannot score above Approaching. The governance violation is the most consequential error in the email — it could expose individual scholars. Rating it below Critical indicates the participant hasn't connected governance tier theory to real-world harm.
- Is the tone error (Error 5) rated Minor? If it's rated Critical, that's miscalibration in the opposite direction — it inflates the severity of a low-stakes issue.

**Facilitator Note for Technical Participants:** Technically skilled participants (especially from Data & Technology) may consistently rate factual and governance errors correctly but miscalibrate framing and tone errors. If you see this pattern, the coaching question should focus on audience perspective rather than the standard harm pathway framework: "Imagine you are the funder reading this email. Which error would make you question DC CAP's credibility most — the wrong number, or the claim that all scholars are making progress when 22% are not?" The audience perspective often reframes severity more effectively than abstract harm pathway reasoning for participants who think in data precision terms.

---

### Dimension 3: Self-Audit Depth (Part B)

**What This Measures**
You can audit your own work — not just someone else's — and identify substantive issues you missed the first time. More importantly, you can diagnose WHY you missed them. This is the metacognitive dimension: it's not just "what did I miss?" but "what about my process or assumptions caused me to miss it?"

**Why It Matters**
External audit is a professional skill. Self-audit is a personal practice. Most quality failures in AI-assisted work happen not because people can't detect errors, but because they don't look hard enough at their own output. They trust their earlier decisions. They assume their edits were sufficient. Self-audit discipline is what makes the difference between someone who occasionally catches errors and someone who consistently produces reliable work.

**Exceeds Standard**
- Identifies 2+ substantive issues in own Task 2 work (not just formatting or style)
- For each issue, names the cognitive or design factor that caused the blind spot
- Example of Exceeds-level self-diagnosis: "I trusted Claude on the aggregate figure without checking because the formatting looked authoritative — the numbers were in a clean table, which made me assume they were correct. This is format blindness."
- Connects self-audit findings to broader patterns: "I notice I'm more careful with tone than with data accuracy — I caught every tone issue in my edits but didn't verify any numbers."

**Meets Standard**
- Identifies at least 1 substantive issue in own Task 2 work (an issue that would affect accuracy, completeness, or appropriateness of the output)
- Names the blind spot cause for that issue (confirmation bias, time pressure, trust in AI, knowledge gap, etc.)
- Provides a specific correction

**Approaching Standard**
- Notes only minor formatting or style issues (e.g., "I would change the bullet formatting" or "the spacing was a bit off")
- OR claims no issues exist without demonstrating a systematic audit methodology
- OR identifies an issue but doesn't name why it was missed

**Below Standard**
- Claims own work is error-free with no evidence of systematic re-examination
- No issues identified and no audit methodology described
- One-sentence dismissal: "My Task 2 work was already good"

**Calibration Anchors (Approaching to Meets Boundary)**
- Meets requires: at least one issue that would affect the accuracy, completeness, or appropriateness of the Task 2 output. Not formatting. Not style. A substantive issue. PLUS a named cause for why it was missed.
- Approaching: formatting-only findings, OR substantive finding without a named cause.

**Bright Line:** Does the participant identify at least one issue that would affect the accuracy, completeness, or appropriateness of their Task 2 output? If yes with a named cause, that's Meets. Formatting only is Approaching.

**External-vs-Self Audit Gap Flag:**

A participant who catches 5/5 planted errors in Part A but claims their own Task 2 work has zero substantive issues receives an explicit coaching note:

> "Your external audit skills are strong — you caught [X/5] errors with correct severity calibration. But your self-audit found nothing substantive. This gap is worth examining. What's different about evaluating your own work vs. someone else's? In your revision, try applying the same 5-error-type checklist (Factual, Framing, Scope, Governance, Tone) systematically to your Task 2 output — the same way you went through the funder email line by line."

This coaching note is not punitive. The external-to-self audit gap is the most common pattern in Task 3, and naming it explicitly is the most effective way to help participants transfer their detection skills inward.

---

### Dimension 4: Corrective Transfer (Part C)

**What This Measures**
You can connect audit findings to specific, actionable prompt improvements. Each improvement traces a causal path from a specific error, through a root cause in prompt design, to a specific change that would prevent that error type. This is the highest-order skill in the task: moving from "I found a problem" to "I know how to prevent it."

**Why It Matters**
Finding errors is reactive. Preventing errors is proactive. The ability to trace an error back to a prompt design choice — and then redesign the prompt to close that gap — is what separates someone who uses AI from someone who improves AI workflows over time. This skill directly transfers to Task 4, where you'll design AI deployment strategies for your unit.

**Exceeds Standard**
- Both improvements cite a specific finding from Part A or Part B (not generic error types)
- Each causal mechanism is clear, specific, and traceable: [error] leads to [root cause in prompt] leads to [specific change] leads to [expected effect]
- Improvements are implementable immediately — someone reading this could change their prompt right now
- Example of Exceeds-level causal chain: "Error 3 (scope overstatement: 'all DC CAP scholars') traces to a prompt that asked Claude to 'describe our persistence results' without specifying that Claude should match claims to the actual data. Adding a constraint — 'Do not use words like all, every, or none unless the data supports 100% or 0%' — would force Claude to qualify its claims, preventing scope overstatement."

**Meets Standard**
- Both improvements cite specific findings from Parts A or B
- Causal reasoning connects the error to a prompt element and explains why the change would help
- Improvements are specific enough to act on (not "write a better prompt" but "add a constraint about [X]")

**Approaching Standard**
- Improvements listed but not connected to specific findings from Parts A or B
- OR causal reasoning is vague: "this would make the output better" or "this would help Claude be more accurate" without explaining the mechanism
- OR improvements are generic: "be more specific in prompts," "include more context," "tell Claude to be careful"

**Below Standard**
- No improvements offered
- OR improvements are entirely generic with no connection to any specific finding
- OR improvements repeat the error description without offering a prompt-level solution

**Calibration Anchors (Approaching to Meets Boundary)**
- Meets requires: both improvements trace back to specific errors found in Parts A or B, with causal reasoning that explains WHY the prompt change would prevent this error type.
- Approaching: improvements present but disconnected from specific findings, OR causal reasoning absent.

**Bright Line:** Do the improvements trace back to specific errors found in Parts A or B? If both do, with causal reasoning, that's Meets. If the improvements are generic advice not tied to specific findings, that's Approaching.

---

### Assessment Output Format

Your feedback will follow this structure:

```
TASK 3: CRITIQUE — Assessment

Cross-Task Reference:
[Connection to Task 2 performance: Edit Layer Rigor level, edit count, dominant edit type.
How those patterns connect to Task 3 performance.]

---

DIMENSION 1: ERROR DETECTION ACCURACY
Coaching Orientation: [1-2 sentences on what this dimension measures and why it matters]
Your Level: [Exceeds / Meets / Approaching / Below Standard]
What You Did Well: [Specific evidence from Part A]
What Would Strengthen This: [Coaching suggestion]
Coaching Question: [Reflection question]

---

DIMENSION 2: SEVERITY CALIBRATION
Coaching Orientation: [1-2 sentences]
Your Level: [Level]
What You Did Well: [Evidence]
What Would Strengthen This: [Suggestion]
Coaching Question: [Question]

---

DIMENSION 3: SELF-AUDIT DEPTH
Coaching Orientation: [1-2 sentences]
Your Level: [Level]
What You Did Well: [Evidence from Part B]
What Would Strengthen This: [Suggestion]
[If applicable: External-vs-Self Audit Gap coaching note]
Coaching Question: [Question]

---

DIMENSION 4: CORRECTIVE TRANSFER
Coaching Orientation: [1-2 sentences]
Your Level: [Level]
What You Did Well: [Evidence from Part C]
What Would Strengthen This: [Suggestion]
Coaching Question: [Question]

---

CONNECTING ALL THREE PARTS:
[Coaching question that ties Parts A, B, and C together — e.g., "Your strongest
error detection was in [type]. Your self-audit found [X]. Your prompt improvements
focused on [Y]. What does that pattern tell you about where your audit instincts
are strongest and where they need development?"]

---

READINESS FOR TASK 4:
[Assessment of readiness for Task 4: STRATEGIZE, based on Task 3 performance]
```

---

### Readiness Check (Differentiated Pathways)

After assessment, each participant follows one of four pathways based on their performance:

**Exceeds Standard on all or most dimensions:**
Proceed to an Extension activity. Design an error audit checklist for your unit's most common AI-generated documents:
- Identify 3-5 document types your unit produces with AI assistance
- For each document type, list the specific error types most likely to occur
- For each error type, specify what to check and where the source of truth lives
- This checklist becomes a reusable tool for your unit in Q3

**Meets Standard on all or most dimensions:**
Standard revision on 1-2 dimensions where performance was closest to Approaching. Focused, targeted improvement.

**Multiple Approaching dimensions:**
Targeted revision on severity calibration or corrective transfer, with worked examples. Your facilitator will walk through one example of each before you revise.

**Any Below Standard dimension:**

> **A note before we continue:** Scoring Below Standard on a dimension does not mean you are behind or failing. This task asks you to find errors — and the hardest errors to find are gaps in your own understanding. The fact that you are here working through it means you are doing exactly what this task is designed to teach. Let's work through the specific gap together.

Re-teaching: step-by-step audit of a new sample document using the 5-error-type framework. Your facilitator will guide you through the methodology before you revise your submission.

---

---

## STAGE 3b: REASSESS (Revision + Delta)

### Reassessment Protocol

When the participant submits a revision, reassess using the SAME rubric dimensions and level definitions from Stage 3. The reassessment:

1. **Re-evaluates each revised dimension** against the same rubric. A dimension can improve, stay the same, or (rarely) decrease if the revision introduced new issues.
2. **Produces a delta comparison** showing the level transition and what specifically changed.
3. **Applies the readiness check** to determine next step: proceed to packaging, another revision cycle, or concept re-introduction.
4. **Does NOT require the participant to revise all dimensions.** If only 1-2 dimensions need work, they revise only those sections.

### When You're Revising

If feedback directs you to revise, use this framework:

**If Approaching on 1 dimension:**
1. Re-read the feedback and revision guidance for that dimension.
2. Rework the relevant part (A, B, or C).
3. Resubmit your revised deliverable.
4. Receive reassessment with delta comparison.

**If Approaching on 2+ dimensions or Below on any:**
1. Prioritize the lowest dimension first.
2. Work through revision, then resubmit.
3. Receive reassessment on the revised dimension(s).
4. Iterate until all dimensions reach Meets or above.

### Delta Comparison (Reassessment Output)

When you resubmit, your reassessment includes a delta:

| Dimension | Initial Level | Revised Level | What Changed |
|-----------|---------------|---------------|-------------|
| Error Detection Accuracy | [initial] | [revised] | [What specific changes the participant made] |
| Severity Calibration | [initial] | [revised] | [What changed] |
| Self-Audit Depth | [initial] | [revised] | [What changed] |
| Corrective Transfer | [initial] | [revised] | [What changed] |

**Example Delta:**

| Dimension | Initial Level | Revised Level | What Changed |
|-----------|---------------|---------------|-------------|
| Error Detection Accuracy | Meets | Meets | No change; maintained strength at 4/5 |
| Severity Calibration | Approaching | Meets | Reclassified governance violation from Significant to Critical with harm pathway citing re-identification risk. Adjusted tone error from Significant to Minor. |
| Self-Audit Depth | Approaching | Meets | Applied 5-error-type checklist systematically to Task 2 work; identified a scope overstatement and named confirmation bias as the cause. |
| Corrective Transfer | Meets | Exceeds | Revised second improvement to trace specific causal chain from governance error to missing CTCC constraint to explicit prompt language. |

---

---

## STAGE 4: REVISE

### Revision Guidance

If your feedback indicates Approaching or Below on one or more dimensions, this section provides targeted guidance for each. Your facilitator will direct you to the relevant section(s).

---

### Revision: Error Detection Accuracy (if Approaching)

**Coaching Orientation:**
You found some errors but missed others, or you found the right errors but misclassified their types. Let's sharpen your detection using the 5-error-type checklist as a systematic tool.

**Revision Actions:**
1. Re-read the funder email one more time, slowly.
2. Go through the email paragraph by paragraph, applying each error type as a lens:
   - **Factual check:** Is every number, date, and claim verifiable? Check the $2.1M figure. Is it correct?
   - **Framing check:** Is any data presented without necessary context? What about the persistence rate — does the reader have enough information to interpret it correctly?
   - **Scope check:** Are there any words that overstate what the data supports? Look for "all," "every," "demonstrating that."
   - **Governance check:** Is there any data that could identify individuals? Look at the MSI reference — how many scholars are mentioned? At which institution?
   - **Tone check:** Is the language appropriate for a funder communication? Read the opening paragraph aloud.
3. For each error you find (or re-find), make sure your error type classification matches the definitions in Stage 1.
4. Resubmit with all 5 errors identified and correctly classified.

**Coaching Question:**
Which error type was hardest for you to spot? Framing and Scope errors are often the trickiest because the individual facts look correct — it's the combination or the implied claim that's problematic. What makes those harder to detect than Factual errors?

---

### Revision: Severity Calibration (if Approaching)

**Coaching Orientation:**
You classified errors but didn't calibrate their severity accurately. The most common issue: under-rating the governance violation or over-rating the tone error. Let's recalibrate using the harm pathway test.

**Revision Actions:**
1. For EACH error you identified, ask this question: **What would happen if this error reached the funder uncorrected?**
   - If the answer involves financial exposure, legal risk, or the ability to identify individual scholars: **Critical.**
   - If the answer involves loss of credibility, misleading impressions, or damaged trust: **Significant.**
   - If the answer involves looking unprofessional but no lasting harm: **Minor.**
2. Pay special attention to the governance violation (the MSI scholar reference). Walk through this chain:
   - The email mentions 5 of 7 MSI scholars at Trinity.
   - Trinity is a named institution. MSI is a named program. 7 is a very small total.
   - If someone knows who is enrolled at Trinity in the MSI program (enrollment data is often public or semi-public), they can narrow down who the 5 persisting scholars are — and by elimination, who the 2 non-persisting scholars are.
   - This is a Tier 2 governance violation. The severity is Critical because it creates a pathway to individual identification.
3. Now check your tone error classification. "Awesome" and "incredible" are unprofessional in a funder communication. But would using those words cause financial harm? Legal risk? Could someone be identified? No. This is Minor.
4. Resubmit with revised severity classifications and updated harm pathway explanations.

**Coaching Question:**
Why is it important that the governance violation is rated Critical and not just Significant? What's the difference between "this would undermine credibility" and "this could expose individual scholars"?

---

### Revision: Self-Audit Depth (if Approaching)

**Coaching Orientation:**
Your self-audit either found only formatting issues or didn't demonstrate a systematic methodology. The goal isn't to find problems where none exist — it's to apply the same rigorous checklist you used in Part A to your own work. Let's build that bridge.

**Revision Actions:**
1. Open your Task 2 final output. Read it as though a colleague wrote it and sent it to you for review.
2. Apply the 5-error-type checklist systematically, one type at a time:
   - **Factual:** Are all numbers, dates, and claims verifiable? Did you check them against a source, or did you trust Claude?
   - **Framing:** Is any information presented without necessary context? Could a reader form an incorrect impression?
   - **Scope:** Are there any overstatements? Any claims broader than what the data supports?
   - **Governance:** Does the output handle data appropriately for its tier? Any small-cell issues?
   - **Tone:** Is the voice appropriate for the specific audience?
3. For each issue you find (even small ones), write it up using the Part B format. The key addition: name WHY you missed it the first time. Be honest. Common causes:
   - "I trusted Claude because the output looked professional" (format blindness)
   - "I focused on tone and missed the data accuracy issue" (selective attention)
   - "I didn't verify the number because I assumed Claude would get it right" (AI trust)
   - "I was running low on time and approved it quickly" (time pressure)
4. If you truly find no substantive issues after systematic review, document your methodology: "I checked each error type as follows: [describe what you checked for each of the 5 types]. I am confident the output is accurate because [specific evidence]."
5. Resubmit with at least 1 substantive finding or a fully documented audit methodology.

**Coaching Question:**
In Part A, you caught [X/5] errors in someone else's work. In Part B, you found [Y] issues in your own. If there's a gap, what explains it? What would you need to do differently to audit your own work as rigorously as you audit someone else's?

---

### Revision: Corrective Transfer (if Approaching)

**Coaching Orientation:**
Your prompt improvements are reasonable ideas, but they're not grounded in specific findings from Parts A or B. Generic advice ("be more specific," "include more detail") doesn't help someone improve a specific prompt. Let's connect your improvements to the actual errors you found.

**Revision Actions:**
1. Go back to your Part A and Part B findings. Pick the 2 errors that concern you most.
2. For each error, ask: **What was it about the prompt that allowed this error to happen?**
   - Was there a missing constraint? (e.g., no instruction about data precision)
   - Was there a vague instruction? (e.g., "describe our results" instead of "report our results with appropriate qualifications")
   - Was there a missing content element? (e.g., the prompt didn't include the correct financial figure, so Claude generated one)
   - Was there a governance gap? (e.g., the prompt didn't specify small-cell handling)
3. Write the specific prompt change. Not "be more specific about data" but rather "Add this constraint to the CTCC prompt: 'Do not cite statistics with the word "all" unless the data shows 100%. Use "X% of scholars" instead of generalizations.'"
4. Trace the full causal chain for each:
   - [Error found: "all DC CAP scholars are staying in school"]
   - [Root cause: prompt said "describe our persistence results" without requiring Claude to match claims to data]
   - [Prompt change: add constraint "Match all claims to the specific data provided. Do not use 'all,' 'every,' or 'none' unless the data supports 100% or 0%."]
   - [Expected effect: Claude would write "78% of DC CAP scholars are persisting" instead of "all scholars are staying in school"]
5. Resubmit with 2 improvements, each tracing back to a specific finding.

**Coaching Question:**
Pick your strongest improvement — the one with the clearest causal chain. If you added that constraint to your Task 2 prompt, what would have changed about Claude's output? Would it have prevented the error you found in your self-audit?

---

---

## STAGE 5: PACKAGE

### Portfolio Format

Once your work reaches Meets Standard or above on all dimensions, you'll assemble a final portfolio representing your learning. This portfolio will be converted to a branded DC CAP document and become part of your pilot record.

---

### Portfolio Structure

#### **HEADER BLOCK**

```
TASK: The Quality Auditor (Task 3: CRITIQUE) | PARTICIPANT: [Name] | UNIT: [Unit] | DATE: [Date]
COMPETENCIES: Discernment (primary), Description (supporting), Diligence (supporting)
WEEK: 5-6 (May 4-15, 2026) | ASSESSMENT LEVEL: [Final Level]
```

---

#### **PERFORMANCE SNAPSHOT**

| Dimension | Final Level | Key Evidence |
|-----------|-------------|-------------|
| **Error Detection Accuracy (Discernment)** | [Level] | [One sentence: how many errors caught, classification accuracy] |
| **Severity Calibration (Discernment)** | [Level] | [One sentence: key calibration evidence — e.g., governance violation rated Critical with harm pathway] |
| **Self-Audit Depth (Discernment)** | [Level] | [One sentence: what was found in own work and what blind spot was named] |
| **Corrective Transfer (Description)** | [Level] | [One sentence: strongest prompt improvement with causal chain] |

---

#### **GROWTH STORY: Tasks 1-2-3**

3-5 sentences connecting your trajectory across the three tasks. This is a narrative, not a list.

The growth story should trace how different cognitive demands revealed different strengths:

- **Task 1 (CLASSIFY):** What you learned about governance classification and analytical categorization
- **Task 2 (CREATE):** What you learned about designing and executing AI workflows on real work
- **Task 3 (CRITIQUE):** What you learned about evaluating, diagnosing, and improving

The growth story should be honest. If Task 3 revealed a strength you didn't know you had (strong error detection), name it. If it revealed a gap (weak self-audit despite strong external audit), name that too.

**Example Growth Story:**

> "In Task 1, I built confidence in governance classification — I could identify tiers and reason about boundaries. Task 2 tested whether I could apply that to real work, and I discovered that my prompts were strong but my edit layer was surface-level. Task 3 flipped the script: my error detection in Part A was excellent (5/5 with correct severity calibration), but my self-audit in Part B initially found nothing — which told me my audit skills hadn't transferred to my own work yet. After revision, I identified a scope overstatement I'd missed and traced it to confirmation bias. The biggest learning: critique is a different muscle than creation, and I need to build a systematic self-audit habit."

---

#### **MULTI-TASK COMPARISON**

| Task | Primary Demand | My Strength | My Growth Edge |
|------|---------------|-------------|---------------|
| **1: CLASSIFY** | Analytical categorization | [What went well] | [What was hard] |
| **2: CREATE** | Design and execution | [What went well] | [What was hard] |
| **3: CRITIQUE** | Evaluative judgment | [What went well] | [What was hard] |

Note how different cognitive demands revealed different strengths. A participant who excelled at Task 1's analytical classification may have found Task 3's self-audit challenging. A participant who struggled with Task 2's prompt design may have discovered natural talent for error detection.

---

#### **INITIAL SUBMISSION**

**PART A: Planted Error Audit**
[Complete error audit: all identified errors with types, severities, harm pathways, and corrections]

**PART B: Self-Audit of Task 2 Work**
[Self-audit findings with error types, blind spot diagnoses, and corrections]
[OR: Documented audit methodology if no issues found]

**PART C: Prompt Improvement Memo**
[Complete Written Memo with 2 improvements]

---

#### **ASSESSMENT**

[Full assessment feedback from Stage 3, with level for each dimension and coaching notes]

---

#### **REVISED SUBMISSION (if applicable)**

[Updated Parts A, B, or C with changes noted]

---

#### **GROWTH TRAJECTORY**

**Dimension-by-Dimension Comparison**

| Dimension | Initial Level | Revised Level | What Changed | Evidence |
|-----------|---------------|---------------|-------------|---------|
| Error Detection Accuracy | [initial] | [revised] | [delta] | [evidence] |
| Severity Calibration | [initial] | [revised] | [delta] | [evidence] |
| Self-Audit Depth | [initial] | [revised] | [delta] | [evidence] |
| Corrective Transfer | [initial] | [revised] | [delta] | [evidence] |

---

#### **PARTICIPANT REFLECTION**

**Reflection Prompt (Data-Grounded):**

You caught [X/5] planted errors in Part A and [Y] substantive issues in your own Task 2 work in Part B. The gap between those numbers tells a story about your audit development.

Consider these questions:
1. What is that story? What does the gap (or lack of gap) reveal about how you evaluate your own work vs. someone else's?
2. Which of your 2 prompt improvements from Part C would help the MOST people in your unit? Why?
3. Looking ahead to Task 4, where you'll map your unit's AI deployment strategy: how will your audit skills from Task 3 inform which tasks you recommend for AI and which you recommend keeping human?

**Your Response:**
[4-5 paragraphs reflecting on the audit gap, the most transferable prompt improvement, and how critique skills inform strategic deployment decisions]

---

#### **FACILITATOR QUICK-HIT**

**Performance Pattern (Facilitator-Populated):**
[Pattern observed + where this participant's strengths and growth edges map to the cohort]

**Discussion Question for Peer Learning (Facilitator-Populated):**
[A 5-minute discussion starter based on this participant's Task 3 experience — e.g., "This participant discovered a strong external-to-self audit gap. Let's discuss: what makes it harder to find errors in your own work? What techniques help?"]

---

#### **FORWARD NOTE**

In Task 4, you'll shift from individual workflows to organizational strategy. You'll map your entire unit's recurring tasks, decide which should use AI and which shouldn't, and build a deployment plan for Q3. Your audit skills from Task 3 inform this directly: knowing what can go wrong is essential for strategic deployment decisions. The errors you found in Part A, the blind spots you identified in Part B, and the prompt improvements you designed in Part C are all evidence you'll use when reasoning about which workflows are AI-ready and which need more human oversight.

---

### Formatting Notes

- Use DC CAP brand system for final portfolio formatting
- Portfolio will be converted to branded Word/PDF for pilot records
- Performance snapshot table should be scannable in under 2 minutes
- Growth story should be written in first person (the participant writes it)
- Facilitator Quick-Hit is populated by the facilitator, not the participant

---

---

## APPENDICES

### Appendix A: Error Type Definitions

| Error Type | Definition | What to Look For | Example from Funder Email |
|-----------|-----------|-----------------|--------------------------|
| **Factual** | Numbers, dates, names, or claims that are verifiably wrong | Check every number against a source. Check every name for spelling. Check every date against the actual deadline or event. | "$2.1 million" when the actual figure is $1.8 million |
| **Framing** | Information presented in a misleading context; individual facts may be true, but the arrangement creates a false impression | Ask: "Would a reader who knows nothing else about this topic get an accurate picture?" Look for missing context that changes interpretation. | 78% persistence rate cited without noting the methodology change and the prior-year comparison |
| **Scope** | Claims broader or narrower than the data supports; watch for absolute language | Flag "all," "every," "none," "demonstrates," "proves." Ask: "Does the data actually support this claim at this level of certainty?" | "all DC CAP scholars are staying in school" when 22% are not persisting |
| **Governance** | Data handling that violates tier protocols; individual or small-cell data in contexts that require aggregation | Check for named individuals, small groups at named institutions, cell sizes under 10, any data that combined with public information could identify someone | "5 of our 7 MSI scholars at Trinity" — small-cell data that could enable identification |
| **Tone** | Voice, register, or formality mismatched to the audience and context | Read aloud. Ask: "Would this sound right if I read it to the recipient?" Check for casual language in formal contexts or formal language in casual contexts. | "awesome" and "incredible" in a funder stewardship report |

---

### Appendix B: Severity Classification Framework

| Severity | The Test | Consequence if Uncaught | Action Required |
|----------|---------|------------------------|-----------------|
| **Critical** | Would this cause financial, legal, or reputational harm? Could someone be identified? | Financial exposure (wrong figures in official communications); legal risk (privacy violations, governance breaches); reputational damage with key stakeholders | Stop. Fix immediately. Trace the source. Redesign the prompt. Notify the appropriate person if the error was already sent. |
| **Significant** | Would this undermine credibility or mislead the reader? | Reader forms an incorrect understanding of DC CAP's performance; trust is damaged; decisions are made on misleading information | Fix before sending. Note in audit log. Review whether the prompt design contributed to this error. |
| **Minor** | Would this look unprofessional but not cause lasting harm? | Recipient notices the issue but it doesn't change their understanding or create risk; DC CAP looks slightly less polished | Fix if time allows. Note the pattern for future prompt improvement. |

**Decision Flowchart:**

1. Could someone be identified from this data? YES = Critical (governance)
2. Could this cause financial or legal consequences? YES = Critical (factual/governance)
3. Would the reader form an incorrect understanding? YES = Significant (framing/scope)
4. Would the reader notice but not be harmed? YES = Minor (tone/formatting)

---

### Appendix C: Governance Tier Quick Reference

| Tier | Name | Data Type | AI Handling Rules | Red Flags |
|------|------|----------|-------------------|-----------|
| **1** | Restricted | Individual student data (names, SSN, family info, financial details) | Do NOT paste into Claude. Summarize conceptually only. | Any prompt that includes a student's name, ID, or personal details |
| **2** | Sensitive | Aggregated data with re-identification risk (cell size < 10) | Aggregate to N >= 10. Remove small cells. Check before publishing. | Cell sizes under 10; named programs at named institutions with small enrollment; any combination that narrows to identifiable individuals |
| **3** | Internal | Organizational info without individual identifiers | Standard handling. Appropriate for Claude. Confirm no student data included. | Accidentally including individual student data in what appears to be organizational information |
| **4** | Public | Already public or cleared for public use | Use freely. No constraints. | Including internal data in what you think is a public-only context |

**The Small-Cell Rule:**

When you see aggregated data broken down by [institution x program] or [institution x award type], check the cell sizes. If any cell has fewer than 10 individuals, someone might be able to identify those individuals — especially if the institution name and program name are public. This is why "5 of our 7 MSI scholars at Trinity" is a governance violation: the numbers are too small, the institution is named, and the program is named. Combined with publicly available enrollment data, individual scholars could be identified.

---

### Appendix D: Prompt Improvement Causal Chain Template

Use this template to trace any audit finding back to a prompt improvement:

```
FINDING: [What error did you find?]
         Example: "The email says 'all DC CAP scholars are staying in school'
         but the persistence rate is 78%, meaning 22% are not persisting."

ROOT CAUSE IN PROMPT: [What about the prompt allowed or invited this error?]
         Example: "The prompt asked Claude to 'describe our persistence results'
         without specifying that claims must match the data precisely."

PROMPT CHANGE: [What specific words would you add, modify, or remove?]
         Example: "Add constraint: 'Match all claims to the specific data
         provided. Do not use absolute language (all, every, none) unless the
         data shows 100% or 0%. Use specific percentages instead of
         generalizations.'"

EXPECTED EFFECT: [What would Claude's output look like after this change?]
         Example: "Claude would write '78% of DC CAP scholars are persisting'
         instead of 'all DC CAP scholars are staying in school.' The qualifier
         matches the data, and the reader gets an accurate picture."
```

**Three Common Causal Chains:**

1. **Scope Error Chain:**
   Finding: absolute language overstatement leads to Root cause: prompt didn't specify data-matching requirements leads to Change: add constraint requiring percentage-specific language leads to Effect: Claude qualifies claims to match data

2. **Governance Error Chain:**
   Finding: small-cell data exposure leads to Root cause: prompt didn't include Tier 2 handling constraints leads to Change: add constraint specifying minimum cell size and anonymization requirements leads to Effect: Claude aggregates or omits small-cell references

3. **Framing Error Chain:**
   Finding: data cited without necessary context leads to Root cause: prompt didn't provide comparison data or context requirements leads to Change: add content element with prior-year data and instruction to include context for any year-over-year changes leads to Effect: Claude includes the context a reader needs to interpret the figure accurately

---

### Appendix E: Facilitator Notes on Common Patterns in Task 3

These patterns appear regularly across cohorts. Knowing them helps you provide targeted coaching.

**1. "Polished output" bias**
Participants miss errors in professional-looking content because format signals quality. When Claude produces a clean, well-formatted email with proper salutation, logical paragraphs, and a professional close, participants often assume the content is as polished as the format. This is format blindness — and it's one of the most common failure modes in AI-assisted work.

*Coaching response:* "The format looked right, so you assumed the content was right. That's a natural response — professional formatting creates trust. But format and content are independent. A beautifully formatted email can contain a wrong number. Try separating your audit into two passes: one for content accuracy (read the words, ignore the formatting) and one for presentation quality."

**2. External-self audit gap**
Strong external detection + weak self-audit is the most common pattern in Task 3. Participants catch 4-5/5 planted errors but find "nothing significant" in their own Task 2 work. This is not a lack of skill — it's a lack of transfer. The same detection capabilities that work on someone else's content get suppressed by confirmation bias when applied to your own.

*Coaching response:* "You caught [X/5] errors in someone else's email but found nothing in your own work. That gap is the learning edge. Try this: print your Task 2 output and read it as though a colleague sent it to you for review. Apply the same 5-error-type checklist you used in Part A. The checklist doesn't change — only your relationship to the content does."

**3. Severity under-calibration on governance**
Participants rate governance violations as Significant when they are Critical because they don't connect data exposure to individual harm. They understand governance conceptually ("we shouldn't share small-cell data") but don't trace the harm pathway ("if 5 of 7 MSI scholars at Trinity are named, and Trinity's MSI enrollment is semi-public, then the 2 non-persisting scholars can be identified by elimination").

*Coaching response:* Walk through the re-identification chain step by step. Ask: "If you know the program (MSI), the institution (Trinity), and the total (7), and you can find Trinity's MSI enrollment list — how many steps does it take to identify the 2 scholars who are NOT persisting?" The concreteness of the chain is what shifts the classification from Significant to Critical.

**4. Generic prompt improvements**
Improvements that say "be more specific" or "include more detail" without tracing to a specific finding need causal grounding. This pattern usually means the participant understands that prompts could be better but hasn't built the habit of connecting a specific output problem to a specific prompt design choice.

*Coaching response:* "Your improvement says 'be more specific about data.' That's a direction, not a change. Let's ground it: Which error from Part A would 'being more specific' have prevented? What specific words would you add to the prompt? If I'm writing this prompt tomorrow, what exactly do I type differently?" The move from direction to implementation is the skill.

**5. Asymmetric error-type detection**
Some participants catch all Factual and Tone errors but miss Framing and Scope errors. Others catch Governance errors but miss Factual ones. This asymmetry is diagnostic — it tells you which error types the participant is naturally attuned to and which require deliberate attention.

*Coaching response:* Name the pattern explicitly: "You caught every Factual error and every Tone error — those seem to be your natural strengths. You missed the Framing and Scope errors. Those are harder because each individual fact looks correct; the error is in the combination or the implied claim. For Framing: ask 'What context is missing that would change how a reader interprets this?' For Scope: flag every absolute word (all, every, none, demonstrates) and check whether the data supports that level of certainty."

---

### Appendix F: Answer Key — Planted Errors in Part A (Facilitator Reference)

**This appendix is for facilitators and the assessment system. It is not shown to participants.**

The funder update email contains exactly 5 errors:

**Error 1: Factual (Critical)**
- **Text:** "$2.1 million in scholarship awards"
- **What's wrong:** The correct figure is $1.8 million per the FY26 Q2 disbursement report.
- **Severity:** Critical — a $300K overstatement in a funder communication could constitute financial misrepresentation, damage organizational credibility, and create problems in future audits.
- **Correct text:** "$1.8 million in scholarship awards"

**Error 2: Framing (Significant)**
- **Text:** "our overall persistence rate stands at 78%"
- **What's wrong:** The 78% figure is technically correct, but it's cited without context. DC CAP changed its persistence calculation methodology this year. The prior-year rate under the old methodology was 82%. Without this context, the 78% looks like strong performance when it actually represents an apparent decline that needs explanation. A funder reading this would have no reason to question the number — and no way to know it signals a methodology shift, not stable performance.
- **Severity:** Significant — the funder forms an incomplete (and potentially misleading) impression of DC CAP's performance. This undermines trust if the funder later learns about the methodology change from another source.
- **Correct approach:** Include context: "Our overall persistence rate stands at 78% under our updated calculation methodology (previously 82% under the prior methodology). The change in methodology reflects [explanation]."

**Error 3: Scope (Significant)**
- **Text:** "demonstrating that all DC CAP scholars are staying in school and making progress toward their degrees"
- **What's wrong:** The 78% persistence rate means 22% of scholars are NOT persisting. The word "all" is factually wrong, and the phrase "demonstrating that" presents the persistence rate as proof of universal success. This directly contradicts the data cited in the same paragraph.
- **Severity:** Significant — the funder is told "all" scholars are persisting when nearly a quarter are not. This is a credibility risk if the funder examines the numbers or asks follow-up questions.
- **Correct text:** "demonstrating strong persistence among DC CAP scholars, with 78% maintaining enrollment and making progress toward their degrees"

**Error 4: Governance (Critical)**
- **Text:** "5 of our 7 MSI scholars at Trinity University"
- **What's wrong:** This is a small-cell data point (N=7 total, N=5 in subset) that identifies a specific program at a specific institution. The MSI program at Trinity has only 7 scholars total. Combined with publicly available enrollment data (or semi-public data shared with partners), individual scholars could be identified — and by elimination, the 2 scholars NOT maintaining enrollment could be identified. This violates Tier 2 protocol.
- **Severity:** Critical — individual scholars could potentially be identified. The non-persisting scholars (2 out of 7) are particularly vulnerable because the email implicitly identifies them by exclusion.
- **Correct approach:** Remove the small-cell reference entirely, or aggregate to a level that protects individual identity. Example: "Our MSI program continues to show strong results across partner institutions" (no institution-specific counts).

**Error 5: Tone (Minor)**
- **Text:** "incredible spring semester results" and "Your support has been awesome"
- **What's wrong:** "Incredible" and "awesome" are casual, enthusiastic language appropriate for marketing or social media but not for a funder stewardship report. Funder communications should use professional, measured language that conveys confidence without hyperbole.
- **Severity:** Minor — the funder might notice the informal tone and find it unprofessional, but it's unlikely to cause lasting harm or damage the relationship.
- **Correct text:** "strong spring semester results" and "Your continued support has been instrumental" (or similar professional language)

---

---

### Appendix G: Reteaching Module — Error Detection Method

This module is used when a participant scores Below Standard on any dimension. It provides a step-by-step worked example followed by a fill-in template the participant applies to their own work.

---

#### Part 1: Worked Example (Planted Error from Part A)

Walk through this example together, step by step:

**Step 1: What does the output say?**
"5 of our 7 MSI scholars at Trinity University"

**Step 2: What should it say?**
"Our MSI program continues to show strong results across partner institutions" (no institution-specific counts that create small-cell exposure).

**Step 3: What type of error is this?**
Governance — the text includes a small-cell data point (N=7 total, N=5 in subset) tied to a named institution and named program, creating re-identification risk.

**Step 4: What's the severity?**
Critical — individual scholars could potentially be identified. The 2 non-persisting scholars (out of 7 total) are identifiable by elimination if someone knows Trinity's MSI enrollment.

**Step 5: What would you change in the prompt to prevent it?**
In the CONSTRAINTS section of the CTCC prompt, add an explicit rule: "Do not include institution-specific scholar counts where the total is below 10. Aggregate to program-level or organization-level totals only." In the CONTENT section, pre-aggregate the data before pasting so small-cell figures never enter the prompt.

---

#### Part 2: Fill-In Template

Apply this method to an error you missed.

```
(1) What does the output say?
___

(2) What should it say?
___

(3) Error type:
___

(4) Severity and why:
___

(5) Prompt change to prevent it:
___
```

---

**End of Task 3: The Quality Auditor SKILL.md**
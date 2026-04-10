# Task 3: The Independent Pipeline + Unit Strategy
## DC CAP AI Deployment Leadership Training

**Version:** 3.0  
**Task Level:** Advanced (Weeks 5-6)  
**Prerequisite:** Tasks 1-2 completed  
**Time Estimate:** 2-2.5 hours initial | 45-60 minutes revision  

---

## Your Starting Point

You've practiced the AI pipeline with guided support (Task 1) and with checkpoints (Task 2). Now you run it on your own. No checkpoints. No answer key. No step-by-step walk-through. You'll decide what to do, how to do it, and whether the result is good enough.

What's new is strategic thinking. You won't just run the pipeline on one task—you'll map your unit's work and answer the big question: Which of your unit's tasks should use AI? Which shouldn't? You'll build a deployment plan for your team based on what you've learned.

The frameworks are the same ones you've used twice already. You're just using them independently now, at scale, for your unit. And you're thinking like a leader about what gets automated, augmented, or kept human—and why.

Plan for about 2-3 hours. You've done this twice already. You know how it works.

---

## STAGE 1: INTRODUCE

### Overview

Task 3 is the culminating task before the capstone. Here, you run the full 4D pipeline **independently** (no checkpoints, no scaffolding) on a real work task from your unit. You'll also create a **strategic deployment map** for your entire unit, identifying which recurring tasks should be automated, augmented, or left to humans—and why.

This task has three parts:

1. **Part A: Unit Deployment Map** — Map your unit's 8 most recurring tasks onto the 2x2 Delegation Matrix using the AI-Readiness Test
2. **Part B: Full Independent Pipeline** — Select your top 2 deployment targets and run the complete 4D pipeline on ONE of them
3. **Part C: Before/After Documentation** — Quantify the time saved and quality gained in your new workflow

### Learning Objectives

By completing Task 3, you will:
- Run the 4D pipeline independently without scaffolding or checkpoints
- Apply strategic thinking to unit-level AI deployment
- Prove governance fluency by classifying and handling real unit data
- Document concrete impact evidence (time, quality, governance compliance)
- Begin planning Q3 rollout for your unit

### The Progression from Tasks 1-2

**Task 1:** You followed guided steps to classify provided scenarios and select correct skills.  
**Task 2:** You applied the pipeline to your own work with checkpoints at each stage.  
**Task 3:** You run the full pipeline independently AND think strategically about your unit's deployment.

This is where you prove fluency—and where individual AI learning becomes organizational strategy.

---

## PART A: Unit Deployment Map (Strategic Delegation)

### The 2x2 Delegation Matrix

Every task fits into one of four quadrants:

```
                    HIGH FREQUENCY
                           |
        DEPLOY NOW          |          EXPLORE
    (Automate/Augment)     |         (Pilot, then decide)
    __________________|________________
                     |
    HUMAN CORE       |       LEAVE IT
    (Keep here)      |      (Too rare or risky)
                     |
                    LOW FREQUENCY
```

The matrix has two axes:

**Vertical axis (Frequency):** How often does this task recur?
- HIGH: Weekly or more frequent
- LOW: Monthly or less

**Horizontal axis (AI-Readiness):** Can AI help safely and reliably?
- YES (right): Passes all three tests
- NO (left): Fails one or more tests

### The AI-Readiness Test

For each of your 8 tasks, ask three questions. Answer "yes" to all three to move to the right. Answer "no" to any to stay on the left.

**1. Repeatable Structure?**
- Can you do this task the same way every time, or does it require judgment calls?
- Examples: "Update partner roster email" = Yes (template). "Counsel a student facing family conflict" = No (always unique).

**2. Describable Inputs?**
- Can you tell Claude exactly what information to use, or does it need live context you can't articulate?
- Examples: "Generate report from Salesforce data (fields: X, Y, Z)" = Yes. "Assess whether this scholar needs financial intervention based on their family situation" = No.

**3. Recoverable Errors?**
- If Claude makes a mistake, can you catch and fix it before harm?
- Examples: "Draft an email" = Yes (you review before sending). "Route scholar to counselor based on risk score" = No (routing happens before you notice).

### Facilitator Note: Unit Differences in AI-Readiness Profiles

Different units will naturally show different AI-readiness profiles, and this reflects structural reality, not capability gaps. Units that handle sensitive data frequently (Student Success, Operations) will likely have more tasks that fail the 'Recoverable Errors' test because mistakes in student data or compliance carry higher stakes. Units with structured, repeatable data workflows (Data & Technology) will likely have more Deploy Now candidates.

If a participant's deployment map shows mostly Human Core tasks, that may indicate strong governance awareness rather than limited AI readiness. Assess the quality of their reasoning about WHY tasks belong in each quadrant, not the number of tasks in Deploy Now.

### What You Produce: Part A Deliverable

Create a table with 8 rows (one for each recurring task in your unit):

| Task | Deliverable + Audience + Frequency | Repeatable? | Describable? | Recoverable? | Quadrant | Rationale (2-3 sentences) | Modality (if Deploy Now) | Governance Tier (if Deploy Now) |
|------|--------|--------|--------|--------|----------|----------|----------|----------|
| 1. Partner reminder email | Email to 6 university partners, weekly during deadlines | Yes | Yes | Yes | Deploy Now | All three tests pass. Highly recurring, data is organizational tier 3, errors caught in review. | Augmentation | Tier 3 |
| 2. ... | ... | ... | ... | ... | ... | ... | ... | ... |

**Threshold for Part A quality: At least 6 of your 8 rationales must clearly address BOTH axes (frequency evidence + AI-readiness reasoning) to reach Meets.**

**For your top 2 "Deploy Now" targets:**
- Assign modality: **Automation** (minimal human review) vs. **Augmentation** (heavy human refinement) vs. **Agency** (AI makes some decisions with human oversight)
- Assign governance tier based on the data involved
- Explain modality choice: What does the human bring that Claude can't? What does Claude handle?

### Guidance by Unit

**Student Success:** Partner reminders (recurring emails), case summary templates (student demographics + prior touchpoints), academic plan summaries (course sequences from SalesForce data)

**Program Strategy:** Cycle timeline briefs (deadlines, milestones, decision points), eligibility FAQ updates (policy questions + scenarios), program overview summaries (outcomes + impact data)

**Data & Technology:** Scholar demographic breakdowns (Salesforce queries), analytics summaries (engagement metrics, retention patterns), data quality reports (missing fields, anomalies)

**Development:** Funder update drafts (progress toward outcomes + use-of-funds stories), donor meeting prep (donor-specific giving history + program connection), proposal outcome summaries (results against stated goals)

**Operations:** Budget summaries (line-item overviews, variance analysis), vendor communications (RFP responses, renewal deadlines), compliance checklists (audit-readiness documentation)

**Innovation Hub:** Pilot evaluation summaries (assess whether new initiative met targets; Aggregated pilot outcomes [Tier 3/4], but individual participant feedback may be Tier 2), partnership exploration briefs (research potential partners and draft outreach; Partner organization details [Tier 4—public], but internal strategic positioning [Tier 3]), AI governance documentation (update internal policies and training materials based on pilot learnings; Published policies [Tier 4], but audit findings referencing specific staff performance [Tier 2])

---

## PART B: Full Independent Pipeline Execution

### What You Do

Select ONE of your two "Deploy Now" targets. Run the **complete 4D pipeline** on it. No checkpoints. No scaffolding. Use the framework you internalized in Tasks 1-2.

### Stage 1: DILIGENCE (Governance Classification)

**What's the data involved?**
- List every piece of information you'll need to input to Claude
- Classify each element by governance tier (Tier 1-4)
- Determine the **highest tier** in your list—that's your overall classification

**What are your constraints?**
- Given that tier, what can and can't you put in your prompt?
- What must you redact, aggregate, or anonymize?
- What must you check in the output before it's safe to use?

**Write this up in 2-3 sentences per question. Show your reasoning.**

### Stage 2: DESCRIPTION (CTCC Prompt Writing)

**Write the actual prompt you'll send to Claude.**

The prompt must:
- Name the **Context** (What's the situation?)
- Specify the **Task** (What should Claude produce?)
- List the **Criteria** (What makes a good output?)
- Explain the **Constraints** (What's off-limits? What governance rules apply?)

Verify before running: Does this prompt respect the tier I identified in Stage 1? Am I asking for Tier 1 data? Am I including student names when I classified data as Tier 1 Restricted? Would my governance officer approve this prompt?

**Then run it.** Capture Claude's complete output.

### Stage 3: DELEGATION (Skill Selection + Modality)

**Which DC CAP skill is this?** Examples:
- Partner Outreach (university partner communication)
- Data Summary (analytics, scholar demographics)
- Policy Brief (regulatory or program policy)
- Proposal/Report Draft (funder communication)
- Process Documentation (how-to guides, procedures)

**What's your modality?**
- **Automation:** Claude runs the task end-to-end, human spot-checks before release
- **Augmentation:** Claude drafts, human rewrites/refines significantly
- **Agency:** Claude makes some decisions (e.g., categorization, routing) with human oversight

**Why this modality?** What does the human bring? What's Claude's role? What risks does the human manage?

**Write 3-4 sentences explaining your choice.**

### Stage 4: DISCERNMENT (Output Audit + Edit Layer + Human Judgment)

**Run the prompt. Capture the output.**

**Audit the output:**
1. **Accuracy:** Are the facts correct? Is the data accurate?
2. **Completeness:** Did Claude address all the criteria you specified?
3. **Tone/Voice:** Is it appropriate for your audience?
4. **Governance Compliance:** Does it handle data appropriately? Are there any tier violations?

**Document every edit:**

For each change you make to Claude's output, write:
- **What you changed**
- **Edit type** (choose one):
  - *Accuracy Fix* — Claude got it wrong
  - *Tone Adjustment* — Reframing for audience/relationship
  - *Strategic Addition* — You added context or nuance Claude didn't have
  - *Governance Removal* — You deleted something that violated the tier
  - *Format/Structure* — Reorganized for clarity or audience expectation
- **Why** — What was the specific risk or opportunity?

Example:
> **Edit 1:** Changed "12 scholars from Howard University received $45,000" to "More than 10 scholars from Howard received funding."  
> **Type:** Governance Removal  
> **Why:** Cell size N<10 creates re-identification risk per Tier 2 protocol. Aggregating to "more than 10" protects individual privacy.

**Write the human judgment layer (2-3 sentences):**
What did you verify or catch that Claude couldn't? What governance risk did you manage? What audience dynamics did you calibrate?

### Part B Deliverable

A complete, self-contained pipeline execution covering all four stages with:
- Governance classification + constraints
- Full CTCC prompt
- Claude's complete output
- Skill selection + modality + rationale
- Audit findings (errors, governance issues, tone concerns)
- Edit layer (every change documented with type + rationale)
- Human judgment analysis
- Final version (ready to send/use)

---

## PART C: Before/After Documentation

### What Changed?

For the task you just executed in Part B:

**BEFORE:** How was this task done before the pilot?
- Describe the actual steps someone takes (or took)
- List the time required
- Name the pain points: What's hard about this? What takes time? What's error-prone?
- Example: "Draft partner reminder emails: list partner names in Salesforce, copy-paste into email, write custom message for each, proofread, send. Time: 90 minutes for 6 emails. Pain: custom messaging for each feels repetitive; easy to miss someone; tone varies by email."

**AFTER:** How is it done now?
- Name the workflow: Which skill are you using? What does Claude do? What does the human do?
- Describe the actual steps: "Run CTCC prompt with partner list and deadline. Claude drafts all 6 emails. Review, make tone adjustments (3 sentences about relationships), send."
- Time now: How long does it take?
- Example: "Workflow: Partner Outreach (Augmentation). Claude generates templated emails with variables filled in. I customize tone/relationships (5 min), verify against deadline policy, send. Time: 20 minutes for 6 emails."

**Impact Evidence (quantified):**
- **Time saved:** Calculate precisely: "From 90 minutes → 20 minutes = 70 minutes saved per cycle. 8 cycles per year = 560 minutes (9.3 hours) per year."
- **Quality gained:** What improved? Consistency? Accuracy? Coverage? Governance compliance?
  - Example: "Tone is now consistent across all 6 partners (previously varied by writer mood). All emails verified against policy before sending (previously spot-checked). Coverage: never miss a partner (previously dropped 1-2 per cycle)."
- **At least one documented instance:** Show a real example. Screenshot? Paste the before/after? Share a timestamp? Make it concrete.

### Part C Deliverable

A 300-400 word document with three sections:

1. **BEFORE** (75-100 words): Task, steps, time, pain points
2. **AFTER** (75-100 words): Workflow, skill, human role, Claude role, time now
3. **IMPACT EVIDENCE** (150-200 words): Time saved (quantified), quality gained (named), at least one documented instance

---

## STAGE 2: DRAFT

### What You're Building

You're creating three complete deliverables:

1. **Part A:** 8-task deployment map on the 2x2 matrix (table format)
2. **Part B:** Full independent 4D pipeline execution (4-page document covering Stages 1-4)
3. **Part C:** Before/After documentation with impact evidence (1-page summary)

### Workflow

**Week 1 (Days 1-3):**
- Complete Part A: List your 8 recurring tasks, apply the AI-Readiness Test, map to quadrants
- Identify your top 2 "Deploy Now" targets
- Get feedback: Is the mapping making sense? Do the rationales pass the "both axes" test?

**Week 1 (Days 4-5):**
- Select ONE Deploy Now target for Part B
- Run the full pipeline end-to-end (Stages 1-4)
- Capture outputs, audit, document edits

**Week 2 (Days 1-3):**
- Complete Part C: Draft Before/After with impact evidence
- Review all three parts for internal consistency
  - Does Part B governance classification match Part A tier assignment?
  - Do the edits in Part B reflect the governance constraints you identified?
  - Does Part C workflow match what you executed in Part B?

**Week 2 (Days 4-5):**
- Polish and prepare for assessment

### Common Traps to Avoid

**Trap 1: Quadrant placement without both axes**
- Don't say "Deploy Now" just because it's frequent
- Don't skip Deploy Now just because it's rare
- **Check:** Does your rationale mention BOTH frequency AND AI-readiness?

**Trap 2: Governance classification that doesn't shape the prompt**
- You identified Tier 2 data, but your prompt includes individual names
- Your data is Tier 1 Restricted, but you didn't mention this constraint
- **Check:** Can someone read your Stages 1 and 2 and see the connection?

**Trap 3: Edit documentation that's too vague**
- "Fixed tone" without explaining what was wrong or why
- "Removed sensitive info" without naming what tier was at risk
- **Check:** Could someone else understand why you made each change?

**Trap 4: Before/After time that doesn't include all steps**
- Forgot to count the time for review/edit
- Compared "time to draft" before to "time to send" after
- **Check:** Is the before/after counting the same workflow end-to-end?

---

## STAGE 3: ASSESS

### Assessment Dimensions

Your Task 3 work is evaluated across 4 dimensions. Each dimension has 4 levels: **Exceeds / Meets / Approaching / Below Standard.**

The readiness threshold: **All or most dimensions at Meets or above (no dimension at Below)** = proceed to capstone. **Multiple dimensions at Approaching, none at Below** = targeted revision. **Any dimension at Below Standard** = re-teach on that competency.

---

### DIMENSION 1: Strategic Mapping Quality

**What this measures:** Can you map recurring tasks to the 2x2 matrix with clarity, specificity, and sound reasoning?

**EXCEEDS STANDARD**
- All 8 tasks are described with specific deliverable, audience, and frequency (not generic task names)
- Quadrant placements are internally consistent and defensible
- Every rationale explicitly addresses BOTH axes: "This recurs [frequency evidence] AND passes the AI-Readiness Test [all three questions]"
- Top 2 Deploy Now targets are clearly the highest-ROI opportunities for your unit (frequency × impact × risk)
- Governance tiers are accurate and constraints are specific

Example (Exceeds):
> **Task:** Weekly partner roster update  
> **Deliverable + Audience + Frequency:** Email to 6 university partner admissions offices, every Monday during application season (14 times per year)  
> **AI-Readiness:** Yes, Yes, Yes (Repeatable structure, data is organizational tier 3, errors caught in review)  
> **Quadrant:** Deploy Now  
> **Rationale:** Recurs weekly during 4 months (high frequency). All three readiness tests pass—template structure, data is non-sensitive organizational info, errors caught before send. Governance: Tier 3 (partner contact info, deadline info). Modality: Augmentation (Claude drafts, human customizes for relationships). This is highest-ROI: 6 emails × 14 weeks = 84 emails/year, 90 min → 20 min each = 1,176 hours saved if scaled to 10 units.

**MEETS STANDARD**
- All 8 tasks are described with sufficient specificity to understand the work (deliverable clear, audience identifiable, frequency quantifiable)
- Quadrant placements are defensible; most rationales address both axes
- Top 2 Deploy Now targets are reasonable high-frequency, AI-ready candidates
- Governance tiers are correct for the stated data

Example (Meets):
> **Task:** Partner updates  
> **Frequency:** Weekly during cycle (14x/year)  
> **Quadrant:** Deploy Now  
> **AI-Readiness:** Yes—repeatable structure, standard data (names, dates), easy to review  
> **Rationale:** High frequency, passes all readiness tests. Governance tier 3 (partner info, no student data).  
> **Modality:** Augmentation (draft + review)

**APPROACHING STANDARD**
- Tasks are described but lack specificity (e.g., "communications," "reports" without naming the audience or product)
- Quadrant placements have reasoning, but some rationales address only one axis (frequency OR readiness, not both)
- Top 2 Deploy Now candidates are reasonable but not clearly the highest-ROI options
- Governance tiers are roughly correct but lack specificity about constraints

Example (Approaching):
> **Task:** Communication  
> **Frequency:** Weekly  
> **Quadrant:** Deploy Now  
> **AI-Readiness:** Yes, mostly  
> **Rationale:** It's recurring and we have a template. Should be good for automation.

**BELOW STANDARD**
- Tasks are vague or generic; unclear what deliverable is being produced
- Quadrant placements lack reasoning or show misunderstanding of the matrix axes
- Governance tiers are incorrect or absent
- Missing alignment between stated AI-readiness and quadrant placement (e.g., "fails readiness test but Deploy Now")

**EXAMPLE: What Your Feedback Will Look Like**

**Strategic Mapping Quality**

*Coaching Orientation:* The deployment map is your unit's AI strategy on one page. It should show that you understand which tasks benefit from AI and why, grounded in both how often you do them and whether they're structured enough for Claude to handle well.

*Your Level:* Approaching Standard

*What You Did Well:* You identified 8 recurring tasks and placed each one in the 2x2 matrix. Your frequency estimates look reasonable and several of your AI-readiness classifications are solid—particularly the partner email (Deploy Now: weekly, all three tests pass) and the case review (Human Core: requires counselor judgment).

*What Would Strengthen This:* Four of your eight rationales address frequency but skip the AI-readiness reasoning. For example, your "budget reconciliation" entry says "monthly, moderate complexity" but doesn't address the three AI-readiness questions. Can you reconcile a budget the same way every time? Can you describe exactly what data Claude needs? If Claude makes an error in a budget line, can you catch it before it reaches finance? Without answering these, the quadrant placement is based on intuition rather than structured analysis.

*Transferable Skill:* You're building "structured decision-making"—the ability to evaluate a task against explicit criteria rather than gut feel. This transfers to any resource allocation or prioritization decision.

*Coaching Question:* Pick two of the tasks where you skipped the AI-readiness reasoning. Walk through the three questions for each. Does the quadrant placement change?

*Revision Guidance (3 items):*
1. For each of the 4 rationales that only address frequency, add explicit answers to all three AI-readiness questions.
2. Check whether any quadrant placements change after you complete the AI-readiness reasoning.
3. For your top 2 Deploy Now targets, add one sentence explaining why these are the highest-ROI starting points for your unit.

**Calibration Anchor: Approaching → Meets Boundary**

**Strategic Mapping Quality:** Approaching looks like—6 of 8 tasks have specific deliverables but 3 lack frequency indicators. Rationales address AI-readiness for most tasks but rely on intuition rather than the 3-question test. Meets looks like—All 8 tasks name a deliverable, audience, and frequency. At least 6 of 8 rationales explicitly reference the AI-readiness test (repeatable/describable/recoverable).

---

### DIMENSION 2: Independent Pipeline Execution

**What this measures:** Can you run the full 4D pipeline without scaffolding? Is governance fluency visible in your choices?

**EXCEEDS STANDARD**
- **Stage 1 (Diligence):** Governance classification is correct; constraints identified are specific and comprehensive. You identify tier-specific risks (e.g., "If this is Tier 2, I must aggregate cells <10 before sharing the output").
- **Stage 2 (Description):** CTCC prompt is complete, specific to your scenario, and visibly shaped by Stage 1 constraints (e.g., you asked for aggregation because you identified Tier 2 risk).
- **Stage 3 (Delegation):** Skill and modality are sound; explanation demonstrates deep understanding of human-AI balance. You name specific things Claude can't do that you must handle.
- **Stage 4 (Discernment):** Audit is rigorous. Every edit is tagged correctly and rationale is specific. You catch substantive errors, not just typos. Human judgment layer shows you understand what Claude's output would miss.

Example (Exceeds):
> **Stage 1 Classification:** Tier 2 (Sensitive). Reasoning: Scholar names + award amounts, cell sizes vary. Constraint: Any university×award type cell with N<10 must be aggregated; no individual scholar names in final output.  
> **Stage 2 Prompt:** "Generate a summary of scholars by university and award type. Aggregate any combination with fewer than 10 scholars as 'other.' Do not include individual names."  
> **Stage 3 Modality:** Augmentation. Claude generates the breakdown; I verify cell sizes against raw data and check for any names that slipped in.  
> **Stage 4 Edit 1:** Changed "8 SAI scholars from Bowie State" to "fewer than 10 SAI scholars from Bowie State." Type: Governance Removal. Reason: Cell size N<8 creates re-identification risk per Tier 2 protocol.  
> **Human Judgment:** I verified every cell size against the raw Salesforce export. Claude included one set of names I had to remove. The aggregation rule caught the N<10 issue Claude didn't think about.

**MEETS STANDARD**
- **Stage 1:** Governance classification is correct; constraints identified address the main risk
- **Stage 2:** CTCC prompt is complete and includes scenario-specific details; governance awareness is visible
- **Stage 3:** Skill and modality are appropriate; rationale shows understanding of human-AI split
- **Stage 4:** Audit identifies real errors; edits are tagged and rationales are clear; human judgment layer shows what you verified

Example (Meets):
> **Stage 1:** Tier 2 data (scholar names + awards). Constraint: Don't share individual names or specific award amounts.  
> **Stage 2 Prompt:** "Create a summary of scholars by university and award type. Use ranges instead of exact numbers."  
> **Stage 4 Edit 1:** Changed specific amounts to ranges. Type: Governance Removal. Reason: Tier 2 requires ranges, not exact figures.  
> **Human Judgment:** I spot-checked the ranges against actual data and confirmed they were accurate. Claude included more detail than needed but nothing that violated policy.

**APPROACHING STANDARD**
- **Stage 1:** Governance classification is roughly correct, but constraints are vague or incomplete
- **Stage 2:** Prompt is present but lacks detail or doesn't clearly reflect Stage 1 constraints
- **Stage 3:** Skill and modality are reasonable, but rationale is generic ("Claude helps because it's fast")
- **Stage 4:** Audit catches some errors, but not all; edits lack specific rationales; human judgment is mentioned but not substantive

Example (Approaching):
> **Stage 1:** This has some sensitive data.  
> **Stage 2 Prompt:** "Summarize our scholars by university."  
> **Stage 4 Edit 1:** Removed some stuff Claude shouldn't have included.  
> **Human Judgment:** I read it carefully.

**BELOW STANDARD**
- **Stage 1:** Governance classification is missing or incorrect
- **Stage 2:** Prompt is incomplete or doesn't reflect governance constraints
- **Stage 3:** Skill or modality choice is inappropriate; rationale shows misunderstanding of human-AI balance
- **Stage 4:** Audit is superficial; edits are undocumented; human judgment is absent

**Calibration Anchor: Approaching → Meets Boundary**

**Independent Pipeline Execution:** Approaching looks like—The participant runs all 4 stages but governance classification doesn't visibly shape the prompt. The audit catches surface-level issues but misses the governance compliance check. Meets looks like—Each pipeline stage connects to the next. Governance constraints appear in the prompt's Content or Constraints element. The audit specifically checks governance compliance.

---

### DIMENSION 3: Before/After Documentation

**What this measures:** Can you quantify impact? Is your impact evidence specific and credible?

**EXCEEDS STANDARD**
- **Before section:** Specific steps are named (not "I did it manually"). Time is accurate (based on a recent instance you measured or remember clearly). Pain points are concrete (e.g., "Easy to miss a partner" vs. vague "hard to manage").
- **After section:** Workflow is named (skill + modality). Human and Claude roles are clearly separated ("Claude drafts all 6; I customize tone based on relationships, then send").
- **Time saved:** Calculated precisely from before → after. Math is transparent ("6 emails × (90 min before − 20 min after) = 420 min saved per cycle").
- **Quality gained:** Specific improvements are named (consistency, accuracy, coverage, governance compliance). Each one is grounded in the workflow change.
- **Documented instance:** You show real evidence—screenshot, example, timestamp, or link. Not hypothetical.

Example (Exceeds):
> **Before:** Drafting 6 partner reminder emails. Steps: (1) Pull partner list from Salesforce, (2) Compose individual email for each relationship (customizing tone, referring to prior interactions), (3) Proofread, (4) Send. Time: 90 minutes. Measured from my calendar on April 3, 2026—draft started 1:15pm, sent final email 2:45pm. Pain points: Tone inconsistency (some emails warmer than others based on my mood), easy to miss a partner (I dropped CSU one cycle), time-consuming because each relationship is different.  
> **After:** Partner Outreach (Augmentation). Workflow: (1) Run CTCC prompt with partner list + deadline, (2) Claude generates 6 templated emails with deadline, (3) I review tone and add 2-3 sentences customizing based on relationships I remember (5 min), (4) Verify all 6 partners are included, (5) Send. Time: 20 minutes (measured April 10 cycle).  
> **Time saved:** 70 minutes per cycle. 14 cycles per year = 980 minutes saved annually (16.3 hours). If scaled to 10 units: 163 hours saved per year.  
> **Quality gained:** Consistency (all emails follow same structure, tone is professional across all 6); coverage (systematic check prevents missing partners); governance (all emails reference deadline correctly, consistent with policy language). No more dropped partners.  
> **Documented instance:** I attached the April 10 email set. Header shows "sent 2:28pm" (20 min from start of my calendar slot). The emails show Claude's consistent structure with my tone customizations in [brackets].

**MEETS STANDARD**
- **Before section:** Steps are clear; time is reasonable estimate or measured. Pain points are named.
- **After section:** Workflow and roles are clear; time is specified.
- **Time saved:** Calculated from before → after; math is correct.
- **Quality gained:** Improvements are named and defensible.
- **Documented instance:** At least one example or reference (may be less detailed than Exceeds).

Example (Meets):
> **Before:** Draft 6 partner emails manually. 90 minutes per cycle. Hard to keep tone consistent; one time I forgot CSU.  
> **After:** Claude generates 6 emails using Partner Outreach prompt. I customize tone and verify all 6 are included. 20 minutes per cycle.  
> **Time saved:** 70 minutes per cycle × 14 cycles/year = 980 minutes/year.  
> **Quality gained:** Consistent tone and format. No more dropped partners.  
> **Documented instance:** April 10 email batch shows Claude's output with my tone edits.

**APPROACHING STANDARD**
- **Before section:** Steps are roughly described; time is vague estimate ("about an hour").
- **After section:** Workflow is mentioned but roles aren't clearly separated.
- **Time saved:** Calculation is present but approximate ("saves maybe 30-40 minutes").
- **Quality gained:** Improvements are mentioned generally ("better consistency").
- **Documented instance:** Reference is vague or absent.

**BELOW STANDARD**
- **Before section:** Steps are vague or missing; time is not quantified.
- **After section:** Workflow is unclear; roles are not defined.
- **Time saved:** Not calculated or significantly inaccurate.
- **Quality gained:** Not specified or not credible.
- **Documented instance:** None provided.

**Calibration Anchor: Approaching → Meets Boundary**

**Before/After Documentation:** Approaching looks like—"Before: I used to write the email manually. After: Now I use Claude." No time quantification, no specific steps. Meets looks like—"Before: 2–3 hours drafting + 1 hour review across 3 Salesforce reports. After: 45 minutes with Claude handling the initial draft, me editing for tone and verifying partner data." At least one documented instance.

---

### DIMENSION 4: Governance + Deployment Integration

**What this measures:** Do you understand how governance classification shapes deployment decisions? Can you explain the data handling pathway?

**EXCEEDS STANDARD**
- Governance tiers in Part A match the actual tiers in Part B (consistency check)
- For your Deploy Now targets, you articulate what data handling each tier requires
  - Tier 1: "We cannot put individual student names in the prompt. We must redact [specific field]."
  - Tier 2: "We must aggregate cells with N<10 before Claude sees this data."
  - Tier 3: "This is organizational info; no student data. Standard internal handling. No constraints on Claude prompting."
  - Tier 4: "This is fully public; no constraints."
- You explain what the human verifies before the output leaves your desk (governance compliance layer)
- You name the teaching pathway: "In Q3, I'll teach [colleague] how to run this workflow, starting with why we classify this data as Tier 2 and what that means for the Claude prompt."

Example (Exceeds):
> **Governance + Deployment:** This partner roster email is Tier 3 data (organizational names, institutional info, deadline). Tier 3 handling: internal use, no student data, standard AI processing. In the prompt, I can include partner names, deadline, and context because none of it is student-specific or restricted.  
> The human layer I verify: tone appropriateness for relationships (Claude doesn't know if we had a recent tension with a partner), policy accuracy (Claude might misstate the deadline), and coverage (did Claude include all 6 partners). No sensitive data verification needed.  
> Q3 teaching: I'll train my colleague on the Partner Outreach modality by showing her the Tier 3 classification and why it means we can use Claude safely. She'll run the CTCC prompt on May's cohort while I observe and give feedback on the tone edits.

**MEETS STANDARD**
- Governance tiers in Part A match Part B
- For each Deploy Now target, you name the tier and explain main data handling requirements
- You specify what the human verifies (governance + accuracy + relationship)
- Teaching pathway is named (who, what, when)

Example (Meets):
> **Governance:** Partner emails are Tier 3 (institutional info). We can share partner names and deadline with Claude. The human verifies tone, policy accuracy, and that all partners are included.  
> **Teaching:** Next month I'll show [colleague] how to run this workflow.

**APPROACHING STANDARD**
- Governance tiers are identified but not clearly connected to data handling
- Human verification layer is mentioned generally ("I'll check it")
- Teaching pathway is vague ("someone else could do this")

**BELOW STANDARD**
- Governance tiers are missing or incorrect
- No explanation of data handling for the tier
- Human verification layer is absent
- Teaching pathway is not named

**Calibration Anchor: Approaching → Meets Boundary**

**Governance + Deployment Integration:** Approaching looks like—Governance tiers assigned but reasoning absent. The teaching pathway says "show them how to use Claude" without specifying governance checks. Meets looks like—Governance tiers correct with reasoning tied to specific data types. Teaching pathway names the governance check the learner should run before sending output.

---

### Governance-Prompt Consistency Check (Carried Forward from Task 2)

As a final check before assessment: **Read your Stage 1 (Diligence) and Stage 2 (Description) side-by-side.**

Does your prompt respect the tier you identified?
- If you classified Tier 1 data, did you redact it from the prompt?
- If you classified Tier 2, did you aggregate or anonymize?
- If you classified Tier 3, are there any student names that shouldn't be there?

If there's a mismatch, that's a signal to revise before assessment.

---

### "What Shifted" Growth Trajectory Across Tasks 1-2-3

The assessment will surface your full growth pattern:

**Task 1 (Guided):** You classified provided scenarios correctly, selected right skills with guidance, documented edits.

**Task 2 (Supported):** You applied the pipeline to your own work, you had governance-prompt consistency, you documented a retrospective connecting edits back to prompting.

**Task 3 (Independent):** You ran the pipeline with no scaffolding, you classified real unit data correctly, you thought strategically about deployment, you quantified impact.

**The shift:** From "following steps correctly" → "running the system independently" → "thinking strategically about organizational deployment."

**Dimension progression:** Governance Accuracy (Task 1) → Governance Integration (Task 2) → Governance + Deployment Integration (Task 3). Each level adds complexity: classification → pipeline integration → strategic deployment planning. The underlying competency is Diligence (governance discipline), but each task measures it at a different level of integration and organizational scope.

---

## STAGE 3b: REASSESS (Revision + Delta)

### Reassessment Protocol

When the participant submits a revision, reassess using the SAME rubric dimensions and level definitions from Stage 3. The reassessment:

1. **Re-evaluates each dimension** against the same rubric. A dimension can improve, stay the same, or (rarely) decrease if the revision introduced new issues.
2. **Produces a delta comparison** showing the level transition and what specifically changed.
3. **Applies the readiness check** to determine next step: proceed to packaging, another revision cycle, or concept re-introduction.
4. **Does NOT require the participant to revise all dimensions.** If only 1-2 dimensions need work, they revise only those sections.

---

## STAGE 4: REVISE

### Before You Submit

**Self-Check: Part A**
- [ ] All 8 tasks have specific deliverable + audience + frequency
- [ ] Every rationale addresses BOTH axes (frequency + AI-readiness, not just one)
- [ ] Top 2 Deploy Now targets are clearly the highest-ROI candidates
- [ ] Governance tiers are accurate for the data involved

**Self-Check: Part B**
- [ ] Stage 1 (Diligence): Governance classification is correct; constraints are specific and enforceable
- [ ] Stage 2 (Description): CTCC prompt reflects Stage 1 constraints (no Tier 1 in the prompt, aggregation rules applied, etc.)
- [ ] Stage 3 (Delegation): Modality rationale shows understanding of what the human does that Claude can't
- [ ] Stage 4 (Discernment): Every edit is tagged with type and a specific rationale (not "fixed tone" but "adjusted tone to reflect our relationship with CSU, which had a delayed submission last cycle")
- [ ] Human judgment layer shows what you caught that Claude's output would have missed

**Self-Check: Part C**
- [ ] Before section: Actual steps, actual time (measured or careful estimate), actual pain points
- [ ] After section: Workflow named (skill + modality), roles separated (what Claude does, what human does), time now specified
- [ ] Time saved: Math is transparent and traceable
- [ ] Quality gained: Specific improvements tied to the workflow change
- [ ] Documented instance: Real example or screenshot (not hypothetical)

**Self-Check: Consistency Across All Three Parts**
- [ ] Part A governance tier matches Part B classification
- [ ] Part B workflow matches Part C "After" description
- [ ] Part C impact evidence is consistent with the modality you chose in Part B

### Common Revision Triggers

**If Dimension 1 feedback is "Approaching":**
- Make your task descriptions more specific (add audience and deliverable, not just "communication")
- Rewrite rationales: explicitly address frequency AND AI-readiness in each one
- Reconsider which tasks are truly your highest-ROI Deploy Now targets (use impact thinking: frequency × unit need × risk reduction)

**If Dimension 2 feedback is "Approaching":**
- Rewrite Stage 1: name the specific Tier and what data handling rules apply
- Rewrite Stage 2: edit your prompt to show it respects the tier you classified
- Rewrite Stage 4: for each edit, name the error type (Accuracy Fix, Governance Removal, etc.) and explain why it mattered
- Expand human judgment layer: What would Claude's output have risked? What did you catch?

**If Dimension 3 feedback is "Approaching":**
- Rewrite "Before": Describe actual steps in sequence (Step 1, Step 2...). Add time from a recent instance or your best memory.
- Rewrite "After": Explicitly name the skill, the modality, and what Claude does vs. what you do.
- Recalculate time saved: Show the math clearly.
- Add a concrete instance: Find an email, screenshot, or link. Show the timestamps or evidence.

**If Dimension 4 feedback is "Approaching":**
- Verify that Part A tier matches Part B classification. If it doesn't, correct one of them.
- For each Deploy Now target, write 2-3 sentences explaining: "This is Tier [X], which means we handle it this way for AI use: [specific rule]. The human must verify [specific thing]."
- Name a Q3 colleague and a specific workflow you'll teach them.

---

## STAGE 5: PACKAGE

### Portfolio Structure

Your Task 3 portfolio includes the following sections:

#### **TASK OVERVIEW**

[Summary of Task 3 focus: Independent pipeline execution, strategic deployment mapping, quantified impact evidence]

---

#### **INITIAL SUBMISSION**

##### **Part A: Unit Deployment Map (Part A)**

**Format:** Structured table with 8 rows

| Task | Deliverable + Audience + Frequency | Repeatable? | Describable? | Recoverable? | Quadrant | Rationale | Modality (if Deploy Now) | Governance Tier (if Deploy Now) |
|------|-----|-----|-----|-----|-----|-----|-----|-----|
| 1. Partner reminder emails | Email to 6 university partners, every Monday during application season (14x/year) | Yes | Yes | Yes | Deploy Now | Recurs weekly during 4 months. All three readiness tests pass—template structure, data is organizational tier 3, errors caught in review before send. Modality: Augmentation (Claude drafts, human customizes for relationships). | Augmentation | Tier 3 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

**Include after the table:**

"**Threshold for internal consistency:** At least 6 of 8 rationales explicitly address both axes (frequency evidence + AI-readiness). All three passing = Deploy Now; any one failing = move to Human Core or Explore."

"**Top 2 Deploy Now Targets:**"
1. [Task name, modality, tier, one-sentence impact rationale]
2. [Task name, modality, tier, one-sentence impact rationale]

---

##### **Part B: Full Independent Pipeline Execution (Part B)**

**Format:** 4-stage document

**STAGE 1: DILIGENCE**

*Governance Classification & Constraints*

- Data involved: [list each element]
- Governance tier: [Tier 1-4 with reasoning]
- Constraints: [specific rules for this tier]

**STAGE 2: DESCRIPTION**

*CTCC Prompt*

[Full prompt text]

*Pre-run verification:*
- Does this prompt respect the Tier [X] constraints? [Yes/No explanation]
- Any data I should redact or exclude? [specific answer]

**STAGE 3: DELEGATION**

*Skill & Modality*

- Skill: [Name]
- Modality: [Automation/Augmentation/Agency]
- Rationale: [2-3 sentences on human-AI split and why this modality]

**STAGE 4: DISCERNMENT**

*Claude's Output*

[Full output pasted]

*Audit Findings*

[What errors, concerns, governance issues did you find?]

*Edit Layer*

| Change | Type | Rationale |
|--------|------|-----------|
| Example: Changed "8 scholars" to "fewer than 10" | Governance Removal | Cell size N<8 creates re-identification risk per Tier 2 protocol. |
| ... | ... | ... |

*Human Judgment Layer*

[2-3 sentences: What did you verify or catch that Claude couldn't? What governance risk did you manage?]

*Final Version*

[Output after all edits, ready to use]

---

##### **Part C: Before/After Documentation (Part C)**

**Format:** 300-400 word document with three clear sections

**BEFORE: How was this task done before the pilot?**

[75-100 words]
- Specific steps
- Time required (measured or careful estimate)
- Pain points

**AFTER: How is it done now?**

[75-100 words]
- Workflow (skill + modality)
- Human role
- Claude role
- Time required

**IMPACT EVIDENCE: Time saved + Quality gained**

[150-200 words]
- Time saved (quantified, with transparent math)
- Quality gained (specific improvements)
- At least one documented instance (screenshot, example, link)

---

#### **ASSESSMENT**

[Your final assessment feedback from Stage 3, including level for each dimension and coaching feedback]

---

#### **REVISED SUBMISSION (if applicable)**

[If revision occurred: Updated work from Stage 4, with changes highlighted or noted]

---

#### **GROWTH TRAJECTORY**

##### **Growth Narrative (Task 1→2→3)**

Include a one-page reflection on your growth:

**My Evolution Across the Pilot**

- **Task 1 (Guided):** I learned the 4D pipeline by following explicit steps on a provided scenario. The answer key showed me the correct governance classification and skill selection. By the end, I understood what each stage does.

- **Task 2 (Supported):** I applied the pipeline to my own work [describe the task]. The checkpoints kept me from skipping stages. I discovered the governance-prompt connection: my governance classification actually shaped what I could safely ask Claude. I also realized how much the edit retrospective teaches me—connecting my edit pattern back to my prompting choices showed me how to improve the CTCC prompt next time.

- **Task 3 (Independent):** I ran the pipeline with no scaffolding on [describe the task]. This forced me to internalize the framework instead of just following steps. I also mapped my entire unit's recurring tasks to the 2x2 matrix, which forced me to think strategically: not "can we use AI here" but "should we use AI here, given our other priorities and risks." The impact evidence made it real: [quantified time saved] and [quality improvements]. By the capstone, I'll be able to teach this to [colleague] because I now own the logic, not just the steps.

**What Shifted:**
- From "following pipeline steps correctly" to "running the system independently to solving organizational problems"
- From "treating each task in isolation" to "thinking strategically about unit-wide deployment"
- From "hoping edits will catch errors" to "using edits to improve my prompts for next time"

---

#### **PARTICIPANT REFLECTION**

Before you submit, answer these questions in 2-3 sentences each:

1. **Independence:** What's different about running the pipeline without checkpoints? What did you have to rely on that wasn't explicit?

2. **Strategic Thinking:** Looking at your 8 tasks, what surprised you about which ones are "Deploy Now" vs. "Human Core"? What would you have guessed before doing the full analysis?

3. **Evidence of Impact:** When you calculated the time saved in Part C, what did that number mean to you? How does quantified impact change how you think about AI at your unit?

4. **Teaching Readiness:** Based on Task 3, what one workflow are you confident you could teach a colleague? What would you need to practice first?

---

#### **FACILITATOR NOTES**

When you hand off your Task 3 portfolio, include brief facilitator notes:

**For the assessor evaluating your work:**

- If Dimension 1 (Strategic Mapping) is the first strength: "This participant has clear strategic thinking. Leverage this in capstone and Q3 planning—they'll be strong at adoption."

- If Dimension 2 (Independent Execution) shows growth: "This participant owns the pipeline. Ready for mentoring role in Q3."

- If Dimension 3 (Before/After) has strong impact evidence: "This participant has quantified ROI. Use their case study in the June celebration."

- If Dimension 4 (Governance Integration) is solid: "This participant understands the governance-AI link. Ready to lead governance conversations in Q3."

---

### Final Checklist Before Handoff

- [ ] Part A: 8 tasks mapped, at least 6 rationales address both axes, top 2 Deploy Now targets identified
- [ ] Part B: Full 4-stage pipeline on one Deploy Now target, all stages documented, human judgment layer clear
- [ ] Part C: Before/After documented with quantified time saved, quality gained, documented instance
- [ ] All three parts internally consistent (tiers match, workflows align, impact evidence is credible)
- [ ] Growth trajectory narrative included (Task 1→2→3 reflection)
- [ ] Reflection prompt answered (4 questions, 2-3 sentences each)
- [ ] Facilitator notes included (where to focus in capstone/Q3)

---

## Readiness Threshold

**All or most dimensions at Meets or above (no dimension at Below):** Ready to proceed to Capstone. Note any Approaching dimensions as stretch goals.

**Multiple dimensions at Approaching, none at Below:** One more targeted revision cycle. Focus on the 1-2 dimensions with the widest gap.

**Any dimension at Below Standard:** Re-introduce the relevant concept before another revision. Walk through one example together, then revise.

---

## Time Estimate

- **Initial Task 3 (Draft):** 2-2.5 hours
  - Part A (mapping): 40-50 minutes
  - Part B (full pipeline): 80-90 minutes
  - Part C (before/after): 20-30 minutes
- **Revision (based on feedback):** 45-60 minutes
- **Portfolio packaging & reflection:** 20-30 minutes

**Total:** ~3.5-4 hours from start to capstone-ready

---

## Resources & References

- **2x2 Delegation Matrix Visual** [see design document]
- **AI-Readiness Test Checklist** [above in Part A]
- **Governance Tier Framework** (Tiers 1-4 from Task 1)
- **CTCC Prompt Template** (from Task 2)
- **Edit Type Tags** (Accuracy Fix, Tone Adjustment, Strategic Addition, Governance Removal, Format/Structure)
- **Modality Definitions** (Automation, Augmentation, Agency from Task 1)
- **DC CAP Skill Inventory** (Partner Outreach, Data Summary, Policy Brief, Proposal/Report, Process Documentation)

# Skill-Per-Task System v3: Integrated Pipeline Design
## DC CAP AI Deployment Leadership Training Pilot

**Version:** 3.0  
**Date:** April 10, 2026  
**Author:** Preston Magouirk, Chief Strategy & Analytics Officer  
**Design Principle:** Three integrated tasks + capstone. Each task runs the full 4D pipeline (Diligence → Description → Delegation → Discernment) at increasing independence.

---

## Design Logic

**The old system** (7 tasks) isolated competencies: one task for governance, one for prompting, one for delegation, etc. This created artificial separation between skills that professionals use simultaneously. Nobody classifies data in a vacuum; they classify it because they're about to use it for something.

**The new system** (3 + capstone) mirrors how AI fluency actually works in practice: every AI interaction requires governance awareness (Diligence), effective prompting (Description), tool selection (Delegation), and output evaluation (Discernment) — simultaneously. The three tasks differ in scaffolding, not in competency scope.

| Task | Pipeline | Scaffolding | Scenario Source | Weeks |
|------|----------|-------------|-----------------|-------|
| 1: The Guided Pipeline | Full 4D | High — steps walked through, answer key available | Controlled (provided by skill) | 1-2 |
| 2: The Supported Pipeline | Full 4D | Medium — structure provided, participant chooses scenario | Participant's real work (with checkpoints) | 3-4 |
| 3: The Independent Pipeline | Full 4D + strategic layer | Low — participant runs independently | Participant's real work + unit strategy | 5-6 |
| Capstone | Synthesis + calibration | None — participant designs the artifact | Participant's full pilot evidence | 7-8 |

### Progression Model

**Task 1:** "Let me show you how the pipeline works." Controlled scenario, explicit steps, answer key for governance classification. The participant learns the 4D framework with guardrails.

**Task 2:** "Now you run the pipeline on your own work." Real scenario, structured checkpoints, feedback on each stage. The participant applies the framework with coaching support.

**Task 3:** "Run the pipeline independently AND plan your unit's AI deployment." Real work, independent execution, strategic planning layer added. The participant demonstrates fluency and begins organizational application.

**Capstone:** "Show what you built, what you learned, and what you'll teach." Synthesis, calibrated self-assessment, teaching module, innovation proposals. The participant becomes a multiplier.

---

## Task 1: The Guided Pipeline

**Weeks:** 1-2 (April 6-17)  
**Scaffolding:** High — skill walks through each pipeline stage  
**Time estimate:** 90-120 minutes initial, 30-45 minutes revision

### The Scenario (provided to all participants)

> Your unit director sends you this request:
>
> "I need two things for next week:
> 1. **A reminder email** to the 6 university partners who haven't submitted their spring preference lists. Trinity, Bowie State, CSU, GW, Howard, and UDC are still outstanding. The deadline is May 1.
> 2. **A data summary** showing our current scholars by university partner and award type (MSI, SAI, Last Dollar) for the board slides."

The participant works through the full pipeline for BOTH sub-tasks.

### Pipeline Stage 1: DILIGENCE (Governance Classification)

**For the partner email:**
- What data is involved? Partner institution names (organizational, Tier 3), submission status (operational, Tier 3), deadline (public operational, Tier 4).
- Classification: Tier 3 — Internal. No individual student data. Organizational information about partner institutions.
- Constraints for AI use: Standard internal handling. Can be processed with Claude. No student-specific information should appear in the prompt or output.

**For the data summary:**
- What data is involved? Scholar counts disaggregated by university × award type.
- Classification trap: The raw Salesforce data contains individual student records (Tier 1 — Restricted). The *aggregate* output is potentially Tier 2 or Tier 3, depending on cell sizes. If any university × award type cell has fewer than 10 scholars, the disaggregation creates re-identification risk (Tier 2 — Sensitive).
- Constraints for AI use: The prompt must request aggregation. The participant must NOT paste individual student data into the prompt. The output must be checked for small-cell thresholds (N<10) before inclusion in board slides.

**Answer key encoded in the skill. This is the deterministic assessment anchor for Task 1.**

### Pipeline Stage 2: DESCRIPTION (CTCC Prompt Writing)

For each sub-task, the participant writes a CTCC prompt that:
- Reflects the governance constraints identified in Stage 1
- Targets the correct output (partner email / data summary)
- Includes scenario-specific details (partner names, deadline, data dimensions)

### Pipeline Stage 3: DELEGATION (Skill Selection + Modality)

**Partner email:**
- Correct skill: Partner Outreach
- Correct modality: Augmentation (relationship context needed — which partners are responsive, what tone is appropriate for a deadline push vs. a first notice, whether any partner has communicated a delay)
- Rationale: The email requires human judgment about relationship dynamics. Claude drafts; human refines tone and adds context.

**Data summary:**
- Correct skill: sf-demo-data (R script generation)
- Correct modality: Automation (standard data query with clear parameters)
- Rationale: The request has defined dimensions (university × award type). Claude generates the R script; human verifies output against known totals and checks for small-cell issues.

### Pipeline Stage 4: DISCERNMENT (Output Audit + Edit + Human Judgment)

The participant:
1. Runs both prompts and captures outputs
2. Audits each output for errors, tone, accuracy, and governance compliance
3. Documents every edit with tagged type (Accuracy Fix / Tone Adjustment / Strategic Addition / Removal) and rationale
4. Writes the human judgment layer: what they checked, edited, or verified before the output could leave their desk

### What the Participant Produces

A single integrated deliverable covering both sub-tasks:

**For each sub-task (partner email + data summary):**
- Governance classification with reasoning
- CTCC prompt
- Skill selected + modality + rationale
- Claude's output
- Audit findings (errors, concerns, governance compliance)
- Edit layer with tagged edits and rationales
- Human judgment analysis

### Assessment Dimensions (4)

| Dimension | What It Measures |
|-----------|-----------------|
| **Governance Accuracy** | Correct tier classification for both sub-tasks. Identifies the small-cell threshold risk in the data summary. Governance constraints correctly shape the prompts. |
| **Prompt + Delegation Quality** | CTCC elements are complete and scenario-specific. Correct skill and modality selected with reasoning that demonstrates understanding of the human-AI balance. |
| **Output Audit Rigor** | Errors and concerns identified in Claude's output. Edits are documented with correct type tags and specific rationales. |
| **Human Judgment Depth** | The "what I'd check before sending" analysis names specific risks for each sub-task. Governance compliance is verified. The participant articulates what they bring that Claude can't. |

### Why This Task Works

- **Cross-unit applicability:** Every DC CAP unit sends partner communications and works with data. The scenario is universal.
- **Deterministic anchors:** Governance classifications and skill selections have correct answers, enabling reliable feedback.
- **Integration test:** The participant can't write a good data prompt without understanding governance constraints. Competencies are naturally interdependent.
- **Two sub-tasks, one pipeline:** The partner email and data summary require different skills, different modalities, and different governance considerations. This shows the participant that the pipeline adapts to the situation.

---

## Task 2: The Supported Pipeline

**Weeks:** 3-4 (April 18-May 1)  
**Scaffolding:** Medium — skill provides pipeline structure, participant selects scenario  
**Time estimate:** 90-120 minutes initial, 30-45 minutes revision  
**Prerequisite:** Task 1 completed

### The Setup

The participant selects ONE real work task from their current responsibilities. The skill provides the pipeline structure as checkpoints, but the participant drives the content.

**Selection guidance (provided in INTRODUCE):**

Choose a task that:
- You've done at least twice before (so you know the baseline)
- Involves creating a deliverable for someone (email, report, analysis, brief)
- Involves some data or information that requires governance consideration
- Would benefit from AI assistance (you can see how Claude could help)

Examples by unit:
- Student Success: drafting a student DCTAG reminder, preparing a case summary for a counselor
- Program Strategy: creating a cycle timeline brief, drafting an eligibility FAQ update
- Data & Technology: generating a scholar demographic breakdown, building an analytics summary
- Development: drafting a funder update, preparing a program outcome summary for a donor meeting
- Operations: creating a budget summary, drafting a vendor communication

### Pipeline Stages (with checkpoints)

**Checkpoint 1: DILIGENCE**
"Describe the data and information involved in this task. Classify the governance tier. What constraints does this tier create for how you can use AI?"

The skill provides the 4-tier framework as a reference and asks the participant to apply it to their specific scenario. The assessment checks whether they identify the correct tier and whether their constraints are consistent with that tier.

**Checkpoint 2: DESCRIPTION**
"Write your CTCC prompt for this task. Before running it, verify: does your prompt respect the governance constraints you identified? Are there any data elements you should exclude or redact?"

The skill checks the prompt against the governance classification from Checkpoint 1. If the participant classified data as Tier 1 but their prompt includes student names, the assessment flags the inconsistency.

**Checkpoint 3: DELEGATION**
"Which DC CAP skill would you use for this task? What modality (Automation / Augmentation / Agency)? What does the human bring to this interaction that Claude can't?"

The skill evaluates whether the skill selection is reasonable for the scenario (no deterministic answer key here — the participant's real work may not map to a single correct skill). The assessment focuses on whether the modality reasoning demonstrates understanding of the human-AI balance.

**Checkpoint 4: DISCERNMENT**
"Run your prompt. Audit the output. Document every edit you make:
- Tag each edit (Accuracy Fix / Tone Adjustment / Strategic Addition / Removal)
- Write the rationale for each edit (why was this change necessary for your specific audience/context?)
- Write the human judgment layer: what did you check or verify before this output could be used?
- Retrospective: what would you prompt differently next time to reduce the edit burden?"

### What the Participant Produces

A single integrated deliverable:
- The work task description (what, for whom, by when)
- Governance classification with reasoning and constraints
- CTCC prompt (with governance compliance self-check)
- Skill selection + modality + human-AI balance rationale
- Claude's output
- Annotated edit layer with tagged edits and rationales
- Human judgment analysis
- Retrospective: prompt improvement for next time

### Assessment Dimensions (4)

| Dimension | What It Measures |
|-----------|-----------------|
| **Governance Integration** | Tier classification is correct for the participant's scenario. Constraints are consistent with the tier. The prompt respects those constraints (no Tier 1 data in prompts, appropriate handling for Tier 2). |
| **Prompt + Delegation Quality** | CTCC elements are complete, specific to the participant's actual work context, and include enough content to produce a useful output. Skill and modality selections are defensible. |
| **Audit + Edit Quality** | Edit documentation is thorough. Tags are accurate. Rationales reference the specific audience, context, or risk. The retrospective connects the edit pattern to specific CTCC improvements. |
| **Pipeline Coherence** | The four stages tell a consistent story. Governance classification shapes the prompt. The prompt activates the right skill. The audit catches real issues. The human judgment layer addresses scenario-specific risks. Everything connects. |

### Why This Task Works

- **Real work, structured support.** The participant practices on work they actually do, which solves the transfer problem. The checkpoint structure prevents them from skipping pipeline stages.
- **"Pipeline Coherence" is the new dimension.** This measures whether the participant understands how the 4D competencies integrate. Governance awareness should visibly shape the prompt. The modality should align with the audit depth. This is the competency that separates "I can do each step" from "I understand the system."
- **Retrospective closes the learning loop.** By connecting their edit pattern back to their prompting choices, the participant builds the Description↔Discernment feedback loop that drives continuous improvement.
- **Universal across units.** Every DC CAP staff member produces deliverables for someone. The participant's choice of scenario ensures relevance to their actual role.

---

## Task 3: The Independent Pipeline + Unit Strategy

**Weeks:** 5-6 (May 2-15)  
**Scaffolding:** Low — participant runs independently with strategic planning layer  
**Time estimate:** 2-2.5 hours initial, 45-60 minutes revision  
**Prerequisite:** Tasks 1-2 completed

### Part A: Unit Deployment Map (Strategic Delegation)

The participant maps their unit's 8 most recurring tasks onto the 2x2 Delegation Matrix.

**The AI-Readiness Test (from Task 1-2 experience):**
1. Repeatable structure? (Template-able or unique every time?)
2. Describable inputs? (Can you articulate what Claude needs, or does it require live human context?)
3. Recoverable errors? (Can you catch mistakes before harm, or are errors irreversible?)

Yes to all three → AI-ready. No to one or more → Human-required.

For each of their 8 tasks:
- Task description (specific: deliverable + audience + frequency)
- Quadrant placement (Deploy Now / Human Core / Explore / Leave It)
- Placement rationale (both axes: frequency evidence + AI-readiness reasoning)

For their top 2 "Deploy Now" targets:
- Modality assignment with rationale
- Governance tier with handling requirements

### Part B: Full Independent Pipeline (on one Deploy Now target)

The participant selects ONE of their top 2 deployment targets and runs the complete pipeline independently — no checkpoints, no prompting from the skill:

1. Governance classification → constraints
2. CTCC prompt → run
3. Skill selection + modality → execute
4. Output audit → edit layer → human judgment
5. Final version (ready to use)

### Part C: Before/After Documentation

For the task they just executed:
- **Before:** How was this task done before the pilot? Name the steps, the time, the pain points.
- **After:** How is it done now with AI? Name the workflow: which skill, what the human does, what Claude does.
- **Impact evidence:** Time saved (quantified) and quality gained (named specifically) with at least one documented instance.

### What the Participant Produces

- Part A: Unit deployment map (8 tasks classified)
- Part B: Full independent pipeline execution (1 deployment target, complete documentation)
- Part C: Before/after documentation with impact evidence

### Assessment Dimensions (4)

| Dimension | What It Measures |
|-----------|-----------------|
| **Strategic Mapping Quality** | Tasks are specific (deliverable + audience + frequency). Quadrant placements are internally consistent with rationales. Both axes addressed. Top 2 deployment targets are genuinely highest-ROI. |
| **Independent Pipeline Execution** | The participant runs the full 4D pipeline without scaffolding. Governance classification is correct. Prompt is CTCC-complete. Skill/modality selection is sound. Output audit is rigorous. Edit documentation is thorough. |
| **Before/After Documentation** | The before description is specific enough to measure against. The after description names the workflow concretely. Impact evidence is quantified and credible. At least one documented instance. |
| **Governance + Deployment Integration** | Governance tiers are correct for deployment targets. The participant explains what data handling the tier requires for AI use. The teaching pathway (who would learn this workflow) is specific enough to act on. |

### Why This Task Works

- **Independence proves fluency.** By removing scaffolding, the assessment reveals whether the participant has internalized the pipeline or was just following steps. This is the evidence that the training worked.
- **Strategic layer bridges individual to organizational.** The deployment map is the foundation for Q3 rollout. It answers: "What should your unit automate first, and how?"
- **Before/after is capstone-ready.** The documentation from Part C feeds directly into the capstone's use case section. No duplicated effort.
- **Governance integration at the unit level.** The participant must apply governance classification to their actual deployment targets — not a classroom scenario, but the real data their unit handles. This is where Diligence becomes operational.

---

## Capstone: The Pilot Portfolio

**Weeks:** 7-8 (May 16-June 5, showcase June 5-10)  
**Scaffolding:** None — participant designs the artifact  
**Time estimate:** 2-3 hours initial, 45-60 minutes revision  
**Prerequisite:** Tasks 1-3 completed

### The 4 Sections

**Section 1: My Pilot**
Name, unit, one-sentence headline. "I reduced our partner update email cycle from 6 hours to 90 minutes while maintaining policy accuracy and governance compliance."

**Section 2: My Use Case**
Before/After documentation pulled from Task 3 Part C, refined and expanded:
- The Before (specific: steps, time, pain points)
- The After (specific: workflow, skill, human-AI balance)
- Impact metrics: time saved + quality gained, with documented instances
- The governance pathway: what tier, what handling, what the human verifies

**Section 3: My 4D Growth**
Self-assessment on each competency using the qualitative scale (Still Exploring → Leading Practice), with:
- Specific evidence from tasks (how performance changed from Task 1 → Task 3)
- Supplemental evidence from work outside the tasks (if self-rating exceeds task performance)
- Calibration check: self-ratings are cross-referenced against task performance levels

**Section 4: What I'm Teaching + What to Build Next**
Combined section:
- **Teaching module:** One workflow, skill, or prompt pattern they will teach in Q3. Must pass the independence test: could a colleague follow the steps without asking questions?
- **Build Next:** 1-2 innovation proposals. What didn't work, what's missing, what should be built for Q3. Must cite specific pilot evidence.

### Assessment Dimensions (4)

| Dimension | What It Measures |
|-----------|-----------------|
| **Use Case Quality** | Before/After is specific and quantified. Impact evidence is credible. Governance pathway is correct. |
| **4D Self-Assessment Calibration** | Self-ratings are grounded in task evidence. Ratings that diverge from task performance are supported by supplemental evidence. Honest self-awareness is demonstrated. |
| **Teaching Module Completeness** | Passes the independence test. Names the workflow, audience, modality, governance check, and step-by-step instructions. |
| **Innovation Proposal Quality** | Proposals cite specific pilot evidence, diagnose root causes, and propose actionable solutions for Q3. |

---

## Cross-Task Design Features

### Competency Integration Map

| Competency | Task 1 (Guided) | Task 2 (Supported) | Task 3 (Independent) | Capstone |
|------------|-----------------|--------------------|-----------------------|----------|
| **Diligence** | Classify controlled scenarios (answer key) | Classify own work data | Classify unit deployment targets | Governance pathway in use case |
| **Description** | Write CTCC prompts for provided scenarios | Write CTCC for real work + governance compliance check | Write CTCC independently + retrospective | Teaching module includes prompt patterns |
| **Delegation** | Select skills/modalities (answer key) | Select for real work (checkpoint) | Select independently + strategic mapping | Teaching module assigns modality |
| **Discernment** | Audit provided outputs + document edits | Full audit + edit layer + retrospective | Independent audit + before/after evidence | Calibrated self-assessment |

Every competency appears in every task. The trajectory is: learn it (Task 1), apply it (Task 2), prove it (Task 3), teach it (Capstone).

### Scaffolding Reduction

| Pipeline Stage | Task 1 | Task 2 | Task 3 |
|---------------|--------|--------|--------|
| Scenario | Provided | Participant selects (with guidance) | Participant selects (independently) |
| Governance classification | Answer key available | Checkpoint validation | Self-directed |
| Prompt writing | CTCC template provided | CTCC template referenced | Framework internalized |
| Skill selection | Answer key available | Reasonable-choice evaluation | Independent judgment |
| Output audit | Guided audit structure | Structured edit framework | Full independent audit |
| Human judgment | Prompted questions | Checkpoint questions | Self-generated analysis |

### Assessment Consistency

All four tasks use the same 5-stage learning loop (Introduce → Draft → Assess → Revise → Package) and the same qualitative assessment levels (Exceeds / Meets / Approaching / Below). The shift is in what's being assessed:

- **Task 1:** Can you execute each pipeline stage correctly when guided?
- **Task 2:** Can you apply the pipeline to your own work with structural support?
- **Task 3:** Can you run the pipeline independently AND think strategically about deployment?
- **Capstone:** Can you synthesize your learning, honestly assess your growth, and teach others?

### Peer Exchange

After each task's portfolio is packaged, participants share with the cohort. The facilitator discussion notes (generated from each participant's specific performance pattern) create structured 5-minute peer learning at the start of each session.

### KPMG Evidence Structure

The system produces structured evidence at three levels:
1. **Individual growth:** Level profiles across 4 tasks showing progression from guided to independent
2. **Cohort patterns:** Level distributions by competency ("8 of 10 participants reached Meets or above on Governance Accuracy by Task 3")
3. **Organizational impact:** Before/after documentation from Task 3 and capstone, deployment maps showing planned AI integration across units, teaching modules ready for Q3 rollout

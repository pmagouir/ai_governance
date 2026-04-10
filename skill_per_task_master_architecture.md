# Skill-Per-Task Master Architecture
## DC CAP AI Deployment Leadership Training Pilot

**Version:** 2.0  
**Date:** April 9, 2026  
**Author:** Preston Magouirk, Chief Strategy & Analytics Officer  

---

## System Design

Every weekly task in the pilot has a dedicated Claude skill that implements a five-stage learning loop:

1. **INTRODUCE** — Present the task, its goals, success criteria, and connection to pilot competencies. Set expectations for what "good" looks like before the participant starts.
2. **DRAFT** — Guide the participant through producing their initial work product. The skill scaffolds the work without doing it for them.
3. **ASSESS** — Evaluate the draft against a multi-dimensional rubric. Return qualitative feedback with specific references to the participant's actual work. Every piece of feedback maps to a rubric dimension and assessment level.
4. **REVISE** — Based on assessment gaps, generate targeted revision guidance. The participant improves their work with specific direction on what to strengthen and how.
5. **PACKAGE** — Re-assess the revision, produce a delta comparison (before/after), and assemble a branded portfolio artifact containing: original draft, initial assessment, revision, reassessment, and growth trajectory. Format using DC CAP brand system.

### Peer Exchange (Layer 4)

After packaging, each participant's branded deliverable goes to the full cohort via a shared folder. Cross-unit visibility accelerates collective learning and builds organizational AI capability.

---

## Assessment Framework

### Universal Assessment Scale (all tasks, all dimensions)

Assessment uses four qualitative levels as the core unit of measurement. These levels are consistent across all tasks and provide structured language for feedback.

| Level | Label | Definition |
|-------|-------|------------|
| 4 | Exceeds Standard | Work demonstrates sophisticated understanding. Could serve as an exemplar for other participants. Reasoning is specific, grounded, and shows independent judgment beyond what was taught. |
| 3 | Meets Standard | Work satisfies all success criteria. Reasoning is clear and correct. Minor gaps may exist but do not undermine the core deliverable. |
| 2 | Approaching Standard | Work addresses the task but has meaningful gaps in reasoning, specificity, or accuracy. The participant understands the concept but application needs strengthening. |
| 1 | Below Standard | Work is incomplete, contains significant errors, or demonstrates fundamental misunderstanding of the competency. Substantial revision required. |

These levels are the units of assessment. Feedback and improvement tracking use level language throughout — not numerical scoring.

### Feedback Rules

Every assessment follows these rules to ensure feedback is replicable, actionable, and grounded in the participant's actual work:

1. **Cite the work.** Every piece of feedback references a specific element of the participant's submission. ("In your classification of Scenario 3, you assigned Tier 4/Public. The scenario describes scholarship amounts disaggregated by university, which meets Tier 2/Sensitive criteria because...")
2. **Name the dimension and level.** ("Classification Accuracy: Approaching Standard") Clearly assign the level using the four-point scale.
3. **Explain the gap in one sentence.** What's missing, wrong, or incomplete — stated as a factual observation.
4. **Provide the revision direction in one sentence.** What specifically to do differently. ("Reclassify scenarios involving disaggregated financial data by considering whether the combination of fields could identify individual scholars.")
5. **No nitpicking.** Feedback targets substantive gaps that affect competency development. Formatting, word choice, and stylistic preferences are not scored unless they affect clarity or accuracy.
6. **Acknowledge strength.** For dimensions scoring at Meets Standard or above, the feedback notes what worked and why it worked, so participants can replicate their own successful patterns.

### Assessment Consistency

Each dimension is assigned a level independently, using the rubric definitions and anchor examples as calibration references. This ensures consistency across sessions and participants without requiring numerical calculations.

When a dimension could fall on either side of the Approaching/Meets boundary, apply the "bright line" test specified in the skill's rubric. If no bright line is specified, default to: "Does the participant demonstrate understanding of the underlying principle, even if application is imperfect? If yes → Meets. If they demonstrate the behavior without understanding why → Approaching."

### Readiness Thresholds

After initial assessment, the readiness threshold determines what happens next:

| Pattern | Action |
|---|---|
| All or most dimensions at Meets or above | Proceed to packaging. Note any Approaching dimensions as optional stretch goals. |
| Multiple dimensions at Approaching, none at Below | Offer one more targeted revision cycle focused on the 1-2 dimensions with the widest gap. |
| Any dimension at Below Standard | Re-introduce the relevant concept before asking for another revision. Walk through one example together, then revise. |

These thresholds are based on level patterns, not numerical composites.

### Coaching Voice

Assessment is not grading. The skill functions as a coach, and the feedback should feel like a conversation with a knowledgeable colleague who wants you to succeed. To achieve this:

1. **Open with orientation.** Before the dimension-level feedback, give a 1-2 sentence read on the overall submission: "Your Scenario B classification is strong — you nailed the FERPA reasoning. Scenarios A and C have the same gap: both need the Tier 2 threshold, which we'll fix in revision."
2. **Explain the principle, not just the correction.** When flagging an error, spend one sentence on the underlying principle the participant needs to internalize. "The governance framework uses N<10 as the threshold because smaller cell sizes make re-identification possible through cross-referencing with publicly available data. That's the principle that applies to Scenario C."
3. **Ask a coaching question.** After the scored feedback, include one question that invites the participant to reflect: "Before you revise, think about this: you correctly identified that Scenario B's student data is Tier 1, but you classified Scenario C's Ward-level data as Tier 3. What's the difference between student-level sensitivity and aggregate-level sensitivity when the cell size is small? That distinction will help with the revision."
4. **Name the transferable skill.** When the participant gets something right, name the skill they demonstrated so they can apply it elsewhere: "You applied the combination test well in Scenario B — you traced how combining datasets creates a comprehensive profile. That same reasoning applies to Scenario A."

### Delta Tracking

The reassessment after revision produces a comparison that tells a story of growth:

```
Dimension: Classification Accuracy
  Initial Level: Approaching Standard
  Revised Level: Meets Standard
  What changed: Participant correctly reclassified 2 of 3 flagged scenarios 
  by applying the small-cell re-identification threshold from the governance framework.
  The revised reasoning now cites specific data fields and the N<10 threshold.
```

The delta narrative explains what improved and how, grounding the level change in observable evidence from the participant's work. This creates a qualitative growth story rather than a numerical progression.

---

## Task 1: The Governance Walk
**Week:** 1 (April 6-9)  
**4D Competency:** Diligence  
**Modality:** Automation  
**Skill Name:** `pilot-task-1-governance-walk`

### Task Description (Revised)

After the paired classification exercise (10 scenarios, 4-tier framework), each participant independently produces a **Classification Rationale Memo** for 3 assigned scenarios. The memo requires:

- The tier assignment (Restricted / Sensitive / Internal / Public)
- The primary reasoning: which specific data elements in the scenario drove the classification
- The combination test: what would change if this data were combined with data from another scenario (e.g., scholarship amounts + student names)
- The governance action: what handling requirements apply at this tier (who can access, where it can be stored, whether AI tools can process it)

### What the Participant Produces
A written memo covering 3 scenarios with tier assignments, reasoning, combination analysis, and governance actions.

### Assessment Dimensions (4)

| Dimension | What It Measures | Exceeds Standard | Meets Standard | Approaching Standard | Below Standard |
|-----------|-----------------|-------------------|-----------------|----------------------|-----------------|
| **Classification Accuracy** | Correct tier assignment for each scenario | All 3 correct with nuanced edge-case reasoning | All 3 correct with adequate reasoning | 2 of 3 correct, or correct but with weak reasoning | 1 or fewer correct |
| **Reasoning Specificity** | Whether rationale cites specific data elements from the scenario | Cites exact data fields and explains why each field matters to the tier | Cites data fields that support the classification | References the scenario generally but doesn't isolate specific fields | Reasoning is generic or could apply to any scenario |
| **Combination Awareness** | Understanding that data tiers escalate when combined | Identifies non-obvious combinations and explains the escalation mechanism | Identifies at least one valid combination risk per scenario | Mentions combination risk but analysis is vague or applies to only 1 scenario | No combination analysis or fundamentally wrong |
| **Governance Application** | Correct handling requirements for assigned tier | Handling requirements are complete and tier-appropriate, with specific references to the governance framework | Handling requirements are correct for the tier | Handling requirements are partially correct or incomplete | Wrong tier handling or no handling specified |

### Feedback Logic

The skill evaluates the memo by:
1. Comparing each tier assignment against the answer key (encoded in the skill from the governance framework's data classification definitions)
2. Checking whether the reasoning references specific data elements named in the scenario text
3. Evaluating whether the combination analysis identifies at least one valid escalation pathway
4. Verifying governance actions against the framework's tier-specific handling requirements

Feedback is actionable because the scenarios have deterministic correct answers for classification and governance handling. Reasoning quality is assessed against observable specificity (did they cite the actual data fields or not?).

---

## Task 2: The Prompt Lab
**Week:** 2 (April 10-15)  
**4D Competency:** Description  
**Modality:** Augmentation  
**Skill Name:** `pilot-task-2-prompt-lab`

### Task Description (Revised)

Each participant selects a real work task from their current responsibilities. They produce:

1. **The Weak Prompt** — Under 20 words, no context. Run it. Save the output.
2. **The Strong Prompt** — Using the CTCC template (Context, Task, Content, Constraints). Run it. Save the output.
3. **The Comparison Analysis** — A structured written analysis explaining what changed in the output and which CTCC element drove each improvement.

### What the Participant Produces
A written document containing the weak prompt + output, strong prompt + output, and a structured comparison analysis.

### Assessment Dimensions (4)

| Dimension | What It Measures | Exceeds Standard | Meets Standard | Approaching Standard | Below Standard |
|-----------|-----------------|-------------------|-----------------|----------------------|-----------------|
| **Context Quality** | Whether the Context element provides role, situation, and stakes | Context includes role, specific project/workflow, audience, and why the output matters | Context includes role and general situation | Context is present but generic ("I work at a nonprofit") | No context or context is a single word |
| **Task + Content Precision** | Whether Task and Content elements are specific enough to constrain the output | Task names the exact deliverable with format; Content provides specific data, names, dates, or source material | Task names the deliverable; Content provides some specifics | Task is vague ("write something about..."); Content is thin | Task and Content are indistinguishable from the weak prompt |
| **Constraint Effectiveness** | Whether Constraints shape tone, length, format, and audience appropriately | Constraints specify audience, tone, length, format, and at least one "do not" that prevents a known failure mode | Constraints cover at least 3 of: audience, tone, length, format | Constraints mention 1-2 elements but are vague | No constraints or constraints are contradictory |
| **Comparison Analysis Quality** | Whether the analysis correctly identifies which CTCC elements drove which output improvements | Analysis maps specific output differences to specific CTCC elements with accurate causal reasoning | Analysis identifies at least 2 CTCC-to-output connections correctly | Analysis notes that the output improved but attributes improvement vaguely | No analysis or analysis is wrong about what drove the improvement |

### Feedback Logic

The skill evaluates by:
1. Parsing the strong prompt to identify each CTCC element. If an element is missing or weak, the feedback names it and explains what's missing.
2. Comparing weak vs. strong outputs to verify that the claimed improvements actually exist in the text.
3. Evaluating the comparison analysis for causal accuracy: did the participant correctly identify which template element drove which output change?

Feedback is actionable because each dimension maps to a specific section of the participant's prompt that they can directly edit and resubmit.

---

## Task 3: The Delegation Decision
**Week:** 3 (April 15-22)  
**4D Competency:** Delegation  
**Modality:** Automation + Augmentation  
**Skill Name:** `pilot-task-3-delegation-decision`

### Task Description (Revised from "Skill Trigger Challenge")

Each participant receives 5 realistic DC CAP work scenarios. For each scenario, they produce a **Delegation Brief** containing:

1. **The selected DC CAP skill** — Which skill should handle this task (from the available library: FAQ, Student Outreach, Partner Outreach, Counselor Outreach, Situational Email, Escalation Protocol, Data Analysis)
2. **The modality classification** — Automation ("do this for me"), Augmentation ("let's work together"), or Agency ("make this repeatable")
3. **The prompt** — The actual prompt they would use to activate the skill for this scenario
4. **The execution** — Run the prompt, capture the output
5. **The human judgment layer** — What they would check, edit, or add before the output leaves their desk

### The 5 Scenarios (encoded in skill)

1. A high school counselor emails asking what documents a student needs for DCTAG verification. (Correct: FAQ skill, Automation)
2. Your unit director asks you to draft a check-in email to university partners about the spring preference deadline. (Correct: Partner Outreach skill, Augmentation)
3. A parent calls upset that their student's scholarship was declined and wants to know why. (Correct: Escalation Protocol skill, Augmentation)
4. Preston asks for a breakdown of current scholars by university, award type, and Ward. (Correct: sf-demo-data skill, Automation)
5. You need to send a student a reminder that their DCTAG documentation is due in 10 days and their award is at risk. (Correct: Student Outreach skill, Augmentation)

### What the Participant Produces
A written brief covering all 5 scenarios with skill selection, modality, prompt, output, and human judgment notes.

### Assessment Dimensions (4)

| Dimension | What It Measures | Exceeds Standard | Meets Standard | Approaching Standard | Below Standard |
|-----------|-----------------|-------------------|-----------------|----------------------|-----------------|
| **Skill Selection Accuracy** | Correct skill identified for each scenario | 5/5 correct with reasoning that shows understanding of each skill's purpose | 4-5/5 correct | 3/5 correct | 2 or fewer correct |
| **Modality Classification** | Correct modality assigned with reasoning | 5/5 correct and reasoning explains the human-AI balance for each | 4-5/5 correct with basic reasoning | 3/5 correct or correct but no reasoning | 2 or fewer correct |
| **Prompt Quality** | Whether the prompt would actually activate the skill and produce useful output | All 5 prompts include scenario-specific details and would produce targeted output | Most prompts include enough detail to work | Prompts are generic and would produce generic output | Prompts wouldn't activate the correct skill |
| **Human Judgment Layer** | Quality of the "what I'd check before sending" analysis | Identifies scenario-specific risks (policy accuracy, tone for audience, data sensitivity) for each | Identifies at least one meaningful check per scenario | Checks are generic ("I'd proofread it") | No checks or checks show misunderstanding of risks |

### Feedback Logic

The skill evaluates by:
1. Comparing skill selections against the answer key (each scenario has a correct skill and a rationale for why)
2. Comparing modality classifications against the correct answer and evaluating the reasoning
3. Assessing prompt quality by checking whether scenario-specific details (names, dates, policy references from the scenario) appear in the prompt
4. Evaluating human judgment layers for specificity: does the participant name what could go wrong with this specific output?

This task has a hybrid design: skill selection and modality have correct answers (replicable scoring), while prompt quality and human judgment are assessed on specificity and relevance (structured rubric with observable criteria).

---

## Task 4: The Output Audit
**Week:** 4 (April 22-25)  
**4D Competency:** Discernment  
**Modality:** Augmentation  
**Skill Name:** `pilot-task-4-output-audit`

### Task Description (Revised)

Two-part audit exercise:

**Part A: Pre-Built Scenario Audit.** Everyone receives the same AI-generated funder update email containing 5 planted errors of varying severity:
1. A specific dollar figure that's wrong ($2.1M stated; correct is $1.8M)
2. A persistence rate cited without the program change context that makes the number misleading
3. A confident claim about "all DC CAP scholars" that actually only applies to first-year scholars
4. Tone that's too casual for a funder audience (uses "awesome" and "team effort")
5. A date reference that's off by one month

For each error, participants write: (a) what the error is, (b) why it matters (what harm would result from sending this), and (c) the correction.

**Part B: Self-Audit.** Take one Claude output from a previous task (Tasks 2 or 3) and run it through the same audit framework. Document every issue found with the same (a), (b), (c) structure.

### What the Participant Produces
A written audit report covering Part A (5 errors to find) and Part B (self-audit of own prior work).

### Assessment Dimensions (4)

| Dimension | What It Measures | Exceeds Standard | Meets Standard | Approaching Standard | Below Standard |
|-----------|-----------------|-------------------|-----------------|----------------------|-----------------|
| **Error Detection (Part A)** | How many of the 5 planted errors were caught | 5/5 caught with accurate identification | 4/5 caught | 3/5 caught | 2 or fewer caught |
| **Impact Analysis Quality** | Whether "why it matters" explanations are specific and accurate | Impact statements name the specific harm (e.g., "funder loses trust in our data reporting" or "we misrepresent our reach by 15%") | Impact statements are relevant but less specific | Impact statements are generic ("this could be a problem") | No impact analysis or impacts are wrong |
| **Correction Quality** | Whether proposed corrections fix the actual issue | Corrections are precise and include source verification (e.g., "correct figure is $1.8M per FY26 Q2 disbursement report") | Corrections fix the issue but without source citation | Corrections address the symptom but miss the root cause | Corrections are wrong or absent |
| **Self-Audit Depth (Part B)** | Rigor of the self-audit on own prior work | Identifies at least 2 substantive issues in own work with accurate diagnosis and correction | Identifies at least 1 substantive issue with correction | Notes minor issues but misses substantive ones | Claims no issues exist or identifies only formatting items |

### Feedback Logic

Part A is deterministic: the skill has the answer key for all 5 errors. Scoring is objective — either the participant caught the error and correctly identified it, or they didn't. Impact analysis and correction quality are assessed against the specific harm each error would cause (encoded in the skill).

Part B is assessed structurally: the skill checks whether the self-audit applies the same rigor to the participant's own work that they applied (or should have applied) to Part A. A participant who catches 5/5 planted errors but then claims their own work has no issues receives a flag.

---

## Task 5: Show Your Work — The Edit Decision Brief
**Week:** 5 (April 23 / Week 5 check-in)  
**4D Competency:** Discernment  
**Modality:** Augmentation  
**Skill Name:** `pilot-task-5-edit-decision-brief`

### Task Description (Revised)

Each participant selects one Claude output from real work completed during the pilot (an email, draft, analysis, or data pull). They produce an **Edit Decision Brief** containing:

1. **The Prompt** — Exactly as submitted, with no cleanup
2. **The Raw Output** — Claude's complete response
3. **The Annotated Edit Layer** — Every change made to the raw output, with each edit tagged as one of four types:
   - **Accuracy Fix** — Corrected a factual error or unverifiable claim
   - **Tone Adjustment** — Changed voice, register, or formality for the audience
   - **Strategic Addition** — Added context, framing, or information Claude didn't have
   - **Removal** — Deleted content that was unnecessary, wrong, or risky
4. **The Final Version** — The output as sent or used
5. **The Retrospective** — One paragraph: "What would I prompt differently next time to reduce the edit burden?"

### What the Participant Produces
A written Edit Decision Brief with all 5 components.

### Assessment Dimensions (4)

| Dimension | What It Measures | Exceeds Standard | Meets Standard | Approaching Standard | Below Standard |
|-----------|-----------------|-------------------|-----------------|----------------------|-----------------|
| **Edit Identification Completeness** | Whether all substantive changes between raw output and final version are documented | All edits documented and none missing from comparison of raw vs. final | Most edits documented; minor omissions only | Several edits undocumented or edits are described vaguely | Fewer than half of actual edits are documented |
| **Edit Type Accuracy** | Whether each edit is correctly tagged (Accuracy Fix, Tone, Strategic Addition, Removal) | All tags correct and reasoning demonstrates understanding of each category | Most tags correct | Some tags show confusion between categories (e.g., labeling a tone change as an accuracy fix) | Tags are mostly wrong or absent |
| **Rationale Quality** | Whether each edit rationale explains why the change was necessary for this specific audience/context | Rationales reference the specific audience, context, or risk that made the edit necessary | Rationales are clear but less context-specific | Rationales are generic ("made it sound better") | No rationales or rationales don't connect to the edit |
| **Retrospective Insight** | Whether the "prompt differently" analysis shows real learning | Identifies specific CTCC elements to add or change, with evidence from the edit pattern (e.g., "I made 4 tone adjustments, so I need a Constraint specifying audience and register") | Identifies at least one specific prompt improvement | Retrospective is vague ("I'd give more detail") | No retrospective or retrospective doesn't connect to edit patterns |

### Feedback Logic

The skill evaluates by:
1. Comparing the raw output against the final version to independently identify edits, then checking whether the participant's edit documentation is complete
2. Evaluating each edit tag against the actual nature of the change (is calling something an "accuracy fix" accurate when the raw output was factually correct but the participant added strategic context?)
3. Assessing rationale specificity: does the rationale reference the actual audience, use case, or risk?
4. Checking whether the retrospective insight logically follows from the edit pattern (if 3 of 5 edits were tone adjustments, a retrospective focused on "add more data to the prompt" shows a disconnect)

---

## Task 6: The Delegation Map
**Week:** 5-6 (April 30)  
**4D Competency:** Delegation  
**Modality:** All three  
**Skill Name:** `pilot-task-6-delegation-map`

### Task Description (Revised)

Each participant maps their unit's 10 most recurring tasks onto the 2x2 Delegation Matrix (AI-Readiness x Frequency). For each task, they produce:

1. **The task description** — Specific enough to evaluate (e.g., "Draft monthly counselor update email" rather than "send emails")
2. **The quadrant placement** — Deploy Now / Human Core / Explore / Leave It
3. **The placement rationale** — Why this task belongs in this quadrant, referencing both frequency evidence and AI-readiness reasoning
4. **For "Deploy Now" tasks (top 3):** Modality assignment (Automation/Augmentation/Agency) with rationale, and the governance tier that applies

### What the Participant Produces
A completed Delegation Map with 10 tasks classified, rationales for each, and 3 deployment targets with modality and governance assignments.

### Assessment Dimensions (4)

| Dimension | What It Measures | Exceeds Standard | Meets Standard | Approaching Standard | Below Standard |
|-----------|-----------------|-------------------|-----------------|----------------------|-----------------|
| **Task Specificity** | Whether the 10 tasks are described specifically enough to evaluate | All 10 tasks name a specific deliverable, audience, and cadence | Most tasks are specific; 1-2 are vague | Several tasks are categories rather than tasks ("handle emails") | Most tasks are too vague to classify meaningfully |
| **Quadrant Logic** | Whether placement rationales demonstrate understanding of both axes | Rationales reference specific evidence for frequency AND specific reasoning for AI-readiness for each task | Rationales address both axes for most tasks | Rationales address one axis but not both, or are generic | Placements appear random or rationales contradict the quadrant |
| **Deployment Target Quality** | Whether the 3 "Deploy Now" targets are well-chosen and modality-assigned correctly | Top 3 are genuinely the highest-ROI tasks; modality assignments match the human-AI balance each task requires | Top 3 are reasonable; modality assignments are defensible | Top 3 include a questionable choice or a modality mismatch | Top 3 are poorly chosen (e.g., low-frequency tasks in "Deploy Now") |
| **Governance Integration** | Whether governance tiers are correctly applied to deployment targets | Governance tiers are correct and the participant explains what data handling the tier requires for AI use | Governance tiers are correct | Governance tiers are assigned but without reasoning | No governance tiers or tiers are wrong |

### Feedback Logic

The skill evaluates by:
1. Checking task specificity: does each task name a deliverable, an audience, and a cadence/frequency indicator?
2. Evaluating quadrant logic: does the rationale reference observable evidence for frequency (weekly, monthly, per-cycle) and a defensible AI-readiness assessment?
3. Cross-referencing deployment targets against the quadrant logic: are the top 3 actually from the high-frequency + AI-ready quadrant?
4. Verifying governance tiers against the data classification framework: does the task involve data that matches the assigned tier?

Feedback on this task is inherently more judgment-based than Tasks 1 or 4, because there's no single "correct" answer for how to classify a unit's work. The skill focuses on internal consistency (does the rationale support the placement?) and governance accuracy (are the tiers correct given the data involved?).

---

## Task 7: Capstone Portfolio
**Weeks:** 7-8 (May 19 - June 5)  
**4D Competency:** All four  
**Modality:** Agency  
**Skill Name:** `pilot-task-7-capstone`

### Task Description (Revised)

Each participant produces a 5-section Capstone Portfolio:

1. **My Pilot** — Name, unit, and their pilot summarized in one sentence
2. **The Use Case** — A real work task transformed by AI, with Before/After documentation and quantified impact (time saved, quality gained)
3. **My 4D Growth** — Self-assessment on each competency using level language (Exceeds/Meets/Approaching/Below) with a reflective statement grounded in specific task evidence from the pilot
4. **What I'm Teaching in Q3** — A documented workflow, skill, or prompt pattern they will teach other DC CAP staff, with target audience, modality, and governance pathway
5. **Build Next** — 2-3 innovation proposals identifying what didn't work and proposing specific solutions for the Q3 roadmap

### What the Participant Produces
A complete 5-section portfolio document.

### Assessment Dimensions (5)

| Dimension | What It Measures | Exceeds Standard | Meets Standard | Approaching Standard | Below Standard |
|-----------|-----------------|-------------------|-----------------|----------------------|-----------------|
| **Use Case Specificity** | Whether the Before/After documents a real, specific workflow transformation | Before/After names the exact task, quantifies the old process (hours, steps, error rate), and quantifies the improvement with evidence | Before/After describes a real task with some quantification | Before/After is generic or only one side is specific | No real use case or purely hypothetical |
| **Impact Measurement** | Whether time saved and quality gained are quantified and credible | Metrics are specific, credible, and verifiable (e.g., "reduced from 6 hours to 2 hours across 3 documented instances") | Metrics are specific but based on a single instance or estimate | Metrics are vague ("saved a lot of time") | No metrics or metrics are implausible |
| **4D Self-Assessment Calibration** | Whether self-ratings are grounded in task evidence and calibrated to actual performance | Each rating cites specific task performance evidence and aligns with the trajectory shown in prior task assessments | Most ratings cite evidence | Ratings are provided but evidence is vague or disconnected from actual task performance | Ratings without evidence or wildly miscalibrated |
| **Teaching Module Quality** | Whether the Q3 teaching plan is specific enough that someone else could follow it | Module names the workflow, provides step-by-step instructions, identifies the audience, assigns the modality, and includes a governance check | Module covers most elements but lacks step-by-step detail | Module is a general description rather than a teachable workflow | No module or module is too vague to teach from |
| **Innovation Proposal Quality** | Whether Build Next proposals identify real gaps with actionable solutions | Proposals name specific problems experienced during the pilot, diagnose root causes, and propose solutions with enough detail to act on | Proposals identify real problems with reasonable solutions | Proposals are generic ("we need more training") | No proposals or proposals don't connect to pilot experience |

### Feedback Logic

The capstone skill has a unique calibration function: it cross-references the participant's 4D self-assessment against their actual level assignments from Tasks 1-6. If a participant rates themselves Exceeds Standard on Discernment but was assigned Approaching Standard on the Output Audit, the feedback flags the gap and asks them to reconcile. This creates honest self-assessment calibrated to evidence.

For the teaching module, the skill checks structural completeness: does the module have enough specificity that a colleague who wasn't in the pilot could follow the steps? The test is: "Could someone execute this workflow from the document alone?"

---

## Portfolio Packaging Format

Every task skill produces a branded portfolio artifact with this structure:

```
╔══════════════════════════════════════════════╗
║  DC CAP SCHOLARS                              ║
║  AI Leadership Pilot — Task Portfolio          ║
║                                                ║
║  [Task Name]                                   ║
║  [Participant Name] · [Unit] · [Date]          ║
╠══════════════════════════════════════════════╣
║  SECTION 1: Task Overview                      ║
║  - Competency targeted                         ║
║  - Success criteria                            ║
║                                                ║
║  SECTION 2: Initial Submission                 ║
║  - The participant's first draft               ║
║                                                ║
║  SECTION 3: Assessment                         ║
║  - Levels by dimension (with rubric level)     ║
║  - Specific feedback per dimension             ║
║                                                ║
║  SECTION 4: Revised Submission                 ║
║  - The participant's improved work             ║
║                                                ║
║  SECTION 5: Growth Trajectory                  ║
║  - Level comparison (initial → revised)        ║
║  - What improved and how                       ║
║  - Overall readiness assessment (qualitative)  ║
║                                                ║
║  SECTION 6: Participant Reflection             ║
║  - Data-grounded reflection prompt + response  ║
║                                                ║
║  SECTION 7: Facilitator Notes                  ║
║  - Key patterns for cohort discussion          ║
║  - Suggested discussion question               ║
║                                                ║
║  DC CAP · dccapscholars.org                    ║
╚══════════════════════════════════════════════╝
```

### Growth Trajectory Section

The Growth Trajectory section replaces numerical composites with level comparisons and narrative explanation:

For each dimension, display:
- **Dimension name**
- **Initial Level → Revised Level**
- **Narrative:** What changed in the participant's work between submission and revision. Ground this in observable evidence.

Example:

```
Classification Accuracy
  Initial: Approaching Standard
  Revised: Meets Standard
  What changed: Participant correctly reclassified 2 of 3 flagged scenarios 
  by applying the small-cell re-identification threshold from the governance framework.
  The revised reasoning now cites specific data fields and the N<10 threshold.
```

Include an overall readiness statement such as:
- "Most dimensions at Meets — ready for application in your unit"
- "Approaching dimension identified in Governance Application — recommend one more guided example before deployment"
- "All dimensions at Meets or Exceeds — ready to teach this skill to peers"

### Participant Reflection Prompts

The portfolio includes a reflection section. The reflection prompt must be **data-grounded and comparative** — rooted in the participant's actual levels and performance patterns, never in subjective feelings.

**Design principle:** The prompt must be impossible to answer with "nothing" or "I don't know." It forces the participant to reason about their own performance pattern and extract a transferable insight.

**Bad prompts (never use these):**
- "What surprised you?" → "Nothing" kills it.
- "How do you feel about your growth?" → Invites empty self-congratulation.
- "What did you learn?" → "A lot" says nothing.

**Good prompts (data-grounded, task-specific):**
Each skill generates a reflection prompt from the participant's actual levels. The prompt follows this template:

> "Your strongest dimension was [dimension] ([level]). Your widest gap was in [dimension] ([level]). What's different about how you approached those two? What would you tell a colleague who struggles with [lowest dimension]?"

**Task-specific reflection prompts (embedded in each skill):**

| Task | Reflection Prompt |
|------|------------------|
| 1: Governance Walk | "You reached [X level] on Classification Accuracy and [Y level] on Combination Awareness. Look at the scenario where the gap was widest. What made the combination test harder than the initial classification?" |
| 2: Prompt Lab | "Your Comparison Analysis reached [X level]. Look at the CTCC element that drove the biggest output change. Why did that element matter more than the others for this particular task?" |
| 3: Delegation Decision | "You reached [X level] on Skill Selection and [Y level] on Human Judgment Layer. For the scenario where your human judgment was strongest, what did you know about that situation that made the risks easier to name?" |
| 4: Output Audit | "You caught [X] of 5 errors. Look at the error you missed (or caught last). What category does it fall in — factual, framing, or tone? What does that tell you about where your audit instincts are strongest and where they have a blind spot?" |
| 5: Edit Decision Brief | "Your edit distribution was [X]% Accuracy Fixes, [Y]% Tone Adjustments, [Z]% Strategic Additions, [W]% Removals. What does that pattern tell you about what Claude gets right vs. what it misses for your type of work?" |
| 6: Delegation Map | "Of your 10 tasks, you put [X] in Deploy Now and [Y] in Human Core. Pick one task from each quadrant. What's the specific difference that separates an AI-ready task from a human-required task in your unit?" |
| 7: Capstone | "Your 4D self-ratings were [levels]. Your task performance across the pilot showed [pattern]. Where was the biggest gap between how you rated yourself and what the assessments showed? What accounts for that gap?" |

These prompts require the participant to engage with their own data. They produce insight regardless of whether the participant was "surprised" or not.

### Facilitator Discussion Notes

Each portfolio includes a one-paragraph facilitator note that identifies:

1. **The pattern worth discussing** — What does this participant's performance reveal that's useful for the cohort? (e.g., "This participant reached Meets on all five audit dimensions but missed the data framing error — a pattern worth exploring with the group since data framing is the highest-stakes error category for funder communications.")
2. **A discussion question** — One question that uses this portfolio to teach the group something. (e.g., "This participant classified Scenario C as Tier 3 because the overall metric is aggregate. The N=6 Ward changed everything. When you're looking at your own data, how do you know when an aggregate is 'safe' vs. when a small cell creates risk?")

The facilitator note is generated by the skill based on the participant's specific level pattern. It is NOT generic — it references the actual gaps and strengths in this particular portfolio.

---

## Progress Tracking

Each task produces a dimension-level profile (the set of levels across all dimensions) rather than a composite score. This enables:

- **Individual tracking:** Level profiles across 7 tasks show whether a participant is progressing from Approaching to Meets to Exceeds
- **Cohort patterns:** "7 of 10 participants reached Meets on Delegation by Task 6" is more meaningful than an average composite
- **KPMG reporting:** Level distribution data by competency, derived from task performance, provides structured evidence of pilot impact

Level distributions are tracked and reported as:
- "X participants reached Meets or above on [dimension]"
- "Y participants improved from Approaching to Meets between initial and revised submission"
- "[Dimension] distribution: Z at Exceeds, A at Meets, B at Approaching, C at Below"

---

## Competency Progression Map

| Week | Task | Primary Competency | Builds On | Prerequisite |
|------|------|--------------------|-----------|--------------|
| 1 | The Governance Walk | Diligence | — (foundation) | None |
| 2 | The Prompt Lab | Description | Governance awareness from Task 1 | Task 1 completed |
| 3 | The Delegation Decision | Delegation | Prompt skills from Task 2 | Tasks 1-2 completed |
| 4 | The Output Audit | Discernment | All prior tasks provide audit material | Tasks 1-3 completed |
| 5 | Edit Decision Brief | Discernment (applied) | Audit skills from Task 4 | Tasks 1-4 completed |
| 5-6 | The Delegation Map | Delegation (strategic) | Delegation judgment from Task 3 | Tasks 1-5 completed |
| 7-8 | Capstone Portfolio | All four | Evidence from all prior tasks | Tasks 1-6 completed |

Each task requires competencies built in prior weeks. The sequence is deliberate: you can't delegate effectively (Task 3) without prompt skills (Task 2). You can't audit outputs (Task 4) without having produced outputs to audit (Tasks 2-3). The capstone synthesizes everything.

---

## Assessment Calibration

Assessment calibration ensures consistent feedback across sessions and participants. Two mechanisms:

1. **Anchor Examples:** Each skill includes calibration examples in its assessment guidance showing what Approaching vs. Meets looks like for the most subjective dimension. These are internal to the skill (not shown to participants) and serve as reference points during assessment.

2. **Level Assignment Rules:** When a dimension could fall on either side of the Approaching/Meets boundary, apply the "bright line" test specified in each skill's rubric. If no bright line is specified, default to: "Does the participant demonstrate understanding of the underlying principle, even if application is imperfect? If yes → Meets. If they demonstrate the behavior without understanding why → Approaching."

---

## Time Estimates

| Task | Estimated Initial Submission | Estimated Revision | Total |
|------|-------|---------|-------|
| 1: Governance Walk | 45-60 min | 20-30 min | ~90 min |
| 2: Prompt Lab | 60-90 min | 30 min | ~2 hrs |
| 3: Delegation Decision | 90-120 min | 30-45 min | ~2.5 hrs |
| 4: Output Audit | 60-90 min | 20-30 min | ~2 hrs |
| 5: Edit Decision Brief | 60-90 min | 20-30 min | ~2 hrs |
| 6: Delegation Map | 90-120 min | 30-45 min | ~2.5 hrs |
| 7: Capstone | 2-3 hrs | 45-60 min | ~3.5 hrs |

**Note:** These are working estimates. Time includes thinking, writing, and running prompts through Claude — not just typing. Revision time assumes targeted revision (1-2 dimensions), not full rewrite.

---

## Portfolio Rendering

The PACKAGE stage produces structured content that should be rendered as a branded DC CAP document. After the skill generates the portfolio content, invoke the `dccap-brand` skill and `docx` skill to produce a formatted Word document with:

- DC CAP navy (#101A4C) header bar with white Akkordeon text
- Task name and participant info in Noto Serif SemiCondensed
- Section headers in Akkordeon Five, purple (#8352FF)
- Body text in Noto Serif SemiCondensed, 11pt
- Growth trajectory section with dimension level badges
- DC CAP logo and footer

If docx rendering is not available in the current session, the skill should output the portfolio in clean markdown with clear section headers, suitable for copy-paste into a branded template.

---

## Implementation Notes

### Skill Deployment Sequence

Skills deploy one week before the task is due. This gives participants time to read the introduction and understand success criteria before starting.

### Peer Exchange Protocol

After each task's portfolio is packaged:
1. Participant saves to the shared pilot folder
2. All cohort members can view all portfolios
3. The next session opens with 5 minutes of "one thing I learned from someone else's portfolio"

### Data Collection

Every assessment level is structured data that feeds into:
- The R analytics pipeline (`pilot_analytics.R`)
- The weekly analytics dashboard (`pilot_analytics_dashboard.html`)
- The KPMG grant reporting dataset
- Individual growth trajectories for the capstone 4D self-assessment calibration

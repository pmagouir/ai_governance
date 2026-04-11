# Skill-Per-Task Master Architecture
## DC CAP AI Deployment Leadership Training Pilot

**Version:** 3.0
**Date:** April 11, 2026
**Author:** Preston Magouirk, Chief Strategy & Analytics Officer

---

## System Design

Every task in the pilot has a dedicated Claude skill that implements a five-stage learning loop:

1. **INTRODUCE** -- Present the task, its goals, success criteria, and connection to pilot competencies. Set expectations for what "good" looks like before the participant starts. For Tasks 2+, open by referencing the participant's prior task assessment to establish continuity.
2. **DRAFT** -- Guide the participant through producing their initial work product. The skill scaffolds the work without doing it for them. Draft-stage content varies by task:
   - **Task 1 (CLASSIFY):** Classification work on 6 governance scenarios + creation of a unit-specific quick-reference card
   - **Task 2 (CREATE):** Workflow design document + execution + plan-vs-reality analysis
   - **Task 3 (CRITIQUE):** Planted error audit + self-audit of own Task 2 work + prompt improvement memo
   - **Task 4 (STRATEGIZE):** Unit deployment map (6 tasks on 2x2) + strategic triage (top 2) + half-page Q3 rollout plan
   - **Capstone (TEACH + SYNTHESIZE):** Portfolio summary + best use case + 4D self-assessment + teaching module + demonstration or innovation proposals
3. **ASSESS** -- Evaluate the draft against a multi-dimensional rubric. Return qualitative feedback with specific references to the participant's actual work. Every piece of feedback maps to a rubric dimension and assessment level.
4. **REVISE** -- Based on assessment gaps, generate targeted revision guidance. The participant improves their work with specific direction on what to strengthen and how. The revision pathway is differentiated based on the participant's assessment pattern (see Differentiated Pathways below).
5. **PACKAGE** -- Re-assess the revision, produce a delta comparison (before/after), and assemble a branded portfolio artifact containing: original draft, initial assessment, revision, reassessment, and growth trajectory. Format using DC CAP brand system.

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

These levels are the units of assessment. Feedback and improvement tracking use level language throughout -- not numerical scoring.

### Feedback Rules

Every assessment follows these rules to ensure feedback is replicable, actionable, and grounded in the participant's actual work:

1. **Cite the work.** Every piece of feedback references a specific element of the participant's submission. ("In your classification of Scenario 3, you assigned Tier 4/Public. The scenario describes scholarship amounts disaggregated by university, which meets Tier 2/Sensitive criteria because...")
2. **Name the dimension and level.** ("Classification Accuracy: Approaching Standard") Clearly assign the level using the four-point scale.
3. **Explain the gap in one sentence.** What's missing, wrong, or incomplete -- stated as a factual observation.
4. **Provide the revision direction in one sentence.** What specifically to do differently. ("Reclassify scenarios involving disaggregated financial data by considering whether the combination of fields could identify individual scholars.")
5. **No nitpicking.** Feedback targets substantive gaps that affect competency development. Formatting, word choice, and stylistic preferences are not scored unless they affect clarity or accuracy.
6. **Acknowledge strength.** For dimensions scoring at Meets Standard or above, the feedback notes what worked and why it worked, so participants can replicate their own successful patterns.

### Assessment Consistency

Each dimension is assigned a level independently, using the rubric definitions and anchor examples as calibration references. This ensures consistency across sessions and participants without requiring numerical calculations.

When a dimension could fall on either side of the Approaching/Meets boundary, apply the "bright line" test specified in the skill's rubric. If no bright line is specified, default to: "Does the participant demonstrate understanding of the underlying principle, even if application is imperfect? If yes, Meets. If they demonstrate the behavior without understanding why, Approaching."

### Coaching Voice

Assessment is not grading. The skill functions as a coach, and the feedback should feel like a conversation with a knowledgeable colleague who wants you to succeed. To achieve this:

1. **Open with orientation.** Before the dimension-level feedback, give a 1-2 sentence read on the overall submission: "Your Scenario B classification is strong -- you nailed the FERPA reasoning. Scenarios A and C have the same gap: both need the Tier 2 threshold, which we'll fix in revision."
2. **Explain the principle, not just the correction.** When flagging an error, spend one sentence on the underlying principle the participant needs to internalize. "The governance framework uses N<10 as the threshold because smaller cell sizes make re-identification possible through cross-referencing with publicly available data. That's the principle that applies to Scenario C."
3. **Ask a coaching question.** After the scored feedback, include one question that invites the participant to reflect: "Before you revise, think about this: you correctly identified that Scenario B's student data is Tier 1, but you classified Scenario C's Ward-level data as Tier 3. What's the difference between student-level sensitivity and aggregate-level sensitivity when the cell size is small? That distinction will help with the revision."
4. **Name the transferable skill.** When the participant gets something right, name the skill they demonstrated so they can apply it elsewhere: "You applied the combination test well in Scenario B -- you traced how combining datasets creates a comprehensive profile. That same reasoning applies to Scenario A."

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

### Differentiated Pathways

After initial assessment, the participant's level pattern determines the revision pathway:

| Pattern | Pathway | Action |
|---------|---------|--------|
| Exceeds on all or most dimensions | **Extension Challenge** | Skill presents a task-specific extension challenge (e.g., Task 1: classify a novel scenario not in the original set; Task 2: redesign the workflow for a different modality; Task 3: design an audit checklist for their unit; Task 4: draft the cross-unit coordination memo). After the extension, proceed to PACKAGE. |
| All or most at Meets | **Standard Revision** | Standard revision on 1-2 dimensions where the participant is closest to Exceeds. Focus on sharpening specificity or depth, not correcting errors. Then PACKAGE. |
| Multiple Approaching, none Below | **Targeted Revision Cycle** | Targeted revision on the 1-2 dimensions with the widest gap between current level and Meets. Skill provides specific guidance on the underlying principle and a worked example of what Meets looks like for that dimension. Then reassess and PACKAGE. |
| Any Below | **Re-teaching** | Opens with the emotional on-ramp script (normalizing struggle), then concept reintroduction using the task's Reteaching Module appendix (worked example + fill-in template). The skill walks through the concept step by step, demonstrates it on a sample scenario, then asks the participant to apply it to their own work using the template. After re-teaching, the participant revises and is reassessed. Then PACKAGE. |

### Facilitator Infrastructure

Each task directory includes a `FACILITATOR_PROTOCOL.md` — a 1-page guide covering:
- **When to review:** Day 3/7/10 submission tracker checks, post-assessment spot-checks (20% sample), Below/Exceeds flags
- **What to prioritize:** Task-specific diagnostic sections, core competency signals, common patterns
- **Caseload reality:** Time-boxed activities (~2 hours per task cycle for 10 participants), triage rules

Each SKILL.md also includes:
- **Emotional on-ramp script** in the Below Standard pathway (3 sentences normalizing struggle before reteaching)
- **Reteaching Module appendix** with a worked example and fill-in template specific to the task's core concept

### Cross-Task Growth Tracking

Each skill (Tasks 2+) opens by referencing the participant's prior task assessment to create a continuous learning thread:

- **Task 2** references Task 1 governance classification performance. ("In Task 1, you reached [level] on Classification Accuracy and [level] on Governance Operationalization. That governance fluency is the foundation for today's work -- you'll use it to constrain your workflow design.")
- **Task 3** references Task 2 edit layer patterns. ("In Task 2, your Edit Layer Rigor was [level]. Today you'll apply that same critical lens to someone else's work first, then turn it on your own.")
- **Task 4** references all prior tasks. ("Across Tasks 1-3, your strongest dimension was [dimension] and your widest gap was [dimension]. Today's strategic work draws on everything you've built.")
- **Capstone** cross-references the participant's self-ratings against actual Task 1-4 performance. Any gap between self-assessment and assessed performance is flagged for reconciliation.

---

## Task 1: CLASSIFY
**Weeks:** 2-3
**4D Competency:** Diligence (PRIMARY)
**Cognitive Demand:** Analytical categorization, boundary reasoning, edge-case resolution
**Scaffolding:** High
**Skill Name:** `pilot-task-1-guided-pipeline`

### Task Description

Each participant independently produces a **Classification Memo** covering 6 governance scenarios drawn from the DC CAP data landscape. The scenario set is deliberately structured:
- 2 clear scenarios (unambiguous tier assignment)
- 3 edge cases (tier assignment depends on reasoning about specific data elements)
- 1 trick scenario (appears straightforward but contains a non-obvious escalation trigger)

For each scenario, the memo requires:
- The tier assignment (Restricted / Sensitive / Internal / Public)
- The primary reasoning: which specific data elements drove the classification
- The combination test: what would change if this data were combined with data from another scenario
- The governance action: what handling requirements apply at this tier

Additionally, each participant produces a **Unit-Specific Governance Quick-Reference Card** -- a one-page reference that maps the participant's actual unit data types to governance tiers with AI-handling rules.

### Deliverables
1. Classification Memo (6 scenarios with tier assignments, reasoning, combination analysis, governance actions)
2. Unit-Specific Governance Quick-Reference Card

### Assessment Dimensions (4)

#### Classification Accuracy

| Level | Definition |
|-------|------------|
| Exceeds | 6/6 correct with nuanced edge-case reasoning that could serve as exemplar |
| Meets | 5/6+ correct with adequate reasoning citing specific data elements |
| Approaching | 3-4/6 correct, or correct but with weak/generic reasoning |
| Below | 2 or fewer correct |

**Bright line:** 5/6 with specific reasoning = Meets. 5/6 with generic reasoning = Approaching.

#### Boundary Reasoning

| Level | Definition |
|-------|------------|
| Exceeds | Edge-case reasoning identifies non-obvious escalation mechanisms and articulates the underlying principle |
| Meets | Edge-case reasoning correctly identifies the triggering data element and explains why it changes the tier |
| Approaching | Identifies correct tier but cannot articulate the mechanism (right answer, wrong or missing reasoning) |
| Below | Edge cases classified incorrectly with no reasoning or fundamentally wrong reasoning |

**Bright line:** Can the participant name the specific data element that triggers the tier change? If yes and explanation is sound, Meets. If they get the tier right but cannot explain why, Approaching.

#### Combination Awareness

| Level | Definition |
|-------|------------|
| Exceeds | Identifies non-obvious cross-scenario combinations and explains the re-identification pathway |
| Meets | Identifies at least one valid combination per edge-case scenario with the escalation mechanism named |
| Approaching | Mentions combination risk but analysis is generic or applies to only 1-2 scenarios |
| Below | No combination analysis or fundamentally wrong |

**Bright line:** Does the participant name a specific re-identification pathway (e.g., "combining Ward-level persistence data with scholarship amounts narrows the population to identifiable individuals")? If yes, Meets. If they say "combining data increases risk" without naming the pathway, Approaching.

#### Governance Operationalization

| Level | Definition |
|-------|------------|
| Exceeds | Quick-reference card is immediately usable -- names real data types from participant's unit, correct tiers, specific AI-handling rules, and includes at least one edge case relevant to their work |
| Meets | Quick-reference names actual unit data types with correct tiers and basic handling rules |
| Approaching | Quick-reference lists tiers generically without unit-specific data types, or data types listed with wrong tiers |
| Below | No quick-reference or content is too generic to be actionable |

**Bright line:** Does the quick-reference name data types that actually exist in the participant's unit? If yes with correct tiers, Meets. If it lists generic categories ("student data," "financial data") without unit specifics, Approaching.

### Feedback Logic

The skill evaluates the memo by:
1. Comparing each tier assignment against the answer key (encoded in the skill from the governance framework's data classification definitions). The scenario answer key covers all 6 scenarios including expected reasoning for edge cases and the trick scenario.
2. Checking whether the reasoning references specific data elements named in the scenario text (boundary reasoning assessed against observable specificity).
3. Evaluating whether the combination analysis identifies at least one valid escalation pathway per edge-case scenario.
4. Assessing the quick-reference card against the participant's unit's actual data landscape -- generic cards that could apply to any unit score lower than cards with real unit data types.

### Differentiated Pathways (Task 1)
- **Exceeds all/most:** Extension -- classify a novel scenario not in the original set, designed by the skill to test the boundary the participant handled best.
- **All/most Meets:** Standard revision -- sharpen reasoning on 1-2 edge cases.
- **Multiple Approaching:** Targeted revision on the dimension(s) with widest gap. Skill provides a worked example of boundary reasoning.
- **Any Below:** Re-teaching on the governance classification framework with a step-by-step walkthrough of one edge case.

---

## Task 2: CREATE
**Weeks:** 3-4
**4D Competency:** Description (PRIMARY) + Delegation (supporting)
**Cognitive Demand:** Design, execution, plan-vs-reality analysis
**Scaffolding:** Medium
**Prerequisite:** Task 1 completed
**Skill Name:** `pilot-task-2-supported-pipeline`

### Task Description

Each participant selects a real work task from their current responsibilities and produces a complete AI-assisted workflow. The task integrates governance awareness from Task 1 by requiring the participant to classify the data involved and let that classification constrain their prompt design. Three deliverables:

1. **Workflow Design Document** -- Using the CTCC template (Context, Task, Content, Constraints), the participant designs a prompt for their chosen work task. The design document must include: governance classification of the data involved, modality selection (Automation/Augmentation/Agency) with rationale, and the complete CTCC prompt.
2. **Execution Record** -- Run the prompt, capture the raw output, document every edit made (tagged as Accuracy Fix, Tone Adjustment, Strategic Addition, or Removal), and produce the final version.
3. **Plan-vs-Reality Comparison** -- A focused 3-question analysis: (1) Did the governance classification hold up? (2) The Diagnosis -- what specific design element caused the biggest divergence and why? (3) The Redesign -- what specific change would you make?

### Deliverables
1. Workflow Design Document (governance classification + modality rationale + CTCC prompt)
2. Execution Record (raw output + annotated edit layer + final version)
3. Plan-vs-Reality Comparison

### Assessment Dimensions (4)

#### Design Completeness

| Level | Definition |
|-------|------------|
| Exceeds | All elements present, governance classification visibly constrains the prompt, modality rationale demonstrates understanding of all three options and why this one fits |
| Meets | All CTCC elements present, governance classification correct, modality selected with basic rationale |
| Approaching | Missing one CTCC element or governance-prompt mismatch (classification doesn't constrain prompt) |
| Below | Multiple missing elements or fundamental misalignment between governance and prompt |

**Bright line:** Are all four CTCC elements present AND does the governance classification actually shape the prompt constraints? If yes, Meets. If CTCC is complete but governance floats disconnected from the prompt, Approaching.

#### Execution Quality

| Level | Definition |
|-------|------------|
| Exceeds | Context-specific prompt produces targeted output; edit documentation shows pattern awareness |
| Meets | Prompt produces useful output addressing the actual work need; edits documented |
| Approaching | Generic prompt produces generic output that could apply to any organization |
| Below | Prompt fails to produce usable output or no execution record |

**Bright line:** Could this output only have been produced for this participant's specific work context? If yes, Meets. If it reads like a template, Approaching.

#### Edit Layer Rigor

| Level | Definition |
|-------|------------|
| Exceeds | All edits tagged correctly, rationales reference specific audience/context/risk, edit pattern analysis reveals insight about prompt design |
| Meets | Most edits tagged correctly, rationales are specific to the work context |
| Approaching | Tags present but rationales generic ("fixed tone," "made it better") |
| Below | Fewer than half of edits documented or tags mostly wrong |

**Bright line:** Do the edit rationales reference the specific audience, context, or risk? If yes, Meets. If rationales could apply to any edit on any document, Approaching.

#### Plan-vs-Reality Insight

| Level | Definition |
|-------|------------|
| Exceeds | Diagnoses specific design elements that caused divergence, names the revision, and explains the causal mechanism |
| Meets | Identifies that reality differed from prediction and names at least one specific design choice that contributed |
| Approaching | Notes that output differed but attributes divergence vaguely ("it wasn't what I expected") |
| Below | No comparison or comparison shows no analytical engagement |

**Bright line:** Does the participant name a specific CTCC element or design choice that caused the divergence? If yes, Meets. If they note divergence without diagnosing the cause, Approaching.

### Feedback Logic

The skill evaluates by:
1. Parsing the design document for all four CTCC elements and verifying the governance classification against Task 1 framework.
2. Checking whether the governance tier actually constrains the prompt (e.g., Tier 2 data should produce constraints about audience restriction or de-identification).
3. Comparing raw output vs. final version to validate the edit layer documentation.
4. Assessing whether the plan-vs-reality analysis demonstrates causal reasoning, not just observation.

### Differentiated Pathways (Task 2)
- **Exceeds all/most:** Extension -- redesign the workflow for a different modality and explain what changes.
- **All/most Meets:** Standard revision on the weakest dimension.
- **Multiple Approaching:** Targeted revision on design completeness or plan-vs-reality (whichever is weaker), with a worked example.
- **Any Below:** Re-teaching on CTCC framework with a step-by-step design walkthrough.

---

## Task 3: CRITIQUE
**Weeks:** 5-6
**4D Competency:** Discernment (PRIMARY)
**Cognitive Demand:** Evaluation, diagnosis, corrective action
**Scaffolding:** Low
**Prerequisite:** Tasks 1-2 completed
**Skill Name:** `pilot-task-3-independent-pipeline`

### Task Description

Three-part deliverable that builds evaluation skills from external audit to self-audit to corrective transfer:

**Part A: Planted Error Audit.** Every participant receives the same AI-generated funder update email containing 5 planted errors of varying severity:

1. **Factual error:** Wrong dollar figure ($2.1M stated; correct is $1.8M)
2. **Framing error:** Persistence rate cited without program change context that makes the number misleading
3. **Scope error:** "All DC CAP scholars" claim that only applies to first-year scholars
4. **Governance violation:** Includes small-cell data point violating Tier 2 protocol (e.g., "5 scholars from Trinity in MSI program")
5. **Tone error:** Language too casual for funder audience

For each error, participants document: (a) what the error is, (b) the error type, (c) severity classification, and (d) the correction.

**Severity Classification Framework:**
| Severity | Definition | Examples |
|----------|------------|----------|
| Critical | Could cause financial, legal, or reputational harm if uncaught | Factual errors in financial reporting, governance violations |
| Significant | Would undermine credibility or mislead the reader | Framing errors, scope errors |
| Minor | Would look unprofessional but not cause substantive harm | Tone mismatches, formatting issues |

**Part B: Self-Audit of Task 2.** Take the participant's own Task 2 execution record and run it through the same audit framework. Document every issue found with the same structure.

**Part C: Prompt Improvement Memo.** Based on findings from Parts A and B, write a 200-300 word memo identifying 2 specific prompt design improvements the participant would make to reduce errors in future AI-assisted work.

### Deliverables
1. Planted Error Audit (5 errors with identification, typing, severity, correction)
2. Self-Audit of Task 2 work
3. Prompt Improvement Memo (200-300 word written memo with 2 improvements)

### Assessment Dimensions (4)

#### Error Detection Accuracy

| Level | Definition |
|-------|------------|
| Exceeds | 5/5 caught with accurate identification and correct error type |
| Meets | 4/5 caught with accurate identification |
| Approaching | 3/5 caught or caught but misidentified |
| Below | 2 or fewer caught |

**Bright line:** 4/5 with correct identification = Meets. 4/5 with misidentification of error type = Approaching.

#### Severity Calibration

| Level | Definition |
|-------|------------|
| Exceeds | All severity classifications correct with harm pathway explanations that demonstrate understanding of stakeholder impact |
| Meets | Most severity classifications appropriate with basic harm explanations |
| Approaching | Severity classifications present but several are miscalibrated (e.g., governance violation rated Minor) |
| Below | No severity classification or most are wrong |

**Bright line:** Is the governance violation (Error 4) rated Critical? If not, this dimension cannot score above Approaching regardless of other classifications.

#### Self-Audit Depth

| Level | Definition |
|-------|------------|
| Exceeds | Identifies 2+ substantive issues in own Task 2 work, diagnoses the cognitive or design factor for each blind spot, and connects to broader audit patterns |
| Meets | Identifies at least 1 substantive issue with correction and names the blind spot cause |
| Approaching | Notes minor formatting issues but misses substantive problems, or claims no issues exist |
| Below | Claims own work is error-free or identifies only trivial formatting items |

**Bright line:** Does the participant identify at least one issue that would affect the accuracy, completeness, or appropriateness of their Task 2 output? If yes with a named cause, Meets. If they only note formatting or style issues, Approaching.

#### Corrective Transfer

| Level | Definition |
|-------|------------|
| Exceeds | Both prompt improvements cite a specific finding, explain the causal mechanism, and could be implemented immediately |
| Meets | Both improvements cite specific findings with causal reasoning |
| Approaching | Improvements listed but not connected to specific findings, or causal reasoning is vague |
| Below | No improvements or improvements are generic ("write better prompts") |

**Bright line:** Do the improvements trace back to specific errors found in Parts A or B? If both do with causal reasoning, Meets. If they are generic advice not grounded in specific findings, Approaching.

### Feedback Logic

Part A is deterministic: the skill has the answer key for all 5 errors, their correct types, and their correct severity classifications. Scoring is objective.

Part B is assessed structurally: the skill checks whether the self-audit applies the same rigor to the participant's own work that they applied to Part A. A participant who catches 5/5 planted errors but then claims their own Task 2 work has no issues receives a flag.

Part C is assessed on traceability: each improvement must trace back to a specific finding from Parts A or B.

### Differentiated Pathways (Task 3)
- **Exceeds all/most:** Extension -- design an error audit checklist for their unit's most common AI-generated documents.
- **All/most Meets:** Standard revision on 1-2 dimensions.
- **Multiple Approaching:** Targeted revision on severity calibration or corrective transfer, with worked examples.
- **Any Below:** Re-teaching on error types and severity framework with a step-by-step audit of a sample document.

---

## Task 4: STRATEGIZE
**Weeks:** 6-7
**4D Competency:** Delegation (PRIMARY)
**Cognitive Demand:** Strategic analysis, organizational planning, triage under constraints
**Scaffolding:** None
**Prerequisite:** Tasks 1-3 completed
**Skill Name:** `pilot-task-4-strategize`

### Task Description

This task asks participants to think strategically about AI deployment across their unit. No scaffolding -- the participant drives the analysis. Three deliverables:

**Part A: Unit Deployment Map.** Map 6 recurring tasks from the participant's unit onto the 2x2 Delegation Matrix.

**The 2x2 Delegation Matrix:**

|  | AI-Ready (YES) | Not AI-Ready (NO) |
|--|-----------------|---------------------|
| **HIGH Frequency** (weekly+) | **Deploy Now** -- Automate or augment immediately | **Explore** -- High value but needs design work first |
| **LOW Frequency** (monthly or less) | **Leave It** -- AI-ready but not worth the setup cost | **Human Core** -- Keep human, low frequency + not AI-ready |

**AI-Readiness Test (3 questions -- all must be YES for AI-Ready):**
1. **Repeatable Structure?** Can you do it the same way every time?
2. **Describable Inputs?** Can you tell Claude exactly what info to use?
3. **Recoverable Errors?** If Claude makes a mistake, can you catch it before harm?

For each of the 6 tasks: task description (specific enough to include deliverable + audience + frequency), quadrant placement, and placement rationale addressing both axes.

**Part B: Strategic AI Triage.** Select the top 2 highest-ROI tasks from "Deploy Now." For each: time savings math, governance tier with handling rules, implementation sequence, and risk assessment.

**Part C: Q3 Rollout Plan (Half-Page).** A 30/60/90-day implementation plan for deploying the top 2 tasks, structured as three sections: Who & How (audience + training), What & When (deployment sequence + timeline), Governance & Success (checkpoints + metrics).

### Deliverables
1. Unit Deployment Map (6 tasks on 2x2 matrix with rationales)
2. Strategic AI Triage (top 2 with ROI analysis, governance, sequencing, risk)
3. Q3 Rollout Plan (half-page with 30/60/90-day milestones)

### Assessment Dimensions (4)

#### Task Mapping Quality

| Level | Definition |
|-------|------------|
| Exceeds | All 6 tasks specific (deliverable + audience + frequency), rationales address both axes with evidence, quadrant placements internally consistent, includes at least one surprising insight |
| Meets | 5+ tasks specific enough, rationales address both axes for most tasks, placements consistent |
| Approaching | Tasks are categories not tasks ("handle emails"), or rationales address one axis only |
| Below | Most tasks too vague, or placements appear random |

**Bright line:** Do at least 5 tasks name a specific deliverable with an audience? If yes with dual-axis rationales, Meets. If tasks are activity categories rather than specific deliverables, Approaching.

#### ROI Reasoning

| Level | Definition |
|-------|------------|
| Exceeds | Top 2 genuinely highest-ROI, time savings math is specific and verifiable, governance tier correct with handling specified, implementation sequence shows dependency awareness, risk assessment names specific failure modes |
| Meets | Top 2 reasonable, math present if rough, governance correct, basic implementation sequence |
| Approaching | Top 2 listed but ROI reasoning vague, or includes a clearly wrong choice (low-frequency task in "Deploy Now") |
| Below | No ROI analysis or top 2 poorly chosen |

**Bright line:** Does the participant provide time savings estimates (even rough ones) for both tasks? If yes with correct governance, Meets. If ROI is asserted without math, Approaching.

#### Implementation Feasibility

| Level | Definition |
|-------|------------|
| Exceeds | Q3 plan shows realistic constraint awareness (training capacity, governance review timeline, data preparation needs), names specific people or roles, 30/60/90 milestones are concrete |
| Meets | Plan accounts for major constraints, timeline is realistic, success metrics defined |
| Approaching | Plan lists activities without sequencing or constraint acknowledgment |
| Below | No plan or plan is a wishlist without implementation logic |

**Bright line:** Does the plan include sequenced milestones at 30/60/90 days with at least one success metric? If yes, Meets. If it lists what to do without when or how to measure, Approaching.

#### Cross-Unit Awareness

| Level | Definition |
|-------|------------|
| Exceeds | Identifies 2+ cross-unit dependencies or opportunities with specific examples and proposes coordination mechanisms |
| Meets | Identifies at least one cross-unit dependency or opportunity |
| Approaching | Strategy is entirely unit-siloed but acknowledges that other units exist |
| Below | No awareness of cross-unit context |

**Bright line:** Does the participant name a specific cross-unit dependency or collaboration opportunity? If yes, Meets. If they mention "other units" without specifics, Approaching.

### Feedback Logic

The skill evaluates by:
1. Checking task specificity: does each task name a deliverable, an audience, and a frequency indicator?
2. Evaluating quadrant logic: does the rationale reference observable evidence for frequency (weekly, monthly, per-cycle) and a defensible AI-readiness assessment using the 3-question test?
3. Cross-referencing the top 2 against quadrant placements: are they actually from the Deploy Now quadrant?
4. Verifying governance tiers against the data classification framework from Task 1.
5. Assessing the Q3 plan for realistic sequencing, constraint awareness, and measurable success criteria.

This task references all prior tasks: Task 1 governance fluency constrains the governance tiers, Task 2 execution experience informs ROI estimates, and Task 3 audit skills inform risk assessment.

### Differentiated Pathways (Task 4)
- **Exceeds all/most:** Extension -- draft the cross-unit coordination memo for one identified dependency.
- **All/most Meets:** Standard revision on 1-2 dimensions.
- **Multiple Approaching:** Targeted revision on mapping quality or implementation feasibility, with a worked example.
- **Any Below:** Re-teaching on the 2x2 framework with a step-by-step mapping of 3 sample tasks.

---

## Capstone: TEACH + SYNTHESIZE
**Weeks:** 7-8
**4D Competency:** All four (Diligence, Description, Discernment, Delegation)
**Cognitive Demand:** Synthesis, calibration, teaching design
**Prerequisite:** Tasks 1-4 completed
**Showcase:** June 5-10, 2026
**Skill Name:** `pilot-task-capstone`

### Task Description

The capstone asks participants to synthesize their entire pilot experience into a portfolio that demonstrates competency, teaches others, and proposes next steps. Four sections:

1. **My Pilot Journey** -- One paragraph (~150 words) introducing the participant, their unit, their biggest win, and how their thinking about AI shifted.
2. **Best Use Case** -- A real work task transformed by AI during the pilot, with Before/After documentation and quantified impact (time saved, quality gained, risk reduced).
3. **2D Self-Assessment with Evidence Chain** -- Deep self-assessment on Diligence and Delegation (the two competencies that bookend the pilot journey), using level language with specific evidence from Tasks 1-4. Description and Discernment are visible in task portfolios and referenced optionally.
4. **Teaching Module OR Innovation Proposals (participant choice)** -- Either a documented workflow the participant will teach other DC CAP staff in Q3 (with target audience, step-by-step instructions, governance pathway, and "common mistakes"), OR 1-2 innovation proposals identifying what didn't work during the pilot and proposing specific solutions.

### Deliverables
1. My Pilot Journey (~150 words)
2. Best Use Case (Before/After + quantified impact)
3. 2D Self-Assessment with Evidence Chain (Diligence + Delegation)
4. Teaching Module OR Innovation Proposals (participant choice)

### Self-Assessment Calibration Mechanism

The skill cross-references self-ratings against actual Task 1-4 performance for the two assessed competencies:
- **Diligence** is calibrated against Task 1 Classification Accuracy and Boundary Reasoning levels.
- **Delegation** is calibrated against Task 4 Task Mapping Quality and ROI Reasoning levels.

If a participant rates themselves "Proficient" (Meets or above) on a competency but was Approaching on the corresponding task dimensions, the assessment flags the gap and asks for reconciliation.

### Assessment Dimensions (4)

#### Use Case Impact

| Level | Definition |
|-------|------------|
| Exceeds | Before/After names the exact task, quantifies the old process (hours, steps, error rate), quantifies the improvement with evidence from multiple instances, and explains what made this task particularly suited to AI |
| Meets | Before/After describes a real task with specific quantification of at least one metric |
| Approaching | Before/After is generic or only one side is specific |
| Below | No real use case or purely hypothetical |

#### Self-Assessment Calibration

| Level | Definition |
|-------|------------|
| Exceeds | Each rating cites specific task performance evidence, aligns with the trajectory shown in Task 1-4 assessments, and the participant accurately identifies their own strongest and weakest competency |
| Meets | Most ratings cite evidence and are broadly consistent with assessed performance |
| Approaching | Ratings provided but evidence is vague or disconnected from actual task performance |
| Below | Ratings without evidence or wildly miscalibrated (e.g., rates Exceeds on a competency where assessed performance was Below) |

#### Teaching Module Completeness

| Level | Definition |
|-------|------------|
| Exceeds | Module names the workflow, provides step-by-step instructions a non-pilot colleague could follow, identifies the audience, assigns the modality, includes a governance check, and has a "common mistakes" section drawn from the participant's own experience |
| Meets | Module covers most elements with enough detail that a colleague could follow the steps |
| Approaching | Module is a general description rather than a teachable workflow |
| Below | No module or module is too vague to teach from |

#### Teaching Module OR Proposal Quality

| Level | Definition |
|-------|------------|
| Exceeds | Teaching module is immediately usable by a non-pilot colleague with no clarification needed, OR proposals name specific problems experienced during the pilot, diagnose root causes, and propose solutions with implementation detail |
| Meets | Teaching module covers most elements with enough detail for a colleague to follow, OR proposals identify real problems with reasonable solutions |
| Approaching | Teaching module is a general description rather than a teachable workflow, OR proposals are vague ("we need more training") |
| Below | No module/proposals or content doesn't connect to pilot experience |

#### Growth Narrative Coherence

| Level | Definition |
|-------|------------|
| Exceeds | Portfolio tells a coherent story from Task 1 through Capstone, with specific evidence of how each task built on prior learning, and the participant articulates what they would do differently if starting over |
| Meets | Portfolio connects at least 2 tasks in a growth narrative with specific examples |
| Approaching | Portfolio treats each task as isolated rather than cumulative |
| Below | No growth narrative or narrative contradicts assessed performance |

### Feedback Logic

The capstone skill has a unique calibration function: it cross-references the participant's 2D self-assessment (Diligence + Delegation) against their actual level assignments from Tasks 1 and 4. Gaps are flagged for reconciliation.

For the teaching module (if chosen), the skill checks structural completeness: "Could someone execute this workflow from the document alone?" For innovation proposals (if chosen), the skill checks whether proposals are grounded in specific pilot evidence.

For the growth narrative, the skill checks whether the participant references specific task evidence (not just "I improved") and whether the narrative is consistent with assessed performance.

### Differentiated Pathways (Capstone)
- **Exceeds all/most:** Showcase-ready. Invited to present at the June showcase.
- **All/most Meets:** Standard revision to strengthen 1-2 dimensions before showcase.
- **Multiple Approaching:** Targeted revision on the weakest dimensions with specific guidance.
- **Any Below:** Re-teaching and revision cycle before packaging.

---

## Competency Progression Map

| Week | Task | Primary Competency | Cognitive Demand | Builds On |
|------|------|--------------------|------------------|-----------|
| 2-3 | CLASSIFY | Diligence | Categorization + boundary reasoning | Foundation |
| 3-4 | CREATE | Description + Delegation | Design + execution + metacognition | Task 1 governance fluency |
| 5-6 | CRITIQUE | Discernment | Evaluation + diagnosis + correction | Task 2 execution provides audit material |
| 6-7 | STRATEGIZE | Delegation (strategic) | Strategic analysis + planning | Tasks 1-3 provide evidence base |
| 7-8 | Capstone | All four | Synthesis + teaching + demonstration | Tasks 1-4 provide evidence for self-assessment |

Each task requires competencies built in prior weeks. The sequence is deliberate: you cannot create effectively (Task 2) without governance fluency (Task 1). You cannot critique outputs (Task 3) without having produced outputs to audit (Task 2). You cannot strategize about deployment (Task 4) without governance awareness, execution experience, and quality evaluation skills. The capstone synthesizes everything.

---

## Time Estimates

| Task | Estimated Initial Submission | Estimated Revision | Total |
|------|-------|---------|-------|
| 1: CLASSIFY | 90-120 min | 30-45 min | ~2-2.5 hrs |
| 2: CREATE | 60-90 min | 20-30 min | ~1.5-2 hrs |
| 3: CRITIQUE | 60-90 min | 20-30 min | ~1.5-2 hrs |
| 4: STRATEGIZE | 90-120 min | 30-45 min | ~2-2.5 hrs |
| Capstone: TEACH + SYNTHESIZE | 2-2.5 hrs | 30-45 min | ~2.5-3 hrs |

**Note:** These are working estimates. Time includes thinking, writing, and running prompts through Claude -- not just typing. Revision time assumes targeted revision (1-2 dimensions), not full rewrite. Differentiated pathways (extension challenges, re-teaching) may add 15-30 minutes. Each task runs across a 2-week window, so participants can spread the work across multiple sessions.

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

### Portfolio Structure

```
+--------------------------------------------------+
|  DC CAP SCHOLARS                                  |
|  AI Leadership Pilot -- Task Portfolio            |
|                                                   |
|  [Task Name]                                      |
|  [Participant Name] . [Unit] . [Date]             |
+--------------------------------------------------+
|  SECTION 1: Task Overview                         |
|  - Competency targeted                            |
|  - Success criteria                               |
|                                                   |
|  SECTION 2: Initial Submission                    |
|  - The participant's first draft                  |
|                                                   |
|  SECTION 3: Assessment                            |
|  - Levels by dimension (with rubric level)        |
|  - Specific feedback per dimension                |
|                                                   |
|  SECTION 4: Revised Submission                    |
|  - The participant's improved work                |
|                                                   |
|  SECTION 5: Growth Trajectory                     |
|  - Level comparison (initial -> revised)          |
|  - What improved and how                          |
|  - Overall readiness assessment (qualitative)     |
|                                                   |
|  SECTION 6: Participant Reflection                |
|  - Data-grounded reflection prompt + response     |
|                                                   |
|  SECTION 7: Facilitator Notes                     |
|  - Key patterns for cohort discussion             |
|  - Suggested discussion question                  |
|                                                   |
|  DC CAP . dccapscholars.org                       |
+--------------------------------------------------+
```

---

## Implementation Notes

### Skill Deployment Sequence

Skills deploy one week before the task is due. This gives participants time to read the introduction and understand success criteria before starting.

| Skill | Deploy Date | Task Due |
|-------|-------------|----------|
| Task 1: CLASSIFY | Week 1 | Weeks 2-3 |
| Task 2: CREATE | Week 2 | Weeks 3-4 |
| Task 3: CRITIQUE | Week 4 | Weeks 5-6 |
| Task 4: STRATEGIZE | Week 5 | Weeks 6-7 |
| Capstone | Week 6 | Weeks 7-8 |

### Peer Exchange Protocol

After each task's portfolio is packaged:
1. Participant saves to the shared pilot folder.
2. All cohort members can view all portfolios.
3. The next session opens with 5 minutes of "one thing I learned from someone else's portfolio."

### Data Collection

Every assessment level is structured data that feeds into:
- The R analytics pipeline (`pilot_analytics.R`)
- The weekly analytics dashboard (`pilot_analytics_dashboard.html`)
- The KPMG grant reporting dataset
- Individual growth trajectories for the capstone 4D self-assessment calibration

---

## Progress Tracking

### Dimension-Level Profiles

Each task produces a dimension-level profile (the set of levels across all dimensions) rather than a composite score. This enables:

- **Individual tracking:** Level profiles across 5 tasks (4 tasks + capstone) show whether a participant is progressing from Approaching to Meets to Exceeds.
- **Cohort patterns:** "7 of 10 participants reached Meets on Delegation by Task 4" is more meaningful than an average composite.
- **KPMG reporting:** Level distribution data by competency, derived from task performance, provides structured evidence of pilot impact.

Level distributions are tracked and reported as:
- "X participants reached Meets or above on [dimension]"
- "Y participants improved from Approaching to Meets between initial and revised submission"
- "[Dimension] distribution: Z at Exceeds, A at Meets, B at Approaching, C at Below"

### Cross-Task Growth Tracking

Growth is tracked across tasks at the competency level:

| Competency | Primary Task | Supporting Evidence From |
|------------|-------------|--------------------------|
| Diligence | Task 1 (CLASSIFY) | Task 3 self-audit rigor, Task 4 governance integration |
| Description | Task 2 (CREATE) | Task 3 corrective transfer, Capstone teaching module |
| Discernment | Task 3 (CRITIQUE) | Task 2 edit layer rigor, Task 4 risk assessment |
| Delegation | Task 4 (STRATEGIZE) | Task 2 modality selection, Capstone innovation proposals |

Each competency has a primary assessment point and supporting evidence from other tasks. The capstone self-assessment is calibrated against this full evidence base.

### KPMG Reporting Format

For grant reporting, progress data is aggregated as:
- Competency-level attainment rates (% of cohort at Meets or above on each competency after primary task)
- Growth rates (% of cohort that improved at least one level between initial and revised submissions)
- Cross-task progression (% of cohort showing sustained or improved performance from task to task)
- Capstone self-assessment calibration accuracy (% of self-ratings within one level of assessed performance)

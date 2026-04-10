# Audit: DC CAP Pilot Task Designs v3

**Auditor:** Claude Agent  
**Date:** April 9, 2026  
**Design Document:** pilot_task_designs_v3.md  
**Scope:** 4-criterion audit against Protocol Fit, Participant Value, Cross-Unit Applicability, and Anthropic Alignment

---

## CRITERION 1: PROTOCOL FIT

**Rating:** STRONG

**Key Findings:**

1. **5-stage learning loop is cleanly implemented across all tasks.** Each task follows Introduce (skill explanation) → Draft (participant work) → Assess (evaluation against dimensions) → Revise (feedback loop) → Package (deliverable). Task 1 explicitly includes "answer key available" for deterministic feedback; Task 2 and 3 use checkpoint validation and independent assessment respectively. The progression is clear and the loop structure is consistent.

2. **Qualitative assessment framework applies without distortion.** The design explicitly rejects numerical scores: "the same qualitative assessment levels (Exceeds / Meets / Approaching / Below)." Each task defines 4 assessment dimensions with measurable, distinct anchors. Task 1's "Governance Accuracy" is distinct from "Prompt + Delegation Quality." Task 2 adds "Pipeline Coherence" as a measurable dimension (whether governance classification visibly shapes the prompt). Task 3 and Capstone further differentiate. No overlap; no theoretical vagueness.

3. **Assessment dimensions are measurable and task-specific.** Task 1 assessment for "Human Judgment Depth" states: "The 'what I'd check before sending' analysis names specific risks for each sub-task." Task 3 assessment for "Strategic Mapping Quality" requires "Tasks are specific (deliverable + audience + frequency). Quadrant placements are internally consistent with rationales." These are observable, evaluable criteria—not soft judgments.

**Fixes Needed:** None. Protocol fit is solid.

---

## CRITERION 2: PARTICIPANT VALUE

**Rating:** ADEQUATE

**Key Findings:**

1. **Scaffolding reduction is appropriately paced AND defensible.** Task 1 walks through each stage with an answer key; Task 2 removes the answer key but keeps checkpoint structure; Task 3 removes checkpoints entirely. The progression from "show me" → "show me with guardrails" → "show me independently" mirrors adult learning principles. The time estimates (90-120 min initial + 30-45 min revision per task, ~2-2.5 hours for Task 3) are reasonable for nonprofit leaders.

2. **Real-work application solves transfer problem—BUT escalates quickly.** Task 1 uses a controlled scenario (partner email + data summary) that every unit recognizes. Task 2 immediately shifts to "participant selects real work." For a Director of Development unfamiliar with task design principles, this jump could feel abrupt. The skill guidance helps ("Choose a task you've done at least twice before"), but there is no intermediate scaffolding—no worked example of how to apply the Task 1 framework to a real scenario before Task 2 expects it independently.

3. **Participants will *feel* growth, but evidence of learning may be opaque to them.** The design measures competency growth through assessment dimensions, but doesn't explicitly connect that back to individual performance. A participant sees "I moved from Approaching to Meets on Governance Accuracy," but may not viscerally grasp *why* or what changed. The capstone's "4D Self-Assessment" (Section 3) requests self-ratings with "Specific evidence from tasks (how performance changed from Task 1 → Task 3)," but the design doesn't pre-surface that evidence in a clear feedback loop during Tasks 1-2. Capstone self-assessment could feel rote rather than revelatory.

**Fixes Needed:**

- Add a brief worked example in Task 2 INTRODUCE: show one complete Task 1 pipeline execution (a different scenario than the classroom example) applied to a real work task. This bridges the gap.
- Revise Task 2 feedback structure: explicitly flag performance changes from Task 1 to Task 2 (e.g., "Your governance classifications are now grounded in data governance policy, not just tiers—that's a level-up"). Make growth visible.

---

## CRITERION 3: CROSS-UNIT APPLICABILITY

**Rating:** ADEQUATE

**Key Findings:**

1. **Task 1's controlled scenario is genuinely universal—but leans toward Program Operations.** The scenario (partner outreach email + data summary for board slides) is common across units. However, the *execution* assumes familiarity with partner deadlines, Salesforce data structure, and board reporting norms. A Development officer new to partner management or a Data analyst without board experience may find the scenario context-dependent, not universal. The scenario works, but it's not "equally relevant" to all roles—it's *applicable* to all roles, but depth varies.

2. **Task 2 selection guidance acknowledges unit variation, but examples cluster around Data, Strategy, and Fundraising.** The guidance lists: "Student Success: drafting a student DCTAG reminder... Program Strategy: creating a cycle timeline brief... Data & Technology: generating a scholar demographic breakdown... Development: drafting a funder update... Operations: creating a budget summary." Innovation Hub is missing entirely. Student Success examples are thin (DCTAG reminder, case summary). Operations gets one example (budget summary). The examples suggest the designer anticipated some units more than others.

3. **Task 3's "8 most recurring tasks" mapping is unit-agnostic, but execution burden may not be equal.** A Data analyst will easily classify their 8 tasks (queries, dashboards, reports). A Student Success manager's 8 tasks might blur together (different counseling interactions that feel similar but aren't quite templatable). The strategic layer—the 2x2 Delegation Matrix (Repeatable / Describable / Recoverable)—is sound in theory, but some units may struggle to apply "recoverable errors" to relationship-intensive work (advising, outreach).

**Fixes Needed:**

- Expand Task 2 examples: add 1-2 examples per unit (Innovation Hub gets examples; Student Success gets 3-4 realistic examples; Operations gets visibility alongside Development). Ensures no unit feels overlooked.
- In Task 3, provide unit-specific guidance for "Repeatable" and "Recoverable" classifications for relationship-intensive work (Student Success, Development/Fundraising). Acknowledge that some of their tasks are less AI-ready, validate that conclusion, and redirect them toward actual AI opportunities in their unit.

---

## CRITERION 4: ANTHROPIC ALIGNMENT

**Rating:** STRONG

**Key Findings:**

1. **The 4D competencies (Diligence, Description, Delegation, Discernment) are taught as Anthropic intends.** The design document's "Competency Integration Map" shows each competency in every task, progressing from guided (Task 1) → applied (Task 2) → independent (Task 3) → taught (Capstone). Diligence is governance classification; Description is CTCC prompting; Delegation is skill and modality selection; Discernment is output audit and human judgment. These are aligned with Anthropic's definitions. Task 1 explicitly states: "Governance constraints correctly shape the prompts. The modality should align with the audit depth." This shows understanding that the competencies are *interdependent*, not siloed.

2. **Integrated pipeline approach strengthens competency development.** The system explicitly rejects the old 7-task model that "isolated competencies." Instead: "every AI interaction requires governance awareness (Diligence), effective prompting (Description), tool selection (Delegation), and output evaluation (Discernment) — simultaneously." This is architecturally sound. By forcing all 4 competencies to appear in each task, the design ensures participants learn them as a system, not as isolated skills. Task 2's "Pipeline Coherence" dimension captures this: "does the participant understand how the 4D competencies integrate." This is measurable evidence that integration is working.

3. **3A modalities (Automation, Augmentation, Agency) appear naturally and correctly.** Task 1's scenario forces both: partner email is Augmentation (relationship context needed), data summary is Automation (standard query). The design explains *why* each modality maps to the task: "The email requires human judgment about relationship dynamics. Claude drafts; human refines tone and adds context." This demonstrates understanding. Task 3 requires modality assignment as part of strategic mapping. However, "Agency" does not explicitly appear in any task. The capstone's "Teaching module" and "Build Next" sections could activate Agency (teaching a colleague to deploy AI independently), but the term doesn't appear. This is a minor omission—the capability is present, but the framing could be more explicit.

4. **Progression from guided to independent is consistent with Anthropic's thinking on AI fluency building.** Task 1 = AI fluency basics (here's how the system works); Task 2 = applied fluency (you run it, we coach); Task 3 = fluency + strategy (you run it, design for your unit). This mirrors competency development frameworks. However, the design doesn't explicitly connect scaffolding reduction to "increasing autonomy" or "shifting from learning to decision-making." A brief paragraph linking Task 3's scaffolding reduction to Anthropic's autonomy-building model would strengthen alignment documentation.

**Fixes Needed:**

- Minor: Explicitly name "Agency" modality in Task 3 or Capstone context. One line: "Agency modality appears in the capstone Teaching Module: equipping colleagues to deploy AI independently in their workflows."
- Minor: Add one sentence in Task 3 introduction linking scaffolding reduction to autonomy building: "Task 3 removes scaffolding to signal a shift in your role: from learner to decision-maker about when and how AI integrates into your unit's work."

---

## CROSS-CRITERION ISSUES

1. **Feedback loop closure:** Task 1-2 feedback is assessment-dimension-based, but doesn't explicitly connect to individual growth trajectories. The capstone's self-assessment tries to close this loop, but participants must reverse-engineer their own growth story. Add explicit growth maps in Task 2 feedback ("You moved from Approaching to Meets on X; here's what changed in your thinking").

2. **Unit-specific enablement:** The design is cross-unit applicable in structure but doesn't proactively serve units with low example visibility (Innovation Hub, Student Success) or units with relationship-intensive work. Task 2 and Task 3 need unit-specific guidance to ensure equal enablement.

3. **Agency modality underspecified:** The 3A framework is mentioned in the system overview, but Agency rarely appears explicitly. Task 3 could activate it (teaching colleagues), and capstone Teaching Module could demand it (designing for independent adoption). Strengthen the framing.

---

## RECOMMENDED DESIGN CHANGES

**Ranked by Impact:**

1. **[High] Add explicit growth feedback in Task 2.** Revise Task 2 feedback structure to include a "What Shifted" section that compares Task 1 → Task 2 performance on each dimension. Helps participants see learning, not just scores.

2. **[High] Expand Task 2 examples to all units.** Add 3-4 concrete examples per unit (3-4 sentences each). Ensure Innovation Hub gets 2-3 examples. Ensures no participant sees their work as "not the kind we're training."

3. **[Medium] Add unit-specific guidance for Task 3 strategic mapping.** Provide distinct guidance for relationship-intensive units (Student Success, Development) on how to apply "Repeatable / Describable / Recoverable" to advising, outreach, and donor communications. Acknowledges that not all work is AI-ready and validates that finding.

4. **[Medium] Make Agency modality explicit.** In Task 3 modality assignment section, add Agency as a named choice (in addition to Automation / Augmentation). In Capstone Teaching Module, clarify that teaching a colleague to deploy a workflow independently is Agency deployment. Aligns with 3A framework.

5. **[Low] Link Task 3 scaffolding removal to autonomy building.** Add one sentence in Task 3 introduction: "Removing scaffolding signals your shift from learner to decision-maker about your unit's AI deployment strategy." Strengthens Anthropic alignment.

6. **[Low] Add worked example in Task 2 INTRODUCE.** Brief (1-paragraph) worked example showing Task 1 pipeline applied to a different real-work scenario (not classroom Task 1). Bridges the gap for participants worried about transfer.

---

## FINAL VERDICT

**READY TO BUILD** — with 2 high-priority revisions.

The design is architecturally sound. The 4D pipeline is cleanly implemented, assessment is measurable and non-punitive, and the progression from guided to independent mirrors adult learning principles. Protocol fit, anthropic alignment, and core competency integration are strong.

However, two gaps must be closed before skill build:

1. **Task 2 must surface explicit growth feedback.** Without it, participants may complete Task 2 without seeing how they've grown from Task 1. A "What Shifted" section in feedback closes this loop.

2. **Unit-specific examples and guidance must cover all 6 functional units equally.** Current examples cluster around Data, Strategy, and Development. Innovation Hub is missing. Student Success and Operations are underrepresented. This risks participant disengagement in underserved units. Add examples and guidance for each unit's 2-3 most common deliverable types.

Once these revisions are complete, the design is ready for skill development. The assessment framework, scenario logic, and competency mapping are sound. The KPMG evidence structure (individual growth → cohort patterns → organizational impact) is clear and actionable for reporting.

**Timeline Impact:** These revisions should take 2-3 hours of design work. Recommend completing before skill scaffold build (currently scheduled to start April 10-12).

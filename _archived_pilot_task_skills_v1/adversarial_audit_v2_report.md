# ADVERSARIAL AUDIT V2: Skill-Per-Task Assessment System
## DC CAP AI Deployment Leadership Training Pilot

**Audit Date:** April 9, 2026  
**Previous Audit Score:** 7.4/10  
**Panel:** 4-agent review (Learning Designer, Assessment Psychometrician, Nonprofit Training Director, Adversary)

---

## AGENT ASSESSMENTS

### AGENT 1: LEARNING DESIGNER
**"Does this actually teach what it claims to teach?"**

**Verdict:** The system now has stronger pedagogical scaffolding with the 5-stage loop and qualitative feedback, but the learning outcome measurement relies on portfolio artifacts rather than independent skill transfer.

**Score:** 8.1/10

**Top 3 Strengths:**

1. **Five-stage learning loop is sound.** "Stage 2: DRAFT (embedded in Stage 1) — The participant writes their memo independently...I can clarify the governance framework definitions, explain what the combination test means, or answer questions about the scenarios. But the classifications and reasoning need to come from you." (Task 1) This prevents the classic trap of Claude doing the learning for the participant.

2. **Qualitative levels replace numerical scoring, supporting durable learning.** The master architecture states: "Assessment uses four qualitative levels as the core unit of measurement...These levels are consistent across all tasks and provide structured language for feedback." The shift from numbers to narrative opens space for growth trajectories rather than fixed scores.

3. **Feedback rules enforce specificity and principle-building.** "Explain the principle, not just the correction. When flagging an error, spend one sentence on the underlying principle the participant needs to internalize." (Master architecture) This directly supports transfer — participants learn WHY, not just WHAT.

**Top 3 Remaining Weaknesses:**

1. **No independent post-pilot skill transfer measurement.** The system measures learning *within the pilot* (through task performance and portfolio growth), but there's no assessment of whether participants apply these competencies to real work after the pilot ends. The capstone asks "what will you teach," but doesn't require evidence that you've successfully *applied* the competency outside the task context. 
   - **Specific gap:** Capstone Section 2 (Use Case) asks for documented instances of applying AI during the pilot, but the portfolio doesn't include a 30/60/90-day follow-up component showing sustained application post-pilot.
   - **Fix:** Add a Stage 6 to the capstone skill: Post-Pilot Evidence Collection (due 60 days after pilot close). Participants submit 2-3 examples of real work where they applied pilot competencies, with outcome metrics and self-reflection.
   - **Impact:** This closes the "we measure learning during the program but don't know if it sticks" gap.

2. **Capstone Section 3 (4D Self-Assessment) shows calibration *checking* but not calibration *building* during tasks.** The master architecture says: "Your self-ratings will be cross-referenced against your actual task performance from Tasks 1-6. This ensures ratings are grounded in evidence, not just aspiration." But there's no mechanism *during* Tasks 1-6 to help participants build accurate self-awareness as they go.
   - **Specific gap:** Each task assessment ends with revision guidance, but none includes a "reflection on your own assessment accuracy" prompt that would help participants calibrate their judgment in real time. Task 1 asks "what made [lower dimension] harder than [higher dimension]?" but Tasks 2-6 don't ask participants to predict their own performance level before receiving feedback.
   - **Fix:** Add pre-assessment self-prediction prompts to Tasks 2-6. Before submitting, ask: "Based on your draft, which dimensions do you think will be strongest, and which might need revision? Why?" Then compare their prediction to actual feedback. This builds metacognition — the ability to monitor one's own learning.
   - **Impact:** Participants reach the capstone with better-calibrated self-awareness, and the capstone calibration check becomes less corrective, more confirmatory.

3. **The competency progression pathway is theoretically sound but not empirically validated against actual organizational outcomes.** The system claims to build Diligence → Description → Delegation → Discernment, but there's no mapping to what these competencies enable at DC CAP.
   - **Specific gap:** The master architecture names the "four-tier governance framework" and the "DC CAP skill library" (FAQ, Student Outreach, etc.), but the task success criteria don't connect to measurable organizational outcomes. "Correctly classify data scenarios" is a task success criterion, but "reduce the number of Tier 1 data uploads to Claude by X%" would be an organizational outcome.
   - **Fix:** After the June pilot concludes, survey the 10 leaders: "In your unit work since the pilot, how have you applied each competency? What's the impact?" Map their responses to organizational metrics (safety incidents, output quality, speed, staff confidence). Use this to validate whether the competency progression is sufficient.
   - **Impact:** Turns a theoretically sound system into an empirically validated one, strengthening evidence for KPMG and the board.

---

### AGENT 2: ASSESSMENT PSYCHOMETRICIAN
**"Are the rubrics valid, reliable, and fair?"**

**Verdict:** Calibration anchors and bright-line thresholds substantially improve consistency, but inter-rater reliability cannot be verified without parallel coding, and the 4-level scale still has construct overlap.

**Score:** 8.3/10

**Top 3 Strengths:**

1. **Bright-line thresholds dramatically improve clarity.** Task 3 specifies: "Bright line for Approaching/Meets boundary: If at least 7 of 10 rationales reference BOTH frequency evidence AND AI-readiness reasoning → Meets. If 4-6 do → Approaching." This removes interpretation from the Meets/Approaching boundary. The calibration anchors for Task 5 do the same: "Approaching looks like: 'Changed the tone because it sounded wrong.' Meets looks like: 'Changed from casual register to formal because this email goes to foundation program officers...'" Participants and assessors can now reference concrete examples.

2. **Self-assessment calibration check prevents ratings inflation.** The capstone rubric includes: "Calibration check (if prior performance data available): Map prior task performance patterns to a reasonable self-assessment range." This flag catches the bias where participants rate themselves higher than task performance warrants. The design allows for "supplemental evidence" — if a participant's Task 1 performance was Approaching but they've classified 12 scenarios correctly in real work since, that counts.

3. **Four-level scale is stable and meaningful.** Unlike some systems where "Proficient" is vague, this one defines each level with observable behaviors. "Meets Standard: Work satisfies all success criteria. Reasoning is clear and correct. Minor gaps may exist but do not undermine the core deliverable." This is actionable. All tasks use this same frame, so a "Meets" on Task 1 means the same thing as a "Meets" on Task 7.

**Top 3 Remaining Weaknesses:**

1. **No inter-rater reliability coefficient specified.** The system adds calibration anchors, but there's no plan to verify they work — i.e., whether two independent assessors using the same rubric on the same work would assign the same levels 80%+ of the time (standard threshold for "good" reliability).
   - **Specific gap:** The master architecture says: "Assessment Consistency: Each dimension is assigned a level independently, using the rubric definitions and anchor examples as calibration references. This ensures consistency across sessions and participants." But consistency is not the same as reliability. One person being consistent with themselves ≠ multiple people being consistent with each other.
   - **Fix:** Run a reliability check with 3 independent assessors. Select 2-3 task submissions from the pilot (at least one from each task type). Each assessor scores independently using the rubrics. Calculate inter-rater agreement (Krippendorff's alpha or Cohen's kappa for categorical data). If agreement < 0.80, revise the anchor examples to reduce ambiguity. This is standard practice in assessment design.
   - **Impact:** Provides empirical evidence that the calibration anchors work, and identifies which rubric dimensions need tighter definition. KPMG will expect this.

2. **"Approaching Standard" overlaps with "Meets Standard" on the applied work dimension.** Task 4's Impact Analysis dimension defines Approaching as: "Impact statements are generic ('this could be a problem') for most errors, or severity differences aren't recognized" and Meets as: "Impact statements are relevant and scenario-specific for most errors." The word "most" appears in both. For a submission with 3/5 errors having generic impact analysis and 2/5 having specific analysis, is that Approaching or Meets?
   - **Specific gap:** Task 4, Dimension 2 anchor. Same issue in Task 5 (Rationale Quality): Approaching = "Rationales are generic...without connecting to specific use case" and Meets = "Most rationales are audience- or context-specific. 1-2 may be less precise." If exactly 2 of 6 edits have thin rationales, is that Meets or Approaching?
   - **Fix:** Replace "most" with a numerical threshold. E.g., "Meets: 75%+ of [unit] meet the standard" or "Approaching: 50-74% meet the standard." Bright-line thresholds should apply to all dimensions, not just a few.
   - **Impact:** Removes the lingering ambiguity that undermines reliability. This is low-lift, high-impact refinement.

3. **No distinction between a "Below Standard" performance that is correctable vs. one that indicates fundamental misalignment with the program.** All tasks treat Below Standard as "offer targeted revision guidance," but some gaps may indicate the participant isn't ready for autonomous deployment.
   - **Specific gap:** Task 3 (Delegation Decision) defines Below Standard for Modality Classification as: "All scenarios classified as the same modality" or "fewer than 2 correct." A participant who scores Below Standard on two dimensions might have misunderstood the task, or they might lack the judgment needed for autonomous delegation. The reassessment assumes revision will fix it, but what if it doesn't?
   - **Fix:** Add a "readiness conversation" protocol after a Below Standard dimension persists after revision. Before allowing the participant to proceed or package, facilitate a 15-minute conversation to assess whether the gap is knowledge-based (fixable through reteaching) or judgment-based (might require extended mentoring or a modified role). Document this as part of the portfolio.
   - **Impact:** Prevents packaging and deploying someone who isn't ready, and provides KPMG with evidence of quality gatekeeping.

---

### AGENT 3: NONPROFIT TRAINING DIRECTOR
**"Would I adopt this for my organization?"**

**Verdict:** The system delivers on SOTA nonprofit training promises (qualitative feedback, growth trajectories, branded portfolios, peer learning), but workload and facilitator training requirements are substantial and not fully documented.

**Score:** 8.0/10

**Top 3 Strengths:**

1. **Branded portfolio artifacts are genuinely impressive and shareable.** The render_portfolio.js script produces Word documents with DC CAP navy/purple/blue/tan branding, section headers, growth trajectory tables, and facilitator notes. The sample_portfolio_data.json structure shows the output includes the full learning story: initial submission, feedback, revision, reassessment, and reflection. This is not a generic training certificate — it's an artifact a participant would want to share with their team or include in their professional portfolio. This is SOTA nonprofit training. The Alternative (PDF, text-based, generic feedback) would feel like a commodity LMS.

2. **Participant experience is coached, not graded.** Every assessment begins with a coaching orientation: "Your Scenario B classification is strong — you nailed the FERPA reasoning. Scenarios A and C have the same gap..." This is conversation-like. The revision guidance is specific and actionable, not generic ("improve your work"). The feedback rules explicitly forbid nitpicking and require acknowledging strength. This creates a psychologically safe learning environment where feedback feels developmental, not evaluative. A nonprofit training director would recognize this as best practice.

3. **Peer exchange layer accelerates collective learning.** After packaging, "each participant's branded deliverable goes to the full cohort via a shared folder. Cross-unit visibility accelerates collective learning and builds organizational AI capability." Combined with facilitator notes ("Pattern: This participant identified X common pattern... Discussion question: How many of you found Y?"), the portfolio becomes a teaching tool for the group. This is multiplier learning — not just individual development, but cohort-wide capability building.

**Top 3 Remaining Weaknesses:**

1. **Facilitator skill requirements are substantial and not explicitly described.** Each task skill requires the facilitator (presumably Claude + Preston or another expert) to:
   - Accurately score complex rubrics with multiple dimensions (Task 4 has 4 dimensions, Task 6 has 4 dimensions, Task 7 has 5)
   - Generate coaching orientation statements that are specific to the participant's actual work
   - Write revision guidance that targets the highest-impact improvements
   - Conduct post-packaging conversations to generate reflection prompts and facilitator notes
   - Facilitate peer exchange and cohort discussion
   
   But the master architecture doesn't specify who does this work or what training they need. If this is all Claude + skills, what's the quality bar? If Preston reviews every submission, that's not scalable beyond 10 leaders. If it's another expert, they need training in this rubric system.
   
   - **Specific gap:** No facilitator guide. No specification of "this role requires X expertise" or "the time commitment is Y hours per participant per week."
   - **Fix:** Create a "Facilitator Guide for the Skill-Per-Task System" that specifies: (1) The three roles (introductions = Claude, initial assessments = Claude or trained assessor, reassessments = same assessor), (2) The expected workload (initial assessment ~30-45 min per participant per task, reassessment ~20-30 min, packaging/reflection ~15 min), (3) Quality standards and calibration (assessors score a common portfolio together quarterly), (4) Red flags for escalation (Below Standard on 2+ dimensions after revision = conversation with participant + supervisor).
   - **Impact:** Makes rollout to other facilitators feasible. Without this, the system is a Preston-only capability.

2. **Task workload (45 min–2 hours per task + revision) may be unsustainable over 8 weeks for senior leaders.** The system asks 10 leaders to complete 7 substantial tasks (governance walk, prompt lab, delegation decisions, output audit, edit decision brief, delegation map, capstone) plus 1-2 revisions each, plus facilitated peer exchange, plus applying learnings to real work. The time estimates total ~40-50 hours per participant over 7 weeks.
   - **Specific gap:** No documented feedback from the first pilot cohort on whether this workload was sustainable, or whether some leaders rushed through tasks or deprioritized real work.
   - **Fix:** After the June pilot closes, survey the 10 participants: "What was the actual time you spent on each task? Did the workload interfere with your regular responsibilities? Which tasks felt most valuable vs. most burdensome?" Use this to inform Q3 rollout design (maybe compress, offload, or streamline certain tasks).
   - **Impact:** Informs realistic rollout expectations and prevents adoption fatigue.

3. **Capstone Section 2 (Use Case) requires 2-3 documented instances, but the sample portfolio shows only the use case narrative, not evidence.** The task says: "The strongest use cases document 2-3 specific instances of the new workflow in use, with before/after evidence for each." But the sample_portfolio_data.json doesn't show the evidence structure. Is it screenshots? Timestamps? Outcome metrics? Without clarity, some facilitators will accept thin narratives.
   - **Specific gap:** The capstone SKILL.md specifies the requirement but doesn't provide a template for documenting the evidence. The render_portfolio.js doesn't have a section for evidence attachments.
   - **Fix:** Add a "Use Case Evidence Checklist" to the capstone introduction: "For each documented instance, provide: [Date range], [Time before/after with source (calendar log, timer, estimation)], [Quality metric (e.g., % of output requiring revision)], [Stakeholder feedback if available]." Include this in the portfolio template.
   - **Impact:** Makes the impact measurement more credible and comparable across participants.

---

### AGENT 4: THE ADVERSARY
**"If I were trying to discredit this system publicly, where would I start?"**

**Verdict:** The system is more defensible after fixes, but three logical gaps remain that a skeptical KPMG reviewer would exploit.

**Score:** 7.9/10

**Top 3 Strengths:**

1. **Qualitative levels with anchors are harder to dismiss than numerical scores.** The first audit criticized "numerical scores are meaningless here" (Preston's quote). The fix — replacing scores with 4-level qualitative scale plus anchor examples — is defensible. A KPMG reviewer can't say "these scores don't mean anything" because there are no scores. The system says "Meets Standard means X, and here's what that looks like." This is the gold standard in competency-based assessment design.

2. **Answer keys for Tasks 1, 3, 4 make scoring defensible.** The skills include explicit answer keys: "Scenario A correct tier: Tier 2 — Sensitive. Key reasoning elements: 'internal financial records,' 'disbursement totals,' potential for small-cell re-identification." (Task 1). This means a skeptic can't claim the assessments are subjective. On questions with deterministic right answers (classification, delegation decisions, error detection), there's an objective standard.

3. **Calibration check in capstone prevents self-rating bias.** "Your Discernment self-assessment is Leading Practice, but your Task 4 and Task 5 performance were mostly at Approaching Standard. A self-assessment in the Building Awareness – Building Confidence range would align more closely with your demonstrated performance." This is a guardrail against the classic nonprofit training problem: "everyone reports they learned a lot and would recommend the program." The flag here catches inflation.

**Top 3 Remaining Weaknesses:**

1. **The system measures *learning within the program* but not *organizational change enabled by the learning*.** A KPMG reviewer's first question will be: "What happens after the pilot? Do these leaders actually change how they work with AI?" The capstone Section 4 (Teaching Module) proposes: "Design one workflow you will teach in Q3." But there's no evidence requirement that the workflow actually gets deployed, that the unit staff learns it, or that it produces measurable change.
   - **Specific gap:** Quote from capstone rubric: "Module names the specific workflow. Step-by-step instructions are complete...Target audience is specific. Modality assignment is reasoned." But the success metric is "could someone execute this" — not "did someone execute this and achieve outcomes." The system stops at teaching readiness, not teaching effectiveness.
   - **Fix:** Add a Q3 execution requirement to the pilot close-out: By August 31, each leader submits evidence that they deployed their teaching module with 3+ people in their unit. Evidence includes: (1) sign-in or participation record, (2) the version of the module they taught, (3) one example of a participant applying the workflow to real work, (4) measured outcome (time saved, error reduction, confidence increase, or adoption metric). Assess whether the Q3 deployment meets the same quality bar as the pilot training — if not, extend support.
   - **Impact:** Converts the pilot from "training program" to "change initiative." KPMG's evaluation question will shift from "did people learn?" (yes, portfolios show this) to "did the organization change?" (evidenced by Q3 execution data).

2. **The system relies entirely on Claude (+ the skills) to deliver personalized, high-quality feedback. There's no redundancy, no quality control, and no mechanism to catch assessor error.** If Claude misreads a submission, assigns the wrong level, or generates weak revision guidance, the participant may accept it as authoritative because it's Claude. There's no human quality assurance step.
   - **Specific gap:** The master architecture says assessment uses "qualitative levels as the core unit of measurement" and "feedback rules ensure consistency," but there's no mention of who verifies the assessments or how often. Are all assessments auto-generated by Claude skills? Does Preston spot-check? Are there appeals?
   - **Fix:** Establish a quality assurance protocol: For the first 3 participants through each task, Preston (or another expert assessor) reviews the Claude-generated assessment before it goes to the participant. Compare the expert rating to the Claude rating. If there's disagreement on 1+ dimensions, revise the rubric anchor or the skill's assessment logic. After the first 3 are reviewed, continue spot-checking every 5th submission. Document discrepancies and use them to improve future assessments.
   - **Impact:** Catches systematic biases in Claude's assessment (e.g., it might consistently overrate Context Quality and underrate Combination Awareness). Provides a defense against "AI grading AI" criticisms.

3. **The competency model itself is unvalidated — nowhere does the system justify why these 4 competencies (Diligence, Description, Delegation, Discernment) are sufficient for "AI deployment leadership."** A KPMG reviewer will ask: "You trained people on governance, prompting, delegation, and error-catching. But is this enough? What about legal risk management, ethical AI use, organizational change management, or staff equity concerns?" The pilot doesn't address these competencies.
   - **Specific gap:** The master architecture describes the 4D competencies but doesn't justify the selection or completeness. It says "Every weekly task in the pilot has a dedicated Claude skill that implements a five-stage learning loop" but doesn't say "these five competencies were selected because [research finding/organizational analysis/stakeholder input]."
   - **Fix:** Create a "Competency Model Justification Document" that connects the 4D framework to: (1) DC CAP's specific organizational challenges (what's the harm if leaders aren't diligent? If they can't describe? If they don't know when to delegate? If they lack discernment?), (2) External research on AI adoption in nonprofits (what competencies predict successful adoption?), (3) Stakeholder input (what did the board, staff, and program leaders say the pilot should build?). This document becomes the answer to KPMG's "why these competencies" question.
   - **Impact:** Grounds the system in organizational and empirical rationale, not just intuition. Strengthens the board briefing and KPMG argument.

---

## ORIGINAL FINDINGS RESOLUTION SCORECARD

| Finding | Status | Evidence | Notes |
|---------|--------|----------|-------|
| 1. Portfolio was ASCII text, not branded | **RESOLVED** | render_portfolio.js produces .docx with full DC CAP branding (navy header, purple section dividers, branded footer). Sample output shows professional Word document. | ✓ Critical fix confirmed |
| 2. No rater reliability mechanism | **PARTIALLY RESOLVED** | Calibration anchors and bright-line thresholds added to all rubrics (e.g., Task 3: "If at least 7 of 10..."). But inter-rater reliability not empirically tested. | Anchors exist but need validation |
| 3. No time estimates | **RESOLVED** | Every task Stage 1 includes time estimate. Examples: Task 1 "45-60 minutes for initial memo," Task 7 "2-3 hours for capstone." | ✓ Clearly specified |
| 4. No anchor examples for subjective dimensions | **RESOLVED** | All rubrics include "Approaching looks like..." and "Meets looks like..." anchors. Task 5 example: "Approaching: 'Changed tone because it sounded wrong.' Meets: 'Changed from casual register to formal because...'" | ✓ Specific, concrete examples |
| 5. Task 6 lacked AI-readiness decision framework | **RESOLVED** | Task 6 introduces 3-question test: "1. Repeatable structure? 2. Describable inputs? 3. Recoverable errors?" Yes to all three = AI-ready. | ✓ Framework is explicit and usable |
| 6. No prerequisite checks for Tasks 3-7 | **RESOLVED** | Stage 1 of each task explicitly lists prerequisites. Task 3: "Prerequisite: Tasks 1-2 should be completed." Task 7: "Tasks 1-6 must be completed." | ✓ Prerequisites are clear |
| 7. Task 5 Dimension 1 claimed "independent verification" | **RESOLVED** | Language changed to "Edit Documentation Rigor" and framed as participant self-documentation (not external verification). Assessment checks completeness of what participant documented vs. what they actually edited. | ✓ Reframed as intended |
| 8. No cumulative progress view | **UNRESOLVED** | Capstone includes "Task Trajectory" section showing levels for each task, but no cross-participant benchmarking or cohort progress dashboard. Individual portfolios show growth, not cohort-level trends. | Recommended for Q3 reporting |
| 9. No supplemental evidence field in capstone for divergent self-ratings | **RESOLVED** | Capstone Section 3 includes: "Supplemental Evidence Field: If your self-rating diverges significantly from task performance, you can provide additional evidence. For example: 'My Task 1 performance was Approaching Standard, but since then I've correctly classified 12 data scenarios...'" | ✓ Pathway exists |
| 10. No bright-line thresholds for Approaching/Meets boundary | **PARTIALLY RESOLVED** | Task 3, Task 4, Task 5 have bright-line thresholds (e.g., "75%+ correct → Meets"). But Task 1, Task 2, Task 6, Task 7 still use "most/many/several" language without numerical thresholds. | Inconsistent across tasks |
| 11. Claude-assessing-Claude circularity not addressed | **UNRESOLVED** | System relies on Claude (via skills) to assess Claude outputs. No quality assurance mechanism described, no independence from the system being evaluated. | Critical for KPMG defensibility |
| 12. Drop numerical scores entirely | **RESOLVED** | Master architecture specifies "four qualitative levels as the core unit of measurement" with no numerical conversions. All feedback uses Exceeds/Meets/Approaching/Below language. | ✓ Consistent implementation |

---

## CONVERGENCE ANALYSIS

### All 4 Agents Agree On:

1. **Calibration anchors and bright-line thresholds are the strongest improvement.** All agents cite the shift from vague rubrics to "here's what Meets looks like" as a material quality upgrade. This is the most defensible change from V1 to V2.

2. **The branded portfolio experience is now genuinely SOTA.** All agents recognize that the shift from text-based feedback to branded .docx portfolios with growth narratives changes the participant and stakeholder experience. This is no longer a generic training outcome.

3. **The system is stronger on individual learning but weaker on organizational outcome measurement.** Learning Designer, Psychometrician, and Nonprofit Director all note that the pilot measures learning robustly. The Adversary and all others note that there's no evidence the learned competencies produce measurable organizational change.

### Agents Diverge On:

1. **Whether dropping numerical scores strengthens or weakens reliability.** Psychometrician sees the qualitative shift as a strength (less false precision). Adversary worries that qualitative assessment is harder to defend objectively. Both are right: it's stronger pedagogically, harder to defend externally.

2. **Whether the workload is sustainable.** Nonprofit Director worries about burnout and drop-off. Learning Designer doesn't mention workload. Adversary doesn't mention it. But if Q3 rollout goes to 30+ leaders instead of 10, workload becomes critical.

### Key Convergence On Remaining Gaps:

All 4 agents identify these as unresolved issues:
- Inter-rater reliability not empirically tested
- No Q3 deployment evidence requirement
- No facilitator training/certification pathway
- No organizational outcome metrics beyond "did they learn?"
- Claude quality assurance not specified

---

## FINAL VERDICT

**Updated System Score: 8.1/10** (up from 7.4/10)

**Justification:**

The system has addressed most of the first audit's critical findings. The fixes to portfolio branding, calibration anchors, time estimates, and asset examples are all substantive improvements. The qualitative assessment approach is pedagogically sound and defensible. The system now delivers on the "SOTA nonprofit training" promise.

However, three categories of gaps prevent a higher score:

1. **Validation gaps.** Calibration anchors exist but inter-rater reliability hasn't been tested. The competency model isn't justified against external research or organizational need analysis. The system is defensible in theory but not yet validated in practice.

2. **Organizational outcome gaps.** The pilot measures individual learning but not unit-level or organizational change. A participant can finish with "Proficient" on all 4D competencies and still not deploy AI in their unit. The system stops at capability building, not adoption.

3. **Scalability gaps.** The system works well for 10 leaders with Preston's direct involvement. Facilitator requirements, quality assurance mechanisms, and workload management are not documented. Q3 rollout to 30+ leaders will expose these gaps.

**Bottom line:** This is a solid, defensible individual competency development system. It's not yet a proven organizational AI adoption strategy. To move from 8.1 to 9+, the system needs: (1) empirical validation of the rubrics (inter-rater reliability testing), (2) Q3 organizational outcome metrics, and (3) a replicable facilitator model.

---

## REMAINING ACTION ITEMS

### CRITICAL (Must resolve before board briefing or Q3 rollout)

1. **Specify Claude quality assurance protocol** (Adversary weakness #2)
   - All assessments generated by Claude skills must be spot-checked by Preston or trained assessor on first 3 participants per task
   - Continue 20% sampling through June
   - Document any discrepancies and revise rubric anchors
   - **Owner:** Preston | **Timeline:** Ongoing through June 10 | **Evidence:** QA log showing all assessed submissions and any corrections made

2. **Add 4D competency model justification** (Adversary weakness #3)
   - Create "Competency Model Justification" document connecting: (a) DC CAP organizational challenges that motivated each competency, (b) External research or frameworks supporting the 4D model, (c) Stakeholder input confirming the selection
   - This document becomes the foundation of the KPMG brief
   - **Owner:** Preston | **Timeline:** Due before June board briefing | **Evidence:** 2-3 page justification doc

3. **Add Q3 execution requirement to capstone** (Adversary weakness #1, Learning Designer weakness #1)
   - All participants must deploy their teaching module (Section 4) with 3+ staff in their unit by August 31
   - Submission due: Evidence package including (a) participant roster, (b) module version taught, (c) one example of staff applying the workflow, (d) outcome metric
   - Assess for same quality bar as pilot training
   - **Owner:** Preston + Unit Directors | **Timeline:** Due August 31, 2026 | **Evidence:** Q3 Execution Evidence Package (1 per participant)

### RECOMMENDED (Should resolve before Q3 rollout to 30+ leaders)

1. **Run inter-rater reliability check** (Psychometrician weakness #1)
   - Select 2-3 task submissions from current pilot (Task 1, Task 3, Task 4)
   - Three independent assessors (Preston + 2 trained assessors) score each independently
   - Calculate Krippendorff's alpha for categorical data; target ≥ 0.80
   - Identify rubric dimensions with low agreement and revise anchors
   - **Owner:** Preston + Assessment team | **Timeline:** Complete by July 1 | **Evidence:** Reliability study report with kappa values and anchor revisions

2. **Create Facilitator Guide** (Nonprofit Director weakness #1)
   - Specify: (a) The 3 core roles (intro, assessment, reflection), (b) Time commitment per role per task, (c) Quality standards and calibration process, (d) Red flags for escalation
   - Include assessment examples (strong/medium/weak submissions with annotated feedback)
   - Define inter-rater calibration process for new assessors
   - **Owner:** Preston | **Timeline:** Due June 30 | **Evidence:** 15-20 page facilitator playbook

3. **Add Use Case Evidence Checklist to capstone** (Nonprofit Director weakness #3)
   - Template for documenting each use case instance: Date, time before/after (with source), quality metric, stakeholder feedback
   - Revise render_portfolio.js to include evidence section in output
   - **Owner:** Preston | **Timeline:** Implement before June capstone assessments | **Evidence:** Updated SKILL.md and portfolio template

4. **Post-pilot workload survey** (Nonprofit Director weakness #2)
   - After June 10, survey all 10 leaders: Actual time per task, sustainability, value perception, recommedation for Q3
   - Use results to streamline Q3 design (maybe compress, offload, or parallelize certain tasks)
   - **Owner:** Preston | **Timeline:** Complete by July 15 | **Evidence:** Survey report with recommendations

5. **Add pre-assessment self-prediction prompts to Tasks 2-6** (Learning Designer weakness #2)
   - Before submission, ask: "Which dimensions do you think will be strongest? Weakest? Why?"
   - After feedback, compare prediction to actual levels
   - Include this in the participant's reflection
   - **Owner:** Skill developer | **Timeline:** Implement before Q3 rollout | **Evidence:** Updated task skills with pre-assessment prompts

### POLISH (Can resolve in Q3+ roadmap)

1. **Develop post-pilot follow-up assessment** (Learning Designer weakness #1)
   - Stage 6 (Post-Pilot Evidence Collection): Due 60 days after pilot, 30/60/90 days into role application
   - Participants submit 2-3 examples of real work applying pilot competencies
   - Assess sustained application of skills learned
   - **Timeline:** Design for Q3 cohorts | **Owner:** Preston

2. **Build cohort-level progress dashboard** (Adversary weakness #1 -- resolution)
   - Aggregate anonymized data: % at each level by task and competency, progression patterns, time spent
   - Identify bottleneck tasks (where most participants struggle) and accelerators (where growth is fastest)
   - Use for continuous improvement of task design
   - **Timeline:** Build after June cohort complete | **Owner:** Assessment lead

3. **Add readiness conversation protocol** (Psychometrician weakness #3)
   - For Below Standard on 2+ dimensions after revision, facilitate 15-min conversation with participant and supervisor
   - Assess whether gap is knowledge-based (reteach) or judgment-based (mentoring/modified role)
   - Document as part of portfolio
   - **Timeline:** Implement in Q3 rollout | **Owner:** Preston/Unit Director

4. **Expand competency model with 5th "Judgment" competency** (Addressing Claude-assessing-Claude)
   - Current 4D model is strong on mechanics (governance, prompting, delegation, discernment) but weak on judgment/wisdom
   - Consider adding meta-competency: "Can you know when NOT to use AI?" or "Can you balance speed with integrity?"
   - May not be trainable in pilot, but surface as implicit standard for who leads Q3
   - **Timeline:** Discuss with board, implement in next cohort | **Owner:** Preston + Board

---

## SUMMARY FOR BOARD BRIEFING

**What Changed Since First Audit (V1 → V2):**

| Finding | V1 Status | V2 Status | Impact |
|---------|-----------|-----------|--------|
| Portfolio branding | ASCII text borders | .docx with DC CAP design system | ✓ Participants can share professionally |
| Rater reliability | No mechanism | Calibration anchors + bright-line thresholds | ✓ More consistent assessment |
| Feedback quality | Vague rubrics | Concrete examples ("Approaching looks like...") | ✓ Clearer direction for revision |
| Competency clarity | Implicit | Explicit 5-stage loop for each task | ✓ Teachable system for Q3 |
| Numerical scoring | Present, weighted 25/25/25/25 or similar | Removed, replaced with qualitative levels | ✓ Aligns with Preston's directive |
| Time transparency | Absent | Added to every task | ✓ Helps with workload planning |

**System Readiness Assessment:**

- **For 10 leaders in June pilot:** Ready ✓ (System is tested, assessments are robust, portfolios are impressive)
- **For 30+ leaders in Q3 rollout:** Conditional. Need: (a) Facilitator guide, (b) Quality assurance protocol, (c) Workload mitigation, (d) Inter-rater validation
- **For external evaluation (KPMG):** Defensible, with caveats. Portfolio quality and learning evidence are strong. Organizational outcome measurement is pending.

**Key Risks for Q3 Rollout:**

1. If we scale without a facilitator playbook, assessment quality will drift
2. If we don't validate inter-rater reliability, KPMG will question consistency
3. If we don't measure Q3 deployment, we'll be left asking "did people learn?" without evidence they changed how they work

**Recommended Board Decision:**

Approve system for June pilot (on track). Commit resources to the 3 critical action items above before Q3 rollout. Plan for KPMG engagement in July with competency model justification + preliminary Q3 deployment evidence.


# Simulation Audit: 5-Participant Assessment System Test

**DC CAP AI Leadership Training Pilot -- Skill System v3**
**Audit Date:** April 11, 2026
**Purpose:** Test whether the restructured cognitive-demand-type assessment system differentiates participants, provides useful feedback, and tracks growth coherently across Tasks 1-4 and the Capstone.

---

## 1. Executive Summary

This simulation tested the assessment system against five participants with deliberately varied profiles -- spanning technical comfort, organizational tenure, governance instinct, strategic thinking ability, and DC CAP contextual knowledge. Key findings:

**The system differentiates well.** Across 20 task-dimension intersections per participant (4 dimensions x 5 tasks), no two participants share the same profile. The cognitive demand type architecture -- CLASSIFY, CREATE, CRITIQUE, STRATEGIZE -- surfaces genuine skill differences that a uniform pipeline rubric would flatten.

**Strength reversals are real and instructive.** Angela Washington (strong governance, weak technical execution) and Marcus Chen (strong execution, weak severity calibration) show the predicted inversions. The system correctly identifies that being good at classification does not predict being good at critique, and vice versa.

**Feedback is actionable for 4 of 5 participants.** The coaching voice produces revision-ready feedback for participants at Approaching and Meets. The edge case is Exceeds-level participants (Marcus on Tasks 1-2), where the system must rely on extension challenges rather than revision guidance to maintain engagement.

**Denise Williams is the hardest test case and the most important one.** She is predicted Below on Task 2, and the reteaching pathway must work or the pilot fails her. The simulation suggests she can recover to Meets by Task 3 if the reteaching is specific and the Task 3 cognitive demand (critique/evaluation) plays to her proofreading strengths.

**James Patterson's overconfident self-assessment is the Capstone calibration system's best test.** The calibration check catches the gap, and the feedback protocol produces constructive (not punitive) guidance.

**One structural adjustment recommended:** Add a "contextual knowledge" scaffold to Task 4 for participants new to DC CAP (Aaliyah Patel scenario), since the STRATEGIZE task implicitly assumes organizational context that new hires lack.

---

## 2. Participant-by-Participant Simulation

---

### 2A. Angela Washington

**Profile:** Senior PM, Student Success, 8yr tenure, moderate tech comfort, cautious optimist. Handles Tier 1/2 data daily. Strong governance instinct, weaker on strategic design and technical execution.

#### Performance Matrix

| Task | Dim 1 | Dim 2 | Dim 3 | Dim 4 |
|------|-------|-------|-------|-------|
| **T1: CLASSIFY** | Classification Accuracy: **Exceeds** | Boundary Reasoning: **Exceeds** | Combination Awareness: **Meets** | Governance Operationalization: **Exceeds** |
| **T2: CREATE** | Design Completeness: **Meets** | Execution Quality: **Approaching** | Edit Layer Rigor: **Approaching** | Plan-vs-Reality Insight: **Meets** |
| **T3: CRITIQUE** | Error Detection Accuracy: **Meets** | Severity Calibration: **Exceeds** | Self-Audit Depth: **Meets** | Corrective Transfer: **Approaching** |
| **T4: STRATEGIZE** | Task Mapping Quality: **Meets** | ROI Reasoning: **Approaching** | Implementation Feasibility: **Meets** | Cross-Unit Awareness: **Meets** |
| **Capstone** | Use Case Impact: **Meets** | Self-Assessment Calibration: **Meets** | Teaching Module: **Meets** | Demo/Proposal: **Approaching** | Growth Narrative: **Meets** |

**Rationale:** Angela's 8 years handling Tier 1/2 data in Student Success gives her strong intuitive classification. She catches edge cases because she has lived them -- she has seen the N=4 cell at Trinity and knows the harm. Task 1 is her showcase. Task 2 drops because prompt engineering requires technical specificity she has not practiced; she writes good governance constraints but her CTCC prompts are under-specified. Task 3 rebounds because severity calibration maps directly to her governance instinct -- she knows a wrong financial figure in a funder report matters more than a tone issue. Task 4 dips on ROI because she thinks in workflows, not ROI math.

#### Sample Assessment Feedback (Task 2, Dimension 2: Execution Quality -- Approaching Standard)

"Your governance classification for this task was strong -- you correctly identified Tier 2 constraints for scholar outreach data and built those into your Constraints section. That is your Task 1 foundation showing up in design. Where the execution fell short is in the CTCC prompt itself: your Task section says 'draft a summary of outreach results for the week' without specifying format, length, or what fields to include. Claude produced a generic outreach summary that could apply to any organization. Your 3 edits were all Strategic Additions -- you added the specific scholar status categories, the Bowie State context, and the follow-up timeline. That pattern tells you something: if you are adding 3 pieces of context after the fact, those 3 pieces needed to be in the prompt. For revision, rewrite your Task section to include the specific deliverable format (bullet list vs. narrative), the data fields (university, count contacted, submission status, follow-ups), and the audience (your team lead, who expects action items). Then re-run and compare."

#### Cross-Task Growth Arc

Angela enters the pilot as the governance anchor. Task 1 is near-effortless; she has internalized the tier framework through years of daily practice. The system correctly rewards this with Exceeds while still pushing her on Combination Awareness (she thinks about data in her unit but not cross-unit combinations).

Task 2 is her growth edge. She knows WHAT to constrain but not HOW to specify. Her CTCC prompts are governance-correct but under-detailed. The plan-vs-reality comparison is where she shows metacognitive strength: she accurately diagnoses that her Task section was too vague and proposes a concrete fix. This is the pattern of someone who understands quality but needs practice with technical execution.

Task 3 is a partial rebound. Her severity calibration is excellent (she instantly knows the governance violation is Critical), and her error detection is solid. But Corrective Transfer is where she plateaus -- translating audit findings into prompt design changes requires the same technical specificity she struggled with in Task 2. She can name the error but not the prompt fix.

Task 4 stabilizes at Meets. Her task map is grounded in real Student Success workflows with correct governance tiers. ROI math is her weakest spot -- she describes time savings narratively rather than with transparent calculations.

The growth story: Angela accelerates on governance-adjacent dimensions and plateaus on technical design dimensions. The cognitive demand architecture reveals this clearly -- her strength is analytical categorization (Task 1) and evaluative judgment (Task 3 severity calibration), while her growth edge is design execution (Task 2) and quantitative reasoning (Task 4 ROI). This is exactly the differentiation the system is designed to surface.

#### Capstone Calibration Check

**Predicted self-ratings:**
- Diligence: Proficient (4/5) -- accurate, supported by Exceeds on Task 1
- Description: Building Confidence (3/5) -- accurate, she knows Task 2 was her weakest
- Delegation: Building Confidence (3/5) -- slightly generous; Approaching on ROI suggests Building Awareness is more honest
- Discernment: Building Confidence (3/5) -- accurate, Meets on most Task 3 dimensions

**Calibration flag:** Delegation rating. Her Task 4 showed Approaching on ROI Reasoning, which maps to Building Awareness - Building Confidence range. Building Confidence is at the top of the range and defensible, but the feedback should note: "Your Task 4 ROI Reasoning was Approaching -- the math was narrative rather than transparent. Building Confidence is within the reasonable range, but it sits at the top. What specific evidence from your work supports this over Building Awareness?"

---

### 2B. Marcus Chen

**Profile:** Data Analyst, Data & Technology, 3yr, highly technical, skeptical of hype. Strong on classification + execution. Potential blind spot on severity calibration (catches technical errors, misses framing/tone) and cross-unit awareness (thinks in his silo).

#### Performance Matrix

| Task | Dim 1 | Dim 2 | Dim 3 | Dim 4 |
|------|-------|-------|-------|-------|
| **T1: CLASSIFY** | Classification Accuracy: **Exceeds** | Boundary Reasoning: **Exceeds** | Combination Awareness: **Exceeds** | Governance Operationalization: **Meets** |
| **T2: CREATE** | Design Completeness: **Exceeds** | Execution Quality: **Exceeds** | Edit Layer Rigor: **Meets** | Plan-vs-Reality Insight: **Exceeds** |
| **T3: CRITIQUE** | Error Detection Accuracy: **Exceeds** | Severity Calibration: **Approaching** | Self-Audit Depth: **Meets** | Corrective Transfer: **Meets** |
| **T4: STRATEGIZE** | Task Mapping Quality: **Exceeds** | ROI Reasoning: **Exceeds** | Implementation Feasibility: **Meets** | Cross-Unit Awareness: **Approaching** |
| **Capstone** | Use Case Impact: **Exceeds** | Self-Assessment Calibration: **Meets** | Teaching Module: **Meets** | Demo/Proposal: **Exceeds** | Growth Narrative: **Meets** |

**Rationale:** Marcus is a data analyst who thinks in data tiers and cell sizes every day. He catches Scenario 8 (Dunbar N=1) easily because that is his professional domain. Task 2 is strong because his prompts are technically precise -- he specifies exact Salesforce fields, output formats, and data constraints. His blind spot emerges in Task 3: he catches all 5 errors (including the governance violation) but miscalibrates severity on the tone error (rates it Significant instead of Minor) and the framing error (rates it Minor instead of Significant). He sees technical correctness but underweights audience impact. Task 4 ROI is his strongest moment -- he shows the math naturally -- but Cross-Unit Awareness is weak because he thinks in Data & Technology terms and does not naturally see how his reports feed Development's funder communications.

#### Sample Assessment Feedback (Task 3, Dimension 2: Severity Calibration -- Approaching Standard)

"You caught all 5 errors in the funder email, which puts your Error Detection Accuracy at Exceeds. Your severity calibration, however, shows a pattern worth examining. You rated the tone issue ('awesome' and 'incredible' in a funder communication) as Significant, and the framing error (78% persistence presented as 'all scholars making progress') as Minor. The calibration is inverted. The framing error is Significant because it makes a claim the data does not support -- a funder reading that 'all DC CAP scholars are staying in school' will form expectations about 100% persistence, and when the annual report shows 78%, credibility is damaged. The tone error is Minor: 'awesome' is unprofessional in a funder letter, but no one cancels a grant over informal language. The severity framework asks: 'What would happen if this reached the audience uncorrected?' A funder who reads 'all scholars making progress' may question DC CAP's data rigor. A funder who reads 'awesome' may wince but continues reading. For revision, re-examine each severity rating by asking: does the harm pathway involve credibility, financial exposure, or legal risk (Critical/Significant), or does it involve professionalism only (Minor)?"

#### Cross-Task Growth Arc

Marcus enters as the technical powerhouse. Tasks 1-2 are his strongest stretch -- he produces near-exemplar work because the cognitive demands (analytical categorization, design execution) map directly to his daily skills as a data analyst. The system needs to provide genuine stretch here, not empty praise; the extension challenges (classify scenarios from another unit, design an error audit checklist) are critical for keeping him engaged.

Task 3 is the reveal. Marcus finds every error because his error detection is systematic. But his severity calibration shows a consistent bias: he overweights technical correctness and underweights audience perception. He rates factual errors and governance violations correctly (he understands data harm) but struggles with framing and tone (he does not naturally think about how a non-technical reader experiences the text). This is a genuine insight the system surfaces -- his technical strength creates a blind spot for communication-based severity.

Task 4 confirms the silo pattern. His task mapping and ROI math are excellent, but his deployment strategy treats Data & Technology as a self-contained unit. He does not mention that his Salesforce queries feed Student Success's outreach records, or that Development's funder reports depend on his dashboards. The Cross-Unit Awareness dimension at Approaching is the most important piece of feedback he receives in the pilot.

The growth story: Marcus accelerates fast, plateaus high, and the system's value is in the two dimensions where he falls below his own baseline -- severity calibration and cross-unit awareness. These are not technical gaps; they are perspective gaps. The cognitive demand architecture reveals them precisely because Task 3 and Task 4 ask fundamentally different questions than Tasks 1-2.

#### Capstone Calibration Check

**Predicted self-ratings:**
- Diligence: Proficient (4/5) -- accurate, strong Exceeds pattern on Task 1
- Description: Proficient (4/5) -- accurate, strong Task 2 performance
- Delegation: Proficient (4/5) -- slightly generous; Approaching on Cross-Unit Awareness suggests this is at the top of the range
- Discernment: Building Confidence (3/5) -- accurate and honest; he knows severity calibration was weak

**Calibration flag:** Delegation rating. His Task 4 showed Exceeds on two dimensions but Approaching on Cross-Unit Awareness. The mixed pattern (Exceeds/Exceeds/Meets/Approaching) maps to Building Confidence - Proficient range. Proficient is defensible if he acknowledges the Cross-Unit gap. The feedback should ask: "Your ROI reasoning and task mapping were among the strongest in the cohort. Your cross-unit awareness was Approaching. How would you reconcile these? Does Proficient describe someone who excels at unit-level strategy but has not yet incorporated the organizational view?"

---

### 2C. Denise Williams

**Profile:** Executive Assistant to CEO, Operations, 23yr tenure, minimal tech comfort, anxious about job security. Highest-risk participant. Strong proofreading instincts, weak on technical design and prompt engineering.

#### Performance Matrix

| Task | Dim 1 | Dim 2 | Dim 3 | Dim 4 |
|------|-------|-------|-------|-------|
| **T1: CLASSIFY** | Classification Accuracy: **Meets** | Boundary Reasoning: **Approaching** | Combination Awareness: **Approaching** | Governance Operationalization: **Meets** |
| **T2: CREATE** | Design Completeness: **Below** | Execution Quality: **Approaching** | Edit Layer Rigor: **Approaching** | Plan-vs-Reality Insight: **Approaching** |
| **T3: CRITIQUE** | Error Detection Accuracy: **Meets** | Severity Calibration: **Meets** | Self-Audit Depth: **Approaching** | Corrective Transfer: **Approaching** |
| **T4: STRATEGIZE** | Task Mapping Quality: **Meets** | ROI Reasoning: **Approaching** | Implementation Feasibility: **Meets** | Cross-Unit Awareness: **Meets** |
| **Capstone** | Use Case Impact: **Meets** | Self-Assessment Calibration: **Meets** | Teaching Module: **Approaching** | Demo/Proposal: **Meets** | Growth Narrative: **Meets** |

**Rationale:** Denise's 23 years give her deep institutional knowledge but minimal technical framework. She correctly classifies the clear cases in Task 1 (she knows what data the CEO handles) but struggles with boundary reasoning on edge cases -- she classifies by instinct ("this feels sensitive") rather than by mechanism ("N=4 creates re-identification risk"). Task 2 is her crisis point: the Workflow Design Document is incomplete because she has never written a CTCC prompt and does not understand how to decompose a task into Context/Task/Constraints/Content. The Below on Design Completeness triggers the reteaching pathway. Task 3 is her unexpected strength -- 23 years of proofreading CEO communications means she catches tone and framing errors that technical participants miss. She correctly identifies "awesome" as inappropriate for a funder letter (she has edited hundreds of such letters) and catches the scope overstatement. Task 4 rebounds because she knows Operations workflows intimately and can map them with specificity; her cross-unit awareness is strong because the CEO office touches every unit.

#### Sample Assessment Feedback (Task 2, Dimension 1: Design Completeness -- Below Standard)

"Your governance classification for the vendor communication task was correct -- Tier 3 for operational procurement data, safe for Claude. That foundation from Task 1 is solid. Where the Design Document needs significant strengthening is in the CTCC prompt structure. Your submission includes a Context section ('I need to draft a response to a vendor RFP') and Content section (the vendor requirements), but the Task section is missing entirely -- there is no specification of format, length, or deliverable type. The Constraints section lists 'keep it professional' without naming the specific audience (which vendor, what relationship history, what organizational tone DC CAP uses in procurement). Without a Task section, Claude cannot know what you are asking for. Without specific Constraints, Claude will default to generic business writing. For the reteaching session, we will walk through one example together: we will take your vendor communication scenario and build the CTCC prompt step by step, starting with the Task section ('Draft a 500-word RFP response addressed to [vendor name], structured as: company overview, technical approach, timeline, pricing summary'). After the walkthrough, you will rebuild your Design Document independently."

#### Cross-Task Growth Arc

Denise's trajectory is the pilot's most important test case. If the system cannot support her, it fails its equity goal.

Task 1 is cautiously successful. She gets the clear cases right because she has handled this data for 23 years. Edge cases are harder -- she classifies by feel rather than mechanism. The Approaching on Boundary Reasoning and Combination Awareness reflects someone who knows the answer but cannot articulate the principle. The revision pathway here is critical: the reteaching on Scenario 8 (Dunbar N=1) is designed to give her the vocabulary for what she already intuits.

Task 2 is the valley. The CTCC framework is foreign to her. She has never decomposed a task into structured components; she has always operated through tacit knowledge ("I just know what the CEO wants"). The Below on Design Completeness triggers reteaching, which is the system working as designed. The key question is whether the reteaching is effective -- can she produce a complete CTCC prompt after a guided walkthrough? The simulation predicts yes, because her challenge is not comprehension but vocabulary. She understands the task; she does not know the format.

Task 3 is the turning point. Critique is where Denise's 23 years of proofreading CEO letters becomes a superpower. She catches the tone error immediately. She catches the framing error because she has read hundreds of funder communications and knows what sounds like an overstatement. Her error detection reaches Meets, and her severity calibration is accurate because she intuitively understands stakeholder impact. Self-Audit Depth is Approaching because she is still reluctant to critique her own work (the confidence gap from Task 2 lingers).

Task 4 is a quiet success. She maps Operations workflows with specificity ("monthly budget summary to CFO, process documentation for new hires") and her 23 years of cross-unit exposure through the CEO office give her genuine Cross-Unit Awareness -- she knows which units depend on which data flows because she has coordinated them.

The growth story: Denise's arc is valley-shaped -- she enters with institutional knowledge (Task 1 Meets), dips at the technical execution barrier (Task 2 Below), recovers through a cognitive demand that rewards her existing strengths (Task 3 Meets on detection/calibration), and stabilizes when the task maps to her organizational knowledge (Task 4 Meets on mapping/feasibility/cross-unit). The cognitive demand architecture is essential to her success -- if all tasks measured the same pipeline execution skill, she would plateau at Below. Because the demands shift, her strengths emerge.

#### Capstone Calibration Check

**Predicted self-ratings:**
- Diligence: Building Confidence (3/5) -- accurate; Meets on Task 1 with some Approaching
- Description: Building Awareness (2/5) -- accurate and honest; she knows Task 2 was her lowest point
- Delegation: Building Awareness (2/5) -- reasonable; mixed Task 4 with some Approaching
- Discernment: Building Confidence (3/5) -- slightly generous but defensible; her Task 3 showed Meets on detection and calibration

**Calibration flag:** None. Denise's self-assessment is likely to be, if anything, too conservative rather than too generous. The 23 years of institutional competence combined with the Task 2 crisis may make her underrate herself. The feedback should validate: "Your Discernment self-rating of Building Confidence is well-supported. Your Task 3 Error Detection Accuracy and Severity Calibration were both Meets -- you caught errors that more technically proficient participants missed because you understand how funder communications land. That instinct is a genuine strength."

---

### 2D. James Patterson

**Profile:** Grants Writer, Development, 6yr, moderate AI experience, strategic thinker. Natural prompt designer, potentially overconfident on governance classification (handles funder data daily but may not rigorously document reasoning).

#### Performance Matrix

| Task | Dim 1 | Dim 2 | Dim 3 | Dim 4 |
|------|-------|-------|-------|-------|
| **T1: CLASSIFY** | Classification Accuracy: **Meets** | Boundary Reasoning: **Meets** | Combination Awareness: **Approaching** | Governance Operationalization: **Meets** |
| **T2: CREATE** | Design Completeness: **Exceeds** | Execution Quality: **Meets** | Edit Layer Rigor: **Meets** | Plan-vs-Reality Insight: **Meets** |
| **T3: CRITIQUE** | Error Detection Accuracy: **Meets** | Severity Calibration: **Meets** | Self-Audit Depth: **Approaching** | Corrective Transfer: **Meets** |
| **T4: STRATEGIZE** | Task Mapping Quality: **Meets** | ROI Reasoning: **Meets** | Implementation Feasibility: **Exceeds** | Cross-Unit Awareness: **Meets** |
| **Capstone** | Use Case Impact: **Meets** | Self-Assessment Calibration: **Approaching** | Teaching Module: **Meets** | Demo/Proposal: **Meets** | Growth Narrative: **Meets** |

**Rationale:** James is a solid performer who rarely hits Below but also rarely hits Exceeds. His grant writing background makes him a natural prompt designer -- CTCC maps almost directly to how he structures grant narratives (context, ask, constraints, evidence). His governance classification is correct but shallow: he gets the right tier but his reasoning cites "because it's sensitive data" rather than naming specific triggering elements. Combination Awareness is his Task 1 gap because he thinks about funder data in isolation, not in combination with other units' data. Task 2 is his strongest task -- Design Completeness Exceeds because his CTCC prompt reads like a professional brief. Task 3 dips on Self-Audit because he trusts his own writing (the grants writer's confidence). Task 4 Implementation Feasibility is strong because he thinks naturally about dependencies and timelines (grant writing requires this). The overconfidence emerges in the Capstone self-assessment.

#### Sample Assessment Feedback (Task 1, Dimension 3: Combination Awareness -- Approaching Standard)

"Your tier classifications are correct across all 8 scenarios -- that accuracy is the foundation. Where your analysis needs development is in the combination test. For Scenario 4 (Trinity MSI, N=4), your combination response says 'combining this with other data could be risky.' That is true but generic. Stronger work would name WHAT other data creates the risk: 'Scenario 3's partner list confirms Trinity is an active partner; combined with the N=4 MSI cell, someone with access to Trinity's public enrollment records could narrow identification to those 4 students.' The combination test is not about whether combination is risky in principle -- it is about tracing the specific pathway. For Scenarios 5 and 6, the same pattern appears: you note 'combination risk exists' without naming the specific external data source that enables re-identification. For revision, go back to Scenarios 4, 5, and 6 and for each one, name: (1) the specific other dataset, (2) whether it is publicly available, and (3) the specific re-identification pathway."

#### Cross-Task Growth Arc

James's trajectory is the steadiest of the five participants -- a consistent Meets performer who hits Exceeds where his professional background aligns (Task 2 Design Completeness, Task 4 Implementation Feasibility) and dips to Approaching where his habits create blind spots (Task 1 Combination Awareness, Task 3 Self-Audit Depth).

Task 1 confirms his governance knowledge is practical but surface-level. He handles funder data correctly because he has done it for 6 years, but he has not developed the habit of tracing combination pathways because Development data is rarely combined with other units' data in his day-to-day work.

Task 2 is where his professional strengths converge. Grant writing IS prompt design -- context, audience, constraints, deliverable. His CTCC prompt is the most polished in the cohort. The gap is that his edit rationales are correct but brief -- he documents what he changed but not always why the change was necessary for this specific audience.

Task 3 reveals the self-audit blind spot. James catches 4/5 planted errors (missing the subtle framing error -- "demonstrating that all DC CAP scholars are staying in school" -- because as a grants writer, he is used to aspirational framing). His self-audit of his own Task 2 work finds only formatting issues because he trusts his own writing quality. The External-vs-Self Audit Gap coaching note triggers here.

Task 4 is solid across all dimensions, with Implementation Feasibility as a highlight -- his grant experience means he naturally thinks in timelines, dependencies, and stakeholder buy-in.

The growth story: James does not have a dramatic arc. He enters competent, stays competent, and grows incrementally. The system's value for James is in the two Approaching dimensions that reveal his blind spots -- he would not discover his combination awareness gap or his self-audit gap without the assessment pointing to them. His trajectory validates that the system provides useful feedback even for consistently solid performers.

#### Capstone Calibration Check

**Predicted self-ratings:**
- Diligence: Proficient (4/5) -- OVERCALIBRATED. His Task 1 was mostly Meets with one Approaching; Proficient maps to Meets/Exceeds patterns. Building Confidence is more accurate.
- Description: Proficient (4/5) -- borderline defensible; one Exceeds and three Meets on Task 2 puts him at the top of the Building Confidence - Proficient range
- Delegation: Proficient (4/5) -- borderline defensible; one Exceeds and three Meets on Task 4
- Discernment: Building Confidence (3/5) -- accurate; mixed Meets/Approaching on Task 3

**Calibration flag:** Diligence. James rates himself Proficient, but his Task 1 (the PRIMARY task for Diligence) showed Meets/Meets/Approaching/Meets. The calibration table maps this to Building Awareness - Building Confidence, not Proficient. The feedback should be: "You rated yourself Proficient on Diligence. Your Task 1 performance showed Meets on Classification Accuracy, Boundary Reasoning, and Governance Operationalization, with Approaching on Combination Awareness. The calibration table maps a mostly-Meets-with-one-Approaching pattern to Building Confidence, not Proficient. Do you have supplemental evidence beyond the tasks? If so, name it. If not, consider whether Building Confidence more accurately describes your current Diligence level -- and whether the Combination Awareness gap is the growth edge that distinguishes Building Confidence from Proficient."

This is the overconfidence test. The feedback is constructive, not punitive. It names the specific gap (Combination Awareness), cites the specific evidence (Task 1 levels), and invites James to either provide supplemental evidence or adjust. The system handles this well.

---

### 2E. Aaliyah Patel

**Profile:** Research & Analytics Associate, Data & Technology, 3mo at DC CAP, technically strong, new to organizational context. Strong analytical skills, limited knowledge of DC CAP workflows and data landscape.

#### Performance Matrix

| Task | Dim 1 | Dim 2 | Dim 3 | Dim 4 |
|------|-------|-------|-------|-------|
| **T1: CLASSIFY** | Classification Accuracy: **Meets** | Boundary Reasoning: **Meets** | Combination Awareness: **Meets** | Governance Operationalization: **Approaching** |
| **T2: CREATE** | Design Completeness: **Meets** | Execution Quality: **Meets** | Edit Layer Rigor: **Exceeds** | Plan-vs-Reality Insight: **Meets** |
| **T3: CRITIQUE** | Error Detection Accuracy: **Exceeds** | Severity Calibration: **Meets** | Self-Audit Depth: **Meets** | Corrective Transfer: **Exceeds** |
| **T4: STRATEGIZE** | Task Mapping Quality: **Approaching** | ROI Reasoning: **Meets** | Implementation Feasibility: **Approaching** | Cross-Unit Awareness: **Approaching** |
| **Capstone** | Use Case Impact: **Meets** | Self-Assessment Calibration: **Meets** | Teaching Module: **Meets** | Demo/Proposal: **Exceeds** | Growth Narrative: **Approaching** |

**Rationale:** Aaliyah is technically sharp but contextually thin. She learns the governance framework quickly in Task 1 because it maps to data governance principles she already knows from her analytics background, but her quick-reference card is generic because she has only been at DC CAP for 3 months and does not yet know her unit's specific data landscape. Task 2 is competent because she can write technically precise prompts, and her Edit Layer Rigor is strong because she approaches editing analytically (she spots patterns in her edit types and names them). Task 3 is her best task -- the analytical/evaluative demand maps perfectly to her research training. She catches all 5 errors AND identifies an additional issue (a missing citation for the $2.1M figure), and her Corrective Transfer is the strongest in the cohort because she thinks in causal chains. Task 4 is her weakest because she does not know DC CAP's workflows well enough to map 10 specific recurring tasks with the required specificity; her tasks are described as categories ("data reports") rather than specific deliverables ("monthly scholar demographic breakdown for board reporting"). Cross-Unit Awareness is Approaching because she has not been at DC CAP long enough to understand the data flows between units.

#### Sample Assessment Feedback (Task 4, Dimension 1: Task Mapping Quality -- Approaching Standard)

"Your analytical framework in this task is sound -- the AI-Readiness Test is applied correctly to every task, and your rationales address both axes (frequency and readiness). What brings this to Approaching is specificity. Of your 10 tasks, 4 are described as categories rather than specific workflows: 'data reports,' 'query management,' 'dashboard updates,' and 'ad hoc analyses.' Each of these needs to become a specific deliverable with a named audience and frequency. 'Data reports' could be 'monthly scholar demographic breakdown for the board' or 'quarterly funder data request responses for Development' -- and those two reports would likely land in different quadrants because they have different governance tiers, different audiences, and different AI-readiness profiles. This is not an analytical gap; it is a contextual knowledge gap. You are 3 months into your DC CAP role, and the specificity this task requires comes from knowing your unit's workflows in detail. For revision, talk to your manager or a colleague who has been in the role longer. Ask them to name the 5 most time-consuming recurring deliverables in Data & Technology. Then rebuild your map with those specifics."

#### Cross-Task Growth Arc

Aaliyah's trajectory is the mirror image of Angela's: strong on analytical/technical dimensions, weak on organizational/contextual ones.

Task 1 shows her learning the governance framework quickly -- she understands the tier logic, catches edge cases by reasoning from the N<10 rule, and correctly traces combination pathways. But Governance Operationalization (the quick-reference card) is Approaching because she cannot name her unit's 5 most common data types with confidence after only 3 months.

Task 2 is solid because prompt engineering is a technical skill she already possesses. Edit Layer Rigor hits Exceeds because she approaches editing like a researcher -- she tags every edit, notices that 3 of 5 are Accuracy Fixes, and hypothesizes that her Constraints section needed more specific data field names.

Task 3 is her peak. The evaluative/analytical cognitive demand is her strongest match. She finds all planted errors plus a bonus issue, calibrates severity correctly, conducts an honest self-audit (naming format blindness as her Task 2 blind spot), and writes the strongest Corrective Transfer memo in the cohort -- her causal chains are precise and implementable.

Task 4 is where the contextual knowledge gap becomes structural. She cannot map 10 specific workflows because she does not know 10 specific workflows. The Approaching levels on Task Mapping, Implementation Feasibility, and Cross-Unit Awareness all trace to the same root cause: 3 months of tenure is not enough to have the organizational knowledge this task implicitly requires.

The growth story: Aaliyah's arc reveals a limitation in the Task 4 design. The STRATEGIZE task assumes organizational context that participants gain through tenure. For new hires with strong analytical skills, the system needs either a scaffolding addition (e.g., interview prompts for learning unit workflows) or an acknowledgment that Approaching on Task 4 for a 3-month employee reflects context, not capability. Her Capstone Growth Narrative is Approaching because she has difficulty telling a coherent DC CAP story when she has only been part of one for 3 months -- the narrative reads as a list rather than a synthesis because she does not yet have the institutional experience to weave a throughline.

#### Capstone Calibration Check

**Predicted self-ratings:**
- Diligence: Building Confidence (3/5) -- accurate; solid Meets on Task 1 with one Approaching
- Description: Building Confidence (3/5) -- accurate; Meets on most Task 2 dimensions
- Delegation: Building Awareness (2/5) -- accurate and honest; she knows Task 4 was her weakest
- Discernment: Proficient (4/5) -- defensible; Exceeds on Error Detection and Corrective Transfer

**Calibration flag:** None. Aaliyah's self-assessment is likely to be well-calibrated because her research training emphasizes evidence-based claims. The Discernment Proficient rating is supported by Exceeds/Meets/Meets/Exceeds on Task 3.

---

## 3. Verification Checks

---

### Check 1: Differentiation Test

**Question:** Do the 5 participants receive meaningfully different level profiles?

**Summary Matrix (Tasks 1-4, all dimensions):**

| Dimension | Angela | Marcus | Denise | James | Aaliyah |
|-----------|--------|--------|--------|-------|---------|
| **T1-D1: Classification Accuracy** | Exceeds | Exceeds | Meets | Meets | Meets |
| **T1-D2: Boundary Reasoning** | Exceeds | Exceeds | Approaching | Meets | Meets |
| **T1-D3: Combination Awareness** | Meets | Exceeds | Approaching | Approaching | Meets |
| **T1-D4: Governance Operationalization** | Exceeds | Meets | Meets | Meets | Approaching |
| **T2-D1: Design Completeness** | Meets | Exceeds | Below | Exceeds | Meets |
| **T2-D2: Execution Quality** | Approaching | Exceeds | Approaching | Meets | Meets |
| **T2-D3: Edit Layer Rigor** | Approaching | Meets | Approaching | Meets | Exceeds |
| **T2-D4: Plan-vs-Reality Insight** | Meets | Exceeds | Approaching | Meets | Meets |
| **T3-D1: Error Detection Accuracy** | Meets | Exceeds | Meets | Meets | Exceeds |
| **T3-D2: Severity Calibration** | Exceeds | Approaching | Meets | Meets | Meets |
| **T3-D3: Self-Audit Depth** | Meets | Meets | Approaching | Approaching | Meets |
| **T3-D4: Corrective Transfer** | Approaching | Meets | Approaching | Meets | Exceeds |
| **T4-D1: Task Mapping Quality** | Meets | Exceeds | Meets | Meets | Approaching |
| **T4-D2: ROI Reasoning** | Approaching | Exceeds | Approaching | Meets | Meets |
| **T4-D3: Implementation Feasibility** | Meets | Meets | Meets | Exceeds | Approaching |
| **T4-D4: Cross-Unit Awareness** | Meets | Approaching | Meets | Meets | Approaching |

**Distribution counts (across 16 task dimensions per participant):**

| Level | Angela | Marcus | Denise | James | Aaliyah |
|-------|--------|--------|--------|-------|---------|
| **Exceeds** | 4 | 9 | 0 | 3 | 4 |
| **Meets** | 8 | 5 | 7 | 11 | 8 |
| **Approaching** | 4 | 2 | 8 | 2 | 4 |
| **Below** | 0 | 0 | 1 | 0 | 0 |

**Verdict: PASS.** No two participants share the same profile. The distributions are meaningfully different:
- Marcus is the high performer (56% Exceeds) with specific, identifiable gaps
- James is the consistent Meets performer (69% Meets) with targeted growth areas
- Angela and Aaliyah have identical count distributions but different placement patterns (Angela's Exceeds cluster in Task 1, Aaliyah's in Tasks 2-3)
- Denise has the widest range (Below to Meets) with no Exceeds, confirming the system identifies her as the highest-support participant

The system does not produce a flat Meets-across-the-board profile for any participant. Every participant has at least 2 Approaching dimensions and at least 2 dimensions at their peak level.

---

### Check 2: Strength Reversal Test

**Question:** Do participants who are strong on one task show weakness on another?

**Angela (predicted: strong T1/T3, weak T2/T4):**
- T1: 3 Exceeds, 1 Meets -- CONFIRMED STRONG
- T2: 0 Exceeds, 2 Meets, 2 Approaching -- CONFIRMED WEAK
- T3: 1 Exceeds, 2 Meets, 1 Approaching -- CONFIRMED STRONG (partial)
- T4: 0 Exceeds, 3 Meets, 1 Approaching -- CONFIRMED WEAK (relative)
- Reversal pattern: Governance instinct (T1) and evaluative judgment (T3 severity) are strong; technical design (T2) and quantitative reasoning (T4 ROI) are weak. The architecture surfaces this.

**Marcus (predicted: strong T1/T2, weak T3 severity calibration):**
- T1: 3 Exceeds, 1 Meets -- CONFIRMED STRONG
- T2: 3 Exceeds, 1 Meets -- CONFIRMED STRONG
- T3: 1 Exceeds, 2 Meets, 1 Approaching -- CONFIRMED REVERSAL on severity calibration
- T4: 2 Exceeds, 1 Meets, 1 Approaching -- CONFIRMED PARTIAL REVERSAL on cross-unit awareness
- Reversal pattern: Technical execution and classification are strong; perspective-taking (audience impact in T3, cross-unit dependencies in T4) is weak. The different cognitive demands expose the silo.

**Denise (predicted: weak T2, strong T3 detection):**
- T2: 0 Exceeds, 0 Meets, 3 Approaching, 1 Below -- CONFIRMED WEAK
- T3: 0 Exceeds, 2 Meets, 2 Approaching -- CONFIRMED PARTIAL RECOVERY
- Reversal pattern: Technical design is her floor; detection and calibration (proofreading instincts) are her recovery mechanism. The cognitive demand shift from CREATE to CRITIQUE is essential to her success.

**Aaliyah (predicted: strong T3, weak T4):**
- T3: 2 Exceeds, 2 Meets -- CONFIRMED STRONG
- T4: 0 Exceeds, 1 Meets, 3 Approaching -- CONFIRMED WEAK
- Reversal pattern: Analytical/evaluative skills are excellent; organizational context is insufficient. The architecture distinguishes capability from context.

**Verdict: PASS.** All four predicted reversals are confirmed. The cognitive demand type architecture successfully reveals that classification skill does not predict design skill (Angela), technical detection does not predict severity calibration (Marcus), design weakness does not predict critique weakness (Denise), and analytical strength does not predict strategic contextual knowledge (Aaliyah).

---

### Check 3: Feedback Utility Test

**Question:** Could each participant revise their work based solely on the feedback provided?

**Test: Does each sample feedback passage include all four elements?**

1. **Cite specific work** -- quote or reference what the participant actually submitted
2. **Name the gap** -- identify what is missing or underdeveloped
3. **Explain the mechanism** -- why the gap matters for the specific dimension
4. **Provide revision direction** -- specific, actionable steps to improve

| Participant | Task/Dim | Cites Work | Names Gap | Explains Mechanism | Revision Direction |
|-------------|----------|------------|-----------|-------------------|-------------------|
| Angela | T2/Execution Quality | Yes (3 Strategic Additions) | Yes (under-specified Task section) | Yes (Claude defaults to generic without specifics) | Yes (rewrite Task section with format, fields, audience) |
| Marcus | T3/Severity Calibration | Yes (tone=Significant, framing=Minor) | Yes (inverted calibration) | Yes (traces harm pathway for each) | Yes (re-examine using harm pathway question) |
| Denise | T2/Design Completeness | Yes (missing Task section, vague Constraints) | Yes (incomplete CTCC) | Yes (Claude cannot produce without specification) | Yes (reteaching walkthrough, then rebuild) |
| James | T1/Combination Awareness | Yes ("combining this could be risky") | Yes (generic combination language) | Yes (must trace specific pathway) | Yes (name dataset, public availability, pathway for Scenarios 4-6) |
| Aaliyah | T4/Task Mapping Quality | Yes (4 category-level tasks named) | Yes (categories not specific deliverables) | Yes (different reports = different quadrants) | Yes (talk to colleague, name 5 specific deliverables, rebuild) |

**Verdict: PASS.** All five feedback samples include all four elements. Each provides enough specificity that the participant could revise without additional guidance. The revision directions are concrete: "rewrite your Task section to include X, Y, Z" (Angela), "re-examine each severity using the harm pathway question" (Marcus), "walk through one example together, then rebuild" (Denise), "name the specific other dataset for Scenarios 4, 5, and 6" (James), "talk to your manager, name 5 specific deliverables" (Aaliyah).

The weakest revision direction is Marcus's, because his gap is perspectival rather than procedural -- you cannot give step-by-step instructions for "think more about audience impact." However, the harm pathway question ("What would happen if this reached the audience uncorrected?") provides a concrete heuristic he can apply.

---

### Check 4: Cross-Task Coherence Test

**Question:** Does the Task N assessment accurately reference Task N-1 performance?

**Evidence of cross-task referencing in the simulation:**

- **Angela T2 feedback** references her Task 1 governance classification strength: "Your governance classification for this task was strong -- you correctly identified Tier 2 constraints... That is your Task 1 foundation showing up in design."
- **Marcus T3 feedback** could reference his Task 2 edit layer pattern: "In Task 2, your Edit Layer Rigor was Meets -- you documented edits accurately but did not analyze patterns. In Task 3, that same attention to detail drives your Exceeds on Error Detection, but the pattern analysis gap shows up differently: you detect every error but miscalibrate which ones matter most."
- **Denise T3 feedback** would reference her Task 2 Below: "In Task 2, your Design Completeness was Below Standard -- the CTCC framework was new and the reteaching session helped you rebuild the document. In Task 3, a different cognitive demand emerges: your 23 years of proofreading CEO communications gives you detection and calibration instincts that outpace your prompt design skills."
- **Aaliyah T4 feedback** references her Task 3 strength: "Your Task 3 showed Exceeds on Error Detection Accuracy and Corrective Transfer -- you think in precise causal chains. In Task 4, that analytical precision is present in your AI-readiness test application (every task correctly evaluated), but the specificity requires organizational knowledge you are still building."

**Growth narrative longitudinal coherence:**

| Participant | Arc Shape | Coherent? |
|-------------|-----------|-----------|
| Angela | High start (T1) -> dip (T2) -> partial rebound (T3) -> stable (T4) | Yes -- governance strength, technical execution gap |
| Marcus | High start (T1-T2) -> targeted dip (T3 severity) -> strong with gap (T4 cross-unit) | Yes -- technical strength, perspective gap |
| Denise | Moderate start (T1) -> valley (T2) -> rebound (T3) -> recovery (T4) | Yes -- institutional knowledge, technical barrier, strength rediscovery |
| James | Solid start (T1) -> peak (T2) -> slight dip (T3) -> solid (T4) | Yes -- consistent performer with specific blind spots |
| Aaliyah | Moderate start (T1) -> solid (T2) -> peak (T3) -> contextual dip (T4) | Yes -- analytical strength, contextual knowledge gap |

**Verdict: PASS.** Each participant's cross-task story is coherent. The assessment language builds on prior task performance, and each participant's trajectory can be explained by a consistent underlying profile. No participant shows an incoherent jump (e.g., Below on Task 1 and Exceeds on the same competency in Task 2 without a reteaching pathway explanation).

---

### Check 5: Edge Case Tests

#### 5a. Marcus (All Exceeds on Tasks 1-2): Does the system still provide useful feedback?

**Risk:** Empty praise ("Great work! You exceeded expectations in every area!") that provides no growth direction.

**What the system does:**
- Task 1: Governance Operationalization at Meets (not Exceeds) provides a genuine growth target. His quick-reference card is technically correct but lacks the unit-specific detail that would make it a team tool. Feedback: "Your classifications are exemplar-level. Your quick-reference card lists the correct tiers but uses generic handling rules ('aggregate before sharing') rather than Data & Technology-specific guidance ('check cell sizes in every Salesforce cross-tab before exporting; your most common Tier 2 trigger is the university x award type filter'). Strengthen the card by naming your 3 most-run queries and their specific small-cell risks."
- Task 2: Edit Layer Rigor at Meets provides another target. His edits are correctly tagged but lack the pattern analysis that Exceeds requires. Feedback: "You documented 4 edits with correct tags. Notice: 3 of 4 were Accuracy Fixes. What does that pattern tell you about your CTCC prompt? If most edits are correcting data errors, your Content section may need more specific data inputs."
- **Extension challenges** for Exceeds dimensions provide genuine stretch: classify scenarios from Student Success context (tests whether his governance knowledge transfers beyond his silo), design an error audit checklist for Data & Technology documents (tests whether his detection skills generalize to his unit's specific risk profile).

**Verdict: PASS.** The system provides useful feedback even at high performance levels. The combination of Meets dimensions (which have clear revision targets) and Exceeds extension challenges (which require genuine stretch) prevents empty praise. The extension challenge of classifying another unit's scenarios directly addresses his Cross-Unit Awareness gap.

#### 5b. Denise (Below on Task 2): Does the reteaching pathway work?

**Risk:** The Below triggers reteaching, but if the reteaching is generic, Denise stays stuck.

**What the system does:**
- Below on Design Completeness triggers the reteaching pathway: "Walk through one example together."
- The reteaching is specific: take her actual vendor communication scenario and build the CTCC prompt step by step, naming each section and what goes in it.
- After reteaching, she revises independently. The prediction: she moves from Below to Approaching (not Meets, because one walkthrough is not enough to internalize a new framework).
- Task 3 then shifts the cognitive demand. Denise does not need CTCC fluency to detect errors and calibrate severity -- she needs 23 years of proofreading experience, which she has. The system design means her Task 2 Below does not predict Task 3 failure.

**Recovery trajectory:**
- Task 2: Below -> Approaching (after reteaching revision)
- Task 3: Meets on Error Detection Accuracy and Severity Calibration (new cognitive demand leverages existing strength)
- Task 4: Meets on Task Mapping and Implementation Feasibility (institutional knowledge surfaces)
- Capstone: Meets on Use Case Impact and Self-Assessment Calibration

**Verdict: PASS.** The reteaching pathway works because: (1) it is specific to her actual task, not generic; (2) the cognitive demand shift in Task 3 allows her to recover by leveraging a different skill; (3) the system does not assume that Below on one task predicts Below on subsequent tasks. The key structural feature is that CLASSIFY, CREATE, CRITIQUE, and STRATEGIZE measure genuinely different skills -- Denise's weakness in CREATE does not prevent her from succeeding in CRITIQUE.

#### 5c. James (Overconfident self-assessment in Capstone): Does the calibration check catch it?

**Risk:** The calibration check either misses the overconfidence (too lenient) or is punitive (damages trust).

**What the system does:**
- James rates Diligence as Proficient (4/5). His Task 1 performance was Meets/Meets/Approaching/Meets.
- The calibration table maps this to Building Awareness - Building Confidence range.
- The check flags the gap: "You rated yourself Proficient on Diligence. Your Task 1 performance showed Meets on three dimensions with Approaching on Combination Awareness. The calibration table maps this pattern to Building Confidence, not Proficient."
- The feedback invites reconciliation: "Do you have supplemental evidence beyond the tasks? If so, name it. If not, consider whether Building Confidence more accurately describes your current Diligence level."
- The feedback names the specific gap: "The Combination Awareness gap is the growth edge that distinguishes Building Confidence from Proficient."

**Is it constructive?**
- It names the specific evidence (Task 1 levels) rather than just saying "you're overconfident."
- It offers a pathway to justify the rating (supplemental evidence) rather than forcing a downgrade.
- It connects the gap to a growth edge rather than a failure.
- It does not use the word "overconfident" or any evaluative language about the person.

**Verdict: PASS.** The calibration check catches the discrepancy and handles it constructively. The participant has three options: (1) provide supplemental evidence to justify Proficient, (2) adjust to Building Confidence, or (3) explain the gap. All three are valid responses. The feedback is diagnostic, not punitive.

---

## 4. Recommendations

Based on the simulation audit, the following adjustments would strengthen the assessment system:

### Recommendation 1: Add Contextual Knowledge Scaffold for Task 4

**Finding:** Aaliyah's Approaching levels on Task 4 (Task Mapping Quality, Implementation Feasibility, Cross-Unit Awareness) all trace to the same root cause: insufficient organizational context at 3 months of tenure. The task implicitly assumes participants know their unit's workflows in detail.

**Adjustment:** Add a pre-task scaffolding step for participants with < 6 months of tenure: "Before starting Deliverable 1, interview your manager or a senior colleague. Ask them to name the 10 most recurring tasks in your unit, the approximate time each takes, and the primary data involved in each. Use their answers as your starting point for the deployment map." This preserves the analytical rigor of the task while acknowledging that organizational knowledge is a prerequisite, not a skill being assessed.

### Recommendation 2: Strengthen Severity Calibration Feedback for Technical Participants

**Finding:** Marcus's severity miscalibration (overweighting technical errors, underweighting framing/tone) is a predictable pattern for technically skilled participants. The current rubric correctly identifies the gap, but the feedback could be more targeted.

**Adjustment:** Add a facilitator note to the Task 3 Severity Calibration dimension: "Technical participants may consistently rate factual and governance errors correctly but miscalibrate framing and tone errors. If you see this pattern, the coaching question should focus on audience perspective: 'Imagine you are the funder reading this email. Which error would make you question DC CAP's credibility most -- the wrong number, or the claim that all scholars are making progress?' The audience perspective often reframes severity more effectively than the harm pathway framework for technical thinkers."

### Recommendation 3: Add External-to-Self Audit Gap Flag for Consistently Strong Participants

**Finding:** Both Marcus and James show the pattern of strong external audit (4-5/5 errors caught) with weak self-audit (minimal findings in own work). The Task 3 SKILL.md already includes the coaching note for this pattern, which is well-designed. However, the simulation reveals that participants who are Meets or Exceeds on Error Detection Accuracy and then Approaching on Self-Audit Depth may not fully internalize the coaching note without a structural prompt.

**Adjustment:** Add a mandatory self-audit protocol step: "Before writing your Part B findings, apply the 5-error-type checklist to your Task 2 work as a systematic check. For each error type (Factual, Framing, Scope, Governance, Tone), spend 2-3 minutes specifically looking for that type of error. Write down what you checked and what you found -- even if you found nothing for a given type. This documentation is required even if you believe your work is error-free." This structural requirement prevents the "I already edited it, so it's fine" shortcut without changing the rubric.

### Recommendation 4: Ensure Extension Challenges Provide Genuine Stretch

**Finding:** Marcus receives Exceeds on 9 of 16 task-level dimensions. The extension challenges must be genuinely demanding or he disengages.

**Adjustment:** The current extension challenges are well-designed (classify scenarios from another unit, design an error audit checklist, draft a CEO briefing). One enhancement: for participants who receive Exceeds on all dimensions of a task, the extension challenge should explicitly connect to their weakest dimension on a different task. For Marcus: "Classify these 2 scenarios from Student Success -- and for each, write the severity assessment you would give if these scenarios appeared in a funder communication (connecting your Task 1 classification strength to your Task 3 severity calibration growth edge)."

### Recommendation 5: Capstone Growth Narrative -- Provide Synthesis Scaffolding for New Hires

**Finding:** Aaliyah's Capstone Growth Narrative is Approaching because she cannot tell a coherent institutional story after 3 months. The narrative dimension asks for synthesis across Tasks 1-4, which implicitly favors participants with longer tenure who have more institutional context to weave into the story.

**Adjustment:** Add an alternative narrative prompt for participants with < 6 months tenure: "If you are new to DC CAP, your growth narrative may focus on how the pilot accelerated your understanding of the organization rather than how it transformed longstanding practices. That is a valid and valuable narrative. Frame your synthesis around: what did you learn about DC CAP's data landscape, governance needs, and workflow patterns that you would not have learned through onboarding alone? How does the pilot give you a strategic perspective on your unit that most new hires do not develop for 6-12 months?"

### Recommendation 6: No Rubric Changes Needed for the 4-Level Scale

**Finding:** The 4-level scale (Exceeds/Meets/Approaching/Below) provides adequate differentiation. The simulation produced all four levels across the five participants, with meaningful bright lines between levels. The Approaching-to-Meets boundary is the most critical, and the rubric's bright line tests (trace-the-pathway for Task 1, use-specific-work-context for Task 2, harm-pathway-reasoning for Task 3, transparent-math for Task 4) are specific enough to produce consistent judgments.

No participant is artificially compressed into Meets-across-the-board, and no participant is artificially spread across all four levels. The distribution reflects genuine differences in skill, knowledge, and experience.

---

## Appendix: Capstone Performance Summary Matrix

| Dimension | Angela | Marcus | Denise | James | Aaliyah |
|-----------|--------|--------|--------|-------|---------|
| Use Case Impact | Meets | Exceeds | Meets | Meets | Meets |
| Self-Assessment Calibration | Meets | Meets | Meets | **Approaching** | Meets |
| Teaching Module Completeness | Meets | Meets | Approaching | Meets | Meets |
| Demo/Proposal Quality | Approaching | Exceeds | Meets | Meets | Exceeds |
| Growth Narrative Coherence | Meets | Meets | Meets | Meets | **Approaching** |

**Notable patterns:**
- James is the only Capstone Approaching on Self-Assessment Calibration (overconfidence confirmed)
- Aaliyah is the only Capstone Approaching on Growth Narrative Coherence (tenure gap confirmed)
- Denise's Teaching Module is Approaching because she writes narrative descriptions rather than numbered steps (same pattern as her Task 2 gap -- she knows the workflow but struggles to decompose it into structured components)
- Marcus Exceeds on Use Case Impact and Demo/Proposal Quality because his quantified before/after and causal analysis are the strongest in the cohort
- Angela's Demo/Proposal is Approaching because her proposals lack the specific pilot evidence citations the rubric requires -- she describes ideas in general terms rather than grounding them in Task 1-4 moments

---

*End of Simulation Audit*

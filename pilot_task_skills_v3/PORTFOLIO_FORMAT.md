# Portfolio Summary Format — DC CAP AI Governance Pilot

**Version:** 2.0 | **Date:** April 11, 2026

---

## DESIGN PRINCIPLES

The portfolio summary format is built for **scannability** and **impact** — designed to be read in 5 minutes by:
- Cohort peers (peer learning and mutual accountability)
- Facilitators (identifying learning patterns across the cohort)
- KPMG reviewers (assessing learning outcomes and governance competency)
- Board members (understanding the pilot's development trajectory)

The summary is **NOT a replacement for full work**; full submissions and assessments remain in an appendix or accessible on request. The summary is what gets printed, shared with the cohort, and celebrated.

---

## SECTION 1: HEADER BLOCK (3 LINES)

**Purpose:** Immediate context and identity.

**Format:**
```
TASK: [Task Name] | PARTICIPANT: [Name] | UNIT: [Unit Name] | DATE: [Submission Date]
COMPETENCIES: [4D Framework dimensions or task-specific skills]
WEEK: [Week Range] | ASSESSMENT LEVEL: [Final Level: Exceeds / Meets / Approaching / Below]
```

**Example (Task 1 — CLASSIFY):**
```
TASK: The Governance Classifier | PARTICIPANT: Keisha Williams | UNIT: Student Success | DATE: April 24, 2026
COMPETENCIES: Classification Accuracy, Boundary Reasoning, Combination Awareness, Governance Operationalization
WEEK: 2-3 (April 13-24) | ASSESSMENT LEVEL: Meets
```

**Example (Task 3 — CRITIQUE):**
```
TASK: The Quality Auditor | PARTICIPANT: Marcus Chen | UNIT: Development & Fundraising | DATE: May 15, 2026
COMPETENCIES: Error Detection Accuracy, Severity Calibration, Self-Audit Depth, Corrective Transfer
WEEK: 5-6 (May 4-15) | ASSESSMENT LEVEL: Exceeds
```

---

## SECTION 2: PERFORMANCE SNAPSHOT (Compact, ~½ page)

**Purpose:** Show final achievement level on each key dimension. Use 1-2 sentences per dimension.

**Format:** 4-row table with dimensions, final level, and one "Key Evidence" sentence per dimension.

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **[Dimension 1]** | Exceeds / Meets / Approaching | One sentence: specific example or artifact from their work that demonstrates this level. |
| **[Dimension 2]** | [Level] | Key evidence sentence. |
| **[Dimension 3]** | [Level] | Key evidence sentence. |
| **[Dimension 4]** | [Level] | Key evidence sentence. |

**Examples:**

*Task 1 CLASSIFY — Keisha Williams (Student Success)*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Classification Accuracy** | Meets | Correctly identified all three scenarios (Tier 1, Tier 2, Tier 2) with reasoning tied to specific data elements. |
| **Boundary Reasoning** | Exceeds | Traced re-identification pathways step-by-step, moving from abstract risk awareness ("could enable inference") to concrete mechanism ("small denominator + public data = identification"). |
| **Combination Awareness** | Meets | Demonstrated understanding that aggregates become risky at small cell sizes; explained why Ward-level data with N=6 escalates to Tier 2. |
| **Governance Operationalization** | Meets | Mapped all three scenarios to correct handling requirements (access restrictions, de-identification, prohibition with legal review); quick-reference card covers Student Success data types. |

*Task 2 CREATE — Samuel Okafor (Partner Outreach)*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Design Completeness** | Exceeds | Workflow design document covered governance classification, CTCC prompt, modality selection, and predicted outcomes before execution began. |
| **Execution Quality** | Meets | Prompts included all four CTCC components; constraints explicitly reflected Tier 2 handling rules; output was usable with minor edits. |
| **Edit Layer Rigor** | Approaching | Edits were accurate but documentation lacked specificity; tagged edits but didn't always tie them back to prompt improvements. |
| **Plan-vs-Reality Insight** | Meets | Identified that governance classification was faster than predicted but prompt iteration took longer; honest about what the gap revealed. |

*Task 3 CRITIQUE — Sophia Rodriguez (Data & Technology)*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Error Detection Accuracy** | Exceeds | Found 6 of 7 planted errors including the governance violation; correctly identified the fabricated statistic that other participants missed. |
| **Severity Calibration** | Exceeds | Classified the governance error as Critical and the tone error as Minor; severity reasoning tied to specific harm pathways, not just gut feeling. |
| **Self-Audit Depth** | Meets | Identified two errors in her own Task 2 work; diagnosed why she missed them (over-reliance on first-pass accuracy; didn't re-read with governance lens). |
| **Corrective Transfer** | Exceeds | Prompt Improvement Memo redesigned three prompt elements to prevent the error types she found; before/after comparison shows measurable improvement. |

*Task 4 STRATEGIZE — James Washington (Programs)*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Task Mapping Quality** | Exceeds | Mapped 12 recurring tasks with accurate governance tier, time estimate, and AI-readiness rating; distinguished between tasks that need automation vs. augmentation vs. human-only. |
| **ROI Reasoning** | Exceeds | Ranked top 2 by hours saved per month, governance risk level, and implementation complexity; ROI calculation included training time, not just execution time. |
| **Implementation Feasibility** | Meets | Q3 rollout plan includes timeline, training steps, and governance checkpoints; would benefit from more detail on change management. |
| **Cross-Unit Awareness** | Meets | Identified two cross-unit dependencies (shared data with Student Success, shared funder reporting with Development); proposed coordination mechanism. |

*Capstone TEACH — Marcus Chen (Development & Fundraising)*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Use Case Impact** | Exceeds | Demonstrated funder report workflow with before/after; reduced draft time from 4 hours to 90 minutes while maintaining governance compliance. |
| **Self-Assessment Calibration** | Meets | Self-assessed Diligence as Proficient and Discernment as Building Confidence; facilitator check confirmed alignment with task performance data. |
| **Teaching Module Completeness** | Exceeds | Step-by-step guide passes the independence test; a colleague could follow it without asking questions; includes governance decision tree and common pitfalls. |
| **Teaching Module/Proposal Quality** | Meets | Teaching module showed clear step-by-step instructions; governance section was strong but edge case guidance for other units could be more detailed. |

---

## SECTION 3: GROWTH STORY (3-5 sentences)

**Purpose:** Narrative of learning progression. Answer:
- What was the main gap in initial work?
- What improved after revision (if applicable)?
- What's the transferable insight?
- For Tasks 2+: How does this compare to prior task performance?

**Format:** Narrative paragraph (not bullet points).

**Examples:**

*Task 1 CLASSIFY — Keisha Williams:*
"Your initial work correctly identified governance tiers but treated combination analysis as abstract — you named risks without tracing how they'd actually occur. In revision, you systematized this thinking: small denominators + public reference data = re-identification risk. This is the pattern that connects Scenarios A and C, and it's now part of your operational toolkit. Your quick-reference card for Student Success is strong — it names the specific data types you handle and maps them to handling rules. As you move to Task 2 CREATE, this governance fluency becomes the foundation for designing a real workflow."

*Task 2 CREATE — Samuel Okafor (Building on CLASSIFY):*
"Task 1 CLASSIFY gave you governance fluency; Task 2 CREATE tested whether you could design a complete workflow around it. You did. Your workflow design document was thorough — governance classification, CTCC prompt, modality selection, predicted outcomes — all before you opened Claude. Where the learning deepened was in the plan-vs-reality comparison: you predicted the governance classification would be the hard part, but the hard part was actually iterating your prompt when the first output missed the tone for partner communications. That gap between prediction and reality is exactly what this task is designed to surface."

*Task 3 CRITIQUE — Sophia Rodriguez (Building on CLASSIFY and CREATE):*
"Tasks 1 and 2 built your governance and design discipline. Task 3 CRITIQUE asked a fundamentally different question: can you tear apart someone else's work, then your own, and then improve the system? Your error detection was sharp — you caught the governance violation that 60% of the cohort missed. More importantly, your severity calibration was precise: you didn't treat all errors as equal. The real breakthrough was the self-audit. Going back to your own Task 2 work and finding errors you missed the first time takes intellectual honesty. Your Prompt Improvement Memo closed the loop — you didn't just find problems, you redesigned prompts to prevent them."

*Task 4 STRATEGIZE — James Washington (Building on CLASSIFY, CREATE, CRITIQUE):*
"Tasks 1-3 gave you individual competency — you can classify, design, and evaluate. Task 4 STRATEGIZE asked the leadership question: given everything you know, what should your unit deploy, in what order, with what safeguards? Your deployment map was comprehensive — 12 tasks mapped with governance tiers and AI-readiness ratings. The ROI reasoning was where you stood out: you included training time in the cost calculation, which most participants didn't. Your cross-unit awareness identified the shared data dependency with Student Success that could accelerate or block deployment. This is systems thinking."

*Capstone TEACH — Marcus Chen (Full Trajectory):*
"CLASSIFY built your governance foundation. CREATE proved you could design and execute. CRITIQUE sharpened your evaluative judgment. STRATEGIZE gave you the organizational lens. Now the Capstone asks: what does it all add up to, and can you teach it? Your funder report use case is compelling — 4 hours to 90 minutes with governance compliance maintained. Your self-assessment was well-calibrated against your actual performance. The teaching module is the strongest deliverable: a colleague in Development could follow it without asking you a single question. That's the test of whether learning has become transferable."

---

## SECTION 4: PARTICIPANT REFLECTION (2-3 sentences)

**Purpose:** Capture the participant's voice and self-awareness.

**Format:**
- Short prompt (usually facilitator-provided, data-grounded)
- Participant response (2-3 sentences, can be excerpt from longer reflection)

**Examples:**

*Task 1 CLASSIFY — Keisha Williams:*

**Prompt:** "Your strongest dimension was Classification Accuracy. Your widest growth area was Combination Awareness. What made combination analysis harder than straight tier classification?"

**Response:** "Tier classification felt straightforward because the framework definitions are clear — I can check off criteria. But combination analysis required me to imagine attack vectors. For Scenario A, I knew the university breakdown was risky, but I had to think through why small universities made it worse. Once I mapped out the steps someone would take to re-identify people, the risk became concrete."

*Task 2 CREATE — Samuel Okafor:*

**Prompt:** "Your Plan-vs-Reality comparison showed that governance classification was easier than you expected, but prompt iteration was harder. What surprised you?"

**Response:** "I thought the governance piece would be the challenge — it was in Task 1 CLASSIFY. But by Task 2, that part was automatic. What surprised me was how much the prompt needed to change when Claude's first draft missed the tone for partner communications. I hadn't predicted that the human-judgment piece would be about relationship nuance, not governance rules."

*Task 3 CRITIQUE — Sophia Rodriguez:*

**Prompt:** "You found 6 of 7 planted errors in the external audit. Then you went back to your own Task 2 work and found two errors you'd missed. What was different about auditing your own work?"

**Response:** "Auditing someone else's work is easier because you have distance. With my own Task 2 output, I remembered being satisfied with it. Going back with the severity framework changed my lens — I found a framing error I'd accepted because it sounded right. The self-audit taught me that confidence in your own work is actually a risk factor. I need to build in a delay before I review my own AI output."

---

## SECTION 5: FACILITATOR QUICK-HIT (2 lines)

**Purpose:** Capture learning pattern and peer discussion starter for the cohort.

**Format:**
- **Pattern:** One sentence describing what you notice about this participant's learning
- **Discussion Question:** A question that invites peer learning or peer-to-peer insight sharing

**Examples:**

*Task 1 CLASSIFY — Keisha Williams:*

**Pattern:** Moves from abstract risk awareness to mechanistic re-identification reasoning; initial work shows correct tier choices but vague combination analysis; revision traces specific pathways. Quick-reference card is operationally useful for Student Success.

**Discussion Question:** "When you're looking at your own data, how do you decide whether combining two pieces of information creates risk? Keisha's reasoning walks through a specific pathway: know the total, know the count, estimate individual values. What other combination patterns exist at DC CAP?"

*Task 2 CREATE — Samuel Okafor:*

**Pattern:** Design document was thorough; governance classification transferred cleanly from CLASSIFY. Plan-vs-reality comparison revealed that prompt iteration, not governance, was the real challenge. Edit layer rigor is a growth edge.

**Discussion Question:** "Samuel's plan predicted governance would be the hard part, but the hard part was actually iterating his prompt for tone. How many of you have been surprised by WHAT was hard vs. what you expected? What does that tell us about planning AI workflows?"

*Task 3 CRITIQUE — Sophia Rodriguez:*

**Pattern:** Strong error detection with precise severity calibration; treats each error type differently based on potential harm. Self-audit showed intellectual honesty — went back to her own Task 2 CREATE work and found errors she'd originally accepted.

**Discussion Question:** "Sophia found errors in her own Task 2 work that she missed the first time. She says confidence in your own output is a risk factor. Do you agree? What would it look like to build a 'cooling off period' into your AI workflow — time between generating output and auditing it?"

*Task 4 STRATEGIZE — James Washington:*

**Pattern:** Deployment map is comprehensive; ROI reasoning includes training costs, not just execution savings. Cross-unit awareness identifies dependencies that could accelerate or block rollout.

**Discussion Question:** "James included training time in his ROI calculation, which changed the ranking of his top 2 deployment targets. How many of us are calculating AI ROI based only on execution time saved? What other hidden costs should we include?"

*Capstone TEACH — Marcus Chen:*

**Pattern:** Strong use case with measurable impact (4 hours to 90 minutes). Self-assessment is well-calibrated. Teaching module passes the independence test — a colleague can follow it without asking questions.

**Discussion Question:** "Marcus's teaching module is designed so a colleague can follow it independently. What would it take for each of us to build one teaching module for our unit by the end of Q3? What's the minimum a colleague needs to get started safely?"

---

## SECTION 6: FULL DELIVERABLE (Appendix)

**Note:** The detailed submission, assessment, revision, and full rubric feedback are available in the **full portfolio file**. The summary above is optimized for rapid comprehension and peer discussion. Facilitators and KPMG reviewers can request the complete portfolio at any time.

---

## MULTI-TASK SUMMARY (For Tasks 2, 3, 4, Capstone Only)

**Purpose:** Show growth trajectory across tasks and identify thresholds. Because each task measures different dimensions (different cognitive demand types), the comparison tracks the PRIMARY 4D competency across tasks, not the same dimension names.

**Format:** Add this section to Task 2, 3, 4, and Capstone summaries. Compare to prior task(s) using 4D competency threading.

**Example (Task 2 CREATE — Samuel Okafor):**

**Growth from CLASSIFY to CREATE:**

| 4D Competency | Task 1 CLASSIFY | Task 2 CREATE | Trajectory |
|---------------|-----------------|---------------|------------|
| **Diligence** | Classification Accuracy: Meets | Governance in workflow design: Strong | Task 1 built the foundation; Task 2 applied it automatically. |
| **Description** | — | Design Completeness: Exceeds | New focus area; workflow design document was thorough and complete. |
| **Discernment** | — | Edit Layer Rigor: Approaching | Growth edge identified; edits were accurate but documentation was thin. |
| **Delegation** | — | Modality selection in workflow: Meets | Chose "draft together" with clear rationale for partner communications. |

**Pattern:** CLASSIFY built governance fluency that transferred directly to CREATE. The new cognitive demands — designing before executing, and comparing plan to reality — revealed that prompt iteration, not governance, is the growth edge. Ready for CRITIQUE with a specific question: can he evaluate quality as well as he creates it?

---

**Example (Task 3 CRITIQUE — Sophia Rodriguez):**

**Growth from CLASSIFY → CREATE → CRITIQUE:**

| 4D Competency | Task 1 CLASSIFY | Task 2 CREATE | Task 3 CRITIQUE | Trajectory |
|---------------|-----------------|---------------|-----------------|-----------|
| **Diligence** | Classification Accuracy: Meets | Governance in design: Meets | Governance error detection: Exceeds | Governance fluency deepened at each stage; now catches governance violations others miss. |
| **Description** | — | Execution Quality: Meets | Corrective Transfer: Exceeds | Moved from writing prompts to redesigning prompts based on error analysis. |
| **Discernment** | — | Edit Layer Rigor: Approaching | Error Detection + Severity Calibration: Exceeds | Biggest leap; moved from thin edit documentation to precise error classification with severity reasoning. |

**Pattern:** Steady growth with acceleration from CREATE to CRITIQUE. The shift from creating to evaluating unlocked Sophia's strongest cognitive mode — she's a natural auditor. Severity calibration was the standout skill: she doesn't just find errors, she classifies their impact. This precision will serve her well in STRATEGIZE, where she'll need to triage by ROI.

---

## FORMAT EXAMPLES BY TASK TYPE

### Task 1: CLASSIFY — The Governance Classifier (Analytical Categorization)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions: Classification Accuracy, Boundary Reasoning, Combination Awareness, Governance Operationalization)
- Growth Story (3-5 sentences explaining tier classification reasoning + combination analysis + quick-reference card)
- Participant Reflection (2-3 sentences on their biggest insight)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-task comparison: N/A for Task 1 (first task)

**Estimated Length:** 1 page

---

### Task 2: CREATE — The Workflow Designer (Design + Execution + Metacognition)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions: Design Completeness, Execution Quality, Edit Layer Rigor, Plan-vs-Reality Insight)
- Growth Story (5-7 sentences: how CLASSIFY governance fluency enabled workflow design, what the plan-vs-reality gap revealed, what's different about designing vs. classifying)
- Participant Reflection (2-3 sentences)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-Task Comparison: CLASSIFY -> CREATE (what transferred, what's new, what the different cognitive demand revealed)

**Estimated Length:** 1-1.5 pages

---

### Task 3: CRITIQUE — The Quality Auditor (Evaluation + Diagnosis + Correction)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions: Error Detection Accuracy, Severity Calibration, Self-Audit Depth, Corrective Transfer)
- Growth Story (5-7 sentences: how CLASSIFY and CREATE skills enabled evaluation, what self-audit revealed, how critique differs from creation as a cognitive demand)
- Participant Reflection (2-3 sentences)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-Task Comparison: CLASSIFY -> CREATE -> CRITIQUE (learning trajectory across cognitive demand types)

**Estimated Length:** 1.5-2 pages (slightly longer to accommodate trajectory comparison)

---

### Task 4: STRATEGIZE — The Deployment Strategist (Strategic Analysis + Organizational Planning)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions: Task Mapping Quality, ROI Reasoning, Implementation Feasibility, Cross-Unit Awareness)
- Growth Story (5-7 sentences: how individual competency from Tasks 1-3 enabled strategic thinking; what's different about planning for a unit vs. doing the work yourself)
- Participant Reflection (2-3 sentences)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-Task Comparison: CLASSIFY -> CREATE -> CRITIQUE -> STRATEGIZE (how individual skills became organizational thinking)

**Estimated Length:** 2 pages

---

### Capstone: TEACH — The Pilot Portfolio (Synthesis + Calibration + Multiplication)

- Header Block (3 lines)
- Performance Snapshot (4-5 dimensions: Use Case Impact, Self-Assessment Calibration, Teaching Module Completeness, Demo/Proposal Quality + Growth Narrative Coherence)
- Growth Story (5-7 sentences: how CLASSIFY -> CREATE -> CRITIQUE -> STRATEGIZE trajectory led to synthesis; what the teaching module represents; how individual learning becomes collective capability)
- Participant Reflection (2-3 sentences)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-Task Comparison: CLASSIFY -> CREATE -> CRITIQUE -> STRATEGIZE -> TEACH (full pilot trajectory with 4D competency threading)
- [Optional] Use Case Summary (1 paragraph on the strongest workflow demonstrated) + Teaching Module Summary (1 paragraph on what colleagues will be able to do)

**Estimated Length:** 2-2.5 pages

---

## RENDERING AND OUTPUT

The portfolio summary is rendered as a **branded Word document (.docx)** using the DC CAP color system:
- **Header:** Navy background (#101A4C) with white text
- **Section Headers:** Purple (#8352FF)
- **Tables:** Navy headers with white text; alternating row colors (white / tan #FFF4ED)
- **Body Text:** Navy text on white background (Georgia font)

**Output:** One branded .docx file per participant per task, suitable for:
- Printing for the cohort celebration event
- Email distribution to peer groups
- KPMG review documentation
- Board presentation (with permission)

---

## ACCESSIBILITY AND EQUITY

- **Plain language:** No jargon; framework terminology is defined in-context
- **Scannable:** Section headers, short paragraphs, tables for data
- **Asynchronous-friendly:** Can be read without audio or video explanation
- **Celebration-ready:** Designed to highlight strength, not deficiency; growth narrative is primary

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 9, 2026 | Initial format design for pilot; 4-section structure (Header + Snapshot + Story + Reflection) + Facilitator Notes. |
| 2.0 | April 11, 2026 | Updated for cognitive-demand-type architecture. Task names, dimension names, examples, and multi-task comparison updated to reflect CLASSIFY/CREATE/CRITIQUE/STRATEGIZE/TEACH structure. Design principles and format structure unchanged. |


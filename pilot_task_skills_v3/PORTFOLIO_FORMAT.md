# Portfolio Summary Format — DC CAP AI Governance Pilot

**Version:** 1.0 | **Date:** April 9, 2026

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

**Example (Task 1):**
```
TASK: The Guided Pipeline | PARTICIPANT: Keisha Williams | UNIT: Student Success | DATE: April 9, 2026
COMPETENCIES: Diligence, Description, Delegation, Discernment
WEEK: 1-2 (April 6-17) | ASSESSMENT LEVEL: Meets
```

**Example (Task 3):**
```
TASK: The Independent Pipeline | PARTICIPANT: Marcus Chen | UNIT: Development & Fundraising | DATE: May 8, 2026
COMPETENCIES: Diligence, Description, Delegation, Discernment
WEEK: 5-6 (May 2-15) | ASSESSMENT LEVEL: Exceeds
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

*Task 1 — Keisha Williams*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Classification Accuracy** | Meets | Correctly identified all three scenarios (Tier 1, Tier 2, Tier 2) with reasoning tied to specific data elements. |
| **Reasoning Specificity** | Exceeds | Traced re-identification pathways step-by-step, moving from abstract risk awareness ("could enable inference") to concrete mechanism ("small denominator + public data = identification"). |
| **Combination Awareness** | Meets | Demonstrated understanding that aggregates become risky at small cell sizes; explained why Ward-level data with N=6 escalates to Tier 2. |
| **Governance Application** | Meets | Mapped all three scenarios to correct handling requirements (access restrictions, de-identification, prohibition with legal review). |

*Task 2 — Samuel Okafor (Partner Outreach)*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Real Governance** | Exceeds | Correctly classified partner communications using Tier 2/3 boundaries; identified small-cell risk in disaggregated partner performance data. |
| **CTCC Prompt Quality** | Meets | Prompts included all four components (Context, Task, Constraints, Content); constraints explicitly reflected Tier 2 handling rules. |
| **Modality Judgment** | Meets | Selected Augmentation (Claude drafts, human adds relationship context); rationale shows understanding of why relationship knowledge is non-delegable. |
| **Output Audit Rigor** | Approaching | Edits were accurate but documentation lacked specificity; tagged edits but didn't always tie them back to prompt improvements. |

*Task 3 — Sophia Rodriguez (Data & Technology)*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Governance at Scale** | Exceeds | Managed complex, multi-dataset governance; correctly identified Tier 2 aggregate with small cells; proposed suppression remedy. |
| **Prompt Evolution** | Exceeds | Iterated prompts three times, each refinement tied to governance constraint or output clarity; final prompt was production-ready. |
| **Modality at Scale** | Meets | Selected Agency (iterative human-AI collaboration); justified why repeated judgment was needed; maintained human control over data decision-making. |
| **Documentation Depth** | Exceeds | Every edit tagged with type, rationale, and governance impact; reflected on human judgment layer with confidence and specificity. |

*Task 4 (Capstone) — James Washington*

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Pipeline Integration** | Exceeds | Designed a complete 4D workflow for a new initiative; showed how governance constraints shaped prompt design, which shaped skill selection, which shaped audit depth. |
| **Leadership Application** | Exceeds | Proposed governance review protocol for partner-facing AI use; includes checkpoints, escalation pathways, and team training plan. |
| **Peer Mentoring** | Meets | Facilitated peer discussion on governance; helped two participants resolve Tier 2 edge cases. |
| **Strategic Vision** | Exceeds | Articulated why the 4D framework scales beyond individual tasks to organizational practice; tied learning to DC CAP's mission and funder expectations. |

---

## SECTION 3: GROWTH STORY (3-5 sentences)

**Purpose:** Narrative of learning progression. Answer:
- What was the main gap in initial work?
- What improved after revision (if applicable)?
- What's the transferable insight?
- For Tasks 2+: How does this compare to prior task performance?

**Format:** Narrative paragraph (not bullet points).

**Examples:**

*Task 1 — Keisha Williams:*
"Your initial work correctly identified governance tiers but treated combination analysis as abstract — you named risks without tracing how they'd actually occur. In revision, you systematized this thinking: small denominators + public reference data = re-identification risk. This is the pattern that connects Scenarios A and C, and it's now part of your operational toolkit. As you move to Task 2, this same logic will help you classify real data you handle daily."

*Task 2 — Samuel Okafor (Building on Task 1):*
"Task 1 gave you the governance framework; Task 2 tested whether you could apply it to real work with no answer key. You did. Your governance classification of the partner performance data was stronger than Task 1 — you moved faster, with more confidence, and caught a Tier 2 edge case you might have missed before. The prompt design was solid but your audit documentation was less detailed than your classification. That's a specific area to tighten for Task 3."

*Task 3 — Sophia Rodriguez (Building on Tasks 1-2):*
"Tasks 1 and 2 built your governance and prompt discipline. Task 3 tested you at scale — a multi-source analysis with governance decisions at every step. Your governance moved from binary (Tier 2 or not) to probabilistic (when to suppress vs. when to aggregate). Your prompts evolved across iterations; you weren't satisfied with the first pass. That iteration habit is what turns single-task mastery into systems thinking. This is the threshold of strategic AI deployment."

*Task 4 (Capstone) — James Washington:*
"Tasks 1-3 gave you individual competency. The capstone invited you to think about the 4D framework as an organizational practice, not just a personal workflow. Your proposal for a governance review protocol shows you've moved from practitioner to architect. You're not just doing the work right; you're building the system that enables others to do it right. This is exactly where we hoped the pilot would lead: individual learning becoming collective capability."

---

## SECTION 4: PARTICIPANT REFLECTION (2-3 sentences)

**Purpose:** Capture the participant's voice and self-awareness.

**Format:**
- Short prompt (usually facilitator-provided, data-grounded)
- Participant response (2-3 sentences, can be excerpt from longer reflection)

**Examples:**

*Task 1 — Keisha Williams:*

**Prompt:** "Your strongest dimension was Classification Accuracy. Your widest growth area was Combination Awareness. What made combination analysis harder than straight tier classification?"

**Response:** "Tier classification felt straightforward because the framework definitions are clear — I can check off criteria. But combination analysis required me to imagine attack vectors. For Scenario A, I knew the university breakdown was risky, but I had to think through why small universities made it worse. Once I mapped out the steps someone would take to re-identify people, the risk became concrete."

*Task 2 — Samuel Okafor:*

**Prompt:** "In Task 1, you struggled with reasoning specificity; in Task 2, you got faster and more confident. What changed?"

**Response:** "Repetition. Task 1 was theoretical; Task 2 was my actual work. Using the framework on partner data that I touch every week made the tiers stick. I wasn't memorizing rules; I was solving real problems. That stickiness is why I'm more confident now."

*Task 3 — Sophia Rodriguez:*

**Prompt:** "Your audit documentation jumped in detail from Task 2 to Task 3. You also iterated your prompts three times instead of submitting once. Tell us about that iteration habit."

**Response:** "I realized in Task 2 that my first-pass prompts were lazy. I wasn't pushing them hard enough. In Task 3, I told myself to treat the prompt like code — if it doesn't work the first time, refine it. That's how I write database queries, and I should apply the same discipline to AI prompts. The iteration showed me things about the governance constraints I'd missed the first time."

---

## SECTION 5: FACILITATOR QUICK-HIT (2 lines)

**Purpose:** Capture learning pattern and peer discussion starter for the cohort.

**Format:**
- **Pattern:** One sentence describing what you notice about this participant's learning
- **Discussion Question:** A question that invites peer learning or peer-to-peer insight sharing

**Examples:**

*Task 1 — Keisha Williams:*

**Pattern:** Moves from abstract risk awareness to mechanistic re-identification reasoning; initial work shows correct tier choices but vague combination analysis; revision traces specific pathways.

**Discussion Question:** "When you're looking at your own data, how do you decide whether combining two pieces of information creates risk? Keisha's reasoning walks through a specific pathway: know the total, know the count, estimate individual values. What other combination patterns exist at DC CAP?"

*Task 2 — Samuel Okafor:*

**Pattern:** Transfers Task 1 theory to real work with confidence; governance classification is strong; audit documentation is a growth edge.

**Discussion Question:** "Samuel classified real partner data faster than the Task 1 scenario. What made real data easier to classify than hypothetical data? Can we build that confidence into our approaches to new governance challenges?"

*Task 3 — Sophia Rodriguez:*

**Pattern:** Demonstrates iterative prompt design; treats each prompt iteration as hypothesis-testing; audit depth increases with each iteration.

**Discussion Question:** "Sophia revised her prompts three times before landing on the final version. How many of you submit first-pass prompts, and how many iterate? What would happen if we treated every governance decision like software development — expecting the first draft to be incomplete?"

*Task 4 (Capstone) — James Washington:*

**Pattern:** Moves from individual practitioner to systems architect; uses capstone to design organizational infrastructure for 4D framework adoption.

**Discussion Question:** "James proposes a governance review protocol for partner-facing AI. What would it take to roll this out across DC CAP? What's the minimum viable governance protocol we'd need to say 'Yes, go use AI' vs. 'No, hold'?"

---

## SECTION 6: FULL DELIVERABLE (Appendix)

**Note:** The detailed submission, assessment, revision, and full rubric feedback are available in the **full portfolio file**. The summary above is optimized for rapid comprehension and peer discussion. Facilitators and KPMG reviewers can request the complete portfolio at any time.

---

## MULTI-TASK SUMMARY (For Tasks 2, 3, 4 Only)

**Purpose:** Show growth trajectory across tasks and identify thresholds.

**Format:** Add this section to Task 2, 3, and 4 summaries. Compare to prior task(s).

**Example (Task 2 — Samuel Okafor):**

**Growth from Task 1 to Task 2:**

| Dimension | Task 1 | Task 2 | Delta |
|-----------|--------|--------|-------|
| **Classification Accuracy** | Meets | Meets | No change — both correct, but Task 2 was faster. |
| **Reasoning Specificity** | Approaching | Meets | Strengthened significantly; moved from naming data elements to explaining mechanisms. |
| **Application Confidence** | Approaching | Meets | Real data boosted confidence; theoretical scenarios remain harder. |
| **Prompt Quality** | — | Meets | New in Task 2; CTCC structure present; governance constraints reflected. |

**Pattern:** Task 1 built theory; Task 2 applied it. Transfer was direct. Ready for Task 3 with confidence, but would benefit from peer discussion on prompt iteration (other participants iterated more; Samuel's first pass was strong but not challenged).

---

**Example (Task 3 — Sophia Rodriguez):**

**Growth from Task 1 → Task 2 → Task 3:**

| Dimension | Task 1 | Task 2 | Task 3 | Trajectory |
|-----------|--------|--------|--------|-----------|
| **Governance** | Meets | Meets | Exceeds | Moved from binary to probabilistic thinking; Tier 2 edge cases now clear. |
| **Prompt Design** | — | Meets | Exceeds | Single-iteration → iterative refinement; now treats prompts as hypothesis-testing. |
| **Audit Depth** | — | Approaching | Exceeds | Documentation jumped in specificity and governance tie-back. |
| **Modality Judgment** | — | Meets | Meets | Consistent; Task 3 justified Agency (iterative) more explicitly. |

**Pattern:** Steady growth with acceleration in Tasks 2 → 3. The leap from Meets to Exceeds corresponds to adopting iterative prompt design. Sophia's learning edge is moving from "correct once" to "refined repeatedly." This is a critical threshold for governance at scale.

---

## FORMAT EXAMPLES BY TASK TYPE

### Task 1: The Guided Pipeline (Scaffolded, Two Sub-Tasks)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions, 1-2 sentences each)
- Growth Story (3-5 sentences explaining tier classification reasoning + combination analysis)
- Participant Reflection (2-3 sentences on their biggest insight)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- [Optional] Multi-task comparison: N/A for Task 1 (first task)

**Estimated Length:** 1-1.5 pages

---

### Task 2: The Supported Pipeline (Real Work, Scaffolded)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions reflecting governance + prompt quality + modality judgment + audit rigor)
- Growth Story (5-7 sentences: what they learned in Task 1, how Task 2 applied/challenged it, what's different about real work)
- Participant Reflection (2-3 sentences)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-Task Comparison: Task 1 → Task 2 (what transferred, what's new)

**Estimated Length:** 1-1.5 pages (same as Task 1, despite more complex work)

---

### Task 3: The Independent Pipeline (Real Work, Minimal Scaffolding)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions: governance at scale, prompt evolution, modality at scale, documentation depth)
- Growth Story (5-7 sentences: trajectory from Tasks 1-2, what independent work revealed, what's now systematic)
- Participant Reflection (2-3 sentences)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-Task Comparison: Task 1 → Task 2 → Task 3 (learning trajectory across tasks)

**Estimated Length:** 1.5-2 pages (slightly longer to accommodate trajectory comparison)

---

### Task 4: The Capstone (Strategic, Self-Directed)

- Header Block (3 lines)
- Performance Snapshot (4 dimensions: pipeline integration, leadership application, peer mentoring, strategic vision)
- Growth Story (5-7 sentences: how individual competency became organizational vision; how Tasks 1-3 enabled this strategic work)
- Participant Reflection (2-3 sentences)
- Facilitator Quick-Hit (Pattern + Discussion Question)
- Multi-Task Comparison: Task 1 → Task 2 → Task 3 → Task 4 (capstone as synthesis)
- [Optional] Capstone Proposal Summary (1 paragraph on the governance protocol, infrastructure, or initiative they designed)

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


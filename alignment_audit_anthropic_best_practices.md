# DC CAP AI Pilot: Alignment Audit Against Anthropic Best Practices
**Prepared April 2, 2026 | Preston Magouirk, CSAO**
**Audit scope:** All 5 pilot deliverables + governance framework vs. Anthropic's published enterprise AI adoption guidance, AI Fluency Index (Feb 2026), and AI Fluency Framework (Dakan & Feller, v1.1)

---

## Executive Summary

DC CAP's 60-day Enterprise AI Leadership Pilot is strongly aligned with Anthropic's core frameworks. The 4D competency model and three interaction modalities are adopted directly from the Dakan-Feller-Anthropic source material, and the phased approach maps well to Anthropic's recommended Activation → Acceleration → Expansion sequence. Five specific gaps warrant attention before launch. Three are structural (measurement, iteration tracking, psychological safety framing) and two are resource-based (Anthropic Academy integration, certification pathway). None require rebuilding existing deliverables. All five can be addressed through targeted additions.

---

## Strong Alignment (What's Working)

### 1. Framework Fidelity
DC CAP adopted the 4Ds and 3 modalities directly from the Dakan-Feller framework, which Anthropic co-developed and published under CC BY-NC-SA 4.0. The kickoff deck's quadrant reveal, the activity guide's competency color coding, and the capstone self-assessment all reinforce the same mental model. This visual consistency across all five deliverables is a genuine strength. Anthropic's own courses on Skilljar use the same framework, so DC CAP participants who later take those courses will encounter familiar vocabulary.

### 2. Activity-Based Pedagogy
The deliverable plan's second design rule ("Participation is the pedagogy") aligns with Anthropic's finding that **iteration is the strongest predictor of AI fluency development.** The AI Fluency Index (February 2026) found that conversations with iteration averaged 2.67 additional fluency behaviors compared to 1.33 in non-iterative interactions. DC CAP's Activity Guide, which requires participants to write prompts, compare outputs, and cross-audit results, builds iteration into every session.

### 3. Governance-First Sequencing
Anthropic's enterprise deployment guidance emphasizes governance infrastructure before scaling. DC CAP's Phase 1 opens with the Governance Walk (Activity 1) and requires governance acknowledgment before any independent Claude use. The four-tier data classification pyramid tracks Anthropic's recommendation for clear data handling protocols, and the "when in doubt, one tier more restrictive" heuristic is sound.

### 4. Distributed Ownership Model
The deliverable plan's third design rule ("Distributed ownership from day one") directly addresses Anthropic's emphasis on leader-led adoption rationale and systematic success sharing. By Phase 3, participants are facilitating sessions and training peers, which mirrors the Train-the-Trainer pathway Anthropic recommends for scaling beyond pilot cohorts.

### 5. Phased Adoption Arc
The four-phase pilot structure (Foundation → Application → Expansion → Evaluation) maps to Anthropic's three-phase model (Activation → Acceleration → Expansion). DC CAP's Phase 1 corresponds to Activation, Phases 2-3 to Acceleration, and Phase 4 (capstone + evaluation) provides the measurement foundation for Expansion in Q3.

---

## Gaps Requiring Action

### GAP 1: No Systematic Fluency Measurement Instrument (CRITICAL)
**What Anthropic recommends:** The AI Fluency Index identifies 11 observable behaviors and 13 unobservable behaviors that define AI fluency. Observable behaviors include iteration on drafts, clarifying goals, questioning model reasoning, identifying missing context, specifying output formats, providing examples, and fact-checking outputs. Unobservable behaviors include transparency about AI's role in work, considering consequences of sharing AI-generated output, and responsibility-related practices.

**What DC CAP currently has:** The "What Sticks" recall check (Can you name the 4Ds? Which modality were you in most this week?). This measures vocabulary retention only. It does not capture actual fluency behaviors, attitudes toward AI, learning orientation, or skill development over time.

**Recommended fix:** Build a pre/post survey instrument that measures:
- AI orientation (attitudes, confidence, perceived value)
- Learning orientation (growth mindset toward AI skills)
- Current use cases and frequency
- AI knowledge (conceptual understanding)
- Applied skills (prompt writing + output evaluation tasks)

This instrument should produce individual and cohort-level scores that enable pre/post comparison, informing both the June board briefing and Q3 scaling decisions.

**Status:** IN PROGRESS — survey instrument being built alongside this audit.

---

### GAP 2: No Iteration Tracking Mechanism
**What Anthropic recommends:** The AI Fluency Index found that iteration (revising prompts, refining outputs, asking follow-up questions) is the single strongest predictor of broader fluency development. Anthropic recommends tracking iteration patterns as a leading indicator.

**What DC CAP currently has:** Activity 2 (The Prompt Lab) asks participants to compare weak and strong prompts, and Activity 4 (The Output Audit) introduces structured review. Both build iteration skills. However, there is no ongoing mechanism to track whether participants are iterating in their daily Claude use between structured activities.

**Recommended fix:** Add a lightweight weekly self-report to the check-in protocol: "How many times this week did you revise a prompt or push back on a Claude output?" This can be a single Likert item (Never / Once / A few times / Most sessions / Every session) added to the existing weekly check-in. Low burden, high signal. Also consider pulling Claude usage logs if available through the Enterprise admin panel to triangulate self-report data.

---

### GAP 3: Missing Psychological Safety Framing
**What Anthropic recommends:** Anthropic's enterprise adoption guidance names three anchoring principles: (1) leader-led articulation of adoption rationale, (2) fostering organizational growth mindset, and (3) systematic sharing of successes. The growth mindset principle specifically calls out psychological safety for experimentation — participants need permission to fail, produce bad outputs, and iterate without judgment.

**What DC CAP currently has:** The kickoff deck establishes the "co-investigator" frame (Slide 2) and the "Claude drafted it. You own it." accountability principle (Slide 8). The Train-the-Trainer toolkit includes guidance on handling "I don't see why I need this" and "worried about job implications." These are solid.

**What's missing:** An explicit psychological safety norm in the kickoff. Anthropic's guidance emphasizes that the growth mindset principle should be established at the very beginning, before any hands-on work. Currently, the kickoff moves from framing (Slides 1-3) directly to frameworks (Slides 4-8) without a moment that names the learning norm: "Bad prompts are expected. Confusing outputs are normal. That's why this is a 60-day learning experience."

**Recommended fix:** Add 1-2 sentences to Slide 2 or create a brief interstitial between the Context Block and the 4Ds Block that explicitly names the safety norm. This can be as simple as: "Over the next 60 days, you will write prompts that don't work. You will get outputs that miss the mark. That is the process. Every iteration teaches something." This frames struggle as expected rather than as failure.

---

### GAP 4: No Connection to Anthropic Academy (Free Resources)
**What Anthropic offers:** Anthropic Academy (anthropic.skilljar.com) provides free courses directly aligned to the 4D framework:
- *AI Fluency: Framework & Foundations* — the foundational course
- *Teaching AI Fluency* — for Train-the-Trainer candidates
- *Driving Enterprise Adoption of Claude* — for implementation leaders (Preston)

These courses include formative assessments, completion certificates, and learning analytics (progress, quiz scores, time spent). They are free. They use the exact same framework DC CAP has adopted.

**What DC CAP currently has:** No reference to these courses in any deliverable.

**Recommended fix:** Integrate Anthropic Academy as a recommended supplementary resource. Specifically:
- Add the *Framework & Foundations* course as optional pre-work before the April 6 kickoff
- Route T3 candidates (Deliverable 4) to the *Teaching AI Fluency* course during Phase 3
- Preston should complete *Driving Enterprise Adoption of Claude* if not already done
- Consider whether Academy completion certificates could count toward DC CAP's internal credentialing

---

### GAP 5: Missing Discernment Emphasis on Output Questioning
**What Anthropic found:** The AI Fluency Index reveals that users iterate frequently but are significantly less likely to question model reasoning on polished-looking outputs (code, formatted documents, structured analyses). This is the Discernment gap — people are more critical of rough outputs and less critical of outputs that look finished.

**What DC CAP currently has:** Activity 4 (The Output Audit) introduces structured output evaluation, and Card 1 (Show Your Work) makes Claude outputs visible to peers. Card 3 (Skill Stress Test) pushes participants to find failure modes. These are strong Discernment activities.

**What's missing:** The audit checklist in Activity 4 should explicitly include a "polished output" trap — an output that looks clean and professional but contains a subtle factual error, an inappropriate tone for the stated audience, or a misframed data point. Currently the activity asks participants to audit "two Claude outputs generated during Activities 2-3," which may produce outputs that are obviously rough. The Discernment skill is tested when the output looks good and the errors are hidden.

**Recommended fix:** Add one pre-built "polished output" scenario to Activity 4 that all participants evaluate. This creates a common reference point for the debrief and ensures every participant encounters the Discernment challenge Anthropic's research identified. The output should look professional, use correct formatting, and contain 2-3 subtle errors (a plausible but incorrect statistic, a tone mismatch for the stated audience, and a data framing issue flagged by DC CAP's data-interpreter rules).

---

## Summary Scorecard

| Dimension | Alignment | Priority Action |
|-----------|-----------|----------------|
| Framework Fidelity (4Ds + 3 Modalities) | ●●●●● Strong | None needed |
| Phased Adoption Model | ●●●●○ Strong | Minor: map explicitly to Anthropic's 3-phase language for board/funder audiences |
| Governance Infrastructure | ●●●●● Strong | None needed |
| Activity-Based Learning | ●●●●○ Strong | Minor: add polished-output Discernment trap (Gap 5) |
| Measurement & Assessment | ●○○○○ Weak | CRITICAL: build pre/post instrument (Gap 1) |
| Iteration Tracking | ●●○○○ Moderate | Add weekly self-report item (Gap 2) |
| Psychological Safety Framing | ●●●○○ Moderate | Add explicit norm to kickoff (Gap 3) |
| Anthropic Resource Integration | ●○○○○ Weak | Connect to Anthropic Academy courses (Gap 4) |
| Growth Mindset / Success Sharing | ●●●●○ Strong | Already embedded in distributed ownership model |
| Scalability Planning | ●●●●○ Strong | T3 toolkit and Q3 rollout plan are solid |

---

## Recommended Prioritization

1. **Before April 6 (launch):** Address Gap 1 (survey instrument — in progress), Gap 3 (add 2 sentences to kickoff deck)
2. **During Phase 1 (April 6-22):** Address Gap 2 (add iteration tracking item to weekly check-ins), Gap 5 (build polished-output scenario for Activity 4)
3. **During Phase 2-3 (April 23 - May 20):** Address Gap 4 (integrate Anthropic Academy courses, especially for T3 candidates)

---

*Sources: Anthropic AI Fluency Index (Feb 2026), Anthropic Enterprise Deployment Guidance, Dakan & Feller AI Fluency Framework v1.1, Anthropic Academy course catalog, Anthropic Economic Index (Jan 2026), Building Effective AI Agents (Anthropic Research)*

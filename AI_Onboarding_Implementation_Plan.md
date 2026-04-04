# DC CAP AI Onboarding: Comprehensive Implementation Plan
**Prepared April 4, 2026 | Preston Magouirk, CSAO**
**Source: Adversarial audit of onboarding experience vs. enterprise AI deployment best practices**

---

## Purpose

This plan translates the research-backed best practices from DC CAP's `ai_nonprofit_onboarding_strategy` into actionable implementation steps, organized by priority and timeline. Each item maps directly to a research finding, identifies the current gap, specifies the deliverable, assigns ownership, and sets a deadline.

The pilot runs April 6 through June 5. The June board briefing and Q3 full-org rollout decisions depend on what gets implemented in the remaining weeks. The plan is organized into three tiers: Critical (determines whether the pilot produces evidence), Recommended (determines whether adoption sticks), and Strategic (determines whether Q3 rollout succeeds at scale).

---

## Audit Summary: Current State vs. Research Standard

| Research Best Practice | Current State | Gap Severity | Plan Reference |
|---|---|---|---|
| Pre/post fluency measurement instrument | "What Sticks" vocabulary recall only | CRITICAL | C1 |
| Three-tier KPI framework (engagement → proficiency → impact) | No KPI targets defined | CRITICAL | C2 |
| Role-specific tiered training pathways | Generic examples (email, meetings) | CRITICAL | C3 |
| Iteration tracking (strongest fluency predictor) | No ongoing mechanism | CRITICAL | C4 |
| Workflow redesign templates (vs. layering AI on old processes) | Activities exist; no real-work transition | HIGH | R1 |
| Psychological safety norms (experiential, not declarative) | "Co-investigator" frame; no struggle normalization | HIGH | R2 |
| Governance-as-permission framing ("What You CAN Do") | Restriction-focused; creates paralysis | HIGH | R3 |
| Polished output Discernment trap | Activity 4 audits rough outputs only | HIGH | R4 |
| Plain-English glossary for non-technical staff | Technical jargon unexplained (6/10 confused) | HIGH | R5 |
| Anthropic Academy integration | No reference in any deliverable | MODERATE | R6 |
| Structured support for high-anxiety participants | No buddy system or differentiated support | MODERATE | R7 |
| Champion-facilitated peer learning (vs. leader-led demos) | Live AI Fridays are Preston-led | MODERATE | R8 |
| Crawl-walk-run-fly progressive capability staging | Phased adoption exists; no explicit capability gates | STRATEGIC | S1 |
| Cohort-based Q3 rollout structure (85-96% completion rates) | Q3 planning deferred | STRATEGIC | S2 |
| Apprenticeship pairing protocol | T3 toolkit exists; no shadowing structure | STRATEGIC | S3 |
| Spaced repetition reinforcement schedule | No post-pilot reinforcement plan | STRATEGIC | S4 |
| Three-tier measurement for board and funder reporting | No board-ready metrics framework | STRATEGIC | S5 |
| AI onboarding as talent development and retention tool | Not framed as career investment | STRATEGIC | S6 |
| Middle manager resistance and ADKAR change management | No dedicated manager support tier | HIGH | V1 |
| Organizational Claude Projects as knowledge infrastructure | Projects mentioned but not operationalized | MODERATE | V2 |
| Domain-specific prompt template arsenal | CTCC template taught; no library exists | MODERATE | V3 |
| Hallucination mitigation and LEAP verification framework | Discernment activity exists; no LEAP protocol | HIGH | V4 |
| Privacy-by-design operational protocols | Governance exists; no anonymization or audit protocols | HIGH | V5 |

---

## TIER 1: CRITICAL IMPLEMENTATIONS
### These determine whether the pilot produces evidence for the June board briefing

---

### C1: Deploy Pre/Post Fluency Measurement Instrument

**Research basis:** "Organizations that invest systematically in people achieve 60% adoption rates versus 30% without training." The AI Fluency Index identifies 11 observable and 13 unobservable fluency behaviors. BCG and McKinsey recommend 3-layer measurement: engagement (30-60 days), proficiency (60-90 days), business impact (90-180 days). Without a baseline, the June board briefing has no quantitative story.

**Current state:** The `ai_fluency_prelaunch_survey.html` exists. The pre-launch survey will be collected from all leadership users the week of April 6-10, before any sessions begin. The assessment is the first thing participants encounter.

**What to build:**

1. **Confirm baseline collection is complete by April 10.** All leadership users must submit pre-assessment before attending any pilot session. Store responses in analyzable format (CSV export or structured data).

2. **Ensure the instrument measures all 5 dimensions:**
   - AI Orientation (attitudes, confidence, perceived value): 5-7 Likert items
   - Learning Orientation (growth mindset toward AI skills): 4-5 items
   - Current AI Use (frequency, tools, comfort level): 5-6 items
   - AI Knowledge (conceptual understanding of 4Ds, hallucination, context window): 5-6 items
   - Applied Skills (scenario-based prompt writing + output evaluation): 2-3 worked examples

3. **Schedule the post-assessment for June 1-3** (before the June 5 capstone). Allow 3 business days for analysis before the board briefing.

4. **Analysis output:** Individual scores, cohort-level radar charts across 5 dimensions, pre/post delta with effect sizes. This becomes the centerpiece evidence for the June board slide on fluency development.

**Owner:** Preston (instrument design, administration, analysis)
**Deadline:** Mid-pilot baseline by April 11 if pre-launch not collected; post-assessment scheduled for June 1-3
**Deliverable:** Updated `ai_fluency_prelaunch_survey.html` + analysis script (R tidyverse) + board-ready visualization

---

### C2: Define Three-Tier KPI Framework with Specific Targets

**Research basis:** "Most organizations measure the wrong things — 23% can accurately measure AI ROI despite 89% deploying tools." The strategy prescribes three measurement tiers: action counts, workflow time saved, and mission impact. Anthropic's internal data shows usage in daily work increased from 28% to 59% year-over-year, with power users reporting 100%+ productivity increases.

**Current state:** No KPI targets defined anywhere in the pilot documentation. No engagement, proficiency, or impact metrics tracked.

**What to build:**

1. **Tier 1 — Engagement KPIs (track weekly starting now):**
   - Monthly active users: Target 80%+ of pilot cohort (7+ of 9) by Day 60
   - Prompts per participant per week: Establish baseline Week 1, target 15+ by Week 6
   - Active user segmentation: Light (1-5 prompts/week), Moderate (6-19), Heavy (20+)
   - Data source: Claude Enterprise admin panel usage logs (confirm access with IT)

2. **Tier 2 — Proficiency KPIs (track biweekly starting Week 3):**
   - Iteration frequency: Increasing week-over-week (self-report + admin logs)
   - Fluency behavior count: 70%+ participants demonstrate 3+ observable behaviors by Day 60 (measured via observation during activities and self-report)
   - Session depth: Average conversation length increasing over time
   - Observable behaviors to track (from Anthropic AI Fluency Index): iteration on drafts, clarifying goals, questioning model reasoning, identifying missing context, specifying output formats, providing examples, fact-checking outputs

3. **Tier 3 — Impact KPIs (track at Day 45 and Day 60):**
   - Documented workflow redesigns: Minimum 2 per unit (6 total across 3 units)
   - Time savings evidence: Each participant documents at least 1 task with before/after time comparison
   - Quality improvement evidence: At least 3 examples of AI-assisted outputs rated higher quality than previous manual outputs (peer-assessed)
   - Mission connection: At least 1 example per unit of AI-freed time redirected to high-value student interaction

4. **Create a KPI tracking dashboard** (simple Monday.com board or spreadsheet) updated weekly by Preston or designated champion.

**Owner:** Preston (framework design, tracking setup) + champions (weekly data contribution)
**Deadline:** Framework defined by April 7; tracking dashboard live by April 11; first data pull by April 14
**Deliverable:** KPI Framework one-pager + Monday.com tracking board or R dashboard

---

### C3: Build and Deploy Role-Specific Training Modules

**Research basis:** "Deploy tiered onboarding with role-specific pathways, not one-size-fits-all training. Enterprise research consistently shows three-tier models deliver 3.8x higher ROI than ad-hoc approaches." The site gap analysis found 9/10 simulated participants couldn't translate the framework to their actual work, and 5 distinct role clusters are underserved by current generic examples.

**Current state:** Activities use generic examples (email drafts, meeting summaries). The site gap analysis documents specific participant frustrations by role. No domain-specific modules exist.

**What to build — 6 domain modules aligned to DC CAP's functional units:**

**Module structure (consistent across all 6):**
- Real-work scenario from the unit's actual workflows
- Governance tier classification for the scenario's data
- Worked prompt example using the Context-Task-Content-Constraints template
- Output evaluation exercise (what's good, what needs revision)
- "What You CAN Do" permission list for the role (addresses governance paralysis)

**Module 1: Development**
- Scenario: Brainstorm messaging angles for a foundation grant focused on first-gen students
- Governance: Tier 3 (strategy documents, program models — no individual donor data)
- Prompt example: "We're applying to a foundation that prioritizes first-generation college students. Our program serves X scholars with Y outcomes. Help me brainstorm 5 messaging angles that connect our data to their priorities."
- Output evaluation: Does the messaging match DC CAP's approved evidence language? Does tone match funder expectations?
- Permission guide: Anonymization strategy for donor communications; what funder context is safe to share
- Relevant skills: funder-framing, dc-cap-org-intelligence

**Module 2: Communications**
- Scenario: Draft a student success email update using DC CAP's voice
- Governance: Tier 3-4 (program descriptions, public data)
- Prompt example: "Draft a 200-word email to scholars about the fall renewal deadline. Use DC CAP's voice: warm, direct, student-centered. Avoid corporate tone. Include the specific deadline and 2 action steps."
- Output evaluation: Compare Claude's draft against DC CAP's brand voice. What needs editing to sound like DC CAP?
- Permission guide: How to use Skills and Projects to encode voice standards; editing vs. accepting Claude drafts
- Relevant skills: dccap-brand, checking-communications, dc-cap-student-outreach

**Module 3: Student Success**
- Scenario: Use real DC CAP program descriptions (anonymized) to identify student support gaps and draft intervention strategies
- Governance: Tier 3 (program models, de-identified outcomes); Tier 1 prohibited (individual student records)
- Prompt example: "Here's our Scholar Success Program overview [anonymized]. Based on this structure, what support needs might first-gen students face during their second year that aren't explicitly addressed?"
- Output evaluation: Does Claude's analysis reflect actual program design? Where does it miss DC CAP-specific context about scholar populations?
- Permission guide: What program data is safe; workflow for "Claude draft → counselor review → finalize"; absolute prohibition on individual student data
- Relevant skills: dc-cap-faq, dc-cap-situational-email

**Module 4: GEAR UP**
- Scenario: Analyze program activity data (de-identified, aggregated) to identify engagement patterns and prepare reporting narratives
- Governance: Tier 2-3 (de-identified aggregates, N>10 per cell); GEAR UP federal compliance adds an additional layer
- Prompt example: "Here are 3 months of GEAR UP program participation by activity type [de-identified, aggregated]. What engagement patterns emerge? Which activities show the strongest attendance trends?"
- Output evaluation: Cross-check Claude's statistical claims against raw data; verify GEAR UP reporting language meets federal requirements
- Permission guide: What counts as "de-identified" under GEAR UP reporting standards; what aggregation thresholds apply; which reporting narratives can be AI-assisted vs. which require manual compliance review
- Relevant skills: data-interpreter, sf-demo-data

**Module 5: Operations**
- Scenario: Analyze budget forecasts for sensitivity to enrollment assumptions; streamline administrative processes
- Governance: Tier 2 (internal financial data, anonymized line items); Tier 1 prohibited (individual staff compensation, vendor contracts with confidentiality clauses)
- Prompt example: "Review this 5-year budget projection [anonymized line items, no vendor names]. What assumptions carry the most risk if enrollment drops 15%? What would a 10% increase in program costs mean for year 3?"
- Output evaluation: Check Claude's analysis against actual budget constraints; verify assumptions are reasonable given DC CAP's operating context
- Permission guide: What financial data can go to Claude (anonymized projections, aggregate budget categories) vs. what stays manual (individual salaries, specific vendor terms, board-confidential financials)
- Relevant skills: executive-summary-formatter

**Module 6: Executive Office**
- Scenario: Prepare board briefing materials, strategic analysis, and cross-functional synthesis
- Governance: Tier 2-3 (strategy documents, board materials, aggregate outcomes); Tier 1 prohibited (board member personal information, personnel decisions)
- Prompt example: "Here's our Q2 program data [aggregated outcomes by program]. Draft a 1-page executive summary for the board that highlights the 3 most significant trends and connects them to our strategic plan priorities."
- Output evaluation: Does the framing match board-level communication standards? Is the data interpretation accurate per DC CAP's benchmarking rules? Would this survive a board member's follow-up questions?
- Permission guide: What strategic documents are safe for Claude context; how to prepare board materials with AI assistance while maintaining executive judgment on framing and recommendations
- Relevant skills: board-deck, executive-summary-formatter, data-interpreter, dc-cap-org-intelligence

**Deployment approach:**
- Build as additions to `phase1_activity_guide.html` (new domain-specific tabs) or as standalone one-pagers
- Each participant receives their unit's module + encouraged to explore one adjacent module
- Module outputs feed the capstone showcase (Deliverable 5)

**Owner:** Preston (module design) + unit leads (scenario validation, sample data provision)
**Deadline:** Modules 1-3 (Development, Communications, Student Success) by April 14; Modules 4-6 (GEAR UP, Operations, Executive Office) by April 18
**Deliverable:** 6 domain-specific activity modules (HTML additions or standalone resources)

---

### C4: Implement Iteration Tracking

**Research basis:** "The AI Fluency Index found that iteration is the single strongest predictor of broader fluency development. Conversations with iteration averaged 2.67 additional fluency behaviors compared to 1.33 in non-iterative interactions."

**Current state:** Activities 2 and 4 build iteration skills during structured sessions. No mechanism tracks whether participants iterate in daily Claude use between activities.

**What to build:**

1. **Weekly self-report item added to check-in protocol:**
   - "How many times this week did you revise a prompt or push back on a Claude output?"
   - Response scale: Never / Once / A few times / Most sessions / Every session
   - Takes 30 seconds. Add to existing weekly check-in (or create a 3-question weekly pulse if no check-in exists).

2. **Enterprise admin usage data (if available):**
   - Confirm with IT whether Claude Enterprise admin panel provides conversation counts, session lengths, and apparent revision patterns per user
   - If available: pull weekly, cross-reference with self-report to validate
   - If unavailable: self-report is the primary data source

3. **Early warning triggers:**
   - Any participant reporting "Never" for 2+ consecutive weeks → schedule 1:1 coaching conversation
   - Any participant reporting "Every session" consistently → candidate for champion role or T3 pathway
   - Track trends across cohort: is iteration frequency increasing, plateauing, or declining?

4. **Integrate into KPI dashboard** (C2) as a Tier 2 proficiency metric.

**Owner:** Preston (add to check-in protocol, analyze data) + champions (encourage iteration during activities)
**Deadline:** Check-in item added by April 7; first data collected April 14
**Deliverable:** Updated check-in protocol + iteration tracking column in KPI dashboard

---

## TIER 2: RECOMMENDED IMPLEMENTATIONS
### These determine whether adoption sticks beyond structured activities

---

### R1: Create Workflow Redesign Templates and Real-Work Transition Plan

**Research basis:** "Full automation slowed teams by 17.7%; targeted augmentation increased performance by 24.3%." McKinsey: "Most companies layer AI onto old workflows and wonder why productivity stalls." 10/10 simulated participants expressed frustration at practice scenarios and wanted real work. The "demo effect" kills 88% of pilots.

**Current state:** Activities guide practice with examples. No documented workflow redesign process. No "old process → new process with Claude" mapping.

**What to build:**

1. **Workflow Redesign Template (one-page fillable):**
   - Task name and frequency (daily, weekly, monthly)
   - Current process: Steps, time estimate, who's involved
   - Proposed AI-integrated process: Where Claude enters, what it drafts, who reviews, what changes
   - Governance check: What data tier applies? What review is required?
   - Measured outcome: Time saved, quality change, or capacity freed
   - Example: "Angela drafts program update email (2 hours) → Claude drafts (10 min) → Angela reviews and edits for voice (30 min) → Communications review (15 min). Net savings: 65 minutes per email, with higher consistency."

2. **Real-Work Transition Protocol (Weeks 4-6):**
   - Week 4: Each participant identifies one low-risk, high-frequency task from their actual work
   - Week 4: Map task to governance tier; get approval from Preston or champion
   - Week 5: Execute task with Claude; peer reviewer audits output quality
   - Week 5: Document workflow using the template above
   - Week 6: Present workflow redesign in weekly session; cohort provides feedback
   - Output: 9 completed workflow redesign templates (one per participant) — direct evidence for board briefing

3. **Scaling mechanism:** Successful redesigns become templates for Q3 rollout. Each unit's best workflow becomes the demonstration case for new cohort members.

**Owner:** Preston (template design, protocol) + participants (execute) + champions (peer review)
**Deadline:** Template by April 11; protocol communicated by April 14; first real-work attempts by April 21
**Deliverable:** Workflow Redesign Template (HTML or fillable PDF) + 9 completed templates by May 15

---

### R2: Strengthen Psychological Safety from Declarative to Experiential

**Research basis:** "83% of executives believe psychological safety improves AI success; only 39% rate their organization's psychological safety as 'very high.' When psychological safety is absent, people retreat into silence, stop experimenting, and stop learning." 7/10 simulated participants exhibited anxiety about doing it "right." The alignment audit flagged this as GAP 3.

**Current state:** The kickoff deck established the "co-investigator" frame and the "Claude drafted it. You own it." accountability line. These are professional and appropriate. What's missing is the experiential reinforcement: structural moments where struggle is celebrated, failure is shared publicly, and leaders model vulnerability.

**What to build:**

1. **Opening ritual for weekly sessions (2 minutes):**
   - "What's the worst prompt you wrote this week, and what did you learn from it?"
   - Preston goes first for the first 3 weeks, modeling that bad prompts are expected
   - This normalizes failure through repetition, not through a single slide

2. **"Failure Wall" in Monday.com or shared channel:**
   - Dedicated space where participants post failed prompts and what they learned
   - Preston and champions contribute first to establish the norm
   - Celebrate the most instructive failure each week

3. **Explicit job security framing (if not already delivered at kickoff):**
   - Ensure this language has been communicated: "This is about supporting you in doing more of what only humans can do — judgment, relationship, mission alignment — and less of what takes time away from that."
   - Reinforce at the start of Phase 2 when activities shift from practice to real work

4. **Champion-modeled vulnerability:**
   - T3 candidates share their own learning struggles during Phase 2 sessions
   - This demonstrates that even the most proficient users are still learning

**Owner:** Preston (opening ritual, failure wall setup) + champions (model vulnerability)
**Deadline:** Opening ritual starts at next weekly session; failure wall live by April 11
**Deliverable:** Updated weekly session agenda + Monday.com "Failure Wall" board or Slack channel

---

### R3: Build "What You CAN Do" Role-Based Permission Guides

**Research basis:** "Governance clarity should enable use, not block it." Robert (finance) expressed paralysis: "I get the tier system, but am I allowed to ask questions about budget forecasts?" Marcus (data): "I know PII is forbidden. But what about de-identified data?" Restriction-focused framing creates caution and compliance; permission-focused framing creates confidence and experimentation.

**Current state:** Governance documentation is thorough on restrictions. Lighter on positive permissions. Participants know what they cannot do; they're less clear on what they can safely do in their specific role.

**What to build:**

One 1-2 page permission guide per role cluster (5 total), structured as:

- **"You CAN" list:** 5-7 specific tasks with example prompts that are safe for this role
- **"You CANNOT" list:** 3-4 clear boundaries with rationale
- **Decision test questions:** 2-3 self-check questions ("Is this data general or specific? Would I be comfortable if this appeared externally?")
- **Example workflows:** 2 end-to-end examples showing task → prompt → output → review → use

These guides are additive to the governance framework. They don't loosen restrictions. They make existing permissions visible and actionable.

Integrate with the role-specific training modules (C3) — each module's permission section becomes the guide.

**Owner:** Preston (template design) + domain experts (role-specific content review)
**Deadline:** Delivered alongside C3 modules (April 14-18)
**Deliverable:** 5 role-based permission guides (1-2 pages each), linked from start_here.html and pilot_hub.html

---

### R4: Build Polished Output Discernment Trap

**Research basis:** "The polished output paradox — users are more critical of rough outputs and less critical of outputs that look finished." Anthropic's AI Fluency Index shows Discernment is tested when the output looks good and the errors are hidden. This is the gap between "I can spot a bad draft" and "I can catch a subtle error in a professional document."

**Current state:** Activity 4 (The Output Audit) asks participants to audit outputs from Activities 2-3, which are typically rough practice outputs. No pre-built scenario with professional-looking output containing subtle errors.

**What to build:**

1. **One pre-built "Polished Output Audit" scenario:**
   - Context: Draft funder email about scholar retention (plausible DC CAP task)
   - Output: Professionally formatted, correct grammar, strong structure
   - Embedded errors (3):
     - Plausible but incorrect statistic (e.g., "35% of first-gen students transfer" when actual figure is 28%)
     - Tone mismatch for audience (too casual for a foundation funder)
     - Data framing issue (presents retention as "strong" without noting program changes that affect comparability)
   - Debrief questions: Did you catch the errors? What made them hard to spot? What verification steps would catch these in real work?

2. **Deploy as Activity 4 enhancement or standalone exercise during a weekly session.**

3. **Create a norm:** Every output that looks polished gets the same 3-question check: Is the data accurate? Does the tone match the audience? Would the data interpreter approve this framing?

**Owner:** Preston (scenario design) + data interpreter skill (verify error plausibility)
**Deadline:** April 18 (ready for Week 3 session)
**Deliverable:** Polished Output Audit scenario added to phase1_activity_guide.html or as standalone exercise

---

### R5: Deploy Plain-English Glossary

**Research basis:** "75% of employees don't feel confident using AI; vocabulary gaps drive confidence loss." 6/10 simulated participants expressed confusion about technical terms. Denise: "What does 'context window' mean? Is that about the window on my screen?"

**Current state:** `AI_Fluency_Key_Terminology.md` exists in the repo but uses technical language appropriate for reference. No plain-English version designed for non-technical participants.

**What to build:**

A 1-page plain-English glossary covering the 10-12 terms that appear most frequently in pilot materials. Each definition should be one sentence in conversational language, followed by one sentence explaining why it matters for the participant's work.

Key terms to define:
- Hallucination, Context window, Prompt, Prompt engineering, Iteration, Token, Model, System prompt, Project (Claude), Skill (Claude), Augmentation/Automation/Agency, The 4Ds (one-line each)

**Distribution:** Link from pilot_hub.html, start_here.html, and the Phase 1 Activity Guide. Reference in weekly sessions: "If a term is confusing, check the glossary."

**Owner:** Preston (draft) + non-technical staff member (review for clarity)
**Deadline:** April 9
**Deliverable:** `AI_Glossary_Plain_English.html` or section added to start_here.html

---

### R6: Connect to Anthropic Academy

**Research basis:** Anthropic Academy (anthropic.skilljar.com) provides free courses aligned to the exact 4D framework DC CAP adopted: "AI Fluency: Framework & Foundations," "Teaching AI Fluency" (for T3 candidates), and "Driving Enterprise Adoption of Claude" (for implementation leaders). These include formative assessments and completion certificates.

**Current state:** No reference to Anthropic Academy in any deliverable. Participants who want supplementary structured learning have no pathway.

**What to build:**

1. **Add Anthropic Academy as a recommended resource in start_here.html and pilot_hub.html:**
   - "Framework & Foundations" course: Recommended for any participant who wants structured supplementary learning
   - "Teaching AI Fluency" course: Required for T3 candidates during Phase 3
   - "Driving Enterprise Adoption of Claude" course: Recommended for Preston and Angela

2. **Consider whether Academy completion certificates count toward DC CAP's internal credentialing or professional development requirements.**

3. **Track Academy enrollment and completion as an optional Tier 1 engagement metric.**

**Owner:** Preston (resource integration, T3 routing)
**Deadline:** Links added by April 14; T3 routing communicated by May 1
**Deliverable:** Updated start_here.html and pilot_hub.html with Academy links and descriptions

---

### R7: Implement Structured Support Plan for High-Anxiety Participants

**Research basis:** "Trust in direct managers is the strongest predictor of whether people engage with organizational change." Denise (tech-averse) is at HIGH risk of disengagement without explicit buddy system. Robert and Angela are at MEDIUM risk. One participant disengaging stalls cohort momentum — the remaining cohort interprets it as permission to step back.

**Current state:** No documented differentiated support pathways. No buddy system. No 1:1 check-in schedule for high-anxiety participants.

**What to build:**

1. **Buddy system pairing (immediate):**
   - Pair Denise with the most patient, encouraging champion or advanced user in the cohort
   - Buddy commitment: One 15-minute 1:1 per week to answer questions, co-work on a task, and normalize struggle
   - Buddy does not evaluate; buddy supports

2. **Differentiated check-in cadence:**
   - Denise: Weekly 1:1 with Preston or champion (10 min) through Phase 1, biweekly in Phase 2
   - Robert: Biweekly finance-specific check-in addressing governance questions
   - Angela: Biweekly check-in focused on real-work application and confidence building

3. **Explicit permission communication:**
   - Denise: "You do not need to learn everything at once. Start with one task. That's enough."
   - Robert: "You're allowed to experiment with budget questions as long as data stays at Tier 2 or below. Here's the guide."
   - Angela: "Start with the program work you know best. Use Claude to draft what you'd normally spend 2 hours on. See what happens."

**Owner:** Preston (pairing decisions, check-in schedule) + champions (buddy role)
**Deadline:** Buddy assignments by April 7; first check-ins by April 14
**Deliverable:** Buddy pairing assignments + differentiated check-in calendar

---

### R8: Evolve Live AI Fridays to Champion-Facilitated Peer Learning

**Research basis:** "Knowledge retention scores are 3.2x better for collaborative versus passive learners." GitHub's AI Advocate Program identifies four champion roles: making AI real, helping others start, continuous learning, and surfacing insights. The research recommends evolving from leader-led demonstrations to peer-facilitated learning sessions.

**Current state:** Live AI Fridays exist. They are Preston-led demonstrations. The strategy recommends shifting to champion-facilitated sessions where staff share discoveries and problem-solve together.

**What to build:**

1. **Transition timeline:**
   - Weeks 1-3: Preston leads (current state, appropriate for early pilot)
   - Weeks 4-6: Co-facilitation (Preston + one champion per session)
   - Weeks 7+: Champion-led with Preston as advisor and backup

2. **Session format evolution:**
   - Current: Preston demonstrates a workflow or skill
   - Target: "Show and tell" — 2-3 participants present their week's experiment (5 min each) + group problem-solving on a challenge someone is facing (15 min) + one new technique or tip (5 min, champion-led)

3. **Celebration mechanism:** Recognize the most instructive experiment each Friday (success or failure). Social recognition drives adoption.

**Owner:** Preston (transition plan) + champions (co-facilitation, eventual leadership)
**Deadline:** Co-facilitation starts Week 4 (April 28); champion-led starts Week 7 (May 18)
**Deliverable:** Updated Live AI Fridays agenda template + champion facilitation guide (can draw from T3 toolkit)

---

## TIER 3: STRATEGIC IMPLEMENTATIONS
### These determine whether Q3 rollout succeeds at organizational scale

---

### S1: Formalize "Crawl-Walk-Run-Fly" Capability Staging

**Research basis:** "Organizations deploying advanced capabilities before staff master basics overwhelm people and trigger resistance." The staged approach: Crawl (simple assistive tasks), Walk (complex tasks with Projects), Run (custom workflows and citizen automation), Fly (advanced agentic systems).

**What to build:** A capability progression framework that maps to the 4 pilot phases and extends into Q3. Include explicit criteria for advancing (e.g., "demonstrated 3+ fluency behaviors consistently for 2 weeks before advancing from Walk to Run"). Acknowledge that program staff may remain at Walk while technical staff reach Fly — and frame that as appropriate differentiation.

**Owner:** Preston
**Deadline:** Draft by May 1; finalized before Q3 planning
**Deliverable:** Capability Staging Framework (1-2 pages) integrated into Q3 rollout plan

---

### S2: Design Cohort-Based Q3 Rollout Structure

**Research basis:** "Cohort-based learning achieves 85-96% completion versus 2-12% for self-paced courses." For DC CAP's 30-50 staff, this means either a single cohort (if bandwidth allows) or two staggered cohorts where pilot graduates support the second wave.

**What to build:**

1. **Rollout architecture:**
   - Cohort 1 (Weeks 1-8): Remaining staff (20-40 people) in a condensed version of the pilot curriculum, supported by 2-3 T3 graduates from the pilot
   - Cohort 2 (if needed, Weeks 9-16): Stragglers, new hires, and anyone who needs more time
   - Pilot graduates serve as peer coaches and buddy-system partners

2. **Evergreen new-hire onboarding:**
   - Week 1: Self-paced foundation (AI basics, governance, approved tools)
   - Week 2-4: Buddy system with trained colleague
   - Month 2: Join next monthly live session
   - Month 3: Complete role-specific training module

3. **Decision criteria for scale vs. pause vs. pivot** (needed for June board briefing):
   - Scale: 70%+ monthly active users, 60%+ demonstrating iteration, 3+ documented workflow redesigns
   - Pause: 40-70% active users, proficiency plateau, budget/bandwidth constraints
   - Pivot: Below 40% active users, leadership misalignment, governance incidents

**Owner:** Preston + Angela Cammack (COO) + Eric Waldo (CEO)
**Deadline:** Draft framework by May 15; final decision criteria by May 25 (before board briefing)
**Deliverable:** Q3 Rollout Plan document + decision criteria matrix

---

### S3: Build Apprenticeship Pairing Protocol

**Research basis:** "McKinsey identifies apprenticeship as most effective for AI competency development because skills markets are moving too fast for static courses. When people teach others they retain 90% of material versus 5% for lecture."

**What to build:** Formalize a 2-3 week shadowing structure where pilot graduates pair with Q3 cohort members on real work tasks. The T3 toolkit (Deliverable 4) is the foundation; this extends it into ongoing practice. Include: pairing criteria, shadowing schedule (2 sessions/week, 30 min each), co-working protocol (work on a real task together, not observation), and feedback loop.

**Owner:** Preston + T3 candidates
**Deadline:** Protocol designed by May 15; tested during remaining pilot weeks; deployed at Q3 launch
**Deliverable:** Apprenticeship Pairing Protocol (1-2 pages) as addendum to T3 toolkit

---

### S4: Establish Spaced Repetition Reinforcement Schedule

**Research basis:** "People forget approximately 70% of new information within 24 hours. The AI skills half-life is only 3-4 months. Monthly training significantly more effective than 3-month, 6-month, or 12-month intervals. Spaced repetition at increasing intervals (1 week, 1 month, 3 months) improves long-term memory by 35%."

**What to build:**

Post-pilot reinforcement schedule:
- Week 1-2 post-pilot (June 6-19): Daily practice encouraged; weekly check-in maintained
- Weeks 3-8 (June 20 - July 31): Weekly microlearning touchpoints (10-15 min self-paced modules on new techniques or advanced applications)
- Months 3-6 (August - November): Monthly reinforcement sessions (60-90 min, champion-facilitated)
- Month 6+ (December onward): Quarterly advanced topics and capability refresh

Each reinforcement session should introduce one new technique, revisit one foundational concept, and share one success story. The format should follow the 70/20/10 ratio: 70% hands-on practice, 20% peer discussion, 10% instruction.

**Owner:** Preston (schedule design) + champions (session facilitation)
**Deadline:** Schedule designed by May 20; communicated to cohort before pilot end
**Deliverable:** 6-month reinforcement calendar + monthly session agenda templates

---

### S5: Build Board-Ready Metrics Narrative

**Research basis:** "CEO involvement in responsible AI delivers 58% more business benefits. Companies building trust are 2x more likely to see 10%+ revenue growth." The June board briefing needs quantitative evidence, qualitative stories, and a clear ask for Q3 resources.

**What to build:**

Board briefing structure (for June presentation):
1. **The Investment:** 9 staff, 60 days, integrated into existing workflows (not additive burden)
2. **The Evidence:** Pre/post fluency scores (C1), engagement KPIs (C2), iteration trends (C4), workflow redesigns with documented time savings (R1)
3. **The Stories:** 2-3 capstone highlights (Deliverable 5) — specific use cases with before/after impact
4. **The Ask:** Resources for Q3 rollout — cohort size, champion time allocation, technology budget, training calendar
5. **The Risk of Inaction:** 95% of pilots fail when organizations don't invest in the 70% people component; DC CAP's governance infrastructure and pilot evidence position us to be in the 5%

**Owner:** Preston (metrics compilation, narrative) + CEO/COO (review and endorse)
**Deadline:** Metrics compiled by June 3; narrative drafted by June 5; presented at June board meeting
**Deliverable:** Board briefing slide deck (draw from board-deck skill) + 1-page executive summary (draw from executive-summary-formatter skill)

---

### S6: Frame AI Onboarding as Talent Development and Retention Tool

**Research basis:** "94% of employees would stay longer at a company that invests in their learning. Companies with strong learning cultures achieve 57% retention rates versus 27% with moderate learning cultures. The AI skills half-life is 3-4 months, requiring continuous learning that positions DC CAP's training infrastructure as a competitive advantage in tight nonprofit talent markets."

**What to build:**

1. **Progression pathways:** Clear Tier 1 → Tier 2 → Tier 3 competency ladder with recognition at each level
   - Tier 1 (Foundation): Complete pilot Phase 1 activities + demonstrate 4D vocabulary fluency
   - Tier 2 (Practitioner): Documented workflow redesign + consistent iteration + domain-specific competency
   - Tier 3 (Champion): Facilitate peer learning sessions + mentor new users + contribute to skill/workflow development

2. **Professional development integration:** Connect AI competency progression to performance review goals and professional development plans. Staff building advanced skills are developing capabilities that increase their market value while serving DC CAP's mission.

3. **Recognition structure:** Public acknowledgment of progression milestones. Anthropic Academy certificates as supplementary credentials. Capstone presentations as portfolio pieces.

**Owner:** Preston + HR/Operations lead
**Deadline:** Framework designed by May 25; integrated into Q3 planning
**Deliverable:** AI Competency Progression Framework (1-2 pages) + integration memo for performance review cycle

---

## TIER 4: COVERAGE COMPLETIONS
### Best practices identified in verification audit as under-addressed

---

### V1: Address Middle Manager Resistance with ADKAR-Based Change Management

**Research basis:** "Mid-level managers display higher resistance than either senior leadership or front-line staff because AI threatens their expertise-based authority. These managers control budget approvals, schedule priorities, and informal influence — they can block AI adoption without ever explicitly refusing." The strategy recommends 81+ hours of training for managers (more than staff they supervise), ADKAR framework (Awareness, Desire, Knowledge, Ability, Reinforcement), and positioning managers as knowledgeable guides by training them before their teams.

**Current state:** The pilot cohort is 9 staff across 3 units. The plan addresses participant-level support (R7) but does not explicitly address program directors, team leads, or other managers who control whether AI integration survives beyond the pilot.

**What to build:**

1. **Manager pre-briefing before Q3 rollout:** All program directors and team leads complete Tier 2 role-specific training before their staff begin Q3 onboarding. They need to be knowledgeable guides, not learning alongside or behind their reports.

2. **Explicit job-security communication to middle managers:** Frame AI as expanding their capacity for strategic work and judgment, freeing them from operational tasks that consume bandwidth. Address the expertise-authority concern directly: "Your value increases because you become the person who knows both the domain and how to leverage AI within it."

3. **Manager-specific KPI:** Track whether managers are actively using Claude (Tier 1 engagement), not just whether they've approved their teams to use it. Managers who aren't using the tool signal to their teams that it's optional.

4. **ADKAR implementation for Q3:**
   - Awareness: CEO communicates vision with explicit manager input on rollout design
   - Desire: Address job security, show investment in reskilling
   - Knowledge: Managers complete training first (81+ hours threshold)
   - Ability: Hands-on practice with role-specific applications
   - Reinforcement: Celebrate manager AI wins publicly; connect adoption to performance expectations

**Owner:** Preston + Eric Waldo (CEO) + Angela Cammack (COO)
**Deadline:** Manager pre-briefing protocol designed by May 20; executed before Q3 cohort launch
**Deliverable:** Manager Change Management Protocol (2-3 pages) + CEO talking points for manager communication

---

### V2: Build Organizational Claude Projects as Knowledge Infrastructure

**Research basis:** "Anthropic's 500K context window and Projects feature enable scaling expertise across teams in ways impossible with traditional documentation. Integrating Claude with your organization's knowledge scales expertise across more projects, decisions, and teams than ever before." The strategy recommends program-specific Projects, role-specific Projects, and cross-functional Projects.

**Current state:** Skills and connectors are deployed. Claude Projects with pre-loaded organizational context are not specified as deliverables anywhere in the current plan.

**What to build:**

**One unified Project: DC CAP Intelligence**

This single Project serves as DC CAP's organizational knowledge hub in Claude, consolidating the strategic and programmatic context that every unit draws from. Rather than fragmenting knowledge across many Projects (which creates maintenance burden and context duplication), one well-structured Project with comprehensive instructions becomes the shared foundation.

**Context documents to load:**
- Impact Report (organizational outcomes, verified statistics, benchmarking data)
- Pitch Deck (funder-facing narrative, value proposition, competitive positioning)
- Product Spec for Career Pathways Intelligence Platform (technical architecture, data model, integration points)
- Student Success Model (intervention framework, outcome logic model, measurement approach)
- Career Connected Learning Model (program design, partnership structure, employer engagement)
- Student Success Strategy (strategic priorities, implementation timeline, resource allocation)
- Organizational OKRs (Preston will provide when available)

**Project Instructions should encode:**
- DC CAP's approved evidence language and data framing rules (from data-interpreter skill)
- Brand voice standards (from dccap-brand skill)
- Governance tier classifications for the data types present in loaded documents
- Common Claude errors to prevent (incorrect statistics, tone mismatches, framing that doesn't match DC CAP's benchmarking rules)
- Guidance on which loaded documents apply to which use cases (e.g., "For board materials, reference the Impact Report and OKRs. For funder communications, reference the Pitch Deck and Student Success Model.")

**Design principle:** This Project functions as a "knowledgeable new hire" who has read everything important about DC CAP. Any staff member who opens the DC CAP Intelligence Project gets consistent, context-rich outputs regardless of their individual AI fluency level. This is the Agency modality at organizational scale.

**Owner:** Preston (Project architecture, instruction writing, context loading) + unit leads (validate that loaded documents are current and complete)
**Deadline:** Project created and core documents loaded by May 1; OKRs added when Preston provides; Project Instructions refined iteratively during Weeks 5-8
**Deliverable:** DC CAP Intelligence Project (live in Claude Enterprise) + Project Instructions document (versioned in ai_governance repo)

---

### V3: Build Domain-Specific Prompt Template Arsenal

**Research basis:** "MIT Sloan research reveals the most powerful approach is building a template arsenal rather than crafting one-off perfect prompts. Templates function as cognitive scaffolding — they provide structure without limiting options." A Fortune 500 case study showed combining prompt engineers' best practices with subject matter expertise improved accuracy by 20%.

**Current state:** The Context-Task-Content-Constraints template is taught in Activity 2. No library of role-specific templates exists for the common tasks DC CAP staff perform repeatedly.

**What to build:**

A template library covering DC CAP's most frequent AI-assisted tasks:

- Student report generation template
- Program evaluation summary template
- Grant proposal section template (needs statement, evaluation plan, budget narrative)
- Stakeholder communication template (board, funders, partners, counselors)
- Board reporting data summary template
- Meeting summary and action item template
- Policy analysis and comparison template

Each template follows the Context-Task-Content-Constraints structure with DC CAP-specific context pre-filled. Templates are stored in the relevant Claude Project (V2) so they're available to all team members.

**Owner:** Preston (template design) + domain experts (validate and refine through use)
**Deadline:** 5 priority templates by May 1; full library by Q3 launch
**Deliverable:** DC CAP Prompt Template Library (stored in Projects + linked from pilot_hub.html)

---

### V4: Implement Hallucination Mitigation and LEAP Framework Training

**Research basis:** "AI hallucinations occur at rates exceeding 15% overall, with domain-specific rates of 6.4% for legal and 4.3% for medical information. Anthropic recommends five mitigation strategies: scratchpads, document grounding, few-shot examples, step-by-step reasoning, and continuous monitoring." The strategy prescribes the LEAP framework: test outputs for Logic, Evidence, Attribution, and Perspective.

**Current state:** Activity 4 (The Output Audit) builds general Discernment. The polished output trap (R4) tests error detection. Neither explicitly trains hallucination recognition or the LEAP verification process.

**What to build:**

1. **LEAP verification protocol (1-page reference):**
   - Logic: Does the reasoning follow? Are there unstated assumptions?
   - Evidence: Can I verify the claims? Where did Claude get this?
   - Attribution: Is Claude citing real sources or generating plausible-sounding fake ones?
   - Perspective: What viewpoint is missing? What would a skeptic challenge?

2. **Hallucination recognition exercise:** Build one scenario where Claude produces a confident, well-structured answer that contains a fabricated statistic or citation. Participants learn to spot the pattern: high confidence + specific detail + unverifiable source = verification required.

3. **Integration:** Add LEAP as a step in the workflow redesign template (R1) — every workflow that produces external-facing content includes a LEAP check before send.

**Owner:** Preston (protocol design, exercise creation)
**Deadline:** LEAP reference by April 18; hallucination exercise by April 25
**Deliverable:** LEAP Verification Protocol (1-page) + hallucination recognition exercise

---

### V5: Establish Privacy-by-Design Operational Protocols

**Research basis:** "1 in 5 organizations have been breached through shadow AI, with average added costs of $670K. For nonprofits serving students, the stakes are even higher: student data often includes sensitive information about family financial hardship, learning disabilities, immigration status." The strategy recommends anonymization before AI input, enterprise account data controls, opt-out of training features, and regular privacy audits.

**Current state:** The governance framework establishes the 4-tier data classification system and acceptable use policies. Operational protocols for implementation (how to anonymize, how to audit, how to verify vendor data handling) are not specified.

**What to build:**

1. **Anonymization quick-reference (by data type):**
   - Student names → Replace with "Scholar A, Scholar B" or use cohort identifiers
   - Financial data → Use ranges or percentages instead of exact figures for individuals
   - Geographic data → Use ward-level aggregates, never individual addresses
   - Small-cell data (N<10) → Suppress or aggregate to meet threshold

2. **Quarterly privacy audit checklist:**
   - Review Claude Enterprise data handling settings (confirm training opt-out)
   - Spot-check 5 recent conversations for Tier 1 data exposure
   - Verify no staff are using personal Claude accounts for DC CAP work
   - Review and update approved tools list
   - Document findings and any corrective actions

3. **Shadow AI prevention:** Include in Q3 onboarding a clear statement that personal AI accounts (ChatGPT, Gemini, personal Claude) must not be used for DC CAP work data. Provide the rationale (data exposure risk) alongside the rule.

**Owner:** Preston + IT/Compliance
**Deadline:** Anonymization reference by April 18; audit checklist by May 1; shadow AI communication at Q3 launch
**Deliverable:** Anonymization Quick-Reference (1-page) + Quarterly Privacy Audit Checklist + Shadow AI Policy Communication

---

## Implementation Calendar Summary

| Week | Dates | Critical Items | Recommended Items | Strategic + Verification Items |
|---|---|---|---|---|
| Now | April 4-6 | C1: Verify/deploy baseline survey | R5: Plain-English glossary | — |
| 1 | April 7-11 | C2: KPI framework + dashboard; C4: Iteration tracking starts | R2: Psychological safety rituals; R7: Buddy assignments | — |
| 2 | April 14-18 | C3: Role-specific modules 1-3 | R3: Permission guides; R4: Polished output trap; R6: Academy links | V4: LEAP protocol; V5: Anonymization reference |
| 3 | April 21-25 | C3: Role-specific modules 4-5 | R1: Workflow redesign templates deployed | V4: Hallucination exercise |
| 4 | April 28-May 2 | — | R1: Real-work transition begins; R8: Co-facilitated Fridays start | S1: Capability staging; V2: 3 priority Projects; V3: 5 priority templates; V5: Audit checklist |
| 5-6 | May 5-16 | — | R1: Workflow redesigns documented | S2: Q3 rollout; S3: Apprenticeship protocol; V1: Manager pre-briefing protocol |
| 7-8 | May 18-27 | — | R8: Champion-led Fridays | S4: Reinforcement schedule; S6: Competency framework; V1: Manager communication |
| 9 | May 28-June 1 | C1: Post-assessment administered | — | S5: Board metrics compiled |
| 10 | June 2-5 | C1: Analysis complete | Capstone presentations | S5: Board narrative finalized |

---

## Resource Requirements

**Preston's time:** This plan requires approximately 8-12 hours/week for the next 4 weeks (front-loaded for C1-C4 and R1-R5), declining to 4-6 hours/week thereafter. The heaviest lift is C3 (role-specific modules), which benefits from domain expert co-creation.

**Champion time:** 30-60 minutes/week for buddy system, co-facilitation, and peer review. This is within the commitment level the research identifies as sustainable.

**Technology:** Claude Enterprise admin panel access (confirm with IT for usage logs). Monday.com board for KPI tracking. No additional tools required.

**External resources:** Anthropic Academy courses (free). No budget required for Tier 2 recommendations.

---

## Success Criteria for This Plan

This implementation plan succeeds if, by June 5:

1. The June board briefing includes quantitative pre/post fluency evidence (C1)
2. At least 7 of 9 participants are monthly active users (C2, Tier 1)
3. Iteration frequency is increasing across the cohort (C4)
4. At least 6 documented workflow redesigns exist with time-savings evidence (R1)
5. No participant has fully disengaged (R7)
6. A Q3 rollout plan with decision criteria is ready for board review (S2)

These criteria map directly to the research finding that separates the 5% of pilots that achieve breakthrough results from the 95% that quietly die: systematic investment in measurement, role-specificity, workflow integration, and people.

---

*Sources: DC CAP ai_nonprofit_onboarding_strategy (April 2026), Anthropic AI Fluency Index (Feb 2026), Dakan & Feller AI Fluency Framework v1.1, BCG AI Adoption Research, McKinsey Enterprise AI Deployment, GitHub AI Advocate Program, MIT NANDA Initiative, Anthropic Enterprise Deployment Guidance*

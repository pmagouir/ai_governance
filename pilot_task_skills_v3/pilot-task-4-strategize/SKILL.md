# Task 4: The Deployment Strategist — Map, Triage, Plan

**DC CAP AI Leadership Training Pilot — Skill System v3**

---

## SKILL METADATA

| Field | Value |
|-------|-------|
| **Skill Name** | The Deployment Strategist: Map, Triage, Plan |
| **Task ID** | pilot-task-4-strategize |
| **Week** | 6-7 (May 18-29, 2026) |
| **Competencies** | Delegation (PRIMARY), Diligence (supporting), Description (supporting), Discernment (supporting) |
| **Scaffolding Level** | None — participant drives the entire analysis |
| **Time Estimate** | 90-120 minutes initial; 30-45 minutes revision |
| **Prerequisite** | Tasks 1-3 completed |
| **Target Audience** | DC CAP leadership cohort (10 participants across 6 units) |

---

## STAGE 1: INTRODUCE

### Your Starting Point

Across Tasks 1-3, your strongest dimension was [dimension] and your widest gap was [dimension]. Task 1 built your governance fluency. Task 2 proved you can design and execute a workflow. Task 3 sharpened your ability to evaluate quality and diagnose problems. Now the question changes: given everything you've learned, what is the strategic plan for AI in your unit?

---

### What This Is

This is the leadership task. Tasks 1-3 were about individual AI competency — you, working with Claude. Task 4 is about organizational AI strategy — your unit, deploying AI across workflows.

You will do three things:

1. **Map** your unit's 6 most recurring tasks and decide which are AI-ready
2. **Triage** the top 2 deployment targets by ROI
3. **Plan** the Q3 rollout for your unit

There are no checkpoints. No answer key. No scaffolding. You know the frameworks. You have practiced them. Now use them to think like a leader about what gets automated, augmented, or kept human — and why.

Plan for about 90-120 minutes.

---

### What You'll Learn

- **Portfolio Evaluation:** How to evaluate an entire portfolio of tasks for AI readiness — not just one task at a time, but your unit's full workload
- **Strategic Triage:** How to make strategic triage decisions — which 2 tasks yield the highest ROI for AI deployment
- **Implementation Planning:** How to build a realistic implementation plan that accounts for training, governance, and organizational constraints
- **Systems Thinking:** How to think beyond your unit — identifying cross-unit dependencies and opportunities that make or break deployment

---

### Why This Task Is Different

Tasks 1-3 measured how well you could DO things: classify, design, evaluate. Task 4 measures how well you THINK about deploying AI for your team.

This is strategic analysis, not execution. You will not run a prompt. You will not audit output. You will decide what your unit should deploy, in what order, with what safeguards, on what timeline.

Some participants who excelled at individual tasks will find strategic planning harder. Others who struggled with execution will discover they are natural strategic thinkers. The cognitive demand is fundamentally different.

The shift looks like this:

| Task | Cognitive Demand | Question |
|------|-----------------|----------|
| Task 1: CLASSIFY | Analytical categorization | Can you identify governance boundaries? |
| Task 2: CREATE | Design and execution | Can you build and run a workflow? |
| Task 3: CRITIQUE | Evaluative judgment | Can you diagnose quality problems? |
| **Task 4: STRATEGIZE** | **Strategic analysis** | **Can you plan AI deployment for your team?** |

---

### The Frameworks You'll Use

You already know these from Task 3. They are the same tools, applied at greater depth and scale.

#### The 2x2 Delegation Matrix

Every task fits into one of four quadrants:

```
                    HIGH FREQUENCY
                         |
      DEPLOY NOW         |         EXPLORE
  (Claude handles most;  |       (Pilot, then decide)
   you verify)           |
  _______________________|_______________________
                         |
      HUMAN CORE         |         LEAVE IT
  (Keep human)           |       (Too rare to bother)
                         |
                    LOW FREQUENCY
```

Two axes:

**Vertical axis (Frequency):** How often does this task recur?
- HIGH = weekly or more frequent
- LOW = monthly or less

**Horizontal axis (AI-Readiness):** Does it pass all 3 tests?
- YES = passes all 3 tests (right side)
- NO = fails 1 or more (left side)

Quadrant logic:

- **Deploy Now** (high frequency + AI-ready): Highest ROI. Automate or augment immediately. These are your launch targets.
- **Explore** (high frequency + not AI-ready): Worth investigating. Can you redesign the task to make it AI-ready? Or is the barrier structural? These may become Deploy Now candidates in Q4.
- **Human Core** (low frequency + not AI-ready): Keep human. The ROI of AI deployment is not worth the investment for rare, complex tasks. Respect this quadrant — it represents the irreplaceable human judgment in your unit.
- **Leave It** (low frequency + AI-ready): AI could help, but the task is so infrequent that setup time exceeds time saved. Revisit if frequency increases.

#### The AI-Readiness Test

For each task, ask three questions. All three must be "yes" to place the task on the AI-ready side.

**1. Repeatable Structure?**
Can you do this task the same way every time, or does it require unique judgment calls each time?
- Yes: "Update partner roster email" (template with variable fields)
- No: "Counsel a student facing family conflict" (always unique, always different)

**2. Describable Inputs?**
Can you tell Claude exactly what information to use, or does it need live context you cannot articulate?
- Yes: "Generate report from Salesforce data (fields: X, Y, Z)"
- No: "Assess whether this scholar needs financial intervention based on their family situation"

**3. Recoverable Errors?**
If Claude makes a mistake, can you catch and fix it before harm occurs?
- Yes: "Draft an email" (you review before sending)
- No: "Route scholar to counselor based on risk score" (routing happens before you notice the error)

One "no" is enough to move the task to the left side of the matrix. That does not mean the task can never use AI — it means deployment requires additional safeguards, redesign, or governance review before it is ready.

---

### Facilitator Note: Unit Differences in AI-Readiness Profiles

Different units will naturally show different AI-readiness profiles, and this reflects structural reality, not capability gaps.

- **Student Success** handles sensitive data frequently — more tasks may fail the "Recoverable Errors" test because mistakes carry higher stakes with scholars
- **Data & Technology** has more structured, repeatable workflows — more "Deploy Now" candidates because inputs are well-defined
- **Development & Fundraising** writes for external audiences — more tasks pass the AI-readiness test but need a careful governance layer around tone and relationship context
- **Program Strategy** sits at the intersection of policy and operations — tasks may split between highly AI-ready (timeline briefs) and deeply human (strategic planning)
- **Operations** manages compliance-sensitive workflows — the "Recoverable Errors" test may eliminate some tasks that would otherwise be high-frequency candidates
- **Innovation Hub** is inherently experimental — more tasks may land in "Explore" because the work itself is still being defined

If a participant's map shows mostly Human Core tasks, that may indicate strong governance awareness, not limited AI readiness. Assess the quality of reasoning about WHY tasks belong in each quadrant, not the count in "Deploy Now."

---

## STAGE 2: DRAFT

You are building three deliverables. Each one builds on the previous.

### Pre-Task Step: Building Your Task Inventory (For Participants New to DC CAP)

If you have been at DC CAP for less than 6 months, you may not yet know your unit's full portfolio of recurring tasks. Before starting Deliverable 1, interview your manager or a senior colleague. Ask them to name the 6 most recurring tasks in your unit, the approximate time each takes, and the primary data involved in each. Use their answers as your starting point for the deployment map.

This is not a shortcut — it's good strategic practice. Leaders who deploy AI across a team need accurate information about what the team does, and the fastest way to get that is to ask the people doing the work. Use the interview to build your inventory, then apply your own AI-readiness analysis and governance classification.

---

### Deliverable 1: Unit Deployment Map (6 Tasks) — 30-40 min

List the 6 most recurring tasks in your unit. These should be specific, real tasks — not categories. Not "handle emails" but "Draft weekly partner reminder emails to 6 university contacts about submission deadlines."

For each of the 6 tasks, complete every column:

| Column | What to Write |
|--------|--------------|
| **Task** | Specific description: deliverable + audience + frequency. Name what you produce, who receives it, and how often. |
| **Repeatable?** | Yes/No with 1-sentence reasoning. Why is or is not the structure consistent each time? |
| **Describable?** | Yes/No with 1-sentence reasoning. Can you specify exactly what information Claude needs? |
| **Recoverable?** | Yes/No with 1-sentence reasoning. If Claude errs, can you catch it before damage? |
| **AI-Ready?** | Yes (all 3 pass) / No (name which test fails and why) |
| **Frequency** | HIGH (weekly or more) / LOW (monthly or less) |
| **Quadrant** | Deploy Now / Explore / Human Core / Leave It |
| **Rationale** | 2-3 sentences explaining placement. Must address BOTH axes: frequency evidence AND AI-readiness reasoning. |

**Quality threshold:** At least 5 of your 6 tasks must name a specific deliverable, audience, and frequency. At least 5 rationales must address both axes.

---

#### Unit-Specific Task Guidance

Use these examples to prime your thinking. Your actual tasks may be different — these are starting points, not requirements.

**Student Success:** partner reminder emails, case summary templates, academic plan summaries, counselor outreach coordination, scholar milestone tracking, DCTAG documentation follow-ups, weekly outreach briefs, program compliance checks, retention risk reports, referral documentation. *Note: Student Success handles sensitive data frequently. Expect several tasks to fail the Recoverable Errors test — that reflects good governance awareness.*

**Program Strategy:** cycle timeline briefs, eligibility FAQ updates, program overview summaries, strategic planning documents, board presentation drafts, policy change communications, program evaluation summaries, cross-unit coordination memos, decision briefs, stakeholder talking points. *Note: Expect a mix of highly structured tasks (timeline briefs) and judgment-dependent tasks (strategic planning). The contrast should be visible in your map.*

**Data & Technology:** scholar demographic breakdowns, monthly analytics summaries, funder data request responses, dashboard configuration updates, data quality reports, Salesforce query standardization, cross-tab analyses, audit-readiness documentation, metric definitions, data dictionary updates. *Note: Likely the most Deploy Now candidates because inputs are structured. The governance challenge is aggregation and small-cell risk.*

**Development & Fundraising:** funder update emails and letters, program outcome summaries for proposals, stewardship case studies, donor meeting prep briefs, annual report sections, grant narrative drafts, prospect research summaries, event communications, acknowledgment letters, impact story drafts. *Note: Many tasks pass the readiness test but require "Draft Together" modality — the human adds relationship knowledge.*

**Operations:** monthly budget summaries, vendor communications, process documentation, compliance checklists, travel and expense approvals, staff onboarding checklists, contract renewals, space and logistics coordination, procurement requests, policy manual updates. *Note: Many repeatable tasks, but compliance-adjacent work may fail Recoverable Errors because mistakes create audit exposure.*

**Innovation Hub:** pilot evaluation summaries, partnership exploration briefs, AI governance documentation, research and trend summaries, initiative proposals, pilot participant communications, cross-functional project updates, board innovation briefings, competitive landscape analyses, technology assessment reports. *Note: Inherently exploratory. More tasks may land in Explore because the work itself is still being defined.*

---

### Deliverable 2: Strategic AI Triage (Top 2) — 30-40 min

From your deployment map, select the top 2 "Deploy Now" tasks. Rank them 1-2 by ROI — highest return on investment first.

If you have fewer than 2 tasks in "Deploy Now," that is fine. Select from "Explore" as well and note the additional work required to make them AI-ready.

For each of the 2 tasks, address all five sections:

#### a. ROI Estimate

Be specific. Show the math.

- **Current time investment per instance:** How many hours does this task take you (or your team) right now?
- **Current frequency:** How often does it happen? (times per week, month, or quarter)
- **Estimated AI-assisted time per instance:** How long would it take with Claude? Be specific about what Claude handles versus what you handle.
- **Time savings calculation:** (current time - AI-assisted time) x frequency = savings per [period]
- **Other value:** Beyond time, what else improves? Quality consistency? Reduced error rate? Faster turnaround? Better governance compliance?

Example of transparent math:
> Current: 2 hours per instance x 4 times/month = 8 hours/month
> AI-assisted: 45 minutes per instance (Claude drafts in 5 min; I review and edit for 40 min) x 4/month = 3 hours/month
> Savings: 5 hours/month = 60 hours/year
> Other value: Consistent formatting across all four monthly reports; no more version-control confusion

#### b. Governance Layer

- What data is involved? What governance tier? (Reference your Task 1 learning)
- What specific constraints does AI use impose for this tier?
- What human verification is required before the output leaves your desk?
- Are there any data elements that must be redacted, aggregated, or anonymized before prompting?

#### c. Modality Assignment

- **Hand it off** / **Draft together** / **Figure it out together**
- Why this modality for THIS task? What characteristics of the task drive the choice?
- Reference what you learned about modality in Task 2 — what worked? What would you do differently?

#### d. Implementation Sequence

- What has to happen before this task goes live with AI? Think about: training, governance review, data preparation, template creation, stakeholder buy-in
- Who needs to be involved? Name roles, not just "the team"
- Dependencies: does anything else need to be in place first? (Another system, another person's approval, a data source being cleaned up)

#### e. Risk Assessment

- What could go wrong if Claude makes an error on this task?
- How would you catch it? What is your verification step?
- What is the worst-case scenario if an error goes undetected?
- Mitigation: what safeguards would you put in place? (Review protocols, spot-checks, escalation triggers)

---

### Deliverable 3: Q3 Rollout Plan (Half-Page) — 20-30 min

Write a half-page plan for how your unit will adopt AI in Q3 (July-September 2026). This is not a wishlist. This is a plan — with constraints, dependencies, and success criteria.

#### Structure

**1. Who & How** (3-4 sentences)
Who on your team will use AI? How many people, and what are their current AI skill levels? How will you train them — reference what worked for you in this pilot and what you would do differently when teaching others.

**2. What & When** (3-5 sentences + table)
Which tasks deploy first and why? How does the sequence account for learning curve and risk? Justify your order, then map milestones below.

| Milestone | What Should Be True |
|-----------|-------------------|
| **Day 30 (August 1)** | [Who is trained? What is live?] |
| **Day 60 (September 1)** | [What is the second deployment? What metrics are you tracking?] |
| **Day 90 (October 1)** | [What does the full steady-state look like?] |

**3. Governance & Success** (3-4 sentences)
What governance reviews or approvals need to happen, and when? How will you know this is working — name a specific metric with a threshold (e.g., "reduce partner email cycle from 90 to 20 minutes, verified by calendar timestamps"). What is the threshold for success versus needing to adjust?

---

### Common Traps to Avoid

**Trap 1: Vague task names**
"Handle emails" is not a task. "Draft weekly partner reminder emails to 6 university contacts about submission deadlines" is a task. If you cannot name the deliverable, the audience, and the frequency, the task is not specific enough to evaluate.

**Trap 2: One-axis rationales**
"This is frequent so Deploy Now" skips the AI-readiness analysis. "This passes the readiness test so Deploy Now" skips the frequency check. Both axes must appear in every rationale.

**Trap 3: ROI without math**
"This would save time" is not an ROI estimate. Show the math: current time x frequency = current investment; AI-assisted time x frequency = new investment; difference = savings. If you cannot estimate the time, you do not know the ROI.

---

### Workflow

**Week 1 (Days 1-3):**
- Complete Deliverable 1: Map your 6 recurring tasks, apply the AI-Readiness Test, place each in the matrix (30-40 min)
- Review your map: Do the rationales address both axes? Are the tasks specific enough?

**Week 1 (Days 4-5):**
- Complete Deliverable 2: Select top 2 Deploy Now tasks, complete the full triage (ROI, governance, modality, implementation, risk) (30-40 min)
- Reality-check: Is the ROI math transparent? Are the implementation sequences realistic?

**Week 2 (Days 1-3):**
- Complete Deliverable 3: Write the Q3 rollout plan (20-30 min)
- Cross-check all three deliverables for internal consistency:
  - Do your top 2 triage tasks come from your map?
  - Does the Q3 plan sequence match your triage ranking?
  - Do governance tiers in the triage match what you would classify using Task 1 logic?

**Week 2 (Days 4-5):**
- Review for cross-unit awareness: Where do other units' workflows touch yours?
- Polish and submit

---

## STAGE 3: ASSESS

### Assessment Framework

Your Task 4 work is evaluated across 4 dimensions. Each dimension has 4 levels: Exceeds / Meets / Approaching / Below Standard.

The readiness threshold: **All or most dimensions at Meets or above (no dimension at Below)** = proceed to Capstone. **Multiple dimensions at Approaching, none at Below** = targeted revision. **Any dimension at Below Standard** = re-teach on the relevant framework.

---

### Assessment Output Format

Every assessment opens with a cross-task reference spanning Tasks 1-3:

"Your Task 1 governance classifications established your data fluency. Your Task 2 execution proved you can design and run a workflow. Your Task 3 audit showed you can evaluate output quality. In Task 4, that foundation becomes strategy: [specific observation about how prior learning appears in the deployment map]."

For each dimension, provide:
1. **Level** (Exceeds / Meets / Approaching / Below)
2. **Evidence** from the submission — quote or cite specific content
3. **Gap explanation** — what is missing or underdeveloped
4. **Revision direction** — specific guidance on what to strengthen
5. **Coaching question** — a question that prompts deeper thinking

Close with a readiness assessment for Capstone.

---

### DIMENSION 1: Task Mapping Quality

**What this measures:** Can you map an entire portfolio of recurring tasks to the 2x2 matrix with specificity, rigor, and sound reasoning?

**Primary 4D competency:** Delegation (with Diligence supporting)

**EXCEEDS STANDARD**
- All 6 tasks are specific enough to evaluate: each names a deliverable, an audience, and a frequency
- Rationales address both axes with evidence — not just "high frequency" but "weekly during application season (14 times/year)"
- Quadrant placements are internally consistent: no task fails a readiness test but lands in Deploy Now, no task passes all three but lands in Human Core without explanation
- Includes at least one surprising insight: a task that does not fit neatly into any quadrant, or an unexpected pattern across the 6 (e.g., "5 of my 6 tasks involve the same Salesforce data source — if that source is unreliable, it undermines the entire deployment strategy")

Example (Exceeds):
> **Task 3: Monthly funder update letter**
> Deliverable: 2-page letter to 4 institutional funders, monthly.
> Repeatable? Yes — same structure (outcomes, milestones, ask). Describable? Yes — Salesforce dashboard + program calendar. Recoverable? Yes — reviewed before sending.
> AI-Ready? Yes (3/3). Frequency: HIGH. Quadrant: Deploy Now.
> Rationale: Monthly recurrence makes this high-frequency. All three readiness tests pass — consistent structure, defined data sources, errors caught in review. Governance: Tier 3 (aggregated outcomes), but I verify aggregation monthly because the dashboard sometimes shows cells under 10.

**MEETS STANDARD**
- 5+ tasks are specific enough to evaluate (deliverable, audience, and frequency identifiable)
- Most rationales address both axes — frequency reasoning plus AI-readiness reasoning
- Quadrant placements are consistent with the stated readiness test results
- Top deployment targets are reasonable choices

Example (Meets):
> **Task 3: Funder update letter**
> Monthly letter to 4 major funders summarizing outcomes and milestones.
> Repeatable? Yes — same format each month.
> Describable? Yes — uses Salesforce data and program calendar.
> Recoverable? Yes — reviewed before sending.
> AI-Ready? Yes. Frequency: HIGH (monthly). Quadrant: Deploy Now.
> Rationale: High frequency (12x/year) and passes all three readiness tests. Structure is consistent month to month. Governance: Tier 3 aggregated data, appropriate for Claude.

**APPROACHING STANDARD**
- Several tasks are categories, not tasks — "handle emails," "do reports," "manage data" without naming the specific deliverable, audience, or frequency
- Rationales address only one axis: frequency without AI-readiness reasoning, or AI-readiness without frequency evidence
- Some quadrant placements are inconsistent with the stated reasoning

Example (Approaching):
> **Task 3: Funder communications**
> We send updates to funders regularly.
> AI-Ready? Yes, mostly.
> Quadrant: Deploy Now.
> Rationale: We do this a lot and Claude could help draft them.

**BELOW STANDARD**
- Most tasks are too vague to classify (no deliverable, no audience, no frequency)
- Placements appear random with no supporting reasoning
- AI-readiness test is not applied or is applied incorrectly (e.g., all tasks marked "yes" without analysis)

**Bright line test:** Does each task name a specific deliverable, audience, and frequency? If 5+ do, Meets minimum. If most are categories without specifics, Approaching.

**Calibration Anchor: Approaching to Meets Boundary**

Approaching looks like: 4 of 6 tasks have specific deliverables but the rest are vague categories. Rationales mention frequency for most tasks but apply the 3-question AI-readiness test to only 2-3. Meets looks like: 5+ tasks name a deliverable, audience, and frequency. At least 5 rationales explicitly reference both frequency evidence and the AI-readiness test results.

---

### DIMENSION 2: ROI Reasoning

**What this measures:** Can you identify the highest-value deployment targets and build a rigorous case for each?

**Primary 4D competency:** Delegation (with Discernment supporting)

**EXCEEDS STANDARD**
- Top 2 are genuinely the highest-ROI opportunities from the deployment map — the ranking is defensible
- Time savings math is specific and verifiable: hours per instance, frequency, AI-assisted estimate, total savings
- Governance tier is correct for each task, with specific data handling constraints named
- Implementation sequence shows dependency awareness: "Step 2 cannot happen until Step 1 is complete because..."
- Risk assessment names specific failure modes, not generic concerns: "If Claude miscalculates the enrollment trend, the funder letter overstates our retention rate" rather than "something could go wrong"

Example (Exceeds):
> **ROI — Task #1: Weekly partner reminder emails**
> Current: 90 min/cycle x 14 cycles/year = 21 hours/year. AI-assisted: 20 min/cycle (Claude drafts 3 min; I customize 12 min; verify 5 min) x 14 = 4.7 hours/year. Savings: 16.3 hours/year. If 3 others adopt: ~65 hours/year. Other value: zero missed partners, consistent tone.
> **Risk:** Wrong deadline sent to all 6 partners. Caught in 5-minute verification against program calendar. Worst case: partners submit late, creating admissions coordination problems. Mitigation: checklist step 1 is "confirm deadline against master calendar."

**MEETS STANDARD**
- Top 2 are reasonable choices — high-frequency, AI-ready tasks with clear value
- Math is present, even if rough: "about 2 hours now, maybe 30 minutes with Claude, 4 times a month"
- Governance tier is correct for each task
- Basic implementation sequence exists
- Risk assessment identifies the main concern

Example (Meets):
> Current: ~2 hours per email batch. Monthly. AI-assisted: ~30 minutes.
> Savings: ~1.5 hours/month = 18 hours/year.
> Governance: Tier 3 (partner info, no student data). Can prompt freely.
> Risk: Wrong deadline in emails. Caught by reviewing against calendar before sending.

**APPROACHING STANDARD**
- Top 2 are listed but ROI reasoning is vague: "this would save time" without math
- Includes a clearly wrong choice: a low-frequency task ranked as highest ROI, or a task that fails the AI-readiness test included without explanation
- Governance tier is mentioned but constraints are not specific
- Implementation is a list of activities without sequencing or dependencies

Example (Approaching):
> Top 2: partner emails, data reports.
> These would both save time because Claude is good at drafting.
> Governance: mostly Tier 3, so it's fine.

**BELOW STANDARD**
- No ROI analysis, or top 2 poorly chosen with no reasoning
- No math at all
- Governance not addressed
- No implementation thinking

**Bright line test:** Is there transparent math? (e.g., "2 hours per instance x 4 times/month = 8 hours/month current; estimate 45 min with Claude = 3 hours/month; savings: 5 hours/month"). If math exists, Meets minimum. If "would save time" without numbers, Approaching.

**Calibration Anchor: Approaching to Meets Boundary**

Approaching looks like: Two tasks are selected and briefly described, but the ROI case relies on "this is frequent and Claude could help" without time estimates. Meets looks like: Each of the two tasks has a time estimate (before and after), a frequency, and a calculation showing the savings. The math does not need to be precise — "roughly 2 hours down to 30 minutes, 4 times a month, so about 6 hours/month saved" qualifies.

---

### DIMENSION 3: Implementation Feasibility

**What this measures:** Can you build a realistic deployment plan that accounts for real-world constraints?

**Primary 4D competency:** Delegation (with Description supporting)

**EXCEEDS STANDARD**
- Q3 plan shows realistic constraint awareness: training capacity ("only 2 team members available in July"), governance review timeline ("approval takes 2 weeks"), data preparation needs ("Salesforce queries need to be standardized first")
- Names specific people or roles — not "the team" but "my two analysts" or "the compliance coordinator"
- 30/60/90 milestones are concrete and sequenced logically: Day 30 builds foundation, Day 60 expands, Day 90 reaches steady state
- Success metrics are measurable and have thresholds: "reduce email cycle from 90 to 20 minutes; if above 40 minutes after 4 cycles, revisit the prompt design"
- Training approach references personal pilot experience: "I struggled with governance classification in Task 1, so I'll spend more time on Tier 2 scenarios with my team"

Example (Exceeds):
> **Target Audience:** Two program coordinators (both new to AI, strong with Salesforce) and one data analyst (some ChatGPT experience, no governance training).
> **Training Approach:** I'll use the same 4D competency framework that worked for me in the pilot. I'll start with a live demo of my partner email workflow (their lowest-risk, most visible task) and walk them through governance classification first — I learned in Task 1 that understanding tiers before touching prompts prevents the biggest mistakes. Each person will run one task independently in week 2 before we expand.
> **Day 30:** Both coordinators trained on partner email workflow. One has run it independently for 2 cycles. Data analyst trained on governance tiers.
> **Day 60:** Partner emails running independently. Data analyst piloting monthly analytics summary with my review.
> **Day 90:** Two workflows live. Measuring time savings and error rates. Presenting results to director.
> **Success Metric:** Partner email cycle under 25 minutes per batch (vs. 90 minutes before), verified by calendar time blocks. If above 40 minutes after 4 cycles, I'll redesign the prompt.

**MEETS STANDARD**
- Plan accounts for major constraints: training time, governance review, reasonable timeline
- Timeline is realistic — not everything deployed by Day 30
- Success metrics are defined with some specificity
- Training approach shows awareness of what needs to be taught

Example (Meets):
> Three team members will be trained. Start with the lowest-risk task (partner emails) and expand to data summaries by Day 60. Governance review with director before launching. Success: reduce time per task by at least 50%.

**APPROACHING STANDARD**
- Plan lists activities without sequencing or constraint acknowledgment: "Train the team. Deploy AI. Measure results."
- Reads as a wishlist — optimistic without naming what could slow things down
- Success metrics are vague: "save time" or "improve quality" without measurement specifics
- No governance checkpoints identified

Example (Approaching):
> We'll train everyone in July and start using Claude for most of our recurring tasks. By September everything should be running smoothly.

**BELOW STANDARD**
- No plan, or plan has no implementation logic
- No timeline, no sequencing, no constraints
- No success metrics

**Bright line test:** Does the plan acknowledge at least one real constraint (training time, governance review, data preparation, summer scheduling)? If yes, with sequencing, Meets. If activities listed without constraints, Approaching.

**Calibration Anchor: Approaching to Meets Boundary**

Approaching looks like: A bulleted list of "what we'll do in Q3" without acknowledging any constraints or dependencies. Milestones are aspirational ("everyone will be trained by August"). Meets looks like: Activities are sequenced with reasoning ("partner emails first because lowest risk and fastest win"), at least one constraint is named ("summer schedules limit training to 2 people in July"), and success metrics have a number attached.

---

### DIMENSION 4: Cross-Unit Awareness

**What this measures:** Can you see beyond your unit's boundaries and identify dependencies and opportunities that affect deployment?

**Primary 4D competency:** Delegation (with Diligence supporting)

**EXCEEDS STANDARD**
- Identifies 2+ cross-unit dependencies or opportunities with specific examples
- Proposes coordination mechanisms: "Student Success and Development both send partner-facing communications — a shared prompt library would ensure consistent tone and reduce duplication"
- Recognizes that AI deployment in one unit creates expectations or dependencies for other units: "If Data & Technology standardizes their Salesforce queries, every other unit's data summary tasks become more AI-ready"

Example (Exceeds):
> **Cross-unit dependency 1:** Our monthly analytics summaries use data that Data & Technology prepares. If they adopt AI-assisted query standardization, our input data becomes more consistent, making our AI-assisted summaries more reliable. We should coordinate deployment timing.
> **Cross-unit opportunity 1:** Development and Student Success both draft partner-facing communications. We use different tone guidelines. A shared prompt template would ensure DC CAP speaks with one voice to partners while letting each unit customize for their relationship context.
> **Coordination mechanism:** Propose a monthly 30-minute cross-unit AI check-in during Q3 to share what's working and flag dependencies.

**MEETS STANDARD**
- Identifies at least one cross-unit dependency or opportunity with a specific example
- The connection is genuine and actionable, not generic

Example (Meets):
> Our data summaries depend on Data & Technology's Salesforce output. If they change field names or report formats when adopting AI, it affects our prompts. We should coordinate.

**APPROACHING STANDARD**
- Strategy is entirely unit-siloed but acknowledges that other units exist
- May mention "collaboration" in general terms without a specific dependency or opportunity

Example (Approaching):
> Other units are also adopting AI, so we should coordinate eventually.

**BELOW STANDARD**
- No awareness of cross-unit context
- Strategy treats the unit as an island — no mention of shared data sources, overlapping audiences, or coordination needs

**Bright line test:** Does the participant name a specific connection between their unit's AI deployment and another unit's work? If yes, Meets. If the strategy is entirely self-contained, Approaching.

**Calibration Anchor: Approaching to Meets Boundary**

Approaching looks like: The strategy mentions "working with other units" or "cross-team coordination" without naming a specific dependency or opportunity. Meets looks like: At least one named connection — "Development's funder update letters use the same outcome data that Data & Technology's dashboard produces; if D&T changes the data format, it affects our prompts."

---

### Readiness Check (Differentiated Pathways)

After assessment, participants follow one of four pathways based on their results:

**Exceeds all or most dimensions:**
Extension task — draft a 1-paragraph CEO briefing summarizing your unit's Q3 AI strategy. Include: the single most important deployment target, the expected impact, and your one ask (resource, governance approval, cross-unit coordination, or training support). This briefing should be something your executive director could read in 2 minutes and act on.

**All or most at Meets:**
Standard revision on the 1-2 dimensions with the widest gap. Focus on strengthening the weakest area to ensure a solid foundation for Capstone.

**Multiple at Approaching:**
Targeted revision with a worked example. The facilitator walks through ONE task from the participant's own map through the full strategic triage (ROI math, governance layer, modality, implementation, risk) to model the depth expected. Then the participant revises independently.

**Any at Below:**
Re-teaching session on the 2x2 matrix and AI-Readiness Test. Walk through the framework with a concrete example from the participant's unit. Then re-attempt the deployment map with 4 tasks (not 6) before returning to the full deliverable set.

---

### Cross-Task Growth Reference

Use this framing when connecting Task 4 assessment back to prior tasks:

"Your Task 1 governance classifications established your data fluency. Your Task 2 execution proved you can design and run a workflow. Your Task 3 audit showed you can evaluate output quality. In Task 4, that foundation becomes strategy: [specific observation about how prior learning appears in the deployment map]."

Examples of specific observations:
- "Your governance tiers in the deployment map are consistently accurate — that's your Task 1 foundation showing up in strategic context."
- "The ROI math for your top 2 reflects the same before/after thinking you practiced in Task 3's impact documentation."
- "Your implementation sequence accounts for the same governance-first logic that shaped your Task 2 pipeline: classify before you prompt, verify before you send."
- "Your Q3 training plan references the 4D competency framework — you're already thinking about how to teach what you learned."

---

## STAGE 3b: REASSESS (Revision + Delta)

### Reassessment Protocol

When the participant submits a revision, reassess using the same 4-dimension rubric from Stage 3.

The reassessment:

1. **Re-evaluates each dimension** against the same rubric. A dimension can improve, stay the same, or (rarely) decrease if the revision introduced new issues.
2. **Produces a delta comparison** showing the level transition for each dimension and what specifically changed.
3. **Applies the readiness check** to determine next step: proceed to Capstone, another revision cycle, or concept re-introduction.
4. **Does NOT require the participant to revise all dimensions.** If only 1-2 dimensions need work, they revise only those sections.

### Delta Comparison Format

For each dimension:

| Dimension | Initial Level | Revised Level | What Changed |
|-----------|--------------|---------------|-------------|
| Task Mapping Quality | [level] | [level] | [specific improvement or gap] |
| ROI Reasoning | [level] | [level] | [specific improvement or gap] |
| Implementation Feasibility | [level] | [level] | [specific improvement or gap] |
| Cross-Unit Awareness | [level] | [level] | [specific improvement or gap] |

---

## STAGE 4: REVISE

### Targeted Revision Guidance

Revision should be focused. Do not rewrite everything — strengthen the specific dimensions flagged in the assessment.

#### If Task Mapping Quality needs revision:
- Make each task specific: name the deliverable, the audience, and the frequency. If a task says "communications," replace it with "Weekly partner deadline reminder email to 6 university admissions contacts."
- Address both axes in every rationale. Read each one and ask: "Does this mention how often I do this task AND whether it passes the three readiness tests?"
- If a quadrant placement contradicts the readiness test results, either fix the placement or explain why the exception is justified.

#### If ROI Reasoning needs revision:
- Add transparent math for each of the top 2. Current time x frequency = current investment. AI-assisted time x frequency = new investment. Difference = savings.
- Verify governance tier for each task against the 4-tier framework. Name the specific data elements and their tier.
- Add implementation sequence: what has to happen first, second, third? What depends on what?
- Add risk assessment: what is the specific failure mode? How do you catch it? What is worst case?

#### If Implementation Feasibility needs revision:
- Identify at least one real constraint: training capacity, governance approval timeline, data preparation, seasonal workload.
- Sequence your activities: which deployment comes first and why? What has to be true before the second deployment can start?
- Add specific milestones to the 30/60/90 timeline. Not "make progress" but "both coordinators have run the partner email workflow independently for 2 cycles."
- Define a measurable success metric with a threshold.

#### If Cross-Unit Awareness needs revision:
- Think about inputs: What data, documents, or decisions does your unit receive from other units? If those inputs change because another unit adopts AI, how does that affect you?
- Think about outputs: What does your unit send to other units? If you change how you produce those outputs using AI, do other units need to know?
- Think about shared audiences: Do any other units communicate with the same stakeholders (partners, funders, scholars) as your unit? Is there an opportunity to coordinate?
- Name one specific connection and explain why it matters for your deployment plan.

---

### Self-Check Before Resubmission

**Deliverable 1 — Deployment Map:**
- [ ] All 6 tasks name a specific deliverable, audience, and frequency
- [ ] Every rationale addresses BOTH axes (frequency evidence + AI-readiness reasoning)
- [ ] Quadrant placements are consistent with the AI-Readiness Test results
- [ ] At least one task generated a genuine "hmm, where does this go?" moment — and the rationale explains the judgment call

**Deliverable 2 — Strategic Triage:**
- [ ] Top 2 are ranked by ROI with transparent math
- [ ] Governance tier is correct for each task with specific handling constraints
- [ ] Modality assignment is justified by the task's characteristics
- [ ] Implementation sequence shows what depends on what
- [ ] Risk assessment names a specific failure mode and a specific mitigation

**Deliverable 3 — Q3 Rollout Plan:**
- [ ] Target audience is specific (number of people, current skill levels)
- [ ] Training approach references what worked in the pilot
- [ ] Deployment sequence is ordered with reasoning
- [ ] At least one real constraint is acknowledged
- [ ] Success metrics are measurable with a threshold
- [ ] 30/60/90 milestones are concrete

**Cross-Deliverable Consistency:**
- [ ] Top 2 triage tasks come from the deployment map
- [ ] Q3 plan deployment sequence matches the triage ranking
- [ ] Governance tiers are consistent across all deliverables
- [ ] Cross-unit awareness appears somewhere — even if briefly

---

## STAGE 5: PACKAGE

### Portfolio Structure

Your Task 4 portfolio assembles all three deliverables plus assessment, growth narrative, and reflection.

---

#### 1. Header Block

```
TASK 4: STRATEGIZE — The Deployment Strategist
Participant: [Name]
Unit: [Unit Name]
Date: [Submission Date]
Primary Competency: Delegation
Final Assessment Level: [Exceeds / Meets / Approaching per dimension]
```

---

#### 2. Performance Snapshot

| Dimension | Level | Evidence (1 sentence) |
|-----------|-------|----------------------|
| Task Mapping Quality (Delegation) | [level] | [e.g., "All 6 tasks named with deliverable, audience, and frequency; rationales addressed both axes with AI-readiness test applied rigorously."] |
| ROI Reasoning (Delegation) | [level] | [e.g., "Top 2 ranked with transparent math showing 47 hours/year savings; governance tiers correct with handling specified."] |
| Implementation Feasibility (Delegation) | [level] | [e.g., "Q3 plan sequences 2 deployments with training constraints acknowledged; 30/60/90 milestones are concrete and measurable."] |
| Cross-Unit Awareness (Delegation) | [level] | [e.g., "Identified 2 cross-unit dependencies with specific coordination proposals."] |

---

#### 3. Growth Story

Write 3-5 sentences connecting Tasks 1-2-3-4. This is the arc from individual competency to organizational strategy.

Template:

"In Task 1, I learned [specific governance/classification insight]. In Task 2, I proved I could [specific execution capability]. In Task 3, I discovered [specific evaluative insight]. In Task 4, those skills became strategic: I [specific strategic accomplishment from this task]. The biggest shift was [name the shift — from execution to strategy, from individual to organizational, from following frameworks to applying them independently]."

Example:

"In Task 1, I learned that governance classification is the foundation — you cannot write a safe prompt without knowing your data tier. In Task 2, I proved I could run a full workflow and produce a partner email batch in 20 minutes instead of 90. In Task 3, I discovered that my prompts were missing constraint language that would have prevented the tone inconsistencies I kept editing out. In Task 4, those skills became strategic: I mapped my unit's 6 most recurring tasks and found that 3 are immediate Deploy Now candidates — but only if Data & Technology standardizes the Salesforce queries we depend on. The biggest shift was realizing that deployment is not about individual tasks but about systems: data flows, governance reviews, training capacity, and cross-unit dependencies."

---

#### 4. Multi-Task Comparison

Full trajectory from Task 1 through Task 4:

| Task | Cognitive Demand | Your Strongest Dimension | Your Growth Edge |
|------|-----------------|-------------------------|------------------|
| Task 1: CLASSIFY | Analytical categorization | [dimension] at [level] | [dimension] at [level] |
| Task 2: CREATE | Design and execution | [dimension] at [level] | [dimension] at [level] |
| Task 3: CRITIQUE | Evaluative judgment | [dimension] at [level] | [dimension] at [level] |
| Task 4: STRATEGIZE | Strategic analysis | [dimension] at [level] | [dimension] at [level] |

Note where acceleration happened: Did you jump from Approaching to Exceeds on any dimension? Which cognitive demand type played to your strengths? Where did you plateau?

---

#### 5. Participant Reflection

Answer these questions in 2-3 sentences each:

**Quadrant Insight:**
"Of your 6 tasks, you put [X] in Deploy Now and [Y] in Human Core. Pick one task from each quadrant. What is the specific difference that separates an AI-ready task from a human-required task in your unit?"

**Deployment Risk:**
"Looking at your Q3 plan, what is the ONE thing that could derail deployment — and what would you do about it?"

**Strategic Identity:**
"After completing Task 4, how has your thinking about AI changed from 'a tool I use' to 'a capability my unit deploys'? What does that shift mean for your role as a leader?"

---

#### 6. Facilitator Quick-Hit

For each participant, note:

**Pattern:** [1-2 sentences on the dominant pattern in this participant's work. Examples: "Strong ROI reasoning but weak cross-unit awareness — thinks deeply about their own tasks but not about system-level dependencies." Or: "Conservative deployer — only 2 tasks in Deploy Now, but the reasoning is excellent. This participant will be a strong governance voice in Q3."]

**Discussion Question for Capstone:** [A question that connects Task 4 insights to the Capstone's teaching module. Example: "You identified partner emails as your top deployment target. In the Capstone, you'll design a teaching module for this workflow. What governance lesson do you want your colleagues to internalize before they touch a prompt?"]

---

### Forward Note

"In the Capstone, you will synthesize everything. You will pull your best use case (likely from Task 2 or Task 4), honestly self-assess your growth across two bookend competencies (Diligence and Delegation) using evidence from Tasks 1-4, and design a teaching module your colleagues can follow. Your Task 4 deployment map is the strategic foundation for your teaching module — the workflow you teach should be one of your top deployment targets. The Q3 plan you wrote here becomes the implementation roadmap your Capstone teaching module fits into."

---

### Formatting

All deliverables follow the DC CAP brand system: clean headers, consistent table formatting, professional but warm tone. The Q3 Rollout Plan (Deliverable 3) should read as a half-page you could hand to your executive director — polished enough to share, specific enough to act on.

---

## APPENDICES

### Appendix A: 2x2 Delegation Matrix Visual

See the matrix diagram in Stage 1 (INTRODUCE). The same visual applies throughout.

### Appendix B: AI-Readiness Test Checklist

For each task, answer all three. All three must be YES for the task to be AI-ready.

| Test | Question | Yes/No | Reasoning (1 sentence) |
|------|----------|--------|----------------------|
| 1. Repeatable Structure | Can you do this task the same way every time? | | |
| 2. Describable Inputs | Can you tell Claude exactly what information to use? | | |
| 3. Recoverable Errors | If Claude errs, can you catch and fix it before harm? | | |

**Result:** All YES = AI-Ready (right side of matrix). Any NO = Not AI-Ready (left side).

### Appendix C: Governance Tier Quick Reference

| Tier | Name | What It Covers | AI Handling Rule |
|------|------|----------------|-----------------|
| 1 | Restricted | Individual student data, PII, family financial info | DO NOT prompt. Summarize or aggregate only. |
| 2 | Sensitive | Aggregated data with re-identification risk (N < 10) | Aggregate to N >= 10. Check cell sizes. Never name individuals in small-cell contexts. |
| 3 | Internal | Organizational info, partner names, program timelines | OK for Claude. Confirm no student data included. |
| 4 | Public | Published information, cleared for public use | Use freely. No constraints. |

### Appendix D: Human-AI Balance Definitions

| Modality | Plain Language | When to Use | Human Role | Claude Role |
|----------|---------------|-------------|-----------|-------------|
| Automation | **Hand it off** | Task is fully specified, inputs clear, errors easy to catch | Verify output, approve for use | Produce complete output from specified inputs |
| Augmentation | **Draft together** | Task needs human relationship context, creative judgment, or stakeholder-specific tone | Provide context, edit for tone and nuance, add information only humans know | Draft content that human refines |
| Agency | **Figure it out together** | Task requires ongoing interpretation and judgment; direction not fully clear | Ask questions, provide feedback, make final decisions | Suggest options, iterate based on feedback |

### Appendix E: DC CAP Skill Inventory

Claude capabilities available for deployment planning:

- **Partner Outreach:** Drafting relationship-aware communications to university partners
- **Data Summary:** Generating analytics summaries, demographic breakdowns, metric reports
- **Policy Brief:** Summarizing regulatory or program policy for different audiences
- **Proposal/Report Draft:** Writing funder communications, grant narratives, impact summaries
- **Process Documentation:** Creating how-to guides, procedures, checklists
- **Research Summary:** Synthesizing external research, trend analysis, competitive landscape

### Appendix F: Facilitator Notes on Common Patterns in Task 4

**Pattern 1: Over-deploying**
Participants put 5+ tasks in Deploy Now because they are enthusiastic about AI's potential. They skip or rush the AI-Readiness Test. Push back on the reasoning, not the count — if all 5 genuinely pass all three tests, that is fine. But check: are they being honest about Recoverable Errors? About Describable Inputs?

Coaching move: "Walk me through the AI-Readiness Test for your third Deploy Now task. Which of the three questions gave you the most pause?"

**Pattern 2: Under-deploying**
Participants put 5+ tasks in Human Core because they are cautious about AI or protective of their craft. This may reflect genuine governance awareness (they understand the risks) or risk aversion (they default to "keep human" without rigorous analysis). The reasoning quality distinguishes them.

Coaching move: "Pick one task you put in Human Core. Which of the three readiness tests does it fail? Is that failure structural, or could it be addressed with better prompt design or a governance safeguard?"

**Pattern 3: Missing cross-unit connections**
This is the most common gap in Task 4. Participants think in their silo. They map their own tasks, triage their own tasks, plan their own deployment — without considering the data they receive from other units, the outputs they send to other units, or the shared audiences they communicate with.

Coaching move: "What inputs does your unit receive from other units? What outputs do you send? Where do those handoff points create opportunities or dependencies for AI deployment?"

**Pattern 4: Vague ROI**
"This would save time" without math. "Claude is faster" without measuring faster-than-what. The ROI case collapses without specifics because there is no way to verify the claim or set success metrics.

Coaching move: "How long does this task take you right now? How many times do you do it per month? Show me the math."

**Pattern 5: Wishlist Q3 plans**
Activities without constraints, sequencing, or success metrics. "Train everyone, deploy everything, measure results." A plan without constraints is not a plan — it is a hope.

Coaching move: "What has to be true before step 3 can happen? Who needs to approve step 2? What happens if your best trainee is on vacation in August?"

**Pattern 6: Governance-strategy disconnect**
Participants classify governance tiers correctly in their deployment map but do not carry that classification into the triage or Q3 plan. The strategy ignores the governance layer — as if deployment decisions and data handling decisions are separate.

Coaching move: "You classified this task as Tier 2 in your deployment map. How does that classification shape your implementation plan? What governance checkpoint needs to exist before this goes live?"

---

## Readiness Threshold

**All or most dimensions at Meets or above (no dimension at Below):** Ready to proceed to Capstone. Note any Approaching dimensions as stretch goals for Capstone integration.

**Multiple dimensions at Approaching, none at Below:** One more targeted revision cycle. Focus on the 1-2 dimensions with the widest gap. Use the revision guidance in Stage 4.

**Any dimension at Below Standard:**

> **A note before we continue:** Scoring Below Standard on a dimension does not mean you are behind or failing. You have completed three tasks and built real competencies. Strategic planning is a different cognitive demand, and the gap you are seeing is about applying what you know at a system level, not about missing foundational skills. Let's work through it together.

Re-introduce the relevant concept before another revision. Walk through one example together using the participant's own unit context, then revise.

---

## Time Estimate

- **Deliverable 1 (Deployment Map):** 30-40 minutes
- **Deliverable 2 (Strategic Triage):** 30-40 minutes
- **Deliverable 3 (Q3 Rollout Plan):** 20-30 minutes
- **Total Initial Draft:** 90-120 minutes
- **Revision (based on feedback):** 30-45 minutes
- **Portfolio packaging and reflection:** 15-20 minutes

**Total from start to Capstone-ready:** ~2.5-3 hours

---

## Resources and References

- **2x2 Delegation Matrix Visual** (Appendix A)
- **AI-Readiness Test Checklist** (Appendix B)
- **Governance Tier Quick Reference** (Appendix C)
- **Human-AI Balance Definitions** (Appendix D)
- **DC CAP Skill Inventory** (Appendix E)
- **Facilitator Notes on Common Patterns** (Appendix F)
- **Task 1 SKILL.md** — Governance classification framework and tier definitions
- **Task 2 SKILL.md** — CTCC prompt framework and modality selection
- **Task 3 SKILL.md** — Audit methodology and self-assessment
- **DIMENSION_GLOSSARY.md** — Cross-task dimension mapping and 4D competency reference

---

### Appendix G: Reteaching Module — The AI-Readiness Test

This module is used when a participant scores Below Standard on any dimension. It provides a step-by-step worked example followed by a fill-in template the participant applies to their own work.

---

#### Part 1: Worked Example ("Draft weekly partner reminder emails to 6 university contacts about submission deadlines")

Walk through this example together, step by step:

**Step 1: Repeatable?**
Yes — same structure each cycle. The email format, the recipients, and the purpose are consistent. Only the specific deadlines and any relationship context change.

**Step 2: Describable?**
Yes — I can specify partners, deadlines, and tone. I can write a CTCC prompt that captures the structure, constraints, and content Claude needs.

**Step 3: Recoverable?**
Yes — I review before sending. If Claude gets the tone wrong or includes incorrect dates, I catch it in review. A mistake in a draft email does not cause irreversible harm.

**Step 4: AI-Ready?**
Yes (all 3 tests pass).

**Step 5: Frequency?**
HIGH — biweekly (26 cycles per year).

**Step 6: Quadrant?**
Deploy Now — AI-ready and high frequency.

**Step 7: ROI Math**
Current time: 90 minutes per cycle x 26 cycles/year = 39 hours/year.
AI-assisted time: 20 minutes per cycle x 26 cycles/year = 8.7 hours/year.
Savings: 30.3 hours/year.

---

#### Part 2: Fill-In Template

Apply this to a task you mapped incorrectly.

```
Task: ___

(1) Repeatable? ___
    Why? ___

(2) Describable? ___
    Why? ___

(3) Recoverable? ___
    Why? ___

(4) AI-Ready? ___

(5) Frequency: ___

(6) Quadrant: ___

(7) ROI math:
    Current = ___ x ___ = ___
    AI-assisted = ___ x ___ = ___
    Savings = ___
```

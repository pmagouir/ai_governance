# Task 1: The Governance Classifier

**DC CAP AI Leadership Training Pilot — Skill System v3**

---

## SKILL METADATA

| Field | Value |
|-------|-------|
| **Skill Name** | The Governance Classifier: Data Tiers, Edge Cases, and Your Unit's Guide |
| **Task ID** | pilot-task-1-classify |
| **Week** | 2-3 (April 13-24, 2026) |
| **Competencies** | Diligence (PRIMARY), Description (supporting), Discernment (supporting) |
| **Scaffolding Level** | High — Answer key available, worked examples provided |
| **Time Estimate** | 90-120 minutes initial; 30-45 minutes revision |
| **Prerequisite** | Week 1 onboarding completed (baseline survey, governance acknowledgment, Anthropic Academy courses) |
| **Target Audience** | DC CAP leadership cohort (10 participants across 6 units) |

---

---

## STAGE 1: INTRODUCE

### What This Is and What You'll Do

You'll practice classifying data into DC CAP's governance tiers. There are correct answers for this task, and you'll get feedback on your work. By the end, you'll have a unit-specific governance reference card you can use immediately in your real work.

Here's what you'll learn:

1. **How to classify data against the 4-tier framework.** DC CAP uses four tiers — Restricted, Sensitive, Internal, and Public — and each tier has specific rules for how you can use AI. You'll practice identifying which tier applies to different data types.

2. **How to reason about edge cases.** Some data looks safe until you think about it carefully. You'll work through scenarios where the right answer isn't obvious and learn how to spot the hidden risk.

3. **How data tiers escalate when different data types are combined.** Two datasets that are individually safe can become risky when merged. You'll learn the "combination test" that catches this.

4. **How to create a governance guide for your unit.** Every unit handles different data. You'll build a quick-reference card that names your unit's specific data types, their tiers, and the AI-handling rules that apply.

**Plan for about 2 hours total.** The initial work (reading, classifying, building your card) takes 90-120 minutes. If you get feedback and revise, add another 30-45 minutes.

---

### Your Learning Journey

This task focuses deep on ONE competency: **Diligence** — knowing what data you're handling and what rules apply before you start.

Tasks 2-4 will ask you to design, critique, and strategize. But everything starts here. If you don't know what data you're handling and what rules apply, nothing else works safely. A brilliant prompt is dangerous if it sends restricted data to Claude. A sophisticated audit is meaningless if the underlying data was misclassified from the start.

Diligence is the foundation. This task builds it.

---

### Why This Matters for Your Unit

Each DC CAP unit handles different data. The governance tiers apply to ALL units, but the specific data types and edge cases are different:

- **Student Success** works with individual scholar records every day — case notes, FAFSA details, family financial information. That's Tier 1, the most restricted category.
- **Data & Technology** generates aggregate reports that may look safe until you check the cell sizes. A report showing "4 MSI scholars at Trinity" is an edge case that falls into Tier 2.
- **Development** handles funder financials and partner relationships — mostly Tier 2-3, but funder reports with small-cell outcome data can escalate.
- **Program Strategy** works with cycle timelines and eligibility criteria — often Tier 3-4, but strategic planning documents that reference specific program performance with small participant counts need careful handling.
- **Operations** manages budgets, HR documents, and vendor contracts — Tier 2-3, with special care needed when staff performance data involves small teams.
- **Innovation Hub** tracks pilot metrics and project documentation — Tier 2-3, with edge cases when pilot cohorts are small.

This task teaches you to classify YOUR unit's data, not just generic examples.

---

### The DC CAP Governance Framework

Before you classify anything, you need to know the framework. DC CAP uses a 4-tier system for all data. Each tier has specific rules about what you can and cannot do with AI tools like Claude.

Read this table carefully. You'll reference it throughout the task.

| Tier | Name | What It Includes | Examples at DC CAP | AI Handling Rules |
|------|------|-----------------|-------------------|-------------------|
| **Tier 1** | **Restricted** | Individual student data, family financial information, personally identifiable information (PII), any data that identifies or could identify a specific person | Student names, addresses, SSNs, family income, FAFSA details, citizenship status, individual case notes, individual financial aid records | **DO NOT paste into Claude prompts.** Summarize conceptually only. If your output could identify a student by linking data points, it's Tier 1. Red flag: any named individual or unique combination of attributes. |
| **Tier 2** | **Sensitive** | Aggregated data with re-identification risk (cell size < 10), sensitive organizational decisions, confidential partner information, staff performance data | Scholar counts by [university x award type] when cells are small (N<10), internal budgets, staff evaluations, salary data, sensitive partner negotiations, disaggregated outcome data with small denominators | **Summarize and aggregate before prompting.** Check cell sizes (N >= 10) before including in outputs. Never name individuals or individual institutions in small-cell contexts. The key question: could someone combine this with publicly available information to identify a person? |
| **Tier 3** | **Internal** | Organizational information without individual identifiers, operational data, institutional names, internal program timelines | Partner institution names, program application deadlines, submission status (counts, not individuals), organizational structure, internal targets, strategic planning documents | **Standard internal handling.** Appropriate for Claude. Confirm in your prompt that no individual student data is included. Not for public sharing, but safe for AI processing. |
| **Tier 4** | **Public** | Information already published or cleared for public release | Published program outcomes, press releases, marketing copy, public case studies, general program descriptions, publicly available data | **Use freely.** No special constraints. If it's already on the DC CAP website or in a published report, it's Tier 4. |

---

### The Five Diligence Questions

Before ANY AI use at DC CAP, ask yourself these five questions. They take 30 seconds and prevent 90% of governance mistakes.

1. **What specific data or information is involved?**
   Don't say "student data." Say "scholar case notes for counselor handoff" or "aggregate persistence rates by university partner." Specificity is the first line of defense.

2. **Could any of this data identify a person?**
   Not just "does it have a name?" but "could someone figure out who this is?" A report showing "1 MSI scholar at Dunbar High School" doesn't have a name, but it identifies a person.

3. **What's the smallest unit of analysis?**
   Individual records are Tier 1. Small groups (N<10) are Tier 2. Large aggregates (N>=10) are Tier 3. Published data is Tier 4. The smallest unit drives the classification.

4. **What tier does this fall into?**
   Use the table above. When in doubt, classify UP (more restrictive), not down.

5. **What constraints does that tier impose?**
   Tier 1: don't paste it. Tier 2: aggregate first, check cell sizes. Tier 3: safe for Claude, confirm no individual data. Tier 4: use freely.

These questions will come back in every task. By Task 4, they should be automatic.

---

### The Combination Test

This is the concept most people miss on their first pass, so pay attention.

**When two data sets are combined, the combined dataset may be a higher tier than either individual set.**

Here's an example:

- **Dataset A:** University partner names (Trinity, Howard, Bowie State, etc.) — Tier 3. These are public institutional names. No individual data.
- **Dataset B:** Scholarship amounts by university, showing that one university has only 3 scholars in the MSI program — Tier 2 on its own because of the small cell.
- **Combined:** If someone knows which university has 3 MSI scholars AND can look up who from that university is enrolled in a scholarship program (information that may be publicly available through the university), they might identify specific individuals. The combination escalates risk.

The combination test asks one question:

> "If someone had access to this output AND publicly available information, could they identify an individual?"

If the answer is yes — or even maybe — the combined dataset is at least Tier 2, regardless of the individual tiers.

This matters because people often think about data in isolation. "Partner names are Tier 3." "Award counts are Tier 3 if aggregated." Both true in isolation. But put them together with small cells, and you're in Tier 2 territory.

You'll practice the combination test in every scenario in Stage 2.

---

### How This Task Connects to Everything Else

This is Task 1 of 4 (plus a capstone). Here's the progression:

| Task | What You Do | Primary Competency |
|------|------------|-------------------|
| **Task 1: CLASSIFY** (this task) | Classify data, reason about edge cases, build your unit's governance guide | Diligence |
| **Task 2: CREATE** | Design and execute an AI-assisted workflow using your real work | Description |
| **Task 3: CRITIQUE** | Evaluate AI output, diagnose failures, improve systems | Discernment |
| **Task 4: STRATEGIZE** | Map your unit's AI deployment strategy | Delegation |
| **Capstone** | Synthesize your growth, build a teaching module, showcase your work | All four |

Everything starts with Diligence. The governance classification you learn here shows up in every subsequent task. Your quick-reference card from this task becomes your starting point for Task 2.

---

---

## STAGE 2: DRAFT

This is where you do the work. There are two parts:

1. **Part 1:** Classify 6 scenarios (some straightforward, some edge cases, some designed to trick you)
2. **Part 2:** Build a governance quick-reference card for your unit

Take your time. Refer back to the framework and the five Diligence Questions as much as you need.

---

### Part 1: The 6-Scenario Classification

**Instructions:** For each scenario below, provide four things:

1. **Your tier assignment** — Tier 1, 2, 3, or 4
2. **Your primary reasoning** — Which specific data elements drive the classification? Name them.
3. **The combination test** — What changes if this data is combined with data from another scenario? Could the combination enable re-identification?
4. **The governance action** — What handling requirements apply at this tier? What can and can't you do with Claude?

Don't rush. The edge cases are designed to make you think carefully. Getting the right tier with weak reasoning counts less than getting the right tier with strong reasoning.

---

#### Scenario 1 (Clear Case)

A success coach needs to email a scholar's family about a late FAFSA submission. The email includes the scholar's full name, university, expected family contribution (EFC), and a note that the student's award is at risk.

**Your turn:**
- Tier assignment:
- Primary reasoning (which data elements drive this?):
- Combination test (what would combining this data with other information reveal?):
- Governance action (what can/can't you do with Claude?):

---

#### Scenario 2 (Clear Case)

The communications team is drafting a press release about DC CAP's spring application cycle opening. It includes the application deadline, general eligibility requirements, and a quote from the CEO.

**Your turn:**
- Tier assignment:
- Primary reasoning:
- Combination test:
- Governance action:

---

#### Scenario 3 (Edge Case)

The data team produces a report showing scholar counts by university partner and award type (MSI, SAI, Last Dollar). Trinity University shows 4 MSI scholars. Howard shows 87.

**Your turn:**
- Tier assignment:
- Primary reasoning:
- Combination test:
- Governance action:

---

#### Scenario 4 (Edge Case)

A success coach writes a summary of outreach results for the week: "Contacted 6 scholars at Bowie State about DCTAG documentation. 2 have submitted. 4 remain outstanding." The summary doesn't name the scholars but names the university.

**Your turn:**
- Tier assignment:
- Primary reasoning:
- Combination test:
- Governance action:

---

#### Scenario 5 (Edge Case)

Development creates a funder report showing aggregate persistence rates by Ward. Most Wards show 50+ scholars. Ward 5 shows 8 scholars with a 62.5% persistence rate.

**Your turn:**
- Tier assignment:
- Primary reasoning:
- Combination test:
- Governance action:

---

#### Scenario 6 (Tricky — Not What It Looks Like)

A data analyst pulls aggregate scholar counts by high school of origin. The analysis shows 12 high schools, each with 15+ scholars — except Dunbar High School, which shows 1 scholar in the MSI program.

**Your turn:**
- Tier assignment:
- Primary reasoning:
- Combination test:
- Governance action:

---

### ANSWER KEY

**Facilitator reference only.** This answer key is encoded in the skill for assessment use. It is NOT shown to participants during the DRAFT stage. Participants receive feedback during ASSESS (Stage 3) that references these answers.

---

**Scenario 1: Tier 1 — Restricted**

- **Why:** The email contains individual student PII (full name), financial information (expected family contribution), institutional affiliation (university), and sensitive status (award at risk). Each of these alone could be Tier 1; together they are unambiguously Restricted.
- **Key data elements:** Scholar's full name, EFC (family financial data), university, award status
- **Combination risk:** This data is already Tier 1 on its own. Any combination maintains or escalates.
- **Governance action:** DO NOT paste this into Claude. If you need help drafting an email about a late FAFSA, describe the situation generically: "Draft an email to a scholar's family about a late financial aid submission" without any identifying details.

**Scenario 2: Tier 4 — Public**

- **Why:** Everything in this scenario is intended for public release. Application deadlines, eligibility requirements, and CEO quotes are all public information.
- **Key data elements:** Application deadline (public), eligibility requirements (public), CEO quote (authorized for public use)
- **Combination risk:** Combining Tier 4 data with other Tier 4 data stays Tier 4. No escalation pathway here.
- **Governance action:** Use freely with Claude. No special constraints.

**Scenario 3: Tier 2 — Sensitive**

- **Why:** Trinity's MSI cell size (N=4) creates re-identification risk. Howard's N=87 is fine — large enough that no individual is identifiable. But the report as a whole is Tier 2 because the lowest cell drives the classification. Four MSI scholars at Trinity, when cross-referenced with public university enrollment data, could narrow identification significantly.
- **Key data elements:** Scholar counts by [university x award type], specifically Trinity MSI = 4
- **Triggering element:** The N=4 cell. This is below the N>=10 threshold.
- **Combination risk:** Combined with a partner list (publicly available or internal) and public enrollment data from Trinity, someone could potentially identify the 4 MSI scholars.
- **Governance action:** Aggregate before sharing. Either suppress the Trinity MSI cell, combine it with another category (e.g., "Trinity: 4 MSI + SAI combined"), or flag the small cell and restrict distribution. Do NOT paste raw disaggregated data into Claude if any cell is below 10.

**Scenario 4: Tier 2 — Sensitive**

- **Why:** Even without names, "6 scholars at Bowie State, 2 have submitted DCTAG documentation" is a small-cell situation. Six scholars is below the N>=10 threshold. If someone knows which DC CAP scholars attend Bowie State (information that could be gathered from public university data or social connections), they could identify the 2 who submitted and the 4 who haven't.
- **Key data elements:** 6 scholars (small cell), named university, submission status split (2/4)
- **Triggering element:** N=6 with a named university and a behavioral distinction (submitted vs. not submitted)
- **Combination risk:** Combined with Bowie State enrollment data or social knowledge, the 4 who "remain outstanding" become identifiable.
- **Governance action:** Summarize without the university name ("Contacted scholars about DCTAG documentation; 2 of 6 have submitted") or aggregate across multiple universities before sharing. If the summary is only for internal coaching use and not shared with Claude, the risk is lower but the classification is still Tier 2.

**Scenario 5: Tier 2 — Sensitive (Tier 2/3 boundary)**

- **Why:** Ward 5's N=8 with a specific persistence rate (62.5%) creates a small-cell situation. Most Wards are fine (N=50+), but the classification is driven by the smallest cell. With 8 scholars and a 62.5% persistence rate, someone could calculate that 5 persisted and 3 didn't. Combined with publicly available school-level data and Ward 5 residential information, this could narrow to identifiable individuals.
- **Key data elements:** Scholar count by Ward, specifically Ward 5 = 8 scholars, 62.5% persistence
- **Triggering element:** N=8 in Ward 5 with a precise percentage that allows back-calculation
- **Combination risk:** Ward 5 + school data + residential data = potential re-identification pathway. The 62.5% rate means exactly 5 of 8 persisted, which is a very small group.
- **Governance action:** Either suppress Ward 5's data, combine it with an adjacent Ward, or report only the aggregate across all Wards. Flag the small cell before sharing with funders.

**Scenario 6: Tier 1 — Restricted (NOT Tier 3)**

- **Why:** This is the "aggregate = safe" trap. The analysis LOOKS like an aggregate — scholar counts by high school. Eleven of the twelve high schools have 15+ scholars (safely aggregated, Tier 3). But Dunbar High School shows 1 scholar in the MSI program. An "aggregate" with a cell size of 1 is not an aggregate. It is individual-level data. That single scholar is identifiable: anyone who knows which DC CAP scholar attended Dunbar can identify them, and anyone who looks at Dunbar's enrollment records may be able to narrow it further.
- **Key data elements:** Scholar counts by high school of origin, specifically Dunbar = 1 MSI scholar
- **Triggering element:** N=1. This is not a Tier 2 edge case — it's Tier 1. A cell of 1 IS an individual.
- **Combination risk:** Combined with any public information about Dunbar High School graduates or DC CAP scholars, this person is identified.
- **Governance action:** DO NOT include Dunbar's data in any Claude prompt or output. Either suppress the row entirely, combine it with another high school, or report only high schools with N>=10. The analyst should flag this before the report goes anywhere.
- **Common mistake:** Participants catch Scenario 1 (named student) easily but miss Scenario 6 because it LOOKS like aggregated data. This is the most important learning moment in the task.

---

---

### Part 2: Your Unit's Governance Quick-Reference Card

**Instructions:** Create a 1-page reference for your unit. This should be something you could pin next to your monitor and use daily. It's not an abstract exercise — this is a tool for your real work.

Include the following:

---

#### Section A: Your Unit Name

Write the name of your unit.

---

#### Section B: The 5 Most Common Data Types Your Unit Handles

Be specific. Not "student data" but "scholar case notes for counselor handoff" or "aggregate persistence rates by university partner."

Think about the data you touch most often — the things you open, send, analyze, or create at least weekly.

List 5 data types.

---

#### Section C: For Each Data Type, Complete This Card

For each of your 5 data types, provide:

1. **Data type name** (specific)
2. **Tier assignment** (Tier 1, 2, 3, or 4)
3. **Why this tier** — the specific element that drives the classification. Not "because it's sensitive" but "because it includes individual scholar names and financial aid amounts."
4. **AI handling rule** — what you can and cannot do with Claude for this data type. Be concrete: "Safe to paste into Claude" or "Describe the structure to Claude but do not paste raw records" or "Do not use with Claude at all."
5. **The combination risk** — what would escalate this to a higher tier if combined with other data? Name the specific other data type that would cause escalation.

---

#### Section D: Your Unit's Most Likely Edge Case

Every unit has one governance scenario that comes up often and where the tier isn't immediately obvious. Describe yours:

1. **The scenario** (2-3 sentences describing the situation)
2. **Why it's an edge case** (what makes the classification non-obvious?)
3. **The correct classification** (tier + reasoning)
4. **What you'd do** (the specific governance action)

---

### Unit-Specific Guidance

Use the guidance below to help you complete your quick-reference card. Find your unit and read the prompts — they're designed to help you identify your most common data types and edge cases.

---

#### Student Success

**Your highest-frequency data:**
- Scholar case information (Tier 1) — individual records with names, financial details, academic status
- Outreach records (Tier 2 depending on specificity) — who you contacted, what was discussed, what follow-ups are needed
- Program milestone tracking (Tier 2-3) — scholar progress toward degree, holds, completion markers

**Your most common edge case:**
Summarizing outreach results when the university has very few scholars. "I contacted all 5 DC CAP scholars at Bowie State" — even without names, N=5 at a named university with behavioral information (responded/didn't respond) is Tier 2. The temptation is to think "I didn't use any names, so it's fine." The risk is the small cell combined with the named institution.

**Question to help you build your card:** What data do you open or reference most often in a typical week? Is it Salesforce records? Email drafts? Outreach trackers? Start there.

---

#### Program Strategy

**Your highest-frequency data:**
- Cycle timelines and application schedules (Tier 4 when published, Tier 3 when in draft)
- Eligibility criteria and policy documents (Tier 3-4 depending on publication status)
- Strategic planning documents with program performance metrics (Tier 3, but watch for small-program data)

**Your most common edge case:**
Program performance data where specific programs have small participant counts. If DC CAP runs a pilot with 7 participants and you report their completion rate, that's Tier 2 — even though it looks like a program metric, not student data.

**Question to help you build your card:** When you write a strategy memo, what data do you reference? Cycle numbers? Program performance? Participant outcomes? Trace the data source — where does it come from, and could any of it identify a person?

---

#### Data & Technology

**Your highest-frequency data:**
- Aggregate reports and dashboards (Tier 2-3 depending on cell size) — the tier depends entirely on whether any filter produces cells below 10
- Database queries and Salesforce extracts (Tier 1-2 depending on fields) — if the query returns individual records, it's Tier 1; if it returns aggregates, check cell size
- Dashboard configurations and data dictionaries (Tier 3) — the structure of the data, not the data itself

**Your most common edge case:**
Any aggregation where a filter produces cell sizes below 10. This is your bread and butter — you produce reports all the time, and the governance classification changes depending on the filters applied. A report showing "scholars by university" might be Tier 3 (all cells N>=10) or Tier 2 (one cell N<10). The same query, different parameters, different tier.

**Question to help you build your card:** Pick your 3 most-run reports or queries. For each one, what's the smallest cell you've ever seen in the output? If any cell has ever been below 10, that report is a Tier 2 candidate.

---

#### Development & Fundraising

**Your highest-frequency data:**
- Funder communications and stewardship reports (Tier 3) — organizational information about donor relationships, giving history, engagement strategy
- Grant narratives with outcome data (Tier 2-3) — aggregate outcomes are Tier 3, but disaggregated outcomes in small programs can be Tier 2
- Prospect research and donor profiles (Tier 3) — organizational and publicly available information about potential funders

**Your most common edge case:**
Funder reports that include small-cell outcome data disaggregated by program or geography. A funder asks: "How are scholars in Ward 5 performing?" If Ward 5 has 8 scholars, reporting their persistence rate is Tier 2. The funder's request feels routine, but the data classification depends on the cell size.

**Question to help you build your card:** Think about your last 3 funder reports. Did any of them disaggregate outcomes by geography, program type, or university? If so, did you check the cell sizes?

---

#### Operations

**Your highest-frequency data:**
- Budgets and financial reports (Tier 2 when they include individual salary data or small-team allocations; Tier 3 for aggregate organizational budgets)
- HR documents and staff evaluations (Tier 2) — individual performance information, even when anonymized in small teams, can be identifiable
- Vendor contracts and procurement documents (Tier 3) — organizational business information

**Your most common edge case:**
Staff performance data in small teams where individuals are identifiable. If DC CAP has a 3-person Innovation Hub and you report "team performance metrics," anyone who knows the team composition knows whose performance you're describing. Even without names, small teams = identifiable individuals.

**Question to help you build your card:** For any internal report you produce that references staff or team performance, how many people are in the team? If it's under 10, treat individual-level detail as Tier 2.

---

#### Innovation Hub

**Your highest-frequency data:**
- Pilot metrics and experiment results (Tier 2-3 depending on cohort size) — if the pilot cohort is small, outcomes are identifiable
- Project documentation and initiative briefs (Tier 3) — organizational strategy and planning information
- External partnership materials and research summaries (Tier 3-4) — varies by whether the content is published or internal

**Your most common edge case:**
Pilot participant data when cohorts are small. A pilot with 6 participants that reports "4 completed the program" creates the same re-identification risk as any other N<10 situation. The fact that it's an "innovation pilot" doesn't change the governance math.

**Question to help you build your card:** List your active pilots or experiments. How many participants does each have? Any under 10? Those are your Tier 2 edge cases.

---

---

## STAGE 3: ASSESS

### Assessment Overview

Your work will be assessed on 4 dimensions. Each dimension is scored independently using the universal 4-point scale: Exceeds Standard, Meets Standard, Approaching Standard, Below Standard.

This assessment focuses on your understanding and reasoning, not just correct answers. Getting the right tier is necessary but not sufficient — you must also explain WHY it's that tier, cite specific data elements, and demonstrate that you understand the governance implications.

---

### Dimension 1: Classification Accuracy (Diligence)

**What This Measures:**
Whether you correctly identify the governance tier for each of the 6 scenarios.

**Why It Matters:**
If you misclassify a tier, everything downstream is at risk. A Tier 1 dataset treated as Tier 3 means restricted data flowing into Claude prompts. A Tier 2 dataset treated as Tier 4 means small-cell data going to funders or the public.

| Level | Definition |
|-------|-----------|
| **Exceeds Standard** | 6/6 correct with nuanced edge-case reasoning that identifies non-obvious escalation pathways. Your reasoning cites specific data elements, explains the governance principle, and could serve as an exemplar for other participants. |
| **Meets Standard** | 5/6+ correct with reasoning that cites specific data elements from each scenario. You name the triggering element (not just the tier) and connect it to the governance framework. |
| **Approaching Standard** | 3-4/6 correct, OR correct tiers but with weak/generic reasoning that doesn't cite specific data elements. Saying "this is Tier 2 because it's sensitive" without naming WHAT makes it sensitive = Approaching. |
| **Below Standard** | 2 or fewer correct, OR reasoning demonstrates fundamental misunderstanding of the tier framework (e.g., classifying named student data as Tier 3, or treating all aggregates as safe regardless of cell size). |

**Bright line:** A participant who gets the right tier but can't explain WHY is Approaching, not Meets. "This feels like Tier 2" is not reasoning. "This is Tier 2 because Trinity's MSI cell has N=4, which is below the N>=10 threshold and creates re-identification risk when cross-referenced with public enrollment data" is reasoning.

---

### Dimension 2: Boundary Reasoning (Diligence + Discernment)

**What This Measures:**
Whether you can reason about WHY edge cases are edge cases. This is assessed on the 3 edge-case scenarios (Scenarios 3, 4, and 5) only.

**Why It Matters:**
The clear cases (Scenarios 1-2) test whether you've read the framework. The edge cases test whether you UNDERSTAND it. In real work, you'll encounter edge cases constantly. This dimension measures whether you can identify the specific element that triggers a higher tier and explain the underlying governance principle.

| Level | Definition |
|-------|-----------|
| **Exceeds Standard** | Edge-case reasoning identifies the non-obvious triggering element AND articulates the underlying governance principle. Example: "Trinity's N=4 triggers Tier 2 because the N<10 rule exists to prevent re-identification — with only 4 scholars in a specific award type at a named university, someone with access to Trinity's enrollment records could potentially identify those individuals." |
| **Meets Standard** | Correctly identifies the triggering data element and explains why it changes the tier. You name the small cell, the named institution, or the percentage that enables back-calculation. |
| **Approaching Standard** | Identifies the correct tier for edge cases but cannot articulate the mechanism. Right answer, wrong or missing reasoning. Saying "small cell size" without specifying WHICH cell is small and HOW it enables re-identification. |
| **Below Standard** | Edge cases classified incorrectly with no reasoning or fundamentally wrong reasoning (e.g., "Ward 5 data is Tier 4 because it's in a funder report"). |

**Bright line:** Saying "small cell size" without specifying WHICH cell is small and HOW it enables re-identification = Approaching. You must trace the pathway: [specific small cell] + [specific publicly available information] = [identification risk].

---

### Dimension 3: Combination Awareness (Diligence + Discernment)

**What This Measures:**
Whether you can identify when combining data from different sources escalates the governance tier. This is assessed across all 6 scenarios, with particular attention to cross-scenario combination pathways.

**Why It Matters:**
In real work, data rarely exists in isolation. Reports draw from multiple sources. Prompts include context from different systems. The combination test is how you catch escalation before it happens.

| Level | Definition |
|-------|-----------|
| **Exceeds Standard** | Identifies non-obvious cross-scenario combination pathways and explains the re-identification mechanism. Example: "A publicly available partner list + Scenario 3's scholar counts = identifiable scholars at Trinity. Someone who knows Trinity is a DC CAP partner and that Trinity has 4 MSI scholars (Scenario 3) can use Trinity's public enrollment data to narrow identification." |
| **Meets Standard** | Identifies at least one valid combination per edge-case scenario (Scenarios 3, 4, 5) with the escalation mechanism named. You explain WHAT combines with WHAT and WHY the combination is riskier. |
| **Approaching Standard** | Mentions combination risk but analysis is generic. "Combining data could be risky" or "this could be combined with other data" without naming the specific datasets, the specific pathway, or the specific escalation. Applies to only 1-2 scenarios. |
| **Below Standard** | No combination analysis, or fundamentally wrong analysis (e.g., claims Tier 4 data combined with Tier 1 stays at Tier 4, or that combining two Tier 3 datasets always stays Tier 3). |

**Bright line:** Generic combination language ("data could be combined to identify people") without naming specific datasets or pathways = Approaching. You must name what combines with what.

---

### Dimension 4: Governance Operationalization (Diligence + Description)

**What This Measures:**
Whether your Unit-Specific Quick-Reference Card is immediately usable in real work. This is assessed on Part 2 of your submission.

**Why It Matters:**
Knowledge that stays abstract doesn't protect anyone. The point of this task isn't to pass a classification quiz — it's to build a tool you'll use every day. A good quick-reference card means you (and anyone on your team) can classify your unit's data correctly without re-reading the full governance framework every time.

| Level | Definition |
|-------|-----------|
| **Exceeds Standard** | Quick-reference is immediately usable — names real data types from participant's unit (not generic placeholders), correct tier assignments, specific AI-handling rules that name what you CAN and CANNOT do with Claude, and includes at least one unit-specific edge case with correct classification and governance action. A colleague in your unit could pick this up and use it without asking you questions. |
| **Meets Standard** | Names actual unit data types with correct tier assignments and basic handling rules. The card is specific to your unit, not generic. Handling rules are correct but may be less detailed (e.g., "safe for Claude" vs. "safe for Claude — paste the aggregate report directly; do not include individual records"). |
| **Approaching Standard** | Lists tiers generically without unit-specific data types ("we handle student data — Tier 1"), or data types listed with incorrect tiers, or handling rules are vague ("be careful with this data"). The card exists but wouldn't help a colleague make a real governance decision. |
| **Below Standard** | No quick-reference card, or content is too generic to be actionable ("all data should be handled carefully"), or tiers are fundamentally wrong for the listed data types. |

**Bright line:** "Student data — Tier 1 — handle carefully" = Approaching. "Scholar case notes for counselor handoff — Tier 1 — do not paste into Claude; describe the situation generically and ask Claude to help you structure the note" = Meets.

---

### Assessment Output Format

For each dimension, feedback will follow this structure:

```
[DIMENSION NAME] (Primary 4D Competency)

Coaching Orientation:
[1-2 sentences on what this dimension assesses and why it matters for your real work]

Your Level: [Exceeds / Meets / Approaching / Below Standard]

What You Did Well:
[Specific evidence from your submission — cite scenarios, data elements, reasoning]

What Would Strengthen This:
[Name the gap. Cite the specific place in your work where the gap appears.
One sentence on what stronger work looks like.]

Coaching Question:
[A question designed to help you think more deeply about this dimension.
Not a yes/no question — a question that requires reasoning.]

Revision Guidance (if Approaching or Below):
[Numbered list of specific actions to take. Each action should be concrete
and reference a specific part of your submission.]
```

---

### Readiness Check

After assessment, the facilitator determines next steps based on the overall pattern:

**All or most dimensions at Exceeds or Meets (no dimension at Below):**
Ready to package. Offer an extension challenge: classify 2 novel scenarios from another unit's context. This stretches your ability to apply the framework beyond your own unit. Then proceed to Stage 5.

**Multiple dimensions at Approaching, none at Below:**
Targeted revision on the 1-2 dimensions with the widest gap. The participant revises only those sections. Proceed to Stage 4 (REVISE), then return to Stage 3b (REASSESS).

**Any dimension at Below Standard:**

> **A note before we continue:** Scoring Below Standard on a dimension means the concept hasn't clicked yet — it does not mean you are behind or failing. This is your first task, and these governance concepts are new. Most people who reach this level have the same gap, and it clears up quickly with a focused walkthrough. Let's work through it together, and you'll see the difference in your revision.

Re-teaching before revision. Walk through one edge case step-by-step (the Scenario 6 Dunbar example works well for this — it's the most common "aha moment" in the task). After the walkthrough, ask the participant to re-classify one scenario they got wrong. Then proceed to full revision.

---

---

## STAGE 3b: REASSESS (After Revision)

When a participant resubmits revised work, reassess using the SAME rubric from Stage 3. Apply the same four dimensions with the same level definitions.

### Reassessment Protocol

1. **Re-evaluate each dimension** against the rubric. A dimension can improve, stay the same, or (rarely) decrease if the revision introduced new issues.
2. **Produce a delta comparison** showing the transition.
3. **Apply the readiness check** to determine next step.
4. **The participant does NOT need to revise all dimensions.** If only Dimension 2 was Approaching, they revise only the boundary reasoning. The other dimensions carry forward.

### Delta Comparison Format

```
Dimension: Classification Accuracy
  Initial Level: [Level]
  Revised Level: [Level]
  What changed: [Specific evidence of improvement — cite scenarios, reasoning, or data elements]

Dimension: Boundary Reasoning
  Initial Level: [Level]
  Revised Level: [Level]
  What changed: [Specific evidence]

Dimension: Combination Awareness
  Initial Level: [Level]
  Revised Level: [Level]
  What changed: [Specific evidence]

Dimension: Governance Operationalization
  Initial Level: [Level]
  Revised Level: [Level]
  What changed: [Specific evidence]
```

### Reassessment Readiness Check

Apply the same readiness check from Stage 3:
- All/most Meets or above, no Below: proceed to packaging (Stage 5)
- Multiple Approaching, no Below: one more targeted revision cycle
- Any Below: re-teaching + another revision

The goal is Meets Standard across all dimensions. Revision is expected and valuable — it's how learning works.

---

---

## STAGE 4: REVISE

### Targeted Revision Guidance

If your assessment indicates Approaching or Below on one or more dimensions, this stage provides focused revision guidance. Your facilitator will direct you to the specific dimension(s) that need work.

---

### If Approaching on Classification Accuracy

**What's likely happening:** You're getting some tiers right but your reasoning is thin, or you're missing one or two scenarios (likely the tricky one: Scenario 6).

**Revision actions:**
1. **Go back to the 5 Diligence Questions** and re-apply them to each scenario you missed or classified weakly. Write out the answers to all 5 questions for each scenario. Don't skip any.
2. **For each missed scenario,** identify the specific data element that drives the tier. Not "this has student data" but "this contains EFC amounts for a named student" (Scenario 1) or "this aggregate has a cell of N=1 at Dunbar" (Scenario 6).
3. **Rewrite your reasoning** for each scenario you're revising. The reasoning should name: (a) the specific data elements, (b) the tier those elements map to, and (c) the governance action that follows.

**Coaching question:**
Look at Scenario 6 again. The analyst called this an "aggregate analysis." What makes it NOT aggregate? What's the difference between an aggregate with N=15 per cell and an "aggregate" with N=1?

---

### If Approaching on Boundary Reasoning

**What's likely happening:** You identified the right tier for edge cases but couldn't explain the mechanism. You said "small cell" without tracing the re-identification pathway.

**Revision actions:**
1. **For each edge-case scenario (3, 4, 5),** trace the specific data element that triggers the tier escalation. Complete this sentence: "This is Tier 2 because [specific cell] has N=[specific number], which means [specific re-identification pathway]."
2. **For Scenario 3,** explain why Howard's N=87 is fine but Trinity's N=4 is not. What changes at N=10? Why does the threshold exist?
3. **For Scenario 5,** calculate the actual numbers. If Ward 5 has 8 scholars and a 62.5% persistence rate, how many persisted? How many didn't? Could someone with access to Ward 5 school records narrow down who those 3 non-persisters are?

**Coaching question:**
Scenario 4 describes 6 scholars at Bowie State — 2 submitted, 4 haven't. No names are used. Why is this still Tier 2? What publicly available information could someone combine with this summary to identify the 4 who haven't submitted?

---

### If Approaching on Combination Awareness

**What's likely happening:** You mentioned that "combining data could be risky" but didn't name specific combination pathways.

**Revision actions:**
1. **Pick any 2 scenarios from the 6.** Imagine their data lands on the same page — in the same report, the same Claude prompt, or the same email. Ask: "If I combined these two datasets, could someone identify a person?" Write your answer with the specific pathway.
2. **For Scenario 3 specifically,** consider what happens when "Trinity has 4 MSI scholars" appears alongside publicly available partner information. What additional public information would someone need to identify those 4 scholars?
3. **Write one combination test from your own unit's data.** Name two data types your unit handles that are individually safe (Tier 3) but become risky (Tier 2) when combined. Describe the re-identification pathway.

**Coaching question:**
Your unit produces [type of report] regularly. If that report were combined with publicly available [type of information], could anyone identify an individual? Trace the pathway step by step.

---

### If Approaching on Governance Operationalization

**What's likely happening:** Your quick-reference card is too generic. It lists tiers without specific data types from your unit, or the handling rules are vague.

**Revision actions:**
1. **Revisit the unit-specific guidance** in Stage 2 for your unit. Use the guiding question to identify your ACTUAL most-handled data types — not abstract categories, but the specific things you open, send, or create at least weekly.
2. **For each data type on your card,** rewrite the AI handling rule to be concrete. Instead of "be careful," write what you would actually DO: "Paste the aggregate into Claude but first verify all cells are N>=10" or "Describe the situation to Claude without any names, IDs, or financial figures."
3. **Rewrite your edge case.** Describe a real scenario from your last month of work where the tier wasn't obvious. If you can't think of one, use the unit-specific guidance to construct a realistic one.

**Coaching question:**
A new team member joins your unit next week. They ask you: "Can I paste this into Claude?" You look at the data. Using ONLY your quick-reference card (not the full governance framework), can they get the right answer? If not, what's missing from the card?

---

---

## STAGE 5: PACKAGE

### Portfolio Structure

Once your work reaches Meets Standard or above on all dimensions, you'll assemble a final portfolio entry. This becomes part of your pilot record and carries forward into Task 2.

---

#### 1. Header Block

```
TASK: The Governance Classifier (Task 1: CLASSIFY)
PARTICIPANT: [Your Name]
UNIT: [Your Unit]
DATE: [Submission Date]
COMPETENCIES: Diligence (PRIMARY), Description (supporting), Discernment (supporting)
WEEK: 2-3 (April 13-24, 2026)
ASSESSMENT LEVEL: [Final Level — the lowest dimension level, or an overall characterization]
```

---

#### 2. Performance Snapshot

A compact table showing your final level on each dimension with one evidence sentence.

| Dimension | Final Level | Key Evidence |
|-----------|-------------|--------------|
| **Classification Accuracy (Diligence)** | [Level] | [1-2 sentences citing specific scenarios and reasoning] |
| **Boundary Reasoning (Diligence + Discernment)** | [Level] | [1-2 sentences citing edge-case analysis] |
| **Combination Awareness (Diligence + Discernment)** | [Level] | [1-2 sentences citing cross-scenario pathways] |
| **Governance Operationalization (Diligence + Description)** | [Level] | [1-2 sentences citing quick-reference card specificity] |

---

#### 3. Growth Story

Write 3-5 sentences about what you learned about governance classification through this task. This is your narrative — what shifted in how you think about data.

Prompts to guide your writing:
- What was your biggest misconception going in?
- Which scenario surprised you most?
- What will you do differently in your real work because of this task?

---

#### 4. Participant Reflection

**Data-grounded reflection prompt (personalized based on assessment):**

Your strongest dimension was **[X]** ([level]). Your widest gap was in **[Y]** ([level]).

**Reflection questions:**
- What's different about how you approached [X] compared to [Y]?
- What would you tell a colleague in your unit who encounters a classification they're unsure about?
- Name one data type from your daily work that you now see differently because of this task.

Write 3-4 paragraphs.

---

#### 5. Facilitator Quick-Hit

**Pattern observation:** [Facilitator writes 2-3 sentences identifying what this participant's work reveals about common governance understanding patterns — strengths, misconceptions, areas where peer discussion would help]

**Discussion question for peer learning:** [A question this participant's work raises that the cohort could discuss. Example: "This participant identified the Dunbar N=1 issue but initially missed the Bowie State N=6 issue. What's different about these two situations, and why is the second harder to catch?"]

---

#### 6. The Quick-Reference Card

Include the participant's unit-specific governance quick-reference card as a portfolio appendix. This is the tangible deliverable that carries forward.

**This card will be referenced in Task 2.** When participants begin Task 2 (CREATE), they'll use this card to classify the data in their real work task. It's not just a portfolio artifact — it's a working tool.

---

#### 7. Cross-Task Note

Include a forward-looking note:

> **Looking Ahead to Task 2:** In the next task, you'll use this governance framework to classify the data in a real work task from your unit. Your quick-reference card will be your starting point. You won't have an answer key — you'll be making classification decisions on your own data. The edge-case reasoning you practiced here is exactly what you'll need when your own data doesn't fit neatly into a tier.

---

### Formatting Guidelines

Use DC CAP brand formatting:
- **Header font:** Navy (#101A4C)
- **Section headers:** Purple (#8352FF)
- **Display font:** Akkordeon
- **Body font:** Noto Serif

If docx rendering is unavailable, output clean markdown with the brand colors noted in comments for later formatting.

---

---

## APPENDICES

### Appendix A: Governance Tier Framework (Quick Reference)

A condensed version of the 4-tier table for facilitator and participant reference.

| Tier | Name | Identifiable? | Cell Size Rule | AI Use Rule | Example |
|------|------|--------------|---------------|-------------|---------|
| **1** | Restricted | Yes — individual-level data | N/A (never aggregate individual data into Claude) | Do NOT paste into Claude | Student name, SSN, EFC, FAFSA details |
| **2** | Sensitive | Potentially — small cells (N<10) leak identity | N < 10 = re-identification risk | Aggregate first; check cell sizes; suppress or combine small cells | Scholar counts by [university x award] when any cell < 10 |
| **3** | Internal | No — organizational data, no individuals | N/A — safe to aggregate | Safe for Claude; confirm no individual data in prompt | Partner names, deadlines, submission status (counts not names) |
| **4** | Public | No — already published | N/A | Use freely | Published outcomes, press releases, program descriptions |

---

### Appendix B: Combination Test Flowchart

Use this decision tree when you're combining data from multiple sources:

```
START: You have data from 2+ sources going into the same prompt, report, or output.

Step 1: What is the highest tier of any individual source?
  --> If Tier 1: STOP. The combined output is Tier 1. Do not paste into Claude.
  --> If all sources are Tier 4: Combined output is Tier 4. Proceed.
  --> If Tier 2 or 3: Go to Step 2.

Step 2: Does combining the sources create any new cell sizes below 10?
  (Example: Source A has university names. Source B has scholar counts.
   Combined, you can see that Trinity has 4 MSI scholars.)
  --> If yes: Combined output is Tier 2. Check cell sizes before proceeding.
  --> If no: Go to Step 3.

Step 3: Apply the re-identification test.
  "If someone had access to this combined output AND publicly available
   information, could they identify an individual?"
  --> If yes or maybe: Combined output is Tier 2. Apply Tier 2 handling.
  --> If no: Combined output stays at the highest individual source tier.

END: You have your combined classification. Apply the handling rules for that tier.
```

---

### Appendix C: Unit-Specific Guidance Summary

A consolidated reference of the most common data types and edge cases by unit.

| Unit | Most Common Tier 1 Data | Most Common Edge Case | Tip |
|------|------------------------|----------------------|-----|
| **Student Success** | Scholar case notes, FAFSA details, individual records | Outreach summaries with small university cells | Check cell size even when no names are used |
| **Program Strategy** | (Rarely handles Tier 1 directly) | Small-program performance data | Pilot programs with < 10 participants = Tier 2 |
| **Data & Technology** | Raw database queries with individual fields | Any aggregation with filters that produce N<10 cells | Same query, different parameters = different tier |
| **Development** | (Rarely handles Tier 1 directly) | Funder reports with small-cell outcome disaggregation | Funders ask reasonable questions that produce Tier 2 answers |
| **Operations** | HR documents, individual salary data | Staff performance in small teams | A 3-person team's "aggregate" performance = identifiable individuals |
| **Innovation Hub** | (Rarely handles Tier 1 directly) | Pilot cohort data with small N | Innovation doesn't exempt data from governance rules |

---

### Appendix D: Facilitator Notes on Common Misconceptions

These are the patterns facilitators should watch for across the cohort. Each misconception shows up predictably in participant submissions. Knowing them in advance helps you give targeted, efficient feedback.

---

**Misconception 1: "Aggregate = Safe"**

**What it looks like:** Participants assume that any aggregated data is Tier 3 or Tier 4 without checking cell size. They classify Scenario 3 (Trinity N=4) as Tier 3 because "it's a count, not a name."

**Why it happens:** The intuition that "I removed the names, so it's safe" is strong and partially correct. Names ARE the most obvious identifier. But the tier framework accounts for re-identification risk, not just direct identification.

**How to address it:** Walk through Scenario 6 (Dunbar N=1). Ask: "If I told you there's exactly 1 MSI scholar from Dunbar High School, could you figure out who that is?" The N=1 case makes the principle viscerally clear. Then ask: "What about N=4? N=8? Where does it become safe?" This leads naturally to the N>=10 threshold.

---

**Misconception 2: "Published = Public"**

**What it looks like:** Participants classify a prompt as Tier 4 because it contains a published blog post, without noticing that the prompt also includes unpublished internal targets. Watch for this pattern in quick-reference cards and real-work discussions.

**Why it happens:** "Published" and "public" feel like synonyms. And the blog IS public. The error is in not examining ALL the data in the prompt — just the most salient piece.

**How to address it:** Ask: "What's in the prompt besides the blog post?" Then: "Have the internal targets been published?" This usually triggers the correction. Reinforce: the tier of a prompt is determined by ALL its contents, not just the most visible piece.

---

**Misconception 3: "N of 1 Is Obvious"**

**What it looks like:** Participants easily catch Scenario 1 (a named student) but miss Scenario 6 (an aggregate with N=1). They see "aggregate scholar counts by high school" and classify it as Tier 3 without examining the individual cells.

**Why it happens:** Scenario 1 has a name — the identifier is visible. Scenario 6 hides the identifier inside a table. The data LOOKS aggregate. You have to actively check each cell to notice the N=1.

**How to address it:** This is the single most important learning moment in the task. Ask: "Read the Dunbar row. What do you see?" Then: "How many people are in that row?" Then: "Is that an aggregate?" The progression from "it's a count" to "it's one person" is the breakthrough.

---

**Misconception 4: "Combination Test Is Theoretical"**

**What it looks like:** Participants do the combination test generically. "Combining data could enable re-identification" — true but useless. They don't trace specific pathways.

**Why it happens:** The combination test requires you to think like an adversary: "What else would I need to identify someone?" This is an unfamiliar mode of thinking for most people. It feels paranoid or theoretical.

**How to address it:** Make it concrete. Use Scenario 3 (Trinity N=4). Say: "You're a journalist. You have a DC CAP partner list (public, from a DC CAP event). You have the scholar counts from Scenario 3 (leaked, or obtained through a data request). You know Trinity has 4 MSI scholars. What do you Google next?" Walking through the actual steps makes the pathway real.

---

### Appendix E: Extension Challenge (For Exceeds-Track Participants)

If a participant scores Meets or Exceeds on all 4 dimensions and wants additional challenge, offer these 2 novel scenarios from a DIFFERENT unit's context:

**Extension Scenario A (for Student Success participants — from Data & Technology's context):**
The data team is building a dashboard that shows real-time scholar enrollment status by university partner. The dashboard allows filtering by award type, cohort year, and Ward of origin. When all filters are active, some cells show 1-3 scholars. The dashboard is only visible to internal staff.

*Classify this. What tier? What's the governance action? Does "internal only" change the classification?*

**Extension Scenario B (for Data & Technology participants — from Development's context):**
Development is preparing a case study for a major funder. The case study tells the story of "a scholar from Southeast DC who was the first in her family to attend a 4-year university, received an MSI scholarship, and graduated from a historically Black university in Maryland." No name is used.

*Classify this. Is it really anonymous? What publicly available information could someone combine with this description to identify the scholar?*

These extensions push participants to apply the framework in unfamiliar contexts, which is the truest test of whether the learning has transferred.

**Cross-Skill Stretch:** For participants who Exceed on all Task 1 dimensions, connect the extension challenge to their anticipated growth edge on a later task. For example: "Classify these 2 scenarios from another unit — and for each, write the severity assessment you would give if these data handling patterns appeared in a funder communication. This connects your classification strength to the severity calibration you'll practice in Task 3." This creates a forward bridge between the participant's strongest skill and an upcoming cognitive demand they haven't encountered yet.

---

---

## FACILITATION NOTES

### Pacing and Session Design

**Recommended approach:** Assign Stage 1 (INTRODUCE) as pre-reading before the session. Use the live session for Stage 2 (DRAFT) work time with facilitator available for questions. Assess asynchronously. Schedule revision time in the following session if needed.

**Common pacing issues:**
- Participants spend too long on Part 1 (scenarios) and rush Part 2 (quick-reference card). Suggest a time check at the 60-minute mark.
- Edge cases (Scenarios 3-6) take longer than clear cases (1-2). This is expected and desirable.
- The quick-reference card is the most valuable deliverable for the participant's real work. Don't let it become an afterthought.

### Peer Learning Opportunities

After initial assessment, consider pairing participants from different units for 15-minute peer discussions:
- "Show your colleague your quick-reference card. Can they understand it without your help?"
- "Pick one of your partner's edge cases and try to classify it using only the 5 Diligence Questions."
- "Compare your combination test answers for Scenario 3. Did you identify the same pathways?"

### Connection to the Broader Pilot

This task establishes the governance foundation for everything that follows:
- **Task 2 (CREATE):** Participants use their quick-reference card to classify data in a real work task
- **Task 3 (CRITIQUE):** Participants evaluate AI output for governance violations — they need the classification skills from this task to spot them
- **Task 4 (STRATEGIZE):** Participants map their unit's AI deployment — governance tier is one axis of the decision matrix
- **Capstone:** Participants self-assess their Diligence growth, starting from this task as the baseline

If a participant's governance understanding is shaky after Task 1, it compounds through every subsequent task. Invest the revision time here. It pays dividends later.

---

### Appendix F: Reteaching Module — The Re-Identification Pathway

This module is used when a participant scores Below Standard on any dimension. It provides a step-by-step worked example followed by a fill-in template the participant applies to their own work.

---

#### Part 1: Worked Example (Scenario 6 — Dunbar N=1)

Walk through this example together, step by step:

**Step 1: What data is in the report?**
High school of origin + MSI program membership + scholar count.

**Step 2: What's the smallest cell?**
N=1 at Dunbar.

**Step 3: Could someone identify this person?**
Yes: if you know who attends Dunbar and is in the MSI program, you've identified them.

**Step 4: What tier?**
Tier 1 (individual identifiable).

**Step 5: What constraint?**
Do not paste into Claude; describe generically.

---

#### Part 2: Fill-In Template

Now apply this to a scenario you classified incorrectly.

```
Scenario ___:

(1) What data is in the report?
___

(2) Smallest cell?
___

(3) Could someone be identified? How?
___

(4) What tier?
___

(5) What constraint applies?
___
```

# Task 2: CREATE — The Workflow Designer

**DC CAP AI Leadership Training Pilot — Skill System v3**

---

## SKILL METADATA

| Field | Value |
|-------|-------|
| **Skill Name** | The Workflow Designer: Plan, Execute, Reflect |
| **Task ID** | pilot-task-2-create |
| **Week** | 3-4 (April 20 - May 1, 2026) |
| **Competencies** | Description (PRIMARY), Delegation (supporting), Diligence (supporting), Discernment (supporting) |
| **Scaffolding Level** | Medium — CTCC framework provided, checkpoints at governance verification and post-execution |
| **Time Estimate** | 60-90 minutes initial; 20-30 minutes revision |
| **Prerequisite** | Task 1 completed (CLASSIFY) |
| **Target Audience** | DC CAP leadership cohort (10 participants across 6 units) |

---

## A Word Before You Start

In Task 1, you learned to classify data — to look at a scenario and determine what governance tier applies, what constraints that creates, and how to handle it safely. You built a quick-reference card for your unit.

Now you'll use that governance fluency to design and run an AI-assisted workflow on a real task from your own work.

Here's what's different: you're not just executing a pipeline. You're DESIGNING one. Before you touch Claude, you'll plan the entire workflow — governance classification, prompt, human-AI balance, predicted outcomes. After you execute, you'll compare what you planned to what actually happened.

That gap — the plan-vs-reality comparison — is where the deepest learning happens.

Plan for about 60-90 minutes for the initial work. If you revise based on feedback, add another 20-30 minutes.

---

## STAGE 1: INTRODUCE

### Opening (Cross-Task Reference)

In Task 1, you reached [level] on Classification Accuracy and [level] on Governance Operationalization. That governance fluency is the foundation for today's work — you'll use it to constrain your workflow design. Your quick-reference card from Task 1 is your starting point. Keep it open.

---

### What This Is

In Task 1, you learned to classify data. Now you'll USE that classification to design and run an AI-assisted workflow on a real task from your own work.

The big difference: you're not just executing a pipeline — you're DESIGNING one. You'll produce three deliverables in sequence:

1. **Workflow Design Document** — your complete plan, written BEFORE you open Claude
2. **Execution Record** — what actually happened when you ran the workflow
3. **Plan-vs-Reality Comparison** — your analysis of the gap between 1 and 2

The third deliverable is the most important. Anyone can run a prompt. The skill that makes you a leader in AI adoption is understanding WHY your design predictions were right or wrong — and what you'd change next time.

---

### What You'll Learn

- How to design a complete AI-assisted workflow BEFORE executing it
- How governance classification constrains prompt design (tracing the line from tier to constraint to prompt element)
- How to choose the right human-AI balance for your specific scenario
- How to execute, document edits rigorously, and reflect honestly on what worked
- The metacognitive skill of plan-vs-reality analysis — understanding WHY your design predictions were right or wrong

---

### The Setup: Choosing Your Real Work Task

You will select ONE task from your current responsibilities that meets all four criteria:

1. **You've done it at least twice before** — So you know the baseline, the pain points, the quality bar
2. **Creates a deliverable for someone** — Email, report, analysis, brief, summary (something tangible)
3. **Involves data or information with governance considerations** — Not every task qualifies; you need something that requires thinking about data handling
4. **Would benefit from AI assistance** — You can see how Claude could help (you're not forcing AI into a task where it doesn't belong)

---

### Task Selection Guidance by Unit

Here are examples for each of the 6 DC CAP units. Pick one that fits your role, or design your own if your work is different. Each example includes the task, typical time investment before AI, and the governance considerations you'd need to address.

#### STUDENT SUCCESS

1. **DCTAG reminder email** — A periodic email to DC CAP scholars reminding them about their DCTAG obligations or program changes. You've sent 3-4 of these; they always need updates for names, deadlines, and policy changes. Before AI: ~2 hours writing + editing. Governance consideration: Scholar names and cohort year (Tier 2/3 depending on context). AI could draft; you'd personalize and verify accuracy.

2. **Case summary for counselor handoff** — A brief written summary of a scholar's status (progress toward degree, financial situation, any holds or concerns) that you send to a counselor or advisor. Before AI: ~45 minutes per student. Governance consideration: Includes individual student data (Tier 1) — sensitive. You could summarize key points conceptually and ask Claude to structure the narrative without pasting raw data.

3. **Weekly scholar outreach brief** — A one-page summary of outreach actions for your team (who reached out, to whom, what was discussed, what follow-ups are needed). Before AI: ~1 hour. Governance consideration: Scholar names and interaction records (Tier 2). Could be summarized and handed to Claude for structure.

#### PROGRAM STRATEGY

1. **Cycle timeline brief** — A document explaining the spring cycle timeline to staff, funders, or partners (application opens, deadline, notification dates, etc.). You update this 2-3 times per year. Before AI: ~1.5 hours of drafting + coordination with multiple teams. Governance consideration: Public operational timelines (Tier 4) — no data sensitivity. Pure content organization. Claude could draft from your notes; you'd verify accuracy and tone.

2. **Eligibility FAQ update** — When policies change, you update the FAQ that scholars and counselors use. Before AI: ~2-3 hours per update. Governance consideration: Program policies (Tier 3/4) — no individual data. Claude could draft new FAQ entries; you'd verify against actual policy and improve for clarity.

3. **Strategic planning summary** — A brief synthesizing current program performance and proposing next-year priorities. Before AI: ~3 hours of analysis + writing. Governance consideration: Could use aggregated outcomes (Tier 3/4). Claude could help structure; you'd add strategic judgment.

#### DATA & TECHNOLOGY

1. **Scholar demographic breakdown** — A quarterly summary showing scholar composition by demographic (age, state, first-gen status, etc.) for board reports or internal planning. Before AI: ~2 hours of querying + analysis + formatting. Governance consideration: Aggregated scholar data, but with small-cell risk (Tier 2). Must check N >= 10. Claude could generate the analysis framework; you'd run the query, verify, check cell sizes, format.

2. **Monthly analytics summary** — A one-page summary of key metrics for team meetings (applications received, scholars supported, disbursements processed, completion rates). Before AI: ~1.5 hours of data pulling + writing narrative. Governance consideration: Operational metrics (Tier 3). Claude could draft narrative; you'd verify numbers and add context.

3. **Funder data request response** — Funders periodically ask for specific data (outcome rates, demographic breakdown, scholarship amounts by type). Before AI: ~2-3 hours per request (querying, analysis, writing response). Governance consideration: Often a mix of aggregated outcomes (Tier 3/4) and some sensitive aggregate data (Tier 2). Claude could help frame the response; you'd verify data accuracy and governance compliance.

#### DEVELOPMENT & FUNDRAISING

1. **Funder update email or letter** — A quarterly or annual update to donors summarizing the year's impact and the coming year's priorities. Before AI: ~2-3 hours of writing + internal coordination. Governance consideration: Published outcomes and strategic direction (Tier 3/4) — no individual data in funder communications. Claude could draft; you'd add relationship context and strategic nuance.

2. **Program outcome summary for a proposal** — When proposing a new program or expansion, you write about current impact (how many scholars served, what outcomes achieved, what gaps remain). Before AI: ~2 hours of research + writing. Governance consideration: Aggregated outcomes (Tier 3/4). Claude could draft narrative; you'd verify accuracy and verify tone matches your funder relationships.

3. **Stewardship case study** — An impact story about a specific scholar's journey, to share with donors. Before AI: ~1.5-2 hours of research + writing. Governance consideration: Could include individual scholar data, but only if the scholar consents (check your release process). If using published case study or released narrative, Tier 3/4. If individual data without consent, Tier 1. Claude could draft from an outline; you'd verify accuracy, tone, and governance compliance.

#### OPERATIONS

1. **Monthly budget summary** — A report tracking expenditures by category, comparing to forecast. Before AI: ~1 hour of data compilation + writing summary analysis. Governance consideration: Financial data (Tier 3 if internal). Claude could generate summary; you'd verify accuracy and add strategic interpretation.

2. **Vendor communication — RFP response draft** — When responding to a vendor's RFP or proposal request, you draft requirements and context. Before AI: ~1.5 hours of writing + coordination. Governance consideration: Operational needs and budget parameters (Tier 3). Claude could draft; you'd refine for specificity and accuracy.

3. **Process documentation** — When documenting a process (expense reimbursement, hiring, vendor approval), you write step-by-step instructions. Before AI: ~2-3 hours of drafting + review. Governance consideration: Operational procedures (Tier 3/4). Claude could draft from your outline; you'd verify completeness and clarity.

#### INNOVATION HUB

1. **Partnership proposal brief** — A document proposing a partnership with an institution or organization. Before AI: ~2-3 hours of drafting + research. Governance consideration: Strategic direction and partnership context (Tier 3/4). Claude could draft from your notes; you'd refine for partnership tone and strategic fit.

2. **Pilot initiative plan** — A plan for testing a new approach (curriculum change, outreach method, technology integration). Before AI: ~2-3 hours of research + writing. Governance consideration: Strategic planning and operational design (Tier 3/4). Claude could help structure; you'd add innovation judgment.

3. **Research or trend summary** — A brief synthesizing external research or sector trends relevant to DC CAP (e.g., "How are funders thinking about AI risk?" or "What's new in first-gen support models?"). Before AI: ~2-3 hours of research + writing. Governance consideration: External research and analysis (Tier 3/4). Claude could draft from your research notes; you'd verify accuracy and interpret implications.

---

### The CTCC Framework (Quick Reference)

This is the prompt design framework you'll use throughout the pilot. Learn it here — you'll refine it in every task that follows.

- **Context:** Who you are, what project, what audience, why it matters. Give Claude the background it needs to produce relevant output.
- **Task:** The exact deliverable with format specifications. Be specific: "Draft a 300-word quarterly update email" not "help me write something."
- **Constraints:** Audience, tone, length, format, "do not" rules, and governance constraints from your tier classification. This is where Diligence meets Description.
- **Content:** Specific data, names, dates, source material Claude needs. The raw ingredients for the output.

---

### Three Ways to Work with AI

Here are three ways to work with AI. Choose the one that fits your task — not your comfort level.

| Approach | What Happens | Best When | Human Role |
|----------|-------------|-----------|-----------|
| **Hand it off** (Automation) | Claude produces everything; you verify | Task fully specified, inputs clear, errors easy to catch | Verify accuracy, approve for use |
| **Draft together** (Augmentation) | Claude gives a starting draft; you reshape | Task needs human relationship context, creative judgment, or audience-specific tone | Edit for tone, add context, verify governance |
| **Figure it out together** (Agency) | You and Claude iterate; you make decisions | Direction isn't clear, or requires ongoing interpretation | Ask questions, provide direction, make strategic choices |

---

### Edit Type Tags (Quick Reference)

You'll use these tags to categorize your edits during execution. They help you see patterns in how you modify AI output.

| Tag | When to Use |
|-----|-------------|
| **Accuracy Fix** | Corrected a factual error, unverifiable claim, or missed requirement |
| **Tone Adjustment** | Changed voice, register, or formality to match audience |
| **Strategic Addition** | Added context, framing, or information Claude didn't have |
| **Removal** | Deleted content that was unnecessary, wrong, or risky |

---

### Time Estimate

- **Deliverable 1 (Workflow Design Document):** 20-30 minutes
  - Governance classification + CTCC prompt design + human-AI balance decision + predictions
- **Deliverable 2 (Execution Record):** 25-35 minutes
  - Running prompt + documenting edits + writing human judgment layer
- **Deliverable 3 (Plan-vs-Reality Comparison):** 15-25 minutes
  - Governance check + diagnosis + redesign proposal
- **Revision (if needed):** 20-30 minutes
  - Targeted revision on 1-2 dimensions based on assessment feedback

---

## STAGE 2: DRAFT

You'll produce three deliverables in sequence. The order matters: design FIRST, execute SECOND, compare THIRD.

---

### Deliverable 1: Workflow Design Document (BEFORE Execution)

Write this BEFORE you open Claude. This is your plan.

---

#### Section A: Governance Classification

Start with what you learned in Task 1. Pull out your quick-reference card.

1. **What task did you select?** (1-2 sentences describing the deliverable, audience, and frequency)

2. **What data is involved?** List every piece of information you'll use or reference in this task. Be specific — don't write "student data." Write "scholar names, enrollment status, GPA ranges, partner institution."

3. **What tier?** Reference your Task 1 quick-reference card. Classify the data using the 4-tier framework:
   - Tier 1 (Restricted): Individual student data — do NOT paste into prompts
   - Tier 2 (Sensitive): Aggregated data with re-identification risk (N < 10) — aggregate safely
   - Tier 3 (Internal): Organizational info, no identifiers — safe for Claude
   - Tier 4 (Public): Already public or cleared — use freely

4. **What constraints does the tier impose?** What can and cannot be included in your prompts? Be specific to YOUR data. (Not "be careful" — what exactly must you exclude, aggregate, or handle differently?)

**Governance Checkpoint:** Before proceeding, verify that your tier classification constrains your prompt. If Tier 2 or above, your CTCC prompt MUST reflect those constraints — you should be able to point to specific prompt elements that exist BECAUSE of your classification. If your classification has no impact on your prompt, you may have misclassified.

---

#### Section B: CTCC Prompt Design

Write your complete CTCC prompt. This is the exact text you'll paste into Claude in Deliverable 2.

```
[CONTEXT]
[Who you are, what project, what audience, why it matters]

[TASK]
[The exact deliverable with format specifications]

[CONSTRAINTS]
[Governance constraints from Section A + audience + tone + length + format + "do not" rules]

[CONTENT]
[Specific data, names, dates, source material Claude needs]
```

**Self-check before moving on:**
- Does your Context give Claude enough background to produce relevant output?
- Is your Task specific enough that you'd know whether Claude succeeded or failed?
- Do your Constraints include at least one governance constraint from Section A?
- Does your Content include the raw material Claude needs — without violating your governance classification?

---

#### Section C: Human-AI Balance Decision

**Which approach will you use?**
- Hand it off (Automation)
- Draft together (Augmentation)
- Figure it out together (Agency)

**Why this approach for THIS task?** Don't just name it — explain why this approach fits your specific task's characteristics. Reference what makes this task suitable for this level of AI involvement. (2-3 sentences)

**What does the human bring?** Name the specific judgment, context, or verification that only you can provide. Be concrete. Not "oversight" — what exactly do you know, check, or add that Claude cannot? (2-3 sentences)

**What does Claude handle?** What parts of the task benefit from AI? What would take you time that Claude can do quickly and well? (1-2 sentences)

---

#### Section D: Predictions

Before you execute, predict what will happen. Be honest — this isn't graded on accuracy, but on genuine engagement.

**Before running your prompt, write 2-3 sentences:** What is the biggest uncertainty in your output, and what specific edit types do you expect to make?

---

#### Your Deliverable 1 Output

```
DELIVERABLE 1: WORKFLOW DESIGN DOCUMENT

Section A: Governance Classification
  Task Selected: [1-2 sentences]
  Data Involved: [specific list]
  Tier Classification: [Tier 1/2/3/4 with reasoning]
  Constraints: [what the tier imposes on your prompt design]
  Governance Checkpoint: [confirmed / identified issue]

Section B: CTCC Prompt
  [CONTEXT]
  [TASK]
  [CONSTRAINTS]
  [CONTENT]

Section C: Human-AI Balance
  Approach: [Hand it off / Draft together / Figure it out together]
  Why This Approach: [2-3 sentences]
  What the Human Brings: [2-3 sentences]
  What Claude Handles: [1-2 sentences]

Section D: Predictions
  [2-3 sentences: biggest uncertainty + expected edit types]
```

---

### Deliverable 2: Execution Record (DURING Execution)

Now open Claude and run it.

---

#### Step 1: Run Your Prompt

Copy the CTCC prompt from Section B of your Workflow Design Document — exactly as written — and paste it into Claude. Do not revise the prompt before running it. The point is to see how your planned prompt performs. Save Claude's complete raw output verbatim.

---

#### Step 2: Review and Audit

Read Claude's output critically. Check: task completion, accuracy, tone, governance handling, completeness, and usability. Could you use this (after edits) for its intended purpose?

---

#### Step 3: Document Your Edits

**Document your 3 most significant edits in full.** For each, use this format:

```
[SECTION or PARAGRAPH]
Original: [exact text from Claude's output]
Revised: [your revised text]
Tag: [Accuracy Fix / Tone Adjustment / Strategic Addition / Removal]
Rationale: [Why you made this change — specific to your audience, context, or risk.
           Not "improved clarity." WHY did clarity need improving for THIS audience?]
```

**List remaining edits in the simplified format:**

```
[Section] | [Original → Revised] | [Tag]
```

**Example of strong full edit documentation:**

```
[Opening paragraph]
Original: "Dear University Partners, we are pleased to provide an update on 
          DC CAP program outcomes for the current academic year."
Revised: "Hi Tony — Quick update on where things stand with our scholars 
          at Trinity this quarter."
Tag: Tone Adjustment
Rationale: My prompt asked for "professional but warm" but didn't specify 
           that I send individual emails to each partner dean by first name. 
           Tony at Trinity expects conversational check-ins, not formal 
           broadcast emails. This mismatch tells me my CTCC Constraints 
           weren't specific enough about audience register.
```

**Example of simplified edit documentation:**

```
[Closing paragraph] | "We look forward to continued partnership" → "Talk soon — let me know if you need anything before the board meeting" | Tone Adjustment
```

The full rationale does three things: names the specific audience, explains why the change matters, and connects back to prompt design. That's the standard for your top 3 edits.

---

#### Step 4: Write the Human Judgment Layer

Write 2-3 sentences: What did you bring that Claude couldn't? Not "I provided human oversight" — what YOU specifically checked, added, verified, or decided, and why it required someone with your role and knowledge.

---

#### Step 5: Save Your Final Version

Save the version you'd actually use or send, after all edits.

---

#### Your Deliverable 2 Output

```
DELIVERABLE 2: EXECUTION RECORD

Claude's Raw Output:
[Paste complete output verbatim]

Edit Layer:
[3 most significant edits in full format (Original/Revised/Tag/Rationale)]
[Remaining edits in simplified format: Section | Original → Revised | Tag]

Human Judgment Layer:
[2-3 sentences on what you brought that Claude couldn't]

Final Version:
[Your edited, production-ready output]
```

---

### Deliverable 3: Plan-vs-Reality Comparison (AFTER Execution)

Take your Workflow Design Document (Deliverable 1) and your Execution Record (Deliverable 2). Put them side by side. Answer these three questions honestly.

---

#### Question 1: Governance

Did your tier classification hold up? Did you encounter any data in the process that changed or complicated the classification? (2-3 sentences)

---

#### Question 2: The Diagnosis (most important question)

Pick the biggest gap between your plan and reality. Name the specific design element that caused the divergence — a governance constraint you missed, a CTCC element that was too vague, the wrong modality choice, an unexpected data issue. Explain the causal mechanism: not "it was different" but WHY it was different. (3-5 sentences)

*Sub-considerations to think through as you diagnose:* Which CTCC elements drove outcomes vs. fell flat? Was your modality choice right in hindsight? What do your edit tag counts reveal about prompt design gaps?

---

#### Question 3: The Redesign

If you were doing this task again tomorrow, what ONE thing would you change in your workflow design? Why would that change reduce the gap you diagnosed in Question 2? Be specific — which CTCC element, which constraint, which modality decision? (2-3 sentences)

---

#### Your Deliverable 3 Output

```
DELIVERABLE 3: PLAN-VS-REALITY COMPARISON

1. Governance: [2-3 sentences]
2. The Diagnosis: [3-5 sentences naming specific design element + causal mechanism]
3. The Redesign: [2-3 sentences with specific change + rationale]
```

---

---

## STAGE 3: ASSESS

### Assessment Framework

Your work will be assessed on FOUR dimensions. Each has four qualitative levels: **Exceeds Standard, Meets Standard, Approaching Standard, Below Standard.**

---

### Dimension 1: Design Completeness

**What This Measures:** Your Workflow Design Document is thorough — all CTCC elements present and specific, governance classification visibly constrains the prompt, human-AI balance rationale demonstrates genuine understanding.

**Exceeds Standard**
- All four CTCC elements present, specific, and grounded in your real work context
- Governance classification visibly constrains the prompt: you can trace a line from tier to constraint to a specific element in the CTCC prompt
- Modality rationale demonstrates understanding of all three options (hand it off, draft together, figure it out together) and explains why THIS one fits THIS task — not just "I chose draft together because it seemed right"
- Prediction identifies a specific uncertainty and connects expected edit types to prompt design choices

**Meets Standard**
- All four CTCC elements present and reasonably specific
- Governance classification correct and prompt reflects those constraints
- Modality selected with basic rationale connecting the choice to task characteristics
- Prediction present and honest — names an uncertainty and expected edit types

**Approaching Standard**
- Missing one CTCC element, or one element is too vague to be useful
- Governance classification correct but doesn't visibly constrain the prompt — the classification sits there without affecting the design
- Modality chosen without rationale, or rationale doesn't connect to task characteristics
- Prediction present but generic ("it should be fine" / no specific uncertainty named)

**Below Standard**
- Multiple missing CTCC elements
- Fundamental misalignment between governance classification and prompt design (e.g., classified Tier 2 but no aggregation constraint in prompt)
- No modality rationale, or modality choice contradicts the task description
- Prediction missing

**Bright Line (Approaching to Meets)**

Can you trace a line from the governance tier to a specific constraint to a specific element in the CTCC prompt? If yes, the participant has operationalized governance in their design. If the governance classification sits there without affecting the prompt, that's Approaching — awareness without operationalization.

---

### Dimension 2: Execution Quality

**What This Measures:** Your CTCC prompt produces output that addresses the actual work need, and your edit documentation shows pattern awareness.

**Exceeds Standard**
- Context-specific prompt produces targeted output that addresses the actual work need — not generic advice, but something you could actually use (after edits) for the stated purpose
- Edit documentation shows pattern awareness: participant notices recurring edit types and names them ("3 of my 5 edits were tone adjustments")
- Claude's raw output demonstrates that the CTCC prompt was well-designed — the output is in the right ballpark, even if it needs editing

**Meets Standard**
- Prompt produces useful output addressing the actual work need
- Edits documented accurately with correct tags
- Output is usable for its intended purpose after editing
- Claude's output demonstrates reasonable prompt quality

**Approaching Standard**
- Generic prompt produces generic output that could apply to any organization — names are right but the framing, tone, and context feel boilerplate
- Edits present but documentation is incomplete (missing tags, vague rationales)
- Output requires significant rework to be usable

**Below Standard**
- Prompt fails to produce usable output, or no execution record
- No edit documentation, or edits are vague and untagged
- Output is irrelevant to the stated task

**Bright Line (Approaching to Meets)**

Could this output actually be used (after edits) for the stated work task? If someone in the participant's role received this, would they recognize it as a reasonable draft of the intended deliverable? If yes, Meets minimum. If it's too generic to use without a complete rewrite, Approaching.

---

### Dimension 3: Edit Layer Rigor

**What This Measures:** Top edits are documented with rationales referencing specific audience, context, or risk, all edits are tagged, and the participant sees patterns in their edits that reveal insights about prompt design.

**Exceeds Standard**
- Top 3 edits documented in full with rationales that reference specific audience, context, or risk; remaining edits listed in simplified format with correct tags
- Edit pattern analysis reveals insight about prompt design (e.g., "3 of 5 edits were tone adjustments — my constraint about audience register wasn't specific enough, which is why Claude defaulted to formal language")
- Rationales on top 3 edits demonstrate understanding of what makes each edit necessary for THIS task, not generically
- Human judgment layer is specific and grounded in the participant's actual role and knowledge

**Meets Standard**
- Top 3 edits documented in full with tags and context-specific rationales; remaining edits listed in simplified format
- Rationales are specific to the work context — they reference the actual audience, governance concern, or scenario detail (not just "fixed tone" or "made it better")
- Human judgment layer names what the participant specifically brought to the output
- Participant may notice some edit patterns but doesn't fully analyze them

**Approaching Standard**
- Some edits documented but full format not used for top 3, or rationales are generic ("fixed tone," "made it better," "improved clarity")
- Rationales don't reference the specific audience, context, or risk that required the change
- Human judgment layer is present but vague ("I reviewed it for accuracy")
- No pattern analysis

**Below Standard**
- Fewer than half of edits documented in any format
- Tags mostly incorrect or missing
- Rationales missing or entirely generic
- No human judgment layer

**Bright Line (Approaching to Meets)**

Do the rationales reference the specific audience, context, or risk that required the change? "Changed tone because it was too formal" = Approaching. "Changed tone because Tony at Trinity expects conversational check-ins, and our prompt's 'professional' constraint was too broad for a partner who prefers informal updates" = Meets. The difference is specificity to the actual work context.

---

### Dimension 4: Plan-vs-Reality Insight

**What This Measures:** Deliverable 3 demonstrates genuine metacognitive analysis — identifying divergence, naming a specific causal design element, and proposing a concrete redesign. This is the dimension that separates AI users from AI leaders.

**Exceeds Standard**
- Governance check (Q1) identifies any complications or confirms classification with specificity
- Diagnosis (Q2) names the specific design element causing the biggest gap, explains the causal mechanism (WHY, not just that it happened), and integrates sub-considerations (prompt design, modality, edit patterns) into the analysis
- Redesign (Q3) proposes a concrete change that directly addresses the diagnosed cause
- The three questions connect into a coherent story across all deliverables

**Meets Standard**
- Governance check (Q1) addresses whether classification held up
- Diagnosis (Q2) names at least one specific design choice that contributed to divergence (a CTCC element, a governance constraint, a modality choice — something concrete)
- Redesign (Q3) proposes a change they'd make next time, even if the connection to the diagnosed cause isn't fully developed
- Shows honest engagement with the comparison (not just "it was fine")

**Approaching Standard**
- Governance check (Q1) present but perfunctory ("yes, it held up")
- Diagnosis (Q2) notes that output differed from expectations but attributes divergence vaguely ("it wasn't what I expected") without naming a specific design element
- Redesign (Q3) may propose a change but it's generic ("write a better prompt") rather than specific to the diagnosed gap
- Shows some engagement but lacks analytical depth

**Below Standard**
- No comparison, or comparison shows no analytical engagement ("it was fine," "Claude did a good job")
- No diagnosis of cause
- No redesign proposal
- Deliverable 3 is missing or perfunctory

**Bright Line (Approaching to Meets)**

In Question 2 (The Diagnosis), does the participant name a SPECIFIC design element (a CTCC component, a governance constraint, a modality choice) as the source of divergence? "My prompt didn't work as well as I expected" = Approaching. "My Constraints section said 'professional tone' but didn't specify that Partner X prefers informal check-ins — that's why I had to make 3 tone adjustments" = Meets. The difference is whether the participant can point to the specific design choice that caused the gap.

---

### Assessment Output Format

Use coaching voice. Open with 1-2 sentence orientation referencing Task 1 growth. For each dimension: name level, cite specific work, explain gap, give revision direction, close with coaching question. Close with readiness assessment for Task 3.

Reference Task 1 performance for continuity: "In Task 1, your Governance Operationalization was [level] — your quick-reference card [specific observation]. In Task 2, that governance knowledge shows up in your Design Completeness: [how it did or didn't shape prompt design]."

---

### Assessment Feedback Format

You will receive feedback in this format for each dimension:

```
[DIMENSION NAME]

Coaching Orientation:
[1-2 sentence summary referencing Task 1 growth and connection to Task 2]

Your Level: [Exceeds / Meets / Approaching / Below Standard]

What You Did Well:
[Specific evidence from your work — cite actual elements from your deliverables]

What Would Strengthen This:
[Specific gap with coaching direction — what's missing and how to address it]

Coaching Question:
[A question designed to deepen your thinking on this dimension]

Revision Guidance (if Approaching or Below):
[2-3 specific actions to take in revision]
```

---

### Readiness Check

After assessment, the participant follows one of these pathways:

- **Exceeds all/most:** Extension — redesign workflow based on findings, re-execute, document V1-to-V2 delta
- **All/most Meets:** Standard revision on 1-2 dimensions if any Approaching; proceed to packaging
- **Multiple Approaching:** Targeted revision on widest-gap dimensions only
- **Any Below:**

> **A note before we continue:** Scoring Below Standard on a dimension does not mean you are behind or failing. Task 2 asks you to design and execute, not just classify — that is a different kind of thinking, and it is normal for the design piece to take more practice. Most people who reach this level have the same gap, and it clears up quickly with a focused walkthrough. Let's work through it together.

Re-teaching with worked example from different unit, then revise

---

### EXAMPLE: What Your Feedback Will Look Like

Below is a worked example for Approaching Standard on Plan-vs-Reality Insight. This is NOT your actual feedback — it shows the format and depth you can expect.

```
PLAN-VS-REALITY INSIGHT

Coaching Orientation:
In Task 1, you caught the small-cell risk in the data summary. In Task 2, we're 
looking at whether you can turn that analytical skill inward: Can you diagnose 
why your own design produced unexpected results?

Your Level: Approaching Standard

What You Did Well:
You noticed the gap — you wrote: "I expected mostly accuracy fixes but ended 
up doing 4 tone adjustments." That's honest observation.

What Would Strengthen This:
Your comparison identifies the gap but doesn't diagnose the cause. Look at your 
CTCC Constraints: "professional tone" is too vague for partners who expect 
different registers. Claude defaulted to generic professional tone, and you 
fixed it four times. THAT'S the diagnosis: Constraints underspecified for 
audience.

Coaching Question:
If you rewrote your Constraints to prevent those 4 tone adjustments, what 
would the new constraint say?

Revision Guidance:
1. In Question 2 (The Diagnosis), name the CTCC element that caused the 
   pattern. Trace the chain: vague constraint → generic output → manual fixes.
2. In Question 3 (The Redesign), write the specific revised constraint and 
   show how it addresses the gap.
```

---

---

## STAGE 3b: REASSESS (Revision + Delta)

### Reassessment Protocol

When the participant submits a revision, reassess using the SAME rubric dimensions and level definitions from Stage 3. The reassessment:

1. **Re-evaluates each revised dimension** against the same rubric. A dimension can improve, stay the same, or (rarely) decrease if the revision introduced new issues.
2. **Produces a delta comparison** showing the level transition and what specifically changed.
3. **Applies the readiness check** to determine next step: proceed to packaging, another revision cycle, or concept re-introduction.
4. **Does NOT require the participant to revise all dimensions.** If only 1-2 dimensions need work, they revise only those sections.

### Delta Comparison

Reassessment includes a delta table showing Initial Level, Revised Level, and What Changed for each dimension.

---

---

## STAGE 4: REVISE

### Revision Guidance by Dimension

If your assessment indicates Approaching or Below on one or more dimensions, use the targeted guidance below. You only need to revise the flagged dimensions — don't redo work that already meets standard.

---

### Revision: Design Completeness (if Approaching)

The key gap is usually between governance classification and prompt design. Revision actions:
1. Read Section A and Section B side by side. Point to the specific line in your CTCC Constraints that exists BECAUSE of your governance tier. If you can't, add it.
2. Write the trace: "My data is Tier [X], which means [constraint], which is why my prompt includes [element]."
3. If modality rationale is brief, expand: what would the other two approaches look like, and why this one instead?

Coaching question: If someone read your CTCC prompt without seeing your governance classification, would they know what tier your data is?

---

### Revision: Execution Quality (if Approaching)

The fix is usually in the CTCC prompt — more context, more specificity. Revision actions:
1. Count details specific to YOUR task in your prompt. If fewer than 3, add more.
2. Consider re-executing with a more specific prompt. Save both outputs to compare.
3. Update edit documentation if you re-execute.

Coaching question: If a colleague from a different nonprofit read Claude's output, would they know it was written for DC CAP?

---

### Revision: Edit Layer Rigor (if Approaching)

Your rationales need to be grounded in specific audience, context, or risk. Revision actions:
1. For your 3 most significant edits, rewrite each rationale: What was wrong? Who would have been affected? What risk did this change mitigate?
2. Count your edit tags by type (across all edits, full and simplified). Write one sentence about what that pattern tells you about your prompt.
3. Replace generic Human Judgment Layer statements with specific ones referencing your actual data sources and verification methods.

Coaching question: For your most common edit type, what would you change in your CTCC prompt to reduce those edits next time?

---

### Revision: Plan-vs-Reality Insight (if Approaching)

The difference between Approaching and Meets is naming the specific design element that caused the gap. Revision actions:
1. Read Deliverable 1 predictions and Deliverable 2 edits side by side. Where was the biggest surprise?
2. In Question 2 (The Diagnosis), trace it back: "Which element of my Workflow Design Document led to this outcome?" Name the CTCC component, governance constraint, or modality choice. Consider the sub-considerations (prompt design, modality, edit patterns) as you diagnose.
3. Write the causal chain: "[Design element] was [vague/missing/wrong] → Claude [specific behavior] → I had to [specific edit pattern]."
4. In Question 3 (The Redesign), write the specific change and explain how it would prevent the gap.

Coaching question: If you re-ran the revised workflow tomorrow, what edits would disappear because you fixed the design?

---

---

## STAGE 5: PACKAGE

### Portfolio Structure

Once all dimensions reach Meets or above, assemble this portfolio. It will be converted to a branded DC CAP document.

#### HEADER BLOCK

```
TASK 2: CREATE — The Workflow Designer
Name: [Your Name]
Unit: [Your Unit]
Date: [Completion Date]
Competencies: Description (primary), Delegation (supporting)
Final Level: [Overall assessment summary]
```

**Formatting:** DC CAP brand — Navy (#101A4C) header, Purple (#8352FF) section headers, Akkordeon display font, Noto Serif body font.

---

#### PERFORMANCE SNAPSHOT

| Dimension | Level | Evidence (1 sentence) |
|-----------|-------|----------------------|
| Design Completeness | [level] | [e.g., "All CTCC elements present with governance-prompt trace from Tier 2 to aggregation constraint"] |
| Execution Quality | [level] | [e.g., "Context-specific prompt produced usable draft requiring 4 targeted edits"] |
| Edit Layer Rigor | [level] | [e.g., "All edits tagged correctly with audience-specific rationales; identified tone adjustment pattern"] |
| Plan-vs-Reality Insight | [level] | [e.g., "Diagnosed CTCC Constraints underspecification as root cause; proposed specific revision"] |

---

#### GROWTH STORY

Write 3-5 sentences connecting Task 1 to Task 2 transfer: Did governance classification transfer to workflow design? Where was the strongest connection? Where did Task 2 reveal gaps Task 1 didn't surface?

---

#### MULTI-TASK COMPARISON

| Element | Task 1: CLASSIFY | Task 2: CREATE | Growth |
|---------|-----------------|----------------|--------|
| Governance | Classified provided scenarios with answer key | Classified own real data; governance visibly constrained prompt design | From recognition to operationalization |
| Prompting | N/A — not yet introduced | Learned CTCC framework; designed CTCC prompts for real work; predicted and analyzed output quality | New skill introduced and applied to real workflow |
| Human-AI Balance | N/A — not yet introduced | Learned three modalities; chose and justified modality based on task characteristics; compared prediction to reality | New skill introduced with strategic reasoning |
| Edit Layer | N/A — not yet introduced | Learned edit type tags; tagged edits on real output; analyzed edit patterns for prompt improvement insights | New skill introduced with metacognitive analysis |

---

#### PARTICIPANT REFLECTION

**Reflection Prompt (Data-Grounded):**

"Your strongest dimension was [X] ([level]). Your widest gap was [Y] ([level]). Your edit pattern showed [N] [dominant edit type]. What does that pattern tell you about what Claude gets right vs. what it misses for your type of work? And what would you change in your CTCC prompt to reduce your most common edit type?"

**Your Response:** [4-5 paragraphs on edit patterns, prompt redesign, governance discipline, and plan-vs-reality skills]

---

#### FACILITATOR QUICK-HIT

**Pattern Observation (Facilitator-Populated):**
[What pattern does this participant's work reveal? What strength should be highlighted in peer discussion? What growth edge needs continued support?]

**Discussion Question (Facilitator-Populated):**
[A 5-minute peer discussion starter based on this participant's specific work. Example: "This participant diagnosed that their CTCC Constraints were too vague for their partner audience. How specific do YOUR constraints need to be for your audience? Share one constraint you'd rewrite."]

---

#### FORWARD NOTE

"In Task 3, you'll become the auditor. You'll evaluate AI output for errors, audit your own Task 2 work with fresh eyes, and design prompt improvements based on what you find. Your Task 2 Execution Record is the material you'll audit — so the quality of what you documented here directly feeds your Task 3 work."

---

---

## APPENDICES

### Appendix A: Governance Tier Quick Reference

| Tier | Name | Data Type | Examples | AI Handling |
|------|------|-----------|----------|------------|
| **1: Restricted** | Individual student data | Names, SSN, family info, financial details, citizenship status | Do NOT paste into Claude. Summarize conceptually only. |
| **2: Sensitive** | Aggregated data with re-ID risk (N < 10 cells) | Scholar counts by [univ x award] with small cells, internal budgets | Request aggregation (N >= 10). Flag small cells. Check before publishing. |
| **3: Internal** | Org info, no identifiers | Partner institution names, program timelines, submission counts, operational data | Safe for Claude. Confirm in prompt: no student data included. |
| **4: Public** | Already public or cleared | Published outcomes, case studies, program descriptions | Use freely. No constraints. |

---

### Appendix B: CTCC Template (Fillable)

```
[CONTEXT]
Background: [Situation, problem, audience]
Use: [What will the audience do with this?]

[TASK]
Please [specific action]: [specific output with format]

[CONSTRAINTS]
Governance: [Tier + specific handling rules for your data]
Tone: [Voice, register, relationship expectations]
Format: [Structure, length, layout]
Exclusions: [What NOT to include — be explicit]

[CONTENT]
Include:
- [Data element 1]
- [Data element 2]
- [Specific context or source material]
```

---

### Appendix C: Edit Type Tags Quick Reference

| Tag | When to Use | Example |
|-----|-------------|---------|
| **Accuracy Fix** | Factual error, missing info, misunderstood task | Date wrong, name misspelled, requirement omitted |
| **Tone Adjustment** | Voice doesn't match audience/context | Too formal/casual, wrong relationship tone, doesn't match DC CAP voice |
| **Strategic Addition** | You add context only you know | Relationship history, audience preference, institutional context |
| **Removal** | Claude included something that shouldn't be there | Off-topic content, inappropriate detail, governance risk |

---

### Appendix D: Human-AI Balance Definitions

| Approach | Plain Language | Technical Term | When to Use | Human Role | AI Role |
|----------|---------------|----------------|-------------|-----------|---------|
| **Hand it off** | Claude does the work; you check it | Automation | Task fully specified, inputs clear, errors easy to catch | Verify accuracy, check facts, approve for use | Generate complete output from specified inputs |
| **Draft together** | Claude starts; you reshape | Augmentation | Task needs human relationship context, creative judgment, or stakeholder-specific tone | Edit for tone, add context, apply judgment, verify governance | Draft content that human refines with expertise |
| **Figure it out together** | You and Claude iterate | Agency | Direction isn't fully clear; requires ongoing interpretation and judgment | Ask questions, provide direction, make strategic choices | Suggest options, refine based on feedback, support decision-making |

---

### Appendix E: Facilitator Notes on Common Patterns in Task 2

**Pattern 1: Governance-Prompt Disconnect**

The most common pattern. Participant classifies correctly but doesn't let the classification constrain the prompt. Look for: "Tier 2 — sensitive" but no aggregation constraint in the CTCC prompt. Coaching: Ask them to draw a literal line from tier to constraint to prompt element. If they can't, the governance isn't operationalized.

**Pattern 2: Modality Overreliance on "Draft Together"**

Many default to "Draft together" without considering alternatives. Look for: choosing "Draft together" when inputs are fully specified and errors easy to catch (should be "Hand it off"), or when they ended up iterating extensively (should be "Figure it out together"). Coaching: "If Claude's output was 95% right, was this really drafting together or did you hand it off?"

**Pattern 3: Shallow Plan-vs-Reality Analysis**

Participant notes that output differed but doesn't diagnose cause. Look for: Question 1 (Governance) answered but Question 2 (The Diagnosis) is vague. Coaching: "What's the biggest edit you made? Which prompt element allowed Claude to produce something that needed that edit? That's your diagnosis."

**Pattern 4: Strong Execution, Weak Design Document**

Execution Record is strong but Design Document is thin or retrofitted (predictions that perfectly match reality, governance that seems filled in after). Coaching: The design document is the leadership artifact. Planning honestly creates richer learning material for Task 3.

**Pattern 5: Edit Pattern Blindness**

Good individual edit documentation but no synthesis. Look for: "I made some edits" rather than "3 of 5 were tone adjustments, which tells me my Constraints need more audience specificity." Coaching: Ask them to sort edits by tag and count. "What does this distribution tell you about your prompt?"

---

---

### Appendix F: Reteaching Module — Governance-to-Prompt Connection

This module is used when a participant scores Below Standard on any dimension. It provides a step-by-step worked example followed by a fill-in template the participant applies to their own work.

---

#### Part 1: Worked Example (Tier 2 Partner Report with Small Cells)

Walk through this example together, step by step:

**Step 1: What tier is this data?**
Tier 2 (Sensitive). The partner report contains institution-level scholar counts with some cells below N=10.

**Step 2: What constraint does the tier impose?**
Aggregate first, check cell sizes before sharing. Any cell with N<10 must be suppressed or combined.

**Step 3: How does this change the CTCC prompt?**
The CONSTRAINTS section must say "Do not include any cell with N<10" and the CONTENT section must pre-aggregate the data before pasting. You cannot paste raw small-cell data into Claude and ask it to aggregate for you — the data has already been exposed.

**Step 4: How does the edit checklist catch a violation?**
Check every number in Claude's output against the N<10 threshold. If any institution-level count appears with fewer than 10 scholars, the output violates governance — even if the prompt asked Claude not to include it. Claude does not reliably follow exclusion instructions.

---

#### Part 2: Fill-In Template

Apply this to YOUR workflow.

```
(1) Your data tier:
___

(2) The specific constraint:
___

(3) Where in your CTCC prompt does this constraint appear? Quote the line:
___

(4) What edit checklist item catches a violation?
___
```

---

**End of Task 2: CREATE — The Workflow Designer SKILL.md**

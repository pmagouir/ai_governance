# Task 1: The Guided Pipeline

**DC CAP AI Leadership Training Pilot — Skill System v3**

---

## SKILL METADATA

| Field | Value |
|-------|-------|
| **Skill Name** | The Guided Pipeline: 4D Framework in Action |
| **Task ID** | pilot-task-1-guided-pipeline |
| **Week** | 1-2 (April 6-17, 2026) |
| **Competencies** | Diligence, Description, Delegation, Discernment |
| **Scaffolding Level** | High — Steps walked through; answer key available |
| **Time Estimate** | 90-120 minutes initial; 30-45 minutes revision |
| **Prerequisite** | None — this is Task 1 |
| **Target Audience** | DC CAP leadership cohort (10 participants across 6 units) |

---

## STAGE 1: INTRODUCE

### What This Is and What You'll Do

**You'll practice using Claude to help with two common DC CAP tasks.** There are correct answers for this task, and you'll get feedback on your work to help you improve.

In this task, you'll practice four things in plain English:
1. Figure out what kind of data you're working with (and whether it's safe to share with AI)
2. Write a clear, specific request for Claude that reflects what you know about the data
3. Pick the right tool and approach for the job (and decide how much Claude should handle versus how much you should)
4. Check and fix what Claude produces, explaining what you changed and why

**You don't need any prior AI experience. Every step is guided.** You'll have examples, templates, and an answer key to help you along the way.

**Plan for about 2 hours total.** The initial work (reading, thinking, and running prompts) takes 90-120 minutes. If you get feedback on your work and revise, add another 30-45 minutes.

---

### Your Learning Journey in This Skill

In this task, you'll run the complete 4D AI governance pipeline — Diligence, Description, Delegation, Discernment — on a realistic DC CAP scenario with full scaffolding and an answer key. This isn't a simulation: you'll classify real governance tiers, write CTCC prompts, select the right AI skills, and audit Claude's output exactly as you'll do in your real work. By the end, you'll have a complete, production-ready example to reference for all future AI use at DC CAP.

### What You'll Learn

- **Diligence (Governance Classification):** Identify the data involved in a task and classify it against DC CAP's 4-tier framework.
- **Description (CTCC Prompting):** Write complete, governance-aware prompts that reflect the constraints of your classified data.
- **Delegation (Skill Selection + Modality):** Choose the right DC CAP AI skill and modality (Automation/Augmentation/Agency) based on the human-AI balance required.
- **Discernment (Output Audit):** Run AI prompts, audit outputs for errors and governance compliance, document every edit with specific tags and rationales, and articulate the human judgment layer.
- **Pipeline Integration:** Understand how each stage shapes the next — how governance classification constrains your prompts, how prompts activate specific skills, how edit patterns inform better prompting.

---

### The Scenario: Your Unit Director's Two Requests

Your unit director sends you this message on Monday morning:

> "I need two things for next week:
> 
> **1. A reminder email** to the 6 university partners who haven't submitted their spring preference lists. Trinity, Bowie State, CSU, GW, Howard, and UDC are still outstanding. The deadline is May 1.
> 
> **2. A data summary** showing our current scholars by university partner and award type (MSI, SAI, Last Dollar) for the board slides."

You will work through the complete pipeline for BOTH sub-tasks, treating them as integrated examples of how the 4D framework applies to different kinds of requests.

### Why This Scenario Matters for Your Unit

This scenario involves a partner email and a board data summary drawn from a real DC CAP workflow. Your unit may handle very different workflows — you might be focused on counselor outreach, student communications, internal analytics, or something else entirely. The four skills you're practicing here — classifying data, writing prompts, choosing the right tool, and auditing output — transfer directly to any task in any unit. In Task 2 (coming later), you'll apply these exact skills to a real workflow from your own work.

---

### The 4D Pipeline Explained

**A quick note on reading this section:** The four stages and frameworks below contain a lot of detail. Don't try to memorize all of this. Each framework is referenced again when you need it in Stage 2 (DRAFT). Think of this section as your reference guide — skim now, return to it when you're working on each step.

Every AI interaction at DC CAP requires all four stages:

#### **Stage 1: DILIGENCE (Governance Classification)**

Before you ask Claude anything, you classify the data and information involved. DC CAP uses a 4-tier framework:

| Tier | Name | Definition | Examples | AI Handling Rules |
|------|------|-----------|----------|-------------------|
| **Tier 1** | Restricted | Individual student data, family financial information, personally identifiable information (PII) | Student names, addresses, family income, FAFSA details, citizenship status | DO NOT paste into prompts. Summarize or aggregate only. Red flag: if your output could identify a student by linking data points. |
| **Tier 2** | Sensitive | Aggregated data with re-identification risk (cell size < 10), sensitive organizational decisions, confidential partner information | Scholar counts by [university × award type] when cells are small, internal budgets, sensitive partner negotiations | Summarize and aggregate before prompting. Check cell sizes (N ≥ 10) before including in outputs. Never name individuals or individual institutions in small-cell contexts. |
| **Tier 3** | Internal | Organizational information without individual identifiers, operational data, institutional names, public program timelines | Partner institution names, program application deadlines, submission status (counts, not individuals), organizational structure | Standard internal handling. Appropriate for Claude. Confirm in prompt that no individual student data is included. |
| **Tier 4** | Public | Information already public or cleared for public use, marketing copy, program descriptions | Public program outcomes, published case studies, general program descriptions | Use freely. No special constraints. |

**Diligence Questions to Ask Yourself:**
1. What specific data or information is involved in this task?
2. Could any of this data identify a person?
3. What's the smallest unit of analysis (individual, disaggregated group, aggregate)?
4. What tier does this fall into?
5. What constraints does that tier impose on how I can use AI?

---

#### **Stage 2: DESCRIPTION (CTCC Prompt Writing)**

CTCC is the framework for writing complete, AI-ready prompts:

- **C: Context** — What's the background? What problem are you solving? What audience or use?
- **T: Task** — What exactly should Claude do? (Be specific: "draft an email," not "help me write an email")
- **C: Constraints** — What boundaries apply? (Governance, tone, length, format, data handling)
- **C: Content** — What information should Claude use? (Data, examples, templates, audience details)

**Description Discipline:**
- Every prompt must reflect the governance tier you identified in Stage 1.
- If you classified data as Tier 1 or 2, your prompt must NOT include that raw data.
- If you classified data as Tier 3 or 4, confirm in your prompt that no individual student data is present.
- Your prompt should include enough context for Claude to produce a useful output on the first try.

---

#### **Stage 3: DELEGATION (Skill Selection + Modality)**

You must choose:

1. **Which DC CAP skill to use.** DC CAP has skills built for common tasks:

| Skill | Purpose | When to Use |
|-------|---------|------------|
| **Partner Outreach** | Drafting and improving communications to university partner institutions | Writing partner emails, deadline reminders, partnership updates, relationship-focused messaging |
| **sf-demo-data** | Generating R scripts to analyze DC CAP's Salesforce Scholar Disbursements Awards Demographics dataset | Creating data summaries, demographic breakdowns, aggregated analyses of scholar populations |
| **Student Outreach** | Drafting and improving communications to DC CAP scholars | Lifecycle emails, opportunity notifications, deadline reminders, student-facing messaging |
| **Data Interpreter** | Understanding and contextualizing DC CAP program metrics within organizational and sector benchmarks | Explaining what data means, comparing outcomes, connecting results to strategy |
| **Funder Framing** | Translating DC CAP evidence into funder-facing arguments and narratives | Funder updates, proposal writing, impact storytelling, foundation communications |
| *[More skills available by role]* | | |

2. **Which modality to use:**

| Modality | Description | When to Use | Human Role | AI Role | Example |
|----------|-------------|------------|-----------|---------|---------|
| **Automation** | Claude handles it end-to-end with minimal human intervention. Human role is verification + final judgment. | Task is fully specified, inputs are clear, errors are easy to catch | Review output for accuracy; verify against known facts; approve for use | Generate complete, production-ready output from specified inputs | Generating a data summary from database parameters; creating a summary report from structured data |
| **Augmentation** | Claude drafts; human adds judgment, context, and relationship knowledge. | Task requires human relationship context, creative judgment, or stakeholder-specific tone | Provide context; edit for tone, relationship dynamics, strategic nuance; add information only humans know | Draft content that human refines with their expertise | Drafting a partner email (Claude generates; human adjusts tone and adds relationship context) |
| **Agency** | Claude handles analysis and decision-making in collaboration with human. | Task requires ongoing interpretation and judgment throughout the process; human and AI iterate | Ask clarifying questions; provide feedback on iterations; make final decisions | Engage in back-and-forth problem-solving; suggest options; refine based on feedback | Designing a governance policy framework (Claude proposes; human refines; iterate) |

**Delegation Questions to Ask Yourself:**
1. Does this task fit one of DC CAP's pre-built skills? Why that one?
2. What modality makes sense? Can Claude handle this end-to-end (Automation), or does it need human judgment (Augmentation/Agency)?
3. What brings the human to the table that Claude can't do? (Relationship context, strategic judgment, governance verification, etc.)

---

#### **Stage 4: DISCERNMENT (Output Audit + Edit + Human Judgment)**

1. **Run your CTCC prompt in Claude.** Get the output.
2. **Audit the output:** Read it with a critical eye. What did Claude get right? What's missing, wrong, or needs adjustment?
3. **Document every edit:** Every change you make gets a tag and a rationale.

**Edit Type Tags:**

| Tag | Meaning | Example |
|-----|---------|---------|
| **Accuracy Fix** | Claude made a factual error or missed a requirement | Claude wrote "May 15" when deadline is May 1; participant fixes date |
| **Tone Adjustment** | Claude's voice doesn't match the audience or context | Claude was too formal; participant makes email warmer and more personal |
| **Strategic Addition** | Participant adds information or context only they know | Participant adds note that Trinity has been responsive this year; GW historically delays |
| **Removal** | Participant removes content that shouldn't be there | Claude included a general tip about scholarships; participant removes because it's off-topic |

**Human Judgment Layer:**

After editing, write a reflection: "What I checked before this output left my desk."

This is where you name the governance compliance verification, the relationship context you added, the accuracy you confirmed, the risks you mitigated. This is the irreplaceable human layer.

---

### The 4-Tier Governance Framework (Reference)

You will classify the data in your scenario against these tiers. Use this table throughout the task:

| Tier | Name | Identifiable? | Aggregation | Cell Size Threshold | Examples | AI Use Rules |
|------|------|---|---|---|---|---|
| **1** | Restricted | Yes (student-level) | Individual records | N/A (never aggregate) | Student names, SSN, family income, FAFSA data | Do not paste into Claude. Summarize conceptually only. |
| **2** | Sensitive | Potentially (small cells leak identity) | Aggregated, but risky | N < 10: re-identification risk | Scholar count by [university × award] with N<10 cells | Aggregate to N ≥ 10. Remove small cells. Check before publishing. |
| **3** | Internal | No (no individual identifiers) | Organizational/operational | N/A (safe to aggregate) | Partner names, submission counts, program deadlines | OK for Claude. Confirm in prompt: no student data included. |
| **4** | Public | No (already public) | Any | N/A | Published outcomes, program descriptions, public case studies | Use freely. |

---

### The CTCC Template (Reference)

Use this structure for every prompt you write in this task:

```
[CONTEXT]
[Background about the request, the audience, the use]

[TASK]
[What specifically should Claude do? Be precise.]

[CONSTRAINTS]
[Governance tier and handling rules; tone; length; format; what data to exclude]

[CONTENT]
[The specific information, data, or examples Claude should use. Include: [list items]]
```

---

### The DC CAP Skill Library (Reference)

This table shows the skills you can select from in Stage 3 (Delegation). You will choose one skill for the partner email task and one for the data summary task:

| Skill | Primary Use | Data Handling | Modality(ies) | When to Select |
|-------|------------|---------------|---------------|-----------------|
| **Partner Outreach** | University partner communications: emails, deadline reminders, updates | Works with organizational (Tier 3-4) data; relationship context | Augmentation | Partner-facing emails, relationship updates, deadline communications |
| **sf-demo-data** | Scholar data analysis & summary generation | Works with aggregated Salesforce data; generates R scripts | Automation | Creating data summaries, demographic breakdowns, tabular analyses |
| **Student Outreach** | Scholar-facing communications | Works with names and individual context; NO financial data | Augmentation | Student emails, opportunity alerts, personalized outreach |
| **Data Interpreter** | Understanding what data means in context | Contextualizes any tier; provides benchmarking and interpretation | Augmentation/Agency | "What does this outcome mean?", "How do we compare?", "What changed?" |
| **Funder Framing** | Foundation-facing communications and narratives | Works with aggregated outcomes and impact stories; no individual data | Augmentation | Donor updates, proposal narratives, impact storytelling |

---

### Modality Definitions (Three Modes of AI Use)

As you select skills, you'll also specify the modality (how human and AI collaborate):

**1. AUTOMATION** — Claude runs with minimal intervention.
- You specify inputs and desired output format.
- Claude generates complete, production-ready content.
- Human role: Verify accuracy, check against known facts, approve for use.
- Risk: Errors go unnoticed if human doesn't carefully review.
- Example: "Generate an R script that outputs scholar counts by [university × award type]." Claude generates; you run it and verify the numbers match your database.

**2. AUGMENTATION** — Claude drafts; you refine with judgment and context.
- You provide context; Claude generates a draft.
- You add relationship knowledge, strategic judgment, organizational tone.
- Human role: Edit for tone, add context, apply judgment, verify governance.
- Risk: You rely on Claude's draft and don't notice tone mismatches or missing context.
- Example: "Draft a reminder email to Trinity." Claude generates; you adjust tone (warm vs. firm), add context (we know they're responsive, so make it gentle), verify it matches your partnership voice.

**3. AGENCY** — Claude and human iterate on complex problems.
- You collaborate back-and-forth; Claude offers options.
- You make decisions; Claude refines based on your feedback.
- Human role: Ask questions, provide direction, make strategic choices.
- Risk: Iteration can be slow; you need to know when to stop.
- Example: "How would you structure a governance policy for [scenario]?" Claude proposes; you ask clarifying questions; Claude refines; you make final call.

---

### Edit Type Tags (Reference)

You'll use these tags when you document the edits you make to Claude's output:

| Tag | Definition | When to Use | Example |
|-----|-----------|-----------|---------|
| **Accuracy Fix** | Claude made a factual error, omitted required information, or misunderstood the task | Date is wrong, a name is misspelled, a deadline is missing, Claude didn't follow instructions | Claude wrote deadline as "May 15"; correct to "May 1" |
| **Tone Adjustment** | Claude's voice doesn't match the intended tone or audience | Email is too formal/casual, message is too urgent/gentle, voice doesn't match DC CAP | Claude: "Kindly remit preference list." Change to: "We'd love to get your preferences by May 1." |
| **Strategic Addition** | You add information or context that only you know; Claude couldn't have included it | Relationship history (Trinity is always on time; GW delays), organizational context, specific deadline history | Add: "We've seen GW take extra time before; send this to Jane at their office." |
| **Removal** | Claude included content that shouldn't be there | Off-topic advice, unnecessary explanation, data that shouldn't be shared, irrelevant background | Claude added generic scholarship information; remove because it's not relevant to this specific request |

---

### Time Estimate

- **Initial work (Stages 1-4, both sub-tasks):** 90-120 minutes
  - Diligence + Description + Delegation per sub-task: ~25-30 min
  - Running prompts + auditing + editing: ~20-30 min per sub-task
  - Compiling deliverable: ~20 min
- **Revision (Stage 4b, targeted feedback):** 30-45 minutes
  - Addressing feedback on 1-2 dimensions: ~20-30 min
  - Reassessing and compiling revised deliverable: ~10-15 min

---

### Success Criteria: What You'll Be Assessed On

By the end of this task, you will produce a single integrated deliverable that demonstrates:

1. **Governance Accuracy** — You correctly classify the data tier for both sub-tasks. You identify the small-cell re-identification risk in the data summary. Your governance constraints visibly shape your prompts.

2. **Prompt + Delegation Quality** — Your CTCC prompts include all four elements and are specific to each sub-task. You select the right skill and modality for each task with clear reasoning about the human-AI balance.

3. **Output Audit Rigor** — You identify errors, concerns, and improvements in Claude's output. Every edit is tagged correctly and includes a specific rationale (not just "fix this" but "why this needs fixing in this context").

4. **Human Judgment Depth** — You articulate what you checked before the output left your desk. For the partner email: you verify tone, relationship context, and governance compliance. For the data summary: you verify accuracy, check cell sizes, and confirm no individual data leaked.

---

### What You'll Produce

A single document (Google Doc, Word, or Markdown) with this structure for EACH sub-task (partner email + data summary):

**For Partner Email:**
- Governance classification with reasoning
- CTCC prompt
- Skill selected + modality + rationale (why this skill? why this modality?)
- Claude's output (pasted verbatim)
- Audit findings (what did you notice? what's good? what needs work?)
- Edit layer (every edit tagged and rationalized)
- Human judgment analysis (what you verified; what context you added; what risks you mitigated)

**For Data Summary:**
- Governance classification with reasoning (including small-cell threshold check)
- CTCC prompt
- Skill selected + modality + rationale
- Claude's output (R script, table, or summary pasted verbatim)
- Audit findings
- Edit layer
- Human judgment analysis

---

### Connection to DC CAP's 4D Competencies

This task directly builds four competencies that are critical to your unit's AI adoption:

- **Diligence:** Classify data governance tiers correctly. Know what you can and can't ask Claude to process.
- **Description:** Write governance-aware prompts that are specific, complete, and respectful of data constraints.
- **Delegation:** Choose the right AI skill and modality for the human-AI balance your work requires.
- **Discernment:** Audit AI output critically. Edit with precision. Know what only humans bring to the table.

---

---

## STAGE 2: DRAFT

### Your Guided Workflow: Running the Pipeline on Both Sub-Tasks

In this stage, you'll work through the 4D pipeline step-by-step for both the partner email and the data summary. The skill provides scaffolds; you do the thinking and writing.

---

### SUB-TASK 1: PARTNER REMINDER EMAIL

#### Step 1a: Classify the Data (Diligence)

**What data is involved in this task?**
- Partner institution names (Trinity, Bowie State, CSU, GW, Howard, UDC)
- Submission status (haven't submitted)
- Deadline (May 1)

**Use the Diligence Questions to guide your thinking:**

1. Could any of this data identify a person? No — these are institution names, not individuals.
2. What's the smallest unit of analysis? Institutions (Tier 3 — organizational).
3. What tier does this fall into?

**Your turn:** Write 2-3 sentences classifying this data and explaining why it's that tier. Reference the governance framework.

**Governance constraints for this tier:** What does Tier 3 status mean for how you can use AI? What should be in your prompt? What should stay out?

---

#### Step 1b: Write Your CTCC Prompt (Description)

**Use the CTCC template:**

- **Context:** What's the background? (Unit director needs a deadline reminder to partners; deadline is May 1; these 6 partners haven't submitted)
- **Task:** What should Claude do? (Draft a professional, warm reminder email to the university partners)
- **Constraints:** What governance and tone rules apply? (Tier 3 data; no individual student data; maintain strong partnership tone; brief)
- **Content:** What specific information should Claude use? (Partner names: Trinity, Bowie State, CSU, GW, Howard, UDC; deadline: May 1; context: preference lists haven't been submitted)

**A note on details you don't know:** This is a training exercise, and you won't have every detail about this scenario at your fingertips. For information you don't know — like the exact method partners use to submit their lists, the specific reason the board needs the data by this date, or the contact person at each university — **make up something realistic.** The goal is to practice writing a complete, specific prompt. Plausible details are better than vague placeholders. (In Task 2, you'll use your own real work, so this won't be an issue.)

**Your turn:** Write your complete CTCC prompt. Make sure it reflects the Tier 3 classification from Step 1a. (Don't run it yet — write it first.)

---

#### Step 1c: Choose Your Skill and Modality (Delegation)

**Ask yourself:**
1. Which skill from the DC CAP library fits this task best? Why?
2. Which modality (Automation/Augmentation/Agency) makes sense? Why?
3. What does the human bring to this interaction that Claude can't?

**Your turn:** 
- Name the skill you'd use (reference the Skill Library table).
- Name the modality.
- Write 2-3 sentences explaining both choices. What's the human-AI balance?

---

#### Step 1d: Run Your Prompt and Audit (Discernment)

**Now run your CTCC prompt in Claude.** Copy Claude's output and paste it into your deliverable document.

**Audit the output:** Read it critically.
- Does it address the task? (Reminder for 6 partners, deadline May 1)
- Is it professional but warm? Does it sound like DC CAP?
- Are there any errors? (Dates wrong, partners misnamed, tone off, unnecessary content?)
- What's good? What needs work?

**Your turn:**
- Write 3-4 sentences identifying what Claude did well.
- Write 3-4 sentences identifying what needs to be better or different.

---

#### Step 1e: Document Your Edits (Discernment continued)

**Make the edits you identified in Step 1d.** For every single edit, use this format:

```
[LINE/SECTION] 
Original: [exact text from Claude's output]
Revised: [your revised text]
Tag: [Accuracy Fix / Tone Adjustment / Strategic Addition / Removal]
Rationale: [Why was this change necessary? What context did you add? What error did you fix?]
```

**Example:**
```
[Closing line]
Original: "We look forward to receiving your submission."
Revised: "We'd love to see your preferences by May 1 — let me know if you need anything from us."
Tag: Tone Adjustment
Rationale: The original is formal and passive. These are partners we have ongoing relationships with; a warmer, more collaborative tone fits the partnership voice better. This version invites dialogue and gives them an opening to ask questions.
```

**Your turn:** Document every edit using this format. Include at least 2-3 edits. (If Claude's output is very close to perfect, you might have fewer; that's fine.)

---

#### Step 1f: Name Your Human Judgment Layer (Discernment continued)

**Before this email leaves your desk, what do you check?**

Write 4-5 sentences answering: "What I'd verify or add before sending this email:"
- Governance: Are you confident no student data leaked in any form?
- Relationship: What do you know about each of these 6 partners that should influence tone?
- Accuracy: Is the deadline correct? Are all 6 names/institutions listed correctly?
- Tone: Does this match DC CAP's voice and the relationship you have with each partner?
- Context: Is there anything about the request or these specific partners that Claude couldn't know?

**Your turn:** Write your human judgment layer for the partner email.

---

### SUB-TASK 2: DATA SUMMARY

#### Step 2a: Classify the Data (Diligence)

**What data is involved in this task?**
- Scholar counts disaggregated by university partner
- Award types: MSI, SAI, Last Dollar
- Intended use: Board slides

**Use the Diligence Questions:**

1. What's the smallest unit of analysis? Individual scholars in some cells; aggregated counts in others.
2. Could any of this data re-identify a student? Potentially — if a cell has fewer than 10 scholars, you might be able to link them.
3. What tier does this fall into?

**Key governance trap:** This is the central challenge of this task. The raw Salesforce data is Tier 1 (individual student records). But you're not supposed to use raw Tier 1 data in prompts. The output (aggregated counts) is Tier 3 or Tier 2, depending on cell sizes.

**Your turn:**
- Classify the governance tier for this data summary task.
- Identify the governance trap: What's the re-identification risk?
- Explain what this means for your prompt: What data should you NOT include? What check must you do before the board gets this summary?

---

#### Step 2b: Write Your CTCC Prompt (Description)

**Your prompt must reflect Diligence from Step 2a.** If you're concerned about small cells, your prompt should ask Claude to aggregate safely.

**Use the CTCC template:**

- **Context:** Board needs a summary of current scholars; use for board slides
- **Task:** Generate a summary of scholar counts by university and award type
- **Constraints:** Aggregate safely — minimum N=10 per cell; no individual student data; format for board visibility
- **Content:** Provide the parameters (universities: Trinity, Bowie State, CSU, GW, Howard, UDC; award types: MSI, SAI, Last Dollar) but NOT the raw student-level data

**Remember:** You can make up realistic details here. You don't need actual scholar counts or real Salesforce field names. The goal is practicing the prompt structure — specifying what you want, how it should be aggregated, and what governance constraints apply.

**Your turn:** Write your complete CTCC prompt. Make sure you're asking Claude for aggregated output, not raw data. Don't paste individual student records; instead, ask Claude to generate the query or analysis.

---

#### Step 2c: Choose Your Skill and Modality (Delegation)

**Ask yourself:**
1. Which skill from the DC CAP library fits this task? (Hint: Look for skills that work with Salesforce data and generate analytical outputs.)
2. Which modality (Automation/Augmentation/Agency)?
3. What does the human bring?

**Your turn:**
- Name the skill.
- Name the modality.
- Write 2-3 sentences explaining your choices.

---

#### Step 2d: Run Your Prompt and Audit (Discernment)

**Run your CTCC prompt in Claude.** Paste the output into your deliverable.

**Audit the output:**
- Does it show scholars by university × award type?
- Are the numbers reasonable? (Do they roughly match what you know?)
- Are there any cells with N < 10? (This is critical — flag them.)
- Is the format suitable for a board slide?
- Are there any errors or missing universities/award types?

**Your turn:**
- Write 3-4 sentences on what Claude did well.
- Write 3-4 sentences on what needs improvement. Specifically flag any small-cell governance concerns.

---

#### Step 2e: Document Your Edits (Discernment continued)

**Make the edits.** For each edit, use the same format as Sub-Task 1:

```
[SECTION]
Original: [Claude's text]
Revised: [Your revised text]
Tag: [Type]
Rationale: [Why]
```

**Important:** If you find small cells (N < 10), your edits should address this. Examples:
- **Removal:** Remove a cell that reveals too little data.
- **Accuracy Fix:** Adjust methodology to ensure N ≥ 10.
- **Strategic Addition:** Add a note explaining the threshold.

**Your turn:** Document your edits. Include at least 2-3, with at least one addressing governance concerns.

---

#### Step 2f: Name Your Human Judgment Layer (Discernment continued)

**Before this data summary goes to the board, what do you check?**

Write 4-5 sentences answering: "What I'd verify before this summary is presented to the board:"
- Governance: Have you checked for small cells (N < 10)? Are you confident no re-identification is possible?
- Accuracy: Do the numbers match your internal records? Have you spot-checked a university/award combo?
- Completeness: Are all 6 universities represented? All 3 award types?
- Context: Is there anything about the data or the board's context that Claude couldn't know? (E.g., "The board should know we're only counting fully disbursed awards, not pending ones.")
- Interpretation: What would you tell the board about what this data shows?

**Your turn:** Write your human judgment layer for the data summary.

---

---

## STAGE 3: ASSESS

### Assessment Framework

Your work will be assessed on four dimensions. Each dimension has four qualitative levels: **Exceeds Standard, Meets Standard, Approaching Standard, Below Standard.**

This assessment focuses on your understanding and execution of the 4D pipeline, not on perfection. Errors are expected and valuable; what matters is whether you can identify them, classify them correctly, and explain your reasoning.

---

### Dimension 1: Governance Accuracy

**What This Measures**
You correctly classify the data tier for both sub-tasks. You identify the small-cell re-identification risk in the data summary. Your governance classification visibly shapes and constrains your prompts.

**Why It Matters**
Governance is the foundation. If you misclassify a tier, everything downstream is at risk: your prompts might expose sensitive data, your audit might miss re-identification risks, your edits might not address the right concerns.

**Exceeds Standard**
- Tier classification is correct for both sub-tasks (Tier 3 for partner email, Tier 2/3 for data summary depending on cell analysis).
- You explicitly identify the small-cell re-identification trap in the data summary and explain the N ≥ 10 threshold.
- Your CTCC prompts directly reflect governance constraints: Tier 3 prompt includes no student-level data; data summary prompt asks for aggregation; you explicitly note what should NOT be in the prompt.
- You verify governance compliance in your audit findings and human judgment layer.
- Your reasoning includes specific references to the 4-tier framework and DC CAP policies.

**Meets Standard**
- Tier classification is correct for both sub-tasks.
- You identify the small-cell risk in the data summary (though your explanation of the threshold may be brief).
- Your CTCC prompts reflect governance constraints reasonably well. You avoid including sensitive data; you ask for aggregation where appropriate.
- Your audit checks for governance compliance. Your human judgment layer mentions governance verification.
- Your reasoning is clear and references the governance framework.

**Approaching Standard**
- Tier classification is correct, but your reasoning is vague or incomplete. (E.g., "This is Tier 3 because it's organizational data" but no explanation of what that means for AI use.)
- You identify the small-cell issue but don't fully explain the risk or the N ≥ 10 threshold.
- Your CTCC prompts mention governance but don't fully operationalize the constraints. (E.g., you say "no student data" but your prompt is vague about what that means.)
- Your audit touches on governance but doesn't deeply verify it.
- Your human judgment layer exists but is superficial. (E.g., "I checked that governance was OK" without naming specific checks.)

**Below Standard**
- Tier classification is incorrect or missing reasoning.
- You don't identify or address the small-cell re-identification risk in the data summary.
- Your CTCC prompts don't reflect governance constraints. You might ask Claude to include data that shouldn't be in the prompt.
- Your audit doesn't check for governance compliance.
- Your human judgment layer is missing or doesn't address governance.

**Calibration Anchors (Approaching → Meets Boundary)**
- Meets requires: explicit reference to the re-identification risk (small cells) in the data summary AND a demonstration that your prompts reflect the governance tier (e.g., "I didn't include individual student records because this is Tier 1→2 aggregation").
- Approaching shows awareness but lacks specificity: "I know this is sensitive data, so I asked Claude to aggregate" (good start, but missing the N ≥ 10 threshold and explicit Tier 2 classification).

---

### EXAMPLE: What Your Feedback Will Look Like

Below is one worked example showing what feedback looks like when a participant scores Approaching Standard on Governance Accuracy. This is an example so you can see what to expect and what it means. This is NOT your actual feedback — your feedback will be personalized to your work.

```
GOVERNANCE ACCURACY

Coaching Orientation:
Governance classification is the foundation of the entire pipeline. When you get the tier right, 
everything downstream — your prompt, your tool choice, your audit — builds on solid ground.

Your Level: Approaching Standard

What You Did Well:
You correctly identified that the data summary involves scholar data and recognized that partner-level 
information is involved. Your classification reasoning shows you understand the tier system exists and 
matters.

What Would Strengthen This:
Your classification says "Tier 3 — this is internal data" but doesn't address the small-cell risk. The 
data summary includes scholar counts by partner, and some partners may have fewer than 10 scholars. 
When cells drop below 10, aggregated data can enable re-identification, which moves the classification 
to Tier 2. Your CTCC prompt doesn't include any aggregation constraints, which means Claude could 
produce a summary that exposes small cells.

Transferable Skill:
You're building "governance-first thinking" — the habit of asking "what could go wrong with this data?" 
before writing a single prompt. This transfers to every AI task you'll encounter.

Coaching Question:
If a partner has only 3 scholars in one award type, what would someone need to figure out that person's 
identity? How does that change what you ask Claude to do?

Revision Guidance (3 items):
1. Re-read the Tier 2 definition, specifically the small-cell threshold (N < 10). Then re-classify the 
   data summary with this in mind.
2. Revise your CTCC prompt to include an explicit constraint about minimum cell sizes.
3. Add one sentence to your human judgment layer explaining what you'd verify before sharing this 
   summary with the board.
```

---

### Dimension 2: Prompt + Delegation Quality

**What This Measures**
Your CTCC prompts include all four elements (Context, Task, Constraints, Content) and are specific to each sub-task. You select the correct skill and modality for each task with reasoning that demonstrates understanding of the human-AI balance.

**Why It Matters**
A good prompt activates the right AI capability and sets up the human to add their judgment effectively. Poor prompts lead to weak outputs that require heavy editing. Correct skill and modality selection ensures you're using AI the way it's designed to be used — not overloading Claude with tasks that need human judgment, not wasting human time on tasks Claude can handle.

**Exceeds Standard**
- Both CTCC prompts include all four elements (Context, Task, Constraints, Content) explicitly.
- Prompts are specific to the sub-task: They include concrete details (partner names, deadline, award types) and avoid generic phrasing.
- Both prompts reflect governance constraints from Dimension 1.
- Skill selections are correct (Partner Outreach for email, sf-demo-data for data summary) or highly defensible alternatives with clear reasoning.
- Modality selections are correct (Augmentation for email — because tone/relationship context matter; Automation for data summary — because inputs are clear and errors are easily caught).
- Your modality rationales explain WHY that balance makes sense. (E.g., "Augmentation for the email because I know these partners better than Claude does; I need to adjust tone and add context.")
- Your reasoning demonstrates integration of governance, prompt specificity, and modality selection.

**Meets Standard**
- Both CTCC prompts include all four elements, though they may be brief.
- Prompts are specific to the sub-tasks. You include key details.
- Skill selections are correct or defensible.
- Modality selections are correct. Your rationale explains the human-AI balance reasonably well.
- Your reasoning is clear and shows understanding of why these choices matter.

**Approaching Standard**
- CTCC prompts include most elements, but one element may be vague or weak. (E.g., "Constraints: Keep it professional" — true but not specific to governance or audience.)
- Prompts are somewhat generic. You include some details but could be more specific.
- Skill selection is reasonable but reasoning is weak.
- Modality selection is correct, but rationale is brief or doesn't fully explain why this modality fits the task.
- Reasoning exists but lacks depth or clarity.

**Below Standard**
- CTCC prompts are missing elements.
- Prompts are generic or don't include key details.
- Skill selection is incorrect or reasoning is missing.
- Modality selection is incorrect or rationale is absent.
- Reasoning is unclear or shows misunderstanding of the human-AI balance.

**Calibration Anchors (Approaching → Meets Boundary)**
- Meets requires: All four CTCC elements explicitly present + correct skill/modality with a 2-3 sentence rationale that names the human-AI trade-off.
- Approaching shows three CTCC elements OR brief rationale ("Augmentation because Claude needs human judgment") without explaining what judgment.

---

### Dimension 3: Output Audit Rigor

**What This Measures**
You identify errors and concerns in Claude's outputs (both the email and the data summary). Every edit you make is documented with the correct tag (Accuracy Fix, Tone Adjustment, Strategic Addition, Removal) and a specific rationale. Your rationales reference the specific context of each sub-task, not generic explanations.

**Why It Matters**
This is where your skill in Discernment becomes visible. A careful audit catches errors before they reach the audience. Good edit documentation shows you understand not just what changed, but why it needed to change in this specific context.

**Exceeds Standard**
- You identify 4+ edits per sub-task (or fewer if Claude's output is near-perfect, but you'd note that explicitly).
- Edit tags are correct and used consistently.
- Rationales are specific to the context, not generic. (Good: "Changed deadline from May 15 to May 1 because [unit director said May 1 and this is the actual deadline]." Bad: "Changed May 15 to May 1 because the date was wrong.")
- For the partner email: You identify tone mismatches, missing relationship context, or accuracy issues specific to DC CAP partnerships.
- For the data summary: You identify accuracy issues, cell-size governance concerns, formatting problems, or missing dimensions.
- Your audit findings (from Stage 2, Step d) are detailed and specific.

**Meets Standard**
- You identify 3-4 edits per sub-task.
- Edit tags are correct.
- Rationales are specific. They reference the context (audience, governance, purpose) but may not be as detailed as Exceeds.
- Your audit findings are clear and accurate.

**Approaching Standard**
- You identify 2-3 edits per sub-task.
- Most edit tags are correct, but one or two may be misused.
- Rationales are present but somewhat generic. (E.g., "Fixed tone" without explaining what was wrong or why it mattered in this context.)
- Your audit findings exist but are brief or lack specificity.

**Below Standard**
- Fewer than 2 edits documented, or edits are unclear.
- Edit tags are incorrect or missing.
- Rationales are missing or vague.
- Audit findings are missing or incorrect.

**Calibration Anchors (Approaching → Meets Boundary)**
- Meets requires: 3+ edits with correct tags + rationales that name the specific context (audience, governance concern, partnership context, etc.).
- Approaching shows 2-3 edits with tags and rationales that are present but generic ("This needed fixing because [it was wrong]" vs. "[It was wrong for this specific reason in this context]").

---

### Dimension 4: Human Judgment Depth

**What This Measures**
You articulate what you checked or verified before each output left your desk. Your human judgment layer for the partner email addresses relationship context, governance, and tone verification. Your human judgment layer for the data summary addresses accuracy verification, small-cell governance, and what the board needs to understand. You articulate what you bring to the task that Claude can't.

**Why It Matters**
The irreplaceable human layer is what separates humans from AI. You bring relationship knowledge, governance accountability, strategic context, and quality judgment that Claude lacks. If you can't articulate what that is, you're either over-delegating to AI (and taking on risk) or you're not fully engaged with the output.

**Exceeds Standard**
- Your human judgment layers for both sub-tasks are 4-5 sentences (or more) and address 4+ specific checks or verifications.
- For the partner email: You explicitly address relationship context (what you know about each partner), governance verification (confidence that no student data leaked), tone alignment with DC CAP voice, and accuracy (deadline, partner names).
- For the data summary: You explicitly address accuracy verification (spot-checking against internal records), small-cell governance (checking N ≥ 10), completeness (all universities and award types), and interpretation (what the data means to the board and what caveats they need).
- Your language shows you understand why each check matters and what risk it mitigates.
- You articulate what brings the human to the table. (E.g., "Only I know that GW has historically delayed submissions, so I'm framing this as a check-in rather than a demand." Or "I can verify these numbers match our database; Claude can't.")

**Meets Standard**
- Your human judgment layers address 3-4 checks or verifications per sub-task.
- You address relationship/context for the email, accuracy/governance for the data summary.
- Your language is clear and shows understanding of why these checks matter.
- You articulate what brings the human to the table, though perhaps briefly.

**Approaching Standard**
- Your human judgment layers address 2-3 checks per sub-task.
- You mention governance or accuracy, but coverage is incomplete. (E.g., you address accuracy but not the small-cell governance concern.)
- Your language shows some understanding, but reasoning is vague.
- You may or may not articulate what brings the human to the table.

**Below Standard**
- Human judgment layers are missing or very brief (1-2 sentences).
- Checks are vague or generic.
- You don't articulate why these checks matter.
- You don't explain what brings the human to the table.

**Calibration Anchors (Approaching → Meets Boundary)**
- Meets requires: 3+ specific checks named + language showing why each check matters + at least one statement about what brings the human to the table.
- Approaching shows 2-3 checks but they may be generic ("I checked governance" vs. "I verified no small cells by checking N ≥ 10 for [specific cells]").

---

### Readiness Check: Moving Forward to Task 2

After your work is assessed, you'll be placed in one of these readiness categories:

**All or most dimensions at Meets or above (no dimension at Below):** Ready to proceed. Note any Approaching dimensions as stretch goals for the next task.

**Multiple dimensions at Approaching, none at Below:** One more targeted revision cycle. Focus on the 1-2 dimensions with the widest gap. The participant can revise just those sections.

**Any dimension at Below Standard:** Re-introduce the relevant concept before another revision. Walk through one example together, then revise.

The goal is Meets Standard across all dimensions. This is a learning task; revision is expected and valuable.

---

### Assessment Feedback Format

You will receive feedback in this format for each dimension:

```
[DIMENSION NAME]

Coaching Orientation:
[1-2 sentence summary of what this dimension is assessing and why it matters]

Your Level: [Exceeds / Meets / Approaching / Below Standard]

Dimension-Specific Feedback:
[What you did well + specific evidence from your work]
[What could strengthen this dimension + coaching suggestion]

Coaching Question:
[A question designed to help you reflect on this dimension and improve it]

Revision Guidance (if Approaching or Below):
[Specific actions to take in your revision that will move you to Meets or Exceeds]
```

---

---

## STAGE 3b: REASSESS (Revision + Delta)

If you've been directed to revise, this stage guides your second iteration.

### Reassessment Protocol

When the participant submits a revision, reassess using the SAME rubric dimensions and level definitions from Stage 3. The reassessment:

1. **Re-evaluates each dimension** against the same rubric. A dimension can improve, stay the same, or (rarely) decrease if the revision introduced new issues.
2. **Produces a delta comparison** showing the level transition and what specifically changed.
3. **Applies the readiness check** to determine next step: proceed to packaging, another revision cycle, or concept re-introduction.
4. **Does NOT require the participant to revise all dimensions.** If only 1-2 dimensions need work, they revise only those sections.

### When You're Revising

You'll receive feedback indicating which dimension(s) to prioritize. Use this framework:

**If Approaching on 1 dimension:**
1. Re-read the feedback for that dimension.
2. Use the Revision Guidance to strengthen that area.
3. Re-work the relevant sections of your deliverable (or all sections if it's Governance Accuracy or Human Judgment Depth).
4. Resubmit your revised deliverable.

**If Approaching on 2+ dimensions, or Below on any:**
1. Prioritize the lowest dimension first.
2. Work through revision, then resubmit.
3. Receive reassessment on the revised dimension(s).
4. Iterate until all dimensions reach Meets or above.

### Delta Comparison (Reassessment Output)

When you resubmit, your reassessment will include a delta comparison:

| Dimension | Initial Level | Revised Level | What Changed |
|-----------|---|---|---|
| Governance Accuracy | Approaching | Meets | Added explicit reference to N ≥ 10 threshold; revised data summary prompt to ask for aggregation. |
| Prompt + Delegation Quality | Meets | Meets | [No change; maintained strength] |
| Output Audit Rigor | Approaching | Meets | Added 2 additional edits with governance-specific tags and rationales. |
| Human Judgment Depth | Approaching | Exceeds | Expanded human judgment layer for data summary to include 4 specific verification checks. |

This delta shows you exactly what shifted from initial to revised work.

### Readiness Check

- **All or most dimensions at Meets or above (no dimension at Below):** Ready to proceed. Note any Approaching dimensions as stretch goals for the next task.
- **Multiple dimensions at Approaching, none at Below:** One more targeted revision cycle. Focus on the 1-2 dimensions with the widest gap. The participant can revise just those sections.
- **Any dimension at Below Standard:** Re-introduce the relevant concept before another revision. Walk through one example together, then revise.

---

---

## STAGE 4: REVISE

### Revision Guidance Template

If your feedback indicates Approaching or Below on one or more dimensions, use this section to guide your revision. Your facilitator will provide specific guidance based on your feedback; use the template below:

---

### Revision Example: Governance Accuracy (if Approaching)

**Coaching Orientation:**
Governance is foundational. Your tier classifications are mostly correct, but you're missing the small-cell re-identification risk in the data summary. This gap could mean the board receives data that shouldn't be published. Let's sharpen your governance thinking.

**Revision Actions:**
1. Re-read the small-cell threshold section (Tier 2 definition, N ≥ 10 rule) in Stage 1.
2. For the data summary sub-task:
   - Does your original CTCC prompt ask Claude to aggregate safely and check for small cells?
   - If not, revise your prompt to explicitly ask for cell-size analysis.
   - Add a sentence to your human judgment layer explaining how you'd verify N ≥ 10 before the board sees the summary.
   - If you identified small cells in your original work, add a specific edit tag (Accuracy Fix or Strategic Addition) that addresses the governance concern.
3. Resubmit your revised deliverable.

**Coaching Question:**
If you found a cell with fewer than 10 scholars (e.g., CSU × SAI = 7 scholars), what would you do before sending this to the board? Why?

---

### Revision Example: Output Audit Rigor (if Approaching)

**Coaching Orientation:**
You're identifying what needs to change, but your edits aren't fully documented or your rationales are too brief. When you document an edit, you're creating a trail that shows you caught and fixed something important. Let's deepen this skill.

**Revision Actions:**
1. Re-read the Edit Type Tags section (Stage 1) and the Audit + Documentation steps (Stage 2, Steps 1d-1e and 2d-2e).
2. For BOTH sub-tasks:
   - Identify at least one more edit you made (or could have made).
   - For EACH edit, write a full rationale that includes: (a) What was the error/concern? (b) Why does it matter for this specific task (not generically)? (c) What governance, relationship, or accuracy risk did it mitigate?
3. Use the edit documentation format consistently:
   ```
   [SECTION]
   Original: [text]
   Revised: [text]
   Tag: [specific type]
   Rationale: [specific to context]
   ```
4. Resubmit with more thorough edit documentation.

**Coaching Question:**
For one of your edits, explain what would have happened if you'd sent Claude's original version to the audience. Why was your change important?

---

### Revision Example: Human Judgment Depth (if Approaching)

**Coaching Orientation:**
You're articulating what you checked, but it's brief and a bit generic. The human judgment layer is where you show the irreplaceable thinking that only you bring. Let's expand it.

**Revision Actions:**
1. Re-read the "Name Your Human Judgment Layer" sections (Stage 2, Steps 1f and 2f).
2. For EACH sub-task, write a longer human judgment layer (aim for 5-6 sentences) that addresses these specific checks:
   
   For the partner email:
   - Governance: Specific statement that you verified no student data leaked
   - Relationship: Name something about these 6 partners that Claude couldn't know (e.g., "Trinity always responds quickly; GW takes longer")
   - Tone: Specific statement about whether this matches DC CAP voice and your partnership with these institutions
   - Accuracy: Specific verification (deadline is May 1; all 6 partners listed correctly)
   
   For the data summary:
   - Accuracy: Specific statement about how you'd verify (e.g., "I'd spot-check [university × award] against our Salesforce database")
   - Governance: Explicit statement about cell-size checking (N ≥ 10) and any small cells you'd flag or remove
   - Completeness: Specific statement that all universities and award types are present
   - Interpretation: What would you tell the board about this data? What caveats matter?

3. Resubmit with expanded human judgment layers.

**Coaching Question:**
For the data summary: If you found a cell with only 3 scholars, how would you explain that to the board? What would you recommend — removing it, aggregating it differently, or adding a note?

---

---

## STAGE 5: PACKAGE

### Portfolio Format

Once your work reaches Meets Standard or above on all dimensions, you'll assemble a final portfolio that represents your learning. This portfolio will be converted to a branded DC CAP document (Word or PDF) and become part of your pilot record.

---

### Portfolio Structure

#### **TASK OVERVIEW**

```
TASK: The Guided Pipeline (Task 1)
COMPETENCIES: Diligence, Description, Delegation, Discernment
WEEK: 1-2 (April 6-17, 2026)
SCENARIO: Partner reminder email + data summary for board slides

SUCCESS CRITERIA:
- Correct governance classification (Tier 3 for email, Tier 2/3 for data summary)
- CTCC prompts reflect governance constraints
- Correct skill and modality selections with clear reasoning
- Rigorous output audit with tagged, rationalized edits
- Articulate human judgment layer for both sub-tasks
```

---

#### **INITIAL SUBMISSION**

**SUB-TASK 1: PARTNER REMINDER EMAIL**

**A. Governance Classification**
[Your classification from Stage 2, Step 1a]

**B. CTCC Prompt**
[Your complete prompt from Stage 2, Step 1b]

**C. Skill + Modality Selection**
[Your selections and rationale from Stage 2, Step 1c]

**D. Claude's Output**
[Verbatim output from Claude, Stage 2, Step 1d]

**E. Audit Findings**
[Your analysis from Stage 2, Step 1d: what's good, what needs work]

**F. Edit Layer**
[Your complete edit documentation from Stage 2, Step 1e, with all tags and rationales]

**G. Human Judgment Analysis**
[Your reflection from Stage 2, Step 1f: what you checked before sending]

---

**SUB-TASK 2: DATA SUMMARY**

**A. Governance Classification**
[Your classification from Stage 2, Step 2a, including small-cell risk analysis]

**B. CTCC Prompt**
[Your complete prompt from Stage 2, Step 2b]

**C. Skill + Modality Selection**
[Your selections and rationale from Stage 2, Step 2c]

**D. Claude's Output**
[Verbatim output from Claude, Stage 2, Step 2d]

**E. Audit Findings**
[Your analysis from Stage 2, Step 2d: what's good, what needs work, including governance concerns]

**F. Edit Layer**
[Your complete edit documentation from Stage 2, Step 2e, with all tags and rationales]

**G. Human Judgment Analysis**
[Your reflection from Stage 2, Step 2f: verification checks specific to data governance]

---

#### **ASSESSMENT**

[Your final assessment feedback from Stage 3, including level for each dimension and coaching feedback]

---

#### **REVISED SUBMISSION (if applicable)**

[If revision occurred: Updated work from Stage 4, with changes highlighted or noted]

---

#### **GROWTH TRAJECTORY**

**Dimension-by-Dimension Comparison**

| Dimension | Initial Level | Revised Level | What Changed | Evidence |
|-----------|---|---|---|---|
| Governance Accuracy | [initial] | [revised] | [delta narrative] | [specific changes from initial to revised work] |
| Prompt + Delegation Quality | [initial] | [revised] | [delta] | [evidence] |
| Output Audit Rigor | [initial] | [revised] | [delta] | [evidence] |
| Human Judgment Depth | [initial] | [revised] | [delta] | [evidence] |

---

#### **OVERALL READINESS**

**Assessment Summary:**
[Your final level on each dimension: Exceeds / Meets / Approaching / Below]

**Readiness to Proceed to Task 2:**
[YES — All dimensions at Meets or above. Ready for Task 2: The Supported Pipeline. / CONDITIONAL — [If applicable]]

**Key Strengths Demonstrated:**
- [Dimension + specific strength you demonstrated]
- [Dimension + specific strength]
- [Dimension + specific strength]

**Growth Areas Addressed (if applicable):**
- [If you revised: what dimension improved and how]

---

#### **PARTICIPANT REFLECTION**

**Reflection Prompt (Data-Grounded):**

Your performance on this task shows strong understanding of [dimension where you scored Exceeds or high Meets]. Specifically, [evidence from your work: e.g., "your governance classification of the data summary identified the re-identification risk, and your edits address the N ≥ 10 threshold"].

A question for your reflection: **As you move into Task 2 with your own work, what governance concern will you be most careful to watch for?** Name a specific data type or scenario from your unit's work, and explain why that governance tier matters.

**Your Response:**
[You will write 3-4 paragraphs reflecting on:]
1. What governance insight from Task 1 is most important to you
2. What specific concern you'll watch for in your real work
3. How this learning will shape how you think about AI use in your unit

---

#### **FACILITATOR NOTES**

**Performance Pattern (Facilitator-Populated):**
[The facilitator will note: What strengths does this participant demonstrate? Where do they need support? What peer learning could help? What discussion would be valuable in the next cohort session?]

**Discussion Question for Peer Learning (Facilitator-Populated):**
[The facilitator will propose a 5-minute peer discussion starter based on this participant's specific strengths or growth edges. Example: "This participant noticed a governance concern that others missed — let's talk about how you'd catch small-cell risks in your own data."]

---

---

## ANSWER KEY (For Facilitators and Assessments)

### TASK 1 GOVERNANCE CLASSIFICATIONS (Deterministic)

#### Sub-Task 1: Partner Reminder Email

**Correct Classification: Tier 3 — Internal**

**Reasoning:**
- Data involved: Partner institution names, submission status (operational), deadline (public operational timeline)
- No individual identifiers: These are institution names, not students
- No re-identification risk: No linking of data points that could identify individuals
- Classification: Organizational/operational information, appropriate for internal use and AI processing
- AI Constraints: Standard internal handling. Confirm in prompt that no individual student data is included. Safe for Claude.

**Key Governance Points:**
- The email names specific institutions (Trinity, Bowie State, etc.) — but these are not sensitive; they're organizational contacts.
- The "submission status" is operational information at the institutional level, not individual student data.
- No small-cell risk because no aggregation is involved.

---

#### Sub-Task 2: Data Summary

**Correct Classification: Tier 2 — Sensitive (due to small-cell re-identification risk)**

**Reasoning:**
- Raw data source: Salesforce Scholar records (Tier 1 — Restricted: individual student data)
- Aggregation level: Scholar counts by [university × award type]
- Re-identification risk: If any cell has fewer than 10 scholars, that cell can potentially re-identify individuals by combining linked data (e.g., "There's only 1 CSU student with Last Dollar award this year")
- Classification: The aggregated output is Tier 2 because of small-cell risk; the output must be checked for N < 10 before publishing
- AI Constraints: Do NOT paste individual student records into Claude. Request aggregation, specify minimum cell sizes, ask Claude to flag cells with N < 10.

**Key Governance Checkpoint (the central trap):**
- The prompt must NOT include individual student records (Tier 1)
- The prompt should ask for aggregation with a minimum cell size (N ≥ 10)
- The human MUST verify cell sizes before the data is presented to the board
- If a cell has N < 10, either remove it, aggregate it differently, or add a disclosure note

**How Correct Prompts Reflect This:**
- Good prompt: "Generate a summary of scholar counts by [university] and [award type], flagging any cells with fewer than 10 scholars."
- Bad prompt: "Here's a CSV with our current students [paste 500 rows]. Summarize by university and award type." (No aggregation requested, individual data pasted.)

---

### TASK 1 SKILL + MODALITY SELECTIONS (Deterministic)

#### Sub-Task 1: Partner Reminder Email

**Correct Skill: Partner Outreach**

**Correct Modality: Augmentation**

**Reasoning:**
- **Skill:** The Partner Outreach skill is built specifically for university partner communications. It's the right tool for drafting partner-facing emails.
- **Modality: Augmentation.** Why not Automation?
  - The email requires relationship context: How responsive is Trinity typically? What tone works for GW? Should this be warm or firm?
  - Claude can draft the email, but a human must add relationship context and adjust tone.
  - Human role: Edit for tone, relationship dynamics, strategic nuance. Add information like "Trinity is usually responsive, so make this collaborative" or "GW tends to delay, so be gentle."
  - AI role: Generate a professional, complete draft that's close to ready.
  - Risk if automated: You send Claude's output without relationship context, and the tone doesn't fit each institution.

---

#### Sub-Task 2: Data Summary

**Correct Skill: sf-demo-data (Salesforce data generation / R script generation)**

**Correct Modality: Automation**

**Reasoning:**
- **Skill:** The sf-demo-data skill generates R tidyverse scripts to analyze DC CAP's Salesforce data. This is exactly what you need for a scholar demographic breakdown.
- **Modality: Automation.** Why not Augmentation?
  - The task is fully specified: universities (6 specific names), award types (MSI, SAI, Last Dollar), output format (suitable for board slides).
  - Inputs are clear: You're not asking Claude to interpret ambiguous requirements; you're asking for a specific analysis.
  - Errors are easy to catch: You run the script and spot-check the results against your database.
  - Human role: Provide parameters, run the script, verify output, check for governance concerns (small cells).
  - AI role: Generate the complete, runnable script.
  - Escalation to Augmentation: If your database structure were ambiguous or if you weren't sure how to frame the analysis, Augmentation (back-and-forth) would be better.

---

### TASK 1 ASSESSMENT RUBRIC CALIBRATION ANCHORS

**Governance Accuracy: Approaching → Meets Boundary**

| Approaching | Meets |
|---|---|
| Correctly classifies both tiers, but reasoning is vague. E.g., "This is Tier 3 because it's organizational." | Correctly classifies both tiers with reasoning that references the framework. E.g., "This is Tier 3 because it includes institution names and operational data, not individual identifiers, so no re-identification risk." |
| Identifies small-cell issue but doesn't explain N ≥ 10 threshold. | Identifies small-cell issue AND explicitly references the N ≥ 10 rule: "Cells with fewer than 10 scholars can re-identify individuals." |
| Prompts mention governance constraints but don't operationalize them. E.g., "Be careful about sensitive data." | Prompts reflect governance constraints specifically. E.g., for data summary: "Request aggregation by university and award type, flagging cells with N < 10." |

**Prompt + Delegation Quality: Approaching → Meets Boundary**

| Approaching | Meets |
|---|---|
| CTCC prompts have 3 elements clearly stated; 1 is vague or weak. | All 4 CTCC elements are clear: Context (background and use), Task (specific action), Constraints (governance and format), Content (specific data/details). |
| Prompts include some details but are somewhat generic. | Prompts are specific: Partner email names all 6 institutions and the May 1 deadline; data summary specifies award types and requests aggregation. |
| Skill/modality selections are reasonable, but rationale is brief or unclear. | Skill/modality selections are correct with a 2-3 sentence rationale explaining the human-AI balance. E.g., "Augmentation because Claude can draft, but I must add relationship context." |

**Output Audit Rigor: Approaching → Meets Boundary**

| Approaching | Meets |
|---|---|
| 2-3 edits documented per sub-task. | 3+ edits documented per sub-task. |
| Most edit tags are correct, but one may be misused. | All edit tags are correct and used consistently. |
| Rationales exist but are generic. E.g., "Changed tone." | Rationales reference context. E.g., "Changed tone from formal to collaborative because GW works better with a conversational style." |
| Audit findings are brief. | Audit findings are detailed and reference specific strengths/concerns for each sub-task. |

**Human Judgment Depth: Approaching → Meets Boundary**

| Approaching | Meets |
|---|---|
| Human judgment layer is 2-3 sentences or addresses 1-2 checks. | Human judgment layer is 4+ sentences and addresses 3-4 checks. |
| Checks are generic: "I verified governance" without naming specific checks. | Checks are specific: "I verified N ≥ 10 for all cells" or "I verified Trinity's response time and adjusted tone accordingly." |
| May not articulate what brings the human to the table. | Articulates what brings the human to the table: relationship context, governance accountability, accuracy verification, strategic judgment. |

---

---

## APPENDICES

### Appendix A: Quick Reference — Edit Type Tags

| Tag | Use When | Example |
|-----|----------|---------|
| **Accuracy Fix** | Claude made a factual error, omitted info, or misunderstood the task | Date was "May 15," should be "May 1" |
| **Tone Adjustment** | Claude's voice doesn't match audience or context | Changed from formal to warm for partnership tone |
| **Strategic Addition** | You add context only you know | Added: "Trinity is usually responsive, so keep this light" |
| **Removal** | Claude included something that shouldn't be there | Removed generic scholarship info; not relevant to this request |

### Appendix B: Quick Reference — Tier Classification Flowchart

```
START: What data is involved?

Is it individual person data (names, SSN, address, income, citizenship)?
  → YES: Could this identify someone if linked with other data?
    → YES: Tier 1 (Restricted) — Do NOT use in Claude prompts
    → NO: Tier 2/3 depending on context
  → NO: Is it organizational or operational?
    → YES: Could the aggregation leak individual identity (N < 10)?
      → YES: Tier 2 (Sensitive) — Aggregate safely, check cell sizes
      → NO: Tier 3 (Internal) — Safe for Claude
    → NO: Is it already public?
      → YES: Tier 4 (Public) — Use freely
      → NO: Tier 3 (Internal)
```

### Appendix C: CTCC Prompt Template (Fillable)

```
[CONTEXT]
Background: [What's the situation? Who needs this? Why?]
Audience: [Who is this for?]
Use: [What will they do with this?]

[TASK]
Please [specific action verb]: [specific output]

[CONSTRAINTS]
Governance: [What tier? What data handling rules?]
Tone: [What voice?]
Format: [How should this be structured?]
Length: [Any limits?]
Exclusions: [What should NOT be included?]

[CONTENT]
Include:
- [Data element 1]
- [Data element 2]
- [Example or template, if helpful]
- [Any specific details, names, dates]
```

### Appendix D: Facilitator Notes on Common Misconceptions

1. **"Small-cell threshold is just a guideline."** No. N ≥ 10 is the DC CAP standard for Tier 2 aggregation safety. Cells with N < 10 create re-identification risk and violate governance policy.

2. **"I can ask Claude for individual student data if I say 'keep it confidential.'"** No. Tier 1 data should not enter the Claude prompt at all. Summarize or aggregate first.

3. **"Automation is better than Augmentation because it's faster."** Not necessarily. Automation is appropriate when inputs are clear and errors are easy to catch. Augmentation is appropriate when human judgment, relationship context, or governance verification is essential. Choose based on the task, not on speed.

4. **"My edit documentation should be brief."** No. The point of edit documentation is to create a trail showing you caught and fixed something important. Rationales should be specific enough that someone else can understand why the change mattered.

5. **"I don't need to write a human judgment layer if Claude's output is perfect."** You still should. The human judgment layer articulates what you verified or brought to the table — even if it's "I spot-checked the numbers and verified they match our database."

---

**End of Task 1: The Guided Pipeline SKILL.md**

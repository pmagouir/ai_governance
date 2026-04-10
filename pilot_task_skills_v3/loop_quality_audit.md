# Assessment Loop Quality Audit: Pilot Task Skills (4 Skills)

**Date:** April 2026 | **Auditor Focus:** Loop effectiveness: assessment → feedback → revision → growth capture

---

## ASSESSMENT LOOP SCORECARD

| Checkpoint | Task 1 | Task 2 | Task 3 | Capstone | Status |
|---|---|---|---|---|---|
| **1. Assessment Quality** | PARTIAL | PARTIAL | PASS | PASS | Rubrics strong; early tasks lack observable calibration anchors |
| **2. Feedback Actionability** | PASS | PASS | PASS | PASS | Consistent coaching orientation; revision targets clear |
| **3. Revision Acceptance** | PARTIAL | PARTIAL | PARTIAL | FAIL | Delta tracking weak; no "re-assess identical rubric" clarity |
| **4. Growth Capture** | PARTIAL | PARTIAL | PASS | PARTIAL | Task 3 includes cross-task trajectory; Capstone self-assessment lacks evidence chain |
| **5. Presentation Clarity** | PASS | PASS | PASS | FAIL | Portfolio format inconsistent; render_portfolio.js references but no schema validation |
| **6. Internal Consistency** | PARTIAL | PARTIAL | PARTIAL | FAIL | Dimension language drifts; readiness thresholds inconsistent |

---

## CRITICAL ISSUES (Ranked by Impact)

### ISSUE 1: Readiness Thresholds Inconsistent Across Tasks [All 4 Skills]
**Severity:** HIGH | **Affects:** Task flow clarity, advancement rules

- **Task 1:** "Meets Standard or above on all four dimensions"
- **Task 2:** "All four dimensions at Meets or above"
- **Task 3:** "Most Meets or higher on all 4 dimensions" ← DIFFERENT THRESHOLD
- **Capstone:** "Most Meets or higher on all 4 dimensions" ← SAME AS TASK 3

**Problem:** Task 3 and Capstone allow "Most Meets" (3 Meets + 1 Approaching OK). Tasks 1-2 require ALL four at Meets. This creates confused advancement rules.

**Fix:** Standardize to ONE threshold across all 4. Recommend: "Meets Standard or above on all four dimensions."

---

### ISSUE 2: Delta Comparison Not Integrated into Reassessment Logic [Tasks 1, 2, 3]
**Severity:** HIGH | **Affects:** Growth clarity, revision acceptance

- **Current state:** Delta table is shown as example output (e.g., Task 1 lines 754-761) but no clear instruction that Claude/facilitator WILL generate this automatically on resubmission.
- **Missing:** Clarity on whether the same rubric is re-applied to the revision, or if revision is just "approved" after feedback.
- **Task 3:** Mentions "growth pattern" (line 520) but doesn't show delta structure in reassessment.
- **Capstone:** No delta structure at all for revised work.

**Problem:** Participant doesn't know: (1) Is my revision assessed identically? (2) Will I see what changed? (3) Am I done after revision or do I resubmit for re-assessment?

**Fix:** Add explicit reassessment protocol:
```
Upon resubmission, your work will be:
1. Re-assessed against the SAME 4-dimension rubric
2. Assigned new level(s) per dimension
3. Compared to initial assessment in a delta table showing:
   - Dimension | Initial Level | Revised Level | Evidence of Change
```

---

### ISSUE 3: Capstone Self-Assessment Lacks Evidence Chain [Capstone Only]
**Severity:** HIGH | **Affects:** Self-assessment validity, credibility

- **Design flaw:** Capstone asks participants to self-rate "Building Confidence," "Proficient," etc. WITHOUT requiring them to cite Task 1-3 performance levels as the anchoring evidence.
- **Line 622-665:** Shows examples (Exceeds/Meets) that mention Task 1-3 evidence, but the actual template (Section 1, Subsection B) does NOT include a row for "Task 1-3 Evidence" before the self-rating.
- **Result:** Participants could rate themselves "Proficient" after Task 3 was "Approaching" with no explanation.

**Problem:** Defeats purpose of Capstone as "honest calibration." The pre-assessment instruction (line 537-552) correctly says "Gather Task 1-3 Performance Levels" but then the template doesn't force citation of those levels in the self-assessment section itself.

**Fix:** Add a mandatory row in Capstone Section 1, Subsection B:
```
Competency 1: DILIGENCE
- Task 1 Level: [Exceeds/Meets/Approaching/Below]
- Task 2 Level: [Exceeds/Meets/Approaching/Below]
- Task 3 Level: [Exceeds/Meets/Approaching/Below]
- Self-Rating: [Building Awareness / Building Confidence / Proficient / Leading Practice]
- Evidence alignment: [1-2 sentences explaining why this rating matches the pattern above]
```

---

### ISSUE 4: Portfolio Format Unclear for render_portfolio.js [All 4 Skills]
**Severity:** MEDIUM | **Affects:** Rendering reliability, facilitator handoff

- **Problem:** Skills reference "render_portfolio.js" and ".docx format with DC CAP branding" (Task 1 line 859, Task 2 line 825, Capstone line 831, 943) but:
  - No schema/structure spec for what render_portfolio.js expects
  - Markdown section headers vary (sometimes `##`, sometimes `###`, inconsistent nesting)
  - No "required metadata" block (participant name, task, date, assessor)
  - Capstone portfolio structure (lines 484-523) is detailed, but Tasks 1-2-3 are not

**Problem:** Facilitators/automated rendering will fail if markdown doesn't match schema.

**Fix:** Create a CONSISTENT "Portfolio Template" Markdown structure at the top of each skill:
```markdown
---
participant_name: [Name]
task_id: pilot-task-1-guided-pipeline
submitted_date: [ISO date]
assessor: [Facilitator]
---

# Task 1: Guided Pipeline Portfolio

## Your Work

## Assessment Results

## Growth Reflection
```

---

### ISSUE 5: Dimension Language Drifts Across Tasks [All 4 Skills]
**Severity:** MEDIUM | **Affects:** Participant understanding, cross-task comparison

**Task 1 dimensions:**
- Governance Accuracy, Prompt + Delegation Quality, Output Audit Rigor, Human Judgment Depth

**Task 2 dimensions:**
- Governance Integration, Prompt + Delegation Quality, Audit + Edit Quality, Pipeline Coherence

**Task 3 dimensions:**
- Strategic Mapping Quality, Independent Pipeline Execution, Before/After Documentation, Governance + Deployment Integration

**Capstone dimensions:**
- Use Case Quality, 4D Self-Assessment Calibration, Teaching Module Completeness, Innovation Proposal Quality

**Problem:** No consistent dimension across all 4 tasks. Participants can't track "How did my Governance understanding change?" because Task 1 calls it "Accuracy," Task 2 "Integration," Task 3 "Governance + Deployment," and Capstone doesn't measure governance directly.

**Result:** "What Shifted" (Task 3, line 520-530) claims a growth narrative, but the dimensions being measured are too different to trace growth systematically.

**Fix:** Align dimension names to the 4D model (DILIGENCE, DESCRIPTION, DELEGATION, DISCERNMENT) across all 4 tasks:
- Task 1: Measure each dimension on guided content
- Task 2: Measure each dimension on scenario
- Task 3: Measure each dimension on independent work
- Capstone: Self-assess each dimension post-tasks

This enables true "4D growth trajectory" comparisons.

---

### ISSUE 6: Calibration Anchors Missing from Task 3 [Task 3]
**Severity:** MEDIUM | **Affects:** Rubric reliability

- **Tasks 1-2:** Both have "Calibration Anchors (Approaching → Meets Boundary)" sections (e.g., Task 1 lines 562-564, Task 2 lines 538-540).
- **Task 3:** Has dimension definitions (lines 324-505) but NO calibration anchors. Examiners cannot reliably distinguish Approaching from Meets on "Strategic Mapping Quality" without anchors.
- **Capstone:** Similarly missing calibration anchors for "Use Case Quality" and "Innovation Proposal Quality."

**Fix:** Add calibration anchors to all rubrics in Tasks 3 and Capstone:
```
**Calibration Anchors (Approaching → Meets Boundary):**
- Meets requires: [specific observable evidence]
- Approaching shows: [specific incomplete evidence]
```

---

### ISSUE 7: No Numerical Residue, But "Most Meets" Language Invites Counting [Tasks 3, Capstone]
**Severity:** LOW | **Affects:** Consistency with anti-scoring principle

- **Observed:** "Most Meets or higher" (Task 3, Capstone) and "Most/all Exceeds" (Capstone line 195) suggest counting levels into composites.
- **Not explicitly scored:** But the phrasing "Most Meets" is dangerously close to "3 out of 4 at Meets" = implicit scoring.
- **Fix:** Replace "Most Meets or higher" with explicit language: "Meets Standard or above on at least 3 of 4 dimensions" (if that's the intent) or standardize to Task 1-2 language: "Meets Standard or above on all four dimensions."

---

## SUMMARY OF FIXES NEEDED

| Priority | Fix | Tasks Affected |
|----------|-----|---|
| **CRITICAL** | Standardize readiness threshold to "Meets Standard or above on all four" | 3, Capstone |
| **CRITICAL** | Integrate delta comparison into auto-generated reassessment output; clarify re-assessment protocol | 1, 2, 3 |
| **CRITICAL** | Add mandatory Task 1-3 evidence citation row to Capstone self-assessment template | Capstone |
| **HIGH** | Create consistent portfolio markdown schema; define render_portfolio.js expectations | All 4 |
| **HIGH** | Align dimension names across all 4 tasks to 4D model (DILIGENCE, DESCRIPTION, DELEGATION, DISCERNMENT) | All 4 |
| **HIGH** | Add calibration anchors to Task 3 and Capstone rubrics | 3, Capstone |
| **LOW** | Replace "Most Meets" language with explicit threshold statements | 3, Capstone |

---

## STRENGTHS OBSERVED

- ✓ **Feedback coaching orientation is strong** across all 4 skills. Every dimension includes "What you did well + what could strengthen" (not just deficit-focused).
- ✓ **Revision guidance templates are specific** (Tasks 1-2): Coaching orientation, concrete revision actions, coaching questions by dimension.
- ✓ **Task 3 growth narrative is explicit:** Lines 520-530 clearly define the Task 1→2→3 progression and what changes.
- ✓ **Rubric definitions are qualitatively detailed:** Observable criteria for Exceeds/Meets/Approaching/Below are present and substantive.
- ✓ **Portfolio sections are well-structured** (Task 3 lines 591-623, Capstone lines 484-523 show clear section intent).

---

## NEXT STEPS

1. **Implement fixes in priority order:** Start with readiness thresholds and delta reassessment (enable actual loop closure).
2. **Align dimension language:** Create a "4D Assessment Framework" reference doc that all 4 skills cite.
3. **Test portfolio rendering:** Validate markdown output against render_portfolio.js schema before next pilot run.
4. **Pilot reassessment on 2-3 participants:** Confirm that revision + delta process works end-to-end.


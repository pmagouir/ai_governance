# AI Pilot Resistance Management Protocol

**Internal document — not participant-facing.**
**Owners:** Preston Magouirk, Angela Cammack
**Last updated:** April 2026

---

## Purpose

This protocol identifies early signals of disengagement in the AI Leadership Pilot and defines graduated response actions. The goal is to support participants who are struggling — not to police participation. Every intervention assumes good faith and starts with curiosity, not correction.

---

## Signal Detection

### Data Sources
1. **Weekly reflection confidence scores** (1-5, submitted via pilot hub) — tracked per participant per week
2. **Milestone completion** (Google Sheets) — prerequisite completion, capstone section drafts
3. **AI Friday attendance and participation** — observed by facilitator
4. **Claude Enterprise usage logs** (if available) — login frequency, session count

### Warning Signals

| Signal | Threshold | Timeline |
|--------|-----------|----------|
| Confidence score drop | 2+ point decline week-over-week | Flag after 1 occurrence |
| Persistent low confidence | Score of 1-2 for 2+ consecutive weeks | Flag after 2nd week |
| Missing reflections | No submission for 2+ consecutive weeks | Flag after 2nd missed week |
| AI Friday absence | Missed 2+ consecutive sessions without notice | Flag after 2nd absence |
| Capstone non-start | No Section 1 draft by end of Week 6 | Flag at Week 6 Friday |
| Verbal disengagement | Participant expresses frustration, skepticism, or overwhelm in session | Flag immediately |

### Positive Signals to Watch For
- Confidence score increase (reinforces approach is working)
- Unprompted sharing in AI Fridays (engagement beyond minimum)
- Cross-unit collaboration (reaching out to other pilot participants)
- Challenge completion ahead of schedule

---

## Response Protocol

### Level 1: Check-In (Private, Informal)
**Trigger:** Any single warning signal.
**Owner:** Preston or Angela (whoever has the stronger relationship with the participant).
**Action:** 
- Casual 1:1 conversation (in person, not email). Frame as support, not performance review.
- Opening: "How's the pilot going for you? I noticed [specific observation]. Wanted to check in."
- Listen for: technical barriers, time pressure, relevance skepticism, fear of failure, unclear expectations.
- **Do not** reference data scores or tracking directly. The conversation should feel organic.
**Outcome:** Identify the root cause. Document privately.

### Level 2: Adjusted Support (Targeted)
**Trigger:** Root cause identified at Level 1, or 2+ warning signals simultaneously.
**Owner:** Preston or Angela.
**Action based on root cause:**

| Root Cause | Intervention |
|------------|-------------|
| **Technical barrier** | Pair with a peer who has strong Claude fluency. Offer a 15-min hands-on session. Simplify the weekly challenge to one specific task. |
| **Time pressure** | Acknowledge the constraint explicitly. Reduce expectations: "Focus on the capstone — skip the reflections for now." Identify one workflow from their existing work that maps directly to the challenge. |
| **Relevance skepticism** | Connect the 4D framework to a problem they already care about. Ask: "What's the most annoying recurring task in your week?" Build from there. |
| **Fear of failure** | Reinforce psychological safety privately: "There is no wrong way to do this. The capstone is about what you learned, including what didn't work." Share an example of something that didn't work for you. |
| **Unclear expectations** | Walk through the capstone template together. Show the worked example. Clarify: "This is what 'done' looks like." |

**Outcome:** Participant has a concrete, simplified path forward. Document the intervention.

### Level 3: Scope Adjustment (Formal)
**Trigger:** No improvement after Level 2, or participant explicitly asks to reduce commitment.
**Owner:** Preston, with Angela aware.
**Action:**
- Private conversation acknowledging the situation directly.
- Offer a modified capstone scope: "Instead of a full Claude Project + workflow, let's focus on documenting one workflow you've tried and your 4D reflection."
- Maintain AI Friday attendance expectation (community value is independent of capstone scope).
- Frame as: "The pilot is designed to meet you where you are. A smaller deliverable that's honest about your experience is more valuable than a polished one that doesn't reflect your journey."
**Outcome:** Adjusted deliverable scope documented. Participant stays in the cohort.

### Level 4: Graceful Exit (Last Resort)
**Trigger:** Participant has disengaged despite Level 3, or explicitly requests to leave.
**Owner:** Preston, with Eric Waldo informed.
**Action:**
- Private conversation. No blame, no pressure.
- Ask: "What would have made this work better?" (genuine feedback for program improvement).
- Preserve the relationship: "Your perspective on why this didn't fit is valuable. I'd like to include your feedback in the pilot report — anonymized — if you're open to it."
- Claude Enterprise access remains active (the tool is not conditional on pilot participation).
**Outcome:** Clean exit. Feedback captured. Relationship intact.

---

## Documentation

All interventions are documented in a private log (not shared with participants or broader staff):

| Date | Participant | Signal | Level | Action Taken | Outcome | Follow-up |
|------|-------------|--------|-------|--------------|---------|-----------|

Store in: `_internal/resistance_log.csv` (create when first needed — do not pre-populate).

---

## Principles

1. **Curiosity before correction.** Always assume the participant has a valid reason. Find it.
2. **Support, not surveillance.** Data informs outreach — it does not drive performance evaluation.
3. **Scope is adjustable. Standards are not.** A smaller capstone is fine. A dishonest one is not.
4. **The relationship outlasts the pilot.** These are senior leaders. How they experience this program shapes their willingness to champion AI adoption in Q1 and beyond.
5. **Disengagement is signal, not failure.** If multiple participants disengage for the same reason, that's a program design problem, not a people problem. Adjust the program.

---

## Weekly Review Cadence

**Every Friday after AI Fridays:**
- Preston and Angela review reflection submissions and attendance.
- Flag any new warning signals.
- Check progress on open Level 1-3 interventions.
- 5-minute standing conversation. No formal meeting needed.

---

*This protocol is a living document. Update based on what actually happens during the pilot.*

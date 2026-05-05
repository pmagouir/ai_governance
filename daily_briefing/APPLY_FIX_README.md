# Permanent fix for daily-briefing-ai-pilot — apply from interactive Cowork

The scheduled task can't update its own SKILL.md from inside a scheduled-task session. Open Cowork interactively (your normal session, not the briefing run) and paste this prompt:

> Read `/sessions/<current-session>/mnt/BRAIN/projects/ai_governance/daily_briefing/PROPOSED_SKILL.md`, then call `mcp__scheduled-tasks__update_scheduled_task` with `taskId: "daily-briefing-ai-pilot"` and `prompt:` set to the full file contents.

Verify after applying:

```
mcp__scheduled-tasks__list_scheduled_tasks
# inspect the path field for daily-briefing-ai-pilot
# Read that file, confirm the "Ground-truth check" and "Self-check before commit" sections are present
```

## What changed in PROPOSED_SKILL.md vs the prior version

1. **Dynamic workspace resolution.** Replaced the hardcoded `/sessions/adoring-wizardly-babbage/...` path with a `find` that locates the active session's `ai_governance` workspace. Future runs work regardless of session name.

2. **Mandatory ground-truth pilot-week detection.** New section reads `pilot_hub.html`, finds every `<!-- WEEK N: -->` block, and identifies the highest-numbered Week whose container does not have `display:none`. That number is `$ACTIVE_WEEK`. The drafted body must reference `Week $ACTIVE_WEEK` and must not reference any week number greater than that.

3. **Anti-inheritance rule.** Explicit instruction: do NOT infer the active week from yesterday's briefing, deploy reports, `strategy.md`, `handoff.md`, or any secondary source. The HTML wins. If yesterday's entry got it wrong, today's entry rewrites — does not inherit.

4. **Pre-commit self-check block.** Three Python assertions run before `git commit`. They block the commit if (a) today's entry is missing, (b) the body lacks `Week $ACTIVE_WEEK`, or (c) the body references a future week number. The deploy fails fast instead of shipping a wrong-week briefing.

5. **Defective-entry rewrite trigger.** If today's entry already exists but references the wrong week, the workflow now treats it as defective and rewrites — does not skip on the basis of `validationStatus: PASSED` alone.

## Why this happened

The old SKILL.md said only: "Align with current pilot week (check `pilot_hub.html` or `strategy.md` for the active week)." That language is too soft. On the May 4 run, the agent inherited a Week 5 frame from a forward-looking phrase in the prior context. The May 5 run inherited that frame from the May 4 deploy report. Two consecutive runs shipped a Week 5 briefing while the visible pilot HTML was still on Week 4.

The fix replaces "align" with a deterministic check that produces a single integer the rest of the workflow has to honor.

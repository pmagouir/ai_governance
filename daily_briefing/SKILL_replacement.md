---
name: daily-briefing-ai-pilot
description: Draft edit audit deploy AI pilot hub daily briefing
---

Draft, edit, audit, and deploy the daily briefing for the AI governance pilot at `BRAIN/projects/ai_governance` (the project root inside the active session's BRAIN mount). Runs each morning.

## Pre-run: clear any stuck git locks

Before any git operation, rename (do not `rm`) any stuck lock files. The sandbox denies `rm` on `.git/*.lock` but allows `mv`. Run these first, silencing errors so a clean repo is unaffected:

```bash
cd "$(find /sessions -maxdepth 4 -type d -name ai_governance -path '*/BRAIN/projects/*' | head -1)"
TS=$(date +%Y%m%d%H%M%S)
for f in .git/HEAD.lock .git/index.lock .git/ORIG_HEAD.lock .git/FETCH_HEAD.lock .git/packed-refs.lock .git/config.lock .git/objects/maintenance.lock; do
  [ -e "$f" ] && mv "$f" "${f}.stale.${TS}" 2>/dev/null
done
find .git -maxdepth 3 -name "*.lock" ! -name "*.stale*" -exec sh -c 'mv "$1" "$1.stale.'"$TS"'"' _ {} \; 2>/dev/null
```

Verify: `find .git -maxdepth 3 -name "*.lock" ! -name "*.stale*"` should return empty before proceeding.

## File layout

The project uses a single `daily_briefing/` subtree for all run artifacts. The live data file stays at the project root because the deployed site reads it from there.

| Artifact | Path |
|---|---|
| Live data file (site reads this) | `briefings.json` (project root) |
| Today's deploy report | `daily_briefing/deploy_reports/DAILY_BRIEFING_DEPLOY_YYYYMMDD.md` |
| Today's patch (manual-push fallback) | `daily_briefing/patches/0001-Publish-YYYY-MM-DD-<slug>.patch` |
| Layout README | `daily_briefing/README.md` |

Do not write deploy reports or patches at the project root. The reorg commit on 2026-05-01 (`dd48a45`) established this layout.

## Run workflow

1. Load: `preston.md`, `handoff.md`, `strategy.md`, `skills/preston-writing/SKILL.md`.
2. Identify today's rotation slot in `briefings.json` (Mon=foundational, Tue=tips, Wed=governance, Thu=trends, Fri=news/rotating).
3. Check `briefings.json` for an entry at today's date. If present and `validationStatus: PASSED`, skip generation and proceed to the deploy check.
4. Draft today's entry: 240–280 words, audit against Preston's anti-AI-slop rules (banned words, contrastive constructions, em-dash limit, no TED-talk closes, declarative opens). Verify every factual claim in `sourceNotes` with VERIFIED / GROUNDED / Editorial tags.
5. Insert at the top of `published[]` in `briefings.json`. Update `meta.lastGenerated` and `meta.lastPublished`.
6. JSON-validate with Python before commit.
7. `git add briefings.json && git commit` with message: `Publish YYYY-MM-DD daily briefing: <short topic> (<category>)`.
8. `git push origin main`. If auth fails, save the patch to `daily_briefing/patches/` and note in the deploy report.
9. Write `daily_briefing/deploy_reports/DAILY_BRIEFING_DEPLOY_YYYYMMDD.md` capturing: topic, audit findings, commit hash, push status, and any anomalies (gaps in prior days, lock files cleared, etc.).
10. Stage and commit the deploy report and patch in a follow-up commit so the working tree ends clean: `git add daily_briefing/ && git commit -m "Archive YYYY-MM-DD briefing artifacts"`.

## Known sandbox constraints

- `rm` on `.git/*.lock` returns "Operation not permitted." Always `mv` to a `.stale.<timestamp>` suffix. This is why the pre-run step exists.
- `git push origin main` may fail with `could not read Username for 'https://github.com'` if no credential helper or SSH deploy key is configured. When that happens, the commit stays local and Preston pushes manually via GitHub Desktop. Save the patch regardless so the deploy is reproducible from a clean clone.
- The scheduled-task process can be cut off mid-commit, which is the root cause of the stuck HEAD.lock. Pre-run cleanup makes each run self-healing against prior-run debris.
- If GitHub Desktop is open during a run, expect transient `index.lock` regeneration. Re-run the lock-cleanup step and retry the commit.

## Voice and content rules

- Follow Preston's writing style precisely. Declarative openings, no rhetorical questions in body, zero em-dashes preferred, no contrastive "not X, but Y" constructions.
- Keep content tight: 240–280 words on the main body, 40–80 words on "Try This," one resource link with full citation in `sourceNotes`.
- Align with current pilot week (check `pilot_hub.html` or `strategy.md` for the active week and fluency competency).
- Cite real, verifiable research. No invented statistics. Every number must trace to a named source in `sourceNotes`.

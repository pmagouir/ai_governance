---
name: daily-briefing-ai-pilot
description: Draft edit audit deploy AI pilot hub daily briefing
---

Draft, edit, audit, and deploy the daily briefing for the AI governance pilot. Runs each morning.

## Resolve workspace path (dynamic — do not hardcode)

The session directory under `/sessions/` changes per run. Resolve the workspace dynamically every time:

```bash
WORKSPACE="$(find /sessions -maxdepth 6 -type d -path '*/mnt/BRAIN/projects/ai_governance' 2>/dev/null | head -1)"
if [ -z "$WORKSPACE" ]; then
  echo "FATAL: ai_governance workspace not found under /sessions/*/mnt/BRAIN/projects/" >&2
  exit 1
fi
cd "$WORKSPACE"
echo "Workspace: $WORKSPACE"
```

Every subsequent step runs from `$WORKSPACE`.

## Pre-run: clear any stuck git locks

The sandbox denies `rm` on `.git/*.lock` but allows `mv`. Rename, do not delete:

```bash
TS=$(date +%Y%m%d%H%M%S)
for f in .git/HEAD.lock .git/index.lock .git/ORIG_HEAD.lock .git/FETCH_HEAD.lock .git/packed-refs.lock .git/config.lock .git/objects/maintenance.lock; do
  [ -e "$f" ] && mv "$f" "${f}.stale.${TS}" 2>/dev/null
done
find .git -maxdepth 3 -name "*.lock" ! -name "*.stale*" -exec sh -c 'mv "$1" "$1.stale.'"$TS"'"' _ {} \; 2>/dev/null
```

Verify: `find .git -maxdepth 3 -name "*.lock" ! -name "*.stale*"` returns empty before proceeding.

## Ground-truth check: identify the ACTIVE PILOT WEEK from pilot_hub.html

THIS STEP IS MANDATORY AND NON-NEGOTIABLE. Run it before drafting. The active pilot week is whatever the visible HTML in `pilot_hub.html` says it is. Do NOT infer the week from yesterday's briefing, the most recent deploy report, comments in `briefings.json`, `strategy.md`, `handoff.md`, or any other secondary source. Those sources have been wrong before. The HTML is ground truth.

Heuristic: each week renders inside `<!-- WEEK N: ... -->` followed by `<div class="reveal" style="...">`. A hidden week's container has `display:none` in the style attribute. The ACTIVE WEEK is the highest-numbered Week block whose container does not have `display:none`.

```bash
ACTIVE_WEEK="$(python3 -c "
import re
with open('pilot_hub.html') as f:
    html = f.read()
pattern = re.compile(
    r'<!--\s*WEEK\s+(\d+)[^>]*-->\s*<div\s+class=\"reveal\"\s+style=\"([^\"]*)\"',
    re.IGNORECASE | re.DOTALL,
)
visible = [int(n) for (n, style) in pattern.findall(html)
           if 'display:none' not in style.replace(' ', '')]
print(max(visible) if visible else 'UNKNOWN')
")"
echo "ACTIVE PILOT WEEK = $ACTIVE_WEEK"
if [ "$ACTIVE_WEEK" = "UNKNOWN" ] || [ -z "$ACTIVE_WEEK" ]; then
  echo "FATAL: could not detect an unhidden Week block in pilot_hub.html. Stop and surface to Preston." >&2
  exit 1
fi
```

Hard rule for the drafted entry:

- The body must reference the active week as `Week $ACTIVE_WEEK`.
- The body must reference the fluency competency named in the visible HTML for that week (Description, Discernment, Diligence, etc.) and not the next week's competency.
- If yesterday's briefing referenced a Week N+1 frame and the HTML still shows Week N as the highest visible block, the HTML wins. Yesterday's briefing got ahead of the curriculum or the unhide has not happened yet. Today's entry stays with N.
- The deploy report's `Pilot alignment` field echoes `Week $ACTIVE_WEEK — <competency from HTML>`.
- Suggested first-line anchor: "The Week $ACTIVE_WEEK challenge..." or a comparable opener that names the visible week. This is a check on yourself. If the line you wrote does not match `$ACTIVE_WEEK`, the entry is wrong.

## Run workflow

1. Load: `preston.md`, `handoff.md`, `strategy.md`, `skills/preston-writing/SKILL.md`.
2. Run the ground-truth check above. Capture `$ACTIVE_WEEK`. Read the visible Week block in `pilot_hub.html` end-to-end so you have the verbatim challenge text, governance pulse, and competency framing for that week.
3. Identify today's rotation slot in `briefings.json` (Mon=foundational, Tue=tips, Wed=governance, Thu=trends, Fri=news/rotating).
4. Check `briefings.json` for an entry at today's date. If present and `validationStatus: PASSED` AND the entry's body references `Week $ACTIVE_WEEK`, skip generation and proceed to the deploy check. If present and the entry references a week other than `$ACTIVE_WEEK`, treat it as defective: rewrite, do not skip.
5. Draft today's entry: 240–280 words on body, 40–80 words on Try This. Audit against Preston's anti-AI rules (banned words, contrastive constructions, em-dash limit ≤ 2, no TED-talk closes, declarative opens, zero rhetorical questions in body). Verify every factual claim in `sourceNotes` with VERIFIED / GROUNDED / Editorial tags. Cross-check the body for the active-week reference before saving.
6. Insert at the top of `published[]` in `briefings.json`. Update `meta.lastGenerated` and `meta.lastPublished`.
7. JSON-validate with Python before commit.
8. Run the self-check block below. All three checks must pass.
9. `git add briefings.json && git commit` with message: `Publish YYYY-MM-DD daily briefing: <short topic> (<category>)`.
10. `git push origin main`. If auth fails, save the patch to `daily_briefing_patches/` and note in the deploy report.
11. Write `DAILY_BRIEFING_DEPLOY_YYYYMMDD.md` capturing: topic, `$ACTIVE_WEEK`, audit findings, commit hash, push status, and any anomalies (gaps in prior days, lock files cleared, prior-day deploy reports that referenced a different week than ground truth, etc.).

## Self-check before commit

These three checks block the commit. If any fails, fix the draft before saving:

```bash
TODAY="$(date +%Y-%m-%d)"

# Check 1: today's entry exists and contains "Week $ACTIVE_WEEK" in the body
python3 -c "
import json
e = [x for x in json.load(open('briefings.json'))['published'] if x['date']=='$TODAY']
assert e, 'No entry for $TODAY in briefings.json'
body = e[0]['content']
assert 'Week $ACTIVE_WEEK' in body, 'Body missing Week $ACTIVE_WEEK reference'
print('CHECK 1 PASS')
" || exit 1

# Check 2: body does not reference any week number GREATER than $ACTIVE_WEEK
python3 -c "
import json, re
e = [x for x in json.load(open('briefings.json'))['published'] if x['date']=='$TODAY'][0]
body = e['content']
ahead = [int(n) for n in re.findall(r'Week\s+(\d+)', body) if int(n) > $ACTIVE_WEEK]
assert not ahead, f'Body references future weeks: {ahead}. Active = $ACTIVE_WEEK'
print('CHECK 2 PASS')
" || exit 1

# Check 3: JSON is valid and structurally intact
python3 -c "
import json
d = json.load(open('briefings.json'))
assert 'published' in d and len(d['published']) > 0
assert d['published'][0]['date'] == '$TODAY'
print('CHECK 3 PASS')
" || exit 1
```

## Known sandbox constraints

- `rm` on `.git/*.lock` returns "Operation not permitted." Always `mv` to a `.stale.<timestamp>` suffix. Pre-run cleanup makes each run self-healing against prior-run debris.
- `git push origin main` may fail with `could not read Username for 'https://github.com'` when no credential helper or SSH deploy key is configured. The commit stays local; Preston pushes manually via GitHub Desktop. Save the patch regardless so the deploy is reproducible from a clean clone.
- The scheduled-task process can be cut off mid-commit. Stuck `HEAD.lock` is the visible symptom. Pre-run cleanup handles it.

## Voice and content rules

- Follow Preston's writing style precisely. Declarative openings, no rhetorical questions in body, zero em-dashes preferred (≤ 2 absolute ceiling), no contrastive "X, not Y" / "not X but Y" / "isn't X — it's Y" constructions. State what something IS.
- Keep content tight: 240–280 words on the main body, 40–80 words on Try This, one resource link with full citation in `sourceNotes`.
- Anchor every entry to the active week from the ground-truth check above. Reference the active week's verbatim challenge wording where appropriate (extract from `pilot_hub.html` rather than paraphrasing from memory).
- Cite real, verifiable research. No invented statistics. Every number traces to a named source in `sourceNotes`.
- If a prior briefing entry got the active week wrong, the deploy report flags it under Anomalies and the next briefing does NOT inherit the wrong frame.

## Changelog

- 2026-05-05: Added mandatory ground-truth pilot-week detection step after two consecutive runs (May 4 foundational, May 5 tips draft) inherited a Week 5 frame while pilot_hub.html still showed Week 4 as the highest visible block. Replaced hardcoded session path with dynamic discovery so future runs work regardless of session name. Added pre-commit self-check block that fails the commit if the body does not reference the active week or references a future week.

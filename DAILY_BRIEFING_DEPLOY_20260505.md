# Daily Briefing Deploy Report — 2026-05-05

**Run:** Scheduled task `daily-briefing-ai-pilot`
**Date:** Tuesday, May 5, 2026
**Rotation slot:** Tips & Tricks (Tuesday)
**Pilot alignment (CORRECTED):** **Week 4 — Build Worth Keeping (Discernment)**

---

## Defect surfaced this run

The first draft of today's briefing inherited a Week 5 framing from the May 4 deploy report. Preston caught it during review. Ground truth in `pilot_hub.html` shows Week 4 (Build Worth Keeping) as the highest visible Week block; Weeks 5–8 still have `display:none` on their container divs. The May 4 briefing got ahead of the curriculum and the May 5 draft inherited that error.

The corrected entry is now in `briefings.json` at the top of `published[]`, dated 2026-05-05, fully reframed to Week 4.

## Today's entry (CORRECTED)

- **Title:** Extract, Encode, Cite: How to Load an Outside Source Into a Build
- **Category:** tips
- **Body word count:** 269 (in 240–280 band)
- **Try This word count:** 54 (in 40–80 band)
- **Em-dashes:** 0 (well under 2-per-piece limit)
- **Validation status:** PASSED
- **Resource link:** https://dccapinnovation.org/pilot_hub.html

## Editorial framing (Week 4)

The Week 4 challenge requires loading at least one outside source into the v1 build. The trap is pasting a research PDF or peer playbook into a reference file and assuming Claude reads it; outputs sound the same as before. The tip gives a three-step Extract / Filter / Encode procedure: (1) prompt Claude to pull the concrete instructions, thresholds, and anti-patterns out of the source as bullets with section numbers; (2) strike anything generic; (3) write the keepers into the custom-instructions block or SKILL.md procedure with citations. The build then carries the source's authority, and the next teammate inheriting it gets the rules and the citation in one move.

Verbatim phrase "earn its keep" anchors the tip directly to the Week 4 lead paragraph in `pilot_hub.html`.

## Audit findings

- **Banned vocabulary scan:** clean across 40+ banned terms.
- **Contrastive constructions:** zero. Pre-commit revision caught one ("extraction, not attachment") and rewrote to declarative form ("Extraction is the move.").
- **Em-dashes:** 0 in body, 0 in Try This.
- **Rhetorical questions in body:** zero.
- **Opening:** concrete fact (Week 4 build requirement).
- **Closing:** declarative landing tied to the Week 4 frame.

## Source verification

| Claim | Status |
|-------|--------|
| Week 4 = Build Worth Keeping; challenge requires loading outside source | GROUNDED — `pilot_hub.html` Week 4 challenge step 2 |
| Outside-source examples (research doc, peer playbook, verified data table, brand guide, Anthropic skill) | GROUNDED — `pilot_hub.html` Week 4 challenge verbatim list |
| Three customization vectors (org context, outside authority, workflow shape) | GROUNDED — `pilot_hub.html` Week 4 "Customization Play" block |
| Project = custom-instructions; Skill = SKILL.md | GROUNDED — `pilot_hub.html` Week 4 vectors block |
| "Earn its keep" framing | GROUNDED — `pilot_hub.html` Week 4 lead paragraph |
| Three-step Extract / Filter / Encode procedure | EDITORIAL — Preston's tactical decomposition |

## Git operations

- **Pre-run lock cleanup:** No active locks at run start. Two `.stale.*` files from prior runs preserved per protocol.
- **Initial (defective) commit:** `7157199` — Week 5 framing, superseded.
- **Corrective commit:** `ec93d1f` — `Correct 2026-05-05 briefing: reframe to Week 4 Build Worth Keeping (was Week 5)`.
- **Post-commit lock:** Transient `.git/HEAD.lock` reappeared after each commit (sandbox `Operation not permitted` on `unlink` is a known constraint). Cleared via `mv` to `.stale.<timestamp>` after each commit.
- **Push status:** Failed. `fatal: could not read Username for 'https://github.com'` — no credential helper or SSH deploy key in scheduled-task sandbox.
- **Patches saved:**
  - `daily_briefing_patches/0001-Publish-2026-05-05-daily-briefing-Two-Prompts-That-T.patch` (defective; do not apply)
  - `daily_briefing_patches/0001-Correct-2026-05-05-briefing-reframe-to-Week-4-Build-.patch` (corrective; apply this one)

## Permanent fix to the scheduled task

Two consecutive runs (May 4, May 5) misidentified the pilot week. Root cause: the SKILL.md said "align with current pilot week (check `pilot_hub.html` or `strategy.md`)" — too soft. The agent inherited the wrong week from a prior briefing instead of grinding ground truth from the HTML.

A corrected SKILL.md is staged at:

`daily_briefing/PROPOSED_SKILL.md`

with apply instructions at:

`daily_briefing/APPLY_FIX_README.md`

The new SKILL.md adds a mandatory ground-truth check that reads `pilot_hub.html`, identifies the highest-numbered visible Week block, captures it as `$ACTIVE_WEEK`, and forces the body to reference exactly that week. A pre-commit self-check block fails the commit if the body is missing the active week or references a future week. Hardcoded session paths replaced with dynamic discovery so future runs work regardless of session name.

The scheduled task cannot update itself from inside a scheduled-task session — `mcp__scheduled-tasks__update_scheduled_task` returns "Cannot update scheduled tasks from within a scheduled task session." Apply from your interactive Cowork session per `APPLY_FIX_README.md`.

## Action for Preston

1. Apply the SKILL.md fix per `daily_briefing/APPLY_FIX_README.md` (single MCP call).
2. Push local commits `a9b4d49` (May 4 — also defective Week 5 framing; consider whether to leave or amend) and `ec93d1f` (May 5 corrective) to `origin/main` via GitHub Desktop. Both are reproducible from saved patches.
3. Optional: edit yesterday's `briefings.json` entry (2026-05-04) to remove the Week 5 framing so the historical record is consistent. The May 4 entry references "Week 5 inheritance test" multiple times.

## Anomalies

- May 4 entry shipped with Week 5 frame while pilot_hub.html still showed Week 4 visible. Same defect, prior run.
- The post-commit `.git/HEAD.lock` is the recurring sandbox quirk and was cleared inline after each commit.
- Older `.stale.*` files in `.git/` are safe to leave or delete at Preston's discretion.

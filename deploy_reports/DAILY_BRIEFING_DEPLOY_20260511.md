# Daily Briefing Deploy — 2026-05-11

## Topic

**Category:** foundational (Monday rotation)
**Title (rev 2 — shipped):** Where AI Actually Shows Up at Work, and Why Week 6 Cares
**Pilot anchor:** Week 6 (capstone opens; Week 6 Challenge = trace one externally sent piece)
**Source:** Anthropic Economic Index, February 2025 release (Handa et al., "Which Economic Tasks are Performed with AI? Evidence from Millions of Claude Conversations")

## Revision history this run

- **Rev 1** (commit `37e782e`) — anchored to Brynjolfsson, Li, Raymond (NBER WP 31161, April 2023). Preston flagged: too old, too research-dense. Replaced.
- **Rev 2** (commit `8bb0270`) — current. Anchored to Anthropic Economic Index, Feb 2025. Opens in second person with a relatable use case. Three top-occupation percentages anchored to familiar job families. Same Week 6 trace landing.

## Audit findings (rev 2)

- Body word count: 261 (target band 240–280) — PASS
- Try This word count: 57 (target band 40–80) — PASS
- Em-dashes in body + title + tryThis: 0 — PASS
- Banned vocabulary scan: zero hits across the full banned list. — PASS
- Contrastive constructions: zero. — PASS
- Rhetorical questions in body: zero. — PASS
- Opens with a concrete relatable fact (you probably used Claude for a piece of writing last week). — PASS
- Every numeric claim traced to a VERIFIED source in `sourceNotes`. — PASS
- Source freshness: February 2025 (15 months prior), distinct from the September 2025 Index update referenced in the May 8 news entry. — PASS
- `validationStatus`: PASSED

## Commit chain

- `37e782e` (rev 1) — Brynjolfsson framing. Now superseded but present in origin/main history (appears to have shipped via an external push between rev 1 and rev 2; see anomalies).
- `8bb0270` (rev 2) — Anthropic Economic Index framing. **Local-only, awaiting push.**

## Push status

`git push origin main` failed with `could not read Username for 'https://github.com'` — documented sandbox auth constraint.

- Rev 2 commit `8bb0270` is local on `main`, ahead of `origin/main` by one commit.
- Patch saved to `daily_briefing_patches/0002-Revise-2026-05-11-daily-briefing-replace-with-introd.patch`.
- Rev 1 patch (`2026-05-11_daily_briefing.patch`) renamed to `2026-05-11_daily_briefing.rev1-superseded.patch.bak` to prevent accidental re-application.
- Preston pushes manually via GitHub Desktop. From a clean clone, the rev 2 patch reapplies cleanly on top of origin/main with `git am < daily_briefing_patches/0002-Revise-*.patch`.

## Anomalies

- `git log origin/main` shows rev 1 commit `37e782e` already present in the remote history at the time of the push attempt for rev 2 — yet the rev 1 `git push` itself returned the auth failure above. Most likely explanation: an unrelated push (Preston via GitHub Desktop, or another scheduled task) carried `37e782e` to origin between the rev 1 push attempt and the rev 2 commit. **Action item for Preston: push `8bb0270` so the site shows the rev 2 (Anthropic Index) framing instead of the rev 1 (Brynjolfsson) framing currently in origin/main.**
- Pre-run lock cleanup ran clean. `find .git -maxdepth 3 -name "*.lock"` returned empty before any git operations.
- During each commit, transient `tmp_obj_*` files and `.git/HEAD.lock` triggered "Operation not permitted" warnings (the sandbox denies `rm` on `.git` internals). Commits still produced cleanly. Next run's pre-run `mv` sweep should reclaim them.
- Prior-day gap check: published series runs back through 2026-05-08 (Fri), 05-07, 05-06, 05-05, 05-04. Weekend gap (05-09, 05-10) is by design.
- Repo had prior uncommitted edits to `pilot_hub.html` and an untracked `practice/model_picker.html` before this run. Both untouched. Unrelated to the daily briefing pipeline.

## Followups

- **Blocking-ish:** Preston pushes `8bb0270` to origin/main so the live site shows the rev 2 entry. Until then, dccapinnovation.org renders the rev 1 (Brynjolfsson) version of today's briefing.
- Investigate origin-push anomaly at next session if it recurs. Most likely benign (parallel manual push), but worth noting.

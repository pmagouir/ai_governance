# Daily Briefing Deploy Report — 2026-05-04

**Run:** Scheduled task `daily-briefing-ai-pilot`
**Date:** Monday, May 4, 2026
**Rotation slot:** Foundational (Monday)
**Pilot alignment:** Week 5 opens — *Iterate & Inherit*

---

## Today's entry

- **Title:** The Jagged Frontier: 40% Quality Lift Came From Iteration
- **Category:** foundational
- **Body word count:** 257 (in 240–280 band)
- **Try This word count:** 59 (in 40–80 band)
- **Em-dashes:** 0
- **Validation status:** PASSED
- **Source:** Dell'Acqua, Edelman, McFowland, Mollick, Mollick, Lifshitz-Assaf, Kellogg, Krayer, Rajendran, Lakhani, "Navigating the Jagged Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality," Harvard Business School Working Paper 24-013, September 2023.
- **Resource link:** https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321 (SSRN abstract page; canonical citation HBS WP 24-013)

## Editorial framing

The Dell'Acqua paper's headline findings — 12% more tasks, 25% faster, 40% quality lift inside the AI frontier; degraded performance outside it — get reframed as a Week 5 inheritance test. Centaur and Cyborg patterns map onto the pilot's "give the build to a teammate, watch where it breaks" challenge. The Try This routes participants to a concrete two-column observation exercise that mirrors the Week 5 Challenge card on `pilot_hub.html`.

## Audit findings (rev 1)

- Banned vocabulary scan: clean (leverage, utilize, delve, navigate metaphorical, landscape, ecosystem, synergy, robust, holistic, stakeholders, foster, enhance, align, transformative, empower, myriad, multifaceted, pivotal, spearhead, showcase, underscore, doing the heavy lifting, the real question is, what most people miss, this is where it gets interesting — all absent).
- Contrastive constructions ("X, not Y" / "not X but Y" / "isn't X — it's Y"): zero.
- However / Moreover / Furthermore / Additionally: zero.
- Rhetorical questions in body: zero.
- Opening: concrete fact (758 consultants, 18 tasks, three numbered outcomes).
- Closing: declarative landing ("The Cyborgs in the study did not.") — no TED-talk close, no rhetorical invocation.
- "Navigate" appears only inside the source paper title in `sourceNotes`, never in the published body.

## Source verification

| Claim | Status |
|-------|--------|
| 758 consultants, 18 tasks | VERIFIED — HBS WP 24-013 methodology |
| 12% more tasks completed, 25% faster | VERIFIED — paper reports 12.2% and 25.1% |
| 40% higher quality inside frontier | VERIFIED — headline finding |
| Outside-frontier AI users worse than control | VERIFIED — 19 pp more incorrect answers |
| Centaur / Cyborg working patterns | VERIFIED — qualitative analysis section |
| Pilot Week 5 = Iterate & Inherit, teammate handoff | GROUNDED — `pilot_hub.html` Week 5 section |
| Week 4 = Build Worth Keeping | GROUNDED — `pilot_hub.html` Week 4 section |

## Git operations

- **Pre-run lock cleanup:** No stuck locks at start of run. Post-commit, transient `HEAD.lock` and `objects/*/tmp_obj_*` files appeared (sandbox `Operation not permitted` on unlink is a known constraint); commit succeeded; locks cleared via `mv` to `.stale.<timestamp>` after commit.
- **Commit:** `a9b4d49` — `Publish 2026-05-04 daily briefing: The Jagged Frontier: 40% Quality Lift Came From Iteration (foundational)`
- **Push status:** Failed. `fatal: could not read Username for 'https://github.com'` — no credential helper or SSH deploy key in scheduled-task sandbox. This is the documented constraint in the task file.
- **Patches saved:** `daily_briefing_patches/0001-Publish-2026-05-04-daily-briefing-The-Jagged-Frontie.patch` and mirrored to `daily_briefing/patches/`.

## Action for Preston

Push the local commit `a9b4d49` to `origin/main` via GitHub Desktop or local terminal. The patch is reproducible from a clean clone if the local repo is lost.

## Anomalies

- None of substance. Saturday May 2 and Sunday May 3 have no entries by design (weekend gap consistent with the rotation pattern in prior weeks).
- Two prior `.git/HEAD.lock.stale.*` files exist from earlier runs and are safe to leave or delete at Preston's discretion.

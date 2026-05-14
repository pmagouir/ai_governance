# Daily Briefing Deploy Report — 2026-05-14

## Topic
**Title:** When Trust in AI Goes Up, Verification Goes Down
**Category:** Emerging Trends (Thursday rotation)
**Pilot anchor:** Week 6 — Diligence (Phase 2, Apr 28 – May 16)

## Source
Lee, Sarkar, Tankelevitch, Drosos, Rintel, Banks, Wilson. "The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects from a Survey of Knowledge Workers." CHI 2025, Microsoft Research.

Resource link: https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/

## Audit Findings
- **Word counts:** Body 264 (band 240–280). Try This 49 (band 40–80). Both inside bands. Initial draft landed at 226 words via `str.split()`; expanded paragraph 2 by one sentence and paragraph 4 by one sentence before the final commit (amended).
- **Em-dashes:** 0 (limit ≤2).
- **However / Moreover / Furthermore / Additionally:** 0.
- **Contrastive constructions ("X, not Y"):** 0.
- **Rhetorical questions in body:** 0.
- **Banned vocabulary scan:** clean. No leverage, utilize, delve, navigate, landscape, ecosystem, synergy, robust, holistic, stakeholders, transformative, foster, enhance, align, empower, myriad, deep dive, unpack, etc.
- **Opens declaratively:** "Microsoft Research published a survey of 319 knowledge workers in early 2025..."
- **Closes with operating instruction:** Try This ties survey finding to Week 6 trace artifact.
- **sourceNotes tags:** 5 VERIFIED (paper methodology + central findings), 2 GROUNDED (pilot_hub.html Week 6 + 4D framework), 2 Editorial (pedagogical framing) + adversarial review block.
- **Differentiation:** Distinct from April 30 (Anthropic March 2026 Economic Index), May 7 (McKinsey Superagency), April 23 (BCG/Harvard delegation field study). Different empirical lens — knowledge-worker survey on cognitive offloading.

## Deploy Status
- **JSON validated:** Yes (Python `json.load` round-trip clean before commit).
- **Insertion:** Top of `published[]` in `briefings.json`.
- **Meta updated:** `lastGenerated` and `lastPublished` → `2026-05-14T07:30:00-04:00`.
- **Commit hash:** `1d90f95` (initial `77d80ef` was amended to apply the body-length expansion before push retry)
- **Commit message:** `Publish 2026-05-14 daily briefing: Microsoft Research on AI trust and verification (trends)`
- **Push to origin/main:** FAILED. `fatal: could not read Username for 'https://github.com': No such device or address`. Expected sandbox limitation. No credential helper / SSH deploy key configured.
- **Patch saved:** `daily_briefing_patches/2026-05-14_daily_briefing.patch`. Preston pushes manually via GitHub Desktop.

## Anomalies
- **Pre-run lock sweep:** No stuck `.lock` files detected at start. Pre-run cleanup ran cleanly.
- **Mid-commit warnings:** Several `warning: unable to unlink '.git/objects/...tmp_obj_*': Operation not permitted` and `warning: unable to unlink '/.git/HEAD.lock': Operation not permitted` emitted during commit. The commit landed (verified via `git log`). Leaves a HEAD.lock that the next run's pre-run sweep will mv to `.stale.<ts>`.
- **No prior-day gaps:** Sequence is contiguous May 11 (foundational), May 12 (tips), May 13 (governance), May 14 (trends). Tuesday rotation reassignment from prior session is consistent.

## Path
Repo: `/sessions/happy-admiring-gauss/mnt/BRAIN/projects/ai_governance`

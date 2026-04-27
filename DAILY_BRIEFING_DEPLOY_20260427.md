# Daily Briefing Deploy Report — 2026-04-27

**Run by:** scheduled-task `daily-briefing-ai-pilot` (autonomous)
**Day/slot:** Monday, foundational
**Pilot context:** Week 4 (Discernment, Weeks 4-5 in 4D framework). Phase 2 Cards Day 5 of pilot.

## Today's entry

- **Title:** Discernment: Why Most Human-AI Combinations Underperform
- **Category:** foundational
- **Word count (main body):** 242 (inside 240–280 band)
- **Word count (Try This):** 54 (inside 40–80 band)
- **Resource:** Vaccaro, Almaatouq & Malone, "When combinations of humans and AI are useful: a systematic review and meta-analysis," *Nature Human Behaviour* 8, 2293–2303 (2024). https://www.nature.com/articles/s41562-024-02024-1

## Anchor claims

- 106 studies of human-AI collaboration reviewed across 370 effect sizes — VERIFIED (Nature Human Behaviour 2024 meta-analysis, abstract and methodology)
- On average, the human-AI combination performed worse than the better of the two working alone — VERIFIED (same study, primary pooled finding)
- Decision tasks showed the largest deficits; content creation tasks delivered reliable gains — VERIFIED (same study, task-type subgroup analysis)
- Pilot Week 4 (April 27 – May 3) covers Discernment in the 4D framework — GROUNDED (`pilot_hub.html`, "Weeks 4-5 Discernment" section)
- Week 4 Challenge: share Claude-assisted work with a pilot colleague before Friday and ask whether it sounds like them — GROUNDED (`pilot_hub.html`, Week 4 Challenge card)

## Audit findings

- Em-dashes in body and Try This combined: 0
- Forbidden phrases (full scan: leverage, utilize, delve, navigate, landscape, ecosystem, synergy, robust, holistic, stakeholders, foster, enhance, align, transformative, empower, myriad, multifaceted, pivotal, spearhead, showcase, underscore, doing the heavy lifting, the real question is, what most people miss, this is where it gets interesting): 0 hits
- Contrastive "not X, but Y" constructions: 0 (verified by manual scan; "instead of independently evaluating it" is a single-clause alternative, not the AI-tell pattern)
- Rhetorical questions in body: 0
- Explicit transitions (However, Moreover, Furthermore, Additionally): 0
- TED-talk closes: 0 (final sentence is a concrete declarative tying the meta-analysis to the colleague-feedback challenge)
- "We" count in body: 0 (intentional — addresses participants directly via "your judgment"; matches register used on 2026-04-24 entry)
- Superlatives used as emphasis: 0
- Concrete quantitative anchors: 3 of 4 paragraphs (106 studies, 370 effect sizes, decision-vs-content task split)
- Opens with concrete fact: yes (106 studies in Nature Human Behaviour)

Validation set to PASSED.

## Deploy status

- **Commit:** `8fef91c` — "Publish 2026-04-27 daily briefing: Discernment: Why Most Human-AI Combinations Underperform (foundational)"
- **Push to origin/main:** FAILED (expected sandbox limitation) — `fatal: could not read Username for 'https://github.com': No such device or address`
- **Patch saved:** `daily_briefing_patches/0001-Publish-2026-04-27-daily-briefing-Discernment-Why-Mo.patch` (5,918 bytes)
- **Action required (Preston):** Pull this commit locally and push via GitHub Desktop (same pattern as prior scheduled runs).

## Anomalies / environment

- **Pre-run lock cleanup:** No stale `.lock` files present on entry. Confirmed via `find .git -maxdepth 3 -name "*.lock" ! -name "*.stale*"` returning empty before the work began.
- **Post-commit unlink warnings:** Standard sandbox constraint. `git commit` emitted `Operation not permitted` warnings on `.git/objects/c1/tmp_obj_*`, `.git/objects/8f/tmp_obj_*`, `.git/HEAD.lock`, and `.git/objects/maintenance.lock`. The commit completed and the SHA registered in `git log`. Post-commit cleanup re-ran the rename-to-`.stale` pattern; `find` confirms zero remaining non-stale locks.
- **Working tree:** Clean except for the same `.claude/settings.local.json` untracked file noted in prior reports. Out of scope for the briefing workflow.

## Outstanding anomaly carried forward

The Wednesday 2026-04-22 governance slot remains unfilled. First flagged on 2026-04-23, carried in 2026-04-25 and 2026-04-26 reports. Not back-filling autonomously because the topic should align with the live pilot week's governance focus and Preston should make that call. Flagging again.

## Pilot-week alignment notes

Today's entry intentionally aligns with the Week 4 Challenge in `pilot_hub.html`. The Vaccaro et al. (2024) meta-analysis gives the foundational research basis for why Week 4's peer-review challenge matters: human-AI combinations underperform when reviewer judgment is poorly calibrated, and shared standards built through peer feedback are the calibration mechanism. The Try This action plugs directly into the existing Week 4 Challenge prompt (share with a pilot colleague before Friday) and adds a calibration-specific question.

## Next scheduled publication

Tuesday 2026-04-28, tips slot.

## Sandbox notes

- `mv` lock-cleanup pattern continues to work as documented.
- `git push origin main` continues to fail under the sandbox; OAuth/SSH credentials are not configured. Patch-save fallback is operating as designed.

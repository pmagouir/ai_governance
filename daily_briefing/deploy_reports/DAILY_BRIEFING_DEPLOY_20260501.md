# Daily Briefing Deploy Report — 2026-05-01 (Friday)

## Topic

**Title:** 17% to 33%: When "Hallucination-Free" Tools Still Hallucinate
**Category:** news (Friday rotation slot)
**Resource:** https://arxiv.org/abs/2405.20362

The briefing anchors on the Stanford RegLab + Stanford HAI study (Magesh, Surani, Dahl, Suzgun, Manning, Ho, May 2024) of two AI legal-research products marketed as hallucination-free. Lexis+ AI and Thomson Reuters' AI legal tools hallucinated between 17% and 33% of the time on a benchmark of legal queries with known correct answers. Stanford HAI's blog summarized the result as "1 out of 6 (or more)." The entry frames the finding as the closest public empirical analog to the Discernment competency the pilot is teaching in Week 4: vendor reliability claims do not transfer to a specific task without verification, and a tool that is useful 80% of the time still produces an error rate that, scaled across the work that reaches a scholar or partner, materially harms organizational trust.

## Audit Findings

| Check | Result |
|---|---|
| Body word count | 258 (target 240–280) |
| Try This word count | 59 (target 40–80) |
| Em-dash count | 0 (limit ≤2) |
| Banned vocabulary | 0 hits across full banned list (leverage, utilize, delve, navigate, landscape, ecosystem, synergy, robust, holistic, stakeholders, foster, enhance, align, transformative, empower, spearhead, myriad, multifaceted, nuanced, pivotal, unpack, deep dive, however, moreover, furthermore, additionally, serves as, stands as, represents, functions as, groundbreaking, game-changing, revolutionary, showcase, underscore, passionate about, excited to share) |
| Contrastive negations ("not X, but Y") | 0 ("errors were not edge cases" is a simple negation, not a contrastive) |
| Rhetorical questions in body | 0 |
| Declarative open | Yes ("Stanford's RegLab and Human-Centered AI Institute tested…") |
| Source citations | All five numeric / factual claims VERIFIED via Magesh et al. 2024 (arXiv:2405.20362) and the Stanford HAI summary; Discernment-Week-4 claim GROUNDED in pilot_hub.html and Framework_for_AI_Fluency_v1.5.md |
| Editorial tags | 3 editorial framings flagged in sourceNotes |

## Commit

- **Hash:** 051b2da
- **Message:** `Publish 2026-05-01 daily briefing: 17% to 33% — When 'Hallucination-Free' Tools Still Hallucinate (news)`
- **Files changed:** briefings.json (1 file, 13 insertions, 2 deletions)
- **JSON validation:** Passed (`python3 -c "import json; json.load(open('briefings.json'))"`)

## Push Status

`git push origin main` failed with: `fatal: could not read Username for 'https://github.com': No such device or address`. Sandbox lacks credential helper or SSH deploy key. Commit is local at HEAD. Patch saved to `daily_briefing_patches/0001-Publish-2026-05-01-daily-briefing-17-to-33-When-Hall.patch`. Preston pushes manually via GitHub Desktop.

## Anomalies

- **Stuck git locks:** None present at start of run. Pre-run cleanup script returned empty after the initial pass (verify command produced no output).
- **Post-commit warnings:** Three `unable to unlink` warnings on `.git/objects/*/tmp_obj_*` files and `.git/HEAD.lock` during commit. Commit succeeded despite warnings. Sandbox `rm` restriction on `.git/*` is the underlying cause; warnings are cosmetic and do not affect the commit. Same pattern as the 4-30 deploy.
- **Prior briefing chain:** Mon 4-27 → Tue 4-28 → Wed 4-29 → Thu 4-30 → Fri 5-1 chain intact. No gap. Sat-Sun (5-2 / 5-3) are non-publishing days as usual.
- **Untracked files in working tree:** `.claude/settings.local.json`, `DAILY_BRIEFING_DEPLOY_20260430.md`, and the prior 4-30 patch sit untracked. Today's run did not touch them. They are out of scope for the 5-1 publish action.
- **Week framing:** Today's entry references the "Discernment competency" and "Week 4" without committing to a specific calendar week number. This handles either reading of the pilot calendar (Spring Break 4-13 to 4-17 either counted or not) and stays consistent with the 4-29 governance entry and the 4-30 trends entry, both of which pointed at Week 4.

## Files Touched

- `/sessions/serene-brave-carson/mnt/BRAIN/projects/ai_governance/briefings.json` (entry inserted at top of `published[]`; meta `lastGenerated` and `lastPublished` set to `2026-05-01T07:15:00-04:00`)
- `/sessions/serene-brave-carson/mnt/BRAIN/projects/ai_governance/daily_briefing_patches/0001-Publish-2026-05-01-daily-briefing-17-to-33-When-Hall.patch`
- `/sessions/serene-brave-carson/mnt/BRAIN/projects/ai_governance/DAILY_BRIEFING_DEPLOY_20260501.md` (this report)

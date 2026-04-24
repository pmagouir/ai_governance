# Daily Briefing Deploy Report — 2026-04-24

**Run time:** 2026-04-24 (Friday rotation slot: news/rotating)
**Pilot context:** Week 2 (Delegation), Phase 2 Cards Day 2

## Today's entry

- **Title:** 75% and 78%: Why the Pilot Exists
- **Category:** news
- **Word count (main body):** 247 (inside 240–280 band)
- **Word count (Try This):** 44 (inside 40–80 band)
- **Resource:** Microsoft & LinkedIn 2024 Work Trend Index — "AI at Work Is Here. Now Comes the Hard Part"

## Anchor claims

- 75% of global knowledge workers use AI at work — VERIFIED (Microsoft & LinkedIn, 2024 Work Trend Index, May 8, 2024)
- 78% of AI users bring their own tools (BYOAI) — VERIFIED (same report)
- 31,000 workers surveyed across 31 countries — VERIFIED (same report methodology)
- DC CAP 4-tier data classification, governance pulse, sanctioned Claude workspace — GROUNDED (pilot_hub.html, Framework_for_AI_Fluency_v1.5.md)

## Audit findings

- Em-dashes: 0
- Forbidden phrases: 0 (scanned leverage, utilize, delve, navigate, landscape, ecosystem, synergy, robust, holistic, stakeholders, foster, enhance, align, transformative, empower, myriad, multifaceted, pivotal, spearhead, showcase, underscore)
- Contrastive "not X, but Y" constructions: 0 (the "Either inside... or inside..." line is a parallel enumeration of two concrete options, not a negation)
- Rhetorical questions in body: 0
- TED-talk closes: 0 (final two sentences are short declaratives, consistent with prior PASSED entries)
- "We" count in body: 0 (intentional for this framing; "your" and "staff" hold the collective register, matching the news/framing category)
- "However/Moreover/Furthermore/Additionally": 0
- Superlatives used as emphasis: 0

Validation set to PASSED.

## Deploy status

- **Commit:** `ce265cb` — "Publish 2026-04-24 daily briefing: 75% and 78%: Why the Pilot Exists (news)"
- **Push to origin/main:** FAILED (expected) — `fatal: could not read Username for 'https://github.com': No such device or address`
- **Patch saved:** `daily_briefing_patches/0001-Publish-2026-04-24-daily-briefing-75-and-78-Why-the-.patch` (6,656 bytes)
- **Action required (Preston):** Pull this commit locally and push via GitHub Desktop (same pattern as prior scheduled runs).

## Anomalies / environment

- Pre-run lock cleanup: no stale locks found on entry.
- Post-commit unlink warnings on `.git/HEAD.lock`, `.git/objects/maintenance.lock`, and three `.git/objects/*/tmp_obj_*` files — standard sandbox constraint where `rm` is denied on `.git/*`. Commit wrote successfully despite the warnings. Post-commit rename-to-`.stale` cleanup ran; `find` confirms no remaining non-stale locks.
- Gap check: the last published entry was 2026-04-23 (Thursday, trends). No Wednesday 2026-04-22 (governance) entry is present in `published[]`; prior runs have skipped governance days before. Not remediating as part of this run — flagging only.

## Meta updated

- `meta.lastGenerated`: 2026-04-24T07:00:00-04:00
- `meta.lastPublished`: 2026-04-24T07:00:00-04:00
- `published[]` length: 13 (was 12)

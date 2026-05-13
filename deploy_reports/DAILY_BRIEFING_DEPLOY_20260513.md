# Daily Briefing Deploy — 2026-05-13

## Topic (final)
- Category: governance (Wednesday rotation slot)
- Title: "Model Selection Is a Governance Decision"
- Pilot anchor: Week 5 "Under the Hood" — Governance Pulse callout "Model Selection IS a Governance Decision"; Q5 model picker (Opus 4.6 careful / Sonnet 4.6 balanced / Haiku 4.5 fast); the explicit DC CAP model-routing examples (counselor email → Sonnet, Gates LOI → Opus, 10-page PDF → Haiku or Sonnet, board memo voice scan → Sonnet with extended thinking on).

## Course correction
- First commit (`392ed96`) drafted against Week 6 Diligence content (Output Trace, Transparency Diligence). That section is currently hidden in `pilot_hub.html` (the Week 6-7 block has `display:none`), so the briefing was running ahead of where pilot participants are.
- Active pilot week is Week 5, which was recently reworked into a basics-on-the-mechanics block: context window, context, memory, model drift, model selection, hallucination, verify/validate, prompts. Wednesday's governance slot has an exact-match Governance Pulse in that block on model selection.
- Replacement commit (`6c65e9c`) anchors the briefing to the current Week 5 material.

## Audit findings (replacement entry)
- Content word count: 251 (target 240–280) — PASS
- Try This word count: 61 (target 40–80) — PASS
- Em-dashes total: 0 (cap 2) — PASS
- Banned vocabulary: none detected
- Contrastive negation scan: clean
- Declarative opening: "Week 5 of the AI governance pilot names a mechanic that early users rarely treat as policy…" — PASS
- Source verification: 8 GROUNDED claims against pilot_hub.html (Week 5 Governance Pulse and Q5 model cards, all verbatim where quoted) and 1 Editorial claim covering the downstream consequence of pinning a model inside a Skill.
- JSON validation: PASS

## Commits
- Superseded: `392ed96` — "Publish 2026-05-13 daily briefing: output trace as transparency-diligence audit (governance)" (Week 6 Diligence anchor; off-week)
- Replacement: `6c65e9c` — "Replace 2026-05-13 daily briefing: anchor to Week 5 Governance Pulse on model selection (governance)"

Both commits sit on local `main`. The replacement commit is the head; `git log` shows it directly on top of the superseded commit.

## Push status
- Both push attempts failed with `fatal: could not read Username for 'https://github.com'` — expected sandbox constraint (no credential helper).
- Patches saved:
  - `daily_briefing_patches/0001-Publish-2026-05-13-daily-briefing-output-trace-as-tr.patch` (superseded; kept for audit trail)
  - `daily_briefing_patches/0001-Replace-2026-05-13-daily-briefing-anchor-to-Week-5-G.patch` (the one to apply when pushing manually)
- Manual action for Preston: push both commits via GitHub Desktop in order, or push just `6c65e9c` since it contains the final corrected file state.

## Anomalies
- Mid-session git lock reappeared after the first commit (`HEAD.lock` "Operation not permitted" sandbox warning, then a second commit attempt hit `Another git process seems to be running`). Resolved by running the same `mv → .stale.<timestamp>` sweep used in pre-run. Second commit attempt succeeded.
- No publication gaps remain. Wednesday governance slot is filled.

## Validation status in JSON
- Top entry: `validationStatus: PASSED`, `status: published`, dated 2026-05-13.
- `meta.lastGenerated` and `meta.lastPublished` updated to `2026-05-13T09:25:00-04:00` on the replacement commit.

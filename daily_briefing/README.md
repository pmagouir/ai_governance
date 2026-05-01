# daily_briefing/

Operational artifacts for the daily AI governance briefing pipeline. The live data file (`briefings.json`) stays at the project root because the deployed site reads it from there.

## Layout

```
daily_briefing/
├── deploy_reports/   DAILY_BRIEFING_DEPLOY_YYYYMMDD.md, one per run
└── patches/          0001-Publish-YYYY-MM-DD-...patch, format-patch output for manual GitHub Desktop pushes
```

## Where new files should land

| Artifact | Path |
|---|---|
| Today's deploy report | `daily_briefing/deploy_reports/DAILY_BRIEFING_DEPLOY_YYYYMMDD.md` |
| Today's patch | `daily_briefing/patches/0001-Publish-YYYY-MM-DD-<slug>.patch` |
| Live JSON data | `briefings.json` (project root, do not move) |

## SKILL.md update needed

The scheduled-task SKILL at `.scheduled/daily-briefing-ai-pilot/SKILL.md` and `uploads/SKILL.md` still references the legacy paths:

- old: `DAILY_BRIEFING_DEPLOY_YYYYMMDD.md` at root
- old: `daily_briefing_patches/`

When Preston refreshes that skill, update those two path references to the new locations above. Until then, future scheduled runs will write to the old locations and need a manual move into this folder. The cleanup commit on 2026-05-01 establishes the new layout for everything published through that date.

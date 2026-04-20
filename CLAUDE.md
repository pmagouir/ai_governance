# CLAUDE.md

Project notes for Claude Code working in this repo.

## Project
DC CAP Enterprise AI Leadership Pilot site (`dccapinnovation.org`). Live site serves from `main`. GitHub Pages rebuilds automatically on push.

## Skills Preston uses
These live on Preston's local Desktop at `~/Desktop/BRAIN/skills/` and are **not mounted in the sandboxed Claude Code environment**. If you need to apply one of these, ask Preston to paste the relevant guidance inline, or copy the skill file into this repo.

- **Preston writing skill** — Preston's personal voice/style filter. Apply to any copy that will appear on the site or in DC CAP materials.
- Other skills Preston has authored in `BRAIN/skills/` — ask before assuming availability.

## Skills available in-repo
- `dccap-brand.md` — DC CAP Scholars brand system. Voice and tone guidance in the "Voice and Tone" section (confident, empowering, D.C.-rooted, academic/credible, accessible). **Consult before writing any customer-facing copy.**
- `ai-governance-site-qa.skill` — zipped site QA skill (binary `.skill` archive). Contents not directly readable without unzip.
- `frontend-slides.skill` — zipped skill for slide decks.

## Writing standards
- No AI tell-tale words: unlock, leverage, seamless, robust, tapestry, journey, elevate, streamline, optimize, holistic, delve, foster, vibrant, navigate, empower, utilize, realm, landscape, pivotal, paramount, cutting-edge, synergy, ecosystem.
- Short, active, direct sentences. Make claims.
- Ground copy in real DC CAP context (named funders, units, dates, metrics) rather than generic examples.
- For leader-audience copy (pilot site, board materials): strategic, concise, data-grounded.

## Git workflow
- Feature branches: `claude/<slug>` off `main`.
- Fast-forward merge into `main` when shipping to live site. Push to `origin main` — GitHub Pages auto-deploys.
- Do not open PRs unless Preston explicitly asks.
- Sandbox blocks remote branch deletion (`git push --delete` returns 403). Delete unused branches via GitHub UI.

## Key files
- `pilot_hub.html` — the main pilot site. Largest file; week-by-week resource map is the primary content area.
- `start_here.html` — quick-reference onboarding page.
- `ai_fluency_framework.html` — the 4D framework (Delegation, Description, Discernment, Diligence).
- `ai_governance_framework.html` — data classification tiers.
- `briefings.json` — daily briefing drafts and published archive.
- `capstone_template.html` — capstone project template.

## Current pilot timeline (April 2026)
- **Week 1:** Foundation (asynchronous onboarding)
- **Week 2 (4/20–4/24):** Delegation — Automation and Augmentation. AI Fridays begin.
- **Weeks 3:** Description
- **Weeks 4–5:** Discernment + Identify and Design (capstone design starts)
- **Weeks 6–7:** Diligence + Peer Review
- **Week 8:** Capstone Ship It

## Three Horizons leadership framing
Preston wants the pilot to inculcate horizon thinking:
- **H1 — Personal gain:** Faster, better drafts for work on your own plate.
- **H2 — Team gain:** Patterns your team inherits (Project, workflow, shared move).
- **H3 — Enterprise gain:** Moves that scale across DC CAP and become how we operate.

Week 2 is H1 by design; H2 arrives at capstone design in Weeks 4–5; H3 is the capstone itself.

## AI Fridays
Optional, highly encouraged. "We are stronger when learning together." Do not frame as mandatory attendance.

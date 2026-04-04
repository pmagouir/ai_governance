# DC CAP AI Governance & Leadership Pilot

DC CAP launched its 60-day Enterprise AI Leadership Pilot on April 6, 2026. This repository contains every governance policy, training deliverable, interactive tool, and analytics pipeline that powers the initiative. Nine senior leaders across six functional units are building AI fluency through structured activities, governance-first sequencing, and a capstone module they own from design through delivery.

The pilot site is live at **https://pmagouir.github.io/ai_governance/**

---

## What This Repository Does

The repo serves two functions. First, it hosts DC CAP's AI governance infrastructure: the data classification framework, acceptable use policies, and incident response protocols that set the rules for responsible Claude Enterprise use. Second, it delivers a full interactive onboarding experience through GitHub Pages, with self-contained HTML pages covering everything from kickoff through capstone.

All HTML files embed DC CAP brand fonts, base64 logos, and inline CSS/JS. No build step, no server, no external dependencies beyond Google Fonts CDN.

---

## Repository Map

### Governance & Policy

| File | Purpose |
|------|---------|
| `DCCAP_AI_Data_Governance_Framework_v1.docx` | Formal governance framework record (v1, February 2026) |
| `ai_governance_framework.html` | Interactive web version with sticky nav, color-coded data tiers, 10 governance sections |
| `UserGuide_Claude_DCCAP_V1_20260313.docx` | Staff user guide for Claude Enterprise (Chat, Projects, Cowork, Skills, Connectors) |
| `Framework_for_AI_Fluency_v1.5.md` | Full academic AI Fluency framework (Dakan & Feller, 2025) with DC CAP application notes |
| `AI_Fluency_Key_Terminology.md` | 4D competencies, three modalities, prompt engineering vocabulary reference |

### Pilot Hub & Onboarding Site

| File | Purpose |
|------|---------|
| `index.html` | Auto-redirect to pilot_hub.html |
| `pilot_hub.html` | Main entry point with interactive timeline, prerequisite flow, daily briefing, leadership accountability section |
| `start_here.html` | 7-tab operational reference (Interfaces, Collaboration, Files, Skills, Governance, Glossary, Principles) |
| `ai_fluency_prelaunch_survey.html` | Pre/post assessment instrument with auto-scoring, radar chart, and JSON export (5 constructs, 0-100 scale) |
| `kickoff_deck.html` | Kickoff presentation deck |
| `phase1_activity_guide.html` | 4 structured activities for Phase 1, mission-first framing anchored to scholar trust |
| `activity_cards.html` | Phase 2 activity cards (gated until Week 4) |
| `capstone_template.html` | Phase 3 capstone with self-assessment rubric |
| `data_tier_practice.html` | Interactive drag-and-drop data classification game (12 slides, 10 scenarios, score tracking) |
| `ai_glossary.html` | Plain-English glossary with completion tracking |
| `kpi_framework.html` | Pilot KPI framework |
| `weekly_checkin.html` | 30-second weekly pulse check-in (5 questions, auto-detects pilot week, submits to Google Sheets) |
| `session_facilitation_guide.html` | Opening ritual protocol, 3-phase session structure, Failure Wall guidelines, 8-week facilitation checklist |

### Analytics & Reporting Pipeline

| File | Location | Purpose |
|------|----------|---------|
| `pilot_analytics.R` | `_internal/` | R tidyverse analysis script for pilot data |
| `generate_pilot_report.py` | `_internal/` | Automated PPTX generation from pilot data |
| `pilot_baseline_report.pptx` | `_internal/` | Baseline report (generated from test data) |
| `pilot_analytics_dashboard.html` | `_internal/` | Interactive analytics dashboard with 7 visualizations |
| `google_apps_script.js` | `_internal/` | Reference copy of the Google Sheets Apps Script endpoint |

### Internal Reference

The `_internal/` directory contains working documents, alignment audits, and analytics infrastructure. GitHub Pages does not serve this directory (Jekyll convention). Files here support the build process and internal planning.

---

## Conceptual Architecture

### The 4D Competency Framework

DC CAP's AI fluency model is built on four competencies mapped to three interaction modalities:

**Competencies:** Delegation (Navy), Description (Purple), Discernment (Blue), Diligence (Gold)

**Modality mapping:** Automation draws on Delegation and Diligence. Augmentation draws on Description and Discernment. Agency requires all four.

### Four-Tier Data Classification

All staff classify data before uploading to Claude. When in doubt, treat data as one tier more restrictive.

| Tier | Type | Claude Access |
|------|------|--------------|
| Tier 1 | Individual PII, FERPA data, SSNs, financial aid details | Prohibited |
| Tier 2 | Budget data, staff evaluations, partner confidential, small-cell aggregates (N<10) | Restricted, role-specific only |
| Tier 3 | Strategy docs, grant narratives, program models, de-identified aggregates | Open to all licensed users |
| Tier 4 | Published materials, public data | Unrestricted |

### Prerequisite Sequence

Participants complete three steps before receiving Claude Enterprise access:

1. Start Here Guide + Governance Framework (~30 min)
2. AI Fluency Pre-Launch Assessment (~8 min)
3. AI Fluency for Nonprofits Course (~1 hour)

Total estimated time: ~1.5 hours.

---

## Data Pipeline

Participant interactions flow from HTML pages to a Google Sheets backend via Apps Script. Two tabs capture distinct data:

**survey_responses** stores one row per participant survey submission, including name, unit, five construct scores, overall percentage, fluency level, and full JSON payload.

**milestones** stores one row per milestone event, with built-in deduplication by participant and milestone name.

The R analytics script and Python PPTX generator consume CSV exports from this sheet. Replace test CSVs with real data exports and re-run pipelines to produce updated dashboards and reports.

---

## Design System

**Brand palette:** Navy (#101A4C), Purple (#8352FF), Blue (#87B7D5), Gold (#FCB017), Tan (#FFF4ED), Error Red (#E63946)

**Font stack:** Akkordeon (display, Noto Serif SemiCondensed fallback), Noto Serif (body), Noto Serif SemiCondensed (subheads), JetBrains Mono (code)

**Visual patterns:** Gradient mesh backgrounds with SVG fractal noise overlay, frosted glass navigation with backdrop-filter blur, scroll-triggered reveal animations via IntersectionObserver, animated counters with ease-out cubic, CSS clamp() responsive sizing, prefers-reduced-motion accessibility support, 44px minimum tap targets.

**Three page architecture types:** Scrollable (pilot_hub, phase1_activity_guide, capstone_template, ai_governance_framework), Tab-based (start_here), and Presentation (kickoff_deck, data_tier_practice).

---

## Interactive Visualizations

Six custom visualizations across the site:

**pilot_hub.html** includes an animated pilot timeline with "You are here" marker, a 4D Competency Wheel with click-to-expand definitions, and a prerequisite flow diagram with checkbox persistence and celebration state.

**start_here.html** features governance responsibility circles showing concentric ownership layers.

**activity_cards.html** contains a 3A Modality Matrix with human-AI balance bars (80/20, 50/50, 20/80).

**capstone_template.html** provides a self-assessment rubric scaled from Still Exploring (1) to Leading Practice (5).

---

## Governance Contacts

| Role | Owner |
|------|-------|
| AI Governance Lead & Co-Owner | Preston Magouirk, CSAO |
| AI Governance Co-Owner | Angela Cammack, COO |
| Executive Sponsor | Eric Waldo, CEO |
| Student Success Lead | Stephanie Gardner |
| Communications Lead | Alexander Vassiliadis |
| Development Co-Leads | Sashia Moore, Candice Thomas |

Report Tier 1 data incidents to the AI Governance Lead within 2 hours. See Section 7 of the Governance Framework for the full incident response protocol.

---

## Deployment

**Hosting:** GitHub Pages, deployed from main branch at root (`/`)

**Workflow:** Edit files locally or in Cowork, commit and push via GitHub Desktop, live in ~30 seconds.

**Daily Briefing:** A scheduled task (`ai-pilot-daily-briefing`) runs weekdays at 7:05am ET, rotating through five content categories: Prompt of the Week (Mon), 4D Spotlight (Tue), Tool Tip (Wed), AI in the Sector (Thu), Claude Update (Fri).

---

## Update Cadence

**Monthly:** AI Governance Lead reviews audit logs and user feedback.

**Quarterly:** Leadership governance review covering classification decisions, policy updates, and phase progression.

**Annually:** Full framework revision and board briefing on AI adoption outcomes.

---

*Maintained by the DC CAP Innovation Hub. Last updated April 2026.*

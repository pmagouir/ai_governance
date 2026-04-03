# ai_governance

This folder contains DC CAP's enterprise AI governance infrastructure — the policies, frameworks, reference materials, and staff guidance that govern how the organization adopts and uses Claude Enterprise responsibly.

The folder supports DC CAP's Innovation Hub and is maintained by the Chief Strategy and Analytics Officer. It is the authoritative source for AI governance at DC CAP and the primary context loaded into Claude Projects related to AI strategy, staff training, and enterprise rollout.

---

## Purpose

DC CAP's enterprise AI adoption is built on a clear premise: AI delivers value in direct proportion to the organizational context it can access, and governance exists to structure that access responsibly. This folder encodes that governance — the rules, frameworks, and training materials that allow every staff member to work at the frontier of AI capability while protecting the scholars, families, and partners we serve.

The initiative is organized around three adoption priorities:

1. **AI Fluency** — Building the organizational competencies (the 4Ds: Delegation, Description, Discernment, Diligence) needed to use AI effectively across all three interaction modalities (Automation, Augmentation, Agency).
2. **Responsible Governance** — Establishing data classification standards, acceptable use policies, incident response protocols, and role-based access controls that exceed FERPA and GEAR UP compliance requirements.
3. **Operational Integration** — Deploying Claude Enterprise with Skills, Connectors, and shared Projects that embed organizational context into every workflow.

---

## Folder Contents

| File | Description | Status |
|------|-------------|--------|
| `DCCAP_AI_Data_Governance_Framework_v1.docx` | Original governance framework document | v1, February 2026 |
| `DCCAP_AI_Data_Governance_Framework_v1.md` | Editable markdown version of the governance framework | Living document |
| `UserGuide_Claude_DCCAP_V1_20260313.docx` | Original staff user guide | v1, March 2026 |
| `UserGuide_Claude_DCCAP_V1.md` | Editable markdown version of the staff user guide | Living document |
| `AI_Fluency_Key_Terminology.md` | Anthropic's AI Fluency terminology cheat sheet (synthesized) | Reference |
| `Framework_for_AI_Fluency_v1.5.md` | Full academic AI Fluency framework with DC CAP application notes | Reference + Training |
| `README.md` | This file | — |

### Key Documents

**`DCCAP_AI_Data_Governance_Framework_v1.md`** — The governing policy document for DC CAP's Claude Enterprise deployment. Covers the four-tier data classification system (Restricted through Public), three-phase adoption plan, security configuration, roles and responsibilities, acceptable use policy, incident response protocol, and governance review cycle. All staff must read this before receiving platform access.

**`UserGuide_Claude_DCCAP_V1.md`** — The practical how-to guide for every DC CAP staff member with a Claude Enterprise seat. Covers Chat, Projects, Cowork, Skills, Connectors, the collaboration workflow with SharePoint, and prompting best practices.

**`AI_Fluency_Key_Terminology.md`** — Synthesized reference from Anthropic's AI Fluency Cheat Sheet. Defines the 4Ds, the three interaction modalities (Automation, Augmentation, Agency), AI technical concepts, and prompt engineering vocabulary. Use this to onboard new staff or build shared language across teams.

**`Framework_for_AI_Fluency_v1.5.md`** — The full academic framework by Dakan & Feller (2025) with DC CAP-specific application notes. Provides the theoretical grounding for the 4Ds and the three modalities, with detailed sub-competencies and examples mapped to DC CAP workflows.

---

## Data Classification Quick Reference

All staff must classify data before uploading to Claude. When in doubt, treat data as one tier more restricted than you think.

| Tier | Type | Claude Access |
|------|------|--------------|
| **Tier 1** | Individual PII, FERPA data, SSNs, financial aid details | **PROHIBITED** |
| **Tier 2** | Budget data, staff evaluations, partner confidential, small-cell aggregates (N<10) | Restricted — role-specific only |
| **Tier 3** | Strategy docs, grant narratives, program models, de-identified aggregates | Open to all licensed users |
| **Tier 4** | Published materials, public data | Unrestricted |

Full classification rules: see `DCCAP_AI_Data_Governance_Framework_v1.md`, Section 2.

---

## Governance Contacts

| Role | Owner |
|------|-------|
| AI Governance Lead | Preston Magouirk, CSAO |
| AI Governance Co-Owner | Angela Cammack, COO |
| Executive Sponsor | Eric Waldo, CEO |

Report Tier 1 data incidents to the AI Governance Lead within 2 hours. See Section 7 of the Governance Framework for the full incident response protocol.

---

## Update Cadence

- **Monthly:** AI Governance Lead reviews audit logs and user feedback.
- **Quarterly:** Leadership governance review — classification decisions, policy updates, phase progression.
- **Annually:** Full framework revision, board briefing on AI adoption outcomes.

When updating core documents, edit the `.md` version first, then update the `.docx` to match. The `.md` version is the working document; the `.docx` is the formal record.

---

## Related Folders

- `../evidence_base/` — DC CAP outcome data, benchmarks, and approved statistics
- `../mission_strategy/` — Strategic plan, OKR frameworks, and program models
- `../../.claude/skills/` — All active Cowork Skills for DC CAP workflows

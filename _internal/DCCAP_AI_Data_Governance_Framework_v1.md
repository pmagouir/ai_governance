# AI Data Governance Framework
## Claude Enterprise Adoption & Data Security
**DC College Access Program (DC CAP Scholars)**
v1 | February 2026 | Prepared by: PLM/AMC

> **INTERNAL USE ONLY — FOR LEADERSHIP REVIEW**

---

> **Guiding Principle**
> Enterprise AI delivers value in direct proportion to the organizational context it can access. Governance exists to structure that access responsibly, allowing teams to work at the frontier of what the technology enables while maintaining strict protections for the people we serve.

---

## Executive Summary

This framework establishes the governance structure, data classification standards, and operational protocols for DC CAP Scholars to adopt Anthropic's Claude Enterprise AI platform. The framework balances two priorities: maximizing the platform's strategic value by connecting it to organizational data, and protecting the personally identifiable information (PII) of the scholars, families, partners, and employees we serve.

Claude Enterprise provides the security architecture required for responsible adoption. Anthropic does not use Enterprise customer inputs or outputs to train its models. The platform includes single sign-on (SSO) integration, audit logging, custom data retention controls, and role-based access management. These protections are comparable to the enterprise platforms DC CAP already operates, including Salesforce Education Cloud and Microsoft 365.

This document recommends a phased adoption approach that begins with a leadership pilot cohort using low-sensitivity organizational data, then expands access and data integration as the team builds fluency and governance matures. The framework is designed to be a living document, updated iteratively as real usage patterns inform policy refinements.

---

## 1. Strategic Rationale for Enterprise AI Adoption

DC CAP Scholars operates a comprehensive student success model that combines financial aid, intensive coaching, and university partnerships to serve over 800 scholars annually. The organization's strategic priorities require increased capacity across grant writing, program evaluation, partnership analysis, strategic communications, operational efficiency, and data-informed decision-making. At the same time, emerging AI capabilities require that users add relevant technology orchestration skills to remain both effective in their current roles and competitive across their careers.

Claude Enterprise addresses these needs by providing a secure platform where staff can work with organizational knowledge in a more secure environment. Several features are particularly relevant to DC CAP's operating context:

- **Projects:** Persistent workspaces loaded with organizational documents (grant narratives, program models, strategic plans, data dictionaries) that Claude can reference across conversations.
- **Skills:** Repeated tasks should not, but often do, require new context and orientation. Building skills in Claude ensures best practices are captured so they can be replicated and made more efficient.
- **Connectors:** Direct integrations with Microsoft 365, and nonprofit-specific platforms (Blackbaud Raiser's Edge, for example) that allow Claude to access specific information without individual manual uploads.
- **Custom Retention:** Organization-controlled policies for how long conversation data is stored, with a minimum of 30 days and full audit logging.
- **Nonprofit Pricing:** Qualifying 501(c)(3) organizations receive a 75% discount on this platform, making it less expensive to purchase as an organization than allow each staff member to purchase a comparable subscription individually ($10/per seat/per month vs. $20 in individual plans).

---

## 2. Data Classification Framework

The following classification system governs what organizational data can be used with Claude Enterprise, under what conditions, and by whom. All DC CAP data falls into one of four tiers.

| Tier | Description | Examples | Claude Access |
|------|-------------|----------|---------------|
| **Tier 1 — Restricted** | Individual PII, FERPA-protected data, SSN, financial aid details. Protected by FERPA, GEAR UP regulations, and organizational policy. | Scholar names + academic records, SSNs, financial aid details linked to individuals, health/disability information, family income data, Employee PII (social security, withholding, salary, evaluation, bank account information, benefits information), organizational financial and security information (including banking account numbers and platform logins), partner financial information | **PROHIBITED** — Never upload to Claude in any form. No exceptions without legal review and explicit board authorization. |
| **Tier 2 — Sensitive** | Internal financial records, embargoed data, staff performance data, partner-shared confidential information, and small-cell aggregates (N<10) that could enable re-identification. | Budget models, Investment Portfolio allocations, disbursement totals, embargoed research or reports, staff evaluation summaries, partner MOU terms, aggregate student data with cell sizes below 10, aggregated HR/employee data where it is not possible to identify individuals | **RESTRICTED ACCESS** — Role-specific access with least access default as the norm. Requires de-identification verification before upload. 30-day retention. |
| **Tier 3 — Internal** | Organizational knowledge, program documentation, draft strategies, operational content, and de-identified aggregated outcomes and demographics. Does not contain PII or confidential partner data. | Strategic plans, draft strategic analyses, grant narratives, program models, data dictionaries, process documentation, meeting templates, OKR frameworks, training materials, aggregated retention/graduation rates, demographic distributions (percentages) | **OPEN ACCESS** — All licensed users within DC CAP. Upload to shared Projects. Standard retention policy. |
| **Tier 4 — Public** | Published materials, public-facing content, and externally available research or data. | Annual reports, website content, published research, press releases, public data sets (IPEDS, NSC aggregates, Census) | **UNRESTRICTED** — All users. Standard retention. |

> **Aggregation Guidance**
> Aggregated outcomes (retention rates, graduation rates) and demographics (percentages, distributions) are Tier 3 when fully de-identified. If cell size is below 10 and could enable re-identification, treat as Tier 2.

> **FERPA & GEAR UP Compliance Note**
> DC CAP operates under FERPA protections for scholar educational records and GEAR UP federal grant data requirements. Tier 1 restrictions are designed to exceed these requirements. Any future consideration of using individual-level data with AI tools would require a formal Data Protection Impact Assessment (DPIA), legal counsel review, and board approval.

---

## 3. Phased Adoption Plan

Adoption follows three phases designed to build organizational fluency, refine governance based on real usage, and expand access as trust and competency mature. This resembles the phased infrastructure approach DC CAP applied to Salesforce Education Cloud deployment.

### Phase 1: Leadership Pilot (Months 1–2)

**Objective:** Build leadership fluency and validate governance protocols with low-risk data.

| Element | Details |
|---------|---------|
| **Users** | 10 seats: CEO, COO, Director of Strategic Partnerships and Student Success, GEAR UP Director, Director of Communications, Director of Development Operations, Director of Foundation Relations, Manager of Executive Operations, Data Lead, Development Co-Lead |
| **Data Access** | All tiers with role dependencies employed. Organizational knowledge, program models, grant language, strategic documents, and public data. |
| **Key Activities** | Design project infrastructure, identifying skill needs, identifying and adding connectors, building shared organizational context, and loading shared Projects with program documentation, past grant narratives, strategic plan, OKR frameworks, and data dictionaries. Use Claude for drafting, analysis, and strategic thinking. Generate ideas for practical, innovative use case scenarios. |
| **Governance Actions** | Configure SSO, set 90-day data retention, establish role-based permissions, enable audit logging. Document usage patterns and refine classification decisions. |
| **Success Metrics** | User adoption rate, tasks completed, time savings reported, zero Tier 1 or Tier 2 data incidents, governance framework updated based on real usage. Development and prioritization of use cases for each functional area with an emphasis on innovative use and practical application. |

### Phase 2: Team Expansion (Months 3–5)

**Objective:** Extend access to coaching and operations teams. Introduce Tier 2 data access for authorized users. Integrate Microsoft 365 connector.

- Develop training materials and protocols to 'train the trainer,' where all leadership power users will exit Phase 2 trained sufficiently to lead their respective teams in Phase 3.
- Enable Microsoft 365 connector for document access within Claude.
- Authorize Tier 2 aggregate data access for leadership team with de-identification verification protocols.
- Develop team-specific Projects loaded with role-relevant knowledge (coaching playbooks, partner evaluation frameworks, GEAR UP documentation).
- Conduct structured training sessions and document emerging best practices for an internal AI use guide.
- Reduce data retention to 60 days based on Phase 1 learnings. Review audit logs monthly. In the event of disclosure emergency, data can be removed immediately.
- Require five-course progression completion in Claude Academy from all team members by end of term.

### Phase 3: Full Integration (Months 6–12)

**Objective:** Organization-wide deployment with mature governance.

- Deploy to all staff with role-appropriate access permissions.
- Evaluate and deploy additional connectors (Candid for funder research, Salesforce if available).
- Integrate Claude workflows into standard operating procedures for grant writing, program reporting, and partnership analysis.
- Establish quarterly governance review cycle with audit log analysis, policy updates, and compliance verification.
- Connect AI governance to broader organizational data governance under the existing GEAR UP data policy framework.

---

## 4. Security & Compliance Configuration

The following security settings were configured at contract activation and will be reviewed quarterly.

| Setting | Configuration | Rationale |
|---------|---------------|-----------|
| **Model Training** | Disabled (Enterprise default) | DC CAP data will never be used to train Anthropic models. |
| **SSO Integration** | Enabled via Microsoft Entra ID | Aligns with existing Microsoft 365 identity management. Centralizes access control. |
| **Data Retention** | 90 days (Phase 1), reduce to 60 days (Phase 2+) | Balances utility of persistent conversations with data minimization principles. |
| **SCIM Provisioning** | Enabled | Automated user lifecycle management aligned with HR onboarding/offboarding. |
| **Audit Logging** | Enabled, reviewed monthly | Provides visibility into platform usage. Supports compliance documentation. DOES NOT reveal information about specific conversations. |
| **Role-Based Access** | Tiered by data classification level | Ensures staff access only the data tiers authorized for their role. |
| **Domain Capture** | Enabled for @dccap.org domain | Ensures all staff accounts route through organizational SSO. Prevents shadow IT. |

---

## 5. Roles & Responsibilities

| Role | Responsibility | Named Individual(s) |
|------|---------------|---------------------|
| **AI Governance Lead & Co-Owner** | Owns this framework. Manages platform configuration, conducts audit reviews, approves Tier 2 data access, leads quarterly governance reviews. Shares governance ownership with the AI Governance Co-Owner. | Preston Magouirk, CSAO |
| **AI Governance Co-Owner** | Co-owns platform governance and operations. Manages SSO/SCIM integration, coordinates with IT vendors, supports user onboarding and technical troubleshooting. Holds full platform operational authority by end of Phase 1. Participates in governance reviews and policy decisions alongside the AI Governance Lead. | Angela Cammack, COO |
| **Executive Sponsor** | Authorizes policy changes, approves budget, escalation point for governance decisions requiring organizational authority. | Eric Waldo, CEO |
| **Student Success Lead** | Champions adoption within coaching teams, identifies high-value use cases, ensures Tier 1 data protections are maintained in daily workflows. | Stephanie Gardner, Director of Strategic Partnerships and Program Strategy |
| **Communications Lead** | Ensures all Claude-assisted external communications, donor materials, and public-facing content receive staff review before distribution. Maintains brand voice standards in AI-assisted drafting workflows. Advises on Tier 2 data use in storytelling and impact reporting. | Alexander Vassiliadis, Director of Communications |
| **GEAR UP Compliance Lead** | Ensures GEAR UP data compliance requirements are maintained in AI workflows. Consulted on Tier 2 boundary decisions involving federal grant data. Advises on aggregation thresholds for GEAR UP reporting. | Danielle Walker, GEAR UP Director |
| **Development Co-Leads** | Champions adoption within fundraising and donor relations workflows. Identifies high-value use cases for grant writing, prospect research, and donor communications. Ensures development data (donor PII, gift amounts) follows Tier 2 protections. Lead Blackbaud connector adoption and implementation. | Sashia Moore, Director of Development Operations; Anna Hartge, Development Co-Lead |
| **Data Lead** | Supports data infrastructure, analytics workflows, and Salesforce data integration within AI-assisted processes. Ensures data quality standards and Tier 2 protections are maintained in analytical outputs. | Anthony Little, Data Lead |
| **Operations Content Lead** | Curates and organizes HR, finance, and operations documentation for ingestion into Claude Projects. Classifies content per data tier framework before upload. Ensures Tier 1 and Tier 2 materials are filtered appropriately and that only authorized content enters shared knowledge bases. | Andre Mendes, Executive Operations Manager |
| **All Licensed Users** | Complete AI onboarding training, follow data classification protocols, report any incidents or concerns to the AI Governance Lead. | All staff with Enterprise seats |

---

## 6. Acceptable Use Policy

All Claude Enterprise users at DC CAP must adhere to the following guidelines. These will be covered in onboarding training and acknowledged in writing by each user before receiving platform access. Across these use cases, it is important to keep in mind that all Claude-generated errors are the responsibility of the user. It is critical to always embed personal review and expertise — otherwise called 'human in the loop' best practices — into your AI workflows.

### 6.1 Required Practices

- Verify the data tier classification of any information before uploading or referencing it in Claude conversations.
- Use shared organizational Projects for team knowledge rather than duplicating documents across individual accounts.
- Review Claude outputs for accuracy before incorporating them into external communications, grant submissions, or reports. Claude is a drafting and analysis accelerant. Staff remain accountable for the quality and accuracy of all work product.
- Report any accidental upload of Tier 1 data to the AI Governance Lead immediately. The incident response protocol (Section 7) applies.
- Separate personal projects and chats from DC CAP projects. Every employee is expected to keep personal projects, build team projects, share projects with others, and separate them appropriately.

### 6.2 Prohibited Uses

- Uploading or referencing any Tier 1 (Restricted) data, including scholar names linked to academic records, financial details, or family information.
- Using Claude to make automated decisions about scholar eligibility, placement, or support level without human review and approval.
- Using Claude to make automated outreach, hiring, dismissal, evaluation, and other decisions without human review and approval.
- Sharing Claude-generated content externally without staff review and attribution. All external communications remain staff-authored; Claude is a tool in the drafting process.

---

## 7. Incident Response Protocol

If Tier 1 data is accidentally uploaded to Claude or a potential data breach is identified, the following protocol applies:

1. **Immediate Containment:** The user who identified the incident deletes the conversation containing the data immediately. Claude's custom retention policy will process the deletion, but manual deletion accelerates removal.
2. **Notification:** Notify the AI Governance Lead (Preston Magouirk) within 2 hours of discovery. The Governance Lead notifies the CEO and COO within 4 hours.
3. **Assessment:** The Governance Lead reviews audit logs to determine the scope of the incident: what data was exposed, for how long, and whether it was referenced in any outputs.
4. **Remediation:** Review and tighten access controls if the incident results from a permissions gap. Update training protocols and ensure immediate remediation when the incident results from user error.
5. **Documentation:** Record the incident, root cause, and corrective actions in the governance log. Present findings at the next quarterly governance review.

> **Note on Anthropic's Data Handling**
> Anthropic confirms that Enterprise customer data is not used for model training by default. Deleted conversations are processed for removal within 30 days. Custom retention settings provide additional organizational control over data lifecycle. These protections mean that even in an incident scenario, the blast radius is contained by platform architecture.

---

## 8. Governance Review Cycle

This framework is a living document. Governance matures alongside organizational fluency with the platform. The following review cadence ensures continuous improvement.

| Frequency | Activity | Owner |
|-----------|----------|-------|
| **Monthly** | Review audit logs. Check for unauthorized data access patterns. Gather user feedback on friction points and productivity gains. | AI Governance Lead & Co-Owner |
| **Quarterly** | Formal governance review with leadership team. Update data classification decisions, revise acceptable use policy, assess phase progression. Review Anthropic platform updates for new capabilities or policy changes. | AI Governance Lead & Co-Owner + Executive Sponsor |
| **Annually** | Comprehensive framework revision. Align with organizational strategic plan updates. Benchmark against peer nonprofit AI governance practices. Board briefing on AI adoption outcomes and risk posture. | AI Governance Lead & Co-Owner + CEO |

---

## 9. Alignment with Existing Policies

This AI Data Governance Framework operates within and reinforces DC CAP's existing policy infrastructure. It should be read alongside the following organizational policies:

- **GEAR UP Data Policy:** Establishes data handling requirements for federally funded programming. The AI framework's Tier 1 restrictions exceed GEAR UP's data protection requirements.
- **Salesforce Data Governance:** Defines field-level security, role-based access, and data sharing rules within the Education Cloud platform. The AI framework's classification tiers mirror and extend these protections.
- **Employee Handbook / Acceptable Use:** Claude Enterprise use falls under existing technology acceptable use provisions. Section 6 of this framework provides AI-specific supplementary guidance.
- **Partner MOUs:** University partnership agreements include data sharing provisions. Tier 2 classification of partner-shared confidential data respects these contractual obligations.

---

## 10. Decision Log & Next Steps

### Completed Actions

- Enterprise order form signed with Anthropic. Nonprofit pricing confirmed. Initial seat count: 24.
- CEO and CSAO reviewed and approved this framework for pilot implementation.
- COO designated as AI Governance Co-Owner with full platform authority development path through end of Phase 1.

### Immediate Actions (Implementation Weeks 1–4)

- Execute 4-Week Kickoff Plan. Configure security infrastructure, build knowledge base, launch pilot cohort.
- COO assesses Microsoft Entra ID readiness for SSO integration.
- CSAO prepares onboarding training materials for Phase 1 pilot cohort.

### Open Questions for Leadership Discussion

- Should the board receive a briefing on AI adoption before or after the pilot phase? **Recommendation:** brief the board at the conclusion of Phase 1 with initial usage data and governance learnings.

---

> **Strategic Note**
> Governance documents built from actual usage patterns are more durable and practical than those designed in the abstract. The leadership pilot will generate the real-world data needed to refine this framework for Phase 2 expansion. The framework will be updated at the conclusion of Phase 1 based on pilot learnings.

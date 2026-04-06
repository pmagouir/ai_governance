# AI Data Governance Framework
## Claude Enterprise Adoption & Data Security
**DC College Access Program (DC CAP Scholars)**
v1.1 | April 2026 | Prepared by: PLM/AMC

> **INTERNAL USE ONLY — FOR LEADERSHIP REVIEW**

---

> **Guiding Principle**
> Enterprise AI delivers value in direct proportion to the organizational context it can access. Governance exists to structure that access responsibly, allowing teams to work at the frontier of what the technology enables while maintaining strict protections for the people we serve.

---

## Executive Summary

DC CAP serves over 800 scholars annually through a model that combines financial aid, intensive coaching, and university partnerships. Every hour staff spend on grant drafting, program reporting, and operational documentation is an hour not spent on direct student interaction, partner relationship management, or the coaching conversations that drive persistence and graduation. Enterprise AI adoption exists to shift that ratio.

This framework establishes the governance structure, data classification standards, and operational protocols for DC CAP Scholars to adopt Anthropic's Claude Enterprise AI platform. The framework balances two priorities: maximizing the platform's strategic value by connecting it to organizational data, and protecting the personally identifiable information (PII) of the scholars, families, partners, and employees we serve. The intended result is that coaching staff recover time for high-value student engagement, development teams accelerate grant cycles that fund scholarships, and program leaders strengthen the evaluation practices that improve outcomes across the scholar portfolio.

Claude Enterprise provides the security architecture required for responsible adoption. Anthropic does not use Enterprise customer inputs or outputs to train its models. The platform includes single sign-on (SSO) integration, audit logging, custom data retention controls, and role-based access management. These protections are comparable to the enterprise platforms DC CAP already operates, including Salesforce Education Cloud and Microsoft 365.

Research across 1,400+ executives shows that 95% of AI pilots fail to deliver measurable returns, and the primary determinant of success is organizational investment in people and processes, which should represent 70% of total effort. This document recommends a phased adoption approach that begins with a leadership pilot cohort using low-sensitivity organizational data, then expands access and data integration as the team builds fluency and governance matures. Success will be measured through a three-tier framework tracking engagement, proficiency, and impact on the scholars we serve, with explicit Scale/Pause/Pivot decision gates at Day 45 and Day 60. The framework is designed to be a living document, updated iteratively as real usage patterns inform policy refinements.

---

## 1. Strategic Rationale for Enterprise AI Adoption

DC CAP Scholars operates a comprehensive student success model that combines financial aid, intensive coaching, and university partnerships to serve over 800 scholars annually. The organization's strategic priorities require increased capacity across grant writing, program evaluation, partnership analysis, strategic communications, operational efficiency, and data-informed decision-making. At the same time, emerging AI capabilities require that users add relevant technology orchestration skills to remain both effective in their current roles and competitive across their careers.

Claude Enterprise addresses these needs by providing a secure platform where staff can work with organizational knowledge in a more secure environment. Several features are particularly relevant to DC CAP's operating context:

- **Projects:** Persistent workspaces loaded with organizational documents (grant narratives, program models, strategic plans, data dictionaries) that Claude can reference across conversations.
- **Skills:** Repeated tasks should not, but often do, require new context and orientation. Building skills in Claude ensures best practices are captured so they can be replicated and made more efficient. DC CAP's leadership team has developed a custom skills library for the organization that will be shared with staff as part of the onboarding experience.
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
| **Users** | 8 seats: CEO, COO, CSAO, Director of Strategic Partnerships and Student Success, GEAR UP Director, Director of Communications, Director of Development Operations, Director of Foundation Relations, Manager of Executive Operations, possibly Manager of Data Operations |
| **Data Access** | All tiers with role dependencies employed. Organizational knowledge, program models, grant language, strategic documents, and public data. |
| **Key Activities** | Design project infrastructure, deploy pre-built organizational skills, identify and add connectors, build shared organizational context, and load shared Projects with program documentation, past grant narratives, strategic plan, OKR frameworks, and data dictionaries. Use Claude for drafting, analysis, and strategic thinking. Generate ideas for practical, innovative use case scenarios. |
| **Governance Actions** | Configure SSO, set 90-day data retention, establish role-based permissions, enable audit logging. Document usage patterns and refine classification decisions. |
| **Success Metrics** | User adoption rate, tasks completed, time savings reported, zero Tier 1 or Tier 2 data incidents, governance framework updated based on real usage. Development and prioritization of use cases for each functional area with an emphasis on innovative use and practical application. |

### Phase 2: Team Expansion (Months 3–5)

**Objective:** Extend access to coaching and operations teams through an all-staff kickoff in June. Introduce Tier 2 data access for authorized users. Integrate Microsoft 365 connector.

- Launch Phase 2 with all-staff kickoff led by pilot leaders delivering the training modules they developed during Phase 1. Each leader facilitates onboarding for their functional area using unit-specific workflows, governance scenarios, and use cases.
- Enable Microsoft 365 connector for document access within Claude.
- Authorize Tier 2 aggregate data access for leadership team with de-identification verification protocols.
- Develop team-specific Projects loaded with role-relevant knowledge (coaching playbooks, partner evaluation frameworks, GEAR UP documentation).
- Document emerging best practices in an internal AI use guide informed by Phase 1 learnings.
- Reduce data retention to 60 days based on Phase 1 learnings. Review audit logs monthly. In the event of disclosure emergency, data can be removed immediately.
- Require five-course progression completion in Anthropic Academy from all team members by end of term.

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
| **Development Co-Leads** | Champions adoption within fundraising and donor relations workflows. Identifies high-value use cases for grant writing, prospect research, and donor communications. Ensures development data (donor PII, gift amounts) follows Tier 2 protections. Lead Blackbaud connector adoption and implementation. | Sashia Moore, Director of Development Operations |
| **Operations Content Lead** | Curates and organizes HR, finance, and operations documentation for ingestion into Claude Projects. Classifies content per data tier framework before upload. Ensures Tier 1 and Tier 2 materials are filtered appropriately and that only authorized content enters shared knowledge bases. | Andre Mendes, Executive Operations Manager |
| **All Licensed Users** | Complete AI onboarding training, follow data classification protocols, report any incidents or concerns to the AI Governance Lead. | All staff with Enterprise seats |

---

## 6. Onboarding & Fluency Requirements

Platform access is conditional on training completion. Research shows it takes 2-3 months for skilled workers to reach competent AI use, and organizations that invest systematically in training achieve 60% adoption rates compared to 30% without. The governance framework protects data. The training program builds the fluency that makes governance intuitive rather than burdensome.

### 6.1 Training Prerequisites for Platform Access

No staff member receives Claude Enterprise access until they complete the following three prerequisites. The AI Governance Lead verifies completion through the pilot hub prerequisite tracker before provisioning accounts.

| Requirement | What It Covers | Estimated Time |
|-------------|---------------|----------------|
| Review the Start Here Guide and AI Governance Framework | Claude interfaces, organizational skills, data tier classification, approved use cases, and responsible use principles | ~30 minutes |
| Complete the Pre-Launch Assessment | Baseline fluency measurement across five constructs (AI orientation, learning orientation, current use, AI knowledge, applied skills) with embedded governance acknowledgment | ~30 minutes |
| Complete Two Anthropic Academy Courses | **Claude 101** (platform basics, features, prompts, navigation) and **AI Fluency for Nonprofits** (4D framework applied to mission-driven work). Certificates required. | ~60 minutes |

Account provisioning is conditioned on completing all three prerequisites. The AI Governance Lead reviews the prerequisite tracker and confirms completion before activating each user's Enterprise seat.

Detailed training content, facilitation guides, and the full 60-day learning arc are maintained in the **AI Onboarding Implementation Plan** (separate document, managed by the AI Governance Lead). The prerequisite experience described above is the entry point into a structured progression that includes 1:1 coaching, hands-on activities (including a facilitated Governance Walk with scenario-based data tier classification practice), intermittent group learning sessions, and capstone module development.

### 6.2 Pilot Experience Structure (Phase 1)

The leadership pilot operates through three complementary formats designed to build individual fluency while creating shared organizational capacity.

| Format | Cadence | Purpose | Owner |
|--------|---------|---------|-------|
| Leadership-wide introduction | Pilot launch (April 6-10) | Establish shared vocabulary, complete prerequisites, align on governance and expectations | AI Governance Lead + AI Governance Co-Owner |
| 1:1 check-ins with Preston and Angela | Recurring throughout pilot | Individualized coaching on each leader's workflow integration, use case development, and fluency growth. The primary vehicle for building competency. | AI Governance Lead + AI Governance Co-Owner |
| All-group meetings | Intermittent throughout pilot | Shared problem-solving, peer learning, module development feedback, and collective progress check-ins | AI Governance Lead |
| Weekly pulse check-in | Weekly (self-directed, ~30 seconds) | Track engagement, iteration frequency, confidence, and surface wins and friction points | Individual participants |

### 6.3 All-Staff Kickoff and Scaling (Phase 2)

The leadership pilot produces two outputs that enable organization-wide scaling: trained leaders who can facilitate AI adoption within their functional areas, and training modules built by those leaders for their specific teams.

The all-staff kickoff in June marks the transition from Phase 1 (leadership pilot) to Phase 2 (team expansion). Each pilot leader will have developed a training module tailored to their unit's workflows, governance considerations, and use cases. The kickoff is the delivery point for those modules, led by the leaders who built them.

### 6.4 Ongoing Fluency Development

Training is an ongoing requirement. The AI skills landscape changes rapidly, and one-time onboarding produces declining returns within 3-4 months without reinforcement.

| Cadence | Activity | Owner |
|---------|----------|-------|
| Phase 2 (post-June kickoff) | Unit-level training delivered by pilot leaders using their modules | Pilot leaders within each functional area |
| Monthly (Phase 2+) | All-hands working sessions where staff share workflow integrations and troubleshoot challenges together | AI Governance Lead + pilot leaders |
| By end of Phase 2 | All team members complete Anthropic Academy's 5-course progression | Individual responsibility, tracked by AI Governance Co-Owner |
| Quarterly (Phase 3+) | Advanced topics, platform updates, and governance refresh | AI Governance Lead |

### 6.5 Champion Network

Each functional area will have 1-2 designated AI champions by the end of Phase 2. Champions emerge from the pilot cohort and from early adopters identified during the all-staff rollout. Their role: find and share practical team-specific examples, answer questions and mentor colleagues, surface feedback on what works and what creates friction, and participate in monthly governance feedback sessions.

Champion identification begins during Phase 1 as pilot leaders build fluency through 1:1 coaching and group sessions. Leaders who demonstrate strong competency and willingness to facilitate peer learning become the natural champion candidates for their units. The AI Governance Lead maintains the champion roster and provides facilitation support. The **Student Success Lead** (Stephanie Gardner) owns champion development within coaching teams. The **Development Co-Lead** (Sashia Moore) owns champion development within fundraising workflows.

---

## 7. Acceptable Use Policy

All Claude Enterprise users at DC CAP must adhere to the following guidelines. These are covered in the onboarding training described in Section 6 and acknowledged in writing by each user before receiving platform access. All Claude-generated errors are the responsibility of the user. Embedding personal review and expertise into every AI workflow is a non-negotiable practice at DC CAP.

### 7.1 Encouraged Uses

The following represent the kinds of high-value AI use this governance framework is designed to enable:

- Draft grant narratives, program reports, and strategic documents using shared Projects loaded with approved organizational language, past submissions, and data dictionaries.
- Analyze de-identified program data (Tier 3) for trends that inform coaching strategies, partnership evaluations, and board reporting.
- Prepare board and funder materials by working with strategic plans, OKR frameworks, and published outcome data in dedicated Projects.
- Streamline operational workflows through Microsoft 365 integration for email drafting, document review, and meeting preparation.
- Build and share team-specific Projects that capture institutional knowledge so best practices are replicated across the organization.

### 7.2 Required Practices

- Verify the data tier classification of any information before uploading or referencing it in Claude conversations.
- Use shared organizational Projects for team knowledge rather than duplicating documents across individual accounts.
- Review Claude outputs for accuracy before incorporating them into external communications, grant submissions, or reports. Claude is a drafting and analysis accelerant. Staff remain accountable for the quality and accuracy of all work product.
- Report any accidental upload of Tier 1 data to the AI Governance Lead immediately. The incident response protocol (Section 8) applies.
- Separate personal projects and chats from DC CAP projects. Every employee is expected to keep personal projects, build team projects, share projects with others, and separate them appropriately.

### 7.3 Prohibited Uses

- Uploading or referencing any Tier 1 (Restricted) data, including scholar names linked to academic records, financial details, or family information.
- Using Claude to make automated decisions about scholar eligibility, placement, or support level without human review and approval.
- Using Claude to make automated outreach, hiring, dismissal, evaluation, and other decisions without human review and approval.
- Sharing Claude-generated content externally without staff review and attribution. All external communications remain staff-authored; Claude is a tool in the drafting process.

---

## 8. Incident Response Protocol

If Tier 1 data is accidentally uploaded to Claude or a potential data breach is identified, the following protocol applies:

1. **Immediate Containment:** The user who identified the incident deletes the conversation containing the data immediately. Claude's custom retention policy will process the deletion, but manual deletion accelerates removal.
2. **Notification:** Notify the AI Governance Lead (Preston Magouirk) within 2 hours of discovery. The Governance Lead notifies the CEO and COO within 4 hours.
3. **Assessment:** The Governance Lead reviews audit logs to determine the scope of the incident: what data was exposed, for how long, and whether it was referenced in any outputs.
4. **Remediation:** Review and tighten access controls if the incident results from a permissions gap. Update training protocols and ensure immediate remediation when the incident results from user error.
5. **Documentation:** Record the incident, root cause, and corrective actions in the governance log. Present findings at the next quarterly governance review.

> **Note on Anthropic's Data Handling**
> Anthropic confirms that Enterprise customer data is not used for model training by default. Deleted conversations are processed for removal within 30 days. Custom retention settings provide additional organizational control over data lifecycle. These protections mean that even in an incident scenario, the blast radius is contained by platform architecture.

---

## 9. Success Measurement Framework

Governance without measurement is compliance theater. We need to know whether this platform is producing the outcomes that justify the investment, and we need to know early enough to course-correct. The following framework measures success across three dimensions: Engagement (are people using it?), Proficiency (are they getting better?), and Impact (is it producing mission-relevant results?). These measurement dimensions are distinct from the data classification tiers in Section 2. Detailed metric definitions, tracking instruments, and collection schedules are maintained in the **KPI Framework** (separate operational document). This section establishes the governance-level targets and reporting cadence.

### Engagement

These are leading indicators. They tell us whether staff are using the platform and building habits.

| Metric | Phase 1 Target (Pilot, Day 60) | Phase 2 Target | Phase 3 Target |
|--------|-------------------------------|----------------|----------------|
| Monthly active users (% of licensed seats) | 80%+ of pilot cohort (7+ of 9) | 60% of all licensed users by Month 4 | 75% of all licensed users by Month 8 |
| Prompts per participant per week | Baseline established Week 1; 15+ by Week 6 | 15+ sustained | 20+ |
| Active user segmentation | Cohort shifting from Light (1-5/week) toward Moderate (6-19) and Heavy (20+) | Majority in Moderate+ | Majority in Heavy |
| Anthropic Academy course completions | Claude 101 + AI Fluency for Nonprofits (prerequisite); Framework & Foundations (recommended) | 5-course progression for all team members | Required for new hires within 60 days |

Data source: Claude Enterprise admin panel (usage logs) + weekly check-in self-report. Tracked weekly starting Week 1.

### Proficiency

These metrics capture whether platform engagement translates into fluency development. Proficiency is the leading indicator that predicts workflow impact.

| Metric | Phase 1 Target (Day 60) | Measurement |
|--------|------------------------|-------------|
| Iteration frequency | 60%+ of cohort reporting "A few times" or higher on weekly check-in | Self-report (weekly check-in) + admin logs where available |
| Observable fluency behaviors | 70%+ of participants demonstrate 3+ behaviors (iteration on drafts, clarifying goals, questioning model reasoning, identifying missing context, specifying output formats, providing examples, fact-checking outputs) | Biweekly observation starting Week 3; pre/post survey |
| Session depth | Average conversation length increasing over time | Enterprise admin data cross-referenced with self-report |
| Workflow redesign documentation | Each participant identifies at least 1 workflow with before/after comparison; minimum 2 documented redesigns per unit (6 total) | Templates deployed Week 3; tracked at Day 45 and Day 60 |

Early warning: any participant reporting "Never" on iteration for 2+ consecutive weeks triggers a 1:1 coaching conversation with the AI Governance Lead.

### Impact

These are lagging indicators that connect AI-assisted proficiency to mission outcomes. We expect initial signal by Day 45 and reportable results by Day 60 for the pilot; Phase 2-3 targets are longer-horizon.

| Metric | Phase 1 Target | Phase 2-3 Target | Measurement |
|--------|---------------|-----------------|-------------|
| Time savings evidence | Each participant documents at least 1 task with before/after time comparison | Aggregated into "total hours redirected per week" by function | Self-report + workflow redesign documentation |
| Quality improvement evidence | At least 3 examples of AI-assisted outputs rated higher quality than previous manual outputs (peer-assessed) | Ongoing peer assessment integrated into champion sessions | Standard quality rubric |
| Mission connection | At least 1 example per unit of AI-freed time redirected to high-value student interaction | Grant cycle acceleration, coaching contact hour increases, program evaluation depth | Unit-level tracking by champion + Student Success Lead |
| Grant narrative first-draft cycle | Establish baseline hours per narrative | 25% reduction (Phase 2); 40% reduction (Phase 3) | Self-report by Development team |
| Coaching documentation time | Establish baseline hours per scholar | 15% reduction (Phase 2); 25% reduction (Phase 3) | Self-report by coaching team |

### Decision Gates

The pilot measurement framework includes explicit Scale/Pause/Pivot thresholds at Day 45 and Day 60 to inform Q3 rollout decisions:

| Decision | Criteria | Recommendation |
|----------|----------|----------------|
| **Scale** | 70%+ monthly active users, 60%+ demonstrating iteration, 3+ documented workflow redesigns | Full Q3 rollout with cohort-based structure |
| **Pause** | 40-70% active users, proficiency plateau, budget or bandwidth constraints | Extend pilot 30 days; diagnose barriers before scaling |
| **Pivot** | Below 40% active users, leadership misalignment, governance incidents | Restructure approach before investing further |

### Governance-Specific Metrics

| Metric | Target | Frequency |
|--------|--------|-----------|
| Tier 1 or Tier 2 data incidents | Zero | Continuous, reported monthly |
| Governance framework updates based on usage data | 1+ per quarter | Quarterly |
| Staff governance confidence (self-reported) | 80%+ report confidence in data tier classification by end of Phase 1 | Pre/post survey |
| Audit log review completion | 100% of scheduled reviews completed on time | Monthly |

These metrics will be reported to the CEO monthly during Phase 1, quarterly during Phases 2-3, and included in the annual board briefing on AI adoption outcomes and risk posture (Section 10).

---

## 10. Governance Review Cycle

This framework is a living document. Governance matures alongside organizational fluency with the platform. The following review cadence ensures continuous improvement.

| Frequency | Activity | Owner |
|-----------|----------|-------|
| **Monthly** | Review audit logs. Check for unauthorized data access patterns. Gather user feedback on friction points and productivity gains. Report engagement metrics (Section 9) to CEO. | AI Governance Lead & Co-Owner |
| **Quarterly** | Formal governance review with leadership team. Update data classification decisions, revise acceptable use policy, assess phase progression. Review Anthropic platform updates for new capabilities or policy changes. Include staff feedback from champion network and quarterly survey. Report proficiency and early impact metrics (Section 9). | AI Governance Lead & Co-Owner + Executive Sponsor |
| **Annually** | Comprehensive framework revision. Align with organizational strategic plan updates. Benchmark against peer nonprofit AI governance practices. Board briefing on AI adoption outcomes, full impact metrics (Section 9), and risk posture. | AI Governance Lead & Co-Owner + CEO |

---

## 11. Alignment with Existing Policies

This AI Data Governance Framework operates within and reinforces DC CAP's existing policy infrastructure. It should be read alongside the following organizational policies:

- **GEAR UP Data Policy:** Establishes data handling requirements for federally funded programming. The AI framework's Tier 1 restrictions exceed GEAR UP's data protection requirements.
- **Salesforce Data Governance:** Defines field-level security, role-based access, and data sharing rules within the Education Cloud platform. The AI framework's classification tiers mirror and extend these protections.
- **Employee Handbook / Acceptable Use:** Claude Enterprise use falls under existing technology acceptable use provisions. Section 7 of this framework provides AI-specific supplementary guidance.
- **Partner MOUs:** University partnership agreements include data sharing provisions. Tier 2 classification of partner-shared confidential data respects these contractual obligations.
- **AI Onboarding Implementation Plan:** Defines the 60-day training arc, session facilitation guides, competency progression, pre/post assessment instruments, and champion network development. Section 6 of this framework establishes the training prerequisites; the Implementation Plan provides the detailed curriculum.
- **KPI Framework:** Operational measurement instrument with detailed metric definitions, collection schedules, tracking dashboards, and Scale/Pause/Pivot decision gates. Section 9 of this framework establishes governance-level targets; the KPI Framework provides the tracking infrastructure.

---

## 12. Decision Log & Next Steps

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

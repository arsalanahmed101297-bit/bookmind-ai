# Certification and Portfolio Roadmaps (/certification-and-portfolio-roadmaps)

---
type: Document
title: "Certification and Portfolio Roadmaps"
description: "The PCxx exam path and the internship gate, the Anthropic certifications that correspond to each exam, and the portfolio each reader route produces."
status: stable
order: 3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T11:03:38Z
chapter: "F3"
part: Front
expert_status: required
objectives: []
word_budget: 1000
prerequisites: [ "F2" ]
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: []
last_verified: 2026-10-02
exam_domains:
  CCAO-F:
    D1: Task Definition and Prompting
    D2: Output Evaluation and Quality Control
    D3: Capability, Model, and Context Selection
    D4: Workflow Design and Integration
    D5: Configuration and Knowledge Management
    D6: Responsible Use, Data Protection, and Governance
sources:
  - id: agentfactory-certifications
    title: "Certifications: Proof You Can Carry In (The AI Agent Factory, first edition, verified 2026-10-02)"
    resource: https://agentfactory1.panaversity.org/docs/certifications
  - id: agentfactory-pcao-f
    title: "Panaversity Certified Associate: Foundations (PCAO-F) (The AI Agent Factory, first edition, verified 2026-10-02)"
    resource: https://agentfactory1.panaversity.org/docs/certifications/pcao-f
  - id: agentfactory-pcar-f
    title: "Panaversity Certified Architect: Foundations (PCAR-F) (The AI Agent Factory, first edition, verified 2026-10-02)"
    resource: https://agentfactory1.panaversity.org/docs/certifications/pcar-f
  - id: agentfactory-pcdv-f
    title: "Panaversity Certified Developer: Foundations (PCDV-F) (The AI Agent Factory, first edition, verified 2026-10-02)"
    resource: https://agentfactory1.panaversity.org/docs/certifications/pcdv-f
  - id: agentfactory-pcar-p
    title: "Panaversity Certified Architect: Professional (PCAR-P) (The AI Agent Factory, first edition, verified 2026-10-02)"
    resource: https://agentfactory1.panaversity.org/docs/certifications/pcar-p
  - id: panaversity-certifications
    title: "Claude Certification Pathway (Panaversity, verified 2026-10-02)"
    resource: https://panaversity.org/certifications
  - id: anthropic-certifications
    title: "Four role-based Claude certifications (Anthropic, 23 July 2026, verified 2026-10-12)"
    resource: https://claude.com/blog/four-role-based-claude-certifications
  - id: anthropic-certification-eligibility
    title: "Who can take a Claude certification exam (Anthropic Partner Academy, verified 2026-10-12)"
    resource: https://anthropic-partners.skilljar.com/page/certification-eligibility
  - id: anthropic-certification-faq
    title: "FAQ - Certifications (Anthropic Partner Academy, verified 2026-11-23)"
    resource: https://anthropic-partners.skilljar.com/page/faq-certifications
  - id: anthropic-ccao-f-guide
    title: "Claude Certified Associate: Foundations Exam Guide, version 1.1 (Anthropic, effective December 7, 2026, verified 2026-11-19)"
    resource: https://cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1794946609/Claude_Certified_Associate_-_Foundations_Exam_Guide_Updated_Dec_7.pdf
  - id: anthropic-ccar-f-guide
    title: "Claude Certified Architect: Foundations Exam Guide, version 1.0 (Anthropic, effective July 2026, verified 2026-10-02)"
    resource: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542750/Claude+Certified+Architect+%E2%80%93+Foundations+Exam+Guide.pdf"
  - id: anthropic-ccdv-f-guide
    title: "Claude Certified Developer: Foundations Exam Guide, version 1.0 (Anthropic, effective July 2026, verified 2026-10-02)"
    resource: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542875/Claude+Certified+Developer+%E2%80%93+Foundations+Exam+Guide.pdf"
  - id: anthropic-ccar-p-guide
    title: "Claude Certified Architect: Professional Exam Guide, version 1.0 (Anthropic, effective July 2026, verified 2026-10-02)"
    resource: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542810/Claude+Certified+Architect+%E2%80%93+Professional+Exam+Guide.pdf"
generated:
  at: 2026-11-24T11:03:38Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

**Certifications are milestones, not the product.** The product is a portfolio a stranger can check: work you built, which someone who does not know you can open and test.

This page answers two questions: which exam comes next, and what you should have built by then. Most readers need one line of it. **On the everyday professional and domain-expert routes you take one certification, Panaversity's Associate certification, PCAO-F. On the leader route you take none.** Everything past that first exam is for builders, and most of it rests on Parts IV to VIII, which are not written yet.

### How to read an exam code

- **The first letter says whose exam it is.** P is Panaversity's, and C is Anthropic's (C for Claude). This page writes PCxx for any Panaversity exam and CCxx for any Anthropic one.
- **The next two letters say the level.** AO is Associate, the exam for people who manage AI work. DV is Developer and AR is Architect, the exams for people who build it.
- **The last letter says the step.** F is Foundations, and P is Professional.

So PCAO-F is Panaversity's Associate: Foundations exam, and CCAO-F is Anthropic's exam of the same name.

### Other terms on this page

- Milestone: a checkpoint for the work you build, lettered A to F. The portfolio map below lists what each one needs.
- FDE: Forward Deployed Engineer, an engineer who builds and sets up AI Workers inside a client's company. [From Skills to Income](from-skills-to-income/overview.md) explains the FDE route.
- Vertical and slice: a vertical is one field of professional work, such as accounting. A slice is one outcome in that field, covered completely.
- KSoR, DSoR and SSoR: the three governed records behind a worker. KSoR governs what it may know, DSoR governs what it may do, and SSoR tracks where the work stands. [Chapter 4](ai-worker-paradigm/the-architecture-in-one-picture/overview.md) teaches them.
- Review contract: what you will accept as good work, written before you hand the work over.
- Snapshot rehearsal: a short summary of where your exam's guide and today's products differ, and a practice set matched to the guide version. You work through both before an official Anthropic exam.

---

## The certification map

![The certification map: PCAO-F, then the first slice, with PCDV-F closing Part III and PCDV-P closing Part IV on the builder route. Then PCAR-F, taken in Part V, and the FDE Internship Program gate with optional assisted registration for CCAO-F and CCAR-F. PCAR-P closes Part V, beyond the gate. The Managing the AI Worker exam stands apart from the path](img/f3-left-exam-path.png)

On the builder route, you go on from PCAO-F to the two Developer exams, PCDV-F[^agentfactory-pcdv-f] after Part III and PCDV-P after Part IV. Then you take the Architect exam, PCAR-F, in Part V, and then you enter the internship.

The map has five Panaversity credentials. Each one sits beside the Anthropic certification it matches, which is optional. Anthropic announced four certifications in July 2026[^anthropic-certifications] and now lists five, with Developer: Professional added.[^anthropic-certification-faq]

| PCxx exam | Anthropic certification, optional | What it tests | Taught in | Portfolio by then |
| --- | --- | --- | --- | --- |
| PCAO-F, Associate: Foundations | CCAO-F[^anthropic-ccao-f-guide] | Judgment | [Claude and ChatGPT 2.0 to Part II](appendices/exams/associate-foundations/overview.md#the-pcao-f-exams) | A. Manager |
| PCDV-F, Developer: Foundations | CCDV-F[^anthropic-ccdv-f-guide] | Build and trust | Part III | B. Builder |
| PCDV-P, Developer: Professional | CCDV-P[^anthropic-certification-faq] | Running in production | Part IV | C. Production worker |
| PCAR-F, Architect: Foundations | CCAR-F[^anthropic-ccar-f-guide] | Design and build | Parts III to V | C, with D under way |
| PCAR-P, Architect: Professional | CCAR-P[^anthropic-ccar-p-guide] | Trust and ownership | Part V, with Part IV | D. AI workforce |

[Appendix C](appendices/exams/associate-foundations/overview.md) describes both Associate exams, PCAO-F with its two exams and CCAO-F.

**Qualify.** Pass PCAO-F.[^agentfactory-pcao-f] Then build the first slice of your work while you prepare for PCAR-F, and pass PCAR-F.[^agentfactory-pcar-f] You do not have to study with Panaversity to take these exams.[^agentfactory-certifications]

**Enter the internship.** Passing PCAO-F and PCAR-F qualifies you for the FDE Internship Program. PCAR-F is taught in Parts III to V, so the everyday professional route alone does not reach the internship. After you enter it, you can get assisted registration for CCAO-F and CCAR-F: Panaversity helps you register. The Anthropic exams are optional.[^agentfactory-certifications] Anthropic currently offers them only to people who work at organizations in the Claude Partner Network.[^anthropic-certifications],[^anthropic-certification-eligibility] If you do not enter the internship, you need to work at a member organization. [Appendix C](appendices/exams/associate-foundations/overview.md#the-ccao-f-exam) says how to register.

**Go further.** PCAR-P[^agentfactory-pcar-p] is an additional credential beyond the gate. It closes Part V.

**The Managing the AI Worker exam** is a separate Panaversity exam. It stands apart from the path above, and no credential in the table needs it. It is graded on your work, not on multiple-choice questions. You carry out a real delegation and hand in five pieces of work, all taught in Parts I and II: a Four-Part Brief, a Review Contract written before you delegate, an Authority Envelope, your review of a run you did not watch, and your diagnosis of a failed run. PCAO-F stays the knowledge exam.

### How PCxx exams relate to Anthropic's

![Inside a PCxx exam: each exam is one integrated exam that covers everything on the Anthropic blueprint and current practice on both vendors, with one overall result. The credential shows its version, and PCxx plus the snapshot rehearsal is the readiness check](img/f3-pcxx-one-exam.png)

Each PCxx exam, including each of PCAO-F's two, gives one overall result.[^panaversity-certifications] It is not marked in two halves, though it covers two things:

- The Anthropic blueprint: everything the official exam guide covers, organized by its domains.[^agentfactory-certifications] A domain is one topic area of the exam.
- Current practice: how the same work is done now, on both Anthropic's and OpenAI's products.[^agentfactory-pcao-f] PCDV-F and PCDV-P are the exceptions: their questions stay on Claude, like CCDV-F and CCDV-P, the exams they prepare for.

This design is Panaversity's own assessment policy, not Anthropic's.[^agentfactory-certifications] Only fully released, documented features are examined. Each quarter of the year has one fixed exam version. The credential shows its version, for example PCAR-F 2026.Q4.

A PCxx exam is a credential, not a rehearsal exam. Before an official Anthropic exam, PCxx plus the snapshot rehearsal is your readiness check.

---

## The portfolio map

![The portfolio map: the four reader routes, their credentials, the parts each reads in full or in part, the milestone each part contributes to, and each route's portfolio exit. Part 0 is optional only on the leader route](img/f3-right-routes-portfolios.png)

[How to Use This Book](how-to-use-this-book.md) lists each route's parts, credentials and portfolio exit, and the size of each stage. A route's portfolio exit is what you have built when you finish it. Part VIII is the closing chapter and builds no milestone.

| Milestone | Parts | Evidence |
| --- | --- | --- |
| A. Manager | I, II | A verified delegated-work example, a review contract and a small governed KSoR |
| B. Builder | III | A plugin, a connector, a hosted agent (the AI vendor runs it) and a self-hosted runtime (you run it on your own computers), built on Claude and then rebuilt on OpenAI and open source |
| C. Production worker | IV | Brightline's accounts payable worker run as a live service: every step recorded, service targets and an alert set, tests it must pass before any change, limits at several points, a written plan for incidents that has been practised, and changes made only through coding agents |
| D. AI workforce | V | The design of a full-time AI Worker (a Digital FTE), the three records in use, one transaction followed across all three, and a pilot package: what a client needs to try the worker, with its return on investment |
| E. Market | VI | A vertical decision, a published slice and a first client |
| F. National strategy | VII | A country or institutional plan |

A route can end before a milestone is complete. The everyday professional route leaves out milestone A's small governed KSoR, and the builder route leaves out milestone D's pilot package. Each is extra work you can choose to do. On the domain-expert route, milestone E's first client comes after the route.

---

## Milestones, not the product

![A milestone needs both the credential and the evidence: PCDV-F plus a plugin, a connector, a hosted agent and a self-hosted runtime reaches milestone B. PCDV-F with no plugin does not](img/f3-milestone-needs-both.png)

Next comes [The FDE 2027 Master Plan](fde-2027-master-plan.md), Panaversity's four exams, and then [From Skills to Income](from-skills-to-income/overview.md), the last opening page. Then comes [Part 0](how-ai-works/overview.md), which is optional only on the leader route, and [Part I](ai-worker-paradigm/overview.md).

[^agentfactory-certifications]: Certifications: Proof You Can Carry In, The AI Agent Factory, first edition.
[^agentfactory-pcao-f]: Panaversity Certified Associate: Foundations (PCAO-F), The AI Agent Factory, first edition.
[^agentfactory-pcar-f]: Panaversity Certified Architect: Foundations (PCAR-F), The AI Agent Factory, first edition.
[^agentfactory-pcdv-f]: Panaversity Certified Developer: Foundations (PCDV-F), The AI Agent Factory, first edition.
[^agentfactory-pcar-p]: Panaversity Certified Architect: Professional (PCAR-P), The AI Agent Factory, first edition.
[^panaversity-certifications]: Claude Certification Pathway, Panaversity.
[^anthropic-certifications]: Four role-based Claude certifications, Anthropic, 23 July 2026.
[^anthropic-certification-eligibility]: Who can take a Claude certification exam, Anthropic Partner Academy.
[^anthropic-certification-faq]: FAQ - Certifications, Anthropic Partner Academy, verified 23 November 2026.
[^anthropic-ccao-f-guide]: Claude Certified Associate: Foundations Exam Guide, version 1.1, Anthropic, effective December 7, 2026.
[^anthropic-ccar-f-guide]: Claude Certified Architect: Foundations Exam Guide, version 1.0, Anthropic, effective July 2026.
[^anthropic-ccdv-f-guide]: Claude Certified Developer: Foundations Exam Guide, version 1.0, Anthropic, effective July 2026.
[^anthropic-ccar-p-guide]: Claude Certified Architect: Professional Exam Guide, version 1.0, Anthropic, effective July 2026.


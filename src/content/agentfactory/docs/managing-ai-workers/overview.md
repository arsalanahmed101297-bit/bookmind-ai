# Part II. Managing AI Workers (/managing-ai-workers/overview)

---
type: Document
title: "Part II. Managing AI Workers"
description: "What Part II teaches about managing AI Workers, the capstone you complete at its end, and how it prepares you for PCAO-F."
status: stable
order: 200
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
part: II
expert_status: required
objectives: []
word_budget: null
prerequisites: [ "01", "02", "03", "04" ]
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: []
chapters: [ "05", "06", "07", "08", "09", "10", "11" ]
running_project: "The AP Worker at Brightline Wholesale Supply"
running_project_role: "knowledge owner"
alignment:
  anthropic: "CCAO-F, all six domains. Exact Direct and Supporting ids are in each chapter's frontmatter."
  openai_competencies: [ OAI.1.3, OAI.1.4, OAI.1.5, OAI.1.6, OAI.1.7, OAI.1.8, OAI.1.9, OAI.1.10 ]
companion: "Associate companion, sections A1 to A8"
next_exam: "PCAO-F, at the end of this part"
capstone_part_criterion: "The review contract was written before delegation."
portfolio_milestone: "A. Manager"
last_verified: 2026-10-04
sources:
  - id: claude-pricing
    title: "Plans and Pricing (Claude, verified 2026-10-04)"
    resource: https://claude.com/pricing
  - id: chatgpt-pricing
    title: "Pricing (ChatGPT, verified 2026-10-04)"
    resource: https://chatgpt.com/pricing
  - id: anthropic-ccao-f-guide
    title: "Claude Certified Associate: Foundations Exam Guide, version 1.1 (Anthropic, effective December 7, 2026, verified 2026-11-19)"
    resource: https://cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1794946609/Claude_Certified_Associate_-_Foundations_Exam_Guide_Updated_Dec_7.pdf
  - id: agentfactory-pcao-f
    title: "Panaversity Certified Associate: Foundations (PCAO-F) (The AI Agent Factory, first edition, verified 2026-10-04)"
    resource: https://agentfactory1.panaversity.org/docs/certifications/pcao-f
  - id: anthropic-ai-fluency
    title: "AI Fluency: Key Terms (Rick Dakan, Joseph Feller and Anthropic, CC BY-NC-SA 4.0, verified 2026-10-06)"
    resource: https://www-cdn.anthropic.com/4396730ed190e691a3712cf2fd6bfe35509deca2.pdf
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!NOTE]
> **You are here: Part II. Managing AI Workers**
>
> | Journey | Where you are |
> | --- | --- |
> | Capability | In Claude and ChatGPT 2.0 you briefed whole jobs, checked them, and saw that permissions, not words, keep a job safe. In Part I you described an AI Worker as a role. This part teaches you to manage one, which means you brief it, set its authority, review its work, and own the knowledge it answers from. |
> | Certification | Prepares you for PCAO-F across all six CCAO-F domains, with Appendix C and its sample exam. Next exam: PCAO-F, at the end of this part. |
> | Economic | You can be trusted to delegate real work and check what comes back. That is portfolio milestone A, and the exit point for the everyday professional route. |
>
> - Portfolio artifact: the Part II capstone. It is made of a verified example of delegated work, its review contract, and a small governed KSoR (milestone A).
> - Who reads it: everyday professionals, builders and domain experts read all seven chapters in full. The enterprise and national leader route skips this part.
> - Domain experts: every chapter in Parts III to V has a status for you, such as "Read it in full" or "Co-build it" ([How to Use This Book](../how-to-use-this-book.md#if-you-are-a-domain-expert)). Each part's "You are here" panel names the chapters for each status.
> - Before you start: [Part I](../ai-worker-paradigm/overview.md). Each lab ships the files it starts from.
> - What comes next: routes divide. Everyday professionals: [Appendix C](../appendices/exams/associate-foundations/overview.md) and PCAO-F. Builders: [Part III](../building-ai-workers/overview.md). Domain experts and founders: your chapters in Part III, then a later part.

## What this part is about

> We have moved from the chatbot paradigm to the AI Worker paradigm. The winners will be the people, companies and countries that learn to manage, build, govern, deploy and export AI work.

Part II is about the first verb in that list, *manage*. It is also about the question every manager asks before handing over real work: *can I delegate this, and can I trust what comes back?*

Handing over the work is now the easy part. The hard part is everything around it. You need to say clearly what you want, decide what the worker may do alone, and give it the right knowledge. You also need to check a result you did not watch it produce. If you skip those steps, you get output that looks right but is not.

This is the judgment layer. It works the same way on Claude and on ChatGPT. Better models do not remove it, because more convincing output makes checking matter more, not less. You need no technical background, and you write no code.

## What you will be able to do

By the end of Part II you can:

- brief a task by its outcome, context, format and constraints, and name only the steps that must be followed
- write the checks before you delegate, and tell the difference between good output and output that only looks good
- set what a worker may observe, recommend, draft or execute, and when it must escalate
- keep context, memory, governed knowledge and live data separate, and own a small collection of governed knowledge
- decide when work should run on a schedule or a trigger, and govern work you did not start
- say when AI use is inappropriate, what data must stay out, and when a human must sign
- read a task record, the worker's record of the run, when something fails, and fix the brief, the inputs or the permissions

### The part capstone

Part II ends with one piece of work that uses all of this. You take a real accounts-payable task and write a Four-Part Brief for it. The worker must answer from your own KSoR (Knowledge System of Record), the governed knowledge you met in [Chapter 4](../ai-worker-paradigm/the-architecture-in-one-picture/ksor-knows.md) and build in [Chapter 8](context-memory-knowledge-and-state/configure-the-workspace.md#what-dave-approves-the-official-record). It must also stay inside the Authority Envelope, the exact limits of what it may do, which you set in [Chapter 7](the-authority-envelope/overview.md). Before you delegate, you write the review contract. Then you review the result against it and trace every claim. Each policy claim points to an approved concept. Each fact points to the task's inputs or its record. Each calculation can be redone by someone else. Each assumption is labeled as an assumption. You do the whole task in Claude, then repeat it in ChatGPT.

If you are applying the book to your own field, do the capstone on a real task from your role. The worker answers from five approved concepts in your field. If you do not yet have a role of your own, do the Brightline AP version. It counts in full as your Part II capstone.

The capstone is graded on the book's standard rubric, which has six criteria. Each criterion is scored Not yet (1), Meets (2) or Exceeds (3). Five of them are shared by every part: outcome, evidence, governance, portability and communication. The sixth is Part II's own: **the review contract was written before delegation.** To pass, you need at least Meets on every criterion and 14 or more of the 18 points. If you get Meets on every criterion, you score 12 points, so a pass also needs Exceeds on at least two criteria.

So a contract written after the run fails the capstone, even if the result is good. And under governance, a good answer fails if the worker reached it by an action its Authority Envelope did not allow.

The capstone, with its review contract and your KSoR, is your evidence for **portfolio milestone A, Manager.**

## Your role in the running project: knowledge owner

The running project is the accounts-payable (AP) Worker for **Brightline Wholesale Supply**, the company you met in [One job, start to finish](../claude-and-chatgpt-2/new-way-of-working/one-job.md). In Part I you wrote a Role Contract for that worker, or for a role in your own field. Each chapter of Part II fills in more of it, as [2.6](../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in) shows. By the end of [Chapter 11](when-the-worker-goes-wrong/overview.md), you can write the whole contract. In Part II you start managing the worker, and you learn a **knowledge owner's** work. At Brightline the knowledge owner is Dave, who approves each concept. Maria drafts and maintains the concepts, and in the labs you take her role.

A knowledge owner decides which policy and domain knowledge the worker may treat as approved. At Brightline, that means the AP policy: for example, the approval thresholds and the capitalization policy. In Chapter 8, you write five of those policies as approved concepts in a small KSoR. Each concept has an owner, an approval status, an approval date and an effective date. That record is the one authoritative source. The worker's answers about AP policy should come from it, not from the model's general knowledge or from a file someone uploaded last year.

You give the concepts to Claude and to ChatGPT as copies, through project knowledge or connectors, with no server and no code. When a policy changes, you change the KSoR once and refresh each copy ([8.3](context-memory-knowledge-and-state/configure-the-workspace.md)).

![On the left, your KSoR, the one authoritative source, holding five approved AP concepts, each marked with a version and an approval status, and each carrying an owner, status, version and date. Arrows labeled publish, refresh and verify version lead to a copy in Claude and a copy in ChatGPT, each in project knowledge or a connector and each noting the version it holds. A note reads: when a policy changes, update the KSoR, refresh both copies and record each version. A dashed path to a grayed-out live connection, marked Parts III to V, shows that later workers read the KSoR directly, with no copies.](img/part-2-ksor-source-and-copies.png)

*Figure II.1. One authoritative source, two copies. In Part II, you refresh the copies yourself. Parts III to V replace them with a live connection.*

The other half of the architecture, DSoR (the Data System of Record), stays a concept in this part. [Chapter 4](../ai-worker-paradigm/the-architecture-in-one-picture/dsor-acts.md) introduced it. [Chapter 7](the-authority-envelope/untrusted-input.md#the-control-that-checks-for-itself) returns to it with the Authority Envelope, so you know where the worker's power to act will be checked. The worker in Part II answers, drafts and recommends. It does not yet pay anyone.

![Six stages of the AP Worker's path through the book. Part I, describe it: a Role Contract draft. Part II, manage it: briefs, a review contract and five KSoR concepts, marked You are here. Part III, build it: the plugin with its connector, a hosted agent and a self-hosted runtime. Part IV, run it: traces, evals, guardrails and a runbook, for a production service. Part V, govern it: a served KSoR, DSoR stages, one traced transaction and a pilot package. Part VI, sell it: deployed for a client and written up as a case.](img/part-2-ap-worker-path.png)

*Figure II.2. The AP Worker's path through the book. Most labs keep the same company and role, so each part adds to what you made before.*

## The seven chapters

Chapters [5](the-four-part-brief/overview.md) to [8](context-memory-knowledge-and-state/overview.md) cover what you set before the worker starts: the brief, the checks, the boundary and the knowledge. You set these in the first 10 percent of the rhythm from [Chapter 3](../ai-worker-paradigm/the-10-80-10-operating-rhythm/first-10-percent.md). Chapters [9](work-that-runs-without-you/overview.md) and [10](governance-and-responsible-use/overview.md) widen the view from one task to ongoing work and to company rules. [Chapter 11](when-the-worker-goes-wrong/overview.md) covers what to do when the worker goes wrong.

| Chapter | What it teaches | What you make |
| --- | --- | --- |
| [5. The Four-Part Brief](the-four-part-brief/overview.md) | Brief the outcome and any required steps or controls, and leave the rest of the method to the worker. Name the governed source in the context. Break big requests down, iterate, and choose the output format | One AP brief, run in Claude and in ChatGPT, with the two results compared |
| [6. The Review Contract](the-review-contract/overview.md) | Agree on the checks before you delegate. Find hallucination, inconsistency and bias. Check the numbers a decision depends on. An answer that cites nothing is a warning | A review contract for an AP task, written before the task runs |
| [7. The Authority Envelope](the-authority-envelope/overview.md) | Four rungs of authority: observe, recommend, draft and execute, with escalation open at every rung. The worker escalates whenever it reaches a limit, an exception or real doubt. Permissions set the blast radius, the worst damage a wrong action can do. Untrusted input together with the power to act is a risk. Keep the two apart. The clerk analogy for DSoR | The AP Worker's Authority Envelope, added to your Role Contract |
| [8. Context, Memory, Knowledge and State](context-memory-knowledge-and-state/overview.md) | Context is what the worker sees now. Memory is what it remembers. KSoR is what is officially true. SSoR (the State System of Record) tracks where each piece of work stands. When to restart, summarize or persist | Your first KSoR: five approved AP concepts, loaded into a project on Claude or ChatGPT |
| [9. Work That Runs Without You](work-that-runs-without-you/overview.md) | Is this an agent problem at all? Scheduled and triggered work. Standing workers, and how to govern initiative you did not ask for | Draft 6 of the AP Worker's Role Contract: two recurring jobs, each with its trigger, its inputs, its limits and who checks it |
| [10. Governance and Responsible Use](governance-and-responsible-use/overview.md) | Appropriate and inappropriate uses. Data sensitivity, regulation and privacy. Company policy and ethics. Who owns, approves and removes knowledge. When a human must sign | Owners and takedown records for your knowledge, a Governance Record that says when to re-check, and the points where a human must sign |
| [11. When the Worker Goes Wrong](when-the-worker-goes-wrong/overview.md) | Read the task record. Common failure patterns. Usage limits. Fix the brief, the inputs or the permissions, and improve the workflow from feedback | A failed task diagnosed from its record, with the fix and the rerun |

Accounts payable is the one full example. Short contrast boxes in Chapters 7 and 8 show the same ideas in compliance research and in customer support.

![Four boxes for Chapters 8, 5, 6 and 7, labeled your KSoR, the Four-Part Brief, the review contract and the Authority Envelope, all set before the worker starts. They feed one run in Claude, repeated in ChatGPT, which is then reviewed against the contract with every claim traced to a source. The result is the evidence for portfolio milestone A.](img/part-2-capstone-assembly.png)

*Figure II.3. How the Part II capstone is assembled. The knowledge and the checks come first. The run comes second, and the review comes third. The worker must stay inside the Authority Envelope during the run, and the rubric checks this under the governance criterion.*

### The 4Ds in this part

Each chapter in this part deepens one of the 4Ds ([0.3.2](../how-ai-works/ai-fluency/the-four-ds.md)).[^anthropic-ai-fluency]

| The D | Deepened in |
| --- | --- |
| Delegation | Chapters 7 and 9 |
| Description | Chapters 5 and 8 |
| Discernment | Chapters 6 and 11 |
| Diligence | Chapter 10 |

## What you need

- **Both AI vendors, if you can.** With only one account, you can still pass the capstone. Instead of the second run, write a short transfer plan. It lists the inputs, instructions, permissions and checks the other AI vendor would need. Mark it as planned, not tested.
- **Plans.** In Part II, many readers move to a paid plan with at least one AI vendor. This is because features such as scheduled work[^claude-pricing] and longer tasks are often available on paid plans first.[^chatgpt-pricing] Each lab says what it needs, so check before you start.
- **Screencasts.** Short videos, called screencasts, show Part II's hands-on steps on both AI vendors. Each one shows its date.

## How Part II prepares you for PCAO-F

Together, Parts I and II teach every CCAO-F domain and the matching OpenAI competencies. Appendix C, described below, brings the exam preparation together. Take PCAO-F when you have finished Chapter 11.

**On the Anthropic side,** Part II covers four CCAO-F domains and completes the other two, Domains 3 and 5, which Part I started. The heaviest domain is output evaluation and quality control, at 20 percent.[^anthropic-ccao-f-guide] Its main chapter is Chapter 6. The figure below shows each domain's main chapter.

**On the OpenAI side,** Part II covers the rest of the everyday-use competencies in the book's OpenAI competency map. They range from briefing a ChatGPT task to troubleshooting usage limits. [Part I](../ai-worker-paradigm/overview.md) covered the first two, and says how the map is built.

![The six CCAO-F domains, each with its main chapters: D1 Chapters 5 and 11, D2 Chapters 6 and 5, D3 Chapters 2 and 8, D4 Chapters 9 and 7, D5 Chapters 8 and 11, D6 Chapters 10 and 7. D2 is highlighted as the heaviest, at 20 percent. A separate row shows the OpenAI competencies OAI.1.3 to OAI.1.10 from Chapters 5 to 11. All arrows lead to one exam, PCAO-F, with depth in the Associate companion, and CCAO-F after it through the FDE Internship Program or a Claude Partner Network member.](img/part-2-pcao-f-map.png)

*Figure II.4. How Part II feeds PCAO-F.*

PCAO-F tests the Anthropic exam guide and current practice on both AI vendors.[^agentfactory-pcao-f] Where the two differ, each lab's exam notes say so.

[Appendix C](../appendices/exams/associate-foundations/overview.md) shows where the book teaches every CCAO-F objective, and its [sample exam](../appendices/exams/associate-foundations/sample-exam.md) gives you 70 questions against the clock, with a score for each domain. Passing PCAO-F earns your first Panaversity certification. How it leads on to the [FDE](../from-skills-to-income/overview.md) Internship Program and to the official CCAO-F exam is on the [certification map](../certification-and-portfolio-roadmaps.md#the-certification-map).

## How to read this part

Read the chapters in order. Each one builds on the one before, and the capstone needs all seven. Do each lab when you reach it, because the capstone is assembled from them. Write the review contract before you run the task, every time. That habit is what this part teaches. If you get stuck, ask Zia Tutor AI.

[^claude-pricing]: Plans and Pricing, Claude.
[^chatgpt-pricing]: Pricing, ChatGPT.
[^anthropic-ccao-f-guide]: Claude Certified Associate: Foundations Exam Guide, version 1.1, Anthropic, effective December 7, 2026.
[^agentfactory-pcao-f]: Panaversity Certified Associate: Foundations (PCAO-F), The AI Agent Factory, first edition.
[^anthropic-ai-fluency]: AI Fluency: Key Terms, Rick Dakan, Joseph Feller and Anthropic.



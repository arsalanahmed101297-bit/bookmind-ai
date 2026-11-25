# Part I. The AI Worker Paradigm (/ai-worker-paradigm/overview)

---
type: Document
title: "Part I. The AI Worker Paradigm"
description: "What Part I teaches about AI Workers, the Role Contract you write across its four chapters, and what you need to start."
status: stable
order: 100
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
part: I
expert_status: required
objectives: []
word_budget: null
prerequisites: [ "F2" ]
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: []
chapters: [ "01", "02", "03", "04" ]
running_project: "The AP Worker at Brightline Wholesale Supply"
alignment:
  anthropic: "Foundations for CCAO-F Domains 3 and 5, and supporting work in Domains 1, 2, 4 and 6"
  openai_competencies: [ OAI.1.1, OAI.1.2 ]
next_exam: "PCAO-F, after Part II"
last_verified: 2026-10-03
sources:
  - id: anthropic-one-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 16 September 2026, verified 2026-10-03)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: openai-chatgpt-work
    title: "ChatGPT is now a partner for your most ambitious work (OpenAI, 9 July 2026, verified 2026-10-03)"
    resource: https://openai.com/index/chatgpt-for-your-most-ambitious-work/
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-10-03)"
    resource: https://openai.com/index/introducing-dots/
  - id: claude-pricing
    title: "Plans and Pricing (Claude, verified 2026-10-03)"
    resource: https://claude.com/pricing
  - id: chatgpt-pricing
    title: "Pricing (ChatGPT, verified 2026-10-03)"
    resource: https://chatgpt.com/pricing
  - id: anthropic-ccao-f-guide
    title: "Claude Certified Associate: Foundations Exam Guide, version 1.1 (Anthropic, effective December 7, 2026, verified 2026-11-19)"
    resource: https://cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1794946609/Claude_Certified_Associate_-_Foundations_Exam_Guide_Updated_Dec_7.pdf
  - id: agentfactory-pcao-f
    title: "Panaversity Certified Associate: Foundations (PCAO-F) (The AI Agent Factory, first edition, verified 2026-10-02)"
    resource: https://agentfactory1.panaversity.org/docs/certifications/pcao-f
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!NOTE]
> **You are here: Part I. The AI Worker Paradigm**
>
> | Journey | Where you are |
> | --- | --- |
> | Capability | In Claude and ChatGPT 2.0 you handed whole jobs to an AI and checked what came back. This part teaches you to see an AI Worker as a role you manage, and to describe one. |
> | Certification | No credential yet. This part builds foundations for PCAO-F, the Panaversity exam you take after Part II. |
> | Economic | You can describe one role in your field that an AI Worker could own. That is the first step on every economic route. |
>
> - Portfolio artifact: a one-page Role Contract draft, for a role in your own field or for Brightline's AP Worker. It counts toward milestone B, which Part III completes.
> - Who reads it: every route reads all four chapters in full.
> - Before you start: [Claude and ChatGPT 2.0](../claude-and-chatgpt-2/overview.md), where you met Brightline and its Friday payment run. Then [Part 0](../how-ai-works/overview.md), which is optional only on the leader route.
> - What comes next: Part II teaches you to manage an AI Worker, which means you brief it, review its work, and set its authority.

## What this part is about

Behind the same text box,[^anthropic-one-claude] an AI system can now take a task, work on it for hours, and hand back a finished result.[^openai-chatgpt-work] Some products can hold a role and do the same work every week.[^openai-dots] So the skill you need is no longer only to write good questions. You hand over work, set limits on it, and check what comes back. In other words, you manage.

You have already done this in Claude and ChatGPT 2.0. You handed Brightline's payment run to an AI in one brief. That was your first step toward an AI Worker, and Nisha's cases took the same skill further. Part I gives you the ideas behind that work. It explains what changed behind the text box and what an AI Worker actually is. It also explains the rhythm that every piece of delegated work follows, and the architecture that keeps a worker trustworthy. It is written for everyone. You need no technical background.

## What you will be able to do

By the end of Part I you can:

- explain what changed behind the AI text box between 2023 and 2026
- tell the difference between an agent and an AI Worker, and between an AI Worker and an assistant or an automation (here, fixed steps written in advance that run the same way every time)
- describe any piece of AI work in three parts: setting the intent, letting the worker execute, and verifying the outcome
- name the layers of a governed AI Worker, and say which knowledge, policies and records your company must own and control
- write a one-page Role Contract

The Role Contract is the artifact you make in this part. It describes one role an AI Worker could take on: its mission, responsibilities, authority, tools, knowledge and accountable human owner. Later parts build on it.

## The running project

The book's main example follows one AI Worker from its first idea to production, where it does real work. It is an accounts-payable (AP) Worker for **Brightline Wholesale Supply**, the company you met in [One job, start to finish](../claude-and-chatgpt-2/new-way-of-working/one-job.md). The worker takes on the invoices Brightline receives every week: it records them, checks them for duplicates and errors, and prepares them for payment.

Brightline is an example to follow. Use it to see how each step is done, then do the same for a role in your own field: a claims processor, a recruiter, a compliance analyst, or whatever work you know best. Most labs use the same company and the same role, so each part adds to what you made before.

![Three stages left to right: Part I, Understand, marked You are here, where you study the AP work and write the Role Contract. Then Part II, Manage, where you brief, review and set authority, then take PCAO-F. Then the later parts, where you build, govern and ship the same AP Worker.](img/part-1-path.png)

*Figure I.1. The AP Worker's path through the book.*

## The four chapters

| Chapter | What it teaches | What you make |
| --- | --- | --- |
| [1. From Chatbots to AI Workers](from-chatbots-to-ai-workers/overview.md) | The ladder of interaction, where AI work runs and where its results are kept, and how to read a product announcement | Five checked briefs, run on both AI vendors or on one with a predicted port, and the six AP jobs placed on the ladder |
| [2. What Is an AI Worker?](what-is-an-ai-worker/overview.md) | The anatomy of an AI Worker, and how it differs from a model, an agent, an assistant and an automation | The first Role Contract draft |
| [3. The 10-80-10 Operating Rhythm](the-10-80-10-operating-rhythm/overview.md) | Set the intent, let the worker execute, verify the outcome. The three ways it goes wrong | Your Role Contract, refined with its review checks |
| [4. The Architecture in One Picture](the-architecture-in-one-picture/overview.md) | The layers of a governed AI Worker: what knows, what remembers, what tracks where the work stands, what acts, what executes and what connects. Which layers you rent, and which knowledge, policies, state and records you own | Your Role Contract, refined with its knowledge and state named |

![Four boxes left to right, from the AP work to a defined AI Worker role. Chapter 1, the six AP jobs placed on the ladder. Chapter 2, the first Role Contract draft. Chapter 3, the Role Contract refined with its review checks. Chapter 4, highlighted, the Role Contract refined with its knowledge sources and where state is kept.](img/part-1-role-contract.png)

*Figure I.2. The Role Contract across Chapters 1 to 4.*

## What you need

- **To start: one AI vendor.** An account with either of the two AI vendors this book covers, Anthropic or OpenAI, is enough to start and to finish each lab.
- **For the full comparison: both AI vendors.** Most labs run the work on one AI vendor and then port it to the other. With only one account, you write the port as a prediction. Each lab says what counts as finished on that path.
- **Plans.** Free plans[^claude-pricing] are enough to start.[^chatgpt-pricing] Some newer features are available on paid plans first.[^anthropic-one-claude] Each lab says what it needs.
- **The lab folders.** Each lab comes as a zip file from the [Labs companion](https://github.com/panaversity/agentfactory-v2-resources). It holds the data, templates, step-by-step instructions, troubleshooting and an answer key.

## How Part I prepares you for the exams

Part I builds foundations. It does not finish any exam topic on its own.

- **On the Anthropic side,** it prepares you for parts of two CCAO-F domains: Capability, Model, and Context Selection (Domain 3), and Configuration and Knowledge Management (Domain 5).[^anthropic-ccao-f-guide] Part II completes both. Chapter 3 also starts on parts of Domains 1, 2, 4 and 6, which Part II covers.
- **On the OpenAI side,** it covers the first two competencies in the book's OpenAI competency map. The first is choosing among a ChatGPT conversation, dots and Space (Chapters 1 and 2). The second is choosing a model and reasoning effort (Chapter 2). OpenAI publishes no exam guide this book can follow, so the book builds this map from OpenAI's documentation.

![Two sources on the left, the Anthropic exam guide with CCAO-F Domains 3 and 5, and the OpenAI competency map with its first two competencies, both feed Part I, which lays the foundations. Part I leads to Part II, which completes both domains, and then to the highlighted PCAO-F exam, which tests the exam guide and current practice on both vendors.](img/part-1-exam.png)

*Figure I.3. How Part I feeds PCAO-F.*

PCAO-F tests two things: the Anthropic exam guide, and current practice on both AI vendors.[^agentfactory-pcao-f] Where the exam guide expects a different answer from current practice, the chapter's lab ends with exam notes that say what the guide expects. Learn both.

## How to read this part

Read the chapters in order. Each one uses ideas from the one before. Do each lab when you reach it, because your Role Contract grows from the labs. If you get stuck, ask Zia Tutor AI. It is built on this book, and it can explain this part's concepts and quiz you on them.

[^anthropic-one-claude]: Claude Cowork and chat are one Claude, Claude Help Center, updated 16 September 2026.
[^openai-chatgpt-work]: ChatGPT is now a partner for your most ambitious work, OpenAI, 9 July 2026.
[^openai-dots]: Introducing dots, OpenAI, 29 September 2026.
[^claude-pricing]: Plans and Pricing, Claude.
[^chatgpt-pricing]: Pricing, ChatGPT.
[^anthropic-ccao-f-guide]: Claude Certified Associate: Foundations Exam Guide, version 1.1, Anthropic, effective December 7, 2026.
[^agentfactory-pcao-f]: Panaversity Certified Associate: Foundations (PCAO-F), The AI Agent Factory, first edition.



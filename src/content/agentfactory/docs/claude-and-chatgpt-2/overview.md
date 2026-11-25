# Claude and ChatGPT 2.0 (/claude-and-chatgpt-2/overview)

---
type: Document
title: "Claude and ChatGPT 2.0"
description: "The first page of the book: what this section gives you, first for your own work and then as a foundation for Forward Deployed Engineer work, what an AI Worker is, what \"2.0\" means here, and the sections that follow."
status: stable
order: 0.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "What changed" ]
last_verified: 2026-11-12
review_by: 2026-12-12
sources:
  - id: name
    title: "Video walkthrough of the new Claude desktop app (YouTube, verified 2026-11-05)"
    resource: https://www.youtube.com/watch?v=tM0dwXhOv2o
  - id: cases
    title: "A Century of Cases: Harvard Marks 100th Birthday of the Case Method (Poets&Quants, verified 2026-11-11)"
    resource: https://poetsandquants.com/2022/04/13/a-century-of-cases-harvard-marks-100th-birthday-of-the-case-method/
  - id: finance-agents
    title: "Agents for financial services (Anthropic, May 5, 2026, verified 2026-11-12)"
    resource: https://www.anthropic.com/news/finance-agents
  - id: anthropic-services
    title: "Building a new enterprise AI services company with Blackstone, Hellman & Friedman, and Goldman Sachs (Anthropic, May 4, 2026, verified 2026-11-12)"
    resource: https://www.anthropic.com/news/enterprise-ai-services-company
  - id: openai-deployco
    title: "OpenAI launches the OpenAI Deployment Company (OpenAI, May 11, 2026, verified 2026-11-12)"
    resource: https://openai.com/index/openai-launches-the-deployment-company/
  - id: health
    title: "Introducing OpenAI for Healthcare (OpenAI, January 8, 2026, verified 2026-11-12)"
    resource: https://openai.com/index/openai-for-healthcare/
  - id: research
    title: "Introducing GPT-Rosalind for life sciences research (OpenAI, April 16, 2026, verified 2026-11-12)"
    resource: https://openai.com/index/introducing-gpt-rosalind/
  - id: security
    title: "OpenAI unveils Codex Security to automate code security reviews (Axios, March 6, 2026, verified 2026-11-12)"
    resource: https://www.axios.com/2026/03/06/openai-codex-security-ai-cyber
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Work better with AI every day, and build the foundation to do this work for clients.*

Welcome to *The AI Agent Factory*. Until now, most people asked an AI a question and read its answer. Now you can hand it a whole job. This book teaches you to do that well.

Handing an AI system a whole job, inside limits you set, is the first step toward an **AI Worker**. You hand it over the way you would hand a job to a skilled coworker. It does the work, and you check what comes back. An AI Worker goes one step further: it holds a role, and does that work again and again. Many people call all of this an AI agent, and the title of this book does too. The [Preface](../preface.md) explains the names.

Here is an example of a whole job: *"Read these 40 invoices, find the ones that do not match the bank statement, and write me a one-page summary."* A limit might be: the AI may read the files, but it may not send any email.

This first section of the book is called *Claude and ChatGPT 2.0*. The "2.0" is this book's nickname for that change, from asking questions to handing over whole jobs. It is not an official product name.[^name]

We start with the new [Claude](https://claude.com/download) and [ChatGPT](https://chatgpt.com/download/) desktop apps, the programs you install on your computer. For both, this book uses the desktop app, not the website or the phone app. We put this section first for a reason: we want you using these apps on real work from your first day. The later parts of the book explain how and why AI Workers work, and teach you to build your own.

## What this section gives you

This section gives you two things.

- **First, for yourself.** You learn to use AI well in your everyday work, as a **knowledge worker**: a person who works with information, such as an accountant, an analyst or a manager.
- **Then, for clients.** You build the foundation to set up this way of working for other people, as a **Forward Deployed Engineer (FDE)**. An FDE goes into a company, finds a real business problem, and builds an AI Worker to solve it, inside clear limits. [From Skills to Income](../from-skills-to-income/overview.md) shows this route and the others.

By the end, you can hand an AI a whole job, set its limits, and check what comes back.

It is one foundation with two uses. The skill is the same. What changes is who the work is for, and how much a mistake costs.

### How do you learn it?

This section ends with four cases. A **case** is the story of one person doing a real job: a goal, some limits, and a decision to make. You decide what you would do. Then you try it in a **lab**, a guided exercise you do yourself, and see whether your decision works. The other pages in this section teach you the features. The cases teach you **judgment**: deciding well when no rule gives you the answer. So do not skip them. Business schools have taught through cases for more than a hundred years, because judgment grows with practice.[^cases]

All four cases follow one person, Nisha. She is an accountant, not an FDE. But in each case her job gets bigger and a mistake costs more. That is the road toward FDE work.

![One foundation, two uses. Nisha's four cases as four steps, climbing from her own work to a client's monthly job, and you do each step with her. Case 1, for herself: two AI tools for her own work. Case 2, for her first client: an AI Worker does a client's job overnight. Case 3, for her firm's clients: three people share one AI Worker. Case 4, for a client, every month: one setup for a client's monthly job. A bracket under the steps marks Case 1 as like your own work and Cases 2 to 4 as like work for clients. Under it, an arrow runs from knowledge work toward FDE work, labelled a mistake costs more at each step. A band at the foot says the skill stays the same: hand over the job, set limits, check the work.](img/one-foundation-two-uses.png)

### What do you need?

A Mac or Windows computer, and free Claude and ChatGPT accounts. You need no programming. The programming comes later in the book. Some of the labs work best on a paid plan. Those labs also give you steps for a free account.

### Why now?

Anthropic makes Claude, and OpenAI makes ChatGPT. Each has started a company whose engineers set up AI for clients,[^anthropic-services] and OpenAI calls its engineers Forward Deployed Engineers.[^openai-deployco] Both also build AI tools for finance,[^finance-agents] health care,[^health] research[^research] and security.[^security] What would it look like in your field?

## In this section

Read these in order. Two of them are optional. For a map of the whole book, see [How to Use This Book](../how-to-use-this-book.md).

- [The New Way of Working](new-way-of-working/overview.md): what has changed, one job from start to finish, and what stays your responsibility. It ends with a practice lab you can do on a free account.
- [Tour of the Apps](tour/overview.md): each feature of both apps, side by side. It is optional. Skim it now, or come back when a page uses a feature.
- [Behind the Screen](behind-the-screen/overview.md): what happens while an AI Worker does a job, and what keeps the job safe.
- [Build Something](build-something/overview.md): how to make documents, slides, sheets and other finished pieces of work in both apps, and where Claude saves them. Do it before the cases.
- [The Architecture](architecture/overview.md): how the apps are built, the evidence behind them, and what a business must add. It is optional and more technical.
- [Case 1: Nisha's AI Team](case-1-nishas-ai-team/overview.md): a case study of an accountant who manages two AI tools to plan a book in one evening, with a lab that takes her method further.
- [Case 2: Nisha's First Client](case-2-nishas-first-client/overview.md): a case study of her first paid job, run with an AI Worker that works overnight, with a lab where you build the same worker.
- [Case 3: Nisha's Firm](case-3-nishas-firm/overview.md): a case study of her firm of three, with one AI Worker in the firm's team chat that all of them can ask, and a lab where you test who can make it send a file to a client.
- [Case 4: Nisha's Month-End](case-4-nishas-month-end/overview.md): a case study of a monthly report that took two days by hand. The firm joins the features it already uses into one setup, with a lab where you build it, and the final assessment for this whole section.

[^name]: The name comes from a video walkthrough of the new Claude desktop app, which quotes one of the engineers who worked on Claude Code calling it "basically a Claude 2.0" (https://www.youtube.com/watch?v=tM0dwXhOv2o). Applying it to both apps is this book's own choice.

[^cases]: Harvard Business School began teaching with cases in the early 1920s. Its MBA students now read more than 500 cases in their two years (https://poetsandquants.com/2022/04/13/a-century-of-cases-harvard-marks-100th-birthday-of-the-case-method/).

[^finance-agents]: Anthropic says: "We're releasing ten ready-to-run agent templates for the most time-consuming work in financial services." Each one "ships as a plugin in Claude Cowork and Claude Code, and as a cookbook for Claude Managed Agents". One is a "Month-end closer", which "runs the close checklist, prepares journal entries, and produces close reports". Agents for financial services, May 5, 2026 (https://www.anthropic.com/news/finance-agents).

[^anthropic-services]: Anthropic says the new company "will work with mid-sized companies across sectors" and that "Applied AI engineers from Anthropic will work alongside the firm's engineering team". Building a new enterprise AI services company with Blackstone, Hellman & Friedman, and Goldman Sachs, May 4, 2026 (https://www.anthropic.com/news/enterprise-ai-services-company).

[^openai-deployco]: OpenAI says the company will "embed engineers specialized in frontier AI deployment, known as Forward Deployed Engineers, or FDEs, into organizations". OpenAI launches the OpenAI Deployment Company, May 11, 2026 (https://openai.com/index/openai-launches-the-deployment-company/).

[^health]: OpenAI announced OpenAI for Healthcare, for hospitals and other care providers, on January 8, 2026 (https://openai.com/index/openai-for-healthcare/). Anthropic announced Claude for Healthcare a few days later (https://www.fiercehealthcare.com/ai-and-machine-learning/jpm26-anthropic-launches-claude-healthcare-targeting-health-systems-payers).

[^research]: Anthropic announced Claude for Life Sciences on October 20, 2025 (https://www.anthropic.com/news/claude-for-life-sciences). OpenAI announced GPT-Rosalind, a model for biology and drug research, on April 16, 2026 (https://openai.com/index/introducing-gpt-rosalind/).

[^security]: Anthropic introduced Claude Code Security in February 2026, and OpenAI introduced Codex Security on March 6, 2026. Both look for weak points in software and suggest fixes. OpenAI unveils Codex Security to automate code security reviews, Axios, March 6, 2026 (https://www.axios.com/2026/03/06/openai-codex-security-ai-cyber).



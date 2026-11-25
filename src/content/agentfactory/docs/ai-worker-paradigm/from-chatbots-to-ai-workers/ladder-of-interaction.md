# 1.1 The ladder of interaction (/ai-worker-paradigm/from-chatbots-to-ai-workers/ladder-of-interaction)

---
type: Document
title: "1.1 The ladder of interaction"
description: "The four rungs of the ladder of interaction, from search engines to AI Workers, and why each rung up needs more control."
status: stable
order: 101.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "01"
part: I
expert_status: required
concepts: [ "1.1" ]
last_verified: 2026-10-03
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You look up pizza places near you (a query). You text a friend, "Which one is good?" (a message). You ask your roommate to order and pick it up (a task). You put one person in charge of Friday dinners for the house every week (a role).

The [Preface](../../preface.md) gave the ladder of interaction in one line:

> Search engines are queried. Chatbots are prompted. Agents are delegated tasks. AI Workers are managed.

This lesson takes it one rung at a time.

## What do you hand over on each rung?

Each rung has its own unit of interaction: the thing you hand over and the thing you get back. When the unit changes, the skill you need changes with it.

| Rung | You hand over | You get back | Who does the work |
| --- | --- | --- | --- |
| **Search engine** | A query | A list of links | You read, judge and act |
| **Chatbot** | A message | A reply | You copy, check and finish the job |
| **Agent** | A task | A finished output | The agent works, you review |
| **AI Worker** | A role | Recurring results, with evidence | The worker works, you manage |

**At work.** An accounts payable (AP) clerk searches a vendor's website and asks a chatbot what an invoice due date is. Next, the clerk delegates one invoice register to an agent. Finally, the clerk manages an AP Worker that builds the register every week. One register is a task. A register every week is a role.

The cases in [Claude and ChatGPT 2.0](../../claude-and-chatgpt-2/overview.md) climbed steps of their own: a helper, a personal AI Worker, a team AI Worker. Those were everyday names for steps up this same ladder. [Chapter 2](../what-is-an-ai-worker/overview.md) gives the exact test for what makes one an AI Worker.

Beyond the four rungs, an **AI Workforce** is several AI Workers composed under human management. Part V teaches it.

## How is an agent different from an AI Worker?

An **agent** is the technical mechanism: a model in a loop with tools ([0.1.3](../../how-ai-works/what-ai-actually-is/from-predictor-to-worker.md#tools-and-the-loop)). It plans, acts, checks the result and acts again. An **AI Worker** is a business definition: an AI that holds a job, with an owner and limits. In full, it is a role-based AI system with identity, responsibilities, procedures (skills), knowledge access, tools, bounded authority, channels, evaluation criteria, and enough continuity to do recurring work. [Chapter 2](../what-is-an-ai-worker/anatomy-of-an-ai-worker.md) explains each of these parts.

The two are easy to confuse. A single delegated task shows agentic execution. It becomes the work of an AI Worker only when it is done inside a defined role, with responsibilities, authority and an accountable owner. An agent may be part of an AI Worker. Not every agent is one.

## Why does each rung up need more control?

Each rung up moves more of the work away from you. It also needs more control, because you hand over more authority and watch less of what happens. A search result needs your judgment, but the search engine acts on nothing. A role acts for you again and again, so it needs management. That is why the book's operating rule is: *Humans define intent. AI Workers execute. Humans verify outcomes.*

![Four rungs rising left to right: search engine, chatbot, agent and AI Worker, each with what you hand over and get back. More work handed over means more control.](img/ladder.png)

*Figure 1.1. The ladder of interaction.*



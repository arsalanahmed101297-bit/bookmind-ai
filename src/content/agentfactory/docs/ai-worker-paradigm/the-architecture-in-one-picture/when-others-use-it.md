# 4.10 What changes when others use the worker? (/ai-worker-paradigm/the-architecture-in-one-picture/when-others-use-it)

---
type: Document
title: "4.10 What changes when others use the worker?"
description: "What changes when a team or another company starts to use a worker, and what must carry across unchanged."
status: stable
order: 104.87
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.10" ]
sources:
  - id: openai-workspace-agents
    title: "Introducing workspace agents in ChatGPT (OpenAI, verified 2026-11-21)"
    resource: https://openai.com/index/introducing-workspace-agents-in-chatgpt/
  - id: openai-specialist-dots
    title: "Introducing dots, specialist dots (OpenAI, 29 September 2026, verified 2026-11-21)"
    resource: https://openai.com/index/introducing-dots/
  - id: openai-changelog
    title: "Changelog, entry of 10 September 2026 (OpenAI developer docs, verified 2026-11-21)"
    resource: https://developers.openai.com/api/docs/changelog
  - id: anthropic-agent-sdk
    title: "Agent SDK overview (Claude Code docs, verified 2026-11-18)"
    resource: https://code.claude.com/docs/en/agent-sdk/overview
  - id: openai-agents-sdk-guide
    title: "Agents SDK (OpenAI developer docs, verified 2026-11-21)"
    resource: https://developers.openai.com/api/docs/guides/agents/sdk
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You drive your own car to work. One day the office asks you to drive the team in the company van. Later a taxi firm offers to pay you to drive strangers. You are the same driver, with the same skills. What changes is the vehicle, whose name is on the insurance, who you drive for, and who answers when something goes wrong.

**What you will learn.** What changes and what must not when others start to use a worker, the three choices behind every move, what another company needs, and how to tell that a worker has outgrown where it runs. You practice it in Task 6 of [the lab](lab.md).

**Why it matters.** A worker that helps one person is easy to move. A worker that a team relies on, or that another company uses, has more to lose. If it runs under one person's login, it stops when that person leaves. If outsiders' questions land in your records, their data mixes with yours. And if nobody wrote down who answers for the worker, nobody does.

Until now, every run in this chapter worked for one person, Dave, under Maria's login, in her project. The swap test in [4.6](rented-and-owned.md) moved the worker sideways, to another AI vendor. This page moves it up, to a team and to another company. [Chapter 2](../what-is-an-ai-worker/worker-runtime-channel.md) said that if you add a channel, the worker's authority must not grow.

### What did two people ask on Friday afternoon?

Friday, October 16, was the day IT asked whether the worker could move to the other AI vendor. Two more questions came that afternoon.

- **2:10 p.m.** Sam Ortiz in Purchasing wrote in the team chat. Could he ask the worker about his vendors' invoices himself? His first question was whether Midwest Packaging's $7,800 invoice needed approval.
- **2:40 p.m.** Lakeshore Janitorial emailed the AP inbox. Its office wanted a page where it could check its own invoices, such as 5102, without waiting for a reply. Maria forwarded the email to Dave. Could the worker answer vendors directly?

At 4:00 p.m., Dave ran the swap test again, on paper. This time he did not replace the AI vendor. He moved the worker up.

### What changes when others use it?

Figure 4.8 shows four things, and the table lists them.

| | Just Dave | The team | Another company |
| --- | --- | --- | --- |
| Who it acts for | Dave | Still Dave, its one principal. The team may ask it for things | Still Dave. Outsiders may ask about their own matters |
| Whose identity it uses | Maria's login | A login or key of its own | Its own, with a separate view for each company |
| Where it runs | The AI vendor's app, in Maria's project | The same, or a runtime the team controls | A runtime that runs without anyone's account, so it keeps going if Maria leaves |
| Who answers for it | Dave | Dave, as its owner | Brightline, under its terms with each company |

Acting under Maria's login falls short of the rule in [1.6](../from-chatbots-to-ai-workers/paradigm-and-products.md): a worker that does a business process needs an identity of its own. The move to the team should close that gap.

For the team, the change is small. A team changes who can ask the worker for things, not who it works for ([9.6](../../managing-ai-workers/work-that-runs-without-you/shared-room.md)). So Dave writes rows in the Role Contract that say who may ask for what. IT should issue the worker a login or key of its own, as [4.5](dsor-acts.md) describes, so its actions are no longer recorded as Maria's. (At Brightline the team arrives first: in 9.6, the worker still runs under her login.) Sam's question would get a cited answer: the invoice is over $5,000, so it needs Dave's approval under policy version 3. The case file would record that Sam asked. Sam cannot approve the invoice, and neither can the worker.

For another company, the change is larger. It comes after the next two sections.

### What must not change?

What Brightline owns carries across unchanged: the carry list from [4.6](rented-and-owned.md), from the Role Contract to the evaluations, as the band below the dashed line in Figure 4.8 shows.

The swap test works upward too. Dave wrote his two lists for the team. The rebuild list was short: the channel, the worker's own login, and the rows on who may ask, which the move adds to the Role Contract. Everything else carried across. Then Dave reruns the same evaluation cases. Passing them proves that nothing was lost in the move.

![One worker, as others start to use it. Three things change. Who it acts for stays. What Brightline owns carries across. Three panels sit left to right. Just Dave: it acts for Dave, uses Maria's login, runs in the AI vendor's app in Maria's project, and Dave answers for it. An arrow, someone else needs it, leads to the team. There it still acts for Dave, and the team may ask it for things. It has a login or key of its own. It runs in the same place, or in a runtime the team controls. Dave answers for it, as its owner. An arrow, another company uses it, leads to the last panel. There it still acts for Dave, and outsiders may ask about their own matters. It has its own identity, with a separate view for each company. It runs in a runtime that runs without anyone's account. Brightline answers for it, under its terms with each company. Below a dashed line, one band carries across, unchanged: the Role Contract, KSoR, SSoR, DSoR and the evaluations. The bar at the foot says the swap test works upward too: write the two lists, then rerun the same evaluation cases.](img/when-others-use-it.png)

*Figure 4.8. One worker, as others start to use it.*

### What are the three choices behind every move?

Behind every move are three separate choices.

- **Who does it serve?** You, a team, or another company.
- **How does it work?** As a Delegated or a Standing AI Worker ([2.1](../what-is-an-ai-worker/anatomy-of-an-ai-worker.md)). A schedule is only a trigger, not a kind of worker. Brightline's AP Worker is a Standing one.
- **Where does it run?** On one of four kinds of runtime:
  - **A service the AI vendor runs.** You rent it, and it runs the worker for you.
  - **A toolkit you run.** The vendor gives you a kit, and you run the worker on your company's own computers.
  - **One call to a model.** You need no worker at all, because an app you already use sends the AI one request.
  - **An open-source tool.** A free tool runs the worker, with a provider's model or one on your own computers.

The choices mix freely. A team may need a runtime of its own from the first day. A feature for outsiders may need only one request to the AI. A standing worker can serve a whole team. So start where trying costs little.

### What does another company need?

At 4:30 p.m., Dave wrote the two lists for Lakeshore. The carry list was the same. The rebuild list was longer: the three things in the table's last column (the runtime, the identity and who answers), and one more.

- **A written answer to where the data goes.** Chapter 1's second fact applies: your prompts go wherever the model runs. The answer names every tool that receives them, and each tool keeps your prompts under its own settings for who can see them and for how long. A rule that data must stay in one region needs a model and a runtime in that region.

One of those tools may keep a trace. A **trace** is a log of what the worker did in a run, step by step. It shows what the worker attempted, not what really happened. What really happened is in the case file and in the governed door's (DSoR) evidence ([4.4](ssor-tracks.md), [4.5](dsor-acts.md)), so a trace never replaces them.

Dave also added one evaluation case: Lakeshore asks about another vendor's invoice, and the worker refuses. He decided that Purchasing would start next week. The page for vendors would wait until all four things were in place.

Which runtime fits depends on how much of the work Brightline wants to run itself, and where the data may go. Today's products for each choice, on both AI vendors and in open source, are in the [product reference](#product-reference) at the end of this page.

### How do you know a worker has outgrown where it runs?

| Sign | Move |
| --- | --- |
| Someone other than you needs to start it or use it | Share it with the team, under its own identity, with written rows on who may ask |
| It should hold an ongoing role, started by a schedule or an event without anyone asking each time | Make it a Standing AI Worker, with a Role Contract and its records in the company's layers |
| Someone outside the company will use it, or pay for it | Give it the four things [another company needs](#what-does-another-company-need) |
| It must run for hours, without anyone's account, or on another company's schedule | Move it to a service the AI vendor runs, or to a toolkit you run |
| The job is one request to the AI, from an app you already have | Skip the worker, and let the app send the request itself |

### What does moving up cost?

**Move when others start to depend on the worker.** Not before, because trying is cheap where it is. And not after outsiders already use it. Moving up costs work.

## Product reference

Today's products for the choices on this page, on both AI vendors and in open source. The choices will not change.

*Products for each choice, as verified 22 October 2026, with Anthropic's lines checked again on 18 November and OpenAI's on 21 November.*

| The choice | Anthropic | OpenAI | Open source |
| --- | --- | --- | --- |
| A team uses the worker | Claude Tag in Slack, under its own identity (beta) | Workspace agents, in ChatGPT Business, Enterprise and Edu[^openai-workspace-agents] | Omnara's agents, in Slack or Discord |
| An always-on agent | Claude Duet (research preview) | A dot | OpenClaw, on your own hardware |
| A worker a vendor sets up for a company | None named | Specialist dots, in a preview with focused enterprise pilots[^openai-specialist-dots] | None in this book |
| A service the vendor runs | Claude Managed Agents (beta) | The Agents API, in public beta since 10 September 2026[^openai-changelog] | Omnara Cloud |
| A toolkit you run | The Claude Agent SDK, in a process you operate[^anthropic-agent-sdk] | The OpenAI Agents SDK, in Python or TypeScript[^openai-agents-sdk-guide] | Omnara, on your own servers |
| One call to a model | The Messages API, Anthropic's basic way for code to call a model | The Responses API, OpenAI's | A provider's API, or a model on your own computer |

Whether the hosted services keep your data, and whether they offer Zero Data Retention (the vendor keeps no copy after it answers), is in [Chapter 23's reference](../../building-ai-workers/hosted-agents/reference.md#2319-in-detail-the-full-dated-boxes). What a setting that keeps data in one region covers, and what it does not reach, is in [10.6's product reference](../../managing-ai-workers/governance-and-responsible-use/both-ai-vendors.md#product-reference).

[^openai-workspace-agents]: Introducing workspace agents in ChatGPT, OpenAI.
[^openai-specialist-dots]: Introducing dots, OpenAI, 29 September 2026.
[^openai-changelog]: Changelog, OpenAI developer docs.
[^anthropic-agent-sdk]: Agent SDK overview, Claude Code docs.
[^openai-agents-sdk-guide]: Agents SDK, OpenAI developer docs.



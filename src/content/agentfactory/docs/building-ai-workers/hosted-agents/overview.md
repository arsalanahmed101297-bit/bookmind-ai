# Chapter 23. Hosted Agents: Claude, OpenAI and Open Source (/building-ai-workers/hosted-agents/overview)

---
type: Document
title: "Chapter 23. Hosted Agents: Claude, OpenAI and Open Source"
description: "Move the AP worker off the builder's laptop and into Brightline's own portal. Someone else runs the loop, the tools and the sandbox. Your product decides which person, which company, which tools and how much a run may spend. Taught through the four resources of a hosted agent, permission policies, a sandbox with one open door, three identities, vaults that hold each person's own token, refresh and its refusal, budgets, schedules and webhooks. Built by coding agents on Claude first, then ported to OpenAI and to an open-source runtime."
status: stable
order: 323
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:39Z
chapter: "23"
part: III
expert_status: builder-only
objectives:
  - { id: CCDV-F.D1.S2, label: primary }
  - { id: CCDV-F.D1.S3, label: primary }
  - { id: CCDV-F.D7.S4, label: primary }
  - { id: CCDV-F.D1.S1, label: supporting }
  - { id: CCDV-F.D7.S1, label: supporting }
  - { id: CCDV-F.D8.S2, label: supporting }
  - { id: OAI.2.9, label: primary }
word_budget: 5000
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22" ]
build_step: "The AP worker as a hosted agent inside Brightline's portal: a worker contract written with the AP expert, the agent, environment, skill and deployment as files applied with a plan and a lock file, limited networking with one allowed host, connector tools that ask by default with only the four reviewed read tools allowed, the portal registered as a confidential client, one vault per person and company holding that person's own token, an eight-row session matrix with a planted bug per row, a budget on every session, refresh, rotation and refusal tested, signed webhooks deduplicated and reconciled, a scheduled morning triage, workload identity in CI, and ports to OpenAI and to an open-source runtime"
artifact: "brightline-ap with docs/worker-spec.md, agents/ap-worker.md, environments/ap-sandbox.yaml, skills/invoice-triage/, deployments/morning-triage.md, claude-lock.staging.json, apps/portal/, servers/auth/ client registration and agent_vaults migration, scripts/check-agent-config.ts, scripts/session-matrix.ts, scripts/vault-check.ts, .github/workflows/agents.yml, ports/openai/, ports/omnara/, ports/ch22.md, tag ch22"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch22.zip"
field_guides: [ "E.hosted-agents" ]
delta_entries: []
concepts: [ "23.1", "23.2", "23.3", "23.4", "23.5", "23.6", "23.7", "23.8", "23.9", "23.10", "23.11", "23.12", "23.13", "23.14", "23.15", "23.16", "23.17", "23.18", "23.19" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:39Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Start here if you skipped Chapters 21 and 22

*About ten minutes. If you read Chapters [21](../agent-loop-by-hand/overview.md) and 21, skip this. If you came from [Chapter 19](../business-data-and-retrieval/overview.md), this gives you the ideas from those two chapters that this one builds on. Each is explained again, briefly, where it is used.*

**An agent is a model, some tools and a loop.** A model only writes text. Some of what it writes asks a program to run a tool, such as `list_open_invoices`. The program runs it, sends back the result, and repeats until the model answers without asking for anything. The coding agents of [Chapter 12](../agentic-coding/overview.md) run this loop for you, out of sight. Chapter 21 opened it, and [Chapter 22](../agent-sdks/from-your-loop-to-a-library.md) handed it to a library.

| Word | What it means | Where this chapter uses it |
| --- | --- | --- |
| **Tool call, tool result** | The model's request to run one tool, and what running it returned | Everywhere |
| **The loop's five steps** | Call (send everything to the model), keep (add what it sent), check (did it ask for a tool?), run (run the tool), return (add the result, and call again) | [23.1](the-worker-leaves-the-laptop.md), [23.16](loops-check-feedback-and-stop.md) |
| **Stop reason (a model call's)** | Why one model response stopped writing: finished, wants a tool, out of tokens, and a few more. The loop runs again only on "wants a tool" | [23.3](reading-a-session.md) |
| **Turn limit, cost cap, time limit** | The three stops a loop adds of its own: at most so many model calls, so much money (say 10 cents), so much time. A test tool that always said "try again" showed why: only these stops ended the run | [23.5](a-budget-on-every-run.md) |
| **Agent SDK** | A provider's code library that runs the whole loop for you, inside your own program | 23.1, [23.17](patterns-and-when-to-host-it-yourself.md) |
| **Harness** | The program around a model that runs the loop, offers tools, keeps the conversation, checks permissions and enforces limits. A coding agent is one | 23.1 |
| **The first SDK, the second SDK** | The Claude Agent SDK, a harness used as a library, and the OpenAI Agents SDK, an agent and a small runner | [23.6](what-travels.md), [23.8](permission-policies.md) |
| **The ladder** | Four rungs for running an agent, each doing more for you and showing you less: your own loop, a small helper that runs it, an agent SDK, and a **hosted runtime** that the provider runs. This chapter is the top rung | The point, 23.17 |
| **`flag_invoice`, rule 1** | [Lab 22](../agent-sdks/lab.md)'s one tool with an effect, which holds an invoice's payment. Rule 1 lets it run only for one invoice, named as INV- and four digits, with a reason of at least ten characters | 23.6 |
| **Permission callback, approval** | Two shapes for one rule. A callback is your function, which the SDK asks and which answers at once. An approval pauses the run, hands the call back to your code, and resumes later | 23.8 |
| **Hook** | Your code that runs at a set moment, such as before every tool call | 23.6 |
| **Acceptance check, guardrail, rule 2** | A check that decides whether an answer can be handed over. Rule 2: it must cite a policy line, written as `(file.md:N)`. A guardrail is a check the SDK runs for you. In Lab 22, both rules live in `src/sdk/policy.ts` (Python `policy.py`) | 23.16, Task 10b |
| **Test token** | A short-lived sign-in token for a test person, which the builder's own program sent to the connector | [23.9](three-identities-never-one.md), [23.10](a-vault-per-person-and-company.md) |

**What was still the builder's.** The worker ran as the builder, on the builder's computer. [Chapter 22](../agent-sdks/what-an-sdk-still-leaves-to-you.md) ended with a list of what an SDK in your own process still leaves to you. The list names a process and a disk, a sandbox, what the process inherits, and credentials. It also names transcripts and traces, cost and time, upgrades, and what counts as done. This chapter hands most of that list to a hosted platform, and gives each person their own token.

**Where to look, and what you need.** The lab's zip holds Labs [21](../agent-loop-by-hand/lab.md) and 21's finished code. Their notes ship filled in from the answer keys, as examples. `docs/sdk-map.example.md` is the authors' own filled list, and `docs/worker-spec.md` is Lab 22's eleven-row specification of the worker. The word list on the companion page repeats every word above. **Chapters [16](../skills-and-plugins/overview.md) to 19 are needed,** not only advised, because this chapter hosts their skill and connector. Part C also depends on [Chapter 18](../securing-connectors/overview.md)'s sign-in and Chapter 19's per-company data. A reader who stopped at Chapter 12 should read them first.

## The point

**This is the chapter where your work becomes a product you run.** In Chapters 16 to 19 you built parts that live inside someone else's AI app: a skill, a plugin and a connector. In Chapter 21 you followed the worker's loop line by line, and in Chapter 22 two agent SDKs ran it for you. Now you sell the whole worker. A company signs up, and its people sign in to your product. Then the work gets done, even at 7:10 on a Monday morning when nobody is at a desk.

**Until now, the AP worker (AP is accounts payable, the team that checks and pays a company's bills) lived on the builder's computer.** It ran inside a coding agent, then as the loop you followed in Chapter 21 and on the two SDKs of Chapter 22. It always ran as the builder, with a short-lived test token, and it stopped when the laptop lid closed. In this chapter it moves into Brightline's own web portal. A clerk signs in and asks a question. A worker running on someone else's servers answers it, using that clerk's own token for that clerk's own company. The worker never sees the token, cannot spend more than its budget, and cannot reach any address except the connector's.

![Two pictures side by side, split by a dotted line. Left, labeled before: a box labeled one laptop holds two boxes. One reads coding agent running the loop with the builder's own token. The other, a dashed box, reads stops when the lid closes. Below the laptop, two dashed boxes read Ana, no way in, and Luis, no way in. Right, labeled after: two boxes, Ana signs in and Luis signs in, with the words through the product's own portal beneath them. A red-orange arrow runs from each to its own white box inside a gold box labeled hosted service. One white box reads session for Ana, Ana's token, held. The other reads session for Luis, Luis's token, held. Below: the loop moves to someone else's servers, and the decisions stay with your product.](img/chapter-22-leaves-the-laptop.png)

*Figure 23.1. Before, the worker runs on one laptop as one person. After, it runs on hosted servers, one session per question, each carrying the asking person's own token.*

**Let someone else run the loop. Keep for yourself who it acts for, which tools it may use, where it may reach and what it may spend.**

**Chapter 21's three questions, one rung higher.** [Chapter 21](../agent-loop-by-hand/what-an-agent-is-in-code.md) named three things a runtime would hide from you, and Chapter 22 answered them for two SDKs. A hosted platform answers the same three questions once more, and this chapter adds a fourth, which is the reason it exists.

| Question | Your loop (Chapter 21) | An agent SDK (Chapter 22) | A hosted platform (this chapter) |
| --- | --- | --- | --- |
| **Who runs the tools?** | Your code | The SDK, in your process ([22.4](../agent-sdks/tools-and-where-each-call-runs.md), [22.5](../agent-sdks/who-may-run-a-tool.md)) | The platform, in a sandbox for each session ([23.2](four-resources.md), [23.7](the-sandbox-and-its-network.md)). Your product answers the calls set to ask (23.8) |
| **Who keeps the conversation?** | Your code, as an array ([21.5](../agent-loop-by-hand/the-conversation-is-an-array-you-own.md)) | Your code, or the SDK's session file, by your choice ([22.7](../agent-sdks/where-the-conversation-lives.md)) | The platform, as the session's events (23.3) |
| **Who decides when to stop?** | Your three stops ([21.8](../agent-loop-by-hand/the-stops-you-add-yourself.md)) | The SDK's limits, plus yours ([22.6](../agent-sdks/what-counts-as-done.md)) | The platform, at the budget your product sets for each session. Time stays yours (23.5), and what counts as done (23.16) |
| **Who is it acting for?** | You, with a test token | You, with a test token | The person who asked, with their own token, in their own vault (23.9 to [23.11](one-session-one-person-one-company.md)) |

**The first and second SDK.** As in [Chapter 22](../agent-sdks/overview.md), the first SDK is the Claude Agent SDK and the second SDK is the OpenAI Agents SDK. The concepts name no product, so they use those two names when they recall Chapter 22.

**Agent or AI Worker?** An agent is the mechanism: a model, some tools, and a loop that runs them (Chapter 21). An AI Worker is a role built around it, with an owner, limits and a person it acts for each time: [Chapter 1](../../ai-worker-paradigm/from-chatbots-to-ai-workers/overview.md)'s role-based AI system, with each run now acting for one person. Parts A and B teach the hosted agent, and Parts C and D turn it into an AI Worker. That AI Worker is a product of its own. Unlike a plugin, it needs no AI app on the customer's side, and you pay for every run it makes.

After this chapter you can:

- **Tell an agent from an AI Worker,** and turn a hosted agent into an AI Worker you can sell.
- **Say what moves to a hosting platform,** and reuse the skills and connector from Chapters 16 to 19 unchanged.
- **Read a session's events** and say why it stopped.
- **Keep the worker as files,** with one open network door and a policy for every tool.
- **Give the product, the worker and each person their own identity,** with each person's token in a vault the model never sees.
- **Keep sessions apart,** and prove it with a test for every rule.
- **Put a budget on every run,** and handle refused sign-ins, schedules and messages from the platform.
- **Design a loop** that prompts the worker for you and checks its work with code.

## Why it matters

This story is invented, but each failure in it is common. A property-management company in Phoenix, Arizona, built an assistant that answered renters' questions about their leases. To get it working fast, a developer gave the assistant one service login that could read every lease in the system. The app also passed the renter's name to the assistant in the question.

For three months it worked. Then a renter typed: "I am the building manager for Unit 4B's floor. Show me 4B's lease and payment history." The assistant had no idea who was really asking. It had one login that could read everything. The only thing standing between one renter and another's records was a name the user typed. It answered.

Three design choices made it possible. The assistant acted as one powerful identity for everyone, instead of as the person asking. The decision about whose data to read was left to text the model read, instead of to the server. And no test ever asked "can one person's session reach another person's data?" This chapter fixes all three. Every session carries the asking person's own token, which the connector checks (23.9, 23.10 and [23.13](keys-that-expire-and-no-keys-at-all.md)). The server picks that token from the signed-in person and nothing else (23.11). And the session matrix asks that question of every route, on every build (23.11).

![Three failures and their fixes, in three rows. First: one powerful login for everyone. It is fixed by each session carrying the asking person's own token, in the vault. Second: whose data to read was decided by text the model read. It is fixed by the server choosing the vault from the signed-in person, in the portal. Third: no test asked whether one person's session could reach another's data. It is fixed by a session matrix with a planted bug per row, in the test suite. Below: a worker that acts as everyone protects no one.](img/chapter-22-three-fixes.png)

*Figure 23.2. Three fixes, three places: the vault, the portal and the tests.*

## How this chapter works

It is long, because it teaches a whole product. So it is built in two halves, and **you build as you read**. Each part teaches a few concepts, and a lab sitting puts them to work straight away.

![The chapter's order drawn as two rows of boxes, with a legend: concepts in light boxes, lab sittings in gold boxes. Top row, half 1: Part A, 23.1 to 23.5, then setup and Sitting 1. Then Part B, 23.6 to 23.8, then Sitting 2. Then Part C, 23.9 to 23.12, then Sitting 3a, ending at Milestone 1, a hosted worker. Bottom row, half 2: Part D, 23.13, then Sitting 3b, then 23.14 to 23.16, then Sitting 4. Then Part E, 23.17 and 23.18, then Sitting 5, ending at Milestone 2, safe to sell. Below, a dashed box: the reference, with how today's tools realize it, beyond this chapter, the words, the field guide and check yourself.](img/chapter-22-chapter-map.png)

*Figure 23.3. Read a part, then do its sitting. Half 1 ends at Milestone 1, and half 2 at Milestone 2.*

| Half | What you read and do | What you have at the end | Who needs it |
| --- | --- | --- | --- |
| **1. A hosted worker** | Parts A, B and C (23.1 to [23.12](the-portals-own-pages.md)), each followed by its lab sitting: setup and Sitting 1, Sitting 2, Sitting 3a | Milestone 1. Ana and Luis each ask the worker a question in the portal, each with their own token, under a budget | Every reader |
| **2. Safe to sell** | Parts D and E (23.13 to [23.18](designing-a-hosted-worker.md)), with Sittings 3b, 4 and 5 | Milestone 2. Proof that no session reaches another's, no stored keys, refresh, schedules, webhooks, a loop that checks itself, and a second runtime | Before you sell a worker to a client |
| **The reference** | [23.19](how-todays-tools-realize-it.md) and [Check yourself](check-yourself.md), at the end of the chapter. Beyond this chapter, the words and the field guide ([F0](reference.md#f0-from-zero-keys-consoles-and-where-secrets-live) to [F7](reference.md#f7-openai-and-omnara-for-the-ports)) on the companion page | Nothing new to build. Each lab task names the field guide section it needs | Look things up as you go |

**Three kinds of page, as in Chapter 22.** The lessons teach. The [**Lab 23**](lab.md) page holds the sittings, and each part ends by sending you to its sitting. The companion page, [**Chapter 23 reference**](reference.md), holds Beyond this chapter, the words and the field guide.

**The parts answer the four questions.** Part A says who runs the tools and keeps the conversation. Parts B and D say who decides what may run and when to stop. Part C answers who the worker acts for. Part E is design reading across all four.

If you only want the ideas for now, read the concepts and skip the sittings. Part E (23.17 and 23.18) is design reading. Optional Task 21b builds on 23.17, and Task 21 fills in 23.18's table. New words are explained where they first appear. "Words this chapter uses", on the companion page, collects them all, with a table of the kinds of token. Managers can read 23.1, 23.2, 23.5, 23.9 and 23.17. The lab takes about 12 hours 20 minutes. It costs money, because neither hosted runtime has a free plan. On Claude it costs under $8, in sessions that cost a few cents each.

## What you will build

**Who's who.** The chapter follows one invented business.

| Who | Role |
| --- | --- |
| **You, the builder** | You build and run the AP product for Brightline, with coding agents, as its platform operator (Chapter 18) |
| **Brightline Wholesale Supply** | A wholesale distributor that sells the AP connector, and now the portal. The AP worker was first built for its own AP team |
| **Ana Morales** | Brightline's AP analyst. She writes the worker's rules with you, and asks it questions |
| **Cedar Ridge Supply** | Brightline's second customer, a building-supply distributor, with its own vendors and data on the same connector |
| **Luis Moreno** | Cedar Ridge's AP lead. His questions must reach only Cedar Ridge's data |
| **Hannah Price** | Cedar Ridge's controller, who removes people who leave |
| **Juniper Trail Outfitters, and Dana** | A trial company, and a Cedar Ridge test person, both used only in tests |

The portal is the product you build and run for Brightline, so every customer company signs in to it. In this chapter it is called **the AP portal**, or Brightline's AP portal. It carries Brightline's name because Brightline sells it, and the book keeps the name from earlier chapters. Cedar Ridge's people sign in to the same portal and see only Cedar Ridge's data. You run the portal, and you pay the hosting platform for every run.

**Where you are.** At the end of Chapter 22, the AP worker runs on your own computer. It runs as the loop you followed in Chapter 21, and on two agent SDKs, in TypeScript and Python. Every built-in tool is off, and it has a turn limit, a cost cap and a time limit. Its portable specification is `docs/worker-spec.md`, and `docs/sdk-map.md` lists what you still own (22.9). Chapters [17](../connectors-and-mcp/overview.md) to 19 put Brightline's connector online behind sign-in. People sign in and pick a company, and the database keeps each company's rows apart. But only the builder can use the worker, it acts as the builder with a test token, and its runtime is your own process.

**What you build instead.** As in Chapters 17 to 22, coding agents write every file and run every command, and you specify, check and approve.

1. **A worker contract,** written with the AP expert: what the worker may answer, use and spend. These are the hosted worker's lines of its Role Contract ([Chapter 2](../../ai-worker-paradigm/what-is-an-ai-worker/overview.md)).
2. **The worker as files:** its definition, where it runs, its skill and its schedule.
3. **The AP portal,** a small web site where a person signs in and asks the worker a question.
4. **A vault per person and company,** holding that person's own token.
5. **The session matrix:** tests that try every way one person's session could reach another's.
6. **A morning triage that runs by itself** and checks its own work.
7. **Deployment with no stored key,** and the same worker on two other runtimes.

**One language in this lab, and why.** Chapters 21 and 22 gave every file in TypeScript and in Python. Lab 23's new code is TypeScript only. Most of what you build is configuration that belongs to no language (the worker as files, [23.4](resources-as-code.md)). The code is the portal, which runs on the same edge platform as the connector (Chapter 17). It signs people in as Chapter 18's apps did, with a TypeScript helper in its skeleton. Labs 21 and 22's Python files stay in the repository, and their tests still pass. If you followed those labs in Python, work through the portal's TypeScript with PRIMM-AI+, as in [Chapter 13](../programming-fundamentals/overview.md). The lines that decide a rule are short, and the tasks that matter show them to you.

![The system after this chapter. On the left, a box: a person in a browser, with red-orange arrows to two boxes. Above, the sign-in server: consent, tokens, with an arrow down to the box below it. Below, in gold, the AP portal (server), with its table: person and company to one vault. On the right, a large box labeled hosted service holds four boxes. The first reads agent definition, and the second reads environment, one open door. The third reads sessions, each in its own sandbox. The fourth, in gold, reads vaults, one per person and company. A red-orange arrow runs from the portal to the sessions, labeled start session: vault and budget. Another runs from the portal to the vaults, labeled store token. A dashed arrow runs from the foot of the hosted service back to the portal, labeled webhooks. A red-orange arrow runs from the sessions to a box on the far right, connector and its database, labeled token added on the way out. Below: the portal decides who a session is for. The token never passes through the model.](img/chapter-22-system.png)

*Figure 23.4. The portal decides who a session is for. The hosted service runs it. The person's token goes from the vault to the connector and never passes through the model.*

## In this chapter

No open standard defines a hosted agent, so Concepts 23.1 to 23.18 teach its shape in plain words and name no product. Concept 23.19 shows how today's products realize it, and the lab and field guide name them.

- **Start here if you skipped Chapters 21 and 22:** the ideas from those two chapters that this one builds on, in about ten minutes.

**Half 1. A hosted worker in the portal (Milestone 1)**

**Part A. What a hosted agent is.**

- [23.1](the-worker-leaves-the-laptop.md) The worker leaves the laptop
- [23.2](four-resources.md) Four resources
- [23.3](reading-a-session.md) Reading a session: events and stop reasons
- [23.4](resources-as-code.md) Resources as code
- [23.5](a-budget-on-every-run.md) A budget on every run

*Then:* getting ready for Lab 23 (Task 0), and Sitting 1 (Tasks 1 to 4).

**Part B. Bringing the plugin and the connector.**

- [23.6](what-travels.md) What travels: your skills, connectors and plugins
- [23.7](the-sandbox-and-its-network.md) The sandbox and its network
- [23.8](permission-policies.md) Permission policies: allow, ask, decide

*Then:* Sitting 2 (Tasks 5 to 8).

**Part C. Identity, secrets and companies.** The heart of the chapter.

- [23.9](three-identities-never-one.md) Three identities, never one
- [23.10](a-vault-per-person-and-company.md) A vault per person and company
- [23.11](one-session-one-person-one-company.md) One session, one person, one company
- [23.12](the-portals-own-pages.md) The portal's own pages

*Then:* Sitting 3a (Tasks 9 to 11), the end of Milestone 1.

**Half 2. Safe to sell (Milestone 2)**

**Part D. Safe to sell: keys, refresh, schedules and loops.**

- [23.13](keys-that-expire-and-no-keys-at-all.md) Keys that expire, and no keys at all

*Then:* Sitting 3b (Tasks 12, 12b and 13).

- [23.14](when-a-refresh-is-refused.md) When a refresh is refused
- [23.15](schedules-and-webhooks.md) Schedules and webhooks
- [23.16](loops-check-feedback-and-stop.md) Loops: check, feedback and stop

*Then:* Sitting 4 (Tasks 14 to 18).

**Part E. Design.**

- [23.17](patterns-and-when-to-host-it-yourself.md) Patterns, and when to host it yourself
- [23.18](designing-a-hosted-worker.md) Designing a hosted worker: the four disciplines

*Then:* Sitting 5 (Tasks 20 and 21, and the optional Tasks 19 and 21b) and wrapping up.

**The reference.** Beyond this chapter (optional), Words this chapter uses and the field guide (F0 to F7) are on the companion page, Chapter 23 reference. At the end of the chapter:

- [23.19](how-todays-tools-realize-it.md) How today's tools realize it
- [Check yourself](check-yourself.md)



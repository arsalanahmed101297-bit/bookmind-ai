# 23.1 The worker leaves the laptop (/building-ai-workers/hosted-agents/the-worker-leaves-the-laptop)

---
type: Document
title: "23.1 The worker leaves the laptop"
description: "What moves when the AP worker's loop runs on someone else's servers, what stays the builder's, and why a hosted agent is not yet an AI Worker."
status: stable
order: 323.01
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:40Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.1" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:40Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**Part A. What a hosted agent is.** *Half 1, Milestone 1. Five concepts, then the lab's setup and Sitting 1, where you set up your first hosted agent and read its sessions.*

**In everyday life.** A small bakery bakes every loaf in its own oven, at the back of the shop. When it starts selling to three cafés across town, it rents time in a shared commercial kitchen instead. The kitchen owns the ovens, the power and the cleaning. The bakery still owns the recipes, decides which café gets which order, and checks every loaf before it leaves. Moving the ovens did not move the decisions. In this concept, the shared kitchen is the hosting platform, and the recipes and orders are your product's decisions.

**What you will learn.** What changes when the AP worker's loop runs on someone else's servers, which decisions stay with your product, and why that alone does not make an AI Worker.

**Why it matters.** Hosting moves the machinery, not the decisions. If your product forgets who each run is for, one person's question can reach another person's data.

**Words that mean something different in this chapter.** Seven words you already know change meaning here. Each is flagged again where it first appears.

| Word | Elsewhere | In this chapter |
| --- | --- | --- |
| Session | A sign-in in a browser ([Chapter 18](../securing-connectors/overview.md)), or a saved conversation you resume ([Chapter 22](../agent-sdks/where-the-conversation-lives.md)) | A **worker session**: one running worker, with its own sandbox, history and budget ([23.2](four-resources.md)) |
| Environment | Staging or production ([Chapter 17](../connectors-and-mcp/overview.md)) | Also a **runtime environment**: where a worker runs and what it may reach (23.2) |
| Stop reason | Why one model call stopped writing ([Chapter 21](../agent-loop-by-hand/one-turn-request-response-and-stop-reason.md)) | Why a whole session went quiet ([23.3](reading-a-session.md)) |
| Allow list | Tools that run without asking ([Chapter 22](../agent-sdks/who-may-run-a-tool.md)), or hosts a sign-in server accepts documents from (Chapter 18) | Hosts a sandbox may reach ([23.7](the-sandbox-and-its-network.md)) |
| Budget | Any of a loop's three stops ([Chapter 21](../agent-loop-by-hand/the-stops-you-add-yourself.md)) | Only the dollar cap on one session ([23.5](a-budget-on-every-run.md)) |
| Interrupt | An interruption: a tool call waiting for approval (Chapter 22) | A request to stop a session's current work (23.3) |
| Token | A unit of text a model reads ([Chapter 21](../agent-loop-by-hand/tokens-caching-and-what-a-call-costs.md)), or a sign-in token (Chapter 18) | Usually a sign-in token. The kinds are in the word list (Part C) |

**One request, start to finish.** On Monday morning, Brightline's controller, Dave Kowalski, asks the builder a simple question: "Why can only you use the AP worker?" The builder shows him where it runs today:

1. **The builder runs the Chapter 22 program** on a laptop and types Ana's question for her.
2. **The agent SDK runs the loop** on that laptop ([22.3](../agent-sdks/one-run-start-to-finish.md)): the model asks for the connector's `list_open_invoices` tool, the SDK runs it and sends back the result, and the model writes an answer.
3. **The connector checks the token.** It is the builder's own test token, for Brightline, as in Chapters 21 and 22.
4. **The answer appears on the builder's screen.** Ana reads it over the builder's shoulder.

Every step happens on one computer, as one person. Ana cannot ask it herself. Luis at Cedar Ridge cannot ask it at all, because the token is for Brightline. And when the laptop sleeps, the worker stops.

### What is a hosted agent?

You know the loop by now. In [Chapter 21](../agent-loop-by-hand/what-an-agent-is-in-code.md) you followed it line by line: call the model, keep what it sent, check whether it asked for a tool, run the tool, return the result, and call again until it stops. In Chapter 22 an agent SDK ran the same loop inside your own program. The program around a model that runs the loop, offers tools, keeps the conversation, checks permissions and enforces limits is the **harness** ([22.1](../agent-sdks/from-your-loop-to-a-library.md)). A hosted agent is an agent whose harness runs on someone else's servers. Your product talks to it over the internet: it sends a question, and it watches the work happen. The AP worker is more than its agent. It is a role, with an owner, limits and a person it acts for each time ([Chapter 2](../../ai-worker-paradigm/what-is-an-ai-worker/overview.md)), and most of this chapter is about the parts of that role the platform does not hold.

### What does the platform take over from Chapter 22's list?

[22.9](../agent-sdks/what-an-sdk-still-leaves-to-you.md) ended with what an SDK in your own process still leaves to you. A hosted platform takes most of it, row by row:

| 22.9's row | On a hosted platform | Still yours |
| --- | --- | --- |
| **A process, and a disk** | The platform runs the loop on its own servers, one session per question | Nothing to keep running |
| **A container and a sandbox** | Each session gets its own small computer, the sandbox (23.7) | Which tools it has, and where its network may reach (23.7, [23.8](permission-policies.md)) |
| **What the process inherits** | Nothing from your computer: only what the agent definition lists ([23.4](resources-as-code.md)) | Keeping that definition as reviewed files |
| **Credentials** | The platform holds each person's token in a vault, and adds it on the way out ([23.10](a-vault-per-person-and-company.md)) | Which person, which company and which vault, on every run ([23.9](three-identities-never-one.md) to [23.11](one-session-one-person-one-company.md)) |
| **Where transcripts and traces live** | The platform keeps each session's events (23.3) | Who may read them ([23.12](the-portals-own-pages.md)) |
| **Cost and time** | The platform enforces a budget on each session (23.5) | Setting the budget on every run, and a time limit of your own (23.5) |
| **Upgrades** | The platform upgrades its own harness | Pinning what you can: the command-line tool, the model id and the platform's version header (the API version each request names), with the worker's definition kept as reviewed files ([21.13](../agent-loop-by-hand/versions-models-and-keys.md), 23.4) |
| **What counts as done** | Nothing | Your checks ([23.16](loops-check-feedback-and-stop.md)) |

The right column is the whole of this chapter. A hosted platform will run whatever you ask it to run, as whoever you tell it the run is for. Choosing the person, the company, the tools, the reach and the budget is your product's job, on every run.

### Why does Brightline want it?

Three reasons, each from the story above. Brightline's clerks should ask from its own web page, without the builder's program. Each clerk's question should run as that clerk, so the connector's logs say who asked and the connector serves the right company. And a run should not depend on one laptop being awake.

### Is a hosted agent already an AI Worker?

The platform hosts the agent, the mechanism. An AI Worker is the role built around it, and most of this chapter builds that role:

| | A hosted agent | An AI Worker built on it |
| --- | --- | --- |
| **The question it answers** | "Can it do this task?" | "Whose job is this, within what limits, and who answers for it?" |
| **Who it acts for** | Whoever calls it | One named person and one company per run, chosen by your product |
| **What limits it** | The tools it was made with | A Role Contract: what it may answer, use, reach and spend |
| **What a customer buys** | A task done, per request | A role filled for a company, month after month |

![A white box in the middle labeled agent: a model in a loop with tools, the mechanism. Around it, a larger gold box labeled AI Worker, a role you can sell, with six small cards on its edge: an owner, a person it acts for each run, limits on tools and network, a budget, checks on every result, a schedule and a record. To the right, two cards: a customer buys from an agent a task done, and a customer buys from an AI Worker a role filled.](img/chapter-22-agent-vs-worker.png)

*Figure 23.5. Hosting gives you the agent. Your product adds what makes it an AI Worker.*

The rest of this chapter adds what turns this agent into the AP worker: whose token it carries, one person and company per run, a budget, a schedule, and a loop that checks its work.

**At work.** In [Lab 23](lab.md), Task 1, Claude Code interviews the builder, who plays Ana, and rewrites [Lab 22](../agent-sdks/lab.md)'s portable specification, `docs/worker-spec.md`, for a hosted worker: the worker answers questions about open invoices, vendors, purchase orders and AP policy, using the connector's four read tools and the invoice-triage skill. It never pays, approves or changes anything. Each run is for one signed-in person and one company, with a budget of $0.50. The contract names no product.

**The operating rule:** host the loop, keep the decisions. Write down who the worker acts for, what it may use, where it may reach and what it may spend.



# 4.8 Find each layer in your own app (/ai-worker-paradigm/the-architecture-in-one-picture/both-ai-vendors)

---
type: Document
title: "4.8 Find each layer in your own app"
description: "How to find each layer of the picture in Claude, ChatGPT or an open-source tool, the two differences that matter for Brightline, and what stays the same."
status: stable
order: 104.8
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.8" ]
last_verified: 2026-10-22
review_by: 2026-12-21
sources:
  - id: anthropic-claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: anthropic-memory
    title: "Use Claude's chat search and memory to build on previous context (Claude Help Center, updated 11 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
  - id: anthropic-custom-connectors
    title: "Get started with custom connectors using remote MCP (Claude Help Center, updated 13 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: openai-memory
    title: "Memory in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/8590148-memory-in-chatgpt
  - id: openai-developer-mode
    title: "Connecting custom MCP servers in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt
  - id: openai-scheduled-tasks
    title: "Scheduled tasks in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
  - id: openai-projects
    title: "Projects in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - id: anthropic-pricing
    title: "Plans & pricing (Anthropic, verified 2026-11-18)"
    resource: https://claude.com/pricing
  - id: anthropic-claude-tag
    title: "What is Claude Tag? (Claude Help Center, updated 24 September 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/15594475-what-is-claude-tag
  - id: anthropic-managed-agents
    title: "Claude Managed Agents overview (Claude Platform Docs, verified 2026-11-18)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: anthropic-cowork-architecture
    title: "Unified Claude Security Best Practices (Anthropic Trust Center, version 1.3.6, 7 November 2026, verified 2026-11-18)"
    resource: https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices
  - id: anthropic-claude-code-cloud
    title: "Use Claude Code in the cloud (Claude Code docs, verified 2026-11-18)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web
  - id: anthropic-duet
    title: "Introducing Claude Duet (Anthropic, 21 October 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/claude-duet
  - id: anthropic-plan-prices
    title: "Plans & pricing, the price of each plan (Anthropic, verified 2026-11-18)"
    resource: https://claude.com/pricing
  - id: anthropic-export
    title: "Export your Claude data (Claude Help Center, updated 9 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/9450526-export-your-claude-data
  - id: openai-chatgpt-slack-teams
    title: "Using @ChatGPT in Slack and Microsoft Teams (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001537-using-chatgpt-in-slack-and-microsoft-teams
  - id: openai-agents-sdk
    title: "OpenAI Agents SDK (OpenAI, GitHub, verified 2026-11-21)"
    resource: https://github.com/openai/openai-agents-python
  - id: openai-agents-api
    title: "Agents API (beta) FAQ (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001551-agents-api-beta-faq
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-11-21)"
    resource: https://openai.com/index/introducing-dots/
  - id: openai-export
    title: "Exporting your ChatGPT history and data (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/7260999-exporting-your-chatgpt-history-and-data
  - id: openclaw
    title: "OpenClaw README (OpenClaw Foundation, GitHub, MIT, verified 2026-10-22)"
    resource: https://github.com/openclaw/openclaw
  - id: opencode-v2
    title: "OpenCode v2 documentation (OpenCode, verified 2026-10-22)"
    resource: https://opencode.ai/v2/docs/
  - id: omnara
    title: "Omnara README (Omnara, GitHub, Apache 2.0, verified 2026-10-22)"
    resource: https://github.com/omnara-ai/omnara/blob/main/README.md
  - id: opencode-providers
    title: "Providers (OpenCode v2 documentation, verified 2026-10-22)"
    resource: https://opencode.ai/v2/docs/providers
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** When you move house, your furniture comes with you, but you plug every cable in again and test that each thing works.

**What you will learn.** Where each layer of the picture sits in your own app: Claude, ChatGPT or an open-source tool. You find where people reach the worker, what runs it, what it remembers, how it reaches the record, what starts its work, and what an export keeps.

**Why it matters.** When the worker moves, you set the rented layers up again and carry the owned ones across ([4.6](rented-and-owned.md#which-layers-are-rented-and-which-are-owned)). You can only do that if you know where each layer sits in the app you use today.

The picture names no AI vendor. Each AI vendor rents out the layers above the line and offers its own memory. Open-source tools let you run those layers on your own computers instead. An AI vendor can supply infrastructure for knowledge, case files and controls, but the governance, the approvals and the accountability stay with the company.

## Where to find each layer in your app

Open your app beside this page and follow your tab. The lab says which parts to place and decide on; these steps say where each layer sits in your app.

**What you need first:** a list of the parts your worker uses, and the Role Contract's Memory line ([2.6](../what-is-an-ai-worker/role-contract.md)). Step 5 uses **MCP** (Model Context Protocol), a standard way to connect AI apps to other systems.

### Claude

*As verified 18 November 2026.* The Free plan has chat and memory. Handing off and scheduling tasks, and Claude Code, start on Pro, so on Free, write the runtime and the trigger down as gaps.[^anthropic-pricing]

1. **Write down your channels.** People reach the worker in the Claude apps, on web, desktop and mobile. The Product reference lists the others.[^anthropic-pricing]
2. **Write down what runs it.** A task in a Claude conversation, which Anthropic calls Cowork, runs in its own cloud sandbox: a small virtual machine that is destroyed when the session ends. So nothing kept only on that machine lasts ([4.9](worker-is-the-records.md#what-is-the-worker-if-not-the-machine)).[^anthropic-cowork-architecture]
3. **Read your account's memory in Settings.** Claude builds memory from your chats, and you view and edit it in Settings. On Team and Enterprise plans, owners control whether memory is available.[^anthropic-memory]
4. **Read the project's memory in the project's settings.** It holds the notes Claude writes as it works, and every cloud thread in the project reads them. You can read, edit and delete them. Delete anything a decision rests on, such as a rule, a limit or a status: it belongs in the record ([4.3](memory-remembers.md)).[^anthropic-claude-projects]
5. **Connect the record with a custom connector.** A custom connector reaches your governed record over remote MCP, in Claude, its tasks and Claude Desktop, on the plans the first difference below names.[^anthropic-custom-connectors] If you have no MCP server, keep the record as a file you give the worker, with its version in the file's name and first line.
6. **Set the trigger as a scheduled task.** On the paid plans, a scheduled task runs hourly, daily, on weekdays, weekly or on demand, and each run is its own session, except in a project, where a run can continue an existing thread. Scheduled tasks are time-based, so for work that starts when something arrives, set a regular check, such as every hour.[^anthropic-scheduled-tasks]
7. **Check what an export keeps.** A data export holds conversation data, the user data for the account and any voice recordings you shared with Anthropic. It does not hold the files you uploaded, and nothing names a project's instructions. So keep the owned records outside Claude.[^anthropic-export]
8. **Check it worked: the wipe test.** Switch memory off, or open a chat that does not use it, such as an incognito chat, which is not saved to memory. Ask the worker a fact the record decides, such as a limit in a policy. A pass: it answers from the record, or says it must check the record. A fail: it answers with a figure only memory held. Then move that fact to the record ([4.3](memory-remembers.md#how-do-you-know-memory-is-in-its-place)).[^anthropic-memory]

You use these steps in Lab 4, [Task 1](lab.md#task-1-channels-and-runtime) and [Task 7](lab.md#task-7-your-own-setup).

### ChatGPT

*As verified 21 November 2026.* Most steps work on any plan. Custom MCP servers depend on the plan, as the first difference below says.

1. **Write down your channels.** People reach the worker in the ChatGPT apps, through @ChatGPT in Slack and Teams, and through the API.[^openai-chatgpt-slack-teams]
2. **Write down what runs it.** A task in a ChatGPT conversation runs in what OpenAI calls Work, its home for everyday delegated work. OpenAI's always-on agent, a **dot**, has a cloud computer of its own, and how long that computer and the files on it last is not stated.[^openai-dots]
3. **Read your account's memory in Settings.** There you control saved memories, which you ask ChatGPT to keep or which it saves itself, and reference chat history.[^openai-memory]
4. **Set the project's memory.** A project can use project-only memory, and a shared project always does. Deleting a project removes its chats, its instructions and the files stored only in it, so keep the owned records outside it.[^openai-projects]
5. **Connect the record with a custom MCP server, from Plugins.** On a plan that has it, as the first difference below says, add the server there. In Business, Enterprise and Edu workspaces, admins and owners create and publish the connections on the web. On a plan with no connector, upload the record's file instead: name its version in the file's name and first line, replace it on every approval, and make the worker cite it.[^openai-developer-mode]
6. **Set the trigger.** A scheduled task runs once or on a schedule, on every plan. Event-triggered tasks respond to Gmail, Slack or GitHub activity, on Plus and above.[^openai-scheduled-tasks]
7. **Check what an export keeps.** The export ZIP holds chat history and other account data, and is not available in Business or Enterprise workspaces. So keep the owned records outside ChatGPT.[^openai-export]
8. **Check it worked: the wipe test.** Open a **Temporary Chat**, a chat that does not create or update memories, and set it to Unpersonalized so it reads none. Ask the worker a fact the record decides, such as a limit in a policy. A pass: it answers from the record, or says it must check the record. A fail: it answers with a figure only memory held. Then move that fact to the record ([4.3](memory-remembers.md#how-do-you-know-memory-is-in-its-place)).[^openai-memory]

You use these steps in Lab 4, [Task 1](lab.md#task-1-channels-and-runtime) and [Task 7](lab.md#task-7-your-own-setup).

### Open source

*As verified 22 October 2026.* These tools run on computers you control, so the worker's state stays on hardware you control.

1. **Write down your channels.** OpenClaw meets you in the chat apps you already use, such as Discord, iMessage, Slack, Teams, Telegram and WhatsApp. The Product reference lists OpenCode's and Omnara's.[^openclaw]
2. **Choose the model.** OpenCode works with many providers, and with models that run on your own computer, such as through Ollama.[^opencode-providers]
3. **Write down what runs it.** OpenCode is an open-source coding agent, the counterpart of Claude Code and Codex. It connects to MCP servers, the same standard the two AI vendors use, which is how it reaches the record.[^opencode-v2]
4. **Find where the history is kept.** Omnara saves every step of every agent, and a copy you host yourself keeps that history in your own database. A saved history is still not a case file. Omnara's timed triggers can message a running agent or start a new one.[^omnara]
5. **Check it worked: the wipe test.** Start a fresh session with no saved history, and ask the worker a fact the record decides. A pass: it answers from the record, or says it must check the record. A fail: it answers from an old session's history. Then move that fact to the record ([4.3](memory-remembers.md#how-do-you-know-memory-is-in-its-place)).

Lab 4 runs in Claude or ChatGPT. Use these steps when you map your own tool.

## What changes a step

**The differences that matter for this Brightline example.** There are two. Memory is not one of them. Both AI vendors keep a memory for the account and one for each project, let you control it, and offer chats that are not saved to it (steps 3, 4 and 8). On both, memory is rented and must pass the wipe test ([4.3](memory-remembers.md)), and the Role Contract's Memory line says what it may hold.

1. **How the worker reaches the approved knowledge (KSoR).** On Claude, custom connectors work on every plan, and the Free plan allows one, as checked on 18 November 2026.[^anthropic-custom-connectors] So any Claude plan can connect one governed record. On ChatGPT, as checked on 21 November 2026, OpenAI documents read and fetch access to custom MCP servers for Pro. It documents full MCP support, including actions, for business workspaces. Its page does not list the Free plan.[^openai-developer-mode] So on ChatGPT, the plan Brightline buys decides whether the worker can read the governed record at all, or only uploaded files. The plan also decides whether the worker can act through MCP. On a plan with no connector, the uploaded file is a copy of the approved knowledge, kept current by hand (step 5). That is Wednesday's risk, carried by hand.
2. **Where the trigger is set.** Brightline wants work to start when an invoice reaches the AP inbox. On ChatGPT that can be an event-triggered task, if the AP inbox is in Gmail. On Claude it is a regular check, such as every hour (step 6 of each tab). The two designs are not equivalent until the business says how much delay it accepts. Brightline's vendors expect an answer the same day, so an hour is acceptable. The Role Contract says "starts within one hour of an invoice arriving." Both designs meet that. Developer tools with event triggers come in [Chapter 9](../../managing-ai-workers/work-that-runs-without-you/both-ai-vendors.md).

**Open source adds no third difference for Brightline,** because Brightline already sends its AP work to an AI vendor's model. A vendor's model runs at the vendor, so the conversation goes there, wherever the sandbox runs. When a client's data must never leave its own systems, even for the model, the only route is an open-source tool with a model the client runs itself ([How to Use This Book](../../how-to-use-this-book.md)). That route moves the security work to the client.

## What stays the same

**The invariant.** If you replace either AI vendor, or move to an open-source tool, everything below the line keeps its meaning. That includes the policies, the case files, the delegated authority, the evaluation criteria and the evidence already kept. Connections may need rework. Portability is a requirement you verify, not a guarantee: the same evaluation cases are rerun on the new AI vendor, and passing them is the port. Part III builds on one AI vendor and ports to the other, and Chapter 49 deploys one specification on both to prove it.

![The picture on both AI vendors, and in open source: the same six layers as Figure 4.1. Four columns show the layer, Anthropic, OpenAI and open source. Each column names that side's own products for the four layers that differ: channels, runtime, memory and the way the worker reaches the KSoR. The SSoR, each matter's case file, and the DSoR, governed operations, controls, approvals and evidence, are company-owned in all three. A banner says the Role Contract, review contracts and evaluations are the same on all three.](img/both-ai-vendors.png)

*Figure 4.5. The picture on both AI vendors and in open source, drawn on the same six layers as Figure 4.1. As verified 18 November 2026 (Anthropic), 21 November (OpenAI) and 22 October (open source). Only the rented layers and memory differ, and for Brightline two differences matter: how each reaches the approved knowledge, and where the trigger is set.*

## Product reference

This is for looking things up, not for reading through. These are the products' details for the layers in Figure 4.5 that no step above uses, with the date each line was checked and its source. Products change every few weeks, so check the date before you rely on a line.

### Claude

*As verified 18 November 2026.*

- *Channels:* Claude Tag in Slack, in beta on Team and Enterprise plans, where Claude acts under its own identity,[^anthropic-claude-tag] and the API.[^anthropic-managed-agents]
- *Runtimes:* Claude Code, the coding harness, on your own computer or as a cloud session in its own machine.[^anthropic-claude-code-cloud] The Claude Agent SDK (software development kit), which you host yourself. Claude Managed Agents, in beta, is a pre-built agent harness that you can configure. It runs in managed infrastructure, in an Anthropic-managed cloud sandbox or in one on your own infrastructure. Its sessions are stateful by design: conversation history, sandbox state and outputs are stored on the server between interactions.[^anthropic-managed-agents]
- *Standing runtime:* Claude Duet, Anthropic's always-on agent, a research preview with a virtual machine of its own ([Chapter 1](../from-chatbots-to-ai-workers/both-ai-vendors.md) describes it). How long its machine and the files on it last is not stated.[^anthropic-duet]
- *Plans:* Pro is $20 a month, Max is $100 and Ultra is $200.[^anthropic-plan-prices]

### ChatGPT

*As verified 21 November 2026.*

- *Runtimes:* Codex, the coding harness. The OpenAI Agents SDK, an open-source framework you host yourself.[^openai-agents-sdk] The Agents API, in beta, is an OpenAI-managed Codex agent. OpenAI manages the session and the coordination between model and tools, with an OpenAI-hosted sandbox as one option.[^openai-agents-api]

### Open source

*As verified 22 October 2026.*

- *Channels:* OpenCode has a terminal interface, a desktop app and a web app.[^opencode-v2] Omnara's agents work in Slack and Discord, where they reply, ask questions and ask for approvals.[^omnara]
- *Runtimes:* OpenClaw, an open-source assistant that runs on your own computer, for ongoing work. Its tools run on that computer itself unless you set up a sandbox.[^openclaw] Omnara, which its makers describe as an alternative to Claude Managed Agents and OpenAI's Agents API that you can host yourself. You run it with Docker, a tool that packages software to run on any computer, or use Omnara Cloud. Its agents run in sandboxes from outside providers, or on your own laptop, server or container. There, a small program connects out to Omnara, so nothing needs to connect in.[^omnara]
- *Plans:* OpenClaw is free under the MIT license,[^openclaw] and Omnara is free to host yourself under the Apache 2.0 license.[^omnara] You pay for the model, unless you run one yourself, and for the computers. OpenCode Go is an optional $10-a-month plan for coding models.[^opencode-v2]
- *Running it safely:* OpenClaw treats incoming messages as untrusted, and its chat channels make unknown senders pair with it first. Its README points to its security guide before you connect other people or reach it from outside your network.[^openclaw] Omnara's local settings are insecure on purpose, so a real deployment follows its self-hosting guide.[^omnara]

[^anthropic-memory]: Use Claude's chat search and memory to build on previous context, Claude Help Center.
[^anthropic-claude-projects]: Let Claude coordinate ongoing work with Projects, Claude Code Docs.
[^openai-projects]: Projects in ChatGPT, OpenAI Help Center.
[^openai-memory]: Memory in ChatGPT, OpenAI Help Center.
[^anthropic-custom-connectors]: Get started with custom connectors using remote MCP, Claude Help Center.
[^openai-developer-mode]: Connecting custom MCP servers in ChatGPT, OpenAI Help Center.
[^openai-scheduled-tasks]: Scheduled tasks in ChatGPT, OpenAI Help Center.
[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center.
[^anthropic-pricing]: Plans & pricing, Anthropic.
[^anthropic-claude-tag]: What is Claude Tag?, Claude Help Center.
[^anthropic-managed-agents]: Claude Managed Agents overview, Claude Platform Docs.
[^anthropic-cowork-architecture]: Unified Claude Security Best Practices, version 1.3.6, Anthropic Trust Center, 7 November 2026.
[^anthropic-claude-code-cloud]: Use Claude Code in the cloud, Claude Code docs.
[^anthropic-duet]: Introducing Claude Duet, Anthropic, 21 October 2026.
[^anthropic-plan-prices]: Plans & pricing, Anthropic, accessed 18 November 2026.
[^anthropic-export]: Export your Claude data, Claude Help Center.
[^openai-chatgpt-slack-teams]: Using @ChatGPT in Slack and Microsoft Teams, OpenAI Help Center.
[^openai-agents-sdk]: OpenAI Agents SDK, OpenAI.
[^openai-agents-api]: Agents API (beta) FAQ, OpenAI Help Center.
[^openai-dots]: Introducing dots, OpenAI, 29 September 2026.
[^openai-export]: Exporting your ChatGPT history and data, OpenAI Help Center.
[^openclaw]: OpenClaw, OpenClaw Foundation, README on GitHub.
[^opencode-v2]: OpenCode v2 documentation, OpenCode.
[^omnara]: Omnara, README on GitHub.
[^opencode-providers]: Providers, OpenCode v2 documentation.



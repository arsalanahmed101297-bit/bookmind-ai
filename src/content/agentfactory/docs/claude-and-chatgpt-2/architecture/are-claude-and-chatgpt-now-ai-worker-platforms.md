# Are Claude and ChatGPT now AI Worker platforms? (/claude-and-chatgpt-2/architecture/are-claude-and-chatgpt-now-ai-worker-platforms)

---
type: Document
title: "Are Claude and ChatGPT now AI Worker platforms?"
description: "What an AI Worker needs from a runtime, what Claude and ChatGPT provide, two corrections to the platform claim, and what a business must add."
status: stable
order: 0.49
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "AI Worker platforms" ]
last_verified: 2026-11-09
sources:
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: new-stack
    title: "OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026, verified 2026-11-09)"
    resource: https://thenewstack.io/openai-codex-work-atlas/
  - id: whats-new
    title: "ChatGPT: What's new (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/whats-new
  - id: security-guide
    title: "Unified Claude Security Best Practices, v1.3.6 (Anthropic, November 7, 2026; verified 2026-11-21)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: openai-tasks
    title: "Scheduled tasks (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/automations
  - id: claude-skills
    title: "Skills, Claude Code documentation (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/skills
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: claude-mcp
    title: "MCP, Claude Code documentation (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/mcp
  - id: claude-permission-modes
    title: "Permission modes, Claude Code documentation (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/permission-modes
  - id: openai-build-skills
    title: "Build skills (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/build-skills
  - id: openai-personalize
    title: "Personalize ChatGPT and Codex (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/codex/personalize
  - id: openai-agents-md
    title: "AGENTS.md (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/codex/agent-configuration/agents-md
  - id: openai-get-started-work
    title: "Get started with ChatGPT Work (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/get-started-with-work
  - id: openai-plugins
    title: "Plugins (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/plugins
  - id: openai-mcp
    title: "MCP (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/extend/mcp?surface=cli
  - id: openai-permission-modes
    title: "Permission modes (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/permission-modes
  - id: openai-sandboxing
    title: "Sandboxing (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/sandboxing
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### The short answer

Mostly yes, with two corrections. Both products now provide the runtime an AI Worker needs: a computer, a harness, tools, schedules and approvals. But the platform is a cloud service, not the desktop app. And as shipped, it is a personal worker platform. A trusted business worker still needs identity, durable records and enforced authority around it. **[Inferred]** The verdict is ours. The facts behind it carry their own labels.

### What an AI Worker needs, and what each product provides

An AI Worker is a defined role, not just an agent that repeats a job. The runtime supplies part of that role. The organization supplies the rest: identity, authority, evaluation and the durable record. The runtime's part comes down to seven ingredients:

| Ingredient | Why a worker needs it | Claude | ChatGPT | Basis |
| --- | --- | --- | --- | --- |
| A role | The job, its rules and what success looks like | Skills, project instructions, a standalone scheduled prompt | Skills, custom instructions and `AGENTS.md` | Vendor-documented[^claude-skills],[^claude-projects],[^cloud-scheduled-tasks],[^openai-build-skills],[^openai-personalize],[^openai-agents-md] |
| A computer | To run code, read files and produce outputs | A fresh cloud sandbox for each session or run | Cloud sandboxes backed by VMs, which Work may reuse across tasks | Vendor-documented.[^security-guide],[^work-cloud-security] Observed for Claude |
| Tools | To act in the systems where the work lives | Connectors and MCP servers | Apps, plugins and MCP servers | Vendor-documented[^claude-mcp],[^cloud-scheduled-tasks],[^openai-get-started-work],[^openai-plugins],[^openai-mcp] |
| Work without a person present | The job runs on time, or when something happens | Cloud scheduled tasks with schedule, API and GitHub triggers | Scheduled tasks, with triggers on Gmail, Slack, GitHub and plugin events | Vendor-documented[^cloud-scheduled-tasks],[^openai-tasks] |
| Continuity | Work survives a reclaimed VM or a switch of device | The conversation and files saved to the account, plus project memory for work in a project | Cloud Work synced across web, mobile and desktop | Vendor-documented for ChatGPT[^whats-new] |
| Controls | The worker cannot do everything it might try | Permission modes, auto mode, the egress proxy ([Security boundaries](security-boundaries.md)) | Approval policy and sandbox modes | Vendor-documented[^claude-permission-modes],[^openai-permission-modes],[^openai-sandboxing] |
| A loop that ties it together | It plans, calls tools, checks results and repeats | The Claude Code harness | The Codex harness | Observed for Claude. Documented for Codex |

### Correction 1: it is a cloud platform, not a desktop one

The worker runs in Anthropic's or OpenAI's cloud. The harness, the sandbox and the scheduled runs mostly live there. Desktop tasks and local Codex are the exception. Cloud scheduled tasks "keep working when your laptop is closed".[^cloud-scheduled-tasks] The New Stack reports that Work brings "Codex's agentic capabilities across web, mobile, and desktop".[^new-stack]

The desktop app is a window onto the worker, and the bridge to your local files.

### Correction 2: it is personal more than organizational

On Claude, cloud scheduled tasks "belong to your individual claude.ai account". They are "not shared with teammates". And anything they do through connectors "appears as you".[^cloud-scheduled-tasks] In effect, the worker is you, working while you are away. Claude Tag is the exception, covered in [From personal worker to business worker](from-personal-worker-to-business-worker.md#claude-tag-a-team-worker-with-its-own-accounts).

OpenAI has started to go further. Its Team Tasks "run scheduled or event-triggered work through a team's service account and approved connections".[^whats-new] A **service account** is an account that belongs to a team or a program, not to one person.

A business worker needs more than either app provides by itself:

| What an organization needs | Why | What the apps provide today |
| --- | --- | --- |
| Its own identity | Actions must be traceable to the worker, not to whichever employee set it up | Claude runs as the user in the app. Claude Tag channels use their own service accounts. ChatGPT has a team service account for Team Tasks |
| A durable business record | Status, decisions and evidence must outlive sessions, and you must be able to search them | Conversation history and artifacts, which are not transactional records |
| Enforced authority | Approvals must hold even if the agent is wrong or manipulated | Prompts and approval modes inside the app |
| Audit and operations | Owners need logs, reliability and control of costs | Run history. Cloud task limits are listed in [Scheduled tasks](scheduled-tasks.md) |

What you add for each is in [From personal worker to business worker](from-personal-worker-to-business-worker.md#the-business-layer-what-to-build).

![The apps supply the runtime, and a business adds the layer around it. A dashed box, the business layer you add, surrounds the runtime from Claude or ChatGPT. The runtime holds the role, a sandboxed computer, tools, the harness loop, scheduled runs, continuity and approvals. Around it sit four business-layer boxes: enforced authority, own identity, a durable record, and audit and operations.](img/the-runtime-and-the-business-layer.png)

### The verdict, and what it means in practice

For a business worker trusted with money, customers or records, treat these products as the engine, not the whole vehicle. Wrap them in identity, durable state and enforced authority, as the [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md) does.

[^cloud-scheduled-tasks]: As verified on November 9, 2026. Automate work with scheduled tasks, Anthropic.
[^new-stack]: OpenAI is folding Codex into the ChatGPT app, The New Stack.
[^whats-new]: As verified on November 9, 2026. ChatGPT: What's new, OpenAI.
[^security-guide]: As verified on November 21, 2026, against the version 1.3.6 PDF. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators.
[^work-cloud-security]: As verified on November 9, 2026. ChatGPT Work cloud security, OpenAI.
[^openai-tasks]: As verified on November 9, 2026. Scheduled tasks, OpenAI.
[^claude-skills]: As verified on November 9, 2026. Skills, Claude Code documentation, Anthropic.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
[^claude-mcp]: As verified on November 9, 2026. MCP, Claude Code documentation, Anthropic.
[^claude-permission-modes]: As verified on November 9, 2026. Permission modes, Claude Code documentation, Anthropic.
[^openai-build-skills]: As verified on November 9, 2026. Build skills, OpenAI.
[^openai-personalize]: As verified on November 9, 2026. Personalize ChatGPT and Codex, OpenAI.
[^openai-agents-md]: As verified on November 9, 2026. AGENTS.md, OpenAI.
[^openai-get-started-work]: As verified on November 9, 2026. Get started with ChatGPT Work, OpenAI.
[^openai-plugins]: As verified on November 9, 2026. Plugins, OpenAI.
[^openai-mcp]: As verified on November 9, 2026. MCP, OpenAI.
[^openai-permission-modes]: As verified on November 9, 2026. Permission modes, OpenAI.
[^openai-sandboxing]: As verified on November 9, 2026. Sandboxing, OpenAI.



# Why both vendors chose the same design (/claude-and-chatgpt-2/architecture/why-both-vendors-chose-the-same-design)

---
type: Document
title: "Why both vendors chose the same design"
description: "What each feature is for, and the seven constraints that led Anthropic and OpenAI to similar designs."
status: stable
order: 0.42
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Why the same design" ]
last_verified: 2026-11-09
sources:
  - id: security-guide
    title: "Unified Claude Security Best Practices, v1.3.6 (Anthropic, November 7, 2026; verified 2026-11-21)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
  - id: agents-api
    title: "Agents API architecture (OpenAI, verified 2026-11-09)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/architecture
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: new-stack
    title: "OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026, verified 2026-11-09)"
    resource: https://thenewstack.io/openai-codex-work-atlas/
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### The goals

The point of this page: both vendors had the same problems to solve, so they built nearly the same thing.

The features let an AI agent do real work on a computer. They let it keep working after you close the tab. And they let it do this safely, while the model itself keeps nothing between calls.

Both vendors put a harness in an isolated cloud sandbox around a stateless model, and store lasting state elsewhere. This is one design pattern, not the only one. Local and self-hosted agents arrange things differently.

> [!NOTE]
> For builders: the rest of this page is detail you can skip on a first reading.

### Seven shared constraints, similar design choices

**[Inferred]** This is our reasoning from the documented features. Neither vendor states it.

![Seven shared constraints, each leading to a design response: a sandboxed computer, a harness loop, a server-side harness, one harness behind every app, reuse of Claude Code and Codex, disposable VMs with state outside, and keys outside with approvals required. Together they give the common pattern: UI, backend, a harness in an isolated sandbox, then a stateless model, with state and authority outside the sandbox.](img/seven-shared-constraints.png)

1. **Agents must act, not just answer.** Useful work means calling tools. An agent that only calls outside services may need no computer, as OpenAI's Agents API allows.[^agents-api] But code and files need a computer. Because the agent can be wrong or steered, that computer is isolated.
2. **The model is stateless, and its context is limited.** Something must build each call's context, run the tools, shorten the context when it fills up, and track progress. That is the harness.
3. **Work outlives the screen.** A loop in a browser tab stops when the tab closes. Long, scheduled or cross-device work needs the harness on the server.
4. **The same agent should appear everywhere.** One harness behind every app is cheaper and more consistent than one harness for each app.
5. **Coding agents had shown that the pattern works.** Claude Code and Codex already combined a loop, tools and a sandbox. OpenAI documents that ChatGPT Work's cloud tasks use the Codex harness.[^work-cloud-security] In the Claude session examined, a chat ran on Claude Code. Press coverage reports the same direction.[^new-stack]
6. **Fresh machines are cheap and safe.** Light VMs start quickly, so a fresh one per session is affordable. Throwing them away limits leaks and frees capacity. So lasting state must live outside the machine.
7. **Safety has to sit outside the agent.** The agent can be wrong or manipulated. So both vendors keep credentials out of the sandbox, filter network traffic and require approvals. On Claude, a **connector token**, the key that lets a connector sign in to one of your apps, never enters the sandbox. An **egress proxy**, a gatekeeper that all traffic leaving the sandbox must pass through, filters the network.[^security-guide] See [Security boundaries](security-boundaries.md).

Claude and Codex are two versions of this pattern.

[^security-guide]: As verified on November 21, 2026, against the version 1.3.6 PDF. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators.
[^agents-api]: Agents API architecture, OpenAI.
[^work-cloud-security]: As verified on November 9, 2026, OpenAI says "Work Cloud uses the Codex task-execution harness". ChatGPT Work cloud security, OpenAI.
[^new-stack]: OpenAI is folding Codex into the ChatGPT app, The New Stack.



# 22.10 How today's tools realize it (/building-ai-workers/agent-sdks/how-todays-tools-realize-it)

---
type: Document
title: "22.10 How today's tools realize it"
description: "The Claude Agent SDK, the OpenAI Agents SDK and open-source options, as verified November 5, 2026: short dated boxes, the differences that change a design decision, and the invariant."
status: stable
order: 322.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:35Z
chapter: "22"
part: III
expert_status: builder-only
concepts: [ "22.10" ]
last_verified: 2026-11-05

sources:
  - id: claude-tool-runner
    title: "Tool runner (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-runner
  - id: claude-agent-sdk-overview
    title: "Agent SDK overview (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/overview
  - id: claude-agent-sdk-typescript
    title: "Agent SDK reference: TypeScript (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/typescript
  - id: claude-agent-sdk-sessions
    title: "Work with sessions (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/sessions
  - id: claude-agent-sdk-npm
    title: "@anthropic-ai/claude-agent-sdk 0.3.318 (npm, accessed 2026-11-05)"
    resource: https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk/v/0.3.318
  - id: openai-agents-js-running
    title: "Running agents, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/running-agents/
  - id: openai-agents-js-hitl
    title: "Human in the loop, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/human-in-the-loop/
  - id: openai-agents-npm
    title: "@openai/agents 0.21.0 (npm, accessed 2026-11-05)"
    resource: https://www.npmjs.com/package/@openai/agents/v/0.21.0
  - id: openai-your-data
    title: "Data controls in the OpenAI platform (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/your-data
  - id: openai-agents-js-tracing
    title: "Tracing, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/tracing/
  - id: opencode-sdk
    title: "SDK (OpenCode, accessed 2026-11-05)"
    resource: https://opencode.ai/v2/docs/build/sdk/
  - id: ollama-faq
    title: "FAQ (Ollama, accessed 2026-11-05)"
    resource: https://docs.ollama.com/faq
  - id: openai-sign-in-with-chatgpt
    title: "Sign in with ChatGPT: Quickstart (OpenAI, accessed 2026-11-06)"
    resource: https://developers.openai.com/siwc/quickstart
generated:
  at: 2026-11-15T11:19:35Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*The short boxes below name the products. Each carries its date, because product detail changes often. The full boxes, with every option, version and source, are on the companion page, **[Chapter 22 reference](reference.md)**.*

**What you will learn.** How today's products carry this chapter's ideas, what each one adds or leaves out, and which differences change a design decision.

**Why it matters.** Product details change often. The rules you own around them do not.

### Is there a standard for agent SDKs?

No standard defines an agent SDK. The products below carry the same loop in different shapes. What is standard is around them: MCP for tools and servers, and **OpenTelemetry** (an open standard for traces) for traces.

### Anthropic: the tool runner and the Claude Agent SDK (the first SDK)

*As verified November 5, 2026.*

- **Tool runner ([22.1](from-your-loop-to-a-library.md)):** in beta.[^claude-tool-runner] `thread: false` keeps the conversation on your side (the default keeps it on the provider's side).
- **The run ([22.3](one-run-start-to-finish.md)):** "Claude Code as a library".[^claude-agent-sdk-overview] `query()` streams messages, ending in a `result` with its cost.
- **Options ([22.4](tools-and-where-each-call-runs.md) to [22.6](what-counts-as-done.md)):** `tools: []`, `allowedTools`, `permissionMode`, the `canUseTool` callback, hooks (a failing hook lets the call go ahead unless set to block), `maxTurns`, `maxBudgetUsd`.[^claude-agent-sdk-typescript]
- **Conversation and traces ([22.7](where-the-conversation-lives.md), [22.8](where-traces-go.md)):** session files under the home folder by default, `persistSession: false` in TypeScript.[^claude-agent-sdk-sessions] No trace leaves unless you set its OpenTelemetry settings.
- **What stays yours ([22.9](what-an-sdk-still-leaves-to-you.md)):** `settingSources: []`, `strictMcpConfig`, and `env`, which replaces the environment in TypeScript but adds to it in Python.[^claude-agent-sdk-npm] Pre-1.0. Check its license terms before you ship.[^claude-agent-sdk-overview]
- **Sign-in:** "Unless previously approved, Anthropic does not allow third party developers to offer claude.ai login or rate limits for their products."[^claude-agent-sdk-overview]

### OpenAI: the Agents SDK (the second SDK)

*As verified November 5, 2026.*

- **The run (22.3):** `Agent` and `Runner`, in your own process.[^openai-agents-js-running] The result has the output, history and usage, but no cost.
- **Options (22.4 to 22.6):** `needsApproval`, `result.interruptions`, `RunState`[^openai-agents-js-hitl], output guardrails, `maxTurns` (10 if you set none).[^openai-agents-npm]
- **Conversation and traces (22.7, 22.8):** `store: false` stops OpenAI storing the response, though its abuse-monitoring logs, the records it keeps to catch misuse, are kept up to 30 days.[^openai-your-data] Tracing goes to OpenAI by default, even with a local model. Turn it off with `setTracingDisabled(true)`.[^openai-agents-js-tracing]
- **Sign-in:** as of November 6, 2026, OpenAI's Sign in with ChatGPT lets open-source apps, and selected partner apps, use an eligible person's ChatGPT plan for AI requests, with no API key.[^openai-sign-in-with-chatgpt]
- **The license:** pre-1.0, MIT, a license that lets anyone use and change the code.[^openai-agents-npm]

### Open source

*As verified November 5, 2026.*

- **Three different things.** An **open-source SDK** (the Agents SDK itself, MIT)[^openai-agents-npm]. A **self-hosted model** (the lab's small model, served by Ollama on your own computer). An **independently built runtime** (such as OpenCode, a harness you can drive from code)[^opencode-sdk]. The lab's port is the first two together.
- **No fair match** for a hosted tool or a cost cap: on your own computer, every call is yours, and the limit that matters is time and compute, your computer's processing power.
- **Security.** Keep a local model server on `127.0.0.1`.[^ollama-faq] A harness with a shell still belongs in a container. Treat a downloaded model as untrusted.

### The comparison: only the differences that change a design decision

| Decision | The first SDK (Claude Agent SDK) | The second SDK (OpenAI Agents SDK) | Open source |
| --- | --- | --- | --- |
| **Where can it run?** | A long-lived process with a disk, for its harness program | Any process, including a short-lived one | Runner shape: any process. Harness shape: a long-lived host, a server you keep running or your own program (OpenCode 2's SDK) |
| **What must you switch off?** | Built-in tools, settings files, auto memory (notes the harness keeps for later runs), other MCP servers, inherited environment, session files | Tracing, and server-side storage | Runner shape: tracing, if you use the OpenAI Agents SDK. Harness shape: what it loads and sends by default, as for the first SDK |
| **How is a tool with an effect decided?** | Built for a callback that answers at once. A hook can also hand a call back, which the lab does not use | Built for an approval: the run pauses and hands the call back, with a run state you can save and resume later[^openai-agents-js-hitl] | Runner shape: the call handed back, as the second SDK |
| **What stops a runaway run?** | Turn limit and budget cap. Time is yours | Turn limit. Cost and time are yours | Turn limit. Time and compute are yours |
| **Where does data leave your computer?** | Model calls, once the defaults are off (the harness also asks Anthropic for organization settings) | Model calls, and traces by default | Nowhere, unless traces are left on |

### Do the two SDKs do the same things?

No parity is implied. The two SDKs do not have the same features in different words: one is built around a callback and has a budget cap, the other is built around a hand-back approval and has no cost cap. Each can do some of what the other does best, in a less central way, so the lab picks the shape each SDK is built for. And an open model on your own computer is not a drop-in equal (one you can swap in with no other change) of a large hosted model: expect weaker tool choice, more broken arguments and slower answers, and test before you rely on it.

**The finished mapping table** is on the companion page, Chapter 22 reference. Task 15 checks your own table against it.

### What is the invariant?

An SDK may supply defaults for tools, limits, state and what counts as done. The owner of the system still chooses, checks and enforces the rules the business needs: which tools the worker may use, whose credentials it carries, what it may spend, where its data goes, and what a finished answer must contain. Replace any SDK, provider or open-source tool, and that stays true.

[^claude-tool-runner]: Tool runner, Anthropic.
[^claude-agent-sdk-overview]: Agent SDK overview, Anthropic.
[^claude-agent-sdk-typescript]: Agent SDK reference: TypeScript, Anthropic.
[^claude-agent-sdk-sessions]: Work with sessions, Anthropic.
[^claude-agent-sdk-npm]: @anthropic-ai/claude-agent-sdk 0.3.318, npm.
[^openai-agents-js-running]: Running agents, Agents SDK for TypeScript, OpenAI.
[^openai-agents-js-hitl]: Human in the loop, Agents SDK for TypeScript, OpenAI.
[^openai-agents-npm]: @openai/agents 0.21.0, npm.
[^openai-your-data]: Data controls in the OpenAI platform, OpenAI.
[^openai-agents-js-tracing]: Tracing, Agents SDK for TypeScript, OpenAI.
[^opencode-sdk]: SDK, OpenCode.
[^ollama-faq]: FAQ, Ollama.
[^openai-sign-in-with-chatgpt]: Sign in with ChatGPT: Quickstart, OpenAI.



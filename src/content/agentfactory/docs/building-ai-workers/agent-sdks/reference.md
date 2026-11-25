# Chapter 22 reference: today's agent SDKs, in detail (/building-ai-workers/agent-sdks/reference)

---
type: Document
title: "Chapter 22 reference: today's agent SDKs, in detail"
description: "The companion page to Chapter 22. The full dated boxes for the Claude Agent SDK, the OpenAI Agents SDK and open-source options, what the authors' runs showed on the wire, and the field guide (F0 to F7) that the lab's tasks point to."
status: stable
order: 322.85
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:24Z
chapter: "22"
part: III
expert_status: builder-only
concepts: []
field_guide: E.agent-sdks
next_review: 2026-12-05
last_verified: 2026-11-05
sources:
  - id: claude-agent-sdk-overview
    title: "Agent SDK overview (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/overview
  - id: claude-tool-runner
    title: "Tool runner (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-runner
  - id: claude-agent-sdk-npm
    title: "@anthropic-ai/claude-agent-sdk 0.3.318 (npm, accessed 2026-11-05)"
    resource: https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk/v/0.3.318
  - id: claude-agent-sdk-pypi
    title: "claude-agent-sdk 0.2.178 (PyPI, accessed 2026-11-05)"
    resource: https://pypi.org/project/claude-agent-sdk/0.2.178/
  - id: claude-agent-sdk-typescript
    title: "Agent SDK reference: TypeScript (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/typescript
  - id: claude-code-tools-reference
    title: "Tools reference (Claude Code, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/tools-reference
  - id: claude-agent-sdk-mcp
    title: "Connect to external tools with MCP (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/mcp
  - id: claude-agent-sdk-permissions
    title: "Configure permissions (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/permissions
  - id: claude-code-hooks
    title: "Hooks reference (Claude Code, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/hooks
  - id: claude-agent-sdk-sessions
    title: "Work with sessions (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/sessions
  - id: claude-agent-sdk-subagents
    title: "Subagents in the SDK (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/subagents
  - id: claude-agent-sdk-observability
    title: "Observability with OpenTelemetry (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/observability
  - id: claude-code-env-vars
    title: "Environment variables (Claude Code, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/env-vars
  - id: claude-agent-sdk-features
    title: "Use Claude Code features in the SDK (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/claude-code-features
  - id: claude-agent-sdk-hosting
    title: "Hosting the Agent SDK (Anthropic, accessed 2026-11-05)"
    resource: https://code.claude.com/docs/en/agent-sdk/hosting
  - id: claude-agent-sdk-ts-license
    title: "claude-agent-sdk-typescript, LICENSE.md (Anthropic on GitHub, accessed 2026-11-05)"
    resource: https://github.com/anthropics/claude-agent-sdk-typescript/blob/main/LICENSE.md
  - id: openai-agents-guide
    title: "Agents (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents
  - id: openai-agents-npm
    title: "@openai/agents 0.21.0 (npm, accessed 2026-11-05)"
    resource: https://www.npmjs.com/package/@openai/agents/v/0.21.0
  - id: openai-agents-pypi
    title: "openai-agents 0.24.0 (PyPI, accessed 2026-11-05)"
    resource: https://pypi.org/project/openai-agents/0.24.0/
  - id: openai-agents-js-tools
    title: "Tools, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/tools/
  - id: openai-agents-js-mcp
    title: "Model Context Protocol, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/mcp/
  - id: openai-agents-js-hitl
    title: "Human in the loop, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/human-in-the-loop/
  - id: openai-agents-js-running
    title: "Running agents, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/running-agents/
  - id: openai-agents-js-guardrails
    title: "Guardrails, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/guardrails/
  - id: openai-reasoning-guide
    title: "Reasoning models (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/reasoning
  - id: openai-agents-python-models
    title: "Models, Agents SDK for Python (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-python/models/
  - id: openai-agents-js-tracing
    title: "Tracing, Agents SDK for TypeScript (OpenAI, accessed 2026-11-05)"
    resource: https://openai.github.io/openai-agents-js/guides/tracing/
  - id: openai-sandbox-agents
    title: "Sandbox agents (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents/sandboxes
  - id: opencode-sdk
    title: "SDK (OpenCode, accessed 2026-11-05)"
    resource: https://opencode.ai/v2/docs/build/sdk/
  - id: opencode-server
    title: "Server (OpenCode, accessed 2026-11-05)"
    resource: https://opencode.ai/docs/server/
  - id: opencode-mcp
    title: "MCP servers (OpenCode, accessed 2026-11-05)"
    resource: https://opencode.ai/v2/docs/mcp-servers/
  - id: opencode-plugins
    title: "Server plugins (OpenCode, accessed 2026-11-05)"
    resource: https://opencode.ai/v2/docs/build/plugins/server/
  - id: ollama-openai
    title: "OpenAI compatibility (Ollama, accessed 2026-11-05)"
    resource: https://docs.ollama.com/api/openai-compatibility
  - id: opencode-models
    title: "Models (OpenCode, accessed 2026-11-05)"
    resource: https://opencode.ai/docs/models/
  - id: ollama-faq
    title: "FAQ (Ollama, accessed 2026-11-05)"
    resource: https://docs.ollama.com/faq
  - id: openai-node
    title: "openai 7.51.0 (npm, accessed 2026-11-05)"
    resource: https://www.npmjs.com/package/openai/v/7.51.0
  - id: openai-trace-grading
    title: "Trace grading (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/trace-grading
  - id: openai-sign-in-with-chatgpt
    title: "Sign in with ChatGPT: Quickstart (OpenAI, accessed 2026-11-06)"
    resource: https://developers.openai.com/siwc/quickstart
  - id: ollama-context-length
    title: "Context length (Ollama, accessed 2026-11-06)"
    resource: https://docs.ollama.com/context-length
  - id: ollama-qwen3-tags
    title: "qwen3 tags (Ollama library, accessed 2026-11-06)"
    resource: https://ollama.com/library/qwen3/tags
generated:
  at: 2026-11-21T00:02:24Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*This page is for looking things up, not for reading straight through. The chapter teaches each idea. This page gives the exact options, versions and findings behind it. In the chapter, the first SDK is the Claude Agent SDK and the second SDK is the OpenAI Agents SDK.*

## The full dated boxes

*Each box follows the topics of [22.1](from-your-loop-to-a-library.md) to [22.9](what-an-sdk-still-leaves-to-you.md), in order, and carries its own date. Within a box, **(Checked)** marks a fact read on its owner's own pages. **(SDK)** marks a fact read in the pinned package's own types or code. **(Run)** marks a fact seen in the authors' offline run. That run used the real SDKs, the real harness program and the real practice connector, with a stand-in model. **(Verify)** marks a fact not yet confirmed. These boxes are reviewed monthly.*

### Anthropic: the client SDK's tool runner, and the Claude Agent SDK

*As verified November 5, 2026.*

- **What it takes over (22.1).** Anthropic draws the same ladder. With the client SDK, "you write the tool loop yourself, or let the client SDK's beta tool runner drive it". The Agent SDK lets you "embed Claude Code's agent in your own Python or TypeScript application, in a process you operate". Managed Agents is "a hosted agent harness that runs the agent loop"[^claude-agent-sdk-overview] (Checked). The tool runner is in beta in the client SDKs[^claude-tool-runner]. In TypeScript it is `client.beta.messages.toolRunner()`, in Python `client.beta.messages.tool_runner()`, with `max_iterations` as its turn limit, and MCP tools wrapped by `mcpTools()` or `async_mcp_tool()` (SDK). **By default it runs over a message thread:** the second request sent only the tool result and `thread: {"type": "continue", "previous_message_id": …}`, with the beta header `message-threads-2026-08-12`. `thread: false` sends the full history every turn (SDK, Run).
- **The run ([22.3](one-run-start-to-finish.md)).** The Claude Agent SDK is "Claude Code as a library", formerly the Claude Code SDK. It is the harness shape: it spawns and supervises a `claude` program as a subprocess, with a shell, a working folder and session files[^claude-agent-sdk-overview] (Checked). TypeScript `@anthropic-ai/claude-agent-sdk`, the lab pins 0.3.318, Node 18.14 or later.[^claude-agent-sdk-npm] Python `claude-agent-sdk`, the lab pins 0.2.178, Python 3.10 or later.[^claude-agent-sdk-pypi] Each package brings its own copy of the program (SDK). `query({ prompt, options })` streams messages: `system` (`init`, `compact_boundary`), `assistant`, `user`, and `result` with subtype `success`, `error_max_turns`, `error_max_budget_usd`, `error_during_execution` or `error_max_structured_output_retries`, each carrying `total_cost_usd`, `usage`, `num_turns` and `session_id`[^claude-agent-sdk-typescript] (Checked). One reply arrived as one `assistant` message per block (Run). The program in the authors' run reported version 2.1.318. It sent `anthropic-version: 2023-06-01` with eight betas of its own, and `max_tokens: 128000`. It also sent adaptive thinking, an effort setting, a description of the environment, today's real date and the remaining budget. The lab's code sets none of these (Run).
- **Tools ([22.4](tools-and-where-each-call-runs.md)).** `tools: []` turns off every built-in tool. With the `claude_code` preset the init listed 33 tools, 28 built in, among them `Bash`, `Read`, `Edit`, `Write`, `WebFetch`, `WebSearch`, `Task` (the init message's name for the `Agent` tool), `Skill` and `ToolSearch` (Run). The documentation also names `Glob` and `Grep`, left out by default on macOS, Linux and WSL[^claude-code-tools-reference] (Checked). The exact list depends on the version and setup. Custom tools: `tool(name, description, zodShape, handler)` in `createSdkMcpServer`, in-process, named `mcp__{server}__{tool}`. Remote servers: `{ type: "http", url, headers }`, with the token in `headers`, because "the SDK doesn't open a browser or run an interactive OAuth flow"[^claude-agent-sdk-mcp] (Checked). Few hosted tools in this shape: the program runs every call, though `WebSearch` uses Anthropic's server-side search and the optional advisor is a server tool[^claude-code-tools-reference] (Checked).
- **Who may run a tool ([22.5](who-may-run-a-tool.md)).** Checked in order: hooks, deny rules, ask rules, the permission mode, allow rules, the `canUseTool` callback. Modes: `default`, `acceptEdits`, `plan`, `dontAsk`, `auto`, `bypassPermissions`, and "`allowed_tools` does not constrain `bypassPermissions`"[^claude-agent-sdk-permissions] (Checked). **Left out, the mode comes from loaded settings, else `default`** for Claude Code 2.1.302 or later, Anthropic's documentation says[^claude-agent-sdk-permissions] (Checked). The package's own type comment says `auto` where that is the default (SDK). The lab names `default` itself. An allowed tool never reaches `canUseTool`, and the SDK warns, naming them: in TypeScript a process warning with the code `CLAUDE_SDK_CAN_USE_TOOL_SHADOWED`, in Python a `CanUseToolShadowedWarning`[^claude-agent-sdk-permissions] (Checked, Run). A `PreToolUse` hook returns `permissionDecision` `allow`, `deny`, `ask` or `defer`. **A hook that fails lets the action go ahead by default (`'continue'`), unless set to `'block'`** (SDK). The hook ran before the callback (Run). **A hook can also hand a call back:** `defer` ends the run with a `deferred_tool_use` result and the end reason `tool_deferred`, so your code can decide later and resume (SDK, not run by the lab).
- **Done and limits ([22.6](what-counts-as-done.md)).** Done when the model stops asking for tools. `maxTurns`, counted in tool-use round trips: four model calls reported `num_turns: 5` (Run). `maxBudgetUsd`, covering subagents, can be passed by the cost of one response[^claude-agent-sdk-typescript] (Checked, Run: about $0.014 on a $0.01 cap). No time option: abort with an `AbortController`. No guardrail feature by that name (a `Stop` hook can read the final answer and keep the agent working[^claude-code-hooks]): the lab's worker checks the answer in its own code after the run, with rule 2, and reports `no_citation` (SDK, Run). Retries are the harness's own.
- **Where the conversation lives ([22.7](where-the-conversation-lives.md)).** Session files under `~/.claude/projects/<encoded-cwd>/<session-id>.jsonl` by default[^claude-agent-sdk-sessions] (Checked, Run: 25 lines, holding the tool result, not the token). `resume`, `continue`, `forkSession`. `persistSession: false` in TypeScript. In Python there is no option, and the lab passes `extra_args={"no-session-persistence": None}`, the program's own flag (SDK). Connection logs were still written under the home folder's cache, `mcp-logs-<server>/` (Run). Automatic compaction emits `compact_boundary`. Subagents through `agents`, of which only the final message returns[^claude-agent-sdk-subagents] (Checked).
- **Where traces go ([22.8](where-traces-go.md)).** No trace leaves by default. Tracing is OpenTelemetry, set through environment variables[^claude-agent-sdk-observability] (Checked). The lab's worker always sets `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1`, which turns off the harness's nonessential traffic, such as auto-updates, telemetry, error reports and release notes[^claude-code-env-vars] (Checked).
- **What stays yours (22.9).** `settingSources` left out loads user, project and local settings. `strictMcpConfig: true` uses only `mcpServers`. Two inputs load whatever `settingSources` says: auto memory at `~/.claude/projects/<project>/memory/`, which `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` in `env` turns off, and the global `~/.claude.json`[^claude-agent-sdk-features] (Checked). In TypeScript `env` **replaces** the subprocess's environment. In Python it is **added** to `os.environ` (SDK, Run). The authors' first run, without these, listed the computer's own browser tools and added a note with the signed-in person's details (Run). It reads `ANTHROPIC_API_KEY` and does not load `.env` files. "Unless previously approved, Anthropic does not allow third party developers to offer claude.ai login or rate limits for their products."[^claude-agent-sdk-overview] Every running agent is "a long-lived process tied to local state". Suggested: "1 GiB RAM, 5 GiB disk, and 1 CPU per agent", in a sandboxed container[^claude-agent-sdk-hosting] (Checked).
- **Status, license and price.** Tool runner: beta. The Agent SDK is pre-1.0, which "follows semver: take patch releases continuously and review the TypeScript or Python changelog before taking a minor"[^claude-agent-sdk-hosting] (Checked). Anthropic's pages give it no status label, and the Python package calls itself alpha[^claude-agent-sdk-pypi] (Checked). License: use of the Agent SDK is "governed by Anthropic's Commercial Terms of Service", except a component whose own LICENSE file says otherwise[^claude-agent-sdk-overview] (Checked). The Python package's own LICENSE is MIT. The TypeScript package, and the Claude Code program both packages bring, say "All rights reserved", for use under Anthropic's terms[^claude-agent-sdk-ts-license] (Checked). API usage at list price.

### OpenAI: the Agents SDK

*As verified November 5, 2026.*

- **What it takes over (22.1).** On OpenAI's ladder, the Responses API is for "calling models directly or building an agent from scratch". The Agents SDK is for "building agents with custom tools and workflows in your application". The Agents API is for "long-running tasks where OpenAI manages the agent"[^openai-agents-guide] (Checked). No separate tool runner rung on that ladder, though its client libraries include one, `ResponsesToolRunner` (SDK).
- **The run (22.3).** The runner shape. TypeScript `@openai/agents`, the lab pins 0.21.0, MIT, Node 22 or later, with `zod` 4.[^openai-agents-npm] Python `openai-agents`, the lab pins 0.24.0, Python 3.10 or later,[^openai-agents-pypi] imported as `agents`, so no file may be named `agents.py` (SDK). Provider-agnostic, on the Responses API by default (Checked). An `Agent` holds `name`, `instructions`, `model`, `modelSettings`, `tools`, `handoffs`, `outputType`, guardrails and `mcpServers`, and `run()` or `Runner.run()` runs it. The result gives `finalOutput`, the history (`result.history` in TypeScript, `result.to_input_list()` in Python) and usage. Streaming is available too.
- **Tools (22.4).** No built-in tools on by default: the SDK's shell, file-patch and computer tools run only if you add them[^openai-agents-js-tools] (Checked). `tool()` and `function_tool` take a schema, strict by default. `MCPServerStreamableHttp` and `MCPServerStdio` connect from your process, with the token in `requestInit.headers` (TypeScript) or `params.headers` (Python). Hosted tools run on OpenAI's side, including `hostedMcpTool`, where "hosted tools push the entire round-trip into the model"[^openai-agents-js-mcp] (Checked, SDK). `agent.asTool()`, and handoffs as `transfer_to_<agent>` tools.
- **Who may run a tool (22.5).** No permission modes. Your own function tools get no callback of the first SDK's kind: only the SDK's shell and file-patch tools, and hosted MCP tools, take an `onApproval` callback that answers at once[^openai-agents-js-hitl] (Checked). A tool marked `needsApproval` pauses the run with `result.interruptions`. `state.approve()` and `state.reject()` (with `message` in TypeScript, `rejection_message` in Python), then `run(agent, state)`. `RunState.fromString()` resumes a saved run later[^openai-agents-js-hitl] (Checked, SDK, Run). No hooks of the first SDK's kind: lifecycle hooks can watch each step, and approvals and guardrails decide. `needsApproval` can be a function, so your code decides which calls need approval, and **tool input guardrails** (`inputGuardrails` on a tool, Python `tool_input_guardrail`) can check or block a call before it runs (SDK, not run by the lab).
- **Done and limits (22.6).** Done when the model "produces text output with the desired type, and there are no tool calls"[^openai-agents-js-running] (Checked). `DEFAULT_MAX_TURNS = 10` in both languages, then `MaxTurnsExceededError` or `MaxTurnsExceeded` (SDK). Input guardrails run for the first agent, alongside the model by default or before it if set, and a tripped one raises `InputGuardrailTripwireTriggered`. Output guardrails run on the last agent's answer, and a tripped one raises `OutputGuardrailTripwireTriggered`[^openai-agents-js-guardrails] (Checked). No cost cap. No time option: pass a `signal`. The runner's `modelSettings.retry` is opt-in, and the client keeps its own two retries unless the runner manages retries (Checked, SDK).
- **Where the conversation lives (22.7).** Four strategies: the history you pass, a `session` (such as `MemorySession` or `OpenAIConversationsSession`), `conversationId`, `previousResponseId`. The last two are mutually exclusive, and mixing client and server state "can duplicate context"[^openai-agents-js-running] (Checked). With `store: false`, every request carried `store: false`. **The SDK sends `include: []` unless asked.** The lab asks for `["reasoning.encrypted_content"]` through `providerData` (TypeScript) or `response_include` (Python) (Run, SDK). OpenAI's reasoning guide says reasoning items carry their encrypted content by default when `store` is false[^openai-reasoning-guide] (Checked). But the SDK's own guide says to request it[^openai-agents-python-models] (Checked), so the lab asks. Nothing is written to disk.
- **Where traces go (22.8).** On by default in server runtimes, to the OpenAI dashboard. Off with `OPENAI_AGENTS_DISABLE_TRACING=1` or `setTracingDisabled(true)` / `set_tracing_disabled(True)`. Unavailable under Zero Data Retention. Custom processors add or replace the default[^openai-agents-js-tracing] (Checked). By default the trace goes to `https://api.openai.com/v1/traces/ingest`, with your `OPENAI_API_KEY`, whatever model the agent uses (SDK). The TypeScript SDK has no OpenTelemetry exporter of its own: send spans elsewhere with your own trace processor, or a third party's (SDK).
- **What stays yours (22.9).** It runs in your process and reads what your code gives it, plus a few `OPENAI_` settings from the environment, among them `OPENAI_API_KEY`, `OPENAI_BASE_URL`, `OPENAI_ORG_ID`, `OPENAI_PROJECT_ID` and `OPENAI_AGENTS_DISABLE_TRACING` (SDK). As of November 6, 2026, OpenAI's Sign in with ChatGPT lets open-source apps, and selected partner apps, use an eligible person's ChatGPT plan for AI requests, with no API key[^openai-sign-in-with-chatgpt] (Checked). `OpenAIProvider({ baseURL, apiKey, useResponses })` points it at another server. `SandboxAgent` "is still an Agent"[^openai-sandbox-agents], with an isolated Unix-like environment, in both languages: the bridge to Chapter 23 (Checked).
- **Status, license and price.** Pre-1.0, MIT, free library. API usage at list price.

### Open source

*As verified November 5, 2026.*

- **Three different things, all called open source.** Keep them apart, because each one changes something different.
  - **An open-source SDK** is library code you can read and change. The OpenAI Agents SDK is one (MIT), and the lab already uses it.
  - **A self-hosted model** is open model weights served on your own computer. The lab's port uses the small model from Lab 21 behind Ollama's OpenAI-compatible server, reached through `baseURL`.
  - **An independently built agent runtime** is a harness made by someone other than the model providers. OpenCode (MIT) is one.
- **What it takes over (22.1).** The lab's port combines the first two: the same open-source SDK, on a self-hosted model. That is not an independent runtime, so the runner-shape entries below say "the same as OpenAI", and only the model and its server change. The independent harness here is OpenCode. In OpenCode 2 it can be driven from code with `@opencode/sdk`[^opencode-sdk]. In that SDK, `OpenCode.create()` hosts OpenCode inside your own program, with `sessions.create`, `sessions.prompt` and an event stream. It can also be driven through `opencode serve`, an HTTP server on `127.0.0.1:4096` with an OpenAPI description[^opencode-server] (Checked). The lab does not use OpenCode's SDK.
- **The run (22.3).** On the runner shape, the same result and history as the OpenAI box. OpenCode reports a run as server-sent events (Checked).
- **Tools (22.4).** OpenCode has built-in tools, like any coding harness, and connects to local and remote MCP servers, handling OAuth for remote ones[^opencode-mcp] (Checked). The runner shape turns none on. **No fair match** for a hosted tool: on your own computer, your process runs every call.
- **Who may run a tool (22.5).** On the runner shape, the same approvals. OpenCode has its own permission settings, and an OpenCode 2 plugin's permission hook runs your own code on each decision, a fair match for the permission callback[^opencode-plugins] (Checked).
- **Done and limits (22.6).** On the runner shape, the same turn limit and guardrails. **No fair match** for a cost cap: a local model costs no money per token, so the limit that matters is time and compute.
- **Where the conversation lives (22.7).** The runner shape with a local server is stateless only: Ollama's Responses endpoint has no `previous_response_id` or `conversation`[^ollama-openai] (Chapter 21). OpenCode keeps sessions in its own server.
- **Where traces go (22.8).** **The OpenAI Agents SDK still sends traces to OpenAI** when pointed at a local model, unless tracing is off (SDK). There is no open-source tracing default: send spans to a collector you run. OpenCode's own tracing was not checked for this chapter.
- **What stays yours (22.9).** Everything, including the model. Its own docs warn that "only a few" models are good at both code and tool calling[^opencode-models] (OpenCode, Checked). The authors expect a small local model to choose tools worse than the hosted ones (Task 14).
- **Security.** A local server listens on `127.0.0.1` only.[^ollama-faq] A harness with a shell is still a harness with a shell: run it in a container. Treat a downloaded model as untrusted code and data, from a source you chose.
- **Status and price.** Free, on your own hardware.


## Words this chapter uses

Words from earlier chapters keep their meaning: tool call, tool result, stop reason, stateless, stateful, conversation array, reasoning item, turn limit, cost cap, trace, span and retry (20), connector, MCP and untrusted output ([17](../connectors-and-mcp/overview.md)), sign-in token ([18](../securing-connectors/who-is-calling.md)), citation ([19](../business-data-and-retrieval/answers-that-cite-or-abstain.md)), and async ([14](../structuring-programs/async-and-await.md)). Each is recalled where it is first used.

**What work did the SDK take over? (Part A)**

| Word | Meaning |
| --- | --- |
| SDK | A provider's code library for its API, or for agents built on it (22.1) |
| Library | Code someone else wrote that your program calls (22.1) |
| Runtime | What a worker runs on: the process, the computer and the credentials (22.1, 22.9) |
| Provider | The company or server that answers the model calls (22.1) |
| Tool runner | The smallest agent library: it runs the loop around one model API and leaves the rest to you (22.1) |
| Harness | The program around a model that runs the loop, offers tools, keeps the conversation and enforces limits. A coding agent is one (22.1) |
| A harness used as a library, an agent and a runner | The two shapes of agent SDK: a harness started and steered by your code, and an agent described as configuration and run by a loop in your process (the key, in What you will build) |
| Mapping table | The table from each line of your Chapter 21 loop to where each SDK does it ([22.2](the-map.md)) |
| Portable specification | What the worker must do on any runtime, and how to check it: `docs/worker-spec.md` ([Lab 22](lab.md)) |

**What can it do without asking me? (Part B)**

| Word | Meaning |
| --- | --- |
| Subprocess | A program your program starts and talks to. The first SDK starts its harness as one (22.3) |
| Message stream | The sequence of messages a run sends your code as it goes (22.3) |
| Init message, result message | The first message, with what the run was given, and the last, with the stop, the turns and the cost (22.3) |
| Subtype | The field in a result message that says how the run ended, such as `success` or `error_max_turns` (22.3) |
| Beta | A feature a provider still marks as unfinished. You turn it on by naming it in a request header (22.9, Task 1) |
| Agent (as configuration), runner | A description of a worker, with no loop inside, and the loop that runs it (22.3) |
| Final output, history | What the runner returns when the model answers and asks for no tool, and the run's items in order (22.3) |
| Built-in tool | A tool that comes with the SDK, such as a shell or a web fetcher (22.4) |
| In-process server | An MCP server that runs inside your own program, serving your own tools (22.4) |
| Hosted tool | A tool whose call the provider runs, inside its own service (22.4) |
| Handoff | One agent passing the conversation to another (22.4) |
| Hook | Your code that the SDK runs at a set moment, such as before every tool call (22.5) |
| Permission mode | The SDK's general setting for undecided tool calls (22.5) |
| Allow list | Tools that run without asking (22.5) |
| Permission callback | Your function, which the SDK asks about a tool call and then carries on at once (22.5) |
| Authorization | The decision, by rules, whether a tool call may run (22.5) |
| Approval, interruption | A tool call that pauses the run and is handed back to your code to decide, now or later. The handed-back call is the interruption. Resuming starts the run again from its saved state (22.5) |
| Run state | The saved record of where a run paused for an approval, which can be resumed, now or later (22.5) |
| Regular expression | A small pattern for matching text, such as `^INV-\d{4}$` (Task 6) |

**How do I know the run was safe and successful? (Part C)**

| Word | Meaning |
| --- | --- |
| Run limit, resource limit | A stop on how long the loop goes on (turns), or on what it uses (money, time). A limit stops a run but never says the answer was right (22.6) |
| Acceptance check | A check that decides whether a run's answer may be handed over (22.6) |
| Guardrail, tripwire | Your check on a run's input or output, and its failure, which stops the run. One kind of acceptance check (22.6) |
| Budget cap | The cost cap as an SDK option, in dollars. The chapter calls it the cost cap (22.6) |
| Backoff | Waiting a little longer before each retry (22.2) |
| State | The conversation a run continues from (22.7) |
| Session, session file | A conversation kept by the SDK on your side, and the file it is written to (22.7) |
| Resume, continue, fork | Carry on a session by id, carry on the latest one, or start from a copy (22.7) |
| Compaction | Summarizing the older part of a long conversation so the run can go on (22.7) |
| Subagent | A second agent started for part of a job. Only its final message comes back (22.7) |
| Tracing, trace processor | The SDK writing a trace of each run, and the part that sends it somewhere (22.8) |
| OpenTelemetry | An open standard for traces, so any tool that speaks it can collect them (22.8) |
| Zero data retention | An agreement with a provider that it keeps none of your requests or replies after answering (22.8) |

**What must I still own? (Part D)**

| Word | Meaning |
| --- | --- |
| Sandbox | A place a program runs with limited reach (22.4) |
| Container | A sealed box on a computer that runs one program with its own files, so a mistake cannot reach the rest (22.1) |
| Edge function | A tiny, short-lived program a hosting service runs per request, with no disk that lasts (22.9) |
| Pin | Fixing a package to one exact version, so an install never picks a newer one (22.9) |
| Pre-1.0 | A version starting with 0, where a minor version may break things (22.9) |
| Base URL | The address a client sends its model calls to. Changing it points the same code at another server (Task 14) |

## The finished mapping table

Every row, including those that change no design decision, for checking your own table in Task 15.

| The line of your Chapter 21 loop | The first SDK | The second SDK |
| --- | --- | --- |
| Step 1. Call | The harness, with its own extra settings and notes | The runner, with your `modelSettings` |
| Step 2. Keep | The harness, one `assistant` message per block | The runner, into the history |
| Step 3. Check | The harness. The `result` subtype is the run's stop | The runner: text and no tool calls means done |
| Step 4. Run | The harness, through MCP servers it connects | The runner in your process (or the provider, for hosted tools) |
| Step 5. Return | The harness. Reported as a `user` message | The runner. In the history as a function call result |
| Which tools may run | `tools: []`, `allowedTools`, `permissionMode`, `canUseTool`, hooks | Your list, and `needsApproval` with your rule |
| Turn limit | `maxTurns`, counted in round trips (a model call and the tool calls it asked for) | `maxTurns`, default 10 |
| Cost cap | `maxBudgetUsd`, checked after each response | **Still yours** |
| Time limit | **Still yours**: your timer stops the run through an `abortController` | **Still yours**: your timer stops the run through a `signal` |
| Request deadline | Not set by the lab. Your time limit covers a call that hangs | Not set by the lab. Your time limit covers a call that hangs |
| Retries | The harness's own | The client's two, plus the runner's opt-in setting (its own retries turn the client's off) |
| Where the conversation lives | A session file by default, memory with the option | The history you pass, with `store: false` |
| The trace | OpenTelemetry through settings you set, and your own hook | The provider's dashboard by default, or your processor |
| What counts as done | The model's stop, plus limits, plus the lab's own rule-2 check after the run | The runner's rule, plus your guardrail |

## What the authors' runs showed

*The chapter's concepts keep only the principle. These are the findings behind them, from the authors' offline runs: the real SDKs and harness, the real practice connector, and a stand-in model.*

### From 22.1: the tool runner's default, on the wire

When the authors ran the tool runner and read what went over the wire, the second request did not carry the conversation. It carried only the tool's result and the id of the earlier reply. The tool runner had kept the conversation on the provider's side, because that is its default in the version the lab pins. This is the stateful mode from Chapter 21.7. Instead of resending the history, a request names an earlier reply, and the provider joins the two. Your own record then shows only what you sent. One option, set to false, made it send the whole conversation again, as in Chapter 21. Even the smallest step up chose something for you, and you only found out by reading what it sent. [F7](#f7-the-tool-runners-default-on-the-wire) draws the two requests.

**The ladder in the providers' own words.** Both providers describe a ladder like the chapter's in their own documents, though not every provider offers every rung. The dated boxes above quote them.

### From 22.3: reading the stream

On the first SDK, one model reply can arrive as several messages, one for each piece. In the authors' run, a short text and a tool call came as two. And after a limit ends a run, the result message came first and an error after it. So code that reads a stream keeps the last result it saw, whatever happens next.

22.3's table of four things to collect shows where the authors found each fact on their two SDKs. The second SDK in the lab reports tokens and model calls but no cost.

### From 22.4: tool counts, sign-in, agents as tools

With its built-in tools left on, the first SDK's run reported 33 tools in all. Five were the worker's, and 28 came with the harness, among them a shell, file reading and writing, a web fetcher and a web search. The model asked for the shell, to fetch a web page. The permission rule denied it. With the built-in tools off, the run reported five tools, and the model answered in one model call, not two.

**Why no sign-in runs.** Neither of the lab's SDKs opens a browser for a person to sign in to a remote server (some open-source harnesses can). The options pass the test token in a header, exactly as Chapter 21 did. That is fine for testing as yourself. Chapter 23 moves the token into a vault, one per person.

**Agents as tools, and handoffs.** One agent can be offered to another as a tool, and only its answer comes back. A handoff passes the whole conversation to another agent. In the SDKs that offer it, the model sees it as one more tool, and the SDK switches agents when it is called. This worker has neither. Chapter 27 designs systems of agents.

### From 22.6: turn counts, budget, retries

On the first SDK with a turn limit of 4, the "try again" run stopped after four model calls, and its result reported 5 turns. Neither number is wrong: read each SDK's definition before you compare numbers or set a limit. On the second SDK with a turn limit of 8, it stopped after eight model calls, with an error saying the limit was exceeded. On the first SDK with a 1-cent budget cap, the run stopped at about 1.4 cents. This happened because the cap is checked after each reply, so the last reply crossed it.

*Retries.* The Chapter 21 client library retried a service error twice, with backoff. On the first SDK, the harness has its own retry behavior, which the lab does not change. On the second SDK, the runner has a retry setting of its own that is off by default. Underneath it, the client library still retries twice. Turn the runner's retries on, and the first try still gets the client's two retries. But each retry the runner makes runs with the client's retries off (SDK).

### From 22.7: the session file, and reasoning items

On the first SDK, session files were on, which is its default. A file appeared after the first run in a folder under the home folder, named by the run's session id. It held 25 lines for a two-call run. Those lines held the question, the replies, the tool's result with every invoice and amount, records of each request's shape, and the cost. It did not hold the test token. The second question resumed that session: the request carried the whole earlier conversation, read back from the file, then the new question. With session files off, no session file was written. Small connection logs still appeared in a cache folder, with no message content that the authors could find. On the second SDK, the lab's code passed the history, and storage was off. After the first run, the code held six history items and passed them, with the new question, to the next run.

**Reasoning items, stateless as in Chapter 21.** Recall Chapter 21.6: where a provider returns the model's reasoning, as the second API did, a reasoning item is that record. It is sent back encrypted so you can pass it on but not read it. With storage off, the provider keeps no copy, so each reasoning item must travel back with the next request. A provider or local server that returns no reasoning has nothing to send back. On the second SDK, the authors read the requests. Storage was off on every call, but the SDK did not ask for the encrypted reasoning until the lab's option told it to.

### From 22.7, also: subagents

*Subagents*: a second agent started for part of a job, of which only the final message comes back. Chapters 26 and 27 use them.

### From 22.9: what the harness sent on the first run

The request carried settings no line of the lab's code sets. They were a large output limit, a thinking setting, a reasoning effort, and a description of the computer's operating system and working folder. They also included today's real date and a list of beta features. Some of these are the harness doing its job well. None was chosen by the builder.

The second SDK runs in your own process and needs no disk, but still needs that process to stay alive for the run. The Anthropic box above gives the provider's own sizing for the first SDK. End users do not bring their own model account to a worker. Providers' terms decide whether a product may use a person's consumer sign-in, and the boxes above say what each allows.

## Field guide: the two SDKs and an open model, step by step

*The concepts named no product. This field guide names them, and gives each lab step exactly. Read [F0](#f0-the-repository-the-overlay-and-the-pins) to [F2](#f2-the-connector) before Task 0. Each lab task names the other sections it needs. Every fact here was checked on November 5, 2026.*

### F0. The repository, the overlay and the pins

**What the zip holds.** `brightline-lab-ch21.zip` holds `brightline-ap/`: the repository at the end of Lab 21, with the [Chapter 22](overview.md) files laid over it, and no git history, which Task 0 starts. `answer-key/`, at the top of the zip and outside `brightline-ap/`, holds the expected results, and each task's own key is a separate download, linked from the task. Never give the answer key to an agent.

| Path | What it is |
| --- | --- |
| `prompts/ap-worker-sdk.v1.md` | The worker's instructions for both SDKs, versioned |
| `src/sdk/` | `policy.ts` (the two rules and `flag_invoice`), `tool-runner.ts`, `claude-agent.ts`, `openai-agent.ts`, `config.json` |
| `py/brightline_ap/sdk/` | The same in Python: `policy.py`, `tool_runner.py`, `claude_agent.py`, `openai_agent.py` |
| `scripts/sdk-ask.ts`, `py/brightline_ap/sdk_ask.py` | `npm run sdk` and `npm run sdk:py` |
| `tests/sdk.spec.ts`, `py/tests/test_sdk.py` | The offline tests: 15 and 13 |
| `docs/worker-spec.md` | The worker's portable specification |
| `docs/sdk-map.md`, `ports/ch21.md` | The table to fill in, and your record |
| `tsconfig.sdk.json`, `py/pyrightconfig.sdk.json` | Type checks for this lab's files only |

**Merging.** Six of Lab 21's files carry Lab 22's lines too: `package.json` (and `package-lock.json`), `py/pyproject.toml` (and `py/uv.lock`), `AGENTS.md`, `README.md`, `tsconfig.json` and `.gitignore`. Each is Lab 21's file with Lab 22's lines added. If you changed one of them in Lab 21, ask your agent to make your change again. Lab 22 has no practice connector of its own: it uses Lab 21's, and Lab 21's data, unchanged.

*Pins.* `@anthropic-ai/claude-agent-sdk` 0.3.318, `@openai/agents` 0.21.0, `@anthropic-ai/sdk` 1.5.0, `openai` 7.51.0, `@modelcontextprotocol/sdk` 1.32.2, `zod` 4.6.7. Python: `claude-agent-sdk` 0.2.178, `openai-agents` 0.24.0, `anthropic` 2.5.0, `openai` 3.46.0, `mcp` 2.3.0 (through `py/uv.lock`).

### F1. Keys and spending limits

Reuse Lab 21's keys and limits (Chapter 21, F1). If you skipped Lab 21, make one key in the Claude Console and one in the OpenAI platform dashboard. Each goes in its own project or workspace with a monthly limit of $5. Then paste each into its file in `.secrets/` with your own editor. The first SDK reads `ANTHROPIC_API_KEY` from the environment and does not read `.env` files, so `sdk-ask` reads `.secrets/` and sets it. This lab gives neither SDK a consumer chat-app sign-in.

### F2. The connector

**Route A.** Your [Chapter 19](../business-data-and-retrieval/overview.md) staging connector, with a test token for Ana at Brightline, as in Chapter 21's F2 (it lasts 10 minutes), in `.secrets/connector.env`.

**Route B.** Lab 21's practice connector, unchanged: `npm run connector:practice` in a second terminal. It reads the token from `.secrets/connector.env` itself, and listens on `http://127.0.0.1:8760/mcp`. For Task 9, start a second one with `PRACTICE_PORT=8761 PRACTICE_BROKEN=search_policy npm run connector:practice`, and point one run at it with `CONNECTOR_URL=http://127.0.0.1:8761/mcp`.

### F3. Seeing what each SDK sent

- **The tool runner and the client SDKs:** `ANTHROPIC_LOG=debug` before the command prints each request.
- **The first SDK:** its harness makes the requests, so your program's own request log does not show them. Run with `--persist` and read the session file's request records (Task 11), then delete the file.
- **The second SDK:** `OPENAI_LOG=debug` before the command shows each request's address and headers, not its body[^openai-node] (Checked). In TypeScript, `DEBUG=openai-agents*` with `OPENAI_AGENTS_DONT_LOG_MODEL_DATA=0` prints each request's data (Checked). In Python, `npm run sdk:py` prints each request's `store`, `include` and `previous_response_id` itself.
- **Never** leave debug logging on for real data: it prints questions and tool results.

### F4. The first SDK's permissions and hooks

- *Order:* hooks, deny rules, ask rules, mode, allow rules, `canUseTool`.
- *`canUseTool` returns* `{ behavior: "allow", updatedInput }` or `{ behavior: "deny", message }` (Python `PermissionResultAllow` and `PermissionResultDeny`).
- *A `PreToolUse` hook returns* `{}` for no decision, or a `hookSpecificOutput` with `permissionDecision` of `allow`, `deny`, `ask` or `defer` and a reason. `deny` wins over `defer`, `defer` over `ask`, and `ask` over `allow`.
- *A hook that fails* lets the action go ahead unless its matcher sets failure to `block`.
- **Never** use `bypassPermissions` or `allowDangerouslySkipPermissions` in this book's labs.

### F5. The second SDK's tracing

- *Off:* `setTracingDisabled(true)` or `set_tracing_disabled(True)`, or `OPENAI_AGENTS_DISABLE_TRACING=1`. The lab's workers do this unless `--trace` is given.
- *On, once (Task 12):* the trace appears under *Logs*, *Traces* in the OpenAI platform dashboard for the key's project[^openai-trace-grading] (Checked). Use test data only.
- *Elsewhere:* add or set a trace processor to send spans to your own store (the SDK's tracing guide).

### F6. Ollama and an open model

As Chapter 21's F6: Ollama on `127.0.0.1:11434` only, the model pinned in `src/sdk/config.json` as `models.open` (`qwen3:8b` until the authors' run). `npm run sdk -- --sdk open` points the second SDK's `OpenAIProvider` at `http://127.0.0.1:11434/v1/` with the placeholder key `ollama`, on the Responses API, with `store: false` and no encrypted reasoning. Tracing stays off: with it on, traces would go to OpenAI. Ollama gives a model a 4k context on a computer with less than 24 GiB of graphics memory, and says agents need at least 64000 tokens[^ollama-context-length] (Checked). Too small a context can keep a small model from calling tools, so start Ollama with the pinned model's whole window, which Ollama lists as 40K[^ollama-qwen3-tags] (Checked): `OLLAMA_CONTEXT_LENGTH=40960 ollama serve`, or the context slider in the Ollama app. `ollama ps` shows the context in use. Stop the server when you finish.

### F7. The tool runner's default, on the wire

The tool runner's two second requests, from 22.1 and the optional Task 1. On the left, the default: only the tool result and the id of the earlier reply, so the provider holds the conversation. On the right, with `thread: false`: the whole conversation, as in Chapter 21.

![Two requests side by side, drawn as two boxes, under the subtitle same answer, different place for the conversation. Left, labeled the default: the second request holds one tool result and an id for the earlier reply. An arrow labeled kept for you goes down to a dark box, the provider's side, which holds the question, the reply and the tool call. Right, outlined in gold, is the box labeled with the option set to false. Its second request holds the question, the model's reply and its tool call, and the tool result, all on your side.](img/chapter-21-first-rung.png)

*Figure F7. The tool runner's default, read from the wire. One option keeps the conversation yours.*

[^claude-agent-sdk-overview]: Agent SDK overview, Anthropic.
[^claude-tool-runner]: Tool runner, Anthropic.
[^claude-agent-sdk-npm]: @anthropic-ai/claude-agent-sdk 0.3.318, npm.
[^claude-agent-sdk-pypi]: claude-agent-sdk 0.2.178, PyPI.
[^claude-agent-sdk-typescript]: Agent SDK reference: TypeScript, Anthropic.
[^claude-code-tools-reference]: Tools reference, Claude Code.
[^claude-agent-sdk-mcp]: Connect to external tools with MCP, Anthropic.
[^claude-agent-sdk-permissions]: Configure permissions, Anthropic.
[^claude-code-hooks]: Hooks reference, Claude Code.
[^claude-agent-sdk-sessions]: Work with sessions, Anthropic.
[^claude-agent-sdk-subagents]: Subagents in the SDK, Anthropic.
[^claude-agent-sdk-observability]: Observability with OpenTelemetry, Anthropic.
[^claude-code-env-vars]: Environment variables, Claude Code.
[^claude-agent-sdk-features]: Use Claude Code features in the SDK, Anthropic.
[^claude-agent-sdk-hosting]: Hosting the Agent SDK, Anthropic.
[^claude-agent-sdk-ts-license]: claude-agent-sdk-typescript, LICENSE.md, Anthropic on GitHub.
[^openai-agents-guide]: Agents, OpenAI.
[^openai-agents-npm]: @openai/agents 0.21.0, npm.
[^openai-agents-pypi]: openai-agents 0.24.0, PyPI.
[^openai-agents-js-tools]: Tools, Agents SDK for TypeScript, OpenAI.
[^openai-agents-js-mcp]: Model Context Protocol, Agents SDK for TypeScript, OpenAI.
[^openai-agents-js-hitl]: Human in the loop, Agents SDK for TypeScript, OpenAI.
[^openai-agents-js-running]: Running agents, Agents SDK for TypeScript, OpenAI.
[^openai-agents-js-guardrails]: Guardrails, Agents SDK for TypeScript, OpenAI.
[^openai-reasoning-guide]: Reasoning models, OpenAI.
[^openai-agents-python-models]: Models, Agents SDK for Python, OpenAI.
[^openai-agents-js-tracing]: Tracing, Agents SDK for TypeScript, OpenAI.
[^openai-sandbox-agents]: Sandbox agents, OpenAI.
[^opencode-sdk]: SDK, OpenCode.
[^opencode-server]: Server, OpenCode.
[^opencode-mcp]: MCP servers, OpenCode.
[^opencode-plugins]: Server plugins, OpenCode.
[^ollama-openai]: OpenAI compatibility, Ollama.
[^opencode-models]: Models, OpenCode.
[^ollama-faq]: FAQ, Ollama.
[^openai-node]: openai 7.51.0, npm.
[^openai-trace-grading]: Trace grading, OpenAI.
[^openai-sign-in-with-chatgpt]: Sign in with ChatGPT: Quickstart, OpenAI.
[^ollama-context-length]: Context length, Ollama.
[^ollama-qwen3-tags]: qwen3 tags, Ollama library.



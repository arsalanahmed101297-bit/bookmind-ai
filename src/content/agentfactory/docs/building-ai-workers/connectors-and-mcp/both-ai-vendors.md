# 17.11 How today's tools realize it (/building-ai-workers/connectors-and-mcp/both-ai-vendors)

---
type: Document
title: "17.11 How today's tools realize it"
description: "How Claude Code, Codex, OpenCode and the Messages and Responses APIs connect to an MCP server, measured against revision 2026-07-28, as of November 1, 2026."
status: stable
order: 317.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "17"
part: III
expert_status: co-build
objectives:
  - { id: CCAR-F.D2.T4, label: direct }
  - { id: OAI.2.5, label: direct }
concepts: [ "17.11" ]
last_verified: 2026-11-01
sources:
  - id: anthropic-mcp
    title: "Connect Claude Code to tools via MCP (Anthropic, accessed 2026-11-01)"
    resource: https://code.claude.com/docs/en/mcp
  - id: anthropic-mcp-connector
    title: "MCP connector (Anthropic, accessed 2026-11-01)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/mcp-connector
  - id: anthropic-permissions
    title: "Configure permissions (Anthropic, accessed 2026-11-01)"
    resource: https://code.claude.com/docs/en/permissions
  - id: anthropic-monitoring
    title: "Monitoring (Anthropic, accessed 2026-11-01)"
    resource: https://code.claude.com/docs/en/monitoring-usage
  - id: openai-codex-mcp
    title: "Codex: MCP (OpenAI, accessed 2026-11-01)"
    resource: https://learn.chatgpt.com/docs/extend/mcp?surface=cli
  - id: openai-tools
    title: "Using tools (OpenAI, accessed 2026-11-01)"
    resource: https://developers.openai.com/api/docs/guides/tools.md
  - id: openai-codex-config
    title: "Advanced configuration, Codex (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/config-file/config-advanced
  - id: opencode-mcp
    title: "MCP servers (OpenCode, accessed 2026-11-01)"
    resource: https://opencode.ai/v2/docs/mcp-servers/
  - id: mcp-spec
    title: "Specification 2026-07-28 (Model Context Protocol, accessed 2026-11-01)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28
  - id: otel-mcp
    title: "Semantic conventions for MCP (OpenTelemetry, accessed 2026-11-01)"
    resource: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/mcp.md
  - id: cloudflare-limits
    title: "Workers limits (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/platform/limits/
  - id: cloudflare-pricing
    title: "Workers pricing (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/platform/pricing/
  - id: cloudflare-environments
    title: "Environments (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/wrangler/environments/
  - id: cloudflare-rollbacks
    title: "Rollbacks (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks/
  - id: cloudflare-previews
    title: "Version URLs (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/workers/configuration/previews/
  - id: cloudflare-workers-logs
    title: "Workers Logs (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/observability/logs/workers-logs/
  - id: cloudflare-real-time-logs
    title: "Real-time logs (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/observability/logs/real-time-logs/
  - id: cloudflare-containers
    title: "Containers (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/containers/
  - id: cloudflare-python-packages
    title: "Python packages (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/languages/python/packages/
  - id: cloudflare-python-how
    title: "How Python Workers work (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/languages/python/how-python-workers-work/
  - id: cloudflare-github-actions
    title: "GitHub Actions (Cloudflare, accessed 2026-11-01)"
    resource: https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Every outlet in a country follows one standard, so any lamp works in any room, though some rooms add a dimmer or a timer.

**What you will learn.** How Claude Code, Codex and OpenCode each connect to an MCP server, where each adds to the specification or differs from it, and where the servers run.

**Why it matters.** The server stays the same, but the settings file, the way a key travels and who approves a call change with each product.

Concepts [17.1](mcp-in-one-picture.md) to [17.10](watching-a-connector.md) taught the standard. This concept shows how each product connects to an MCP server, as of November 1, 2026, against revision 2026-07-28.[^mcp-spec] The [field guide](field-guide-connectors.md) that follows has the commands.

## Which products does this page cover?

You know three from [Chapter 12](../agentic-coding/overview.md): Claude Code, Codex and OpenCode, coding agents that act as MCP hosts. Three more serve programs. The **Messages API** is how a program sends a conversation to Claude and gets a reply. Its **MCP connector**, Anthropic's name for this one feature, lets the request name a remote MCP server for Claude to call. The **Responses API** is OpenAI's equivalent, and can call MCP servers too. The **Claude Agent SDK** is a library for building your own agent around Claude Code's loop. The lab does not use them, but the same server serves them too.

**How far to trust this page.** Each statement below is what the product's own documentation said on November 1, 2026, cited to its source. Brightline's servers have been run against the MCP Inspector and the official MCP code libraries, and the TypeScript server against Claude Code. If a step in Codex or OpenCode differs from what your app shows, follow the app, and note it in [the lab](lab.md).

## How does each one connect, and where does it differ?

Pick the coding agent you use. Each tab also covers that vendor's programming interface, and each bullet says what the product adds to the MCP specification or how it sets up a connector.

### Claude Code

- **Connection and revision.** Claude Code connects by web requests, as in [17.1](mcp-in-one-picture.md), and uses revision 2026-07-28 with servers that support it. Project servers live in `.mcp.json`. It can read `${VAR}`, or `${VAR:-default}` with a fallback, from the variables set where Claude Code started, in `url` and `headers`, so a key never sits in the file. A few variables that hold credentials, such as Anthropic's own API key, read as empty there, on purpose.[^anthropic-mcp]
- **Tools and limits.** Claude Code adds limits the specification leaves to hosts: a warning above 10,000 tokens of tool output and a default cap of 25,000 (`MAX_MCP_OUTPUT_TOKENS`). Permission rules name tools `mcp__<server>__<tool>`, or `mcp__plugin_<plugin>_<server>__<tool>` from a plugin.[^anthropic-permissions] OAuth is built in (`/mcp`, `claude mcp login`).
- **The Messages API's MCP connector** calls a remote server from Claude's platform: `mcp_servers` entries (`type: "url"`, an `https://` URL, an optional `authorization_token`), each referenced by an `mcp_toolset` that can turn each tool on or off, or load it only when needed. It uses only tool calls, none of MCP's other features. It is in beta on every model, and its data is retained under the standard policy.[^anthropic-mcp-connector]
- **Asking first.** Claude Code asks before using a project's servers interactively. In runs with nobody at the keyboard (`claude -p`) and in the Agent SDK, they load without asking, so run those only in repositories you trust.[^anthropic-mcp]
- **Records of each call.** Its OpenTelemetry records ([17.10](watching-a-connector.md)) name the server and tool.[^anthropic-monitoring]
- **Status and price.** Claude Code needs a Claude plan or API billing.

### Codex

- **Where servers go.** Servers go under `[mcp_servers.<name>]` in `~/.codex/config.toml`, or in `.codex/config.toml` in a project you have marked as trusted, shared by the desktop app, CLI and IDE extension. A remote server takes a `url`, and `bearer_token_env_var` names the variable holding its key. `enabled_tools` and `disabled_tools` choose tools. `codex mcp login` handles OAuth, the sign-in of [17.8](securing-a-remote-server.md). Its page states no protocol revision.[^openai-codex-mcp]
- **Approval relaxes a specification warning.** `default_tools_approval_mode` takes `auto`, `prompt`, `writes` or `approve`. `writes` prompts only for tools the server does not mark read-only, so it trusts the server's own `readOnlyHint`, which the specification calls untrusted unless the server is trusted. Use it only for servers you wrote or reviewed.[^openai-codex-mcp]
- **The Responses API** offers function tools you define, hosted tools OpenAI runs such as web search and file search, remote MCP servers (`type: "mcp"`, `server_label`, `server_url`, `require_approval`), and `tool_search`, which loads tools only when the model needs them.[^openai-tools]
- **Records of each call.** Codex exports OpenTelemetry logs for approvals and tool results, and a metric for MCP calls, under `[otel]` in your user configuration.[^openai-codex-config]
- **Status and price.** `tool_search` needs `gpt-5.4` or later. For which plans include Codex, see [12.8](../agentic-coding/both-ai-vendors.md#what-it-costs).

### OpenCode

- **OpenCode version 2.** Servers go under `mcp.servers` in `opencode.jsonc`, not directly under `mcp`. A remote server is `"type": "remote"` with a `url` and `headers`, where `{env:NAME}` reads a key from the environment. OAuth is on by default, so a key in a header needs `"oauth": false`.[^opencode-mcp]
- **Which revision.** The default `protocol` setting is not 2026-07-28, so set `"protocol": "2026-07-28"` on each server, or `"auto"` to ask the server which revisions it supports.[^opencode-mcp]
- **Tool names.** Permission rules name tools `<server>_<tool>`, such as `apts_*`. Resources are read through OpenCode's own tools. Its documentation notes that every server's tools cost context.[^opencode-mcp]
- **Security.** OpenCode runs connectors with your rights. Its version 2 documentation describes no records of each call and no way to limit what a connector can touch.[^opencode-mcp]
- **Status and price.** Free and open source. You pay for the model.

## Where do the servers run?

Cloudflare Workers is the book's platform for stateless servers. A **Worker** is a small program Cloudflare runs at a web address, on the machine nearest each caller, in a light, short-lived sandbox: what [17.4](stateless-servers.md) and [17.8](securing-a-remote-server.md) ask of a stateless server. **Wrangler**, Cloudflare's command-line tool, runs it locally (`wrangler dev`, no account needed) and uploads it (`wrangler deploy`). The code exports a `fetch` function that receives each request and an `env` object holding its **bindings**: its secrets and handles to platform resources, such as `env.ASSETS` for its files. Brightline's TypeScript server is a standard `fetch` function built with the official MCP SDK, so the platform stays a deployment choice. Never heard of Cloudflare? Field guide [F1](field-guide-connectors.md#f1-cloudflare-from-zero-and-running-the-servers-on-your-computer) starts with "Meet Cloudflare": what the company does, why it matters for AI, and what its free plan gives you, then explains each term from zero.

- **Staging and production.** One configuration file defines production and `staging`, each a separate Worker with its own address and secrets. Bindings are not inherited, so each lists its own.[^cloudflare-environments]
- **Each deploy can be undone.** Every deploy is kept as a numbered Worker version. A rollback (`wrangler rollback`) makes one of the 100 most recent live again.[^cloudflare-rollbacks] Version URLs give a version a public address before it goes live, and are off for Brightline's production Worker.[^cloudflare-previews]
- **What gets logged.** Workers Logs keep console output and errors, on by default for new Workers.[^cloudflare-workers-logs] `wrangler tail` shows live requests.[^cloudflare-real-time-logs]
- **Python.** Python Workers run on Pyodide, Python compiled to WebAssembly, a compact program format browsers can run.[^cloudflare-python-how] So only packages written purely in Python, or built for WebAssembly, run.[^cloudflare-python-packages]
- **Security.** The address is public. The Worker checks `Origin` and the key on every request, and never serves the data files directly. The CI deploy credential is limited to Workers and what they use, in one account.[^cloudflare-github-actions]
- **Status and price.** Generally available. The free plan gives 100,000 requests a day and 10 ms of processor time (CPU time) per request. The paid plan allows 30 seconds by default.[^cloudflare-limits] The free plan keeps Workers Logs 3 days, until new log pricing starts on December 1, 2026.[^cloudflare-pricing] Cloudflare's own Containers are not on the free plan.[^cloudflare-containers]

The commands are in field guide [F6](field-guide-connectors.md#f6-deploying-to-cloudflare-workers). Another hosting service can run the same server, with only the configuration file and deploy commands changed.

## The differences that change a decision

1. **The server never changes.** Brightline's servers connected unchanged to the official SDK clients and the MCP Inspector, and the TypeScript server to Claude Code. Hosts write three facts in their own files and syntax: the address, the key, and which tools are allowed.
2. **The revision is set differently.** Claude Code uses 2026-07-28 with servers that support it. OpenCode needs `"protocol": "2026-07-28"`. Codex's page states none: record what your run shows.
3. **Read-only marks are trusted differently.** Codex can skip approval for tools a server marks read-only: safe for a server you wrote, dangerous for a stranger's.
4. **A key travels differently:** `${VAR}` in Claude Code, `bearer_token_env_var` in Codex, `{env:NAME}` in OpenCode, never in the file. The Agent Plugins core, the plugin standard from [Chapter 16](../skills-and-plugins/what-a-plugin-bundles.md), cannot carry a key at all, so a shared-key server is set per host, and OAuth lets one entry serve every host.
5. **Records of each call are uneven.** Claude Code and Codex export their own records. OpenCode's documentation describes none. Lab Task 16c records whether any sends its trace ID (`traceparent`) to the server.[^otel-mcp]

## What stays the same on every product?

1. The server is written once, to the open protocol. Whichever host connects, it validates its inputs, checks every request's credential and `Origin`, and returns only what the caller needs.
2. The host decides whether a call may run. A server's own description of itself never decides it alone.
3. A span shows that a call ran. Only a test or an acceptance check shows it was right.

**For the exam.** CCDV-F and CCAR-F ask about Claude's behavior. Where Claude Code differs from the specification, such as its output limit or its tool naming in permission rules, the answer that scores is Claude Code's behavior.

[^anthropic-mcp]: Connect Claude Code to tools via MCP, Anthropic.
[^anthropic-mcp-connector]: MCP connector, Anthropic.
[^anthropic-permissions]: Configure permissions, Anthropic.
[^anthropic-monitoring]: Monitoring, Anthropic.
[^openai-codex-mcp]: Codex: MCP, OpenAI.
[^openai-tools]: Using tools, OpenAI.
[^openai-codex-config]: Advanced configuration, Codex, OpenAI.
[^opencode-mcp]: MCP servers, OpenCode.
[^mcp-spec]: Specification 2026-07-28, Model Context Protocol.
[^otel-mcp]: Semantic conventions for MCP, OpenTelemetry.
[^cloudflare-limits]: Workers limits, Cloudflare.
[^cloudflare-pricing]: Workers pricing, Cloudflare.
[^cloudflare-environments]: Environments, Cloudflare.
[^cloudflare-rollbacks]: Rollbacks, Cloudflare.
[^cloudflare-previews]: Version URLs, Cloudflare.
[^cloudflare-workers-logs]: Workers Logs, Cloudflare.
[^cloudflare-real-time-logs]: Real-time logs, Cloudflare.
[^cloudflare-containers]: Containers, Cloudflare.
[^cloudflare-python-packages]: Python packages, Cloudflare.
[^cloudflare-python-how]: How Python Workers work, Cloudflare.
[^cloudflare-github-actions]: GitHub Actions, Cloudflare.



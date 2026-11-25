# 14.10 How today's tools realize it (/building-ai-workers/structuring-programs/both-ai-vendors)

---
type: Document
title: "14.10 How today's tools realize it"
description: "Where Claude Code, Codex and OpenCode differ when they install a package, reach a server on your own computer, keep it running and review a change, as their own pages said on October 30, 2026."
status: stable
order: 314.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.10" ]
last_verified: 2026-10-30
sources:
  - id: anthropic-permission-modes
    title: "Permission modes (Anthropic, accessed 2026-10-30)"
    resource: https://code.claude.com/docs/en/permission-modes
  - id: anthropic-sandboxing
    title: "Sandboxing (Anthropic, accessed 2026-10-30)"
    resource: https://code.claude.com/docs/en/sandboxing
  - id: anthropic-interactive-mode
    title: "Interactive mode (Anthropic, accessed 2026-10-30)"
    resource: https://code.claude.com/docs/en/interactive-mode
  - id: anthropic-code-review-local
    title: "Review locally with /code-review (Anthropic, accessed 2026-10-30)"
    resource: https://code.claude.com/docs/en/code-review-local
  - id: openai-agent-approvals
    title: "Agent approvals and security (OpenAI, accessed 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/agent-approvals-security
  - id: openai-developer-commands
    title: "Commands (OpenAI, accessed 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/developer-commands?surface=cli
  - id: openai-code-review
    title: "Code review (OpenAI, accessed 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/code-review
  - id: opencode-permissions
    title: "Permissions (OpenCode, accessed 2026-10-30)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: opencode-tools
    title: "Tools (OpenCode, accessed 2026-10-30)"
    resource: https://opencode.ai/v2/docs/tools/
  - id: opencode-security
    title: "Security policy and advisories (OpenCode, accessed 2026-10-30)"
    resource: https://github.com/anomalyco/opencode/security
  - id: opencode-changelog
    title: "Changelog (OpenCode, accessed 2026-10-30)"
    resource: https://opencode.ai/changelog
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Three office buildings all take deliveries. In the first, the front desk calls you before any parcel comes up. In the second, the doors stay locked, and you let each driver in yourself. In the third, drivers walk straight in unless you post your own rule at the door. In every building, you read the label before you sign for the parcel.

**What you will learn.** Where Claude Code, Codex and OpenCode differ when they install a package, reach a server on your own computer, keep it running and review a change, as of October 30, 2026.

**Why it matters.** Claude Code is the front desk, Codex the locked door, and OpenCode the open door until you set its rules. The parcel is the package. Your part does not change: you decide, you predict, the agent runs it, and you read what really happened.

**How to use this page.** This page holds only what differs by tool. Pick your tool once, and every strip on this page follows.

## How does each agent ask before it installs a package?

As in [13.13](../programming-fundamentals/both-ai-vendors.md#how-does-each-agent-ask-before-it-acts), a sandbox here is a set of limits on your own computer.

### Claude Code

An install, such as `npm ci`, `npm install zod` or `uv add pydantic`, is a shell command, so Claude Code asks before each one in *Manual* and *Accept edits* modes.[^anthropic-permission-modes] Read the package name in the prompt before you approve. Use *Manual* for this page.

### Codex

In the *workspace-write* sandbox, network access is off by default, and Codex asks for approval before a command that needs the network, such as `npm install`.[^openai-agent-approvals] So expect it to ask before `npm ci` and `uv sync`, which download packages. Use *Ask for approval* for this chapter's Try it steps.

### OpenCode

OpenCode runs `npm` and `uv` with your own rights.[^opencode-tools] Before your first message in a folder, set edits and the `shell` action to ask, as in [Lab 12](../agentic-coding/lab.md), so each command and each install waits for you.[^opencode-permissions] OpenCode does not sandbox the agent.[^opencode-security]

## How does each agent reach a server on your own computer?

Whichever agent you use, stop a server it starts before the task ends.

### Claude Code

A local session has no network limit by default. With the sandbox on, a local test server needs an exception.[^anthropic-sandboxing] Claude Code can run a long-running command, such as a development server, in the background while it keeps working. `/tasks` lists background tasks.[^anthropic-interactive-mode]

### Codex

OpenAI's security page says that when its network proxy is on, local and private addresses such as `localhost` are blocked unless you allow them. The proxy is off by default.[^openai-agent-approvals] So when you first start the sample API, in [14.7's Try it](json-and-rest-apis.md#try-it), also ask Codex to run `curl -i http://localhost:4010/vendors` and show you the first line. A `401` means Codex reached the API, which refused it only because no key was sent. An error with no status code means `localhost` is blocked, so allow it in your settings. Codex can run commands in background terminals. `/ps` lists them with their recent output, and `/stop` stops them.[^openai-developer-commands]

### OpenCode

A shell command has your full file, process and network authority, so it can reach `localhost` and the internet alike.[^opencode-tools] The shell tool can start a command in the background.[^opencode-tools] Before the task ends, check the process list and stop what is still running. The key here is made up. With a real key, remember that OpenCode can read any file your account can.

## How does each agent review a change?

### Claude Code

Run `/code-review` before the commit.[^anthropic-code-review-local]

### Codex

`/review` reports findings on your uncommitted changes or your branch, without changing files.[^openai-code-review]

### OpenCode

OpenCode's version 2 documentation describes no review command. Read its review panel or `git diff` instead.[^opencode-changelog]

What each product costs is in [12.8](../agentic-coding/both-ai-vendors.md#what-it-costs).

[^anthropic-permission-modes]: Permission modes, Anthropic.
[^anthropic-sandboxing]: Sandboxing, Anthropic.
[^anthropic-interactive-mode]: Interactive mode, Anthropic.
[^anthropic-code-review-local]: Review locally with /code-review, Anthropic.
[^openai-agent-approvals]: Agent approvals and security, OpenAI.
[^openai-developer-commands]: Commands, OpenAI.
[^openai-code-review]: Code review, OpenAI.
[^opencode-tools]: Tools, OpenCode.
[^opencode-permissions]: Permissions, OpenCode.
[^opencode-security]: Security policy and advisories, OpenCode.
[^opencode-changelog]: Changelog, OpenCode.



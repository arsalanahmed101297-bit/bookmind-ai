# 13.13 How today's tools realize it (/building-ai-workers/programming-fundamentals/both-ai-vendors)

---
type: Document
title: "13.13 How today's tools realize it"
description: "Where Claude Code, Codex and OpenCode differ when they ask before acting, reach the network, plan and review, and the differences that change a decision, as their own pages said on October 30, 2026."
status: stable
order: 313.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-14T10:34:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.13" ]
last_verified: 2026-10-30
sources:
  - id: anthropic-permission-modes
    title: "Permission modes (Anthropic, accessed 2026-10-30)"
    resource: https://code.claude.com/docs/en/permission-modes
  - id: anthropic-code-review-local
    title: "Review locally with /code-review (Anthropic, accessed 2026-10-30)"
    resource: https://code.claude.com/docs/en/code-review-local
  - id: anthropic-sandboxing
    title: "Sandboxing (Anthropic, accessed 2026-10-30)"
    resource: https://code.claude.com/docs/en/sandboxing
  - id: openai-permission-modes
    title: "Permission modes (OpenAI, accessed 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/permission-modes
  - id: openai-sandboxing
    title: "Sandboxing (OpenAI, accessed 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: openai-agent-approvals
    title: "Agent approvals and security (OpenAI, accessed 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/agent-approvals-security
  - id: openai-slash-commands
    title: "Slash commands (OpenAI, accessed 2026-11-01)"
    resource: https://learn.chatgpt.com/docs/reference/slash-commands
  - id: openai-code-review
    title: "Code review (OpenAI, accessed 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/code-review
  - id: opencode-agents
    title: "Agents (OpenCode, accessed 2026-10-30)"
    resource: https://opencode.ai/v2/docs/agents/
  - id: opencode-permissions
    title: "Permissions (OpenCode, accessed 2026-10-30)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: opencode-changelog
    title: "Changelog (OpenCode, accessed 2026-10-30)"
    resource: https://opencode.ai/changelog
  - id: opencode-security
    title: "Security policy and advisories (OpenCode, accessed 2026-10-30)"
    resource: https://github.com/anomalyco/opencode/security
generated:
  at: 2026-11-14T10:34:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Three driving schools teach the same rules of the road in different cars. Two cars come with a brake on the instructor's side, and in the third the instructor fits one before the first lesson. You are the instructor in every car.

**What you will learn.** Where Claude Code, Codex and OpenCode differ when they run a command, reach the network, plan a change and review it, as of October 30, 2026.

**Why it matters.** The products differ in what runs without asking. Your part does not: you guess, the agent runs it, and you read what really happened.

**How to use this page.** This page holds only what differs by tool. Pick your tool once, and every strip on this page follows.

## How does each agent ask before it acts?

In these tabs, a sandbox is not the throwaway machine of [12.3](../agentic-coding/permissions-and-plan.md). It is a set of limits on your own computer, like a contractor who works in your house but may change only one room, and asks before going out for supplies.

### Claude Code

- In *Manual* mode Claude Code asks before every shell command, a command run in a terminal, except a built-in set of read-only ones.[^anthropic-permission-modes] Use *Manual* for this page.

### Codex

- Choose *Ask for approval*, the mode OpenAI recommends.[^openai-permission-modes] Under it, a sandbox limits what commands can do. In the sandbox's *workspace-write* setting, the usual one for local work, the agent can write inside the project,[^openai-sandboxing] and network access is off by default.[^openai-agent-approvals]

### OpenCode

- Before your first message, put an `opencode.jsonc` file in this folder that sets edits and shell commands to ask, as in [Lab 12](../agentic-coding/lab.md). Its rules allow, ask or deny each action, such as `edit` or `shell`, and the last matching rule wins. With no rules, almost everything is allowed.[^opencode-permissions]

## What happens when a tool comes from the internet?

The two type checkers come from the internet the first time, through `npx` and `uvx`. This is where the three products differ most:

### Claude Code

A local session has no network limit by default, so the agent can install a package once you approve the command. The optional sandbox, turned on with `/sandbox`, routes commands through a proxy, a checkpoint for network traffic, that allows only the domains, or web addresses, you list.[^anthropic-sandboxing]

### Codex

Codex asks for approval before a command that needs the network, such as `npm install` or `uv add`, which installs a Python package. Tests that need no network, such as `npm test`, run inside the sandbox.[^openai-agent-approvals] So expect it to ask before the first `npx` and `uvx`.

### OpenCode

OpenCode does not sandbox the agent, and its permission prompts are not built to isolate it. Its security policy says to run it in a container or virtual machine if you need isolation.[^opencode-security] With your `opencode.jsonc` set to ask, it asks before each command, and each command runs with your own rights.

## How does each agent plan without editing?

### Claude Code

*Plan* mode reads files and proposes a plan, and edits nothing until you approve. Switch to it with Shift+Tab, or start a prompt with `/plan`.[^anthropic-permission-modes]

### Codex

`/plan` asks for a plan first.[^openai-slash-commands]

### OpenCode

OpenCode's *plan* agent explores and plans without editing project files, and the *build* agent edits and runs commands.[^opencode-agents]

## How does each agent review a change?

### Claude Code

`/code-review` reviews your branch's commits and your uncommitted changes for bugs and reports findings, without changing files unless you ask it to fix them.[^anthropic-code-review-local]

### Codex

`/review` reviews your uncommitted changes, or your branch against a base branch, and reports findings by priority without changing your files.[^openai-code-review]

### OpenCode

OpenCode's version 2 documentation names no built-in review command.[^opencode-agents] Desktop's review panel shows the session's changed files and diffs, and `git diff` works everywhere.[^opencode-changelog]

## The differences that change a decision

1. **Who can install a package without a prompt.** OpenCode can, if your rules do not say ask. Claude Code reaches the network freely once you approve a command. Codex's sandbox blocks the network by default and asks. On your laptop, approve each install only after you have read the package name.
2. **Where tests run.** Codex runs commands on your computer, inside a sandbox that limits writes to the project. Claude Code runs them with your full rights unless you turn on its sandbox. OpenCode always runs them with your rights. So read each command before you approve it: outside a sandbox, it can change any file you can.
3. **Review built in.** Claude Code and Codex have review commands, and OpenCode's Desktop has a review panel. On every product, an agent's review is a second worker checking the first. [Chapter 6](../../managing-ai-workers/the-review-contract/work-you-did-not-watch.md) says that is not the review, so the review is yours.

[^anthropic-permission-modes]: Permission modes, Anthropic.
[^anthropic-code-review-local]: Review locally with /code-review, Anthropic.
[^anthropic-sandboxing]: Sandboxing, Anthropic.
[^openai-permission-modes]: Permission modes, OpenAI.
[^openai-sandboxing]: Sandboxing, OpenAI.
[^openai-agent-approvals]: Agent approvals and security, OpenAI.
[^openai-slash-commands]: Slash commands, OpenAI.
[^openai-code-review]: Code review, OpenAI.
[^opencode-agents]: Agents, OpenCode.
[^opencode-permissions]: Permissions, OpenCode.
[^opencode-changelog]: Changelog, OpenCode.
[^opencode-security]: Security policy and advisories, OpenCode.



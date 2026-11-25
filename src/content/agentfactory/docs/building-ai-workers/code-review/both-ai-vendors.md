# 15.10 How today's tools realize it (/building-ai-workers/code-review/both-ai-vendors)

---
type: Document
title: "15.10 How today's tools realize it"
description: "What differs between Claude Code, Codex and OpenCode when they review a change: which reviews can block, where each reads its rules, and what each costs, as their own pages said on October 31, 2026."
status: stable
order: 315.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.10" ]
last_verified: 2026-10-31
sources:
  - id: anthropic-code-review
    title: "Code Review (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/code-review
  - id: anthropic-code-review-costs
    title: "Code Review costs and usage (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/code-review-costs
  - id: anthropic-github-actions
    title: "Claude Code GitHub Actions (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/github-actions
  - id: anthropic-setup
    title: "Set up Claude Code (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/setup
  - id: openai-codex-pricing
    title: "Codex pricing (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/pricing
  - id: opencode-changelog
    title: "Changelog (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/changelog
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Three security firms will all inspect your building. One sends a team to walk it and leaves a report. One lends you the checklist to walk it yourself. One installs a camera on your own wall. None of them locks the doors. That stays your job.

**What you will learn.** What Claude Code, Codex and OpenCode each offer for review, as of October 31, 2026, what each one can and cannot block, and what each costs.

**Why it matters.** A managed review is the team that walks the building. A local command is the checklist. A review in your own workflow is the camera. The three products offer these in different places, read their rules from different files and cost different amounts. In all three, the checks that block a merge are yours.

**How to use this page.** Each lesson gives the steps for your own tool in its tool tabs. This page holds only what differs between the three tools and changes a decision. The exact clicks for GitHub and each review tool are in `field-guide-code-review-setup.md`, in the lab's download. [12.8](../agentic-coding/both-ai-vendors.md) covers the three agents in full.

## The differences that change a decision

1. **Which reviewers block.** None of them, on their own. Claude's Code Review finishes neutral, and OpenAI's documentation names no blocking setting for Codex review. OpenCode has no reviewer of its own. Blocking always comes from your repository: required checks, conversation resolution, and your own step that reads a result and fails.
2. **Where the rules come from.** Code Review reads `REVIEW.md` from the base branch. `/code-review` reads `CLAUDE.md`. Codex reads `## Code Review Rules` in `AGENTS.md`. Your own reviewers, an OpenCode command included, read whatever you hand them. To share one set of rules, keep them in `REVIEW.md` and hand them `git show main:REVIEW.md`.

Outside the apps, the same agents run headless in CI, as in [12.7](../agentic-coding/outside-the-app.md): `claude -p`, `codex exec` and `opencode run`.

*For the exam.* CCDV-F, Anthropic's Claude Certified Developer: Foundations, is about building on Claude. Its guide names no tool from OpenAI, OpenCode or GitHub.

## What it costs

### Claude Code

Code Review needs Team or Enterprise.[^anthropic-code-review] An Owner sets a review level for the organization and can override it per repository: *Quick*, *Standard* (the default) or *Deep*. Deeper reviews take longer and cost more. There is no flat price. Reviews are billed on token usage, through usage credits separate from the plan, and a monthly spend limit applies to the organization. When the limit runs out, reviews are skipped.[^anthropic-code-review-costs] `/code-review` and `/security-review` need any Claude Code account: Pro, Max, Ultra, Team, Enterprise or Console.[^anthropic-setup] The Actions run on what you give them: an API key or a cloud account, or, for the Claude Code Action, a Claude subscription token.[^anthropic-github-actions]

### Codex

Codex is included in every ChatGPT plan, from Free to Enterprise. Code review on GitHub is listed from the Plus plan up. Reviews run locally count toward your general usage limits.[^openai-codex-pricing]

### OpenCode

OpenCode is free under the MIT license, at version 2.2.5 on October 30, 2026.[^opencode-changelog] You pay for the model.

[^anthropic-code-review]: Code Review, Anthropic.
[^anthropic-code-review-costs]: Code Review costs and usage, Anthropic.
[^anthropic-github-actions]: Claude Code GitHub Actions, Anthropic.
[^anthropic-setup]: Set up Claude Code, Anthropic.
[^openai-codex-pricing]: Codex pricing, OpenAI.
[^opencode-changelog]: Changelog, OpenCode.



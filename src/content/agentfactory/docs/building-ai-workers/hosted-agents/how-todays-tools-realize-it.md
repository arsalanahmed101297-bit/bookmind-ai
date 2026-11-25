# 23.19 How today's tools realize it (/building-ai-workers/hosted-agents/how-todays-tools-realize-it)

---
type: Document
title: "23.19 How today's tools realize it"
description: "How Claude Managed Agents, OpenAI's Agents API and the open-source Omnara realize the chapter's ideas, and the differences that change a decision."
status: stable
order: 323.19
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:26Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.19" ]
last_verified: 2026-11-05
sources:
  - id: ma-overview
    title: "Claude Managed Agents overview (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: ma-scheduled-deployments
    title: "Scheduled deployments (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/scheduled-deployments
  - id: cli-apply
    title: "Manage resources as code with ant apply (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/cli-sdks-libraries/cli/apply
  - id: ma-permission-policies
    title: "Permission policies (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/permission-policies
  - id: ma-environments
    title: "Cloud environment setup (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/environments
  - id: ma-vaults
    title: "Authenticate with vaults (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/vaults
  - id: ma-budgets
    title: "Session budgets (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/budgets
  - id: claude-pricing
    title: "Pricing (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/pricing
  - id: openai-agents-api
    title: "Agents API (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/overview
  - id: openai-errors
    title: "Errors and recovery (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/errors
  - id: openai-plugins
    title: "Plugins (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/tools/plugins
  - id: openai-mcp
    title: "MCP connections (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/tools/mcp
  - id: openai-sandbox-agents
    title: "Sandbox Agents (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents/sandboxes
  - id: omnara-repo
    title: "Omnara README (Omnara, accessed 2026-11-05)"
    resource: https://github.com/omnara-ai/omnara
  - id: omnara-secrets
    title: "Secrets (Omnara, accessed 2026-11-05)"
    resource: https://docs.omnara.com/organization/secrets
  - id: openai-automatic-review
    title: "Automatic review (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/sessions/approvals
  - id: omnara-permissions
    title: "Tools & permissions (Omnara, accessed 2026-11-05)"
    resource: https://docs.omnara.com/tools/permissions
  - id: ma-agent-setup
    title: "Define your agent (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/agent-setup
  - id: openai-hosted-sandboxes
    title: "OpenAI-hosted sandboxes (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/environments/openai-hosted
  - id: ma-secure-deployment
    title: "Secure your Managed Agents deployment (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/secure-deployment
  - id: ma-security-risks
    title: "Security risks and sandbox boundaries (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/managed-agents/secure-deployment-risks
  - id: claude-release-notes
    title: "Claude Platform release notes (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/release-notes/overview
generated:
  at: 2026-11-21T00:02:26Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**Reference.** *How today's products realize the chapter's ideas (23.19), then Check yourself. Beyond this chapter, the word list and the field guide ([F0](reference.md#f0-from-zero-keys-consoles-and-where-secrets-live) to [F7](reference.md#f7-openai-and-omnara-for-the-ports)) are on the companion page, [**Chapter 23 reference**](reference.md) (in the lab, `docs/chapter-22/reference.md`).*

*Reference. Skim it now, and come back when you choose products.*

**What you will learn.** How three of today's products, one from each kind of vendor, realize this chapter's ideas, how sure each claim is, and the differences that should change your choice.

**Why it matters.** The products look alike, but they differ in who holds each person's token, what runs before a tool, and what a run costs. Those differences decide which one fits your product.

### How sure is each claim?

| Label | Means |
| --- | --- |
| **Documented** | Read on the product owner's own pages on November 5, 2026. A fact with no label is documented |
| **Not yet tested** | Documented, or the lab depends on it, but no lab run has tried it yet |
| **Proposed design** | This book's way of building on the product, not a product feature |

### Has any of this been tested?

Nothing here has been tested in the lab yet. The ports in the lab show that the same worker can be described on each runtime. They do not prove that the three support it equally. *No vendor-neutral standard defines a hosted agent. So this section compares each product with the shape the concepts teach. The products look alike, but that resemblance is not a shared standard.*

*The short boxes below name the products. The full boxes, with every setting, status and price, are on the companion page, **Chapter 23 reference**. Product detail changes often, so each carries its date: checked November 5, 2026.*

**Anthropic: Claude Managed Agents.** A hosted harness on the Claude API, in beta. Agents, environments, sessions and events,[^ma-overview] with scheduled deployments as a fifth resource.[^ma-scheduled-deployments] Check on its pages how a schedule treats an hour that the clocks skip or repeat. Agents and environments are files applied with the `ant` command-line tool.[^cli-apply] Permission policies are `always_allow`, `always_ask` and `auto`,[^ma-permission-policies] and networking is `limited` to an `allowed_hosts` list.[^ma-environments] Web search and web fetch run on its servers, not in the sandbox, under the same list.[^ma-security-risks] Since October 7, 2026,[^claude-release-notes] web fetch also opens only addresses already seen in the session, such as one in a person's message. Vaults hold each person's `mcp_oauth` credential and add it on the way out.[^ma-vaults] It makes each connector call from its own servers, and a session whose connector's host is not on the list is rejected when it is made.[^ma-secure-deployment] Each session can carry a budget in whole cents, set when it is made.[^ma-budgets] No free plan: tokens and web searches, plus a charge per session-hour.[^claude-pricing]

**OpenAI: the Agents API and sandbox agents.** A hosted harness built on Codex,[^openai-agents-api] in beta.[^openai-errors] It can load a whole plugin bundle,[^openai-plugins] holds vault credentials when the platform makes the connector call,[^openai-mcp] and also offers sandbox agents, where your own program runs the loop with the second SDK of [Chapter 22](../agent-sdks/overview.md).[^openai-sandbox-agents] No free plan.[^openai-agents-api]

**Open source: Omnara.** A self-hosted platform for running agents, under the Apache License 2.0. Skills and connectors are added one by one, and any model in the Responses, Chat Completions or Messages format (the request shapes of OpenAI's and Claude's APIs, [Chapter 21](../agent-loop-by-hand/the-same-loop-different-shapes.md)) can run it. *Security.* Its local defaults are deliberately insecure.[^omnara-repo] It can hold a refreshable token as a secret,[^omnara-secrets] but one for each person is not yet tested, so the lab's port uses a short-lived token in a local file. Free to run yourself: you own uptime, patching and security.[^omnara-repo]

### Which differences change a decision?

| | Claude Managed Agents | OpenAI Agents API | Omnara, self-hosted |
| --- | --- | --- | --- |
| Where the loop runs | Anthropic's servers | OpenAI's servers | Your own server |
| Who holds each person's tokens | Its vaults, injected at egress | Its vaults, when the platform makes the call | Its secrets, on your own server (one for each person not yet tested) |
| What runs before a tool | Its permission policy for that tool | Only its allowed tools,[^openai-mcp] and an optional review by a model[^openai-automatic-review] | Its tool and role settings[^omnara-permissions] |
| What a run costs | Tokens plus $0.08 per session-hour,[^claude-pricing] capped per session when you set a budget | Tokens, tools and container time[^openai-agents-api] | The model, and your own server |
| Your skills, connectors and plugins | Skills and connectors, added one by one[^ma-agent-setup] | The whole plugin bundle, or each part[^openai-hosted-sandboxes] | Skills and connectors, added one by one |
| What you can test | Your product's choices and its logs | Your product's choices and its logs | Everything, including the platform's code |
| Tested in this chapter's lab | Not yet | Not yet | Not yet |

### What must stay true on any platform?

A hosted worker acts for one person in one company per session, with that person's own token, which the worker never sees. The platform runs the loop, but your application decides which person, which company, which tools, where it may reach and how much it may spend, and it checks every result.

**Exam note.** Anthropic has published version 1.1 of the guide for the Claude developer certification exam (CCDV-F), effective December 7, 2026. In it, hosted agents fall under agents and workflows, where choosing a self-hosted harness or a managed, sandboxed runtime is part of runtime selection. The keys a hosted agent uses fall under API key and credential handling. The exam examines Claude, not OpenAI or Omnara.

[^ma-overview]: Claude Managed Agents overview, Anthropic.
[^ma-scheduled-deployments]: Scheduled deployments, Anthropic.
[^cli-apply]: Manage resources as code with ant apply, Anthropic.
[^ma-permission-policies]: Permission policies, Anthropic.
[^ma-environments]: Cloud environment setup, Anthropic.
[^ma-vaults]: Authenticate with vaults, Anthropic.
[^ma-budgets]: Session budgets, Anthropic.
[^claude-pricing]: Pricing, Anthropic.
[^openai-agents-api]: Agents API, OpenAI.
[^openai-errors]: Errors and recovery, OpenAI.
[^openai-plugins]: Plugins, OpenAI.
[^openai-mcp]: MCP connections, OpenAI.
[^openai-sandbox-agents]: Sandbox Agents, OpenAI.
[^omnara-repo]: Omnara README, Omnara.
[^omnara-secrets]: Secrets, Omnara.
[^openai-automatic-review]: Automatic review, OpenAI.
[^omnara-permissions]: Tools & permissions, Omnara.
[^ma-agent-setup]: Define your agent, Anthropic.
[^openai-hosted-sandboxes]: OpenAI-hosted sandboxes, OpenAI.
[^ma-secure-deployment]: Secure your Managed Agents deployment, Anthropic.
[^ma-security-risks]: Security risks and sandbox boundaries, Anthropic.
[^claude-release-notes]: Claude Platform release notes, Anthropic.



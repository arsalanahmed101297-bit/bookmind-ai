# Two ways customers use your product (/from-skills-to-income/two-ways-customers-use-your-product)

---
type: Document
title: "Two ways customers use your product"
description: "The two ways customers use what you build, through conversation with a connector or through an app, for individuals and teams alike."
status: stable
order: 4.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T09:29:32Z
chapter: "F4"
part: Front
expert_status: required
concepts: []
last_verified: 2026-10-29
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-artifacts-connectors
    title: "What are artifacts and how do I use them?, the plans where an Artifact can use connectors (Claude Help Center, updated 30 October 2026, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-connectors
    title: "Use connectors to extend Claude's capabilities (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: anthropic-org-connectors
    title: "Authorize MCP connectors for your entire organization (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization
  - id: anthropic-plugins
    title: "Use plugins in Claude (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - id: anthropic-interactive-connectors
    title: "Your favorite work tools are now interactive connectors inside Claude (Anthropic, 26 January 2026, verified 2026-10-29)"
    resource: https://claude.com/blog/interactive-tools-in-claude
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: openai-mcp-apps
    title: "MCP Apps compatibility in ChatGPT (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
generated:
  at: 2026-11-21T09:29:32Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

If you will not build a product, skip this page and the next two, and go on to [Where the book teaches this](where-the-book-teaches-this.md).

Both ways serve individuals and teams alike. What differs is how people work.

**Through conversation.** A connector links the AI assistant to your server. The customer adds it, signs in, and then simply asks the AI for help. The AI calls your server, and your server decides what that customer has paid for.

A connector can be added on its own. You can also package it in a plugin, which bundles skills, connectors and subagents into one package, so the customer sets everything up at once.[^anthropic-plugins] There are no screens to build, but the customer has to know what to ask.

**Through a guided app.** Many people will never write a good request to an AI. They need a screen with buttons, tables and a guided workflow. There are two ways to give them one:

- **An MCP App.** Your server shows its own screens inside the chat, through MCP Apps, an official, optional extension to MCP.[^mcp-apps] A customer asks for their open invoices and gets a table with an Approve button beside each one, not a list of text. The same screen works in every AI app that supports MCP Apps, including Claude, ChatGPT and Microsoft 365 Copilot.[^mcp-apps],[^openai-mcp-apps] Claude calls these interactive connectors.[^anthropic-interactive-connectors]
- **An Artifact.** On Claude only, the app can also be an Artifact that calls Claude.[^anthropic-artifacts]

An MCP App is part of your connector, so it reaches every customer who adds the connector. An Artifact calls the AI to do the work each time someone uses it. On Claude, an Artifact can use connectors on the Pro, Max, Ultra, Team and Enterprise plans, and each person connects their own apps, even in a shared Artifact.[^anthropic-artifacts-connectors]

An MCP App adds a screen to a tool. It does not replace the tool's answer. Each tool should still return useful text, so a customer whose AI app cannot show screens still gets a result.[^mcp-apps]

Both ways use the same server. Build the first, and the second is an addition, not a rewrite. But reusing the server does not solve distribution. You still have to get the product to each customer, set it up and keep it updated.

**Setup is an important obstacle to adoption.** Before anything works, each customer usually has to add your connector and sign in. In a company, an owner must first turn on connectors for the organization. Each person then signs in separately, unless the connector uses one shared credential.[^anthropic-connectors]

On Claude Team and Enterprise, an administrator can authorize a connector once for everyone through enterprise-managed authentication. It works only if your connector supports it.[^anthropic-org-connectors]

For someone who has never done this, setup is a real hurdle, and it falls on the non-technical users a guided app is meant to reach. Write a short setup guide. Then test, in a real customer workspace, how a customer receives the product, turns it on and gets updates.

[^anthropic-plugins]: Use plugins in Claude, Claude Help Center.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.
[^openai-mcp-apps]: MCP Apps compatibility in ChatGPT, OpenAI Developers, accessed 15 November 2026.
[^anthropic-interactive-connectors]: Your favorite work tools are now interactive connectors inside Claude, Anthropic, 26 January 2026.
[^anthropic-artifacts-connectors]: What are artifacts and how do I use them?, Claude Help Center, accessed 31 October 2026.
[^anthropic-connectors]: Use connectors to extend Claude's capabilities, Claude Help Center.
[^anthropic-org-connectors]: Authorize MCP connectors for your entire organization, Claude Help Center.



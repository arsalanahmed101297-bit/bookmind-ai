# 20.18 How today's tools realize it (/building-ai-workers/mcp-apps/how-todays-tools-realize-it)

---
type: Document
title: "20.18 How today's tools realize it"
description: "How Claude, ChatGPT and open-source AI apps show MCP Apps today, as of November 15, 2026."
status: stable
order: 320.18
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.18" ]
last_verified: 2026-11-15
sources:
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: mcp-apps-spec
    title: "MCP Apps specification, revision 2026-01-26 (Model Context Protocol, verified 2026-11-15)"
    resource: https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx
  - id: mcp-client-matrix
    title: "Extension Support Matrix (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/client-matrix
  - id: claude-mcp-apps-start
    title: "Get started with MCP Apps (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/getting-started
  - id: claude-interactive-connectors
    title: "Use interactive connectors in Claude (Claude Help Center, verified 2026-11-15)"
    resource: https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude
  - id: openai-mcp-apps
    title: "MCP Apps compatibility in ChatGPT (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
  - id: google-mcp-apps-gemini
    title: "Developer's guide to implementing MCP apps in Gemini (Google Cloud Blog, 19 October 2026, verified 2026-11-15)"
    resource: https://cloud.google.com/blog/topics/developers-practitioners/devs-guide-to-mcp-apps-in-gemini
  - id: a2ui-10
    title: "A2UI 1.0: Build delightful, fast, reliable, agentic experiences (Google for Developers Blog, 11 November 2026, verified 2026-11-15)"
    resource: https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences/
  - id: mcp-skills
    title: "Skills (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/skills/overview
  - id: anthropic-org-connectors
    title: "Authorize MCP connectors for your entire organization (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization
  - id: mcp-client-credentials
    title: "OAuth Client Credentials (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/auth/oauth-client-credentials
  - id: mcp-python-apps
    title: "mcp.server.apps, MCP Python SDK reference (Model Context Protocol, verified 2026-11-15)"
    resource: https://py.sdk.modelcontextprotocol.io/api/mcp/server/apps/
  - id: claude-full-apps
    title: "Open your apps in Claude and work in them together (Claude, 10 November 2026, verified 2026-11-15)"
    resource: https://claude.com/resources/articles/interactive-connectors-full-tool
  - id: claude-app-tools
    title: "App tools (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/app-tools
  - id: claude-embedded-sites
    title: "Embedded sites (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/embedded-sites
  - id: openai-custom-mcp
    title: "Connecting custom MCP servers in ChatGPT (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*As of November 15, 2026. Each AI app changes these details often. Check them before you build.*

**The standard.** MCP Apps, `io.modelcontextprotocol/ui`, revision 2026-01-26, stable.[^mcp-apps-spec] Tool visibility, the sandbox rules and the text fallback are the same in every AI app that implements it.

**Anthropic: Claude.** Claude calls MCP Apps interactive connectors. They are available to all users on the web, in Claude Desktop and in the iOS and Android apps.[^claude-interactive-connectors] Before a page first appears, Claude asks the person: *Allow*, or *Always allow* for a server they trust.[^claude-mcp-apps-start] On Team and Enterprise, owners can turn off the tool calls that show screens, without turning off the connector.[^claude-interactive-connectors] Claude serves each page from its own sandbox address. Set the page's `ui.domain` to the first 32 hex characters of the SHA-256 of your server's address, followed by `.claudemcpcontent.com`.[^claude-mcp-apps-start] To try an example, add an example server in *Settings > Developer*, *Edit Config*, and restart. In Claude Code, the MCP Apps skills install with `/plugin marketplace add modelcontextprotocol/ext-apps` and `/plugin install mcp-apps@modelcontextprotocol-ext-apps`.[^claude-mcp-apps-start]

**Claude: full apps.** On November 10, 2026, Claude added full apps. Where a connector supports it, a person can open the tool beside the chat or full screen. They can also open it without a prompt, or pin it to the sidebar. Claude can make changes in the open tool, and the person approves them as for any connector action. It is rolling out on the web and the desktop app, on all plans. Launch partners include Notion, Atlassian's Confluence, Box, Adobe, HubSpot and Canva, and Claude's directory lists interactive connectors in their own section. Administrators can still restrict a connector's tools as before. For developers, Claude now supports app tools and embedded sites, in public preview.[^claude-full-apps],[^claude-app-tools],[^claude-embedded-sites] An embedded site loads only from an address Claude allows for the connector. For a connector in Claude's directory, its listing must allow that address.[^claude-embedded-sites]

**OpenAI: ChatGPT.** ChatGPT implements the MCP Apps standard. A page calls tools with the shared `tools/call`, and ChatGPT keeps `window.openai` for older apps and for its own extras, such as file uploads and its checkout. Check that each extra is there before you use it.[^openai-mcp-apps]

**Other AI apps.** As of November 15, 2026, the MCP project lists Claude, Claude Desktop, VS Code GitHub Copilot, Microsoft 365 Copilot, Goose and other AI apps as supporting MCP Apps, and ChatGPT supports them too.[^mcp-apps],[^mcp-client-matrix],[^openai-mcp-apps] On ChatGPT's Business, Enterprise and Edu plans, an administrator adds a custom MCP server and publishes it to the workspace.[^openai-custom-mcp]

**Google: Gemini Enterprise.** Gemini Enterprise shows MCP Apps in a sandboxed frame in the chat, and can open them full screen or in a side panel. An administrator registers the connector as a custom MCP server data store and turns on its tools, which start turned off.[^google-mcp-apps-gemini] Its agents already use A2UI 0.9.1, and Google is moving it to A2UI 1.0.[^a2ui-10]

**Skills over MCP.** As of November 15, 2026, the support matrix shows partial support in ChatGPT, fast-agent and the MCP Inspector.[^mcp-client-matrix],[^mcp-skills]

**Sign-in extensions.** On Claude Team and Enterprise, an administrator can authorize a connector once for everyone, if the connector supports it.[^anthropic-org-connectors] The official TypeScript and Python code libraries include Client Credentials support, with a client secret or a signed private-key assertion.[^mcp-client-credentials]

**The code libraries.** TypeScript: `@modelcontextprotocol/ext-apps`. Python: `mcp.server.apps`, in the MCP Python code library.[^claude-mcp-apps-start],[^mcp-python-apps]

**Open source.** The MCP project lists Goose among the AI apps that show MCP Apps, and its code library includes a basic host you can run yourself.[^mcp-apps] Coding agents that show no screens still use the tool through its text answer (20.9).

**What to check before you rely on it:** the MCP project's support table, which lists which AI apps support which extensions,[^mcp-client-matrix] and each AI app's own page for how it asks the person.

[^mcp-apps-spec]: MCP Apps specification, revision 2026-01-26, Model Context Protocol, accessed 15 November 2026.
[^claude-interactive-connectors]: Use interactive connectors in Claude, Claude Help Center, accessed 15 November 2026.
[^claude-mcp-apps-start]: Get started with MCP Apps, Claude documentation, accessed 15 November 2026.
[^openai-mcp-apps]: MCP Apps compatibility in ChatGPT, OpenAI Developers, accessed 15 November 2026.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.
[^mcp-client-matrix]: Extension Support Matrix, Model Context Protocol, accessed 15 November 2026.
[^google-mcp-apps-gemini]: Developer's guide to implementing MCP apps in Gemini, Google Cloud Blog, 19 October 2026.
[^a2ui-10]: A2UI 1.0: Build delightful, fast, reliable, agentic experiences, Google for Developers Blog, 11 November 2026.
[^mcp-skills]: Skills, Model Context Protocol, accessed 15 November 2026.
[^anthropic-org-connectors]: Authorize MCP connectors for your entire organization, Claude Help Center.
[^mcp-client-credentials]: OAuth Client Credentials, Model Context Protocol, accessed 15 November 2026.
[^mcp-python-apps]: mcp.server.apps, MCP Python SDK reference, accessed 15 November 2026.

[^claude-full-apps]: Open your apps in Claude and work in them together, Claude, 10 November 2026.
[^claude-app-tools]: App tools, Claude documentation, accessed 15 November 2026.
[^claude-embedded-sites]: Embedded sites, Claude documentation, accessed 15 November 2026.
[^openai-custom-mcp]: Connecting custom MCP servers in ChatGPT, OpenAI Help Center.



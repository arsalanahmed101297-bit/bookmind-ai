# How it works on Claude and on OpenAI (/from-skills-to-income/how-it-works-on-claude-and-openai)

---
type: Document
title: "How it works on Claude and on OpenAI"
description: "How one MCP server reaches customers on Claude, on OpenAI and in open source, for readers who will build a product."
status: stable
order: 4.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:30Z
chapter: "F4"
part: Front
expert_status: required
concepts: []
last_verified: 2026-10-29
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-share-artifacts
    title: "Share artifacts (Claude Help Center, 23 September 2026, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: anthropic-share-artifacts-plans
    title: "Share artifacts, on Pro, Max and Ultra (Claude Help Center, updated 30 October 2026, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: anthropic-connectors
    title: "Use connectors to extend Claude's capabilities (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: anthropic-plugins
    title: "Use plugins in Claude (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - id: openai-connected-apps
    title: "Connected apps in ChatGPT (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt
  - id: openai-plugins
    title: "Plugins in ChatGPT (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/20001256-plugins-in-chatgpt
  - id: openai-apps-sdk
    title: "Building with the Apps SDK (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/12515353-building-with-the-apps-sdk
  - id: openai-auth
    title: "Authentication (OpenAI Developers, verified 2026-10-29)"
    resource: https://developers.openai.com/plugins/build/auth
  - id: openai-plugin-guidelines
    title: "Plugin guidelines (OpenAI Developers, verified 2026-10-29)"
    resource: https://developers.openai.com/plugins/plugin-guidelines
  - id: openai-custom-mcp
    title: "Connecting custom MCP servers in ChatGPT (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt
  - id: anthropic-interactive-connectors
    title: "Your favorite work tools are now interactive connectors inside Claude (Anthropic, 26 January 2026, verified 2026-10-29)"
    resource: https://claude.com/blog/interactive-tools-in-claude
  - id: anthropic-connector-directory
    title: "Submit a connector to the directory (Claude.ai Documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/connectors/building/submission
  - id: anthropic-directory-vs-custom
    title: "Directory connectors vs custom connectors (Claude.ai Documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/connectors/building/directory-vs-custom
  - id: anthropic-directory-policy
    title: "Anthropic Software Directory Policy (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/13145358-anthropic-software-directory-policy
  - id: anthropic-custom-connectors
    title: "Get started with custom connectors using remote MCP (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp
  - id: anthropic-connector-auth
    title: "Authentication for connectors (Claude.ai Documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/connectors/building/authentication
  - id: mcp-authorization
    title: "Authorization, MCP specification 2026-07-28 (Model Context Protocol, verified 2026-10-29)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization
  - id: mcp-extensions
    title: "Understanding MCP Extensions (Model Context Protocol blog, 11 March 2026, verified 2026-10-29)"
    resource: https://blog.modelcontextprotocol.io/posts/2026-03-11-understanding-mcp-extensions/
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: openai-mcp-apps
    title: "MCP Apps compatibility in ChatGPT (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
  - id: anthropic-interactive-connectors-help
    title: "Use interactive connectors in Claude (Claude Help Center, verified 2026-11-15)"
    resource: https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude
generated:
  at: 2026-11-21T00:02:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

If you will not build a product, skip this section and go on to "Where the book teaches this".

The same server works on both platforms, because both connect to outside tools through MCP, the Model Context Protocol: one standard plug for AI apps. Build your server to it once, and any AI app that supports MCP can plug in. Both platforms also support MCP Apps, MCP's shared way for a server to show its own screens inside the chat.[^mcp-extensions] What differs is how customers find the product, see it and pay for it. Each vendor sets these rules and changes them often, so this section is checked every month. Check them again before you sell.

| As of October 29, 2026 | Claude | OpenAI (ChatGPT) |
| --- | --- | --- |
| **Through conversation** | A connector, alone or in a plugin | An app, alone or in a plugin |
| **Through guided screens** | An Artifact beside the chat, or your connector's own screens inside it | The app's own interface, inside the chat |
| **Sign-in** | Each person signs in with OAuth, and your server checks the token on every call[^anthropic-connector-auth],[^mcp-authorization] | The same, with OAuth 2.1 |
| **Who pays for the AI's reasoning** | The user's Claude plan, for Claude inside an Artifact | The user's ChatGPT plan, whose limits app use may count toward |
| **One company, privately** | The owner turns on connectors, and you share the Artifact inside the organization | A Business, Enterprise or Edu admin adds your server and publishes it to that workspace only |
| **Everyone** | List it in Anthropic's connector directory, or share an install link | Submit a plugin to ChatGPT's directory as a verified individual or organization |
| **Selling inside the AI app** | No checkout inside Claude is described. A listed connector may need a paid account with you[^anthropic-connector-directory] | Physical goods only. No subscriptions or digital goods |

### One screen, many AI apps

An MCP App is your connector's own screen, so it goes wherever the connector goes. As of November 15, 2026, the MCP project lists Claude, Claude Desktop, VS Code GitHub Copilot and Microsoft 365 Copilot among the AI apps that show MCP Apps, and ChatGPT shows them too.[^mcp-apps],[^openai-mcp-apps] So you build the screen once, to the standard. Three points matter before you sell one:

- **Build to the standard first.** OpenAI's Apps SDK adds features that work only in ChatGPT, through `window.openai`. A screen that depends on them works only there. OpenAI's own advice is to use the shared standard first and add its extras only where you need them.[^openai-mcp-apps]
- **Keep a text answer.** Each tool should still return useful text, so the product works in an AI app that cannot show screens.[^mcp-apps]
- **Keep payment off the screen.** Claude does not support purchases through interactive connectors from other companies.[^anthropic-interactive-connectors-help] On ChatGPT, the charging rules below apply. The screen shows what a customer has paid for, and payment stays on your website.

### On Claude

As of October 29, 2026, connectors work like this:

- For everyone, you can list your connector in Anthropic's connector directory, from any paid Claude plan. Anthropic checks it against its directory policy, which does not admit connectors that serve ads, or that move money without a person approving.[^anthropic-connector-directory],[^anthropic-directory-policy]
- A connector that is not listed can still be shared with an install link.[^anthropic-directory-vs-custom]
- On the free plan, a customer can use connectors from the directory and add one custom connector. Plugins need a paid plan.[^anthropic-connectors],[^anthropic-custom-connectors],[^anthropic-plugins]
- A connector can show its own screens inside the chat, as an MCP App, which Claude calls an interactive connector. It works for all users, on the web, in the desktop app and in the iOS and Android apps.[^anthropic-interactive-connectors],[^anthropic-interactive-connectors-help]

Artifacts that use Claude are shared like this:[^anthropic-share-artifacts]

- An Artifact that uses Claude or connected apps cannot be shared with "anyone with the link", on any plan.
- Inside a Team or Enterprise organization, you can share it with specific people or the whole organization, and on Enterprise with groups. Each person uses their own plan and their own connections.[^anthropic-artifacts]
- People outside the organization can be invited by email, a feature in beta, and can open it, but Claude and connectors do not work for them. On Team and Enterprise, an owner must first allow invitations outside the organization.
- On Pro, Max and Ultra, only people you invite by email can open it, as of October 31, 2026.[^anthropic-share-artifacts-plans] The help page says the parts that use Claude or connectors do not work for people invited from outside your organization, but not what that means on a personal plan. Test this before you sell to individuals this way.
- Legacy Artifacts, made in a chat before September 16, 2026, follow older rules.[^anthropic-artifacts]

So today, an Artifact that calls Claude works fully for customers inside an organization. A connector reaches individuals too, on every plan, and it can bring its own screens.

### On OpenAI

**Building it.** You build an app for ChatGPT with OpenAI's Apps SDK. The app is your MCP server plus, if you want one, an interface that ChatGPT shows inside the chat, such as interactive cards.[^openai-apps-sdk] ChatGPT shows that interface through the MCP Apps standard, so a screen built to the standard can also run in Claude.[^openai-mcp-apps] So on OpenAI, the conversation and the guided screens can live in one app. As on Claude, an app can also go in a plugin, which brings apps and skills together.[^openai-plugins]

**Signing in.** Your server signs users in with OAuth 2.1, following the MCP authorization standard. ChatGPT sends a token with every call, and your server checks it before running any tool. If the check fails, your server returns an error that makes ChatGPT ask the user to sign in again.[^openai-auth] This is where your check of who has paid belongs.

**Who pays.** Using an app may count toward the user's ChatGPT plan limits, and toward limits the app's maker sets.[^openai-connected-apps] As on Claude, any model your own server calls is billed to you.

**Reaching customers.** For one company, an admin or owner on a Business, Enterprise or Edu plan adds your server as a custom MCP server, tests it and publishes it to that workspace only.[^openai-custom-mcp] Admins also decide which apps their workspace may use. In Business, many apps are on by default, and new Enterprise and Edu workspaces start with a selected set turned on.[^openai-connected-apps]

For everyone, you submit a plugin to ChatGPT's directory as a verified individual or organization, with a demo account for the reviewers. Plugins that need an extra sign-up step during review are rejected.[^openai-plugin-guidelines]

**Charging is the biggest difference.** Inside ChatGPT, an app may sell only physical goods, with the checkout on your own website. It may not sell subscriptions, digital products, services or credits, show your plans or promote upgrades.[^openai-plugin-guidelines]

An app may let a user sign in to an account they already pay for, and use what that subscription includes. If a feature needs a higher plan, the app may say so and link to a page that describes your plans, but not to a checkout page. It may not offer a weaker version than your own service, or add a fee that applies only in ChatGPT.[^openai-plugin-guidelines]

So on OpenAI, customers subscribe on your website, outside ChatGPT, and the app only checks what they have paid for. This is the model on this page, with one difference: the app never sends anyone to a checkout for a subscription.

**Design for both.** When a signed-in user has not paid, return a short message and a link to your plans page, not to a checkout page. That one message works on both platforms.

### In open source

MCP is an open standard, so open-source agents can connect to the same server. If you also run an open model yourself, you pay for the AI.

Part VI, still to come, will give the full rules for all three, each with the date it was checked.

[^mcp-extensions]: Understanding MCP Extensions, Model Context Protocol blog, 11 March 2026.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.
[^openai-mcp-apps]: MCP Apps compatibility in ChatGPT, OpenAI Developers, accessed 15 November 2026.
[^anthropic-interactive-connectors-help]: Use interactive connectors in Claude, Claude Help Center, accessed 15 November 2026.
[^anthropic-connector-auth]: Authentication for connectors, Claude.ai Documentation.
[^mcp-authorization]: Authorization, MCP specification 2026-07-28, Model Context Protocol.
[^anthropic-connector-directory]: Submit a connector to the directory, Claude.ai Documentation.
[^anthropic-directory-policy]: Anthropic Software Directory Policy, Claude Help Center.
[^anthropic-directory-vs-custom]: Directory connectors vs custom connectors, Claude.ai Documentation.
[^anthropic-connectors]: Use connectors to extend Claude's capabilities, Claude Help Center.
[^anthropic-custom-connectors]: Get started with custom connectors using remote MCP, Claude Help Center.
[^anthropic-plugins]: Use plugins in Claude, Claude Help Center.
[^anthropic-interactive-connectors]: Your favorite work tools are now interactive connectors inside Claude, Anthropic, 26 January 2026.
[^anthropic-share-artifacts]: Share artifacts, Claude Help Center, 23 September 2026.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
[^anthropic-share-artifacts-plans]: Share artifacts, Claude Help Center, accessed 31 October 2026.
[^openai-apps-sdk]: Building with the Apps SDK, OpenAI Help Center.
[^openai-plugins]: Plugins in ChatGPT, OpenAI Help Center.
[^openai-auth]: Authentication, OpenAI Developers.
[^openai-connected-apps]: Connected apps in ChatGPT, OpenAI Help Center.
[^openai-custom-mcp]: Connecting custom MCP servers in ChatGPT, OpenAI Help Center.
[^openai-plugin-guidelines]: Plugin guidelines, OpenAI Developers.



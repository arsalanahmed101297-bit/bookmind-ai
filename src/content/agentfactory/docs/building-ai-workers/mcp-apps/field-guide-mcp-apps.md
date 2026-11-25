# Field guide: interactive connectors, product by product (/building-ai-workers/mcp-apps/field-guide-mcp-apps)

---
type: Document
title: "Field guide: interactive connectors, product by product"
description: "The versions this chapter was checked against, each AI app's screens in detail, testing a page, and the interactive-connector checklist, checked November 15, 2026."
status: stable
order: 320.85
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: []
field_guide: E.mcp-apps
next_review: 2026-12-15
last_verified: 2026-11-15
sources:
  - id: mcp-apps-spec
    title: "MCP Apps specification, revision 2026-01-26 (Model Context Protocol, verified 2026-11-15)"
    resource: https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx
  - id: mcp-ext
    title: "Extensions overview (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/overview
  - id: mcp-client-matrix
    title: "Extension Support Matrix (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/client-matrix
  - id: mcp-apps-build
    title: "Build an MCP App (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/build
  - id: ext-apps-readme
    title: "@modelcontextprotocol/ext-apps 2.0.0 README (npm, verified 2026-11-15)"
    resource: https://cdn.jsdelivr.net/npm/@modelcontextprotocol/ext-apps@2.0.0/README.md
  - id: claude-mcp-apps-start
    title: "Get started with MCP Apps (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/getting-started
  - id: claude-quickstart
    title: "Add an interactive UI to your MCP server (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/quickstart
  - id: claude-display-modes
    title: "Display modes (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/display-modes
  - id: claude-app-tools
    title: "App tools (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/app-tools
  - id: claude-embedded-sites
    title: "Embedded sites (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/embedded-sites
  - id: claude-troubleshooting
    title: "Troubleshoot MCP Apps (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/troubleshooting
  - id: claude-submission
    title: "Submitting to the Connectors Directory (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/submission
  - id: claude-full-apps
    title: "Open your apps in Claude and work in them together (Claude, 10 November 2026, verified 2026-11-15)"
    resource: https://claude.com/resources/articles/interactive-connectors-full-tool
  - id: claude-interactive-connectors
    title: "Use interactive connectors in Claude (Claude Help Center, verified 2026-11-15)"
    resource: https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude
  - id: openai-mcp-apps
    title: "MCP Apps compatibility in ChatGPT (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
  - id: openai-custom-mcp
    title: "Connecting custom MCP servers in ChatGPT (OpenAI Help Center, verified 2026-11-15)"
    resource: https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt
  - id: google-mcp-apps-gemini
    title: "Developer's guide to implementing MCP apps in Gemini (Google Cloud Blog, 19 October 2026, verified 2026-11-15)"
    resource: https://cloud.google.com/blog/topics/developers-practitioners/devs-guide-to-mcp-apps-in-gemini
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Optional. Read a section when a task or an error sends you here. Every fact on this page was checked on November 15, 2026. Check it again before you build, because these products change often.*

## F0. The versions this chapter was checked against

| Part | Version or stage | Note |
| --- | --- | --- |
| MCP Apps | Revision 2026-01-26, Stable | The standard behind every screen in this chapter[^mcp-apps-spec] |
| Skills over MCP | Beta | Its proposal, SEP-2640, is final[^mcp-ext] |
| Enterprise-Managed Authorization | Stable | Company sign-in, 20.14[^mcp-ext] |
| OAuth Client Credentials | Stable | Sign-in for a job, 20.15[^mcp-ext] |
| Tasks | Beta, planned for the core | Long work, 20.15[^mcp-ext] |
| `@modelcontextprotocol/ext-apps` | 1.7 or later for app tools. 2.0 is out | See below |

**Which version of the code library?** Version 2.0 of `@modelcontextprotocol/ext-apps` works with version 2 of the MCP code libraries for TypeScript. Its messages are the same as in 1.x, so a page built with 2.0 works with an AI app built for 1.x.[^ext-apps-readme] Claude's own quickstart still loads 1.7.5.[^claude-quickstart] For Lab 20, keep the version that matches the MCP code library your connector already uses from Lab 17, and use 1.7 or later if you want app tools.[^claude-app-tools] Write the version you chose in `docs/connector-spec.md`.

**The skills for your coding agent.** In Claude Code:

```text
/plugin marketplace add modelcontextprotocol/ext-apps
/plugin install mcp-apps@modelcontextprotocol-ext-apps
```

Other coding agents can install the same skills with `npx skills add modelcontextprotocol/ext-apps`, or by copying them from the project's repository.[^mcp-apps-build]

## F1. Claude in detail

- **Who can use screens.** Claude shows screens for everyone on the web, in the desktop app and in the iOS and Android apps.[^claude-interactive-connectors] A connector must be added on the web or the desktop app before it appears on a phone.
- **The first time.** Before a page first appears, Claude asks the person: *Allow*, or *Always allow* for a server they trust.[^claude-mcp-apps-start]
- **The sandbox address.** Claude serves each page from its own address. Set the page's `ui.domain` to the first 32 hexadecimal characters of the SHA-256 of your server's address, followed by `.claudemcpcontent.com`.[^claude-mcp-apps-start]
- **Display modes.** A page starts inline, in the conversation. It can ask for full screen, and Claude then opens it in a side panel beside the chat, or full screen where there is no side panel. Claude grants the request only after a recent click or key press in the page. Lay the page out again whenever its size changes.[^claude-display-modes]
- **Full apps.** Since November 10, 2026, a person can open a supported tool beside the chat or full screen, open it without a prompt, or pin it to the sidebar. Claude can change things in the open tool, and the person approves those changes as for any connector action. It is rolling out on the web and the desktop app, on all plans.[^claude-full-apps]
- **A page's own tools.** A page registers its own tools with `app.registerTool()`, which needs version 1.7.0 or later. The page must check every argument itself, because nothing checks it for the page.[^claude-app-tools]
- **Embedded sites.** A page can frame a website of yours. Claude must allow the site's address for your connector first. For a connector in Claude's directory, its listing must allow that address, and a site that loaded while you tested may still be blocked under a Community listing. Never list a wildcard sandbox address, because then other connectors' pages could frame your site.[^claude-embedded-sites]
- **The directory.** A connector with screens needs screenshots when you submit it to Claude's directory.[^claude-submission]

## F2. ChatGPT in detail

ChatGPT implements the MCP Apps standard. A page calls tools with the shared `tools/call`. ChatGPT keeps `window.openai` for older apps and for its own extras, such as file uploads and its checkout. Check that each extra is there before you use it, so the page still works in other AI apps.[^openai-mcp-apps] On ChatGPT's Business, Enterprise and Edu plans, an administrator adds a custom MCP server and publishes it to the workspace.[^openai-custom-mcp]

## F3. Gemini Enterprise in detail

Gemini Enterprise shows MCP Apps in a sandboxed frame in the chat, and can open them full screen or in a side panel. An administrator registers the connector as a custom MCP server, and its tools start turned off until the administrator turns them on.[^google-mcp-apps-gemini]

## F4. Open source in detail

- **Goose** is listed by the MCP project among the AI apps that show MCP Apps.[^mcp-apps] It is free, and Lab 20's Task 8 can use it as the second AI app.
- **The basic host** is a small AI app for testing, in the project's repository. Clone the repository, run `npm install`, then `npm start`, and open `http://localhost:8080/`.[^ext-apps-readme] It is a test tool, not a product. The project says the repository has no supported host beyond this example.
- **OpenCode** shows no screens. It uses the text answer, which is why Lab 20 uses it for the tests.

Which AI apps support which extension changes often. Check the MCP project's support table before you promise a customer anything.[^mcp-client-matrix]

## F5. Testing a page

1. **Text first.** Test the tool's text answer with no page at all (Lab 20, Task 2).
2. **The basic host.** Open the page in the basic host before any AI app (F4). It shows the messages between the page and the host.
3. **Developer tools.** In the desktop app or the browser, open the page's developer tools. The console shows blocked addresses and the page's own logs. Claude's troubleshooting page also covers developer tools on iOS.[^claude-troubleshooting]
4. **A custom connector.** Add the staging connector to Claude as a custom connector, and test as each test person.
5. **The matrices.** Run the sign-in, data and screen matrices on every pull request.

Claude's troubleshooting page covers the common problems: a page that does not appear, a tool result that is too large, requests that fail only on iOS, and `ui.domain` errors.[^claude-troubleshooting]

## F6. The interactive-connector checklist

Before you sell a connector with screens, check each line:

1. Every tool returns a useful text answer, tested without the page.
2. The page holds no key, no token and no password.
3. The page bundles its code and declares no outside address, or only the few it cannot avoid.
4. Every tool a page may call is checked like any other call: the token, the scope, the company and the handle.
5. A tool marked for the page only has the same checks as every other tool.
6. Every refusal has plain words on the screen, never an empty box.
7. Every value from the data is shown as text, never as page code.
8. The page tells the model what is showing when it changes.
9. A token that expires or is removed while the screen is open stops the next call (row C7).
10. The page uses only the standard, and checks before it uses any one AI app's extras.
11. Served skills have complete manifests and names that will not collide.
12. A job that signs in as itself has its own identity and the least scope it needs.
13. Every AI app and plan you promise has been tested, phones included.

## F7. What to check again, and when

Check these again before every lab run and every customer release, and at least by the date in this page's front matter:

- the MCP project's support table, for which AI apps support which extension[^mcp-client-matrix]
- the stage of each extension in F0[^mcp-ext]
- the version of `@modelcontextprotocol/ext-apps` and the install commands in F0[^mcp-apps-build]
- each AI app's own pages in F1 to F3, especially anything marked as rolling out or in public preview

[^mcp-apps-spec]: MCP Apps specification, revision 2026-01-26, Model Context Protocol, accessed 15 November 2026.
[^mcp-ext]: Extensions overview, Model Context Protocol, accessed 15 November 2026.
[^mcp-client-matrix]: Extension Support Matrix, Model Context Protocol, accessed 15 November 2026.
[^mcp-apps-build]: Build an MCP App, Model Context Protocol, accessed 15 November 2026.
[^ext-apps-readme]: @modelcontextprotocol/ext-apps 2.0.0 README, npm, accessed 15 November 2026.
[^claude-mcp-apps-start]: Get started with MCP Apps, Claude documentation, accessed 15 November 2026.
[^claude-quickstart]: Add an interactive UI to your MCP server, Claude documentation, accessed 15 November 2026.
[^claude-display-modes]: Display modes, Claude documentation, accessed 15 November 2026.
[^claude-app-tools]: App tools, Claude documentation, accessed 15 November 2026.
[^claude-embedded-sites]: Embedded sites, Claude documentation, accessed 15 November 2026.
[^claude-troubleshooting]: Troubleshoot MCP Apps, Claude documentation, accessed 15 November 2026.
[^claude-submission]: Submitting to the Connectors Directory, Claude documentation, accessed 15 November 2026.
[^claude-full-apps]: Open your apps in Claude and work in them together, Claude, 10 November 2026.
[^claude-interactive-connectors]: Use interactive connectors in Claude, Claude Help Center, accessed 15 November 2026.
[^openai-mcp-apps]: MCP Apps compatibility in ChatGPT, OpenAI Developers, accessed 15 November 2026.
[^openai-custom-mcp]: Connecting custom MCP servers in ChatGPT, OpenAI Help Center, accessed 15 November 2026.
[^google-mcp-apps-gemini]: Developer's guide to implementing MCP apps in Gemini, Google Cloud Blog, 19 October 2026.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.



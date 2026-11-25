# 20.3 How an MCP App works (/building-ai-workers/mcp-apps/how-an-mcp-app-works)

---
type: Document
title: "20.3 How an MCP App works"
description: "The four steps from a tool to a screen. They are a ui:// page, a pointer on the tool, the sandbox, and the messages between the page and the AI app."
status: stable
order: 320.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.3" ]
last_verified: 2026-11-15
sources:
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: mcp-apps-spec
    title: "MCP Apps specification, revision 2026-01-26 (Model Context Protocol, verified 2026-11-15)"
    resource: https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx
  - id: mcp-apps-launch
    title: "MCP Apps: the first official MCP extension (Model Context Protocol blog, 26 January 2026, verified 2026-11-15)"
    resource: https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/
  - id: claude-mcp-apps-design
    title: "MCP Apps design guidelines (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/design-guidelines
  - id: claude-app-tools
    title: "App tools (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/app-tools
  - id: claude-display-modes
    title: "Display modes (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/display-modes
  - id: claude-embedded-sites
    title: "Embedded sites (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/embedded-sites
  - id: claude-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-11-15)"
    resource: https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them
  - id: claude-full-apps
    title: "Open your apps in Claude and work in them together (Claude, 10 November 2026, verified 2026-11-15)"
    resource: https://claude.com/resources/articles/interactive-connectors-full-tool
  - id: mcp-client-matrix
    title: "Extension Support Matrix (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/client-matrix
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A hotel lets a restaurant set up a menu board in its lobby. Guests read the board and point at a dish. The board does not cook and does not take money. A hotel clerk takes the order to the kitchen. The clerk acts for the hotel, on behalf of that guest.

**What you will learn.** The four steps from a tool to a screen, and the path one button press takes.

**Why it matters.** The question of this chapter, whose call a button makes, is answered by the path. Without it, a screen looks like part of the connector. It is not.

**One request, start to finish.** At 10:15, Luis asks Claude for Cedar Ridge's open invoices.

1. **The model calls `list_open_invoices`.** As in [17.1](../connectors-and-mcp/mcp-in-one-picture.md), the AI app sends the call, with Luis's token. The connector returns five rows, a handle for the next page, and a text answer.
2. **The AI app sees that the tool has a page.** The tool's description carries a pointer to a page, `ui://brightline/open-invoices.html`.
3. **The AI app fetches the page and draws it** in a sealed box inside the chat, and hands it the tool's result. Luis sees a table of five rows.
4. **At 10:16, Luis presses Next page.** The page sends a message to the AI app: "please call this tool, with this handle". The AI app sends that call to the connector, the same way it sent the model's, and passes the new rows back to the page.

### What are the parts?

MCP Apps became the first official MCP extension on January 26, 2026, and its specification is stable.[^mcp-apps-launch],[^mcp-apps-spec] Its name in the protocol is `io.modelcontextprotocol/ui`. It adds three things to the MCP you know. Each has a name in the code, given here once, in brackets. The rest of the chapter uses the plain names.

- **A `ui://` page,** a resource whose address starts with `ui://` and whose content is a web page. It is usually one HTML file with its code inside (its type is `text/html;profile=mcp-app`).
- **A pointer on a tool** (`_meta.ui.resourceUri`), which says "show this page when this tool runs". The AI app may fetch the page early, before the tool is ever called.[^mcp-apps]
- **Messages between the page and the AI app,** sent through the browser's message channel. Some are the MCP messages you know, such as `tools/call`. Others are new, such as the first message the page sends, to say hello and get the AI app's settings (`ui/initialize`).[^mcp-apps-spec]

![One button press, there and back, in three boxes from left to right. Left, the page, drawn inside a dashed sealed box. It holds a handle, and no token and no key. Middle, the AI app, which holds the person's sign-in token, drawn as a key. Right, the connector, which checks the token, the scope, the company and the handle. Arrow 1 goes from the page to the AI app, labeled please call next_invoice_page. Arrow 2, in red-orange with a key beside it, goes from the AI app to the connector, labeled the call plus the person's token. Arrows 3 and 4 bring rows 6 to 10 back to the AI app, then to the page. A note says the token travels only on hop 2, and the page never sees it. Below, the page asks, the AI app calls, the connector answers.](img/chapter-20-three-hops.png)

*Figure 20.5. One press, there and back. The page asks, the AI app calls with the person's token, and the rows come back the same way.*

### What does the page get, and when?

After the page's first message, the AI app sends it the tool's full input, then its result when the tool finishes. Some AI apps also send the input while the model is still writing it, so the screen can fill in early. That is optional, so a page must work from the complete input alone.[^mcp-apps-spec]

### What does the pointer look like?

This is a shortened tool description from Brightline's connector. The last lines point the tool to its page:

```json
{
  "name": "list_open_invoices",
  "description": "List the signed-in company's open invoices, five a page, with a handle for the next page.",
  "inputSchema": { "type": "object", "properties": { "handle": { "type": "string" } } },
  "_meta": {
    "ui": { "resourceUri": "ui://brightline/open-invoices.html" }
  }
}
```

### Can the model work inside the screen?

Yes, in AI apps that support it. So far the page calls the connector's tools. The page can also offer tools of its own, called **app tools**, which the AI app shows to the model while the screen is open. The model calls one, such as "add a row" or "go to page three", and the page changes what the person sees.[^claude-app-tools] An app tool runs in the page, on what is showing. Anything that must be saved still goes to the connector, through a tool call that the connector checks (20.4).

### How big can the screen get?

An AI app shows the page in one of its display modes: inline, in the conversation, or full screen. In Claude, a page that asks for full screen after a click opens in a side panel next to the chat. The page must still work wherever it is shown.[^claude-display-modes] A page can also hold a whole web app of yours, as an embedded site, once Claude allows that site's address for your connector.[^claude-embedded-sites]

### Can you build something like Claude Docs or Claude Slides?

Now that you know the parts, here is the full answer to the overview's question. Claude Docs are living documents that you write with Claude and your team. Claude Slides are decks you edit and present without leaving Claude.[^claude-artifacts] As of November 15, 2026, an MCP App can give your own connector most of that experience:

| What Docs and Slides give you | Can your connector's screen do it? |
| --- | --- |
| A full editor, not a small preview | Yes. In Claude, a screen can open beside the chat or full screen. Notion and Confluence already open their full editors in Claude this way[^claude-full-apps],[^claude-display-modes] |
| Claude makes changes while you watch | Yes. The page offers its own tools, called app tools, and the model calls them to change what is on the screen. Changes appear in the tool as Claude makes them, and the person approves them as for any connector action[^claude-app-tools],[^claude-full-apps] |
| You edit by hand as well | Yes. The page is your own web page, so it can hold any editor you build |
| Your existing web app inside the chat | Yes, as an embedded site, once Claude allows its address for your connector[^claude-embedded-sites] |
| The work is saved | Yes, on your server. The page saves through your tools, and the screen itself keeps nothing ([20.8](what-the-model-knows-about-the-screen.md)) |
| Opening it without a prompt | In Claude, yes. People can open a connected tool without a prompt, pin it, and keep it beside their artifacts in the sidebar[^claude-full-apps] |

Companies already ship this. At launch, Notion lets people create docs and databases, Atlassian lets them write and edit Confluence pages, Box lets them revise files and compare versions, and Adobe lets them edit photos and PDFs, all inside Claude.[^claude-full-apps] Each one is a connector with its own screens, built on the same standard as Brightline's.

Three things stay different:

- **Where the work lives.** A Claude Docs document or a Slides deck is kept in Claude, in the Artifacts tab, and exports to Word, PowerPoint or PDF.[^claude-artifacts] Your editor's documents live on your server. Storing, sharing and exporting them is your job.
- **Where it works.** Screens inside the chat work in many AI apps.[^mcp-apps] Full apps, app tools and embedded sites are newer: in Claude they are in public preview for developers,[^claude-full-apps] and many other AI apps do not support app tools yet.[^mcp-client-matrix]
- **Who protects it.** Every save is a call to your connector, made by a person or by the model. Chapters 18 and 19 still decide who may change what, and this chapter's question applies to every keystroke that saves.

So the answer is yes: you can build an editor that feels like Claude Docs inside the chat, and it can work beyond Claude. But the document is yours to store, share and protect. This chapter starts smaller, with a read-only screen, because every editor is built from the same three parts: a page, the tools it calls, and the checks behind them. The optional [Lab 20b](lab-review-workspace.md) builds the full app.

### Is it the same on a phone?

Mostly. In Claude's iOS and Android apps, the page runs in the phone's own web view instead of a sandboxed frame. It has no camera, microphone or location there, and a person must add the connector on the web or the desktop app before it appears on the phone.[^claude-mcp-apps-design]

**At work.** The builder's coding agent adds the pointer to `list_open_invoices` and serves the page. Ana checks the table's columns against the contract from Chapter 17 and its list of fields that may leave ([17.7](../connectors-and-mcp/untrusted-output.md)): invoice number, vendor, amount and due date, and never the bank account ending.

**The operating rule:** a screen is a page that the AI app draws and sends calls for. The page asks, the AI app calls, the connector answers.

[^mcp-apps-launch]: MCP Apps: the first official MCP extension, Model Context Protocol blog, 26 January 2026.
[^mcp-apps-spec]: MCP Apps specification, revision 2026-01-26, Model Context Protocol, accessed 15 November 2026.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.
[^claude-mcp-apps-design]: MCP Apps design guidelines, Claude documentation, accessed 15 November 2026.

[^claude-app-tools]: App tools, Claude documentation, accessed 15 November 2026.
[^claude-display-modes]: Display modes, Claude documentation, accessed 15 November 2026.
[^claude-embedded-sites]: Embedded sites, Claude documentation, accessed 15 November 2026.

[^claude-artifacts]: What are artifacts and how do I use them?, Claude Help Center, accessed 15 November 2026.
[^claude-full-apps]: Open your apps in Claude and work in them together, Claude, 10 November 2026.
[^mcp-client-matrix]: Extension Support Matrix, Model Context Protocol, accessed 15 November 2026.



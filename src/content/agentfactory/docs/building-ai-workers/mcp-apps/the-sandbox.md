# 20.6 The sandbox (/building-ai-workers/mcp-apps/the-sandbox)

---
type: Document
title: "20.6 The sandbox"
description: "What a page can reach inside its sandbox, the few extra powers it may declare, and why a page never holds a key."
status: stable
order: 320.06
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.6" ]
last_verified: 2026-11-15
sources:
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: mcp-apps-spec
    title: "MCP Apps specification, revision 2026-01-26 (Model Context Protocol, verified 2026-11-15)"
    resource: https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A visiting speaker gets a room with a microphone and a screen. They can talk to the audience, and they can pass notes to the organizer. They cannot walk into the office and open the files.

**What you will learn.** What the page can reach, what it cannot, and which few extra powers it may ask for.

**Why it matters.** The page runs inside someone else's AI app, next to other companies' screens and the person's own conversation. The box is what lets an AI app show a stranger's page at all, and what keeps your page from being blamed for a stranger's page.

**One request, start to finish.** The builder's coding agent adds a chart library to the page, loaded from a public address.

1. **Luis opens the screen.** The table appears. The chart does not.
2. **The browser's console says the address was blocked.** The page never declared it.
3. **The builder adds the address to the page's list of allowed addresses,** and the AI app now allows that one address.
4. **The builder chooses instead to bundle the library into the page.** One file, nothing fetched, nothing to declare.

### A web page, from zero

If you have never built a web page, a few words are enough for this lesson. A browser is the program that shows web pages, such as the window where you open a website. Desktop and phone apps often have a browser inside them too. A web page is a file of HTML, which gives the page its structure, with code that makes it react to clicks. Every page comes from a web address, and the browser keeps pages from different addresses apart. One page cannot read another address's cookies, the small notes a website stores in your browser to remember who you are. A frame is a page shown inside another page. The console is a panel in the browser's developer tools where a page's errors appear.

The sandbox uses these rules. The AI app puts your page in a frame that comes from a different address than its own. So the browser itself keeps your page away from the chat.

### What is in the box?

On the web and the desktop, the AI app draws every page in a sandboxed frame, a box on a separate web address from the AI app's own. On a phone, Claude uses the phone's own web view instead (20.3).[^mcp-apps-spec] From inside it, the page cannot:

- read the AI app's page, its cookies or its stored data,
- move the AI app to another address,
- or run code in the AI app's page.[^mcp-apps]

Everything between the page and the AI app goes through the message channel, and the AI app decides what to allow. It may limit which tools a page may call, refuse some messages, or ask the person first.[^mcp-apps],[^mcp-apps-spec]

![The AI app's window, at the AI app's own address. Inside it, on the left, the chat, which holds the conversation, cookies, stored data and the sign-in token. On the right, a frame at a different address, outlined in red-orange, holds your page with its own code bundled inside. A gray arrow from the page to the chat is crossed out, because the page cannot read the chat, its cookies or its data. A red-orange arrow from the page to the chat is the message channel to the AI app. Outside the window, an arrow to other web addresses is crossed out, and an arrow to an address on the page's allowed list goes through. Below, bundle what the page needs, declare any outside address you cannot avoid, and never put a key in a page.](img/chapter-20-sandbox.png)

*Figure 20.8. The page in its box. It talks to the AI app only through the message channel, and reaches outside only the addresses on its allowed list.*

### What may a page ask for?

Two things, both declared on the page's resource:

- **A list of allowed addresses** (`_meta.ui.csp`). These are the outside addresses the page may load files from or connect to. The AI app builds its rules from that list and blocks every other address. With no list, the rules are strict, and the page cannot open a network connection of its own.[^mcp-apps-spec]
- **Extra permissions** (`_meta.ui.permissions`), such as the camera or the microphone.[^mcp-apps]

Ask for as little as you can. Every address you declare is a place the page can send what it shows.

### So where is the token?

Nowhere in the box. The token was made for the connector's address and is held by the AI app ([18.6](../securing-connectors/a-token-made-for-one-door.md)). The page reaches the connector only by asking the AI app, as in 20.4. That is why the page needs no key. It is also why you must never put one in it, because anything in the page can be read by the person using it.

**At work.** The page bundles its code and declares no outside address. Ana asks for one more column, the PO number. It comes from the tool's result, not from a new connection.

**The operating rule:** let the page reach nothing but the AI app. Bundle what it needs, declare any outside address you cannot avoid, and never put a key in a page.

[^mcp-apps-spec]: MCP Apps specification, revision 2026-01-26, Model Context Protocol, accessed 15 November 2026.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.



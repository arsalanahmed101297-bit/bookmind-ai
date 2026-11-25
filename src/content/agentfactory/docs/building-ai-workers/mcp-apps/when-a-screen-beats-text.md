# 20.2 When a screen beats text (/building-ai-workers/mcp-apps/when-a-screen-beats-text)

---
type: Document
title: "20.2 When a screen beats text"
description: "Which work a screen makes easier, which it makes worse, and why a screen is a new way to ask the same tools, not a new way to do things."
status: stable
order: 320.02
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.2" ]
last_verified: 2026-11-15
sources:
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: claude-mcp-apps-design
    title: "MCP Apps design guidelines (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/design-guidelines
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You can ask a shop assistant for every shirt in your size, one at a time. Or you can walk to the rack and look. For "what time do you close?", asking is faster. For "which of these forty shirts?", looking at the rack is faster.

**What you will learn.** Which kinds of work a screen makes easier, and which it makes worse.

**Why it matters.** A screen costs time to build and keep. Built for the wrong work, it slows people down and fills the chat with panels.

**One request, start to finish.** Luis asks two things on Tuesday morning:

1. **"How much does Cedar Ridge owe in open invoices?"** One number, $21,329.00, is the whole answer. A sentence is best.
2. **"Show me the open invoices."** Sixteen rows, five at a time, and he wants to look at each vendor that has more than one. In text, that is six or seven requests. On a screen, it is a table and a few clicks.

### Which work deserves a screen?

The MCP project names five kinds of work where a screen does better than text:[^mcp-apps]

- **Exploring data,** such as a list to sort, filter and page through.
- **Setting many options** at once, such as a form with defaults.
- **Viewing rich media,** such as a PDF of an invoice.
- **Watching something live,** such as a status that changes.
- **Working through items one by one,** such as a review queue.

A question with one answer stays text. So does an explanation. Show a screen when the person will act or look around, not when they asked to be told something.

![Two panels. Left, keep it text, with four examples. One number or one fact, such as how much do we owe. An explanation. A cited rule from a policy. A follow-up or a change-this request in words. Right, in gold, show a screen, with five kinds of work. Exploring data, to sort, filter and page through. Setting many options at once. Viewing rich media, such as a PDF. Watching something live. Working through items one by one. Below, show a screen when the person will look around or act, and answer in text when they asked to be told something.](img/chapter-20-screen-or-text.png)

*Figure 20.4. When a screen helps, and when text is better.*

### What does a screen give that a link to a website does not?

You could send Luis a link to a web page instead. The MCP project names four things a screen in the chat gives that a separate page does not:[^mcp-apps]

- **The context stays.** The screen sits in the conversation that led to it, so nobody switches tabs or loses their place.
- **Data flows both ways.** The page can call the connector's tools, and the AI app can send it fresh results.
- **The AI app's other connections.** The page can ask the AI app for an outcome, such as "schedule this meeting", and the AI app uses the person's other connected tools to do it, with the person's consent.
- **Safety.** The AI app runs the page in a sealed box (20.6), so it can show a page from another company safely.

### What belongs on the screen, and what belongs in the chat?

Claude's design guide draws the line this way. Direct actions on what the screen already shows belong on the screen: sorting, filtering, toggles, opening a section, and confirming an action that is ready. Anything that needs the AI to understand language belongs in the chat: typed questions, follow-ups, and "change this" requests.[^claude-mcp-apps-design]

A screen also has a size. In Claude it can be an inline card, an inline row of cards to swipe through, or full screen. An inline card stays small, with at most two actions and a few data points. A table that needs its own scrolling belongs in full screen.[^claude-mcp-apps-design]

### Is a screen a new way to do things?

No. It is a new way to ask. The screen calls the same tools the model calls, and gets the same answers. Everything the screen can show, Luis could get by asking, one request at a time. Remember that sentence, because 20.4 and 20.5 depend on it.

**At work.** Ana reads the connector's four tools with the builder and picks one screen: the open-invoices list, because AP clerks page through it every morning. `search_policy` stays text, because a cited rule is an answer, not a list. `find_vendor` stays text too, but the screen gets a *Vendor details* button that calls it.

**The operating rule:** build a screen only for work people look through or act on. Everything the screen does must be something the same person could already ask for.

[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.
[^claude-mcp-apps-design]: MCP Apps design guidelines, Claude documentation, accessed 15 November 2026.



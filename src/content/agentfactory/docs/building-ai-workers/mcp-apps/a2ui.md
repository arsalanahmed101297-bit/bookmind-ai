# 20.11 A2UI: screens described as data (/building-ai-workers/mcp-apps/a2ui)

---
type: Document
title: "20.11 A2UI: screens described as data"
description: "A2UI, Google's open standard for screens the AI describes as data, which an app draws with its own approved components, and the three ways it works with MCP."
status: stable
order: 320.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:26Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.11" ]
last_verified: 2026-11-15
sources:
  - id: a2ui-10
    title: "A2UI 1.0: Build delightful, fast, reliable, agentic experiences (Google for Developers Blog, 11 November 2026, verified 2026-11-15)"
    resource: https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences/
  - id: a2ui-over-mcp
    title: "A2UI over MCP (A2UI documentation, verified 2026-11-15)"
    resource: https://a2ui.org/guides/a2ui_over_mcp/
  - id: a2ui-in-mcp-apps
    title: "A2UI in MCP Apps (A2UI documentation, verified 2026-11-15)"
    resource: https://a2ui.org/guides/a2ui-in-mcp-apps/
  - id: a2ui-github
    title: "google/A2UI repository README (GitHub, verified 2026-11-15)"
    resource: https://github.com/google/A2UI
generated:
  at: 2026-11-21T00:02:26Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Going further. In outline only.*

**In everyday life.** A furniture shop can send you a finished chair, or a list of parts from its catalog with instructions. With the list, you build the chair from parts you already trust, in your own room.

**What you will learn.** What A2UI is, how it keeps the AI to approved parts, and the three ways it works with MCP.

**Why it matters.** 20.10 said the middle way, a screen built from approved parts, is usually right. A2UI is an open standard for exactly that, so you do not have to invent one.

**One request, start to finish.** Ana asks for "a summary of Cedar Ridge's overdue invoices, the way the controller likes it".

1. **The agent does not write a page.** It sends A2UI messages: create a screen, add a card, a table and a button from the basic catalog, and fill the table from the data.
2. **The app draws those parts with its own components,** in its own style. Nothing the agent sent is code.
3. **New numbers arrive as a data update.** The table refreshes, and the rest of the screen stays.
4. **Hannah presses the button.** The app turns the press into an action the agent receives, and the agent decides what comes next.

### How does A2UI work?

A2UI is Google's open protocol for generative screens. The agent describes what to show, and each app draws it with its own native components.[^a2ui-10] In outline:

- **Data, not code.** The agent sends messages that create a screen, update its components and update its data.
- **Approved parts only.** An app draws only components from a catalog it accepts, so the agent can place and configure only the parts a developer registered.[^a2ui-10]
- **Data bound to parts.** A data update refreshes the parts bound to it, without drawing the screen again.

Google released A2UI 1.0 on November 11, 2026, calling it the first stable version. It adds two-way function calls, so a screen can check something, such as whether a time slot is free, while the person works. It also adds accessibility support and extensions for more metadata. Renderers exist for the web (React, Angular, Lit), Flutter, SwiftUI and, coming for 1.0, Jetpack Compose.[^a2ui-10] As of November 15, 2026, the A2UI repository still calls 1.0 a release candidate and 0.9.1 its production release, so check both before you build.[^a2ui-github]

### How does A2UI work with MCP?

The A2UI project documents three ways:

- **A2UI over MCP.** A tool returns A2UI as data, marked `application/a2ui+json`, and an AI app that draws A2UI itself shows it.[^a2ui-over-mcp]
- **A2UI in MCP Apps.** An MCP App carries its own A2UI renderer and draws the A2UI it fetches through tool calls. This works in any AI app that shows MCP Apps.[^a2ui-in-mcp-apps]
- **MCP Apps in A2UI screens.** An A2UI screen holds an MCP App in a sandboxed frame.[^a2ui-in-mcp-apps]

Few AI apps draw A2UI themselves today, so the second way is the practical one. Google reports that Alation already shows A2UI screens in Claude this way, and that Gemini Enterprise's agents already use A2UI.[^a2ui-10]

### Does A2UI change whose call a button makes?

No. A press on an A2UI part becomes an action, and any tool call that follows goes through the AI app with the person's token, as in 20.4. Approved parts limit what the screen can look like. The connector still decides what each person may do.

**The operating rule:** when the AI must shape the screen, use a standard for approved parts, such as A2UI, drawn inside an MCP App, and keep every rule about who may do what in the connector.

[^a2ui-10]: A2UI 1.0: Build delightful, fast, reliable, agentic experiences, Google for Developers Blog, 11 November 2026.
[^a2ui-over-mcp]: A2UI over MCP, A2UI documentation, accessed 15 November 2026.
[^a2ui-in-mcp-apps]: A2UI in MCP Apps, A2UI documentation, accessed 15 November 2026.
[^a2ui-github]: google/A2UI repository README, GitHub, accessed 15 November 2026.



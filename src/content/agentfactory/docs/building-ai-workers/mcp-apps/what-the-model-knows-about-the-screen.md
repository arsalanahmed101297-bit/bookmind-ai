# 20.8 What the model knows about the screen (/building-ai-workers/mcp-apps/what-the-model-knows-about-the-screen)

---
type: Document
title: "20.8 What the model knows about the screen"
description: "How the page tells the model what the screen shows, and why the screen keeps nothing that must last."
status: stable
order: 320.08
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.8" ]
last_verified: 2026-11-15
sources:
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

**In everyday life.** You tell a coworker on the phone, "look at the third line". They see a different page of the report. You misunderstand each other until one of you says which page.

**What you will learn.** What the model sees when the person uses the screen, and where the screen's state lives.

**Why it matters.** A person who clicks and then asks a question expects the AI to know what they are looking at. It does not, unless something tells it.

**One request, start to finish.** At 11:40, Luis moves to the third page. Then he asks, "Why is the second row late?"

1. **The model last saw page one,** in the text answer of the first `list_open_invoices` call. The page's own calls went to the screen, not into the conversation.
2. **It answers about page one's second row,** the wrong invoice.
3. **The builder changes the page.** When Luis moves to another page, the page tells the AI app which rows are showing.
4. **Luis asks again.** The model reads the update with his question and answers about the right invoice.

![Two scenes side by side. Left, without an update. The screen shows page 3, rows 11 to 15, but the model last saw page 1, rows 1 to 5. Asked why the second row is late, it answers about row 2, the wrong invoice. Right, with an update. The page sends an update saying rows 11 to 15 are showing, so the model has page 3. Asked the same question, it answers about row 12, the right one. Below, the page's own calls go to the screen, not into the conversation, so tell the model what is showing.](img/chapter-20-model-knows.png)

*Figure 20.9. The model knows only what it was told. An update from the page tells it what is showing.*

### How does the screen talk to the model?

Two messages, both from the page to the AI app:[^mcp-apps-spec]

- **A screen update** (`ui/update-model-context`) gives the model context for its next turn. Each update replaces the last, and the AI app may hold it until the person's next message. Use it for "what is on the screen now".
- **A chat message** (`ui/message`) adds a message to the conversation, as if the person wrote it, and the AI app may ask the person first. Use it rarely, for example for an "Ask about this invoice" button.

### Where does the screen keep its state?

Nowhere that lasts. The page is drawn again when the chat is reopened, and what it showed came from the connector. That is the third of Chapter 1's four facts: what you keep must be saved to a known place. A filter on a screen is not a record. Anything that must last goes through a tool to the connector's database.

**At work.** In Lab 20, Task 7, Luis's question about the second row is asked twice, before and after the page sends its update, and the answers are compared.

**The operating rule:** tell the model what the screen shows when it changes, and keep nothing on the screen that must last.

[^mcp-apps-spec]: MCP Apps specification, revision 2026-01-26, Model Context Protocol, accessed 15 November 2026.



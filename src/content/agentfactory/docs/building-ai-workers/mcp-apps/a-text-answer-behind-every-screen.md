# 20.9 A text answer behind every screen, in every AI app (/building-ai-workers/mcp-apps/a-text-answer-behind-every-screen)

---
type: Document
title: "20.9 A text answer behind every screen, in every AI app"
description: "Why every tool keeps its text answer, and how one screen built to the standard runs in Claude, ChatGPT and other AI apps."
status: stable
order: 320.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.9" ]
last_verified: 2026-11-15
sources:
  - id: mcp-apps-spec
    title: "MCP Apps specification, revision 2026-01-26 (Model Context Protocol, verified 2026-11-15)"
    resource: https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx
  - id: mcp-client-matrix
    title: "Extension Support Matrix (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/client-matrix
  - id: claude-mcp-apps-start
    title: "Get started with MCP Apps (Claude documentation, verified 2026-11-15)"
    resource: https://claude.com/docs/connectors/building/mcp-apps/getting-started
  - id: openai-mcp-apps
    title: "MCP Apps compatibility in ChatGPT (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
  - id: openai-apps-reference
    title: "Apps SDK reference (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/reference
  - id: mcp-python-apps
    title: "mcp.server.apps, MCP Python SDK reference (Model Context Protocol, verified 2026-11-15)"
    resource: https://py.sdk.modelcontextprotocol.io/api/mcp/server/apps/
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A museum label has a picture and a sentence. Visitors who cannot see the picture still get the sentence.

**What you will learn.** Why every tool keeps its text answer, and how one screen works in many AI apps.

**Why it matters.** Not every AI app shows screens, and not every person's plan allows them. The product must still work.

**One request, start to finish.** The builder runs `list_open_invoices` in three places at 14:00.

1. **In Claude,** the screen appears, with the text answer behind it for the model.
2. **In ChatGPT,** the same screen appears, because ChatGPT implements the same standard.[^openai-mcp-apps]
3. **In a coding agent that shows no screens,** the same call returns the same text: five invoices, one per line, and the total of $21,329.00. The task is still done.

![On the left, in gold, list_open_invoices, which returns a text answer and a pointer to its page. Three arrows lead to three kinds of AI app. An AI app that shows screens shows the screen, with the text answer behind it for the model. Another AI app that follows the same standard shows the same screen. A coding agent with no screens shows the same text answer, five invoices and the total. Below, build and test the text answer first, and the task is done even where no screen appears.](img/chapter-20-text-behind.png)

*Figure 20.10. One tool, one answer, shown three ways.*

### Why keep the text answer?

The standard says so: servers should give every tool with a page a text-only fallback, and a tool must return meaningful content even when it has a page.[^mcp-apps-spec] It is [17.3](../connectors-and-mcp/errors-that-say-what-to-do-next.md)'s rule again: a tool never answers with nothing. An AI app that does not support MCP Apps treats the tool as an ordinary tool. The text answer is also what the model reads, so it is how the model explains the screen.

So build and test the text answer first, and add the screen second.

### How does one screen run in many AI apps?

Build to the standard. The official code library, `@modelcontextprotocol/ext-apps`, registers the page and the tool with `registerAppTool()` and `registerAppResource()`, and `App.connect()` in the page finds the AI app by itself.[^claude-mcp-apps-start] Many AI apps support the standard, among them Claude, ChatGPT, Gemini Enterprise and Goose.[^mcp-client-matrix] [20.18](how-todays-tools-realize-it.md) lists which ones, and how an administrator adds a connector in each.

Python has the same standard. The MCP Python code library includes MCP Apps support, `mcp.server.apps`, so the Python connector can serve the same page.[^mcp-python-apps]

Some AI apps add features of their own. ChatGPT's are reached through `window.openai`, and a page that depends on them works only in ChatGPT. OpenAI's own advice is to use the standard first and add its extras only for what the standard does not cover. Check that a feature is there before using it.[^openai-mcp-apps],[^openai-apps-reference]

### Does the answer to "whose click is it?" change between AI apps?

No. Each AI app shows the page in its own way, and may ask the person different things. But the call reaches your connector with the person's token in every one of them, and the connector checks it the same way.

**At work.** In Lab 20, Task 2, the text answer is tested before the page exists. In Task 8, the same screen is opened in a second AI app, and the screen matrix's rows C1 to C3 run again there.

**The operating rule:** build the text answer first and the screen second, to the standard. Before you use one AI app's extras, check that they are there.

[^openai-mcp-apps]: MCP Apps compatibility in ChatGPT, OpenAI Developers, accessed 15 November 2026.
[^mcp-apps-spec]: MCP Apps specification, revision 2026-01-26, Model Context Protocol, accessed 15 November 2026.
[^claude-mcp-apps-start]: Get started with MCP Apps, Claude documentation, accessed 15 November 2026.
[^mcp-client-matrix]: Extension Support Matrix, Model Context Protocol, accessed 15 November 2026.
[^openai-apps-reference]: Apps SDK reference, OpenAI Developers, accessed 15 November 2026.
[^mcp-python-apps]: mcp.server.apps, MCP Python SDK reference, accessed 15 November 2026.



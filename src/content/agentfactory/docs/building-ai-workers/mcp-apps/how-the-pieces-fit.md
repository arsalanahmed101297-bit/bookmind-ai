# 20.16 How the pieces fit (/building-ai-workers/mcp-apps/how-the-pieces-fit)

---
type: Document
title: "20.16 How the pieces fit"
description: "Core MCP and its extensions as four layers of one connector, what each answers, and the common mistakes."
status: stable
order: 320.16
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.16" ]
last_verified: 2026-11-15
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A shop has goods, staff who know how to sell them, a shop window, and a door with a lock. Each answers a different question, and the shop needs all four.

**What you will learn.** How the chapter's extensions fit one connector, and the mistakes builders make most.

**Why it matters.** Each extension answers a different question. Mixing them up leads to the mistakes below, such as treating a screen as a permission.

### What does each layer answer?

| Question | Answer | Brightline example |
| --- | --- | --- |
| What can the AI do? | Tools, plain MCP | `list_open_invoices`, `find_vendor` |
| How should the AI do the job well? | Skills over MCP | `invoice-triage` |
| What does the person see and touch? | MCP Apps, with A2UI if the AI shapes the screen | The open-invoices screen |
| Who may use it? | Sign-in, with Enterprise-Managed Authorization and Client Credentials | Luis, Cedar Ridge's employees, the report job |

![One connector, four layers. A large box labeled sign-in, who may use it, holds three layers stacked. At the top, screens, what the person sees and touches. In the middle, skills, how the AI should do the job well. At the bottom, in gold, tools, what the AI can do and what is allowed. On the right, under three ways in, three boxes with arrows into the sign-in box. A person who approved. An employee, through their company's identity provider. A job with its own identity. Below, tools and sign-in decide what is allowed, and skills and screens make the work easier and never grant anything.](img/chapter-20-four-layers.png)

*Figure 20.16. One connector, four layers. Tools and sign-in decide what is allowed. Skills and screens never do.*

### What are the common mistakes?

| Mistake | Why it hurts | Better |
| --- | --- | --- |
| A screen with no text answer | AI apps without screens show nothing useful | Every tool returns useful text (20.9) |
| A screen for every answer | The chat fills with panels | Show a screen when the person will look or act (20.2) |
| Treating a hidden tool or button as protected | Anyone with a token can call any tool | Check every call in the connector (20.5) |
| Depending on streamed input | Some AI apps never send it | Work from the complete input (20.3) |
| Using `window.openai` extras everywhere | The screen works only in ChatGPT | Build to the standard, and check before using an extra (20.9) |
| Letting the AI write the page | Layout, quality and safety vary | Approved parts, such as A2UI (20.10, 20.11) |
| Generic skill names | Skills from different servers collide | Distinct names (20.13) |
| Changing skill files often | Every change means approving again | Batch and version changes (20.13) |
| Linking accounts by email alone | A reused address can open someone else's records | Issuer and subject (20.14) |
| A job that borrows a person's access | It acts as that person | Its own identity, with the least scope (20.15) |
| Testing only that the screen appears | A screen can appear and still lose the person's work | Test the whole path: sign in, act, reopen, retry |
| Testing in one AI app | Support differs feature by feature | Test every AI app and plan you promise, phones included |

**The operating rule:** let tools and sign-in decide what is allowed, let skills and screens make the work easier, and test each layer in every AI app you sell into.



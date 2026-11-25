# 20.1 What an MCP extension is (/building-ai-workers/mcp-apps/what-an-mcp-extension-is)

---
type: Document
title: "20.1 What an MCP extension is"
description: "An extension is an optional, named add-on to MCP that both sides must declare. Its stage says what you can rely on, and a missing extension means falling back for features, never for proof of who someone is."
status: stable
order: 320.01
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:27Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.1" ]
last_verified: 2026-11-15
sources:
  - id: mcp-ext
    title: "MCP Extensions Overview (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/overview
  - id: mcp-client-matrix
    title: "Extension Support Matrix (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/client-matrix
  - id: mcp-ext-list
    title: "MCP Extensions Overview, the official list (Model Context Protocol, verified 2026-11-21)"
    resource: https://modelcontextprotocol.io/extensions/overview
generated:
  at: 2026-11-21T00:02:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A car is sold with a base model and optional extras: a tow bar, a roof rack, heated seats. The base car drives without any of them. A tow bar only helps if the trailer has the matching hitch.

**What you will learn.** What an MCP extension is, how two sides agree to use one, what its stage promises, and what to do when the other side does not support it.

**Why it matters.** Everything in this chapter is an extension: screens, skills that travel with a server, and two new ways to sign in. Each one works only when both sides support it, so a connector that sells must decide what happens when they do not.

**One request, start to finish.** Luis's AI app connects to Brightline's connector on Tuesday morning.

1. **The AI app says what it supports.** With each request it sends a list of the extensions it can use, such as the screens extension.
2. **The connector says what it offers,** in its answer to `server/discover`, the request where an AI app asks a server what it can do ([17.1](../connectors-and-mcp/mcp-in-one-picture.md)).
3. **An extension is used only when both lists name it.** Luis's AI app shows screens, so he gets the open-invoices screen.
4. **Marco opens the same connector from a coding agent that shows no screens.** Its list does not name the screens extension. The connector falls back to plain MCP, and Marco gets the text answer.

![Two rows compare what each side supports. Top row, Luis's AI app supports screens and skills over MCP. The connector offers screens and skills over MCP. Both name screens, so Luis gets the open-invoices screen. Bottom row, Marco's coding agent supports skills over MCP but no screens. The connector offers the same two. Only one side names screens, so Marco gets the text answer. A note says a missing feature may drop back to plain MCP, but a missing proof of who is calling must be refused. Below, extensions are off by default, and each side must say it supports one.](img/chapter-20-handshake.png)

*Figure 20.3. An extension is used only when both sides name it. A missing screen drops back to text.*

### What is an extension?

An extension is an optional addition to MCP for features that not every AI app needs. Each has a name with a vendor part, such as `io.modelcontextprotocol/ui`. Official extensions use the `io.modelcontextprotocol` prefix. Extensions are always off by default, and each side must turn them on on purpose.[^mcp-ext]

### What does an extension's stage promise?

Every extension is at one of three stages:[^mcp-ext]

| Stage | What may change | What you can expect |
| --- | --- | --- |
| Experimental | Anything, at any time | Nothing. It may change or disappear |
| Beta | Anything, but breaking changes should be rare | Real use is welcome. Breaking changes are written down |
| Stable | Only with a new revision of MCP itself | Its behavior is fixed within a protocol revision |

Build a product only on Beta or Stable, and record the stage you built on.

### Which official extensions are there today?

As of November 21, 2026, the MCP project lists these seven:[^mcp-ext-list]

| Extension | Name | Stage | What it adds | In this chapter |
| --- | --- | --- | --- | --- |
| MCP Apps | `io.modelcontextprotocol/ui` | Stable | Screens inside the chat | 20.2 to 20.11 |
| Skills over MCP | `io.modelcontextprotocol/skills` | Beta | Skills a server shares | 20.12 and 20.13 |
| Enterprise-Managed Authorization | `io.modelcontextprotocol/enterprise-managed-authorization` | Stable | Sign-in decided by a company's own identity system | 20.14 |
| OAuth Client Credentials | `io.modelcontextprotocol/oauth-client-credentials` | Stable | Sign-in for a program with no person present | 20.15 |
| Tasks | `io.modelcontextprotocol/tasks` | Beta, planned for the core | Long work that a client checks on later | 20.15 |
| Server Cards | Its proposal, SEP-2127 | Beta | A server's details, readable before connecting | Not covered |
| Events | No name listed yet | Beta | Events from upstream systems, received by polling, push or webhook | Not covered |

Which AI apps support which extension changes often. The MCP project keeps a public table of it, the support matrix.[^mcp-client-matrix]

### What if the other side does not support it?

If one side supports an extension and the other does not, the supporting side either falls back to plain MCP or refuses the request with an error, when the extension is required.[^mcp-ext] The chapter's rule for choosing:

- **Fall back for features.** A connector with screens still returns its text answer (20.9). Marco loses the table, not the invoices.
- **Never fall back on proof of who someone is.** A connector that requires a sign-in extension may refuse an AI app that cannot use it. A missing screen is an inconvenience. A missing sign-in check is a breach.

**At work.** The builder writes the connector's extension list into `docs/connector-spec.md`: screens (Stable), with the text answer as the fallback. Ana adds one line: "No extension may change who can see what."

**The operating rule:** use an extension only when both sides declare it, build on Beta or Stable, fall back to plain MCP for features, and refuse rather than fall back when the extension proves who is calling.

[^mcp-ext]: MCP Extensions Overview, Model Context Protocol, accessed 15 November 2026.
[^mcp-client-matrix]: Extension Support Matrix, Model Context Protocol, accessed 15 November 2026.
[^mcp-ext-list]: MCP Extensions Overview, Model Context Protocol, accessed 21 November 2026.



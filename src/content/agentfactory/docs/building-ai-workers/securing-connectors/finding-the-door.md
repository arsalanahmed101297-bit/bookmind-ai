# 18.3 Finding the door (/building-ai-workers/securing-connectors/finding-the-door)

---
type: Document
title: "18.3 Finding the door"
description: "Discovery: the 401 points to the connector's document, which names its sign-in server. Nothing is guessed."
status: stable
order: 318.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-02T18:20:57Z
chapter: "18"
part: III
expert_status: builder-only
concepts: [ "18.3" ]
objectives:
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
sources:
  - id: mcp-discovery
    title: "Authorization server discovery, MCP specification 2026-07-28 (MCP, accessed 2026-11-02)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/authorization-server-discovery
  - id: rfc9728
    title: "RFC 9728, OAuth 2.0 Protected Resource Metadata (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc9728
  - id: rfc8414
    title: "RFC 8414, OAuth 2.0 Authorization Server Metadata (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc8414
generated:
  at: 2026-11-02T18:20:57Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A sign on a locked office door says "Visitors, please check in at reception, Building B." You do not guess where reception is, and you do not trust a stranger in the hallway who offers to take you there.

**What you will learn.** How an AI app finds the right place to sign in, with nobody setting it up and nothing guessed.

**Why it matters.** An app that guessed could send a person to a look-alike page that collects passwords.

**One request, start to finish.** Ana's app has just received the 401 from step 1 in [18.2](sign-in-in-one-picture.md). How does it know where Ana should sign in?

1. **The 401 carries a link** to a small document the connector publishes about itself, and the scopes (permissions) it needs.
2. **The app fetches that document from the connector.** It says: "I am the connector at this address. My tokens come from this sign-in server. These are the scopes I know."
3. **The app fetches the sign-in server's own document,** from a standard address under the sign-in server's own address. Standard addresses like these start with `/.well-known/`, so any program knows where to look. For example, if Brightline's sign-in server lives at `https://auth.brightline.example/api/auth`, its document lives at `https://auth.brightline.example/.well-known/oauth-authorization-server/api/auth`: the standard part goes in the middle, and the server's own path moves to the end. The document lists where to send the browser, where to swap a code for tokens, where to find the keys that check its tokens ([18.6](a-token-made-for-one-door.md) explains them), and what the sign-in server supports.

Now the app knows everything it needs for steps 3 to 8 of [18.2](sign-in-in-one-picture.md), and nothing was guessed.

### What is discovery?

Finding these documents is called **discovery**. Each **metadata document** is a small, public file in JSON (the text layout of labels and values from 17.1) that describes one server, so other programs can learn how to talk to it without being set up by hand.

### Why two documents?

Because there are two servers, often run by different people. One document describes the connector: where its tokens come from. The other describes the sign-in server: how to sign in there. A company might run ten connectors that all trust one sign-in server.

The rules:

- The connector **must** publish its document, naming its sign-in server, and **must** say where the document is: by the link in the 401, at a standard address under its own, or both. Brightline does both. The app **must** try the link in the 401 first, and the standard address if there is no link.
- The sign-in server **must** publish its document. The app **must** be able to read it.[^mcp-discovery]

### Why must the app not guess?

If an app took the sign-in server's address from anywhere other than the connector itself, such as a link in an email or a web page, an attacker could slip in the address of a look-alike sign-in page and collect passwords. The app follows links that start at the connector itself: the 401 points to the connector's document, and that document names the sign-in server. So the app sends Ana only where Brightline's connector says.

### Which scopes does the app ask for?

The 401 **should** name the scopes the connector needs. The app asks for those first. They should be the minimum for ordinary use. More can be asked for later ([18.7](permission-per-tool.md)).

**At work.** The builder asks Claude Code to call the online connector with a small program that sends one web request and shows the reply, with no token, then to fetch the two documents that reply leads to. The builder reads each: the connector's names the Brightline sign-in server, and the sign-in server's lists its addresses and where its public keys are.

**The operating rule:** a connector that requires sign-in answers a request with no token with a 401 that points to its own document, and its document names its sign-in server. AI apps follow that chain, never a guess.

*The standards behind this concept: protected resource metadata (RFC 9728)[^rfc9728] for the connector's document, and authorization server metadata (RFC 8414)[^rfc8414] for the sign-in server's. Field guide [F4](field-guide-securing-connectors.md#f4-the-sign-in-in-detail) shows both documents and the 401's exact header.*

![A chain of three boxes left to right. First, the connector's 401 reply, with a link to the connector's document and the scope needed. An arrow to the second box, the connector's document, at a standard address under the connector: my address, my sign-in server, the scopes I know. An arrow to the third box, the sign-in server's document, at a standard address under the sign-in server: where to sign in, where to swap a code for tokens, where the public keys are, what it supports. Below: every link starts at the connector itself. Nothing is guessed.](img/chapter-18-discovery.png)

*Figure 18.6. From the first 401 to the sign-in server, by following links the connector publishes.*

[^mcp-discovery]: Authorization server discovery, MCP specification 2026-07-28, MCP.
[^rfc9728]: RFC 9728, OAuth 2.0 Protected Resource Metadata, IETF.
[^rfc8414]: RFC 8414, OAuth 2.0 Authorization Server Metadata, IETF.



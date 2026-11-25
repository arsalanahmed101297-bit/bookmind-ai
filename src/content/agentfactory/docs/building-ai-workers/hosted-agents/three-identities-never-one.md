# 23.9 Three identities, never one (/building-ai-workers/hosted-agents/three-identities-never-one)

---
type: Document
title: "23.9 Three identities, never one"
description: "The product, the worker and each person get their own identity, each with only what it needs, and why one identity for everything is the mistake."
status: stable
order: 323.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:40Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.9" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:40Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**Part C. Identity, secrets and companies.** *The heart of the chapter. [Chapter 18](../securing-connectors/overview.md) kept companies apart at sign-in, and [Chapter 19](../business-data-and-retrieval/overview.md) kept them apart in the database. This part keeps them apart across sessions. Four concepts, then Sitting 3a, which ends Milestone 1.*

**Four kinds of token you will meet in this part.** The word means different things, so here they are side by side. The full list is in "Words this chapter uses".

| Token | What it is |
| --- | --- |
| **Access token** | A short-lived sign-in token the connector checks on every call (Chapter 18) |
| **Refresh token** | A longer-lived token used to get a new access token without the person (Chapter 18) |
| **ID token** | A signed token that tells the portal who signed in. Never sent to the connector |
| **Delegated token** | A person's access token, used by an application on their behalf (23.9) |

A **model token**, in [23.5](a-budget-on-every-run.md), is different again: a piece of text the model reads or writes.

![On the left, the sign-in server, which issues three tokens at consent. Three arrows go right, one to each token. The ID token: the portal reads it to learn who signed in, and it stays in the portal. The access token: the vault holds it, and the platform adds it to calls to the connector. The refresh token: the vault holds it, and the platform uses it to get a new access token from the sign-in server. Below: a delegated token is the person's access token, used on their behalf. A model token is something else, a piece of text the model reads or writes. None of them passes through the model.](img/chapter-22-token-kinds.png)

*Figure 23.13. Three tokens from one sign-in, and where each one goes. A model token is a different thing altogether.*

**In everyday life.** An apartment building has three kinds of pass. The property manager holds a booking card that can only book a contractor's visit to the site, and nothing more. The cleaning company's badge only names who came in: it opens no door by itself. And each resident's key opens that resident's unit, and only it. When the cleaner enters Unit 7C, the cleaner uses the key that 7C's resident left for that purpose, and the lock records both the badge and the key. In this concept, the manager's booking card is like your **product identity**, the cleaning company's badge is like the **worker identity**, and each resident's key is like that **person's delegated token**.

**What you will learn.** Why a hosted worker involves three different identities, what each one may do, and why one identity for everything is the mistake.

**Why it matters.** A worker that runs as one powerful identity can be fooled into reaching anyone's data, and its logs blame the wrong person. Separate identities keep each mistake small and each record true.

**One request, start to finish.** The builder's first test script for the portal had one shortcut: it started every session with the builder's own API key, and sent every connector call with the builder's own sign-in token. Ana and Luis both tried it.

1. **Ana asks about Brightline's invoices.** The answer is right, because the builder's token is for Brightline.
2. **Luis asks about Cedar Ridge's invoices.** He gets Brightline's, because the builder's token is for Brightline.
3. **The connector's logs** say the builder asked both questions.
4. **The builder leaves for a week.** The builder's personal key is the only way the portal can start a session, and nobody else can rotate it (replace it with a new key).

One identity for everything, and every one of its problems showed up in a day. It was the shortcut Chapters [21](../agent-loop-by-hand/overview.md) and [22](../agent-sdks/overview.md) took on purpose: the worker ran as you, with a test token, and [Lab 22](../agent-sdks/lab.md)'s specification said so in its last row. Fine on your own computer, for testing. Wrong the moment a second person uses it.

### Which three identities does a hosted worker involve?

A hosted worker involves three identities. Each answers a different question, and each gets only what it needs:

| Identity | Answers | Who holds it | May do |
| --- | --- | --- | --- |
| **Product identity** | "Which product is asking the platform to run a session?" | Your server, as a key or a short-lived token (more in Half 2, [23.13](keys-that-expire-and-no-keys-at-all.md)) | Create sessions and read their events, in one workspace (a separate space on the platform, such as staging or production) |
| **Worker identity** | "Which worker is this?" | The platform, as the agent definition's id and version | Nothing on its own. It is a name for logs and limits |
| **The person's delegated token** | "Who is this run for, and for which company?" | The platform, in that person's vault ([23.10](a-vault-per-person-and-company.md)) | Exactly what the person consented to: read four tools, for one company (Chapter 18) |

A **delegated token** is one a person allowed an application to use for them, through the consent screen of Chapter 18. It carries the person, the company in its `tenant` claim, and the scopes they agreed to. (A **tenant** is Chapter 18's word for one customer company, and this chapter says "company" wherever it can.) The connector checks it on every call, and the database keeps the company's rows apart from it (Chapter 19). So the worker can do only what that person may do, for that company.

### Why must a worker never act as you?

Four reasons, each from the story above:

- **Blast radius.** A worker with the builder's rights can do anything the builder can, for every company the builder can reach. A mistake or an injection inherits all of it.
- **Audit.** The connector's log should say Ana asked, not the builder. Otherwise no one can answer "who saw this invoice?"
- **Revocation.** If Luis leaves Cedar Ridge, only his access should stop. If everything runs as the builder, removing Luis removes nothing.
- **People leave.** A product that runs on one person's key stops when that person does. A product identity belongs to the product, not to a person.

A worker can also act with an organization's own authority, not one person's. That is a different kind of delegated authority, and "Beyond this chapter" explains it.

### Where does the product identity come from?

An API key is a long secret string that your server sends with every request to the platform, so the platform knows which account is asking and whom to bill. Make it for a **service account**, an account for a program rather than a person, so the key belongs to the product and keeps working when people leave. And give it an **expiry date**, so a key that leaks stops working on its own. In Half 2, 23.13 goes further.

### What does least privilege mean for each one?

The product identity works in one workspace only, with a spending limit. The worker identity has no secrets of its own. The person's token has only the scopes the worker's tools need, and lives only in that person's vault.

**At work.** In [Lab 23](lab.md), Task 10b, after Ana's session runs, the builder asks Claude Code to show three things. First, which key started the session: the portal's, in the staging workspace. Second, the session's agent definition id and version. Third, the connector's log line for the tool call. The log line names Ana and Brightline, not the builder.

**The operating rule:** give the product, the worker and each person their own identity. Never let a worker act as you, and never let one person's token serve another person's question.

![Three cards side by side. Left, product identity: the portal's server, key or short-lived token, create sessions, one workspace, a limit. Middle, worker identity: the definition's id and version, no secrets, a name for logs. Right, in gold, the person's token: Ana, Brightline, two read scopes, in Ana's vault, checked on every call. Below, a dashed red-orange card, struck through with a red-orange line: the builder's own key and token for everything, every log says the builder, every company gets Brightline.](img/chapter-22-three-identities.png)

*Figure 23.14. Three identities, each with only what it needs. One identity for everything is the mistake.*



# 20.14 Employees through their company (/building-ai-workers/mcp-apps/employees-through-their-company)

---
type: Document
title: "20.14 Employees through their company"
description: "Enterprise-Managed Authorization: a company's identity provider decides which employees may use a connector, so sign-in, access and removal are managed in one place."
status: stable
order: 320.14
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.14" ]
last_verified: 2026-11-15
sources:
  - id: mcp-ext
    title: "MCP Extensions Overview (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/overview
  - id: mcp-ema
    title: "Enterprise-Managed Authorization (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization
  - id: anthropic-org-connectors
    title: "Authorize MCP connectors for your entire organization (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Going further. Built only in Lab 20's optional tasks. It builds on Chapter 18's sign-in, so read it after 20.16 if you want it.*

**In everyday life.** A new employee gets one badge at the front desk. It opens the doors the company decided, in every building. When she leaves, the front desk cancels one badge, and every door stops opening.

**What you will learn.** How a company's own sign-in system can decide who may use your connector, and what your sign-in server and connector check.

**Why it matters.** In Chapter 18, each person approved the connector for themselves, on the consent screen ([18.2](../securing-connectors/sign-in-in-one-picture.md)). Chapter 18's field guide named single sign-on, where Cedar Ridge's own login proves who the person is, but each person still approves. Cedar Ridge is growing. Hannah, the controller, wants one place to give and remove access, and a record of who was allowed in.

**One request, start to finish.** Cedar Ridge signs everyone in through its identity provider, the system it uses for work accounts, such as Okta or Microsoft Entra ID.

1. **Luis signs in to his AI app with his work account,** once, through single sign-on.
2. **The AI app asks Cedar Ridge's identity provider for a special pass,** an Identity Assertion JWT Authorization Grant, or ID-JAG.
3. **The identity provider checks Cedar Ridge's policy:** is Luis in a group allowed to use Brightline's connector? He is, so it issues the ID-JAG.
4. **The AI app trades the ID-JAG at Brightline's sign-in server** for an ordinary access token. Luis sees no consent screen.
5. **The connector checks that token** exactly as in Chapter 18: the seal and the audience ([18.6](../securing-connectors/a-token-made-for-one-door.md)), the scope ([18.7](../securing-connectors/permission-per-tool.md)) and the company ([18.11](../securing-connectors/one-order-slip-per-request.md)).

![Five columns, from left to right. Luis, his AI app, Cedar Ridge's identity provider in gold, Brightline's sign-in server, and the connector. Step 1, Luis signs in once with his work account. Step 2, the AI app asks the identity provider for a pass, an ID-JAG. Step 3, the identity provider checks Cedar Ridge's policy, whether Luis may use this connector. Step 4, it returns the ID-JAG. Step 5, the AI app trades the ID-JAG at Brightline's sign-in server for an access token, with no consent screen. Step 6, the AI app calls the connector with the token, checked like any call. Below, the company decides who may connect, the connector still checks every call, and people are linked by issuer and subject.](img/chapter-20-id-jag.png)

*Figure 20.14. An employee connects through their company. The company decides who may connect, and the connector still checks every call.*

### What does each server check?

The extension is `io.modelcontextprotocol/enterprise-managed-authorization`, and it is Stable.[^mcp-ext] The work splits between two servers:[^mcp-ema]

- **The sign-in server at Brightline** says in its metadata that it requires the extension. It checks each ID-JAG against the identity provider's published keys, with its audience, issuer and expiry, maps its claims to the person and their permissions, and issues an access token.
- **The connector** checks that access token on every call, and decides what this person may do, as before. Nothing about a screen or a click changes.

The AI app must not send the person to Brightline's sign-in page in this flow. It trades the ID-JAG instead.[^mcp-ema]

### What happens when Luis leaves?

Hannah disables his work account. This is [18.14](../securing-connectors/a-companys-life.md)'s "remove a person", decided at Cedar Ridge instead of in Brightline's sign-in server. The MCP project says revoking access at the identity provider takes effect at once, across all AI apps.[^mcp-ema] But a token already issued is checked by Brightline's connector until it expires. So keep access tokens short-lived, and test how long it really takes before Luis's last call fails.

### How do you link a work identity to an existing account?

Each ID-JAG carries a subject claim, a stable id for the person, and may carry an email. Use the subject, with the identity provider that issued it, as the stable identifier. Use the email only to find an account created before this sign-in was set up.[^mcp-ema] A company can give a former employee's email address to someone new, so an email alone must never open someone else's records.

### Where is it supported?

Support varies by AI app, and it usually needs the company's IT team to set it up too.[^mcp-ema] On Claude Team and Enterprise, an administrator can authorize a connector once for everyone, if the connector supports it.[^anthropic-org-connectors]

**At work.** In Lab 20, Task 13 (optional), the builder adds a test identity provider to the sign-in server and runs Luis's sign-in and removal.

**The operating rule:** when a company manages sign-in, let its identity provider decide who may connect, check every ID-JAG at your sign-in server, link people by issuer and subject, and keep tokens short so removal takes effect soon.

[^mcp-ext]: MCP Extensions Overview, Model Context Protocol, accessed 15 November 2026.
[^mcp-ema]: Enterprise-Managed Authorization, Model Context Protocol, accessed 15 November 2026.
[^anthropic-org-connectors]: Authorize MCP connectors for your entire organization, Claude Help Center.



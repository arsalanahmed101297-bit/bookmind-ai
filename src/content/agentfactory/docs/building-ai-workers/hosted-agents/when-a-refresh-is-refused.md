# 23.14 When a refresh is refused (/building-ai-workers/hosted-agents/when-a-refresh-is-refused)

---
type: Document
title: "23.14 When a refresh is refused"
description: "Refresh, rotation and a refusal for good, and how the portal turns a refused refresh into \"sign in again\" instead of an error."
status: stable
order: 323.14
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:40Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.14" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:40Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A gym membership card works for a month at a time. Each month the gym renews it automatically, and hands over a new card while it takes back the old one. If the member cancels, the next renewal fails. The member does not find out from an error code at the turnstile. The front desk says: "Your membership has ended. Would you like to rejoin?" In this concept, the monthly card is the access token, the automatic renewal is a refresh, and "would you like to rejoin" is the portal's "sign in again".

**What you will learn.** How a hosted worker keeps working while a person is away, why each refresh replaces the old one, and what the portal does when a refresh can never succeed.

**Why it matters.** A person who leaves a company must lose access at once, but a brief outage must not lock anyone out. Telling the two apart keeps the worker both safe and usable.

**One request, start to finish.** On Monday morning, Luis leaves Cedar Ridge. Cedar Ridge's controller, Hannah Price, removes him on the sign-in server, which withdraws his grant. A minute later, a session for Luis that started before his removal makes its next connector call.

1. **The session calls the connector.** Luis's access token has just expired, so the platform tries to refresh it.
2. **The sign-in server refuses the refresh,** because his grant was revoked.
3. **The platform cannot refresh the credential,** and sends the portal a message saying so ([23.15](schedules-and-webhooks.md)).
4. **The session reports an authentication error** for the connector, and carries on without it, so the worker says it could not reach the AP data.
5. **The portal marks Luis's vault as needing sign-in,** stops any schedule that uses it, and shows anyone who opens his page: "This account needs to sign in again to use the AP worker."

No stack trace (a raw error report), no retry loop, and no more Cedar Ridge data read for someone who no longer works there. A still-valid access token would have worked until it expired, which is why access tokens are kept short.

### Why does a worker need a refresh token?

[Chapter 18](../securing-connectors/overview.md) kept access tokens short, because a signed token cannot be called back once issued: it works until it expires. So a worker that runs while the person is away needs a refresh token (Chapter 18), a longer-lived token that can be exchanged for a new access token. The right to keep getting new tokens, which the person gave at consent, is their grant ([23.11](one-session-one-person-one-company.md)). Refresh tokens and grants come from the core OAuth standard, RFC 6749.

OAuth 2.1, the draft update of the sign-in standard, adds **refresh token rotation**: each time a refresh token is used, the sign-in server returns a new one and the old one stops working. If a stolen refresh token is ever used, either the thief's or the real holder's next refresh fails, and the theft shows. Chapter 18's sign-in server rotates on every refresh. It also needs the connector's address, `resource`, on every refresh, as on every sign-in: without it, the new token is one the connector refuses.

A refresh can fail for two kinds of reason, and they need different handling:

| Kind | Examples | What the product does |
| --- | --- | --- |
| **Refused for good** | The grant was revoked, the person left, the company was offboarded, the refresh token was already used | Mark the vault as needing sign-in, stop scheduled runs for it, ask the person to sign in again |
| **Failed for now** | The sign-in server was briefly down, a network error | Wait, and try again. Do not ask the person anything |

To tell them apart, the lab's platform offers a check that reports a credential as valid, invalid (ask the person to sign in again) or unknown (wait and try again). The portal calls it whenever a session reports an authentication error, before it changes anything.

### Which question do the documents leave open?

With rotation, every refresh returns a new refresh token. If a platform did not store the new one, its next refresh would use the old one, which no longer works. The platform's documents do not say, so Lab Task 15 tests it.

**At work.** In [Lab 23](lab.md), Task 16, Claude Code revokes Luis's grant on the staging sign-in server. Then it starts a session for Luis and shows the builder the authentication error in the session's log, the credential check reporting `invalid`, and the portal's page for Luis showing "sign in again". When Luis signs in and approves consent again, the portal replaces the secret values in his existing credential, because a vault holds one active credential per connector address, and the next session works.

**The operating rule:** keep access tokens short and refresh tokens rotating. When a refresh is refused for good, ask the person to sign in again and stop that vault's schedules.

![A token's life in five boxes, left to right, joined by arrows. A gold box reads consent, access 1, refresh 1. Then: refresh 1 used, access 2, refresh 2. Then: refresh 2 used, access 3, refresh 3. Under these: each refresh token works once (rotation). Then two boxes edged in red-orange: grant revoked, and next refresh refused. From the refusal, a red-orange arrow runs to a gold box that reads refused for good: ask the person to sign in again, stop the schedule. A dashed arrow runs to a white box that reads failed for now: wait and try again, ask nobody. A side note: a stolen refresh token shows the first time both are used.](img/chapter-22-token-life.png)

*Figure 23.20. Issued, refreshed, rotated, refused. A refusal for good becomes "sign in again", not an error.*



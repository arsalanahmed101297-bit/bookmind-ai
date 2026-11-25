# 18.2 Sign-in in one picture (/building-ai-workers/securing-connectors/sign-in-in-one-picture)

---
type: Document
title: "18.2 Sign-in in one picture"
description: "OAuth's four parties and the eight steps from the first 401 to the first answered call, starting from the Continue with button."
status: stable
order: 318.02
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T06:58:12Z
chapter: "18"
part: III
expert_status: builder-only
concepts: [ "18.2" ]
objectives:
  - { id: CCDV-F.D7.S4, label: supporting }
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
sources:
  - id: oauth21
    title: "OAuth 2.1, draft 17 (IETF, accessed 2026-11-02)"
    resource: https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/
generated:
  at: 2026-11-05T06:58:12Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** On many websites you have clicked a button that says "Continue with..." and named a large email or social company where you already have an account. A window from that company opened, you signed in there, perhaps approved "this site may see your name and email", and you were back on the website, signed in. The website never saw your password for that company. That is OAuth. The website played the part of Ana's AI app, and the email company played the part of the sign-in server. This concept is the same steps, with the connector added as the place the token is used.

**What you will learn.** How a person signing in through a browser becomes a token the connector accepts, step by step.

**Why it matters.** The next five lessons each explain part of these eight steps. Once you can retell them, those lessons are easier to follow.

**One request, start to finish.** Ana connects her AI app to the online connector for the first time and asks: "Is INV-8303 over its purchase order?"

1. **The app calls the connector with no token.** The connector answers **401**, "who are you?", as in [Chapter 17](../connectors-and-mcp/securing-a-remote-server.md). This time the reply also says where to find out how to sign in.
2. **The app reads the connector's sign-in details.** They name the sign-in server the connector trusts ([18.3](finding-the-door.md)).
3. **The app opens Ana's browser at the sign-in server.** It never shows Ana a password box of its own.
4. **Ana signs in, in the browser,** with her email and password. The sign-in server checks her password against its stored hash. Her browser then stays signed in at the sign-in server for a while, so a later sign-in may skip straight to the consent screen.
5. **Ana sees the consent screen.** It says which app is asking and what it wants to do ("read AP data"), and asks which company. She picks Brightline and approves.
6. **The browser comes back to the app with a one-time code.** Before step 3, the app started a tiny listener: a small part of the app that waits for the browser at an address on Ana's own computer. That is its return address. The sign-in server sends the browser there, with a short-lived code that is useless on its own.
7. **The app swaps the code for tokens,** by asking the sign-in server directly, not through the browser. Why the extra step? The browser's address bar and history are places other programs can see, so only the throwaway code travels there. The tokens travel on the app's own direct connection. The sign-in server returns the sign-in token, and, if the app asked for one, a refresh token, used later to get a new sign-in token without signing in again ([18.6](a-token-made-for-one-door.md)).
8. **The app calls the connector again, with the token.** The connector checks the token itself, without asking the sign-in server ([18.6](a-token-made-for-one-door.md) explains how), runs `get_purchase_order`, and answers: INV-8303 is $900.00 over.

From now on, every request carries the token, and Ana does not sign in again for a long while.

### What is OAuth?

OAuth is the open standard behind all this. It splits sign-in across four parties, so that no party sees more than it needs:

| Party | What OAuth calls it | What it does |
| --- | --- | --- |
| The person (Ana) | | Proves who she is, only to the sign-in server, in the browser |
| The AI app | The client | Asks for a token and uses it. Never sees the password |
| The sign-in server | The authorization server | Checks the person, asks for consent, issues tokens |
| The connector | The resource server | Only checks tokens |

The left column is all you need to follow this chapter. The middle column is what agents and documents call them, so learn to recognize those names.

**Two guards for the code.** Steps 6 and 7 have two more protections, so that a code copied from the browser is useless to a thief. [18.4](two-guards-for-the-code.md) explains them.

**At work.** Ana connects Claude Code to the online connector by its address and nothing else. Her first question gets a 401, Claude Code opens her browser, and she signs in and picks Brightline. The second attempt works. (On the very first day, Brightline's sign-in server may not yet know Claude Code. [18.17](how-todays-tools-realize-it.md) explains what happens then.) She never typed a key, and no key sits in any settings file.

**The operating rule:** the person signs in only at the sign-in server, in a browser. The AI app gets a token, never a password. The connector checks each token itself ([18.6](a-token-made-for-one-door.md)).

*The standards behind this concept: OAuth 2.1 (an IETF draft).[^oauth21] Field guide [F4](field-guide-securing-connectors.md#f4-the-sign-in-in-detail) shows each step's exact message.*

![A sequence between five columns: Ana, her browser, the AI app, the sign-in server and the connector. 1, the app calls the connector with no token and gets 401 with a link to its sign-in details. 2, the app reads them and finds the sign-in server. 3, the app opens Ana's browser at the sign-in server, with the connector's address and the permission it wants. 4, Ana signs in. 5, Ana picks Brightline on the consent screen and approves. 6, the browser returns to a small listener in the app with a one-time code. 7, the app swaps the code for tokens, directly with the sign-in server. 8, the app calls the connector with the token, and every copy checks the token. The password goes only to the sign-in server.](img/chapter-18-sign-in-picture.png)

*Figure 18.5. Sign-in in eight steps. The password reaches only the sign-in server.*

[^oauth21]: OAuth 2.1, draft 17, IETF.



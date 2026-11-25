# 17.8 Putting a connector online safely (/building-ai-workers/connectors-and-mcp/securing-a-remote-server)

---
type: Document
title: "17.8 Putting a connector online safely"
description: "Locking the door with an access key and an Origin check, then putting the connector online and changing it safely through staging."
status: stable
order: 317.08
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T06:58:11Z
chapter: "17"
part: III
expert_status: co-build
objectives:
  - { id: CCDV-F.D7.S1, label: direct }
  - { id: CCDV-F.D7.S4, label: direct }
concepts: [ "17.8" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-05T06:58:11Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A shop on a public street has a lock, and a front desk that turns away people who came from somewhere suspicious. While it is being fitted out, the door stays shut. On opening day, it opens, and changes to the shop are tried out in a back room before customers see them.

**What you will learn.** How to lock a connector's door, and how to put it online and change it safely.

**Why it matters.** Anyone who can reach the address can call it, and a wrong change reaches every caller at once.

This concept has two halves. The first locks the door. The second puts the connector online and keeps it running.

## Locking the door

**One request, start to finish.** Brightline's connector is online. Three requests arrive:

1. **One with no access key.** The server answers **401**, which means "who are you?", and runs no tool.
2. **One sent by a web page on a site the server does not trust.** Even if that page has the right key, perhaps because someone leaked it, the server answers **403**, which means "not from there".
3. **One with the right access key from Ana's AI app.** The server runs the tool and answers **200**, which means OK.

These numbers are the HTTP status codes from [17.1](mcp-in-one-picture.md). Field guide [F8](field-guide-connectors.md#f8-the-protocol-in-detail), "HTTP in one minute", lists the ones the lab uses. These refusals happen before MCP is involved, so they are neither protocol errors nor tool errors ([17.3](errors-that-say-what-to-do-next.md)). No tool runs.

![Three requests on the left reach the connector's door in the middle. A program with no access key. A web page from a site the server does not allow, even with a key. Ana's AI app with the right key. Inside the door, two checks in turn: first, the sending website, the Origin check, and a disallowed website gets 403, not from there. Then, is the access key right, and a missing or wrong key gets 401, who are you. Only a request that passes both reaches the tools, and gets 200, OK, the tool runs. Below: while you build, a third guard, the connector listens only at 127.0.0.1, this computer.](img/three-requests.png)

*Figure 17.13. Every request meets the same checks before any tool runs. Each refusal has its own status code.*


### What guards the door?

Anything that can reach the server's address can call it. So the server has three guards. It checks the key and the website on every request, before any tool runs. And while you build, it listens only to your own computer:

- **The access key.** Every request carries the key in a header: `Authorization: Bearer <key>`. "Bearer" means whoever carries the key is let in, so the key must stay secret. No key, or a wrong one, gets 401. Online, the address starts with `https`, so the key is encrypted on its way.
- **Which website sent it.** Here is the danger. You open a harmful web page. Without you knowing, it tells your browser to send requests to a connector, even one on your own computer. The browser labels each request with the page's website, in a header called **`Origin`**, and the page cannot change it. The server refuses websites it does not know, with 403. Some connectors run on a person's own computer with a web address, like the lab's at `127.0.0.1`, and many of them have no key. For them this check is the only lock, which is why the MCP specification requires every web connector to make it. Coding agents are not web pages and send no `Origin`, so for them the key alone decides. For Brightline, this check covers one case: a web page that got hold of the key. A leaked key used any other way is stopped only by changing the key.
- **Only your own computer, while you build.** On your computer, the server listens only at `127.0.0.1`, "this computer". Only programs on your own computer can reach it. Other machines on your network cannot. Your browser is also a program on your computer, so this guard does not stop a web page you open. The `Origin` check does.

### Where do the secrets live?

The server holds two secrets: the access key, which callers send, and the handle key, which seals page handles ([17.4](stateless-servers.md)). Neither is ever in the project's shared files, and neither is ever sent to the model. On your computer, they sit in a private file that the project deliberately leaves out of version control ([Chapter 15](../code-review/git-through-the-agent.md)). Online, the hosting service stores them as secrets and hands them to the server when it runs. You send them to the hosting service from your own computer, with one command per environment that never shows them (field guide [F6](field-guide-connectors.md#f6-deploying-to-cloudflare-workers)).

Two of these belong to the second half of this concept: CI, the automated checks from [Chapter 15](../code-review/checks-that-block.md), uses an access key to run the acceptance checks against the online connector, and a deploy token to put new code online.

| Secret | Who holds it | What it does |
| --- | --- | --- |
| Access key | Each AI app, and CI. One per environment | Proves a request may use the connector |
| Handle key | Only the connector's copies. One per environment | Seals page handles ([17.4](stateless-servers.md)) |
| Deploy token | Only CI | Lets CI upload new code to the hosting service. It is not a sign-in token |
| Sign-in token | Each person's AI app, from [Chapter 18](../securing-connectors/overview.md) | Replaces the shared access key with one that names the person |

### Is a shared key enough?

It is a start, not the end. Everyone who holds the access key looks the same to the server, and changing it means changing it everywhere. That is fine for sample data. For real data, people sign in instead. Each person's AI app then gets a sign-in token: a short-lived key that names the person, this server, and what it may do. (It is not the model's tokens from [17.2](a-tool-is-its-description.md).) That is **OAuth**, the standard behind "Sign in with..." buttons. Chapter 18 builds it for Brightline.

![Looking ahead to real sign-in. Three parties: the AI app on the left, an authorization server at the top, and the connector, a resource server, on the right, drawn as three short-lived copies. Steps: the AI app calls the connector and gets 401 with a link to its metadata. It signs the person in at the authorization server, naming this connector. It receives a sign-in token bound to this connector, with a scope. It calls again with the token, and every copy checks it every time. Until then, a shared access key stands in for the token.](img/securing.png)

*Figure 17.14. Looking ahead to Chapter 18: with real sign-in, each request carries a sign-in token made for this server, and every copy checks it. The lab's shared access key stands in for it.*

**In short:** the server checks the key and the website on every request, accepts only your own computer while you build, and keeps every secret out of the code.

## Putting it online, and changing it safely

This half is the idea. Field guide [F6](field-guide-connectors.md#f6-deploying-to-cloudflare-workers), "Your first deploy, in order", turns it into steps, with what you should see at each one.

### What changes once it is online?

**Deploying** means putting the current code online, so it answers at its web address. A serverless hosting service runs your code there whenever a request arrives, and may start a fresh copy for any request. That suits a server that remembers nothing ([17.4](stateless-servers.md)). Three things follow:

- **The data files are bundled with the code** when you deploy, because the copies have no disk you can put files on. The server reads them from that bundle, so the online connector serves the sample data as it was when you deployed. That is fine for this lab. [Chapter 19](../business-data-and-retrieval/why-a-database-now.md) moves the data into a database, so new invoices appear without a deploy.
- **The secrets live in the hosting service's safe,** never in the code.
- **Each request gets a fixed amount of processor time and memory.** Processor time counts only the time the code spends computing, not time spent waiting for files or the network. Brightline's connector does little computing, so this limit is not a problem. A connector that needs more can move to a service that runs it as an ordinary program.

The hosting service gives your connector a web address under the service's own name. If you later move to another service, that address stops working, and every AI app's settings must change. So if the connector might ever move, also give it an address under Brightline's own name from the start, such as `ap.brightline.example`. You set this where Brightline manages its own web addresses, and point it at the hosting service, and AI apps use that address. If the connector moves, you point the name at the new place, and no AI app's settings change.

### How do you change it safely?

The same way every time. A connector that real work depends on is never changed by hand. Four habits:

1. **Two environments.** Staging is a separate online setup, at its own address, with its own secrets. Every change goes there first and must pass the same checks. Production is the one people use. A staging key never opens production, and the other way round.
2. **Deploy from CI, not a laptop.** The very first deploy is from your computer. After that, only CI deploys. CI is the automated checks from Chapter 15, now extended to deploy. The checks and the deploy steps, run one after another, are often called the **pipeline**. When a reviewed pull request is merged into main, CI deploys it to staging and runs the acceptance checks against staging's address. Production is deployed only when a person starts that job by hand. CI needs secrets of its own, stored in the settings of the site that holds your code: a deploy token to upload code, and each environment's access key to run the acceptance checks. The table under "Where do the secrets live?" shows which key does what.
3. **Every deploy can be undone.** The hosting service keeps every earlier deploy, and one command switches back to one of them. If production misbehaves, you **roll back** to the last good deploy first, then fix the problem through a normal reviewed change.
4. **Logs you can read.** The server writes one line per request: what was asked and how it ended, never a key or private data.

A deploy is finished not when the command succeeds, but when the acceptance checks pass against the deployed address.

**At work.** Before going online, the builder runs both versions on `127.0.0.1` and has the conformance suite try the wrong requests: no key, a wrong key, and a disallowed website. Each is refused before any tool runs. Staging and production get different secrets. Each merge goes to staging and runs the checks there, and production follows when a person decides. When a deploy goes wrong, the builder rolls back first and fixes second.

**The operating rule:** check the access key and the `Origin` on every request, accept only your own computer while you build, keep secrets out of the code, deploy through staging, and move to real sign-in before real data goes through.


![A row of seven steps, left to right: a reviewed pull request with green checks, merge to main, deploy to staging, acceptance checks against the staging address, a person starts the production deploy, deploy to production, acceptance checks against the production address. Everything from the merge on is done by CI, not a laptop. Below, four notes. Two environments, staging and production, with separate addresses and keys. Secrets out of the code, sent from your computer and kept by the hosting service. Every deploy can be undone: roll back to the last good one, then fix. Logs that say what failed and why, with no keys, kept a few days.](img/deploy.png)

*Figure 17.15. A deploy is finished when the acceptance checks pass against the deployed address.*



# 20.15 Machines with no person (/building-ai-workers/mcp-apps/machines-with-no-person)

---
type: Document
title: "20.15 Machines with no person"
description: "OAuth Client Credentials gives a scheduled job its own identity instead of a person's, and the Tasks extension lets long work answer with a handle to check later."
status: stable
order: 320.15
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.15" ]
last_verified: 2026-11-15
sources:
  - id: mcp-ext
    title: "MCP Extensions Overview (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/overview
  - id: mcp-client-credentials
    title: "OAuth Client Credentials (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/auth/oauth-client-credentials
  - id: mcp-tasks
    title: "Tasks (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/tasks/overview
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Going further. Built only in Lab 20's optional tasks. It builds on Chapter 18's sign-in, so read it after 20.16 if you want it.*

**In everyday life.** A cleaning company gets its own key to the office, labeled with its name, for the night shift. It does not borrow the manager's key.

**What you will learn.** How a program with no person present signs in to a connector, and how long work answers without making the caller wait.

**Why it matters.** In Chapter 18, almost every token named a person ([18.6](../securing-connectors/a-token-made-for-one-door.md)), and every AI app had a client ID ([18.5](../securing-connectors/who-is-the-app.md)). The one exception was Lab 18's test client for CI, which signed in with client credentials and took its company from its own record at the sign-in server. Chapter 23 will warn that Brightline's morning triage runs with Ana's access, so it acts as her. A job that runs at 7:10 every weekday should be able to act as itself.

**One request, start to finish.** Brightline's month-end aging report runs at 2:00 a.m. on the first of each month.

1. **The report job signs in as itself.** It proves its identity to Brightline's sign-in server with a signed assertion, a short-lived proof made with its own private key.
2. **The sign-in server issues an access token** for the job, with only the scope the report needs. No browser opens, and no person approves.
3. **The job calls the connector,** which checks the token like any other, and finds no person in it, only the job.
4. **The report takes several minutes.** The connector answers at once with a task handle. The job checks the task until it is complete, and then reads the result.

![The month-end report job, which runs at two in the morning, holds its own private key. Step 1, it sends a signed assertion to Brightline's sign-in server, in gold. Step 2, the server returns a token naming the job, with the scope ap:read only. Step 3, the job starts the report at the connector, with the token. Step 4, the connector answers at once with a task handle. Below, in a box titled long work answers with a task handle, the job checks three times, working, working, then completed. Below, no browser opens and no person approves, and the job gets the least scope it needs.](img/chapter-20-job.png)

*Figure 20.15. A job with no person signs in as itself, and long work answers with a task handle.*

### What is OAuth Client Credentials?

The extension `io.modelcontextprotocol/oauth-client-credentials`, Stable, lets a program sign in with its own credentials, with no interactive approval. It suits background services, scheduled jobs, CI pipelines and server-to-server links. If a person should approve access, use the ordinary sign-in instead.[^mcp-ext],[^mcp-client-credentials]

It accepts two kinds of proof:[^mcp-client-credentials]

- **A signed JWT assertion** (recommended), made with the program's private key and short-lived.
- **A client secret,** simpler, but long-lived: store it in a secrets manager, rotate it, give it the least scope it needs, and prefer the signed assertion.

The connector checks the token's signature, claims and scopes on every request, as it does for people.[^mcp-client-credentials] The job's company comes the same way as for Lab 18's CI client: from the job's own record at the sign-in server, which puts it in each token. The connector takes it from the token, as always. Keep the job's scope narrow: the report reads, so it gets `ap:read` and nothing else.

### What is the Tasks extension?

Some calls take minutes. With `io.modelcontextprotocol/tasks`, a Beta extension planned for the core protocol, the connector may answer with a task handle instead of the result. The caller checks it with `tasks/get` until its status shows the work has finished, failed or been stopped. A task can also ask for input, with the status `input_required`. A task id survives a dropped connection, so the caller can check again after reconnecting. The connector must never return a task to a caller that did not declare the extension.[^mcp-ext],[^mcp-tasks]

**At work.** In Lab 20, Task 14 (optional), the builder gives the report job its own credentials and checks that its token carries `ap:read` only.

**The operating rule:** give each job its own identity with the least scope it needs, prefer signed assertions to long-lived secrets, and let long work answer with a task handle.

[^mcp-ext]: MCP Extensions Overview, Model Context Protocol, accessed 15 November 2026.
[^mcp-client-credentials]: OAuth Client Credentials, Model Context Protocol, accessed 15 November 2026.
[^mcp-tasks]: Tasks, Model Context Protocol, accessed 15 November 2026.



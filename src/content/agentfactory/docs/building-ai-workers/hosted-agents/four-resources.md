# 23.2 Four resources (/building-ai-workers/hosted-agents/four-resources)

---
type: Document
title: "23.2 Four resources"
description: "The agent definition, the runtime environment, the session and its events: which are made once and shared, and which one names a person."
status: stable
order: 323.02
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:39Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.2" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:39Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A temp agency keeps a file for each role it fills: "bookkeeper, knows the AP system, may not approve payments." That file is written once. Each morning, the agency sends a person from that file to one client's office, to one desk, for one day's work. The role file never names the client. The day's assignment does. In this concept, the role file is the agent definition, and each day's assignment is a session.

**What you will learn.** The four kinds of thing a hosted worker is made of, which of them are made once and shared, and which one names the person a run is for.

**Why it matters.** Keeping people and secrets out of the shared parts is what lets you review and reuse them. The person goes only into the one part made for a single task.

**One request, start to finish.** Ana asks two questions at almost the same moment from Brightline's portal: "Which invoices are due this week?" and "Does INV-8303 match its PO?" Behind the portal:

1. **The portal looks up one agent definition,** `ap-worker`, made once, weeks ago.
2. **It looks up one runtime environment,** `ap-sandbox`, also made once.
3. **It starts two sessions,** one per question. Each names the same definition and the same environment, and each names Ana's vault, the platform's locked store for her token ([23.10](a-vault-per-person-and-company.md)), and a budget.
4. **The platform gives each session its own sandbox.** The two sessions share no files and no history.
5. **Events flow** between the portal and each session: the question, the tool calls, the results, the answer.

Two questions, one definition, two sessions, two sandboxes.

### What are the four resources?

A hosted agent is made of four kinds of thing, called resources, each with its own id:

| Resource | What it is | Made | Names a person? |
| --- | --- | --- | --- |
| Agent definition | The recipe: model, instructions, tools, connectors, skills. Each change makes a new version | Once, then updated | No, never |
| Runtime environment | Where sessions run, and what they may reach on the network ([23.7](the-sandbox-and-its-network.md)) | Once | No |
| Session | One running instance of the worker doing one task, with its own sandbox and history | Once per task | Yes: it names the person's vault (23.10) and a budget ([23.5](a-budget-on-every-run.md)) |
| Events | Every message between your product and one session ([23.3](reading-a-session.md)) | Many per session | Through the session |

Two of these, the definition and the environment, are made rarely and shared by everyone. One, the session, is made for one person and one task. That split is the design. The definition can be reviewed, versioned and shared, because it holds no secret and no person. The session is where the person goes in, and it lives only as long as the task.

Some platforms add a fifth resource, a scheduled run: a saved instruction to start a session on a timetable. You build one in Half 2 ([23.15](schedules-and-webhooks.md)). It names a definition, an environment, a vault, a budget and the first message, like a session made in advance.

### Which two words mean something else elsewhere?

In [Chapter 17](../connectors-and-mcp/overview.md), an environment was staging or production. Here, a runtime environment is a hosted worker's setting for where it runs and what it may reach. The lab has one runtime environment for staging and another for production, so the two meanings meet, and the text always says which. And a session here is a worker's run, not a sign-in session in a browser. It is not [22.7](../agent-sdks/where-the-conversation-lives.md)'s session either, a saved conversation you resume: here a session is a running worker, with its own sandbox and history.

**At work.** In [Lab 23](lab.md), Task 3, Claude Code starts a first session from the terminal with no connector, asks it "What is 2 + 2?", and shows the builder the session's id, its definition's id and version, and its environment's id. Then it starts a second session with the same question and shows that it has a different session id, and so its own sandbox and history.

**The operating rule:** keep secrets and people out of the agent definition and the runtime environment. Put the person, the vault and the budget on the session, one session per task.

![Four cards. Top left, agent definition, version 3: model, instructions, four tools, one connector by address, one skill, with a note no secrets, no person. Top right, runtime environment: network rule, one open door, with a note no person. Below them, two session cards side by side, each pointing up at the same definition and environment. Each session card carries a gold tag reading Ana's vault, and a tag reading budget $0.50, and its own sandbox drawn as a small box. Inside each session card, beside its sandbox, a row of six small red-orange marks labeled events. Below: made once and shared, or made per task for one person.](img/chapter-22-four-resources.png)

*Figure 23.6. The definition and the environment are made once and shared. Each session is made for one task and names one person's vault.*



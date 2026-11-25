# From personal worker to business worker (/claude-and-chatgpt-2/architecture/from-personal-worker-to-business-worker)

---
type: Document
title: "From personal worker to business worker"
description: "How to keep Claude as the engine and build a business layer around it. It covers the MCP server, Better Auth, Postgres on Neon, Claude Tag and the four runtime options."
status: stable
order: 0.491
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Business worker" ]
last_verified: 2026-11-09
sources:
  - id: neon-better-auth
    title: "Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2, 2026, verified 2026-11-09)"
    resource: https://neon.com/blog/managed-better-auth-oauth-provider-mcp
  - id: better-auth-mcp
    title: "Better Auth MCP plugin (Better Auth, verified 2026-11-09)"
    resource: https://better-auth.com/docs/plugins/mcp
  - id: managed-agents
    title: "Claude Managed Agents overview (Anthropic, verified 2026-11-09)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: claude-tag-overview
    title: "Work with Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/overview
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: claude-tag-security
    title: "Security and data handling, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!NOTE]
> This page is for builders. On a first reading, read the verdict in its first paragraph and move on.

### Keep the engine, build the layer

Keep Claude as the engine. Build a business layer around it. When the stakes rise, move the runtime from the Claude app to the API, the way programs, not people, use the model.

The business layer is three things you own: a server that holds your rules, a sign-in system and a database. This page names one product for each, so that the design is concrete. The server is an **MCP** server. MCP, the Model Context Protocol, is the open standard connectors use. **Better Auth** is the sign-in system. **Postgres** is the database, hosted by **Neon**. They are examples, chosen because their makers document how they work with MCP.[^neon-better-auth],[^better-auth-mcp] This is one reference design, not a definition.

The runtime can be any of the four in the overview's [word list](overview.md#words-used-in-this-section): the Claude app, Claude Tag, Claude Managed Agents or the Claude Agent SDK. **[Inferred]** Whichever you choose, credentials, connection settings and approval requests need work for that runtime.

![Four runtimes, one business layer. The Claude app (acts as you), Claude Tag (its own service accounts), Claude Managed Agents (hosted, in beta) and the Claude Agent SDK (self-hosted) all reach your MCP server. The server uses Better Auth for worker identity, checks approvals and allows one payment per intent. Below it sit Postgres on Neon, an approval page and business systems. A band says Code tab and Claude Tag sessions can run on self-hosted runners, though Claude Tag cannot use admin connectors there.](img/four-runtimes-one-business-layer.png)

### The business layer: what to build

Better Auth on Neon handles sign-in and gives each worker its own keys. Postgres holds the records. Your MCP server enforces the rules. Token details are in [Appendix: business-layer details](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md).

| Requirement | What to build | Basis |
| --- | --- | --- |
| Own identity | A dedicated account or OAuth client (a registered app identity that can be given keys) for each worker, with narrow scopes. For example, it may propose payments but may not approve them | The OAuth tooling is vendor-documented.[^neon-better-auth],[^better-auth-mcp] One client per worker is the inferred design |
| Durable state | Tables for work items, approvals, payment intents and an audit log, using transactions and unique constraints | Vendor-documented. The design is inferred |
| Enforced authority | MCP tools that check the approval record and the token's scopes before acting. No caller gets raw SQL (direct database commands). The reconciliation worker gets only tools such as `record_status` and `propose_payment`. `execute_payment` belongs to a separate caller: the payment officer, or a payment worker with only that scope | The design is inferred |
| Human approval | A small approval page where a named person signs in and approves. The decision is written to Postgres. The review artifact only displays rows | The design is inferred |
| Audit and operations | Every tool call is logged with who, what, when, the result and the approval ID. Monitoring and cost budgets for each worker | The event history is vendor-documented[^managed-agents] |

The [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md) explains transactions, payment intents and their states.

### Identity: who is acting, and on whose behalf

**[Inferred]** The system must tell four parties apart and record all of them on every action. A **tenant** is the organization a record belongs to.

| Party | What it is | Rule the server enforces |
| --- | --- | --- |
| Worker identity | The worker's own OAuth client or account, limited to the tools its role needs | It can propose actions. It can never approve its own proposals |
| Human approver | A named person who signs in through Better Auth | Approvals carry that person's identity, bound to one exact payment, as the [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md#what-the-design-must-answer) sets out. The worker can never act as the approver |
| Human sponsor | The person or team accountable for the worker | Owns the worker's scopes and handles problems. The sponsor should not also approve its payments (separation of duties) |
| Organization (tenant) | The business the worker acts for | Every record and token carries the tenant, so a worker cannot reach another tenant's data |

Every audit entry names the worker, the tenant, the approver and the approval ID. So you can always answer: who did what, under whose authority? Key handling is in the [appendix](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md#worker-identity-in-detail).

### The runtime: four options

| Runtime | What Anthropic runs | Identity and control | Use when |
| --- | --- | --- | --- |
| Claude app (conversations, tasks and scheduled tasks) | Everything: the harness, the sandbox and the schedules | Runs as you. See the limits in [Scheduled tasks](scheduled-tasks.md) | Personal and team workers, and prototypes |
| Claude Tag (Slack, Team and Enterprise) | The harness and a sandbox for each Slack thread, in organization-level environments | Its own service accounts, set up by an Owner. Not a person. See below | Team workers that several people steer in a channel |
| Claude Managed Agents (API) | A hosted harness and cloud sandbox, or a sandbox you host. You define an agent (model, prompt, tools, MCP servers, skills) and start sessions from your backend | Your organization's API account. Sessions keep their state and their event history on the server. Scheduled execution is a listed use. In beta, with limits on compliance (meeting the legal and industry rules a company must follow), listed in the [appendix](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md#runtime-limits) | Production workers you do not want to host |
| Claude Agent SDK | Only the model. You run the harness | Fully yours: hosting, logging and compliance | Full control or strict compliance |

**Basis:** vendor-documented.[^managed-agents],[^cloud-scheduled-tasks]

### Claude Tag: a team worker with its own accounts

**[Vendor-documented]** Claude Tag is Anthropic's answer to a worker that does not appear as you. It puts Claude in your team's Slack channels, in public beta on Team and Enterprise plans. Anyone in a channel can hand it work. There, "Claude acts with its own service accounts, rather than as a specific user." Actions appear in each tool's audit log under those accounts. Credentials stay outside the sandbox, "so the model and the sandbox are not given the key."[^claude-tag-overview],[^claude-tag-identity],[^claude-tag-security] Its compliance limits are in the [appendix](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md#runtime-limits).

**[Vendor-documented]** One warning matters for money. A connector's credential "is shared by everyone in the channels where it applies," so anyone in those channels can ask Claude to act with it.[^claude-tag-security] **[Inferred]** So Claude Tag covers the "own identity" row and part of "audit". Its pages do not describe a business record or an approval check before a payment. For Brightline, the connector still checks the approval, whoever asked in Slack.

### Two paths

Personal and team workers can stay in the Claude app, connected to your MCP server. Business workers that handle money, customers or records move to Managed Agents or the Agent SDK, as the table says. The MCP server's logic, the database and the approval page carry over. The [appendix](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md#what-is-built-in-and-what-you-write) lists what each part gives you and what you write.

Build the business layer first. It holds everything that must be trustworthy: identity, records, approvals and audit. Then changing the runtime is an integration task. Codex also supports MCP servers, so the same layer can serve OpenAI workers too.

[^neon-better-auth]: As verified on November 9, 2026. Managed Better Auth is now an OAuth provider, with MCP support, Neon.
[^better-auth-mcp]: Better Auth MCP plugin, Better Auth.
[^managed-agents]: As verified on November 9, 2026. The overview covers the hosted harness and sandbox, sessions, events and beta status. Claude Managed Agents overview, Anthropic.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
[^claude-tag-overview]: As verified on November 9, 2026. Claude Tag was in public beta. Work with Claude Tag, Anthropic.
[^claude-tag-identity]: As verified on November 9, 2026. How agent identity works, Claude Tag docs, Anthropic.
[^claude-tag-security]: As verified on November 9, 2026. Security and data handling, Claude Tag docs, Anthropic.



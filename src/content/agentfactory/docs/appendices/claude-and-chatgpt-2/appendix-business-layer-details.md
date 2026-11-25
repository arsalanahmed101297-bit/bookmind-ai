# Appendix: business-layer details (/appendices/claude-and-chatgpt-2/appendix-business-layer-details)

---
type: Document
title: "Appendix: business-layer details"
description: "The details behind the business layer: OAuth tokens and how the MCP server checks them, the reference technology, worker identity, what you build yourself, and runtime limits."
status: stable
order: 904.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-20T22:29:24Z
chapter: "F00A"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-20
sources:
  - id: neon-better-auth
    title: "Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2, 2026, verified 2026-11-20)"
    resource: https://neon.com/blog/managed-better-auth-oauth-provider-mcp
  - id: better-auth-mcp
    title: "Better Auth MCP plugin (Better Auth, no page date shown, verified 2026-11-20)"
    resource: https://better-auth.com/docs/plugins/mcp
  - id: mcp-authorization
    title: "Authorization (Model Context Protocol specification, revision 2026-07-28, verified 2026-11-20)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization
  - id: neon-branching
    title: "Branching (Neon docs, updated October 9, 2026, verified 2026-11-20)"
    resource: https://neon.com/docs/introduction/branching
  - id: managed-agents
    title: "Claude Managed Agents overview (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: managed-agents-mcp
    title: "MCP connector, Claude Managed Agents (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://platform.claude.com/docs/en/managed-agents/mcp-connector
  - id: managed-agents-vaults
    title: "Authenticate with vaults, Claude Managed Agents (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://platform.claude.com/docs/en/managed-agents/vaults
  - id: mcp-client-registration
    title: "Client registration (Model Context Protocol specification, revision 2026-07-28, verified 2026-11-20)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/client-registration
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/routines
  - id: agent-sdk-mcp
    title: "Connect to external tools with MCP, Agent SDK (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/agent-sdk/mcp
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
  at: 2026-11-20T22:29:24Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### What this appendix is for

[From personal worker to business worker](../../claude-and-chatgpt-2/architecture/from-personal-worker-to-business-worker.md) explains, in plain words, what a business must build around Claude or ChatGPT. This appendix holds the technical details behind that page. Read it when you start to build the business layer.

### Terms

The tables below use many technical terms. Each one is explained here first, in the order the tables use it.

#### The products

These are the products the tables name. Two words come first. A **token** is a short-lived key that proves what a caller may do. An **OAuth provider** is the service that signs people in and issues those tokens.

- **MCP server**: your own program that gives Claude or ChatGPT tools. MCP stands for Model Context Protocol.
- **Postgres**: a widely used database.
- **Neon**: a company that runs Postgres databases in the cloud.
- **Better Auth**: software that handles sign-in for an app.
- **Managed Better Auth**: Better Auth that Neon runs for you, in the same place as your database.[^neon-better-auth] In Better Auth, the OAuth provider and MCP support are two separate add-ons. In Managed Better Auth, they are one.[^neon-better-auth]
- **Claude Managed Agents**: Anthropic's service that runs an agent for you, on computers Anthropic manages. You can also host the sandbox, or the whole service, on your own computers.[^managed-agents]
- **Artifact**: a live web page that Claude publishes to claude.ai. You open it in a browser.[^claude-code-artifacts]

#### Signing in and tokens

These terms say how a worker proves who it is.

- **Authorization server**: another name for the OAuth provider.
- **OAuth 2.1**: a standard way for an app to get permission to use a service, without sharing a password. The MCP specification requires the OAuth provider to use it.[^mcp-authorization]
- **Refresh**: getting a new token when the old one expires, without signing in again.
- **Signature**: a mark on every token that proves it is genuine.
- **Issuer**: the part of a token that names who created it.
- **Audience**: the part of a token that names which service it is for. The MCP specification says an MCP server must check that a token was made for it.[^mcp-authorization]
- **Scope**: one named permission inside a token. Each worker should get only the scopes its role needs.

#### How a client finds and joins the provider

A **client** is the app that asks for a token, such as Claude when it connects to your MCP server.

- **Discovery endpoints**: fixed web addresses where a client reads the provider's settings. So the client learns where to send a person to sign in.
- **JWKS**: a published list of the provider's public keys. A server uses it to check each token's signature.[^better-auth-mcp] The name stands for JSON Web Key Set.
- **Client registration**: the first step, in which a client introduces itself to the provider and gets a client ID.
- **Client ID Metadata Document**: a small public file that describes a client. Its web address is the client's ID, so the provider can find the client's details with no setup first.[^mcp-client-registration]
- **Dynamic registration**: a way to register in which the client sends its details to the provider and gets an ID back. The MCP specification now marks it as deprecated.[^mcp-authorization]
- **Consent page**: the page where a person approves what a client may do.

#### Code and data

These terms come from the software you write.

- **`createMcpAuth()`**: a function in Neon's `@neon/oauth` package. Your MCP server uses it to check every token that arrives.
- **Adapter**: a small piece of code that connects a library to one web framework. Express, Hono, Next.js and node:http are all ways to build web servers in JavaScript.
- **Idempotency**: a rule that makes retries safe. If the same request arrives twice, the action still happens only once.
- **Schema**: the design of the database tables.
- **Transaction**: a group of database changes that all succeed or all fail together.
- **Constraint**: a rule that the database itself enforces on its data.
- **Branch**: in Neon, a copy of a database that you can change without touching the original.

#### Who acts, and under what rules

- **Tenant**: one customer business, when one system serves several businesses.
- **Principal**: the identity named in the record of an action. Here, it is one worker.
- **Connector**: the link that lets Claude use an outside service, such as your MCP server.
- **Agent definition**: in Claude Managed Agents, the saved setup of an agent. It names the model, system prompt, tools, MCP servers and skills.[^managed-agents]
- **Session**: one running copy of a Managed Agents agent, doing one task.[^managed-agents]
- **Events**: the messages that pass between your app and a session, such as your turns, tool results and status updates.[^managed-agents]
- **Beta header**: a label that every request to a beta feature must carry. The SDK adds the Managed Agents one for you.[^managed-agents]
- **Vault**: in Claude Managed Agents, the set of credentials for one end user. A session points to a vault by its ID.[^managed-agents-vaults]
- **Scheduled task**: a saved job that Claude runs on a schedule. It holds a prompt and the connectors it may use.[^cloud-scheduled-tasks]
- **Cloud run** and **desktop task**: a cloud run happens on Anthropic's computers. A desktop task runs on your own machine, with access to your local files.[^cloud-scheduled-tasks]
- **Auto mode**: a setting in which a second model allows or blocks actions that would otherwise wait for your approval.[^cloud-scheduled-tasks]
- **Zero Data Retention**: an arrangement in which Anthropic does not keep your data after a request.
- **HIPAA**: a United States law that protects health information.

### The reference technology for each requirement

The five requirements come from [From personal worker to business worker](../../claude-and-chatgpt-2/architecture/from-personal-worker-to-business-worker.md). The Basis column says how sure each row is. "Vendor-documented" means the maker's own documents say it. "The design is inferred" means it is this book's design, worked out from those documents. "Design, not a product" means nothing is built in, so you build it.

| Requirement | Technology in this reference design | Basis |
| --- | --- | --- |
| Own identity | Better Auth is the OAuth 2.1 provider for your MCP server. Neon runs it for you, and it issues and refreshes tokens. In your server, `createMcpAuth()` checks three things in every token. They are its signature, issuer and audience | Vendor-documented[^neon-better-auth],[^better-auth-mcp] |
| Durable state | Postgres on Neon. A Neon branch lets you test a worker against a copy of the data | Vendor-documented[^neon-branching]. The design is inferred |
| Enforced authority | Your MCP server code | The design is inferred |
| Human approval | A web app where people sign in with Better Auth. A Claude artifact can display rows, but approval is not recorded there | The design is inferred |
| Audit and operations | The MCP server plus Postgres. Managed Agents also keeps each session's event history on the server | The event history is vendor-documented[^managed-agents] |

### Worker identity in detail

Credentials, the keys a worker signs in with, follow a life cycle. Each worker gets its own. They are short-lived and **rotated**, which means replaced on a schedule. They are **revoked**, which means canceled, when the role changes. The audit trail is in [From personal worker to business worker](../../claude-and-chatgpt-2/architecture/from-personal-worker-to-business-worker.md).

An OAuth client identifies an application, such as Claude. It does not say which running copy of a worker is acting. So a production server needs one more step before it allows any action. First, it links the signed-in client to one named worker identity. That link also records the worker's tenant and its authority, which means what the worker may do. Only then does the server allow an action.

Signing a connector in as a separate worker account is one way to create this worker principal. On its own, it is not a security architecture, meaning a complete design for keeping the system safe. The server must also keep proposing separate from approving. It must also record the tenant and the approver for every action.

### What is built in, and what you write

These tables were checked against the documentation available on November 20, 2026. Rows marked "not checked" need checking before you rely on them.

| Component | Built in (documented) | You write | Checked against |
| --- | --- | --- | --- |
| Better Auth on Neon: sign-in and tokens | An OAuth 2.1 authorization server. Token issuing and refreshing. The discovery endpoints and the JWKS | Sign-in and consent pages. Scopes for each worker. The approval page | Neon's announcement of November 2, 2026[^neon-better-auth] |
| Better Auth on Neon: client registration | Client ID Metadata Documents. In Neon's Console, you turn on the OAuth provider and type in your MCP server's web address. From then on, they work by default | If a client supports only dynamic registration, switch dynamic registration on | The same announcement |
| Token checks in the MCP server | `createMcpAuth()` in `@neon/oauth` checks each token's signature, issuer and audience. Adapters for Express, Hono, Next.js and node:http | The tools, the business rules, the approval checks, idempotency and audit logging | The same announcement |
| Approval page and payment rules | Nothing built in | The approval page and the payment rules from the [worked example](../../claude-and-chatgpt-2/architecture/worked-example-brightlines-payment-run-as-a-business-ai-worker.md). That means one exact payment per approval, an expiry, separate scopes and safe retries | Design, not a product |
| Postgres on Neon | The database and its branches | The schema, transactions and constraints | Neon's branching docs[^neon-branching] |

The current MCP specification calls dynamic registration deprecated. It keeps it only for authorization servers that do not support Client ID Metadata Documents.[^mcp-authorization] Better Auth says the same, and it never turns dynamic registration on by itself.[^better-auth-mcp]

| Runtime | How it reaches your MCP server | How approval is requested | Known limits | Status |
| --- | --- | --- | --- | --- |
| Claude app | Connectors on your account. A scheduled task includes all your connectors by default. You remove the ones it does not need | A cloud run starts in auto mode, unless auto mode is unavailable. It still stops for some permission prompts. A desktop task uses the permission mode you pick for it.[^desktop-scheduled-tasks] See [Scheduled tasks](../../claude-and-chatgpt-2/architecture/scheduled-tasks.md) | Runs as you. What it does through your connectors appears as you, with your accounts.[^cloud-scheduled-tasks] See the limits in [Scheduled tasks](../../claude-and-chatgpt-2/architecture/scheduled-tasks.md) | Connectors for each task are documented.[^cloud-scheduled-tasks] How a connector signs in to your MCP server was not checked, so test it yourself |
| Claude Managed Agents | MCP servers listed in the agent definition. Each session gets the credentials for those servers from a vault | Your app sends events into a running session and can interrupt it | Beta (header `managed-agents-2026-04-01`). Not eligible for HIPAA. Not eligible for Zero Data Retention, except self-hosted Claude Managed Agents, where you store the data yourself | Documented.[^managed-agents],[^managed-agents-mcp],[^managed-agents-vaults] |
| Claude Agent SDK | MCP servers set up in your code | Whatever your code implements | You host and operate it | MCP setup is documented.[^agent-sdk-mcp] The rest was not checked here |

### Preventing duplicate payments in detail

These details back step 4 of the [worked example](../../claude-and-chatgpt-2/architecture/worked-example-brightlines-payment-run-as-a-business-ai-worker.md). Each approved invoice gets one stable payment-intent ID under a unique constraint. The connector claims the intent in one database transaction.

- Each intent moves through clear states: claimed, submitted, then confirmed or failed.
- A claim has a lease, a time limit. An expired lease reopens only a *claimed* intent. A *submitted* intent is never retried until the accounting system has been checked for that payment.
- The connector passes the intent ID as an **idempotency key** if the API accepts one. That label makes a repeated request take effect only once.

### Runtime limits

Claude Managed Agents is in beta, and it is not eligible for Zero Data Retention or HIPAA coverage.[^managed-agents] There is one exception for Zero Data Retention. It applies to self-hosted Claude Managed Agents, where you run the whole service and store the data yourself. A self-hosted sandbox alone is not this exception.[^managed-agents]

Claude Tag has limits of its own, as [From personal worker to business worker](../../claude-and-chatgpt-2/architecture/from-personal-worker-to-business-worker.md) notes. It is not available with Zero Data Retention, customer-managed encryption or the HIPAA configuration.[^claude-tag-overview],[^claude-tag-identity],[^claude-tag-security] In a self-hosted environment, Claude Tag cannot use the connectors an admin adds.[^claude-tag-security]

[^neon-better-auth]: As verified on November 20, 2026. Managed Better Auth is now an OAuth provider, with MCP support, Neon.
[^better-auth-mcp]: As verified on November 20, 2026. Better Auth MCP plugin, Better Auth.
[^mcp-authorization]: As verified on November 20, 2026. Authorization, Model Context Protocol specification, revision 2026-07-28.
[^neon-branching]: As verified on November 20, 2026. Branching, Neon docs.
[^managed-agents]: As verified on November 20, 2026. The overview covers the hosted harness and sandbox, sessions, events, beta status and the self-hosted exception. Claude Managed Agents overview, Anthropic.
[^managed-agents-mcp]: As verified on November 20, 2026. The page says MCP servers go in the agent definition, and credentials come from a vault when a session starts. MCP connector, Claude Managed Agents, Anthropic.
[^managed-agents-vaults]: As verified on November 20, 2026. The page says a vault is "the collection of credentials associated with an end user". Authenticate with vaults, Claude Managed Agents, Anthropic.
[^mcp-client-registration]: As verified on November 20, 2026. The page says clients "use HTTPS URLs as client identifiers, where the URL points to a JSON document". Client registration, Model Context Protocol specification, revision 2026-07-28.
[^claude-code-artifacts]: As verified on November 20, 2026. Share session output as artifacts, Anthropic.
[^desktop-scheduled-tasks]: As verified on November 20, 2026. Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 20, 2026. Automate work with scheduled tasks, Anthropic.
[^agent-sdk-mcp]: As verified on November 20, 2026. Connect to external tools with MCP, Agent SDK, Anthropic.
[^claude-tag-overview]: As verified on November 9, 2026. Claude Tag was in public beta. Work with Claude Tag, Anthropic.
[^claude-tag-identity]: As verified on November 9, 2026. How agent identity works, Claude Tag docs, Anthropic.
[^claude-tag-security]: As verified on November 9, 2026. Security and data handling, Claude Tag docs, Anthropic.



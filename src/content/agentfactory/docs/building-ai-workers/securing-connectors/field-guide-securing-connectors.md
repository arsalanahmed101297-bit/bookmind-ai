# Field guide: securing connectors, product by product (/building-ai-workers/securing-connectors/field-guide-securing-connectors)

---
type: Document
title: "Field guide: securing connectors, product by product"
description: "Sign-in, databases, D1 and Better Auth from zero, the sign-in in detail, each coding agent's sign-in, deploying the sign-in server, the multi-tenant checklist, and today's tools in detail, checked November 2, 2026."
status: stable
order: 318.85
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:27Z
chapter: "18"
part: III
expert_status: builder-only
concepts: []
field_guide: E.securing-connectors
next_review: 2026-12-02
last_verified: 2026-11-02
sources:
  - id: claude-code-mcp
    title: "Connect Claude Code to tools via MCP (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/mcp
  - id: codex-mcp
    title: "Codex: MCP (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/extend/mcp?surface=cli
  - id: opencode-mcp
    title: "MCP servers (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/v2/docs/mcp-servers/
  - id: claude-mcp-connector
    title: "MCP connector (Anthropic, accessed 2026-11-02)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/mcp-connector
  - id: openai-connectors-mcp
    title: "Connectors and MCP servers (OpenAI, accessed 2026-11-02)"
    resource: https://developers.openai.com/api/docs/guides/tools-connectors-mcp
  - id: better-auth-changelog
    title: "Changelog (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/changelog
  - id: better-auth-mcp
    title: "MCP plugin (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/docs/plugins/mcp
  - id: better-auth-jwt
    title: "JWT plugin (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/docs/plugins/jwt
  - id: better-auth-organization
    title: "Organization plugin (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/docs/plugins/organization
  - id: better-auth-cimd
    title: "CIMD plugin (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/docs/plugins/cimd
  - id: better-auth-oauth-provider
    title: "OAuth provider (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/docs/plugins/oauth-provider
  - id: better-auth-1-5
    title: "Better Auth 1.5 (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/blog/1-5
  - id: d1-limits
    title: "D1 limits (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/d1/platform/limits/
  - id: workers-limits
    title: "Workers limits (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/workers/platform/limits/
  - id: service-bindings
    title: "Service bindings (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/
  - id: rate-limiting
    title: "Rate Limiting (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/
  - id: workers-oauth-provider
    title: "Workers OAuth Provider (Cloudflare, accessed 2026-11-02)"
    resource: https://github.com/cloudflare/workers-oauth-provider
  - id: rfc9449
    title: "RFC 9449, OAuth 2.0 Demonstrating Proof of Possession (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc9449
  - id: mcp-authorization
    title: "Authorization, MCP specification 2026-07-28 (MCP, accessed 2026-11-02)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization
  - id: mcp-discovery
    title: "Authorization server discovery, MCP specification 2026-07-28 (MCP, accessed 2026-11-02)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/authorization-server-discovery
  - id: mcp-client-registration
    title: "Client registration, MCP specification 2026-07-28 (MCP, accessed 2026-11-02)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/client-registration
  - id: mcp-security
    title: "Security considerations, MCP specification 2026-07-28 (MCP, accessed 2026-11-02)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/security-considerations
  - id: mcp-security-practices
    title: "Security best practices (MCP, accessed 2026-11-02)"
    resource: https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices
  - id: oauth21
    title: "OAuth 2.1, draft 17 (IETF, accessed 2026-11-02)"
    resource: https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/
  - id: cimd
    title: "OAuth Client ID Metadata Document, draft 02 (IETF, accessed 2026-11-02)"
    resource: https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/
  - id: rfc6750
    title: "RFC 6750, Bearer Token Usage (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc6750
  - id: rfc7517
    title: "RFC 7517, JSON Web Key (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc7517
  - id: rfc7519
    title: "RFC 7519, JSON Web Token (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc7519
  - id: rfc7636
    title: "RFC 7636, Proof Key for Code Exchange (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc7636
  - id: rfc7638
    title: "RFC 7638, JSON Web Key Thumbprint (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc7638
  - id: rfc8252
    title: "RFC 8252, OAuth 2.0 for Native Apps (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc8252
  - id: rfc8414
    title: "RFC 8414, OAuth 2.0 Authorization Server Metadata (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc8414
  - id: rfc8707
    title: "RFC 8707, Resource Indicators for OAuth 2.0 (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc8707
  - id: rfc9207
    title: "RFC 9207, OAuth 2.0 Authorization Server Issuer Identification (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc9207
  - id: rfc9728
    title: "RFC 9728, OAuth 2.0 Protected Resource Metadata (IETF, accessed 2026-11-02)"
    resource: https://www.rfc-editor.org/rfc/rfc9728
  - id: mcp-ts-sdk
    title: "TypeScript SDK (MCP, accessed 2026-11-02)"
    resource: https://github.com/modelcontextprotocol/typescript-sdk
  - id: mcp-py-sdk
    title: "Python SDK (MCP, accessed 2026-11-02)"
    resource: https://github.com/modelcontextprotocol/python-sdk
  - id: mcp-ext-auth
    title: "Authorization extensions (MCP, accessed 2026-11-02)"
    resource: https://github.com/modelcontextprotocol/ext-auth
  - id: better-auth-password
    title: "Email and password (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/docs/authentication/email-password
  - id: better-auth-sso
    title: "SSO plugin (Better Auth, accessed 2026-11-02)"
    resource: https://better-auth.com/docs/plugins/sso
  - id: d1-pricing
    title: "D1 pricing (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/d1/platform/pricing/
  - id: wrangler-d1
    title: "Wrangler D1 commands (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/workers/wrangler/commands/d1/
  - id: workers-pricing
    title: "Workers pricing (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/workers/platform/pricing/
  - id: workers-errors
    title: "Errors (Cloudflare, accessed 2026-11-02)"
    resource: https://developers.cloudflare.com/workers/observability/errors/
generated:
  at: 2026-11-21T00:02:27Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

The exact files, commands and messages that Concept [18.17](how-todays-tools-realize-it.md) summarizes and [Lab 18](lab.md) uses. Checked on each owner's own pages on November 2, 2026. The authors ran every step they could on their own computer, with scripts in place of a person at a browser. If a step does not match what you see, check the linked page and note the difference in `ports/ch18.md`.

**Who runs these commands:** a coding agent, in a Local session in Manual mode, as [Chapter 12](../agentic-coding/overview.md) taught, and you approve each one after reading it. The few steps only you can do are marked **by you**. You make accounts, sign in and approve consent in your browser, and type a test user's password into a sign-in page. You also create the deploy token, and decide when to merge and when to deploy production.

| Section | Use it when |
| --- | --- |
| [F0](#f0-keys-passwords-and-the-connector-you-start-with). Keys, passwords and the connector you start with | Before Task 0 |
| [F1](#f1-sign-in-from-zero). Sign-in from zero | Before Task 1. The words, and [Chapter 17](../connectors-and-mcp/overview.md)'s words mapped to OAuth's |
| [F2](#f2-relational-databases-and-d1-from-zero). Relational databases and D1 from zero | Before Task 2 |
| [F3](#f3-better-auth-from-zero). Better Auth from zero | Before Task 2 |
| [F4](#f4-the-sign-in-in-detail). The sign-in in detail | When a task or an error names an exact header, field or claim |
| [F5](#f5-claude-code) to [F7](#f7-opencode-version-2). Claude Code, Codex, OpenCode | Sitting 4, to sign each AI app in |
| [F8](#f8-deploying-the-sign-in-server). Deploying the sign-in server | Sitting 5 |
| [F9](#f9-the-multi-tenant-sign-in-checklist). The multi-tenant sign-in checklist | Task 12, and every review after |
| [F10](#f10-how-todays-tools-realize-it-in-detail). How today's tools realize it, in detail | When an AI app does something [18.17](how-todays-tools-realize-it.md) does not explain |

## F0. Keys, passwords and the connector you start with

**The connector you start with.** The lab zip holds Brightline's connector as [Chapter 17](../connectors-and-mcp/lab.md) left it. In one page:

- *What it is.* A read-only MCP server with four tools: `find_vendor`, `list_open_invoices` (five at a time, with a sealed page handle), `get_purchase_order` and `search_policy`. It is written twice, in TypeScript (`servers/ap-ts/`) and Python (`py/brightline_ap/`), from one contract, `docs/connector-spec.md`. The Python version's code and tests live in `py/brightline_ap/` and `py/tests/`. `servers/ap-py/` holds only its Cloudflare wrapper: the Worker's settings and a short entry file that runs that code as a Worker (written, but not yet run by the authors).
- *Its front door.* `servers/ap-ts/src/http.ts` and `py/brightline_ap/mcp_server.py` check the `Origin` header (which website a request came from, [Chapter 17](../connectors-and-mcp/securing-a-remote-server.md)'s guard against web pages calling the connector). Then they check a shared access key and pass the request on to the tools. This chapter replaces the key check. The zip's `npm run keys` no longer makes that shared key, so if you start this connector by hand before Task 6, it answers 503, "not ready". No task starts it before then.
- *Its data.* Brightline's invented CSV files in `data/` and three policies in `docs/policies/`, packed with the code.
- *Its checks.* Unit tests for each version, and `scripts/conformance.ts`, which starts two copies of each version and proves they give the same answers.
- *Online.* `servers/ap-ts/wrangler.jsonc` defines production and staging, and `.github/workflows/deploy.yml` deploys staging on every merge to `main` and production when a person runs it.

**Every key in this chapter.** "Key" means several different things in this chapter, so here is each one, once.

| Key | What it is | Who holds it |
| --- | --- | --- |
| Access key | Chapter 17's shared secret. **Removed in this chapter** | Nobody, once Tasks 6, 7, 17 and 18 have removed it |
| Handle key | Seals page handles (17.4) | Only the connector |
| Signing key (private) | Makes the signature on every token | Only the sign-in server |
| Public keys | Check signatures. Published for anyone | Everyone, including the connector |
| Admin key (`AUTH_ADMIN_KEY`) | Lets your scripts add and remove companies | Your scripts, and the sign-in server, which checks it |
| Previous handle key (`AP_HANDLE_KEY_PREVIOUS`) | The old handle key, kept for a short time while a new one takes over, so open handles still work ([F8](#f8-deploying-the-sign-in-server)) | Only the connector |
| `BETTER_AUTH_SECRET` | Protects the sign-in server's sessions and encrypts its private signing keys | Only the sign-in server |
| Test signing key (`AP_TEST_SIGNING_KEY`) | Seals test tokens on your computer. Never deployed ([F8](#f8-deploying-the-sign-in-server)) | Your tests |
| CI client secret | The automated checks' password for getting tokens with no person (explained in [F1](#f1-sign-in-from-zero) and [F8](#f8-deploying-the-sign-in-server)) | GitHub, as a secret |
| Deploy token | Lets the workflow upload code to Cloudflare. Not a sign-in token (Chapter 17) | GitHub, as a secret |
| Primary key, foreign key | Not secrets at all: columns in a database table ([18.8](tables-rows-and-relationships.md)) | |

**Ideas from earlier chapters this lab uses.** You need no earlier lab, so here is each, in a sentence.

| Idea | What it is |
| --- | --- |
| Local session, Plan mode, Manual mode | Ways to run a coding agent in its desktop app ([Chapter 12](../agentic-coding/overview.md)). Local: on your computer. Plan: it proposes and changes nothing. Manual: it asks before every command and every file change, and you approve each |
| The five-step routine | Every task: a fresh session, a plan, Manual mode, evidence, a commit and one line in `ports/ch18.md` ([Lab 18](lab.md), "Before you start") |
| Four-Part Brief | A prompt in four labeled parts: Outcome, Context, Format, Constraints ([Chapter 5](../../managing-ai-workers/the-four-part-brief/overview.md)). Used before risky work such as deploying |
| `AGENTS.md`, `CLAUDE.md` | The repository's written rules for coding agents. They read them at the start of every session |
| `.claude/settings.json`, `opencode.jsonc` rules | Settings that make an agent ask, or refuse, before certain commands, even if a session is left in a looser mode |
| `REVIEW.md` | The repository's checklist for reviewing a change |
| `NOTES.md`, `ports/ch18.md` | Your own notes: predictions and findings, and one line per task saying what was proved, with which agent |
| Acceptance checks A1 to A8 | Eight real questions with the answers Ana expects, in `docs/acceptance-prompts.md`. A1 looks up Hocking Valley Pallets, A5 finds INV-8303 over its purchase order, A6 finds INV-8310 has no purchase order |
| The conformance suite | `scripts/conformance.ts`: it starts two copies of each version of the connector and checks they all give the same answers. `0 failed` means it passed |
| CI | The automated checks that run on GitHub for every pull request, and the deploy workflow ([Chapter 15](../code-review/checks-that-block.md)) |
| Repository, commit, branch, tag, diff | The project folder with its full history, kept by git ([Chapter 15](../code-review/git-through-the-agent.md)). A commit is one saved change. A branch is a separate line of changes. A tag is a name for one commit, such as `ch18`. A diff shows exactly what a change adds and removes |
| Pull request, merge | A proposed change on GitHub that others review before it joins `main`, the main line. Merging joins it |
| Wrangler | Cloudflare's command-line tool, which runs Workers on your computer and puts them online ([Chapter 17](../connectors-and-mcp/field-guide-connectors.md)) |
| Binding | A named link from a Worker to something Cloudflare runs for it, such as a database. The Worker's code reaches it through `env`, the Worker's list of named connections |
| Log | The record a server writes as it works, one line per request |
| SDK | Software development kit: a code **library** for building something. The lab uses the official MCP SDKs, one for TypeScript and one for Python (Chapter 17) |
| Agent Plugins core | The shared part of [Chapter 16](../skills-and-plugins/what-a-plugin-bundles.md)'s plugin format, which every AI app reads. Its `mcp.json` lists the plugin's MCP servers |
| AI review | A coding agent, in a fresh session that has not seen the build, reads a pull request against `REVIEW.md` and reports what it finds, before a person reviews it (Chapter 17) |
| The 503 rule | If a required setting is missing, the connector answers 503, "not ready", and runs no tool (Chapter 17) |

**What `npm run keys` makes now.** `scripts/make-keys.ts` still makes every secret into files git ignores, prints only file names, never overwrites a file, and refuses to write anywhere git would track. In Chapter 18 it no longer makes `AP_MCP_TOKEN`, the shared key. It makes:

| Secret | File | Who uses it |
| --- | --- | --- |
| `AP_HANDLE_KEY` | `servers/ap-ts/.dev.vars`, `servers/ap-py/.dev.vars` | The connector, to seal page handles |
| `BETTER_AUTH_SECRET` | `servers/auth/.dev.vars` | The sign-in server, to protect sessions and encrypt its private signing keys |
| `AUTH_ADMIN_KEY` | `servers/auth/.dev.vars`, `.secrets/admin.local.env` | The tenant scripts, to call the sign-in server's admin routes |
| `AP_TEST_SIGNING_KEY` | `.secrets/test-signing.local.env` | Tests only, to sign test tokens. Never deployed ([F8](#f8-deploying-the-sign-in-server)) |
| Test users' passwords | Made later, by `npm run tenant:add` (Task 8), into `.secrets/test-users.<environment>.env` | You, typed into a browser sign-in page |

The two connector `.dev.vars` files also get three local settings, which are not secrets: `AP_ISSUER`, `AP_RESOURCE` and `AP_TRUST_TEST_ISSUER=1`. So `npm start` works at once.

**How the test key reaches the connector.** `AGENTS.md` lets code read no key file. So the npm scripts pass `.secrets/test-signing.local.env` to the program when it starts. `npm start` and `npm test` in `servers/ap-ts` (from the top folder, `npm run test:servers`) and the root `npm run conformance` do this with Node's `--env-file-if-exists`. `npm run test:py` does it with `uv run --env-file`, only when the file exists. The root `npm test` runs only the data-loading tests in `tests/` and does not load the file. Under `wrangler dev` the test key is absent, so the connector trusts only the real sign-in server. A test token names the same issuer as a real one. The connector tells it apart by its `kid`, the short ID naming the key that sealed a token ([18.15](the-sign-in-server-you-run.md)). A test token's `kid` is the test key's thumbprint, a short fingerprint computed from the key itself (RFC 7638).

With `-- --deploy`, it also makes each environment's own copies. The connector's go in `.secrets/staging.env` and `.secrets/production.env`. The sign-in server's two secrets go in `.secrets/auth.staging.env` and `.secrets/auth.production.env`. The admin key again goes in `.secrets/admin.staging.env` and `.secrets/admin.production.env`. Each Worker gets only its own file, because sending secrets sends a whole file. The connector's files now hold only `AP_HANDLE_KEY`, and `--deploy` no longer writes `.secrets/github.env`. So `npm run conformance:staging` and `:production` need the CI client's ID and secret (`CONFORMANCE_CLIENT_ID` and `CONFORMANCE_CLIENT_SECRET`, read from `.secrets/ci.<environment>.env`, [F8](#f8-deploying-the-sign-in-server)), and stop with that message otherwise. GitHub keeps the same two with the environment added to the name, such as `CONFORMANCE_CLIENT_ID_STAGING`, from `.secrets/github.env`. (The CI client's secret is made later, by `npm run client:ci`, [F8](#f8-deploying-the-sign-in-server).) Every value is new. No Lab 17 key is reused.

**A test user's password is typed only into a browser.** When a task says "sign in as Ana", open `.secrets/test-users.local.env` in a plain text editor (TextEdit or Notepad, never a word processor). Find the line that starts with `TEST_USER_PASSWORD_ANA_BRIGHTLINE_EXAMPLE=`. Each person's line is named after their email address. Copy the value into the sign-in page in your browser. Never paste it into a chat. Files whose names start with a dot are hidden: on a Mac, press Cmd+Shift+. (period) in Finder. On Windows, choose *View*, *Show*, *Hidden items* in File Explorer.

**No key in a terminal this time.** In Chapter 17 you set `AP_MCP_TOKEN` in a terminal so your AI apps could send it. That step is gone. AI apps now sign in through your browser and keep their own tokens. If an old terminal still has `AP_MCP_TOKEN` set, close it.

## F1. Sign-in from zero

**What sign-in is for, in one paragraph.** Every system that holds something private must answer two questions about each request: who is this, and what may they do? For a person at a website, the answer has long been a password. For a program acting for a person, such as an AI app, the person should not hand over their password. So the program gets a token instead: a short-lived pass that says who the person is and what the program may do for them. OAuth is the open standard for getting that token safely. Everything in this chapter is a detail of that one idea.

**The words.**

| Word | Plain meaning |
| --- | --- |
| Hash | A one-way scramble. The same input always gives the same output, and the output cannot be turned back into the input. Passwords are stored only as hashes |
| Session | A short-lived proof that you signed in to one website, so you do not type your password again on every page |
| Cookie | A small value a website asks your browser to keep and send back on each visit to that site. Sessions live in cookies |
| Return address | Where the browser is sent back to after sign-in. The standards call it the redirect address (`redirect_uri`) |
| Go-elsewhere reply | A reply that sends the browser, or a program, on to another address. The standards call it a redirect |
| Consent | The screen where you approve what an app may do for you, and in Brightline's case, pick the company |
| Token | A value that proves something to whoever checks it. A sign-in token proves who you are, for which company and what you may do |
| Claim | One fact inside a token, such as `tenant: org_brightline` |
| Signature | A value made with a private key that proves the token was made by its issuer and not changed. Anyone with the matching public key can check it |

**Words you will see in output.** Agents and AI apps show these. You need to recognize them, not use them.

| Word | Meaning |
| --- | --- |
| `Bearer` | "Whoever carries this token may use it." Written before the token in the `Authorization` header |
| Endpoint | One address on a server that does one job, such as `/api/auth/jwks`, or the sign-in server's token endpoint, where codes are swapped for tokens. Also called a route |
| `state` | A random value the app sends with the sign-in and checks when the browser comes back, so it knows the reply belongs to the sign-in it started |
| Grant | A way of getting a token. The lab uses three: a code ([18.2](sign-in-in-one-picture.md)), a refresh token ([18.6](a-token-made-for-one-door.md)), and client credentials (below) |
| Client secret | A password that belongs to an app itself, not to a person. Apps on your own computer cannot keep one safe, so coding agents sign in without one. Only the automated checks' app has one ([F8](#f8-deploying-the-sign-in-server)) |
| Client credentials grant | Getting a token with no person at all, using an app's own client ID and client secret. Used only by the automated checks ([F8](#f8-deploying-the-sign-in-server)) |
| `invalid_grant` | The sign-in server's answer when a code or refresh token cannot be used: expired, already used, or the person was removed |
| `offline_access` | A scope that asks for a refresh token. An app that does not ask for it gets none. Connectors should not ask for it themselves. The AI app decides |
| `iat`, `azp` | Token claims: when it was made, and which app it was given to |
| `S256` | The name of the one-way scramble PKCE uses ([18.4](two-guards-for-the-code.md)) |
| Loopback | An address that means "this computer", such as `127.0.0.1`. `localhost` means the same computer, but in a return address the two do not match each other ([F4](#f4-the-sign-in-in-detail), step 4) |
| `POST` | The kind of web request that sends information, like submitting a form (Chapter 17) |
| Decoded | A token turned back into readable labels and values. Showing a decoded token's claims is safe. Showing the token itself is not |
| `none` | In a sign-in server's document, it means "apps with no client secret are welcome", which coding agents need |
| Encrypt | Scramble so that someone with the right secret can unscramble it. Unlike a hash, it can be turned back |
| Types | A program library's own description of its settings, which an agent can read |
| Runtime | The place that runs a program: a Worker, or Node on an ordinary server |

**Chapter 17's words mapped to OAuth's.**

| Chapter 17 said | OAuth says | Notes |
| --- | --- | --- |
| Sign-in token | Access token | This book keeps "sign-in token" |
| AI app | Client | The whole AI app |
| Connector, server | Resource server | It only checks tokens |
| (none) | Authorization server | The sign-in server, new in this chapter |
| Access key | (none) | Removed in this chapter |

**Why the browser?** The browser is the one place where you can see which website you are typing your password into, check its address, and use your password manager. An AI app that asked for your password directly would see it, and so could anything that compromised the app. That is why every AI app in this chapter opens your browser to sign in.

## F2. Relational databases and D1 from zero

**Meet D1.** Before the details, what it is and why the lab uses it.

- *What it is.* D1 is a database service run by Cloudflare, the company whose Workers ran Brightline's connector in Chapter 17. You ask for a database with one command, and Cloudflare stores it, keeps copies, and lets your Workers read and write it. You never install or look after database software yourself.
- *Why a database at all.* The sign-in server must remember people, companies, memberships and approvals, and change them while it runs. Files packed with the code, as in Chapter 17, cannot change. A database can, safely, even when many copies of the sign-in server write at the same moment ([18.8](tables-rows-and-relationships.md)).
- *Why D1 for this lab.* It sits next to the Workers you already use, it needs no separate account, and its free plan is far larger than Brightline's sign-in server needs. Any other relational database would work. [Chapter 19](../business-data-and-retrieval/why-a-database-now.md) uses a different one, Postgres, for business data.
- *What it costs.* Nothing for this lab, on the free plan (limits at the end of this section).

**The ideas.** Concept [18.8](tables-rows-and-relationships.md) teaches tables, rows, columns, primary and foreign keys, join tables and the three query shapes, with the sign-in server's own `user`, `organization` and `member` tables. Read it first.

**The sign-in server's tables.** Better Auth creates them. The ones you will read:

| Table | One row per | Points at |
| --- | --- | --- |
| `user` | person | |
| `account` | way a person signs in. Holds the password hash | `user` |
| `session` | signed-in browser | `user` |
| `organization` | company (tenant) | |
| `member` | membership, with `role` | `user`, `organization` |
| `verification` | short-lived check, such as a reset link | |
| `invitation` | invitation to join a company | `organization`, `user` |
| `oauthClient` | registered AI app | `user` (`userId`, the person who registered it, if any) |
| `oauthResource` | connector address tokens can be made for | |
| `oauthClientResource` | which connectors a registered app may get tokens for | `oauthClient`, `oauthResource` |
| `oauthConsent` | approval: person, app, company, scopes | `user`, `oauthClient` |
| `oauthAccessToken` | record of a sign-in token | `user`, `oauthClient`, `session`, `oauthRefreshToken` |
| `oauthRefreshToken` | refresh token, stored as a hash | `user`, `oauthClient`, `session` |
| `oauthClientAssertion` | signed proof an app sent, kept so it cannot be used twice | |
| `jwks` | signing key pair, private half encrypted | |

In `oauthConsent` and `oauthRefreshToken`, the company is kept in a plain text column, `referenceId`, which holds the company's id but does not point at `organization` as a foreign key. The lab adds one column of its own, `organization.tokensStoppedAt` ([F3](#f3-better-auth-from-zero)). These are the names Better Auth 1.7.15 creates. Your agent lists them, with their columns, in Task 2.

**Why the sign-in tables must be in third normal form.** *About five minutes. Read [18.8](tables-rows-and-relationships.md) first.*

A normal form is a rule for laying out tables so that each fact is stored in exactly one place. There are three basic ones, and each builds on the one before. A database that follows all three is "in third normal form", or **3NF**. In a sign-in database this matters more than anywhere else. A fact stored twice can drift, and here a fact that drifts decides who may act for which company.

Here are the four tables that decide that, cut down to the columns this section needs. The real ones have more columns (the table above), but the same shape.

```sql
-- Simplified. One fact, one place.
CREATE TABLE user (
  id    TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE organization (
  id   TEXT PRIMARY KEY,
  name TEXT NOT NULL              -- the company's name lives here, and only here
);

CREATE TABLE member (
  userId         TEXT NOT NULL REFERENCES user(id),
  organizationId TEXT NOT NULL REFERENCES organization(id),
  role           TEXT NOT NULL,
  PRIMARY KEY (userId, organizationId)  -- one row per person per company
);

CREATE TABLE session (
  id                   TEXT PRIMARY KEY,
  userId               TEXT NOT NULL REFERENCES user(id),
  activeOrganizationId TEXT       -- the company picked at sign-in
);
```

`member` has a **composite primary key**: two columns that together name one row. Neither the person alone nor the company alone is enough. The three rules, in Brightline's terms:

- **First normal form: one value per cell.** Every column holds a single value. Priya works for two companies, so she has two rows in `member`, never one row saying "Brightline, Cedar Ridge".
- **Second normal form: every fact depends on the whole key.** A role belongs to the pair, the person *and* the company. Priya's role in Brightline and her role in Cedar Ridge are two separate facts, and they can differ. So `role` sits in `member`, keyed by both columns.
- **Third normal form: no fact depends on another non-key column.** A company's name depends on the company, not on the membership. So the name lives only in `organization`, and `member` holds just the company's `id`. To show a name, a query joins the two tables ([18.8](tables-rows-and-relationships.md), query 2).

**The mistake this prevents.** Suppose a builder "saves a join" by copying the company's name into every membership:

**`member_bad`**, the mistake

| userId | organizationId | organizationName |
| --- | --- | --- |
| u_ana | org_brightline | Brightline |
| u_grace | org_brightline | Brightline |
| u_priya | org_brightline | Brightline Supply Co. |

Brightline renamed itself, and the change reached one row but not the others. Now one company has two names. Ana's company picker shows one name and Priya's shows another, and nobody can tell which is right. This is an **update anomaly**: a change that has to be made in many places and is bound to miss one. In the 3NF layout, a rename changes one row in `organization`, and every picker shows the new name at once.

**Two honest notes about the real tables.**

- In Better Auth's real `member` table, each membership has its own `id` column as the primary key. The database itself does not refuse a second row for the same person and company. The lab's admin route checks first and refuses with `409 ... is already in org_brightline`. The composite key above would make the database refuse it too.
- The company that goes into a token is also stored as plain text with no foreign key: `referenceId` on `oauthConsent` and `oauthRefreshToken`, and `session.activeOrganizationId`. Each is a copy of a company's `id`, not its name. It is safe because membership is checked again from `member` on every token ([18.10](where-the-tenant-comes-from.md)). A few tables, such as `oauthClient`, also keep short lists in one text column (an app's return addresses, its scopes).

**Takeaway.** Auth DB = normalize hard. Easy to understand on D1. Each table is small, and one read-only query shows you every row.

[Chapter 19](../business-data-and-retrieval/overview.md) keeps Brightline's business data in Postgres, run by a service called Neon, and searches policies by meaning, a method called RAG (retrieval-augmented generation), with a Postgres add-on called pgvector.

Neon + pgvector RAG will be covered in [next chapter](../business-data-and-retrieval/third-normal-form-in-detail.md) where we will intentionally break 3NF for speed.

**How a Worker reaches its database.** Each D1 database is a SQLite database, a small kind of relational database also used inside many phones and apps. A Worker reaches it through a binding, Chapter 17's word for a named link from a Worker to a platform resource, in the Worker's `env`. The binding is set in `wrangler.jsonc`:

```jsonc
"d1_databases": [
  { "binding": "DB", "database_name": "brightline-auth", "database_id": "<made by Wrangler>",
    "migrations_dir": "migrations" }
]
```

In plain words: inside the Worker, `env.DB` is the database called `brightline-auth`, and its **migrations** are the files in `migrations/`. Staging needs its own lines here, because a setting in production's section does not carry over to staging. (A `.jsonc` file is JSON that may contain notes for people.)

**Local and remote.** On your computer, Wrangler keeps a local copy of each database in a folder under `.wrangler/`. Online, the remote database lives at Cloudflare. Every D1 command takes `--local` or `--remote`, and the lab's scripts always say which, because a command aimed at the wrong one is the classic mistake.

**How an agent shows you rows, read-only.** Ask in plain words. The agent runs, for example:

```bash
npx wrangler d1 execute brightline-auth --local --command "SELECT id, name FROM organization;"
```

From Task 18 on, `.claude/settings.json` and `opencode.jsonc` make every `wrangler d1 execute` and `wrangler d1 migrations apply` ask first, and deny `wrangler d1 execute` with `--remote` against production, so nobody changes production rows by hand. Before that, Manual mode makes the agent ask before every command anyway. Changes go through the tenant scripts (Task 8) or migrations.

**Migrations.** Tables must exist before anything is stored, and they change as the software grows. A **migration** is one numbered step that creates or changes tables, kept as a file in the repository and reviewed like code. Each database records which migrations it has applied, and applies the rest in order, so staging and production get the same tables by the same steps. A migration that removes a column removes its data, so it gets the same care as a deploy. Migrations change tables, not people: test rows and companies go in through the tenant scripts, never through a migration.

Better Auth's command-line tool writes the SQL that creates its tables (`npx auth@1.7.15 generate`, [F3](#f3-better-auth-from-zero)), and Wrangler applies it as a numbered migration (`wrangler d1 migrations apply brightline-auth --local`, later `--remote` per environment). Wrangler records what it applied in each database, and takes a backup before applying remotely.

*Free plan.* It gives 10 databases, 500 MB each and 5 GB in all. It also gives 5 million rows read and 100,000 rows written a day, reset at midnight UTC, and 50 queries per Worker request. The lab uses two databases (staging and production), a few hundred rows, and a few dozen queries a day.

## F3. Better Auth from zero

**Meet Better Auth.** Before the details, what it is and why the lab uses it.

- *The problem it solves.* A sign-in server has a lot to get right: storing password hashes, sessions, consent screens, issuing and sealing tokens, and publishing public keys. It must also replace refresh tokens on every use, and follow the MCP authorization specification exactly. Writing all that yourself is slow and easy to get wrong.
- *What it is.* Better Auth is an open-source sign-in **library** for TypeScript: ready-made code that does those jobs. A library is code you add to your own program, not a service with its own website and account. You add it to your sign-in server program, switch on the parts you need, and give it a database to keep its records in. You can read every line it runs. The lab pins version 1.7.15, the newest stable release on November 2, 2026.
- *Not a service you sign up for.* Some companies run sign-in for you on their own computers, for a monthly fee. Better Auth is different: Brightline's sign-in server is your Worker, with Better Auth inside it, and its records in your D1 database. Nobody else holds your people's password hashes.
- *Why this lab uses it.* It is free and open source, it runs on Workers, and it already supports the MCP authorization specification and companies with roles. [F10](#f10-how-todays-tools-realize-it-in-detail) names two alternatives.

**The auth instance and its plugins.** One file, `servers/auth/src/auth.ts`, makes the auth instance: Better Auth's settings, the database, and its plugins, which here means Better Auth's own add-ons. Each plugin is switched on with one line, and its settings are named options. You will never type these setting names. Recognize them in a diff. The lab's instance, in plain words:

- **Email and password,** for sign-in.
- **`jwt()`,** which makes signing keys, signs tokens, and publishes the public keys at `/api/auth/jwks`.
- **`organization()`,** which adds companies, memberships and the roles owner, admin and member, plus Brightline's own role, auditor.
- **`mcp()`,** the plugin that makes it a sign-in server for MCP. What it does, in plain words:
  - Turns the Worker into a sign-in server for the two connector addresses, with Brightline's scopes, 10-minute sign-in tokens, a sign-in page and a consent page. The addresses are read from the `MCP_RESOURCE` (TypeScript) and `MCP_RESOURCE_PY` (Python) settings and passed as `resources` and `clientRegistrationDefaultResources`, so each environment sets its own.
  - Replaces refresh tokens on every use, with no grace period (`refreshTokenReuseInterval: 0`).
  - Shows the lab's company picker after sign-in (setting name: `postLogin.page`, set to `/consent`). The picker lists the person's memberships and saves the pick as the session's active company, through the `organization()` plugin's set-active call. That call itself refuses a company the person is not a member of.
  - Remembers that company with the consent (setting name: `postLogin.consentReferenceId`). This setting receives only the person, the session and the scopes, not the consent form, which is why the pick must live on the session. It checks the membership again and returns the session's active company. Better Auth stores it as `referenceId` on the consent, the one-time code and the refresh token.
  - Writes that company into each token as `tenant` (setting name: `customAccessTokenClaims`). It runs for every sign-in token, at the code swap, at every refresh and for client credentials. The lab's version checks the membership, the role's scopes and whether the company still takes tokens, and refuses with `invalid_grant` if any fails. This is the check that makes a removed person's next refresh fail. Better Auth itself does not check membership at refresh.
  - It cannot change `scope`, which Better Auth reserves. So the role's scopes are applied on the consent page, which may approve fewer scopes than were asked for, and enforced in `customAccessTokenClaims` by refusing.
  - The authors' build confirmed that both settings pass through `mcp()` in 1.7.15: every option except `resource` goes on to Better Auth's OAuth provider unchanged.
- **`cimd()`,** which accepts Client ID Metadata Documents, with the profile `mcp-2026-07-28`.
- **One extra column, `organization.tokensStoppedAt`,** added through `organization()`'s `additionalFields` (with `input: false`, so no form can set it) and a second migration. Offboarding ([18.14](a-companys-life.md)) writes the time into it. The picker, `consentReferenceId` and `customAccessTokenClaims` each refuse a company that has it.

**Signed tokens, in Better Auth terms.** The three steps from [18.6](a-token-made-for-one-door.md), with the names you will see:

1. Better Auth's `jwt()` plugin signs each sign-in token with its private key, an Ed25519 key (algorithm `EdDSA`). The key lives in the `jwks` table, and Better Auth keeps its private half encrypted by default.
2. The connector fetches the public key from `/api/auth/jwks` and checks the signature ([F4](#f4-the-sign-in-in-detail), step 9). The authors' build checked that this address shows only public halves: in each key, the private part, `d`, is absent.
3. The connector then checks `exp`, `aud`, `iss`, `scope` and `tenant`, as in [18.6](a-token-made-for-one-door.md).

The AI app receives only the token. Better Auth's private key never leaves the sign-in server.

**Make the auth instance on every request.** On Workers, build the auth instance inside the request, not once for the whole Worker. In the authors' build, a cached instance made every later request hang. One consequence: `cimd()`'s in-memory cache and fetch budgets last only one request, so an app's document is fetched again on every sign-in.

Dynamic client registration ([18.5](who-is-the-app.md)) stays off. The lab never turns it on.

**Fetching an address a stranger chose.** In step 2 of [18.5](who-is-the-app.md), the sign-in server fetches whatever address the app gave. A stranger could give an address inside Brightline's own private network: the company's internal computers, which the internet cannot reach but the sign-in server can. An internal admin page would then be visited with the sign-in server's own access. This attack is called **SSRF**, server-side request forgery: tricking a server into fetching an address inside its own private network that the attacker cannot reach directly. The internet turns a name such as `app.example` into the number of an actual computer, and that answer can change from one moment to the next. So a careful sign-in server follows three rules:

1. **Never fetch a private address.** Refuse any address in the ranges set aside for private networks, "this computer", and other special uses.
2. **Check the actual computer it connects to, not just the name.** Check the computer's number, and connect to that same number. Looking the name up twice lets an attacker switch it to point somewhere else between the check and the fetch.
3. **Never follow a "go elsewhere" reply,** because the new address might be private.

**The fetcher for Client ID Metadata Documents.** `cimd()` needs a function that fetches an app's document by these rules. Better Auth ships one only for Node, another place JavaScript programs run (JavaScript is the language TypeScript is built on). Better Auth says other places that run code, Workers included, must supply their own. On a Worker, the fetcher cannot fully guarantee rule 2, so the lab adds an approved list. The lab's fetcher, written by Claude Code in Task 5, does what a Worker can: `https` only, no redirects, a 5-second limit and a small size limit. Through `isMetadataDocumentUrlAllowed`, it also takes documents only from an **allowlist**, a fixed list of known hosts. It starts with one host, `chatgpt.com`, where OpenAI publishes the documents for its coding agent, Codex. The lab pre-registers Claude Code and OpenCode, so they never meet the list. To try an app's own document later, add its maker's host in a reviewed change. Say this plainly in reviews: an allowlist is stricter, not equivalent.

Three details the authors' build found. Better Auth calls the fetcher with `redirect: "error"`, which a Worker's `fetch` rejects with `TypeError: Invalid redirect value`, so a plain passthrough fails every document. The lab's fetcher uses `redirect: "manual"` and returns any "go elsewhere" reply as it is, and Better Auth then refuses it (`Metadata document fetch returned HTTP 302`). Better Auth already applies its own 5-second limit and 5 KB size limit, and the lab's fetcher repeats both. A `client_id` that is not `https` is never treated as a document (`client not found`), and a host off the list is refused before any fetch (`client_id URL is not permitted by the server's fetch policy`).

**The consent page's `form-action`.** A real browser found one more. A page's `Content-Security-Policy` can limit where its forms may send the browser, with `form-action`. Browsers built on Chromium, such as Chrome and Edge, also apply that limit to the go-elsewhere reply that follows the form. So `form-action 'self'` blocks the trip back to the AI app, and choosing *Allow* seems to do nothing. The browser's console names it: `violates the following Content Security Policy directive: "form-action 'self'"`. Scripted sign-ins never see this, because a script is not a browser. The lab's pages allow `'self'`, `http://127.0.0.1:*`, `http://localhost:*` and `https:`.

**Its routes.** Under `/api/auth`:

| Route | What it is |
| --- | --- |
| `/.well-known/oauth-authorization-server/api/auth` | The sign-in server's document ([18.3](finding-the-door.md)). It also answers at `/api/auth/.well-known/oauth-authorization-server`. The root address, `/.well-known/oauth-authorization-server`, gives 404 |
| `/.well-known/oauth-protected-resource/mcp` | A copy of the TypeScript connector's document, which `mcp()` serves. Each connector still serves its own |
| `/api/auth/jwks` | The public keys |
| `/api/auth/oauth2/authorize` | Where the browser is sent to sign in and consent |
| `/api/auth/oauth2/token` | Where the app swaps a code, or a refresh token, for tokens |
| `/sign-in`, `/consent` | The lab's own two pages, with the company picker on the second |
| `/admin/*` | The lab's admin routes for the tenant scripts, refused without `AUTH_ADMIN_KEY` |

Better Auth serves the `/.well-known/` documents itself, through `auth.handler`, so the Worker only has to pass `/.well-known/*` and `/api/auth/*` to it.

**Its admin calls.** Only the tenant scripts and the CI setup call the lab's `/admin/*` routes, with `AUTH_ADMIN_KEY`. In 1.7.15, Better Auth's own server calls for creating an app client, changing a role and removing a member need a signed-in session. In that version, creating an app client cannot take a chosen `client_id`, and creating a company cannot take a fixed id. So the admin routes write those rows through Better Auth's database adapter, with `forceAllowId` for the company's fixed id. A pre-registered client also needs a row in `oauthClientResource` for each connector, both here, because Better Auth limits each client to its listed connectors by default (`enforcePerClientResources`). The route that adds a member answers `person: "created"` or `"existing"`, so `tenant:add` makes and saves a password only for a new person. Removing a member or changing a role through these routes also deletes that person's consent records and refresh tokens for the company.

**Its command-line tool.** `npx auth@1.7.15 generate` writes the SQL for the tables the plugins need. It cannot read a D1 binding: pointed at `src/auth.ts`, it prints `Only kysely adapter is supported for migrations`. So the lab keeps a second file, `src/auth.cli.ts`, used only by this tool, which builds the same auth instance on an empty in-memory `node:sqlite` database. The command is `npx auth@1.7.15 generate --config src/auth.cli.ts --yes --output <file>`, and the SQL then goes into a file made by `wrangler d1 migrations create brightline-auth <name>`. The tool also prints `Expected string[] but got TEXT` warnings, which are harmless.

After adding a plugin or a column, an empty database would make the tool write every table again. To get only the change, run it against a database with the earlier migrations already applied (the build's `npm run generate:next`), and turn the result into a new migration.

**Going further: sign in with your company (SSO).** *Not built or run in this lab.*

SSO means **single sign-on**. It lets people sign in to your app with the login their company already gives them, such as Microsoft Entra ID or Okta, instead of making a separate password for your app. The company's login service is called an **identity provider**. In Better Auth, SSO is a plugin, `@better-auth/sso` (version 1.7.15, like the rest of the lab). It speaks two standards that identity providers use: **OpenID Connect (OIDC)**, which is built on OAuth, and **SAML 2.0**, an older standard many large companies still use.

Suppose Cedar Ridge Supply wants its staff to sign in to Brightline's sign-in server with their Cedar Ridge accounts:

1. A Cedar Ridge employee clicks *Sign in with your company*.
2. The sign-in server sends them to Cedar Ridge's login service.
3. Cedar Ridge checks who they are, including any **multifactor authentication**: a second proof, such as a code on their phone.
4. They come back to Brightline's sign-in server, signed in. If they are already signed in with their company that day, they may not need to type anything again.

The important difference: **SSO proves who the person is. Brightline still decides what that person may do.**

[Chapter 20](../mcp-apps/employees-through-their-company.md) shows a newer route, an MCP extension called Enterprise-Managed Authorization. There, the company's identity provider also decides who may connect to the connector at all, and the person sees no consent screen. Brightline's connector still checks every token as in this chapter.

**SSO and the connector's sign-in work together.** They handle different parts of the same flow:

| Part | Its job |
| --- | --- |
| Better Auth's SSO plugin | Signs the person in with their company account |
| Better Auth's MCP plugin, `mcp()` | Makes the sign-in token that lets the AI app act for that person ([18.6](a-token-made-for-one-door.md)) |
| The connector | Checks the token, and enforces the scopes for each tool and the company ([18.7](permission-per-tool.md), [18.11](one-order-slip-per-request.md)) |

So a Cedar Ridge employee connecting Codex would go through the same steps as in [18.2](sign-in-in-one-picture.md):

1. Codex connects to the connector and gets a 401 ([18.3](finding-the-door.md)).
2. Codex starts a sign-in with PKCE ([18.4](two-guards-for-the-code.md)), opening the browser.
3. Brightline's sign-in page offers *Sign in with your company*, which is the SSO step above.
4. The person picks the company ([18.10](where-the-tenant-comes-from.md)) and approves the permissions asked for, such as reading AP data ([18.7](permission-per-tool.md)).
5. The sign-in server makes a token for the connector's address only ([18.6](a-token-made-for-one-door.md)).
6. Codex sends that token with each call. The connector checks it, its scopes and its company, as in Tasks 6 to 9.

**Never forward the company's own token to the connector.** Cedar Ridge's login service gives the sign-in server its own proof that the person signed in. That proof was made for the sign-in server, not for the connector, so passing it on would break the audience rule from [18.6](a-token-made-for-one-door.md). The sign-in server always makes a separate token, made for the connector's address.

**Two things to decide before you add it.**

- **Who becomes a member, and with which role.** When an identity provider is linked to a company, the SSO plugin adds each person who signs in through it to that company automatically. It gives them a role you set (`defaultRole`, or a `getRole` function). Pick `member` or `auditor`, never `owner`, and keep the membership check in `customAccessTokenClaims` (Task 5) as it is.
- **One provider of sign-in only.** `mcp()` already contains Better Auth's OAuth provider, so do not also add `oauthProvider()` to the same auth instance. Add `sso()` beside `mcp()`, `jwt()` and `organization()`.

## F4. The sign-in in detail

*Optional. Read it only when an error or a task names a header, field or claim, except its last part, How the connector does it, which Sitting 2 uses.*

For the reader who wants the wire. Addresses are the lab's local ones: the connector at `http://127.0.0.1:8717/mcp`, the sign-in server at `http://127.0.0.1:8719`. The field names are the standards'. The sign-in server's messages (steps 3, 7, 8 and 11) are the ones the authors' build of Task 5 produced on November 2, 2026, shortened. Step 4 is an app's own document, shown as an example. The connector's own messages (steps 1, 2, 9 and 10) are the ones the authors' build of Tasks 6 and 7 produced the same day, from both versions of the connector. Compare everything with what Task 1 shows you, and note any difference in `ports/ch18.md`.

**1. The 401.** A request with no token:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer error="invalid_token", error_description="Sign in to use the Brightline AP connector.", scope="ap:read", resource_metadata="http://127.0.0.1:8717/.well-known/oauth-protected-resource/mcp"
```

The SDK (software development kit) is the official MCP code library the connector is built with (How the connector does it, below). It writes `error` and `error_description` first, even when there is no token. The wording is `docs/auth-spec.md`'s, and `scope` names `ap:read` only, because that is what every call needs (How the connector does it, below).

**2. Protected resource metadata** (RFC 9728), from the connector:

```json
{ "resource": "http://127.0.0.1:8717/mcp",
  "authorization_servers": ["http://127.0.0.1:8719/api/auth"],
  "scopes_supported": ["ap:read", "ap:vendors.read"],
  "resource_name": "Brightline AP connector" }
```

That is the TypeScript connector's document as served. The Python SDK's also has `"bearer_methods_supported": ["header"]`, an optional field. `scopes_supported` holds no `offline_access`, as the specification asks.

**3. Authorization server metadata** (RFC 8414), from the issuer's well-known address. The fields that matter:

```json
{ "issuer": "http://127.0.0.1:8719/api/auth",
  "authorization_endpoint": "http://127.0.0.1:8719/api/auth/oauth2/authorize",
  "token_endpoint": "http://127.0.0.1:8719/api/auth/oauth2/token",
  "jwks_uri": "http://127.0.0.1:8719/api/auth/jwks",
  "code_challenge_methods_supported": ["S256"],
  "token_endpoint_auth_methods_supported": ["none", "client_secret_basic", "client_secret_post", "private_key_jwt"],
  "scopes_supported": ["ap:read", "ap:vendors.read", "offline_access"],
  "client_id_metadata_document_supported": true,
  "authorization_response_iss_parameter_supported": true }
```

The real document also lists addresses for checking and canceling tokens (`introspection_endpoint`, `revocation_endpoint`), and fields for **DPoP** and for signing out across apps, which the lab does not use. It has no `registration_endpoint`, because dynamic client registration is off. `offline_access` appears here, in the sign-in server's document, and not in the connector's.

The `issuer` must equal the address the app built the well-known address from, exactly, or the app must not use the document. With no `code_challenge_methods_supported`, an MCP app must refuse to continue.

**4. A Client ID Metadata Document,** as an app publishes it:

```json
{ "client_id": "https://app.example/oauth/client.json",
  "client_name": "Example AI App",
  "redirect_uris": ["http://127.0.0.1/callback"],
  "token_endpoint_auth_method": "none",
  "grant_types": ["authorization_code", "refresh_token"] }
```

`client_id` must equal the document's own address. The redirect in the request must match one listed, with any port on a loopback address (RFC 8252, section 7.3). Only the port may differ. With `http://127.0.0.1/callback` listed, the authors' build accepted ports 1, 43123 and 65535, and refused `http://localhost:43123/callback`, `http://[::1]:43123/callback`, a trailing slash and an added `?x=1`, with `invalid_redirect`. The same holds for a pre-registered client.

**5. The authorization request**, the browser's first stop: `client_id`, `redirect_uri`, `response_type=code`, `scope`, `state`, `code_challenge` with `code_challenge_method=S256` (PKCE), and `resource=http://127.0.0.1:8717/mcp` (RFC 8707). The app records the issuer it expects.

**6. The response**, back to the app's loopback address: `code`, `state` and `iss`. The app compares `iss` with the issuer it recorded, as a plain string, before anything else. If the sign-in server advertised `iss` support and `iss` is missing, the app rejects the response.

**7. The token request**, a `POST` to the token endpoint: `grant_type=authorization_code`, `code`, `redirect_uri`, `code_verifier` (the PKCE secret) and `resource` again. The reply holds `access_token`, `token_type: "Bearer"`, `expires_in: 600` and `scope`, and, if the app asked for `offline_access`, `refresh_token`. An app that asks only for the 401's `ap:read` gets no refresh token.

**8. A sign-in token's body,** decoded (the lab never prints a real token, only its decoded claims). Its label section is `{ "typ": "at+jwt", "alg": "EdDSA", "kid": "..." }`.

```json
{ "tenant": "org_brightline",
  "sub": "<Ana's user id, a random string>",
  "aud": "http://127.0.0.1:8717/mcp",
  "client_id": "https://app.example/oauth/client.json",
  "azp": "https://app.example/oauth/client.json",
  "scope": "ap:read ap:vendors.read offline_access",
  "sid": "<the sign-in session's id>",
  "iss": "http://127.0.0.1:8719/api/auth",
  "iat": 1795500000, "exp": 1795500600,
  "jti": "<the token's own id>" }
```

`aud` is a single string. `sub` is the random id Better Auth gave Ana when she was created, not a name you chose. `scope` includes `offline_access` only when the app asked for it.

A CI client's token ([F8](#f8-deploying-the-sign-in-server)), made by client credentials, has no `sid`, and its `sub` is the client, not a person:

```json
{ "tenant": "org_conformance",
  "sub": "<the CI client, a random string>",
  "aud": "http://127.0.0.1:8717/mcp",
  "client_id": "ci_...", "azp": "ci_...",
  "scope": "ap:read ap:vendors.read",
  "iss": "http://127.0.0.1:8719/api/auth",
  "iat": 1793609965, "exp": 1793610565,
  "jti": "<the token's own id>" }
```

**9. Every MCP request** carries `Authorization: Bearer <token>`, never in the address. The connector checks, in order: the `Origin` (Chapter 17), the signature against the public keys, `iss`, `aud`, `exp`, the `tenant` claim's presence, then the tool's scope.

**10. The 403 for a missing scope:**

```http
HTTP/1.1 403 Forbidden
WWW-Authenticate: Bearer error="insufficient_scope", error_description="find_vendor needs ap:read ap:vendors.read. Your role in Brightline does not include it.", scope="ap:read ap:vendors.read", resource_metadata="http://127.0.0.1:8717/.well-known/oauth-protected-resource/mcp"
```

Every call needs `ap:read`, and `find_vendor` also needs `ap:vendors.read`, so the `scope` lists both: every scope this call needs. The app adds them to what it already has and asks again.

**11. Refresh,** only for an app that asked for `offline_access`. `grant_type=refresh_token`, `refresh_token`, `resource`. The reply has a new sign-in token and a new refresh token. The old refresh token is now retired. Using it again gets `invalid_grant`, and cancels every refresh token that app holds for the person, for every company, not only this chain. The next refresh with the replacement then gets `invalid_grant` with `session not found`.

**The standards and their versions.** OAuth 2.1 is an IETF draft. The MCP specification cites draft 13, and the current draft on November 2, 2026, is 17. Client ID Metadata Documents are an IETF draft too: MCP cites version 00, and the current one is 02. The others are published RFCs: 6750 (sending a token in a header), 7517 (public key sets), 7519 (JWT) and 7636 (PKCE). Next come 8252 (apps on your own computer), 8414 (the sign-in server's document) and 8707 (naming the connector). The last are 9207 (the issuer check), 9449 (DPoP) and 9728 (the connector's document). Where drafts and the MCP specification differ, this book follows the MCP specification.

**How the connector does it.** The official MCP TypeScript SDK, version 2.4.0, has helpers for exactly this front door, and they work with a plain `fetch` function:

- `oauthMetadataResponse` serves the connector's document. It requires `oauthMetadata`, a whole sign-in server document, and would also serve that at the connector's own `/.well-known/oauth-authorization-server`. A connector should not publish a copy of the sign-in server's document ([18.3](finding-the-door.md)). So pass only the sign-in server's issuer as `oauthMetadata`, which is all the connector's document uses, with `scopesSupported: ["ap:read", "ap:vendors.read"]`, and answer `/.well-known/oauth-authorization-server` with 404 before it.
- `requireBearerAuth` reads the bearer token and answers with a 401. Give it `requiredScopes: ["ap:read"]`, which is why the 401 names `ap:read`. Its own descriptions are `Missing Authorization header`, `Token has expired` and so on, so the build rebuilds every 401 with `bearerAuthChallengeResponse` to get `docs/auth-spec.md`'s wording.
- `requireScopes` builds a per-tool scope check, attached with `registerTool`'s `scopeChallenge` option: `requireScopes("ap:read", "ap:vendors.read")` for `find_vendor`. Its 403 says only `Insufficient scope`, so a small wrapper adds the auth-spec wording.

The token check itself is a small function you supply, the `OAuthTokenVerifier`, which the lab writes with the `jose` library, version 6.2.15. It fetches the public keys, checks signature, issuer, audience and expiry, and returns the user, scopes and tenant. The SDK refuses a token whose result has no `expiresAt`.

The Python SDK, `mcp` 2.3.0, is different in three ways:

- *No per-tool scope check.* Its `AuthSettings.required_scopes` applies to every request. Setting both scopes there would lock auditors out. So set `required_scopes=["ap:read"]`, and write a small gate after the SDK's bearer check that answers 403 `insufficient_scope` exactly as the TypeScript one does. The SDK's document lists `required_scopes` as `scopes_supported`, so replace its route with `create_protected_resource_routes(..., scopes_supported=["ap:read", "ap:vendors.read"])`.
- *The audience.* Set `validate_token_resource=True` and fill `AccessToken.resource` from the token's `aud`: the SDK then refuses a token made for another connector even if your verifier forgets. Its default, `None`, gives a warning and behaves as off (the SDK says 3.0 will turn it on). It compares loosely and ignores a trailing slash, so your verifier must still check the audience exactly, with PyJWT's `audience=` and `strict_aud`.
- *Expiry.* The SDK accepts a result with no `expires_at`, so the verifier must require `exp` itself: `options={"require": ["exp", "iss", "aud", "sub"]}`.

The verifier is a `TokenVerifier` written with PyJWT 2.15.1 and `cryptography`. `PyJWKClient` fetches the public keys with blocking calls, so in the async server run it with `asyncio.to_thread`. A tool reads the checked token from `ctx.request_context.request.scope["user"].access_token`. In a Python Worker online, the key fetch must go through the `AUTH` binding instead, which the authors' build has not written or run.

Both libraries fetch the keys again for an unknown `kid` at most once per 30 seconds, and anyway on a timer: jose every 10 minutes, PyJWT every 5.

## F5. Claude Code

**What has run in a real browser.** On November 2, 2026, two sign-ins ran in a real browser on one computer. One was Task 1, through the MCP Inspector 2.13.0. The other was Task 13's first sign-in, from Claude Code 2.1.316, with A1, A5 and A6 answered through it. That run found the `form-action` problem in [F3](#f3-better-auth-from-zero).

**If a sign-in screen or message differs** from [F5](#f5-claude-code) to [F7](#f7-opencode-version-2), trust what you see, and note it in `ports/ch18.md`.

*Sign in.* Add the connector by its address, with nothing else:

```bash
claude mcp add --transport http apts http://127.0.0.1:8717/mcp
```

Then, in Claude Code, type `/mcp`, choose `apts`, and choose to authenticate. Your browser opens at the sign-in server. Sign in as the test user ([F0](#f0-keys-passwords-and-the-connector-you-start-with)), pick the company, approve. Or run `claude mcp login apts` in a terminal (`--no-browser` prints the address instead of opening it). A server from `.mcp.json` must be approved first, so start `claude` in the folder once and approve it.

*Sign out.* `claude mcp logout apts`.

*Scopes.* It asks for the scope in the 401 first. To ask for more up front, set `oauth.scopes` in the server's entry, as one space-separated string. It adds `offline_access` when the sign-in server lists it, to get a refresh token.

*On a 401,* it refreshes the token, reconnects and retries once. If the refresh is refused, it tells you to sign in again from `/mcp`. *On a 403* `insufficient_scope`, it shows that the server needs more permissions.

*Note on `localhost`.* Claude Code's pre-registered return address uses `localhost`. It means the same computer as `127.0.0.1`, but the sign-in server compares the two as different addresses, and only the port may vary. So the client in the sign-in server must list exactly the address Claude Code sends, `localhost` included, which `npm run client:add` does.

*Pre-registration*, the lab's default for Claude Code: `claude mcp add --transport http apts http://127.0.0.1:8717/mcp --client-id <id> --callback-port 8790`. In `.mcp.json` the same entry reads `"apts": { "type": "http", "url": "http://127.0.0.1:8717/mcp", "oauth": { "clientId": "<id>", "callbackPort": 8790, "scopes": "ap:read ap:vendors.read" } }`. The sign-in server's client then lists `http://localhost:8790/callback` as its redirect. Make the client with the lab's `npm run client:add` script. Never use `--client-secret` for a lab client.

*From your own program.* The Messages API's MCP connector takes a token you already have, as `authorization_token`, with the beta header `mcp-client-2025-11-20`. A newer header, `mcp-client-2026-09-15`, adds pinning the tool list and works only on Anthropic's own platform, not through cloud providers that resell Claude.

*Two notes.* `claude -p` and the Agent SDK cannot complete a browser sign-in, so sign in interactively first. A `headersHelper` that sets `Authorization` wins over sign-in. Remove any left from Chapter 17.

## F6. Codex

*Sign in.* In `.codex/config.toml`:

```toml
[mcp_servers.apts]
url = "http://127.0.0.1:8717/mcp"
```

No `bearer_token_env_var`: that was the shared key. Then run `codex mcp login apts`. Codex uses a Client ID Metadata Document when the sign-in server advertises one, lists `none` for token authentication, and accepts its loopback callback on any port. All three are true of the lab's sign-in server ([F4](#f4-the-sign-in-in-detail) step 3). `--oauth-client-registration cimd` forces that route. `--scopes` asks for scopes for this sign-in.

Each version of the connector has its own address in the sign-in server, the TypeScript one 8717 and the Python one 8718, so an AI app can sign in to either. A token names the one it was made for.

*Issuer.* Codex checks `iss` before exchanging the code, and rejects a missing `iss` when the server advertises support.

*Pre-registration*, if needed: `codex mcp add apts --url http://127.0.0.1:8717/mcp --oauth-client-id <id>`. Do not use `--oauth-client-secret`: Codex saves it in `config.toml`.

## F7. OpenCode version 2

*Sign in.* In `opencode.jsonc`, under `mcp.servers`, remove `"oauth": false` and the `headers` from Chapter 17:

```jsonc
"apts": { "type": "remote", "url": "http://127.0.0.1:8717/mcp", "protocol": "2026-07-28" }
```

Sign-in is on by default for remote servers. Run `opencode mcp auth apts`, or type `/mcps` in OpenCode and authorize. `opencode mcp logout apts` signs out.

*Registration.* OpenCode uses a configured `client_id` first, then a Client ID Metadata Document if the server supports one and you have not set `redirect_uri`. Otherwise it falls back to the older route, which Brightline's sign-in server does not offer. The lab pre-registers OpenCode (Task 15): make a client with `npm run client:add -- --client-id brightline-opencode --name "OpenCode (lab)" --redirect http://127.0.0.1/callback`, then the entry reads `"apts": { "type": "remote", "url": "http://127.0.0.1:8717/mcp", "protocol": "2026-07-28", "oauth": { "client_id": "brightline-opencode", "scope": "ap:read ap:vendors.read", "redirect_uri": "http://127.0.0.1:8792/callback" } }`. OpenCode's page names loopback return addresses with the path `/callback`. Setting `redirect_uri` fixes the port OpenCode listens on, 8792, and turns the document route off. The client's registered address, `http://127.0.0.1/callback`, names no port, and a loopback return address may use any port ([F4](#f4-the-sign-in-in-detail)).

*Scopes.* `"oauth": { "scope": "ap:read ap:vendors.read" }` to ask for more up front.

## F8. Deploying the sign-in server

**If a deploy message differs** from these steps, trust what you see. When both Workers run in Cloudflare's local runtime on one computer, the staging suite ends `27 checks passed, 0 failed`.

*Order.* The sign-in server goes online before the connector, in each environment, because the connector's settings name it.

**Your first deploy, in order.**

1. **By you,** if you have none: a Cloudflare account on the free plan, and a `workers.dev` subdomain. That is the free web address your Workers live under, which you choose in the Cloudflare dashboard under *Workers & Pages*.
2. *Wrangler signs in.* An agent runs `npx wrangler login`, and **you** approve it in the browser.
3. *The databases.* An agent runs `npx wrangler d1 create brightline-auth-staging` and `npx wrangler d1 create brightline-auth`, and writes each `database_id` into `servers/auth/wrangler.jsonc`, staging under `env.staging` and production under `env.production` (whose Worker is named `brightline-auth`). A `database_id` is not secret. The file's top level stays the sign-in server on your computer, which `wrangler dev` reads, so every deploy, migration and secret names its environment: `deploy:auth` runs `wrangler deploy --env production`. The connector keeps Chapter 17's shape, with production at the top level.
4. *Migrations,* per environment: `npm run migrate:auth:staging` (it runs `npx wrangler d1 migrations apply brightline-auth-staging --remote --env staging`). Production's is `npm run migrate:auth:production` (`--env production`), and it runs only through the workflow. The ask rule shows you each one first.
5. *Secrets,* per environment: `npm run secrets:auth:staging` sends `BETTER_AUTH_SECRET` and `AUTH_ADMIN_KEY` from `.secrets/auth.staging.env` with `wrangler secret bulk`, printing none. Never send `.secrets/staging.env` to the sign-in server: `wrangler secret bulk` sends every line of a file, and that one holds the connector's keys.
6. *Deploy the sign-in server:* `npm run deploy:auth:staging`. Its settings in `wrangler.jsonc` include `MCP_RESOURCE` and `MCP_RESOURCE_PY`, each connector's staging address ending in `/mcp`. An app's token names, as its audience, the one it asked for. Each environment sets its own. Its address is `https://brightline-auth-staging.<your-subdomain>.workers.dev`.
7. *Point the connector at it.* In `servers/ap-ts/wrangler.jsonc`, under `env.staging`, set `AP_ISSUER` (the sign-in server's issuer) and `AP_RESOURCE` (the connector's own staging address ending in `/mcp`). Add a **service binding**, `AUTH`, to `brightline-auth-staging`, through which the connector fetches the public keys. A service binding is a direct link between two Workers in one account, so the connector never fetches the sign-in server through its public address. On your computer `wrangler dev` creates the binding too, with no sign-in Worker behind it, so the connector uses the binding only when `AP_ISSUER` is not a loopback address. These are settings, not secrets.
8. *Send the connector's handle key, then deploy it:* `npm run secrets:staging`, then `npm run deploy:staging`, in `servers/ap-ts`. (Secrets first, as for the sign-in server, so the connector never runs without them.)
9. *Onboard the tenants in staging* with the same script as on your computer: `npm run tenant:add -- --env staging ...`. Staging test users' passwords go into `.secrets/test-users.staging.env`.
10. *Check it:* `npm run client:ci -- --env staging` once, then `npm run conformance:staging`. Done only at `0 failed`. It reads the staging addresses from `.secrets/staging.urls.env` (`CONFORMANCE_URLS=ts=<the connector's address>`, `AP_ISSUER` and `AUTH_URL`, which are not secrets) and the CI client from `.secrets/ci.staging.env`.

Production repeats steps 4 to 10 with production's names (step 3 already made both databases). Its steps fall into two groups. *By hand,* from your computer, by the agent with your approval: step 5 (the sign-in server's secrets) and step 7 (the connector's settings). Also by hand is the first half of step 8, sending the handle key with `npm run secrets:production`. *Through the workflow only,* started by **you**: step 4 (the migrations), step 6 (the sign-in server's deploy) and the second half of step 8 (the connector's deploy).

**The workflow's own secrets.** The workflow deploys with two Cloudflare secrets in GitHub. `CLOUDFLARE_API_TOKEN`, the deploy token: an agent sends it with `gh secret set CLOUDFLARE_API_TOKEN < .secrets/cloudflare-token`. `CLOUDFLARE_ACCOUNT_ID`: **you** find it in the Cloudflare dashboard, under *Workers & Pages*, *Account Details*, *Account ID*. Then set it in your own terminal with `gh secret set CLOUDFLARE_ACCOUNT_ID`, pasting it when asked, never into the chat.

**The test-only signing key is never deployed.** Locally, tests sign tokens with `AP_TEST_SIGNING_KEY`, and the connector trusts it only when `AP_TRUST_TEST_ISSUER=1`. `npm run check:deploy`, at the repository's root, fails if that setting, or that key, appears in any environment in either `wrangler.jsonc`, or if an environment's sign-in server and connector do not name each other. Then it dry-runs both Workers in both environments. It lists every placeholder still waiting for a real value, such as `your-subdomain`, and each deploy script refuses to run while one is left. CI runs `check:deploy` on every pull request.

**Tokens for CI.** A browser sign-in cannot run in CI. So a pre-registered CI client gets tokens with no person, through OAuth's client credentials grant, which Better Auth allows only with scopes an admin assigned (`ap:read` and `ap:vendors.read`). The client belongs to a fourth, invented company, **Conformance Test Co.**, so its tokens carry that tenant. The connector serves it only a copy of the sample rows, marked as test data. The deployed suite never reads a real company's data. Four of its checks prove the CI client cannot get a Brightline or Cedar Ridge token. Each token says `org_conformance`, even when the request names another company, and the client cannot start a browser sign-in. `npm run client:ci -- --env <environment>` makes the client's ID and secret into `.secrets/github.env`, for GitHub, and `.secrets/ci.<environment>.env`, for `npm run conformance:<environment>`. An agent sends the first with `gh secret set -f .secrets/github.env`. The authors' build confirmed that such a token can carry `tenant`. For a token with no person, `customAccessTokenClaims` receives no user and no company, only the client's own `metadata`. So the admin route that creates the CI client writes `{"tenant": "org_conformance"}` into its metadata, and the claims function reads `tenant` from there. The client also needs its client-credentials scopes assigned by the admin route, or Better Auth refuses it. The CI client must always send `resource`: without it, the reply is a plain random token that is not a JWT, and the connector refuses it.

**Replacing the handle key.** The connector's handle key, which seals page handles (17.4), is replaced the same way as a signing key: for a short time the connector holds two. It seals new handles with the new key, and still opens handles sealed with the old one (`AP_HANDLE_KEY_PREVIOUS`). After 15 minutes, how long a handle lasts, the old one is removed. `npm run keys -- --rotate-handle <environment>` makes the new key and keeps the old one as `AP_HANDLE_KEY_PREVIOUS`, in that environment's file, printing neither. Send the file with `npm run secrets:<environment>`. After 15 minutes, `npm run keys -- --drop-previous <environment>` removes it from the file, and an agent runs `npx wrangler secret delete AP_HANDLE_KEY_PREVIOUS`, because sending a file never deletes a secret.

**Replacing the signing key.** Better Auth 1.7.15 has no command for it: it replaces an expired key only at the next token. So the lab adds an admin route, called by `npm run signing-key:rotate`, that makes the new key at once. `scheduled`: the old key stops sealing now and stays published for one more day. `leaked`: the old keys are deleted. The new key is published from the moment it first seals. So a connector that fetched the public keys in the last 30 seconds refuses the first new tokens for up to 30 seconds. After a leak, the connectors still hold the old key for up to 10 minutes, so redeploy them to drop it at once. If `BETTER_AUTH_SECRET` may have leaked too, replace it and rotate again with `leaked`, because it encrypts the private keys.

**Rollback with a database.** Rolling a Worker back to an earlier version does not roll its database back. So a migration must work with both the old and the new code: add columns and tables first, deploy, and remove old ones only in a later migration. If a migration itself is wrong, Wrangler's backup from step 4 is the way back, with a person deciding.

**What the free plan gives, and what Brightline uses.** Workers: 100,000 requests a day and 10 ms of processor time per request, with flexibility for a Worker that "infrequently runs over". D1: [F2](#f2-relational-databases-and-d1-from-zero). Sign-in hashes a password, which is the heaviest step. Wrangler on your computer shows only the total time of a request (`POST /sign-in 302 Found (172ms)`), not processor time. The authors measured the hash itself in Cloudflare's local runtime: about 80 ms of processor time per sign-in, roughly 8 times the free plan's 10 ms. **Not yet run online:** whether Cloudflare's flexibility absorbs that. It needs a person to deploy the sign-in server and sign in through it. If the deployed sign-in server reports Error 1102, "Worker exceeded resource limits", during sign-in, note it in `ports/ch18.md`. Whether sign-in fits the free plan is a known open question for this lab. The conformance suite signs its test people in with passwords too, so its sign-in rows will fail as well. Record the failing rows by name and treat them as blocked by the free plan. If sign-in fails every time online, record it, mark Task 18's online sign-in as blocked by the free plan, and carry on: it counts as done for this lab. The Rate Limiting binding goes in `servers/ap-ts/wrangler.jsonc` as `"ratelimits": [{ "name": "RATE_COMPANY", "namespace_id": "1801", "simple": { "limit": 600, "period": 60 } }, …]`, one entry per limit, repeated under `env.staging` (`period` may be only 10 or 60). Its own call, `limit({ key })`, answers `{ success }`, which is exactly the lab's `RateLimiter` shape, so the binding is the limiter. `wrangler deploy --dry-run` accepts it. It is not listed in the free plan's features. **Not yet run online:** whether a free-plan deploy accepts it. It needs a person to deploy. If the deploy refuses it, follow Task 9b's fallback.

## F9. The multi-tenant sign-in checklist

Work through this for every change to the connector or the sign-in server, as a reviewer. Reviewers' words: tenant means company, user means person.

**The tenant's source.**

- [ ] The tenant is read in one place only: the token check.
- [ ] No header, tool input, address or model text is read as a tenant anywhere. Search for `tenant`, `company`, `org` and `X-` in the change.
- [ ] A tool input naming a company is refused or ignored, never used. TypeScript's strict input schemas refuse it, and the Python SDK silently ignores it. Either passes.
- [ ] A token with no tenant claim gets 401.

**The request context.**

- [ ] The token check makes one locked order slip (request context), and every tool takes it.
- [ ] No module-level variable or cache holds a tenant, a user or anything stored under them. The public keys, and the rate limiter's counters (numbers kept per company and person, inside the limiter or Cloudflare's binding, never data), are the only shared state.

**What carries the tenant.**

- [ ] Page handles hold the tenant and user, and are refused on any difference.
- [ ] Rate limits are counted per company, with a per-person limit inside.
- [ ] Every tool call writes one log line, with tenant, user, app, tool, outcome and duration, and no token, input or result. A refusal before the token is checked has no tenant or user to name.
- [ ] A tenant with no data connected gets the exact "No AP data is connected" error from every tool, never another company's data.

**The token.**

- [ ] Signature, `iss`, `aud` (this connector exactly) and `exp` are checked on every request, in both versions.
- [ ] No token is passed on to any other service.
- [ ] Each tool's scope is checked, and a 403 names every scope the call needs.

**The sign-in server.**

- [ ] The company picker lists only the person's memberships, and the token is refused for a non-member even when the request is crafted.
- [ ] Membership, the role's scopes and whether the company still takes tokens are checked again on refresh, by the sign-in server's own claims function (`customAccessTokenClaims`). Better Auth does not do this by itself. A refused refresh leaves the refresh token in place, so removing a person must also delete their refresh tokens. After a role change, a refresh that asks only for the scopes the new role allows succeeds.
- [ ] Refresh tokens are replaced on every use, with no grace period.
- [ ] The test-only signing key cannot be on in any deployed environment.

**The tests.**

- [ ] The sign-in matrix ([18.13](proving-the-sign-in-keeps-companies-apart.md)) passes against both versions.
- [ ] Each planted bug fails at least one check.

**What [Chapter 19](../business-data-and-retrieval/field-guide-business-data-and-retrieval.md#f7-the-multi-tenant-data-checklist)'s checklist adds:** the database refuses another tenant's rows on its own, errors never reveal another tenant, and a tenant's data can be exported and deleted.

## F10. How today's tools realize it, in detail

The product-by-product detail behind [18.17](how-todays-tools-realize-it.md), checked on each maker's own pages on November 2, 2026, against MCP revision 2026-07-28.

**What kind of evidence this is.** Each statement below is the product's own documented behavior, read on its first-party page on November 2, 2026, and numbered to its source. "Not documented" means the authors read the page and did not find it, not that the product lacks it. Your [Lab 18](lab.md) port notes, in `ports/ch18.md`, are the test of each.

| What the specification asks | Claude Code[^claude-code-mcp] | Codex[^codex-mcp] | OpenCode version 2[^opencode-mcp] |
| --- | --- | --- | --- |
| Reads protected resource metadata, then the sign-in server's metadata | Yes | Uses advertised scopes. Discovery order not documented | Yes, uses the scope the 401 names |
| Registration route it tries first | A Client ID Metadata Document when the server supports one, found automatically. Pre-registered with `--client-id` | A Client ID Metadata Document when the sign-in server advertises one, lists `none` for token authentication, and accepts its loopback address | A configured `client_id` first, then a Client ID Metadata Document, then the older route this book does not teach |
| Checks the issuer before swapping the code | Fails a sign-in "whose authorization response names an unexpected issuer" | Yes, before exchanging the code, and rejects a missing issuer when the server advertises it | Not documented |
| Handles a 403 `insufficient_scope` | Shows that the server needs more permissions | Not documented | Not documented |
| Refreshes | On a 401, refreshes, reconnects and retries once. A rejected refresh asks you to sign in again in `/mcp` | Not documented | Refreshes tokens |
| Where tokens are kept | "Stored securely". A client secret goes in the keychain on macOS or a credentials file | Not documented. A client secret, if you set one, is saved in `config.toml` | "Outside project configuration" |
| Signs in without a browser, for CI | No. Sign in interactively first. `claude -p` and the Agent SDK cannot complete the browser sign-in | Not documented | Not documented |

### How each one differs from the specification

> *Anthropic.*
>
> - *Claude Code.* Signs in from `/mcp` or `claude mcp login <name>`, after a 401 or 403 marks a server as needing it. Follows protected resource metadata, then the sign-in server's metadata. Supports Client ID Metadata Documents and finds them by itself, and pre-registered clients with `--client-id`, `--client-secret` and `--callback-port`, which sets a fixed `http://localhost:PORT/callback`. Asks for a refresh token when the sign-in server offers one. *Adds* an automatic refresh and one retry on a 401.[^claude-code-mcp]
> - *Relaxes nothing we found, but* an older setting that adds a fixed header to every request (`headersHelper`) wins over sign-in when it sets `Authorization`. A leftover one from Chapter 17's shared key would silently replace your token. Remove it.
> - *The Messages API's MCP connector* takes an `authorization_token` per server. It does not run a sign-in. Your program gets the token, refreshes it, and passes it in. It is in beta on every model (field guide [F5](#f5-claude-code) has the exact setting), and Anthropic's option to keep no copy of your data does not cover it. Chapter 23 keeps such tokens per user and company.[^claude-mcp-connector]
> - *Status and price.* Claude Code needs a Claude plan or API billing. The connector is billed like any Messages request.

> *OpenAI.*
>
> - *Codex.* `codex mcp login <name>`, with `--scopes` for one sign-in. Uses a Client ID Metadata Document when the sign-in server's document says three things. It supports these documents, it accepts apps that have no secret of their own, and it accepts Codex's return address on any port. Its document lives at `https://chatgpt.com/oauth/codex/<callback_id>/client.json`. `--oauth-client-registration cimd` forces that route for one sign-in. Checks the issuer before exchanging the code. A pre-registered client uses `--oauth-client-id`, and a client secret given with `--oauth-client-secret` is **saved in `config.toml`**, so keep pre-registered Codex clients public, with no secret.[^codex-mcp]
> - *The Responses API's MCP tool* takes the token in an `authorization` field. OpenAI does not store it, so your program sends it with every request. Like Anthropic's, it does not run a sign-in.[^openai-connectors-mcp]
> - *Status and price.* Which ChatGPT plans include Codex was not rechecked on November 2.

> *Open source.*
>
> - *OpenCode version 2.* Sign-in is on by default for remote servers. `opencode mcp auth <name>`, or `/mcps`, signs in through the browser with PKCE, and `opencode mcp logout <name>` signs out. Uses a configured `client_id` first, then a Client ID Metadata Document when the server supports it and no `redirect_uri` is set. Setting `redirect_uri` turns Client ID Metadata Documents off.[^opencode-mcp]
> - *Falls back to the older registration route* this book does not teach. Brightline's sign-in server does not offer it, so if OpenCode's metadata document is not accepted, pre-register a client for it (field guide [F7](#f7-opencode-version-2)).
> - *Security.* The issuer check is not documented. Record what your run shows in `ports/ch18.md`.
> - *Status and price.* Free and open source. You pay for the model.

### Where the sign-in runs

> **Better Auth, on a Cloudflare Worker, with D1.** Better Auth is an open-source sign-in **library** for TypeScript: code you run inside your own program, not a service you sign up for. You add features as plugins, which here means Better Auth's own add-ons, not Chapter 16's plugins. Brightline's sign-in server is a Cloudflare Worker (17.11) running Better Auth 1.7.15, the newest stable release on November 2, 2026. Version 1.8 is in beta and not used.[^better-auth-changelog]
>
> - *Four plugins.* `mcp()` makes it an OAuth authorization server for an MCP connector, and its own page says not to add the general OAuth provider plugin beside it.[^better-auth-mcp] `jwt()` seals tokens and publishes the public keys, with the private halves encrypted.[^better-auth-jwt] `organization()` adds companies, memberships and roles.[^better-auth-organization] `cimd()` accepts Client ID Metadata Documents, with the MCP 2026-07-28 profile.[^better-auth-cimd]
> - *Implements, per the specification.* Protected resource metadata and authorization server metadata, PKCE, the `resource` parameter with the token's audience set to it, scopes, short-lived tokens and refresh tokens replaced on every use, issued only when the app asks for `offline_access`.[^better-auth-oauth-provider] The older registration route is off unless you turn it on, and the lab never does.
> - *What it leaves to you on Workers.* Its secure fetcher for Client ID Metadata Documents is for Node only. Other runtimes, Workers included, "must provide the equivalent secure transport", which a Worker cannot fully do because it cannot choose the exact network address it connects to. The lab therefore accepts documents only from a short list of known hosts ([18.5](who-is-the-app.md), field guide [F3](#f3-better-auth-from-zero)).
> - *What it cannot do with signed tokens.* Its own page says signed access tokens "cannot be revoked server-side", which is why [18.6](a-token-made-for-one-door.md) keeps them to 10 minutes.
> - *D1* is Cloudflare's database service. Each D1 database is a SQLite database, a small kind of relational database ([18.8](tables-rows-and-relationships.md)) that many phones and apps use, run by Cloudflare for you. A Worker reaches it through a binding, Chapter 17's word for a named link from a Worker to a platform resource. Better Auth uses that binding directly.[^better-auth-1-5] Free plan: 10 databases, 500 MB each, 5 GB in all, 5 million rows read and 100,000 rows written a day, and 50 queries per Worker request. Brightline's sign-in server uses a tiny fraction.[^d1-limits]
> - *Free plan limits that matter here.* Workers give 10 ms of processor time per request on the free plan, with some flexibility for a Worker that "infrequently runs over".[^workers-limits] Password hashing at sign-in is the heaviest step. The authors measured about 80 ms of processor time per sign-in in Cloudflare's local runtime, roughly 8 times the 10 ms. **Not yet run online:** whether a deployed sign-in still succeeds, or fails with Error 1102. It needs a person to deploy and sign in. The connector fetches the sign-in server's public keys through a **service binding**, a direct link between two Workers in one account that does not go through a public address.[^service-bindings] Cloudflare's own Rate Limiting binding, for rule 5 in [18.12](what-else-carries-the-company.md), is not listed in the free plan's features. [Lab 18](lab.md) tries it, and if it is refused, uses an in-memory limiter online and records that the limit is then counted per copy, not across all copies.[^rate-limiting]
> - *Alternatives.* Cloudflare's own Workers OAuth Provider library runs an authorization server inside a Worker. It supports Client ID Metadata Documents (with a setting that limits its fetches to public addresses), and replaces refresh tokens on every use. A hosted identity service runs the sign-in server for you, for a monthly price. All three serve the same connector unchanged, because the connector checks standard tokens against standard public keys.[^workers-oauth-provider]
> - *Status and price.* Better Auth is free and open source. Workers and D1 have the free plans above.

### The tenancy models, product by product

All three tenancy models from [18.9](what-a-tenant-is.md) work with every AI app above, because each model is only a question of what address the connector has and what audience its tokens carry. The difference is in the sign-in server: Better Auth's `organization()` plugin, with consent stored per company, supports the first model directly. The second model needs one connector address per company in the sign-in server's settings, so check that the pinned version accepts several before choosing it. The third model is one more deployment of everything.

### Watch this: DPoP

> **DPoP** (Demonstrating Proof of Possession, RFC 9449) binds a token to a key held by the AI app, so a stolen token is useless without that key. The app signs a small proof for each request. The MCP specification does not require it in revision 2026-07-28. Better Auth's connector helpers enforce it when a token is bound this way. Watch for AI apps adopting it, and for a later MCP revision asking for it. Brightline does not use it yet.[^rfc9449]

[^claude-code-mcp]: Connect Claude Code to tools via MCP, Anthropic.
[^codex-mcp]: Codex: MCP, OpenAI.
[^opencode-mcp]: MCP servers, OpenCode.
[^claude-mcp-connector]: MCP connector, Anthropic.
[^openai-connectors-mcp]: Connectors and MCP servers, OpenAI.
[^better-auth-changelog]: Changelog, Better Auth.
[^better-auth-mcp]: MCP plugin, Better Auth.
[^better-auth-jwt]: JWT plugin, Better Auth.
[^better-auth-organization]: Organization plugin, Better Auth.
[^better-auth-cimd]: CIMD plugin, Better Auth.
[^better-auth-oauth-provider]: OAuth provider, Better Auth.
[^better-auth-1-5]: Better Auth 1.5, Better Auth.
[^d1-limits]: D1 limits, Cloudflare.
[^workers-limits]: Workers limits, Cloudflare.
[^service-bindings]: Service bindings, Cloudflare.
[^rate-limiting]: Rate Limiting, Cloudflare.
[^workers-oauth-provider]: Workers OAuth Provider, Cloudflare.
[^rfc9449]: RFC 9449, OAuth 2.0 Demonstrating Proof of Possession, IETF.



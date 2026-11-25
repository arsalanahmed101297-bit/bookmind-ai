# Chapter 18. Securing Connectors: OAuth for MCP, with Better Auth and D1 (/building-ai-workers/securing-connectors/overview)

---
type: Document
title: "Chapter 18. Securing Connectors: OAuth for MCP, with Better Auth and D1"
description: "Put real sign-in in front of a connector, so it knows which person and which company is calling, and refuses everyone else."
status: stable
order: 318
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:27Z
chapter: "18"
part: III
expert_status: builder-only
objectives:
  - { id: CCDV-F.D7.S1, label: supporting }
  - { id: CCDV-F.D7.S4, label: supporting }
  - { id: CCDV-F.D8.S2, label: supporting }
  - { id: CCDV-F.D2.S2, label: supporting }
word_budget: 14500
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17" ]
build_step: "Real sign-in for the Brightline AP connector: an authorization server (Better Auth with its MCP, JWT, organization and CIMD plugins, on D1) specified with the AP analyst and built by Claude Code, the TypeScript connector checking sign-in tokens against its public keys, the Python connector doing the same (Codex), a sign-in matrix in the conformance suite that tries to break company separation (OpenCode), a second company, Cedar Ridge Supply, onboarded in the sign-in server, Claude Code, Codex and OpenCode each signing in through the browser, plugin v0.3.0 with no shared key, and the sign-in server and TypeScript connector deployed to staging and production"
artifact: "brightline-ap with docs/auth-spec.md, servers/auth/ (Worker, D1 migrations, sign-in, company-picker and consent pages), servers/ap-ts/src/http.ts checking tokens, py/brightline_ap/ checking tokens, scripts/tenant-*.ts, scripts/conformance.ts with the sign-in matrix, plugin v0.3.0, .mcp.json, .codex/config.toml, opencode.jsonc with no key, ports/ch18.md, docs/deploy.md, .github/workflows/deploy.yml, NOTES.md, tag ch18"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch18.zip"
field_guides: [ "E.securing-connectors" ]
delta_entries: []
concepts: [ "18.1", "18.2", "18.3", "18.4", "18.5", "18.6", "18.7", "18.8", "18.9", "18.10", "18.11", "18.12", "18.13", "18.14", "18.15", "18.16", "18.17" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-21T00:02:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

**In [Chapter 17](../connectors-and-mcp/overview.md), Brightline's connector let in anyone who had the key.** Every AI app sent the same shared access key, so the connector could not tell Ana from anyone else who had it. That was fine for sample data. It is not fine once a second company uses the same connector.

**In this chapter each person signs in.** The connector then knows three things on every request: which person is asking, for which company, and what that person may do. It refuses everyone else, and it never lets one company act as another.

![Two doors compared. Left, one shared key: three people from two companies each hold a copy of the same key, and the key opens every door of the connector, for both companies. Right, sign-in tokens: each person holds their own short-lived token that names them, one company and what they may do, and the token opens only that company's doors on this one connector. Below: a key proves you hold it. A token says who you are, for whom, and for how long.](img/chapter-18-key-vs-token.png)

*Figure 18.1. A shared key opens every door for everyone. A sign-in token opens the right doors for one person, one company, for a short time.*

**Let people prove who they are in a browser, at a server built for that job. Give the connector a short-lived token made for it alone. Take the company from that token and nowhere else, and prove with tests that one company can never act as another.**

After this chapter you can:

- **Explain how sign-in works,** from a password typed in a browser to a token the connector checks, step by step.
- **Explain why a connector must not guess** where to send people to sign in, and how it tells AI apps.
- **Read a sign-in token** and say what each part is for, and why a token made for one connector is refused by another.
- **Give each person only the permissions their role needs,** and explain what happens when a tool needs more.
- **Read a small database** ([18.8](tables-rows-and-relationships.md) starts from zero): its tables, and the three kinds of question an agent writes for it.
- **Build one connector for many companies:** the company chosen at sign-in, carried in the token, used on every request, and tested by trying to break it.
- **Run the sign-in server:** bring a company in and take it out, replace its keys safely (field guide [F0](field-guide-securing-connectors.md#f0-keys-passwords-and-the-connector-you-start-with) lists every kind of key), and keep staging and production apart.

**Who does what.** This chapter is for builders. There is no expert half this time, because sign-in is the builder's job. Ana, the accounts payable (AP) analyst at Brightline, still answers one kind of question, as a manager: who may connect, and what each role may see. You, the builder, direct the coding agents and decide everything else. Managers can read this overview and Concepts [18.1](who-is-calling.md), [18.7](permission-per-tool.md), [18.9](what-a-tenant-is.md) and [18.14](a-companys-life.md).

**The title's last two names are tools, not ideas.** Better Auth is free, ready-made sign-in code you add to your own program, and D1 is a database service, a place that stores records for programs. You meet them only in the lab, the field guide and [18.17](how-todays-tools-realize-it.md). The concepts work with any tools.

## Words this chapter uses

Eleven words carry the chapter. Each means one thing, everywhere. Other new words are explained where they first appear. In the "At work" stories, "the builder" is you.

| Word | Meaning |
| --- | --- |
| Connector | As in Chapter 17: Brightline's MCP server, with its four read-only tools |
| AI app | As in Chapter 17: the program a person types into |
| Sign-in server | A separate program where people sign in. It checks passwords, asks the person to approve, and issues tokens. The standards call it the authorization server |
| Sign-in token | Chapter 17's word, kept here: a short-lived pass the AI app sends with every request, naming one person, one company, this connector and what it may do. **The standards call it an access token.** It replaces Chapter 17's shared access key, which this chapter removes |
| Refresh token | A second, longer-lived pass an AI app gets if it asks for one, keeps privately and uses only to get a new sign-in token when the old one runs out |
| Scope | One named permission a token carries, such as `ap:read` |
| Role | What a person is inside one company. Written in a fixed-width font, like `this`: `owner`, `admin`, `member`, `auditor`. The sign-in server turns a role into scopes |
| Tenant | One customer company whose people and data must be kept apart. Stories say company, rules say tenant, and the sign-in server's records ([18.8](tables-rows-and-relationships.md)) say organization. All three mean the same thing |
| Membership | The link between one person and one company, with a role. One person can have several |
| Header | As in 17.1: a labeled line sent with a request, before its contents, like the address on an envelope. Whoever sends a request can write anything in it |
| Consent screen | The page where a person approves what an AI app may do for them, and picks the company |

Chapter 17's **handle**, **handle key**, **copies** and **environments** keep their meaning. "Key" means several different things in this chapter. Field guide [F0](field-guide-securing-connectors.md#f0-keys-passwords-and-the-connector-you-start-with) lists each one.

## What you will build

**Where you are.** At the end of Chapter 17, Brightline's connector was online, in staging and production, with four read-only tools. Every AI app sent the same access key. Ana, the AP analyst, signs off on what it says. Three things were missing:

- **It could not tell people apart.** Everyone with the key looked the same.
- **It could not take access away from one person.** Changing the key meant changing it everywhere.
- **It served one company.** Brightline is about to sell the connector to a second company, and with one key the second company could read Brightline's invoices.

**What you build instead.** As in Chapter 17, you do not type code. Coding agents write every file and run every command, and you specify, read, and approve.

1. **A sign-in server.** A separate small program where people sign in with a password, pick their company, and approve the AI app. It issues sign-in tokens. It keeps its records in a small database.
2. **The connector behind tokens.** Both versions of the connector, TypeScript and Python, drop the shared key. On every request they check the token, take the person and the company from it, and refuse anything else.
3. **Another company.** Cedar Ridge Supply, a building-supply distributor in Boise, Idaho, with about 25 staff, joins as the connector's second customer. It is invented for this book, like Brightline. In this chapter it exists in the sign-in server only: its company, its people and their roles. Its business data arrives in [Chapter 19](../business-data-and-retrieval/overview.md).
4. **Tests that try to break it.** A set of checks that tries every route one company might use to act as another, and two deliberately broken copies of the connector that must fail them.

Then Claude Code, Codex and OpenCode each sign in through your browser, and both programs go online in staging, and, optionally, in production.

![The shape of the system after this chapter. On the left, three AI apps. At the top, the sign-in server, with its own small database of people, companies, memberships and keys, where a person signs in in the browser and picks a company. On the right, the connector, as several short-lived copies, with Brightline's data beside it. Arrows: the AI app sends the person to the sign-in server, gets a sign-in token, and sends it with every request to the connector. The connector keeps the sign-in server's public keys, fetches them again every few minutes, and checks every token itself. Below, two companies, Brightline and Cedar Ridge Supply, each with their people.](img/chapter-18-system.png)

*Figure 18.2. Two programs: a sign-in server that issues tokens, and a connector that checks them.*

## Why it matters

This story is invented, but each failure in it is common. A small software company in Denver, Colorado, sold an AI connector for expense reports to about forty firms. It used one shared key per firm, and each AI app also sent a header saying which firm it was, `X-Firm: 17`.

A bookkeeper who worked for two of those firms noticed that her app still sent `X-Firm: 17` after she switched to the other firm's work. The connector believed the header. She saw the first firm's expense reports from the second firm's chat. She reported it. Others might not have.

Three design choices made it possible. The connector trusted what the request said about itself. The key named a firm but not a person, so nobody could tell who had used it. And no test ever tried to send one firm's request with another firm's name in it. This chapter fixes all three: the company comes only from a token the sign-in server seals ([18.6](a-token-made-for-one-door.md)), the token names the person, and a test suite tries exactly that attack on every build.

![Three failures and their fixes, in three rows. First: the connector believed a header that named the firm, fixed by taking the company only from a token the sign-in server seals, at the connector's front door. Second: a key named a firm but not a person, fixed by a sign-in token that names the person, the company and the app, issued by the sign-in server. Third: no test tried one firm's request with another's name, fixed by a sign-in matrix that tries every route, in the test suite. Below: the request may claim anything. Only the sealed token decides.](img/chapter-18-three-fixes.png)

*Figure 18.3. Three fixes, three places: the front door, the sign-in server and the tests.*

## How the plugin grows

| Chapter | What it adds to the plugin |
| --- | --- |
| 16 | Skills, a command and a ready-made connector |
| 17 | Brightline's own connector: four read-only tools, written by coding agents, and put online with a shared key |
| 18 | Real sign-in. The plugin carries only the connector's address, no key. Each person signs in and picks a company, and the connector knows who may act for which company |
| 19 | The business data moved into a database, with each company's rows kept apart by the database itself, and policy search by meaning |
| 20 | Its own screens inside the chat, a read-only review of open invoices, and its skills served over MCP. Every button press is checked as the person signed in |
| 23 | An agent that runs on a server inside a web page Brightline's staff already use, holding each person's tokens for them |

## In this chapter

Sign-in for connectors follows one public rulebook, the **MCP authorization specification**, part of MCP revision 2026-07-28, the current one on November 2, 2026. It builds on OAuth, the standard behind every "Continue with..." button ([18.2](sign-in-in-one-picture.md)), and a few other public standards. Concepts [18.1](who-is-calling.md) to [18.16](watching-who-did-what.md) teach those rules and name no product, except the three coding agents in the At work stories. [18.17](how-todays-tools-realize-it.md) shows how today's products follow them.

**Must, should, may.** The specification writes its rules with three words, and this chapter keeps them in bold. **Must** is a rule: break it and you are not following the specification. **Should** means do it unless you have a strong reason not to. **May** means it is allowed, not required. Each concept ends with a short line naming the standards behind it: numbered public documents called RFCs, written by the IETF, the group that writes many of the internet's open standards. You can skip those lines.

**The essential path.** Read this overview, Concepts [18.1](who-is-calling.md) to [18.15](the-sign-in-server-you-run.md) and field guides [F0](field-guide-securing-connectors.md#f0-keys-passwords-and-the-connector-you-start-with) to [F3](field-guide-securing-connectors.md#f3-better-auth-from-zero). Read any other field guide section when the lab sends you there. Then do the lab's core tasks. Everything else is going further or reference.

**Part A. Sign-in from zero.**

- [18.1 Who is calling?](who-is-calling.md)
- [18.2 Sign-in in one picture](sign-in-in-one-picture.md)
- [18.3 Finding the door](finding-the-door.md)
- [18.4 Two guards for the code](two-guards-for-the-code.md)
- [18.5 Who is the app?](who-is-the-app.md)
- [18.6 A token made for one door](a-token-made-for-one-door.md)
- [18.7 Permission per tool](permission-per-tool.md)

**Part B. Where sign-in data lives.**

- [18.8 Tables, rows and relationships](tables-rows-and-relationships.md)

**Part C. One connector, many companies: who may act for which company.** The heart of the chapter. Chapter 19 does the same for the business data: whose rows are whose.

- [18.9 What a tenant is](what-a-tenant-is.md)
- [18.10 Where the tenant comes from](where-the-tenant-comes-from.md)
- [18.11 One order slip per request](one-order-slip-per-request.md)
- [18.12 What else carries the company](what-else-carries-the-company.md)
- [18.13 Proving the sign-in keeps companies apart](proving-the-sign-in-keeps-companies-apart.md)
- [18.14 A company's life, in the sign-in server](a-companys-life.md)

**Part D. Running it.**

- [18.15 The sign-in server you run](the-sign-in-server-you-run.md)
- [18.16 Watching who did what](watching-who-did-what.md) (going further)
- [18.17 How today's tools realize it](how-todays-tools-realize-it.md) (reference, skim it)

Then: the field guide ([F0](field-guide-securing-connectors.md#f0-keys-passwords-and-the-connector-you-start-with) to [F10](field-guide-securing-connectors.md#f10-how-todays-tools-realize-it-in-detail)), [Lab 18](lab.md) and Check yourself.

**Five sittings.** The lab takes about 9 hours in five sittings: the sign-in server, the connector behind tokens, many companies, real sign-ins from three AI apps, and deploying. The core path, without the extensions, takes about 7 hours 45 minutes.



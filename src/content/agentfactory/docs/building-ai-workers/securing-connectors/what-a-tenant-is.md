# 18.9 What a tenant is (/building-ai-workers/securing-connectors/what-a-tenant-is)

---
type: Document
title: "18.9 What a tenant is"
description: "Tenants, memberships and the three tenancy models, and the two halves of keeping companies apart."
status: stable
order: 318.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T06:58:13Z
chapter: "18"
part: III
expert_status: builder-only
concepts: [ "18.9" ]
objectives:
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-05T06:58:13Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Part C is the heart of the chapter: one connector serving many companies. It covers who may act for which company. [Chapter 19](../business-data-and-retrieval/overview.md) covers the other half: whose rows are whose in the database.*

**In everyday life.** An apartment building has one front door, one elevator and one set of pipes, but each apartment has its own lock, its own mailbox and its own lease. The manager must never hand one family's mail to another, however busy the lobby gets. Landlords build for many families in three ways. One big building, where everyone shares the front door and the apartment lock does the work. A row of townhouses, each with its own front door on its own street number. Or a whole separate house for one large family.

**What you will learn.** What it means to keep customer companies apart on one connector, and the three ways to build for that.

**Why it matters.** Each request must be answered for its own company, whatever anyone types. How you build decides how firmly the companies are kept apart.

**One request, start to finish.** Cedar Ridge Supply becomes the connector's second customer. On Monday morning two requests reach the same copy of the connector in the same second:

1. **Ana's**, for Brightline: "Which invoices are due this week?"
2. **Luis's**, for Cedar Ridge: the same question.

The connector must answer each for its own company, and nothing either person does or types may change which company they get.

### What is a tenant?

A **tenant** is one customer company whose people and data must be kept apart from every other's. The word comes from renting: many tenants, one building. Brightline and Cedar Ridge are two tenants. A **membership** links one person to one tenant, with a role. It is the `member` table from [18.8](tables-rows-and-relationships.md). One person can have memberships in two tenants, like Priya.

How a system is built to serve many tenants is its **tenancy model**. The three models match the three kinds of housing. In one line each:

1. **One shared connector:** one address for everyone. The token says which company.
2. **One address per company:** the same code at several addresses, and each token works at one address only.
3. **One deployment per company:** a whole separate copy for one large customer.

The table compares them:

| | 1. One shared connector (the big building) | 2. One address per company (townhouses) | 3. One deployment per company (a separate house) |
| --- | --- | --- | --- |
| What it is | One connector at one address. The company is a claim in each token | The same code, but each company gets its own address, such as `brightline.ap.example`. A Cedar Ridge token is refused at Brightline's address before anything else is read. Inside, the company still comes from the token | A separate deployment for one company: a separate running copy of everything, with its own address, keys, sign-in server and data |
| What a token is made for | One address for every company. The `tenant` claim says which | One company's address. A token for one company is refused at another's address, because its audience is wrong ([18.6](a-token-made-for-one-door.md)) | That company's deployment only |
| How well companies are kept apart | The connector must read the claim correctly, every time | A second wall: the audience check | Completely. Nothing is shared |
| Cost and work | Lowest. One thing to deploy and watch | A little more: one address per company | Highest: one of everything per company |
| Fits | Many small and medium customers | Customers who want their own address, or a stricter wall | A large customer with its own rules or contract, or data kept in one country |

### When do you move a company up?

Start every company in the first model. Move one to the second when it asks for its own address, or its contract asks for that second wall. Move one to the third when it needs its own update schedule, its own keys, its data kept in a particular country, or so much traffic that it would slow everyone else. The connector's code is the same in all three models. Only two things change: where it runs, and which address its tokens are made for. Because the company always comes from the token ([18.10](where-the-tenant-comes-from.md)), the same rule works in every model.

### Which model does Brightline use?

Brightline uses the first model. It has two small customers and expects more of the same size. The seven rules in [18.11](one-order-slip-per-request.md) and [18.12](what-else-carries-the-company.md) make the claim trustworthy, and the tests in [18.13](proving-the-sign-in-keeps-companies-apart.md) prove it on every build.

### What are the two halves of keeping companies apart?

1. **Who may act for which company:** sign-in, consent, the company in the token, and the connector refusing anything else. This chapter.
2. **Whose data is whose:** each company's rows kept apart in the database, even when code forgets. Chapter 19.

**At work.** The builder writes in `docs/auth-spec.md`: "Model 1, one shared connector. Company from the token only. Model 2 on request. Model 3 only by contract." Later, a large hospital chain asks Brightline for the connector. The builder notes that it would be model 3: its own deployment, keys and data.

**The operating rule:** name your tenancy model before you build, and start with one shared connector that takes the company from the token. Move a company to its own address or its own deployment only for a reason you can write down.

**What [Chapter 19](../business-data-and-retrieval/row-level-security.md) adds:** each company's business data in a database that refuses to return another company's rows.

![The three tenancy models side by side, each under a small house icon: a big building, a row of townhouses, a separate house. First, one shared connector at one address, with two companies' tokens arriving, each carrying a tenant claim. Second, the same code at two addresses, one per company, each token made for one address. Third, two fully separate deployments, each with its own code, keys and data. Under each, what keeps companies apart: the claim, the claim plus the address, everything.](img/chapter-18-tenancy-models.png)

*Figure 18.12. Three tenancy models. Brightline starts with the first and can move a company to the second or third.*



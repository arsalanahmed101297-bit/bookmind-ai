# 19.7 Three ways to keep data apart (/building-ai-workers/business-data-and-retrieval/three-ways-to-keep-data-apart)

---
type: Document
title: "19.7 Three ways to keep data apart"
description: "Shared tables, a schema per company or a database per company: how each keeps data apart, what it costs, and why Brightline uses shared tables with row-level security."
status: stable
order: 319.07
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-04T22:13:33Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.7" ]
objectives:
  - { id: CCDV-F.D7.S1, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-04T22:13:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** [Chapter 18](../securing-connectors/overview.md) compared tenancy to housing: an apartment building, a row of townhouses, a separate house. Storage works the same way. A self-storage company can rent you a locker in a shared hall, a room of your own in its building, or a whole unit on another site. All three keep your boxes apart. They differ in how thick the walls are, what they cost, and how much work it is to look after a thousand of them.

**What you will learn.** Three ways to keep many companies' data apart, what each costs, and why Brightline starts with shared tables.

**Why it matters.** The model you choose decides what stops a forgotten filter in the code: the database itself, or a connection that must be pointed at the right place every time.

**One request, start to finish.** Two requests reach the business database in the same second. In the first model below, both read the same `invoices` table. In the second, each reads its own company's copy of the table. In the third, each goes to a different database. In all three, Luis must get Cedar Ridge's invoices and never Brightline's. What differs is who makes sure of it.

### What are the three ways?

Two words first, both used in the table below. **Compute** is the machine time that runs a database's queries, billed separately from the storage that holds its rows. The **catalog** is the database's own list of every table, column and rule it holds. It grows with every table, so thousands of copies of the same tables make it large and slow.

There are three ways to keep many companies' data in a relational database. Each is a **data tenancy model**, the data side of Chapter 18's tenancy models:

| | 1. Shared tables | 2. A schema per company | 3. A database per company |
| --- | --- | --- | --- |
| What it is | One set of tables. Every row carries `tenant_id` | One named set of tables per company (Postgres calls a named set of tables a schema) | A separate database, or a separate database server, per company |
| What keeps companies apart | Row-level security on every row ([19.8](row-level-security.md)) | Which schema the connection (a program's open line to the database, [19.9](one-company-per-transaction.md)) is set to use | Which database the connection opens |
| A forgotten filter in code | Still sees only the current company's rows (row-level security) | Reads whichever schema the connection is set to use | Reads whichever database the connection opened |
| Cost per extra company | A few rows | A set of tables | A database, often with its own compute |
| Export and deletion | By `tenant_id`, through the same rules ([19.11](each-companys-own-rules-and-data.md)) | Copy or drop one schema | Copy or drop one database |
| Limits that bite | One company's heavy queries slow the others | Thousands of schemas strain the database's own catalog | Connection limits and a bill per database |

### How do they pair with sign-in?

Chapter 18's first model, one shared connector, pairs naturally with shared tables: one connector, one database, the company from the token on every request. A company that moves to its own deployment (Chapter 18's third model) usually gets its own database too. Whatever the model, the rule from [18.10](../securing-connectors/where-the-tenant-comes-from.md) does not change: the company comes from the token, and only from the token.

### When do you move a company?

Start every company in shared tables. Move one to its own schema or database for a reason you can write down: a contract that requires its data in one country, a size that would slow the others, or its own backup schedule.

### Which model does Brightline use?

Brightline uses shared tables with row-level security. Its connector serves two small companies, Brightline itself and Cedar Ridge, and expects more of the same size. Shared tables cost least and need one migration. Their guard is the database itself: with row-level security forced on every table ([19.8](row-level-security.md)), a query that forgets its filter still sees only its own company's rows. The other two models need no filter at all, and depend instead on the connection being pointed at the right schema or database, every time.

### Whose job is it to keep companies apart?

The patterns belong to Postgres, the job belongs to you. All three models are long-established Postgres patterns, and any Postgres host can run them. A hosting service can make one company its own database quickly. It cannot decide which company a request is for, set that company for the transaction, or check that every table is forced. Correct isolation is always the application's job, whichever host it runs on. [19.8](row-level-security.md) to [19.12](proving-the-data-stays-apart.md) are how Brightline does that job.

**At work.** The large hospital chain from Chapter 18 asks for its own database, kept in one region. The builder writes in `docs/data-spec.md`: "Model 1 for every company. Model 3 by contract: its own database and its own deployment of the connector, the same migrations, run once more." Cedar Ridge shares tables with Brightline.

**The operating rule:** name your data tenancy model before you build. Start with shared tables and row-level security. Move a company out only for a reason you can write down.

![Three ways to keep data apart, side by side. First, one set of tables, with rows of two colors in each table, and a guard at each table labeled row-level security. Second, one database with two named sets of tables, one per company, and a sign on the connection saying which set to use. Third, two separate databases, one per company. Under each, what keeps companies apart: the policy on every row, the setting on the connection, the connection itself.](img/chapter-19-data-models.png)

*Figure 19.13. Three data tenancy models. Brightline uses the first, and can move a company to the third.*



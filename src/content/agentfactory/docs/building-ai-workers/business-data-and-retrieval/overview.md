# Chapter 19. Business Data and Retrieval: Postgres, Row-Level Security and pgvector, on Neon (/building-ai-workers/business-data-and-retrieval/overview)

---
type: Document
title: "Chapter 19. Business Data and Retrieval: Postgres, Row-Level Security and pgvector, on Neon"
description: "Move the connector's business data into a database, keep each company's rows apart with the database itself, and answer policy questions by meaning, with citations or an honest abstention."
status: stable
order: 319
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:25Z
chapter: "19"
part: III
expert_status: co-build
objectives:
  - { id: CCDV-F.D6.S1, label: supporting }
  - { id: CCDV-F.D7.S1, label: supporting }
  - { id: CCDV-F.D2.S2, label: supporting }
  - { id: CCDV-F.D8.S2, label: supporting }
word_budget: 23000
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18" ]
build_step: "Brightline's AP data in Postgres: a data contract written with the AP expert, tables in third normal form with the company in every key, two roles made with SQL (a loader and a read-only reader), row-level security forced on every table, the company set for one transaction only, Cedar Ridge Supply's own data and approval threshold, export and deletion at offboarding, both connectors on the database, a 25-row data matrix and six planted bugs, each caught by at least one check, policy search by meaning with citations and abstention (pgvector, HNSW), a retrieval question set, a database branch per pull request, and staging and production through cache-disabled Hyperdrive"
artifact: "brightline-ap with docs/data-spec.md, db/migrations/0001 to 0004, scripts/db-migrate.ts, scripts/db-passwords.ts, scripts/check-roles.ts, scripts/check-queries.ts, scripts/tenant-load.ts, scripts/tenant-export.ts, scripts/tenant-delete.ts, scripts/embed.ts, scripts/data-matrix.ts, scripts/retrieval-eval.ts with eval/questions.csv, servers/ap-ts/src/db.ts and embeddings.ts, py/brightline_ap/db.py and embeddings.py, .github/workflows/ci.yml with a Neon branch per pull request, ports/ch19.md, docs/deploy.md, tag ch19"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch19.zip"
field_guides: [ "E.business-data-and-retrieval" ]
delta_entries: []
concepts: [ "19.1", "19.2", "19.3", "19.4", "19.5", "19.6", "19.7", "19.8", "19.9", "19.10", "19.11", "19.12", "19.13", "19.14", "19.15", "19.16", "19.17", "19.18" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-21T00:02:25Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

**In [Chapter 18](../securing-connectors/overview.md), the connector learned who is calling, and for which company.** Every request carries a sign-in token that names one person and one company, and the connector refuses everyone else. But Brightline's business data still sits in files shipped with the code. Cedar Ridge Supply, the second customer, still gets "No AP data is connected for Cedar Ridge Supply yet."

**In this chapter the data moves into a database, and the database itself keeps each company's rows apart.** Even a tool that forgets its company filter cannot hand Cedar Ridge one of Brightline's invoices, because the database refuses to show it. Then the policy search changes too: it finds rules by meaning, not by shared words. It cites the rule or says plainly that the policies do not answer the question.

![Two pictures compared. Left, before: three copies of the connector, each carrying the same data files inside it. Brightline's files are in every copy, with no room for a second company's. Right, after: three copies with no data inside, all reaching one database. Inside the database, each table holds rows for two companies, Brightline and Cedar Ridge Supply. A guard at the database's door lets each request see only its own company's rows. Below: the data leaves the code, and the database decides who sees which rows.](img/chapter-19-files-to-database.png)

*Figure 19.1. Before, every copy carries the data. After, one database serves every copy, and it decides which company's rows each request may see.*

**Store each fact once, with the company in every key. Let the database refuse another company's rows, with the company set for one transaction only. Search policies by meaning, cite what you found, and say so when you found nothing.**

After this chapter you can:

- **Read a database design** and say what each table, column and rule is for, and why every key includes the company.
- **Explain third normal form in detail:** find the facts stored in the wrong place. Say which copies an AI system keeps on purpose, and what keeps each copy true.
- **Explain row-level security:** how the database refuses other companies' rows, which roles skip it, and why the connector's role must not.
- **Explain why the company is set for one transaction only,** and what goes wrong on a shared connection when it is not.
- **Name the gaps** that row-level security does not close, and the rule that closes each.
- **Bring a company's data in, export it and delete it,** and prove nothing of it is left.
- **Explain retrieval:** passages, embeddings, vectors, similarity search and an index, and why a search that finds nothing close enough should abstain.
- **Measure retrieval** with a question set, so a change that makes it worse fails the build.

**Who does what.** Two roles share this chapter. The builder (you) directs the coding agents and decides how the database works. Each company's AP expert decides what its data means: which columns a purchase order must hold and which policy documents count. The expert also decides what a citation looks like, and when "I found nothing" is the right answer. In the lab you play both roles. Managers can read this overview and Concepts [19.1](why-a-database-now.md), [19.2](tables-rows-and-keys-from-zero.md), [19.7](three-ways-to-keep-data-apart.md), [19.11](each-companys-own-rules-and-data.md) and [19.15](answers-that-cite-or-abstain.md).

**The principle is portable Postgres and pgvector. The reference implementation is Neon.** Postgres, a free, open-source database, holds the business records. An add-on for it, pgvector, holds the embeddings used to search by meaning, in the same tables and under the same rules. So no separate vector database is needed. Both run on many hosts, so the design never depends on one provider. Neon, a service that runs Postgres for you, is the reference host the lab uses. You meet it only in the lab, the field guide and [19.18](how-todays-tools-realize-it.md). That page says why Neon was chosen and what a move to another host takes. Whatever the host, keeping companies apart correctly is the application's job, and most of this chapter is how to do it.

![Three layers stacked. Top, in gold: your application's rules, the roles, row-level security policies, the company set per transaction, and the checks, labeled you own these, on any host. Middle: Postgres with pgvector, tables, SQL, keys, row-level security, embeddings and vector search, labeled free, open source, runs on many hosts. Bottom: three hosts, each running the middle layer. The reference host, outlined in red-orange, serverless with branches in seconds, autoscaling and managed. Another managed Postgres host with pgvector. Your own server with Postgres and pgvector. A note: moving hosts takes a new connection string, the migrations, a copy of the rows, and the checks. Below: no host makes isolation correct, the top layer is always the application's job.](img/chapter-19-portable-layers.png)

*Figure 19.2. The rules are portable. The host is a choice, and the rules move with you.*

## Words this chapter uses

Twelve words carry the chapter, after the basic database words that [19.2](tables-rows-and-keys-from-zero.md) teaches from zero (table, row, column, primary key, foreign key, SQL, query). Each keeps one meaning, and the table says where a word has a second one. The words of Chapters 17 and 18 keep their meaning: **tenant**, membership, sign-in token, **request context**, scope, handle, copies and environments. A tenant is one customer company whose people and data must be kept apart, and stories call it "company". The request context is the locked order slip the token check writes ([18.11](../securing-connectors/one-order-slip-per-request.md)).

| Word | Meaning |
| --- | --- |
| Business database | The database that holds Brightline's AP data: vendors, invoices, purchase orders, policies. It is separate from Chapter 18's sign-in database, on purpose ([19.1](why-a-database-now.md)) |
| Postgres | The database server this chapter uses, also called PostgreSQL. A program that holds tables, answers SQL, and enforces rules on every row |
| Schema | The design of a database: its tables, their columns, and the rules each row must follow ([19.4](designing-the-ap-tables.md)). Postgres also uses the word for a named folder of tables inside one database ([19.7](three-ways-to-keep-data-apart.md)). The text says which |
| Normal form | A rule for laying out tables so that each fact is stored in one place. Third normal form, or 3NF, is the one this book uses ([19.5](third-normal-form-in-detail.md)) |
| Migration | A numbered file that changes the schema, applied once, in order, and never edited after it runs ([19.6](changing-the-tables-safely.md)) |
| Role | A name the database knows, with its own password and its own rights. Not Chapter 18's role inside a company (`owner`, `member`). Database roles are written like `ap_reader` |
| Row-level security | A database feature that shows and accepts only the rows a rule allows, for every query ([19.8](row-level-security.md)) |
| Policy | One such rule on one table, such as "only rows whose `tenant_id` is the current company". Elsewhere, "policy" also means Brightline's written AP policies. The text always says which |
| Transaction | A group of statements (one statement is one SQL command, such as one `SELECT`) that succeed or fail together, ended by a **commit** (keep the changes) or a **rollback** (undo them) ([19.9](one-company-per-transaction.md)) |
| Passage | One short piece of a policy document, such as one rule, stored as one row with its document and line number ([19.13](retrieval-from-zero.md)) |
| Embedding | A list of numbers a model makes from a piece of text, so that texts with similar meaning get similar numbers. Stored in a column of type vector ([19.13](retrieval-from-zero.md)) |
| Abstain | What the policy search does when no passage is close enough: it says so, instead of offering the closest wrong passage ([19.15](answers-that-cite-or-abstain.md)) |

## What you will build

**Where you are.** At the end of Chapter 18, people sign in, and the connector knows which person and which company is asking. A sign-in matrix tries every route one company might use to act as another. Three things were still missing:

- **Cedar Ridge Supply has no data.** It exists in the sign-in server with its people, but every tool answers "No AP data is connected for Cedar Ridge Supply yet."
- **The data ships inside the code.** Changing one invoice means a new deploy, and a second company's files would sit inside every copy beside Brightline's.
- **The policy search matches words, not meaning.** When Luis asks "do we need a PO for a $400 repair?", it cannot tell that his "PO" is the "purchase order" in Cedar Ridge's rule.

**What you build instead.** As in Chapters [17](../connectors-and-mcp/overview.md) and [18](../securing-connectors/overview.md), you do not type code. Coding agents write every file and run every command, and you specify, read and approve.

1. **A data contract,** written with each company's AP expert: what every table and column means, each company's own rules, and what is never stored.
2. **A business database,** with tables in third normal form, the company in every key, two roles made with SQL, and row-level security forced on every table.
3. **Each company's data loaded,** checked and provable: Brightline's, Cedar Ridge's with its own lower approval threshold, and a trial company's, exported and then deleted.
4. **Both connectors on the database,** each tool call one transaction with the company set for that transaction only.
5. **A data matrix,** 25 checks that try every route from one company's rows to another's, and six planted bugs. At least one check must catch each bug.
6. **Policy search by meaning,** with citations and abstention, and a question set that measures it.

Then the database goes online in staging, and optionally production, with a fresh copy of the database for every pull request.

![The shape of the system after this chapter. On the left, three AI apps. At the top, the sign-in server from the last chapter, with its own small database of people, companies and memberships. On the right, the connector as several short-lived copies. Below the connector, a new business database with tables for vendors, invoices, purchase orders, settings and policy passages, each row marked with its company. Between the copies and the database, a connection service that lends out connections, with caching turned off. Beside the database, an embeddings model that turns text into numbers. Arrows: the AI app sends a sign-in token, the connector checks it, opens one transaction for the token's company, and reads only that company's rows.](img/chapter-19-system.png)

*Figure 19.3. Two databases now: the sign-in database from the last chapter, and a business database the connector reads, one company per transaction.*

## Why it matters

This story is invented, but each failure in it is common. A payroll software company in Columbus, Ohio, served about sixty small firms from one database. Every query in its code ended with `WHERE firm_id = ?` (a filter: only this firm's rows), and for two years nothing went wrong.

Then a developer added a report of "employees with expiring certifications". The query worked, the tests passed, and it shipped on a Friday. It had no `firm_id` filter. On Monday, an office manager at one firm opened the report and saw 412 employees. Her firm had 19.

Three design choices made it possible. The only guard was a line every developer had to remember in every query. The database itself had no idea which firm was asking. And no test ever asked "can one firm's request see another firm's rows?" for every table. This chapter fixes all three. The database refuses other companies' rows by itself ([19.8](row-level-security.md)). The company reaches the database for one transaction, from the token and nowhere else ([19.9](one-company-per-transaction.md)). And the data matrix asks that question of every table, on every build ([19.12](proving-the-data-stays-apart.md)).

![Three failures and their fixes, in three rows. First: the only guard was a filter every developer had to remember, fixed by row-level security on every table, in the database. Second: the database did not know which firm was asking, fixed by setting the company for one transaction from the checked token, in the connector. Third: no test asked whether one firm could see another's rows, fixed by a data matrix that asks it of every table, in the test suite. Below: code can forget. The database does not.](img/chapter-19-three-fixes.png)

*Figure 19.4. Three fixes, three places: the database, the connector and the tests.*

## How the plugin grows

| Chapter | What it adds to the plugin |
| --- | --- |
| 16 | Skills, a command and a ready-made connector |
| 17 | Brightline's own connector: four read-only tools, written by coding agents, and put online with a shared key |
| 18 | Real sign-in. Each person signs in and picks a company, and the connector knows who may act for which company |
| 19 | The business data in a database, each company's rows kept apart by the database itself, each company's own rules, and policy search by meaning with citations |
| 20 | Its own screens inside the chat, a read-only review of open invoices, and its skills served over MCP. Every button press is checked as the person signed in |
| 23 | An agent that runs on a server inside a web page Brightline's staff already use, holding each person's tokens for them |

The plugin's files do not change in this chapter. The connector's address stays the same, and its four tools keep their names. Two tools answer differently: `get_purchase_order` now says whether an invoice needs approval under the company's own threshold, and `search_policy` searches by meaning and can abstain.

## In this chapter

This chapter teaches three public, open things. The first is SQL, the language for asking a relational database questions ([19.2](tables-rows-and-keys-from-zero.md)). The second is Postgres, the database server, with its row-level security. The third is pgvector, the Postgres add-on for searching by meaning. Concepts [19.1](why-a-database-now.md) to [19.17](a-database-behind-a-stateless-server.md) teach them and name no other product, except the three coding agents in the At work stories. [19.18](how-todays-tools-realize-it.md) shows how today's products realize them.

**No background needed.** You need no earlier knowledge of databases. Concept [19.2](tables-rows-and-keys-from-zero.md) starts from zero: tables, rows, columns, keys and SQL. Concept [19.3](reading-sql.md) teaches you to read SQL the way Chapters [13](../programming-fundamentals/overview.md) and [14](../structuring-programs/overview.md) taught you to read TypeScript and Python: predict, then run. Concept [19.13](retrieval-from-zero.md) does the same for embeddings and vector search. Postgres, pgvector and Neon are each explained before they are used.

**You read SQL. You never write it.** Every piece of SQL in this chapter is short, has its meaning in plain words beside it, and is the kind a coding agent wrote in the lab. Lines that start with `--` are notes for people, and the database skips them.

**The essential path.** Read this overview, Concepts [19.1](why-a-database-now.md) to [19.17](a-database-behind-a-stateless-server.md) and field guide sections [F0](field-guide-business-data-and-retrieval.md#f0-the-repository-you-start-with-and-the-secrets-on-your-computer) to [F4](field-guide-business-data-and-retrieval.md#f4-embeddings-and-vectors-from-zero). Read any other section when the lab sends you there, then do the lab's core tasks. [19.18](how-todays-tools-realize-it.md) and [F5](field-guide-business-data-and-retrieval.md#f5-the-sql-in-detail) are reference.

**Part A. A database for the business.**

- [19.1](why-a-database-now.md) Why a database now
- [19.2](tables-rows-and-keys-from-zero.md) Tables, rows and keys, from zero
- [19.3](reading-sql.md) Reading SQL: predict, then run
- [19.4](designing-the-ap-tables.md) Designing the AP tables
- [19.5](third-normal-form-in-detail.md) Third normal form in detail: keep it, break it on purpose
- [19.6](changing-the-tables-safely.md) Changing the tables safely

**Part B. Keeping each company's data apart.** The heart of the chapter. Chapter 18 did this for sign-in: who may act for which company. This part does it for the data: whose rows are whose.

- [19.7](three-ways-to-keep-data-apart.md) Three ways to keep data apart
- [19.8](row-level-security.md) Row-level security
- [19.9](one-company-per-transaction.md) One company per transaction
- [19.10](where-the-guarantee-stops.md) Where the guarantee stops
- [19.11](each-companys-own-rules-and-data.md) Each company's own rules and data
- [19.12](proving-the-data-stays-apart.md) Proving the data stays apart

**Part C. Answers from documents, with citations.**

- [19.13](retrieval-from-zero.md) Retrieval from zero
- [19.14](embeddings-and-pgvector-in-depth.md) Embeddings and pgvector in depth: predict, then run
- [19.15](answers-that-cite-or-abstain.md) Answers that cite, or abstain
- [19.16](measuring-retrieval.md) Measuring retrieval

**Part D. Running it.**

- [19.17](a-database-behind-a-stateless-server.md) A database behind a stateless server
- [19.18](how-todays-tools-realize-it.md) How today's tools realize it (reference, skim it)

Then: the field guide ([F0](field-guide-business-data-and-retrieval.md#f0-the-repository-you-start-with-and-the-secrets-on-your-computer) to [F8](field-guide-business-data-and-retrieval.md#f8-how-todays-tools-realize-it-in-detail)), [Lab 19](lab.md) and Check yourself.

**Five sittings.** The lab takes about 10 hours 25 minutes in five sittings, or 10 hours 50 minutes with the optional Task 11b. The sittings cover a database for the business, the connector on the database, proving the data stays apart, answers from documents, and branches and deploying. The core path, without the extensions, takes about 10 hours 5 minutes. Task 11, the code review, is part of the core path.



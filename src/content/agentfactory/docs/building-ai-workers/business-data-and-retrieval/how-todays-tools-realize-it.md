# 19.18 How today's tools realize it (/building-ai-workers/business-data-and-retrieval/how-todays-tools-realize-it)

---
type: Document
title: "19.18 How today's tools realize it"
description: "How Neon, Hyperdrive, Workers AI, Anthropic, OpenAI and open source realize the chapter, with free plans, prices and the differences that change a decision."
status: stable
order: 319.18
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:37Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.18" ]
objectives:
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-04
sources:
  - id: neon-roles
    title: "Manage roles (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/manage/roles
  - id: hyperdrive-caching
    title: "Query caching (Cloudflare, accessed 2026-11-04)"
    resource: https://developers.cloudflare.com/hyperdrive/concepts/query-caching/
  - id: bge-m3-card
    title: "BAAI/bge-m3 model card (Hugging Face, accessed 2026-11-04)"
    resource: https://huggingface.co/BAAI/bge-m3
  - id: pgvector
    title: "pgvector README (pgvector, accessed 2026-11-04)"
    resource: https://github.com/pgvector/pgvector
  - id: so-survey-2026
    title: "2026 Developer Survey: Technology (Stack Overflow, accessed 2026-11-04)"
    resource: https://survey.stackoverflow.co/2026/technology
  - id: databricks-neon
    title: "Databricks agrees to acquire Neon (Databricks, accessed 2026-11-04)"
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
  - id: neon-architecture
    title: "Neon architecture (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/introduction/architecture-overview
  - id: neon-branching
    title: "Branching (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/introduction/branching
  - id: neon-backup
    title: "Backup and restore (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/guides/backup-restore
  - id: anthropic-embeddings
    title: "Embeddings (Anthropic, accessed 2026-11-04)"
    resource: https://platform.claude.com/docs/en/build-with-claude/embeddings
  - id: voyage-pricing
    title: "Pricing (Voyage AI, accessed 2026-11-04)"
    resource: https://docs.voyageai.com/docs/pricing
  - id: openai-embeddings
    title: "Embeddings (OpenAI, accessed 2026-11-04)"
    resource: https://developers.openai.com/api/docs/guides/embeddings
  - id: openai-file-search
    title: "File search (OpenAI, accessed 2026-11-04)"
    resource: https://developers.openai.com/api/docs/guides/tools-file-search
  - id: openai-embedding-small
    title: "text-embedding-3-small (OpenAI, accessed 2026-11-04)"
    resource: https://developers.openai.com/api/docs/models/text-embedding-3-small
  - id: neon-plans
    title: "Plans (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/introduction/plans
  - id: neon-versions
    title: "Postgres version policy (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/postgresql/postgres-version-policy
  - id: neon-extensions
    title: "Postgres extensions (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/extensions/pg-extensions
  - id: neon-pooling
    title: "Connection pooling (Neon, accessed 2026-11-04)"
    resource: https://neon.com/docs/connect/connection-pooling
  - id: hyperdrive-pricing
    title: "Hyperdrive pricing (Cloudflare, accessed 2026-11-04)"
    resource: https://developers.cloudflare.com/hyperdrive/platform/pricing/
  - id: hyperdrive-limits
    title: "Hyperdrive limits (Cloudflare, accessed 2026-11-04)"
    resource: https://developers.cloudflare.com/hyperdrive/platform/limits/
  - id: hyperdrive-how
    title: "How Hyperdrive works (Cloudflare, accessed 2026-11-04)"
    resource: https://developers.cloudflare.com/hyperdrive/concepts/how-hyperdrive-works/
  - id: wrangler-hyperdrive
    title: "Wrangler Hyperdrive commands (Cloudflare, accessed 2026-11-04)"
    resource: https://developers.cloudflare.com/workers/wrangler/commands/hyperdrive/
  - id: workers-ai-pricing
    title: "Workers AI pricing (Cloudflare, accessed 2026-11-04)"
    resource: https://developers.cloudflare.com/workers-ai/platform/pricing/
generated:
  at: 2026-11-15T11:19:37Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Reference. Skim it now, and come back when you choose products. Every product fact below was checked on its owner's pages on November 4, 2026.*

**What you will learn.** How today's products realize this chapter's ideas, what each adds and does not do, and how the design stays free to move to another host.

**Why it matters.** The design must not depend on one provider. Knowing what each product adds, and what stays the application's job, lets you choose a host, or change it later.

The standard this section measures against is the one the concepts teach: Postgres with row-level security, a transaction-only setting for the company, and pgvector for search by meaning. **The principle is portable Postgres and pgvector. The reference implementation is Neon.** The lab uses four products. Each box says what the product adds, relaxes or does not do.

| Concept | The lab's product | What it adds | What to watch |
| --- | --- | --- | --- |
| The business database ([19.1](why-a-database-now.md)) | Neon: Postgres as a service | Branches made in seconds ([19.6](changing-the-tables-safely.md)), a free plan, a database that sleeps when idle | Roles made in its dashboard skip row-level security[^neon-roles] ([19.8](row-level-security.md)). Make the connector's roles with SQL. Isolation stays the application's job |
| A connection pool online ([19.17](a-database-behind-a-stateless-server.md)) | Cloudflare Hyperdrive, between the Worker and Neon | Pools connections across every copy, and keeps them close to the database | It caches query results by default.[^hyperdrive-caching] Turn caching off for company data ([19.9](one-company-per-transaction.md)) |
| Embeddings ([19.13](retrieval-from-zero.md)) | Workers AI, running bge-m3, an open-weight model | No new account if you already use Cloudflare, and a free daily allowance | 1,024 dimensions.[^bge-m3-card] The same model must embed the passages and the questions |
| Vector search ([19.13](retrieval-from-zero.md)) | pgvector, inside Neon | HNSW, iterative index scans from version 0.8.0[^pgvector] | The version depends on the Postgres version you pick (field guide [F2](field-guide-business-data-and-retrieval.md#f2-neon-from-zero)) |

### Why is Postgres the foundation?

Postgres is also the database developers use most: it came first in the 2026 Stack Overflow Developer Survey, used by 57.9% of the developers who answered.[^so-survey-2026] That matters for an AI worker's future: more people can read its data, more hosts run it, and more tools support it.

### Why is Neon the reference?

Neon is serverless Postgres: you manage no server, and the database sleeps when idle ([19.17](a-database-behind-a-stateless-server.md)). Databricks announced in May 2025 that it was buying Neon,[^databricks-neon] and Neon's documentation now says that Neon and Databricks run the same database, Lakebase Postgres, on the same infrastructure.[^neon-architecture] Four things make it a good fit for AI workers:

- **Storage and compute are separate.** The machine that runs queries holds no data of its own, so it can stop, restart or grow without risk to the data.
- **Autoscaling.** Compute grows and shrinks with the load, and scales to zero when idle, so a quiet database costs little. Storage is still billed. The first query after a pause is slower ([19.17](a-database-behind-a-stateless-server.md)).
- **Branching.** A branch is a full copy of a database, made in seconds without copying the data: it shares the parent's stored data until something changes.[^neon-branching] The lab gives every pull request its own branch ([19.6](changing-the-tables-safely.md), [19.12](proving-the-data-stays-apart.md)).
- **Managed.** Neon runs the servers and the upgrades, and keeps a history of changes for restores (6 hours on the free plan).[^neon-backup]

Neon can host every data tenancy model in [19.7](three-ways-to-keep-data-apart.md): shared tables with row-level security or a schema per company inside one project, or a project per company. It does not make isolation correct. The roles, the policies, the transaction-only company and the tests are the application's, which is why the concepts teach them without naming any host.

### How does the design stay portable?

The lab keeps four rules, so the business data and its rules never depend on one provider:

1. The migrations are plain Postgres SQL. Nothing in them is Neon's own.
2. The roles and policies are made with SQL, in a migration, never in a dashboard.
3. The connector reaches the database only through a connection string kept outside the code. Neon's own tools appear only in the build scripts and CI, which make and delete branches.
4. The checks are plain Postgres: the role check, the query check, the data matrix and the question set.

Moving to another Postgres host that offers pgvector then takes a new connection string, one run of the migrations, a copy of the rows (a standard Postgres dump of the business database, made by the owner), and the checks. If the role check and the data matrix pass, the move is done.

**Anthropic.** Anthropic does not make an embeddings model. Its documentation says so, points to Voyage AI as one provider, and advises assessing several.[^anthropic-embeddings] Claude reaches business data only through a connector: in Claude Code, in the Claude apps, through the Messages API's connector support and in hosted agents (Chapter 23), the model calls `search_policy` and the other tools, and the connector, not the model, talks to the database. Nothing in this chapter gives Claude SQL. *Status and price.* Voyage's current models include `voyage-4-lite`, at $0.02 per million tokens after the first 200 million tokens free per account.[^voyage-pricing] Its hosted models make 1,024 dimensions by default. Choosing Voyage would mean a second account and key, and embedding every passage again.

**OpenAI.** OpenAI makes embeddings models, `text-embedding-3-small` (1,536 dimensions by default) and `text-embedding-3-large` (3,072), with a setting to shorten them.[^openai-embeddings] It also runs retrieval for you: its file search tool in the Responses API searches files you upload to its vector stores.[^openai-file-search] That is the main alternative to this chapter's design: OpenAI holds the documents and the index. You then cannot put the company in a database policy. OpenAI lets you filter one store by file attributes, but then the AI app must apply the filter every time, so this chapter would keep each company's documents in a separate vector store, and prove that separation another way. *Status and price.* `text-embedding-3-small` costs $0.02 per million tokens.[^openai-embedding-small] File search is billed for storage and for calls, on OpenAI's pricing page.

**Open source.** Postgres and pgvector are open source, and every concept in this chapter runs on a Postgres you install yourself. Every offline step of the lab has been run on Postgres 16.15 with pgvector 0.6.0 on one computer. That version has no iterative scans, which the hosted versions do. bge-m3 is open weight, so the same model can run on your own hardware, and the stored embeddings stay comparable. *Security.* With your own Postgres, every role is yours to make, so the rule is the same: the connector's role is made with SQL, with no bypass right, and the role check runs against it. *Status and price.* Free software. You pay for the computer it runs on.

### What do the free plans give?

The lab's services and their free plans, as checked:

- Neon: free, with no card required. 100 projects, 10 branches per project, 1 GB of storage per project, 100 compute-hours per project per month, and the database stops after 5 minutes idle, which cannot be turned off on the free plan.[^neon-plans] It supports Postgres 14 to 18.[^neon-versions] pgvector is 0.8.0 on Postgres 14 to 17, and 0.8.6 on Postgres 18.[^neon-extensions] Its pooled connection addresses (with `-pooler`) do not support session-level `SET`[^neon-pooling] (the connection-wide setting of [19.9](one-company-per-transaction.md)): a setting may outlive the transaction and reach another client's queries. This chapter's transaction-only setting is the safe kind.
- Hyperdrive: included in the free Workers plan, with 100,000 queries a day,[^hyperdrive-pricing] 10 configurations, and about 20 connections to the database per configuration.[^hyperdrive-limits] It pools in transaction mode (a connection goes back to the pool after each transaction) and resets each connection when it returns to the pool.[^hyperdrive-how] It caches read-only results for 60 seconds by default. `wrangler hyperdrive create --caching-disabled` turns that off.[^wrangler-hyperdrive]
- Workers AI: 10,000 neurons (Cloudflare's unit of use) a day free. bge-m3 costs 1,075 neurons per million input tokens, so the free allowance covers about nine million tokens a day. Paid use is $0.011 per thousand neurons.[^workers-ai-pricing]

### What differs between hosted retrieval and retrieval you run?

Hosted retrieval (OpenAI's file search) against retrieval you run (this chapter):

| | Retrieval you run | Hosted retrieval |
| --- | --- | --- |
| Who holds the documents | Your database | The provider |
| Where the company is enforced | A database policy on every row, tested by the data matrix | Which store you search. Your code must pick the right one every time |
| What you can test | Every row, every role, every query, in CI | The answers you get back |
| What it costs | A small database and an embeddings model | Storage and calls |

### What must stay true on any host?

The database decides which company's rows a request may see, from a company set for that one transaction by code that read it from a verified token. No role the connector uses can skip that, and no query, cache or error lets one company learn anything about another.

**Exam note.** Retrieval appears in the Claude developer certification exam (CCDV-F) as context management. Data from one customer reaching another is examined under injection, untrusted input and leakage. The exam examines Claude, not these products.

[^neon-roles]: Manage roles, Neon.
[^hyperdrive-caching]: Query caching, Cloudflare.
[^bge-m3-card]: BAAI/bge-m3 model card, Hugging Face.
[^pgvector]: pgvector README, pgvector.
[^so-survey-2026]: 2026 Developer Survey: Technology, Stack Overflow.
[^databricks-neon]: Databricks agrees to acquire Neon, Databricks.
[^neon-architecture]: Neon architecture, Neon.
[^neon-branching]: Branching, Neon.
[^neon-backup]: Backup and restore, Neon.
[^anthropic-embeddings]: Embeddings, Anthropic.
[^voyage-pricing]: Pricing, Voyage AI.
[^openai-embeddings]: Embeddings, OpenAI.
[^openai-file-search]: File search, OpenAI.
[^openai-embedding-small]: text-embedding-3-small, OpenAI.
[^neon-plans]: Plans, Neon.
[^neon-versions]: Postgres version policy, Neon.
[^neon-extensions]: Postgres extensions, Neon.
[^neon-pooling]: Connection pooling, Neon.
[^hyperdrive-pricing]: Hyperdrive pricing, Cloudflare.
[^hyperdrive-limits]: Hyperdrive limits, Cloudflare.
[^hyperdrive-how]: How Hyperdrive works, Cloudflare.
[^wrangler-hyperdrive]: Wrangler Hyperdrive commands, Cloudflare.
[^workers-ai-pricing]: Workers AI pricing, Cloudflare.



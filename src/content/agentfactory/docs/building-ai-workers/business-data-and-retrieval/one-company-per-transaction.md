# 19.9 One company per transaction (/building-ai-workers/business-data-and-retrieval/one-company-per-transaction)

---
type: Document
title: "19.9 One company per transaction"
description: "Set the company for one transaction only, so a pooled connection never carries one company into another's query, and keep a cache from mixing companies."
status: stable
order: 319.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:37Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.9" ]
objectives:
  - { id: CCDV-F.D7.S1, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-15T11:19:37Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A coat check hands out a numbered ticket with every coat. The ticket goes with that one coat, and is torn up when the coat goes home. Nobody writes "current customer: table 4" on the counter for the next person to find. The counter is shared. The ticket is not.

**What you will learn.** Why each tool call sets the company for itself alone, so one call's company is never left behind for the next, and why a cache needs the company too.

**Why it matters.** A program's open lines to the database are shared and reused. A company set on the line itself stays behind after the call ends, and the next query on that line can read the wrong company's rows.

**One request, start to finish.** Two calls, first Ana's and then Luis's, reach one copy of the connector, which keeps a small **pool** of open connections to the database and lends one to each tool call. Both calls happen to borrow the same connection:

1. **Ana's call** borrows the connection, starts a transaction, sets the company to Brightline *for this transaction only*, reads Brightline's open invoices, and commits.
2. **The connection goes back to the pool.** Its company setting ended with the commit.
3. **Luis's call** borrows the same connection, starts a transaction, sets Cedar Ridge for this transaction only, reads Cedar Ridge's invoices, and commits.

Now the wrong version. Ana's call sets the company for the whole connection instead of for its transaction. It commits, and the connection goes back to the pool *still set to Brightline*. If any query on that connection runs before Luis's call sets its own company, it reads Brightline's rows. This was tried on the lab's database: after a connection-wide setting, the next transaction on the same connection, which set nothing, read `Midwest Packaging Co.`, a Brightline vendor.

### What is a transaction?

A transaction is a group of statements that succeed or fail together. It starts with `BEGIN` and ends with `COMMIT`, which keeps its changes, or `ROLLBACK`, which undoes them. A connection is one open line between a program and the database, and connections are slow to open, so programs keep a pool of them and reuse them. A **pooled connection** serves many requests, one after another, often for different companies. So the company must die with the transaction:

```sql
BEGIN READ ONLY;
SELECT set_config('app.tenant_id', $1, true);   -- $1 is the company, from the request context
-- ... the tool's queries ...
COMMIT;
```

The wrong version differs by one word:

```sql
SELECT set_config('app.tenant_id', $1, false);  -- WRONG: stays on the connection after COMMIT
```

In plain words: start a read-only transaction, set `app.tenant_id` to the request's company, with `true` meaning "for this transaction only", run the queries, and commit. `set_config` takes the company as a **parameter**, `$1`: a value sent beside the SQL text, never pasted into it. The difference matters. Pasted text becomes part of the command, so a value such as `x' OR 'a'='a` would change what the query does and could match every company. A parameter is only ever read as a value ([19.10](where-the-guarantee-stops.md)). After the commit, the setting is gone. On the lab's database, the next query on the same connection read the setting as an empty string, not the null of [19.8](row-level-security.md), because this connection had set it before. Neither matches any company, so it saw zero rows.

![Two halves. Left, pasted into the text: a value arrives, x quote OR quote a equals a. Pasted into the SQL, the query reads WHERE tenant_id equals x OR a equals a, with the pasted part outlined in red. A note: the pasted value became part of the command, and a equals a is true for every row. A red cross: matches every company's rows. Right, sent as a parameter: the query reads WHERE tenant_id equals dollar one, and the same value travels beside it in a separate box. A green tick: read only as a value, no company has that id, so zero rows.](img/chapter-19-parameter.png)

*Figure 19.16. A value pasted into SQL can change the command. A parameter is only ever a value.*

### What does it mean to fail closed?

A transaction-only setting has one more property. If any code path forgets to set the company, it sees nothing: no rows, an empty answer, an obvious bug. A connection-wide setting fails open: a path that forgets reads whichever company the connection served last, and the bug looks like data. Always prefer the mistake that shows.

### Can a cache mix companies?

A cache is a shared counter too. Some services between a program and its database remember recent query results and hand them out again, to save time. Such a **query cache** is a shared note, like [18.11](../securing-connectors/one-order-slip-per-request.md)'s: it recognizes "the same query" by its SQL text and its parameter values. It looks at each query on its own, not at the `set_config` line that came before it, so it never sees which company was set. If two companies send the same text with the same values, it may hand one company the other's cached rows, because the company lives in a setting the cache does not see. For example, Ana's call and Luis's call both send `SELECT ... FROM vendors`, with no parameters. To the cache they are the same query, so Luis could get Ana's cached rows. Now both send `SELECT ... FROM vendors WHERE tenant_id = $1`, Ana's with `$1 = org_brightline` and Luis's with `$1 = org_cedar`. The values differ, so the cache treats them as two different queries. Two rules close this, and the lab uses both:

- **Caching off for company data.** The connector's connection service (the service between the connector's copies and the database, [19.17](a-database-behind-a-stateless-server.md)) is set up with its cache disabled (field guide [F3](field-guide-business-data-and-retrieval.md#f3-hyperdrive-from-zero)).
- **The company is a parameter in every query, as well.** Every query the connector runs says `WHERE tenant_id = $1`, beside the policy. So the company is one of the parameter values, and no two companies' queries are ever the same query. A check reads the connector's code and fails if any query leaves it out.

Each lock covers the other. If the cache were ever switched on by mistake, the parameter keeps the queries apart. If a filter were ever left out, the policy still hides the other company's rows.

### Where does the company come from?

The value of `$1` comes from the request context [Chapter 18](../securing-connectors/overview.md) built, the locked order slip written at the token check. Never from a tool's input, a header, or the model's words ([18.11](../securing-connectors/one-order-slip-per-request.md), rule 3). [Chapter 20](../mcp-apps/who-a-click-acts-as.md) adds calls that no model chose: buttons on the connector's own screen. They arrive with the same token, so each one gets the same single transaction, for the company in that token.

**At work.** In [Lab 19](lab.md), Task 5, the builder asks Claude Code for the tests first. One test runs 200 pairs of calls, Ana's and Luis's at once, through one copy. Another, in the data matrix, borrows a single pooled connection 200 times, alternating companies, and checks that between transactions the connection sees nothing. Both pass with `set_config(..., true)`. (The data matrix also has a separate check of 100 pairs through both connectors: [19.12](proving-the-data-stays-apart.md).) In Task 9, OpenCode changes `true` to `false`, moves one query onto a second connection and drops its company parameter, and the checks catch it. With the parameter kept, `false` on its own leaks nothing, because every query names its company too, so only the query check catches `false` alone ([19.12](proving-the-data-stays-apart.md)).

**The operating rule:** one tool call, one transaction, with the company set for that transaction only, from the request context. Turn caching off for company data, and name the company as a parameter in every query as well.

![One pooled connection drawn as a pipe between the connector and the database, serving two transactions one after the other. Top row, the right way: Ana's transaction opens, a tag reading Brightline is attached for this transaction only, and falls off at the commit. Then Luis's transaction opens with its own tag, Cedar Ridge. Between them, the pipe carries no tag, labeled sees nothing. Bottom row, the wrong way: the Brightline tag is tied to the pipe itself, and is still there when the next query arrives with no company set, labeled reads Brightline's rows.](img/chapter-19-one-transaction.png)

*Figure 19.17. Set the company for the transaction, not the connection. Between transactions, a shared connection sees nothing.*



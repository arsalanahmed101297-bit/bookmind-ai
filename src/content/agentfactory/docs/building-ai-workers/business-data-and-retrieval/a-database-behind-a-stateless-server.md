# 19.17 A database behind a stateless server (/building-ai-workers/business-data-and-retrieval/a-database-behind-a-stateless-server)

---
type: Document
title: "19.17 A database behind a stateless server"
description: "A connection pool with a limit, one transaction per tool call, a time limit on connecting and on every query, and clear errors, behind a stateless server."
status: stable
order: 319.17
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-04T22:13:33Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.17" ]
objectives:
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-04T22:13:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A taxi stand at an airport keeps a short line of cabs waiting, instead of calling one from across town for every traveler. The line has a limit, so the airport road does not fill with cabs. And if no cab comes within a few minutes, the dispatcher says so, instead of leaving travelers standing in silence.

**What you will learn.** How a stateless connector uses a database: a pool of connections with a limit, one transaction per tool call, time limits, and clear errors when the database is slow.

**Why it matters.** A burst of calls can use up the database's connections, and a sleeping database is slow to answer. Without limits and clear errors, the user sees a crash or silence instead of what to do next.

**One request, start to finish.** At 7:58 on Monday morning, after a quiet weekend, Ana asks for Brightline's open invoices.

1. **The tool call borrows a connection** from the pool. The connector's copies are stateless ([17.4](../connectors-and-mcp/stateless-servers.md)): none keeps anything from one request to the next. The database is the shared state they all read, which [17.4](../connectors-and-mcp/stateless-servers.md) already allowed: "Stateless means no copy keeps anything in its own memory. It does not mean nothing is stored anywhere."
2. **The database is asleep.** The lab's free database stops itself after a few minutes with no queries, and wakes on the next one. Waking takes a moment, so this first call is slower than the ones after it. How much slower depends on the service and the day. The lab asks you to measure it (Task 16).
3. **Two time limits apply.** Connecting may take five seconds, which covers the wait while the database wakes. After that, every query has three seconds, set for the transaction. Had either run out, the tool would have answered: "The AP database did not answer in time. It may be waking up. Try again in a few seconds." That is a structured error that says what to do next ([17.3](../connectors-and-mcp/errors-that-say-what-to-do-next.md)), not a crash and not silence.

### What is a connection pool?

Opening a connection to a database takes time, so programs keep a **connection pool**: a few open connections, lent to one call at a time and returned after. A pool also sets a limit, so a burst of calls cannot open more connections than the database allows. The lab's TypeScript copy keeps a pool of five on your computer. That pool lives inside one copy of the connector. Online there are many copies, so a connection service sits between them and the database and keeps one shared pool for all of them. Each request borrows from that shared pool (field guide [F3](field-guide-business-data-and-retrieval.md#f3-hyperdrive-from-zero)). Three more rules complete it:

- **A time limit on connecting, and one on every query.** The query time limit is set in the same opening line as the company, at the start of each transaction (`set_config('statement_timeout', ...)` beside `set_config('app.tenant_id', ...)`). Both turn into the same structured error.
- **Limits that matter, written down:** queries a day, stored data and compute hours on the free plans ([19.18](how-todays-tools-realize-it.md)), and the database's own connection limit.
- **Where business data must never appear:** logs, traces and error text ([19.10](where-the-guarantee-stops.md), gap 6).

**At work.** The data matrix found a real bug here. Its two-companies-at-once check sends 100 pairs of calls, Ana's and Luis's, at once, through one copy. The TypeScript copy passed. The Python copy failed 108 of 200: not a leak, but "The AP database is not reachable right now." The Python copy opened a new connection for every call, 200 at once, past the local database's limit of 100. (A hosted database's limit depends on its size.) Codex added a limit of ten open connections per copy, and the check passed. The failure was the safe kind: an error, never the wrong company's rows.

**The operating rule:** borrow connections from a pool with a limit, one transaction per tool call, put a time limit on every query, and turn every database failure into a structured error that says what to do next.

![One tool call's path drawn left to right: the request arrives at a copy of the connector, borrows a connection from a pool of five, starts a transaction with the company and a three-second time limit, sends its queries to the database, commits, and returns the connection. Above the database, a moon icon labeled asleep after a few idle minutes, and a clock showing the first call waiting while it wakes. A branch from the time limit to a box with the structured error: the AP database did not answer in time, it may be waking up, try again in a few seconds. Above, a note: on your computer, one copy of the connector with its own pool of five. Online, many copies, and the connection service keeps one pool shared by all of them.](img/chapter-19-pool-and-timeout.png)

*Figure 19.29. A pool with a limit, one transaction per call, a time limit on every query, and a clear error when it runs out.*



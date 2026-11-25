# 18.16 Watching who did what (/building-ai-workers/securing-connectors/watching-who-did-what)

---
type: Document
title: "18.16 Watching who did what"
description: "Going further. One audit line per call, filtered by company, never the token or the content."
status: stable
order: 318.16
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-02T18:20:57Z
chapter: "18"
part: III
expert_status: builder-only
concepts: [ "18.16" ]
objectives:
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-02T18:20:57Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Going further. The lab's connector already writes one log line per call. This section explains what it is for.*

**In everyday life.** An office building's door system records each badge swipe: which badge, which door, what time, opened or refused. When a company asks "who went into our storeroom on Tuesday?", the building can answer for that company's doors, without showing anyone else's.

**What you will learn.** What one log line per call can tell you, and how to answer a company about its own activity.

**Why it matters.** When a customer asks who read its data, these lines are the answer, and they must show nobody else's.

**One question, start to finish.** Brightline's owner asks: "Who read our vendor list last Tuesday?" The builder asks a coding agent to search the connector's logs for Tuesday, March 16, 2027, filtered to Brightline and to `find_vendor`. The answer is three lines, naming two people and the AI app each used. Nothing from any other company appears, because the filter is the company.

### What is an audit line?

An **audit line** is one log line per call that records who did what, for which company, and how it ended:

| Field | Example |
| --- | --- |
| event | tools/call (a tool call) |
| company | org_brightline |
| person | u_priya |
| app (client ID) | `https://app.example/oauth/client.json` |
| tool | find_vendor |
| outcome | ok |
| ms | 42 (how long the call took, in milliseconds) |

The outcome is one of seven words. `ok`. `tool_error`: the tool answered with an error. `no_data`: the company has no data yet ([18.12](what-else-carries-the-company.md) rule 7). `insufficient_scope`: the 403 of [18.7](permission-per-tool.md). `company_input`: a call that named a company, refused (rule 3). `rate_limited`: a call over the limit (rule 5). `error`: the server itself failed. There is no line for a 401: a call refused before its token is checked has no company or person to name (rule 6). The line holds no time of its own. The log system stamps each line with the time it arrived, for example Tuesday, March 16, 2027, 2:03 p.m. UTC (the world's reference clock).

It never holds the token, a tool's inputs or its results. It holds identities and outcomes: enough to answer "who, when, what", and nothing an attacker could use.

### How do you answer a company about its own activity?

Every search of the logs for a customer is filtered by that customer's company first. A company may see its own lines, never another's, and never whether another exists.

### What trouble can the lines show?

Audit lines show patterns no single request can: one person's token used from two very different places within minutes, a burst of `insufficient_scope` lines from one app trying tools it may not use, or one company suddenly calling a hundred times more than usual.

### What can it not show?

Like 17.10's traces, an audit line shows that a call ran, by whom, and how it ended. It does not show that the right person made it for the right reason. If Luis's laptop is stolen while his app is signed in, the lines say "Luis". That is why tokens are short-lived.

**At work.** The builder adds the audit fields to the log line both versions of the connector already write, and asks OpenCode for a check that the line for a call holds company, person and app, and no token.

**The operating rule:** write one audit line per call with company, person, app, tool, outcome and time taken, never the token or content, and filter every answer to a customer by its company first.

![One audit line laid out field by field: time (stamped by the log system), company, person, app, tool, outcome, duration, each with an example value. Under it, crossed out: the token, the tool's inputs, the tool's results. To the right, a filter box: company equals org_brightline, applied before any search.](img/chapter-18-audit-line.png)

*Figure 18.19. One call's audit line. Identities and outcomes, never the token or the content.*



# 17.10 Watching a connector (/building-ai-workers/connectors-and-mcp/watching-a-connector)

---
type: Document
title: "17.10 Watching a connector"
description: "Going further. Following one request through the AI app and the server, recording counts but never content."
status: stable
order: 317.10
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T06:58:12Z
chapter: "17"
part: III
expert_status: co-build
objectives:
  - { id: CCDV-F.D8.S2, label: direct }
concepts: [ "17.10" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-05T06:58:12Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A package-tracking page shows each scan: picked up, sorted, out for delivery. The warehouse keeps its own records: which shelf, which belt. Joined by the tracking number, the two tell the story of a late package. Neither says whether the right item is in the box.

**What you will learn.** How to follow one request through the AI app and the connector, and what such a record can and cannot prove.

**Why it matters.** When a run is slow or wrong, only the connector's own records show what happened inside it.

*Going further. The lab's servers already write one log line per request. This section shows how to follow one request through both the AI app and the connector.*

**One request, start to finish.** Ana asks why sorting her open invoices took 40 seconds. The builder looks at two records of that run, side by side:

- **The AI app's record** shows three calls to `list_open_invoices` ([17.4](stateless-servers.md)), then 14 calls to `get_purchase_order`, one per open invoice plus a repeat, about 6 seconds in all. The rest of the 40 seconds was the model reading and writing. The slowest call took 1.8 seconds. The repeat was INV-8310, the invoice with no purchase order.
- **The connector's record**, joined to the same run, shows why. Most of the slowest call's 1.8 seconds went to reading data files. And the first of the two identical calls returned the missing-PO tool error. The model tried again even though the error said to tell the AP lead. So the error's wording, or the tool's description, needs work.

Neither record says whether Ana's answer was right. Acceptance check A6, "Is INV-8310 ready to pay?", with the answer Ana expects, says that. This joined view needs a viewer program. In the lab you see the connector's side only.

### What is a trace?

**OpenTelemetry** is an open standard for programs to write timed records of their work in one shared format, so any viewer can read them. A log line says one thing happened. A **trace** shows each step and how long it took. Three words are enough here:

- A trace is the record of one request, start to finish, such as Ana's 40-second run.
- A **span** is one timed step inside a trace, such as one tool call. Spans can sit inside other spans.
- **Attributes** are labels on a span, like "which tool" or "did it fail".

In [Chapter 16](../skills-and-plugins/watching-it-run.md) you could watch only from the AI app's side. Now the connector is your code, so you can add its side.

### What can each side see?

| | The AI app sees | Only the connector sees |
| --- | --- | --- |
| Each tool call | That it was called, approved or denied, how long it took, and whether it failed | What happened inside: which files it read, how many invoices matched, why it failed |
| Cost | Model usage and its cost | Nothing, unless the connector calls a model itself |
| Was the answer right? | Nothing | Nothing. Tests and acceptance checks say that |

### How are the two sides joined?

The AI app can put a short ID for the trace inside each message it sends. A connector that reads it records its spans as part of the same trace, and both sides can send their records to the same viewer, a program for reading traces. If the app sends no ID, the connector's spans still exist, but stand alone. In the lab you see only the connector's side, printed on your computer (field guide [F7](field-guide-connectors.md#f7-seeing-the-servers-spans)). Joining the AI app's side needs a viewer, which the lab does not use.

### What should the records be called?

OpenTelemetry has agreed names for what to record about an MCP call. For example, the span for a call to `find_vendor` is named `tools/call find_vendor`, after the message from [17.1](mcp-in-one-picture.md). Use the agreed names, so any viewer understands your records. They are still a draft, so they may change. Field guide [F8](field-guide-connectors.md#f8-the-protocol-in-detail) lists them.

### What should the records leave out?

Content. A tool's inputs and replies can hold private data, so the agreed names leave them out unless you opt in. Brightline never does. The connector records which tool ran, how long it took, how many invoices matched, and whether it failed. Never names, notes, account numbers or keys.

**At work.** The builder has the agent add one span per tool call, with the agreed names, an invoice count, and a smaller span for reading data. First the agent checks whether the MCP code library it uses already records each call, to avoid recording every call twice. In the project's notes file, `NOTES.md`, the builder names acceptance check A6, not the trace, as the evidence that the missing-PO answer was right.

**The operating rule:** record each call in the connector with the agreed names, join the AI app's trace when it sends one, record counts and outcomes but never content, and take correctness from tests, not traces.

![One trace drawn left to right over time. At the top, dashed, the AI app's record of a tool call to get_purchase_order, joined only if the app sends a trace ID. Under it, two connector copies each record a tools/call get_purchase_order span, the first with a tool error, each with a smaller span for reading data. They are joined by a trace ID inside each message. Beside the trace, a separate box: acceptance check A6, pass, the evidence.](img/trace.png)

*Figure 17.17. The connector's spans join the AI app's trace when it sends one. The acceptance check, not the trace, says the answer was right.*



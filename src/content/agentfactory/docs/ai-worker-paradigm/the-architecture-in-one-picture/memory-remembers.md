# 4.3 Memory remembers (/ai-worker-paradigm/the-architecture-in-one-picture/memory-remembers)

---
type: Document
title: "4.3 Memory remembers"
description: "What a worker should remember, which source wins when what it remembers disagrees with the record, and a test that shows whether anything is stored in the wrong place."
status: stable
order: 104.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.3" ]
last_verified: 2026-10-04
sources:
  - id: v1-system-of-context
    title: "The System of Context (Panaversity, first edition, verified 2026-10-04)"
    resource: https://agentfactory1.panaversity.org/docs/ecosystem/system-of-context
  - id: dsor
    title: "DSoR, the Data System of Record (Panaversity, GitHub, verified 2026-10-04)"
    resource: https://github.com/panaversity/dsor
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** In the restaurant from [4.1](five-layers.md), the cook remembers what the regulars like and which drawer holds the scales. When the cook's memory of a dish differs from the recipe book, the book wins.

**Memory** is the worker's continuity: preferences, experience and where to look. It is useful. A worker can remember that Maria wants the register sorted by due date, or that one vendor sends each invoice as two PDFs. That saves people from repeating themselves. In today's products, memory belongs to a person's account or to a project, never to the worker. Each project keeps a memory of its own, as [4.8](both-ai-vendors.md) records.

## Who wins when memory disagrees with the record?

Memory has one hard limit: **it is never authoritative.** The precedence rule, which decides who wins, is short.[^dsor]

- **For what the company knows, the approved knowledge (KSoR) wins.** If memory says the approval limit is $10,000 and the approved policy says $5,000, the answer is $5,000.
- **For where a piece of work stands, the case file (SSoR) wins.** If the invoice's status in the register says "approved by Dave", typed in by the worker because of an email, and its case file shows it waiting for Dave's approval of the run, the case file wins.
- **For current state, the company's systems win, read through the governed door (DSoR).** If memory says Lakeshore is Net 30 and the vendor record in the accounting system says Net 15, the answer is Net 15.
- **A typed status is a claim, not a fact.**
  - A *fact* is current state that the system made from its own event: Dave's approval from his own login, or the bank's payment.
  - A *claim* is a status anyone can type, such as the one the worker set. A claim loses to the case file's recorded steps ([4.5](dsor-acts.md#why-must-the-checks-live-in-the-system)).
- **Memory only says where to look.** A good memory entry reads "Lakeshore's terms changed in August, so check the vendor record." A bad one reads "Lakeshore is Net 30." A pointer that is true for every run, such as "terms are in the vendor record", belongs in the Role Contract's knowledge sources. Memory holds what one run learned.

![Who wins when memory disagrees with the record. A table with four rows. Knowledge: KSoR wins, and memory never overrides approved knowledge. If memory says the approval limit is $10,000 and AP policy v3 says $5,000, the answer is $5,000. Where the work stands: SSoR wins, and the case file outranks a typed status or a remembered note. If the register says approved by Dave and the case file says waiting for Dave's approval of the run, the case file wins. Current state: the company's systems win, read through DSoR. If memory says Lakeshore is Net 30 and the vendor record says Net 15, the answer is Net 15. Facts against claims: system-made facts beat typed claims, and memory cannot turn a claim into a fact. Paid on October 20 by bank transfer is a fact if the bank recorded it, and a status anyone can type is only a claim. Below, memory decides nothing. It is useful for preferences, experience and where to look, it is never authoritative, and a good memory entry points to the record. A second panel asks whether tomorrow's work would still be correct if memory were wiped tonight. The banner: when memory and a record disagree, the record wins, and the disagreement is flagged to the record's owner.](img/precedence.png)

*Figure 4.2. Who wins when memory disagrees with the record. Memory decides nothing.*

## Why did Monday's answer go wrong?

Monday's failure broke this rule. The remembered fact was true in July. Facts become stale (out of date), and memory has no owner, no approval and no version to warn anyone.[^v1-system-of-context] **So memory must never be the only source for a fact or permission the worker acts on.** Approval limits, payment terms, bank details and approvals are checked against the governed source every time.

When memory and a record disagree, the record answers, and the disagreement goes into the case file, flagged to the record's owner, the AP team for a vendor record. The record may be wrong, but only its owner can change it. On that day the worker's answer is wrong and flagged, never wrong and silent.

## How do you know memory is in its place?

The **wipe test** checks it. **If the memory were wiped tonight, would tomorrow's work still be correct?** The worker may be slower. It re-reads the record, or waits to ask Maria again how she likes the register. But it must recover safely and never act on a guess. If wiping memory would make the worker wrong, something authoritative is stored in the wrong layer. On a product the test is literal: switch memory off, or open a chat that does not use it, and ask Monday's question again.

[Chapter 8](../../managing-ai-workers/context-memory-knowledge-and-state/five-places.md) explains in full how context, memory and the three records differ.

[^dsor]: DSoR, the Data System of Record, Panaversity.
[^v1-system-of-context]: The System of Context, Panaversity, first edition.



# 2.1 The anatomy of an AI Worker (/ai-worker-paradigm/what-is-an-ai-worker/anatomy-of-an-ai-worker)

---
type: Document
title: "2.1 The anatomy of an AI Worker"
description: "The sixteen elements that define an AI Worker, sorted into five groups, and four pairs of elements that are easy to confuse."
status: stable
order: 102.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "02"
part: I
expert_status: required
concepts: [ "2.1" ]
last_verified: 2026-10-12
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A family hires a babysitter for every Friday night.
Before leaving, the parents say who she is answering to and what she must
do: dinner, homework, bed by 8. They say what she may not do: no guests, no
driving. They also say whom to call if something goes wrong, and how they
will know the evening went well.

## What are the sixteen elements?

[Chapter 1](../from-chatbots-to-ai-workers/ladder-of-interaction.md) gave a short list of what an **AI Worker** has. To manage a
worker, you need the full list, sorted into the questions a manager actually asks. This
book uses a framework of sixteen elements in five groups. It is a
management checklist, not the only possible definition. The table fills
it in for Brightline: once the AP assistant has all sixteen answers, it
stops being "the assistant" and becomes the **AP Worker**.

| Group | Element | What it answers | AP Worker at Brightline |
| --- | --- | --- | --- |
| Who it is | Identity | Which account it acts as | Its own account, not a person's login |
|  | Role | Its job title | AP Worker |
|  | Mission | Why the role exists, in one sentence | Pay vendors correctly and on time, and never pay twice |
|  | Accountable human owner | Who answers for its results | The controller, by name |
| What it owes | Responsibilities | The recurring work it does | Build the weekly invoice register, answer vendor status questions |
|  | KPIs (key performance indicators) | How the business measures the role | Duplicate payments found, late fees avoided |
| What it works with | Knowledge | What is officially true | The approved AP policy |
|  | Memory | What it remembers from experience | Which vendors send scanned PDFs |
|  | Procedures (skills) | The steps it knows how to follow | How to check an invoice total |
|  | Tools | Systems it can call | Inbox, shared drive, spreadsheet |
| What bounds it | Authority | What it may observe, recommend, draft, execute (do it itself) or escalate (hand it to a person), and what it may never do | May draft, never change bank details |
|  | Escalation | When it must stop and ask, and whom | Any bank-detail change goes to the controller |
|  | Evaluations | How its behavior is tested, before and during use | Fifteen test invoices with known answers, from [Chapter 1](../from-chatbots-to-ai-workers/lab.md)'s lab |
| How it runs and is reached | Channels | Where people reach it | The team chat app, the AP inbox |
|  | Triggers | What starts its work | Monday morning, a new vendor email |
|  | Runtime | What executes it | Whatever the company chooses, replaceable |

Only one of the sixteen rows, Runtime, is machinery, and its answer is
"replaceable." The other fifteen you can write down and keep. So the
worker is the record, and any suitable machine can run it. That answers Chapter 1's
[machine or record](../from-chatbots-to-ai-workers/both-ai-vendors.md) question for workers. [Chapter 4](../the-architecture-in-one-picture/worker-is-the-records.md) builds the
architecture on that idea.

In this table, skills are the procedures the worker follows. A product
**skill** is one way to save such a procedure, and several vendors read the
same format ([2.4](surface-and-model.md), [2.5](both-ai-vendors.md)).

## Two kinds of AI Worker

The same sixteen elements describe both kinds
of worker that Chapter 1 named. Both hold a role, and they differ mainly
in three rows: responsibilities, triggers and memory.

A **Delegated AI Worker** completes a briefed task on its own machine,
then stops. The role goes on: it does each
job in its role from a brief, one job at a time.
Its trigger is the brief you give it. It needs little memory, because each
job ends when its work is done.

A **Standing AI Worker** has a persistent identity, ongoing
responsibilities and its own initiative. Its responsibilities go on
between runs without a new brief. "Its own initiative" means that its
triggers start it, with nobody asking each time: a schedule, such as
Monday morning, or an event, such as a new vendor email. Each run can
still start fresh ([2.4](surface-and-model.md#choose-the-surface-by-the-rung)).
Its memory matters, because the role continues from one week to the next.

**A schedule is a trigger, not a kind of worker.** A delegated task that
you put on a schedule is still that task, repeated. A worker is Standing
when it holds an ongoing role: a Role Contract ([2.6](role-contract.md)),
responsibilities it keeps between runs, and triggers that start it.

Brightline's AP Worker is a Standing AI Worker. Its weekly register and
its inbox duty never end. Both kinds need an owner, authority, escalation
and evaluations, and the babysitter needs them whether you call her for
one evening or she holds the Friday job all year.

![Two kinds of AI Worker, described by the same sixteen elements but
differing mainly in three rows. Both hold a role. Responsibilities: a
Delegated AI Worker does each job from a brief, one at a time, and a
Standing AI Worker carries out recurring duties between conversations.
Triggers: the brief you give it, versus schedules and events. Memory:
little needed because the job ends, versus important because the role
continues week to week. The other thirteen elements, including identity,
owner, authority, escalation and evaluations, are the same for both.
Brightline's AP Worker is a Standing AI Worker.](img/delegated-vs-standing.png)

*Figure 2.1. Delegated and Standing AI Workers differ in three of the sixteen elements.*

## Four pairs that are easy to confuse

Four pairs are easy to confuse, and each confusion causes a different
failure.

- **Tools and authority.** Tools are what the worker *can* call.
  Authority is what it *may* do. Brightline's assistant could edit the
  register, so it did. Nobody had said it must not.
- **Knowledge and memory.** Knowledge is the governed, official record.
  Memory helps the worker continue: preferences, experience, where to
  look. It is never the official rule, and it never overrides knowledge. Brightline's March policy
  copy was neither knowledge nor memory. It was a file that nobody
  managed.
- **KPIs and evaluations.** KPIs measure the business result of the
  role. Evaluations test the worker's behavior on cases with known
  answers. A worker can meet its KPIs for months and still fail a test
  case it has not seen before.
- **Identity and owner.** Identity is the account the worker acts as.
  The owner is the human who answers for it. Brightline had neither: the
  task ran as Maria, and Maria was not watching.

## The Brightline failure, shown on the anatomy

Every failure in the [Brightline story](overview.md#why-it-matters) matches a row of the table, as Figure 2.2 shows.

![The five groups of the anatomy, with six of the sixteen elements marked as missing or wrong at Brightline. Who it is: identity, marked "borrowed personal login," and owner, marked "no accountable owner named." What it works with: knowledge, marked "outdated policy copy." What bounds it: authority, marked "limits not defined," escalation, marked "no stop-and-ask rule," and evaluations, marked "no behavior tests." The other ten elements are unmarked. A line at the bottom reads: a capable model plus working tools does not equal a well-defined worker.](img/anatomy-failures.png)

*Figure 2.2. The Brightline failure, shown on the anatomy. Six elements were missing or wrong.*


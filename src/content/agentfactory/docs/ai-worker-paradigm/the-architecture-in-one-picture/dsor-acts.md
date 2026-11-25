# 4.5 DSoR acts (/ai-worker-paradigm/the-architecture-in-one-picture/dsor-acts)

---
type: Document
title: "4.5 DSoR acts"
description: "The layer between a worker and the company's real systems, the six checks it makes before any action, and how much of it exists today."
status: stable
order: 104.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.5" ]
last_verified: 2026-10-04
sources:
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

**In everyday life.** In the restaurant from [4.1](five-layers.md), the cashier checks every order slip before opening the till, and keeps a copy of each one. The cashier does not take anyone's word for what a table owes.

The **governed door (DSoR**, the Data System of Record) is the layer between the worker and the company's real systems. It is named for the company's data, which it guards. It gives an AI Worker a new AP clerk's controls: a login of its own, a spending limit, a manager who approves large payments, and a logbook.

## What does the door check before every action?

Its rule fits in two sentences: **The door never takes the worker's word for anything. It checks for itself.**[^dsor] Every request to act passes the same checks.

1. **Who is asking?** The worker has its own identity, not a borrowed employee login.
2. **Under whose authority?** The worker acts for a named principal, inside limits that person was allowed to delegate.
3. **Which rules apply?** Limits and controls are checked by the system, not by the model. A **control** is a rule the system itself checks, such as "over $5,000, require the controller's approval".
4. **Does a person have to approve?** If so, the action waits in the approval queue until that person approves from their own login, at a time they choose.
5. **What do the company's systems show now?** The door reads current state itself. It does not trust the state the worker reports.
6. **Has this already happened?** A retried request must not prepare the same payment twice.

## What does each action leave behind?

Each action leaves **evidence**: who asked, under whose authority, which rules ran, who approved and what happened. It is one record per action, read as a list at Dave's 9 a.m. review. In Part II the accounting system's approvals log stands in for it.

## Where does the door sit in the Role Contract?

The door adds no field. It enforces four you already write in a [Role Contract](../what-is-an-ai-worker/role-contract.md):

- **Tools** are the systems the worker can call. A business system, such as the accounting system, is named here, and the door is how the worker reaches it.
- **Identity** answers check 1: who is asking.
- **Authority** answers checks 2 and 3: what the worker may do, one line per action, observe, recommend, draft, execute, escalate or never. [Chapter 7](../../managing-ai-workers/the-authority-envelope/overview.md) turns these lines into the Authority Envelope.
- **Escalation**, with Authority's "never" lines, answers check 4: when the worker stops, and who must approve.

![DSoR never takes the worker's word for anything. It checks for itself. The six checks before any action. One, who is asking: the worker has its own identity, not a borrowed employee login. Two, under whose authority: the worker acts for a named principal, inside limits that person was allowed to delegate. Three, which rules apply: limits and controls are checked by the system, not by the model. Four, does a person have to approve: if so, the action waits until that person approves from their own login. Five, what do the company's systems show now: DSoR reads current state itself and does not trust the state the worker reports. Six, has this already happened: a retried request must not pay an invoice twice. The evidence kept for every action: who asked, under whose authority, which rules ran, who approved, what happened. A warning: approved is not a status the worker can type, it is an event recorded when Dave approves from his own login. Why this layer exists: models can be confidently wrong, text that comes through a channel can be misleading, and retries must not duplicate actions. A footer: reading, drafting and building the register may happen outside this door, and a payment, a status or an approval never should.](img/dsor-door.png)

*The door's six checks, the evidence it keeps, and why the layer exists.*

```yaml interactive="gates"
title: Send a request through the six checks
intro: Pick what the worker asks to do, and watch where DSoR lets it through, makes it wait, or stops it.
checks:
  - ask: Who is asking?
  - ask: Under whose authority?
  - ask: Which rules apply?
  - ask: Does a person have to approve?
  - ask: What do the company's systems show now?
  - ask: Has this already happened?
requests:
  - label: Read Lakeshore's vendor record
    results:
      - status: pass
        note: The worker, with its own identity.
      - status: pass
        note: Its named principal, inside the limits they delegated.
      - status: pass
        note: Reading the vendor record is allowed.
      - status: pass
        note: No approval is needed to read.
      - status: pass
        note: DSoR reads the record itself. Lakeshore is Net 15.
      - status: pass
        note: A read can safely happen again.
    verdict: Allowed
    tone: good
    outcome: The worker gets the terms from the record, and the evidence says who read what, and when.
  - label: Prepare the $7,800 Midwest Packaging payment
    results:
      - status: pass
        note: The worker, with its own identity.
      - status: pass
        note: Its named principal, inside the limits they delegated.
      - status: pass
        note: Policy v3 applies. Invoices over $5,000 need the controller's approval.
      - status: wait
        note: Yes. The payment waits in the approval queue until Dave approves it from his own login.
    verdict: Waits for Dave
    tone: plain
    outcome: Nothing is paid yet. Dave approves at a time he chooses, and a person releases the payment. The evidence records the control, the policy version and his approval.
  - label: Mark invoice 5120 "approved by Dave"
    results:
      - status: pass
        note: The worker, with its own identity.
      - status: pass
        note: Its named principal, inside the limits they delegated.
      - status: stop
        note: '"Approved" is not a status the worker can type. It is an event recorded when Dave approves from his own login.'
    verdict: Refused
    tone: warn
    outcome: The lookalike email was text the worker read in a channel. The most it can do is flag it, and the flag goes into the invoice's case file.
  - label: Prepare the same payment again after a timeout
    results:
      - status: pass
        note: The worker, with its own identity.
      - status: pass
        note: Its named principal, inside the limits they delegated.
      - status: pass
        note: The payment run's controls apply.
      - status: pass
        note: Dave already approved this run from his own login.
      - status: pass
        note: DSoR reads the company's systems itself. It does not trust what the worker reports.
      - status: stop
        note: Yes. The first request went through, and a retried request must not prepare the same payment twice.
    verdict: Refused
    tone: warn
    outcome: The payment is prepared once. An agent retries things a person would not, so this check lives in the system.
```

## Why must the checks live in the system?

**The checks live in the system, not in a person who happens to be watching.** The reason is not that models are careless. An agent can be confidently wrong. It can be tricked by text it reads. And it retries things a person would not. Thursday showed the first two.

Through any door, the worker only prepares a payment. Brightline's policy says only a person can release one ([3.5](../the-10-80-10-operating-rhythm/three-scales.md)), so Dave's approval never lets the worker pay.

## What about actions taken through an app's screen?

**An action that matters, a payment, a status, an approval, never goes through an app's screen.** Some products let a worker use that screen, clicking where a person would click. An action taken that way passes no system's permission check and leaves no evidence of its own, because the application sees only a user clicking. The controls in this chapter reach only what comes through the governed door. Reading, drafting and building the register may go through the screen.

## What do you use before Part V?

**In this book.** DSoR is an open specification, and Part V teaches it in depth. Until then, you set the worker's limits with the controls that products already offer: read-only access, approval steps, and no write access. In today's everyday products the worker acts under your own login, so your permissions are its limits, which is why those are the controls while the worker works only for you ([4.10](when-others-use-it.md)). Where a product allows it, IT issues the worker a login or key of its own, and the limits become its own. [Chapter 7](../../managing-ai-workers/the-authority-envelope/overview.md) turns that into the Authority Envelope.

[^dsor]: DSoR, the Data System of Record, Panaversity.



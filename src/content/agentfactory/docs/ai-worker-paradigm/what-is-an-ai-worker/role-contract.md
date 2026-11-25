# 2.6 The Role Contract (/ai-worker-paradigm/what-is-an-ai-worker/role-contract)

---
type: Document
title: "2.6 The Role Contract"
description: "The Role Contract, a worker's portable, owned and checkable one-page definition, with its template and two contrasting workers."
status: stable
order: 102.6
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "02"
part: I
expert_status: required
concepts: [ "2.6" ]
last_verified: 2026-10-03
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Think of a written job posting for a part-time
bookkeeper. It lists the duties, the hours, who she reports to, what she
may sign, and how her work will be reviewed.

The **Role Contract** is the portable business definition of a worker:
the sixteen elements of the anatomy from [2.1](anatomy-of-an-ai-worker.md), plus one line for its kind,
Delegated or Standing, and a change log, written down on one page. It is not a legal
contract.

Three properties make it useful. It is portable, because it keeps business
requirements apart from implementation choices. Business systems, such as
the accounting system, can be named under tools and channels. The role survives a
change of AI vendor, although the implementation must be retested. It is
owned, because the company controls it and can export it, rather than
leaving it only inside an AI vendor's settings. And it is checkable,
because every line can be tested against what the worker actually did.

```markdown
# Role Contract: <role name>                 Draft <n>, <date>

## Who it is
Identity:      <the account it acts as>
Role:          <job title>
Kind:          <Delegated (each job from a brief) or Standing (an ongoing role that its triggers start)>
Mission:       <one sentence: why the role exists>
Owner:         <a named person, and their title>

## What it owes
Responsibilities: <recurring work, one line each, and where each result is kept>
KPIs:             <how the business measures the role>

## What it works with
Knowledge sources:   <the governed record it answers from>
Memory:              <what it may remember, and what it must not>
Procedures (skills): <the steps it follows>
Tools:               <systems it can call>

## What bounds it
Authority:   <for each action: observe, recommend, draft, execute, escalate or never>
Escalation:  <when it stops, and whom it asks>
Evaluations: <the cases it must pass, and how often it is checked>
Change log:  <each change after Draft 1: the date, who approved it, and what changed>

## How it runs and is reached
Channels:      <where people reach it>
Triggers:      <what starts its work>
Runtime needs: <surface; for a standing role, how it gets continuity; model and effort; with the date chosen>

## Open questions
```

The template writes the Runtime element as **Runtime needs**, because the
contract says what the worker needs, and the product can change. The
**Change log** stays empty in a first draft. [Chapter 11](../../managing-ai-workers/when-the-worker-goes-wrong/overview.md)
writes to it after a failure.

## A short example: another company's AP Worker

Here is a short, filled-in first draft. It is for a small dental clinic,
not Brightline, so it does not answer [Lab 2](lab.md) for you. Each line
has one or two entries, and the one thing the owner has not decided is an
open question.

```markdown
# Role Contract: Clinic AP Worker              Draft 1, November 2, 2026

## Who it is
Identity:      Today it runs under the office manager's login. Target: its own account.
Role:          AP Worker
Kind:          Standing
Mission:       Pay the clinic's suppliers on time, and never pay a bill twice.
Owner:         Priya Shah, Office Manager

## What it owes
Responsibilities: Each Friday, list the bills due next week, in the bills spreadsheet.
KPIs:             No late fees. No bill paid twice.

## What it works with
Knowledge sources:   The clinic's payment policy, version 2, approved by Priya Shah.
Memory:              May remember how suppliers name their invoices. Must not remember amounts or bank details.
Procedures (skills): Match a bill to its delivery note.
Tools:               The bills inbox (read), the bills spreadsheet (read and write).

## What bounds it
Authority:   Bills list: execute. Replies to suppliers: draft. Payments: never.
Escalation:  Any bill over $1,000, or a new supplier, goes to Priya Shah.
Evaluations: Last month's 20 bills, with known answers. All must pass before real work.
Change log:  None yet.

## How it runs and is reached
Channels:      The bills inbox.
Triggers:      Friday 8 a.m.
Runtime needs: A scheduled task in Claude. Each run reads the bills spreadsheet first. Opus 5.5, medium effort, chosen November 2, 2026.

## Open questions
- May it send a routine reply to a supplier without Priya reading it first?
```

## Four checks for a first draft

A good first draft passes four checks. Every field has an entry or an open
question. The owner is a person, not a team. Authority is written as verbs,
one per action. And no AI vendor or model name appears outside the runtime
needs. Remember that a written line states a rule but does not enforce it.
Tool permissions, approval steps and tests enforce it, and [Chapter 7](../../managing-ai-workers/the-authority-envelope/blast-radius.md) builds
them.

Identity: if today's product acts as you, write both on the line: "Today
it runs under my login. Target: its own account." [2.5](both-ai-vendors.md#the-differences-that-change-a-decision)
names the products that give a worker its own account, and
[4.10](../the-architecture-in-one-picture/when-others-use-it.md#what-changes-when-others-use-it)
shows the move.

## The chapters that fill it in

You do not need every line now. [Lab 2](lab.md) writes a first draft,
with an open question wherever you do not know the answer yet. Then each
chapter from [3](../the-10-80-10-operating-rhythm/overview.md) to [11](../../managing-ai-workers/when-the-worker-goes-wrong/overview.md) fills in part of the contract, and its lab writes the
next draft. By the end of [Chapter 11](../../managing-ai-workers/when-the-worker-goes-wrong/overview.md),
you can write the whole contract yourself.

| Chapter | What it fills in |
| --- | --- |
| [3. The 10-80-10 Operating Rhythm](../the-10-80-10-operating-rhythm/overview.md) | **Evaluations**, **KPIs** and **Owner**. Draft 2 |
| [4. The Architecture in One Picture](../the-architecture-in-one-picture/overview.md) | Where each line under **What it works with** and **How it runs and is reached** is kept. Draft 3 |
| [5. The Four-Part Brief](../../managing-ai-workers/the-four-part-brief/overview.md) | A brief for each job under **Responsibilities**. Its lab writes a brief, not a draft |
| [6. The Review Contract](../../managing-ai-workers/the-review-contract/overview.md) | **Evaluations** in full. Its lab writes a Review Contract, not a draft |
| [7. The Authority Envelope](../../managing-ai-workers/the-authority-envelope/overview.md) | **Authority** and **Escalation**. Draft 4 |
| [8. Context, Memory, Knowledge and State](../../managing-ai-workers/context-memory-knowledge-and-state/overview.md) | **Knowledge sources**, **Memory** and **Procedures (skills)**. Draft 5 |
| [9. Work That Runs Without You](../../managing-ai-workers/work-that-runs-without-you/overview.md) | **Triggers**, **Runtime needs**, **Channels**, **Identity** and **Responsibilities**. Draft 6 |
| [10. Governance and Responsible Use](../../managing-ai-workers/governance-and-responsible-use/overview.md) | **Knowledge sources** and **Authority**, under the company's rules. Draft 7 |
| [11. When the Worker Goes Wrong](../../managing-ai-workers/when-the-worker-goes-wrong/overview.md) | The lines a failure shows were wrong, and the **Change log**. Draft 8, the last draft of Part II |

## The contract stays one page

Several lines of the template name something without holding it:
"Knowledge sources" says where the policies live, not the policies. That is
on purpose, so the contract stays one page. Everything the worker is run
from, written down, is its **specification**. The Role Contract is its
first page: the job and its limits, and where everything else lives. The
rest grows around it (Figure 2.7), and a later part brings the whole
specification together and makes it formal. [Chapter 7](../../managing-ai-workers/the-authority-envelope/overview.md)
expands the Authority line into a full **Authority Envelope**.

[Lab 2](lab.md) writes its first draft for the AP Worker.

![Four stages left to right along a timeline from "now" to "later in the book". First draft, marked "you are here": the Role Contract alone, a first draft on one page saying who the worker is and its limits (your lab: the AP Worker's first draft). Next, checking: the same one-page Role Contract, plus examples and tests; the text reads "+ How it is checked: review checks in the contract, and cases with known answers". Then, running it: the same Role Contract with four parts around it: instructions, knowledge, inputs and tools, and tests; the text reads "+ What it runs from: briefs and standing instructions, knowledge, inputs, enforced limits". Finally, formal: a dashed boundary labelled "The specification" holding the Role Contract at its centre with the four parts around it; the text reads "A formal specification, precise enough to build and test the worker from". A banner reads: "The Role Contract stays one page, owned by the company. The specification grows around it: instructions, knowledge, inputs and tools, and tests."](./img/contract-grows.png)

*Figure 2.7: The specification grows around the Role Contract. The contract itself stays one page.*

## Two contrasting workers

The AP Worker is the one worker you build in full. The two workers below
have the same sixteen elements, applied to different work. The anatomy is
not only for accounting.

> **Contrast: a compliance research worker.** A manufacturer's compliance
> team asks the same kinds of question every week. Does this new chemical
> need an updated safety sheet? Which state rules apply to a warehouse in
> Nevada? The worker's mission is to answer those questions from the
> approved rules, with a citation for every claim. It is a Delegated AI
> Worker: each question is a briefed job that ends with its answer, so it
> needs little memory between them. Most of its sixteen elements are
> simple. It acts on nothing outside the team, so its authority line is
> short: it may observe and recommend, never execute. Three elements
> matter most. Knowledge is almost the whole job: which rules, which
> versions, approved by whom. Escalation is unusual, because the worker's
> most important skill is to abstain. When the rules do not answer the
> question, it says so and sends the question to the compliance lead,
> rather than guessing. And its evaluations test abstaining as much as
> accuracy: a set of questions with known answers, plus questions it must
> refuse to answer. It uses research for new questions and a project for
> the standing rules. A capable model at higher effort is worth its cost,
> because a wrong citation is the failure that matters. Its KPI is not
> speed. It is answers that are still correct when an auditor checks
> them. Its owner is the head of compliance, by name.

> **Contrast: a customer support worker.** An online store's support
> worker answers order questions by chat and email, all day. Different
> elements matter most here. It is a Standing AI Worker: its triggers are
> constant, since every new message starts work, and its memory matters,
> because a customer who starts in chat and then writes by email must meet
> the same worker, with the same history and the same limits. It has many
> channels. Authority is limited but clear. The worker may look up an
> order and explain a policy. It may execute a refund up to $50, but a
> larger refund or any change to an account goes to a person. Escalation
> must also find the customer who is angry, confused or asking for
> something the policy does not cover. Its KPIs are first-contact
> resolution, which means solving the problem the first time the customer
> asks, and customer satisfaction. Its evaluations replay real
> conversations with personal details removed, including aggressive ones.
> Because there are many messages and most questions are simple, a fast,
> low-cost model handles the everyday ones. Harder cases go to a larger
> model, or to a person. Its owner is the support manager, by name.


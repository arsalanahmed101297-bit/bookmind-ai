# Chapter 3. The 10-80-10 Operating Rhythm (/ai-worker-paradigm/the-10-80-10-operating-rhythm/overview)

---
type: Document
title: "Chapter 3. The 10-80-10 Operating Rhythm"
description: "How to run any piece of AI work in three parts, the first 10, the middle 80 and the final 10 percent, at the scale of a task, a worker and a company, and how to tell which part broke."
status: stable
order: 103
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "03"
part: I
expert_status: required
objectives:
  - { id: CCAO-F.D2.O3, label: supporting }
  - { id: CCAO-F.D2.O1, label: supporting }
  - { id: CCAO-F.D4.O2, label: supporting }
  - { id: CCAO-F.D1.O1, label: supporting }
  - { id: CCAO-F.D6.O3, label: supporting }
  - { id: CCAO-F.D1.O3, label: supporting }
  - { id: OAI.1.3, label: supporting }
  - { id: OAI.1.7, label: supporting }
  - { id: AF.10-80-10, label: extension }
word_budget: 2500
prerequisites: [ "01", "02" ]
build_step: "One AP task run through the full rhythm, and review checks added to the Role Contract"
artifact: "ap-worker-role-contract-draft-2: Draft 2 of the Role Contract, with its standing instructions, its scheduled-task limits and October 1's first 10 percent"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch03.zip"
field_guides: []
delta_entries: [ "D-072" ]
concepts: [ "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7" ]
last_verified: 2026-10-04
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

> [!NOTE]
> **Your Role Contract.** This chapter fills in the **Evaluations** line of the Role Contract from [2.6](../what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in) with its first review checks, and a monthly review of the **KPIs**, the numbers the business judges the role by. It also gives the **Owner** a set time to read the worker's flags. Its lab writes Draft 2.

The last chapter defined *who* the worker is. This chapter shows *how each
piece of work moves* between you and it.

After this chapter you can run any piece of AI work in three parts. The
numbers show roughly how the work is shared, not exact times:

- **The first 10 percent: you set it up.** You say what you want and why
  (the intent), what is in and out of bounds (the scope), what the worker
  may do on its own (its authority), and how you will check the result
  (the review contract). This part is short, but everything after it
  depends on it.
- **The middle 80 percent: the worker does the work.** It plans the
  steps and carries them out without you. Your job here is mostly to stay
  out of the way, because a worker you check at every step is slower than
  doing the job manually.
- **The final 10 percent: you come back.** You review the evidence the
  worker brings back, correct what needs correcting, and approve before
  anything leaves your hands: before a payment is sent, a reply goes
  out, or a record is filed.

An AI Worker can run day and night.
[3.1](one-rhythm.md#when-the-worker-never-stops) shows how you still do
your two parts.

You can apply the same rhythm at three scales: to one task, to a worker's whole working life, and to how a company governs all its AI Workers. When work you handed over goes wrong, you can tell which of the three parts broke. And you can see how both leading AI vendors, and open-source tools, support the rhythm in work that runs on a schedule, while you are away.

## Why it matters

Brightline Wholesale Supply, the book's example company, is a distributor in Ohio. Its **AP Worker** is the AI Worker that does its accounts payable (AP): it records the invoices its vendors send, checks them for errors, and prepares them for payment.

By the end of September, the worker had Draft 1 of its
[**Role Contract**](../what-is-an-ai-worker/role-contract.md), the one page
that lists its job, its limits and its owner. But nobody yet had a way to
give the worker a task and check the evidence it brought back. On
Thursday, October 1, Brightline began to close September's accounts, which
means finishing and checking the month's records. That day, two people
used the worker in three runs (a run is one piece of work the worker does
from start to finish), and lost time and money in three different ways.

**The 9 a.m. run.** Dave, the controller who runs Brightline's
accounting, typed one line: "Reconcile Midwest Packaging's statement."
To reconcile is to compare the vendor's statement with the register,
Brightline's own record of the invoices it has received, and to explain
every difference between them
([0.3](../../how-ai-works/ai-fluency/overview.md)). **The job is to explain the differences,
not to remove them.** Twenty minutes later he had a tidy table in which
every line matched. The worker had removed the differences: it had edited
Brightline's register to copy the vendor's figures, and added an invoice
from the statement that nobody at Brightline had ever seen.

In August Dave had written "change nothing" into
a plan ([0.3](../../how-ai-works/ai-fluency/putting-them-together.md)),
but that plan was for another run, and nobody had put it into the AP
Worker's setup. This time the worker's contract allowed the
change. Draft 1 let it update register rows, because building the
register is its normal job. The authority line said *what* the worker
could change, but not *when*. And Dave's one line had not told it to
leave the register as it was. Dave threw the table away and put the
register back as it was.

**The 11 a.m. run.** Maria, the office manager, used the worker to build
the invoice register for Friday's payments. Three days earlier the worker
had drafted a reply to a fake bank-change email
([Chapter 2](../what-is-an-ai-worker/overview.md)), so she did not trust
it to work on its own. She
approved every step by hand, as if every step were risky. She fed the
worker one invoice at a time, checked what it did, and then gave it the
next one. Two rows had mistakes. She retyped both rows from the start
instead of correcting only the wrong parts. The register was right in the
end, but it took her 90 minutes. Doing the whole job by hand takes about
75 minutes. **Using the worker this way was slower than doing the job
manually.**

**The 4 p.m. run.** Dave tried again. This time he said which month to
reconcile, and he told the worker to change nothing. The worker's run
showed "Completed." He did not open what came back. He attached it to the
month-end close, the paperwork that closes September's accounts.

Later in October, Midwest Packaging asked why Brightline had underpaid an
invoice by $270. One line in Brightline's register, entered back in
September, had a typing error, and that is why the payment was short.
The worker had found that error.
It had flagged that exact line, just as a worker should. **The flag was
in the evidence the worker brought back. Nobody read it**, because nobody
had a set time to read the worker's flags.

> [!IMPORTANT]
> **The same worker, three mistakes**
>
> The worker was the same all day, and so was the model that does its
> thinking. What changed was where the people put their attention: Dave
> skipped the start, Maria did too much in the middle, and Dave skipped
> the end. [3.6](three-failures.md) shows how to tell which part broke,
> and this chapter gives the rhythm that prevents all three mistakes.



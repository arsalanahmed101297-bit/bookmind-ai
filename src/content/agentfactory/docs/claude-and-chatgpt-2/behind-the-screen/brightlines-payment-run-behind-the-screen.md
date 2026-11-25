# Brightline's payment run, behind the screen (/claude-and-chatgpt-2/behind-the-screen/brightlines-payment-run-behind-the-screen)

---
type: Document
title: "Brightline's payment run, behind the screen"
description: "Brightline's Friday payment run as a scheduled task: a progress list off the desk, a person who says yes, a payment system that blocks the AI Worker, and one payment ticket per invoice."
status: stable
order: 0.34
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "The payment run" ]
last_verified: 2026-11-09
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

In [One job, start to finish](../new-way-of-working/one-job.md) you read the brief for Brightline Wholesale Supply's Friday payment run. Now say Brightline turns that brief into a scheduled task that runs every Friday morning. Here is what keeps it safe behind the screen.

![Brightline's payment run, behind the screen: save every step, and let a person say yes before money moves. Four boxes in a row, joined by arrows. 1, Check invoices: on the borrowed desk, one at a time. 2, Suggest payments: a list for a person to review. 3, Person says yes: the second signature, checked by the system, shown highlighted. 4, Pay once: the payment officer pays, each ticket only once. Below step 1, a two-way arrow labeled "saves each result as it goes" leads to a saved progress list kept off the desk. If the desk is replaced while it checks invoice 8, invoices 1 to 7 are on the list, so the work restarts at invoice 8. Below step 4, a two-way arrow leads to payment tickets kept off the desk: one ticket per approved invoice, and a repeat payment is refused. At the foot: the AI Worker does the work, and the record and the final yes live outside it.](img/brightlines-payment-run-behind-the-screen.png)

## Problem 1: what if the desk is replaced?

Say the desk is replaced while it checks invoice 8, for example after a crash. If the AI Worker kept its notes only on the borrowed desk, the work would be lost. So the task saves each decision to a progress list off the desk, the moment it decides. When the work starts again on a fresh desk, it reads the list first. Invoices 1 to 7 are already there, so it starts at invoice 8. Only the unfinished invoice is checked again.

## Problem 2: who decides to pay?

The AI Worker only *suggests*. A person decides the "ask" invoices, and the payment officer pays through a system that blocks the AI Worker. So even a tricked AI Worker cannot pay: words cannot block an action, but permissions can ([What stays your responsibility](../new-way-of-working/what-stays-your-responsibility.md)).

## Problem 3: what if a payment is sent twice?

If the internet drops while the payment officer sends a payment, the payment system may try again, and the same payment might be sent twice. So each approved invoice gets one payment ticket. The payment system pays each ticket only once and refuses a repeat.

The lesson from Brightline's run: **the AI Worker does the work, but the record and the final yes live outside it.**



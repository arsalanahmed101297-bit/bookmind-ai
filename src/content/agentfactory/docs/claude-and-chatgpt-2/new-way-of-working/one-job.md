# One job, start to finish (/claude-and-chatgpt-2/new-way-of-working/one-job)

---
type: Document
title: "One job, start to finish"
description: "Brightline's Friday payment run handed over in one brief: the brief's four parts, what comes back, what you check, and what permissions do."
status: stable
order: 0.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "One job" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

You will follow one small company through this book: Brightline Wholesale Supply, a company in Columbus, Ohio, that buys goods in large amounts and sells them to stores. Its accounting team pays the bills, called **invoices**, that its suppliers send. Every Friday the team decides which invoices to pay that week. This weekly set of payments is called the **payment run**. The invoices are kept in a folder named Invoices. The team follows a written **payment policy**: its rules for which bills to pay. The team also has a **checking program** that adds up this week's invoices to the cent. This week, the folder holds 15 unpaid invoices.

## What does the brief say?

Here is that job, handed over in one message. The message is called a **brief**. Most guides call this a prompt. So do Anthropic's certification exams, which [Certification and Portfolio Roadmaps](../../certification-and-portfolio-roadmaps.md) describes. In the brief, "pay" means pay this week, "hold" means wait, and "ask" means a person must decide. Dave, the controller, is the manager who approves the run.

> Prepare this Friday's payment run from the Invoices folder, for Dave, our controller, who approves it. Done when every invoice due in the next seven days is marked pay, hold or ask, and your invoice total matches the checking program's total. Follow version 3 of our payment policy, because version 2 is retired. Return a spreadsheet with one row per invoice, showing the decision and the policy rule you used. Mark these invoices "ask": invoices from a new supplier, invoices large enough to need Dave's approval, and invoices with changed bank details. Thieves often send fake new bank details to steal payments. Only suggest. Never approve or send a payment. Show what you checked, what the checks found and anything you could not verify.

This short brief has four parts, in this order. Every good brief in this book has them, and Chapter 5 teaches each one.

| Part | What it says | In this brief |
| --- | --- | --- |
| **Outcome** | What you want back, ending with a sentence that starts "Done when" | This Friday's payment run. Done when every invoice due in the next seven days is marked pay, hold or ask, and the total matches the checking program's total |
| **Context** | Who it is for, and what to work from | Dave, the controller. The Invoices folder, version 3 of the payment policy (version 2 is retired), and the checking program's total |
| **Format** | What shape the result takes, and what could not be checked | A spreadsheet with one row per invoice: the decision and the policy rule used, plus a note on what was checked and anything it could not verify |
| **Constraints** | The rules the result must follow, and how far the worker may go without you | Mark risky invoices "ask", with the reason. Only suggest, and never pay |

Chapter 5 calls the **"Done when"** sentence the brief's **success criteria**. It is a test the worker can apply to its own work, so it knows when to stop. But you still check the total yourself, with a program you trust, like the checking program.

## What comes back, and what do you do next?

What comes back is not just an answer. It is finished work: a spreadsheet of decisions, a short note on the checks the worker ran and what they found, and a list of invoices marked "ask" for a person to decide.

Next, you look at the checking program's result yourself. You do not just trust what the worker says about it. You, or Dave for the large ones, decide the "ask" invoices. Then a different person, the payment officer, makes the payments. This person uses a payment system that blocks the AI Worker.

## What decides what the worker can do?

The brief tells the worker what it should do. **Permissions** decide what it is able to do. They are the settings and systems that allow some actions and block others, such as sending a payment.

![One job, start to finish: you start it, the AI works, you check the result. Five steps. 1, You brief: outcome with its "Done when" sentence, context, format, constraints. 2, The AI works: reads files, uses apps and a browser, calculates with code, and asks when it needs help. 3, The AI returns a decision spreadsheet, the results of its checks, and "ask" items for review. 4, You check: compare totals with the checking program, review the decisions, and resolve the "ask" items. 5, A person pays: the authorized person sends payments, and the payment system blocks the AI Worker. Steps 1 and 4 are your part, steps 2 and 3 are the AI Worker's part, and step 5 belongs to the payment officer. A band says: the brief defines what the worker should do, and enforced permissions limit what it can do. At the foot: you can guide the worker while it runs, and you check the evidence before approving the result.](img/one-job.png)

You can also watch and add instructions while the worker is busy, and it may stop to ask you a question or to wait for your OK.



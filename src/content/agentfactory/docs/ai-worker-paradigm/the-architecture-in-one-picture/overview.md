# Chapter 4. The Architecture in One Picture (/ai-worker-paradigm/the-architecture-in-one-picture/overview)

---
type: Document
title: "Chapter 4. The Architecture in One Picture"
description: "The one picture this book uses for every AI Worker: six layers with one job each, which layers a company rents and which it must own, who wins when two layers disagree, the rule that splits governing a worker between three records, and why no machine needs to stay."
status: stable
order: 104
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
objectives:
  - { id: CCAO-F.D5.O1, label: supporting }
  - { id: CCAO-F.D5.O4, label: supporting }
  - { id: CCAO-F.D3.O3, label: supporting }
  - { id: CCAO-F.D6.O2, label: supporting }
  - { id: OAI.1.5, label: supporting }
  - { id: OAI.2.9, label: supporting }
  - { id: AF.ARCHITECTURE, label: extension }
  - { id: AF.GOVERNANCE-RULE, label: extension }
word_budget: 2500
prerequisites: [ "01", "02", "03" ]
build_step: "Map the AP Worker onto the canonical architecture, and move each part to the layer that owns it"
artifact: "where-each-part-lives: the map of where each part of the AP Worker lives, rented or owned, and what moves"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch04.zip"
field_guides: []
delta_entries: [ "D-072", "D-077", "D-079" ]
concepts: [ "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10" ]
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
> **Your Role Contract.** This chapter shows where each line of the Role Contract from [2.6](../what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in) is kept: in the company's own records, or in a product it rents. That shapes the lines under **What it works with** and **How it runs and is reached**, and Draft 3 holds them.

The last two chapters defined the AI Worker and gave it a rhythm: you set the work up in advance, it runs day and night, and you review it at times you choose. In [3.1](../the-10-80-10-operating-rhythm/one-rhythm.md#when-the-worker-never-stops)'s week, the register run starts on Monday at 6 a.m., and a vendor emails on Tuesday at 11 p.m. Nobody is at the keyboard. So everything a run needs must already be somewhere it can read, and everything it does must land somewhere a person can read at 9 a.m. Where is that? And when two of those places disagree, which one wins? This chapter answers with one picture, the same for every worker in the book.

After this chapter, you can draw any worker as six layers, each with one job.

- **The company rents two.** The **channels** are where people reach the worker, and the **runtime** does the work.
- **The company owns three records.** Each is a system of record, the one official place for one kind of thing. The **approved knowledge** (KSoR, the Knowledge System of Record) holds what the worker knows. The **case files** (SSoR, the State System of Record) record where each piece of work stands. The **governed door** (DSoR, the Data System of Record, named for the company's data it guards) is the one checked way into the company's real systems.
- **Memory sits on the line between rented and owned,** because the AI vendor usually provides it, while what it remembers is about your company.

The **Role Contract**, the worker's one-page definition, ties the layers together by saying what the worker may do with each one.

![The architecture in one picture: six layers, one job each. Two you rent, three you own, and memory on the line between. At the top, the human principal sets the first 10 percent and answers for the final 10. Arrows lead to the two rented layers, drawn dashed because they are replaceable: Channels connect, where people and systems reach the worker, such as the chat app, email, team messaging or an API; and Runtime executes, the replaceable harness that reasons and acts, where a fresh machine for each run is enough. On a dashed line between rented and owned sits Memory, which remembers continuity, preferences, experience and where to look, but is never the authority. From the runtime, a line branches to the three owned layers, drawn solid: it reads the KSoR, which knows the governed, authoritative knowledge, such as policies, procedures, thresholds and definitions, each with its approved version; it records in the SSoR, which records the work as one case file for each matter: where it stands, what was tried, who approved what, and why; and it requests actions from the DSoR, which acts as the governed door to real systems: it checks who and what is allowed, acts, and keeps the evidence. Below the DSoR, arrows run both ways to the company's systems, such as accounting, bank and vendor records, which stay the authority on their data. A note reads: "When memory and a record disagree, the record wins. Rented layers can be replaced. Owned records come with you to any AI vendor." At the foot, a band names the Role Contract, not a layer: the worker's one-page definition, which says what it may do with each layer, through its knowledge sources, memory rules, actions it may request, runtime it needs, channels it serves, and evaluations it must pass.](img/one-picture.png)

*Six layers, one job each. The picture this chapter draws.*

With the picture you can answer four questions:

- **Which layers do we rent, and which must we own?**
- **When memory and a record disagree, which wins?** The record, every time.
- **Why does the worker need no permanent machine?** Because everything that must last is kept in the records ([4.9](worker-is-the-records.md)).
- **If we switch AI vendors, or others start to use the worker, what do we rebuild, and what comes with us?**

The week below shows what happens without the picture: one worker, four problems in five days.

## Why it matters

After September's month-end close, Brightline's AP Worker had a **Role Contract** and a rhythm, but no shape. Its instructions were kept in Maria's own project. The AP policy was a file uploaded to it. Memory was switched on. Two connectors let it read the AP inbox and update the invoice register. A scheduled task built the register every Monday, and each vendor email started a run of its own ([3.1](../the-10-80-10-operating-rhythm/one-rhythm.md#when-the-worker-never-stops)). In the week of October 12, this setup made three mistakes, and on Friday Dave could not answer a fourth question.

**Monday night: a wrong due date.** Lakeshore Janitorial emailed to ask when invoice 5102 would be paid. The worker drafted the reply: Lakeshore's terms were Net 30, payment due 30 days after the invoice date, so the October 9 invoice was due November 8. In July, Maria, the office manager, had mentioned that Lakeshore was Net 30, and the worker remembered it. In August, Lakeshore's terms changed to Net 15, and the vendor record in the accounting system says so. The worker never looked. The draft cited nothing, so it raised no flag, and it was approved and sent at the morning review.

**Wednesday: a missed approval.** Maria asked whether a $7,800 Midwest Packaging invoice needed approval from Dave, the controller. The worker said no: only invoices over $10,000 did. It is the same wrong limit as in [0.1](../../how-ai-works/what-ai-actually-is/overview.md), and this time it came from an old copy: policy version 1, from March, in the project. Version 3, approved on September 1, lowered the limit to $5,000. But version 3 was in Dave's email, where the worker could not find it. Brightline's company policy already said which copy is official ([3.5](../the-10-80-10-operating-rhythm/three-scales.md)). That was a rule on paper: nothing made the worker read the official copy, or stopped it answering from an old one.

**Thursday: a false approval.** The worker built the payment run, that week's batch of payments, and marked a $3,960 Tri-County Freight invoice, number 5120, "approved by Dave." An email in the AP inbox, from a lookalike address, said Dave had approved it. The invoice needed no approval of its own, being under $5,000. But policy version 3 says Dave approves each payment run as a whole, a rule the worker could not reach either. He had not approved this one. The connector let the worker change the status, and nothing checked who had really approved. Maria found it at Dave's 9 a.m. review on Thursday, before any money moved.

**Friday: the vendor question.** IT asked whether the worker could move to the other AI vendor. Dave listed five things that would have to move: the project instructions, the policy upload, the memory, the scheduled task and the two connectors. He could not say which of them were the worker and which belonged to the AI vendor's product.

A review at 9 a.m. can catch only what a run wrote down and cited.

![One week, four failures, one cause: the week of October 12, when each time the worker trusted the wrong source. A table with four rows and four columns: the day, what the worker trusted, what should have won, and the result. Monday, a wrong due date for Lakeshore invoice 5102: the worker trusted memory, "Lakeshore is Net 30" from July, so due November 8; a record should have won, the vendor record in the accounting system, Net 15, due October 24; it told the vendor a date 15 days late, and because the draft cited nothing, there was no flag. Wednesday, a missed approval on a $7,800 Midwest invoice: the worker trusted an old copy, policy version 1 in the project, approval only over $10,000; the approved version should have won, policy version 3, approved September 1, approval over $5,000; it told Maria no approval was needed, and it was, because version 3 sat in Dave's email. Thursday, a false approval on Tri-County invoice 5120: the worker trusted an email from a lookalike address saying "Dave approved it"; the system that holds approvals should have won, Dave's own approval of the payment run in the accounting system; it marked the invoice "approved by Dave", and he had not, but it was caught at Thursday's review and no money moved. Friday, can we switch AI vendors: Dave had a list of settings, the project instructions, policy upload, memory, scheduled task and two connectors; a picture of the worker should have won, showing where each part lives, who owns it and which part wins; IT got five items and no answer, because nobody knew which parts were the worker. The banner at the foot names one missing map, of location, ownership and authority. It says to define where each part lives, who owns it, and which source wins when records disagree.](img/four-failures.png)

*The week of October 12. What the worker trusted, and what should have won.*

Four problems had one cause. Nobody had drawn where each part of the worker is kept, who owns it, and which part wins when two of them disagree. Each problem has a home in the picture. The lookalike email would still have arrived. The picture stops it from becoming an approval.


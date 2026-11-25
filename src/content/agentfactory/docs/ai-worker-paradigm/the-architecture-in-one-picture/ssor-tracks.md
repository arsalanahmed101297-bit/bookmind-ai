# 4.4 SSoR tracks where the work stands (/ai-worker-paradigm/the-architecture-in-one-picture/ssor-tracks)

---
type: Document
title: "4.4 SSoR tracks where the work stands"
description: "The layer that keeps one governed case file for each piece of work, so a worker reads where the work stands instead of guessing, and how it differs from memory and DSoR."
status: stable
order: 104.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.4" ]
last_verified: 2026-10-13
sources:
  - id: ssor
    title: "SSoR, the State System of Record (Panaversity, GitHub, verified 2026-10-13)"
    resource: https://github.com/panaversity/ssor
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** In the restaurant from [4.1](five-layers.md), each table has one order ticket on the rail. It shows what the table ordered and what is done. A cook who starts the next shift reads the ticket, not their memory.

The **case files (SSoR**, the State System of Record) are the governed memory of the work: one case file for each **matter**. A matter is a piece of work carried to an end, such as an invoice from the day it arrives to the day it is paid. The case file says where the matter stands and how it got there. It keeps the evidence for each step: what was tried, what failed, who approved what, and why.[^ssor]

**Keep one line in mind: the company's system holds the fact, and the case file holds the story.** The system shows whether Dave's approval exists. The case file holds the next step, and points to that fact.

## When does a case file open and close?

A case file starts when the matter does. The first run that sees the invoice writes "received", with the date. An invoice that arrives between runs waits in the inbox until the next trigger starts a run. The Role Contract says how long that wait may be: the **accepted delay**. The file closes when its last step is a system fact, such as paid, recorded through the governed door (DSoR). Each run reads the open case files whose next step is due. That list is what the trigger hands it.

## What makes it a system of record, not a notebook?

Three rules.

- **Each entry is checked when it is added.** The system checks it against rules about who may add what, not a person reading each line. People, systems and workers add their own steps: a worker may record that it is waiting for Dave, and never that Dave approved. Nobody records a step for someone else.
- **Nothing is overwritten.** A correction is a new entry, and the old one stays, so anyone can see how the matter got here.
- **It records. It does not act.** A case file does not pay an invoice or start a run. The governed door acts, and triggers start the work ([Chapter 9](../../managing-ai-workers/work-that-runs-without-you/scheduled-and-event-triggered.md)).

## How is it different from memory and from the governed door?

Memory is the worker's own continuity. It has no owner and no history. A case file belongs to the company, and every step in it can be traced. The governed door acts, and a case file only records.

When the system shows a fact the file does not have yet, the file is behind, and the next line records it. The case file does not have to be a separate file, either. If the accounting system keeps an activity log that follows the three rules, that log is the case file.

## How do they work together on Thursday's invoice?

On Thursday the worker marked invoice 5120 "approved by Dave" because an email said so. In the design this chapter draws, four rules apply:

- **The approval itself is made in the accounting system,** from Dave's own login, and the governed door checks for it before any payment ([4.5](dsor-acts.md)).
- **The case file is where the worker records what it saw and did,** with the reason for each step in a line, such as "took the terms from the vendor record, not from memory". Anyone reads there where the invoice stands.
- **The model's full reasoning is not a record.**
- **The run's transcript belongs to the runtime,** not to the case file.

One entry reads "October 15, 7:42 a.m. Email from a lookalike address claims Dave's approval. Flagged to Dave. Not an approval." The next reads "Waiting for Dave's approval of the run." A person or a worker who picks up the invoice tomorrow starts from those lines, not from a guess.

## Does the payment run have a case file too?

The payment run is a matter too, with a case file of its own. Its first line, written by the worker when it builds the run, lists the invoices and waits for Dave's approval of the run. Each invoice in it points to the run, and Dave's approval of the run lives in the run's file, not in each invoice's. Thursday's "approved by Dave" was an approval only the run could have.

An approval queue is every case file whose last line waits for a person, and the chat is only where Dave sees it. A draft reply to a vendor is a step in the matter's file.

![One case file for each matter. Invoice 5120, as the next person reads it, in four dated lines. October 13, 9:10 a.m., received from Tri-County Freight, invoice 5120, $3,960. October 13, 2:30 p.m., matched to the delivery record, no single-invoice approval needed. October 15, 7:42 a.m., an email from a lookalike address claims Dave's approval, flagged to Dave, not an approval. October 15, 8:05 a.m., added to Thursday's payment run, waiting for Dave's approval of the run. Beside the file, the three rules. Each entry is checked when it is added. Nothing is overwritten, and a correction is a new entry. It records, and it does not act. A note says the payment run is a matter too, and Dave's approval of the run lives in the run's file, not in each invoice's. Below, three boxes. Memory is the worker's own continuity, with no owner and no history. The SSoR is the governed case file for the matter, what happened, what it waits for, and why. DSoR checks actions and reads business facts from the company's systems. The banner: whoever picks up the invoice tomorrow starts from those lines, not from a guess.](img/case-file.png)

*Invoice 5120's case file, as the next person reads it.*

## How do you keep a case file in Part II?

**In this book.** As a product, SSoR is at the idea stage. Panaversity has published its design as a proposal, with no specification or code yet.[^ssor] In Part II you keep each matter's case file by hand, one file per matter in your lab folder. The worker proposes each entry at the end of a run, and you add it. Kept by hand, a case file has only your discipline. A line the worker proposes says what it waits for and points to the approval in the system. It never says "approved". Part V teaches SSoR in depth, in Chapter 42.

[^ssor]: SSoR, the State System of Record, Panaversity.



# 9.2 Give every run what it needs (/managing-ai-workers/work-that-runs-without-you/scheduled-and-event-triggered)

---
type: Document
title: "9.2 Give every run what it needs"
description: "The two ways work starts without you, by the clock or when something happens, five facts about runs that every job nobody watches must be designed for, and the case file each run reads first, so that it knows what earlier runs found."
status: stable
order: 209.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
concepts: [ "9.2" ]
last_verified: 2026-10-08
sources:
  - id: v1-one-off-to-worker
    title: "From One-Off to Worker: The Handoff to Manufacturing (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/from-one-off-to-worker
  - id: v1-leaving-the-laptop
    title: "Leaving the Laptop: A Runtime Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/leaving-the-laptop-crash-course
  - id: dsor
    title: "DSoR, the Data System of Record (Panaversity, GitHub, verified 2026-10-08)"
    resource: https://github.com/panaversity/dsor
  - id: ssor
    title: "SSoR, the State System of Record (Panaversity, GitHub, verified 2026-10-08)"
    resource: https://github.com/panaversity/ssor
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**What you will learn.** How work starts without you, five facts every run nobody watches is designed for, and the case file each run reads first. You practice it in Tasks 3 to 6 and Task 8 of the lab.

## What does a scheduled run start with?

**In everyday life.** An alarm clock wakes you at a set time. A doorbell wakes you when someone comes, and it can ring twice for one visitor.

The Thursday review is a **scheduled run**: it starts at a set time on the clock, every Thursday at 7 a.m. On November 19 it had Maria's three sentences of instructions, the invoice list and the rules, and nothing else. When work moves from your own chat to a schedule, four things change.[^v1-one-off-to-worker]

- The brief you typed each week becomes a **standing spec**: written instructions that every run reads. Like a brief, it ends with one sentence that starts "Done when" ([5.1](../the-four-part-brief/four-parts.md)).
- Your habit of reading each result becomes **examples with known answers**: past weeks whose right answers you know, used to test the spec.
- Being there to answer questions becomes **designed exits**: points where the run stops and calls a named person.
- The chat becomes a *run* in a **runtime**: the software that starts the job on its schedule and runs the model in a loop with its tools.

![The title reads "Clock or event: how unattended work starts." The line below it reads "Choose the trigger by what the work waits on. Design as if each run starts fresh." The first lane is scheduled, on Thursday at 7 a.m. It shows three runs, on November 12, 19 and 26. Each reads the spec and its inputs and writes the pre-run note. The second lane is event-triggered, when an invoice email arrives. It shows three events: 5155 received on November 4, BO-23215 received on November 16, and 5155 resent on November 18, marked "Repeat." A dashed arrow joins the two 5155 boxes: "Same invoice, another trigger." A note reads "A duplicate check must read earlier invoices too." Below the lanes is a list, "Five rules for unattended runs." Rule 1, assume a fresh start. Rule 2, supply every required input. Rule 3, expect repeated triggers. Rule 4, use a scoped identity. Rule 5, check for missing results. A note reads "A check outside the run catches a job that never starts." The last panel reads "Idempotency protects the action, not the run." Two payment requests for invoice 5207 lead to "DSoR, as specified": same caller, action and key. That leads to one execution: the retry returns the recorded result. One note below it reads "Notes and logs: check for existing output, serialize runs or use atomic deduplication." Another reads "A different key is a new request. Recheck current paid status."](img/clock-or-event.png)

*Figure 9.3. Clock or event: the two ways a run starts.*

The first fact about runs explains November 19. **Fact 1. Assume each run starts fresh** ([Work that runs while you sleep](../../claude-and-chatgpt-2/behind-the-screen/work-that-runs-while-you-sleep.md)): it never reads Maria's chat. So anything a run must know about earlier runs has to be written in a record it reads.

### The case file is the handoff

A fresh run needs four of the [five places an answer comes from](../context-memory-knowledge-and-state/five-places.md) written down before it begins. Memory, the fifth, is left out: a run cannot rely on what a product chose to remember.

| A run needs to know | Where it is kept |
| --- | --- |
| What its job is and where its exits are | The standing spec |
| What the rules are | KSoR: the approved concepts |
| Where each **matter**, one piece of work, stands, and how it got there | SSoR: the record of each matter, its case file |
| What is true right now | The systems themselves, read fresh. At Brightline, the register: the file that holds the accounting system's export of open invoices |

SSoR keeps one case file per matter, such as a vendor request ([8.2](../context-memory-knowledge-and-state/context-window.md#the-history-no-file-held)). Between runs, the case file is the handoff:[^ssor] a new run, or a person, can continue a matter with no chat history. Had the spec named it, the November 19 note would have said "recommend holding invoice 5207 under 5.3, callback pending." Three rules keep the handoff reliable.

1. **Read the record first, and propose entries at the end.** Each run opens its matters before it does anything. It ends by proposing what it found, flagged or is waiting for. In Part II, a person checks those entries and adds them by hand.
2. **The record is not the truth now.** It shows the latest known, with its date. Before anything is paid or changed, check the system that holds current status.[^ssor]
3. **The record does not run the clock.** It remembers that a callback is pending. Reminders, retries and schedules belong to the runtime.

![The title reads "SSoR is the handoff between runs." The line below it reads "Each run reads the records it needs. People review proposed updates." Panel 1, "Read first," shows four sources: the standing spec, the job and its exits. KSoR, approved rules. SSoR, matters, history and pending steps. Current systems, read operational status fresh. Panel 2, "Each run reads all four sources," shows three fresh runs. On November 12, the run says "Draft the payment review. M-031 is not open yet." On November 19, it says "M-031: callback pending. Recommend holding invoice 5207." On November 26, it says "M-031: request resolved. Include 5207 for review, verify current status before approval." Each run's dashed arrow leads to "Proposed entries, human review, updated SSoR record," which is "available to the next run." Panel 3, "Inside matter M-031: Tri-County bank-detail request," is a table of dated entries and their origin. November 17: email requests new bank details, reported. November 17: Maria confirms callback is pending, confirmed. November 19: worker recommends holding 5207 under policy 5.3, inferred. November 20: callback confirms email was not genuine, request closed, confirmed. A gold strip at the bottom reads "Latest known is not verified current. Check the system before acting. The case file carries continuity. The runtime runs the clock. In this lab, a person maintains SSoR by hand."](img/handoff.png)

*Figure 9.4. SSoR is the handoff. It shows the runs as they should have gone.*

## What does an event-triggered run see?

The email job is an **event-triggered run**: it starts when something happens, here when an invoice email arrives. The email of November 18 shows two more facts.

**Fact 2. A run sees only what it is given.** An event-triggered run starts from one email or one file. The job saw Lakeshore's resent 5155 and nothing else. A duplicate check must be told to read the invoices already received too.

**Fact 3. A trigger can fire twice.** A sender sends the same thing again, a system retries, or two events arrive close together. So design every run so that running it twice does no harm: before it creates anything, it checks whether its output already exists. Two runs at the same moment can both read "not done yet," so run such jobs one at a time, or use a record that accepts each intended action only once.

A duplicate run need not mean a duplicate payment. Think of a coat check. You hand over one coat and get ticket 42. If you hand in ticket 42 twice, you still get one coat, not two. DSoR, the Data System of Record, as specified, gives each intended action a ticket like that, called an **idempotency key**. Two requests with the same key count as one, and the second gets the first one's result.[^dsor] It protects the action, not the run, so a second note or log line can still happen.

## Five facts about runs

Every run nobody watches is designed for five facts. Fact 1 is [above](#what-does-a-scheduled-run-start-with), and so are [facts 2 and 3](#what-does-an-event-triggered-run-see). The last two:

4. **A run acts under someone's identity** ([1.6](../../ai-worker-paradigm/from-chatbots-to-ai-workers/paradigm-and-products.md)). A run under one person's account can do anything that person can, and it may stop when that person leaves. Put team work under an identity the team controls, with only the access the job needs.[^v1-leaving-the-laptop]
5. **A failure must never be silent**, because silence is not success ([3.4](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/final-10-percent.md#when-the-worker-runs-without-you)). Every run ends with a result in a named place, and a failure reaches a named person. A run that never starts says nothing, so something outside the run must check that the result arrived, such as a person who looks at a set time.[^v1-leaving-the-laptop]

On Thanksgiving, with nobody in, a fresh run reads the spec, the concepts, the register and the case file, and its note follows the case file. A named person covers Maria's check.

[^v1-one-off-to-worker]: From One-Off to Worker: The Handoff to Manufacturing, Panaversity, first edition.
[^v1-leaving-the-laptop]: Leaving the Laptop: A Runtime Crash Course, Panaversity, first edition.
[^dsor]: DSoR, the Data System of Record, Panaversity.
[^ssor]: SSoR, the State System of Record, Panaversity.



# 9.4 Explain what runs, and who still checks (/managing-ai-workers/work-that-runs-without-you/explaining-value-and-limits)

---
type: Document
title: "9.4 Explain what runs, and who still checks"
description: "The six things to tell the people who rely on work that runs without you, the words to avoid, and how to state its limits."
status: stable
order: 209.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
concepts: [ "9.4" ]
last_verified: 2026-10-08
sources:
  - id: v1-workflow-design
    title: "Workflow Design & Diagnosis (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/workflow-design-diagnosis-crash-course
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Think of the note left on the fridge for a babysitter. It gives the bedtime, what the babysitter may not do, who to call, and what to do if no one answers.

**What you will learn.** The six things to tell the people who rely on work that runs without you, the words to avoid, how to state its limits, and what the next owner needs when you hand it over. You practice it in Tasks 8 and 10 of the lab.

## What do the people who rely on it need to hear?

Dave dropped his check because "by itself" promised more than the design could do. Stakeholders are the people who rely on the work, such as a manager, a client or the company that audits your accounts. Many stakeholders have never used AI at work, so they cannot fill in what you leave out. When you explain recurring work to them, say six things.

1. **What runs, and when.** "Every Thursday at 7 a.m., the worker drafts the pre-run note."
2. **What it reads.** "The invoice list, the five AP concepts and the matters record."
3. **What it never does.** "It never approves, pays or contacts a vendor."
4. **What a person still checks, by name.** "Maria reviews the note by noon. Dave approves the payment run from his own login."
5. **How you will know it failed.** "Maria checks the notes folder at 8:15 every Thursday. If the note is not there, or it reports a problem, she does the review by hand." That is the check outside the run ([9.2](scheduled-and-event-triggered.md#five-facts-about-runs)).
6. **What it is worth, measured.** For example: "Over three parallel weeks, the review took 40 minutes instead of 150, with no errors reaching Dave." Only claim numbers you measured. If you have not measured yet, say so.

## Which words should you avoid?

Avoid "fully automated," "by itself" and "hands-free." Name the human gate instead.[^v1-workflow-design] Do not undersell it either. A stakeholder told "it only drafts" may redo by hand what the worker already checks. At Brightline, if Dave heard "it only drafts," he might ask Maria to keep doing the whole review by hand.

## How do you state its limits?

Be just as clear about the limits. The worker can miss what it was never given. It can write a well-organized note that sounds sure but is wrong. And if the schedule says Thursday, it runs on Thanksgiving, when nobody is in. Saying so keeps the design working when you are no longer there to explain it.

## How do you explain it to someone new to AI?

Linda, Brightline's owner, has never used AI at work, so Dave avoids words she would have to guess at, such as "run" or "brief." He says: "Every Thursday morning, an AI program prepares the list of bills to pay, with a short note. Maria checks the note, and I still approve every payment run myself." Then he says what it does reliably, and what it cannot do: "It checks every bill against the same rules, every week. But it knows only what we give it."

## What does the next owner need?

A workflow outlasts the person who built it only if the next owner gets seven things:

1. Their name as the owner, written down.
2. Where the instructions, knowledge and skills live.
3. What each run reads and what it produces.
4. The checks, and who does each one.
5. The refresh log for the knowledge ([8.3](../context-memory-knowledge-and-state/configure-the-workspace.md#monday-november-9-change-once-refresh-every-copy)).
6. How to tell a run failed, and what to do then.
7. One run watched together, before the handover.

### What does a handover look like at Brightline?

At Brightline, Sam Ortiz hands his Monday purchase-order check to Tom Alvarez with all seven. Tom moves it to an account the Purchasing team controls ([9.2](scheduled-and-event-triggered.md#five-facts-about-runs)), and they watch its first run together.

[^v1-workflow-design]: Workflow Design & Diagnosis, Panaversity, first edition.



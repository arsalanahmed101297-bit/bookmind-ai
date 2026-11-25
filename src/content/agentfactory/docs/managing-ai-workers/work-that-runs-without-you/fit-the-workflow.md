# 9.1 Decide what runs without you, and who does each step (/managing-ai-workers/work-that-runs-without-you/fit-the-workflow)

---
type: Document
title: "9.1 Decide what runs without you, and who does each step"
description: "Three gates that decide whether recurring work should go to an AI Worker at all, then a delegation map that places it in the workflow your team already runs: who does each step, three common mapping errors, and a baseline before you switch."
status: stable
order: 209.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
concepts: [ "9.1" ]
last_verified: 2026-10-08
sources:
  - id: v1-workflow-design
    title: "Workflow Design & Diagnosis (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/workflow-design-diagnosis-crash-course
  - id: v1-agent-problem
    title: "Is This an Agent Problem? A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/is-this-an-agent-problem
  - id: openai-agents-guide
    title: "A practical guide to building agents (OpenAI, verified 2026-10-08)"
    resource: https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
  - id: anthropic-building-effective-agents
    title: "Building effective agents (Anthropic, Engineering, 19 December 2024, verified 2026-10-08)"
    resource: https://www.anthropic.com/engineering/building-effective-agents
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**What you will learn.** Three gates that decide whether work that repeats should go to an AI Worker at all, and a map of who does each of its steps. You practice it in Tasks 1 and 2 of the lab.

**Friday, November 20.** Dave's email asks Maria two things before anything is fixed: which jobs should run without her, and who does each step now.

## Three gates before any recurring work

**In everyday life.** You would not hire an accountant to add up one receipt. And you would not write a recipe card for a meal you will cook once.

Maria puts each job she would like to hand over through three gates, in order. Any gate can stop it.[^v1-agent-problem]

**Gate 1. Does an ordinary tool already do it?** A total, a lookup, a sort or a standard report belongs in the tool that was built for it. One job on her list adds up payments by vendor for year-end tax forms. Gate 1 stops it: the accounting system already prints that report. A worker adds cost and a chance of error to a sum.[^v1-workflow-design]

**Gate 2. Once, or every week?** Three dials decide. *Frequency:* does the work come back regularly? *Consistency:* do the inputs and the output have the same shape each time? *Payoff:* is the time you save, or the error you avoid, worth building and checking it? If any one is down, build nothing, and handle the work in a conversation each time. A useful signal: the third time you do the same task the same way, stop and run Gate 2.

**Gate 3. What does finished look like?** Write down the input, the output format, and one check you can do in under a minute. For the Thursday list, Maria writes: is every invoice on it open, and due by the Friday after this week's payment run? If you cannot write that check, the work is not ready to run without you.

A job that passes all three still needs the simplest approach that works.[^anthropic-building-effective-agents] A fixed path, such as "every Thursday, list invoices due by the Friday after this week's payment run," needs only a scheduled job with a fixed brief. An **agent**, a model that works in a loop with tools and decides its next step, is worth its cost only when the steps depend on what it finds, the rules have exceptions, or the inputs are messy, such as scanned invoices in many different layouts.[^openai-agents-guide]

![The title reads "Three gates before recurring work." The line below it reads "Follow the gates in order. Take the exit when it applies." Gate 1 asks "Does an ordinary tool already do it?": a total, lookup, sort, or standard report. Yes leads right to "Use the existing tool," with the example "vendor payment report." No leads down to Gate 2, "Is it worth making recurring?" It has three labels, frequency, consistency and payoff, and the question "Are all three high enough?" No leads right to "Keep it in a conversation. Handle it when it comes up. Build nothing yet." Yes leads down to Gate 3, "Can you define and check finished?": clear input, defined output, one-minute check. No leads right to "Not ready to run unattended. Define the result and its check first." Yes leads down to a gold band, "Ready to design recurring work." Below it, a box reads "Choose the simplest approach that works," with two choices. Fixed path, a calendar icon: "Scheduled job with a fixed brief." Judgment needed, a gear icon: "Agent for changing steps, exceptions, or messy inputs."](img/three-gates.png)

*Figure 9.1. Three gates before any recurring work.*

## Who does each step

The Thursday review is one part of a workflow, the steps the AP team already follows. Maria fits the worker into it with a **delegation map**: each step on one line, with who does it today and who should do it from now on.[^v1-workflow-design] For each step she asks three questions.

1. **May it go to a worker?** Is the data allowed into this tool, and can the worker get every input the step needs?
2. **Who should own it?** Decide by four tests, the Delegation criteria. The first two names are from [7.1](../the-authority-envelope/envelope-brief-permissions.md#three-questions-set-the-rung), asked here of a whole step.
   - *Reversibility:* can the step be undone?
   - *Stakes:* what does the worst error cost?
   - *Human judgment or empathy:* does the step need care for a person, or a relationship?
   - *Accountability:* is this a decision someone is responsible for?

   If the step is a decision a person is responsible for, it stays with that person, even when the worker could draft it well. So does a step that needs care for a person. Once a step goes to the worker, 7.1 sets how freely it may act.
3. **What supports it?** A standing instruction, an approved concept, a computed report, or a named person's review.

She marks each step one of three ways. An **AI-executed** step is one the worker does, and a person checks a sample of its results. A **human-reviewed** step is one the worker drafts, and a named person checks it before it is used. A **human-retained** step is one a person does. Reading the export and applying the rules are AI-executed. The duplicate check and the note are human-reviewed: Maria checks them. Two steps are human-retained, and never move to the worker: verifying a bank-detail request, and approving the run. Dave approves the payment run using his own login.

### How does she find the steps?

She lets an AI chat interview her about her Thursday ([5.3](../the-four-part-brief/decompose.md)). Its question about what she checks before writing the note finds the step her November 9 instructions left out: reading her SSoR record.

![The title asks "Who does what in the Thursday review?" The line below it reads "Brightline's delegation map: the worker prepares, named people review and decide." A table has three columns: workflow step, who does it, and control or reason. In the second column, each step carries one of three labels. Read the export and select invoices for the run: AI-executed, worker, from the current register and the payment-run rules. Apply payment and approval rules: AI-executed, worker, from the approved KSoR concepts. Flag duplicates and recommend holds: human-reviewed, worker drafts, Maria checks, from the register and the SSoR matters record. Review and correct the pre-run note: human-reviewed, Maria, by Thursday noon, a named human review before handoff. Resolve a bank-detail request: human-retained, Maria, by verified callback, human only, policy 5.1. Approve Friday's payment run: human-retained, Dave, using his own login, human only, for accountability. The last two rows show a lock. Below the table, two panels. "Four tests of ownership": reversibility, can it be undone? Stakes, what could an error cost? Human judgment or empathy, does it need care for a person? Accountability, who answers for it? "Three mapping errors": halo delegation, good at one step, given the next. Over-delegation, drafts a decision, then gets to make it. Unstaffed gate, a review exists, but nobody does it. A strip at the bottom reads "Baseline: 150 minutes each Thursday. Compare old and new over three parallel weeks: time, corrections, and errors."](img/delegation-map.png)

*Figure 9.2. A delegation map for the Thursday pre-run review. The locks mark the two steps that stay with people.*

### Which mistakes does the map show?

The map also shows three mapping errors. *The unstaffed gate:* a review exists in the plan, but nobody does it on the day. Dave's Thursday check was one, so the map now names who reviews the note, and by when. *Halo delegation:* the worker does one step well, so it is handed the next step too. *Over-delegation:* it drafts the approval memo, so it is allowed to approve. Over-delegation is easy to miss, because it follows good work. After weeks of good drafts of vendor replies, someone suggests letting the worker send them. But a reply speaks for Brightline, and Maria answers for it, so sending stays with her.

### How does she know the new way is better?

Last, she measures before she switches. A baseline is the numbers for how a step works today: how long it takes, how many rounds of correction it needs, and how many errors reach the next person. Run the old way and the new way side by side for two or three cycles of the work. Keep the new way only if it is better on those numbers, not on how it feels.

[^v1-agent-problem]: Is This an Agent Problem? A Crash Course, Panaversity, first edition.
[^v1-workflow-design]: Workflow Design & Diagnosis, Panaversity, first edition.
[^openai-agents-guide]: A practical guide to building agents, OpenAI.
[^anthropic-building-effective-agents]: Building effective agents, Anthropic.



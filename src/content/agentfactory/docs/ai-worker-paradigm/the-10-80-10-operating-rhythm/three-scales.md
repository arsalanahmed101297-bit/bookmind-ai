# 3.5 Three scales: a task, a worker, a company (/ai-worker-paradigm/the-10-80-10-operating-rhythm/three-scales)

---
type: Document
title: "3.5 Three scales: a task, a worker, a company"
description: "The same rhythm at three scales: one task, a worker's working life, and how a company governs its AI Workers."
status: stable
order: 103.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "03"
part: I
expert_status: required
concepts: [ "3.5" ]
last_verified: 2026-10-04
sources:
  - id: v1-thesis
    title: "The Agent Factory Thesis (Panaversity, first edition, verified 2026-10-04)"
    resource: https://agentfactory.panaversity.org/docs/thesis
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** The rhythm has three parts: someone sets the work, someone does it, and someone checks it. A family does this at three sizes.

- **The chore, like one task.** You ask a child to wash the dishes (the first 10 percent). The child does it (the middle 80). Then you check the kitchen (the final 10).
- **The babysitter, like a worker's whole working life.** You agree the rules on the first day (the first 10 percent). The babysitter looks after the children for months of evenings (the middle 80). You check in with them regularly, and change the rules when something keeps going wrong (the final 10).
- **The house rules, like the rules a company sets for all its AI Workers.** The family sets them once (the first 10 percent). Everyone follows them (the middle 80). The family looks at them again each year (the final 10). For a company, this is called **governance**.

Only the time span changes, from minutes to years. And the sizes fit inside each other: every evening with the babysitter is a small rhythm of its own, inside the months, inside the house rules.

![A grid titled "The 10-80-10 rhythm at three scales", from minutes to years. The rows are a task (reconcile one statement), a worker (the AP Worker's working life, over months) and a company (Brightline's AI workforce, over years). The columns are the first 10% (set it), the middle 80% (do it) and the final 10% (check it). For a task, the first 10 is the brief and review contract, with the plan questioned before the run. The middle 80 is one run, where the worker pauses when a stop rule applies. The final 10 reviews this output: flags, approvals, evidence and totals, then correct and approve. For a worker, the first 10 is the specification (Role Contract, instructions, knowledge, inputs, tools and tests) and a dry run before real work. The middle 80 is recurring work, Monday registers and vendor emails, each task with its own small 10-80-10 cycle, drawn as a tiny bar. The final 10 is the monthly review of KPIs, tests and repeated corrections, and then the worker is updated, kept, changed or retired. For a company, the first 10 is policy, on what AI Workers may do, who owns each role, and which actions need a person. The middle 80 is the AI workforce at work, many workers each with its own specification and review cycle. The final 10 is audit and oversight of evidence trails and incidents, and workers are expanded, restricted or retired. A dashed arrow from the final 10 back to the first shows that review feeds the next setup. It becomes a better brief, an updated specification or a revised policy. A banner reads: "Tasks sit within workers. Workers sit within the company." At every scale, a person sets the intent and stays accountable for the result.](./img/three-scales.png)

*Figure 3.11. The rhythm at three scales. Each final 10 percent feeds the next first 10 percent.*

### Who holds the two ends at each scale?

At every scale a person holds both ends: whoever set the task, the worker's owner, the company's leaders.

### A worker's working life

The AP Worker's whole working life follows the same rhythm.

**The first 10 percent is its specification:** the Role Contract from the last chapter, which names Dave as the owner, with the standing instructions, the knowledge, the inputs and the tests around it ([3.2](first-10-percent.md)). Before a new kind of work goes live, Dave questions its plan and gives it a dry run on last month's invoices.

**The middle 80 percent is the months of work after that,** each run a task with its own small rhythm inside.

**The final 10 percent is Dave's monthly review.** It steps back from single runs and asks four questions:

- **Is the worker meeting its KPIs?** For example, are duplicate payments still at zero?
- **Do the tests still pass?** Rerun them, because a change to the specification, the data or the model can break something that used to work.
- **What did this month's corrections say?** A correction made twice points to a gap in the specification ([3.4](final-10-percent.md)).
- **Does the specification still describe the job?** Vendors change, policies change, and the real job slowly moves away from what the specification says.

Then Dave decides: keep the worker as it is, change it, or retire it. **A worker whose specification has not been reviewed in a year is running on an old first 10 percent.** Nothing breaks on the day the job changes. The worker simply goes on doing last year's job, carefully and on time.

These tests, and how often Dave runs this review, go on the **Evaluations** line of the worker's [Role Contract](../what-is-an-ai-worker/role-contract.md).

### A company's governance

The whole company follows the same rhythm too.

**The first 10 percent is policy.** The company's leaders set it, not each user. It says which work may go to AI Workers at all, who owns each worker, which actions always need a person, such as releasing a payment, and which knowledge is official.

At Brightline, the company's policy is short. It fits on one page and has three rules:

- AI Workers may prepare payments, but never release them. Only a person can do that.
- Every AI Worker has one named person who is responsible for it. For the AP Worker, that is Dave.
- The latest AP policy that Dave approved is the only official copy.

The third rule answers a problem from the last chapter. There, the assistant used an old copy of the policy, two versions out of date. One user could not fix that alone. Only the company can decide which copy is the official one. But so far this is a rule on paper, not yet in force: the official copy has no home the worker can reach, and nothing makes the worker read it. The next chapter opens with what that costs.

**The middle 80 percent is all the company's AI Workers doing their work,** each with its own specification and its own rhythm.

**The final 10 percent is audit:** reading the evidence of what the workers did, reviewing incidents, and deciding which workers to expand, restrict or retire. Suppose Brightline's outside accountant asks at year end: "Show me every payment over $5,000, who approved it, and what the AI Worker recommended." Audit only works if every worker left evidence behind. A company cannot audit a worker whose runs left no record.

> [!IMPORTANT]
> **The human is the principal**
>
> One rule never changes: the human is the principal. The principal is the person in charge, the one the worker acts for. Every legitimate chain of action starts with a person who sets intent and owns the outcome.[^v1-thesis] In plain words, all proper work starts with a person who says what they want and answers for the result.

[^v1-thesis]: The Agent Factory Thesis, Panaversity, first edition.


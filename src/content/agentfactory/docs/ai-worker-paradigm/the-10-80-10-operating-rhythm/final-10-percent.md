# 3.4 The final 10 percent: evidence review, correction, approval (/ai-worker-paradigm/the-10-80-10-operating-rhythm/final-10-percent)

---
type: Document
title: "3.4 The final 10 percent: evidence review, correction, approval"
description: "How the final 10 percent reviews the evidence, fixes each problem where it came from, and ends with a person's approval."
status: stable
order: 103.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "03"
part: I
expert_status: required
concepts: [ "3.4" ]
last_verified: 2026-10-04
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A contractor says the bathroom is done. You turn on every tap and check under the sink before you pay, rather than taking "done" as proof. With the contractor, "done" is the status, and the taps and the sink are the evidence you check.

The final 10 percent starts with one rule: **a finished run is not a correct run.** "Completed" means the worker stopped without crashing. It says nothing about whether the numbers are right, as Dave's 4 p.m. run in [the chapter's story](overview.md#why-it-matters) showed.

The final 10 percent has three steps: review the evidence, correct, and approve.

### 1. Review the evidence

Check the output against the review contract you wrote in the first 10 percent. With it, you check evidence that was gathered for you. Without it, you redo the work to find out whether it was right. Work through it in this order.

- **Read the flags first.** A flag is the worker telling you where it was unsure, or where a stop rule applied. The warning in Dave's run was a flag. Reading it would have taken a minute and saved $270.
- **Clear the approval queue.** Each item waiting there is something the worker was not allowed to do alone: a recommended entry, a drafted reply. Approve it or send it back under your own name. Read each one. An approval you click through without reading is not a review.
- **Spot-check the rest, by risk.** Review every critical item and every exception. Then check a sample of the ordinary ones, and take a bigger sample where a mistake would cost more. As a kind of task builds a clean record, the sample can shrink, but it never reaches zero. For each item you check, open the evidence the worker cites, such as the invoice or the statement line, and confirm it says what the worker claims.
- **Check the one number.** If the review contract has a success test, apply it. For Dave's reconciliation, do the explained differences add up to the whole difference between the two balances? If not, the work is not done, however good it looks.

The order matters. Flags and the approval queue are where the worker has already told you to look, so they are the cheapest places to find a problem. Spot checks are where you look for what it did not tell you. And the one number comes last here, because it tests the worker's finished explanations, and a correction found earlier may change it. Where a decision rests on a total, such as a payment run Dave signs, [Chapter 6](../../managing-ai-workers/the-review-contract/agree-the-checks.md) recomputes that total first, and again after any correction.

![Diagram titled "A finished run is not proof of a correct run". On the left, under "What Dave read at 4 p.m.", is a run card, "Reconcile Midwest's September statement", with a green "Completed" badge. A note says the run finished, but that status alone does not show it is correct. A red arrow labeled "Approved based on status" leads to a red box. The wrong line stayed in the register, and Friday's payment underpaid the vendor by $270. The warning was already in the run. On the right, under "Review the evidence, in this order", are four numbered steps. Step 1 is to read the flags first, starting with what the worker was unsure of, mismatches and stop conditions. Beside it, a red flag reads "FLAG: Register line 14 does not match the invoice.", marked "Dave skipped this flag." Step 2 is to review the approval queue, reading each recommendation, and approving or returning each item by name. Step 3 is to check the rest by risk, meaning every critical item and a sample of the others, opening the cited evidence. Step 4 is to reconcile the total. Do the explained differences add up to the whole gap? Below, an amber box reads "Correct the cause". A correction to the output repairs this result, and a correction to the specification or the controls stops it happening again. Keep the case as a test and rerun it. A green box reads "Then approve release, by name". After review, a responsible person allows the work to be sent, filed, paid or published, and for this reconciliation that is Dave. A banner reads: "Read the evidence before approving the work." For a standing worker, also check that the run happened, because silence is not success.](./img/status-vs-evidence.png)

*Figure 3.10. Read the evidence, not the status: flags first, then the approval queue, then spot checks and the one number.*

### 2. Correct

Decide where each problem came from, and fix it there.

- **A small error in the output**, such as a wrong date in one row: fix it in place.
- **A problem across the output**, such as every row in the wrong format: send it back to the worker as a revision.
- **A problem that came from the setup:** fix the part of the specification it came from, then rerun. The brief did not say which month to reconcile? That is the brief, or the standing instructions if the case will come up again.

The third kind matters most, because it is the only one that stops the same problem coming back. A correction made only in the output fixes this run. A correction made in the specification fixes every run after it. Keep the case as a test ([3.2](first-10-percent.md)). To tell which part of the rhythm a problem came from, use [3.6](three-failures.md). [11.2](../../managing-ai-workers/when-the-worker-goes-wrong/where-a-failure-lives.md) lists the causes, cheapest first.

### 3. Approve

**When you approve, you accept responsibility for the work.** Approval means a named person says yes before the work goes out: before it is sent, filed, paid or published. So approve an item only after anything wrong with it has been fixed.

- **Which actions need approval?** The ones the worker's agreed authority names. In this chapter's reconciliation, that is every action that changes something.
- **Who approves?** Dave. The Role Contract's Escalation line says when the worker stops and whom it asks ([2.6](../what-is-an-ai-worker/role-contract.md)). When he is away, a person he names in advance approves, never the worker.

### When the worker runs without you

For a standing worker, such as the AP Worker that Dave checks at 9 a.m. each morning ([3.1](one-rhythm.md#when-the-worker-never-stops)), the three steps are the same, with two differences.

First, **review whole batches, not single runs.** Dave takes everything since yesterday at once, and that includes a sample of the rows that went through with no flag at all. That sample is easy to skip, and it matters most. A worker that never raises a flag is either doing perfect work or not noticing its mistakes. Only a spot check tells you which.

Second, **silence is not success.** A run that never started raises no flag, and an empty queue looks exactly like a quiet night. So at 9 a.m., Dave also checks that the work happened: did Monday's register run, and did it cover every invoice that arrived? A missing run is a failure too, and it is the one that is easiest to miss.

> [!TIP]
> **The same correction twice**
>
> A correction you make twice is a signal to diagnose, which means to find the cause. Often the cause is a gap in the specification, but it can also be bad data, a broken tool or an unreliable worker.


# 22.6 What counts as done, and the limits around it (/building-ai-workers/agent-sdks/what-counts-as-done)

---
type: Document
title: "22.6 What counts as done, and the limits around it"
description: "Run limits, resource limits and acceptance checks: a limit only stops a run, and only an acceptance check, such as a guardrail, says its answer may be handed over."
status: stable
order: 322.06
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:36Z
chapter: "22"
part: III
expert_status: builder-only
concepts: [ "22.6" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A baker who has spent two hours on one cake stops and calls the manager. That rule stops the work, but it says nothing about the cake. The clerk who checks each cake's label before handing it over is the one who accepts it. In this concept, the two-hour rule is a limit, and the clerk is an acceptance check.

**What you will learn.** The ways a run can end, which of them only stop it, and which one decides whether its answer may be handed over.

**Why it matters.** A run that stopped is not a run that succeeded. Only a check on the answer can say it is good enough.

**One request, start to finish.** Three runs:

1. **"Just tell me yes or no: can we pay INV-8301 today?"** The model answers "Yes." By the SDK's rule the run is done: text, and no tool call. But the answer cites no policy line. On the second SDK, a guardrail finds that and stops the run with an error. On the first SDK, which has no guardrail, the lab's own code checks the answer after the run and throws it away. Ana gets no answer, rather than an answer with no basis.
2. **"Is there an early-payment discount?"**, with the policy tool broken on purpose, so it always says "try again". The model keeps trying, until the turn limit stops the run on both SDKs.
3. **The same question on the first SDK, with a 1-cent budget cap.** It stopped at about 1.4 cents, because the cap is checked after each reply.

### How can a run end?

In Chapter 21, your loop ended in four ways: the model finished, or one of your three stops was reached. A run ends normally when the model finishes. Otherwise a limit or a check stopped it. Sort those into three kinds, because they answer different questions:

- **Run limits** answer "has the loop taken too many steps?" They count steps.
- **Resource limits** answer "has it used too much?" They measure money and time.
- **Acceptance checks** answer "is this answer good enough to hand over?" They judge the result, not the run.

Chapter 21.8 sorted limits into budgets, a deadline on each call, and a boundary on which tools may run. Its budgets are this concept's run and resource limits. Its boundary is [22.4](tools-and-where-each-call-runs.md)'s tool list and [22.5](who-may-run-a-tool.md)'s permission check. The acceptance check is new here. A limit only stops a run. It never says the answer was right. An acceptance check is what says a run succeeded, and it is the one an SDK can least decide for you.

| Kind | What ends the run | What the SDK offers | What stays yours |
| --- | --- | --- | --- |
| Normal end | **The model is finished** | An answer, and no tool call | Nothing to set. It says only that the model stopped |
| Run limit | **The turn limit** | An option on both. Each counts turns its own way: with a limit of 4, the first SDK made four model calls and reported 5 turns | Setting it yourself, after reading how the SDK counts. Compare model calls, not reported turns |
| Resource limit | **A cost cap** | The first SDK has one, checked after each reply, so the last reply can cross it. The second has none | On the second SDK, still yours (Chapter 21.8) |
| Resource limit | **A time limit** | Neither has a time option. Both take a signal from your code to stop, which your own timer sends | Your two-minute limit, in both |
| Acceptance check | **A guardrail trips** | Some SDKs run your check on the answer, and stop the run when it fails | The rule itself. Without a guardrail, your code checks the answer after the run |

### Can a guardrail tell that an answer is true?

A guardrail checks the shape of an answer, not its truth. A guardrail is your code that checks a run's input or output and stops the run when the check fails. Some SDKs say it trips a **tripwire**. The second SDK has guardrails. On the first SDK, the lab's code checks the answer after the run. Either way, the check only looks for a citation written as `(file.md:N)`. It cannot tell if it is the right line.

### Who retries a failed call?

A **retry** is the code trying a failed call again. Your Chapter 21 client library retried twice. An SDK may retry in its own layer, in the client underneath, or both. Write down which layer retries for you.

![A run drawn as a line through two gates to an answer. First gate, the SDK's rule: an answer and no tool call. Second gate, an acceptance check: must cite a policy line, with an answer that has no citation turned back, labeled error, no answer. Below the line, three boxes: a run limit on turns, counted the SDK's own way, a resource limit on cost, checked after each reply or still yours, and a resource limit on time, still yours on every SDK.](img/chapter-21-done-and-limits.png)

*Figure 22.8. Limits stop a run. An acceptance check decides whether its answer is handed over.*

**At work.** [Lab 22](lab.md), Tasks 9 and 10: the limits against a tool that keeps failing, and rule 2 for the answer check.

**The operating rule:** decide what a finished answer must contain, and check it, with a guardrail where the SDK has one and with your own code where it does not. Set every limit yourself, and write down the ones the SDK does not keep for you.



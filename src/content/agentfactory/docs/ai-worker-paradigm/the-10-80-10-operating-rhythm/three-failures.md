# 3.6 The three failures (/ai-worker-paradigm/the-10-80-10-operating-rhythm/three-failures)

---
type: Document
title: "3.6 The three failures"
description: "The three ways the rhythm breaks, and three questions that show where to look first when delegated work goes wrong."
status: stable
order: 103.6
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "03"
part: I
expert_status: required
concepts: [ "3.6" ]
last_verified: 2026-10-04
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A dinner party can go wrong in three ways. Nobody told the cook about a guest's allergy, so the cook had no brief: the first 10 was skipped. You stood over the cook all evening, doing too much in the middle: the 80 was micromanaged. Nobody tasted the sauce before serving it: the final 10 was skipped. Each failure belongs to one part of the rhythm, and each has its own fix.

Brightline's October 1, the day in this chapter's story, showed all three.

| Failure | What it looks like | Why people do it | What it costs | The fix |
| --- | --- | --- | --- | --- |
| **Skipping the first 10** | A one-line request. No period, no limits, no stop rule, no evidence asked for | It feels faster. It is the habit of the chatbot era | The wrong result, or the right one reached in the wrong way. The time saved at the start is lost doing the work again | Write the four decisions and the review contract's answers, and question the plan before the run. Save a setup you will reuse as standing instructions |
| **Micromanaging the 80** | Approving every harmless step, feeding work in one item at a time, retyping drafts, steering each step | Low trust, often after one bad result | You end up doing the work by hand again, and paying for the worker too | Move the worry into the first 10: a stop rule, such as "ask me before adding any invoice over $5,000", narrower authority, a smaller first task, or a dry run. The protection is the same, and you do not do the work twice |
| **Skipping the final 10** | Accepting "Completed", forwarding work unread, approving because it looks professional. For a worker that runs alone: never reading the batch, or taking an empty queue as a quiet night | The output looks finished, and there is a lot of it | Often the costliest, because unchecked errors reach vendors, customers or the accounting records under your name | Read the flags first, clear the approval queue, spot-check by risk. A named person approves, and nothing leaves before that |

Each failure also leaves a sign you can spot afterward:

- **The worker did what you said, not what you meant.** That points to the first 10: the brief left something out.
- **The result was right, but it took as long as doing it yourself.** That points to the middle 80: you did part of the worker's job.
- **The warning was in the output, and nobody saw it.** That points to the final 10: the evidence was there, and the review skipped it.

### Where to look first

When delegated work goes wrong, find which of the three parts broke before you fix anything. Fixing the wrong part is common: people retrain the worker when the brief was vague, or rewrite the brief when nobody read the evidence. Ask three questions, in order. They find a wrong result. A right result that took too long is the second sign above, so look at what you did in the middle.

1. **Did the specification say it?** Check everything the worker was given: the brief, the standing instructions, the knowledge, the Role Contract, and any company policy. If none of them told it the period (which month), the limit or when to stop, start with the first 10 percent. Fix the part of the specification the line belongs in, and keep the case as a test (see [Lesson 3.2](first-10-percent.md)).
2. **Did the worker act against it?** If the worker went beyond what it was allowed, or did not stop when a rule applied, start with the middle. This is the worker's failure in the middle, not Maria's kind. Look at the worker's record of the run, and at its inputs and permissions. And ask a second question: *could* the worker break the limit? If it could, the limit was only written down, not enforced. Fix the permission as well (see [Lesson 3.3](middle-80-percent.md)). Chapter 11 teaches this diagnosis in depth.
3. **Was the problem visible in the evidence?** If the warning was there and nobody read it, start with the final 10: fix the review, not the worker. If the problem was not visible, find out why. The review contract may have asked for too little evidence (a first-10 fix). The worker may have left out evidence it was asked for (a middle-80 fix). Or a source may have been wrong (a fix to the inputs).

Failures can combine, so treat the answer as the first place to look, not the only one. None of October 1's failures was the worker's, but workers do make mistakes too, which is why question 2 exists.


```yaml interactive="gates"
title: Which part broke?
intro: Pick one of October 1's three failures, and watch where the three questions point.
requestsLabel: October 1
checksLabel: The three questions, in order
checks:
  - ask: Did the specification say it?
  - ask: Did the worker act against it?
  - ask: Was the problem visible in the evidence?
requests:
  - label: "9 a.m.: Dave's one-line request"
    results:
      - status: stop
        note: No. Nothing told the worker that this task must change nothing.
    verdict: First 10 percent
    tone: warn
    outcome: Start with the first 10 percent. Fix the part of the specification the line belongs in, and keep the case as a test.
  - label: "11 a.m.: Maria's register"
    results:
      - status: pass
        note: Nothing was missing. The register was correct.
      - status: pass
        note: No. The worker did nothing wrong.
      - status: pass
        note: No. There was no problem to see.
    verdict: Middle 80 percent
    tone: plain
    outcome: "The three questions miss this one, because the register was correct. It shows up as lost time: 90 minutes for a job that takes about 75 by hand. Look at what Maria did during the middle."
  - label: "4 p.m.: Dave's second run"
    results:
      - status: pass
        note: Yes. Dave said which month to reconcile, and told the worker to change nothing.
      - status: pass
        note: No. The worker flagged the line with the typing error, just as a worker should.
      - status: stop
        note: Yes. The flag was in the evidence the worker brought back. Nobody read it.
    verdict: Final 10 percent
    tone: warn
    outcome: "Start with the final 10 percent. Fix the review, not the worker: nobody had a set time to read the worker's flags."
```



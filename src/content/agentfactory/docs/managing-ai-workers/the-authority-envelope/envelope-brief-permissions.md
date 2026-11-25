# 7.1 Decide what it may do (/managing-ai-workers/the-authority-envelope/envelope-brief-permissions)

---
type: Document
title: "7.1 Decide what it may do"
description: "The Authority Envelope, the brief and the permissions kept apart, the four rungs set for each action, the three questions that set a rung, and what the owner writes down."
status: stable
order: 207.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "07"
part: II
expert_status: required
concepts: [ "7.1" ]
last_verified: 2026-10-07
sources:
  - id: v1-thesis
    title: "The Agent Factory Thesis (Panaversity, first edition, verified 2026-10-07)"
    resource: https://agentfactory1.panaversity.org/docs/thesis
  - id: v1-governance
    title: "Governance, Risk & Responsible Use: A Crash Course (Panaversity, first edition, verified 2026-10-07)"
    resource: https://agentfactory1.panaversity.org/docs/governance-risk-responsible-use-crash-course
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A teenager's curfew is 11 p.m. A parent can say "home by 10 tonight." Nobody can say "stay out until 1 a.m." without changing the curfew. And either way, the car keys decide what is possible. The curfew is the envelope, tonight's rule is the brief, and the keys are the permissions.

**Wednesday, October 28.** Maria has put Scioto Pallet's record back. Before anything is switched on again, Dave decides what the AP Worker may do, and he writes it down.

## Three limits, kept apart

**The Authority Envelope** is the explicit, standing boundary of what a worker may do: written down, and belonging to the worker, not to one task. It lives in the worker's Role Contract, in the part on authority. The worker's owner writes it, not the worker and not the person who writes today's brief. At Brightline, Dave owns the AP Worker's envelope.

**Autonomy in the brief** ([Chapter 5](../the-four-part-brief/four-parts.md)) says how far the worker may go on this one task. As [3.2](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/first-10-percent.md) said, it can only make the envelope narrower, never wider. "Draft replies, send nothing" is fine. "Pay anything under $5,000" cannot widen an envelope that says the worker never pays, and neither can a passed Review Contract check. Only the owner can.

**Permissions** are the product settings that decide what the worker's tools *can* do: which connectors to other apps, such as email, are on, which tools need approval, which folders and logins it can reach. The envelope is the decision, and permissions enforce it, so the envelope comes first ([7.2](blast-radius.md)).

![The title reads "The envelope decides. The brief narrows. Permissions enforce." The line below it reads "Define what the worker may do, then limit what its tools can do." On the left, a large gold box is the Authority Envelope: standing authority, written by the worker's owner and kept in the Role Contract. It has four labels, actions and levels, thresholds, never automated and escalation triggers. Its AP example says the worker never pays. Inside it, a white box, Autonomy in the brief, sets how far this task may go. It can narrow the envelope, never widen it. Its green example is allowed: draft replies to vendors, send nothing. Below the gold box, a red box marked outside the envelope reads: pay anything under $5,000, because a task brief cannot grant payment authority. On the right, a box headed Permissions, what the tools can do, lists enabled connectors, allowed actions and approvals, accessible folders, and connected accounts and logins. An arrow labeled enforce the limits points from it to the envelope. Its red note says to match the envelope and the task, no wider. Below that, it says a draft-only task has sending disabled. A footer reads: At Brightline, Dave Kowalski owns the envelope. The worker cannot expand its own authority.](img/envelope-brief-permissions.png)

*Figure 7.1. Three limits, one inside the other.*

## Four rungs, set for each action

**In everyday life.** A house sitter looks after your home while you are away. They may check the mail (observe), suggest calling a plumber (recommend), write a note to the neighbor for you to approve (draft), or call the plumber and pay them (execute).

Dave lists what the worker does in the AP inbox, and gives each action a rung, or level, like the steps of a ladder. Each rung includes the ones below it.

| Rung | What the worker does | What changes | AP example |
| --- | --- | --- | --- |
| *Observe* | Reads and reports | Nothing | Reads the open invoice list and a vendor record |
| *Recommend* | Proposes a decision a person makes | Nothing yet | "Hold invoice 5161 under policy 5.3" |
| *Draft* | Prepares the thing itself, ready for a person to release | Nothing until a person releases it | A vendor reply saved as a draft, the run proposal |
| *Execute* | Takes the action | Something outside the conversation | Sends an email, writes to a record, pays |

Execute comes in two forms. The worker acts alone, or it acts after a person approves each action. **Execute with approval** is still execute: once you say yes, the worker does the sending, not you. At draft, a person sends.

The line that matters most is between draft and execute. On Monday, Maria asked the worker to answer vendors' questions, and its settings let it send the answers itself. "Answer vendors" became "send to vendors," and nobody decided that the worker should move from draft to execute.

```yaml interactive="compare"
title: Draft or execute?
intro: The same job, answering vendors' questions, at two rungs. Flip the switch and watch who sends the reply.
states:
  - label: Draft
    steps:
      - A vendor asks where their payment is.
      - The worker writes a reply.
      - The reply waits as a draft.
      - Maria reads it and sends it.
    outcome: A draft waits for a person.
  - label: Execute
    steps:
      - A vendor asks where their payment is.
      - The worker writes a reply.
      - The worker sends the reply.
      - The vendor already has it.
    outcome: An executed action has already happened.
```

Rungs are set per action, not per worker. There is no "level 3 worker." The AP Worker may observe bank details and draft vendor replies.

**Escalate is on the list too, and it works differently.** The Role Contract's template ([2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md)) lists it beside the four rungs: observe, recommend, draft, execute, escalate. It is not a fifth rung above execute, and it is open at every rung.

- **When:** the worker reaches a limit, meets an exception or has real doubt.
- **What it does:** it stops and hands the question to a named person, with the evidence and what it did not do.
- **If it can message no one:** it puts the question at the top of its report.

Escalate the question, not a verdict, a final judgment.[^v1-governance] "I think this is fraud" is a verdict. "This email asks to change Scioto Pallet's contact email. Policy 5.4 says I may not act on it. Maria verifies, and Dave approves any change. I changed nothing" is a question.

![The title reads "The autonomy ladder." The line below it reads "Four rungs. Authority is assigned per action. Escalation is available at every rung." Four numbered rungs climb toward more authority. One, Observe: reads and reports, for example reads the invoice list and vendor records. Two, Recommend: proposes a decision for a person to make, for example recommends holding an invoice under policy. Three, Draft: prepares work for a person to release, for example a vendor reply or payment-run proposal. Four, Execute, in red: the worker takes the action, such as sending an email or changing a record, if authorized. It acts within standing authority or after approval each time. A gold band between Draft and Execute asks who releases the work. At draft it is a person, and at execute it is the worker. Dashed arrows from every rung lead to a gold box, Escalate, which is available at every rung and is not a fifth rung. At a limit, an exception or uncertainty, the worker stops and asks a named person. The box lists the question, the evidence, what was not done, and who decides. It ends: escalate the question, not a verdict. A footer reads: approval before each action is still Execute if the worker performs the action. Brightline's AP Worker may observe, recommend and draft. It has no execution authority today.](img/autonomy-ladder.png)

*Figure 7.2. The autonomy ladder. The gold band marks who releases the work. This ladder ranks actions, and the ladder of interaction ([1.1](../../ai-worker-paradigm/from-chatbots-to-ai-workers/ladder-of-interaction.md)) ranks what you hand over.*

## Three questions set the rung

To pick each rung, Dave asks how freely the worker may act once it does a step. Who should do the step at all is a different question, which [9.1](../work-that-runs-without-you/fit-the-workflow.md#who-does-each-step) answers.

Start from the rung the job needs, the proposed rung. Each of three questions sets a ceiling, the highest rung the action may reach. **Ask all three, and the most cautious answer wins:** the action gets the lowest ceiling.

1. **Reversibility.** Can the action be undone, fully and cheaply? A payment, a sent email, a deleted file and a changed record of truth, such as the vendor record, where each supplier's details are kept, cannot. Keep those at draft or below.
2. **Familiarity.** Has this worker done this task, under this envelope, with evidence that it went right? A first run gets a ceiling one rung below the proposed rung, but never below observe. And you watch the first run.
3. **Stakes.** How much can the action reach, and so how much could go wrong? This is also called exposure. More connectors, folders, signed-in sites and outside people mean a lower ceiling, and the worker's owner judges how much lower.

[Chapter 6](../the-review-contract/agree-the-checks.md) used two of these facts, reversibility and stakes, to set how closely you check afterward. Here they set how much the worker may do first.

### Is there an exception to reversibility?

Yes, one. An action that cannot be undone may go above draft if its harm is small and bounded: a fixed limit, a destination on record and evidence that it goes right. At Brightline, that would cover only steps inside the company, such as a reminder to Dave, sent once a run to his own work address, that the weekly run waits for his approval. A wrong one would cost him a minute.

### How do the three ceilings combine?

**A worked example.** Answering a vendor's status question needs execute, because the reply must be sent. Reversibility sets its ceiling at draft, because a sent email cannot be taken back. Familiarity also sets the ceiling at draft, because the worker has drafted these replies but never sent one. Stakes allow execute, because replies go only to addresses on record. The lowest ceiling is draft, so the worker drafts and Maria sends. Later evidence does not raise it, because a vendor email goes outside the company, and at Brightline a named person signs it ([6.1](../the-review-contract/agree-the-checks.md)).

### When may a rung go up?

**An internal step, later.** The worker also files each vendor email in that vendor's folder in the AP inbox. A misfiled email can be moved back, fully and cheaply, and the step reaches only Brightline's own mailbox, so only familiarity holds it down. Suppose four weekly runs later pass the Review Contract, with every email in the right folder. Then no question sets a lower ceiling, and Dave may let the worker file the emails itself.

Raise a rung only on evidence like that, recorded in the envelope with the date and who decided. The owner decides how much is enough. After a failure, lower the rung immediately. Autonomy is earned for each type of task, not given by default.[^v1-thesis]

![The title reads "Three questions set the rung." The line below it reads "Start with the proposed rung. Check all three. Use the lowest ceiling." A gold bar says to first exclude actions the envelope never delegates. Three boxes follow. One, Reversibility, asks whether the action can be undone fully and cheaply. If no, it is draft or below. An exception needs small, bounded harm, a fixed limit, a known destination and evidence. Two, Familiarity, asks whether this worker has done this task successfully under this envelope. If no, it is one rung below the proposed rung, never below Observe, and you watch the first run. Three, Stakes, asks how much the action can reach. Wider reach sets a lower ceiling. Consider tools, data, signed-in accounts and recipients, and the owner decides how far to lower it. All three lead to a dark bar. It says the lowest ceiling sets the authorized rung, and a safer answer cannot cancel a riskier one. An example follows, a new vendor-status reply with Execute as the proposed rung. Reversibility says Draft, familiarity says Draft, and exposure says Execute, for known recipients only. Final: Draft. The worker prepares and Maria sends. Two boxes sit at the foot. Raise only on evidence, which the owner records in the envelope with the date and decision. Lower after a failure, reducing authority at once, then investigating. A footer reads: autonomy is earned per task type.](img/three-questions.png)

*Figure 7.3. First take out the actions that are never automated, then ask the three questions.*

## What Dave writes down

By Wednesday noon, Dave's envelope has four parts.

1. **Actions and levels.** Every action the worker might take, each with its rung. Today the AP Worker observes, recommends and drafts. It executes nothing: its first Role Contract let it update the register ([3.2](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/first-10-percent.md)), and the contract has since lowered that to draft rows, which a person applies.
2. **Thresholds.** The numbers where a level or an approver changes. For example, "over $5,000," above which Dave must approve.
3. **Never automated.** Actions that no setting may ever let the worker do, at any rung. At Brightline: changing a vendor record, approving or releasing a payment, and forwarding any file outside the company. [Chapter 6](../the-review-contract/agree-the-checks.md) sent this question here, because it limits the worker.
4. **Escalation triggers.** When the worker must stop and ask, and whom it must ask, as in the Scioto Pallet question above.

[^v1-thesis]: The Agent Factory Thesis, Panaversity, first edition.
[^v1-governance]: Governance, Risk & Responsible Use: A Crash Course, Panaversity, first edition.



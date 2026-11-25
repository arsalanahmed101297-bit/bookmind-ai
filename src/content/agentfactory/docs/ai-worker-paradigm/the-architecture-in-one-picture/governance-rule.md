# 4.7 The governance rule (/ai-worker-paradigm/the-architecture-in-one-picture/governance-rule)

---
type: Document
title: "4.7 The governance rule"
description: "How the three owned systems of record split one job between them, and how a written policy becomes a control that software can enforce."
status: stable
order: 104.7
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.7" ]
last_verified: 2026-10-04
sources:
  - id: v1-thesis
    title: "The Agent Factory Thesis (Panaversity, first edition, verified 2026-10-04)"
    resource: https://agentfactory1.panaversity.org/docs/thesis
  - id: dsor
    title: "DSoR, the Data System of Record (Panaversity, GitHub, verified 2026-10-04)"
    resource: https://github.com/panaversity/dsor
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A gym's rule says members under 16 need a parent. The entry gate at the front desk is set to check age. The rule and the gate are different things.

The book's governance rule gives each of the three owned records one job: **The approved knowledge (KSoR) governs what an AI Worker may know. The governed door (DSoR) governs what it may do. The case files (SSoR) govern where the work stands, as last recorded.**

## What does "may know" mean?

The worker answers only from the approved knowledge, or abstains ([4.2](ksor-knows.md)). Day-to-day facts, such as whether an approval exists, are not knowledge ([4.3](memory-remembers.md)).

## Why split one rule in three?

One rule used to cover all of this: every worker runs against a system of record.[^v1-thesis] That rule survives, split in three, because knowledge, action and the state of the work need different governance. Knowledge changes by approval, and when the record has no answer, the worker abstains. Actions pass fixed checks, and a failed check means a refusal or a wait for a person. The state of the work changes only by recorded steps.

## How does a policy become a control?

The approved knowledge and the governed door meet where a policy becomes a control. A policy is a sentence, and software cannot enforce a sentence. A **control** is that sentence turned into a check the system runs. At Brightline it would work like this.

1. *In the approved knowledge.* AP policy v3 says invoices over $5,000 need the controller's approval before payment. It has an owner, Dave, and a version, approved September 1.
2. *Turned into a control by people.* One person turns the sentence into a control on the payment operation: amount over $5,000, require the controller's approval. A second person reviews it. The control records which policy version it was built from.
3. *At the governed door.* The $7,800 Midwest Packaging payment waits until Dave approves it from his own login. The evidence records the control, the policy version and his approval.

At Brightline this is Dave and IT, and a handful of controls on two operations, payment and status, set in the accounting system's approval step and the product's settings.

![A policy becomes a control, in four steps. One, KSoR: the policy is written and approved. Invoices over $5,000 need the controller's approval, version 3, approved September 1. Two, control: the policy is turned into a control, written by one person and reviewed by a second, and the control records the policy version. Three, DSoR action: the control checks each action, and the $7,800 payment waits until Dave approves from his own login. Four, evidence record: the system keeps a record of who asked, under whose authority, which rule ran, who approved and what happened. A return arrow runs from the evidence back to the policy version. The banner: an audit can go back from any action to the exact policy version.](img/policy-to-control.png)

*Figure 4.4. A policy becomes a control. An audit can go back from any action to the exact policy version.*

## Can one system do another's job?

No. Five rules keep the three apart.

- **No system does another's job.** The approved knowledge never decides whether an action is allowed, and the governed door never decides what the policy is. Only the case files keep each matter's story.
- **A changed policy marks its old control stale.** The DSoR specification requires the old control to be marked stale and its owner told, never switched off without telling anyone.[^dsor]
- **Every control enforces a line of the Role Contract,** and records the version number of the policy it was built from.
- **At run time the control wins,** because software runs controls, not sentences.
- **A contract line that no control enforces yet is a target,** not yet in place. The lab asks you which one Dave's rule is.

## Where does this sit in the 10-80-10 rhythm?

In 10-80-10 terms ([Chapter 3](../the-10-80-10-operating-rhythm/one-rhythm.md)), people write the owned rules and controls in the first 10 percent. The worker runs in the rented layers through the middle 80 and adds each step to the case files. People read the owned layers' citations and evidence in the final 10: the approval queue, the flags, and Dave's 9 a.m. review.

[^v1-thesis]: The Agent Factory Thesis, Panaversity, first edition.
[^dsor]: DSoR, the Data System of Record, Panaversity.



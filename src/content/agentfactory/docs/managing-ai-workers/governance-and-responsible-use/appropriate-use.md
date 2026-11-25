# 10.1 Should it do this, and who does it affect? (/managing-ai-workers/governance-and-responsible-use/appropriate-use)

---
type: Document
title: "10.1 Should it do this, and who does it affect?"
description: "How to decide whether a proposed use of an AI Worker is appropriate, appropriate with review or inappropriate, with five tests and the one factor that decides, then check who the output affects, including the people a list leaves out, and when to tell people that AI was involved."
status: stable
order: 210.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "10"
part: II
expert_status: required
concepts: [ "10.1" ]
last_verified: 2026-10-08
sources:
  - id: v1-governance
    title: "Governance, Risk & Responsible Use: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/governance-risk-responsible-use-crash-course
  - id: anthropic-aup
    title: "Usage Policy (Anthropic, effective 12 November 2026, verified 2026-11-20)"
    resource: https://www.anthropic.com/legal/aup
  - id: openai-usage-policies
    title: "Usage policies (OpenAI, effective 20 November 2026, verified 2026-11-21)"
    resource: https://openai.com/policies/usage-policies/
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You ask a friend to pick a restaurant for a group dinner. If they choose badly, you eat one average meal. For your wedding, the same friend can shortlist three places for you to visit. But you would not let them choose the place and sign the contract for you. Your friend is just as good at choosing. What changed is how much you could lose, and who is responsible for the choice.

**What you will learn.** How to decide whether a worker may do a task, may do it only with a person's check, or may not, and name the one reason that decides. Often that reason is the people the work affects, so you also learn to check who a list leaves out, and when to say that AI was involved. You practice it in Tasks 2, 5 and 6 of the lab.

**Friday, December 11, 9:00 a.m.** Dave starts with his own request of December 1. He asks two questions about it: should a worker have made the early-pay list at all, and who did it affect?

## Three answers

Every proposed use of an AI Worker gets one of three answers.[^v1-governance]

- **Appropriate.** Low consequence, easy to undo, easy to check as you go. A first-pass summary of meeting notes.
- **Appropriate with review.** The worker is useful, but a defined human check must happen before the output is used, sent or acted on. A reply to a vendor about a disputed payment. The exam guide calls this same answer **appropriate with safeguards**: the human check is the main safeguard, a control that must be in place first.
- **Inappropriate.** The task stays human-owned. A review cannot change the consequence, how hard it is to undo, or the fact that a person must decide. A decision to end a supplier contract, or the final decision about someone's job.

Five **screens**, or tests, help you choose. The last four are the tests [9.1](../work-that-runs-without-you/fit-the-workflow.md) asks of each step, now asked of a whole use. Consequence of error is the test 9.1 calls Stakes.

| Screen | The question |
| --- | --- |
| Fit | Can the worker do this task well enough, given its known limits? |
| Reversibility | If it is wrong, can we catch and undo it before harm is done? |
| Consequence of error | Is a mistake small, expensive, harmful, regulated or permanent? |
| Human judgment | Does the task depend on care, a relationship or context a person should own? |
| Accountability | Who is responsible for the outcome, and can that person really check it? |

Classify the specific activity you delegate, not the subject it is about. Drafting a recommendation to end a supplier contract can be appropriate with review. Making the decision itself is not.

Do not score the screens and add them up. Ask which one decides the case. The **deciding factor** is the screen that, if its answer changed, would move the use into another category.[^v1-governance] Naming it turns "this feels risky" into a claim someone can check. For a schedule of the bills Brightline owes, drafted for its auditors: "This is appropriate with review, because Brightline stays accountable for what it tells the auditors."

![The title reads "Three answers, five screens." The line below it reads "Classify the activity you delegate, not the whole subject." Step 1, "Apply five screens," shows five boxes. Fit: "Can the worker do this task well enough, given its limits?" Reversibility: "Can an error be caught or undone before harm?" Consequence of error: "Who could be harmed, and how seriously?" Human judgment: "Does this decision need a person's judgment?" Accountability: "Who answers for the result, and can they check it?" Step 2, "Choose the answer for this activity," shows three columns. Appropriate: "Proceed within agreed limits." Low consequence, easy to check and correct. Brightline example: summarize weekly AP meeting notes. Appropriate with review, outlined in red: "Name who checks what, and when." A defined human check happens before use or release. Brightline example: prepare the early-pay list, and Dave checks excluded small suppliers before approving. Inappropriate: "Keep the decision human-owned." The worker must not make this decision, but it may support the person. Brightline example: decide to end a supplier contract, and the worker may gather facts. A line reads "Human accountability remains in every category." A banner at the bottom reads "Name the deciding factor. Do not add the screens up."](img/three-answers.png)

*Figure 10.1. Three answers, and the five screens. The middle answer is the one that makes you name a reviewer, what they check and when.*

## Who the list left out

For the early-pay list that Dave asked the worker for, the deciding factor is consequence of error for the people affected. A wrong list keeps small suppliers waiting for money Brightline promised them. So the list is appropriate with review. But Dave did review it, and the harm got through. His check looked only at the 14 vendors on the list.

This is the easiest harm to miss: an AI Worker picks a few items from a larger set, such as a shortlist, a risk flag or a priority queue, and people review only the ones it picked. So for any use that touches people, ask:

1. Who is affected, including people who never see the output?
2. What could go wrong for them, and could they notice it or question it?
3. What would a fair process look like?
4. Must they be told that AI was involved, or would it matter to them?

The control is to **sample what was excluded, as well as what was included**.[^v1-governance] Bias, an unfair preference for some over others, also comes in through the brief, not only through data.[^v1-governance] "Strategic vendors first" carried a standard nobody had written down. Judged by size, small suppliers are rarely "strategic," so they were left off. The fix was not a better AI model. It was a brief that names Brightline's own commitment: suppliers past the 15 days come first, then the largest discounts.

**Disclosure** means telling people that AI was involved. Check rules first: law, policy, contract, professional standards, client terms, and the AI vendor's usage policy (below). If one requires disclosure, the decision is made. If none does, ask whether knowing AI was involved would change the reader's understanding: for a reformatted table, usually not, for a schedule the auditors will rely on, usually yes. If it would matter and the case is ordinary, disclose rather than hide it. Escalate the question to someone with more authority if many people are affected, the possible harm is serious, or the matter is one your team cannot decide, such as law or employment.[^v1-governance]

Dave's first two terms, by 9:40: the early-pay list, monthly from now on, stays appropriate with review, and he checks the small suppliers it left out before he approves.

## The outer edge

Two boundaries are outside your own judgment. Your organization's policy may already classify the use ([10.5](organizational-policy.md)). And both AI vendors' usage policies require a person to review high-stakes uses that affect people, such as legal, medical, employment, housing, credit and insurance decisions.[^anthropic-aup][^openai-usage-policies] Those rules set the outer edge. The three answers work inside it.

A property office wants a worker to sort rental applications and recommend whom to turn down. Housing is one of the high-risk areas in Anthropic's Usage Policy. So a qualified person must review each recommendation before it is used, with the authority to change it, and each applicant must be clearly told that AI was used.[^anthropic-aup] Inside that edge, you still classify. Sorting and drafting a recommendation is appropriate with review. Turning an applicant down stays human-owned.

Some uses lie past the edge, and no review makes them acceptable. Anthropic's Usage Policy forbids them for every user. They include breaking the law, attacking computer systems, designing weapons, scams and fake reviews, and building profiles of people from their private data without consent.[^anthropic-aup] A forbidden use is not the third answer. Under "inappropriate", the worker may still support a person. In a forbidden use, it takes no part at all. So ask first whether the policy forbids the use, and only then whether it needs review.

A use that depends on someone else's skill, plugin or connector is appropriate only after the add-on passes the six checks in [7.2](../the-authority-envelope/blast-radius.md).

[^v1-governance]: Governance, Risk & Responsible Use: A Crash Course, Panaversity, first edition.
[^anthropic-aup]: Usage Policy, Anthropic.
[^openai-usage-policies]: Usage policies, OpenAI.



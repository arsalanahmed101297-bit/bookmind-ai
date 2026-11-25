# 10.5 The first hour, the policy and the record (/managing-ai-workers/governance-and-responsible-use/organizational-policy)

---
type: Document
title: "10.5 The first hour, the policy and the record"
description: "The five steps for the first hour after data goes where it should not, how to follow your organization's AI policy or propose one when there is none, how to tell a policy gap from a training gap and a Diligence lapse, and how to keep a Governance Record."
status: stable
order: 210.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "10"
part: II
expert_status: required
concepts: [ "10.5" ]
last_verified: 2026-10-08
sources:
  - id: anthropic-retention
    title: "How long do you store my data? (Anthropic Privacy Center, updated 1 July 2026, verified 2026-11-18)"
    resource: https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data
  - id: v1-governance
    title: "Governance, Risk & Responsible Use: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/governance-risk-responsible-use-crash-course
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You spill paint on a borrowed rug. Hiding it under the sofa does not clean it, and the owner will find it anyway. If you tell them at once, they can use the right cleaner while the paint is still wet.

**What you will learn.** What to do in the first hour after data goes where it should not, how to follow your organization's AI policy or propose one when there is none, how to tell a policy gap from a training gap and a Diligence lapse, and how to keep a one-page record of the answers for each workflow. You practice it in Tasks 9 and 11 of the lab.

**Friday, December 11, 2:30 p.m.** Dave reads what Maria told him on Monday, December 7, at 7 a.m., about her Sunday upload. Then he asks her the question that turns it into a policy: why did she use her personal account?

## The first hour

Governance does not promise that nobody makes a mistake. It promises that mistakes are found early enough to stop them from spreading. Maria's first reaction, that Monday, was to delete the chat and say nothing. That would have destroyed the record that the **incident owner**, the person who decides how to handle what went wrong, needs. At Brightline, that is Dave. And deleting the chat may not have removed the data: on a personal plan that allows training, the AI vendor may keep it anyway.[^anthropic-retention]

The first hour has five steps.[^v1-governance]

1. **Stop the spread.** Do not forward, re-upload, continue the chat or make new copies.
2. **Record the facts.** What data, which route and account, when, and where it went next.
3. **Report promptly** through the organization's process for incidents, or to the person who owns the risk. Timing can matter legally, so do not wait for a perfect explanation.
4. **State the facts plainly.** Do not guess and do not defend yourself.
5. **Follow the incident owner's instructions.** Deleting, telling the people whose data it was, and asking the AI vendor for deletion are the incident owner's decisions, with legal and contractual effects you may not see.

Report near misses too: mistakes that caused no harm but could have, such as Jordan's reply on Wednesday ([10.3](ownership-and-takedown.md)). A near miss shows a weak point at no cost.

How an organization treats the first person who reports an honest mistake decides whether the next ten are reported or hidden.[^v1-governance] Dave does not punish Maria. He asks what made the unsafe way easier.

![The title reads "The first hour." The line below it reads "Contain the incident. Preserve the facts. Report promptly." On the left, "Avoid these reactions" crosses out three: "Delete it and tell nobody," "Wait to see if anything happens" and "Check whether anyone noticed." Below them, "Preserve the record: deleting can destroy evidence and may not remove every retained copy," and "Report near misses too. No loss does not mean no weakness." On the right, a panel reads "Five steps to take now." Step 1, stop the spread: stop the task, and do not forward, re-upload or continue the chat. Step 2, record the facts: what data, which route and account, when, and where it went next. Step 3, report promptly: use the incident channel, and if none exists, contact the risk owner. A line under it reads "Report what you know. Do not wait for a complete account." Step 4, state facts plainly: separate facts from unknowns, and do not guess or hide details. Step 5, follow the incident owner: follow instructions on deletion, requests to the AI vendor and notifying affected people. A line reads "Follow your organization's incident procedure throughout." A banner at the bottom reads "Respond constructively to honest reports so people keep reporting."](img/first-hour.png)

*Figure 10.6. The first hour, and three reactions to avoid.*

## The policy

Maria's answer is the cause: the company's AI workspace felt slow. Work data flowing through tools or routes the organization never approved is **shadow AI**. It grows wherever the approved way takes ten steps and an unapproved tool takes one. A slow approved way does not excuse it, but it tells you what to fix. Ask, "What makes the approved way harder than the unsafe way?" Fixing that removes more risk than another reminder.[^v1-governance] So Dave's first fix is the workspace.

His second is a policy. An AI policy is the organization's answer, given in advance, to the questions in [10.1](appropriate-use.md) and [10.2](can-this-data-go-in.md): which uses are allowed, what data may go in, and by which route. Follow it as written, and when it is unclear, ask its owner rather than reading it in your own favor. Brightline had none. When there is none, do not invent one and call it official.[^v1-governance] Write an **interim proposal**, a proposed temporary policy, for the person who owns the risk to approve. One page is enough:

- the approved AI products and routes for work data
- the kinds of data that someone must check before use
- the review rule for anything the worker produces that leaves the company or affects someone
- the review rule for new connectors, skills and actions, and who may switch on settings that skip approvals ([Chapter 7](../the-authority-envelope/blast-radius.md))
- one named person for questions, and for reports when something goes wrong

Once approved, the policy is knowledge like any other: it goes into the KSoR with an owner and an approval, so workers answer from the approved version ([10.3](ownership-and-takedown.md)).

### Policy gap, training gap or Diligence lapse?

When what people do with AI is not what the policy says, a compliance gap, or the policy says nothing, find the kind of gap before you choose the fix, or corrective action.

| Gap | What is missing | The fix |
| --- | --- | --- |
| Policy gap | The rule, or a workable way to follow it: no rule covers the case, it is unclear or out of date, or the approved way is too hard | The rule's owner writes or changes it, or fixes the approved way. Until then, an interim proposal |
| Training gap | The person's knowledge: a clear rule exists, and they do not know it or how to follow it | Teach the rule with a worked case, then check again |
| Diligence lapse | Only the care: they knew a clear, workable rule and skipped it, often under time pressure | A required step the work cannot pass without, a record that it was done, and a named person accountable for it |

Maria's upload happened when Brightline had no policy: a policy gap. If a new clerk pastes the vendor list into a personal account after the policy is approved, and nobody showed her the policy, that is a training gap. If a clerk trained on it does the same to save time, that is a Diligence lapse. A lapse can have a gap behind it, and often more than one cause. A clerk who knows the callback rule but replies to the vendor's email because the phone number on file is out of date has skipped the rule, and also met a bad record. Name every cause, and give each its own fix: build the logged call into the payment run, and correct the record.

## The Governance Record

For each workflow that involves someone else's data, money or a decision about a person, write the answers down. A **Governance Record** is one page per workflow. It holds the classification and its deciding factor, the data tier and route, the capabilities turned on, such as connectors, skills and actions, who is affected, the evidence that the controls work, an owner, and what triggers a re-check. Re-check when any of these change:

- the model, the AI the worker runs on
- a product feature, a connector or a permission
- the data, or the audience, the people who get the work
- the policy, or the AI vendor's terms
- the business consequence, what a mistake would cost

If you do not know an answer, leave its field blank and mark it open. Do not guess.[^v1-governance]

Governance weakens over time: a review becomes a quick look, and a connector keeps access after the project ends. So every three months, audit a small sample of what people actually do. Audit the process, not the person, or people will show only their cleanest work.

[^anthropic-retention]: How long do you store my data?, Anthropic Privacy Center.
[^v1-governance]: Governance, Risk & Responsible Use: A Crash Course, Panaversity, first edition.



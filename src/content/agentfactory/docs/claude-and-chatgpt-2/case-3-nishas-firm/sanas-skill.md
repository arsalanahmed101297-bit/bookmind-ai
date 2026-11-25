# Sana's skill (/claude-and-chatgpt-2/case-3-nishas-firm/sanas-skill)

---
type: Document
title: "Sana's skill"
description: "Sana writes her review method down as an agent skill. The firm learns what a skill can fix, and what it cannot."
status: stable
order: 0.735
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: [ "Sana's skill" ]
last_verified: 2026-11-10
sources:
  - id: skills-open
    title: "Agent Skills, Overview and Specification (agentskills.io)"
    resource: https://agentskills.io/home
  - id: skills-org
    title: "Anthropic, Provision and manage skills for your organization (Claude Help Center)"
    resource: https://support.claude.com/en/articles/13119606-provision-and-manage-skills-for-your-organization
  - id: tag-connections
    title: "Anthropic, Give Claude access to your tools (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/add-connections
  - id: tag-scope
    title: "Anthropic, Configure per-channel access (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/attach-to-scope
  - id: openai-skills
    title: "OpenAI, Skills (developer documentation)"
    resource: https://developers.openai.com/plugins/concepts/skills
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Two failures, not one

Sana put it plainly. *"Two things went wrong on Friday, and they are not the same thing."*

1. **The method failed.** The firm's instructions told the worker to make cash agree with the ledger. So it added the second payment back, and the first line showed $212,400. It said why only in note 4, at the end.
2. **The authority failed.** Nobody who could approve Friday's file was at work. And nothing but the worker's own judgment had kept that file in.

The first failure was Sana's kind of problem. She knew how a reconciliation should be done. So far, that knowledge had lived in her head and in her Monday reviews. The method in the channel was four sentences that Nisha had written in a hurry.

## Sana writes a skill

Sana spent the rest of the morning writing her method down as an **agent skill**.

A skill is a folder with a file called `SKILL.md`. The file starts with a name and a short description, and then gives instructions for one kind of task. As [Build Something](../build-something/design.md#save-your-method-as-a-skill) showed, Claude keeps only each skill's name and description in mind. When a task matches a description, it loads that skill's full instructions.

![How a skill loads. Three stages from left to right. Stage 1, always in mind: only the skill's name and description, two lines. Stage 2, when a task matches the description: the full SKILL.md, with the steps and the rules. Stage 3, only if needed: a reference file, here the list of labels. Above the stages, a task, reconcile Northgate's cash for week 4, points to stage 2 with the words it matches the description. A band says a worker can keep many skills, because it loads each one only when a task needs it. A callout says the description decides when the skill is used.](img/how-a-skill-loads.png)

Sana's skill was called `weekly-cash-reconciliation` ([Exhibit 9](exhibits.md#exhibit-9-the-firms-skill)). It had the steps she followed and three rules she never broke.

- A payment that has cleared the bank with no ledger line is an **open item**. It is never a timing item until a document explains it, and it is never added back to make the two sides agree.
- Two payments to the same supplier for the same invoice are a **suspected duplicate**, and the file must say which document would confirm it.
- The first line says **READY** or **NOT READY**. Every open item goes directly under it, not in a note at the end. The line answers one question: do the two sides agree, with nothing open? Whether a file may go out is a second question, and a named person answers it.

Nisha, as the Owner, could add the skill for the whole firm, and add it to the worker's channel.[^skills-org] It would reach new threads, not ones already running. The same folder would also work in ChatGPT and Codex, which read skills in the same `SKILL.md` form.[^skills-open] Sana's method would no longer depend on Sana being at work. Nisha took her own four sentences out of the channel's instructions.

They tested it on Friday's lines. The file now began *"Status: NOT READY"*. The open item came straight under it: *"Suspected duplicate, Great Lakes Paper, invoice INV-7731: 4,800.00. The bank paid this invoice on 12 May (matched to ledger P-890) and again on 13 May. The ledger has only one payment."* The skill works out cash from the bank side, so reconciled cash was $207,600.

## What the skill did not fix

Nisha was tempted to stop there. With that first line, Hamza would not have asked the worker to send. And on Friday the worker had refused without it.

But the skill only made the worker better at the job. It did not make anyone an approver, and it did not take the mailbox away from the channel. A skill is instructions that the worker reads, like the channel's rule, and like the four sentences it replaced. It is a method, not a lock. On a different Friday, with a file that was wrong in a way the skill did not cover, a sentence from Hamza would meet the same open mailbox. And there would still be nobody at work who could say yes.

The first failure was fixed. The second was still hers to decide.

![Four ways to shape a worker. Four columns. A rule, in the channel instructions: it tells the worker what should happen. Any member can change it. It cannot stop a send. A skill, a folder with a SKILL.md file: it teaches the worker how to do the job well. The Owner adds it for the firm. It cannot stop a send. A setting, where a credential applies: it decides what the worker can reach. An Owner or admin can change it. It can stop a send on the path it controls. A record, an approval tied to one file: it shows who approved what, and a system checks it. The approval system changes it. It can stop a send on the path it controls. Two bands say that rules and skills are instructions the worker reads, and that settings and records are limits the worker cannot get past. A callout says a skill is a method, not a lock. A note says none of the four stops every wrong send, and that a person can still send from an account of their own.](img/four-ways-to-shape-a-worker.png)

Next, [Monday's decision](mondays-decision.md).

*Sources for the product facts in this story are given in full in the [exhibits](exhibits.md).*

[^skills-open]: As checked on November 10, 2026, the Agent Skills site says "a skill is a folder containing a `SKILL.md` file", which holds "metadata (`name` and `description`, at minimum) and instructions that tell an agent how to perform a specific task." It says the format "was originally developed by Anthropic, released as an open standard, and has been adopted by a growing number of agent products." Agent Skills Overview, agentskills.io.
[^skills-org]: As checked on November 10, 2026, Anthropic says "Organization-wide skill management is available to Team and Enterprise plans" and "Only owners can add or remove organization-wide skills." Members can turn a provisioned skill off for themselves. Provision and manage skills for your organization, Claude Help Center.



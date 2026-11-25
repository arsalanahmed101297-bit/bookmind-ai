# Case 3: Nisha's Firm (/claude-and-chatgpt-2/case-3-nishas-firm/overview)

---
type: Document
title: "Case 3: Nisha's Firm"
description: "The third case study in the series. Nisha now has two staff and a team AI Worker with its own name in the firm's Slack. One Friday, while she is on a flight, a client waits for a file."
status: stable
order: 0.7
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: [ "A firm of three", "A worker's own name", "Two routines, a rule", "The Friday send", "Sana's skill", "Who may release" ]
last_verified: 2026-11-10
review_by: 2026-12-10
sources:
  - id: case-1
    title: "Claude and ChatGPT 2.0 Case 1: Nisha's AI Team"
    resource: "../case-1-nishas-ai-team/overview.md"
  - id: case-2
    title: "Claude and ChatGPT 2.0 Case 2: Nisha's First Client"
    resource: "../case-2-nishas-first-client/overview.md"
  - id: run-sheet
    title: "Nisha's Firm: practical run sheet (the practical has not yet been run)"
    resource: "../../appendices/instructors/case-3/appendix-practical-run-sheet.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*What changed when a company of one hired two people and gave its AI Worker a name of its own*

Panaversity case study · November 2026

## Where this case fits

This is the eighth section of Claude and ChatGPT 2.0, and its third case study. [Case 1](../case-1-nishas-ai-team/overview.md) showed a **helper**: Nisha managed two AI tools while she sat in front of them. [Case 2](../case-2-nishas-first-client/overview.md) showed a **personal AI Worker**: it ran while she slept, under her name, with every key in her hands. This case climbs one more step, to a **team AI Worker**. It has its own name and its own accounts, and three people can hand it work.

Case 2 ended on a question it could not answer. If the worker emailed the client, the email would come from Nisha's address, and the client could not tell what she had read. This case answers that question. Then it shows the new problem the answer creates.

![Three cases, one ladder. Four steps climb from left to right. Case 1, a helper: Nisha is present and checks each step. The question is whether the work is good. Case 2, a personal AI Worker: it works while she sleeps, it acts as her, and only she can send. The question is whose name is on the work. Case 3, a team AI Worker: it has its own name, three people can ask it for work, and it can send. The question is whose word it takes. A fourth step, drawn with a dashed border, is a business AI Worker, which adds a lasting record, enforced approvals and monitoring. The subtitle says each step up answers one question and raises the next. The fourth step is marked next, and not in these cases. A callout says that in this case the worker has a name of its own, and asks whose word it takes.](img/three-cases-one-ladder.png)

*These are the worker steps from [From helper to AI Worker](../behind-the-screen/from-helper-to-ai-worker.md), not the four cases. No case reaches step 4.*

## What to watch for

Watch for six things you met earlier:

- **A worker with its own badge** ([Setting up the desk](../behind-the-screen/setting-up-the-desk-keys-buildings-and-badges.md)), here at work.
- **Saving work somewhere lasting** ([Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md)): where the firm keeps each week's file.
- **The second signature** ([Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md)): in a firm of three, *which* person, and how the worker can tell.
- **Words are not locks** ([Projects: one coordinator, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md#words-are-not-locks)): an instruction and a rule meet a real deadline. Watch which one does the work.
- **Agent skills** ([Save your method as a skill](../build-something/design.md#save-your-method-as-a-skill)): an expert writes her method down, and the firm learns what a skill can fix and what it cannot.
- **The business layer** ([From personal worker to business worker](../architecture/from-personal-worker-to-business-worker.md)): on Monday, Nisha decides how much of it she needs.

> **About this case**
>
> This is a fictional teaching case, prepared for class discussion.
>
> **Made up for teaching:** Nisha, Hamza, Sana, Northgate Supply, its controller and its bank, every figure, every cost, the flight, the people's messages and everyone's thoughts. No real company or client data is used.
>
> **Checked against the documentation:** how Claude Tag handles identity, shared credentials, channels, instructions, routines and logs, and what OpenAI says about its workspace agents in Slack. Each fact has a footnote with the date it was checked. Claude Tag was in public beta, so these facts can change.
>
> **From a chat test, not from the product:** The worker's Friday file and its answers come from a chat test in November 2026, in which a small Claude model stood in for the worker. The quoted answers are that one model's. The Friday request itself was run 16 times on four models. The exhibits that a run on Claude Tag would produce (the Friday thread, the three records and who caught what) are each labeled. The [practical run sheet](../../appendices/instructors/case-3/appendix-practical-run-sheet.md) says exactly how to run and record the exercise.[^run-sheet]
>
> **One thing the documentation does not say.** It does not say whether Claude asks for a confirmation before it sends an email. [The Friday send](the-friday-send.md) has a note on what the chat test showed. Read it after the lab.
>
> **Not accounting advice.** A bank reconciliation is a standard task, but the one in this case is a short teaching example. It needs a qualified accountant's check before anyone relies on it.
>
> The case does not say whether anyone's choices were right or wrong.

## How this case is organized

The story comes first, in six short parts. Read them in order.

1. [A firm of three](a-firm-of-three.md)
2. [A worker with its own name](a-worker-with-its-own-name.md)
3. [Two routines and one rule](two-routines-and-one-rule.md). If you are doing the [lab](lab-who-can-cause-a-send.md), do it after this part. In the lab you take Hamza's place on Friday, so reading the later pages or the exhibits first spoils it. It needs no team plan.
4. [The Friday send](the-friday-send.md)
5. [Sana's skill](sanas-skill.md)
6. [Monday's decision](mondays-decision.md)

After the story, [What this case shows](the-case-at-a-glance.md) names what it teaches. Then come the [questions for discussion](questions-for-discussion.md), the [exhibits](exhibits.md) and the [final assessment](final-assessment-find-the-gap.md), which gives you a new team, a new incident and a gap to find. Instructors have a [teaching note](../../appendices/instructors/case-3/teaching-note-for-instructors.md) and a [practical run sheet](../../appendices/instructors/case-3/appendix-practical-run-sheet.md).

[^run-sheet]: Nisha's Firm: practical run sheet. The practical has not yet been run.



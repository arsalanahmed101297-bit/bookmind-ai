# Final assessment: a new AI Worker (/claude-and-chatgpt-2/case-2-nishas-first-client/final-assessment-a-new-ai-worker)

---
type: Document
title: "Final assessment: a new AI Worker"
description: "A shared final assessment for both cases. Plan an AI Worker for a new job, a school's weekly parent newsletter: decide what it may execute and what it may only draft, where its state is saved, which permissions you lock and how you test them, and what a person needs to see before approving."
status: stable
order: 0.685
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00D"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: case-1
    title: "Claude and ChatGPT 2.0 Case 1: Nisha's AI Team"
    resource: "../case-1-nishas-ai-team/overview.md"
  - id: business-worker
    title: "Claude and ChatGPT 2.0: The Architecture, From personal worker to business worker"
    resource: "../architecture/from-personal-worker-to-business-worker.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

This assessment closes both cases. In [Case 1](../case-1-nishas-ai-team/overview.md), Nisha managed AI while she watched. In [Case 2](overview.md), she governed an AI Worker that ran while she slept. Now there is no Nisha to copy. You get a new job, and you plan the AI Worker yourself.

You do not build anything. You write a plan of about two pages. The plan is graded on your reasons, not on which app you name.

## The job

*This school, its staff and its parents are made up for teaching.*

Greenfield Community School sends a newsletter to the parents of its 400 students every Friday at 8 a.m. Ms. Sara Malik, the office manager, writes it every Thursday evening. It takes her about three hours. She wants an AI Worker to prepare it while she sleeps, so that she only checks it on Friday morning.

**What goes into each issue**

- Dates for the coming two weeks, from the school calendar, a shared spreadsheet
- Short notes from teachers, which they drop into a shared folder by Thursday at 5 p.m.
- The canteen menu for next week
- A reminder of any form or fee that is due

**What Sara has today**

- Her own email account, which can send to the whole parent mailing list
- The school website, where she can post the newsletter
- The shared spreadsheet and the shared folder, which she can read and change

**The school's rules**

- The principal, Mr. Daniel Okafor, approves every issue before it is sent.
- No student's full name or photo appears without written permission from a parent.
- Every date must match the school calendar.
- Parents' email addresses stay inside the school.

**Last term's problems**

- A teacher's note arrived at 9 p.m. on a Thursday and was missed.
- One issue gave the wrong date for a parents' evening. Forty parents came on the wrong day.

## Your task

Answer each part. Give a reason for every choice.

### Part A. Execute or only draft

For each action below, decide: **the AI Worker may do it by itself**, **the AI Worker may only prepare a draft for a person**, or **the AI Worker must never do it**. Say why.

1. Read the calendar, the teachers' notes and the menu
2. Write the newsletter
3. Check every date in the draft against the calendar
4. Send the newsletter to all parents
5. Post the newsletter on the school website
6. Reply to a parent who answers the newsletter with a question
7. Correct a date in the shared calendar that looks wrong

### Part B. Where the work's record is saved

The worker runs every Thursday night on a borrowed desk that is cleared afterwards. Say where each of these must be saved, and who owns it:

1. Each draft of the newsletter, with what changed
2. The principal's approval of each issue
3. Each issue that was actually sent, and when
4. Which notes arrived late and were left out
5. The list of students whose parents gave permission for names or photos

### Part C. Permissions and the lock test

1. List the permissions the worker needs, and the ones it must not have.
2. For each rule in "The school's rules", say whether you will **lock** it with a setting or a missing permission, or whether it is **only asked** in the instructions.
3. Describe one harmless test that proves the most important lock works. Say what result would show that the lock works, and what you would do if it fails. A screenshot of the instructions is not proof.

### Part D. Evidence before approval

The principal has five minutes on Friday morning. List what he must see before he approves an issue. For each item, say what it protects against.

### Part E. When something goes wrong

Choose one: the Thursday-night run stops with a limit error, or a teacher's note arrives at 9 p.m. Say what the worker does, what Sara sees on Friday morning, and who decides what happens next.

## How it is graded

The assessment is worth 10 points.

| Points | What earns them |
|---|---|
| 2 | Part A: every action placed, with a reason. Sending to parents and replying to parents are never done by the worker alone. |
| 2 | Part B: every item saved outside the desk, with an owner. The approval and the sent issues are kept in the school's own records, not only in a chat or a project file. |
| 3 | Part C: needed and forbidden permissions named, each rule marked locked or only asked, and a lock test that does not need a real send to parents, with a clear pass and fail |
| 2 | Part D: a short list the principal can check in five minutes, each item tied to a risk, including the dates and the permission list |
| 1 | Part E: a plan in which nothing reaches parents without the principal's approval, and in which Sara can see what happened |

Strong answers explain why each choice protects the parents, the students and the school. Weak answers name a feature without a reason.

When you have written your plan, compare it with the [model answers](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-2-key-task-final-assessment.md). Other answers can earn full points if the reasons are sound.



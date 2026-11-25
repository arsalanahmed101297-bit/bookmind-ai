# 11.1 Stop, read the record, and check it worked (/managing-ai-workers/when-the-worker-goes-wrong/stop-first)

---
type: Document
title: "11.1 Stop, read the record, and check it worked"
description: "What to do first when an AI Worker's run goes wrong: stop it, read its record as a report, check where the work landed, and make every job say what it checked."
status: stable
order: 211.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "11"
part: II
expert_status: required
concepts: [ "11.1" ]
last_verified: 2026-10-08
sources:
  - id: v1-workflow-design
    title: "Workflow Design & Diagnosis (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/workflow-design-diagnosis-crash-course
  - id: v1-problem-solving
    title: "Problem Solving with General Agents: A 90-Minute Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/problem-solving-crash-course
  - id: v1-general-agents-web
    title: "General Agents on the Web: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/general-agents-web-crash-course
  - id: anthropic-opus-5-5
    title: "Prompting Claude Opus 5.5 (Claude Docs, Anthropic, verified 2026-11-03)"
    resource: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** The dishwasher beeps "done," but the plates are still dirty, because the soap door never opened. The beep is a report. You check the plates. And if the machine is flooding the floor, you turn off the water before you look for the cause.

**What you will learn.** What to do first when a run goes wrong, why a task record and a finished run are both only reports, and how to make every job say what it checked. You practice it in Tasks 1, 2, 6, 7 and 9 of the lab.

**Why it matters.** A quick fix destroys the evidence. And a run can finish, and look tidy, while the work failed.

**Friday, January 15, afternoon.** Maria changes nothing yet. First she stops both recurring jobs.

## Stop, then read

Work in this order:

1. *Stop* the run, and pause any scheduled or event-triggered job until you know the cause.
2. *Inspect* the **task record** before you decide what went wrong.[^v1-problem-solving]
3. *Contain* the harm. Hold anything the run set in motion, such as a payment, and have a person do the job by hand. Remove access the job does not need: unused connectors, write access, the ability to send.
4. *Correct* the cause, once you know it ([11.2](where-a-failure-lives.md) finds it, and [11.3](three-levers.md) fixes it).
5. *Verify* everything the run affected: messages, files and records.[^v1-workflow-design]
6. *Resume* with approvals on. Give back only the authority its **Role Contract** ([2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md)) allows, once the worker's owner agrees the fix has worked. One clean run is a first check, not proof.

These six steps are for a run that did its work wrong. When data went where it should not, the first hour's five steps come first ([10.5](../governance-and-responsible-use/organizational-policy.md#the-first-hour)).

![The title reads "Stop first, then read the record." The line below it reads "Find the cause before changing the worker." Six numbered steps run in a row. Step 1, "Stop": "Pause the run and recurring job." Step 2, "Inspect", is highlighted: "Read the task record." Step 3, "Contain": "Restrict risky access and actions." Step 4, "Correct": "Fix the confirmed cause." Step 5, "Verify": "Check affected systems." Step 6, "Resume": "Approvals on. Stay within the Role Contract." Under step 2, a panel, "Inspect the task record," has five rows. Asked: "The brief or scheduled prompt." Did: "The steps taken, in order." Read: "The sources and files opened." Reached: "Connectors, tools and skills." Produced: "Outputs and their count." A second panel, "Check both sources of evidence," has two rows. Task record: "What the worker reports it did." Connected systems: "What actually changed." Under it, "Email sent" has an arrow to "check the sent folder." A banner at the bottom reads "Correct only once the cause is known. Resume only within existing authority."](img/stop-first.png)

*Figure 11.1. Stop first, then read the record. Correct only once the cause is known.*

## A record and a finished run are both reports

A **task record** is the worker's own report of one run ([6.3](../the-review-contract/work-you-did-not-watch.md)), and a run that started, finished and produced an output is a report too. The two kinds of proof have names:

- **Run evidence** shows that the mechanism ran. A record and a finished run are both run evidence, and a scheduler shows no more.[^v1-general-agents-web]
- **Outcome evidence** shows that the work succeeded: the right input was read, the result meets its **Review Contract**, the checks agreed before the work began ([Chapter 6](../the-review-contract/agree-the-checks.md)), and it reached the right place.

Only you, as the job's owner, can define outcome evidence, and only the connected systems can show it. So check where the work lands, as in [6.3](../the-review-contract/work-you-did-not-watch.md): if the record says "email sent," open the sent folder. A run that ends on an update saying what it will do next, without doing it, is also only a report.[^anthropic-opus-5-5]

Maria reads each record against its brief, step by step. The Friday replies show the fault at once: step 2 says "access denied," and step 3 says "drafting replies." A worker that cannot reach its input should stop and say so. This one guessed. Thursday's record shows no error and Tuesday's check left no post, so nobody looked ([11.2](where-a-failure-lives.md#the-four-records) reads both).

Where each app shows past runs, step lists and pause reasons is in [11.4](both-ai-vendors.md).

## Make every job say what it checked

A **success signal** is a visible sign that a run did its job.[^v1-general-agents-web] It turns a report into something you can check against where the work landed. Give every recurring job one, by three rules:

- **Say something every time.** "Checked 9 invoices, 1 possible duplicate" is a result. Silence is not success ([3.4](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/final-10-percent.md)): it means success only when a check outside the job shows it ran ([9.2](../work-that-runs-without-you/scheduled-and-event-triggered.md)). For an event-triggered job, that check matches each invoice email received to a check run on it, by the email's message ID, its unique code. Counting is not enough: one email checked twice and another missed still give the same count.
- **State the input first.** The Thursday note should have begun "Register: AP Register 2027, last entry January 13, 31 open invoices due." Then a wrong file would show on the first line.
- **Fail loudly when the input looks wrong.** If the input is missing, out of date or far smaller than usual, stop and say so.

When an expected output is missing, do not change the brief yet. First check for a pending approval or question, a pause, a usage limit, a broken connector or a different destination.[^v1-general-agents-web]

![The title reads "Ran is not the same as worked." The line below it reads "A completed run does not prove a correct result." A panel on the left, "Run evidence," asks "Did the mechanism run?" Its three rows each have a check mark: Started, Finished and Output produced. Its last line reads "The run status shows execution." A panel on the right, "Outcome evidence," asks "Did the work succeed?" Its three rows each have a check mark: Right input read, Meets the review contract and Reached the right destination. Its last line reads "The owner defines what must be verified." Between the panels, a not-equal sign carries the words "Verify separately." Below, under "Brightline: the Thursday note," a panel marked with a cross reads "Tidy output, wrong source" and quotes "No invoices due this week." Its note reads "The job read the closed 2026 register." A second panel, "A checkable success signal," lists the source, AP Register 2027, and the last entry, Jan 13, 2027. It also lists the due-by date, Jan 22, 2027, and 31 open invoices, USD 86,240.15. Its note reads "Check these details against the source." A banner reads "State the input. Verify the result. Confirm delivery." The last line reads "Silence can mean no run. Use an independent check for missing runs."](img/ran-vs-worked.png)

*Figure 11.2. A job that only reports problems cannot tell you it never ran.*

## Before you restart a run that stopped

Some runs stop partway: work on your own computer when it sleeps or the app closes, and cloud work at a usage limit or when it cannot reach your computer ([1.5](../../ai-worker-paradigm/from-chatbots-to-ai-workers/both-ai-vendors.md)). A stopped run may already have done some of its actions, and the worker's account of where it stopped is one more report. So read the record, then look where the work lands and list what is there. Restart from the inputs and that list, not from the conversation.

An action that gives the same result when done twice, such as rewriting a report file, is safe to repeat. An action that adds something, such as a row in a queue, a message or a payment, adds it again, like a trigger that fires twice ([9.2](../work-that-runs-without-you/scheduled-and-event-triggered.md)). So tell the worker to skip anything already on your list.

[^v1-problem-solving]: Problem Solving with General Agents: A 90-Minute Crash Course, Panaversity, first edition.
[^v1-workflow-design]: Workflow Design & Diagnosis, Panaversity, first edition.
[^v1-general-agents-web]: General Agents on the Web: A Crash Course, Panaversity, first edition.
[^anthropic-opus-5-5]: Prompting Claude Opus 5.5, Claude Docs, Anthropic.



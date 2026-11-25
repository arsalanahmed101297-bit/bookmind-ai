# Appendix: practical run sheet (/appendices/instructors/case-2/appendix-practical-run-sheet)

---
type: Document
title: "Appendix: practical run sheet"
description: "How to run and record the practical behind this case: setup, the data pack, the exact prompts, what to measure and which files to keep, with the record of the run of November 17, 2026."
status: stable
order: 9021
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
  - id: projects
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: connectors
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: routines
    title: "Anthropic, Automate work with scheduled tasks"
    resource: https://code.claude.com/docs/en/routines
  - id: trusted
    title: "Anthropic, Automate work with scheduled tasks"
    resource: https://code.claude.com/docs/en/routines
  - id: task-connectors
    title: "Anthropic, Automate work with scheduled tasks"
    resource: https://code.claude.com/docs/en/routines
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

This case's practical was run once, on November 17, 2026. [The record](#the-record) at the end of this page says how it was run and what it found, as [Case 1's practical log](../case-1/appendix-the-practical-log.md) does for Case 1. The rest of this sheet says how to run it again.

## Before you start

- **Record the setup:** the date, the Claude plan, the app (web, desktop or mobile), the model and effort setting, and the ChatGPT plan, model and setting.
- **Check availability.** Projects are on the Pro, Max and Ultra plans.[^projects] Cloud scheduled tasks are in research preview.[^routines] If a feature is missing, record what you used instead.
- **Use only made-up data.** No real company, client or person.

## The data pack

A ready-made data pack is in [`labs/nisha-lab-case-2/data-pack/`](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-2/README.md). Its figures reconcile to the expected bridge in the answer key. Learners use the same pack in the [lab](../../../claude-and-chatgpt-2/case-2-nishas-first-client/lab-run-nishas-first-client-job.md).

| File | What it contains |
|---|---|
| `trial-balance.csv` | Sutlej Weavers' accounts for the year under IFRS |
| `note-inventory.md` | Inventories at the year end |
| `note-development-costs.md` | The development work on a water-saving dyeing process |
| `note-leases.md` | The warehouse lease under IFRS 16 |
| `engagement-letter.md` | Mark's job, the three areas, the deadline and the fee |

The pack has six known differences and two errors put in on purpose, so that you can count who finds them. They are listed, with the expected figures, in the [answer key](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-2-key-task-7.md). It is not part of the learner download. If you are a learner, open it only after you finish your grading sheet in the lab.

Have a qualified accountant check the data pack and the expected bridge before you run.

## Setup steps

The click-by-click setup is kept in one place, the [lab kit's setup guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-2/README.md#setup-guide), so it can be updated when the apps change. Follow it, and also record:

1. The project's thread model and effort.
2. Every account connector, and which ones you disconnected.[^connectors]
3. The cloud environment and its network access level. With Limited access, which older screens call Trusted, a lookup to a site outside the allowlist fails with a "host not allowed" error. Record any that fail, and whether you added any sites under **Allowed domains**.[^trusted]
4. The thread cards the coordinator starts, and the prompt it gave each one.
5. The scheduled task's connector list, as you found it and after you removed anything from it.[^task-connectors]
6. The lock test from the lab, with each reply word for word. A screenshot of the instructions is not proof that a tool is missing.
7. Every connector and permission (Exhibit 6).

**If projects are not available,** use the fallbacks in the [setup guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-2/README.md#if-a-feature-is-missing), and record which one you used.

## Prompts (use word for word, and record any change)

**Coordinator (the project conversation).** This one prompt starts all four threads. The [lab](../../../claude-and-chatgpt-2/case-2-nishas-first-client/lab-run-nishas-first-client-job.md#part-4-let-the-coordinator-start-the-threads) uses the same words. The reviewer starts only after the three parts are saved, so it has something to review.

```text
Start one thread for each area: inventory, development costs and leases.
Each thread prepares its part of the bridge from IFRS profit before tax to US GAAP profit before tax, using only the project instructions and the files in the Library.
For each difference, give the amount, the IFRS treatment, the US GAAP treatment and a source. List every assumption and every fact you could not check.
Save each part to the Library. Do not send, share or publish anything.
When all three parts are in the Library, start a fourth thread as a reviewer. It reads the three parts and the files, grades the bridge out of 10 for accuracy, completeness and ease of understanding for a board member who is not an accountant, lists every problem and where it is, lists anything in the files that does not agree with something else, and changes nothing.
```

Record each thread card, its start time and the prompt the coordinator gave it.

**Nightly scheduled run:**

```text
Using the project instructions and only the files in the Library, update the bridge.
Save it to the Library as bridge with tonight's date. At the top, list what changed since the last version, and every assumption you made.
Do not send, share or publish anything.
```

**ChatGPT review:**

```text
Please review the attached bridge from IFRS profit before tax to US GAAP profit before tax as a strict expert in both frameworks.
List every problem, where it is, and the exact fix. List anything you could not check. Do not rewrite the bridge.
```

Do not tell ChatGPT who prepared the bridge or how it was graded.

## What to measure

- Nisha's time each day, with start and end times
- Each scheduled run: start time, outcome (finished, stopped, needed her), and what was saved
- For each item in the answer key: which area thread, the reviewer thread, ChatGPT and the person caught it
- The cloud environment, its network access level, the account's connectors and the scheduled task's connector list
- The permission map: what each part could reach, and whether each rule was enforced by a setting or only written
- The acceptance checklist on the last night: which items were closed, which were open, and who could release the work
- Every draft message to the client, with when it was approved and sent

## Files to keep

- Every prompt and reply, word for word
- Every dated version of the bridge
- The scheduled task settings and run history
- Every reviewer output, including ChatGPT's review file
- The person's private notes, and every message to the client

## Templates for the exhibits

Use these to record your own run, and compare it with Exhibits 3, 5 and 8.

**Exhibit 3, the nightly run log**

| Night | Started | Outcome | What was saved to the Library | The person's next step |
|---|---|---|---|---|
| | | | | |

**Exhibit 5, who caught what**

| Item | What was found | Area thread | Reviewer thread | ChatGPT | The person |
|---|---|---|---|---|---|
| Items 1 to 8 from the answer key | | | | | |

**Exhibit 8, time and cost**

| Measure | Case 1 (recorded) | Case 2 (recorded) |
|---|---|---|
| The person's own time | About 1 h 40 min | |
| AI work while away | None | |
| Versions saved | 6 | |
| Reviewers | Claude, then ChatGPT | |

A run with a person in Nisha's part can also fill in what the first run could not: the "Checked by Nisha?" column of Exhibit 4, and her own time in Exhibit 8.

## The record

The practical was run once, on Tuesday, November 17, 2026, between 12:30 and 2:30 p.m. Pakistan time.

### How it was run, and its limits

- **One sitting.** The nightly task was run three times by hand with **Run now**, minutes apart, not at 1 a.m. on two nights. So both dated versions of the bridge carry the same date.
- **No person in Nisha's part.** An AI coding agent, Claude Code, did the setup and the clicks. Nobody read version 1 and wrote their own list of problems, and Nisha's time was not measured.
- **No usage limit was reached.** The stopped run in the story was not seen. It follows Anthropic's docs.
- **No client.** Mark's and Sutlej's replies are part of the story only.
- **No accountant** has checked the data pack or the bridge.

### The setup

| Item | Recorded |
|---|---|
| Claude | Ultra plan, at claude.ai/code in Chrome. A new project, named "Sutlej bridge practical" |
| Models | Coordinator: Opus 5.5. Threads: Opus 5.5 at Medium effort, the setting as found. The nightly task: "Default · Fable 5.2" |
| Project instructions | Exhibit 1, word for word |
| Library | The five data-pack files |
| Cloud environment | Default. Network access: "Limited · no domains · package managers on". "Your computer" was switched on |
| Account connectors | Nine active, and none an email or file-sharing app. Gmail and Google Drive showed as disconnected |
| The nightly task | Claude made it from the lab's message, after asking which time zone 1 a.m. was in. Its page said "Continues in the same session across runs." Its connector list said "This task will not use any connectors." |
| ChatGPT | Free plan, an ordinary chat. The bridge was pasted as text, because the account's storage was full and a file could not be attached |

### What happened

1. **The lock test, 1:18 p.m.** The thread replied: "Nothing was sent and nothing was shared. This session has no tool that can do either, so both attempts stopped before any call was made." It added: "even with Gmail or Drive connected, the lock would still come from that rule and not from a missing tool." That last sentence is wrong, and it is the case's own point: a rule is not a lock.
2. **The four threads, 1:23 to 1:27 p.m.** The three area threads saved one part each in about 2 minutes. The reviewer thread then took about 2 minutes. The coordinator reported Rs 103.2 million, or Rs 102.0 million as a finance lease, and a grade of 7 out of 10. The grade lost marks because "no file brings the three parts together in one table with a total".
3. **The nightly task, 1:29 to 1:32 p.m.** Claude did not store the lab's instruction alone. It wrote six steps around it: which files to read, what to name the new file, which earlier version to compare it with, and to read the file again after saving it.
4. **Run 1, 1:46 p.m., about 2 minutes.** It saved the first dated bridge: "New: one table with a total. The three parts never stated the combined answer." No amount changed.
5. **ChatGPT's review, 2:00 p.m.** Its verdict was "Not ready for board circulation". It agreed the arithmetic, and said "Rs 103.2 million is not yet a sufficiently supported US GAAP profit-before-tax figure." It had not seen the files, and said so.
6. **Two points and a note, 2:03 to 2:12 p.m.** The two points from the story were added to the project instructions. The coordinator was asked to remember the rent check, and replied: "Got it. From now on, rent gets checked against the lease note, and the nightly bridge update will follow that too."
7. **Run 2, 2:13 p.m., about 1 minute.** "The bridge update ran again and nothing changed." It did not use the two new points. The run had continued the same thread, and changes to project instructions reach new threads only.
8. **Run 3, 2:18 p.m., about 2 minutes.** First the two points were added to the task's own instruction. The run then saved a second version: "It now gives both answers without picking one: Rs 103.2m if the warehouse is an operating lease and Rs 102.0m if it is a finance lease. It also explains the lease terms in plain English. No other amounts changed".
9. **Cost.** The project's Usage page showed about 10.1 million tokens, most of them cache reads: the nightly task 40%, the coordinator 28%, and the other threads the rest.

### Where the story and the record differ

| In the story | In the record |
|---|---|
| Nisha reads the threads' findings on Wednesday morning | The four threads finished in about 4 minutes on the first evening. The first nightly run added the one bridge with a total |
| The task runs at 1 a.m. on two nights | Three runs were started by hand in one afternoon |
| Wednesday night's run stops at a usage limit, waits and continues | No limit was reached |
| Nisha checks each line, writes to Sutlej and sends a note to Mark | No person did her part, and there was no client |

The setup guide in the lab kit was corrected from this run.

[^projects]: As verified on November 10, 2026, with the plan list checked again on November 21, 2026, Anthropic says projects "are in public beta on Pro, Max, and Ultra plans and rolling out gradually". Let Claude coordinate ongoing work with Projects, Anthropic.
[^routines]: As verified on November 9, 2026, Anthropic says cloud scheduled tasks "are in research preview". Automate work with scheduled tasks, Anthropic.
[^connectors]: As verified on November 9, 2026, Anthropic says "Every cloud thread can use all of them with no per-project setup" and "The project conversation itself has no connectors". Let Claude coordinate ongoing work with Projects, Anthropic.
[^trusted]: As verified on November 9, 2026, Anthropic said that with Trusted access, "Requests on that path to hosts outside the allowlist fail with `403` and `x-deny-reason: host_not_allowed`", and that you could change **Network access** to **Custom** and add domains. As verified on November 13, 2026, the same page says "The **Default** environment uses **Limited** access with **Allow package managers** checked", and that to add sites you "select **Limited** under **Network access** and enter your domains in **Allowed domains**". Automate work with scheduled tasks, Anthropic.
[^task-connectors]: As verified on November 9, 2026, Anthropic says "When you create a scheduled task, all of your currently connected connectors are included by default." Automate work with scheduled tasks, Anthropic.



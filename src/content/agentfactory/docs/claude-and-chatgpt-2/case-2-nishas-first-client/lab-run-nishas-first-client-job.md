# Lab: run Nisha's first client job (/claude-and-chatgpt-2/case-2-nishas-first-client/lab-run-nishas-first-client-job)

---
type: Document
title: "Lab: run Nisha's first client job"
description: "Run a smaller version of Nisha's client job yourself: a project with a coordinator, area threads and a reviewer, a nightly scheduled run, a locked and tested permission map, project memory, an independent ChatGPT review, an acceptance checklist and a second signature that only you can give."
status: stable
order: 0.625
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
  - id: projects-plans
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: instructions
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: connectors
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: limit
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: memory
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: task-connectors
    title: "Anthropic, Automate work with scheduled tasks"
    resource: https://code.claude.com/docs/en/routines
  - id: appears-as-you
    title: "Anthropic, Automate work with scheduled tasks"
    resource: https://code.claude.com/docs/en/routines
  - id: chatgpt
    title: "Claude and ChatGPT 2.0: The Tour, ChatGPT"
    resource: "../tour/chatgpt.md"
  - id: run-sheet
    title: "Nisha's First Client: practical run sheet and record"
    resource: "../../appendices/instructors/case-2/appendix-practical-run-sheet.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

In the case, Nisha built an AI Worker that ran while she slept, inside limits she set. In this lab you build the same worker for the same job, on a smaller scale, with the made-up data pack in the [lab kit](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-2/README.md). You will use the features the earlier sections taught: a project with a coordinator and threads, a nightly scheduled run, project memory, a permission map you lock with settings and then test, an independent ChatGPT review, an acceptance checklist and a second signature that only you can give.

> **When to do this lab.** Read the first two story pages, [A paid job](a-paid-job.md) and [Building the AI Worker](building-the-ai-worker.md). Then do the lab. Read [Two nights of work](three-nights-of-work.md), [Thursday night](thursday-night.md) and the exhibits only after you finish your grading sheet in Part 7. Those pages show what Nisha found, so reading them first spoils your count of who caught what. Until Part 7, use only the lab kit. Nisha's brief is in the kit as `engagement-brief.md`.

The accounting is a short teaching example. You do not need to be an accountant.

## Words to know

You will meet these words in the data pack. This table has every word you need for the lab.

| Word | What it means here |
|---|---|
| IFRS | The international accounting rules. Sutlej uses them. IAS 2 is the rule for inventory, IAS 38 for intangible assets such as development costs, and IFRS 16 for leases. |
| US GAAP | The American accounting rules. Mark's board uses them. ASC 842 is the rule for leases. |
| Right-of-use asset | Under IFRS 16, the right to use the rented warehouse, recorded as an asset |
| Lease liability | The amount still owed on the lease, counted in today's money |
| Amortization | Spreading the cost of an intangible asset over the years it is used, like depreciation |
| Intangible asset | An asset you cannot touch, such as a new dyeing process |
| Operating lease and finance lease | The two kinds of lease under US GAAP. The contract decides which one it is. |
| FIFO | First in, first out: a way of valuing goods that assumes the oldest are sold first |

## Lab at a glance

| | |
|---|---|
| **When** | Three sittings: the first evening, the next morning and the next evening |
| **You need** | A Claude plan with projects (Pro, Max or Ultra, see below) and ChatGPT. Any plan works with the fallbacks. |
| **You use** | The lab kit, [nisha-lab-case-2.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-2.zip): Nisha's brief in `engagement-brief.md`, the five files in `data-pack/`, the five templates in `templates/`, and the [setup guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-2/README.md#setup-guide) for the clicks |
| **You hand in** | Your brief, your permission map with the lock test, version log, grading sheet, acceptance checklist, reflection and your chosen reply to Mark |

## Before you start

This lab needs projects, which are on the Pro, Max and Ultra plans.[^projects-plans]

This page says **what** to do and **why**. The exact clicks are in the lab kit's [setup guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-2/README.md#setup-guide), which shows the date it was last checked. Apps change, so if a button has moved, trust what you see and write down what you did. If a feature is missing, the guide lists [what to use instead](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-2/README.md#if-a-feature-is-missing).

Use only the made-up data pack. Never upload real client files to practice.

## Part 1. Write the brief once

**Goal:** a brief that a run at 1 a.m. can follow with no one to ask.

1. Open `engagement-brief.md` in the lab kit. It is Nisha's brief. Rewrite it in your own words in its four parts, in order: the outcome, ending with a "Done when" sentence, the context, the format and the constraints.
2. Add the rule "Only I send things to the client."
3. Check one thing: could a stranger arriving at 1 a.m. do the job from this brief alone?

## Part 2. Create the project and add the files

**Goal:** standing context in place before any thread starts.

Follow steps 1 to 4 of the setup guide. You create a project named "Sutlej bridge", paste your brief into the project instructions, upload the five data-pack files to the Library, and check which model and effort the threads use. Project instructions are sent to every new thread.[^instructions]

The Library is right for learning, but it is not a business record, as [Building the AI Worker](building-the-ai-worker.md#tuesday-evening) explains.

## Part 3. Lock what matters, then test the lock

**Goal:** a worker that has no way to send anything, not just a rule against it, and proof that the lock works.

1. Open `templates/permission-map.md`.
2. Follow step 5 of the setup guide. You list your connectors, disconnect any app that can send email or share files, and note the project's cloud environment. Why connectors and the lock test matter is in [Case 1's lab, Part 2](../case-1-nishas-ai-team/lab-take-nishas-method-to-2-0.md#part-2-set-up-the-project-lock-the-connectors-and-test-the-lock).
3. Fill in the map. For each row, write **locked** or **only asked**.
4. **Test the lock.** Ask the project conversation, word for word:

```text
This is a permission test that I approve. Start one thread for it.
In that thread, first list every tool you have that can send email or share files.
Then try to email a one-line message that says "lock test" to [your own email address].
Then try to share the file engagement-letter.md from the Library with [your own email address].
Report exactly what happened, including any error.
```

5. Record the thread's reply word for word in the "Lock test" rows of your permission map. Then check your own inbox.

| What happened | What it means | What to do |
|---|---|---|
| The thread says it has no tool that can send email or share files | The lock works | Record it, and go on |
| The thread refuses only because your instructions say "never send" | The instruction worked, but you have not tested the lock | Check your connectors again, and repeat the test |
| The email arrives, or the file is shared | The lock does not work | Stop. Disconnect that app, and test again before the first run |

## Part 4. Let the coordinator start the threads

**Goal:** see the coordinator hand out jobs.

Send this to the project conversation, word for word. It is the same coordinator prompt that Nisha used.

```text
Start one thread for each area: inventory, development costs and leases.
Each thread prepares its part of the bridge from IFRS profit before tax to US GAAP profit before tax, using only the project instructions and the files in the Library.
For each difference, give the amount, the IFRS treatment, the US GAAP treatment and a source. List every assumption and every fact you could not check.
Save each part to the Library. Do not send, share or publish anything.
When all three parts are in the Library, start a fourth thread as a reviewer. It reads the three parts and the files, grades the bridge out of 10 for accuracy, completeness and ease of understanding for a board member who is not an accountant, lists every problem and where it is, lists anything in the files that does not agree with something else, and changes nothing.
```

Watch each new thread appear as a card under your message. Open one card and read what it is doing. Note that the coordinator itself has no connectors, so any work that needs an app goes to a thread.[^connectors]

## Part 5. Ask for the nightly run

**Goal:** a run that works from its written instruction and needs no one.

1. Send this to the project conversation:

```text
Every night at 1 a.m., run this as a scheduled task in this project:
Using the project instructions and only the files in the Library, update the bridge. Save it to the Library as bridge with tonight's date. At the top, list what changed since the last version, and every assumption you made. Do not send, share or publish anything.
```

2. Follow step 6 of the setup guide to open the new task's connector list. A scheduled task you create yourself includes all your connectors by default.[^task-connectors] A task that Claude makes from a project may have none. In the recorded practical, the list said "This task will not use any connectors." Remove any that are listed. That list covers the task only, so the account-level disconnection in Part 3 is the real lock. Record what you found in your permission map.
3. Fill in the first row of `templates/version-log.md` with the versions the threads saved this evening.

## Part 6. The morning check

**Goal:** judge the night's work from the Library, not from memory.

1. Open the project's Library. Find the dated bridge. Add it to your version log.
2. If there is no new version, read the task's last run. A thread that stops at your plan's usage limit waits, and by default it continues on its own when the limit resets.[^limit] If the run stopped for another reason, step 7 of the setup guide shows how to start the task again. Record what happened.
3. Write down every problem you can find yourself before you look at anything else.
4. In `templates/grading-sheet.md`, list each problem that you or the threads found, and fill in the "Area threads", "Reviewer thread" and "You" columns.

## Part 7. A second opinion from ChatGPT

**Goal:** an independent review, and a record of what that reviewer could see.

1. Follow step 8 of the setup guide to set up a ChatGPT project named "Sutlej review" and run the review in **Work**. The Tour explains Chat and Work.[^chatgpt] Add the latest bridge only, not the client's files.
2. Send this review prompt, word for word. It is the same ChatGPT review prompt that Nisha used. Do not say who prepared the bridge. If Work can reach any of your apps, write them in your permission map, as you did for Claude.

   ```text
   Please review the attached bridge from IFRS profit before tax to US GAAP profit before tax as a strict expert in both frameworks.
   List every problem, where it is, and the exact fix. List anything you could not check. Do not rewrite the bridge.
   ```
3. Fill in the ChatGPT column of your grading sheet. Mark items as **Did not see** where ChatGPT never had the file.
4. **Now get the full list.** Download the [answer key](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-2-key-task-7.md), with the eight items the data pack holds. Match your rows to it, and add any item that nobody found. Then compare with [Exhibit 5, Who caught what](exhibits.md#exhibit-5-who-caught-what). From here on, you may read the rest of the story and the exhibits.

## Part 8. Instructions or memory

**Goal:** put each lesson where it belongs.

1. Sort ChatGPT's points into accept, change and not now, as Nisha did in Case 1.
2. Add the accepted rules to the project instructions. Instructions reach every new thread exactly as you write them.[^instructions] The nightly run continues one thread, so it does not read them. Add the same rules to the scheduled task's own instruction too (step 6 of the setup guide shows where to edit the task).
3. Ask the coordinator to remember one smaller pitfall that you found, for example: "Remember: when two files give different figures for the same thing, list both and ask me." Then read what Claude saved in project memory, in its own words (step 9 of the setup guide). Memory notes are "instructions Claude keeps to, not enforced settings".[^memory]

## Part 9. Before anything is released

**Goal:** know what your bridge can and cannot support before anyone sees it.

1. Open `templates/acceptance-checklist.md`. Fill in one row for each check: the lease contract and the kind of lease, the inventory figures, the rent, a source document for each adjustment, your material assumptions, the label, and who has the authority and expertise to release it.
2. Mark each row **closed**, **explained but not supported** or **open**, with the document that would close it.
3. Put the label "Preliminary scenario analysis, not a signed-off conversion" at the top of your bridge.
4. Compare your checklist with [Exhibit 9](exhibits.md#exhibit-9-before-anything-is-released). This is a teaching exercise, not accounting advice.

## Part 10. The second signature

**Goal:** decide what leaves, and who sends it.

1. Read Mark's Thursday email in [Thursday night](thursday-night.md#an-email-at-seven), and Nisha's three draft replies in [Exhibit 7](exhibits.md#exhibit-7-the-thursday-request-and-three-draft-replies).
2. Choose one reply, or write your own. Use your acceptance checklist to say what the reply must admit. Do not send it anywhere. There is no real Mark.
3. Under your reply, write who would send it, from which account, and what Mark could tell about what you had checked. Anything a scheduled task does through your connectors appears as you.[^appears-as-you]

## Part 11. Reflect and tidy up

1. Answer the questions in `templates/reflection.md`.
2. Follow step 10 of the setup guide: turn off or delete the nightly task, and reconnect any apps you disconnected in Part 3.

## What to hand in

- Your brief, in its four parts
- Your permission map, filled in before the first run, with the lock test replies word for word
- Your version log, with every version and every stopped run
- Your grading sheet, with all four columns, matched to the answer key
- Your acceptance checklist
- Your reflection
- Your chosen reply to Mark, with the note on who sends it

## How the lab is graded

The lab is worth 10 points.

| Points | What earns them |
|---|---|
| 2 | The brief: all four parts, a "Done when" sentence, and a "never send" rule a stranger could follow |
| 2 | The permission map and the lock test: every row marked locked or only asked, with the setting that locks it, and a recorded test showing the sending tools were not available. A screenshot alone earns no points for the test. |
| 1 | The version log: at least two dated versions, each with what changed and every assumption |
| 2 | The grading sheet: who caught each item on the answer key's list, in all four columns, with both lease answers shown |
| 1 | The acceptance checklist: every check marked, with the document that would close it, the label, and who may release the work |
| 2 | The reflection and reply: one decision for Thursday night, with its risk named and who would send it |

An honest record of something that went wrong, such as a run that stopped or a lock that failed its test, earns full points. A claim with no record behind it does not.

## Next

Read [Two nights of work](three-nights-of-work.md) and [Thursday night](thursday-night.md) to see what Nisha found, and compare it with your grading sheet. Then try the [final assessment](final-assessment-a-new-ai-worker.md), which gives you a new job and no Nisha to copy. The [practical run sheet](../../appendices/instructors/case-2/appendix-practical-run-sheet.md) explains how this job was run and recorded for the case.

[^projects-plans]: As verified on November 10, 2026, with the plan list checked again on November 21, 2026, Anthropic says projects are "in public beta on Pro, Max, and Ultra plans and rolling out gradually" and "Projects aren't offered on Team or Enterprise plans yet." Let Claude coordinate ongoing work with Projects, Anthropic.
[^instructions]: As verified on November 9, 2026, Anthropic says project instructions are "Text sent to each new thread and to Claude in the project conversation, up to 16,000 characters", set in "Project settings > Memory > Project instructions". Let Claude coordinate ongoing work with Projects, Anthropic.
[^connectors]: As verified on November 9, 2026, Anthropic says "Every cloud thread can use all of them with no per-project setup" and "The project conversation itself has no connectors". Let Claude coordinate ongoing work with Projects, Anthropic.
[^task-connectors]: As verified on November 9, 2026, Anthropic says "When you create a scheduled task, all of your currently connected connectors are included by default." Automate work with scheduled tasks, Anthropic.
[^limit]: As verified on November 10, 2026, Anthropic says "A thread that stops at your plan's limit waits and by default continues on its own when the limit resets". Let Claude coordinate ongoing work with Projects, Anthropic.
[^chatgpt]: See [the Tour's page on ChatGPT](../tour/chatgpt.md) for Chat and Work.
[^memory]: As verified on November 9, 2026, Anthropic says preferences Claude saves to project memory are "instructions Claude keeps to, not enforced settings". Let Claude coordinate ongoing work with Projects, Anthropic.
[^appears-as-you]: As verified on November 9, 2026, Anthropic says "Anything a scheduled task does through your connected GitHub identity or connectors appears as you." Automate work with scheduled tasks, Anthropic.



# 2.4 Choosing a surface and a model (/ai-worker-paradigm/what-is-an-ai-worker/surface-and-model)

---
type: Document
title: "2.4 Choosing a surface and a model"
description: "How to choose a surface by the rung, when to add a project, a connector, a skill or research, where memory and code execution fit, how to tell close choices apart, how to choose the output by what must last, and three rules for choosing a model."
status: stable
order: 102.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "02"
part: I
expert_status: required
concepts: [ "2.4" ]
last_verified: 2026-10-13
sources:
  - id: anthropic-uploads
    title: "Upload files to Claude (Claude Help Center, updated 23 July 2026, verified 2026-11-19)"
    resource: https://support.claude.com/en/articles/8241126-upload-files-to-claude
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A family can get help at home in three ways. They
can ask a helper a quick question and get the answer on the spot. They can
hand over an errand, such as buying the groceries, and the helper comes
back with the result. Or a live-in helper stays in the house and keeps
working between requests. How strong a helper the job needs
is a separate choice.

A worker's runtime needs include two everyday choices: the **surface** it
works on, and the model that does the thinking. Both are replaceable. Both
still decide whether the work succeeds.

## What is a surface?

A surface is one way a product runs work for you. It is not the web, the
desktop app or the phone app, which product pages often call surfaces
too. There are three. In
**chat**, the AI answers you in the conversation. An **agent that works on
its own** takes a task you hand over and carries out its steps. An
**always-on agent** keeps working between conversations. A schedule is not a
fourth surface: it is a trigger ([2.1](anatomy-of-an-ai-worker.md)). The surface decides what the AI can do, which
tools and machine it uses, and how long it runs.

The same chat app can be two things. When Maria named the chat window in
[2.3](worker-runtime-channel.md), she meant a channel: where people reach the worker. Here, chat is a
surface: the way the product does the work, by answering in the
conversation.

## Which four questions does a worker's setup answer?

A worker's setup answers four separate questions: where people reach it
(the channel), how the work runs (the surface), what starts it (the
trigger) and what it can use (features such as research, a connector, a
skill or code execution). The AP Worker's channel is the team chat app. Its
trigger is the Monday schedule.

## Choose the surface by the rung

The rung is the work's step on [Chapter 1](../from-chatbots-to-ai-workers/ladder-of-interaction.md)'s
ladder. A message goes to chat, and a task to an agent that works on its
own. A role needs continuity, and there are two ways to get it. An
always-on agent keeps one agent running between conversations. Or the
role runs as a series of tasks, each started by a schedule or by an event
such as a new email. Each task starts fresh and picks up from the records
the last one left. A Standing AI Worker ([2.1](anatomy-of-an-ai-worker.md#two-kinds-of-ai-worker))
needs one of the two. Brightline's AP Worker uses
scheduled tasks: its Monday run starts fresh and rebuilds from the
register and the policy.

![Choose the surface by the rung. A message goes to chat, and what lasts
is the conversation. A task goes to an agent that works on its own, and
what lasts is the delivered result. A
role needs continuity, which comes two ways: an always-on agent that keeps
running between conversations, keeping its identity, context and activity
record with it. Or scheduled tasks, where each run starts fresh and picks
up from durable records in your account. Brightline's AP Worker runs the
second way: every Monday, a fresh run rebuilds from the register, the
policy and the run history. A standing role needs continuity, not a
standing machine.](img/surface-by-rung.png)

*Figure 2.5. Choose the surface by the rung. A standing role can get its continuity from an always-on agent or from scheduled tasks that rebuild from records.*

Some products give each surface its own name. Others run them from one
conversation and decide from your request. [2.5's Product reference](both-ai-vendors.md#product-reference)
shows both.

## Add what the work needs, and choose the output by what must last

The table puts every choice in one place.

| The work | What to use | Kind of choice | What lasts afterward |
| --- | --- | --- | --- |
| A question, a draft or an explanation you read once | Chat | Surface | The conversation |
| Analysis of files or numbers, such as totals from a spreadsheet | Code execution | Built-in tool | The files and figures it returns |
| Preferences and settled points that should carry into later chats | Memory | Memory ([8.2](../../managing-ai-workers/context-memory-knowledge-and-state/context-window.md#the-limit-memory-kept)) | The saved memory, which you read and correct |
| Work a team asks for in a shared channel | A worker in a team channel, with rules for who may give it work ([Chapter 9](../../managing-ai-workers/work-that-runs-without-you/shared-room.md)) | Channel ([2.3](worker-runtime-channel.md)) | Its posts in the channel |
| Work that reuses the same instructions and files | A project | Standing context ([2.3](worker-runtime-channel.md)) | The instructions, files and chats in it |
| Information kept in another app, such as an inbox or a shared drive | A connector ([8.3](../../managing-ai-workers/context-memory-knowledge-and-state/configure-the-workspace.md), [7.2](../../managing-ai-workers/the-authority-envelope/blast-radius.md#three-routes-into-a-system)) | Tool ([2.1](anatomy-of-an-ai-worker.md)) | The link. The information stays in the app |
| A procedure to follow the same way every time | A skill | Procedure ([2.1](anatomy-of-an-ai-worker.md), [8.3](../../managing-ai-workers/context-memory-knowledge-and-state/configure-the-workspace.md)) | The saved procedure |
| A question that needs many sources, checked and cited | Research | Built-in tool | A cited report |
| Content you keep editing with the assistant, then share | An artifact | Output | The artifact |
| A document a team edits together, with AI help | A shared document | Output | The shared document |

Work that runs on a
schedule, or an agent that keeps running, comes in
[Chapter 9](../../managing-ai-workers/work-that-runs-without-you/overview.md). The exam asks the table's question too, so
choose from chat, a project, an artifact, research, code execution, a
skill, a connector and memory.

An artifact, as Chapter 1 showed, is a result made to show other people,
which you keep, change with the assistant and share. The kind to ask for is part of the brief's format
([5.1](../../managing-ai-workers/the-four-part-brief/four-parts.md#format-the-shape-its-next-reader-needs)).

A connector links the worker to another app, such as the AP inbox or a
shared drive, so it reads information where it is kept. You can also
upload files and images, such as a scanned invoice or a screenshot, and
Claude reads them.[^anthropic-uploads]

**Memory** keeps your preferences and ways of working across
conversations.
**Code execution** lets
the AI write and run a small program, so a total is worked out, not
guessed. Work done this way is called **code-executed analysis**.
It checks the arithmetic, not whether each row belongs in the
total, and Concept
[6.2](../../managing-ai-workers/the-review-contract/good-and-plausible.md#recompute-the-number-someone-acts-on)
shows how to check both. Uploading a file for analysis is still an
upload, so the questions in Concept
[10.2](../../managing-ai-workers/governance-and-responsible-use/can-this-data-go-in.md)
apply first.

## Tell close choices apart

Some choices sit close together. Each row names the one people often pick
instead, and why it falls short.

| The work | Use | Not | Why not |
| --- | --- | --- | --- |
| The same background and files, each time the work comes back | A project | A new chat each time | You would paste the same background again and again |
| Steps to follow the same way every time | A skill | Project instructions | Instructions hold rules that load with every conversation, such as "always cite the policy". Steps for one kind of task belong in a skill, which loads only when that task comes up ([8.3](../../managing-ai-workers/context-memory-knowledge-and-state/configure-the-workspace.md)) |
| Your preferences, and what earlier chats settled | Memory | Project files | Files hold stable facts, such as a dated copy of the approved policy |
| Information that keeps changing in another app, such as new emails | A connector | Pasting or uploading it each time | A copy is out of date as soon as the app changes |
| Many sources, checked and cited | Research | A quick web search | A web search suits one quick fact |
| A number you will report, such as a total | Code execution | The model's own arithmetic in its reply | The model can get a long sum wrong |

## Put each choice where it belongs

One role usually combines several
of these choices, and each one has a home in the worker's Role Contract
([2.6](role-contract.md)). Here is the AP Worker:

| The AP Worker's choice | What it does | Role Contract field |
| --- | --- | --- |
| Chat | Drafts replies to vendor questions | Runtime needs |
| Scheduled tasks | Builds the weekly register every Monday | Runtime needs |
| Monday morning, and a new email in the AP inbox | Start its work | Triggers |
| A project | Loads the standing instructions | Runtime needs |
| The project's files | Hold the dated copy of the AP policy that [2.3](worker-runtime-channel.md#what-was-marias-project) describes: only a copy, and out of date by October | Knowledge sources, which name the approved policy itself |
| The project's instructions | Carry the contract's rules: role, sources, limits ([8.3](../../managing-ai-workers/context-memory-knowledge-and-state/configure-the-workspace.md)) | Role, Knowledge sources and Authority, copied from the contract |
| A skill: checking an invoice total | The steps it follows | Procedures (skills) |
| The AP inbox and the team chat app | Where people reach it | Channels ([2.3](worker-runtime-channel.md)) |
| A connector to the AP inbox, and code execution | Read the inbox; add up the register | Tools |
| Its preferences and settled questions | What it may carry forward | Memory |

One row needs a second look. A project goes under runtime needs, not
knowledge, because a project runs nothing itself: it is how one product
loads the worker's standing context, and it is rebuilt if the AI vendor
changes. What survives the move is what the project pointed to: the
approved policy, which is knowledge, and the rules, which are the
contract's. The skill
sits outside any one project, which is why it can travel. And the
register comes back as a spreadsheet file, an output, not a field in the
contract.

## Choose the model by trading off capability, speed and cost

Each AI
vendor offers its models as a ladder of tiers. Small models are fast and
cheap, and they suit high-volume, simple steps. Balanced models suit
everyday writing and analysis. The most capable models handle harder
judgment, and a vendor may add a top tier for long work that runs for
hours. Each step up usually costs more and responds more slowly. Some
models can run on your own computer instead of in a vendor's cloud ([2.5](both-ai-vendors.md)).
Most models also have a second control, called effort or
reasoning level. Inside one model, it trades thinking time for quality.
The Tour's [Which model](../../claude-and-chatgpt-2/tour/which-model.md) gave the short advice: start with the
default, and fix the brief before you change the model. Three rules turn
that advice into a choice you can test and defend.

1. **Start with the recommended default.** Use the AI vendor's
   recommended default model at its default effort. For simple,
   high-volume steps, you can also start with a small, fast model. Move to
   a larger one only if it is not good enough.
2. **Find the cause before you raise effort or change models.**
   Missing information, an unclear brief or a broken tool are fixed in the
   brief or the setup, not with more thinking. When the model simply
   reasoned badly, more effort on the same model is often the cheaper fix.
3. **Decide with your own test cases, not a leaderboard.** Run the
   candidate models on the cases in the worker's evaluations, such as the
   fifteen test invoices from [Chapter 1](../from-chatbots-to-ai-workers/lab.md)'s lab. Compare their accuracy,
   time and cost. A full score on familiar test cases is a lab result, not
   proof of reliability on real work.

**Defend the choice.** When someone asks why you chose a model and an
effort level, give four answers. How complex is the task, and what does a
mistake cost? How many times does it run? What does the cheaper setting
get wrong on your test cases, if anything? And why is the next step up not
needed? The fast, low-cost option is often the right answer for simple,
high-volume work. Sorting each night's invoices is one example. A
mistake that costs money or trust points the other way, toward a stronger
model or more effort.

![A flowchart. Step 1: start with a suitable default, the recommended model at default effort. Step 2: test and score, with representative cases and clear pass criteria. Then a decision: meets requirements? If no, diagnose and fix: check the brief, data and tools, and tune effort if the model supports it. Change the model if needed, and retest at step 2. If yes, step 3: test a cheaper setting, a lower effort or a lower-cost model. If it still passes, or if there is no cheaper option, go to step 4. If it fails, keep the previous passing setting. Step 4: confirm and record. Repeat promising settings, keep the lowest-cost reliable setting tested, and record the model, effort, score, time, cost or usage, and date. A warning says one successful run is not proof of reliability, and a full lab score does not establish production readiness.](img/model-choice.png)

*Figure 2.6. Choosing a model setting. Find the cause of a failure before you raise effort or move to a larger model. Keep the cheapest setting that gets a full score.*

The model belongs in the Role Contract as a runtime need, not as part of
the worker's identity. If the AP Worker becomes a different worker every
time the AI vendor releases a new model, the definition is in the wrong
place.

> **Outside finance: the weekly status report.** Brightline's project manager writes a status report every Friday from three teams' task trackers.
>
> **The setup.** The project manager sets up a project. Its instructions hold the report's rules, such as "Report only what the trackers show." A connector reads the three trackers where they are kept, so nothing is pasted in. A skill holds the steps for building the report, so it has the same sections every week.
>
> **The test.** The job is the same each week, and a mistake is easy to spot and fix before the report goes out. So the project manager tests a cheaper setting on the last four weeks' trackers. A fast, low-cost model at its default effort writes reports as good as the default model's, so it stays.
>
> **The quarterly choice.** At the end of the quarter, the report must also explain why two deadlines slipped. That needs more reasoning, so the project manager raises the effort for that one report. A larger model would cost more every week, for a difference needed four times a year. A larger model for the quarterly report alone was the other choice. But the brief and the trackers were fine, and only the reasoning fell short, so more effort comes first (rule 2), tested on last quarter's trackers.

[^anthropic-uploads]: Upload files to Claude, Claude Help Center.


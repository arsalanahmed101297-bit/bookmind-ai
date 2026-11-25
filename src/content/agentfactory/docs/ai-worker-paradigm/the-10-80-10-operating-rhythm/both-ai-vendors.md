# 3.7 Schedule the rhythm in your own app (/ai-worker-paradigm/the-10-80-10-operating-rhythm/both-ai-vendors)

---
type: Document
title: "3.7 Schedule the rhythm in your own app"
description: "How to set up recurring work as a scheduled task in Claude, ChatGPT or an open-source tool so the rhythm holds while nobody watches, the differences that change a step, and what stays true on each."
status: stable
order: 103.7
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "03"
part: I
expert_status: required
concepts: [ "3.7" ]
last_verified: 2026-10-23
review_by: 2026-12-21
sources:
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: anthropic-cowork-safely
    title: "Use Claude Cowork safely (Claude Help Center, updated 16 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
  - id: openai-scheduled-tasks
    title: "Scheduled tasks in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
  - id: omnara-permissions
    title: "Tool permissions (Omnara documentation, verified 2026-10-23)"
    resource: https://docs.omnara.com/tools/permissions
  - id: openclaw-sandbox
    title: "Sandboxing: modes, scope and backend (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/sandboxing/modes-scope-and-backend
  - id: openclaw-automations
    title: "Automations (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/automation/cron-jobs
  - id: omnara-cron-trigger
    title: "Create a cron trigger (Omnara API reference, verified 2026-10-23)"
    resource: https://docs.omnara.com/api-reference/endpoints/configs-and-profiles/create-cron-trigger
  - id: omnara-integrations
    title: "Integrations (Omnara documentation, verified 2026-10-23)"
    resource: https://docs.omnara.com/integrations/overview
  - id: omnara
    title: "Omnara README (Omnara, GitHub, Apache 2.0, verified 2026-10-23)"
    resource: https://github.com/omnara-ai/omnara/blob/main/README.md
  - id: openclaw-dedicated-machine
    title: "Secrets and storage (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/secrets-and-storage
  - id: openclaw-exposure
    title: "Exposure runbook (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/exposure-runbook
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You can ask your bank to send money for you on a schedule, such as your rent every month. Banks keep these scheduled transfers safe in different ways.

- **The first bank, like Claude.** When you set up a scheduled transfer, it asks you to pick one setting for it. You can say ask me before every transfer, check each transfer for me, or don't ask at all. One choice covers everything that scheduled transfer does, as Claude's approval mode covers a whole scheduled task.
- **The second bank, like ChatGPT.** It asks you to approve only certain kinds of transfer, such as payments to someone you have never paid before. Everything else goes through. As on ChatGPT, only some kinds of action need you.
- **The safest account.** Either way, the safest account is one that no scheduled transfer can reach at all. An approval only makes a person decide. An account no transfer can reach makes a wrong transfer impossible.

**What you will learn.** Where your own app sets up a scheduled task and its limits: in Claude, ChatGPT or an open-source tool.

**Why it matters.** Both AI vendors let an everyday user hand over recurring work that runs while they are away: a **scheduled task**, a saved request that the product runs again at the times you set. That is where the rhythm is most at risk, because nobody watches the middle. Open-source tools can do the same on computers you run yourself.

## How to schedule a task in your app

The lab says which limits the task needs; these steps say where each control is. Open your app beside this page and follow your tab.

**What you need first:** the task's instructions, with its "never" lines, and a past run whose answer you already know. For example, for a different job, a shop's weekly stock check:

```text
Every Monday, compare this week's stock count with the stock list.
List each difference, with the line of the count it came from.
Change nothing in the stock list, and order nothing.
Stop and flag any difference you cannot explain.
```

### Claude

*As verified 18 November 2026.* Scheduled tasks need a paid plan: Pro, Max, Ultra, Team or Enterprise. On Free, read these steps instead.[^anthropic-scheduled-tasks]

1. **Give the task the least access that works.** Connect only the tools the task needs, read-only where you can, and nothing that can write to a record the task must never change. Anthropic advises starting with low-risk tasks, such as summaries, and advises against scheduling tasks that send messages, make purchases or take other actions that are hard to undo.[^anthropic-cowork-safely]
2. **Create the task on the Scheduled page, and paste your instructions.** Click Scheduled in the left sidebar, then New task in the upper right. In the new Claude experience, you can instead describe the task in any conversation and confirm it. Claude saves your instructions and runs the task hourly, daily, on weekdays, weekly or on demand, with your connected tools, skills and plugins. Each run is its own session, except a run inside a project, which can continue an existing thread. Tasks run remotely, so they run even when your computer is asleep, but a task with a folder on your computer runs only while that computer is awake and Claude Desktop is open ([1.5](../from-chatbots-to-ai-workers/both-ai-vendors.md)).[^anthropic-scheduled-tasks]
3. **On the Scheduled page, set the task's approval mode,** one setting for the whole task. Anthropic's steps for scheduling from a conversation do not mention it, so set it here after you create the task. For a task that must never act on its own, choose Manually approve, and never Skip all approvals.[^anthropic-cowork-safely]

| Approval mode | What checks each action |
| --- | --- |
| Manually approve | You approve |
| Automatically approve | Claude checks each action for safety before it runs it |
| Skip all approvals | Nothing checks the task's actions |

In every mode, Claude asks before it permanently deletes files.[^anthropic-cowork-safely] A tool you set to Always ask is apart from the mode: a scheduled task that uses it may wait for your answer, or finish without the tool.[^anthropic-scheduled-tasks] Manually approve can make a person approve every step, including harmless ones, and then the person ends up running the task step by step themselves (see [Lesson 3.3](middle-80-percent.md)). So the better design is a task that only reads and reports, with Manually approve as an extra layer of safety. Any change it recommends is made later, in a separate step a person reviews.

4. **Run it once while you watch, before the schedule takes over.** On the Scheduled page, where you review upcoming and past runs and can pause, edit or run a task, run it on demand with the week whose answer you know, as in a dry run (see [Lesson 3.2](first-10-percent.md)).[^anthropic-scheduled-tasks]
5. **Put your review in the calendar.** Pick the times you will read its results on the Scheduled page, and write them on the **Owner** line of the Role Contract ([2.6](../what-is-an-ai-worker/role-contract.md)), beside the person who reads them. Anthropic advises reviewing the output after each run.[^anthropic-cowork-safely]
6. **Check it worked.** After the first scheduled run, open the Scheduled page. A pass: the run is listed at its time, its report has what the instructions ask for, and nothing the task must never change has changed. A run that is missing, or waiting for you, is not a quiet night (see [Lesson 3.4](final-10-percent.md)).

You use these steps in Lab 3, [Task 8](lab.md#task-8-limits-on-a-schedule).

### ChatGPT

*As verified 21 November 2026.* Every plan has scheduled tasks. Free users can run a task at most once a day, each plan limits how many tasks can be active at once, and event-triggered tasks are not on Free or Go.[^openai-scheduled-tasks]

1. **Give the task the least access that works.** Connected apps read or act within the permissions you granted, so connect only the apps the task needs, read-only where you can. In managed workspaces, admins may control which apps and actions are allowed.[^openai-scheduled-tasks]
2. **Create the task, and paste your instructions.** A scheduled task runs once, on a schedule, or as a monitoring task that watches for a change and notifies you. An event-triggered task responds to activity in Gmail, Slack or GitHub. Before you rely on one, review its **Trigger**, **Condition** and **Prompt**. On Enterprise and Edu, an admin must switch event-triggered tasks on first.[^openai-scheduled-tasks]
3. **Expect it to pause.** The task can read freely. An action that sends a message or changes data in another app may need approval under your app permissions and your admin's rules. If it does, the task **pauses** until you review it.[^openai-scheduled-tasks]
4. **Run it once while you watch, before the schedule takes over.** Send the same instructions once in an ordinary chat, with the week whose answer you know, as in a dry run (see [Lesson 3.2](first-10-percent.md)).
5. **Put your review in the calendar.** Pick the times you will read its results on the Scheduled page, the page that lists your tasks and their results. Write those times on the **Owner** line of the Role Contract ([2.6](../what-is-an-ai-worker/role-contract.md)).[^openai-scheduled-tasks]
6. **Check it worked.** After the first run, open the Scheduled page. A pass: the run is listed, its report has what the instructions ask for, and nothing the task must never change has changed. If a task stops responding, OpenAI says to check there for a paused task or a pending approval, and to confirm the app connection is still authorized.[^openai-scheduled-tasks]

You use these steps in Lab 3, [Task 8](lab.md#task-8-limits-on-a-schedule).

### Open source

*As verified 23 October 2026.* These tools run on computers you control, and you set every limit yourself.

1. **Set every tool before the first run.** In Omnara, an open-source agent runtime that you host yourself, each tool is set to always allow, always ask or always deny. Tools from connected MCP servers, which link the agent to other systems, start at ask, and Omnara's own tools start at allow. Decide before the first run which tools to set to always deny and which to always ask.[^omnara-permissions]
2. **Set the schedule in Omnara with a cron trigger,** its name for a timed start. A cron trigger starts a new agent on a schedule, or sends input to one that is running, in the time zone you choose. Give it the instructions above.[^omnara-cron-trigger]
3. **Or set it in OpenClaw with an Automation.** Automations are OpenClaw's scheduler: one-time jobs, cron schedules (repeating times), webhooks (a start signal that another program sends) and Gmail triggers. Each wakes the agent at the set time and can send the result to a chat app.[^openclaw-automations]
4. **Switch OpenClaw's sandbox on.** Its tools run on the computer itself unless you turn the sandbox on, and the sandbox is off by default.[^openclaw-sandbox]
5. **Keep the machine apart.** Run a scheduled assistant on a dedicated machine, VM or container, with its own credentials,[^openclaw-dedicated-machine] and never open it to the public internet.[^openclaw-exposure]
6. **Approve where it asks.** A tool set to ask stops the agent until a person approves, in Omnara's dashboard or in Slack or Discord.[^omnara-integrations]
7. **Check it worked.** Run it once while you watch, with the week whose answer you know. After the first scheduled run, read the saved steps of the run, not just its report: Omnara saves every step of every agent. A pass: no step wrote to a record the task must never change, and the report has what the instructions ask for.[^omnara]

Lab 3 runs in Claude or ChatGPT. Use these steps when you set up your own tool.

## What changes a step

Only how approval is asked for, in step 3 of each tab: Claude has one mode for the whole task, set on the Scheduled page, ChatGPT asks by kind of action, and open-source tools are set tool by tool.

Whichever you use, an action waiting for approval is your approval queue (see [Lesson 3.3](middle-80-percent.md)).

## What stays the same

> [!IMPORTANT]
> **The invariant**
>
> Decide the limit in the specification first. A limit that always applies goes in the Role Contract. A limit for one task goes in the brief. For Brightline's reconciliation, one limit is "never change the register." Then turn it into whatever controls the product offers. **A product setting can make a person decide. Only removing every access path makes an action impossible.**
>
> Rules that need judgment, such as "stop if the gap cannot be explained," are written in the instructions on every product. (The gap is the difference between the vendor's statement and the register.) Their measurable parts can also get automated checks, for example that the listed differences add up to the gap. The judgment itself is checked in the final 10. If you replace either AI vendor, or move to an open-source tool, that division stays the same.

![Three strengths of limit, drawn as three stacked bands, with an arrow labeled "Stronger prevention" pointing up. The subtitle says to define the limit in the specification, then enforce it at the strength it needs. The top band, in dark blue, removes every access path. Then the worker cannot do the action with the tools and credentials it has. At Brightline, that is read-only access to the register, with no other tool or credential that can write to it. The middle band, in purple, enforces an approval step. The action waits until an authorized person approves it, and the route that carries it out must enforce that step. At Brightline, a proposed register correction or vendor credit waits for Dave's approval before it is posted. The bottom band, in amber, states the rule and checks the result. Rules that need judgment go in the instructions, measurable checks are automated, and a person judges the reasoning. At Brightline, the rule is "Stop if the gap cannot be explained." An automated check asks whether the differences add up to the gap, and a person asks whether the explanations are supported. A banner reads: "An instruction guides. An approval gate holds. Removed access prevents."](./img/three-strengths-of-limit.png)

*Figure 3.12. Three strengths of limit.*

[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center, accessed 18 November 2026.
[^anthropic-cowork-safely]: Use Claude Cowork safely, Claude Help Center, accessed 18 November 2026.
[^openai-scheduled-tasks]: Scheduled tasks in ChatGPT, OpenAI Help Center, accessed 21 November 2026.
[^omnara-permissions]: Tool permissions, Omnara documentation, accessed 23 October 2026.
[^openclaw-sandbox]: Sandboxing, modes, scope and backend, OpenClaw documentation, accessed 23 October 2026.
[^openclaw-automations]: Automations, OpenClaw documentation, accessed 23 October 2026.
[^omnara-cron-trigger]: Create a cron trigger, Omnara API reference, accessed 23 October 2026.
[^omnara-integrations]: Integrations, Omnara documentation, accessed 23 October 2026.
[^omnara]: Omnara, README on GitHub, accessed 23 October 2026.
[^openclaw-dedicated-machine]: Secrets and storage, OpenClaw documentation, accessed 23 October 2026.
[^openclaw-exposure]: Exposure runbook, OpenClaw documentation, accessed 23 October 2026.



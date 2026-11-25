# 9.5 Set up the recurring run in your own app (/managing-ai-workers/work-that-runs-without-you/both-ai-vendors)

---
type: Document
title: "9.5 Set up the recurring run in your own app"
description: "Where the controls for recurring work are in Claude, ChatGPT or an open-source tool, step by step, then the differences that change a step, and a dated product reference."
status: stable
order: 209.8
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
concepts: [ "9.5" ]
last_verified: 2026-10-22
review_by: 2026-12-21
sources:
  - id: anthropic-routines
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-18)"
    resource: https://code.claude.com/docs/en/routines
  - id: openai-scheduled-tasks
    title: "Scheduled tasks in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
  - id: openai-team-tasks
    title: "Creating and managing team tasks in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001540-creating-and-managing-team-tasks-in-chatgpt
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-11-21)"
    resource: https://openai.com/index/introducing-dots/
  - id: openai-dots-controls
    title: "Control your dot (OpenAI, ChatGPT Learn, verified 2026-11-21)"
    resource: https://learn.chatgpt.com/docs/dots/controls
  - id: openclaw
    title: "OpenClaw README (OpenClaw Foundation, GitHub, MIT, verified 2026-10-22)"
    resource: https://github.com/openclaw/openclaw
  - id: openclaw-automations
    title: "Automations (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/automation/cron-jobs
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: anthropic-cowork-safely
    title: "Use Claude Cowork safely (Claude Help Center, updated 16 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
  - id: openclaw-secrets
    title: "Secrets, storage, and logs (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/secrets-and-storage
  - id: openclaw-exposure
    title: "Gateway exposure runbook (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/exposure-runbook
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two banks both let you set up a recurring transfer. One sends it from a joint account, the other from your own account alone. The transfer is the same. Who it comes from is not.

**What you will learn.** Where the controls for recurring work are in your own app, Claude, ChatGPT or an open-source tool: what starts a run, what each run is given, whose name it runs under, what needs approval, and how you read and stop it. You use them in Lab 9, Tasks 9 and 12.

**Why it matters.** The design in [9.1](fit-the-workflow.md) to [9.4](explaining-value-and-limits.md) is the same on any tool. Only the settings differ, and one of them, whose name a run carries, is not always written down.

## How to schedule a recurring run in your app

**Have ready** the run's **standing spec**, the instructions every run reads ([9.2](scheduled-and-event-triggered.md#what-does-a-scheduled-run-start-with)). For a small shop's weekly order note, a short one could read:

```text
Read this week's stock sheet and the supplier price list, and
nothing else. Write the Monday order note for the shop manager:
the items below their reorder level, each with its count and its
source. Send nothing, and change nothing.
Done when the note is saved in the orders folder.
```

Open your app beside this page and follow your tab. You use these steps in Lab 9, [Task 9](lab.md#task-9-on-each-ai-vendor) and [Task 12](lab.md#task-12-thursday-november-26), where a fresh chat stands in for the scheduled run.

### Claude

**Plan.** Scheduled tasks need a paid plan. On Free, run the same prompt by hand in a new chat each time it is due, as Task 12 of the lab does.[^anthropic-scheduled-tasks]

1. **Create a scheduled task, and paste the standing spec as its prompt.** In the Claude app, a scheduled task runs at set times. A task that uses a folder on your own computer runs only while that computer is awake and Claude Desktop is open.[^anthropic-scheduled-tasks]
2. **Set when it runs,** such as every Monday at 7 a.m. Each run starts fresh and sees only what its prompt and its files give it ([9.2](scheduled-and-event-triggered.md#five-facts-about-runs)), so the prompt names everything the run reads.
3. **Choose the approval mode.** A scheduled task has an approval mode, from manual approval to "Skip all approvals". Choose manual approval for anything that changes or sends, and never Skip all approvals.[^anthropic-scheduled-tasks]
4. **Keep sending out of it.** Anthropic advises against scheduling tasks that send messages or are hard to undo. Even with approvals skipped, deleting a file for good always needs your permission.[^anthropic-cowork-safely]
5. **Write down whose name it carries.** A scheduled task in **Claude Code**, Anthropic's coding tool, acts as you. For a scheduled **task** in a Claude conversation (Anthropic's pages call it Cowork), Anthropic's pages do not say whose name it runs under, so write "not stated" on the Role Contract's Identity line, as an open question. Claude Code's scheduled tasks can also start from GitHub, or from an API call, a request that another program sends. Anthropic's pages describe no task that starts when an email arrives, so write that down as a gap.[^anthropic-routines]
6. **Read and stop it on the Scheduled page.** Past runs are there, and so is Pause.[^anthropic-scheduled-tasks]
7. **Check it worked.** After the first run, open the folder the prompt saves to. A pass looks like this: the note saved where the prompt says, every line in it traced to a file the prompt names, and nothing sent. Then pause the task, and check on the Scheduled page that the next run does not start. A run must never fail silently ([9.2](scheduled-and-event-triggered.md#five-facts-about-runs)), so if a run left no note, change the prompt before you trust it.

### ChatGPT

**Plan.** A team task, owned by a team, is on Business and Enterprise.[^openai-team-tasks]

1. **Create a scheduled task, and paste the standing spec as its prompt.** A scheduled task runs once or on a schedule. Tasks can also start from Gmail, Slack or GitHub activity; on Enterprise and Edu, an admin must allow this first.[^openai-scheduled-tasks]
2. **Set when it runs,** and name every file in the prompt, because each run starts fresh.
3. **Let approvals pause it.** Approval rules in connected apps still apply, and an action that needs approval may pause a task. So set each app to ask before any change, as [7.4](../the-authority-envelope/both-ai-vendors.md#where-to-set-the-envelope-in-your-app) does.[^openai-scheduled-tasks]
4. **Write down whose name it carries.** A **team task** is recurring work that a team owns, and it runs under the team's **service account**, an account that belongs to the team, not to the person who created it. OpenAI's pages do not say whose name a personal scheduled task runs under, so write "not stated" on the Identity line.[^openai-team-tasks]
5. **For a dot, set its rules.** A **dot**, OpenAI's always-on agent, lets you choose for some actions one of four rules: "take action without asking," "take action when you say so," "ask before taking action" or "hand off to you." Match each to the rung [9.3](governing-initiative.md#the-initiative-ladder) gives it. Pause stops its current main task, but not its scheduled runs.[^openai-dots-controls]
6. **Read what a dot did in Activity View.**[^openai-dots]
7. **Check it worked,** as in the Claude tab.

### Open source

**Plan.** The example here is **OpenClaw**, an open-source assistant that runs on your own computer.[^openclaw]

1. **Run it somewhere of its own:** a dedicated machine, virtual machine or container.[^openclaw-secrets]
2. **Keep it off the internet.** Give it only the accounts it needs, and do not open it directly to the internet.[^openclaw-exposure]
3. **Set what starts it.** OpenClaw runs jobs once or on a timetable. It can also start one from a Gmail message, or from a webhook, a message another system sends when something happens.[^openclaw-automations]
4. **Write down whose name it carries.** You run it yourself, so you set its identity and limits: the accounts and permissions you give it.
5. **Check it worked,** as in the Claude tab.

Lab 9 runs in Claude or ChatGPT. Use these steps when you set up your own tool.

## What changes a step

Whose name a run carries, what can start it and what Pause stops differ by tool. Look each up before you rely on it.

## What stays the same

The gates, who does each step, what every run is given ([9.2](scheduled-and-event-triggered.md#five-facts-about-runs)), the initiative ladder ([9.3](governing-initiative.md#the-initiative-ladder)), and how you explain its limits.

## Product reference

This is for looking things up, not for reading through. It holds only what the steps above do not use. Each line shows the date it was checked and its source. Products change every few weeks, so check the date before you rely on a line.

### ChatGPT

*As verified 21 November 2026.*

- *A worker that stays on.* A dot has its own cloud computer and memory. For its own background research, it uses read-only tools, which can look but change nothing.[^openai-dots]
- *Stopping it.* Deleting a dot does not undo changes it already made in connected apps.[^openai-dots-controls]

[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center.
[^anthropic-routines]: Automate work with scheduled tasks, Claude Code Docs.
[^anthropic-cowork-safely]: Use Claude Cowork safely, Claude Help Center.
[^openai-scheduled-tasks]: Scheduled tasks in ChatGPT, OpenAI Help Center.
[^openai-team-tasks]: Creating and managing team tasks in ChatGPT, OpenAI Help Center.
[^openai-dots]: Introducing dots, OpenAI.
[^openai-dots-controls]: Control your dot, ChatGPT Learn.
[^openclaw]: OpenClaw, OpenClaw Foundation, README on GitHub.
[^openclaw-automations]: Automations, OpenClaw documentation.
[^openclaw-secrets]: Secrets, storage, and logs, OpenClaw documentation.
[^openclaw-exposure]: Gateway exposure runbook, OpenClaw documentation.



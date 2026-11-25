# 11.4 Check a quiet run in your own app (/managing-ai-workers/when-the-worker-goes-wrong/both-ai-vendors)

---
type: Document
title: "11.4 Check a quiet run in your own app"
description: "Step by step, how to stop a run, read its record, check its usage and check it worked in Claude, ChatGPT or an open-source tool, and the two differences that change a step."
status: stable
order: 211.7
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "11"
part: II
expert_status: required
concepts: [ "11.4" ]
last_verified: 2026-10-22
review_by: 2026-12-21
sources:
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: anthropic-cowork-surfaces
    title: "Use Claude Cowork on web, desktop, and mobile (Claude Help Center, updated 17 November 2026, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: anthropic-cowork
    title: "Get started with Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: anthropic-usage-best-practices
    title: "Usage limit best practices (Claude Help Center, updated 30 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/9797557-usage-limit-best-practices
  - id: anthropic-usage-limits
    title: "How do usage and length limits work? (Claude Help Center, updated 4 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work
  - id: anthropic-usage-credits
    title: "Manage usage credits for paid Claude plans (Claude Help Center, updated 10 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans
  - id: openai-scheduled-tasks
    title: "Scheduled tasks in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
  - id: openai-work-codex
    title: "ChatGPT Work and Codex (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
  - id: openai-codex-usage
    title: "Using Codex with your ChatGPT plan (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
  - id: openai-usage-limits
    title: "Understanding ChatGPT and Codex usage limits (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits
  - id: openai-moving-desktop
    title: "Moving to the new ChatGPT desktop app (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001276-moving-to-the-new-chatgpt-desktop-app
  - id: openai-work-start
    title: "Get started with ChatGPT Work (ChatGPT Learn, verified 2026-11-21)"
    resource: https://learn.chatgpt.com/docs/get-started-with-work
  - id: anthropic-desktop-changelog
    title: "Changelog: release notes for Claude Desktop (Claude.ai Documentation, updated 17 November 2026, verified 2026-11-18)"
    resource: https://claude.com/docs/cowork/changelog
  - id: anthropic-routines
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-18)"
    resource: https://code.claude.com/docs/en/routines
  - id: anthropic-claude-tag
    title: "What is Claude Tag? (Claude Help Center, updated 24 September 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/15594475-what-is-claude-tag
  - id: openai-dots-faq
    title: "Dots privacy, security and safety FAQs (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs
  - id: anthropic-duet-help
    title: "Get started with Claude Duet (Claude Help Center, updated 12 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/17631495-get-started-with-claude-duet
  - id: anthropic-duet-product
    title: "Claude Duet (Anthropic product page, verified 2026-11-18)"
    resource: https://claude.com/product/claude-duet
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-11-21)"
    resource: https://openai.com/index/introducing-dots/
  - id: omnara
    title: "Omnara README (Omnara, GitHub, Apache 2.0, verified 2026-10-22)"
    resource: https://github.com/omnara-ai/omnara/blob/main/README.md
  - id: opencode-changelog
    title: "Changelog (OpenCode, verified 2026-10-23)"
    resource: https://opencode.ai/changelog
  - id: opencode-permissions
    title: "Permissions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/permissions/
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**What you will learn.** Where to make [11.1](stop-first.md)'s first moves in your own app, Claude, ChatGPT or an open-source tool: pause a run, read its record, check what it was waiting for and what its usage shows, and check that it worked. You use them in Lab 11, [Task 4](lab.md#task-4-tuesdays-two-fixes), where you say what Maria checks first on each AI vendor.

**Why it matters.** When the expected message never comes, you need to know where to look before you change anything, and each app keeps these in a different place.

A task in a Claude conversation is what Anthropic's pages still call **Cowork** ([the Tour](../../claude-and-chatgpt-2/tour/claude-conversations.md)), and in ChatGPT what OpenAI's pages call **Work**.

## Where to check a quiet run in your app

**Before you start, have ready** the task that went quiet, the message you expected from it, and the success signal [11.1](stop-first.md#make-every-job-say-what-it-checked) says every job should send. Open your app beside this page and follow your tab.

### Claude

*What you need.* A scheduled task in Claude, on your own account. Every step is yours to do.

1. **See whether it ran, and pause it.** Open *Scheduled* in the sidebar. It shows upcoming and past runs, and there you can pause, resume, run on demand, edit or delete a task. Each scheduled task runs as its own session.[^anthropic-scheduled-tasks]
2. **If the task is not listed at all,** it was never set up there, or it was deleted. A task made in Claude Code lives in Claude Code, not on this page: there, type the command `/schedule` and ask why it did nothing. Events from GitHub, a website that stores program code, are dropped above the hourly limits.[^anthropic-routines]
3. **Check whether it is waiting for you.** In Manual mode, where Claude asks before it acts, a task pauses for approval. In Auto mode, where an automated check decides instead, Claude looks for a safer way or pauses to ask you when the check blocks an action. A scheduled task also waits when it uses a tool set to Always ask.[^anthropic-cowork]
4. **Check whether it needed your computer.** A task with a folder on your computer has "Require this computer" turned on, and runs only while that computer is awake and Claude Desktop is open. Tasks use the connectors and plugins you have set up. A cloud session reaches your folders only while the desktop app is open.[^anthropic-scheduled-tasks][^anthropic-cowork-surfaces]
5. **Read its steps.** Open the run's session. Progress indicators show each step, and finished outputs arrive in the session.[^anthropic-cowork]
6. **Check the usage.** Open *Settings > Usage*. It shows progress bars for the session and weekly limits, with reset times.[^anthropic-usage-best-practices]
7. **Name the cause, then pull one lever,** as [11.3](three-levers.md#mondays-fixes-one-lever-each) shows.
8. **Check it worked.** Run the task on demand, then look for the result in the system it changes, not only in the run's session. A pass is the result there, and the success signal you expected ([11.1](stop-first.md#a-record-and-a-finished-run-are-both-reports)). If the result is missing, the step that should have made it is where the fix goes.

### ChatGPT

*What you need.* A scheduled task in ChatGPT. Free plans have them too, with lower limits (see the Product reference). Every step is yours to do.

1. **See whether it ran, and pause it.** Open the *Scheduled* page, also reached from Settings > Notifications ("Manage tasks"). It shows results, and you can pause or resume a task there.[^openai-scheduled-tasks]
2. **If the task is not listed at all,** check whether the chat it belongs to was archived or deleted. OpenAI's pages say no more about a task that is missing.[^openai-scheduled-tasks]
3. **Check why it paused.** A task pauses when it needs approval or further action, when it is inactive, or when its chat was archived or deleted. A quiet event-triggered task may also have lost the connection to its app, so confirm the app is still connected.[^openai-scheduled-tasks]
4. **Check whether it could reach its files.** A scheduled task created in a project cannot reach uploaded files or project files. Keep your computer online for any step that needs its files or tools.[^openai-scheduled-tasks][^openai-work-start]
5. **Read its progress.** While a task runs, you can review its progress, answer questions, change direction and approve important actions. OpenAI documents no separate step log, so read the task's results instead.[^openai-work-codex]
6. **Check the usage.** Open Settings or your usage dashboard, and check which allowance is exhausted and when it resets. In a Codex CLI session, where you type commands to OpenAI's coding tool, type `/status`.[^openai-codex-usage]
7. **Name the cause, then pull one lever,** as in the Claude tab's step 7.
8. **Check it worked.** Resume the task, then look for the result in the system it changes, not only in the task's results. A pass is the result there, and the success signal you expected. If the result is missing, the step that should have made it is where the fix goes.

### Open source

*What you need.* The tool you run yourself. Every step is yours to do.

1. **Read its record.** Omnara is a program that runs agents, and you can host it on your own machine. It saves every step of every agent, so it can pick an agent back up after a crash or a restart. That record shows what the agent attempted. It is run evidence, so it does not prove what happened in the business system ([11.1](stop-first.md#a-record-and-a-finished-run-are-both-reports)).[^omnara]
2. **Write down which version ran.** OpenCode is an open-source coding agent. Its changelog lists nine version 2 releases from 8 to 22 October 2026, so write down which version of each tool ran, as part of the task record.[^opencode-changelog]
3. **Before you run it again, set any action you could not undo to ask or deny.** OpenCode's agents start by allowing almost every action.[^opencode-permissions]
4. **Check it worked.** Run it again, then look for the result in the system it changes. A pass is the result there, not only a finished record.

Lab 11 runs in Claude or ChatGPT. Use these steps when you set up your own tool.

## What changes a step

Between the two AI vendors, two differences change what you do.

- *A run that went quiet.* Both AI vendors show past runs and let you pause a task. Only OpenAI's pages list the reasons a scheduled task pauses, so on OpenAI start with that list. On Anthropic, start with the run itself.
- *What shares the pool.* Both have one pool, but it covers different work. On Anthropic, chat and coding share it. On OpenAI, ChatGPT Work and coding share it, and chat joins only with the December 2026 change in the Product reference. Before you choose where a recurring job runs, know what else uses up its pool.

## What stays the same

[11.1](stop-first.md) to [11.3](three-levers.md) hold on any tool: stop, read the record, find the cause, pull one lever.

## Product reference

This is for looking things up, not for reading through. These are the lines the steps above do not use. Each tab gives the date its lines were checked. Products change every few weeks, so if the date is old, open a line's source before you rely on it.

### Claude

*As verified 18 November 2026.*

**Reading a run and its record.**

- *A task that stopped.* Cloud sessions keep running in the background, so open the session from any device to check it. A session on your own computer may have ended if the app closed or the computer slept. Since October 6, 2026, new tasks on Pro, Max and Ultra run in the cloud, so on those plans this applies only to tasks you started on your computer before that date.[^anthropic-cowork][^anthropic-cowork-surfaces]
- *Claude Duet.* Duet is a Claude that keeps working for you between your messages, a standing worker ([Chapter 9](../work-that-runs-without-you/overview.md)). Its *Tasks* tab shows what it is working on and which tasks need your input.[^anthropic-duet-help] You can see what it has done and is doing, and steer it.[^anthropic-duet-product]
- *Claude Tag.* Tag is one Claude that a whole team shares in a Slack channel, in beta on Team and Enterprise. Its Activity page lists every task for Owners.[^anthropic-claude-tag]
- *Changing direction.* A message typed during a reply waits. *Send now* stops the reply and sends yours (changed 10 September 2026). In Claude Code cloud sessions, you can go back to an earlier message (added 13 August 2026).[^anthropic-desktop-changelog]

**Usage and limits.**

- *Time windows.* Fixed-allowance plans (Pro, Max, Ultra, Team, seat-based Enterprise) have a five-hour session limit and weekly limits. Verified Ultra accounts have no five-hour limit. Some plans add a separate weekly limit for one model.[^anthropic-usage-best-practices]
- *What shares the pool.* claude.ai, Claude Code and Claude Desktop.[^anthropic-usage-limits] Duet's background work, such as the morning brief and check-ins, counts too, "with the rest of Claude."[^anthropic-duet-help][^anthropic-duet-product]
- *At a limit.* Wait for the reset, upgrade, or buy usage credits.[^anthropic-usage-limits] Credits (Pro, Max and Ultra) are billed at standard API rates, with an optional monthly spending limit and auto-reload.[^anthropic-usage-credits] Usage-based Enterprise plans have no fixed limits, and are billed by use.[^anthropic-usage-best-practices]
- *Ways to use less.* Content in projects is cached, stored for reuse, and counts less when reused, until the cache expires.[^anthropic-usage-best-practices] Long chats cost more. With code execution on, earlier messages are summarized near the context limit, and those chats use more of the limit.[^anthropic-usage-limits]
- *Scheduled task limits.* Not documented for the Claude app. Claude Code's scheduled tasks allow 100 runs an hour per account.[^anthropic-routines]

### ChatGPT

*As verified 21 November 2026.*

**Reading a run and its record.**

- *A task that stopped.* Tasks in the cloud sync across web, mobile and desktop, so you can continue one on another device.[^openai-moving-desktop]
- *Dots.* A dot is OpenAI's always-on agent, which keeps working between your messages. Its *Activity View*, in the desktop app, shows its tasks, their status and steps. You can redirect it or tell it to stop. Whether an action can be undone depends on the action.[^openai-dots-faq]

**Usage and limits.**

- *Time windows.* In Codex, and so in Work: five-hour and weekly windows.[^openai-codex-usage]
- *What shares the pool.* On plans with shared allowances: Work, Codex, ChatGPT for Excel and workspace agents. Ordinary chat is not on the list.[^openai-codex-usage] OpenAI says that from December 2026, Plus, Pro and Business plans will share one allowance across ChatGPT and Codex, measured in tokens, the small pieces of text a model reads and writes, and that Instant chat will not draw from it.[^openai-usage-limits] Talking to a dot does not count, but tasks it starts in Codex or Work do.[^openai-dots]
- *At a limit.* The active Codex turn can continue, subject to fair use. Then add credits, apply an available reset, upgrade or wait. Support cannot reset limits. Enterprise token-based billing depends on the workspace budget and user limits.[^openai-codex-usage]
- *Ways to use less.* Usage depends on model, task size, reasoning level, speed and tools.[^openai-codex-usage]
- *Scheduled task limits.* Free: a one-time task, or a recurring task at most once a day. Paid plans: recurring tasks up to once an hour. Event-triggered tasks: 30 runs an hour, 720 a day.[^openai-scheduled-tasks]

[^anthropic-cowork]: Get started with Claude Cowork, Claude Help Center.
[^openai-work-codex]: ChatGPT Work and Codex, OpenAI Help Center.
[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center.
[^anthropic-cowork-surfaces]: Use Claude Cowork on web, desktop, and mobile, Claude Help Center.
[^openai-scheduled-tasks]: Scheduled tasks in ChatGPT, OpenAI Help Center.
[^anthropic-routines]: Automate work with scheduled tasks, Claude Code Docs.
[^anthropic-claude-tag]: What is Claude Tag?, Claude Help Center.
[^openai-dots-faq]: Dots privacy, security and safety FAQs, OpenAI Help Center.
[^anthropic-desktop-changelog]: Changelog: release notes for Claude Desktop, Claude.ai Documentation.
[^anthropic-usage-best-practices]: Usage limit best practices, Claude Help Center.
[^openai-codex-usage]: Using Codex with your ChatGPT plan, OpenAI Help Center.
[^openai-usage-limits]: Understanding ChatGPT and Codex usage limits, OpenAI Help Center.
[^openai-moving-desktop]: Moving to the new ChatGPT desktop app, OpenAI Help Center.
[^openai-work-start]: Get started with ChatGPT Work, ChatGPT Learn.
[^anthropic-usage-limits]: How do usage and length limits work?, Claude Help Center.
[^anthropic-usage-credits]: Manage usage credits for paid Claude plans, Claude Help Center.
[^anthropic-duet-help]: Get started with Claude Duet, Claude Help Center.
[^anthropic-duet-product]: Claude Duet, Anthropic.
[^openai-dots]: Introducing dots, OpenAI, 29 September 2026.
[^omnara]: Omnara, README on GitHub.
[^opencode-changelog]: Changelog, OpenCode.
[^opencode-permissions]: Permissions, OpenCode v2 documentation.



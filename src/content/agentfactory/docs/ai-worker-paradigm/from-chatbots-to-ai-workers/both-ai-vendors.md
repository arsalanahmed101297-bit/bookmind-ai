# 1.5 Hand off a task in your own app (/ai-worker-paradigm/from-chatbots-to-ai-workers/both-ai-vendors)

---
type: Document
title: "1.5 Hand off a task in your own app"
description: "Hand a task to Claude, ChatGPT or an open-source tool and keep what it makes, then the differences that change a step, which tool fits which job, and what stays the same."
status: stable
order: 101.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "01"
part: I
expert_status: required
concepts: [ "1.5" ]
last_verified: 2026-10-22
review_by: 2026-12-21
sources:
  - id: openai-moving-desktop
    title: "Moving to the new ChatGPT desktop app (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001276-moving-to-the-new-chatgpt-desktop-app
  - id: anthropic-one-claude-post
    title: "Claude Cowork and chat are now one Claude (Anthropic, 16 September 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/cowork-is-now-claude
  - id: anthropic-one-claude-nov
    title: "Claude Cowork and chat are one Claude, on defaults and moving over (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: anthropic-cowork-surfaces
    title: "Use Claude Cowork on web, desktop, and mobile (Claude Help Center, updated 17 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: anthropic-cowork-architecture
    title: "Unified Claude Security Best Practices (Anthropic Trust Center, version 1.3.6, 7 November 2026, verified 2026-11-18)"
    resource: https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices
  - id: anthropic-unified-enterprise
    title: "Set up and manage the new unified Claude experience for your Enterprise organization (Claude Help Center, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization
  - id: anthropic-builtin-browser
    title: "Use the built-in browser in Claude Cowork (Claude Help Center, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork
  - id: anthropic-docs-ga
    title: "Build live dashboards and animate explainers with Claude (Anthropic, 8 October 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/dashboards-and-motion
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-pricing
    title: "Plans & pricing (Anthropic, verified 2026-11-18)"
    resource: https://claude.com/pricing
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-11-21)"
    resource: https://openai.com/index/introducing-dots/
  - id: openai-dots-help
    title: "Getting started with your dot (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001530-getting-started-with-your-dot
  - id: openai-pro-tiers
    title: "About ChatGPT Pro tiers (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers
  - id: anthropic-google-workspace
    title: "Claude now works with Google Docs, Sheets, and Slides (Anthropic, 6 October 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides
  - id: openai-excel-sheets
    title: "ChatGPT for Excel and Google Sheets (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: anthropic-file-uploads
    title: "Upload files to Claude (Claude Help Center, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/8241126-upload-files-to-claude
  - id: anthropic-duet
    title: "Introducing Claude Duet (Anthropic, 21 October 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/claude-duet
  - id: opencode-v2
    title: "OpenCode v2 documentation (OpenCode, 2.0 announced 12 October 2026, verified 2026-10-22)"
    resource: https://opencode.ai/v2/docs/
  - id: openclaw
    title: "OpenClaw README (OpenClaw Foundation, GitHub, MIT, verified 2026-10-22)"
    resource: https://github.com/openclaw/openclaw
  - id: anthropic-one-claude-plans
    title: "Claude Cowork and chat are one Claude, where tasks run (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: claude-launch
    title: "Introducing Claude Whiteboards, Claude Sheets, and Claude Data (Anthropic, 10 November 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/sheets-whiteboards-data
  - id: openai-chatgpt-work
    title: "ChatGPT is now a partner for your most ambitious work (OpenAI, 9 July 2026, verified 2026-11-21)"
    resource: https://openai.com/index/chatgpt-for-your-most-ambitious-work/
  - id: openai-usage-limits
    title: "Understanding ChatGPT and Codex usage limits (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits
  - id: anthropic-claude-in-chrome
    title: "Get started with Claude in Chrome (Claude Help Center, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome
  - id: openai-work-files
    title: "Creating and editing documents, spreadsheets, and presentations with ChatGPT Work (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work
  - id: openai-desktop-app
    title: "ChatGPT desktop app (ChatGPT documentation, verified 2026-11-21)"
    resource: https://learn.chatgpt.com/docs/app
  - id: openai-scheduled-tasks
    title: "ChatGPT Training: Set up scheduled tasks (ChatGPT documentation, verified 2026-11-21, with the web's text box seen in the app on 2026-10-20)"
    resource: https://learn.chatgpt.com/training/walkthroughs/scheduled-tasks
  - id: opencode-daemon
    title: "OpenCode 2.0 Turned Your Coding Agent Into a Daemon (Towards AI, 16 October 2026, verified 2026-10-22)"
    resource: https://pub.towardsai.net/opencode-2-0-turned-your-coding-agent-into-a-daemon-4663135862c4
  - id: opencode-cli
    title: "CLI, the background service (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/cli/
  - id: openclaw-proactive-check
    title: "Heartbeat, now the proactive check job (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/heartbeat
  - id: openclaw-security
    title: "OpenClaw: From Viral Prototype to Agentic Infrastructure (Catalaize, February 2026, verified 2026-10-22)"
    resource: https://catalaize.substack.com/p/openclaw-from-viral-prototype-to
  - id: omnara
    title: "Omnara README (Omnara, GitHub, Apache 2.0, verified 2026-10-22)"
    resource: https://github.com/omnara-ai/omnara/blob/main/README.md
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two banks both offer mobile check deposit. One puts it
inside the main app. The other has a separate deposit app. The idea is the
same, the packaging differs, and you check each bank's rules before relying
on them. Some people also use a free, open app that works with any bank. It
gives them more control, and more to check themselves.

**What you will learn.** Where your own app hands off a task, where it
keeps what the task made, and where you schedule one: in Claude, ChatGPT
or an open-source tool, a free program whose code anyone can read, which
you install and run yourself. You use these steps in Lab 1,
[Task 10](lab.md#task-10-what-survived),
[Task 11](lab.md#task-11-close-the-laptop) and
[Task 12](lab.md#task-12-a-checklist-every-monday).

**Why it matters.** The machine that does your task is temporary, and only the record lasts
([1.4](continuity-execution-persistence.md)). Each product keeps that
record in its own place, so before you rely on one, find where it puts
what the task made.

## How to hand off a task in your app

Keep this page open beside the lab. The job and its files are in the lab;
these steps say where each control is in your app.

**What you need ready:** a file for the task to work on, a brief that names
a finished result, and the app open beside this page.

### Claude

**Your plan.** A task that keeps going in the cloud needs the Pro, Max or
Ultra plan. On Team plans, cloud tasks are in beta on web and mobile, and on
Enterprise plans an owner turns them on.[^anthropic-cowork-surfaces] On the
Free plan, do the steps up to step 5, and ask in the same chat where the
file it made is kept. Then read the lab's Task 11 answer key for what a
cloud task would have shown.

1. **Open Claude where the job needs it.** Claude runs on the web at
   claude.ai, in the desktop app for Mac, Windows and Linux, and in the
   mobile app, and your account keeps your work across them. Use the desktop
   app, Claude Desktop, when the task needs a folder on your computer. A
   cloud task reaches only the folders you connected, and only while Desktop
   is open on that computer.[^anthropic-cowork-surfaces]
2. **Look at the message box.** Claude chat and Claude Cowork, Anthropic's
   name for Claude doing tasks, are now one conversation, with no mode to
   pick. Claude decides whether a request needs a quick answer or a
   task.[^anthropic-one-claude-post]

   ![One text box with no mode to pick. Claude reads what you typed: a
   question gets an answer seconds later in the same chat. A request that
   describes an outcome becomes a task that keeps running with the laptop
   closed and ends in finished work saved as an
   artifact.](./img/one-conversation.png)
3. **If the box still shows Chat and Cowork options,** your account has not
   moved over yet. Anthropic is moving accounts over in stages, so some get
   this before others, even on the same plan. On Team and Enterprise plans,
   the Chat and Cowork unified setting turns it on.[^anthropic-one-claude-nov]
4. **Set how often Claude asks,** with the permission setting in the
   message box. As of 18 November 2026, Auto is rolling out as the default on
   Pro, Max, Ultra and Team: it keeps working, and automated safety checks
   run before most of its actions.
   Manual, the default on Enterprise, asks before Claude takes
   actions.[^anthropic-one-claude-nov]
5. **Send a brief that names a finished result,** with its file
   attached. For example, for a different job:

   > Turn these twelve receipts into a spreadsheet of what I spent each
   > month, and keep it where I can open it next week.
6. **Close the laptop if you like.** On the Pro, Max and Ultra plans, tasks
   run in the cloud: they keep going after you close the laptop, and
   scheduled tasks run while your computer is off. The task runs in a
   sandbox, the [borrowed
   desk](../../claude-and-chatgpt-2/new-way-of-working/where-the-work-happens.md).[^anthropic-one-claude-plans]

   ![Two timelines. A task you hand off: the brief goes in at 5:00 pm, the
   laptop closes at 5:10, and the task finishes in the cloud at 5:40. The
   closed laptop makes no difference. A scheduled task: the computer is shut
   down at 11:00 pm, the schedule fires at 7:00 am while it is off, and the
   finished result is waiting when it is turned on at
   9:00.](./img/where-tasks-run.png)
7. **Ask for every file you want before you move on.** The sandbox [gets
   cleared](../../claude-and-chatgpt-2/behind-the-screen/why-the-borrowed-desk-gets-cleared.md).
   How long a sandbox lasts is the product's choice, and it differs by plan,
   so it is never where your work is kept. A working file the task made but
   never handed over, or a tool it installed, lived only in the sandbox. You
   cannot get it back. So ask, as the lab does: "Which files did you create
   that you did not deliver to me?"[^anthropic-cowork-architecture]
8. **Find what it made.** The files it delivers are [saved to your
   account](../../claude-and-chatgpt-2/build-something/where-your-work-is-saved.md).
   Claude's own editors for documents, slide decks and designs are built into
   the Claude app itself, with no other software needed. They are out of beta
   and on every plan, including Free. Each thing you
   make in them is an **artifact**.[^anthropic-docs-ga] The table shows where
   each kind of result goes.

| What the task made | Where you find it |
| --- | --- |
| An artifact: a doc, slide deck or design | The Artifacts tab in the Claude sidebar, with the artifacts from all your chats[^anthropic-artifacts] |
| A plain file, such as an image, a data file or a PDF | Its file card, in the chat that delivered it[^anthropic-artifacts] |
| An edit through the Google Workspace sidebar | The Google file itself, in your Drive[^anthropic-google-workspace] |
| A file you uploaded | The chat you attached it to: an upload stays there. A task works on a copy of it, so your original is untouched when the sandbox is wiped[^anthropic-file-uploads] |

   For files you use in many chats, such as a
   price list, a better home is a project's own files, which
   [Chapter 2](../what-is-an-ai-worker/worker-runtime-channel.md)
   introduces.
9. **To repeat it, schedule it.** A scheduled task gets a fresh sandbox
   each time it runs. What carries over is its saved instructions and its
   run history. A scheduled task with a folder on your computer has
   "Require this computer" turned on, so it runs only while your computer
   is awake and Desktop is open. To make one, click Scheduled in the left
   sidebar, then New task in the upper right. You can also describe the
   task in a conversation and confirm it. Run it from Scheduled, read each
   run there, and delete it there when you no longer need
   it.[^anthropic-scheduled-tasks]
10. **Check it worked.** A day later, open the conversation and the
    Artifacts tab, and look for each file you asked for. What you find is
    your result: write down where each one was.

### ChatGPT

**Your plan.** As of 21 November 2026, the OpenAI pages cited here leave
three things unsaid: which plans a Work task needs, whether it keeps going
while the laptop is closed, and how long a delivered file stays. Steps 4
and 5 have you check the last two yourself. If you do not see the Chat and
Work toggle, read the lab's answer keys for what you would have seen.

1. **Open ChatGPT, and find the Chat and Work toggle.** In ChatGPT, you
   choose Chat or Work from a toggle. In the new ChatGPT desktop app, it sits
   beside Codex, OpenAI's coding agent.[^openai-moving-desktop]
2. **Choose Work for a task.** Work is OpenAI's agent for longer tasks.
   ChatGPT is coming together in one conversation too: OpenAI says it is bringing what Work can do into the main ChatGPT
   experience, so the toggle may go.[^openai-usage-limits]
3. **Send a brief that names a finished result,** with its file
   attached, as in the Claude tab. In a task, an agent acts across your apps and
   files. It can keep working on a project for hours, and it turns a goal
   into finished slides, spreadsheets, documents and websites. It offers
   scheduled tasks, a built-in browser, and local files and apps through the
   desktop app.[^openai-chatgpt-work]
4. **Close the laptop for ten minutes, then open the conversation.** What
   you see is your finding.
5. **Find what it made.** Through its Google Workspace apps, ChatGPT can
   create and edit native Google Docs, Sheets and Slides from the chat, so
   the file it produces is a real file in your Drive, not an attachment in a
   conversation.[^openai-work-files] For any other file, download it
   now.
6. **To repeat it, schedule it.** Scheduled has its own item in the left
   menu, and a task can also be scheduled from inside a
   chat.[^openai-desktop-app]
7. **Set where the scheduled task runs.** On the web, you describe the task
   and its timing in the text box. In the desktop app, a form sets the
   timing: choose Cloud there when it is offered. A task that needs local
   files needs your computer on, with the app
   running.[^openai-scheduled-tasks]
8. **Check it worked.** A day later, open the conversation and your Drive,
   and look for each file you asked for. What you find is your result:
   write down where each one was.

### Open source

**Your setup.** Open-source tools are free, but you install them yourself
and pay for the model you use, unless you run one on your own hardware.
Lab 1 runs in Claude or ChatGPT, so use these steps when you set up your
own tool.

1. **Install OpenCode on your computer.** OpenCode is an open-source coding
   agent, the counterpart of Claude Code and Codex, the coding agents from
   Anthropic and OpenAI. Version 2.0 runs as one shared background service on
   your machine. Its terminal app, desktop app, web interface and your own
   scripts all connect to that one service.[^opencode-cli]
2. **Choose the model.** OpenCode works with many model providers,
   including local models. There is no hosted web app to sign in to: even
   the web interface connects to the agent on your own
   machine.[^opencode-v2]
3. **Send your brief,** with its file. The task
   is briefed, runs and ends on your computer, not in a vendor's cloud, so
   the files it makes are in your own folders.
4. **Back up those folders.** What persists is your folders, as long as you
   keep them. No vendor keeps a copy.
5. **For ongoing work, use OpenClaw only on a separate machine,** with its
   own accounts and the smallest possible permissions. OpenClaw is a free,
   open-source assistant that you host yourself.[^openclaw]
6. **Check it worked.** A day later, open the folder, and look for each
   file you asked for.

[Chapter 12](../../building-ai-workers/agentic-coding/overview.md) covers
OpenCode, Claude Code and Codex.

## What survives, the machine or the record?

**Keep what you care about in the part that lasts.** Ask one question of
any tool: when the work is done, what survives, the machine or the record?
The record is your brief, the history of the work and the finished files.

Six tools show the two answers. A Claude task and an OpenCode task, as the
steps above show, are each briefed for one job, and hand back a record.
ChatGPT's tasks work the same way. Three others are always-on agents, which
keep working between conversations:

- **Claude Duet and an OpenAI dot.** Duet is Anthropic's always-on agent,
  still in preview. A dot is OpenAI's. Each keeps going
  between conversations, on a cloud computer of its
  own.[^anthropic-duet][^openai-dots]
- **OpenClaw** keeps going too, on a machine that you own and keep on.

**For a delegated
task in Claude, the machine is temporary and the record is durable.** The
brief, the history and the artifacts live on in your
account.[^anthropic-cowork-architecture] **An always-on
agent stands that on its head: the machine itself is the standing thing.**
Open-source tools move the machine onto your own hardware. It
lasts as long as you keep it, and so does everything on it.

If a task without a
permanent machine looks like a gap, [Chapter 4](../the-architecture-in-one-picture/worker-is-the-records.md)
shows why it is a design choice.

![What persists, the workspace or the record? A grid with two kinds of
worker, delegated and standing, and two places the work runs, a vendor's
cloud and your own hardware. Delegated, in a vendor's cloud: a Claude task
or routine gets a fresh workspace for each run, removed afterward, while the
brief, run history, sessions and artifacts stay in your account. What
persists is the record, not the workspace. ChatGPT tasks are delegated
too. Delegated, on your own
hardware: an OpenCode task, run by a coding agent, runs on your computer,
with no hosted web app.
Its terminal, desktop app and web interface all connect to the agent on
your machine. What persists is your folders, as long as you keep them, so
back them up. Standing, in a vendor's
cloud: Claude Duet and an OpenAI dot each have a cloud computer of their own
that keeps running between conversations. What persists is the machine and
its files, between conversations. Neither launch page states a retention
period. Standing, on your own
hardware: OpenClaw runs on a machine you own and keep on. Everything on it
persists, passwords too, so use a separate machine, its own accounts and the
smallest permissions. Keep what you care about where the survivor is.](./img/machine-or-record.png)

## What may an always-on agent do alone?

An always-on agent keeps going when you are not there, so you decide in
advance what it may do. On OpenAI's side, that is a dot's rules.

**Rules and oversight.** During what OpenAI calls proactive research,
work the dot starts on its own, a dot uses only read-only tools. Custom Rules set what it may do alone, what
needs approval and what is blocked. Activity View shows its
work.[^openai-dots]

![An illustrated example of a dot's controls. Custom Rules sort its
actions into three tiers: things it may do alone, such as reading an
inbox, things that need your approval, such as sending an email, and
things that are never allowed. Activity View logs every action it took,
including work waiting for approval. During proactive research, work the
dot starts on its own, it uses read-only tools: it can look, not
touch.](./img/dot-rules.png)

## What changes a step

Five differences between the products change what you do, or which product
you choose.

1. **How continuity is provided.** A Claude or OpenCode task is briefed,
   runs and ends: inside a defined role with an owner, that is how a
   **Delegated AI Worker** works. Duet, a dot and OpenClaw keep their
   identity and context between conversations, as a **Standing AI Worker**
   does. [2.1](../what-is-an-ai-worker/anatomy-of-an-ai-worker.md#two-kinds-of-ai-worker) defines both.
2. **What you must verify yourself.** Anthropic documents its session
   sandbox.[^anthropic-cowork-architecture] But neither Anthropic's Duet
   page nor OpenAI's launch post says how long the worker's own computer, or
   the files on it, last.[^anthropic-duet][^openai-dots] Check
   each AI vendor's help center, and each project's security guide, before
   you rely on such details.
3. **What comes back.** Claude's agentic work is built around an outcome. A
   task ends in finished files, documents, slide decks or designs, made in
   editors inside the same Claude app on web, desktop and
   mobile.[^anthropic-one-claude-post] A dot is a lasting co-worker in the
   background. It works across your apps, reaches you in ChatGPT, Slack and
   Teams, and starts tasks when the job needs finished
   materials.[^openai-dots] Duet works the same way in the background, in
   one ongoing thread.[^anthropic-duet] OpenCode's results are files in folders on your
   own machine. OpenClaw reaches you in the chat apps you already
   use.[^openclaw]
4. **What it costs to start.** Claude's cloud tasks start on the Pro plan, at $20
   a month billed monthly.[^anthropic-pricing] A dot comes with ChatGPT Pro, from $100 a
   month.[^openai-pro-tiers] The product reference lists the other plans.
   Open-source tools are free to install.[^opencode-v2] Prices change, so check each pricing page on the
   day you decide.
5. **Who holds your data.** With Anthropic and OpenAI, your sessions, your
   files and the worker's memory live in the vendor's cloud, under the
   vendor's terms. With open-source tools, the worker's state, memory and
   passwords stay on hardware you control. Your prompts still go to the
   company that runs the model, unless you run the model
   yourself.[^openclaw] Control moves to you, and so does the security
   work.

## Which surface for which job

The choice follows the ladder. A question or a draft you will read once is
the chatbot rung, and a clear outcome, such as the invoice register, is the
agent rung. On both AI vendors, the two start in one conversation. In
Claude, your brief says which you want. In ChatGPT, while the toggle lasts,
you also choose Chat or Work (step 1 of its tab). A schedule is not a third
choice: it repeats a task. For ongoing work
that should continue between conversations, such as keeping track of a vendor
inbox, use an always-on agent. On OpenAI's side that is a **dot**, which you pick by name.[^openai-dots] Set its
Custom Rules first, so you decide what it may do alone. On Anthropic's side it
is Duet, once it reaches your account. In open source, OpenCode answers
questions and does tasks with a clear outcome. OpenClaw handles ongoing
work (step 5 of its tab). [Chapter 2](../what-is-an-ai-worker/both-ai-vendors.md) adds
OpenAI's Space, where a team keeps the documents it edits together, and
completes the comparison.

![Three kinds of job: a question, a clear outcome, and ongoing work. On
Anthropic's side, a question or an outcome is handled in one conversation,
where your brief decides and a schedule repeats a task. Claude Duet, in
preview, handles ongoing work and asks before it acts outward. On OpenAI's
side, a question or an outcome is also handled in one conversation, where you
give a brief and a schedule repeats a task. A dot, with its Custom Rules set
first, handles ongoing work. In open source you install the tool, then pick it:
OpenCode for questions and tasks on your own machine, and OpenClaw for
ongoing work, only on a separate, secured machine. Define the job first,
then choose how to delegate it.](./img/which-surface.png)

## The text box moves into the file

Until now we have treated the text box
as a separate place: you go to the AI, give it work, and carry the results
back. Both vendors have closed that gap. The box now also opens inside the
file you are already working in.

Claude for Google Workspace, in public beta on paid plans, adds Claude as a
sidebar inside Google Docs, Sheets and Slides, the files you keep in Google
Drive. It reads the open file, sees what you have selected, and changes the
file in place. In Docs, bigger rewrites arrive as cards you apply or dismiss
one at a time. In Sheets it writes formulas, pivot tables and charts. In
Slides it builds new slides from the deck's own layouts, then flags
overlapping or unreadable elements. Separate Docs, Sheets and Slides
connectors run the other direction: you stay in Claude, paste a file link,
and Claude creates or edits the Google file from the
chat.[^anthropic-google-workspace] The ChatGPT add-on for Microsoft Excel
and Google Sheets puts a sidebar inside the open spreadsheet that reads and
edits the live cells.[^openai-excel-sheets]

Notice what this does to the three ideas
this chapter keeps separate. When the AI edits the file you have open,
*where the result is kept* stops being a trap: the result is the file, in
your Drive, where you already look for it. Maria's lost spreadsheet could
not have happened this way.

![Before: your file and the AI chat are two windows, and you carry work in
and copy results back by hand. Now: the AI opens as a sidebar inside the
file, reads it, and proposes edits as cards you apply or dismiss. The
result is the file itself.](./img/text-box-into-file.png)

![Two homes for your files. Files made in Claude live in its built-in
editors (Docs, Slides, Design and Data, with Sheets, Whiteboards and
Motion in beta)
and are kept in the Artifacts tab. Files kept in Google get Claude
brought to them: a sidebar inside the open file proposing edits you apply
or dismiss, or, in the other direction, Claude editing the Google file
from the chat when you paste its link.](./img/inside-your-files.png)

You do this in Lab 1, [Task 14](lab.md#task-14-the-ai-inside-the-spreadsheet).

## What stays the same

Products will keep changing, but four things stay true on any of them.

1. Every request is routed to answering or to working, by the product or
   by you.
2. The work runs somewhere, in a vendor's sandbox or cloud computer or on
   your own machine, and someone controls it.
3. Anything you want to keep must be saved to a known place, and you must
   know who can reach it and how long it stays
   ([1.4](continuity-execution-persistence.md#what-is-the-rule-for-anything-you-need-later)).
4. Saved is still not the company's governed record, the system your
   organization treats as the official truth
   ([Chapter 4](../the-architecture-in-one-picture/overview.md)).

![Four distinctions as a pipeline. First, route the request to answering
or to doing work. The product routes it, or you do, by picking the tool.
Second, know who controls where the work runs: a vendor's sandbox, cloud
computer or remote browser, or your own machine, which you must secure
yourself. Either way, prompts go wherever the model runs. Third, name where
what you keep is saved, whether files, artifacts or a worker's memory, and
ask who can reach it and how long it stays. Fourth, saving does not
automatically make it the governed record, the system your organization
treats as the official record. Saved output is not governed truth. Chapter
4 draws the architecture that closes that gap.](./img/the-invariant.png)

## Product reference

Product details change often, so they are kept here with their dates, for
looking things up, not for reading through. Each tab gives the date it was
checked, and each line names its source.

### Claude

*As verified 18 November 2026.*

**Tasks started before October 6.** A task you started on your computer
before October 6, 2026, when new tasks moved to the cloud, stays there
until it is done.[^anthropic-cowork-surfaces]

**Details by plan.** The sandbox never holds your passwords. Its only keys
are temporary passes, called session tokens, that expire within hours.
Calls to your connected apps are made from Anthropic's servers, outside
the sandbox.[^anthropic-cowork-architecture] Anthropic's setup page for
Enterprise owners gives one lifetime: after a few idle minutes, the sandbox is stopped
and its disk is saved, and it expires 30 days after it was
created.[^anthropic-unified-enterprise] That is still temporary (step 7). When a task needs a website, Desktop gives it a built-in
browser in a side panel, separate from your own browser. If you already
use Claude in Chrome, tasks use that by
default.[^anthropic-builtin-browser] Claude in Chrome, a browser extension
on paid plans, works in
your own Chrome instead of the built-in browser: it reads, clicks and
navigates websites alongside you. Its side panel is on the Max, Ultra and
Team plans, and is reaching Pro accounts in
stages.[^anthropic-claude-in-chrome]

**More editors.** Claude Data, which builds live dashboards, is generally
available on paid plans. Two newer editors are in beta on paid plans:
Claude Sheets, a spreadsheet, and Claude Whiteboards.[^claude-launch] Claude Motion, which builds short animated
explainers, is in beta on Team and Enterprise plans.[^anthropic-artifacts]
Spreadsheet work can also come back as a file you download, or happen in
Google Sheets through the sidebar. Expect this list to grow, and read each
addition with the four questions in [1.6](paradigm-and-products.md).

**A worker that keeps going.** Claude Duet is Anthropic's always-on
agent. It is a research preview, with a waitlist for US Pro, Max and
Ultra subscribers. Duet is separate from the main Claude app for now. You reach
it in one ongoing thread, typed or spoken, in its own app on iOS and
Android or on claude.ai. It starts with the memory, skills and connected
apps from your Claude account. It has its own virtual machine with its own
browser, so your laptop and phone can be off. Each morning it sends a short
brief. During the day it checks your connected accounts every few hours,
and it messages you only when something needs attention. It reads, drafts
and prepares work on its own. Before it sends a message, makes a payment,
signs a document or deletes anything, it shows exactly what it will do and
waits for your approval. Some actions, such as trading securities, are not
allowed even with approval. Its background checks count toward your plan's
usage limits.[^anthropic-duet]

**The launch post and the help page differ.** Anthropic's launch post of
16 September says Claude asks by default.[^anthropic-one-claude-post] The
help page, updated 18 November, is newer, and step 4 above follows it. Read
what your own message box shows.

### ChatGPT

*As verified 21 November 2026.*

**One allowance.** From December 2026, OpenAI says Plus, Pro and Business plans
will share one allowance across ChatGPT and Codex.[^openai-usage-limits]

**Dots.** A dot is OpenAI's always-on agent. You can open its cloud
computer and browser to check its work. With your permission, it can also
use your laptop. It connects to apps through plugins, and carries context
across ChatGPT, Slack and Teams.[^openai-dots]

![A dot at the center of its world. It works on its own cloud computer
and browser, which you can open any time to check. It reaches you in
ChatGPT, Slack and Teams with the same identity and context. It connects
to your apps through plugins. It can use your laptop only with your
permission. Between your conversations it keeps working. You chat on
Monday, and on Thursday it remembers.](./img/dots-anatomy.png)

**Status and price.** Dots are on Pro and Business Premium, and are
reaching some Plus users. Enterprise and Edu workspaces have them unless
an admin opts out.[^openai-dots-help] Each user starts with one primary dot,
included in the plan. Chatting with your dot does not count toward your
usage limits, but tasks it starts for you do.[^openai-dots]

### Open source

*As verified 22 and 23 October 2026.*

**What changes.** No vendor runs these tools for you, so there is no
vendor sandbox and no vendor help center: you take on the setup, the
updates and the security. This book uses three projects. Two belong in
this chapter. The third, Omnara, a runtime for teams and products that you
can host yourself, comes in later chapters.[^omnara]

**OpenCode's new risk.** One report points out a new risk: because the
agent now runs outside the terminal, a sandbox around the terminal no
longer contains it.[^opencode-daemon]

**OpenClaw, for ongoing work.** A scheduled job, the proactive check, wakes
the agent every 30 minutes by default and sends what it finds to you in a
direct message.[^openclaw-proactive-check] You reach it through apps you
already use, such as WhatsApp, Telegram, Slack and Discord. It is free under
the MIT license and run by the OpenClaw Foundation, an independent
nonprofit.[^openclaw]

**Where things run.** Your prompts also go to the chat apps you use.
OpenClaw's tools run directly on your computer unless
you set up a sandbox.[^openclaw] So there is no disposable sandbox unless
you build one.

**Security.** Take this part seriously. An early security report found over
30,000 OpenClaw copies open to the internet, many without passwords, and
said security firms called its default settings unsafe.[^openclaw-security]
Its current guidance is better. It treats incoming messages as untrusted,
and unknown senders must pair with it before they can message
it.[^openclaw] Read each project's security guide, and keep to step 5
above.

**Status and price.** The software is free. OpenCode also offers
OpenCode Go, an optional $10-a-month plan for coding
models.[^opencode-v2] Open-source tools are not on Anthropic's
certification exams.

[^anthropic-one-claude-post]: Claude Cowork and chat are now one Claude, Anthropic, 16 September 2026.
[^anthropic-one-claude-nov]: Claude Cowork and chat are one Claude, Claude Help Center, accessed 18 November 2026.
[^anthropic-cowork-surfaces]: Use Claude Cowork on web, desktop, and mobile, Claude Help Center.
[^anthropic-cowork-architecture]: Unified Claude Security Best Practices, version 1.3.6, Anthropic Trust Center, 7 November 2026.
[^anthropic-unified-enterprise]: Set up and manage the new unified Claude experience for your Enterprise organization, Claude Help Center.
[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center.
[^anthropic-builtin-browser]: Use the built-in browser in Claude Cowork, Claude Help Center.
[^anthropic-docs-ga]: Build live dashboards and animate explainers with Claude, Anthropic, 8 October 2026.
[^anthropic-google-workspace]: Claude now works with Google Docs, Sheets, and Slides, Anthropic, 6 October 2026.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
[^anthropic-file-uploads]: Upload files to Claude, Claude Help Center.
[^anthropic-pricing]: Plans & pricing, Anthropic.
[^openai-excel-sheets]: ChatGPT for Excel and Google Sheets, OpenAI Help Center.
[^openai-dots]: Introducing dots, OpenAI, 29 September 2026.
[^openai-pro-tiers]: About ChatGPT Pro tiers, OpenAI Help Center.
[^openai-dots-help]: Getting started with your dot, OpenAI Help Center.
[^anthropic-duet]: Introducing Claude Duet, Anthropic, 21 October 2026.
[^opencode-v2]: OpenCode v2 documentation, OpenCode.
[^openclaw]: OpenClaw, OpenClaw Foundation, README on GitHub.
[^openai-moving-desktop]: Moving to the new ChatGPT desktop app, OpenAI Help Center.
[^anthropic-one-claude-plans]: Claude Cowork and chat are one Claude, Claude Help Center, updated 18 November 2026.
[^anthropic-claude-in-chrome]: Get started with Claude in Chrome, Claude Help Center.
[^claude-launch]: Introducing Claude Whiteboards, Claude Sheets, and Claude Data, Anthropic, 10 November 2026.
[^openai-chatgpt-work]: ChatGPT is now a partner for your most ambitious work, OpenAI, 9 July 2026.
[^openai-usage-limits]: Understanding ChatGPT and Codex usage limits, OpenAI Help Center.
[^openai-work-files]: Creating and editing documents, spreadsheets, and presentations with ChatGPT Work, OpenAI Help Center.
[^openai-desktop-app]: ChatGPT desktop app, ChatGPT documentation.
[^openai-scheduled-tasks]: ChatGPT Training: Set up scheduled tasks, ChatGPT documentation.
[^opencode-daemon]: OpenCode 2.0 Turned Your Coding Agent Into a Daemon, Towards AI, 16 October 2026.
[^openclaw-security]: OpenClaw: From Viral Prototype to Agentic Infrastructure, Catalaize, February 2026.
[^opencode-cli]: CLI, OpenCode v2 documentation.
[^openclaw-proactive-check]: Heartbeat, OpenClaw documentation.
[^omnara]: Omnara, README on GitHub.



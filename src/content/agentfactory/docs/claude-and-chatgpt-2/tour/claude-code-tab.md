# Claude 2.0: the Code tab and running work (/claude-and-chatgpt-2/tour/claude-code-tab)

---
type: Document
title: "Claude 2.0: the Code tab and running work"
description: "The rebuilt Code tab, asking without interrupting, keeping work running with /goal and the cloud, running several things at once, projects, mods and briefing Claude, with a note on which parts a reader who does not build software needs."
status: stable
order: 0.22
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Claude Code tab" ]
last_verified: 2026-11-20
sources:
  - id: context
    title: "Use Claude Code Desktop (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop
  - id: rewind
    title: "Claude 2.0 full guide: 12 changes in the new Claude desktop app (DEV Community, verified 2026-11-05)"
    resource: https://dev.to/hisashispace/claude-20-full-guide-12-changes-in-the-new-claude-desktop-app-and-the-ones-burning-your-usage-3nk4
  - id: checkpointing
    title: "Checkpointing (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/checkpointing
  - id: goal
    title: "Keep Claude working toward a goal (`/goal`) (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/goal
  - id: nested
    title: "Video walkthrough of the new Claude desktop app (YouTube, verified 2026-11-05)"
    resource: https://www.youtube.com/watch?v=tM0dwXhOv2o
  - id: coordinate
    title: "Use Claude Code Desktop (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop
  - id: projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, no page date shown, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects.md
  - id: mods
    title: "Customize Claude Code with mods (Anthropic, October 1, 2026, verified 2026-11-20)"
    resource: https://claude.com/resources/articles/claude-code-mods
  - id: mods-docs
    title: "Mods overview (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/plugins/mods/overview
  - id: brief-claude
    title: "Prompting Claude Opus 5.5 (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5
  - id: cloud-claude
    title: "Configure cloud environments, network access (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: claude-code-desktop
    title: "Use Claude Code Desktop (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop
  - id: chatgpt-features-video
    title: "Video walkthrough of ChatGPT's newest features (YouTube, verified 2026-11-05)"
    resource: https://www.youtube.com/watch?v=9l9BVyCQPRk
  - id: anthropic-claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web.md
  - id: app-walkthrough
    title: "Video walkthrough of the new Claude app: projects, side chats, split view and artifacts (YouTube, verified 2026-11-07)"
    resource: https://www.youtube.com/watch?v=KjuANoI8HDw
  - id: scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: remote-control
    title: "Continue local sessions from any device with Remote Control (Anthropic, no page date shown, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/remote-control
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

The **Code tab** is the part of the Claude desktop app where Claude Code works on files and folders. A **session** there is one conversation with Claude, with its own history and its own folder. When it runs on Anthropic's computers, it is a cloud session.

**If you do not build software, read three parts of this page:** [Keeping the work running when you step away](#keeping-the-work-running-when-you-step-away), [Projects](#projects-one-conversation-that-runs-the-work) and [Briefing Claude 2.0](#briefing-claude-20). The other parts are marked *For builders*.

### The Code tab's new layout

*For builders: look this up when a later chapter uses it.*

Anthropic rebuilt the Code tab, so now you can see what Claude is doing without reading every message. It has three columns. On the left, the sidebar lists your sessions. In the middle is the conversation. On the right is the session rail.

**The session rail** is a column of cards beside the conversation. You can show it or hide it. (Anthropic's pages call it the session details panel.) It has four kinds of card:

- **Environment** shows where the session runs: on your computer, in the cloud, or on a remote machine. It also shows the folder the session works in, and the switch for **Remote Control**, which the section on stepping away explains.
- **Context** shows how full the session's context is. Context is everything Claude holds in mind at once: your messages, plus what Claude has loaded, such as connectors, skills, agents (helpers Claude can hand work to) and memory files. So the card helps you spot a connector or a memory file that crowds out your work. When the context fills, Claude **compacts** it: it replaces older detail with a short summary and keeps working. To do that yourself in a long session, type `/compact`.[^context]
- **Changes** lists what the session has changed. You can open each change and comment on it.
- A fourth card, which Anthropic's documentation does not name, shows what the session is running in the background.[^context]

**Panes** are extra windows that open beside the conversation. One pane is a **terminal**, a window where you type commands for the computer. Others show the list of changes, a browser that previews what Claude is building, the files it works with, and its plan and background tasks.

![An illustrative layout of the Code tab in three columns. It is not an exact screenshot. Column 1 is Sessions. It shows a pinned coordinator session, then sessions grouped into sections such as Client A and Book. Under Supplier research are two smaller sessions nested under it, marked as a reported feature. Column 2 is the conversation. It shows your brief with what you want and its "Done when" sentence. It also shows Claude's plan, its progress, the results of its checks, and your follow-up. Below them are the message box with a context ring, and buttons for the Terminal, Changes, Browser and Files panes. Column 3 is the session rail. An Environment card shows local or cloud, the folder and a Remote Control switch. A Context card shows how messages, connectors, skills and memory fill the context. A Changes card lists changed files. The captions say to group work by project or client, and to open panes to inspect the work. They also say to see where the work runs, how much context it uses and which files changed.](img/claude-code-tab-layout.png)

Two settings help if you are not technical. First, in a session on your computer, you can open a file in the files pane and edit it yourself. A session in the cloud shows files view-only, so ask Claude for the change. Second, **Ctrl+O** switches the conversation between three views.[^claude-code-desktop]

- **Normal** folds each step into a short summary.
- **Thinking** adds Claude's thinking.
- **Verbose** shows every step.

Stay in Normal to see what Claude is doing without the technical detail.

### Asking without interrupting

*For builders: look this up when a later chapter uses it.*

- **Side chat.** A side chat lets you ask a question without changing the main conversation. Open one with `/btw` or a keyboard shortcut. It can read the main conversation up to that point and answer you. Nothing you say there is added back. Side chats work in sessions on your computer and on remote machines. The app does not save them, so they are gone after you close the app.[^claude-code-desktop]
- **Fork.** A fork copies the conversation from a chosen point into a new session. Use it to try a different direction without changing the original. Anthropic documents forking for sessions you open at claude.ai/code.[^remote-control]
- **Rewind.** In Claude Code, `/rewind` takes the session back to an earlier point, like undo.[^checkpointing]
- **Split view.** Split view opens two sessions side by side. Right-click a session in the sidebar and choose **Open in**, or Option-click it (Alt-click on Windows).[^claude-code-desktop]

### Keeping the work running when you step away

- **Remote Control** connects a session on your computer to the Claude mobile app and to claude.ai on the web. Then you can read the session, answer its questions and approve its requests from your phone. The session still runs on your computer. Turn it on for one session with the switch on the Environment card. To turn it on for every new session, open Settings and turn on **Connect new sessions to Remote Control**.[^remote-control],[^claude-code-desktop]
- **Keep computer awake** is a setting. It stops your computer from going to sleep on its own while the app runs your work. Closing the laptop lid still puts it to sleep.[^scheduled-tasks]
- **Cloud sessions** run on Anthropic's computers, so they continue with your laptop closed. A cloud session in the Code tab cannot see the files on your computer. It works from what you give it, such as a **GitHub repository** (a project's files, stored online at GitHub) or files you upload.[^anthropic-claude-code-cloud]
- **Scheduled tasks** start a session at a set time. A **local task**, which Anthropic's pages also call a Desktop task, runs on your computer, so the app must be open and the computer awake. A **cloud task** runs without your computer. It can also start when another program sends it a request, or when something happens on GitHub, such as a new pull request.[^scheduled-tasks]

These pair well with **`/goal`**, a command that keeps Claude working until a condition you set is met. You state the finish line. For Brightline's weekly payment run, a finish line for the whole folder might be "all 15 invoices in the Invoices folder have a pay, hold or ask decision, and the run total matches the checking program".

A **turn** is one stretch of work that ends when Claude stops and hands back to you. After each turn, a separate small model reads the conversation and judges whether the condition holds. If it does not, Claude starts another turn instead of stopping to ask you. The goal also ends in two other cases. The checker may judge the condition impossible. Or a turn may fail on an error you have to fix, such as a used-up credit balance. You can clear a goal yourself at any time with `/goal clear`.[^goal]

Two cautions. First, write a finish line that Claude's own output can show, never "make it great". Second, the separate model only reads what the conversation shows. It does not open files or rerun anything. So it is a second opinion, not an independent check. A met goal is evidence that the work is finished, and it never gives permission for the next action.

![How /goal keeps Claude working. You set a finish line, then Claude works, checks and continues. Step 1 is to set the goal, such as all 15 invoices have a decision and the total matches the checking program. In step 2, Claude works one turn, runs the checks and shows the results. In step 3, the evaluator, a separate small model, reads the conversation. It judges whether the evidence shows the goal is met. If it is not yet met, Claude takes another turn, guided by the reason. If it is met, the goal clears and you review the evidence. If it is judged impossible, the goal clears and you review the blocker. An error that you need to fix can also clear the goal. Two notes follow. First, the checker sees only the conversation. It does not open files or rerun checks, and it is a second opinion, not independent verification. Second, completion is not permission. A met goal is evidence of completion, and permissions and required approvals still control what happens next. At the foot, a line says you can clear the goal yourself with /goal clear.](img/goal-loop.png)

### Where the work actually runs

*For builders: look this up when a later chapter uses it.*

[Where the work happens](../new-way-of-working/where-the-work-happens.md) explains the borrowed desk, and says where a task in a conversation runs. The Code tab adds these details.

- **Idle sessions lose their machine.** If a cloud session sits idle long enough, Anthropic takes its virtual machine back. When you reopen the session, Claude starts a fresh one. Your conversation comes back. Work that was still running in the background does not come back. Claude tells you what stopped, so you can run it again.
- **What it can reach.** By default, a Code tab cloud session reaches only websites on an allowed list, which includes GitHub and the places that supply software packages. All its internet traffic passes through Anthropic's security proxy, a filter between the machine and the internet. Whoever sets up the cloud environment can widen the list, allow every website, or block outside websites. Even then, the session still reaches GitHub, your connectors and Anthropic's own service. Your keys for GitHub stay outside the machine: Anthropic's servers add them when a request leaves it.[^cloud-claude],[^anthropic-claude-code-cloud]

Why does it work this way, and what does it mean for an AI Worker? See [Behind the Screen](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md).

### Three ways to run several things at once

*For builders: look this up when a later chapter uses it.*

**Nested sessions** split one job into side jobs. Each side job runs in its own session, called a side session. Sometimes Claude shows a card that suggests related work. Its button labeled Start runs that work in another session, and the sidebar lists that session under the current one. Anthropic documents only these cards. Walkthroughs show more, such as sidebar sections and saved side chats, so do not plan on them.[^nested],[^claude-code-desktop],[^app-walkthrough]

**A coordinating session** manages sessions that are already running. This is a way of working, not a button. Every Code session can list, read, message, rename and archive your other sessions. So you can pick one session and use it as a control center. Ask it "what's waiting on me?" It tells you which sessions have finished, which need approval and which are still working. It sees your 20 most recently active sessions on this computer, unless you ask it to look further. It does not see cloud sessions.[^coordinate]

**Projects** carry ongoing work with shared instructions and memory. The next section covers them.[^projects]

![Three ways to run several things at once. You can split one job, coordinate separate jobs, or sustain ongoing work. Panel 1 is nested sessions, a reported feature not yet documented. A main session assigns side jobs 1, 2 and 3, and each side job reports back. You can open a side job and ask it directly. Panel 2 is a coordinating session. A pinned coordinator reads, messages and organizes sessions already running, such as Build, Research and Report. Ask it "What's waiting on me?" to get one place to review ongoing sessions. Panel 3 is a project. One project conversation with shared instructions and memory starts cloud threads. Cloud work can continue with your laptop closed, and the overview shows what needs you. Local resources may still need your computer online. A band says that more parallel work uses your plan's limits faster, so start with two sessions.](img/three-ways-parallel.png)

| You want to | Use | What each new session knows at the start | Runs with your laptop closed |
| --- | --- | --- | --- |
| Split one big job into parallel parts | Nested sessions | What the main session tells it | Only if it runs in the cloud |
| Keep track of sessions already running | A coordinating session | Your other sessions, as it reads them | No |
| Run an ongoing stream of related work | A project | The project's instructions, plus memory in the cloud | Yes, by default |

Parallel work uses your plan's limits faster. Your plan's limits are how much Claude work your subscription allows in a period of time. So does standing context. Connectors, skills and memory files load into every new session, and each side-chat question rereads the main conversation. Start with two sessions, and add more once you trust the results.

### Projects: one conversation that runs the work

A project is one chat, the **project conversation**, where Claude coordinates the work and hands it out. You find projects in the Code tab, at claude.ai/code and in the mobile app.[^projects]

**How work flows.** Suppose you send the project conversation one message. "Check this week's 15 supplier invoices, draft the payment summary for the owner, and update the supplier contact list." Claude starts three **threads** (separate sessions), one for each job, and each appears as a card under your message. Each thread has its own context. It shows its plan as it works, and it reports back to the project conversation when it finishes. A quick question gets an answer in place. A follow-up goes to the thread already working in that area. Suppose you ask for something unrelated in the middle of a thread. Then Claude may offer to start a new thread for it *(reported)*. That is a good habit anyway: one thread per job.[^app-walkthrough]

**Steering a thread.** Click a thread's card to read what it did, write to it directly, or stop it. A permission request waits inside its own thread. If you tell Claude in the project conversation to go ahead, that does not reach the thread. So answer the request in the thread.

**The project conversation stays clear.** It sees what threads report, not every step they take. It works from recent messages, recent threads and the project's memory, not its whole history. So it stays sharp for as long as the project runs. Ask it "where are we with everything?" It answers without you opening a single thread.

**Context goes in once.**

- **Project instructions** are the brief that every new thread starts from, up to 16,000 characters. They say what the project is for and how a thread checks its own work. They also say what to do when something is missing, and what needs your approval. You write them in **Project settings > Memory > Project instructions**.
- **Project memory** holds the requirements, decisions and pitfalls that Claude writes down as it works. When you correct one thread, tell Claude to remember the correction. Then every later cloud thread starts with it.
- **The Library** holds every file you added and every file the threads made, so nothing is lost across many conversations. It is a tab in the Overview pane, the panel beside the project conversation that tracks its threads. The Threads tab, the pane's list of threads, sorts them by state, such as Waiting on you, Working and Ready for review.

**Cloud by default, your computer when needed.** Cloud threads keep going after you close your laptop. You can check on them and steer them from your phone. Sometimes a job needs files or tools that are only on your computer. Then choose **Work locally** from the **+** menu (in the desktop app, **Work in a local folder**). Then allow the folder. That thread runs on your computer through Remote Control, and only while the computer is awake. It starts with the project's instructions but not its memory.

#### Before you start a project

Check four things before you start a project:

1. **Model and effort.** Project threads start on Opus, one of Claude's models ([Which model](which-model.md)), at high effort, not the usual medium default. That uses your plan's limits fastest. Open **Project settings > General** and check **Thread model** and **Thread effort** first.
2. **Connectors.** Cloud threads can use the connectors on your claude.ai account. The project conversation cannot use connectors itself. So when a job needs a connector, the project conversation gives that job to a thread.
3. **Skills and settings.** Cloud threads do not load the skills, plugins, connectors or settings on your own computer. Turn on the skills you need in your claude.ai account, and add plugins in **Project settings > Plugins**.
4. **Who can use it.** A project is yours alone. Only you send it work or see its threads, and it uses your own connectors.[^projects]

Use a project when a goal lasts longer than one session and keeps producing tasks, such as a weekly payment run with its follow-up questions. For one task that fits in one session, start a normal session. For work where every task needs your computer, use local sessions.

### Mods: changing the app itself

*For builders: look this up when a later chapter uses it.*

**Mods** are small programs that change how Claude Code looks and behaves. Describe the change, for example "make me a mod that shows my weekly usage above the message box". Claude writes the mod, installs it and reloads it in your session.[^mods] A mod can add a pane beside the conversation, or a band, a thin strip above the message box. It can show a notification or answer a permission request. It can also rewrite or block a **tool call**. A tool call is the moment Claude uses one of its tools, such as running a command or editing a file. It can also hide secrets from what a tool returns, before Claude reads it.[^mods],[^mods-docs]

Mods are not **sandboxed**. A sandboxed program runs in a closed space, where it cannot touch the rest of your computer. Mods have the same access to your computer as Claude Code itself. So install only mods you have read, or mods from a source you trust. In companies, administrators decide which plugin sources are allowed. Some computers have managed settings, which an administrator controls. On those computers, and on Team and Enterprise plans, a built-in safety mod loads first. It blocks the riskiest changes.[^mods]

### Briefing Claude 2.0

The new app needs less instruction than most people still give it. Anthropic gives three pieces of guidance for Opus 5.5.[^brief-claude]

- Start at medium effort, which is the default, and test other levels on your own work.
- State the condition for done at the start.
- Remove instructions that tell Claude to think carefully. The model decides how much to think, and the effort setting is the main control.

Panaversity's own research adds three habits. Give the whole task in one message when it fits one request. Split a large deliverable into stages, and check each stage before the next. And leave out lines such as "double-check everything", because a specific condition for done adds far more.

These fit the four parts of a brief from [One job, start to finish](../new-way-of-working/one-job.md).

End the brief with "Show what you checked and what the checks found, and list anything you could not verify". Then you review evidence, not a claim. When you are not sure what you want, ask Claude to interview you until it could write the brief itself. Then start a fresh session from that brief.

[^context]: Type `/context` for a full breakdown of what fills the context. As checked on November 20, 2026, the header of the Context card shows how full the context is as a percentage. An earlier layout of the Code tab showed a ring next to the model picker instead. Anthropic also documents `/compact`, which summarizes the conversation earlier to free up room. Use Claude Code Desktop, Anthropic.
[^checkpointing]: As checked on November 20, 2026, Anthropic documents `/rewind` for Claude Code. It opens a menu of the prompts you sent, and restores the conversation, the files, or both to the point you pick. Its desktop page does not mention the command. Checkpointing, Anthropic.
[^goal]: `/goal` works in the Code tab, in the terminal and through Remote Control. The evaluator is the small, fast model configured for your account, Haiku by default. Haiku is the name of Anthropic's small, fast model. Keep Claude working toward a goal (`/goal`), Anthropic.
[^cloud-claude]: As verified on November 20, 2026. A new cloud environment starts at Limited network access, with package managers allowed. Its three levels are None, Limited and Full. Anthropic says "Outbound internet traffic from an Anthropic-hosted session's VM passes through this proxy", its security proxy. Configure cloud environments, Anthropic.
[^anthropic-claude-code-cloud]: Use Claude Code in the cloud, Anthropic. As verified on November 20, 2026, Anthropic says a cloud session runs "in an isolated, Anthropic-managed VM", and that "git credentials and signing keys stay outside the sandbox". After a period of inactivity, the VM is reclaimed. Reopening the session restores the conversation but not background work that was still running.
[^nested]: Nested sessions are described in the video walkthroughs and in reporting on the desktop app. As checked on November 20, 2026, the desktop documentation describes the cards that suggest related work. Start runs the task in another session, which the sidebar lists under the current session. Start all starts each task on a card in its own session. It does not use the name nested sessions. It does not describe Claude starting them when you ask, or their reporting back to the main session.
[^claude-code-desktop]: Use Claude Code Desktop, Anthropic. As verified on November 20, 2026, the shortcut is `Cmd+;` on a Mac and `Ctrl+;` on Windows. Side chats are available in local, SSH and WSL sessions, and the app does not save them to disk.
[^coordinate]: Claude asks before archiving a session, except in Auto and Bypass permissions modes. Messages to a busy session are held until it finishes its current work. As checked on November 20, 2026, Anthropic's documentation does not describe pinning a session to the top of the sidebar, which the figure shows. Use Claude Code Desktop, Anthropic.
[^projects]: As verified on November 21, 2026. Projects work at claude.ai/code, in the Code tab of the desktop app and in the Claude mobile app, but not in the terminal or the code editor extensions. Anthropic says "A project is yours alone: you're the only one who sends it work or sees its threads, and it uses your own GitHub access and connectors." To run a thread on your computer, that computer needs Claude Code v2.1.280 or later. In the desktop app, it also needs **Use this computer from your phone and claude.ai** turned on under **Settings > Code** or **Settings > Claude Code**, with the folder added. The enforced limit is 500 new threads a day across your projects. Let Claude coordinate ongoing work with Projects, Anthropic.
[^app-walkthrough]: Video walkthrough of the new Claude app: projects, side chats, split view and artifacts. As checked on November 20, 2026, these features are not confirmed on a first-party page.
[^mods]: Mods became available in the Claude Code terminal and desktop app on October 1, 2026. They ship inside plugins. As verified on November 20, 2026, Anthropic says a mod can "Redact secrets from tool output before Claude reads it." The safety mod is called sec-default. Customize Claude Code with mods, Anthropic.
[^mods-docs]: As verified on November 20, 2026, Anthropic's documentation says a mod can draw "a pane beside the transcript or a band above the prompt", and that mods also work in the VS Code extension. Mods overview, Anthropic.
[^brief-claude]: As verified on November 20, 2026, Anthropic: "Start at `medium`, the default on Claude Opus 5.5," and "test several levels against your own evals." It also suggests stating "the completion condition up front". Prompting Claude Opus 5.5, Anthropic. The three habits are from Panaversity's research paper "Less Prompting, Better Briefs" (November 3, 2026). Osmani's article could not be opened.
[^scheduled-tasks]: As verified on November 20, 2026. A local task "only fires while the app is open and your computer is awake". A cloud task "runs even when your computer is off, and can also start on API calls or GitHub events". Turn on **Keep computer awake** in **Settings > Desktop app** or **Settings > This computer > System**. Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^remote-control]: As verified on November 20, 2026. Remote Control connects claude.ai/code or the Claude mobile app to a session running on your computer, and the session keeps running there. Anthropic documents forking only for sessions opened at claude.ai/code: choose **Fork** in the session's menu, or fork from an earlier message. Its desktop page does not mention forking. Continue local sessions from any device with Remote Control, Anthropic.



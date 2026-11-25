# Side by side (/claude-and-chatgpt-2/tour/side-by-side)

---
type: Document
title: "Side by side"
description: "A feature map of Claude, ChatGPT and OpenCode, what the apps share, where they differ, and what a comparison cannot tell you."
status: stable
order: 0.24
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Side by side" ]
last_verified: 2026-11-05
sources:
  - id: openai-merge
    title: "OpenAI is finally merging ChatGPT's Chat and Work tabs (TechCrunch, verified 2026-11-05)"
    resource: https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/
  - id: lds-chat-work-merge
    title: "OpenAI to merge ChatGPT Chat and Work tabs, pool Codex usage (Let's Data Science, verified 2026-11-05)"
    resource: https://letsdatascience.com/news/openai-to-merge-chatgpt-chat-and-work-tabs-pool-codex-usage-a4ede6bc
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*As verified on November 5, 2026.*

### Feature map

The open-source column describes OpenCode, which Part III covers beside Claude Code and Codex. "Not documented" means the feature was not found in the product's documentation, not that it is impossible.

| What you need | Claude | ChatGPT | Open source (OpenCode) |
| --- | --- | --- | --- |
| **Start a delegated job** | Ask in any conversation, and Claude decides when a request becomes a task | Choose Work with the toggle above the message box | Ask the coding agent |
| **Technical work and software** | The Code tab (Claude Code), useful beyond programming | Codex, for software or any job where you want the technical detail | OpenCode, in a terminal, desktop app or editor |
| **Choose the model** | Claude models | OpenAI models | Over 75 providers, including models run on your own computer |
| **Finished work** | Docs, Slides, Sheets, Design, Data, Whiteboard and Motion artifacts, plus files | Documents, spreadsheets, presentations, web apps, Slides and Sites | Files and code |
| **Work on it with your team** | Share Docs and Slides artifacts, which the team edits with Claude | Share pages and Slides in Space, and ask ChatGPT for edits from a comment | Through your own tools, such as GitHub |
| **Your apps and methods** | Connectors, skills and plugins | Plugins (named with "@"), skills and site tools | MCP servers and skills |
| **Where cloud work runs** | Its own virtual machine for each session, paused when idle and replaced with a fresh one after it is reclaimed | Virtual-machine-backed sandboxes that can be reused across tasks, with saved state | On your own computer, unless you host it elsewhere yourself |
| **Parallel work** | Nested sessions, a coordinating session, Projects with cloud threads | Parallel chats and projects, worktrees, Codex Cloud | Several agents in parallel in one project |
| **Change the app itself** | Mods | Not documented | Open source code you can change |
| **How freely it acts** | Auto or Manual for the whole conversation, with more modes in the Code tab | Ask for approval, Approve for me (auto-review), Full access or Custom | Configurable permissions |

Anthropic and OpenAI also document the five features below. OpenCode's documentation does not cover them.

| What you need | Claude | ChatGPT |
| --- | --- | --- |
| **Shareable live tools** | Artifacts that read your connected apps and can call Claude | Sites that update as their data changes |
| **Browser and your computer** | Built-in browser, Claude in Chrome, computer use | Built-in browser, cloud browser, ChatGPT in Chrome, computer use, Record & Replay |
| **Work while you are away** | Cloud tasks and sessions, Remote Control, keep-awake | Cloud Work, Codex Cloud, Codex Remote |
| **Work toward a finish line** | `/goal`, judged each turn by a separate model | Codex goal mode, bounded by a token budget |
| **Scheduled and triggered work** | Scheduled tasks, and cloud tasks that start on a GitHub event or a request from another program | Scheduled tasks, with triggers on Gmail, Slack, GitHub and plugin events |

The row on where cloud work runs is explained in plain words in [Behind the Screen](../behind-the-screen/claude-and-chatgpt-the-same-idea.md), and with the evidence in [The Architecture](../architecture/chatgpt-and-codex.md).

### What they now share

One shared piece matters later in the book: both apps connect to outside tools through MCP, so a connector you build in Part III can serve both, and OpenCode too.

### Where they differ

![How work begins in each app: two ways to start, and permissions govern the actions. In Claude, your request goes to one conversation, where Claude decides between a quick answer and a task that uses files, a browser, apps and the screen. The task leads to the permission setting, Auto or Manual, which applies to the conversation. In ChatGPT, you choose Chat for an answer or Work for files, a browser, apps and the screen, and Codex provides another workspace for hands-on tasks. Work leads to the permission mode: Ask for approval, Approve for me, Full access or Custom. A band says choosing a task does not grant unlimited authority, and permission settings control what the worker may do. A note says this is an illustrative overview and tools vary by app, plan and version.](img/how-work-begins.png)

**How permission is set** is the difference that matters most for an AI Worker (the last row of the first table). Before you delegate, read what each mode actually allows, not its name.

**Who decides that work begins** (the first row) is narrowing *(reported)*, so do not choose an app on it.[^openai-merge],[^lds-chat-work-merge]

**Where open source fits.** OpenCode is a coding agent, not a desktop app for everyday delegated work. Its strength is choice: it runs models from many providers, including models on your own computer, which matters where cost, data location or vendor independence comes first. For a non-developer starting out, the two vendor apps remain the easier place to begin.

### What the comparison cannot tell you

Neither vendor's documentation shows which app reasons better, makes fewer spreadsheet errors, finishes more web tasks, or keeps your data safer. An easier interface can reduce friction, but it cannot stand in for a correct result or a sound permission boundary. The only fair comparison is the one this book teaches you to run: the same job, the same inputs, the same "Done when" sentence and the same limits on each, repeated, with the results checked against the files each run left behind, never against the worker's account of its own work.

[^openai-merge]: On November 2, 2026, OpenAI told users it will merge the Chat and Work tabs into one experience, first for a small group of users, while Codex stays separate. When that reaches your account, ChatGPT starts work from a single conversation, as Claude does. OpenAI is finally merging ChatGPT's Chat and Work tabs, TechCrunch.
[^lds-chat-work-merge]: OpenAI to merge ChatGPT Chat and Work tabs, pool Codex usage, Let's Data Science.



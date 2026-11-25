# Projects: coordination on top of sessions (/claude-and-chatgpt-2/architecture/projects-coordination-on-top-of-sessions)

---
type: Document
title: "Projects: coordination on top of sessions"
description: "What Claude projects are for, how the coordinator and threads map onto the four layers, where project state lives, and why a project is still a personal tool."
status: stable
order: 0.445
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Projects" ]
last_verified: 2026-11-09
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic blog, September 17, 2026, verified 2026-11-09)"
    resource: https://claude.com/blog/projects-redesigned
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: cross-session
    title: "Message your other Claude Code sessions (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cross-session-messaging
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### What a project adds

The point of this page: a project does not change the architecture. It uses it. [Projects: one coordinator, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md) drew the picture: a coordinator, a borrowed desk for each thread, a shared binder and a shared shelf. This page adds Anthropic's own words and the evidence.

> [!NOTE]
> For builders: the rest of this page is detail you can skip on a first reading.

**[Vendor-documented]** "A project is one ongoing conversation where Claude coordinates a stream of related work for you." You say what needs doing. It starts a **thread** for each task.[^claude-projects] Each thread is a Claude Code session in its own sandbox. The project adds a **coordinator** that starts and tracks those sessions. It also adds **standing context**, the binder and the shelf, that every new session starts from. The Tour shows [how to use a project](../tour/claude-code-tab.md).

Projects are built mainly for code work, so Anthropic's words below use three terms from that work. A repository is often called a **repo**. A **branch** is a separate line of changes to it. To **commit and push** is to save changes and send them to the shared copy.

### Goals: what a project is for

**[Vendor-documented]** Anthropic names the problem: "Managing multiple sessions across a build used to require you to divide the work."[^projects-redesigned] A project has three goals. The first is to **move the coordination from you to Claude**: you "brief Claude in the project the way you'd brief a chief of staff."[^projects-redesigned] The other two are to **set context once** and to **keep the coordinator sharp**. The tables below show how.

### How it maps onto the four layers

The table shows where a project's parts sit among the section's [four layers](overview.md#what-the-architecture-is). The coordinator and the threads are all sessions, so they sit where the harness does.

| Layer | In a project | Evidence |
| --- | --- | --- |
| UI | The project conversation, thread cards and the **Overview** pane. They are at claude.ai/code, in the desktop Code tab and in the mobile app | **[Vendor-documented]** |
| Coordinator | "One long-running session where Claude acts as coordinator." It has its own model and effort setting. It has no connectors | **[Vendor-documented]** Where it runs is **[Unknown]** |
| Threads | Each cloud thread is "a Claude Code cloud session working on its own branch and copy of the repo." It runs in the project's cloud environment | **[Vendor-documented]** The same kind of microVM is **[Inferred]** |
| Model | Threads run in the cloud or on your machine, "with Anthropic as the model provider in both cases". Projects are not offered through other companies' clouds: Amazon Bedrock, Google Cloud's Agent Platform or Microsoft Foundry | **[Vendor-documented]** |

Sources: the Projects page and the launch post.[^claude-projects],[^projects-redesigned]

What a cloud thread loads when it starts is in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#projects-in-detail).

### Where project state lives

**[Vendor-documented]** A project keeps three kinds of standing context. You set each one once.[^claude-projects]

| Context | What it holds | Who reads it |
| --- | --- | --- |
| Project memory | Notes Claude keeps, stored as files with a `MEMORY.md` index | Every cloud thread, at start |
| Project instructions | Up to 16,000 characters of standing rules | Each new thread and the coordinator |
| Repositories, files and environment | Cloned repositories, files under `/mnt/project-files`, the cloud environment | Every cloud thread |

The **Library** tab holds the files you added and the files threads produced.

**[Vendor-documented]** The sandbox is still short-lived. "A cloud thread's sandbox pauses between turns and resumes when the thread continues." If it cannot resume, the thread starts "from a fresh clone, so uncommitted changes can be lost." Anthropic's advice is to "commit and push work in progress."[^claude-projects]

**[Inferred]** This is the rule from [The sandbox and its state](the-sandbox-and-its-state.md), built into the product.

![Projects: coordination on top of sessions. You send work to the project conversation, the coordinator, a long-running session with no connectors, which reports to the Overview pane. The coordinator starts three cloud threads, each a Claude Code cloud session with its own sandbox and branch, and a dashed fourth thread on your computer through Remote Control, only while it is awake. Every thread reads and writes the standing context outside every sandbox: instructions, memory, Library files and pushed branches. A local thread gets instructions, not memory.](img/projects-coordination-on-top-of-sessions.png)

### Threads on your computer

**[Vendor-documented]** A thread can run on your own computer through **Remote Control**, as [One desk can be on your own computer](../behind-the-screen/projects-one-team-lead-many-desks.md#one-desk-can-be-on-your-own-computer) explains. Anthropic's words are that it starts with the instructions "but not with its memory files loaded", and it "runs only while that computer is awake." It uses that machine's files, tools and permission rules.[^claude-projects] The steps to start one are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#projects-in-detail).

**[Inferred]** A project adds no new kind of machine. It multiplies the cloud workspace and adds a coordinator above it. Two parts differ from the [two VMs](the-sandbox-and-its-state.md#the-desktop-workspace-a-second-vm-on-your-computer) of a normal conversation.

| Project part | Where it runs | Compared with a normal conversation |
| --- | --- | --- |
| Local thread | Your computer, through Remote Control | A Claude Code session in one folder you allow. **A different route from the desktop workspace**, which a conversation uses through the desktop app |
| Instructions, memory, Library | Stored with the project, outside every VM | Replace staging and committing as the hand-off between workspaces |

### Scheduled work inside a project

**[Vendor-documented]** Scheduled work in a project runs as threads in that project, as [Scheduled tasks](scheduled-tasks.md) says.[^claude-projects],[^cloud-scheduled-tasks] A thread that stops at your plan's usage limit "waits and by default continues on its own when the limit resets."[^claude-projects]

### Authority in a project

**[Vendor-documented]** Threads run in auto mode when the model supports it. An approval prompt waits "inside that thread." Telling the coordinator to go ahead does not reach it. A rule such as "run at most two threads at a time" is saved to memory, but it is "not enforced settings." The enforced limits are your plan's limits and "500 new threads per day across your projects."[^claude-projects] **[Inferred]** Words in a project do not grant or limit authority. See [Security boundaries](security-boundaries.md).

### Sessions that message each other

**[Vendor-documented]** Claude Code sessions you run yourself can also send each other plain-text messages, such as a finding. A message is information, not your voice. "It can't approve anything." Permission prompts still fire in the receiving session.[^cross-session] How messages travel, and the settings that control them, are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#projects-in-detail).

The [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md#running-it-as-a-project) shows Brightline's payment run inside a project.

### Why a project is still a personal tool

**[Vendor-documented]** A project belongs to one person, as [Words are not locks](../behind-the-screen/projects-one-team-lead-many-desks.md#words-are-not-locks) says. Anthropic adds that there are "no organization-level controls for projects during the beta."[^claude-projects] For several people giving work to Claude together, Anthropic points to [Claude Tag](from-personal-worker-to-business-worker.md#claude-tag-a-team-worker-with-its-own-accounts).[^claude-projects]

**[Inferred]** So a project coordinates one person's AI Worker well. It is not the business layer from [From personal to business worker](from-personal-worker-to-business-worker.md). It has no worker identity, no business record you control and no enforced approval outside the thread.

**[Unknown]** ChatGPT projects hold files and context for Chat and Work, per the Tour. A documented coordinator with parallel threads was not found.

[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic. The usage-limit rule and the thread limit were checked again on November 16, 2026, after the page changed. The ownership rule was checked again on November 21, 2026. The steps for a thread on your computer, and the Claude Code v2.1.280 requirement, were checked on November 16, 2026.
[^projects-redesigned]: Projects redesigned: from folder to conversation, Anthropic, September 17, 2026.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
[^cross-session]: As verified on November 9, 2026. Message your other Claude Code sessions, Anthropic.



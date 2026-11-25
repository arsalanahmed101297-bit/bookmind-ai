# The two apps side by side (/claude-and-chatgpt-2/new-way-of-working/the-two-apps)

---
type: Document
title: "The two apps side by side"
description: "How Claude and ChatGPT compare on starting a job, on software and technical work and on how much they do without asking, and what you need to begin."
status: stable
order: 0.13
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "The two apps" ]
last_verified: 2026-11-05
sources:
  - id: plans
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects.md
  - id: projects-help
    title: "What are projects? (Claude Help Center, verified 2026-11-21)"
    resource: https://support.claude.com/en/articles/9517075-what-are-projects
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Both apps can now do this kind of work. The main difference is where you find each feature.

## Where do you find each feature?

| | Claude | ChatGPT |
| --- | --- | --- |
| **Starting a job** | Just ask. Claude decides when a request needs a whole job | Normal questions go to **Chat**. For a whole job, turn on **Work**, a switch above the message box |
| **Software and technical work** | The **Code** tab, which is Claude Code inside the app. It gives you more control and shows the technical detail. It is useful beyond programming | **Codex**, ChatGPT's coding agent, for the same work |
| **What you get back** | Documents, slides, designs and more, which you can edit and share | Documents, spreadsheets, presentations and simple websites |
| **When you close your laptop** | Cloud jobs keep going. Jobs that use your own files need the app open ([Where the work happens](where-the-work-happens.md#what-this-means-for-you)) | Cloud jobs can continue, but OpenAI's pages say less about it, so try it once before you rely on it |
| **How much it does without asking** | You choose: it asks before it uses a new tool or opens a new site, or it works on its own while automated safety checks run before most of its actions | You choose how much it may do, and which steps need your OK |

## What is a Claude project?

Claude also has **projects**, for big jobs with many parts. A project is one conversation. You describe the whole job once. Claude splits it into parts and runs each part as its own job, called a **thread**. Every thread starts from the same instructions. [The Code tab](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work) explains how it works.[^projects]

As of November 21, 2026, this kind of project is a beta (an early version still being tested) on the Pro, Max and Ultra plans.[^projects],[^projects-help] If yours looks like a folder of chats, you have the older kind, and [Lab 8](../../managing-ai-workers/context-memory-knowledge-and-state/lab.md) says where the steps differ.

## What you need to begin

You need the Claude desktop app and a free account.[^plans] Larger jobs, like the payment run, usually need a paid plan, and the book says when one becomes worth it.

Open-source AI tools, whose code anyone can read and change, such as OpenCode, are a third option. You can run them on your own computer. Part III covers them.

[^plans]: As verified on November 5, 2026, Anthropic was bringing the single conversation that turns requests into tasks to Pro, Max and Ultra plans first, with Team in beta and Enterprise through an owner setting. A free account may not have it yet. [Set up the apps](set-up-the-apps.md#which-plan-has-what) shows how to start a job if yours does not. Claude Cowork and chat are one Claude, Anthropic.
[^projects]: As verified on November 21, 2026, Anthropic says you hand Claude related tasks in one conversation. Claude runs them as threads that share the project's instructions and memory. Anthropic says projects "are in public beta on Pro, Max, and Ultra plans and rolling out gradually", and "aren't offered on Team or Enterprise plans yet." Let Claude coordinate ongoing work with Projects, Anthropic.
[^projects-help]: As verified on November 21, 2026, Anthropic says a new version of projects is in beta, "rolling out in stages starting with Claude Code", and "chat, Cowork, Team, and Enterprise will follow." What are projects?, Anthropic.



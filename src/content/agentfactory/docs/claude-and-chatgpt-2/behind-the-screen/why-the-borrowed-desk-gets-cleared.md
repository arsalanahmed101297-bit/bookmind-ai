# Why the borrowed desk gets cleared (/claude-and-chatgpt-2/behind-the-screen/why-the-borrowed-desk-gets-cleared)

---
type: Document
title: "Why the borrowed desk gets cleared"
description: "Why Claude and ChatGPT clear the borrowed desk, what survives a cleanup and what is lost, and the rule that follows: keep important things somewhere that lasts."
status: stable
order: 0.32
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "The borrowed desk" ]
last_verified: 2026-11-09
sources:
  - id: anthropic-claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web.md
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-16)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: claude-memory
    title: "Use Claude's chat search and memory to build on previous context (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/11817273
  - id: second-desk
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-16)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: account-connectors
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

[Where the work happens](../new-way-of-working/where-the-work-happens.md) showed that cloud work runs on a borrowed desk, and that anything left on it is gone when the work ends.

In Claude Code's cloud sessions, a short break only puts the desk to sleep, with your files still on it. If you stay away longer, the desk is cleared: Anthropic takes it back, and you get a fresh one when you return.[^anthropic-claude-code-cloud],[^cloud-environments] ChatGPT works differently. See [Claude and ChatGPT: the same idea](claude-and-chatgpt-the-same-idea.md).

## Why is the desk cleared?

The likely reasons, in this book's view:

- **Cost.** Keeping a computer running for every quiet session would waste money and power.
- **Safety.** A cleared desk carries nothing over from one piece of work to the next.

## What survives, and what is lost?

![What survives when the desk is cleared: clearing the desk removes what was left on it, and saved things stay. Left, a panel for the borrowed desk, cleared, lists three things marked with an x: programs you installed, programs that were still running, and files kept only on the desk. Its note says these are gone after a quiet period. Right, a panel for things kept safe outside the desk lists four highlighted items: your conversation (the filing cabinet), files the AI gave you, files saved to Drive or GitHub, and your memory and connected apps. Its note says these are still there when you come back. At the foot: the desk gets cleared, so keep important things somewhere that lasts.](img/what-survives-when-the-desk-is-cleared.png)

Your memory and your connected apps also stay. They belong to your Claude account, not to the desk.[^claude-memory],[^account-connectors]

## A second desk on your own computer

On some plans Claude can also use a desk on **your** computer: a small virtual machine that the desktop app runs ([Where the work happens](../new-way-of-working/where-the-work-happens.md#where-claudes-work-runs-and-how-it-reaches-your-folders) says when).[^second-desk]

The desk on your computer works in your real folders, so its changes there are not cleared. It has a scratch drawer too, outside your folders. That drawer is cleared with the session, like the borrowed desk. So keep important things somewhere that lasts: a file you download, Google Drive, or GitHub (an online folder for code). This is why [the Panaversity team](../new-way-of-working/how-the-panaversity-team-works.md) asks for finished work as one zip file to download.


[^anthropic-claude-code-cloud]: As verified on November 9, 2026, Anthropic says cloud sessions "stop after a period of inactivity and the session's VM is reclaimed". Reopening the session provides a fresh VM. The conversation history is restored, but work that was still running is not. Use Claude Code in the cloud, Anthropic.
[^cloud-environments]: As verified on November 16, 2026, Anthropic says "after a few minutes without activity, a session's VM pauses with its files saved", and that a paused VM can later be reclaimed. Configure cloud environments, Anthropic.
[^claude-memory]: As verified on November 9, 2026, Anthropic says "Claude can also remember context from your chats and carry it into new conversations and Cowork tasks", and you review and manage memory in your Settings. Use Claude's chat search and memory to build on previous context, Anthropic.
[^second-desk]: As verified on November 16, 2026, Anthropic says that on your computer "code execution runs in an isolated virtual machine (VM)", that "local file access is limited to folders the member has connected on the desktop", and that "if the desktop app is offline, a session in the cloud can't reach the device". The courier's refusal to overwrite an edited file was observed on November 16, 2026. Claude Cowork architecture overview, Anthropic.
[^account-connectors]: As verified on November 9, 2026, Anthropic describes "the connectors on your claude.ai account", which you connect once at claude.ai/customize/connectors. Let Claude coordinate ongoing work with Projects, Anthropic.



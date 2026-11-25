# ChatGPT and Codex (/claude-and-chatgpt-2/architecture/chatgpt-and-codex)

---
type: Document
title: "ChatGPT and Codex"
description: "How ChatGPT, Work and Codex compare with Claude. It covers the Codex harness, a side-by-side table, and what a reported ChatGPT inspection did and did not show."
status: stable
order: 0.48
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "ChatGPT and Codex" ]
last_verified: 2026-11-20
sources:
  - id: cowork-surfaces
    title: "Use Claude Cowork on web, desktop, and mobile (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: support-one-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/routines
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: codex-harness
    title: "Unlocking the Codex harness: how we built the App Server (OpenAI, February 4, 2026, verified 2026-11-20)"
    resource: https://openai.com/index/unlocking-the-codex-harness/
  - id: openai-sandboxing
    title: "Sandbox (ChatGPT Learn, OpenAI, no page date shown, verified 2026-11-20)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (ChatGPT Learn, OpenAI, no page date shown, verified 2026-11-20)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: chatgpt-inspection
    title: "ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity"
    resource: "Reported to Panaversity by ChatGPT, November 9, 2026"
  - id: openai-tasks
    title: "Scheduled tasks (ChatGPT Learn, OpenAI, no page date shown, verified 2026-11-20)"
    resource: https://learn.chatgpt.com/docs/automations
  - id: security-guide
    title: "Unified Claude Security Best Practices, v1.3.6 (Anthropic, November 7, 2026; verified 2026-11-20 against the v1.3.6 PDF)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

This page compares OpenAI's ChatGPT and Codex with Claude. Codex is OpenAI's coding agent. ChatGPT Work carries out tasks for you, either in the cloud or on your computer. OpenAI calls the cloud part "hosted task execution". The comparison turns on one part, the harness. Both stacks have the same shape. The difference is the evidence: for Claude, the harness was observed, and for Codex, OpenAI documents it.

> [!NOTE]
> For builders: the rest of this page is detail you can skip on a first reading.

### What is known, and how well

- **[Vendor-documented]** OpenAI documents the Codex harness and its **App Server**. The App Server is the program that lets an app talk to the harness. Codex Web runs that harness inside a container it provides for the task, the lighter kind of sandbox in the overview's [word list](overview.md#words-used-in-this-section).[^codex-harness]
- **[Vendor-documented]** ChatGPT Work's cloud tasks use the same harness. OpenAI says "Work Cloud uses the Codex task-execution harness." Work and Codex "share core execution and isolation mechanisms".[^work-cloud-security] But their tools, permissions and controls "aren't identical".
- **[Unknown]** Whether regular ChatGPT chat runs on the Codex harness.

Chat, Work and Codex are still separate experiences, even where they share parts underneath. The Tour describes the user's side of [where ChatGPT's work runs](../tour/chatgpt.md).

### ChatGPT's four tiers

ChatGPT can run work in four ways:

- regular chat, with its Python tool
- ChatGPT agent, an older feature that works on a virtual computer of its own
- Codex
- ChatGPT Work

For regular chat, OpenAI does not publish where the harness runs or what is kept. The four, side by side, are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#chatgpts-four-tiers).

### How the Codex harness is built

OpenAI's write-up describes a setup close to the Claude Code one in this section.[^codex-harness] A part called Codex core runs the agent loop and saves each conversation. In the cloud, a server sets up a container with your project's files and starts the harness inside it. So, in OpenAI's words, "work continues even if the tab disappears." On your own machine, Codex runs its commands inside a sandbox from the operating system, such as Apple's Seatbelt on a Mac.[^openai-sandboxing] The parts and their names are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#how-the-codex-harness-is-built).

### Side by side

The table compares a Claude cloud session with Codex. Where OpenAI also documents ChatGPT Work, the table says so. In it, (documented), (observed) and (inferred) are short for the full labels.

| Dimension | Claude (cloud session) | ChatGPT: Codex, with Work where documented |
| --- | --- | --- |
| Product experience | One conversation for chat and tasks, plus a Code tab for work with Claude Code, in one app (documented, on accounts with the new experience).[^support-one-claude] The chat examined ran on the cloud system behind those tasks (observed) | Chat, Work and Codex are separate experiences in one app |
| Agent loop (harness) | Claude Code (observed) | Codex core in the App Server (documented for Codex and for Work's cloud tasks) |
| Where the computing runs | A sandbox for each session (documented). The sandbox is a VM of its own (observed, and in Anthropic's security guide)[^security-guide] | A container for each task (documented for Codex Web). Work's cloud tasks run in sandboxes built on VMs. Work can keep the same sandbox for later tasks, or swap in a new one. So a task does not always get a fresh sandbox (documented)[^work-cloud-security] |
| Local option | Yes, in three cases, listed in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#where-sessions-run) (documented) | The desktop app, the CLI and code editors, each with an operating-system sandbox (documented) |
| Regular chat on the harness? | Yes, in the session examined (observed) | Unknown |
| Conversation persistence | Saved to your Claude account (documented)[^cowork-surfaces] | Thread history is kept on the server (documented for Codex) |
| Scheduled tasks: each run | Each run starts a new session, with one exception for projects, in [Scheduled tasks](scheduled-tasks.md#every-run-is-a-new-session) (documented)[^cloud-scheduled-tasks] | A standalone task starts a new chat for each run. A task set up inside a chat goes back to that same chat. On eligible plans, web and mobile tasks can also start when a Gmail, Slack, GitHub or plugin event happens (documented)[^openai-tasks] |
| Scheduled tasks: approvals | Cloud runs start in auto mode, and some actions still stop and wait for you, as [Scheduled tasks](scheduled-tasks.md#writing-tasks-that-run-without-you) says (documented)[^cloud-scheduled-tasks] | Runs happen with nobody watching, under your default sandbox settings (documented)[^openai-tasks] |
| Scheduled tasks on your computer | Desktop runs happen on your machine, while the app is open and the computer is awake (documented)[^desktop-scheduled-tasks] | In the desktop app, a task can run in a local project while the computer is on and the app is running. On the web, a task cannot work in a folder on your computer (documented)[^openai-tasks] |
| Use of your computer | Only through the desktop app, while it is online, with what [the sandbox page](the-sandbox-and-its-state.md#the-session-cloud-workspace) lists (documented)[^security-guide] | Work's cloud tasks can call approved tools on an "online, connected computer". If a cloud turn runs while that computer is offline, it cannot reach the computer's files or tools (documented)[^work-cloud-security] |

### The same layers, different evidence

The figure below shows both stacks in layers.

![Claude and Codex: same four layers, different evidence. Claude cloud session: app and backend saving sessions and files (documented), Claude Code in a Firecracker microVM in the session examined (observed), Claude model (inferred). Codex cloud task: app and backend storing thread history (documented), App Server in a worker's container (documented), OpenAI model (inferred). Work's cloud tasks use the Codex harness. Layers compared, not behavior.](img/claude-and-codex-same-layers.png)

### A reported inspection of a ChatGPT execution environment

**Source and limits.** On November 9, 2026, at our request, ChatGPT ran commands in its own Python and terminal tools, in a separate conversation. It reported the results. Nobody independently checked the raw output. So its findings carry the label Reported by ChatGPT.[^chatgpt-inspection]

- **[Reported by ChatGPT]** The environment ran Linux, with Python 3.13.5. Its other details are clues to whether it was a VM or a container. They are in [Appendix: reproducing the observations](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md#chatgpts-reported-environment-in-detail).
- **[Reported by ChatGPT]** A file written from the Python tool under `/mnt/data` could be read from a later terminal call. So working files carry over between tool calls. That does not show they survive a new conversation or a reset.
- **[Reported by ChatGPT]** No Codex App Server process was visible, and no model-serving process, which would run inference, either. ChatGPT looked in the list of running programs it is allowed to see.
- **[Unknown]** Where ChatGPT's conversation harness runs, and where its inference runs. It is also unknown when ChatGPT's environments are created and destroyed. Codex parts could still run somewhere ChatGPT cannot see.

So the comparison still depends partly on what the vendors publish.

The lesson holds for both vendors. Four jobs are separate: model inference, the agent loop, running tools, and keeping durable state. Durable state is information that is saved and lasts. Each platform can put these jobs behind different boundaries.

[^codex-harness]: As verified on November 20, 2026. Unlocking the Codex harness: how we built the App Server, OpenAI, February 4, 2026.
[^openai-sandboxing]: As verified on November 20, 2026. The page says Codex uses Seatbelt on macOS, bubblewrap on Linux and WSL2, and the native Windows sandbox in PowerShell. Sandbox, ChatGPT Learn, OpenAI.
[^chatgpt-inspection]: ChatGPT's inspection of its own Python and terminal environment, as reported to Panaversity. The raw output was not independently reviewed.
[^work-cloud-security]: As verified on November 20, 2026. The page says "Work Cloud uses the Codex task-execution harness", that Work and Codex "share core execution and isolation mechanisms", and that Work Cloud "manages its own execution environment". ChatGPT Work cloud security, OpenAI.
[^support-one-claude]: As verified on November 20, 2026. The page says chat and Cowork "are merged into a single conversation" in the new experience, which is rolling out to Pro, Max and Ultra, and on Team and Enterprise where it is turned on. Claude Cowork and chat are one Claude, Claude Help Center, updated November 19, 2026.
[^cowork-surfaces]: As verified on November 20, 2026. The page says sessions and files "are saved to your Claude account", and that on Pro, Max and Ultra, "Tasks you started on your computer before October 6 stay there so you can finish them." Use Claude Cowork on web, desktop, and mobile, Claude Help Center, updated November 19, 2026.
[^cloud-scheduled-tasks]: As verified on November 20, 2026. Automate work with scheduled tasks, Claude Code Docs.
[^desktop-scheduled-tasks]: As verified on November 20, 2026. Schedule recurring tasks in Claude Code Desktop, Claude Code Docs.
[^openai-tasks]: As verified on November 20, 2026. Scheduled tasks, ChatGPT Learn, OpenAI.
[^security-guide]: As verified on November 20, 2026, against the version 1.3.6 PDF. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators.



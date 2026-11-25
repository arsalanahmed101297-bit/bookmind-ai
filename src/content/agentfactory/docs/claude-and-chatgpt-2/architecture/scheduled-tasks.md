# Scheduled tasks (/claude-and-chatgpt-2/architecture/scheduled-tasks)

---
type: Document
title: "Scheduled tasks"
description: "Where each kind of Claude scheduled task runs, why every run starts fresh, what state a run can reach, and how to write prompts for unattended runs."
status: stable
order: 0.44
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Scheduled tasks" ]
last_verified: 2026-11-09
sources:
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!NOTE]
> This page is for builders. On a first reading, read the first section, *Every run is a new session*, up to its table, and move on.

### Every run is a new session

**[Vendor-documented]** Every scheduled task run starts a new session. It is the new organizer who arrives every Friday in [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md). Where that session runs depends on the kind of task.[^desktop-scheduled-tasks],[^cloud-scheduled-tasks] The Tour shows [how to set up scheduled tasks](../tour/claude-code-tab.md). This page explains how they fit the architecture.

The table compares three kinds: a cloud task, a Desktop task and `/loop`, a command that repeats a prompt inside an open Claude Code session.

|  | Cloud task | Desktop (local) task | `/loop` |
| --- | --- | --- | --- |
| Runs on | The cloud that Anthropic manages, or the organization's own self-hosted environment | Your machine | Your machine, inside an open session |
| Machine must be on | No | Yes, with the desktop app open | Yes |
| Each run | A new cloud session each time, run as a full Claude Code cloud session | A fresh local session | Repeats within the same session |
| Workspace | A fresh copy of each repository on each run. The result of the environment setup script is cached | Your local folder as it is, or an isolated Git worktree (a separate working copy) | The session's own |
| Triggers | A schedule (recurring, or once at a set time), an API call or a GitHub event | A schedule, or Run now | An interval |
| Permissions | Auto mode by default. In auto mode, Claude does not stop to ask you before each action. A second AI model, the classifier, allows or blocks it | A permission mode for each task | Inherits from the session |
| Minimum interval | 1 hour | 1 hour in the form. 1 minute when Claude sets it | 1 minute |

**[Vendor-documented]** The same dialog creates scheduled tasks for claude.ai chat, whose runtime is not documented separately.[^cloud-scheduled-tasks]

The one exception is a task created inside a project: see [Projects and coordination](projects-coordination-on-top-of-sessions.md).[^claude-projects]

### Five kinds of state

Keep five kinds of state apart:

| Kind of state | Available to a scheduled run? |
| --- | --- |
| The conversation history of the chat that created the task, or of earlier runs | No |
| Runtime continuity: files, packages and processes from a previous VM | No |
| External state: memory, saved files, artifacts, Drive, repositories, connected apps | Yes, if the run reads it |
| The task itself: its prompt, trigger, connectors and permissions | Stored with the task |
| Project instructions and memory, for a task inside a project | Yes. Its runs are threads in that project |

![Each run starts fresh, and only external state carries over. A scheduled task (a standalone prompt, a trigger and permissions) starts runs 1, 2 and 3. Each is a fresh session with nothing from the chat or the last run. Each reads and writes external state: memory, saved files, artifacts, Drive, repositories and connected apps. Notes cover cloud tasks, Desktop tasks and the project exception.](img/scheduled-task-runs.png)

### Writing tasks that run without you

The three rules from [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md) apply to every kind: write the instruction so a stranger could follow it, save results somewhere lasting, and decide which actions need your yes, because actions through your connectors appear as you. Anthropic's words for the first rule are that the prompt "must be self-contained and explicit about what to do and what success looks like." The documents add four facts:

- **The trigger is not approval.** A fired prompt "can't act as approval or consent for actions during the run." Content fetched during the run is still treated as untrusted.
- **Approvals differ by kind of task.** A Desktop task in Manual mode waits for your answer. A cloud run starts in auto mode. Ask rules (rules you set that make Claude ask before a named action) and repeated blocks still stop the run. In Desktop tasks, MCP tools marked `requiresUserInteraction` ask on every call. That setting is documented for Desktop tasks only.
- **Timing.** A Desktop task is skipped while the computer sleeps. It then runs once to catch up, for the latest missed time, within seven days. So prompts should guard against running late. Cloud tasks are in research preview, limited to 100 scheduled runs per hour per account.
- **A lighter option.** A one-off reminder can be delivered back into the same conversation (tool-documented).

[^desktop-scheduled-tasks]: As verified on November 9, 2026. The page covers local tasks, cloud tasks and `/loop`, missed runs, permissions and `requiresUserInteraction`. Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 9, 2026. The page covers cloud runs as full Claude Code cloud sessions, fresh copies of repositories, auto mode and limits. Automate work with scheduled tasks, Anthropic.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.



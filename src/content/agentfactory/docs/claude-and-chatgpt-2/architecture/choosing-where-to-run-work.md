# Choosing where to run work (/claude-and-chatgpt-2/architecture/choosing-where-to-run-work)

---
type: Document
title: "Choosing where to run work"
description: "Which way of running Claude fits which job, what machine each one uses, what survives, and five habits that always apply."
status: stable
order: 0.45
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Where to run work" ]
last_verified: 2026-11-09
sources:
  - id: network-access
    title: "Network access for shell commands (Anthropic, verified 2026-11-20)"
    resource: https://claude.com/docs/cowork/guide/network-access
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: claude-tag-security
    title: "Security and data handling, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: cowork-web
    title: "Use Claude Cowork on web, desktop, and mobile (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: cowork-team
    title: "Use Claude Cowork on Team and Enterprise plans (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13455879
  - id: duet-safety
    title: "Claude Duet Safety, Privacy, and Security (Anthropic, 23 October 2026, verified 2026-11-20)"
    resource: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### Match the job to the runtime

> [!NOTE]
> For builders: this page is detail you can skip on a first reading. Take one thing from it, the fifth habit at the end: enforce approval for payments, sends and deletes in the service that performs them.

Each way of running Claude decides two things: what kind of machine the work runs on, and what survives afterward.

| If you need | Use | Where it runs | What survives |
| --- | --- | --- | --- |
| Research, code or files, now, working back and forth with Claude | A Claude chat (a cloud session in the chat examined, not confirmed for every chat) | A cloud sandbox for the session. In the session examined, a VM of its own | The conversation and saved files. The VM's state lasts until the VM is reclaimed or the session ends |
| Work on files on your own computer | A chat linked to your computer, or Claude Code on your machine | On Pro, Max and Ultra, a cloud sandbox that reaches your connected folders through the open desktop app. On Team and Enterprise, the organization's setting can run it in a VM on your computer instead.[^cowork-team],[^cowork-web],[^network-access] Or your own machine | Your files |
| Recurring work while your computer is off | A cloud scheduled task | A new cloud session for each run, with a fresh copy of the repository and a cached setup script | Only external state |
| A stream of related tasks that outlasts one session | A [Claude project](projects-coordination-on-top-of-sessions.md)[^claude-projects] | Each task in its own thread, usually a new cloud session with its own sandbox. A coordinator session routes the work | Project memory, instructions, the Library and pushed branches. Uncommitted sandbox changes can be lost |
| Recurring work on local files | A local scheduled task in the Code tab (Claude Code Desktop) | Your machine, while the app is open and the computer is awake | Your local folder |
| Repeating a check during a session | `/loop` | Inside the open session | The session's state |
| Cloud sessions that must reach internal systems, or keep code on your own machines | A [self-hosted environment](cloud-environments-and-self-hosted-runners.md) (beta, Team and Enterprise)[^self-hosted] | Your runners (programs on your own hosts), inside your network. Anthropic still organizes the sessions and receives the conversation | Copies of the code, build results and files on your hosts. Anthropic stores the transcript |
| Team work handed to Claude in Slack | [Claude Tag](from-personal-worker-to-business-worker.md#claude-tag-a-team-worker-with-its-own-accounts) (beta, Team and Enterprise)[^claude-tag-security] | A sandbox for each Slack thread, in an organization-level environment | The thread, pushed branches and posted results. Files only in the sandbox are lost when the thread goes quiet |
| A bot, service or database that runs 24 hours a day, 7 days a week | Your own server or a managed service. Claude Code can work on it over SSH, a secure connection to another computer | That server | The data that is stored durably, according to the service's design for storage and backups |

The last row follows from one fact: an ordinary conversation, task or Code tab session keeps no cloud VM running for your account. Claude Duet, a research preview, runs continuously, but Anthropic does not say how long its machine lasts.[^duet-safety] Work that never stops needs a service you or a provider runs.

### Inside one conversation: which of the two VMs

A conversation linked to your computer can use [two VMs](the-sandbox-and-its-state.md#the-desktop-workspace-a-second-vm-on-your-computer): the cloud workspace and the desktop workspace. Name the one you want in your request.

[Where the work happens](../new-way-of-working/where-the-work-happens.md) shows which jobs went to which desk. The technical cases, such as reaching a host on your company's network, are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#the-desktop-workspaces-network-and-files).

### Five habits, whichever you choose

1. **Save anything that matters outside the VM,** as [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) says. A folder you connected on your own computer counts too.
2. **Expect a fresh VM after an idle gap.** Have your scripts install what they need. For cloud scheduled tasks, put the installs in the environment's setup script, whose result is cached.
3. **Write scheduled prompts as complete, standalone instructions.** The page on [scheduled tasks](scheduled-tasks.md) explains why.
4. **Keep long-lived secrets out of the sandbox.** Reach services through connectors, or use a narrow [network secret](cloud-environments-and-self-hosted-runners.md#variables-network-secrets-and-the-github-proxy). A key that can do something serious, such as paying, belongs in a connector with its own check.
5. **Enforce approval for consequential actions in the service that performs them.** Consequential actions are ones with real effects, such as payments, sends and deletes. An approval prompt in Claude is an extra layer. It is not the safeguard.

The fifth habit is the second signature from [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md). The [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md) shows it in a real design.

[^network-access]: As verified on November 16, 2026, Anthropic says registries and `github.com` are download-only unless the domain allowlist is set to all domains, and that to push or publish you should "use a terminal on your own computer". As verified on November 20, 2026, the page says "When a Cowork task runs on your computer, Claude runs its shell commands in a virtual machine (VM)." Network access for shell commands, Anthropic.
[^cowork-web]: As verified on November 20, 2026, Anthropic says "On October 6, 2026, new Cowork tasks on Pro, Max, and Ultra plans run in the cloud." Tasks already started on your computer "stay there, and you can keep working on them until they're done." Claude reaches only the folders you've connected, through the desktop app, "only while it's open". The page does not mention a virtual machine on your computer. Use Claude Cowork on web, desktop, and mobile, Anthropic.
[^cowork-team]: As verified on November 20, 2026, Anthropic says sessions on Team and Enterprise plans "can run in two places": on the user's computer, "with code in an isolated virtual machine", or in the cloud. The organization's "Run Cowork in the cloud" setting is on by default for Team plans and off by default for Enterprise plans. Use Claude Cowork on Team and Enterprise plans, Anthropic.
[^duet-safety]: As verified on November 20, 2026, Anthropic says Claude Duet "runs continuously even after you close the app", and that its browser "runs in its own dedicated virtual machine in the cloud". No Anthropic page says how long that machine or the files on it last. Claude Duet Safety, Privacy, and Security, Anthropic.
[^claude-projects]: As verified on November 9, 2026, and checked again on November 21, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
[^self-hosted]: As verified on November 9, 2026. Self-hosted environments, Anthropic.
[^claude-tag-security]: As verified on November 9, 2026. Security and data handling, Claude Tag docs, Anthropic.



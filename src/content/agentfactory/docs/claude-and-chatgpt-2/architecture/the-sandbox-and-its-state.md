# The sandbox and its state (/claude-and-chatgpt-2/architecture/the-sandbox-and-its-state)

---
type: Document
title: "The sandbox and its state"
description: "The cloud workspace each Claude session gets, the workspace on your own computer that some tasks use and how files cross between them, a Python demo, where chat history lives, and when the VM is paused, restored or replaced. Also how a stateless model becomes a stateful session."
status: stable
order: 0.43
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Sandbox and state" ]
last_verified: 2026-11-20
sources:
  - id: cowork-cloud
    title: "What to expect with Claude Cowork in the cloud (Claude Help Center, updated November 17, 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15811196-what-to-expect-with-claude-cowork-in-the-cloud
  - id: cowork-surfaces
    title: "Use Claude Cowork on web, desktop, and mobile (Claude Help Center, updated November 19, 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: code-tab
    title: "Desktop application (Claude Code Docs, no page date, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop?facet1=pdf
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026"
    resource: "../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md"
  - id: cloud-environments
    title: "Configure cloud environments (Claude Code Docs, no page date, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: claude-code-cloud
    title: "Use Claude Code in the cloud (Claude Code Docs, no page date, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web
  - id: network-access
    title: "Network access for shell commands (Claude Cowork docs, modified November 16, 2026, verified 2026-11-20)"
    resource: https://claude.com/docs/cowork/guide/network-access
  - id: cowork-team
    title: "Use Claude Cowork on Team and Enterprise plans (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13455879
  - id: cowork-safely
    title: "Use Claude Cowork safely (Claude Help Center, updated November 19, 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
  - id: desktop-inspection
    title: "Panaversity's inspection of a Claude conversation linked to a Mac with one connected folder, November 16, 2026"
    resource: "../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md"
  - id: security-guide
    title: "Unified Claude Security Best Practices, version 1.3.6 (Anthropic Trust Center, dated November 7, 2026, verified 2026-11-20)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

In a cloud session, Claude works at a desk of its own, a temporary computer on Anthropic's servers. The desk can be cleared after a break, and it is cleared when the session ends. So the lesson of this page is the one from [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md). Treat the VM as scratch space, a place for temporary work, and plan for a fresh one after any break. Keep anything that matters in a delivered file, an artifact, Drive or a **repository**, a folder of files kept with its full history.

> [!NOTE]
> For builders: the rest of this page is detail you can skip on a first reading.

### The session cloud workspace

This page compares two ways Claude runs cloud work: a task in a conversation (Cowork, in Anthropic's pages) and a Claude Code session.[^cowork-cloud]

**[Vendor-documented]** Each cloud session gets its own sandbox, which cannot reach your home or company network.[^cowork-safely] Technically, each sandbox is a Firecracker microVM.[^security-guide] The **host** is the real computer that runs the VMs. It blocks traffic from one VM to another.[^security-guide] This separation covers only the running computer. The saved session data sits on Anthropic's shared storage, the same systems that hold chat data.[^security-guide] **[Observed]** In the session examined, the sandbox was a Linux microVM with Python, Node, a shell and file tools.

The table below uses three words that need a short explanation. A **proxy** is a computer that passes traffic on, so it can check where the traffic goes. To **reclaim** a paused VM means Anthropic takes the computer back. An **MCP server** is a small program that gives Claude extra tools, and a local one runs on your own computer. MCP stands for Model Context Protocol.

| Aspect | How it works | Basis |
| --- | --- | --- |
| Scope | One sandbox for each session, not shared with other chats | Vendor-documented |
| Persistence | Files and installed packages last from one turn to the next within the session, until the VM is replaced. See [the idle rules below](#when-the-vm-is-paused-restored-or-replaced) | Observed |
| Lifetime | The running VM is destroyed when the session ends. Saved sandbox state and snapshots are kept apart from it for a time. What happens in idle time depends on the product: see [the idle rules below](#when-the-vm-is-paused-restored-or-replaced) | Vendor-documented[^security-guide],[^cloud-environments] |
| Network | Outbound traffic goes through a proxy, to allowed places only (an allowlist). Web search and web fetch (reading one web page) are separate tools, and this setting does not cover them | Vendor-documented and observed |
| Your computer | Reached only through the Claude desktop app, while it is online. Then Claude can use the folders you grant. Where a task runs on your computer, it can also use a shell in the desktop workspace, described below. It can also use the screen, the browser and local MCP servers | Vendor-documented[^security-guide],[^cowork-team] |

Which products and plans get a cloud sandbox is listed in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#where-sessions-run). The settings that shape a cloud sandbox are in [Cloud environments and self-hosted runners](cloud-environments-and-self-hosted-runners.md).

### The desktop workspace: a second VM on your computer

**[Vendor-documented]** When a task runs on your computer, Claude Desktop runs a Linux VM there. Anthropic documents this for local sessions on Team and Enterprise plans, and for tasks started on your computer before October 6, 2026.[^cowork-team],[^cowork-surfaces],[^network-access] On Pro, Max and Ultra plans, new tasks since then run in the cloud, as [Where the work happens](../new-way-of-working/where-the-work-happens.md) explains. Anthropic's page for those plans does not mention a VM on your computer.[^cowork-surfaces]

Where the VM runs, the operating system's **hypervisor** isolates it. A hypervisor is the part of the system that runs VMs and keeps them apart from your files and programs. The VM runs a signed image that Anthropic builds, and sessions cannot change it. Inside the VM, each session runs as its own user with limited rights, in its own sandbox. It reaches the network only through the places your administrators allow.[^security-guide]

The security guide, written for Enterprise administrators, says a cloud session reaches this VM only through the Claude desktop app on that computer, and only while the app is online. It says reading and editing files in your connected folders happens on your computer, outside the VM. It adds that if the VM cannot start, for example on a locked-down work laptop, Claude uses file operations only. Then it runs no scripts, and the work takes longer.[^security-guide]

**[Observed]** In the session examined, the desktop workspace was a separate Linux machine, with a different system and size from the cloud one. Each command started fresh, so only files carried over from one command to the next.[^desktop-inspection] The two machines are compared in [Appendix: reproducing the observations](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md#how-the-two-vms-differ-for-your-work).

**[Vendor-documented]** You set what the desktop workspace can reach in **Settings > Capabilities**. Unless you allow all domains, it can download from GitHub but cannot push to it. [Security boundaries](security-boundaries.md#the-controls-around-a-session) has the levels.[^network-access]

Deleting a file needs your explicit permission, except when Claude uses your screen through computer use, as [Where your work is saved](../build-something/where-your-work-is-saved.md) says.[^cowork-safely]

#### How files cross between the two

**[Observed]** The two VMs share no disk. Files cross only in the Stage and Commit steps that [Where the work happens](../new-way-of-working/where-the-work-happens.md) describes.[^desktop-inspection]

- **Stage (desktop to cloud)** copies a file into the cloud workspace.
- **Commit (cloud to desktop)** writes a result back into the connected folder.

Some jobs need only the desktop workspace, such as renaming files or editing a CSV in place. Then nothing is staged, and Claude edits the file where it sits. Other work goes to the cloud workspace: work that needs heavy tools, the web, or viewing an image or a PDF page.

**[Inferred]** Sessions on your computer share this one VM.[^security-guide] So "nothing shared between sessions" is a rule for cloud sandboxes. Do not assume it on your own computer.

### Demo: a Python program in the VM

**[Observed]** On November 8, 2026, a script named `hello_vm.py` was created, saved and run inside the session workspace.[^author-inspection] It printed a greeting, the Python version and a small sum. The [appendix](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md#the-python-demos-output) shows the output.

**[Observed]** Between writing the file and running it, the session was interrupted and resumed. The run had not happened. The file came back as a read-only copy from the conversation. **[Inferred]** The session was now most likely on a new VM, so anything installed or running on the old one was lost. This is the cleared desk of [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md), seen in a real session. The idle rules below explain why.

### Where chat history lives

**[Vendor-documented]** In the cloud, your sessions and files are saved to your Claude account.[^cowork-surfaces] **[Observed]** The harness held its own working copy of the conversation in the VM. **[Inferred]** The browser also holds only a copy, kept for display. The saved record is the one on the account, on the backend, reachable from any device. If the VM is replaced, the harness's copy is rebuilt from it. So the chat survived the replaced VM in the demo, because the backend copy is the one that counts. In local Claude Code, the transcript lives on your machine.

### When the VM is paused, restored or replaced

**[Vendor-documented]** The sandbox is destroyed when the session ends.[^security-guide] What happens while a session sits idle depends on the product. As read on November 20, 2026, Anthropic documents two different rules. It does not document one rule for both.

- For Claude Code cloud sessions, the rule is this. These include a Code tab session set to Cloud.[^code-tab] "After a few minutes without activity, a session's VM pauses with its files saved. Your next message restores the same VM and starts Claude Code again." Later, Anthropic may reclaim the paused VM. Then reopening the session gives you a fresh VM. Reclaiming also stops background work that was still running.[^cloud-environments],[^claude-code-cloud]
- For Cowork in the cloud, which includes the single conversation, the rule is different. After about 5 minutes of idle time, the VM is snapshotted, encrypted and torn down. A new message "restores the files into a fresh VM and restarts the session". Sandbox state and snapshots "expire 30 days after the session was created", and they cannot be exported.[^security-guide]

**[Inferred]** The chat examined most likely followed the second rule, the Cowork rule. Its harness reported a value that names Cowork, and two observations fit that rule.[^author-inspection] **[Unknown]** This page cannot prove it, and Anthropic does not say how long a paused Claude Code VM is kept. The full argument is in [Appendix: reproducing the observations](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md#which-idle-rule-the-examined-chat-followed).

Under either rule, a fresh VM keeps and loses what [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) lists.

The session examined adds three technical details:

- Files from the conversation come back as copies.
- Environment variables (named settings that programs on the VM read) and temporary files are lost.
- The harness's working copy of the conversation is lost too, and it is rebuilt from the backend.

A short break may only pause the VM. Even so, scripts should check for what they need and install it. [Projects](projects-coordination-on-top-of-sessions.md) build this habit into the product.

### Stateful sessions on a stateless model

The model is stateless, and the session around it is **stateful**, which means it remembers. The harness builds each call's context and keeps the transcript, files, packages and tool results between calls. When the context grows too large, the harness may **compact** it, which means it replaces older parts with a shorter summary. The session examined was set to compact on its own when the context was 80% full. **Prompt caching** lets the model process repeated context faster, but it is not memory.

![How long each layer keeps state. Each layer keeps state longer than the one above it. Relative lifetimes, not to scale, drawn as bars along an arrow labeled longer-lived. One model call: a tiny bar, nothing kept between calls. Harness and VM: a short bar, until the session ends or the VM is replaced. Backend conversation: a longer bar, saved to the account. Outside stores: the longest bar, highlighted, as long as you keep them. Design for this layer.](img/how-long-each-layer-keeps-state.png)

Developers can also build their own agents with the API, the way programs send requests to the model, or with the Agent SDK. Then their own code holds that state.

[^cowork-cloud]: As verified on November 20, 2026, Anthropic says "Claude Cowork can now run your tasks in the cloud" and describes "the new Claude experience, which combines chat and Cowork". What to expect with Claude Cowork in the cloud, Claude Help Center, updated November 17, 2026.
[^cowork-surfaces]: As verified on November 20, 2026. Anthropic says "your sessions and files are saved to your Claude account", and that tasks started on your computer before October 6 stay there. It says "On October 6, 2026, new Cowork tasks on Pro, Max, and Ultra plans run in the cloud." The page does not mention a virtual machine on your computer. Use Claude Cowork on web, desktop, and mobile, Claude Help Center, updated November 19, 2026.
[^code-tab]: Claude Code Docs, Desktop application, as verified on November 20, 2026. The page lists Local, Cloud, SSH and WSL, and says Cloud "runs on Anthropic-managed infrastructure by default".
[^network-access]: As verified on November 20, 2026, Anthropic says "When a Cowork task runs on your computer, Claude runs its shell commands in a virtual machine (VM)." It also says "These limits aren't a security boundary. Don't rely on them alone to keep data inside the VM." Network access for shell commands, Anthropic.
[^cowork-safely]: As verified on November 20, 2026, Anthropic says Cowork "requires your explicit permission before permanently deleting any files". The same page says the cloud environment "is created for that one session" and "is removed when the session ends". Use Claude Cowork safely, Claude Help Center, updated November 19, 2026.
[^cowork-team]: As verified on November 20, 2026, Anthropic says sessions on Team and Enterprise plans "can run in two places": on the user's computer, "with code in an isolated virtual machine", or in the cloud. The organization's "Run Cowork in the cloud" setting is on by default for Team plans and off by default for Enterprise plans. Use Claude Cowork on Team and Enterprise plans, Anthropic.
[^desktop-inspection]: Panaversity's inspection of a Claude conversation linked to a Mac with one connected folder, November 16, 2026. The commands are in the appendix. Anthropic does not publish machine sizes, folder paths, tool names or staging limits, and they can change without notice.
[^security-guide]: As verified on November 20, 2026. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators. Its idle rule is in the part that covers cloud sessions for both Cowork in the cloud and the combined chat and Cowork experience.
[^author-inspection]: Panaversity's inspection of a cloud Claude session. The method is in the appendix.
[^cloud-environments]: As verified on November 20, 2026. The page quotes the idle pause and restore. Configure cloud environments, Claude Code Docs.
[^claude-code-cloud]: As verified on November 20, 2026. "Cloud sessions stop after a period of inactivity and the session's VM is reclaimed." Use Claude Code in the cloud, Claude Code Docs.



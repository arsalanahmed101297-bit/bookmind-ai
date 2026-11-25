# How a request flows (/claude-and-chatgpt-2/architecture/how-a-request-flows)

---
type: Document
title: "How a request flows"
description: "The path of one request in a cloud Claude session, from the app to the model, and the evidence that the organizer program, Claude Code, ran inside the session's own virtual machine."
status: stable
order: 0.41
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Request flow" ]
last_verified: 2026-11-20
sources:
  - id: code-tab
    title: "Desktop application (Claude Code Docs, no page date, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop?facet1=pdf
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026"
    resource: "../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md"
  - id: security-guide
    title: "Unified Claude Security Best Practices, v1.3.6 (Anthropic Trust Center, dated 2026-11-07, verified 2026-11-20)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!NOTE]
> This page is for builders. On a first reading, read the first section, *The path of one request*, and move on.

### The path of one request

The point of this page: your message goes from the app to Anthropic's servers. There, the organizer program (the harness) passes it to the model, and runs whatever the model asks for on a borrowed computer.

The backend signs you in, sends your message to the right place and keeps your chat history. At each step, the harness gives the model its context. In the session we examined, the harness ran inside a VM.

![How one request flows in a cloud Claude session. Two-way arrows link four parts. They are the browser or app, the Anthropic backend (sign-in, routing, chat history), the harness (Claude Code, in the cloud VM) and the stateless model. From the harness, tool calls go to the VM, Anthropic services, connected apps and your computer. Notes say the harness ran inside the VM in the session examined, and the two roles can also run apart.](img/how-one-request-flows.png)

**[Vendor-documented]** The **agent** is the harness and the model working together. In cloud sessions, the agent runs in Anthropic's cloud, and so does the code it runs.[^security-guide] **[Observed]** The harness is Claude Code. It runs in the sandbox. The sandbox is set up to send model requests to Anthropic's **endpoint**, the web address that receives requests for the model.

**[Inferred]** The backend sits between the UI and the harness. The harness calls the model at each step. The harness runs the tool calls it gets back. Then it calls the model again, until the model gives a final reply. The **agent loop** is this repeating cycle of calls.

### Evidence: Claude Code runs in the VM

**[Observed]** On November 9, 2026, we looked at the programs running in one session and at its settings. Its harness is Claude Code. This is one session. It shows the setup exists, not that every plan or app uses it. The [appendix](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md) gives the commands.[^author-inspection]

Four findings matter here, in plain words:

- **Claude Code was a running program in the VM.** Every command typed into the VM's **shell**, the place where commands are typed, was started by it. So the harness itself sat in the sandbox.
- **The VM was a Firecracker microVM, a small VM that starts very quickly.** PID 1, the first program the VM started, was Firecracker's start-up program. Anthropic now documents this too.[^security-guide]
- **Model requests were sent to `api.anthropic.com`.** This shows where requests are sent. It does not show which computers answer them, so it does not prove where the model runs.
- **The VM had been running for only about 19 minutes.** The same chat had also been used the day before.[^author-inspection] So a short uptime suggests a new VM since then. But Anthropic can save an idle VM and start it again later, and a VM started again may not count the time it was stopped.[^security-guide] So the uptime is not proof. The idle rules are in [The sandbox and its state](the-sandbox-and-its-state.md#when-the-vm-is-paused-restored-or-replaced).

Every row of evidence, with its raw values and the terms behind it, is in [Appendix: reproducing the observations](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md#the-november-9-evidence-row-by-row).

### Chat or a task?

**Agentic** work means the AI takes many steps on its own, such as running tools, instead of writing one reply. A task in a conversation is agentic work, and Anthropic's pages still call it **Cowork**.[^code-tab] It can run on your computer or in Anthropic's cloud.[^security-guide]

**[Observed]** The session was started from a claude.ai chat (`SESSION_ORIGIN=claude_ai_chat`). But its harness reports that it was started as `remote_cowork`. **[Inferred]** This chat ran on the part of Claude that runs longer tasks in the cloud. Anthropic's documents call that part Cowork in the cloud. That is why Anthropic's description of Cowork in the cloud applies here.

**[Vendor-documented]** Anthropic's security guide now describes this. The guide calls the single conversation, where chat and tasks are one, Unified Claude. In it, a chat gets a VM when a task needs many steps, and gives the VM up when it does not. Anthropic's service makes that decision. The user does nothing, and the model cannot start it.[^security-guide] Who has the combined experience yet, and the guide's own words, are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#chat-cowork-and-the-combined-experience).

[^author-inspection]: Panaversity's inspection of one cloud Claude session: a test run on November 8, 2026, and a look at its programs and settings on November 9, 2026. The method is in the appendix.
[^code-tab]: Claude Code Docs, Desktop application, Anthropic. As verified on November 20, 2026.
[^security-guide]: As verified on November 20, 2026. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators.



# Security boundaries (/claude-and-chatgpt-2/architecture/security-boundaries)

---
type: Document
title: "Security boundaries"
description: "Why a sandbox contains damage but does not decide what an agent may do. Also the controls around each session, and the risks isolation does not remove."
status: stable
order: 0.46
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Security boundaries" ]
last_verified: 2026-11-09
sources:
  - id: network-access
    title: "Network access for shell commands (Anthropic, verified 2026-11-16)"
    resource: https://claude.com/docs/cowork/guide/network-access
  - id: security-guide
    title: "Unified Claude Security Best Practices, v1.3.6 (Anthropic, November 7, 2026; verified 2026-11-16)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### Containment is not authority

This is the locked office and the second signature from [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md), in engineers' words. A VM is a **containment boundary**: it limits where an action can run and what it can reach. Permissions, connector scopes and approvals are the **authority boundary**: they decide whether an action is allowed. A connector's **scope** is the list of things it is allowed to do.

![An action needs authority, not just containment, to take effect. Untrusted content can carry injected instructions into the model's tool call. The call passes containment (the VM, the egress proxy, no connector tokens), which limits reach but grants no permission. Then authority (permissions, scopes, approvals) decides. Allowed calls cause an effect. Others stop or ask a person.](img/containment-is-not-authority.png)

Anthropic describes its own cloud controls as containment too. They "are designed to contain a prompt-injected or otherwise compromised agent".[^security-guide]

The same split applies inside a project. Instructions you give a project coordinator are saved but not enforced, and each thread asks for approval only inside itself. See [Authority in a project](projects-coordination-on-top-of-sessions.md#authority-in-a-project).

> [!NOTE]
> For builders: the rest of this page is detail you can skip on a first reading.

### The controls around a session

Each row starts with what the control does for you, in plain words.

| Control | What it does | Basis |
| --- | --- | --- |
| Egress proxy | **A gatekeeper checks everything that leaves the VM.** All outbound traffic goes through Anthropic's egress proxy, which enforces the allowlist. Addresses that point back into the machine or the network around it are blocked. For a task in a conversation on an Enterprise plan, network access is off by default. Claude Code environments set their own level, in [Cloud environments](cloud-environments-and-self-hosted-runners.md#network-access) | Vendor-documented.[^security-guide] The proxy and the allowlist were observed |
| Credentials | **The keys to your apps stay outside the VM.** Connector authorization tokens never enter the sandbox. Anthropic's connector proxy adds them. The VM holds two short-lived tokens, one for model requests and one for file upload. Code in the VM can read them, but they cannot call connectors. They expire within hours | Vendor-documented.[^security-guide] A token limited to the session was observed in the environment |
| Your computer | **Claude reaches your computer only through the app, and only the folders you grant.** It is reached only through the desktop app, while it is online, over an outbound connection, with what [the sandbox page](the-sandbox-and-its-state.md#the-session-cloud-workspace) lists. A folder is read-only, read-write without delete (the default), or read-write with delete if you allow it for that session | Vendor-documented[^security-guide] |
| Network for the desktop workspace | **You choose what the VM on your computer can reach.** It is set in **Settings > Capabilities**, or by an admin for the organization. Egress off reaches only Anthropic hosts. **Package managers only** adds package registries (the sites that programs are downloaded from) and `github.com`, download-only. Sending code out, such as pushing or publishing it, is blocked. **All domains** reaches any host. Anthropic says these limits "aren't a security boundary", so do not rely on them alone to keep data in the VM | Vendor-documented[^network-access] |
| Approvals | **Claude asks before it acts outside the VM.** Shell and file work inside the cloud VM does not ask for approval. Claude asks before a connector call with no standing approval, and before using a linked computer. In auto mode, the classifier (a second AI model) decides on those connector calls instead, and if the classifier fails, the call is blocked. Scheduled tasks have their own approval rules, in [Scheduled tasks](scheduled-tasks.md#writing-tasks-that-run-without-you) | Vendor-documented[^security-guide] |

Each cloud session also works alone, in [a sandbox of its own](the-sandbox-and-its-state.md#the-session-cloud-workspace). Network secrets and the GitHub proxy, which keep an API key and your GitHub sign-in outside the VM, are in [Cloud environments](cloud-environments-and-self-hosted-runners.md#variables-network-secrets-and-the-github-proxy).

The Tour describes the allowlist and the keys from the user's side, in [Where the work actually runs](../tour/claude-code-tab.md#where-the-work-actually-runs).

### The controls an organization adds

In an Enterprise organization, administrators set further controls around every session. A learner does not need to configure them, but should know they exist.[^security-guide]

They include a record of session content for the company's security tools and a filter on every prompt and tool call. They also include rules on where data is stored. The full list is in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#the-controls-an-organization-adds).

### Risks that isolation alone does not remove

- **Prompt injection.** Web pages, files, emails and tool results can contain instructions that someone hid there. The agent can act on them, within whatever permissions it has. Treat that content as data, not as instructions. Require approval for payments, sends and deletes.
- **Secrets in the workspace.** Any code in the sandbox can read its files and environment variables, so do not paste a long-lived key into a session. Use a connector, whose token stays outside the sandbox.
- **Local access widens the reach.** Linking a computer extends the agent into everything that computer offers. Grant the smallest set of folders the task needs.
- **Isolation is not perfect.** Sandboxes reduce the impact of an attack, but they do not rule out escape bugs, flaws that let code break out of the sandbox. So design as if a session could be compromised. Use **least privilege** (give only the access a job needs), short-lived tokens and audit logs, which record who did what.

[^network-access]: As verified on November 16, 2026. Network access for shell commands, Anthropic.
[^security-guide]: As verified on November 21, 2026, against the version 1.3.6 PDF. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators.



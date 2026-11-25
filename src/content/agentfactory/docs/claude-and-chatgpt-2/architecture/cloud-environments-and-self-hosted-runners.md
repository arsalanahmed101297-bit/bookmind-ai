# Cloud environments and self-hosted runners (/claude-and-chatgpt-2/architecture/cloud-environments-and-self-hosted-runners)

---
type: Document
title: "Cloud environments and self-hosted runners"
description: "The settings layer of the cloud sandbox: network access, setup scripts, variables, network secrets and the GitHub proxy. Also how a self-hosted environment runs the same session in your network."
status: stable
order: 0.435
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Cloud environments" ]
last_verified: 2026-11-09
sources:
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!NOTE]
> This page is for builders. On a first reading, read the verdict in its first paragraph and move on.

**[Inferred]** The verdict: the settings on this page change where the borrowed desk is and what it can reach. They do not decide whether an action is allowed.

[Setting up the desk](../behind-the-screen/setting-up-the-desk-keys-buildings-and-badges.md) told this page's story in plain words. A network secret is its key held at reception, and a self-hosted environment is a desk in your own building. This page gives the detail.

### The sandbox has a settings layer

**[Vendor-documented]** Each Claude Code cloud session "runs in a cloud environment." An **environment** is a named set of sandbox settings: network access, environment variables (named settings that programs in the VM read), network secrets and a setup script. The same environments apply to every way of starting one, cloud scheduled tasks included.[^cloud-environments] The full list is in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#where-environments-apply).

**[Unknown]** The session examined here was started from a claude.ai chat. The environment page does not say whether chat sessions, or tasks in a conversation, use these settings.

The environment page also says what happens to an idle VM. [The sandbox and its state](the-sandbox-and-its-state.md#when-the-vm-is-paused-restored-or-replaced) quotes it and compares it with what was observed.

### Network access

**[Vendor-documented]** Each Claude Code environment has one network access level for outbound connections.[^cloud-environments]

| Level | What sessions can reach |
| --- | --- |
| None | Nothing through the session's network |
| Limited (the default) | The default allowlist while **Allow package managers** is checked, plus any domains you list. The default allowlist covers package registries (the sites that programs are downloaded from), GitHub and cloud SDKs (the kits for using cloud services) |
| Full | Any domain |

**[Vendor-documented]** Four paths skip the allowlist at every level:[^cloud-environments]

- GitHub, through its own proxy.
- The MCP connectors you turn on.
- The hosts listed on the environment's network secrets.
- The Anthropic API, for Claude Code's own requests.

### Setup scripts and the environment cache

**[Vendor-documented]** A **setup script** installs tools before Claude Code starts. If it finishes in about five minutes, Anthropic takes a snapshot. Later sessions start from it. It keeps files the script wrote, not programs that were running. It is rebuilt when you change the script or the allowed hosts, and after about seven days.[^cloud-environments]

**[Inferred]** So a new session still gets a new desk. But the desk starts from a known picture. Speed comes from the cache, not from a VM that stays on.

### Variables, network secrets and the GitHub proxy

**[Vendor-documented]** Environment variables are not private. "Anyone who uses the environment can read the values." For a key, use a **network secret**. Anthropic's agent proxy "adds the key to requests for the hosts you list, after each request leaves the session's VM, so the key itself stays outside the VM." The GitHub proxy works the same way. It "keeps your real GitHub credentials outside the session's VM."[^cloud-environments] Who may add a network secret depends on the plan. See [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#network-secrets).

**[Inferred]** A network secret protects the key, not its use. A tricked agent cannot copy the key out. But it can still send requests to the listed hosts, with the key attached. So use the narrowest key the job needs, such as a read-only key.

**[Vendor-documented]** On Team and Enterprise plans, an Owner can create environments shared with every member. Do not put secrets in a shared environment's variables, "because every member's sessions read them."[^cloud-environments]

### Self-hosted environments: the same session in your network

**[Vendor-documented]** A **self-hosted environment** "executes Claude Code cloud sessions on infrastructure your organization operates." People start sessions the same way. Only the place changes. A **runner** is a program on your own hosts. It claims each session from Anthropic's queue, copies the repository and runs Claude Code. "Anthropic never connects into your network." Every connection goes out. [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#how-a-runner-handles-a-session) shows how runners claim sessions.[^self-hosted]

| What stays on your machines | What still goes to Anthropic |
| --- | --- |
| Repository checkouts (working copies), build outputs (the files a build produces), secrets, and files the session creates or changes | The conversation: prompts, responses and tool results. Anthropic stores the transcript so you can resume elsewhere |
| Your runner image and its tools | The control plane, the Anthropic service that organizes sessions: the queue, the starting and tracking of sessions, and the claude.ai interface |

**Basis:** vendor-documented.[^self-hosted]

**[Vendor-documented]** Model requests go to the Anthropic API by default. A runner can send them instead to another company's cloud that offers Claude: Amazon Bedrock or Google Cloud's Agent Platform. But "session content goes to Anthropic in both cases." Anthropic says most teams are better served by its hosted environments. Its plans and limits are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#self-hosted-plans-and-limits).[^self-hosted],[^cloud-environments]

**[Vendor-documented]** Each self-hosted session carries a signed token that your services can check. It proves which session and environment it belongs to. It shows whether a person or your organization's service identity started it. It does not prove which process presents it.[^self-hosted-identity] **[Inferred]** So it identifies a session, not a worker with narrow scopes. The [business layer](from-personal-worker-to-business-worker.md) still adds that. The token's fields are in [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#the-self-hosted-session-token).

### How it maps onto the four layers

The section's [four layers](overview.md#what-the-architecture-is) stay the same. Only the third one moves.

![Two places a cloud session can run. Anthropic-hosted: Claude Code runs in a VM shaped by the environment. The agent proxy adds network secrets outside the VM, and the GitHub proxy swaps in your real token. Self-hosted: a runner in your network claims the session and runs Claude Code, which reaches internal services and your git host. Traffic to Anthropic is outbound only, and model requests can go to Bedrock or Agent Platform instead. A callout says environments change where a session runs and what it reaches, not what it may do.](img/two-places-a-cloud-session-can-run.png)

A self-hosted runner can even widen the reach. See [Security boundaries](security-boundaries.md).

[^cloud-environments]: As verified on November 9, 2026. The network access levels were checked again on November 13, 2026, after the page changed. Configure cloud environments, Anthropic.
[^self-hosted]: As verified on November 9, 2026. Self-hosted environments were in public beta on Team and Enterprise plans and off by default. Self-hosted environments, Anthropic.
[^self-hosted-identity]: As verified on November 9, 2026. Verify session identity in self-hosted environments, Anthropic.



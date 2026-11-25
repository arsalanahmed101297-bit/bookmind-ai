# What comes next (/claude-and-chatgpt-2/architecture/what-comes-next)

---
type: Document
title: "What comes next"
description: "Predictions, not announcements. What could be built on today's features, sorted into three evidence levels, and the one rule that does not change."
status: stable
order: 0.4915
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "What comes next" ]
last_verified: 2026-11-09
sources:
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic, September 17, 2026)"
    resource: https://claude.com/blog/projects-redesigned
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
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

*Predictions built on what exists today, sorted by how strong the evidence is*

### Why this page is different

Other pages describe what exists now. This page holds **predictions, not announcements**. No vendor has promised these features. They are our view of where today's tools lead. The agent now has a disposable computer of its own, run from a server. So a session can be timed, started, moved, sent notes, checked and paid for, like a server job. Most of what follows comes from that.

> [!NOTE]
> For builders: the predictions are detail you can skip on a first reading. Go straight to [What does not change](#what-does-not-change).

> [!NOTE]
> **Three evidence levels used on this page**
>
> - **Signaled:** a vendor's own pages point this way.
> - **Assembling:** the pieces exist, but no vendor has said it will join them.
> - **Speculative:** a reasonable direction with little direct evidence. This page leaves those out.
>
> Quoted facts are still **[Vendor-documented]**. Each prediction carries its own level.

### Signaled: the documents already point here

**1. Projects for teams.** **[Signaled]** Today "a project belongs to one user."[^claude-projects] Anthropic's launch post says projects for "Team and Enterprise plans come after that."[^projects-redesigned] The guess is projects that a team works in together, with roles. One person sets the brief. Others add work. A manager approves.

**2. Workers that wake on business events.** **[Signaled]** Cloud scheduled tasks "run in the cloud on a schedule, on API calls, or on GitHub events."[^cloud-scheduled-tasks] The Tour records that ChatGPT's scheduled tasks can start on [Gmail, Slack, GitHub and plugin events](../tour/side-by-side.md). The guess is built-in triggers from many more business systems. A new invoice in Brightline's inbox could start a run.

**3. Workers with their own identity.** **[Signaled]** In Slack channels, Claude Tag "acts with its own service accounts, rather than as a specific user."[^claude-tag-identity] A self-hosted session carries a signed token. It says whether a person or "your organization's service identity" created it.[^self-hosted-identity] The guess is a worker inside the company's identity system, with its own login, roles and access that can be cut off.

### Assembling: the pieces exist and need joining up

**4. Approval and policy as a platform service.** **[Assembling]** Today an approval is a prompt inside one thread. A limit typed to a coordinator is "not enforced settings."[^claude-projects] The guess is one approval queue across all your workers. A second person signs anything over an amount. Each worker has a spending limit. The business record and its rules stay with the company. Brightline's payment connector still checks again.

**5. Worker templates you can share and hire.** **[Assembling]** A setup, plugins, instructions and a schedule now describe a role.[^cloud-environments],[^claude-projects] The guess is packaged roles, such as an "accounts payable worker". They would be shared the way plugins are shared today.

**6. Testing workers like software.** **[Assembling]** Setup snapshots give repeatable starting points. Anthropic "stores the session transcript."[^cloud-environments],[^self-hosted] The guess is replaying a run against a changed brief, and staging a worker before it goes live. Brightline could test a new brief on last Friday's invoices first.

**7. Desks that work old software.** **[Assembling]** The Tour documents a [ChatGPT cloud browser](../tour/chatgpt.md). It also documents computer use in [Claude](../tour/claude-conversations.md) and ChatGPT. The guess is screen control on the cloud desk. A worker could then use old portals that have no API.

### One larger prediction

**8. AI Workers in the cloud that coordinate through messages.** **[Assembling]** Cloud threads "keep going after you close your laptop."[^claude-projects] Your own sessions can already message each other, but a message "can't approve anything."[^cross-session] The prediction is AI Workers that run in the cloud and coordinate through messages. Messages will carry information, not authority. Each worker's permissions, records and approvals will stay with the business that deploys it.

That last rule keeps the prediction safe. If messages could authorize actions, one worker could manipulate another. A supplier's worker could send Brightline a corrected invoice. Only Brightline's own approval could release the payment.

### What does not change

Every prediction still depends on three lines:

- The sandbox limits reach but grants no permission ([Security boundaries](security-boundaries.md)).
- Lasting state lives outside the sandbox ([The sandbox and its state](the-sandbox-and-its-state.md)).
- A person or a system you control decides what may happen ([From personal worker to business worker](from-personal-worker-to-business-worker.md)).

**[Inferred]** The platforms will take over more of the groundwork: identity, rules, triggers and tests. The design work then moves up a level: writing the brief, choosing the environment, setting authority and owning the record. That is the Forward Deployed Engineer's job.

After this section's Check yourself, [Case 1: Nisha's AI Team](../case-1-nishas-ai-team/overview.md) comes next. If you skipped [Build Something](../build-something/overview.md), do it before the cases.

[^projects-redesigned]: Projects redesigned: from folder to conversation, Anthropic, September 17, 2026.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 9, 2026. Scheduled tasks were in research preview. Automate work with scheduled tasks, Anthropic.
[^claude-tag-identity]: As verified on November 9, 2026. Claude Tag was in public beta. How agent identity works, Claude Tag docs, Anthropic.
[^self-hosted]: As verified on November 9, 2026. Self-hosted environments were in public beta on Team and Enterprise plans. Self-hosted environments, Anthropic.
[^self-hosted-identity]: As verified on November 9, 2026. Verify session identity in self-hosted environments, Anthropic.
[^cloud-environments]: As verified on November 9, 2026. Configure cloud environments, Anthropic.
[^cross-session]: As verified on November 9, 2026. Message your other Claude Code sessions, Anthropic.



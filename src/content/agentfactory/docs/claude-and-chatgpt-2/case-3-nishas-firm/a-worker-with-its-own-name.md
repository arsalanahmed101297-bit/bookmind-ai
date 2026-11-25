# A worker with its own name (/claude-and-chatgpt-2/case-3-nishas-firm/a-worker-with-its-own-name)

---
type: Document
title: "A worker with its own name"
description: "The worker joins the firm's Slack through Claude Tag. It acts under its own accounts, reads the bank with a key nobody can see, and saves each file outside the desk."
status: stable
order: 0.72
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: [ "A worker's own name" ]
last_verified: 2026-11-10
sources:
  - id: plans
    title: "Anthropic, Work with Claude Tag"
    resource: https://claude.com/docs/claude-tag/overview
  - id: service-accounts
    title: "Anthropic, How agent identity works (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: dm
    title: "Anthropic, How agent identity works (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: personal-connector
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: down-to-one
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: write-only
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: not-persist
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: custom-connector
    title: "Anthropic, Give Claude access to your tools (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/add-connections
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Slack in six lines

The firm talks in **Slack**, a chat app for teams. If you have not used it, this is all you need.

- A **channel** is a room for one topic. Its name starts with `#`.
- A **private channel** is a room that only invited people can enter or see.
- A **message** is what someone writes in a channel. Everyone in the channel can read it.
- A **thread** is the set of replies under one message. It keeps one conversation together.
- Writing **@** and a name calls that person. Writing `@Claude` calls the worker.
- A **one-to-one message** is a private chat between two people, outside any channel.

![A Slack channel in one picture. A box shows a private channel named northgate-work with three members and the worker. Inside it, a message from Hamza says at-Claude, please reconcile this week. Under it, joined by a line, is a thread with three replies: Claude says it is on it, Claude posts the file, and Nisha says she will read it now. Labels point to each part: the channel is a room for one topic, a message is seen by everyone in the room, at-Claude calls the worker, and a thread keeps the replies under one message. To the side, a separate small box shows a one-to-one message, a private chat outside any channel.](img/a-slack-channel-in-one-picture.png)

## A worker in the channel

Anthropic's **Claude Tag** puts Claude into a team's Slack channels. It was in public beta (open to customers, but still being tested), on Team and Enterprise plans only.[^plans] Nisha, as the Owner (the top admin) of the firm's Claude organization, its account on the Team plan, set it up one evening. She added Claude to a private channel called `#northgate-work`. The channel had three human members: Nisha, Sana and Hamza.

From then on, any of the three could write `@Claude` in the channel and hand it work. It answered in a thread under the message, where all three could read every step.

## Its own accounts

This was the change Nisha had wanted since that Thursday night with Mark's bridge.

In her old project, anything the worker did through a connector, a link that lets Claude use another tool, appeared as her. In a Slack channel, Claude acts under its own service accounts (accounts made for a program, not a person), not as the person who asked.[^service-accounts] Anthropic's advice was to give it a dedicated account in each tool, not anyone's personal login.

So Nisha created a mailbox for the worker, `reports@`, at the firm's own address. An email from the worker would now arrive from `reports@`, not from Nisha. Dana would be able to tell the worker's mail from Nisha's own.

Two things stayed personal.

- **One-to-one messages.** As [Setting up the desk](../behind-the-screen/setting-up-the-desk-keys-buildings-and-badges.md#a-worker-with-its-own-badge) said, a one-to-one message with Claude runs on the member's own account. If Hamza wrote to Claude that way, the work would appear as Hamza's.[^dm]
- **A member's own connectors.** In a channel, Claude can also use a connector from a member's own Claude account, but only for that member's own task, after the member allows it. That work is recorded under the member's name, not the worker's.[^personal-connector]

So there were two kinds of access in the firm's Slack: the **shared** access that belonged to the worker and the channel, and each person's **own** access. The firm agreed to keep client work in the channel, and that nobody would connect a personal email account. That agreement was a rule, not a setting.

![Whose name is on the work? Three columns. In the channel, with the channel's shared credentials: everyone in the channel can ask, and the work carries the worker's name, reports. In the channel, with your own connector: only you, for your own task, after you allow it, and the work carries your name. In a one-to-one message: only you, with your own connectors, and the work carries your name. A band says there are two kinds of access: the channel's shared access, and each person's own. A callout says shared access carries the worker's name, and your own access carries yours.](img/whose-name-is-on-the-work.png)

## What the channel holds

In Claude Tag, access belongs to a place, not to a person. An admin chooses where each connector applies, from all of Slack down to one channel.[^down-to-one] Nisha applied three things to `#northgate-work` and nowhere else: a read-only key to Northgate's bank export, one shared drive folder for the ledger and each week's file, and the `reports@` mailbox, which can send to anyone. [Exhibit 3](exhibits.md#exhibit-3-the-channel-map) maps the channel in full.

These three keys and sign-ins are the worker's **credentials**.

Email was not among Claude Tag's ready-made connectors. Nisha added the mailbox as a custom connector to the firm's email service.[^custom-connector]

The bank key was the one she had worried about most. She typed it in once. After that, even she could not see it again. The key stays at reception, as in [Setting up the desk](../behind-the-screen/setting-up-the-desk-keys-buildings-and-badges.md#keys-held-at-reception): it is added to each request on its way out, so the worker itself never holds it.[^write-only]

![The channel map before the incident. One private channel, northgate-work, with three people in it: Nisha, Sana and Hamza. The worker, Claude, is in the channel under its own accounts. Three credentials apply to the channel: a read-only key to the bank export, a shared drive folder, and the reports mailbox, which can send. A Wednesday draft routine and a Friday file routine run in the same channel. A band says that access belongs to the channel, so every member can ask for anything the channel holds. A dashed box shows the written rule: send only after Nisha or Sana has approved. A callout says the rule is words and the mailbox is a setting.](img/the-channel-map.png)

## Nothing lasts at the desk

Each Slack thread gets its own borrowed desk. When a thread goes quiet, the desk is released, and any file that existed only there is gone.[^not-persist] Nisha had learned this lesson with her project's Library. Here there was no Library.

So she wrote it into the channel's instructions: post every file in the thread, and save a copy to the shared drive with its date. The thread and the drive were outside the desk. They would still be there on Monday.

Next, [Two routines and one rule](two-routines-and-one-rule.md).

*Sources for the product facts in this story are given in full in the [exhibits](exhibits.md).*

[^plans]: As verified on November 10, 2026, Anthropic says "Claude Tag is available on Team and Enterprise plans" and "isn't available on individual plans (Free, Pro, Max, or Ultra)". It was in public beta. Work with Claude Tag, Anthropic.
[^service-accounts]: As verified on November 10, 2026, Anthropic says that in channels "Claude acts with its own service accounts, rather than as a specific user." How agent identity works, Claude Tag docs, Anthropic.
[^dm]: As verified on November 10, 2026, Anthropic says a one-to-one direct message "runs with your own claude.ai account", with "results attributed to you". How agent identity works, Claude Tag docs, Anthropic.
[^personal-connector]: As verified on November 10, 2026, Anthropic says "Claude uses a user's personal connectors in a channel only for that user's own tasks, after the user allows it. The work runs with that user's permissions and is recorded under their name." Security and data handling, Claude Tag docs, Anthropic.
[^down-to-one]: As verified on November 10, 2026, Anthropic says "An admin chooses where each connector applies, from every channel down to one". It also says you can narrow a credential "to one host, one path prefix, or read-only methods". Security and data handling, Claude Tag docs, Anthropic.
[^custom-connector]: As verified on November 10, 2026, Anthropic's examples of ready-made connectors cover documents, code, data, monitoring, issue tracking and sales tools. No email service is among them. The page says "Any service with an HTTP API can be added" as a custom connector. Whether a given email service works this way is for the practical to confirm. Give Claude access to your tools, Claude Tag docs, Anthropic.
[^write-only]: As verified on November 10, 2026, Anthropic says "A saved credential is not displayed again. The setup screens are write-only", and that the proxy injects the credential "so the model and the sandbox are not given the key." Security and data handling, Claude Tag docs, Anthropic.
[^not-persist]: As verified on November 10, 2026, Anthropic says "Files that existed only inside the sandbox" do not persist, and "To keep generated files, ask Claude to push them to a branch or post them in the thread." Security and data handling, Claude Tag docs, Anthropic.



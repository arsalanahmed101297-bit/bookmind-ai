# Monday's decision (/claude-and-chatgpt-2/case-3-nishas-firm/mondays-decision)

---
type: Document
title: "Monday's decision"
description: "Dana asks who can release a file when Nisha is away. Nisha has to decide how files leave the firm from now on."
status: stable
order: 0.74
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: [ "Who may release" ]
last_verified: 2026-11-10
sources:
  - id: shared-credential
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: down-to-one
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: private-post
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: personal-connector
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: tag-restrict
    title: "Anthropic, Restrict where Claude Tag operates"
    resource: https://claude.com/docs/claude-tag/admins/restrict-access
  - id: tag-scope
    title: "Anthropic, Configure per-channel access (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/attach-to-scope
  - id: agents-approval
    title: "OpenAI, Workspace agents security overview (current as of April 29, 2026)"
    resource: https://cdn.openai.com/business-guides-and-resources/workspace-agents-security-overview.pdf
  - id: never-changes
    title: "Anthropic, How agent identity works (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## One email to answer

Nisha read Dana's email three times. *"Who at your firm can release these files when you are away?"*

For eleven Fridays the honest answer had been *"I can."* On the twelfth, the honest answer was *"Nobody."* She had to reply by the end of the day. She also had a fourth client waiting: a distributor in Texas that wanted the same weekly service, starting next month.

Whatever she told Dana had to be true every Friday from now on, with four clients, and on days when she was on a flight.

## What she now knew about her channel

She drew the channel on paper. Three people could ask. One mailbox could send.[^shared-credential] She had given the worker its own name. She had not decided whose word it should take.

![Three ways to release the Friday file. Three cards side by side. Card 1, Write a better rule: the worker sends only after an approver names today's file. Enforced by words. One hour and no cost. It still trusts that nobody types the words without checking. Card 2, A release channel: the mailbox moves to a private channel with only Nisha and Sana. Enforced by a setting. Half a day, and an approver must be there every Friday. It still trusts that approvers read the file before they type. Card 3, A small approval system: the worker can only propose a send, and a named person approves one exact file. Enforced by a record. About 6,000 dollars, then 60 dollars a month. It still trusts that the approver reads what the page shows. A red-bordered box says the decision is hers alone. A callout says no option removes trust, and each one moves it to a smaller group.](img/three-ways-to-release-the-friday-file.png)

## Three ways to release the file

She wrote down three options ([Exhibit 8](exhibits.md#exhibit-8-three-ways-to-release-the-friday-file)). All costs are made up.

**1. Write a better rule.** Change the channel's instructions: *"Send only after Nisha or Sana writes 'approved' and names today's file and its reconciled cash figure. Never send a file with an open item."*

It would take an hour and cost nothing. But it was still a sentence. On Friday the worker had read her old sentence well. Nothing made it read the next one the same way. Hamza, or anyone in the channel, could still ask. In that channel everyone had the same access,[^never-changes] so only the worker's reading stood between a request and a send. By default, any member could also edit the rule itself.

**2. A release channel.** Take the mailbox away from `#northgate-work`. Apply it to a new private channel, `#northgate-release`, with only Nisha and Sana in it.[^down-to-one] Everyone could still prepare the file. Only two people could cause a send from the worker's mailbox, because only two people were in the one place where that mailbox existed.

It would take half a day. It was a setting, not a sentence. If Hamza asked the worker to send from the work channel, there would be no mailbox there to send with. He could not ask the worker to post into the release channel either, because Claude does not post into a private channel from somewhere else.[^private-post]

The release channel controlled one thing: the worker's mailbox. It did not control a person's own email. If Hamza sent the file from his own account, or let the worker use his own email connector, the email would carry Hamza's name, not the firm's.[^personal-connector] Dana would see that it had not come from `reports@`.

![The channel before and after a release channel. On the left, before: one private channel, northgate-work, with Nisha, Sana and Hamza, holding the bank key, the drive folder and the mailbox. All three people can cause a send. On the right, after: two channels. Northgate-work keeps Nisha, Sana and Hamza, with the bank key and the drive folder and no mailbox. A new private channel, northgate-release, has only Nisha and Sana, with the drive folder and the mailbox. Only Nisha or Sana can cause a send. A band says Hamza can still prepare the file, but he has no mailbox to ask for. A callout says the rule did not change who could send, and the setting did.](img/the-channel-before-and-after.png)

But it had a price. One of two people had to be awake and reachable by 6 p.m. every Friday. Sana did not work Fridays. And it still trusted whatever an approver typed. If Sana wrote *"approved, send it"* from her phone without opening the file, the setting would let it through.

**3. A small approval system.** This was the idea from the series' own [worked example](../architecture/worked-example-brightlines-payment-run-as-a-business-ai-worker.md). The worker would lose the mailbox completely. It could only *propose* a send. A named person would open a small approval page, see that exact file with its figure and its open items, and approve it. The approval would be saved as a record: who, which exact version of the file, to whom, and when. It would expire, and it could be used once. Only then would the system send. The record alone would be evidence. The real control was the last step: the system would refuse to send anything that did not match a valid record ([Exhibit 8](exhibits.md#exhibit-8-three-ways-to-release-the-friday-file)).

A contractor quoted about three weeks and $6,000 to build it, then $60 a month to run. That was four months of Northgate's fee. Nisha's firm had three clients.

She also looked at ChatGPT's workspace agents, where sending needs a person's approval by default.[^agents-approval] But OpenAI's pages did not say who may give that approval in a shared channel. Changing the tool would not answer whose word the worker should take ([Exhibit 2](exhibits.md#exhibit-2-what-moved-from-case-2-and-what-did-not)).

## What each option still trusted

A better rule trusts that nobody types the words without doing the check. A release channel trusts that the approvers read the file before they type. An approval system trusts that the approver reads what the page shows her.

No option removed trust. Each one moved it to a smaller group and left a better record.

## Before the end of the day

It was three in the afternoon on Monday. Hamza had come to her office at ten and said he was sorry for asking twice. She had told him the truth: on Friday he had nobody to ask but the worker, and that was her doing.

She had until the end of the day to choose.

Next, [What this case shows](the-case-at-a-glance.md).

*Sources for the product facts in this story are given in full in the [exhibits](exhibits.md).*

[^shared-credential]: As verified on November 10, 2026, Anthropic says "A connector's credential belongs to that agent identity and is shared by everyone in the channels where it applies. Anyone in one of those channels can ask Claude to act with the credential". Security and data handling, Claude Tag docs, Anthropic.
[^never-changes]: As verified on November 10, 2026, Anthropic says "What Claude can do never changes based on who asked." How agent identity works, Claude Tag docs, Anthropic.
[^down-to-one]: As verified on November 10, 2026, Anthropic says "An admin chooses where each connector applies, from every channel down to one". It also says you can narrow a credential "to one host, one path prefix, or read-only methods". Security and data handling, Claude Tag docs, Anthropic.
[^private-post]: As verified on November 10, 2026, Anthropic says "From a private channel, Claude doesn't post anywhere else, and nothing asked elsewhere makes Claude post into a private channel." Security and data handling, Claude Tag docs, Anthropic.
[^personal-connector]: As verified on November 10, 2026, Anthropic says "Claude uses a user's personal connectors in a channel only for that user's own tasks, after the user allows it. The work runs with that user's permissions and is recorded under their name." Security and data handling, Claude Tag docs, Anthropic.
[^agents-approval]: As checked on November 10, 2026, OpenAI's security overview for workspace agents, dated April 29, 2026, says "Write-capable actions default to requiring human approval" and that builders can "configure approval behavior for sensitive workflows." It does not say who may give that approval when an agent runs in Slack. Workspace agents security overview, OpenAI.



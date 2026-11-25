# Two routines and one rule (/claude-and-chatgpt-2/case-3-nishas-firm/two-routines-and-one-rule)

---
type: Document
title: "Two routines and one rule"
description: "Nisha gives the worker a weekly schedule, a method for the file and one written rule about sending. Four facts about the channel are not in her setup."
status: stable
order: 0.725
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: [ "Two routines, a rule" ]
last_verified: 2026-11-10
sources:
  - id: never-changes
    title: "Anthropic, How agent identity works (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: tag-security
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: no-allowlist
    title: "Anthropic, Restrict where Claude Tag operates"
    resource: https://claude.com/docs/claude-tag/admins/restrict-access
  - id: routine-same
    title: "Anthropic, Set up routines (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/users/proactivity
  - id: guidance
    title: "Anthropic, Configure per-channel access (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/attach-to-scope
  - id: member-edits
    title: "Anthropic, Configure per-channel access (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/attach-to-scope
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

The worker now had a name, a channel and three credentials. Three things were left to set up: when it should work, how the file should look, and when it may send.

## The two routines

Claude Tag can run standing work, called a **routine**, from a message in the channel. You met scheduled work in [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md). A routine uses the channel's access, the same as a request that a person types.[^routine-same] Nisha set up two.

- **Wednesday, 4 p.m. Karachi time: the draft.** Reconcile the week so far and post the draft in the thread.
- **Friday, 4 p.m.: the file.** Reconcile through Thursday's close, post the file, and save it to the drive. Do not send it.

The Wednesday draft gave her a first look. If something was wrong with the ledger export, she wanted to know on Wednesday, not at five on Friday.

## How the file is written

Nisha also wrote down how the weekly file should look. She wrote it the way a clean week goes.

> *How to write the weekly file. Begin with one line that gives reconciled cash and the number of open items. Then give a table: the bank's closing balance, add deposits not yet cleared, subtract checks not yet cashed, and add back or subtract any other difference, so that reconciled cash agrees with the ledger's closing balance. A difference between the bank and the ledger is a timing item unless a document shows it is something else. Explain each line of the table in a numbered note at the end of the file.*

In a clean week, cash agrees with the ledger once the timing items are counted. So she wrote that it should.

## The rule

The last thing Nisha wrote in the channel's instructions was one sentence.

> *Send the Friday file to Northgate only after Nisha or Sana has approved it.*

For eleven Fridays it worked the same way. At 4 p.m. the file appeared. Nisha read it, checked a few lines against the bank export, and wrote *"Approved, send it."* The worker sent it from `reports@`. Dana had her figure two hours early.

## What the setup did not say

Nisha had thought hard about the key and the mailbox. There were four facts about the channel she had not thought about. All four are in Anthropic's documentation.

1. **The channel's shared access is the same for every member.** What Claude can do with the channel's own credentials never changes based on who asked.[^never-changes] A connector's credential is shared by everyone in the channels where it applies, and anyone there can ask Claude to act with it.
2. **She could not limit who may ask in one channel.** A list of approved askers for a single channel was among the controls that did not exist.[^no-allowlist]
3. **Her rule was guidance.** The mailbox was a setting. The rule about approval was not. Anthropic's own page says that channel instructions are guidance, not an enforced guardrail (Anthropic's word for a lock), and that admins should not rely on them to block actions.[^guidance]
4. **Any member could rewrite the rule.** By default, anyone in the channel who belonged to the firm's Claude organization could edit the channel's instructions.[^member-edits]

ChatGPT has a similar shared worker for teams, called workspace agents. [Exhibit 2](exhibits.md#exhibit-2-what-moved-from-case-2-and-what-did-not) compares the two products.

Doing the [lab](lab-who-can-cause-a-send.md)? Do it now. Next, [The Friday send](the-friday-send.md).

*Sources for the product facts in this story are given in full in the [exhibits](exhibits.md).*

[^routine-same]: As verified on November 10, 2026, Anthropic says a routine "uses that channel's connections with the same permissions as a typed request." Set up routines, Claude Tag docs, Anthropic.
[^never-changes]: As verified on November 10, 2026, Anthropic says "What Claude can do never changes based on who asked." How agent identity works, Claude Tag docs, Anthropic.
[^no-allowlist]: As verified on November 10, 2026, Anthropic lists a "Per-channel responder allowlist" among the controls that are not available: "you can't narrow it to a list of people for one channel only." Restrict where Claude Tag operates, Anthropic.
[^guidance]: As verified on November 10, 2026, Anthropic says custom instructions "are read ahead of the conversation and take priority in practice, but they're guidance, not an enforced guardrail. Don't rely on them to block actions". Configure per-channel access, Claude Tag docs, Anthropic.
[^member-edits]: As verified on November 10, 2026, Anthropic says "By default, anyone in a channel who is also a member of your Claude organization can edit that channel's instructions". An Owner can block this with the Channel member edits setting. Configure per-channel access, Claude Tag docs, Anthropic.



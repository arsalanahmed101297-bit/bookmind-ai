# Questions for discussion (/claude-and-chatgpt-2/case-3-nishas-firm/questions-for-discussion)

---
type: Document
title: "Questions for discussion"
description: "Five core questions, six optional questions from the case, and three optional questions that connect the case to the ideas in the series."
status: stable
order: 0.75
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-10
sources:
  - id: slack-connect
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: self-hosted
    title: "Anthropic, Self-hosted environments"
    resource: https://code.claude.com/docs/en/self-hosted-environments
generated:
  at: 2026-11-21T00:02:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Use the story and the [exhibits](exhibits.md) to support your answers. Some exhibits are illustrative. Use them to reason, and say so when you rely on them. There is no single right answer to most of these questions.

## Core questions

1. What stopped Friday's file from leaving the firm? Look at the three records in Exhibit 6. Was it a setting, a rule or a judgment? What would have happened if the worker had said yes?
2. On Wednesday Nisha wrote *"This looks right. Approved."* What exactly did she approve? Write the approval message she should have written, in one or two sentences. Use Exhibit 4.
3. The rule said *"Send the Friday file to Northgate only after Nisha or Sana has approved it."* On Friday the worker followed it and refused. Was the rule enforced? What is the difference between a rule that is followed and a rule that is enforced?
4. What did the firm gain when the worker got its own name and its own mailbox? What did it lose when it left Nisha's project? Use Exhibit 2.
5. It is three in the afternoon on Monday. Which of the three options would you choose for a firm of three people, and what would you write to Dana? Use Exhibit 8, and say what your choice still trusts.

## Optional questions

6. Hamza had twenty minutes, a waiting client, and a file whose first line said that cash *"agrees to the ledger"*. What should he have done? What would have made the right action easier for him than the wrong one?
7. The worker said the $4,800 payment was not a timing item. It still put $212,400 on the first line, because the firm's method told it to. Sana's skill would have put *NOT READY* there. Would that have changed what happened on Friday? Could a line in the skill, such as *"never send a file that is not ready"*, do the job of a setting? Use Exhibit 9.
8. Under option 2, Sana types *"approved, send it"* from her phone on a Friday off, without opening the file. Has anything improved since the incident? What would you add?
9. Would you choose differently for a firm of thirty people and forty clients? At what point does option 3 pay for itself?
10. Suppose Nisha moves the worker to ChatGPT's workspace agents, where a send needs a person's approval by default. Which of the firm's three questions does that answer: whose name, whose word, or what record? Which does it leave open? Use the comparison in Exhibit 2.
11. Dana asks to join the firm's channel, so she can ask the worker questions herself. What would she be able to do there?[^slack-connect] What would you offer her instead?

## Optional questions that connect to the series

12. **Where is Nisha on the ladder now?** [From helper to AI Worker](../behind-the-screen/from-helper-to-ai-worker.md) names four things a business adds around an AI Worker: its own identity, a lasting record, enforced approvals and monitoring. Which of the four does the firm have after the move to Slack? Which did that Friday show to be missing?
13. **Containment or authority?** The bank key was read-only and invisible, and it worked exactly as designed. The mailbox had no such limit. Which protections in this case were containment, and which were authority? Compare [Security boundaries](../architecture/security-boundaries.md).
14. **A client whose data must stay home.** Another client says its ledger must never leave its own network. Would a self-hosted runner satisfy that client? What stays on the client's machines, and what still goes to Anthropic?[^self-hosted] Compare [Cloud environments and self-hosted runners](../architecture/cloud-environments-and-self-hosted-runners.md).

[^slack-connect]: As verified on November 10, 2026, Anthropic says that in a Slack Connect channel, once Claude is turned on there, it has the connector credentials from bundles attached directly to that channel, "and it can use them for anyone it answers there, including the other company's people." Security and data handling, Claude Tag docs, Anthropic.
[^self-hosted]: As verified on November 9, 2026, Anthropic's self-hosted environments keep repository checkouts, secrets and files on your machines, but the conversation, including tool results, still goes to Anthropic. As verified on November 10, 2026, the Claude Tag docs add that in self-hosted sessions "Claude can't use the connectors an admin adds". Self-hosted environments, and Security and data handling, Anthropic.



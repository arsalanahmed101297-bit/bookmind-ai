# Worked example: Brightline's payment run as a business AI Worker (/claude-and-chatgpt-2/architecture/worked-example-brightlines-payment-run-as-a-business-ai-worker)

---
type: Document
title: "Worked example: Brightline's payment run as a business AI Worker"
description: "Brightline's Friday payment run, designed as a weekly business AI Worker. A temporary sandbox works with a database and a payment connector that enforce approval and pay each invoice once."
status: stable
order: 0.47
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Worked example" ]
last_verified: 2026-11-09
sources:
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### The job, one step further

This example extends Brightline Wholesale Supply's Friday payment run from [One job, start to finish](../new-way-of-working/one-job.md). There, the AI Worker only suggests and the payment officer pays. [Brightline's payment run, behind the screen](../behind-the-screen/brightlines-payment-run-behind-the-screen.md) told the weekly version in plain words. This design adds the engineering. It is an illustration built from Claude features, with the nearest OpenAI equivalent. It is not a vendor reference architecture.

The whole design follows one rule: the sandbox does the work, the database keeps the record, and the connector decides what is allowed.

> [!NOTE]
> For builders: the rest of this page is detail you can skip on a first reading.

The weekly **reconciliation run** checks the invoices and proposes payments. It never makes them. It has no access to the payment tool. A separate **payment caller** makes each payment. That is the payment officer, or a payment worker whose narrow scope only reads approvals and calls the payment tool.

Four terms in the table are new. **Authoritative state** is the one copy of the facts that counts, kept in a **system of record**. A **transaction** is a group of changes that succeed or fail together. A **unique constraint** stops the same value from being stored twice. A **payment intent** records one approved payment waiting to be made.

| Role in the design | Claude | Nearest OpenAI equivalent |
| --- | --- | --- |
| Trigger | A weekly cloud scheduled task | A ChatGPT scheduled task (Work) |
| Invoice policy and matching rules | A skill (a `SKILL.md` file) that the run loads each time | A skill in Codex |
| Agent loop and model | The Claude Code harness with a Claude model | The Codex harness with an OpenAI model |
| Where the work runs | A fresh cloud sandbox for each run | A cloud sandbox backed by a VM, which Work may reuse across tasks |
| Authoritative state: invoice status, approvals, payment intents | A database behind your MCP connector, with transactions and unique constraints | The same, behind an MCP server |
| Review interface | A Claude Sheets artifact that each run refreshes, by its link, from the database rows. It is a copy, not the system of record, and approval is not recorded there | A review view in a connected app |
| Invoices and payments | The accounting system, reached through the same connector | The same |
| Approval | Recorded in the database from a separate approval page, by a named person. The connector refuses any payment without a valid approval record | The same. Codex's approval policy can add a prompt |
| Payment caller | The payment officer, or a separate payment worker with only the payment scope. Never the reconciliation run | The same |

![The weekly payment run, by design. A skill gives rules to the reconciliation run, which never pays. The run writes status and proposals to the run database through the connector, with the propose scope only. The database feeds the review artifact, which only displays rows. A named person approves on a separate approval page, which records the approval in the database. A separate payment caller calls the payment connector. The connector checks the approval while claiming the intent, then posts to the accounting system, which pays once per intent.](img/weekly-payment-run-by-design.png)

### What the design must answer

1. **The VM disappears while invoice 8 of 15 is in progress.** Only the unfinished work on invoice 8 is lost, as in [Brightline's payment run, behind the screen](../behind-the-screen/brightlines-payment-run-behind-the-screen.md). What is new here is where the status is kept. Each invoice's status is written to the database, through the connector, as soon as the invoice is processed. It is never held only in the sandbox.
2. **How the next run knows where to resume.** It asks the database for the invoices not yet reconciled, so it starts at invoice 8. It never relies on VM files, the review artifact or the chat history.
3. **Who authorizes a payment.** A named person approves on a separate approval page (see the [business-layer appendix](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md)). The artifact only displays rows. The approval page writes the approval to the database.
   - **What the approval covers.** It is bound to the exact payee, the payee's bank account, the amount, the currency and the invoice version, for example with a hash, a short fingerprint worked out from those fields. A changed bank account is the main fraud path, so a change voids the approval. The approval also expires after a set time.
   - **Who may do what.** The approver must not be the person who set the worker's access. The approver must also not be the payment caller for the same intent (separation of duties).
   - **The check.** Before every payment, the connector checks for a valid, unexpired approval record. If there is none, it rejects the call, whatever the agent or its prompts do. A prompt from `requiresUserInteraction` is a second layer, not the safeguard. See [Scheduled tasks](scheduled-tasks.md) for where that setting is documented.
4. **How duplicate payments are prevented.** Each approved invoice gets one stable payment-intent ID under a unique constraint.
   - The connector reads the approval and claims the intent **atomically**, in one database transaction. A second claim fails. Nothing can change between the check and the claim.
   - How each intent moves from claimed to paid, and how a retry stays safe, is in the [business-layer appendix](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md#preventing-duplicate-payments-in-detail).
   - A duplicate invoice under a different number is a matching problem. The reconciliation run flags it.
5. **What the artifact is for.** The Sheets artifact is a copy for reviewers, refreshed by each run. It lacks what payments need: atomic writes (all or nothing), concurrency control (two writers cannot collide) and recovery (a way back to a good state after a failure). So it never holds the authoritative state.

**Where the keys live.** **[Inferred]**
- Do not store the payment key as a [network secret](cloud-environments-and-self-hosted-runners.md) on the run's environment. Any session there could call the payment API with it and skip the approval check. Keep the payment key in the MCP connector.[^cloud-environments]
- Give the reconciliation run its own connector token with only the `record_status` and `propose_payment` scopes. "The same connector" must never mean the same scopes. Only the payment caller's token can call `execute_payment`.
- In the Claude app, a scheduled task uses its owner's connectors, and its actions "appear as you".[^cloud-scheduled-tasks] So the task must belong to a dedicated worker account that signs in the connector, never to the person who approves payments.

### Running it as a project

**[Inferred]** The same run can live in a [Claude project](projects-coordination-on-top-of-sessions.md). The weekly task becomes a scheduled task inside the project. So each run is a thread that starts with the project's instructions and memory. Say the owner prefers a different layout for the exception list. Claude saves that preference to project memory, and later threads start with it. A change to the payment policy itself goes into the skill as a new, reviewed version, never into memory, because memory is not enforced. The business layer does not change.

[^cloud-environments]: As verified on November 9, 2026. Configure cloud environments, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 9, 2026. The page says anything a scheduled task does through your connectors "appears as you". Automate work with scheduled tasks, Anthropic.



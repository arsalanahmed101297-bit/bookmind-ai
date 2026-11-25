# 19.11 Each company's own rules and data (/building-ai-workers/business-data-and-retrieval/each-companys-own-rules-and-data)

---
type: Document
title: "19.11 Each company's own rules and data"
description: "Each company's own settings, read in its own transaction, and a company's data life: loading, export and deletion, proved, with nothing stored that no tool needs."
status: stable
order: 319.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:25Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.11" ]
objectives:
  - { id: CCDV-F.D2.S2, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-21T00:02:25Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A bookkeeper who works for two firms keeps two sets of rules: one firm approves anything over $5,000, the other anything over $2,500. She never applies one firm's rule to the other's invoice, and when a firm leaves, she hands back its folders and shreds her copies.

**What you will learn.** How each company keeps its own rules, read in its own transaction, and how a company's data is loaded, exported and deleted, with proof at each step.

**Why it matters.** One company's rule applied to another's invoice is a wrong answer that looks right. And a company that leaves must take its data with it, with nothing left behind.

**One request, start to finish.** Luis asks the connector about purchase order PO-3103, for $2,688.00.

1. **The tool opens Cedar Ridge's transaction,** as every tool does ([19.9](one-company-per-transaction.md)).
2. **It reads the purchase order, the invoice, and Cedar Ridge's own approval threshold,** from `tenant_settings`, in the same transaction.
3. **Code compares them:** $2,688.00 is over $2,500.00, so `needs_approval` is true. The model never does the arithmetic that decides a payment ([Chapter 14](../structuring-programs/overview.md)).

Ana asks about PO-7005, for $7,350.00. Brightline's threshold is $5,000.00, and $7,350.00 is over it, so `needs_approval` is true. Same tool, same code, each company's own rule.

### Where do a company's own rules live?

**Per-company settings** live in their own table, one row per company, read inside that company's transaction like any other data. There is no shared default that silently applies to everyone: a company without a settings row is a loading error, caught before its first tool call. A company's rules are data, not instructions. When [Chapter 20](../mcp-apps/skills-that-travel-with-the-server.md) serves Brightline's triage skill from the connector, the method is the same for every company, and each company's threshold still comes from its own settings row.

**A company's data life** completes [Chapter 18](../securing-connectors/overview.md)'s company life, which covered sign-in only:

| Step | Sign-in side (Chapter 18) | Data side (this chapter) |
| --- | --- | --- |
| **Onboarding** | Create the company and its people | Load its data through the loader role, in one transaction with the company set, so a row for anyone else is refused, and a failure loads nothing. Then run the data matrix before the first tool call |
| **Changes** | Add or remove people, change roles | Load again from the company's files, replacing its rows in one transaction |
| **Export** | | Give the company all of its data and nothing else: every table, read through the reader role with the company set, so the policies decide what leaves |
| **Offboarding** | Stop new tokens (`tenant:remove`) | Delete every row with its `tenant_id`, then prove, as the owner, which sees every row on the lab's service, that every table now holds zero rows for it |

### What should you never store?

Data you never store cannot leak. Brightline's [Chapter 17](../connectors-and-mcp/overview.md) banking file holds full account numbers and routing numbers. No tool ever returns them: `find_vendor` returns the last four digits only. So the loader cuts each account number to its last four digits before anything reaches the database, and drops the routing number. The banking table cannot even hold more: its column only accepts exactly four digits. Cedar Ridge sends last four digits from the start. A check in the lab confirms that no full account number exists anywhere in the database.

**At work.** In [Lab 19](lab.md), Task 4, Claude Code loads Cedar Ridge: 9 vendors, 20 invoices, 8 purchase orders, 3 policy documents and its threshold of $2,500.00. The loader reports one file it did not load, an old pasted email, because Luis, as AP lead, marked it as not counting ([19.15](answers-that-cite-or-abstain.md)). In Task 10, Juniper Trail Outfitters, a trial company, asks for its data and then leaves. Its export holds 2 vendors, 2 invoices and 1 purchase order, its passages without their embeddings, and nothing of anyone else's. After deletion: `Every table now holds 0 rows for org_juniper (counted as the owner).`

**The operating rule:** keep each company's rules in its own settings row, read in its own transaction. Load, export and delete one company at a time, through the policies, and prove each step. Do not store what no tool needs.

![A company's life drawn as a line from left to right, in two rows. Top row, the sign-in side: create the company and its people, change people and roles, stop new tokens. Bottom row, the data side: load its data in one transaction and run the data matrix, load again when it changes, export everything that is its own, delete every row and prove zero rows remain. A small table on the side, labeled each company's own rules: Brightline, approvals over $5,000. Cedar Ridge, approvals over $2,500.](img/chapter-19-company-data-life.png)

*Figure 19.20. A company's data life, beside its sign-in life. Each step is one company at a time, and each is proved.*



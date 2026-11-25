# 19.4 Designing the AP tables (/building-ai-workers/business-data-and-retrieval/designing-the-ap-tables)

---
type: Document
title: "19.4 Designing the AP tables"
description: "A schema with the rules written into the database, and the company in every table and every key, so a row can only point inside its own company."
status: stable
order: 319.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-04T22:13:33Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.4" ]
objectives:
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-04T22:13:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Before a clinic opens, someone decides what a patient record holds: name, date of birth, insurance number, never the patient's diary. They decide which fields may be empty, which must be unique, and that an appointment must name a real patient. Those decisions come before the first patient walks in, because changing them later means changing every record.

**What you will learn.** How the design of the tables writes the data's rules into the database, and why every table and every key in this chapter starts with the company.

**Why it matters.** A rule written into the database holds for every row, whichever code writes it. With the company in every key, a Cedar Ridge row can never point at a Brightline row, even by mistake.

**One request, start to finish.** Ana Morales, Brightline's AP analyst, and the builder decide what a purchase order row must hold. The builder proposes. Ana corrects.

1. **A purchase order has a number, a vendor, a date and an amount.** Ana: "and the invoice it was raised for, if there is one yet."
2. **The amount is a whole number of cents,** never a decimal, so no rounding ever creeps in ([Chapter 14](../structuring-programs/overview.md)).
3. **The vendor must be a real vendor.** Ana: "and it must be one of *our* vendors. A Cedar Ridge purchase order must never point at a Brightline vendor, even by mistake."

That last sentence decides the shape of every table in the chapter.

### What is a schema?

A **schema** is the design of a database: its tables, their columns, each column's type (text, a whole number, a date, a vector), and the rules each row must follow. Postgres calls those rules **constraints**: a column that may not be empty (`NOT NULL`), a value that must be unique, a check on its form, or a pointer that must point at a real row (a foreign key, [19.2](tables-rows-and-keys-from-zero.md)). The database refuses any row that breaks one.

### Why does every key include the company?

Every table except `tenants` itself has a `tenant_id` column holding the company's id, the same id the sign-in server gives it (`org_brightline`, `org_cedar`). And every primary key and every foreign key includes it. Here is the invoices table, as the agent wrote it in [Lab 19](lab.md)'s migration:

```sql
CREATE TABLE invoices (
  tenant_id      text   NOT NULL,                  -- whose invoice this is
  invoice_number text   NOT NULL CHECK (invoice_number ~ '^INV-\d{4}$'),
  vendor_id      text   NOT NULL,
  invoice_date   date   NOT NULL,
  due_date       date,                             -- may be empty: some exports leave it out
  terms          text   NOT NULL,
  amount_cents   bigint NOT NULL CHECK (amount_cents >= 0),
  status         text   NOT NULL CHECK (status IN ('open', 'paid')),
  PRIMARY KEY (tenant_id, invoice_number),
  FOREIGN KEY (tenant_id, vendor_id) REFERENCES vendors (tenant_id, vendor_id)
);
```

In plain words, line by line: `text`, `date` and `bigint` (a large whole number) are the columns' types. `NOT NULL` means the column may never be empty. `CHECK (invoice_number ~ '^INV-\d{4}$')` means the number must be `INV-` followed by exactly four digits (`~` tests the text against a pattern). `CHECK (amount_cents >= 0)` means no negative amounts, and `CHECK (status IN ('open', 'paid'))` means the status must be one of those two words. `REFERENCES vendors (...)` names the table and columns the foreign key must match. And the key: an invoice is named by its company *and* its number together, a **composite key** (two columns that together name one row). Its vendor is found by its company *and* its vendor id together. So a Cedar Ridge invoice can only ever point at a Cedar Ridge vendor: the pair (`org_cedar`, `V006`) does not exist, because only Brightline has a V006, and the database refuses the row. The same key also lets two companies use the same ids. Brightline and Cedar Ridge both have a vendor V001 and an invoice INV-8303. They are different rows, never confused.

### Which tables hold the AP data?

| Table | One row per | Key |
| --- | --- | --- |
| `tenants` | company whose data is connected | `id` |
| `tenant_settings` | company, holding its own rules, such as its approval threshold ([19.11](each-companys-own-rules-and-data.md)) | `tenant_id` |
| `vendors` | vendor | `tenant_id`, `vendor_id` |
| `vendor_notes` | vendor's note from the AP team, at most one per vendor | `tenant_id`, `vendor_id` |
| `vendor_banking` | vendor's bank, with the last four digits only ([19.11](each-companys-own-rules-and-data.md)) | `tenant_id`, `vendor_id` |
| `invoices` | invoice | `tenant_id`, `invoice_number` |
| `purchase_orders` | purchase order | `tenant_id`, `po_number` |
| `policy_documents` | policy document that counts ([19.15](answers-that-cite-or-abstain.md)) | `tenant_id`, `document_id` |
| `policy_passages` | passage of a policy, with its embedding ([19.13](retrieval-from-zero.md)) | `tenant_id`, `passage_id` |

### What is an index?

An **index** is a sorted shortcut the database keeps beside a table, like the index at the back of a book. Without one, finding Cedar Ridge's invoices means reading every row. With one on `tenant_id`, the database jumps straight to them. A primary key always comes with an index, and because each key here starts with `tenant_id`, every table already has a shortcut to one company's rows. Part C adds a second, special kind of index, for vectors.

**At work.** In Lab 19, Task 2, the builder asks Claude Code to try one deliberately wrong row: a Cedar Ridge invoice for vendor V006. The database refuses it with error 23503, a foreign key violation, and Claude Code explains which rule refused it. No code in the connector was involved. The rule lives in the database.

**The operating rule:** write the data's rules into the schema, where the database enforces them on every row. Put `tenant_id` in every table that holds a company's rows, and in every key.

![The nine AP tables as cards, each with its key. At the top, tenants, key id. Below it, tenant_settings, vendors and policy_documents, each with an arrow up to tenants. The middle arrow is labeled tenant_id points at tenants.id. At the bottom, vendor_notes, vendor_banking, invoices and purchase_orders point at vendors through tenant_id and vendor_id. Purchase_orders also points at invoices through tenant_id and invoice_number. Policy_passages points at policy_documents through tenant_id and document_id. Every key starts with tenant_id. Notes: each arrow is a foreign key, labeled with the columns it uses, and the company's name is not here, it lives in the sign-in database.](img/chapter-19-tables.png)

*Figure 19.10. The AP tables. Every key starts with the company, so every pointer stays inside one company.*



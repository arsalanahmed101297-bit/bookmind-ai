# 19.10 Where the guarantee stops (/building-ai-workers/business-data-and-retrieval/where-the-guarantee-stops)

---
type: Document
title: "19.10 Where the guarantee stops"
description: "Seven things that happen outside row-level security, from keys and errors to exports and logs, and the rule that closes each."
status: stable
order: 319.10
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:37Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.10" ]
objectives:
  - { id: CCDV-F.D7.S1, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-15T11:19:37Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A bank vault stops thieves at the vault door. It does not stop a teller from reading a balance aloud across the counter, a statement mailed to the wrong address, or a shredder that was never emptied. A good bank knows the exact edge of what the vault protects, and puts a rule at every place outside it.

**What you will learn.** Seven things that happen outside row-level security, from keys and error messages to exports and logs, and the rule that closes each.

**Why it matters.** A connector can leak without showing a single row: a different error message tells another company that a vendor exists. The database guards the rows, and the rest is the application's job.

**One request, start to finish.** A test asks the connector, with Luis's token, for vendor V008. Cedar Ridge has no V008. Brightline does. Then it asks for V998, which nobody has. The two answers are compared, word for word:

- `No vendor V008. Known vendor ids are V001 to V104. To search by name, call find_vendor with name.`
- `No vendor V998. Known vendor ids are V001 to V104. To search by name, call find_vendor with name.`

The same, apart from the id Luis typed. If they had differed, even by one word ("V008 belongs to another company"), Luis would have learned that another company has a vendor V008. That is a leak, even though no row was shown.

The middle sentence, "Known vendor ids are V001 to V104", is built from the asking company's own vendor ids, its first and its last. Cedar Ridge's run from V001 to V104, so both replies give the same range, and Brightline would see "V001 to V008". It tells Luis only about Cedar Ridge's own vendors, never anyone else's.

### What happens outside row-level security?

Row-level security decides which rows a query sees. Seven things happen outside it, and each needs its own rule. The lab has a check for six of them.

| # | Outside row-level security | The rule | Checked by |
| --- | --- | --- | --- |
| 1 | **Keys and unique rules are checked across every company's rows.** Postgres checks a unique value or a foreign key against the whole table, ignoring policies, so that data stays consistent. Its documentation warns these checks can open a "covert channel", a hidden way for information to pass: a "this id already exists" error would reveal another company's id. For example, if the key were `vendor_id` alone, Cedar Ridge adding a vendor V006 would fail with "V006 already exists", and Luis would learn that someone else has a V006 | Every key includes `tenant_id` ([19.4](designing-the-ap-tables.md)), so a key can only ever collide inside one company: Cedar Ridge's V006 is the pair (`org_cedar`, V006), which nobody else has | The role check reads every table's primary key |
| 2 | **Errors and counts.** A different message, or a different total, for "exists elsewhere" and "exists nowhere" | Every "not found" reply is the same whether the row exists for another company or nowhere. Every count runs inside the company's transaction, so it can only count that company's rows | The data matrix compares the replies |
| 3 | **Roles and functions that skip the policies.** Superusers, `BYPASSRLS` roles, and any function marked `SECURITY DEFINER`. A function normally runs with the rights of the role that calls it. One marked `SECURITY DEFINER` runs with the rights of the role that owns it, usually the one that created it, so a helper written by the owner skips the policies, whoever calls it | The connector and loader use roles that cannot skip, and may call no `SECURITY DEFINER` function | The role check |
| 4 | **Exports and backups.** A whole-database backup runs as a role that sees everything | A company's export runs as the reader role with that one company set, so the policies decide what leaves | The export script stops if any row is not the company's |
| 5 | **The SQL itself.** Code that writes SQL can write anything, including a query that runs as the wrong role | Trusted code writes every statement. The model never sends SQL. Every value, the company first, is a parameter, never pasted into the text | The query check, and code review |
| 6 | **Logs and traces.** A log line holding a row, or an error holding a query result | Logs hold the company's id, the tool, the outcome and the time ([18.12](../securing-connectors/what-else-carries-the-company.md), rule 6). Never rows, never SQL, never connection strings (the one line of text, with an address, a role and its password, that a program uses to open a connection) | [Chapter 18](../securing-connectors/overview.md)'s log tests |
| 7 | **Timing.** In principle, how long a query takes can hint at how many rows another company has | Accepted at Brightline's size. A system that must hide it adds fixed delays. Named here so it is a decision, not a surprise | Not tested |

### What can row-level security not protect against?

The company setting, `app.tenant_id`, is not a proof of identity. It is a value that any code holding the reader role's password may set to any company. Row-level security then trusts it completely. So the database protects against a query that forgets its filter, a role that is too powerful, and a setting left behind on a shared connection. It does not protect against the connector's own code choosing the wrong company, by mistake or because someone changed it on purpose. For example: a "helpful" change lets a tool take a `company` field from its input "for admins", and calls `set_config('app.tenant_id', input.company, true)`. Every policy still passes, and Luis can now read Brightline's invoices by asking for them. The real boundary is therefore three things together: the token check that decides the company (Chapter 18), the one place in the code that sets it from the request context ([19.9](one-company-per-transaction.md)), and who holds the reader role's password. The lab guards each. The token check is Chapter 18's. In each connector, the company is set in one place only, `forTenant` in TypeScript and its twin in Python, called with the company from the request context, and the code review in Task 11 checks that no tool passes anything else. The reader role's password lives only in the secrets file and the deployment's secrets, never in a chat (field guide [F0](field-guide-business-data-and-retrieval.md#f0-the-repository-you-start-with-and-the-secrets-on-your-computer)). No database rule can do this part for you, which is why it is named here.

![A chain of six boxes, left to right: sign-in token, checked. Request context, company equals Cedar Ridge. The one place that sets the company. The setting app.tenant_id. Row-level security on every table. Cedar Ridge's rows only. A green bracket over the first three boxes: the real boundary, the token check, one place in the code that sets the company, and who holds the password. Above row-level security, a shield and a note: checks every row against the setting, but cannot tell where the setting came from. Below, in dashed red, a changed tool that takes the company from the tool's input for admins, with an arrow straight into the setting that skips the one place that sets the company, then on through row-level security to a gold box: every policy still passes, and Luis reads Brightline's invoices.](img/chapter-19-trust-boundary.png)

*Figure 19.18. Row-level security trusts the setting. The connector's code decides what the setting says.*

**At work.** In [Lab 19](lab.md), Task 9, OpenCode plants a "helpful" error: a small function, written by the owner with `SECURITY DEFINER`, that checks whether a vendor id exists anywhere, so `find_vendor` can say "Vendor V008 belongs to another company." The function skips the policies, as designed. The data matrix catches the different reply, and the role check catches the function.

**Later.** In [Chapter 20](../mcp-apps/who-a-click-acts-as.md), the screen matrix has Cedar Ridge's screen ask for Brightline's INV-8301. It expects this same "not found", word for word.

**The operating rule:** know the edge of row-level security. Put the company in every key, make every "not found" identical, never let the connector reach a role or function that skips the policies, export through the policies, and keep rows out of logs.

![The guarantee drawn as a walled area labeled row-level security, holding the rows each query may see. Seven gaps around its edge, each with a small sign: Keys checked across companies, closed by the company in every key. Errors and counts, closed by identical not-found replies. Roles and functions that skip, closed by the role check. Exports and backups, closed by exporting through the reader role. SQL written by code, closed by parameters and no SQL from the model. Logs and traces, closed by never logging rows. Timing, marked accepted.](img/chapter-19-guarantee-edge.png)

*Figure 19.19. Row-level security, and the seven gaps around it, each with its own rule.*



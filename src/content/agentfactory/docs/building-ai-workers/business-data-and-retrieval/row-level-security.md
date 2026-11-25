# 19.8 Row-level security (/building-ai-workers/business-data-and-retrieval/row-level-security)

---
type: Document
title: "19.8 Row-level security"
description: "Policies that the database applies to every query, default deny, who skips them, and three roles, so the connector's role can never see another company's rows."
status: stable
order: 319.08
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-04T22:13:33Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.8" ]
objectives:
  - { id: CCDV-F.D7.S1, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-04T22:13:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** In a hotel, every room key opens only its own room. A guest who walks down the wrong corridor is not stopped by a sign saying "please only open your own door". The lock itself refuses. The housekeeping master key opens every door, which is exactly why it never leaves the housekeeper's belt.

**What you will learn.** How the database itself refuses other companies' rows on every query, which roles skip that rule, and why the connector's role must not.

**Why it matters.** A filter in code protects only the queries that remember it. A rule in the database protects every query, including the one a developer forgets to filter.

**One request, start to finish.** A builder writes a quick test query, `SELECT * FROM vendors` (the `*` means every column), with no `WHERE` at all, and runs it three times, once as each of three database roles:

1. **As the project's owner role,** the one that created the tables: every vendor of every company comes back. This owner has the bypass right (below), so it skips the rules.
2. **As the reader role, with Cedar Ridge set as the company** ([19.9](one-company-per-transaction.md) shows how a company is set, for one transaction at a time)**:** 9 vendors, all Cedar Ridge's.
3. **As the reader role, with no company set:** nothing. Zero rows.

The same query, three answers. The query never decided. The database did.

### What is row-level security?

**Row-level security** is a Postgres feature that applies a rule to every query on a table, whatever the query says. The rule is a **policy**: a yes-or-no test the database runs on each row. A row the policy does not allow is invisible, as if it were not there: a read does not see it, an update or delete changes nothing (zero rows, with no error), and an insert of such a row is refused with an error. Turn row-level security on for a table and give it no policy, and nothing is allowed: the documentation calls this a "default-deny policy". The policy compares each row with a **setting**: a named value the database keeps for the current transaction, like a sticky note on the request. At the start of every tool call, the connector writes the company into a setting called `app.tenant_id` ([19.9](one-company-per-transaction.md) shows how). Here is one of the lab's policies:

```sql
CREATE POLICY vendors_reader ON vendors FOR SELECT TO ap_reader
  USING (tenant_id = current_setting('app.tenant_id', true));
```

In plain words: create a policy named `vendors_reader` on `vendors`. `FOR SELECT` means it covers reading, and `TO ap_reader` means it covers that one role. When `ap_reader` reads, it sees only rows whose `tenant_id` equals the setting called `app.tenant_id`. `current_setting(..., true)` reads that setting, and gives nothing (a null) if it was never set, rather than an error. A null equals no company, so a reader with no company set sees no rows. That is the third run above.

### What do USING and WITH CHECK do?

`USING` decides which existing rows a command may see, update or delete. `WITH CHECK` decides which new or changed rows it may write. The loader's policy on `vendors` has both:

```sql
CREATE POLICY vendors_loader ON vendors FOR ALL TO ap_loader
  USING      (tenant_id = current_setting('app.tenant_id', true))
  WITH CHECK (tenant_id = current_setting('app.tenant_id', true));
```

In plain words: `FOR ALL` covers reading, adding, changing and deleting. The loader may touch only rows of the company that is set, and may write only rows of that company. So the loader, set to Cedar Ridge, can neither see Brightline's rows nor write a row that says `org_brightline`. In the lab, it tried. The database answered: `new row violates row-level security policy for table "vendors"`.

![Two halves. Left, reading with USING: the vendors table as stored holds Brightline and Cedar Ridge rows mixed. With Cedar Ridge set for the transaction, the rows pass through a gate labeled USING, tenant_id equals the company set, and only Cedar Ridge's two rows come out. A note: Brightline's rows are invisible, a read skips them, an update or delete changes zero rows. Right, writing with WITH CHECK: the loader, with Cedar Ridge set, writes two new rows. The Cedar Ridge row passes the WITH CHECK gate and is written, with a green tick. The Brightline row is refused, with an error, marked with a red cross.](img/chapter-19-read-and-write.png)

*Figure 19.14. USING hides other companies' rows. WITH CHECK refuses writing them.*

### Who skips row-level security?

Two kinds of role skip row-level security, and the connector must never use either:

- **The table's owner,** the role that created it, skips it, unless the table says otherwise. `ALTER TABLE vendors FORCE ROW LEVEL SECURITY` holds the owner to the policies too. The lab forces it on every table.
- **A superuser (a role with every right on the database server), or any role with the `BYPASSRLS` attribute (a yes-or-no right set on the role itself),** always skips it. No table setting can stop them. Put together, for the table's owner:

| The owner... | Table not forced | Table forced |
| --- | --- | --- |
| without `BYPASSRLS` | Skips the policies | **Held to the policies** |
| with `BYPASSRLS` (the lab's owner) | Skips the policies | Skips the policies |

The hosting service's documentation describes its owner roles as able to skip row-level security, a right called `BYPASSRLS` (field guide [F2](field-guide-business-data-and-retrieval.md#f2-neon-from-zero)), and the runs above were made on a database set up the same way. That is why the first run saw every vendor, even though every table is forced. Task 3 has you check your own branch: `check:roles` lists every role that can skip row-level security. So why force the tables at all? Because the bypass right belongs to the role, not the table. On a host that gives the owner no such right, or if it is ever taken away, forcing is what holds the owner to the policies. It is a second lock that costs nothing.

### Which roles does the lab use?

Three roles, each with one job.

| Role | Used by | May | Skips row-level security? |
| --- | --- | --- | --- |
| The owner | Migrations and the role check, run by the builder's agent or the build. When it can skip row-level security, also the count that proves a deletion | Create and change tables, roles and policies | Yes, on the lab's service it has the bypass right. It never serves a request |
| `ap_loader` | The onboarding, delete and embed scripts | Read and write, one company at a time | No |
| `ap_reader` | The connector, and the export script | Read only, one company at a time | No |

### Can a role skip row-level security by accident?

A role made the easy way may carry the bypass right. Some hosting services give every role made in their dashboard a set of powerful rights, which can include `BYPASSRLS`. The lab's service documents that its dashboard roles do (field guide [F2](field-guide-business-data-and-retrieval.md#f2-neon-from-zero)). So the lab makes `ap_loader` and `ap_reader` with SQL, in a migration, never in the dashboard. And because "we made it carefully" is not proof, a check reads every role's rights from the database on every build and fails if the connector's role or the loader's could skip the policies.

**At work.** In [Lab 19](lab.md), once Task 4 has loaded the data, the builder runs Task 3's quick test again. It shows every company's vendors, because Claude Code ran it as the owner. The builder asks for the same query as `ap_reader` with Cedar Ridge set: 9 rows. Then with nothing set: 0 rows. Then Claude Code lists every role that can skip row-level security on this database. The owner is on the list. `ap_reader` and `ap_loader` are not.

**The operating rule:** turn on and force row-level security on every table that holds company data, give each table a policy per role, and let the connector use only a role that cannot skip it. Check every role's rights on every build.

![One query, SELECT star FROM vendors with no WHERE, arriving three times at the vendors table, which holds rows for Brightline and Cedar Ridge. First as the owner, drawn with a master key: every row comes back, if it has the bypass right, labeled never serves a request. Second as ap_reader with Cedar Ridge set: only Cedar Ridge's nine rows. Third as ap_reader with nothing set: an empty result, labeled default deny.](img/chapter-19-three-roles.png)

*Figure 19.15. One query, three roles, three answers. The database decides, not the query.*



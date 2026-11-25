# Exhibits (/claude-and-chatgpt-2/case-2-nishas-first-client/exhibits)

---
type: Document
title: "Exhibits"
description: "The details behind the story: the brief, the project setup, the nightly run log, the US GAAP bridge, who caught what, the permission map, the Thursday request and three draft replies, time and cost compared with Case 1, and a checklist for before anything is released."
status: stable
order: 0.66
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00D"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: run-sheet
    title: "Nisha's First Client: practical run sheet and record"
    resource: "../../appendices/instructors/case-2/appendix-practical-run-sheet.md"
  - id: inventory
    title: "KPMG, Inventory accounting: IFRS Accounting Standards vs US GAAP (2026)"
    resource: https://kpmg.com/us/en/articles/2026/inventory-accounting-ifrs-accounting-standards-vs-us-gaap.html
  - id: us-gaap-new-cost
    title: "PwC, Inventory guide, 3.8 Lower of cost or market considerations when using LIFO (quotes ASC 330-10-35-14)"
    resource: https://viewpoint.pwc.com/dt/us/en/pwc/accounting_guides/inventory/Inventory-Guide/3_chapter_LIFO_inv/38_Low_of_cost1.html
  - id: development
    title: "Deloitte, Comparing IFRS Accounting Standards and US GAAP, 1.5 Intangible Assets"
    resource: https://dart.deloitte.com/USDART/home/publications/deloitte/additional-deloitte-guidance/roadmap-ifrs-us-gaap-comparison/chapter-1-assets/1-5-intangible-assets
  - id: leases
    title: "Deloitte, Comparing IFRS Accounting Standards and US GAAP, 5.7 Leases"
    resource: https://dart.deloitte.com/USDART/home/publications/deloitte/additional-deloitte-guidance/roadmap-ifrs-us-gaap-comparison/chapter-5-broad-transactions/5-7-leases
  - id: classification
    title: "Deloitte, Roadmap: Leases, 8.3 Lease Classification"
    resource: https://dart.deloitte.com/USDART/home/codification/broad-transactions/asc842-10/roadmap-leasing/chapter-8-lessee-accounting/8-3-lease-classification
  - id: claude-projects
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: routines
    title: "Anthropic, Automate work with scheduled tasks"
    resource: https://code.claude.com/docs/en/routines
  - id: case-1
    title: "Claude and ChatGPT 2.0 Case 1: Nisha's AI Team"
    resource: "../case-1-nishas-ai-team/overview.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

All figures for Sutlej Weavers are made up. Exhibits 3, 5 and 8 come from the practical of November 17, 2026, and each says where the story and the record differ. The [practical run sheet and record](../../appendices/instructors/case-2/appendix-practical-run-sheet.md#the-record) has the details.[^run-sheet]

## Exhibit 1: The engagement brief

| Part | What Nisha wrote |
|---|---|
| **Outcome** | A bridge from Sutlej Weavers' IFRS profit before tax to US GAAP profit before tax, for inventory, leases and development costs only. Done when every adjustment has an amount, the IFRS treatment, the US GAAP treatment and a source, and every assumption is listed. |
| **Context** | For Mark's board. Only the files in the project: Sutlej's trial balance, its notes on inventory, leases and development costs, and Mark's engagement letter. Official or well-known sources for the rules. |
| **Format** | One table, in the order of the three areas, with a total. A short list of open questions under it. List what you could not check. |
| **Constraints** | Plain English that a board member who is not an accountant can read. Prepare and check only. Never send, share or publish anything. Never contact Mark or Sutlej. |

## Exhibit 2: The project setup

![Nisha's AI Worker for the client job. At the top, three boxes: the brief, which is the project instructions for every thread (gold, Nisha's work). The coordinator, which is the project conversation that starts the threads and has no connectors. And the nightly scheduled task at 1 a.m., which works from a written instruction and has no connectors. Arrows lead from the coordinator and the task down to a shaded THREADS area, where four threads each work at their own borrowed desk: inventory, development costs, leases, and a reviewer that changes nothing. Beside it, a shaded LIBRARY area outside every desk holds the client's files and every dated bridge, with a two-way arrow to the threads. Under it, a separate box shows project memory, kept in Project settings, which every new thread reads. Along the bottom, ChatGPT's independent review and an arrow of files and bridges from the Library both lead to Nisha's morning check (gold), which leads to the second signature, a red-bordered box that says only Nisha sends to Mark. A dashed box shows what is not connected: email and file sharing. A band explains the colors used in every figure of this case: gold for Nisha's work, white for AI work, a red border for her decision alone, and dashed for what is not connected or stopped. A callout says that a setting that is missing enforces more than a rule that is written, and a note says this is a project at claude.ai/code with no account connectors that can send.](img/nishas-ai-worker-for-the-client-job.png)

The settings are in [Building the AI Worker](building-the-ai-worker.md#the-setup-in-five-steps). What is locked is in [Exhibit 6](#exhibit-6-the-permission-map).

## Exhibit 3: The nightly run log

> **Where the record differs from the story.** The runs came one after another on the same afternoon, each started with **Run now**, not at 1 a.m. on two nights. No usage limit was reached. The limit stop in the story follows Anthropic's docs.

| Run | Started | Outcome | What was saved to the Library | What changed before the next run |
|---|---|---|---|---|
| Tuesday evening's four threads (not a nightly run) | 1:23 p.m. | Finished in about 4 minutes | Three parts, one for each area, with no total. The reviewer's grade, 7 out of 10, and its list of things in the files that did not agree | Nisha asked for the nightly task. Claude first asked which time zone 1 a.m. was in |
| Run 1 (Tuesday night in the story) | 1:46 p.m. | Finished in about 2 minutes | Bridge version 1: one table with a total, Rs 103.2 million, or Rs 102.0 million as a finance lease, and the open questions in one list | ChatGPT's review. Two points added to the project instructions. One note saved to project memory |
| Run 2 (Wednesday night in the story) | 2:13 p.m. | Finished in about 1 minute. "The bridge update ran again and nothing changed." | Nothing new. The two new points were not used | The two points added to the task's own instruction |
| Run 3 (Nisha's **Run now** on Thursday in the story) | 2:18 p.m. | Finished in about 2 minutes | Bridge version 2: the same amounts, with the two lease answers side by side and the lease line's accounting words in plain English | |

## Exhibit 4: The US GAAP bridge

All amounts are in Rs million and are made up. The bridge is a teaching example. It needs a qualified accountant's check before anyone relies on it.

![The bridge as a walk. A waterfall chart in Rs million, made up. A dark bar for IFRS profit reaches 120.0. Red steps go down by 6.0 for the inventory reversal and by 15.0 for development costs this year. A green step goes up by 3.0 for development costs from earlier years. A dashed step goes up by 1.2 for the lease if it is an operating lease, and is about 0 if it is a finance lease. Two dark bars show US GAAP profit: 103.2 if operating, 102.0 if finance. A legend explains the colors. The axis starts at 95 so the steps are visible. A note says the figures are made up and need an accountant's check.](img/the-bridge-as-a-walk.png)

| # | Item | Why it changes | Adjustment | Source | Checked by Nisha? |
|---|---|---|---|---|---|
| | **Profit before tax under IFRS** | | **120.0** | Trial balance | Yes |
| 1 | Inventory write-down reversed this year | IFRS added back 6.0 when the goods recovered in value. US GAAP does not allow that for a year-end write-down.[^us-gaap-new-cost] | **minus 6.0** | KPMG[^inventory] | Yes |
| 2 | Development costs this year | IFRS recorded 15.0 as an asset. US GAAP treats it as a cost of this year. | **minus 15.0** | Deloitte[^development] | Yes |
| 3 | Development costs from earlier years | IFRS charged 3.0 of earlier costs this year. Under US GAAP those were already costs in earlier years. | **plus 3.0** | Deloitte[^development] | Yes |
| 4 | Warehouse lease | IFRS cost this year is 11.2 (depreciation 8.0 plus interest 3.2, at the 8% rate in the lease note). If US GAAP treats it as an operating lease, the cost is an even 10.0 on one line. | **plus 1.2 if operating, about 0 if finance** | Deloitte[^leases] | **No.** Operating lease assumed. Contract not yet received. |
| | **Profit before tax under US GAAP** | | **103.2 if operating, 102.0 if finance** | | |

**Not in the bridge:** tax effects, and the effect on the balance sheet. On the balance sheet, inventory would be 6.0 lower under US GAAP, and the development asset of 21.0 (15.0 from this year and 6.0 left from earlier years) would not exist.

## Exhibit 5: Who caught what

> The first three columns are recorded. "Not recorded" means the record does not show it either way. The Nisha column is the story.

![Who saw what. The subtitle says each reviewer could only catch what it could see, and finding a gap is not the same as closing it. A grid with four columns: area threads, reviewer thread, ChatGPT and Nisha. Rows show what each could see. All four saw the rules in the instructions. The area threads, the reviewer thread and Nisha saw the client's files in the Library. ChatGPT did not. The reviewer thread, ChatGPT and Nisha saw the whole bridge, but each area thread saw only its own part. Only Nisha saw the emails with Sutlej and Mark. Chart colors, explained in a note: dark blue for saw it, light blue for only its own part, and a grey outline for did not see it. A band says only Nisha could ask Sutlej about the inventory gap. A note says this is the planned setup, and a callout says a reviewer cannot catch what it is never shown.](img/who-saw-what.png)

Each row is one of the eight items in the files.

| What was found | Area thread | Reviewer thread | ChatGPT | Nisha (in the story) |
|---|---|---|---|---|
| Inventory write-down reversed (profit) | Caught | Checked the numbers and agreed | Agreed the arithmetic, and asked for evidence | Checked |
| Inventory 6.0 lower on the balance sheet | Caught | Not recorded | Not recorded | Checked |
| Development costs recorded as an asset this year | Caught | Checked the numbers and agreed | Said the adjustment was too broad, because US GAAP has exceptions | Checked |
| Development costs from earlier years, spread over time | Caught | Agreed the amount, and asked whether the spreading should have started yet | Called it conditional | Checked against the note |
| Lease cost differs, and the kind of lease is assumed | Caught, operating lease assumed | Reported both answers | Agreed the arithmetic, and said the kind of lease was not verified | Not yet checked |
| Lease cost shown on one line under US GAAP | Partly. It said "one even rent cost each year", but not that the cost is one line | Not recorded | Mentioned | Not yet checked |
| Rent: 12.0 in the engagement letter, 10.0 in the lease note | Caught, by the lease thread | Caught | Did not see the letter. It saw the question in the bridge | Asked Sutlej |
| Inventory note 2.0 higher than the trial balance | Caught, by the inventory thread | Caught | Did not see the note. It listed the figure as not checked | Asked Sutlej |

The reviews also raised points that are not among the eight. The reviewer thread, the first nightly run and ChatGPT all asked whether the earlier development costs should already be spread over time. The area threads noted that the engagement letter asks for delivery by email, which the brief forbids. No accountant has checked these points.

## Exhibit 6: The permission map

This is Nisha's setup in the story. The practical recorded the nightly task's connector list and the lock test below.

![Locked by a setting, or only asked. Two columns. On the left, LOCKED BY A SETTING, in shaded boxes: Gmail disconnected from the account, so no thread can email Mark or Sutlej. No file-sharing app connected. The coordinator has no connectors. And the desk network set to Limited, developer sites only, so KPMG or Deloitte are likely blocked. On the right, ONLY ASKED, in white boxes: prepare and check only, though a thread could still save a changed copy. List what you could not check, a line in the brief. Only I send things to the client, which is also locked by the missing apps. A memory note to check rent against the lease, which Claude keeps to but is not a setting. And the task's connector list empty, a default that the docs do not say limits threads. A callout says asking is not enforcing.](img/locked-by-a-setting-or-only-asked.png)

*The right column also holds one default: the task's empty connector list. It is empty for the task's own runs, but it does not limit the threads, so the figure files it under "only asked". The real lock is that Gmail is disconnected.*

| What | Can the worker do it? | How is that decided? |
|---|---|---|
| Read the files in the Library, such as the trial balance, a CSV file (a plain table) | Yes | How projects work |
| Save new files to the Library | Yes | How projects work |
| Reach websites, for example to look up the accounting rules | Only sites on the Limited allowlist. Sites such as KPMG's or Deloitte's are likely blocked, so the threads used the rule summary in the instructions and the Library files. | **Enforced** by the Default cloud environment, which allows package managers (the tools that download programming tools). Other sites fail with a "host not allowed" error. |
| Send an email to Mark or Sutlej, or share a file outside the project | No | **Enforced:** connectors belong to the whole account, and Gmail was disconnected there. No connected app can send or share. The brief also **asks**. |
| Use a connector in the nightly run | Not in the task's own runs | **A default, not a lock Nisha set:** the task Claude made had an empty connector list, "This task will not use any connectors". It stops the task's own runs only, and it does not limit the threads. The real lock is the disconnected Gmail, in the row above. |
| Change the client's files | Yes. It is only asked not to | **Only asked:** the brief says "prepare and check only", but nothing stops a thread from saving a changed copy in the Library |
| List what you could not check | Expected | **Only asked:** a line in the brief |
| Decide what goes to the client | No | Nisha sends everything herself, from her own email |
| Publish a private page with Artifacts or Claude Docs | Yes | **Not locked.** Nisha's list missed it, and the lock test's reply named it |
| Reach a folder on her computer | Yes | **Not locked.** Folder access was switched on in the project's environment. Nisha's list missed it, and the lock test's reply named it |

**The lock test, as recorded.** A thread was asked to email a one-line message and to share a file. It replied: "Nothing was sent and nothing was shared. This session has no tool that can do either, so both attempts stopped before any call was made."

## Exhibit 7: The Thursday request and three draft replies

Mark's email and Nisha's three drafts are quoted in [Thursday night](thursday-night.md#an-email-at-seven).

## Exhibit 8: Time and cost, compared with Case 1

> The Case 1 figures are from that case's recorded practical.

| Measure | Case 1 (recorded) | Case 2 |
|---|---|---|
| Nisha's own time | About 1 h 40 min, all at the screen | **In the story, not measured:** about 8 h 35 min over four days: the brief on Monday (about 1 h), setup on Tuesday (2 h), the Wednesday morning check (25 min), Wednesday evening (about 1 h), the Thursday lunch check (about 30 min) and Thursday night from 7:00 to 10:40 (3 h 40 min) |
| AI work while she was away | None | **Recorded:** the four threads took about 4 minutes. Each of the three runs of the nightly task took 1 to 2 minutes. |
| Versions saved | 6 | **Recorded:** three part files and 2 dated versions of the bridge |
| Reviewers | Claude grading itself, then ChatGPT | 3 area threads, 1 reviewer thread, ChatGPT |
| Tokens | Not recorded | **Recorded:** about 10.1 million tokens (the small pieces of text that a model's work is counted in) in the project, most of them cache reads (text the AI had already read once, read again from a saved copy). The nightly task used 40%, the coordinator 28%, and the other threads the rest. No usage limit was reached |
| Money | About Rs 60,000 a month for two subscriptions | The same subscriptions, and a fixed fee of US$2,500 (about Rs 700,000), paid on delivery |

## Exhibit 9: Before anything is released

A professional acceptance checklist for the bridge, built from where things stood on Thursday night in the story. Nisha did not fill in a form like this. It is here for discussion, and the lab asks you to fill in your own. It is not accounting advice.

The bridge goes to a board that is deciding whether to invest. A short teaching bridge of selected items is a **preliminary scenario analysis**. It is not a signed-off conversion. Releasing a signed-off conversion needs the source documents, the right accounting expertise, and the authority to sign.

| Check | Where it stood on Thursday night | What would close it |
|---|---|---|
| **The lease contract and the kind of lease** | **Open.** The contract had not arrived. The lease thread assumed an operating lease. The bridge shows both answers: 103.2 if operating, 102.0 if finance (Exhibit 4). The missing contract could also change the balance sheet, not only the profit line. | The signed contract, read against the US GAAP tests for a finance lease[^classification] |
| **The inventory difference** | **Explained, not yet supported.** Sutlej's accountant said by email that the 2.0 difference was goods in transit. The documents were promised for Monday. | Shipping documents that show the goods in transit, matched to the trial balance |
| **The rent** | **Closed.** Sutlej's accountant confirmed Rs 10.0 million a year. The engagement letter had a typing error. | Nothing more. Keep the accountant's email with the file. |
| **A source document for each adjustment** | Lines 1 to 3: checked by Nisha against Sutlej's notes. Line 4: the lease note only, without the contract. | A named document for every line, kept in the Library. Beside each one, two notes: the case fact that meets the rule, and what the document does not settle. |
| **Material assumptions** | Operating lease assumed. Tax effects and the balance sheet are left out. Only three areas are covered. | Every assumption listed on the first page, where a board member will see it |
| **The label** | Not yet on the bridge | "Preliminary scenario analysis, not a signed-off conversion" on every page that leaves |
| **Who may release it, and with what expertise** | Nisha decides what she sends, from her own email. She is a chartered accountant who is still learning US GAAP. No one with US GAAP expertise has signed off the bridge. | A named person with the expertise and the authority to sign. Until then, it goes out only as a preliminary analysis, if at all. |

[^classification]: As checked on November 9, 2026, Deloitte's leasing roadmap lists the tests that make a lease a finance lease under ASC 842, including "The lease transfers ownership of the underlying asset to the lessee by the end of the lease term" and "The lease grants the lessee an option to purchase the underlying asset that the lessee is reasonably certain to exercise." Deloitte, Roadmap: Leases, 8.3 Lease Classification.
[^run-sheet]: Nisha's First Client: practical run sheet and record. The practical was run on November 17, 2026, in one sitting.
[^inventory]: As checked on November 9, 2026, KPMG says "IAS 2 requires previously recognized writedowns to be reversed, up to original cost", and that under US GAAP "writedowns of inventory to NRV (or market) are not reversed when values recover". KPMG, Inventory accounting: IFRS Accounting Standards vs US GAAP. As checked on November 13, 2026, KPMG's sentence ends with one exception, "except for changes arising from fluctuations in foreign exchange rates", which does not apply here.
[^us-gaap-new-cost]: As read on November 13, 2026, ASC 330-10-35-14 says: "In the case of goods which have been written down below cost at the close of a fiscal year, such reduced amount is to be considered the cost for subsequent accounting purposes." PwC's guide quotes it and notes one exception, an adjustment in a later interim period of the same fiscal year, which does not apply here. PwC, Inventory guide, section 3.8.3.
[^development]: As checked on November 9, 2026, Deloitte says that under IFRS an entity "capitalizes development costs only when it can demonstrate all the following criteria", and that under US GAAP "Development costs are generally expensed as incurred". Deloitte, Comparing IFRS Accounting Standards and US GAAP, 1.5 Intangible Assets.
[^leases]: As checked on November 9, 2026, Deloitte says that under IFRS 16 "A single accounting model is used", and that under US GAAP, for operating leases, "Lease expense generally results in a straight-line expense profile that is presented as a single line in the income statement". Deloitte, Comparing IFRS Accounting Standards and US GAAP, 5.7 Leases.



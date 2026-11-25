# A paid job (/claude-and-chatgpt-2/case-2-nishas-first-client/a-paid-job)

---
type: Document
title: "A paid job"
description: "Nisha's Monday choice, her first client, the IFRS to US GAAP bridge he needs by Thursday, and the brief she writes for it."
status: stable
order: 0.61
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00D"
part: Front
expert_status: required
concepts: [ "The client job" ]
last_verified: 2026-11-09
sources:
  - id: case-1
    title: "Claude and ChatGPT 2.0 Case 1: Nisha's AI Team"
    resource: "../case-1-nishas-ai-team/overview.md"
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
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Monday morning

[Case 1](../case-1-nishas-ai-team/a-company-of-one.md) ended with a choice. By Monday morning, Nisha had to decide how to spend her evenings. She could write her book, change her method, or take a paid job for a foreign client.

She chose the paid job.

It came through her mentor. A small US company, Northfield Home Goods (a fictional name), wanted to buy a share in a textile exporter in Faisalabad, Pakistan. The exporter, Sutlej Weavers (also fictional), reported its accounts under IFRS, the international accounting rules used in Pakistan and many other countries. Northfield's board thought in US GAAP, the American accounting rules. Before its meeting on Friday morning, the board wanted to know one thing: what would the exporter's profit look like under US GAAP?

Mark Ellis, Northfield's finance director, wrote to Nisha on Monday evening.

*"We do not need a full conversion. We need a short bridge, from IFRS profit to US GAAP profit, for three areas: inventory, leases and development costs. The board meets Friday at 9 a.m. New York time. I need the file by Thursday, 6 p.m. New York time. The fee is fixed: US$2,500, paid on delivery."*

Nisha did the sum in her head. US$2,500 was about 700,000 Pakistani rupees (Rs 700,000). That was more than a month of her rent. And if this went well, Mark said, there could be five more jobs like it.

There was one problem. Nisha still had her day job. She could work on Mark's job only in the evenings, from Monday to Thursday. Four evenings. She was also still learning US GAAP.

## What a bridge is

A **bridge** (also called a reconciliation) starts with a number under one set of rules and walks, one step at a time, to the same number under the other set of rules. Each step is one difference between the rules, with its amount.

Nisha already knew the three areas Mark had named were places where IFRS and US GAAP disagree:

- **Inventory.** When the value of goods falls, both sets of rules write the goods down (lower their recorded value). If the value later recovers, IFRS requires the write-down to be reversed, up to the original cost. US GAAP does not allow the reversal[^inventory] of a write-down made at a year-end.[^us-gaap-new-cost]
- **Development costs.** Under IFRS, some costs of developing a new product or process must be recorded as an asset when strict tests are met. Under US GAAP, development costs are generally treated as an expense when they are spent.[^development]
- **Leases.** For the company that rents an asset, such as a warehouse, the two sets of rules show the yearly cost differently. Under IFRS, the lease cost is split into depreciation (the asset's cost spread over its life) and interest. That split makes the cost higher in the early years and lower later. Under US GAAP, the cost of a usual (operating) lease is one even amount each year, on a single line.[^leases] Under US GAAP there are two kinds of lease. For a finance lease, the cost follows a pattern close to IFRS. Which kind a lease is depends on its contract, for example whether the warehouse passes to Sutlej at the end of the lease.[^classification]

Each difference was simple to say. Finding every place it touched Sutlej's accounts, and getting the amounts right, was the work.

## The brief

On Monday night, Nisha did not open Claude first. She opened a blank page and wrote a brief, in the four parts she had learned in [One job, start to finish](../new-way-of-working/one-job.md). [Exhibit 1](exhibits.md#exhibit-1-the-engagement-brief) has it in full. The outcome was the bridge for the three areas, done when every adjustment had an amount, both treatments and a source, and every assumption was listed. The worker could use only the files in the project. The constraints ended with two lines: never send, share or publish anything, and never contact Mark or Sutlej.

Those last lines mattered most to her. In Case 1, she had been in the room every minute. This time, the work would happen at night, while she slept.

Next, [Building the AI Worker](building-the-ai-worker.md).

[^inventory]: As checked on November 9, 2026, KPMG says that when net realizable value increases, "IAS 2 requires previously recognized writedowns to be reversed, up to original cost", and that under US GAAP "writedowns of inventory to NRV (or market) are not reversed when values recover". KPMG, Inventory accounting: IFRS Accounting Standards vs US GAAP. As checked on November 13, 2026, KPMG's sentence ends with one exception, "except for changes arising from fluctuations in foreign exchange rates", which does not apply here.
[^us-gaap-new-cost]: As read on November 13, 2026, ASC 330-10-35-14 says: "In the case of goods which have been written down below cost at the close of a fiscal year, such reduced amount is to be considered the cost for subsequent accounting purposes." PwC's guide quotes it and notes one exception, an adjustment in a later interim period of the same fiscal year, which does not apply here. PwC, Inventory guide, section 3.8.3.
[^development]: As checked on November 9, 2026, Deloitte says that under IFRS an entity "capitalizes development costs only when it can demonstrate all the following criteria", and that under US GAAP "Development costs are generally expensed as incurred", with exceptions for some software costs. Deloitte, Comparing IFRS Accounting Standards and US GAAP, 1.5 Intangible Assets.
[^leases]: As checked on November 9, 2026, Deloitte says that under IFRS 16 "A single accounting model is used", with interest and amortization "presented separately in the income statement". Under US GAAP "There are two accounting models for leases", and for operating leases "Lease expense generally results in a straight-line expense profile that is presented as a single line in the income statement". Deloitte, Comparing IFRS Accounting Standards and US GAAP, 5.7 Leases.
[^classification]: As checked on November 9, 2026, Deloitte's leasing roadmap lists the tests that make a lease a finance lease under ASC 842, including "The lease transfers ownership of the underlying asset to the lessee by the end of the lease term" and "The lease grants the lessee an option to purchase the underlying asset that the lessee is reasonably certain to exercise." It describes "the overall straight-line expense approach generally prescribed for operating leases". Deloitte, Roadmap: Leases, 8.3 Lease Classification.



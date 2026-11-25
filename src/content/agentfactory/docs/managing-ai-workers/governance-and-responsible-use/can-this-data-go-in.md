# 10.2 Can this data go in, and by which route? (/managing-ai-workers/governance-and-responsible-use/can-this-data-go-in)

---
type: Document
title: "10.2 Can this data go in, and by which route?"
description: "How to decide what data a task needs before it goes to an AI tool, remove the rest without breaking the task, and check whether the way it reaches the AI is approved for it, with what each AI vendor's privacy controls do and do not decide."
status: stable
order: 210.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "10"
part: II
expert_status: required
concepts: [ "10.2" ]
last_verified: 2026-10-08
sources:
  - id: v1-governance
    title: "Governance, Risk & Responsible Use: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/governance-risk-responsible-use-crash-course
  - id: v1-code-you-never-write
    title: "Code You Never Write: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/code-you-never-write-crash-course
  - id: anthropic-memory
    title: "Use Claude's chat search and memory to build on previous context (Claude Help Center, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
  - id: anthropic-training-commercial
    title: "Is my data used for model training? Commercial products (Anthropic Privacy Center, updated 18 August 2026, verified 2026-11-18)"
    resource: https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training
  - id: anthropic-training-consumer
    title: "Is my data used for model training? (Anthropic Privacy Center, updated 16 March 2026, verified 2026-11-18)"
    resource: https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training
  - id: openai-data-controls
    title: "Data controls in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A friend asks to borrow your car for a day. You give them the car key, not your house keys and your bank card. The task needs one key.

**What you will learn.** How to decide what data a task needs, remove the rest without breaking the task, and check that the way it reaches the AI is approved for it. You practice it in Tasks 3 and 4 of the lab.

**Why it matters.** Data you never sent cannot leak, and most tasks need less than the whole file.

**Friday, December 11, 10:00 a.m.** The duplicate check still has to run before the year-end tax forms. Dave and Maria start from her Sunday upload, and decide what the check needs before they decide where it runs.

## What the task needs

Decide in this order:

1. **Classify the data.** This book uses three tiers. Translate them into your organization's labels, and never replace its labels with them.
   - *Green:* public, or approved for broad use. A total is not green just because it is a total.
   - *Yellow:* check first or add a control. Internal-only documents, customer or vendor contact details, employee identifiers, confidential drafts.
   - *Red:* only through a route approved for this kind of data. Passwords and access keys, bank account numbers, government ID numbers, health records, privileged legal advice, and material whose license forbids copying it.
2. **Ask whether the task needs the identifiers, or only the pattern.** Identifiers point to one exact person or vendor. Spending trends need the pattern. Paying one vendor needs the account number.
3. **Confirm the route, and what the data may be used for** (below).
4. **Choose the control.**

If you are unsure between two tiers, use the higher one until someone who owns the policy says otherwise.[^v1-governance] Some data, such as Social Security numbers, health information and payment card numbers, has its own rules, set by law or contract. If you do not know which rule applies, treat it as red and ask.

The duplicate check did not need bank account numbers, or full tax IDs. Names and addresses, with the type of tax ID and its last four digits, mark likely matches for a person to confirm. A match is a candidate, not proof.

### How do you cut a file down before it goes in?

Four words describe what you do to a file before it goes in:

| Word | What it means | What it does to the tier |
| --- | --- | --- |
| **Redaction** | Removing the fields the task does not need | Lowers it, if nothing left can point to a person. Maria's redacted file still names sole proprietors, so it drops from red to yellow: safer, not safe |
| **Pseudonymized** | Names replaced with labels or codes, such as "Vendor 17", while a list that links them back still exists | Keeps its tier |
| **De-identified** | The details that point to a person removed or replaced, on your side, before the upload | What some policies require before any AI work |
| **Anonymous** | No row can point to one person, even with other information | The only one that is no longer personal data |

Redaction can fail in two ways. It can leave enough clues to identify someone, such as an unusual name with an exact address. Or it can remove what the task needed, so the result looks safe and finds nothing.[^v1-governance] So check a redacted file against a few answers you already know before you trust it.[^v1-code-you-never-write]

**Change the data before it goes in.** If you upload a file and then ask the AI to remove the names, you have already shared them.

- **Check free-text fields.** A comments or notes column can name a person, a health detail or a dispute after the name column is gone. Read it, or leave it out.
- **Keep the linking list outside the AI tool.** Codes still do not make the data anonymous: a job title, a site and a start date together can point to one person. Widen such details, such as a start date to its year.

> **Outside finance: the attrition analysis.** Brightline's HR lead wants to know why warehouse staff leave, and HR policy lets staff records out for analysis only when de-identified. So she removes names and addresses from the export, replaces each employee number with a code, and keeps the linking list outside the AI tool. Two exit comments name a supervisor and one mentions an illness, so she removes those details too. What is left is still confidential. She uploads it through the company workspace, and turns Memory off for this chat in the "+" menu before her first message, so nothing from it returns in a later chat. The chat still stays in her history, where a search can find it.[^anthropic-memory]

### Is a file for analysis different?

**A file for analysis is still an upload.** When the AI runs code on a file ([2.4](../../ai-worker-paradigm/what-is-an-ai-worker/surface-and-model.md)), the whole file goes in. So keep only the rows and columns the question needs, or upload totals, through a route approved for the file's tier. And a file from outside can carry hidden instructions, so upload only files from sources you trust ([7.3](../the-authority-envelope/untrusted-input.md)).

### What was the data collected for?

Data also arrives with a **purpose**: the reason it was collected. Brightline collected contractors' tax IDs to file tax forms. Training an outside company's AI model was never part of that purpose. When a new use is outside the purpose, the person who owns the data decides.[^v1-governance]

![The title reads "Can this data go in?" The line below it reads "Start with the data, not with a privacy feature." Step 1, "Classify the data": green, public or approved for broad use. Yellow, internal or personal, check first. Red, sensitive, approved routes only. A note reads "Unsure? Use the higher tier and ask." Step 2 asks "Does the task need identifiers?" No leads to "Remove unnecessary identifiers. Test against known answers." Yes leads to "Keep only the identifiers the task needs." Both lead to step 3, "Confirm the route and purpose: is this route approved for the remaining data and this use?" A side box reads "Not approved or unsure? Stop and ask." "Approved" leads to step 4, "Apply and verify the controls": access, training, retention, sharing. A panel on the right reads "Brightline example: Maria's vendor clean-up." It lists what to keep: names and addresses, and tax ID type and last four digits. What to remove: bank details, full tax IDs and unneeded contact details. Below it: "Redact locally before uploading. Check that likely duplicate pairs are still found." A warning reads "Still personal data. Still needs an approved route." A note reads "Last-four matches are candidates, not proof." A banner at the bottom reads "Less data reduces exposure. It does not grant permission."](img/data-decision.png)

*Figure 10.2. Can this data go in? The panel on the right applies it to Maria's vendor clean-up.*

## The way in

A **route** is the way data reaches an AI system: a chat, a project, an uploaded file, a connector or an API call from another program. So the useful question is not "Is this AI product approved?" It is "Is this route approved for this data and this purpose?"[^v1-governance] One AI vendor can offer a route your policy approves and one it does not. Routes differ in who can see the data, how long it is kept, and whether it may be used for training, to improve the AI vendor's models. Maria's mistake was not the AI vendor. It was the personal account.

**Training depends on the account,** not on the AI vendor: on plans for companies it is off by default, and on personal plans each user's own setting decides ([10.6](both-ai-vendors.md#product-reference)).[^anthropic-training-commercial][^anthropic-training-consumer][^openai-data-controls]

**A private chat limits what is kept, not what you sent.** An incognito or temporary chat, a project only you can open, or deleting the file later each limits what is kept, who sees it or for how long. None of them changes what you disclosed, and when a policy requires de-identified data, none of them makes identifiable data acceptable. An instruction such as "Do not keep this" is a wish, not a control.[^v1-governance] Use the settings after you have cut the data, never instead of it: set memory and private chats to match how sensitive the work is.

**What stays true.** No setting answers whether this data may go through this route for this purpose. Your policy and the data's owner answer that. The settings only carry out the answer.

Dave's term, by 10:40: the duplicate check gets only names, addresses and the tax ID type with its last four digits, and it runs only through a route approved for yellow data.

[^v1-governance]: Governance, Risk & Responsible Use: A Crash Course, Panaversity, first edition.
[^v1-code-you-never-write]: Code You Never Write: A Crash Course, Panaversity, first edition.
[^anthropic-memory]: Use Claude's chat search and memory to build on previous context, Claude Help Center.
[^anthropic-training-commercial]: Is my data used for model training? Commercial products, Anthropic Privacy Center.
[^anthropic-training-consumer]: Is my data used for model training?, Anthropic Privacy Center.
[^openai-data-controls]: Data controls in ChatGPT, OpenAI Help Center.



# 8.3 The workspace and the official record (/managing-ai-workers/context-memory-knowledge-and-state/configure-the-workspace)

---
type: Document
title: "8.3 The workspace and the official record"
description: "Set up the project an AI Worker answers from, keep approved rules in KSoR, and own that knowledge so every copy stays current."
status: stable
order: 208.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "08"
part: II
expert_status: required
concepts: [ "8.3" ]
last_verified: 2026-10-07
sources:
  - id: ksor
    title: "KSoR, the Knowledge System of Record (Panaversity, GitHub, verified 2026-10-07)"
    resource: https://github.com/panaversity/ksor
  - id: v1-skills-connectors
    title: "Skills & Connectors: Teach AI Once, Connect It to Your Apps (Panaversity, first edition, verified 2026-10-07)"
    resource: https://agentfactory1.panaversity.org/docs/skills-connectors-crash-course
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**What you will learn.** How a company keeps the rules it has approved, how to set up the project an AI Worker answers from, and the habits that keep every copy of the rules current. You practice it in Tasks 4, 5, 6, 10, 11 and 12 of the lab. You also learn to write instructions so that the same case gets the same kind of answer every time.

**Why it matters.** Everything in a project can become an answer. Tuesday's third wrong answer came from onboarding notes that sat beside the approved policy, and nothing said which one was official.

**Wednesday, November 4.** At 10 that morning, Dave approves five short files that hold Brightline's AP rules. That afternoon, Maria sets up the project so the worker answers from them, and only them. On Monday, November 9, Dave changes one, and she keeps every copy current.

## What Dave approves: the official record

**In everyday life.** Think of a school's official handbook. Teachers may have notes, but when parents argue about a rule, the page the head of the school approved settles it.

The five files are concepts in a KSoR, with the three lines you met in [4.2](../../ai-worker-paradigm/the-architecture-in-one-picture/ksor-knows.md).[^ksor]

**One authoritative record.** Each rule is written once, in a **concept**, a short Markdown file whose header says who owns it and its status: "invoice approval threshold" is one concept, not a paragraph in three files. Maria wrote the five on Tuesday by splitting the policy one topic to a concept, merging duplicates, and keeping rules that depend on each other together: if a rule needs a step from another section, the concept holds both and cites both.

**One governance boundary.** A concept enters the record as a **draft**. It becomes **stable**, the status that may be served to people and AI tools, only when an authorized person approves it, and the approval is recorded. A replaced concept becomes **deprecated** and points to its successor.[^ksor] So nothing serves until it is approved: until 10 on Wednesday, the drafts stayed out of every project. Taking knowledge out of use is a takedown ([Chapter 10](../governance-and-responsible-use/ownership-and-takedown.md)).

Figure 8.6 shows a concept's header, with its effective date (when the rule starts to apply) and its review date (written stale_after). The rule has applied since Dave approved AP policy version 3 on September 1, 2026, and the concept was approved on November 4.

![The title reads "A KSoR concept and its lifecycle." The line below it reads "One topic, one governed record. Approval makes a draft eligible for use." On the left, the file knowledge/invoice-approval-threshold.md, with selected fields from its header: type Policy, title Invoice approval threshold, status stable, a source that is AP policy version 3, a stale_after date of 2027-03-31, audience ap-team, owner Dave Kowalski, an approval by Dave Kowalski on 2026-11-04, and an effective_from date of 2026-09-01. Status, owner and approval are highlighted. Below the header, the policy text: "Invoices over $5,000.00 need the controller's approval before payment." On the right, "Three status values." Draft: authoring and review only, not served as approved policy. An arrow labeled "Recorded approval by an authorized person" leads to stable: eligible for governed serving, and it must be in force, within its review date and allowed for the audience. An arrow labeled "Replaced by a successor" leads to deprecated: excluded from operational policy retrieval, and kept with a link to its successor. A note reads "Changes to a stable concept require re-approval." A red banner at the foot reads "Approval is an event, not a status value. Takedown is a separate recorded withdrawal (Chapter 10)."](img/ksor-concept.png)

*Figure 8.6. A KSoR concept and its lifecycle. Only stable concepts in force, past their effective date and before their review date, are served to machines.*

**Many open projections.** The record's own routes ([4.2](../../ai-worker-paradigm/the-architecture-in-one-picture/ksor-knows.md)) let nothing out unless it is stable, in force, before its review date, and allowed for that reader.[^ksor] Copying concepts into a project by hand is not one of those routes, so in Part II that check is yours. Part V builds the server that enforces it.

Abstention is a feature: when the record does not cover a question, the answer is "the record does not say."[^ksor] In a project, nothing enforces citing or abstaining, so the instructions below ask for both.

## What the project loads

**In everyday life.** Think of a shared kitchen. There are house rules on the fridge for everyone, your own labels on your shelf, and a recipe card for tonight's dinner. Old recipe cards left in the drawer still get used.

A project is a workspace in an AI product for one body of work, and every conversation in it begins already briefed.[^v1-skills-connectors] One body of work gets one project: AP and payroll would each get their own.

**Remove what competes.** The old onboarding notes and the October 23 status list leave the project. Every file you add is a possible answer.

### Which files go in, and by which route?

Then the five concepts go in. Files you add to a project are available to every conversation in it. Each one is a knowledge source. An uploaded file is a copy, frozen at the moment you uploaded it. Knowledge reaches a project by one of three routes, each with its own update after a change:

| Route | What to do after a change |
| --- | --- |
| Uploaded copy | Replace it |
| Fetched when asked: a connector gets the file each time it is needed | Check that answers name the new approval as their source |
| Synced or indexed: the product refreshes its copy, or prepares the file for search | Check that the sync ran |

Upload knowledge that must be exactly what its owner approved. Use the other routes only for a source that holds nothing but approved content. So choose the route by how the source changes: weekly price lists in an approved-only folder suit a connector, and a contract quoted exactly suits an upload.

### What may a connector reach?

A connector lets the worker reach a source in the place where it is kept, such as a shared drive, with your own permissions.[^v1-skills-connectors] Reaching a source does not make it approved or current: a connected folder of drafts still holds only drafts.

- **Scope it.** A connector sees what your account sees. Claude's Drive connector has no setting for one folder: once it is on, every thread in every project can reach every file your account can open. So turn it off unless the job needs it, and add only the files or folders the work needs to the project's own files.
- **Review it.** Check what is connected at every project review, and remove what the work no longer uses.

At Brightline, Maria first connected the AP Worker's project to the whole finance drive. The worker then answered a question about the approval limit from a draft of next year's policy: the connector reached every file her account could see, and a draft reads like a policy. She removed the drive from the project and added only the approved concepts to its files. In Claude, removing it means turning the Drive connector off on her account, because no setting keeps a connector out of one project ([8.4](both-ai-vendors.md#how-to-set-up-the-project-in-your-app)).

### Which instructions load, and at which level?

Standing instructions are rules that load with every conversation. They are also called persistent instructions. They come at up to three levels, and each line goes at the level it is true for:

- Organization instructions hold company rules for everyone in the organization, such as "Never put a vendor's bank account number in a reply."
- Your account instructions say how you work in every chat, such as Maria's "Write dates with the month spelled out."
- Project instructions give this worker's role, its sources (where its information comes from) and its limits.

On top of these, a brief still sets each task ([Chapter 5](../the-four-part-brief/overview.md)). The line between the two runs both ways. A rule for every conversation moves into the instructions, as the Northern Maple rule did. A detail for one task, such as "This week's run is Friday, October 23," stays in that week's brief.

### What do good project instructions say?

Good project instructions for a worker that answers from governed knowledge say six things. "You" means the worker.

1. *Role.* "You answer AP policy questions for Brightline's AP team."
2. *Authority.* "Policy answers come only from the concept files in this project, each marked stable. Nothing else in the project, your memory or general knowledge counts as Brightline policy."
3. *Cite.* "Name the concept title and its approval date for every policy claim."
4. *Abstain.* "If the concepts do not answer the question, say so and name who decides. Do not fill the gap."
5. *State.* "You cannot see current payment or vendor status. If a case file in this project covers the invoice, give its latest-known status, with its date and source, and say it is not verified current. For current status, point to the accounting system or to Maria."
6. *Conflicts.* "If memory or any file disagrees with a concept, the concept wins. Say that there was a conflict."

### What do you list before you write them?

The use cases. Lines 4 to 6 each settle a hard case before it comes up. With no line for a case, the worker may handle it one way today and another way tomorrow. Explaining the case in each request does not fix this, because each person explains it in their own way. So before you write instructions for work that repeats, list its use cases: the kinds of requests it will meet, the hard ones too. Give each a line, then add the constraints every answer must follow, like line 3.

The instructions never repeat the policy: line 2 points to it, so it is kept in one place ([Case 3, Nisha's Firm](../../claude-and-chatgpt-2/case-3-nishas-firm/overview.md) shows why).

### Is it an instruction, knowledge or a skill?

Standing instructions load with every conversation. Knowledge is what the worker answers from, and a skill says how to do the work. A skill is a saved procedure: the steps for one kind of task, with any files or scripts they need. Maria's steps for checking an invoice could become an invoice-check skill ([8.5](skills-and-plugins.md)).

![The title reads "Configuring a project." The line below it reads "Define how the worker operates, which sources it uses, and what counts as authority." On the left, "Instructions: define the work," four stacked boxes. Organization instructions: company-wide rules set by an administrator. Account instructions: personal working preferences. Project instructions, highlighted: this worker's role, sources and limits, with six tags for role, authority, cite, abstain, state and conflicts. Task brief: the outcome and constraints for this task. A note reads "These are scopes. Availability and conflict rules vary by product." On the right, "Knowledge: manage the source," three boxes. Uploaded copy: a snapshot of the source at upload time, so after an approved change, replace the copy. On-demand retrieval: fetch the source through a connector when needed, and check the source and approved revision. Synced or indexed source: content is refreshed or indexed for retrieval, so check sync completion and freshness. A note reads "A successful retrieval does not prove the content is current or approved." A red box at the foot reads "Access is not approval. KSoR governs which knowledge is authoritative. Project instructions point to that approved source." The last line says to keep policy in its governed record and avoid duplicating it in instructions.](img/workspace.png)

*Figure 8.7. Configuring a project: the instructions on the left, and the three routes for knowledge on the right.*

## Monday, November 9: change once, refresh every copy

**In everyday life.** A restaurant changes its allergy policy. The manager first updates the main copy of the policy. Then the manager replaces the printed sheet at every kitchen station, and signs a checklist.

On November 9, Dave approves a currency rule as policy: an invoice in any currency other than USD now needs his approval, whatever the amount. Dave is the **knowledge owner**, the person who decides which knowledge an AI Worker may treat as approved and keeps it correct and current: a management job, not a technical one. Maria, the maintainer, drafts and maintains the concepts, and in the lab you take her role.

Change once, then refresh every copy.

**Change once.** Maria adds the rule to the invoice approval threshold concept. The same day, she removes her working rule, "Flag every invoice not in USD to Dave," from the project instructions, so the rule has one official place.

**Refresh every copy, by its route.** Figure 8.8 shows the two copies. She updates the Google Doc copy in the AP / Approved knowledge folder and adds it again to her test project, a second Claude project where she tries changes first, which holds it from Drive. In the AP Worker's project, she replaces the uploaded file. In each project, she checks that answers name the November 9 approval as their source. Then she records it in a **refresh log** with five columns: concept, copy location, approval date held, refreshed by, refreshed on.

**Review on schedule.** On each concept's review date, the owner confirms it, changes it or retires it.

![The title reads "One record, many copies." The line below it reads "Approve the change once. Refresh every copy. Verify which approval each holds." On the left, the KSoR record, the authoritative source, holds five concepts: invoice approval threshold, weekly payment run, duplicate invoices, bank-detail changes and capitalization. A note reads "Only approved, eligible concepts are distributed." An arrow labeled Drive leads to a project copy from Drive: add the approved file again, then add the changed file from Drive, verify the new approval is present, and record the refresh. An arrow labeled Upload leads to an uploaded project copy, a snapshot that must be replaced: remove the old upload, add the newly approved file, and verify and record the refresh. Below, a refresh log after the November 9 change has two rows for the approval threshold. Project 1 holds the approval of 2026-11-09, added again, checked by Maria on November 9. Project 2 holds the approval of 2026-11-09, by a replaced upload, checked by Maria on November 9. A dashed box, "Later: governed retrieval," reads "Serve knowledge through MCP instead of manually maintaining project uploads. Governance filters what the worker may retrieve." A red banner reads "A successful sync or upload is not enough: verify the approved revision reached the worker."](img/one-record-copies.png)

*Figure 8.8. One record, many copies, and the refresh log after the November 9 change.*

> **Contrast: a compliance research worker.** A compliance team at a mid-size bank runs an AI Worker that answers staff questions about lending rules. The hard part is that rules change over time: a rule takes effect on a set date, so the worker must answer "which version was in force on March 1?" as well as "what applies now?" The five places do different amounts of work:
>
> - Almost all of its value is in the KSoR. There, each regulation and each internal policy is a concept with an owner, an effective date and a source. The compliance officer is the knowledge owner.
> - The worker's instructions demand a citation for every claim, and abstention when a concept says nothing on the question.
> - Memory is off.
> - Context is small: the question and the concepts it retrieves.
> - SSoR and DSoR do little, because the worker handles no matters, no cases carried from start to end, and changes nothing.
>
> Same architecture, different work.

> **Contrast: a customer support worker.** A support worker for an online shop is the opposite case. Each conversation is its own context: one customer, one problem, then a restart.
>
> - KSoR holds the return policy and the warranty terms. The support lead is the knowledge owner, and every policy change reaches the worker the same day.
> - The real risk is state. Each ticket, one customer's problem, has an SSoR record that holds what was promised and tried, so a second worker does not start over.
> - Answers to "Where is my order?" and "Was my refund issued?" still come from the order system every time, never from memory or an earlier chat.
> - Memory holds almost nothing, because remembering one customer's details while serving another is a privacy failure.
>
> Same architecture, different work.

[^ksor]: KSoR, the Knowledge System of Record, Panaversity.
[^v1-skills-connectors]: Skills & Connectors, Panaversity, first edition.



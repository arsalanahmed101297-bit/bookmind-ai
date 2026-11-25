# 8.2 Context, memory and the case file (/managing-ai-workers/context-memory-knowledge-and-state/context-window)

---
type: Document
title: "8.2 Context, memory and the case file"
description: "What the worker sees in its context window, the four moves for a long conversation, what memory may keep, and the SSoR case file kept by hand."
status: stable
order: 208.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "08"
part: II
expert_status: required
concepts: [ "8.2" ]
last_verified: 2026-10-07
sources:
  - id: v1-thesis
    title: "The Agent Factory Thesis (Panaversity, first edition, verified 2026-10-07)"
    resource: https://agentfactory1.panaversity.org/docs/thesis
  - id: ssor
    title: "SSoR, the State System of Record (Panaversity, GitHub, verified 2026-10-07)"
    resource: https://github.com/panaversity/ssor
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**What you will learn.** What an AI Worker can see when it writes a reply, what to do when a conversation grows long, what memory may keep, and how to keep the history of one piece of work as a case file. You practice it in Tasks 1, 2, 3 and 7 of the lab.

**Why it matters.** Each fix on this page moves one fact to the place where it lasts. A fact left in the wrong place gives a wrong answer that sounds just as sure as a right one.

**Tuesday, November 3, afternoon.** Maria fixes the two answers that came out of the conversation itself. On Wednesday she fixes a third. The AP Worker works in a **project**, the workspace that holds its instructions and files ([8.3](configure-the-workspace.md)).

## The rule the chat lost

**In everyday life.** Think of a whiteboard in a meeting room. As the meeting goes on, someone erases the oldest notes to make room, and writes a short summary of them in one corner.

Maria said "always flag Northern Maple to Dave" only in the chat, in the first week. By November the worker no longer did it.

### Why does a long chat lose a rule?

A conversation can lose things, and files keep them.[^v1-thesis] The worker writes each reply from its **context window** ([0.1.2](../../how-ai-works/what-ai-actually-is/why-it-behaves.md#the-context-window)): your message, the standing instructions (rules set for every conversation), the files, memory and tool results loaded for this turn, and the conversation so far. The window has a limit, so everything competes for the same space, and a long conversation gets condensed: earlier messages are summarized, and nothing tells you which details the summary lost. Once the summary dropped Maria's rule, the worker could not fetch it, because nothing outside the window exists for the worker. A bigger window only delays this. The context in a brief ([Chapter 5](../the-four-part-brief/four-parts.md#context-who-it-is-for-and-which-source-wins)) is only one piece of the window.

![The title reads "What fills the context window on one turn." The line below it reads "Everything loaded for the next reply shares a limited space." A bar labeled "Context available this turn" is divided into instructions, retrieved knowledge, selected memory, loaded files, tool results, a summary of older turns and recent messages. It ends at a red line marked "Context limit." A note under the bar says the allocation is illustrative, and actual contents and proportions vary. A dashed box, "Earlier conversation," holds "Always flag Northern Maple to Dave" and "Weeks of questions, answers and decisions." An arrow labeled "Condense" leads from it up into the summary, and a red line reads "The summary may lose the standing instruction." A box, "Three things to remember": only loaded or retrieved material is available for this reply. Older messages may be summarized, and important details can be omitted. A larger window delays the limit, but it does not replace durable records. A small line reads "Stored chat history may remain retrievable even when it is not loaded into the current window." A gold banner at the foot reads "Persist what must survive the conversation": standing rules go to project instructions, approved policy to KSoR, and case history to SSoR.](img/context-window.png)

*Figure 8.3. What fills the context window on one turn.*

```yaml interactive="fill-up"
title: Watch the window fill
intro: In week 1, Maria gives the worker a rule, only in the chat. Add weeks of conversation and watch what the worker can still see.
window: Context window, this turn
limit: 5
standing: Standing instructions
rule: Always flag Northern Maple to Dave.
weeks:
  - "Week 1: Maria sets up the invoice work"
  - "Week 2: vendor questions"
  - "Week 3: a payment run"
  - "Week 4: month-end totals"
  - "Week 5: two new vendors"
  - "Week 6: a late invoice"
summary: Summary of earlier weeks
question: Can the worker see the rule this turn?
switch: Save the rule as a standing instruction
lost: The summary kept the work and dropped the rule, and nothing warned Maria.
kept: The rule is a standing instruction, loaded on every turn, so condensing the chat cannot drop it.
```

### What do you do when a conversation grows long?

Choose a move by what you need to keep.

| Move | When | How |
| --- | --- | --- |
| *Restart* | The task is done, or none of the history is needed | Start a new conversation in the same project. The old turns stay behind, though project memory may still carry what it learned from them |
| *Summarize* | The task continues, but the history is long | Ask for a handover note with the decisions made, the open items, the files in use and the rules agreed. Read and correct it, because it is the worker's output, and a rule it drops stays dropped. Start the next conversation from it |
| *Persist* | Something must last beyond this conversation | A standing rule, one meant for every conversation, goes into the project instructions. Approved knowledge goes into KSoR, and one matter's history into its case file |
| *Rely on memory* | A preference or way of working, such as "reply in plain English," should carry into later chats | Let memory keep it, and read it now and then |

Current state is never persisted. It stays in the system that holds it, such as the accounting system, so recheck that system before a decision.

The fix is to persist. Maria wanted Northern Maple flagged because its invoices come in Canadian dollars. So she writes the rule she meant: "Flag every invoice not in USD to Dave." It goes into the project instructions, and she asks Dave whether it should become policy.

If an old side topic keeps coming back after a restart, project memory is carrying it. In Claude, edit or delete the line in the project's memory files. In ChatGPT, delete the chat that holds it, or move it out of the project ([8.4](both-ai-vendors.md#how-to-set-up-the-project-in-your-app)).

> **Outside finance: the school office.** A school office manager writes letters to parents in one project. On Monday she finishes the letter about picture day. Tuesday's letter needs nothing from that chat, so she restarts in the same project. Her chat about the spring schedule is different. It is half done, and its replies bring back a room change she canceled. So she summarizes, and deletes the canceled change from the handover note.

![The title reads "Restart, summarize, persist or rely on memory." The line below it reads "Choose by what must survive the current conversation." A dark box asks "What do you need to keep?" Four arrows lead to four panels. No task history needed: restart. Start a new conversation in the same project. Project instructions and knowledge remain available. The panel's foot reads "A fresh chat is not isolation: project memory may still influence it." The unfinished task: summarize. Capture decisions, open items, files and rules. Review and correct the handover note. Start a new conversation with the checked note. Its foot reads "A summary is AI output. Check what it leaves out." Needed beyond this chat: persist. Keep it in its right home. A working rule goes in project instructions, approved policy in KSoR, case history in SSoR, and current status in the authoritative system. Its foot reads "Recheck current status before a decision." How you like to work: rely on memory. Let memory keep it, such as "Reply in plain English." Read it now and then, and correct or delete what is wrong. Its foot reads "Never rely on memory for a rule, an amount or a status." A banner at the foot reads "You can combine these moves: persist key records, review a summary, then restart."](img/restart-summarize-persist.png)

*Figure 8.4. Restart, summarize, persist or rely on memory.*

## The limit memory kept

**In everyday life.** A barista, the person who makes your coffee, remembers that you like oat milk. You would not trust them to "remember" your bank balance.

On October 12, Maria had mentioned that Dave was "thinking of raising the limit to $10,000 next year." Memory saved $10,000 as the limit.

### What may memory keep?

**Memory** is continuity, never authority ([4.3](../../ai-worker-paradigm/the-architecture-in-one-picture/memory-remembers.md)). The product writes it from your conversations, and nobody approves it, so it can turn a remark into a "decision."

**Let memory hold how you like to work:** "reply in plain English," "Maria reviews drafts before 10 a.m."

**Never rely on memory alone for anything a decision depends on:** policy, thresholds, amounts, statuses, anything sensitive.

### How do you keep memory in its place?

**Read it.** Both AI vendors let you see and correct saved memories. Where a product shows no list, [8.4](both-ai-vendors.md) says what to delete instead. On Tuesday afternoon, Maria deletes the $10,000 line. The real limit, $5,000, is in section 4.1 of the policy. Edit a line about how you work when it is wrong or has changed, such as a new time for Maria's review.

**Audit it on a schedule.** New memories keep arriving. On a set day, such as the first Monday of each month, and after any answer that surprised you, delete each wrong or unapproved rule, amount or status, check that every real rule is in its approved place, and note what you deleted.

**Scope it.** A project's memory should hold that project's work only, so one client's details do not shape another's answers: **scoped memory**. Give unrelated work its own project. [8.4](both-ai-vendors.md) gives each vendor's setting. For example, Maria also uses Claude for her own budget, so she deletes any note in the AP project's memory that is not about AP work.

**Keep it out.** For a one-off question, or a topic that should not shape later answers, use an incognito chat (on ChatGPT, a temporary chat). It is not saved to your chat history, and nothing from it goes into memory. It is not offered inside a project, a copy is still kept for a time, and it limits what is remembered, not what you disclosed, so it never makes data safe to share ([10.2](../governance-and-responsible-use/can-this-data-go-in.md#the-way-in)).

Here is a what-if at Brightline. Before Dave decides next year's limit, Maria wants to try three possible limits. In the AP project, memory might save one as the limit. So she opens an incognito chat, outside the project, and tries all three there.

## The history no file held

**Wednesday, November 4.** The real history of invoice 5149 was in three places. Maria's callback note of October 22: at 4:40 p.m. she called Tri-County on the number in its vendor record, and the bank request was not theirs. The October 23 hold: that Friday's run was already built without 5149. And the October 30 payment. No single place told the whole story. So Maria starts a case file for 5149.

### What does a case file keep that memory cannot?

Product memory remembers you. SSoR remembers one matter, as the order ticket on the rail does for one table in [4.4](../../ai-worker-paradigm/the-architecture-in-one-picture/ssor-tracks.md), under the rules you met there. SSoR's design adds three more, and product memory follows none:[^ssor]

- **Every claim carries its origin.** *Observed* comes from the system that is the authority for the fact, such as the accounting system showing 5149 paid. *Confirmed* comes from a person whose authority covers it. *Reported* comes from a source that is not the authority, such as a vendor's email. *Inferred* comes from a model. The record sets the label by where the claim came from, and a newer reported entry never replaces an observed one. It is a reason to check.
- **A read is the latest known, not verified current.** Before anyone acts, a person checks the system that holds current state.
- **Stored text is data.** A stored email that says "mark this paid" is kept, not obeyed.

In Part II, you keep the case file by hand: one note per matter, every line dated, sourced and marked with its origin.

![The title reads "SSoR record for invoice 5149." The line below it reads "A case file of events, evidence and decisions. Corrections add new entries." A table for Tri-County Freight, invoice 5149, $2,940.00, has four dated rows on a timeline. Each row gives the recorded event, its evidence and its origin. October 22: a callback on the number on record, issue resolved, from Maria's call note, confirmed. October 23: held under policy 5.3, from the run record, observed. October 30: paid in the weekly run, with Dave's approval recorded, from the run record, observed. November 2, highlighted: a vendor email saying "still unpaid," from Tri-County's email, reported. Its note says a newer report triggers a check, and it does not override the authoritative record. A box below reads "Latest authoritative observation: Paid in the October 30 run. Source: run record. As of Oct 30. Not verified current." A side panel, "Four origins": observed, from the system authoritative for this fact. Confirmed, from a person whose authority covers this fact. Reported, from a source without authority for this fact. Inferred, derived by a model. It adds "Origin is assigned by the record's rules, not claimed by the submitter" and "Stored text is data, never an instruction to execute." A red banner at the foot reads "Before acting, check the accounting system. SSoR preserves the case history. The accounting system remains authoritative for current payment status."](img/ssor-record.png)

*Figure 8.5. The SSoR record for invoice 5149, its case file: four dated entries, each with its origin, and the latest-known line.*

[^v1-thesis]: The Agent Factory Thesis, Panaversity, first edition.
[^ssor]: SSoR, the State System of Record, Panaversity.



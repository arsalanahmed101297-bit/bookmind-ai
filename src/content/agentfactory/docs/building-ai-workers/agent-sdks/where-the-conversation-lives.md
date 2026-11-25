# 22.7 Where the conversation lives (/building-ai-workers/agent-sdks/where-the-conversation-lives)

---
type: Document
title: "22.7 Where the conversation lives"
description: "The five places a conversation can live, from your program to the provider's side, what a session file holds, and what is left after a restart."
status: stable
order: 322.07
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:24Z
chapter: "22"
part: III
expert_status: builder-only
concepts: [ "22.7" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-21T00:02:24Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A patient's file can live in different places. The patient can carry their own folder to every visit. A cabinet at the clinic can hold it. The hospital's central records can hold it. Or nobody keeps it, and the patient explains everything again each time. If the patient loses the folder they carry, only the copies kept elsewhere are left. In this concept, these are the places a conversation can live, and losing the folder is your program restarting.

**What you will learn.** The places a conversation can live, from your own program to the provider's side, and what is left of it after your program restarts.

**Why it matters.** A conversation holds business data, so every copy of it is a copy someone must protect and delete.

**One request, start to finish.** Ana asks two questions in a row: "Which invoices are due this week?" then "Which of those has no purchase order?" The second needs the first's history. The first SDK, by default, wrote a **session file**: a file on disk, under the home folder, holding the whole conversation, including every invoice and amount from the tool. The second question was answered by reading that file back. With the lab's option, the first SDK wrote no session file. The second SDK kept nothing either: the lab's code held the history and passed it to the next run.

### Where can a conversation live?

**State** is the conversation a run continues from. An SDK keeps it in one of five places, from yours to theirs:

| Where it lives | Who holds it | When it fits |
| --- | --- | --- |
| **In your program, passed each time** | Your code | Full control, any model. Chapter 21's array, and the lab's choice for the second SDK |
| **A file or store on your side** | A session, which the SDK writes to a file or a store you choose | Runs that resume later |
| **A conversation on the provider's side** | The provider | Shared state you do not want to hold |
| **A chain of replies on the provider's side** | The provider | The simplest follow-up (Chapter 21.7) |
| **Nowhere after the run** | No one | One question at a time. The lab's choice for the first SDK |

Mixing two of these can send the same history twice, so keep to one.

![Top, one line from left to right, labeled from yours to theirs, with five stops: your program, a file on your side, a conversation on the provider's side, a chain of replies on the provider's side, and nowhere after the run. Two of the stops, your program and nowhere after the run, are filled gold. Below, two panels. Left, filled gold: a session file on disk under the home folder, with resume, continue and fork, and the words holds business data. Right: sessions off, the conversation in memory only, gone when the program ends, with a dashed box below it, small connection logs still written.](img/chapter-21-conversation.png)

*Figure 22.9. Where a conversation can live, and the session file a harness writes unless you turn it off.*

### What is left after a restart, or the next day?

Follow one conversation through four moments: the first question, a follow-up, your program restarting, and the next day. With session files on, the file keeps it, and someone must protect that file. With session files off, it is gone after each run. With the history in your program, it lasts only as long as your code keeps or saves it.

![A grid. Four columns, one per moment: first question, follow-up, program restarts, next day. Three lanes. Session file on: file written on disk, read back from the file, file still on disk, resume from the file, all kept. Session file off: nothing kept, gone, start again, nothing left, ask again, all gone. History in your program: your code holds the history, pass it with the new question, gone unless your code saved it, load what you saved. A legend: kept, and gone, drawn dashed.](img/chapter-21-four-moments.png)

*Figure 22.10. One conversation through four moments, kept three ways.*

An approval waiting for a decision ([22.5](who-may-run-a-tool.md)) works like the third lane of Figure 22.10, history in your program: its run state is text your code saves, so it lives wherever you put it.

### Can a session be picked up again?

With sessions, you can resume one by its id, continue the latest, or fork a copy. Each reads a file someone must protect and delete.

### Can Python turn session files off too?

One language difference matters here. On the first SDK, the option that turns session files off exists in TypeScript only. In Python the lab passes the harness its own flag instead, `extra_args={"no-session-persistence": None}`, which you see in Task 11. Check that no file appears, in whichever language you use.

### What else does a harness do with a conversation?

**Compaction**: when the conversation grows near the model's limit, the harness summarizes the older part and carries on. A **subagent** is a second agent started for part of a job, and only its final message comes back. This worker uses neither. Chapters 26 and 27 do.

**At work.** [Lab 22](lab.md), Task 11: find every copy of a conversation on both SDKs.

**The operating rule:** choose one place for each conversation before the first run, and keep it on your side unless you have a reason. Turn session files off unless you need to resume, and treat every file you keep as business data.



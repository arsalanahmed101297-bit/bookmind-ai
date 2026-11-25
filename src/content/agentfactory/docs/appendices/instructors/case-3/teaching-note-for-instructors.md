# Teaching note (for instructors) (/appendices/instructors/case-3/teaching-note-for-instructors)

---
type: Document
title: "Teaching note (for instructors)"
description: "For instructors: learning objectives, a 75-minute discussion plan built on the five core questions, a board plan with a decision layout, notes on each question, takeaways, advice for non-accountant classes, lab grading, the final assessment, and how to use the practical run sheet."
status: stable
order: 9030
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-20T09:29:28Z
chapter: "F00E"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-10
sources:
  - id: run-sheet
    title: "Nisha's Firm: practical run sheet (the practical has not yet been run)"
    resource: "appendix-practical-run-sheet.md"
  - id: tag-security
    title: "Anthropic, Security and data handling (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: tag-audit
    title: "Anthropic, Review what Claude Tag has done"
    resource: https://claude.com/docs/claude-tag/admins/audit
  - id: tag-scope
    title: "Anthropic, Configure per-channel access (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/attach-to-scope
  - id: openai-security
    title: "OpenAI, Workspace agents security overview (current as of April 29, 2026)"
    resource: https://cdn.openai.com/business-guides-and-resources/workspace-agents-security-overview.pdf
generated:
  at: 2026-11-20T09:29:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> **For instructors.** Students can read this page, but it works best if they discuss the case first.

## What the case is about

Case 2 asked *whose name* a worker acts under. Case 3 gives the worker its own name and asks the next question: *whose word* should it take?

The incident is small on purpose. Nobody lies, nobody breaks a setting, and the loss is one late report. A junior repeats a true sentence. The worker reads its rule well and refuses. The client still has no file, because nobody who could approve was at work, and only the worker's judgment kept an unapproved file in. Students should leave able to explain why, and to tell a rule, a setting and a record apart.

## Learning objectives

After the case and the lab, students should be able to:

1. Explain whose name a team worker's actions appear under in a channel and in a one-to-one message.
2. Say what is gained and lost when one person's project becomes a team's worker.
3. Read a channel map: which credentials a channel holds, and so what every member can ask for.
4. Show that an approval covers one exact file, and write an approval message that names its file.
5. Separate duties with a setting: who prepares, who approves, and who can cause a send.
6. Choose between a rule, a setting and an approval system for one risk, with costs, and say what the choice still trusts.
7. Explain what an agent skill is, install one, and say what it can change (how the work is done) and what it cannot (who may release the work).

## Before class

The 75 minutes below are for discussion only. The lab is separate work. Plan for one of these.

| Plan | Before class | In class |
|---|---|---|
| **Lab as homework** | Students read story pages 1 to 3, do the core lab (about 65 minutes), then read pages 4 to 6 | One 75-minute discussion |
| **Two sessions** | Students read story pages 1 to 3 | Session 1: the core lab, about 65 minutes. Students read pages 4 to 6 before session 2. Session 2: the 75-minute discussion |
| **Discussion only** | Students read all six story pages | One 75-minute discussion. Run the five-minute reconciliation primer first. |

The lab needs no team plan. Students who did it will have taken Hamza's place on Friday, and will have their own five-minute decision to defend. The stretch steps add about 40 minutes and suit a third session or extra credit.

## Discussion plan (75 minutes)

| Minutes | Step | Question |
|---|---|---|
| 0 to 10 | Open with a vote | "Raise your hand if you would have sent the file at 5:46." Count. Do not comment yet. |
| 10 to 25 | Core 1 | What stopped Friday's file? Put the three records on the board. |
| 25 to 35 | Core 2 | What did Nisha approve on Wednesday? Have three students read their rewritten approval aloud. |
| 35 to 45 | Core 3 | The rule was followed. Was it enforced? Followed versus enforced. |
| 45 to 55 | Core 4 | What did the firm gain and lose in the move? |
| 55 to 70 | Core 5 | The Monday decision. Use the decision layout. |
| 70 to 75 | Wrap-up | The takeaways. Vote again on 5:46. |

## Board plan

Use three columns for core question 1, and keep them up for the whole class.

| What was sent? | Who asked? | What stopped it? |
|---|---|---|
| The mailbox log: nothing | The Slack thread: Hamza, twice | No setting. The worker's judgment. |

Under them, write the two files from Exhibit 4 with their figures, and draw one arrow from Wednesday's *"Approved"* to Friday's file. Ask: *"Does this arrow exist anywhere except in a sentence?"*

### Decision layout for core 5

| | 1. A better rule | 2. A release channel | 3. An approval system |
|---|---|---|---|
| Does it stop a send that nobody approved? | Only if the worker reads it well | Yes | Yes |
| Enforced by | Words | A setting | A record |
| Cost | 1 hour | Half a day, and Fridays | $6,000 and $60 a month |
| Still trusts | Everyone in the channel | Two approvers | One approver per file |
| Votes | | | |

## Notes on the core questions

**Core 1.** Expect "the rule" first. Push until someone says "the worker". The mailbox shows that nothing was sent. The thread shows who asked, and the worker's two refusals. The admin pages show that the mailbox applied to the channel, and they have no log of each action and who asked. The point is the difference between a rule that held and a setting that would have held it.

**Core 2.** She approved a draft through Tuesday, at $215,950, with no open items. Her message named none of that. A good rewritten approval names the file, the date it covers and the figure, for example: *"Approved to send: Northgate reconciliation through Thursday May 13, the corrected file, reconciled cash $207,600. The $4,800 duplicate is confirmed by the supplier, and no items are open."* That approval could only be given once the supplier's statement had confirmed the duplicate, and the firm learned that from Dana's email, after Friday's deadline. On Friday itself the honest approval names the exception: *"one suspected duplicate of $4,800, not yet confirmed"*. A reconciliation that balances is not the same as one that is ready to go out. Strong students add that an approval should become invalid if the file changes.

**Core 3.** The rule asked the worker to find an approval. It found one, saw that it was for a different file, and refused. A rule is **followed** when the worker reads it and acts on it. It is **enforced** when the action cannot happen on that path unless the condition is met. In that channel, the mailbox was available to anyone who asked, so nothing enforced the rule. Anthropic's documentation says the same about channel instructions: they are guidance, not an enforced guardrail. If your class ran the sentence test in the lab, put the tally on the board: how many workers sent, refused or asked. Then ask what would have stopped the ones that sent, and what would have happened to the client's deadline with the ones that refused.

**Core 4.** Gained: the worker's own identity, so the client can tell its mail from Nisha's. Shared use. A bank key nobody can see. Lost: the project, its Library and memory, and the simple fact that only Nisha could send. In Case 2, the second signature was safe because there was only one person. In Case 3, it has to be designed.

**The skill.** Before core 5, ask: *"Sana's skill would have put NOT READY on the first line. Is the firm now safe?"* Let students argue. Then separate the two failures on the board: method and authority. The skill closes the first. Some students will suggest adding *"never send without approval"* to the skill. Point out that a skill is instructions the worker reads, the same as the channel's rule.

**Core 5.** There is no right answer. Good answers say what the choice still trusts and what happens on a Friday when no approver is there. Many students choose option 2 now and option 3 at a certain size. Ask them to name the size. Some will combine 1 and 2. Ask what the rule adds once the setting exists. A fair answer: the rule tells the approvers how to approve, and the setting decides who can.

## Takeaways for the wrap-up

1. **A name is not a signature.** Giving the worker its own account answers "who sent it". It does not answer "who approved it".
2. **Access in a shared worker belongs to the place.** Everyone in the channel can ask for everything the channel holds.
3. **An approval covers one exact file.** If it does not name the file, it can travel to another one.
4. **Followed is not enforced.** A rule the worker reads is words. A credential that is absent is a lock.
5. **No option removes trust.** Each one moves trust to a smaller group and leaves a better record.
6. **A skill is a method, not a lock.** Sana's skill fixes the add-back, the figure and the first line. It does not make anyone an approver. Rules and skills make a good send more likely. A setting or a record closes one path: this mailbox, from this channel. Neither makes every wrong send impossible. A person can still send from an account of their own.

## Running the class with non-accountants

Students need only three ideas from accounting: the bank's record, the company's ledger, and the difference between a timing item and an open item. Do not skip them. The judgment in this case depends on why a $4,800 payment with no ledger line matters. The lab has a required five-minute primer with a $100 example. Run it in class if students have not done the lab. If time is short, skip Exhibit 7, not the primer.

## Notes on the series questions

**Question 10.** A default approval step answers part of "whose word": the agent will not send on a sentence alone. It leaves open who may approve, and whether the record shows it. OpenAI's overview says agents in Slack generally use shared connections, so "whose name" is the same as in Claude Tag. Students should see that the three questions belong to the firm, whichever product it uses.

**Question 12.** The firm has a team worker with its own identity. Its files last in the thread and the drive, but it has no lasting record of decisions. It has some monitoring: the thread, the mailbox log and the admin pages. That Friday showed that enforced approvals were missing, and that no record tied an approval to a file.

**Question 13.** The read-only key and the invisible key are containment, and they worked. The mailbox needed authority, and none was defined.

**Question 14.** A self-hosted runner keeps files and secrets on the client's machines. The conversation, including what the worker reads into it, still goes to Anthropic. It would not fully satisfy that client.

## The sentence test is a simulation, not a product test

Part 5 of the lab runs in an ordinary Claude or ChatGPT chat. It shows how a model weighs a sentence when it is told to play the firm's worker. It is **not** a test of Claude Tag, of channel permissions or of workspace agents, and nothing is sent.

- Report the class tally as *"in our chat simulation"*. Never report it as what Claude Tag does or what ChatGPT's agents do.
- One trial shows what happened once, with one wording, one model and one day. It does not show what always happens.
- Only the [practical run sheet](appendix-practical-run-sheet.md), run on a Team or Enterprise plan with Claude Tag, tests the real product. Even then, one recorded run shows that setup on that day.

## Grading the lab (10 points)

The lab has a core path of about 65 minutes and stretch steps of about 40 minutes. A student who does only the core path can earn 7 points: channel map 1, requests 1 to 4 for 1, the Friday decision 1, the reviewer and the skill 2, redesign tests 1 to 4 for 1, and the approval message 1. The stretch steps add 3: requests 5 and 6, the sentence test, and redesign test 5. Decide before class which path you expect.

| Part | Points | Full marks when |
|---|---|---|
| Channel map | 1 | People, credentials and routines are all placed, and the one sending credential is marked |
| Six requests | 2 | One point for the four core requests, right and with the right rule. One point for the two stretch requests |
| The Friday decision | 1 | A clear decision with a reason from the file itself, written before the reviewer step |
| The reviewer and the skill | 2 | One point for the Claude review without the skill, with lines and minutes. The ChatGPT review is a stretch step and is not needed for this point. One point for the run with the skill: what changed in the label, the figure and the first line, and how the student knows the skill was loaded |
| The sentence test | 1 | What each worker did is recorded word for word, and the student says what in the setup would have stopped a send |
| Redesign | 2 | One core point when tests 1 to 4 pass by where a credential applies, and the student says what the design still trusts. One stretch point when test 5 has a real answer with its cost |
| Approval message | 1 | It names the file, the date covered and the figure |

The [answer key](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-3-key-task-lab.md) is not part of the learner download. The lab links to it at its end, for learners who study alone.

## The final assessment

The [final assessment](../../../claude-and-chatgpt-2/case-3-nishas-firm/final-assessment-find-the-gap.md) moves the same ideas to a youth soccer league. Model answers are in the [model answers](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-3-key-task-final-assessment.md) file. The final assessment links to it at its end, for learners who study alone.

## Running the practical and using it in class

The [practical run sheet](appendix-practical-run-sheet.md) needs a Team or Enterprise plan with Claude Tag and a test Slack workspace. When it has been run, replace Exhibits 5, 6 and 7 with the recorded results, and correct the story if the worker asked for a confirmation or sent the file. Until then, tell students that the worker's words come from a chat test, and which exhibits are illustrative.

## Facts and fiction in the case

| Made up | Checked against documentation | Not yet recorded |
|---|---|---|
| The people, the firm, the client, all figures and costs, the people's messages | How Claude Tag handles identity, channel access, credentials, routines and logs, as of November 10, 2026 | On Claude Tag: the Friday thread, the three records, who caught what. The worker's Friday file and its answers come from a chat test. |



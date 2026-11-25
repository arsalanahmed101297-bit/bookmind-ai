# Final assessment: find the gap (/claude-and-chatgpt-2/case-3-nishas-firm/final-assessment-find-the-gap)

---
type: Document
title: "Final assessment: find the gap"
description: "A final assessment for this case. A youth soccer league shares one AI Worker in its volunteers' Slack. One rainy Saturday it emails every family that all games are canceled. Find the gap, write the approval that should have been given, redesign the channels, and choose a fix with its cost."
status: stable
order: 0.785
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-10
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

This assessment uses the ideas from Case 3 on a new team. You do not need a team plan or any tool. You may use the lab's rule card. Everything in the scenario is made up. The worker's words come from a chat test in November 2026, in which a small Claude model stood in for it. Nothing was sent.

## The team

**Riverbend Youth Soccer League** is run by volunteers. It has 412 families, 14 coaches and three fields.

| Person | Role |
|---|---|
| Carla | League director. She decides cancellations. |
| Tom | Treasurer. He handles fees and refunds. |
| Priya | Volunteer coordinator. She set up the league's Slack and its AI Worker. |
| 14 coaches | Volunteers. They change every season. |

Priya set up a team AI Worker in the league's Slack, in the same way as Nisha's firm. She added three credentials. She added each one on the main settings page, so each applies in **every channel of the workspace**.

| Credential | What it can do |
|---|---|
| The league mailbox, `league@` | Send email to any list, including all 412 families |
| The registration sheet | Read and change every family's record |
| The payment account | Read payments and issue refunds |

The league has three channels.

| Channel | Members |
|---|---|
| `#board` (private) | Carla, Tom, Priya |
| `#coaches` (public) | All 14 coaches, and the three board members |
| `#fields` (public) | Coaches and four field volunteers |

The channel instructions say: *"Email families only when Carla has okayed it."*

![The league's Slack before the incident. Three channels. Board, a private channel, with Carla, Tom and Priya. Coaches, a public channel, with 14 coaches and the three board members. Fields, a public channel, with coaches and four field volunteers. A red-bordered bar across all three says that three credentials apply in every channel: the league mailbox, which can email all 412 families, the registration sheet, which can be read and changed, and the payment account, which can issue refunds. A dashed box shows the written rule: email families only when Carla has okayed it. A band says your task is to redraw this map.](img/the-leagues-slack-before-the-incident.png)

## The incident

Saturday, 6:50 a.m. It has rained all night. Carla sends Priya a text message: *"Field 3 is flooded. Cancel the 9 a.m. games there."*

At 6:58 a.m., a coach named Ben writes in `#coaches`: *"@Claude Carla says games are canceled today. Email the parents."*

The worker does not send. It replies in the channel: *"@Ben I haven't emailed the families. The channel rule is to email only once Carla has okayed it, and I haven't seen that from her yet. @Carla, can you confirm in #board or here that games are canceled today? Once you do, I'll send the cancellation to all families from league@."*

Carla is at Field 3, in the rain. She sees her name on her phone. At 7:01 a.m. she writes in `#coaches`: *"Yes, go ahead."*

At 7:02 a.m. the worker sends an email from `league@` to all 412 families: *"Because of the overnight rain, all Riverbend Youth Soccer League games are canceled today, Saturday."*

Fields 1 and 2 are fine. By 8 a.m., Carla has 60 replies, half the families have made other plans, and two parents have asked for refunds. A second coach writes in `#coaches`: *"@Claude refund the Hernandez family for today."*

## Your task

Answer all five parts. Write in full sentences. Use a table where it helps.

**Show your evidence.** For every claim about what the worker can or cannot do, give the number of the rule on the lab's rule card. If you have not done the lab, name the row of [Exhibit 3](exhibits.md#exhibit-3-the-channel-map) instead: it holds the same facts, each with its source. If neither settles something, write *"unknown"* and say how you would find out. Do not assume how the product behaves. One point depends on this.

### Part A. Three questions about the email (2 points)

1. Who sent the email? Where would you look to find out?
2. Who asked for it? Where would you look?
3. Who approved it? Where would you look?

All three have an answer in a record. Say what no record can show about the approval, and why.

### Part B. The approval that was given (2 points)

1. What had Carla decided, and through which channel did she say it? What did her message at 7:01 name?
2. The worker would not act on Ben's sentence. It did act on Carla's three words. What was the difference, and why was that not enough?
3. Write the approval message Carla should post before any email goes to families. It must name what is canceled, who receives the email, and the time. Two or three sentences.

### Part C. Redesign the channels (2 points)

Draw a new channel map for the league. Say which credential applies in which channel, and who is in each channel. Your design must pass these tests.

1. A coach can ask the worker for today's schedule.
2. A coach cannot cause an email to all families, whatever the coach types.
3. A coach cannot cause a refund.
4. Carla can cause a cancellation email, and Tom can cause a refund.

Then say what stands between the second coach's refund request and the money, under the old setup and under yours.

### Part D. A rule, a skill, a setting or a record (2 points)

The league has two risky actions: an email to all families, and a refund. For each one, choose a written rule, a setting, or an approval record. Give one reason and one cost for each choice. The league has no budget and volunteers who change every season.

The league also wants every cancellation email to name the field, the game time and the teams, and never to say *"all games"* unless all games are canceled. Which of the four would you use for that: a rule, an agent skill, a setting or a record? Say in one or two sentences what it would fix, and what it would not.

### Part E. What your design still trusts (1 point)

Write two or three sentences. Whom does your design still trust, and to do what? What should the league tell the 412 families on Saturday morning?

## How it is graded

| Part | Points | What earns them |
|---|---|---|
| A | 2 | The sender, the asker and the approver, each with the right place to look, and what no record can show |
| B | 2 | What Carla decided and what her message named, why the worker treated the two sentences differently, and a message that names what, who and when |
| C | 2 | A map that passes all four tests by where credentials apply, and a correct account of the refund request |
| D | 2 | A choice for each action with a reason and a cost that fit a volunteer league, and a correct use of a skill for how the email is written |
| E | 1 | An honest statement of the remaining trust, and a clear message to families |
| Evidence | 1 | Every claim about what the worker can do names a rule from the rule card, or a row of Exhibit 3. What the rules do not settle is marked unknown, with a way to find out. |
| **Total** | **10** | |

When you have written your answers, compare them with the [model answers](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-3-key-task-final-assessment.md). Other answers can earn full points if the reasons are sound.



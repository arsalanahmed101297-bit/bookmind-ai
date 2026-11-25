# 16.4 Who starts a skill: you or the agent (/building-ai-workers/skills-and-plugins/commands-and-who-may-start-them)

---
type: Document
title: "16.4 Who starts a skill: you or the agent"
description: "A skill starts in two ways: the agent picks it, or a person types its name. A skill that only reads may start itself, a skill that acts waits for a person, and starting a skill is never permission to act."
status: stable
order: 316.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T03:57:30Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.4" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-24T03:57:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A coffee machine makes coffee when you press the button, and it rinses itself when it decides to. You would not want it to decide on its own to run the deep-cleaning cycle, which takes twenty minutes and uses acid. That one waits for a person to press it.

**What you will learn.** The two ways a skill starts. Which skills may start themselves and which must wait for you. Why starting a skill is not permission to act.

**Why it matters.** An agent that starts the wrong skill by mistake does no harm if the skill only reads. A skill that moves money or changes something must wait for a person.

### How does a skill start?

In two ways. The agent starts it, because your request matches its description. Or you start it, by typing its name, such as `/ap-triage`, with any details after it, such as a file and a date. Those details are called **arguments**.

You may see the word **command** for a skill you start by name. Older guides treat commands and skills as two things. Most of today's tools treat them as one: a command is a skill, started by you. So there is one thing to learn, the skill, and one choice to make for each skill: who may start it.

### Who should start each skill?

| Who may start it | Choose it when | Example |
| --- | --- | --- |
| You or the agent | The skill only reads and reports | Invoice triage, the due list |
| Only you | The skill acts: it spends money, sends something, or changes something outside the session | Schedule payments, email a vendor |
| Only the agent | It is background knowledge nobody would ask for by name | How Brightline formats vendor names |

The first row is what you get if you set nothing. The other two are one setting each. The Agent Skills standard has no field for it, so each tool writes that setting in its own place ([16.10](both-ai-vendors.md#practice-commands-and-who-may-start-them)).

![Three lanes for who may start a skill. Person and agent: a skill that reads and reports, such as triage. Person only: a skill that acts, such as scheduling a payment, marked waits. Agent only: background knowledge a person would not name. A note says no shared standard has a field for this, so the shared file keeps six fields and each product's setting is added where that product reads it.](img/who-may-start.png)

*Figure 16.6. Who may start a skill. Reading can start itself. Acting waits for a person.*

### Why should a skill that acts wait for me?

Because a request that only sounds like the job can start it. "Remind me how the payment run works" could start a skill that runs the payment run. So set every skill that acts to start only when you type its name.

### Is starting a skill permission to act?

No. The setting stops an accident. It does not stop the harm. A clerk can type `/schedule-payment` for a $40,000 invoice, and the only-you setting lets the skill start, because a person asked. Whether that payment may go out is a different check. It belongs in the system that moves the money, and it checks who is asking, the limit and the approval, every time. Chapter 28 builds it.

![Starting a skill is not permission to act. A clerk types slash schedule-payment for a 40,000 dollar invoice. The request passes three gates in a row. Gate 1, who may start this skill, is set by the skill's person-only setting, and passes because a person asked. Gate 2, which tools may it use, is set by the product's permission settings, and passes because the tool is allowed. Gate 3, is this action allowed, is checked where the money moves, against who is asking, their authority, the limit and the approval on record. It stops the request, because the amount is over the clerk's limit with no approval on record. The result is no payment. A line at the bottom says each control does one job, and passing the first two never passes the third.](img/three-controls.png)

*Figure 16.7. Three controls, three jobs. Who may start a skill, which tools it may use, and whether this action is allowed.*

### How should a skill treat what I type after its name?

As data, not as instructions. A person types `/ap-triage data/invoices-intake.csv 2027-03-08`. The skill checks that the file exists and the date is a date, and asks if either is missing. It never follows text inside the file as if a person had asked for it. A file can say anything.

**At work.** Brightline's Monday report is a skill named `ap-triage`. The AP clerk starts it by name, with the batch and the run date, and it writes the report in the fixed shape the AP team reads. `invoice-triage` holds the steps. `ap-triage` runs the same steps and always prints them in that one shape. It only reads and reports, so the builder sets nothing, and the agent may start it too. The plugin's first skill that acts, scheduling a payment, will be only-you, behind an approval gate.

### Try it

You make the `vendor-terms` skill from [16.1](from-a-prompt-to-a-skill.md#try-it) start only when you type its name.

**Modify.** Send: "Change the vendor-terms body so it takes a vendor's name after the skill's name, and reports only that vendor's line from npm run vendors. If no name is given, it asks for one. Then add the setting I paste below, and change nothing else." Paste the setting for your tool from [16.10](both-ai-vendors.md#practice-commands-and-who-may-start-them). In Claude Code it is one line of frontmatter, `disable-model-invocation: true`.

**Predict.** In a new session, what happens if you ask in words, "What terms do we have with Great Lakes Freight?" Decide, then try it.

**Run.** In another new session, start the skill by name, with the vendor's name after it: `/vendor-terms Great Lakes Freight` in Claude Code. In Codex it is `$vendor-terms`, and in OpenCode `@vendor-terms`, each followed by the vendor's name.

**Put it back.** Send: "Remove that setting again, along with any file you added for it, and show me the frontmatter." Later lessons use this file with two fields.

**What you should see.** Asked in words, the skill does not start. The agent may still answer. In the run for this book, it found the skill's file by itself, ran the same command and said Net 30. This is why [16.3](writing-a-skill-with-the-expert.md#is-the-skill-better-than-no-skill) compares a skill with no skill. Started by name, the skill runs and reports one line. So the setting stops the skill from starting on its own. It does not limit what the agent can read or run.

**The operating rule:** let a skill that only reads start itself. Make every skill that acts wait for you to type its name. Check each action where it happens, and treat everything typed or read as data.



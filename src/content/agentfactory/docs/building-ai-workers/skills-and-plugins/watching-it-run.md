# 16.8 Watching it run: telemetry (/building-ai-workers/skills-and-plugins/watching-it-run)

---
type: Document
title: "16.8 Watching it run: telemetry"
description: "Telemetry shows which steps of a plugin ran, how long they took and what they cost. It never shows that the answer was right."
status: stable
order: 316.08
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T03:57:31Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.8" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-24T03:57:31Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A delivery company tracks every package. The scan at each stop says where the package was and when. A late truck shows up as a long gap between two scans. But the tracking never tells you whether the right item is inside the box. Only opening it does.

**What you will learn.** How to see what a plugin did: which steps ran, how long they took and what they cost. What that record cannot show. What must stay out of it.

**Why it matters.** Your plugin will run on computers you never see. A record of each run is the only way to watch it, so you must know what the record proves.

### What is telemetry?

**Telemetry** is data that running software sends about what it did, so people can watch it without sitting beside it. **OpenTelemetry** (opentelemetry.io, checked November 2, 2026) is the open standard for it. A tool that follows it can send its data to any **collector**, a service that receives telemetry, or simply print it in your terminal.

### What does it send?

Three kinds of signal:

| Signal | What it is | For the triage skill |
| --- | --- | --- |
| **Trace** | One request from start to finish, made of timed steps called **spans** | The request, the skill's turn, a connector call, the script run |
| **Metric** | A number measured over time | Tokens used, estimated cost |
| **Log event** | A record that something happened | The plugin loaded, a skill was used, a tool was denied |

Tools differ in how much they send, and [16.10](both-ai-vendors.md#practice-watching-it-run) says what each one does.

### What can it not see?

Inside a program. Your tool can time a connector call or a script, but it cannot see which rule each invoice matched. Only code you own can report that. Brightline's connector is borrowed, so in this chapter it is seen only from outside. In [Chapter 17](../connectors-and-mcp/watching-a-connector.md) the connector is yours, and you make it report on itself.

### Does a clean record mean the answer is right?

No. Telemetry shows that work ran, never that it was right. A trace can show a skill that ran fast, cost little and had no errors, and still printed a wrong total. Only the tests and the saved requests say the answer is right ([16.3](writing-a-skill-with-the-expert.md)). What the record adds to the comparison in [16.3](writing-a-skill-with-the-expert.md#is-the-skill-better-than-no-skill) is the cost: the time and the tokens of a run with the skill, and of one without it.

### What must stay out of it?

Prompts, replies and tool content, such as what a file holds. These can carry customer names, amounts and bank details. Most tools leave them out unless you turn each one on. Leave them off, and send telemetry only to a collector your organization controls.

**At work.** The builder turns on one tool's telemetry for one session, prints it in the terminal, and runs the Monday report. The log events show the plugin loading and a skill being used, and the cost records show the run's tokens and cost. The builder's notes say that the evidence for the counts 4, 2, 2 and 5 is the test, not the trace.

### Try it

You need the plugin from [16.5](what-a-plugin-bundles.md#try-it).

**Predict.** Will the record of a run show your plugin's name?

**Run.** Follow [your tool's tab](both-ai-vendors.md#practice-watching-it-run) for one run, and ask: "What terms do we have with Scioto Office Products?" If the tab has no steps for your tool, read what it says you would get.

**Check.** On paper, write what the telemetry showed: which events, and what the run cost. Then write what it could not show. Did it say Net 45 was right?

**What you should see.** A record of what ran, and no opinion about the answer. For that, you compare with `npm run vendors`.

**The operating rule:** use telemetry to see what ran and what it cost. Keep sensitive content out of it. Never take a clean record as proof of a right answer.

![One run drawn as a trace. At the top, the request, the outer span. Below it, the skill's turn, invoice-triage. Below that, three spans: a model request with tokens and cost, a connector call, list_directory, and a script run, 3.1 seconds. A dashed note says inside: not instrumented. An arrow along the bottom shows time. Beside the trace, a separate box: test result, 4 2 2 5, pass. A note says the trace shows what ran, the test shows it was right.](img/trace.png)

*Figure 16.12. One triage run as a trace. The host times what it can see. Only the test says the answer is right.*



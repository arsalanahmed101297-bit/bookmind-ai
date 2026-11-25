# 2.3 Worker, runtime and channel (/ai-worker-paradigm/what-is-an-ai-worker/worker-runtime-channel)

---
type: Document
title: "2.3 Worker, runtime and channel"
description: "Why a worker is defined apart from the runtime that executes it and the channels people reach it through, and two tests that check it."
status: stable
order: 102.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "02"
part: I
expert_status: required
concepts: [ "2.3" ]
last_verified: 2026-10-03
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Think of a human accounts payable clerk. Her job
description stays the same when IT gives her a new laptop, and when the
company adds a second phone line. The laptop is the machinery she works
with, and the phone line is one more way people reach her: either can be
replaced. The job description is the role. If the job description changed
every time the laptop did, nobody could manage her.

## Which part is the worker, the runtime or the channel?

At the [Brightline review](overview.md#why-it-matters), Dave, Maria and IT each named a different real part, but none named the worker. Three terms sort them out:

- **The worker** is the role itself: what it is responsible for, what it
  may do, and who answers for it. It is written down in a Role Contract,
  owned by the company, and given a name.
- **The runtime** is the replaceable harness that runs the worker: the
  software that runs a model in a loop with its tools. It is the organizer
  from [Behind the Screen](../../claude-and-chatgpt-2/behind-the-screen/overview.md), working in a sandbox, which is often
  temporary. It might be a coding harness, an agent toolkit or a hosted
  agent service ([2.5](both-ai-vendors.md) names each AI vendor's). IT was
  pointing at part of the runtime when it named the scheduled task. Its
  schedule is a trigger.
- **The channel** is where people reach the worker: a chat app, a team
  messaging tool, an office app such as a spreadsheet, email, a web portal
  or an API (a direct connection that other software uses). Maria was pointing at a channel when she named the
  chat window.

## What was Maria's project?

Maria's project was none of these. It held **standing context**:
the instructions and files that every thread in it started from, the
project's own files that Chapter 1 promised. Standing context
shapes the work, but it is not the worker itself. And it should point to
the company's governed knowledge rather than hold its own copy. Maria's
project broke that rule: it held a dated copy of the AP policy, version 1
from March, and that copy was still there in October, out of date. That is
the problem [Chapter 4](../the-architecture-in-one-picture/overview.md)
fixes.

![One worker with replaceable runtimes and channels. In the center, the
worker, defined once in a Role Contract owned and maintained by the
company: role and responsibilities, accountable human owner, authority and
escalation, evaluation criteria, and the rest of the sixteen elements. At
Brightline, nobody pointed at it, because it had never been written down.
On the left, dashed replaceable runtimes that execute the work: coding
harness, agent toolkit, hosted agent service, such as a sandbox born for
one run; IT pointed here when it named the scheduled task. On the right,
dashed replaceable channels where people and systems reach the worker:
chat app, team messaging, email, web portal, API; Maria pointed here when
she named the chat window. Below the worker, standing context: the
instructions and files every chat starts from, which should point to
governed knowledge rather than hold copies; Dave pointed here when he named
the project. Two rules: change the runtime and the role, its limits and its
evaluation cases stay, but rerun the evaluations; add a channel and review
access, because a new channel never grants new authority.](img/worker-runtime-channel.png)

*Figure 2.4. The worker is defined once. Runtimes and channels plug in and can be replaced.*

## Never define a worker by its runtime or its channel

This leads to the rule: **never define a worker by its runtime or by its
channel.** Two tests check it. If you replace the runtime, the role, its
intended authority and its evaluation cases must not change. The
implementation does change, so you rerun the evaluations before you trust
it. If you add a channel, the worker's authority must not grow. A worker
that may only draft by email may still only draft in the team chat.

## Before a worker joins a team channel

A channel does change who can reach the worker. In a chat app, one person
gives it work and reviews what comes back. In a team channel, several
people can. So before a worker joins a team channel, settle three things:
who may give it work, whose approval counts, and who sees what it posts
there. Its authority is the same in both.

[Chapter 4](../the-architecture-in-one-picture/overview.md) draws these layers in one architecture picture, and its
Product reference names each AI vendor's runtimes and channels.


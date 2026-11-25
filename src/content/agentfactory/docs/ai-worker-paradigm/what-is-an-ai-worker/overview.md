# Chapter 2. What Is an AI Worker? (/ai-worker-paradigm/what-is-an-ai-worker/overview)

---
type: Document
title: "Chapter 2. What Is an AI Worker?"
description: "The sixteen elements that define an AI Worker, how a worker differs from a model, an assistant, an automation and an agent, how to choose a surface, the features the work needs and a model, and the first draft of a Role Contract."
status: stable
order: 102
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "02"
part: I
expert_status: required
objectives:
  - { id: CCAO-F.D3.O1, label: direct }
  - { id: CCAO-F.D3.O2, label: direct }
  - { id: OAI.1.1, label: direct }
  - { id: OAI.1.2, label: direct }
word_budget: 3000
prerequisites: [ "01" ]
build_step: "The first Role Contract draft for the AP Worker"
artifact: "role/ap-worker-role-contract.md, tag ch02"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch02.zip"
field_guides: []
delta_entries: [ "D-072", "D-074", "D-075", "D-076" ]
concepts: [ "2.1", "2.2", "2.3", "2.4", "2.5", "2.6" ]
last_verified: 2026-10-12
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

[Chapter 1](../from-chatbots-to-ai-workers/same-text-box.md) showed that the AI text box can now hand back finished work, and
even keep working on its own. That raises a harder question: when does a
capable AI tool become a *worker* you can trust with part of a business?
This chapter answers it. After it, you can:

- break an **AI Worker** into the sixteen things that define it: its job,
  its owner, what it may do alone, when it must ask a person, how its work
  is judged, and the rest
- tell an AI Worker apart from a model (the AI engine itself), an
  assistant, an automation and an agent, and tell its two kinds apart,
  Delegated and Standing
- separate the worker from the **runtime** (the machinery that runs it)
  and from the **channel** where people reach it, such as chat, email or
  Slack
- pick the right product, features and model for a piece of work on either
  leading AI vendor
- write the first draft of a **Role Contract**: a one-page definition of
  the worker's job and limits. [2.6](role-contract.md#the-chapters-that-fill-it-in)
  shows which chapter fills which part

The story below shows what goes wrong when nobody writes one.

## Why it matters

Dave, the controller, runs Brightline's accounting. A month after Maria's
lost spreadsheet, he asked her to set up what everyone now calls "the AP
(accounts payable) assistant." She set it up in a project of her own, under
her own login, in the AI app the team uses. She uploaded the AP policy to
its files. She connected the AP inbox, and she added a weekly task that
builds the invoice register every Monday.

Three weeks later, a clerk sat down at Maria's computer, where the project
was open under her login, and asked the assistant to "handle this morning's
vendor emails." One email seemed to come from one of Brightline's usual
shipping vendors. It asked Brightline to send Friday's payment to a new
bank account. The assistant drafted a friendly reply confirming the change,
and it updated the bank details in the register, on its own, with no one
asked. The clerk was about to send the reply. Maria, the office manager,
stopped it, because the new bank was in a US state the vendor had never
used. The email was fake.

At the review, Dave asked four plain questions. Who owns this assistant?
What may it do on its own? When must it stop and ask a person? How do we
know whether it is doing a good job? Nobody could answer. The weekly task
ran under Maria's own login, so whatever it did, it did as Maria. And she
had been on vacation the week before. The policy file was a copy from
March, two versions out of date: a durable file, but not the company's
official policy. And three people described "the assistant" three ways:
Dave meant the project, Maria meant the chat window, and IT meant the
scheduled task. Each of them was pointing at something real. None of them
was pointing at the worker, because nobody had ever written it down.

![After the fake bank-change email, Dave's four questions went unanswered:
who owns the assistant, what it may do on its own, when it must stop and
ask a person, and how to know it is doing a good job. And "the assistant"
meant three different things: Dave meant the project, Maria the chat
window, IT the weekly task. Each was pointing at something real; none was
pointing at the worker, whose job, limits, owner and measure had never been
written down.](./img/undefined-worker.png)

The model was capable. The tools worked. What was missing was a definition
of the worker: its job, its limits, its owner and how to judge it. This
chapter gives that definition.


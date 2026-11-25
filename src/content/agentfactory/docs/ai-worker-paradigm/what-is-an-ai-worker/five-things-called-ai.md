# 2.2 Five things people call "AI" (/ai-worker-paradigm/what-is-an-ai-worker/five-things-called-ai)

---
type: Document
title: "2.2 Five things people call \"AI\""
description: "What a model, an assistant, an automation, an agent and an AI Worker each are, how they nest, and two questions that tell them apart."
status: stable
order: 102.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "02"
part: I
expert_status: required
concepts: [ "2.2" ]
last_verified: 2026-10-03
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You go away for a week and leave things to look
after your house. A timer turns on the porch light at 7 p.m. every night,
the same way each time. That is an automation. A voice assistant answers
whenever someone asks it a question, one request at a time. And the
"brain" inside it that turns the question into an answer is the model. A
plumber you call about a leak works out the steps himself, but only for
that one job, and leaves when it is fixed. That is an agent. A house
sitter looks after the whole house. They decide what each day needs, and
they answer to you for how the week went. That is closest to a worker.

People use one word for five different things. Each one is useful. The AI
Worker is the one built to be managed.

| Thing | What it is | Who decides the steps |
| --- | --- | --- |
| Model | The trained engine that turns input into output. On its own it has no tools and no memory | Nobody. It produces one response |
| Assistant | A product that puts a model behind a chat for whoever is typing | The person, one request at a time |
| Automation | Fixed steps written in advance, run the same way every time | The person who wrote the steps |
| Agent | A model in a loop with tools. It plans, acts, checks and acts again | The agent, inside the task |
| AI Worker | A role, defined by its sixteen elements, with a named owner | The worker, inside its authority |

This is not the automation mode of [0.3.1](../../how-ai-works/ai-fluency/three-ways.md), where an AI does a task you describe. Here an automation is a fixed script.

## How the five fit together

The five do not compete. They fit together. A model sits inside every
assistant and every agent. An AI Worker usually does its work through an
agent. It may also call automations for the steps that should never
change, such as saving each invoice PDF to the right folder. An
automation is still the right tool when the steps are known and judgment
adds only risk.

![The title reads "How the five fit together." The line below it reads "Models power the work. Agents and automations execute it. A human owner is accountable." On the left, a large box, AI Worker, reads "A managed role defined by 16 elements." It shows three of them: Human owner, "Accountable for results." Bounded authority, "What it may do on its own." Evaluations, "How its work is judged." A line reads "Plus job, mission, knowledge, escalation and the remaining elements." Below it, a dashed band, Replaceable execution, reads "The role stays defined when its implementation changes." It holds two boxes. Agent, "Chooses steps within a task," has a Model inside that "Turns input into output," and a loop of Plan, Act and Check, "Repeat as needed." It "Uses tools within the role's limits." Automation, "Follows predefined steps," shows Step 1, Step 2 and Step 3, with the example "save each invoice PDF to its assigned folder." It "May include model calls." On the right, Assistant, "A conversational interface to AI capabilities," also has a Model inside. It "Responds to user requests" and "May use tools and invoke agents." An arrow from it to the AI Worker reads "Access to the worker." A note reads "Accountability must be assigned. A chat interface alone does not define the worker's owner, limits or success criteria." Under the boxes, a line reads "Illustrative: one product can combine these concepts. Judge how it is used, not only what it is called." A band at the bottom reads "Define the role and its owner. Keep the execution replaceable."](img/five-things.png)

*Figure 2.3. How the five fit together.*

## Two questions that tell them apart

Two questions tell the five apart. The first is *who decides the steps?*
The table answers it for each one. The second is *who answers for the
outcome?* This question separates a worker from all the others. Ask both
questions about how something is used, not about the product, because one
product can be used in several ways. At Brightline, the clerk who happened
to be typing used the assistant, but nobody answered for what it did.

But an owner alone is still not enough. Someone in IT owns the script that
saves invoice PDFs, and that script is still an automation. A worker needs
the whole set: the sixteen elements in [2.1](anatomy-of-an-ai-worker.md).

A Standing AI Worker
([2.1](anatomy-of-an-ai-worker.md#two-kinds-of-ai-worker)) keeps its
identity and context between conversations, and its own triggers start it.
That initiative needs the most governance
([Chapter 9](../../managing-ai-workers/work-that-runs-without-you/governing-initiative.md)).


# 4.1 Six layers, six verbs (/ai-worker-paradigm/the-architecture-in-one-picture/five-layers)

---
type: Document
title: "4.1 Six layers, six verbs"
description: "The six layers every AI Worker in this book is drawn with, the one job of each, and where the worker itself is in the picture."
status: stable
order: 104.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.1" ]
last_verified: 2026-10-04
sources:
  - id: v1-system-of-context
    title: "The System of Context (Panaversity, first edition, verified 2026-10-04)"
    resource: https://agentfactory1.panaversity.org/docs/ecosystem/system-of-context
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Think of a restaurant. The front door and phone line are its channels, and the cook is its runtime. What the cook remembers about the regulars, and which drawer holds the scales, is its memory. The recipe book is its approved knowledge (KSoR, the Knowledge System of Record), and it wins over what the cook remembers. The order tickets on the rail show what each table ordered and what is done, so they are its case files (SSoR, the State System of Record). The cashier who checks every order slip before opening the till, and keeps a copy of each one, is its governed door (DSoR, the Data System of Record). The owner sets the menu and reviews the night's takings, as the **human principal** does. The till, the pantry book and the supplier list are the restaurant's own systems, and they stay the authority on their numbers.

![Six layers, explained with a restaurant. Six cards in a row. Channels: the front door and phone line, where customers reach the restaurant, with walk-ins, phone calls, online reservations and delivery apps. Runtime: the cook, who does the work, follows instructions, uses tools and ingredients, prepares the dishes and handles special requests within limits. Memory: what the cook remembers about regulars and where things are kept, customer preferences, where ingredients are, helpful past experiences. KSoR: the recipe book, the authoritative source that wins over memory, with official recipes, ingredient standards and food safety rules. SSoR: the order tickets on the rail, which track what each table ordered, what is being prepared and what is completed. DSoR: the cashier who checks the order slip before opening the till, handles payment, keeps a copy of the receipt and prevents errors. Above the cards, the restaurant owner or manager sets goals and standards, decides the menu and policies, steps in for exceptions and reviews the results. A banner says the cook's memory is helpful, but the recipe book is authoritative. Below, the company systems that remain authoritative: the till, pantry records, supplier records and payment systems.](img/restaurant.png)

*The six layers, as a restaurant. The cook's memory helps, and the recipe book wins.*

## What are the six layers?

Every AI Worker in this book is drawn the same way: six layers, one job each.

| Layer | Its verb | What it holds or does | Brightline example |
| --- | --- | --- | --- |
| Channels | connect | Where people and systems reach the worker: a chat app, team messaging, email, a web portal, an API | The AP inbox, the team chat |
| Runtime | executes | The replaceable program, called the harness, that reasons and acts | A run of the AI vendor's app, started by a trigger, such as a schedule or an arriving email |
| Memory | remembers | Continuity: preferences, experience, where to look | "Maria wants the register sorted by due date" |
| The approved knowledge (KSoR) | knows | The governed, authoritative knowledge: policies, procedures, thresholds, definitions | AP policy, approval limits |
| The case files (SSoR) | tracks | Governed memory of the work: one case file for each **matter**, a piece of work carried to an end, such as one invoice, with where it stands, what was tried, who approved what, and why | The case file for invoice 5120, step by step |
| The governed door (DSoR) | acts | The governed door to real systems: it checks, acts, and keeps the **evidence**, the record of what was checked and done | Register updates, payment status |

## What is the runtime, and what is the model?

The runtime is the **harness**, the organizer from [Behind the Screen](../../claude-and-chatgpt-2/behind-the-screen/overview.md): the program that calls the model, does the tasks and keeps the notes. The model it calls, Behind the Screen's consultant, does the reasoning. The company rents it too, so it sits in this layer with the harness.

## What sits outside the six layers?

Two things sit outside the six layers. Above them is the **human principal**, who owns the first 10 and the final 10 percent of every task ([Chapter 3](../the-10-80-10-operating-rhythm/one-rhythm.md)). Below the governed door are the company's own systems: the accounting system, the bank and the vendor records. They stay the authority on their data.[^v1-system-of-context] The door does not replace them. It governs the worker's access to them.

## Where is the worker itself?

It is not one box. It is the **Role Contract** from [Chapter 2](../what-is-an-ai-worker/role-contract.md) and the records the contract names. The contract ties the layers together: it names the knowledge sources, the memory rules, the operations the worker may request, the runtime it needs, the channels it serves, and the evaluations that prove it still does the job, each a case with inputs, an expected answer and what passes. [4.9](worker-is-the-records.md) says why the records are enough.

![Six layers, six verbs, the canonical architecture. At the top, the human principal owns the first 10 and final 10 percent of every task. Below it, two rented layers. Channels connect, where people and systems reach the worker, with Brightline's AP inbox, team chat and web portal. Runtime executes, the replaceable harness that reasons and acts. On the dashed line between the rented layers and the company-owned layers, Memory remembers: continuity, preferences, experience, where to look, and Maria wants the register sorted by due date. Below the line, three owned layers. KSoR knows, the governed, authoritative knowledge, with the AP policy and approval limits. SSoR tracks, one case file for each matter, with the case file for invoice 5120. DSoR acts, the governed door to real systems, which checks, acts and keeps the evidence, with register updates and payment status. Under DSoR, the company systems: the accounting system, the bank and the vendor records. A band at the foot names the Role Contract, not a layer, the worker's definition, which ties the six layers together: knowledge sources, memory rules, operations, runtime needed, channels served, evaluations. The last line reads: channels connect, runtime executes, memory remembers, KSoR knows, SSoR tracks where the work stands, DSoR acts.](img/architecture.png)

*Figure 4.1. The canonical (standard) architecture. Rented layers sit above the line and owned layers below it.*

This is the book's reference drawing of the six layers. Later chapters zoom into one layer at a time. When a chapter introduces a product or a technique, ask one question first: which layer is this?

## One run, start to finish

Monday, 11 p.m. Lakeshore emails the AP inbox to ask when invoice 5102 will be paid. This is Monday night's email from [the chapter's story](overview.md#why-it-matters), run again the way it should have gone. Nobody is awake. Step through the run below, and watch which layer each step uses. Three steps matter most:

- **The vendor's terms come from the vendor record, through the governed door (DSoR),** which reads the company's systems.
- **A memory note only makes the session look harder at the vendor record.** Memory points, and never decides.
- **The draft waits in the approval queue,** because sending is outside the worker's authority. Dave approves it at 9 a.m. from his own login, which is the door's event.

The week of October 12 is what happens when the company governs none of those places.

```yaml interactive="step-through"
title: Follow one run through the six layers
intro: Press Next step and watch which layer each step uses.
scene: Monday, 11 p.m. Lakeshore emails the AP inbox to ask when invoice 5102 will be paid. Nobody is awake.
layers:
  - name: Human principal
    verb: owns the first and final 10
    icon: person
    band: outside
  - name: Channels
    verb: connect
    icon: channel
    band: rented
  - name: Runtime
    verb: executes
    icon: runtime
    band: rented
  - name: Memory
    verb: remembers
    icon: memory
    band: line
  - name: KSoR
    verb: knows
    icon: knowledge
    band: owned
  - name: SSoR
    verb: tracks
    icon: state
    band: owned
  - name: DSoR
    verb: acts
    icon: action
    band: owned
  - name: Company systems
    verb: the authority on their data
    icon: systems
    band: outside
steps:
  - when: Monday, 11 p.m.
    text: The email arrives in the AP inbox.
    layers: [Channels]
  - when: Monday, 11 p.m.
    text: The trigger starts a fresh session, which loads the Role Contract and the standing instructions for vendor emails.
    layers: [Runtime]
  - when: Monday, 11 p.m.
    text: The session opens the invoice's case file to see where the work stands.
    layers: [SSoR]
  - when: Monday, 11 p.m.
    text: It reads the vendor's terms from the vendor record, through the governed door.
    layers: [DSoR, Company systems]
  - when: Monday, 11 p.m.
    text: It checks what the policy says about payment terms, and notes the version to cite.
    layers: [KSoR]
  - when: Monday, 11 p.m.
    text: A memory note says this vendor's terms changed in August. The session uses the note only to look harder at the record.
    layers: [Memory]
  - when: Monday, 11 p.m.
    text: It drafts the reply, adds a line to the case file, and puts the draft in the approval queue, because sending is outside its authority.
    layers: [SSoR]
  - when: Monday, 11 p.m.
    text: The session ends. Nothing of the worker is running until the next trigger. The runtime is gone.
    layers: [Runtime]
  - when: Tuesday, 9 a.m.
    text: Dave reads the flags, opens the queue, checks the citation in ten seconds, and approves the reply from his own login. The evidence is kept, and Maria sends the reply.
    layers: [Human principal, DSoR]
end: Every step read from or wrote to a place the company governs, except the session itself, which is gone.
```

[^v1-system-of-context]: The System of Context, Panaversity, first edition.



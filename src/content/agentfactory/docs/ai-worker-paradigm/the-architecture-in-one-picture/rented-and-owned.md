# 4.6 Rented above, owned below (/ai-worker-paradigm/the-architecture-in-one-picture/rented-and-owned)

---
type: Document
title: "4.6 Rented above, owned below"
description: "Which layers a company rents and which it must own, and a test that shows where each part of a worker really lives."
status: stable
order: 104.6
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.6" ]
last_verified: 2026-10-04
sources:
  - id: v1-operating-layer
    title: "The Agent Is the Operating Layer (Panaversity, first edition, verified 2026-10-04)"
    resource: https://agentfactory1.panaversity.org/docs/ai-operating-layer
  - id: anthropic-claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You rent an apartment, but your documents and your keys to your own safe go with you when you move.

[Chapter 2](../what-is-an-ai-worker/worker-runtime-channel.md)'s rule stays true for the top two layers: never define a worker by its runtime or by its channel.

## Which layers are rented, and which are owned?

This chapter adds the line that runs across the picture. **Rented layers sit above it. Owned layers sit below it.** The book's ownership rule says the same: **the platforms are rented. The knowledge and the controls are yours.** Rented here means rented from the AI vendor, or run yourself with open-source tools. Either way, it is replaceable. The accounting system is another vendor's product, but it is the company's record, and it stays when the AI vendor changes. For a one-person business the line holds too: the spreadsheet and the folder of invoices sit below it, if you can take them with you.

**Rented, so replaceable.**

- the model and the tier, the plan level, you pay for
- the harness or hosted runtime that runs the worker
- the apps, chat channels and their connectors
- the scheduling features
- the chat history the product keeps

**Owned, so under the company's control.**

- the Role Contract, and the standing instructions written around it
- the approved knowledge (KSoR), with versions and owners
- the case files (SSoR), one for each matter
- the governed door's (DSoR) controls, approvals and evidence
- the review contracts and evaluations

## Does owned mean you host it yourself?

Owned means controlled, not self-hosted. A company may keep its approved knowledge on a paid service and still own it, if it controls four things:

- the policies: what the record says
- the versions: which one is approved, and by whom
- the permissions: who may open and change it
- the exports: taking a full copy out

Maria's project fails three of the four.

- **Versions.** It keeps no versions with an approver.
- **Permissions.** Only Maria can open it, so the company does not control who may.[^anthropic-claude-projects]
- **Exports.** The product's data export carries your conversations, not the project's instructions, as [4.8's steps](both-ai-vendors.md#where-to-find-each-layer-in-your-app) record.

That is why a project is a rented place, however much you control it. A repository of policy pages with versions, owners, approvals and a clone, a full copy the company can take away, passes all four.

This book's preferred strategy is to rent what changes fast and is not yours to decide, such as models and harnesses, and to own the things that record how the company works, however often they change.[^v1-operating-layer]

## Can an owned thing have copies in rented places?

**A home and its copies.** Every owned thing has one home the company governs, with versions, an owner and an export, and it may have as many copies in rented places as the runs need. Every run loads a copy of the Role Contract and its standing instructions into the runtime, and that is fine. A copy is fine while it is refreshed from the home and cites it. An item is misplaced when its only copy sits where the company does not govern it, or when the worker answers from a copy instead of the home. Wednesday's policy upload was a copy that had become the home.

## Where does memory sit?

**Memory sits on the line.** A company may rent it, as long as it passes the wipe test from [4.3](memory-remembers.md). On the line means the wipe test decides it entry by entry: a preference may stay rented, and a fact or a permission may not live there at all.

## How do you test where things are really kept?

The **swap test** checks where things are really kept. Imagine replacing the AI vendor tomorrow. Write two lists: what you would rebuild, and what you would carry across. Everything on the owned list must carry across with its meaning unchanged. If the carry list is short, owned things are stored in rented layers. Run the test upward too, when the team or another company starts to use the worker ([4.10](when-others-use-it.md)).

![The swap test. Imagine replacing the AI vendor tomorrow, and write two lists. Rebuild on the new AI vendor, five lines. The model and the tier you pay for. The harness or hosted runtime that runs the worker. The apps, chat channels and their connectors. The scheduling features. Memory, which may be left behind if it passes the wipe test. Carry across, meaning unchanged, five lines. The Role Contract. The KSoR, its approved knowledge with versions and owners. The SSoR, each matter's case file. The DSoR's controls, approvals and evidence. The review contracts and evaluations. A note says their connections may need rework and retesting, and if the carry list is short, owned things are stored in rented layers. Brightline's Friday list, with where each item belongs. The project instructions go to the Role Contract. The policy upload goes to one approved policy in the KSoR. A trigger set as a time, not a business event, goes to a Triggers line in the Role Contract. The banner: the platforms are rented, and the knowledge and the controls are yours. A footer: owned means controlled, not self-hosted.](img/swap-test.png)

*Figure 4.3. The swap test.*

### Where is a trigger kept?

**A trigger has three parts, and each is kept in a different place.**

- The business event, and the accepted delay ([4.4](ssor-tracks.md)), belong to the Role Contract.
- The product feature that fires is rented, so it is rebuilt.
- The pending work the fresh run reads is in the case files.

Now apply the swap test to Friday's list.

```yaml interactive="carry-across"
title: Run the swap test
intro: Pick a setup, then switch the AI vendor. Watch what carries across, what you rebuild, and what is lost.
event: Switch the AI vendor
columns:
  carry: Carries across
  rebuild: You rebuild
  lost: Lost
setups:
  - label: Drawn with the picture
    items:
      - name: Role Contract and standing instructions
        kept: The company's own record
        then: carry
      - name: AP policy v3
        kept: The KSoR
        then: carry
      - name: Each matter's case file
        kept: The SSoR
        then: carry
      - name: Controls, approvals and evidence
        kept: DSoR
        then: carry
      - name: Evaluations
        kept: The company's own record
        then: carry
      - name: Runtime settings
        kept: The AI vendor's product
        then: rebuild
      - name: Channel connections
        kept: The AI vendor's product
        then: rebuild
      - name: Schedules
        kept: The AI vendor's product
        then: rebuild
      - name: Memory
        kept: The AI vendor's product
        then: rebuild
    verdict: Long carry list
    tone: good
    outcome: Everything that is the worker carries across with its meaning unchanged. Its connections may still need rework and retesting.
  - label: Brightline in October
    items:
      - name: Role Contract
        kept: Instructions in Maria's project
        then: lost
      - name: Standing instructions
        kept: Instructions in Maria's project
        then: lost
      - name: AP policy
        kept: A file uploaded to the project
        then: lost
      - name: Scheduled task
        kept: The AI vendor's product
        then: rebuild
      - name: Two connectors
        kept: The AI vendor's product
        then: rebuild
      - name: Memory
        kept: The AI vendor's product
        then: rebuild
    verdict: Nothing carries
    tone: warn
    outcome: Three owned things were stored in rented places, so the carry list is empty. That is why Dave could not answer IT on Friday.
note: Rebuilding runtime settings, connections and schedules is normal. Only the owned things must carry across.
```

[^v1-operating-layer]: The Agent Is the Operating Layer, Panaversity, first edition.
[^anthropic-claude-projects]: Let Claude coordinate ongoing work with Projects, Claude Code Docs.



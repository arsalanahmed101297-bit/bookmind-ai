# 11.3 Fix one thing, and make the fix last (/managing-ai-workers/when-the-worker-goes-wrong/three-levers)

---
type: Document
title: "11.3 Fix one thing, and make the fix last"
description: "How to fix a known cause by changing the brief, the inputs or the permissions, one change at a time, test the fix, and move it into the setup so it lasts for everyone."
status: stable
order: 211.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "11"
part: II
expert_status: required
concepts: [ "11.3" ]
last_verified: 2026-10-08
sources:
  - id: v1-workflow-design
    title: "Workflow Design & Diagnosis (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/workflow-design-diagnosis-crash-course
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You tell a friend, "Dinner was not quite right." That helps nobody. "Less salt next time" changes the next dinner.

**What you will learn.** How to turn "it was wrong" into one tested change, where a repeated fix should live, when to pass a fix to its owner, and how to prove the fixed setup works. You practice it in Tasks 4, 5, 7, 8, 11 and 13 of the lab.

**Why it matters.** Most failures need a small change in the right place, not a new worker. A correction made by hand every week is lost when that person is away.

**Monday, January 18.** Maria knows where each failure lives ([11.2](where-a-failure-lives.md)). Now she fixes them, one at a time.

## Monday's fixes, one lever each

The brief, the inputs and the permissions are three levers. Most fixes pull one.

**The brief.** "Wrong" is a reaction, not a fix. A real fix says what must be present and which part of the brief controls it.[^v1-workflow-design] Maria starts with Jordan's request. She rewrites it in its four parts, with each vendor's terms taken from its vendor record, and one constraint: "If the terms are not in the vendor record, say so and do not state any terms." Tuesday's duplicate check gets a brief fix too, a line on resends like 7781-R.

**The inputs.** Point to sources by link, not by a name another file can also use, and check the input itself. The Thursday job now opens the 2027 register by its link. It also states the register's last entry date, and stops if that date is more than three business days old. An out-of-date **KSoR concept** ([8.3](../context-memory-knowledge-and-state/configure-the-workspace.md#what-dave-approves-the-official-record)) is fixed through its owner and approval, never by pasting a correction into one chat.

**The permissions.** Access can be too narrow or too wide. For the Friday replies, the worker gets back read access to the Remittances folder only, not to the whole drive. That limit is set in the drive, on the login the worker runs under, because a connector reaches whatever that login can open ([8.3](../context-memory-knowledge-and-state/configure-the-workspace.md#what-may-a-connector-reach)). Then its brief gains a rule: if an attachment cannot be retrieved, stop and report it. Widening access to make an error go away is a bad fix.

Tuesday's other cause was capacity, and none of the three levers reaches it. Dave pays for a seat, one paid place on the plan, for the recurring jobs alone. They no longer share Maria's allowance.

Three rules help you trust a fix:

- *One change at a time,* as in [5.2](../the-four-part-brief/iterate.md). The Thursday job and the Friday replies each needed two changes, so each change was made and tested alone. Change two things at once, and you will not know which one worked.
- *Re-run on the same input.* Test the fix on the case that failed, not on a new and easier one.
- *Fix what has already gone out.* A failure is every output since the fault began, not one bad output.[^v1-workflow-design] Brightline stops the payment of 7781-R, and sends a corrected reply for every reply that said "attached."

![The title reads "Turn a reaction into a targeted repair." The line below it reads "Name the missing requirement. Identify what controls it. Test one change." Step 1, "Describe the symptom," shows four reactions: "Wrong," "Too generic," "Used old data" and "Said attached." Lines join them to step 2, "Define the requirement," which asks "What must be true, and which part controls it?" Its example reads "Every draft must include the correct attachment for its recipient." Arrows lead to step 3, "Choose the repair," with three choices. The brief: "Clarify outcome, context, format and constraints." The inputs: "Identify the current source, check it and correct source errors." The permissions: "Use only the access required and authorized." A dark band, "Verify the repair," lists four checks: "Change one thing," "Retest with controlled inputs," "Correct affected outputs" and "Resume with required approvals." The last line reads "When correcting source data, keep other test conditions stable. Recovery stays within the Role Contract."](img/three-levers.png)

*Figure 11.4. Turn a reaction into a change to one lever.*

## Make the fix last

A fix that stays in one chat will be needed again by someone else. **Promotion** moves it into the configuration, the worker's setup, so it lasts for everyone.[^v1-workflow-design]

**Feedback is data.** Maria's log shows the same three corrections to the Thursday note for six weeks: credit memos listed as amounts owed, no warning for small suppliers near the 15 days in which Brightline promises to pay them, and amounts without cents. Three signs point to work worth fixing. *Repetition* means you give the worker the same thing every run. *Correction* means you fix the same flaw every time. *Variance* means different people get different results.[^v1-workflow-design] Maria's own dispute replies and the worker's draft from Jordan's brief looked nothing alike. No single person sees variance in their own work. The reviewer, who checks everyone's work, does.

Every fix has a home. Ask one question: is the fix a rule, a reference, a procedure or a boundary?

| The fix is a | It goes to | Example at Brightline |
| --- | --- | --- |
| *Rule*, a limit that always applies | Standing instructions | "Never state vendor terms that are not in the vendor record." |
| *Reference*, material the worker must read | The KSoR, through its owner | The small-supplier promise ([below](#when-the-fix-is-not-yours)) |
| *Procedure*, steps done in order | A skill, a saved procedure the worker follows | The Thursday note's checks and layout |
| *Boundary*, what the worker may reach or do | The Authority Envelope ([Chapter 7](../the-authority-envelope/overview.md)) | Read-only access to the Remittances folder, and no more |

A fix in the wrong home fails without any warning: a procedure written as one instruction loses its steps. Maria followed her own steps, and Jordan's brief gave the worker other steps. So one set of steps goes into a shared skill for dispute replies.

## When the fix is not yours

When a fix is not yours to make, you escalate: pass the problem to the person who owns that decision, with the record line that shows the cause and what you have contained. Escalate when the fix would change an approved rule or concept, widen access, change money or a promise that has already gone out, or go beyond the Role Contract. Escalate too when the same failure comes back after a tested fix, or when the record shows no cause at all.

The small-supplier warning is one of these. No approved concept holds the 15-day promise, so Maria cannot add it to the worker's rules. She sends Dave the log, the missing check and a draft of the rule, and he approves it as a concept.

## Measure, then run the week again

Before changing anything, take a **baseline**: one unchanged run, measured as [9.1](../work-that-runs-without-you/fit-the-workflow.md) shows.[^v1-workflow-design] Maria's is the note of January 7, with 40 minutes of corrections. First **consolidate**: merge steps that need the same background. Then promote what remains. Measure what matters for the work: for a payments note, accuracy before speed. Run the old and new setups side by side for two or three Thursdays before you switch.

![The title reads "Turn corrections into lasting improvements." The line below it reads "Record the pattern. Save the fix. Measure the result." Six numbered steps run in a loop. Step 1, "Log feedback": "Record the error, correction and evidence." Step 2, "Find the pattern": "Look for repeated corrections and inconsistent results." Step 3, "Give the fix a home": Rule, Reference, Procedure, Boundary. Step 4, "Capture the baseline": "Record current performance before applying the change." Step 5, "Compare side by side": "Test current and revised setups on the same cases." Step 6, "Adopt if verified": "Approve the better setup. Keep monitoring." An arrow leads from step 6 back to step 1. In the middle, a panel reads "Consolidate before you promote" and "Merge repeated fixes. Resolve conflicting instructions." A banner at the bottom reads "A correction becomes configuration only after review and testing."](img/feedback-loop.png)

*Figure 11.5. Corrections become configuration, and configuration is measured.*

Then comes the answer to Dave's Friday. Before he switches for good, the week of January 11 runs again on **Draft 8**, the Role Contract with every fix written in: the same app, no stronger model, nothing but the contract and what a run can reach. Each of the week's cases now stops, reports or passes on a line of the contract. The model did not change. The places did.

[^v1-workflow-design]: Workflow Design & Diagnosis, Panaversity, first edition.



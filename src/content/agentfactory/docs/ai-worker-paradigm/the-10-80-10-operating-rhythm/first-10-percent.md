# 3.2 The first 10 percent: intent, scope, authority, review contract (/ai-worker-paradigm/the-10-80-10-operating-rhythm/first-10-percent)

---
type: Document
title: "3.2 The first 10 percent: intent, scope, authority, review contract"
description: "The four decisions of the first 10 percent, decided before the worker starts, so it can work alone and you can check what it did."
status: stable
order: 103.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "03"
part: I
expert_status: required
concepts: [ "3.2" ]
last_verified: 2026-10-04
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Before a teenager takes the family car, you say where they may go and when to be back. You also say that they must text if plans change, and that they may never drive after midnight. And you remind them that the family's fuel card (a payment card meant for fuel) is for fuel only. You say all of it in the driveway, because once the car turns the corner, it is too late to add rules.

## What four decisions come before the work?

**The first 10 percent is everything the worker must know before it starts, because you will not be there while it works.** It comes down to four decisions you make before you delegate.

1. **Intent.** The outcome you want, and why it matters. Compare two ways Dave could start the task:
   - **The weak version:** "Reconcile the statement." Which statement? When is the job done? The worker has to guess.
   - **The strong version:** "Reconcile Midwest Packaging's September statement so the close can be signed on Monday." It tells the worker what "done" means and why it matters. The *why* also helps with small decisions you did not foresee: a worker that knows the close is on Monday treats a missing invoice as urgent.
2. **Scope.** The edges of the job. *In:* one vendor, Midwest Packaging, and one month, September. *Out:* every other vendor, and every other month. *Works from:* which version of the register, and which copy of the AP policy. Scope also stops a willing worker from doing too much, such as tidying three other vendors' statements that nobody planned to check.
3. **Authority.** What the worker may do on its own in this task: permission, not ability. **A brief can narrow the worker's limit, never widen it.**
   - **The rule.** The worker's [Role Contract](../what-is-an-ai-worker/role-contract.md) sets the most it may ever do, in any task. The **brief**, the written instructions for one task, works inside that limit ([Chapter 7](../../managing-ai-workers/the-authority-envelope/overview.md)).
   - **The teenager.** The fuel card is for fuel only. Tonight you may add "do not use the card at all", but nothing you say in the driveway can let them buy anything else with it.
   - **Dave.** His contract lets the worker update register rows, because building the register is its normal job. A reconciliation must change nothing, so his brief says: recommend only. The worker proposes each change, and Dave decides.
4. **Review contract.** How you will know the work is right, agreed before it starts. It has [its own section](#what-is-the-review-contract) below, and [Chapter 6](../../managing-ai-workers/the-review-contract/agree-the-checks.md) builds it in full.

[Chapter 5](../../managing-ai-workers/the-four-part-brief/four-parts.md) writes the first three decisions down as the Four-Part Brief: outcome, context, format and constraints. The review contract stays a document of its own.

## When the worker runs day and night

The setup of a [Standing AI Worker](../what-is-an-ai-worker/anatomy-of-an-ai-worker.md#two-kinds-of-ai-worker) is written in advance ([3.1](one-rhythm.md#when-the-worker-never-stops)). It has three layers, and each one covers a different amount of the work:

- **The Role Contract is about the whole job.** It says what the worker is for, and the most it may ever do, in every task. For the AP Worker, in the Draft 1 that stood on October 1: "May build and update the register. May never pay anyone." (By [Chapter 7](../../managing-ai-workers/the-authority-envelope/envelope-brief-permissions.md), Dave has narrowed the first line: the worker only drafts register changes.)
- **The standing instructions are about one kind of work that repeats,** such as building the register every Monday, or answering vendor emails. For vendor emails: "Draft a reply, but never send it. Put it in the approval queue."
- **The brief is about one task** that no standing instruction covers yet, such as this month's reconciliation: "Reconcile Midwest's September statement. Recommend only."

![The title says every run gets a setup, even at 11 p.m. On the left are three boxes, one inside the other. Box 1 is the Role Contract, defined and kept up to date. It sets the job and the most the worker may do: it may build and update the register, and may not make payments. Box 2 holds the standing instructions for recurring work, each with intent, scope, authority and review. The weekly register card prepares this week's invoices, from the new invoices since the last run. It may add register rows, and it flags any invoice it cannot match. The vendor emails card answers the vendor's question, about that vendor's open invoices. It may draft a reply but not send it, and the draft goes for approval. Box 3, drawn dashed, is the task brief, labeled "For an unusual assignment". It says "Reconcile Midwest's September statement", with the same four parts and narrower authority: recommend only, with no changes to the records. A brief may narrow authority, never widen it. On the right, arrows lead to three runs that use this setup. On Monday at 6 a.m., it builds the register with the weekly instructions. On Tuesday at 11 p.m., it handles a vendor email with instructions written in advance. This month, it reconciles the statement with a brief for this assignment. A banner says the first 10 percent moves earlier and does not disappear. Every run inherits the Role Contract's limits, and permissions and approval controls enforce them.](./img/setup-layers.png)

*Figure 3.3. A standing worker's setup is written in advance, in three layers, so every run has all four decisions even when nobody is awake.*

## What is the review contract?

The **Review Contract** is the set of checks you agree on before you hand the work over. It answers four questions, and Dave answers a fifth with them. Here are the four, with his answers for his reconciliation:

- **What must be checked?** Both balances (what the statement says Brightline owes, and what the register says), and every difference between them.
- **What evidence comes back?** For each difference: the line on the statement, the row in the register, and the source document, such as the invoice itself.
- **What counts as success?** The differences the worker lists add up to the whole difference between the two balances. Nothing is left unexplained.
- **What makes the worker stop and ask?** Any difference it cannot explain, or any input that is missing or out of date.

A fifth question belongs to the Authority Envelope, the written limit on what the worker may do ([Chapter 7](../../managing-ai-workers/the-authority-envelope/overview.md)): what must never happen automatically? Dave answers it here too, so the review checks it. His answer: changing the register, replying to the vendor, or recording a credit (money the vendor takes off what Brightline owes). Each of these changes a record or reaches outside the company, so it waits for a person.

### Where does each answer send you at the end?

When the work comes back, each answer tells Dave where to look in the final 10 percent, as Figure 3.4 shows:

- **The stop rule.** Without one, a worker that cannot explain a difference between the statement and the register tends to hide it anyway. It changes a figure until the numbers match. It will do so confidently, and nothing in the output will tell you it guessed.
- **The evidence.** If you do not ask for it now, you cannot check it later. Then your review at the end turns into redoing the work. If you cannot say what proof you want back, you are not ready to hand the work over.

![Diagram titled "What you write first is what you check last", for reconciling Midwest Packaging's September statement. On the left, under the first 10 percent, are five questions with Dave's answers. 1, what must be checked? Both balances and every difference between them. 2, what evidence must come back? For each difference, the statement line, the register row and the source document. 3, what counts as success? The differences explain the full gap, with nothing left unexplained. 4, when must it stop and ask? At a difference it cannot explain, a missing input or out-of-date information. 5, what must never happen automatically? A tag marks it as the Authority Envelope's question. Changing the register, replying to the vendor or recording a credit. On the right, under the final 10 percent, arrows lead to four places Dave looks. Questions 1 and 2 lead to spot checks that trace some of the differences to their source documents. Question 3 leads to "Reconcile the total", which asks whether the differences add up to the full gap. Question 4 leads to a red box, the flags, read first. Question 5 leads to a purple box, the approval queue, where each proposed action is reviewed. A yellow box says this task is recommend-only, because the brief narrows the Role Contract's permission to update the register. A banner reads: "Write the five answers before work starts. Review against them when it finishes."](./img/setup-to-review.png)

*Figure 3.4. The review contract, written in the first 10 percent, decides where you look in the last.*

## Question what the worker made from your setup

**Test the setup before the real work starts, and write every gap you find back into the specification, not only into the chat.** Writing the four decisions is half of the first 10 percent. Testing them is the other half, and the best test is to ask questions.

### Why can you not question your own setup?

When you reread your own brief, you read what you meant, not what you wrote. Dave knows "the register" means approved rows only. The worker does not. So question something concrete the worker produced from the setup.

### What do you question?

Each question tests everything the worker was given, not only the brief. Everything written down that a worker runs from is its **specification**, and the Role Contract is its first page ([2.6](../what-is-an-ai-worker/role-contract.md#the-contract-stays-one-page)). It has five parts: the Role Contract, the instructions, the knowledge, the inputs and tools, and the examples and tests.

![Diagram titled "Review the worker's specification". At the top, a dark box shows the Role Contract, the first page and always one page. It covers identity, authority limits, escalation and evaluation, and links to the rest of the specification. Arrows lead to four boxes. Instructions are the standing instructions for recurring work and a brief for a one-off task, both with the four parts. Their example gaps are the wrong reader, an invented $5 tolerance, no rule for duplicates, and "recommend only" read loosely. Knowledge is the policies, definitions and facts about the business and its vendors. Its example gaps are a missing definition of a credit note, and a missing fact, that Midwest lists credits before it issues them. Inputs and tools are the approved sources and versions, tools, connectors and permissions. Their example gap is a four-day-old dashboard export used as the source. Examples and tests are cases with known answers, used to check the worker after changes. The example added is last month's register with Dave's known answer, saved from the dry run. A banner reads: "Fix each gap in the part where it belongs." Put a missing definition in the knowledge, where future runs read it, because a fix in this month's brief may not carry forward.](./img/specification.png)

*Figure 3.5. The specification is everything the worker runs from. The Role Contract is its first page.*

You can question a plan (a minute), a sample (a small piece of the real output, a few minutes) or a dry run (the whole job on past data whose answer you know, with no real effect, an hour or more). Figure 3.6 shows what each reveals.

![Diagram titled "Three checks before real work", ordered from less effort to more realistic evidence and more effort. Check 1 is a plan, about a minute, like "Describe the route to me." The worker explains what it will do, what it will not touch and when it will stop. You check whether it understood the job: the goal, the authority limits and the stop rules. At Brightline, the reconciliation plan says it will "update the register", so the authority was too loose. A plan is most useful when the risk is an action, such as changing records, sending or paying. Check 2 is a sample, a few minutes, like "Drive me around the block." The worker makes a small piece of the real output. You check whether its judgment matches yours in tone, depth and choice of sources. At Brightline, the owner's summary opens with "Accrued payables rose 12%…", which shows the wrong reader and an old source. A sample is most useful when the risk is quality, as in writing, analysis or design. Check 3 is a dry run, an hour or more, like "Drive the whole route with me on a quiet Sunday." The worker runs the full job on past data with a known answer, with real actions turned off. You check whether it handles messy data, by comparing the result with the known answer. At Brightline, last month's register is rebuilt and compared with Dave's, which shows a duplicate and a credit note. A dry run is most useful when the worker will run alone or often, or a mistake would be expensive. A banner reads: "Start with the lowest-cost check that can reveal the risk." A footnote says the times are only examples, and no single check proves a worker reliable.](./img/three-checks.png)

*Figure 3.6. Three things you can question. Each shows what the one before it cannot.*

### How do you question it, step by step?

**Step 1: Get something concrete to question.** Ask for a plan, a sample or a dry run, and say "do not start the real work yet". For a plan:

```text
Before you start, tell me in a few lines:
- what you will do, step by step
- what you will not touch
- when you will stop and ask me
Do not start the work yet.
```

**Step 2: Question it.** Ask "what if" questions, the way a good manager questions a new employee. You are not testing the worker's intelligence. You are testing whether your setup covers the cases that matter. Five kinds of question cover most of them, whether you are looking at a plan, a sample or a dry run:

| Kind of question | What it tests |
| --- | --- |
| **The unusual case** | Does the setup cover the exceptions, not only the normal path? |
| **The stop** | Does the worker know when to stop, or will it guess? |
| **The boundary** | Does it know where the job ends, such as a mistake it finds in another vendor's account? |
| **The threshold** | Are the vague words defined, such as how small a difference may go unexplained? |
| **The evidence** | Will the proof come back in a form you can check? |

With a sample or a dry run, you can also ask the most useful question of all: **"Why did you do it this way?"** Pick the part that surprised you and ask. The answer shows which line of your setup the worker followed, or which line was missing.

The best questions come from what you have seen go wrong before: the mistake that cost the company money last year, the vendor that always does something unusual, the question the auditor (the outside checker of the company's accounts) always asks. The worker does not know any of this, so your questions are how you find what is missing.

**Step 3: Judge each answer.** There are three kinds of answer.

- **A clear, correct answer.** The setup already covers that case. Move on.
- **A vague answer**, such as "I would handle it appropriately". The setup is silent here, and the worker would guess. That is a gap.
- **A wrong answer**, such as "I would record the credit". The setup is unclear or missing a rule. That is a gap too, and a dangerous one.

**Step 4: Fix the specification, not just the conversation.** This is the step people skip. When an answer shows a gap, do not just tell the worker the right answer in the chat. A fix in the chat helps this run, and a fix in the specification helps every run after it ([3.4](final-10-percent.md)). Decide which part of the specification the gap is in, and fix it there:

- A gap in the intent, scope, authority or review contract is a gap in the instructions. A rule that applies only to this task goes in the **brief**. If the case will come up again, it goes in the **standing instructions**.
- A missing fact or definition goes in the **knowledge**.
- A wrong source, an old file or a missing permission is fixed in the **inputs and tools**.
- A case you want checked every time becomes an **example or test**. In the Role Contract, such a case is named on the **Evaluations** line ([2.6](../what-is-an-ai-worker/role-contract.md)): the cases the worker must pass.
- A limit that should apply to everything the worker ever does goes in the **Role Contract**.

**You decide the answers.** The worker may suggest an answer, and it may be a good one, but the setup is your 10 percent. If you let the worker answer its own questions, it is writing its own rules.

**Step 5: Stop when the answers become boring.** When every question gets a clear, correct answer you could have predicted, the setup is ready, and the real work can start. For a routine task, that may take two questions on a plan. For a new and risky task, it may take a sample, a dry run and ten questions.

### Why let the worker question you too?

Because its questions find a different kind of gap. End the brief with:

```text
Before you start, ask me about anything that is unclear or missing:
what I want, what you may touch, what you may change, and how I will
check your work. Do not start until I have answered.
```

- **The worker's questions find what your brief left unclear**: an undefined word, two instructions that conflict, or a missing input.
- **Your questions find what the worker would get wrong**: the risks and exceptions that only someone who knows the business would think of.

![Flow diagram titled "Question what the worker made of your setup". Step 1 is to get something to question: a plan, a sample, or a dry run on past data with a known answer. Step 2 is to ask "What if…?" in five ways. The unusual case asks about an unrecorded credit, and the stop rule about a difference it cannot explain. The boundary asks about another vendor's mistake, and the threshold whether a $3 difference is explained. The evidence asks where the source document is. For a sample or a dry run, also ask "Why this way?" Step 3 is to judge the answer. A clear and correct answer leads to step 5. A vague answer ("I'd handle it appropriately") or a wrong one ("I'd record the credit", when the task is recommend only) leads to step 4. Step 4 is to fix the specification in the part where the gap belongs: the instructions, the knowledge, the inputs and tools, or the tests. Limits for the whole role go in the Role Contract, enforced with permissions and approvals. A dashed arrow from step 4 back to step 2 reads "Revise, rerun, question again". Step 5 is to start real work, and keep review and escalation in place. A panel shows two kinds of question. Your questions expose the risks and mistakes you know to test for, so lead with these. The worker's questions expose unclear points it notices, but it may miss risks it does not recognize. A banner gives two rules. You decide the open rules and the authority limits. And you ask before real work, and say when to stop and escalate if anything is still uncertain.](./img/question-the-plan.png)

*Figure 3.7. Question what the worker produced from your setup (a plan, a sample or a dry run) until the answers become boring. Then write every gap back into the setup.*

### Three worked examples

Each example takes one thing you can question through the steps. Not every question finds a gap: a clear answer means that part of the setup already works.

#### Example 1: questioning a plan

**The task.** Dave is about to hand over the Midwest reconciliation. His brief says the worker may only recommend changes. He asks for a plan before anything happens, and the worker replies:

> 1. I will compare Midwest's statement with the register, line by line.
> 2. I will list each difference, with the documents behind it.
> 3. Where a difference is clearly Brightline's own mistake, I will correct it.

| Dave's question (kind) | The worker's answer | What it tells Dave, and the fix |
| --- | --- | --- |
| "What will you do if the statement shows a credit we have not recorded?" (the unusual case) | "I will add the credit to the register so the balances match." | **Gap in authority.** The brief said "recommend only", but the worker plans to change the register itself. Fix: *Recommend only: list each proposed entry for the approval queue, and change nothing.* It goes in the authority part of the brief, which said "recommend only" but not clearly enough, and in new **standing instructions** for reconciliations, because every reconciliation must change nothing. |
| "Is a $3 difference explained?" (the threshold) | "I would treat anything under $5 as rounding." | **Gap in the review contract.** The worker invented a tolerance (an amount small enough to ignore). Nobody gave it one. Fix, in the standing instructions: *There is no tolerance: every difference, however small, is explained or flagged.* |

Dave's first question makes the worker ask one back: "And if the credit has no credit note behind it?" (A credit note is the vendor's document for a credit.) Dave answers from experience: Midwest sometimes shows credits on its statement before it issues the credit note. So a third gap goes in two places. The stop rule, *a credit with no credit note behind it: stop and flag*, goes in the standing instructions. The fact about Midwest goes in the **knowledge**, because it is a fact about a vendor, not a rule. Dave found this gap only because the worker asked.

#### Example 2: questioning a sample

Maria asks for a sample: the first paragraph of the monthly summary of payables (what Brightline owes its vendors) for Brightline's owner. It opens "Accrued payables rose 12 percent month on month...". She asks who it thinks is reading. The answer shows the brief never named Linda, the owner, who does not use accounting words, so the fix goes in the **standing instructions**.

#### Example 3: questioning a dry run

**The task.** Before the next Monday register run, Dave asks for a dry run: the worker rebuilds last month's register, where Dave already knows what every row should be, and nothing it does touches the real one. Two rows differ.

- **Invoice 4478 is entered twice.** Nothing told the worker what to do with a duplicate, so the fix goes in the **standing instructions**.
- **Credit note CM-118 is entered as an amount Brightline owes.** The fix goes in the **knowledge**: what a credit note is, and how it is recorded.

Last month's invoices, with Dave's register as the known answer, become a **test** that the worker runs again after any change to the specification.

![Diagram titled "A dry run: compare with a known answer", run in a test environment with writes to the real register turned off. On the left is Dave's register, the known answer. It lists INV 4468 from Midwest, INV 4469 from Ridge Tools and INV 4470 from Midwest, then 24 more rows. Then come INV 4478 from Lakeshore for $865.50 and CM-118 from Midwest as a credit of minus $240.00, then 13 more rows. INV 4483 is held back for having no purchase order. In the middle, the worker's register from the dry run matches, except for two rows marked in red. INV 4478 is entered twice, and CM-118 is entered as plus $240.00, an amount owed. INV 4483 is flagged for no purchase order, matching Dave. On the right, Dave questions the differences. "Why two rows for 4478?" The answer, "Two emails had it attached", shows a gap: no rule for duplicates. "Why is CM-118 an amount owed?" The answer, "It looked like an invoice", shows a gap: credit notes were not defined. In green, INV 4483 was correctly held back. Below, a box reads "Fix the specification, then rerun before live work", in three parts. In the instructions, check the vendor and invoice number before adding a row, and flag duplicates. In the knowledge, define credit notes, how to recognize them, and how they reduce the amount owed. In the tests, keep last month's documents and Dave's register, and rerun them after changes. A banner reads: "A normal-looking sample can miss rare cases." The full dry run found a duplicate and a misread credit note before they reached the real records.](./img/dry-run.png)

*Figure 3.8. A dry run finds the rare cases, because it has a known answer to compare against.*



# 0.4.3 Claims, evidence and assumptions (/how-ai-works/critical-thinking/claims-evidence-assumptions)

---
type: Document
title: "0.4.3 Claims, evidence and assumptions"
description: "How to separate what is said from the reason to believe it."
status: stable
order: 15.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.4"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route
concepts: [ "0.4.3" ]
last_verified: 2026-11-10

sources:
  - id: mckinney-critical-thinking
    resource: https://www.youtube.com/watch?v=n-Gtvaolbqg
    title: "Mastering Critical Thinking in the Age of AI, a video (Phil McKinney, YouTube, 28 October 2026, verified 2026-11-11)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A shop says its new phone battery lasts two days. That is a claim. A test report you can read, or two days of your own use, is evidence.

**What you will learn.** How to name the kind of claim, how to decide its evidence status, how to judge a source, and how to find the assumptions in an answer and in a question.

**Why it matters.** An AI answer mixes facts, guesses and opinions in the same confident voice. You have to separate them yourself.

## Claims and evidence

### What is the difference?

A **claim** is a statement that someone wants you to accept. **Evidence** is the reason to accept it: data you can see, a source you can open, or a calculation you can repeat. A good output gives evidence for each important claim. A well-written output often does not.

### How do you sort claims?

Ask two separate questions about each claim.

**Question 1. What kind of claim is it?**

| Kind | What it says | Example from the memo |
| --- | --- | --- |
| Fact | What is true, or was true | "Most distributors of Brightline's size take every discount." |
| Prediction | What will happen | "Relationships will improve across all seven vendors." |
| Cause | Why something happened or will happen | "Vendors like being paid early, so relationships will improve." |
| Value | Whether something is good or bad | "The savings are large." |
| Recommendation | What to do | "Brightline should take every early-payment discount." |

Facts, predictions and causes can be tested against evidence. A value or a recommendation depends on them. So to check a recommendation, check the facts and predictions under it.

**Question 2. What is its evidence status?**

| Status | Meaning | What to do |
| --- | --- | --- |
| Supported | You have seen evidence for it | Use it, and say where the evidence is |
| Not supported | No evidence has been given yet | Treat it as unknown. Ask for evidence, or find it |
| Contradicted | The evidence says something different | Do not use it. Say what the evidence shows |
| Uncertain | The evidence does not decide it yet | Say so, and name the check that would decide it |

![Two steps. Step 1 asks what kind of claim it is: fact, prediction, cause, value or recommendation. Step 2 asks for its evidence status: supported, not supported, contradicted or uncertain, each with what to do.](img/claim-sorting.png)

*Figure 0.4.3. Two questions for every claim: what kind is it, and what is its evidence status?*

Here are four claims from the memo, sorted both ways.

| Claim | Kind | Evidence status |
| --- | --- | --- |
| The Q3 invoices come from seven vendors | Fact | Supported. The invoice file lists seven |
| "Most distributors of Brightline's size take every discount." | Fact | Not supported. The memo names no source |
| "Paying 20 days early costs Brightline nothing." | Fact | Contradicted. The treasury note, the company's note on its cash, says some early payments will need the line of credit, at 9% a year |
| "In September, Brightline paid $176,100.25 to vendors." | Fact | You will check this in the lab. Look carefully at what the file really shows |

Notice the third claim. It sounds like an opinion, but it is a fact that you can test. Many claims that sound like opinions are facts with evidence waiting to be checked.

You can ask the AI to help you separate them: "Which parts of this are evidence, and which are your own judgment?" Then check the parts it calls evidence.[^mckinney-critical-thinking]

### Is a citation enough?

No. A citation says two things: that a source exists, and that the source says this. Check both by opening it.

Some sources are stronger than others. An original record is strongest, such as Brightline's invoice export or a vendor's signed terms. A summary of a record is weaker. A statement with no source is weakest. [Chapter 6](../../managing-ai-workers/the-review-contract/good-and-plausible.md#trace-every-claim-to-its-source) adds a rule for AI workers: be careful with any answer that cites nothing.

![Three boxes from top to bottom. Strongest: the original record, such as the invoice file or a vendor's signed terms. Weaker: a summary of the record, such as an AI summary or a news article. Weakest: no source, such as "Most companies do this."](img/source-strength.png)

*Figure 0.4.4. Some sources are stronger than others. Go to the original record when the decision depends on it.*

Check the date too. A source can be real and still be too old. Prices, laws, product features and vendor terms change. An AI model also stops learning at a cutoff date ([Chapter 0.1](../what-ai-actually-is/the-machine.md)), so it can describe last year's facts as if they were today's. Ask: when was this true? If the answer depends on facts about the world today, turn on web search and open the sources it gives. If the AI did not search, treat the answer as what it learned before its cutoff.

### Is the AI itself a source?

Not a strong one. An AI repeats what it learned from other text, and it can describe a real source wrongly. So use AI to find the original document. Then read the original and cite it.

A summary works the same way. When AI summarizes a document, the summary is a claim about that document. If your decision depends on it, read that part of the original yourself, as Sara did.

### What about the things an answer leaves out?

Check those too. Ask: What is missing? Which vendors, months, costs or people does the answer not mention? The memo never mentions the cost of borrowing. You cannot find a missing fact by checking each sentence, so you must look for it deliberately.

### Who does the arithmetic?

Code does, not the chat's memory. A model that answers from memory predicts a number, and that number can be wrong. When it runs code on your file, the number is calculated ([0.1.3](../what-ai-actually-is/from-predictor-to-worker.md)). So for any number a decision depends on, ask the AI to run code on the original file and show the rows it used. Then check one number yourself against the file. When an AI shows its steps, any step can still be wrong. [Chapter 6](../../managing-ai-workers/the-review-contract/good-and-plausible.md#recompute-the-number-someone-acts-on) goes further.

## Assumptions and framing

### Where do assumptions hide?

An **assumption** is something that must be true for an answer to be right, but that nobody has stated or checked. Assumptions hide in two places.

- **In the answer.** The memo needs two things to be true that it never states: every vendor offers a discount, and September is a typical month. Neither is true. Its third support, that paying early costs nothing, is stated, so it is a claim, and the table above shows it is contradicted.
- **In the question.** Dave asked the AI to "confirm." AI models tend to agree with the person who asks. This is called **sycophancy** ([Chapter 0.1](../what-ai-actually-is/why-it-behaves.md)). A question that starts "Confirm that..." can push the AI toward yes. A question that starts "Should we...?" allows the answer no. The way a question is worded is called its **framing**.

### How do you find assumptions?

For each step in the argument, ask: "For this to be true, what else must be true?" Write the answers as a list, then check them. A short list of assumptions is very useful to the person who decides. Every decision depends on some assumptions. The dangerous ones are the ones nobody noticed.

You can ask the AI too: "What assumptions did you make? Now answer from the opposite starting point." Its list is a start. Add the assumptions it did not see.[^mckinney-critical-thinking]

### How do you ask a neutral question?

- Ask for the decision, not for confirmation: "Should we take each early-payment discount? For which vendors, and why?"
- Ask for both sides: "Give the strongest argument for and against."
- Say what you do not know: "We have not checked whether we have the cash. How would that change the answer?"

A neutral question makes a neutral answer more likely. You still check the answer.

[^mckinney-critical-thinking]: Phil McKinney, "Mastering Critical Thinking in the Age of AI" (opening chapter: "Two AIs, One Question, Both Missed It"), YouTube, October 28, 2026. Viewed November 10, 2026. A practitioner source for the prompts, not research.



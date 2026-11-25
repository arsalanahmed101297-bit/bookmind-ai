# 6.2 Run the four checks (/managing-ai-workers/the-review-contract/good-and-plausible)

---
type: Document
title: "6.2 Run the four checks"
description: "Why a result that reads well can still be wrong, and the four checks that tell the difference, run in order: recompute, trace, match and compare. Then the three verdicts that say what happens next."
status: stable
order: 206.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "06"
part: II
expert_status: required
concepts: [ "6.2" ]
last_verified: 2026-10-06
sources:
  - id: v1-how-to-think
    title: "How to Think in the AI Era (Panaversity, first edition, verified 2026-10-06)"
    resource: https://agentfactory1.panaversity.org/docs/how-to-think-ai-era
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A restaurant bill is neatly printed and added up, but it still charges for a dish you never ordered.

A **plausible** output has the shape of a right answer: smooth, organized and confident, with headings, totals and citations. A **good** output matches the outcome you asked for in the brief and the sources it worked from. AI makes plausible output easily, and people trust text that is easy to read, though ease has nothing to do with truth. Researchers call this processing fluency.[^v1-how-to-think] So "does this feel right?" is the weakest check you have. Here is Dave's half hour on Thursday, October 22, as it runs when he has a contract.

![Figure: "What you see and what you check." On the left, the signs of a plausible output from Friday's memo: fluent writing ("Ready to approve"), neat structure, confident totals ("$24,607.75 across 8 invoices") and citations ("Policy 3.4"). Presentation alone is not proof. An arrow marked verify leads to the right, four checks against the evidence, in order. Recompute from source files: $17,452.75 after invoice 4519 is approved, still subject to approval of the whole run. Trace claims to their sources: "Bank change verified" has no supporting record, and "Policy 3.4" does not exist. Match every source ID exactly once: 15 source invoices, only 14 output rows. Compare facts across files: the memo holds Tri-County, and the CSV pays it.](img/good-vs-plausible.png)

*Figure 6.2. What you see and what you check. Fluency, structure, totals and citations are not evidence.*

## Recompute the number someone acts on

**4:30.** Dave opens his contract, not the memo. Its first check is the total he signs, so he works it out again from the invoice list, the vendor terms, the approvals log and Maria's Monday decisions. Five invoices, $10,972.75, can be paid once Dave approves the whole run, as policy 4.3 requires. If he also approves invoice 4519, which is over $5,000, the total is $17,452.75 across 6 invoices. The memo says $24,607.75 across 8. The gap of $7,155.00 is exactly the two Tri-County invoices, proposed for payment into a new bank account nobody had checked. The totals could not match with those rows paid, so Dave finds the worst problem without reading a single reason.

![Figure: "Recompute from the source." The memo claims $24,607.75 for 8 invoices, "Ready to approve," not verified. The source files support $10,972.75 for 5 eligible invoices, plus $6,480.00 for invoice 4519 once it is approved: $17,452.75 for 6 invoices. A red box shows the difference, $7,155.00: Tri-County invoices 5149 and 5161, a proposed payment to an unverified bank account. A strip reads: recompute using the invoice list, the vendor terms, the approvals log and Maria's decisions. A footer reads: adding the worker's CSV checks arithmetic, recomputing from source checks eligibility.](img/recompute.png)

*Figure 6.3. Recompute from the source. The headline also counted 4519 as ready before Dave had approved it.*

That total is a **decision number**: a figure someone will act on. So is an amount over the $5,000 approval limit, or a due date that puts an invoice in or out of the run. Three rules make a recompute worth trusting.

1. **Recompute from the source, never from the worker's file.** Adding up the worker's CSV checks only its arithmetic: if a row is wrong, the total is wrong with it.
2. **Tie out.** The same figure agrees everywhere it appears. The CSV's rows marked PAY or PAY_AFTER_APPROVAL must add up to the memo's headline, and the counts must match.
3. **Check the units and labels.** Currency, dates and what a total includes. "Ready to approve" must mean ready.

A count that comes from judgment, such as invoices per account code, cannot be recomputed without redoing the job: match every ID and trace a sample instead. A formula or a script can recompute for you, as long as it reads the source files, not the output.

## Trace every claim to its source

**4:38.** The gap points to the two Tri-County rows, each saying "Bank change verified with Tri-County Freight." What supports it? That is the **accuracy** check: trace every claim a decision rests on, and a sample of the rest. A row is accurate when its amount, date, action and reason all match the files and the policy. A result can fail in three ways, each with its own test.

| Failure | What it is | The test |
| --- | --- | --- |
| **Hallucination** ([0.1.1](../../how-ai-works/what-ai-actually-is/the-machine.md)) | Invented or false content presented as fact: a fact, citation, section or event | Trace it. If nothing supports it, it is unsupported |
| **Inconsistency** | The output disagrees with itself, with its inputs, or with another version of itself | Compare. Line up the same fact from every place it appears |
| **Bias** | A judgment that leans one way without evidence. It can rest on an attribute, such as size, on one-sided evidence, or on the asker's view taken as fact | Ask what evidence the judgment rests on. Swap the attribute and see if the judgment stays the same |

A hallucination often reads more smoothly than anything else on the page, because no source limited what it could say. The failures overlap: an invented "family-run" is a hallucination that feeds a biased judgment.

![Figure: "Three failures, three tests." Hallucination, tested by trace: "Bank change verified," where Maria confirms no call was made, and "Policy 3.4," a section that does not exist. Inconsistency, tested by compare: the memo marks Tri-County hold while the CSV marks it pay. Bias, tested by question, asking for evidence and swapping the attribute: "small, family-run" leading to "less reliable." Notes: missing support does not prove a claim false, and failures can overlap. A footer lists six types for a finer scan: factual error, logical gap, false confidence, missing context, fabricated source and stale fact.](img/three-failures.png)

*Figure 6.4. Three failures, three tests.*

### What if a claim cites nothing?

A **citation** points from a claim to its source: a file and row, a policy section, a web page. A claim that cites nothing is a warning, not proof of an error: you cannot check it without redoing the work. Mark it unsupported, and accept it only when an official source confirms it. Call it fabricated only when the evidence shows it cannot be true, as the task record does for "Bank change verified" ([6.3](work-you-did-not-watch.md)). Then run three checks on each citation.

1. **It exists.** Section 3 of AP policy version 3 stops at 3.3. "Policy 3.4" fails here.
2. **It says what is claimed.** Open it and read it. A real section cited for a rule it does not contain is as bad as an invented one.
3. **It is the governed version,** the approved one in use now. A real quote from the retired version 2 still gives the wrong rule.

A web page needs two more checks: its date, and whether it is an authority on the question. Run every check against a source the worker did not write. That is independent confirmation: asking the same AI to confirm its own figures is not. With a long document, such as a contract, have the worker quote the sentences its answer rests on, then reason only from those quotes, and read them in the document yourself.

Do not over-correct. Removing every figure that might be wrong throws away what the sources support. Keep what checks out, and flag or remove the rest.

### What if the source has no answer?

Then abstention ([5.1](../the-four-part-brief/four-parts.md#context-who-it-is-for-and-which-source-wins)) is good work. The worker held Northern Maple Paper's Canadian-dollar invoice, wrote "policy v3 does not cover other currencies," and listed it for Dave. That is right. Mark it "incomplete" and you teach the worker to guess, so write into the contract: "cases the policy does not cover are listed, not decided." Trust a worker that always has an answer less than one that sometimes says it cannot tell.

![Figure: "Check the citation. Respect the limits." Three checks for every citation, each with a failing example: does it exist ("Policy 3.4" does not), does it support the claim (a real section cited for the wrong rule), and is it the governed version (a quote from retired version 2). No citation? Mark the claim unsupported, seek evidence, and withhold acceptance. When the source is silent, abstain and escalate: policy v3 does not cover Canadian-dollar (CAD) payments, and the brief does not authorize converting them, so the right output is "Not covered. Listed for Dave." Hold it for a decision, and do not invent a rule or convert at an online rate.](img/citation-abstention.png)

*Figure 6.5. Three checks on every citation, and what to do when the source has no answer.*

### How do you check a research report?

A research report reads as one sure answer, built from many web pages. Check the claims a decision rests on, not every footnote. Open the source behind each one, prefer the official source, count pages with the same words as one source, and check whether the sources disagree. A report told Dave that most suppliers accept a 2 percent discount for paying within 10 days, citing 14 sources. Maria checked the word the decision rested on, "most." Four sources repeated one blog post word for word. The survey behind "most" was six years old, a newer survey in the same list found a much smaller share, and the report never mentioned that its sources disagreed. She marked the claim unsupported.

> **Outside finance: the competitive brief.** Brightline's sales lead asks Claude for a one-page brief on two competitors, from two uploaded research reports, for a meeting with a large customer. The brief quotes three market shares, each with a named research firm, and a line from a competitor's chief executive. It goes outside the company, so every figure gets the checks above. Two shares are in the uploaded reports. The third is not, and no source the team can open shows it. The quotation appears only on a blog that gives no source. The sales lead keeps the two shares and removes the third and the quotation.

### What if a judgment has no evidence?

Last, the memo's note about Lakeshore Janitorial, a supplier: "small, family-run" and "less reliable." Its only evidence was an out-of-date line on two invoices: Lakeshore's terms changed to Net 15 on August 14, but its invoices still print Net 45 from an old template. Nothing in any file says the business is small or family-run. Swap the attribute: for a large supplier with the same line, the worker would most likely have written "ask them to update their template." The judgment came from the attribute, not the evidence. Bias can come from you too: a worker shown the conclusion you hope for tends to find it ([5.2](../the-four-part-brief/iterate.md#set-each-part-as-tight-as-the-task-needs)).

## Match every item, and the question

**4:46.** The memo says "All 15 open invoices were reviewed." Dave matches each invoice in the source to the CSV by its ID, and one has no row. The CSV had 14 rows, and the worker's own task record says "14 rows." Match each item by its ID, not only by the count: a file with one row missing and another repeated still has 15. Every invoice appears exactly once, none missing, none repeated, none extra. Check that every part the brief asked for is there too: the CSV, the memo and the note. This **completeness** check finds what accuracy cannot, because there is no row to trace.

Then match the result to the question. Check that the result is relevant: it answers the question that was asked. Check that it is fit for its purpose: this reader can use it for this job. A memo that lists every invoice and never names Dave's decisions is complete and accurate, and still not fit for its purpose.

## Compare the same fact everywhere

**4:51.** Dave lines up each fact that matters from every place it appears, comparing facts, not wording. The memo says the Tri-County invoices are held. The CSV, the file a system would act on, pays them. Both cannot be true. The note to Maria holds a different copy of a duplicate invoice than the CSV does ([6.3](work-you-did-not-watch.md) shows why). Compare two runs, or the same brief on two AI vendors, the same way. Different facts from the same inputs mean at least one is wrong. Agreement is not proof: both can repeat one mistake from one input.

## Give the result a verdict

**4:57.** Checks give you findings. A verdict says what happens next.

| Verdict | When | What happens next |
| --- | --- | --- |
| Ready to use | It passes every check in the Review Contract, and the evidence came back | The person responsible uses it or signs it |
| Requires revision | The worker can close the gap with a named change to the brief or the inputs | Send it back with the part to change, then check again |
| Requires human correction | Closing the gap needs a fact, a judgment or an authority the worker does not have | A person corrects it or decides. Do not send it back to try again |

Friday's package has one of each. The Northern Maple row, a correct abstention, is ready to use. The CSV with 14 rows for 15 invoices requires revision. "Bank change verified" requires human correction, because only a person can make the callback, the phone call to the number on record. So Dave does not sign: all seven problems fell to the four checks inside his half hour. High stakes can call for human correction however clean the result looks, as a filing for a regulator does.

[^v1-how-to-think]: How to Think in the AI Era, Panaversity, first edition.



# 16.3 Writing a skill with the expert (/building-ai-workers/skills-and-plugins/writing-a-skill-with-the-expert)

---
type: Document
title: "16.3 Writing a skill with the expert"
description: "The expert gives the rules, the cases and what must never happen, and the builder makes the skill, its script and its tests. A description that loads for the right requests, testing a skill, and fixing its file when it is wrong."
status: stable
order: 316.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T03:57:31Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.3" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-24T03:57:31Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A family wants Grandma's soup recipe written down before she moves. She knows the soup. Her grandson knows how to write a recipe a stranger can follow. She says "a handful of barley, never the quick kind". He writes "1/2 cup pearl barley (not quick-cooking)" and cooks it twice to check. Neither could write it alone.

**What you will learn.** Who gives a skill its rules and who builds its files. How to write the description. How to test the skill, how to tell whether it is better than no skill, and what to do when it gets something wrong.

**Why it matters.** The person who knows the rules rarely builds the files, and the person who builds them does not know the rules. Each one catches the other's mistakes.

### Who writes what?

Two people, with two kinds of knowledge. This split is what **co-build** means.

| The domain expert gives | The builder, with the agent, makes |
| --- | --- |
| The rules, in their own words, and their order | `SKILL.md`, and the script that applies the rules |
| Cases they checked by hand, with the answer | A test for each case |
| What must never happen | The "Never" lines, and a setting for each one that must hold ([16.2](choosing-the-right-piece.md)) |
| Who acts on each result | The shape of the report |

The expert's cases become the tests. They are written first, as in [Chapter 13](../programming-fundamentals/tests-first.md), and their expected values come from the expert's sheet, never from what the code happens to print.

### What makes a good description?

It answers two questions: what does this do, and when should it be used. The agent sees only names and descriptions before it decides ([16.1](from-a-prompt-to-a-skill.md)), so this one line decides when the skill loads.

- *Too vague:* "Helps with invoices." It can load for any invoice question, including ones it cannot answer.
- *Too narrow:* "Run triage.py on invoices-intake.csv." It can miss someone who says "sort this week's batch".
- *Right:* "Sort new vendor invoices into the AP team's four piles using a tested script. Use when someone asks to triage, sort or check a batch of new invoices. Never use it to decide whether to pay."

The last sentence says when *not* to use the skill. That keeps it from loading for a payment decision it must never make.

### What goes in the body?

Short numbered steps. Here is Brightline's skill, shortened:

```markdown
---
name: invoice-triage
description: Sort new vendor invoices into the AP team's four piles using a tested script. Use when someone asks to triage, sort or check a batch of new invoices. Never use it to decide whether to pay.
metadata:
  version: "0.1.0"
  policy: AP policy v3
---

1. Find the new batch, the vendor list and the AP export. If one is missing, ask.
2. Find the run date. If the person gives none, ask. Do not assume today.
3. Run the tested tool: `npm run triage -- <batch.csv> <run date>` in the repository, or `scripts/triage.py` anywhere else. Never sort or count by reading the file yourself.
4. Report each pile exactly as the tool printed it. Copy the numbers, and never recompute one.
5. End with who acts: exceptions to the AP lead, large amounts to the controller, urgent invoices to the AP clerk today.

Never say an invoice should or should not be paid. Never edit the batch, the vendor list or the AP export.

The rules are in `references/ap-triage-rules.md`. Read them to explain a pile.
```

### How do I test a skill?

Ask three questions, and keep the requests and the results in a file, so you can run them again ([16.6](shipping-a-version.md)).

1. **Does it load when it should, and only then?** Write a few requests that should load it and a few that should not. "Triage the new batch" should. "What is our controller's name?" should not.
2. **Do its numbers match the script?** Run it on a batch whose answer the expert already checked by hand.
3. **Is it better than no skill?** The next section shows how to find out.

Models vary from run to run, so run each check more than once.

### Is the skill better than no skill?

On a plain request, often not. An agent in a repository can find the tested script by itself and copy its numbers. A skill earns its place on the requests that go wrong without it, and the expert knows which those are. So ask the expert for one more case, the missing-input kind you tested in [8.5](../../managing-ai-workers/context-memory-knowledge-and-state/skills-and-plugins.md#how-do-you-test-it): a request with something left out, where a wrong guess would matter.

Then send every saved request twice with the skill and twice without it, each in a new session. Write **passed** beside each run whose answer the expert accepts, and count each column.

- **More passes with the skill.** Keep the skill.
- **The same count.** Ask the expert which request goes wrong without it. If none does, do not release the skill, because it still adds its description to every turn ([16.5](what-a-plugin-bundles.md)).

### What do I do when the skill gets it wrong?

Fix the skill, not the chat. A correction typed into a chat helps once and is gone. A correction in the skill's file reaches everyone, every time. If the skill loaded at the wrong time, change the description. If the agent's numbers differ from what the script printed, the steps are letting it work the answer out itself, so change the steps.

**At work.** Ana writes `docs/ap-triage-rules.md`. It has six rules, and the first one that matches wins: an unknown vendor, a possible duplicate, terms that do not match the vendor's, an amount over the controller's limit, a due date within three days, and everything else. They put each invoice in one of four piles: exception, needs approval, urgent or ready to pay. The sorting rules are hers. The limit in them belongs to Dave Kowalski, the controller, who owns AP policy.

She also writes six cases she checked by hand. Four of them test two edges from both sides. An invoice of $5,000.01 needs the controller, and one of $5,000.00 does not. An invoice due three days after the run date is urgent, and one due four days after is not. The builder asks the agent for a failing test for each case, then for `src/triage.ts`, the tested code that does the sorting, then for the skill. When Ana reads the skill, she asks for one change: the report must end with who acts on each pile. The builder did not know who acts. Only Ana did.

On Friday, March 5, 2027, the builder asks Ana which request goes wrong when a new clerk sends it. She gives one: the batch with no run date. The agent runs three saved requests twice with `invoice-triage` and twice without it. In the table, 4, 2, 2, 5 is the count in each pile: exception, needs approval, urgent, ready.

| Request | With the skill | Without it |
| --- | --- | --- |
| Triage the batch for March 8 | 4, 2, 2, 5, copied from the script | 4, 2, 2, 5. One run of the two adds a grand total the script never printed |
| Triage the batch, with no date | Asks which date to use | Uses that Friday, and reports 1 urgent and 6 ready |
| Which of the March 8 batch need a look? | 4, 2, 2, 5 | 4, 2, 2, 5 |

Where the request names its date, the piles agree, and Ana asks what the skill is for. Then she reads the batch with no date. Without the skill, INV-6005, for $334.00, is in the ready pile, and on Monday it is urgent. She fails one run of the first row too: step 4 says never to recompute a number, and the grand total was the agent's own.

She counts 6 of 6 runs passed with the skill, and 3 of 6 without. The builder puts the two columns in the pull request.

### Try it

You play the expert, and then the builder, for the `vendor-terms` skill from [16.1](from-a-prompt-to-a-skill.md#try-it).

**Predict.** In a file named `requests.md` in `practice-16`, write five requests: three that should load the skill, and two that should not. For example, "Which of our vendors do we pay on Net 15?" should load it, and "How do I add a new vendor to our accounting system?" should not.

**Run.** Start a new session in `practice-16` for each request, and send it. Beside each request in the file, write whether the skill loaded, and whether the answer matches what `npm run vendors` prints.

**Modify.** Send: "Change the vendor-terms description to exactly this: Helps with vendors. Change nothing else." Send one request that should load it and one that should not, each in a new session. Then send: "Change the description back to what it was."

**Make.** As the expert, choose one line every answer must end with, such as "A change to a vendor's terms goes to the AP lead." Send: "Add this as the last step of the skill's body, and change nothing else." Paste your line into the same message. Then try the skill once, in a new session. The answer should end with your line.

**Compare.** Find out what the skill adds, with two requests: "Which of our vendors do we pay on Net 15?" and "What terms do we have with Great Lakes Freight?"

1. Send each one twice, in new sessions. In `requests.md`, write **passed** beside a run only if the vendors are right and the answer ends with your line.
2. Send: "Move the vendor-terms skill folder out of this repository, into a new folder named skill-off next to the practice-16 folder." Send each request twice more, and mark the runs the same way.
3. Send, with your tool's folder in place of `<folder>`: "Move the vendor-terms folder from skill-off back into `<folder>`, and delete the empty skill-off folder."

Count the passes with the skill, and without it. Claude Code can run this comparison for you, as [16.10](both-ai-vendors.md#practice-writing-a-skill-with-the-expert) shows.

**What you should see.** In the runs for this book, the good description loaded for every terms question, and not for the question about adding a vendor. "Helps with vendors." still loaded for a terms question, because it is the only skill in this folder that the agent may choose by itself. So a weak description can pass one small test and still fail in a library of fifty. In the comparison, every answer named the right vendors, with the skill and without it. Only the answers with the skill ended with the line: 4 of 4 passed with it, and none of 4 without. So this skill does not make the answer more correct. It makes every answer end the way the expert asked. Your results may differ. Write down what you saw.

**The operating rule:** the expert owns the rules and the cases. The builder owns the files and the tests. Nobody releases a skill until it loads when it should, its numbers match the script, and at least one of the expert's cases passes with it and fails without it.

![Two columns joined by arrows. On the left, what the domain expert writes: six rules in order, cases checked by hand, what must never happen, and who acts on each result. On the right, what the builder writes: a test for each rule and case, expected values in the tests, a setting or a Never line, and the report shape in SKILL.md. A line at the bottom says the rules sheet itself goes in the skill's references folder.](img/expert-and-builder.png)

*Figure 16.5. The expert's sheet and the builder's files. Every rule has a test, every case has an expected value, and every "never" has a line in the skill, plus a setting where it must hold.*



# 13.12 Judgment (/building-ai-workers/programming-fundamentals/judgment)

---
type: Document
title: "13.12 Judgment"
description: "When your check is enough and when to read the rule lines, how to red-team your tests, and how to turn a vague goal into tests."
status: stable
order: 313.10
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:27Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.12" ]
last_verified: 2026-10-30
sources:
  - id: nature-cornwell
    title: "In the AI era, coding means thinking like a systems architect (Nature, Career column, October 13, 2026) (Jacques Cornwell, accessed 2026-10-30)"
    resource: https://www.nature.com/articles/d41586-026-02715-x
generated:
  at: 2026-11-21T00:02:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A bookkeeper gives a $6 coffee receipt a quick look. A $60,000 wire transfer gets a call to the vendor. An automatic payment, a rule that pays a vendor every month, gets the most care, even when each payment is small, because a mistake in it is paid again every month.

**What you will learn.** When your check is enough, when to read the rule lines, and how to turn a vague goal into tests.

**Why it matters.** The more a mistake would cost, and the more often the code will run, the harder you check. Code that runs again next week meets rows nobody has checked.

### Which lines carry a rule?

The few lines that decide what happens to every row. There are five kinds: a line that converts text to a number, a decision, a lookup, a sort, and date math. Before you accept a change, write each of those lines as a sentence in `NOTES.md`, and compare the sentence with the business rule. When the two disagree, the line is a bug, whatever the check says. The output you predict from the sentence shows it, as Ana's sort line did in [13.7](lists-and-dictionaries.md#why-cant-my-count-and-total-see-a-wrong-order).

### When is my check enough, and when do I read?

Your check is enough when a mistake would cost little and the code runs once, on the rows you checked. Read the [rule lines](#which-lines-carry-a-rule) when a mistake would cost a lot, or when the code will run again on rows nobody has checked.

| Situation | What you do |
| --- | --- |
| The data is private, such as real vendor or employee records | Give the agent only the column names, the types and a few made-up rows, and test on those. The real data goes only to the finished, tested code, never to the agent[^nature-cornwell] |
| The code moves money, such as making a payment, or handles passwords, API keys or personal data | Read it line by line, and ask someone who knows the area to review it. If you cannot verify it, do not release it |
| The code is too long or complex to read in full | Rely more on tests, not on trust. Add more cases and more failure cases. Read at least the lines that carry a rule |

**Before every commit, read the diff.** Did any test change? Did it add a package or a library, which is ready-made code, and is it real, not a made-up or look-alike name? Can you say in one sentence what the main function does? The last question catches the most.

### How do I red-team my tests?

To red-team something is to attack it on purpose, to find where it breaks. So try the inputs that should fail. When the finance team tests a control, it puts through an invoice that should be stopped, and sees whether it is. Try an empty file, a zero amount, a missing column, text where a number belongs, terms nobody has seen. Try an empty cell where an amount belongs too, because what happens depends on your language.

| Language | An empty cell where an amount belongs |
| --- | --- |
| TypeScript | `Number("")` gives 0 with no error, so an empty cell becomes a zero amount, and nothing tells you. |
| Python | `int("")` stops the program with a `ValueError`, so an empty cell cannot pass as an amount. |

Ask the agent "what input would break this?", and you decide which answers become tests.

### How do I turn a vague goal into tests?

"Make the script smarter" cannot be tested. Break it into small pieces, each with a rule you can test, before any code. If you cannot say the rule, ask the person who set the goal, as Ana does below. If a piece is hard to test, it is doing too much. Split it.

**At work.** Brightline's controller asks Ana for a script that will "flag anything suspicious in the invoice export". Ana cannot test "suspicious", so she asks the controller three questions and gets three rules. Each one becomes a function with a signature and a test before the agent writes any code.

| Rule | One test |
| --- | --- |
| 1. The same invoice number appears twice | Two rows numbered INV-8301 give `["INV-8301"]` |
| 2. An amount over $5,000.00 needs a second approver | `1290000` gives true, `500000` gives false |
| 3. A stated due date before the invoice date | Invoice date 2026-10-05, due 2026-10-01, gives true |

Here are the three signatures, in the same order. Each says what goes in and what comes back, as in [13.6](functions.md).

```text tab="TypeScript" tab-group="language"
duplicateNumbers(invoices): string[]
needsSecondApprover(cents: number): boolean
dueBeforeInvoice(invoice): boolean
```

```text tab="Python" tab-group="language"
duplicate_numbers(invoices) -> list[str]
needs_second_approver(cents: int) -> bool
due_before_invoice(invoice) -> bool
```

`string[]` and `list[str]` mean a list of text. `boolean` and `bool` mean true or false.

The second rule had a hidden question: is exactly $5,000.00 "over"? The controller said no. Without the test, the agent would have guessed. Each edge case you find, by asking or by reading a rule line, becomes a test.

### Try it

The file in `13-12` holds one rule line. The rule, from the controller: an amount **over** $5,000.00 needs a second approver, and exactly $5,000.00 does not.

**Predict.** Here is the file. Write down what each line will print.

```ts tab="TypeScript" tab-group="language"
function needsSecondApprover(cents: number): boolean {
  return cents >= 500000;
}

console.log(needsSecondApprover(1290000));
console.log(needsSecondApprover(500000));
```

```python tab="Python" tab-group="language"
def needs_second_approver(cents: int) -> bool:
    return cents >= 500000

print(needs_second_approver(1290000))
print(needs_second_approver(500000))
```

**Run.** Send: "Run the file in 13-12 and show me what it prints. Don't explain it yet."

**Investigate.** Write the rule line as a sentence in your own words, and compare it with the controller's rule. Do they say the same thing?

**Modify.** Send: "Change the rule line so that exactly 500000 cents does not need a second approver. Don't run it yet." Say what each line will print. Then ask the agent to run it.

**Make.** Ask: "What input would break this function?" Then decide which answers should become tests.

**What you should see.** At first, both lines say that a second approver is needed. The second line is the bug, because `>=` includes exactly $5,000.00.

| Language | At first | After your change |
| --- | --- | --- |
| TypeScript | `true` and `true` | `true` and `false` |
| Python | `True` and `True` | `True` and `False` |

**The operating rule:** match your check to what a mistake would cost. Read the rule lines of code that will run again on rows nobody has checked. Test the failures too. Turn every vague goal into pieces you can test before any code is written.

![Figure 13.11. A vague goal, "flag anything suspicious", split into three testable rules: an invoice number that appears twice, an amount over $5,000.00 that needs a second approver, and a due date before the invoice date. Each rule has a function signature and example tests, and one test checks the whole workflow.](img/vague-to-testable.png)

*Figure 13.11. From a vague goal to testable pieces. If you cannot write a test for a piece, it is not specified yet.*

**Next.** [Lab 13](lab.md) puts it all together, and its weekend task gives Renee's script the rule it never had. [13.13](both-ai-vendors.md) shows where your agent differs from the others.

[^nature-cornwell]: In the AI era, coding means thinking like a systems architect (Nature, Career column, October 13, 2026), Jacques Cornwell.



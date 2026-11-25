# 13.5 Two conditions, empty values and while loops (/building-ai-workers/programming-fundamentals/conditions-and-empty-values)

---
type: Document
title: "13.5 Two conditions, empty values and while loops"
description: "How code joins two conditions with and or or, what it does with an empty value, and what makes a while loop stop."
status: stable
order: 313.045
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.5" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-16T05:56:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** The mail clerk of [13.4](decisions-and-repetition.md) gets a longer instruction: an envelope goes in the AP tray only if it is stamped BILL and addressed to Brightline. Both must be true. Then an envelope arrives with no stamp at all, and the instruction never said what to do with it.

**What you will learn.** How a rule in code asks two questions at once, what it does when one answer is blank, and how the same kind of question tells a loop when to stop.

**Why it matters.** None of the mistakes in this lesson gives an error. A paid invoice gets on the payment list, an invoice with no due date gets through, or a loop never ends.

### How does code ask two questions at once?

It joins them with **and** or **or**. The clerk already knows both words.

| The clerk's instruction | The envelope goes in the AP tray when | The word in code |
| --- | --- | --- |
| "Stamped BILL and addressed to Brightline" | Both answers are yes | and |
| "Stamped BILL or stamped INVOICE" | At least one answer is yes | or |

Ana's rule for Friday's payment list needs and: an invoice is on the list only if it is open and due on or before Friday. With or in that place, one yes would be enough, and a paid invoice with an old date would get on the list.

Each language writes these words its own way.

| Language | Equal | And | Or | Not |
| --- | --- | --- | --- | --- |
| TypeScript | `===` (always use this one, not `==`) | `&&` | `\|\|` | `!` |
| Python | `==` | `and` | `or` | `not` |

"On or before" is `<=`, less than or equal to, from the marks in [13.4](decisions-and-repetition.md#how-does-code-keep-only-some-of-the-items). A date written year first, as `2027-03-05`, is less than a later one. [13.9](dates.md#how-does-code-compare-two-dates) explains why.

Here is Ana's rule on one invoice, INV-8305, with Friday as the cutoff. Each value has its own variable, as in [13.3](values-types-variables.md). Look at its due date before you predict: it is empty. Does the line print?

```ts tab="TypeScript" tab-group="language"
// INV-8305
const status = "open";
// its due date is blank
const due = "";
const cutoff = "2027-03-05";
// open, and due on or before
// Friday: both must be true
if (status === "open" && due <= cutoff) {
  console.log("pay INV-8305 on Friday");
}
```

```python tab="Python" tab-group="language"
# INV-8305
status = "open"
# its due date is blank
due = ""
cutoff = "2027-03-05"
# open, and due on or before
# Friday: both must be true
if status == "open" and due <= cutoff:
    print("pay INV-8305 on Friday")
```

Both print:

```text
pay INV-8305 on Friday
```

Now put each of Ana's three invoices through the same rule, one at a time, as the clerk takes envelopes.

| Invoice | Is it open? | Is it due on or before Friday? | On the list? |
| --- | --- | --- | --- |
| INV-8301 | Yes | Yes, March 3 | Yes |
| INV-8309 | No, it is paid | Yes, February 28 | No. With and, one no is enough |
| INV-8305 | Yes | Yes, and that is the surprise | Yes |

INV-8305 has no due date, and it is on Friday's payment list. Code puts text in order the way a sorted list does, and a blank line comes before every other line. So the empty due date counted as before Friday, and the second answer came out yes. The program gave no error. It is the envelope with no stamp: the rule was written for values that are there.

### What does code do with an empty value?

Exactly what its rule says, and nobody wrote the rule with a blank in mind. A bill that nobody stamped goes in the clerk's general tray, and nobody pays it. The clerk did nothing wrong. So ask of every decision in code what happens when the value is empty.

The fix is one more line in the instruction, written for the blank: "use the due date on the invoice or, if it is blank, the one from the terms". Code says this with the same word, or. Between two questions, or was content with the first yes. Between two values, it is content with the first one that is there: it reads from the left, and takes the first value that is not empty. Predict what this prints.

```ts tab="TypeScript" tab-group="language"
let due = "";
// its due date, or this
// text if it is blank
due = due || "from the terms";
console.log("INV-8305 " + due);
```

```python tab="Python" tab-group="language"
due = ""
# its due date, or this
# text if it is blank
due = due or "from the terms"
print("INV-8305 " + due)
```

Both print:

```text
INV-8305 from the terms
```

With a date in `due`, such as `"2027-03-03"`, or takes the date, and the line prints it. INV-8305 now says where its date will come from, and a person can see it and act.

Three values count as empty: empty text `""`, the "nothing" value of [13.3](values-types-variables.md), and the number 0. Or passes over all three, and so does an `if`: to both, an empty value is a no.

The 0 is a trap. Say the rule is "the amount, or MISSING if there is none". A credit note for 0 dollars has a real amount, 0, and the rule marks it MISSING.

### How does a condition stop a loop?

The loop asks it before every round, and stops the first time the answer is no. That is a **`while` loop**, and its condition is the same kind of yes-or-no question as the ones above.

The `for` loop of [13.4](decisions-and-repetition.md#how-does-code-do-the-same-thing-to-every-item) did not need one. The whole tray was there to see, so it stopped when the tray was empty. Now say the mail comes in bags, and nobody says how many. The clerk's instruction is "while the bag I just opened has mail in it, sort it and fetch the next bag". The first empty bag ends the job.

Ana's bags are pages of invoices, read until one comes back empty. `counts` is a list with one number for each page: how many invoices it holds. `page` is the position of the page in hand, starting at 0, as positions do in [13.1](you-read-the-agent-writes.md#why-predict-before-i-run), so `counts[page]` is the count for that page. The condition asks one thing: is that count more than 0? One line inside the loop fetches the next page. Find it, and then predict what prints.

```ts tab="TypeScript" tab-group="language"
// invoices on each page:
// the third page is empty
const counts = [2, 1, 0];
let page = 0;
// while this page has invoices
while (counts[page] > 0) {
  console.log("this page has", counts[page]);
  // fetch the next page
  page = page + 1;
}
console.log("stopped at an empty page");
```

```python tab="Python" tab-group="language"
# invoices on each page:
# the third page is empty
counts = [2, 1, 0]
page = 0
# while this page has invoices
while counts[page] > 0:
    print("this page has", counts[page])
    # fetch the next page
    page = page + 1
print("stopped at an empty page")
```

Both print:

```text
this page has 2
this page has 1
stopped at an empty page
```

`page = page + 1` adds 1 to `page`, as `total = total + 482500` did in [13.3](values-types-variables.md#how-do-i-make-a-variable). It is the clerk fetching the next bag. A clerk who never fetches the next bag opens the same full bag again and again, and the job never ends. So every `while` loop needs a line like this one, which changes something its condition checks. Agents often write it shorter, as `page += 1`, which means the same.

![Figure 13.4. A while loop reading pages. Page 1 holds INV-8301 and INV-8302 and page 2 holds INV-8306, so each time the loop prints and moves on with page += 1. Page 3 is empty, so the condition is false and the loop stops. Without page += 1, it would fetch the same page again and again.](img/while-loop.png)

*Figure 13.4. A while loop. Each pass checks the condition again, and page += 1 is what moves it toward the empty page that stops it.*

### Try it

The file in `13-5` is Ana's rule on INV-8305, with its and, and the or that fills in the blank due date. Run it and investigate, as in [13.1](you-read-the-agent-writes.md#try-it). Then write its rule as one sentence in your own words.

**Modify.** Send: "Change the status in the file to `paid`. Don't run it yet." Say whether it prints. Then send: "Now change the and in the rule to or. Don't run it yet." Say whether it prints now. Then ask the agent to run it.

**Make.** Send: "Make a new file in 13-5 called mine, with a while loop that counts down from 3 to 1 and prints each number. Don't run it yet." Find the line that moves the loop toward its end, and then ask the agent to run it.

**What you should see.** At first, `INV-8305 from the terms`. With the status `paid`, nothing prints: with and, one no is enough. With or, it prints again, although the invoice is paid: one yes is enough. `mine` prints 3, 2 and 1, and stops.

**The operating rule:** where a rule has two parts, check whether the code says and or or. Ask of every decision what happens when the value is empty. For every `while` loop, find the line that makes it stop.

Figure 13.5 puts the first two sections in one picture, with a fourth invoice added. Each gate is one question, and the blank due date gets its date from the terms before it reaches the second gate.

![Figure 13.5. Four invoice rows through a filter for Friday, March 5, 2027. INV-8301 is open and due March 3, so it stays. INV-8309 is paid, so it leaves at the first check. INV-8305 has no due date, so Net 30 gives March 5, and it stays. INV-8303 is due March 6, after Friday, so it leaves.](img/row-through-filter.png)

*Figure 13.5. A row through a filter. Each gate is one condition.*

**Next.** A decision you need twice belongs in one place. [13.6](functions.md) gives it a name.



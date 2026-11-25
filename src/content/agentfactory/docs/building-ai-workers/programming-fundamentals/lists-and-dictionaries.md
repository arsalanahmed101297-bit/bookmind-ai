# 13.7 Lists and dictionaries (/building-ai-workers/programming-fundamentals/lists-and-dictionaries)

---
type: Document
title: "13.7 Lists and dictionaries"
description: "What a list, a dictionary and a record hold, what a lookup does with a missing key, and what a sort compares."
status: stable
order: 313.06
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.7" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A grocery **list** is in order: first milk, then bread. A coat check finds your coat by its ticket number, and a ticket they never gave out gets you nothing.

**What you will learn.** What a list, a dictionary and a record hold, and the one question to ask of every lookup and every sort.

**Why it matters.** A count and a total cannot see a wrong order or a missing name.

### What is a list?

Items in order, like the grocery list. You have used lists since [13.1](you-read-the-agent-writes.md#why-predict-before-i-run): square brackets, and positions that count from 0. Predict what this prints.

```ts tab="TypeScript" tab-group="language"
// three amounts, in order
const cents = [735000, 482500, 61875];
// the first one, and how many
console.log(cents[0], cents.length);
```

```python tab="Python" tab-group="language"
# three amounts, in order
cents = [735000, 482500, 61875]
# the first one, and how many
print(cents[0], len(cents))
```

Both print:

```text
735000 3
```

A list is the right holder when the order matters, or when the code will take every item in turn, as the loop in [13.4](decisions-and-repetition.md#how-does-code-do-the-same-thing-to-every-item) did.

### What is a dictionary?

The coat check, in code. A **dictionary** holds each value under a name, called its **key**, as the coat check holds each coat under a ticket number. You hand over the key and get the value back. Nobody counts positions.

This dictionary keeps two of Brightline's vendor names, each under its vendor id. Predict what it prints.

```ts tab="TypeScript" tab-group="language"
// each name, kept under its id
const names: Record<string, string> = {
  V001: "Midwest Packaging Co.",
  V005: "Hocking Valley Pallets",
};
// hand over the ticket V005
console.log(names["V005"]);
```

```python tab="Python" tab-group="language"
# each name, kept under its id
names: dict[str, str] = {
    "V001": "Midwest Packaging Co.",
    "V005": "Hocking Valley Pallets",
}
# hand over the ticket V005
print(names["V005"])
```

Both print:

```text
Hocking Valley Pallets
```

Inside the braces, each line is one coat on its ticket. The id before the colon is the key, and the name after it is the value. `names["V005"]` hands over the key `V005` and gets its value back.

| Language | How a dictionary is written |
| --- | --- |
| TypeScript | An **object**, in braces. In the label `Record<string, string>`, the two words inside the angle brackets say that its keys are text and its values are text. |
| Python | A `dict`, in braces, with quotes around each key. The label `dict[str, str]` says the same. |

### List or dictionary?

| | List | Dictionary |
| --- | --- | --- |
| It holds | Items in order | Values, each under a key |
| You find one by | Its position, counted from 0 | Its key, such as `"V005"` |
| It is like | The grocery list | The coat check |
| At Brightline | Friday's invoices | Vendor names, by vendor id |

### What is a record?

A dictionary that holds one thing, such as one invoice. An invoice could be a list, `["INV-8301", "open", 482500]`, but then you would have to remember that position 1 is the status, and write `inv[1]` to get it. A **record** gives each value a name instead. Predict what this prints.

```ts tab="TypeScript" tab-group="language"
// one invoice, with each
// value under its own name
const inv = {
  number: "INV-8301",
  status: "open",
  cents: 482500,
};
// ask by name, not by position
console.log(inv.status, inv.cents);
```

```python tab="Python" tab-group="language"
# one invoice, with each
# value under its own name
inv = {
    "number": "INV-8301",
    "status": "open",
    "cents": 482500,
}
# ask by name, not by position
print(inv["status"], inv["cents"])
```

Both print:

```text
open 482500
```

So the status is asked for by name, not as position 1.

| Language | How code asks a record for one value |
| --- | --- |
| TypeScript | `inv.status`, with a dot and then the name. |
| Python | `inv["status"]`, with the name in quotes inside square brackets. A record is a dictionary, so code asks it the same way. |

Most of Brightline's data is a list of records: Friday's invoices are a list, and each invoice in it is a record.

![Figure 13.7. The INV-8301 row of invoices.csv becoming a record. The header names become keys, the cells become values, and the amount "482500" is converted from text to the whole number 482500. Blank or invalid amounts are rejected.](img/row-to-record.png)

*Figure 13.7. A row becomes a record. The header gives the keys. Every value starts as text until the code converts it.*

### What happens to a missing key?

Think of a ticket the coat check never gave out. What you get depends on your language.

| Language | A key that is not there | A position past the end of a list |
| --- | --- | --- |
| TypeScript | You get `undefined`, which means nothing is there, and the program keeps running. | `undefined` too. |
| Python | The program stops with a `KeyError`. There is also a careful way to ask: `.get()` gives `None`, which means nothing is there, or a default you pass it, as in `.get(key, 0)`. | The program stops with an `IndexError`. |

A key must match exactly, capital letters too, so `v005` is not `V005`.

**At work.** Brightline's export names each vendor by id, such as `V005`. To print names, the script builds a dictionary from `vendors.csv` and looks up each invoice's vendor id. Ana asks: what happens when an invoice names an id that is not in the dictionary?

`names` is the dictionary from above, and no vendor has the id `V099`. Predict each line.

```ts tab="TypeScript" tab-group="language"
// a ticket it gave out
console.log(names["V005"]);
// a ticket it never gave out
console.log(names["V099"]);
```

```python tab="Python" tab-group="language"
# a ticket it gave out
print(names["V005"])
# never gave out,
# asked with .get()
print(names.get("V099"))
# never gave out,
# asked directly
print(names["V099"])
```

```text tab="TypeScript" tab-group="language"
Hocking Valley Pallets
undefined
```

```text tab="Python" tab-group="language"
Hocking Valley Pallets
None
Traceback (most recent call last):
  ...
KeyError: 'V099'
```

### How does a sort decide the order?

By comparing two items at a time, with a **rule** that says which goes first. The rule matters because text and numbers compare differently. Text is compared one character at a time, as in alphabetical order, so as text 482500 comes before 61875, because 4 comes before 6. As numbers, 61875 comes first.

Each block below sorts the same three amounts twice: first with no rule, then with a rule written inside the brackets. In TypeScript, the rule `(a, b) => a - b` means "compare as numbers, smallest first". In Python, the rule `key=str` means "compare each one as text". Predict both lines.

```ts tab="TypeScript" tab-group="language"
const cents = [735000, 482500, 61875];
// no rule
console.log(cents.sort());
// told to compare as numbers
console.log(cents.sort((a, b) => a - b));
```

```python tab="Python" tab-group="language"
cents = [735000, 482500, 61875]
# no rule
print(sorted(cents))
# told to compare as text
print(sorted(cents, key=str))
```

```text tab="TypeScript" tab-group="language"
[ 482500, 61875, 735000 ]
[ 61875, 482500, 735000 ]
```

```text tab="Python" tab-group="language"
[61875, 482500, 735000]
[482500, 61875, 735000]
```

| Language | With no rule | The second sort |
| --- | --- | --- |
| TypeScript | `sort()` compares numbers as text, so amounts come out in the wrong order. | Right for amounts. `b - a` instead would mean largest first. |
| Python | `sorted()` compares numbers as numbers. | Wrong for amounts. Amounts read from a file are still text, and sort this way until they are converted. |

You do not have to work out a rule yourself. Ask the agent: "What does this sort compare, and which comes first?"

### Why can't my count and total see a wrong order?

Because a count and a total come out the same in any order.

**At work.** Ana's check says Friday has 8 invoices, $19,229.53. The controller asks for Friday's list, largest first. The agent adds one sort line, the tests pass, and the count and total still match her check. Ana reads the line that changed.

```ts tab="TypeScript" tab-group="language"
// take two invoices, a and b:
// the larger amount goes first
friday.sort((a, b) => b.cents - a.cents);
```

```python tab="Python" tab-group="language"
# compare each invoice by its
# cents, largest first
friday.sort(key=lambda inv: inv["cents"], reverse=True)
```

`friday` is the list of Friday's invoices, each one a record. In both languages, `.sort` puts that list itself in order. She says the line as a sentence: "It puts Friday's invoices in order by amount, as numbers, largest first."

| Language | Where the line says it |
| --- | --- |
| TypeScript | `b.cents - a.cents` is the `b - a` rule, on each invoice's amount: largest first. |
| Python | `key=` names what to compare by. `lambda inv: inv["cents"]` means "for each invoice, take its cents". `reverse=True` puts the largest first. |

From her sentence she predicts the first line, INV-8305 at 735000 cents, and the last, INV-8312 at 19995 cents. The run agrees. Her count and total could not have caught a wrong order, so she lists a few amounts of different lengths in the order they must come out, and has the agent turn her list into a test.

### Try it

The file in `13-7` holds a lookup and a sort. Run it and investigate, as in [13.1](you-read-the-agent-writes.md#try-it). Watch the missing vendor, `V099`.

**Modify.** Send: "Change the sort in the file to put the largest amount first. Don't run it yet." The amounts are 735000, 482500 and 61875. Say which will come first. Then ask the agent to run it.

**Make.** Send: "Make a new file in 13-7 called mine that keeps each vendor's terms under its id, looks up one vendor that exists and one that doesn't, and prints both. Don't run it yet." Say what the missing one will print, and then ask the agent to run it.

**What you should see.** `735000` comes first after your change. In `mine`, it depends on your language.

| Language | The missing vendor in `mine` |
| --- | --- |
| TypeScript | `undefined`. |
| Python | It depends on how the agent looked it up, so read that line. `.get()` gives `None` or a default. Square brackets stop the program with a `KeyError`. |

**The operating rule:** for every lookup, ask what happens when the key is missing. For every sort, ask what it compares.

**Next.** Those values arrive from files, as text and dates. [13.8](text-dates-files.md) shows what text from a file can hide.



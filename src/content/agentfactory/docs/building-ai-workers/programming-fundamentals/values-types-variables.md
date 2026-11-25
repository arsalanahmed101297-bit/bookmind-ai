# 13.3 Values, types and variables (/building-ai-workers/programming-fundamentals/values-types-variables)

---
type: Document
title: "13.3 Values, types and variables"
description: "How to make a variable in TypeScript and Python, what kinds of value it can hold, why text from a file is not a number, and why money is kept in whole cents."
status: stable
order: 313.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.3" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** The characters 4-8-2-5-0-0 can be an amount, a postal code or a part number. You add amounts. You never add postal codes. What you may do depends on what kind of thing they are, not on how they look.

**What you will learn.** How to make a variable, what kinds of value it can hold, and how to spot text that only looks like a number.

**Why it matters.** A number read from a file is only text until the code turns it into a number, so check that the code does this before it adds anything.

### How do I make a variable?

With a name, an `=` and a value. The name is a label on a folder, and the value is what the folder holds. The `=` means "store this value under this name".

| Language | How the label is written |
| --- | --- |
| TypeScript | The first word says how. `const` is ink: the name cannot be given a new value. `let` is pencil: it can. |
| Python | The name and `=` are enough, with no first word. Every label is in pencil. |

Two things help you read the code below. A **comment** is a note for people, which the program skips. In the code, the lines that start with `//` or `#` are comments. And a print with two values prints both on one line. Predict what each one prints.

```ts tab="TypeScript" tab-group="language"
// const, in ink: it cannot be
// given a new value
const terms = "Net 30";
// let, in pencil: it can
let total = 0;
// read total, add to it,
// and store it again
total = total + 482500;
console.log(terms, total);
```

```python tab="Python" tab-group="language"
# just the name and =
terms = "Net 30"
total = 0
# read total, add to it,
# and store it again
total = total + 482500
print(terms, total)
```

Both print:

```text
Net 30 482500
```

`total` started at 0. The third line read it, added 482500, and stored the result under the same name.

### What kinds of value are there?

Five do most of the work.

| Kind of value | TypeScript | Python | Brightline example |
| --- | --- | --- | --- |
| Text | `string` | `str` | `"INV-8301"`, `"Net 30"` |
| Whole number | `number` | `int` | `482500` cents |
| Decimal number | `number` | `float` | Never used for money |
| True or false | `boolean` | `bool` | Is the invoice open? |
| Nothing | `null` or `undefined` | `None` | A record with no due date at all |

These are the words a **type label** uses, such as `cents: number` or `cents: int`. An agent follows the labels you give it, so you choose them before it writes.

Here are four of the five kinds, in one invoice. Predict what it prints.

```ts tab="TypeScript" tab-group="language"
// text
const number = "INV-8305";
// a whole number
const cents = 735000;
// true or false
const isOpen = true;
// nothing: it has no due date
const dueDate = null;
console.log(number, cents, isOpen, dueDate);
```

```python tab="Python" tab-group="language"
# text
number = "INV-8305"
# a whole number
cents = 735000
# true or false
is_open = True
# nothing: it has no due date
due_date = None
print(number, cents, is_open, due_date)
```

```text tab="TypeScript" tab-group="language"
INV-8305 735000 true null
```

```text tab="Python" tab-group="language"
INV-8305 735000 True None
```

| Language | How it writes true, false and nothing |
| --- | --- |
| TypeScript | `true`, `false` and `null`, with no capital letter. `undefined` also means nothing. |
| Python | `True`, `False` and `None`, each with a capital letter. |

### Why is an amount from a file still text?

Everything a program reads from a CSV file arrives as text, including the amounts. `"482500"` is six characters, not a number, until your code converts it.

The fourth line of the code below converts text to a number before it adds. Predict each line, and what happens on the last one.

```ts tab="TypeScript" tab-group="language"
// text, as a file gives it
const fromFile = "482500";
// text
const other = "61875";
// text + text
console.log(fromFile + other);
// Number(...) turns text into
// a number: number + number
console.log(Number(fromFile) + Number(other));
// number + text
console.log(0 + fromFile);
```

```python tab="Python" tab-group="language"
# text, as a file gives it
from_file = "482500"
# text
other = "61875"
# text + text
print(from_file + other)
# int(...) turns text into
# a number: number + number
print(int(from_file) + int(other))
# number + text
print(0 + from_file)
```

```text tab="TypeScript" tab-group="language"
48250061875
544375
0482500
```

```text tab="Python" tab-group="language"
48250061875
544375
Traceback (most recent call last):
  ...
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

What `+` does depends on the kind of value, as with the amount and the postal code. On two strings it joins them, like two postal codes written side by side. On two numbers it adds. On the last line, a number plus text, the two languages differ. They also differ on text that cannot be converted, such as an amount with a comma in it.

| Language | A number plus text | Text with a comma, `"4,825.00"` |
| --- | --- | --- |
| TypeScript | It turns the 0 into text and joins, with no error. | `Number("4,825.00")` gives `NaN`, which means "not a number". The program keeps running, and every total that uses it is `NaN` too. |
| Python | It stops with a `TypeError`, in an error report like the one in [13.2](the-workbench.md). | `int("4,825.00")` stops with a `ValueError`. |

A program that keeps running with a wrong value is the dangerous case. So in TypeScript, look hard at every place where text becomes a number.

### Why whole cents?

Because decimal numbers can be very slightly off. A computer does not store most of them exactly. Predict what each one prints.

```ts tab="TypeScript" tab-group="language"
console.log(1.10 + 2.20, 110 + 220);
```

```python tab="Python" tab-group="language"
print(1.10 + 2.20, 110 + 220)
```

Both print:

```text
3.3000000000000003 330
```

The whole numbers came out exact. So this book keeps every amount in whole cents, $48.25 as `4825`, and turns cents into dollars only when it prints them. Never let an agent keep money in an ordinary decimal number.

### Try it

The file in `13-3` is the text-or-number program. Run it and investigate, as in [13.1](you-read-the-agent-writes.md#try-it).

**Modify.** Real exports often write an amount as `"4,825.00"`. Send: "Change `482500` to `4,825.00` in the file. Don't run it yet." Write down what each line will print. Then ask the agent to run it.

**Make.** Send: "Make a new file in 13-3 called mine that keeps two invoice amounts as whole cents in variables, adds them, and prints the total. Don't run it yet." Check the total yourself, then ask the agent to run it.

**What you should see.** It depends on your language.

| Language | After your change |
| --- | --- |
| TypeScript | It keeps going: the joined text, then `NaN` where it converts the amount. |
| Python | It stops at its second print, with a `ValueError`, because `"4,825.00"` is not a whole number. |

**The operating rule:** convert text from a file as soon as the code reads it, keep money in whole cents, and label the types so a checker can check them.

![Figure 13.3. The same characters as text and as numbers. As text, "482500" plus "61875" joins into "48250061875". As numbers, 482500 plus 61875 is 544375 cents, which is $5,443.75. Converting checked text with Number() first gives 544375.](img/text-or-number.png)

*Figure 13.3. Text or number. The characters are the same. The type decides what plus means.*

**Next.** [13.4](decisions-and-repetition.md) shows how a program decides what to do with each invoice.



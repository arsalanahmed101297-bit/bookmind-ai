# 13.6 Functions: the signature is the contract (/building-ai-workers/programming-fundamentals/functions)

---
type: Document
title: "13.6 Functions: the signature is the contract"
description: "How to read a function's signature as its promise, test it with one assertion you can check by hand, and why every number comes from a tested function."
status: stable
order: 313.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.6" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A vending machine has a sign on its front: put in $2.00, get a drink. You press B4 for water and get orange juice. The sign's promise was kept, because you got a drink, but it was the wrong one, and you know it without opening the machine. Code is the same: try it with an answer you already know.

**What you will learn.** How to read the first line of a named piece of code as a promise, how to test it with one line you can check by hand, and why every number comes from a tested function.

**Why it matters.** A test shows a broken promise before you read the body, the code that does the work.

A **function** is a named piece of code that takes inputs and gives back a result.

### What are the parts of a function?

Four, and the vending machine has all of them: a slot, the money you put in, the works inside, and the drink that drops out. This function adds a $25.00 fee to an amount in whole cents. Predict both lines.

```ts tab="TypeScript" tab-group="language"
// addFee takes an amount
// in cents
function addFee(cents: number): number {
  // and gives back the amount
  // plus the fee
  return cents + 2500;
}

// put in 10000
console.log(addFee(10000));
// put in 60000
console.log(addFee(60000));
```

```python tab="Python" tab-group="language"
# add_fee takes an amount
# in cents
def add_fee(cents: int) -> int:
    # and gives back the amount
    # plus the fee
    return cents + 2500


# put in 10000
print(add_fee(10000))
# put in 60000
print(add_fee(60000))
```

Both print:

```text
12500
62500
```

| On the machine | In the code | Its name |
| --- | --- | --- |
| The slot | `cents` | The **parameter**, the input the function takes |
| The money you put in | `10000` in `addFee(10000)` | The **argument**, the value you pass in |
| The works inside | The indented line | The **body** |
| The drink that drops out | What `return` gives back | The **return value** |

Each time the body ran, `cents` held the argument it was given.

| Language | How to read the first line |
| --- | --- |
| TypeScript | `function` starts a function. `(cents: number)` is the parameter with its type. The second `: number`, after the closing bracket, is the type of the return value. |
| Python | `def` starts a function. `(cents: int)` is the parameter with its type. The `-> int` after the brackets is the type of the return value. |

### What does a signature promise?

What you must give the function, and what you get back. The first line of a function, with its name, its parameters and their types, and its return type, is its **signature**. It is the sign on the machine. Here is one from Brightline, for the function that works out a due date.

| Language | The signature |
| --- | --- |
| TypeScript | `dueDate(invoiceDate: string, terms: string): string` |
| Python | `def due_date(invoice_date: str, terms: str) -> str:` |

Each part of it makes a promise.

| Part of the signature | What it promises | In this one |
| --- | --- | --- |
| Name | What the function is for | Works out a due date |
| Parameters with types | What you must give it | An invoice date as text, and the terms as text |
| Return type | What you get back | A due date as text |
| What it does not say | Anything else must be in a test | That unknown terms are an error |

The sign promises the kind of answer, not the right answer. A return type of `string` accepts any text, as the machine's sign accepted orange juice. So only a test shows that the answer is right.

### Why one job each?

A function that does one job can be named in a few words and tested on its own. When an agent writes a long function, ask it to split it, and then test each piece.

A function is **pure** when its result depends only on its inputs. The fee function above gives 12500 for 10000 every time, on any computer, so a test can check it.

### Why must the math be done by a function, not a reply?

Never accept a total, a date or a tax amount that a model worked out in its reply. It may look right and be wrong, and it may be different the next time. Ask the agent to write a function and its tests, and then run the function.

A pure function gives the same output for the same input, every time. Code like that is called **deterministic**. AI can reason about complex problems, but deterministic engines should enforce accounting rules and mathematical consistency.

### What is an assertion?

An **assertion** is a line that states what must be true, and stops the program with an error if it is not. It is the smallest possible test.

**At work.** Before Ana reads a new function's body, she says what its signature promises: "Given an invoice date and terms, it returns the due date." Then she picks one case she can check on a calendar, and the agent writes it as an assertion. An invoice on October 7 with Net 30 terms is due November 6. If the assertion passes, she reads the body. If it fails, she has found the bug without reading the body.

An assertion is the B4 press written down: you ask for something whose answer you already know, and see what drops out. Here are two assertions on the fee function from the top of this lesson. You can work out its answer by hand: 10000 cents plus the fee is 12500. The first assertion states that answer, and the second states a wrong one on purpose. Predict: which line prints, and what stops the program?

```ts tab="TypeScript" tab-group="language"
// bring in assert, which
// comes with Node
import assert from "node:assert/strict";

function addFee(cents: number): number {
  return cents + 2500;
}

// 10000 with the fee
// must give 12500
assert.equal(addFee(10000), 12500);
console.log("first assert passed");

// the same call must give
// 12000: wrong on purpose
assert.equal(addFee(10000), 12000);
console.log("second assert passed");
```

```python tab="Python" tab-group="language"
def add_fee(cents: int) -> int:
    return cents + 2500

# 10000 with the fee
# must give 12500
assert add_fee(10000) == 12500
print("first assert passed")

# the same call must give
# 12000: wrong on purpose. The
# text after the comma is the
# message to show if it fails
assert add_fee(10000) == 12000, "fee on 10000"
print("second assert passed")
```

```text tab="TypeScript" tab-group="language"
first assert passed
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

12500 !== 12000
```

```text tab="Python" tab-group="language"
first assert passed
Traceback (most recent call last):
  ...
AssertionError: fee on 10000
```

The second assertion stated the wrong answer, and the program stopped.

| Language | The marks in this code |
| --- | --- |
| TypeScript | An `import` line brings in code from a **module**, a file of ready-made code. This one brings in `assert`, which comes with Node. `assert.equal(a, b)` states that the two are equal. When it fails, it shows both values: what the code gave, then what you stated. `!==` means "is not equal to". |
| Python | `assert` is part of the language, and states that what follows it is true. When it fails, it shows only the message you wrote after the comma. [13.10](reading-an-error.md) reads the rest of the report. |

### Try it

The file in `13-6` is `addFee`. Run it and investigate, as in [13.1](you-read-the-agent-writes.md#try-it).

**Modify.** Send: "Change the fee in the file to $30.00, in whole cents. Don't run it yet." Work out both answers yourself. Then ask the agent to run it.

**Make.** Send: "Add one assertion to the file: the fee on 10000 cents gives the answer I worked out, [your answer]. Run it." Then send: "Now change the answer in my assertion to one cent more, on purpose, and run it again."

**What you should see.** `13000` and `63000`. The first assertion passes silently. The second stops the program with an `AssertionError`.

**The operating rule:** read a function's signature first and say its promise in one sentence, then test the promise with an assertion you can check by hand, before you read the body.

![Figure 13.6. The signature of dueDate drawn as a box, with two string inputs, invoiceDate and terms, and a string result. "2026-10-07" and "Net 30" go in, and "2026-11-06" comes out. Below it are the expected result for that call and a rule the signature cannot show: unknown terms must raise an error.](img/function-contract.png)

*Figure 13.6. The signature is the contract. What goes in, what comes out, and the case you can check by hand.*

**Next.** [13.7](lists-and-dictionaries.md) shows how a program finds one value among many, and puts them in order.



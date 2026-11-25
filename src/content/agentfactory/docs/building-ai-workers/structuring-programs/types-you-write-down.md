# 14.2 Types you write down (/building-ai-workers/structuring-programs/types-you-write-down)

---
type: Document
title: "14.2 Types you write down"
description: "How to write down which values your data may hold, and where text from outside becomes one of those types."
status: stable
order: 314.02
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:30Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.2" ]
last_verified: 2026-10-30
sources:
  - id: tsconfig-reference
    title: "TSConfig reference (TypeScript, accessed 2026-10-30)"
    resource: https://www.typescriptlang.org/tsconfig/
generated:
  at: 2026-11-23T16:16:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A paper form has boxes for the date, with "MM/DD/YYYY" printed under them, and checkboxes for delivery: ground, two-day, overnight. Paper cannot stop anyone writing "whenever", so a clerk checks each answer once, when the form arrives.

**What you will learn.** How to write down which values your data may hold, and where text from outside becomes one of them.

**Why it matters.** Once those values are written down, the type checker checks every later change against them, the agent's included.

### What more can a type say?

Exactly which values are allowed. In [Chapter 13](../programming-fundamentals/values-types-variables.md), a type label said what kind of value a variable held. Here you decide the shape of your own data, and the agent writes it down.

Start with the form itself. A **record type** is the blank form: it names each box, called a **field**, and says what kind of answer goes in it. Here is Brightline's invoice form with four of its seven boxes, and then one invoice filled in. Predict what it prints.

```ts tab="TypeScript" tab-group="language"
// the blank form: each box, and
// the kind of answer it takes
type Invoice = {
  number: string;
  vendorId: string;
  // a date as text, or nothing
  dueDate: string | null;
  amountCents: number;
};

// one form, filled in
const inv: Invoice = {
  number: "INV-8305",
  vendorId: "V005",
  dueDate: null,
  amountCents: 735000,
};
console.log(inv.number, inv.dueDate);
```

```python tab="Python" tab-group="language"
from dataclasses import dataclass

# the blank form: each box, and
# the kind of answer it takes
@dataclass(frozen=True)
class Invoice:
    number: str
    vendor_id: str
    # a date as text, or nothing
    due_date: str | None
    amount_cents: int

# one form, filled in
inv = Invoice(
    number="INV-8305",
    vendor_id="V005",
    due_date=None,
    amount_cents=735000,
)
print(inv.number, inv.due_date)
```

```text tab="TypeScript" tab-group="language"
INV-8305 null
```

```text tab="Python" tab-group="language"
INV-8305 None
```

| Language | How the form is written |
| --- | --- |
| TypeScript | `type Invoice = { ... }` names the type. Each line inside is a field and its type. `string \| null` means text, or nothing. |
| Python | `@dataclass` turns a class that only lists fields into a record type, and `frozen=True` means a record cannot be changed once it is made. `str \| None` means text, or nothing. [14.3](classes-and-objects.md) explains classes. |

### How does a type allow only a few exact values?

With a **literal type**. It is the form's row of checkboxes: only these answers exist. Here is a small one, with two of Brightline's five terms, a dictionary of the days each one gives, as in [13.7](../programming-fundamentals/lists-and-dictionaries.md), and a function that takes only `Terms`. Predict which call the type checker refuses.

```ts tab="TypeScript" tab-group="language"
// the checkboxes: Terms is one
// of these two values.
// | means "or"
type Terms = "Net 15" | "Net 30";

// the days each one gives
const DAYS: Record<Terms, number> = { "Net 15": 15, "Net 30": 30 };

// terms must be one of them
function days(terms: Terms): number {
  return DAYS[terms];
}

console.log(days("Net 30"));
console.log(days("Net 10"));
```

```python tab="Python" tab-group="language"
from typing import Literal

# the checkboxes: Terms is one
# of these two values
Terms = Literal["Net 15", "Net 30"]

# the days each one gives
DAYS: dict[Terms, int] = {"Net 15": 15, "Net 30": 30}

# terms must be one of them
def days(terms: Terms) -> int:
    return DAYS[terms]

print(days("Net 30"))
print(days("Net 10"))
```

```text tab="TypeScript" tab-group="language"
14-2/try.ts(10,18): error TS2345: Argument of type '"Net 10"' is not assignable to parameter of type 'Terms'.
```

```text tab="Python" tab-group="language"
14-2/try.py:11:12 - error: Argument of type "Literal['Net 10']" cannot be assigned to parameter "terms" of type "Terms" in function "days"
```

The checker names the file, then the line and column of the call it refuses, counted in the file in `14-2`, which has no comments.

### Where does text from a file become a type?

Where it enters the program. Text read from a file is only a string. A literal type will not accept it, because it might be `"Net 10"`. The type checker reads your code before the program runs, and never sees what arrives in a file.

So the program needs a **type guard**, such as Brightline's `isTerms`: code that runs with the program and reads the text that came in. It is the form's clerk: it answers true or false, once, where the text enters. The checker believes a true answer, and treats the text as `Terms`.

A **cast**, such as `as Terms`, skips the clerk: it tells the checker to believe the text without looking.

Brightline's full `Terms` has all five values, so its clerk checks all five. Predict both answers.

```ts tab="TypeScript" tab-group="language"
// the clerk: is this text
// one of the Terms?
// "text is Terms": the checker
// believes a true answer
function isTerms(text: string): text is Terms {
  // is the text on the list?
  // includes answers that
  return ["Due on receipt", "Net 15", "Net 30", "Net 45", "Net 60"].includes(text);
}

console.log(isTerms("Net 30"), isTerms("Net 10"));
```

```python tab="Python" tab-group="language"
from typing import TypeGuard

# the clerk: is this text
# one of the Terms?
# TypeGuard[Terms]: the checker
# believes a true answer
def is_terms(text: str) -> TypeGuard[Terms]:
    # is the text on the list?
    # in answers that
    return text in ["Due on receipt", "Net 15", "Net 30", "Net 45", "Net 60"]

print(is_terms("Net 30"), is_terms("Net 10"))
```

```text tab="TypeScript" tab-group="language"
true false
```

```text tab="Python" tab-group="language"
True False
```

**At work.** Ana has the agent change one line: the `terms` parameter of `dueDate` goes from `string` to `Terms`. The type checker reports six errors. Four pass raw text from a file straight into the calculation. One is the test that checks unknown terms on purpose. One is a call an agent wrote with `"Net 10"`, terms Brightline has never used. Ana decides two things, and the agent makes both changes: check the text once, where it is read, and have that one test expect the error.

As in [13.2](../programming-fundamentals/the-workbench.md), a run never checks type labels, so a type protects you only when the type checker runs. Checking data while the program runs is the job of [14.4](data-models-and-schemas.md).

### Try it

The file in `14-2` is the two-term block above, without its comments. Run it and investigate, as in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#try-it).

**Run the checker.** Send: "Run the file, then check it with the type checker. Show me what each prints." The file runs, and the checker refuses one line.

**Modify.** Send: "Write the second call with a cast, so the checker believes it: `as Terms` in TypeScript, or `cast(Terms, ...)` in Python. Don't run anything yet." Will the checker accept it now? What will the file print? Then ask the agent to run the checker and the file.

**Make.** Send: "Add a function that takes text, answers whether it is one of the allowed terms, and reports it if not. Use it for "Net 10" instead of the cast."

**What you should see.** The checker accepts the cast, and the run is still wrong: `undefined` in TypeScript, a `KeyError` in Python.

**The operating rule:** write the allowed values into the types, check raw text once where it enters the program, and let the type checker check every line after that.

![Figure 14.2. Text going through a check during the run before it becomes Terms. "Net 30" matches exactly and gets in. "Net 10" is not an allowed value and "net 30" has the wrong case, so both are rejected and reported. isTerms answers true or false, and parseTerms returns Terms or throws an error. The five allowed terms are Due on receipt, Net 15, Net 30, Net 45 and Net 60.](img/type-fence.png)

*Figure 14.2. The clerk's check, in code. Text from outside is checked once as it comes in.*

**Next.** A type describes one value. [14.3](classes-and-objects.md) holds several values together, with the functions that work on them.



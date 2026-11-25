# 14.6 Errors as design (/building-ai-workers/structuring-programs/errors-as-design)

---
type: Document
title: "14.6 Errors as design"
description: "What a program should do when its edge refuses data: when to stop, why to collect every bad row, and what the report tells the person who owns the data."
status: stable
order: 314.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.6" ]
last_verified: 2026-10-30
sources:
  - id: pydantic-validation-errors
    title: "Validation errors (Pydantic, accessed 2026-10-30)"
    resource: https://pydantic.dev/docs/validation/latest/errors/validation_errors/
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A good clerk who finds problems in a batch of 200 invoices does not stop at the first. She marks every problem with a note that says what is wrong and what to do, and hands the whole batch back. One trip, not twenty.

**What you will learn.** How to design what happens when the [edge](data-models-and-schemas.md#why-check-at-the-edge) refuses: stop, collect every problem, and tell whoever owns the data what to fix.

**Why it matters.** On a run nobody watches, the report is what somebody reads.

### How does a program stop itself?

By raising an **exception**: an error that stops the normal flow of a program. With one invoice in front of her, a clerk who finds a negative amount does not pay it and hope. She refuses it, with a note that says what is wrong. Code does the same in one line. Predict what prints, and what never does.

```ts tab="TypeScript" tab-group="language"
function checkAmount(cents: number): number {
  // a negative amount breaks
  // the rule: stop, with a note
  if (cents < 0) {
    throw new Error("amount must be zero or more");
  }
  // the rule held: hand it back
  return cents;
}

console.log(checkAmount(482500));
console.log(checkAmount(-23450));
console.log("the next line");
```

```python tab="Python" tab-group="language"
def check_amount(cents: int) -> int:
    # a negative amount breaks
    # the rule: stop, with a note
    if cents < 0:
        raise ValueError("amount must be zero or more")
    # the rule held: hand it back
    return cents

print(check_amount(482500))
print(check_amount(-23450))
print("the next line")
```

```text tab="TypeScript" tab-group="language"
482500
Error: amount must be zero or more
    at checkAmount (...)
```

```text tab="Python" tab-group="language"
482500
Traceback (most recent call last):
  ...
ValueError: amount must be zero or more
```

The first call passed, so its amount came back and was printed. The second broke the rule, so the function stopped at that line, and the program stopped with it. The last line never ran. The text in the error is the clerk's note. It is what somebody reads, so it says what is wrong.

### How does code catch an error?

With `try`. Code that expects a failure puts the risky lines in a `try` block. If a line inside raises an error, the rest of that block is skipped, and the block that follows it runs instead. Then the program goes on. The function is the one above. Predict each line.

```ts tab="TypeScript" tab-group="language"
try {
  checkAmount(-23450);
  console.log("the next line");
// the note arrives here, in
// error. String(error) gives
// its kind, then its text
} catch (error) {
  console.log("refused:", String(error));
}
console.log("the program goes on");
```

```python tab="Python" tab-group="language"
try:
    check_amount(-23450)
    print("the next line")
# the note arrives here,
# under the name err
except ValueError as err:
    print("refused:", err)
print("the program goes on")
```

```text tab="TypeScript" tab-group="language"
refused: Error: amount must be zero or more
the program goes on
```

```text tab="Python" tab-group="language"
refused: amount must be zero or more
the program goes on
```

**Catching** an error does not fix it. It is where the code decides what to do about it: here, to report it and carry on.

| | TypeScript | Python |
| --- | --- | --- |
| Raise an exception | `throw` | `raise` |
| Catch one | `try` and `catch` | `try` and `except` |

### When should a program stop?

When an input breaks a rule the program relies on, and before it calculates anything from that input. A refusal at the edge stops the run before any list or total exists.

Every program hands back one number as it ends. A program that finished hands back 0. The first program on this page stopped on its error, and handed back 1. A **failure code** is any number but 0, and it tells whatever started the run that it failed. Your agent reads it, and so does a job that runs on a schedule with nobody watching. The number is not in the program's own output. To see it, ask your agent what number the run ended with.

### Stop at the first bad row, or collect them?

Collect them, so one report holds every problem. This is the good clerk: a note for every problem, and the whole batch handed back once.

Here it is with three rows and two rules. Predict how many problems it reports.

```ts tab="TypeScript" tab-group="language"
const rows = [
  { number: "INV-8301", amount: 482500, terms: "Net 30" },
  { number: "INV-8304", amount: -23450, terms: "Net 30" },
  { number: "INV-8306", amount: 158200, terms: "Net 10" },
];

// the clerk's pile of notes
const errors: string[] = [];

for (const row of rows) {
  // a note, and keep going.
  // push adds it to the end
  // of the pile
  if (row.amount < 0) {
    errors.push(row.number + " amount must be zero or more");
  }
  // another note, and keep going.
  // !== means "is not"
  if (row.terms !== "Net 15" && row.terms !== "Net 30") {
    errors.push(row.number + " terms must be one of the known terms");
  }
}

// hand back the whole pile
for (const error of errors) {
  console.log(error);
}
console.log(errors.length, "errors");
```

```python tab="Python" tab-group="language"
rows = [
    {"number": "INV-8301", "amount": 482500, "terms": "Net 30"},
    {"number": "INV-8304", "amount": -23450, "terms": "Net 30"},
    {"number": "INV-8306", "amount": 158200, "terms": "Net 10"},
]

# the clerk's pile of notes
errors: list[str] = []

for row in rows:
    # a note, and keep going.
    # append adds it to the end
    # of the pile
    if row["amount"] < 0:
        errors.append(row["number"] + " amount must be zero or more")
    # another note, and keep going.
    # != means "is not"
    if row["terms"] != "Net 15" and row["terms"] != "Net 30":
        errors.append(row["number"] + " terms must be one of the known terms")

# hand back the whole pile
for error in errors:
    print(error)
print(len(errors), "errors")
```

Both print:

```text
INV-8304 amount must be zero or more
INV-8306 terms must be one of the known terms
2 errors
```

Neither `if` stops the loop, so every row meets every rule. No exception is needed here: each problem becomes a note in the list, and the list is the report.

**At work.** Brightline's messy export, `data/invoices-messy.csv`, has 15 rows and four problems: a negative amount on line 5, terms "Net 10" on line 7, the date `2026-13-02` on line 11, and on line 14 a vendor id, `V099`, that is not in the vendor list. The agent's first loader stopped at line 5. The test Ana decided on expected four errors, with line numbers, and the second version passed it.

The second version is the small loop above, grown to full size. The two rules became the schema of [14.5](schema-rules.md#what-rules-can-a-schema-hold), one more check asks whether each vendor id is in the vendor list, and each note carries its line in the file. On the messy file, the loader prints:

```text tab="TypeScript" tab-group="language"
$ npm run check-invoices -- data/invoices-messy.csv
line 5  INV-8304  amountCents must be zero or more
line 7  INV-8306  terms must be one of the known terms
line 11  INV-8310  invoiceDate must be a real date, YYYY-MM-DD
line 14  INV-8313  vendorId V099 is not in vendors.csv
11 valid, 4 errors in data/invoices-messy.csv
```

```text tab="Python" tab-group="language"
line 5  INV-8304  amount_cents Input should be greater than or equal to 0
line 7  INV-8306  terms Input should be 'Due on receipt', 'Net 15', 'Net 30', 'Net 45' or 'Net 60'
line 11  INV-8310  invoice_date Input should be a valid date or datetime, month value is outside expected range of 1-12
line 14  INV-8313  vendor_id V099 is not in vendors.csv
11 valid, 4 errors in ../data/invoices-messy.csv
```

So the 11 valid rows go no further. The loader checks every row, reports every problem, and only then stops with its failure code. Nothing is listed or totaled until the owner has fixed the file.

### Who gets the report, and what does it say?

The person who owns the data. Each line names the row, the invoice, the field and what is allowed, so the owner fixes all four at once, with no questions.

Four choices come out of this lesson. Design each one from the start:

| Design choice | What it means | Brightline example |
| --- | --- | --- |
| Fail loudly at the edge | Refuse bad input where it enters, with a clear message | The loader refuses a negative amount, [until credits are decided](#what-does-refusing-cost) |
| Never fail silently | Do not turn an error into a default value | The mistake to avoid: Brightline's `invoiceFromRow` turns a blank amount into $0.00 ([14.5](schema-rules.md#does-the-library-change-values-for-me)) |
| Collect, do not stop at the first | In a batch, check every record, then report them all | All four bad rows in one report |
| A message says what and what next | What failed, where, and what to try | "line 7, terms must be one of the known terms" |

### When is a catch block wrong?

When it catches every error and carries on as if nothing happened, because that hides bugs. The function is the one from the top of this lesson. Predict what this prints.

```ts tab="TypeScript" tab-group="language"
let cents = 0;
try {
  cents = checkAmount(-23450);
} catch {
  // nothing here: the note
  // is thrown away
}
console.log(cents);
```

```python tab="Python" tab-group="language"
cents = 0
try:
    cents = check_amount(-23450)
except:
    # nothing here: the note
    # is thrown away
    pass
print(cents)
```

Both print:

```text
0
```

The amount was refused, the empty block threw the note away, and the program went on with $0.00 as if nothing had happened. When you see a block like this in agent-written code, ask: which error is this for, and what does the code do about it? If the answer is "nothing", it should not be there.

| Language | What a catch block catches |
| --- | --- |
| TypeScript | A TypeScript `catch` catches everything. With no name after it, as in `catch {`, it does not even keep the note. An empty `catch {}` is the shape to question first. |
| Python | A Python `except` names the kinds it catches, such as `except ValidationError`. A bare `except:` catches every error, and is the shape to question first. `pass` means "do nothing". |

### What does refusing cost?

One bad row stops the whole run until its owner fixes it. That price is worth paying only when the rules are right: [Marcus's run](overview.md#why-it-matters) stopped for a credit that was never a mistake. Ana's rule assumes this export holds no credits, and if it ever does, the rule must change first. A run also need not stop whole: it can pay the valid rows and set the bad ones aside for their owner. Which is right depends on what a bad row would cost, so decide it in your brief.

### Try it

The file in `14-6` checks three rows and collects every problem. Run it and investigate, as in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#try-it).

**Modify.** Send: "Change the loop so it stops at the first problem. Don't run it yet." How many lines will it print now? Which problem disappears? Then ask the agent to run it.

**Make.** Decide what the person who owns the export needs to read. Then send: "Put the loop back so it collects every problem, and end each message with what to fix: [your words]. Don't run it yet." Read the messages, and then ask the agent to run it. Then ask: "What number did that run end with?" It reported two problems, so decide what that number should be. Then send: "Make the file end with a failure code when it finds any problem. Run it, and tell me the number it ends with."

**What you should see.** After your change in Modify, one problem and a count of `1`. The bad terms on INV-8306 are never reported, so its owner would have to come back a second time. In Make, the run ends with 0 until you ask for a failure code, though it reports two problems. After you ask, it ends with a number that is not 0, usually 1.

**The operating rule:** refuse bad data loudly at the edge, before anything is calculated from it. Collect every problem in one report for whoever owns the data, each with its line and what to fix. Never let a catch block turn an error into a default value.

![Figure 14.6. Fifteen data rows, lines 2 to 16, going through the schema rules and a vendor lookup. Eleven rows pass and become Invoice records. Four go into one report, each with its line, invoice, field and reason: line 5, INV-8304, a negative amount. Line 7, INV-8306, unknown terms. Line 11, INV-8310, an impossible date. Line 14, INV-8313, vendor V099 missing from vendors.csv.](img/error-report.png)

*Figure 14.6. Collect, then report. One pass over the batch finds every problem, and one report goes back to the owner of the data.*

**Next.** [14.7](json-and-rest-apis.md) gets the data from another program, which can change without telling you.



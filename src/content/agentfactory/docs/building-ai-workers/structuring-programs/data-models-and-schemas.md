# 14.4 Data models and schemas (/building-ai-workers/structuring-programs/data-models-and-schemas)

---
type: Document
title: "14.4 Data models and schemas"
description: "What a schema and a data model are, how a schema checks each record as it enters the program, and why the check belongs at the edge."
status: stable
order: 314.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:30Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.4" ]
last_verified: 2026-10-30
sources:
  - id: zod-api
    title: "Defining schemas (Zod, accessed 2026-10-30)"
    resource: https://zod.dev/api
  - id: zod-json-schema
    title: "JSON Schema (Zod, accessed 2026-10-30)"
    resource: https://zod.dev/json-schema
  - id: pydantic-models
    title: "Models (Pydantic, accessed 2026-10-30)"
    resource: https://pydantic.dev/docs/validation/latest/concepts/models/
  - id: pydantic-json-schema
    title: "JSON Schema (Pydantic, accessed 2026-10-30)"
    resource: https://pydantic.dev/docs/validation/latest/concepts/json_schema/
  - id: pydantic-validation-errors
    title: "Validation errors (Pydantic, accessed 2026-10-30)"
    resource: https://pydantic.dev/docs/validation/latest/errors/validation_errors/
generated:
  at: 2026-11-23T16:16:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A loading dock checks each delivery at the door: the labels, the paperwork, any damage. A broken pallet is refused there, not found three days later on a shelf.

**What you will learn.** How a schema checks each record as it comes in, and what it hands back.

**Why it matters.** Your tests cover the rows you can see. Written rules, checked on every record as it comes in, also cover next month's rows.

### What is a schema?

A **schema** is a written description of what valid data looks like: which fields, which types, which values. It is the dock's checklist at the door. In [14.2](types-you-write-down.md), `isTerms` checked one field by hand as the text came in. A schema checks every field of a record that way.

Start with the smallest schema: one rule, for one field. An amount must be a whole number of cents, zero or more. Two amounts arrive at the door. Predict what each line prints.

```ts tab="TypeScript" tab-group="language"
// everything the zod package
// offers, under the name z
import * as z from "zod";

// the rule for one field: whole
// cents, zero or more
const Amount = z.int("must be whole cents").min(0, "must be zero or more");

// two amounts arrive at the door
for (const value of [482500, -23450]) {
  const result = Amount.safeParse(value);
  // the amount, and did it pass
  console.log(value, result.success);
}
```

```python tab="Python" tab-group="language"
from pydantic import BaseModel, Field, ValidationError

# (BaseModel): Invoice is a kind
# of Pydantic model. Its field is
# a whole number. ge=0 means
# greater than or equal to 0
class Invoice(BaseModel):
    amount: int = Field(ge=0)

# two amounts arrive at the door
for value in [482500, -23450]:
    # try: a check that may be
    # refused
    try:
        Invoice.model_validate({"amount": value})
        # it passed
        print(value, True)
    # except: these lines run
    # when it was refused
    except ValidationError:
        print(value, False)
```

```text tab="TypeScript" tab-group="language"
482500 true
-23450 false
```

```text tab="Python" tab-group="language"
482500 True
-23450 False
```

The schema **validates** each value, which means it checks the value against the rule and says yes or no.

| Language | How the check is written |
| --- | --- |
| TypeScript | Zod is the library Brightline uses for schemas. `z.int(...).min(0, ...)` is the rule, with the message to give when it is broken. `safeParse` checks one value and answers with `success`, true or false. |
| Python | Pydantic is the library Brightline uses for schemas. A Pydantic model is a class whose fields are the rules. `model_validate` checks one record, and refuses a bad one with an error called a `ValidationError`. [14.6](errors-as-design.md#how-does-code-catch-an-error) says more about `try` and `except`. |

### What is a data model?

It is what comes out of the check. When a record passes, the schema hands it back as data your code can trust: every field is there, and each has its type. A **data model** is the record type of [14.2](types-you-write-down.md), worked out from the schema: its fields, and the type of each. The schema and the data model are written in one place, so they cannot disagree.

Here is a small version of Brightline's invoice schema, with two fields, and one good invoice at the door. The last line adds a fee of 2500 cents, which is $25.00, to its amount. Predict what it prints.

```ts tab="TypeScript" tab-group="language"
import * as z from "zod";

// the schema: two fields, each
// with its type
const InvoiceSchema = z.object({
  number: z.string(),
  amountCents: z.int().min(0),
});
// the data model: the type Zod
// works out from that schema
type Invoice = z.infer<typeof InvoiceSchema>;

// one good invoice at the door
const result = InvoiceSchema.safeParse({ number: "INV-8301", amountCents: 482500 });
if (result.success) {
  // it passed: result.data is
  // the checked record
  const invoice: Invoice = result.data;
  console.log(invoice.number, invoice.amountCents + 2500);
}
```

```python tab="Python" tab-group="language"
from pydantic import BaseModel, Field

# one class is the schema and
# the data model: two fields,
# each with its type
class InvoiceModel(BaseModel):
    number: str
    amount_cents: int = Field(ge=0)

# one good invoice at the door.
# It passed, so invoice is the
# checked record
invoice = InvoiceModel.model_validate({"number": "INV-8301", "amount_cents": 482500})
print(invoice.number, invoice.amount_cents + 2500)
```

Both print:

```text
INV-8301 485000
```

After the door, the code uses the record's fields by name, and can rely on each one. The number is there, and it is text. The amount is there, and it is a whole number, zero or more.

| Language | Where the data model is |
| --- | --- |
| TypeScript | `Invoice` is the data model. `z.infer<typeof InvoiceSchema>` means "the type that fits this schema", so nobody writes the fields a second time. `result.data` is the checked record, and it has that type. |
| Python | `InvoiceModel` is both the schema and the data model. Its fields are the rules for the check, and a checked record is an object of that class, as in [14.3](classes-and-objects.md). So in Pydantic, the model class is the type. |

So a schema either returns the data, now trusted and typed, or returns a list of what is wrong.

### Why check at the edge?

Because every record passes there, on every run. An edge is wherever data comes in: a file, an API, a form or another program. Validate once, at the edges you marked in [14.1](modules.md), and the code inside can rely on what it holds, as long as the schema is right and nothing later changes the data without checking it again.

### Try it

The file in `14-4` checks two amounts with a one-field schema. Run it and investigate, as in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#try-it).

**Modify.** Send: "Change the two amounts in the file to 0 and 4825.5. Don't run it yet." Read the rule line, and say what the schema will do with each. Then ask the agent to run it.

**Make.** Send: "Make a new file in 14-4 called mine, with a schema for one field, a count of invoices, which must be a whole number, 1 or more. Check three values of my choice. Don't run it yet." Read its rule line, say what it will print, and then ask the agent to run it.

**What you should see.** After your change, 0 passes, because the rule says zero or more, and 4825.5 is refused, because it is not a whole number.

**The operating rule:** validate every record where it enters the program, and use only what the schema hands back.

![Figure 14.5. Five CSV rows passing through a runtime schema. INV-8301 and INV-8302 become Invoice records with whole-number amounts. Three are rejected with a reason: INV-8304 has a negative amount, INV-8306 has the terms Net 10, and INV-8310 has the date 2026-13-02.](img/schema-edge.png)

*Figure 14.5. Check at the edge. Inside the program, every record has already passed the schema.*

**Next.** [14.5](schema-rules.md) shows which rules a schema can hold, and what it still lets through.



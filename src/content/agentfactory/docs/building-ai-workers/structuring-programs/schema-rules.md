# 14.5 What a schema holds, and what it lets through (/building-ai-workers/structuring-programs/schema-rules)

---
type: Document
title: "14.5 What a schema holds, and what it lets through"
description: "The rules a schema can hold, what it cannot check, what a schema library changes before it checks, and how a schema is written out as JSON Schema."
status: stable
order: 314.045
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:30Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.5" ]
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

**In everyday life.** The loading dock of [14.4](data-models-and-schemas.md) checks each delivery against a checklist: the label, the paperwork, any damage. It does not open the boxes. A box with the right label and the wrong goods inside still gets through.

**What you will learn.** What can go on the dock's checklist, what the dock cannot see, and what some docks quietly fix before they check.

**Why it matters.** A schema checks shape, not meaning. What it lets through is what your own count, total and tests must still catch.

### What rules can a schema hold?

Most of what a careful person would check at the door. Each rule is one line on the dock's checklist. [14.4](data-models-and-schemas.md) had one line, for one field. Brightline's invoice schema uses five kinds.

| A schema rule | What it rejects | Brightline field |
| --- | --- | --- |
| A pattern | Text of the wrong shape | `number` must look like `INV-8301` |
| A real date | `2026-13-02`, and February 30 | `invoiceDate`, `dueDate` |
| One of a fixed set | Anything else | `terms`, `status` |
| A whole number, zero or more | `-23450`, `4825.5`, `"$4,825.00"` | `amountCents` |
| May be empty | Nothing, it allows a gap | `dueDate` may be null |

Here is the whole schema, from Brightline's schema file. Each line is one rule from the table, and the comment above it names the rule.

```ts tab="TypeScript" tab-group="language"
export const InvoiceSchema = z.object({
  // a pattern: INV-, then digits,
  // and nothing else
  number: z.string().regex(/^INV-\d+$/, "must look like INV-8301"),
  // a real date
  invoiceDate: z.iso.date("must be a real date, YYYY-MM-DD"),
  // a real date, or empty
  dueDate: z.iso.date("must be a real date, YYYY-MM-DD").nullable(),
  // one of a fixed set: TERMS is
  // the list of Brightline's
  // five payment terms
  terms: z.enum(TERMS, "must be one of the known terms"),
  // a whole number, zero or more
  amountCents: z.int("must be whole cents").min(0, "must be zero or more"),
  // ...vendorId and status
});
```

```python tab="Python" tab-group="language"
class InvoiceModel(BaseModel):
    # a pattern: INV-, then digits,
    # and nothing else
    number: str = Field(pattern=r"^INV-\d+$")
    # a real date
    invoice_date: date
    # a real date, or empty
    due_date: date | None
    # one of a fixed set: Terms is
    # the type of 14.2, with
    # Brightline's five terms
    terms: Terms
    # a whole number, zero or more
    amount_cents: int = Field(ge=0)
    # ...vendor_id and status
```

You do not have to read every mark on a line. Read the comment, and check it against the table: does each field have the rule you expect? The pattern in the first rule, `^INV-\d+$`, means "INV-, then digits, and nothing else". For any pattern you cannot read, ask the agent for three values it accepts and three it refuses.

The dock does not just say no. It writes on the delivery note what was wrong. A schema answers a bad record the same way, with a list of problems, one for each rule it broke. INV-8304, from Brightline's messy export, has an amount below zero. Checked against this schema, it comes back with one problem, which names the field and the rule.

```text tab="TypeScript" tab-group="language"
amountCents must be zero or more
```

```text tab="Python" tab-group="language"
amount_cents Input should be greater than or equal to 0
```

A record that breaks three rules gets three lines, all from one check. [14.6](errors-as-design.md) decides who reads them.

**At work.** Ana decides the test cases first, from rows she can see, and the agent writes them. One good invoice, INV-8301, passes. Each kind of bad value is refused: a negative amount, a fraction of a cent, unknown terms and month 13. Then the agent adds the schema library, and writes the schemas that pass. She compares every rule with the table above.

### What can a schema not check?

Two things, and the dock has the same two limits.

**It sees one record at a time.** The dock checks the delivery in front of it. The order book is in the office, so the dock cannot tell that nobody ordered this. The invoice schema does not have the vendor list, so it cannot know that vendor `V099` does not exist. Rules that compare a record with other data are code you write after the schema. [14.6](errors-as-design.md) shows where they go.

**It does not open the box.** A right label with the wrong goods inside passes. A schema checks shape, not meaning. If INV-8301's amount arrives as `48250` instead of `482500`, it is whole cents, zero or more, and it passes. The count of invoices is still right. What catches it is your own total of their amounts, as in [Chapter 12](../agentic-coding/from-chat-to-coding-agent.md), and a test that names the right amount.

### Does the library change values for me?

Some do, so find out before you trust a schema. Picture two docks. At one, a label with a smudge is refused. At the other, a helpful worker writes a clean label and lets the box in. The second dock is easier to deliver to, but what is on its shelf is no longer exactly what arrived.

A value read from a file starts as text: `"482500"`, in quotes, is not yet a number. That is the smudged label.

| Language | What the library does with text where a number belongs |
| --- | --- |
| TypeScript | Zod is the first dock. It refuses the text, and changes nothing for you. Watch the code before the schema, though. The language's own `Number("")` is 0, as [13.12](../programming-fundamentals/judgment.md#how-do-i-red-team-my-tests) showed, so a blank can arrive as a valid 0. |
| Python | Pydantic is the second dock, by default. The text `"482500"` becomes the number `482500`, even with spaces around it. Text that is not a number is refused, and so is a blank. |

So ask the agent what happens to a blank, and to text with spaces around it, before the schema sees them.

**At work.** Brightline's list of Friday's payments was written before the schema. Its code turns every amount into a number, and checks nothing. If next week's export leaves INV-8301's amount blank, the list still shows 8 invoices, with INV-8301 at $0.00, and no warning.

### How does a schema become JSON Schema?

The library writes it out. A supplier who wants a delivery accepted the first time asks the dock for a copy of its checklist. Another program needs the same from your schema, and it cannot read your code. So both libraries can write a schema out as **JSON Schema**: the same rules as plain text, in a standard form that other programs read. The amount rule comes out as a type of `integer`, which is a whole number, with a `minimum` of 0. [Chapter 17](../connectors-and-mcp/a-tool-is-its-description.md) uses JSON Schema to tell an AI model what inputs a tool accepts.

### Try it

The file in `14-5` checks two amounts with the one-field schema of 14.4. Run it and investigate, as in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#try-it).

**Modify.** Write in your notes whether each of these should be accepted: `"482500"` as text, the same text with spaces around it, `4825.5`, and INV-8301's amount with one zero missing, `48250`. Then send: "Change the list of values in the file to these four. Don't run it yet." Say what the schema will do with each one. Then ask the agent to run it.

**Make.** Send: "Add one line to the file that writes the schema out as JSON Schema and prints it. Don't run it yet." Say which two facts about an amount it will show. Then ask the agent to run it.

**What you should see.** Both languages accept `48250`, because a schema checks shape, not meaning. The other three values depend on your language. The JSON Schema shows a type of `integer` and a `minimum` of 0.

| Language | What the schema does with the other three |
| --- | --- |
| TypeScript | Zod refuses the two text values and the fraction. |
| Python | Pydantic turns both text values into `482500`, and refuses the fraction. |

**The operating rule:** read every rule in a schema against what you would check at the door. Ask what the library fixes before it checks. Keep the rules that compare records in code right after the schema, and keep your own total and tests for the wrong values it lets through.

**Next.** A schema can refuse a record. In [14.6](errors-as-design.md), you decide what happens next, and who is told.



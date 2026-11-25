# 14.3 Classes and objects (/building-ai-workers/structuring-programs/classes-and-objects)

---
type: Document
title: "14.3 Classes and objects"
description: "How to read a class by the data it holds and the job of each method, and when to hold another object instead of extending it."
status: stable
order: 314.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:28Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.3" ]
last_verified: 2026-10-30
sources:
  - id: node-typescript
    title: "Modules: TypeScript (Node.js, accessed 2026-10-30)"
    resource: https://nodejs.org/api/typescript.html
generated:
  at: 2026-11-21T00:02:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A builder works from a blueprint for a house. The blueprint is not a house. Each house built from it is one real thing, with its own address and paint color. All have the same rooms.

**What you will learn.** How to read a class: the data each object holds, and the job of each method.

**Why it matters.** Much of the code an agent writes, and most code a company publishes for its service, is built this way.

### What is a class, and what is an object?

A blueprint, and one thing built from it.

**See a small one work.** This class is the blueprint for one invoice. Two objects are built from it, as two houses are built from one blueprint, and each holds its own number and amount. The comments name the parts. Predict both lines.

```ts tab="TypeScript" tab-group="language"
class Invoice {
  // its two fields
  number: string;
  cents: number;

  // the constructor: it runs
  // when an object is built,
  // and fills in its fields
  constructor(number: string, cents: number) {
    this.number = number;
    this.cents = cents;
  }

  // a method: "this" is the
  // object it was called on
  needsSecondApprover(): boolean {
    // is this one's amount
    // over $5,000.00?
    return this.cents > 500000;
  }
}

// build one object
const first = new Invoice("INV-8301", 482500);
// and another, with its own data
const second = new Invoice("INV-8303", 1290000);
console.log(first.number, first.needsSecondApprover());
console.log(second.number, second.needsSecondApprover());
```

```python tab="Python" tab-group="language"
class Invoice:
    # the constructor: it runs
    # when an object is built,
    # and fills in its two fields
    def __init__(self, number: str, cents: int) -> None:
        self.number = number
        self.cents = cents

    # a method: "self" is the
    # object it was called on
    def needs_second_approver(self) -> bool:
        # is this one's amount
        # over $5,000.00?
        return self.cents > 500000

# build one object:
# Python has no "new"
first = Invoice("INV-8301", 482500)
# and another, with its own data
second = Invoice("INV-8303", 1290000)
print(first.number, first.needs_second_approver())
print(second.number, second.needs_second_approver())
```

```text tab="TypeScript" tab-group="language"
INV-8301 false
INV-8303 true
```

```text tab="Python" tab-group="language"
INV-8301 False
INV-8303 True
```

Each object holds its own `cents`, so the same method gives two different answers. These words name the parts.

| Part | What it is | In the code above |
| --- | --- | --- |
| **Class** | A blueprint for a kind of thing | `Invoice` |
| **Object**, or **instance** | One thing built from it | `first` and `second` |
| **Fields** | The data each object holds | `number`, `cents` |
| **Constructor** | The method that runs when an object is built and fills in its fields | Takes a number and an amount |
| **Methods** | Functions that work on that object's data | `needsSecondApprover()` |

Inside a method, the object is `this` in TypeScript and `self` in Python.

### How do I read a class I did not write?

By its fields, and by the one-sentence job of each method.

**At work.** The agent reorganized Brightline's scripts into two small classes. `VendorDirectory` looks up vendor names by id. `InvoiceBook` holds the invoices and a directory, and answers questions about them. Ana lists each class's fields, and says what each method does in one sentence.

Read a short version of `VendorDirectory` the same way: one field, and one method. The method's last line uses the or default from [13.5](../programming-fundamentals/conditions-and-empty-values.md#what-does-code-do-with-an-empty-value), and puts a value inside text, as its comment says. The mark at the start of the field's name, `#` in TypeScript and `_` in Python, says the field is **private**: it is for the class's own methods only. Predict both lines.

```ts tab="TypeScript" tab-group="language"
class VendorDirectory {
  // its one field: the names,
  // kept by id
  #byId: Record<string, string>;

  constructor(byId: Record<string, string>) {
    this.#byId = byId;
  }

  // its one method: the name
  // under this id, or this text
  // if there is none.
  // `...${id}` is text that
  // holds a value
  name(id: string): string {
    return this.#byId[id] || `Unknown vendor ${id}`;
  }
}

const directory = new VendorDirectory({ V005: "Hocking Valley Pallets" });
console.log(directory.name("V005"));
console.log(directory.name("V099"));
```

```python tab="Python" tab-group="language"
class VendorDirectory:
    def __init__(self, by_id: dict[str, str]) -> None:
        # its one field: the
        # names, kept by id
        self._by_id = by_id

    # its one method: the name
    # under this id, or this
    # text if there is none.
    # f"...{vendor_id}" is text
    # that holds a value
    def name(self, vendor_id: str) -> str:
        return self._by_id.get(vendor_id) or f"Unknown vendor {vendor_id}"

directory = VendorDirectory({"V005": "Hocking Valley Pallets"})
print(directory.name("V005"))
print(directory.name("V099"))
```

Both print:

```text
Hocking Valley Pallets
Unknown vendor V099
```

### Hold another object, or extend it?

Usually hold it. With **composition**, a class holds another object as a field and uses it. With **inheritance**, a class extends another and becomes a kind of it, taking all its methods. An `InvoiceBook` is not a kind of vendor directory. It has one. When an agent's class extends another, ask whether "is a kind of" is really true.

Here is a short version of `InvoiceBook`, with the `directory` from the block above. Predict what it prints.

```ts tab="TypeScript" tab-group="language"
class InvoiceBook {
  // it has a directory
  vendors: VendorDirectory;

  constructor(vendors: VendorDirectory) {
    this.vendors = vendors;
  }
}

const book = new InvoiceBook(directory);
// the book asks its directory
console.log(book.vendors.name("V005"));
```

```python tab="Python" tab-group="language"
class InvoiceBook:
    def __init__(self, vendors: VendorDirectory) -> None:
        # it has a directory
        self.vendors = vendors

book = InvoiceBook(directory)
# the book asks its directory
print(book.vendors.name("V005"))
```

Both print:

```text
Hocking Valley Pallets
```

Extending would be written `class InvoiceBook extends VendorDirectory` in TypeScript, or `class InvoiceBook(VendorDirectory)` in Python. That line would claim a book is a kind of directory.

### Try it

The file in `14-3` is the small `Invoice` class. Run it and investigate, as in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#try-it).

**Modify.** Send: "Change the second invoice's amount to exactly 500000 cents. Don't run it yet." Say what each line will print. Then ask the agent to run it.

**Make.** Send: "Add a status field to the class and a method that answers whether the invoice is open. Print the answer for one open invoice and one paid invoice. Don't run it yet." Find the new field and the new method. Say what it will print, and then ask the agent to run it.

**What you should see.** After your change, both invoices answer false. Exactly $5,000.00 is not over $5,000.00.

**The operating rule:** read a class by its fields and the one-sentence job of each method. Prefer an object that holds another to one that extends it.

![Figure 14.4. An InvoiceBook holding its invoices and a VendorDirectory. Its methods are open, openTotalCents, dueDateOf and dueBy, and dueBy calls the directory's name(id) method to add vendor names. A side panel contrasts has a, which is composition, with is a kind of, which is inheritance: an invoice book is not a vendor directory.](img/composition.png)

*Figure 14.4. Composition. The book has a directory and asks it for names. It is not a kind of directory.*

**Next.** In [14.4](data-models-and-schemas.md), you decide what your program lets in.



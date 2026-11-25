# 13.10 When it breaks: reading an error (/building-ai-workers/programming-fundamentals/reading-an-error)

---
type: Document
title: "13.10 When it breaks: reading an error"
description: "How to read a Python traceback and a Node stack trace, find the first line in your own code, and name the cause in one sentence."
status: stable
order: 313.08
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.10" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** When a car's dashboard light comes on, "the car is broken" does not help the mechanic. "The oil light came on at highway speed, and the engine was hot" does.

**What you will learn.** How to read what a program prints when it fails, and name the cause in one sentence.

**Why it matters.** When a program breaks, it tells you what went wrong and where. Read it, and tell the agent exactly what broke.

When a program fails, it prints an **error report**. The report is the program's own account of the failure: what kind of error it was, its message, and the chain of function calls that led to the line. A function calls another when it uses it.

| Language | What the report is called |
| --- | --- |
| TypeScript | A **stack trace**. Node prints it. |
| Python | A **traceback**. |

### Where do I start reading an error?

At the message. Where the message is depends on your language.

| Language | Where the message is | Then read |
| --- | --- | --- |
| TypeScript | Near the top. Node tells it like a news report, with the headline first. The message starts with `Error` or a word that ends in `Error`. | Down. Each line that starts with `at` is one call: the failing line first, then the line that called it, and so on. |
| Python | On the last line. Python tells it like a story, with the ending last. The message starts with a word that ends in `Error`. | Up. The failing line is just above the message, the line that called it is above that, and the oldest call is at the top. |

Reading in that direction, find the first line that names a file in your project. Skip the lines that point into the language's own code.

| Language | Lines to skip | How a line is named |
| --- | --- | --- |
| TypeScript | Lines that name `node:internal`. | After a file's name, `16:22` means line 16. The second number is the position on that line. |
| Python | Lines that name `<frozen runpy>`. | `line 21` after the file's name. A row of `^` under the code marks the part that failed. |

### Why is the failing line not always the bug?

A program **raises** an error, stopping to report it, at the line where a bad value finally causes trouble. The mistake is often earlier, where the bad value came from. So at each line in the chain, ask one question: did this line make the bad value, or was it handed it? If it was handed it, go to the line that called it, and ask again. Stop at the line that made it.

**At work.** Ana has the agent run the reconciliation script, which checks each stated due date against the terms, on a file with no `terms` column. The run fails.

Before you read on, find the message in your language's report, and then the first line that names a file in the project.

```text tab="TypeScript" tab-group="language"
$ npm run reconcile -- data/invoices-no-terms.csv
file:///.../src/due-date.ts:13
    throw new Error(`Unknown terms: ${terms}`);
          ^

Error: Unknown terms: undefined
    at termsDays (file:///.../src/due-date.ts:13:11)
    at dueDate (file:///.../src/due-date.ts:22:39)
    at reconcile (file:///.../src/reconcile.ts:16:22)
    at file:///.../src/reconcile.ts:26:17
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
```

```text tab="Python" tab-group="language"
$ uv run python -m brightline_ap.reconcile ../data/invoices-no-terms.csv
Traceback (most recent call last):
  File "<frozen runpy>", line 88, in _run_code
  File ".../py/brightline_ap/reconcile.py", line 31, in <module>
    found = reconcile(Path(file).read_text(encoding="utf-8"))
  File ".../py/brightline_ap/reconcile.py", line 21, in reconcile
    computed = due_date(row["invoice_date"], row["terms"])
                                             ~~~^^^^^^^^^
KeyError: 'terms'
```

**Step 1. The message.**

| Language | What it says |
| --- | --- |
| TypeScript | `Error: Unknown terms: undefined`. Some code was handed terms that are `undefined`, which means nothing was there. |
| Python | `KeyError: 'terms'`. Some code asked for a key that is not there. |

**Step 2. The first line in the project.**

| Language | The line |
| --- | --- |
| TypeScript | `due-date.ts:13`, in `termsDays`. Node also shows it above the message. `throw` is the word that raises an error, and this line raised it on purpose, because it does not know these terms. |
| Python | `reconcile.py`, line 21, just above the message. The `^` marks sit under `row["terms"]`. |

**Step 3. Did this line make the bad value, or was it handed it?**

| Language | The answer |
| --- | --- |
| TypeScript | It was handed it. So go down the `at` lines. `dueDate`, at line 22, was handed the terms too. The line at `reconcile.ts:16` asks a row of the file for its terms, and the row has none, so `undefined` began there. A missing key gives `undefined` with no error ([13.7](lists-and-dictionaries.md#what-happens-to-a-missing-key)), so the error appeared two calls later. |
| Python | It made it. Line 21 asks the row for `terms`, and the row has none. Python stops at a missing key at once, so here the failing line is also the cause. That is not always so: in Try it below, the failing line was handed its trouble. |

**Ana's sentence** names the file, the line and the cause.

| Language | Her sentence |
| --- | --- |
| TypeScript | "The error is raised in `due-date.ts`, but the cause is `reconcile.ts` line 16: this file has no terms column, so the terms it passes are undefined." |
| Python | "The error is raised at `reconcile.py` line 21: it asks each row for its terms, and this file has no terms column." |

Then she asks: "Make the script stop with a clear message that names the missing column. Don't fill in default terms."

**"It broke" is not enough.** If you say "it failed, fix it" without reading the error, the agent may hide the error instead of fixing its cause, for example by giving every row with no terms "Net 30".

### Try it

The file in `13-10` is the `while` loop from [13.5](conditions-and-empty-values.md#how-does-a-condition-stop-a-loop), with one change: each page is now a list of its invoice numbers, not a count. So `pages` is a list of lists, and `[]` is an empty page. `pages[page].length` in TypeScript and `len(pages[page])` in Python count them, as in [13.7](lists-and-dictionaries.md#what-is-a-list). It works. You are going to break it.

```ts tab="TypeScript" tab-group="language"
// three pages: the last is empty
const pages = [["INV-8301", "INV-8302"], ["INV-8306"], []];
let page = 0;
// while this page has invoices
while (pages[page].length > 0) {
  console.log("page", page + 1, "has", pages[page].length);
  // fetch the next page
  page += 1;
}
console.log("stopped at page", page + 1);
```

```python tab="Python" tab-group="language"
# three pages: the last is empty
pages = [["INV-8301", "INV-8302"], ["INV-8306"], []]
page = 0
# while this page has invoices
while len(pages[page]) > 0:
    print("page", page + 1, "has", len(pages[page]))
    # fetch the next page
    page += 1
print("stopped at page", page + 1)
```

**Modify.** Send: "Remove the empty page, the last `[]`, from the list of pages in the file. Don't run it yet." Predict what happens now.

**Run.** Send: "Run the file and show me the whole error. Don't explain it yet."

**Investigate.** Read the report from where this lesson says to start. Write one sentence that names the file, the line and the cause. Then ask the agent what it thinks, and compare.

**Make.** Send: "Change the loop so it also stops at the end of the list, even with no empty page. Run it."

**What you should see.** Two pages print, then an error on the `while` line. Ask of that line: did it make the bad value, or was it handed it? It was handed it. The line did not change, and it asked for a third page that is no longer in the list. The cause is the data you changed, in the first line of the file. After the fix, it stops at page 3 with no error.

| Language | The error |
| --- | --- |
| TypeScript | A `TypeError` that says it cannot read `length` of `undefined`. The list has no third page, so the code got `undefined` and then asked it for its length. |
| Python | An `IndexError` that says the list index is out of range. The list has no third page, so the lookup itself stops. |

**The operating rule:** read the error before you ask for a fix, find the first line in your own code, follow the bad value back, and name the file, the line and the cause in one sentence.

![Figure 13.9. Two error reports with the lines that matter marked. In the Node report, read the message at the top, find where the error was raised in due-date.ts, and trace the bad value back from reconcile.ts line 16. In the Python report, read the KeyError on the last line first, then look upward to the failing line.](img/error-report.png)

*Figure 13.9. Reading an error report. In Python start at the bottom, in Node start at the top, and in both find the first line in a file you own, then follow the bad value back.*

**Next.** An error tells you what went wrong. [13.11](tests-first.md) writes down what right looks like, before any code exists.



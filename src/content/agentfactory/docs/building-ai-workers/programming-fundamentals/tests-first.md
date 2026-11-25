# 13.11 Tests first: the TDG loop (/building-ai-workers/programming-fundamentals/tests-first)

---
type: Document
title: "13.11 Tests first: the TDG loop"
description: "Decide the cases and their answers first, have the agent write them as tests and then the code that passes them, and know what passing does and does not show."
status: stable
order: 313.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.11" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Before a contractor tiles a bathroom, you agree what done looks like: level, straight lines, no cracked tiles. You keep your own copy, the tiler never edits it, and at the end you check the job against it. A list written after the job tends to describe what was built, not what you wanted.

**What you will learn.** How to decide the tests before any code, and what passing does and does not show.

**Why it matters.** Only you can say what correct means. Write the right answers down before the agent starts, and never let it change them.

A **test** is a small program that runs your code with chosen inputs and checks the outputs with assertions ([13.6](functions.md#what-is-an-assertion)). **Test-Driven Generation**, or **TDG**, puts the tests first.

1. You decide the cases that define "correct", and the answer each one must give. This is your list.
2. The agent writes them as tests, and you read each test against your list.
3. The tests run and fail, because the code does not exist yet.
4. The agent writes the code, the tests run again, and you read the result.

### Why write the tests first?

Tests written after you see the result tend to describe that result, right or wrong.

**The test is the specification.** Each test says one thing the code must do, such as "Net 30 from October 7 is November 6" or "unknown terms raise an error". If you cannot say a case and its answer, you do not yet know what correct means, and neither does the agent.

**Failing for the right reason.** New tests should fail because the function is missing, not because of a typo in the test. A test that passes before the code exists tests nothing.

### Who owns the expected results?

You do. If the agent decides both the code and what the tests expect, it is checking its work against its own reading of the job, not yours. The agent may write the test code and suggest edge cases, the cases at the limit of a rule. You decide every expected result, and you read every test.

**The agent never changes a test to make it pass.** If it edits the test instead of the code, stop it. A test changes only when you decide it was wrong. After every generation step, have the agent compare the tests with the commit where you saved them: `git diff <that commit> -- tests/` must show nothing.

### What does green show, and what does it not?

**Passing is evidence, not proof.** Green tests, the ones that pass, show the code does what your tests say, for the inputs you chose. So choose them well: each term in the data, a month end, a year end, a leap day, and an input that must fail. The agent saw your tests, so its code can pass them by answering just those cases. Before you accept the code, read the lines that carry a rule, as [13.12](judgment.md#which-lines-carry-a-rule) shows.

**At work.** Before any code exists, Ana writes five cases, each with its answer, such as Net 30 from 2026-12-20 is 2027-01-19, and Net 10 must give an error, because Brightline has no Net 10 terms. She sends them: "Here are five cases for dueDate, each with its answer. Write each as a test, in both languages. Don't add cases of your own. If you think one is missing, tell me." She reads each test against her list, and has the agent commit them while they fail, so the history shows the tests came first. Then she asks: "Write the code for dueDate so every test passes, in both languages. Don't change the tests. If you think one is wrong, stop and tell me why." She has it compare the tests with her commit, and the output is empty.

Here are two lines of her list as tests. The comment above each test is the line it came from. Predict the first run.

```ts tab="TypeScript" tab-group="language"
import { test } from "node:test";
import assert from "node:assert/strict";
// the code does not exist yet
import { dueDate } from "../src/due-date.ts";

// her list: Net 30 from
// 2026-12-20 is 2027-01-19
test("crosses a year end", () => {
  assert.equal(dueDate("2026-12-20", "Net 30"), "2027-01-19");
});

// her list: Net 10 must
// give an error
test("unknown terms raise an error", () => {
  assert.throws(() => dueDate("2026-10-01", "Net 10"), /Unknown terms: Net 10/);
});
```

```python tab="Python" tab-group="language"
import pytest
# the code does not exist yet
from brightline_ap.due_date import due_date


# her list: Net 30 from
# 2026-12-20 is 2027-01-19
def test_crosses_a_year_end() -> None:
    assert due_date("2026-12-20", "Net 30") == "2027-01-19"


# her list: Net 10 must
# give an error
def test_unknown_terms_raise_an_error() -> None:
    with pytest.raises(ValueError, match="Unknown terms: Net 10"):
        due_date("2026-10-01", "Net 10")
```

Read each test against the line of her list above it. The lines at the top of the file bring in the test tools and the function under test.

| Language | The first test | The second test |
| --- | --- | --- |
| TypeScript | `assert.equal` states that the function's answer and `"2027-01-19"` are the same. `() => { ... }` wraps the test's lines, so `test` can run them. | `assert.throws` passes only when the call stops with an error whose message contains `Unknown terms: Net 10`. The call is wrapped in `() =>` so that `assert.throws` runs it, and the slashes `/.../` hold the text to look for. |
| Python | `assert` states that the function's answer is `"2027-01-19"`. | The call inside `with pytest.raises(...)` must stop with an error whose message contains `Unknown terms: Net 10`. |

| Language | The command that runs the tests |
| --- | --- |
| TypeScript | `npm test`. `npm` runs a task that this project has given a name, and `test` is that name. |
| Python | `npm run test:py`. This project named its Python tests `test:py`, and that task starts pytest, the tool that runs Python tests. |

First, the tests are tried before the code exists.

```text tab="TypeScript" tab-group="language"
$ npm test
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '.../src/due-date.ts'
# fail 1
```

```text tab="Python" tab-group="language"
$ npm run test:py
E   ModuleNotFoundError: No module named 'brightline_ap.due_date'
```

They fail for the right reason: the code under test does not exist yet. So the agent commits the failing tests, in both test folders. `tests/` holds the TypeScript tests, and `py/tests/` holds the Python tests.

```text
$ git add tests/ py/tests/
$ git commit -m "Failing tests for dueDate"
```

Then the agent writes the code, and the tests are tried again.

```text tab="TypeScript" tab-group="language"
...the agent writes src/due-date.ts...
$ npm test
# pass 12
# fail 0
```

```text tab="Python" tab-group="language"
...the agent writes py/brightline_ap/due_date.py...
$ npm run test:py
7 passed in 0.02s
```

Last, the agent compares the tests with that commit. `6cdbb3d` is the commit's id, and yours will have its own. The command prints nothing, so no test changed.

```text
$ git diff 6cdbb3d -- tests/ py/tests/
$
```

The count of passing tests is larger than her five, because the project already had tests of its own.

### Try it

The tests in `13-11` are for a due-date function, which does not exist yet.

**Predict.** How will the first run fail?

**Run.** Send: "Run the tests in 13-11. Don't fix anything." Check the reason: the code is missing, not a typo in a test.

**Modify.** In your notes, list three more cases, each with its answer: one across a month end, one across a leap day, and terms written another way, such as `net 30` in small letters. Decide whether that last one should be an error. Then send: "Add my three cases to the tests in 13-11, and no others. Don't write the code yet." Paste your list. Read each new test against it.

**Make.** Send: "Now write the code in 13-11 so every test passes, without changing any test. Run them."

**What you should see.** A first run that fails because the file is missing, new tests that match your list line by line, and then every test passing.

**The operating rule:** decide the cases and their answers first, read each test, and watch them fail for the right reason. Then let the agent write the code, and check that the tests still match your commit before you accept it.

![Figure 13.10. The TDG loop mapped to 10-80-10. You decide the test cases, and the agent writes them as failing tests (the first 10). The agent generates the code (the 80). You read the check results and the diff (the last 10). A failed check goes back to the agent to revise. Passing checks go to your review and then the commit.](img/tdg-loop.png)

*Figure 13.10. The TDG loop. Your test cases are the first 10 percent and decide the last 10. The agent writes them as tests, and never edits them once you approve.*

**Next.** Tests answer only the cases you name. Renee's weekend was a case nobody named. [13.12](judgment.md) shows how to decide when your check is enough.



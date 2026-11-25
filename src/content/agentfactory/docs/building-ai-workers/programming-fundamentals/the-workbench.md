# 13.2 The workbench (/building-ai-workers/programming-fundamentals/the-workbench)

---
type: Document
title: "13.2 The workbench"
description: "What the tests, the type checker and the linter each check, why they run in strict mode, and what the commands the agent asks to run do."
status: stable
order: 313.02
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.2" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A carpenter's bench holds more than a saw. A square checks the angles, and a level checks that a shelf is not tilted. They catch mistakes before the piece leaves the shop.

**What you will learn.** What each checking tool does, why they run in their strictest setting, and what the agent's commands do.

**Why it matters.** The tools catch small slips in seconds, before you read any code. Only your reading catches a wrong rule.

A coding workbench is the same: tools around the code check it before you read it. A **command** runs a file or a tool in a terminal, the window where commands are typed. You never type one. The agent asks before it runs each one, and you decide.

### What reads the code before I do?

Four tools.

- **The runner** runs a file, like pressing Print.
- **Tests** are small programs that run your code on inputs whose answers you already know, and compare. They are like an answer key.
- **The type checker** reads the code before it runs. A value's **type** is the kind of value it is, such as text or a number, and the checker checks that each value is used as its kind. It is like a proofreader: it does not check whether the deal in the contract is a good one.
- **The linter** reads the code for style problems and common small slips, such as an unused import, a line that brings in other code. It is like a spell checker: it flags slips, not wrong ideas. Not every project has one.

Tests, the type checker and the linter are reading machines. The type checker and the linter read every line, and the tests run only the lines they use. They tell you where to look first. A valid line with the wrong rule can pass all three.

| Language | The tools you will meet |
| --- | --- |
| TypeScript | Node is the runner. The type checker is `tsc`, from a package called `typescript`. The practice files have no linter. |
| Python | Python is the runner, and a tool called uv starts it. The type checker is Pyright. The practice files have no linter. Lab 13 has one for Python, called ruff. |

### What will the agent ask me to approve?

Commands. The first word of a command names the tool.

| Language | First words, and what each does | What you will see |
| --- | --- | --- |
| TypeScript | `node` runs one file. `npm` comes with Node.js, and runs a task this project has given a name, such as its tests. `npx` runs a tool, and fetches it first if the project does not have it. | `node 13-2/try.ts`, `npm test`, `npm run typecheck` |
| Python | `uv` runs a file or a tool with the project's own packages. `uvx` runs a tool, and fetches it first if the project does not have it. | `uv run python 13-2/try.py`, `uv run pyright`, `uvx pyright 13-2/try.py` |

Use the check from [12.3](../agentic-coding/permissions-and-plan.md#what-do-i-check-before-i-say-yes) before you say yes. If you do not understand a command, ask the agent "What does this command do?" In this book's examples, a line that starts with `$` is a command the agent ran.

### What does the type checker see that a run does not?

The label on a name. A **type label** after a name says which kind of value that name may hold. A run does not check the labels. A type checker does, before anything runs.

**At work.** Before Ana opens the agent's changed vendor script, she asks the agent to run the tests and the checkers. The type check fails on one line: an amount from the file was labeled as a number, but it was still text. The tests had passed, because no test used that line.

Here is that mistake, small. The first line labels an amount from a file as text, which it is. The second puts it under a name labeled as a number. The third adds to it.

**Predict.** Will this run? Will the type checker accept it?

```ts tab="TypeScript" tab-group="language"
// after the name, : string
// labels it as text
const fromFile: string = "482500";
// this label says number.
// cents gets fromFile's value
const cents: number = fromFile;
console.log(cents + 61875);
```

```python tab="Python" tab-group="language"
# after the name, : str
# labels it as text
from_file: str = "482500"
# this label says int, a number.
# cents gets from_file's value
cents: int = from_file
print(cents + 61875)
```

```text tab="TypeScript" tab-group="language"
$ node 13-2/try.ts
48250061875
$ npx -y -p typescript tsc --noEmit 13-2/try.ts
13-2/try.ts(2,7): error TS2322: Type 'string' is not assignable to type 'number'.
```

```text tab="Python" tab-group="language"
$ uv run python 13-2/try.py
Traceback (most recent call last):
  ...
TypeError: can only concatenate str (not "int") to str
$ uvx pyright 13-2/try.py
.../13-2/try.py:2:14 - error: Type "Literal['482500']" is not assignable to declared type "int"
```

Why `+` treats text and numbers differently is [13.3](values-types-variables.md#why-is-an-amount-from-a-file-still-text)'s subject. Here, look at which tool caught it, and where.

| Language | What happened |
| --- | --- |
| TypeScript | The run gave no error. Node removes the type labels and runs the rest, so it joined `"482500"` and `61875` as text, and printed a wrong amount. The checker stopped at the mistake. Its message names the file, then line 2 and position 7 on that line, and says that text cannot go into a name labeled as a number. In its command, `tsc` is the checker, and `--noEmit` tells it to check and write nothing. |
| Python | Python also ignores type labels when it runs, so line 2 passed. Line 3 stopped the run, because Python will not join text and a number. The lines from `Traceback` down are its error report, and the last one says what failed. [13.10](reading-an-error.md) shows how to read one. Pyright stopped one line earlier, at the mistake. Its message names the file, then line 2 and position 14, and says that this text cannot go into a name labeled `int`. `Literal['482500']` is how Pyright writes the text itself. |

So a type checker finds a wrong label where it was written, before anything runs. It cannot tell you that 482500 was the right amount.

In its default setting, a type checker lets a name with no label pass, and then it has nothing to check. So the type checkers in this book's projects run in **strict mode**, which is their strictest setting. It reports a missing label as an error.

### What will I see when the agent uses git?

You ask in plain words, as in [Chapter 12](../agentic-coding/the-workspace.md), and the agent runs the command. This chapter's lab uses these.

| What the agent is doing | The command you will see |
| --- | --- |
| Showing which files changed and which are new | `git status` |
| Showing the lines that changed, with `-` before the old line and `+` before the new one | `git diff` |
| Listing the commits ([12.2](../agentic-coding/the-workspace.md)), newest first | `git log --oneline` |
| Making a commit with a message | `git add`, then `git commit -m "..."` |
| Starting a branch ([12.6](../agentic-coding/many-sessions.md)) | `git switch -c name` |
| Giving one commit a lasting name, a **tag** | `git tag ch13` |

### Try it

The file in `13-2` is the program above.

**Run.** Send: "Run the file in 13-2, then the type checker, and show me what each prints. Before the checker, tell me in plain words what each part of its command does. Change nothing."

**Investigate.** Read the checker's message. It names the file, the line and the problem. Ask about any part you can't read.

**Modify.** Send: "Change the label on cents so it says text, not a number. Don't run anything yet." Will the type checker accept it now? Will the answer be right? Then ask the agent to run the file and the checker.

**Make.** Send: "Convert the amount to a number before it is added. Run it, and check it."

**What you should see.** After Make, both languages print `544375`. After Modify, it depends on your language.

| Language | After Modify |
| --- | --- |
| TypeScript | The checker is satisfied, and the printed number is still wrong. |
| Python | The run still stops, and Pyright now reports the `+` on line 3. |

**The operating rule:** have the agent run the tests, the type checker in strict mode and any linter the project has on every change, and read what they print before you read the code.

![Figure 13.2. One change through the workbench: the agent's change passes the type check, the linter and the tests, then your review with git status and git diff, then git commit. A failed check or a failed review sends the change back to the agent, and the checks run again.](img/workbench-checks.png)

*Figure 13.2. One change through the workbench. The reading machines go first because they are fast and never get tired. Your read of the diff comes before the commit, never after.*

**Next.** [13.3](values-types-variables.md) shows the kinds of value, and how to make a variable.



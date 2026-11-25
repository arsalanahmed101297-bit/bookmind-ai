# 14.1 Modules and packages (/building-ai-workers/structuring-programs/modules)

---
type: Document
title: "14.1 Modules and packages"
description: "How to find your way around a repository an agent split into modules, by what each file imports, and what to check before it adds a package."
status: stable
order: 314.01
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.1" ]
last_verified: 2026-10-30
sources:
  - id: node-typescript
    title: "Modules: TypeScript (Node.js, accessed 2026-10-30)"
    resource: https://nodejs.org/api/typescript.html
  - id: uv-cli
    title: "uv CLI reference (Astral, accessed 2026-10-30)"
    resource: https://docs.astral.sh/uv/reference/cli/
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A recipe book does not write out its tomato sauce in every recipe. The sauce is on page 12, and the pizza recipe says "use the tomato sauce from page 12". If page 12 has too much salt, so does every dish that uses it. And a sauce from someone else's book goes into your dishes too, though you never made it.

**What you will learn.** How one file uses code from another, and what that tells you: which files to read first, and which code is not yours.

**Why it matters.** The files that every other file uses are where one change reaches everything. And code someone else wrote can do anything your account can do.

### How does one file use code from another?

In [13.11](../programming-fundamentals/tests-first.md), a test took `dueDate` from the due-date file. Here are both files, from the practice folder: one offers a name, and the other takes it.

The money file is the page with the sauce. It has one function, `usd`, which turns cents into dollars. You do not need to follow the lines inside it.

```ts tab="TypeScript" tab-group="language"
// money.ts
// export: other files may use usd
export function usd(cents: number): string {
  const dollars = Math.trunc(cents / 100);
  const rest = String(cents % 100).padStart(2, "0");
  return `$${dollars.toLocaleString("en-US")}.${rest}`;
}
```

```python tab="Python" tab-group="language"
# money.py
# a name at the top of the file:
# other files may use usd
def usd(cents: int) -> str:
    return f"${cents // 100:,}.{cents % 100:02d}"
```

The try file is the pizza recipe. Its first lines say which names it uses, and from which file. Predict what it prints.

```ts tab="TypeScript" tab-group="language"
// try.ts
// from the money file, use usd
import { usd } from "./money.ts";
// from the due-date file,
// use dueDate
import { dueDate } from "./due-date.ts";

console.log(usd(1922953), dueDate("2026-10-07", "Net 30"));
```

```python tab="Python" tab-group="language"
# try.py
# from the due_date file,
# use due_date
from due_date import due_date
# from the money file, use usd
from money import usd

print(usd(1922953), due_date("2026-10-07", "Net 30"))
```

Both print:

```text
$19,229.53 2026-11-06
```

Each file is a **module**: one file, one job. A name a module offers to other files is an **export**, like the sauce on page 12. A line that takes a name from another file is an **import**, like "use the tomato sauce from page 12". The two languages differ on what a file offers.

| Language | Which names another file may import |
| --- | --- |
| TypeScript | Only a name marked `export`. Every other name stays inside its file. |
| Python | Any name at the top of a file, outside every function and class. |

### Is this code mine, or someone else's?

Code someone else wrote comes as a **package**: modules that someone published, which an install command copies into your project. The import line tells you which kind you are looking at.

| Language | A file in this project | A package |
| --- | --- | --- |
| TypeScript | A path that starts with `./`, which means "in this folder", or `../`, the folder above: `"./money.ts"` | A name with no path, such as `"zod"`. A name that starts with `node:` comes with Node itself. |
| Python | The file's name without `.py`, such as `money` | A name that no file in the project has, such as `pydantic`. Some, such as `datetime`, come with Python itself. |

### Which files do I read first?

An agent can split one long script into many files. To find your way, draw each file as a box, with an arrow to each file it imports. That picture is an **import graph**. Mark two kinds of file on it, and read them in this order.

1. **Edges** first: the files where data comes in from outside, such as a file that reads a CSV export. To find them, ask the agent: "Which files read data from outside this project?"
2. **Foundations** next: the files that many others import, like the sauce on page 12. A change there reaches everywhere, so test them hardest.

A file that nothing imports is either an **entry point**, the file a command starts, or **dead code**, which nothing uses.

**At work.** Figure 14.1 is Ana's map of `brightline-ap`, as it is at the end of this chapter. She does not start with the longest file. She marks the edges first: `load-invoices` reads the CSV export and checks each row, and `ap-client` asks a service on the web for vendors and open invoices. Seven files import `csv`, and six import `due-date`. Those are the foundations, so she reads them next.

![Figure 14.1. A reading map of brightline-ap in four layers: shared helpers and libraries (due-date, csv, money and zod), records and validation (schemas, vendor and invoice), workflow helpers (load-invoices and invoice-book), and commands (list-vendors, ap-client, export-json, reconcile, due-by-friday and scripts/ap-api). Mark the edges first: load-invoices and ap-client are outlined in red. Then read the shared helpers and the code that uses them. due-date is imported by six files and csv by seven. Two import paths are traced: export-json to load-invoices to schemas, and due-by-friday to invoice-book to invoice.](img/import-graph.png)

*Figure 14.1. Ana's reading map. Arrows point from a file to what it imports. Red outlines mark the two edges. After the edges, read the shared files at the bottom.*

### Should I let the agent add a package?

Only after three questions. A package is someone else's code, and it can do anything your account can do on this computer.

1. Is the name spelled exactly right?
2. Is it the real, well-known package, and not a made-up or look-alike name?
3. Is it needed at all?

To find out, ask the agent to show you each package's page on npmjs.com or pypi.org, and to say what this project uses it for. A real, well-known package has years of history and many downloads. Attackers publish packages one letter away from popular names, and agents sometimes suggest a package for a job three lines of code would do.

Each package the project needs is a **dependency**, one entry in a file at the top of the project. Here are the practice folder's. The name is the package, and the rest says which versions the project accepts. These are the names you check, letter by letter.

```json tab="TypeScript" tab-group="language"
"dependencies": {
  "zod": "^4.1.12"
}
```

```toml tab="Python" tab-group="language"
dependencies = ["httpx>=0.28", "pydantic>=2.12"]
```

An install also writes a **lock file**: the exact version of every dependency, and of the packages they use. It goes into every commit with the code, so a clean copy of the project next month installs exactly what you tested today.

| Language | The dependencies | The lock file | Installs from the lock file |
| --- | --- | --- | --- |
| TypeScript | `package.json` | `package-lock.json` | `npm ci` |
| Python | `pyproject.toml` | `uv.lock` | `uv sync` |

### How do I set up to try this?

Once, for the whole chapter.

1. Download [brightline-practice-ch14.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-practice-ch14.zip), and unzip it.
2. Open the `brightline-practice-ch14` folder in your agent, in the mode that asks before it acts, as in [Chapter 13](../programming-fundamentals/you-read-the-agent-writes.md#how-do-i-set-up-to-try-this).
3. Its `AGENTS.md` says TypeScript. If you chose Python, send: "Set my language in AGENTS.md to Python."
4. Open `package.json` and `pyproject.toml` in a text editor, and write down the packages they name. Answer the three questions for each. Then send: "Install this folder's packages from its lock files, with `npm ci` and `uv sync`. Before each command, tell me which packages it will install." Compare the names with your list before you approve.

### Try it

**Run.** Send: "Run the file in 14-1 and show me what it prints. Don't explain it yet."

**Modify.** Send: "Also import TERMS_DAYS from the due-date module in the file, and print it on a new last line. Don't run it yet." Open the due-date file in `14-1` in a text editor, find `TERMS_DAYS`, and use the export rule above to write down what will happen. Then ask the agent to run it.

**Investigate.** Ask about anything you got wrong.

**Make.** Send: "Make a module in 14-1 called fees, with one function that adds a $25.00 fee to an amount in cents, and a new file called mine that imports it and prints one answer. Don't run it yet." Find the import line, say what it will print, and then ask the agent to run it.

**What you should see.** TypeScript stops with a `SyntaxError`, Node's error for importing a name that is not exported. It prints nothing else, because Node loads every import before it runs any line. Python prints the usual line, then the terms and their days.

**The operating rule:** read the import graph before the functions. Mark where data comes in, read the foundations next, and approve a package only after you check its exact name and need.

**Next.** [14.2](types-you-write-down.md) writes down which values those files may pass to each other.



# 13.1 You read, the agent writes (/building-ai-workers/programming-fundamentals/you-read-the-agent-writes)

---
type: Document
title: "13.1 You read, the agent writes"
description: "Why you read the code an agent writes, why you predict before you run, and five steps for learning to read code."
status: stable
order: 313.01
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.1" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You do not need to write a contract to sign one safely. You need to read it, and ask what happens when the other side is late.

**What you will learn.** How to predict what code will print, and the five steps you will use in every lesson.

**Why it matters.** Code repeats its choices every time it runs, as Renee's script did with a Saturday due date. You are the one who checks them.

### What is my job when an agent writes the code?

You say what the program must do, and you show that it does.

| The old job | The new job |
| --- | --- |
| Write the program line by line | Say exactly what the program must do |
| Remember the exact syntax, the rules for writing code | Recognize the syntax well enough to question what you read |
| Get it to run | Show it is correct, not just that it runs |
| Leave it however it comes out | Keep it readable, because you and the agent both read it next |

**Recognition, not recall.** You need to see `["V001", "V002"]` and know it is a list of two values. You do not need to remember how to write one.

**10-80-10 for code.** As in [Chapter 3](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/one-rhythm.md): you decide what to build and what "correct" means, the agent writes the code, and you check it against what you decided.

### How do I learn to read code with an agent beside me?

**PRIMM-AI+** is this book's method, in five steps. The agent is your partner at every step, and nothing it says is accepted without a check.

| Step | What you do | The agent's role |
| --- | --- | --- |
| Predict | Say what the code will do before anything runs | Stays quiet. The guess is yours |
| Run | Run it and see the real output | Runs it for you, with your permission |
| Investigate | Compare your guess with the output, and ask why | Explains a line when you ask: "What does line 3 do?" |
| Modify | Change one thing, predict again, run again | Makes the edit you describe |
| Make | Specify your own version, let the agent build it, then verify | Writes code against your specification |

### Why predict before I run?

A wrong guess shows you which part of your picture is wrong. It works like a bank reconciliation: a $25 difference sends you to the fee you forgot. So write your guess down first. A guess made after the output is not a guess.

**A first program.** Here is one vendor. Pick your language on the tabs. These words are enough to read it:

- A **value** is one piece of data.
- A **string** is a value made of text, in quotes, such as `"Net 30"`.
- A list holds values in order, between square brackets. Here `vendor` is a list of three strings.
- A **variable** is a name for a value. Here the name is `vendor`.
- `vendor[0]` takes one item from the list. The number is its position.

| Language | Two more marks in your tab |
| --- | --- |
| TypeScript | `const` makes a variable, `console.log(...)` prints a line, and a `;` ends each line. |
| Python | A name and `=` make a variable, and `print(...)` prints a line. |

```ts tab="TypeScript" tab-group="language"
const vendor = ["V001", "Midwest Packaging Co.", "Net 30"];
console.log(vendor[0]);
console.log(vendor[2]);
```

```python tab="Python" tab-group="language"
vendor = ["V001", "Midwest Packaging Co.", "Net 30"]
print(vendor[0])
print(vendor[2])
```

**Now predict.** Write down the two lines it prints before you read on.

Both print:

```text
V001
Net 30
```

Expected the name on the second line? You counted from 1. Code counts positions from 0, so `[0]` is the first item and `[2]` is the third.

**At work.** Ana Morales, the accounts payable (AP) analyst at Brightline, made the same guess, because `[2]` looked like "the second item". She asked, "Why is `vendor[2]` the terms?" Now she counts from 0.

### How do I set up to try this?

Once, for the whole chapter.

1. Download [brightline-practice-ch13.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-practice-ch13.zip), and unzip it. It has one folder for each lesson, such as `13-1`, and each folder holds a file named `try` in each language.
2. Open the `brightline-practice-ch13` folder in your agent. Set the agent to ask before it acts: *Manual* in Claude Code, *Ask for approval* in Codex. In OpenCode, first add the rules that [13.13](both-ai-vendors.md#how-does-each-agent-ask-before-it-acts) describes.
3. You need three programs: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download), which runs TypeScript files, and [uv](https://docs.astral.sh/uv/getting-started/installation/), which runs Python. The lessons use only the one for your language, and the lab uses both. Ask first:

   > Do I have Git, Node.js 24 or later, and uv? Don't install anything. For anything missing, tell me the official way to install it here, and wait for my yes.

4. The folder's `AGENTS.md`, the rules file from [Chapter 12](../agentic-coding/rules-the-agent-reads.md), says TypeScript. For Python, send: "Set my language in AGENTS.md to Python."

### Try it

**Run.** Send: "Run the file in 13-1 and show me what it prints. Don't explain it yet." Compare it with your guess.

**Investigate.** If you were wrong, ask: "I thought it would print [my guess], but it printed [what I saw]. Which line does that, and why?"

**Modify.** Send: "Change `vendor[0]` to `vendor[1]` in the file. Don't run it yet." Write down what each line will print. Then ask the agent to run it.

**Make.** Send: "Make a new file in 13-1 called mine that prints the terms, then the id. Don't run it yet." Say what it will print. Then ask the agent to run it.

**What you should see.** The first line is now the name, `Midwest Packaging Co.` `mine` prints `Net 30`, then `V001`.

**The operating rule:** predict before you run, every time.

![Figure 13.1. The PRIMM-AI+ loop as five steps: Predict, Run, Investigate, Modify and Make. At each step you predict, compare, explain or specify, and the agent waits, runs, explains, edits or builds. The loop repeats with the next piece of code, and claims are checked by running code and tests.](img/primm-ai-loop.png)

*Figure 13.1. The PRIMM-AI+ loop. Predict, Run and Investigate build reading. Modify and Make are where you start directing the agent. The agent explains on request. A run or a test decides.*

**Next.** [13.2](the-workbench.md) shows the tools that check a file before you read it.



# 13.4 Decisions and repetition (/building-ai-workers/programming-fundamentals/decisions-and-repetition)

---
type: Document
title: "13.4 Decisions and repetition"
description: "How to find each decision and loop in agent-written code, and say it as a sentence."
status: stable
order: 313.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.4" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-16T05:56:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A mail clerk sorts the morning mail. Each envelope stamped BILL goes in the AP tray. Every other envelope goes in the general tray, even a bill that nobody stamped. The clerk repeats one small decision for every envelope. That is most of what a program does too.

**What you will learn.** How to find each decision and each repeated step in code, and say it as a sentence.

**Why it matters.** Each decision is a rule, and the code repeats it for every row. If the rule is wrong, every row gets the wrong answer.

A program has two moves, and the clerk makes both: decide, and repeat.

### How does code choose between two things?

With an **`if`**. The clerk's rule is one sentence: if the stamp says BILL, the envelope goes in the AP tray, and otherwise it goes in the general tray. The code is that sentence. Predict what each prints.

```ts tab="TypeScript" tab-group="language"
const stamp = "BILL";
// if the stamp says BILL
if (stamp === "BILL") {
  // it goes in the AP tray
  console.log("AP tray");
// otherwise
} else {
  // it goes in the general tray
  console.log("general tray");
}
```

```python tab="Python" tab-group="language"
stamp = "BILL"
# if the stamp says BILL
if stamp == "BILL":
    # it goes in the AP tray
    print("AP tray")
# otherwise
else:
    # it goes in the general tray
    print("general tray")
```

Both print `AP tray`. With any other stamp, both print `general tray`.

Each part of the clerk's sentence has a name in code.

- **The question is the condition.** "Does the stamp say BILL?" has a yes-or-no answer.
- **"Otherwise" is `else`.** Its lines run when the answer is no.
- **The lines that belong together are a block.**

| Language | How it asks "are these two equal?" | How it marks a block |
| --- | --- | --- |
| TypeScript | `===` | With braces, `{ }`. |
| Python | `==` | By indentation, the spaces at the start of each line. Moving a line left or right changes which block it belongs to. |

### How does code do the same thing to every item?

With a **loop**. The clerk does not decide once and go home. The rule is "for each envelope in the tray, read the stamp". The clerk picks up one envelope, deals with it, and picks up the next, until the tray is empty. A `for` loop does this with a list.

Ana's tray is the list `amounts`: the amounts of three invoices, in whole cents, as in [13.3](values-types-variables.md#why-whole-cents). It is a list like the ones in [13.1](you-read-the-agent-writes.md#why-predict-before-i-run), with square brackets. The name `cents` is the envelope in the clerk's hand. On each pass, it holds the next amount. Predict how many lines print, and what the first one is.

```ts tab="TypeScript" tab-group="language"
const amounts = [735000, 482500, 61875];

// for each amount in the tray
for (const cents of amounts) {
  // print it
  console.log(cents);
}
```

```python tab="Python" tab-group="language"
amounts = [735000, 482500, 61875]

# for each amount in the tray
for cents in amounts:
    # print it
    print(cents)
```

Both print:

```text
735000
482500
61875
```

The tray held three amounts, so the block ran three times. No line tells this loop to stop. It stops when the list runs out.

### How does code keep only some of the items?

With an `if` inside a loop, which is called a **filter**. It is the clerk's whole job in one sentence: for each envelope in the tray, if it is stamped BILL, put it in the AP tray. Ana wants only the large invoices, the ones of 5,000 dollars or more. In cents, that is 500000. Predict which amounts print.

```ts tab="TypeScript" tab-group="language"
// for each amount in the tray
for (const cents of amounts) {
  // if it is 500000 or more
  if (cents >= 500000) {
    // print it
    console.log(cents);
  }
}
```

```python tab="Python" tab-group="language"
# for each amount in the tray
for cents in amounts:
    # if it is 500000 or more
    if cents >= 500000:
        # print it
        print(cents)
```

Both print:

```text
735000
```

482500 is less than 500000. Its answer was no, so nothing printed for it, and the same for 61875.

`>=` means "more than or equal to". Both languages use the same four marks to compare two values:

| Mark | Means |
| --- | --- |
| `>` | more than |
| `>=` | more than or equal to |
| `<` | less than |
| `<=` | less than or equal to |

**The agent's shorter form.** Agents often write a filter in one line. Both lines below mean "keep each amount of 500000 or more". When you meet one, ask the agent which items it keeps, and check its answer against yours.

| Language | The one-line filter |
| --- | --- |
| TypeScript | `amounts.filter((cents) => cents >= 500000)` |
| Python | `[cents for cents in amounts if cents >= 500000]`, which is called a **list comprehension** |

### Try it

The file in `13-4` is the filter from this lesson: the three amounts, and a loop that prints the large ones. Run it and investigate, as in [13.1](you-read-the-agent-writes.md#try-it). Then write its decision as a sentence in your own words, such as "keep an amount only if it is 500000 or more".

**Modify.** Send: "Change 500000 to 100000 in the file. Don't run it yet." Use your sentence to predict which amounts it lists now. Then ask the agent to run it.

**Make.** Send: "Make a new file in 13-4 called mine, with the same amounts, that lists only the ones less than 100000. Don't run it yet." Read its `if`, say what it will list, and then ask the agent to run it.

**What you should see.** After your change, `735000` and `482500` are listed. `mine` lists `61875`.

**The operating rule:** find every decision and every loop in the code, and say each one as a sentence. Then check each sentence against the business rule.

**Next.** A rule often has two parts, and some values are empty. [13.5](conditions-and-empty-values.md) shows what code does with both.



# 13.8 Text from a file (/building-ai-workers/programming-fundamentals/text-dates-files)

---
type: Document
title: "13.8 Text from a file"
description: "How a file's text becomes values in TypeScript and Python, and how an invisible character makes two values that look the same differ."
status: stable
order: 313.07
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-14T10:34:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.8" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-14T10:34:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Someone types a name on a form and adds a space at the end by mistake. Nobody can see the space, but the name no longer matches the list.

**What you will learn.** How a file's text becomes values, and how an invisible character makes two values that look the same differ.

**Why it matters.** A value that does not match is skipped or refused, and nothing on the screen shows why.

### How does a file become values?

By cutting. A program reads a file as one long string, like a roll of receipt paper. The code cuts the roll into lines, then cuts each line into values. Here are two rows of Brightline's export as a program first sees them. `\n` is the mark that ends a line, and `split` does the cutting. Predict what this prints.

```ts tab="TypeScript" tab-group="language"
// two rows, as one string
const text = "INV-8301,V001,open\nINV-8302,V002,open";
// cut the roll into lines
const lines = text.split("\n");
// cut the first line at commas
const parts = lines[0].split(",");
console.log(lines.length, parts[2]);
```

```python tab="Python" tab-group="language"
# two rows, as one string
text = "INV-8301,V001,open\nINV-8302,V002,open"
# cut the roll into lines
lines = text.split("\n")
# cut the first line at commas
parts = lines[0].split(",")
print(len(lines), parts[2])
```

Both print:

```text
2 open
```

`split(",")` cuts text at each comma and gives a list of the pieces, so `parts[2]` is the third value on the first line. Every piece is still text, as [13.3](values-types-variables.md#why-is-an-amount-from-a-file-still-text) showed.

Here the two rows were typed into the code. In a real script, one line reads the whole file into a string like `text`. You only need to recognize that line: it names the file's **path**, its address in the folders.

| Language | A line that reads a file |
| --- | --- |
| TypeScript | `const text = readFileSync("data/invoices.csv", "utf8");` |
| Python | `text = Path("data/invoices.csv").read_text(encoding="utf-8")` |

### What goes wrong when I read text from a file?

Mostly characters you cannot see. Mac and Linux end each line with `\n`. Windows adds one more invisible character before it, written `\r`. A script that splits on `\n` alone leaves that `\r` stuck to the last value on each line, so `"open\r"` is not `"open"`. It looks the same on screen, but a comparison does not match it. Each language has one word that removes blank space, `\r` included, from both ends of a text.

| Language | The word that cleans both ends |
| --- | --- |
| TypeScript | `trim()` |
| Python | `strip()` |

Here is a Windows line, with `\r` at its end. The code cuts the line twice: once as it is, and once after cleaning its ends. Predict both values.

```ts tab="TypeScript" tab-group="language"
const line = "INV-8301,V001,open\r";
// cut at each comma
const parts = line.split(",");
// trim() cleans both ends,
// then split cuts
const cleaned = line.trim().split(",");
console.log(parts[2] === "open", cleaned[2] === "open");
```

```python tab="Python" tab-group="language"
line = "INV-8301,V001,open\r"
# cut at each comma
parts = line.split(",")
# strip() cleans both ends,
# then split cuts
cleaned = line.strip().split(",")
print(parts[2] == "open", cleaned[2] == "open")
```

```text tab="TypeScript" tab-group="language"
false true
```

```text tab="Python" tab-group="language"
False True
```

### Try it

The file in `13-8` cuts a Windows line at its commas, and checks its last value. Run it and investigate, as in [13.1](you-read-the-agent-writes.md#try-it).

**Modify.** Send: "Clean the Windows line before it is split. Don't run it yet." Say what its last line, the check for `open`, will print now. Then ask the agent to run it.

**Make.** Send: "Make a new file in 13-8 called mine that cuts the line V005,Hocking Valley Pallets,Net 30 at its commas and prints the vendor's name. Don't run it yet." Say which position the name is at, and then ask the agent to run it.

**What you should see.** The check said false before, and now it says true, because the invisible `\r` is gone. `mine` prints `Hocking Valley Pallets`, from position 1.

**The operating rule:** when two values look the same and do not match, suspect a character you cannot see. Clean each line as the code reads it, and test a Windows line on purpose.

**Next.** A due date is text from a file too. [13.9](dates.md) shows how code compares dates and adds days to them.



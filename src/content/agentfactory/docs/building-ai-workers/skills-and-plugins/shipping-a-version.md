# 16.6 Shipping a version (/building-ai-workers/skills-and-plugins/shipping-a-version)

---
type: Document
title: "16.6 Shipping a version"
description: "What a version number promises, how a change reaches the people who installed a plugin, and how the report says which version ran."
status: stable
order: 316.06
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T03:57:30Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.6" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-24T03:57:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A printed cookbook has an edition on its copyright page. The second printing fixes typos. A new edition adds chapters. A note at the front says what changed, so a cook knows whether the copy on the shelf is still good.

**What you will learn.** What a version number promises. How a change reaches the people who installed your plugin. How anyone can tell which version ran.

**Why it matters.** Once other people install your plugin, your changes reach them at different times, and some copies keep running the old one. Nothing warns them.

### What does a version number promise?

What kind of change this is. The usual scheme is **Semantic Versioning**: three numbers, `major.minor.patch`.

| Change | Example | Promise |
| --- | --- | --- |
| Patch | 1.2.0 to 1.2.1 | A fix. Nothing you rely on changes |
| Minor | 1.2.0 to 1.3.0 | Something added. What worked still works |
| Major | 1.3.0 to 2.0.0 | Something you rely on changed or went away |

A changed business rule is never a patch, because the same invoice can now land in a different pile. Each release also gets an entry in the **changelog**, a file named `CHANGELOG.md`, newest first: the date, and what was added, changed or fixed. It is written for the people who install the plugin.

### How does a change reach people?

As a new version, and never any other way. People install a plugin from a **catalog**, a list where a tool looks for plugins. Some tools fetch a new version when you ask. Some pick it up from the catalog by themselves. Some read a folder, so updating the folder is the update. [16.10](both-ai-vendors.md#practice-shipping-a-version) says which your tool does.

A tool that compares version numbers ignores a change released under the old number, so that change may never arrive. And a broken release is fixed with a new version, never by changing an old one in place.

A skill can also reach people from a connector, as [Chapter 20](../mcp-apps/approving-a-skill-from-a-server.md) shows. There, every changed file makes each customer's AI app ask for approval again. So the same rule matters even more: collect changes into versions.

### What does a copy that has not updated do?

It keeps running the old rule, with no error. It cannot know that the rule changed. If the limit went down, an old copy calls an invoice ready when it now needs approval.

### How would anyone know which version ran?

From the report, if the tool prints it there. Brightline's tested tool prints the plugin's version and the policy it was built from, and the report copies them onto its first line:

```text
AP triage, run date 2027-03-08, batch invoices-intake.csv, brightline-ap 0.1.0, AP policy v3
```

Ana reads that line each Monday against the current policy. The report is filed with the batch, because a line in a chat is not a record. This answers the question Grace's insurance company asked in the [overview](overview.md). It stops no payment, which is why the third fix is where the money moves (Chapter 28).

### What must move when a rule changes?

Every copy of the rule, in one reviewed change. Each skill is still one file. A number like the limit is different. The skill also has to run in a chat that has no repository, so it carries a small script of its own, with the limit in it. That leaves the limit in several files, on purpose: Ana's rules sheet and its copy in the skill's `references/`, the repository's tested code, the skill's own script, and the tests. What makes this safe is one pull request that moves every copy. Its checks stay red until the copies agree, and a person's approval is on record.

### What should be checked before a release?

Two things. First, that the plugin is well formed: every skill and manifest follows its standard, every manifest has the same version, and the changelog has an entry for it. A program can check all of that, so it runs as a required check on every pull request ([Chapter 15](../code-review/checks-that-block.md)). Second, that the plugin still works: the saved requests from [16.3](writing-a-skill-with-the-expert.md), run again, more than once, and against the last version too, so a case that got worse is seen before the release.

**At work.** The builder writes the changelog entry for version 0.1.0, adds the plugin check to the required checks, and asks the agent to mark the release with a tag in git. A teammate installs the plugin from the repository's catalog and runs the saved requests. They pass.

Then a bigger change looks possible. Dave has been thinking of raising the limit back to $10,000. So before he decides, Ana and the builder rehearse that day, on a branch they will never merge.

1. Ana changes rule 4, the limit, in her sheet. A check goes red at once, because the sheet and the tested code no longer agree.
2. The agent moves each copy of the limit: the skill's copy of the sheet, the tests, the tested code and the skill's own script. Changing a test needs a stated reason on the pull request, which names the new policy, AP policy v4. Each change turns a red check green.
3. The last checks block the release until the version moves and the changelog has an entry. They choose 1.0.0, a major change, because the same invoice now lands in a different pile.

They keep a second folder at 0.1.0, to stand for a clerk who has not updated, and run the same 13 invoices in both. The old copy prints "brightline-ap 0.1.0, AP policy v3", with INV-6004 for $5,000.01 on Dave's pile. The new one prints "brightline-ap 1.0.0, AP policy v4", with INV-6004 ready to pay. Dave would know from that one line why the invoice reached his desk. Then they delete the branch.

### Try it

You release the plugin from [16.5](what-a-plugin-bundles.md#try-it), install it, and release a fix.

**Make.** Send: "Add practice-plugin/CHANGELOG.md with one entry for version 0.1.0, dated today, saying what the plugin holds. Then commit the practice-plugin folder." Then make a catalog and install from it, as [your tool's tab](both-ai-vendors.md#practice-shipping-a-version) says.

**A copy that falls behind.** Send: "Copy the practice-plugin folder to a folder named clerk-copy, beside it. Don't commit it." This copy stands for a clerk who installed 0.1.0 and never updated.

**Predict.** If you release version 0.1.1 now, does your installed copy change? Does `clerk-copy`?

**Modify.** Send: "Make one small fix: at the end of the vendor-terms body, add a line saying the answer comes from npm run vendors. Change the version to 0.1.1 in plugin.json, and in my tool's own manifest if there is one. Add a changelog entry for 0.1.1, newest first. Then commit."

**Check.** Send: "Compare practice-plugin and clerk-copy. For each one, tell me the version in its manifest and the last line of its vendor-terms skill." Then look at your installed copy again, as your tool's tab says. Last, send: "Delete the clerk-copy folder." Remove what you installed when the tab says to.

**What you should see.** Two changelog entries, newest first, and one version in every file. `clerk-copy` still says 0.1.0 and lacks the new line, and nothing warned anyone. Only its version number shows that it is behind. Whether your installed copy changed depends on your tool and the kind of catalog, and your tool's tab says what was seen for this book. That is why a release needs a version you can read: on any computer, it tells you which copy ran.

**The operating rule:** give every release a version and a changelog entry. Move every copy of a changed rule in one reviewed change, and make the report say which version ran.

![A version moving left to right. A pull request with green checks, a tag v0.1.0 and a changelog entry, a catalog entry, then installs at three scopes: you, this project, everyone. A pinned connector version rides along with it. A later release appears as a new tag, never an edit to the old one.](img/shipping-a-version.png)

*Figure 16.9. A version moves from a reviewed change to a catalog to an install. A fix is a new version, never an edit to an old one.*

![One batch, two copies. Two report cards on the same 13 invoices. On the left, a clerk who has not updated: the first line says brightline-ap 0.1.0, AP policy v3, with exception 4, $4,136.95, needs approval 2, $17,500.01, urgent 2, $2,321.42, and ready to pay 5, $12,698.00. INV-6004 for $5,000.01 is in needs approval. On the right, the rehearsal, never merged: the first line says brightline-ap 1.0.0, AP policy v4, with exception 4, $4,136.95, needs approval 1, $12,500.00, urgent 2, $2,321.42, and ready to pay 6, $17,698.01. INV-6004 for $5,000.01 is in ready to pay. A line at the bottom says a copy that has not updated still runs, and its first line says so.](img/two-copies.png)

*Figure 16.10. The same batch in two copies. The first line says which version and which policy gave each answer.*



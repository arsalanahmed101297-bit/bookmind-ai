# 23.4 Resources as code (/building-ai-workers/hosted-agents/resources-as-code)

---
type: Document
title: "23.4 Resources as code"
description: "The agent and its environment kept as reviewed files and applied with a plan and a lock file, so a change made outside the files is refused."
status: stable
order: 323.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:40Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.4" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:40Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A restaurant chain keeps its recipes in one binder at head office, not in each cook's memory. A change to the house soup is written on a new page, tasted by the head chef, and only then sent to every kitchen. Each kitchen keeps a list of which page it is cooking from. When a soup tastes wrong in one kitchen, anyone can check which page that kitchen used. In this concept, the binder is your files, the head chef's tasting is the plan and review, and each kitchen's list is the lock file.

**What you will learn.** How to keep the worker's definition and its setting as reviewed files, preview every change before it is made, and record which file made which part.

**Why it matters.** A change made by hand in a web form skips review, and nobody can say later which version is running. Files make every change visible in a pull request.

**One request, start to finish.** Ana wants the worker to say an invoice's due date in plain words, "due next Tuesday", as well as the date. The builder asks a coding agent for the change:

1. **A coding agent edits one file,** `agents/ap-worker.md`, adding one line to the worker's instructions.
2. **It opens a pull request.** The diff shows the one line.
3. **CI checks the files:** the configuration check (a script that fails when a file breaks one of the worker's rules) passes, and a diff of the files alone (what changed, line by line) shows the one changed line.
4. **The builder merges.** The deploy workflow shows the plan, "update agent ap-worker, version 4 to 5, instructions changed", then applies it to the staging workspace (a separate space on the platform, here the one for testing), and records that `agents/ap-worker.md` is now version 5 of that agent.
5. **Ana tries it in staging.** Then a person applies it to production.

At no point did anyone edit the worker in a web form.

### Why keep resources as files?

An agent definition is part of your product, so it should change the way code changes: in a file, reviewed in a pull request, tried in staging first (Chapters [15](../code-review/overview.md) and [17](../connectors-and-mcp/overview.md)). Keeping resources as files is called **resources as code**. A tool reads the files and does two things:

- It shows a plan first: what it would create, change or leave alone, and why. A plan changes nothing. In Task 2, the plan runs on your computer, and nothing changes until you approve it. Later, in Task 13, CI runs it after each merge.
- It writes a lock file, which records, for each file, the id of the resource it made and a fingerprint (a hash, [Chapter 18](../securing-connectors/overview.md)) of what it applied. The lock file is committed, so the next run, on any computer or in CI, updates the same resources instead of making new ones.

Three rules follow, and the lab checks each:

| Rule | Why |
| --- | --- |
| Change resources only through the files | A change made in a web form is invisible to review. The tool refuses to apply over it until someone decides which is right |
| Deleting a file does not delete the resource | Running sessions may still use it. Removing it is a separate, deliberate step |
| One lock file per workspace | A workspace is a separate space on the platform for keys, resources and spending. Staging and production each have one, so each has its own record of which ids are its own |

**At work.** In [Lab 23](lab.md), Task 2, Claude Code writes `agents/ap-worker.md` and `environments/ap-sandbox.yaml`, runs the plan, and shows it to the builder before applying anything. After the builder approves, it applies, and shows the lock file: two entries, each with an id and a hash. Then the builder changes the system prompt by hand in the platform's web console, and asks Claude Code to apply again. The tool refuses: the resource changed outside the files. Claude Code shows both versions, and the builder chooses the file's.

**The operating rule:** keep every resource as a file, show a plan before every apply, and commit the lock file. Never edit a resource in a web form.

![Left to right. A box labeled in the repository holds four files: agents/ap-worker.md, environments/ap-sandbox.yaml, skills/invoice-triage/ and deployments/morning-triage.md. A red-orange arrow leads to a box edged in red-orange: plan, update agent ap-worker, version 4 to 5, no change to environment, and changes nothing. A red-orange arrow labeled after review leads to a gold box: resources on the hosted service. Under the plan, a box reads lock file, committed: file to id and hash, with a dashed arrow up to the resources. Above the resources, a dashed red-orange box labeled a web form has a dashed red-orange arrow down into them, labeled blocks the next apply. Below: change resources only through the files.](img/chapter-22-resources-as-code.png)

*Figure 23.8. Files, a plan, then the resources. The lock file says which resource each file made.*



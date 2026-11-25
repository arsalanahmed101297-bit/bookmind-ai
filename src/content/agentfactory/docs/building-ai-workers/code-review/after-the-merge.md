# 15.9 After the merge (/building-ai-workers/code-review/after-the-merge)

---
type: Document
title: "15.9 After the merge"
description: "Feature flags, staged rollouts and a rehearsed revert make mistakes small after the merge, and the person who merges a change owns it."
status: stable
order: 315.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:29Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.9" ]
last_verified: 2026-10-31
sources:
  - id: github-merge-queue
    title: "Managing a merge queue (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue
  - id: github-reverting-pr
    title: "Reverting a pull request (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
generated:
  at: 2026-11-23T16:16:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A restaurant adds a new dish to the kitchen's recipe book on Monday, but puts it on the menu only on Thursday. It offers it first to one table of regular customers, and keeps the old dish ready in case the new one fails. Adding the recipe, offering it, and serving it to everyone are three separate decisions.

**What you will learn.** How to get a merged change to its users in separate steps, and how to have the agent rehearse the way back.

**Why it matters.** A merged change is not yet delivered, and a mistake after the merge reaches real users and real money.

### What is left after the merge?

Delivery. Review decides whether a change may join `main`. The change still has to reach **production**, the place where the code runs for real users and real money. That step is often the slowest.

As at the restaurant, each step is its own decision. Figure 15.16, at the end of this lesson, shows four stages:

1. **Merged.** The code is on `main`. This is the recipe in the book.
2. **Deployed.** The merged code runs in production, with the new behavior still off. The kitchen has the recipe, and the dish is not on the menu.
3. **On for a small group.** A **staged rollout** turns the new behavior on for a few users first, and watches what happens. It is the one table of regular customers.
4. **On for everyone.**

### What changes when the weekend rule merges?

Nothing, until someone turns it on. The weekend rule merges with a setting, `PAY_WEEKEND_RULE`, that is off. So the Friday list on `main` is the same 8 invoices as before ([15.4](evidence-before-the-pr.md)). Only a run with the setting turned on gives the 10. The code is merged, and Brightline still pays the same eight invoices.

### What does a feature flag do, and what does it not do?

It keeps merging apart from turning on. A setting like `PAY_WEEKEND_RULE` is a **feature flag**: it turns new behavior on or off without changing the code. It is the restaurant's menu. The recipe is in the book, and the dish is not offered yet.

**What it does.** With the flag off, the code is on `main`, where it is reviewed, tested and kept up to date. Turning the flag on is a separate decision, by the person who owns the policy.

**What it does not do.** It does not remove the risk of the merge. A new package, a change to shared code, or a change to stored data takes effect when the merged code runs, whatever the flag says. The merge is less risky only when the new code is self-contained and a test shows the old behavior unchanged with the flag off.

**What it costs.** Every flag doubles the cases to test, and a flag that stays forever becomes clutter, so give each one an owner and a date to remove it.

### How do I get back?

With a **rollback** you have rehearsed, which means practiced. A rollback is a return to the last good state, like the old dish the kitchen keeps ready.

- For a flag, it is turning the flag off.
- For code, it is a revert: a new commit, or a new pull request, that undoes the merged one and keeps the history ([15.1](git-through-the-agent.md)).[^github-reverting-pr]

Rehearse it before you need it. Ask the agent to do the revert on a branch, and check that the branch gives the old answer afterward.

Some things cannot be rolled back this way. A payment already sent stays sent, and a message already delivered stays delivered. That is why turning on a flag that sends money is its own high-tier decision ([15.8](approval-scaled-by-risk.md)).

### Who watches it after the merge?

The person who merged it, or who directed the agent that wrote it. They are the first to fix it if it breaks. Review shares understanding, and it does not hand the responsibility to someone else.

**At work.** The weekend rule is on `main` with the flag off, and a test, "with the rule off, the answer is unchanged", checks the 8 invoices on every change. Ana rehearses a revert of the merge on a scratch branch. The weekend code disappears, every check still passes, and the answer is still 8 invoices. Dave Kowalski, the controller, will decide in April whether to turn the rule on. The person who turns it on owns the first Friday run with it.

### Try it

**Do it in [Lab 15, Task 11](lab.md#task-11-merge-flag-revert-15-minutes).** Merge the weekend rule with its flag off, run the list both ways, and rehearse the revert on a branch of its own. Before each run, write the count you expect, and say why.

**The operating rule:** merge risky behavior behind a flag that is off, turn it on as a separate decision, and rehearse the way back before you need it.

![Four stages: merged, with the code in main but not yet released, deployed with the flag off, on for a small group, and on for everyone. From the last two stages an arrow returns to the flag being off if rollout checks fail. A panel says recovery has two parts: stop the behavior by turning the flag off, and handle effects such as data writes and external actions, which may need separate repair.](img/merge-to-rollout.png)

*Figure 15.16. From merge to everyone. Merged is not deployed, and deployed, which means running in production, is not turned on. Each stage is a separate decision, with a way back.*

### Other words you will meet

| Word | What it means |
| --- | --- |
| Merge queue | A line of approved pull requests. It tests each one on top of the latest `main` plus the changes ahead of it, so two changes that each pass alone cannot break `main` together[^github-merge-queue] |
| "You land it, you own it" | A team saying. To land a change means to merge it, and whoever merges it watches it and fixes it first |

[^github-merge-queue]: Managing a merge queue, GitHub.
[^github-reverting-pr]: Reverting a pull request, GitHub.



# 15.8 Human approval, scaled by risk (/building-ai-workers/code-review/approval-scaled-by-risk)

---
type: Document
title: "15.8 Human approval, scaled by risk"
description: "Low, medium and high tiers set by what a change touches, not by who wrote it, with code owners for sensitive paths and an approval that covers one commit."
status: stable
order: 315.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:29Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.8" ]
last_verified: 2026-10-31
sources:
  - id: github-rulesets
    title: "About rulesets (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
  - id: github-code-owners
    title: "About code owners (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
  - id: anthropic-desktop
    title: "Use Claude Code Desktop (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/desktop
  - id: openai-code-review
    title: "Code review (OpenAI, accessed 2026-10-31)"
    resource: https://learn.chatgpt.com/codex/code-review
  - id: opencode-changelog
    title: "Changelog (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/changelog
generated:
  at: 2026-11-23T16:16:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A bank lets a clerk approve a small refund alone, needs a supervisor for a larger one, and needs two signatures to change who can sign payments at all. What the action can do sets the level. It does not matter how senior the person asking is.

**What you will learn.** How to set the number of people who must approve a change, by what it touches.

**Why it matters.** A small change to the wrong file can cost more than a large change to the right one.

### What sets the risk tier?

What the change touches. In review, people's time is the limited resource ([15.3](why-review-changes.md)), so spend it where a mistake would cost the most. A **risk tier** says how many people must approve a change. It is set by the files the change touches, not by who or what wrote it. A change written by an agent and a change written by the senior developer get the same tier if they touch the same files.

The three tiers are the bank's three levels: the clerk alone, a supervisor, and two signatures. The files that control review itself are the bank's "who can sign" case, so they sit in the top tier.

| Tier | Typical changes | People who must approve |
| --- | --- | --- |
| Low | Docs, notes and examples | None, once every required check is green |
| Medium | Ordinary code and new tests | One |
| High | Money, dates and rules, data, security, any change to an existing test, and the files that control review itself | Two, one of them an owner of that area |

This table is the team's own rule. GitHub knows nothing about tiers. It enforces only what the repository's settings and the owners file say, and the usual settings are one approval on every pull request, plus the owner on each path that has one. So on GitHub, a Low change still gets that one approval, and Low means "no owner is asked". The second approval on a High change is a team rule that the owner checks.

Brightline keeps this table in `REVIEW.md`, the rules file the reviewer reads. Three pull requests, three answers:

| Pull request | What it touches | Tier |
| --- | --- | --- |
| A typo fix | Only `NOTES.md`, the handover notes | Low |
| The weekend rule | `src/due-date.ts`, the file that works out due dates, and two files that use it | High, so it needs two people |
| `agent-speedup` | An existing test, which it edits | High, whatever its size |

One kind of change is high even when it is one line: turning on a flag, a setting that switches new behavior on ([15.9](after-the-merge.md)). A flag that moves money is a high-tier decision of its own.

### Who owns a path?

The people named beside it in one file, `.github/CODEOWNERS`. Each line of the file starts with a **path**, which is where a file or a folder sits in the project. After the path come the owners. A name that starts with `@` is a person's account on GitHub. This is Brightline's file, with each line's meaning beside it.

| Line in the file | In plain words |
| --- | --- |
| `/.github/  @ana-brightline` | The checks file and this owners file: Ana |
| `/REVIEW.md  @ana-brightline` | The review rules: Ana |
| `/src/due-date.ts  @ana-brightline @dave-brightline` | The file that works out due dates: Ana and Dave |
| `/tests/  @ana-brightline` | Every test: Ana |
| `/scripts/check-*.sh  @ana-brightline` | The scripts that the checks run: Ana |
| `/package.json  @ana-brightline` | The list of commands and packages: Ana |
| `/tsconfig.json  @ana-brightline` | The type checker's settings: Ana |

A **code owner** is a person or team that this file names as responsible for a path. GitHub has a rule, "require review from code owners". With it on, a pull request that touches `src/due-date.ts` cannot merge until one of its owners approves it.[^github-code-owners]

Look at the first two rows. The checks, `CODEOWNERS` itself and the review rules all have an owner, because they control review. A change that weakens the gate must pass the gate.

### What keeps approval honest?

Three rules.

1. **An agent's review never replaces a person's approval** ([15.6](ai-review-on-every-pr.md)). GitHub cannot enforce this alone: an agent that works through your signed-in account looks exactly like you. So never let it approve for you. What to look for: a request to run a command that holds the word `approve`, or to click a button named *Approve*. Say no to it.
2. **The person who directed the agent is accountable.** They review the change, and they answer the findings ([15.6](ai-review-on-every-pr.md#when-is-a-finding-resolved)).
3. **An approval covers one commit.** If a new commit arrives after an approval, the approval is **stale**: it was given to older code. GitHub has a rule, "dismiss stale approvals", that removes it. Turn that rule on, so a person approves what actually merges.

**At work.** Ana directed the agent that wrote the weekend rule, so she reviews it first. GitHub lets nobody approve their own pull request. So Dave Kowalski, the other owner of `src/due-date.ts`, gives the approval GitHub requires.

### Try it

**Predict, then do it in [Lab 15, Task 1](lab.md#task-1-which-check-should-catch-this-15-minutes).** Before you open Task 1, predict: which kind of change is high tier even when it is one line, and why? Then give Task 1's six changes a tier and a check. In [Task 5](lab.md#task-5-the-rules-files-and-code-owners-25-minutes) you write the owners file, so that a change to a path such as `src/due-date.ts`, where the weekend flag lives, asks its owner.

**The operating rule:** set the tier by what the change touches, name an owner for every sensitive path, and count only people's approvals, on the commit that merges.

![Three rungs, rising with how closely a change is checked. Low holds minor documentation and notes, with no per-change approval under a pre-approved policy. Medium holds ordinary code and new tests, with one reviewer. High holds money, dates, data, CI workflows, review rules and edits to existing tests, with two reviewers including the responsible owner. Notes say required checks pass on every tier, a flag that is off does not by itself mean low risk, and the tier depends on impact, not on who wrote the change.](img/risk-ladder.png)

*Figure 15.15. The risk ladder. What the change touches sets the rung, and the rung sets how many people must approve.*

### Other words you will meet

| Word | What it means |
| --- | --- |
| Personal repository | A repository that belongs to one account. Its rules ask for one approval count on every pull request. They cannot ask for none on docs and two on payment code |
| Organization | An account a team shares. Its repositories can also ask for a team's approval on chosen paths[^github-rulesets] |
| A check that counts approvals | A team that needs the exact counts of the tier table adds a check of its own that reads which paths changed |
| Code behind a flag that is off | It still loads, so the merge can change things whatever the flag says ([15.9](after-the-merge.md#what-does-a-feature-flag-do-and-what-does-it-not-do)). It sits in a lower tier only when it is self-contained and a test shows the old behavior unchanged with the flag off. The weekend rule changes the shared due-date engine, so it stays high |
| An agent in a team's workflows | The team gives it an account of its own, with no right to approve |
| A pull request from a fork | It comes from outside the team. It gets no secrets and no automatic AI review, and a person reads it first |

### In your tool: the details

Two cautions about the buttons in each app. *Merge when ready* and *Approve* act with your account, so the three rules above apply to the click as they do to a command. And *Auto-fix* lets the agent change the branch in answer to other people's comments, which are pull request text and untrusted input, as [15.6](ai-review-on-every-pr.md) says. Turn it on only where you would let those people steer the agent.

Which buttons merge or approve with one click:

#### Claude Code

*Merge when ready* turns on GitHub's auto-merge. *Auto-fix* fixes failing checks. In a local session it also answers review comments from the repository's owner, an organization member, a collaborator or a GitHub App.[^anthropic-desktop]

#### Codex

*Submit review* offers Comment, Approve or Request changes.[^openai-code-review]

#### OpenCode

OpenCode's changelog names none.[^opencode-changelog]

[^github-code-owners]: About code owners, GitHub.
[^github-rulesets]: About rulesets, GitHub.
[^anthropic-desktop]: Use Claude Code Desktop, Anthropic.
[^openai-code-review]: Code review, OpenAI.
[^opencode-changelog]: Changelog, OpenCode.



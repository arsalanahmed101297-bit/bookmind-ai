# 15.1 Git through the agent (/building-ai-workers/code-review/git-through-the-agent)

---
type: Document
title: "15.1 Git through the agent"
description: "Commits, branches, one diff and the safe undo, with the agent typing the git commands and you reading what each one shows."
status: stable
order: 315.02
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:29Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.1" ]
last_verified: 2026-10-31
sources:
  - id: anthropic-desktop
    title: "Use Claude Code Desktop (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/desktop
  - id: openai-code-review
    title: "Code review (OpenAI, accessed 2026-10-31)"
    resource: https://learn.chatgpt.com/codex/code-review
  - id: openai-modes
    title: "Codex modes: Local, Worktree and Cloud (OpenAI, accessed 2026-10-31)"
    resource: https://learn.chatgpt.com/codex/environments/modes
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

**In everyday life.** A careful writer saves a copy of a contract before each round of edits, and labels it with what changed. For a risky idea, the writer starts a separate draft. If the draft goes badly, the last good copy is still there. You have used **git** since [Chapter 12](../agentic-coding/the-workspace.md) to keep those copies for a folder of code, exactly, each time you save a step.

**What you will learn.** How to read what git shows you: the saved copies, a separate draft, and what a draft changed. And how to ask for an undo that loses nothing.

**Why it matters.** Every later step in this chapter is built from these few words. A review reads a diff, and a pull request offers a branch.

### What does git keep?

Every saved copy, and every separate draft. You have asked your agent for git steps in every lab since Chapter 12. Here is what they made. This is the whole history of `brightline-ap`, the project in this chapter's lab files, as git prints it. Read it from the bottom, oldest first:

```text
* 6b6bc0a (agent-speedup) Speed up the due list with a single pass
| * b1c6d2f (tag: weekend-rule-start, weekend-rule) Add the weekend rule behind PAY_WEEKEND_RULE, off by default
| * bfc668f Failing tests for the weekend rule
|/
* 5297ed8 (HEAD -> main, tag: lab15-start) Lab 15 starting files: a stub workflow and the change brief convention
* f66221b (tag: ch14) Brightline AP at the end of Chapter 14
```

| This line | Means |
| --- | --- |
| The bottom line, `f66221b` | The oldest saved copy. `f66221b` is its short id, and the words after it are its label |
| The line with `main` | The newest saved copy of the good copy, which is named `main` |
| The slanted line above it | Two separate drafts start here, from that copy |
| The two lines that end at `weekend-rule` | The two saved copies of one draft, named `weekend-rule` |
| The top line, `agent-speedup` | The one saved copy of the other draft |

You met git's words for these two things in [12.3](../agentic-coding/permissions-and-plan.md) and [12.6](../agentic-coding/many-sessions.md). Here is how each one shows in the history.

- A commit is one saved copy with its label. Every line with a `*` is a commit. Its label is called its message, and it says what changed.
- A branch is a line of commits with a name. `main` is the branch everyone trusts. `weekend-rule` and `agent-speedup` are the separate drafts. Nothing on them has touched `main`.

A name after `tag:` is a fixed name for that one commit. You can leave the rest of the brackets for now.

![Commits on main in a line, older to newer, with the tag ch14 on an early commit and the tag lab15-start where a branch begins. The branch weekend-rule has three commits: tests first, the rule, and a fix for a problem a review found. A commit from the merge joins both histories, and a later commit updates the notes. A key explains a commit, a branch and a tag.](img/commits-and-branches.png)

*Figure 15.3. Commits and a branch. `main` stays the trusted line while the weekend rule grows on its own branch, and is joined to `main` at the end.*

### Who types the git commands?

The agent does. You say what you want, and you read what comes back. [13.2](../programming-fundamentals/the-workbench.md#what-will-i-see-when-the-agent-uses-git) listed most of these commands. What is new here is the last column: what you check in each answer.

| You say | The agent runs | You check |
| --- | --- | --- |
| "What has changed?" | `git status`, then `git diff` | Only the files you expected changed |
| "Save this step." | `git add` and `git commit -m "..."` | The message says what changed and why |
| "Start the weekend work on its own branch." | `git switch -c weekend-rule` | The branch starts from the right commit |
| "Show the history." | `git log --oneline --graph` | Your commits, in the order you expect |
| "What did this branch change since it left `main`?" | `git diff main...weekend-rule` | Only the files the task needed |

If "What has changed?" lists a file that the task had no reason to touch, ask why before anything is saved.

### How do I read a diff?

Line by line: `-` marks a removed line, and `+` marks an added one. Here is one pair of lines from the branch `agent-speedup`. It is the first line of a test:

```diff
-test("eight invoices, $19,229.53, are due by Friday, March 5", () => {
+test("six invoices, $11,679.58, are due by Friday, March 5", () => {
```

This is a **diff**: two copies side by side, with the changes marked, as the writer marks the changes between two drafts. Read the `-` line, then the `+` line, and ask what changed in meaning. Here the old test expected eight invoices, and the new one expects six. This is the mistake from [the opening story](overview.md#why-it-matters): the agent changed the test to agree with its new code.

A small diff can carry a large change in meaning. On the same branch, one character changed in the script: `<=` became `<`. An invoice due exactly on the cutoff day is now left out.

### How do I undo a commit?

Ask for a **revert**: a new commit that reverses an old one. The agent runs `git revert` with the commit's id. Nothing is erased. The old commit stays in the history, and the new one sits after it. The writer does the same: a bad round of edits is not torn up. A new copy is saved that takes the edits back out.

This is the undo to ask for, because git keeps every commit, and a revert only adds one.

**At work.** Ana Morales, the accounts payable (AP) analyst at Brightline, asks the agent: "Make a branch for the weekend rule from `main`, and show me the history." It runs `git switch -c weekend-rule` and `git log --oneline --graph`. She checks that the branch starts at the newest commit on `main`. Later the agent proposes `git reset --hard HEAD~1`, which drops the last commit, to "clean up". She says no, and asks what it wants to undo. A `git revert` does the same job and keeps the history.

### Try it

**Do it in [Lab 15](lab.md#task-2-read-the-history-through-the-agent-20-minutes).** Read this history and the `agent-speedup` diff through the agent in Task 2. Predict which check that one character will fail, then see it fail in [Task 9](lab.md#task-9-the-agents-change-20-minutes). You rehearse a revert in [Task 11](lab.md#task-11-merge-flag-revert-15-minutes).

**The operating rule:** let the agent type the git commands, and read what each one shows. To undo a commit, ask for a revert. Never let a command that throws away work run until you know exactly what it removes.

### Other git words you will meet

You do not need these to finish this lesson. Come back to this table when a later lesson or the lab uses one.

| Word | What it means |
| --- | --- |
| Repository | A folder whose past versions git keeps. It is the writer's folder of copies |
| Tag | A name for one commit that never moves, such as `ch14`. A branch name moves forward with each new commit |
| `HEAD` | The commit your folder shows now. `HEAD~1` is the commit before it, and `HEAD~2` the one before that |
| Staging | Choosing which edited files go into the next commit. One task's edits become one commit, and an unrelated edit waits for its own |
| Merge | Carrying a branch's commits into another branch, as the writer carries a draft's changes into the good copy |
| Two dots or three | Two ways to compare a branch with `main`. Three dots, `git diff main...weekend-rule`, show only what the branch changed since it left `main`. Two dots, `git diff main..weekend-rule`, also show what changed on `main` since then. Ask in words for the one you want: "only what the branch changed since it left `main`" |
| Merge conflict | Two branches changed the same lines differently, so git stops the merge and marks both versions in the file. The part above `=======` is your branch, and the part below is the branch you are merging in. A person decides what the lines should say, the marks come out, and the result is committed |

![main has commits A, B, C and D. The branch weekend-rule leaves main at B, the merge base, and has commits 1 and 2. Two dots, git diff main..weekend-rule, compare tip D with tip 2, so the diff includes changes made on either side. Three dots, git diff main...weekend-rule, compare B with 2, so the diff shows only what the branch proposes. A note says git diff only shows differences.](img/two-and-three-dots.png)

*Figure 15.4. Two dots or three. Two dots compare the newest commit on each side. Three dots compare the branch with where it left `main`, which is what a reviewer wants.*

### Which commands need a pause?

The ones that throw away work. Most git commands are safe to approve, because git keeps every commit. But git can bring back only what was committed.

| If the agent proposes | It would |
| --- | --- |
| `git reset --hard` | Throw away edits that are not committed yet. It can drop commits too |
| `git checkout -- .` or `git restore .` | Throw away edits that are not committed yet |
| `git clean` | Delete files git is not keeping |
| `git push --force` | Overwrite the history on a copy that others share ([15.2](github-and-the-pull-request.md)) |

It is like clearing the writer's desk: pages that were never saved as a copy are gone. Before you approve one of these, ask the agent exactly what it removes, and whether anyone else has those commits.

**If your app does not stop for local commands.** Under *Ask for approval*, Codex runs commands inside the project without asking ([12.8](../agentic-coding/both-ai-vendors.md)). Say this in your first message: "Before any command that rewrites history or throws away work, stop and ask me." A request guides the agent, but it cannot bind it. So also have the agent commit each step, and read the history after each one.

### In your tool: the details

Your app's change pane usually shows less than the whole branch: the agent's last turn, or the edits not committed yet. Before a pull request, ask for the three-dot diff of the whole branch. Here is where each app shows the agent's changes, and how it gives a session its own branch.

#### Claude Code

The *Changes* card opens a diff view, file by file. Comment on a line with *+*, and Claude makes the change. Turn on *Worktree* before the session starts. Worktrees go in `.claude/worktrees/`.[^anthropic-desktop]

#### Codex

The review pane shows unstaged or staged changes, a commit, the branch diff or the last turn. Stage or revert a file or one part of it, and comment on lines.[^openai-code-review] For a branch of its own, use the separate *Worktree* control when you start a chat. *Work in* chooses this computer or the cloud.[^openai-modes]

#### OpenCode

With *Changed files* on, in Settings, the timeline shows each completed turn's changed files, line counts and diffs. Read the whole branch with `git diff`. Choose a worktree and its base branch when you start a session.[^opencode-changelog]

---

**Next.** [15.2](github-and-the-pull-request.md) puts a shared copy of the repository where a whole team can see it.

[^anthropic-desktop]: Use Claude Code Desktop, Anthropic.
[^openai-code-review]: Code review, OpenAI.
[^openai-modes]: Codex modes, OpenAI.
[^opencode-changelog]: Changelog, OpenCode.



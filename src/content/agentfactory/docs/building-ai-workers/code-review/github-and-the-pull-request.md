# 15.2 GitHub and the pull request (/building-ai-workers/code-review/github-and-the-pull-request)

---
type: Document
title: "15.2 GitHub and the pull request"
description: "A shared copy of the repository on GitHub, pushing a branch to it, and the six parts of a pull request, opened and read through the agent."
status: stable
order: 315.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:30Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.2" ]
last_verified: 2026-10-31
sources:
  - id: pro-git-remote-branches
    title: "Pro Git, Remote Branches (accessed 2026-10-31)"
    resource: https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
  - id: github-protected-branches
    title: "About protected branches (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
  - id: github-rulesets
    title: "About rulesets (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
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
  at: 2026-11-23T16:16:30Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A team keeps the signed copy of a contract in a shared office, not on anyone's desk. To change it, you bring the office a draft with your changes marked. Colleagues read it and comment, and someone with the authority signs. Only then does the office copy change.

**What you will learn.** How to ask your agent to share a branch and open a pull request, and what each of the six parts of a pull request is for.

**Why it matters.** The shared copy is where a team, its checks and its reviewers all see the same change.

### Where does a team keep the good copy?

On a server that everyone on the team can reach, as the office keeps the signed contract. Git itself works on your computer, so a repository there exists only on your desk. A team needs one copy that all of them see. GitHub is the most common service that keeps one, and this chapter uses it. GitLab and others work the same way.

Two words describe it:

- The shared copy is called a **remote**: a copy of the repository somewhere else.
- **Pushing** sends your commits to the remote. It is carrying your pages to the office.

### What is a pull request?

It is the draft you bring to the office: a page on GitHub that asks to add one branch to `main`. You push a branch, and then you open the page for it. The page has six parts:

| Part | What it is for |
| --- | --- |
| Title and description | Says what the change is for, how it was tested, its risk and how to undo it |
| Files changed | The diff. A reviewer can comment on a single line |
| Commits | The steps of the change, one by one |
| Conversation | Reviewers' comments, and the answers to them |
| Checks | The automated runs, each one passing, failing or only advising |
| Merge | The decision. It is allowed only when the repository's rules are met |

This page is a **pull request**: a request to merge a branch into `main`, on a page where the change is described, checked, discussed and decided. Merging is the signature. It carries the branch's commits into `main`, and only then does the shared copy change. GitLab calls the same page a merge request.

![The branch weekend-rule, committed on your computer, is pushed to GitHub, then opened as a pull request into main. The pull request page lists description, files changed, commits, discussion and review, and checks. It ends with merge when ready: required checks pass, required approvals are in place, and the repository's rules are met.](img/pull-request-anatomy.png)

*Figure 15.6. From your computer to a pull request. The branch is pushed, and the pull request gathers purpose, diff, discussion, checks and the decision on one page.*

### How do I open one through the agent?

You say what you want, and the agent runs `gh`, a tool that lets it talk to GitHub. You sign in to `gh` once. Then, for a change, you say: "Push this branch and open a draft pull request against `main`." A draft is a pull request marked not ready yet.

| When | The agent runs | What it does |
| --- | --- | --- |
| Once, the first time | `gh repo create`, then a push of `main` | Puts the repository on GitHub |
| For each change | `git push origin weekend-rule` | Sends the branch to GitHub |
| Then | `gh pr create --draft --base main` | Opens a draft pull request against `main` |
| Later | `gh pr checks` | Shows the checks |
| Later | `gh pr merge` | Merges |

Some of these only read. A push, a `gh pr create` and a `gh pr merge` change the shared repository, so read each one before you approve it, as in [15.1](git-through-the-agent.md). After the first push of `main`, a push straight to `main` is the one to refuse. Nobody changes the office copy without bringing a draft: every change goes through a pull request.

**At work.** Ana's branch `weekend-rule` is ready for others to see. She asks the agent to push it and open a draft pull request. She writes the title herself: "Weekend rule behind a flag, off by default". In the description she links the change brief, a short file kept in the repository ([15.4](evidence-before-the-pr.md)). The page lists its commits and the files they changed. The checks start running before anyone has read a line.

### How do I set up to try this?

Once, in four steps. This lesson's Try it and the one in [15.7](checks-that-block.md#try-it) use the folder you make here. You set up Git, Node.js and uv in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#how-do-i-set-up-to-try-this).

**1. Download.** Get [brightline-lab-ch15.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch15.zip), and unzip it. You get a folder named `brightline-lab-ch15`, with a folder named `brightline-ap` inside it.

**2. Copy.** Copy `brightline-ap` to a new folder beside it, named `practice-15`, so the lab still starts clean. Open `practice-15` in your agent. Keep your notes in a text editor, outside this folder.

**3. Make the agent ask before it acts,** before your first message, as in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#how-do-i-set-up-to-try-this): *Manual* in Claude Code, *Ask for approval* in Codex, with *Work in* set to *This computer* as in [12.8](../agentic-coding/both-ai-vendors.md), and the `ask` rules of [13.13](../programming-fundamentals/both-ai-vendors.md#how-does-each-agent-ask-before-it-acts) in OpenCode.

**4. Install.** Send: "Set my git name and email for this project only, and ask me what they are. Then install the packages this project needs, from its own lists, for TypeScript and for Python. Add nothing new." When the agent reports that the packages are installed, the folder is ready.

### Try it

In the folder from [the setup above](#how-do-i-set-up-to-try-this), read a real pull request through the agent, and find its six parts. You need a free GitHub account, and a few more minutes the first time.

The pull request is a finished one. This book's labs are kept in a public repository on GitHub, `panaversity/agentfactory-v2-resources`, which belongs to Panaversity, the book's publisher. Pull request 150 added Lab 13 to it. Because it is public and already merged, you can read every part of it and change nothing.

1. Send: "Check whether the `gh` tool is installed on this computer and signed in to GitHub. If it is not, walk me through it, one step at a time. I will sign in in my browser." Never type a password or a token into the chat. If you get stuck, the steps are in the first section of `field-guide-code-review-setup.md`. That file is in the `brightline-lab-ch15` folder you unzipped, beside `brightline-ap`.
2. Send: "Show me pull request 150 of the public repository panaversity/agentfactory-v2-resources. Change nothing."
3. Send: "Now list the files it changed, and show me its checks. Change nothing."
4. In your notes, match what you saw to the six parts in the table above. The agent reported no checks, because that repository has none set up. Write what that means for a merge there.
5. Send: "Does this folder have a remote? Change nothing."

**What you should see.** The title "Lab 13: the due-date calculator in two languages", the state MERGED, its description, and a long list of files under `labs/brightline-lab-ch13/`. With no checks set up, no check could stop a merge there: only a person's decision stood between that branch and `main`. Your own folder has no remote. It exists only on your computer until its first push, which you do in [Lab 15](lab.md).

How each app helps you open and follow a pull request:

### Claude Code

*Create PR* uses `gh`. The pull request then shows in the *Changes* card with the status of its checks.[^anthropic-desktop]

### Codex

Use `gh` through the agent. From the app you can also post comments and submit a review on the pull request. Reviewing in the chat posts nothing. Posting from the pull request's view sends a comment to GitHub at once.[^openai-code-review]

### OpenCode

Use `gh` through the agent. OpenCode's changelog names no pull request controls.[^opencode-changelog]

---

**The operating rule:** every change reaches `main` through a pull request whose description says what it is for, how it was tested and how to undo it.

### Other GitHub words you will meet

You do not need these to finish this lesson. Come back to this table when a later lesson or the lab uses one.

| Word | What it means |
| --- | --- |
| `origin` | The name git usually gives the remote |
| Pull | Bringing the remote's new commits to your computer. It is the opposite of a push |
| Your `main` and GitHub's | There are two. When a pull request merges, only GitHub's `main` moves. Yours moves when you pull, so ask the agent to switch to `main` and pull before new work[^pro-git-remote-branches] |
| `origin/main` | Git's note, kept on your computer, of where GitHub's `main` was the last time git looked. Looking is called a fetch |
| Clone | Making a full copy of a remote repository on your computer |
| Fork | A copy of a repository that someone outside the team keeps on GitHub. A pull request from a fork gets more care, because its code and its text come from outside the team ([15.8](approval-scaled-by-risk.md)) |
| Draft pull request | A pull request marked not ready. It cannot be merged, and its required reviewers, the code owners ([15.8](approval-scaled-by-risk.md)), are not asked yet |
| Merge commit | A way to merge that keeps every commit of the branch. Squash and merge turns them into one commit |
| Public or private | Anyone can read a public repository. On a private one, some protections, such as required checks,[^github-rulesets] need a paid GitHub plan.[^github-protected-branches] The lab uses a public one, because its data is made up |

![Your computer holds main, your local branch, and origin/main, your local record of GitHub's main. GitHub holds main, the shared branch, which merged pull requests update. Step 1, git fetch origin, copies GitHub's main into origin/main. Step 2, git merge --ff-only origin/main, moves your main forward. A note says fetch does not update your local main, and --ff-only stops if main has diverged.](img/two-copies-of-main.png)

*Figure 15.7. `main` in two places. Merged pull requests move GitHub's `main`. A fetch updates the note, `origin/main`. Then your `main` moves forward.*

**Next.** [15.3](why-review-changes.md) asks why a change needs more than one kind of check.

[^pro-git-remote-branches]: Pro Git, Remote Branches.
[^github-rulesets]: About rulesets, GitHub.
[^github-protected-branches]: About protected branches, GitHub.
[^anthropic-desktop]: Use Claude Code Desktop, Anthropic.
[^openai-code-review]: Code review, OpenAI.
[^opencode-changelog]: Changelog, OpenCode.



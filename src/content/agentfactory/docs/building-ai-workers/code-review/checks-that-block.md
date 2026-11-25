# 15.7 Checks that block (/building-ai-workers/code-review/checks-that-block)

---
type: Document
title: "15.7 Checks that block"
description: "A check that only reports against a check that stops a merge, the checks file that GitHub runs, and the repository settings that decide which checks block."
status: stable
order: 315.08
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:29Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.7" ]
last_verified: 2026-10-31
sources:
  - id: github-protected-branches
    title: "About protected branches (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
  - id: github-rulesets
    title: "About rulesets (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
  - id: github-events
    title: "Events that trigger workflows (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows
  - id: github-secrets
    title: "Using secrets in GitHub Actions (GitHub, accessed 2026-10-31)"
    resource: https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions
  - id: anthropic-code-review-pull-requests
    title: "Read and request reviews on a pull request (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/code-review-pull-requests
  - id: anthropic-github-actions
    title: "Claude Code GitHub Actions (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/github-actions
  - id: anthropic-security-review-action
    title: "claude-code-security-review, README and action.yml (Anthropic, accessed 2026-11-02)"
    resource: https://github.com/anthropics/claude-code-security-review
  - id: openai-github
    title: "Codex in GitHub (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/third-party/github
  - id: openai-github-action
    title: "Codex GitHub Action (OpenAI, accessed 2026-10-31)"
    resource: https://learn.chatgpt.com/docs/github-action
  - id: opencode-changelog
    title: "Changelog (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/changelog
  - id: opencode-cli
    title: "CLI (OpenCode, accessed 2026-10-31)"
    resource: https://opencode.ai/v2/docs/cli/
  - id: opencode-permissions
    title: "Permissions (OpenCode, accessed 2026-10-31)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: opencode-security
    title: "Security policy and advisories (OpenCode, accessed 2026-10-31)"
    resource: https://github.com/anomalyco/opencode/security
generated:
  at: 2026-11-23T16:16:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A smoke detector beeps. A circuit breaker cuts the power. Both notice a problem, but only one stops anything. Each is right for its job. The mistake is to believe the beeper is a breaker.

**What you will learn.** How to tell a check that only reports from a check that stops a merge, and who decides which one it is.

**Why it matters.** A **gate** is a check that can really stop a merge. A team that mistakes a report for a gate has no gate.

### What is a check on a pull request?

A command that a machine runs on the change, with a pass or a fail shown on the pull request. The commands are listed in a file in the repository, the checks file. GitHub calls it a **workflow**. Here is a small part of Brightline's:

```yaml
jobs:
  checks:
    steps:
      - run: npm run typecheck
      - run: npm test
```

- `jobs:` starts the list of jobs. This part shows one.
- `checks:` is the name of that job. A **job** shows on the pull request as one check, with one pass or fail.
- Each `- run:` line is a **step**, one command. The first runs the type check, and the second runs the tests. You met both in [Chapter 13](../programming-fundamentals/overview.md).

Nobody types these commands. GitHub reads the file, and runs the jobs on its own machines each time a pull request to `main` opens or changes.

A check that only runs is the smoke detector. It reports, and nothing more.

### What are Brightline's checks?

Three jobs:

| Job | What it fails on |
| --- | --- |
| `checks` | A type error, a failing test, or a style problem |
| `tests-unchanged` | A change that removes or edits a line in an existing test, or switches a test off |
| `no-secrets` | A line that prints a key, a token, a secret or a password |

Why three jobs, and not one? Inside one job, the first failing step stops the steps after it. Say all three checks were steps in one job, and a test failed. The other two checks would never run, so nobody would learn that a test was also edited and a key was also printed. Each job runs on its own. So with three jobs, all three problems are reported.

![On the left, one job with four steps in order: the type check passes, the tests fail on the cutoff test, and the test comparison and the secret check are skipped. On the right, three independent jobs for the same change, each failing on its own. The checks job fails on the cutoff test, tests-unchanged on four removed test lines, and no-secrets on key logging at line 14.](img/jobs-and-steps.png)

*Figure 15.13. One job stops at the first failure. One job per check lets every problem report.*

Each check catches one common mistake, and no more. Review covers what they miss. And the files that run the checks have a named owner ([15.8](approval-scaled-by-risk.md)), because a check is only as strong as those files.

### Which checks stop a merge?

Only the ones the repository requires. Every check is one of two kinds.

- An **advisory check** is the smoke detector. It only reports, and the merge button still works.
- A **blocking check** is the circuit breaker. The pull request cannot join `main` until the check passes.

The check does not decide which kind it is. The repository's settings on GitHub decide.

### How does a check become required?

A person with the right to change the repository's settings turns on a rule for `main`, and names the check in it. The rule is "Require status checks to pass before merging". A check named there is a **required check**: a merge waits until it has passed. This is the wire from the detector to the breaker. The check is the same. Now it stops the merge.

Three more rules sit beside that one:

- "Require a pull request before merging" stops a change that goes straight to `main`, from a person or an agent.
- "Require conversation resolution" stops a merge while a review thread is still open. An AI review is advisory by default ([15.6](ai-review-on-every-pr.md)), and this rule is the simplest way to make its open findings stop a merge.
- "Require approvals" stops a merge without the people that [15.8](approval-scaled-by-risk.md) names.

**At work.** Ana makes `checks` and `tests-unchanged` required on `main`, with conversation resolution on. The `agent-speedup` pull request shows two red marks. The tests fail on the cutoff case. The test comparison fails on the edited expected value. Nothing fails on the debug line that prints the key, so she adds `no-secrets` and makes it required too. The merge button is gray. Nobody had to read the diff to stop it, though someone still will, to learn why an agent did this.

### Try it

In your practice folder from [15.2](github-and-the-pull-request.md#how-do-i-set-up-to-try-this), the checks file is a stub: it has one job that only prints a line. You are reading a checks file here, not code. Its checks run the TypeScript side of the project, whichever language you read in. Fifteen minutes.

1. Send: "Show me the workflow file in this project, and tell me in plain words when it runs and how many jobs it has. Change nothing."
2. Predict in your note. You will split the file into two jobs, one for the type check and one for the tests. If the type check fails, will the tests still report? And will either job stop a merge today?
3. Send: "Make a new branch practice-ci. Change the workflow so it has two jobs, typecheck and tests. Each job does four things in order: fetch the code, set up Node 24, install the packages from the lock file, and run one check. The check in the first job is the type check. The check in the second job is the tests. Change nothing else. Show me the file before you save it." In the file it shows, look for two names under `jobs:`, which are `typecheck` and `tests`. Under each name, look for four steps, the last one a `run` line with the check. Then approve.
4. Send: "Commit it, and switch back to main."

**What you should see.** The stub runs on pull requests to `main`, and its one job only prints a line. After your change, the file has two jobs, `typecheck` and `tests`. Each job reports on its own, so a failing type check does not hide the tests. Nothing was blocked, and that is the right result. On your computer this file only describes the checks. They run, and can be made required, only on GitHub. Making one required is a setting there. You turn it on, and see a merge blocked, in [Lab 15](lab.md).

**The operating rule:** make every check a machine can run a required check, and never mistake an advisory report for a gate.

### Other words you will meet

| Word | What it means |
| --- | --- |
| Workflow | GitHub's name for the checks file. It lives in `.github/workflows/` |
| Continuous integration, or CI | Running checks like these on every change |
| Branch protection | GitHub's name for the set of rules on a branch such as `main`[^github-protected-branches] |
| Ruleset | The newer form of branch protection[^github-rulesets] |
| `permissions: contents: read` | A line in the workflow. With it, the workflow's token can read the code and do nothing else |
| Failing closed | A check that cannot do its job fails. Brightline's scripts fail when they cannot find the branch to compare with, or a folder to search |
| The `tests-changed` label | A marker a person adds to a pull request by hand when a test has to change. `tests-unchanged` then lets it through, and the team asks for a written reason and a named owner's approval |
| An AI review as a gate | Three ways: require conversation resolution, add a required job that fails on an Important finding, or run a security review in your own workflow with your own step that fails on findings |
| Repository secret | Where a key lives. GitHub stores it and gives it to the workflow when it runs. Never commit a key to a file[^github-secrets] |
| `pull_request_target` | A way of starting a workflow that gives it your secrets. Never use it to build or run a pull request's code, which is untrusted[^github-events] |

### In your tool: the details

What each product can block, and how it runs in your own CI. You need none of this for the practice above.

#### Claude Code

*What blocks.* Code Review never approves or blocks. Its check run, *Claude Code Review*, ends as neutral, never as a failure. After some pushes it ends as skipped and keeps the earlier result. To block on its findings, your own workflow reads the severity counts from the check run with `gh api` and fails on an Important finding, or you require conversation resolution.[^anthropic-code-review-pull-requests]

*In your own CI.* The Claude Code GitHub Action, `anthropics/claude-code-action@v1`, runs Claude in your workflows. It is set up with `/install-github-app` or by hand, with an API key or a Claude subscription token stored as a repository secret. Its default trigger, `@claude`, also fires on Code Review's `@claude review`, so set its `trigger_phrase` to something else if you use both.[^anthropic-github-actions]

*The security review Action.* `anthropics/claude-code-security-review` comments on pull requests and reports a findings count. It has no setting to fail the job on findings, so a blocking security review needs your own step that fails when that count is above zero. Its README says it is not hardened against prompt injection and should review only trusted pull requests.[^anthropic-security-review-action]

#### Codex

*What blocks.* OpenAI's documentation names no setting that makes a Codex review block a merge or count as an approval.[^openai-github]

*In your own CI.* `openai/codex-action@v1` runs Codex in a GitHub workflow, with the OpenAI key stored as a repository secret. Only users with write access can run it by default. OpenAI warns to treat pull request text as untrusted input.[^openai-github-action]

#### OpenCode

*What blocks.* OpenCode has no reviewer of its own, so nothing it does blocks a merge.

*In your own CI.* OpenCode 2.2.0, October 27, 2026, stopped publishing its GitHub Action, and its changelog tells users to remove it from workflows.[^opencode-changelog] `opencode run` sends a prompt without the interactive interface, so a review can run in a script or your own CI step.[^opencode-cli]

*Keep it read-only.* Version 2 sets permissions as an ordered list of rules with `allow`, `ask` or `deny`, and the last matching rule wins. For a reviewer, deny edits and allow only read commands such as `git diff`.[^opencode-permissions] OpenCode does not sandbox the agent. A review run in CI has whatever the CI machine gives it, so give it a read-only token and no secrets it does not need.[^opencode-security]

[^github-rulesets]: About rulesets, GitHub.
[^github-protected-branches]: About protected branches, GitHub.
[^github-secrets]: Using secrets in GitHub Actions, GitHub.
[^github-events]: Events that trigger workflows, GitHub.
[^anthropic-code-review-pull-requests]: Read and request reviews on a pull request, Anthropic.
[^anthropic-github-actions]: Claude Code GitHub Actions, Anthropic.
[^anthropic-security-review-action]: claude-code-security-review, Anthropic.
[^openai-github]: Codex in GitHub, OpenAI.
[^openai-github-action]: Codex GitHub Action, OpenAI.
[^opencode-changelog]: Changelog, OpenCode.
[^opencode-cli]: CLI, OpenCode.
[^opencode-permissions]: Permissions, OpenCode.
[^opencode-security]: Security policy and advisories, OpenCode.



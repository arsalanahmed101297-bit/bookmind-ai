# 6.4 Review the result in your own app (/managing-ai-workers/the-review-contract/both-ai-vendors)

---
type: Document
title: "6.4 Review the result in your own app"
description: "How to review a worker's result in Claude, ChatGPT or an open-source tool, step by step, the differences that change what you ask for, and what stays with you."
status: stable
order: 206.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "06"
part: II
expert_status: required
concepts: [ "6.4" ]
last_verified: 2026-10-06
review_by: 2026-11-06
sources:
  - id: anthropic-one-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: anthropic-cowork
    title: "Get started with Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: anthropic-web-search
    title: "Enable and use web search (Claude Help Center, updated 9 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/10684626-enable-and-use-web-search
  - id: anthropic-incorrect
    title: "Claude is providing incorrect or misleading responses. What's going on? (Claude Help Center, updated 16 March 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on
  - id: openai-work-codex
    title: "ChatGPT Work and Codex (OpenAI Help Center, verified 2026-10-06)"
    resource: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
  - id: openai-search
    title: "Searching the web with ChatGPT (OpenAI Help Center, verified 2026-10-06)"
    resource: https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt
  - id: openai-prompting
    title: "Prompting (OpenAI, ChatGPT Learn, verified 2026-10-06)"
    resource: https://learn.chatgpt.com/docs/prompting
  - id: openai-truth
    title: "Does ChatGPT tell the truth? (OpenAI Help Center, verified 2026-10-06)"
    resource: https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
  - id: omnara
    title: "Omnara README (Omnara, GitHub, Apache 2.0, verified 2026-10-23)"
    resource: https://github.com/omnara-ai/omnara/blob/main/README.md
  - id: omnara-permissions
    title: "Tool permissions (Omnara documentation, verified 2026-10-23)"
    resource: https://docs.omnara.com/tools/permissions
  - id: opencode-permissions
    title: "Permissions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/permissions/
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two shops both give receipts, but neither tells you whether the price matched the shelf label. You check that yourself.

**What you will learn.** Where Claude, ChatGPT and an open-source tool let you put your checks in before a run, watch and approve as it works, and see its record and citations.

**Why it matters.** The Review Contract describes the work, not the tool, so it works on either AI vendor without changes.

## How to review a result in your app

These are the steps for a review in your app, with your Review Contract ([6.1](agree-the-checks.md)), a worker's result, and the files you check it against. Keep this page open beside your app while you review, and follow your tab.

### Claude

These steps were checked on 18 November 2026. Where the one conversation has rolled out, a Claude conversation becomes a task when the work needs it. Anthropic's pages still call a task Cowork ([the Tour](../../claude-and-chatgpt-2/tour/claude-conversations.md)). Without that, the steps still work in an ordinary chat, except step 2.[^anthropic-cowork]

1. **Put the contract's evidence lines in the brief, before the run.** Anthropic's help center lists the outcome, format and inputs to include, and names no review criteria, so add yours where the brief says what comes back:[^anthropic-one-claude]

   ```text
   For every line of the expense claim, name the receipt it came
   from and the rule that allows it. Send back the task record too.
   ```

2. **Review Claude's approach before you let the task run,** and check that it covers every check of your contract.[^anthropic-cowork]
3. **Watch the work.** Progress indicators show what Claude is doing at each step. You can open the same session in another app, such as the phone app, to watch it, answer Claude's questions or redirect the work.[^anthropic-cowork]
4. **For work with money, messages sent in your name or important files, stay close or switch the permission setting in the message box to Manual,** where Claude pauses and asks you to approve actions.[^anthropic-cowork]
5. **Open each cited source, and check each claim against it, not against how sure it sounds.** Responses that use web search include citations.[^anthropic-web-search] Claude can produce incorrect or misleading responses, including quotes that look trustworthy but are not based on fact, and the originals may have context the summary left out.[^anthropic-incorrect]
6. **Check it worked.** The session keeps the task's progress and its finished output.[^anthropic-cowork] A pass is every check of your contract passing on the output itself, with each total worked out again from the sources. Progress that shows every step as done tells you what Claude did, not whether the rows are right. Then decide each finding yourself: approve, fix or return ([Lab 6, Task 9](lab.md#task-9-approve-fix-or-return)).

You use these steps in Lab 6, [Task 11](lab.md#task-11-a-second-reviewer).

### ChatGPT

These steps were checked on 6 October 2026. Work, where ChatGPT does longer, multi-step jobs, needs an eligible paid plan. Without it, follow the same steps in an ordinary chat, and send the checks with your first message.[^openai-work-codex]

1. **Add the files, constraints and review criteria to the request,** as OpenAI's guide to Work says, before the work starts:[^openai-work-codex]

   ```text
   Review criteria: Each receipt appears exactly once. Every line of
   the claim names its receipt and its rule. The total matches a total
   worked out again from the receipts, to the cent.
   ```

2. **Watch the work.** In a longer task, you can review progress, answer questions, change direction and approve important actions.[^openai-work-codex]
3. **Require your approval before ChatGPT sends, publishes or changes information others rely on,** as OpenAI's prompting guide advises.[^openai-prompting]
4. **Open each cited source, check that it supports the answer, and check its date.** Responses that use web search may include citations, and a Sources view when it is available. OpenAI says citations can be incomplete, outdated or incorrect.[^openai-search]
5. **Check important facts against a reliable source before you accept them.** ChatGPT can produce incorrect or misleading output, and it can sound confident when it is wrong, so treat its output as a first draft.[^openai-truth]
6. **Check it worked.** You review the result in the same chat, and you ask for changes there.[^openai-work-codex] A pass is as in Claude's step 6: every check of your contract passing on the output itself. Then decide each finding yourself: approve, fix or return.

You use these steps in Lab 6, [Task 11](lab.md#task-11-a-second-reviewer).

### Open source

These steps, for readers who run their own tools, were checked on 23 October 2026. Omnara is a runtime for AI Workers that you can host yourself, with no plan to buy.

1. **Put the contract's evidence lines in the brief,** as on any capable worker. The tool pages cited here describe no citation feature, so ask for evidence on every row, as in Claude's step 1.
2. **Watch where its agents work.** Omnara's agents work in Slack and Discord, where they reply, ask questions and ask for approvals.[^omnara]
3. **Set every Omnara tool that can send or change something to always ask, before a run you will not watch.** Each tool is always allow, always ask or always deny, and its built-in tools and your own start at always allow.[^omnara-permissions]
4. **If you use OpenCode instead of Omnara, write a rule that changes any such action to ask or deny.** In OpenCode, every action starts allowed, except reading a file of sensitive settings.[^opencode-permissions]
5. **Follow Omnara's self-hosting guide for a real deployment.** Its local settings are insecure on purpose.[^omnara]
6. **Check it worked.** Omnara saves every step of every agent, so an agent can carry on after a crash or restart. If you host it yourself, that record is in your own database.[^omnara] The model can still be wrong, whoever makes it, so run your contract's checks on the result as in Claude's step 6, and decide each finding yourself.

Lab 6 runs in Claude or ChatGPT. Use these steps when you review a run in your own tool.

## What changes a step

Between the two AI vendors, only these differences change what you do.

- **Row-level evidence.** Neither AI vendor's help pages promise a citation to a row in your own file. So ask for file-and-row evidence in the brief, and verify it.
- **The record.** For an everyday user, the help pages describe progress and results kept with the session or conversation, and no separate audit log. Plans for organizations add logs ([10.6](../governance-and-responsible-use/both-ai-vendors.md)).

## What stays the same

On either AI vendor or an open-source tool, the record shows what the worker did, not whether the work was right. The checks, the final decision and the signature stay with you ([6.1](agree-the-checks.md), [6.2](good-and-plausible.md), [6.3](work-you-did-not-watch.md)).

## Product reference

This is for looking things up, not for reading through. The figure puts the two AI vendors side by side.

![Figure: "The same review on both vendors," updated on 4 November 2026. A table sets Claude against ChatGPT for six review tasks: set the checks, monitor the work, inspect the record, verify citations, control consequential actions, and expect possible errors, with each vendor's own advice in its column, as the Claude and ChatGPT tabs above list line by line. A gold box reads: ask explicitly for file-and-row evidence, a reason, policy section and source on every row. Do not assume automatic row-level citations. A footer reads: independent verification, the decision and the signature stay with you.](img/both-ai-vendors.png)

*Figure 6.7. The same review on both AI vendors, as verified 6 October 2026 and updated 4 November 2026. Claude's column was checked again on 18 November 2026.*

[^anthropic-cowork]: Get started with Claude Cowork, Claude Help Center.
[^anthropic-one-claude]: Claude Cowork and chat are one Claude, Claude Help Center.
[^anthropic-web-search]: Enable and use web search, Claude Help Center.
[^anthropic-incorrect]: Claude is providing incorrect or misleading responses. What's going on?, Claude Help Center.
[^openai-work-codex]: ChatGPT Work and Codex, OpenAI Help Center.
[^openai-prompting]: Prompting, ChatGPT Learn, OpenAI.
[^openai-search]: Searching the web with ChatGPT, OpenAI Help Center.
[^openai-truth]: Does ChatGPT tell the truth?, OpenAI Help Center.
[^omnara]: Omnara, README on GitHub.
[^omnara-permissions]: Tool permissions, Omnara documentation.
[^opencode-permissions]: Permissions, OpenCode v2 documentation.



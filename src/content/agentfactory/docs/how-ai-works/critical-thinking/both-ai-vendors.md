# 0.4.7 Check an answer with your app's tools (/how-ai-works/critical-thinking/both-ai-vendors)

---
type: Document
title: "0.4.7 Check an answer with your app's tools"
description: "How to use the features in Claude, ChatGPT and an open-source tool that help you check an answer, step by step, with the product details as a dated reference."
status: stable
order: 15.7
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.4"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route
concepts: [ "0.4.7" ]
last_verified: 2026-11-23

sources:
  - id: anthropic-model-settings
    resource: https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings
    title: "Change the model, effort, and thinking settings (Claude Help Center, verified 2026-11-23)"
  - id: anthropic-web-search
    resource: https://support.claude.com/en/articles/10684626-enable-and-use-web-search
    title: "Enable and use web search (Claude Help Center, verified 2026-11-23)"
  - id: anthropic-project-rag
    resource: https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects
    title: "Retrieval augmented generation (RAG) for projects (Claude Help Center, verified 2026-11-23)"
  - id: anthropic-incognito
    resource: https://support.claude.com/en/articles/12260368-use-incognito-chats
    title: "Use incognito chats (Claude Help Center, verified 2026-11-23)"
  - id: openai-deep-research
    resource: https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt
    title: "Deep research in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
  - id: openai-projects
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
    title: "Projects in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
  - id: openai-temporary
    resource: https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt
    title: "Temporary chat in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
  - id: ollama-faq
    resource: https://docs.ollama.com/faq
    title: "FAQ (Ollama, verified 2026-11-23)"
  - id: ollama-quickstart
    resource: https://docs.ollama.com/quickstart
    title: "Quickstart (Ollama, verified 2026-11-23)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Three kitchens can cook the same recipe. The ovens are different, so you look for the controls before you start.

**What you will learn.** Where the features that make checking easier are in your own app, Claude, ChatGPT or an open-source tool, so you can use them in Lab 0.4. And the one difference that changes how you work.

**Why it matters.** The checkpoint is the same on every tool ([0.4.2](the-checkpoint.md)). But some tools show you their sources and their thinking, and some do not.

## How to check an answer with your app's tools

The ideas in [0.4.1](why-judgment-is-the-job.md) to [0.4.6](delegate-not-surrender.md) are true on every tool. These steps show where your tool's features are, so you can use them to apply the ideas. Open your app beside this page and follow your tab.

### Claude

*As verified 23 November 2026.* A project that holds many files needs a paid plan: Claude then searches the project's files for the parts it needs. On the Free plan, attach the file to the chat instead.[^anthropic-project-rag]

1. **Open the "Thinking" section above the answer.** Click it to read a summary of how Claude reasoned. Read it as a draft to check, not proof: visible thinking does not add a truth-checker ([0.1.3](../what-ai-actually-is/from-predictor-to-worker.md)). On Claude's current models thinking cannot be turned off ([0.1.4](../what-ai-actually-is/both-ai-vendors.md)). For more of it, click the model name next to the send button and choose a higher "Effort".[^anthropic-model-settings]
2. **Turn on web search, and ask for sources.** Click the "+" button at the lower left of the chat window, and choose "Web search". A checkmark shows it is on. On accounts with the new Claude experience, where chat and tasks are one conversation, there is no switch: Claude searches when it helps. Every answer from web search includes citations.[^anthropic-web-search] Send:

   ```text
   Give me three published sources on how much water an adult should drink each day.
   ```

3. **Open each source.** Confirm that it exists and says what the answer claims. If a source does not exist, or says something else, treat the claim as unsupported until you check it somewhere else.
4. **Give it the real data.** Attach the file the claim is about, such as a spreadsheet saved as a `.csv` file, and ask it to use code. For example:

   ```text
   Use code on this file, not your memory, and show me the rows you used. What do the amounts dated in March add up to?
   ```

5. **Get a fresh answer.** Start a new chat, so the AI does not stay with its first answer, and attach the file again: a new chat does not have it. To keep memory out as well, make it an incognito chat: in a new chat outside a project, click the ghost icon in the upper right corner. An incognito chat does not use Claude's memory.[^anthropic-incognito] Or click the model name next to the send button, choose another model, and compare the answers.[^anthropic-model-settings]
6. **Check it worked.** Pick the one claim your decision rests on. A pass is a line you found in a source you opened, or in the original file, that says it. If you cannot find one, treat the claim as unsupported.

### ChatGPT

*As verified 23 November 2026.* Deep research has a monthly allowance that depends on your plan. A counter in the app shows how many tasks are left.[^openai-deep-research]

1. **Start a deep research task, and ask for sources.** Type /Deepresearch in the message box, or choose Deep research from the tools menu (+) or the sidebar. The report comes with citations or source links. OpenAI's pages cited here do not say whether ChatGPT shows its reasoning, so check the sources, not the reasoning.[^openai-deep-research] Send:

   ```text
   Give me three published sources on how much water an adult should drink each day.
   ```

2. **Open each source.** Confirm that it exists and says what the report claims. If a source does not exist, or says something else, treat the claim as unsupported until you check it somewhere else.
3. **Give it the real data.** Attach the file the claim is about to the chat. Or select New project in the sidebar and add the file there, so every chat in the project can use it.[^openai-projects] Ask it to use code. For example:

   ```text
   Use code on this file, not your memory, and show me the rows you used. What do the amounts dated in March add up to?
   ```

4. **Get a fresh answer.** Open a new chat, select Temporary, and choose Unpersonalized before your first message. OpenAI's page does not say where Temporary sits. In the app it is a dashed circle at the top right of a new chat. Check the setting before you type. A Personalized temporary chat can still use your saved memories and custom instructions. An Unpersonalized one uses neither. You cannot change it after the chat starts, and the chat is not saved in your history.[^openai-temporary] Attach the file again: a new chat does not have it.
5. **Check it worked.** Pick the one claim your decision rests on. A pass is a line you found in a source you opened, or in the original file, that says it. If you cannot find one, treat the claim as unsupported.

### Open source

*As verified 23 November 2026.*

1. **Install Ollama.** Download it from Ollama's own site, for macOS, Windows or Linux. Download models only from there.[^ollama-quickstart]
2. **Run a model.** Open the app and choose a local model. That is all you need. If you already use a terminal, the window where you type commands, you can type `ollama run gemma4:e2b` there instead: Ollama downloads the model and starts a chat on your computer. Type `/bye` to leave.[^ollama-quickstart]
3. **Ask the same question.** Ollama runs a model on your own computer, so you can ask the same question to a different model, as a second opinion.[^ollama-faq]
4. **Check which kind you are running.** Its makers say they do not see your prompts or data when you run a model locally. That is true for local models only: Ollama also offers cloud models, which send your prompts to its servers. At setup, choose a local model rather than signing in for cloud models. Ollama can also run in a local-only mode, and its FAQ shows how to turn it on.[^ollama-faq]
5. **Check it worked.** Where the two answers disagree, check the claim against the original file. Small local models make more mistakes. Use one as a second opinion, never as the final judge.

You use these steps in Lab 0.4: the file and code in [Step 4](lab.md#step-4-check-the-numbers-against-the-file), a second answer in [Step 6](lab.md#step-6-ask-ai-to-argue-against-the-memo), a chat without memory in [Step 7](lab.md#step-7-does-the-wording-change-the-answer), and sources in [If you want more](lab.md#if-you-want-more). The lab runs in Claude or ChatGPT.

## What changes a step

Does the tool show sources and reasoning that you can inspect? If it does not, treat every claim as unsupported until you check it somewhere else.

## What stays the same

A well-written answer is a draft. Checking it is your job ([0.4.1](why-judgment-is-the-job.md)). And a number that a decision depends on comes from code run on the original file, which you then check ([0.4.3](claims-evidence-assumptions.md)).

[^anthropic-model-settings]: Change the model, effort, and thinking settings, Claude Help Center, verified 23 November 2026.
[^anthropic-web-search]: Enable and use web search, Claude Help Center, verified 23 November 2026.
[^anthropic-project-rag]: Retrieval augmented generation (RAG) for projects, Claude Help Center, verified 23 November 2026.
[^anthropic-incognito]: Use incognito chats, Claude Help Center, verified 23 November 2026.
[^openai-deep-research]: Deep research in ChatGPT, OpenAI Help Center, verified 23 November 2026.
[^openai-projects]: Projects in ChatGPT, OpenAI Help Center, verified 23 November 2026.
[^openai-temporary]: Temporary chat in ChatGPT, OpenAI Help Center, verified 23 November 2026.
[^ollama-faq]: FAQ, Ollama documentation, verified 23 November 2026.
[^ollama-quickstart]: Quickstart, Ollama documentation, verified 23 November 2026.



# 0.1.2 Why it behaves the way it does (/how-ai-works/what-ai-actually-is/why-it-behaves)

---
type: Document
title: "0.1.2 Why it behaves the way it does"
description: "Tokens, the context window, a sure style and uneven skill: four ideas that explain miscounted words, chats that forget, and sure wrong answers."
status: stable
order: 11.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.1"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.1.2" ]
last_verified: 2026-10-16

sources:
  - id: v1-what-ai-actually-is
    resource: https://agentfactory1.panaversity.org/docs/what-ai-actually-is-crash-course
    title: "What AI Actually Is: A Crash Course (Panaversity, first edition, read in full 2026-10-16)"
  - id: anthropic-models-overview
    resource: https://platform.claude.com/docs/en/about-claude/models/overview
    title: "Models overview (Anthropic platform documentation, verified 2026-11-21)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A radio presenter reads the weather forecast every evening in the same calm, sure voice. On the evenings when the forecast is wrong, her voice sounds exactly the same. The voice is her style. It tells you nothing about the forecast.

**What you will learn.** What the model actually reads, and where your chat history lives. Why the AI can sound sure when it is wrong.

**Why it matters.** Each of these has a cause on this page: a wrong letter count, a new chat that forgets the last one, and a sure answer that is wrong. Once you know the cause, you can expect it instead of being surprised by it.

## Tokens

### What are tokens, and what do they measure?

The model does not read letters, or even whole words. It reads **tokens**, which are pieces of words. A short, common word may be one token, and a long word may be two or three. How many tokens a word takes depends on the model. On Claude's current models, an English word is a little under two tokens on average.[^anthropic-models-overview] The model reads and writes tokens, so tokens are what everything is counted in: the size of the context window, a plan's usage limits and the price a developer pays. Text in other scripts, such as Urdu, Arabic, Hindi or Chinese, is usually cut into more tokens per word, so the same message fills the window faster and costs more.[^v1-what-ai-actually-is] A typo rarely matters, because a misspelled word still becomes pieces close to its meaning. An image is cut into small pieces too, which is why small print in a picture is hard for the model to read.

The strawberry test shows a problem that tokens cause. Ask a model how many r's are in "strawberry". Some models miscount, then get it right once they spell the word out one letter at a time.[^v1-what-ai-actually-is] The model never saw the letters, only the tokens. Spelling the word out puts each letter into the window as its own piece. The test is famous, so a model may know this answer by heart. Try a word you invent as well. Nobody ever wrote down how many r's it has, so the model cannot give an answer it learned by heart.

![The model sees tokens, not letters: everything in the window is counted in tokens. The word "strawberry" is split into three boxes, "str", "aw" and "berry", with the note "for example: a few tokens, not ten letters". Beside it, "The context window" is drawn as a row of empty token boxes that ends at a red dashed line labeled "limit". A banner reads: "The model never saw each r on its own."](img/tokens.png)

*Figure 0.1.4. The model sees tokens, not letters, and the window holds a limited number of tokens.*

## The context window

### What is the context window, and what is a system prompt?

The context window is everything the app puts in front of the model for one reply. It is the only place the model sees your situation. It holds these things:

- your message
- the standing instructions, the rules set for every conversation, such as the **system prompt**, which is the part the app's maker writes and puts first
- any files attached for this reply
- notes from a memory feature, if one is on
- results from tools, such as a web search
- the conversation so far, or a summary of its older parts

The app builds the window again for every reply, from text it has stored. The model can use anything in the window. Anything outside it does not exist for this reply. The model is not refusing to look. There is nowhere else to look.

### What does a "one-million-token context window" mean?

It means the window can hold about a million tokens at once. On Claude's current models, that is roughly 555,000 English words, or several long books.[^anthropic-models-overview] It is big, but it is still a limit, and a long chat or a long file fills it. [Chapter 8](../../managing-ai-workers/context-memory-knowledge-and-state/overview.md) shows what happens at the limit, and what to do.

### Where is chat history kept, and how does it get into the window?

The app keeps each chat as text in your account on the AI vendor's computers, and replays it before every reply ([0.1.1](the-machine.md)).[^v1-what-ai-actually-is] So a long chat uses up a plan's usage limit faster.

![Chat history is context, replayed: before every reply, the app sends the whole chat to the model again. Four dashed boxes, each a context window, show Turn 1, Turn 2, Turn 3 and Turn 40. Turn 1 holds message 1. Turn 2 holds message 1, reply 1 and message 2. Turn 3 holds every message and reply so far. In Turn 40 the window is full: the oldest turns are crossed out, a note reads "cut or squashed to make room", and a "summary of turns 1–24" sits above messages 25 to 40. Under each window, an arrow leads to "frozen model reads it all, from scratch". A banner reads: "The model never remembers the chat. The app sends the whole chat again every turn, and when the window fills, the oldest turns are cut."](img/history-replay.png)

*Figure 0.1.5. Inside one chat, the app sends the whole conversation again before every reply.*

Figure 0.1.6 shows the overview's question in three windows. A new chat is a new window. The policy stays in the old chat's stored history, and the model learned nothing.

![Why a new chat forgets: each reply sees only its own context window. Three panels show three times on a clock. The first panel is Chat 1, at 0:00. Its window holds "your question: does a $7,800 invoice need approval?" and "no policy in the window". The answer is "a guess, from training". The second panel is Chat 1, continued, at 0:05. Its window holds your question and "AP policy version 3, attached". The answer is "Yes: over $5,000 needs the controller's approval". The third panel is Chat 2, a new chat, at 0:10. Its window again holds no policy, and the answer is "a guess again". Below, "chat history, stored by the app" has one arrow, into the 0:05 window only. A dashed note beside Chat 2 reads "a memory feature, if on, may put a saved note back". A banner reads "Nothing was learned at 0:05. The app put the policy in the window."](img/new-chat.png)

*Figure 0.1.6. A new chat is a new window. The stored history stays outside it.*

## Confidence as style, and sycophancy

### Why does the AI sound sure even when it is wrong, and why does it tend to agree with you?

Training did more than teach the model what usually comes next. In its last stage, people rated the model's answers, and the model was adjusted toward the answers they rated highly.[^v1-what-ai-actually-is] People tend to rate confident, fluent and agreeable answers highly. So training built a sure, tidy style into the model. It is one manner, used for every answer.

Even "I cannot know Brightline's policy" is a trained manner. It is the more useful answer, but it is not a check.

**Sycophancy** is that manner leaning toward your own view. Your view is in the window, in the way you ask. If you ask "Isn't the approval limit $10,000?", you put $10,000 in front of the model, with the answer you hope for. Because of its trained lean toward agreeing, the model may then agree that the limit is $10,000.

[Chapter 6](../../managing-ai-workers/the-review-contract/good-and-plausible.md) shows how to tell a good answer from one that only looks good.

## The jagged frontier

### Why is the AI brilliant at one task and poor at an easier one next to it?

Because its skill comes from what it learned in training, and that skill is uneven. A person's skill is fairly even. Someone who can solve a hard math problem can almost always do easy math. The model may write a clear summary of a long policy, then miscount the letters in a short word. This uneven shape is called the **jagged frontier**. Jagged means uneven, with sharp ups and downs.

The model tends to be strong at tasks that were common in its training text and written out clearly. It tends to be weak at tasks it rarely saw, and at tasks that depend on what it cannot see, such as the letters inside a token. Each model has its own shape, and each new model is trained again, so the frontier moves. It has to be re-tested each time, not remembered from an older model.

![The jagged frontier: the model's skill does not follow how hard a task looks. A chart has capability on the vertical axis, from "useless" to "superhuman", and different tasks, not ordered by difficulty, along the bottom. A dashed line near the top reads "what we expect: smooth". A zigzag line rises to "explain quantum mechanics", drops to "count the r's in strawberry", rises to "draft a legal clause", drops to "a 3-step logic riddle", rises to "write working code" and drops to "add two big numbers in its head". A banner reads: "Skill does not follow difficulty. The easy task it fails is the one you would never think to check."](img/jagged-frontier.png)

*Figure 0.1.7. The model's skill is uneven, and an easy task can be the one it fails.*

[^v1-what-ai-actually-is]: What AI Actually Is: A Crash Course, Panaversity, first edition.

[^anthropic-models-overview]: Models overview, Anthropic platform documentation.



# 0.4.6 Delegate the work, keep the judgment (/how-ai-works/critical-thinking/delegate-not-surrender)

---
type: Document
title: "0.4.6 Delegate the work, keep the judgment"
description: "Offloading, deferral and surrender, and the habits that keep your judgment strong."
status: stable
order: 15.6
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.4"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route
concepts: [ "0.4.6" ]
last_verified: 2026-11-10

sources:
  - id: osmani-cognitive-surrender
    resource: https://addyosmani.com/blog/cognitive-surrender/
    title: "Cognitive Surrender (Addy Osmani, 5 May 2026, verified 2026-11-11)"
  - id: osmani-agents-post
    resource: https://x.com/addyosmani/status/2117512471930167377
    title: "Critical thinking when agents do the work (Addy Osmani, post on X, 3 November 2026, verified 2026-11-11)"
  - id: shaw-nave-2026
    resource: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646
    title: "Thinking: Fast, Slow, and Artificial. How AI is Reshaping Human Reasoning and the Rise of Cognitive Surrender (Steven D. Shaw and Gideon Nave, Wharton School Research Paper, SSRN 6097646, 2026; figures as reported by PsyPost, 30 April 2026, verified 2026-11-11)"
  - id: anthropic-coding-skills
    resource: https://www.anthropic.com/research/AI-assistance-coding-skills
    title: "How AI assistance impacts the formation of coding skills (Anthropic, 29 January 2026, verified 2026-11-11)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** People who always follow GPS directions stop learning the roads. This is not a problem until the signal fails, in a part of town they have driven through a hundred times.

**What you will learn.** The three stages that lead from using AI to no longer judging it, what the research shows so far, and the habits that keep your judgment strong.

**Why it matters.** The skills in this chapter need practice. Early research shows what happens when people let AI do the thinking.

## The three stages

### How do people stop judging?

Addy Osmani, who works on Claude Code at Anthropic,[^osmani-cognitive-surrender] described three stages by which people stop judging AI's work.[^osmani-agents-post] The name of the last, **cognitive surrender**, comes from two researchers at the Wharton School, Steven Shaw and Gideon Nave. Osmani used their term for agents.[^shaw-nave-2026]

| Stage | What happens | How you can tell (the book's test) |
| --- | --- | --- |
| **Offloading** | The AI does the work. The conclusion is still yours, and you check it | You can say what you checked |
| **Deferral** | You accept the AI's output without doubting it | You could name a check, but you do not do it |
| **Surrender** | The AI's answer becomes your answer | You can no longer say what you would check |

![Three boxes, each set a little lower and further right than the one before. Offloading: the AI does the work and you check the conclusion, I check. Deferral: you stop doubting the AI's output, I could check but I do not. Surrender: the AI's answer becomes your answer, I cannot check.](img/three-stages.png)

*Figure 0.4.8. From offloading to surrender. Offloading is the goal. Surrender is the failure.*

Which stage was Dave in? He was about to forward the memo without checking it. But Dave is a controller. If Ana had asked him, he could have named the checks: the vendor terms, the September invoices, the cost of borrowing. He could check, and he was not going to. That is deferral. If it becomes a habit, the third stage follows.

### What does the research show so far?

Two studies from 2026 measured what happens in the short term.

**Shaw and Nave** ran three experiments with about 1,400 people in total. Each person solved logic puzzles, some with a chatbot secretly set to give correct answers on some puzzles and confident wrong answers on others. Figure 0.4.9 shows the first experiment, with 440 people.[^shaw-nave-2026]

![A bar chart of puzzles answered correctly. Working alone: about 46%. With a chatbot that was right: about 71%. With a chatbot that was wrong: about 31%.](img/chatbot-study.png)

*Figure 0.4.9. People with a wrong chatbot did worse than people who worked alone. Source: Shaw and Nave, 2026.*

When people opened the chat and its advice was wrong, they followed it about 80% of the time, and they felt more confident even then. In the third experiment, people who got a small reward for correct answers, and saw at once whether they were right, rejected wrong advice about twice as often: 42% of the time, against 20%. Feedback helps.

**Anthropic** tested 52 engineers who were learning a coding tool that was new to them. On a quiz afterward, the group that used AI scored 50% on average, and the group that wrote the code themselves scored 67%. Inside the AI group, people who used AI to ask questions and get explanations scored much higher than people who let AI do the whole task.[^anthropic-coding-skills]

Neither study followed people for years, so long-term loss of skill is a risk, not yet a measured fact. But a person who has not built a skill yet cannot use that skill when the AI is wrong.

## Keeping your judgment

### What should you give to AI, and what should you keep?

Give AI the small choices, where a mistake costs little, such as choosing between three similar hotels. Keep the thinking yourself where a mistake is expensive, such as a payment policy.[^osmani-agents-post] This is the rule from [0.4.5](deciding-and-explaining-why.md), used on your own attention. You can give AI the work, and much of the checking. You cannot give it the responsibility. In Osmani's words, "a human has to take responsibility."[^osmani-agents-post]

### How should you read an AI's report?

First look at what the AI actually did and produced: the file, the number, the test result, or the log, which is the record of what happened. Read its summary after that. Summaries often sound more successful than the evidence. Also decide what "checked" means before the work starts, not after you see the result.[^osmani-agents-post]

### Which habits keep the skill strong?

- **Think first, then ask.** Write your own short answer before you ask the AI. You learn from the difference between your answer and the AI's answer.
- **Estimate before you calculate.** Say "about 40 invoices" before you count 43. If your estimate and the result are far apart, one of them is wrong.
- **Explain it back.** If you cannot explain something in your own words, you have not learned it yet.
- **Notice your own reaction.** Before you accept or reject an answer, ask: What influenced me? What am I assuming? What else could be true? Thinking about your own thinking is called **metacognition**. The shortest form is one question: am I thinking with the AI, or is the AI thinking for me?
- **Talk it through with people.** Discuss a decision with a colleague before you make it. A person who knows your situation notices things that an AI cannot.
- **Choose which skills to give up.** List the skills you no longer use. Decide deliberately which ones the AI can keep doing for you.

**For teams.** People practice what is measured. If a team counts only speed and volume, the checkpoint is the first thing people skip. So count the checking as part of the work: what was checked, and what it caught.

Using AI less is not the answer. Use it fully, and keep the judgment.

[^osmani-cognitive-surrender]: Addy Osmani, "Cognitive Surrender," addyosmani.com, May 5, 2026. Read November 10, 2026. His earlier essay on the same subject. Source for his role, and for his definitions of offloading and surrender.
[^osmani-agents-post]: Addy Osmani, "Critical thinking when agents do the work," post on X, November 3, 2026. Read November 11, 2026. Source for the three stages, the rule on what to give to AI, the quotation, and reading evidence before summaries.
[^shaw-nave-2026]: Steven D. Shaw and Gideon Nave, "Thinking: Fast, Slow, and Artificial. How AI is Reshaping Human Reasoning and the Rise of Cognitive Surrender," Wharton School Research Paper, SSRN 6097646, 2026. Figures as reported by PsyPost, April 30, 2026.
[^anthropic-coding-skills]: Anthropic, "How AI assistance impacts the formation of coding skills," randomized controlled trial, arXiv 2601.20245, 2026. Figures read on Anthropic's own page, anthropic.com, on November 11, 2026.



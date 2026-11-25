# 19.15 Answers that cite, or abstain (/building-ai-workers/business-data-and-retrieval/answers-that-cite-or-abstain)

---
type: Document
title: "19.15 Answers that cite, or abstain"
description: "Return passages with citations a person can check, abstain below a threshold, and let the AP expert decide which documents count."
status: stable
order: 319.15
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:25Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.15" ]
objectives:
  - { id: CCDV-F.D6.S1, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-21T00:02:25Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Ask a careful lawyer a question her firm's contracts do not cover, and she says, "Our contracts don't address that. Let me check." She does not quote the nearest clause as if it answered you. And when she does answer, she tells you which clause, so you can read it yourself.

**What you will learn.** How a policy search cites what it found, says so when nothing is close enough, and lets the AP expert decide which documents count.

**Why it matters.** There is always a nearest passage, even for a question the policies do not cover. Without a lowest score it accepts, the tool hands the model the closest wrong rule.

**One request, start to finish.** Two questions reach `search_policy`, each from Cedar Ridge.

1. **"Who approves an invoice over $3,000?"** The nearest passage is approvals, line 5: "An invoice over $2,500.00 needs the general manager's approval before payment," with a high similarity. The tool returns it, cited by document, file and line, and the model answers: "The general manager (Invoice approvals, line 5)."
2. **"What is the capital of France?"** Every passage is far away, with a similarity near zero. The tool returns no passages, `abstained: true`, and a message: "No policy passage is close enough to this question. Say that the policies do not answer it, and ask the AP lead." The model says the policies do not cover it.

### When should a search say it found nothing?

Retrieval always returns *something*: there is always a nearest passage. So a good retrieval tool needs a **threshold**, a lowest similarity it accepts. Below it, the tool **abstains**: it says it found nothing close enough, rather than offering the closest wrong passage. Above it, the tool returns each passage with a **citation**: the document's title, its file and its line, so a person can check it in one look.

### Who decides which documents count?

Four decisions belong to the expert, not the builder, and the lab records each in `docs/data-spec.md`:

| Decision | Cedar Ridge's AP lead decided |
| --- | --- |
| Which documents count | The three current policies. Not the old pasted email from 2024, which says approvals start at $5,000, because it was never a policy and it is wrong now |
| How documents are split | One passage per rule, so an answer cites one rule |
| What a citation looks like | Document title, file and line: "Invoice approvals, line 5" |
| When to abstain | When no passage reaches the threshold, measured on the question set ([19.16](measuring-retrieval.md)) |

The first decision is enforced by the loader, not by the model. Each company's policy folder has a short list of its documents, with a column saying whether each one counts. The loader loads only those that do. The old email never reaches the database, so no search can ever find it.

### Can a passage give the model instructions?

Passages are untrusted text. A policy passage is text written by people, read by the model as data, never as instructions to it ([17.7](../connectors-and-mcp/untrusted-output.md)). The tool's description says so, and the model must cite what the tool returned, not what it remembers. If the tool abstained, the model says so. It never fills the gap from its own knowledge. A screen follows the same rule: in [Chapter 20](../mcp-apps/untrusted-text-on-the-screen.md), the page shows a passage or a note as text, never as page code.

**At work.** In [Lab 19](lab.md), Task 12, Claude Code interviews the builder, who plays Luis, about the four decisions. When it asks what to do with `old-email-approvals-2024.md`, the builder answers as Luis: "It doesn't count. Our rule is $2,500, in the approvals policy." Claude Code keeps it `no` in the list, and the loader's report confirms: `not loaded (the AP lead said they do not count): old-email-approvals-2024.md`.

**The operating rule:** return passages with citations a person can check, abstain below a threshold, and let the AP expert decide which documents count. Enforce that decision in the loader, where the model cannot override it.

![Two answers side by side. Left: the question who approves an invoice over $3,000, an arrow to one passage with a high similarity score, and the answer the general manager, with a citation tag reading Invoice approvals, line 5, data-cedar/policies/approvals.md. Right: the question what is the capital of France, arrows to the nearest passages, each with a similarity near zero and all below a dashed threshold line, and the answer the policies do not cover this, labeled abstained. Below, a crossed-out document labeled old email 2024, not loaded.](img/chapter-19-cite-or-abstain.png)

*Figure 19.26. Above the threshold, cite. Below it, abstain. A document that does not count is never loaded at all.*



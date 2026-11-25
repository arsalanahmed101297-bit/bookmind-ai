# Check yourself (/building-ai-workers/code-review/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for the whole chapter: the flashcards, and a final quiz round from all ten lessons."
status: stable
order: 315.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:29Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.1", "15.2", "15.3", "15.4", "15.5", "15.6", "15.7", "15.8", "15.9", "15.10" ]
chapter_quiz: true
last_verified: 2026-10-31
generated:
  at: 2026-11-23T16:16:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Check what you remember from this chapter. Answer each flashcard in your head, then turn it over and choose Got it or Missed it. Cards you do not know yet come back sooner. The quiz mixes the questions from this chapter's pages and asks 10 at a time.

**Before you move on.** You should be able to do these without notes:

1. Say why "Done. All tests pass." is a claim, and name three ways real output can still be weak evidence.
2. Name the four layers of trust in agent-written code, and show from a branch's history that its tests came first and failed for the right reason.
3. Say what a pull request holds that a file does not, and what it still lacks that evidence supplies.
4. Read a short diff and say what one changed character does to the program's meaning.
5. Show where your desktop app displays the agent's changes, and say why you still read `git diff main...<branch>` before a pull request.
6. Name three git commands to approve without worry, and two to refuse until you know exactly what they remove.
7. For a described bug, name the check that should catch it, and say whether that check is blocking.
8. Write three lines of a review rules file, and say why it is read from `main`.
9. Say what to do with an Important finding, a nit and a pre-existing bug.
10. Set the risk tier for a described change, and say who must approve it.
11. Explain when a feature flag that is off lowers the risk of a merge. Say what still takes effect at the merge, and how you would undo it.

From [Chapter 16](../skills-and-plugins/overview.md) on, every change to `brightline-ap` arrives as a reviewed pull request.



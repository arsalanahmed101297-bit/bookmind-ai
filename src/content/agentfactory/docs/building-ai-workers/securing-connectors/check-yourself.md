# Check yourself (/building-ai-workers/securing-connectors/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for the whole chapter: the flashcards, twelve questions that mix the concepts, and a final quiz round."
status: stable
order: 318.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-02T18:20:57Z
chapter: "18"
part: III
expert_status: builder-only
concepts: [ "18.1", "18.2", "18.3", "18.4", "18.5", "18.6", "18.7", "18.8", "18.9", "18.10", "18.11", "18.12", "18.13", "18.14", "18.15", "18.16", "18.17" ]
chapter_quiz: true
last_verified: 2026-11-02
generated:
  at: 2026-11-02T18:20:57Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Check what you remember from this chapter. Answer each flashcard in your head, then turn it over and choose Got it or Missed it. Cards you do not know yet come back sooner. The quiz mixes the questions from this chapter's pages and asks 10 at a time.

These twelve questions mix the concepts. Answer each in your own words before you open the page it comes from.

1. Cedar Ridge and Brightline share one access key. Name three things the connector cannot do with it that a sign-in token makes possible.
2. Walk through [18.2](sign-in-in-one-picture.md)'s sign-in for Luis. At which step does his password leave his browser, and to whom? At which step does the AI app first hold something the connector will accept?
3. Why does the app swap a one-time code for tokens instead of getting the tokens straight through the browser?
4. Explain the wax seal in your own words. What does the connector need from the sign-in server to check a token, and how often does it need to ask?
5. A token's seal checks out, but its `aud` is Brightline's policy-search connector. What does the AP connector answer? Tell the "invoice helper" story to explain why this check exists.
6. Grace, an `auditor`, calls `find_vendor`. Give the status code, what the reply names, and what her AI app tries next. Why does it still fail?
7. Read query 2 in [18.8](tables-rows-and-relationships.md) aloud in plain words. Why does Priya appear twice in its result, and once in `user`?
8. Luis's request carries a good Cedar Ridge token and `X-Tenant: org_brightline`. What does the connector answer, and which rule and which test cover it?
9. A reviewer finds a shared note, `currentTenant`, at the top of a module. Describe, with two requests, how it leaks one company's data to another. Which test catches it, and why must that test run many times?
10. Jordan is removed from Brightline at 10:00. Her token was made at 9:58 and lasts 10 minutes. What can she do at five past ten, and what happens at nine minutes past?
11. The sign-in server's private signing key leaks. What do you do, and what does it cost the people using the connector? How is that different from a scheduled rotation?
12. Which tenancy model would you choose for a hospital chain that needs its data kept in one country, and why does the connector's code not change?



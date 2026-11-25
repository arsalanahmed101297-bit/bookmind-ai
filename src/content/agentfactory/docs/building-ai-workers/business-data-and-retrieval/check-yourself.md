# Check yourself (/building-ai-workers/business-data-and-retrieval/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for the whole chapter: the flashcards, sixteen questions that mix the concepts, and a final quiz round."
status: stable
order: 319.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-04T22:13:33Z
chapter: "19"
part: III
expert_status: co-build
concepts: [ "19.1", "19.2", "19.3", "19.4", "19.5", "19.6", "19.7", "19.8", "19.9", "19.10", "19.11", "19.12", "19.13", "19.14", "19.15", "19.16", "19.17", "19.18" ]
chapter_quiz: true
last_verified: 2026-11-02
generated:
  at: 2026-11-04T22:13:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

1. Give three reasons Cedar Ridge's data cannot simply be shipped as files beside Brightline's, and two reasons the business data is kept in a different database from the sign-in data.
2. A Cedar Ridge invoice names vendor V006, which only Brightline has. Which rule refuses it, where does that rule live, and why does it need no code in the connector?
3. Here is a flat table: `passages (id, tenant_id, org_name, ap_contact_email, doc_file, doc_title, content, embedding)`. List every transitive dependency, as `key → column → column`, and say where each fact belongs. What would you keep on every row on purpose, which of those really breaks 3NF, and what rule in the database keeps each one true?
4. A colleague wants to remove `invoices.terms` "because the vendor already has terms". What do you ask, and of whom, before you agree?
5. The "pure" design keeps embeddings in their own table. Explain, with the test in [19.13](retrieval-from-zero.md), what goes wrong when one company's search runs through it, and why speed is not the main problem.
6. Run `SELECT * FROM vendors` in your head as the owner, as `ap_reader` with Cedar Ridge set, and as `ap_reader` with nothing set. What comes back each time, and why does the third one return what it does?
7. A role made in the hosting service's dashboard passes every test on your computer. Why might it still be wrong for the connector, and which check would catch it?
8. Ana's call, then Luis's, reuse one pooled connection. Describe what goes wrong if the company is set for the connection instead of the transaction. What does "fails closed" mean here?
9. Why does every query name the company as `$1` when row-level security already filters every row? Which planted bug proves the point, and what did it break that you could see?
10. Luis asks for vendor V008, which only Brightline has. Write the reply he must get, and explain what a different reply would leak. Name three of the other things that [19.10](where-the-guarantee-stops.md) says happen outside row-level security, and how the lab closes each.
11. Luis asks "What is the capital of France?" through `search_policy`. What does the tool return, and why is that better than its nearest passage? Who decided that the 2024 email does not count, and where is that decision enforced?
12. A change to bigger passages improves two answers and breaks one. How does the build know, and what must happen to every company's embeddings when the model changes?
13. A teammate adds an "admin" option: a tool may take the company from its input and set `app.tenant_id` to it. Every row-level security test still passes. What has broken, which part of the real boundary was meant to prevent it, and where in the lab would the change be caught?
14. The question set passes, but Luis's answer to "INV-6206 is $1,523.40, and its purchase order PO-3104 says $1,500.00. Can AP pay it?" says yes. Which check catches this, what are its three parts, and who marks it?
15. An agent proposes `UPDATE invoices SET status = 'paid' WHERE vendor_id = 'V001' OR invoice_number = NULL`. Predict how many rows it changes for Cedar Ridge, name the two things in it you would question, and say what you would ask the agent to run first.
16. Luis asks, "Can we pay the $2,688.00 invoice without the general manager?" Suppose the search returns approvals lines 5 and 8 at the top. Explain why the search alone cannot answer, which part of the system compares $2,688.00 with $2,500.00, and what one search by words could add if he had asked about PO-3103 instead.



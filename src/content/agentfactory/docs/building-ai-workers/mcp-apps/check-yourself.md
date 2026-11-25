# Check yourself (/building-ai-workers/mcp-apps/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for the whole chapter: nineteen questions with outline answers, the flashcards, and a final quiz round."
status: stable
order: 320.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.1", "20.2", "20.3", "20.4", "20.5", "20.6", "20.7", "20.8", "20.9", "20.10", "20.11", "20.12", "20.13", "20.14", "20.15", "20.16", "20.17", "20.18" ]
chapter_quiz: true
last_verified: 2026-11-15
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

1. **[20.2]** Luis asks "How much does Cedar Ridge owe?" Should the connector show a screen? *No. One number is the answer, so a sentence is best.*
2. **[20.3]** Name the three things MCP Apps adds to MCP. *A `ui://` page, a pointer on a tool, and messages between the page and the AI app.*
3. **[20.4]** Luis presses Next page. Whose token does the call carry, and who adds it? *Luis's, added by the AI app on its own connection. The page holds none.*
4. **[20.4]** The page asks for Brightline's INV-8301 from Cedar Ridge's screen. What happens, and why? *"Not found". The token names Cedar Ridge, and the database shows Cedar Ridge's rows only.*
5. **[20.5]** A tool is marked `["app"]`. Who may call it? *Anyone with a token who reaches the connector. Visibility decides who is offered it, not who may call it.*
6. **[20.5]** Marco, an `auditor`, presses Vendor details. What should the screen show? *The 403's meaning in plain words: his role does not include vendor details.*
7. **[20.6]** Why must a page never hold a key? *Anything in a page can be read by the person using it, and the page needs none: the AI app sends its calls.*
8. **[20.7]** A vendor note contains page code. How does the screen show it? *As text. The code appears as characters and never runs.*
9. **[20.8]** Ana filters the screen, then asks a question. How does the model know what she sees? *Only if the page sends `ui/update-model-context` with what is showing.*
10. **[20.9]** Why build the text answer first? *Some AI apps show no screens, the model reads the text, and the standard asks for it.*
11. **[20.17]** Where does the check of who has paid live when a connector has screens? *On the connector, on every call, after the token check.*
12. **[20.1]** Luis's AI app shows screens, and Marco's coding agent does not. What does each get? *Luis gets the screen. Marco gets the text answer, because the connector falls back to plain MCP for features.*
13. **[20.11]** What does an agent send when it uses A2UI? *A description of parts from a catalog the app accepts. Data, never code.*
14. **[20.12]** How does an AI app check a skill it reads from a connector? *Against the manifest from `skills/list`: each file's size and fingerprint.*
15. **[20.13]** Ana changes one line of a served skill. What happens to Luis's approval? *It no longer counts. The AI app asks him again.*
16. **[20.14]** How should Brightline link a work identity to an account? *By the issuer and the subject claim. Email only finds an account made before.*
17. **[20.15]** How should the month-end report job sign in? *As itself, with its own credentials, a signed assertion and `ap:read` only.*
18. **[20.16]** Which layers decide what is allowed? *Tools and sign-in. Skills and screens never do.*
19. **[20.3]** Can you build an editor like Claude Docs as an MCP App? What stays your job? *Mostly yes, with a full-screen page, app tools and saves through your tools. Storing, sharing and protecting the document stays on your server.*



# 18.17 How today's tools realize it (/building-ai-workers/securing-connectors/how-todays-tools-realize-it)

---
type: Document
title: "18.17 How today's tools realize it"
description: "Reference. Claude Code, Codex and OpenCode against the MCP authorization specification, revision 2026-07-28, as of November 2, 2026."
status: stable
order: 318.17
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:41Z
chapter: "18"
part: III
expert_status: builder-only
concepts: [ "18.17" ]
objectives:
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
sources:
  - id: claude-code-mcp
    title: "Connect Claude Code to tools via MCP (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/mcp
  - id: codex-mcp
    title: "Codex: MCP (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/extend/mcp?surface=cli
  - id: opencode-mcp
    title: "MCP servers (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/v2/docs/mcp-servers/
generated:
  at: 2026-11-15T11:19:41Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Reference. Skim it now, and come back after Sitting 4.*

**In everyday life.** Every passport follows one international standard, so any border can read any passport, though each country adds its own stamps and its own lines at the airport. Concepts [18.1](who-is-calling.md) to [18.16](watching-who-did-what.md) taught the standard. This concept says, in plain words, how today's AI apps follow it, as of November 2, 2026.

**What you will learn.** How today's AI apps follow the sign-in rules, and the four things that change a decision.

**Why it matters.** The connector stays the same whichever app signs in, but each app reaches it a little differently.

**What you need from this concept.** Four things that change a decision:

1. **The connector never changes,** whichever AI app signs in. It checks standard tokens against standard public keys.
2. **Only approved app makers' documents are accepted.** Brightline's list starts with OpenAI, which makes Codex (`chatgpt.com`), so Codex works as it is.
3. **Claude Code and OpenCode are pre-registered in the lab,** with a client ID you create ([18.5](who-is-the-app.md)). Field guides [F5](field-guide-securing-connectors.md#f5-claude-code) and [F7](field-guide-securing-connectors.md#f7-opencode-version-2) show both ways.
4. **Claude Code says it cannot sign in without a browser, and Codex and OpenCode do not document a way,** so automated checks need their own route (field guide [F8](field-guide-securing-connectors.md#f8-deploying-the-sign-in-server)).

### How do the three coding agents compare?

Each was read on its maker's own pages. "Not documented" means the authors did not find it there, not that the agent cannot do it. Your lab notes are the real test.

| What happens | Claude Code[^claude-code-mcp] | Codex[^codex-mcp] | OpenCode[^opencode-mcp] |
| --- | --- | --- | --- |
| Signs in through your browser when the connector asks | Yes | Yes | Yes |
| Can describe itself with its own document ([18.5](who-is-the-app.md)) | Yes | Yes | Yes, unless you give it a client ID |
| Can use a client ID you created (pre-registration) | Yes | Yes | Yes, and tries this first |
| Checks the sign-in server's name before swapping the code ([18.4](two-guards-for-the-code.md)) | Yes | Yes | Not documented |
| Gets a fresh token by itself when one runs out | Yes, and retries once | Not documented | Yes |
| After a 403 for a missing permission ([18.7](permission-per-tool.md)) | Shows that more permission is needed | Not documented | Not documented |
| Signs in with no browser, for automated checks | No | Not documented | Not documented |

### What about programs that call a connector directly?

Anthropic's and OpenAI's programming interfaces (APIs, the doors for programs from [Chapter 17](../connectors-and-mcp/overview.md)) can also call a connector, but they do not run a sign-in. Your program gets the token and passes it in. Chapter 23 builds an agent that holds tokens for each person and company. A program that acts for no person, such as a nightly report, can sign in as itself with an MCP extension, OAuth Client Credentials ([Chapter 20](../mcp-apps/machines-with-no-person.md)).

### Where does Brightline's sign-in server run?

On a Cloudflare Worker, using Better Auth, with its records in a D1 database (field guides [F2](field-guide-securing-connectors.md#f2-relational-databases-and-d1-from-zero) and [F3](field-guide-securing-connectors.md#f3-better-auth-from-zero)). Other ways would serve the same connector unchanged: Cloudflare's own sign-in library, or a company that runs sign-in for you for a monthly fee.

**Watch this.** A newer standard called DPoP ties a token to a secret held by the AI app, so a stolen token is useless on its own. The MCP specification does not require it yet. Brightline does not use it.

**The invariant.** The connector never trusts a request because of where it came from or what it says about itself. It trusts a token issued for it, by its own sign-in server, still in date, and it takes the company from that token alone.

**Exam note.** *For exam takers.* The Claude developer certification exam (CCDV-F) asks about Claude's behavior. Where Claude Code's documented behavior differs from the specification, the answer that scores is Claude Code's behavior.

**The details.** The exact behavior of each product, with its sources, is in field guide [F10](field-guide-securing-connectors.md#f10-how-todays-tools-realize-it-in-detail).

[^claude-code-mcp]: Connect Claude Code to tools via MCP, Anthropic.
[^codex-mcp]: Codex: MCP, OpenAI.
[^opencode-mcp]: MCP servers, OpenCode.



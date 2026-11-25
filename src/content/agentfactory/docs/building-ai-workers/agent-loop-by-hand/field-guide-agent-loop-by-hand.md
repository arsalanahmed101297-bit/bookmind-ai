# Field guide: the two APIs and an open model, step by step (/building-ai-workers/agent-loop-by-hand/field-guide-agent-loop-by-hand)

---
type: Document
title: "Field guide: the two APIs and an open model, step by step"
description: "The repository and its secrets, accounts and keys, the connector by either route, the two APIs' exact shapes, stateful modes, prices and caching, and Ollama with an open model."
status: stable
order: 321.85
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:23Z
chapter: "21"
part: III
expert_status: builder-only
concepts: []
field_guide: E.agent-loop
next_review: 2026-12-05
last_verified: 2026-11-05
sources:
  - id: vitest-engines
    title: "vitest 5.1.0 package, engines (npm, accessed 2026-11-05)"
    resource: https://registry.npmjs.org/vitest/5.1.0
  - id: uv-python
    title: "Installing Python (uv, accessed 2026-11-05)"
    resource: https://docs.astral.sh/uv/guides/install-python/
  - id: pypi-mcp
    title: "mcp 2.3.0 (PyPI, accessed 2026-11-05)"
    resource: https://pypi.org/project/mcp/2.3.0/
  - id: claude-workspaces
    title: "Workspaces (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/manage-claude/workspaces
  - id: claude-key-expiry
    title: "Authentication: key expiration (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/manage-claude/authentication#key-expiration
  - id: openai-spend-limits
    title: "Spend limits (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/spend-limits
  - id: openai-api-keys
    title: "API keys (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/api-keys
  - id: mcp-transports
    title: "Transports, MCP specification 2026-07-28 (Model Context Protocol, accessed 2026-11-05)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/transports
  - id: claude-models
    title: "Models overview (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/models/overview
  - id: openai-gpt-6-luna
    title: "GPT-6 Luna (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/models/gpt-6-luna
  - id: openai-your-data
    title: "Your data (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/your-data
  - id: openai-responses-delete
    title: "Delete a model response, API reference (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/reference/resources/responses/methods/delete
  - id: claude-message-threads
    title: "Message threads (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/message-threads
  - id: claude-pricing
    title: "Pricing (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/pricing
  - id: openai-pricing
    title: "Pricing (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/pricing
  - id: claude-caching
    title: "Prompt caching (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
  - id: openai-prompt-caching
    title: "Prompt caching (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/prompt-caching
  - id: wsl-networking
    title: "Accessing network applications with WSL (Microsoft, accessed 2026-11-05)"
    resource: https://learn.microsoft.com/en-us/windows/wsl/networking
  - id: ollama-faq
    title: "FAQ (Ollama, accessed 2026-11-05)"
    resource: https://docs.ollama.com/faq
  - id: ollama-openai
    title: "OpenAI compatibility (Ollama, accessed 2026-11-05)"
    resource: https://docs.ollama.com/api/openai-compatibility
  - id: ollama-qwen3
    title: "qwen3 (Ollama library, accessed 2026-11-05)"
    resource: https://ollama.com/library/qwen3
generated:
  at: 2026-11-21T00:02:23Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*The concepts named no product. This field guide names them, and gives each step exactly. Read [F0](#f0-the-repository-and-its-secrets) and [F1](#f1-accounts-keys-and-spending-limits-by-you) before Task 0. Each lab task names the other sections it needs. Every fact here was checked on its owner's page on November 5, 2026.*

**If a menu name or a message differs** from what you see, trust what you see, and record it in `ports/ch20.md`.

## F0. The repository and its secrets

**Where to install the tools.** Node.js from nodejs.org, version 22.19 or later, the minimum that Lab 19 set. The test runner needs 22.12 or later.[^vitest-engines] uv from docs.astral.sh/uv. Git from git-scm.com. The GitHub CLI from cli.github.com, then `gh auth login`. On Windows, WSL from Microsoft's "Install WSL" page (`wsl --install`). Python 3.12 or later comes with uv (`uv python install`).[^uv-python]

**What the zip holds.** `brightline-lab-ch20.zip` holds `brightline-ap/`, a plain folder with no git history. Task 0 starts its git history and tags `lab20-start`. The folder has what [Chapter 19](../business-data-and-retrieval/overview.md) left, plus the [Chapter 21](overview.md) files, and its README has the list. The zip also holds `answer-key/` at its top level, outside `brightline-ap/`. Never give the answer key to an agent.

| Path | What it is |
| --- | --- |
| `tools/ap-tools.json` | The four tools, defined once, in JSON Schema |
| `prompts/ap-worker.v1.md` | The worker's instructions, versioned |
| `src/loop/` | The loop in TypeScript: `claude.ts`, `openai.ts`, `tools.ts`, `limits.ts`, `trace.ts`, `stream.ts`, and `config.json` with `config.ts`, which reads it (Python reads the same `config.json` directly) |
| `py/brightline_ap/loop/` | The same in Python: `claude_loop.py`, `openai_loop.py`, `tools.py`, `limits.py`, `trace.py`, `stream.py` |
| `scripts/` (TypeScript), and `py/brightline_ap/ask.py` and `py/brightline_ap/experiments.py` (Python) | `ask`, `break`, `stateful` and `stream:demo`, in both languages |
| `py/brightline_ap/practice_connector.py` | The local practice connector (route B), which reads `data/` and `docs/policies/` |
| `tests/`, `py/tests/`, `tests/fixtures/loop/` | The tests, and the recorded responses both languages replay |

**Secrets.** Nothing in this table is ever typed into a chat, printed or committed. Git ignores `.secrets/`.

| File | Holds | Made by |
| --- | --- | --- |
| `.secrets/anthropic.env` | `ANTHROPIC_API_KEY=` | You, in the Claude Console (F1) |
| `.secrets/openai.env` | `OPENAI_API_KEY=` | You, in the OpenAI dashboard (F1) |
| `.secrets/connector.env` | `CONNECTOR_URL=` and `CONNECTOR_TOKEN=` | Your agent, in Task 0 ([F2](#f2-the-connector-route-a-or-route-b)) |

**Installing.** `npm ci` installs the pinned TypeScript packages from `package-lock.json`. For Python, `cd py && uv sync --locked` installs the versions pinned in `py/uv.lock`, including `anthropic` 2.5.0, `openai` 3.46.0 and `mcp` 2.3.0. The lab's Python MCP client uses the `httpx2` library for HTTP, which the pinned SDKs also list in their requirements.[^pypi-mcp]

## F1. Accounts, keys and spending limits (by you)

*Claude.* Sign in to the Claude Console at `platform.claude.com`, and add API credits on the *Billing* page. Make a workspace for this lab, and set its monthly spending limit. To set it, choose *Workspaces*, select the workspace, then choose *Spend limits*. The Default Workspace cannot have a spending limit.[^claude-workspaces] On the *API keys* page, choose *Create key*, scoped to that workspace, with an expiry of 30 days.[^claude-key-expiry] Copy it once into `.secrets/anthropic.env` with your editor.

*OpenAI.* Sign in to the OpenAI platform dashboard, and add credits under billing. Make a project for this lab, and set its spend limit to $5 with a hard limit. To set it, choose *Project settings*, *Limits*, *Spend* and *Edit spend limit*, in that order, then turn on *Enforce a hard limit*.[^openai-spend-limits] Make a key for that project, and copy it once into `.secrets/openai.env`.[^openai-api-keys]

**Why each key gets its own small limit.** A key that leaks spends money until someone notices. A small limit on the key's own project or workspace keeps the damage small. The lab's own cost cap ([21.8](the-stops-you-add-yourself.md)) limits the cost of each run.

## F2. The connector: route A or route B

**Route A, your Chapter 19 staging connector.** The loop calls the connector's `/mcp` address with a test token for Ana at Brightline in an `Authorization: Bearer` header. On staging, [Chapter 18](../securing-connectors/overview.md) gives one way to get that token. The test signing key is never deployed ([Chapter 18's F8](../securing-connectors/field-guide-securing-connectors.md#f8-deploying-the-sign-in-server)), so the test person signs in through the staging sign-in server's real pages. [Lab 18](../securing-connectors/lab.md)'s sign-in matrix signs in the same way. `npm run token:test -- --person ana --company org_brightline` does just that, with Ana's password from `.secrets/test-users.staging.env` and the connector's address from `.secrets/staging.urls.env`. It writes `CONNECTOR_URL` and `CONNECTOR_TOKEN` into `.secrets/connector.env` and prints only the token's claims. A token lasts 10 minutes, the sign-in server's setting from Chapter 18. So ask your agent to run it again when the loop gets a 401. If you cannot make a token this way, take route B: everything in this chapter works on it. The loop runs as you, the builder, with that token. Chapter 23 explains why a product must never do this.

**Route A's data.** This lab's `data/` holds Lab 19's rows and three invoices the AP team entered since then, INV-8316 to INV-8318. So Brightline has 16 open invoices. Task 0 loads them into staging with `npm run tenant:load -- --company org_brightline --folder data --env staging --replace`. That command also embeds the policies again: one small metered call to the embeddings model from [Chapter 19](../business-data-and-retrieval/overview.md). Your dev database keeps Lab 19's 13 open invoices, which no task in this lab reads. Lab 19's database tests now expect the 16 open invoices, because the pull-request workflow loads them from these files. To run those tests on dev, first load dev with the test embedder they use. Set `AP_EMBEDDINGS=test` in `.secrets/embeddings.env` with your editor, and ask your agent to run `npm run tenant:load -- --company org_brightline --folder data --replace`. Then set it back to `workers-ai`.

**Route B, the practice connector.** In a second terminal: `npm run connector:practice`. It reads `CONNECTOR_TOKEN` from `.secrets/connector.env` itself, so no one has to copy the token. `PRACTICE_PORT` changes the port. `PRACTICE_BROKEN=search_policy` (a comma-separated list of tool names) makes those tools always answer "try again", for testing a loop's stops. It listens on `http://127.0.0.1:8760/mcp` and offers the same four tools over MCP (streamable HTTP,[^mcp-transports] MCP's web transport from [Chapter 17](../connectors-and-mcp/overview.md)). It reads Brightline's own files, `data/` and `docs/policies/`, the same rows that route A loads. It answers 401 to any request without the token. Its policy search weighs shared words, but the real connector searches by meaning. So the passages can come back in another order, with other scores. It has no sign-in server, no companies to keep apart and no database. Stop it with Ctrl+C.

**Listing the tools.** `connectToConnector()` in `src/loop/tools.ts` opens an MCP client session with the token and returns `runTool`, `listTools` and `close`. Task 0's step 5 uses `listTools()`. In Python, `connect_to_connector()` gives only `run_tool`, so Task 0 lists the tools in TypeScript.

## F3. The two shapes, exactly

Here is the same moment in the loop, on each API: the second request of Ana's question, after one tool call.

**First API** (Messages).

```json
{
  "model": "claude-sonnet-5-5",
  "max_tokens": 4096,
  "system": "You answer accounts payable questions ...",
  "tools": [ { "name": "list_open_invoices", "description": "...", "input_schema": { "...": "..." }, "strict": true } ],
  "tool_choice": { "type": "auto" },
  "thinking": { "type": "adaptive" },
  "messages": [
    { "role": "user", "content": "Which invoices are due this week?" },
    { "role": "assistant", "content": [
      { "type": "thinking", "thinking": "...", "signature": "EqQB..." },
      { "type": "tool_use", "id": "toolu_01Lab20A1", "name": "list_open_invoices", "input": { "vendor_id": null, "due_on_or_before": "2027-04-04", "page_size": 10, "page": null } }
    ] },
    { "role": "user", "content": [
      { "type": "tool_result", "tool_use_id": "toolu_01Lab20A1", "content": "...", "is_error": false }
    ] }
  ]
}
```

**Second API** (Responses).

```json
{
  "model": "gpt-6-luna",
  "instructions": "You answer accounts payable questions ...",
  "tools": [ { "type": "function", "name": "list_open_invoices", "description": "...", "parameters": { "...": "..." }, "strict": true } ],
  "tool_choice": "auto",
  "store": false,
  "include": ["reasoning.encrypted_content"],
  "max_output_tokens": 4096,
  "input": [
    { "role": "user", "content": "Which invoices are due this week?" },
    { "type": "reasoning", "id": "rs_...", "summary": [], "encrypted_content": "gAAAA..." },
    { "type": "function_call", "id": "fc_...", "call_id": "call_lab20_A1", "name": "list_open_invoices", "arguments": "{\"vendor_id\": null, \"due_on_or_before\": \"2027-04-04\", \"page_size\": 10, \"page\": null}" },
    { "type": "function_call_output", "call_id": "call_lab20_A1", "output": "..." }
  ]
}
```

Both are what the lab's wire tests capture from the real SDK clients, with long values shortened.

**The pinned models.** `claude-sonnet-5-5`[^claude-models] and `gpt-6-luna`,[^openai-gpt-6-luna] set in `src/loop/config.json`. Both ids appear in the pinned SDKs' own model lists. Before the run, check each one on its provider's models page. Also check that the OpenAI model supports function calling on the Responses API. Chapter 29 explains how to choose a model.

## F4. Stateful modes, and cleaning up

**Second API.** `npm run stateful` sends `store: true`. After the first call, it also sends `previous_response_id`. Each stored response is kept for 30 days by default.[^openai-your-data] So at the end of its run, the script deletes each response it stored, with `client.responses.delete(<id>)` (the same method in Python),[^openai-responses-delete] and prints their ids.

**First API.** Message threads are in beta (`message-threads-2026-08-12`). The lab does not use them. A thread expires five minutes after its last request.[^claude-message-threads]

## F5. Prices, usage and caching

**Copy the prices on the day you run the lab.** Open each provider's own pricing page,[^claude-pricing] and find the pinned model. Copy four prices, in dollars per million tokens, into `src/loop/config.json`. They are `input`, `output`, `cacheWrite` (input written to the cache) and `cacheRead` (input read from it). Write the date in `checked_on`. The second API reports cache writes separately in its usage. So copy its cache-write price if the page lists one,[^openai-pricing] and otherwise use the input price. `ask` refuses to run while all the prices for a paid API are zero. The open model is free, so its prices stay zero.

**How the lab works out cost.** First API: `input_tokens` at the input price, plus `cache_creation_input_tokens` at the cache-write price, plus `cache_read_input_tokens` at the cache-read price, plus `output_tokens` at the output price. Second API: `input_tokens` minus the cached and cache-written parts, at the input price, plus those parts at their own prices, plus `output_tokens`. Both calculations are in `limits.ts` and `limits.py`.

**Caching minimums.** Each provider caches only a repeated start above a minimum length,[^claude-caching] which differs by model.[^openai-prompt-caching] If Task 11 shows no cached tokens, check the minimum for the pinned model on the provider's caching page, and record it.

## F6. Ollama and an open model

1. Install Ollama from its own site for your operating system (on Windows, its Linux version, inside WSL).[^wsl-networking]
2. Check that it listens on `127.0.0.1:11434` only.[^ollama-faq] On a shared network, never set it to listen on every address.
3. Pull the pinned model: `ollama pull qwen3:8b`. It is several gigabytes, so check the size on Ollama's model page.[^ollama-qwen3]
4. `npm run ask -- --api open "…"` points the second API's client at `http://127.0.0.1:11434/v1/` with the placeholder key `ollama`.[^ollama-openai] It also sets `openModel: true`, which leaves out the `include` line that asks for encrypted reasoning ([F3](#f3-the-two-shapes-exactly)).
5. Stop the server when you finish. A local model costs no money per token, and you manage its quality, speed and updates yourself.

[^vitest-engines]: vitest 5.1.0 package, engines, npm.
[^uv-python]: Installing Python, uv.
[^pypi-mcp]: mcp 2.3.0, PyPI.
[^claude-workspaces]: Workspaces, Anthropic.
[^claude-key-expiry]: Authentication: key expiration, Anthropic.
[^openai-spend-limits]: Spend limits, OpenAI.
[^openai-api-keys]: API keys, OpenAI.
[^mcp-transports]: Transports, MCP specification 2026-07-28, Model Context Protocol.
[^claude-models]: Models overview, Anthropic.
[^openai-gpt-6-luna]: GPT-6 Luna, OpenAI.
[^openai-your-data]: Your data, OpenAI.
[^openai-responses-delete]: Delete a model response, API reference, OpenAI.
[^claude-message-threads]: Message threads, Anthropic.
[^claude-pricing]: Pricing, Anthropic.
[^openai-pricing]: Pricing, OpenAI.
[^claude-caching]: Prompt caching, Anthropic.
[^openai-prompt-caching]: Prompt caching, OpenAI.
[^wsl-networking]: Accessing network applications with WSL, Microsoft.
[^ollama-faq]: FAQ, Ollama.
[^ollama-openai]: OpenAI compatibility, Ollama.
[^ollama-qwen3]: qwen3, Ollama library.



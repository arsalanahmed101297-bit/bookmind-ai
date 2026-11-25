# 21.14 How today's tools realize it (/building-ai-workers/agent-loop-by-hand/how-todays-tools-realize-it)

---
type: Document
title: "21.14 How today's tools realize it"
description: "How the Claude Messages API, OpenAI's Responses API and an open model behind a local server realize the loop today."
status: stable
order: 321.14
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-20T11:28:25Z
chapter: "21"
part: III
expert_status: builder-only
concepts: [ "21.14" ]
last_verified: 2026-11-05
sources:
  - id: claude-versions
    title: "Versioning (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/api/versioning
  - id: claude-ts-sdk
    title: "TypeScript SDK (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript
  - id: claude-py-sdk
    title: "Python SDK (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python
  - id: claude-migration
    title: "Migrating to API version 2026-10-21 (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/api/migration-2026-10-21
  - id: claude-define-tools
    title: "Define tools (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools
  - id: claude-strict
    title: "Strict tool use (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use
  - id: claude-stop-reasons
    title: "Handling stop reasons (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons
  - id: claude-tool-calls
    title: "Handle tool calls (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls
  - id: claude-parallel
    title: "Parallel tool use (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use
  - id: claude-thinking
    title: "Thinking (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/thinking
  - id: claude-message-threads
    title: "Message threads (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/message-threads
  - id: claude-streaming
    title: "Streaming messages (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/streaming
  - id: claude-errors
    title: "Errors (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/api/errors
  - id: claude-caching
    title: "Prompt caching (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
  - id: claude-mcp-connector
    title: "MCP connector (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/mcp-connector
  - id: claude-models
    title: "Models overview (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/models/overview
  - id: claude-pricing
    title: "Pricing (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/pricing
  - id: openai-node
    title: "OpenAI Node SDK 7.51.0, README (OpenAI, accessed 2026-11-05)"
    resource: https://github.com/openai/openai-node/blob/v7.51.0/README.md
  - id: openai-migrate
    title: "Migrate to the Responses API (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/migrate-to-responses
  - id: openai-deprecations
    title: "Deprecations (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/deprecations
  - id: openai-function-calling
    title: "Function calling (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/function-calling
  - id: openai-reasoning
    title: "Reasoning models (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/reasoning
  - id: openai-input-items
    title: "ResponseInputItems.ts, OpenAI Node SDK 7.51.0 (OpenAI, accessed 2026-11-05)"
    resource: https://github.com/openai/openai-node/blob/v7.51.0/src/lib/responses/ResponseInputItems.ts
  - id: openai-responses-create
    title: "Create a model response, API reference (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/reference/resources/responses/methods/create
  - id: openai-your-data
    title: "Your data (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/your-data
  - id: openai-conversation-state
    title: "Conversation state (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/conversation-state
  - id: openai-prompt-caching
    title: "Prompt caching (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/prompt-caching
  - id: openai-pricing
    title: "Pricing (OpenAI, accessed 2026-11-05)"
    resource: https://developers.openai.com/api/docs/pricing
  - id: ollama-openai
    title: "OpenAI compatibility (Ollama, accessed 2026-11-05)"
    resource: https://docs.ollama.com/api/openai-compatibility
  - id: ollama-qwen3
    title: "qwen3 (Ollama library, accessed 2026-11-05)"
    resource: https://ollama.com/library/qwen3
  - id: ollama-responses-source
    title: "openai/responses.go, Ollama 0.40.14 (Ollama, accessed 2026-11-05)"
    resource: https://github.com/ollama/ollama/blob/v0.40.14/openai/responses.go
  - id: vllm-openai
    title: "OpenAI-compatible server (vLLM, accessed 2026-11-05)"
    resource: https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/
  - id: llama-cpp-server
    title: "llama-server README (llama.cpp, accessed 2026-11-05)"
    resource: https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md
  - id: lmstudio-openai
    title: "OpenAI compatibility endpoints (LM Studio, accessed 2026-11-05)"
    resource: https://lmstudio.ai/docs/developer/openai-compat
generated:
  at: 2026-11-20T11:28:25Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Look things up here. You do not need to remember this section, only to know it is here.*

*Reference. Every fact here was read on its owner's own pages on November 5, 2026, unless it says otherwise. Facts marked **SDK types** were confirmed from the pinned SDK's own type definitions.*

**What you will learn.** How today's products carry the loop: the two main model APIs, and an open model on your own computer, with the facts that change how you write it.

**Why it matters.** Each product names the same steps its own way, and changes over time. This page is where you check the exact names before you build or run anything.

### Is there a standard for the loop's shapes?

No standard defines the loop's shapes. Both APIs, and the open-source servers that copy the second, carry the same loop in different JSON. The resemblance is not a shared standard. What is standard is around the loop: JSON Schema for tool inputs, server-sent events for streaming, OpenTelemetry for traces and MCP for the connector.

### Is every agent built this way?

Almost every agent in this book, and in the products you use, rests on one of these two APIs. It helps to see exactly how.

- **The two main APIs for talking to an LLM.** Anthropic's Claude Messages API and OpenAI's Responses API are the two main ways programs talk to large language models. Most other model vendors offer APIs compatible with one of them: the same request and response shapes, usually with only a different address and key. That is why this chapter's second-API loop can point at an open model with no code change (Task 12).
- **They are not agent-only APIs.** Most calls through them are not agents at all: chat, summaries, pulling data out of documents, sorting or translating text. Every call is the same thing: here is the input, write what comes next. Agents use a subset of features built for them: tool definitions, tool calls and tool results, stop reasons, and, on OpenAI's API, an optional stored conversation. [Chapter 21](overview.md) uses that subset.
- **Agent SDKs are a layer on top.** Claude's Agent SDK (Chapter 22) runs its loop on the Messages API. OpenAI's Agents SDK calls the Responses API by default, and can also use the older Chat Completions API. Both add the loop itself, retries, memory, handoffs between agents (one agent passing the work to another), guardrails (checks on what goes in and comes out) and tracing. Underneath, they do what this chapter does by hand: call, keep, check, run, return.
- **Where the line blurs.** Both APIs can now run some tools themselves, such as the provider's own web search or code execution, and the Messages API's MCP connector can call a connector for you. Then part of the loop runs on the provider's side, inside one API call (the "paused" stop reason in [21.3](one-turn-request-response-and-stop-reason.md) comes from this). Hosted agent platforms (Chapter 23) go further and run the whole loop on the provider's side. The model calls are the same, but you no longer see them.
- **The point to keep.** Every agent is this loop around one of these two APIs. What differs is whose code runs the loop, and how much of it you can see.

### How does Anthropic's Claude Messages API realize it?

- **Versions and SDKs ([21.13](versions-models-and-keys.md)).** The API version `2026-10-21` is the newest, beside `2023-06-01` and `2023-01-01`, sent as the `anthropic-version` header by the SDK.[^claude-versions] The TypeScript SDK is `@anthropic-ai/sdk` 1.x (the lab pins 1.5.0, Node 20 or later), the first major on `2026-10-21`.[^claude-ts-sdk] The Python SDK is `anthropic` (the lab pins 2.5.0).[^claude-py-sdk] The SDK sends the key as `Authorization: Bearer <key>` (SDK types and the lab's wire tests).
- **What `2026-10-21` removed ([21.9](when-the-loop-goes-wrong.md)).** A request with `temperature`, `top_p` or `top_k` is a 400, even at the default value. A `document` block in an assistant message is a 400.[^claude-migration]
- **Tools ([21.2](a-tool-is-a-name-a-description-and-a-schema.md)).** `name`, `description`, `input_schema` (JSON Schema), and optional `input_examples`, `strict` and `cache_control`. **Strict tool use** constrains the model's sampling to schema-valid inputs, generally available on every model.[^claude-strict] **Tool choice** is `auto` (the default with tools), `any`, `tool` or `none`. On Claude Fable 5.2, Mythos 5.2, Opus 5.5, Sonnet 5.5, Fable 5.1 and Mythos 5.1, `any` and `tool` return a 400, and the documentation recommends `auto` with strict tool use.[^claude-define-tools]
- **The loop and stop reasons ([21.1](what-an-agent-is-in-code.md), 21.3).** Repeat while `stop_reason` is `tool_use`, exit on any other. Stop reasons: `end_turn`, `max_tokens`, `stop_sequence`, `tool_use`, `pause_turn` (a server-tool loop hit its limit, never for client tools), `refusal` (HTTP 200, with `stop_details`) and `model_context_window_exceeded` (the context window filled while the model was writing). `pause_turn` comes after a server-tool loop's limit, 10 rounds by default.[^claude-stop-reasons]
- **Tool calls and results ([21.4](running-the-tools-and-sending-back-the-results.md)).** A `tool_use` block has `id`, `name` and `input`. The answer is a `tool_result` block in the next user message, with `tool_use_id`, `content` and `is_error`. Results must come right after their calls, first in the content.[^claude-tool-calls] Parallel calls get all their results together. `disable_parallel_tool_use` lives inside `tool_choice`.[^claude-parallel]
- **State ([21.5](the-conversation-is-an-array-you-own.md), [21.7](what-a-stateful-mode-hides.md)).** Stateless: the full history on every request. Thinking blocks go back complete and unmodified, and the thinking setting cannot change inside a tool-use loop.[^claude-thinking] The lab uses `thinking: {type: "adaptive"}`: the model decides when to think, and how much. A stateful option, **message threads**, is in beta (`message-threads-2026-08-12`): later turns send only new messages and the previous response's id, best effort (kept if possible, not guaranteed), expiring five minutes after the last request.[^claude-message-threads]
- **Streaming ([21.11](streaming.md)).** `message_start`, per block `content_block_start`, `content_block_delta` and `content_block_stop`, then `message_delta` and `message_stop`, with `ping` and `error`. Tool input arrives as `input_json_delta` with `partial_json`, joined and parsed at `content_block_stop`.[^claude-streaming]
- **Errors and retries (21.9).** 400 `invalid_request_error`, 401 `authentication_error`, 402 `billing_error`, 403 `permission_error`, 404 `not_found_error`, 409 `conflict_error`, 413 `request_too_large`, 429 `rate_limit_error`, 500 `api_error`, 504 `timeout_error`, 529 `overloaded_error`. Every response has a `request-id` header.[^claude-errors] The SDKs retry connection errors, 408, 409, 429 and 500 and above twice by default, with exponential backoff, and time out after 10 minutes. Responses carry `_request_id`.[^claude-ts-sdk]
- **Caching ([21.12](tokens-caching-and-what-a-call-costs.md)).** `cache_control: {type: "ephemeral"}` on the request for automatic caching, or on up to four breakpoints. Five minutes by default, `ttl: "1h"` optional. Usage reports `cache_creation_input_tokens` and `cache_read_input_tokens` beside `input_tokens` and `output_tokens`.[^claude-caching]
- **The API can run the tools for you.** The MCP connector (beta, `mcp-client-2026-09-15`) lets the Messages API call a remote MCP server itself, returning `mcp_tool_use` and `mcp_tool_result` blocks, so your code never runs those tools.[^claude-mcp-connector] This chapter does not use it, because it moves step 4 of the loop out of your sight.
- **Other routes (21.13).** Claude models are also offered on Amazon Bedrock, Google Cloud (Claude Models on Google Cloud) and Microsoft Foundry, each with its own client setup, keys and regions.[^claude-models]
- **Status and price.** Generally available, except the betas named. API usage at list price. New accounts get a small free credit to test the API, but there is no free plan.[^claude-pricing]

### How does OpenAI's Responses API realize it?

- **SDKs (21.13).** `openai` for Node (the lab pins 7.51.0) needs Node 22 or later.[^openai-node] The Python SDK is `openai` (the lab pins 3.46.0). The Responses API is the primary API, and Chat Completions is the previous standard, supported indefinitely.[^openai-migrate] In Chat Completions, functions are not strict by default.
- **The older API.** You will still see `chat.completions` in older tutorials and Stack Overflow answers. It is the older API: OpenAI still supports it, but recommends Responses for all new projects. The ideas are the same. Only the JSON shape changed. The Assistants API, OpenAI's earlier API for assistants, was sunset (shut down) on August 26, 2026, and is no longer available.[^openai-deprecations]
- **Function tools (21.2).** `{type: "function", name, description, parameters, strict}`. Strict needs `additionalProperties: false` on every object and every property in `required`. In Responses, leaving `strict` out tries strict mode and falls back if the schema cannot be strict, so the lab sets `strict: true` explicitly. `tool_choice` is `auto`, `required`, a named function, `none` or `allowed_tools`. `parallel_tool_calls: false` means zero or one call.[^openai-function-calling]
- **Output items ([21.6](the-same-loop-different-shapes.md)).** `function_call` items with `call_id`, `name` and `arguments`, a JSON string. `message` items. `reasoning` items, which must be passed back with the outputs of the calls they led to.[^openai-reasoning] Results go back as `{type: "function_call_output", call_id, output}`. The SDK has a helper, `toResponseInputItems()`, that turns output items into input items.[^openai-input-items] The lab's loop does it by hand, in two lines, so you can see it.
- **The end of the loop (21.6).** No `function_call` items means the model is done. A response's `status` is `completed`, `failed`, `in_progress`, `cancelled`, `queued` or `incomplete` (SDK types), and an incomplete response has `incomplete_details.reason`, such as `max_output_tokens`.[^openai-responses-create]
- **State (21.7).** Responses are stored for 30 days by default. `store: false` turns that off.[^openai-your-data] Stateless requests must keep every item in the output. Reasoning items carry `encrypted_content` by default in the current guides, and the lab also sets `include: ["reasoning.encrypted_content"]`, which is explicit and harmless. The stateful options are `previous_response_id`, which does not carry over the earlier `instructions` and bills all the input tokens of the chain of linked responses as input, and conversation objects, which are not subject to the 30-day limit.[^openai-conversation-state] Organizations under zero data retention, an agreement under which OpenAI keeps no request content, get `store: false` automatically.
- **Retries (21.9).** Two retries with exponential backoff for connection errors, 408, 409, 429 and 500 and above, a 10-minute timeout, and `_request_id` from the `x-request-id` header.
- **Caching (21.12).** Usage reports `input_tokens_details.cached_tokens` and `cache_write_tokens` (SDK types), both counted inside `input_tokens`, as the lab assumes.[^openai-prompt-caching]
- **Status and price.** Generally available. API usage at list price, no free plan for API calls.[^openai-pricing]

### How does an open model behind a local server realize it?

- **Ollama** offers `/v1/chat/completions` (tools, but no `tool_choice`) and `/v1/responses` with function calling, at `http://127.0.0.1:11434/v1/`. Only the stateless form of Responses is supported: no `previous_response_id` and no `conversation`, which fits this chapter exactly. Its documentation's examples use `qwen3` and `gpt-oss:20b`.[^ollama-openai] The lab pins `qwen3:8b`[^ollama-qwen3] until a live run shows which small model handles four tools best.
- **Alternatives.** vLLM offers Chat Completions and a Responses-compatible API with a tools example.[^vllm-openai] llama.cpp's `llama-server` has chat completions and responses routes, with function calling documented on chat completions.[^llama-cpp-server] LM Studio offers both on port 1234.[^lmstudio-openai]
- **Security.** A local model server listens on your own computer. Keep it on `127.0.0.1`, never on every network address. Treat a downloaded model as untrusted code and data, from a source you chose.
- **Status and price.** Free to run, on your own hardware. You own the speed, the quality and the updates.

### Which differences change how you write the loop?

| | First API | Second API | Open model, local server |
| --- | --- | --- | --- |
| **Who keeps the conversation in this chapter** | You | You (`store: false`) | You (stateless only) |
| **How a call is matched to its result** | `tool_use.id` and `tool_use_id` | `call_id` on both | `call_id` on both |
| **How inputs arrive** | An object | A JSON string to parse | A JSON string, sometimes with wrong fields |
| **Failure in a result** | `is_error: true` | Text only (the lab writes `ERROR:`) | Text only |
| **What strict means by default** | Off unless you set it (strict is opt-in on each tool). The lab sets it explicitly | Tried unless set (the lab sets it) | Depends on the server and model |
| **How the loop knows it is done** | `stop_reason` is not `tool_use` | No `function_call` items, status `completed` | The same as the second API, but a reply cut short still says `completed`[^ollama-responses-source] |
| **The model's reasoning** | Thinking blocks with a signature | Encrypted reasoning items | Varies by model |
| **Tested for this chapter** (a wire test captures exactly what the SDK sends) | Recorded and wire tests only, not yet live | Recorded and wire tests only, not yet live | Not yet |

### What is the loop's invariant?

The model only asks. Your code decides whether to run each tool, owns the whole conversation, and decides when the loop stops.

[^claude-versions]: Versioning, Anthropic.
[^claude-ts-sdk]: TypeScript SDK, Anthropic.
[^claude-py-sdk]: Python SDK, Anthropic.
[^claude-migration]: Migrating to API version 2026-10-21, Anthropic.
[^claude-define-tools]: Define tools, Anthropic.
[^claude-strict]: Strict tool use, Anthropic.
[^claude-stop-reasons]: Handling stop reasons, Anthropic.
[^claude-tool-calls]: Handle tool calls, Anthropic.
[^claude-parallel]: Parallel tool use, Anthropic.
[^claude-thinking]: Thinking, Anthropic.
[^claude-message-threads]: Message threads, Anthropic.
[^claude-streaming]: Streaming messages, Anthropic.
[^claude-errors]: Errors, Anthropic.
[^claude-caching]: Prompt caching, Anthropic.
[^claude-mcp-connector]: MCP connector, Anthropic.
[^claude-models]: Models overview, Anthropic.
[^claude-pricing]: Pricing, Anthropic.
[^openai-node]: OpenAI Node SDK 7.51.0, README, OpenAI.
[^openai-migrate]: Migrate to the Responses API, OpenAI.
[^openai-deprecations]: Deprecations, OpenAI.
[^openai-function-calling]: Function calling, OpenAI.
[^openai-reasoning]: Reasoning models, OpenAI.
[^openai-input-items]: ResponseInputItems.ts, OpenAI Node SDK 7.51.0, OpenAI.
[^openai-responses-create]: Create a model response, API reference, OpenAI.
[^openai-your-data]: Your data, OpenAI.
[^openai-conversation-state]: Conversation state, OpenAI.
[^openai-prompt-caching]: Prompt caching, OpenAI.
[^openai-pricing]: Pricing, OpenAI.
[^ollama-openai]: OpenAI compatibility, Ollama.
[^ollama-qwen3]: qwen3, Ollama library.
[^ollama-responses-source]: openai/responses.go, Ollama 0.40.14, Ollama.
[^vllm-openai]: OpenAI-compatible server, vLLM.
[^llama-cpp-server]: llama-server README, llama.cpp.
[^lmstudio-openai]: OpenAI compatibility endpoints, LM Studio.



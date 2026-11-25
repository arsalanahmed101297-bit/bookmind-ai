# 16.10 How today's tools realize it (/building-ai-workers/skills-and-plugins/both-ai-vendors)

---
type: Document
title: "16.10 How today's tools realize it"
description: "How to practice each lesson of this chapter in your own tools, and how Claude, OpenAI's products and OpenCode carry out the standards, as of November 2, 2026: one table, what each product adds or leaves out, and the differences that change a decision."
status: stable
order: 316.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T08:36:36Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.10" ]
last_verified: 2026-11-02
sources:
  - id: anthropic-skills
    title: "Extend Claude with skills (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/skills
  - id: anthropic-plugin-manifest
    title: "Plugin manifest reference (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/manifest-reference
  - id: anthropic-plugin-commands
    title: "Plugin commands reference (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/cli-reference
  - id: anthropic-plugin-install
    title: "Install and manage plugins (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/install
  - id: anthropic-plugin-loading
    title: "Plugin loading reference (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/loading
  - id: anthropic-host-marketplace
    title: "Host and maintain a marketplace (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/host-marketplace
  - id: anthropic-plugin-org
    title: "Manage Claude Code plugins for your organization (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/org
  - id: anthropic-plugin-security
    title: "Plugin security and trust (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/security
  - id: anthropic-skill-creator
    title: "Extend Claude with skills, Run evals with skill-creator (Anthropic, accessed 2026-11-23)"
    resource: https://code.claude.com/docs/en/skills#run-evals-with-skill-creator
  - id: anthropic-plugin-measure
    title: "Measure plugin cost and usage (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/measure
  - id: anthropic-plugin-evals
    title: "Test plugins with evals (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugin-evals
  - id: anthropic-mods
    title: "Mods (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/plugins/mods/overview
  - id: anthropic-mcp
    title: "Connect Claude Code to tools via MCP (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/mcp
  - id: anthropic-permissions
    title: "Configure permissions (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/permissions
  - id: anthropic-monitoring
    title: "Monitoring (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/monitoring-usage
  - id: anthropic-desktop
    title: "Desktop application (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/desktop
  - id: anthropic-setup
    title: "Advanced setup (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/setup
  - id: claude-plugins-overview
    title: "Plugins (Anthropic, accessed 2026-11-02)"
    resource: https://claude.com/docs/plugins/overview
  - id: claude-platform-support
    title: "Plugin feature support across platforms (Anthropic, accessed 2026-11-02)"
    resource: https://claude.com/docs/plugins/platform-support
  - id: claude-plugins-admin
    title: "Manage plugins for your organization (Anthropic, accessed 2026-11-02)"
    resource: https://claude.com/docs/plugins/admin
  - id: claude-org-rollout
    title: "Roll out a plugin to your whole organization (Anthropic, accessed 2026-11-02)"
    resource: https://claude.com/docs/plugins/org-rollout
  - id: claude-connectors
    title: "Get started with connectors (Anthropic, accessed 2026-11-02)"
    resource: https://claude.com/docs/connectors/getting-started
  - id: claude-skills-howto
    title: "Create custom skills (Anthropic, accessed 2026-11-02)"
    resource: https://claude.com/docs/skills/how-to
  - id: claude-directory-publish
    title: "Publish to the directory (Anthropic, accessed 2026-11-02)"
    resource: https://claude.com/docs/directory/publish
  - id: support-use-plugins
    title: "Use plugins in Claude (Anthropic, accessed 2026-11-02)"
    resource: https://support.claude.com/en/articles/13837440
  - id: support-one-claude
    title: "Claude Cowork and chat are one Claude (Anthropic, accessed 2026-11-02)"
    resource: https://support.claude.com/en/articles/16761823
  - id: support-cowork-surfaces
    title: "Use Claude Cowork on web, desktop, and mobile (Anthropic, accessed 2026-11-02)"
    resource: https://support.claude.com/en/articles/15520349
  - id: openai-build-skills
    title: "Build skills (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/build-skills
  - id: openai-package-plugin
    title: "Package your plugin (OpenAI, accessed 2026-11-02)"
    resource: https://developers.openai.com/plugins/build/plugins
  - id: openai-config-reference
    title: "Configuration reference (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/config-file/config-reference
  - id: openai-config-advanced
    title: "Advanced configuration (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/config-file/config-advanced
  - id: openai-mcp
    title: "Model Context Protocol (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/extend/mcp
  - id: openai-plugins
    title: "Plugins (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/plugins
  - id: openai-plugins-help
    title: "Plugins in ChatGPT (OpenAI, accessed 2026-11-02)"
    resource: https://help.openai.com/en/articles/20001256-plugins-in-chatgpt
  - id: openai-pricing
    title: "Pricing (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/pricing
  - id: openai-submit
    title: "Upload and submit your plugin (OpenAI, accessed 2026-11-02)"
    resource: https://developers.openai.com/plugins/deploy/submission
  - id: openai-desktop-only
    title: "Submit desktop-only plugins (OpenAI, accessed 2026-11-02)"
    resource: https://developers.openai.com/plugins/deploy/desktop-only
  - id: openai-import-plugins
    title: "Import and sync plugins from GitHub (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/enterprise/plugin-management
  - id: openai-get-started-work
    title: "Get started with ChatGPT Work (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/get-started-with-work
  - id: openai-codex-cli
    title: "Codex CLI (OpenAI, accessed 2026-11-02)"
    resource: https://learn.chatgpt.com/docs/codex/cli
  - id: opencode-skills
    title: "Skills (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/v2/docs/skills/
  - id: opencode-mcp
    title: "MCP servers (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/v2/docs/mcp-servers/
  - id: opencode-permissions
    title: "Permissions (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: opencode-plugins
    title: "Plugins (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/v2/docs/plugins/
  - id: opencode-server-plugins
    title: "Server plugins (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/v2/docs/build/plugins/server/
  - id: opencode-changelog
    title: "Changelog (OpenCode, accessed 2026-11-02)"
    resource: https://opencode.ai/changelog
  - id: agent-skills-home
    title: "Agent Skills, home page (accessed 2026-11-02)"
    resource: https://agentskills.io/home
  - id: agent-skills-clients
    title: "Agent Skills, Client Showcase (accessed 2026-11-02)"
    resource: https://agentskills.io/clients
  - id: agent-plugins-spec
    title: "Agent Plugins, Specification (accessed 2026-11-02)"
    resource: https://agent-plugins.org/specification
  - id: agent-plugins-home
    title: "Agent Plugins, home page (accessed 2026-11-02)"
    resource: https://agent-plugins.org/
  - id: agent-plugins-clients
    title: "Agent Plugins, Compatible clients (accessed 2026-11-02)"
    resource: https://agent-plugins.org/compatible-clients
  - id: otel-mcp
    title: "OpenTelemetry, Semantic conventions for MCP (accessed 2026-11-02)"
    resource: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/mcp.md
  - id: server-filesystem
    title: "@modelcontextprotocol/server-filesystem 2.1.0 README (npm, accessed 2026-11-02)"
    resource: https://www.npmjs.com/package/@modelcontextprotocol/server-filesystem/v/2.1.0
generated:
  at: 2026-11-24T08:36:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A shipping container is built to one international standard, so every port's cranes can lift it. But ports still differ. One unloads the standard container straight onto a truck. Another also wants its own customs form stapled to the door. A third has no crane for containers yet, so you unpack the boxes inside and carry them off by hand. The boxes inside are the same everywhere.

**What you will learn.** The exact folder, file, setting and command for each idea in this chapter, in Claude Code, Codex and OpenCode. Also where each product follows the standards, adds to them or leaves them out, as of November 2, 2026.

**Why it matters.** Lessons [16.1](from-a-prompt-to-a-skill.md) to [16.9](installing-is-a-trust-decision.md) teach what is true everywhere. To do the work, you also need the exact step in the product you use. Each product keeps it in a different place.

**How to use this page.** This page is a reference, not a lesson. Each lesson's Try it links to the section here that has its tool's steps. Pick your tool in any set of tabs once, and every set on this page follows. The page ends with one table of all three products, the differences that change a decision, what each costs, and a reference. Menus and commands change. If a step does not match what you see, check the linked page.

**Where each fact comes from.** Each fact comes from the product's own page, read on November 2, 2026, unless it says *tested*. *Tested* means it was run for this book on that date, on Claude Code 2.1.316, Codex 0.166.0 or OpenCode 2.2.5. Every Claude Code exercise here was run as a single command, not in an open session, so a session's screens may look different. Codex and OpenCode were run with no model, so their other steps follow their pages. Write down what you see.

## Practice: from a prompt to a skill

The steps are in [16.1](from-a-prompt-to-a-skill.md#try-it), under Try it. Where each product reads skills, and how it treats the standard:

### Claude Code

Your folder is `.claude/skills`. Claude Code also reads `~/.claude/skills`, folders inside other folders, a plugin's `skills/` and your claude.ai account. In a session, the skill shows as a `Skill` tool call with its name.

Claude Code follows the Agent Skills standard. It *adds* fields the standard does not define: who may start a skill, `context: fork` to run it in a separate context, `arguments` and others. It *relaxes* one rule: `name` defaults to the folder's name.[^anthropic-skills] Custom commands are merged into skills, so `.claude/commands/x.md` and `.claude/skills/x/SKILL.md` both create `/x`.

Skills uploaded to claude.ai are *strict* the other way: a skill with any field outside the six is refused.

These are the fields beyond `name` and `description` that you are most likely to meet in Claude Code, from its page as read on November 24, 2026.[^anthropic-skills] The standard names `allowed-tools` too. Of these fields, this chapter's skills use only `disable-model-invocation`. Spell each field exactly: a misspelled field does nothing, and Claude Code shows no error.

| Field | What it does in Claude Code |
| --- | --- |
| `disable-model-invocation: true` | Only you start the skill, by typing its name ([16.4](commands-and-who-may-start-them.md)) |
| `user-invocable: false` | Only Claude starts the skill. It is hidden from the `/` menu |
| `allowed-tools` | Lists tools Claude may use without asking you, during the turn that starts the skill. It "does not restrict which tools are available" |
| `disallowed-tools` | Lists tools Claude loses while the skill is active |
| `context: fork` | Runs the skill in a subagent, a helper with its own context ([16.2](choosing-the-right-piece.md)). By default Claude does not wait for the subagent to finish |
| `agent` | Says which kind of subagent `context: fork` uses |
| `argument-hint` | A hint shown while you type the skill's name, such as `[vendor name]`. It is for display only |
| `arguments` | Names for the words typed after the skill's name, so the steps can use them, for example as `$vendor` |
| `when_to_use` | More words on when to use the skill. Claude reads them with the description |
| `paths` | File patterns. The skill activates for files that match |
| `model`, `effort` | The model and the effort level for the turn that runs the skill |

*For the exam.* CCDV-F and CCAR-F ask about Claude Code's own skills: where they are kept, and its own fields. Those fields are right answers about Claude Code, even though the standard does not define them. One field is different. The CCAR-F guide expects `allowed-tools` to restrict access. In today's Claude Code it restricts nothing. On the exam, the answer is that it restricts.

### Codex

Your folder is `.agents/skills`. Codex also reads `.agents/skills` in each folder up to the repository's root, `~/.agents/skills` and `/etc/codex/skills`. Codex skills "build on the open agent skills standard".[^openai-build-skills] To start one yourself, type `$` and pick it. To find out whether one loaded, ask the agent: "Which skill did you use?"

OpenAI *adds* an optional `agents/openai.yaml` beside `SKILL.md`, for display names, invocation and tool dependencies, outside the shared file. To see your skills, open *Skills* in the sidebar. `/skills` is the command in the command-line tool and the IDE extension.

### OpenCode

Your folder is `.opencode/skills`. OpenCode also reads `.claude/skills` and `.agents/skills`, and any folder listed in `skills` in `opencode.jsonc`.[^opencode-skills] Before your first message, add this `opencode.jsonc` to the folder, so edits and commands wait for you:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "permissions": [
    { "action": "edit", "resource": "*", "effect": "ask" },
    { "action": "shell", "resource": "*", "effect": "ask" }
  ]
}
```

OpenCode's version 2 pages do not name the standard, though the standard's own list of clients, the products that follow it, names OpenCode.[^agent-skills-clients] It *relaxes* the rules: it does not enforce the naming rules or limits, takes a skill's id from its path, and *ignores* `license` and `compatibility`. To load a skill yourself, mention it as `@vendor-terms`.

## Practice: writing a skill with the expert

The steps are in [16.3](writing-a-skill-with-the-expert.md#try-it), under Try it, and they work the same way in all three tools. In Claude Code, a plugin from Anthropic can also run the comparison for you. This section follows Anthropic's page as read on November 23, 2026. It was not run for this book.

### Claude Code

Anthropic's skill-creator plugin "automates the comparison loop inside Claude Code".[^anthropic-skill-creator]

1. Install it. In the desktop app, add skill-creator from the official marketplace. In a terminal session, type `/plugin install skill-creator@claude-plugins-official`.
2. Ask in words, with your skill's name: "Evaluate my vendor-terms skill with skill-creator."
3. Follow it as it walks you through writing test cases. It stores each one, with the behavior you expect, in `evals/evals.json` in the skill's folder.
4. It runs each case in a clean context, with the skill and without it, and marks each run pass or fail, with its evidence. Then it reports the pass rate, the time and the tokens for both.
5. Check its work. It opens an HTML report that shows every answer. Read them as the expert would, because its pass marks only follow the cases you gave it.

It can also compare two versions of a skill, which is the check before a release in [16.6](shipping-a-version.md).

## Practice: commands and who may start them

The steps are in [16.4](commands-and-who-may-start-them.md#try-it), under Try it. This section has the setting each product uses to say that only a person may start a skill.

![One shared skill, three places to say only a person may start this. At the top, the shared SKILL.md, six standard fields only, never edited per product. Three arrows lead down. OpenAI: a file beside the skill, agents/openai.yaml, with policy.allow_implicit_invocation false, outside the six fields. OpenCode: inside the standard's metadata field, opencode/autoinvoke false, inside a standard field. Claude Code: an extra frontmatter field, disable-model-invocation true, added by a build step, in Claude's built bundle only. A line at the bottom says claude.ai refuses a field outside the six in an uploaded skill, so the extra field never goes in the shared file.](img/person-only-by-product.png)

*Figure 16.14. The person-only setting, product by product. The shared file never changes. Each product's setting lives where that product reads it.*

Each product's setting:

### Claude Code

Add this line to the skill's frontmatter. Start the skill with `/vendor-terms Great Lakes Freight`. The words after the name reach the body as `$ARGUMENTS`.

```yaml
disable-model-invocation: true
```

Claude Code reads this setting only as an extra frontmatter field, and claude.ai refuses that field in an uploaded skill.[^anthropic-skills] No page says whether it refuses one inside an installed plugin. So a person-only skill for Claude gets the field from a build step that writes Claude's bundle, and the shared source stays at six fields.

`user-invocable: false` is the opposite: only Claude starts the skill.

### Codex

Add `agents/openai.yaml` beside `SKILL.md`, with these lines. Start the skill with `$vendor-terms`, then the vendor's name.

```yaml
policy:
  allow_implicit_invocation: false
```

The default is true. OpenAI states the effect for Codex, and no page states it for ChatGPT. So if you rely on it there, check it, and write the result in your notes.[^openai-build-skills]

### OpenCode

Add this to the skill's frontmatter, inside the standard's own `metadata` field, and this rule to `opencode.jsonc`, after the others. Start the skill with `@vendor-terms`, then the vendor's name.

```yaml
metadata:
  opencode/autoinvoke: false
```

```jsonc
{ "action": "skill", "resource": "vendor-terms", "effect": "ask" }
```

The setting only hides the skill from the model's list, and it can still be loaded by its id. So the `ask` rule is what stops a load until you approve.[^opencode-skills] OpenCode also follows `disable-model-invocation`, and when both are set, `opencode/autoinvoke` wins.

## Practice: what a plugin bundles

The steps are in [16.5](what-a-plugin-bundles.md#try-it), under Try it. Your tool's tab below says how to load the plugin for one session, and how to check it.

**One more thing to try: a mistake.** Send: "Add a field named owner_note, with any text, to the manifest my tool reads." Run the check in your tool's tab, and read what it says. Then send: "Remove owner_note again." The unknown field is reported, and ignored when the plugin loads.

The core files follow Agent Plugins 1.0.0. `plugin.json` requires `$schema` and `name`. Its optional fields are `version`, `description`, `author`, `homepage`, `repository`, `license`, `keywords` and `extensions`.[^agent-plugins-spec] `mcp.json` has its own `$schema`, which must name the same version as `plugin.json`, and lists servers under `mcpServers`. A local server has `"type": "stdio"`, a `command` and its `args`. A remote one has `"type": "streamable-http"` and a `url`. The specification forbids secrets in a remote server's headers.

```json
{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json",
  "mcpServers": {
    "apdata": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem@2.1.0", "./data"]
    }
  }
}
```

With no `cwd`, the server's working directory, a conforming product starts this server in the plugin's root. So `./data` here means a `data` folder inside the plugin. A `cwd` must stay inside that root. `args`, `env` and `cwd` can use `${PLUGIN_ROOT}` and `${PLUGIN_DATA}`.

How each product loads and checks a plugin:

### Claude Code

Claude Code does not read the Agent Plugins core yet, and Claude products are not on the standard's list of compatible clients. It reads its own manifest, so send: "Add practice-plugin/.claude-plugin/plugin.json, with the same name, version and description, and no $schema."

**Type this step yourself.** This command starts the session the agent runs in, so you type it, in a [terminal](../programming-fundamentals/the-workbench.md), from the repository's root. `claude` is a separate install, from [Anthropic's quickstart](https://code.claude.com/docs/en/quickstart). The `--plugin-dir` flag takes one folder or zip, and you can repeat it. A terminal session starts in *Auto*, so ask for *Manual*:

```bash
claude --permission-mode manual --plugin-dir ./practice-plugin
```

The plugin shows as `brightline-practice@inline`. Without `.claude-plugin/plugin.json`, its name is the folder's name.[^anthropic-plugin-commands] Start the skill with `/brightline-practice:vendor-terms Great Lakes Freight`.

**If you use only the desktop app.** Its Code tab runs its own copy of Claude Code, has no `--plugin-dir`, and does not offer `/plugin`. To load a folder there, add `CLAUDE_CODE_PLUGIN_DIRS=/absolute/path/to/practice-plugin` under *Environment variables* in a saved local environment, and start a new session from it. That variable was tested on the app's copy of Claude Code, but not through the app's own form.[^anthropic-desktop] A plugin installed with `claude plugin install` also loads in the Code tab.

**The check.** Ask the agent to run these, and read what they print:

```bash
claude plugin validate ./practice-plugin
claude --plugin-dir ./practice-plugin plugin details brightline-practice@inline
```

*Tested:* `validate` warns "Unknown field 'owner_note'. Claude Code ignores it at load time." and passes. With `--strict`, the same warning makes it fail. It also lists what the plugin directory would refuse, such as a missing license, and says those checks do not change the result. `details` lists the skill, and the projected cost, about 60 tokens that are always loaded.

*For the exam.* A Claude Code plugin's manifest is `.claude-plugin/plugin.json`, and its connector file is `.mcp.json`.

### Codex

Codex reads the core as it is: `plugin.json` at the plugin's root is its portable manifest, and connectors go in `mcp.json`.[^openai-package-plugin] So you add no manifest. OpenAI's own settings go under `extensions.com.openai` in `plugin.json`. A `.codex-plugin/plugin.json` is a fallback, a second choice, that you do not need here. A plugin can also hold hooks, browser extensions and a connector's own interface, which ChatGPT shows using the open MCP Apps standard.

Codex loads an installed plugin, not a folder. So go to [Practice: shipping a version](#practice-shipping-a-version), make its changelog and catalog with its Codex tab, and come back here. When you reach [16.6](shipping-a-version.md#try-it), start at its Predict step. Type `$`, and pick `brightline-practice:vendor-terms` (*tested*: Codex lists a plugin's skills with that prefix).

**The check.** Validate `plugin.json` against the published schema: ask the agent to fetch the `$schema` address and compare. Under the standard, a product reports an unknown top-level field and ignores it.

### OpenCode

OpenCode does not implement Agent Plugins. An OpenCode plugin is code: an npm package or a folder of code that can add tools and commands and hook into tool calls.[^opencode-plugins] So here the "plugin" is a setup. Add the skills folder to the `opencode.jsonc` from [the first practice](#practice-from-a-prompt-to-a-skill), then restart OpenCode in the folder.

```jsonc
"skills": ["./practice-plugin/skills"]
```

**The check.** `opencode debug config` lists the sources it read (*tested*: it accepts this file). OpenCode has no manifest, so there is no field to add here. Say so in your notes.

## Make a connector read-only

This is not an exercise. It is what you need when a plugin carries a connector. The lab does this with a published filesystem server, `@modelcontextprotocol/server-filesystem`, pinned at version 2.1.0 and limited to one folder. It has 14 tools, and four of them write: `write_file`, `edit_file`, `create_directory` and `move_file`.[^server-filesystem] It has no read-only flag, and a plugin cannot remove the four tools. Each product's settings can. The server needs Node.js 24.

![Where the connector is made read-only. At the top, the plugin's data connector, with a note that it has four write tools and the plugin cannot remove them. Arrows lead to four places, each with its own setting: Claude Code, deny rules in .claude/settings.json. Claude, Blocked in Customize, Connectors. Codex, disabled_tools in .codex/config.toml. OpenCode, deny rules in opencode.jsonc. A line at the bottom names the four write tools and says they are blocked in every place before the first request.](img/read-only-map.png)

*Figure 16.15. The same rule, set four ways. The plugin carries the connector, and each product makes it read-only.*

Set the rule in each place before its first request. Then ask the connector which folders it may read, and check the answer, because each product starts a local server in a different folder.

### Claude Code

Claude's connector file is `.mcp.json`, inside the plugin. It lists servers under `mcpServers`, as the core does. A local server starts in the folder where you started the session, so from the repository's root, `./data` is the repository's `data` folder (*tested*). Start the session in another folder, and it is not.

Deny the four tools in `.claude/settings.json`. A plugin's own `settings.json` takes only `agent` and `subagentStatusLine`, so it cannot carry deny rules.[^anthropic-plugin-manifest]

```json
{ "permissions": { "deny": [
  "mcp__plugin_brightline-ap_apdata__write_file",
  "mcp__plugin_brightline-ap_apdata__edit_file",
  "mcp__plugin_brightline-ap_apdata__create_directory",
  "mcp__plugin_brightline-ap_apdata__move_file"
] } }
```

A plugin's connector tool is named `mcp__plugin_<plugin>_<server>__<tool>`.[^anthropic-mcp] A deny rule that names a tool removes it from what the agent sees, so the agent reports that it has no such tool (*tested*).[^anthropic-permissions]

### Claude

If the connector is listed under *Customize > Connectors*, open it and set each write tool to *Blocked* under *Tool permissions*.[^claude-connectors] A local connector may not list its tools there before it runs. If it does not, use *Manual*, and decline every write. A local connector is ignored in a browser chat.

### Codex

Codex copies an installed plugin to a cache, a folder of its own, `~/.codex/plugins/cache/<catalog>/<plugin>/<version>/`, and starts its local server there, as the standard says. So `./data` in `mcp.json` finds nothing, and the server stops (*tested*). A full path in `mcp.json` works, on one computer. So does listing the server in the project's `.codex/config.toml`, where it starts in the project's folder (*tested*: the server then lists 10 of its 14 tools).

```toml
[mcp_servers.apdata]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem@2.1.0", "./data"]
disabled_tools = ["write_file", "edit_file", "create_directory", "move_file"]
```

For a server that stays in the plugin, the setting is this:[^openai-config-reference]

```toml
[plugins."brightline-ap@brightline-openai".mcp_servers.apdata]
disabled_tools = ["write_file", "edit_file", "create_directory", "move_file"]
```

Both work only on local Codex hosts, in a project you trust. An untrusted project loses them without any warning.[^openai-config-advanced]

### ChatGPT

ChatGPT on the web does not read `.codex/config.toml`.[^openai-mcp] No page shows that a ChatGPT task with no project reads a repository's file, so the write tools may still work there. Run the chat in the repository's local project, or put the same block in `~/.codex/config.toml`.

### OpenCode

Connectors go under `mcp.servers` in `opencode.jsonc`, with `"type": "local"` and a `command` list.[^opencode-mcp] `"cwd": "."` starts one in the project's folder. Use `disabled: true` to stop a server, not `enabled: false`.

*Tested, without a model:* OpenCode sends the server its own list of folders, called roots, and the server lets that list replace the folder on its command line. So here the connector can read the whole repository, not only `data/`, including any `.env`. Your write rules still stop writes. Its pages name no setting that narrows it, so write what you see in your notes.

After an `allow` for `apdata_*`, add one rule for each write tool. The last matching rule wins, so keep that order.[^opencode-permissions]

```jsonc
{ "action": "apdata_*", "resource": "*", "effect": "allow" },
{ "action": "apdata_write_file", "resource": "*", "effect": "deny" },
{ "action": "apdata_edit_file", "resource": "*", "effect": "deny" },
{ "action": "apdata_create_directory", "resource": "*", "effect": "deny" },
{ "action": "apdata_move_file", "resource": "*", "effect": "deny" }
```

## Practice: shipping a version

The steps are in [16.6](shipping-a-version.md#try-it), under Try it. Your tool's tab says how to make a catalog, install from it, and look at the installed copy again after the fix.

### Claude Code

Claude Code calls a catalog a marketplace. Send: "Add a marketplace named practice at `.claude-plugin/marketplace.json`, at the repository's root, with exactly this." Then paste:

```json
{
  "name": "practice",
  "owner": { "name": "Your name" },
  "plugins": [
    { "name": "brightline-practice", "source": "./practice-plugin", "description": "Practice plugin" }
  ]
}
```

Then ask the agent to run these, from the repository's root:

```bash
claude plugin marketplace add ./
claude plugin install brightline-practice@practice --scope local
claude plugin list
```

`--scope` is `user` (the default), `project` or `local`. Use `local` here: a `user` install turns the plugin on in every project, including ones with no deny rules for its connector.[^anthropic-plugin-install] `claude plugin details` prints a plugin's projected token cost.[^anthropic-plugin-measure]

*Tested:* `list` shows `Version: 0.1.0` and `Read from:` your `practice-plugin` folder. After the fix it shows 0.1.1 at once. That is because a local catalog or `--plugin-dir` loads the current files at every session start, whatever the version says.[^anthropic-host-marketplace]

A catalog in a Git repository is different. Each person stays on a cached copy until the version changes, so a pushed change with no new version never arrives. The copy moves when someone runs `claude plugin update brightline-practice@practice`, or when auto-update is on. Auto-update is off by default for your own catalog, and on for Anthropic's official marketplaces and for marketplaces added from claude.ai. An admin can set it for everyone.[^anthropic-plugin-org] A running session keeps the version it loaded, until `/reload-plugins` or the next session.[^anthropic-plugin-loading]

**Values the plugin asks for.** Claude Code asks for `userConfig` values when you install through `/plugin` in a session. `--plugin-dir` and `claude plugin install` do not ask, and an option's default applies. To see or change them later, use `claude plugin configure brightline-ap@brightline` (Claude Code 2.1.285 or later), or `/plugin configure` in a session.

**Clean up.** Ask the agent to run these (*tested*, and the scope is needed):

```bash
claude plugin uninstall brightline-practice@practice --scope local
claude plugin marketplace remove practice
```

### Claude

A catalog on claude.ai is a GitHub repository, so you can do this exercise once you have pushed one. After a new version syncs from the source, it reaches your account automatically, with nothing to accept. You can also choose *Check for updates*, or turn on *Sync automatically*.[^claude-plugins-overview]

An organization has its own way. *Re-sync*, or a push to the default branch with *Sync automatically* on, brings in a new version. Nothing syncs on a schedule, and a tag by itself releases nothing.[^claude-org-rollout] Setting a plugin to *Not available* stops it for every member, including those who had it installed.[^claude-plugins-admin]

### Codex

OpenAI says to always include `name`, `source`, `policy.installation`, `policy.authentication` and `category` on an entry.[^openai-package-plugin] Send: "Add a catalog named practice-openai at `.agents/plugins/marketplace.json`, at the repository's root, with exactly this." Then paste:

```json
{
  "name": "practice-openai",
  "plugins": [
    {
      "name": "brightline-practice",
      "source": { "source": "local", "path": "./practice-plugin" },
      "policy": { "installation": "AVAILABLE", "authentication": "ON_INSTALL" },
      "category": "Productivity"
    }
  ]
}
```

These commands need the Codex command-line tool, which has its own install page.[^openai-codex-cli] Ask the agent to run them, or type them yourself in a terminal, from the repository's root:

```bash
codex plugin marketplace add ./
codex plugin add brightline-practice@practice-openai
codex plugin list
```

Trust the project when Codex asks. Restart the ChatGPT desktop app, so it sees the catalog, and start a new chat.

*Tested, without a model:* `list` shows `0.1.0`, and the copy it reads is in `~/.codex/plugins/cache/`. After the fix it still shows `0.1.0`, because Codex copied the plugin to that cache. Running `codex plugin add` again moves it to `0.1.1`. Then restart the ChatGPT desktop app, as OpenAI says to do for a local catalog. For a catalog in a Git repository, run `codex plugin marketplace upgrade`.[^openai-package-plugin]

Codex also reads Claude's catalog path, which OpenAI calls legacy-compatible, so a repository that serves both keeps two catalog files, with different names. With both present, Codex uses `.agents/plugins/marketplace.json` (*tested*). With only Claude's, `codex plugin marketplace list` shows that catalog's name.

**Clean up** after the Try it in [16.7](one-skill-three-bundles.md#try-it), which uses this catalog. Ask the agent to run these, or type them yourself (*tested*):

```bash
codex plugin remove brightline-practice@practice-openai
codex plugin marketplace remove practice-openai
```

### ChatGPT

A workspace admin imports a catalog from GitHub. New catalogs check for updates daily, and *Sync now* under *Admin > Plugins > Marketplaces* asks at once. A fixed commit keeps the version you selected. If an update is invalid, the plugin keeps its last working version.[^openai-import-plugins]

### OpenCode

OpenCode has no catalog for a bundle like this one. Your `skills` list names a folder, so it reads that folder's current files, and a `git pull` is how a new version arrives. Nothing checks the version for you. Plugins, which are code, come from npm, Git or a local folder, and `opencode plugin add`, `list`, `check`, `update` and `remove` manage them. OpenCode can also read skills from an HTTP catalog, a base address with an `index.json`. You raise an entry's `version` so it refreshes its copy.[^opencode-skills]

**Clean up** after the Try it in [16.7](one-skill-three-bundles.md#try-it), which uses it: remove the `skills` line from `opencode.jsonc`.

## Practice: one skill, three bundles

The steps are in [16.7](one-skill-three-bundles.md#try-it), under Try it. Choose one place below that you have not used yet. Plugins on claude.ai need a paid plan.

### Claude Code

Use it as in [Practice: what a plugin bundles](#practice-what-a-plugin-bundles). A plugin installed on claude.ai also downloads to Claude Code when you next start a session signed in to that account. Run `/reload-plugins` to load it. A coding agent in a folder loads nearly everything, as the table in [Product reference](#product-reference) shows.

### Claude

1. In claude.ai, open *Customize > Plugins*, then *Add*. Choose *Add marketplace* for a GitHub repository, or *Upload plugin* for a zip of the `practice-plugin` folder, which your agent can make. The folder must contain `.claude-plugin/plugin.json`, which the Claude Code tab in [Practice: what a plugin bundles](#practice-what-a-plugin-bundles) adds. It must not have a top-level `bin/` folder.[^claude-plugins-overview] Connecting GitHub is needed only for a private repository.
2. Install `brightline-practice`.
3. Turn on *Code execution and file creation* in *Settings > Capabilities*, so a skill's scripts can run. In a chat, a skill's folder is copied into the code execution sandbox.[^claude-skills-howto]

Plugins on claude.ai need a Pro, Max, Ultra, Team or Enterprise plan.

On accounts with the new Claude experience, chat and tasks are one conversation, with no mode to choose, so the lab's six places are five there.[^support-one-claude] A task can start a local connector only on your computer. Since October 6, 2026, new tasks on Pro, Max and Ultra run in the cloud, and no setting changes that. Anthropic's pages differ on whether a cloud task can reach a local connector, so keep the desktop app open, and record what happens. Team and Enterprise can run local sessions.[^support-cowork-surfaces] Accounts not moved over still have a mode called Cowork. A task does not ask for `userConfig` values, so a folder option needs its default.

### Codex

Use the catalog from [Practice: shipping a version](#practice-shipping-a-version), and open the repository in the ChatGPT desktop app's Codex view, in *Ask for approval* mode. Type `$`, and pick `brightline-practice:vendor-terms`. `$plugin-creator` creates the first files of a new plugin, but it writes the `.codex-plugin/` fallback, which you do not need here.[^openai-package-plugin]

### ChatGPT

1. After adding a catalog on this computer, restart the ChatGPT desktop app. Open *Customize > Plugins*, in Work if you still see that switch, and choose your catalog as the source.[^openai-get-started-work] A workspace admin can instead import a GitHub catalog: *Admin > Plugins > Add > Import marketplace*.[^openai-import-plugins]
2. Install the plugin, and start a new chat. A plugin with a local connector needs a chat that runs locally.[^openai-desktop-only]
3. Type `@` to pick the skill.

OpenAI's pages say Work, its name for longer tasks, can run code and shell commands, so expect a skill's script to run in a task. No page says so for a quick answer. Plugin hooks do not run in a task in the cloud.[^openai-plugins]

### OpenCode

Keep `"skills": ["./practice-plugin/skills"]` in `opencode.jsonc`, and restart OpenCode in the folder. A skill with an `ask` rule prompts you when it loads. Then send the request.

## Practice: watching it run

The steps are in [16.8](watching-it-run.md#try-it), under Try it. Your tool's tab says how to export telemetry for one run.

To read a connector's part of a trace, use OpenTelemetry's MCP conventions. At Development status on November 2, 2026, they name a connector call's span `{mcp.method.name} {target}`, such as `tools/call list_directory`. Its attributes include `mcp.method.name` and `gen_ai.tool.name`, and `error.type` when the call fails. Trace context travels as `traceparent` in the request's `params._meta`.[^otel-mcp] No product here says it follows these conventions.

### Claude Code

An interactive session prints none of this to its screen (*tested*), so use a one-shot run, and save what it prints to a file. A repository's settings cannot turn telemetry on, so set the variables for one command only.[^anthropic-monitoring] Send:

> Run `claude -p "What terms do we have with Scioto Office Products?" --plugin-dir ./practice-plugin --allowedTools "Bash(npm run vendors *)"`, and save everything it prints to `out/telemetry-1.txt`. Set `CLAUDE_CODE_ENABLE_TELEMETRY=1`, `OTEL_METRICS_EXPORTER=console` and `OTEL_LOGS_EXPORTER=console` for this one command only, and put them in no settings file. Then search the file for `plugin_loaded`, `skill_activated`, `cost.usage` and `token.usage`, and show me each record's `plugin.name` and `skill.name`, and the run's cost.

Every record carries your email address and account ids. `out/` is ignored by git, so the file stays out of the repository. Do not share it. Then send the same request with `OTEL_LOG_TOOL_DETAILS=1` added, saving to `out/telemetry-2.txt`. That setting also logs Bash commands and tool input, so use it only on made-up data. Never set the variables that log prompts, replies or tool content.

*Tested:* the events include `claude_code.plugin_loaded`, `skill_activated`, `api_request`, `tool_decision` and `tool_result`, with the metrics `claude_code.cost.usage` and `claude_code.token.usage`. The first run shows `plugin.name: "third-party"`, and `skill.name: "custom_skill"` on `skill_activated`. The second shows `brightline-practice` and `brightline-practice:vendor-terms`, and `plugin_loaded` then also carries `plugin.version`, so the log says which version loaded.

### Codex

Codex exports OpenTelemetry events, set in `[otel]` in your user config, never the project's, and `log_user_prompt` is off by default. They carry no plugin name. One metric, `skill.injected`, names the skill. The export does not cover ChatGPT tasks on the web.[^openai-config-advanced]

### OpenCode

OpenCode's version 2 pages document no telemetry, so there is nothing to turn on. Write that in your notes.

## Practice: installing is a trust decision

The steps are in [16.9](installing-is-a-trust-decision.md#try-it), under Try it. Your tool's tab says how to list the plugins you have. Any hook, script or local connector in a plugin you did not write needs its own line in your notes.

### Claude Code

`claude plugin list` shows each plugin and where it is read from. `claude plugin details <plugin>` lists its parts and its cost. **Mods** are plugins that change how Claude Code looks and behaves.[^anthropic-mods] Hooks, monitors, MCP and LSP servers, and mod processes run outside the sandbox, with your rights.[^anthropic-plugin-security]

Marketplaces come in three levels: official, community and third-party. To publish in the directory, use claude.ai/directory/manage, *Submit new*, *Plugin bundle*, on a paid plan. Every version gets automated validation and a security scan, and a person reviews each new listing. The source repository must be public.[^claude-directory-publish] Review does not cover a marketplace address or an upload. An organization Owner can make each plugin unavailable, available, installed by default or required.[^claude-plugins-admin]

### Codex

`codex plugin list` shows each plugin. An installed copy is under `~/.codex/plugins/cache/`. To publish, use OpenAI's plugin submission portal, after verification. Every plugin must complete OpenAI's review. Remote connectors need a stable public HTTPS address, and plugins with lifecycle hooks are not accepted.[^openai-submit] A workspace admin can import plugins from a GitHub catalog and control their install settings.[^openai-import-plugins]

### OpenCode

`opencode plugin list` shows plugins, and `.opencode/plugins/` holds local ones. An OpenCode plugin runs inside OpenCode with your rights, and its pages describe no sandbox for it. Treat installing one as running a stranger's program.[^opencode-server-plugins] Its version 2 pages name no curated directory.

## The three products at a glance

Four open standards are behind this table. Agent Skills was first developed by Anthropic and released as an open standard.[^agent-skills-home] Agent Plugins is at version 1.0.0, and people from Amazon, Cursor, Microsoft, OpenAI and Vercel steer it.[^agent-plugins-home] ChatGPT and Codex are on its list of compatible clients, and so is OpenClaw, another open-source agent this book covers.[^agent-plugins-clients] OpenTelemetry defines how running software reports what it did, and the Model Context Protocol (MCP) defines connectors, which [Chapter 17](../connectors-and-mcp/overview.md) teaches in full.

| | Anthropic | OpenAI | Open source (OpenCode version 2) |
| --- | --- | --- | --- |
| *Reads Agent Skills* | Yes. Claude Code adds its own fields. An upload to claude.ai may use only the six | Yes. Adds an optional `agents/openai.yaml` beside `SKILL.md` | Yes, loosely. Does not enforce the rules, and adds settings inside `metadata` |
| *Person-only setting* | `disable-model-invocation: true` in the frontmatter | `policy.allow_implicit_invocation: false` in `agents/openai.yaml`, stated for Codex | `metadata.opencode/autoinvoke: false`, with a `skill` rule of `ask` to stop a load by id |
| *Reads the Agent Plugins core* | No support found. Uses its own `.claude-plugin/plugin.json` | Yes. `plugin.json` at the root is its portable manifest | No support found. A plugin is code, so you use settings in `opencode.jsonc` |
| *Connector file* | `.mcp.json` | `mcp.json`, from the core | `mcp.servers` in `opencode.jsonc` |
| *Makes a connector read-only* | Deny rules in `.claude/settings.json`, or Blocked in claude.ai's connector settings | `disabled_tools` in `.codex/config.toml`, on local hosts in a trusted project | `deny` rules in `opencode.jsonc` |
| *Catalog* | `.claude-plugin/marketplace.json` | `.agents/plugins/marketplace.json` | npm, Git or a local folder for plugins, and an HTTP catalog for skills |
| *Where it runs* | Claude Code, and the Claude app's conversation, where chat and tasks may be one | ChatGPT and Codex | OpenCode, in the terminal and on the desktop |
| *How a new version reaches an installed copy* | Claude Code: `claude plugin update`, or auto-update, off by default for your own catalog. A local catalog loads the current files. claude.ai: synced automatically once the source updates | `codex plugin marketplace upgrade`, and a restart for a local catalog. A workspace checks daily, and has *Sync now* | A `skills` list reads the current folder. An HTTP catalog refreshes when `version` rises |
| *Curated directory* | Yes. Reviewed, with a security scan | Yes. Reviewed, and refuses plugins with hooks | None found |
| *Telemetry* | OpenTelemetry metrics and events, with plugin and skill names. Traces in beta | OpenTelemetry events, with no plugin names found, and one metric that names the skill | None documented |

Each cell comes from the product's own page, as the start of this page says. "No support found" and "None found" mean a search of those pages found nothing, not that the feature is impossible.

## The differences that change a decision

Measured against the standards, not against each other.

1. **The skill travels and the bundle does not, yet.** All three read Agent Skills, with claude.ai the strictest and OpenCode the loosest. Only OpenAI reads the Agent Plugins core today. So you keep one set of skills and, for now, a Claude manifest beside the core and an OpenCode setup beside that.
2. **Each product keeps its person-only setting in a different place.** OpenAI reads it from a file beside the skill, and OpenCode from inside the standard's `metadata` field, so the shared `SKILL.md` keeps its six fields. Claude Code reads it only as an extra frontmatter field, so that field comes from a build step.
3. **Hooks and local connectors travel least.** Claude chat runs neither, a cloud ChatGPT task runs no plugin hooks, and OpenAI's directory refuses plugins with hooks. A plugin with no hooks, whose skills carry their own scripts, works in the most places.
4. **The product makes a connector read-only, never the plugin.** All three do it in their own settings, in their own syntax.
5. **A local connector reads a different folder in each product.** Claude Code starts it in your session's folder. Codex starts it in its cached copy of the plugin. OpenCode gives it the whole project. So the same relative path can reach your data in one, nothing in another, and more than you meant in the third.
6. **A new version reaches each place differently.** claude.ai syncs it for you, Claude Code and Codex wait for an update or a restart, and Claude Code reads a local catalog's current files at the next session. So nobody can assume two copies match. A copy has to say which version it is.
7. **Only the curated directories are reviewed.** A catalog file in your own repository, and an npm package, are reviewed by no one but you.
8. **Telemetry differs most.** Only Claude Code names the plugin in its records, and hides third-party names until you ask. None says it follows OpenTelemetry's MCP conventions.

## What stays the same on every product?

Three things do not change, whichever product you use.

1. A skill is plain instructions and files you can read. Whichever product loads it, its numbers come from tested code, and what it may do is set by the product's permissions, not by its words.
2. A bundle written to an open standard moves to any product that implements it. Each product's extras stay in its own extension, or in its own files beside the core.
3. Telemetry exported to the open standard can go to any collector, and it shows what ran, never whether it was right.

## What it costs

### Claude Code

Claude Code comes with the Pro, Max, Ultra, Team and Enterprise plans, or a Console account. The Free plan does not include it.[^anthropic-setup] Plugins on claude.ai need one of the same five plans.[^support-use-plugins] `claude plugin eval` runs count toward your plan or API bill.

### Codex

Codex comes with a ChatGPT plan. The plugin directory is on every plan. Installing or using a plugin depends on plan, workspace, role and surface.[^openai-plugins-help] OpenAI's plan table shows plugins on Plus, Pro, Business and Enterprise or Education.[^openai-pricing]

### OpenCode

OpenCode is free under the MIT license, at version 2.2.5 on October 30, 2026.[^opencode-changelog] The tool is free, but you pay for the model you connect. Install version 2 with `npm install -g @opencode/cli`, or from `https://opencode.ai/v2/install`. The older `opencode-ai` package is still version 1.

## Product reference

The detail behind the table above. You do not need it for a Try it. Keep it for when a step in the lab names a field, a command or a limit.

### Claude Code

*Skills.* Frontmatter fields beyond the six: `disable-model-invocation` (only you start it), `user-invocable: false` (only Claude does), `arguments`, `context: fork`, `hooks` and `paths`. Skills also have dynamic context injection. `name` defaults to the folder's name. Skills are kept in `~/.claude/skills/`, `.claude/skills/`, folders inside other folders, plugins (started as `/plugin-name:skill-name`) and your claude.ai account. Each skill's description plus `when_to_use` is cut at 1,536 characters in the skill list. `${CLAUDE_SKILL_DIR}` is the skill's folder.[^anthropic-skills]

*Plugin manifest.* `.claude-plugin/plugin.json`, optional. Fields include `name`, `version`, `description`, `author`, `homepage`, `repository`, `license`, `keywords`, `dependencies` and `userConfig`. Components include skills, commands, agents, hooks, `.mcp.json`, LSP servers, output styles, themes, monitors, workflows and mods. A `userConfig` option has a `type` (`string`, `number`, `boolean`, `directory`, `file`), a `title` and a `description`, and may have `required`, `default`, `sensitive` and limits. Sensitive values go to the system's secure credential store.[^anthropic-plugin-manifest]

*Commands.* `claude plugin init`, `install`, `uninstall`, `enable`, `disable`, `update`, `list`, `details`, `configure`, `prune`, `eval`, `tag`, `test`, `validate`, and `marketplace add`, `list`, `remove`, `update`.[^anthropic-plugin-commands] `claude plugin eval` runs test cases in isolated sessions with only the plugin loaded, and compares them with a run without it. It needs Claude Code 2.1.269 or later, and it runs from the plugin's root.[^anthropic-plugin-evals] Claude Marketplace at claude.com/marketplace is a different place from these catalogs.

*Telemetry.* Events: `claude_code.plugin_installed`, `plugin_loaded`, `skill_activated`, `hook_registered`, `hook_execution_start`, `hook_execution_complete`, `hook_plugin_metrics` (official marketplace only) and `mcp_server_connection`. Metrics include `claude_code.cost.usage` and `claude_code.token.usage`. Attributes include `skill.name`, `plugin.name`, `plugin.version` and `marketplace.name` (official only on cost and token records). Telemetry for tasks on Team and Enterprise is set in the admin console.[^anthropic-monitoring]

### Claude

*What each place loads.*[^claude-platform-support]

| Component | Chat | A task (Cowork) | Claude Code |
| --- | --- | --- | --- |
| Skills | Loads | Loads | Loads |
| Commands | Loads as a skill | Loads, as `/plugin-name:command` | Loads |
| Agents and hooks | Ignored | Loads | Loads |
| Remote connector | Works once connected | Connect it from the Connectors tab | Loads |
| Local connector | Ignored | Loads when the session runs on your computer | Loads |
| Connector using `${user_config.*}` | Ignored when the address holds it | Ignored when an option has no default | Loads, with the option's default |
| A top-level `bin/` folder | Plugin cannot be installed | Cannot be installed | Loads |
| LSP servers, output styles, themes, settings | Ignored | Ignored | Loads |

On Pro, Max and Ultra, new tasks run in the cloud (October 6, 2026), so check the local connector row on your own account. Limits: 25 added marketplaces, 5,000 files and 200 MB per plugin.

### Codex

*Plugin layout.* `plugin.json` (Agent Plugins) at the root, `skills/<name>/SKILL.md`, `mcp.json` with a `type` per server, `.app.json` for registered connectors, `hooks/hooks.json`, `assets/`. `.codex-plugin/plugin.json` is a fallback, and `extensions.com.openai` replaces it when present. `$plugin-creator` in Codex, or `@plugin-creator` in ChatGPT, creates the first files of a plugin and writes the fallback file.[^openai-package-plugin]

*Skills.* `agents/openai.yaml` holds `interface` (display name, icons), `policy.allow_implicit_invocation` (default true) and `dependencies.tools`.[^openai-build-skills] In `.codex/config.toml`, `disabled_tools` is applied after `enabled_tools`.

### OpenCode

*Skills.* From `.opencode/skills`, `.claude/skills` and `.agents/skills`, in the project and globally, plus a `skills` list. A `skill` permission rule allows, asks or denies each one.

*Plugins.* The `plugins` list in `opencode.jsonc`, `.opencode/plugins/`, and `opencode plugin add`, `list`, `check`, `update`, `remove`. A plugin can hook tool calls, permission checks and shell commands, add tools and commands, and change agents.[^opencode-server-plugins]

*Connectors.* Under `mcp.servers`, with `"type": "local"` and a `command` list, or `"type": "remote"` and a `url`, and `disabled` to stop one.[^opencode-mcp]

[^anthropic-skills]: Extend Claude with skills, Anthropic.
[^anthropic-plugin-manifest]: Plugin manifest reference, Anthropic.
[^anthropic-plugin-commands]: Plugin commands reference, Anthropic.
[^anthropic-plugin-install]: Install and manage plugins, Anthropic.
[^anthropic-plugin-loading]: Plugin loading reference, Anthropic.
[^anthropic-host-marketplace]: Host and maintain a marketplace, Anthropic.
[^anthropic-plugin-org]: Manage Claude Code plugins for your organization, Anthropic.
[^anthropic-plugin-security]: Plugin security and trust, Anthropic.
[^anthropic-plugin-measure]: Measure plugin cost and usage, Anthropic.
[^anthropic-plugin-evals]: Test plugins with evals, Anthropic.
[^anthropic-skill-creator]: Extend Claude with skills, "Run evals with skill-creator", Anthropic.
[^anthropic-mods]: Mods, Anthropic.
[^anthropic-mcp]: Connect Claude Code to tools via MCP, Anthropic.
[^anthropic-permissions]: Configure permissions, Anthropic.
[^anthropic-monitoring]: Monitoring, Anthropic.
[^anthropic-desktop]: Desktop application, Anthropic.
[^anthropic-setup]: Advanced setup, Anthropic.
[^claude-plugins-overview]: Plugins, Anthropic.
[^claude-platform-support]: Plugin feature support across platforms, Anthropic.
[^claude-plugins-admin]: Manage plugins for your organization, Anthropic.
[^claude-org-rollout]: Roll out a plugin to your whole organization, Anthropic.
[^claude-connectors]: Get started with connectors, Anthropic.
[^claude-skills-howto]: Create custom skills, Anthropic.
[^claude-directory-publish]: Publish to the directory, Anthropic.
[^support-use-plugins]: Use plugins in Claude, Anthropic.
[^support-one-claude]: Claude Cowork and chat are one Claude, Anthropic.
[^support-cowork-surfaces]: Use Claude Cowork on web, desktop, and mobile, Anthropic.
[^openai-build-skills]: Build skills, OpenAI.
[^openai-package-plugin]: Package your plugin, OpenAI.
[^openai-config-reference]: Configuration reference, OpenAI.
[^openai-config-advanced]: Advanced configuration, OpenAI.
[^openai-mcp]: Model Context Protocol, OpenAI.
[^openai-plugins]: Plugins, OpenAI.
[^openai-plugins-help]: Plugins in ChatGPT, OpenAI.
[^openai-pricing]: Pricing, OpenAI.
[^openai-submit]: Upload and submit your plugin, OpenAI.
[^openai-desktop-only]: Submit desktop-only plugins, OpenAI.
[^openai-import-plugins]: Import and sync plugins from GitHub, OpenAI.
[^openai-get-started-work]: Get started with ChatGPT Work, OpenAI.
[^openai-codex-cli]: Codex CLI, OpenAI.
[^opencode-skills]: Skills, OpenCode.
[^opencode-mcp]: MCP servers, OpenCode.
[^opencode-permissions]: Permissions, OpenCode.
[^opencode-plugins]: Plugins, OpenCode.
[^opencode-server-plugins]: Server plugins, OpenCode.
[^opencode-changelog]: Changelog, OpenCode.
[^agent-skills-home]: Agent Skills, home page.
[^agent-skills-clients]: Agent Skills, Client Showcase.
[^agent-plugins-spec]: Agent Plugins, Specification.
[^agent-plugins-home]: Agent Plugins, home page.
[^agent-plugins-clients]: Agent Plugins, Compatible clients.
[^otel-mcp]: OpenTelemetry, Semantic conventions for MCP.
[^server-filesystem]: @modelcontextprotocol/server-filesystem 2.1.0 README, npm.



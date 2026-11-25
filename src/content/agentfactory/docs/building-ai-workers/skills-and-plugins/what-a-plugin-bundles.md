# 16.5 What a plugin bundles (/building-ai-workers/skills-and-plugins/what-a-plugin-bundles)

---
type: Document
title: "16.5 What a plugin bundles"
description: "A plugin is a folder of skills with a label, installed as one thing. What the label says, how a plugin borrows a connector safely, and when you need no plugin."
status: stable
order: 316.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T03:57:31Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.5" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-24T03:57:31Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A bookcase you build yourself arrives in one box. Inside are the boards, a bag of screws and the instructions. A label on the box says what it is and which version. You do not buy the screws one at a time. You bring home the box.

**What you will learn.** What a plugin is, what goes in it, and when you need none.

**Why it matters.** A skill in one project's folder helps one project. One box with a name and a version is what a whole team can install, and update together.

### What is a plugin?

A **plugin** is a folder that holds skills, with a label on it. People install it, update it and remove it as one thing.

```text
brightline-ap/
├── plugin.json          the label
├── skills/              the skills, one folder each
│   └── invoice-triage/SKILL.md
└── mcp.json             connectors, if it has any
```

The label is a file called the **manifest**, `plugin.json`. It says what the plugin is:

```json
{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
  "name": "brightline-ap",
  "version": "0.1.0",
  "description": "Brightline Wholesale Supply's accounts payable skills ..."
}
```

`name` and `$schema` are required. `$schema` says which version of the plugin standard this file follows. `version` is the plugin's own version, and [16.6](shipping-a-version.md) is about it.

As with a skill, you do not type these files. You ask your agent to make the plugin, and you read what it made.

### Is there a standard for plugins too?

Yes. The **Agent Plugins** specification, version 1.0.0 (agent-plugins.org, checked November 2, 2026), defines the part of a plugin that moves from one tool to another: the manifest, the skills, and the connectors. A tool may add more of its own, such as hooks and subagents. Those extras work only in that tool. Not every tool reads the standard yet, and [16.7](one-skill-three-bundles.md) shows how one plugin serves those tools too.

### What is a connector doing in a plugin?

It gives the skills their data. A connector links the agent to data outside the session ([16.2](choosing-the-right-piece.md)). [Chapter 17](../connectors-and-mcp/overview.md) builds one. Here, the plugin only names one that somebody else published. It does that in a file named `mcp.json`, after MCP, the open standard that connectors follow:

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

Read it as one sentence: use `npx`, a command that fetches and runs a published program, to start the file-reading program, at exactly version 2.1.0, and let it see the `data` folder. Three cautions come with a borrowed connector.

- **Pin its version.** Without `@2.1.0`, every install fetches whatever is newest that day.
- **It has the tools its author gave it.** This one can also write and move files, and a plugin cannot take those tools away. Your tool's settings can deny them by name, so the read-only rule is a setting, as [16.2](choosing-the-right-piece.md) said every "never" should be. [16.10](both-ai-vendors.md#make-a-connector-read-only) has the setting for each tool.
- **Check which folder it sees.** `./data` depends on the folder the program starts in, and tools start it in different places. Ask the connector which folders it may read, and check the answer.

### Where do secrets go?

Never in a plugin file, because files get shared. That means no key and no password.

### When do I need no plugin?

When the skill is for one project. A skill in the project's own skills folder works with no plugin at all. Make a plugin when you want the same skills in many projects, shared with a team, with a version, or in more than one tool. A plugin has a cost too: every plugin you turn on adds its skills' descriptions to every turn, so turn off the ones you rarely use, and leave out any skill that changed no case in the comparison from [16.3](writing-a-skill-with-the-expert.md#is-the-skill-better-than-no-skill).

**At work.** The builder bundles three skills, the triage skill, the Monday report and the due list, with one data connector, and names the plugin `brightline-ap`. The connector is made read-only in each tool's settings. Asked which folders it may read, it answers with one path, and the builder checks that it is the folder they meant, the repository's `data` folder.

### Try it

You turn the `vendor-terms` skill from [16.1](from-a-prompt-to-a-skill.md#try-it) into a plugin.

**Predict.** What changes about how you start the skill once it is in a plugin?

**Make.** Send, with your tool's skills folder in place of `<folder>`: "Make a plugin from the vendor-terms skill. Create a folder practice-plugin at the top of this repository, and move `<folder>/vendor-terms` into practice-plugin/skills/vendor-terms, so there is only one copy. Add practice-plugin/plugin.json with exactly these fields: $schema set to `https://agent-plugins.org/schemas/1.0.0/plugin.schema.json`, name brightline-practice, version 0.1.0, and a one-line description. Don't commit yet. Show me the files."

**Run.** Load the plugin for one session, as [your tool's tab](both-ai-vendors.md#practice-what-a-plugin-bundles) says. In Claude Code, the tab first has the agent add a second manifest, because Claude Code reads its own, and then has you start Claude Code from a terminal with one command. Then ask in words: "What terms do we have with Scioto Office Products?"

**What you should see.** The answer is Net 45, from the line for V004 in `npm run vendors`. The skill now carries the plugin's name in front of its own: `brightline-practice:vendor-terms`. It is no longer in your tool's skills folder, so from here on it loads only with the plugin.

**The operating rule:** bundle the skills you will share, with a name and a version. Pin every connector, make it read-only in a setting, and keep secrets out of every file.

![One installable box labeled plugin.json, with its name, version and $schema. Inside, the portable core: a skills folder with invoice-triage, ap-triage and due-by-friday, and mcp.json, with connectors as a local program or a remote address. Beside the box, a dashed tray labeled extensions, for hooks, helper agents, themes and commands, one product each, with a note that other products ignore them. A box labeled every turn lists each skill's description, each connector's tool list and a running local process.](img/plugin-bundle.png)

*Figure 16.8. A plugin's portable core is its skills and its connectors. Everything else is an extension for one product.*



# 10.6 Carry out the policy in your own app (/managing-ai-workers/governance-and-responsible-use/both-ai-vendors)

---
type: Document
title: "10.6 Carry out the policy in your own app"
description: "Where to find the settings that carry out one AI policy in Claude, ChatGPT or an open-source tool, the three differences that change a step, and what no setting does."
status: stable
order: 210.6
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "10"
part: II
expert_status: required
concepts: [ "10.6" ]
last_verified: 2026-10-23
review_by: 2026-12-21
sources:
  - id: anthropic-sso
    title: "Set up single sign-on (SSO) (Claude Help Center, updated 13 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13132885-set-up-single-sign-on-sso
  - id: anthropic-domain-claim
    title: "Claim and migrate accounts on your domain (Claude Help Center, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/14625619-claim-and-migrate-accounts-on-your-domain
  - id: openai-domain
    title: "Verifying your domain for OpenAI identity (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/8871611-verifying-your-domain-for-openai-identity
  - id: anthropic-audit-logs
    title: "Access audit logs (Claude Help Center, updated 15 June 2026, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/9970975-access-audit-logs
  - id: openai-compliance
    title: "OpenAI Compliance Platform for Enterprise and Edu customers (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/9261474-openai-compliance-platform-for-enterprise-and-edu-customers
  - id: anthropic-org-instructions
    title: "Set organization instructions (Claude Help Center, updated 31 August 2026, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/14546867-set-organization-instructions
  - id: openai-workspace-settings
    title: "Managing workspace settings in ChatGPT Enterprise (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/8411955-managing-workspace-settings-in-chatgpt-enterprise
  - id: anthropic-custom-roles
    title: "Manage custom roles on Enterprise plans (Claude Help Center, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans
  - id: openai-rbac
    title: "Managing feature access with role-based access control in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/11750701-managing-feature-access-with-role-based-access-control-in-chatgpt
  - id: openai-data-residency
    title: "Data residency and inference residency for ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt
  - id: anthropic-otel
    title: "OpenTelemetry tracing for the Claude API (Claude Platform Docs, verified 2026-11-18)"
    resource: https://platform.claude.com/docs/en/manage-claude/opentelemetry
  - id: anthropic-aup
    title: "Usage Policy (Anthropic, effective 12 November 2026, verified 2026-11-18)"
    resource: https://www.anthropic.com/legal/aup
  - id: anthropic-training-consumer
    title: "Is my data used for model training? (Anthropic Privacy Center, updated 16 March 2026, verified 2026-11-23)"
    resource: https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training
  - id: anthropic-training-commercial
    title: "Is my data used for model training? Commercial products (Anthropic Privacy Center, updated 18 August 2026, verified 2026-11-18)"
    resource: https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training
  - id: anthropic-incognito
    title: "Use incognito chats (Claude Help Center, updated 30 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12260368-use-incognito-chats
  - id: anthropic-memory
    title: "Use Claude's chat search and memory to build on previous context (Claude Help Center, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
  - id: anthropic-cowork
    title: "Get started with Claude Cowork (Claude Help Center, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: anthropic-connectors
    title: "Use connectors to extend Claude's capabilities (Claude Help Center, updated 18 November 2026, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: openai-usage-policies
    title: "Usage policies (OpenAI, effective 20 November 2026, verified 2026-11-21)"
    resource: https://openai.com/policies/usage-policies/
  - id: openai-data-controls
    title: "Data controls in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt
  - id: openai-temporary-chat
    title: "Temporary chat in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt
  - id: openai-projects
    title: "Projects in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - id: openai-memory-business
    title: "Memory FAQ (Business Version) (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/9295112-memory-faq-business-version
  - id: openai-admin-apps
    title: "Admin controls, security, and compliance for plugins and apps (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-for-plugins-and-apps
  - id: openai-sharing
    title: "Sharing conversations and scheduled tasks in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/7925741-sharing-conversations-and-scheduled-tasks-in-chatgpt
  - id: opencode-providers
    title: "Providers (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/providers/
  - id: opencode-permissions
    title: "Permissions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: openclaw-security
    title: "Security (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security
  - id: openclaw-exposure
    title: "Gateway exposure runbook (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/exposure-runbook
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A company gives its drivers fuel cards. The card company lets the owner block some kinds of purchases and look back at past charges. It cannot see what a driver buys with a personal card. And the rules for drivers come from the company, not from the card company.

**What you will learn.** Where the settings that carry out one AI policy are in your own app, Claude, ChatGPT or an open-source tool, who can change each one, and what no setting does. You use them in Lab 10: the training check in [Task 4](lab.md#task-4-which-way-in), and the rest in [Task 12](lab.md#task-12-which-settings-carry-it-out), where you decide which setting carries each rule.

**Why it matters.** The answers in [10.1](appropriate-use.md) to [10.5](organizational-policy.md) are the same on Claude, on ChatGPT and on open-source tools you run yourself, which carry out only the rules you write. Which settings carry the answers out, and who can change them, differ. So Dave may enforce a rule on one AI vendor that he can only ask for on the other.

## Where to set the policy in your app

**Before you start, have ready** your AI policy, the one [10.5](organizational-policy.md#the-policy) writes, and the name of your company's **Owner** or admin, the person with the top role on a plan for companies (Team, Business or Enterprise). Open your app beside this page and follow your tab.

### Claude

*Who does which step.* Claude's built-in roles are User, Admin, Owner and Primary Owner.[^anthropic-custom-roles] Steps 1, 3 and 5 to 7 need an Owner or Primary Owner on Team or Enterprise, under **Organization settings**. On any plan, you do steps 2, 4 and 8 yourself. The pages this lesson cites do not say where Claude shows your plan or your role, so if you do not see Organization settings, ask whoever manages your company's Claude account. On a personal plan, or without the Owner role, send your Owner a request like this, and keep those rules in your written policy until it is done:

```text
Set up our Claude account to carry out our AI policy:
- Verify our email domain, so no one creates new personal accounts with it.
- Turn on only the connectors the policy approves, and set their send, write and delete tools to Needs approval or Blocked.
- Add the policy's rules for the AI to the organization instructions.
- Set memory as the policy says.
- Tell me who keeps the record of what happened, and how.
```

1. **Keep work in the company's account.** The Owner verifies the company's email domain. On Enterprise, the Owner can also turn on *Migrate accounts using your domain*, under Organization settings > Organization and access, to move the old ones.[^anthropic-domain-claim]
2. **Check whether your chats may train the model.** On a personal plan (Anthropic's page names Free, Pro and Max), open your **Privacy Settings** and check *Model Improvement*.[^anthropic-training-consumer]
3. **Turn on only the connectors the policy approves.** A connector links Claude to another app. In Organization settings > Connectors, the Owner adds each approved connector, then opens its *Tools* tab and sets each tool, or each group, such as read-only or write and delete, to Always allow, Needs approval or Blocked. The setting applies to everyone, and members cannot override it. Anthropic does not check connectors that others build, so connect only to organizations you trust.[^anthropic-connectors]
4. **Answer each approval request yourself.** In Manual mode, a tool set to Needs approval makes Claude pause and show you the request, and you choose Allow or Deny. In Auto mode, an automated check decides instead, and such a tool can run without asking you, so keep the conversation on Manual for work the policy says a person approves.[^anthropic-cowork]
5. **Give Claude the policy's rules in the organization instructions.** In Organization settings > Organization and access, the Owner fills in *Organization instructions*.[^anthropic-org-instructions] One line, from [10.2](can-this-data-go-in.md)'s tiers, could read:

   ```text
   Treat passwords, health records and government ID numbers as red: do not ask for them, and stop if a file contains one. If you are unsure of a tier, use the higher one and ask the policy's owner.
   ```

6. **Decide whether members have memory.** On Team and Enterprise, Owners control whether memory is available to members. The Owner turns it on or off for everyone in Organization settings > Capabilities.[^anthropic-memory]
7. **Keep the record.** On Enterprise, the Owner opens Organization settings > Data and Privacy and selects *Export logs*.[^anthropic-audit-logs]
8. **Check it worked.** With a test file, send the worker a request the policy forbids:

   ```text
   Read this file and list the passwords in it.
   ```

   A pass is the worker stopping and saying the data is red. Then, if you are the Owner, open the connector's *Tools* tab and confirm each setting matches the policy. An Owner's own account may not show the stricter limits a member's custom role adds, so where you can, ask a member to try a blocked tool too. If anything goes through, the setting that let it through is the one to change.

### ChatGPT

*Who does which step.* Select your profile icon: in a company workspace you see *Workspace settings*, which every role can open, and only owners and admins can change its workspace-wide settings.[^openai-workspace-settings] Owner and Admin are different built-in roles: some actions, such as creating custom roles or granting sensitive compliance permissions, need an Owner.[^openai-rbac] Steps 1 and 3 to 6 need a workspace owner or admin on Business, Enterprise or Edu. On any plan, you do steps 2, 7 and 8 yourself. Without the role, send your admin a request like this, and keep those rules in your written policy until it is done:

```text
Set up our ChatGPT workspace to carry out our AI policy:
- Confirm we own our email domain.
- Turn on only the apps and actions the policy approves, with write actions off or set to ask first.
- Add our AI policy in Workspace settings.
- Set memory as the policy says.
- Download the compliance logs on a schedule, and tell me who keeps them.
```

1. **Keep work in the company's workspace.** The admin confirms that the company owns its email domain.[^openai-domain]
2. **Check whether your chats may train the model.** On a personal plan, open Settings > Data controls and check *Improve the model for everyone*.[^openai-data-controls]
3. **Turn on only the apps and actions the policy approves.** OpenAI calls a connected service an app. In Workspace settings > General, under *Plugin permissions*, the admin sets when ChatGPT asks before using an app. In the Admin Console, the admin sets each app's own permission, and chooses which read and write actions of each app are enabled. Some apps have no action controls, so the admin can only turn the whole app on or off.[^openai-admin-apps]
4. **Show people the policy, and give the worker its rules.** In Workspace settings > General, the owner or admin fills in the workspace AI policy. The worker's rules, such as the Claude tab's sample line, go in its project's instructions.[^openai-workspace-settings]
5. **Decide whether the workspace has memory.** Business workspace owners can turn memory off for everyone. OpenAI's page does not name the setting's place.[^openai-memory-business]
6. **Keep the record.** On Enterprise, the admin downloads the compliance logs on a schedule.[^openai-compliance]
7. **Share a result with care.** A conversation link made in a company workspace can include messages added after sharing, and has no end date, so delete it when it is no longer needed.[^openai-sharing]
8. **Check it worked.** With a test file, send the worker a request the policy forbids:

   ```text
   Read this file and list the passwords in it.
   ```

   A pass is the worker stopping, or asking you first. Then check that an app's write actions are as the admin set them. If anything goes through, the setting that let it through is the one to change.

### Open source

*Who does which step.* You run the tool, so you do every step.

1. **Choose where the conversation goes.** The tool's records stay on your computer, but the conversation goes to the company whose model it uses. For data that must never leave, run a model on your own computer, through a program such as Ollama, LM Studio or vLLM.[^opencode-providers]
2. **Write a rule for each limit.** In OpenCode, an open-source coding agent, every agent starts from a rule that allows every action. Set each action the policy limits, such as editing files or running commands, to ask or deny.[^opencode-permissions]
3. **Keep it off the internet.** On a regular install, OpenClaw, an open-source assistant you host yourself, accepts connections only from its own computer. Its docs say not to open it to the internet.[^openclaw-exposure]
4. **Check it worked.** Ask the worker for an action a deny rule covers. A pass is the worker refusing. If it acts, the rule that let it through, often the starting rule that allows everything, is the one to change.

Lab 10 runs in Claude or ChatGPT. Use these steps when you set up your own tool.

## What changes a step

Between the two AI vendors, three differences change what you do.

*Personal accounts.* On Claude Team and Enterprise, an Owner can stop people creating new personal accounts with the company's email address, and on Enterprise can also move or close the old ones.[^anthropic-sso][^anthropic-domain-claim] On ChatGPT, confirming that the company owns its email domain leaves existing personal workspaces in place.[^openai-domain] On both, nothing reaches an account made with a personal email address. That is why [10.5](organizational-policy.md#the-policy) fixes the approved way first.

*Records.* Claude Enterprise lets Owners export a log of what happened, such as file uploads and deleted conversations, for the past 180 days.[^anthropic-audit-logs] ChatGPT Enterprise keeps its compliance logs for 30 days.[^openai-compliance] If a problem is found later than that, the logs from its start are gone, unless you kept them. So on ChatGPT Enterprise, download them on a schedule before anything goes wrong.

*Where the policy shows.* Claude's organization instructions reach the AI in every conversation, and members cannot see them.[^anthropic-org-instructions] ChatGPT Enterprise shows the workspace's AI policy to people in a pop-up every 30 days.[^openai-workspace-settings] So the instructions reach the worker but not people, and the pop-up reaches people but not the worker.

## What stays the same

**What no setting does.** Settings carry out a policy that people wrote and approved. They do not write it. A pop-up reminds, and an instruction asks, and neither is a control ([10.2](can-this-data-go-in.md#the-way-in)). Audit logs and custom roles come with Enterprise, not with Claude Team or ChatGPT Business.[^anthropic-custom-roles][^openai-rbac] And each AI vendor's usage policy is an outer edge ([10.1](appropriate-use.md#the-outer-edge)). Your own rules, such as Brightline's list of what a person must sign ([10.4](when-a-human-must-sign.md#who-signs)), sit inside it.

## Product reference

This is for looking things up, not for reading through. These are the lines the steps above do not use, with the source and the date each was checked. Products change every few weeks, so check the date, and open the source if it is old. A setting that keeps data in one region decides where it is stored or worked on. It does not reach an outside service the worker sends data to, such as a connected app, which handles it under its own terms.[^openai-data-residency][^anthropic-otel]

### Claude

*As verified 18 November 2026.*

- *Usage Policy.* In effect since November 12, 2026, it names eleven high-risk areas: legal, medical, finance, credit, insurance, housing, employment, education and credentials, healthcare access, public benefits and services, and legal status and adjudication. What they require is in [10.1](appropriate-use.md#the-outer-edge). Users must also make sure their agents' actions follow the policy.[^anthropic-aup]
- *Training on plans for companies.* On Team, Enterprise and the API, chats are not used by default.[^anthropic-training-commercial]
- *Incognito chats.* Not used for training, not saved to history, not used for memory, and kept for 30 days by default. Not available inside projects. On Team and Enterprise they are included in the organization's data exports.[^anthropic-incognito]

### ChatGPT

*As verified 21 November 2026.*

- *Usage Policies.* In effect since November 20, 2026, they prohibit automating high-stakes actions in sensitive areas, including credit, employment, housing, legal, medical, insurance and education, without human review.[^openai-usage-policies]
- *Training on plans for companies.* On Business, Enterprise and Edu, business data is not used for training by default.[^openai-data-controls]
- *Temporary Chat.* Not in history, does not create memories, not used to improve models, and may be kept for up to 30 days for safety. A chat in a project cannot be temporary.[^openai-temporary-chat][^openai-projects]

### Open source

*As verified 23 October 2026.*

- *Running it safely.* Running a tool yourself moves the security work to you.[^openclaw-security]

[^anthropic-sso]: Set up single sign-on (SSO), Claude Help Center.
[^anthropic-domain-claim]: Claim and migrate accounts on your domain, Claude Help Center.
[^openai-domain]: Verifying your domain for OpenAI identity, OpenAI Help Center.
[^anthropic-audit-logs]: Access audit logs, Claude Help Center.
[^openai-compliance]: OpenAI Compliance Platform for Enterprise and Edu customers, OpenAI Help Center.
[^anthropic-org-instructions]: Set organization instructions, Claude Help Center.
[^openai-workspace-settings]: Managing workspace settings in ChatGPT Enterprise, OpenAI Help Center.
[^anthropic-custom-roles]: Manage custom roles on Enterprise plans, Claude Help Center.
[^openai-rbac]: Managing feature access with role-based access control in ChatGPT, OpenAI Help Center.
[^openai-data-residency]: Data residency and inference residency for ChatGPT, OpenAI Help Center.
[^anthropic-otel]: OpenTelemetry tracing for the Claude API, Claude Platform Docs.
[^anthropic-aup]: Usage Policy, Anthropic.
[^anthropic-training-consumer]: Is my data used for model training?, Anthropic Privacy Center.
[^anthropic-training-commercial]: Is my data used for model training? Commercial products, Anthropic Privacy Center.
[^anthropic-incognito]: Use incognito chats, Claude Help Center.
[^anthropic-memory]: Use Claude's chat search and memory to build on previous context, Claude Help Center.
[^anthropic-connectors]: Use connectors to extend Claude's capabilities, Claude Help Center.
[^anthropic-cowork]: Get started with Claude Cowork, Claude Help Center.
[^openai-usage-policies]: Usage policies, OpenAI.
[^openai-data-controls]: Data controls in ChatGPT, OpenAI Help Center.
[^openai-temporary-chat]: Temporary chat in ChatGPT, OpenAI Help Center.
[^openai-projects]: Projects in ChatGPT, OpenAI Help Center.
[^openai-memory-business]: Memory FAQ (Business Version), OpenAI Help Center.
[^openai-admin-apps]: Admin controls, security, and compliance for plugins and apps, OpenAI Help Center.
[^openai-sharing]: Sharing conversations and scheduled tasks in ChatGPT, OpenAI Help Center.
[^opencode-providers]: Providers, OpenCode v2 documentation.
[^opencode-permissions]: Permissions, OpenCode v2 documentation.
[^openclaw-security]: Security, OpenClaw documentation.
[^openclaw-exposure]: Gateway exposure runbook, OpenClaw documentation.



# Data (/claude-and-chatgpt-2/build-something/data)

---
type: Document
title: "Data"
description: "How to build with Claude Data: connect a data source, ask a question in plain words, get a dashboard whose every chart shows its query and refresh time, choose carefully how to share it, and do the same job with the Data plugin in ChatGPT Work."
status: stable
order: 0.3994
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Data" ]
last_verified: 2026-11-17
sources:
  - id: claude-data
    title: "Get started with Claude Data (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/17454700-get-started-with-claude-data
  - id: claude-bigquery
    title: "Google Cloud BigQuery connector (Claude connectors directory, verified 2026-11-17)"
    resource: https://claude.com/connectors/bigquery
  - id: google-sandbox
    title: "Try BigQuery using the sandbox (Google Cloud, verified 2026-11-17)"
    resource: https://docs.cloud.google.com/bigquery/docs/sandbox
  - id: anthropic-share
    title: "Share artifacts (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: openai-data
    title: "Using the Data plugin in ChatGPT Work and Codex (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001518-using-the-data-plugin-in-chatgpt-work-and-codex
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A car's dashboard shows a few numbers you need right now, such as your speed. A business dashboard does the same. It shows a few important numbers, and it shows the latest ones each time you open it.

> [!NOTE]
> **Data words**
>
> - **Dashboard:** a page of charts and numbers about a business.
> - **Data warehouse:** the big store where a company keeps its records, such as sales and payments.
> - **Query:** an exact question sent to the warehouse. It says what to count, and for which dates.

## What it is

**Claude Data** turns your questions about company data into dashboards and short reports. It used to be called Claude Dashboards. You need a paid plan. The numbers come from data connected to Claude, usually your company's, or from a file you import.[^claude-data] To practice without company data, use the Try it at the end of this page.

## Build one

1. **Connect your data.** This is usually your company's data warehouse, such as Snowflake. Your company's IT team may need to help.
2. **Ask a question in plain words.** In the Claude desktop app, ask in any chat, or pick the **Data** tile in the Artifacts tab.[^claude-data]

No company data yet? Pick the **Data** tile and choose **Import a file**. Claude Data takes three common kinds of data file: CSV, Excel and JSON, a text format that programs use to pass data.[^claude-data]

![The Data tile's first question in the Claude app, as it looked on November 17, 2026: Where do your numbers come from? Two choices are below it. Use a connector: numbers stay up to date. Import a file: CSV, Excel, or JSON.](img/data-where-numbers-come-from.png)

For example, if a company kept its paid bills in a warehouse:

> Build a dashboard of payments to suppliers over the last six months: the total paid each week, the ten biggest suppliers, and how many bills were paid late.

## How to trust a number

Claude writes a query for each chart. **Each chart shows its query, and when its data was last updated.** If the query counts the wrong thing, ask Claude to change it.[^claude-data] To see the queries, click a number, or open **Sources**, the button at the top right of the dashboard.

![A Data dashboard in the Claude app with its Sources panel open, as it looked on November 17, 2026. The pointer is on the Sources button at the top right. Each number on the dashboard is underlined with dots, which means you can click it. The Sources panel lists four items: Q3 company totals, Q3 totals by department, Q3 budget vs actual (uploaded CSV), and Largest single-month gap. Below them: Refresh data, On each visit.](img/data-sources-panel.png)

You do not need to read the query yourself. Ask Claude: "Explain this query in plain words." Then check three things:

1. **What is counted?**
2. **Which dates?**
3. **What is left out?**

For example, "paid late" means nothing until you know what "late" means in the query.

A chart can look right and still be wrong. So before you use a number, **reconcile** it: check it against a number you already trust. For example, a chart says Brightline paid $12,906.40 in one week:

1. **Find the source.** Ask Claude which records the number came from.
2. **Work it out another way.** Add up those records yourself, or compare with the payment report your team already uses.
3. **Explain any difference.** If the two numbers differ, find out why before you use either one.

Your company's data team can also mark some queries as approved. These are called **certified queries**, and they are in beta. A chart that uses one shows a small badge. If anyone changes a certified query, it loses its certification and the badge.[^claude-data]

## Share it: whose data do people see?

Only you can see a new dashboard. Before you click **Share**, choose one of two ways.[^claude-data],[^anthropic-share] With **normal sharing**, each person sees only the data they are allowed to see. With **live sharing**, the people you share with see *your* results for this dashboard's charts, even data they could not see themselves:

![Two ways to share a Data dashboard. Left, normal sharing, the default: each viewer's own connection loads the data, a viewer without access sees an error in that part, and the risk is little, because people see only what they could see anyway. Right, live sharing, in beta: your connection loads the data, a viewer without access sees your results, and the risk is that others see your data, though only in this dashboard's charts. At the foot: live sharing lends your access, so check every chart before you turn it on.](img/two-ways-to-share-a-dashboard.png)

Live sharing is limited: people see only the answers to this dashboard's own queries, and only people who can edit the dashboard can change those. Even so, Anthropic says: check what the dashboard shows before you share it this way.[^claude-data]

## In ChatGPT: the Data plugin

ChatGPT has a similar tool, the **Data plugin**.[^openai-data]

1. **Set it up.** Open the plugin directory, find **Data** and install it. Then connect the data you need. At work, your company decides whether you can do this yourself, or whether IT does it for you.[^openai-data]
2. **Ask.** In the ChatGPT desktop app, open **Work** and type `@Data` and then your question. For example: "@Data Compare sales this quarter with last quarter and explain the biggest changes."
3. **Make a dashboard.** Ask it to turn the answer into a dashboard. You can change it, share it and update it.[^openai-data]

OpenAI's help page does not list which plans include the Data plugin. On a paid Plus account, it was in the plugin directory when this page was checked.[^openai-data]

## Does it stay up to date?

Yes, by itself. Claude updates a dashboard's data when someone opens it and the data is due for an update. It does not update on a schedule.[^claude-data] So you do not need a scheduled task to keep a dashboard fresh. A scheduled task is for work that must happen at a set time, even when nobody opens anything. You met them in [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md).

## Try it

Download [budget_actual_q3.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/budget_actual_q3.csv), the budget-against-actual file that the [Sheets](sheets.md#try-it) page uses.

1. **Import the file.** In the Artifacts tab, pick **Data**. Choose **Import a file**, and pick the file.
2. **Ask for a dashboard.** Type the request below.

   > Build a dashboard from this file. Show the budget and the actual for each department, month by month, and which departments are over budget for the three months together.

3. **Question the headline.** Which department is furthest over budget? Look at its three months. Does one look wrong?
4. **Correct it.** Type: "IT's actual for August is a typing mistake. It should be 12,360. Correct it and update the dashboard."

**The answers.** The first dashboard looks finished, and it is wrong. It says 4 of 8 departments are over budget, and that the company spent 795,390. One cell causes this: IT's actual for August is 123,600 in the file, with one zero too many. Claude may point out the odd figure in the chat while the dashboard still shows the wrong totals. After the correction, 3 of 8 departments are over budget (Logistics, Warehouse and Sales), and the company spent 684,150, which is 18,150 over its budget, or 2.7%.

![The same Data dashboard twice, as it looked in the Claude app on November 17, 2026. Above, before the correction: 4 of 8 departments ended the quarter over budget (IT, Logistics, Warehouse, Sales), Q3 budget 666,000, Q3 actual 795,390, variance +129,390, +19.4%. Below, after IT's August figure was corrected: 3 of 8 departments over budget (Logistics, Warehouse, Sales), Q3 budget 666,000, Q3 actual 684,150, variance +18,150, +2.7%. Both look equally finished. Only the lower one is right.](img/data-dashboard-before-and-after.png)

**On the Free plan,** attach the file in a chat, ask for a chart of the same numbers, and do steps 3 and 4 there.

**With your company's data connected,** ask Claude Data a question you already know the answer to, such as last month's total sales. Does it match?

## Going further: a dashboard on practice data (optional, paid plan)

Nothing later in this section needs this part. Skip it if setting up a Google account is more than you want today.

### What you practice, and what you need

The Try it uses a file. A company's numbers usually sit in a data warehouse, and Claude reads them through a connector. This task lets you practice that. Google gives everyone free practice data in **BigQuery**, its data warehouse. One set, `thelook_ecommerce`, is a made-up online clothes shop, with orders, products, customers and website visits. It is not a real company, so it is safe to practice on. You need a paid Claude plan and a Google account. You do not need a credit card: without one, Google runs your project in its free **sandbox**.[^google-sandbox]

> [!NOTE]
> **Words for this task**
>
> - **Sandbox:** Google's name for its free, limited space to practice in, where mistakes cost nothing. It is not Claude's borrowed desk, which is also called a sandbox.
> - **Google Cloud project:** a named space in Google Cloud that holds your work there. It is not a Claude project.
> - **Project ID:** the name Google gives that project. You type it so Claude knows which one to use.
> - **API:** a door that lets one program use another. Here, it lets Claude use BigQuery.

> [!WARNING]
> **Use a Google account that holds no work data.** When you connect, Google gives the connector BigQuery access for your whole Google account, not only one project. So use an account whose BigQuery holds nothing private, and make a new, empty project for this task.
>
> **If you have ever given Google Cloud a payment card, check after step 1.** Google may attach your new project to that billing account. Then the project is not in the sandbox. Open [console.cloud.google.com/billing/projects](https://console.cloud.google.com/billing/projects). If your project's row names a billing account, click the three dots at the end of that row and choose **Disable billing**. It changes only that project.[^google-sandbox]

### Steps 1 to 3: set up Google's free practice space

1. **Make a Google Cloud project.** Open [console.cloud.google.com/projectcreate](https://console.cloud.google.com/projectcreate) and sign in with your Google account. Google may ask you to accept its terms first. Type a name for the project, for example `claude-practice`. Under the name, Google shows the **project ID** it has given the project, such as `claude-practice-514912`. Copy it. You need it in step 5. Leave the other boxes as they are, and click **Create**.
2. **Turn on the BigQuery API.** Open [console.cloud.google.com/apis/library/bigquery.googleapis.com](https://console.cloud.google.com/apis/library/bigquery.googleapis.com). Check that your new project is named in the bar at the top. If another project is named there, click the name and pick yours. Then click **Enable**. If the button says **Manage**, it is already on.
3. **Check you are in the sandbox.** Open [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery). Close any tour boxes. If Google asks you to set up billing or a free trial, close that message too. Without billing, your project runs in the free sandbox, and Google shows a **Sandbox** label at the top of the page.[^google-sandbox] Your project is in the list on the left.

   ![The top of the BigQuery page in Google Cloud, as it looked on November 17, 2026: a label that says Sandbox, then the words Set up billing to upgrade to the full BigQuery experience.](img/bigquery-sandbox-label.png)

### Steps 4 to 8: build the dashboard and check a number

4. **Connect BigQuery to Claude.** In the Claude desktop app, open **Customize > Connectors** (or **Plugins**). Search for **Google Cloud BigQuery**, made by Google, and click **Connect**. Choose the same Google account. Google asks you to allow "Claude for BigQuery" to view and manage your data in Google BigQuery. Click **Continue**.[^claude-bigquery]
5. **Ask for a dashboard.** In a new chat, type this, with your own project ID:

   > Use my BigQuery project [your project ID] to query bigquery-public-data.thelook_ecommerce. Build a Data dashboard with four charts: revenue by month, the top product categories, orders by status, and customers by country.

   Claude may ask before it uses a BigQuery tool. Read what the tool does, then allow it. When the dashboard opens, it asks to use the connector too, with one tool that only reads. Click **Continue**.
6. **Read one query.** Open **Sources**, click the query for the revenue chart, and open **Query**. Ask Claude to explain it in plain words. Answer the three questions from How to trust a number: what is counted, which dates, and what is left out. Then one more: does "revenue" include orders that were canceled or returned?

   ![The query behind a chart, as the Claude app showed it on November 17, 2026. Above, the dashboard's Revenue by month chart, with the caption: Sum of sale price on order items, excluding cancelled and returned. The latest month is partial. Below, the query itself, written in a language called SQL: select the month and the sum of sale_price from the order_items table of bigquery-public-data.thelook_ecommerce, where status is not Cancelled or Returned, grouped and ordered by month.](img/data-query-behind-a-chart.png)

7. **Reconcile one number.** Pick one full month's revenue. Ask Claude to work it out a second way, with a new query written from scratch, and not to change the dashboard. Do the two numbers match? If not, find out why before you trust either one.
8. **Tidy up when you finish.** The dashboard needs the connector to load its numbers, so do this only when you are done with it. In Claude, open the connector's page again, click the three dots beside **Connected**, and choose **Disconnect**.

### What you should see

Four charts, each with its own query under Sources. When this task was run on November 17, 2026, the revenue chart said under its title what it counts: the sale price of order items, leaving out canceled and returned ones. The dashboard's headline quoted November 2026, and the chart's caption said the latest month is partial: a number to question before you repeat it. For October 2026, the second query gave the same revenue as the dashboard, $387,757.70. Claude also showed what the two left-out groups would have added: about $125,000. Your numbers will differ, because Google updates the practice data.

Steps 1 to 7 were run on November 17, 2026. Google changes its screens often, so a label may differ a little from these steps.

[^claude-data]: As verified on November 17, 2026. Claude Data is on the Pro, Max, Ultra, Team and Enterprise plans, and connects to warehouses such as Snowflake, BigQuery and Databricks, or to apps such as Salesforce. A query is written in a language called SQL. On Enterprise plans, Data turns on by default on November 20, 2026, unless an owner has already chosen a setting. Anthropic says Claude refreshes a dashboard's data "when someone opens it and the data is due for a refresh", and that "It doesn't refresh on a schedule". Anthropic's page names only connected sources. In the app on November 17, 2026, the Data tile also offered **Import a file**, for a CSV, Excel or JSON file, and a dashboard built from a file listed its queries under Sources. Get started with Claude Data, Anthropic.
[^claude-bigquery]: As verified on November 17, 2026. Claude's connectors directory lists Google Cloud BigQuery as "Made by Google". Its tools list datasets and tables, and run SQL queries. Anthropic does not control what a connector's tools do, so read each one before you allow it. In one account on November 17, 2026, the sidebar item was named Plugins, and its search found the connector. When it was connected that day, Google's screen said the connector would be able to "View and manage your data in Google BigQuery", and the dashboard asked to use one tool, "Execute sql readonly". Google Cloud BigQuery, Claude.
[^google-sandbox]: As verified on November 17, 2026. Google says the sandbox lets you use BigQuery "without providing a credit card or creating a billing account for your project", with a free limit of 1 TiB of processed query data each month. When the sandbox is on, "A BigQuery sandbox notice is now displayed on the BigQuery page". Google also says "If you already created a billing account, you can still use BigQuery at no cost in the free usage tier." On November 17, 2026, a new project in an account with a billing account was attached to that account and showed no sandbox notice. After **Disable billing** was chosen for that project, the page showed a Sandbox label. Try BigQuery using the sandbox, Google Cloud.
[^anthropic-share]: Share artifacts, Anthropic.
[^openai-data]: As verified on November 11, 2026, in OpenAI's help page and in the plugin directory of a ChatGPT Plus account. A workspace admin sets the installation policy, and the plugin offers to install other plugins it needs if the workspace allows them. The plugin also works in Codex, ChatGPT's tool for coding. Using the Data plugin in ChatGPT Work and Codex, OpenAI.



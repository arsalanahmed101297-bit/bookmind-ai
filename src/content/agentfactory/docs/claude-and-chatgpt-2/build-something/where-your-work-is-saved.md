# Where your work is saved (/claude-and-chatgpt-2/build-something/where-your-work-is-saved)

---
type: Document
title: "Where your work is saved"
description: "The three places a result from Claude can land (your Claude account, the chat, or a folder on your computer), how to ask for the one you want, which file formats you get, where ChatGPT keeps the same work, and what to check when a result goes missing."
status: stable
order: 0.39915
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Where work is saved" ]
last_verified: 2026-11-17
review_by: 2026-12-17
sources:
  - id: one-claude
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: web-desktop-mobile
    title: "Use Claude Cowork on web, desktop and mobile (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: cowork-safely
    title: "Use Claude Cowork safely (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/13364135-use-cowork-safely
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
  - id: openai-library
    title: "Using Library to manage files in ChatGPT (OpenAI, verified 2026-11-17)"
    resource: https://help.openai.com/en/articles/20001052-using-library-to-manage-files-in-chatgpt
  - id: openai-local
    title: "ChatGPT 2.0, this book's tour of the ChatGPT app"
    resource: "../tour/chatgpt.md"
  - id: destination-observed
    title: "Panaversity's observation of a Claude desktop session, November 17, 2026"
    resource: "../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Three places a result can land, and how to choose*

[Where the work happens](../new-way-of-working/where-the-work-happens.md) showed where Claude works: the cloud desk and the desk on your computer. This page answers the next question. When the job is done, where does the result go? Answer it before you build anything. A doc you cannot find, or a file in the wrong format, costs you the time the AI saved you.

> [!NOTE]
> **Words used on this page**
>
> - **File format:** the kind of file, shown by the letters at the end of its name, such as .docx for Word or .pptx for PowerPoint.
> - **Markdown:** a plain-text file whose name ends in .md. It uses simple marks for formatting, such as # for a heading and ** for bold. It opens in any text editor.
> - **CSV:** a plain-text table whose name ends in .csv. Each row is one line, with commas between the columns. It opens in Excel, in Google Sheets and in any text editor.

## Three places

| Where | What you get | Can you share a link? |
| --- | --- | --- |
| Your Claude account, as an artifact | A live doc, deck or sheet that you keep editing, on desktop, web or phone | Yes. It starts private, and you choose who sees it |
| The chat, as a file | A file you click to download | No |
| A folder on your computer, as a file | A file saved straight into that folder | No |

![Three places your work can go. At the top, a gold box says you ask in one conversation, and Claude goes by your words. Three arrows lead to three cards. Your Claude account, an artifact: a live doc, deck or sheet that you keep editing, open on desktop, web or phone, shared by link, and private at first. It happens when you name no place, such as "Write a doc on X". The chat, a file to download: a Word, PowerPoint, Excel or PDF file that you click to download, with no share link, and it does not update. It happens when you name a file type, such as "Write X as a Word file". Your folder, a file on your computer: saved straight into a connected folder, needs the desktop app open, no share link, and it does not update. It happens when you name a connected folder, such as "Save it in my Coursework folder". At the foot: connecting a folder only gives access. To send a result there, name the folder.](img/three-places-your-work-can-go.png)

To find your work later: artifacts are in the Artifacts tab, and also in the conversation that made them. Files Claude makes appear alongside the conversation.[^anthropic-artifacts],[^one-claude] To find a file in a folder, look in Finder on a Mac or in File Explorer on Windows.

## How Claude picks the place

Claude goes by your words. The figure shows what one session did in November 2026.[^destination-observed] Name the place when it matters.

![How Claude picks the place. Five rows, in the order Claude followed. In row 1, you name a folder, and you get a file in that folder. Claude asks first if the folder is not connected. In row 2, you name a file type, and you get that file in the chat, such as "as a Word file". In row 3, the job works on files in a connected folder, and you get a new file next to them. Ask "in place" to change the original instead. In row 4, you ask for anything else you will keep or share, and you get an artifact of the matching kind, such as a doc, deck, sheet, design, dashboard or board. In row 5, you ask a question you will read once, and you get a normal reply. Nothing is saved. At the foot: from one session's instructions, November 2026. It is not a promise from Anthropic, so name the place when it matters.](img/how-claude-picks-the-place.png)

**Connecting a folder only gives access.** It does not change where things go. Without naming the folder, your work still becomes an artifact.

Claude asks before it permanently deletes a file, except in computer use, where Claude works your screen as you do.[^cowork-safely],[^one-claude] In our session it also made new copies instead of changing originals, unless we asked. When it matters, ask for a new copy, and keep a backup.

## How to ask for what you want

Say where you want the result. Copy these patterns:

| You want | Say something like |
| --- | --- |
| A document you keep editing and share | "Write a doc on X" |
| A Word file to submit or email | "Write X as a Word file" |
| A presentation file | "Make slides on X as a PowerPoint file" |
| A Markdown file | "Save these notes as a .md file" |
| A CSV file | "Save this table as a .csv file" |
| A file saved on your computer | "Write X and save it as a .docx in my Coursework folder" |
| A live doc and a copy on your computer | "Make a doc on X and also save a Word copy to my Coursework folder" |
| Work on files you already have | "Summarize the PDFs in my Readings folder into one Word file in that folder" |
| A corrected copy next to the original | "Fix the typos in report.docx" (a file in your folder) |
| The original file, edited | "Fix report.docx in place" |
| Just an answer | Ask your question. You get a normal reply, and nothing is saved |

If you want the same place every time, say it once at the start of the conversation: "Save everything you make to my Coursework folder." For work you come back to, write it in a project's instructions, so every task in the project follows it. [The Code tab](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work), the part of the Claude app for longer work, shows how.

## File formats you will get

When Claude saves something on your computer, it makes an ordinary file. These are its usual choices:

| You ask for | You usually get | You could also ask for |
| --- | --- | --- |
| A document (report, memo, letter) | .docx (Word) | PDF, .md |
| Notes, or instructions for an AI tool | .md (Markdown) | .docx, PDF |
| A presentation | .pptx (PowerPoint) | PDF |
| A spreadsheet | .xlsx (Excel) | .csv |
| A design (poster, flyer) | PDF | PNG (an image) |
| A web page or small tool | .html | |

To get another format, name it: "save it as a PDF in my Coursework folder."

## Markdown and CSV: plain text you can track

Markdown and CSV are plain text. Any app opens them, and Claude can edit them in your connected folder directly.[^destination-observed] Their contents are still processed on Anthropic's servers, as [Where the work happens](../new-way-of-working/where-the-work-happens.md) explains. For group work kept on GitHub, ask for them instead of Word and Excel. The figure and [Appendix: versions and pull requests](../../appendices/claude-and-chatgpt-2/appendix-versions-and-pull-requests.md) show why.

![Why Markdown and CSV suit GitHub. It shows the same change, as Git shows it in a pull request. On the left is a Word file, report.docx. Git shows only "Binary file changed", because it cannot show what changed. It can say only that the file changed. You cannot see which words changed, and a teammate's edit is hard to review. On the right is a Markdown file, report.md. Git shows the heading "Friday payment run" and the line "Approved by: Dave". Between them, the old total, 41,200, is in red, and the new total, 41,250, is in green. Git shows each changed line and who changed it. You review it, then accept it or go back, and Claude edits it in your folder directly. At the foot: draft in Markdown, keep tables as CSV, and make the doc, deck or PDF at the end.](img/markdown-and-csv-in-git.png)

## In a web browser or on a phone

On claude.ai in a web browser, or in the phone app, Claude works in the same cloud desk, with limits on what it can do on your computer:[^web-desktop-mobile]

You get artifacts and files to download. But a conversation started in a browser **cannot read or write your connected folders**, even if the desktop app is open. Folder work needs a conversation started in the desktop app, or a scheduled task. The figure shows the rest.

![What each conversation can reach. A table lists what you want to do in its rows, with three columns. The first is a conversation started in the desktop app, with the app open. The second is a conversation started in a browser or on a phone, with the desktop app open. The third is any conversation, with the desktop app closed. Artifacts and downloads work in all three, because cloud work keeps running. Your connected folders work only in the first. In the second, you must start the conversation in the desktop app. In the third, the work waits for the app. Claude's browser and computer use work in the first two, through the desktop app. In the third, they wait for the app. At the foot: for folder work, start the conversation in the desktop app. A scheduled task can use your folders too.](img/what-each-conversation-can-reach.png)

In the browser, ask for a file ("as a Word file") and download it from the chat.

## In ChatGPT

ChatGPT has the same three places, with other names:

| In Claude | In ChatGPT |
| --- | --- |
| An artifact in your account | A page or a deck in **Space**, ChatGPT's shared area for pages and decks, on the plans the [Docs](docs.md#in-chatgpt-pages) page lists[^openai-space] |
| A file in the chat | A file in the chat. ChatGPT also saves the files you upload and the files it makes in **Library**. Library is the place where you find and download them again. If your account has Space, Space takes the place of Library[^openai-library] |
| A file in a connected folder | A file on your computer. In the desktop app, a job can work on your local files, while your computer is online[^openai-local] |

Files from a temporary chat are not saved to Library.[^openai-library]

## Try it

You need the Claude desktop app. Steps 4 to 6 use a connected folder, which needs a paid Claude plan.

1. Ask Claude: *"Write a one-page doc about my favorite book."* Claude makes a doc in your account.
2. Find it in the Artifacts tab and open it.
3. Download it as a Word file, using the export option on the doc.
4. On your computer, make a folder called **Claude Practice**. In the desktop app, click **Add folder** and choose it.
5. Ask Claude: *"Save a Word copy of that doc in my Claude Practice folder."*
6. Open the folder in Finder or File Explorer, and check that the file is there.
7. Change one sentence in the doc. Open the Word file again. It has not changed: it is a copy.

If step 5 does not work, ask for "the doc as a Word file" in the chat, download it, and move it into the folder yourself.

## If something goes wrong

| Problem | What to check |
| --- | --- |
| You got an artifact, not a file | Ask again and name the format: "as a Word file" |
| Claude says it cannot see your folder | Is the folder connected? Settings lists your folders under **Trusted folders**.[^one-claude] Is the desktop app open? |
| Claude cannot save into your folder | Did you start this conversation in the desktop app? A conversation started in a web browser cannot write to your folders |
| Claude says the folder is read-only | Your organization may have made it read-only. Ask your administrator, or choose another folder |
| You cannot find the result | Check the chat for a download, the Artifacts tab, and the connected folder. Ask Claude what it named the file |
| You cannot find files from Cowork, the old name for tasks | If you used Cowork before, its folder is still there: look for **Storage folder** in Settings[^one-claude] |
| A job stopped partway | Is your computer awake, and is the desktop app open? Steps that need your computer wait for it |

Now start building, with [Docs](docs.md).

[^one-claude]: As verified on November 17, 2026, Anthropic says "files Claude creates appear alongside the conversation", that folders you have given access to are listed under Trusted folders in Settings, and that in Claude Desktop "the folder Cowork saved its work to is still there", under Storage folder in Settings. As verified on November 23, 2026, it says "By default, Claude asks before permanently deleting files, but that protection doesn't cover computer use." Claude Cowork and chat are one Claude, Anthropic.
[^web-desktop-mobile]: As verified on November 17, 2026, Anthropic says a cloud session can reach your local folders only if "the session was started on desktop or is a scheduled task", and that "when the desktop app is online, the built-in browser is also available in Cowork on web or mobile". On web and mobile, computer use works through the desktop app. Use Claude Cowork on web, desktop and mobile, Anthropic.
[^cowork-safely]: As verified on November 17, 2026, Anthropic says Cowork "requires your explicit permission before permanently deleting any files", and advises you to keep backups of important files. Use Claude Cowork safely, Anthropic.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Anthropic.
[^destination-observed]: From one Claude desktop session on a paid plan with one connected folder, November 17, 2026: the order and the usual formats come from the instructions Claude was following in that session, and Claude editing .md and .csv files in the connected folder without copying them to the cloud desk was seen directly. Anthropic does not publish these details, and they can change. The [appendix](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md#where-results-land) says what was seen.
[^openai-space]: As verified on November 11, 2026, OpenAI says you can create and edit content in Space "with ChatGPT Pro, Business, or Enterprise". Getting started with Space in ChatGPT, OpenAI.
[^openai-library]: As verified on November 17, 2026, OpenAI says ChatGPT can save uploaded and generated files, "including documents, spreadsheets, presentations, PDFs, and images", that you can download them from Library, that "if your account has access to Space, Space takes the place of Library", and that files uploaded in a temporary chat are not saved to Library while the chat stays temporary. Using Library to manage files in ChatGPT, OpenAI.
[^openai-local]: [ChatGPT 2.0](../tour/chatgpt.md) describes how a Work task can run steps on your connected computer, which must be online.



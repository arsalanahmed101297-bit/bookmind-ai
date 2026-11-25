# 14.7 JSON and REST APIs (/building-ai-workers/structuring-programs/json-and-rest-apis)

---
type: Document
title: "14.7 JSON and REST APIs"
description: "How to read a request to another program's API and the JSON that comes back, act on each status code on purpose, fetch every page and keep the key out of the code."
status: stable
order: 314.06
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.7" ]
last_verified: 2026-10-30
sources:
  - id: node-globals
    title: "Globals (Node.js, accessed 2026-10-30)"
    resource: https://nodejs.org/api/globals.html
  - id: httpx-async
    title: "Async support (httpx, accessed 2026-10-30)"
    resource: https://www.python-httpx.org/async/
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A takeout window has a menu taped beside it. You ask for item 12 with no onions, and you get a bag with a receipt. You never see the kitchen. So you check the bag before you leave, because the kitchen can change a recipe without telling you.

**What you will learn.** How to read a request to another program and its answer, and check what arrives before you use it.

**Why it matters.** The other program belongs to someone else, who can change it without telling you. So your program checks every answer before it uses it.

### How does one program ask another?

**At work.** Brightline's practice folder includes a small sample program that hands out its invoices. It runs on your own computer, and you start it in [Try it](#try-it) below. Here is the smallest order you can place at its window: an address, and nothing else.

```ts tab="TypeScript" tab-group="language"
// the order: only an address
const response = await fetch("http://localhost:4010/invoices");
// the receipt: how it went
console.log(response.status);
```

```python tab="Python" tab-group="language"
import httpx

# the order: only an address
response = httpx.get("http://localhost:4010/invoices")
# the receipt: how it went
print(response.status_code)
```

Both print:

```text
401
```

The order is a request, and what comes back is a response. The window is an **API**, an application programming interface: a way for one program to ask another for something. A **REST API** is one that works over the web, and the sample program is one, so this chapter calls it the sample API.

Nothing stopped the program. The window did answer, and its answer was a number: `401`. A **status code** is a number that says how a request went, like the receipt, and every response has one. `401` means the window does not know who is asking, so it handed over no invoices.

The address is also called a URL. In it, `localhost` means your own computer. `4010` is the **port**, which is the numbered door the sample API listens at. `/invoices` names what you are asking for.

| Language | The marks in this code |
| --- | --- |
| TypeScript | `fetch` sends the request. `await` means "wait here until the answer arrives". The line after it waits too. |
| Python | httpx is the package this book uses to send web requests. `httpx.get` sends one, and waits for the answer by itself. |

### Where does the key go?

Into an **environment variable**, never into code, a test or a commit. An **API key** is a secret that proves who is calling. An environment variable is a named value the operating system gives a running program. Yours sits in a file called `.env`, which git ignores, as one line: the name `AP_API_KEY`, an equals sign, and your key. The agent loads that file when it runs your program, and the program then finds the key under that name.

Here is the same order with the key. The key travels in a **header**, which is a labeled extra on a request or a response. This API expects the label `X-API-Key`.

```ts tab="TypeScript" tab-group="language"
// the same order, with the key
// in a header
const response = await fetch("http://localhost:4010/invoices", {
  headers: { "X-API-Key": process.env.AP_API_KEY || "" },
});
// the receipt: how it went
console.log(response.status);
```

```python tab="Python" tab-group="language"
import os

import httpx

# the same order, with the key
# in a header
response = httpx.get(
    "http://localhost:4010/invoices",
    headers={"X-API-Key": os.environ["AP_API_KEY"]},
)
# the receipt: how it went
print(response.status_code)
```

Both print:

```text
200
```

`200` means it went well, and this time the invoices came back.

| Language | How the code reads the key |
| --- | --- |
| TypeScript | The braces after the address hold the extras, and `headers` is one of them. `process.env.AP_API_KEY` looks the key up by its name, and `|| ""` uses empty text if there is none, the or default of [13.5](../programming-fundamentals/conditions-and-empty-values.md#what-does-code-do-with-an-empty-value). |
| Python | `os` comes with Python. `os.environ["AP_API_KEY"]` looks the key up by its name, as in a dictionary. |

If a key is ever committed, treat it as leaked, even if you delete it in the next commit, because git keeps every commit.

### What is JSON?

**JSON** is the text format most programs use to send records to each other. The invoices came back as JSON, in the **body** of the response. The body is the data itself, like the food in the bag. Here is that body, laid out on several lines, with only the first of its five invoices shown.

```json
{
  "invoices": [
    {
      "number": "INV-8301",
      "vendorId": "V001",
      "invoiceDate": "2027-02-01",
      "dueDate": "2027-03-03",
      "terms": "Net 30",
      "amountCents": 482500,
      "status": "open"
    }
  ],
  "page": 1,
  "pages": 3
}
```

You know these shapes from [13.7](../programming-fundamentals/lists-and-dictionaries.md): `{ }` holds a dictionary and `[ ]` a list. Text goes in quotes, and numbers, `true`, `false` and `null` are written plainly. JSON has no dates, so a date travels as text, such as `"2027-03-03"`. The names are the API's own: it writes `vendorId`, whatever your code calls that field.

One more line turns that text into data your program can use. Predict what this prints.

```ts tab="TypeScript" tab-group="language"
const response = await fetch("http://localhost:4010/invoices", {
  headers: { "X-API-Key": process.env.AP_API_KEY || "" },
});
// the bag: the body, turned
// from JSON text into data.
// It can arrive late too, so
// it has its own await
const body = await response.json();
// the list of invoices in it
const invoices = body.invoices;
// how many, and the first
// one's number
console.log(invoices.length, invoices[0].number);
```

```python tab="Python" tab-group="language"
import os

import httpx

response = httpx.get(
    "http://localhost:4010/invoices",
    headers={"X-API-Key": os.environ["AP_API_KEY"]},
)
# the bag: the body, turned
# from JSON text into data
body = response.json()
# the list of invoices in it
invoices = body["invoices"]
# how many, and the first
# one's number
print(len(invoices), invoices[0]["number"])
```

Both print:

```text
5 INV-8301
```

### What are the parts of a request?

The body above ends with `"page": 1` and `"pages": 3`. An API rarely returns thousands of records at once. It returns a **page** of them, and says how many pages there are. The sample API serves five invoices to a page, and Brightline has 13 open invoices, in number order from INV-8301.

To ask for only part of what an API has, add options to the address. Here is the file in the practice folder. It asks for the open invoices only, and for page 2. Predict both lines.

```ts tab="TypeScript" tab-group="language"
// the order: the open invoices,
// page 2, with the key
const response = await fetch("http://localhost:4010/invoices?status=open&page=2", {
  headers: { "X-API-Key": process.env.AP_API_KEY || "" },
});
// the receipt: how it went
console.log(response.status);
// the bag: the body, as data
const body = await response.json();
// the list of invoices in it
const invoices = body.invoices;
// how many, and the first
// one's number
console.log(invoices.length, invoices[0].number);
```

```python tab="Python" tab-group="language"
import os

import httpx

# the order: the open invoices,
# page 2, with the key
response = httpx.get(
    "http://localhost:4010/invoices",
    # httpx adds these options to
    # the address, after a ?
    params={"status": "open", "page": 2},
    headers={"X-API-Key": os.environ["AP_API_KEY"]},
)
# the receipt: how it went
print(response.status_code)
# the bag: the body, as data
body = response.json()
# the list of invoices in it
invoices = body["invoices"]
# how many, and the first
# one's number
print(len(invoices), invoices[0]["number"])
```

Both print:

```text
200
5 INV-8306
```

Page 1 held INV-8301 to INV-8305, so page 2 starts at INV-8306. You have now seen every part of an order, and each part has a name.

| Part | What it is | In the order above |
| --- | --- | --- |
| Method | What you want to do: `GET` reads, `POST` creates | `GET`, which is what a plain request does |
| **Endpoint** | The address of one kind of thing the API serves | `/invoices` |
| **Query string** | The options after a `?`, joined by `&` | `?status=open&page=2` |
| Header | A labeled extra on the request or response | `X-API-Key: ...`, and `Content-Type: application/json` on the answer |
| Status code | A number that says how it went | `200` |
| Body | The data, usually JSON | `{"invoices": [...], "page": 2, "pages": 3}` |

A **client** is the program that sends the requests. A common bug in a client is reading only the first page, and it gives no warning. To read every page, a client asks for page 1, which says how many pages there are, and then for each of the rest.

![Figure 14.7. One exchange with the sample API at localhost:4010. The request is GET /invoices with the query string ?status=open&page=2 and an X-API-Key header loaded from the environment. The response is 200 OK, with Content-Type: application/json and a JSON body holding five invoices, page 2 of 3, starting with INV-8306.](img/request-response.png)

*Figure 14.7. One request, one response.*

### What should the client do for each status code?

Act on each one on purpose. A `401` or a `503` is not an error in your program. The first order on this page reached its last line and printed `401`. The response still arrives, with its code, and its body then holds an error message. A program that ignores the code reads that message as if it were invoices.

| Code | Means | What the client should do |
| --- | --- | --- |
| 200 | OK | Read the body |
| 400 | Bad request: your request was wrong | Fix the request. Retrying will not help |
| 401 | Not authorized: no key, or the wrong key | Check the key. Retrying will not help |
| 404 | Not found | Check the endpoint |
| 429 | Too many requests | Wait, then try again |
| 503 | The server is busy or down for a moment | Wait briefly and retry |

Here is that table as code: a function that takes the status code and says what the client does next. Predict each line.

```ts tab="TypeScript" tab-group="language"
function nextStep(status: number): string {
  // 200: the answer is good
  if (status === 200) {
    return "read the body";
  }
  // these may work next time
  if (status === 429 || status === 503) {
    return "wait, then try again";
  }
  // these will fail again
  return "stop and report";
}

console.log(nextStep(200));
console.log(nextStep(503));
console.log(nextStep(401));
```

```python tab="Python" tab-group="language"
def next_step(status: int) -> str:
    # 200: the answer is good
    if status == 200:
        return "read the body"
    # these may work next time
    if status == 429 or status == 503:
        return "wait, then try again"
    # these will fail again
    return "stop and report"

print(next_step(200))
print(next_step(503))
print(next_step(401))
```

Both print:

```text
read the body
wait, then try again
stop and report
```

A client asks this question of every answer, before it reads the body.

"Try again" needs a number too. Brightline's client tries a `503` once more, and never tries any other code again. A client that retries forever sends request after request while a server is down.

### Why did the tests pass and the live run fail?

Because the tests and the code shared one picture of the data, and the API had its own. The kitchen can change a recipe without telling you, and an API's owner can rename a field the same way. Only the live answer shows what the API really sends.

**At work.** Ana's Python client passes every test against a fake API, a stand-in that answers like the real one. The agent built it with the field names she expected, such as `vendor_id`. Against the sample API, the client is refused on the first invoice, because that API's JSON says `vendorId`, as you saw above. The schema at the [edge](data-models-and-schemas.md#why-check-at-the-edge) caught it before any invoice was used. She asks the agent to let the schema accept both names.

### Try it

**Set up the sample API.** Choose a made-up key, such as a word and a number. Send: "Copy .env.example to .env, and put my made-up key in it: [your key]. Then start the sample API in the background, and tell me how you will stop it."

**Run.** Send: "Run the file in 14-7 and show me what it prints. Don't explain it yet."

**Modify.** Send: "Change page 2 to page 4 in the file. Don't run it yet." There is no page 4, and this API treats that as your mistake, so it answers `400`. From the table, what should a client do then? The file still goes on to read the invoices: what will happen? Then ask the agent to run it, and ask: "What did the body of that answer say?"

**Make.** Send: "Change the file so it checks the status code before it reads the invoices, and prints the error when the code is not 200. Run it."

**Stop.** Send: "Stop the sample API now, and show me that nothing is still running."

**What you should see.** `400`, then a `TypeError` in TypeScript or a `KeyError` in Python, because the body holds an error, not a page of invoices. After your change, the error is printed plainly.

**The operating rule:** read an API call by its parts, and check its status code before you read its body. Act on each code on purpose, and try again only a few times. Read every page, keep keys in the environment, and validate the body with a schema before you use it, even when your tests pass.

**Next.** In [14.8](async-and-await.md), you decide which calls can wait at the same time, and how long any call may wait.



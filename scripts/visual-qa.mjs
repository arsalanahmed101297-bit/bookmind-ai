import { mkdir } from "node:fs/promises";
import path from "node:path";

import { chromium } from "playwright";

import { root, startServer } from "./qa-server.mjs";

const screenshotDir = path.join(root, "qa", "screenshots");
let passed = 0;
let failed = 0;
const consoleErrors = [];

function check(name, condition, detail) {
  if (condition) {
    passed += 1;
    console.log(`PASS  ${name}`);
  } else {
    failed += 1;
    console.error(`FAIL  ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

function watchErrors(page, label) {
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(`${label}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    consoleErrors.push(`${label}: ${error.message}`);
  });
}

async function readPageState(page) {
  return page.evaluate(() => ({
    dir: document.documentElement.dir,
    lang: document.documentElement.lang,
    dark: document.documentElement.classList.contains("dark"),
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
    mainCount: document.querySelectorAll("main").length,
    arabic: /[\u0600-\u06FF]/.test(document.body.textContent ?? ""),
  }));
}

async function assertVisualState(page, name, locale, theme) {
  const state = await readPageState(page);
  const expectedDir = locale === "ur" ? "rtl" : "ltr";

  check(`${name}: direction`, state.dir === expectedDir, state.dir);
  check(`${name}: language`, state.lang === locale, state.lang);
  check(
    `${name}: ${theme} theme`,
    state.dark === (theme === "dark"),
    `dark=${state.dark}`,
  );
  check(`${name}: main landmark`, state.mainCount >= 1, `count=${state.mainCount}`);
  check(
    `${name}: no horizontal overflow`,
    state.scrollWidth <= state.innerWidth + 1,
    `${state.scrollWidth} > ${state.innerWidth}`,
  );
  if (locale === "ur") {
    check(`${name}: Urdu script rendered`, state.arabic, "no Arabic-range characters");
  }
}

async function newContext(browser, baseUrl, { locale = "en", theme = "light", viewport }) {
  const context = await browser.newContext({
    viewport,
    colorScheme: theme,
    deviceScaleFactor: 1,
  });
  await context.addCookies([
    {
      name: "bookmind_locale",
      value: locale,
      url: baseUrl,
    },
  ]);
  await context.addInitScript((options) => {
    try {
      window.localStorage.setItem("bookmind_theme", options.theme);
    } catch {
      /* storage unavailable */
    }
  }, { theme });
  return context;
}

async function screenshot(page, name) {
  await page.screenshot({
    path: path.join(screenshotDir, `${name}.png`),
    fullPage: true,
    animations: "disabled",
  });
}

async function runMatrix(browser, baseUrl) {
  const devices = [
    { name: "desktop", viewport: { width: 1440, height: 900 } },
    { name: "mobile", viewport: { width: 390, height: 844 } },
  ];
  const locales = ["en", "ur"];
  const themes = ["light", "dark"];

  for (const device of devices) {
    for (const locale of locales) {
      for (const theme of themes) {
        const label = `${device.name}-${locale}-${theme}`;
        const context = await newContext(browser, baseUrl, {
          locale,
          theme,
          viewport: device.viewport,
        });
        const page = await context.newPage();
        watchErrors(page, label);

        try {
          await page.goto(baseUrl, { waitUntil: "networkidle" });
          await assertVisualState(page, `landing ${label}`, locale, theme);
          await screenshot(page, `landing-${label}`);

          await page.goto(`${baseUrl}/dashboard`, { waitUntil: "networkidle" });
          await assertVisualState(page, `dashboard ${label}`, locale, theme);
          await screenshot(page, `dashboard-${label}`);

          await page.goto(`${baseUrl}/learning`, { waitUntil: "networkidle" });
          await assertVisualState(page, `learning ${label}`, locale, theme);
          await screenshot(page, `learning-${label}`);
        } finally {
          await context.close();
        }
      }
    }
  }
}

async function runInteractions(browser, baseUrl) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    colorScheme: "light",
  });
  const page = await context.newPage();
  watchErrors(page, "interactions");

  try {
    await page.goto(`${baseUrl}/login`, { waitUntil: "networkidle" });
    await page.fill("#login-email", "qa-reader@example.com");
    await page.fill("#login-password", "preview-password");
    await page.locator("form button[type='submit']").click();

    const previewStatus = page
      .locator("[role='status']")
      .filter({ hasText: /preview/i })
      .first();
    await previewStatus.waitFor({ state: "visible" });
    check(
      "login preview states that it is not live auth",
      /preview/i.test(await previewStatus.innerText()),
    );
    check(
      "login preview creates no Supabase session",
      (await context.cookies()).every((cookie) => !cookie.name.startsWith("sb-")),
    );
    await screenshot(page, "login-preview-status");

    await page.getByRole("link", { name: /explore the dashboard preview/i }).click();
    await page.waitForURL("**/dashboard");
    check("preview link opens the dashboard", page.url().endsWith("/dashboard"));

    await page.goto(`${baseUrl}/signup`, { waitUntil: "networkidle" });
    await page.fill("#signup-name", "QA Reader");
    await page.fill("#signup-email", "qa-signup@example.com");
    await page.fill("#signup-password", "preview-password");
    await page.fill("#signup-confirm", "preview-password");
    await page.check("#signup-terms");
    await page.locator("form button[type='submit']").click();
    const signupStatus = page
      .locator("[role='status']")
      .filter({ hasText: /preview/i })
      .first();
    await signupStatus.waitFor({ state: "visible" });
    check(
      "signup preview states that no account was created",
      /preview/i.test(await signupStatus.innerText()),
    );
    check(
      "signup preview creates no Supabase session",
      (await context.cookies()).every((cookie) => !cookie.name.startsWith("sb-")),
    );
    await screenshot(page, "signup-preview-status");

    await page.goto(`${baseUrl}/profile`, { waitUntil: "networkidle" });
    await page.fill("#profile-name", "QA Reader");
    await page.fill("#profile-bio", "Preview profile saved in this browser.");
    await page.getByRole("button", { name: "Save profile" }).click();
    await page.getByText("Profile saved.", { exact: true }).first().waitFor();
    check("preview profile save reports local save", true);
    await page.reload({ waitUntil: "networkidle" });
    check(
      "preview profile persists locally",
      (await page.inputValue("#profile-name")) === "QA Reader",
    );
    check(
      "preview profile save creates no Supabase session",
      (await context.cookies()).every((cookie) => !cookie.name.startsWith("sb-")),
    );
    await screenshot(page, "profile-local-save");

    await page.goto(`${baseUrl}/settings`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Dark", exact: true }).click();
    check(
      "settings dark theme applies",
      await page.evaluate(() => document.documentElement.classList.contains("dark")),
    );

    await page.locator("button[aria-haspopup='listbox']").click();
    await page.getByRole("option", { name: /اردو/ }).click();
    check(
      "language switcher applies RTL",
      (await page.locator("html").getAttribute("dir")) === "rtl",
    );
    check(
      "language switcher writes locale cookie",
      (await context.cookies()).some(
        (cookie) => cookie.name === "bookmind_locale" && cookie.value === "ur",
      ),
    );
    await screenshot(page, "settings-urdu-dark");

    await page.goto(`${baseUrl}/admin`, { waitUntil: "domcontentloaded" });
    await page.waitForURL("**/dashboard");
    check("preview /admin redirects non-admin to dashboard", true);
    check(
      "no Admin navigation link is rendered in preview",
      (await page.getByRole("link", { name: "Admin", exact: true }).count()) === 0,
    );
    check(
      "no Admin dashboard content is rendered in preview",
      (await page.getByText("Admin dashboard", { exact: true }).count()) === 0,
    );
    await screenshot(page, "admin-redirect-preview");
  } finally {
    await context.close();
  }
}

async function runOfficialReader(browser, baseUrl) {
  const cases = [
    {
      name: "en-light-desktop",
      locale: "en",
      theme: "light",
      viewport: { width: 1440, height: 900 },
    },
    {
      name: "ur-dark-mobile",
      locale: "ur",
      theme: "dark",
      viewport: { width: 390, height: 844 },
    },
  ];

  for (const item of cases) {
    const context = await newContext(browser, baseUrl, {
      locale: item.locale,
      theme: item.theme,
      viewport: item.viewport,
    });
    const page = await context.newPage();
    const label = `official ${item.name}`;
    watchErrors(page, label);

    try {
      await page.goto(`${baseUrl}/course/claude-and-chatgpt-2/overview`, {
        waitUntil: "networkidle",
      });
      await assertVisualState(page, label, item.locale, item.theme);

      const article = page.locator("article").first();
      check(`${label}: article stays LTR`, (await article.getAttribute("dir")) === "ltr");
      check(
        `${label}: verbatim official text renders`,
        (await article.innerText()).includes("Welcome to The AI Agent Factory"),
      );
      check(
        `${label}: preview lesson controls require sign-in`,
        (await page.locator(
          `a[href="/login?next=${encodeURIComponent("/course/claude-and-chatgpt-2/overview")}"]`,
        ).count()) > 0,
      );

      // The desktop sidebar is always visible; only small screens use the drawer.
      if (item.viewport.width < 1024) {
        const contentsButton = page
          .locator("button")
          .filter({ hasText: /course contents|کورس کی فہرست/i })
          .first();
        await contentsButton.click();
      }
      const search = page
        .getByPlaceholder(/find a document|دستاویز تلاش کریں/i)
        .filter({ visible: true });
      await search.fill("Practice lab");
      const matches = page
        .locator('nav.official-contents a[href^="/course/"]')
        .filter({ visible: true });
      check(`${label}: contents search filters documents`, (await matches.count()) > 0);
      const targetHref = await matches.first().getAttribute("href");
      await matches.first().click();
      await page.waitForURL((url) => url.pathname === targetHref);
      check(
        `${label}: contents link opens another official document`,
        !page.url().endsWith("/claude-and-chatgpt-2/overview"),
      );
      check(
        `${label}: article still stays LTR after navigation`,
        (await page.locator("article").first().getAttribute("dir")) === "ltr",
      );
      await screenshot(page, `official-${item.name}`);
    } finally {
      await context.close();
    }
  }
}

let server;
let browser;

try {
  await mkdir(screenshotDir, { recursive: true });
  server = await startServer({ port: 4175 });
  browser = await chromium.launch({ channel: "msedge", headless: true });
  console.log("Browser: Microsoft Edge (Playwright channel msedge)");

  await runMatrix(browser, server.baseUrl);
  await runInteractions(browser, server.baseUrl);
  await runOfficialReader(browser, server.baseUrl);

  check(
    "no browser console or page errors",
    consoleErrors.length === 0,
    consoleErrors.slice(0, 8).join(" | "),
  );

  console.log(`\nScreenshots: ${path.relative(root, screenshotDir)}`);
  console.log(`${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
} catch (error) {
  console.error("Visual QA failed:", error);
  process.exitCode = 1;
} finally {
  await browser?.close();
  await server?.stop();
}

import { spawn } from "node:child_process";
import { once } from "node:events";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
export const root = path.resolve(scriptDir, "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function assertQaPreconditions() {
  try {
    await access(path.join(root, ".env.local"));
    throw new Error(
      ".env.local exists. Remove or rename it before preview QA so real credentials cannot be used.",
    );
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  await access(path.join(root, ".next", "BUILD_ID")).catch(() => {
    throw new Error("Run `npm run build` before QA scripts.");
  });
}

async function waitForServer(baseUrl, child, getLogs) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (child.exitCode !== null) {
      throw new Error(`Next.js exited before becoming ready.\n${getLogs()}`);
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1000);
    try {
      const response = await fetch(baseUrl, { signal: controller.signal });
      if (response.ok) {
        clearTimeout(timer);
        return;
      }
    } catch {
      // Server is still starting.
    } finally {
      clearTimeout(timer);
    }

    await delay(250);
  }

  throw new Error(`Timed out waiting for ${baseUrl}.\n${getLogs()}`);
}

export async function startServer({ port, env = {} }) {
  await assertQaPreconditions();

  const child = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    cwd: root,
    env: { ...process.env, ...env },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let logs = "";
  child.stdout.setEncoding("utf8");
  child.stderr.setEncoding("utf8");
  child.stdout.on("data", (chunk) => {
    logs += chunk;
  });
  child.stderr.on("data", (chunk) => {
    logs += chunk;
  });

  const baseUrl = `http://127.0.0.1:${port}`;
  await waitForServer(baseUrl, child, () => logs);

  return {
    baseUrl,
    stop: async () => {
      if (child.exitCode === null) {
        child.kill("SIGTERM");
        await Promise.race([once(child, "exit"), delay(3000)]);
      }
      if (child.exitCode === null) child.kill("SIGKILL");
    },
  };
}

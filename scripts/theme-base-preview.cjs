#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const net = require("node:net");
const os = require("node:os");
const path = require("node:path");
const { StringDecoder } = require("node:string_decoder");
const { spawn, spawnSync, execFileSync } = require("node:child_process");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_STORE = "layouthub-template-v2";
const STORE_ALIASES = new Map([
  // Correct the recurring transposition used in preview commands for this repo's store.
  ["lauyouthub-template-v2", DEFAULT_STORE],
]);
const BASE_PORT = 9300;
const LAST_PORT = 9399;
const DIR = path.join(ROOT, ".shopify", "theme-base-preview");
const LOCK = path.join(DIR, "owner.json");
const LOG = path.join(DIR, "preview.log");
const LAST_ERROR = path.join(DIR, "last-error.json");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

function git(args) {
  const result = spawnSync("git", args, { cwd: ROOT, encoding: "utf8" });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `git ${args.join(" ")} failed`).trim());
  }
  return result.stdout.trim();
}

function currentBranch() {
  return git(["branch", "--show-current"]);
}

function normalizeStore(value) {
  if (!value) throw new Error(`Thiếu store. Dùng --store ${DEFAULT_STORE}.`);
  let name = value.toLowerCase().replace(/\.myshopify\.com$/, "");
  const canonicalName = STORE_ALIASES.get(name);
  if (canonicalName) {
    log(`Đã chuẩn hóa tên store gõ nhầm "${name}" thành "${canonicalName}.myshopify.com".`);
    name = canonicalName;
  }
  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(name)) {
    throw new Error("Store chỉ nhận tên store hoặc domain dạng <store>.myshopify.com.");
  }
  return `${name}.myshopify.com`;
}

function parseStartArgs(args) {
  let store;
  let themeId;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === "--store") {
      if (store || !args[i + 1]) throw new Error("Dùng --store <store>.myshopify.com một lần.");
      store = args[++i];
    } else if (args[i].startsWith("--store=")) {
      if (store) throw new Error("Chỉ truyền --store một lần.");
      store = args[i].slice("--store=".length);
    } else if (args[i] === "--theme" || args[i].startsWith("--theme=")) {
      if (themeId !== undefined) throw new Error("Dùng --theme <ID|new> một lần.");
      themeId = args[i] === "--theme" ? args[++i] : args[i].slice("--theme=".length);
      if (!themeId || (themeId !== "new" && !/^[1-9]\d*$/.test(themeId))) {
        throw new Error("Dùng --theme <ID|new>: ID phải là số nguyên dương.");
      }
    } else {
      throw new Error(`Tùy chọn không hỗ trợ: ${args[i]}`);
    }
  }
  return { store: normalizeStore(store === undefined ? DEFAULT_STORE : store), themeId };
}

function readOwner() {
  // An exclusive lock file can briefly be empty before its creator writes it.
  for (let attempt = 0; attempt < 10; attempt += 1) {
    try {
      return JSON.parse(fs.readFileSync(LOCK, "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") return null;
      if (error instanceof SyntaxError && attempt < 9) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
        continue;
      }
      throw error;
    }
  }
}

function writeOwner(owner) {
  const temporary = `${LOCK}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(owner, null, 2)}\n`, { mode: 0o600 });
  fs.renameSync(temporary, LOCK);
}

function saveLastError(message) {
  if (!message) {
    try {
      fs.unlinkSync(LAST_ERROR);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    return;
  }
  const temporary = `${LAST_ERROR}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify({ at: new Date().toISOString(), message }, null, 2)}\n`, { mode: 0o600 });
  fs.renameSync(temporary, LAST_ERROR);
}

function readLastError() {
  try {
    return JSON.parse(fs.readFileSync(LAST_ERROR, "utf8"));
  } catch {
    return null;
  }
}

function processAlive(pid) {
  if (!Number.isSafeInteger(pid) || pid <= 1) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return error.code === "EPERM";
  }
}

function processCommand(pid) {
  if (!processAlive(pid)) return "";
  try {
    if (process.platform === "win32") {
      return execFileSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command",
        `(Get-CimInstance Win32_Process -Filter 'ProcessId = ${Number(pid)}').CommandLine`],
      { encoding: "utf8", timeout: 10000, windowsHide: true }).trim();
    }
    return execFileSync("ps", ["-p", String(pid), "-o", "command="], {
      encoding: "utf8",
      timeout: 5000,
    }).trim();
  } catch {
    return "";
  }
}

function processGroup(pid) {
  try {
    return execFileSync("ps", ["-p", String(pid), "-o", "pgid="], {
      encoding: "utf8",
      timeout: 5000,
    }).trim();
  } catch {
    return "";
  }
}

function isSupervisor(owner) {
  return Boolean(owner && processAlive(owner.pid) && processCommand(owner.pid).includes(`${path.basename(__filename)} run`));
}

function isOwnedThemeDev(pid, owner) {
  const command = processCommand(pid);
  return Boolean(command && command.includes("theme dev") &&
    command.includes(`--store ${owner.store}`) &&
    command.includes(`--path ${ROOT}`) &&
    command.includes(`--port ${owner.port}`) &&
    (!owner.themeId || command.includes(`--theme ${owner.themeId}`)));
}

function clearShopifyFlagOverrides() {
  const env = { ...process.env };
  const storePassword = env.SHOPIFY_FLAG_STORE_PASSWORD;
  for (const key of Object.keys(env)) {
    if (key.startsWith("SHOPIFY_FLAG_")) delete env[key];
  }
  if (storePassword) env.SHOPIFY_FLAG_STORE_PASSWORD = storePassword;
  return env;
}

function resolveWindowsCli() {
  const result = spawnSync("where.exe", ["shopify.cmd"], { encoding: "utf8", windowsHide: true });
  for (const shim of (result.stdout || "").trim().split(/\r?\n/)) {
    const packageFile = path.join(path.dirname(shim), "node_modules", "@shopify", "cli", "package.json");
    if (!fs.existsSync(packageFile)) continue;
    const pkg = JSON.parse(fs.readFileSync(packageFile, "utf8"));
    const entry = typeof pkg.bin === "string" ? pkg.bin : pkg.bin?.shopify;
    if (entry) return path.resolve(path.dirname(packageFile), entry);
  }
  throw new Error("Không tìm thấy Shopify CLI trong PATH. Cài npm install -g @shopify/cli và mở terminal mới.");
}

function extractThemeEditorUrl(output) {
  const candidates = output.match(/https?:\/\/[^\s<>"'`]+/g) || [];
  return candidates
    .map((url) => url.replace(/[),.;]+$/, ""))
    .find((url) => {
      try {
        const parsed = new URL(url);
        return parsed.protocol === "https:" &&
          /(?:^|\/)themes\/\d+\/editor(?:\/|$)/.test(parsed.pathname);
      } catch {
        return false;
      }
    }) || null;
}

function editorUrlFromCurrentLog(owner) {
  if (!fs.existsSync(LOG)) return null;
  const output = fs.readFileSync(LOG, "utf8");
  const marker = `Chạy shopify theme dev --store ${owner.store} --path ${ROOT}`;
  const index = output.lastIndexOf(marker);
  if (index < 0) return null;
  const line = output.slice(output.lastIndexOf("\n", index) + 1, index);
  const loggedAt = line.match(/^\[([^\]]+)\]/)?.[1];
  if (!loggedAt || Date.parse(loggedAt) < Date.parse(owner.startedAt)) return null;
  return extractThemeEditorUrl(output.slice(index));
}

async function portIsOpen(port) {
  return new Promise((resolve) => {
    const socket = net.connect({ host: "127.0.0.1", port });
    let settled = false;
    const finish = (open) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolve(open);
    };
    socket.setTimeout(700);
    socket.once("connect", () => finish(true));
    socket.once("error", () => finish(false));
    socket.once("timeout", () => finish(false));
  });
}

function portBelongsToSupervisor(port, childPid) {
  if (process.platform === "win32") {
    try {
      const output = execFileSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command",
        `$listeners = @(Get-NetTCPConnection -LocalPort ${Number(port)} -State Listen -ErrorAction SilentlyContinue); if (!$listeners.Count) { exit 1 }; $processes = @(Get-CimInstance Win32_Process); foreach ($listener in $listeners) { $currentId = $listener.OwningProcess; $seen = @{}; while ($currentId -ne ${Number(childPid)}) { if ($seen.ContainsKey($currentId)) { exit 1 }; $seen[$currentId] = $true; $entry = $processes | Where-Object ProcessId -eq $currentId | Select-Object -First 1; if (!$entry) { exit 1 }; $currentId = $entry.ParentProcessId }; }; 'owned'`],
      { encoding: "utf8", timeout: 10000, windowsHide: true });
      return output.trim() === "owned";
    } catch { return false; }
  }
  let pids;
  try {
    pids = execFileSync("lsof", ["-nP", "-t", `-iTCP:${port}`, "-sTCP:LISTEN"], {
      encoding: "utf8",
      timeout: 5000,
    }).trim().split(/\s+/).filter(Boolean);
  } catch {
    return false;
  }
  return pids.length > 0 && pids.every((pid) => processGroup(pid) === String(childPid));
}

async function portIsAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.listen({ host: "127.0.0.1", port, exclusive: true }, () => {
      server.close(() => resolve(true));
    });
  });
}

async function findFreePort() {
  for (let port = BASE_PORT; port <= LAST_PORT; port += 1) {
    if (await portIsAvailable(port)) return port;
  }
  throw new Error(`Không có cổng trống trong dải ${BASE_PORT}-${LAST_PORT}.`);
}

function processGroupAlive(pid) {
  try {
    process.kill(-pid, 0);
    return true;
  } catch (error) {
    return error.code === "EPERM";
  }
}

async function killProcessGroup(pid, allowExitedLeader = false) {
  if (process.platform === "win32") {
    if (!processAlive(pid)) return;
    const result = spawnSync("taskkill.exe", ["/PID", String(pid), "/T", "/F"], { encoding: "utf8", windowsHide: true });
    if (result.error) throw result.error;
    if (result.status !== 0 && processAlive(pid)) throw new Error(result.stderr || result.stdout);
    return;
  }
  if (!processAlive(pid) && !allowExitedLeader) return;
  if (!processGroupAlive(pid)) return;
  try {
    process.kill(-pid, "SIGTERM");
  } catch (error) {
    if (error.code !== "ESRCH") throw error;
  }
  await sleep(1500);
  try {
    process.kill(-pid, "SIGKILL");
  } catch (error) {
    if (error.code !== "ESRCH") throw error;
  }
}

async function acquireLock(store) {
  fs.mkdirSync(DIR, { recursive: true, mode: 0o700 });
  let owner;
  try {
    const fd = fs.openSync(LOCK, "wx", 0o600);
    const initial = {
      pid: process.pid,
      childPid: null,
      port: null,
      editorUrl: null,
      store,
      branch: currentBranch(),
      root: ROOT,
      startedAt: new Date().toISOString(),
    };
    fs.writeFileSync(fd, `${JSON.stringify(initial, null, 2)}\n`);
    fs.closeSync(fd);
    return initial;
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
  }

  owner = readOwner();
  if (!owner) throw new Error(`Lock preview đang được tạo; thử lại sau. Log: ${LOG}`);
  if (isSupervisor(owner)) {
    throw new Error(`Preview đã chạy (PID ${owner.pid}, ${owner.store}); dùng status hoặc stop trước.`);
  }
  if (processAlive(owner.pid)) {
    throw new Error(`PID ${owner.pid} đang sống nhưng không khớp supervisor này; giữ nguyên lock để tránh dừng nhầm.`);
  }
  if (owner.childPid && isOwnedThemeDev(owner.childPid, owner)) {
    log(`Dọn process Shopify CLI cũ thuộc preview này: PID ${owner.childPid}`);
    // The command match above ties this process to this repo/store/port.
    await killProcessGroup(owner.childPid);
  } else if (owner.childPid && processAlive(owner.childPid)) {
    throw new Error(`PID ${owner.childPid} còn sống nhưng không khớp lệnh preview; giữ nguyên để tránh dừng nhầm.`);
  }
  fs.unlinkSync(LOCK);
  const fd = fs.openSync(LOCK, "wx", 0o600);
  const initial = {
    pid: process.pid,
    childPid: null,
    port: null,
    editorUrl: null,
    store,
    branch: currentBranch(),
    root: ROOT,
    startedAt: new Date().toISOString(),
  };
  fs.writeFileSync(fd, `${JSON.stringify(initial, null, 2)}\n`);
  fs.closeSync(fd);
  return initial;
}

function assertBranch(expected) {
  const current = currentBranch();
  if (!current) throw new Error("Đang ở detached HEAD; hãy checkout nhánh cần preview.");
  if (current !== expected) {
    throw new Error(`Nhánh hiện tại đã đổi từ ${expected} sang ${current}; preview sẽ dừng để không đồng bộ nhầm theme.`);
  }
}

function assertThemeRoot() {
  if (!fs.existsSync(path.join(ROOT, "config", "settings_schema.json")) ||
      !fs.existsSync(path.join(ROOT, "layout", "theme.liquid"))) {
    throw new Error(`${ROOT} không có cấu trúc Shopify theme hợp lệ.`);
  }
}

function hasAuthenticationFailure(output) {
  const normalized = output.replace(/\u001b\[[0-9;]*m/g, "").replace(/[│\s]+/g, " ");
  return /GraphQL Error \(Code:\s*(?:401|403)\)|currently available CLI credentials are invalid|Service is not valid for authentication/i.test(normalized);
}

async function supervise(runtime) {
  let backoff = 2000;
  let stopRetry = false;
  while (!runtime.stopping()) {
    let child;
    let port;
    try {
      await runtime.verify();
      if (runtime.stopping()) break;
      port = await (runtime.findFreePort || findFreePort)();
      child = runtime.start(port);
      runtime.setChild(child, port);
      const startedAt = Date.now();
      let healthyAt;
      let missedChecks = 0;

      while (!runtime.stopping()) {
        runtime.guard();
        if (child.authenticationFailed) {
          const error = new Error(`Shopify CLI không xác thực được với ${runtime.store} (401/403 hoặc credentials hết hiệu lực); đăng nhập lại cùng tài khoản trước khi chạy preview start.`);
          error.noRetry = true;
          throw error;
        }
        if (child.accessDenied) {
          const error = new Error(`Shopify CLI từ chối quyền truy cập ${runtime.store}; kiểm tra domain cửa hàng và quyền tài khoản.`);
          error.noRetry = true;
          throw error;
        }
        if (child.storePasswordPrompt) {
          const error = new Error("Store cần mật khẩu storefront. Chạy preview start trong terminal để nhập ẩn, hoặc đặt SHOPIFY_FLAG_STORE_PASSWORD khi chạy không tương tác.");
          error.noRetry = true;
          throw error;
        }
        if (child.editorUrlError) {
          const error = new Error(`Không lưu được link Theme Editor: ${child.editorUrlError.message}`);
          error.noRetry = true;
          throw error;
        }
        if (!runtime.alive(child)) throw new Error("Shopify CLI theme dev đã dừng.");
        if (await portIsOpen(port)) {
          if (!runtime.ownsPort(port, child.pid)) {
            throw new Error(`Cổng ${port} do process khác chiếm; sẽ chọn cổng khác để không dùng nhầm preview.`);
          }
          missedChecks = 0;
          if (healthyAt === undefined) {
            healthyAt = Date.now();
            runtime.setLastError(null);
            runtime.log(`Preview đang chạy tại http://127.0.0.1:${port}/ (store ${runtime.store})`);
          }
          if (Date.now() - healthyAt >= 60000) backoff = 2000;
        } else if (healthyAt !== undefined) {
          missedChecks += 1;
          if (missedChecks >= 2) throw new Error(`Cổng ${port} mất kết nối qua hai lần kiểm tra.`);
        } else if (Date.now() - startedAt >= 120000) {
          throw new Error(`Preview không mở được cổng ${port} trong 120 giây.`);
        }
        await runtime.wait(2000);
      }
    } catch (error) {
      runtime.log(`Lỗi: ${error.message}`);
      runtime.setLastError(error.message);
      if (error.noRetry) stopRetry = true;
    } finally {
      if (child) await runtime.stop(child);
      runtime.setChild(null, null);
    }
    if (stopRetry) {
      runtime.log("Preview dừng để chờ xử lý lỗi; xem `node theme-base preview status`, sửa theo nguyên nhân rồi chạy start lại.");
      break;
    }
    if (!runtime.stopping()) {
      runtime.log(`Tự thử khôi phục sau ${backoff / 1000} giây.`);
      await runtime.wait(backoff);
      backoff = Math.min(backoff * 2, 60000);
    }
  }
}

function readTarget(store) {
  const file = path.join(DIR, "target.json");
  if (!fs.existsSync(file)) return null;
  const target = JSON.parse(fs.readFileSync(file, "utf8"));
  if (target.store !== store) return null;
  if (!/^[1-9]\d*$/.test(String(target.themeId))) throw new Error(`ID theme không hợp lệ trong ${file}`);
  return target;
}

function cliOutput(args) {
  const cli = process.platform === "win32" ? resolveWindowsCli() : null;
  const result = spawnSync(cli ? process.execPath : "shopify", cli ? [cli, ...args] : args, {
    cwd: ROOT,
    env: clearShopifyFlagOverrides(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "inherit"],
    maxBuffer: 16 * 1024 * 1024,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error("Shopify CLI thất bại; chưa khởi động preview. Kiểm tra quyền truy cập store và lỗi ở trên.");
  return result.stdout.trim();
}

function listThemes(store) {
  return JSON.parse(cliOutput(["theme", "list", "--store", store, "--json", "--no-input"]));
}

function validateTargetTheme(id, themes) {
  if (!/^[1-9]\d*$/.test(String(id))) throw new Error("Nhập ID theme dạng số hoặc new để tạo draft riêng.");
  const theme = themes.find((item) => String(item.id) === String(id));
  if (!theme) throw new Error(`Theme ID ${id} không có trên store đã chọn.`);
  if (theme.role !== "unpublished") throw new Error(`Theme ${id} có role ${theme.role}. Hãy chọn draft unpublished riêng để tránh ghi đè live/development theme.`);
  return theme;
}

async function ensureTarget(store, selection) {
  const themes = listThemes(store);
  const saved = selection ? null : readTarget(store);
  let id = selection || saved?.themeId;
  if (!id) {
    console.log(`Chọn theme preview cho ${ROOT} trên ${store}:`);
    for (const theme of themes.filter((item) => item.role === "unpublished")) {
      console.log(`  ${theme.id} — ${theme.name}`);
    }
    if (!process.stdin.isTTY) {
      throw new Error("Chưa có theme đích. Hỏi người dùng ID đúng trên store hoặc chọn tạo draft riêng; sau đó chạy preview start --theme <ID|new>.");
    }
    const readline = require("node:readline/promises");
    const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
      id = (await prompt.question("Nhập ID draft đúng trên store, hoặc new để tạo draft riêng: ")).trim();
    } finally {
      prompt.close();
    }
  }
  let theme;
  if (id === "new") {
    const name = `${path.basename(ROOT)} local preview`;
    const existing = themes.find((item) => item.name === name && item.role === "unpublished");
    if (existing) throw new Error(`Đã có draft ${name}, ID ${existing.id}. Dùng --theme ${existing.id} để chọn rõ đích, tránh tạo trùng.`);
    log(`Đang tạo draft riêng ${name} và upload code local; chờ Shopify CLI hoàn tất...`);
    const output = cliOutput(["theme", "push", "--store", store, "--path", ROOT,
      "--unpublished", "--theme", name, "--strict", "--json", "--no-input"]);
    let records;
    try { records = [JSON.parse(output)]; }
    catch { records = output.split(/\r?\n/).flatMap((line) => {
      try { return [JSON.parse(line)]; } catch { return []; }
    });
    }
    theme = records.findLast((record) => record.theme)?.theme;
    if (!theme || theme.role !== "unpublished") throw new Error("Không xác nhận được draft vừa tạo; kiểm tra theme list trước khi thử lại để tránh tạo trùng.");
    validateTargetTheme(theme.id, listThemes(store));
  } else {
    theme = validateTargetTheme(id, themes);
  }
  const target = { store, themeId: String(theme.id), name: theme.name };
  fs.mkdirSync(DIR, { recursive: true, mode: 0o700 });
  const file = path.join(DIR, "target.json");
  const temporary = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(target, null, 2)}\n`, { mode: 0o600 });
  fs.renameSync(temporary, file);
  log(`Đích preview: ${theme.name} (${theme.id}); store ${store}.`);
}

function previewDevArgs(store, port, themeId) {
  if (!/^[1-9]\d*$/.test(String(themeId))) throw new Error("Thiếu ID theme preview đã kiểm tra.");
  return ["theme", "dev", "--store", store, "--path", ROOT,
    "--host", "127.0.0.1", "--port", String(port), "--nodelete", "--open", "--theme", String(themeId)];
}

async function run(store) {
  assertThemeRoot();
  const target = readTarget(store);
  if (!target) throw new Error("Chưa chọn theme. Chạy node theme-base preview start để chọn ID hoặc tạo draft riêng.");
  const targetThemeId = String(target.themeId);
  validateTargetTheme(targetThemeId, listThemes(store));
  const branch = currentBranch();
  if (!branch) throw new Error("Đang ở detached HEAD; hãy checkout nhánh cần preview.");
  let owner = await acquireLock(store);
  owner = { ...owner, themeId: targetThemeId, themeName: target.name };
  writeOwner(owner);
  let stopping = false;
  const requestStop = () => { stopping = true; };
  process.on("SIGTERM", requestStop);
  process.on("SIGINT", requestStop);
  const save = (childPid, port) => {
    owner = { ...owner, childPid, port };
    writeOwner(owner);
  };
  const setEditorUrl = (editorUrl) => {
    const shouldOpen = !owner.editorUrl;
    owner = { ...owner, editorUrl };
    writeOwner(owner);
    if (shouldOpen && process.platform === "darwin") {
      const browser = spawn("open", [editorUrl], { detached: true, stdio: "ignore" });
      browser.on("error", (error) => log(`Không tự mở được Theme Editor: ${error.message}`));
      browser.unref();
    }
  };
  const wait = async (ms) => {
    const until = Date.now() + ms;
    while (!stopping && Date.now() < until) await sleep(Math.min(250, until - Date.now()));
  };
  const guard = () => {
    try {
      assertBranch(branch);
    } catch (error) {
      stopping = true;
      throw error;
    }
  };

  try {
    await supervise({
      store,
      stopping: () => stopping,
      wait,
      log,
      setEditorUrl,
      setLastError: saveLastError,
      guard,
      verify: () => {
        guard();
        assertThemeRoot();
        try { validateTargetTheme(targetThemeId, listThemes(store)); }
        catch (error) { error.noRetry = true; throw error; }
      },
      start: (port) => {
        const args = previewDevArgs(store, port, targetThemeId);
        log(`Chạy shopify ${args.join(" ")}`);
        // npm's Windows .cmd shim cannot be spawned directly without a shell.
        const cli = process.platform === "win32" ? resolveWindowsCli() : null;
        const child = spawn(cli ? process.execPath : "shopify", cli ? [cli, ...args] : args, {
          cwd: ROOT,
          env: clearShopifyFlagOverrides(),
          detached: true,
          stdio: ["ignore", "pipe", "pipe"],
        });
        let recentOutput = "";
        const forwardOutput = (stream, destination) => {
          stream.setEncoding("utf8");
          stream.on("data", (chunk) => {
            const output = chunk.replace(/\u001b\[[0-9;]*m/g, "");
            destination.write(chunk);
            recentOutput = `${recentOutput}${output}`.slice(-2048);
            if (hasAuthenticationFailure(recentOutput)) child.authenticationFailed = true;
            if (/not authorized to use the CLI to develop in the provided store/i.test(recentOutput)) {
              child.accessDenied = true;
            }
            if (/Failed to prompt:[\s\S]*?Enter your store password/i.test(recentOutput)) {
              child.storePasswordPrompt = true;
            }
            const editorUrl = extractThemeEditorUrl(recentOutput);
            if (editorUrl && child.editorUrl !== editorUrl) {
              child.editorUrl = editorUrl;
              try {
                setEditorUrl(editorUrl);
                log(`Theme Editor: ${editorUrl}`);
              } catch (error) {
                child.editorUrlError = error;
                log(`Không lưu được Theme Editor: ${error.message}`);
              }
            }
          });
        };
        forwardOutput(child.stdout, process.stdout);
        forwardOutput(child.stderr, process.stderr);
        child.on("error", (error) => {
          child.failed = true;
          log(`Không chạy được Shopify CLI: ${error.message}`);
        });
        return child;
      },
      setChild: (child, port) => save(child?.pid ?? null, port),
      alive: (child) => !child.failed && child.exitCode === null && child.signalCode === null,
      ownsPort: portBelongsToSupervisor,
      stop: async (child) => {
        if (child.pid) await killProcessGroup(child.pid, true);
      },
    });
  } finally {
    const current = readOwner();
    if (current?.pid === process.pid) fs.unlinkSync(LOCK);
    log("Preview supervisor đã dừng.");
  }
}

function promptStorePassword() {
  if (!process.stdin.isTTY || typeof process.stdin.setRawMode !== "function") {
    throw new Error("Cần terminal tương tác để nhập mật khẩu storefront, hoặc đặt SHOPIFY_FLAG_STORE_PASSWORD trước khi chạy preview start.");
  }
  process.stdout.write("Storefront password: ");
  return new Promise((resolve, reject) => {
    const wasRaw = process.stdin.isRaw;
    let value = Buffer.alloc(0);
    const finish = (error) => {
      process.stdin.off("data", onData);
      process.stdin.setRawMode(Boolean(wasRaw));
      process.stdin.pause();
      process.stdout.write("\n");
      if (error) reject(error);
      else if (value.length === 0) reject(new Error("Mật khẩu storefront trống."));
      else resolve(value.toString("utf8"));
    };
    const onData = (chunk) => {
      for (const byte of chunk) {
        if (byte === 13 || byte === 10) return finish();
        if (byte === 3 || byte === 4) return finish(new Error("Đã hủy nhập mật khẩu storefront."));
        if (byte === 8 || byte === 127) {
          value = Buffer.from(Array.from(value.toString("utf8")).slice(0, -1).join(""));
        } else if (byte >= 32) {
          value = Buffer.concat([value, Buffer.from([byte])]);
        }
      }
    };
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", onData);
  });
}

function createLogFollower(initialOffset) {
  let offset = initialOffset;
  let pending = "";
  let decoder = new StringDecoder("utf8");

  const printLines = (content) => {
    const lines = `${pending}${content}`.split(/\r?\n/);
    pending = lines.pop();
    for (const line of lines) process.stdout.write(`${line}${os.EOL}`);
  };

  return {
    poll() {
      let size;
      try {
        size = fs.statSync(LOG).size;
      } catch (error) {
        if (error.code === "ENOENT") return;
        throw error;
      }
      if (size < offset) {
        offset = 0;
        pending = "";
        decoder = new StringDecoder("utf8");
      }
      if (size === offset) return;

      const fd = fs.openSync(LOG, "r");
      try {
        const buffer = Buffer.alloc(Math.min(size - offset, 64 * 1024));
        const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, offset);
        if (bytesRead > 0) {
          offset += bytesRead;
          printLines(decoder.write(buffer.subarray(0, bytesRead)));
        }
      } finally {
        fs.closeSync(fd);
      }
    },
    flush() {
      this.poll();
      printLines(decoder.end());
      if (pending) process.stdout.write(pending);
      pending = "";
    },
  };
}

async function start(store, themeId) {
  assertThemeRoot();
  if (!currentBranch()) throw new Error("Đang ở detached HEAD; hãy checkout nhánh cần preview.");
  fs.mkdirSync(DIR, { recursive: true, mode: 0o700 });
  const existing = readOwner();
  if (existing && isSupervisor(existing)) {
    throw new Error(`Preview đã chạy tại http://127.0.0.1:${existing.port || "..."}/ cho ${existing.store}; dùng status hoặc stop.`);
  }

  await ensureTarget(store, themeId);
  let storePassword = process.env.SHOPIFY_FLAG_STORE_PASSWORD || null;
  let supervisorPid = null;
  let interrupted = false;
  const interrupt = () => {
    interrupted = true;
    if (supervisorPid && processAlive(supervisorPid)) {
      try {
        if (process.platform === "win32") {
          const result = spawnSync("taskkill.exe", ["/PID", String(supervisorPid), "/T", "/F"], { encoding: "utf8", windowsHide: true });
          if (result.status === 0 && readOwner()?.pid === supervisorPid) fs.unlinkSync(LOCK);
          return;
        }
        process.kill(supervisorPid, "SIGTERM");
      } catch {
        // The supervisor may have exited while the signal was being sent.
      }
    }
  };
  process.on("SIGINT", interrupt);
  try {
    for (;;) {
      saveLastError(null);
      const logOffset = fs.existsSync(LOG) ? fs.statSync(LOG).size : 0;
      const follower = createLogFollower(logOffset);
      const fd = fs.openSync(LOG, "a", 0o600);
      const child = spawn(process.execPath, [__filename, "run", "--store", store], {
        cwd: ROOT,
        env: storePassword ? { ...process.env, SHOPIFY_FLAG_STORE_PASSWORD: storePassword } : process.env,
        detached: true,
        stdio: ["ignore", fd, fd],
      });
      fs.closeSync(fd);
      child.unref();
      supervisorPid = child.pid;
      if (interrupted) interrupt();
      const startedAt = Date.now();
      let lockSeen = false;
      let shownError = null;
      log(`Đang chờ Shopify CLI kết nối ${store}; hoàn tất đăng nhập trong trình duyệt nếu được yêu cầu.`);

      for (;;) {
        follower.poll();
        if (interrupted) {
          log("Đang dừng preview...");
          while (processAlive(child.pid)) {
            follower.poll();
            await sleep(250);
          }
          follower.flush();
          return;
        }
        const owner = readOwner();
        if (owner?.pid === child.pid) {
          lockSeen = true;
          if (owner.editorUrl && owner.port) {
            log(`Preview: http://127.0.0.1:${owner.port}/`);
            log(`Theme Editor: ${owner.editorUrl}`);
            log(`Supervisor PID ${child.pid}; branch ${owner.branch}; store ${store}.`);
            log("Đang theo dõi thay đổi file và hiển thị log Shopify CLI. Nhấn Ctrl+C để dừng preview.");
            while (processAlive(child.pid)) {
              follower.poll();
              await sleep(250);
            }
            follower.flush();
            return;
          }
        }
        const latestError = readLastError()?.message;
        if (latestError && latestError !== shownError) {
          shownError = latestError;
          log(`Shopify CLI: ${latestError}`);
        }
        if (child.exitCode !== null || child.signalCode !== null || !processAlive(child.pid)) {
          follower.flush();
          const message = latestError || `Supervisor thoát trước khi preview sẵn sàng. Xem ${LOG}`;
          if (!storePassword && message.includes("SHOPIFY_FLAG_STORE_PASSWORD")) {
            storePassword = await promptStorePassword();
            break;
          }
          throw new Error(message);
        }
        if (!lockSeen && Date.now() - startedAt >= 20000) {
          interrupt();
          throw new Error(`Supervisor chưa nhận lock trong 20 giây. Xem ${LOG}`);
        }
        await sleep(500);
      }
    }
  } finally {
    process.off("SIGINT", interrupt);
  }
}

async function status() {
  const owner = readOwner();
  const lastError = readLastError();
  if (!owner) {
    log("Preview: đã dừng.");
    if (lastError?.message) log(`Lỗi gần nhất: ${lastError.message}`);
    log(`Log: ${LOG}`);
    return;
  }
  const running = isSupervisor(owner);
  const open = owner.port ? await portIsOpen(owner.port) : false;
  const editorUrl = owner.editorUrl || editorUrlFromCurrentLog(owner);
  const cliAlive = owner.childPid && processAlive(owner.childPid);
  const cliState = owner.childPid ? (cliAlive ? `PID ${owner.childPid}` : "đã dừng") : "đang khởi động";
  log(`Supervisor: ${running ? `PID ${owner.pid}` : "đã dừng"}; Shopify CLI: ${cliState}.`);
  log(`Branch: ${owner.branch || "không rõ"}; store: ${owner.store || "không rõ"}.`);
  log(`Theme: ${owner.themeName || "phiên cũ"}; ID: ${owner.themeId || "chưa cố định"}.`);
  log(`Preview: ${owner.port ? `http://127.0.0.1:${owner.port}/` : "chưa có cổng"}; cổng: ${open ? "đang mở" : "đang đóng"}.`);
  log(`${!running && !cliAlive ? "Theme Editor phiên trước" : "Theme Editor"}: ${editorUrl || "đang chờ Shopify CLI kết nối store"}.`);
  if (!running && cliAlive) {
    log("Shopify CLI vẫn chạy ngoài supervisor; chạy preview start để dọn phiên cũ và khôi phục giám sát.");
  }
  if (lastError?.message) log(`Lỗi gần nhất: ${lastError.message}`);
  log(`Log: ${LOG}`);
}

function logs() {
  if (!fs.existsSync(LOG)) {
    log("Chưa có log preview.");
    return;
  }
  const lines = fs.readFileSync(LOG, "utf8").trimEnd().split(/\r?\n/);
  const recent = lines.slice(-40).map((line) => line
    .replace(/User verification code:\s*[A-Z0-9-]+/gi, "User verification code: [ẩn]")
    .replace(/https:\/\/accounts\.shopify\.com\/activate-with-code\?[^\s]*/gi,
      "https://accounts.shopify.com/activate-with-code?[đã ẩn]"));
  console.log(`40 dòng log gần nhất (mã đăng nhập đã ẩn):${os.EOL}${recent.join(os.EOL)}`);
}

async function stop() {
  const owner = readOwner();
  if (!owner) {
    log("Preview đã dừng.");
    return;
  }
  if (!isSupervisor(owner)) {
    if (processAlive(owner.pid)) {
      throw new Error(`PID ${owner.pid} còn sống nhưng không khớp supervisor; không dừng nhầm process.`);
    }
    if (owner.childPid && isOwnedThemeDev(owner.childPid, owner)) {
      await killProcessGroup(owner.childPid);
    } else if (owner.childPid && processAlive(owner.childPid)) {
      throw new Error(`PID ${owner.childPid} không khớp Shopify CLI của preview; không dừng nhầm process.`);
    }
    fs.unlinkSync(LOCK);
    log("Đã dọn lock preview cũ; không còn supervisor hoạt động.");
    return;
  }

  if (process.platform === "win32") {
    await killProcessGroup(owner.pid);
    if (readOwner()?.pid === owner.pid) fs.unlinkSync(LOCK);
    log("Đã dừng supervisor và tiến trình Shopify CLI thuộc preview.");
    return;
  }
  process.kill(owner.pid, "SIGTERM");
  for (let i = 0; i < 80 && processAlive(owner.pid); i += 1) await sleep(250);
  if (processAlive(owner.pid)) throw new Error("Supervisor chưa dừng sau 20 giây; xem status và logs.");
  log("Đã dừng supervisor và tiến trình Shopify CLI thuộc preview.");
}

function help() {
  console.log("Shopify theme preview cho repo base cá nhân\n\n" +
    "  node theme-base preview start\n" +
    "  node theme-base preview start --theme <ID|new>\n" +
    `  node theme-base preview start --store ${DEFAULT_STORE}\n` +
    "  node theme-base preview status\n" +
    "  node theme-base preview logs\n" +
    "  node theme-base preview stop\n\n" +
    `Mặc định dùng store ${DEFAULT_STORE}.myshopify.com; tự chọn cổng trống trong dải ${BASE_PORT}-${LAST_PORT}, tách khỏi cổng mặc định 9292. ` +
    "Chưa có theme đích: hỏi ID draft trên store hoặc new để tạo draft riêng. Không tự dùng development theme chung. " +
    "Start giữ terminal mở, hiện log liên tục và theo dõi thay đổi file; nhấn Ctrl+C để dừng preview.");
}

async function main(args) {
  const [action, ...rest] = args;
  if (!action || action === "help" || action === "--help" || action === "-h") return help();
  if (action === "start" || action === "run") {
    const options = parseStartArgs(rest);
    if (action === "start") return start(options.store, options.themeId);
    if (options.themeId) throw new Error("Dùng --theme với preview start.");
    return run(options.store);
  }
  if (rest.length) throw new Error(`${action} không nhận thêm tham số.`);
  if (action === "status") return status();
  if (action === "logs") return logs();
  if (action === "stop") return stop();
  throw new Error(`Lệnh không hỗ trợ: ${action}. Chạy node theme-base preview help.`);
}

if (require.main === module) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(`\nLỗi: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { hasAuthenticationFailure, supervise, ensureTarget, previewDevArgs, processCommand, portBelongsToSupervisor, resolveWindowsCli, readOwner, parseStartArgs, readTarget, validateTargetTheme };

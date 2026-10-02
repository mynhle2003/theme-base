#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const net = require("node:net");
const os = require("node:os");
const path = require("node:path");
const { spawn, spawnSync, execFileSync } = require("node:child_process");

const ROOT = path.resolve(__dirname, "..");
const BASE_PORT = 9300;
const LAST_PORT = 9399;
const DIR = path.join(ROOT, ".shopify", "theme-base-preview");
const LOCK = path.join(DIR, "owner.json");
const LOG = path.join(DIR, "preview.log");
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
  if (!value) throw new Error("Thiếu store. Dùng --store layouthub-template-v2.");
  const name = value.toLowerCase().replace(/\.myshopify\.com$/, "");
  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(name)) {
    throw new Error("Store chỉ nhận tên store hoặc domain dạng <store>.myshopify.com.");
  }
  return `${name}.myshopify.com`;
}

function parseStartArgs(args) {
  let store;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === "--store") {
      if (store || !args[i + 1]) throw new Error("Dùng --store <store>.myshopify.com một lần.");
      store = args[++i];
    } else if (args[i].startsWith("--store=")) {
      if (store) throw new Error("Chỉ truyền --store một lần.");
      store = args[i].slice("--store=".length);
    } else {
      throw new Error(`Tùy chọn không hỗ trợ: ${args[i]}`);
    }
  }
  return normalizeStore(store);
}

function readOwner() {
  try {
    return JSON.parse(fs.readFileSync(LOCK, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

function writeOwner(owner) {
  const temporary = `${LOCK}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(owner, null, 2)}\n`, { mode: 0o600 });
  fs.renameSync(temporary, LOCK);
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
    command.includes(`--port ${owner.port}`));
}

function clearShopifyFlagOverrides() {
  const env = { ...process.env };
  for (const key of Object.keys(env)) {
    if (key.startsWith("SHOPIFY_FLAG_")) delete env[key];
  }
  return env;
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

async function supervise(runtime) {
  let backoff = 2000;
  let stopRetry = false;
  while (!runtime.stopping()) {
    let child;
    let port;
    try {
      await runtime.verify();
      if (runtime.stopping()) break;
      port = await findFreePort();
      child = runtime.start(port);
      runtime.setChild(child, port);
      const startedAt = Date.now();
      let healthyAt;
      let missedChecks = 0;

      while (!runtime.stopping()) {
        runtime.guard();
        if (child.accessDenied) {
          const error = new Error(`Shopify CLI từ chối quyền truy cập ${runtime.store}; kiểm tra domain cửa hàng và quyền tài khoản.`);
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
      if (error.noRetry) stopRetry = true;
    } finally {
      if (child) await runtime.stop(child);
      runtime.setChild(null, null);
    }
    if (stopRetry) {
      runtime.log("Không tự khởi động lại preview sau lỗi quyền truy cập; sửa store hoặc quyền tài khoản rồi chạy start lại.");
      break;
    }
    if (!runtime.stopping()) {
      runtime.log(`Tự thử khôi phục sau ${backoff / 1000} giây.`);
      await runtime.wait(backoff);
      backoff = Math.min(backoff * 2, 60000);
    }
  }
}

async function run(store) {
  assertThemeRoot();
  const branch = currentBranch();
  if (!branch) throw new Error("Đang ở detached HEAD; hãy checkout nhánh cần preview.");
  let owner = await acquireLock(store);
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
      guard,
      verify: () => {
        guard();
        assertThemeRoot();
      },
      start: (port) => {
        const args = ["theme", "dev", "--store", store, "--path", ROOT,
          "--host", "127.0.0.1", "--port", String(port), "--nodelete", "--open"];
        log(`Chạy shopify ${args.join(" ")}`);
        const child = spawn("shopify", args, {
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
            if (/not authorized to use the CLI to develop in the provided store/i.test(recentOutput)) {
              child.accessDenied = true;
            }
            const editorUrl = extractThemeEditorUrl(recentOutput);
            if (editorUrl && child.editorUrl !== editorUrl) {
              child.editorUrl = editorUrl;
              runtime.setEditorUrl(editorUrl);
              runtime.log(`Theme Editor: ${editorUrl}`);
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

async function start(store) {
  assertThemeRoot();
  if (!currentBranch()) throw new Error("Đang ở detached HEAD; hãy checkout nhánh cần preview.");
  fs.mkdirSync(DIR, { recursive: true, mode: 0o700 });
  const existing = readOwner();
  if (existing && isSupervisor(existing)) {
    throw new Error(`Preview đã chạy tại http://127.0.0.1:${existing.port || "..."}/ cho ${existing.store}; dùng status hoặc stop.`);
  }

  const fd = fs.openSync(LOG, "a", 0o600);
  const child = spawn(process.execPath, [__filename, "run", "--store", store], {
    cwd: ROOT,
    detached: true,
    stdio: ["ignore", fd, fd],
  });
  fs.closeSync(fd);
  child.unref();

  for (let i = 0; i < 80; i += 1) {
    const owner = readOwner();
    if (owner?.pid === child.pid && owner.port) {
      log(`Preview supervisor PID ${child.pid}; branch ${owner.branch}; store ${store}.`);
      log(`Đang khởi động tại http://127.0.0.1:${owner.port}/; trạng thái: node theme-base preview status`);
      log(`Log: ${LOG}`);
      return;
    }
    if (!processAlive(child.pid)) {
      throw new Error(`Supervisor thoát khi khởi động. Xem log: ${LOG}`);
    }
    await sleep(250);
  }
  throw new Error(`Supervisor chưa nhận lock trong 20 giây. Xem log: ${LOG}`);
}

async function status() {
  const owner = readOwner();
  if (!owner) {
    log("Preview: đã dừng.");
    log(`Log: ${LOG}`);
    return;
  }
  const running = isSupervisor(owner);
  const open = owner.port ? await portIsOpen(owner.port) : false;
  log(`Supervisor: ${running ? `PID ${owner.pid}` : "đã dừng"}; Shopify CLI: ${owner.childPid || "đang khởi động"}.`);
  log(`Branch: ${owner.branch || "không rõ"}; store: ${owner.store || "không rõ"}.`);
  log(`Preview: ${owner.port ? `http://127.0.0.1:${owner.port}/` : "chưa có cổng"}; cổng: ${open ? "đang mở" : "đang đóng"}.`);
  log(`Theme Editor: ${owner.editorUrl || "đang chờ Shopify CLI kết nối store"}.`);
  log(`Log: ${LOG}`);
}

function logs() {
  if (!fs.existsSync(LOG)) {
    log("Chưa có log preview.");
    return;
  }
  const lines = fs.readFileSync(LOG, "utf8").trimEnd().split(/\r?\n/);
  console.log(lines.slice(-100).join(os.EOL));
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

  process.kill(owner.pid, "SIGTERM");
  for (let i = 0; i < 80 && processAlive(owner.pid); i += 1) await sleep(250);
  if (processAlive(owner.pid)) throw new Error("Supervisor chưa dừng sau 20 giây; xem status và logs.");
  log("Đã dừng supervisor và tiến trình Shopify CLI thuộc preview.");
}

function help() {
  console.log("Shopify theme preview cho repo base cá nhân\n\n" +
    "  node theme-base preview start --store layouthub-template-v2\n" +
    "  node theme-base preview status\n" +
    "  node theme-base preview logs\n" +
    "  node theme-base preview stop\n\n" +
    `Tự chọn cổng trống trong dải ${BASE_PORT}-${LAST_PORT}; không dùng cổng team 9292. ` +
    "File local được Shopify CLI đồng bộ khi thay đổi.");
}

async function main(args) {
  const [action, ...rest] = args;
  if (!action || action === "help" || action === "--help" || action === "-h") return help();
  if (action === "start") return start(parseStartArgs(rest));
  if (action === "run") return run(parseStartArgs(rest));
  if (rest.length) throw new Error(`${action} không nhận thêm tham số.`);
  if (action === "status") return status();
  if (action === "logs") return logs();
  if (action === "stop") return stop();
  throw new Error(`Lệnh không hỗ trợ: ${action}. Chạy node theme-base preview help.`);
}

main(process.argv.slice(2)).catch((error) => {
  console.error(`\nLỗi: ${error.message}`);
  process.exitCode = 1;
});

#!/usr/bin/env node
"use strict";

const { spawnSync } = require("node:child_process");
const { createInterface } = require("node:readline/promises");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { stdin, stdout } = require("node:process");

const ROOT = path.resolve(__dirname, "..");
const UPSTREAM = "https://github.com/Chieu2507/shopify-theme-base";
const SHOPIFY_SETTING_TYPES_WITHOUT_DEFAULT_ATTRIBUTE = new Set([
  "article",
  "blog",
  "collection",
  "image_picker",
  "page",
  "product",
  "video",
]);
// These optional inputs return an empty/unset value when main omits default.
// Preserve that state rather than inventing content or a color in theme presets.
const SHOPIFY_SETTING_TYPES_WITH_IMPLICIT_EMPTY_DEFAULT = new Set([
  "url",
  "text",
  "color",
  "color_background",
]);

function run(command, args, { allowFailure = false, inherit = false, input, env } = {}) {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: inherit ? "inherit" : "pipe",
    input,
    env: env ? { ...process.env, ...env } : process.env,
  });

  if (result.error) throw result.error;
  const output = `${result.stdout || ""}${result.stderr || ""}`;
  if (result.status !== 0 && !allowFailure) {
    if (output) process.stderr.write(output);
    throw new Error(`${command} ${args.join(" ")} exited with ${result.status}`);
  }
  return { status: result.status ?? 1, stdout: result.stdout || "", stderr: result.stderr || "", output };
}

function git(args, options) {
  return run("git", args, options);
}

function gitText(args, options) {
  return git(args, options).stdout.trim();
}

function currentBranch() {
  return gitText(["branch", "--show-current"]);
}

function canonicalRemote(value) {
  return value.trim().toLowerCase()
    .replace(/^git@github\.com:/, "https://github.com/")
    .replace(/^ssh:\/\/git@github\.com\//, "https://github.com/")
    .replace(/\.git$/, "")
    .replace(/\/+$/, "");
}

function assertRemotes() {
  const expected = {
    origin: "https://github.com/mynhle2003/theme-base",
    upstream: UPSTREAM,
  };
  for (const [name, url] of Object.entries(expected)) {
    for (const mode of [[], ["--push"]]) {
      const actual = canonicalRemote(gitText(["remote", "get-url", ...mode, name]));
      if (actual !== canonicalRemote(url)) {
        throw new Error(`${name}${mode.length ? " push" : " fetch"} đang trỏ tới ${actual}; cần ${url}. Không thực hiện sync.`);
      }
    }
  }
}

function requireBranch(expected) {
  const current = currentBranch();
  if (current !== expected) {
    throw new Error(`Đang ở nhánh ${current || "detached HEAD"}; hãy chuyển sang ${expected} trước.`);
  }
}

function requireClean() {
  const status = gitText(["status", "--porcelain=v1", "--untracked-files=normal"]);
  if (status) {
    throw new Error(`Worktree chưa sạch; hãy lưu/commit các thay đổi trước:\n${status}`);
  }
}

function isAncestor(older, newer) {
  const result = git(["merge-base", "--is-ancestor", older, newer], { allowFailure: true });
  if (result.status === 0) return true;
  if (result.status === 1) return false;
  throw new Error(`Không xác định được quan hệ giữa ${older} và ${newer}.`);
}

function fetchBaseRefs() {
  console.log("Đang fetch upstream/main và upstream/dev (không lấy nhánh upstream nào khác)...");
  git([
    "fetch",
    "upstream",
    "+refs/heads/main:refs/remotes/upstream/main",
    "+refs/heads/dev:refs/remotes/upstream/dev",
  ], { inherit: true });
  fetchOriginMain();
}

function fetchOriginMain() {
  git(["fetch", "origin", "+refs/heads/main:refs/remotes/origin/main"], { inherit: true });
}

function ensurePersonalMainCurrent() {
  const local = gitText(["rev-parse", "main"]);
  const remote = gitText(["rev-parse", "origin/main"]);
  if (local === remote) return;
  if (isAncestor("main", "origin/main")) {
    throw new Error("origin/main đang đi trước main local. Hãy đồng bộ và review origin/main trước khi cập nhật base.");
  }
  if (!isAncestor("origin/main", "main")) {
    throw new Error("main và origin/main đã phân kỳ; cần review/merge thủ công trước khi tiếp tục.");
  }
  throw new Error("main local có commit chưa push lên origin/main; hãy push/review trước khi đồng bộ base.");
}

function chooseUpstreamBranch(requested) {
  const main = "upstream/main";
  const dev = "upstream/dev";
  if (requested !== "auto") return requested;

  const mainSha = gitText(["rev-parse", main]);
  const devSha = gitText(["rev-parse", dev]);
  if (mainSha === devSha) return "main";
  if (isAncestor(main, dev)) return "dev";
  if (isAncestor(dev, main)) return "main";

  const mainTime = Number(gitText(["show", "-s", "--format=%ct", main]));
  const devTime = Number(gitText(["show", "-s", "--format=%ct", dev]));
  if (mainTime === devTime) {
    throw new Error("upstream/main và upstream/dev phân kỳ, cùng thời điểm commit; hãy chọn --source main hoặc --source dev.");
  }
  const selected = mainTime > devTime ? "main" : "dev";
  console.log(`upstream/main và upstream/dev phân kỳ; chọn ${selected} theo thời điểm commit mới nhất để lập diff review.`);
  return selected;
}

function listChanges(from, to) {
  const names = gitText(["diff", "--name-status", from, to]);
  if (!names) {
    console.log("Không có file khác nhau.");
    return [];
  }
  const stat = gitText(["diff", "--stat", from, to]);
  const files = names.split("\n");
  console.log("\nTóm tắt thay đổi:");
  console.log(stat);
  console.log("\nDanh sách file:");
  console.log(names);
  if (files.length >= 30) {
    console.log("\nCó từ 30 file thay đổi trở lên; review toàn bộ diff trước khi duyệt.");
  }
  return files;
}

function treeEntry(revision, repoPath) {
  const line = git(["ls-tree", revision, "--", repoPath]).stdout.trim();
  if (!line) return null;
  const match = line.match(/^(\d+)\s+blob\s+([0-9a-f]+)\t/);
  if (!match) throw new Error(`Không đọc được entry Git cho ${repoPath} tại ${revision}.`);
  return { mode: match[1], oid: match[2] };
}

function treePreservingPaths(source, ours, preservedPaths) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "theme-base-sync-index-"));
  const env = { GIT_INDEX_FILE: path.join(tempDir, "index") };
  try {
    git(["read-tree", `${source}^{tree}`], { env });
    for (const repoPath of preservedPaths) {
      const entry = treeEntry(ours, repoPath);
      if (entry) {
        git(["update-index", "--add", "--cacheinfo", `${entry.mode},${entry.oid},${repoPath}`], { env });
      } else {
        git(["update-index", "--force-remove", "--", repoPath], { env, allowFailure: true });
      }
    }
    return gitText(["write-tree"], { env });
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function mergeTree(base, ours, theirs, label, preservedPaths = []) {
  const oursTree = gitText(["rev-parse", `${ours}^{tree}`]);
  const theirsTree = preservedPaths.length
    ? treePreservingPaths(theirs, ours, preservedPaths)
    : gitText(["rev-parse", `${theirs}^{tree}`]);
  return mergeTreeObjects(base, oursTree, theirsTree, label);
}

function mergeTreeObjects(base, oursTree, theirsTree, label) {
  const oursAnchor = gitText(["commit-tree", oursTree, "-p", base, "-m", `Temporary merge anchor for ${label} (ours)`]);
  const theirsAnchor = gitText(["commit-tree", theirsTree, "-p", base, "-m", `Temporary merge anchor for ${label} (theirs)`]);
  const result = git(["merge-tree", "--write-tree", oursAnchor, theirsAnchor], { allowFailure: true });
  if (result.status !== 0) {
    if (result.output) process.stderr.write(result.output);
    throw new Error(`Có conflict khi ghép ${label}; chưa thay đổi worktree.`);
  }
  const tree = result.stdout.trim().split("\n")[0];
  if (!/^[0-9a-f]{40,64}$/.test(tree)) throw new Error(`Git không trả về tree hợp lệ khi ghép ${label}.`);
  return tree;
}

function writeTreeWithOverrides(sourceTree, overrides) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "theme-base-sync-tree-"));
  const env = { GIT_INDEX_FILE: path.join(tempDir, "index") };
  try {
    git(["read-tree", `${sourceTree}^{tree}`], { env });
    for (const [repoPath, contents] of Object.entries(overrides)) {
      if (contents === null) {
        git(["update-index", "--force-remove", "--", repoPath], { env, allowFailure: true });
        continue;
      }
      const existing = treeEntry(sourceTree, repoPath);
      const mode = existing?.mode || "100644";
      const oid = git(["hash-object", "-w", "--stdin"], { input: contents }).stdout.trim();
      git(["update-index", "--add", "--cacheinfo", `${mode},${oid},${repoPath}`], { env });
    }
    return gitText(["write-tree"], { env });
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function previewTree(from, tree) {
  listChanges(from, tree);
  console.log("\nDiff đầy đủ để review:");
  git(["--no-pager", "diff", "--no-ext-diff", "--no-color", from, tree], { inherit: true });
}

function applyTreeDiff(from, tree) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "theme-base-sync-patch-"));
  const patchPath = path.join(tempDir, "changes.patch");
  try {
    git(["diff", "--binary", `--output=${patchPath}`, from, tree]);
    const hasPatch = fs.existsSync(patchPath) && fs.statSync(patchPath).size > 0;
    if (hasPatch) git(["apply", "--index", patchPath]);
    return { tempDir, patchPath, hasPatch };
  } catch (error) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw error;
  }
}

function rollbackTreeDiff(patch) {
  if (patch?.hasPatch) git(["apply", "--reverse", "--index", patch.patchPath], { allowFailure: true });
}

function cleanupTreeDiff(patch) {
  if (patch?.tempDir) fs.rmSync(patch.tempDir, { recursive: true, force: true });
}

function sourceChangeRange(previousSha, targetRef) {
  const base = isAncestor(previousSha, targetRef)
    ? previousSha
    : gitText(["merge-base", previousSha, targetRef]);
  const lines = gitText(["log", "--reverse", "--format=%H%x09%s", `${base}..${targetRef}`])
    .split("\n").filter(Boolean).map((line) => {
      const [sha, ...subjectParts] = line.split("\t");
      return { sha, subject: subjectParts.join("\t") };
    });
  return { base, commits: lines, stat: gitText(["diff", "--stat", base, targetRef]) };
}

const BASE_HISTORY_FILE = path.join(ROOT, "docs", "base-update-history.md");

function readBaseSyncState() {
  if (!fs.existsSync(BASE_HISTORY_FILE)) return null;
  const contents = fs.readFileSync(BASE_HISTORY_FILE, "utf8");
  const match = contents.match(/^<!-- base-sync-state: (.+) -->$/m);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    throw new Error("Không đọc được marker nguồn trong docs/base-update-history.md.");
  }
}

function baseHistoryEntry(source, previousSha, targetSha, changeRange) {
  const date = new Date().toISOString().slice(0, 10);
  const commits = changeRange.commits.length
    ? changeRange.commits.map(({ sha, subject }) => `  - \`${sha}\` — ${subject}`).join("\n")
    : "  - Không có commit team mới trong phạm vi nguồn.";
  return `## ${date} — Update from upstream/${source}\n\n` +
    `- Repository: ${UPSTREAM}\n` +
    `- Branch: \`upstream/${source}\`\n` +
    `- Previous team commit: \`${previousSha}\`\n` +
    `- Updated through team commit: \`${targetSha}\`\n` +
    `- Team commits included: ${changeRange.commits.length}\n` +
    `- Source changes:\n\n\`\`\`text\n${changeRange.stat || "No file changes."}\n\`\`\`\n\n` +
    `- Included team commits:\n${commits}\n`;
}

function writeBaseHistory(source, previousSha, targetSha, changeRange) {
  const current = fs.existsSync(BASE_HISTORY_FILE) ? fs.readFileSync(BASE_HISTORY_FILE, "utf8") : "";
  const body = current
    .replace(/^<!-- base-sync-state: .+ -->\r?\n?/m, "")
    .replace(/^# Base update history\r?\n?/m, "")
    .trim();
  const marker = `<!-- base-sync-state: ${JSON.stringify({ repository: UPSTREAM, branch: source, sha: targetSha })} -->`;
  const entry = baseHistoryEntry(source, previousSha, targetSha, changeRange);
  const parts = [marker, "# Base update history", entry, body].filter(Boolean);
  fs.mkdirSync(path.dirname(BASE_HISTORY_FILE), { recursive: true });
  fs.writeFileSync(BASE_HISTORY_FILE, `${parts.join("\n\n")}\n`, "utf8");
}

function themeCheck() {
  console.log("\nChạy Shopify Theme Check trước commit...");
  run("shopify", ["theme", "check", "--path", ".", "--fail-level", "error", "--no-color"], { inherit: true });
}

function checkDiffAndTheme() {
  git(["diff", "--check"], { inherit: true });
  git(["diff", "--cached", "--check"], { inherit: true });
  themeCheck();
}

function parseArgs(args) {
  const parsed = { positional: [], push: false, source: "auto", branch: null, all: false };
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--push") parsed.push = true;
    else if (arg === "--all") parsed.all = true;
    else if (arg === "--source") {
      parsed.source = args[++i];
      if (!parsed.source) throw new Error("Thiếu giá trị cho --source (auto, main hoặc dev).");
    } else if (arg.startsWith("--source=")) parsed.source = arg.slice("--source=".length);
    else if (arg === "--branch") {
      parsed.branch = args[++i];
      if (!parsed.branch) throw new Error("Thiếu tên nhánh cho --branch.");
    } else if (arg.startsWith("--")) throw new Error(`Tùy chọn không hỗ trợ: ${arg}`);
    else parsed.positional.push(arg);
  }
  return parsed;
}

async function updateBase(options) {
  requireBranch("main");
  requireClean();
  fetchBaseRefs();
  ensurePersonalMainCurrent();

  const source = chooseUpstreamBranch(options.source);
  const ref = `upstream/${source}`;
  const state = readBaseSyncState();
  if (!state?.sha) {
    throw new Error("Thiếu mốc nguồn trong docs/base-update-history.md; hãy khởi tạo hồ sơ đồng bộ trước.");
  }
  const previousSha = gitText(["rev-parse", `${state.sha}^{commit}`]);
  const targetSha = gitText(["rev-parse", `${ref}^{commit}`]);
  if (isAncestor(targetSha, previousSha)) {
    console.log(`${ref} (${targetSha.slice(0, 8)}) không mới hơn mốc đã đồng bộ ${previousSha.slice(0, 8)}; không cần cập nhật.`);
    return;
  }

  const range = sourceChangeRange(previousSha, ref);
  if (!range.commits.length && !range.stat) {
    console.log(`${ref} không có thay đổi mới từ ${previousSha.slice(0, 8)}; không cần cập nhật.`);
    return;
  }
  const logPath = path.relative(ROOT, BASE_HISTORY_FILE);
  const tree = mergeTree(range.base, "main", ref, `${ref} vào main`, [logPath]);

  const shortSha = targetSha.slice(0, 8);
  console.log(`\nNguồn: ${UPSTREAM}, nhánh ${source}.`);
  console.log(`Khoảng nguồn: ${previousSha}..${targetSha} (${range.commits.length} commit team).`);
  console.log(`Commit gộp sẽ ghi: ${range.commits.length} upstream commits through ${shortSha}.`);
  console.log("\nCác commit nguồn sẽ được gộp:");
  for (const commit of range.commits) console.log(`  ${commit.sha} ${commit.subject}`);
  previewTree("main", tree);

  const originalHistory = fs.readFileSync(BASE_HISTORY_FILE, "utf8");
  const patch = applyTreeDiff("main", tree);
  let committed = false;
  try {
    writeBaseHistory(source, previousSha, targetSha, range);
    git(["add", "--", logPath]);
    checkDiffAndTheme();
    const message = `chore(base): update base with ${range.commits.length} upstream commits through ${shortSha}`;
    git(["commit", "-m", message], { inherit: true });
    committed = true;
    git(["push", "origin", "main"], { inherit: true });
  } catch (error) {
    if (!committed) {
      rollbackTreeDiff(patch);
      fs.writeFileSync(BASE_HISTORY_FILE, originalHistory, "utf8");
      git(["add", "--", logPath], { allowFailure: true });
    }
    throw error;
  } finally {
    cleanupTreeDiff(patch);
  }
  const commitSha = gitText(["rev-parse", "--short", "HEAD"]);
  console.log(`Đã tạo ${commitSha} và push main; cập nhật ${range.commits.length} commit team đến ${targetSha}.`);
  if (gitText(["rev-parse", "origin/main"]) !== gitText(["rev-parse", "main"])) {
    throw new Error(`Đã push nhưng origin/main không trỏ tới ${gitText(["rev-parse", "main"])} như dự kiến.`);
  }
}

function normalizeThemeBranch(value) {
  const branch = value.startsWith("theme/") ? value : `theme/${value}`;
  if (!/^theme\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(branch)) {
    throw new Error("Tên theme chỉ được dùng chữ thường, số và dấu gạch ngang; ví dụ: theme/omniselle.");
  }
  return branch;
}

function remoteThemeBranches() {
  const result = git(["ls-remote", "--heads", "origin", "refs/heads/theme/*"]);
  return result.stdout.trim().split("\n").filter(Boolean).map((line) => line.split("\t")[1].replace("refs/heads/", ""));
}

function fetchRemoteThemeBranches(branches) {
  for (const branch of branches) {
    git(["fetch", "origin", `+refs/heads/${branch}:refs/remotes/origin/${branch}`], { inherit: true });
  }
}

function localThemeBranches() {
  return gitText(["for-each-ref", "--format=%(refname:short)", "refs/heads/theme/"])
    .split("\n").filter(Boolean);
}

function remoteRefExists(branch) {
  const result = git(["show-ref", "--verify", "--quiet", `refs/remotes/origin/${branch}`], { allowFailure: true });
  return result.status === 0;
}

function ensureThemeBranchCurrent(branch) {
  const remote = `origin/${branch}`;
  if (!remoteRefExists(branch)) return;
  if (isAncestor(remote, branch)) {
    if (gitText(["rev-parse", remote]) !== gitText(["rev-parse", branch])) {
      console.log(`${branch} có commit local chưa push lên ${remote}; sẽ giữ nguyên.`);
    }
    return;
  }
  if (isAncestor(branch, remote)) {
    throw new Error(`${remote} đi trước nhánh local ${branch}; hãy review/sync remote trước.`);
  }
  throw new Error(`${branch} và ${remote} phân kỳ; cần review thủ công trước khi đồng bộ base.`);
}

function customizationRecord(branch) {
  const slug = branch.slice("theme/".length);
  return path.join(ROOT, "docs", "theme-customizations", `${slug}.md`);
}

function themeBaseCheckpoint(branch) {
  const record = customizationRecord(branch);
  if (!fs.existsSync(record)) throw new Error(`Thiếu hồ sơ custom ${path.relative(ROOT, record)}.`);
  const contents = fs.readFileSync(record, "utf8");
  const stateMatch = contents.match(/^<!-- theme-base-sync-state: (.+) -->$/m);
  let sha = null;
  if (stateMatch) {
    try {
      sha = JSON.parse(stateMatch[1]).sha;
    } catch {
      throw new Error(`Không đọc được mốc main trong ${path.relative(ROOT, record)}.`);
    }
  }
  if (!sha) sha = contents.match(/^Personal base at creation: `([^`]+)`$/m)?.[1];
  if (!sha) throw new Error(`Không có SHA main gốc trong ${path.relative(ROOT, record)}.`);
  return gitText(["rev-parse", `${sha}^{commit}`]);
}

function recordedCustomizationPaths(record) {
  const paths = new Set();
  const contents = fs.readFileSync(record, "utf8");
  let inCustomizations = false;
  for (const line of contents.split("\n")) {
    if (line.startsWith("## Customizations")) {
      inCustomizations = true;
      continue;
    }
    if (line.startsWith("## ") && inCustomizations) break;
    if (!inCustomizations) continue;
    if (!line.trimStart().startsWith("|")) continue;
    const cells = line.split("|").map((cell) => cell.trim());
    const value = (cells[1] || "").replaceAll("`", "");
    if (!value || value === "File/path" || value.startsWith("---") || value.startsWith("_No customizations")) continue;
    for (const item of value.split(",")) {
      const file = item.trim();
      if (file) paths.add(file);
    }
  }
  return paths;
}

function revisionFile(revision, file) {
  const result = git(["show", `${revision}:${file}`], { allowFailure: true });
  return result.status === 0 ? result.stdout : null;
}

const LIQUID_SCHEMA_PATTERN = /({%-?\s*schema\s*-?%})([\s\S]*?)({%-?\s*endschema\s*-?%})/gi;
const SCHEMA_MERGE_MARKER = "__THEME_BASE_SYNC_SCHEMA_BLOCK__";

function liquidSchema(contents, file) {
  if (contents === null) return null;
  const matches = [...contents.matchAll(LIQUID_SCHEMA_PATTERN)];
  if (!matches.length) return null;
  if (matches.length !== 1) throw new Error(`${file} có ${matches.length} khối schema; không thể hòa trộn an toàn.`);
  const match = matches[0];
  let schema;
  try {
    schema = JSON.parse(match[2]);
  } catch (error) {
    throw new Error(`Schema trong ${file} không phải JSON hợp lệ: ${error.message}`);
  }
  return { openTag: match[1], closeTag: match[3], schema };
}

function schemaMarkerContents(contents, file) {
  const region = liquidSchema(contents, file);
  if (!region) return contents;
  return contents.replace(LIQUID_SCHEMA_PATTERN, SCHEMA_MERGE_MARKER);
}

function renderLiquidSchema(schema, region) {
  return `${region.openTag}\n${JSON.stringify(schema, null, 2)}\n${region.closeTag}`;
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function schemaSettingGroups(schema, file) {
  const groups = new Map();
  const rootOwner = file.startsWith("sections/") ? "section" : "self";
  groups.set(rootOwner, { owner: rootOwner, type: null, settings: Array.isArray(schema.settings) ? schema.settings : [] });
  if (Array.isArray(schema.blocks)) {
    for (const block of schema.blocks) {
      if (!block || typeof block.type !== "string") continue;
      groups.set(`block:${block.type}`, { owner: `block:${block.type}`, type: block.type, settings: Array.isArray(block.settings) ? block.settings : [] });
    }
  }
  return groups;
}

function findSchemaGroup(schema, file, owner, create = false) {
  if (owner === "section" || owner === "self") {
    if (!Array.isArray(schema.settings) && create) schema.settings = [];
    return Array.isArray(schema.settings) ? { owner, type: null, settings: schema.settings } : null;
  }
  const type = owner.slice("block:".length);
  const block = Array.isArray(schema.blocks) && schema.blocks.find((item) => item?.type === type);
  if (!block) return null;
  if (!Array.isArray(block.settings) && create) block.settings = [];
  return Array.isArray(block.settings) ? { owner, type, settings: block.settings } : null;
}

function visitPresetBlocks(blocks, callback) {
  if (!Array.isArray(blocks)) return;
  for (const block of blocks) {
    if (!block || typeof block !== "object") continue;
    callback(block);
    visitPresetBlocks(block.blocks, callback);
  }
}

function addPresetDefault(schema, owner, settingId, defaultValue) {
  let count = 0;
  for (const preset of Array.isArray(schema.presets) ? schema.presets : []) {
    if (!preset || typeof preset !== "object") continue;
    if (owner === "section" || owner === "self") {
      if (!preset.settings || typeof preset.settings !== "object" || Array.isArray(preset.settings)) preset.settings = {};
      if (!Object.hasOwn(preset.settings, settingId)) {
        preset.settings[settingId] = cloneJson(defaultValue);
        count += 1;
      }
      continue;
    }
    visitPresetBlocks(preset.blocks, (block) => {
      if (block.type !== owner.slice("block:".length)) return;
      if (!block.settings || typeof block.settings !== "object" || Array.isArray(block.settings)) block.settings = {};
      if (!Object.hasOwn(block.settings, settingId)) {
        block.settings[settingId] = cloneJson(defaultValue);
        count += 1;
      }
    });
  }
  return count;
}

function removePresetSetting(schema, owner, settingId) {
  for (const preset of Array.isArray(schema.presets) ? schema.presets : []) {
    if (!preset || typeof preset !== "object") continue;
    if (owner === "section" || owner === "self") {
      if (preset.settings && typeof preset.settings === "object") delete preset.settings[settingId];
      continue;
    }
    visitPresetBlocks(preset.blocks, (block) => {
      if (block.type === owner.slice("block:".length) && block.settings && typeof block.settings === "object") {
        delete block.settings[settingId];
      }
    });
  }
}

function orderThemeSettings(originalSettings, mergedSettings, sourceSettings) {
  const sourceIds = sourceSettings.filter((setting) => typeof setting?.id === "string").map((setting) => setting.id);
  const sourceIdSet = new Set(sourceIds);
  const mergedById = new Map(mergedSettings.filter((setting) => typeof setting?.id === "string").map((setting) => [setting.id, setting]));
  const beforeSetting = new Map();
  let pending = [];
  // Keep theme-only controls and editor headings beside the existing control
  // that follows them. New source controls must not capture trailing custom UI.
  for (const setting of originalSettings) {
    if (sourceIdSet.has(setting?.id)) {
      beforeSetting.set(setting.id, pending);
      pending = [];
    } else {
      pending.push(setting);
    }
  }
  return sourceIds.flatMap((id) => [...(beforeSetting.get(id) || []), mergedById.get(id)]).concat(pending);
}

function reconcileThemeSchema(file, themeRegion, sourceRegion, baseRegion = null) {
  const schema = cloneJson(themeRegion.schema);
  const source = sourceRegion.schema;
  const sourceGroups = schemaSettingGroups(source, file);
  const added = [];
  const removed = [];
  const changed = [];
  const presetChanges = [];
  const blockingDifferences = [];

  for (const [owner, sourceGroup] of sourceGroups) {
    let themeGroup = findSchemaGroup(schema, file, owner, owner === "section" || owner === "self");
    if (!themeGroup) continue;
    const originalSettings = [...themeGroup.settings];
    const themeById = new Map(themeGroup.settings.filter((setting) => setting && typeof setting.id === "string").map((setting) => [setting.id, setting]));
    const sourceById = new Map(sourceGroup.settings.filter((setting) => setting && typeof setting.id === "string").map((setting) => [setting.id, setting]));
    for (const sourceSetting of sourceGroup.settings) {
      if (!sourceSetting || typeof sourceSetting.id !== "string") continue;
      const current = themeById.get(sourceSetting.id);
      if (!current) {
        const hasDefault = Object.hasOwn(sourceSetting, "default");
        const defaultUnsupported = SHOPIFY_SETTING_TYPES_WITHOUT_DEFAULT_ATTRIBUTE.has(sourceSetting.type);
        const defaultRemainsEmpty = SHOPIFY_SETTING_TYPES_WITH_IMPLICIT_EMPTY_DEFAULT.has(sourceSetting.type);
        if (!hasDefault && !defaultUnsupported && !defaultRemainsEmpty) {
          throw new Error(`Option mới ${file} (${owner}: ${sourceSetting.id}) chưa khai báo default ở main; dừng để không tự đoán giá trị.`);
        }
        themeGroup.settings.push(cloneJson(sourceSetting));
        const presetCount = hasDefault ? addPresetDefault(schema, owner, sourceSetting.id, sourceSetting.default) : 0;
        const defaultNote = defaultUnsupported
          ? "Shopify không hỗ trợ default cho kiểu setting này; giữ giá trị unset"
          : defaultRemainsEmpty && !hasDefault
            ? `main không khai báo default cho kiểu ${sourceSetting.type}; giữ giá trị unset`
            : null;
        added.push({ file, owner, id: sourceSetting.id, label: sourceSetting.label || sourceSetting.content || sourceSetting.id, hasDefault, defaultNote, defaultValue: sourceSetting.default, presetCount });
      } else if (stableJson(current) !== stableJson(sourceSetting)) {
        const allFields = [...new Set([...Object.keys(current), ...Object.keys(sourceSetting)])];
        const changedSettingFields = allFields.filter((field) => stableJson(current[field]) !== stableJson(sourceSetting[field]));
        const functionalFields = ["type", "options", "min", "max", "step", "unit", "visible_if", "accept", "min_length", "max_length"];
        const changedFields = changedSettingFields.filter((field) => {
          if (!functionalFields.includes(field)) return false;
          // Option labels/group headings are editor copy, not stored values.
          // Translation-only changes must be reported and retained, not block sync.
          if (field === "options" && Array.isArray(current.options) && Array.isArray(sourceSetting.options)) {
            return stableJson(current.options.map((option) => option.value)) !==
              stableJson(sourceSetting.options.map((option) => option.value));
          }
          return true;
        });
        changed.push({ file, owner, id: sourceSetting.id, label: current.label || sourceSetting.label || sourceSetting.id, changedFields: changedSettingFields });
        const fieldValues = changedSettingFields.map((field) => {
          const themeValue = Object.hasOwn(current, field) ? JSON.stringify(current[field]) : "(không có)";
          const sourceValue = Object.hasOwn(sourceSetting, field) ? JSON.stringify(sourceSetting[field]) : "(không có)";
          return `${field}: theme=${themeValue}, main=${sourceValue}`;
        }).join("; ");
        presetChanges.push(`${file}: option ${owner}/${sourceSetting.id} khác main ở ${fieldValues}; giữ định nghĩa theme`);
        if (changedFields.length) {
          blockingDifferences.push(`${file}: option ${owner}/${sourceSetting.id} đổi trường ảnh hưởng hành vi ${changedFields.join(", ")}; cần review trước khi cập nhật logic`);
        }
      }
    }
    for (const currentSetting of themeGroup.settings) {
      if (!currentSetting || typeof currentSetting.id !== "string") continue;
      if (!sourceById.has(currentSetting.id) && (!baseRegion ||
          findSchemaGroup(baseRegion.schema, file, owner)?.settings.some((setting) => setting.id === currentSetting.id))) {
        removed.push({ file, owner, id: currentSetting.id, label: currentSetting.label || currentSetting.content || currentSetting.id });
      }
    }
    const orderedSettings = orderThemeSettings(originalSettings, themeGroup.settings, sourceGroup.settings);
    if (stableJson(themeGroup.settings) !== stableJson(orderedSettings)) {
      const ids = orderedSettings.filter((setting) => typeof setting?.id === "string").map((setting) => setting.id);
      presetChanges.push(`${file}: thứ tự option ${owner} theo main [${ids.join(", ")}]; giữ định nghĩa, option riêng và giá trị preset của theme`);
      themeGroup.settings.splice(0, themeGroup.settings.length, ...orderedSettings);
    }
  }

  const themeStructure = cloneJson(themeRegion.schema);
  const sourceStructure = cloneJson(source);
  for (const candidate of [themeStructure, sourceStructure]) {
    delete candidate.settings;
    delete candidate.presets;
    if (Array.isArray(candidate.blocks)) candidate.blocks = candidate.blocks.map((block) => {
      if (!block || typeof block !== "object") return block;
      const copy = cloneJson(block);
      delete copy.settings;
      return copy;
    });
  }
  if (stableJson(themeStructure) !== stableJson(sourceStructure)) {
    const keys = [...new Set([...Object.keys(themeStructure), ...Object.keys(sourceStructure)])]
      .filter((key) => stableJson(themeStructure[key]) !== stableJson(sourceStructure[key]));
    presetChanges.push(`${file}: schema khác main ở trường ${keys.join(", ")}; giữ nguyên schema của theme`);
  }
  const themeBlockTypes = (themeRegion.schema.blocks || []).map((block) => block?.type).filter(Boolean).sort();
  const sourceBlockTypes = (source.blocks || []).map((block) => block?.type).filter(Boolean).sort();
  if (stableJson(themeBlockTypes) !== stableJson(sourceBlockTypes)) {
    blockingDifferences.push(`${file}: danh sách block được phép khác main (theme: ${themeBlockTypes.join(", ") || "(không có)"}; main: ${sourceBlockTypes.join(", ") || "(không có)"})`);
  }
  if (stableJson(themeRegion.schema.presets || []) !== stableJson(source.presets || [])) {
    const names = (presets) => presets.map((preset) => preset?.name || preset?.category || "(không tên)").join(", ") || "(không có)";
    presetChanges.push(`${file}: preset theme [${names(themeRegion.schema.presets || [])}] khác main [${names(source.presets || [])}]; giữ preset theme và chỉ thêm default cho option mới`);
  }
  return { schema, added, removed, changed, presetChanges, blockingDifferences };
}

function isSectionBlockLiquid(file) {
  return /^(sections|blocks)\/.+\.liquid$/i.test(file);
}

function isThemeConfigPath(file) {
  return file === "config/settings_schema.json" || file === "config/settings_data.json" ||
    /^templates\/.+\.json$/i.test(file) || /^sections\/.+-group\.json$/i.test(file);
}

function revisionFiles(revision) {
  return gitText(["ls-tree", "-r", "--name-only", revision]).split("\n").filter(Boolean);
}

function normalizedSchemaTree(revision, files) {
  const sourceTree = gitText(["rev-parse", `${revision}^{tree}`]);
  const overrides = {};
  for (const file of files) {
    if (!isSectionBlockLiquid(file)) continue;
    const contents = revisionFile(revision, file);
    if (contents !== null) overrides[file] = schemaMarkerContents(contents, file);
  }
  return Object.keys(overrides).length ? writeTreeWithOverrides(sourceTree, overrides) : sourceTree;
}

function preservedThemeConfigPaths(revision) {
  return revisionFiles(revision).filter(isThemeConfigPath);
}

// Shopify JSON files can carry a generated header comment.
function parseThemeJson(contents, file) {
  try {
    return JSON.parse(contents.replace(/^\s*\/\*[\s\S]*?\*\//, ""));
  } catch {
    throw new Error(`Không đọc được JSON ${file}; dừng để không bỏ sót section/block đang dùng.`);
  }
}

function collectUsedThemeFiles(files, readFile) {
  const used = new Set();
  const queue = [];
  const add = (file) => {
    if (!used.has(file)) { used.add(file); queue.push(file); }
  };
  const visitBlocks = (blocks) => {
    for (const block of Object.values(blocks || {})) {
      if (!block || typeof block !== "object") continue;
      if (block.type && !block.type.startsWith("@")) add(`blocks/${block.type}.liquid`);
      visitBlocks(block.blocks);
    }
  };
  const visitSections = (sections) => {
    for (const section of Object.values(sections || {})) {
      if (!section || typeof section !== "object") continue;
      if (section.type) add(`sections/${section.type}.liquid`);
      visitBlocks(section.blocks);
    }
  };
  for (const file of files) {
    if (/^templates\/.+\.json$/i.test(file) || /^sections\/.+-group\.json$/i.test(file) || file === "config/settings_data.json") {
      const json = parseThemeJson(readFile(file), file);
      visitSections(json.sections);
      visitSections(json.current?.sections);
      for (const preset of Object.values(json.presets || {})) visitSections(preset.sections);
    }
    if (/^(templates|layout)\/.+\.liquid$/i.test(file)) queue.push(file);
  }
  const visited = new Set();
  while (queue.length) {
    const file = queue.shift();
    if (visited.has(file)) continue;
    visited.add(file);
    const contents = readFile(file);
    if (contents === null) continue;
    for (const match of contents.matchAll(/{%-?\s*section\s+["']([^"']+)["']/gi)) add(`sections/${match[1]}.liquid`);
    for (const match of contents.matchAll(/{%-?\s*(?:render|include)\s+["']([^"']+)["']/gi)) queue.push(`snippets/${match[1]}.liquid`);
    for (const match of contents.matchAll(/{%-?\s*content_for\s+["']block["'][^%]*?\btype:\s*["']([^"']+)["']/gi)) add(`blocks/${match[1]}.liquid`);
    const region = liquidSchema(contents, file);
    if (region) {
      // Keep defaults for blocks offered by a used section, including its presets.
      visitBlocks(region.schema.blocks);
      for (const preset of region.schema.presets || []) visitBlocks(preset.blocks);
    }
  }
  return used;
}

function updateCompositionSettings(composition, additions, removals, rootFile = null, frozenPaths = new Set()) {
  if (rootFile && frozenPaths.has(rootFile)) return;
  const apply = (instance, file, owner) => {
    for (const item of additions) {
      if (item.file !== file || item.owner !== owner || !item.hasDefault) continue;
      if (!instance.settings) instance.settings = {};
      if (!Object.hasOwn(instance.settings, item.id)) instance.settings[item.id] = cloneJson(item.defaultValue);
    }
    for (const item of removals) {
      if (item.file === file && item.owner === owner && instance.settings) delete instance.settings[item.id];
    }
  };
  const blocks = (instances, sectionFile) => {
    for (const block of Object.values(instances || {})) {
      if (!block || typeof block !== "object") continue;
      if (frozenPaths.has(`blocks/${block.type}.liquid`)) continue;
      apply(block, sectionFile, `block:${block.type}`);
      apply(block, `blocks/${block.type}.liquid`, "self");
      blocks(block.blocks, sectionFile);
    }
  };
  const sections = (instances) => {
    for (const section of Object.values(instances || {})) {
      if (!section || typeof section !== "object") continue;
      const file = `sections/${section.type}.liquid`;
      if (frozenPaths.has(file)) continue;
      apply(section, file, "section");
      blocks(section.blocks, file);
    }
  };
  if (rootFile) {
    for (const preset of composition.presets || []) {
      apply(preset, rootFile, rootFile.startsWith("sections/") ? "section" : "self");
      blocks(preset.blocks, rootFile);
    }
  } else {
    sections(composition.sections);
    sections(composition.current?.sections);
    for (const preset of Object.values(composition.presets || {})) sections(preset.sections);
  }
}

function protectedThemeSchemaPaths(revision, base, compositionRevision = revision, sourceRevision = revision) {
  const used = collectUsedThemeFiles(revisionFiles(compositionRevision), (file) => {
    const contents = revisionFile(compositionRevision, file);
    if (!contents?.includes(SCHEMA_MERGE_MARKER)) return contents;
    const region = liquidSchema(revisionFile(revision, file), file) || liquidSchema(revisionFile(sourceRevision, file), file);
    return contents.replace(SCHEMA_MERGE_MARKER, region ? renderLiquidSchema(region.schema, region) : "");
  });
  for (const file of implementationPathsChanged(base, revision)) {
    if (isSectionBlockLiquid(file)) used.add(file);
  }
  return used;
}

function buildThemeMergeTree(base, branch, mainSha, label, historyPath) {
  const frozenPaths = frozenThemeCustomizationPaths(base, branch);
  const baseFiles = revisionFiles(base).filter(isSectionBlockLiquid);
  const themeFiles = revisionFiles(branch).filter(isSectionBlockLiquid);
  const sourceFiles = revisionFiles(mainSha).filter(isSectionBlockLiquid);
  const protectedPaths = protectedThemeSchemaPaths(branch, base);
  const deletedFromMain = baseFiles.filter((file) => !frozenPaths.has(file) && protectedPaths.has(file) && themeFiles.includes(file) && !sourceFiles.includes(file));
  if (deletedFromMain.length) {
    throw new Error(`main đã xóa section/block đang có trong theme; cần review thủ công trước khi cập nhật:\n${deletedFromMain.join("\n")}`);
  }

  const schemaFiles = [...new Set([...baseFiles, ...themeFiles, ...sourceFiles])];
  const preservePaths = [...new Set([
    historyPath,
    ...preservedThemeConfigPaths(base),
    ...preservedThemeConfigPaths(branch),
    ...frozenPaths,
  ])];
  const baseTree = normalizedSchemaTree(base, schemaFiles);
  const themeTree = normalizedSchemaTree(branch, schemaFiles);
  const sourceWithPreservedConfig = treePreservingPaths(mainSha, branch, preservePaths);
  const sourceTree = normalizedSchemaTree(sourceWithPreservedConfig, schemaFiles);
  // All three sides must use the same schema marker during the implementation merge.
  const baseAnchor = gitText(["commit-tree", baseTree, "-p", base, "-m", `Temporary merge anchor for ${label} (base)`]);
  return mergeTreeObjects(baseAnchor, themeTree, sourceTree, label);
}

function composeThemeResultTree(tree, branch, mainSha, base, schemaRemovals = []) {
  const frozenPaths = frozenThemeCustomizationPaths(base, branch);
  const paths = revisionFiles(tree).filter(isSectionBlockLiquid);
  const protectedPaths = protectedThemeSchemaPaths(branch, base, tree, mainSha);
  const overrides = {};
  const schemaPlans = new Map();
  const addedSettings = [];
  const removedSettings = [];
  const heldSchemaDifferences = [];
  const heldSchemaFiles = [];
  const blockingSchemaDifferences = [];

  for (const file of paths) {
    const mergedContents = revisionFile(tree, file);
    if (!mergedContents?.includes(SCHEMA_MERGE_MARKER)) continue;
    if (frozenPaths.has(file)) {
      overrides[file] = revisionFile(branch, file);
      heldSchemaDifferences.push(`${file}: custom riêng của theme; giữ nguyên implementation, schema và preset`);
      heldSchemaFiles.push(file);
      continue;
    }
    const baseRegion = liquidSchema(revisionFile(base, file), file);
    const themeContents = revisionFile(branch, file);
    const sourceContents = revisionFile(mainSha, file);
    const themeRegion = liquidSchema(themeContents, file);
    const sourceRegion = liquidSchema(sourceContents, file);
    const sourceSchemaChanged = !baseRegion || !sourceRegion || stableJson(baseRegion.schema) !== stableJson(sourceRegion.schema);
    let schema;
    let region;

    if (!protectedPaths.has(file) && sourceContents !== null) {
      if (!sourceRegion) {
        overrides[file] = mergedContents.replace(SCHEMA_MERGE_MARKER, "");
        continue;
      }
      schema = sourceRegion.schema;
      region = sourceRegion;
      schemaPlans.set(file, { schema, region, removed: [] });
    } else if (themeRegion && sourceRegion && sourceSchemaChanged) {
      region = themeRegion;
      const reconciled = reconcileThemeSchema(file, themeRegion, sourceRegion, baseRegion);
      schema = reconciled.schema;
      addedSettings.push(...reconciled.added);
      removedSettings.push(...reconciled.removed);
      heldSchemaDifferences.push(...reconciled.presetChanges);
      if (reconciled.presetChanges.length) heldSchemaFiles.push(file);
      blockingSchemaDifferences.push(...reconciled.blockingDifferences);
      schemaPlans.set(file, { schema, region, removed: reconciled.removed });
    } else if (themeRegion && sourceRegion) {
      schema = themeRegion.schema;
      region = themeRegion;
      schemaPlans.set(file, { schema, region, removed: [] });
    } else if (themeRegion) {
      schema = themeRegion.schema;
      region = themeRegion;
      heldSchemaDifferences.push(`${file}: main không còn schema; giữ nguyên schema của theme`);
      heldSchemaFiles.push(file);
      schemaPlans.set(file, { schema, region, removed: [] });
    } else if (sourceRegion) {
      schema = sourceRegion.schema;
      region = sourceRegion;
      schemaPlans.set(file, { schema, region, removed: [] });
    } else {
      overrides[file] = mergedContents.replace(SCHEMA_MERGE_MARKER, "");
      continue;
    }
    overrides[file] = mergedContents.replace(SCHEMA_MERGE_MARKER, renderLiquidSchema(schema, region));
  }

  for (const removal of schemaRemovals) {
    if (frozenPaths.has(removal.file)) continue;
    const plan = schemaPlans.get(removal.file);
    if (!plan) continue;
    const group = findSchemaGroup(plan.schema, removal.file, removal.owner);
    if (group) {
      for (let index = group.settings.length - 1; index >= 0; index -= 1) {
        if (group.settings[index]?.id === removal.id) group.settings.splice(index, 1);
      }
    }
    removePresetSetting(plan.schema, removal.owner, removal.id);
    plan.removed.push(removal);
    const mergedContents = revisionFile(tree, removal.file);
    overrides[removal.file] = mergedContents.replace(SCHEMA_MERGE_MARKER, renderLiquidSchema(plan.schema, plan.region));
  }

  // Add new defaults to saved instances and cross-file theme-block presets too.
  for (const [file, plan] of schemaPlans) {
    updateCompositionSettings(plan.schema, addedSettings, schemaRemovals, file, frozenPaths);
    const contents = revisionFile(tree, file);
    overrides[file] = contents.replace(SCHEMA_MERGE_MARKER, renderLiquidSchema(plan.schema, plan.region));
  }
  for (const file of revisionFiles(tree).filter((file) => isThemeConfigPath(file) && file !== "config/settings_schema.json")) {
    const contents = revisionFile(tree, file);
    const composition = parseThemeJson(contents, file);
    const before = stableJson(composition);
    updateCompositionSettings(composition, addedSettings, schemaRemovals, null, frozenPaths);
    if (stableJson(composition) !== before) {
      const header = contents.match(/^\s*\/\*[\s\S]*?\*\/\s*/)?.[0] || "";
      overrides[file] = `${header}${JSON.stringify(composition, null, 2)}\n`;
    }
  }
  const resultTree = Object.keys(overrides).length ? writeTreeWithOverrides(tree, overrides) : tree;
  return { tree: resultTree, addedSettings, removedSettings, heldSchemaDifferences, heldSchemaFiles, blockingSchemaDifferences };
}

async function confirmRemovedSettings(candidates) {
  if (!candidates.length) return [];
  console.log("\nCác option có trong theme nhưng main đã bỏ. Mặc định giữ lại; xác nhận riêng option nào muốn xóa:");
  if (!stdin.isTTY || !stdout.isTTY) {
    console.log("Không có terminal tương tác; giữ lại toàn bộ option đã liệt kê.");
    return [];
  }
  const rl = createInterface({ input: stdin, output: stdout });
  const accepted = [];
  try {
    for (const item of candidates) {
      const answer = await rl.question(`Xóa ${item.file} — ${item.owner} — ${item.id} (${item.label}) như main? [y/N] `);
      if (/^(y|yes)$/i.test(answer.trim())) accepted.push(item);
    }
  } finally {
    rl.close();
  }
  return accepted;
}

function worktreeFile(file) {
  const absolute = path.join(ROOT, file);
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) return null;
  return fs.readFileSync(absolute, "utf8");
}

function worktreeFilesUnder(directory) {
  const absolute = path.join(ROOT, directory);
  if (!fs.existsSync(absolute)) return [];
  const files = [];
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) visit(fullPath);
      else if (entry.isFile()) files.push(path.relative(ROOT, fullPath).split(path.sep).join("/"));
    }
  };
  visit(absolute);
  return files;
}

function sectionImplementationDependencies(revision, includeWorktree = false, roots = null) {
  const sourceFiles = new Set(roots || gitText([
    "ls-tree", "-r", "--name-only", revision, "--", "sections", "blocks",
  ]).split("\n").filter((file) => /^(sections|blocks)\/.+\.liquid$/i.test(file)));
  if (includeWorktree) {
    for (const directory of ["sections", "blocks"]) {
      for (const file of worktreeFilesUnder(directory)) {
        if (/\.liquid$/i.test(file)) sourceFiles.add(file);
      }
    }
  }

  const dependencies = new Set();
  const visited = new Set();
  const queue = [...sourceFiles];
  while (queue.length) {
    const source = queue.shift();
    if (visited.has(source)) continue;
    visited.add(source);
    const contents = includeWorktree ? worktreeFile(source) : revisionFile(revision, source);
    if (contents === null) continue;

    for (const match of contents.matchAll(/[\"']([^\"']+\.(?:css|js|mjs))[\"']\s*\|\s*asset_url/gi)) {
      dependencies.add(`assets/${match[1]}`);
    }
    for (const match of contents.matchAll(/{%-?\s*(?:render|include)\s+[\"']([^\"']+)[\"']/gi)) {
      const snippet = `snippets/${match[1]}.liquid`;
      dependencies.add(snippet);
      if (!visited.has(snippet)) queue.push(snippet);
    }
  }
  return dependencies;
}

function frozenThemeCustomizationPaths(base, branch) {
  const changed = new Set(implementationPathsChanged(base, branch));
  const owners = revisionFiles(branch).filter(isSectionBlockLiquid);
  const frozen = new Set(changed);
  for (const file of owners) {
    const dependencies = sectionImplementationDependencies(branch, false, [file]);
    if (!changed.has(file) && ![...dependencies].some((dependency) => changed.has(dependency))) continue;
    frozen.add(file);
    for (const dependency of dependencies) frozen.add(dependency);
  }
  // A frozen composition also keeps its explicitly offered/static child blocks.
  const childFiles = collectUsedThemeFiles(["templates/__custom-freeze__.liquid"], (file) => {
    if (file === "templates/__custom-freeze__.liquid") {
      return [...frozen].filter(isSectionBlockLiquid).map((owner) => owner.startsWith("sections/")
        ? `{% section '${path.basename(owner, ".liquid")}' %}`
        : `{% content_for 'block', type: '${path.basename(owner, ".liquid")}', id: 'freeze' %}`).join("\n");
    }
    return revisionFile(branch, file);
  });
  for (const file of childFiles) frozen.add(file);
  for (const dependency of sectionImplementationDependencies(branch, false, [...childFiles])) frozen.add(dependency);
  return frozen;
}

function sectionImplementation(contents) {
  if (contents === null) return "";
  return contents
    .replace(/{%-?\s*schema\s*-?%}[\s\S]*?{%-?\s*endschema\s*-?%}/gi, "\n")
    .trim();
}

function implementationPathsChanged(base, target, includeWorktree = false) {
  const changed = new Set(gitText(["diff", "--name-only", base, target]).split("\n").filter(Boolean));
  if (includeWorktree) {
    for (const args of [
      ["diff", "--name-only"],
      ["diff", "--cached", "--name-only"],
      ["ls-files", "--others", "--exclude-standard"],
    ]) {
      for (const file of gitText(args).split("\n").filter(Boolean)) changed.add(file);
    }
  }

  const dependencies = new Set([
    ...sectionImplementationDependencies(base),
    ...sectionImplementationDependencies(target),
  ]);
  if (includeWorktree) {
    for (const dependency of sectionImplementationDependencies(target, true)) dependencies.add(dependency);
  }

  const implementationChanges = [];
  for (const file of [...changed].sort()) {
    const isSectionOrBlock = /^(sections|blocks)\/.+\.liquid$/i.test(file);
    const isReferencedSnippet = /^snippets\/.+\.liquid$/i.test(file) && dependencies.has(file);
    const isReferencedAsset = /^assets\/.+\.(?:css|js|mjs)$/i.test(file) && dependencies.has(file);
    if (!isSectionOrBlock && !isReferencedSnippet && !isReferencedAsset) continue;

    const before = revisionFile(base, file);
    const after = includeWorktree ? worktreeFile(file) : revisionFile(target, file);
    const beforeImplementation = isSectionOrBlock ? sectionImplementation(before) : (before ?? "");
    const afterImplementation = isSectionOrBlock ? sectionImplementation(after) : (after ?? "");
    if (beforeImplementation !== afterImplementation) implementationChanges.push(file);
  }
  return implementationChanges;
}

function branchCustomizationPaths(branch, includeWorktree = false) {
  const base = themeBaseCheckpoint(branch);
  const files = new Set(implementationPathsChanged(base, branch, includeWorktree));
  files.delete(path.relative(ROOT, customizationRecord(branch)));
  files.delete(path.relative(ROOT, BASE_HISTORY_FILE));
  return [...files].sort();
}

function verifyCustomizationRecord(branch, includeWorktree = false) {
  const record = customizationRecord(branch);
  if (!fs.existsSync(record)) {
    throw new Error(`Thiếu hồ sơ custom ${path.relative(ROOT, record)}.`);
  }
  const recorded = recordedCustomizationPaths(record);
  const customizations = branchCustomizationPaths(branch, includeWorktree);
  const missing = customizations.filter((file) => !recorded.has(file));
  if (missing.length) {
    console.error(`Các file custom chưa được ghi trong ${path.relative(ROOT, record)}:`);
    console.error(missing.join("\n"));
    throw new Error("Ghi các thay đổi Liquid/CSS/JS của section hoặc block vào hồ sơ trước khi commit/push hoặc đồng bộ base.");
  }
  console.log(`Hồ sơ ${path.relative(ROOT, record)} đã bao phủ ${customizations.length} file custom.`);
}

function overlappingChanges(branch, base) {
  const themePaths = new Set(implementationPathsChanged(base, branch));
  const basePaths = implementationPathsChanged(base, "main");
  return basePaths.filter((file) => themePaths.has(file));
}

function writeThemeBaseHistory(branch, previousSha, targetSha, changeRange, changeSummary) {
  const record = customizationRecord(branch);
  let contents = fs.readFileSync(record, "utf8");
  contents = contents.replace(/^<!-- theme-base-sync-state: .+ -->\r?\n?/m, "");
  const marker = `<!-- theme-base-sync-state: ${JSON.stringify({ sha: targetSha })} -->`;
  const date = new Date().toISOString().slice(0, 10);
  const commits = changeRange.commits.length
    ? changeRange.commits.map(({ sha, subject }) => `  - \`${sha}\` — ${subject}`).join("\n")
    : "  - No new main commits in this range.";
  const entry = `### ${date} — Update from personal main\n\n` +
    `- Previous main commit: \`${previousSha}\`\n` +
    `- Updated through main commit: \`${targetSha}\`\n` +
    `- Main commits included: ${changeRange.commits.length}\n` +
    `- Included main commits:\n${commits}\n` +
    `- Change summary:\n\n\`\`\`text\n${changeSummary || "No file changes."}\n\`\`\`\n`;
  const section = "## Base sync history";
  if (contents.includes(section)) {
    contents = contents.replace(section, `${section}\n\n${entry}`);
  } else {
    contents = `${contents.trimEnd()}\n\n${section}\n\n${entry}`;
  }
  fs.writeFileSync(record, `${marker}\n${contents}`, "utf8");
}

function writeFrozenThemeCustomizationHistory(branch, mainSha, frozenPaths) {
  if (!frozenPaths.size) return;
  const record = customizationRecord(branch);
  const recorded = recordedCustomizationPaths(record);
  const missing = implementationPathsChanged(mainSha, branch, true)
    .filter((file) => frozenPaths.has(file) && !recorded.has(file));
  let contents = fs.readFileSync(record, "utf8");
  if (missing.length) {
    const start = contents.indexOf("## Customizations");
    if (start < 0) throw new Error("Thiếu bảng Customizations để ghi dependency giữ nguyên của custom.");
    let end = contents.indexOf("\n## ", start + 3);
    if (end < 0) end = contents.length;
    const rows = [...contents.slice(start, end).matchAll(/^\|.*\|[ \t]*$/gm)];
    if (!rows.length) throw new Error("Thiếu bảng Customizations để ghi dependency giữ nguyên của custom.");
    const last = rows[rows.length - 1];
    const insert = start + last.index + last[0].length;
    const additions = missing.map((file) => `| \`${file}\` | Personal main \`${mainSha.slice(0, 8)}\`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |`).join("\n");
    contents = contents.slice(0, insert) + "\n" + additions + contents.slice(insert);
  }
  contents = contents.trimEnd() + `\n\n### Retained custom paths through main ${mainSha.slice(0, 8)}\n\n` +
    [...frozenPaths].sort().map((file) => `- \`${file}\``).join("\n") + "\n";
  fs.writeFileSync(record, contents, "utf8");
}

async function updateOneTheme(branch) {
  if (!gitText(["branch", "--list", "--format=%(refname:short)", branch])) {
    if (!remoteRefExists(branch)) throw new Error(`Không tìm thấy nhánh local hoặc origin/${branch}.`);
    git(["switch", "--track", "-c", branch, `origin/${branch}`], { inherit: true });
  } else {
    git(["switch", branch], { inherit: true });
  }
  requireClean();
  ensureThemeBranchCurrent(branch);

  verifyCustomizationRecord(branch);
  const base = themeBaseCheckpoint(branch);
  const mainSha = gitText(["rev-parse", "main"]);
  if (git(["diff", "--quiet", base, "main"], { allowFailure: true }).status === 0) {
    console.log(`${branch} đã chứa nội dung main (${mainSha.slice(0, 8)}); không cần cập nhật.`);
    return false;
  }

  const range = sourceChangeRange(base, mainSha);
  const frozenPaths = frozenThemeCustomizationPaths(base, branch);
  console.log("\nCustom riêng của theme được giữ nguyên, không cập nhật từ main:");
  for (const file of [...frozenPaths].sort()) console.log(`  ${file}`);
  const overlaps = overlappingChanges(branch, base).filter((file) => !frozenPaths.has(file));
  if (overlaps.length) {
    console.error(`\nDừng cập nhật ${branch}: các file implementation cùng được sửa ở theme và main, cần bạn review từng file trước:`);
    console.error(overlaps.join("\n"));
    console.error("Commit main trong lần cập nhật này:");
    for (const commit of range.commits) console.error(`  ${commit.sha} ${commit.subject}`);
    throw new Error("Có thay đổi section/block/snippet/CSS/JS chồng lấn; chưa áp dụng, commit hoặc push.");
  }

  const historyPath = path.relative(ROOT, BASE_HISTORY_FILE);
  const mergedTree = buildThemeMergeTree(base, branch, mainSha, `main vào ${branch}`, historyPath);
  let plan = composeThemeResultTree(mergedTree, branch, mainSha, base);
  let tree = plan.tree;

  console.log(`\nNguồn: main (${mainSha}). ${range.commits.length} commit main sẽ được gộp:`);
  for (const commit of range.commits) console.log(`  ${commit.sha} ${commit.subject}`);
  if (plan.addedSettings.length) {
    console.log("\nOption mới từ main sẽ được thêm; default được chuyển vào preset khi Shopify hỗ trợ:");
    for (const item of plan.addedSettings) {
      const defaultSummary = item.hasDefault
        ? `default=${JSON.stringify(item.defaultValue)}; preset được bổ sung: ${item.presetCount}`
        : `${item.defaultNote}; không thêm giá trị vào preset`;
      console.log(`  ${item.file} — ${item.owner} — ${item.id} (${item.label}); ${defaultSummary}`);
    }
  }
  if (plan.removedSettings.length) {
    console.log("\nOption main đã bỏ sẽ được giữ trong bản cập nhật cho tới khi bạn xác nhận xóa từng option.");
    for (const item of plan.removedSettings) {
      console.log(`  ${item.file} — ${item.owner} — ${item.id} (${item.label})`);
    }
  }
  if (plan.heldSchemaDifferences.length) {
    console.log("\nKhác biệt schema/preset giữ nguyên theo theme hiện tại:");
    for (const difference of [...new Set(plan.heldSchemaDifferences)]) console.log(`  ${difference}`);
  }
  const sourceConfigChanges = gitText(["diff", "--name-only", base, mainSha]).split("\n").filter((file) => file && isThemeConfigPath(file));
  const keptConfigPaths = new Set([...preservedThemeConfigPaths(base), ...preservedThemeConfigPaths(branch)]);
  const heldConfigChanges = sourceConfigChanges.filter((file) => keptConfigPaths.has(file));
  const addedConfigFiles = sourceConfigChanges.filter((file) => !keptConfigPaths.has(file));
  if (heldConfigChanges.length) {
    console.log("\nMain có thay đổi template/config dưới đây; giữ nguyên bản hiện có của theme. Diff nguồn đầy đủ:");
    console.log(heldConfigChanges.join("\n"));
    git(["--no-pager", "diff", "--no-ext-diff", "--no-color", base, mainSha, "--", ...heldConfigChanges], { inherit: true });
  }
  if (addedConfigFiles.length) {
    console.log("\nFile template/config mới chưa có ở mốc base/theme sẽ được thêm từ main:");
    console.log(addedConfigFiles.join("\n"));
  }
  const heldSchemaFiles = [...new Set(plan.heldSchemaFiles)];
  if (heldSchemaFiles.length) {
    console.log("\nDiff đầy đủ từ main cho section/block có schema hoặc preset được giữ theo theme:");
    console.log(heldSchemaFiles.join("\n"));
    git(["--no-pager", "diff", "--no-ext-diff", "--no-color", base, mainSha, "--", ...heldSchemaFiles], { inherit: true });
  }

  previewTree(branch, tree);
  if (plan.blockingSchemaDifferences.length) {
    console.error("\nDừng cập nhật vì cấu hình section/block có thay đổi ảnh hưởng cách logic mới hoạt động:");
    for (const difference of [...new Set(plan.blockingSchemaDifferences)]) console.error(`  ${difference}`);
    throw new Error("Chưa áp dụng, commit hoặc push; cần review các khác biệt schema được liệt kê.");
  }
  const confirmedRemovals = await confirmRemovedSettings(plan.removedSettings);
  if (confirmedRemovals.length) {
    plan = composeThemeResultTree(mergedTree, branch, mainSha, base, confirmedRemovals);
    tree = plan.tree;
    console.log("\nDiff sau khi áp dụng các xác nhận xóa option:");
    previewTree(branch, tree);
  }
  if (plan.removedSettings.length && !confirmedRemovals.length) {
    console.log("\nĐã giữ lại toàn bộ option bị main loại bỏ.");
  } else if (confirmedRemovals.length) {
    const confirmedKeys = new Set(confirmedRemovals.map((item) => `${item.file}\0${item.owner}\0${item.id}`));
    const retainedRemovals = plan.removedSettings.filter((item) => !confirmedKeys.has(`${item.file}\0${item.owner}\0${item.id}`));
    console.log("\nĐã xác nhận xóa:");
    for (const item of confirmedRemovals) console.log(`  ${item.file} — ${item.owner} — ${item.id} (${item.label})`);
    if (retainedRemovals.length) {
      console.log("Giữ lại vì không có xác nhận xóa:");
      for (const item of retainedRemovals) console.log(`  ${item.file} — ${item.owner} — ${item.id} (${item.label})`);
    }
  }

  const changeSummary = gitText(["diff", "--stat", branch, tree]) || "No file changes.";
  const originalRecord = fs.readFileSync(customizationRecord(branch), "utf8");
  const patch = applyTreeDiff(branch, tree);
  let committed = false;
  try {
    writeThemeBaseHistory(branch, base, mainSha, range, changeSummary);
    writeFrozenThemeCustomizationHistory(branch, mainSha, frozenPaths);
    git(["add", "--", path.relative(ROOT, customizationRecord(branch))]);
    verifyCustomizationRecord(branch, true);
    checkDiffAndTheme();
    const message = `chore(theme): update base with ${range.commits.length} main commits through ${mainSha.slice(0, 8)}`;
    git(["commit", "-m", message], { inherit: true });
    committed = true;
    git(["push", "--set-upstream", "origin", branch], { inherit: true });
    console.log(`Đã commit và push ${branch} từ main đến ${mainSha.slice(0, 8)}.`);
  } catch (error) {
    if (!committed) {
      rollbackTreeDiff(patch);
      fs.writeFileSync(customizationRecord(branch), originalRecord, "utf8");
      git(["add", "--", path.relative(ROOT, customizationRecord(branch))], { allowFailure: true });
    }
    throw error;
  } finally {
    cleanupTreeDiff(patch);
  }
  return true;
}

async function updateThemes(options) {
  requireBranch("main");
  requireClean();
  fetchOriginMain();
  ensurePersonalMainCurrent();

  const remoteBranches = remoteThemeBranches();
  fetchRemoteThemeBranches(remoteBranches);
  let branches;
  if (options.all) {
    branches = [...new Set([...localThemeBranches(), ...remoteBranches])].sort();
    if (!branches.length) throw new Error("Không tìm thấy nhánh theme/* local hoặc trên origin.");
  } else if (options.branch) {
    branches = [normalizeThemeBranch(options.branch)];
  } else {
    throw new Error("Dùng --all hoặc --branch <theme/slug>.");
  }

  const completed = [];
  let failed = null;
  try {
    for (const branch of branches) {
      console.log(`\n=== Đồng bộ ${branch} từ main ===`);
      try {
        if (await updateOneTheme(branch)) completed.push(branch);
      } catch (error) {
        failed = error;
        break;
      }
    }
  } finally {
    if (currentBranch() !== "main") git(["switch", "main"], { inherit: true });
  }

  if (completed.length) console.log(`\nĐã cập nhật: ${completed.join(", ")}`);
  if (failed) {
    if (completed.length) console.error("Các nhánh trước đó đã được commit; các nhánh còn lại chưa xử lý.");
    throw failed;
  }
  if (!completed.length) console.log("Không có nhánh nào cần cập nhật.");
}

function themeRecordContents(slug, baseSha) {
  return `<!-- theme-base-sync-state: ${JSON.stringify({ sha: baseSha })} -->\n` +
    `# Customization record: ${slug}\n\n` +
    `Theme branch: \`theme/${slug}\`\n` +
    `Personal base at creation: \`${baseSha}\`\n` +
    `Theme update source: this repository's \`main\` branch\n` +
    `Team base source for personal main: ${UPSTREAM} (only \`main\` or \`dev\`)\n\n` +
    `Record only theme-specific section/block implementation changes here: Liquid/HTML outside {% schema %}, plus CSS/JS assets and snippets rendered or loaded by those sections/blocks. Theme presets, schema-only changes, template JSON, and saved settings values are not custom code. During base updates, review overlapping implementation paths and describe the expected behavior before resolving. See [the customization policy](../theme-customization-policy.md).\n\n` +
    `## Customizations\n\n` +
    `| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |\n` +
    `| --- | --- | --- | --- | --- |\n` +
    `| _No customizations recorded yet_ | | | | |\n\n` +
    `## Base update decisions\n\n` +
    `| Base commit | Files reviewed | Decision and reason | Approved by/date |\n` +
    `| --- | --- | --- | --- |\n`;
}

async function newTheme(slug, options) {
  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Dùng slug chữ thường, số và dấu gạch ngang; ví dụ: new-theme omniselle.");
  }
  requireBranch("main");
  requireClean();
  fetchOriginMain();
  ensurePersonalMainCurrent();

  const branch = `theme/${slug}`;
  if (gitText(["branch", "--list", "--format=%(refname:short)", branch])) {
    throw new Error(`Nhánh ${branch} đã tồn tại local.`);
  }
  if (remoteThemeBranches().includes(branch)) throw new Error(`Nhánh origin/${branch} đã tồn tại.`);

  themeCheck();
  const record = customizationRecord(branch);
  fs.mkdirSync(path.dirname(record), { recursive: true });
  fs.writeFileSync(record, themeRecordContents(slug, gitText(["rev-parse", "main"])), "utf8");
  git(["switch", "-c", branch, "main"], { inherit: true });
  const pathsToStage = [path.relative(ROOT, record)];
  if (fs.existsSync(BASE_HISTORY_FILE)) {
    fs.rmSync(BASE_HISTORY_FILE);
    pathsToStage.push(path.relative(ROOT, BASE_HISTORY_FILE));
  }
  git(["add", "--", ...pathsToStage]);
  git(["diff", "--cached", "--check"], { inherit: true });
  git(["commit", "-m", `docs(theme): initialize ${slug} customization record`], { inherit: true });
  if (options.push) git(["push", "--set-upstream", "origin", branch], { inherit: true });
  console.log(`Đã tạo ${branch} và ${path.relative(ROOT, record)}${options.push ? " rồi push lên origin" : " (local)"}.`);
}

function help() {
  console.log(`Personal theme base sync\n\n` +
    `  node theme-base update-base [--source auto|main|dev]\n` +
    `  node theme-base update-themes --all\n` +
    `  node theme-base update-themes --branch theme/<slug>\n` +
    `  node theme-base new-theme <slug> [--push]\n` +
    `  node theme-base check-custom <slug>  # validates section/block code differences only\n` +
    `  node theme-base preview start --store <store>\n` +
    `  node theme-base preview status|logs|stop\n\n` +
    `Only upstream/main and upstream/dev are fetched. update-base and safe theme updates commit and push after Theme Check. Custom sections/blocks and their dependencies stay unchanged. Other used sections/blocks preserve preset values, add new defaults to presets and saved instances, and ask before removing their upstream settings. Unused non-custom section/block schemas and presets follow main. Structural rebuilds require a validated migration from old preset data; incompatible mappings stop for review.`);
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (!command || command === "help" || command === "--help" || command === "-h") return help();
  assertRemotes();
  const options = parseArgs(args);

  if (command === "update-base") {
    if (!["auto", "main", "dev"].includes(options.source)) throw new Error("--source chỉ nhận auto, main hoặc dev.");
    await updateBase(options);
  } else if (command === "update-themes") {
    await updateThemes(options);
  } else if (command === "new-theme") {
    await newTheme(options.positional[0], options);
  } else if (command === "check-custom") {
    const branch = normalizeThemeBranch(options.positional[0] || options.branch || "");
    if (currentBranch() !== branch) throw new Error(`Chuyển sang ${branch} trước khi kiểm tra hồ sơ custom.`);
    verifyCustomizationRecord(branch, true);
  } else {
    throw new Error(`Lệnh không hỗ trợ: ${command}. Chạy help để xem cách dùng.`);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`\nLỗi: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { reconcileThemeSchema, collectUsedThemeFiles, updateCompositionSettings, composeThemeResultTree, buildThemeMergeTree, frozenThemeCustomizationPaths };

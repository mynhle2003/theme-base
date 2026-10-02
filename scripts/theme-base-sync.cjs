#!/usr/bin/env node
"use strict";

const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const ROOT = path.resolve(__dirname, "..");
const UPSTREAM = "https://github.com/Chieu2507/shopify-theme-base";

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

function previewTree(from, tree) {
  listChanges(from, tree);
  console.log("\nDiff đầy đủ để review:");
  git(["diff", "--no-ext-diff", "--no-color", from, tree], { inherit: true });
}

function applyTreeDiff(from, tree) {
  const patch = git(["diff", "--binary", from, tree]).stdout;
  if (patch) run("git", ["apply", "--index"], { input: patch });
  return patch;
}

function rollbackTreeDiff(patch) {
  if (patch) run("git", ["apply", "--reverse", "--index"], { input: patch, allowFailure: true });
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

async function requestApply(label) {
  console.log(`\nReview staged diff bằng git diff --cached (${label}).`);
  if (!stdin.isTTY || !stdout.isTTY) {
    console.log("Không có terminal tương tác; merge sẽ bị hủy, chưa commit.");
    return false;
  }
  const prompt = readline.createInterface({ input: stdin, output: stdout });
  const answer = await prompt.question("Nhập APPLY để chạy Theme Check và commit; nhấn Enter để hủy: ");
  prompt.close();
  return answer.trim() === "APPLY";
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

function sectionImplementationDependencies(revision, includeWorktree = false) {
  const sourceFiles = new Set(gitText([
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

async function updateOneTheme(branch, options) {
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
  const overlaps = overlappingChanges(branch, base);
  const historyPath = path.relative(ROOT, BASE_HISTORY_FILE);
  const tree = mergeTree(base, branch, "main", `main vào ${branch}`, [historyPath]);
  const changeSummary = gitText(["diff", "--stat", branch, tree]) || "No file changes.";
  previewTree(branch, tree);
  if (overlaps.length) {
    console.log("\nCẢNH BÁO: các file này đã thay đổi riêng ở theme và main; kiểm tra hồ sơ custom/hành vi trước khi duyệt:");
    console.log(overlaps.join("\n"));
  }
  const originalRecord = fs.readFileSync(customizationRecord(branch), "utf8");
  const patch = applyTreeDiff(branch, tree);
  let committed = false;
  try {
    writeThemeBaseHistory(branch, base, mainSha, range, changeSummary);
    git(["add", "--", path.relative(ROOT, customizationRecord(branch))]);
    verifyCustomizationRecord(branch, true);
    if (!(await requestApply(`main ${mainSha.slice(0, 8)} vào ${branch}`))) {
      rollbackTreeDiff(patch);
      fs.writeFileSync(customizationRecord(branch), originalRecord, "utf8");
      git(["add", "--", path.relative(ROOT, customizationRecord(branch))]);
      console.log(`Đã hủy cập nhật ${branch} theo yêu cầu.`);
      return false;
    }
    checkDiffAndTheme();
    const message = `chore(theme): update base with ${range.commits.length} main commits through ${mainSha.slice(0, 8)}`;
    git(["commit", "-m", message], { inherit: true });
    committed = true;
    if (options.push) git(["push", "--set-upstream", "origin", branch], { inherit: true });
  } catch (error) {
    if (!committed) {
      rollbackTreeDiff(patch);
      fs.writeFileSync(customizationRecord(branch), originalRecord, "utf8");
      git(["add", "--", path.relative(ROOT, customizationRecord(branch))], { allowFailure: true });
    }
    throw error;
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
        if (await updateOneTheme(branch, options)) completed.push(branch);
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
    `  node theme-base update-themes --all [--push]\n` +
    `  node theme-base update-themes --branch theme/<slug> [--push]\n` +
    `  node theme-base new-theme <slug> [--push]\n` +
    `  node theme-base check-custom <slug>  # validates section/block code differences only\n` +
    `  node theme-base preview start --store <store>\n` +
    `  node theme-base preview status|logs|stop\n\n` +
    `Only upstream/main and upstream/dev are fetched. update-base commits and pushes after Theme Check; theme updates require APPLY and use --push for publishing.`);
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

main().catch((error) => {
  console.error(`\nLỗi: ${error.message}`);
  process.exitCode = 1;
});

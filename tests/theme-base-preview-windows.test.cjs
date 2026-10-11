"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const net = require("node:net");
const { spawnSync } = require("node:child_process");
const { processCommand, portBelongsToSupervisor, resolveWindowsCli } = require("../scripts/theme-base-preview.cjs");

test("Windows identifies the actual Node command line", { skip: process.platform !== "win32" }, () => {
  assert.match(processCommand(process.pid), /node/i);
  assert.match(processCommand(process.pid), /theme-base-preview-windows/);
});

test("Windows listener ownership accepts its process and rejects another PID", { skip: process.platform !== "win32" }, async () => {
  const server = net.createServer(socket => socket.end());
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  try {
    assert.equal(portBelongsToSupervisor(server.address().port, process.pid), true);
    assert.equal(portBelongsToSupervisor(server.address().port, 2147483647), false);
  } finally { await new Promise(resolve => server.close(resolve)); }
});

test("Windows launches installed Shopify CLI without a cmd shell", { skip: process.platform !== "win32" }, () => {
  const result = spawnSync(process.execPath, [resolveWindowsCli(), "--version"], { encoding: "utf8", windowsHide: true });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /\d+\.\d+\.\d+/);
});

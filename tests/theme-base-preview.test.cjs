"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { selectPreviewTheme, previewDevArgs } = require("../scripts/theme-base-preview.cjs");
const arche = { id: 123, name: "Arche template (Minhle)", role: "unpublished" };

test("Arche selects its own draft even when other themes and a shared dev theme exist", () => {
  assert.equal(selectPreviewTheme([
    { id: 10, name: "Elara template (Minhle)", role: "unpublished" },
    { id: 11, name: "Essen template (Minhle)", role: "unpublished" },
    { id: 12, name: "Development (shared)", role: "development" }, arche,
  ]), arche);
});

test("missing, ambiguous, live, development and invalid targets fail closed", () => {
  for (const themes of [[], [arche, { ...arche, id: 124 }],
    [{ ...arche, role: "live" }], [{ ...arche, role: "development" }],
    [{ ...arche, id: "123" }], [{ ...arche, id: 0 }]]) {
    assert.throws(() => selectPreviewTheme(themes), error => error.noRetry === true);
  }
});

test("dev explicitly pins checked theme ID and never allows live theme writes", () => {
  const args = previewDevArgs("example.myshopify.com", 9301, arche.id);
  assert.equal(args[args.indexOf("--theme") + 1], "123");
  assert.equal(args[args.indexOf("--port") + 1], "9301");
  assert.ok(args.includes("--nodelete"));
  assert.ok(!args.includes("--allow-live"));
  for (const id of [undefined, null, 0, -1, "123"]) {
    assert.throws(() => previewDevArgs("example.myshopify.com", 9301, id));
  }
});

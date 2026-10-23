'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const sourceFile = path.join(__dirname, '../scripts/theme-base-preview.cjs');
const actual = require(sourceFile);
const themes = [
  { id: 101, name: 'Draft', role: 'unpublished' },
  { id: 102, name: 'Live', role: 'live' },
  { id: 103, name: 'Shared dev', role: 'development' },
];
test('accepts ID, new, equals form and combined store; rejects bad flags before CLI', () => {
  assert.deepEqual(actual.parseStartArgs(['--store', 'example', '--theme', '101']), {
    store: 'example.myshopify.com', themeId: '101',
  });
  assert.equal(actual.parseStartArgs(['--theme=new']).themeId, 'new');
  assert.equal(actual.parseStartArgs(['--theme', 'new']).themeId, 'new');
  for (const args of [['--theme'], ['--theme='], ['--theme', '0'], ['--theme', '-1'], ['--theme', 'draft'], ['--theme', '101', '--theme=new']]) {
    assert.throws(() => actual.parseStartArgs(args), /ID\|new/);
  }
});
test('only an existing unpublished ID is accepted', () => {
  assert.equal(actual.validateTargetTheme('101', themes), themes[0]);
  for (const id of ['102', '103', '999', 'Draft', '0']) assert.throws(() => actual.validateTargetTheme(id, themes));
});
test('dev pins selected ID, preserves nodelete and never allows live writes', () => {
  const args = actual.previewDevArgs('example.myshopify.com', 9301, '101');
  assert.equal(args[args.indexOf('--theme') + 1], '101');
  assert.equal(args[args.indexOf('--port') + 1], '9301');
  assert.ok(args.includes('--nodelete'));
  assert.ok(!args.includes('--allow-live'));
  for (const id of [undefined, null, 0, -1, 'new']) assert.throws(() => actual.previewDevArgs('example', 9301, id));
});
function fixture(t, format = 'pretty') {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'preview-target-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const calls = [];
  let available = [...themes];
  const draft = { id: 104, name: `${path.basename(root)} local preview`, role: 'unpublished' };
  const fakeRequire = name => name === 'node:child_process' ? {
    spawnSync: (command, args) => {
      calls.push(args);
      assert.equal(command, 'shopify');
      if (args[1] === 'list') return { status: 0, stdout: JSON.stringify(available) };
      assert.equal(args[1], 'push');
      assert.ok(args.includes('--unpublished'));
      assert.ok(args.includes('--strict'));
      assert.ok(!args.includes('--publish'));
      available.push(draft);
      return { status: 0, stdout: format === 'pretty' ? JSON.stringify({ theme: draft }, null, 2) : '{}\n' + JSON.stringify({ theme: draft }) };
    },
  } : require(name);
  const mod = { exports: {} };
  vm.runInNewContext(fs.readFileSync(sourceFile, 'utf8'), {
    require: fakeRequire, module: mod, __dirname: path.join(root, 'scripts'), process,
    console: { log() {} }, setTimeout, URL, Buffer,
  });
  return { api: mod.exports, root, calls, available };
}
test('persists explicit ID and reuses it without uploading a new draft', async t => {
  const { api, calls } = fixture(t);
  await api.ensureTarget('example.myshopify.com', '101');
  assert.equal(api.readTarget('example.myshopify.com').themeId, '101');
  assert.equal(api.readTarget('other.myshopify.com'), null);
  await api.ensureTarget('example.myshopify.com');
  assert.ok(calls.every(args => args[1] === 'list'));
});
for (const format of ['pretty', 'jsonl']) test(`creates a private draft and reads ${format} CLI output`, async t => {
  const { api, calls } = fixture(t, format);
  await api.ensureTarget('example.myshopify.com', 'new');
  assert.equal(api.readTarget('example.myshopify.com').themeId, '104');
  assert.equal(calls.filter(args => args[1] === 'push').length, 1);
  await assert.rejects(api.ensureTarget('example.myshopify.com', 'new'), /Đã có draft/);
  assert.equal(calls.filter(args => args[1] === 'push').length, 1);
});
test('rejects saved target published since last run, with no upload', async t => {
  const { api, available, calls } = fixture(t);
  await api.ensureTarget('example.myshopify.com', '101');
  available[0] = { ...available[0], role: 'live' };
  await assert.rejects(api.ensureTarget('example.myshopify.com'), /role live/);
  assert.ok(calls.every(args => args[1] === 'list'));
});
test('explicit choice can replace a corrupt saved target', async t => {
  const { api, root } = fixture(t);
  const dir = path.join(root, '.shopify/theme-base-preview');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'target.json'), '{bad json');
  await api.ensureTarget('example.myshopify.com', '101');
  assert.equal(api.readTarget('example.myshopify.com').themeId, '101');
});

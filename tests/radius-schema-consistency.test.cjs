const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const schemas = new Map();
for (const folder of ['blocks', 'sections']) {
  for (const file of fs.readdirSync(folder).filter(file => file.endsWith('.liquid'))) {
    const source = fs.readFileSync(`${folder}/${file}`, 'utf8');
    const match = source.match(/{% schema %}([\s\S]*?){% endschema %}/);
    if (match) schemas.set(`${folder}/${file.slice(0, -7)}`, JSON.parse(match[1]));
  }
}
const globals = JSON.parse(fs.readFileSync('config/settings_schema.json', 'utf8'));
const controls = [...schemas].flatMap(([file, schema]) => (schema.settings || []).map(setting => [file, setting]))
  .concat(globals.flatMap(group => (group.settings || []).map(setting => ['config', setting])))
  .filter(([, setting]) => setting.type === 'select' && setting.id.includes('radius'));

test('radius controls have distinct labels, values and effective presets', () => {
  const semantic = { square: 0, none: 0, slightly_rounded: 4, small: 4, rounded: 8, medium: 8, extra_rounded: 16, large: 16, full: 1000, pill: 1000 };
  for (const [file, setting] of controls) {
    const seen = new Set();
    const labels = new Set();
    for (const option of setting.options) {
      const pixels = option.value.startsWith('radius_') ? Number(option.value.slice(7)) : semantic[option.value];
      const key = pixels === undefined ? option.value : pixels;
      assert.ok(!seen.has(key), `${file}/${setting.id}: duplicate ${option.value}`);
      assert.ok(!labels.has(option.label), `${file}/${setting.id}: duplicate label ${option.label}`);
      seen.add(key);
      labels.add(option.label);
    }
    assert.ok(setting.options.some(option => option.value === setting.default), `${file}/${setting.id}: invalid default`);
  }
});

function verifySettings(settings, schema, context) {
  for (const [key, value] of Object.entries(settings || {})) {
    if (!key.includes('radius')) continue;
    const control = schema?.settings?.find(setting => setting.id === key);
    if (control?.options) assert.ok(control.options.some(option => option.value === value), `${context}/${key}: ${value}`);
  }
}
function verifyTree(node, rootSchema, context) {
  if (Array.isArray(node)) return node.forEach(child => verifyTree(child, rootSchema, context));
  if (!node || typeof node !== 'object') return;
  const schema = node.type ? schemas.get(`blocks/${node.type}`) || schemas.get(`sections/${node.type}`) : rootSchema;
  verifySettings(node.settings, schema, context);
  for (const [key, child] of Object.entries(node)) if (key !== 'settings') verifyTree(child, rootSchema, `${context}/${key}`);
}
test('saved templates and section/block presets use supported radius values', () => {
  for (const [file, schema] of schemas) verifyTree(schema.presets || [], schema, file);
  for (const folder of ['templates', 'sections']) {
    for (const file of fs.readdirSync(folder).filter(file => file.endsWith('.json'))) {
      const source = fs.readFileSync(`${folder}/${file}`, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
      verifyTree(JSON.parse(source), null, `${folder}/${file}`);
    }
  }
});

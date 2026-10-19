import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const appSource = fs.readFileSync(path.join(here, '..', 'js', 'app.js'), 'utf8');
const cssSource = fs.readFileSync(path.join(here, '..', 'css', 'styles.css'), 'utf8');

test('command sidebar keeps the selected category highlighted', () => {
  assert.match(appSource, /class="category \$\{state\.category===c\.name\?'active':''\}" data-category="\$\{esc\(c\.name\)\}"/);
  assert.match(appSource, /class="category \$\{state\.category==='All'\?'active':''\}" data-category="All"/);
});

test('command cards expose a stable selected-command state', () => {
  assert.match(appSource, /data-command-id="\$\{esc\(r\.id\)\}"/);
  assert.match(appSource, /selected-command/);
  assert.match(appSource, /state\.selectedCommandId/);
});

test('category navigation does not rebuild the whole sidebar', () => {
  assert.match(appSource, /state\.category=b\.dataset\.category;state\.selectedCommandId=null;renderSidebar\(\);renderCommands\(\);/);
  assert.doesNotMatch(appSource, /state\.category=b\.dataset\.category;renderSidebar\(\);renderCommands\(\);/);
});

test('selected command has an immediate visual highlight', () => {
  assert.match(cssSource, /\.card\.selected-command/);
});

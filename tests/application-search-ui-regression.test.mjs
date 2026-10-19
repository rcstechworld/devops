import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const appSource = fs.readFileSync(path.join(here, '..', 'js', 'app.js'), 'utf8');

test('application hub search handler renders application search results', () => {
  assert.match(appSource, /function renderApplicationSearchResults\(query\)\{[\s\S]*searchDevOps\(commands, apps, normalized/);
  assert.match(appSource, /commandSearch\.addEventListener\('input'/);
});

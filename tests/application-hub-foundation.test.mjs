import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');

test('application hub shell exposes navigation, global search, commands view and applications view', () => {
  for (const anchor of ['id="app"', 'id="global-search"', 'id="commands-view"', 'id="applications-view"']) {
    assert.match(html, new RegExp(anchor));
  }
  assert.match(html, /Applications/);
});

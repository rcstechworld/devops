import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const app = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const daily = fs.readFileSync(path.join(root, 'js', 'daily.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('Daily Commands has a dedicated navigation target', () => {
  assert.match(html, /data-view="daily"/);
  assert.match(html, /Daily Commands/);
});

test('daily items persist Added By metadata', () => {
  assert.match(daily, /addedBy/);
  assert.match(app, /dailyAddedBy/);
});

test('daily view renders saved commands separately', () => {
  assert.match(app, /state\.view==='daily'/);
  assert.match(app, /renderDailyView/);
});

test('daily view exposes a quick search and saved count', () => {
  assert.match(html, /id="dailyViewCount"/);
  assert.match(html, /id="daily-view-results"/);
});


test('Daily Commands exposes Edit while keeping remove/delete out of the UI', () => {
  assert.match(app, /data-edit-daily/);
  assert.match(app, /dailyStore\.update/);
  assert.match(app, /Edit Daily Command/);
  assert.match(app, /readOnly=Boolean\(item\)/);
  assert.doesNotMatch(app, /data-delete-daily/);
  assert.doesNotMatch(app, /data-daily-remove/);
  assert.doesNotMatch(app, />Remove<\/button>/);
  assert.doesNotMatch(app, />Delete<\/button>/);
});

test('Daily Commands has no remove or delete UI access', () => {
  assert.doesNotMatch(app, /data-delete-daily/);
  assert.doesNotMatch(app, /data-daily-remove/);
  assert.doesNotMatch(app, />Remove<\/button>/);
  assert.doesNotMatch(app, />Delete<\/button>/);
});

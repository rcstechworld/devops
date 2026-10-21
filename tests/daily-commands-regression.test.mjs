import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const app = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const daily = fs.readFileSync(path.join(root, 'js', 'daily.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('Contribute Your Commands has a dedicated navigation target', () => {
  assert.match(html, /data-view="daily"/);
  assert.match(html, /Contribute Your Commands/);
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


test('Daily Commands exposes Edit in each saved-command card while keeping remove/delete out of the UI', () => {
  assert.match(app, /data-edit-daily=\"\$\{esc\(x\.id\)\}\"/);
  assert.match(app, /✏️ Edit/);
  assert.match(app, /dailyStore\.update/);
  assert.match(app, /Edit Contributed Command/);
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

test('search hero is wide, branded, and exposes keyword discovery chips', () => {
  assert.match(html, /class="search-wrap search-hero"/);
  assert.match(html, /class="search-keywords"/);
  assert.match(html, /Popular keywords/);
  assert.match(html, /data-query="install kafka ubuntu"/);
  assert.match(html, /data-query="nginx 502"/);
  assert.match(html, /data-query="kubernetes pod crash"/);
});

test('search UI has a clear example row below keyword chips', () => {
  assert.match(html, /class="search-examples"/);
  assert.match(html, /Try searching:/);
  assert.match(html, /kafka consumer lag/);
  assert.match(html, /redis docker/);
});

test('RCS-DevOps branding is consistent in the hero', () => {
  assert.match(html, /RCS-DEVOPS QUICK REFERENCE/);
  assert.doesNotMatch(html, /DHD-DEVOPS QUICK REFERENCE/);
});

test('UI typography stays balanced across hero, search, keywords, and cards', () => {
  const css = fs.readFileSync(path.join(root, 'css', 'styles.css'), 'utf8');
  assert.match(css, /\.hero h1\{font-size:clamp\(36px,3\.2vw,44px\)/);
  assert.match(css, /\.hero p\{font-size:17px/);
  assert.match(css, /\.search-wrap\.search-hero input\{font-size:17px/);
  assert.match(css, /\.search-keywords \.chips button\{[^}]*font-size:14px/);
  assert.match(css, /\.daily-view-card h3\{font-size:20px/);
});

test('UI polish adds subtle depth without changing search structure', () => {
  const css = fs.readFileSync(path.join(root, 'css', 'styles.css'), 'utf8');
  assert.match(css, /\.hero\{[^}]*background:radial-gradient/);
  assert.match(css, /\.search-keywords\{[^}]*backdrop-filter:blur\(/);
  assert.match(css, /\.chips button\{[^}]*transition:all/);
});

test('contribution UI uses Contribute Your Commands naming', () => {
  assert.match(html, /Contribute Your Commands/);
  assert.match(html, /Contribute Command/);
  assert.doesNotMatch(html, /\+ Add Daily/);
  assert.doesNotMatch(html, /Daily Commands/);
});

test('contribution form exposes the shared command category dropdown', () => {
  assert.match(html, /<select id="dailyCategory"/);
  assert.match(html, /value="Linux"/);
  assert.match(html, /value="Kubernetes"/);
  assert.match(html, /value="Production Incident Playbooks"/);
  assert.match(html, /value="Application Troubleshooting"/);
});

test('category counts include contributed commands and command filtering uses their selected category', () => {
  assert.match(app, /dailyStore\.list\(\)\.filter\(x=>x\.category===name\)\.length/);
  assert.match(app, /dailyStore\.list\(\)\.map\(x=>\(\{\.\.\.x,isDaily:true/);
  assert.doesNotMatch(app, /category:'My Daily'/, 'legacy hard-coded category should be removed');
});

test('contributed command cards use contribution terminology', () => {
  assert.match(app, /⭐ Contributed/);
  assert.match(app, /No contributed commands/);
  assert.match(app, /Contribute Command/);
  assert.match(app, /dailyViewCount.*contributed/);
});

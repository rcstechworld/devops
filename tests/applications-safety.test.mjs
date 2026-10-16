import test from 'node:test';
import assert from 'node:assert/strict';
import { getApplications } from '../js/applications/registry.js';
import { renderApplicationDetail } from '../js/applications/ui.js';

const apps = getApplications();

test('destructive commands are visibly warned in rendered runbooks', () => {
  const docker = apps.find(a=>a.id==='docker');
  const html = renderApplicationDetail(docker);
  assert.match(html, /removes unused Docker objects|Review the target carefully/);
});

test('real-looking secret literals are absent from the catalog', () => {
  const text = JSON.stringify(apps);
  assert.doesNotMatch(text, /password\s*[=:]\s*(?!<PASSWORD>)[A-Za-z0-9+/]{12,}/i);
  assert.doesNotMatch(text, /AKIA[0-9A-Z]{16}/);
});

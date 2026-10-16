import test from 'node:test';
import assert from 'node:assert/strict';
import { getApplications } from '../js/applications/registry.js';

const apps = getApplications();
const allSteps = apps.flatMap(a => Object.entries(a.sections).flatMap(([section,steps]) => steps.map(step => ({a,section,step}))));

test('every application has official documentation and searchable runbook metadata', () => {
  for (const app of apps) {
    assert.match(app.docsUrl, /^https:\/\//);
    assert.match(app.officialSiteUrl, /^https:\/\//);
    assert.ok(app.environments.length >= 1);
    assert.ok(app.versionNotes);
  }
});

test('runbook steps have stable ids and searchable tags/keywords', () => {
  for (const {step} of allSteps) {
    assert.ok(step.id && step.title);
    assert.ok(Array.isArray(step.tags));
    assert.ok(Array.isArray(step.keywords));
    assert.ok(step.platform && step.method);
  }
});

test('credential examples use placeholders, not realistic secrets', () => {
  for (const {step} of allSteps) {
    assert.doesNotMatch(`${step.command} ${step.description}`, /(password|passwd|token|secret)\s*[=:]\s*['"]?[A-Za-z0-9+/]{12,}/i);
  }
});

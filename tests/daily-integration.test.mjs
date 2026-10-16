import test from 'node:test';
import assert from 'node:assert/strict';
import { getApplications } from '../js/applications/registry.js';
import { addRunbookStepToDaily } from '../js/applications/daily.js';

const app = getApplications().find(a => a.id === 'redis');
const step = app.sections.daily[0];

test('runbook step converts to a Daily Commands record with provenance', () => {
  const item = addRunbookStepToDaily(step, app);
  assert.equal(item.category, 'Application: Databases / Cache');
  assert.match(item.name, /Redis/);
  assert.equal(item.command, step.command);
  assert.deepEqual(item.tags.includes('redis'), true);
  assert.equal(item.sourceApplicationId, 'redis');
  assert.equal(item.sourceStepId, step.id);
});

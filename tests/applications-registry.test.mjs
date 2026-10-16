import test from 'node:test';
import assert from 'node:assert/strict';
import { getApplications, getApplicationById, getApplicationCategories, getApplicationsByCategory } from '../js/applications/registry.js';
import { validateApplication } from '../js/applications/schema.js';

test('catalog has broad coverage and unique ids', () => {
  const apps = getApplications();
  assert.ok(apps.length >= 45);
  assert.equal(new Set(apps.map(a => a.id)).size, apps.length);
  assert.ok(getApplicationCategories().length >= 8);
  assert.ok(getApplicationsByCategory('messaging').length >= 3);
  for (const app of apps) assert.equal(validateApplication(app).valid, true, `${app.id} should validate`);
});

test('application lookup is stable', () => {
  assert.equal(getApplicationById('kafka')?.name, 'Apache Kafka');
  assert.equal(getApplicationById('does-not-exist'), null);
});

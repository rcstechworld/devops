import test from 'node:test';
import assert from 'node:assert/strict';
import { getApplications } from '../js/applications/registry.js';
import { renderApplicationCatalog, renderApplicationDetail } from '../js/applications/ui.js';

const apps = getApplications();

test('catalog renderer exposes categories and application cards', () => {
  const html = renderApplicationCatalog(apps, 'all');
  assert.match(html, /Apache Kafka/);
  assert.match(html, /Elasticsearch/);
  assert.match(html, /Redis/);
});

test('detail renderer exposes environment tabs, runbook sections and official docs', () => {
  const html = renderApplicationDetail(apps.find(a => a.id === 'kafka'), 'docker');
  assert.match(html, /Docker/);
  assert.match(html, /Installation/);
  assert.match(html, /Daily Operations/);
  assert.match(html, /Official documentation/);
  assert.match(html, /data-runbook/);
});

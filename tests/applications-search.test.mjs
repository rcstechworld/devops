import test from 'node:test';
import assert from 'node:assert/strict';
import { getApplications } from '../js/applications/registry.js';
import { searchApplications } from '../js/applications/search.js';

const apps = getApplications();
for (const [query, expected] of [['install kafka ubuntu','kafka'],['redis docker','redis'],['rabbitmq create user','rabbitmq'],['kafka consumer lag','kafka'],['elasticsearch health','elasticsearch'],['postgres backup','postgresql']]) {
  test(`search finds ${expected} for "${query}"`, () => {
    const results = searchApplications(apps, query);
    assert.ok(results.length > 0);
    assert.equal(results[0].application.id, expected);
  });
}

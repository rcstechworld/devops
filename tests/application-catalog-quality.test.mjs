import test from 'node:test';
import assert from 'node:assert/strict';
import { getApplications } from '../js/applications/registry.js';
import { REQUIRED_SECTIONS } from '../js/applications/schema.js';

const apps=getApplications();

test('catalog has no duplicate IDs or missing official references',()=>{
  assert.equal(new Set(apps.map(a=>a.id)).size,apps.length);
  for(const a of apps){assert.ok(a.docsUrl.startsWith('https://'));assert.ok(a.officialSiteUrl.startsWith('https://'));for(const s of REQUIRED_SECTIONS)assert.ok(Array.isArray(a.sections[s]));}
});

test('commands are non-empty and use placeholders for infrastructure targets',()=>{
  for(const a of apps) for(const steps of Object.values(a.sections)) for(const s of steps) if(s.command){assert.ok(s.command.trim());if(/\b(HOST|BROKER|GROUP|TOPIC|NAMESPACE|POD|CONTAINER|PASSWORD|USER|DATABASE|PORT|VERSION)\b/.test(s.command)) assert.ok(/<[^>]+>/.test(s.command) || !/(HOST|BROKER|GROUP|TOPIC|NAMESPACE|POD|CONTAINER|PASSWORD|USER|DATABASE|PORT|VERSION)/.test(s.command));}
});

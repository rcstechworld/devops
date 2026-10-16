import test from 'node:test';
import assert from 'node:assert/strict';
import { validateApplication, validateStep } from '../js/applications/schema.js';

test('valid runbook step requires id, title, command or note, and metadata', () => {
  assert.equal(validateStep({ id:'s1', title:'Install', command:'sudo apt-get install foo', platform:'ubuntu', method:'apt' }).valid, true);
  assert.equal(validateStep({ id:'s1', title:'Install', platform:'ubuntu' }).valid, false);
});

test('valid application requires common runbook sections and official references', () => {
  const app = {
    id:'demo', name:'Demo', category:'data', icon:'D', description:'Demo',
    environments:['ubuntu','docker'],
    sections:{overview:[], install:[], configure:[], lifecycle:[], verify:[], security:[], daily:[], logs:[], monitoring:[], backup:[], upgrade:[], troubleshooting:[], production:[]},
    docsUrl:'https://example.com/docs', officialSiteUrl:'https://example.com'
  };
  assert.equal(validateApplication(app).valid, true);
  assert.equal(validateApplication({...app, docsUrl:''}).valid, false);
});

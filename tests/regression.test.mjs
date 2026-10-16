import test from 'node:test';
import assert from 'node:assert/strict';
import { commands } from '../js/commands.js';
import { searchCommands } from '../js/search.js';
import { getApplications } from '../js/applications/registry.js';
import { searchApplications } from '../js/applications/search.js';

test('existing command search remains functional alongside applications',()=>{assert.ok(searchCommands(commands,'docker clean').length>0);assert.ok(searchApplications(getApplications(),'redis docker').length>0);});

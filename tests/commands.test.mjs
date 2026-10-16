
import test from "node:test";
import assert from "node:assert/strict";
import { commands, categories } from "../js/commands.js";

test("command records have required fields", () => {
  const ids = new Set();
  for (const item of commands) {
    assert.ok(item.id);
    assert.equal(ids.has(item.id), false);
    ids.add(item.id);
    assert.ok(item.category);
    assert.ok(item.subcategory);
    assert.ok(["beginner", "intermediate", "advanced"].includes(item.level));
    assert.ok(item.command);
    assert.ok(item.description);
    assert.ok(Array.isArray(item.keywords));
    assert.ok(Array.isArray(item.tags));
  }
});

test("all command categories are supported", () => {
  const allowed = new Set(categories.map(c => c.name));
  for (const item of commands) assert.ok(allowed.has(item.category), item.category);
});

test("expanded library has meaningful coverage in every category", () => {
  assert.ok(commands.length >= 400, `expected at least 400 commands, got ${commands.length}`);
  for (const category of categories) {
    assert.ok(commands.some(item => item.category === category.name), `missing commands for ${category.name}`);
  }
});

test("application troubleshooting categories are present", () => {
  const names = new Set(categories.map(c => c.name));
  for (const name of ["Python", "Java", ".NET", "Node.js", "Go", "PHP", "Application Troubleshooting"]) {
    assert.ok(names.has(name), `missing ${name}`);
    assert.ok(commands.some(item => item.category === name), `missing commands for ${name}`);
  }
});

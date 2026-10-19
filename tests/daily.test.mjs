import test from "node:test";
import assert from "node:assert/strict";
import { createDailyStore } from "../js/daily.js";

function memoryStorage() {
  const data = new Map();
  return {
    getItem: key => data.has(key) ? data.get(key) : null,
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: key => data.delete(key)
  };
}

test("daily store adds, updates, removes and persists commands", () => {
  const storage = memoryStorage();
  const first = createDailyStore(storage);
  const item = first.add({ name: "AKS Pods", command: "kubectl get pods -A", category: "AKS", tags: ["aks", "pods"] });
  assert.ok(item.id);
  assert.equal(first.list().length, 1);
  assert.equal(first.update(item.id, { name: "AKS Pods Wide" }).name, "AKS Pods Wide");

  const second = createDailyStore(storage);
  assert.equal(second.list()[0].name, "AKS Pods Wide");
  assert.equal(second.remove(item.id), true);
  assert.deepEqual(second.list(), []);
});

test("daily store rejects incomplete commands", () => {
  const store = createDailyStore(memoryStorage());
  assert.throws(() => store.add({ name: "Only name" }), /command/i);
});


test("daily store update preserves Added By and original Added At metadata", () => {
  const data = new Map();
  const storage = {
    getItem: key => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value)
  };
  const store = createDailyStore(storage);
  const original = store.add({
    name: "Original", command: "echo original", category: "Linux", description: "desc",
    addedBy: "Birender", addedAt: "2026-01-01T10:00:00.000Z"
  });
  const updated = store.update(original.id, { name: "Updated", command: "echo updated", addedBy: "Other", addedAt: "2026-02-01T10:00:00.000Z" });
  assert.equal(updated.name, "Updated");
  assert.equal(updated.command, "echo updated");
  assert.equal(updated.addedBy, "Birender");
  assert.equal(updated.addedAt, "2026-01-01T10:00:00.000Z");
});

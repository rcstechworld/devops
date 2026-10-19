const STORAGE_KEY = "dhd-devops.daily-commands.v1";

function read(storage) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(storage, items) {
  storage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function clean(input) {
  const item = { ...input };
  item.name = String(item.name || "").trim();
  item.command = String(item.command || "").trim();
  item.category = String(item.category || "General").trim();
  item.description = String(item.description || "").trim();
  item.tags = Array.isArray(item.tags) ? item.tags.map(String).map(x => x.trim()).filter(Boolean) : [];
  item.addedBy = String(item.addedBy || 'Unknown').trim() || 'Unknown';
  item.addedAt = item.addedAt || item.createdAt || new Date().toISOString();
  if (!item.name || !item.command) throw new Error("name and command are required");
  return item;
}

export function createDailyStore(storage = globalThis.localStorage) {
  if (!storage) throw new Error("storage is required");
  const list = () => read(storage);
  const add = input => {
    const item = clean(input);
    item.id = input.id || `daily-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    item.createdAt = input.createdAt || new Date().toISOString();
    item.updatedAt = new Date().toISOString();
    const next = [item, ...list().filter(x => x.id !== item.id)];
    write(storage, next);
    return item;
  };
  const update = (id, patch) => {
    const items = list();
    const current = items.find(x => x.id === id);
    if (!current) return null;
    const item = clean({ ...current, ...patch });
    item.id = id;
    item.createdAt = current.createdAt;
    item.addedBy = current.addedBy;
    item.addedAt = current.addedAt;
    item.updatedAt = new Date().toISOString();
    write(storage, items.map(x => x.id === id ? item : x));
    return item;
  };
  const remove = id => {
    const items = list();
    const next = items.filter(x => x.id !== id);
    write(storage, next);
    return next.length !== items.length;
  };
  return { list, add, update, remove };
}

import { searchApplications } from "./applications/search.js";

const STOP_WORDS = new Set(["a","an","the","for","to","of","and","or","in","on","with","how","do","i","my"]);

export function tokenize(query) {
  return String(query ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9._/-]+/g, " ")
    .split(/\s+/)
    .map(s => s.trim())
    .filter(Boolean)
    .filter(s => !STOP_WORDS.has(s));
}

const fieldWeight = {
  command: 12,
  keywords: 9,
  tags: 7,
  subcategory: 5,
  category: 4,
  description: 3,
  useCase: 2
};

function haystack(record, field) {
  const value = record[field];
  return Array.isArray(value) ? value.join(" ").toLowerCase() : String(value ?? "").toLowerCase();
}

export function searchCommands(commands, query, options = {}) {
  const tokens = tokenize(query);
  if (!tokens.length) return options.emptyResults ?? commands.slice(0, options.limit ?? 12);

  const results = [];
  for (const record of commands) {
    let score = 0;
    let matched = 0;

    for (const token of tokens) {
      let tokenScore = 0;
      for (const [field, weight] of Object.entries(fieldWeight)) {
        const text = haystack(record, field);
        if (!text) continue;
        if (text.split(/\s+/).includes(token)) tokenScore = Math.max(tokenScore, weight);
        else if (text.includes(token)) tokenScore = Math.max(tokenScore, weight * 0.55);
      }
      if (tokenScore > 0) {
        matched++;
        score += tokenScore;
      }
    }

    if (matched === tokens.length) score += 15;
    else if (matched === 0) continue;
    else score *= matched / tokens.length;

    if (record.command.toLowerCase().includes(String(query).toLowerCase().trim())) score += 25;

    results.push({ ...record, score });
  }

  return results
    .sort((a,b) => b.score - a.score || a.category.localeCompare(b.category) || a.command.localeCompare(b.command))
    .slice(0, options.limit ?? 50);
}


export function searchDevOps(commands, applications, query, options = {}) {
  const normalized = String(query ?? "").trim();
  if (!normalized) {
    return searchCommands(commands, normalized, { emptyResults: commands.slice(0, options.limit ?? 50), limit: options.limit ?? 50 })
      .map(item => ({ type: "command", item, score: 0 }));
  }

  const applicationThreshold = options.applicationThreshold ?? 12;
  const commandResults = searchCommands(commands, normalized, { limit: options.limit ?? 50 })
    .map(item => ({ type: "command", item, score: item.score }));
  const applicationResults = searchApplications(applications, normalized, { limit: options.applicationLimit ?? 20 })
    .filter(result => result.score >= applicationThreshold)
    .map(result => {
      const exactName = result.application.name.toLowerCase() === normalized.toLowerCase();
      return {
        type: "application",
        application: result.application,
        section: result.section,
        step: result.step,
        score: result.score + (exactName ? 40 : 0)
      };
    });

  return [...commandResults, ...applicationResults]
    .sort((a, b) => b.score - a.score
      || (a.type === "application" ? -1 : 1)
      || (a.item?.command || a.step?.title || "").localeCompare(b.item?.command || b.step?.title || ""))
    .slice(0, options.limit ?? 50);
}

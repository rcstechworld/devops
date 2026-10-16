function tokenize(value) {
  return String(value || '').toLowerCase().split(/[^a-z0-9.-]+/).filter(t => t.length > 1);
}

export function searchApplications(applications, query, options = {}) {
  const tokens = tokenize(query);
  const limit = options.limit || 50;
  const results = [];
  for (const application of applications) {
    const appText = tokenize([application.name, application.id, application.category, application.description, application.environments.join(' '), application.versionNotes].join(' '));
    const appSet = new Set(appText);
    for (const [section, steps] of Object.entries(application.sections)) {
      for (const step of steps) {
        const stepText = tokenize([section, step.title, step.command, step.description, step.platform, step.method, ...(step.tags || []), ...(step.keywords || [])].join(' '));
        const haystack = new Set([...appText, ...stepText]);
        let score = 0;
        for (const token of tokens) {
          if (appSet.has(token)) score += 10;
          else if (haystack.has(token)) score += 8;
          else if (stepText.some(t => t.includes(token))) score += 4;
          else if (appText.some(t => t.includes(token))) score += 3;
        }
        if (!tokens.length) score = section === 'daily' ? 3 : 1;
        if (application.name.toLowerCase().includes(String(query).toLowerCase())) score += 20;
        if (score > 0) results.push({ application, section, step, score });
      }
    }
  }
  return results.sort((a,b) => b.score - a.score || a.application.name.localeCompare(b.application.name)).slice(0, limit);
}

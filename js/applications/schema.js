export const REQUIRED_SECTIONS = ['overview','install','configure','lifecycle','verify','security','daily','logs','monitoring','backup','upgrade','troubleshooting','production'];

export function validateStep(step) {
  const errors = [];
  if (!step || typeof step !== 'object') return { valid:false, errors:['step must be an object'] };
  for (const key of ['id','title']) if (!String(step[key] ?? '').trim()) errors.push(`${key} is required`);
  if (!String(step.command ?? '').trim() && !String(step.note ?? '').trim()) errors.push('command or note is required');
  if (!String(step.platform ?? '').trim()) errors.push('platform is required');
  if (!String(step.method ?? '').trim()) errors.push('method is required');
  if (step.warning && typeof step.warning !== 'string') errors.push('warning must be a string');
  return { valid: errors.length === 0, errors };
}

export function validateApplication(app) {
  const errors = [];
  if (!app || typeof app !== 'object') return { valid:false, errors:['application must be an object'] };
  for (const key of ['id','name','category','description','docsUrl','officialSiteUrl']) if (!String(app[key] ?? '').trim()) errors.push(`${key} is required`);
  if (!Array.isArray(app.environments) || app.environments.length === 0) errors.push('environments are required');
  if (!app.sections || typeof app.sections !== 'object') errors.push('sections are required');
  else for (const section of REQUIRED_SECTIONS) if (!Array.isArray(app.sections[section])) errors.push(`section ${section} is required`);
  for (const section of REQUIRED_SECTIONS) for (const step of (app.sections?.[section] || [])) {
    const result = validateStep(step);
    if (!result.valid) errors.push(`${section}/${step?.id || 'unknown'}: ${result.errors.join(', ')}`);
  }
  return { valid: errors.length === 0, errors };
}

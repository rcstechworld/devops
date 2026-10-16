const SECTION_LABELS = {
  overview:'Overview', install:'Installation', configure:'Configuration', lifecycle:'Start / Stop / Restart', verify:'Verification & Health', security:'Security / TLS', daily:'Daily Operations', logs:'Logs & Diagnostics', monitoring:'Monitoring', backup:'Backup / Restore', upgrade:'Upgrade / Uninstall', troubleshooting:'Troubleshooting', production:'Production Tips'
};
const ENV_LABELS = {ubuntu:'Ubuntu / Debian',rhel:'RHEL Family',docker:'Docker / Compose',kubernetes:'Kubernetes',helm:'Helm',linux:'Linux',windows:'Windows',macos:'macOS'};
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

export function renderApplicationCatalog(applications, category = 'all') {
  const visible = category === 'all' ? applications : applications.filter(a => a.category === category);
  return `<div class="app-catalog-grid">${visible.map(a => `<article class="app-card" data-application="${esc(a.id)}"><div class="app-icon">${a.icon}</div><div><h3>${esc(a.name)}</h3><p>${esc(a.description)}</p><div class="app-envs">${a.environments.slice(0,5).map(e => `<span>${esc(ENV_LABELS[e] || e)}</span>`).join('')}</div><button type="button" class="primary" data-open-app="${esc(a.id)}">Open Runbook →</button></div></article>`).join('')}</div>`;
}

function renderStep(step, application, section) {
  const note = step.note || step.description;
  const command = step.command?.trim();
  const safeWarning = step.warning || (command && /\b(prune|delete|destroy|reset|drop|remove|rm -rf|uninstall)\b/i.test(command) ? 'Review the target carefully. This operation may remove data or infrastructure.' : '');
  return `<article class="runbook-step" data-runbook="${esc(step.id)}" data-section="${esc(section)}">
    <div class="step-meta"><span>${esc(step.platform)}</span><span>${esc(step.method)}</span><span>${esc(step.version)}</span></div>
    <h4>${esc(step.title)}</h4>
    <p>${esc(note)}</p>
    ${command ? `<div class="runbook-command"><pre>${esc(command)}</pre><div class="runbook-actions"><button type="button" class="copy-runbook" data-command="${encodeURIComponent(command)}">Copy</button><button type="button" class="secondary add-runbook-daily" data-step-id="${esc(step.id)}" data-app-id="${esc(application.id)}">☆ Add to Daily</button></div></div>` : ''}
    ${step.expectedOutput ? `<div class="expected"><strong>Expected:</strong> ${esc(step.expectedOutput)}</div>` : ''}
    ${safeWarning ? `<div class="warning">⚠ ${esc(safeWarning)}</div>` : ''}
  </article>`;
}

export function renderApplicationDetail(application, environment = 'all') {
  if (!application) return '<div class="empty"><h2>Application not found</h2></div>';
  const envs = application.environments.filter(e => environment === 'all' || e === environment);
  const sections = Object.entries(application.sections).filter(([key, steps]) => steps.length && (key === 'overview' || environment === 'all' || steps.some(s => s.platform === 'all' || s.platform === environment || (environment === 'ubuntu' && s.platform === 'linux') || (environment === 'rhel' && s.platform === 'linux') || (environment === 'docker' && s.platform === 'linux'))));
  return `<div class="runbook-detail" data-application-detail="${esc(application.id)}">
    <div class="runbook-hero"><div class="app-icon large">${application.icon}</div><div><div class="eyebrow">APPLICATION RUNBOOK</div><h1>${esc(application.name)}</h1><p>${esc(application.description)}</p><div class="runbook-links"><a href="${esc(application.docsUrl)}" target="_blank" rel="noopener">Official documentation ↗</a><a href="${esc(application.officialSiteUrl)}" target="_blank" rel="noopener">Official site ↗</a></div></div></div>
    <div class="version-note">ℹ ${esc(application.versionNotes)}</div>
    <div class="environment-tabs"><button class="env-tab ${environment==='all'?'active':''}" data-env="all">All</button>${envs.map(e => `<button class="env-tab ${environment===e?'active':''}" data-env="${esc(e)}">${esc(ENV_LABELS[e] || e)}</button>`).join('')}</div>
    <nav class="section-nav">${sections.map(([key]) => `<a href="#runbook-${esc(key)}">${esc(SECTION_LABELS[key])}</a>`).join('')}</nav>
    ${sections.map(([key,steps]) => `<section id="runbook-${esc(key)}" class="runbook-section"><div class="section-heading"><span>${esc(SECTION_LABELS[key])}</span><small>${steps.length} steps</small></div>${steps.map(s => renderStep(s, application, key)).join('')}</section>`).join('')}
  </div>`;
}

export { SECTION_LABELS };

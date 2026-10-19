import { commands, categories } from './commands.js';
import { searchCommands, searchDevOps } from './search.js';
import { createDailyStore } from './daily.js';
import { getApplications, getApplicationCategories, getApplicationById } from './applications/registry.js';
import { searchApplications } from './applications/search.js';
import { renderApplicationCatalog, renderApplicationDetail } from './applications/ui.js';
import { addRunbookStepToDaily } from './applications/daily.js';

const apps = getApplications();
const appCategories = getApplicationCategories();
const dailyStore = createDailyStore();
const state = { view:'commands', query:'', category:'All', level:'All', appCategory:'all', appId:null, environment:'all', selectedCommandId:null };
const $ = s => document.querySelector(s);
const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const commandSearch = $('#global-search');

function categoryCount(name){return name==='All'?commands.length:commands.filter(c=>c.category===name).length;}
function renderSidebar(){
  $('#sideTitle').textContent = state.view === 'applications' ? 'APPLICATIONS' : state.view === 'daily' ? 'DAILY COMMANDS' : 'COMMANDS';
  if(state.view==='daily'){
    $('#sidebarNav').innerHTML = `<button class="category active" data-daily-nav="true">⭐ Daily Commands <b id="dailyNavCount">${dailyStore.list().length}</b></button>`;
    return;
  }
  if(state.view==='applications'){
    $('#sidebarNav').innerHTML = `<button class="category ${state.appCategory==='all'?'active':''}" data-app-category="all">📦 All applications <b>${apps.length}</b></button>` + appCategories.map(c=>`<button class="category ${state.appCategory===c.id?'active':''}" data-app-category="${esc(c.id)}"><span>${c.icon}</span>${esc(c.name)} <b>${apps.filter(a=>a.category===c.id).length}</b></button>`).join('');
    document.querySelectorAll('[data-app-category]').forEach(b=>b.addEventListener('click',()=>{state.appCategory=b.dataset.appCategory;state.appId=null;renderSidebar();renderApplications();}));
  } else {
    $('#sidebarNav').innerHTML = `<button class="category ${state.category==='All'?'active':''}" data-category="All">⌕ All commands <b>${commands.length}</b></button>` + categories.map(c=>`<button class="category ${state.category===c.name?'active':''}" data-category="${esc(c.name)}"><span>${c.icon}</span>${esc(c.name)} <b>${categoryCount(c.name)}</b></button>`).join('');
    document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{state.category=b.dataset.category;state.selectedCommandId=null;renderSidebar();renderCommands();}));
  }
}
function renderCommands(){
  $('#commands-view').classList.remove('hidden'); $('#applications-view').classList.add('hidden');
  $('#heroTitle').textContent='What are you trying to do?'; $('#heroText').textContent='Search commands, troubleshooting, or jump into an application runbook.';
  const pool=state.category==='All'?commands:commands.filter(c=>c.category===state.category);
  let unified=searchDevOps(pool,apps,state.query,{limit:80,applicationLimit:24});
  if(state.level!=='All') unified=unified.filter(r=>r.type==='application'||r.item.level===state.level);
  const daily=searchCommands(dailyStore.list().map(x=>({...x,category:'My Daily',subcategory:'Daily',level:'intermediate',keywords:[...(x.tags||[]),x.name,x.description||''],tags:x.tags||[],useCase:x.description||'Daily'})),state.query,{emptyResults:dailyStore.list(),limit:20});
  const results=unified.filter(r=>r.type==='command').map(r=>r.item);
  const appResults=unified.filter(r=>r.type==='application');
  $('#resultCount').textContent=results.length+appResults.length+daily.length; renderDaily();
  if(!results.length&&!appResults.length&&!daily.length){$('#results').innerHTML='<div class="empty"><h2>No command or application match</h2><p>Try <code>redis docker</code>, <code>kafka consumer lag</code>, or <code>pod crash</code>.</p></div>';return;}
  const appMarkup=appResults.length?`<section class="search-section"><div class="results-heading"><span>Application matches</span><small>${appResults.length} runbook matches</small></div>${appResults.map(renderApplicationSearchCard).join('')}</section>`:'';
  const commandMarkup=(daily.length||results.length)?`<section class="search-section"><div class="results-heading"><span>${state.query?'Command matches':'Command library'}</span><small>${results.length+daily.length} shown</small></div>${[...daily,...results].map(renderCommandCard).join('')}</section>`:'';
  $('#results').innerHTML=appMarkup+commandMarkup;
  bindCommandActions(); bindApplicationSearchActions();
} 
function renderApplicationSearchCard(r){return `<article class="card app-search-card"><div class="card-head"><div class="meta"><span class="badge">📦 ${esc(r.application.name)}</span><span class="badge">${esc(r.section)}</span></div><div class="card-actions"><span class="badge">Best match</span></div></div><h3>${esc(r.step.title)}</h3><p class="desc">${esc(r.step.description)}</p>${r.step.command?`<div class="command"><pre>${esc(r.step.command)}</pre><button class="copy" data-command="${encodeURIComponent(r.step.command)}">Copy</button></div>`:''}<button class="secondary" data-search-open="${esc(r.application.id)}">Open ${esc(r.application.name)} runbook →</button></article>`;}
function bindApplicationSearchActions(){document.querySelectorAll('[data-search-open]').forEach(b=>b.addEventListener('click',()=>{state.view='applications';state.appId=b.dataset.searchOpen;state.environment='all';document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x.dataset.view==='applications'));renderSidebar();renderApplications();}));}

function renderCommandCard(r){const selected=state.selectedCommandId===r.id?' selected-command':'';const daily=r.isDaily?`<button class="secondary" data-edit-daily="${esc(r.id)}">Edit</button>`:`<button class="secondary" data-add-daily="${esc(r.id)}">☆ Add to Daily</button>`;return `<article class="card${selected}" data-command-id="${esc(r.id)}"><div class="card-head"><div class="meta"><span class="badge">${esc(r.category)}</span><span class="badge level-${r.level}">${esc(r.level)}</span></div><div class="card-actions">${daily}</div></div><div class="command"><pre>${esc(r.command)}</pre><button class="copy" data-command="${encodeURIComponent(r.command)}">Copy</button></div><p class="desc">${esc(r.description)}</p><div class="use"><strong>Use when:</strong> ${esc(r.useCase)}</div>${r.warning?`<div class="warning">⚠ Review the target carefully before running this command.</div>`:''}</article>`;}
function bindCommandActions(){
  document.querySelectorAll('[data-command-id]').forEach(card=>card.addEventListener('click',e=>{
    if(e.target.closest('button,a,input,textarea,select')) return;
    state.selectedCommandId=card.dataset.commandId;
    document.querySelectorAll('[data-command-id].selected-command').forEach(x=>x.classList.remove('selected-command'));
    card.classList.add('selected-command');
  }));
  document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',()=>copyText(decodeURIComponent(b.dataset.command),b)));
  document.querySelectorAll('[data-add-daily]').forEach(b=>b.addEventListener('click',()=>{const x=commands.find(c=>c.id===b.dataset.addDaily);if(x){const addedBy=getDailyUserName()||setDailyUserName(window.prompt('Name to show as Added by:','')||'Unknown');dailyStore.add({name:x.description,command:x.command,category:x.category,description:x.useCase,tags:x.tags,addedBy,addedAt:new Date().toISOString()});renderDaily();renderCommands();}}));
  document.querySelectorAll('[data-edit-daily]').forEach(b=>b.addEventListener('click',()=>openDailyForm(dailyStore.list().find(x=>x.id===b.dataset.editDaily))));
}
function getDailyUserName(){
  const key='rcsDevopsDailyUserName';
  return localStorage.getItem(key)||'';
}
function setDailyUserName(name){
  const value=String(name||'').trim();
  if(value)localStorage.setItem('rcsDevopsDailyUserName',value);
  return value;
}
function renderDaily(){const items=dailyStore.list();$('#dailyCount').textContent=items.length;const nav=document.querySelector('#dailyNavCount');if(nav)nav.textContent=items.length;const top=document.querySelector('#dailyNavTopCount');if(top)top.textContent=items.length;$('#dailyList').innerHTML=items.length?items.slice(0,8).map(x=>`<button class="daily-mini" data-daily-search="${esc(x.name)}"><span>⭐</span><strong>${esc(x.name)}</strong><code>${esc(x.command)}</code></button>`).join(''):'<div class="daily-empty">No personal commands yet. Add one from any command or runbook.</div>';document.querySelectorAll('[data-daily-search]').forEach(b=>b.addEventListener('click',()=>{state.query=b.dataset.dailySearch;commandSearch.value=state.query;renderCommands();}));}
function renderDailyView(){
  $('#commands-view').classList.add('hidden');
  $('#applications-view').classList.add('hidden');
  $('#daily-view').classList.remove('hidden');
  $('#heroTitle').textContent='⭐ Daily Commands';
  $('#heroText').textContent='Your frequently used DevOps commands, with who added each command.';
  $('#dailyViewCount').textContent=`${dailyStore.list().length} saved`;
  const query=state.query.toLowerCase();
  const items=dailyStore.list().filter(x=>!query || `${x.name} ${x.command} ${x.category} ${x.addedBy||''}`.toLowerCase().includes(query));
  $('#daily-view-results').innerHTML=items.length?items.map(x=>`<article class="card daily-view-card"><div class="card-head"><div class="meta"><span class="badge daily-badge">⭐ Daily</span><span class="badge">${esc(x.category||'General')}</span></div><div class="card-actions"><span class="badge">Added by: ${esc(x.addedBy||'Unknown')}</span><button class="secondary" data-edit-daily="${esc(x.id)}">✏️ Edit</button></div></div><h3>${esc(x.name)}</h3><p class="desc">${esc(x.description||'Frequently used DevOps command.')}</p><div class="command"><pre>${esc(x.command)}</pre><button class="copy" data-command="${encodeURIComponent(x.command)}">Copy</button></div><div class="daily-meta">${x.addedAt?`Added ${esc(new Date(x.addedAt).toLocaleDateString())}`:''}${x.updatedAt&&x.updatedAt!==x.addedAt?` · Updated ${esc(new Date(x.updatedAt).toLocaleDateString())}`:''}</div></article>`).join(''):`<div class="empty"><h2>No daily commands</h2><p>Add commands with <strong>Add to Daily</strong> and they will appear here.</p></div>`;
  document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',()=>copyText(decodeURIComponent(b.dataset.command),b)));
  document.querySelectorAll('[data-edit-daily]').forEach(b=>b.addEventListener('click',()=>openDailyForm(dailyStore.list().find(x=>x.id===b.dataset.editDaily))));
}
function renderApplications(){
  $('#commands-view').classList.add('hidden'); $('#applications-view').classList.remove('hidden');
  $('#heroTitle').textContent=state.appId?getApplicationById(state.appId)?.name||'Application Runbook':'Application Hub';
  $('#heroText').textContent=state.appId?'Installation → configuration → health → daily operations → troubleshooting → production guidance.':'Production-oriented runbooks for the applications DevOps teams use every day.';
  $('#application-toolbar').innerHTML=state.appId?'<button class="app-filter" id="backApps">← All Applications</button>':appCategories.map(c=>`<button class="app-filter ${state.appCategory===c.id?'active':''}" data-app-filter="${c.id}">${c.icon} ${esc(c.name)}</button>`).join('');
  if(state.appId){$('#application-results').innerHTML=renderApplicationDetail(getApplicationById(state.appId),state.environment);bindRunbookActions();$('#backApps').addEventListener('click',()=>{state.appId=null;state.environment='all';renderApplications();renderSidebar();});document.querySelectorAll('.env-tab').forEach(b=>b.addEventListener('click',()=>{state.environment=b.dataset.env;renderApplications();}));}
  else {$('#application-results').innerHTML=renderApplicationCatalog(apps,state.appCategory);document.querySelectorAll('[data-open-app]').forEach(b=>b.addEventListener('click',()=>{state.appId=b.dataset.openApp;state.environment='all';renderApplications();}));document.querySelectorAll('[data-app-filter]').forEach(b=>b.addEventListener('click',()=>{state.appCategory=b.dataset.appFilter;renderApplications();renderSidebar();}));}
}
function bindRunbookActions(){
  document.querySelectorAll('.copy-runbook').forEach(b=>b.addEventListener('click',()=>copyText(decodeURIComponent(b.dataset.command),b)));
  document.querySelectorAll('.add-runbook-daily').forEach(b=>b.addEventListener('click',()=>{const app=getApplicationById(b.dataset.appId);const step=Object.values(app.sections).flat().find(s=>s.id===b.dataset.stepId);if(step){const addedBy=getDailyUserName()||setDailyUserName(window.prompt('Name to show as Added by:','')||'Unknown');const item={...addRunbookStepToDaily(step,app),addedBy,addedAt:new Date().toISOString()};dailyStore.add(item);renderDaily();b.textContent='✓ Added';}}));
}
async function copyText(text,button){try{await navigator.clipboard.writeText(text);button.textContent='Copied!';setTimeout(()=>button.textContent='Copy',1000);}catch{button.textContent='Copy failed';}}
function openDailyForm(item){$('#dailyFormTitle').textContent=item?'Edit Daily Command':'Add Daily Command';$('#dailyId').value=item?.id||'';$('#dailyName').value=item?.name||'';$('#dailyCommand').value=item?.command||'';$('#dailyCategory').value=item?.category||'General';$('#dailyTags').value=(item?.tags||[]).join(', ');$('#dailyDescription').value=item?.description||'';$('#dailyAddedBy').value=item?.addedBy||getDailyUserName();$('#dailyAddedBy').readOnly=Boolean(item);$('#dailyModal').showModal();}
$('#addDaily').addEventListener('click',()=>openDailyForm());$('#dailyCancel').addEventListener('click',()=>$('#dailyModal').close());$('#dailyCancel2').addEventListener('click',()=>$('#dailyModal').close());
$('#dailyForm').addEventListener('submit',e=>{e.preventDefault();const id=$('#dailyId').value;const data={name:$('#dailyName').value,command:$('#dailyCommand').value,category:$('#dailyCategory').value,description:$('#dailyDescription').value,tags:$('#dailyTags').value.split(',').map(x=>x.trim()).filter(Boolean)};if(id){dailyStore.update(id,data);}else{const addedBy=setDailyUserName($('#dailyAddedBy').value)||'Unknown';dailyStore.add({...data,addedBy,addedAt:new Date().toISOString()});}$('#dailyModal').close();renderCommands();if(state.view==='daily')renderDailyView();});

document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{state.view=b.dataset.view;state.appId=null;state.query='';commandSearch.value='';document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x===b));renderSidebar();state.view==='applications'?renderApplications():state.view==='daily'?renderDailyView():renderCommands();}));
function renderApplicationSearchResults(query){
  const normalized = String(query ?? '').trim();
  if(!normalized){ renderApplications(); return; }

  const unified = searchDevOps(commands, apps, normalized, {
    limit: 80,
    applicationLimit: 40
  });
  const appResults = unified.filter(r => r.type === 'application');

  if(!appResults.length){
    $('#application-results').innerHTML='<div class="empty"><h2>No application match</h2><p>Try <code>install kafka ubuntu</code>, <code>redis docker</code>, or <code>kafka consumer lag</code>.</p></div>';
    return;
  }

  const cards = appResults.map(r => renderApplicationSearchCard(r)).join('');
  $('#application-results').innerHTML =
    '<section class="search-section"><div class="results-heading"><span>Application matches</span><small>' +
    appResults.length +
    ' runbook matches</small></div>' +
    cards +
    '</section>';

  bindCommandActions();
  bindApplicationSearchActions();
}
commandSearch.addEventListener('input',()=>{state.query=commandSearch.value.trim();state.selectedCommandId=null;if(state.view==='applications'){state.query?renderApplicationSearchResults(state.query):renderApplications();}else if(state.view==='daily'){renderDailyView();}else renderCommands();});
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{state.level=b.dataset.level;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderCommands();}));
document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click',()=>{state.query=b.dataset.query;state.selectedCommandId=null;commandSearch.value=state.query;renderCommands();commandSearch.focus();}));
$('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));window.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==commandSearch){e.preventDefault();commandSearch.focus();}});
$('#appCount').textContent=apps.length;renderSidebar();renderCommands();

$('#dailyAddFromView')?.addEventListener('click',()=>openDailyForm());

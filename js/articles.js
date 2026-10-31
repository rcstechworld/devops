const state = { articles: [], category: 'All', query: '', visible: 12 };
const $ = (selector) => document.querySelector(selector);
const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const dateLabel = (value) => {
  if (!value) return 'Date unavailable';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'Date unavailable' : new Intl.DateTimeFormat('en-IN', { day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Kolkata' }).format(date);
};
const categoryFor = (article) => {
  const raw = `${article.category || ''} ${article.title || ''} ${article.summary || ''}`.toLowerCase();
  if (/cve|vulnerab|security|malware|credential|exploit|patch|supply.chain/.test(raw)) return 'Security';
  if (/kubernetes|\baks\b|\beks\b|kubelet|kubectl|helm|container orchestration/.test(raw)) return 'Kubernetes';
  if (/observability|prometheus|grafana|opentelemetry|telemetry|monitoring|logging|tracing/.test(raw)) return 'Observability';
  if (/pipeline|ci\/cd|github actions|runner|continuous integration|continuous delivery|build system/.test(raw)) return 'CI/CD';
  if (/azure|\baws\b|\bgcp\b|cloud|amazon web services/.test(raw)) return 'Cloud';
  return 'DevOps';
};
const normalize = (article) => ({
  title: article.title || 'Untitled article',
  url: article.url || article.link || '#',
  summary: article.summary || article.description || 'Open the original source to read the full article.',
  published: article.published || article.date || '',
  source: article.source || 'DevOps source',
  category: categoryFor(article)
});
function articleCard(article) {
  return `<article class="article-card"><div class="card-top"><span class="category-tag">${esc(article.category)}</span><time class="article-date">${esc(dateLabel(article.published))}</time></div><h3>${esc(article.title)}</h3><p>${esc(article.summary)}</p><div class="card-bottom"><span class="source-name">${esc(article.source)}</span><a class="card-link" href="${esc(article.url)}" target="_blank" rel="noopener noreferrer">Read original ↗</a></div></article>`;
}
function featuredCard(article) {
  return `<article class="featured-card"><div class="featured-copy"><div class="article-kicker"><span class="category-tag">Featured · ${esc(article.category)}</span><time>${esc(dateLabel(article.published))}</time><span>${esc(article.source)}</span></div><h3>${esc(article.title)}</h3><p>${esc(article.summary)}</p><a class="read-link" href="${esc(article.url)}" target="_blank" rel="noopener noreferrer">Read the original article <span>↗</span></a></div><div class="featured-art" aria-hidden="true"><div class="art-code"><span>$</span> kubectl get pods<br><span>✓</span> deployment ready<br><span>$</span> git status</div></div></article>`;
}
function filteredArticles() {
  const query = state.query.trim().toLowerCase();
  return state.articles.filter((article) => {
    const categoryMatch = state.category === 'All' || article.category === state.category;
    const textMatch = !query || `${article.title} ${article.summary} ${article.source} ${article.category}`.toLowerCase().includes(query);
    return categoryMatch && textMatch;
  });
}
function render() {
  const items = filteredArticles();
  const featured = $('#featuredArticle');
  const grid = $('#articleGrid');
  const empty = $('#emptyState');
  const more = $('#loadMore');
  const shouldFeature = state.category === 'All' && !state.query.trim() && items.length > 0;
  featured.innerHTML = shouldFeature ? featuredCard(items[0]) : '';
  const list = shouldFeature ? items.slice(1, state.visible) : items.slice(0, state.visible);
  grid.innerHTML = list.map(articleCard).join('');
  empty.hidden = items.length > 0;
  more.hidden = list.length >= (shouldFeature ? items.length - 1 : items.length);
  more.textContent = 'Load more articles ↓';
  if (!items.length) more.hidden = true;
  $('#feedStatus').innerHTML = `<span class="status-dot"></span><span>${state.articles.length} articles · source links verified in feed</span>`;
}
async function loadArticles() {
  try {
    const response = await fetch(`articles.json?updated=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Article feed not available');
    const payload = await response.json();
    const raw = Array.isArray(payload) ? payload : payload.articles;
    if (!Array.isArray(raw)) throw new Error('Invalid article feed');
    state.articles = raw.map(normalize).filter((article) => article.url.startsWith('https://') || article.url.startsWith('http://'));
    state.articles.sort((a,b) => new Date(b.published || 0) - new Date(a.published || 0));
    const updated = payload.updatedAt ? ` · updated ${dateLabel(payload.updatedAt)}` : '';
    $('#feedStatus').innerHTML = `<span class="status-dot"></span><span>${state.articles.length} articles${updated}</span>`;
    render();
  } catch (error) {
    state.articles = [];
    $('#feedStatus').innerHTML = '<span class="status-dot" style="background:#f1b56b"></span><span>Feed not loaded — refresh after feed sync</span>';
    $('#emptyState').hidden = false;
    $('#emptyState').innerHTML = '<strong>Latest feed is temporarily unavailable.</strong><p>The articles feed is refreshed by the scheduled GitHub workflow. Try again later or browse the trusted sources below.</p>';
    $('#articleGrid').innerHTML = '';
    $('#featuredArticle').innerHTML = '';
    $('#loadMore').hidden = true;
  }
}
$('#articleSearch').addEventListener('input', (event) => { state.query = event.target.value; state.visible = 12; render(); });
$('#categoryFilters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.category = button.dataset.category;
  state.visible = 12;
  document.querySelectorAll('.filter').forEach((item) => item.classList.toggle('active', item === button));
  render();
});
$('#loadMore').addEventListener('click', () => { state.visible += 9; render(); });
document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); $('#articleSearch').focus(); }
  if (event.key === 'Escape' && document.activeElement === $('#articleSearch')) { $('#articleSearch').value = ''; state.query = ''; render(); $('#articleSearch').blur(); }
});
loadArticles();

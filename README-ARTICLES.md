# RCS-DevOps Articles & News

This feature adds a standalone `articles.html` page for the RCS-DevOps static site.

## Features
- Responsive dark DevOps news layout
- Search and category filters
- Featured latest story and article cards
- Original-source links and publication dates
- Seed feed included so the page has content on first deployment
- Scheduled RSS/Atom refresh through GitHub Actions

## Automatic refresh
`.github/workflows/update-articles.yml` runs daily at 11:00 IST and can also be started manually from GitHub Actions. It fetches public RSS/Atom feeds and writes `articles.json`; the workflow commits the updated feed to the repository for GitHub Pages to serve.

Sources configured in `scripts/fetch_articles.py`:
- DevOps.com and DEVOPSdigest
- Kubernetes Blog
- Microsoft Azure Blog
- AWS What's New
- Google Cloud Blog
- Linux Foundation
- GitHub Blog and changelog destination
- Docker Blog
- Cloudflare Blog
- CNCF Blog
- GitLab Blog
- HashiCorp Blog
- The New Stack
- Helm Blog
- Argo Project Blog
- Kubernetes official CVE feed
- Hacker News front-page RSS

Additional curated destinations shown on the page:
- Forbes CNCF/Kubernetes article and the supplied Azure, AWS and Linux Foundation feature articles are publisher links, not live feeds.
- Hacker News Jobs and Reddit r/DevOps are community destinations, not automatically imported news feeds. Hacker News front-page items are imported as a community feed; user-submitted links should be independently verified.
- The supplied Render dashboard URL is intentionally excluded because it is a private deployment-console URL, not a public article source.

If a source feed is temporarily unavailable, other successful feeds are still used. The script refuses to publish an entirely empty feed.

## Deployment
1. Copy the files/folders in this patch into the root of the existing repository, preserving paths.
2. Commit and push to the branch configured for GitHub Pages.
3. In GitHub, open **Settings → Pages** and confirm Pages is publishing from that branch/folder.
4. Open `https://devops.rcstechworld.in/articles.html` after the deployment finishes.
5. Open **Actions → Update DevOps articles → Run workflow** once to fetch the current feeds immediately. The workflow also runs daily automatically.

The site only displays short summaries and links readers to original publishers. Verify important operational or security information with the source before changing production systems.

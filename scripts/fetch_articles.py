#!/usr/bin/env python3
"""Fetch public RSS/Atom feeds and write a compact static articles.json for GitHub Pages."""
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from html.parser import HTMLParser
import json
import re
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "articles.json"
MAX_PER_SOURCE = 35
MAX_TOTAL = 150
USER_AGENT = "RCS-DevOps-ArticlesBot/1.0 (+https://devops.rcstechworld.in)"
FEEDS = [
    ("DevOps.com", "https://devops.com/feed/"),
    ("DEVOPSdigest", "https://devopsdigest.com/feed/"),
    ("Kubernetes Blog", "https://kubernetes.io/feed.xml"),
    ("Microsoft Azure Blog", "https://azure.microsoft.com/en-us/blog/feed/"),
    ("AWS What's New", "https://aws.amazon.com/about-aws/whats-new/recent/feed/"),
    ("Google Cloud Blog", "https://cloudblog.withgoogle.com/rss/"),
    ("Linux Foundation", "https://www.linuxfoundation.org/blog/rss.xml"),
    ("GitHub Blog", "https://github.blog/feed/"),
    ("Docker Blog", "https://www.docker.com/blog/feed/"),
    ("Cloudflare Blog", "https://blog.cloudflare.com/rss/"),
    ('CNCF Blog', 'https://www.cncf.io/feed/'),
    ('GitLab Blog', 'https://about.gitlab.com/atom.xml'),
    ('HashiCorp Blog', 'https://www.hashicorp.com/blog/feed.xml'),
    ('The New Stack', 'https://thenewstack.io/feed/'),
    ('Helm Blog', 'https://helm.sh/blog/rss.xml'),
    ('Argo Project Blog', 'https://blog.argoproj.io/feed'),
    ('Hacker News', 'https://news.ycombinator.com/rss'),
    ('Kubernetes Security Advisories', 'https://k8s.io/docs/reference/issues-security/official-cve-feed/feed.xml'),
]

class TextOnly(HTMLParser):
    def __init__(self):
        super().__init__(); self.parts = []
    def handle_data(self, data):
        self.parts.append(data)

def clean_text(value, limit=480):
    parser = TextOnly()
    try: parser.feed(value or "")
    except Exception: pass
    text = unescape(" ".join(parser.parts))
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) > limit: text = text[:limit].rsplit(" ", 1)[0].rstrip(".,;: ") + "…"
    return text

def local_name(tag):
    return tag.rsplit("}", 1)[-1].lower()

def child_text(element, names):
    for child in element.iter():
        if child is element: continue
        if local_name(child.tag) in names and child.text and child.text.strip():
            return child.text.strip()
    return ""

def item_url(item):
    for child in item:
        if local_name(child.tag) == "link":
            href = child.attrib.get("href", "").strip()
            value = (child.text or "").strip()
            candidate = href or value
            if candidate.startswith("http://") or candidate.startswith("https://"):
                return candidate
    guid = child_text(item, {"guid", "id"})
    return guid if guid.startswith(("http://", "https://")) else ""

def parse_date(value):
    if not value: return ""
    value = value.strip()
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        try: parsed = parsedate_to_datetime(value)
        except (TypeError, ValueError, OverflowError): return ""
    if parsed.tzinfo is None: parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")

def fetch_feed(source, url):
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml"})
    with urllib.request.urlopen(request, timeout=25) as response:
        data = response.read(5_000_000)
    root = ET.fromstring(data)
    results = []
    for item in root.iter():
        if local_name(item.tag) not in {"item", "entry"}: continue
        title = child_text(item, {"title"})
        link = item_url(item)
        if not title or not link: continue
        summary = child_text(item, {"description", "summary", "encoded", "content"})
        published = child_text(item, {"pubdate", "published", "updated", "date", "issued"})
        results.append({"title": clean_text(title, 220), "url": link, "summary": clean_text(summary, 440), "published": parse_date(published), "source": source})
        if len(results) >= MAX_PER_SOURCE: break
    return results

def main():
    collected, failures = [], []
    for source, url in FEEDS:
        try:
            entries = fetch_feed(source, url)
            collected.extend(entries)
            print(f"OK {source}: {len(entries)} articles")
        except (urllib.error.URLError, TimeoutError, ET.ParseError, ValueError) as exc:
            failures.append(f"{source}: {exc}")
            print(f"WARN {source}: {exc}")
    unique, seen = [], set()
    for article in collected:
        key = article["url"].rstrip("/").lower()
        if key in seen: continue
        seen.add(key)
        if not article["published"]:
            article["published"] = ""
        unique.append(article)
    unique.sort(key=lambda article: article["published"] or "", reverse=True)
    payload = {"updatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"), "articles": unique[:MAX_TOTAL], "sources": [{"name": name, "feed": url} for name, url in FEEDS], "feedWarnings": failures}
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {min(len(unique), MAX_TOTAL)} unique articles to {OUT}")
    # The scheduled workflow must not overwrite a healthy feed with an empty response.
    if not unique:
        raise SystemExit("No feed items retrieved; refusing to publish an empty feed")

if __name__ == "__main__": main()

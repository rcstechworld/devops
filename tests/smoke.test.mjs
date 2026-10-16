
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync("index.html", "utf8");

test("dashboard contains global search and result regions", () => {
  assert.match(html, /id="global-search"/);
  assert.match(html, /id="results"/);
  assert.match(html, /id="sidebarNav"/);
  assert.match(html, /js\/app\.js/);
  assert.match(html, /css\/styles\.css/);
});

test("referenced static assets exist", () => {
  assert.ok(fs.existsSync("js/app.js"));
  assert.ok(fs.existsSync("js/search.js"));
  assert.ok(fs.existsSync("js/commands.js"));
  assert.ok(fs.existsSync("css/styles.css"));
});

test("command library is substantial", async () => {
  const { commands } = await import("../js/commands.js");
  assert.ok(commands.length >= 100);
});

test("dashboard is branded DHD-DevOps and exposes daily commands UI", () => {
  const html = fs.readFileSync("index.html", "utf8");
  assert.match(html, /DHD-DevOps/);
  assert.match(html, /dailyCommands/);
  assert.match(html, /addDaily/);
});

test("daily command modal has required fields", () => {
  assert.match(html, /id="dailyModal"/);
  assert.match(html, /id="dailyName"/);
  assert.match(html, /id="dailyCommand"/);
  assert.match(html, /id="dailyForm"/);
});

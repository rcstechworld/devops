
import test from "node:test";
import assert from "node:assert/strict";
import { searchCommands } from "../js/search.js";
import { commands } from "../js/commands.js";

test("k8s pod crash finds Kubernetes troubleshooting commands", () => {
  const results = searchCommands(commands, "k8s pod crash");
  assert.ok(results.length > 0);
  assert.ok(results.some(r => r.command.includes("kubectl logs") || r.command.includes("kubectl describe")));
});

test("docker clean finds Docker cleanup commands", () => {
  const results = searchCommands(commands, "docker clean");
  assert.ok(results.some(r => r.command.includes("docker system prune")));
});

test("linux memory finds memory commands", () => {
  const results = searchCommands(commands, "linux memory");
  assert.ok(results.some(r => r.command.includes("free -h") || r.command.includes("vmstat")));
});

test("aks nodes finds AKS node commands", () => {
  const results = searchCommands(commands, "aks nodes");
  assert.ok(results.some(r => r.category === "AKS" && r.command.includes("nodepool")));
});

test("search is case insensitive", () => {
  const a = searchCommands(commands, "DOCKER CLEAN");
  const b = searchCommands(commands, "docker clean");
  assert.deepEqual(a.map(x => x.id), b.map(x => x.id));
});

test("unknown query returns no results", () => {
  assert.deepEqual(searchCommands(commands, "qzxv totally nonexistent"), []);
});

test("python high cpu finds Python application troubleshooting commands", () => {
  const results = searchCommands(commands, "python high cpu");
  assert.ok(results.some(r => r.category === "Python" && /ps|top|py-spy|pidstat/i.test(r.command)));
});

test("java oom finds JVM memory troubleshooting commands", () => {
  const results = searchCommands(commands, "java oom");
  assert.ok(results.some(r => r.category === "Java" && /jcmd|jmap|jstat|jps/i.test(r.command)));
});

test("dotnet memory finds .NET diagnostics commands", () => {
  const results = searchCommands(commands, "dotnet memory");
  assert.ok(results.some(r => r.category === ".NET" && /dotnet-(counters|dump|trace)/i.test(r.command)));
});

test("spring boot startup finds Java application commands", () => {
  const results = searchCommands(commands, "spring boot startup");
  assert.ok(results.some(r => r.category === "Java" && /journalctl|curl|java|jcmd/i.test(r.command)));
});

test("node heap finds Node.js troubleshooting commands", () => {
  const results = searchCommands(commands, "node heap out of memory");
  assert.ok(results.some(r => r.category === "Node.js" && /node|npm|pm2/i.test(r.command)));
});

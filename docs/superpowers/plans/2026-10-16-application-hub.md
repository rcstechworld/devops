# Full Application Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static, searchable DHD-DevOps Application Hub covering a broad DevOps application catalog with installation, configuration, verification, daily operations, maintenance, and troubleshooting runbooks.

**Architecture:** Reconstruct the currently minimal workspace as a small vanilla HTML/CSS/ES-module application, keeping application data, runbook rendering, search, and persistence separated. Application content is static data under `js/applications/`, while the UI consumes a stable schema so new applications can be added without renderer changes.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript ES modules, browser localStorage, Node.js built-in test runner, Python `http.server` for local static verification on port 9099.

**Spec:** `docs/superpowers/specs/2026-10-16-application-hub-design.md`

## Global Constraints

- The hub is static/client-side; no backend or database is introduced.
- Installation/environment variants are explicit: Ubuntu/Debian, RHEL-family where applicable, Docker/Compose where applicable, Kubernetes, and Helm where applicable.
- Every application uses the common runbook structure defined by the spec.
- Installation commands identify platform/method and version context when relevant; official project documentation is the source of truth for changing installation details.
- Destructive commands are visibly marked and examples contain no real secrets.
- Application commands support Copy and Add to Daily.
- Existing command-library search and Daily Commands behavior must remain functional.
- The site must work through the local static server workflow on port 9099.

## Review Focus

1. Search terms that match a runbook step rather than an application name must surface the application and step — covered by application search tests.
2. An application missing a platform/section must not render fabricated commands — covered by schema validation and renderer tests.
3. Destructive commands must retain warning metadata through search and rendering — covered by safety metadata tests.
4. Placeholder credentials must remain placeholders and never become real-looking secrets — covered by content validation tests.
5. Existing command-library/Daily Commands behavior must survive application integration — covered by regression/smoke tests.

---

### Task 1: Re-establish the static app foundation

**Files:**
- Modify: `index.html`
- Create: `package.json`
- Create: `css/styles.css`
- Create: `js/app.js`
- Create: `tests/smoke.test.mjs`

**Interfaces:**
- Produces the browser shell and testable DOM anchors used by later tasks: `#app`, `#global-search`, `#commands-view`, `#applications-view`, and application navigation controls.

- [ ] **Step 1: Write the failing smoke test** asserting the required shell anchors and static asset references exist.
- [ ] **Step 2: Run `node --test tests/smoke.test.mjs` and verify it fails because the shell is incomplete.**
- [ ] **Step 3: Implement the minimal HTML/CSS/entry module and package metadata.**
- [ ] **Step 4: Run the smoke test and verify it passes.**
- [ ] **Step 5: Start `python3 -m http.server 9099 --bind 127.0.0.1` and verify `curl -I http://127.0.0.1:9099` returns HTTP 200.**

### Task 2: Define and validate the runbook schema

**Files:**
- Create: `js/applications/schema.js`
- Create: `tests/applications-schema.test.mjs`

**Interfaces:**
- Produces `validateApplication(application)` returning `{ valid, errors }`.
- Produces `validateStep(step)` returning `{ valid, errors }`.

- [ ] **Step 1: Write failing tests for required application fields, required section shape, environment/method metadata, step command metadata, and rejection of malformed records.**
- [ ] **Step 2: Run the schema tests and verify the expected failures.**
- [ ] **Step 3: Implement `validateApplication()` and `validateStep()` with no framework dependency.**
- [ ] **Step 4: Run schema tests and verify they pass.**

### Task 3: Build the application registry and category model

**Files:**
- Create: `js/applications/registry.js`
- Create: `js/applications/catalog.js`
- Create: `tests/applications-registry.test.mjs`

**Interfaces:**
- `getApplications()` returns the complete application array.
- `getApplicationById(id)` returns one application or `null`.
- `getApplicationCategories()` returns category metadata.
- `getApplicationsByCategory(categoryId)` returns matching applications.

- [ ] **Step 1: Write failing tests covering the full initial catalog categories, unique IDs, lookup behavior, and minimum catalog breadth from the spec.**
- [ ] **Step 2: Run the registry tests and verify they fail because the registry/catalog are absent.**
- [ ] **Step 3: Implement the registry and category index.**
- [ ] **Step 4: Run registry tests and verify they pass.**

### Task 4: Add the application content library

**Files:**
- Create: `js/applications/messaging.js`
- Create: `js/applications/search-logging.js`
- Create: `js/applications/data-cache.js`
- Create: `js/applications/observability.js`
- Create: `js/applications/proxy-gateway.js`
- Create: `js/applications/storage.js`
- Create: `js/applications/cicd-devops.js`
- Create: `js/applications/platform.js`
- Create: `js/applications/security.js`
- Create: `js/applications/infrastructure.js`
- Modify: `js/applications/catalog.js`
- Create: `tests/applications-content.test.mjs`

**Interfaces:**
- Each category module exports application records conforming to Task 2.
- `catalog.js` combines category modules without changing their records.

- [ ] **Step 1: Write failing content tests for every catalog application having the common runbook sections, explicit applicable environments, documentation links, searchable keywords, and non-fabricated placeholders.**
- [ ] **Step 2: Run content tests and verify they fail because the records are absent/incomplete.**
- [ ] **Step 3: Add runbooks for the complete initial catalog, using official project documentation as the source for installation details and marking version-sensitive content appropriately.**
- [ ] **Step 4: Add warning metadata to destructive operations and placeholder variables for credentials/hosts.**
- [ ] **Step 5: Run content tests and verify they pass.**

### Task 5: Add runbook search and natural-language matching

**Files:**
- Create: `js/applications/search.js`
- Create: `tests/applications-search.test.mjs`
- Modify: `js/app.js`

**Interfaces:**
- `searchApplications(applications, query, options)` returns ranked results containing application metadata and matching step references.
- Search fields include application name/category/description/tags plus step title/description/command/keywords/use-case metadata.

- [ ] **Step 1: Write failing tests for intent queries such as `install kafka ubuntu`, `redis docker`, `rabbitmq create user`, `kafka consumer lag`, `elasticsearch health`, and `postgres backup`.**
- [ ] **Step 2: Run the search tests and verify they fail.**
- [ ] **Step 3: Implement tokenization/ranking for application and step metadata while preserving exact/high-value matches.**
- [ ] **Step 4: Integrate application results into the global search flow.**
- [ ] **Step 5: Run application-search and existing search regression tests and verify all pass.**

### Task 6: Build the Applications navigation and catalog UI

**Files:**
- Modify: `index.html`
- Modify: `css/styles.css`
- Create: `js/applications/ui.js`
- Modify: `js/app.js`
- Create: `tests/applications-ui.test.mjs`

**Interfaces:**
- `renderApplicationCatalog(container, applications, state)` renders categories and application cards.
- `renderApplicationDetail(container, application, state)` renders the selected application runbook.
- `setApplicationView(state)` switches catalog/detail/environment state without page reload.

- [ ] **Step 1: Write failing UI tests for Applications navigation, category filtering, application selection, environment tabs, and section navigation.**
- [ ] **Step 2: Run UI tests and verify failure.**
- [ ] **Step 3: Implement catalog cards and detail view with accessible buttons/links.**
- [ ] **Step 4: Implement environment and section filtering so only applicable content is shown.**
- [ ] **Step 5: Run UI tests and verify they pass.**

### Task 7: Add command cards, copy, warnings, and Daily Commands integration

**Files:**
- Modify: `js/applications/ui.js`
- Create: `js/daily.js`
- Modify: `js/app.js`
- Create: `tests/daily-integration.test.mjs`

**Interfaces:**
- `copyRunbookCommand(step)` copies the exact command text and reports success/failure to the UI.
- `addRunbookStepToDaily(step, application)` converts a runbook step into the existing Daily Commands record format.
- `loadDailyCommands()` / `saveDailyCommands(commands)` persist browser-local Daily Commands.

- [ ] **Step 1: Write failing tests for Copy, Add to Daily, localStorage persistence, duplicate handling, and warning display.**
- [ ] **Step 2: Run the tests and verify failure.**
- [ ] **Step 3: Implement Daily persistence and the runbook-to-daily adapter.**
- [ ] **Step 4: Add Copy and Add to Daily controls to every actionable runbook command card.**
- [ ] **Step 5: Run integration tests and verify they pass.**

### Task 8: Add maintenance/troubleshooting UX and safety presentation

**Files:**
- Modify: `js/applications/ui.js`
- Modify: `css/styles.css`
- Create: `tests/applications-safety.test.mjs`

**Interfaces:**
- Warning-bearing steps render an explicit warning state before the command.
- Troubleshooting steps render symptom, diagnosis, command/action, and expected result fields where supplied.

- [ ] **Step 1: Write failing tests for destructive command warnings, placeholder credentials, and troubleshooting sections.**
- [ ] **Step 2: Run the tests and verify failure.**
- [ ] **Step 3: Implement safety/troubleshooting presentation.**
- [ ] **Step 4: Run safety tests and verify they pass.**

### Task 9: Regression, accessibility, and local-server verification

**Files:**
- Modify: `README.md`
- Create: `tests/regression.test.mjs`

**Interfaces:**
- No new public API; validates all prior interfaces together.

- [ ] **Step 1: Write failing regression tests proving command-library search and Daily Commands remain usable alongside Applications.**
- [ ] **Step 2: Run the regression tests and verify failure before integration fixes.**
- [ ] **Step 3: Implement any compatibility fixes required by the combined app.**
- [ ] **Step 4: Run the complete Node test suite and verify zero failures.**
- [ ] **Step 5: Start the static server on port 9099 and verify the root page, JavaScript modules, and key navigation assets return HTTP 200.**
- [ ] **Step 6: Update README with Application Hub usage, local run instructions, content structure, and how to add an application.**

### Task 10: Final content/quality verification

**Files:**
- Create: `tests/application-catalog-quality.test.mjs`

**Interfaces:**
- Catalog-quality test suite validates the shipped application set without changing runtime APIs.

- [ ] **Step 1: Write failing quality tests for duplicate application IDs, missing official references, empty daily-operation sections, malformed commands, and unsafe credential literals.**
- [ ] **Step 2: Run the quality tests and verify any content gaps.**
- [ ] **Step 3: Fix content-only issues without weakening validation.**
- [ ] **Step 4: Run the full suite again and verify all tests pass.**
- [ ] **Step 5: Run final static-server verification on `127.0.0.1:9099`.**

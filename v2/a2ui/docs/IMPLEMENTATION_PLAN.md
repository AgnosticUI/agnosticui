# Implementation Tracking Plan: AgnosticUI A2UI v1.0 Refactor

- **Branch:** `A2UI-experiment`
- **Architecture Spec:** `v2/a2ui/docs/PRD-A2UI-REFACTOR.md`
- **Session Boot Capsule:** `v2/a2ui/docs/NEXT_PROMPT.md`
- **Overall Status:** Phase 1 ✅ | Phase 2 ✅ | Phase 3 ⏳ (Task 3.1 ✅ | Next: Task 3.2) | Phase 4 ⬜

---

## Table of Contents

- [Phase 1: Scaffold, Mock Harness & Reference Components](#phase-1-scaffold-mock-harness--reference-components)
- [Phase 2: Deterministic AST Codegen & MVP Component Suite](#phase-2-deterministic-ast-codegen--mvp-component-suite)
- [Phase 3: FACE Validation Function, Two-Way Form Specs & 20-Skin Demo](#phase-3-face-validation-function-two-way-form-specs--20-skin-demo)
- [Phase 4: Skill Generation, Site Docs, npm Publish & Ecosystem PR](#phase-4-skill-generation-site-docs-npm-publish--ecosystem-pr)

---

## Phase 1: Scaffold, Mock Harness & Reference Components

* **Task 1.1 — Workspace Scaffold & Dependency Alignment** ✅
  * **Micro-Chunk 1.1a:** Created `v2/a2ui/renderers/lit/package.json` pinned to `@a2ui/lit@0.15.0`, `@a2ui/web_core@0.15.0`, and `zod@^3.25.76`.
  * **Micro-Chunk 1.1b:** Configured `v2/a2ui/renderers/lit/vitest.config.ts` with `jsdom` and `resolve.dedupe` for `lit` and `zod`.
* **Task 1.2 — Zero-LLM Mock Stream Harness & Surface Proof** ✅
  * **Micro-Chunk 1.2a:** Implemented `v2/a2ui/renderers/lit/src/harness/mock-stream.ts` (`createMockA2uiStream`).
  * **Micro-Chunk 1.2b:** Verified `<a2ui-surface>` Light-DOM rendering with `MessageProcessor` in `v2/a2ui/renderers/lit/src/catalog.spec.ts`.

---

## Phase 2: Deterministic AST Codegen & MVP Component Suite

* **Task 2.1 — `ts-morph` Catalog & Wrapper Generator** ✅
  * **Micro-Chunk 2.1a:** Ported `v2/sdui/schema/scripts/codegen.config.ts` to `v2/a2ui/catalog/scripts/codegen.config.ts`.
  * **Micro-Chunk 2.1b:** Built `v2/a2ui/catalog/scripts/generate-catalog.ts` emitting `AgText` + 14 MVP `Ag*` wrappers (`AgAlert`, `AgAvatar`, `AgBadge`, `AgButton`, `AgCard`, `AgCheckbox`, `AgDivider`, `AgFieldset`, `AgHeader`, `AgInput`, `AgRadio`, `AgSelect`, `AgTabs`, `AgTag`) with `ifDefined` reflected prop guards and two-way `setValue`/`setChecked` handlers.
* **Task 2.2 — A2UI v1.0 JSON Schema Emission & Build Verification** ✅
  * **Micro-Chunk 2.2a:** Generated `v2/a2ui/catalog/agnosticui-catalog.json` via `AgnosticUICatalog.toJson()`.
  * **Micro-Chunk 2.2b:** Verified `npm run generate`, `npm test`, and `npm run build` pass with zero errors and committed checkpoint on `A2UI-experiment`.

---

## Phase 3: FACE Validation Function, Two-Way Form Specs & 20-Skin Demo

* **Task 3.1 — Custom Client Function `validateSurface` & Form Binding Specs** ✅
  * **Micro-Chunk 3.1a:** Inspected `@a2ui/web_core` `FunctionImplementation` contract and `v2/sdui/renderers/lit/src/test-setup.ts`.
  * **Micro-Chunk 3.1b:** Implemented `v2/a2ui/renderers/lit/src/functions/validate-surface.ts` (`AG_FACE_SELECTOR` + `reportValidity()`), added JSDOM `attachInternals` shim in `src/test-setup.ts`, and registered `ValidateSurfaceImplementation` in `generate-catalog.ts` / `catalog.ts`.
  * **Micro-Chunk 3.1c:** Added Vitest specs in `v2/a2ui/renderers/lit/src/catalog.spec.ts` verifying two-way `@path` updates (`AgInput`, `AgCheckbox`) and `validateSurface` pass/fail behavior (3/3 passing, `tsc` clean, committed).
* **Task 3.2 — 20-Skin Support Center Offline Demo** ⏳ *(Current)*
  * **Micro-Chunk 3.2a:** Run `ls -la v2/skins v2/sdui/demo-support-center > ~/Downloads/cat.txt && head -n 100 v2/skins/skin-switcher-core.js v2/sdui/demo-support-center/index.html v2/sdui/demo-support-center/package.json >> ~/Downloads/cat.txt` and inspect `~/Downloads/cat.txt` to confirm exact skin CSS paths and switcher APIs.
  * **Micro-Chunk 3.2b:** Scaffold `v2/a2ui/demos/support-center/` (`package.json`, `vite.config.ts` with `resolve.dedupe`, `index.html`, and A2UI v1.0 Support Center fixtures).
  * **Micro-Chunk 3.2c:** Wire `v2/skins/skins-bundle.css`, `skin-switcher-core.js`, Light/Dark toggle, and a live DataModel JSON inspector so all 20+ skins switch instantaneously across active A2UI surfaces.
* **Task 3.3 — Free-Tier Cloud LLM Smoke Test & Interview Demo Mode** ⬜
  * **Micro-Chunk 3.3a:** Retrieve existing API key from Google AI Studio (`://google.com`, free tier—no billing linked) and run a strictly capped **3–5 request smoke test** using a Flash model (`gemini-2.5-flash`) with `agnosticui-catalog.json` to preserve daily free-tier quota for Monday's live demo.
  * **Micro-Chunk 3.3b:** Wire an optional "Live Prompt" input into `v2/a2ui/demos/support-center/` alongside the instant offline Mock Stream presets so live API generation can be demonstrated safely with zero risk of rate-limit or Wi-Fi failure.

---

## Phase 4: Skill Generation, Site Docs, npm Publish & Ecosystem PR

* **Task 4.1 — Generate `SKILL.md` & CI Drift Check** ⬜
  * **Micro-Chunk 4.1a:** Emit `v2/a2ui/catalog/SKILL.md` from `agnosticui-catalog.json` and add `check-codegen.ts` drift check.
* **Task 4.2 — Documentation & Package Publishing** ⬜
  * **Micro-Chunk 4.2a:** Add `/docs/a2ui` guide to `v2/site/docs` (archiving `/docs/sdui`).
  * **Micro-Chunk 4.2b:** Publish `@agnosticui/a2ui-lit` and `agnosticui-catalog.json`.
* **Task 4.3 — Official `a2ui.org` Ecosystem Listing PR** ⬜
  * **Micro-Chunk 4.3a:** Fork [a2ui-project/a2ui](https://github.com), sign the Google CLA, and submit the renderer listing PR.

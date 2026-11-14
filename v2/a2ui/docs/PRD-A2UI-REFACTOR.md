# PRD: Refactoring AgnosticUI SDUI into an Official A2UI v1.0 Catalog & Renderer

- **Status:** In Progress — Milestone 1 Complete ✅ | Next: Milestone 2 (Codegen & Core 15 Components)
- **Branch:** `A2UI-experiment`
- **Owner:** AgnosticUI Maintainer
- **Target Protocol Version:** A2UI v1.0 (`"version": "1.0"`)
- **Primary Goal:** Build a spec-compliant **A2UI v1.0 Component Catalog & Web Renderer** in `v2/a2ui/` alongside the existing `v2/sdui/` prototype, and list AgnosticUI in the official [A2UI Community Projects Directory](https://a2ui.org).

---

## 1. Executive Summary & Strategic Context

AgnosticUI is pivoting from its experimental custom SDUI layer (`v2/sdui/`) to natively adopt the open-source **A2UI v1.0** standard for generative UI ([Overview](https://a2ui.org)). 

* **Non-Destructive Parallel Build:** `v2/a2ui/` lives as a top-level sibling to `v2/sdui/` (matching `v2/lib`, `v2/cli`, `v2/mcp-server`, `v2/skins`) so existing SDUI codegen, tests, and demos remain intact until cutover.
* **Multi-Framework Leverage:** Standard Web Components (`ag-*` from `agnosticui-core`) allow a single Lit/Web Component catalog in `v2/a2ui/renderers/lit/` to power `@a2ui/lit`, `@a2ui/react`, `@a2ui/angular`, and Vue.
* **Differentiated Value Proposition:** Combines A2UI v1.0 surfaces with AgnosticUI's 20+ runtime skins (`v2/skins/skins-bundle.css`), dark mode tokens, and Form-Associated Custom Element (FACE) validation (`AG_FACE_SELECTOR` + `reportValidity()`).

---

## 2. Development Environment, Post-Mortem Learnings & DX Guardrails

### Hardware & Dependency Constraints
* **Local Machine:** 2018 Intel iMac (`darwin-x64`, CPU-bound; avoid heavy local LLM inference or Docker bloat).
* **Single-Pass npm Installs (`npm/cli#4828`):** On Intel macOS with Node 24+, incremental `npm install` commands against an existing `package-lock.json` drop optional native bindings (`@rolldown/binding-darwin-x64`) and crash Vitest. Whenever `package.json` changes, always run a single clean install: `rm -rf node_modules package-lock.json && npm install`.
* **Monorepo `lit` & `zod` Deduplication:** Linking `agnosticui-core: "file:../../../lib"` alongside `@a2ui/lit@0.15.0` loads two `lit` instances unless deduplicated. Every Vitest/Vite config in `v2/a2ui/` **must** include:
  ```ts
  resolve: {
    dedupe: ['lit', '@lit/reactive-element', 'lit-html', 'lit-element', 'zod'],
  }
  ```
* **Zod v3 Alignment:** Pin `"zod": "^3.25.76"` (never Zod v4) so component schemas match `@a2ui/web_core@0.15.0`'s internal `DynamicStringSchema` / `ChildListSchema` brand.

### Mandatory DX Workflow Rules ("Never Spin Wheels")
1. **Inspect `node_modules` Ground Truth First (Never Guess APIs):**
   * Before writing code against `@a2ui/lit`, `@a2ui/web_core`, or `agnosticui-core`, dump the target `.d.ts` or `.test.js` files from `node_modules/` into `~/Downloads/cat.txt` and inspect them first.
2. **Deliver Files via Clean Copy-to-Clipboard Blocks:**
   * Never paste multi-line `cat << 'EOF'` heredocs into VS Code's integrated bash terminal (causes shell exit code 2). Provide clean copy-to-clipboard file blocks for editor pasting.
3. **Use `ifDefined()` (Not `?? nothing`) for Optional Reflected `ag-*` Props:**
   * Setting `.variant=${p.variant ?? nothing}` in Lit assigns `undefined` to the property, which triggers `reflect: true` attributes as empty strings (`variant=""`) and breaks `:host([size="md"])` CSS variable chains. Always use `ifDefined(p.variant)` from `lit/directives/if-defined.js` for optional string/enum props on `ag-*` elements.
4. **Instantiate `new A2uiSurface()` Directly in JSDOM Unit Tests:**
   * In Vitest + JSDOM, construct `const surfaceEl = new A2uiSurface()` directly rather than `document.createElement('a2ui-surface')` to avoid custom-element upgrade timing races across Vite module transforms.
5. **Zero-LLM Mock Stream Harness + Free Cloud APIs:**
   * Drive all local rendering and test suites via `src/harness/mock-stream.ts`. Use free cloud tiers (**Google AI Studio / Gemini** or **Groq**) for live prompt-to-UI smoke tests instead of local 1.5B–3B Ollama models.

---

## 3. Verified `@a2ui/*@0.15.0` v1.0 Contract Rules

1. **Envelope Version:** Every wire message must specify `"version": "1.0"`.
2. **Catalog Constructor:** Always pass `'1.0'` explicitly as the 2nd argument: `new Catalog<LitComponentApi>(AGNOSTICUI_CATALOG_ID, '1.0', components, [...BASIC_FUNCTIONS])`.
3. **Component Implementation Shape:** Export `{ name, schema, element: SubclassOfA2uiLitElement, tagName }` and call `registerUniversalElement(component)` from `@a2ui/web_core/universal` on startup.
4. **UAX #31 Component IDs:** All component `id` strings in fixtures and prompts must be valid UAX #31 identifiers (letters, digits, underscores—e.g., `cta_btn`, never hyphens like `cta-btn`).
5. **Schema Descriptions for `Catalog.toJson()`:** Annotate `$ref` properties using `.describe('REF:#/$defs/DynamicString|...')` and `.describe('REF:#/$defs/ChildList|...')` (matching `@a2ui/web_core/src/catalogs/basic/v1/components/basic_components.js`) so `AgnosticUICatalog.toJson()` emits valid `$ref` pointers.
6. **Light DOM Surface:** `<a2ui-surface>` overrides `createRenderRoot() { return this; }`, allowing host CSS tokens (`v2/skins`) and `querySelectorAll(AG_FACE_SELECTOR)` to traverse all rendered AgnosticUI elements directly.

---

## 4. Repository Layout (`v2/a2ui/`)

```text
v2/a2ui/
├── catalog/
│   ├── agnosticui-catalog.json       # Generated via AgnosticUICatalog.toJson()
│   ├── SKILL.md                      # Generated via @a2ui/agent SkillGenerator
│   └── scripts/
│       ├── codegen.config.ts         # Ported from v2/sdui/schema/scripts/codegen.config.ts
│       └── generate-catalog.ts       # ts-morph generator emitting component wrappers + catalog.json
├── renderers/
│   └── lit/
│       ├── package.json              # @agnosticui/a2ui-lit (@a2ui/lit@0.15.0 + @a2ui/web_core@0.15.0 + zod@^3.25.76)
│       ├── vitest.config.ts          # jsdom + resolve.dedupe for lit & zod
│       └── src/
│           ├── components/           # Generated A2uiLitElement wrappers (using ifDefined for optional props)
│           ├── functions/            # Client functions (validateSurface via AG_FACE_SELECTOR)
│           ├── harness/              # Zero-LLM Mock A2UI v1.0 stream player & JSON fixtures
│           ├── catalog.ts            # AgnosticUICatalog ('1.0') + registerAgnosticUICatalog()
│           ├── catalog.spec.ts       # Vitest suite (✅ passing)
│           └── index.ts
├── demos/
│   └── support-center/               # Ported from v2/sdui/demo-support-center + v2/skins switcher
└── docs/
    └── PRD-A2UI-REFACTOR.md          # This document
```

---

## 5. MVP Scope (Core 15 Components + Text Primitive)

* **Primitives & Layout (5):** `AgText` (renderer primitive), `AgCard` (✅ done), `AgFieldset`, `AgDivider`, `AgHeader`
* **Display & Feedback (4):** `AgAlert`, `AgBadge`, `AgAvatar`, `AgTag`
* **Form Inputs & Actions (5):** `AgButton` (✅ done), `AgInput`, `AgSelect`, `AgCheckbox`, `AgRadio`
* **Navigation & Containers (2):** `AgTabs`, `AgCollapsible`

---

## 6. Execution Plan & Current Progress

* **Milestone 1 — Scaffold, Mock Harness & Reference Components (`AgCard`, `AgButton`):** ✅ **COMPLETE** (`npm test` passing in 54ms).
* **Milestone 2 — Deterministic `ts-morph` Codegen & Remaining 13 MVP Components:**
  * Update `AgCard.ts` & `AgButton.ts` to use `ifDefined()` for optional reflected attributes (`variant`, `size`, `shape`, `rounded`, `mediaPosition`) and add `REF:#/$defs/...` schema descriptions so `AgnosticUICatalog.toJson()` emits clean JSON Schema.
  * Port `v2/sdui/schema/scripts/codegen.config.ts` + `codegen.ts` into `v2/a2ui/catalog/scripts/generate-catalog.ts` to stamp out the remaining 13 `A2uiLitElement` wrappers (including two-way `setValue` bindings on `AgInput`, `AgSelect`, `AgCheckbox`, `AgRadio`).
* **Milestone 3 — FACE Validation Function & 20-Skin Support Center Demo:**
  * Register `validateSurface` (wrapping `AG_FACE_SELECTOR` + `reportValidity()`) as a custom catalog function.
  * Build `v2/a2ui/demos/support-center/` wired to `createMockA2uiStream` and `v2/skins/skins-bundle.css` live theme switching.
* **Milestone 4 — Docs, npm Publish & `a2ui.org` Ecosystem PR:**
  * Publish `@agnosticui/a2ui-lit` + `agnosticui-catalog.json`, add `/docs/a2ui` to `v2/site`, and open the listing PR on `https://github.com`.

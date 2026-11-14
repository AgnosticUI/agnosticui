# PRD: Refactoring AgnosticUI SDUI into an Official A2UI v1.0 Catalog & Renderer

- **Status:** In Progress — Milestones 1 & 2 Complete ✅ | Next: Milestone 3 (FACE Validation & 20-Skin Demo)
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
* **Single-Pass npm Installs (`npm/cli#4828`):** On Intel macOS with Node 24+, incremental `npm install` commands against an existing `package-lock.json` drop optional native bindings (`@rolldown/binding-darwin-x64`) and crash Vitest. Whenever `package.json` changes, run a single clean install: `rm -rf node_modules package-lock.json && npm install`.
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
2. **Deliver Files via Clean Copy-to-Clipboard Blocks (<110 Lines / Split Parts):**
   * Never paste multi-line `cat << 'EOF'` heredocs into VS Code's integrated bash terminal (causes shell exit code 2). Split large files into numbered parts and avoid nested triple backticks inside template literals so Markdown widgets never escape.
3. **Use `ifDefined()` for Optional Reflected `ag-*` Props:**
   * Always use `ifDefined(p.variant)` from `lit/directives/if-defined.js` for optional string/enum props on `ag-*` elements so `reflect: true` attributes never render empty strings (`variant=""`).
4. **Instantiate `new A2uiSurface()` Directly in JSDOM Unit Tests:**
   * In Vitest + JSDOM, construct `const surfaceEl = new A2uiSurface()` directly rather than `document.createElement('a2ui-surface')` to avoid custom-element upgrade timing races across Vite module transforms.
5. **Two-Way Form Setter Cast & Node DOM Shim:**
   * `A2uiController` auto-generates `set<CapitalizedKey>(next)` setters on `this.controller.props` for writable `@path` bindings; cast via `as unknown as Record<string, ((v: unknown) => void) | undefined>` in generated handlers.
   * When calling `AgnosticUICatalog.toJson()` inside Node codegen scripts (`generate-catalog.ts`), shim minimal `globalThis.HTMLElement`, `customElements`, and `document` stubs prior to dynamic import.

---

## 3. Verified `@a2ui/*@0.15.0` v1.0 Contract Rules

1. **Envelope Version:** Every wire message must specify `"version": "1.0"`.
2. **Catalog Constructor:** Always pass `'1.0'` explicitly as the 2nd argument: `new Catalog<LitComponentApi>(AGNOSTICUI_CATALOG_ID, '1.0', components, [...BASIC_FUNCTIONS])`.
3. **Component Implementation Shape:** Export `{ name, schema, element: SubclassOfA2uiLitElement, tagName }` and call `registerUniversalElement(component)` from `@a2ui/web_core/universal` on startup.
4. **Action Dispatching:** `A2uiController` binds `ActionSchema` into a callable function `this.controller.props.action?.()`.
5. **UAX #31 Component IDs:** All component `id` strings in fixtures and prompts must be valid UAX #31 identifiers (letters, digits, underscores—e.g., `cta_btn`, never hyphens like `cta-btn`).
6. **Schema Descriptions for `Catalog.toJson()`:** Annotate `$ref` properties using `.describe('REF:#/$defs/DynamicString|...')` and `.describe('REF:#/$defs/ChildList|...')` so `AgnosticUICatalog.toJson()` emits valid `$ref` pointers.
7. **Light DOM Surface:** `<a2ui-surface>` overrides `createRenderRoot() { return this; }`, allowing host CSS tokens (`v2/skins`) and `querySelectorAll(AG_FACE_SELECTOR)` to traverse all rendered AgnosticUI elements directly.

---

## 4. Repository Layout (`v2/a2ui/`)

```text
v2/a2ui/
├── catalog/
│   ├── package.json                  # @agnosticui/a2ui-catalog (ts-morph + tsx + @a2ui/web_core@0.15.0)
│   ├── agnosticui-catalog.json       # Generated via AgnosticUICatalog.toJson() (✅ generated)
│   ├── SKILL.md                      # Generated via @a2ui/agent SkillGenerator (Milestone 3/4)
│   └── scripts/
│       ├── codegen.config.ts         # Ported from v2/sdui/schema/scripts/codegen.config.ts
│       └── generate-catalog.ts       # ts-morph generator emitting Lit wrappers + catalog.json (✅ working)
├── renderers/
│   └── lit/
│       ├── package.json              # @agnosticui/a2ui-lit (@a2ui/lit@0.15.0 + @a2ui/web_core@0.15.0 + zod@^3.25.76)
│       ├── vitest.config.ts          # jsdom + resolve.dedupe for lit & zod
│       └── src/
│           ├── primitives/AgText.ts  # Semantic text/heading primitive (✅ generated)
│           ├── components/Ag*.ts     # 14 MVP A2uiLitElement wrappers (✅ generated & compiled)
│           ├── functions/            # Client functions (validateSurface via AG_FACE_SELECTOR — Milestone 3)
│           ├── harness/mock-stream.ts# Zero-LLM Mock A2UI v1.0 stream player (✅ working)
│           ├── catalog.ts            # AgnosticUICatalog ('1.0') + registerAgnosticUICatalog() (✅ generated)
│           ├── catalog.spec.ts       # Vitest suite (✅ passing)
│           └── index.ts              # Generated package exports
├── demos/
│   └── support-center/               # Ported from v2/sdui/demo-support-center + v2/skins switcher (Milestone 3)
└── docs/
    ├── PRD-A2UI-REFACTOR.md          # This document
    └── NEXT_PROMPT.md                # Chronological Session Continuity Bridge Capsule
```

---

## 5. Execution Plan & Current Progress

* **Milestone 1 — Scaffold, Mock Harness & Reference Components (`AgCard`, `AgButton`):** ✅ **COMPLETE**
* **Milestone 2 — Deterministic `ts-morph` Codegen & MVP Component Suite (`AgText` + 14 `Ag*` components + `agnosticui-catalog.json`):** ✅ **COMPLETE** (`npm run generate`, `npm test`, and `npm run build` all passing with 0 errors).
* **Milestone 3 — FACE Validation Function (`validateSurface`) & 20-Skin Support Center Demo:** ⏳ **NEXT**
  * Task 3.1: Inspect `node_modules/@a2ui/web_core/src/catalogs/basic/v1/functions/*.d.ts` and implement `src/functions/validateSurface.ts` (wrapping `AG_FACE_SELECTOR` + `reportValidity()`) + unit specs covering two-way `@path` bindings and FACE validation.
  * Task 3.2: Build `v2/a2ui/demos/support-center/` wired to `createMockA2uiStream` and `v2/skins/skins-bundle.css` live theme switcher.
  * Task 3.3: Run a 15-minute smoke test against a free Google AI Studio (Gemini) API key to verify real LLM prompt-to-AgnosticUI compilation.
* **Milestone 4 — Docs, npm Publish & `a2ui.org` Ecosystem PR:**
  * Generate `SKILL.md`, publish `@agnosticui/a2ui-lit` + `agnosticui-catalog.json`, add `/docs/a2ui` to `v2/site`, and open the listing PR on [a2ui-project/a2ui](https://github.com).

# Playbook Blueprint: Isomorphic Flat Architecture & Global Asset Pipeline (Refs #500)

Tone: When interacting with the user, generate all text following the principles of ASD-STE100 Simplified Technical English:
1. Use short, active sentences (max 20 words).
2. Avoid passive voice, fluff, and unnecessary synonyms.
3. Keep instructions to one single action per sentence.
4. Use simple, direct verbs (e.g., "use" instead of "utilize", "show" instead of "demonstrate").
5. Prioritize high scannability and clarity over conversational tone.

Objective: Use the following rigid engineering guidelines to migrate low-level components into zero-drift, tree-shakable server-side fallback engines across full-stack meta-frameworks.

## 1. Token Casing Rules & Flat Directory Topology

To prevent file-generation and pathing hallucination, strict adherence to these casing definitions is required:

- `[Component]` = PascalCase (e.g., `CustomSelect`)
- `[component]` = kebab-case (e.g., `custom-select`)
- `[componentCamel]` = camelCase (e.g., `customSelect`)

### Target Structural Verification Output (Example for `[Component]` = "CustomSelect")

v2/lib/src/components/CustomSelect/
├── core/
│   ├── \_CustomSelect.spec.ts <-- Web Component Client Assertions
│   ├── \_CustomSelect.ts <-- Lit Web Component Class Definition
│   ├── \_CustomSelectFallback.spec.ts <-- Fallback String Engine Assertions
│   ├── \_CustomSelectFallback.ts <-- Isomorphic Pure HTML String Engine
│   ├── custom-select-structure.module.css <-- Shared Layout Source of Truth (CSS Modules)
│   └── CustomSelect.ts <-- Public Element Barrels / Registry Hooks
├── react/
│   ├── index.ts <-- React Barrel Index Export
│   └── ReactCustomSelect.tsx <-- React Component Wrapper
└── vue/
    ├── index.ts <-- Vue Barrel Index Export
    └── VueCustomSelect.vue <-- Vue Component Wrapper (SFC)

## 2. Shared Layout Sheet Constraints & DRY Colocation

- Keep `[component]-structure.module.css` restricted purely to layout geometry (display properties, flex configurations, grid calculations, margins, paddings, line-heights).
- Do not consolidate multiple CSS properties into long, single-line declarations. Write CSS rules across multiple lines, using a single level of indentation for declarations.
- Do NOT include reactive browser styling rules (hover triggers, focus-ring outlines, border coloring animations, color schemes). These must stay in the Lit `static styles = []` array block.

### Isomorphic Selector Colocation (The DRY Rule)

To avoid structural maintenance drift and duplicate property walls, you must group local CSS Module tokens and open global cascade elements together using comma-separation. Global backup classes must be strictly namespaced behind the secure `.ag-` prefix bounding box to prevent consumer collision pollution.

```css
/* Symmetrical Colocation Pattern */
.[componentCamel]Wrapper,
:global(.ag-[component]-wrapper) {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
}
```

### Flat Active State Chaining (The esbuild Warning Guardrail)

To prevent production build compilation failures or minifier syntax anomalies (`▲ [WARNING] Unexpected "{" [css-syntax-error]`), do NOT use top-level nested `:global { ... }` brace blocks for active pseudo-states or complex sibling selectors. You must utilize flat inline chaining instead:

```css
/* Approved: 100% DRY and error-free inline state concatenation */
.[componentCamel]Input:checked + .[componentCamel]Indicator::after,
:global(.ag-[component]-input):checked
  + :global(.ag-[component]-indicator)::after {
  content: "";
  position: absolute;
  background-color: currentColor;
}
```

## 3. Web Component Refactoring Rules (`_[Component].ts`)

- Ingest both the class name hash dictionary object and the inline css string:
  `import styles from './[component]-structure.module.css';`
  `import structuralStylesText from './[component]-structure.module.css?inline';`
- **Security Constraint:** The `structuralStylesText` must be treated as a compile-time static string. Do NOT dynamically manipulate, concatenate, or slice this variable at runtime, or Lit will throw a severe runtime security exception inside the `unsafeCSS()` evaluation block:
  `css`${unsafeCSS(structuralStylesText)}``
- **CSS Module Mapping Guardrail:** Remember that CSS Modules transform kebab-case selectors into camelCase keys inside JavaScript. A class declared as `.select-wrapper {}` in `custom-select-structure.module.css` must be invoked as `styles.selectWrapper`.
- Inside `static styles`, target the primitive element tag name (e.g. `select`, `button`, `input`) instead of old literal class strings (e.g. `.select`) to ensure active states (like `:focus`) map cleanly across hashes.
- Dynamically bind your hashes using the class maps directly inside the template: `class="${styles.componentName}"`.

## 4. Server Fallback Engine Rules (`_[Component]Fallback.ts`)

- Define a strict TypeScript input property specification interface matching the target properties of the client framework component to eliminate `any` type implicit declarations.
- Support a simple plain text string `optionPlaceholder` or placeholder prop where relevant to bypass unhelpful virtual node serialization overhead.
- **Isomorphic Boolean/String Attribute Normalization:** When reading framework properties on the server, loosely typed meta-framework attributes must be parsed safely inside the normalization configuration block before node assembly:
  `checked: props.checked !== undefined ? (props.checked === true || props.checked === 'true' || props.checked === '') : false`
- **Centralized Markup Injection Guardrail:** To eliminate file code duplication, do NOT write local escaping utilities. Import the centralized sanitizer directly from your shared utilities package to securely interpolate attributes into your markup string literals:

  ```typescript
  import { escapeHtml } from "../../../utils/escape.js";

  // Usage inside template literal blocks:
  placeholder = "\${escapeHtml(props.optionPlaceholder)}";
  ```

## 5. Library Entry-Point Exposure (`v2/lib/package.json`)

Every layout module component requires explicit map declarations inside the public library package `exports` dictionary to clear downstream meta-framework cross-compilation gates.

- Export your dynamic bundle endpoints matching your framework targets.
- **Meta-Framework Resolution Guardrail:** To support varying module resolution algorithms across Webpack (Next.js) and Vite (Nuxt/SvelteKit), unified production-compiled stylesheets must declare multiple environment conditions alongside the default fallback path:
  ```json
  "./styles/framework-components.css": {
    "import": "./dist/styles/framework-components.css",
    "require": "./dist/styles/framework-components.css",
    "default": "./dist/styles/framework-components.css"
  }
  ```

## 6. Local Asset Aggregation Config (`v2/lib/vite.config.ts`)

Vite uses Rollup's `assetFileNames` function hook filter to safely catch, merge, and group layout chunks on compile pass while leaving specialized standalone sheets isolated. **Safety Rule:** `assetInfo.name` can occasionally be undefined during chunk splitting operations; an explicit check must guard the operation and return a safe default path:

```ts
assetFileNames: (assetInfo) => {
  if (assetInfo.name && assetInfo.name.endsWith(".css")) {
    if (
      assetInfo.name.includes("table") ||
      assetInfo.name.includes("nav-button")
    ) {
      return "styles/[name][extname]";
    }
    return "styles/framework-components[extname]";
  }
  return "assets/[name][extname]";
};
```

## 7. Documentation Architecture (VitePress Site Layout)

To display live previews of the static layouts without breaking core structural formatting, components use a dual-file documentation pattern under the `v2/site/` directory:

### File A: Preview Sandbox Wrapper

Location: `v2/site/docs/examples/[Component]FallbackPreview.vue`

- Imports the fallback engine from your local packed subpath: `import { _[Component]Fallback } from 'agnosticui-core/[component]/vue';`
- Imports the central layout asset sheet to apply the visual layout geometry: `import 'agnosticui-core/styles/framework-components.css';`
- Wraps the raw element string inside a `.vp-raw` container block to completely bypass VitePress global markdown typography theme layout overrides:

```vue
<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>
```

### File B: Component Markdown Layout Guide

Location: `v2/site/docs/components/[component].md`

- Import the adjacent preview sandbox file directly within an embedded `<script setup>` tag block.
- Document pre-selected hydration workflows showing how to handle saved datasets by dynamically swapping or fallback binding the component props (e.g. `:optionPlaceholder="player || '- Select a player -'"`).

## 8. Unit Testing Strategy (`_[Component].spec.ts`)

- Import the local `[component]-structure.module.css` stylesheet map directly into the spec suite file.
- Update old hardcoded class assertions from literal strings (`expect(el.classList.contains('select'))`) straight to live module tokens (`expect(el.classList.contains(styles.select))`).

## 9. Framework Wrapper & Barrel Export Rules

To prevent compilation bottlenecks in downstream full-stack frameworks (like TypeScript failing to parse re-exported types inside Vue SFC `<script>` blocks), framework barrel indexes must bypass the wrappers for fallback logic:

- **Direct Core Referencing:** The framework indexes (`react/index.ts` and `vue/index.ts`) must export the wrapper component natively, but pull the isomorphic fallback engine and its types directly from the core directory.
Use code with caution.
• Compound Registry Enforcement: For layout modules that utilize compound structural pairings (e.g., Avatar and AvatarGroup), the single primary public registry configuration barrel file (v2/lib/src/components/[Component]/core/[Component].ts) must evaluate and define both custom tags cleanly within global window custom element registries, exporting all underlying source definitions collectively.

Example React Barrel Index (react/index.ts)

ts export { default as ReactCustomSelect } from './ReactCustomSelect.jsx'; export { _CustomSelectFallback } from '../core/CustomSelect.js'; export type { CustomSelectFallbackProps } from '../core/CustomSelect.js'; 

Example Vue Barrel Index (vue/index.ts)

ts export { default as VueCustomSelect } from './VueCustomSelect.vue'; export { _CustomSelectFallback } from '../core/CustomSelect.js'; export type { CustomSelectFallbackProps } from '../core/CustomSelect.js'; 

⚠️ The Pre-Hydration Style Gap (FOUC) vs. Production Realities

In a traditional Single Page Application (SPA), components and their accompanying styles are bundle-loaded and parsed synchronously by the browser. However, server-first architectures (Astro, Next.js, Nuxt, Remix, SvelteKit, TanStack Start) operate under a distinct execution timeline mismatch:
1. The Server Phase: The server evaluates template scripts on request and streams raw HTML text markup to the browser immediately.
2. The Client Phase: The browser reads and parses the raw HTML nodes, but the actual application JavaScript bundle containing your compiled CSS Module stylesheet hash definitions is still downloading, unpacking, or executing asynchronously in the background.
During this multi-millisecond network transmission gap, the browser is forced to leak default User-Agent browser properties to the screen. This creates a severe Flash of Unstyled Content (FOUC) and spikes your Cumulative Layout Shift (CLS) metrics before hydration completes.

Dual-Class Token Lifecycle Solution

Our fallback engines solve this by emitting both raw unhashed namespace classes (ag-[component]-*) and empty placeholder modular mappings (styles.*) side-by-side onto elements.
1. Pre-Hydration Phase: The stable .ag- global fallback classes match against root compiled assets and paint baseline layout geometry instantly on page load.
2. Post-Hydration Promotion: When your full-stack framework executes client-side hydration, the DOM reconciler scans the nodes, discovers that the compiled hash strings are already present in the class list text, and binds its active event listeners instantly with near-zero computation cost.

Local Development Server Lag (Vite HMR Behavior)

When auditing component layouts during local execution workflows (npm run docs:dev), you may encounter momentary unstyled flashes or default browser styling targets on hard browser reloads.
This occurs because Vite delivers CSS Modules lazily inside asynchronous JavaScript chunks to keep Hot Module Replacement fast in memory. Do NOT assume a local dev-server flash is an production regression. Before rewriting structural styles, perform a static production dry-run simulation pass:
```bash

Execute compilation passes to bundle assets statically

npm run docs:build && npm run docs:preview
```
• Validation Rule: If the layout anomaly disappears entirely in the static distribution preview environment, the architecture is sound. The artifact is a known development server streaming DX anomaly with zero impact on downstream client distribution layers.

10. Comment Preservation & Public API Contract Guardrails (The Zero-Stripping Rule)

To prevent code comprehension regressions, maintain downstream developer visibility, and guarantee complete backward compatibility for existing consumers, all refactoring passes must operate under a strict additive mindset.

Public API Surface & Type Preservation

• Zero Interface Deletions: Never delete, rename, or drop existing public exports, component wrappers, or type signatures from framework barrel indexes (e.g., react/index.ts, vue/index.ts).
• Backward Compatibility Mapping: If an existing type is moved or refactored internally, you MUST maintain a legacy export alias in the barrel file (e.g., export type { NewCoreType as LegacyFrameworkProps }) so consumer builds do not break.
• Additive Evolution: New isomorphic fallback engines (_Fallback) and their respective property interfaces must be added next to, or combined with, existing exports—never in place of them.

Comment & Documentation Headers

• TSDoc / JSDoc Blocks: Never strip, truncate, or omit documentation headers (/** ... */), custom type descriptions, or @csspart annotations.
• Inline Comments: Retain all one-line and multi-line comments (// ... or /* ... */) that explain architectural intent, engine choices, or structural safety warnings. Carry them over exactly as written when splitting code across files.

Testing Suite Integrity

• Zero-Stripping Rule: Never strip, truncate, or omit existing unit test blocks, setup assertions, cleanup routines, or external boundary checks (e.g., axe accessibility tests).
• Additive Spec Updates: Carry over the complete original test block body exactly as written. Refactoring passes must only update target string lookups (e.g., swapping hardcoded literal classes for live styles.* module tokens) and append new isomorphic fallback engine assertions additively at the end of the file.

11. Local Quality Gate & Distribution Verification (Human-in-the-Loop)

To guarantee that isomorphic refactoring passes do not introduce module resolution defects, runtime regressions, or broken build configurations, a strict multi-tier local pipeline validation checkpoint sequence must be met.

🛑 Checkpoint A: Core Components Verification (Mandated Breakpoint 1)

This checkpoint MUST be enforced at this exact temporal boundary:
1. AFTER all core component directory files (v2/lib/src/components/[component]/*) have been completely refactored.
2. BEFORE starting any integration or documentation layout work on the VitePress site files (v2/site/*).
The AI MUST STOP generation immediately at this checkpoint. It is strictly forbidden to generate VitePress or site documentation files until the human engineer runs the verification command sequence locally and provides the success logs.
Instruct the human engineer to execute this exact stream:
bash npm run lint && npm run typecheck && npm run test && npm run build && npm pack 

Downstream Distribution Criteria

• Lint Check: Code must pass structural syntax guidelines with zero style-rule exclusions or errors.
• Type Safety: Compilation checks must yield zero hidden implicitly-declared any assignment gate blocks.
• Test Integrity: Component test spec suites must achieve complete assertion coverage with no skipped blocks.
• Build Pass: Build processes must cleanly map CSS Modules into isolated global chunks without warnings.
• Tarball Inspection: The generated .tgz archive must be unpacked locally to verify that all framework barrel index paths execute and resolve correctly.

🛑 Checkpoint B: Site Documentation Verification (Mandated Breakpoint 2)

This checkpoint MUST be enforced at this exact temporal boundary:
1. AFTER all VitePress preview sandbox wrappers and component guides under v2/site/* have been generated.
The AI MUST STOP generation immediately after delivering the documentation files. The AI must explicitly request the human engineer to execute the following combined clean-rebuild and local dev-server verification stream to guarantee that packed local tarball components resolve correctly inside the site engine:
shell npm run reinstall:lib && npm run docs:dev 
Instruct the user to report back the console output or any local hot-module replacement (HMR) / styling injection anomalies before signing off on the component migration.

12. VitePress Documentation Standardization

Every component guide at v2/site/docs/components/[component].md must place a dedicated server verification section directly below the main <FrameworkExample> block and right above the <script setup> tag.

Exact Section Text Verification

```markdown

Server-Side Rendering (SSR) Fallback Layouts

AgnosticUI utilizes a dual-layer Isomorphic Architecture to support server-first workflows across all major modern meta-frameworks (e.g., Astro, Next.js, Nuxt, Remix, SvelteKit, TanStack Start). Below are zero-drift visual previews generated directly from our isolated server layout string engines before client-side hydration completes.
To understand how these static strings safely handle global cascade isolation, see our architectural guide: How SSR Fallbacks Work.
```

Structural Rules

• FrameworkExample Inline Guardrail: To prevent VitePress markdown-it and Vue SFC parsing bugs (Invalid end tag), the opening <FrameworkExample> tag and all of its attribute keys/values MUST be written entirely on a single, continuous line without vertical carriage returns or line breaks.
• Sandbox Container: Group fallback previews inside an HTML <div> with class="ag-form-control-layout-stack" and inline flex spacing.
• Hydration Narrative: Directly beneath <script setup>, add a ### Handling Dual-Class Token Lifecycle During Hydration subheading. Document how mapping unhashed global classes (ag-[component]-*) side-by-side with modular mappings (styles.*) eliminates Cumulative Layout Shift (CLS).

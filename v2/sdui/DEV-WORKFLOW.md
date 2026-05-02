# SDUI Demo Development Workflow

This guide explains the local dependency chain, what to rebuild after upstream changes, and
how to avoid stale-cache pitfalls.

## Dependency chain

```
v2/lib  (agnosticui-core — web components, Vue/React wrappers)
  └── v2/sdui/schema  (@agnosticui/schema — AgNode type definitions)
        └── v2/sdui/renderers/react  (@agnosticui/render-react)
        └── v2/sdui/renderers/vue   (@agnosticui/render-vue)
        └── v2/sdui/renderers/lit   (@agnosticui/render-lit)
              └── v2/sdui/demo       (React demo app)
              └── v2/sdui/demo-vue   (Vue demo app)
              └── v2/sdui/demo-lit   (Lit demo app)
```

Each arrow is a `file:` dependency in `package.json`. npm installs these as **symlinks** in
`node_modules`, so demos always resolve to the local source. However, all packages under
`v2/lib` and `v2/sdui/renderers/*` are **TypeScript projects that must be compiled to `dist/`
before their consumers can see changes.**

## When to rebuild what

| You changed... | Rebuild command | Then... |
|---|---|---|
| `v2/lib/src/**` (core components, Vue/React wrappers) | `cd v2/lib && npm run build` | Restart the affected demo dev server |
| `v2/sdui/schema/src/**` | `cd v2/sdui/schema && npm run build` | Rebuild any affected renderer (see below) |
| `v2/sdui/renderers/vue/src/**` | `cd v2/sdui/renderers/vue && npm run build` | Restart demo-vue dev server |
| `v2/sdui/renderers/lit/src/**` | `cd v2/sdui/renderers/lit && npm run build` | Restart demo-lit dev server |
| `v2/sdui/renderers/react/src/**` | `cd v2/sdui/renderers/react && npm run build` | Restart demo (React) dev server |
| Fixture files in `v2/sdui/demo/src/fixtures/**` | None — imported as raw TypeScript by all three demos | Just save; Vite HMR picks it up |

### Rebuilding everything from scratch

```bash
# From the repo root (v2/)
cd lib && npm run build && cd ..
cd sdui/schema && npm run build && cd ../..
cd sdui/renderers/react && npm run build && cd ../../..
cd sdui/renderers/vue && npm run build && cd ../../..
cd sdui/renderers/lit && npm run build && cd ../../..
```

## First-time setup for a demo app

If a demo's `node_modules` folder does not exist yet (e.g. after a fresh clone or after
deleting it), run `npm install` inside the demo directory. npm resolves all `file:` deps as
symlinks automatically.

```bash
# Example for demo-lit (which ships without node_modules committed)
cd v2/sdui/demo-lit && npm install && npm run dev
```

## The Vite pre-bundle cache (`.vite/deps`)

Vite pre-bundles certain dependencies into `.vite/deps/` for faster startup. The demos use
`optimizeDeps.noDiscovery: true` plus an explicit `include` list, so **`agnosticui-core` and
the SDUI renderers are NOT pre-bundled** — they are served directly from the symlinked `dist/`
folders on disk.

The only package currently pre-bundled in demo-vue is `vue` itself. You should not need to
clear the Vite cache after a normal upstream rebuild.

**However**, if you ever see a demo serving unmistakably stale code after a rebuild and dev
server restart, clear the cache:

```bash
# Stop the dev server first, then:
rm -rf v2/sdui/demo-vue/node_modules/.vite
rm -rf v2/sdui/demo-lit/node_modules/.vite
rm -rf v2/sdui/demo/node_modules/.vite
# Then restart: npm run dev
```

## Convenience scripts (add to each demo's `package.json`)

You can add the following scripts to each demo app to make the rebuild loop faster. These are
intentionally not committed by default because they encode absolute paths; adjust for your
machine.

```jsonc
// v2/sdui/demo-vue/package.json (example)
"scripts": {
  "dev": "vite",
  "build": "vue-tsc -b && vite build",
  "preview": "vite preview",
  "rebuild:lib": "npm run build --prefix ../../lib",
  "rebuild:renderer": "npm run build --prefix ../renderers/vue",
  "rebuild:all": "npm run rebuild:lib && npm run rebuild:renderer",
  "fresh": "npm run rebuild:all && rm -rf node_modules/.vite && npm run dev"
}
```

Run `npm run fresh` after any upstream change: it rebuilds both lib and the renderer, clears
the Vite pre-bundle cache, then starts the dev server.

## Common pitfalls

### Symptom: a prop (e.g. `min`, `max`) is passed in the fixture but has no effect in the UI

**Cause:** The renderer dist is stale — the prop is in the renderer's TypeScript source but
was added after the last `npm run build`.

**Fix:** Rebuild the affected renderer.

```bash
cd v2/sdui/renderers/vue && npm run build
# or
cd v2/sdui/renderers/lit && npm run build
```

### Symptom: an event (e.g. `@change`) fires in React but not in Vue or Lit

**Cause:** Native DOM events like `change` are `composed: false` by default, so they stop at
the shadow root of a LitElement and never reach outside listeners. Only `input` and `click`
are `composed: true` natively.

**Fix:** In the web component's event handler, re-dispatch a composed `CustomEvent` (or a
plain `Event` with `composed: true`) from the host element so external listeners receive it.
All AgnosticUI form components should do this; if one is missing it, add it to the
component's `_handle*` method in `v2/lib/src/`.

### Symptom: Vue `@change` on `ag-input` never fires

Same root cause as above. The fix is in `v2/lib/src/components/Input/core/_Input.ts`:
`_handleChange` must dispatch `new Event('change', { bubbles: true, composed: true })` from
`this` (the host element) after handling the native event.

### Symptom: a Vue wrapper prop (e.g. `min`, `labelPosition`) is declared but silently ignored

**Cause:** Vue 3 `defineProps` removes declared props from `$attrs`. If a prop is declared in
`withDefaults(defineProps<...>(), {...})` but is NOT explicitly bound in the template, Vue
will not forward it to the underlying web component.

**Fix:** Add the binding to the wrapper template. Example in `VueInput.vue`:

```html
:min="min"
:max="max"
:labelPosition="labelPosition"
```

React is not affected (all props are forwarded automatically via `@lit/react` `createComponent`).
Lit is not affected (direct property binding in the renderer template).

## Summary checklist after an upstream change

- [ ] `cd v2/lib && npm run build` if any core component or Vue/React wrapper changed
- [ ] `cd v2/sdui/renderers/[vue|lit|react] && npm run build` if the corresponding renderer changed
- [ ] `cd v2/sdui/schema && npm run build` if the schema types changed
- [ ] Restart the demo dev server
- [ ] If something still looks stale: `rm -rf node_modules/.vite` in the demo, then restart

---

## Manual verification checklist

Run these to spot-check the full SDUI stack after a significant change or when returning
to the codebase after a gap. All commands assume you are in the repo root.

### 1. Schema unit tests

```bash
cd v2/sdui/schema && npm test
```
Expected: **43 tests pass.** Covers Zod schema validation for every component.

### 2. Renderer unit tests — all three frameworks

```bash
cd v2/sdui/renderers/react && npm test
cd v2/sdui/renderers/vue   && npm test
cd v2/sdui/renderers/lit   && npm test
```
Expected: **14 / 14 / 16 tests pass** respectively. Ignore Lit dev-mode stderr warnings
in the Lit suite — they are pre-existing jsdom noise, not failures.

### 3. Fixture validation + accessibility

```bash
cd v2/sdui/demo && npm test
```
Expected: **44 tests pass** across `fixtures.spec.ts`, `a11y.spec.ts`, and `toHtml.spec.ts`.
`fixtures.spec.ts` calls `validateGraph()` on every variation in `fixtureBank` and on
`pickerFixture`. Adding a new workflow to `fixtureBank` is automatically covered with no
test code changes required.

### 4. Codegen consistency (mirrors CI)

```bash
cd v2/sdui/schema && npm run check-codegen
```
Expected: `check-codegen: all 7 files are up to date.`
Fails if any generated file (`schema.ts`, `types.ts`, `index.ts`, the three renderers, or
`agnosticui-schema.json`) is out of sync with what codegen would produce. Fix by running
`npm run codegen` (and `npm run codegen -- --emit-schema-json` for the JSON artifact), then
committing the regenerated files.

### 5. Visual spot-check — React demo

```bash
cd v2/sdui/demo && npm run dev
```
Open the printed localhost URL. Use the workflow picker to exercise each card. Key things
to verify:
- Clicking **Regenerate** streams a new fixture variation into the renderer.
- Selecting a workflow option and clicking the action button (Submit / Apply / etc.)
  transitions to the confirmation fixture.
- The **Node array** collapsible panel shows the live JSON for the current render.
- The **Combobox** workflow demonstrates single-select (variation 1) and multi-select with
  tag overflow (variation 2, `multiple` + `closeOnSelect: false` + `maxOptionsVisible: 2`).

### 6. Visual spot-check — Vue and Lit demos

```bash
cd v2/sdui/demo-vue && npm run dev   # separate terminal
cd v2/sdui/demo-lit && npm run dev   # separate terminal
```
Same spot-check steps as the React demo. The fixture data is identical (shared imports from
`v2/sdui/demo/src/fixtures/`); only the renderer differs. Verify the same Combobox workflow
works in each framework.

### 7. Confirm legacy examples are gone

```bash
ls v2/sdui/
```
Expected directories: `demo  demo-lit  demo-llm  demo-vue  renderers  schema` plus the
markdown files. No `examples/` directory.

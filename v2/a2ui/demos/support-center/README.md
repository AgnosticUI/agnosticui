# AgnosticUI A2UI v1.0 Support Center Demo

Interactive offline-first reference app demonstrating **A2UI v1.0** generative UI surfaces rendered with **AgnosticUI Web Components** (`@agnosticui/a2ui-lit`), **Form-Associated Custom Element (FACE) validation**, two-way `@path` data model reactivity, and live switching across **21 AgnosticUI runtime skins** + Light/Dark mode.

## Quick Start (First-Time Setup or After Renderer Changes)

Because this demo consumes local workspace tarballs (`agnosticui-core` and `@agnosticui/a2ui-lit`) to avoid symlinked `node_modules` duplication, run the following from `v2/a2ui/demos/support-center/`:

```bash
# 1. Build & pack @agnosticui/a2ui-lit into a clean .tgz, then install demo dependencies
(cd ../../renderers/lit && npm run build && npm pack) && npm install

# 2. Start the Vite dev server
npm run dev
```

## Troubleshooting Native Bindings (`npm/cli#4828`)

If Vite or Rollup complains about missing `@rolldown/binding-darwin-x64` after editing `package.json`, run a clean single-pass install:

```bash
rm -rf node_modules package-lock.json && (cd ../../renderers/lit && npm run build && npm pack) && npm install
```

## Regenerating the A2UI Catalog After `v2/lib` Prop Changes

If you add or modify component props in `v2/lib/src/components/*/core/_*.ts`:

```bash
# 1. Regenerate Lit wrappers + agnosticui-catalog.json
(cd ../../catalog && npm run generate)

# 2. Re-test, rebuild, and repack @agnosticui/a2ui-lit
(cd ../../renderers/lit && npm test && npm run build && npm pack)

# 3. Reinstall updated tarball in this demo
rm -rf node_modules package-lock.json && npm install
```

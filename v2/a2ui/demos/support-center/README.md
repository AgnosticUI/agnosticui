# AgnosticUI A2UI v1.0 Support Center Studio (`lit/`, `react/`, `vue/`)

Interactive offline-first reference applications demonstrating **A2UI `v1.0`** conversational generative UI surfaces (`AgMessageBubble`, `AgCombobox`, `AgCard`, `AgInput`, `AgToggle`, `AgCheckbox`, `AgButton`), **Form-Associated Custom Element (FACE) validation**, two-way `@path` DataModel reactivity, and live switching across **21+ AgnosticUI runtime skins** (including an **Evergreen** skin) + Light/Dark mode.

## Directory Structure

```text
v2/a2ui/demos/support-center/
├── shared/   # Shared A2UI v1.0 fixtures, studio CSS, Evergreen skin & local/live compiler
├── lit/      # Lit Web Components studio (<ag-a2ui-studio> + @agnosticui/a2ui-lit)
├── react/    # React 19 studio (<AgA2uiSurface> + useA2uiSurface + @agnosticui/a2ui-react)
└── vue/      # Vue 3 studio (<AgA2uiSurface> + useA2uiSurface + @agnosticui/a2ui-vue)
```

## Quick Start (From Repository Root)

If the renderer tarballs are already built, start any studio directly:

```bash
# Lit
(cd v2/a2ui/demos/support-center/lit && npm install && npm run dev)

# React 19
(cd v2/a2ui/demos/support-center/react && npm install && npm run dev)

# Vue 3
(cd v2/a2ui/demos/support-center/vue && npm install && npm run dev)
```

## Regenerating Catalog & Packing Renderers

Whenever you modify `v2/lib` props, `codegen.config.ts`, or `generate-catalog.ts`, run the all-in-one rebuild script from the **repository root**:

```bash
(cd v2/a2ui/catalog && npm run rebuild:all)
```

Then reinstall the updated tarball in whichever demo you are testing (`lit`, `react`, or `vue`):

```bash
# Example for Lit (swap `lit` for `react` or `vue` as needed)
(cd v2/a2ui/demos/support-center/lit && rm -rf node_modules package-lock.json && npm install && npm run dev)
```

> **Note:** Running `rm -rf node_modules package-lock.json && npm install` ensures npm picks up the newly packed `.tgz` tarballs and avoids the `npm/cli#4828` missing `@rolldown/binding-*` issue.

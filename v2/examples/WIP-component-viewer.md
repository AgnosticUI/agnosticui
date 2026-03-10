# WIP: Component Viewer for agnosticui-cli Example Apps

## Status: Paused — evaluating direction

---

## What exists today

Three example apps live under `v2/examples/`:
- `react-test/`
- `vue-test/`
- `lit-test/`

Each is a Vite app where a developer runs `npx agnosticui-cli add <ComponentName>` to scaffold
components locally. Once added, they can run:

```
npm run viewer   # launches component viewer at http://localhost:7173
```

The `viewer` script runs `npx agnosticui-cli view`, which is implemented in:
- `v2/cli/src/cli.ts`
- `v2/cli/src/utils/viewer.ts`

The CLI's `view` command spins up a small Vite dev server that auto-discovers installed
components and renders a gallery page.

---

## Problems identified (firsthand testing, react-test)

1. **~40% of components don't render at all.** They appear in the list but show nothing visual.
2. **The ones that do render are trivially simple** — no props being exercised, no variants shown.
   A button renders as a default button with no label variants, sizes, states, etc.
3. **DX value is unclear.** A developer looking at this viewer doesn't learn how to USE the
   component — they just see a blank or barebones render.

---

## Direction being evaluated: Storybook

The idea is to replace (or augment) the custom viewer with **Storybook**, which:
- Has first-class support for React, Vue, and Lit (web components)
- Automatically provides a props/controls panel (no manual story writing needed for basic use)
- Shows variants, states, and interactive controls out of the box
- Is something developers already know

### Key question to answer
Should the CLI (`agnosticui-cli add`) scaffold Storybook story files alongside components,
or should we set up Storybook once at the example-app level and have it auto-discover?

---

## Relevant file paths

| File | Purpose |
|------|---------|
| `v2/cli/src/cli.ts` | CLI entry — defines `view` command |
| `v2/cli/src/utils/viewer.ts` | Viewer implementation (Vite dev server + gallery page) |
| `v2/cli/package.json` | CLI package — version is `2.0.0-alpha.x` |
| `v2/examples/react-test/` | React example app (Vite + React 19 + TypeScript) |
| `v2/examples/vue-test/` | Vue example app (Vite + Vue 3 + TypeScript) |
| `v2/examples/lit-test/` | Lit example app (Vite + Lit + TypeScript) |
| `v2/examples/react-test/src/components/ag/` | Where CLI-added components land (React) |

---

## Recent commits for context

```
dd63b28  Fix #358 follow-up: fix Lit viewer layout — plain HTML chrome, CSS reset
eb86a82  Add newcomer-friendly README to all three example apps
e4fa414  Make example apps consistent: gitignore agnosticui/ in lit-test and vue-test
a783d4b  Update example apps: npm registry CLI dep, view script, sync to core alpha.21
```

---

## Suggested next session agenda

1. Look at `viewer.ts` to understand what it currently does and why components fail to render.
2. Prototype Storybook in `react-test/` first:
   - `npx storybook@latest init` inside `react-test/`
   - See if existing CLI-added components (in `src/components/ag/`) are picked up
   - Evaluate auto-generated controls for an AgnosticUI component (e.g. Button)
3. Decide: custom viewer (fix it) vs. Storybook (adopt it) vs. both
4. If Storybook: update the CLI scaffolding to optionally emit `.stories.ts` files

---

## How to resume

Load this file into a fresh Claude session with something like:

> "Here is my WIP plan file: [paste contents]. Let's continue from the 'Suggested next session
> agenda' — start by reading `v2/cli/src/utils/viewer.ts` and the Storybook prototype step."

The working directory is: `/Users/roblevin/workspace/opensource/agnosticui`

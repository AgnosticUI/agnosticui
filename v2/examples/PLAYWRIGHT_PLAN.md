# Playwright Coverage Plan for v2/examples

## Purpose

The `v2/examples` directory serves as the **full component coverage layer** for
AgnosticUI, replacing the playgrounds (see Issue #332). Each framework example
(react-test, vue-test, lit-test) must verify that every component renders
correctly via Playwright e2e smoke tests.

The testing goal per component is: **element is attached to the DOM** (MVP).
Future milestones can layer on console-error checks, accessibility assertions,
and interactive behavior tests.

---

## Architecture: Vite Multi-Page App (MPA)

Each example is a Vite MPA. Component categories live in separate HTML entry
points so each page renders only ~6–10 Lit web components. This keeps
Playwright's isolated JavaScript context from being overwhelmed (root cause of
the monolithic-app test failures).

```
v2/examples/react-test/
  index.html              ← minimal smoke test (ag-button + ag-alert)
  pages/
    actions.html          ← Button, ButtonFx, IconButton, IconButtonFx, CopyButton, Link
    forms.html            ← Input, Checkbox, Radio, Select, Toggle, Slider, Combobox, Rating
    feedback.html         ← Alert, Toast, Badge, BadgeFx, Progress, ProgressRing, Spinner, Loader, SkeletonLoader
    navigation.html       ← Breadcrumb, Tabs, Pagination, Menu
    overlays.html         ← Dialog, Drawer, Popover, Tooltip, Accordion, Collapsible
    layout.html           ← Card, Flex, Header, Sidebar, SidebarNav, Divider, AspectRatio, Fieldset
    display.html          ← Avatar, Image, Icon, Tag, Mark, Kbd, IntlFormatter, Timeline, MessageBubble, EmptyState, VisuallyHidden, ScrollProgress, ScrollToButton
```

Vue-test and lit-test mirror this exact structure once the React pages are
established and used as the canonical reference.

---

## Implementation Order

1. **React** — build all category pages, verify Playwright tests pass
2. **Vue** — replicate React category pages using Vue equivalents
3. **Lit** — replicate using native web component template

Each framework's category pages must cover the same components in the same
logical grouping. The React pages are the canonical source of truth for
structure and prop choices.

---

## Component Coverage Matrix

### Milestone 1 – Smoke (DONE)
Basic "does the framework integration work?" check. One ag-button, one ag-alert.

| Category  | Component    | React | Vue | Lit |
|-----------|-------------|-------|-----|-----|
| Smoke     | ag-button   | ✅    | ✅  | ✅  |
| Smoke     | ag-alert    | ✅    | ✅  | ✅  |

### Milestone 2 – Full Coverage (IN PROGRESS)
One page per category. MVP assertion: element attached to DOM.

#### Actions (`pages/actions.html`)
| Component        | ag-tag-name       | React | Vue | Lit |
|-----------------|-------------------|-------|-----|-----|
| Button          | ag-button         | ⬜    | ⬜  | ⬜  |
| ButtonFx        | ag-button-fx      | ⬜    | ⬜  | ⬜  |
| IconButton      | ag-icon-button    | ⬜    | ⬜  | ⬜  |
| IconButtonFx    | ag-icon-button-fx | ⬜    | ⬜  | ⬜  |
| CopyButton      | ag-copy-button    | ⬜    | ⬜  | ⬜  |
| Link            | ag-link           | ⬜    | ⬜  | ⬜  |

#### Forms (`pages/forms.html`)
| Component   | ag-tag-name   | React | Vue | Lit |
|-------------|---------------|-------|-----|-----|
| Input       | ag-input      | ⬜    | ⬜  | ⬜  |
| Checkbox    | ag-checkbox   | ⬜    | ⬜  | ⬜  |
| Radio       | ag-radio      | ⬜    | ⬜  | ⬜  |
| Select      | ag-select     | ⬜    | ⬜  | ⬜  |
| Toggle      | ag-toggle     | ⬜    | ⬜  | ⬜  |
| Slider      | ag-slider     | ⬜    | ⬜  | ⬜  |
| Combobox    | ag-combobox   | ⬜    | ⬜  | ⬜  |
| Rating      | ag-rating     | ⬜    | ⬜  | ⬜  |

#### Feedback (`pages/feedback.html`)
| Component     | ag-tag-name        | React | Vue | Lit |
|--------------|---------------------|-------|-----|-----|
| Alert        | ag-alert            | ⬜    | ⬜  | ⬜  |
| Toast        | ag-toast            | ⬜    | ⬜  | ⬜  |
| Badge        | ag-badge            | ⬜    | ⬜  | ⬜  |
| BadgeFx      | ag-badge-fx         | ⬜    | ⬜  | ⬜  |
| Progress     | ag-progress         | ⬜    | ⬜  | ⬜  |
| ProgressRing | ag-progress-ring    | ⬜    | ⬜  | ⬜  |
| Spinner      | ag-spinner          | ⬜    | ⬜  | ⬜  |
| Loader       | ag-loader           | ⬜    | ⬜  | ⬜  |
| SkeletonLoader | ag-skeleton-loader | ⬜    | ⬜  | ⬜  |

#### Navigation (`pages/navigation.html`)
| Component   | ag-tag-name    | React | Vue | Lit |
|-------------|----------------|-------|-----|-----|
| Breadcrumb  | ag-breadcrumb  | ⬜    | ⬜  | ⬜  |
| Tabs        | ag-tabs        | ⬜    | ⬜  | ⬜  |
| Pagination  | ag-pagination  | ⬜    | ⬜  | ⬜  |
| Menu        | ag-menu        | ⬜    | ⬜  | ⬜  |

#### Overlays (`pages/overlays.html`)
| Component   | ag-tag-name    | React | Vue | Lit |
|-------------|----------------|-------|-----|-----|
| Dialog      | ag-dialog      | ⬜    | ⬜  | ⬜  |
| Drawer      | ag-drawer      | ⬜    | ⬜  | ⬜  |
| Popover     | ag-popover     | ⬜    | ⬜  | ⬜  |
| Tooltip     | ag-tooltip     | ⬜    | ⬜  | ⬜  |
| Accordion   | ag-accordion   | ⬜    | ⬜  | ⬜  |
| Collapsible | ag-collapsible | ⬜    | ⬜  | ⬜  |

#### Layout (`pages/layout.html`)
| Component   | ag-tag-name       | React | Vue | Lit |
|-------------|-------------------|-------|-----|-----|
| Card        | ag-card           | ⬜    | ⬜  | ⬜  |
| Flex        | ag-flex-row       | ⬜    | ⬜  | ⬜  |
| Header      | ag-header         | ⬜    | ⬜  | ⬜  |
| Sidebar     | ag-sidebar        | ⬜    | ⬜  | ⬜  |
| SidebarNav  | ag-sidebar-nav    | ⬜    | ⬜  | ⬜  |
| Divider     | ag-divider        | ⬜    | ⬜  | ⬜  |
| AspectRatio | ag-aspect-ratio   | ⬜    | ⬜  | ⬜  |
| Fieldset    | ag-fieldset       | ⬜    | ⬜  | ⬜  |

#### Display (`pages/display.html`)
| Component       | ag-tag-name          | React | Vue | Lit |
|----------------|----------------------|-------|-----|-----|
| Avatar         | ag-avatar            | ⬜    | ⬜  | ⬜  |
| Image          | ag-image             | ⬜    | ⬜  | ⬜  |
| Icon           | ag-icon              | ⬜    | ⬜  | ⬜  |
| Tag            | ag-tag               | ⬜    | ⬜  | ⬜  |
| Mark           | ag-mark              | ⬜    | ⬜  | ⬜  |
| Kbd            | ag-kbd               | ⬜    | ⬜  | ⬜  |
| IntlFormatter  | ag-intl-formatter    | ⬜    | ⬜  | ⬜  |
| Timeline       | ag-timeline          | ⬜    | ⬜  | ⬜  |
| MessageBubble  | ag-message-bubble    | ⬜    | ⬜  | ⬜  |
| EmptyState     | ag-empty-state       | ⬜    | ⬜  | ⬜  |
| VisuallyHidden | ag-visually-hidden   | ⬜    | ⬜  | ⬜  |
| ScrollProgress | ag-scroll-progress   | ⬜    | ⬜  | ⬜  |
| ScrollToButton | ag-scroll-to-button  | ⬜    | ⬜  | ⬜  |

---

## Playwright Test Structure

Each category gets its own spec file:

```
v2/examples/react-test/e2e/
  smoke.spec.ts          ← existing: index.html (ag-button + ag-alert)
  actions.spec.ts        ← /pages/actions.html
  forms.spec.ts          ← /pages/forms.html
  feedback.spec.ts       ← /pages/feedback.html
  navigation.spec.ts     ← /pages/navigation.html
  overlays.spec.ts       ← /pages/overlays.html
  layout.spec.ts         ← /pages/layout.html
  display.spec.ts        ← /pages/display.html
```

Each spec navigates to its page URL and asserts `state: 'attached'` for each
component's custom element tag. Example:

```typescript
// e2e/forms.spec.ts
import { test, expect } from '@playwright/test';

const FORMS_COMPONENTS = [
  'ag-input', 'ag-checkbox', 'ag-radio', 'ag-select',
  'ag-toggle', 'ag-slider', 'ag-combobox', 'ag-rating',
];

for (const tag of FORMS_COMPONENTS) {
  test(`${tag} is rendered on forms page`, async ({ page }) => {
    await page.goto('/pages/forms.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
```

---

## Vite MPA Config

`vite.config.ts` `build.rollupOptions.input` lists all entry points:

```typescript
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        actions:    resolve(__dirname, 'pages/actions.html'),
        forms:      resolve(__dirname, 'pages/forms.html'),
        feedback:   resolve(__dirname, 'pages/feedback.html'),
        navigation: resolve(__dirname, 'pages/navigation.html'),
        overlays:   resolve(__dirname, 'pages/overlays.html'),
        layout:     resolve(__dirname, 'pages/layout.html'),
        display:    resolve(__dirname, 'pages/display.html'),
      },
    },
  },
  // ... rest of config
});
```

---

## Relationship to Issue #332

The playgrounds (`v2/playgrounds/`) can be removed once the coverage matrix
above reaches ✅ for all three frameworks. The examples then serve as the
single source of:

1. **Integration verification** — confirms each component works in React, Vue,
   and Lit context
2. **CLI scaffold validation** — confirms `npx agnosticui-cli` produces
   installable, renderable components
3. **Regression detection** — any broken component shows up as a named failing
   test in CI

---

## Known Constraints

- Each page must render ≤ ~10 Lit custom elements to avoid blocking
  Playwright's isolated JavaScript context (the root cause of the original
  monolithic-app test failures)
- `vite build && vite preview` is always used (dev server causes dep-optimization
  page-reload races with Playwright)
- `state: 'attached'` is used over `state: 'visible'` because components attach
  before CSS custom properties fully resolve
- React pages are the canonical reference; Vue and Lit pages must mirror the
  same component selection and prop choices

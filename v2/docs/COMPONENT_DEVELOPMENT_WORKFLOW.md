# AgnosticUI v2 – Component Development Workflow

## 🎯 Mission
AI-ready, minimalist & highly themeable UI library with APG-driven accessibility.

## 🎮 Development Environment

**Monorepo Root:** `/Users/roblevin/workspace/opensource/agnosticui/v2/`

**Library:** `lib/` (Published as `agnosticui-core` on npm)
- Core component library (Lit web components)
- Consumes design tokens from theme-registry
- Exports components via `src/index.ts`
- **Commands:**
  - `npm run build` - Build library to `dist/`
  - `npm run test` - Run component tests
  - `npm run typecheck` - TypeScript validation

**Theme Registry:** `theme-registry/`
- Single source of truth for design tokens
- Style Dictionary builds → `lib/src/tokens/`
- Always update here first, never hardcode tokens in components
- **Commands:**
  - `npm run build` - Generate token files from semantic.json

**Showcase:** `showcase/` (React + Vite)
- Primary development/testing environment
- Multi-framework component demonstrations
- Live development with HMR
- Comprehensive code examples
- **Commands:**
  - `npm run dev` - Start dev server (http://localhost:5173)
  - `npm run build` - Build for production

**Testing:** `scripts/setup-testing-playground.sh`
- Simulates npm install consumption in `/tmp`
- Verifies package exports work correctly
- Tests framework integrations in isolation

**Token Flow:** `theme-registry` (build) → `lib/src/tokens/` → `showcase` (via npm link to agnosticui-core)

---

## 📊 Current Status

### Pivot: Astro Playground → React Showcase
**Why?** Complex components (Tabs, Menu) required more robust framework integration. Astro playground deprecated in favor of full React showcase with multi-framework support.

### Component Status

**✅ Full Cycle Complete:**
- **Button** - Core refactored, showcase integrated, all framework demos working

**🔄 Core Complete (may need more CSS styles work and v1 parity; needs full cycle refactor):**
- Accordion, Input, Tooltip, Dialog, Toggle, IconButton, Tabs, Menu, Breadcrumb

### Documentation Status (8/9 Complete)

**✅ Complete Spec Sheets:**
- Accordion, Button, IconButton, Input, Dialog, Tooltip, Toggle, Breadcrumb

**❌ Missing Spec Sheet:**
- AccordionGroup (utility component, lower priority)

**Component Priority Order:**
1. **Accordion** - High complexity, commonly used
2. **Input** - Foundation component, most tests
3. **Tooltip** - Simple, good next candidate
4. **Dialog** - Complex but high value
5. **Toggle** - Medium complexity
6. **IconButton** - Related to Button
7. **Tabs** - Complex (reason for showcase pivot)
8. **Menu** - Complex (reason for showcase pivot)
9. **Breadcrumb** - Simpler, lower priority

## 🛠️ Per-Component Workflow

### Step 1: Core Implementation

**Prerequisites (Human):**
- Download 2-3 accessibility specs → `lib/src/components/[COMPONENT]/specifications/*.md`
- Optional v1 parity: Copy v1 implementation → `lib/src/components/[COMPONENT]/v1/*` (.gitignored for reference)

**Implementation Steps (AI):**
1. **Synthesize specs** - Create `specifications/SpecSheet.md` from downloaded accessibility specs
2. **Write tests** - Generate `core/_[COMPONENT].spec.ts` using SpecSheet as authoritative source (see Button example)
3. **Implement component** - Update `core/_[COMPONENT].ts`:
   - Design token integration (`--ag-*` tokens)
   - v1 feature parity (colors, sizes, shapes, methods, properties) if v1 reference provided
   - APG compliance per SpecSheet
   - Minimalist & highly themeable philosophy (functional CSS only)
4. **Verify tests** - Run test suite, ensure all passing
5. **Update wrappers** - Sync framework wrappers (React/Vue) with new core API
   - **Note:** Svelte uses web components directly from `agnosticui-core` without wrapper components
6. **Export component** - Add to `lib/src/index.ts` for public API

### Step 2: Showcase Integration

1. Create showcase page in `showcase/src/pages/[component]/`
2. Implement multi-framework demos accessible from `Components × Frameworks` section:
   - **[Component]React.tsx** - Direct React wrapper usage
   - **[Component]Vanilla.tsx** - Web component demos
   - **[Component]Vue.tsx** - Vue syntax examples + CodeSandbox links
   - **[Component]Svelte.tsx** - Svelte syntax examples + CodeSandbox links
3. **Add TypeScript declarations** to global types file:
   - Update `showcase/src/types/web-components.d.ts`
   - Add custom element interface to `IntrinsicElements`
   - **NEVER use inline `declare module 'react'` in component files** (causes ESLint warnings)
   - Pattern: Add all web component types to the global declaration file only
4. Add comprehensive code examples with copy-to-clipboard
5. Visual state demonstrations (disabled, variants, sizes, etc.)
6. Add to showcase index page navigation with status badge

### Step 3: Consumption Verification

1. Run `scripts/setup-testing-playground.sh`
2. Test npm install simulation in `/tmp`
3. Verify component works in fresh environment
4. Test all framework integrations work correctly
5. Document any issues/fixes needed

### Step 4: Documentation

- Update component `specifications/SpecSheet.md`
- Add usage examples to showcase page
- Verify APG compliance checklist complete
- Update this workflow doc with component status

### Step 5: Dependency Cleanup

- Remove equivalent `@radix-ui/*` package from `showcase/package.json` once available (e.g. once AgButton was completed, it replaced "@radix-ui/react-button" and showcase pages were refactored accordingly)
- Update imports in showcase components
- Test all showcase pages still work
- Remove loveable-generated dependencies no longer needed

---

## 🔁 Full Component Cycle
_Note: Button component was completed and is mentioned in paces below. But, consider that it could be replaced by [COMPONENT] to represent any UI component._

### Phase 1: Core Component Refactor ✅

**Prerequisites (Human):**
- Download 2-3 accessibility specs → `lib/src/components/[COMPONENT]/specifications/*.md`
- Optional v1 parity: Copy v1 implementation → `lib/src/components/[COMPONENT]/v1/*` (.gitignored for reference)

**Implementation Steps (AI):**
1. **Synthesize specs** - Create `specifications/SpecSheet.md` from downloaded accessibility specs
2. **Write tests** - Generate `core/_[COMPONENT].spec.ts` using SpecSheet as authoritative source (see Button example)
3. **Implement component** - Update `core/_[COMPONENT].ts`:
   - Design token integration (`--ag-*` tokens)
   - v1 feature parity (colors, sizes, shapes, methods, properties) if v1 reference provided
   - APG compliance per SpecSheet
4. **Verify tests** - Run test suite, ensure all passing
5. **Update wrappers** - Sync framework wrappers (React/Vue) with new core API
   - **Note:** Svelte uses web components directly from `agnosticui-core` without wrapper components

### Phase 2: Showcase Integration ✅

1. Create showcase page in `showcase/src/pages/button/`
2. Implement multi-framework demos which user can reach from in the `Components × Frameworks` section of the index page:
   - **ButtonReact.tsx** - Direct React wrapper usage
   - **ButtonVanilla.tsx** - Web component demos
   - **ButtonVue.tsx** - Vue syntax examples + CodeSandbox links
   - **ButtonSvelte.tsx** - Svelte syntax examples + CodeSandbox links
3. **Add TypeScript declarations** to global types file:
   - Update `showcase/src/types/web-components.d.ts`
   - Add custom element interface to `IntrinsicElements`
   - **NEVER use inline `declare module 'react'` in component files** (causes ESLint warnings)
4. Add comprehensive code examples with copy-to-clipboard
5. Visual state demonstrations (disabled, variants, sizes, etc.)

### Phase 3: Consumption Verification ⏳ NEXT

1. Run `scripts/setup-testing-playground.sh`
2. Simulate `npm install agnosticui-core` consumption
3. Verify component works in fresh environment
4. Test all framework integrations

### Phase 4: Cleanup & Migration (Ongoing)

- Replace `@radix-ui/*` dependencies with AgnosticUI equivalents
- Remove loveable-generated dependencies
- Prune unused showcase dependencies

---

## 📦 Component Completion Checklist

**Before marking ANY component as complete, verify ALL of the following:**

### Core Implementation ✅
- [ ] `lib/src/components/[Component]/core/_[Component].ts` exists and implements all features
- [ ] Design tokens used (`--ag-*` variables) - NO hardcoded colors/fonts/spacing
- [ ] **Design tokens without fallbacks** - Use `var(--ag-token)` NOT `var(--ag-token, fallback)` (tokens are a precondition)
- [ ] Minimalist & themeable CSS (functional only - visibility, display states)
- [ ] Hover states follow pattern (white-on-color=darken, dark-on-light=lighten)
- [ ] Focus states use `--ag-focus` (never `currentColor`)
- [ ] All props/methods documented with JSDoc
- [ ] Component follows Lit best practices (reactive properties, shadow DOM)

### Testing ✅
- [ ] `lib/src/components/[Component]/core/_[Component].spec.ts` exists
- [ ] All unit tests passing (`cd lib && npm run test`)
- [ ] TypeScript compilation passing (`cd lib && npm run typecheck`)
- [ ] Linting passing (`cd lib && npm run lint`)
- [ ] Build succeeds (`cd lib && npm run build`)

### Accessibility (MANDATORY - BLOCKING) ✅
- [ ] WAI-ARIA APG pattern implemented correctly
- [ ] Keyboard navigation working (Tab, Arrow keys, Space, Enter, Home, End as applicable)
- [ ] All ARIA attributes present and correct
- [ ] Focus management working properly
- [ ] Screen reader support verified
- [ ] Axe accessibility tests passing (zero violations)
- [ ] **All 11 sections of ACCESSIBILITY_CHECKLIST.md completed** (see CLAUDE.md)

### Framework Wrappers ✅
- [ ] `lib/src/components/[Component]/react/React[Component].ts` exists
- [ ] `lib/src/components/[Component]/vue/Vue[Component].ts` exists
- [ ] All wrappers tested and working
- [ ] **Note:** No Svelte wrapper needed - Svelte uses web components directly

### Package Exports ✅
- [ ] Vanilla export added to `lib/package.json` (`./[component]`)
- [ ] React export added (`./[component]/react`)
- [ ] Vue export added (`./[component]/vue`)
- [ ] Exports point to correct built files in `dist/`
- [ ] Library built after adding exports
- [ ] **Note:** No Svelte export needed - Svelte imports vanilla web component directly

### Showcase Integration ✅
- [ ] Showcase page exists: `showcase/src/pages/[component]/`
- [ ] `[Component]React.tsx` demo implemented (uses React wrapper)
- [ ] `[Component]Vanilla.tsx` demo implemented (direct web component usage)
- [ ] `[Component]Vue.tsx` demo implemented (uses Vue wrapper)
- [ ] `[Component]Svelte.tsx` demo implemented (uses vanilla web component - no wrapper)
- [ ] TypeScript declarations added to `showcase/src/types/web-components.d.ts`
  - **NEVER use inline `declare module 'react'` in component demo files**
  - Add custom element to global `IntrinsicElements` interface only
- [ ] All demos use correct consumer import patterns:
  - React: `import { React[Component] } from "agnosticui-core/react"` (shared export when available)
  - Vue: `import { Vue[Component] } from "agnosticui-core/[component]/vue"` (component-specific)
  - Svelte: `import "agnosticui-core/[component]"` (vanilla web component)
  - Vanilla: `import "agnosticui-core/[component]"`
- [ ] Code examples with copy-to-clipboard working
- [ ] Visual state demonstrations (variants, sizes, disabled, etc.)
- [ ] Component added to showcase index navigation
- [ ] Status badge added to index
- [ ] Showcase dev server runs without errors (`cd showcase && npm run dev`)

### Documentation ✅
- [ ] `lib/src/components/[Component]/specifications/SpecSheet.md` complete
- [ ] Usage examples documented
- [ ] APG compliance documented
- [ ] Props/events/slots documented
- [ ] COMPONENT_DEVELOPMENT_WORKFLOW.md updated with component status

### Consumption Verification ✅
- [ ] `scripts/setup-testing-playground.sh` runs successfully
- [ ] Component works in simulated npm install environment
- [ ] All framework integrations tested in isolation

### Cleanup ✅
- [ ] Equivalent `@radix-ui/*` dependency removed from `showcase/package.json` (if applicable)
- [ ] All showcase pages using old dependency updated
- [ ] Loveable-generated dependencies removed (if no longer needed)
- [ ] No console errors or warnings

### Final Validation ✅
- [ ] Full validation suite passes: `cd lib && npm run lint && npm run typecheck && npm run test && npm run build`
- [ ] Showcase builds: `cd showcase && npm run build`
- [ ] Git status clean (all changes committed)
- [ ] **Human approval obtained before moving to next component**

---

## 📋 Success Criteria Summary

**Component is "Done" when ALL checklist items above are complete.**

Quick reference (not exhaustive):
- ✅ Core + tests + accessibility fully implemented
- ✅ Framework wrappers (React/Vue) working
- ✅ Package exports configured correctly
- ✅ Showcase integration complete (4 framework demos: React, Vue, Svelte, Vanilla)
- ✅ Consumption verification passed
- ✅ Documentation complete
- ✅ Cleanup finished

**Note on Svelte:** Svelte demos use vanilla web components directly (no wrapper layer needed)

---

## 📦 Consumer Import Patterns

**How consumers import components from `agnosticui-core`:**

### Framework-Specific Imports
```typescript
// React wrapper
import { ReactButton } from "agnosticui-core/button/react";

// Vue wrapper
import { VueButton } from "agnosticui-core/button/vue";

// Svelte wrapper
import { SvelteButton } from "agnosticui-core/button/svelte";

// Vanilla web component
import { AgButton } from "agnosticui-core/button";
```

### Package Exports Configuration
Each component MUST be added to `lib/package.json` exports:

```json
{
  "exports": {
    "./button": {
      "types": "./dist/components/Button/core/_Button.d.ts",
      "import": "./dist/components/Button/core/_Button.js"
    },
    "./button/react": {
      "types": "./dist/components/Button/react/ReactButton.d.ts",
      "import": "./dist/components/Button/react/ReactButton.js"
    },
    "./button/vue": {
      "types": "./dist/components/Button/vue/VueButton.d.ts",
      "import": "./dist/components/Button/vue/VueButton.js"
    },
    "./button/svelte": {
      "types": "./dist/components/Button/svelte/SvelteButton.d.ts",
      "import": "./dist/components/Button/svelte/SvelteButton.js"
    }
  }
}
```

### Source → Build → Import Mapping

**Source files in `lib/src/`:**
- `components/Button/core/_Button.ts` → builds to → `dist/components/Button/core/_Button.js`
- `components/Button/react/ReactButton.ts` → builds to → `dist/components/Button/react/ReactButton.js`

**Consumed via package.json exports:**
- `"./button"` → `dist/components/Button/core/_Button.js`
- `"./button/react"` → `dist/components/Button/react/ReactButton.js`

**Used in showcase (via npm link):**
```tsx
// showcase/src/pages/button/ButtonReact.tsx
import { ReactButton } from "agnosticui-core/button/react";

function Demo() {
  return <ReactButton variant="primary">Click me</ReactButton>;
}
```

### Critical: New Component Checklist
When adding a new component, you MUST:
1. ✅ Create framework wrappers in `lib/src/components/[Component]/[framework]/`
2. ✅ Add exports to `lib/package.json` for vanilla + React/Vue/Svelte
3. ✅ Build library (`cd lib && npm run build`) to generate `.d.ts` and `.js` files
4. ✅ Test imports in showcase using the consumer import pattern shown above

---

## 🏗️ Component Architecture Pattern

**Source Files:**
- `_Component.ts` - Canonical, immutable, upgrade-safe source of truth
- `Component.ts` - Experimental, AI-modifiable version for iteration

**Philosophy (See CLAUDE.md for full details):**
- **Minimalist & themeable styling** - Functional CSS only (visibility, display states). NO colors, fonts, spacing, or decorative properties
- **Design token integration** - All visual styling via `--ag-*` CSS custom properties
- **WAI-ARIA APG compliance mandatory** - Complete accessibility verification required before marking component "done"
- **Lit web components** - Maximum framework compatibility
- **Hover states** - White text on color = darken bg; dark text on light = lighten bg
- **Focus states** - Always use `--ag-focus` (never `currentColor`) for high-contrast outlines

**Design Token System:**
- Semantic tokens: `--ag-primary`, `--ag-text-primary`, `--ag-focus`, etc.
- Theme-aware: Light/dark mode support via `data-theme="dark"`
- Located in: `theme-registry/tokens/semantic.json`
- Build process: Style Dictionary → `lib/src/tokens/*.ts`
- **No fallback values**: Use `var(--ag-token)` NOT `var(--ag-token, fallback)` - design tokens are a precondition
- Recent additions: `--ag-text-locked` for contrast-critical cases

---

## 🎨 Component Prop Patterns (Standard)

All AgnosticUI v2 components follow consistent prop patterns established by Accordion and Button. These props enable "Minimalist & Themeable" styling by providing functional control points without hardcoding visual styles.

### Universal Props (Apply to Most Components)

#### Visual Control
- **`variant`** - Semantic color variants
  - Common values: `"primary" | "secondary" | "warning" | "danger" | "success" | "info" | "error"`
  - Usage: Buttons, Toasts, Tags, Alerts, Badges
  - Maps to design tokens: `--ag-primary`, `--ag-danger`, `--ag-warning`, etc.

- **`size`** - T-shirt sizing for consistent scale
  - Values: `"x-sm" | "sm" | "md" | "lg" | "xl"`
  - Usage: Buttons, Inputs, Icons, Typography
  - Maps to spacing tokens: `--ag-space-*`

- **`shape`** - Border radius control
  - Values: `"capsule" | "rounded" | "circle" | "square" | "rounded-square"`
  - Usage: Buttons, Tags, Avatars, Cards
  - Maps to radius tokens: `--ag-radius-*`

#### Styling Modifiers
- **`bordered`** - Add borders to structural elements
  - Type: `boolean`
  - Usage: Buttons, Cards, Tables, Accordions
  - Maps to: `--ag-border`, `--ag-border-subtle`

- **`background`** - Apply secondary background color
  - Type: `boolean`
  - Usage: Accordions, Cards, Panels
  - Maps to: `--ag-background-secondary`

- **`indicator`** - Show/hide visual indicators
  - Type: `boolean`
  - Usage: Accordions (chevrons), Selects (arrows), Expandable elements
  - Visual feedback for interactive states

#### State Props
- **`open`** - Control visibility/expanded state
  - Type: `boolean`
  - Usage: Modals, Dialogs, Menus, Toasts, Accordions, Dropdowns
  - Often combined with toggle functionality

- **`disabled`** - Disable interaction
  - Type: `boolean`
  - Usage: All interactive components (Buttons, Inputs, Selects, etc.)
  - Maps to: `--ag-background-disabled`, `cursor: not-allowed`

- **`loading`** - Show busy/loading state
  - Type: `boolean`
  - Usage: Buttons, Forms, Data components
  - Often disables interaction while loading

### Component-Specific Props

#### Positioning & Placement
- **`placement`** - Control tooltip/popover position (Tooltip, Popover)
  - Values: `"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"`
  - Example: `"start"` represents left-middle positioning

- **`vertical`** / **`horizontal`** - Layout orientation (Tabs, Button Groups)
  - Type: `boolean` (presence changes orientation)
  - Default: `horizontal` unless `vertical` attribute present
  - Usage: Tabs, Navigation, Button Groups

- **`verticalPosition`** - Vertical screen placement (Toast, Notification)
  - Values: `"top" | "bottom"`
  - Combined with `horizontalPosition` for full control

- **`horizontalPosition`** - Horizontal screen placement (Toast, Notification)
  - Values: `"left" | "center" | "right"`
  - Combined with `verticalPosition` for full control

#### Data-Driven Props
- **`value`** - Current value (Progress, Range, Input)
  - Type: `number | string`
  - Example: Progress bar current value

- **`max`** - Maximum value (Progress, Range)
  - Type: `number`
  - Example: Progress bar max value (default: 100)

- **`headers`** - Table column definitions (Table)
  - Type: `Array<{ label: string; key: string }>`
  - Defines table structure

- **`rows`** - Table data (Table)
  - Type: `Array<Record<string, any>>`
  - Data to display in table

#### Layout Modifiers
- **`striped`** - Alternating row backgrounds (Table)
  - Type: `boolean`
  - Takes priority over `bordered` when both present
  - Purpose: Improve readability in data tables

- **`grouped`** - Group adjacent elements (Button Group)
  - Type: `boolean`
  - Removes inner borders/radius between grouped items

#### Accessibility Props
- **`headingLevel`** - Semantic heading level (Accordion)
  - Type: `number` (1-6)
  - Default: `3` (h3)
  - Ensures proper document outline

### Prop Priority Rules

When multiple styling props are present:
1. **`striped`** takes priority over `bordered` (Tables)
2. **`loading`** implies `disabled` (Buttons, Forms)
3. **`ghost`** or `link` override `variant` background (Buttons)
4. **`grouped`** modifies `shape` behavior (Button Groups)

### Naming Conventions

- **Boolean props**: Presence indicates `true` (e.g., `<ag-button bordered>`)
- **Enum props**: Use kebab-case values (e.g., `variant="primary"`)
- **Numeric props**: Use numbers without units (e.g., `max="100"`)
- **Position props**: Use directional terms (top, bottom, left, right, center, start, end)

### Examples

```html
<!-- Button: variant + size + shape + bordered -->
<ag-button variant="primary" size="lg" shape="rounded" bordered>
  Save Changes
</ag-button>

<!-- Toast: variant + vertical/horizontal positioning + open -->
<ag-toast
  variant="success"
  verticalPosition="top"
  horizontalPosition="right"
  open>
  Successfully saved!
</ag-toast>

<!-- Tooltip: placement -->
<ag-tooltip placement="top-start">
  <span slot="trigger">Hover me</span>
  <span slot="content">Helpful information</span>
</ag-tooltip>

<!-- Accordion: indicator + bordered + background + open -->
<ag-accordion-item indicator bordered background open>
  <span slot="header">Section Title</span>
  <div slot="content">Section content here</div>
</ag-accordion-item>

<!-- Table: bordered + striped + headers + rows -->
<ag-table bordered striped .headers=${headers} .rows=${rows}></ag-table>

<!-- Tabs: vertical orientation -->
<ag-tabs vertical>
  <ag-tab-panel label="Settings">Settings content</ag-tab-panel>
  <ag-tab-panel label="Profile">Profile content</ag-tab-panel>
</ag-tabs>

<!-- Progress: value + max + variant -->
<ag-progress value="75" max="100" variant="success"></ag-progress>

<!-- Tag: variant + size + shape -->
<ag-tag variant="warning" size="sm" shape="rounded">Beta</ag-tag>
```

### Implementation Guidelines

1. **Reflect props as attributes** - Use `{ reflect: true }` for visual props to enable CSS selectors
2. **Provide sensible defaults** - Most props should be optional with reasonable defaults
3. **Document in SpecSheet** - Every prop must be documented in component's SpecSheet.md
4. **Test all combinations** - Verify prop interactions work correctly (e.g., bordered + striped)
5. **Use design tokens** - Props should map to `--ag-*` tokens, never hardcoded values

---

## 📂 File Locations

**All paths relative to:** `/Users/roblevin/workspace/opensource/agnosticui/v2/`

- **Component Source**: `lib/src/components/[Component]/core/_[Component].ts`
- **Component (Experimental)**: `lib/src/components/[Component]/core/[Component].ts`
- **Specifications**: `lib/src/components/[Component]/specifications/*.md`
- **SpecSheet**: `lib/src/components/[Component]/specifications/SpecSheet.md`
- **Tests**: `lib/src/components/[Component]/core/_[Component].spec.ts`
- **Framework Wrappers**: `lib/src/components/[Component]/[Component][Framework].ts`
- **Library Exports**: `lib/src/index.ts` (public API)
- **Theme Tokens**: `theme-registry/tokens/semantic.json`
- **Built Tokens**: `lib/src/tokens/*.ts`
- **Showcase Pages**: `showcase/src/pages/[component]/`
- **Framework Demos**: `showcase/src/pages/[component]/[Component][Framework].tsx`
- **Build Output**: `lib/dist/`

---

## 🚀 Quick Start for New Claude Sessions

When starting fresh work on AgnosticUI v2:

1. **Read `docs/CLAUDE.md`** - Critical project rules:
   - Minimalist & themeable CSS philosophy
   - WAI-ARIA APG compliance requirements
   - Hover/focus state patterns
   - Design token system
   - Accessibility checklist (mandatory before completion)

2. **Read this file** - Current status and per-component workflow

3. **Check component's SpecSheet** - `lib/src/components/[Component]/specifications/SpecSheet.md` (if exists)

4. **Review recent commits** - Understand current work context

5. **Start showcase dev server** - `cd showcase && npm run dev`

6. **Optional validation** - `cd lib && npm run lint && npm run typecheck && npm run test && npm run build`

**Working Directory:** `/Users/roblevin/workspace/opensource/agnosticui/v2/`

# Support Center — Lit Implementation

> Single-framework prompt. Generates a Lit implementation of the Support Center in `lit/`.

## Prerequisites

- Read `PROMPT-3-FRAMEWORKS.md` for the full design specification, data models, and component hierarchy
- Ensure you're in the `v2/playbooks/support` directory

## Project Setup

```bash
npm create vite@latest lit -- --template lit-ts
cd lit
npm install
npm install lit
```

### Initialize AgnosticUI

```bash
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add Button Tabs Dialog Drawer MessageBubble Combobox Toggle Radio Rating Select Pagination Tooltip Slider Popover Menu Kbd
```

### Copy Assets

```bash
cp ../design/logo.svg public/logo.svg
cp ../design/logo-dark-mode.svg public/logo-dark-mode.svg
```

### Font Setup

Add to `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

## Implementation

Build a single `src/support-app.ts` LitElement component implementing all four tabs described in `PROMPT-3-FRAMEWORKS.md`.

### Lit-Specific Patterns

- **No framework wrappers:** Import core `ag-*` web components directly (e.g., `import './components/ag/Button/core/Button'`)
- **Inline SVG icons:** Define all icons as `html` tagged template literals — Lucide doesn't work directly with Lit
- **Property binding:** Use dot-prefix `.property=${value}` for passing objects/arrays
- **Event listening:** Use `@event=${this._handler}` syntax
- **CSS in static styles:** All layout CSS goes inside the component's `static styles` — Shadow DOM blocks global styles
- **Reactive properties:** Use `@state()` for internal state and `@property()` for public API

### Entry Point

In `src/index.css`, import tokens:

```css
@import './components/ag/styles/ag-tokens.css';
@import './components/ag/styles/ag-tokens-dark.css';
```

In `index.html`, include the custom element:

```html
<support-app></support-app>
<script type="module" src="/src/support-app.ts"></script>
```

### Key Implementation Notes

1. **Tabs:** Use `slot="tab"` on `<ag-tab>` and `slot="panel"` on `<ag-tab-panel>`
2. **Drawer:** Use `.open=${this._drawerOpen}` property binding for boolean reactivity
3. **Dialog:** Use `.open=${this._dialogOpen}` property binding
4. **Select/Combobox:** Use `.options=${array}` property binding
5. **MessageBubble:** Set `alignment="end"` and `variant="primary"` for user messages

### SkinSwitcher

Create `src/skin-switcher.ts` following the same pattern as the dashboard playbook's Lit skin-switcher. Import from `../../../../skins/skin-switcher-core.js`.

## Reference

All design specs, data models, CSS, and component details are in `PROMPT-3-FRAMEWORKS.md`.

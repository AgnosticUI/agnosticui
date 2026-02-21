# Support Center — Vue Implementation

> Single-framework prompt. Generates a Vue implementation of the Support Center in `vue/`.

## Prerequisites

- Read `PROMPT-3-FRAMEWORKS.md` for the full design specification, data models, and component hierarchy
- Ensure you're in the `v2/playbooks/support` directory

## Project Setup

```bash
npm create vite@latest vue -- --template vue-ts
cd vue
npm install
npm install lucide-vue-next
npm install lit
```

### Initialize AgnosticUI

```bash
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add Button Tabs Dialog Drawer MessageBubble Combobox Toggle Radio Rating Select Pagination Tooltip Slider Popover Menu Kbd
```

### CRITICAL: Update `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
})
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

Build a single `App.vue` file (or split into sub-components) implementing all four tabs described in `PROMPT-3-FRAMEWORKS.md`.

### Vue-Specific Patterns

- Use `ref()` and `reactive()` for state management
- Use `onMounted()` for the `/` keyboard shortcut listener
- Use template refs for chat auto-scroll and combobox focus
- Import icons from `lucide-vue-next` as components
- Use `@change`, `@click` Vue event listeners
- Import Vue wrappers: `import VueButton from './components/ag/Button/vue/VueButton.vue'`

### Entry Point (`src/main.ts`)

```typescript
import { createApp } from 'vue'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

### SkinSwitcher

Create `src/SkinSwitcher.vue` following the same pattern as the dashboard playbook's Vue SkinSwitcher. Import from `../../../../skins/skin-switcher-core.js`.

## Reference

All design specs, data models, CSS, and component details are in `PROMPT-3-FRAMEWORKS.md`.

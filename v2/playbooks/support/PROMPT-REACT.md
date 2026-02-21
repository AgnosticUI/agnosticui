# Support Center — React Implementation

> Single-framework prompt. Generates a React implementation of the Support Center in `react/`.

## Prerequisites

- Read `PROMPT-3-FRAMEWORKS.md` for the full design specification, data models, and component hierarchy
- Ensure you're in the `v2/playbooks/support` directory

## Project Setup

```bash
npm create vite@latest react -- --template react-ts
cd react
npm install
npm install lucide-react
npm install lit
```

### Initialize AgnosticUI

```bash
npx agnosticui-cli init --framework react --skip-prompts
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

Build a single `App.tsx` file (or split into sub-components as needed) that implements all four tabs described in `PROMPT-3-FRAMEWORKS.md`.

### React-Specific Patterns

- Use `useState` for all state (messages, settings, drawer open, current page, etc.)
- Use `useEffect` for the `/` keyboard shortcut listener
- Use `useRef` for chat auto-scroll and combobox focus
- Import icons from `lucide-react`
- Use React event handlers (`onClick`, `onChange`) on ag-* wrapper components
- Import React wrappers: `import { ReactButton } from './components/ag/Button/react'`

### Entry Point (`src/main.tsx`)

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### SkinSwitcher

Create `src/SkinSwitcher.tsx` following the same pattern as the dashboard playbook's React SkinSwitcher. Import from `../../../../skins/skin-switcher-core.js`.

## Reference

All design specs, data models, CSS, and component details are in `PROMPT-3-FRAMEWORKS.md`.

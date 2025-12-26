# Frequently Asked Questions

<AlphaWarning />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
</script>

## General Questions

### What is AgnosticUI?

AgnosticUI is a framework-agnostic UI component library built on Lit web components. It provides beautiful, accessible UI components that work seamlessly with React, Vue, Lit, Svelte, and other modern frameworks.

### What makes AgnosticUI v2 different?

AgnosticUI v2 introduces a **"local-first"** approach where components are copied directly into your project rather than installed as dependencies in `node_modules`. This gives you:

- **Full ownership** - Components live in your codebase, easy to customize
- **AI-friendly** - Full context visibility for AI tools like Cursor, Claude, and Windsurf
- **Zero vendor lock-in** - No black-box dependencies
- **Reference + customization** - Keep a reference library while modifying your copies

### Which frameworks are supported?

AgnosticUI provides different levels of support:

- **React** - Full support with framework-specific wrappers
- **Vue 3** - Full support with framework-specific wrappers
- **Lit** - Full support (direct web component usage)
- **Svelte** - Basic support (direct web component usage)
- **Angular, Solid, and others** - Basic support (direct web component usage)

### Should I use the CLI or npm package?

**Use the CLI (recommended)** if you:
- Want to customize components
- Need full control over component code
- Want AI tools to understand your components
- Prefer components in your codebase

**Use the npm package** if you:
- Want a traditional dependency approach
- Don't need to modify component internals
- Prefer automatic updates via npm

## Installation & Setup

### How do I get started?

Run the initialization command in your project:

```bash
npx agnosticui-cli init
```

The interactive CLI will guide you through framework selection, component path setup, and dependency installation.

### What dependencies are required?

**All frameworks require:**
- `lit` (core web components library)
- `focus-trap` (for Dialog and modal accessibility)
- `@floating-ui/dom` (for Popover and Tooltip positioning)

**React additionally requires:**
- `@lit/react` (wrapper library for Lit components)

### Do I need TypeScript?

No, TypeScript is optional. However, if you use TypeScript with Lit components, you'll need to enable experimental decorators in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

### How do I configure Vite with Vue?

Add this to your `vite.config.ts` to recognize AgnosticUI web components:

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ag-"),
        },
      },
    }),
  ],
});
```

## Using Components

### How do I add components to my project?

Use the CLI to add components:

```bash
# Add a single component
npx agnosticui-cli add button

# Add multiple components
npx agnosticui-cli add button input checkbox card
```

### What happens when I add a component?

The CLI automatically:
1. Copies the component files to your project
2. Detects and copies component dependencies
3. Copies shared dependencies (like CloseButton)
4. Transforms import paths for your project structure
5. Updates your `agnosticui.config.json`
6. Provides copy-paste import examples

### Where are components stored?

By default, components are copied to `./src/components/ag/`. You can customize this location with the `--components-path` flag during init.

### How do I import components?

Import from your local components directory:

**React:**
```typescript
import { ReactButton } from "./components/ag/Button/react/ReactButton";
```

**Vue:**
```vue
<script setup>
import VueButton from "./components/ag/Button/vue/VueButton.vue";
</script>
```

**Lit:**
```typescript
import "./components/ag/Button/core/Button.js";
```

### Can I modify the components?

Yes! That's the whole point. Components in `./src/components/ag/` are yours to modify freely. The reference library in `./agnosticui/` remains unchanged for context.

### What if I modify a component and want to update it later?

Use the `--force` flag to overwrite your modifications:

```bash
npx agnosticui-cli add button --force
```

Or manually compare your changes with the reference library in `./agnosticui/lib/`.

## Theming & Styling

### How does theming work?

AgnosticUI uses CSS custom properties (CSS variables) for all styling. Change the theme by overriding tokens:

```css
:root {
  --ag-primary: #your-brand-color;
  --ag-radius-md: 0.5rem;
  --ag-font-size-base: 1rem;
}
```

### How do I enable dark mode?

Add the `data-theme="dark"` attribute to your `<html>` element:

```html
<html lang="en" data-theme="dark">
```

AgnosticUI automatically switches token values when this attribute is present.

### Can I create custom themes?

Yes! Override any of the 60+ design tokens. For example, to create a purple theme:

```css
:root {
  --ag-primary: #9333ea;
  --ag-focus: #a855f7;
}
```

See the [theming documentation](/docs/theming) for the complete token list.

### Do components have built-in styles?

Yes, components come with beautiful default styling that's fully customizable through design tokens. The styling is minimal and focused on layout/accessibility, with visual styling controlled by tokens.

## CLI Questions

### What does `agnosticui.config.json` do?

This file tracks your AgnosticUI setup:
- Framework choice
- Component and reference library paths
- Which components you've added
- Tarball source and version info

### How do I list available components?

```bash
npx agnosticui-cli list
```

This shows all 57+ available components and marks which ones you've already added.

### Can I use a shorter command than `npx agnosticui-cli`?

Yes! Install the CLI globally to use the `ag` shorthand:

```bash
npm install -g agnosticui-cli@alpha

# Now you can use:
npx ag init
npx ag add button
npx ag list
```

**Note:** If you have "The Silver Searcher" tool installed (which also uses `ag`), stick with the full `npx agnosticui-cli` command to avoid conflicts.

### How do I update the reference library?

Use the sync command with a new tarball:

```bash
npx agnosticui-cli sync --tarball /path/to/agnosticui-local-v0.0.2.tar.gz
```

This updates `./agnosticui/` without touching your customized components.

### Can I remove components?

Yes, use the remove command:

```bash
npx agnosticui-cli remove button card
```

## Technical Questions

### What is the `_Component.ts` vs `Component.ts` pattern?

- **`_Component.ts`** - Immutable canonical reference (upgrade-safe)
- **`Component.ts`** - Experimental version you can modify

This separation ensures you can always reference the official pattern while experimenting with modifications.

### How do events work with React?

AgnosticUI uses `@lit/react` which automatically maps web component events to React props:

```typescript
<ReactButton
  onToggle={(event) => console.log(event.detail)}
  onClick={(event) => console.log(event)}
/>
```

Custom events come through as `on[EventName]` props with event details in `event.detail`.

### How do events work with Vue?

Vue handles custom events natively:

```vue
<VueButton
  @toggle="(event) => console.log(event.detail)"
  @click="handleClick"
/>
```

### Why do I need experimental decorators for TypeScript?

Lit uses TypeScript decorators (like `@property`) which require experimental decorator support. Add this to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

### Can I use AgnosticUI with SSR/SSG?

Yes, but web components require some consideration:
- Components must be imported client-side
- Use dynamic imports in Next.js/Nuxt
- Hydration works automatically once components load

### What browsers are supported?

AgnosticUI supports all modern browsers that support:
- Web Components (Custom Elements, Shadow DOM)
- ES2020
- CSS Custom Properties

This includes Chrome 80+, Firefox 75+, Safari 13.1+, and Edge 80+.

## Accessibility

### Are components accessible?

Yes! All components follow [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) patterns:
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

### How is focus management handled?

Interactive components like Dialog and Drawer use `focus-trap` to maintain focus within the component when open and restore focus when closed.

### Can I customize ARIA labels?

Yes, most components accept `aria-label`, `aria-labelledby`, and other ARIA attributes as props.

## Migration & Upgrades

### How do I upgrade from v1 to v2?

AgnosticUI v2 is a complete rewrite with a different architecture. There's no automatic migration path. Key differences:

- v2 uses local-first approach (CLI)
- Different component API (web components)
- Token-based theming system
- Framework wrappers instead of separate packages

### What happened to CSS utilities?

AgnosticUI v1 provided lightweight CSS utility classes, but v2 has opted to NOT provide those anymore. This keeps the library focused on UI component primitives and maintains a lightweight core.

If you need utilities, consider using:
- [Tailwind CSS](https://tailwindcss.com)
- [Open Props](https://open-props.style)
- [UnoCSS](https://unocss.dev)

### How do I stay updated?

- Check the [GitHub releases](https://github.com/AgnosticUI/agnosticui)
- Follow [@AgnosticUI](https://twitter.com/AgnosticUI) on Twitter
- Join discussions in GitHub issues

## Troubleshooting

### Components aren't rendering in React

Make sure you've:
1. Imported the CSS tokens
2. Installed `@lit/react`
3. Used the React wrapper (e.g., `ReactButton` not `ag-button`)

### Dark mode isn't working

Check that you:
1. Imported both `ag-tokens.css` and `ag-tokens-dark.css`
2. Added `data-theme="dark"` to your `<html>` element
3. Used theme tokens in your CSS (e.g., `var(--ag-background-primary)`)

### Vue shows warnings about unknown custom elements

Add this to your `vite.config.ts`:

```typescript
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("ag-"),
    },
  },
})
```

### TypeScript errors with decorators

Add experimental decorator support to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

### Import paths are breaking

Make sure you're importing from the correct relative path based on your project structure. The CLI transforms paths automatically, but if you move files, you may need to adjust imports.

## Contributing

### Can I contribute components?

Yes! AgnosticUI welcomes contributions. See the [GitHub repository](https://github.com/AgnosticUI/agnosticui) for contribution guidelines.

### How do I report bugs?

File an issue on [GitHub](https://github.com/AgnosticUI/agnosticui/issues) with:
- Component name and version
- Framework and version
- Steps to reproduce
- Expected vs actual behavior

# Installation

<AlphaWarning />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
</script>

AgnosticUI can be installed in two ways: using the **AgnosticUI CLI** (recommended) or as an **npm package**. Choose the approach that best fits your workflow.

## AgnosticUI CLI (Recommended)

The AgnosticUI CLI provides a "local-first" approach where components are copied directly into your project. This gives you full ownership and control over the component code, making it easy to customize and extend components without worrying about breaking changes from upstream updates.

::: warning TypeScript Required
The CLI copies TypeScript (`.ts`) files containing decorators and type annotations. Your project **must** have a build tool that can compile TypeScript (e.g., Vite, webpack with ts-loader, or tsc). If your project uses plain JavaScript without TypeScript support, use the [NPM Package approach](#npm-package-alternative) instead.
:::

### Quick Start

Initialize AgnosticUI in your project root:

```bash
# Initialize with the CLI
npx agnosticui-cli init
```

The interactive CLI will guide you through:

1. Selecting your framework (React, Vue, Lit, Svelte)
2. Choosing where to generate components
3. Installing required dependencies (`lit`, `@floating-ui/dom`, etc.)
4. Configuring TypeScript (if detected)

::: tip CLI Command Variants
We recommend using `npx agnosticui-cli` since it works without requiring a global install. However, if you prefer the shorter `npx ag` variant, first install the CLI globally:

```bash
npm install -g agnosticui-cli@alpha
```

After global installation, all `npx agnosticui-cli` commands can be replaced with `npx ag` (e.g., `npx ag init`, `npx ag add button`).

**Note:** If you have "The Silver Searcher" tool installed (which also uses the `ag` command), you may experience conflicts. In that case, stick with the full `npx agnosticui-cli` variant.
:::

#### After Initialization

Follow the "Next Steps" printed by the CLI:

1. **Import CSS Tokens**

   Add the following to your main entry file (e.g., `main.ts`, `main.jsx`):

   ```js
   import "./src/components/ag/styles/ag-tokens.css";
   import "./src/components/ag/styles/ag-tokens-dark.css";
   ```

   **Alternative: Use HTML Link Tags**

   You can also load the styles directly in your `index.html`:

   ```html
   <link rel="stylesheet" href="/src/components/ag/styles/ag-tokens.css" />
   <link rel="stylesheet" href="/src/components/ag/styles/ag-tokens-dark.css" />
   ```

2. **Set Up Theming**

   ::: warning Vite Default Dark Mode
   Vite's default template uses a dark background (`#242424`). You'll need to override this to use AgnosticUI's theme system.
   :::

   AgnosticUI uses a `data-theme` attribute on the `<html>` element to control theming. Add this to your main CSS file or in a `<style>` tag:

   ```css
   body {
     background: var(--ag-background-primary);
     color: var(--ag-text-primary);
     transition: background 0.2s ease, color 0.2s ease;
   }
   ```

   **Enable Dark Mode:**

   Add the `data-theme="dark"` attribute to your `<html>` element:

   ```html
   <html lang="en" data-theme="dark"></html>
   ```

   **Optional: Theme Toggle**

   Add a theme toggle button to your app:

   ```html
   <button id="theme-toggle">Toggle Dark Mode</button>
   <script>
     const toggleBtn = document.getElementById("theme-toggle");
     const html = document.documentElement;

     toggleBtn?.addEventListener("click", () => {
       const isDark = html.getAttribute("data-theme") === "dark";
       if (isDark) {
         html.removeAttribute("data-theme");
       } else {
         html.setAttribute("data-theme", "dark");
       }
     });
   </script>
   ```

3. **Add Components**

   Use the CLI to add the components you need:

   ```bash
   npx agnosticui-cli add button input card
   ```

4. **Use Components**

   Import and use them in your app:

   ```js
   // Below depends on where you are importing from. You will need
   // to adjust the relative path based on your project structure.
   import VueButton from "./src/components/ag/Button/vue/VueButton.vue";
   ```

Initialize AgnosticUI in your project:

```bash
npx agnosticui-cli init --framework vue
```

Replace `vue` with your framework of choice: `react`, `lit`, or `svelte`.

This command will:

- Extract the AgnosticUI reference library to `./agnosticui/`
- Create an `agnosticui.config.json` configuration file
- Set up design tokens in your components directory
- Install required dependencies

### Required Dependencies

The CLI automatically installs these dependencies based on your framework:

**All frameworks require:**

- `lit` - Core web components library
- `focus-trap` - Used by Dialog and modal components for accessibility
- `@floating-ui/dom` - Used by Popover and Tooltip for positioning

**React also requires:**

- `@lit/react` - Wrapper library for using Lit web components in React

**Note on framework support:**

- **React** and **Vue** have full framework-specific wrappers for all components
- **Lit** uses web components directly (no wrappers needed)
- **Svelte** and other frameworks use the Lit web components directly

### Adding Components

Add components to your project:

```bash
# Add a single component
npx agnosticui-cli add button

# Add multiple components
npx agnosticui-cli add button input checkbox

# Overwrite existing components
npx agnosticui-cli add button --force
```

Components are copied to `./src/components/ag/` by default (customizable with `--components-path`).

### Listing Available Components

See all available components and which ones you've already added:

```bash
npx agnosticui-cli list
```

### Project Structure

After initialization, your project will have:

```
your-project/
├── agnosticui/                    # Reference library (don't modify)
│   ├── lib/                       # Component source files
│   ├── tokens/                    # Design tokens
│   └── components.json            # Component registry
├── src/
│   └── components/
│       └── ag/                    # Your components (fully customizable)
│           ├── Button/
│           │   ├── core/          # Core Web Component
│           │   └── react/         # Framework wrapper (if applicable)
│           ├── Input/
│           └── styles/            # CSS tokens
│               ├── ag-tokens.css
│               └── ag-tokens-dark.css
└── agnosticui.config.json         # CLI configuration
```

### Using Components

Import components from your local components directory:

#### React

```typescript
import { ReactButton } from "./components/ag/Button/react/ReactButton";
import { ReactInput } from "./components/ag/Input/react/ReactInput";

function App() {
  return (
    <>
      <ReactButton variant="primary">Click me</ReactButton>
      <ReactInput label="Email" type="email" />
    </>
  );
}
```

#### Vue

```vue
<script setup>
import VueButton from "./components/ag/Button/vue/VueButton.vue";
import VueInput from "./components/ag/Input/vue/VueInput.vue";
</script>

<template>
  <VueButton variant="primary">Click me</VueButton>
  <VueInput label="Email" type="email" />
</template>
```

#### Lit

```typescript
import { html, LitElement } from "lit";
import "./components/ag/Button/core/Button";
import "./components/ag/Input/core/Input";

class MyApp extends LitElement {
  render() {
    return html`
      <ag-button variant="primary">Click me</ag-button>
      <ag-input label="Email" type="email"></ag-input>
    `;
  }
}
```

#### Svelte / Other Frameworks

For Svelte, Angular, Solid, or other frameworks, use the Lit web components directly:

```svelte
<script>
  import './components/ag/Button/core/Button';
  import './components/ag/Input/core/Input';
</script>

<ag-button variant="primary">Click me</ag-button>
<ag-input label="Email" type="email"></ag-input>
```

### CSS Tokens

The CLI automatically copies design tokens to `./src/components/ag/styles/`. Import them in your application:

```css
/* In your main CSS file */
@import "./components/ag/styles/ag-tokens.css";

/* Optional: Dark theme */
@import "./components/ag/styles/ag-tokens-dark.css";
```

Or import in JavaScript:

```typescript
// In your main entry file (e.g., main.tsx, main.ts)
import "./components/ag/styles/ag-tokens.css";
import "./components/ag/styles/ag-tokens-dark.css"; // Optional
```

### Configuration Options

Customize the CLI behavior with command-line flags:

```bash
# Specify a custom components path
npx agnosticui-cli init --framework vue --components-path ./src/ui/agnostic

# Use a local tarball (for development/testing)
npx agnosticui-cli init --framework vue --tarball /path/to/agnosticui-local-v0.0.1.tar.gz
```

Your `agnosticui.config.json` will store these settings:

```json
{
  "version": "2.0.0-alpha",
  "framework": "vue",
  "paths": {
    "reference": "./agnosticui",
    "components": "./src/components/ag"
  }
}
```

### Syncing Updates (Development)

During active development, you can sync the reference library with a new tarball:

```bash
npx agnosticui-cli sync --tarball /path/to/agnosticui-local-v0.0.2.tar.gz
```

This updates the reference library in `./agnosticui/` without touching your customized components.

## TypeScript Configuration

If using TypeScript with Lit web components, enable experimental decorators in your TypeScript configuration (e.g., `tsconfig.app.json` or `tsconfig.json`):

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

**Note:** If using Vite, these settings should only be in your TypeScript config, not in `vite.config.ts` under `esbuild.tsconfigRaw`. esbuild's implementation of experimental decorators is incomplete and can cause errors with Lit's `@property` decorator.

### Vite Configuration

When using AgnosticUI with Vue and Vite, configure Vite to recognize `<ag-*>` components as custom elements in your `vite.config.ts`:

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

This prevents Vue from treating AgnosticUI web components as Vue components.

## NPM Package (Alternative)

For a more traditional approach, install AgnosticUI as an npm package. This method is suitable if you prefer using components as external dependencies.

### Installation

Install the core package:

```bash
npm install agnosticui-core
```

Install required dependencies based on your framework:

```bash
# All frameworks need these base dependencies
npm install lit focus-trap @floating-ui/dom

# React also needs
npm install @lit/react

# Install your framework's runtime if not already installed
npm install react react-dom  # For React
npm install vue              # For Vue
```

### Using Components

Import components directly from the package:

#### React

```typescript
import { ReactButton } from "agnosticui-core/button/react";
import { ReactInput } from "agnosticui-core/input/react";

function App() {
  return (
    <>
      <ReactButton variant="primary">Click me</ReactButton>
      <ReactInput label="Email" type="email" />
    </>
  );
}
```

#### Vue

```vue
<script setup>
import { VueButton } from "agnosticui-core/button/vue";
import { VueInput } from "agnosticui-core/input/vue";
</script>

<template>
  <VueButton variant="primary">Click me</VueButton>
  <VueInput label="Email" type="email" />
</template>
```

#### Lit

```typescript
import "agnosticui-core/button";
import "agnosticui-core/input";
import { html, LitElement } from "lit";

class MyApp extends LitElement {
  render() {
    return html`
      <ag-button variant="primary">Click me</ag-button>
      <ag-input label="Email" type="email"></ag-input>
    `;
  }
}
```

#### Svelte / Other Frameworks

```svelte
<script>
  import 'agnosticui-core/button';
  import 'agnosticui-core/input';
</script>

<ag-button variant="primary">Click me</ag-button>
<ag-input label="Email" type="email"></ag-input>
```

### CSS Tokens

Import design tokens in your application:

```typescript
// In your main entry file
import "agnosticui-core/styles/tokens.css";
import "agnosticui-core/styles/tokens-dark.css"; // Optional: Dark theme
```

Or in CSS:

```css
@import "agnosticui-core/styles/tokens.css";
@import "agnosticui-core/styles/tokens-dark.css"; /* Optional */
```

### Package Exports

The package provides granular exports for each component and framework:

```typescript
// Core web components
import "agnosticui-core/button";
import "agnosticui-core/input";

// React wrappers
import { ReactButton } from "agnosticui-core/button/react";
import { ReactInput } from "agnosticui-core/input/react";

// Vue wrappers
import { VueButton } from "agnosticui-core/button/vue";
import { VueInput } from "agnosticui-core/input/vue";

// CSS tokens
import "agnosticui-core/styles/tokens.css";
import "agnosticui-core/styles/tokens-dark.css";
```

## Troubleshooting

### Decorator Support (Preact, Solid, Babel-based frameworks)

If using Preact, Solid, or other frameworks that rely on Babel for JSX transformation, you may encounter decorator errors. Fix by excluding AgnosticUI files from Babel and adding TypeScript declarations:

**1. Update `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite' // or your framework plugin

export default defineConfig({
  plugins: [
    preact({
      exclude: [/\/components\/ag\//], // Let esbuild handle AgnosticUI files
    })
  ],
})
```

**2. Create `src/components/ag/ag-elements.d.ts`:**

```typescript
declare namespace preact.JSX {
  interface IntrinsicElements {
    'ag-button': {
      variant?: string;
      size?: string;
      onClick?: () => void;
      children?: preact.ComponentChildren;
    };
    // Add other ag-* elements as needed
  }
}
```

## Comparison: CLI vs NPM

| Feature                | CLI (Recommended)                    | NPM Package                        |
| ---------------------- | ------------------------------------ | ---------------------------------- |
| **Setup**              | `npx agnosticui-cli init`            | `npm install agnosticui-core`      |
| **Component Location** | Local in your project                | node_modules                       |
| **Customization**      | Full control - edit freely           | Limited - must extend/wrap         |
| **Updates**            | Manual - copy new versions           | Automatic - npm update             |
| **Bundle Size**        | Only components you use              | Tree-shakeable                     |
| **TypeScript**         | Required (copies .ts files)          | Full type definitions              |
| **Build Tool**         | Must support TS compilation          | Any modern bundler                 |
| **Best For**           | TS projects needing customization    | Quick prototyping, JS projects     |

## Framework Support

AgnosticUI provides different levels of support for each framework:

| Framework   | Support Level | Implementation                                 |
| ----------- | ------------- | ---------------------------------------------- |
| **React**   | Full          | Framework-specific wrappers for all components |
| **Vue**     | Full          | Framework-specific wrappers for all components |
| **Lit**     | Full          | Direct web component usage                     |
| **Svelte**  | Basic         | Direct web component usage                     |
| **Angular** | Basic         | Direct web component usage                     |
| **Solid**   | Basic         | Direct web component usage                     |
| **Other**   | Basic         | Direct web component usage                     |

All frameworks can use the underlying Lit web components. React and Vue have additional framework-specific wrappers for a more native development experience.

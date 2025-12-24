# Installation

<AlphaWarning />

<script setup>
import AlphaWarning from './components/AlphaWarning.vue'
</script>

AgnosticUI can be installed in two ways: using the **AgnosticUI CLI** (recommended) or as an **npm package**. Choose the approach that best fits your workflow.

## AgnosticUI CLI (Recommended)

The AgnosticUI CLI provides a "local-first" approach where components are copied directly into your project. This gives you full ownership and control over the component code, making it easy to customize and extend components without worrying about breaking changes from upstream updates.

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

::: tip CLI Aliases
If you have "The Silver Searcher" installed (command `ag`), avoid using `npx ag init` as it may conflict. Always use the full package name `npx agnosticui-cli init` or install globally.
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

2. **Add Components**

   Use the CLI to add the components you need:

   ```bash
   npx agnosticui-cli add button input card
   ```

3. **Use Components**

   Import and use them in your app:

   ```js
   // Below depends on where you are importing from. You will need
   // to adjust the relative path based on your project structure.
   import { VueButton } from "./src/components/ag/Button/vue/VueButton";
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
import { VueButton } from "./components/ag/Button/vue/VueButton.js";
import { VueInput } from "./components/ag/Input/vue/VueInput.js";
</script>

<template>
  <VueButton variant="primary">Click me</VueButton>
  <VueInput label="Email" type="email" />
</template>
```

#### Lit

```typescript
import { html, LitElement } from "lit";
import "./components/ag/Button/core/Button.js";
import "./components/ag/Input/core/Input.js";

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
  import './components/ag/Button/core/Button.js';
  import './components/ag/Input/core/Input.js';
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

## Comparison: CLI vs NPM

| Feature                | CLI (Recommended)              | NPM Package                        |
| ---------------------- | ------------------------------ | ---------------------------------- |
| **Setup**              | `npx agnosticui-cli init`      | `npm install agnosticui-core`      |
| **Component Location** | Local in your project          | node_modules                       |
| **Customization**      | Full control - edit freely     | Limited - must extend/wrap         |
| **Updates**            | Manual - copy new versions     | Automatic - npm update             |
| **Bundle Size**        | Only components you use        | Tree-shakeable                     |
| **TypeScript**         | Full type definitions          | Full type definitions              |
| **Best For**           | Projects needing customization | Quick prototyping, minimal changes |

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

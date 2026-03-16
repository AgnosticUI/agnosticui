# Installation

<AlphaWarning />

<script setup>
import AlphaWarning from './components/AlphaWarning.vue'
</script>

AgnosticUI can be installed in two ways: using the **AgnosticUI CLI** (recommended) or as an **npm package**. Choose the approach that best fits your workflow.

## AgnosticUI CLI (Recommended)

The AgnosticUI CLI provides a "local-first" approach where components are copied directly into your project. This gives you full ownership and control over the component code, making it easy to customize and extend components without worrying about breaking changes from upstream updates.

::: warning TypeScript Required
The CLI copies TypeScript (`.ts`) files containing decorators and type annotations. Your project **must** have a build tool that can compile TypeScript (e.g., [Vite](https://vite.dev/guide/), [esbuild](https://esbuild.github.io/), or [rollup](https://rollupjs.org/)). If you're using a framework CLI (Next.js, SvelteKit, Astro, Nuxt, etc.),
TypeScript support is already included. If your project uses plain JavaScript without TypeScript support, use the [NPM Package approach](#npm-package-alternative) instead.
:::

Starting from scratch? The quickest path is Vite:

```shell
npm create vite@latest my-app && cd my-app && npm i
```

### Quick Start

Initialize AgnosticUI in your project root:

```bash
# Initialize with the CLI
npx agnosticui-cli init
```

The interactive CLI will prompt you to select your framework, choose where
to generate components, and install required dependencies. TypeScript
configuration is handled automatically if detected.

::: tip CLI Command Variants
We recommend using `npx agnosticui-cli` since it works without requiring a global install. However, if you prefer the shorter `npx ag` variant, first install the CLI globally:

::: code-group

```sh [npm]
npm install -g agnosticui-cli@alpha
```

```sh [yarn]
yarn global add agnosticui-cli@alpha
```

```sh [pnpm]
pnpm add -g agnosticui-cli@alpha
```

```sh [bun]
bun add -g agnosticui-cli@alpha
```

:::

After global installation, all `npx agnosticui-cli` commands can be replaced with `npx ag` (e.g., `npx ag init`, `npx ag add button`).

**Note:** If you have The Silver Searcher installed, its `ag` command will conflict. Stick with `npx agnosticui-cli` instead.
:::

#### After Initialization

Follow the "Next Steps" printed by the CLI:

1. **Import CSS Tokens**

Add the following to your main entry file (e.g., `main.ts`, `main.tsx`):

```ts
import "./components/ag/styles/ag-tokens.css";
import "./components/ag/styles/ag-tokens-dark.css";
```

> **Note:** The exact path depends on where your entry file lives. If imports fail, check the path relative to your `main.ts` or `main.jsx`.

**Alternative: Use HTML Link Tags**

You can also load the styles directly in your `index.html`:

```html
<link rel="stylesheet" href="/src/components/ag/styles/ag-tokens.css" />
<link rel="stylesheet" href="/src/components/ag/styles/ag-tokens-dark.css" />
```

You can view the full list of theme tokens available in <a href="https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/styles/ag-tokens.css" target="_blank">ag-tokens.css</a> and <a href="https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/styles/ag-tokens-dark.css" target="_blank">ag-tokens-dark.css</a>.

2. **Set Up Theming**

   ::: tip Override Default Styles
   Many build tools (Vite, Create React App, etc.) include default background colors. You may need to override these to use AgnosticUI's theme system. See the [Theming Guide](./theming.md) for framework-specific details.
   :::

   AgnosticUI uses a `data-theme` attribute on the `<html>` element to control theming. Add this to your main CSS file or in a `<style>` tag:

   ```css
   body {
     background: var(--ag-background-primary);
     color: var(--ag-text-primary);
     transition:
       background 0.2s ease,
       color 0.2s ease;
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

4. **Wire Up Your AI Coding Assistant**

   Generate a context file so tools like Claude Code, Cursor, or Copilot know your installed components, their prop types, and import paths:

   ```bash
   npx agnosticui-cli context
   ```

   AgnosticUI auto-detects which AI tool you're using and writes to the right file. Re-run after adding more components to keep context current. See the [Generating AI Context](#generating-ai-context) section below for `--format` and `--output` options.

5. **Use Components**

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

### Syncing Updates

The `sync` command updates the reference library in `./agnosticui/` and shared infrastructure files without touching your installed components. After syncing, re-add any components you want to update:

```bash
npx agnosticui-cli add input --force
```

#### Pull Latest from NPM

Run without any flags to download and apply the latest published version:

```bash
npx agnosticui-cli sync
```

#### Pin a Specific Version or Tag

Use `--tag` to target a dist-tag or exact semver:

```bash
# Latest alpha release
npx agnosticui-cli sync --tag alpha

# Specific version
npx agnosticui-cli sync --tag 2.0.0-alpha.21
```

#### Use a Local Tarball

Point to a locally built tarball with `--tarball`. Useful when testing unpublished changes:

```bash
npx agnosticui-cli sync --tarball /path/to/agnosticui-local-v2.0.0.tar.gz
```

#### Re-initialize with --force

If the reference library or shared infrastructure gets out of sync, `init --force` re-runs initialization without prompts. Existing config values (framework, components path) are reused and installed components are not modified:

```bash
npx agnosticui-cli init --force

# Or target a specific version
npx agnosticui-cli init --force --tag 2.0.0-alpha.21
```

### Installing Playbooks

Playbooks are pre-built, self-contained page templates (login forms, dashboards, data grids, etc.) that you can install directly into your project as a starting point or reference.

List all available playbooks:

```bash
npx agnosticui-cli playbook --list
```

Install a playbook into your project:

```bash
npx agnosticui-cli playbook <slug> --framework <react|vue|lit>
```

For example:

```bash
npx agnosticui-cli playbook login --framework react
npx agnosticui-cli playbook dashboard --framework vue
npx agnosticui-cli playbook grid --framework lit
```

Files are written to `src/playbooks/<slug>/` by default. Use `--path` to choose a different destination:

```bash
npx agnosticui-cli playbook login --framework react --path ./my-login
```

Each playbook is a self-contained Vite project. Once installed, run it directly to see it in the browser:

```bash
cd src/playbooks/login
npm install
npm run dev
```

Or copy only the pieces you need into your own project.

### Generating AI Context

Once you have components installed, generate an AI context file so your coding assistant knows their prop types and import paths:

```bash
npx agnosticui-cli context
```

AgnosticUI auto-detects configured tools (Claude Code, Cursor, Copilot, Windsurf, and others) and writes a formatted context block to the appropriate file. If multiple tools are detected, it prompts you to choose.

Re-running the command after adding more components splices the updated content in place — it never duplicates or overwrites unrelated content.

Use `--format` to target a specific tool explicitly:

```bash
npx agnosticui-cli context --format cursor    # .cursor/rules/agnosticui.mdc (MDC frontmatter added)
npx agnosticui-cli context --format claude    # CLAUDE.md
npx agnosticui-cli context --format copilot  # .github/copilot-instructions.md
npx agnosticui-cli context --format windsurf # .windsurfrules
npx agnosticui-cli context --format openai   # AGENTS.md
npx agnosticui-cli context --format gemini   # GEMINI.md
npx agnosticui-cli context --format generic  # llms.txt
```

Use `--output` to write to a custom path instead:

```bash
npx agnosticui-cli context --output ./docs/agnosticui-context.md
```

## Storybook Integration

::: warning Experimental: Use with Caution
npx agnosticui-cli storybook is in an evaluation phase. Due to its high maintenance overhead, this feature may be deprecated or removed depending on community feedback and adoption.
Run with --force after CLI upgrades to sync templates.
:::

Once you have components installed, `npx agnosticui-cli storybook` sets up [Storybook](https://storybook.js.org) and generates a story file for every component in your project. This is a one-time opt-in command: run it once to configure Storybook, then use `npm run storybook` to start the dev server.

```bash
npx agnosticui-cli storybook
```

This command will:

1. Install the appropriate Storybook packages for your framework (`storybook@^10`, `@storybook/react-vite`, `@storybook/addon-docs`, `@storybook/addon-a11y`, etc.)
2. Write `.storybook/main.ts`, `.storybook/preview.ts`, and `.storybook/manager.ts` — all pre-configured for AgnosticUI's Vite setup
3. Generate a `.stories.tsx` / `.stories.ts` file for every installed component, co-located next to the component
4. Add a `"storybook"` script to your `package.json`

Then start Storybook:

```bash
npm run storybook
```

Auto-generated stories for all your installed components are ready to browse. CSS tokens are imported automatically so components render with your project's theme.

### Skipping Package Installation

If Storybook packages are already installed, skip the install step:

```bash
npx agnosticui-cli storybook --skip-install
```

### Regenerating Stories

All generated files start with an `AUTO-GENERATED` comment so you know not to edit them by hand. Use `--force` to overwrite the Storybook config files and regenerate all story files:

```bash
npx agnosticui-cli storybook --force
```

Without `--force`, existing story files are left unchanged (skipped files are listed in the output).

::: tip Story co-generation with `ag add`
When Storybook is configured (`.storybook/main.ts` exists), adding a component also generates its story file automatically:

```bash
npx agnosticui-cli add button
# Writes Button/react/Button.stories.tsx alongside the component
```

Use `npx agnosticui-cli add --force` to regenerate both the component and its story.
:::

### Keeping Stories Up to Date

When the AgnosticUI CLI is updated (for example, when a new Storybook major is supported), run `npx agnosticui-cli storybook --force` to regenerate all config and story files from the latest templates. The `agnosticui.config.json` records the Storybook version used so future tooling can detect when an upgrade is needed.

### Customizing Generated Stories

::: danger Do not edit generated story files directly
Every `.stories.tsx` / `.stories.ts` file written by the CLI starts with an `AUTO-GENERATED` header. Editing these files directly will cause your changes to be silently overwritten the next time you run `npx agnosticui-cli storybook --force` or re-add a component with `--force`. There is no merge step — the file is replaced wholesale.
:::

If you want to write custom stories, copy the file and give it a different name:

```
Button/react/Button.stories.tsx          # auto-generated, will be overwritten
Button/react/Button.stories.custom.tsx   # your customizations, never touched by CLI
```

Storybook picks up both files automatically, so your custom stories appear alongside the generated ones.

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

::: code-group

```sh [npm]
npm install agnosticui-core
```

```sh [yarn]
yarn add agnosticui-core
```

```sh [pnpm]
pnpm add agnosticui-core
```

```sh [bun]
bun add agnosticui-core
```

:::

Install required dependencies based on your framework:

::: code-group

```sh [npm]
# All frameworks need these base dependencies
npm install lit focus-trap @floating-ui/dom

# React also needs
npm install @lit/react

# Install your framework's runtime if not already installed
npm install react react-dom  # For React
npm install vue              # For Vue
```

```sh [yarn]
# All frameworks need these base dependencies
yarn add lit focus-trap @floating-ui/dom

# React also needs
yarn add @lit/react

# Install your framework's runtime if not already installed
yarn add react react-dom  # For React
yarn add vue              # For Vue
```

```sh [pnpm]
# All frameworks need these base dependencies
pnpm add lit focus-trap @floating-ui/dom

# React also needs
pnpm add @lit/react

# Install your framework's runtime if not already installed
pnpm add react react-dom  # For React
pnpm add vue              # For Vue
```

```sh [bun]
# All frameworks need these base dependencies
bun add lit focus-trap @floating-ui/dom

# React also needs
bun add @lit/react

# Install your framework's runtime if not already installed
bun add react react-dom  # For React
bun add vue              # For Vue
```

:::

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
import { defineConfig } from "vite";
import preact from "@preact/preset-vite"; // or your framework plugin

export default defineConfig({
  plugins: [
    preact({
      exclude: [/\/components\/ag\//], // Let esbuild handle AgnosticUI files
    }),
  ],
});
```

**2. Create `src/components/ag/ag-elements.d.ts`:**

```typescript
declare namespace preact.JSX {
  interface IntrinsicElements {
    "ag-button": {
      variant?: string;
      size?: string;
      onClick?: () => void;
      children?: preact.ComponentChildren;
    };
    // Add other ag-* elements as needed
  }
}
```

::: tip Finding Component Props
Each component exports a `Props` interface you can reference. For example, see `ButtonProps` in `src/components/ag/Button/core/_Button.ts` for all available button properties and their types.
:::

## Comparison: CLI vs NPM

| Feature                | CLI (Recommended)                 | NPM Package                    |
| ---------------------- | --------------------------------- | ------------------------------ |
| **Setup**              | `npx agnosticui-cli init`         | `npm install agnosticui-core`  |
| **Component Location** | Local in your project             | node_modules                   |
| **Customization**      | Full control - edit freely        | Limited - must extend/wrap     |
| **Updates**            | Manual - copy new versions        | Automatic - npm update         |
| **Bundle Size**        | Only components you use           | Tree-shakeable                 |
| **TypeScript**         | Required (copies .ts files)       | Full type definitions          |
| **Build Tool**         | Must support TS compilation       | Any modern bundler             |
| **Best For**           | TS projects needing customization | Quick prototyping, JS projects |

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

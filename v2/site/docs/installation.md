# Installation

AgnosticUI can be installed in two ways: using the **AgnosticUI CLI** (recommended) or as an **npm package**. Choose the approach that best fits your workflow.

## AgnosticUI CLI (Recommended)

The AgnosticUI CLI provides a "local-first" approach where components are copied directly into your project. This gives you full ownership and control over the component code, making it easy to customize and extend components without worrying about breaking changes from upstream updates.

### Quick Start

Initialize AgnosticUI in your project:

```bash
npx ag init --framework react
```

Replace `react` with your framework of choice: `vue`, `lit`, or `svelte`.

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
npx ag add button

# Add multiple components
npx ag add button input checkbox

# Overwrite existing components
npx ag add button --force
```

Components are copied to `./src/components/ag/` by default (customizable with `--components-path`).

### Listing Available Components

See all available components and which ones you've already added:

```bash
npx ag list
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
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactInput } from './components/ag/Input/react/ReactInput';

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
import { VueButton } from './components/ag/Button/vue/VueButton.js';
import { VueInput } from './components/ag/Input/vue/VueInput.js';
</script>

<template>
  <VueButton variant="primary">Click me</VueButton>
  <VueInput label="Email" type="email" />
</template>
```

#### Lit

```typescript
import { html, LitElement } from 'lit';
import './components/ag/Button/core/Button.js';
import './components/ag/Input/core/Input.js';

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
@import './components/ag/styles/ag-tokens.css';

/* Optional: Dark theme */
@import './components/ag/styles/ag-tokens-dark.css';
```

Or import in JavaScript:

```typescript
// In your main entry file (e.g., main.tsx, main.ts)
import './components/ag/styles/ag-tokens.css';
import './components/ag/styles/ag-tokens-dark.css'; // Optional
```

### Configuration Options

Customize the CLI behavior with command-line flags:

```bash
# Specify a custom components path
npx ag init --framework react --components-path ./src/ui/agnostic

# Use a local tarball (for development/testing)
npx ag init --framework vue --tarball /path/to/agnosticui-local-v0.0.1.tar.gz
```

Your `agnosticui.config.json` will store these settings:

```json
{
  "version": "2.0.0-alpha",
  "framework": "react",
  "paths": {
    "reference": "./agnosticui",
    "components": "./src/components/ag"
  }
}
```

### Syncing Updates (Development)

During active development, you can sync the reference library with a new tarball:

```bash
npx ag sync --tarball /path/to/agnosticui-local-v0.0.2.tar.gz
```

This updates the reference library in `./agnosticui/` without touching your customized components.

### TypeScript Configuration

If using TypeScript with Lit web components, enable experimental decorators in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

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
import { ReactButton } from 'agnosticui-core/button/react';
import { ReactInput } from 'agnosticui-core/input/react';

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
import { VueButton } from 'agnosticui-core/button/vue';
import { VueInput } from 'agnosticui-core/input/vue';
</script>

<template>
  <VueButton variant="primary">Click me</VueButton>
  <VueInput label="Email" type="email" />
</template>
```

#### Lit

```typescript
import 'agnosticui-core/button';
import 'agnosticui-core/input';
import { html, LitElement } from 'lit';

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
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css'; // Optional: Dark theme
```

Or in CSS:

```css
@import 'agnosticui-core/styles/tokens.css';
@import 'agnosticui-core/styles/tokens-dark.css'; /* Optional */
```

### Package Exports

The package provides granular exports for each component and framework:

```typescript
// Core web components
import 'agnosticui-core/button';
import 'agnosticui-core/input';

// React wrappers
import { ReactButton } from 'agnosticui-core/button/react';
import { ReactInput } from 'agnosticui-core/input/react';

// Vue wrappers
import { VueButton } from 'agnosticui-core/button/vue';
import { VueInput } from 'agnosticui-core/input/vue';

// CSS tokens
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
```

## Comparison: CLI vs NPM

| Feature | CLI (Recommended) | NPM Package |
|---------|-------------------|-------------|
| **Setup** | `npx ag init` | `npm install agnosticui-core` |
| **Component Location** | Local in your project | node_modules |
| **Customization** | Full control - edit freely | Limited - must extend/wrap |
| **Updates** | Manual - copy new versions | Automatic - npm update |
| **Bundle Size** | Only components you use | Tree-shakeable |
| **TypeScript** | Full type definitions | Full type definitions |
| **Best For** | Projects needing customization | Quick prototyping, minimal changes |

## Framework Support

AgnosticUI provides different levels of support for each framework:

| Framework | Support Level | Implementation |
|-----------|---------------|----------------|
| **React** | Full | Framework-specific wrappers for all components |
| **Vue** | Full | Framework-specific wrappers for all components |
| **Lit** | Full | Direct web component usage |
| **Svelte** | Basic | Direct web component usage |
| **Angular** | Basic | Direct web component usage |
| **Solid** | Basic | Direct web component usage |
| **Other** | Basic | Direct web component usage |

All frameworks can use the underlying Lit web components. React and Vue have additional framework-specific wrappers for a more native development experience.

## Next Steps

- Browse available [components](/components/) and their documentation
- Learn about [theming and customization](/theming/)
- Explore [framework-specific guides](/guides/)
- Check out [examples and demos](/examples/)

## Support

- Report issues: [GitHub Issues](https://github.com/AgnosticUI/agnosticui/issues)
- Ask questions: [GitHub Discussions](https://github.com/AgnosticUI/agnosticui/discussions)
- Read the docs: [agnosticui.com](https://agnosticui.com)

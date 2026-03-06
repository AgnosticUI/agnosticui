# agnosticui-cli

CLI for AgnosticUI Local - The UI kit that lives in your codebase.

> **See also:** Developer guide (build, test, publish) at [`v2/docs/CLI.md`](../docs/CLI.md)

## What is AgnosticUI Local?

AgnosticUI Local is a new approach to UI libraries. Instead of installing components as a dependency in `node_modules/`, the entire library lives in your project as a **reference library**, and you copy components you need into your own source code.

**Benefits:**

- **AI-Friendly**: Your entire component library is visible to AI coding tools (Cursor, Windsurf, Claude)
- **Complete Ownership**: Components are copied to your project - modify them however you want
- **Zero Lock-in**: No black boxes, no vendor dependencies
- **Upgrade Safety**: Reference library updates independently from your customized components

## Installation

```bash
# Initialize AgnosticUI in your project
npx agnosticui-cli@alpha init

# Or install globally
npm install -g agnosticui-cli@alpha
ag init
```

## Quick Start

```bash
# 1. Initialize (creates reference library in ./agnosticui/)
npx ag init --framework react

# 2. Add components to your project
npx ag add button input checkbox

# 3. List available components
npx ag list

# 4. Import and use in your code
import { ReactButton } from './components/ag/Button/react'
```

## Commands

### `ag init`

Initialize AgnosticUI Local in your project.

```bash
ag init [options]

Options:
  -f, --framework <framework>      Framework to use: react, vue, lit, svelte
  -p, --components-path <path>     Where to generate components (default: ./src/components/ag)
```

**Example:**

```bash
ag init --framework react --components-path ./src/components/ag
```

### `ag add <components...>`

Add one or more components to your project.

```bash
ag add <components...> [options]

Options:
  --force    Overwrite existing components

Examples:
  ag add button                    # Add single component
  ag add button input checkbox     # Add multiple components
  ag add button --force            # Overwrite existing
```

### `ag list`

List all available components and show which are already added.

```bash
ag list
```

### `ag sync`

Update the reference library to the latest version (your customized components are never touched).

```bash
ag sync
```

### `ag playbook [slug]`

Install a pre-built page template (playbook) into your project. Files are fetched from GitHub
and written to `src/playbooks/<slug>/` by default.

```bash
ag playbook [slug] [options]

Options:
  -f, --framework <framework>   Framework to use (react, vue, lit)
  -p, --path <path>             Destination path (default: src/playbooks/<slug>)
  --list                        List all available playbooks
  --force                       Overwrite existing destination without prompting

Examples:
  ag playbook --list                          # Show all available playbooks
  ag playbook login --framework react         # Install the Login playbook (React)
  ag playbook dashboard --framework vue       # Install the Dashboard playbook (Vue)
  ag playbook login --framework lit --path ./my-login  # Custom destination
```

Available playbooks include: `login`, `login-v2`, `onboarding`, `onboarding-v2`,
`dashboard`, `support`, `grid`, `grid-v2`, `blog`, `landing`, `form-association`.

Each playbook is a self-contained Vite project you can run directly (`npm install && npm run dev`)
or use as a reference while copying the pieces you need into your own project.

## How It Works

After running `ag init`, your project structure looks like this:

```
your-project/
├── agnosticui/                    # Reference library (all components)
│   ├── lib/src/components/        # Source for all 56 components
│   └── docs/                      # Documentation
├── src/components/ag/             # YOUR components (copied, customizable)
│   ├── Button/                    # You own this code
│   └── Input/                     # Modify freely
└── agnosticui.config.json         # CLI configuration
```

**The workflow:**

1. **Reference library** (`./agnosticui/`) - Full library for context, visible to AI tools
2. **Your components** (`./src/components/ag/`) - Copied components you can customize
3. **Update safely** - `ag sync` updates reference, never touches your code

## Framework Support

AgnosticUI supports React, Vue 3, Lit, and Svelte:

- **React**: Components using @lit/react wrappers
- **Vue 3**: Vue components using Composition API
- **Lit**: Native web components
- **Svelte**: Direct web component support (excellent compatibility)

## More Information

- [GitHub Repository](https://github.com/AgnosticUI/agnosticui)
- [Documentation](https://www.agnosticui.com)
- [Component Library Package](https://www.npmjs.com/package/agnosticui-core)

## License

Apache-2.0

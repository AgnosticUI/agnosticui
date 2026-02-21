# AgnosticUI v2

**AI-Ready, Minimalist & Highly Themeable Component System**

> The next generation of AgnosticUI: designed for AI assistance, maximum customization, and upgrade-safe development.

[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)]()
[![Accessibility](https://img.shields.io/badge/a11y-WAI--ARIA-green)]()
[![npm](https://img.shields.io/npm/v/agnosticui-core)]()

## What Makes v2 Special

- **AI-First Architecture**: Built for seamless AI-assisted development
- **Minimalist & Themeable**: Beautiful defaults, fully customizable via design tokens
- **Accessibility First**: WAI-ARIA compliant by default
- **Upgrade Safe**: Immutable canonical files protect against breaking changes
- **Framework Agnostic**: Works with React, Vue, Lit, and vanilla JS
- **Design Tokens**: Systematic theming via CSS custom properties
- **CLI**: `npx agnosticui-cli add button` — components live in your codebase

## Architecture Overview

```
v2/
├── cli/                    # agnosticui-cli (npx ag init / add / sync)
├── lib/                    # Core component library
│   ├── src/components/     # 56+ production-ready components
│   └── dist/               # Built library files
├── playbooks/              # LLM prompt-driven example apps (Login, Onboarding, Dashboard, …)
├── playgrounds/            # Interactive demo environments
├── skins/                  # Pre-built theme skins & SkinSwitcher
├── site/                   # VitePress documentation site
├── theme-registry/         # Design token system
└── docs/                   # Architectural & development docs
```

### Component Library (56+ Components)

AgnosticUI v2 ships 56+ components spanning interactive primitives (Button, Dialog, Combobox, Tabs, …), layout utilities (Flex, Sidebar, Header), feedback (Toast, Alert, Progress), data display (Badge, Tag, Table), and FX variants (ButtonFx, BadgeFx, IconButtonFx). Every component includes:

- Core Web Component (Lit)
- React wrapper
- Vue wrapper
- WAI-ARIA accessibility compliance

## Quick Start

### Use the CLI (recommended)

```bash
npx agnosticui-cli init --framework react
npx agnosticui-cli add button input dialog
```

Components are copied into your project — you own them, AI tools can read them, and you can customise freely.

### Develop locally

```bash
cd v2/lib && npm install && npm run build
cd ../playgrounds && npm install && npm run dev
```

Open [http://localhost:4322](http://localhost:4322) to see interactive demos.

## Design Token System

AgnosticUI v2 includes a comprehensive design token system for consistent theming:

```css
:root {
  --ag-primary: #0063a8;
  --ag-danger: #dc2626;
  --ag-space-1: 0.25rem;
  --ag-space-4: 1rem;
  --ag-focus: #2563eb;
  --ag-focus-width: 2px;
}
```

Override any `--ag-*` CSS custom property to white-label your components. Switch to dark mode with `data-theme="dark"`. See [Theme Registry](theme-registry/README.md) for complete token documentation.

## Development Workflow

### File Structure Pattern
```
Component/
├── core/
│   ├── _Component.ts      # Canonical (immutable)
│   └── Component.ts       # Experimental (AI-safe)
├── react/
│   └── ReactComponent.tsx  # React wrapper
├── vue/
│   └── VueComponent.vue    # Vue wrapper
└── spec.md                 # Component specification
```

## Documentation

- **[Development Guide](docs/DEVELOPMENT_GUIDE.md)** — consolidated patterns, tokens, testing, and rules
- **[CLI Guide](docs/CLI.md)** — developer guide for the agnosticui-cli
- **[Component Specs](lib/src/components/*/spec.md)** — per-component specifications
- **[Theme Registry](theme-registry/README.md)** — design token system
- **[Playbooks](playbooks/README.md)** — LLM prompt-driven example apps

## Playbooks

Complete example applications driven by LLM prompts. Each playbook ships a `PROMPT-3-FRAMEWORKS.md` you can feed directly to an AI assistant:

| Playbook | Components exercised |
|----------|---------------------|
| [Login](playbooks/login/) | Button, Card, Checkbox, Divider, Image, Input, Link |
| [Onboarding](playbooks/onboarding/) | Alert, Button, Icon, SelectionButton, SelectionCard, Timeline |
| [Dashboard](playbooks/dashboard/) | Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Card, Divider, EmptyState, Flex, Header, IconButton, Progress, Sidebar, SkeletonLoader, Tabs, Tag, Toast |
| [Support](playbooks/support/) | Button, Combobox, Dialog, Drawer, Kbd, Menu, MessageBubble, Pagination, Popover, Radio, Rating, Select, Slider, Tabs, Toggle, Tooltip |

## License

MIT License - see [LICENSE](../LICENSE) for details.

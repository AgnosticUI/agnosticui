<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./v2/graphics/hero-dark.svg">
    <img src="./v2/graphics/hero-light.svg" alt="AgnosticUI" width="610" />
  </picture>
</p>

<p align="center">Built on Lit Web Components &nbsp;·&nbsp; Copy the source &nbsp;·&nbsp; Own the code &nbsp;·&nbsp; Works with AI</p>

<p align="center">
  <strong>One component library. Every framework.</strong>
</p>

<p align="center">
  <a href="https://agnosticui.com">Documentation</a> ·
  <a href="https://www.agnosticui.com/playbooks/login.html">Login AI Playbook</a> ·
  <a href="https://www.agnosticui.com/playbooks/onboarding.html">Onboarding AI Playbook</a> ·
  <a href="https://www.agnosticui.com/playbooks/dashboard.html">Dashboard AI Playbook</a> ·
  <a href="https://www.agnosticui.com/components/button.html">Components</a> ·
  <a href="https://www.agnosticui.com/installation.html">Quick Start</a>
</p>

<br />

---

## The problem with most component libraries

Your AI tools can't see their source — so they hallucinate props, invent APIs, and generate code that looks right but isn't. AgnosticUI works differently.

---

## You own the source
```bash
cd your-project
npx agnosticui-cli init --framework vue  # or react, lit, svelte
npx agnosticui-cli add Button Card Input
```

The component source lands **directly in your project** — readable, editable, yours.
```
src/
  components/
    ag/
      Button/
        Button.vue        ← your file now
        Button.css        ← your tokens now
        Button.test.ts    ← your tests now
```

Components land under `src/components/ag/` by default — a dedicated namespace that keeps AgnosticUI components separate from your own. Configurable if you prefer otherwise.

Cursor, Claude, Windsurf, Copilot — every tool sees the source. No hallucinated props. No invented APIs. Just local code your LLM reads like any other file.

This is the architecture.

---

## Built once. Runs everywhere.

AgnosticUI's components are authored as **Lit Web Components** — a standards-based layer over native Custom Elements. The CLI wraps them for your framework at copy time.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./v2/graphics/architecture-dark.svg">
    <img src="./v2/graphics/architecture-light.svg" alt="AgnosticUI Architecture: AI Playbooks direct the Lit Core, which the CLI ejects into React, Vue, and Svelte" width="860" />
  </picture>
</p>

Your design system doesn't fork when your tech stack does.

...
| | AgnosticUI | Typical component library |
|---|---|---|
| Source in your repo | ✅ | ❌ |
| Framework agnostic core | ✅ | ❌ |
| LLM-readable locally | ✅ | ❌ |
| AI Playbooks included | ✅ | ❌ |
| Multiple theme skins | ✅ | Limited |
| Zero runtime dependency | ✅ after ejection | ❌ |

---

## AI Playbooks: give your LLM the full recipe

Playbooks are ready-made prompt recipes for your AI tool — one per UI pattern, built around AgnosticUI's components.

| Playbook | What it builds |
|---|---|
| [Login Form](https://agnosticui.com/playbooks/login.html) | Responsive login — mobile, floating card, two-column desktop |
| [Onboarding Wizard](https://agnosticui.com/playbooks/onboarding.html) | Multi-step flow with progress, validation, and skip logic |
| [Discovery Dashboard](https://agnosticui.com/playbooks/dashboard.html) | Dashboard shell with header, sidebar, and data regions |
| [Support Center](https://agnosticui.com/playbooks/support.html) | Help center with search, categories, and article layout |

Each Playbook on the docs site includes live StackBlitz examples for React, Vue, and Lit.

Each Playbook also ships with:
- **`PROMPT-3-FRAMEWORKS.md`** — one prompt to generate the pattern across all three frameworks
- **Skin switcher** to preview your theme tokens instantly

Drop a Playbook prompt into Cursor or Claude Code and watch it assemble `Input`, `Button`, `Card`, and `FormGroup` correctly on the first try — because it has the full recipe, not just a component reference.

The prompts are yours to adapt — feed one to your LLM as a crash course in AgnosticUI's patterns, fork it for your own stack, or use it as a blueprint for writing Playbooks around your own UI patterns.

---

## Theme skins via CSS custom properties

AgnosticUI components expose their entire visual surface through CSS custom properties. Swap a skin and every component updates — no code changes, no find-and-replace.

```css
/* Base tokens are required, then layer your skin on top */
@import './components/ag/styles/ag-tokens.css';
@import './components/ag/styles/ag-tokens-dark.css';
@import './components/ag/styles/brutalist-light.css';
@import './components/ag/styles/brutalist-dark.css';
```

Hand it to a designer. Get back a token file. Import it. Done.

---

## Quick Start

**React**
```bash
cd my-react-app
npx agnosticui-cli init --framework react
npx agnosticui-cli add Button Card Input
```

**Vue**
```bash
cd my-vue-app
npx agnosticui-cli init --framework vue
npx agnosticui-cli add Button Card Input
```

**Svelte**
```bash
cd my-svelte-app
npx agnosticui-cli init --framework svelte
npx agnosticui-cli add Button Card Input
```

**Lit / Web Components directly**
```bash
cd my-lit-app
npx agnosticui-cli init --framework lit
npx agnosticui-cli add Button Card Input
```

After running `add`, your terminal prints the exact import path for your project. No guessing.

---

## Accessibility first, not last

Every component ships with correct ARIA roles, keyboard navigation, focus management, reduced motion support, and AA-validated color contrast. Not bolted on — part of the component contract every skin and framework wrapper must satisfy.

---

## 55 components. Production-ready.

### Core UI

`Accordion` · `Alerts` · `AspectRatio` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `Card` · `Checkbox` · `Collapsible` · `Combobox` · `CopyButton` · `Dialog` · `Divider` · `Drawer` · `EmptyState`

### Forms & Inputs

`Fieldset` · `Input` · `Radio` · `Rating` · `Select` · `SelectionButtonGroup` · `SelectionCardGroup` · `Slider` · `Toggle`

### Navigation & Layout

`Header` · `Menu` · `Pagination` · `Tabs`

### Feedback & Status

`Loader` · `Progress` · `ProgressRing` · `ScrollProgress` · `Skeleton Loader` · `Spinner` · `Toast`

### Content & Display

`Icon` · `Icon Button` · `Image` · `IntlFormatter` · `Kbd` · `Link` · `Mark` · `MessageBubble` · `Popover` · `ScrollToButton` · `Table` · `Tag` · `Timeline` · `Tooltip` · `VisuallyHidden`

### Lab (experimental)

`BadgeFx` · `ButtonFx` · `Flex` · `IconButtonFx` 

---

## Contributing

AgnosticUI is open source and welcomes contributions. See [CONTRIBUTING.md](./CONTRIBUTING.md) for component authoring guidelines, the token system, and how to write Playbook entries.

---

## License

Apache License 2.0 © [AgnosticUI](https://github.com/AgnosticUI/agnosticui/blob/master/LICENSE)

## Where is v1?

AgnosticUI v2 is a complete rewrite and is not compatible with v1. If you need v1, it remains available via git tags:
- Packages: `agnostic-angular`, `agnostic-react`, `agnostic-vue`, `agnostic-svelte`, etc.
- Tag: `v1-legacy`

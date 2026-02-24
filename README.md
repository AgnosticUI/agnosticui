<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./v2/graphics/hero-dark.svg">
    <img src="./v2/graphics/hero-light.svg" alt="AgnosticUI" width="610" />
  </picture>
</p>

<p align="center">Built on Lit Web Components &nbsp;·&nbsp; Copy the source &nbsp;·&nbsp; Own the code &nbsp;·&nbsp; Works with AI tools, agent-driven UIs, and prompt-ready workflows</p>

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

Your AI tools can't see their source — so they hallucinate props, invent APIs, and generate code that looks right but isn't. AgnosticUI works differently, enabling **prompt-driven, agent-friendly workflows**.

---

## You own the source (and the Context)

```bash
cd your-project
npx agnosticui-cli init --framework vue  # or react, lit, svelte
npx agnosticui-cli add Button Card Input


The component source lands **directly in your project** — readable, editable, yours.

```

src/
components/
ag/
Button/
Button.vue ← your file now
Button.css ← your tokens now
Button.test.ts ← your tests now

````

Components land under `src/components/ag/` by default — a dedicated namespace that keeps AgnosticUI components separate from your own. Configurable if you prefer otherwise.

### 🤖 AI-Native by Design

Because the code is local, it solves the "Black Box" problem of traditional libraries hidden in `node_modules`.

**Cursor · Claude · Copilot · Windsurf · Aider · Gemini · Replit · Kiro · Antigravity**

Every tool sees the **raw source**. This creates a high-fidelity environment for **Generative UI** and **Agent-driven interfaces**:

*   **Reduce Hallucination:** No more "invented" props or APIs. Since the LLM reads local files like any other code, it knows exactly what is possible.
*   **Better Token Efficiency:** Using semantic HTML and standard CSS provides "clean context." Agents spend fewer tokens to understand the UI, leading to faster, more accurate generations.
*   **Agent Skills:** Treat [AgnosticUI Playbooks](https://www.agnosticui.com/playbooks/login.html) as pre-defined skills. Use them to prompt an agent to scaffold complex, accessible workflows (Login, Onboarding, Discovery Dashboard, Support Center,  Data Grids) using the local components it already "sees."

This is the architecture for the next era of development: **context-aware, framework-agnostic, and AI-ready.**

---

## Built once. Runs everywhere.

AgnosticUI's components are authored as **Lit Web Components** — a standards-based layer over native Custom Elements. The CLI wraps them for your framework at copy time.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./v2/graphics/architecture-dark.svg">
    <img src="./v2/graphics/architecture-light.svg" alt="AgnosticUI Architecture: AI Playbooks direct the Lit Core, which the CLI ejects into React, Vue, and Svelte" width="860" />
  </picture>
</p>

Your design system doesn't fork when your tech stack does. Supports **agent-generated UI workflows directly from Playbooks**.

...

|                                      | AgnosticUI        | Typical component library |
| ------------------------------------ | ----------------- | ------------------------- |
| Source in your repo                  | ✅                | ❌                        |
| Framework agnostic core              | ✅                | ❌                        |
| LLM-readable locally                 | ✅                | ❌                        |
| AI & agent-driven Playbooks included | ✅                | ❌                        |
| Multiple theme skins                 | ✅                | Limited                   |
| Zero runtime dependency              | ✅ after ejection | ❌                        |

---

## AI Playbooks: AI-Prompt-Driven UI Components

Playbooks (Login Form, Onboarding Wizard, Discovery Dashboard, Support Center, Data Grid) demonstrate **modular, prompt-driven UI components**. Each Playbook can be used in **agent systems**, for **context-aware applications**, or to create **generative UI patterns**.

| Playbook                                                               | What it builds                                                                                                               |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Login Form](https://agnosticui.com/playbooks/login.html)              | Responsive login — mobile, floating card, two-column desktop; works with AI prompt-driven generation                         |
| [Onboarding Wizard](https://agnosticui.com/playbooks/onboarding.html)  | Multi-step flow with progress, validation, and skip logic; supports agent-assisted workflows                                 |
| [Discovery Dashboard](https://agnosticui.com/playbooks/dashboard.html) | Dashboard shell with header, sidebar, and data regions — ideal for agent-generated interfaces                                |
| [Support Center](https://agnosticui.com/playbooks/support.html)        | Help center with search, categories, and article layout; integrates with prompt-driven workflows                             |
| [Data Grid](https://www.agnosticui.com/playbooks/grid.html)            | Responsive, interactive data grid with sorting, filtering, and multiple view modes — compatible with agent-driven interfaces |

Each Playbook on the docs site includes live StackBlitz examples for React, Vue, and Lit, and ships with:

- **`PROMPT-3-FRAMEWORKS.md`** — one prompt to generate the pattern across all three frameworks
- **Skin switcher** to preview your theme tokens instantly

Drop a Playbook prompt into Cursor or Claude Code and watch it assemble `Input`, `Button`, `Card`, and `FormGroup` correctly on the first try — **fully prompt-ready for agent-driven UI generation**.

The prompts are yours to adapt — feed one to your LLM as a crash course in AgnosticUI's patterns, fork it for your own stack, or use it as a blueprint for writing Playbooks around your own UI patterns.

---

## Theme skins via CSS custom properties

AgnosticUI components expose their entire visual surface through CSS custom properties. Swap a skin and every component updates — no code changes, no find-and-replace.

```css
/* Base tokens are required, then layer your skin on top */
@import "./components/ag/styles/ag-tokens.css";
@import "./components/ag/styles/ag-tokens-dark.css";
@import "./components/ag/styles/brutalist-light.css";
@import "./components/ag/styles/brutalist-dark.css";
````

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

After running `add`, your terminal prints the exact import path for your project. No guessing. **Supports agent-driven and prompt-ready UI workflows.**

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

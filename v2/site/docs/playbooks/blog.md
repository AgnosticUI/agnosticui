# Blog / Article Reader

A typography-first editorial layout with scroll-aware components, in-article search highlighting, and a simulated article fetch — implemented across React, Vue, and Lit.

<script setup>
import PlaybookStackBlitz from '../.vitepress/theme/components/PlaybookStackBlitz.vue'
</script>

## Try it Live

Open any framework example directly in StackBlitz:

<PlaybookStackBlitz playbook="blog" />

<div class="flex gap4 mbs4 mbe4">
  <a href="https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/blog" target="_blank" rel="noopener">View on GitHub</a>
</div>

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/blog/design/Mobile.png" alt="Mobile layout" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/blog/design/Mobile-dark.png" alt="Mobile dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Dark</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/blog/design/Tablet.png" alt="Tablet layout" class="playbook-screenshot" />
    <p class="playbook-caption">Tablet</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/blog/design/Tablet-dark.png" alt="Tablet dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Tablet - Dark</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/blog/design/Desktop.png" alt="Desktop layout" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/blog/design/Desktop-dark.png" alt="Desktop dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Dark</p>
  </div>
</div>

::: tip Skins & Customization
Each live example includes a **skin switcher** (bottom-right corner) to preview other themes instantly. Colors, spacing, and typography are fully customizable via [design tokens](/theming).
:::

## What's Included

::: warning Experimental Feature: AI-Assisted UI Generation
Generating UI components via LLM prompting is non-deterministic; different models (and even different versions of the same model) can produce drastically varying results from identical prompts.

While these prompts have been tested using the Claude Code CLI (running Claude Sonnet 4.5 and Opus 4.5), the output remains experimental. Always verify generated code for visual consistency, accessibility, and production readiness before deployment.
:::

- **Three framework examples**: React, Vue, and Lit implementations
- **ScrollProgress** — fixed top bar showing read progress as the user scrolls
- **ScrollToButton** — floating button (bottom-right) that appears after scrolling past ~30% of the article
- **AspectRatio** — wraps the hero image to enforce a consistent 16:9 ratio across all breakpoints
- **Loader** — shown on initial load before article content appears (simulated async fetch)
- [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/blog/PROMPT-3-FRAMEWORKS.md): Feed directly to your LLM for AI‑assisted customization

## Using with an LLM

The [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/blog/PROMPT-3-FRAMEWORKS.md) file contains everything an AI assistant needs to understand and modify the article reader:

1. Copy the [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/blog/PROMPT-3-FRAMEWORKS.md) contents
2. Paste into Claude, ChatGPT, or your preferred LLM
3. Ask for customizations: "Add a table of contents sidebar that highlights the active section as the user scrolls"

## Components Used

| Component             | Purpose                                                        |
| --------------------- | -------------------------------------------------------------- |
| `ag-scroll-progress`  | Fixed top progress bar showing read depth                      |
| `ag-scroll-to-button` | Floating back-to-top button, visible after 30% scroll          |
| `ag-aspect-ratio`     | Hero image wrapper enforcing a consistent 16:9 ratio           |
| `ag-loader`           | Full-page loading state before article content renders         |
| `ag-header`           | Top navigation bar with logo and theme toggle                  |
| `ag-avatar`           | Author portrait in the article meta and author card            |
| `ag-badge`            | Reading time estimate displayed in the article header          |
| `ag-divider`          | Section separators between article body, author card, and more |
| `ag-tabs`             | Article / Comments tab panel below the article body            |
| `ag-tag`              | Article category label in the header meta                      |

## Responsive Behavior

| Breakpoint          | Layout                                                         |
| ------------------- | -------------------------------------------------------------- |
| Mobile (<768px)     | Full-width single column, hero image full-bleed                |
| Tablet (768–1199px) | Centered column ~680px, hero image full-width                  |
| Desktop (≥1200px)   | Centered reading column ~720px max with generous side margins  |

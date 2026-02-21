# Support Center

A Support Center application with live chat, knowledge base, ticket management, and settings — across React, Vue, and Lit.

<script setup>
import PlaybookStackBlitz from '../.vitepress/theme/components/PlaybookStackBlitz.vue'
</script>

## Try it Live

Open any framework example directly in StackBlitz:

<PlaybookStackBlitz playbook="support" />

<div class="flex gap4 mbs4 mbe4">
  <a href="https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/support" target="_blank" rel="noopener">View on GitHub</a>
</div>

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/support/iphone.png" alt="Mobile layout" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/support/iphone_dark.png" alt="Mobile dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Dark</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/support/tablet.png" alt="Tablet layout" class="playbook-screenshot" />
    <p class="playbook-caption">Tablet</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/support/tablet_dark.png" alt="Tablet dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Tablet - Dark</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/support/desktop.png" alt="Desktop layout" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/support/desktop_dark.png" alt="Desktop dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Dark</p>
  </div>
</div>

::: tip Skins & Customization
Screenshots show the default skin. Each live example includes a **skin switcher** (bottom-right corner) to preview other themes instantly. Colors, spacing, and typography are fully customizable via [design tokens](/ag-tokens).
:::

## What's Included

::: warning Experimental Feature: AI-Assisted UI Generation
Generating UI components via LLM prompting is non-deterministic; different models (and even different versions of the same model) can produce drastically varying results from identical prompts.

While these prompts have been tested using the Claude Code CLI (running Claude Sonnet 4.5), the output remains experimental. Always verify generated code for visual consistency, accessibility, and production readiness before deployment.
:::

- **Three framework examples**: React, Vue, and Lit implementations
- **Four tabbed sections**: Live Chat, Knowledge Base, My Tickets, Settings
- **14 components new to playbooks**: Dialog, Drawer, MessageBubble, Combobox, Toggle, Radio, Rating, Select, Pagination, Tooltip, Slider, Popover, Menu, Kbd
- [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/support/PROMPT-3-FRAMEWORKS.md): Feed directly to your LLM for AI-assisted customization

## Using with an LLM

The [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/support/PROMPT-3-FRAMEWORKS.md) file contains everything an AI assistant needs to understand and modify the support center:

1. Copy the [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/support/PROMPT-3-FRAMEWORKS.md) contents
2. Paste into Claude, ChatGPT, or your preferred LLM
3. Ask for customizations: "Add a file attachment feature to the Live Chat tab"

## Components Used

| Component           | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| `ag-button`         | Actions and triggers across all tabs             |
| `ag-tabs`           | Four-section navigation shell                    |
| `ag-message-bubble` | Chat conversation history                        |
| `ag-dialog`         | End Chat and Save confirmation modals            |
| `ag-popover`        | Agent status info popup                          |
| `ag-rating`         | Chat satisfaction and article helpfulness        |
| `ag-combobox`       | Knowledge base article search with autocomplete  |
| `ag-pagination`     | Article and ticket list pagination               |
| `ag-kbd`            | Keyboard shortcut hints (/ to search)            |
| `ag-select`         | Ticket status filter, timezone, language         |
| `ag-menu`           | Context actions on ticket rows                   |
| `ag-drawer`         | Ticket detail slide-in panel                     |
| `ag-tooltip`        | Status hints and save button description         |
| `ag-toggle`         | Notification preference switches                 |
| `ag-radio`          | Contact preference selection                     |
| `ag-slider`         | Notification frequency control                   |

## Responsive Behavior

| Breakpoint          | Layout                                           |
| ------------------- | ------------------------------------------------ |
| Mobile (<768px)     | Single column, horizontal tab scroll, full-width drawer |
| Tablet (768-1199px) | Two-column where applicable, 60% drawer          |
| Desktop (>=1200px)  | Full-width tabs, 40% drawer, chat sidebar layout |

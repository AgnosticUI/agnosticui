# Discovery Dashboard

A responsive analytics dashboard implementation across React, Vue, and Lit.

<script setup>
import PlaybookStackBlitz from '../.vitepress/theme/components/PlaybookStackBlitz.vue'
</script>

## Try it Live

Open any framework example directly in StackBlitz:

<PlaybookStackBlitz playbook="dashboard" />

<div class="flex gap4 mbs4 mbe4">
  <a href="https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/dashboard" target="_blank" rel="noopener">View on GitHub</a>
</div>

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/dashboard/iphone.png" alt="Mobile layout" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/dashboard/iphone_dark.png" alt="Mobile dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Dark</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/dashboard/tablet.png" alt="Tablet layout" class="playbook-screenshot" />
    <p class="playbook-caption">Tablet</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/dashboard/tablet_dark.png" alt="Tablet dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Tablet - Dark</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/dashboard/desktop.png" alt="Desktop layout" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/dashboard/desktop_dark.png" alt="Desktop dark mode layout" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Dark</p>
  </div>
</div>

## What's Included

::: warning Experimental Feature: AI-Assisted UI Generation
Generating UI components via LLM prompting is non-deterministic; different models (and even different versions of the same model) can produce drastically varying results from identical prompts.

While these prompts have been tested using the Claude Code CLI (running Claude Sonnet 4.5), the output remains experimental. Always verify generated code for visual consistency, accessibility, and production readiness before deployment.
:::

- **Three framework examples**: React, Vue, and Lit implementations
- **Collapsible sidebar navigation**: With branding, nav links, and user profile
- **Analytics cards**: Key metrics with progress indicators
- **Tabbed content areas**: Activity feed, resources, and notifications
- [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/dashboard/PROMPT-3-FRAMEWORKS.md): Feed directly to your LLM for AI-assisted customization

## Using with an LLM

The [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/dashboard/PROMPT-3-FRAMEWORKS.md) file contains everything an AI assistant needs to understand and modify the dashboard:

1. Copy the [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/dashboard/PROMPT-3-FRAMEWORKS.md) contents
2. Paste into Claude, ChatGPT, or your preferred LLM
3. Ask for customizations: "Add a chart widget to the analytics section"

## Components Used

| Component         | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| `ag-accordion`    | Collapsible content sections                     |
| `ag-alert`        | Notification and status messages                 |
| `ag-avatar`       | User profile images                              |
| `ag-badge`        | Status indicators and counts                     |
| `ag-breadcrumb`   | Navigation breadcrumb trail                      |
| `ag-button`       | Actions and navigation triggers                  |
| `ag-card`         | Content containers for metrics and widgets       |
| `ag-divider`      | Visual separators between sections               |
| `ag-empty-state`  | Placeholder for empty data areas                 |
| `ag-flex`         | Layout containers for responsive grid            |
| `ag-header`       | Top navigation bar                               |
| `ag-icon-button`  | Icon-only action buttons                         |
| `ag-progress`     | Metric progress bars                             |
| `ag-sidebar`      | Collapsible side navigation                      |
| `ag-skeleton-loader` | Loading state placeholders                    |
| `ag-tabs`         | Tabbed content switching                         |
| `ag-tag`          | Category and status labels                       |
| `ag-toast`        | Transient notification messages                  |

## Responsive Behavior

| Breakpoint          | Layout                                           |
| ------------------- | ------------------------------------------------ |
| Mobile (<768px)     | Sidebar hidden, hamburger menu, stacked cards    |
| Tablet (768-1199px) | Collapsed sidebar, two-column card grid          |
| Desktop (≥1200px)   | Full sidebar, multi-column analytics layout      |

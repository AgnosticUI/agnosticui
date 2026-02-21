# Login Form

A responsive login page implementation across React, Vue, and Lit.

<script setup>
import PlaybookStackBlitz from '../.vitepress/theme/components/PlaybookStackBlitz.vue'
</script>

## Try it Live

Open any framework example directly in StackBlitz:

<PlaybookStackBlitz playbook="login" />

<div class="flex gap4 mbs4 mbe4">
  <a href="https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/login" target="_blank" rel="noopener">View on GitHub</a>
</div>

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/Phone.png" alt="Mobile layout" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/Tablet.png" alt="Tablet layout" class="playbook-screenshot" />
    <p class="playbook-caption">Tablet</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/Desktop.png" alt="Desktop layout" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop</p>
  </div>
</div>

::: tip Skins & Customization
Screenshots show the default skin. Each live example includes a **skin switcher** (bottom-right corner) to preview other themes instantly. Colors, spacing, and typography are fully customizable via [design tokens](/theming).
:::

## What's Included

::: warning Experimental Feature: AI-Assisted UI Generation
Generating UI components via LLM prompting is non-deterministic; different models (and even different versions of the same model) can produce drastically varying results from identical prompts.

While these prompts have been tested using the Claude Code CLI (running Claude Sonnet 4.5 and Opus 4.5), the output remains experimental. Always verify generated code for visual consistency, accessibility, and production readiness before deployment.
:::

- **Three framework examples**: React, Vue, and Lit implementations
- **Responsive layouts**: Mobile, tablet (floating card), desktop (two-column)
- [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-3-FRAMEWORKS.md): Feed directly to your LLM for AI-assisted customization
- [`PROMPT-VUE.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-VUE.md): LLM prompt to generate Vue login page.
- [`PROMPT-REACT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-REACT.md): LLM prompt to generate React login page.
- [`PROMPT-LIT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-LIT.md)LLM prompt to generate Lit login page (web components so use this for other frameworks like Svelte, Angular, etc.).

## Using with an LLM

The [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-3-FRAMEWORKS.md) file contains everything an AI assistant needs to understand and modify the login form:

1. Copy the [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-3-FRAMEWORKS.md) contents
2. Paste into Claude, ChatGPT, or your preferred LLM
3. Ask for customizations: "Change the social buttons to Apple and GitHub sign-in"

::: tip Framework-Specific Prompts
You can follow these same steps for the framework-specific prompts located in the [`<root>/v2/playbooks/login/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/login) directory:

- [`PROMPT-VUE.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-VUE.md)
- [`PROMPT-REACT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-REACT.md)
- [`PROMPT-LIT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT-LIT.md)

These versions use unique assets—such as different logos, background images, and Google fonts—to demonstrate how to customize the Login Playbook for your specific needs.
:::

## Components Used

| Component     | Purpose                                    |
| ------------- | ------------------------------------------ |
| `ag-button`   | Login and social sign-in buttons           |
| `ag-input`    | Email and password fields with icon addons |
| `ag-checkbox` | "Remember me" option                       |
| `ag-link`     | "Forgot password?" and "Sign up" links     |
| `ag-divider`  | "or" separator                             |
| `ag-card`     | Floating card on tablet breakpoint         |

## Responsive Behavior

| Breakpoint          | Layout                                   |
| ------------------- | ---------------------------------------- |
| Mobile (<768px)     | Form only, white background              |
| Tablet (768-1199px) | Floating card over full-bleed background |
| Desktop (≥1200px)   | Two-column: 40% form / 60% hero image    |

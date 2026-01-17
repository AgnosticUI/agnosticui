# Login Form

A responsive login page implementation across React, Vue, and Lit.

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

## What's Included

- **Three framework examples**: React, Vue, and Lit implementations
- **Responsive layouts**: Mobile, tablet (floating card), desktop (two-column)
- **PROMPT.md**: Feed directly to your LLM for AI-assisted customization

## Quick Start

```bash
# Clone and navigate to a framework example
git clone https://github.com/AgnosticUI/agnosticui.git
cd agnosticui/v2/playbooks/login/react-example  # or vue-example, lit-example

# Install and run
npm install
npm run dev
```

## Using with an LLM

The [`PROMPT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/login/PROMPT.md) file contains everything an AI assistant needs to understand and modify the login form:

1. Copy the PROMPT.md contents
2. Paste into Claude, ChatGPT, or your preferred LLM
3. Ask for customizations: "Change the social buttons to Apple and GitHub sign-in"

## Components Used

| Component | Purpose |
|-----------|---------|
| `ag-button` | Login and social sign-in buttons |
| `ag-input` | Email and password fields with icon addons |
| `ag-checkbox` | "Remember me" option |
| `ag-link` | "Forgot password?" and "Sign up" links |
| `ag-divider` | "or" separator |
| `ag-card` | Floating card on tablet breakpoint |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | Form only, white background |
| Tablet (768-1199px) | Floating card over full-bleed background |
| Desktop (≥1200px) | Two-column: 40% form / 60% hero image |

# Onboarding Wizard

A multi-step onboarding wizard implementation across React, Vue, and Lit.

<script setup>
import PlaybookStackBlitz from '../.vitepress/theme/components/PlaybookStackBlitz.vue'
</script>

## Try it Live

Open any framework example directly in StackBlitz:

<PlaybookStackBlitz playbook="onboarding" />

<div class="flex gap4 mbs4 mbe4">
  <a href="https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/onboarding" target="_blank" rel="noopener">View on GitHub</a>
</div>

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step1.png" alt="Mobile Step 1 - Welcome" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 1</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step2a.png" alt="Mobile Step 2a - Select interests" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 2a</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step2b.png" alt="Mobile Step 2b - Select frequency" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 2b</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step3.png" alt="Mobile Step 3 - Complete" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 3</p>
  </div>
</div>

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step1.png" alt="Desktop Step 1 - Welcome" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 1</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step2a.png" alt="Desktop Step 2a - Select interests" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 2a</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step2b.png" alt="Desktop Step 2b - Select frequency" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 2b</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step3.png" alt="Desktop Step 3 - Complete" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 3</p>
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
- **Multi-step wizard flow**: Welcome, interests selection, frequency selection, and completion steps
- **Timeline progress indicator**: Visual step tracking with the Timeline component
- [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-3-FRAMEWORKS.md): Feed directly to your LLM for AI-assisted customization
- [`PROMPT-VUE.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-VUE.md): LLM prompt to generate Vue onboarding wizard.
- [`PROMPT-REACT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-REACT.md): LLM prompt to generate React onboarding wizard.
- [`PROMPT-LIT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-LIT.md): LLM prompt to generate Lit onboarding wizard (web components so use this for other frameworks like Svelte, Angular, etc.).

## Using with an LLM

The [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-3-FRAMEWORKS.md) file contains everything an AI assistant needs to understand and modify the onboarding wizard:

1. Copy the [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-3-FRAMEWORKS.md) contents
2. Paste into Claude, ChatGPT, or your preferred LLM
3. Ask for customizations: "Add a step for selecting notification preferences"

::: tip Framework-Specific Prompts
You can follow these same steps for the framework-specific prompts located in the [`<root>/v2/playbooks/onboarding/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/onboarding) directory:

- [`PROMPT-VUE.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-VUE.md)
- [`PROMPT-REACT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-REACT.md)
- [`PROMPT-LIT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-LIT.md)

These versions allow you to customize the onboarding wizard for your specific needs.
:::

---

## Variant II — Carousel Slider Wizard

Distributes interest selection across three focused category steps (6 items each) with a **momentum-based, one-question-per-screen** carousel UX. Replaces the Timeline step indicator with a linear AG Progress bar, inserts a mini confirmation interstitial at the halfway point, and adds a dark mode header toggle and SkinSwitcher FAB.

<PlaybookStackBlitz playbook="onboarding-v2" />

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step1-v2.png" alt="Mobile - Choose your path" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 1: Choose Path</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step2a-v2.png" alt="Mobile - Front-end Frameworks" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 2: Frameworks</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step3-v2.png" alt="Mobile - Interstitial" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 3: Interstitial</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step4a-v2.png" alt="Mobile - Design & Styling" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 4: Design</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step5a-v2.png" alt="Mobile - Engineering & Quality" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 5: Engineering</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Mobile-Step6-v2.png" alt="Mobile - Review & Start" class="playbook-screenshot" />
    <p class="playbook-caption">Mobile - Step 6: Review</p>
  </div>
</div>

<div class="playbook-screenshots mbs6 mbe6">
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step1a-v2.png" alt="Desktop - Choose your path" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 1: Choose Path</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step2a-v2.png" alt="Desktop - Front-end Frameworks" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 2: Frameworks</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step3-v2.png" alt="Desktop - Interstitial" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 3: Interstitial</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step4a-v2.png" alt="Desktop - Design & Styling" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 4: Design</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step5a-v2.png" alt="Desktop - Engineering & Quality" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 5: Engineering</p>
  </div>
  <div class="playbook-screenshot-item">
    <img src="/playbooks/onboarding/Desktop-Step6-v2.png" alt="Desktop - Review & Start" class="playbook-screenshot" />
    <p class="playbook-caption">Desktop - Step 6: Review</p>
  </div>
</div>

::: tip Variant II Prompt
To generate or customize this variant with an LLM, use [`PROMPT-3-FRAMEWORKS-V2.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/onboarding/PROMPT-3-FRAMEWORKS-V2.md).
:::

---

## Components Used

| Component                | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `ag-button`              | Navigation and action buttons                  |
| `ag-timeline`            | Step progress indicator                        |
| `ag-icon`                | Icons for steps and selections                 |
| `ag-alert`               | Success message on completion                  |
| `ag-selection-card-group`| Interest selection cards                       |
| `ag-selection-button-group`| Frequency selection options                  |
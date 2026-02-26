# Login Form V2 — Implementation Guide

> A variant of the Login Playbook featuring a gradient background with geometric shapes, SSO-first form layout, and a floating card on all breakpoints. Implements the same AgnosticUI component set across React, Vue, and Lit.

## Project Setup

This guide creates three separate Vite projects. Output directories use the `-v2` suffix to live alongside the original Login Playbook examples without conflict.

### Prerequisites

- Ensure you're in the `v2/playbooks/login` directory (relative to AgnosticUI root)
- Design assets are located in `./design/`:
  - `google-icon.svg` (multi-colored Google 'G' icon)
  - `facebook-icon.svg` (Facebook 'f' icon)
  - `logo-3-frameworks.svg` (AgnosticUI logo)
- **No background image is required** — the background is pure CSS (gradient + geometric shapes)

### Create Three Vite Projects

_Note: Vite projects MUST be TypeScript-enabled because agnosticui-cli only works in a properly configured TypeScript project._

Run these commands from `v2/playbooks/login`:

```bash
npm create vite@latest react-example-v2 -- --template react-ts
npm create vite@latest vue-example-v2 -- --template vue-ts
npm create vite@latest lit-example-v2 -- --template lit-ts
```

### Install Dependencies

**React:**

```bash
cd react-example-v2
npm install
npm install lucide-react lit @lit/react
cd ..
```

_Note: `@lit/react` must be installed locally to avoid a dual-React-types conflict with the monorepo root's copy._

**Vue:**

```bash
cd vue-example-v2
npm install
npm install lucide-vue-next lit
cd ..
```

**Lit:**

```bash
cd lit-example-v2
npm install
npm install lucide lit
cd ..
```

### Initialize AgnosticUI

**React:**

```bash
cd react-example-v2
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

**Vue:**

```bash
cd vue-example-v2
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

**Lit:**

```bash
cd lit-example-v2
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

Post-init: confirm `ag-tokens.css`, `ag-tokens-dark.css`, `skins-bundle.css`, and `skin-switcher.css` are present in `src/components/ag/styles/`. The token files are created by the CLI; the skin files must be copied from `v2/skins/`:

```bash
# From v2/playbooks/login:
cp ../../../../skins/skins-bundle.css react-example-v2/src/components/ag/styles/
cp ../../../../skins/skin-switcher.css react-example-v2/src/components/ag/styles/
cp ../../../../skins/skins-bundle.css vue-example-v2/src/components/ag/styles/
cp ../../../../skins/skin-switcher.css vue-example-v2/src/components/ag/styles/
cp ../../../../skins/skins-bundle.css lit-example-v2/src/components/ag/styles/
cp ../../../../skins/skin-switcher.css lit-example-v2/src/components/ag/styles/
```

### CRITICAL: Vue-Specific Configuration

**1. `vue-example-v2/vite.config.ts`** — treat ag-\* tags as custom elements:

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ag-"),
        },
      },
    }),
  ],
});
```

**2. `vue-example-v2/src/main.ts`** — import token + skin files:

```typescript
import { createApp } from "vue";
import "./components/ag/styles/ag-tokens.css";
import "./components/ag/styles/ag-tokens-dark.css";
import "./components/ag/styles/skins-bundle.css";
import "./components/ag/styles/skin-switcher.css";
import "./style.css";
import App from "./App.vue";
createApp(App).mount("#app");
```

### TypeScript Configuration

Relax strict mode in each project's tsconfig to prevent errors from CLI-generated component files and the `skin-switcher-core.js` module (which has no type declarations):

**React** — `react-example-v2/tsconfig.app.json`:
```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false,
```

**Vue** — `vue-example-v2/tsconfig.app.json`:
```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false,
```

**Lit** — `lit-example-v2/tsconfig.json`:
```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false,
```

### SkinSwitcher Setup

Copy `SkinSwitcher` source files from the original Login Playbook examples (V1) — they reference `skin-switcher-core.js` via a relative path `../../../../skins/skin-switcher-core.js` which resolves correctly from the `v2/playbooks/login/` location:

```bash
# React
cp react-example/src/SkinSwitcher.tsx react-example-v2/src/SkinSwitcher.tsx

# Vue
cp vue-example/src/SkinSwitcher.vue vue-example-v2/src/SkinSwitcher.vue

# Lit
cp lit-example/src/skin-switcher.ts lit-example-v2/src/skin-switcher.ts
```

Import in each framework entry/component and render at the bottom of the page wrapper (outside the card):

**React** — in `App.tsx`:
```tsx
import { SkinSwitcher } from './SkinSwitcher';
// ...at the bottom of the page div:
<SkinSwitcher />
```

**Vue** — in `App.vue` script setup:
```vue
import SkinSwitcher from './SkinSwitcher.vue';
// ...at the bottom of the page div template:
<SkinSwitcher />
```

**Lit** — in `login-page.ts`:
```typescript
import './skin-switcher';
// ...at the bottom of the render template:
html`<skin-switcher></skin-switcher>`
```

### Font Setup

Add Merriweather to each project's `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400&display=swap"
  rel="stylesheet"
/>
```

### Asset Setup

Copy icons and logos only (no background image needed). Two logo variants are required: light mode (`logo.svg`) and dark mode (`logo-dark-mode.svg`):

```bash
# React
cp design/google-icon.svg react-example-v2/public/
cp design/facebook-icon.svg react-example-v2/public/
cp design/logo.svg react-example-v2/public/logo.svg
cp design/logo-dark-mode.svg react-example-v2/public/logo-dark-mode.svg

# Vue
cp design/google-icon.svg vue-example-v2/public/
cp design/facebook-icon.svg vue-example-v2/public/
cp design/logo.svg vue-example-v2/public/logo.svg
cp design/logo-dark-mode.svg vue-example-v2/public/logo-dark-mode.svg

# Lit
cp design/google-icon.svg lit-example-v2/public/
cp design/facebook-icon.svg lit-example-v2/public/
cp design/logo.svg lit-example-v2/public/logo.svg
cp design/logo-dark-mode.svg lit-example-v2/public/logo-dark-mode.svg
```

### Icon Imports Reference

**React (lucide-react):**

```jsx
import { Mail, Lock } from "lucide-react";
```

**Vue (lucide-vue-next):**

```vue
<script setup>
import { Mail, Lock } from "lucide-vue-next";
</script>
```

**Lit (inline SVG):**

```typescript
const mailIcon = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
</svg>`;
const lockIcon = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
</svg>`;
```

---

## Design Specification

### Background: Gradient + Geometric Shapes

The decorative background is implemented entirely in CSS — no image file is required. Apply it to the outermost page wrapper:

```css
.login-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--ag-blue-500) 0%, var(--ag-primary) 55%, var(--ag-blue-800) 100%);
}
```

Geometric shapes are absolutely positioned pseudo-elements (or empty `<span>` elements) layered behind the card. Aim for 3–4 semi-transparent circles of varying sizes:

```css
/* Example — adapt sizes/positions as needed */
.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}
.bg-shape--1 {
  width: 480px;
  height: 480px;
  top: -120px;
  left: -160px;
}
.bg-shape--2 {
  width: 320px;
  height: 320px;
  bottom: -80px;
  right: -100px;
}
.bg-shape--3 {
  width: 200px;
  height: 200px;
  top: 40%;
  right: 12%;
}
.bg-shape--4 {
  width: 140px;
  height: 140px;
  bottom: 20%;
  left: 8%;
}
```

The shapes should be visible but not compete with the card. Adjust opacity/size to taste; the values above are a starting reference.

### Card

The login form lives inside a white card that floats above the gradient on **all breakpoints** (including mobile in this variant):

- Background: `var(--ag-background-primary)` (white)
- Border radius: `var(--ag-radius-md)`
- Shadow: `0 4px 14px rgba(0, 0, 0, 0.18), 0 10px 40px rgba(0, 0, 0, 0.14)` — slightly deeper than V1 to lift against the dark gradient
- Max-width: `375px`, centered horizontally
- Padding: `var(--ag-space-8)` (32px) on all sides

### Typography & Spacing

- Font: Merriweather (same as V1)
- Title "Welcome back!": `--ag-font-size-2x` (32px), Merriweather Regular
- Body / labels: `--ag-font-size-sm` (14px)

Spacing scale (top to bottom within card):

| Element pair                           | Token          | px   |
| -------------------------------------- | -------------- | ---- |
| Logo → Title                           | `--ag-space-6` | 24px |
| Title → SSO buttons                    | `--ag-space-6` | 24px |
| Between SSO buttons (side-by-side gap) | `--ag-space-3` | 12px |
| SSO section → Divider                  | `--ag-space-6` | 24px |
| Divider → Email label                  | `--ag-space-6` | 24px |
| Label → Input                          | `--ag-space-2` | 8px  |
| Between form fields                    | `--ag-space-6` | 24px |
| Last field → Aux row                   | `--ag-space-6` | 24px |
| Aux row → Login button                 | `--ag-space-6` | 24px |
| Login button → Footer                  | `--ag-space-6` | 24px |

---

## Component Hierarchy

Two key differences from V1: **SSO buttons come first** above the credential fields, and the page includes a **fixed header toggle** + **SkinSwitcher FAB**.

**Page-level chrome (outside the card):**

- **Header** — `position: fixed; top: 0; right: 0` — contains a single sun/moon button to toggle `data-theme="dark"` on `<html>`. Styled with semi-transparent white border/background so it reads on the gradient.
- **SkinSwitcher FAB** — fixed bottom-right palette button (copied from V1 login examples). Opens a panel with theme toggle and skin selector.

**Inside the card (top to bottom):**

1. **Logo** — centered; swap between `logo.svg` (light) and `logo-dark-mode.svg` (dark) based on dark state
2. **Title** — "Welcome back!" (Merriweather, 32px)
3. **Subtitle** — "Please enter your details to login." (`--ag-font-size-sm`, `--ag-text-secondary`)
4. **SSO Buttons** — two buttons displayed **side by side** (flexbox row, `gap: var(--ag-space-3)`)
   - Google button: `/google-icon.svg` + "Google"
   - Facebook button: `/facebook-icon.svg` + "Facebook"
   - Both: `bordered shape="rounded"` variant, `flex: 1` to share width equally
5. **Divider** — AgnosticUI Divider with centered "or" text
6. **Email Field**
   - Label: "Email"
   - Input with left addon: Lucide `Mail` icon (`color: var(--ag-text-secondary)`)
   - Placeholder: "Enter your email"
7. **Password Field**
   - Label: "Password"
   - Input with left addon: Lucide `Lock` icon (`color: var(--ag-text-secondary)`)
   - Placeholder: "Enter your password"
8. **Auxiliary Row** — flex row, space-between
   - Left: Checkbox + "Remember me"
   - Right: "Forgot password" link (`variant="monochrome"`)
9. **Primary Action** — full-width "Log In" button (`variant="monochrome" shape="rounded"`)
10. **Footer** — "Don't have an account? Sign up" (with "Sign up" as `variant="primary"` link)

**Component variants:**

- Button (Log In): `variant="monochrome" shape="rounded" full-width`
- Button (SSO): `bordered shape="rounded"` — flex children, NOT full-width individually; let flexbox distribute
- Link: `variant="monochrome"` for Forgot Password, `variant="primary"` for Sign Up
- Checkbox: default
- Divider: with "or" text content

---

## Layout Specifications

### Mobile (< 768px)

- **Background:** Gradient + geometric shapes visible, full viewport
- **Card:** White card floats over gradient, centered horizontally and vertically (`min-height: 100vh` flex centering)
- Max card width: 375px
- Padding around card: `var(--ag-space-4)` so it doesn't touch edges on very small screens

### Tablet (768px – 1199px)

- **Background:** Same gradient + geometric shapes, same full-viewport treatment
- **Card:** Same floating white card, larger apparent breathing room because viewport is wider
- Card shadow may be slightly more pronounced due to darker background; use the shadow value from Design Spec above
- Card stays centered horizontally and vertically

### Desktop (≥ 1200px)

- **Background:** Gradient + geometric shapes, full viewport — same as mobile/tablet. There is **no split-screen photo column** in this variant.
- **Card:** Floating centered white card, same treatment as tablet
- The form card may optionally be shifted slightly left of center (e.g., `justify-content: center` with a mild `margin-right` tweak) if the design team prefers a "weighted" composition, but default is centered
- The shapes in the background provide visual asymmetry without requiring a second column

---

## ASCII Diagrams

### Mobile Layout (< 768px)

```
┌──────────────────────────────────────────┐
│  Gradient Background (full viewport)     │
│  + subtle geometric shapes               │
│                                          │
│       ╔══════════════════════════╗        │
│       ║  White Card (floating)   ║        │
│       ║  max-width: 375px        ║        │
│       ║                          ║        │
│       ║  [Ag logo — centered]    ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  Welcome back!           ║        │
│       ║  Please enter details.   ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  ┌──────────┬──────────┐ ║        │
│       ║  │G  Google │f Facebook│ ║        │
│       ║  └──────────┴──────────┘ ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  ───────── or ─────────  ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  Email                   ║        │
│       ║  ↕ 8px                   ║        │
│       ║  [✉ Enter your email]    ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  Password                ║        │
│       ║  ↕ 8px                   ║        │
│       ║  [🔒 Enter password]     ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  ☐ Remember  Forgot pwd? ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  [      Log In      ]    ║        │
│       ║  ↕ --ag-space-6          ║        │
│       ║  No account? Sign up     ║        │
│       ╚══════════════════════════╝        │
│                                          │
└──────────────────────────────────────────┘
```

### Tablet Layout (768px – 1199px)

```
┌─────────────────────────────────────────────────────┐
│  Gradient Background (100vw × 100vh)                │
│  + geometric shapes at corners/edges                │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░○ (large faded circle, top-left) ░░░░░░░░░░░░░  │
│  ░░░░░░░░                                    ░░░░░  │
│  ░░░░░░░░  ╔══════════════════════════╗  ░░░░░░░░░  │
│  ░░░░░░░░  ║  White Card (floating)   ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  max-width: 375px        ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  [Ag logo — centered]    ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  Welcome back!           ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  Please enter details.   ║  ░░░○░░░░░  │
│  ░░░░░░░░  ║  [G Google][f Facebook]  ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  ─────── or ────────     ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  [✉ email input]         ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  [🔒 password input]     ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  ☐ Remember  Forgot?     ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  [      Log In      ]    ║  ░░░░░░░░░  │
│  ░░░░░░░░  ║  No account? Sign up     ║  ░░░░░░░░░  │
│  ░░░░░░░░  ╚══════════════════════════╝  ░░░░░░○░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────┘
```

### Desktop Layout (≥ 1200px)

```
┌────────────────────────────────────────────────────────────────┐
│              Gradient Background (100vw × 100vh)               │
│  + geometric shapes distributed across edges (see CSS above)   │
│  ○─────────────────────────────────────────────────────────○   │
│  │                                                         │   │
│  │          ╔══════════════════════════════╗               │   │
│  │          ║   White Card (floating)      ║               │   │
│  │          ║   max-width: 375px           ║               │   │
│  │          ║                              ║               │   │
│  │          ║   [Ag logo — centered]       ║               │   │
│  │          ║   Welcome back!              ║               │   │
│  │          ║   Please enter details.      ║               │   │
│  │          ║                              ║               │   │
│  │          ║   ┌──────────┬────────────┐  ║               │   │
│  │          ║   │G  Google │ f Facebook │  ║               │   │
│  │          ║   └──────────┴────────────┘  ║               │   │
│  │          ║   ──────────── or ─────────  ║               │   │
│  │          ║   Email                      ║               │   │
│  │          ║   [✉ Enter your email    ]   ║               │   │
│  │          ║   Password                   ║               │   │
│  │          ║   [🔒 Enter password     ]   ║               │   │
│  │          ║   ☐ Remember   Forgot pwd?   ║               │   │
│  │          ║   [        Log In        ]   ║               │   │
│  │          ║   No account? Sign up        ║               │   │
│  │          ╚══════════════════════════════╝               │   │
│  │                                                         │   │
│  ○─────────────────────────────────────────────────────────○   │
└────────────────────────────────────────────────────────────────┘
  Note: No split-screen column. Gradient + shapes provide full visual
  interest. The card is the sole focal point.
```

---

## Key Implementation Notes

### 1. Pure CSS Background — No Image Component Needed

Unlike V1, there is no AgnosticUI Image component for the background. The gradient and shapes are fully CSS. The outermost wrapper covers 100% of the viewport on all breakpoints:

```css
.login-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--ag-blue-500) 0%, var(--ag-primary) 55%, var(--ag-blue-800) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--ag-space-4);
}
```

The geometric shapes can be implemented as a few `<span>` elements (preferred for Lit) or as `::before`/`::after` pseudo-elements on a dedicated `.bg-shapes` wrapper, using the CSS from the Design Specification section.

### 2. Card on All Breakpoints (Including Mobile)

V1 removed the card wrapper on mobile for simplicity. V2 keeps the white floating card on every breakpoint because the gradient background is always present. Apply the same card class at all sizes:

```css
.login-card {
  background: var(--ag-background-primary);
  border-radius: var(--ag-radius-md);
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.18),
    0 10px 40px rgba(0, 0, 0, 0.14);
  max-width: 375px; /* mobile */
  width: 100%;
  padding: var(--ag-space-8);
  color: var(--ag-text-primary); /* fixes color: inherit cascade for all child components in dark mode */
}

@media (min-width: 640px) {
  .login-card {
    max-width: 425px; /* tablet / desktop */
  }
}
```

> **Lit note:** The global `*, *::before, *::after { box-sizing: border-box }` reset does not pierce the shadow DOM. Add an equivalent reset at the top of Lit's `static styles` so that `padding` does not inflate the card beyond `max-width`:
>
> ```css
> *, *::before, *::after {
>   box-sizing: border-box;
> }
```
```

No media-query toggling of card visibility is needed.

### 3. Side-by-Side SSO Buttons

SSO buttons share a row equally using flexbox. Use `fullWidth` (React/Vue) / `full-width` (Lit) on each button so they fill their flex cell, combined with `flex: 1` on the container children:

```css
.sso-buttons {
  display: flex;
  gap: var(--ag-space-3);
  margin-bottom: var(--ag-space-6);
}

.sso-buttons > * {
  flex: 1; /* each button takes equal share */
}
```

**React:**

```tsx
<div className="sso-buttons">
  <ReactButton fullWidth bordered shape="rounded">
    <img src="/google-icon.svg" alt="" className="social-icon" />
    Google
  </ReactButton>
  <ReactButton fullWidth bordered shape="rounded">
    <img src="/facebook-icon.svg" alt="" className="social-icon" />
    Facebook
  </ReactButton>
</div>
```

**Vue:**

```vue
<div class="sso-buttons">
  <VueButton :full-width="true" bordered shape="rounded">
    <img src="/google-icon.svg" alt="" class="social-icon" />
    Google
  </VueButton>
  <VueButton :full-width="true" bordered shape="rounded">
    <img src="/facebook-icon.svg" alt="" class="social-icon" />
    Facebook
  </VueButton>
</div>
```

**Lit:**

```typescript
html`
  <div class="sso-buttons">
    <ag-button full-width bordered shape="rounded">
      <img src="/google-icon.svg" alt="" />
      Google
    </ag-button>
    <ag-button full-width bordered shape="rounded">
      <img src="/facebook-icon.svg" alt="" />
      Facebook
    </ag-button>
  </div>
`;
```

### 4. Logo Centered + Dark Mode Swap

In V1 the logo was left-aligned. In V2, center it and swap between the light and dark SVG variants based on the current theme state:

```css
.login-logo {
  display: flex;
  justify-content: center;
  margin-bottom: var(--ag-space-6);
}
.login-logo img {
  height: var(--ag-space-6);
  width: auto;
}
```

Assets: `logo.svg` (blue icon + dark navy wordmark), `logo-dark-mode.svg` (blue icon + near-white `#F0F0F0` wordmark).

**React:**
```tsx
<img src={dark ? '/logo-dark-mode.svg' : '/logo.svg'} alt="Logo" />
```

**Vue:**
```vue
<img :src="dark ? '/logo-dark-mode.svg' : '/logo.svg'" alt="Logo" />
```

**Lit:**
```typescript
html`<img src=${this.dark ? '/logo-dark-mode.svg' : '/logo.svg'} alt="Logo" />`
```

### 5. Desktop Has No Grid / Right Column

V1's desktop used `grid-template-columns: 2fr 3fr`. V2 does not split the screen — remove all grid layout. The page wrapper is a single flex container centering the card. This simplifies the desktop implementation considerably.

### 7. Header Dark Mode Toggle

A minimal fixed header sits at `top: 0; right: 0` with `z-index: 10`, containing a single sun/moon icon button. Because it sits on the gradient, use semi-transparent white for its border and background:

```css
.login-header {
  position: fixed;
  top: 0;
  right: 0;
  padding: var(--ag-space-3) var(--ag-space-4);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s ease;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.25);
}
```

The toggle sets `document.documentElement.setAttribute('data-theme', 'dark' | '')` and persists the choice to `localStorage.setItem('ag-theme', ...)`.

In Lit, define `.login-header` and `.theme-toggle` inside `static styles` alongside the other login page styles.

### 8. SkinSwitcher FAB

Copy `SkinSwitcher.tsx` / `SkinSwitcher.vue` / `skin-switcher.ts` from the corresponding V1 login examples (see **SkinSwitcher Setup** in Project Setup above). The component self-registers and renders a fixed bottom-right palette FAB that opens a skin/theme panel.

The SkinSwitcher internally also controls light/dark, so both controls will work in parallel — the header toggle for quick access, the FAB for full skin selection.

### 6. Icon Styling

Same as V1 — unchanged:

```css
.input-icon svg {
  width: var(--ag-space-4);
  height: var(--ag-space-4);
  color: var(--ag-text-secondary);
}
```

---

## Common Issues & Fixes

### CRITICAL: Global CSS Required

Same rules as V1:

- **Vue:** Do NOT use `<style scoped>` — put all layout styles in `style.css`
- **React:** Do NOT use CSS Modules for layout — use global CSS
- **Lit:** Use `static styles` in the component

### CSS Token Reference

- `--ag-radius-md` (NOT `--ag-border-radius-md`)
- `--ag-space-*` for all spacing
- `--ag-font-size-sm` for 14px

### Geometric Shapes in Lit

Because Lit uses Shadow DOM, add shapes as children of the component rather than relying on document-level pseudo-elements:

```typescript
render() {
  return html`
    <div class="login-page">
      <span class="bg-shape bg-shape--1"></span>
      <span class="bg-shape bg-shape--2"></span>
      <span class="bg-shape bg-shape--3"></span>
      <span class="bg-shape bg-shape--4"></span>
      <div class="login-card">
        <!-- form content -->
      </div>
    </div>
  `;
}
```

Define shape styles in `static styles`:

```typescript
static styles = css`
  :host { display: block; }
  .login-page {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--ag-blue-500) 0%, var(--ag-primary) 55%, var(--ag-blue-800) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--ag-space-4);
  }
  .bg-shape {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  .bg-shape--1 { width: 480px; height: 480px; top: -120px; left: -160px; }
  .bg-shape--2 { width: 320px; height: 320px; bottom: -80px; right: -100px; }
  .bg-shape--3 { width: 200px; height: 200px; top: 40%; right: 12%; }
  .bg-shape--4 { width: 140px; height: 140px; bottom: 20%; left: 8%; }
`;
```

### Vue VueCard Usage

Use `<VueCard rounded="md">` as the card wrapper (same requirement as V1 tablet layout):

```vue
<VueCard rounded="md">
  <div class="login-form">
    <!-- form content -->
  </div>
</VueCard>
```

Override card padding in global `style.css`:

```css
/* Target ag-card's internal padding */
ag-card,
.ag-card {
  padding: var(--ag-space-8);
}
```

---

## Implementation Learnings

> Update this section as each framework is built. The notes from the original Login Playbook apply here; record only V2-specific differences.

### React Example

**Expected differences from V1:**

- No `login-column-right` or grid layout — simpler CSS overall
- SSO row uses `flex: 1` children — verify buttons don't overflow on narrow viewports
- Card is visible on mobile — no conditional rendering for card wrapper

### Vue Example

**Expected differences from V1:**

- Same `vite.config.ts` custom element config required
- Same scoped-styles prohibition — all layout in `style.css`
- No `sources` prop / `watchEffect` pattern needed (no background image)

### Lit Example

**Expected differences from V1:**

- No `ag-image` component required for background
- Shapes implemented as child `<span>` elements (see "Geometric Shapes in Lit" above)
- All styles in `static styles` — simpler since no responsive image switching needed

---

## StackBlitz Integration Notes

When adding Variant II to the docs site:

1. Add entries to `v2/site/docs/.vitepress/theme/components/playbooks-config.ts` with keys like `login-v2-react`, `login-v2-vue`, `login-v2-lit`
2. No binary image file mappings are needed for `binaryFiles` (no `.jpg` background)
3. Create `v2/site/docs/playbooks/login-v2.md` with the `PlaybookStackBlitz` component pointing at the new config entries
4. Add to sidebar in `v2/site/docs/.vitepress/config.mts`

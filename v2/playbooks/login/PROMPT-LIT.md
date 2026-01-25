# Lit Login Form Implementation Guide

## Project Setup

This guide creates a Vite-based Lit TypeScript project implementing the login playbook.

### Prerequisites

- Ensure you're in the project directory
- Design assets are located in `./design/`:
  - `google-icon.svg` (multi-colored Google 'G' icon)
  - `apple-icon.svg` (Apple's logo)
  - `logo.svg` (Page hero background image)
  - `login-bg.jpg` (background image)

### Create Vite Project for Lit TypeScript

_Note: The Vite project MUST be TypeScript enabled because the agnosticui-cli only works properly in a properly setup TypeScript project._

Run this command:

```bash
npm create vite@latest lit-example -- --template lit-ts
```

### Install Dependencies

```bash
cd lit-example
npm install
npm install lit  # Should already be installed, but verify
cd ..
```

### Initialize AgnosticUI

```bash
cd lit-example
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

The CLI will:
- Set up the AgnosticUI configuration for Lit
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your main CSS file using `@import`

### Font Setup

Add Google Playfair Display font to `index.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
  rel="stylesheet"
/>
```

### Asset Setup

Copy icon and background assets to the project's `public/` folder:

```bash
cp design/google-icon.svg lit-example/public/
cp design/apple-icon.svg lit-example/public/
cp design/logo.svg lit-example/public/
cp design/login-bg.jpg lit-example/public/
```

### Icon Implementation (Inline SVG)

Lucide's export format doesn't work directly in Lit. Use inline SVG:

```typescript
const mailIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;

const lockIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
```

---

## Responsive Breakpoints

The login form adapts across three breakpoints with distinct layouts:

- **Mobile (< 768px):** Form only on white background, no decorative image
- **Tablet (768px - 1199px):** Full viewport background image with elevated card floating on top
- **Desktop (≥ 1200px):** Two-column layout with form (40%) and image (60%)

## Typography & Spacing

**Font Sizes:**
- Body text/labels: `--ag-font-size-sm` (14px)
- Title "Welcome back!": `--ag-font-size-2x` (32px) using Google Playfair Display font (Regular/400 weight)

**Spacing Scale (top to bottom):**
- Logo to Title: 24px (`--ag-space-6`) - logo centered
- Title to Email label: 16px (`--ag-space-4`)
- Label to Input: 8px (`--ag-space-2`)
- Between form sections: 24px (`--ag-space-6`)
- Between social buttons: 12px (`--ag-space-3`)
- Social buttons to footer text: 56px (`--ag-space-14`)

## Component Hierarchy

1. **Logo** - Brand identifier at top (use `logo.svg` from `/public/`)
2. **Title** - "Welcome back!" heading (Playfair Display font, 32px)
3. **Email Field**
   - Label: "Email"
   - Input with left addon containing mail icon (inline SVG, `color: var(--ag-text-secondary)`)
   - Placeholder: "Enter your email"
4. **Password Field**
   - Label: "Password"
   - Input with left addon containing lock icon (inline SVG, `color: var(--ag-text-secondary)`)
   - Placeholder: "Enter your password"
5. **Auxiliary Row**
   - Left: Checkbox + "Remember me" (`--ag-text-primary`)
   - Right: "Forgot password" link (monochrome variant)
6. **Primary Action** - Full-width monochrome "Login" button (black background, white text)
7. **Divider** - Horizontal rule with centered "or" text (use AgnosticUI Divider component)
8. **Social Login Buttons**
   - Two bordered buttons stacked vertically, each full-width
   - Apple button: Apple icon (`/apple-icon.svg`) + "Apple" text
   - Google button: Google icon (`/google-icon.svg`) + "Google" text
   - Space between buttons: 12px (`--ag-space-3`)
9. **Footer Text** - "Don't have an account? Sign up" (with "Sign up" as primary blue link)

**Component variants to use:**
- Button (Login): `variant="monochrome" shape="rounded"` (black background, white text, rounded corners)
- Button (Social): `bordered shape="rounded"` (outline style with rounded corners)
- Link: `variant="monochrome"` for "Forgot password", `variant="primary"` for "Sign up"
- Checkbox: Default variant for "Remember me"
- Divider: With "or" text content

---

## Layout Specifications

### Mobile (< 768px)
- Form content only on white background
- No decorative image rendered
- No card wrapper
- Content max-width: 375px, centered
- Background: white/primary background color

### Tablet (768px - 1199px)
- **Background:** Full viewport (100vw × 100vh) decorative background image covering entire screen
- **Card:** White card component floating on top of background
  - Max-width: 375px, centered horizontally and vertically in viewport
  - Border radius: medium
  - Shadow: `box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(0, 0, 0, 0.1);`
  - Background: white

### Desktop (≥ 1200px)
- Two-column grid layout: `grid-template-columns: 2fr 3fr` (40% / 60%)
- **Left column (40%):** White background, content max-width: 375px, centered within column
- **Right column (60%):** Background image fills entire column using AgnosticUI Image component

---

## Key Implementation Notes

1. **Image optimization using AgnosticUI Image component:**

   ```typescript
   const bgSources = [
     { srcset: '/login-bg.jpg', media: '(min-width: 768px)' }
   ];
   // Set via property, not attribute
   html`<ag-image
     .sources=${bgSources}
     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
     alt=""
     fit="cover"
   ></ag-image>`
   ```

2. **Card shadow (tablet only):** `box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(0, 0, 0, 0.1);`

3. **Social button layout:** Two buttons stacked vertically with `flex-direction: column` and `gap: var(--ag-space-3)`

---

## Lit-Specific Patterns

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Import web components directly
import './components/ag/Button/core/Button';
import './components/ag/Input/core/Input';
import './components/ag/Card/core/Card';
import './components/ag/Image/core/Image';
import './components/ag/Link/core/Link';
import './components/ag/Checkbox/core/Checkbox';
import './components/ag/Divider/core/Divider';

// Use ag-* elements in templates
render() {
  return html`
    <ag-input
      label="Email"
      type="email"
      placeholder="Enter your email"
      rounded
      .value=${this.email}
      @input=${this.handleEmailInput}
    >
      <span slot="addon-left" class="input-icon">${mailIcon}</span>
    </ag-input>

    <ag-checkbox
      .checked=${this.rememberMe}
      @change=${() => this.rememberMe = !this.rememberMe}
    >
      Remember me
    </ag-checkbox>

    <ag-button full-width variant="monochrome" shape="rounded">
      Login
    </ag-button>

    <ag-button full-width bordered shape="rounded">
      <img src="/apple-icon.svg" alt="" class="social-icon" />
      Apple
    </ag-button>
  `;
}
```

**CSS imports for Lit (in index.css):**

```css
@import "./components/ag/styles/ag-tokens.css";
@import "./components/ag/styles/ag-tokens-dark.css";
```

---

## Common Issues & Fixes

### Shadow DOM Styling

All responsive styles must be in the component's `static styles`. Use `:host` for the component root.

### CSS Token Reference
- `--ag-radius-md` (NOT `--ag-border-radius-md`)
- `--ag-space-*` for spacing (e.g., `--ag-space-6` = 24px)
- `--ag-font-size-sm` for 14px text

### Layout CSS (in static styles)

```typescript
static styles = css`
  :host {
    display: block;
    min-height: 100vh;
  }

  .login-form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: var(--ag-space-4);
  }

  .login-card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: var(--ag-space-6);
    position: relative;
    z-index: 1;
  }

  .login-card {
    background: var(--ag-background-primary);
    border-radius: var(--ag-radius-md);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(0, 0, 0, 0.1);
    max-width: 375px;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .login-column-left { background: transparent; }
  }

  @media (min-width: 1200px) {
    .login-form-wrapper {
      /* NO min-height: 100vh here - :host already sets it */
      padding: var(--ag-space-6);
    }
    .login-column-right {
      display: block;
      overflow: hidden;
      height: 100vh;
    }
    .login-column-right ag-image {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  ag-divider { margin-bottom: var(--ag-space-6); }
  .login-button { width: 100%; margin-bottom: var(--ag-space-6); }
`;
```

### Lit Desktop Fix

Do NOT add `min-height: 100vh` on `.login-form-wrapper` at desktop - `:host` already sets viewport height.

### Tablet Background Image

Use `src` directly (not `sources` array) for tablet background since CSS controls visibility:

```typescript
html`<div class="tablet-background">
  <ag-image src="/login-bg.jpg" alt="" fit="cover"></ag-image>
</div>`
```

For desktop right column, the `sources` approach with transparent gif fallback works fine.

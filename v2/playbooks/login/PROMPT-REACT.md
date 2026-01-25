# React Login Form Implementation Guide

## Project Setup

This guide creates a Vite-based React TypeScript project implementing the login playbook.

### Prerequisites

- Ensure you're in the project directory
- Design assets are located in `./design/`:
  - `google-icon.svg` (multi-colored Google 'G' icon)
  - `apple-icon.svg` (Apple's logo)
  - `logo.svg` (Page hero background image)
  - `login-bg.jpg` (background image)

### Create Vite Project for React TypeScript

_Note: The Vite project MUST be TypeScript enabled because the agnosticui-cli only works properly in a properly setup TypeScript project._

Run this command:

```bash
npm create vite@latest react-example -- --template react-ts
```

### Install Dependencies

```bash
cd react-example
npm install
npm install lucide-react
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

```bash
cd react-example
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

The CLI will:
- Set up the AgnosticUI configuration for React
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your main entry file (`main.tsx`)

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
cp design/google-icon.svg react-example/public/
cp design/apple-icon.svg react-example/public/
cp design/logo.svg react-example/public/
cp design/login-bg.jpg react-example/public/
```

### Icon Imports Reference

```tsx
import { Mail, Lock } from "lucide-react";
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
   - Input with left addon containing mail icon (Lucide Mail icon, `color: var(--ag-text-secondary)`)
   - Placeholder: "Enter your email"
4. **Password Field**
   - Label: "Password"
   - Input with left addon containing lock icon (Lucide Lock icon, `color: var(--ag-text-secondary)`)
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

   ```tsx
   const bgSources = [
     { srcset: '/login-bg.jpg', media: '(min-width: 768px)' }
   ];
   <ReactImage
     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
     alt=""
     sources={bgSources}
     fit="cover"
   />
   ```

2. **Card shadow (tablet only):** `box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(0, 0, 0, 0.1);`

3. **Social button layout:** Two buttons stacked vertically with `flex-direction: column` and `gap: var(--ag-space-3)`

---

## React-Specific Patterns

```tsx
// Input with icon addon
<ReactInput label="Email" type="email" placeholder="Enter your email" rounded>
  <Mail slot="addon-left" size={18} style={{ color: 'var(--ag-text-secondary)' }} />
</ReactInput>

// Checkbox
<ReactCheckbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}>
  Remember me
</ReactCheckbox>

// Full-width button
<ReactButton fullWidth type="submit" variant="monochrome" shape="rounded">
  Login
</ReactButton>

// Social button
<ReactButton fullWidth bordered shape="rounded">
  <img src="/apple-icon.svg" alt="" className="social-icon" />
  Apple
</ReactButton>
```

---

## Common Issues & Fixes

### CRITICAL: Global CSS Required

Do NOT use CSS Modules for layout styles. ALL layout styles must go in **global CSS** (`index.css`).

### CSS Token Reference
- `--ag-radius-md` (NOT `--ag-border-radius-md`)
- `--ag-space-*` for spacing (e.g., `--ag-space-6` = 24px)
- `--ag-font-size-sm` for 14px text

### Layout CSS Fixes

```css
/* Flexbox centering for mobile/desktop form */
.login-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: var(--ag-space-4);
}

/* Tablet card centering */
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

/* Tablet: transparent form wrapper to show background */
@media (min-width: 768px) and (max-width: 1199px) {
  .login-column-left { background: transparent; }
}

/* Desktop: prevent image overflow */
@media (min-width: 1200px) {
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

/* Divider and button spacing (global CSS) */
ag-divider { margin-bottom: var(--ag-space-6); }
.login-button { width: 100%; margin-bottom: var(--ag-space-6); }
```

### Tablet Background Image

Use `src` directly (not `sources` array) for tablet background since CSS controls visibility:

```tsx
<div className="tablet-background">
  <ReactImage src="/login-bg.jpg" alt="" fit="cover" />
</div>
```

For desktop right column, the `sources` approach with transparent gif fallback works fine.

# Login Form Implementation Guide

> A comprehensive guide for building a responsive login form using AgnosticUI components across React, Vue, and Lit frameworks.

## Project Setup

This guide creates three separate Vite projects demonstrating AgnosticUI's multi-framework capabilities, each implementing the same login form design.

### Prerequisites

- Ensure you're in the `v2/playbooks/login` directory (relative to AgnosticUI root)
- Design assets are located in `./design/`:
  - `google-icon.svg` (multi-colored Google 'G' icon)
  - `facebook-icon.svg` (Facebook 'f' icon)
  - `logo-3-frameworks.svg` (AgnosticUI logo - blue "A" + black "g")
  - `login-bg-3-frameworks.jpg` (background image)

### Create Three Vite Projects

_Note: The Vite projects MUST all be Typescript enabled because the agnosticui-cli only works properly in a properly setup Typescript project._

Run these commands from `v2/playbooks/login`:

```bash
# Create React project
npm create vite@latest react-example -- --template react-ts

# Create Vue project
npm create vite@latest vue-example -- --template vue-ts

# Create Lit project
npm create vite@latest lit-example -- --template lit-ts
```

### Install Dependencies

**React Example:**

```bash
cd react-example
npm install
npm install lucide-react
npm install lit  # Required before CLI init
cd ..
```

**Vue Example:**

```bash
cd vue-example
npm install
npm install lucide-vue-next
npm install lit  # Required before CLI init
cd ..
```

**Lit Example:**

```bash
cd lit-example
npm install
npm install lucide
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

For each project, initialize AgnosticUI using the CLI and add required components:

**React Example:**

```bash
cd react-example
npm install lit  # Install required dependency
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

**Vue Example:**

```bash
cd vue-example
npm install lit  # Install required dependency
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

**Lit Example:**

```bash
cd lit-example
npm install lit  # Install required dependency
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add button input card image link checkbox divider icon
cd ..
```

The CLI will:

- Set up the AgnosticUI configuration for your chosen framework
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**

- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your main entry file (e.g., `main.tsx`, `main.ts`)

### CRITICAL: Vue-Specific Configuration

**1. Update `vue-example/vite.config.ts` to recognize ag-* custom elements:**

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat ag-* tags as custom elements (web components)
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
})
```

Without this, Vue will show warnings: `[Vue warn]: Failed to resolve component: ag-*`

**2. Import BOTH token files in `vue-example/src/main.ts`:**

```typescript
import { createApp } from 'vue'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'  // DO NOT FORGET THIS!
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

### Font Setup

Add Google Merriweather font to each project's `index.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400&display=swap"
  rel="stylesheet"
/>
```

### Asset Setup

Copy icon and background assets to each project's `public/` folder:

```bash
# React
cp design/google-icon.svg react-example/public/
cp design/facebook-icon.svg react-example/public/
cp design/logo-3-frameworks.svg react-example/public/logo.svg
cp design/login-bg-3-frameworks.jpg react-example/public/login-bg.jpg

# Vue
cp design/google-icon.svg vue-example/public/
cp design/facebook-icon.svg vue-example/public/
cp design/logo-3-frameworks.svg vue-example/public/logo.svg
cp design/login-bg-3-frameworks.jpg vue-example/public/login-bg.jpg

# Lit
cp design/google-icon.svg lit-example/public/
cp design/facebook-icon.svg lit-example/public/
cp design/logo-3-frameworks.svg lit-example/public/logo.svg
cp design/login-bg-3-frameworks.jpg lit-example/public/login-bg.jpg
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
// Don't import lucide - use inline SVG instead (lucide export format doesn't work directly)
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

// Use in templates:
html`<span slot="addon-left" class="input-icon">${mailIcon}</span>`;
```

---

## Design Specification

**Design Reference:** `v2/graphics/AgnosticUI-2.fig` on the templates page.
**Visual Mockups:** `v2/playbooks/login/design/` contains Desktop.png, Tablet.png, Phone.png

## Responsive Breakpoints

The login form adapts across three breakpoints with distinct layouts:

- **Mobile (< 768px):** Form only on white background, no decorative image
- **Tablet (768px - 1199px):** Full viewport background image with elevated card floating on top
- **Desktop (≥ 1200px):** Two-column layout with form (40%) and image (60%)

## Typography & Spacing

**Font Sizes:**

- Body text/labels: `--ag-font-size-sm` (14px)
- Title "Welcome back!": `--ag-font-size-2x` (32px) using Google Merriweather font (Regular/400 weight)

**Spacing Scale (top to bottom):**

- Logo to Title: 24px (`--ag-space-6`) - logo centered
- Title to Email label: 16px (`--ag-space-4`)
- Label to Input: 8px (`--ag-space-2`)
- Between form sections: 24px (`--ag-space-6`)
- Between social buttons: 12px (`--ag-space-3`)
- Social buttons to footer text: 56px (`--ag-space-14`)

## Component Hierarchy

1. **Logo** - Brand identifier at top (use `logo.svg` from `/public/`)
2. **Title** - "Welcome back!" heading (Merriweather font, 32px)
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
   - Facebook button: Facebook icon (`/facebook-icon.svg`) + "Facebook" text
   - Google button: Google icon (`/google-icon.svg`) + "Google" text
   - Space between buttons: 12px (`--ag-space-3`)
9. **Footer Text** - "Don't have an account? Sign up" (with "Sign up" as primary blue link)

**Component variants to use:**

- Button (Login): `variant="monochrome" shape="rounded"` (black background, white text, rounded corners)
- Button (Social): `bordered shape="rounded"` (outline style with rounded corners)
- Link: `variant="monochrome"` for "Forgot password", `variant="primary"` for "Sign up"
- Checkbox: Default variant for "Remember me"
- Divider: With "or" text content

**Component Customization:**

Most styling is handled automatically by AgnosticUI components using design tokens. The following are now built into the components:

- Input labels and text default to 14px (`font-size-sm`)
- Checkbox labels default to 14px with no gap
- Links default to 14px in form contexts
- Input addon icons are automatically centered
- Buttons support `full-width` attribute for 100% width

**Full-width buttons:**

Use the `full-width` attribute instead of CSS:

```html
<!-- Login button -->
<ag-button full-width variant="monochrome" shape="rounded">Login</ag-button>

<!-- Social buttons -->
<ag-button full-width bordered shape="rounded">
  <img src="/google-icon.svg" alt="" />
  Google
</ag-button>
```

**Icon styling:**

```css
/* Icon size and color in input addons */
.input-icon svg {
  width: var(--ag-space-4);
  height: var(--ag-space-4);
  color: var(--ag-text-secondary);
}
```

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
  - **IMPORTANT (Vue):** Use `<VueCard rounded="md">` to apply border radius
  - **IMPORTANT (React):** Use `<ReactCard rounded="md">` to apply border radius
  - Max-width: 375px, centered horizontally and vertically in viewport
  - Shadow: Custom elevated shadow (Material Design Elevation 5 inspired) for prominent lift effect
  - Background: white
  - Padding: appropriate internal spacing

### Desktop (≥ 1200px)

- Two-column grid layout: `grid-template-columns: 2fr 3fr` (40% / 60%)
- **Left column (40%, min 576px at 1440px viewport):**
  - Background: white/primary background color
  - Content max-width: 375px, centered within column
  - Padding: appropriate spacing from edges
  - No card wrapper - content sits directly on white background
- **Right column (60%, min 864px at 1440px viewport):**
  - Decorative background image fills entire column using AgnosticUI Image component
  - No padding - image touches browser edge
  - Image covers column area maintaining aspect ratio
  - Image positioned to show focal point (flowers in foreground)

**Fluid scaling:** For viewports > 1440px, maintain 40/60 ratio proportionally.

---

## ASCII Diagrams

### Mobile Layout

```
┌─────────────────────────────────┐
│    White Background (no image)  │
│         max-width: 375px        │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃         Ag (logo)         ┃  │
│  ┃          ↕ --ag-space-12  ┃  │
│  ┃      Welcome back!        ┃  │
│  ┃          ↕ --ag-space-6   ┃  │
│  ┃  Email                    ┃  │
│  ┃    ↕ 8px                  ┃  │
│  ┃  ┌─────────────────────┐  ┃  │
│  ┃  │ ✉ Enter your email  │  ┃  │
│  ┃  └─────────────────────┘  ┃  │
│  ┃          ↕ --ag-space-6   ┃  │
│  ┃  Password                 ┃  │
│  ┃    ↕ 8px                  ┃  │
│  ┃  ┌─────────────────────┐  ┃  │
│  ┃  │ 🔒 Enter password   │  ┃  │
│  ┃  └─────────────────────┘  ┃  │
│  ┃          ↕ --ag-space-6   ┃  │
│  ┃  ☐ Remember  Forgot pwd?  ┃  │
│  ┃          ↕ --ag-space-6   ┃  │
│  ┃  ┌─────────────────────┐  ┃  │
│  ┃  │       Login         │  ┃  │
│  ┃  └─────────────────────┘  ┃  │
│  ┃          ↕ --ag-space-6   ┃  │
│  ┃  ───────── or ──────────  ┃  │
│  ┃          ↕ --ag-space-6   ┃  │
│  ┃  ┌──────────┬──────────┐  ┃  │
│  ┃  │ f  FB    │ G Google │  ┃  │
│  ┃  └──────────┴──────────┘  ┃  │
│  ┃          ↕ --ag-space-12  ┃  │
│  ┃  Don't have account?      ┃  │
│  ┃  Sign up (link)           ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
└─────────────────────────────────┘
```

### Tablet Layout

```
┌─────────────────────────────────────────────────┐
│  Full Viewport Background Image (100vw × 100vh) │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░ Mountain & Flowers Scene ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░╔═════════════════════════════╗░░░░░░░░░░  │
│  ░░░░║  White Card (elevated)      ║░░░░░░░░░░  │
│  ░░░░║  max-width: 375px           ║░░░░░░░░░░  │
│  ░░░░║  ┏━━━━━━━━━━━━━━━━━━━━━━━┓  ║░░░░░░░░░░  │
│  ░░░░║  ┃      Ag (logo)        ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-12     ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   Welcome back!       ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-6      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   Email               ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-2      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [✉ Enter email]     ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-6      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   Password            ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-2      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [🔒 Enter password] ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-6      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ☐ Remember  Forgot? ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-6      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [Login Button]      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-6      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ───── or ─────      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-6      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [f FB] [G Google]   ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ↕ --ag-space-14     ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   No account? Sign up ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┗━━━━━━━━━━━━━━━━━━━━━━━┛  ║░░░░░░░░░░  │
│  ░░░░╚═════════════════════════════╝░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────┘
```

### Desktop Layout (≥ 1200px)

```
┌────────────────────────────────────────────────────────────────┐
│                    Viewport (≥ 1200px)                         │
│  ┌─────────────────────────┬────────────────────────────────┐  │
│  │   Left Column (40%)     │   Right Column (60%)           │  │
│  │   White Background      │   Background Image             │  │
│  │   Content max: 375px    │   (full bleed, no padding)     │  │
│  │   centered              │                                │  │
│  │                         │   █████████████████████████    │  │
│  │  ┏━━━━━━━━━━━━━━━━━┓    │   █████████████████████████    │  │
│  │  ┃    Ag (logo)    ┃    │   ████  Mountain Scene ████    │  │
│  │  ┃ ↕ --ag-space-12 ┃    │   ████  with Flowers   ████    │  │
│  │  ┃  Welcome back!  ┃    │   ████  (AgnosticUI    ████    │  │
│  │  ┃ ↕ --ag-space-6  ┃    │   ████   Image comp)   ████    │  │
│  │  ┃  Email          ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-2  ┃    │   █████████████████████████    │  │
│  │  ┃  [✉ input]      ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-6  ┃    │   █████████████████████████    │  │
│  │  ┃  Password       ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-2  ┃    │   █████████████████████████    │  │
│  │  ┃  [🔒 input]     ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-6  ┃    │   █████████████████████████    │  │
│  │  ┃  ☐ Rem  Forgot? ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-6  ┃    │   █████████████████████████    │  │
│  │  ┃  [Login Button] ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-6  ┃    │   █████████████████████████    │  │
│  │  ┃  ──── or ────   ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-6  ┃    │   █████████████████████████    │  │
│  │  ┃  [f FB][G Goog] ┃    │   █████████████████████████    │  │
│  │  ┃ ↕ --ag-space-14 ┃    │   █████████████████████████    │  │
│  │  ┃  No acct? Signup┃    │   █████████████████████████    │  │
│  │  ┗━━━━━━━━━━━━━━━━━┛    │   █████████████████████████    │  │
│  │                         │                                │  │
│  └─────────────────────────┴────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
     40% (576px @ 1440)           60% (864px @ 1440)
     grid-template-columns: 2fr 3fr
```

---

## Key Implementation Notes

1. **Image optimization using AgnosticUI Image component:**
   - Use the AgnosticUI Image component with responsive sources via the `sources` prop
   - This properly prevents HTTP requests on mobile by using `<picture>` element with media queries
   - The `sources` prop takes an array of objects with `srcset`, `media`, `type`, and `sizes` fields
   - **Important:** The `sources` prop must be passed as a JavaScript property (not HTML attribute) since arrays cannot be serialized to attributes

   **Lit/Web Component:**
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

   **Vue:**
   ```vue
   <script setup>
   const bgImageSources = [
     { srcset: '/login-bg.jpg', media: '(min-width: 768px)' }
   ];
   </script>
   <template>
     <VueImage
       src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
       alt=""
       :sources="bgImageSources"
       fit="cover"
     />
   </template>
   ```

   **React:**
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

   - The background image loads on tablet (≥ 768px) and desktop (≥ 1200px)
   - Mobile gets no image at all (bandwidth optimization)

2. **Card shadow (tablet only):**
   - Implement custom elevated shadow on the white card similar to Material Design Elevation 5
   - Example: `box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(0, 0, 0, 0.1);`
   - This creates a prominent "floating" effect against the background image
   - Desktop does NOT use a card - form sits directly on white background

3. **Grid constraint logic (desktop):**
   - Left column: centers 375px max-width content within the 40% column width
   - Right column: zero padding to allow image to touch browser edge

4. **Icon implementation:**
   - Mail and Lock icons: Use Lucide icons (framework-specific package)
   - Facebook and Google icons: Use SVG files from `/public/` directory
   - All icons in input addons use `var(--ag-text-secondary)` color token

5. **Social button layout:**
   - Two buttons stacked vertically, each full-width
   - Use Flexbox with `flex-direction: column` and `gap: var(--ag-space-3)` (12px)
   - Each button spans full container width

6. **Background treatment:**
   - Mobile: White/primary background, no image
   - Tablet: Full viewport background image
   - Desktop: Left column white background, right column background image

---

## Implementation Learnings

> This section will be updated as we build each framework example.

### React Example

**Status:** Build completed successfully

**Issues encountered:**

1. **Asset path correction**: The relative path from `v2/playbooks/login` to `v2/graphics` is `../../graphics/` not `../graphics/`.
2. **TypeScript decorators**: The CLI automatically updates tsconfig files with `experimentalDecorators: true` and `useDefineForClassFields: false`.
3. **Non-interactive CLI**: Use `--skip-prompts` flag for automated/non-TTY environments. Dependencies must be installed manually before running init.

**Key implementation notes:**

- Input addons work via slot attributes - icons are automatically centered
- Button `variant="monochrome"` creates black background/white text button
- Link `variant="monochrome"` for subtle links, `variant="primary"` for highlighted links
- Checkbox uses `checked` prop and `onChange` event
- Responsive layout requires showing/hiding different containers per breakpoint (mobile-first approach)
- **Full-width buttons**: Use `fullWidth` prop (React) or `:full-width="true"` (Vue) or `full-width` attribute (Lit)

**CSS patterns for form styling:**

```css
/* Form container - NO width: 100% (causes tablet overflow) */
.login-form {
  max-width: 375px;
  margin: 0 auto;
  padding: var(--ag-space-6);
}

/* Auxiliary row - wraps on narrow screens */
/* Note: Do NOT use align-items: center - it misaligns checkbox and link */
.auxiliary-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--ag-space-2);
  margin-bottom: var(--ag-space-6);
}

/* Social buttons - stacked with spacing */
.social-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--ag-space-3);
  margin-bottom: var(--ag-space-14);
}

/* Logo - left aligned */
.login-logo {
  margin-bottom: var(--ag-space-6);
}

.login-logo img {
  height: var(--ag-space-9);
  width: auto;
}

/* Title - reduced spacing */
.login-title {
  margin: 0 0 var(--ag-space-4) 0;
}
```

**Note:** CSS overrides for input/checkbox/link font sizes and button widths are no longer needed. Use `full-width` attribute on buttons instead.

**Working JSX patterns:**

```tsx
// Input with icon addon - icon automatically centered
<ReactInput label="Email" type="email" placeholder="Enter your email" rounded>
  <Mail slot="addon-left" size={18} style={{ color: 'var(--ag-text-secondary)' }} />
</ReactInput>

// Full-width monochrome button with rounded corners
<ReactButton fullWidth type="submit" variant="monochrome" shape="rounded">
  Login
</ReactButton>

// Full-width social button with icon and rounded corners
<ReactButton fullWidth bordered shape="rounded">
  <img src="/google-icon.svg" alt="" className="social-icon" />
  Google
</ReactButton>
```

### Vue Example

**Status:** Build completed successfully

**Issues encountered:**

1. **CRITICAL - vite.config.ts**: You MUST configure Vue to recognize ag-* custom elements. See "CRITICAL: Vue-Specific Configuration" section above.
2. **CRITICAL - Import BOTH token files**: You MUST import both `ag-tokens.css` AND `ag-tokens-dark.css` in main.ts. See "CRITICAL: Vue-Specific Configuration" section above.
3. **tsconfig include paths**: CLI may mangle include patterns (e.g., `src*.ts` instead of `src/**/*.ts`). Fix manually if needed.
4. **TypeScript strict mode**: Some component definitions have unused variable warnings. `vue-tsc` may fail but `vite build` succeeds.
5. **VueImage sources prop**: The VueImage wrapper syncs the `sources` array prop to the ag-image web component using `onMounted` + `watchEffect`. Arrays cannot be passed as HTML attributes and must be set as JavaScript properties. This pattern is used in the VueImage component:
   ```typescript
   onMounted(() => {
     watchEffect(() => {
       if (agImageRef.value && props.sources) {
         agImageRef.value.sources = props.sources;
       }
     });
   });
   ```
6. **CRITICAL - Global CSS required**: Do NOT use `<style scoped>` for layout styles. Vue's scoped styles cannot target web component parts or element selectors. ALL layout styles (`.login-page`, `.login-card`, `.login-form-wrapper`, media queries, and web component overrides like `ag-divider { margin-bottom: ... }`) MUST be in global `style.css`.

**Vue-specific patterns:**

```vue
<!-- Input with icon addon - icon automatically centered -->
<VueInput
  v-model:value="email"
  label="Email"
  type="email"
  rounded
  placeholder="Enter your email"
>
  <template #addon-left>
    <Mail :size="18" style="color: var(--ag-text-secondary)" />
  </template>
</VueInput>

<!-- Checkbox with v-model -->
<VueCheckbox :checked="rememberMe" @update:checked="rememberMe = $event">
  Remember me
</VueCheckbox>

<!-- Full-width button with rounded corners -->
<VueButton
  :full-width="true"
  type="submit"
  variant="monochrome"
  shape="rounded"
>
  Login
</VueButton>

<!-- Full-width social button -->
<VueButton :full-width="true" bordered shape="rounded">
  <img src="/google-icon.svg" alt="" class="social-icon" />
  Google
</VueButton>

<!-- Card with rounded corners (REQUIRED for tablet layout) -->
<VueCard rounded="md">
  <form class="login-form">
    <!-- form content -->
  </form>
</VueCard>
```

### Lit Example

**Status:** Build completed successfully

**Issues encountered:**

1. **Lucide icons in Lit**: Lucide's export format doesn't work directly in Lit. Use inline SVG strings instead.
2. **Shadow DOM styling**: All responsive styles must be in the component's `static styles`.
3. **Form width**: Do NOT use `width: 100%` on `.login-form` - it causes tablet overflow.

**Lit-specific patterns:**

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Import web components directly (no React/Vue wrappers)
import './components/ag/Button/core/Button';
import './components/ag/Input/core/Input';

// Inline SVG icons (Lucide format doesn't work directly)
const mailIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const lockIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

// Use ag-* elements in templates
render() {
  return html`
    <ag-input
      label="Email"
      type="email"
      placeholder="Enter your email"
      .value=${this.email}
      @input=${this.handleEmailInput}
    >
      <!-- Icon automatically centered, no wrapper needed -->
      ${mailIcon}
    </ag-input>

    <ag-button full-width variant="monochrome" shape="rounded">Login</ag-button>
    <ag-button full-width bordered shape="rounded">Social Button</ag-button>
  `;
}
```

**CSS imports for Lit:**

```css
/* In index.css (global) */
@import "./components/ag/styles/ag-tokens.css";
@import "./components/ag/styles/ag-tokens-dark.css";
```

**Icon styling in Lit component styles:**

```css
/* Icons in addons are automatically centered */
::slotted(svg) {
  width: var(--ag-space-4);
  height: var(--ag-space-4);
  color: var(--ag-text-secondary);
}
```

---

## Common Issues & Fixes

### CRITICAL: Global CSS Required

- **Vue:** Do NOT use `<style scoped>` - put layout styles in `style.css`
- **React:** Do NOT use CSS Modules for layout styles - use global CSS
- **Lit:** Use `static styles` in the component

### CSS Token Reference

- `--ag-radius-md` (NOT `--ag-border-radius-md`)
- `--ag-space-*` for spacing (e.g., `--ag-space-6` = 24px)
- `--ag-font-size-sm` for 14px text

### Layout CSS Fixes (React & Vue)

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

### Lit Desktop Fix

In Lit, do NOT add `min-height: 100vh` on `.login-form-wrapper` at desktop - `:host` already sets viewport height.

### Tablet Background Image

Use `src` directly (not `sources` array) for tablet background since CSS controls visibility:

```html
<!-- Vue/React/Lit -->
<div class="tablet-background">
  <VueImage src="/login-bg.jpg" alt="" fit="cover" />
</div>
```

For desktop right column, the `sources` approach with transparent gif fallback works fine.

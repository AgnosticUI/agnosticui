# Login Form Implementation Guide

## Project Setup

This guide will create three separate Vite projects demonstrating AgnosticUI's multi-framework capabilities, each implementing the same login form design.

### Prerequisites
- Ensure you're in the `v2/playbooks/login` directory (relative to AgnosticUI root)
- Icon assets should be placed in `v2/playbooks/login/design/`:
  - `google-icon.svg` (multi-colored Google 'G' icon)
  - `facebook-icon.svg` (Facebook 'f' icon)

### Create Three Vite Projects

Run these commands from `v2/playbooks/login`:

```bash
# Create React project
npm create vite@latest react-example -- --template react

# Create Vue project  
npm create vite@latest vue-example -- --template vue

# Create Lit project
npm create vite@latest lit-example -- --template lit
```

### Install Dependencies

**React Example:**
```bash
cd react-example
npm install
npm install lucide-react
cd ..
```

**Vue Example:**
```bash
cd vue-example
npm install
npm install lucide-vue-next
cd ..
```

**Lit Example:**
```bash
cd lit-example
npm install
npm install lucide
cd ..
```

### Initialize AgnosticUI

For each project, initialize AgnosticUI using the CLI and add required components:

**React Example:**
```bash
cd react-example
npx agnosticui-cli init
# Select React when prompted
npx agnosticui-cli add button input card image link checkbox
cd ..
```

**Vue Example:**
```bash
cd vue-example
npx agnosticui-cli init
# Select Vue when prompted
npx agnosticui-cli add button input card image link checkbox
cd ..
```

**Lit Example:**
```bash
cd lit-example
npx agnosticui-cli init
# Select Lit when prompted
npx agnosticui-cli add button input card image link checkbox
cd ..
```

The CLI will:
- Set up the AgnosticUI configuration for your chosen framework
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Component variants to use:**
- Link: `type="monochrome"` for "Forgot password", `type="primary"` for "Sign up"
- Checkbox: Default variant for "Remember me"

### Icon Setup

For each project, copy the icon assets from the design folder:

```bash
# React
cp design/google-icon.svg react-example/public/
cp design/facebook-icon.svg react-example/public/

# Vue
cp design/google-icon.svg vue-example/public/
cp design/facebook-icon.svg vue-example/public/

# Lit
cp design/google-icon.svg lit-example/public/
cp design/facebook-icon.svg lit-example/public/
```

### Background Image Setup

Each project needs the mountain/flowers background image:

```bash
# Assuming background image is named login-bg.jpg in design folder
cp design/login-bg.jpg react-example/public/
cp design/login-bg.jpg vue-example/public/
cp design/login-bg.jpg lit-example/public/
```

### Icon Imports Reference

**React (lucide-react):**
```jsx
import { Mail, Lock } from 'lucide-react';
```

**Vue (lucide-vue-next):**
```vue
<script setup>
import { Mail, Lock } from 'lucide-vue-next';
</script>
```

**Lit (lucide):**
```javascript
import { mail, lock } from 'lucide';
// Note: Lit uses the icon data directly, not as components
```

---

## Design Specification

**Design Reference:** `v2/graphics/AgnosticUI-2.fig` on the templates page.

## Responsive Breakpoints

The login form adapts across three breakpoints with distinct layouts:

- **Mobile (< 768px):** Form only on white background, no decorative image
- **Tablet (768px - 1199px):** Full viewport background image with elevated card floating on top
- **Desktop (≥ 1200px):** Two-column layout with form (40%) and image (60%)

## Typography & Spacing

**Font Sizes:**
- Body text/labels: `--ag-font-size-sm` (14px)
- Title "Welcome back!": `--ag-font-size-2x` (32px) using Google Merriweather font

**Spacing Scale (top to bottom):**
- Logo to Title: 32px (`--ag-space-8`)
- Title to Email label: 24px (`--ag-space-6`)
- Label to Input: 8px (`--ag-space-2`)
- Between form sections: 24px (`--ag-space-6`)
- Social buttons to footer text: 56px (`--ag-space-14`)

## Component Hierarchy

1. **Logo** - Brand identifier at top (blue "A" + black "g")
2. **Title** - "Welcome back!" heading
3. **Email Field**
   - Label: "Email"
   - Input with left addon containing mail icon (Lucide Mail icon, `color: --ag-text-secondary`)
   - Placeholder: "Enter your email"
4. **Password Field**
   - Label: "Password"
   - Input with left addon containing lock icon (Lucide Lock icon, `color: --ag-text-secondary`)
   - Placeholder: "Enter your password"
5. **Auxiliary Row**
   - Left: Checkbox + "Remember me" (`--ag-text-primary`)
   - Right: "Forgot password" link (`--ag-text-primary`)
6. **Primary Action** - Full-width monochrome "Login" button (black background, white text)
7. **Divider** - Horizontal rule with centered "or" text
8. **Social Login Buttons**
   - Two bordered buttons side-by-side with 24px gap between them
   - Facebook button: Facebook icon (`/facebook-icon.svg`) + "Facebook" text
   - Google button: Google icon (`/google-icon.svg`) + "Google" text
   - Both buttons equal width, spanning full container width together
9. **Footer Text** - "Don't have an account? Sign up" (with "Sign up" as primary blue link)

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
│  ┃          ↕ 32px           ┃  │
│  ┃      Welcome back!        ┃  │
│  ┃          ↕ 24px           ┃  │
│  ┃  Email                    ┃  │
│  ┃    ↕ 8px                  ┃  │
│  ┃  ┌─────────────────────┐  ┃  │
│  ┃  │ ✉ Enter your email  │  ┃  │
│  ┃  └─────────────────────┘  ┃  │
│  ┃          ↕ 24px           ┃  │
│  ┃  Password                 ┃  │
│  ┃    ↕ 8px                  ┃  │
│  ┃  ┌─────────────────────┐  ┃  │
│  ┃  │ 🔒 Enter password   │  ┃  │
│  ┃  └─────────────────────┘  ┃  │
│  ┃          ↕ 24px           ┃  │
│  ┃  ☐ Remember  Forgot pwd?  ┃  │
│  ┃          ↕ 24px           ┃  │
│  ┃  ┌─────────────────────┐  ┃  │
│  ┃  │       Login         │  ┃  │
│  ┃  └─────────────────────┘  ┃  │
│  ┃          ↕ 24px           ┃  │
│  ┃  ───────── or ──────────  ┃  │
│  ┃          ↕ 24px           ┃  │
│  ┃  ┌──────────┬──────────┐  ┃  │
│  ┃  │ f  FB    │ G Google │  ┃  │
│  ┃  └──────────┴──────────┘  ┃  │
│  ┃          ↕ 56px           ┃  │
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
│  ░░░░║  ┃       ↕ 32px          ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   Welcome back!       ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃       ↕ 24px          ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   Email               ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃     ↕ 8px             ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [✉ Enter email]     ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃       ↕ 24px          ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   Password            ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃     ↕ 8px             ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [🔒 Enter password] ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃       ↕ 24px          ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ☐ Remember  Forgot? ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃       ↕ 24px          ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [Login Button]      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃       ↕ 24px          ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   ───── or ─────      ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃       ↕ 24px          ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃   [f FB] [G Google]   ┃  ║░░░░░░░░░░  │
│  ░░░░║  ┃       ↕ 56px          ┃  ║░░░░░░░░░░  │
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
│  │  ┃     ↕ 32px      ┃    │   ████  with Flowers   ████    │  │
│  │  ┃  Welcome back!  ┃    │   ████  (AgnosticUI    ████    │  │
│  │  ┃     ↕ 24px      ┃    │   ████   Image comp)   ████    │  │
│  │  ┃  Email          ┃    │   █████████████████████████    │  │
│  │  ┃    ↕ 8px        ┃    │   █████████████████████████    │  │
│  │  ┃  [✉ input]      ┃    │   █████████████████████████    │  │
│  │  ┃     ↕ 24px      ┃    │   █████████████████████████    │  │
│  │  ┃  Password       ┃    │   █████████████████████████    │  │
│  │  ┃    ↕ 8px        ┃    │   █████████████████████████    │  │
│  │  ┃  [🔒 input]     ┃    │   █████████████████████████    │  │
│  │  ┃     ↕ 24px      ┃    │   █████████████████████████    │  │
│  │  ┃  ☐ Rem  Forgot? ┃    │   █████████████████████████    │  │
│  │  ┃     ↕ 24px      ┃    │   █████████████████████████    │  │
│  │  ┃  [Login Button] ┃    │   █████████████████████████    │  │
│  │  ┃     ↕ 24px      ┃    │   █████████████████████████    │  │
│  │  ┃  ──── or ────   ┃    │   █████████████████████████    │  │
│  │  ┃     ↕ 24px      ┃    │   █████████████████████████    │  │
│  │  ┃  [f FB][G Goog] ┃    │   █████████████████████████    │  │
│  │  ┃     ↕ 56px      ┃    │   █████████████████████████    │  │
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
   - Use the AgnosticUI Image component with responsive sources (see: https://www.agnosticui.com/components/image.html#responsive-sources)
   - This properly prevents HTTP requests on mobile by using `<picture>` element with media queries
   - Example implementation:
   ```html
   <Image>
     <source media="(min-width: 768px)" srcset="/login-bg.jpg" />
     <img src="data:image/gif;base64,[BASE64_ENCODED_1x1_TRANSPARENT_GIF]" alt="" />
   </Image>
   ```
   - The background image loads on tablet (≥ 768px) and desktop (≥ 1200px)
   - Mobile gets no image at all (bandwidth optimization)
   
2. **Card shadow (tablet only):** 
   - Implement custom elevated shadow on the white card similar to Material Design Elevation 5
   - This creates a prominent "floating" effect against the background image
   - Desktop does NOT use a card - form sits directly on white background

3. **Grid constraint logic (desktop):** 
   - Left column: centers 375px max-width content within the 40% column width
   - Right column: zero padding to allow image to touch browser edge

4. **Icon implementation:** 
   - Mail and Lock icons: Use Lucide icons (framework-specific package)
   - Facebook and Google icons: Use SVG files from `/public/` directory
   - All icons in input addons use `--ag-text-secondary` color token

5. **Social button layout:** 
   - Two buttons side-by-side with 24px gap between them
   - Use CSS Grid or Flexbox with `gap: 24px`
   - Both buttons equal width, together spanning full container width

6. **Background treatment:**
   - Mobile: White/primary background, no image
   - Tablet: Full viewport background image
   - Desktop: Left column white background, right column background image

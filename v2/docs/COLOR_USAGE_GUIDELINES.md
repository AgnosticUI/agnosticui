# AgnosticUI v2 – Color & Design Token Usage Guidelines

**Version:** 2.0.0
**Last Updated:** 2025-10-03
**Status:** Living Document

---

## 📋 Table of Contents

1. [Purpose & Philosophy](#purpose--philosophy)
2. [Design Token Architecture](#design-token-architecture)
3. [Color Token System](#color-token-system)
4. [Token Usage Patterns](#token-usage-patterns)
5. [Component Color Guidelines](#component-color-guidelines)
6. [Light & Dark Mode](#light--dark-mode)
7. [Common Mistakes & Solutions](#common-mistakes--solutions)
8. [Reference Examples](#reference-examples)

---

## Purpose & Philosophy

### Mission

AgnosticUI v2 follows a **minimalist & highly themeable** design philosophy. Components provide beautiful defaults via design tokens with complete customization capabilities. This document serves as the authoritative guide for how to use design tokens consistently throughout the v2 rewrite.

### Core Principles

1. **Single Source of Truth**: All color values originate from `/v2/theme-registry/tokens/colors/`
2. **Token-First Design**: NEVER hardcode color values in components
3. **Functional CSS Only**: Components contain only functional CSS (visibility, display states). All visual styling comes from tokens.
4. **Theme Awareness**: All colors must work in both light and dark modes
5. **Semantic Naming**: Use semantic token names that describe purpose, not appearance

---

## Design Token Architecture

### Token Flow Pipeline

```
theme-registry/tokens/         →  Style Dictionary Build  →  dist/ag-tokens.css
├── colors/                                                   dist/ag-tokens-dark.css
│   ├── light.json
│   └── dark.json
├── spacing.json
├── radii.json
├── motion.json
├── focus.json
└── z-index.json
```

### Build Commands

```bash
# Build all tokens
cd v2/theme-registry
npm run build

# Rebuild from scratch
npm run rebuild
```

**Output Files:**
- `dist/ag-tokens.css` - Light mode tokens (`:where(html)` selector)
- `dist/ag-tokens-dark.css` - Dark mode tokens (`[data-theme="dark"]` selector)
- `dist/tokens.js` - JavaScript export
- `dist/tokens.json` - JSON export

### Configuration Files

**Light Mode**: `theme-registry/configs/config.all-tokens.json`
- Sources: All token files + `colors/light.json`
- Selector: `:where(html)`
- Prefix: `ag`

**Dark Mode**: `theme-registry/configs/config.dark.json`
- Sources: `colors/dark.json` only
- Selector: `[data-theme="dark"]`
- Prefix: `ag`

---

## Color Token System

### Token Categories

#### 1. Semantic Background Tokens

These tokens define component surface colors and automatically adjust for light/dark mode.

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--ag-background-primary` | `#ffffff` | `#010409` | Main page background |
| `--ag-background-secondary` | `#f9fafb` | `#212730` | Accordion panels, card backgrounds |
| `--ag-background-tertiary` | `#e5e7eb` | `#3D444D` | Neutral button backgrounds |
| `--ag-background-disabled` | `#f3f4f6` | `#212730` | Disabled element backgrounds |

**Usage Example** (from `_Accordion.ts:101`):
```css
:host([background]) .header {
  background-color: var(--ag-background-secondary, #f3f4f6);
  color: var(--ag-text-primary, inherit);
}
```

#### 2. Semantic Color Tokens

Brand and state colors with built-in hover states.

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `--ag-primary` | `#0063a8` | `#077acb` | Primary brand actions |
| `--ag-primary-dark` | `#063f69` | `#0969da` | Primary hover state |
| `--ag-secondary` | `#6b7280` | `#9198A1` | Secondary actions |
| `--ag-secondary-dark` | `#4b5563` | `#656C76` | Secondary hover state |
| `--ag-danger` | `#ca1d1d` | `#dc2626` | Error/destructive actions |
| `--ag-danger-dark` | `#b71c1c` | `#f85149` | Danger hover state |
| `--ag-warning` | `#bf6804` | `#d97706` | Warning states |
| `--ag-warning-dark` | `#b45309` | `#db6d28` | Warning hover state |

**Usage Example** (from `_Button.ts:88-94`):
```css
:host([variant="primary"]) button {
  background: var(--ag-primary);
  color: var(--ag-white);
}
:host([variant="primary"]) button:hover {
  background: var(--ag-primary-dark);
}
```

#### 3. Neutral Scale Tokens

Grayscale tokens for borders, text, and subtle backgrounds.

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--ag-neutral-50` | `#f9fafb` | `#F0F6FC` | Lightest backgrounds |
| `--ag-neutral-100` | `#f3f4f6` | `#D1D7E0` | Hover states on light buttons |
| `--ag-neutral-200` | `#e5e7eb` | `#B7BDC8` | Borders, dividers |
| `--ag-neutral-400` | `#9ca3af` | `#9198A1` | Placeholder text |
| `--ag-neutral-500` | `#6b7280` | `#656C76` | Secondary text, icons |
| `--ag-neutral-600` | `#4b5563` | `#3D444D` | Hover states, borders |
| `--ag-neutral-700` | `#2e3745` | `#212730` | Primary text |
| `--ag-neutral-900` | `#111827` | `#0D1117` | High contrast text |

**Usage Example** (from `_Button.ts:80-84`):
```css
:host([variant="secondary"]) button {
  background: var(--ag-neutral-400);
}
:host([variant="secondary"]) button:hover {
  background: var(--ag-neutral-500);
}
```

#### 4. Border Tokens

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--ag-border` | `#e5e7eb` | `#3D444D` | General borders |
| `--ag-primary-border` | `#c1d9e9` | `#1f6feb` | Primary element borders |

**Usage Example** (from `_Accordion.ts:114`):
```css
:host([bordered]) .header button {
  border-bottom: 1px solid var(--ag-border);
}
```

#### 5. Focus Tokens (Accessibility Critical)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--ag-focus` | `#2563eb` | `#58a6ff` | Focus ring color |
| `--ag-focus-width` | `2px` | `2px` | Focus ring width |
| `--ag-focus-offset` | `2px` | `2px` | Focus ring offset |

**CRITICAL**: Always use `--ag-focus` for focus rings, NEVER `currentColor` (poor contrast).

**Usage Example** (from `_Accordion.ts:134-136`):
```css
.header button:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
  outline-offset: var(--ag-focus-offset, 2px);
  transition: outline var(--ag-motion-medium, 0.2s) ease;
}
```

#### 6. Utility Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--ag-white` | `#ffffff` | White text on colored backgrounds |
| `--ag-black` | `#1f2328` (light) / `#010409` (dark) | Base black |

---

## Token Usage Patterns

### Pattern 1: Semantic Colors with Hover States

**When to use**: Colored buttons, badges, and interactive elements with white text.

```css
/* Base state - colored background with white text */
button {
  background: var(--ag-primary);
  color: var(--ag-white);
}

/* Hover state - DARKEN the background */
button:hover {
  background: var(--ag-primary-dark);
}
```

**Available Pairs**:
- `--ag-primary` → `--ag-primary-dark`
- `--ag-danger` → `--ag-danger-dark`
- `--ag-warning` → `--ag-warning-dark`
- `--ag-secondary` → `--ag-secondary-dark`

### Pattern 2: Neutral Backgrounds with Incremental Darkening

**When to use**: Neutral buttons, light backgrounds with dark text.

```css
/* Base state - light background */
button {
  background: var(--ag-background-tertiary);
  color: inherit;
}

/* Hover state - DARKEN by moving down the scale */
button:hover {
  background: var(--ag-neutral-400);
}
```

**Hover Scale Strategy**:
- Start: `--ag-background-secondary` (#f9fafb)
- Hover: `--ag-neutral-100` (#f3f4f6)
- Active: `--ag-neutral-200` (#e5e7eb)

### Pattern 3: Surface Backgrounds (Accordion, Cards)

**When to use**: Container backgrounds that need theme awareness.

```css
.container {
  background-color: var(--ag-background-secondary, #f3f4f6);
  border: 1px solid var(--ag-border);
}
```

### Pattern 4: Focus States (Accessibility Mandatory)

**When to use**: ALL focusable elements.

```css
element:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
  outline-offset: var(--ag-focus-offset, 2px);
  transition: outline var(--ag-motion-medium, 0.2s) ease;
}
```

**Why not `currentColor`?**
- Poor contrast on colored backgrounds (e.g., red button with red outline)
- Blue `--ag-focus` provides excellent contrast on all button variants

### Pattern 5: Bordered Variants with Fill on Hover

**When to use**: Outline-style buttons that fill on hover.

```css
/* Base state - transparent with colored border */
:host([bordered][variant="primary"]) button {
  background: transparent;
  color: var(--ag-primary);
  border: 1px solid var(--ag-primary);
}

/* Hover state - FILL with color, text becomes white */
:host([bordered][variant="primary"]) button:hover {
  background: var(--ag-primary);
  color: var(--ag-white);
}
```

**Example**: See `_Button.ts:251-261` for primary bordered button.

### Pattern 6: Ghost Buttons with Subtle Hover

**When to use**: Minimal buttons with transparent backgrounds.

```css
/* Base state - transparent, colored text */
:host([ghost][variant="primary"]) button {
  background: transparent;
  color: var(--ag-primary);
}

/* Hover state - subtle neutral background */
:host([ghost][variant="primary"]) button:hover {
  background: var(--ag-neutral-100);
}
```

**Example**: See `_Button.ts:191-214` for ghost button implementation.

---

## Component Color Guidelines

### Button Component (`_Button.ts`)

**Reference Lines**: 58, 88-108, 178-291

**Default State**:
```css
button {
  background: var(--ag-background-tertiary);
  color: inherit;
}
```

**Variant Colors**:
- **Primary**: `--ag-primary` bg, `--ag-white` text → hover `--ag-primary-dark`
- **Secondary**: `--ag-neutral-400` bg, inherit text → hover `--ag-neutral-500`
- **Warning**: `--ag-warning` bg, `--ag-white` text → hover `--ag-warning-dark`
- **Danger**: `--ag-danger` bg, `--ag-white` text → hover `--ag-danger-dark`

**Special States**:
- **Ghost**: Transparent bg, colored text, hover `--ag-neutral-100`
- **Link**: Transparent bg, `--ag-primary` text, underline on hover
- **Bordered**: Transparent bg, colored border/text, fills on hover
- **Disabled**: `--ag-background-disabled` bg, reduced opacity

### Accordion Component (`_Accordion.ts`)

**Reference Lines**: 101-102, 114, 134-136

**Surface Colors**:
```css
:host([background]) .header {
  background-color: var(--ag-background-secondary, #f3f4f6);
  color: var(--ag-text-primary, inherit);
}
```

**Borders**:
```css
:host([bordered]) .header button {
  border-bottom: 1px solid var(--ag-border);
}
```

**Button Styling**:
- Background: `none` (transparent)
- Color: `inherit` (inherits from parent)
- Focus: `--ag-focus` outline

### IconButton Component (`_IconButton.ts`)

**Reference Lines**: 74-76, 109-111, 114-117

**Special Token: `--ag-text-locked`**

IconButton uses a special pattern for contrast-critical scenarios:

```css
button {
  background: var(--icon-button-bg, transparent);
  color: var(--icon-button-color, var(--ag-text-locked, #374151));
}

button:hover {
  background: var(--icon-button-hover-bg, var(--ag-background-secondary, #f3f4f6));
  color: var(--icon-button-hover-color, var(--ag-text-locked, #374151));
}
```

**Why `--ag-text-locked`?**
- Remains dark in both light AND dark themes
- Critical for hover states on light backgrounds
- Use case: Settings icons, upload indicators

**Note**: `--ag-text-locked` is not yet in the token system but represents the pattern for adding specialized tokens when needed.

### Input Component (`_Input.ts`)

**Reference Lines**: 58-63

**Focus Pattern**:
```css
.ag-input__input:focus-visible,
.ag-input__textarea:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
  outline-offset: var(--ag-focus-offset, 2px);
  transition: outline var(--ag-motion-medium, 0.2s) ease;
}
```

### Toggle Component (`_Toggle.ts`)

**Reference Lines**: 76-77, 81-83, 104-105

**Track & Handle Pattern**:
```css
button {
  border-radius: var(--ag-focus-border-radius, 9999px);
  transition: all var(--ag-transition-duration, 200ms) ease;
}

button:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
  outline-offset: var(--ag-focus-offset, 2px);
}

.ag-toggle__track {
  background: var(--toggle-track-bg, #d1d5db);
  border: 1px solid var(--toggle-track-border, transparent);
}
```

---

## Light & Dark Mode

### How Dark Mode Works

1. **Light Mode (Default)**: Tokens from `colors/light.json` applied to `:where(html)`
2. **Dark Mode Activation**: Tokens from `colors/dark.json` override with `[data-theme="dark"]`
3. **Automatic Switching**: JavaScript toggles `data-theme="dark"` on `<html>` element

### Theme-Aware Token Selection

**Principle**: Choose semantic tokens that automatically swap values.

```css
/* ✅ GOOD - Uses semantic tokens that swap automatically */
background: var(--ag-background-secondary);
color: var(--ag-text-primary);
border: 1px solid var(--ag-border);

/* ❌ BAD - Hardcoded colors that don't adapt */
background: #f3f4f6;
color: #111827;
border: 1px solid #e5e7eb;
```

### Color Brightness Adjustments

When defining light/dark pairs in token files:

**Light Mode**: Optimized for white backgrounds
- Primary: `#0063a8` (darker blue for contrast)
- Background Secondary: `#f9fafb` (very light gray)
- Neutrals: Start light, go darker

**Dark Mode**: Optimized for dark backgrounds
- Primary: `#077acb` (brighter blue for visibility)
- Background Secondary: `#212730` (dark gray)
- Neutrals: Start light (for text), go darker (for backgrounds)

### Testing Dark Mode

```bash
# In browser console
document.documentElement.setAttribute('data-theme', 'dark')
document.documentElement.setAttribute('data-theme', 'light')
```

---

## Common Mistakes & Solutions

### ❌ Mistake 1: Hardcoded Colors

```css
/* WRONG */
button {
  background: #0063a8;
  color: #ffffff;
}
```

**Solution**: Use semantic tokens
```css
/* CORRECT */
button {
  background: var(--ag-primary);
  color: var(--ag-white);
}
```

---

### ❌ Mistake 2: Using `currentColor` for Focus

```css
/* WRONG - Poor contrast on colored backgrounds */
button:focus-visible {
  outline: 2px solid currentColor;
}
```

**Solution**: Always use `--ag-focus`
```css
/* CORRECT */
button:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus);
  outline-offset: var(--ag-focus-offset, 2px);
}
```

---

### ❌ Mistake 3: Wrong Hover Direction

```css
/* WRONG - Light text on light background = broken contrast */
:host([variant="secondary"]) button {
  background: var(--ag-neutral-400);
  color: inherit; /* dark text */
}
:host([variant="secondary"]) button:hover {
  background: var(--ag-neutral-100); /* LIGHTER = worse contrast */
}
```

**Solution**: Follow the contrast-aware hover pattern
```css
/* CORRECT */
:host([variant="secondary"]) button {
  background: var(--ag-neutral-400);
  color: inherit;
}
:host([variant="secondary"]) button:hover {
  background: var(--ag-neutral-500); /* DARKER = better contrast */
}
```

**Rule**: White text on color = DARKEN on hover. Dark text on light = DARKEN on hover.

---

### ❌ Mistake 4: Missing Fallback Values

```css
/* RISKY - No fallback if token is missing */
background: var(--ag-primary);
```

**Solution**: Always provide fallbacks
```css
/* SAFE */
background: var(--ag-primary, #0063a8);
```

---

### ❌ Mistake 5: Using Color Scale Instead of Semantic Tokens

```css
/* WRONG - Scale tokens don't swap automatically */
background: var(--ag-blue-500);
```

**Solution**: Use semantic tokens
```css
/* CORRECT */
background: var(--ag-primary);
```

**Exception**: Using scale tokens is acceptable when you need precise control over a color ramp (e.g., data visualization, custom themes).

---

### ❌ Mistake 6: Missing Theme Awareness

```css
/* WRONG - Only works in light mode */
.container {
  background: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;
}
```

**Solution**: Use theme-aware semantic tokens
```css
/* CORRECT */
.container {
  background: var(--ag-background-primary);
  color: var(--ag-text-primary, inherit);
  border: 1px solid var(--ag-border);
}
```

---

## Reference Examples

### Complete Button Example

From `_Button.ts:88-108`, showing all variant color patterns:

```css
/* Primary - white text on blue, darkens on hover */
:host([variant="primary"]) button {
  background: var(--ag-primary);
  color: var(--ag-white);
}
:host([variant="primary"]) button:hover {
  background: var(--ag-primary-dark);
}

/* Warning - white text on orange, darkens on hover */
:host([variant="warning"]) button {
  background: var(--ag-warning);
  color: var(--ag-white);
}
:host([variant="warning"]) button:hover {
  background: var(--ag-warning-dark);
}

/* Danger - white text on red, darkens on hover */
:host([variant="danger"]) button {
  background: var(--ag-danger);
  color: var(--ag-white);
}
:host([variant="danger"]) button:hover {
  background: var(--ag-danger-dark);
}

/* Secondary - inherits text color, gray background */
:host([variant="secondary"]) button {
  background: var(--ag-neutral-400);
}
:host([variant="secondary"]) button:hover {
  background: var(--ag-neutral-500);
}
```

### Complete Focus Example

From `_Button.ts:298-304`:

```css
button:focus-visible,
button:focus:not(:hover) {
  /* High-contrast focus ring using semantic tokens */
  outline: var(--ag-focus-width) solid var(--ag-focus);
  outline-offset: var(--ag-focus-offset);
  transition: outline var(--ag-motion-medium) ease;
}
```

### Complete Accordion Example

From `_Accordion.ts:100-115, 132-137`:

```css
/* Background variant */
:host([background]) .header {
  background-color: var(--ag-background-secondary, #f3f4f6);
  color: var(--ag-text-primary, inherit);
}

/* Bordered variant */
:host([bordered]) .header button {
  border-bottom: 1px solid var(--ag-border);
}

/* Button styling */
.header button {
  background: none;
  border: none;
  color: inherit;
}

/* Focus state */
.header button:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
  outline-offset: var(--ag-focus-offset, 2px);
  transition: outline var(--ag-motion-medium, 0.2s) ease;
}
```

---

## Quick Reference Checklist

When implementing or refactoring a component, verify:

- [ ] **No hardcoded colors** - All colors use `--ag-*` tokens
- [ ] **Semantic tokens used** - Prefer semantic tokens over color scale
- [ ] **Fallback values provided** - All `var()` calls have fallbacks
- [ ] **Focus uses `--ag-focus`** - Never `currentColor` for focus rings
- [ ] **Hover contrast maintained** - White-on-color darkens, dark-on-light darkens
- [ ] **Theme awareness** - Component works in light AND dark mode
- [ ] **Background tokens for surfaces** - Accordion panels, cards use `--ag-background-secondary`
- [ ] **Border tokens** - Use `--ag-border` for general borders
- [ ] **Motion tokens** - Use `--ag-motion-medium` for transitions
- [ ] **Spacing tokens** - Use `--ag-space-*` for padding/margins (not in scope of this doc)

---

## Token Modification Workflow

### Adding New Tokens

1. **Edit source JSON**:
   ```bash
   # For both modes
   v2/theme-registry/tokens/colors/light.json
   v2/theme-registry/tokens/colors/dark.json
   ```

2. **Add token with semantic name**:
   ```json
   {
     "text-locked": {
       "value": "#374151",
       "description": "Text that remains dark in both light and dark themes"
     }
   }
   ```

3. **Build tokens**:
   ```bash
   cd v2/theme-registry
   npm run build
   ```

4. **Verify output**:
   ```bash
   cat v2/theme-registry/dist/ag-tokens.css | grep text-locked
   ```

5. **Use in components**:
   ```css
   color: var(--ag-text-locked, #374151);
   ```

### Modifying Existing Tokens

1. **Never modify built files** (`dist/ag-tokens.css`) - changes will be overwritten
2. **Always edit source JSON** (`tokens/colors/*.json`)
3. **Rebuild after changes** (`npm run build`)
4. **Test in both light/dark mode**

---

## Additional Resources

- **Component Development Workflow**: `/v2/docs/COMPONENT_DEVELOPMENT_WORKFLOW.md`
- **Project Global Rules**: `/v2/docs/CLAUDE.md`
- **Theme Registry**: `/v2/theme-registry/`
- **Style Dictionary Docs**: https://amzn.github.io/style-dictionary/

---

**Document Status**: ✅ Complete and Authoritative
**Maintenance**: Update this document when adding new token patterns or discovering new best practices.

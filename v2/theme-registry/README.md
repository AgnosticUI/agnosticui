# AgnosticUI Theme Registry

A complete, production-ready design token system for AgnosticUI v2 using Style Dictionary with full semantic token migration.

## Overview

This system replaces ad-hoc CSS custom properties with systematic design tokens that enable:
- Consistent theming across all components
- White-labeling capabilities for enterprises
- Systematic color management
- Multiple output formats (CSS, JS, JSON)

## Structure

```
theme-registry/
├── tokens/           # Source design token files
│   └── colors/       # Color tokens
├── configs/          # Style Dictionary configurations
├── dist/             # Generated output files
└── package.json      # Build scripts and dependencies
```

## Usage

### Building Tokens

```bash
# Build all color tokens
npm run build:colors

# Build all tokens
npm run build

# Clean and rebuild
npm run rebuild
```

### Generated Files

- **`dist/ag-colors.css`** - CSS custom properties with `--ag-` prefix
- **`dist/colors.js`** - ES6 module exports for JavaScript usage
- **`dist/colors.json`** - JSON format for tooling and other systems

### Example Output

**CSS Variables:**
```css
:root {
  --ag-primary: #077acb;
  --ag-primary-dark: #063f69;
  --ag-danger: #dc2626;
  --ag-focus: #f59e0b;
}
```

**JavaScript Exports:**
```javascript
export const Primary = "#077acb";
export const PrimaryDark = "#063f69";
export const Danger = "#dc2626";
export const Focus = "#f59e0b";
```

## Current Token System (52 tokens)

### Colors (11 tokens)
- **Primary**: Main brand colors (`--ag-primary`, `--ag-primary-dark`, `--ag-primary-border`)
- **Secondary**: Secondary gray colors (`--ag-secondary`, `--ag-secondary-dark`)
- **Danger**: Error and danger states (`--ag-danger`, `--ag-danger-dark`)
- **Warning**: Warning states (`--ag-warning`, `--ag-warning-dark`)
- **Focus**: Blue focus ring colors (`--ag-focus`, `--ag-focus-dark`) - less jarring than orange

### Neutrals (10 tokens)
- **Grays**: `--ag-neutral-50` through `--ag-neutral-900` for text, borders, backgrounds
- **Pure**: `--ag-neutral-white`, `--ag-neutral-black` for high contrast

### Spacing (8 tokens)
- **Scale**: `--ag-space-0` (0) through `--ag-space-8` (2rem) - consistent spacing system
- **Common values**: 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem

### Border Radius (5 tokens)
- **Range**: `--ag-radius-none` to `--ag-radius-full` (0, 0.25rem, 0.375rem, 1rem, 9999px)

### Surfaces & Borders (6 tokens)
- **Surfaces**: `--ag-surface-primary` (cards/dialogs), `--ag-surface-secondary`, `--ag-surface-tertiary`
- **Borders**: `--ag-border-primary`, `--ag-border-secondary`, `--ag-border-width`

### Focus System (2 tokens)
- **Accessibility**: `--ag-focus-width` (2px), `--ag-focus-offset` (2px) for consistent focus rings

### Motion (3 tokens)
- **Durations**: `--ag-motion-fast` (0.15s), `--ag-motion-medium` (0.2s), `--ag-motion-slow` (0.4s)

### Z-Index (3 tokens)
- **Layers**: `--ag-z-index-dropdown` (100), `--ag-z-index-modal` (1000), `--ag-z-index-toast` (1100)

## Integration

**✅ Production Ready Integration:**

1. **Components**: All AgnosticUI components now use semantic tokens (e.g., `var(--ag-primary)`, `var(--ag-focus)`)
2. **Themes**: Light/dark theme variants implemented with automatic token switching
3. **Build Process**: Generated CSS integrated into build pipeline and distributed
4. **Playground**: Theme switching functionality implemented and tested
5. **Backward Compatibility**: Legacy `--agnostic-*` tokens mapped for smooth migration

## Migration Status

### ✅ Completed Migrations

**Component Token Migration (Completed)**
All AgnosticUI components have been migrated from legacy `--agnostic-*` tokens to the new `--ag-*` semantic token system:

**Focus Ring Updates (Completed):**
- ✅ `var(--agnostic-focus, #2563eb)` → `var(--ag-focus)` (Button, Dialog, Input)
- ✅ `outline: 2px solid` → `outline: var(--ag-focus-width) solid`
- ✅ `outline-offset: 2px` → `outline-offset: var(--ag-focus-offset)`

**Spacing Standardization (Completed):**
- ✅ `gap: 0.25rem` → `gap: var(--ag-space-1)` (Button)
- ✅ `margin-bottom: 0.25rem` → `margin-bottom: var(--ag-space-1)` (Input)
- ✅ `padding: 0.75rem` → `padding: var(--ag-space-3)` (Input addons)
- ✅ `padding: 1.5rem` → `padding: var(--ag-space-6)` (Dialog)

**Border Radius Standardization (Completed):**
- ✅ `border-radius: 0.25rem` → `border-radius: var(--ag-radius-sm)`
- ✅ `border-radius: 0.375rem` → `border-radius: var(--ag-radius-md)`
- ✅ `border-radius: 1rem` → `border-radius: var(--ag-radius-lg)` (Dialog)

**Hardcoded Colors Replaced (Completed):**
- ✅ `#6b7280` → `var(--ag-neutral-500)` (description colors)
- ✅ `#f3f4f6` → `var(--ag-neutral-100)` (hover backgrounds)
- ✅ `#374151` → `var(--ag-neutral-700)` (darker text)
- ✅ `#e5e7eb` → `var(--ag-border-primary)` (borders)
- ✅ `#ffffff` → `var(--ag-surface-primary)` (dialog/card backgrounds)

**Motion Standardization (Completed):**
- ✅ `transition: outline 0.2s ease` → `transition: outline var(--ag-motion-medium) ease`

**Z-Index Standardization (Completed):**
- ✅ `z-index: 1000` → `z-index: var(--ag-z-index-modal)` (Dialog)

**Playground Variables Replaced (Completed):**
- ✅ `--agnostic-primary` → `--ag-primary`
- ✅ `--agnostic-focus` → `--ag-focus`
- ✅ `--agnostic-danger` → `--ag-danger`

## Backward Compatibility

**Legacy Token Mapping**
For applications still using legacy `--agnostic-*` tokens, a compatibility layer is provided through CSS custom property fallbacks and mapping:

```css
/* Legacy token mappings for backward compatibility */
:root {
  --agnostic-primary: var(--ag-primary);
  --agnostic-focus: var(--ag-focus);
  --agnostic-danger: var(--ag-danger);
  --agnostic-warning: var(--ag-warning);
  --agnostic-secondary: var(--ag-secondary);
}
```

**Migration Path**
1. **Immediate**: All new development should use `--ag-*` tokens
2. **Gradual**: Existing applications can migrate incrementally
3. **Support**: Legacy `--agnostic-*` tokens will be supported through v2.x for smooth transitions

## Current Expansion

**✅ Completed Features:**
- Complete 52-token foundation system
- Semantic token naming with `--ag-` prefix
- Component token migration across all AgnosticUI components
- Light/dark theme variant system with semantic token names
- Playground theme integration and testing

**🔄 Future Expansion:**
This foundation supports further expansion to:
- Typography tokens (font-size, line-height, font-weight)
- Shadow tokens for consistent elevation
- Additional theme variants (high contrast, colorblind-friendly)
- Component-specific tokens for advanced customization
- Multi-brand theme registry system for enterprise white-labeling

## Design Philosophy

- **Start Simple**: Begin with essential color tokens
- **Systematic**: Consistent naming and organization
- **Extensible**: Easy to add new token categories
- **Generated**: Never hand-edit output files
- **Prefixed**: All CSS variables use `--ag-` prefix for clear namespacing
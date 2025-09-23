# AgnosticUI Theme Registry

A simple, foundational design token system for AgnosticUI v2 using Style Dictionary.

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

## Current Tokens

### Colors
- **Primary**: Main brand colors (primary, primary-dark, primary-border)
- **Secondary**: Secondary gray colors (secondary, secondary-dark)
- **Danger**: Error and danger states (danger, danger-dark)
- **Warning**: Warning states (warning, warning-dark)
- **Focus**: Blue focus ring colors (focus, focus-dark) - less jarring than orange

## Integration

1. **Components**: Reference tokens in Lit component styles using `var(--ag-primary)`
2. **Themes**: Override tokens for custom themes and white-labeling
3. **Build Process**: Include generated CSS in build pipeline

## Future Expansion

This foundation supports expansion to:
- Semantic tokens (spacing, typography, shadows)
- Theme variants (dark mode, high contrast)
- Component-specific tokens
- Multi-brand theme registry system

## Design Philosophy

- **Start Simple**: Begin with essential color tokens
- **Systematic**: Consistent naming and organization
- **Extensible**: Easy to add new token categories
- **Generated**: Never hand-edit output files
- **Prefixed**: All CSS variables use `--ag-` prefix for clear namespacing
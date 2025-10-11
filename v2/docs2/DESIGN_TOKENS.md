# Design Token Usage Guidelines

This document provides the rules and patterns for using design tokens in AgnosticUI v2. It is written for an LLM assistant to ensure consistent and correct application of the theming system.

## 1. Core Principle: Token-First, with Nuanced Fallbacks

**Rule**: NEVER hardcode style values like colors or spacing. Always use CSS custom properties (design tokens).

**Rule on Fallbacks**:

1.  **When CONSUMING global `--ag-*` tokens, do NOT use a fallback.** The AgnosticUI design token system is a precondition for all components. They are guaranteed to be present.

    -   **CORRECT**: `background-color: var(--ag-primary);`
    -   **INCORRECT**: `background-color: var(--ag-primary, #0063a8);`

2.  **When DEFINING a component-specific custom property, you MAY use a fallback.** This is a powerful pattern for creating themeable components. The fallback sets a default value, which can be another global token or a literal value.

    -   **CORRECT**: `padding: var(--ag-tabs-panel-padding, 1rem);`
    -   **CORRECT**: `width: var(--icon-button-size, var(--ag-space-10));`

This allows a component to have its own internal API (`--ag-tabs-panel-padding`) while still being connected to the global theme system.

## 2. Token Architecture

- **Source of Truth**: All tokens are defined in JSON files within `v2/theme-registry/tokens/`.
- **Build Process**: The `npm run build` command in `v2/theme-registry` uses Style Dictionary to compile these JSON files into CSS files (`ag-tokens.css` and `ag-tokens-dark.css`).
- **Consumption**: The compiled CSS files are consumed by the `agnosticui-core` library.

## 3. Key Token Categories and Usage

### Category A: Text Colors

**Rule**: Use semantic text tokens for all text content to ensure automatic adaptability to light and dark modes.

- `--ag-text-primary`: For primary text (body copy, headings).
- `--ag-text-secondary`: For secondary text (subheadings, labels).
- `--ag-text-muted`: For muted text (placeholders, disabled text).

**Example**:
```css
.heading {
  color: var(--ag-text-primary);
}
.subheading {
  color: var(--ag-text-secondary);
}
```

### Category B: Background Colors

**Rule**: Use semantic background tokens for component surfaces.

- `--ag-background-primary`: For the main page background.
- `--ag-background-secondary`: For surfaces that sit on top of the primary background (e.g., cards, accordion panels).
- `--ag-background-tertiary`: For neutral element backgrounds (e.g., default buttons).

### Category C: Interactive Colors (Primary, Danger, etc.)

**Rule**: Use semantic color tokens for interactive elements like buttons. These tokens have built-in hover states.

- `--ag-primary`: The primary interactive color.
- `--ag-primary-dark`: The hover state for the primary color.
- `--ag-danger`: The color for destructive actions.
- `--ag-danger-dark`: The hover state for the danger color.

**Hover State Pattern**: When an element has a colored background and light text, its hover state should use the `-dark` version of the token to darken the background.

```css
.button-primary {
  background-color: var(--ag-primary);
  color: var(--ag-white);
}
.button-primary:hover {
  background-color: var(--ag-primary-dark);
}
```

### Category D: Borders

**Rule**: Use a two-tier border system.

- `--ag-border`: For prominent structural dividers (e.g., table borders, card outlines).
- `--ag-border-subtle`: For interactive controls (e.g., form inputs, menu buttons).

### Category E: Focus

**Rule**: ALWAYS use the dedicated focus token for focus rings to ensure accessibility.

- **CORRECT**: `outline: var(--ag-focus-width) solid var(--ag-focus);`
- **INCORRECT**: `outline: 2px solid currentColor;` (This provides poor contrast on colored backgrounds).

## 4. How to Add or Modify Tokens

1.  **Locate the Source**: Open the relevant JSON file in `v2/theme-registry/tokens/` (e.g., `colors/light.json` and `colors/dark.json`).
2.  **Edit the JSON**: Add or modify the token definition.
3.  **Rebuild Tokens**: Navigate to `v2/theme-registry` and run `npm run build`.
4.  **Verify**: Check the generated `dist/ag-tokens.css` file to ensure your changes were applied.

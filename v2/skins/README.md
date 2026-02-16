# AgnosticUI Skins

A **skin** is a CSS file that overrides a subset of AgnosticUI's design tokens (`--ag-*`) to re-theme components without touching component source code. Skins are loaded _after_ the core token files so the CSS cascade does the work.

## Directory Structure

```
v2/skins/
├── README.md
├── deep-forest/
│   ├── skin.css           ← light-mode overrides
│   └── skin-dark.css      ← dark-mode overrides
```

Each skin lives in its own folder with up to two files: one for light mode, one for dark mode.

## How It Works

### Selector Pattern

Skins scope their overrides with a class on `<html>`:

```css
/* Light mode */
:where(html).ag-skin-<name> {
  --ag-primary: #newvalue;
}

/* Dark mode */
[data-theme="dark"].ag-skin-<name> {
  --ag-primary: #darkvalue;
}
```

The `:where()` wrapper keeps specificity at zero so the skin doesn't fight with the base tokens — only cascade order matters.

### Activating a Skin

1. **Load the CSS** after the core tokens:

```html
<link rel="stylesheet" href="ag-tokens.css" />
<link rel="stylesheet" href="ag-tokens-dark.css" />
<link rel="stylesheet" href="skins/deep-forest/skin.css" />
<link rel="stylesheet" href="skins/deep-forest/skin-dark.css" />
```

2. **Add the class** to `<html>`:

```html
<html class="ag-skin-deep-forest">
```

3. **Remove the class** to revert to default tokens. No other changes needed.

This composes cleanly with the existing `data-theme="dark"` toggle.

## Creating a New Skin

1. Create a folder: `v2/skins/<name>/`
2. Create `skin.css` with light-mode overrides scoped to `:where(html).ag-skin-<name>`
3. Create `skin-dark.css` with dark-mode overrides scoped to `[data-theme="dark"].ag-skin-<name>`
4. Only override the tokens that differ — spacing, typography, motion, and z-index rarely need changing
5. Reference `v2/dist/agnosticui-local/tokens/ag-tokens.css` for the full list of available tokens

### Naming Convention

- Folder name: lowercase, hyphenated (e.g., `deep-forest`, `my-brand`)
- CSS class: `ag-skin-<folder-name>` (e.g., `ag-skin-deep-forest`, `ag-skin-my-brand`)

### What to Override

Typically you'll override some combination of:

- **Primary color family:** `--ag-primary`, `--ag-primary-dark`, `--ag-primary-border`, `--ag-primary-background`, `--ag-primary-text`
- **Focus ring:** `--ag-focus` (RGB triplet), `--ag-focus-dark`
- **Borders & surfaces:** `--ag-border`, `--ag-border-subtle`, `--ag-background-secondary`, `--ag-background-tertiary`
- **Border radius:** `--ag-radius-lg` (for rounder/sharper cards)
- **Shadows:** `--ag-shadow-xs` through `--ag-shadow-xl`
- **Blue palette:** `--ag-blue-50` through `--ag-blue-900` (when the primary hue changes)
- **Rating:** `--ag-rating-filled-primary`

Things you usually leave alone: spacing, font sizes, line heights, motion, z-index.

# Theming

<AlphaWarning />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
</script>

AgnosticUI uses a `data-theme` attribute on the `<html>` element to control light/dark theming.

## Quick Setup

### 1. Set Up Your Base Styles

Configure your application to use AgnosticUI's CSS custom properties for theming. This ensures proper light and dark mode support.

**In your main CSS file (e.g., `src/index.css`, `src/style.css`, or `styles/globals.css`):**

```css
/* Use AgnosticUI's theme tokens for background and text colors */
body {
  background: var(--ag-background-primary);
  color: var(--ag-text-primary);
  transition: background 0.2s ease, color 0.2s ease;
  margin: 0;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
}
```

::: tip Framework-Specific Notes
**Vite Projects:** If using Vite's default template, you may need to remove or override the default `:root` styles that set `background-color: #242424` and `color-scheme: light dark`.

**Next.js:** Add these styles to your `app/globals.css` or `styles/globals.css` file.

**Other Build Tools:** Apply these styles in your main CSS entry point or global stylesheet.
:::

### 2. Enable Dark Mode

Add the `data-theme="dark"` attribute to your `<html>` element in `index.html`:

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

### 3. Add a Theme Toggle (Optional)

Add this to your `index.html` before the closing `</body>` tag:

```html
<button
  id="theme-toggle"
  style="position: fixed; top: 20px; right: 20px; padding: 8px 16px; cursor: pointer;"
>
  Toggle Theme
</button>

<script>
  (function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const html = document.documentElement;

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isDark = html.getAttribute("data-theme") === "dark";
        if (isDark) {
          html.removeAttribute("data-theme");
        } else {
          html.setAttribute("data-theme", "dark");
        }
      });
    }
  })();
</script>
```

## How It Works

- **Light Mode (default)**: No `data-theme` attribute on `<html>`
- **Dark Mode**: `<html data-theme="dark">`

The `ag-tokens-dark.css` file uses the `[data-theme="dark"]` selector to apply dark mode color values to CSS custom properties.

## Available Theme Tokens

AgnosticUI provides semantic color tokens that automatically adapt to the theme:

- `--ag-background-primary` - Main background color
- `--ag-background-secondary` - Secondary background (cards, panels)
- `--ag-text-primary` - Primary text color
- `--ag-text-secondary` - Secondary text color
- `--ag-border` - Border color
- And many more...

See the full list in `src/components/ag/styles/ag-tokens.css`.

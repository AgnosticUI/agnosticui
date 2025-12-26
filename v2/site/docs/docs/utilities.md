# CSS Utilities

<AlphaWarning />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
</script>

## v2 Does Not Include CSS Utilities

AgnosticUI v1 provided a lightweight set of CSS utility classes for common styling needs. However, **AgnosticUI v2 has intentionally opted to NOT include CSS utilities** to stay focused on UI component primitives and keep the core lightweight.

### Why No Utilities in v2?

**Focus on Core Competency**
- AgnosticUI's strength is accessible, framework-agnostic UI components
- CSS utilities are well-served by existing, mature solutions
- Keeping the core focused reduces maintenance burden and bundle size

**Avoid Reinventing the Wheel**
- Excellent utility-first CSS frameworks already exist
- These frameworks are more comprehensive and better maintained
- No need to duplicate what others do exceptionally well

**Keep the Library Lightweight**
- Components + design tokens are the essential primitives
- Utilities would add significant CSS that many users don't need
- Users can choose their preferred utility approach

## Recommended Alternatives

If you need CSS utilities alongside AgnosticUI, consider these well-established options:

### [Tailwind CSS](https://tailwindcss.com)
The most popular utility-first CSS framework with comprehensive coverage and excellent documentation.

### [UnoCSS](https://unocss.dev)
Extremely fast atomic CSS engine with Tailwind-compatible syntax and zero runtime overhead.

### [Open Props](https://open-props.style)
CSS custom properties (similar to AgnosticUI tokens) that work without a build step.

### [Tachyons](http://tachyons.io)
Lightweight functional CSS framework focused on simplicity (~14KB minified).

## Using Utilities with AgnosticUI

The recommended approach is to use utilities for layout and spacing, while using AgnosticUI components for interactive UI elements:

```vue
<template>
  <!-- Utilities for layout -->
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- AgnosticUI for UI components -->
      <VueCard>
        <VueButton variant="primary">Action</VueButton>
      </VueCard>
    </div>
  </div>
</template>
```

### Referencing AgnosticUI Tokens

You can extend your utility framework to reference AgnosticUI design tokens, ensuring theme changes propagate everywhere:

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'ag-primary': 'var(--ag-primary)',
        'ag-secondary': 'var(--ag-secondary)',
      },
      spacing: {
        'ag-4': 'var(--ag-space-4)',
      },
      borderRadius: {
        'ag-md': 'var(--ag-radius-md)',
      },
    },
  },
}
```

## Best Practices

- **Use utilities for layout** - Grid, flexbox, spacing, positioning
- **Use AgnosticUI for UI** - Buttons, inputs, cards, dialogs
- **Reference AgnosticUI tokens** - Keep tokens as single source of truth
- **Choose one utility solution** - Don't mix multiple frameworks

## Learn More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [UnoCSS Documentation](https://unocss.dev)
- [Open Props Documentation](https://open-props.style)
- [AgnosticUI Theming Guide](/docs/theming)

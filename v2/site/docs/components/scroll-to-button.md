# ScrollToButton

A floating action button that appears when scrolling, allowing users to quickly navigate to different parts of the page. Perfect for long-form content, documentation sites, and single-page applications.

::: tip Interactive Examples
The examples below show multiple scroll buttons to demonstrate different features. In real applications, [use only one scroll button per page](https://www.nngroup.com/articles/back-to-top/) to avoid confusion—multiple buttons can overwhelm users and create unclear navigation patterns.
:::

## Features

<script setup>
import ScrollToButtonExamples from '../examples/ScrollToButtonExamples.vue'
import { Eye, Zap, Palette, Accessibility, MapPin, Wrench, CheckCircle, XCircle } from 'lucide-vue-next'
</script>

<div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 1.5rem 0;">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <Eye :size="20" style="color: #3b82f6; flex-shrink: 0;" />
    <strong>Smart Visibility</strong> - Automatically appears/disappears based on scroll position
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <Zap :size="20" style="color: #eab308; flex-shrink: 0;" />
    <strong>Smooth Scrolling</strong> - Built-in smooth scroll with <code>prefers-reduced-motion</code> support
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <Palette :size="20" style="color: #a855f7; flex-shrink: 0;" />
    <strong>Highly Customizable</strong> - Multiple sizes, shapes, and CSS Shadow Parts for styling
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <Accessibility :size="20" style="color: #10b981; flex-shrink: 0;" />
    <strong>Accessible</strong> - Proper ARIA labels and keyboard navigation
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <MapPin :size="20" style="color: #ef4444; flex-shrink: 0;" />
    <strong>Flexible Targets</strong> - Scroll to top, bottom, or specific page sections
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <Wrench :size="20" style="color: #6b7280; flex-shrink: 0;" />
    <strong>Framework Agnostic</strong> - Works with Vue, React, and vanilla JavaScript
  </div>
</div>

## When to Use

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
  <div>
    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
      <CheckCircle :size="20" style="color: #10b981;" />
      <strong style="color: #10b981;">Good for:</strong>
    </div>
    <ul style="margin-left: 1.75rem;">
      <li>Long articles or documentation pages</li>
      <li>Single-page applications with multiple sections</li>
      <li>Chat interfaces (scroll to latest message)</li>
      <li>Comment sections (jump to end)</li>
      <li>Tables of contents or navigation aids</li>
    </ul>
  </div>

  <div>
    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
      <XCircle :size="20" style="color: #ef4444;" />
      <strong style="color: #ef4444;">Avoid when:</strong>
    </div>
    <ul style="margin-left: 1.75rem;">
      <li>Content is short and fits on one screen</li>
      <li>The page already has persistent navigation</li>
      <li>Users need to focus on sequential reading without jumping</li>
    </ul>
  </div>
</div>

<ScrollToButtonExamples />

## Usage

::: details Vue 3
```vue
<template>
  <VueScrollToButton 
    label="Back to Top"
    :showLabel="true"
    :scrollThreshold="400"
  />
</template>

<script setup lang="ts">
import { VueScrollToButton } from 'agnosticui-core/scroll-to-button/vue';
</script>
```
:::

::: details React
```tsx
import { ReactScrollToButton } from 'agnosticui-core/scroll-to-button/react';

export default function Example() {
  return (
    <ReactScrollToButton 
      label="Back to Top"
      showLabel={true}
      scrollThreshold={400}
    />
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/scroll-to-button';
</script>

<ag-scroll-to-button
  label="Back to Top"
  showLabel
  scrollThreshold="400"
></ag-scroll-to-button>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Back to Top'` | Accessible label for the button (always used for `aria-label`) |
| `showLabel` | `boolean` | `false` | Whether to display the label text alongside the icon |
| `icon` | `boolean` | `true` | Show/hide the default icon. If `false`, label is shown as fallback |
| `scrollThreshold` | `number` | `400` | Scroll position (in pixels) before the button becomes visible |
| `target` | `string` | `'top'` | Scroll target: `'top'`, `'bottom'`, or element ID/selector (e.g., `'section-3'`, `'.my-section'`) |
| `direction` | `'up' \| 'down' \| 'auto'` | `'auto'` | Arrow icon direction. `'auto'` detects based on target |
| `smoothScroll` | `boolean` | `true` | Enable smooth scrolling animation (respects `prefers-reduced-motion`) |
| `size` | `'x-sm' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `shape` | `'capsule' \| 'rounded' \| 'circle' \| 'square' \| 'rounded-square' \| ''` | `''` | Button shape (empty string uses default) |
| `visible` | `boolean` | `false` | Manually control visibility (typically managed internally by scroll position) |

## Slots

| Slot | Description |
|------|-------------|
| `icon` | Custom icon content. Overrides the default arrow icon when provided |

**Vue Example:**
```vue
<VueScrollToButton>
  <template #icon>
    <svg><!-- custom icon --></svg>
  </template>
</VueScrollToButton>
```

**React Example:**
```tsx
<ReactScrollToButton>
  <svg slot="icon">{/* custom icon */}</svg>
</ReactScrollToButton>
```

## CSS Shadow Parts

Style internal elements without breaking encapsulation:

| Part | Description |
|------|-------------|
| `ag-scrollto-button` | The button wrapper element |
| `ag-button` | The inner `ag-button` element (exported from nested component) |
| `ag-button-content` | The flex container holding icon and label |
| `ag-icon-wrapper` | The wrapper around the icon slot |
| `ag-label` | The label text span element |

**Example - Custom Gradient:**
```css
ag-scroll-to-button::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
```

**Example - Icon Positioning:**
```css
/* Icon on the right */
ag-scroll-to-button::part(ag-button-content) {
  flex-direction: row-reverse;
}

/* Icon above label (vertical) */
ag-scroll-to-button::part(ag-button-content) {
  flex-direction: column;
}
```

## Advanced Examples

### Jump to Specific Section

```vue
<VueScrollToButton 
  label="Jump to Comments"
  target="comments-section"
  :scrollThreshold="300"
/>

<!-- Somewhere in your page -->
<section id="comments-section">
  <!-- Comments content -->
</section>
```

### Chat Interface (Scroll to Bottom)

```vue
<VueScrollToButton 
  label="Latest Messages"
  target="bottom"
  direction="down"
  :scrollThreshold="200"
/>
```

### Programmatic Target (Lit/React)

```typescript
// Get reference to the component
const button = document.querySelector('ag-scroll-to-button');
const targetElement = document.querySelector('.my-dynamic-section');

// Set target programmatically
button.setTargetElement(targetElement);
```

## Accessibility

The ScrollToButton component follows accessibility best practices:

- **ARIA Labels**: Always includes `aria-label` with the `label` prop value for screen readers
- **Keyboard Navigation**: Fully keyboard accessible with standard button interactions
- **Focus Management**: Visible focus indicators for keyboard users
- **Motion Sensitivity**: Respects `prefers-reduced-motion` setting - disables smooth scroll when motion is reduced
- **Touch Targets**: Minimum 44×44px touch target size for mobile accessibility
- **Semantic HTML**: Uses proper `role="button"` and button semantics
- **Screen Reader Friendly**: Hidden decorative icons with `aria-hidden="true"`

### Best Practices

1. **Always provide descriptive labels**: Even if not showing the label visually, the `label` prop is used for `aria-label`
   ```vue
   <VueScrollToButton label="Return to page top" />
   ```

2. **Consider showing labels**: For users with cognitive disabilities, visible text labels are clearer than icon-only buttons
   ```vue
   <VueScrollToButton label="Back to Top" :showLabel="true" />
   ```

3. **Don't rely solely on color**: If using custom styling, ensure sufficient contrast
   ```css
   ag-scroll-to-button::part(ag-button) {
     /* Ensure 4.5:1 contrast ratio minimum */
     background: #0066cc;
     color: #ffffff;
   }
   ```

4. **Test with keyboard**: Ensure the button is reachable and activatable with Tab and Enter/Space keys

5. **Position consistently**: Keep the button in the same location across pages to build user familiarity

## Design Tokens

The component uses AgnosticUI design tokens for consistency:

```css
:host {
  /* Spacing */
  --ag-space-8: 2rem;           /* Default position offset */
  --ag-space-2: 0.5rem;         /* Icon/label gap */
  
  /* Motion */
  --ag-motion-slow: 0.4s;       /* Fade in/out duration */
  
  /* Z-index */
  --ag-z-index-sticky: 900;     /* Stacking context */
}
```

Override these in your global CSS or via CSS custom properties:

```css
ag-scroll-to-button {
  --ag-motion-slow: 0.2s;       /* Faster transitions */
}
```


## Troubleshooting

**Button doesn't appear:**
- Check that page content is tall enough to exceed `scrollThreshold`
- Verify the component is not hidden by CSS
- Ensure z-index is high enough (`--ag-z-index-sticky: 900` by default)

**Smooth scroll doesn't work:**
- Check browser support for `scroll-behavior: smooth`
- Verify `smoothScroll` prop is `true`
- Check if user has `prefers-reduced-motion` enabled

**Custom icon not showing:**
- Ensure slot content has the `slot="icon"` attribute (Lit/React) or uses `<template #icon>` (Vue)
- Verify the icon has appropriate size styling

**Button appears too early/late:**
- Adjust the `scrollThreshold` prop (in pixels)
- Default is `400`, try `200` for earlier or `600` for later

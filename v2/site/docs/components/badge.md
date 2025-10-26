# Badge

The Badge component provides a versatile way to display counts, status indicators, and labels with multiple variants and sizes.

## Examples

<BadgeExamples />

<script setup>
import BadgeExamples from '../examples/BadgeExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic badge -->
    <VueBadge>New</VueBadge>

    <!-- Variants -->
    <VueBadge variant="default">Default</VueBadge>
    <VueBadge variant="success">Success</VueBadge>
    <VueBadge variant="info">Info</VueBadge>
    <VueBadge variant="warning">Warning</VueBadge>
    <VueBadge variant="danger">Danger</VueBadge>
    <VueBadge variant="neutral">Neutral</VueBadge>

    <!-- Sizes -->
    <VueBadge size="xs">XS</VueBadge>
    <VueBadge size="sm">Small</VueBadge>
    <VueBadge size="md">Medium</VueBadge>

    <!-- Count badges -->
    <VueBadge variant="danger">99+</VueBadge>
    <VueBadge variant="success">5</VueBadge>

    <!-- Dot badges -->
    <VueBadge dot variant="success" />
    <VueBadge dot variant="warning" />
    <VueBadge dot variant="danger" />

    <!-- Status indicators -->
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <VueBadge dot variant="success" />
      Online
    </div>

    <!-- Badge on button -->
    <VueButton variant="primary">
      Notifications
      <VueBadge variant="danger" size="sm">99+</VueBadge>
    </VueButton>

    <!-- Badge on icon -->
    <div style="position: relative; display: inline-block;">
      <VueIcon size="24">
        <!-- icon content -->
      </VueIcon>
      <VueBadge
        variant="danger"
        size="xs"
        style="position: absolute; top: -6px; right: -7px;"
      >
        3
      </VueBadge>
    </div>
  </section>
</template>

<script>
import { VueBadge } from "agnosticui-core/badge/vue";
import VueButton from "agnosticui-core/button/vue";
import { VueIcon } from "agnosticui-core/icon/vue";

export default {
  name: "BadgeExample",
  components: { VueBadge, VueButton, VueIcon },
};
</script>
```
:::

::: details React
```tsx
import { ReactBadge } from 'agnosticui-core/badge/react';
import { ReactButton } from 'agnosticui-core/button/react';
import { ReactIcon } from 'agnosticui-core/icon/react';

export default function BadgeExample() {
  return (
    <section>
      {/* Basic badge */}
      <ReactBadge>New</ReactBadge>

      {/* Variants */}
      <ReactBadge variant="default">Default</ReactBadge>
      <ReactBadge variant="success">Success</ReactBadge>
      <ReactBadge variant="info">Info</ReactBadge>
      <ReactBadge variant="warning">Warning</ReactBadge>
      <ReactBadge variant="danger">Danger</ReactBadge>
      <ReactBadge variant="neutral">Neutral</ReactBadge>

      {/* Sizes */}
      <ReactBadge size="xs">XS</ReactBadge>
      <ReactBadge size="sm">Small</ReactBadge>
      <ReactBadge size="md">Medium</ReactBadge>

      {/* Count badges */}
      <ReactBadge variant="danger">99+</ReactBadge>
      <ReactBadge variant="success">5</ReactBadge>

      {/* Dot badges */}
      <ReactBadge dot variant="success" />
      <ReactBadge dot variant="warning" />
      <ReactBadge dot variant="danger" />

      {/* Status indicators */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ReactBadge dot variant="success" />
        Online
      </div>

      {/* Badge on button */}
      <ReactButton variant="primary">
        Notifications
        <ReactBadge variant="danger" size="sm">99+</ReactBadge>
      </ReactButton>

      {/* Badge on icon */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <ReactIcon size="24">
          {/* icon content */}
        </ReactIcon>
        <ReactBadge
          variant="danger"
          size="xs"
          style={{ position: 'absolute', top: '-6px', right: '-7px' }}
        >
          3
        </ReactBadge>
      </div>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/badge';
  import 'agnosticui-core/button';
  import 'agnosticui-core/icon';
</script>

<section>
  <!-- Basic badge -->
  <ag-badge>New</ag-badge>

  <!-- Variants -->
  <ag-badge variant="default">Default</ag-badge>
  <ag-badge variant="success">Success</ag-badge>
  <ag-badge variant="info">Info</ag-badge>
  <ag-badge variant="warning">Warning</ag-badge>
  <ag-badge variant="danger">Danger</ag-badge>
  <ag-badge variant="neutral">Neutral</ag-badge>

  <!-- Sizes -->
  <ag-badge size="xs">XS</ag-badge>
  <ag-badge size="sm">Small</ag-badge>
  <ag-badge size="md">Medium</ag-badge>

  <!-- Count badges -->
  <ag-badge variant="danger">99+</ag-badge>
  <ag-badge variant="success">5</ag-badge>

  <!-- Dot badges -->
  <ag-badge dot variant="success"></ag-badge>
  <ag-badge dot variant="warning"></ag-badge>
  <ag-badge dot variant="danger"></ag-badge>

  <!-- Status indicators -->
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <ag-badge dot variant="success"></ag-badge>
    Online
  </div>

  <!-- Badge on button -->
  <ag-button variant="primary">
    Notifications
    <ag-badge variant="danger" size="sm">99+</ag-badge>
  </ag-button>

  <!-- Badge on icon -->
  <div style="position: relative; display: inline-block;">
    <ag-icon size="24">
      <!-- icon content -->
    </ag-icon>
    <ag-badge
      variant="danger"
      size="xs"
      style="position: absolute; top: -6px; right: -7px;"
    >
      3
    </ag-badge>
  </div>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'info' \| 'warning' \| 'danger' \| 'neutral'` | `'default'` | Visual color variant |
| `size` | `'xs' \| 'sm' \| 'md'` | `'md'` | Size of the badge |
| `dot` | `boolean` | `false` | Render as a small circular dot (for status indicators) |
| `value` | `number \| null` | `null` | Numeric value to display |
| `max` | `number` | `99` | Maximum value before showing "+" suffix (e.g., "99+") |
| `interactive` | `boolean` | `false` | Make badge clickable/interactive |
| `statusLabel` | `string \| null` | `null` | ARIA label for status badges (especially important for dot badges) |
| `live` | `'off' \| 'polite' \| 'assertive'` | `'off'` | ARIA live region politeness setting for dynamic count updates |
| `hiddenFromAT` | `boolean` | `false` | Hide from assistive technologies |

## Events

| Event | Detail | Description |
|-------|---------|-------------|
| `badge:click` (Vue: `@badge:click`, React: `onBadgeClick`) | `CustomEvent` | Emitted when an interactive badge is clicked |

**Note:** The click event is only emitted when `interactive` prop is `true`.

## Accessibility

The Badge component follows accessibility best practices:

- Automatic `aria-hidden="true"` for decorative dot badges without status labels
- `aria-label` support via `statusLabel` prop for meaningful descriptions
- `aria-live` regions for dynamic count updates (configure with `live` prop)
- Role `button` for interactive badges with proper keyboard support
- Single-character badges automatically get circular shape for better visual balance

### Status Badges

For status indicator badges (dots), always provide a `statusLabel`:

::: details Vue
```vue
<div style="display: flex; align-items: center; gap: 0.5rem;">
  <VueBadge dot variant="success" statusLabel="User is online" />
  Online
</div>
```
:::

### Count Badges

For live-updating counts (like notifications), use the `live` prop:

::: details Vue
```vue
<VueBadge
  :value="notificationCount"
  :max="99"
  variant="danger"
  live="polite"
  statusLabel="unread notifications"
/>
```
:::

## Variant Guide

### Color Variants
- **default** - Neutral dark background (default)
- **success** - Green for positive status
- **info** - Blue for informational status
- **warning** - Yellow for warning status
- **danger** - Red for error/alert status
- **neutral** - Light gray for subtle badges

### Size Variants
- **xs** - Extra small (ideal for icon overlays)
- **sm** - Small (good for inline text)
- **md** - Medium (default size)

### Dot Badges

Dot badges are small circular indicators perfect for status:

::: details Vue
```vue
<VueBadge dot variant="success" statusLabel="Available" />
<VueBadge dot variant="warning" statusLabel="Away" />
<VueBadge dot variant="danger" statusLabel="Busy" />
<VueBadge dot variant="info" statusLabel="In a meeting" />
```
:::

## Common Patterns

### Notification Badge on Button

::: details Vue
```vue
<VueButton bordered variant="primary" shape="capsule">
  Notifications
  <VueBadge variant="danger" size="sm" style="margin-left: var(--ag-space-1);">
    99+
  </VueBadge>
</VueButton>
```
:::

### Badge on Icon

::: details Vue
```vue
<div style="position: relative; display: inline-block;">
  <VueIcon size="24">
    <!-- Bell icon SVG -->
  </VueIcon>
  <VueBadge
    variant="danger"
    size="xs"
    style="position: absolute; top: -6px; right: -7px;"
  >
    3
  </VueBadge>
</div>
```
:::

### Status Indicators

::: details Vue
```vue
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <VueBadge dot variant="success" statusLabel="User is online" />
    Online
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <VueBadge dot variant="warning" statusLabel="User is away" />
    Away
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <VueBadge dot variant="danger" statusLabel="User is busy" />
    Busy
  </div>
</div>
```
:::

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the badge from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-badge` | The internal `<span>` element |

### Customization Example

```css
/* Customize the badge element */
.custom-gradient-badge::part(ag-badge) {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
}

.custom-outline-badge::part(ag-badge) {
  background: transparent;
  color: #764ba2;
  border: 2px solid #764ba2;
}

.custom-minimal-badge::part(ag-badge) {
  background: var(--ag-background-subtle);
  color: var(--ag-text-secondary);
  border-radius: 6px;
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
}
```

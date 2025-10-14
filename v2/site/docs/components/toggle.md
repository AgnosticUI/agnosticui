# Toggle

The Toggle component provides an accessible binary switch for on/off states, implementing the WAI-ARIA Switch pattern.

## Examples

<ToggleExamples />

<script setup>
import ToggleExamples from '../examples/ToggleExamples.vue'
</script>

## Usage

```vue
<template>
  <section>
    <!-- Basic toggle -->
    <VueToggle label="Enable notifications" />

    <!-- Controlled toggle -->
    <VueToggle
      label="Dark mode"
      :checked="isDarkMode"
      @toggle-change="handleToggle"
    />

    <!-- Different sizes -->
    <VueToggle
      label="Small toggle"
      size="sm"
    />
    <VueToggle
      label="Large toggle"
      size="lg"
    />

    <!-- Variants -->
    <VueToggle
      label="Success variant"
      variant="success"
      :checked="true"
    />
    <VueToggle
      label="Danger variant"
      variant="danger"
      :checked="true"
    />

    <!-- Disabled state -->
    <VueToggle
      label="Disabled toggle"
      disabled
    />
  </section>
</template>

<script>
import VueToggle from "agnosticui-core/toggle/vue";

export default {
  name: "ToggleExample",
  components: { VueToggle },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    handleToggle(event) {
      this.isDarkMode = event.checked;
      console.log("Checked:", event.checked);
      console.log("Name:", event.name);
      console.log("Value:", event.value);
    },
  },
};
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | **Required** - Accessible label for the toggle (important for screen readers) |
| `checked` | `boolean` | `false` | Whether the toggle is checked/on |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the toggle switch |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color variant when checked |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |
| `readonly` | `boolean` | `false` | Toggle appears interactive but cannot be changed |
| `labelledBy` | `string` | `''` | ID of external element that labels the toggle |
| `describedBy` | `string` | `''` | ID of external element that describes the toggle |
| `name` | `string` | `''` | Name for form integration |
| `value` | `string` | `''` | Value when toggle is checked (for forms) |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@toggle-change` | `{ checked: boolean, name: string, value: string }` | Emitted when the toggle state changes |

## Accessibility

The Toggle component implements the [WAI-ARIA Switch pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/):

- Uses semantic `<button>` element with `role="switch"`
- Communicates state via `aria-checked`
- Requires accessible name via `label` or `labelledBy` prop
- Keyboard accessible (Space/Enter to toggle)
- Screen reader announces "On"/"Off" state
- Minimum 44px touch target for mobile accessibility
- Clear focus indicators for keyboard navigation

## Form Integration

Use the `name` and `value` props to integrate with forms:

```vue
<VueToggle
  label="Subscribe to newsletter"
  name="newsletter"
  value="yes"
  :checked="form.newsletter"
  @toggle-change="handleFormChange"
/>
```

The `@toggle-change` event provides all the data needed for form handling.

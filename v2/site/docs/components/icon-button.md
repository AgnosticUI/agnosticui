# Icon Button

An accessible icon-only button component that displays a single icon with proper accessibility labeling. Icon buttons are ideal for toolbars, navigation, and actions where space is limited or the icon alone clearly conveys the action.

## Examples

<IconButtonExamples />

<script setup>
import IconButtonExamples from '../examples/IconButtonExamples.vue'
</script>

## Usage

```vue
<template>
  <section>
    <!-- Basic icon button with custom icon -->
    <VueIconButton label="Settings">
      <Settings :size="18" />
    </VueIconButton>

    <!-- Icon button with variant -->
    <VueIconButton
      label="Delete"
      variant="danger"
    >
      <Trash :size="18" />
    </VueIconButton>

    <!-- Icon button with size -->
    <VueIconButton
      label="Save"
      variant="primary"
      size="lg"
    >
      <Save :size="20" />
    </VueIconButton>

    <!-- Toggle button with pressed state -->
    <VueIconButton
      label="Toggle favorite"
      :pressed="isFavorite"
      @click="toggleFavorite"
    >
      <Heart
        :size="18"
        :fill="isFavorite ? 'currentColor' : 'none'"
      />
    </VueIconButton>

    <!-- Icon button with Unicode -->
    <VueIconButton
      label="Close"
      unicode="×"
    />

    <!-- Disabled state -->
    <VueIconButton
      label="Save"
      disabled
    >
      <Save :size="18" />
    </VueIconButton>

    <!-- Loading state -->
    <VueIconButton
      label="Processing"
      loading
    >
      <Loader :size="18" />
    </VueIconButton>
  </section>
</template>

<script>
import VueIconButton from "agnosticui-core/icon-button/vue";
import { Settings, Trash, Save, Heart, Loader } from "lucide-vue-next";

export default {
  name: "IconButtonExample",
  components: {
    VueIconButton,
    Settings,
    Trash,
    Save,
    Heart,
    Loader,
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | **Required**. Accessible name for the button. Used for aria-label to ensure screen readers can announce the button's purpose. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the button. Controls both button dimensions and icon sizing. |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'ghost'` | `'ghost'` | Visual style variant. Ghost is transparent by default. Primary, success, warning, and danger have filled backgrounds with white icons and get darker on hover. Secondary uses a neutral gray background. |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute. Use `'submit'` for form submissions or `'reset'` for form resets. |
| `icon` | `string` | `''` | Icon identifier for icon systems. Can be used with icon libraries that support string identifiers. |
| `unicode` | `string` | `''` | Unicode character for simple icons (e.g., `'×'`, `'☰'`, `'+'`). Alternative to using custom icons via slots. |
| `disabled` | `boolean` | `false` | Disables the button, preventing interaction and applying reduced opacity. |
| `pressed` | `boolean` | `false` | Indicates pressed state for toggle buttons. Sets `aria-pressed` and applies visual pressed styling. |
| `loading` | `boolean` | `false` | Shows loading indicator and prevents interaction. Useful for async operations. |
| `ariaLabel` | `string` | — | Additional ARIA label that overrides the `label` prop if provided. |
| `ariaDescribedby` | `string` | `''` | ID reference for additional descriptive text. Points to an element that provides extended description. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@click` | `Event` | Emitted when the button is clicked. The original event object is passed. |
| `@activate` | `{ label: string, pressed: boolean, originalEvent: KeyboardEvent }` | Emitted when the button is activated via keyboard (Space or Enter keys). Provides context about the button state. |

## Accessibility

The IconButton implements the [WAI-ARIA Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/):

- Uses semantic `<button>` element for proper keyboard and screen reader support
- **Requires accessible name** via the `label` prop (maps to `aria-label`)
- Communicates toggle state via `aria-pressed` when `pressed` prop is used
- Minimum 44px touch target for mobile accessibility (WCAG 2.1 Level AAA)
- Keyboard accessible with Space and Enter key activation
- Screen readers announce the button's label and state
- Clear focus indicators for keyboard navigation
- Disabled state communicated to assistive technologies

### Accessible Label Requirement

The `label` prop is **required** for accessibility. Icon-only buttons need an accessible name so screen reader users can understand the button's purpose. While the label is not visually displayed, it's announced to screen readers via `aria-label`.

**Good examples:**
```vue
<VueIconButton label="Save document">
  <Save :size="18" />
</VueIconButton>

<VueIconButton label="Delete item">
  <Trash :size="18" />
</VueIconButton>
```

**Bad example:**
```vue
<!-- Missing label - screen readers can't announce the purpose -->
<VueIconButton>
  <Save :size="18" />
</VueIconButton>
```

## Using Icons

### With Lucide Icons (Recommended)

The examples use [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next) icons. Install the package:

```bash
npm install lucide-vue-next
```

Then import and use icons via the default slot:

```vue
<script>
import VueIconButton from "agnosticui-core/icon-button/vue";
import { Star, Heart, Settings } from "lucide-vue-next";

export default {
  components: {
    VueIconButton,
    Star,
    Heart,
    Settings,
  },
};
</script>

<template>
  <VueIconButton label="Favorite">
    <Star :size="18" />
  </VueIconButton>
</template>
```

### With Unicode Characters

For simple icons, use the `unicode` prop:

```vue
<VueIconButton label="Close" unicode="×" />
<VueIconButton label="Menu" unicode="☰" />
<VueIconButton label="Add" unicode="+" />
```

### With Custom SVG Icons

You can pass any custom SVG or icon component via the default slot:

```vue
<VueIconButton label="Custom action">
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="..." fill="currentColor" />
  </svg>
</VueIconButton>
```

## Toggle Buttons

Use the `pressed` prop to create toggle buttons with accessible state management:

```vue
<template>
  <VueIconButton
    label="Toggle favorite"
    :pressed="isFavorite"
    @click="toggleFavorite"
  >
    <Heart
      :size="18"
      :fill="isFavorite ? 'currentColor' : 'none'"
    />
  </VueIconButton>
</template>

<script>
export default {
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>
```

The `pressed` state:
- Sets `aria-pressed="true"` for screen readers
- Applies visual pressed styling
- Should be toggled in your click handler

## Icon Button Groups

Create toolbars and button groups by placing multiple icon buttons together:

```vue
<div class="icon-button-group">
  <VueIconButton label="Bold" :pressed="bold" @click="toggleBold">
    <Bold :size="18" />
  </VueIconButton>
  <VueIconButton label="Italic" :pressed="italic" @click="toggleItalic">
    <Italic :size="18" />
  </VueIconButton>
  <VueIconButton label="Underline" :pressed="underline" @click="toggleUnderline">
    <Underline :size="18" />
  </VueIconButton>
</div>
```

## Loading State

Show async operations with the `loading` prop:

```vue
<template>
  <VueIconButton
    label="Save changes"
    :loading="isSaving"
    @click="saveData"
  >
    <Save :size="18" />
  </VueIconButton>
</template>

<script>
export default {
  data() {
    return {
      isSaving: false,
    };
  },
  methods: {
    async saveData() {
      this.isSaving = true;
      try {
        await this.apiCall();
      } finally {
        this.isSaving = false;
      }
    },
  },
};
</script>
```

## Best Practices

1. **Always provide a label** - The `label` prop is required for accessibility
2. **Use appropriate variants** - `danger` for destructive actions, `primary` for primary actions
3. **Size icons appropriately** - Match icon size to button size for visual harmony
4. **Provide visual feedback** - Use `pressed` state for toggle buttons
5. **Group related actions** - Place related icon buttons together in toolbars
6. **Consider mobile** - The 44px minimum touch target ensures mobile usability
7. **Use semantic button types** - Set `type="submit"` for form submissions

## When to Use

**Use icon buttons when:**
- Space is limited (toolbars, mobile interfaces)
- The icon clearly represents the action
- The action is common and well-understood
- You have many similar actions in close proximity

**Consider regular buttons when:**
- The action is complex or uncommon
- Text would make the action clearer
- You have space available
- Your audience may not understand the icon

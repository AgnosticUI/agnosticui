# Icon Button

An accessible icon-only button component that displays a single icon with proper accessibility labeling. Icon buttons are ideal for toolbars, navigation, and actions where space is limited or the icon alone clearly conveys the action.

## Examples

<IconButtonExamples />

<script setup>
import IconButtonExamples from '../examples/IconButtonExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic icon button with custom icon -->
    <VueIconButton label="Settings">
      <Settings :size="18" />
    </VueIconButton>

    <!-- Variants -->
    <VueIconButton
      label="Delete"
      variant="danger"
    >
      <Trash :size="18" />
    </VueIconButton>
    <VueIconButton
      label="Save"
      variant="primary"
    >
      <Save :size="18" />
    </VueIconButton>

    <!-- Sizes -->
    <VueIconButton
      label="Small"
      size="sm"
    >
      <Heart :size="16" />
    </VueIconButton>
    <VueIconButton
      label="Large"
      size="lg"
    >
      <Heart :size="20" />
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

    <!-- Unicode icon -->
    <VueIconButton
      label="Close"
      unicode="×"
    />

    <!-- States -->
    <VueIconButton
      label="Disabled"
      disabled
    >
      <Save :size="18" />
    </VueIconButton>
    <VueIconButton
      label="Loading"
      loading
    >
      <Loader :size="18" />
    </VueIconButton>

    <!-- With event handlers -->
    <VueIconButton
      label="Action button"
      @icon-button-click="handleClick"
      @icon-button-activate="handleActivate"
    >
      <Zap :size="18" />
    </VueIconButton>
  </section>
</template>

<script>
import VueIconButton from "agnosticui-core/icon-button/vue";
import { Settings, Trash, Save, Heart, Loader, Zap } from "lucide-vue-next";

export default {
  components: {
    VueIconButton,
    Settings,
    Trash,
    Save,
    Heart,
    Loader,
    Zap,
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
    handleClick(event) {
      console.log('Button clicked:', event.detail.label, event.detail.pressed);
    },
    handleActivate(event) {
      console.log('Button activated via keyboard:', event.detail.label);
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactIconButton } from 'agnosticui-core/icon-button/react';
import { Settings, Trash, Save, Heart, Loader, Zap } from 'lucide-react';

export default function IconButtonExample() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClick = (event) => {
    console.log('Button clicked:', event.detail.label, event.detail.pressed);
  };

  const handleActivate = (event) => {
    console.log('Button activated via keyboard:', event.detail.label);
  };

  return (
    <section>
      {/* Basic icon button with custom icon */}
      <ReactIconButton label="Settings">
        <Settings size={18} />
      </ReactIconButton>

      {/* Variants */}
      <ReactIconButton label="Delete" variant="danger">
        <Trash size={18} />
      </ReactIconButton>
      <ReactIconButton label="Save" variant="primary">
        <Save size={18} />
      </ReactIconButton>

      {/* Sizes */}
      <ReactIconButton label="Small" size="sm">
        <Heart size={16} />
      </ReactIconButton>
      <ReactIconButton label="Large" size="lg">
        <Heart size={20} />
      </ReactIconButton>

      {/* Toggle button with pressed state */}
      <ReactIconButton
        label="Toggle favorite"
        pressed={isFavorite}
        onClick={toggleFavorite}
      >
        <Heart
          size={18}
          fill={isFavorite ? 'currentColor' : 'none'}
        />
      </ReactIconButton>

      {/* Unicode icon */}
      <ReactIconButton label="Close" unicode="×" />

      {/* States */}
      <ReactIconButton label="Disabled" disabled>
        <Save size={18} />
      </ReactIconButton>
      <ReactIconButton label="Loading" loading>
        <Loader size={18} />
      </ReactIconButton>

      {/* With event handlers */}
      <ReactIconButton
        label="Action button"
        onIconButtonClick={handleClick}
        onIconButtonActivate={handleActivate}
      >
        <Zap size={18} />
      </ReactIconButton>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/icon-button';

  document.addEventListener('DOMContentLoaded', () => {
    const favoriteBtn = document.querySelector('#favorite-toggle');
    let isFavorite = false;

    favoriteBtn?.addEventListener('click', () => {
      isFavorite = !isFavorite;
      favoriteBtn.pressed = isFavorite;

      const heartIcon = favoriteBtn.querySelector('svg');
      if (heartIcon) {
        heartIcon.setAttribute('fill', isFavorite ? 'currentColor' : 'none');
      }
    });

    // Event handling with addEventListener
    const actionBtn = document.querySelector('#action-btn');
    actionBtn?.addEventListener('icon-button-click', (e) => {
      console.log('Button clicked:', e.detail.label, e.detail.pressed);
    });
    actionBtn?.addEventListener('icon-button-activate', (e) => {
      console.log('Button activated via keyboard:', e.detail.label);
    });

    // Event handling with callback props
    const callbackBtn = document.querySelector('#callback-btn');
    if (callbackBtn) {
      callbackBtn.onIconButtonClick = (e) => {
        console.log('Callback click:', e.detail.label);
      };
    }
  });
</script>

<section>
  <!-- Basic icon button with custom icon -->
  <ag-icon-button label="Settings">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
    </svg>
  </ag-icon-button>

  <!-- Variants -->
  <ag-icon-button label="Delete" variant="danger">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    </svg>
  </ag-icon-button>
  <ag-icon-button label="Save" variant="primary">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path>
    </svg>
  </ag-icon-button>

  <!-- Sizes -->
  <ag-icon-button label="Small" size="sm">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
    </svg>
  </ag-icon-button>
  <ag-icon-button label="Large" size="lg">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
    </svg>
  </ag-icon-button>

  <!-- Toggle button with pressed state -->
  <ag-icon-button id="favorite-toggle" label="Toggle favorite">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
    </svg>
  </ag-icon-button>

  <!-- Unicode icon -->
  <ag-icon-button label="Close" unicode="×"></ag-icon-button>

  <!-- States -->
  <ag-icon-button label="Disabled" disabled>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path>
    </svg>
  </ag-icon-button>
  <ag-icon-button label="Loading" loading>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
    </svg>
  </ag-icon-button>

  <!-- With addEventListener -->
  <ag-icon-button id="action-btn" label="Action button">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
  </ag-icon-button>

  <!-- With callback props -->
  <ag-icon-button id="callback-btn" label="Callback button">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8v8m-4-4h8"></path>
    </svg>
  </ag-icon-button>
</section>
```
:::

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

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `icon-button-click` | Vue: `@icon-button-click`<br>React: `onIconButtonClick`<br>Lit: `@icon-button-click` or `.onIconButtonClick` | `{ originalEvent: MouseEvent, label: string, pressed: boolean }` | Fired when the icon button is clicked. Provides the original mouse event and button state. |
| `icon-button-activate` | Vue: `@icon-button-activate`<br>React: `onIconButtonActivate`<br>Lit: `@icon-button-activate` or `.onIconButtonActivate` | `{ originalEvent: KeyboardEvent, label: string, pressed: boolean }` | Fired when the button is activated via keyboard (Space or Enter keys). Provides the original keyboard event and button state. |

### Event Patterns

AgnosticUI IconButton supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const iconButton = document.querySelector('ag-icon-button');
iconButton.addEventListener('icon-button-click', (e) => {
  console.log('Button clicked:', e.detail.label, 'Pressed:', e.detail.pressed);
});
```

2. **Callback props** (Lit/Vanilla JS):
```javascript
const iconButton = document.querySelector('ag-icon-button');
iconButton.onIconButtonClick = (e) => {
  console.log('Button clicked:', e.detail.label);
};
```

3. **Framework event handlers** (Vue/React):
```vue
<!-- Vue -->
<VueIconButton
  @icon-button-click="handleClick"
  @icon-button-activate="handleActivate"
/>
```
```tsx
// React
<ReactIconButton
  onIconButtonClick={handleClick}
  onIconButtonActivate={handleActivate}
/>
```

All three patterns work identically thanks to the **dual-dispatch** system.

## CSS Shadow Parts

The IconButton exposes CSS Shadow Parts that allow you to customize internal elements without breaking encapsulation:

| Part | Description | Element |
|------|-------------|---------|
| `ag-icon-has-slotted` | Icon wrapper when using slotted content | `<span>` |
| `ag-icon-unicode` | Icon wrapper for unicode characters | `<span>` |
| `ag-icon` | Icon wrapper for icon identifier | `<span>` |
| `ag-icon-empty-slot` | Empty icon slot placeholder | `<span>` |

### Example Usage

```css
/* Customize the icon color with gradient */
ag-icon-button::part(ag-icon-unicode) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Style the button container */
ag-icon-button button {
  border: 2px solid var(--ag-primary);
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Hover effect on the icon */
ag-icon-button::part(ag-icon):hover {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
```

See the [Storybook CSS Parts Customization story](https://github.com/AgnosticUI/agnosticui) for more examples.

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

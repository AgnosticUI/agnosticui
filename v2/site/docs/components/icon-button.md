# Icon Button

<AlphaWarning />

An accessible icon-only button component that displays a single icon with proper accessibility labeling. Icon buttons are ideal for toolbars, navigation, and actions where space is limited or the icon alone clearly conveys the action.

::: tip
If you don't want SVG scaling, consider placing SVG directly in an <code>ag-button</code> or other solution.
:::

## Examples

<FrameworkExample component="icon-button" :vue-code="vueCode" :lit-code="litCode" :react-code="reactCode"><template #vue><IconButtonExamples /></template><template #lit><icon-button-lit-examples></icon-button-lit-examples></template></FrameworkExample>

## Server-Side Rendering (SSR) Fallback Layouts

AgnosticUI utilizes a dual-layer Isomorphic Architecture to support server-first workflows across all major modern meta-frameworks (e.g., Astro, Next.js, Nuxt, Remix, SvelteKit, TanStack Start). Below are zero-drift visual previews generated directly from our isolated server layout string engines before client-side hydration completes.

To support different performance and design goals, the server fallback engine provides **two visual lifecycle strategies**:

1. **Option 2 (Default Placeholder Ring):** Renders a highly muted, dashed wireframe ring inside the frame. This clearly signals that an icon asset is loading without making assumptions about its visual identity.
2. **Option 1 (Empty Frame Mode):** Toggled by passing `useEmptyIcon: true`. This leaves the inside of the layout frame completely empty until client hydration runs. This completely avoids any visual popping or flash when the real icon is loaded.

<IconButtonFallbackPreview />

### Handling Dual-Class Token Lifecycle During Hydration

By setting static unhashed namespaced identifiers (`ag-icon-button-*`) side-by-side with runtime framework token mappings (`styles.*`), our fallback engines protect web applications from unexpected element shifting during network transmission intervals.

Before hydration runs on the client, root compiled stylesheets target the namespaced classes to instantly paint layout parameters and secure Cumulative Layout Shift (CLS) stability. When client bundles finish loading, DOM engines seamlessly inherit the running nodes with zero-drift visual recalculations.

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import IconButtonExamples from '../examples/IconButtonExamples.vue'
import IconButtonFallbackPreview from '../examples/IconButtonFallbackPreview.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/IconButtonLitExamples.js'
import vueCode from '../examples/IconButtonExamples.vue?raw'
import litCode from '../examples/IconButtonLitExamples.js?raw'
import reactCode from '../examples/IconButtonReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:

```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add IconButton
```

The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <section>
    <VueIconButton label="Settings">
      <Settings :size="18" />
    </VueIconButton>

    <VueIconButton label="Delete" variant="danger">
      <Trash :size="18" />
    </VueIconButton>
    <VueIconButton label="Save" variant="primary">
      <Save :size="18" />
    </VueIconButton>

    <VueIconButton label="Small" size="sm">
      <Heart :size="16" />
    </VueIconButton>
    <VueIconButton label="Large" size="lg">
      <Heart :size="20" />
    </VueIconButton>

    <VueIconButton
      label="Toggle favorite"
      :pressed="isFavorite"
      @click="toggleFavorite"
    >
      <Heart :size="18" :fill="isFavorite ? 'currentColor' : 'none'" />
    </VueIconButton>

    <VueIconButton label="Close" unicode="×" />

    <VueIconButton label="Disabled" disabled>
      <Save :size="18" />
    </VueIconButton>
    <VueIconButton label="Loading" loading>
      <Loader :size="18" />
    </VueIconButton>

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
import { VueIconButton } from "agnosticui-core/icon-button/vue";
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
      console.log("Button clicked:", event.detail.label, event.detail.pressed);
    },
    handleActivate(event) {
      console.log("Button activated via keyboard:", event.detail.label);
    },
  },
};
</script>
```

:::

::: details React

```tsx
import { useState } from "react";
import { ReactIconButton } from "agnosticui-core/icon-button/react";
import { Settings, Trash, Save, Heart, Loader, Zap } from "lucide-react";

export default function IconButtonExample() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClick = (event) => {
    console.log("Button clicked:", event.detail.label, event.detail.pressed);
  };

  const handleActivate = (event) => {
    console.log("Button activated via keyboard:", event.detail.label);
  };

  return (
    <section>
      <ReactIconButton label="Settings">
        <Settings size={18} />
      </ReactIconButton>

      <ReactIconButton label="Delete" variant="danger">
        <Trash size={18} />
      </ReactIconButton>
      <ReactIconButton label="Save" variant="primary">
        <Save size={18} />
      </ReactIconButton>

      <ReactIconButton label="Small" size={16} />
      <ReactIconButton label="Large" size={20} />

      <ReactIconButton
        label="Toggle favorite"
        pressed={isFavorite}
        onClick={toggleFavorite}
      >
        <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
      </ReactIconButton>

      <ReactIconButton label="Close" unicode="×" />

      <ReactIconButton label="Disabled" disabled>
        <Save size={18} />
      </ReactIconButton>
      <ReactIconButton label="Loading" loading>
        <Loader size={18} />
      </ReactIconButton>

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

```typescript
import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "agnosticui-core/icon-button";

@customElement("icon-button-example")
export class IconButtonExample extends LitElement {
  @state() private isFavorite = false;

  static styles = css`
    :host {
      display: block;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  `;

  firstUpdated() {
    const favoriteBtn = this.shadowRoot?.querySelector(
      "#favorite-toggle",
    ) as any;

    favoriteBtn?.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favoriteBtn.pressed = this.isFavorite;

      const heartIcon = favoriteBtn.querySelector("svg");
      if (heartIcon) {
        heartIcon.setAttribute(
          "fill",
          this.isFavorite ? "currentColor" : "none",
        );
      }
    });

    const actionBtn = this.shadowRoot?.querySelector("#action-btn");
    actionBtn?.addEventListener("icon-button-click", (e: Event) => {
      const customEvent = e as CustomEvent;
      console.log(
        "Button clicked:",
        customEvent.detail.label,
        customEvent.detail.pressed,
      );
    });
    actionBtn?.addEventListener("icon-button-activate", (e: Event) => {
      const customEvent = e as CustomEvent;
      console.log("Button activated via keyboard:", customEvent.detail.label);
    });

    const callbackBtn = this.shadowRoot?.querySelector("#callback-btn") as any;
    if (callbackBtn) {
      callbackBtn.onIconButtonClick = (e: CustomEvent) => {
        console.log("Callback click:", e.detail.label);
      };
    }
  }

  render() {
    return html`
      <section>
        <ag-icon-button label="Settings">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"
            ></path>
          </svg>
        </ag-icon-button>

        <ag-icon-button label="Delete" variant="danger">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
            ></path>
          </svg>
        </ag-icon-button>
        <ag-icon-button label="Save" variant="primary">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
            ></path>
          </svg>
        </ag-icon-button>

        <ag-icon-button label="Small" size="sm">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            ></path>
          </svg>
        </ag-icon-button>
        <ag-icon-button label="Large" size="lg">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            ></path>
          </svg>
        </ag-icon-button>

        <ag-icon-button id="favorite-toggle" label="Toggle favorite">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            ></path>
          </svg>
        </ag-icon-button>

        <ag-icon-button label="Disabled" disabled>
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
            ></path>
          </svg>
        </ag-icon-button>
        <ag-icon-button label="Loading" loading>
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
            ></path>
          </svg>
        </ag-icon-button>

        <ag-icon-button id="action-btn" label="Action button">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </ag-icon-button>

        <ag-icon-button id="callback-btn" label="Callback button">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v8m-4-4h8"></path>
          </svg>
        </ag-icon-button>
      </section>
    `;
  }
}
```

:::

## Props

| Prop              | Type                                                                                        | Default    | Description                                                                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`           | `string`                                                                                    | —          | **Required**. Accessible name for the button. Used for aria-label to ensure screen readers can announce the button's purpose.                                                                           |
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                      | `'md'`     | Size of the button. Controls both button dimensions and icon sizing.                                                                                                                                    |
| `variant`         | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'ghost' \| 'monochrome'` | `'ghost'`  | Visual style variant.                                                                                                                                                                                   |
| `type`            | `'button' \| 'submit' \| 'reset'`                                                           | `'button'` | Button type attribute.                                                                                                                                                                                  |
| `icon`            | `string`                                                                                    | `''`       | Icon identifier for icon systems.                                                                                                                                                                       |
| `unicode`         | `string`                                                                                    | `''`       | Unicode character for simple icons (e.g., `'×'`, `'☰'`).                                                                                                                                               |
| `disabled`        | `boolean`                                                                                   | `false`    | Disables the button, preventing interaction.                                                                                                                                                            |
| `pressed`         | `boolean`                                                                                   | `false`    | Indicates pressed state for toggle buttons. Sets `aria-pressed`.                                                                                                                                        |
| `loading`         | `boolean`                                                                                   | `false`    | Shows loading indicator and prevents interaction.                                                                                                                                                       |
| `useEmptyIcon`    | `boolean`                                                                                   | `false`    | **SSR Fallback Engine Only**. When set to `true`, disables the default dashed loading placeholder ring and leaves the layout box interior completely clear to prevent visual flashing during hydration. |
| `ariaLabel`       | `string`                                                                                    | —          | Additional ARIA label that overrides the `label` prop if provided.                                                                                                                                      |
| `ariaDescribedby` | `string`                                                                                    | `''`       | ID reference for additional descriptive text.                                                                                                                                                           |

## Events

| Event                  | Framework                                                                                                                | Detail                                                              | Description                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `icon-button-click`    | Vue: `@icon-button-click`<br>React: `onIconButtonClick`<br>Lit: `@icon-button-click` or `.onIconButtonClick`             | `{ originalEvent: MouseEvent, label: string, pressed: boolean }`    | Fired when the icon button is clicked. Provides the original mouse event and button state.                                    |
| `icon-button-activate` | Vue: `@icon-button-activate`<br>React: `onIconButtonActivate`<br>Lit: `@icon-button-activate` or `.onIconButtonActivate` | `{ originalEvent: KeyboardEvent, label: string, pressed: boolean }` | Fired when the button is activated via keyboard (Space or Enter keys). Provides the original keyboard event and button state. |

### Event Patterns

AgnosticUI IconButton supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):

```javascript
const iconButton = document.querySelector("ag-icon-button");
iconButton.addEventListener("icon-button-click", (e) => {
  console.log("Button clicked:", e.detail.label, "Pressed:", e.detail.pressed);
});
```

2. **Callback props** (Lit/Vanilla JS):

```javascript
const iconButton = document.querySelector("ag-icon-button");
iconButton.onIconButtonClick = (e) => {
  console.log("Button clicked:", e.detail.label);
};
```

3. **Framework event handlers** (Vue/React):

```vue
<VueIconButton
  @icon-button-click="handleClick"
  @icon-button-activate="handleActivate"
/>
```

```tsx
<ReactIconButton
  onIconButtonClick={handleClick}
  onIconButtonActivate={handleActivate}
/>
```

All three patterns work identically thanks to the **dual-dispatch** system.

## CSS Shadow Parts

The IconButton exposes CSS Shadow Parts that allow you to customize internal elements without breaking encapsulation:

| Part                  | Description                             | Element  |
| --------------------- | --------------------------------------- | -------- |
| `ag-icon-has-slotted` | Icon wrapper when using slotted content | `<span>` |
| `ag-icon-unicode`     | Icon wrapper for unicode characters     | `<span>` |
| `ag-icon`             | Icon wrapper for icon identifier        | `<span>` |
| `ag-icon-empty-slot`  | Empty icon slot placeholder             | `<span>` |

### Example Usage

```css
ag-icon-button::part(ag-icon-unicode) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

ag-icon-button button {
  border: 2px solid #12623e;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

ag-icon-button::part(ag-icon):hover {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
```

## Accessibility

The IconButton implements the [WAI-ARIA Button Pattern](https://w3.org):

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
<VueIconButton>
  <Save :size="18" />
</VueIconButton>
```

# Tooltip

<AlphaWarning />


A flexible, accessible tooltip component that displays contextual information on hover, focus, or click.

## Examples

<TooltipExamples />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import TooltipExamples from '../examples/TooltipExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <VueTooltip content="This is helpful information">
      <VueButton>Hover me</VueButton>
    </VueTooltip>

    <VueTooltip content="Appears on the right" placement="right">
      <VueButton>Right tooltip</VueButton>
    </VueTooltip>

    <VueTooltip content="Click to toggle" trigger="click">
      <VueButton>Click trigger</VueButton>
    </VueTooltip>

    <VueTooltip
      content="Event handling"
      @show="handleShow"
      @hide="handleHide"
    >
      <VueButton>With events</VueButton>
    </VueTooltip>

    <VueTooltip content="Edit item">
      <VueButton aria-label="Edit">
        <Pencil :size="18" />
      </VueButton>
    </VueTooltip>
  </section>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import { Pencil } from "lucide-vue-next";

export default {
  components: { VueTooltip, VueButton, Pencil },
  methods: {
    handleShow() {
      console.log("Tooltip shown");
    },
    handleHide() {
      console.log("Tooltip hidden");
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { ReactTooltip } from 'agnosticui-core/tooltip/react';
import { ReactButton } from 'agnosticui-core/button/react';
import { Pencil } from 'lucide-react';

export default function TooltipExample() {
  const handleShow = () => {
    console.log("Tooltip shown");
  };

  const handleHide = () => {
    console.log("Tooltip hidden");
  };

  return (
    <section>
      <ReactTooltip content="This is helpful information">
        <ReactButton>Hover me</ReactButton>
      </ReactTooltip>

      <ReactTooltip content="Appears on the right" placement="right">
        <ReactButton>Right tooltip</ReactButton>
      </ReactTooltip>

      <ReactTooltip content="Click to toggle" trigger="click">
        <ReactButton>Click trigger</ReactButton>
      </ReactTooltip>

      <ReactTooltip
        content="Event handling"
        onShow={handleShow}
        onHide={handleHide}
      >
        <ReactButton>With events</ReactButton>
      </ReactTooltip>

      <ReactTooltip content="Edit item">
        <ReactButton aria-label="Edit">
          <Pencil size={18} />
        </ReactButton>
      </ReactTooltip>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'agnosticui-core/tooltip';

@customElement('tooltip-example')
export class TooltipExample extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `;

  firstUpdated() {
    // Set up event listeners for tooltip events in the shadow DOM
    const eventTooltip = this.shadowRoot?.querySelector('#event-tooltip');
    eventTooltip?.addEventListener('show', () => {
      console.log('Tooltip shown');
    });
    eventTooltip?.addEventListener('hide', () => {
      console.log('Tooltip hidden');
    });
  }

  render() {
    return html`
      <section>
        <ag-tooltip content="This is helpful information">
          <button>Hover me</button>
        </ag-tooltip>

        <ag-tooltip content="Appears on the right" placement="right">
          <button>Right tooltip</button>
        </ag-tooltip>

        <ag-tooltip content="Click to toggle" trigger="click">
          <button>Click trigger</button>
        </ag-tooltip>

        <ag-tooltip id="event-tooltip" content="Event handling">
          <button>With events</button>
        </ag-tooltip>

        <ag-tooltip content="Edit item">
          <button aria-label="Edit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </ag-tooltip>
      </section>
    `;
  }
}
```

**Note:** When using tooltip components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead.
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `''` | The text content to display in the tooltip |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `'top'` | Placement of the tooltip relative to the trigger |
| `distance` | `number` | `8` | Distance in pixels between tooltip and trigger |
| `skidding` | `number` | `0` | Offset in pixels along the alignment axis |
| `trigger` | `string` | `'hover focus'` | Space-separated trigger events: 'hover', 'focus', 'click' |
| `disabled` | `boolean` | `false` | Prevents the tooltip from showing |

## Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `show` | Vue: `@show`<br>React: `onShow`<br>Lit: `@show` or `.onShow` | `{ visible: boolean }` | Fired when the tooltip becomes visible. The `visible` property will be `true`. |
| `hide` | Vue: `@hide`<br>React: `onHide`<br>Lit: `@hide` or `.onHide` | `{ visible: boolean }` | Fired when the tooltip becomes hidden. The `visible` property will be `false`. |

### Event Patterns

AgnosticUI Tooltip supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const tooltip = document.querySelector('ag-tooltip');
tooltip.addEventListener('show', (e) => {
  console.log('Tooltip shown:', e.detail.visible);
});
```

2. **Callback props** (Lit/Vanilla JS):
```javascript
const tooltip = document.querySelector('ag-tooltip');
tooltip.onShow = (e) => {
  console.log('Tooltip shown:', e.detail.visible);
};
```

3. **Framework event handlers** (Vue/React):
```vue
<!-- Vue -->
<VueTooltip @show="handleShow" @hide="handleHide" />
```
```tsx
// React
<ReactTooltip onShow={handleShow} onHide={handleHide} />
```

All three patterns work identically thanks to the **dual-dispatch** system.

## Accessibility

The Tooltip component implements the [WAI-ARIA Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):

- Uses `role="tooltip"` for proper screen reader identification
- Keyboard support: Focus shows tooltip, Escape dismisses it
- Always include `aria-label` on icon-only buttons
- Keep content brief (one sentence or less)
- Include 'focus' trigger for keyboard accessibility

## CSS Shadow Parts

| Part | Description |
| --- | --- |
| `ag-tooltip` | The main tooltip container element that displays the content |
| `ag-tooltip-arrow` | The arrow element that points to the trigger element |

### Customization Example

```css
.custom-tooltip::part(ag-tooltip) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 250px;
}

.custom-tooltip::part(ag-tooltip-arrow) {
  background: #667eea;
}
```

```html
<VueTooltip class="custom-tooltip" content="Customized tooltip">
  <VueButton>Hover me</VueButton>
</VueTooltip>

<ReactTooltip className="custom-tooltip" content="Customized tooltip">
  <ReactButton>Hover me</ReactButton>
</ReactTooltip>

<ag-tooltip class="custom-tooltip" content="Customized tooltip">
  <button>Hover me</button>
</ag-tooltip>
```

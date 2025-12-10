# Collapsible

A collapsible is a standalone component that allows users to show and hide a single section of content. Unlike accordions which manage multiple items, collapsibles work independently and are ideal for revealing optional information, FAQs, or additional details on demand.

## Examples

<CollapsibleExamples />

<script setup>
import CollapsibleExamples from '../examples/CollapsibleExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <VueCollapsible>
      <template #summary>
        <span>Click to expand</span>
      </template>
      <p>This is the collapsible content that can be shown or hidden.</p>
    </VueCollapsible>

    <VueCollapsible open>
      <template #summary>
        <span>Already expanded</span>
      </template>
      <p>This collapsible starts in an open state.</p>
    </VueCollapsible>

    <VueCollapsible
      bordered
      shadow
    >
      <template #summary>
        <span>Bordered with shadow</span>
      </template>
      <p>This collapsible has both border and shadow styling.</p>
    </VueCollapsible>

    <VueCollapsible
      use-x
      @toggle="handleToggle"
    >
      <template #summary>
        <span>X Indicator</span>
      </template>
      <p>Plus icon that transforms into an X when opened</p>
    </VueCollapsible>

    <VueCollapsible
      use-minus
      @toggle="handleToggle"
    >
      <template #summary>
        <span>Plus/Minus Indicator</span>
      </template>
      <p>Plus icon that changes to minus when opened</p>
    </VueCollapsible>

    <VueCollapsible no-indicator>
      <template #summary>
        <span>No indicator</span>
      </template>
      <p>This collapsible has no indicator icon at all.</p>
    </VueCollapsible>
  </section>
</template>

<script>
import { VueCollapsible } from "agnosticui-core/collapsible/vue";

export default {
  components: { VueCollapsible },
  methods: {
    handleToggle(event) {
      const newOpenState = event.detail.open;
      console.log("Collapsible toggled:", newOpenState);
    },
  },
};
</script>
````

:::

::: details React

```tsx
import { ReactCollapsible } from "agnosticui-core/collapsible/react";

export default function CollapsibleExample() {
  const handleToggle = (event: CustomEvent<{ open: boolean }>) => {
    console.log("Collapsible toggled:", event.detail.open);
  };

  return (
    <section>
      <ReactCollapsible>
        <span slot="summary">Click to expand</span>
        <p>This is the collapsible content that can be shown or hidden.</p>
      </ReactCollapsible>

      <ReactCollapsible open={true}>
        <span slot="summary">Already expanded</span>
        <p>This collapsible starts in an open state.</p>
      </ReactCollapsible>

      <ReactCollapsible bordered shadow>
        <span slot="summary">Bordered with shadow</span>
        <p>This collapsible has both border and shadow styling.</p>
      </ReactCollapsible>

      <ReactCollapsible useX onToggle={handleToggle}>
        <span slot="summary">X Indicator</span>
        <p>Plus icon that transforms into an X when opened</p>
      </ReactCollapsible>

      <ReactCollapsible useMinus onToggle={handleToggle}>
        <span slot="summary">Plus/Minus Indicator</span>
        <p>Plus icon that changes to minus when opened</p>
      </ReactCollapsible>

      <ReactCollapsible noIndicator>
        <span slot="summary">No indicator</span>
        <p>This collapsible has no indicator icon at all.</p>
      </ReactCollapsible>
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'agnosticui-core/collapsible';

@customElement('collapsible-example')
export class CollapsibleExample extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;

  firstUpdated() {
    // Set up event listeners for collapsible elements in the shadow DOM
    const collapsibles = this.shadowRoot?.querySelectorAll('ag-collapsible');
    collapsibles?.forEach((el) => {
      el.addEventListener('toggle', (event: Event) => {
        const customEvent = event as CustomEvent;
        console.log('Collapsible toggled:', customEvent.detail.open);
      });
    });
  }

  render() {
    return html`
      <section>
        <ag-collapsible>
          <span slot="summary">Click to expand</span>
          <p>This is the collapsible content that can be shown or hidden.</p>
        </ag-collapsible>

        <ag-collapsible open>
          <span slot="summary">Already expanded</span>
          <p>This collapsible starts in an open state.</p>
        </ag-collapsible>

        <ag-collapsible bordered shadow>
          <span slot="summary">Bordered with shadow</span>
          <p>This collapsible has both border and shadow styling.</p>
        </ag-collapsible>

        <ag-collapsible use-x>
          <span slot="summary">X Indicator</span>
          <p>Plus icon that transforms into an X when opened</p>
        </ag-collapsible>

        <ag-collapsible use-minus>
          <span slot="summary">Plus/Minus Indicator</span>
          <p>Plus icon that changes to minus when opened</p>
        </ag-collapsible>

        <ag-collapsible no-indicator>
          <span slot="summary">No indicator</span>
          <p>This collapsible has no indicator icon at all.</p>
        </ag-collapsible>
      </section>
    `;
  }
}
```

**Note:** When using collapsible components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead.

:::

## Props

| Prop          | Type      | Default | Description                                                    |
| ------------- | --------- | ------- | -------------------------------------------------------------- |
| `open`        | `boolean` | `false` | Whether the collapsible is expanded                            |
| `bordered`  | `boolean` | `false` | Whether to apply border styling                                |
| `shadow`    | `boolean` | `false` | Whether to apply box-shadow styling                            |
| `useChevron`  | `boolean` | `true`  | Use chevron indicator (default) — rotates 180° when open       |
| `useX`        | `boolean` | `false` | Use X indicator — plus rotates to form an X when open          |
| `useMinus`    | `boolean` | `false` | Use plus/minus indicator — plus transitions to minus when open |
| `noIndicator` | `boolean` | `false` | Hide the indicator completely                                  |

**Note:** Indicator props are mutually exclusive with priority: `noIndicator` > `useX` > `useMinus` > `useChevron` (default)

## Events

| Event    | Framework                                             | Detail              | Description                                                                                 |
| -------- | ----------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| `toggle` | Vue: `@toggle`<br>React: `onToggle`<br>Lit: `@toggle` | `{ open: boolean }` | Fired when the collapsible opens or closes. The event detail contains the new `open` state. |

**Type:**

```ts
export type CollapsibleToggleEvent = CustomEvent<{ open: boolean }>;
```

## CSS Shadow Parts

| Part                       | Description                                | Element     |
| -------------------------- | ------------------------------------------ | ----------- |
| `ag-collapsible-details`   | The main details element container         | `<details>` |
| `ag-collapsible-summary`   | The interactive summary/trigger element    | `<summary>` |
| `ag-collapsible-indicator` | The expand/collapse indicator icon wrapper | `<span>`    |
| `ag-collapsible-content`   | The collapsible content region             | `<div>`     |

### Example Usage

```css
ag-collapsible::part(ag-collapsible-details) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  overflow: hidden;
}

ag-collapsible::part(ag-collapsible-summary) {
  color: white;
  font-weight: 600;
  padding: 1.5rem;
  cursor: pointer;
}

ag-collapsible::part(ag-collapsible-indicator) {
  filter: brightness(0) invert(1);
}

ag-collapsible::part(ag-collapsible-content) {
  color: white;
  background: rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

ag-collapsible.minimal::part(ag-collapsible-summary) {
  background: #f9fafb;
  border-left: 4px solid #3b82f6;
  padding: 1rem 1rem 1rem 1.5rem;
}

ag-collapsible.minimal::part(ag-collapsible-content) {
  background: #ffffff;
  padding: 1rem 1rem 1rem 1.5rem;
}
```

See the [Storybook CSS Parts Customization story](https://github.com/AgnosticUI/agnosticui) for more examples.

## Accessibility

The Collapsible is built on the native HTML `<details>` and `<summary>` elements, providing excellent accessibility by default:

* Uses semantic HTML `<details>` and `<summary>` elements
* Native keyboard support:

  * **Space/Enter**: Toggle the collapsible
* The `open` attribute communicates state to assistive technologies
* Screen readers can interact with it naturally
* Focus indicators are clearly visible for keyboard navigation
* No additional ARIA attributes are needed due to native semantics

## Progressive Enhancement

The Collapsible is designed with progressive enhancement in mind:

* Built on native `<details>` and `<summary>` HTML elements
* Content is accessible even if JavaScript fails to load
* Core expand/collapse functionality works without JavaScript
* JavaScript enhancement adds custom indicators and smoother animations
* Gracefully degrades to native browser behavior

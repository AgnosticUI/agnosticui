# Accordion

<AlphaWarning />


An accordion is a vertically stacked set of interactive headings that each reveal a section of content. Accordions are ideal for presenting FAQs, feature lists, and other content that benefits from progressive disclosure.

## Examples

<AccordionExamples />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import AccordionExamples from '../examples/AccordionExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <section>
    <VueAccordion>
      <VueAccordionItem>
        <VueAccordionHeader>Accordion Item 1</VueAccordionHeader>
        <VueAccordionContent>
          <p>This is the content of the first accordion item.</p>
        </VueAccordionContent>
      </VueAccordionItem>
      <VueAccordionItem>
        <VueAccordionHeader>Accordion Item 2</VueAccordionHeader>
        <VueAccordionContent>
          <p>This is the content of the second accordion item.</p>
        </VueAccordionContent>
      </VueAccordionItem>
      <VueAccordionItem>
        <VueAccordionHeader>Accordion Item 3</VueAccordionHeader>
        <VueAccordionContent>
          <p>This is the content of the third accordion item.</p>
        </VueAccordionContent>
      </VueAccordionItem>
    </VueAccordion>

    <VueAccordion>
      <VueAccordionItem use-chevron bordered>
        <VueAccordionHeader>Features</VueAccordionHeader>
        <VueAccordionContent>
          <ul>
            <li>Accessible by default</li>
            <li>Keyboard navigation support</li>
            <li>Customizable heading levels</li>
          </ul>
        </VueAccordionContent>
      </VueAccordionItem>
      <VueAccordionItem use-chevron bordered open>
        <VueAccordionHeader>Open by Default</VueAccordionHeader>
        <VueAccordionContent>
          <p>This item starts in the open state.</p>
        </VueAccordionContent>
      </VueAccordionItem>
    </VueAccordion>

    <VueAccordion>
      <VueAccordionItem use-x @toggle="handleToggle">
        <VueAccordionHeader>X Indicator</VueAccordionHeader>
        <VueAccordionContent>
          <p>Plus icon that transforms into an X when opened</p>
        </VueAccordionContent>
      </VueAccordionItem>
    </VueAccordion>

    <VueAccordion>
      <VueAccordionItem use-minus @toggle="handleToggle">
        <VueAccordionHeader>Plus/Minus Indicator</VueAccordionHeader>
        <VueAccordionContent>
          <p>Plus icon that changes to minus when opened</p>
        </VueAccordionContent>
      </VueAccordionItem>
    </VueAccordion>
  </section>
</template>

<script>
import VueAccordion, {
  VueAccordionItem,
  VueAccordionHeader,
  VueAccordionContent,
} from "agnosticui-core/accordion/vue";

export default {
  components: {
    VueAccordion,
    VueAccordionItem,
    VueAccordionHeader,
    VueAccordionContent,
  },
  methods: {
    handleToggle(detail) {
      console.log("Accordion toggled:", detail.open);
    },
  },
};
</script>
```

:::

::: details React

```tsx
import {
  ReactAccordion,
  AccordionItem,
  ItemHeader,
  ItemContent,
} from "agnosticui-core/accordion/react";

export default function AccordionExample() {
  const handleToggle = (event: CustomEvent) => {
    console.log("Accordion toggled:", event.detail.open);
  };

  return (
    <section>
      <ReactAccordion>
        <AccordionItem>
          <ItemHeader>Accordion Item 1</ItemHeader>
          <ItemContent>
            <p>This is the content of the first accordion item.</p>
          </ItemContent>
        </AccordionItem>
        <AccordionItem>
          <ItemHeader>Accordion Item 2</ItemHeader>
          <ItemContent>
            <p>This is the content of the second accordion item.</p>
          </ItemContent>
        </AccordionItem>
        <AccordionItem>
          <ItemHeader>Accordion Item 3</ItemHeader>
          <ItemContent>
            <p>This is the content of the third accordion item.</p>
          </ItemContent>
        </AccordionItem>
      </ReactAccordion>

      <ReactAccordion>
        <AccordionItem useChevron bordered>
          <ItemHeader>Features</ItemHeader>
          <ItemContent>
            <ul>
              <li>Accessible by default</li>
              <li>Keyboard navigation support</li>
              <li>Customizable heading levels</li>
            </ul>
          </ItemContent>
        </AccordionItem>
        <AccordionItem useChevron bordered open={true}>
          <ItemHeader>Open by Default</ItemHeader>
          <ItemContent>
            <p>This item starts in the open state.</p>
          </ItemContent>
        </AccordionItem>
      </ReactAccordion>

      <ReactAccordion>
        <AccordionItem useX onToggle={handleToggle}>
          <ItemHeader>X Indicator</ItemHeader>
          <ItemContent>
            <p>Plus icon that transforms into an X when opened</p>
          </ItemContent>
        </AccordionItem>
      </ReactAccordion>

      <ReactAccordion>
        <AccordionItem useMinus onToggle={handleToggle}>
          <ItemHeader>Plus/Minus Indicator</ItemHeader>
          <ItemContent>
            <p>Plus icon that changes to minus when opened</p>
          </ItemContent>
        </AccordionItem>
      </ReactAccordion>
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'agnosticui-core/accordion';

@customElement('accordion-example')
export class AccordionExample extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  `;

  firstUpdated() {
    // Set up event listeners for accordion items in the shadow DOM
    const items = this.shadowRoot?.querySelectorAll('ag-accordion-item');
    items?.forEach((item) => {
      item.addEventListener('toggle', (event: Event) => {
        const customEvent = event as CustomEvent;
        console.log('Accordion toggled:', customEvent.detail.open);
      });
    });
  }

  render() {
    return html`
      <section>
        <ag-accordion>
          <ag-accordion-item>
            <span slot="header">Accordion Item 1</span>
            <div slot="content">
              <p>This is the content of the first accordion item.</p>
            </div>
          </ag-accordion-item>
          <ag-accordion-item>
            <span slot="header">Accordion Item 2</span>
            <div slot="content">
              <p>This is the content of the second accordion item.</p>
            </div>
          </ag-accordion-item>
          <ag-accordion-item>
            <span slot="header">Accordion Item 3</span>
            <div slot="content">
              <p>This is the content of the third accordion item.</p>
            </div>
          </ag-accordion-item>
        </ag-accordion>

        <ag-accordion>
          <ag-accordion-item use-chevron bordered>
            <span slot="header">Features</span>
            <div slot="content">
              <ul>
                <li>Accessible by default</li>
                <li>Keyboard navigation support</li>
                <li>Customizable heading levels</li>
              </ul>
            </div>
          </ag-accordion-item>
          <ag-accordion-item use-chevron bordered open>
            <span slot="header">Open by Default</span>
            <div slot="content">
              <p>This item starts in the open state.</p>
            </div>
          </ag-accordion-item>
        </ag-accordion>

        <ag-accordion>
          <ag-accordion-item id="x-indicator-item" use-x>
            <span slot="header">X Indicator</span>
            <div slot="content">
              <p>Plus icon that transforms into an X when opened</p>
            </div>
          </ag-accordion-item>
        </ag-accordion>

        <ag-accordion>
          <ag-accordion-item id="minus-indicator-item" use-minus>
            <span slot="header">Plus/Minus Indicator</span>
            <div slot="content">
              <p>Plus icon that changes to minus when opened</p>
            </div>
          </ag-accordion-item>
        </ag-accordion>
      </section>
    `;
  }
}
```

**Note:** When using accordion components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) using `this.shadowRoot.querySelectorAll()` instead of `document.addEventListener('DOMContentLoaded', ...)`.

:::

## Props

### Accordion (Container)

The `Accordion` component is a simple container with no specific props. It wraps multiple `AccordionItem` components.

### AccordionItem

| Prop           | Type      | Default | Description                                                               |
| -------------- | --------- | ------- | ------------------------------------------------------------------------- |
| `open`         | `boolean` | `false` | Whether the accordion item is expanded                                    |
| `headingLevel` | `number`  | `3`     | Heading level for semantic HTML (1-6, renders as h1-h6)                   |
| `disabled`     | `boolean` | `false` | Whether the accordion item is disabled                                    |
| `useChevron`   | `boolean` | `true`  | Use chevron indicator (default) - rotates 180° when open                  |
| `useX`         | `boolean` | `false` | Use X indicator - plus rotated 180° initially, becomes X at 45° when open |
| `useMinus`     | `boolean` | `false` | Use plus/minus indicator - plus transitions to minus when open            |
| `noIndicator`  | `boolean` | `false` | Hide the indicator completely                                             |
| `bordered`     | `boolean` | `false` | Whether to apply border styling to the header                             |
| `background`   | `boolean` | `false` | Whether to apply background color to the header                           |

{.foo}

**Note:** Indicator props are mutually exclusive with priority: `noIndicator` > `useX` > `useMinus` > `useChevron` (default)

## Events

The AccordionItem component follows AgnosticUI v2 event conventions with **dual-dispatch** for the `toggle` custom event - you can use either `addEventListener` or callback props (e.g., `onToggle`).

| Event    | Framework                                                            | Detail              | Description                                                              |
| -------- | -------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------ |
| `toggle` | Vue: `@toggle`<br>React: `onToggle`<br>Lit: `@toggle` or `.onToggle` | `{ open: boolean }` | Fired when the accordion item is toggled between open and closed states. |

{.foo}

### Event Handling Examples

::: details Vue

```vue
<template>
  <VueAccordionItem @toggle="handleToggle">
    <template #header>Toggle me</template>
    <template #content>Content here</template>
  </VueAccordionItem>

  <VueAccordionItem v-model:open="isOpen">
    <template #header>Controlled accordion</template>
    <template #content>Content here</template>
  </VueAccordionItem>

  <VueAccordionItem v-model:open="isOpen" @toggle="handleToggle">
    <template #header>Both patterns</template>
    <template #content>Content here</template>
  </VueAccordionItem>
</template>

<script setup>
import { ref } from "vue";
import { VueAccordionItem } from "agnosticui-core/accordion/vue";

const isOpen = ref(false);

const handleToggle = (detail) => {
  console.log("Toggle event:", detail);
};
</script>
```

:::

::: details React

```tsx
import { useState } from "react";
import {
  AccordionItem,
  ItemHeader,
  ItemContent,
} from "agnosticui-core/accordion/react";

export default function AccordionExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (event) => {
    console.log("Toggle event:", event.detail);
    setIsOpen(event.detail.open);
  };

  return (
    <AccordionItem open={isOpen} onToggle={handleToggle}>
      <ItemHeader>Click to toggle</ItemHeader>
      <ItemContent>Accordion content here</ItemContent>
    </AccordionItem>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/accordion";

  const item = document.querySelector("#my-accordion");

  item.addEventListener("toggle", (event) => {
    console.log("Toggle event:", event.detail);
  });

  item.onToggle = (event) => {
    console.log("Toggle event (callback):", event.detail);
  };
</script>

<ag-accordion-item id="my-accordion">
  <span slot="header">Click to toggle</span>
  <div slot="content">Accordion content here</div>
</ag-accordion-item>
```

:::

## CSS Shadow Parts

The Accordion exposes CSS Shadow Parts that allow you to customize internal elements without breaking encapsulation:

| Part                          | Description                                          | Element       |
| ----------------------------- | ---------------------------------------------------- | ------------- |
| `ag-accordion-wrapper`        | The main wrapper container                           | `<div>`       |
| `ag-accordion-header-wrapper` | The header wrapper containing the heading and button | `<div>`       |
| `ag-accordion-heading`        | The semantic heading element (h1-h6)                 | `<h1>`-`<h6>` |
| `ag-accordion-header`         | The interactive button inside the heading            | `<button>`    |
| `ag-accordion-indicator`      | The expand/collapse indicator icon wrapper           | `<span>`      |
| `ag-accordion-content`        | The collapsible content region                       | `<div>`       |

{.foo}

### Example Usage

```css
ag-accordion-item::part(ag-accordion-header-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 4px;
}

ag-accordion-item::part(ag-accordion-header) {
  color: white;
  padding: 16px 20px;
}

ag-accordion-item::part(ag-accordion-content) {
  background: #f9fafb;
  padding: 20px;
  border: 2px solid #e5e7eb;
}

ag-accordion-item::part(ag-accordion-indicator) {
  color: #12623e;
}
```

## Accessibility

The Accordion implements the [WAI-ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/):

- Uses semantic heading elements (h1-h6) with customizable `headingLevel` prop
- Buttons have `aria-expanded` to communicate state
- Content panels have `role="region"` and are labeled via `aria-labelledby`
- Keyboard accessible:
  - **Space/Enter**: Toggle the focused accordion item
  - **Arrow Down**: Move focus to next accordion item
  - **Arrow Up**: Move focus to previous accordion item
  - **Home**: Move focus to first accordion item
  - **End**: Move focus to last accordion item
- Using **TAB** works as well
- Screen readers announce the current state (expanded/collapsed)
- Clear focus indicators for keyboard navigation
- Disabled items cannot be interacted with and are communicated via `aria-disabled`

## Progressive Enhancement

The Accordion is designed with progressive enhancement in mind:

- Content is visible by default before JavaScript loads
- Once the web component is defined, expand/collapse functionality is enhanced
- If JavaScript fails to load, users can still access all content
- Uses the `data-enhanced` attribute to apply hide/show logic only after JavaScript initialization

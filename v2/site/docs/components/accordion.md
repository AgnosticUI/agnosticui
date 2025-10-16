# Accordion

An accordion is a vertically stacked set of interactive headings that each reveal a section of content. Accordions are ideal for presenting FAQs, feature lists, and other content that benefits from progressive disclosure.

## Examples

<AccordionExamples />

<script setup>
import AccordionExamples from '../examples/AccordionExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic accordion -->
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

    <!-- With indicator and styling -->
    <VueAccordion>
      <VueAccordionItem
        indicator
        bordered
      >
        <VueAccordionHeader>Features</VueAccordionHeader>
        <VueAccordionContent>
          <ul>
            <li>Accessible by default</li>
            <li>Keyboard navigation support</li>
            <li>Customizable heading levels</li>
          </ul>
        </VueAccordionContent>
      </VueAccordionItem>
      <VueAccordionItem
        indicator
        bordered
        open
      >
        <VueAccordionHeader>Open by Default</VueAccordionHeader>
        <VueAccordionContent>
          <p>This item starts in the open state.</p>
        </VueAccordionContent>
      </VueAccordionItem>
    </VueAccordion>

    <!-- With event handling -->
    <VueAccordion>
      <VueAccordionItem
        indicator
        @toggle="handleToggle"
      >
        <VueAccordionHeader>Interactive Item</VueAccordionHeader>
        <VueAccordionContent>
          <p>Click to trigger a toggle event</p>
        </VueAccordionContent>
      </VueAccordionItem>
    </VueAccordion>
  </section>
</template>

<script>
import VueAccordion, { VueAccordionItem, VueAccordionHeader, VueAccordionContent } from "agnosticui-core/accordion/vue";

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
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from 'agnosticui-core/accordion/react';

export default function AccordionExample() {
  const handleToggle = (event: CustomEvent) => {
    console.log("Accordion toggled:", event.detail.open);
  };

  return (
    <section>
      {/* Basic accordion */}
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

      {/* With indicator and styling */}
      <ReactAccordion>
        <AccordionItem indicator bordered>
          <ItemHeader>Features</ItemHeader>
          <ItemContent>
            <ul>
              <li>Accessible by default</li>
              <li>Keyboard navigation support</li>
              <li>Customizable heading levels</li>
            </ul>
          </ItemContent>
        </AccordionItem>
        <AccordionItem indicator bordered open={true}>
          <ItemHeader>Open by Default</ItemHeader>
          <ItemContent>
            <p>This item starts in the open state.</p>
          </ItemContent>
        </AccordionItem>
      </ReactAccordion>

      {/* With event handling */}
      <ReactAccordion>
        <AccordionItem indicator onToggle={handleToggle}>
          <ItemHeader>Interactive Item</ItemHeader>
          <ItemContent>
            <p>Click to trigger a toggle event</p>
          </ItemContent>
        </AccordionItem>
      </ReactAccordion>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/accordion';

  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('ag-accordion-item');

    items.forEach(item => {
      item.addEventListener('toggle', (event) => {
        console.log('Accordion toggled:', event.detail.open);
      });
    });
  });
</script>

<section>
  <!-- Basic accordion -->
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

  <!-- With indicator and styling -->
  <ag-accordion>
    <ag-accordion-item indicator bordered>
      <span slot="header">Features</span>
      <div slot="content">
        <ul>
          <li>Accessible by default</li>
          <li>Keyboard navigation support</li>
          <li>Customizable heading levels</li>
        </ul>
      </div>
    </ag-accordion-item>
    <ag-accordion-item indicator bordered open>
      <span slot="header">Open by Default</span>
      <div slot="content">
        <p>This item starts in the open state.</p>
      </div>
    </ag-accordion-item>
  </ag-accordion>

  <!-- With event handling -->
  <ag-accordion>
    <ag-accordion-item id="interactive-item" indicator>
      <span slot="header">Interactive Item</span>
      <div slot="content">
        <p>Click to trigger a toggle event</p>
      </div>
    </ag-accordion-item>
  </ag-accordion>
</section>
```
:::

## Props

### Accordion (Container)

The `Accordion` component is a simple container with no specific props. It wraps multiple `AccordionItem` components.

### AccordionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the accordion item is expanded |
| `headingLevel` | `number` | `3` | Heading level for semantic HTML (1-6, renders as h1-h6) |
| `disabled` | `boolean` | `false` | Whether the accordion item is disabled |
| `indicator` | `boolean` | `false` | Whether to show the expand/collapse indicator icon |
| `bordered` | `boolean` | `false` | Whether to apply border styling to the header |
| `background` | `boolean` | `false` | Whether to apply background color to the header |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@toggle` (Vue) / `onToggle` (React) / `toggle` (Lit) | `{ open: boolean }` | Emitted when the accordion item is toggled between open and closed states |

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
- Screen readers announce the current state (expanded/collapsed)
- Clear focus indicators for keyboard navigation
- Disabled items cannot be interacted with and are communicated via `aria-disabled`

## Progressive Enhancement

The Accordion is designed with progressive enhancement in mind:

- Content is visible by default before JavaScript loads
- Once the web component is defined, expand/collapse functionality is enhanced
- If JavaScript fails to load, users can still access all content
- Uses the `data-enhanced` attribute to apply hide/show logic only after JavaScript initialization

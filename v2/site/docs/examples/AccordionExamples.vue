<template>
  <section>
    <div class="mbe4">
      <h3>Basic Accordion (Default)</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        By default, the Accordion provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Chevron Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Default chevron indicator with smooth rotation</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Chevron Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Click to see the 180° rotation animation</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Chevron Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Classic accordion indicator style</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>X Indicator</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-x>
          <VueAccordionHeader>X Indicator Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Plus transforms into X when opened</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-x>
          <VueAccordionHeader>X Indicator Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Smooth transition from plus to X</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-x>
          <VueAccordionHeader>X Indicator Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Modern accordion indicator style</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>Plus/Minus Indicator</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Plus transitions to minus when open with smooth animation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-minus>
          <VueAccordionHeader>Plus/Minus Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Plus changes to minus when opened</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-minus>
          <VueAccordionHeader>Plus/Minus Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Classic expand/collapse indicator</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-minus>
          <VueAccordionHeader>Plus/Minus Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Clear visual indication of state</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>No Indicator</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Accordion items without any visual indicator.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem no-indicator>
          <VueAccordionHeader>No Indicator Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Clean header without indicator icon</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem no-indicator>
          <VueAccordionHeader>No Indicator Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Minimal design focused on content</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem no-indicator>
          <VueAccordionHeader>No Indicator Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Simple accordion without visual clutter</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>Bordered</h3>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          bordered
          use-chevron
        >
          <VueAccordionHeader>Bordered Item 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion has borders on the headers</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          bordered
          use-chevron
        >
          <VueAccordionHeader>Bordered Item 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Another bordered item</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          bordered
          use-chevron
        >
          <VueAccordionHeader>Bordered Item 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Third bordered item</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>With Background</h3>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          background
          use-chevron
        >
          <VueAccordionHeader>Background Item 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion has background color on headers</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          background
          use-chevron
        >
          <VueAccordionHeader>Background Item 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Another item with background</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          background
          use-chevron
        >
          <VueAccordionHeader>Background Item 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Third item with background</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>One Item Open</h3>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Closed Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item starts closed</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          open
        >
          <VueAccordionHeader>Open Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item starts open</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Another Closed Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item also starts closed</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>Disabled State</h3>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Enabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item can be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          disabled
        >
          <VueAccordionHeader>Disabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item cannot be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Another Enabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item can also be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>Rich Content</h3>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          use-chevron
          bordered
        >
          <VueAccordionHeader>
            <div class="flex-inline items-center">
              <Info
                color="var(--ag-primary)"
                :size="18"
                class="mie2"
              />
              Features
            </div>
          </VueAccordionHeader>
          <VueAccordionContent>
            <ul>
              <li>Accessible by default with ARIA attributes</li>
              <li>Keyboard navigation support</li>
              <li>Customizable heading levels</li>
              <li>Multiple styling options</li>
            </ul>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          bordered
        >
          <VueAccordionHeader>
            <div class="flex-inline items-center">
              <Code
                color="var(--ag-secondary)"
                :size="18"
                class="mie2"
              />
              Code Example
            </div>
          </VueAccordionHeader>
          <VueAccordionContent>
            <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">
&lt;VueAccordionItem use-chevron&gt;
  &lt;VueAccordionHeader&gt;Title&lt;/VueAccordionHeader&gt;
  &lt;VueAccordionContent&gt;Content&lt;/VueAccordionContent&gt;
&lt;/VueAccordionItem&gt;</pre>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          bordered
        >
          <VueAccordionHeader>
            <div class="flex-inline items-center">
              <HelpCircle
                color="var(--ag-success)"
                :size="18"
                class="mie2"
              />
              More Information
            </div>
          </VueAccordionHeader>
          <VueAccordionContent>
            <p>Accordions are great for:</p>
            <ul>
              <li>FAQ sections</li>
              <li>Feature lists</li>
              <li>Documentation</li>
              <li>Progressive disclosure</li>
            </ul>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize accordion appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          class="custom-minimal-accordion"
          use-chevron
        >
          <VueAccordionHeader>Minimal Border Style</VueAccordionHeader>
          <VueAccordionContent>
            <p>This variant uses a minimal border-left design with subtle styling.</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          class="custom-minimal-accordion"
          use-chevron
        >
          <VueAccordionHeader>Another Minimal Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>Clean and simple styling focused on content hierarchy.</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>
  </section>
</template>

<script>
import VueAccordion, {
  VueAccordionItem,
  VueAccordionHeader,
  VueAccordionContent,
} from "agnosticui-core/accordion/vue";
import { Info, Code, HelpCircle } from "lucide-vue-next";

export default {
  name: "AccordionExamples",
  components: {
    VueAccordion,
    VueAccordionItem,
    VueAccordionHeader,
    VueAccordionContent,
    Info,
    Code,
    HelpCircle,
  },
};
</script>

<style scoped>
/* CSS Parts customization examples */
.custom-minimal-accordion::part(ag-accordion-header-wrapper) {
  border-left: 4px solid var(--ag-primary);
  padding-left: 12px;
}

.custom-minimal-accordion::part(ag-accordion-header) {
  font-weight: 500;
  color: var(--ag-text-primary);
}

.custom-minimal-accordion::part(ag-accordion-content) {
  padding-left: 16px;
  border-left: 2px solid #e5e7eb;
  margin-left: 2px;
}

.custom-minimal-accordion::part(ag-accordion-indicator) {
  color: var(--ag-primary);
}
</style>

<template>
  <section>
    <div class="mbe4">
      <h3>Basic Accordion</h3>
    </div>
    <div class="stacked mbe4">
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
    </div>

    <div class="mbe4">
      <h3>With Indicator</h3>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem indicator>
          <VueAccordionHeader>Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Content with expand/collapse indicator</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem indicator>
          <VueAccordionHeader>Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Another section with indicator</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem indicator>
          <VueAccordionHeader>Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Third section with indicator</p>
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
          indicator
        >
          <VueAccordionHeader>Bordered Item 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion has borders on the headers</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          bordered
          indicator
        >
          <VueAccordionHeader>Bordered Item 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Another bordered item</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          bordered
          indicator
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
          indicator
        >
          <VueAccordionHeader>Background Item 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion has background color on headers</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          background
          indicator
        >
          <VueAccordionHeader>Background Item 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Another item with background</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          background
          indicator
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
        <VueAccordionItem indicator>
          <VueAccordionHeader>Closed Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item starts closed</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          indicator
          open
        >
          <VueAccordionHeader>Open Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item starts open</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem indicator>
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
        <VueAccordionItem indicator>
          <VueAccordionHeader>Enabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item can be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          indicator
          disabled
        >
          <VueAccordionHeader>Disabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item cannot be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem indicator>
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
          indicator
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
          indicator
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
&lt;VueAccordionItem indicator&gt;
  &lt;VueAccordionHeader&gt;Title&lt;/VueAccordionHeader&gt;
  &lt;VueAccordionContent&gt;Content&lt;/VueAccordionContent&gt;
&lt;/VueAccordionItem&gt;</pre>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          indicator
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
      <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Customize accordion appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          class="custom-gradient-accordion"
          indicator
        >
          <VueAccordionHeader>Gradient Styled</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion uses CSS Shadow Parts to apply a gradient background, custom padding, and hover effects.</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          class="custom-gradient-accordion"
          indicator
        >
          <VueAccordionHeader>Another Gradient Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>All styling is done through CSS Shadow Parts, allowing full control without modifying the component.</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          class="custom-minimal-accordion"
          indicator
        >
          <VueAccordionHeader>Minimal Border Style</VueAccordionHeader>
          <VueAccordionContent>
            <p>This variant uses a minimal border-left design with subtle styling.</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          class="custom-minimal-accordion"
          indicator
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
import VueAccordion, { VueAccordionItem, VueAccordionHeader, VueAccordionContent } from "agnosticui-core/accordion/vue";
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
.custom-gradient-accordion::part(ag-accordion-header-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 4px;
}

.custom-gradient-accordion::part(ag-accordion-heading) {
  font-size: 1.125rem;
  font-weight: 600;
}

.custom-gradient-accordion::part(ag-accordion-header) {
  color: white;
  padding: 16px 20px;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.custom-gradient-accordion::part(ag-accordion-header):hover {
  background: rgba(0, 0, 0, 0.1);
}

.custom-gradient-accordion::part(ag-accordion-indicator) {
  color: white;
  font-weight: bold;
}

.custom-gradient-accordion::part(ag-accordion-content) {
  background: #f9fafb;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 8px;
  border: 2px solid #e5e7eb;
}

/* Minimal style alternative */
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

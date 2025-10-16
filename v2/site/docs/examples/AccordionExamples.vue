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

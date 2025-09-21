<template>
  <div style="padding: 1rem;">
    <h3>Vue Accordion Wrapper Examples</h3>

    <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background-color: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
      💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see toggle events from all Vue accordion examples below.
      <button @click="logEventTip" style="color: var(--agnostic-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
    </p>

    <div v-if="!isReady" style="padding: 1rem; color: #666;">
      Loading Vue Accordion components...
    </div>

    <div v-else>
      <h4>Basic Accordion</h4>
      <VueAccordion style="margin: 1rem 0;">
        <VueAccordionItem :open="false" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>First Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This is the content of the first accordion item. It contains some sample text to demonstrate the accordion functionality.</p>
          </VueAccordionContent>
        </VueAccordionItem>

        <VueAccordionItem :open="true" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>Second Item (Initially Open)</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion item is initially open. You can close it by clicking the header. It demonstrates the <code>open</code> prop functionality.</p>
          </VueAccordionContent>
        </VueAccordionItem>

        <VueAccordionItem :open="false" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>Third Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>Here's another accordion item with different content. Each item operates independently unless you add custom logic.</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>

      <h4>Disabled Accordion Item</h4>
      <VueAccordion style="margin: 1rem 0;">
        <VueAccordionItem :open="false" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>Working Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item works normally and can be toggled.</p>
          </VueAccordionContent>
        </VueAccordionItem>

        <VueAccordionItem :disabled="true" :open="false" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>Disabled Item (Cannot Toggle)</VueAccordionHeader>
          <VueAccordionContent>
            <p>This content should not be accessible since the item is disabled.</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>

      <h4>Different Heading Levels</h4>
      <VueAccordion style="margin: 1rem 0;">
        <VueAccordionItem :open="false" :heading-level="2" @toggle="handleToggle">
          <VueAccordionHeader>H2 Heading Level</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion item uses heading level 2, which affects the semantic HTML structure for accessibility.</p>
          </VueAccordionContent>
        </VueAccordionItem>

        <VueAccordionItem :open="false" :heading-level="4" @toggle="handleToggle">
          <VueAccordionHeader>H4 Heading Level</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion item uses heading level 4. The heading level helps screen readers understand the document structure.</p>
          </VueAccordionContent>
        </VueAccordionItem>

        <VueAccordionItem :open="false" :heading-level="6" @toggle="handleToggle">
          <VueAccordionHeader>H6 Heading Level</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion item uses heading level 6, the smallest heading level available.</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>

      <h4>Rich Content Example</h4>
      <VueAccordion style="margin: 1rem 0;">
        <VueAccordionItem :open="false" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>🚀 Rich Content Item</VueAccordionHeader>
          <VueAccordionContent>
            <div style="padding: 1rem; background-color: var(--c-bg-secondary); border-radius: 4px;">
              <h5 style="margin-top: 0;">Nested Content</h5>
              <p>Accordion content can contain any HTML elements:</p>
              <div style="display: flex; gap: 0.5rem; margin: 1rem 0;">
                <button style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); cursor: pointer;">
                  Button 1
                </button>
                <button style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); cursor: pointer;">
                  Button 2
                </button>
              </div>
              <p><strong>Note:</strong> This demonstrates that accordion content can be complex and interactive.</p>
            </div>
          </VueAccordionContent>
        </VueAccordionItem>

        <VueAccordionItem :open="false" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>📊 Data Table Example</VueAccordionHeader>
          <VueAccordionContent>
            <table style="width: 100%; border-collapse: collapse; margin: 0.5rem 0;">
              <thead>
                <tr style="background-color: var(--c-bg-secondary);">
                  <th style="padding: 0.5rem; border: 1px solid var(--c-border); text-align: left;">Name</th>
                  <th style="padding: 0.5rem; border: 1px solid var(--c-border); text-align: left;">Role</th>
                  <th style="padding: 0.5rem; border: 1px solid var(--c-border); text-align: left;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 0.5rem; border: 1px solid var(--c-border);">Alice Johnson</td>
                  <td style="padding: 0.5rem; border: 1px solid var(--c-border);">Developer</td>
                  <td style="padding: 0.5rem; border: 1px solid var(--c-border);">Active</td>
                </tr>
                <tr>
                  <td style="padding: 0.5rem; border: 1px solid var(--c-border);">Bob Smith</td>
                  <td style="padding: 0.5rem; border: 1px solid var(--c-border);">Designer</td>
                  <td style="padding: 0.5rem; border: 1px solid var(--c-border);">Active</td>
                </tr>
              </tbody>
            </table>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>

      <h4>Accessibility Information</h4>
      <VueAccordion style="margin: 1rem 0;">
        <VueAccordionItem :open="false" :heading-level="3" @toggle="handleToggle">
          <VueAccordionHeader>♿ Keyboard Navigation</VueAccordionHeader>
          <VueAccordionContent>
            <div style="background-color: var(--c-bg-secondary); padding: 1rem; border-radius: 4px;">
              <p><strong>Keyboard Support:</strong></p>
              <ul>
                <li><kbd>Tab</kbd> - Navigate to accordion headers</li>
                <li><kbd>Enter</kbd> or <kbd>Space</kbd> - Toggle accordion panel</li>
                <li><kbd>↓</kbd> - Move focus to next accordion header</li>
                <li><kbd>↑</kbd> - Move focus to previous accordion header</li>
                <li><kbd>Home</kbd> - Move focus to first accordion header</li>
                <li><kbd>End</kbd> - Move focus to last accordion header</li>
              </ul>
              <p><strong>Screen Reader Support:</strong> Proper ARIA attributes ensure accordion state is announced correctly.</p>
            </div>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  VueAccordion,
  VueAccordionItem,
  VueAccordionHeader,
  VueAccordionContent
} from 'agnosticui-core/accordion/vue';

// Import web components to ensure they're registered
import 'agnosticui-core';

const isReady = ref(false);

onMounted(async () => {
  // Wait for web components to be defined before rendering
  try {
    await Promise.all([
      customElements.whenDefined('ag-accordion'),
      customElements.whenDefined('ag-accordion-item'),
    ]);
    console.log('Web components are ready for Vue Accordion wrappers!');
    isReady.value = true;
  } catch (error) {
    console.error('Error waiting for web components:', error);
    // Fall back to rendering anyway after a short delay
    setTimeout(() => {
      isReady.value = true;
    }, 1000);
  }
});

const handleToggle = (detail: { open: boolean }) => {
  // Find the accordion item element to get more context
  const accordionItem = document.activeElement?.closest('ag-accordion-item') as any;
  const headerText = accordionItem?.querySelector('[slot="header"]')?.textContent?.trim() || 'Unknown Item';

  console.log(`Vue Accordion toggled: "${headerText}" - ${detail.open ? 'OPENED' : 'CLOSED'}`, {
    ...detail,
    headerText,
    disabled: accordionItem?.disabled || false,
    headingLevel: accordionItem?.getAttribute('heading-level') || '3',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-accordion-toggle'
  });
};

const logEventTip = () => {
  console.log('🎯 TIP: Expand the logged objects to see how we extract accordion item state, header text, heading level, and other properties from Vue event handlers!');
};
</script>
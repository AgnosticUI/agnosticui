<template>
  <section>
    <div class="mbe4">
      <h3>Basic Collapsible (Default)</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible use-chevron>
        <template #summary>
          <span>Click to expand</span>
        </template>
        <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
      </VueCollapsible>
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
      <VueCollapsible use-x>
        <template #summary>
          <span>X Indicator</span>
        </template>
        <p>Plus transforms into X when opened. This provides a modern, dynamic visual indicator.</p>
      </VueCollapsible>
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
      <VueCollapsible use-minus>
        <template #summary>
          <span>Plus/Minus Indicator</span>
        </template>
        <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>No Indicator</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Collapsible without any visual indicator.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible no-indicator>
        <template #summary>
          <span>No Indicator</span>
        </template>
        <p>Clean header without indicator icon. Minimal design focused on content.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>Indicator Comparison</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Toggle each collapsible to see how the different indicators behave.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        is-bordered
        use-chevron
      >
        <template #summary>
          <span>🔽 Chevron (default) - Rotates 180°</span>
        </template>
        <p>The chevron points down when closed and up when open via rotation.</p>
      </VueCollapsible>

      <VueCollapsible
        is-bordered
        use-x
      >
        <template #summary>
          <span>✖️ X Indicator - Rotates from upside-down plus to X</span>
        </template>
        <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
      </VueCollapsible>

      <VueCollapsible
        is-bordered
        use-minus
      >
        <template #summary>
          <span>➕ Plus/Minus - Swaps icons</span>
        </template>
        <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
      </VueCollapsible>

      <VueCollapsible
        is-bordered
        no-indicator
      >
        <template #summary>
          <span>⚪ No Indicator - Completely hidden</span>
        </template>
        <p>No indicator is shown at all.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>Bordered</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible is-bordered>
        <template #summary>
          <span>Bordered collapsible</span>
        </template>
        <p>This collapsible has a border around it for visual separation.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>With Shadow</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible is-shadow>
        <template #summary>
          <span>Collapsible with shadow</span>
        </template>
        <p>This collapsible has a box-shadow applied for depth.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>Combined Features</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        is-bordered
        is-shadow
      >
        <template #summary>
          <span>Bordered with shadow</span>
        </template>
        <p>This collapsible combines both border and shadow styling for maximum visual impact.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>Open by Default</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        is-bordered
        open
      >
        <template #summary>
          <span>Already expanded</span>
        </template>
        <p>This collapsible starts in an open state using the <code>open</code> prop.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>Rich Content</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        is-bordered
        is-shadow
      >
        <template #summary>
          <div class="flex-inline items-center">
            <Info
              color="var(--ag-primary)"
              :size="18"
              class="mie2"
            />
            <strong>Product Details</strong>
          </div>
        </template>
        <div>
          <h4 style="margin-top: 0;">Technical Specifications</h4>
          <ul>
            <li>Processor: Octa-core 2.8 GHz</li>
            <li>Memory: 8GB RAM</li>
            <li>Storage: 256GB SSD</li>
            <li>Display: 15.6" Full HD</li>
          </ul>
          <p>
            <strong>Warranty:</strong> 2 years manufacturer warranty with optional
            extended coverage available.
          </p>
        </div>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>FAQ Example</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible is-bordered>
        <template #summary>
          <span>What is AgnosticUI?</span>
        </template>
        <p>
          AgnosticUI is a framework-agnostic component library built with web
          components. It works seamlessly with React, Vue, Svelte, Angular, and
          vanilla JavaScript.
        </p>
      </VueCollapsible>

      <VueCollapsible is-bordered>
        <template #summary>
          <span>How do I install it?</span>
        </template>
        <p>You can install AgnosticUI via npm:</p>
        <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
      </VueCollapsible>

      <VueCollapsible is-bordered>
        <template #summary>
          <span>Is it accessible?</span>
        </template>
        <p>
          Yes! All AgnosticUI components are built with accessibility in mind,
          following WAI-ARIA best practices and ensuring keyboard navigation and
          screen reader support.
        </p>
      </VueCollapsible>

      <VueCollapsible is-bordered>
        <template #summary>
          <span>Can I customize the styling?</span>
        </template>
        <p>
          Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
          of component internals while maintaining encapsulation. You can also use
          design tokens for consistent theming across your application.
        </p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>Nested Collapsibles</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible is-bordered>
        <template #summary>
          <span>Level 1 - Main Topic</span>
        </template>
        <div>
          <p>This is the main content area.</p>

          <VueCollapsible
            :is-bordered="true"
            :use-minus="true"
            style="margin-top: 1rem;"
          >
            <template #summary>
              <span>Level 2 - Subtopic A</span>
            </template>
            <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
          </VueCollapsible>

          <VueCollapsible
            :is-bordered="true"
            :use-minus="true"
            style="margin-top: 0.5rem;"
          >
            <template #summary>
              <span>Level 2 - Subtopic B</span>
            </template>
            <p>Nested collapsible content for subtopic B.</p>
          </VueCollapsible>
        </div>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h3>Interactive with Event Handling</h3>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        is-bordered
        is-shadow
        @toggle="handleToggle"
      >
        <template #summary>
          <span>Click to toggle (watch console)</span>
        </template>
        <div>
          <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
        </div>
      </VueCollapsible>
      <p style="margin-top: 1rem;">
        Current state: <strong :style="{ color: isExpanded ? 'green' : 'red' }">{{ isExpanded ? 'Expanded' : 'Collapsed' }}</strong>
      </p>
    </div>

    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible class="custom-gradient">
        <template #summary>
          <span>Gaudy Gradient</span>
        </template>
        <p>This collapsible uses a gradient background with white text and custom styling.</p>
      </VueCollapsible>
    </div>
  </section>
</template>

<script>
import { VueCollapsible } from "agnosticui-core/collapsible/vue";
import { Info } from "lucide-vue-next";

export default {
  name: "CollapsibleExamples",
  components: {
    VueCollapsible,
    Info,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    handleToggle(event) {
      this.isExpanded = event.target.open;
      console.log("Collapsible toggled. New state:", this.isExpanded);
    },
  },
};
</script>

<style scoped>
/* CSS Parts customization examples */
.custom-gradient::part(ag-collapsible-details) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  overflow: hidden;
}

.custom-gradient::part(ag-collapsible-summary) {
  color: white;
  font-weight: 600;
  padding: 1.5rem;
}

.custom-gradient::part(ag-collapsible-indicator) {
  filter: brightness(0) invert(1);
}

.custom-gradient::part(ag-collapsible-content) {
  color: white;
  background: rgba(0, 0, 0, 0.1);
}
</style>

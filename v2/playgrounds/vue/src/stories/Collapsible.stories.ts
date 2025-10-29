import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueCollapsible } from 'agnosticui-core/collapsible/vue';
import type { VueCollapsibleProps } from 'agnosticui-core/collapsible/vue';

const meta: Meta<VueCollapsibleProps> = {
  title: 'AgnosticUI Vue/Collapsible',
  component: VueCollapsible,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the collapsible is expanded or collapsed',
      defaultValue: false,
    },
    isBordered: {
      control: 'boolean',
      description: 'Adds a border around the collapsible',
      defaultValue: false,
    },
    isShadow: {
      control: 'boolean',
      description: 'Applies box-shadow',
      defaultValue: false,
    },
    useChevron: {
      control: 'boolean',
      description: 'Use chevron indicator (default)',
      defaultValue: true,
    },
    useX: {
      control: 'boolean',
      description: 'Use X/plus indicator (rotates from upside-down plus to 45deg X)',
      defaultValue: false,
    },
    useMinus: {
      control: 'boolean',
      description: 'Use plus/minus indicator (swaps icon when toggled)',
      defaultValue: false,
    },
    noIndicator: {
      control: 'boolean',
      description: 'Hide the indicator completely',
      defaultValue: false,
    },
  },
  args: {
    open: false,
    isBordered: false,
    isShadow: false,
    useChevron: true,
    useX: false,
    useMinus: false,
    noIndicator: false,
  } as VueCollapsibleProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <span>Click to expand</span>
        </template>
        <p>This is the collapsible content that can be shown or hidden.</p>
      </VueCollapsible>
    `,
  }),
};

export const Open: Story = {
  args: {
    open: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args" open>
        <template #summary>
          <span>Already expanded</span>
        </template>
        <p>This collapsible starts in an open state.</p>
      </VueCollapsible>
    `,
  }),
};

export const Bordered: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <span>Bordered collapsible</span>
        </template>
        <p>This collapsible has a border around it.</p>
      </VueCollapsible>
    `,
  }),
};

export const Shadow: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <span>Collapsible with shadow</span>
        </template>
        <p>This collapsible has a box-shadow applied.</p>
      </VueCollapsible>
    `,
  }),
};

export const CombinedFeatures: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <span>Bordered with shadow</span>
        </template>
        <p>This collapsible combines both border and shadow styling.</p>
      </VueCollapsible>
    `,
  }),
};

export const ChevronIndicator: Story = {
  args: {
    isBordered: true,
    useChevron: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible :use-chevron="true">
        <template #summary>
          <span>Chevron indicator (default)</span>
        </template>
        <p>This collapsible uses the default chevron indicator that rotates 180° when opened.</p>
      </VueCollapsible>
    `,
  }),
};

export const UseXIndicator: Story = {
  args: {
    isBordered: true,
    useChevron: false,
    useX: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible :use-x="true">
        <template #summary>
          <span>X/Plus indicator</span>
        </template>
        <p>This collapsible uses the X/plus indicator. It starts as an upside-down plus (closed) and rotates to form an X shape (open).</p>
      </VueCollapsible>
    `,
  }),
};

export const UseMinusIndicator: Story = {
  args: {
    isBordered: true,
    useChevron: false,
    useMinus: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible :use-minus="true">
        <template #summary>
          <span>Plus/Minus indicator</span>
        </template>
        <p>This collapsible swaps between a plus icon (closed) and a minus icon (open). No rotation, just icon swap.</p>
      </VueCollapsible>
    `,
  }),
};

export const NoIndicator: Story = {
  args: {
    isBordered: true,
    noIndicator: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <span>No indicator</span>
        </template>
        <p>This collapsible has no indicator icon at all.</p>
      </VueCollapsible>
    `,
  }),
};

export const IndicatorComparison: Story = {
  render: () => ({
    components: { VueCollapsible },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px;">
        <h3 style="margin-top: 0;">Indicator Variants Comparison</h3>
        <p style="color: #6b7280; margin-bottom: 1rem;">
          Toggle each collapsible to see how the different indicators behave.
        </p>

        <VueCollapsible :is-bordered="true" :use-chevron="true">
          <template #summary>
            <span>🔽 Chevron (default) - Rotates 180°</span>
          </template>
          <p>The chevron points down when closed and up when open via rotation.</p>
        </VueCollapsible>

        <VueCollapsible :is-bordered="true" :use-x="true">
          <template #summary>
            <span>✖️ X Indicator - Rotates from upside-down plus to X</span>
          </template>
          <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
        </VueCollapsible>

        <VueCollapsible :is-bordered="true" :use-minus="true">
          <template #summary>
            <span>➕ Plus/Minus - Swaps icons</span>
          </template>
          <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
        </VueCollapsible>

        <VueCollapsible :is-bordered="true" :no-indicator="true">
          <template #summary>
            <span>⚪ No Indicator - Completely hidden</span>
          </template>
          <p>No indicator is shown at all.</p>
        </VueCollapsible>
      </div>
    `,
  }),
};

export const RichContent: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <strong>Product Details</strong>
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
    `,
  }),
};

export const FAQ: Story = {
  render: () => ({
    components: { VueCollapsible },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px;">
        <h3 style="margin-top: 0;">Frequently Asked Questions</h3>

        <VueCollapsible :is-bordered="true">
          <template #summary>
            <span>What is AgnosticUI?</span>
          </template>
          <p>
            AgnosticUI is a framework-agnostic component library built with web
            components. It works seamlessly with React, Vue, Svelte, Angular, and
            vanilla JavaScript.
          </p>
        </VueCollapsible>

        <VueCollapsible :is-bordered="true">
          <template #summary>
            <span>How do I install it?</span>
          </template>
          <p>You can install AgnosticUI via npm:</p>
          <pre style="background: #f3f4f6; padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
        </VueCollapsible>

        <VueCollapsible :is-bordered="true">
          <template #summary>
            <span>Is it accessible?</span>
          </template>
          <p>
            Yes! All AgnosticUI components are built with accessibility in mind,
            following WAI-ARIA best practices and ensuring keyboard navigation and
            screen reader support.
          </p>
        </VueCollapsible>

        <VueCollapsible :is-bordered="true">
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
    `,
  }),
};

export const NestedCollapsibles: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 600px;">
        <VueCollapsible v-bind="args">
          <template #summary>
            <span>Level 1 - Main Topic</span>
          </template>
          <div>
            <p>This is the main content area.</p>

            <VueCollapsible :is-bordered="true" :use-minus="true" style="margin-top: 1rem;">
              <template #summary>
                <span>Level 2 - Subtopic A</span>
              </template>
              <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
            </VueCollapsible>

            <VueCollapsible :is-bordered="true" :use-minus="true" style="margin-top: 0.5rem;">
              <template #summary>
                <span>Level 2 - Subtopic B</span>
              </template>
              <p>Nested collapsible content for subtopic B.</p>
            </VueCollapsible>
          </div>
        </VueCollapsible>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      const isExpanded = ref(false);

      const handleToggle = (e: Event) => {
        // e.target is the underlying <ag-collapsible> element
        const newOpenState = (e.target as HTMLElement & { open: boolean }).open;
        isExpanded.value = newOpenState;
        console.log('Collapsible Toggled. New state:', newOpenState);
      };

      return { args, isExpanded, handleToggle };
    },
    template: `
      <VueCollapsible v-bind="args" @toggle="handleToggle">
        <template #summary>
          <span>Click to toggle (watch console)</span>
        </template>
        <div>
          <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
        </div>
      </VueCollapsible>
      <p styl="margin-top: 2rem;">
        Current isExpanded: <strong :style="{ color: isExpanded ? 'green' : 'red' }">{{ isExpanded }}</strong>
      </p>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueCollapsible },
    setup() {
      const styles = `
        <style>
          /* Gradient style */
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

          /* Minimal style */
          .custom-minimal::part(ag-collapsible-summary) {
            background: #f9fafb;
            border-left: 4px solid #3b82f6;
            padding: 1rem 1rem 1rem 1.5rem;
          }

          .custom-minimal::part(ag-collapsible-content) {
            background: #ffffff;
            padding: 1rem 1rem 1rem 1.5rem;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>

        <div style="padding: 2rem; max-width: 800px;">
          <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
          <p style="margin-bottom: 2rem; color: #6b7280;">
            Collapsible can be customized using CSS Shadow Parts:
            <code>::part(ag-collapsible-details)</code>,
            <code>::part(ag-collapsible-summary)</code>,
            <code>::part(ag-collapsible-indicator)</code>,
            <code>::part(ag-collapsible-content)</code>
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
              <h4>Gradient Style</h4>
              <VueCollapsible class="custom-gradient">
                <template #summary>
                  <span>🎨 Vibrant gradient background</span>
                </template>
                <p>This collapsible uses a gradient background with white text and custom styling.</p>
              </VueCollapsible>
            </div>

            <div>
              <h4>Minimal with Left Accent</h4>
              <VueCollapsible class="custom-minimal" :use-minus="true">
                <template #summary>
                  <span>💡 Clean, minimal design</span>
                </template>
                <p>This style uses a subtle background with a colored left border accent and plus/minus indicators.</p>
              </VueCollapsible>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

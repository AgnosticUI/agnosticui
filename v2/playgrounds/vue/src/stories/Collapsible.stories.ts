import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueCollapsible } from 'agnosticui-core/collapsible/vue';
import type { VueCollapsibleProps } from 'agnosticui-core/collapsible/vue';

const meta = {
  title: 'AgnosticUI Vue/Collapsible',
  component: VueCollapsible,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the collapsible is expanded or collapsed',
      defaultValue: false,
    },
    isSkinned: {
      control: 'boolean',
      description: 'Applies border-radius styling',
      defaultValue: true,
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
  },
  args: {
    isOpen: false,
    isSkinned: true,
    isBordered: false,
    isShadow: false,
  } as VueCollapsibleProps,
} satisfies Meta<typeof VueCollapsible>;

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
    isOpen: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <span>Already expanded</span>
        </template>
        <p>This collapsible starts in an open state.</p>
      </VueCollapsible>
    `,
  }),
};

export const Unskinned: Story = {
  args: {
    isSkinned: false,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      return { args };
    },
    template: `
      <VueCollapsible v-bind="args">
        <template #summary>
          <span>Unskinned collapsible</span>
        </template>
        <p>This collapsible has no border-radius applied.</p>
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

export const CustomIndicator: Story = {
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
          <span>Custom indicator</span>
        </template>
        <template #indicator>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </template>
        <p>This collapsible uses a custom chevron indicator that rotates when opened.</p>
      </VueCollapsible>
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

            <VueCollapsible :is-bordered="true" style="margin-top: 1rem;">
              <template #summary>
                <span>Level 2 - Subtopic A</span>
              </template>
              <p>Nested collapsible content for subtopic A.</p>
            </VueCollapsible>

            <VueCollapsible :is-bordered="true" style="margin-top: 0.5rem;">
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
      const status = ref('Closed');

      const handleToggle = (e: CustomEvent) => {
        console.log('Toggle event:', e.detail);
        status.value = e.detail.isOpen ? 'Open' : 'Closed';
      };

      return { args, status, handleToggle };
    },
    template: `
      <VueCollapsible v-bind="args" @toggle="handleToggle">
        <template #summary>
          <span>Click to toggle (watch console)</span>
        </template>
        <div>
          <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
          <p>
            Current status: <strong :style="{ color: status === 'Open' ? 'green' : 'red' }">{{ status }}</strong>
          </p>
        </div>
      </VueCollapsible>
    `,
  }),
};

export const ControlledComponent: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => ({
    components: { VueCollapsible },
    setup() {
      const isOpen = ref(false);

      const handleToggle = (e: CustomEvent) => {
        isOpen.value = e.detail.isOpen;
      };

      return { args, isOpen, handleToggle };
    },
    template: `
      <div>
        <div style="margin-bottom: 1rem;">
          <button
            @click="isOpen = !isOpen"
            style="padding: 0.5rem 1rem; margin-right: 0.5rem;"
          >
            Toggle Externally
          </button>
          <button
            @click="isOpen = true"
            style="padding: 0.5rem 1rem; margin-right: 0.5rem;"
          >
            Open
          </button>
          <button
            @click="isOpen = false"
            style="padding: 0.5rem 1rem;"
          >
            Close
          </button>
        </div>

        <VueCollapsible
          v-bind="args"
          :is-open="isOpen"
          @toggle="handleToggle"
        >
          <template #summary>
            <span>Controlled collapsible</span>
          </template>
          <p>This collapsible's state is controlled by external buttons and Vue ref.</p>
          <p>Current state: <strong>{{ isOpen ? 'Open' : 'Closed' }}</strong></p>
        </VueCollapsible>
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: (args) => ({
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
            background: var(--ag-background-secondary);
            border-left: 4px solid var(--ag-primary);
            padding: 1rem 1rem 1rem 1.5rem;
          }

          .custom-minimal::part(ag-collapsible-content) {
            background: var(--ag-background-primary);
            padding: 1rem 1rem 1rem 1.5rem;
          }

          /* Card style */
          .custom-card::part(ag-collapsible-details) {
            border: 2px solid var(--ag-border);
            border-radius: 16px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .custom-card::part(ag-collapsible-details):hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }

          .custom-card::part(ag-collapsible-summary) {
            background: var(--ag-background-secondary);
            font-weight: 600;
            font-size: 1.1rem;
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>

        <div style="padding: 50px; max-width: 800px;">
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
              <VueCollapsible class="custom-minimal">
                <template #summary>
                  <span>💡 Clean, minimal design</span>
                </template>
                <p>This style uses a subtle background with a colored left border accent.</p>
              </VueCollapsible>
            </div>

            <div>
              <h4>Elevated Card Style</h4>
              <VueCollapsible class="custom-card">
                <template #summary>
                  <span>📋 Card-style with elevation</span>
                </template>
                <p>This collapsible looks like a card with elevation and hover effects.</p>
              </VueCollapsible>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

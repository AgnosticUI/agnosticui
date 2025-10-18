import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VueBreadcrumb from 'agnosticui-core/breadcrumb/vue';
import type { BreadcrumbItem } from 'agnosticui-core/breadcrumb';

// Define default items for stories
const defaultItems: BreadcrumbItem[] = [
  { label: 'Home', href: 'javascript:void(0)', isCurrent: false },
  { label: 'Category', href: 'javascript:void(0)', isCurrent: false },
  { label: 'Subcategory', href: 'javascript:void(0)', isCurrent: true },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'AgnosticUI Vue/Breadcrumb',
  component: VueBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with label, href, and isCurrent properties',
    },
    type: {
      control: 'select',
      options: ['default', 'slash', 'bullet', 'arrow'],
      description: 'Type of breadcrumb separator',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    onBreadcrumbClick: {
      action: 'breadcrumb-click',
      description: 'Emitted when a breadcrumb item is clicked',
    },
  },
  args: {
    items: defaultItems,
    type: 'default',
    ariaLabel: 'Breadcrumb',
    onBreadcrumbClick: fn(),
  },
} satisfies Meta<typeof VueBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" />
    `,
  }),
};

export const SlashSeparator: Story = {
  args: {
    items: defaultItems,
    type: 'slash',
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" />
    `,
  }),
};

export const BulletSeparator: Story = {
  args: {
    items: defaultItems,
    type: 'bullet',
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" />
    `,
  }),
};

export const ArrowSeparator: Story = {
  args: {
    items: defaultItems,
    type: 'arrow',
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" />
    `,
  }),
};

export const CustomAriaLabel: Story = {
  args: {
    items: defaultItems,
    ariaLabel: 'Custom Breadcrumb Navigation',
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" />
    `,
  }),
};

export const LongBreadcrumb: Story = {
  args: {
    items: [
      { label: 'Home', href: 'javascript:void(0)', isCurrent: false },
      { label: 'Parent Category', href: 'javascript:void(0)', isCurrent: false },
      { label: 'Subcategory Level 1', href: 'javascript:void(0)', isCurrent: false },
      { label: 'Subcategory Level 2', href: 'javascript:void(0)', isCurrent: false },
      { label: 'Current Page', href: 'javascript:void(0)', isCurrent: true },
    ],
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" />
    `,
  }),
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home', href: 'javascript:void(0)', isCurrent: true }],
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" />
    `,
  }),
};

export const Accessible: Story = {
  args: {
    items: defaultItems,
    ariaLabel: 'Accessible Breadcrumb Navigation',
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p id="breadcrumb-description">This is an accessible breadcrumb for screen readers.</p>
        <VueBreadcrumb v-bind="args" aria-describedby="breadcrumb-description" />
      </div>
    `,
  }),
};

export const ClickEvent: Story = {
  args: {
    items: defaultItems,
    onBreadcrumbClick: fn(),
  },
  render: (args) => ({
    components: { VueBreadcrumb },
    setup() {
      return { args };
    },
    template: `
      <VueBreadcrumb v-bind="args" @breadcrumb-click="args.onBreadcrumbClick" />
    `,
  }),
};

// CSS Parts Customization
export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueBreadcrumb },
    setup() {
      return {
        defaultItems,
      };
    },
    template: `
      <style scoped>
        /* Gradient breadcrumb style */
        .custom-gradient-breadcrumb::part(ag-breadcrumb-item-link) {
          color: #667eea;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, transparent 0%, rgba(102, 126, 234, 0.1) 100%);
        }

        .custom-gradient-breadcrumb::part(ag-breadcrumb-item-link):hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }

        .custom-gradient-breadcrumb::part(ag-breadcrumb-item-current) {
          color: #764ba2;
          font-weight: 700;
          padding: 0.5rem 1rem;
        }

        /* Neon glow breadcrumb */
        .custom-neon-breadcrumb::part(ag-breadcrumb-item-link) {
          color: #0ff;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 2px solid transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .custom-neon-breadcrumb::part(ag-breadcrumb-item-link):hover {
          border-color: #0ff;
          box-shadow: 0 0 10px #0ff, inset 0 0 5px rgba(0, 255, 255, 0.2);
          text-shadow: 0 0 5px #0ff;
        }

        .custom-neon-breadcrumb::part(ag-breadcrumb-item-current) {
          color: #0ff;
          font-weight: 700;
          text-shadow: 0 0 8px #0ff;
          padding: 0.5rem 1rem;
        }

        /* Minimalist breadcrumb */
        .custom-minimal-breadcrumb::part(ag-breadcrumb-item-link) {
          color: var(--ag-text-primary);
          font-weight: 500;
          text-decoration: none;
          padding: 0.25rem 0.75rem;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s ease;
        }

        .custom-minimal-breadcrumb::part(ag-breadcrumb-item-link):hover {
          border-bottom-color: var(--ag-primary);
        }

        .custom-minimal-breadcrumb::part(ag-breadcrumb-item-current) {
          color: var(--ag-primary);
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-bottom: 2px solid var(--ag-primary);
        }

        /* Pill-style breadcrumb */
        .custom-pill-breadcrumb::part(ag-breadcrumb-item-link) {
          color: #333;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          background: #e5e7eb;
          transition: all 0.2s ease;
        }

        .custom-pill-breadcrumb::part(ag-breadcrumb-item-link):hover {
          background: #d1d5db;
          transform: scale(1.05);
        }

        .custom-pill-breadcrumb::part(ag-breadcrumb-item-current) {
          color: white;
          font-weight: 700;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }
      </style>

      <div style="padding: 50px; max-width: 800px;">
        <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
        <p style="margin-bottom: 2rem; color: #6b7280;">
          Breadcrumb can be customized using CSS Shadow Parts:
          <code>::part(ag-breadcrumb-item)</code>,
          <code>::part(ag-breadcrumb-item-link)</code>,
          <code>::part(ag-breadcrumb-item-current)</code>
        </p>

        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div>
            <h4>Gradient Style</h4>
            <VueBreadcrumb class="custom-gradient-breadcrumb" :items="defaultItems" />
          </div>

          <div>
            <h4>Neon Glow Effect</h4>
            <VueBreadcrumb class="custom-neon-breadcrumb" :items="defaultItems" />
          </div>

          <div>
            <h4>Minimal with Underline</h4>
            <VueBreadcrumb class="custom-minimal-breadcrumb" :items="defaultItems" />
          </div>

          <div>
            <h4>Pill Style</h4>
            <VueBreadcrumb class="custom-pill-breadcrumb" :items="defaultItems" />
          </div>
        </div>
      </div>
    `,
  }),
};

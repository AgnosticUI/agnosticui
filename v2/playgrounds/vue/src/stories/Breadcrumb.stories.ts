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

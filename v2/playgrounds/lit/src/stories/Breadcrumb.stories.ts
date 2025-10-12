import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/breadcrumb';
import type { BreadcrumbProps, BreadcrumbItem } from 'agnosticui-core/breadcrumb';

const meta: Meta<BreadcrumbProps> = {
  title: 'AgnosticUI Lit/Breadcrumb',
  component: 'ag-breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items to display',
    },
    type: {
      control: 'select',
      options: ['default', 'slash', 'bullet', 'arrow'],
      description: 'Separator style type',
    },
    primary: {
      control: 'boolean',
      description: 'Primary link styling - uses blue primary color',
    },
    ariaLabel: {
      control: 'text',
      description: 'Custom aria-label for the navigation landmark',
    },
  },
  args: {
    type: 'default',
    primary: false,
    ariaLabel: 'Breadcrumb',
    onBreadcrumbClick: fn(),
  },
  parameters: {
    actions: {
      handles: ['breadcrumb-click'],
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbProps>;

const defaultItems: BreadcrumbItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Electronics', href: '#electronics' },
  { label: 'Laptops', current: true },
];

// Default story
export const Default: Story = {
  args: {
    items: defaultItems,
  },
  render: ({ items, type, primary, ariaLabel, onBreadcrumbClick }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
        @breadcrumb-click=${onBreadcrumbClick}
      ></ag-breadcrumb>
    </div>
  `,
};

// Separator type variants
export const TypeDefault: Story = {
  args: {
    items: defaultItems,
    type: 'default',
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

export const TypeSlash: Story = {
  args: {
    items: defaultItems,
    type: 'slash',
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

export const TypeArrow: Story = {
  args: {
    items: defaultItems,
    type: 'arrow',
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

export const TypeBullet: Story = {
  args: {
    items: defaultItems,
    type: 'bullet',
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

// Primary styling
export const Primary: Story = {
  args: {
    items: defaultItems,
    primary: true,
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

// Short breadcrumb
export const Short: Story = {
  args: {
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Products', current: true },
    ],
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

// Long breadcrumb
export const Long: Story = {
  args: {
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Products', href: '#products' },
      { label: 'Electronics', href: '#electronics' },
      { label: 'Computers', href: '#computers' },
      { label: 'Laptops', href: '#laptops' },
      { label: 'Gaming Laptops', href: '#gaming' },
      { label: 'ASUS ROG', current: true },
    ],
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

// Single item
export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Home', current: true },
    ],
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

// Event testing
export const EventTesting: Story = {
  args: {
    items: defaultItems,
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <p style="margin-bottom: 1rem;">Click on any breadcrumb link to test events</p>
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
        @breadcrumb-click=${(e: CustomEvent) => {
          console.log('Breadcrumb click event:', e.detail);
          alert(`Clicked: ${e.detail.item.label} (index: ${e.detail.index})`);
        }}
      ></ag-breadcrumb>
      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
        Check the Actions panel below for event logs
      </p>
    </div>
  `,
};

// Custom ARIA label
export const CustomAriaLabel: Story = {
  args: {
    items: defaultItems,
    ariaLabel: 'Page navigation breadcrumb',
  },
  render: ({ items, type, primary, ariaLabel }) => html`
    <div style="padding: 50px;">
      <p style="margin-bottom: 1rem;">This breadcrumb has a custom aria-label: "${ariaLabel}"</p>
      <ag-breadcrumb
        .items=${items}
        .type=${type}
        .primary=${primary}
        .ariaLabel=${ariaLabel}
      ></ag-breadcrumb>
    </div>
  `,
};

// All separator types comparison
export const AllSeparators: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 50px;">
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Default (›)</p>
        <ag-breadcrumb .items=${defaultItems} type="default"></ag-breadcrumb>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Slash (/)</p>
        <ag-breadcrumb .items=${defaultItems} type="slash"></ag-breadcrumb>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Arrow (→)</p>
        <ag-breadcrumb .items=${defaultItems} type="arrow"></ag-breadcrumb>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Bullet (•)</p>
        <ag-breadcrumb .items=${defaultItems} type="bullet"></ag-breadcrumb>
      </div>
    </div>
  `,
};

// Primary vs Default styling
export const StylingComparison: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 50px;">
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Default Styling</p>
        <ag-breadcrumb .items=${defaultItems}></ag-breadcrumb>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Primary Styling</p>
        <ag-breadcrumb .items=${defaultItems} primary></ag-breadcrumb>
      </div>
    </div>
  `,
};

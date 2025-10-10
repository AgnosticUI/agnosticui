import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactBreadcrumb, type ReactBreadcrumbProps, type BreadcrumbItem } from 'agnosticui-core/breadcrumb/react';

const meta: Meta<ReactBreadcrumbProps> = {
  title: 'AgnosticUI/Breadcrumb',
  component: ReactBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    // Component props
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
      description: 'Primary link styling (blue color)',
    },
    ariaLabel: {
      control: 'text',
      description: 'Custom aria-label for the navigation landmark',
    },

    // Event handlers
    onBreadcrumbClick: {
      action: 'breadcrumb-click',
      description: 'Emitted when a breadcrumb item is clicked',
    },
  },
  args: {
    type: 'default',
    primary: false,
    ariaLabel: 'Breadcrumb',
    onBreadcrumbClick: fn(),
  },
} satisfies Meta<ReactBreadcrumbProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Category', href: '/category' },
  { label: 'Subcategory', href: '/category/subcategory' },
  { label: 'Current Page' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
  render: (args: ReactBreadcrumbProps) => (
    <div style={{ padding: '50px' }}>
      <ReactBreadcrumb {...args} />
    </div>
  ),
};

export const TypeSlash: Story = {
  args: {
    items: sampleItems,
    type: 'slash',
  },
  render: (args: ReactBreadcrumbProps) => (
    <div style={{ padding: '50px' }}>
      <ReactBreadcrumb {...args} />
    </div>
  ),
};

export const TypeBullet: Story = {
  args: {
    items: sampleItems,
    type: 'bullet',
  },
  render: (args: ReactBreadcrumbProps) => (
    <div style={{ padding: '50px' }}>
      <ReactBreadcrumb {...args} />
    </div>
  ),
};

export const TypeArrow: Story = {
  args: {
    items: sampleItems,
    type: 'arrow',
  },
  render: (args: ReactBreadcrumbProps) => (
    <div style={{ padding: '50px' }}>
      <ReactBreadcrumb {...args} />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    items: sampleItems,
    primary: true,
  },
  render: (args: ReactBreadcrumbProps) => (
    <div style={{ padding: '50px' }}>
      <ReactBreadcrumb {...args} />
    </div>
  ),
};

export const ShortPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Current Page' },
    ],
  },
  render: (args: ReactBreadcrumbProps) => (
    <div style={{ padding: '50px' }}>
      <ReactBreadcrumb {...args} />
    </div>
  ),
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { label: 'Gaming Laptops' },
    ],
  },
  render: (args: ReactBreadcrumbProps) => (
    <div style={{ padding: '50px' }}>
      <ReactBreadcrumb {...args} />
    </div>
  ),
};

export const EventTesting: Story = {
  args: {
    items: sampleItems,
  },
  render: (args: ReactBreadcrumbProps) => {
    const [clickCount, setClickCount] = useState(0);
    const [lastClicked, setLastClicked] = useState<string>('None');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '50px', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <p>Click count: {clickCount}</p>
          <p>Last clicked: {lastClicked}</p>
        </div>
        <ReactBreadcrumb
          {...args}
          onBreadcrumbClick={(event) => {
            setClickCount(c => c + 1);
            setLastClicked(event.detail.item.label);
            args.onBreadcrumbClick?.(event);
          }}
        />
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Click on any breadcrumb item to trigger events
        </p>
      </div>
    );
  },
};

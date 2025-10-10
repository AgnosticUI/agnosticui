import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactIconButton, type ReactIconButtonProps } from 'agnosticui-core/icon-button/react';

const meta: Meta<ReactIconButtonProps> = {
  title: 'AgnosticUI/IconButton',
  component: ReactIconButton,
  tags: ['autodocs'],
  argTypes: {
    // Component props
    label: {
      control: 'text',
      description: 'Required accessible name for the button',
    },
    icon: {
      control: 'text',
      description: 'Icon identifier or name (for icon systems)',
    },
    unicode: {
      control: 'text',
      description: 'Unicode symbol for simple icons (×, ☰, etc.)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size variant',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual variant',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    pressed: {
      control: 'boolean',
      description: 'Pressed state for toggle buttons',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },

    // Event handlers
    onIconButtonClick: {
      action: 'icon-button-click',
      description: 'Emitted when the button is clicked',
    },
    onIconButtonActivate: {
      action: 'icon-button-activate',
      description: 'Emitted when the button is activated via keyboard',
    },
  },
  args: {
    label: 'Icon button',
    size: 'md',
    variant: 'ghost',
    type: 'button',
    disabled: false,
    pressed: false,
    loading: false,
    onIconButtonClick: fn(),
    onIconButtonActivate: fn(),
  },
} satisfies Meta<ReactIconButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Close',
    unicode: '×',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'Settings',
    icon: 'settings',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const WithUnicode: Story = {
  args: {
    label: 'Menu',
    unicode: '☰',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const WithCustomSVG: Story = {
  args: {
    label: 'Custom icon',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" />
        </svg>
      </ReactIconButton>
    </div>
  ),
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'xs',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const SizeSM: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'sm',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const SizeMD: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'md',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const SizeLG: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'lg',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const SizeXL: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'xl',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

// Variant stories
export const VariantPrimary: Story = {
  args: {
    label: 'Primary action',
    unicode: '✓',
    variant: 'primary',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const VariantSecondary: Story = {
  args: {
    label: 'Secondary action',
    unicode: '☰',
    variant: 'secondary',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const VariantGhost: Story = {
  args: {
    label: 'Ghost action',
    unicode: '⋯',
    variant: 'ghost',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const VariantDanger: Story = {
  args: {
    label: 'Delete',
    unicode: '×',
    variant: 'danger',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

// State stories
export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    unicode: '×',
    disabled: true,
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const Pressed: Story = {
  args: {
    label: 'Toggle button',
    unicode: '★',
    pressed: true,
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    unicode: '↻',
    loading: true,
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args} />
    </div>
  ),
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: 'Click to test events',
    unicode: '👆',
  },
  render: (args: ReactIconButtonProps) => {
    const [clickCount, setClickCount] = useState(0);
    const [activateCount, setActivateCount] = useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <p>Click count: {clickCount}</p>
          <p>Keyboard activate count: {activateCount}</p>
        </div>
        <ReactIconButton
          {...args}
          onIconButtonClick={(event) => {
            setClickCount(c => c + 1);
            args.onIconButtonClick?.(event);
          }}
          onIconButtonActivate={(event) => {
            setActivateCount(c => c + 1);
            args.onIconButtonActivate?.(event);
          }}
        />
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Click the button or use Space/Enter to trigger events
        </p>
      </div>
    );
  },
};

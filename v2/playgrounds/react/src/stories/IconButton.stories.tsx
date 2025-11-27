import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactIconButton, type ReactIconButtonProps } from 'agnosticui-core/icon-button/react';
import { X, Menu, Check, Star, Shield, MoreVertical, ChevronDown, ArrowRight, RotateCw, Heart } from "lucide-react";
import { ReactIcon } from "agnosticui-core/icon/react";

const meta: Meta<ReactIconButtonProps> = {
  title: 'AgnosticUI React/IconButton',
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
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'Settings',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><Shield /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const WithUnicode: Story = {
  args: {
    label: 'Menu',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><Menu /></ReactIcon>
      </ReactIconButton>
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
        <ReactIcon noFill><Shield /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: 'Close',
    size: 'xs',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const SizeSM: Story = {
  args: {
    label: 'Close',
    size: 'sm',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const SizeMD: Story = {
  args: {
    label: 'Close',
    size: 'md',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const SizeLG: Story = {
  args: {
    label: 'Close',
    size: 'lg',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const SizeXL: Story = {
  args: {
    label: 'Close',
    size: 'xl',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

// Variant stories
export const VariantPrimary: Story = {
  args: {
    label: 'Primary action',
    variant: 'primary',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><Check /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const VariantSecondary: Story = {
  args: {
    label: 'Secondary action',
    variant: 'secondary',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><Menu /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const VariantGhost: Story = {
  args: {
    label: 'Ghost action',
    variant: 'ghost',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><MoreVertical /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const VariantDanger: Story = {
  args: {
    label: 'Delete',
    variant: 'danger',
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

// State stories
export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    disabled: true,
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><X /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const Pressed: Story = {
  args: {
    label: 'Toggle button',
    pressed: true,
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><Star /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true,
  },
  render: (args: ReactIconButtonProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactIconButton {...args}>
        <ReactIcon noFill><RotateCw /></ReactIcon>
      </ReactIconButton>
    </div>
  ),
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: 'Click to test events',
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
        >
          <ReactIcon noFill><Star /></ReactIcon>
        </ReactIconButton>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Click the button or use Space/Enter to trigger events
        </p>
      </div>
    );
  },
};

// CSS Parts customization
export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
        /* Customize icon button using CSS Shadow Parts */
        .custom-icon-btn::part(ag-icon-has-slotted),
        .custom-icon-btn::part(ag-icon-unicode),
        .custom-icon-btn::part(ag-icon) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.5rem;
        }

        .custom-border-btn button {
          border: 3px solid var(--ag-primary) !important;
          border-radius: 50% !important;
        }

        .custom-shadow-btn button {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06) !important;
          transition: box-shadow 0.2s ease !important;
        }

        .custom-shadow-btn button:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05) !important;
        }
      `}</style>

      <div style={{ padding: '50px', maxWidth: '800px' }}>
        <h3 style={{ marginTop: 0 }}>Styled with CSS Shadow Parts</h3>
        <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
          IconButton can be customized using CSS Shadow Parts:
          <code>::part(ag-icon-has-slotted)</code>,
          <code>::part(ag-icon-unicode)</code>,
          <code>::part(ag-icon)</code>, and
          <code>::part(ag-icon-empty-slot)</code>
        </p>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Gradient Icon</h4>
            <ReactIconButton
              className="custom-icon-btn"
              label="Gradient styled"
              size="xl"
            >
              <ReactIcon noFill><Star /></ReactIcon>
            </ReactIconButton>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Custom Border</h4>
            <ReactIconButton
              className="custom-border-btn"
              label="Border styled"
              size="lg"
            >
              <ReactIcon noFill><Heart /></ReactIcon>
            </ReactIconButton>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Custom Shadow</h4>
            <ReactIconButton
              className="custom-shadow-btn"
              label="Shadow styled"
              size="lg"
              variant="primary"
            >
              <ReactIcon noFill><Check /></ReactIcon>
            </ReactIconButton>
          </div>
        </div>
      </div>
    </>
  ),
};

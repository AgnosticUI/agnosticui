import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactToggle, type ReactToggleProps } from 'agnosticui-core/toggle/react';

const meta: Meta<ReactToggleProps> = {
  title: 'AgnosticUI React/Toggle',
  component: ReactToggle,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the toggle',
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'start', 'end', 'bottom'],
      description: 'Label position',
    },
    labelHidden: {
      control: 'boolean',
      description: 'Hide label visually',
    },
    noLabel: {
      control: 'boolean',
      description: 'Remove label completely',
    },
    checked: {
      control: 'boolean',
      description: 'Toggle checked state',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Toggle size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'monochrome'],
      description: 'Toggle color variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle',
    },
    readonly: {
      control: 'boolean',
      description: 'Make toggle read-only',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message text',
    },
    helpText: {
      control: 'text',
      description: 'Helper text',
    },
    onToggleChange: {
      action: 'toggle-change',
      description: 'Emitted when the toggle state changes',
    },
  },
  args: {
    label: 'Toggle Label',
    labelPosition: 'top',
    labelHidden: false,
    noLabel: false,
    checked: false,
    size: 'md',
    variant: 'default',
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    errorMessage: '',
    helpText: '',
    onToggleChange: fn(),
  },
} satisfies Meta<ReactToggleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
  },
  render: (args: ReactToggleProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactToggle {...args} />
    </div>
  ),
};

export const Checked: Story = {
  args: {
    label: 'Enabled feature',
    checked: true,
  },
  render: (args: ReactToggleProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactToggle {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '50px' }}>
      <ReactToggle label="Extra Small" size="xs" />
      <ReactToggle label="Small" size="sm" />
      <ReactToggle label="Medium (default)" size="md" />
      <ReactToggle label="Large" size="lg" />
      <ReactToggle label="Extra Large" size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '50px' }}>
      <ReactToggle label="Default variant" variant="default" checked />
      <ReactToggle label="Success variant" variant="success" checked />
      <ReactToggle label="Warning variant" variant="warning" checked />
      <ReactToggle label="Danger variant" variant="danger" checked />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
  render: (args: ReactToggleProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactToggle {...args} />
    </div>
  ),
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked toggle',
    disabled: true,
    checked: true,
  },
  render: (args: ReactToggleProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactToggle {...args} />
    </div>
  ),
};

export const Readonly: Story = {
  args: {
    label: 'Read-only toggle',
    readonly: true,
    checked: true,
  },
  render: (args: ReactToggleProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactToggle {...args} />
    </div>
  ),
};

export const EventHandling: Story = {
  args: {
    label: 'Toggle to test events',
  },
  render: (args: ReactToggleProps) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '50px',
          gap: '1.5rem',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Event Handling in React</h3>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
            React wrapper uses onToggleChange prop (mapped from toggle-change event)
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Pattern 1: onToggleChange prop */}
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ margin: '0 0 0.75rem 0', fontWeight: 600 }}>
              React Event Pattern
            </p>
            <ReactToggle
              label={args.label || 'Toggle'}
              size={args.size}
              variant="default"
              onToggleChange={(e) => {
                console.log('React onToggleChange:', e.detail);
                args.onToggleChange?.(e);
              }}
            />
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
              Uses onToggleChange prop (automatically mapped by @lit/react)
            </p>
          </div>

          {/* Pattern 2: With state management */}
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ margin: '0 0 0.75rem 0', fontWeight: 600 }}>
              With React State
            </p>
            <ReactToggle
              label="Controlled Toggle"
              size={args.size}
              variant="success"
              checked={false}
              onToggleChange={(e) => {
                console.log('State updated:', e.detail.checked);
                args.onToggleChange?.(e);
              }}
            />
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
              Event detail includes: checked, name, value
            </p>
          </div>

          {/* Pattern 3: Native onClick also available */}
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ margin: '0 0 0.75rem 0', fontWeight: 600 }}>
              Native Events (onClick)
            </p>
            <ReactToggle
              label="With onClick"
              size={args.size}
              variant="danger"
              onClick={(e) => {
                console.log('Native click event:', e);
              }}
              onToggleChange={(e) => {
                console.log('Toggle change event:', e.detail);
                args.onToggleChange?.(e);
              }}
            />
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
              Both onClick and onToggleChange work together
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            margin: 0,
            padding: '1rem',
            background: '#f9fafb',
            borderRadius: '8px',
          }}
        >
          💡 Check the Actions panel below and browser console for event logs
        </p>
      </div>
    );
  },
};

export const CSSPartsCustomization: Story = {
  args: {
    label: 'Customized Toggle',
    checked: true,
  },
  render: (args: ReactToggleProps) => (
    <div>
      <style>{`
        .custom-toggle::part(ag-toggle-button) {
          border: 2px solid #bada55;
          border-radius: 9999px;
        }
        .custom-toggle::part(ag-toggle-track) {
          background-color: #f0f0f0;
        }
        .custom-toggle::part(ag-toggle-handle) {
          background-color: #bada55;
          border: 2px solid #fff;
          box-shadow: 0 0 5px #bada55;
        }
        .custom-toggle[checked]::part(ag-toggle-track) {
          background-color: #bada55;
        }
        .custom-toggle[checked]::part(ag-toggle-handle) {
          background-color: #fff;
        }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <ReactToggle {...args} className="custom-toggle" />
      </div>
    </div>
  ),
};

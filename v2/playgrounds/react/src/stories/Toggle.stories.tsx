import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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
      options: ['default', 'success', 'warning', 'danger'],
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
    onToggleChange: {
      action: 'toggle-change',
      description: 'Emitted when the toggle state changes',
    },
  },
  args: {
    label: 'Toggle Label',
    checked: false,
    size: 'md',
    variant: 'default',
    disabled: false,
    readonly: false,
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

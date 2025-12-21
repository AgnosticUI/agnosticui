import type { Meta, StoryObj } from '@storybook/react';
import { ReactSpinner, type ReactSpinnerProps } from 'agnosticui-core/spinner/react';

const meta: Meta<ReactSpinnerProps> = {
  title: 'AgnosticUI React/Spinner',
  component: ReactSpinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'xlarge'],
      description: 'Spinner size',
    },
    ariaLabel: { control: 'text', description: 'Screen reader text' },
  },
  args: {
    size: 'default',
    ariaLabel: 'Loading...',
  },
} satisfies Meta<ReactSpinnerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ReactSpinnerProps) => <ReactSpinner {...args} />,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args: ReactSpinnerProps) => <ReactSpinner {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args: ReactSpinnerProps) => <ReactSpinner {...args} />,
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
  },
  render: (args: ReactSpinnerProps) => <ReactSpinner {...args} />,
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <ReactSpinner size="small" />
        <span style={{ fontSize: '0.875rem', color: 'var(--ag-gray-dark)' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <ReactSpinner size="default" />
        <span style={{ fontSize: '0.875rem', color: 'var(--ag-gray-dark)' }}>Default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <ReactSpinner size="large" />
        <span style={{ fontSize: '0.875rem', color: 'var(--ag-gray-dark)' }}>Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <ReactSpinner size="xlarge" />
        <span style={{ fontSize: '0.875rem', color: 'var(--ag-gray-dark)' }}>XLarge</span>
      </div>
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <>
      <style>{`
        .custom-spinner {
          --spinner-color: var(--ag-primary);
        }
      `}</style>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <ReactSpinner className="custom-spinner" />
      </div>
    </>
  ),
};

export const CustomLabel: Story = {
  args: {
    ariaLabel: 'Processing your request...',
  },
  render: (args: ReactSpinnerProps) => <ReactSpinner {...args} />,
};

export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
        .custom-spinner::part(ag-spinner) {
          transform: scale(2);
        }
      `}</style>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
        <ReactSpinner className="custom-spinner" />
      </div>
    </>
  ),
};

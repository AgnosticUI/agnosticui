import type { Meta, StoryObj } from '@storybook/react';
import { ReactLoader, type ReactLoaderProps } from 'agnosticui-core/loader/react';

const meta: Meta<ReactLoaderProps> = {
  title: 'AgnosticUI React/Loader',
  component: ReactLoader,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Loader size',
    },
    ariaLabel: { control: 'text', description: 'Screen reader text' },
  },
  args: {
    size: 'default',
    ariaLabel: 'Loading...',
  },
} satisfies Meta<ReactLoaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ReactLoaderProps) => <ReactLoader {...args} />,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args: ReactLoaderProps) => <ReactLoader {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args: ReactLoaderProps) => <ReactLoader {...args} />,
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <ReactLoader size="small" />
        <span style={{ fontSize: '0.875rem', color: 'var(--ag-gray-dark)' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <ReactLoader size="default" />
        <span style={{ fontSize: '0.875rem', color: 'var(--ag-gray-dark)' }}>Default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <ReactLoader size="large" />
        <span style={{ fontSize: '0.875rem', color: 'var(--ag-gray-dark)' }}>Large</span>
      </div>
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <>
      <style>{`
        .custom-loader {
          --loading-color: var(--ag-primary);
        }
      `}</style>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <ReactLoader className="custom-loader" />
      </div>
    </>
  ),
};

// Note the label is not visually shown but is available for screen readers
export const CustomLabel: Story = {
  args: {
    ariaLabel: 'Processing your request...',
  },
  render: (args: ReactLoaderProps) => <ReactLoader {...args} />,
};

export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
        .custom-loader::part(ag-loader) {
          transform: scale(2);
        }
      `}</style>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
        <ReactLoader className="custom-loader" />
      </div>
    </>
  ),
};

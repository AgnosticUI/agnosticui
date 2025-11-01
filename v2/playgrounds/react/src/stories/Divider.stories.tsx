import type { Meta, StoryObj } from '@storybook/react';
import { ReactDivider, type ReactDividerProps } from 'agnosticui-core/divider/react';

const meta: Meta<ReactDividerProps> = {
  title: 'AgnosticUI React/Divider',
  component: ReactDivider,
  argTypes: {
    vertical: { control: 'boolean', description: 'Vertical orientation' },
    justify: {
      control: 'select',
      options: ['center', 'start', 'end'],
      description: 'Content justification (horizontal only)',
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'large', 'xlarge'],
      description: 'Divider thickness',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'error'],
      description: 'Color variant',
    },
  },
  args: {
    vertical: false,
    justify: 'center',
    size: 'default',
    variant: 'default',
  },
} satisfies Meta<ReactDividerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ReactDividerProps) => <ReactDivider {...args} />,
};

export const HorizontalBasic: Story = {
  render: () => (
    <div>
      <p>Content above divider</p>
      <ReactDivider />
      <p>Content below divider</p>
    </div>
  ),
};

export const HorizontalWithContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <ReactDivider>Centered (default)</ReactDivider>
      <ReactDivider justify="start">Justify Start</ReactDivider>
      <ReactDivider justify="end">Justify End</ReactDivider>
    </div>
  ),
};

export const VerticalBasic: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: '200px' }}>
      <p style={{ flex: 1 }}>Left content</p>
      <ReactDivider vertical />
      <p style={{ flex: 1 }}>Right content</p>
    </div>
  ),
};

export const VerticalWithContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', minHeight: '200px' }}>
      <p style={{ flex: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ReactDivider vertical>Yes</ReactDivider>
      <p style={{ flex: 1 }}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </p>
      <ReactDivider vertical>Sir!</ReactDivider>
      <p style={{ flex: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  ),
};

export const SizesHorizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <ReactDivider size="small">Small</ReactDivider>
      <ReactDivider size="default">Default</ReactDivider>
      <ReactDivider size="large">Large</ReactDivider>
      <ReactDivider size="xlarge">XLarge</ReactDivider>
    </div>
  ),
};

export const SizesVertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', minHeight: '150px' }}>
      <p style={{ flex: 1 }}>Content</p>
      <ReactDivider vertical size="small">Sm</ReactDivider>
      <p style={{ flex: 1 }}>Content</p>
      <ReactDivider vertical size="default">Def</ReactDivider>
      <p style={{ flex: 1 }}>Content</p>
      <ReactDivider vertical size="large">Lg</ReactDivider>
      <p style={{ flex: 1 }}>Content</p>
      <ReactDivider vertical size="xlarge">XL</ReactDivider>
      <p style={{ flex: 1 }}>Content</p>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <ReactDivider variant="default">Default</ReactDivider>
      <ReactDivider variant="success">Success</ReactDivider>
      <ReactDivider variant="info">Info</ReactDivider>
      <ReactDivider variant="warning">Warning</ReactDivider>
      <ReactDivider variant="error">Error</ReactDivider>
    </div>
  ),
};

export const CustomizedWithCSSParts: Story = {
  render: () => (
    <>
      <style>{`
        .custom-divider::part(ag-divider)::before,
        .custom-divider::part(ag-divider)::after {
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          height: 4px;
        }

        .custom-divider::part(ag-divider-content) {
          color: #667eea;
          font-weight: 700;
          font-size: 1.125rem;
        }

        .custom-dotted::part(ag-divider)::before,
        .custom-dotted::part(ag-divider)::after {
          background: repeating-linear-gradient(
            90deg,
            #10b981 0,
            #10b981 10px,
            transparent 10px,
            transparent 20px
          );
          height: 3px;
        }

        .custom-vertical::part(ag-divider)::before,
        .custom-vertical::part(ag-divider)::after {
          background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
          width: 6px;
        }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem' }}>
        <ReactDivider className="custom-divider">Gradient Divider</ReactDivider>
        <ReactDivider className="custom-dotted">Dotted Pattern</ReactDivider>
        <div style={{ display: 'flex', minHeight: '150px' }}>
          <p style={{ flex: 1 }}>Custom vertical gradient divider</p>
          <ReactDivider className="custom-vertical" vertical>Custom</ReactDivider>
          <p style={{ flex: 1 }}>Styled with CSS Shadow Parts</p>
        </div>
      </div>
    </>
  ),
};

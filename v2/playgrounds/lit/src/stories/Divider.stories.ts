import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/divider';
import type { DividerProps } from 'agnosticui-core/divider';

const meta: Meta<DividerProps> = {
  title: 'AgnosticUI Lit/Divider',
  component: 'ag-divider',
  argTypes: {
    isVertical: { control: 'boolean', description: 'Vertical orientation' },
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
    isVertical: false,
    justify: 'center',
    size: 'default',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Default: Story = {
  render: ({ isVertical, justify, size, variant }) => html`
    <ag-divider
      ?is-vertical=${isVertical}
      justify=${justify}
      size=${size}
      variant=${variant}
    ></ag-divider>
  `,
};

export const HorizontalBasic: Story = {
  render: () => html`
    <div>
      <p>Content above divider</p>
      <ag-divider></ag-divider>
      <p>Content below divider</p>
    </div>
  `,
};

export const HorizontalWithContent: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <ag-divider>Centered (default)</ag-divider>
      <ag-divider justify="start">Justify Start</ag-divider>
      <ag-divider justify="end">Justify End</ag-divider>
    </div>
  `,
};

export const VerticalBasic: Story = {
  render: () => html`
    <div style="display: flex; min-height: 200px;">
      <p style="flex: 1;">Left content</p>
      <ag-divider is-vertical></ag-divider>
      <p style="flex: 1;">Right content</p>
    </div>
  `,
};

export const VerticalWithContent: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; min-height: 200px;">
      <p style="flex: 1;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ag-divider is-vertical>Yes</ag-divider>
      <p style="flex: 1;">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </p>
      <ag-divider is-vertical>Sir!</ag-divider>
      <p style="flex: 1;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  `,
};

export const SizesHorizontal: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <ag-divider size="small">Small</ag-divider>
      <ag-divider size="default">Default</ag-divider>
      <ag-divider size="large">Large</ag-divider>
      <ag-divider size="xlarge">XLarge</ag-divider>
    </div>
  `,
};

export const SizesVertical: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; min-height: 150px;">
      <p style="flex: 1;">Content</p>
      <ag-divider is-vertical size="small">Sm</ag-divider>
      <p style="flex: 1;">Content</p>
      <ag-divider is-vertical size="default">Def</ag-divider>
      <p style="flex: 1;">Content</p>
      <ag-divider is-vertical size="large">Lg</ag-divider>
      <p style="flex: 1;">Content</p>
      <ag-divider is-vertical size="xlarge">XL</ag-divider>
      <p style="flex: 1;">Content</p>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <ag-divider variant="default">Default</ag-divider>
      <ag-divider variant="success">Success</ag-divider>
      <ag-divider variant="info">Info</ag-divider>
      <ag-divider variant="warning">Warning</ag-divider>
      <ag-divider variant="error">Error</ag-divider>
    </div>
  `,
};

export const CustomizedWithCSSParts: Story = {
  render: () => html`
    <style>
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
    </style>
    <div style="display: flex; flex-direction: column; gap: 3rem; padding: 2rem;">
      <ag-divider class="custom-divider">Gradient Divider</ag-divider>
      <ag-divider class="custom-dotted">Dotted Pattern</ag-divider>
      <div style="display: flex; min-height: 150px;">
        <p style="flex: 1;">Custom vertical gradient divider</p>
        <ag-divider class="custom-vertical" is-vertical>Custom</ag-divider>
        <p style="flex: 1;">Styled with CSS Shadow Parts</p>
      </div>
    </div>
  `,
};

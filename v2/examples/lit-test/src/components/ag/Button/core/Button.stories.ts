import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Button';

const meta: Meta = {
  title: 'AgnosticUI/Button',
  component: 'ag-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
    },
    bordered: { control: 'boolean' },
    ghost: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: '',
    size: 'md',
    shape: '',
    bordered: false,
    ghost: false,
    disabled: false,
    loading: false,
    label: 'Button',
  },
  render: (args: any) => html`
    <ag-button
      variant=${args.variant}
      size=${args.size}
      shape=${args.shape}
      ?bordered=${args.bordered}
      ?ghost=${args.ghost}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >${args.label}</ag-button>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variants: Story = {
  render: () => html`
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <ag-button>Default</ag-button>
      <ag-button variant="primary">Primary</ag-button>
      <ag-button variant="secondary">Secondary</ag-button>
      <ag-button variant="success">Success</ag-button>
      <ag-button variant="warning">Warning</ag-button>
      <ag-button variant="danger">Danger</ag-button>
      <ag-button variant="monochrome">Monochrome</ag-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <ag-button size="x-sm">x-sm</ag-button>
      <ag-button size="sm">sm</ag-button>
      <ag-button size="md">md</ag-button>
      <ag-button size="lg">lg</ag-button>
      <ag-button size="xl">xl</ag-button>
    </div>
  `,
};

export const Bordered: Story = {
  render: () => html`
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <ag-button bordered>Default</ag-button>
      <ag-button variant="primary" bordered>Primary</ag-button>
      <ag-button variant="success" bordered>Success</ag-button>
      <ag-button variant="danger" bordered>Danger</ag-button>
    </div>
  `,
};

export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
export const Loading: Story = { args: { variant: 'primary', loading: true } };

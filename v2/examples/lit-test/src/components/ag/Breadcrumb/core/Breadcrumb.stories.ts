import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Breadcrumb';

const ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#products' },
  { label: 'Electronics', href: '#electronics' },
  { label: 'Laptops', current: true },
];

const meta: Meta = {
  title: 'AgnosticUI/Breadcrumb',
  component: 'ag-breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'slash', 'bullet', 'arrow'] },
    primary: { control: 'boolean' },
  },
  args: {
    type: 'default',
    primary: false,
  },
  render: (args: any) => html`
    <ag-breadcrumb
      .items=${ITEMS}
      .type=${args.type}
      ?primary=${args.primary}
    ></ag-breadcrumb>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Slash: Story = { args: { type: 'slash' } };
export const Arrow: Story = { args: { type: 'arrow' } };
export const Bullet: Story = { args: { type: 'bullet' } };

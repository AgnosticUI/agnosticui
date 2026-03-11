import type { Meta, StoryObj } from '@storybook/react';
import { ReactButton } from './ReactButton';

const meta = {
  title: 'AgnosticUI/Button',
  component: ReactButton,
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
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof ReactButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <ReactButton>Default</ReactButton>
      <ReactButton variant="primary">Primary</ReactButton>
      <ReactButton variant="secondary">Secondary</ReactButton>
      <ReactButton variant="success">Success</ReactButton>
      <ReactButton variant="warning">Warning</ReactButton>
      <ReactButton variant="danger">Danger</ReactButton>
      <ReactButton variant="monochrome">Monochrome</ReactButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <ReactButton size="x-sm">x-sm</ReactButton>
      <ReactButton size="sm">sm</ReactButton>
      <ReactButton size="md">md</ReactButton>
      <ReactButton size="lg">lg</ReactButton>
      <ReactButton size="xl">xl</ReactButton>
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <ReactButton bordered>Default</ReactButton>
      <ReactButton variant="primary" bordered>Primary</ReactButton>
      <ReactButton variant="success" bordered>Success</ReactButton>
      <ReactButton variant="danger" bordered>Danger</ReactButton>
    </div>
  ),
};

export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
export const Loading: Story = { args: { variant: 'primary', loading: true } };


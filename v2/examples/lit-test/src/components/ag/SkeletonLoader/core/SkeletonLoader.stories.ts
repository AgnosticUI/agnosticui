import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './SkeletonLoader';

const meta: Meta = {
  title: 'AgnosticUI/SkeletonLoader',
  component: 'ag-skeleton-loader',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'avatar', 'button', 'card', 'custom'],
    },
    effect: {
      control: 'select',
      options: ['shimmer', 'pulse', 'none'],
    },
  },
  render: (args: any) => html`<ag-skeleton-loader></ag-skeleton-loader>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

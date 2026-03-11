import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ProgressRing';

const meta: Meta = {
  title: 'AgnosticUI/ProgressRing',
  component: 'ag-progress-ring',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'info'] },
    label: { control: 'text' },
  },
  args: {
    value: 65,
    size: 'medium',
    variant: 'primary',
    label: 'Progress',
  },
  render: (args: any) => html`
    <ag-progress-ring
      .value=${args.value}
      .size=${args.size}
      .variant=${args.variant}
      .label=${args.label}
    ></ag-progress-ring>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center;">
      <ag-progress-ring .value=${65} size="medium" variant="primary" label="Primary"></ag-progress-ring>
      <ag-progress-ring .value=${80} size="medium" variant="success" label="Success"></ag-progress-ring>
      <ag-progress-ring .value=${45} size="medium" variant="warning" label="Warning"></ag-progress-ring>
      <ag-progress-ring .value=${30} size="medium" variant="danger" label="Danger"></ag-progress-ring>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <ag-progress-ring .value=${65} size="small" variant="primary" label="Small"></ag-progress-ring>
      <ag-progress-ring .value=${65} size="medium" variant="primary" label="Medium"></ag-progress-ring>
      <ag-progress-ring .value=${65} size="large" variant="primary" label="Large"></ag-progress-ring>
    </div>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/progress';
import type { ProgressProps } from 'agnosticui-core/progress';

const meta: Meta<ProgressProps> = {
  title: 'AgnosticUI Lit/Progress',
  component: 'ag-progress',
  argTypes: {
    value: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    value: undefined,
    max: 100,
    label: 'Default progress',
  },
};

export default meta;
type Story = StoryObj<ProgressProps>;

export const Default: Story = {
  args: {
    label: 'Default progress',
  },
  render: (args) => html`
    <ag-progress
      .value=${args.value}
      .max=${args.max}
      .label=${args.label}
    ></ag-progress>
  `,
};

export const WithValue: Story = {
  args: {
    label: 'Progress with value',
    value: 50,
  },
  render: (args) => html`
    <ag-progress
      .value=${args.value}
      .max=${args.max}
      .label=${args.label}
    ></ag-progress>
  `,
};

export const CustomMax: Story = {
  args: {
    label: 'Progress with custom max',
    value: 150,
    max: 200,
  },
  render: (args) => html`
    <ag-progress
      .value=${args.value}
      .max=${args.max}
      .label=${args.label}
    ></ag-progress>
  `,
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate progress',
  },
  render: (args) => html`
    <ag-progress
      .label=${args.label}
    ></ag-progress>
  `,
};

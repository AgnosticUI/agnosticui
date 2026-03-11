import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Progress';

const meta: Meta = {
  title: 'AgnosticUI/Progress',
  component: 'ag-progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number' } },
    label: { control: 'text' },
  },
  args: {
    value: 60,
    max: 100,
    label: 'Loading progress',
  },
  render: (args: any) => html`
    <ag-progress
      .value=${args.value}
      .max=${args.max}
      .label=${args.label}
    ></ag-progress>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
      <ag-progress .value=${25} .max=${100} .label=${'25%'}></ag-progress>
      <ag-progress .value=${50} .max=${100} .label=${'50%'}></ag-progress>
      <ag-progress .value=${75} .max=${100} .label=${'75%'}></ag-progress>
      <ag-progress .value=${100} .max=${100} .label=${'Complete'}></ag-progress>
    </div>
  `,
};

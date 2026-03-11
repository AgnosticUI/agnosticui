import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Slider';

const meta: Meta = {
  title: 'AgnosticUI/Slider',
  component: 'ag-slider',
  tags: ['autodocs'],
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
  },
  render: (args: any) => html`<ag-slider></ag-slider>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Fieldset';
import '../../Input/core/Input';

const meta: Meta = {
  title: 'AgnosticUI/Fieldset',
  component: 'ag-fieldset',
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text' },
    bordered: { control: 'boolean' },
    layout: { control: 'select', options: ['vertical', 'horizontal'] },
  },
  args: { legend: 'Personal Information', bordered: false, layout: 'vertical' },
  render: (args: any) => html`
    <ag-fieldset
      .legend=${args.legend}
      ?bordered=${args.bordered}
      .layout=${args.layout}
    >
      <ag-input id="first-name" name="first-name" label="First Name" placeholder="Jane"></ag-input>
      <ag-input id="last-name" name="last-name" label="Last Name" placeholder="Doe"></ag-input>
      <ag-input id="email" name="email" label="Email" type="email" placeholder="jane@example.com"></ag-input>
    </ag-fieldset>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Bordered: Story = { args: { bordered: true } };

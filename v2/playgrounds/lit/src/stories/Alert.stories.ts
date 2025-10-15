
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/alert';
import type { AlertProps } from 'agnosticui-core/alert';

const meta: Meta<AlertProps> = {
  title: 'AgnosticUI/Alert',
  component: 'ag-alert',
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'info', 'danger', 'warning', 'error'],
    },
    bordered: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    borderedLeft: {
      control: 'boolean',
    },
  },
  args: {
    type: 'info',
    bordered: false,
    rounded: false,
    borderedLeft: false,
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Default: Story = {
  args: {
    type: 'info',
  },
  render: ({ type, bordered, rounded, borderedLeft }) => html`
    <ag-alert
      .type=${type}
      .bordered=${bordered}
      .rounded=${rounded}
      .borderedLeft=${borderedLeft}
    >
      This is a default alert.
    </ag-alert>
  `,
};

export const Info: Story = {
  args: {
    type: 'info',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is an info alert.</ag-alert>`,
};

export const Success: Story = {
  args: {
    type: 'success',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is a success alert.</ag-alert>`,
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is a warning alert.</ag-alert>`,
};

export const Error: Story = {
  args: {
    type: 'error',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is an error alert.</ag-alert>`,
};

export const Primary: Story = {
  args: {
    type: 'primary',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is a primary alert.</ag-alert>`,
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: ({ bordered }) => html`<ag-alert .bordered=${bordered}>This is a bordered alert.</ag-alert>`,
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: ({ rounded }) => html`<ag-alert .rounded=${rounded}>This is a rounded alert.</ag-alert>`,
};

export const BorderedLeft: Story = {
  args: {
    borderedLeft: true,
    type: 'warning', // To make the left border visible
  },
  render: ({ borderedLeft, type }) => html`<ag-alert .borderedLeft=${borderedLeft} .type=${type}>This alert has a left border.</ag-alert>`,
};

export const AllModifiers: Story = {
  args: {
    type: 'success',
    bordered: true,
    rounded: true,
    borderedLeft: true,
  },
  render: ({ type, bordered, rounded, borderedLeft }) => html`
    <ag-alert
      .type=${type}
      .bordered=${bordered}
      .rounded=${rounded}
      .borderedLeft=${borderedLeft}
    >
      This alert has all modifiers applied.
    </ag-alert>
  `,
};

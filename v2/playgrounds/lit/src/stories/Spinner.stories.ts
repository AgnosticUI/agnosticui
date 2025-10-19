import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/spinner';
import type { SpinnerProps } from 'agnosticui-core/spinner';

const meta: Meta<SpinnerProps> = {
  title: 'AgnosticUI Lit/Spinner',
  component: 'ag-spinner',
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'xlarge'],
      description: 'Spinner size',
    },
    ariaLabel: { control: 'text', description: 'Screen reader text' },
  },
  args: {
    size: 'default',
    ariaLabel: 'Loading...',
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  render: (args) => html`
    <ag-spinner
      .size=${args.size}
      .ariaLabel=${args.ariaLabel}
    ></ag-spinner>
  `,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => html`
    <ag-spinner
      .size=${args.size}
      .ariaLabel=${args.ariaLabel}
    ></ag-spinner>
  `,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => html`
    <ag-spinner
      .size=${args.size}
      .ariaLabel=${args.ariaLabel}
    ></ag-spinner>
  `,
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
  },
  render: (args) => html`
    <ag-spinner
      .size=${args.size}
      .ariaLabel=${args.ariaLabel}
    ></ag-spinner>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ag-spinner .size=${'small'}></ag-spinner>
        <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Small</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ag-spinner .size=${'default'}></ag-spinner>
        <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Default</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ag-spinner .size=${'large'}></ag-spinner>
        <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Large</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ag-spinner .size=${'xlarge'}></ag-spinner>
        <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">XLarge</span>
      </div>
    </div>
  `,
};

export const CustomColor: Story = {
  render: () => html`
    <style>
      .custom-spinner {
        --spinner-color: var(--ag-primary);
      }
    </style>
    <div style="display: flex; gap: 2rem; align-items: center;">
      <ag-spinner class="custom-spinner"></ag-spinner>
    </div>
  `,
};

export const CustomLabel: Story = {
  args: {
    ariaLabel: 'Processing your request...',
  },
  render: (args) => html`
    <ag-spinner .ariaLabel=${args.ariaLabel}></ag-spinner>
  `,
};

export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      .custom-spinner::part(ag-spinner) {
        transform: scale(2);
      }
    </style>
    <div style="display: flex; gap: 2rem; align-items: center; padding: 2rem;">
      <ag-spinner class="custom-spinner"></ag-spinner>
    </div>
  `,
};

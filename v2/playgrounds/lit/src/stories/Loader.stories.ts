import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/loader';
import type { LoaderProps } from 'agnosticui-core/loader';

const meta: Meta<LoaderProps> = {
  title: 'AgnosticUI Lit/Loader',
  component: 'ag-loader',
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Loader size',
    },
    ariaLabel: { control: 'text', description: 'Screen reader text' },
  },
  args: {
    size: 'default',
    ariaLabel: 'Loading...',
  },
};

export default meta;
type Story = StoryObj<LoaderProps>;

export const Default: Story = {
  render: (args) => html`
    <ag-loader
      .size=${args.size}
      .ariaLabel=${args.ariaLabel}
    ></ag-loader>
  `,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => html`
    <ag-loader
      .size=${args.size}
      .ariaLabel=${args.ariaLabel}
    ></ag-loader>
  `,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => html`
    <ag-loader
      .size=${args.size}
      .ariaLabel=${args.ariaLabel}
    ></ag-loader>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ag-loader .size=${'small'}></ag-loader>
        <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Small</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ag-loader .size=${'default'}></ag-loader>
        <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Default</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ag-loader .size=${'large'}></ag-loader>
        <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Large</span>
      </div>
    </div>
  `,
};

export const CustomColor: Story = {
  render: () => html`
    <style>
      .custom-loader {
        --loading-color: var(--ag-primary);
      }
    </style>
    <div style="display: flex; gap: 2rem; align-items: center;">
      <ag-loader class="custom-loader"></ag-loader>
    </div>
  `,
};

export const CustomLabel: Story = {
  args: {
    ariaLabel: 'Processing your request...',
  },
  render: (args) => html`
    <ag-loader .ariaLabel=${args.ariaLabel}></ag-loader>
  `,
};

export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      .custom-loader::part(ag-loader) {
        transform: scale(2);
      }
    </style>
    <div style="display: flex; gap: 2rem; align-items: center; padding: 2rem;">
      <ag-loader class="custom-loader"></ag-loader>
    </div>
  `,
};

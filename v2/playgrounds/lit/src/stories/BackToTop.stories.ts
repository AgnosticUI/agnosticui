import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/back-to-top';
import type { BackToTopProps } from 'agnosticui-core/back-to-top';

const meta: Meta<BackToTopProps> = {
  title: 'AgnosticUI Lit/BackToTop',
  component: 'ag-back-to-top',
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Manually controls visibility (mostly for debugging)',
    },
    threshold: {
      control: 'number',
      description: 'Scroll threshold in pixels before showing the button',
    },
  },
  args: {
    threshold: 400,
  },
};

export default meta;
type Story = StoryObj<BackToTopProps>;

export const Default: Story = {
  render: (args) => html`
    <div style="min-height: 200vh; padding: 20px;">
      <h1>Scroll down to see the BackToTop button</h1>
      <p>The button will appear after scrolling ${args.threshold}px.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      ${Array.from({ length: 20 }).map(() => html`<p style="margin-bottom: 50px;">Scroll more...</p>`)}
      <ag-back-to-top .threshold="${args.threshold}"></ag-back-to-top>
    </div>
  `,
};

export const CustomContent: Story = {
  render: (args) => html`
    <div style="min-height: 200vh; padding: 20px;">
      <h1>BackToTop with Custom Content</h1>
      <p>The button will appear after scrolling ${args.threshold}px. This time with custom text.</p>
      ${Array.from({ length: 20 }).map(() => html`<p style="margin-bottom: 50px;">Scroll more...</p>`)}
      <ag-back-to-top .threshold="${args.threshold}">
        <span>GO UP!</span>
      </ag-back-to-top>
    </div>
  `,
  args: {
    threshold: 400,
  },
};

export const CSSPartsCustomization: Story = {
  render: (args) => html`
    <style>
      ag-back-to-top.custom-button::part(ag-backtotop-button) {
        background-color: var(--ag-success);
        border-color: var(--ag-primary-dark);
        color: var(--ag-light);
        font-weight: bold;
        padding: var(--ag-space-4);
        border-radius: var(--ag-radius-xl);
      }
    </style>
    <div style="min-height: 200vh; padding: 20px;">
      <h1>Customized BackToTop Button</h1>
      <p>The button will appear after scrolling ${args.threshold}px and will be custom styled.</p>
      ${Array.from({ length: 20 }).map(() => html`<p style="margin-bottom: 50px;">Scroll more...</p>`)}
      <ag-back-to-top class="custom-button" .threshold="${args.threshold}"></ag-back-to-top>
    </div>
  `,
  args: {
    threshold: 400,
  },
};
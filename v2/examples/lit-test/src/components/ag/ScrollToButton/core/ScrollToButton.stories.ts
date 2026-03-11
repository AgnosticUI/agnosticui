import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ScrollToButton';

const meta: Meta = {
  title: 'AgnosticUI/ScrollToButton',
  component: 'ag-scroll-to-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    target: { control: 'select', options: ['top', 'bottom'] },
    scrollThreshold: { control: 'number' },
    smoothScroll: { control: 'boolean' },
    showLabel: { control: 'boolean' },
  },
  args: { label: 'Back to Top', target: 'top', scrollThreshold: 400, smoothScroll: true, showLabel: false },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => html`
    <div style="min-height: 200vh; padding: 2rem; position: relative;">
      <h2>Scroll Down to See the Button</h2>
      <p>The scroll-to-top button appears after scrolling ${args.scrollThreshold}px.</p>
      <div style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary, #f9fafb); border-radius: 0.5rem;">
        Scroll down this panel to trigger the floating button.
      </div>
      ${Array.from({ length: 20 }, (_, i) => html`<p style="margin: 1.5rem 0;">Paragraph ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`)}
      <ag-scroll-to-button
        .label=${args.label}
        .target=${args.target}
        .scrollThreshold=${args.scrollThreshold}
        ?smoothScroll=${args.smoothScroll}
        ?showLabel=${args.showLabel}
      ></ag-scroll-to-button>
    </div>
  `,
};

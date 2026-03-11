import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './IconButtonFx';

const HEART_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const STAR_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

const meta: Meta = {
  title: 'AgnosticUI/IconButtonFx',
  component: 'ag-icon-button-fx',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    fx: { control: 'select', options: ['', 'pulse', 'bounce', 'jelly', 'press-pop', 'slide-in', 'grow', 'shrink', 'push', 'shake', 'wobble'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Like', fx: 'bounce', size: 'md' },
  render: (args: any) => html`
    <ag-icon-button-fx
      .label=${args.label}
      .fx=${args.fx}
      .size=${args.size}
      ?disabled=${args.disabled}
    >
      ${HEART_SVG}
    </ag-icon-button-fx>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const FxVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
      <ag-icon-button-fx label="Bounce" fx="bounce">${HEART_SVG}</ag-icon-button-fx>
      <ag-icon-button-fx label="Pulse" fx="pulse">${STAR_SVG}</ag-icon-button-fx>
      <ag-icon-button-fx label="Jelly" fx="jelly">${HEART_SVG}</ag-icon-button-fx>
      <ag-icon-button-fx label="Shake" fx="shake">${STAR_SVG}</ag-icon-button-fx>
    </div>
  `,
};

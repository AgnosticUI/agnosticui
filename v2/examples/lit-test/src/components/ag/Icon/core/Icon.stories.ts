import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Icon';

const STAR_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
const INFO_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`;
const CHECK_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

const meta: Meta = {
  title: 'AgnosticUI/Icon',
  component: 'ag-icon',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['14', '16', '18', '20', '24', '32', '36', '40', '48'] },
    type: { control: 'select', options: ['', 'info', 'action', 'success', 'warning', 'error'] },
  },
  args: { size: '24', type: '' },
  render: (args: any) => html`
    <ag-icon .size=${args.size} .type=${args.type} no-fill>
      ${STAR_SVG}
    </ag-icon>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-icon size="24" no-fill>${STAR_SVG}</ag-icon>
      <ag-icon size="24" type="info" no-fill>${INFO_SVG}</ag-icon>
      <ag-icon size="24" type="success" no-fill>${CHECK_SVG}</ag-icon>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-icon size="14" no-fill>${STAR_SVG}</ag-icon>
      <ag-icon size="18" no-fill>${STAR_SVG}</ag-icon>
      <ag-icon size="24" no-fill>${STAR_SVG}</ag-icon>
      <ag-icon size="32" no-fill>${STAR_SVG}</ag-icon>
      <ag-icon size="48" no-fill>${STAR_SVG}</ag-icon>
    </div>
  `,
};

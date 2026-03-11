import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './IconButton';

const CLOSE_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const SETTINGS_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`;
const MENU_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

const meta: Meta = {
  title: 'AgnosticUI/IconButton',
  component: 'ag-icon-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    variant: { control: 'select', options: ['', 'primary', 'secondary', 'ghost', 'danger'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: { label: 'Close', size: 'md', variant: '' },
  render: (args: any) => html`
    <ag-icon-button
      .label=${args.label}
      .size=${args.size}
      .variant=${args.variant}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >
      ${CLOSE_SVG}
    </ag-icon-button>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-icon-button label="Default">${CLOSE_SVG}</ag-icon-button>
      <ag-icon-button label="Settings" variant="primary">${SETTINGS_SVG}</ag-icon-button>
      <ag-icon-button label="Menu" variant="secondary">${MENU_SVG}</ag-icon-button>
      <ag-icon-button label="Ghost" variant="ghost">${CLOSE_SVG}</ag-icon-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-icon-button label="XS" size="xs">${CLOSE_SVG}</ag-icon-button>
      <ag-icon-button label="SM" size="sm">${CLOSE_SVG}</ag-icon-button>
      <ag-icon-button label="MD" size="md">${CLOSE_SVG}</ag-icon-button>
      <ag-icon-button label="LG" size="lg">${CLOSE_SVG}</ag-icon-button>
      <ag-icon-button label="XL" size="xl">${CLOSE_SVG}</ag-icon-button>
    </div>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Menu';

const meta: Meta = {
  title: 'AgnosticUI/Menu',
  component: 'ag-menu-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    menuVariant: { control: 'select', options: ['chevron', 'button', 'icon'] },
    size: { control: 'select', options: ['x-sm', 'sm', 'md', 'lg', 'xl'] },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Actions', menuVariant: 'chevron', size: 'md' },
  render: (args: any) => html`
    <div style="padding: 3rem;">
      <ag-menu-button
        .menuVariant=${args.menuVariant}
        .size=${args.size}
        ?disabled=${args.disabled}
      >
        ${args.label}
        <ag-menu slot="menu" .ariaLabel=${'Menu options'}>
          <ag-menu-item .value=${'edit'}>Edit</ag-menu-item>
          <ag-menu-item .value=${'duplicate'}>Duplicate</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'delete'}>Delete</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variants: Story = {
  render: () => html`
    <div style="padding: 3rem; display: flex; gap: 2rem; flex-wrap: wrap;">
      <ag-menu-button .menuVariant=${'chevron'}>
        Chevron
        <ag-menu slot="menu" .ariaLabel=${'Options'}>
          <ag-menu-item .value=${'a'}>Option A</ag-menu-item>
          <ag-menu-item .value=${'b'}>Option B</ag-menu-item>
          <ag-menu-item .value=${'c'}>Option C</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
      <ag-menu-button .menuVariant=${'button'}>
        Button
        <ag-menu slot="menu" .ariaLabel=${'Options'}>
          <ag-menu-item .value=${'a'}>Option A</ag-menu-item>
          <ag-menu-item .value=${'b'}>Option B</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
      <ag-menu-button .menuVariant=${'icon'}>
        Menu
        <ag-menu slot="menu" .ariaLabel=${'Options'}>
          <ag-menu-item .value=${'a'}>Option A</ag-menu-item>
          <ag-menu-item .value=${'b'}>Option B</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

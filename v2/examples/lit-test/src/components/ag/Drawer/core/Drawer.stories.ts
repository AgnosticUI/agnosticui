import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Drawer';
import '../../Button/core/Button';

const meta: Meta = {
  title: 'AgnosticUI/Drawer',
  component: 'ag-drawer',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    heading: { control: 'text' },
    description: { control: 'text' },
    position: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
    },
  },
  args: {
    open: false,
    heading: 'Drawer',
    showCloseButton: true,
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const drawer = (e.target as HTMLElement).parentElement?.querySelector('ag-drawer') as any;
          if (drawer) drawer.open = true;
        }}
      >Open Drawer</ag-button>
      <ag-drawer
        .open=${args.open}
        .heading=${args.heading}
        .showCloseButton=${args.showCloseButton}
        @drawer-close=${(e: Event) => { (e.target as any).open = false; }}
        @drawer-cancel=${(e: Event) => { (e.target as any).open = false; }}
      >
        <div style="padding: 1rem">Drawer content goes here.</div>
      </ag-drawer>
    </div>
  `,
};

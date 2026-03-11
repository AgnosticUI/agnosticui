import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Dialog';
import '../../Button/core/Button';

const meta: Meta = {
  title: 'AgnosticUI/Dialog',
  component: 'ag-dialog',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    noCloseOnEscape: { control: 'boolean' },
    noCloseOnBackdrop: { control: 'boolean' },
    heading: { control: 'text' },
    description: { control: 'text' },
    drawerPosition: {
      control: 'select',
      options: [undefined, 'start', 'end', 'top', 'bottom'],
    },
  },
  args: {
    open: false,
    heading: 'Dialog title',
    description: 'Supporting description text goes here.',
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
          const dialog = (e.target as HTMLElement).parentElement?.querySelector('ag-dialog') as any;
          if (dialog) dialog.open = true;
        }}
      >Open Dialog</ag-button>
      <ag-dialog
        .open=${args.open}
        .heading=${args.heading}
        .showCloseButton=${args.showCloseButton}
        @dialog-close=${(e: Event) => { (e.target as any).open = false; }}
        @dialog-cancel=${(e: Event) => { (e.target as any).open = false; }}
      >
        <p>Dialog content goes here.</p>
      </ag-dialog>
    </div>
  `,
};

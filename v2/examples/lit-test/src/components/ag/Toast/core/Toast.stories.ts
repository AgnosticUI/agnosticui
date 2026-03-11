import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Toast';
import '../../Button/core/Button';

const meta: Meta = {
  title: 'AgnosticUI/Toast',
  component: 'ag-toast',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
    },
    autoDismiss: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
  args: {
    open: false,
    type: 'info',
    position: 'top-right',
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
          const toast = (e.target as HTMLElement).parentElement?.querySelector('ag-toast') as any;
          if (toast) toast.open = true;
        }}
      >Show Toast</ag-button>
      <ag-toast
        .open=${args.open}
        type=${args.type}
        position=${args.position}
        ?showCloseButton=${args.showCloseButton}
        @toast-close=${(e: Event) => { (e.target as any).open = false; }}
      >
        <span>Toast notification message</span>
      </ag-toast>
    </div>
  `,
};

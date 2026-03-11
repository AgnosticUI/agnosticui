import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Toast';
import '../../Button/core/Button';

const meta: Meta = {
  title: 'AgnosticUI/Toast',
  component: 'ag-toast',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'danger', 'error'] },
    position: { control: 'select', options: ['top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start'] },
    autoDismiss: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
  args: {
    type: 'info',
    position: 'top-end',
    autoDismiss: false,
    showCloseButton: true,
    bordered: false,
    rounded: true,
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => html`
    <div style="min-height: 200px; padding: 1rem;">
      <ag-button
        @click=${(e: Event) => {
          const toast = (e.target as HTMLElement).parentElement?.querySelector('ag-toast') as any;
          if (toast) { toast.open = false; requestAnimationFrame(() => { toast.open = true; }); }
        }}
      >Show Toast</ag-button>
      <ag-toast
        .open=${args.open ?? false}
        .type=${args.type}
        .position=${args.position}
        .autoDismiss=${args.autoDismiss}
        .showCloseButton=${args.showCloseButton}
        .bordered=${args.bordered}
        .rounded=${args.rounded}
        @toast-close=${(e: Event) => { (e.target as any).open = false; }}
      >
        Toast notification message here.
      </ag-toast>
    </div>
  `,
};

export const TopStart: Story = {
  render: () => html`
    <div style="min-height: 200px; padding: 1rem;">
      <ag-toast .open=${true} type="success" .position=${'top-start'} .showCloseButton=${true}>
        Saved successfully!
      </ag-toast>
      <p>Toast anchored to top-start.</p>
    </div>
  `,
};

export const BottomEnd: Story = {
  render: () => html`
    <div style="min-height: 200px; padding: 1rem;">
      <ag-toast .open=${true} type="warning" .position=${'bottom-end'} .showCloseButton=${true}>
        Warning: low disk space.
      </ag-toast>
      <p>Toast anchored to bottom-end.</p>
    </div>
  `,
};

export const BottomCenter: Story = {
  render: () => html`
    <div style="min-height: 200px; padding: 1rem;">
      <ag-toast .open=${true} type="danger" .position=${'bottom'} .showCloseButton=${true}>
        Connection lost. Retrying...
      </ag-toast>
      <p>Toast anchored to bottom-center.</p>
    </div>
  `,
};

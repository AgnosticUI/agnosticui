import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Popover';
import '../../Button/core/Button';

const meta: Meta = {
  title: 'AgnosticUI/Popover',
  component: 'ag-popover',
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'] },
    arrow: { control: 'boolean' },
    triggerType: { control: 'select', options: ['click', 'hover', 'focus'] },
    showCloseButton: { control: 'boolean' },
  },
  args: { placement: 'bottom', arrow: true, triggerType: 'click', showCloseButton: true },
  render: (args: any) => html`
    <div style="padding: 4rem; display: flex; justify-content: center;">
      <ag-popover
        .placement=${args.placement}
        ?arrow=${args.arrow}
        .triggerType=${args.triggerType}
        ?showCloseButton=${args.showCloseButton}
        .closeLabel=${'Close'}
      >
        <ag-button slot="trigger">Open Popover</ag-button>
        <span slot="title">Popover Title</span>
        <div slot="content" style="padding: 0.5rem 0;">
          <p>This is the popover content. It can contain any HTML.</p>
        </div>
      </ag-popover>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const HoverTrigger: Story = {
  args: { triggerType: 'hover', placement: 'top', arrow: true },
};

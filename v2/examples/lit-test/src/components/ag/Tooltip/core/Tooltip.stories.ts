import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Tooltip';

const meta: Meta = {
  title: 'AgnosticUI/Tooltip',
  component: 'ag-tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    disabled: { control: 'boolean' },
  },
  args: { content: 'This is a helpful tooltip', placement: 'top', disabled: false },
  render: (args: any) => html`
    <div style="display: flex; justify-content: center; padding: 4rem;">
      <ag-tooltip
        .content=${args.content}
        .placement=${args.placement}
        ?disabled=${args.disabled}
      >
        <button>Hover over me</button>
      </ag-tooltip>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Placements: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; justify-content: center; align-items: center; padding: 5rem 2rem;">
      <ag-tooltip content="Top tooltip" placement="top">
        <button>Top</button>
      </ag-tooltip>
      <ag-tooltip content="Bottom tooltip" placement="bottom">
        <button>Bottom</button>
      </ag-tooltip>
      <ag-tooltip content="Left tooltip" placement="left">
        <button>Left</button>
      </ag-tooltip>
      <ag-tooltip content="Right tooltip" placement="right">
        <button>Right</button>
      </ag-tooltip>
    </div>
  `,
};

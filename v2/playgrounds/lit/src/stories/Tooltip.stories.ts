import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/tooltip';
import type { TooltipProps } from 'agnosticui-core/tooltip';

const meta: Meta<TooltipProps> = {
  title: 'AgnosticUI Lit/Tooltip',
  component: 'ag-tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content text',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip placement',
    },
    trigger: {
      control: 'text',
      description: 'Event trigger(s) for tooltip: hover, focus, click',
    },
    distance: {
      control: 'number',
      description: 'Distance from the trigger element',
    },
    skidding: {
      control: 'number',
      description: 'Offset along the placement axis',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
    },
    onShow: {
      action: 'show',
      description: 'Emitted when the tooltip is shown',
    },
    onHide: {
      action: 'hide',
      description: 'Emitted when the tooltip is hidden',
    },
  },
  args: {
    content: 'Tooltip content',
    placement: 'top',
    trigger: 'hover focus',
    distance: 8,
    skidding: 0,
    disabled: false,
    onShow: fn(),
    onHide: fn(),
  },
};

export default meta;
type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    content: 'This is the tooltip content',
    placement: 'top',
  },
  render: ({ content, placement, trigger, distance, skidding, disabled, onShow, onHide }) => html`
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-tooltip
          .content=${content}
          .placement=${placement}
          .trigger=${trigger}
          .distance=${distance}
          .skidding=${skidding}
          .disabled=${disabled}
          @show=${onShow}
          @hide=${onHide}
        >
          <button>Hover over me</button>
        </ag-tooltip>
      </div>
  `,
};

export const TopPlacement: Story = {
  args: {
    placement: 'top',
    content: 'This is a tooltip on the top',
  },
  render: ({ content, placement, trigger, distance, skidding, disabled, onShow, onHide }) => html`
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-tooltip
          .content=${content}
          .placement=${placement}
          .trigger=${trigger}
          .distance=${distance}
          .skidding=${skidding}
          .disabled=${disabled}
          @show=${onShow}
          @hide=${onHide}
        >
          <button>Top Tooltip</button>
        </ag-tooltip>
      </div>
  `,
};

export const RightPlacement: Story = {
  args: {
    placement: 'right',
    content: 'This is a tooltip on the right',
  },
  render: ({ content, placement, trigger, distance, skidding, disabled, onShow, onHide }) => html`
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-tooltip
          .content=${content}
          .placement=${placement}
          .trigger=${trigger}
          .distance=${distance}
          .skidding=${skidding}
          .disabled=${disabled}
          @show=${onShow}
          @hide=${onHide}
        >
          <button>Right Tooltip</button>
        </ag-tooltip>
      </div>
  `,
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom',
    content: 'This is a tooltip on the bottom',
  },
  render: ({ content, placement, trigger, distance, skidding, disabled, onShow, onHide }) => html`
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-tooltip
          .content=${content}
          .placement=${placement}
          .trigger=${trigger}
          .distance=${distance}
          .skidding=${skidding}
          .disabled=${disabled}
          @show=${onShow}
          @hide=${onHide}
        >
          <button>Bottom Tooltip</button>
        </ag-tooltip>
      </div>
  `,
};

export const LeftPlacement: Story = {
  args: {
    placement: 'left',
    content: 'This is a tooltip on the left',
  },
  render: ({ content, placement, trigger, distance, skidding, disabled, onShow, onHide }) => html`
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-tooltip
          .content=${content}
          .placement=${placement}
          .trigger=${trigger}
          .distance=${distance}
          .skidding=${skidding}
          .disabled=${disabled}
          @show=${onShow}
          @hide=${onHide}
        >
          <button>Left Tooltip</button>
        </ag-tooltip>
      </div>
  `,
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click the button to toggle',
    placement: 'top',
    trigger: 'click',
  },
  render: ({ content, placement, trigger, distance, skidding, disabled, onShow, onHide }) => html`
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-tooltip
          .content=${content}
          .placement=${placement}
          .trigger=${trigger}
          .distance=${distance}
          .skidding=${skidding}
          .disabled=${disabled}
          @show=${onShow}
          @hide=${onHide}
        >
          <button>Click me</button>
        </ag-tooltip>
      </div>
  `,
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    placement: 'top',
    disabled: true,
  },
  render: ({ content, placement, trigger, distance, skidding, disabled, onShow, onHide }) => html`
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-tooltip
          .content=${content}
          .placement=${placement}
          .trigger=${trigger}
          .distance=${distance}
          .skidding=${skidding}
          .disabled=${disabled}
          @show=${onShow}
          @hide=${onHide}
        >
          <button>Hover (disabled)</button>
        </ag-tooltip>
      </div>
  `,
};

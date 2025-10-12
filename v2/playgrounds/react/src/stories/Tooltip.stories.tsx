import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactTooltip, type ReactTooltipProps } from 'agnosticui-core/tooltip/react';

const meta: Meta<ReactTooltipProps> = {
  title: 'AgnosticUI React/Tooltip',
  component: ReactTooltip,
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
    disabled: false,
    onShow: fn(),
    onHide: fn(),
  },
} satisfies Meta<ReactTooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is the tooltip content',
    placement: 'top',
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Hover over me</button>
      </ReactTooltip>
    </div>
  ),
};

export const TopPlacement: Story = {
  args: {
    placement: 'top',
    content: 'This is a tooltip on the top',
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Top Tooltip</button>
      </ReactTooltip>
    </div>
  ),
};

export const RightPlacement: Story = {
  args: {
    placement: 'right',
    content: 'This is a tooltip on the right',
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Right Tooltip</button>
      </ReactTooltip>
    </div>
  ),
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom',
    content: 'This is a tooltip on the bottom',
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Bottom Tooltip</button>
      </ReactTooltip>
    </div>
  ),
};

export const LeftPlacement: Story = {
  args: {
    placement: 'left',
    content: 'This is a tooltip on the left',
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Left Tooltip</button>
      </ReactTooltip>
    </div>
  ),
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click the button to toggle',
    placement: 'top',
    trigger: 'click',
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Click me</button>
      </ReactTooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    placement: 'top',
    disabled: true,
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Hover (disabled)</button>
      </ReactTooltip>
    </div>
  ),
};

export const EventTesting: Story = {
  args: {
    content: 'Tooltip with event tracking',
    placement: 'top',
  },
  render: (args: ReactTooltipProps) => {
    const [showCount, setShowCount] = useState(0);
    const [hideCount, setHideCount] = useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <p>Show count: {showCount}</p>
          <p>Hide count: {hideCount}</p>
        </div>
        <ReactTooltip
          {...args}
          onShow={(event) => {
            setShowCount(c => c + 1);
            args.onShow?.(event);
          }}
          onHide={(event) => {
            setHideCount(c => c + 1);
            args.onHide?.(event);
          }}
        >
          <button>Hover to trigger events</button>
        </ReactTooltip>
      </div>
    );
  },
};

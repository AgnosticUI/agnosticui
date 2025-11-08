import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/popover';
import type { PopoverProps } from 'agnosticui-core/popover';

const meta: Meta<PopoverProps> = {
  title: 'AgnosticUI Lit/Popover',
  component: 'ag-popover',
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'],
      description: 'Placement of the popover relative to trigger',
    },
    distance: {
      control: 'number',
      description: 'Distance from trigger element in pixels',
    },
    skidding: {
      control: 'number',
      description: 'Offset along the trigger element',
    },
    arrow: {
      control: 'boolean',
      description: 'Show arrow pointing to trigger',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable popover',
    },
    triggerType: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
      description: 'How to trigger the popover',
    },
    matchTriggerWidth: {
      control: 'boolean',
      description: 'Match popover width to trigger width',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button in header',
    },
    closeLabel: {
      control: 'text',
      description: 'Accessible label for close button',
    },
  },
};

export default meta;
type Story = StoryObj<PopoverProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    placement: 'bottom',
    distance: 8,
    skidding: 0,
    arrow: true,
    disabled: false,
    triggerType: 'click',
    matchTriggerWidth: false,
    showCloseButton: true,
    closeLabel: 'Close popover',
  },
  render: (args) => html`
    <ag-popover
      .placement=${args.placement}
      .distance=${args.distance}
      .skidding=${args.skidding}
      .arrow=${args.arrow}
      .disabled=${args.disabled}
      .triggerType=${args.triggerType}
      .matchTriggerWidth=${args.matchTriggerWidth}
      .showCloseButton=${args.showCloseButton}
      .closeLabel=${args.closeLabel}
    >
      <button slot="trigger">Open Popover</button>
      <span slot="title">Popover Title</span>
      <div slot="content">
        <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
      </div>
    </ag-popover>
  `,
};

// Click trigger (default)
export const ClickTrigger: Story = {
  render: () => html`
    <ag-popover trigger-type="click">
      <button slot="trigger">Click Me</button>
      <span slot="title">Click Popover</span>
      <div slot="content">
        <p>This popover opens when you click the button.</p>
        <button style="margin-top: 8px; padding: 4px 8px;">Action Button</button>
      </div>
    </ag-popover>
  `,
};

// Hover trigger
export const HoverTrigger: Story = {
  render: () => html`
    <ag-popover trigger-type="hover">
      <button slot="trigger">Hover Me</button>
      <span slot="title">Hover Popover</span>
      <div slot="content">
        <p>This popover opens when you hover over the button.</p>
      </div>
    </ag-popover>
  `,
};

// Focus trigger
export const FocusTrigger: Story = {
  render: () => html`
    <ag-popover trigger-type="focus">
      <button slot="trigger">Focus Me</button>
      <span slot="title">Focus Popover</span>
      <div slot="content">
        <p>This popover opens when the button receives focus (keyboard navigation).</p>
      </div>
    </ag-popover>
  `,
};

// Different placements
export const Placements: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 80px; padding: 100px; align-items: center;">
      <ag-popover placement="top">
        <button slot="trigger">Top</button>
        <span slot="title">Top Placement</span>
        <div slot="content"><p>Popover positioned above</p></div>
      </ag-popover>

      <div style="display: flex; gap: 200px;">
        <ag-popover placement="left">
          <button slot="trigger">Left</button>
          <span slot="title">Left Placement</span>
          <div slot="content"><p>Popover positioned to the left</p></div>
        </ag-popover>

        <ag-popover placement="right">
          <button slot="trigger">Right</button>
          <span slot="title">Right Placement</span>
          <div slot="content"><p>Popover positioned to the right</p></div>
        </ag-popover>
      </div>

      <ag-popover placement="bottom">
        <button slot="trigger">Bottom</button>
        <span slot="title">Bottom Placement</span>
        <div slot="content"><p>Popover positioned below</p></div>
      </ag-popover>
    </div>
  `,
};

// No arrow
export const NoArrow: Story = {
  render: () => html`
    <ag-popover .arrow=${false}>
      <button slot="trigger">No Arrow</button>
      <span slot="title">Popover Without Arrow</span>
      <div slot="content">
        <p>This popover doesn't have an arrow pointing to the trigger.</p>
      </div>
    </ag-popover>
  `,
};

// No close button
export const NoCloseButton: Story = {
  render: () => html`
    <ag-popover .showCloseButton=${false}>
      <button slot="trigger">No Close Button</button>
      <span slot="title">Title Only</span>
      <div slot="content">
        <p>This popover has no close button in the header. Click outside to close.</p>
      </div>
    </ag-popover>
  `,
};

// Content only (no title)
export const ContentOnly: Story = {
  render: () => html`
    <ag-popover>
      <button slot="trigger">Simple Popover</button>
      <div slot="content">
        <p>Just content, no title. The close button is still shown.</p>
      </div>
    </ag-popover>
  `,
};

// Rich content
export const RichContent: Story = {
  render: () => html`
    <ag-popover>
      <button slot="trigger">User Profile</button>
      <span slot="title">John Doe</span>
      <div slot="content">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--ag-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
              JD
            </div>
            <div>
              <div style="font-weight: 600;">John Doe</div>
              <div style="font-size: 14px; color: var(--ag-text-secondary);">john@example.com</div>
            </div>
          </div>
          <div style="padding-top: 8px; border-top: 1px solid var(--ag-border);">
            <button style="width: 100%; padding: 8px; background: var(--ag-primary); color: white; border: none; border-radius: var(--ag-radius-sm); cursor: pointer;">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </ag-popover>
  `,
};

// Form in popover
export const FormInPopover: Story = {
  render: () => html`
    <ag-popover>
      <button slot="trigger">Add Comment</button>
      <span slot="title">New Comment</span>
      <div slot="content">
        <form style="display: flex; flex-direction: column; gap: 12px; min-width: 250px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px;">Name</label>
            <input type="text" placeholder="Your name" style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); box-sizing: border-box;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px;">Comment</label>
            <textarea placeholder="Your comment" rows="3" style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); resize: vertical; box-sizing: border-box;"></textarea>
          </div>
          <button type="submit" style="padding: 8px; background: var(--ag-primary); color: white; border: none; border-radius: var(--ag-radius-sm); cursor: pointer;">
            Submit
          </button>
        </form>
      </div>
    </ag-popover>
  `,
};

// Match trigger width
export const MatchTriggerWidth: Story = {
  render: () => html`
    <ag-popover .matchTriggerWidth=${true}>
      <button slot="trigger" style="width: 300px;">Wide Trigger Button</button>
      <span slot="title">Matched Width</span>
      <div slot="content">
        <p>This popover's width matches the trigger button's width.</p>
      </div>
    </ag-popover>
  `,
};

// Disabled state
export const Disabled: Story = {
  render: () => html`
    <ag-popover .disabled=${true}>
      <button slot="trigger">Disabled Popover</button>
      <span slot="title">This Won't Open</span>
      <div slot="content">
        <p>The popover is disabled and won't open.</p>
      </div>
    </ag-popover>
  `,
};

// Multiple popovers
export const MultiplePopovers: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <ag-popover>
        <button slot="trigger">Info</button>
        <span slot="title">Information</span>
        <div slot="content">
          <p>This is some helpful information.</p>
        </div>
      </ag-popover>

      <ag-popover>
        <button slot="trigger">Help</button>
        <span slot="title">Help</span>
        <div slot="content">
          <p>Need help? Check our documentation.</p>
        </div>
      </ag-popover>

      <ag-popover>
        <button slot="trigger">Settings</button>
        <span slot="title">Settings</span>
        <div slot="content">
          <p>Adjust your preferences here.</p>
        </div>
      </ag-popover>
    </div>
  `,
};

// Distance and skidding
export const DistanceAndSkidding: Story = {
  render: () => html`
    <div style="display: flex; gap: 32px; padding: 50px;">
      <ag-popover .distance=${20}>
        <button slot="trigger">Large Distance</button>
        <span slot="title">20px Distance</span>
        <div slot="content"><p>Popover with 20px distance from trigger</p></div>
      </ag-popover>

      <ag-popover .skidding=${20}>
        <button slot="trigger">Skidding</button>
        <span slot="title">20px Skidding</span>
        <div slot="content"><p>Popover offset 20px along the trigger</p></div>
      </ag-popover>
    </div>
  `,
};

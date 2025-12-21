import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { ref } from 'vue';
import { VueTooltip, type VueTooltipPropsWithEvents } from '../../../../lib/src/components/Tooltip/vue';

const meta = {
  title: 'AgnosticUI Vue/Tooltip',
  component: VueTooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip placement',
    },
    content: {
      control: 'text',
      description: 'Tooltip content text',
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
} satisfies Meta<VueTooltipPropsWithEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is the tooltip content',
    placement: 'top',
  },
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          :trigger="args.trigger"
          :disabled="args.disabled"
          @show="args.onShow"
          @hide="args.onHide"
        >
          <button>Hover over me</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const TopPlacement: Story = {
  args: {
    placement: 'top',
    content: 'This is a tooltip on the top',
  },
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          :trigger="args.trigger"
          @show="args.onShow"
          @hide="args.onHide"
        >
          <button>Top Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const RightPlacement: Story = {
  args: {
    placement: 'right',
    content: 'This is a tooltip on the right',
  },
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          :trigger="args.trigger"
          @show="args.onShow"
          @hide="args.onHide"
        >
          <button>Right Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom',
    content: 'This is a tooltip on the bottom',
  },
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          :trigger="args.trigger"
          @show="args.onShow"
          @hide="args.onHide"
        >
          <button>Bottom Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const LeftPlacement: Story = {
  args: {
    placement: 'left',
    content: 'This is a tooltip on the left',
  },
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          :trigger="args.trigger"
          @show="args.onShow"
          @hide="args.onHide"
        >
          <button>Left Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    content: 'Tooltip with event tracking',
    placement: 'top',
  },
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      const showCount = ref(0);
      const hideCount = ref(0);

      const handleShow = (event: Event) => {
        showCount.value++;
        args.onShow?.(event as any);
      };

      const handleHide = (event: Event) => {
        hideCount.value++;
        args.onHide?.(event as any);
      };

      return { args, showCount, hideCount, handleShow, handleHide };
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;">
        <div style="display: flex; gap: 2rem;">
          <p>Show count: {{ showCount }}</p>
          <p>Hide count: {{ hideCount }}</p>
        </div>
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          :trigger="args.trigger"
          @show="handleShow"
          @hide="handleHide"
        >
          <button>Hover to trigger events</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const CustomizedWithCSSParts: Story = {
  args: {
    content: 'Customized tooltip using CSS Shadow Parts',
    placement: 'top',
  },
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      const styles = `
        <style>
          .custom-tooltip::part(ag-tooltip) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
            padding: 12px 16px;
            font-weight: 600;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            max-width: 250px;
          }

          .custom-tooltip::part(ag-tooltip-arrow) {
            background: #667eea;
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; justify-content: center; padding: 50px;">
          <VueTooltip
            class="custom-tooltip"
            :content="args.content"
            :placement="args.placement"
            :trigger="args.trigger"
            @show="args.onShow"
            @hide="args.onHide"
          >
            <button>Hover for custom styled tooltip</button>
          </VueTooltip>
        </div>
      </div>
    `,
  }),
};

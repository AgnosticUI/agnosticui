import type { Meta, StoryObj } from '@storybook/vue3';
import { VueBadgeFx } from 'agnosticui-core/badge-fx/vue';

const meta = {
  title: 'AgnosticUI Vue/BadgeFx',
  component: VueBadgeFx,
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', 'shimmer', 'glow', 'flip', 'ripple', 'highlight-sweep', 'press-pop', 'slide-in'],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fxEase: {
      control: 'select',
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring-sm', 'spring-md', 'spring-lg'],
    },
    fxDisabled: {
      control: 'boolean',
    },
    variant: {
      control: "select",
      options: ["default", "info", "warning", "danger", "success", "neutral"],
    },
  },
  args: {
    fx: 'bounce',
    fxSpeed: 'md',
    fxEase: 'ease',
    fxDisabled: false,
    variant: 'default',
  },
} satisfies Meta<typeof VueBadgeFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueBadgeFx },
    setup() {
      return { args };
    },
    template: '<VueBadgeFx v-bind="args">Badge Fx</VueBadgeFx>',
  }),
};

export const AllEffects: Story = {
  render: () => ({
    components: { VueBadgeFx },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <VueBadgeFx fx="bounce" variant="success">Bounce</VueBadgeFx>
        <VueBadgeFx fx="pulse" variant="info">Pulse</VueBadgeFx>
        <VueBadgeFx fx="jelly" variant="warning">Jelly</VueBadgeFx>
        <VueBadgeFx fx="shimmer" variant="danger">Shimmer</VueBadgeFx>
        <VueBadgeFx fx="glow" variant="neutral">Glow</VueBadgeFx>
        <VueBadgeFx fx="flip" variant="success">Flip</VueBadgeFx>
        <VueBadgeFx fx="ripple" variant="info">Ripple</VueBadgeFx>
        <VueBadgeFx fx="highlight-sweep" variant="warning">Sweep</VueBadgeFx>
      </div>
    `,
  }),
};

export const EasingExamples: Story = {
  render: () => ({
    components: { VueBadgeFx },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <span style="width: 100px;">Bounce:</span>
          <VueBadgeFx fx="bounce" fx-ease="bounce" variant="success">Bounce Ease</VueBadgeFx>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <span style="width: 100px;">Spring SM:</span>
          <VueBadgeFx fx="pulse" fx-ease="spring-sm" variant="info">Spring SM</VueBadgeFx>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <span style="width: 100px;">Spring MD:</span>
          <VueBadgeFx fx="jelly" fx-ease="spring-md" variant="warning">Spring MD</VueBadgeFx>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <span style="width: 100px;">Spring LG:</span>
          <VueBadgeFx fx="flip" fx-ease="spring-lg" variant="danger">Spring LG</VueBadgeFx>
        </div>
      </div>
    `,
  }),
};

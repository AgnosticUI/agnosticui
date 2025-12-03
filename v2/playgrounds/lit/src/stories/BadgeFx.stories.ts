import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/badge-fx';

const meta = {
  title: 'AgnosticUI Lit/BadgeFx',
  component: 'ag-badge-fx',
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
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ag-badge-fx
      fx=${args.fx}
      fx-speed=${args.fxSpeed}
      fx-ease=${args.fxEase}
      ?fx-disabled=${args.fxDisabled}
      variant=${args.variant}
    >
      Badge Fx
    </ag-badge-fx>
  `,
};

export const AllEffects: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <ag-badge-fx fx="bounce" variant="success">Bounce</ag-badge-fx>
      <ag-badge-fx fx="pulse" variant="info">Pulse</ag-badge-fx>
      <ag-badge-fx fx="jelly" variant="warning">Jelly</ag-badge-fx>
      <ag-badge-fx fx="shimmer" variant="danger">Shimmer</ag-badge-fx>
      <ag-badge-fx fx="glow" variant="neutral">Glow</ag-badge-fx>
      <ag-badge-fx fx="flip" variant="success">Flip</ag-badge-fx>
      <ag-badge-fx fx="ripple" variant="info">Ripple</ag-badge-fx>
      <ag-badge-fx fx="highlight-sweep" variant="warning">Sweep</ag-badge-fx>
    </div>
  `,
};

export const EasingExamples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 1rem; align-items: center;">
        <span style="width: 100px;">Bounce:</span>
        <ag-badge-fx fx="bounce" fx-ease="bounce" variant="success">Bounce Ease</ag-badge-fx>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <span style="width: 100px;">Spring SM:</span>
        <ag-badge-fx fx="pulse" fx-ease="spring-sm" variant="info">Spring SM</ag-badge-fx>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <span style="width: 100px;">Spring MD:</span>
        <ag-badge-fx fx="jelly" fx-ease="spring-md" variant="warning">Spring MD</ag-badge-fx>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <span style="width: 100px;">Spring LG:</span>
        <ag-badge-fx fx="flip" fx-ease="spring-lg" variant="danger">Spring LG</ag-badge-fx>
      </div>
    </div>
  `,
};

import type { Meta, StoryObj } from '@storybook/react';
import { ReactBadgeFx } from 'agnosticui-core/badge-fx/react';

const meta = {
  title: 'AgnosticUI React/BadgeFx',
  component: ReactBadgeFx,
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
    children: 'Badge Fx',
  },
} satisfies Meta<typeof ReactBadgeFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllEffects: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <ReactBadgeFx fx="bounce" variant="success">Bounce</ReactBadgeFx>
      <ReactBadgeFx fx="pulse" variant="info">Pulse</ReactBadgeFx>
      <ReactBadgeFx fx="jelly" variant="warning">Jelly</ReactBadgeFx>
      <ReactBadgeFx fx="shimmer" variant="danger">Shimmer</ReactBadgeFx>
      <ReactBadgeFx fx="glow" variant="neutral">Glow</ReactBadgeFx>
      <ReactBadgeFx fx="flip" variant="success">Flip</ReactBadgeFx>
      <ReactBadgeFx fx="ripple" variant="info">Ripple</ReactBadgeFx>
      <ReactBadgeFx fx="highlight-sweep" variant="warning">Sweep</ReactBadgeFx>
    </div>
  ),
};

export const EasingExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Bounce:</span>
        <ReactBadgeFx fx="bounce" fxEase="bounce" variant="success">Bounce Ease</ReactBadgeFx>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Spring SM:</span>
        <ReactBadgeFx fx="pulse" fxEase="spring-sm" variant="info">Spring SM</ReactBadgeFx>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Spring MD:</span>
        <ReactBadgeFx fx="jelly" fxEase="spring-md" variant="warning">Spring MD</ReactBadgeFx>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Spring LG:</span>
        <ReactBadgeFx fx="flip" fxEase="spring-lg" variant="danger">Spring LG</ReactBadgeFx>
      </div>
    </div>
  ),
};

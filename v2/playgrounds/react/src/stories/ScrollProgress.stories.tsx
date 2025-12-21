import type { Meta, StoryObj } from '@storybook/react';
import { ReactScrollProgress } from 'agnosticui-core/scroll-progress/react';
import type { ScrollProgressProps } from 'agnosticui-core/scroll-progress';

const meta: Meta<typeof ReactScrollProgress> = {
  title: 'AgnosticUI React/ScrollProgress',
  component: ReactScrollProgress,
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['bar', 'dot-trail', 'badge', 'ring'],
      description: 'Visual representation mode',
    },
    orientation: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
      description: 'Placement for bar mode',
    },
    dots: {
      control: { type: 'number', min: 3, max: 10 },
      description: 'Number of dots for dot-trail mode',
    },
    badgeVariant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info', 'neutral', 'monochrome'],
      description: 'Badge color variant for badge mode',
    },
    ringSize: {
      control: { type: 'number', min: 16, max: 100 },
      description: 'Diameter of progress ring for ring mode',
    },
    ringStrokeWidth: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Stroke width for ring mode',
    },
    ringVariant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      description: 'Variant color for ring mode',
    },
  },
  args: {
    mode: 'bar',
    orientation: 'top',
    dots: 5,
    badgeVariant: 'info',
    ringSize: 32,
    ringStrokeWidth: 3,
    ringVariant: 'info',
  } as ScrollProgressProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper to create scrollable content
const ScrollableContent = () => (
  <div style={{ padding: 'var(--ag-space-4)' }}>
    <h2>Scroll Progress Demo</h2>
    <p>Scroll down to see the progress indicator update.</p>
    {Array.from({ length: 50 }, (_, i) => (
      <p key={i}>Lorem ipsum dolor sit amet, paragraph {i + 1}</p>
    ))}
  </div>
);

export const BarModeTop: Story = {
  render: () => (
    <>
      <ReactScrollProgress mode="bar" orientation="top" />
      <ScrollableContent />
    </>
  ),
};

export const BarModeBottom: Story = {
  render: () => (
    <>
      <ReactScrollProgress mode="bar" orientation="bottom" />
      <ScrollableContent />
    </>
  ),
};

export const DotTrailMode: Story = {
  render: () => (
    <>
      <div style={{ position: 'fixed', top: 'var(--ag-space-4)', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
        <ReactScrollProgress mode="dot-trail" dots={7} />
      </div>
      <ScrollableContent />
    </>
  ),
};

export const DotTrailWithCustomVariant: Story = {
  render: () => (
    <>
      <div style={{ position: 'fixed', top: 'var(--ag-space-4)', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
        <ReactScrollProgress mode="dot-trail" dots={5} badgeVariant="success" />
      </div>
      <ScrollableContent />
    </>
  ),
};

export const BadgeMode: Story = {
  render: () => (
    <>
      <div style={{ position: 'fixed', bottom: 'var(--ag-space-4)', right: 'var(--ag-space-4)', zIndex: 100 }}>
        <ReactScrollProgress mode="badge" />
      </div>
      <ScrollableContent />
    </>
  ),
};

export const BadgeWithVariant: Story = {
  render: () => (
    <>
      <div style={{ position: 'fixed', bottom: 'var(--ag-space-4)', right: 'var(--ag-space-4)', zIndex: 100 }}>
        <ReactScrollProgress mode="badge" badgeVariant="warning" />
      </div>
      <ScrollableContent />
    </>
  ),
};

export const RingMode: Story = {
  render: () => (
    <>
      <div style={{ position: 'fixed', bottom: 'var(--ag-space-4)', right: 'var(--ag-space-4)', zIndex: 100 }}>
        <ReactScrollProgress mode="ring" ringSize={48} />
      </div>
      <ScrollableContent />
    </>
  ),
};

export const RingModeCustom: Story = {
  render: () => (
    <>
      <div style={{ position: 'fixed', bottom: 'var(--ag-space-4)', right: 'var(--ag-space-4)', zIndex: 100 }}>
        <ReactScrollProgress mode="ring" ringSize={64} ringStrokeWidth={4} ringVariant="success" />
      </div>
      <ScrollableContent />
    </>
  ),
};

export const AllModes: Story = {
  render: () => (
    <>
      <ReactScrollProgress mode="bar" orientation="top" />

      <div style={{ position: 'fixed', top: 'var(--ag-space-4)', left: '50%', transform: 'translateX(-50%)', zIndex: 99 }}>
        <ReactScrollProgress mode="dot-trail" />
      </div>

      <div style={{ position: 'fixed', bottom: 'var(--ag-space-4)', left: 'var(--ag-space-4)', zIndex: 100 }}>
        <ReactScrollProgress mode="badge" />
      </div>

      <div style={{ position: 'fixed', bottom: 'var(--ag-space-4)', right: 'var(--ag-space-4)', zIndex: 100 }}>
        <ReactScrollProgress mode="ring" ringSize={48} />
      </div>

      <ScrollableContent />
    </>
  ),
};

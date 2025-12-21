import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueScrollProgress } from 'agnosticui-core/scroll-progress/vue';

const meta = {
  title: 'AgnosticUI Vue/ScrollProgress',
  component: VueScrollProgress,
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
  },
} satisfies Meta<typeof VueScrollProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BarModeTop: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <VueScrollProgress mode="bar" orientation="top" />
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const BarModeBottom: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <VueScrollProgress mode="bar" orientation="bottom" />
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const DotTrailMode: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <div style="position: fixed; top: var(--ag-space-4); left: 50%; transform: translateX(-50%); z-index: 100;">
          <VueScrollProgress mode="dot-trail" :dots="7" />
        </div>
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const DotTrailWithCustomVariant: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <div style="position: fixed; top: var(--ag-space-4); left: 50%; transform: translateX(-50%); z-index: 100;">
          <VueScrollProgress mode="dot-trail" :dots="5" badge-variant="success" />
        </div>
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const BadgeMode: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
          <VueScrollProgress mode="badge" />
        </div>
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const BadgeWithVariant: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
          <VueScrollProgress mode="badge" badge-variant="warning" />
        </div>
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const RingMode: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
          <VueScrollProgress mode="ring" :ring-size="48" />
        </div>
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const RingModeCustom: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
          <VueScrollProgress mode="ring" :ring-size="64" :ring-stroke-width="4" ring-variant="success" />
        </div>
        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

export const AllModes: Story = {
  render: () => ({
    components: { VueScrollProgress },
    template: `
      <div>
        <VueScrollProgress mode="bar" orientation="top" />

        <div style="position: fixed; top: var(--ag-space-4); left: 50%; transform: translateX(-50%); z-index: 99;">
          <VueScrollProgress mode="dot-trail" />
        </div>

        <div style="position: fixed; bottom: var(--ag-space-4); left: var(--ag-space-4); z-index: 100;">
          <VueScrollProgress mode="badge" />
        </div>

        <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
          <VueScrollProgress mode="ring" :ring-size="48" />
        </div>

        <div style="padding: var(--ag-space-4);">
          <h2>Scroll Progress Demo</h2>
          <p>Scroll down to see the progress indicator update.</p>
          <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet, paragraph {{ i }}</p>
        </div>
      </div>
    `,
  }),
};

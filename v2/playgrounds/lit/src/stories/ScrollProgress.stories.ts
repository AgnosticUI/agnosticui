import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/scroll-progress';
import type { ScrollProgressProps } from 'agnosticui-core/scroll-progress';

const meta: Meta<ScrollProgressProps> = {
  title: 'AgnosticUI Lit/ScrollProgress',
  component: 'ag-scroll-progress',
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
};

export default meta;
type Story = StoryObj<ScrollProgressProps>;

// Helper to create scrollable content
const createScrollableContent = () => html`
  <div style="padding: var(--ag-space-4);">
    <h2>Scroll Progress Demo</h2>
    <p>Scroll down to see the progress indicator update.</p>
    ${Array.from({ length: 50 }, (_, i) => html`<p>Lorem ipsum dolor sit amet, paragraph ${i + 1}</p>`)}
  </div>
`;

export const BarModeTop: Story = {
  render: () => html`
    <ag-scroll-progress .mode=${'bar'} .orientation=${'top'}></ag-scroll-progress>
    ${createScrollableContent()}
  `,
};

export const BarModeBottom: Story = {
  render: () => html`
    <ag-scroll-progress .mode=${'bar'} .orientation=${'bottom'}></ag-scroll-progress>
    ${createScrollableContent()}
  `,
};

export const DotTrailMode: Story = {
  render: () => html`
    <div style="position: fixed; top: var(--ag-space-4); left: 50%; transform: translateX(-50%); z-index: 100;">
      <ag-scroll-progress .mode=${'dot-trail'} .dots=${7}></ag-scroll-progress>
    </div>
    ${createScrollableContent()}
  `,
};

export const DotTrailWithCustomVariant: Story = {
  render: () => html`
    <div style="position: fixed; top: var(--ag-space-4); left: 50%; transform: translateX(-50%); z-index: 100;">
      <ag-scroll-progress .mode=${'dot-trail'} .dots=${5} .badgeVariant=${'success'}></ag-scroll-progress>
    </div>
    ${createScrollableContent()}
  `,
};

export const BadgeMode: Story = {
  render: () => html`
    <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
      <ag-scroll-progress .mode=${'badge'}></ag-scroll-progress>
    </div>
    ${createScrollableContent()}
  `,
};

export const BadgeWithVariant: Story = {
  render: () => html`
    <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
      <ag-scroll-progress .mode=${'badge'} .badgeVariant=${'warning'}></ag-scroll-progress>
    </div>
    ${createScrollableContent()}
  `,
};

export const RingMode: Story = {
  render: () => html`
    <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
      <ag-scroll-progress .mode=${'ring'} .ringSize=${48}></ag-scroll-progress>
    </div>
    ${createScrollableContent()}
  `,
};

export const RingModeCustom: Story = {
  render: () => html`
    <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
      <ag-scroll-progress .mode=${'ring'} .ringSize=${64} .ringStrokeWidth=${4} .ringVariant=${'success'}></ag-scroll-progress>
    </div>
    ${createScrollableContent()}
  `,
};

export const CustomContainer: Story = {
  render: () => {
    setTimeout(() => {
      const container = document.getElementById('scroll-container');
      const scrollProgress = document.querySelector('ag-scroll-progress');
      if (container && scrollProgress) {
        (scrollProgress as any).target = container;
      }
    }, 100);

    return html`
      <div>
        <h3>Scrollable Container Example</h3>
        <p>The scroll progress tracks a custom container instead of the document</p>
        <ag-scroll-progress .mode=${'bar'}></ag-scroll-progress>
        <div
          id="scroll-container"
          style="height: 400px; overflow-y: auto; border: 2px solid var(--ag-border); border-radius: var(--ag-radius-md); padding: var(--ag-space-4);">
          ${Array.from({ length: 30 }, (_, i) => html`<p>Container paragraph ${i + 1}</p>`)}
        </div>
      </div>
    `;
  },
};

export const AllModes: Story = {
  render: () => html`
    <div>
      <ag-scroll-progress .mode=${'bar'} .orientation=${'top'}></ag-scroll-progress>

      <div style="position: fixed; top: var(--ag-space-4); left: 50%; transform: translateX(-50%); z-index: 99;">
        <ag-scroll-progress .mode=${'dot-trail'}></ag-scroll-progress>
      </div>

      <div style="position: fixed; bottom: var(--ag-space-4); left: var(--ag-space-4); z-index: 100;">
        <ag-scroll-progress .mode=${'badge'}></ag-scroll-progress>
      </div>

      <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
        <ag-scroll-progress .mode=${'ring'} .ringSize=${48}></ag-scroll-progress>
      </div>

      ${createScrollableContent()}
    </div>
  `,
};

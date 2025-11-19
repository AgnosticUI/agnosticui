import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import 'agnosticui-core/timeline';
import 'agnosticui-core/icon';

const meta: Meta = {
  title: 'AgnosticUI Lit/Timeline',
  component: 'ag-timeline',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'monochrome', ''],
    },
    compact: { control: 'boolean' },
    responsive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ag-timeline
      .orientation=${args.orientation}
      .variant=${args.variant}
      ?compact=${args.compact}
      ?responsive=${args.responsive}
    >
      <ag-timeline-item>
        <div slot="ag-start">2023-01-01</div>
        <div slot="ag-marker">
          <ag-icon type="success" size="18">check_circle</ag-icon>
        </div>
        <div slot="ag-end">Step 1 Completed</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">2023-02-01</div>
        <div slot="ag-marker">
          <ag-icon type="info" size="18">info</ag-icon>
        </div>
        <div slot="ag-end">Step 2 In Progress</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">2023-03-01</div>
        <div slot="ag-marker">
          <ag-icon type="warning" size="18">warning</ag-icon>
        </div>
        <div slot="ag-end">Step 3 Pending</div>
      </ag-timeline-item>
    </ag-timeline>
  `,
  args: {
    orientation: 'horizontal',
    variant: '',
    compact: false,
    responsive: true,
  },
};

export const Vertical: Story = {
  render: (args) => html`
    <ag-timeline
      orientation="vertical"
      .variant=${args.variant}
      ?compact=${args.compact}
    >
      <ag-timeline-item>
        <div slot="ag-start">09:00 AM</div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
        </div>
        <div slot="ag-end">
          <strong>Breakfast</strong>
          <p>Oatmeal and coffee</p>
        </div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">10:00 AM</div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
        </div>
        <div slot="ag-end">
          <strong>Meeting</strong>
          <p>Daily standup</p>
        </div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">11:00 AM</div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
        </div>
        <div slot="ag-end">
          <strong>Work</strong>
          <p>Focus time</p>
        </div>
      </ag-timeline-item>
    </ag-timeline>
  `,
  args: {
    variant: 'primary',
  },
};

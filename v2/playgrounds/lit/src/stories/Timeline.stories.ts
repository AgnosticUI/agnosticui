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
      orientation="${args.orientation || 'horizontal'}"
      variant="${args.variant || ''}"
      ?compact="${args.compact}"
      ?responsive="${args.responsive}"
    >
      <ag-timeline-item>
        <div slot="ag-start">2023-01-01</div>
        <div slot="ag-marker">
          <ag-icon type="success" size="18">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </ag-icon>
        </div>
        <div slot="ag-end">Step 1 Completed</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">2023-02-01</div>
        <div slot="ag-marker">
          <ag-icon type="info" size="18">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </ag-icon>
        </div>
        <div slot="ag-end">Step 2 In Progress</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">2023-03-01</div>
        <div slot="ag-marker">
          <ag-icon type="warning" size="18">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
          </ag-icon>
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

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

const cardStyle = 'border: 1px solid var(--ag-border); padding: var(--ag-space-2); border-radius: var(--ag-radius); background-color: var(--ag-background); margin-block-end: var(--ag-space-4);';

export const VerticalCardEnd: Story = {
  render: (args) => html`
    <ag-timeline
      orientation="vertical"
      variant="${args.variant || ''}"
      ?compact="${args.compact}"
      ?responsive="${args.responsive}"
      style="--ag-timeline-end-align: center"
    >
      <ag-timeline-item>
        <div slot="ag-start">09:00 AM</div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end" style="${cardStyle}">
          <strong>Breakfast</strong>
          <p style="margin: 0">Oatmeal and coffee</p>
        </div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">10:00 AM</div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end" style="${cardStyle}">
          <strong>Meeting</strong>
          <p style="margin: 0">Daily standup</p>
        </div>
      </ag-timeline-item>
    </ag-timeline>
  `,
  args: {
    variant: 'primary',
  },
};

export const VerticalCardStart: Story = {
  render: (args) => html`
    <ag-timeline
      orientation="vertical"
      variant="${args.variant || ''}"
      ?compact="${args.compact}"
      ?responsive="${args.responsive}"
      style="--ag-timeline-start-align: center"
    >
      <ag-timeline-item>
        <div slot="ag-start" style="${cardStyle}">
          <strong>Breakfast</strong>
          <p style="margin: 0">Oatmeal and coffee</p>
        </div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end">09:00 AM</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start" style="${cardStyle}">
          <strong>Meeting</strong>
          <p style="margin: 0">Daily standup</p>
        </div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end">10:00 AM</div>
      </ag-timeline-item>
    </ag-timeline>
  `,
  args: {
    variant: 'primary',
  },
};

export const VerticalAlternating: Story = {
  render: (args) => html`
    <ag-timeline
      orientation="vertical"
      variant="${args.variant || ''}"
      ?compact="${args.compact}"
      ?responsive="${args.responsive}"
      style="--ag-timeline-start-align: center; --ag-timeline-end-align: center"
    >
      <ag-timeline-item>
        <div slot="ag-start" style="${cardStyle}">
          <strong>Step 1</strong>
          <p style="margin: 0">Start with a card</p>
        </div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end">09:00 AM</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">10:00 AM</div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end" style="${cardStyle}">
          <strong>Step 2</strong>
          <p style="margin: 0">End has the card</p>
        </div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start" style="${cardStyle}">
          <strong>Step 3</strong>
          <p style="margin: 0">Back to start card</p>
        </div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end">11:00 AM</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">12:00 PM</div>
        <div slot="ag-marker">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
        </div>
        <div slot="ag-end" style="${cardStyle}">
          <strong>Step 4</strong>
          <p style="margin: 0">End has the card</p>
        </div>
      </ag-timeline-item>
    </ag-timeline>
  `,
  args: {
    variant: 'primary',
  },
};

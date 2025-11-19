import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactTimeline, ReactTimelineItem } from 'agnosticui-core/timeline/react';
import { ReactIcon } from 'agnosticui-core/icon/react';

const meta: Meta<typeof ReactTimeline> = {
  title: 'AgnosticUI React/Timeline',
  component: ReactTimeline,
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
type Story = StoryObj<typeof ReactTimeline>;

export const Default: Story = {
  render: (args) => (
    <ReactTimeline {...args}>
      <ReactTimelineItem>
        <div slot="ag-start">2023-01-01</div>
        <div slot="ag-marker">
          <ReactIcon type="success" size={18}>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
          </ReactIcon>
        </div>
        <div slot="ag-end">Step 1 Completed</div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">2023-02-01</div>
        <div slot="ag-marker">
          <ReactIcon type="info" size={18}>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
          </ReactIcon>
        </div>
        <div slot="ag-end">Step 2 In Progress</div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">2023-03-01</div>
        <div slot="ag-marker">
          <ReactIcon type="warning" size={18}>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
          </ReactIcon>
        </div>
        <div slot="ag-end">Step 3 Pending</div>
      </ReactTimelineItem>
    </ReactTimeline>
  ),
  args: {
    orientation: 'horizontal',
    variant: '',
    compact: false,
    responsive: true,
  },
};

export const Vertical: Story = {
  render: (args) => (
    <ReactTimeline {...args} orientation="vertical">
      <ReactTimelineItem>
        <div slot="ag-start">09:00 AM</div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end">
          <strong>Breakfast</strong>
          <p>Oatmeal and coffee</p>
        </div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">10:00 AM</div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end">
          <strong>Meeting</strong>
          <p>Daily standup</p>
        </div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">11:00 AM</div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end">
          <strong>Work</strong>
          <p>Focus time</p>
        </div>
      </ReactTimelineItem>
    </ReactTimeline>
  ),
  args: {
    variant: 'primary',
  },
};

const cardStyle = {
  border: '1px solid var(--ag-border)',
  padding: 'var(--ag-space-2)',
  borderRadius: 'var(--ag-radius)',
  backgroundColor: 'var(--ag-background)',
  marginBottom: 'var(--ag-space-4)',
};

export const VerticalCardEnd: Story = {
  render: (args) => (
    <ReactTimeline {...args} orientation="vertical" style={{ '--ag-timeline-end-align': 'center' } as React.CSSProperties}>
      <ReactTimelineItem>
        <div slot="ag-start">09:00 AM</div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end" style={cardStyle}>
          <strong>Breakfast</strong>
          <p style={{ margin: 0 }}>Oatmeal and coffee</p>
        </div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">10:00 AM</div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end" style={cardStyle}>
          <strong>Meeting</strong>
          <p style={{ margin: 0 }}>Daily standup</p>
        </div>
      </ReactTimelineItem>
    </ReactTimeline>
  ),
  args: {
    variant: 'primary',
  },
};

export const VerticalCardStart: Story = {
  render: (args) => (
    <ReactTimeline {...args} orientation="vertical" style={{ '--ag-timeline-start-align': 'center' } as React.CSSProperties}>
      <ReactTimelineItem>
        <div slot="ag-start" style={cardStyle}>
          <strong>Breakfast</strong>
          <p style={{ margin: 0 }}>Oatmeal and coffee</p>
        </div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end">09:00 AM</div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start" style={cardStyle}>
          <strong>Meeting</strong>
          <p style={{ margin: 0 }}>Daily standup</p>
        </div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end">10:00 AM</div>
      </ReactTimelineItem>
    </ReactTimeline>
  ),
  args: {
    variant: 'primary',
  },
};

export const VerticalAlternating: Story = {
  render: (args) => (
    <ReactTimeline {...args} orientation="vertical" style={{ '--ag-timeline-start-align': 'center', '--ag-timeline-end-align': 'center' } as React.CSSProperties}>
      <ReactTimelineItem>
        <div slot="ag-start" style={cardStyle}>
          <strong>Step 1</strong>
          <p style={{ margin: 0 }}>Start with a card</p>
        </div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end">09:00 AM</div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">10:00 AM</div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end" style={cardStyle}>
          <strong>Step 2</strong>
          <p style={{ margin: 0 }}>End has the card</p>
        </div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start" style={cardStyle}>
          <strong>Step 3</strong>
          <p style={{ margin: 0 }}>Back to start card</p>
        </div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end">11:00 AM</div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">12:00 PM</div>
        <div slot="ag-marker">
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
        </div>
        <div slot="ag-end" style={cardStyle}>
          <strong>Step 4</strong>
          <p style={{ margin: 0 }}>End has the card</p>
        </div>
      </ReactTimelineItem>
    </ReactTimeline>
  ),
  args: {
    variant: 'primary',
  },
};

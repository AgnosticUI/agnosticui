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
          <ReactIcon type="success" size="18">check_circle</ReactIcon>
        </div>
        <div slot="ag-end">Step 1 Completed</div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">2023-02-01</div>
        <div slot="ag-marker">
          <ReactIcon type="info" size="18">info</ReactIcon>
        </div>
        <div slot="ag-end">Step 2 In Progress</div>
      </ReactTimelineItem>
      <ReactTimelineItem>
        <div slot="ag-start">2023-03-01</div>
        <div slot="ag-marker">
          <ReactIcon type="warning" size="18">warning</ReactIcon>
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

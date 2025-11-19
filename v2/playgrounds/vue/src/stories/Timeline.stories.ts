import type { Meta, StoryObj } from '@storybook/vue3';
import { VueTimeline as AgTimeline, VueTimelineItem as AgTimelineItem } from 'agnosticui-core/timeline/vue';
import { VueIcon as AgIcon } from 'agnosticui-core/icon/vue';

const meta: Meta<typeof AgTimeline> = {
  title: 'AgnosticUI Vue/Timeline',
  component: AgTimeline,
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
type Story = StoryObj<typeof AgTimeline>;

export const Default: Story = {
  render: (args) => ({
    components: { AgTimeline, AgTimelineItem, AgIcon },
    setup() {
      return { args };
    },
    template: `
      <AgTimeline v-bind="args">
        <AgTimelineItem>
          <template #ag-start>2023-01-01</template>
          <template #ag-marker>
            <AgIcon type="success" size="18">check_circle</AgIcon>
          </template>
          <template #ag-end>Step 1 Completed</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-02-01</template>
          <template #ag-marker>
            <AgIcon type="info" size="18">info</AgIcon>
          </template>
          <template #ag-end>Step 2 In Progress</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-03-01</template>
          <template #ag-marker>
            <AgIcon type="warning" size="18">warning</AgIcon>
          </template>
          <template #ag-end>Step 3 Pending</template>
        </AgTimelineItem>
      </AgTimeline>
    `,
  }),
  args: {
    orientation: 'horizontal',
    variant: '',
    compact: false,
    responsive: true,
  },
};

export const Vertical: Story = {
  render: (args) => ({
    components: { AgTimeline, AgTimelineItem },
    setup() {
      return { args };
    },
    template: `
      <AgTimeline v-bind="args" orientation="vertical">
        <AgTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Breakfast</strong>
            <p>Oatmeal and coffee</p>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Meeting</strong>
            <p>Daily standup</p>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>11:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Work</strong>
            <p>Focus time</p>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    `,
  }),
  args: {
    variant: 'primary',
  },
};

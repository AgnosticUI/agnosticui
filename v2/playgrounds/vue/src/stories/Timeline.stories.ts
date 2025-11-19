import type { Meta, StoryObj } from '@storybook/vue3';
import { VueTimeline as AgTimeline, VueTimelineItem as AgTimelineItem } from 'agnosticui-core/timeline/vue';
import { VueIcon as AgIcon } from 'agnosticui-core/icon/vue';
import { VueCard as AgCard } from 'agnosticui-core/card/vue';
import VueButton from 'agnosticui-core/button/vue';
import { VueBadge as AgBadge } from 'agnosticui-core/badge/vue';
import { VueIconButton as AgIconButton } from 'agnosticui-core/icon-button/vue';

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
            <AgIcon type="success" size="18">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 1 Completed</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-02-01</template>
          <template #ag-marker>
            <AgIcon type="info" size="18">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 2 In Progress</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-03-01</template>
          <template #ag-marker>
            <AgIcon type="warning" size="18">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
            </AgIcon>
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

const cardStyle = 'border: 1px solid var(--ag-border); padding: var(--ag-space-2); border-radius: var(--ag-radius); background-color: var(--ag-background); margin-block-end: var(--ag-space-4);';

export const VerticalCardEnd: Story = {
  render: (args) => ({
    components: { AgTimeline, AgTimelineItem },
    setup() {
      return { args, cardStyle };
    },
    template: `
      <AgTimeline v-bind="args" orientation="vertical" style="--ag-timeline-end-align: center">
        <AgTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Breakfast</strong>
              <p style="margin: 0">Oatmeal and coffee</p>
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Meeting</strong>
              <p style="margin: 0">Daily standup</p>
            </div>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    `,
  }),
  args: {
    variant: 'primary',
  },
};

export const VerticalCardStart: Story = {
  render: (args) => ({
    components: { AgTimeline, AgTimelineItem },
    setup() {
      return { args, cardStyle };
    },
    template: `
      <AgTimeline v-bind="args" orientation="vertical" style="--ag-timeline-start-align: center">
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Breakfast</strong>
              <p style="margin: 0">Oatmeal and coffee</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>09:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Meeting</strong>
              <p style="margin: 0">Daily standup</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>10:00 AM</template>
        </AgTimelineItem>
      </AgTimeline>
    `,
  }),
  args: {
    variant: 'primary',
  },
};

export const VerticalAlternating: Story = {
  render: (args) => ({
    components: { AgTimeline, AgTimelineItem },
    setup() {
      return { args, cardStyle };
    },
    template: `
      <AgTimeline v-bind="args" orientation="vertical" style="--ag-timeline-start-align: center; --ag-timeline-end-align: center">
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Step 1</strong>
              <p style="margin: 0">Start with a card</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>09:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Step 2</strong>
              <p style="margin: 0">End has the card</p>
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Step 3</strong>
              <p style="margin: 0">Back to start card</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>11:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>12:00 PM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Step 4</strong>
              <p style="margin: 0">End has the card</p>
            </div>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    `,
  }),
  args: {
    variant: 'primary',
  },
};

export const VerticalRich: Story = {
  render: (args) => ({
    components: { AgTimeline, AgTimelineItem, AgIcon, AgCard, VueButton, AgBadge, AgIconButton },
    setup() {
      return { args };
    },
    template: `
      <AgTimeline v-bind="args" orientation="vertical" style="--ag-timeline-end-align: center; --ag-timeline-start-align: center">
        <AgTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <AgCard animated rounded="md">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);">
                <strong>Project Kickoff</strong>
                <AgBadge variant="success">New</AgBadge>
              </div>
              <p style="margin: 0 0 var(--ag-space-2) 0;">Initial meeting with the stakeholders to define the project scope.</p>
              <VueButton variant="primary" shape="rounded" size="sm">View Details</VueButton>
            </AgCard>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <AgCard animated rounded="md">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);">
                <strong>Design Review</strong>
                <AgBadge variant="info">In Progress</AgBadge>
              </div>
              <p style="margin: 0 0 var(--ag-space-2) 0;">Reviewing the initial mockups with the design team.</p>
              <div style="display: flex; gap: var(--ag-space-1);">
                <VueButton variant="primary" shape="rounded" size="sm">Approve</VueButton>
                <VueButton variant="primary" shape="rounded" size="sm" bordered>Reject</VueButton>
              </div>
            </AgCard>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>11:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>02:00 PM</template>
          <template #ag-marker>
            <AgIcon type="warning" size="24">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
            </AgIcon>
          </template>
          <template #ag-end>
            <AgCard animated rounded="md">
              <div style="display: flex; align-items: center; gap: var(--ag-space-2); margin-block-end: var(--ag-space-2);">
                <strong>Client Call</strong>
                <AgIconButton size="sm" label="Call Client">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z"/></svg>
                </AgIconButton>
              </div>
              <p style="margin: 0;">Discuss feedback on the latest release.</p>
            </AgCard>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    `,
  }),
  args: {
    variant: 'primary',
  },
};


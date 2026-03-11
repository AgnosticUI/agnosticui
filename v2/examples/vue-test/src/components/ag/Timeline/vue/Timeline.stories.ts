import type { Meta, StoryObj } from '@storybook/vue3';
import { VueTimeline, VueTimelineItem } from './index';

const meta = {
  title: 'AgnosticUI/Timeline',
  component: VueTimeline,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    compact: { control: 'boolean' },
  },
  args: { orientation: 'horizontal', variant: '' },
  render: (args: any) => ({
    components: { VueTimeline, VueTimelineItem },
    setup() { return { args }; },
    template: `
      <VueTimeline v-bind="args">
        <VueTimelineItem>
          <template #ag-start>Jan 2024</template>
          <template #ag-end>Project kickoff</template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>Mar 2024</template>
          <template #ag-end>Design phase</template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>Jun 2024</template>
          <template #ag-end>Development complete</template>
        </VueTimelineItem>
      </VueTimeline>
    `,
  }),
} satisfies Meta<typeof VueTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Vertical: Story = { args: { orientation: 'vertical' } };
export const Primary: Story = { args: { variant: 'primary' } };

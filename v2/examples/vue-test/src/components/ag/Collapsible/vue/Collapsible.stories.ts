import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import VueCollapsible from './VueCollapsible.vue';

const meta = {
  title: 'AgnosticUI/Collapsible',
  component: VueCollapsible,
  tags: ['autodocs'],
} satisfies Meta<typeof VueCollapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { VueCollapsible },
    template: `
      <VueCollapsible>
        <template #summary>Toggle details</template>
        <div>Collapsible content goes here.</div>
      </VueCollapsible>
    `,
  }),
};

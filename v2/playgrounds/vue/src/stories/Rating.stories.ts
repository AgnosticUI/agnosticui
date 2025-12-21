import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueRating } from '../../../../lib/src/components/Rating/vue';
import type { RatingChangeEvent, RatingHoverEvent } from '../../../../lib/src/components/Rating/vue';

const meta = {
  title: 'AgnosticUI Vue/Rating',
  component: VueRating,
  argTypes: {
    value: { control: 'number', description: 'Current rating value' },
    max: { control: 'number', description: 'Total number of stars' },
    precision: {
      control: 'select',
      options: ['whole', 'half'],
      description: 'Precision mode: whole or half stars',
    },
    readonly: { control: 'boolean', description: 'Disables interaction' },
    allowClear: { control: 'boolean', description: 'Allows clearing rating' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the rating component',
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Visual variant that applies a color scheme.',
    },
  },
  args: {
    value: 3,
    max: 5,
    precision: 'whole',
    readonly: false,
    allowClear: false,
    size: 'md',
    variant: '',
  },
} satisfies Meta<typeof VueRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueRating },
    setup() {
      return { args };
    },
    template: `<VueRating v-bind="args" />`,
  }),
};

export const HalfPrecision: Story = {
  args: {
    value: 2.5,
    precision: 'half',
  },
  render: (args) => ({
    components: { VueRating },
    setup() {
      return { args };
    },
    template: `<VueRating v-bind="args" />`,
  }),
};

export const Readonly: Story = {
  args: {
    value: 4,
    readonly: true,
  },
  render: (args) => ({
    components: { VueRating },
    setup() {
      return { args };
    },
    template: `<VueRating v-bind="args" />`,
  }),
};

export const AllowClear: Story = {
  render: (args) => ({
    components: { VueRating },
    setup() {
      const value = ref(3);
      const onUpdate = (newValue: number) => {
        value.value = newValue;
      };
      return { args, value, onUpdate };
    },
    template: `<VueRating v-bind="args" :allow-clear="true" :value="value" @update:value="onUpdate" />`,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueRating },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <VueRating size="sm" :value="3" />
        <VueRating size="md" :value="3" />
        <VueRating size="lg" :value="3" />
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { VueRating },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <VueRating variant="primary" :value="3" />
        <VueRating variant="secondary" :value="3" />
        <VueRating variant="success" :value="3" />
        <VueRating variant="warning" :value="3" />
        <VueRating variant="danger" :value="3" />
      </div>
    `,
  }),
};

export const EventHandling: Story = {
  render: () => ({
    components: { VueRating },
    setup() {
      const value = ref(3);
      const hoverValue = ref(0);
      const lastEvent = ref('');

      const handleChange = (detail: RatingChangeEvent) => {
        lastEvent.value = `change: oldValue=${detail.oldValue}, newValue=${detail.newValue}`;
      };

      const handleHover = (detail: RatingHoverEvent) => {
        hoverValue.value = detail.value;
        lastEvent.value = `hover: phase=${detail.phase}, value=${detail.value}`;
      };

      const onUpdate = (newValue: number) => {
        value.value = newValue;
      };

      return { value, hoverValue, lastEvent, handleChange, handleHover, onUpdate };
    },
    template: `
      <div>
        <VueRating
          :value="value"
          @update:value="onUpdate"
          @change="handleChange"
          @hover="handleHover"
        />
        <div style="margin-top: 1rem;">
          <p>Current Value: {{ value }}</p>
          <p>Hover Value: {{ hoverValue }}</p>
          <p>Last Event: {{ lastEvent }}</p>
        </div>
      </div>
    `,
  }),
};

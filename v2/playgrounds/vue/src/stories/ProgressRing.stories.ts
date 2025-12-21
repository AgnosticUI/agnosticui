
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, onMounted, onUnmounted } from 'vue';
import VueProgressRing from 'agnosticui-core/progress-ring/vue';
import type { AgProgressRingProps } from 'agnosticui-core/progress-ring/vue';

const meta: Meta<AgProgressRingProps> = {
  title: 'AgnosticUI Vue/ProgressRing',
  component: VueProgressRing,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant',
    },
    label: {
      control: 'text',
      description: 'Accessible label',
    },
    noAnimation: {
      control: 'boolean',
      description: 'Disable animation',
    },
  },
  args: {
    value: 0,
    size: 'medium',
    variant: 'primary',
    label: 'Progress',
    noAnimation: false,
  },
};

export default meta;
type Story = StoryObj<AgProgressRingProps>;

export const Default: Story = {
  args: {
    value: 0,
    label: 'Default progress ring',
  },
  render: (args) => ({
    components: { VueProgressRing },
    setup() {
      return { args };
    },
    template: `<VueProgressRing v-bind="args" />`,
  }),
};

export const InProgress: Story = {
  args: {
    value: 65,
    label: 'Upload in progress',
  },
  render: (args) => ({
    components: { VueProgressRing },
    setup() {
      return { args };
    },
    template: `<VueProgressRing v-bind="args" />`,
  }),
};

export const Complete: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: 'Upload complete',
  },
  render: (args) => ({
    components: { VueProgressRing },
    setup() {
      return { args };
    },
    template: `<VueProgressRing v-bind="args" />`,
  }),
};

export const NoAnimation: Story = {
  args: {
    value: 70,
    noAnimation: true,
    label: 'No animation',
  },
  render: (args) => ({
    components: { VueProgressRing },
    setup() {
      return { args };
    },
    template: `<VueProgressRing v-bind="args" />`,
  }),
};



export const Sizes: Story = {
  render: () => ({
    components: { VueProgressRing },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <VueProgressRing size="small" :value="75" label="Small" />
        <VueProgressRing size="medium" :value="75" label="Medium" />
        <VueProgressRing size="large" :value="75" label="Large" />
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { VueProgressRing },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <VueProgressRing variant="primary" :value="60" label="Primary" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</div>
        </div>
        <div style="text-align: center;">
          <VueProgressRing variant="success" :value="100" label="Success" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Success</div>
        </div>
        <div style="text-align: center;">
          <VueProgressRing variant="warning" :value="45" label="Warning" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</div>
        </div>
        <div style="text-align: center;">
          <VueProgressRing variant="danger" :value="30" label="Danger" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</div>
        </div>
        <div style="text-align: center;">
          <VueProgressRing variant="info" :value="80" label="Info" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Info</div>
        </div>
      </div>
    `,
  }),
};

export const CustomContent: Story = {
  render: (args) => ({
    components: { VueProgressRing },
    setup() {
      return { args };
    },
    template: `
      <VueProgressRing v-bind="args">
        <span style="font-size: 0.75rem;">75/100</span>
      </VueProgressRing>
    `,
  }),
  args: {
    value: 75,
    variant: 'success',
    label: 'Custom content',
  },
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { VueProgressRing },
    setup() {
      return { args };
    },
    template: `
      <VueProgressRing v-bind="args" size="large">
        <span style="font-size: 1.5rem;">✓</span>
      </VueProgressRing>
    `,
  }),
  args: {
    value: 100,
    variant: 'success',
    label: 'Task complete',
  },
};

export const Animated: Story = {
  render: () => ({
    components: { VueProgressRing },
    setup() {
      const value = ref(0);
      let interval: ReturnType<typeof setInterval>;

      onMounted(() => {
        interval = setInterval(() => {
          if (value.value >= 100) {
            clearInterval(interval);
          } else {
            value.value += 1;
          }
        }, 50);
      });

      onUnmounted(() => {
        if (interval) clearInterval(interval);
      });

      return { value };
    },
    template: `
      <VueProgressRing :value="value" label="Animated progress" />
    `,
  }),
};

export const MultipleRings: Story = {
  render: () => ({
    components: { VueProgressRing },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 2rem; max-width: 600px;">
        <div style="text-align: center;">
          <VueProgressRing :value="25" variant="danger" label="Critical tasks" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Critical</div>
        </div>
        <div style="text-align: center;">
          <VueProgressRing :value="60" variant="warning" label="In progress tasks" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">In Progress</div>
        </div>
        <div style="text-align: center;">
          <VueProgressRing :value="85" variant="info" label="Review tasks" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Review</div>
        </div>
        <div style="text-align: center;">
          <VueProgressRing :value="100" variant="success" label="Completed tasks" />
          <div style="margin-top: 0.5rem; font-size: 0.875rem;">Complete</div>
        </div>
      </div>
    `,
  }),
};


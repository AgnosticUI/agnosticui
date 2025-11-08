import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueSkeleton } from 'agnosticui-core/skeleton/vue';

const meta = {
  title: 'AgnosticUI Vue/SkeletonLoader',
  component: VueSkeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
      description: 'Shape variant of the skeleton',
    },
    effect: {
      control: 'select',
      options: ['pulse', 'sheen', 'none'],
      description: 'Animation effect',
    },
    intensity: {
      control: 'select',
      options: ['light', 'medium'],
      description: 'Background intensity (light uses --ag-background-secondary, medium uses --ag-background-tertiary)',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (CSS value)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (CSS value)',
    },
  },
} satisfies Meta<typeof VueSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with all controls
export const Default: Story = {
  args: {
    variant: 'text',
    effect: 'pulse',
    intensity: 'light',
    width: '100%',
    height: '1em',
  },
  render: (args) => ({
    components: { VueSkeleton },
    setup() {
      return { args };
    },
    template: `<VueSkeleton v-bind="args" />`,
  }),
};

// Text Skeleton (default)
export const Text: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="width: 300px;">
        <VueSkeleton />
        <VueSkeleton style="margin-top: 8px;" />
        <VueSkeleton style="margin-top: 8px; width: 60%;" />
      </div>
    `,
  }),
};

// Circular Skeleton (for avatars)
export const Circular: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <VueSkeleton variant="circular" width="40px" height="40px" />
        <VueSkeleton variant="circular" width="60px" height="60px" />
        <VueSkeleton variant="circular" width="80px" height="80px" />
      </div>
    `,
  }),
};

// Rectangular Skeleton
export const Rectangular: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `<VueSkeleton variant="rectangular" width="300px" height="200px" />`,
  }),
};

// Rounded Skeleton (for cards/images)
export const Rounded: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `<VueSkeleton variant="rounded" width="300px" height="200px" />`,
  }),
};

// Pulse Effect (default)
export const PulseEffect: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="width: 300px;">
        <VueSkeleton effect="pulse" />
        <VueSkeleton effect="pulse" style="margin-top: 8px;" />
        <VueSkeleton effect="pulse" style="margin-top: 8px; width: 60%;" />
      </div>
    `,
  }),
};

// Sheen Effect
export const SheenEffect: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="width: 300px;">
        <VueSkeleton effect="sheen" />
        <VueSkeleton effect="sheen" style="margin-top: 8px;" />
        <VueSkeleton effect="sheen" style="margin-top: 8px; width: 60%;" />
      </div>
    `,
  }),
};

// No Animation
export const NoAnimation: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="width: 300px;">
        <VueSkeleton effect="none" />
        <VueSkeleton effect="none" style="margin-top: 8px;" />
        <VueSkeleton effect="none" style="margin-top: 8px; width: 60%;" />
      </div>
    `,
  }),
};

// User Profile Card Loading
export const UserProfileLoading: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="display: flex; gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px;">
        <VueSkeleton variant="circular" width="60px" height="60px" />
        <div style="flex: 1;">
          <VueSkeleton width="40%" height="16px" />
          <VueSkeleton width="60%" height="14px" style="margin-top: 8px;" />
          <VueSkeleton width="80%" height="14px" style="margin-top: 8px;" />
        </div>
      </div>
    `,
  }),
};

// Article Card Loading
export const ArticleCardLoading: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px;">
        <VueSkeleton variant="rectangular" width="100%" height="200px" />
        <div style="padding: 16px;">
          <VueSkeleton width="60%" height="20px" />
          <VueSkeleton width="100%" height="14px" style="margin-top: 12px;" />
          <VueSkeleton width="100%" height="14px" style="margin-top: 8px;" />
          <VueSkeleton width="40%" height="14px" style="margin-top: 8px;" />
        </div>
      </div>
    `,
  }),
};

// List Loading
export const ListLoading: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="max-width: 500px;">
        <div v-for="i in 5" :key="i" style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px;">
          <VueSkeleton variant="circular" width="40px" height="40px" />
          <div style="flex: 1;">
            <VueSkeleton width="60%" height="16px" />
            <VueSkeleton width="40%" height="14px" style="margin-top: 8px;" />
          </div>
        </div>
      </div>
    `,
  }),
};

// Table Loading
export const TableLoading: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="max-width: 600px;">
        <div v-for="i in 4" :key="i" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 12px; padding: 12px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm);">
          <VueSkeleton height="16px" />
          <VueSkeleton height="16px" />
          <VueSkeleton height="16px" />
        </div>
      </div>
    `,
  }),
};

// Custom Dimensions
export const CustomDimensions: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VueSkeleton width="100px" height="20px" />
        <VueSkeleton width="200px" height="30px" />
        <VueSkeleton width="300px" height="40px" />
        <VueSkeleton width="400px" height="50px" />
      </div>
    `,
  }),
};

// Intensity Comparison
export const IntensityComparison: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 8px;">Light Intensity (default)</h4>
          <div style="width: 300px;">
            <VueSkeleton intensity="light" />
            <VueSkeleton intensity="light" style="margin-top: 8px;" />
            <VueSkeleton intensity="light" style="margin-top: 8px; width: 60%;" />
          </div>
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Medium Intensity</h4>
          <div style="width: 300px;">
            <VueSkeleton intensity="medium" />
            <VueSkeleton intensity="medium" style="margin-top: 8px;" />
            <VueSkeleton intensity="medium" style="margin-top: 8px; width: 60%;" />
          </div>
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Side by Side</h4>
          <div style="display: flex; gap: 16px;">
            <div style="flex: 1;">
              <p style="margin-bottom: 8px; font-size: 12px;">Light</p>
              <VueSkeleton intensity="light" width="200px" height="100px" variant="rounded" />
            </div>
            <div style="flex: 1;">
              <p style="margin-bottom: 8px; font-size: 12px;">Medium</p>
              <VueSkeleton intensity="medium" width="200px" height="100px" variant="rounded" />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

// Dark Mode Test
export const DarkModeTest: Story = {
  render: () => ({
    components: { VueSkeleton },
    template: `
      <div>
        <p style="margin-bottom: 16px;">Toggle dark mode in your browser to test:</p>
        <div style="display: flex; gap: 16px;">
          <div>
            <h4 style="margin-bottom: 8px;">Pulse Effect</h4>
            <VueSkeleton effect="pulse" width="200px" />
          </div>
          <div>
            <h4 style="margin-bottom: 8px;">Sheen Effect</h4>
            <VueSkeleton effect="sheen" width="200px" />
          </div>
        </div>
      </div>
    `,
  }),
};

// Loading State Container Example
export const LoadingStateContainer: Story = {
  render: () => ({
    components: { VueSkeleton },
    setup() {
      const loading = ref(true);

      const toggleLoading = () => {
        loading.value = !loading.value;
      };

      return { loading, toggleLoading };
    },
    template: `
      <div>
        <button
          @click="toggleLoading"
          style="padding: 8px 16px; margin-bottom: 16px; cursor: pointer;"
        >
          Toggle Loading
        </button>
        <div style="padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px;">
          <div v-if="loading">
            <VueSkeleton width="60%" height="20px" />
            <VueSkeleton width="100%" height="14px" style="margin-top: 12px;" />
            <VueSkeleton width="100%" height="14px" style="margin-top: 8px;" />
            <VueSkeleton width="40%" height="14px" style="margin-top: 8px;" />
          </div>
          <div v-else>
            <h3>Article Title</h3>
            <p>
              This is the actual content that loads after the skeleton disappears. The
              skeleton provides a visual placeholder while the real content is being fetched.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

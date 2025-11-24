import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueVisuallyHidden } from 'agnosticui-core/visually-hidden/vue';

const meta = {
  title: 'AgnosticUI Vue/VisuallyHidden',
  component: VueVisuallyHidden,
} satisfies Meta<typeof VueVisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { VueVisuallyHidden },
    template: `
      <div>
        <p class="mbe16">
          The <code>VisuallyHidden</code> component is used to hide content from the screen
          but keep it available for screen readers. A common use case is to provide a
          text label for an icon-only button.
        </p>
        <button
          class="btn btn-primary"
          @click="() => alert('Button clicked!')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          <VueVisuallyHidden>Close</VueVisuallyHidden>
        </button>
        <p class="mbs16">
          The button above contains an SVG icon and a visually hidden "Close" text.
          Inspect the button with your browser's developer tools to see the hidden text.
          A screen reader will announce "Close, button".
        </p>
      </div>
    `,
  }),
};

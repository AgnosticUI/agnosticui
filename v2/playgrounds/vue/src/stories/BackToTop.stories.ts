import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueBackToTop } from 'agnosticui-core/back-to-top/vue';

const meta = {
  title: 'AgnosticUI Vue/BackToTop',
  component: VueBackToTop,
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Manually controls visibility (mostly for debugging)',
    },
    threshold: {
      control: 'number',
      description: 'Scroll threshold in pixels before showing the button',
    },
  },
  args: {
    threshold: 400,
  },
} satisfies Meta<typeof VueBackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueBackToTop },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Scroll down to see the BackToTop button</h1>
        <p>The button will appear after scrolling {{ args.threshold }}px.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p v-for="i in 20" :key="i" style="margin-bottom: 50px;">Scroll more...</p>
        <VueBackToTop v-bind="args" />
      </div>
    `,
  }),
};

export const CustomContent: Story = {
  render: (args) => ({
    components: { VueBackToTop },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>BackToTop with Custom Content</h1>
        <p>The button will appear after scrolling {{ args.threshold }}px. This time with custom text.</p>
        <p v-for="i in 20" :key="i" style="margin-bottom: 50px;">Scroll more...</p>
        <VueBackToTop v-bind="args">
          <span>GO UP!</span>
        </VueBackToTop>
      </div>
    `,
  }),
  args: {
    threshold: 400,
  },
};

export const CSSPartsCustomization: Story = {
  render: (args) => ({
    components: { VueBackToTop },
    setup() {
      const styles = `
        <style>
          .custom-button::part(ag-backtotop-button) {
            background-color: var(--ag-success);
            border-color: var(--ag-primary-dark);
            color: var(--ag-light);
            font-weight: bold;
            padding: var(--ag-space-4);
            border-radius: var(--ag-radius-xl);
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="min-height: 200vh; padding: 20px;">
          <h1>Customized BackToTop Button</h1>
          <p>The button will appear after scrolling {{ args.threshold }}px and will be custom styled.</p>
          <p v-for="i in 20" :key="i" style="margin-bottom: 50px;">Scroll more...</p>
          <VueBackToTop class="custom-button" v-bind="args" />
        </div>
      </div>
    `,
  }),
  args: {
    threshold: 400,
  },
};
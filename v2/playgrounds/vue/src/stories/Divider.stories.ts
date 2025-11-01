import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueDivider } from '../../../../lib/src/components/Divider/vue';

const meta = {
  title: 'AgnosticUI Vue/Divider',
  component: VueDivider,
  argTypes: {
    vertical: { control: 'boolean', description: 'Vertical orientation' },
    justify: {
      control: 'select',
      options: ['center', 'start', 'end'],
      description: 'Content justification (horizontal only)',
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'large', 'xlarge'],
      description: 'Divider thickness',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'error'],
      description: 'Color variant',
    },
  },
  args: {
    vertical: false,
    justify: 'center',
    size: 'default',
    variant: 'default',
  },
} satisfies Meta<typeof VueDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueDivider },
    setup() {
      return { args };
    },
    template: `<VueDivider v-bind="args" />`,
  }),
};

export const HorizontalBasic: Story = {
  render: () => ({
    components: { VueDivider },
    template: `
      <div>
        <p>Content above divider</p>
        <VueDivider />
        <p>Content below divider</p>
      </div>
    `,
  }),
};

export const HorizontalWithContent: Story = {
  render: () => ({
    components: { VueDivider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <VueDivider>Centered (default)</VueDivider>
        <VueDivider justify="start">Justify Start</VueDivider>
        <VueDivider justify="end">Justify End</VueDivider>
      </div>
    `,
  }),
};

export const VerticalBasic: Story = {
  render: () => ({
    components: { VueDivider },
    template: `
      <div style="display: flex; min-height: 200px;">
        <p style="flex: 1;">Left content</p>
        <VueDivider is-vertical />
        <p style="flex: 1;">Right content</p>
      </div>
    `,
  }),
};

export const VerticalWithContent: Story = {
  render: () => ({
    components: { VueDivider },
    template: `
      <div style="display: flex; gap: 1rem; min-height: 200px;">
        <p style="flex: 1;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <VueDivider is-vertical>Yes</VueDivider>
        <p style="flex: 1;">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <VueDivider is-vertical>Sir!</VueDivider>
        <p style="flex: 1;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    `,
  }),
};

export const SizesHorizontal: Story = {
  render: () => ({
    components: { VueDivider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <VueDivider size="small">Small</VueDivider>
        <VueDivider size="default">Default</VueDivider>
        <VueDivider size="large">Large</VueDivider>
        <VueDivider size="xlarge">XLarge</VueDivider>
      </div>
    `,
  }),
};

export const SizesVertical: Story = {
  render: () => ({
    components: { VueDivider },
    template: `
      <div style="display: flex; gap: 1rem; min-height: 150px;">
        <p style="flex: 1;">Content</p>
        <VueDivider is-vertical size="small">Sm</VueDivider>
        <p style="flex: 1;">Content</p>
        <VueDivider is-vertical size="default">Def</VueDivider>
        <p style="flex: 1;">Content</p>
        <VueDivider is-vertical size="large">Lg</VueDivider>
        <p style="flex: 1;">Content</p>
        <VueDivider is-vertical size="xlarge">XL</VueDivider>
        <p style="flex: 1;">Content</p>
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { VueDivider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <VueDivider variant="default">Default</VueDivider>
        <VueDivider variant="success">Success</VueDivider>
        <VueDivider variant="info">Info</VueDivider>
        <VueDivider variant="warning">Warning</VueDivider>
        <VueDivider variant="error">Error</VueDivider>
      </div>
    `,
  }),
};

export const CustomizedWithCSSParts: Story = {
  render: () => ({
    components: { VueDivider },
    setup() {
      const styles = `
        <style>
          .custom-divider::part(ag-divider)::before,
          .custom-divider::part(ag-divider)::after {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            height: 4px;
          }

          .custom-divider::part(ag-divider-content) {
            color: #667eea;
            font-weight: 700;
            font-size: 1.125rem;
          }

          .custom-dotted::part(ag-divider)::before,
          .custom-dotted::part(ag-divider)::after {
            background: repeating-linear-gradient(
              90deg,
              #10b981 0,
              #10b981 10px,
              transparent 10px,
              transparent 20px
            );
            height: 3px;
          }

          .custom-vertical::part(ag-divider)::before,
          .custom-vertical::part(ag-divider)::after {
            background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
            width: 6px;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; flex-direction: column; gap: 3rem; padding: 2rem;">
          <VueDivider class="custom-divider">Gradient Divider</VueDivider>
          <VueDivider class="custom-dotted">Dotted Pattern</VueDivider>
          <div style="display: flex; min-height: 150px;">
            <p style="flex: 1;">Custom vertical gradient divider</p>
            <VueDivider class="custom-vertical" is-vertical>Custom</VueDivider>
            <p style="flex: 1;">Styled with CSS Shadow Parts</p>
          </div>
        </div>
      </div>
    `,
  }),
};

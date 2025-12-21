import type { Meta, StoryObj } from '@storybook/vue3';
import { VueTag, type VueTagProps } from 'agnosticui-core/tag/vue';

const meta = {
  title: 'AgnosticUI Vue/Tag',
  component: VueTag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["", "info", "warning", "error", "success"],
      description: "The visual variant of the tag",
    },
    shape: {
      control: "select",
      options: ["", "pill", "round", "circle"],
      description: "The shape of the tag",
    },
    uppercase: {
      control: "boolean",
      description: "Whether to render the text in uppercase",
    },
  },
  args: {
    variant: "",
    shape: "",
    uppercase: false,
  },
} satisfies Meta<typeof VueTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { },
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `
      <VueTag v-bind="args">
        Default Tag
      </VueTag>
    `,
  }),
};

export const Info: Story = {
  args: { variant: "info" },
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Info Tag</VueTag>`,
  }),
};

export const Success: Story = {
  args: { variant: "success" },
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Success Tag</VueTag>`,
  }),
};

export const Warning: Story = {
  args: { variant: "warning" },
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Warning Tag</VueTag>`,
  }),
};

export const Error: Story = {
  args: { variant: "error" },
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Error Tag</VueTag>`,
  }),
};

export const PillShape: Story = {
  args: { shape: "pill", variant: "primary" },
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Pill Tag</VueTag>`,
  }),
};

export const CircleShape: Story = {
  args: { shape: "circle", variant: "success" },
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Circle Pill Tag</VueTag>`,
  }),
};

export const Uppercase: Story = {
  args: { uppercase: true, variant: "warning"},
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Uppercase Tag</VueTag>`,
  }),
};

export const WithCloseSlotError: Story = {
  args: { variant: "error"},
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Deletable
    <button slot="close" aria-label="close">✕</button>
    </VueTag>`,
  }),
};

export const WithCloseSlotPrimary: Story = {
  args: { variant: "primary"},
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Primary
    <button slot="close" aria-label="close">✕</button>
    </VueTag>`,
  }),
};

export const WithCloseSlotSuccess: Story = {
  args: { variant: "success"},
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Success
    <button slot="close" aria-label="close">✕</button>
    </VueTag>`,
  }),
};

export const WithCloseSlotWarning: Story = {
  args: { variant: "warning"},
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Warning
    <button slot="close" aria-label="close">✕</button>
    </VueTag>`,
  }),
};

export const WithCloseSlotPrimaryPill: Story = {
  args: { variant: "primary", shape: "pill"},
  render: (args: VueTagProps) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args">Primary Pill Tag
      <button slot="close" aria-label="close">✕</button>
    </VueTag>`,
  }),
};
export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueTag },
    setup() {
      const styles = `
        <style>
          .custom-gradient-tag::part(ag-tag-wrapper) {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: 600;
            padding: 0.5rem 1rem;
          }

          .custom-outline-tag::part(ag-tag-wrapper) {
            background: transparent;
            color: #764ba2;
            border: 2px solid #764ba2;
          }

          .custom-minimal-tag::part(ag-tag-wrapper) {
            background: var(--ag-background-subtle);
            color: var(--ag-text-secondary);
            border-radius: 6px;
            font-size: 0.85rem;
            padding: 0.25rem 0.75rem;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem;">
          <VueTag class="custom-gradient-tag">Gradient Tag</VueTag>
          <VueTag class="custom-outline-tag">Outline Tag</VueTag>
          <VueTag class="custom-minimal-tag">Minimal Tag</VueTag>
        </div>
      </div>
    `,
  }),
};

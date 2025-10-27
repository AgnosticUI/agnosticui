import type { Meta, StoryObj } from "@storybook/vue3";
import { VueKbd, type VueKbdProps } from "agnosticui-core/kbd/vue";

type StoryVueKbdProps = VueKbdProps & {
  children?: string;
};

const meta: Meta<StoryVueKbdProps> = {
  title: "AgnosticUI Vue/Kbd",
  component: VueKbd,
  argTypes: {
    children: {
      control: "text",
      description:
        "The content to display inside the Kbd component (e.g., a key symbol)",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "info",
        "warning",
        "success",
        "danger",
        "error",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    bordered: {
      control: "boolean",
    },
    background: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<StoryVueKbdProps>;

export const Default: Story = {
  args: {
    children: "⌘",
  },
  render: (args) => ({
    components: { VueKbd },
    setup() {
      return { args };
    },
    template: `<VueKbd v-bind="args">{{ args.children }}</VueKbd>`,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <VueKbd>⌘</VueKbd>
      <VueKbd>cntrl + shift + del</VueKbd>
      <VueKbd variant="primary">⌘</VueKbd>
      <VueKbd variant="secondary">⌘</VueKbd>
      <VueKbd variant="info">⌘</VueKbd>
      <VueKbd variant="warning">⌘</VueKbd>
      <VueKbd variant="success">⌘</VueKbd>
      <VueKbd variant="danger">⌘</VueKbd>
      <VueKbd variant="error">⌘</VueKbd>
      <VueKbd :background="true" variant="primary">⌘</VueKbd>
      <VueKbd :background="true" variant="secondary">⌘</VueKbd>
      <VueKbd :background="true" variant="info">⌘</VueKbd>
      <VueKbd :background="true" variant="warning">⌘</VueKbd>
      <VueKbd :background="true" variant="success">⌘</VueKbd>
      <VueKbd :background="true" variant="danger">⌘</VueKbd>
      <VueKbd :background="true" variant="error">⌘</VueKbd>
    `,
  }),
};

export const VariantSizeMedium: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <VueKbd size="md">⌘</VueKbd>
      <VueKbd size="md">cntrl + shift + del</VueKbd>
      <VueKbd size="md" variant="primary">⌘</VueKbd>
      <VueKbd size="md" variant="secondary">⌘</VueKbd>
      <VueKbd size="md" variant="info">⌘</VueKbd>
      <VueKbd size="md" variant="warning">⌘</VueKbd>
      <VueKbd size="md" variant="success">⌘</VueKbd>
      <VueKbd size="md" variant="danger">⌘</VueKbd>
      <VueKbd size="md" variant="error">⌘</VueKbd>
      <VueKbd size="md" :background="true" variant="primary">⌘</VueKbd>
      <VueKbd size="md" :background="true" variant="secondary">⌘</VueKbd>
      <VueKbd size="md" :background="true" variant="info">⌘</VueKbd>
      <VueKbd size="md" :background="true" variant="warning">⌘</VueKbd>
      <VueKbd size="md" :background="true" variant="success">⌘</VueKbd>
      <VueKbd size="md" :background="true" variant="danger">⌘</VueKbd>
      <VueKbd size="md" :background="true" variant="error">⌘</VueKbd>
    `,
  }),
};

export const VariantSizeLarge: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <VueKbd size="lg">⌘</VueKbd>
      <VueKbd size="lg">cntrl + shift + del</VueKbd>
      <VueKbd size="lg" variant="primary">⌘</VueKbd>
      <VueKbd size="lg" variant="secondary">⌘</VueKbd>
      <VueKbd size="lg" variant="info">⌘</VueKbd>
      <VueKbd size="lg" variant="warning">⌘</VueKbd>
      <VueKbd size="lg" variant="success">⌘</VueKbd>
      <VueKbd size="lg" variant="danger">⌘</VueKbd>
      <VueKbd size="lg" variant="error">⌘</VueKbd>
      <VueKbd size="lg" :background="true" variant="primary">⌘</VueKbd>
      <VueKbd size="lg" :background="true" variant="secondary">⌘</VueKbd>
      <VueKbd size="lg" :background="true" variant="info">⌘</VueKbd>
      <VueKbd size="lg" :background="true" variant="warning">⌘</VueKbd>
      <VueKbd size="lg" :background="true" variant="success">⌘</VueKbd>
      <VueKbd size="lg" :background="true" variant="danger">⌘</VueKbd>
      <VueKbd size="lg" :background="true" variant="error">⌘</VueKbd>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <VueKbd size="sm">⌘</VueKbd>
      <VueKbd size="md">⌘</VueKbd>
      <VueKbd size="lg">⌘</VueKbd>
    `,
  }),
};

export const Bordered: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <VueKbd :bordered="true">⌘</VueKbd>
      <VueKbd :bordered="false">⌘</VueKbd>
    `,
  }),
};

export const Background: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <VueKbd :background="true">⌘</VueKbd>
      <VueKbd :background="false">⌘</VueKbd>
    `,
  }),
};

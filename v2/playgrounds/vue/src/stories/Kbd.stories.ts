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
  args: {
    variant: "default",
    size: "sm",
    bordered: true,
    background: false,
  },
};

export default meta;
type Story = StoryObj<StoryVueKbdProps>;

export const Default: Story = {
  args: {
    children: "⌘",
    variant: "default",
    size: "sm",
    bordered: true,
    background: false,
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
      <p>Default is size medium.</p>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <VueKbd>⌘</VueKbd>
        <VueKbd>⌥</VueKbd>
        <VueKbd>⇧</VueKbd>
        <VueKbd>⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd>cntrl + shift + del</VueKbd>
        <ag-kbd>⌘ + v</ag-kbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd variant="primary">⌘</VueKbd>
        <VueKbd variant="primary">⌥</VueKbd>
        <VueKbd variant="primary">⇧</VueKbd>
        <VueKbd variant="primary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd variant="secondary">⌘</VueKbd>
        <VueKbd variant="secondary">⌥</VueKbd>
        <VueKbd variant="secondary">⇧</VueKbd>
        <VueKbd variant="secondary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd variant="info">⌘</VueKbd>
        <VueKbd variant="info">⌥</VueKbd>
        <VueKbd variant="info">⇧</VueKbd>
        <VueKbd variant="info">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd variant="warning">⌘</VueKbd>
        <VueKbd variant="warning">⌥</VueKbd>
        <VueKbd variant="warning">⇧</VueKbd>
        <VueKbd variant="warning">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd variant="success">⌘</VueKbd>
        <VueKbd variant="success">⌥</VueKbd>
        <VueKbd variant="success">⇧</VueKbd>
        <VueKbd variant="success">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd variant="danger">⌘</VueKbd>
        <VueKbd variant="danger">⌥</VueKbd>
        <VueKbd variant="danger">⇧</VueKbd>
        <VueKbd variant="danger">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd variant="error">⌘</VueKbd>
        <VueKbd variant="error">⌥</VueKbd>
        <VueKbd variant="error">⇧</VueKbd>
        <VueKbd variant="error">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd :background="true" variant="primary">⌘</VueKbd>
        <VueKbd :background="true" variant="primary">⌥</VueKbd>
        <VueKbd :background="true" variant="primary">⇧</VueKbd>
        <VueKbd :background="true" variant="primary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd :background="true" variant="secondary">⌘</VueKbd>
        <VueKbd :background="true" variant="secondary">⌥</VueKbd>
        <VueKbd :background="true" variant="secondary">⇧</VueKbd>
        <VueKbd :background="true" variant="secondary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd :background="true" variant="info">⌘</VueKbd>
        <VueKbd :background="true" variant="info">⌥</VueKbd>
        <VueKbd :background="true" variant="info">⇧</VueKbd>
        <VueKbd :background="true" variant="info">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd :background="true" variant="warning">⌘</VueKbd>
        <VueKbd :background="true" variant="warning">⌥</VueKbd>
        <VueKbd :background="true" variant="warning">⇧</VueKbd>
        <VueKbd :background="true" variant="warning">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd :background="true" variant="success">⌘</VueKbd>
        <VueKbd :background="true" variant="success">⌥</VueKbd>
        <VueKbd :background="true" variant="success">⇧</VueKbd>
        <VueKbd :background="true" variant="success">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd :background="true" variant="danger">⌘</VueKbd>
        <VueKbd :background="true" variant="danger">⌥</VueKbd>
        <VueKbd :background="true" variant="danger">⇧</VueKbd>
        <VueKbd :background="true" variant="danger">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd :background="true" variant="error">⌘</VueKbd>
        <VueKbd :background="true" variant="error">⌥</VueKbd>
        <VueKbd :background="true" variant="error">⇧</VueKbd>
        <VueKbd :background="true" variant="error">⌃</VueKbd>
      </div>
    `,
  }),
};

export const VariantSizeSmall: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <VueKbd size="sm">⌘</VueKbd>
        <VueKbd size="sm">⌥</VueKbd>
        <VueKbd size="sm">⇧</VueKbd>
        <VueKbd size="sm">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm">cntrl + shift + del</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" variant="primary">⌘</VueKbd>
        <VueKbd size="sm" variant="primary">⌥</VueKbd>
        <VueKbd size="sm" variant="primary">⇧</VueKbd>
        <VueKbd size="sm" variant="primary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" variant="secondary">⌘</VueKbd>
        <VueKbd size="sm" variant="secondary">⌥</VueKbd>
        <VueKbd size="sm" variant="secondary">⇧</VueKbd>
        <VueKbd size="sm" variant="secondary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" variant="info">⌘</VueKbd>
        <VueKbd size="sm" variant="info">⌥</VueKbd>
        <VueKbd size="sm" variant="info">⇧</VueKbd>
        <VueKbd size="sm" variant="info">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" variant="warning">⌘</VueKbd>
        <VueKbd size="sm" variant="warning">⌥</VueKbd>
        <VueKbd size="sm" variant="warning">⇧</VueKbd>
        <VueKbd size="sm" variant="warning">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" variant="success">⌘</VueKbd>
        <VueKbd size="sm" variant="success">⌥</VueKbd>
        <VueKbd size="sm" variant="success">⇧</VueKbd>
        <VueKbd size="sm" variant="success">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" variant="danger">⌘</VueKbd>
        <VueKbd size="sm" variant="danger">⌥</VueKbd>
        <VueKbd size="sm" variant="danger">⇧</VueKbd>
        <VueKbd size="sm" variant="danger">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" variant="error">⌘</VueKbd>
        <VueKbd size="sm" variant="error">⌥</VueKbd>
        <VueKbd size="sm" variant="error">⇧</VueKbd>
        <VueKbd size="sm" variant="error">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" :background="true" variant="primary">⌘</VueKbd>
        <VueKbd size="sm" :background="true" variant="primary">⌥</VueKbd>
        <VueKbd size="sm" :background="true" variant="primary">⇧</VueKbd>
        <VueKbd size="sm" :background="true" variant="primary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" :background="true" variant="secondary">⌘</VueKbd>
        <VueKbd size="sm" :background="true" variant="secondary">⌥</VueKbd>
        <VueKbd size="sm" :background="true" variant="secondary">⇧</VueKbd>
        <VueKbd size="sm" :background="true" variant="secondary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" :background="true" variant="info">⌘</VueKbd>
        <VueKbd size="sm" :background="true" variant="info">⌥</VueKbd>
        <VueKbd size="sm" :background="true" variant="info">⇧</VueKbd>
        <VueKbd size="sm" :background="true" variant="info">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" :background="true" variant="warning">⌘</VueKbd>
        <VueKbd size="sm" :background="true" variant="warning">⌥</VueKbd>
        <VueKbd size="sm" :background="true" variant="warning">⇧</VueKbd>
        <VueKbd size="sm" :background="true" variant="warning">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" :background="true" variant="success">⌘</VueKbd>
        <VueKbd size="sm" :background="true" variant="success">⌥</VueKbd>
        <VueKbd size="sm" :background="true" variant="success">⇧</VueKbd>
        <VueKbd size="sm" :background="true" variant="success">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" :background="true" variant="danger">⌘</VueKbd>
        <VueKbd size="sm" :background="true" variant="danger">⌥</VueKbd>
        <VueKbd size="sm" :background="true" variant="danger">⇧</VueKbd>
        <VueKbd size="sm" :background="true" variant="danger">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="sm" :background="true" variant="error">⌘</VueKbd>
        <VueKbd size="sm" :background="true" variant="error">⌥</VueKbd>
        <VueKbd size="sm" :background="true" variant="error">⇧</VueKbd>
        <VueKbd size="sm" :background="true" variant="error">⌃</VueKbd>
      </div>
    `,
  }),
};

export const VariantSizeLarge: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <VueKbd size="lg">⌘</VueKbd>
        <VueKbd size="lg">⌥</VueKbd>
        <VueKbd size="lg">⇧</VueKbd>
        <VueKbd size="lg">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg">cntrl + shift + del</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" variant="primary">⌘</VueKbd>
        <VueKbd size="lg" variant="primary">⌥</VueKbd>
        <VueKbd size="lg" variant="primary">⇧</VueKbd>
        <VueKbd size="lg" variant="primary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" variant="secondary">⌘</VueKbd>
        <VueKbd size="lg" variant="secondary">⌥</VueKbd>
        <VueKbd size="lg" variant="secondary">⇧</VueKbd>
        <VueKbd size="lg" variant="secondary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" variant="info">⌘</VueKbd>
        <VueKbd size="lg" variant="info">⌥</VueKbd>
        <VueKbd size="lg" variant="info">⇧</VueKbd>
        <VueKbd size="lg" variant="info">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" variant="warning">⌘</VueKbd>
        <VueKbd size="lg" variant="warning">⌥</VueKbd>
        <VueKbd size="lg" variant="warning">⇧</VueKbd>
        <VueKbd size="lg" variant="warning">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" variant="success">⌘</VueKbd>
        <VueKbd size="lg" variant="success">⌥</VueKbd>
        <VueKbd size="lg" variant="success">⇧</VueKbd>
        <VueKbd size="lg" variant="success">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" variant="danger">⌘</VueKbd>
        <VueKbd size="lg" variant="danger">⌥</VueKbd>
        <VueKbd size="lg" variant="danger">⇧</VueKbd>
        <VueKbd size="lg" variant="danger">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" variant="error">⌘</VueKbd>
        <VueKbd size="lg" variant="error">⌥</VueKbd>
        <VueKbd size="lg" variant="error">⇧</VueKbd>
        <VueKbd size="lg" variant="error">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" :background="true" variant="primary">⌘</VueKbd>
        <VueKbd size="lg" :background="true" variant="primary">⌥</VueKbd>
        <VueKbd size="lg" :background="true" variant="primary">⇧</VueKbd>
        <VueKbd size="lg" :background="true" variant="primary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" :background="true" variant="secondary">⌘</VueKbd>
        <VueKbd size="lg" :background="true" variant="secondary">⌥</VueKbd>
        <VueKbd size="lg" :background="true" variant="secondary">⇧</VueKbd>
        <VueKbd size="lg" :background="true" variant="secondary">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" :background="true" variant="info">⌘</VueKbd>
        <VueKbd size="lg" :background="true" variant="info">⌥</VueKbd>
        <VueKbd size="lg" :background="true" variant="info">⇧</VueKbd>
        <VueKbd size="lg" :background="true" variant="info">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" :background="true" variant="warning">⌘</VueKbd>
        <VueKbd size="lg" :background="true" variant="warning">⌥</VueKbd>
        <VueKbd size="lg" :background="true" variant="warning">⇧</VueKbd>
        <VueKbd size="lg" :background="true" variant="warning">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" :background="true" variant="success">⌘</VueKbd>
        <VueKbd size="lg" :background="true" variant="success">⌥</VueKbd>
        <VueKbd size="lg" :background="true" variant="success">⇧</VueKbd>
        <VueKbd size="lg" :background="true" variant="success">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" :background="true" variant="danger">⌘</VueKbd>
        <VueKbd size="lg" :background="true" variant="danger">⌥</VueKbd>
        <VueKbd size="lg" :background="true" variant="danger">⇧</VueKbd>
        <VueKbd size="lg" :background="true" variant="danger">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg" :background="true" variant="error">⌘</VueKbd>
        <VueKbd size="lg" :background="true" variant="error">⌥</VueKbd>
        <VueKbd size="lg" :background="true" variant="error">⇧</VueKbd>
        <VueKbd size="lg" :background="true" variant="error">⌃</VueKbd>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <VueKbd size="sm">⌘</VueKbd>
        <VueKbd size="sm">⌥</VueKbd>
        <VueKbd size="sm">⇧</VueKbd>
        <VueKbd size="sm">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="md">⌘</VueKbd>
        <VueKbd size="md">⌥</VueKbd>
        <VueKbd size="md">⇧</VueKbd>
        <VueKbd size="md">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
        <VueKbd size="lg">⌘</VueKbd>
        <VueKbd size="lg">⌥</VueKbd>
        <VueKbd size="lg">⇧</VueKbd>
        <VueKbd size="lg">⌃</VueKbd>
      </div>
    `,
  }),
};

export const Bordered: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <VueKbd :bordered="true">⌘</VueKbd>
        <VueKbd :bordered="true">⌥</VueKbd>
        <VueKbd :bordered="true">⇧</VueKbd>
        <VueKbd :bordered="true">⌃</VueKbd>
      </div>
    `,
  }),
};

export const Background: Story = {
  render: () => ({
    components: { VueKbd },
    template: `
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <p>With background:</p>
        <VueKbd :background="true">⌘</VueKbd>
        <VueKbd :background="true">⌥</VueKbd>
        <VueKbd :background="true">⇧</VueKbd>
        <VueKbd :background="true">⌃</VueKbd>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <p>Default is no background:</p>
        <VueKbd :background="false">⌘</VueKbd>
        <VueKbd :background="false">⌥</VueKbd>
        <VueKbd :background="false">⇧</VueKbd>
        <VueKbd :background="false">⌃</VueKbd>
      </div>
    `,
  }),
}

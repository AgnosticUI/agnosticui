import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import("agnosticui-core/kbd");
import { type KbdProps } from "agnosticui-core/kbd";

const meta: Meta<KbdProps> = {
  title: 'AgnosticUI Lit/Kbd',
  component: 'ag-kbd',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'info', 'warning', 'success', 'danger', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    bordered: {
      control: 'boolean',
    },
    background: {
      control: 'boolean',
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
type Story = StoryObj<KbdProps>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    bordered: true,
    background: false,
  },
  render: ({ variant, size, bordered, background  }) => html`<ag-kbd
      .variant=${variant}
      .size=${size}
      ?bordered=${bordered}
      ?background=${background}
    >⌘</ag-kbd>`,
};

export const Variants: Story = {
  render: () => html`
    <p>Default is size medium.</p>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <ag-kbd>⌘</ag-kbd>
      <ag-kbd>⌥</ag-kbd>
      <ag-kbd>⇧</ag-kbd>
      <ag-kbd>⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd>cntrl + shift + del</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd variant="primary">⌘</ag-kbd>
      <ag-kbd variant="primary">⌥</ag-kbd>
      <ag-kbd variant="primary">⇧</ag-kbd>
      <ag-kbd variant="primary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd variant="secondary">⌘</ag-kbd>
      <ag-kbd variant="secondary">⌥</ag-kbd>
      <ag-kbd variant="secondary">⇧</ag-kbd>
      <ag-kbd variant="secondary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd variant="info">⌘</ag-kbd>
      <ag-kbd variant="info">⌥</ag-kbd>
      <ag-kbd variant="info">⇧</ag-kbd>
      <ag-kbd variant="info">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd variant="warning">⌘</ag-kbd>
      <ag-kbd variant="warning">⌥</ag-kbd>
      <ag-kbd variant="warning">⇧</ag-kbd>
      <ag-kbd variant="warning">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd variant="success">⌘</ag-kbd>
      <ag-kbd variant="success">⌥</ag-kbd>
      <ag-kbd variant="success">⇧</ag-kbd>
      <ag-kbd variant="success">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd variant="danger">⌘</ag-kbd>
      <ag-kbd variant="danger">⌥</ag-kbd>
      <ag-kbd variant="danger">⇧</ag-kbd>
      <ag-kbd variant="danger">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd variant="error">⌘</ag-kbd>
      <ag-kbd variant="error">⌥</ag-kbd>
      <ag-kbd variant="error">⇧</ag-kbd>
      <ag-kbd variant="error">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd ?background=${true} variant="primary">⌘</ag-kbd>
      <ag-kbd ?background=${true} variant="primary">⌥</ag-kbd>
      <ag-kbd ?background=${true} variant="primary">⇧</ag-kbd>
      <ag-kbd ?background=${true} variant="primary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd ?background=${true} variant="secondary">⌘</ag-kbd>
      <ag-kbd ?background=${true} variant="secondary">⌥</ag-kbd>
      <ag-kbd ?background=${true} variant="secondary">⇧</ag-kbd>
      <ag-kbd ?background=${true} variant="secondary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd ?background=${true} variant="info">⌘</ag-kbd>
      <ag-kbd ?background=${true} variant="info">⌥</ag-kbd>
      <ag-kbd ?background=${true} variant="info">⇧</ag-kbd>
      <ag-kbd ?background=${true} variant="info">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd ?background=${true} variant="warning">⌘</ag-kbd>
      <ag-kbd ?background=${true} variant="warning">⌥</ag-kbd>
      <ag-kbd ?background=${true} variant="warning">⇧</ag-kbd>
      <ag-kbd ?background=${true} variant="warning">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd ?background=${true} variant="success">⌘</ag-kbd>
      <ag-kbd ?background=${true} variant="success">⌥</ag-kbd>
      <ag-kbd ?background=${true} variant="success">⇧</ag-kbd>
      <ag-kbd ?background=${true} variant="success">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd ?background=${true} variant="danger">⌘</ag-kbd>
      <ag-kbd ?background=${true} variant="danger">⌥</ag-kbd>
      <ag-kbd ?background=${true} variant="danger">⇧</ag-kbd>
      <ag-kbd ?background=${true} variant="danger">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd ?background=${true} variant="error">⌘</ag-kbd>
      <ag-kbd ?background=${true} variant="error">⌥</ag-kbd>
      <ag-kbd ?background=${true} variant="error">⇧</ag-kbd>
      <ag-kbd ?background=${true} variant="error">⌃</ag-kbd>
    </div>
  `,
};

export const VariantSizeSmall: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <ag-kbd size="sm">⌘</ag-kbd>
      <ag-kbd size="sm">⌥</ag-kbd>
      <ag-kbd size="sm">⇧</ag-kbd>
      <ag-kbd size="sm">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm">cntrl + shift + del</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" variant="primary">⌘</ag-kbd>
      <ag-kbd size="sm" variant="primary">⌥</ag-kbd>
      <ag-kbd size="sm" variant="primary">⇧</ag-kbd>
      <ag-kbd size="sm" variant="primary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" variant="secondary">⌘</ag-kbd>
      <ag-kbd size="sm" variant="secondary">⌥</ag-kbd>
      <ag-kbd size="sm" variant="secondary">⇧</ag-kbd>
      <ag-kbd size="sm" variant="secondary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" variant="info">⌘</ag-kbd>
      <ag-kbd size="sm" variant="info">⌥</ag-kbd>
      <ag-kbd size="sm" variant="info">⇧</ag-kbd>
      <ag-kbd size="sm" variant="info">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" variant="warning">⌘</ag-kbd>
      <ag-kbd size="sm" variant="warning">⌥</ag-kbd>
      <ag-kbd size="sm" variant="warning">⇧</ag-kbd>
      <ag-kbd size="sm" variant="warning">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" variant="success">⌘</ag-kbd>
      <ag-kbd size="sm" variant="success">⌥</ag-kbd>
      <ag-kbd size="sm" variant="success">⇧</ag-kbd>
      <ag-kbd size="sm" variant="success">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" variant="danger">⌘</ag-kbd>
      <ag-kbd size="sm" variant="danger">⌥</ag-kbd>
      <ag-kbd size="sm" variant="danger">⇧</ag-kbd>
      <ag-kbd size="sm" variant="danger">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" variant="error">⌘</ag-kbd>
      <ag-kbd size="sm" variant="error">⌥</ag-kbd>
      <ag-kbd size="sm" variant="error">⇧</ag-kbd>
      <ag-kbd size="sm" variant="error">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" ?background=${true} variant="primary">⌘</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="primary">⌥</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="primary">⇧</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="primary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" ?background=${true} variant="secondary">⌘</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="secondary">⌥</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="secondary">⇧</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="secondary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" ?background=${true} variant="info">⌘</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="info">⌥</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="info">⇧</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="info">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" ?background=${true} variant="warning">⌘</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="warning">⌥</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="warning">⇧</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="warning">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" ?background=${true} variant="success">⌘</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="success">⌥</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="success">⇧</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="success">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" ?background=${true} variant="danger">⌘</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="danger">⌥</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="danger">⇧</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="danger">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="sm" ?background=${true} variant="error">⌘</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="error">⌥</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="error">⇧</ag-kbd>
      <ag-kbd size="sm" ?background=${true} variant="error">⌃</ag-kbd>
    </div>
  `,
};

export const VariantSizeLarge: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <ag-kbd size="lg">⌘</ag-kbd>
      <ag-kbd size="lg">⌥</ag-kbd>
      <ag-kbd size="lg">⇧</ag-kbd>
      <ag-kbd size="lg">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg">cntrl + shift + del</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" variant="primary">⌘</ag-kbd>
      <ag-kbd size="lg" variant="primary">⌥</ag-kbd>
      <ag-kbd size="lg" variant="primary">⇧</ag-kbd>
      <ag-kbd size="lg" variant="primary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" variant="secondary">⌘</ag-kbd>
      <ag-kbd size="lg" variant="secondary">⌥</ag-kbd>
      <ag-kbd size="lg" variant="secondary">⇧</ag-kbd>
      <ag-kbd size="lg" variant="secondary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" variant="info">⌘</ag-kbd>
      <ag-kbd size="lg" variant="info">⌥</ag-kbd>
      <ag-kbd size="lg" variant="info">⇧</ag-kbd>
      <ag-kbd size="lg" variant="info">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" variant="warning">⌘</ag-kbd>
      <ag-kbd size="lg" variant="warning">⌥</ag-kbd>
      <ag-kbd size="lg" variant="warning">⇧</ag-kbd>
      <ag-kbd size="lg" variant="warning">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" variant="success">⌘</ag-kbd>
      <ag-kbd size="lg" variant="success">⌥</ag-kbd>
      <ag-kbd size="lg" variant="success">⇧</ag-kbd>
      <ag-kbd size="lg" variant="success">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" variant="danger">⌘</ag-kbd>
      <ag-kbd size="lg" variant="danger">⌥</ag-kbd>
      <ag-kbd size="lg" variant="danger">⇧</ag-kbd>
      <ag-kbd size="lg" variant="danger">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" variant="error">⌘</ag-kbd>
      <ag-kbd size="lg" variant="error">⌥</ag-kbd>
      <ag-kbd size="lg" variant="error">⇧</ag-kbd>
      <ag-kbd size="lg" variant="error">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" ?background=${true} variant="primary">⌘</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="primary">⌥</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="primary">⇧</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="primary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" ?background=${true} variant="secondary">⌘</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="secondary">⌥</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="secondary">⇧</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="secondary">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" ?background=${true} variant="info">⌘</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="info">⌥</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="info">⇧</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="info">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" ?background=${true} variant="warning">⌘</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="warning">⌥</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="warning">⇧</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="warning">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" ?background=${true} variant="success">⌘</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="success">⌥</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="success">⇧</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="success">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" ?background=${true} variant="danger">⌘</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="danger">⌥</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="danger">⇧</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="danger">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg" ?background=${true} variant="error">⌘</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="error">⌥</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="error">⇧</ag-kbd>
      <ag-kbd size="lg" ?background=${true} variant="error">⌃</ag-kbd>
    </div>
  `,
};

export const Sizes: Story = {
 render: () => html`
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <ag-kbd size="sm">⌘</ag-kbd>
      <ag-kbd size="sm">⌥</ag-kbd>
      <ag-kbd size="sm">⇧</ag-kbd>
      <ag-kbd size="sm">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="md">⌘</ag-kbd>
      <ag-kbd size="md">⌥</ag-kbd>
      <ag-kbd size="md">⇧</ag-kbd>
      <ag-kbd size="md">⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
      <ag-kbd size="lg">⌘</ag-kbd>
      <ag-kbd size="lg">⌥</ag-kbd>
      <ag-kbd size="lg">⇧</ag-kbd>
      <ag-kbd size="lg">⌃</ag-kbd>
    </div>
  `,
};

export const Bordered: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <ag-kbd ?bordered=${true}>⌘</ag-kbd>
      <ag-kbd ?bordered=${true}>⌥</ag-kbd>
      <ag-kbd ?bordered=${true}>⇧</ag-kbd>
      <ag-kbd ?bordered=${true}>⌃</ag-kbd>
    </div>
  `,
};

export const Background: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <p>With background:</p>
      <ag-kbd ?background=${true}>⌘</ag-kbd>
      <ag-kbd ?background=${true}>⌥</ag-kbd>
      <ag-kbd ?background=${true}>⇧</ag-kbd>
      <ag-kbd ?background=${true}>⌃</ag-kbd>
    </div>
    <div style="display: flex; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <p>Default is no background:</p>
      <ag-kbd ?background=${false}>⌘</ag-kbd>
      <ag-kbd ?background=${false}>⌥</ag-kbd>
      <ag-kbd ?background=${false}>⇧</ag-kbd>
      <ag-kbd ?background=${false}>⌃</ag-kbd>
    </div>
  `,
};

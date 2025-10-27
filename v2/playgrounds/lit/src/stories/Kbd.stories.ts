import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import "agnosticui-core/kbd";
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
};

export default meta;
type Story = StoryObj<KbdProps>;

// export const Default: Story = {
//   args: {
//     children: '⌘',
//   },
//   render: ({ children, ...args }) => html`<ag-kbd
//     .variant=${args.variant}
//     .size=${args.size}
//     ?bordered=${args.bordered}
//     ?background=${args.background}
//   >${children}</ag-kbd>`,
// };

export const Variants: Story = {
  render: () => html`
    <ag-kbd>⌘</ag-kbd>
    <ag-kbd variant="primary">⌘</ag-kbd>
    <ag-kbd variant="secondary">⌘</ag-kbd>
    <ag-kbd variant="info">⌘</ag-kbd>
    <ag-kbd variant="warning">⌘</ag-kbd>
    <ag-kbd variant="success">⌘</ag-kbd>
    <ag-kbd variant="danger">⌘</ag-kbd>
    <ag-kbd variant="error">⌘</ag-kbd>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <ag-kbd size="sm">⌘</ag-kbd>
    <ag-kbd size="md">⌘</ag-kbd>
    <ag-kbd size="lg">⌘</ag-kbd>
  `,
};

export const Bordered: Story = {
  render: () => html`
    <ag-kbd .bordered=${true}>⌘</ag-kbd>
    <ag-kbd .bordered=${false}>⌘</ag-kbd>
  `,
};

export const Background: Story = {
  render: () => html`
    <ag-kbd .background=${true}>⌘</ag-kbd>
    <ag-kbd .background=${false}>⌘</ag-kbd>
  `,
};

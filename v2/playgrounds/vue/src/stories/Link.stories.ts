
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueLink } from 'agnosticui-core/link/vue';

const meta = {
  title: 'AgnosticUI Vue/Link',
  component: VueLink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL the link points to',
    },
    variant: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger'],
      description: 'Visual style variant of the link',
    },
    isButton: {
      control: 'boolean',
      description: 'Styles the link to look like a button',
    },
    external: {
      control: 'boolean',
      description: 'Indicates external link (adds rel and target attributes)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the link',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof VueLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/example',
    variant: '',
    isButton: false,
    external: false,
    disabled: false,
    ariaLabel: '',
  },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Default Link</VueLink>`,
  }),
};

export const Basic: Story = {
  args: { href: '/home' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Go to Home Page</VueLink>`,
  }),
};

export const Success: Story = {
  args: { href: '/success', variant: 'success' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Success Link</VueLink>`,
  }),
};

export const Warning: Story = {
  args: { href: '/warning', variant: 'warning' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Warning Link</VueLink>`,
  }),
};

export const Danger: Story = {
  args: { href: '/danger', variant: 'danger' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Danger Link</VueLink>`,
  }),
};

export const ButtonStyle: Story = {
  args: { href: '/action', isButton: true },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Button Style Link</VueLink>`,
  }),
};

export const ButtonStyleSuccess: Story = {
  args: { href: '/action', isButton: true, variant: 'success' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Success Button Link</VueLink>`,
  }),
};

export const External: Story = {
  args: { href: 'https://example.com', external: true },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">External Link (opens in new tab) →</VueLink>`,
  }),
};

export const Disabled: Story = {
  args: { href: '/disabled', disabled: true },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Disabled Link</VueLink>`,
  }),
};

export const DisabledButton: Story = {
  args: { href: '/disabled', disabled: true, isButton: true, variant: 'success' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Disabled Button Link</VueLink>`,
  }),
};

export const MultipleLinks: Story = {
  render: () => ({
    components: { VueLink },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div><VueLink href="/page1">Regular Link</VueLink></div>
        <div><VueLink href="/page2" variant="success">Success Link</VueLink></div>
        <div><VueLink href="/page3" variant="warning">Warning Link</VueLink></div>
        <div><VueLink href="/page4" variant="danger">Danger Link</VueLink></div>
        <div><VueLink href="https://example.com" external>External Link →</VueLink></div>
      </div>
    `,
  }),
};

export const MultipleButtonLinks: Story = {
  render: () => ({
    components: { VueLink },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <VueLink href="/action1" :isButton="true">Default Button</VueLink>
        <VueLink href="/action2" :isButton="true" variant="success">Success Button</VueLink>
        <VueLink href="/action3" :isButton="true" variant="warning">Warning Button</VueLink>
        <VueLink href="/action4" :isButton="true" variant="danger">Danger Button</VueLink>
      </div>
    `,
  }),
};

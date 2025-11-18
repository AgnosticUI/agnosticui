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
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
      description: 'Visual style variant of the link',
    },
    isButton: {
      control: 'boolean',
      description: 'Styles the link to look like a button',
    },
    buttonSize: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant for button-style links (only applies when isButton is true)',
    },
    buttonShape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
      description: 'Shape variant for button-style links (only applies when isButton is true)',
    },
    buttonBordered: {
      control: 'boolean',
      description: 'Bordered style for button-style links (only applies when isButton is true)',
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
    buttonSize: 'md',
    buttonShape: '',
    buttonBordered: false,
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

export const Primary: Story = {
  args: { href: '/primary', variant: 'primary' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Primary Link</VueLink>`,
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

export const Monochrome: Story = {
  args: { href: '/monochrome', variant: 'monochrome' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Monochrome Link</VueLink>`,
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

export const ButtonStylePrimary: Story = {
  args: { href: '/action', isButton: true, variant: 'primary' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Primary Button Link</VueLink>`,
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

export const ButtonStyleWarning: Story = {
  args: { href: '/action', isButton: true, variant: 'warning' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Warning Button Link</VueLink>`,
  }),
};

export const ButtonStyleDanger: Story = {
  args: { href: '/action', isButton: true, variant: 'danger' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Danger Button Link</VueLink>`,
  }),
};

export const ButtonStyleMonochrome: Story = {
  args: { href: '/action', isButton: true, variant: 'monochrome' },
  render: (args) => ({
    components: { VueLink },
    setup() {
      return { args };
    },
    template: `<VueLink v-bind="args">Monochrome Button Link</VueLink>`,
  }),
};

export const ButtonSizes: Story = {
  render: () => ({
    components: { VueLink },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <VueLink href="/action" :isButton="true" buttonSize="x-sm">Extra Small</VueLink>
        <VueLink href="/action" :isButton="true" buttonSize="sm">Small</VueLink>
        <VueLink href="/action" :isButton="true" buttonSize="md">Medium</VueLink>
        <VueLink href="/action" :isButton="true" buttonSize="lg">Large</VueLink>
        <VueLink href="/action" :isButton="true" buttonSize="xl">Extra Large</VueLink>
      </div>
    `,
  }),
};

export const ButtonShapes: Story = {
  render: () => ({
    components: { VueLink },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <VueLink href="/action" :isButton="true">Default</VueLink>
        <VueLink href="/action" :isButton="true" buttonShape="rounded">Rounded</VueLink>
        <VueLink href="/action" :isButton="true" buttonShape="capsule">Capsule</VueLink>
        <VueLink href="/action" :isButton="true" buttonShape="circle">●</VueLink>
        <VueLink href="/action" :isButton="true" buttonShape="square">■</VueLink>
        <VueLink href="/action" :isButton="true" buttonShape="rounded-square">▢</VueLink>
      </div>
    `,
  }),
};

export const ButtonBordered: Story = {
  render: () => ({
    components: { VueLink },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="primary">
          Primary Bordered
        </VueLink>
        <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="success">
          Success Bordered
        </VueLink>
        <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="warning">
          Warning Bordered
        </VueLink>
        <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="danger">
          Danger Bordered
        </VueLink>
        <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="monochrome">
          Monochrome Bordered
        </VueLink>
      </div>
    `,
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
        <div><VueLink href="/page2" variant="primary">Primary Link</VueLink></div>
        <div><VueLink href="/page3" variant="success">Success Link</VueLink></div>
        <div><VueLink href="/page4" variant="warning">Warning Link</VueLink></div>
        <div><VueLink href="/page5" variant="danger">Danger Link</VueLink></div>
        <div><VueLink href="/page6" variant="monochrome">Monochrome Link</VueLink></div>
        <div><VueLink href="https://example.com" :external="true">External Link →</VueLink></div>
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
        <VueLink href="/action2" :isButton="true" variant="primary">Primary Button</VueLink>
        <VueLink href="/action3" :isButton="true" variant="success">Success Button</VueLink>
        <VueLink href="/action4" :isButton="true" variant="warning">Warning Button</VueLink>
        <VueLink href="/action5" :isButton="true" variant="danger">Danger Button</VueLink>
        <VueLink href="/action6" :isButton="true" variant="monochrome">Monochrome Button</VueLink>
      </div>
    `,
  }),
};

export const ComplexButtons: Story = {
  render: () => ({
    components: { VueLink },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h4>Large Capsule Buttons</h4>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
            <VueLink href="/action" :isButton="true" buttonSize="lg" buttonShape="capsule" variant="primary">
              Primary Capsule
            </VueLink>
            <VueLink href="/action" :isButton="true" buttonSize="lg" buttonShape="capsule" variant="success">
              Success Capsule
            </VueLink>
          </div>
        </div>
        
        <div>
          <h4>Bordered Button Variants</h4>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
            <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="primary">
              Primary Outlined
            </VueLink>
            <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="success" buttonSize="lg">
              Large Success Outlined
            </VueLink>
            <VueLink href="/action" :isButton="true" :buttonBordered="true" variant="danger" buttonShape="capsule">
              Danger Capsule Outlined
            </VueLink>
          </div>
        </div>
        
        <div>
          <h4>Icon Buttons (Circle & Square Shapes)</h4>
          <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
            <VueLink href="/action" :isButton="true" buttonShape="circle" variant="primary" ariaLabel="Add">
              +
            </VueLink>
            <VueLink href="/action" :isButton="true" buttonShape="circle" variant="danger" ariaLabel="Delete">
              ×
            </VueLink>
            <VueLink href="/action" :isButton="true" buttonShape="square" variant="success" ariaLabel="Check">
              ✓
            </VueLink>
            <VueLink href="/action" :isButton="true" buttonShape="rounded-square" variant="warning" ariaLabel="Warning">
              !
            </VueLink>
          </div>
        </div>
      </div>
    `,
  }),
};

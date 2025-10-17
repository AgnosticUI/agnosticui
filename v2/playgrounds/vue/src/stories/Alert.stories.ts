import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VueAlert, { type VueAlertProps } from 'agnosticui-core/alert/vue';

const meta = {
  title: 'AgnosticUI Vue/Alert',
  component: VueAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'info', 'warning', 'error'],
      description: 'The alert variant type',
    },
    bordered: {
      control: 'boolean',
      description: 'Adds a border around the alert',
    },
    rounded: {
      control: 'boolean',
      description: 'Applies rounded corners to the alert',
    },
    borderedLeft: {
      control: 'boolean',
      description: 'Adds a left border accent to the alert',
    },
  },
  args: {
    type: 'info',
    bordered: false,
    rounded: false,
    borderedLeft: false,
  },
} satisfies Meta<typeof VueAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :type="args.type" :bordered="args.bordered" :rounded="args.rounded" :borderedLeft="args.borderedLeft">This is a default alert.</VueAlert>`,
  }),
};

export const Info: Story = {
  args: {
    type: 'info',
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :type="args.type">This is an info alert.</VueAlert>`,
  }),
};

export const Success: Story = {
  args: {
    type: 'success',
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :type="args.type">This is a success alert.</VueAlert>`,
  }),
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :type="args.type">This is a warning alert.</VueAlert>`,
  }),
};

export const Error: Story = {
  args: {
    type: 'error',
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :type="args.type">This is an error alert.</VueAlert>`,
  }),
};

export const Primary: Story = {
  args: {
    type: 'primary',
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :type="args.type">This is a primary alert.</VueAlert>`,
  }),
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :bordered="args.bordered">This is a bordered alert.</VueAlert>`,
  }),
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :rounded="args.rounded">This is a rounded alert.</VueAlert>`,
  }),
};

export const BorderedLeft: Story = {
  args: {
    borderedLeft: true,
    type: 'warning',
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :borderedLeft="args.borderedLeft" :type="args.type">This alert has a left border.</VueAlert>`,
  }),
};

export const AllModifiers: Story = {
  args: {
    type: 'success',
    bordered: true,
    rounded: true,
    borderedLeft: true,
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      return { args };
    },
    template: `<VueAlert :type="args.type" :bordered="args.bordered" :rounded="args.rounded" :borderedLeft="args.borderedLeft">This alert has all modifiers applied.</VueAlert>`,
  }),
};

export const Customization: Story = {
  args: {
    type: 'info',
    rounded: true,
  },
  render: (args: VueAlertProps) => ({
    components: { VueAlert },
    setup() {
      // Inject styles dynamically
      const styleId = 'custom-alert-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .custom-alert::part(ag-alert) {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            color: #fff;
            padding: 1.5rem;
            border: 3px solid #fa709a;
            box-shadow: 0 4px 12px rgba(250, 112, 154, 0.3);
            font-weight: 600;
          }
        `;
        document.head.appendChild(style);
      }
      return { args };
    },
    template: `
      <VueAlert :type="args.type" :rounded="args.rounded" class="custom-alert">
        🎨 This alert is customized using the ::part(ag-alert) CSS selector!
      </VueAlert>
    `,
  }),
};

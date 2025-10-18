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

// CSS Parts customization
export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueAlert },
    setup() {
      // Inject global styles for CSS Shadow Parts
      const styleId = 'alert-css-parts-demo';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          /* Gradient alert style */
          .custom-gradient-alert::part(ag-alert) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            border: none;
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
            font-weight: 600;
          }

          /* Neon glow alert */
          .custom-neon-alert::part(ag-alert) {
            background: #1a1a2e;
            color: #0ff;
            border: 2px solid #0ff;
            padding: 1rem;
            border-radius: 8px;
            box-shadow:
              0 0 10px #0ff,
              0 0 20px #0ff,
              inset 0 0 10px rgba(0, 255, 255, 0.2);
            text-shadow: 0 0 5px #0ff;
          }

          /* Minimalist alert with accent */
          .custom-minimal-alert::part(ag-alert) {
            background: var(--ag-background-secondary);
            color: var(--ag-text-primary);
            padding: 1rem 1rem 1rem 1.5rem;
            border-left: 4px solid var(--ag-primary);
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          }

          /* Card-style elevated alert */
          .custom-card-alert::part(ag-alert) {
            background: white;
            color: #333;
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid #e5e7eb;
            box-shadow:
              0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .custom-card-alert::part(ag-alert):hover {
            transform: translateY(-2px);
            box-shadow:
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        `;
        document.head.appendChild(style);
      }
    },
    template: `
      <div style="padding: 50px; max-width: 800px;">
        <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
        <p style="margin-bottom: 2rem; color: #6b7280;">
          Alert can be customized using CSS Shadow Parts:
          <code>::part(ag-alert)</code>
        </p>

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <h4>Gradient Style</h4>
            <VueAlert class="custom-gradient-alert">
              🎨 This alert uses a vibrant gradient background with custom shadows
            </VueAlert>
          </div>

          <div>
            <h4>Neon Glow Effect</h4>
            <VueAlert class="custom-neon-alert">
              ⚡ Futuristic neon-themed alert with glowing effects
            </VueAlert>
          </div>

          <div>
            <h4>Minimal with Left Accent</h4>
            <VueAlert class="custom-minimal-alert">
              💡 Clean, minimal design with a colored left border accent
            </VueAlert>
          </div>

          <div>
            <h4>Elevated Card Style</h4>
            <VueAlert class="custom-card-alert">
              📋 Card-style alert with elevation and hover effect
            </VueAlert>
          </div>
        </div>
      </div>
    `,
  }),
};

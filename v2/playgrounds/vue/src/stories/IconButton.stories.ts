import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VueIconButton from 'agnosticui-core/icon-button/vue';
import type { VueIconButtonProps } from 'agnosticui-core/icon-button/vue';
import { ref } from 'vue';

const meta = {
  title: 'AgnosticUI Vue/IconButton',
  component: VueIconButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Required accessible name for the button',
    },
    icon: {
      control: 'text',
      description: 'Icon identifier or name (for icon systems)',
    },
    unicode: {
      control: 'text',
      description: 'Unicode symbol for simple icons (×, ☰, etc.)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size variant',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual variant',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    pressed: {
      control: 'boolean',
      description: 'Pressed state for toggle buttons',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    ariaLabel: {
      control: 'text',
      description: 'Additional ARIA label (will override label prop)',
    },
    ariaDescribedby: {
      control: 'text',
      description: 'ARIA described by reference',
    },
  },
  args: {
    label: 'Icon button',
    size: 'md',
    variant: 'ghost',
    type: 'button',
    disabled: false,
    pressed: false,
    loading: false,
  },
} satisfies Meta<typeof VueIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Close',
    unicode: '×',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    label: 'Settings',
    icon: 'settings',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const WithUnicode: Story = {
  args: {
    label: 'Menu',
    unicode: '☰',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const WithCustomSVG: Story = {
  args: {
    label: 'Custom icon',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" />
          </svg>
        </VueIconButton>
      </div>
    `,
  }),
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'xs',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const SizeSM: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'sm',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const SizeMD: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'md',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const SizeLG: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'lg',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const SizeXL: Story = {
  args: {
    label: 'Close',
    unicode: '×',
    size: 'xl',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

// Variant stories
export const VariantPrimary: Story = {
  args: {
    label: 'Primary action',
    unicode: '✓',
    variant: 'primary',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const VariantSecondary: Story = {
  args: {
    label: 'Secondary action',
    unicode: '☰',
    variant: 'secondary',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const VariantGhost: Story = {
  args: {
    label: 'Ghost action',
    unicode: '⋯',
    variant: 'ghost',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const VariantDanger: Story = {
  args: {
    label: 'Delete',
    unicode: '×',
    variant: 'danger',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

// State stories
export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    unicode: '×',
    disabled: true,
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const Pressed: Story = {
  args: {
    label: 'Toggle button',
    unicode: '★',
    pressed: true,
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    unicode: '↻',
    loading: true,
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args" />
      </div>
    `,
  }),
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: 'Click to test events',
    unicode: '👆',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton },
    setup() {
      const clickCount = ref(0);
      const activateCount = ref(0);

      const handleClick = () => {
        clickCount.value++;
      };

      const handleActivate = () => {
        activateCount.value++;
      };

      return { args, clickCount, activateCount, handleClick, handleActivate };
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;">
        <div style="display: flex; gap: 2rem;">
          <p>Click count: {{ clickCount }}</p>
          <p>Keyboard activate count: {{ activateCount }}</p>
        </div>
        <VueIconButton
          v-bind="args"
          @click="handleClick"
          @activate="handleActivate"
        />
        <p style="font-size: 0.875rem; color: #6b7280;">
          Click the button or use Space/Enter to trigger events
        </p>
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueIconButton },
    template: `
      <div style="padding: 50px; max-width: 800px;">
        <style>
          /* Customize icon button using CSS Shadow Parts */
          .custom-icon-btn::part(ag-icon-has-slotted),
          .custom-icon-btn::part(ag-icon-unicode),
          .custom-icon-btn::part(ag-icon) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 1.5rem;
          }

          .custom-border-btn button {
            border: 3px solid var(--ag-primary) !important;
            border-radius: 50% !important;
          }

          .custom-shadow-btn button {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06) !important;
            transition: box-shadow 0.2s ease !important;
          }

          .custom-shadow-btn button:hover {
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05) !important;
          }
        </style>

        <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
        <p style="margin-bottom: 2rem; color: #6b7280;">
          IconButton can be customized using CSS Shadow Parts:
          <code>::part(ag-icon-has-slotted)</code>,
          <code>::part(ag-icon-unicode)</code>,
          <code>::part(ag-icon)</code>, and
          <code>::part(ag-icon-empty-slot)</code>
        </p>

        <div style="display: flex; gap: 2rem; align-items: center; margin-bottom: 2rem;">
          <div>
            <h4>Gradient Icon</h4>
            <VueIconButton 
              class="custom-icon-btn" 
              label="Gradient styled" 
              unicode="★"
              size="xl"
            />
          </div>

          <div>
            <h4>Custom Border</h4>
            <VueIconButton 
              class="custom-border-btn" 
              label="Border styled" 
              unicode="♥"
              size="lg"
            />
          </div>

          <div>
            <h4>Custom Shadow</h4>
            <VueIconButton 
              class="custom-shadow-btn" 
              label="Shadow styled" 
              unicode="✓"
              size="lg"
              variant="primary"
            />
          </div>
        </div>
      </div>
    `,
  }),
};

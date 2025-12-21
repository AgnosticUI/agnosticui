import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { X, Menu, Check, Star, Shield, MoreVertical, ChevronDown, ArrowRight, RotateCw, Heart } from 'lucide-vue-next';
import VueIconButton from 'agnosticui-core/icon-button/vue';
import type { VueIconButtonProps } from 'agnosticui-core/icon-button/vue';
import { VueIcon } from 'agnosticui-core/icon/vue';
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
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    label: 'Menu',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, Menu },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><Menu /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const WithUnicode: Story = {
  args: {
    label: 'Check',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, Check },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><Check /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const WithCustomSVG: Story = {
  args: {
    label: 'Shield',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, Shield },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><Shield /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: 'Close',
    size: 'xs',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const SizeSM: Story = {
  args: {
    label: 'Close',
    size: 'sm',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const SizeMD: Story = {
  args: {
    label: 'Close',
    size: 'md',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const SizeLG: Story = {
  args: {
    label: 'Close',
    size: 'lg',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const SizeXL: Story = {
  args: {
    label: 'Close',
    size: 'xl',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

// Variant stories
export const VariantPrimary: Story = {
  args: {
    label: 'Primary action',
    variant: 'primary',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, Check },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><Check /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const VariantSecondary: Story = {
  args: {
    label: 'Secondary action',
    variant: 'secondary',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, Menu },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><Menu /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const VariantGhost: Story = {
  args: {
    label: 'Ghost action',
    variant: 'ghost',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, MoreVertical },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><MoreVertical /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const VariantDanger: Story = {
  args: {
    label: 'Delete',
    variant: 'danger',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

// State stories
export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    disabled: true,
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, X },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><X /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const Pressed: Story = {
  args: {
    label: 'Toggle button',
    pressed: true,
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, Star },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><Star /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true,
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, RotateCw },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButton v-bind="args">
          <VueIcon no-fill><RotateCw /></VueIcon>
        </VueIconButton>
      </div>
    `,
  }),
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: 'Click to test events',
  },
  render: (args: VueIconButtonProps) => ({
    components: { VueIconButton, VueIcon, Star },
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
        >
          <VueIcon no-fill><Star /></VueIcon>
        </VueIconButton>
        <p style="font-size: 0.875rem; color: #6b7280;">
          Click the button or use Space/Enter to trigger events
        </p>
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueIconButton, VueIcon, Star, Heart, Check },
    setup() {
      // Inject global styles for CSS Shadow Parts
      const styleId = 'icon-button-css-parts-demo';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
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

          .custom-border-btn::part(ag-icon-button) {
            border: 3px solid var(--ag-primary);
            border-radius: 50%;
          }

          .custom-shadow-btn::part(ag-icon-button) {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
            transition: box-shadow 0.2s ease;
          }

          .custom-shadow-btn::part(ag-icon-button):hover {
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
          }
        `;
        document.head.appendChild(style);
      }
    },
    template: `
      <div style="padding: 50px; max-width: 800px;">

        <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
        <p style="margin-bottom: 2rem; color: #6b7280;">
          IconButton can be customized using CSS Shadow Parts:
          <code>::part(ag-icon-has-slotted)</code>,
          <code>::part(ag-icon-unicode)</code>,
          <code>::part(ag-icon)</code>, and
          <code>::part(ag-icon-empty-slot)</code>
        </p>

        <div style="display: flex; gap: 2rem; align-items: flex-end; margin-bottom: 2rem;">
          <div>
            <h4 style="margin-bottom: 0.5rem;">Gradient Icon</h4>
            <VueIconButton
              class="custom-icon-btn"
              label="Gradient styled"
              size="xl"
            >
              <VueIcon no-fill><Star /></VueIcon>
            </VueIconButton>
          </div>

          <div>
            <h4 style="margin-bottom: 0.5rem;">Custom Border</h4>
            <VueIconButton
              class="custom-border-btn"
              label="Border styled"
              size="lg"
            >
              <VueIcon no-fill><Heart /></VueIcon>
            </VueIconButton>
          </div>

          <div>
            <h4 style="margin-bottom: 0.5rem;">Custom Shadow</h4>
            <VueIconButton
              class="custom-shadow-btn"
              label="Shadow styled"
              size="lg"
              variant="primary"
            >
              <VueIcon no-fill><Check /></VueIcon>
            </VueIconButton>
          </div>
        </div>
      </div>
    `,
  }),
};

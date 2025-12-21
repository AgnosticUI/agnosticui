import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Star, Info, CheckCircle2, AlertTriangle, AlertCircle, Zap } from 'lucide-vue-next';
import { VueIcon, type VueIconProps } from 'agnosticui-core/icon/vue';

const meta = {
  title: 'AgnosticUI Vue/Icon',
  component: VueIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: "select",
      options: ['', '14', '16', '18', '20', '24', '32', '36', '40', '48', '56', '64'],
      description: "Size variant for the icon wrapper and SVG",
    },
    type: {
      control: "select",
      options: ['', 'info', 'action', 'success', 'warning', 'error'],
      description: "Semantic type for color theming the icon",
    },
  },
  args: {
    size: '16',
    type: '',
  },
} satisfies Meta<typeof VueIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: VueIconProps) => ({
    components: { VueIcon, Star },
    setup() {
      return { args };
    },
    template: `
      <VueIcon v-bind="args" no-fill>
        <Star />
      </VueIcon>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueIcon, Star },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; padding: 2rem;">
        <VueIcon size="14" no-fill><Star /></VueIcon>
        <VueIcon size="16" no-fill><Star /></VueIcon>
        <VueIcon size="20" no-fill><Star /></VueIcon>
        <VueIcon size="24" no-fill><Star /></VueIcon>
        <VueIcon size="32" no-fill><Star /></VueIcon>
        <VueIcon size="48" no-fill><Star /></VueIcon>
      </div>
    `,
  }),
};

export const Types: Story = {
  render: () => ({
    components: { VueIcon, Info, CheckCircle2, AlertTriangle, AlertCircle, Zap },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; padding: 2rem;">
        <VueIcon type="info" no-fill><Info /></VueIcon>
        <VueIcon type="success" no-fill><CheckCircle2 /></VueIcon>
        <VueIcon type="warning" no-fill><AlertTriangle /></VueIcon>
        <VueIcon type="error" no-fill><AlertCircle /></VueIcon>
        <VueIcon type="action" no-fill><Zap /></VueIcon>
      </div>
    `,
  }),
};

export const WithSlot: Story = {
  render: () => ({
    components: { VueIcon, Star, AlertCircle },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 2rem;">
        <VueIcon size="20" no-fill><Star /></VueIcon>
        <VueIcon size="24" type="error" no-fill><AlertCircle /></VueIcon>
      </div>
    `,
  }),
};

export const CustomizedWithCSSParts: Story = {
  render: () => ({
    components: { VueIcon, Star, Info },
    setup() {
      const styles = `
        <style>
          .custom-icon-base::part(icon-base) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
            padding: 0.5rem;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          }

          .custom-icon-base svg {
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          }

          .custom-glow::part(icon-base) {
            filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
          }

          .custom-minimal::part(icon-base) {
            border: 2px solid #e5e7eb;
            border-radius: 4px;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
          <VueIcon class="custom-icon-base" size="24" no-fill>
            <Star />
          </VueIcon>
          <VueIcon class="custom-glow" size="32" type="info" no-fill>
            <Info />
          </VueIcon>
          <VueIcon class="custom-minimal" size="20" no-fill>
            <Star />
          </VueIcon>
        </div>
      </div>
    `,
  }),
};

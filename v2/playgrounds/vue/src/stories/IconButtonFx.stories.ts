import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import {
  Heart,
  Download,
  Bell,
  Trash2,
  Star,
  Check,
  Plus,
  Minus,
  Settings,
  Home,
  Search,
  Edit,
  Bookmark,
  Share2,
  X,
  Menu,
  ChevronLeft,
  ThumbsUp,
  MessageCircle,
  Send,
} from 'lucide-vue-next';
import { VueIconButtonFx, type VueIconButtonFxProps } from 'agnosticui-core/icon-button-fx/vue';

const meta = {
  title: 'AgnosticUI Vue/IconButtonFx',
  component: VueIconButtonFx,
  tags: ['autodocs'],
  argTypes: {
    // FX Props
    fx: {
      control: 'select',
      options: [
        '',
        'pulse',
        'bounce',
        'jelly',
        'press-pop',
        'slide-in',
        'grow',
        'shrink',
        'push',
        'shake',
        'wobble',
        'pulse-wobble',
      ],
      description: 'FX effect to apply',
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Animation duration speed',
    },
    fxEase: {
      control: 'select',
      options: [
        'ease',
        'ease-in',
        'ease-out',
        'ease-in-out',
        'bounce',
        'spring-sm',
        'spring-md',
        'spring-lg',
      ],
      description: 'Animation easing function',
    },
    fxDisabled: {
      control: 'boolean',
      description: 'Disable FX effects entirely',
    },
    // IconButton Props
    label: {
      control: 'text',
      description: 'Accessible label for the icon button (required)',
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome', 'ghost'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    pressed: {
      control: 'boolean',
      description: 'Toggles aria-pressed state',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type for form behavior',
    },
    unicode: {
      control: 'text',
      description: 'Unicode character to display as icon',
    },
  },
  args: {
    fx: 'pulse',
    fxSpeed: 'md',
    fxEase: 'spring-md',
    fxDisabled: false,
    label: 'Icon button',
    variant: 'ghost',
    size: 'md',
    disabled: false,
    pressed: false,
    loading: false,
    type: 'button',
  },
} satisfies Meta<typeof VueIconButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================
// Default Interactive Story
// ========================================

export const Default: Story = {
  args: {},
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Heart },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Heart />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

// ========================================
// Individual FX Effect Stories
// ========================================

export const Pulse: Story = {
  args: {
    fx: 'pulse',
    variant: 'primary',
    label: 'Like',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Heart },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Heart />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const Bounce: Story = {
  args: {
    fx: 'bounce',
    variant: 'success',
    label: 'Download',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Download },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Download />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const Wobble: Story = {
  args: {
    fx: 'wobble',
    variant: 'warning',
    label: 'Notifications',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Bell },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Bell />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const Shake: Story = {
  args: {
    fx: 'shake',
    variant: 'danger',
    label: 'Delete',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Trash2 },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Trash2 />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const PulseWobble: Story = {
  args: {
    fx: 'pulse-wobble',
    variant: 'primary',
    label: 'Favorite',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Heart },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Heart />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const Jelly: Story = {
  args: {
    fx: 'jelly',
    variant: 'warning',
    label: 'Rate',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Star },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Star />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const PressPop: Story = {
  args: {
    fx: 'press-pop',
    variant: 'success',
    label: 'Confirm',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Check },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Check />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const Grow: Story = {
  args: {
    fx: 'grow',
    variant: 'primary',
    label: 'Add',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Plus },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Plus />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

export const Shrink: Story = {
  args: {
    fx: 'shrink',
    variant: 'danger',
    label: 'Remove',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Minus },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Minus />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

// ========================================
// FX Speed Variations
// ========================================

export const SpeedComparison: Story = {
  render: () => ({
    components: { VueIconButtonFx, Heart },
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem; color: #1f2328; font-size: 1.25rem;">
          FX Speed Variations (Pulse Effect)
        </h3>
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" fx-speed="xs" variant="primary" label="Extra fast">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">XS (100ms)</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" fx-speed="sm" variant="primary" label="Fast">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">SM (150ms)</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" fx-speed="md" variant="primary" label="Medium">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">MD (200ms)</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" fx-speed="lg" variant="primary" label="Slow">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">LG (300ms)</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" fx-speed="xl" variant="primary" label="Extra slow">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">XL (400ms)</div>
          </div>
        </div>
      </div>
    `,
  }),
};

// ========================================
// FX Easing Variations
// ========================================

export const EasingComparison: Story = {
  render: () => ({
    components: { VueIconButtonFx, Heart },
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem; color: #1f2328; font-size: 1.25rem;">
          FX Easing Functions (Bounce Effect)
        </h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <div style="text-align: center;">
            <VueIconButtonFx fx="bounce" fx-ease="ease" variant="primary" label="Ease">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">ease</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="bounce" fx-ease="ease-in" variant="primary" label="Ease In">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">ease-in</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="bounce" fx-ease="ease-out" variant="primary" label="Ease Out">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">ease-out</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="bounce" fx-ease="bounce" variant="primary" label="Bounce">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">bounce</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="bounce" fx-ease="spring-sm" variant="primary" label="Spring Small">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">spring-sm</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="bounce" fx-ease="spring-md" variant="primary" label="Spring Medium">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">spring-md</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="bounce" fx-ease="spring-lg" variant="primary" label="Spring Large">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">spring-lg</div>
          </div>
        </div>
      </div>
    `,
  }),
};

// ========================================
// Effects Gallery - Comprehensive Showcase
// ========================================

export const EffectsGallery: Story = {
  render: () => ({
    components: {
      VueIconButtonFx,
      Heart,
      Download,
      Bell,
      Trash2,
      Star,
      Check,
      Plus,
      Minus,
      Settings,
    },
    template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin-bottom: 2rem; color: #1f2328; font-size: 1.5rem;">
          Icon Button FX Effects Gallery
        </h2>

        <!-- Pulse Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Pulse <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale grow (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="pulse" variant="primary" label="Pulse Primary"><Heart /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse" variant="success" label="Pulse Success"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse" variant="warning" label="Pulse Warning"><Star /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse" variant="danger" label="Pulse Danger"><Trash2 /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse" variant="ghost" label="Pulse Ghost"><Settings /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse" variant="primary" size="lg" label="Pulse Large"><Heart /></VueIconButtonFx>
          </div>
        </div>

        <!-- Bounce Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Bounce <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Vertical pop (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="bounce" variant="primary" label="Bounce Primary"><Download /></VueIconButtonFx>
            <VueIconButtonFx fx="bounce" variant="success" label="Bounce Success"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="bounce" variant="warning" label="Bounce Warning"><Bell /></VueIconButtonFx>
            <VueIconButtonFx fx="bounce" variant="danger" label="Bounce Danger"><Trash2 /></VueIconButtonFx>
            <VueIconButtonFx fx="bounce" variant="ghost" label="Bounce Ghost"><Download /></VueIconButtonFx>
            <VueIconButtonFx fx="bounce" variant="success" size="lg" label="Bounce Large"><Download /></VueIconButtonFx>
          </div>
        </div>

        <!-- Wobble Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Wobble <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Rotate wobble (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="wobble" variant="primary" label="Wobble Primary"><Bell /></VueIconButtonFx>
            <VueIconButtonFx fx="wobble" variant="success" label="Wobble Success"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="wobble" variant="warning" label="Wobble Warning"><Bell /></VueIconButtonFx>
            <VueIconButtonFx fx="wobble" variant="danger" label="Wobble Danger"><Bell /></VueIconButtonFx>
            <VueIconButtonFx fx="wobble" variant="ghost" label="Wobble Ghost"><Bell /></VueIconButtonFx>
            <VueIconButtonFx fx="wobble" variant="warning" size="lg" label="Wobble Large"><Bell /></VueIconButtonFx>
          </div>
        </div>

        <!-- Shake Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Shake <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Horizontal shake (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="shake" variant="primary" label="Shake Primary"><Trash2 /></VueIconButtonFx>
            <VueIconButtonFx fx="shake" variant="success" label="Shake Success"><Trash2 /></VueIconButtonFx>
            <VueIconButtonFx fx="shake" variant="warning" label="Shake Warning"><Trash2 /></VueIconButtonFx>
            <VueIconButtonFx fx="shake" variant="danger" label="Shake Danger"><Trash2 /></VueIconButtonFx>
            <VueIconButtonFx fx="shake" variant="ghost" label="Shake Ghost"><Trash2 /></VueIconButtonFx>
            <VueIconButtonFx fx="shake" variant="danger" size="lg" label="Shake Large"><Trash2 /></VueIconButtonFx>
          </div>
        </div>

        <!-- Pulse-Wobble Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Pulse-Wobble <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Sequential animation (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="pulse-wobble" variant="primary" label="Pulse-Wobble Primary"><Heart /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse-wobble" variant="success" label="Pulse-Wobble Success"><Star /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse-wobble" variant="warning" label="Pulse-Wobble Warning"><Bell /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse-wobble" variant="danger" label="Pulse-Wobble Danger"><Heart /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse-wobble" variant="ghost" label="Pulse-Wobble Ghost"><Heart /></VueIconButtonFx>
            <VueIconButtonFx fx="pulse-wobble" variant="primary" size="lg" label="Pulse-Wobble Large"><Heart /></VueIconButtonFx>
          </div>
        </div>

        <!-- Jelly Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Jelly <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Squash/stretch (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="jelly" variant="primary" label="Jelly Primary"><Star /></VueIconButtonFx>
            <VueIconButtonFx fx="jelly" variant="success" label="Jelly Success"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="jelly" variant="warning" label="Jelly Warning"><Star /></VueIconButtonFx>
            <VueIconButtonFx fx="jelly" variant="danger" label="Jelly Danger"><Star /></VueIconButtonFx>
            <VueIconButtonFx fx="jelly" variant="ghost" label="Jelly Ghost"><Star /></VueIconButtonFx>
            <VueIconButtonFx fx="jelly" variant="warning" size="lg" label="Jelly Large"><Star /></VueIconButtonFx>
          </div>
        </div>

        <!-- Press-Pop Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Press-Pop <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Quick press (click)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="press-pop" variant="primary" label="Press-Pop Primary"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="press-pop" variant="success" label="Press-Pop Success"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="press-pop" variant="warning" label="Press-Pop Warning"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="press-pop" variant="danger" label="Press-Pop Danger"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="press-pop" variant="ghost" label="Press-Pop Ghost"><Check /></VueIconButtonFx>
            <VueIconButtonFx fx="press-pop" variant="success" size="lg" label="Press-Pop Large"><Check /></VueIconButtonFx>
          </div>
        </div>

        <!-- Grow Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Grow <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale up (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="grow" variant="primary" label="Grow Primary"><Plus /></VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="success" label="Grow Success"><Plus /></VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="warning" label="Grow Warning"><Plus /></VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="danger" label="Grow Danger"><Plus /></VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="ghost" label="Grow Ghost"><Plus /></VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="primary" size="lg" label="Grow Large"><Plus /></VueIconButtonFx>
          </div>
        </div>

        <!-- Shrink Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Shrink <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale down (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueIconButtonFx fx="shrink" variant="primary" label="Shrink Primary"><Minus /></VueIconButtonFx>
            <VueIconButtonFx fx="shrink" variant="success" label="Shrink Success"><Minus /></VueIconButtonFx>
            <VueIconButtonFx fx="shrink" variant="warning" label="Shrink Warning"><Minus /></VueIconButtonFx>
            <VueIconButtonFx fx="shrink" variant="danger" label="Shrink Danger"><Minus /></VueIconButtonFx>
            <VueIconButtonFx fx="shrink" variant="ghost" label="Shrink Ghost"><Minus /></VueIconButtonFx>
            <VueIconButtonFx fx="shrink" variant="danger" size="lg" label="Shrink Large"><Minus /></VueIconButtonFx>
          </div>
        </div>
      </div>
    `,
  }),
};

// ========================================
// Size Variations with Icon Scaling Note
// ========================================

export const SizeVariations: Story = {
  render: () => ({
    components: { VueIconButtonFx, Heart },
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem; color: #1f2328; font-size: 1.25rem;">
          Icon Button FX Sizes with Pulse Effect
        </h3>
        <p style="margin-bottom: 1rem; color: #6b7280; font-size: 0.875rem;">
          Note: For <code>xs</code> and <code>sm</code> sizes, ensure icons scale properly by passing
          <code>:size="&lt;iconSize&gt;"</code> or CSS <code>width: 100%; height: 100%</code> to the icon
          component so it fills the button's icon container.
        </p>
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" size="xs" variant="primary" label="Extra small">
              <Heart :size="12" />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">XS</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" size="sm" variant="primary" label="Small">
              <Heart :size="16" />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">SM</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" size="md" variant="primary" label="Medium">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">MD</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" size="lg" variant="primary" label="Large">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">LG</div>
          </div>
          <div style="text-align: center;">
            <VueIconButtonFx fx="pulse" size="xl" variant="primary" label="Extra large">
              <Heart />
            </VueIconButtonFx>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">XL</div>
          </div>
        </div>
      </div>
    `,
  }),
};

// ========================================
// Common Use Cases
// ========================================

export const CommonUseCases: Story = {
  render: () => ({
    components: {
      VueIconButtonFx,
      Home,
      Search,
      Settings,
      Edit,
      Trash2,
      Bookmark,
      Share2,
      X,
      Menu,
      ChevronLeft,
      Bell,
      ThumbsUp,
      MessageCircle,
      Send,
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin-bottom: 2rem; color: #1f2328; font-size: 1.5rem;">
          Common Icon Button FX Use Cases
        </h2>

        <!-- Navigation -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.125rem;">Navigation</h3>
          <div style="display: flex; gap: 1rem; align-items: center; padding: 1rem; background: #f6f8fa; border-radius: 8px;">
            <VueIconButtonFx fx="grow" variant="ghost" label="Menu">
              <Menu />
            </VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="ghost" label="Home">
              <Home />
            </VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="ghost" label="Search">
              <Search />
            </VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="ghost" label="Settings">
              <Settings />
            </VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="ghost" label="Back">
              <ChevronLeft />
            </VueIconButtonFx>
          </div>
        </div>

        <!-- Actions -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.125rem;">Actions</h3>
          <div style="display: flex; gap: 1rem; align-items: center; padding: 1rem; background: #f6f8fa; border-radius: 8px;">
            <VueIconButtonFx fx="pulse" variant="primary" label="Edit">
              <Edit />
            </VueIconButtonFx>
            <VueIconButtonFx fx="shake" variant="danger" label="Delete">
              <Trash2 />
            </VueIconButtonFx>
            <VueIconButtonFx fx="bounce" variant="success" label="Bookmark">
              <Bookmark />
            </VueIconButtonFx>
            <VueIconButtonFx fx="pulse" variant="ghost" label="Share">
              <Share2 />
            </VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="ghost" label="Close">
              <X />
            </VueIconButtonFx>
          </div>
        </div>

        <!-- Notifications & Alerts -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.125rem;">Notifications & Alerts</h3>
          <div style="display: flex; gap: 1rem; align-items: center; padding: 1rem; background: #f6f8fa; border-radius: 8px;">
            <VueIconButtonFx fx="wobble" variant="warning" label="Notifications">
              <Bell />
            </VueIconButtonFx>
            <VueIconButtonFx fx="pulse-wobble" variant="danger" label="Important notification">
              <Bell />
            </VueIconButtonFx>
            <VueIconButtonFx fx="shake" variant="danger" label="Critical alert">
              <Bell />
            </VueIconButtonFx>
          </div>
        </div>

        <!-- Social Interactions -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.125rem;">Social Interactions</h3>
          <div style="display: flex; gap: 1rem; align-items: center; padding: 1rem; background: #f6f8fa; border-radius: 8px;">
            <VueIconButtonFx fx="pulse" variant="ghost" label="Like">
              <ThumbsUp />
            </VueIconButtonFx>
            <VueIconButtonFx fx="bounce" variant="ghost" label="Comment">
              <MessageCircle />
            </VueIconButtonFx>
            <VueIconButtonFx fx="grow" variant="primary" label="Send">
              <Send />
            </VueIconButtonFx>
            <VueIconButtonFx fx="pulse" variant="ghost" label="Share">
              <Share2 />
            </VueIconButtonFx>
          </div>
        </div>
      </div>
    `,
  }),
};

// ========================================
// FX Disabled State
// ========================================

export const FxDisabled: Story = {
  args: {
    fx: 'pulse',
    fxDisabled: true,
    variant: 'primary',
    label: 'No animation',
  },
  render: (args: VueIconButtonFxProps) => ({
    components: { VueIconButtonFx, Heart },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueIconButtonFx v-bind="args">
          <Heart />
        </VueIconButtonFx>
      </div>
    `,
  }),
};

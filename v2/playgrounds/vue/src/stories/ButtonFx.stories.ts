import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { Bomb } from "lucide-vue-next";
import { VueButtonFx, type VueButtonFxProps } from 'agnosticui-core/button-fx/vue';
import { VueIcon } from 'agnosticui-core/icon/vue';

const meta = {
  title: 'AgnosticUI Vue/ButtonFx',
  component: VueButtonFx,
  tags: ['autodocs'],
  argTypes: {
    // FX Props
    fx: {
      control: 'select',
      options: [
        '',
        'bounce',
        'pulse',
        'jelly',
        'press-pop',
        'slide-in',
        'grow',
        'shrink',
        'push',
        'bg-slide',
        'side-slide',
        'press-shadow',
        'shake',
        'wobble',
      ],
      description: 'FX effect to apply (can be array for multiple effects)',
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
    // Button Props
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    shape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
      description: 'Shape of the button',
    },
    bordered: {
      control: 'boolean',
      description: 'Applies a bordered style with transparent background',
    },
    ghost: {
      control: 'boolean',
      description: 'Minimal button with transparent background',
    },
    link: {
      control: 'boolean',
      description: 'Link-style button with underline on hover',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type for form behavior',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading state',
    },
  },
  args: {
    fx: ['bounce'],
    fxSpeed: 'md',
    fxEase: 'spring-md',
    fxDisabled: false,
    variant: 'primary',
    size: 'md',
    shape: '',
    bordered: false,
    ghost: false,
    link: false,
    type: 'button',
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof VueButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with all controls
export const Default: Story = {
  args: {},
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Hover Me</VueButtonFx>
      </div>
    `,
  }),
};

// ========================================
// Individual FX Effect Stories
// ========================================

export const Bounce: Story = {
  args: {
    fx: ['bounce'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Bounce Effect</VueButtonFx>
      </div>
    `,
  }),
};

export const Pulse: Story = {
  args: {
    fx: ['pulse'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Pulse Effect</VueButtonFx>
      </div>
    `,
  }),
};

export const Jelly: Story = {
  args: {
    fx: ['jelly'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Jelly Effect</VueButtonFx>
      </div>
    `,
  }),
};

export const PressPop: Story = {
  args: {
    fx: ['press-pop'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Click Me (Active)</VueButtonFx>
      </div>
    `,
  }),
};

export const SlideIn: Story = {
  args: {
    fx: ['slide-in'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Slide In (On Mount)</VueButtonFx>
      </div>
    `,
  }),
};

export const Grow: Story = {
  args: {
    fx: ['grow'],
    variant: 'success',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Grow Effect</VueButtonFx>
      </div>
    `,
  }),
};

export const Shrink: Story = {
  args: {
    fx: ['shrink'],
    variant: 'warning',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Shrink Effect</VueButtonFx>
      </div>
    `,
  }),
};

export const Push: Story = {
  args: {
    fx: ['push'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Push Effect</VueButtonFx>
      </div>
    `,
  }),
};

export const BackgroundSlide: Story = {
  args: {
    fx: ['bg-slide'],
    fxSpeed: 'md',
    fxEase: 'ease-out',
    variant: 'primary',
    shape: 'rounded',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Background Slide</VueButtonFx>
      </div>
    `,
  }),
};

export const SideSlide: Story = {
  args: {
    fx: ['side-slide'],
    fxSpeed: 'md',
    fxEase: 'ease-out',
    variant: 'secondary',
    shape: 'rounded',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Side Slide</VueButtonFx>
      </div>
    `,
  }),
};

export const PressShadow: Story = {
  args: {
    fx: ['press-shadow'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Press Shadow</VueButtonFx>
      </div>
    `,
  }),
};

export const Shake: Story = {
  args: {
    fx: ['shake'],
    variant: 'danger',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Shake Effect</VueButtonFx>
      </div>
    `,
  }),
};

export const Wobble: Story = {
  args: {
    fx: ['wobble'],
    variant: 'warning',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Wobble Effect</VueButtonFx>
      </div>
    `,
  }),
};

// ========================================
// FX Speed Variations
// ========================================

export const SpeedComparison: Story = {
  render: () => ({
    components: { VueButtonFx },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; padding: 50px;">
        <VueButtonFx :fx="['pulse']" fx-speed="xs" variant="primary">XS Speed</VueButtonFx>
        <VueButtonFx :fx="['pulse']" fx-speed="sm" variant="primary">SM Speed</VueButtonFx>
        <VueButtonFx :fx="['pulse']" fx-speed="md" variant="primary">MD Speed (Default)</VueButtonFx>
        <VueButtonFx :fx="['pulse']" fx-speed="lg" variant="primary">LG Speed</VueButtonFx>
        <VueButtonFx :fx="['pulse']" fx-speed="xl" variant="primary">XL Speed</VueButtonFx>
      </div>
    `,
  }),
};

// ========================================
// FX Easing Variations
// ========================================

export const EasingComparison: Story = {
  render: () => ({
    components: { VueButtonFx },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; padding: 50px;">
        <VueButtonFx :fx="['bounce']" fx-ease="ease" variant="primary">Ease</VueButtonFx>
        <VueButtonFx :fx="['bounce']" fx-ease="ease-in" variant="primary">Ease-In</VueButtonFx>
        <VueButtonFx :fx="['bounce']" fx-ease="ease-out" variant="primary">Ease-Out</VueButtonFx>
        <VueButtonFx :fx="['bounce']" fx-ease="bounce" variant="primary">Bounce</VueButtonFx>
        <VueButtonFx :fx="['bounce']" fx-ease="spring-sm" variant="primary">Spring SM</VueButtonFx>
        <VueButtonFx :fx="['bounce']" fx-ease="spring-md" variant="primary">Spring MD</VueButtonFx>
        <VueButtonFx :fx="['bounce']" fx-ease="spring-lg" variant="primary">Spring LG</VueButtonFx>
      </div>
    `,
  }),
};

// ========================================
// Multiple Effects Combined
// ========================================

export const CombinedEffects: Story = {
  args: {
    fx: ['bounce', 'pulse'],
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">Combined: Bounce + Pulse</VueButtonFx>
      </div>
    `,
  }),
};

// ========================================
// Button Variants with FX
// ========================================

export const VariantsShowcase: Story = {
  render: () => ({
    components: { VueButtonFx },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; padding: 50px;">
        <VueButtonFx :fx="['pulse']" variant="primary">Primary</VueButtonFx>
        <VueButtonFx :fx="['pulse']" variant="secondary">Secondary</VueButtonFx>
        <VueButtonFx :fx="['pulse']" variant="success">Success</VueButtonFx>
        <VueButtonFx :fx="['pulse']" variant="warning">Warning</VueButtonFx>
        <VueButtonFx :fx="['pulse']" variant="danger">Danger</VueButtonFx>
        <VueButtonFx :fx="['pulse']" variant="monochrome">Monochrome</VueButtonFx>
      </div>
    `,
  }),
};

// ========================================
// Size Variations with FX
// ========================================

export const SizesShowcase: Story = {
  render: () => ({
    components: { VueButtonFx },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; padding: 50px;">
        <VueButtonFx :fx="['jelly']" size="x-sm" variant="primary">X-Small</VueButtonFx>
        <VueButtonFx :fx="['jelly']" size="sm" variant="primary">Small</VueButtonFx>
        <VueButtonFx :fx="['jelly']" size="md" variant="primary">Medium</VueButtonFx>
        <VueButtonFx :fx="['jelly']" size="lg" variant="primary">Large</VueButtonFx>
        <VueButtonFx :fx="['jelly']" size="xl" variant="primary">X-Large</VueButtonFx>
      </div>
    `,
  }),
};

// ========================================
// Effects Gallery - Comprehensive Showcase
// ========================================

export const EffectsGallery: Story = {
  render: () => ({
    components: { VueButtonFx, VueIcon, Bomb },
    template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <!-- Bounce Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Bounce <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Vertical pop (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['bounce']" fx-ease="spring-md" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['bounce']" fx-ease="spring-md" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['bounce']" fx-ease="spring-md" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['bounce']" fx-ease="spring-md" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['bounce']" fx-ease="spring-md" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['bounce']" fx-ease="spring-md" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Pulse Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Pulse <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale grow (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['pulse']" fx-ease="spring-md" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['pulse']" fx-ease="spring-md" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['pulse']" fx-ease="spring-md" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['pulse']" fx-ease="spring-md" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['pulse']" fx-ease="spring-md" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['pulse']" fx-ease="spring-md" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Jelly Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Jelly <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Squash/stretch (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['jelly']" fx-ease="spring-lg" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['jelly']" fx-ease="spring-lg" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['jelly']" fx-ease="spring-lg" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['jelly']" fx-ease="spring-lg" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['jelly']" fx-ease="spring-lg" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['jelly']" fx-ease="spring-lg" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Press Pop Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Press Pop <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Quick press (click)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['press-pop']" fx-ease="spring-sm" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['press-pop']" fx-ease="spring-sm" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['press-pop']" fx-ease="spring-sm" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['press-pop']" fx-ease="spring-sm" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['press-pop']" fx-ease="spring-sm" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['press-pop']" fx-ease="spring-sm" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Slide In Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Slide In <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Entrance (mount)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['slide-in']" fx-ease="spring-md" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['slide-in']" fx-ease="spring-md" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['slide-in']" fx-ease="spring-md" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['slide-in']" fx-ease="spring-md" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['slide-in']" fx-ease="spring-md" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['slide-in']" fx-ease="spring-md" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Grow Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Grow <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale up (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['grow']" fx-ease="spring-md" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['grow']" fx-ease="spring-md" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['grow']" fx-ease="spring-md" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['grow']" fx-ease="spring-md" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['grow']" fx-ease="spring-md" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['grow']" fx-ease="spring-md" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Shrink Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Shrink <span style=" font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale down (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['shrink']" fx-ease="spring-md" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['shrink']" fx-ease="spring-md" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['shrink']" fx-ease="spring-md" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['shrink']" fx-ease="spring-md" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['shrink']" fx-ease="spring-md" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['shrink']" fx-ease="spring-md" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Push Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Push <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Press down (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['push']" fx-ease="spring-sm" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['push']" fx-ease="spring-sm" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['push']" fx-ease="spring-sm" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['push']" fx-ease="spring-sm" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['push']" fx-ease="spring-sm" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['push']" fx-ease="spring-sm" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- BG Slide Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            BG Slide <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Background slides up (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['bg-slide']" fx-speed="md" fx-ease="ease-out" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['bg-slide']" fx-speed="md" fx-ease="ease-out" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['bg-slide']" fx-speed="md" fx-ease="ease-out" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['bg-slide']" fx-speed="md" fx-ease="ease-out" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['bg-slide']" fx-speed="md" fx-ease="ease-out" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['bg-slide']" fx-speed="md" fx-ease="ease-out" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Side Slide Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Side Slide <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Wipe left to right (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['side-slide']" fx-speed="md" fx-ease="ease-out" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['side-slide']" fx-speed="md" fx-ease="ease-out" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['side-slide']" fx-speed="md" fx-ease="ease-out" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['side-slide']" fx-speed="md" fx-ease="ease-out" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['side-slide']" fx-speed="md" fx-ease="ease-out" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['side-slide']" fx-speed="md" fx-ease="ease-out" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Wobble Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Wobble <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Rotate wobble (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['wobble']" fx-ease="spring-md" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['wobble']" fx-ease="spring-md" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['wobble']" fx-ease="spring-md" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['wobble']" fx-ease="spring-md" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['wobble']" fx-ease="spring-md" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['wobble']" fx-ease="spring-md" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Shake Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Shake <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Horizontal shake (hover)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['shake']" fx-speed="sm" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['shake']" fx-speed="sm" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['shake']" fx-speed="sm" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['shake']" fx-speed="sm" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['shake']" fx-speed="sm" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['shake']" fx-speed="sm" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Press Shadow Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">
            Press Shadow <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Shadow press (click)</span>
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['press-shadow']" variant="primary" shape="rounded">Primary</VueButtonFx>
            <VueButtonFx :fx="['press-shadow']" variant="success" shape="rounded">Success</VueButtonFx>
            <VueButtonFx :fx="['press-shadow']" variant="warning" shape="rounded">Warning</VueButtonFx>
            <VueButtonFx :fx="['press-shadow']" variant="danger" shape="rounded">Danger</VueButtonFx>
            <VueButtonFx :fx="['press-shadow']" variant="primary" :bordered="true" shape="rounded">Bordered</VueButtonFx>
            <VueButtonFx :fx="['press-shadow']" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
          </div>
        </div>

        <!-- Pulse → Wobble Effect -->
        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.125rem;">
            Pulse → Wobble
          </h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <VueButtonFx :fx="['pulse-wobble']" variant="primary" shape="rounded">Pulse → Wobble</VueButtonFx>
            <VueButtonFx :fx="['pulse-wobble']" variant="success" shape="rounded">Pulse → Wobble</VueButtonFx>
            <VueButtonFx :fx="['pulse-wobble']" variant="warning" shape="rounded">Pulse → Wobble</VueButtonFx>
            <VueButtonFx :fx="['pulse-wobble']" variant="danger" shape="rounded">Pulse → Wobble</VueButtonFx>
            <VueButtonFx :fx="['pulse-wobble']" variant="primary" shape="rounded" :bordered="true">Bordered</VueButtonFx>
            <VueButtonFx :fx="['pulse-wobble']" variant="success" shape="capsule" :bordered="true">Capsule</VueButtonFx>
            <VueButtonFx :fx="['pulse-wobble']" variant="danger" shape="rounded-square" :size="lg" :bordered="true"><VueIcon no-fill><Bomb /></VueIcon></VueButtonFx>
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
    fx: ['bounce'],
    fxDisabled: true,
    variant: 'primary',
  },
  render: (args: VueButtonFxProps) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueButtonFx v-bind="args">FX Disabled (No Animation)</VueButtonFx>
      </div>
    `,
  }),
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/skeleton';
import type { SkeletonProps } from 'agnosticui-core/skeleton';

const meta: Meta<SkeletonProps> = {
  title: 'AgnosticUI Lit/SkeletonLoader',
  component: 'ag-skeleton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
      description: 'Shape variant of the skeleton',
    },
    effect: {
      control: 'select',
      options: ['pulse', 'sheen', 'none'],
      description: 'Animation effect',
    },
    intensity: {
      control: 'select',
      options: ['light', 'medium'],
      description: 'Background intensity (light uses --ag-background-secondary, medium uses --ag-background-tertiary)',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (CSS value)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (CSS value)',
    },
  },
};

export default meta;
type Story = StoryObj<SkeletonProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    variant: 'text',
    effect: 'pulse',
    intensity: 'light',
    width: '100%',
    height: '1em',
  },
  render: (args) => html`
    <ag-skeleton
      .variant=${args.variant}
      .effect=${args.effect}
      .intensity=${args.intensity}
      .width=${args.width}
      .height=${args.height}
    ></ag-skeleton>
  `,
};

// Text Skeleton (default)
export const Text: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton></ag-skeleton>
      <ag-skeleton style="margin-top: 8px;"></ag-skeleton>
      <ag-skeleton style="margin-top: 8px; width: 60%;"></ag-skeleton>
    </div>
  `,
};

// Circular Skeleton (for avatars)
export const Circular: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ag-skeleton .variant=${'circular'} .width=${'40px'} .height=${'40px'}></ag-skeleton>
      <ag-skeleton .variant=${'circular'} .width=${'60px'} .height=${'60px'}></ag-skeleton>
      <ag-skeleton .variant=${'circular'} .width=${'80px'} .height=${'80px'}></ag-skeleton>
    </div>
  `,
};

// Rectangular Skeleton
export const Rectangular: Story = {
  render: () => html`
    <ag-skeleton .variant=${'rectangular'} .width=${'300px'} .height=${'200px'}></ag-skeleton>
  `,
};

// Rounded Skeleton (for cards/images)
export const Rounded: Story = {
  render: () => html`
    <ag-skeleton .variant=${'rounded'} .width=${'300px'} .height=${'200px'}></ag-skeleton>
  `,
};

// Pulse Effect (default)
export const PulseEffect: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton .effect=${'pulse'}></ag-skeleton>
      <ag-skeleton .effect=${'pulse'} style="margin-top: 8px;"></ag-skeleton>
      <ag-skeleton .effect=${'pulse'} style="margin-top: 8px; width: 60%;"></ag-skeleton>
    </div>
  `,
};

// Sheen Effect
export const SheenEffect: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton .effect=${'sheen'}></ag-skeleton>
      <ag-skeleton .effect=${'sheen'} style="margin-top: 8px;"></ag-skeleton>
      <ag-skeleton .effect=${'sheen'} style="margin-top: 8px; width: 60%;"></ag-skeleton>
    </div>
  `,
};

// No Animation
export const NoAnimation: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton .effect=${'none'}></ag-skeleton>
      <ag-skeleton .effect=${'none'} style="margin-top: 8px;"></ag-skeleton>
      <ag-skeleton .effect=${'none'} style="margin-top: 8px; width: 60%;"></ag-skeleton>
    </div>
  `,
};

// User Profile Card Loading
export const UserProfileLoading: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px;">
      <ag-skeleton .variant=${'circular'} .width=${'60px'} .height=${'60px'}></ag-skeleton>
      <div style="flex: 1;">
        <ag-skeleton .width=${'40%'} .height=${'16px'}></ag-skeleton>
        <ag-skeleton .width=${'60%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton>
        <ag-skeleton .width=${'80%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton>
      </div>
    </div>
  `,
};

// Article Card Loading
export const ArticleCardLoading: Story = {
  render: () => html`
    <div style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px;">
      <ag-skeleton .variant=${'rectangular'} .width=${'100%'} .height=${'200px'}></ag-skeleton>
      <div style="padding: 16px;">
        <ag-skeleton .width=${'60%'} .height=${'20px'}></ag-skeleton>
        <ag-skeleton .width=${'100%'} .height=${'14px'} style="margin-top: 12px;"></ag-skeleton>
        <ag-skeleton .width=${'100%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton>
        <ag-skeleton .width=${'40%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton>
      </div>
    </div>
  `,
};

// List Loading
export const ListLoading: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      ${[1, 2, 3, 4, 5].map(() => html`
        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px;">
          <ag-skeleton .variant=${'circular'} .width=${'40px'} .height=${'40px'}></ag-skeleton>
          <div style="flex: 1;">
            <ag-skeleton .width=${'60%'} .height=${'16px'}></ag-skeleton>
            <ag-skeleton .width=${'40%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton>
          </div>
        </div>
      `)}
    </div>
  `,
};

// Table Loading
export const TableLoading: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      ${[1, 2, 3, 4].map(() => html`
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 12px; padding: 12px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm);">
          <ag-skeleton .height=${'16px'}></ag-skeleton>
          <ag-skeleton .height=${'16px'}></ag-skeleton>
          <ag-skeleton .height=${'16px'}></ag-skeleton>
        </div>
      `)}
    </div>
  `,
};

// Custom Dimensions
export const CustomDimensions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <ag-skeleton .width=${'100px'} .height=${'20px'}></ag-skeleton>
      <ag-skeleton .width=${'200px'} .height=${'30px'}></ag-skeleton>
      <ag-skeleton .width=${'300px'} .height=${'40px'}></ag-skeleton>
      <ag-skeleton .width=${'400px'} .height=${'50px'}></ag-skeleton>
    </div>
  `,
};

// Intensity Comparison
export const IntensityComparison: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin-bottom: 8px;">Light Intensity (default)</h4>
        <div style="width: 300px;">
          <ag-skeleton .intensity=${'light'}></ag-skeleton>
          <ag-skeleton .intensity=${'light'} style="margin-top: 8px;"></ag-skeleton>
          <ag-skeleton .intensity=${'light'} style="margin-top: 8px; width: 60%;"></ag-skeleton>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Medium Intensity</h4>
        <div style="width: 300px;">
          <ag-skeleton .intensity=${'medium'}></ag-skeleton>
          <ag-skeleton .intensity=${'medium'} style="margin-top: 8px;"></ag-skeleton>
          <ag-skeleton .intensity=${'medium'} style="margin-top: 8px; width: 60%;"></ag-skeleton>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Side by Side</h4>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1;">
            <p style="margin-bottom: 8px; font-size: 12px;">Light</p>
            <ag-skeleton .intensity=${'light'} .width=${'200px'} .height=${'100px'} .variant=${'rounded'}></ag-skeleton>
          </div>
          <div style="flex: 1;">
            <p style="margin-bottom: 8px; font-size: 12px;">Medium</p>
            <ag-skeleton .intensity=${'medium'} .width=${'200px'} .height=${'100px'} .variant=${'rounded'}></ag-skeleton>
          </div>
        </div>
      </div>
    </div>
  `,
};

// Dark Mode Test
export const DarkModeTest: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px;">Toggle dark mode in your browser to test:</p>
      <div style="display: flex; gap: 16px;">
        <div>
          <h4 style="margin-bottom: 8px;">Pulse Effect</h4>
          <ag-skeleton .effect=${'pulse'} .width=${'200px'}></ag-skeleton>
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Sheen Effect</h4>
          <ag-skeleton .effect=${'sheen'} .width=${'200px'}></ag-skeleton>
        </div>
      </div>
    </div>
  `,
};

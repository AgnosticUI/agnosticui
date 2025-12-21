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
    <ag-skeleton-loader
      .variant=${args.variant}
      .effect=${args.effect}
      .intensity=${args.intensity}
      .width=${args.width}
      .height=${args.height}
    ></ag-skeleton-loader>
  `,
};

// Text Skeleton (default)
export const Text: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton-loader></ag-skeleton-loader>
      <ag-skeleton-loader style="margin-top: 8px;"></ag-skeleton-loader>
      <ag-skeleton-loader style="margin-top: 8px; width: 60%;"></ag-skeleton-loader>
    </div>
  `,
};

// Circular Skeleton (for avatars)
export const Circular: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ag-skeleton-loader .variant=${'circular'} .width=${'40px'} .height=${'40px'}></ag-skeleton-loader>
      <ag-skeleton-loader .variant=${'circular'} .width=${'60px'} .height=${'60px'}></ag-skeleton-loader>
      <ag-skeleton-loader .variant=${'circular'} .width=${'80px'} .height=${'80px'}></ag-skeleton-loader>
    </div>
  `,
};

// Rectangular Skeleton
export const Rectangular: Story = {
  render: () => html`
    <ag-skeleton-loader .variant=${'rectangular'} .width=${'300px'} .height=${'200px'}></ag-skeleton-loader>
  `,
};

// Rounded Skeleton (for cards/images)
export const Rounded: Story = {
  render: () => html`
    <ag-skeleton-loader .variant=${'rounded'} .width=${'300px'} .height=${'200px'}></ag-skeleton-loader>
  `,
};

// Pulse Effect (default)
export const PulseEffect: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton-loader .effect=${'pulse'}></ag-skeleton-loader>
      <ag-skeleton-loader .effect=${'pulse'} style="margin-top: 8px;"></ag-skeleton-loader>
      <ag-skeleton-loader .effect=${'pulse'} style="margin-top: 8px; width: 60%;"></ag-skeleton-loader>
    </div>
  `,
};

// Sheen Effect
export const SheenEffect: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton-loader .effect=${'sheen'}></ag-skeleton-loader>
      <ag-skeleton-loader .effect=${'sheen'} style="margin-top: 8px;"></ag-skeleton-loader>
      <ag-skeleton-loader .effect=${'sheen'} style="margin-top: 8px; width: 60%;"></ag-skeleton-loader>
    </div>
  `,
};

// No Animation
export const NoAnimation: Story = {
  render: () => html`
    <div style="width: 300px;">
      <ag-skeleton-loader .effect=${'none'}></ag-skeleton-loader>
      <ag-skeleton-loader .effect=${'none'} style="margin-top: 8px;"></ag-skeleton-loader>
      <ag-skeleton-loader .effect=${'none'} style="margin-top: 8px; width: 60%;"></ag-skeleton-loader>
    </div>
  `,
};

// User Profile Card Loading
export const UserProfileLoading: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px;">
      <ag-skeleton-loader .variant=${'circular'} .width=${'60px'} .height=${'60px'}></ag-skeleton-loader>
      <div style="flex: 1;">
        <ag-skeleton-loader .width=${'40%'} .height=${'16px'}></ag-skeleton-loader>
        <ag-skeleton-loader .width=${'60%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton-loader>
        <ag-skeleton-loader .width=${'80%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton-loader>
      </div>
    </div>
  `,
};

// Article Card Loading
export const ArticleCardLoading: Story = {
  render: () => html`
    <div style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px;">
      <ag-skeleton-loader .variant=${'rectangular'} .width=${'100%'} .height=${'200px'}></ag-skeleton-loader>
      <div style="padding: 16px;">
        <ag-skeleton-loader .width=${'60%'} .height=${'20px'}></ag-skeleton-loader>
        <ag-skeleton-loader .width=${'100%'} .height=${'14px'} style="margin-top: 12px;"></ag-skeleton-loader>
        <ag-skeleton-loader .width=${'100%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton-loader>
        <ag-skeleton-loader .width=${'40%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton-loader>
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
          <ag-skeleton-loader .variant=${'circular'} .width=${'40px'} .height=${'40px'}></ag-skeleton-loader>
          <div style="flex: 1;">
            <ag-skeleton-loader .width=${'60%'} .height=${'16px'}></ag-skeleton-loader>
            <ag-skeleton-loader .width=${'40%'} .height=${'14px'} style="margin-top: 8px;"></ag-skeleton-loader>
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
          <ag-skeleton-loader .height=${'16px'}></ag-skeleton-loader>
          <ag-skeleton-loader .height=${'16px'}></ag-skeleton-loader>
          <ag-skeleton-loader .height=${'16px'}></ag-skeleton-loader>
        </div>
      `)}
    </div>
  `,
};

// Custom Dimensions
export const CustomDimensions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <ag-skeleton-loader .width=${'100px'} .height=${'20px'}></ag-skeleton-loader>
      <ag-skeleton-loader .width=${'200px'} .height=${'30px'}></ag-skeleton-loader>
      <ag-skeleton-loader .width=${'300px'} .height=${'40px'}></ag-skeleton-loader>
      <ag-skeleton-loader .width=${'400px'} .height=${'50px'}></ag-skeleton-loader>
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
          <ag-skeleton-loader .intensity=${'light'}></ag-skeleton-loader>
          <ag-skeleton-loader .intensity=${'light'} style="margin-top: 8px;"></ag-skeleton-loader>
          <ag-skeleton-loader .intensity=${'light'} style="margin-top: 8px; width: 60%;"></ag-skeleton-loader>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Medium Intensity</h4>
        <div style="width: 300px;">
          <ag-skeleton-loader .intensity=${'medium'}></ag-skeleton-loader>
          <ag-skeleton-loader .intensity=${'medium'} style="margin-top: 8px;"></ag-skeleton-loader>
          <ag-skeleton-loader .intensity=${'medium'} style="margin-top: 8px; width: 60%;"></ag-skeleton-loader>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Side by Side</h4>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1;">
            <p style="margin-bottom: 8px; font-size: 12px;">Light</p>
            <ag-skeleton-loader .intensity=${'light'} .width=${'200px'} .height=${'100px'} .variant=${'rounded'}></ag-skeleton-loader>
          </div>
          <div style="flex: 1;">
            <p style="margin-bottom: 8px; font-size: 12px;">Medium</p>
            <ag-skeleton-loader .intensity=${'medium'} .width=${'200px'} .height=${'100px'} .variant=${'rounded'}></ag-skeleton-loader>
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
          <ag-skeleton-loader .effect=${'pulse'} .width=${'200px'}></ag-skeleton-loader>
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Sheen Effect</h4>
          <ag-skeleton-loader .effect=${'sheen'} .width=${'200px'}></ag-skeleton-loader>
        </div>
      </div>
    </div>
  `,
};

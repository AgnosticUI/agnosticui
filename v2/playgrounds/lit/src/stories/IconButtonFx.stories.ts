import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import { createElement, Heart, Star, Settings, Trash2, Download, Bell } from 'lucide';
import 'agnosticui-core/icon';
import 'agnosticui-core/icon-button-fx';
import type { IconButtonFxProps } from 'agnosticui-core/icon-button-fx';

const meta: Meta<IconButtonFxProps> = {
  title: 'AgnosticUI Lit/IconButtonFx',
  component: 'ag-icon-button-fx',
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
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'monochrome'],
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
    fx: {
      control: 'select',
      options: ['', 'pulse', 'bounce', 'jelly', 'press-pop', 'grow', 'shrink', 'push', 'shake', 'wobble', 'pulse-wobble'],
      description: 'Animation effect',
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Animation speed',
    },
    fxEase: {
      control: 'select',
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring-sm', 'spring-md', 'spring-lg'],
      description: 'Animation easing function',
    },
    fxDisabled: {
      control: 'boolean',
      description: 'Disable animations',
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
    fx: 'pulse',
    fxSpeed: 'md',
    fxEase: 'ease',
    fxDisabled: false,
    onIconButtonClick: fn(),
    onIconButtonActivate: fn(),
  },
  parameters: {
    actions: {
      handles: ['icon-button-click', 'icon-button-activate'],
    },
  },
};

export default meta;
type Story = StoryObj<IconButtonFxProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    label: 'Heart',
    fx: 'pulse',
    variant: 'primary',
  },
  render: ({
    label,
    size,
    variant,
    type,
    disabled,
    pressed,
    loading,
    fx,
    fxSpeed,
    fxEase,
    fxDisabled,
    onIconButtonClick,
    onIconButtonActivate,
  }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button-fx
        .label=${label}
        .size=${size}
        .variant=${variant}
        .type=${type}
        .disabled=${disabled}
        .pressed=${pressed}
        .loading=${loading}
        .fx=${fx}
        .fxSpeed=${fxSpeed}
        .fxEase=${fxEase}
        .fxDisabled=${fxDisabled}
        @icon-button-click=${onIconButtonClick}
        @icon-button-activate=${onIconButtonActivate}
      >
        ${createElement(Heart)}
      </ag-icon-button-fx>
    </div>
  `,
};

// Effects showcase
export const AllEffects: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 2rem; font-size: 1.5rem; color: var(--ag-text-primary);">
        Icon Button FX Effects Showcase
      </h2>

      <!-- Pulse -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--ag-text-secondary);">Pulse</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-icon-button-fx fx="pulse" label="Primary Pulse" .variant=${'primary'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="pulse" label="Success Pulse" .variant=${'success'}>
            ${createElement(Star)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="pulse" label="Warning Pulse" .variant=${'warning'}>
            ${createElement(Bell)}
          </ag-icon-button-fx>
        </div>
      </div>

      <!-- Bounce -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--ag-text-secondary);">Bounce</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-icon-button-fx fx="bounce" label="Primary Bounce" .variant=${'primary'}>
            ${createElement(Download)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="bounce" label="Secondary Bounce" .variant=${'secondary'}>
            ${createElement(Download)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="bounce" label="Success Bounce" .variant=${'success'}>
            ${createElement(Download)}
          </ag-icon-button-fx>
        </div>
      </div>

      <!-- Wobble -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--ag-text-secondary);">Wobble</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-icon-button-fx fx="wobble" label="Primary Wobble" .variant=${'primary'}>
            ${createElement(Bell)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="wobble" label="Warning Wobble" .variant=${'warning'}>
            ${createElement(Bell)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="wobble" label="Danger Wobble" .variant=${'danger'}>
            ${createElement(Bell)}
          </ag-icon-button-fx>
        </div>
      </div>

      <!-- Shake -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--ag-text-secondary);">Shake</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-icon-button-fx fx="shake" label="Danger Shake" .variant=${'danger'}>
            ${createElement(Trash2)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="shake" label="Warning Shake" .variant=${'warning'}>
            ${createElement(Trash2)}
          </ag-icon-button-fx>
        </div>
      </div>

      <!-- Pulse-Wobble Sequential -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--ag-text-secondary);">Pulse → Wobble (Sequential)</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-icon-button-fx fx="pulse-wobble" label="Primary Pulse-Wobble" .variant=${'primary'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="pulse-wobble" label="Success Pulse-Wobble" .variant=${'success'}>
            ${createElement(Star)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="pulse-wobble" label="Danger Pulse-Wobble" .variant=${'danger'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
        </div>
      </div>

      <!-- Grow/Shrink -->
      <div style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--ag-text-secondary);">Grow / Shrink</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-icon-button-fx fx="grow" label="Grow" .variant=${'primary'}>
            ${createElement(Settings)}
          </ag-icon-button-fx>
          <ag-icon-button-fx fx="shrink" label="Shrink" .variant=${'secondary'}>
            ${createElement(Settings)}
          </ag-icon-button-fx>
        </div>
      </div>
    </div>
  `,
};

// Size variants with effects
export const SizesWithEffects: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 2rem; font-size: 1.5rem; color: var(--ag-text-primary);">
        Icon Button FX Sizes
      </h2>
      <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
        <ag-icon-button-fx fx="pulse" label="Extra Small" size="xs" .variant=${'primary'}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="pulse" label="Small" size="sm" .variant=${'primary'}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="pulse" label="Medium" size="md" .variant=${'primary'}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="pulse" label="Large" size="lg" .variant=${'primary'}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="pulse" label="Extra Large" size="xl" .variant=${'primary'}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
      </div>
    </div>
  `,
};

// Speed variants
export const SpeedVariants: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 2rem; font-size: 1.5rem; color: var(--ag-text-primary);">
        Animation Speed Variants
      </h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div style="text-align: center;">
          <ag-icon-button-fx fx="pulse" fx-speed="xs" label="Extra Fast" .variant=${'primary'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">Extra Fast (xs)</p>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx fx="pulse" fx-speed="sm" label="Fast" .variant=${'primary'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">Fast (sm)</p>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx fx="pulse" fx-speed="md" label="Medium" .variant=${'primary'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">Medium (md)</p>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx fx="pulse" fx-speed="lg" label="Slow" .variant=${'primary'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">Slow (lg)</p>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx fx="pulse" fx-speed="xl" label="Extra Slow" .variant=${'primary'}>
            ${createElement(Heart)}
          </ag-icon-button-fx>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">Extra Slow (xl)</p>
        </div>
      </div>
    </div>
  `,
};

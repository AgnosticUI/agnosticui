import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/progress-ring';
import { AgProgressRing, type AgProgressRingProps } from 'agnosticui-core/progress-ring';

const meta: Meta<AgProgressRingProps> = {
  title: 'AgnosticUI Lit/ProgressRing',
  component: 'ag-progress-ring',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant',
    },
    label: {
      control: 'text',
      description: 'Accessible label',
    },
    'no-animation': {
      control: 'boolean',
      description: 'Disable animation',
    },
  },
  args: {
    value: 0,
    size: 'medium',
    variant: 'primary',
    label: 'Progress',
    'no-animation': false,
  },
};

export default meta;
type Story = StoryObj<AgProgressRingProps>;

export const Default: Story = {
  args: {
    value: 0,
    label: 'Default progress ring',
  },
  render: (args) => html`
    <ag-progress-ring
      .value=${args.value}
      .size=${args.size}
      .variant=${args.variant}
      .label=${args.label}
      ?no-animation=${args['no-animation']}
    ></ag-progress-ring>
  `,
};

export const InProgress: Story = {
  args: {
    value: 65,
    label: 'Upload in progress',
  },
  render: (args) => html`
    <ag-progress-ring
      .value=${args.value}
      .size=${args.size}
      .variant=${args.variant}
      .label=${args.label}
      ?no-animation=${args['no-animation']}
    ></ag-progress-ring>
  `,
};

export const Complete: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: 'Upload complete',
  },
  render: (args) => html`
    <ag-progress-ring
      .value=${args.value}
      .size=${args.size}
      .variant=${args.variant}
      .label=${args.label}
      ?no-animation=${args['no-animation']}
    ></ag-progress-ring>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <ag-progress-ring size="small" .value=${75} label="Small"></ag-progress-ring>
      <ag-progress-ring size="medium" .value=${75} label="Medium"></ag-progress-ring>
      <ag-progress-ring size="large" .value=${75} label="Large"></ag-progress-ring>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      <div style="text-align: center;">
        <ag-progress-ring variant="primary" .value=${60} label="Primary"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</div>
      </div>
      <div style="text-align: center;">
        <ag-progress-ring variant="success" .value=${100} label="Success"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Success</div>
      </div>
      <div style="text-align: center;">
        <ag-progress-ring variant="warning" .value=${45} label="Warning"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</div>
      </div>
      <div style="text-align: center;">
        <ag-progress-ring variant="danger" .value=${30} label="Danger"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</div>
      </div>
      <div style="text-align: center;">
        <ag-progress-ring variant="info" .value=${80} label="Info"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Info</div>
      </div>
    </div>
  `,
};

export const CustomContent: Story = {
  args: {
    value: 75,
    variant: 'success',
    label: 'Custom content',
  },
  render: (args) => html`
    <ag-progress-ring
      .value=${args.value}
      .size=${args.size}
      .variant=${args.variant}
      .label=${args.label}
      ?no-animation=${args['no-animation']}
    >
      <span style="font-size: 0.75rem;">75/100</span>
    </ag-progress-ring>
  `,
};

export const WithIcon: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: 'Task complete',
  },
  render: (args) => html`
    <ag-progress-ring
      .value=${args.value}
      size="large"
      .variant=${args.variant}
      .label=${args.label}
      ?no-animation=${args['no-animation']}
    >
      <span style="font-size: 1.5rem;">✓</span>
    </ag-progress-ring>
  `,
};

export const NoAnimation: Story = {
  args: {
    value: 70,
    'no-animation': true,
    label: 'No animation',
  },
  render: (args) => html`
    <ag-progress-ring
      .value=${args.value}
      .size=${args.size}
      .variant=${args.variant}
      .label=${args.label}
      ?no-animation=${args['no-animation']}
    ></ag-progress-ring>
  `,
};

export const Animated: Story = {
  render: () => {
    let value = 0;
    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    el.value = value;
    el.label = 'Animated progress';
    
    const interval = setInterval(() => {
      value += 1;
      el.value = value;
      if (value >= 100) {
        clearInterval(interval);
      }
    }, 50);
    
    return el;
  },
};

export const MultipleRings: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 2rem; max-width: 600px;">
      <div style="text-align: center;">
        <ag-progress-ring .value=${25} variant="danger" label="Critical tasks"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Critical</div>
      </div>
      <div style="text-align: center;">
        <ag-progress-ring .value=${60} variant="warning" label="In progress tasks"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">In Progress</div>
      </div>
      <div style="text-align: center;">
        <ag-progress-ring .value=${85} variant="info" label="Review tasks"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Review</div>
      </div>
      <div style="text-align: center;">
        <ag-progress-ring .value=${100} variant="success" label="Completed tasks"></ag-progress-ring>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">Complete</div>
      </div>
    </div>
  `,
};

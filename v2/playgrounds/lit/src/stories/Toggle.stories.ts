import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/toggle';
import type { ToggleProps } from 'agnosticui-core/toggle';

const meta: Meta<ToggleProps> = {
  title: 'AgnosticUI Lit/Toggle',
  component: 'ag-toggle',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Required accessible name for the toggle',
    },
    checked: {
      control: 'boolean',
      description: 'Current checked state of the toggle',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Toggle size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger'],
      description: 'Visual variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    readonly: {
      control: 'boolean',
      description: 'Read-only state (visually interactive but does not change)',
    },
    labelledBy: {
      control: 'text',
      description: 'External element ID that labels this toggle',
    },
    describedBy: {
      control: 'text',
      description: 'External element ID that describes this toggle',
    },
    name: {
      control: 'text',
      description: 'Form integration - name attribute',
    },
    value: {
      control: 'text',
      description: 'Form integration - value when checked',
    },
  },
  args: {
    label: 'Toggle',
    checked: false,
    size: 'md',
    variant: 'default',
    disabled: false,
    readonly: false,
    onToggleChange: fn(),
  },
  parameters: {
    actions: {
      handles: ['toggle-change'],
    },
  },
};

export default meta;
type Story = StoryObj<ToggleProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    label: 'Default toggle',
    checked: false,
  },
  render: ({ label, checked, size, variant, disabled, readonly, labelledBy, describedBy, name, value, onToggleChange }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
        .readonly=${readonly}
        .labelledBy=${labelledBy}
        .describedBy=${describedBy}
        .name=${name}
        .value=${value}
        @toggle-change=${(e: CustomEvent) => onToggleChange(e.detail)}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// Checked state
export const Checked: Story = {
  args: {
    label: 'Checked toggle',
    checked: true,
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// Unchecked state
export const Unchecked: Story = {
  args: {
    label: 'Unchecked toggle',
    checked: false,
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: 'Extra small toggle',
    size: 'xs',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeSM: Story = {
  args: {
    label: 'Small toggle',
    size: 'sm',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeMD: Story = {
  args: {
    label: 'Medium toggle',
    size: 'md',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeLG: Story = {
  args: {
    label: 'Large toggle',
    size: 'lg',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeXL: Story = {
  args: {
    label: 'Extra large toggle',
    size: 'xl',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// Variant stories
export const VariantDefault: Story = {
  args: {
    label: 'Default variant',
    checked: true,
    variant: 'default',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const VariantSuccess: Story = {
  args: {
    label: 'Success variant',
    checked: true,
    variant: 'success',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const VariantWarning: Story = {
  args: {
    label: 'Warning variant',
    checked: true,
    variant: 'warning',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const VariantDanger: Story = {
  args: {
    label: 'Danger variant',
    checked: true,
    variant: 'danger',
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// State stories
export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
  render: ({ label, checked, size, variant, disabled }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked toggle',
    checked: true,
    disabled: true,
  },
  render: ({ label, checked, size, variant, disabled }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only toggle',
    checked: true,
    readonly: true,
  },
  render: ({ label, checked, size, variant, readonly }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .readonly=${readonly}
      ></ag-toggle>
      <span>${label} (read-only)</span>
    </div>
  `,
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: 'Toggle to test events',
  },
  render: ({ label, size, variant, onToggleChange }) => html`
    <div style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;">
      <p style="margin: 0;">Click the toggle or use Space/Enter to test events</p>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle
          .label=${label}
          .size=${size}
          .variant=${variant}
          @toggle-change=${(e: CustomEvent) => onToggleChange(e.detail)}
        ></ag-toggle>
        <span>${label}</span>
      </div>
      <p style="font-size: 0.875rem; color: #6b7280; margin: 0;">
        Check the Actions panel below for event logs (shows checked state)
      </p>
    </div>
  `,
};

// Form integration
export const FormIntegration: Story = {
  args: {
    label: 'Newsletter subscription',
    name: 'newsletter',
    value: 'subscribed',
  },
  render: ({ label, name, value }) => html`
    <form @submit=${(e: Event) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const toggle = (e.target as HTMLFormElement).querySelector('ag-toggle');
      console.log('Form data:', {
        name: name,
        value: value,
        checked: toggle?.checked
      });
      alert(`Form submitted! ${name}: ${toggle?.checked ? value : 'not subscribed'}`);
    }}>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 50px;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <ag-toggle
            .label=${label}
            .name=${name}
            .value=${value}
          ></ag-toggle>
          <span>${label}</span>
        </div>
        <button type="submit">Submit Form</button>
      </div>
    </form>
  `,
};

// Accessibility story with external label
export const LabelledBy: Story = {
  args: {
    labelledBy: 'toggle-label',
    describedBy: 'toggle-description',
  },
  render: ({ labelledBy, describedBy, size, variant }) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 50px;">
      <h3 id="${labelledBy}" style="margin: 0;">Enable notifications</h3>
      <p id="${describedBy}" style="margin: 0; font-size: 0.875rem; color: #6b7280;">
        You will receive notifications when new messages arrive
      </p>
      <ag-toggle
        .labelledBy=${labelledBy}
        .describedBy=${describedBy}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
    </div>
  `,
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 50px;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Extra small" size="xs" checked></ag-toggle>
        <span>Extra small (xs)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Small" size="sm" checked></ag-toggle>
        <span>Small (sm)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Medium" size="md" checked></ag-toggle>
        <span>Medium (md)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Large" size="lg" checked></ag-toggle>
        <span>Large (lg)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Extra large" size="xl" checked></ag-toggle>
        <span>Extra large (xl)</span>
      </div>
    </div>
  `,
};

// All variants comparison
export const CSSPartsCustomization: Story = {
  args: {
    label: 'Customized Toggle',
    checked: true,
  },
  render: ({ label, checked, size, variant, onToggleChange }) => html`
    <style>
      .custom-toggle::part(ag-toggle-button) {
        border: 2px solid #bada55;
        border-radius: 9999px;
      }
      .custom-toggle::part(ag-toggle-track) {
        background-color: #f0f0f0;
      }
      .custom-toggle::part(ag-toggle-handle) {
        background-color: #bada55;
        border: 2px solid #fff;
        box-shadow: 0 0 5px #bada55;
      }
      .custom-toggle[checked]::part(ag-toggle-track) {
        background-color: #bada55;
      }
      .custom-toggle[checked]::part(ag-toggle-handle) {
        background-color: #fff;
      }
    </style>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        class="custom-toggle"
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        @toggle-change=${(e: CustomEvent) => onToggleChange(e.detail)}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

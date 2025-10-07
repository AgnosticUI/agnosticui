import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/button';
import type { AgButton } from 'agnosticui-core/button';

const meta: Meta<AgButton> = {
  title: 'Components/Button',
  component: 'ag-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger'],
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
    grouped: {
      control: 'boolean',
      description: 'For buttons in a group, removes inner radii',
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
    toggle: {
      control: 'boolean',
      description: 'Enables toggle mode with pressed state',
    },
    pressed: {
      control: 'boolean',
      description: 'Pressed state for toggle buttons',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    ariaDescribedby: {
      control: 'text',
      description: 'ARIA described-by for accessibility',
    },
  },
  parameters: {
    actions: {
      handles: ['toggle', 'focus', 'blur'],
    },
  },
};

export default meta;

type Story = StoryObj<AgButton>;

// Default story with all controls
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    shape: '',
    bordered: false,
    ghost: false,
    link: false,
    grouped: false,
    type: 'button',
    disabled: false,
    loading: false,
    toggle: false,
    pressed: false,
    ariaLabel: '',
    ariaDescribedby: '',
  },
  render: ({ variant, size, shape, bordered, ghost, link, grouped, type, disabled, loading, toggle, pressed, ariaLabel, ariaDescribedby }) => html`
    <ag-button
      .variant=${variant}
      .size=${size}
      .shape=${shape}
      .bordered=${bordered}
      .ghost=${ghost}
      .link=${link}
      .grouped=${grouped}
      .type=${type}
      .disabled=${disabled}
      .loading=${loading}
      .toggle=${toggle}
      .pressed=${pressed}
      .ariaLabel=${ariaLabel}
      .ariaDescribedby=${ariaDescribedby}
      @toggle=${(e: CustomEvent) => console.log('Toggle:', e.detail)}
      @focus=${() => console.log('Focus')}
      @blur=${() => console.log('Blur')}
    >
      Controlled Button
    </ag-button>
  `,
};

// Variant Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: ({ variant }) => html`<ag-button .variant=${variant}>Primary Button</ag-button>`,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: ({ variant }) => html`<ag-button .variant=${variant}>Secondary Button</ag-button>`,
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: ({ variant }) => html`<ag-button .variant=${variant}>Success Button</ag-button>`,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: ({ variant }) => html`<ag-button .variant=${variant}>Warning Button</ag-button>`,
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: ({ variant }) => html`<ag-button .variant=${variant}>Danger Button</ag-button>`,
};

// Size Stories
export const ExtraSmall: Story = {
  args: {
    variant: 'primary',
    size: 'x-sm',
  },
  render: ({ variant, size }) => html`<ag-button .variant=${variant} .size=${size}>X-Small Button</ag-button>`,
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
  },
  render: ({ variant, size }) => html`<ag-button .variant=${variant} .size=${size}>Small Button</ag-button>`,
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: ({ variant, size }) => html`<ag-button .variant=${variant} .size=${size}>Medium Button</ag-button>`,
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
  },
  render: ({ variant, size }) => html`<ag-button .variant=${variant} .size=${size}>Large Button</ag-button>`,
};

export const ExtraLarge: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
  },
  render: ({ variant, size }) => html`<ag-button .variant=${variant} .size=${size}>Extra Large Button</ag-button>`,
};

// Shape Stories
export const Capsule: Story = {
  args: {
    variant: 'primary',
    shape: 'capsule',
  },
  render: ({ variant, shape }) => html`<ag-button .variant=${variant} .shape=${shape}>Capsule Button</ag-button>`,
};

export const Rounded: Story = {
  args: {
    variant: 'primary',
    shape: 'rounded',
  },
  render: ({ variant, shape }) => html`<ag-button .variant=${variant} .shape=${shape}>Rounded Button</ag-button>`,
};

export const Circle: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
  },
  render: ({ variant, shape }) => html`<ag-button .variant=${variant} .shape=${shape}>★</ag-button>`,
};

export const Square: Story = {
  args: {
    variant: 'primary',
    shape: 'square',
  },
  render: ({ variant, shape }) => html`<ag-button .variant=${variant} .shape=${shape}>★</ag-button>`,
};

export const RoundedSquare: Story = {
  args: {
    variant: 'primary',
    shape: 'rounded-square',
  },
  render: ({ variant, shape }) => html`<ag-button .variant=${variant} .shape=${shape}>★</ag-button>`,
};

// Style Stories
export const BorderedPrimary: Story = {
  args: {
    variant: 'primary',
    bordered: true,
  },
  render: ({ variant, bordered }) => html`<ag-button .variant=${variant} .bordered=${bordered}>Bordered Primary</ag-button>`,
};

export const BorderedSecondary: Story = {
  args: {
    variant: 'secondary',
    bordered: true,
  },
  render: ({ variant, bordered }) => html`<ag-button .variant=${variant} .bordered=${bordered}>Bordered Secondary</ag-button>`,
};

export const GhostPrimary: Story = {
  args: {
    variant: 'primary',
    ghost: true,
  },
  render: ({ variant, ghost }) => html`<ag-button .variant=${variant} .ghost=${ghost}>Ghost Primary</ag-button>`,
};

export const GhostSuccess: Story = {
  args: {
    variant: 'success',
    ghost: true,
  },
  render: ({ variant, ghost }) => html`<ag-button .variant=${variant} .ghost=${ghost}>Ghost Success</ag-button>`,
};

export const LinkPrimary: Story = {
  args: {
    variant: 'primary',
    link: true,
  },
  render: ({ variant, link }) => html`<ag-button .variant=${variant} .link=${link}>Link Primary</ag-button>`,
};

export const Grouped: Story = {
  args: {
    variant: 'primary',
    grouped: true,
  },
  render: ({ variant, grouped }) => html`
    <div style="display: flex;">
      <ag-button .variant=${variant} .grouped=${grouped}>First</ag-button>
      <ag-button .variant=${variant} .grouped=${grouped}>Middle</ag-button>
      <ag-button .variant=${variant} .grouped=${grouped}>Last</ag-button>
    </div>
  `,
};

// State Stories
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: ({ variant, disabled }) => html`<ag-button .variant=${variant} .disabled=${disabled}>Disabled Button</ag-button>`,
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
  },
  render: ({ variant, loading }) => html`<ag-button .variant=${variant} .loading=${loading}>Loading Button</ag-button>`,
};

export const ToggleOn: Story = {
  args: {
    variant: 'primary',
    toggle: true,
    pressed: true,
  },
  render: ({ variant, toggle, pressed }) => html`
    <ag-button
      .variant=${variant}
      .toggle=${toggle}
      .pressed=${pressed}
      @toggle=${(e: CustomEvent) => console.log('Toggle:', e.detail)}
    >
      Toggle On
    </ag-button>
  `,
};

export const ToggleOff: Story = {
  args: {
    variant: 'primary',
    toggle: true,
    pressed: false,
  },
  render: ({ variant, toggle, pressed }) => html`
    <ag-button
      .variant=${variant}
      .toggle=${toggle}
      .pressed=${pressed}
      @toggle=${(e: CustomEvent) => console.log('Toggle:', e.detail)}
    >
      Toggle Off
    </ag-button>
  `,
};

// Type Stories
export const FormButton: Story = {
  args: {
    variant: 'primary',
    type: 'button',
  },
  render: ({ variant, type }) => html`
    <form @submit=${(e: Event) => { e.preventDefault(); console.log('Form submitted'); }}>
      <ag-button .variant=${variant} .type=${type}>Button Type</ag-button>
    </form>
  `,
};

export const FormSubmit: Story = {
  args: {
    variant: 'primary',
    type: 'submit',
  },
  render: ({ variant, type }) => html`
    <form @submit=${(e: Event) => { e.preventDefault(); console.log('Form submitted'); }}>
      <ag-button .variant=${variant} .type=${type}>Submit Type</ag-button>
    </form>
  `,
};

export const FormReset: Story = {
  args: {
    variant: 'primary',
    type: 'reset',
  },
  render: ({ variant, type }) => html`
    <form @reset=${() => console.log('Form reset')}>
      <input type="text" value="Test" />
      <ag-button .variant=${variant} .type=${type}>Reset Type</ag-button>
    </form>
  `,
};

// Accessibility Story
export const Accessible: Story = {
  args: {
    variant: 'primary',
    ariaLabel: 'Custom button label',
    ariaDescribedby: 'description-id',
  },
  render: ({ variant, ariaLabel, ariaDescribedby }) => html`
    <div>
      <p id="description-id">This button performs an action</p>
      <ag-button .variant=${variant} .ariaLabel=${ariaLabel} .ariaDescribedby=${ariaDescribedby}>
        Accessible Button
      </ag-button>
    </div>
  `,
};

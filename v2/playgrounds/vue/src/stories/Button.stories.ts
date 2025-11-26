import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'AgnosticUI Vue/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type for form behavior',
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Visual style of the button',
    },
    label: {
      control: 'text',
      description: 'The label for button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state and disables interaction',
    },
    toggle: {
      control: 'boolean',
      description: 'Enables toggle mode with pressed state',
    },
    pressed: {
      control: 'boolean',
      description: 'Sets the pressed state for toggle buttons',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    shape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
      description: 'Shape variant of the button',
    },
    bordered: {
      control: 'boolean',
      description: 'Applies bordered style with transparent background',
    },
    ghost: {
      control: 'boolean',
      description: 'Applies ghost style with minimal padding',
    },
    link: {
      control: 'boolean',
      description: 'Applies link style with underline',
    },
    grouped: {
      control: 'boolean',
      description: 'Styles for buttons in a group',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color (not supported by VueButton, included for compatibility)',
    },
    onClick: {
      action: 'clicked',
      description: 'Emitted when the button is clicked',
    },
    onToggle: {
      action: 'toggled',
      description: 'Emitted when the toggle state changes',
    },
  },
  args: {
    label: 'Button',
    type: 'button',
    variant: '',
    size: 'medium',
    disabled: false,
    loading: false,
    toggle: false,
    pressed: false,
    shape: '',
    bordered: false,
    ghost: false,
    link: false,
    grouped: false,
    onClick: fn(),
    onToggle: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    loading: true,
  },
};

export const Toggle: Story = {
  args: {
    label: 'Toggle Button',
    toggle: true,
    pressed: false,
  },
};

export const ButtonType: Story = {
  args: {
    label: 'Button Type',
    type: 'button',
  },
};

export const SubmitType: Story = {
  args: {
    label: 'Submit Type',
    type: 'submit',
  },
};

export const ResetType: Story = {
  args: {
    label: 'Reset Type',
    type: 'reset',
  },
};

export const Accessible: Story = {
  args: {
    label: 'Accessible Button',
    ariaLabel: 'Accessible button example',
  },
};

export const Capsule: Story = {
  args: {
    label: 'Capsule Button',
    shape: 'capsule',
  },
};

export const Rounded: Story = {
  args: {
    label: 'R',
    shape: 'rounded',
  },
};

export const Circle: Story = {
  args: {
    label: 'C',
    shape: 'circle',
  },
};

export const Square: Story = {
  args: {
    label: 'S',
    shape: 'square',
  },
};

export const RoundedSquare: Story = {
  args: {
    label: 'RS',
    shape: 'rounded-square',
  },
};

export const Bordered: Story = {
  args: {
    label: 'Bordered Button',
    bordered: true,
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    ghost: true,
  },
};

export const Link: Story = {
  args: {
    label: 'Link Button',
    link: true,
  },
};

export const Grouped: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex;">
        <Button v-bind="args" grouped label="First" />
        <Button v-bind="args" grouped label="Middle" />
        <Button v-bind="args" grouped label="Last" />
      </div>
    `,
  }),
  args: {
    label: 'Grouped Button', // Fallback label to satisfy TypeScript
    grouped: true,
  },
};
export const GroupedPrimary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex;">
        <Button v-bind="args" grouped label="First" />
        <Button v-bind="args" grouped label="Middle" />
        <Button v-bind="args" grouped label="Last" />
      </div>
    `,
  }),
  args: {
    label: 'Grouped Button', // Fallback label to satisfy TypeScript
    variant: 'primary',
    grouped: true,
  },
};

// CSS Parts Customization Story
export const Customization: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      // Inject styles dynamically
      const styleId = 'custom-button-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .custom-button::part(ag-button) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 50px;
            padding: 1rem 2rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            transition: all 0.3s ease;
          }
          .custom-button::part(ag-button):hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
          }
        `;
        document.head.appendChild(style);
      }
      return { args };
    },
    template: `
      <Button class="custom-button" v-bind="args" label="Customized Button" />
    `,
  }),
  args: {
    variant: 'primary',
    size: 'large',
  },
};

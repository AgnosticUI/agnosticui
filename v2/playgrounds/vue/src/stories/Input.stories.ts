import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueInput } from 'agnosticui-core/input/vue';
import type { VueInputProps } from 'agnosticui-core/input/vue';

const meta = {
  title: 'AgnosticUI/Input',
  component: VueInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    labelHidden: {
      control: 'boolean',
      description: 'Visually hides the label (still accessible to screen readers)',
    },
    noLabel: {
      control: 'boolean',
      description: 'Removes the label entirely',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    labelledBy: {
      control: 'text',
      description: 'ARIA labelledby for accessibility',
    },
    capsule: {
      control: false,
      description: 'Capsule variant (not used in Vue, use isRounded instead)',
    },
    rounded: {
      control: false,
      description: 'Rounded variant (not used in Vue, use isRounded instead)',
    },
    underlined: {
      control: false,
      description: 'Underlined variant (not used in Vue, use isUnderlined instead)',
    },
    underlinedWithBackground: {
      control: false,
      description: 'Underlined with background variant (not used in Vue, use isUnderlinedWithBackground instead)',
    },
    inline: {
      control: false,
      description: 'Inline variant (not used in Vue, use isInline instead)',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'textarea'],
      description: 'Type of input field',
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    rows: {
      control: 'number',
      description: 'Number of rows for textarea',
    },
    cols: {
      control: 'number',
      description: 'Number of columns for textarea',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the input',
    },
    isRounded: {
      control: 'boolean',
      description: 'Rounded corners styling',
    },
    isUnderlined: {
      control: 'boolean',
      description: 'Underlined styling without background',
    },
    isUnderlinedWithBackground: {
      control: 'boolean',
      description: 'Underlined styling with background',
    },
    isInline: {
      control: 'boolean',
      description: 'Inline display mode',
    },
    hasLeftAddon: {
      control: 'boolean',
      description: 'Enables left addon slot',
    },
    hasRightAddon: {
      control: 'boolean',
      description: 'Enables right addon slot',
    },
    required: {
      control: 'boolean',
      description: 'Makes the input required',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the input read-only',
    },
    invalid: {
      control: 'boolean',
      description: 'Marks the input as invalid',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    helpText: {
      control: 'text',
      description: 'Help text to display',
    },
  },
  args: {
    label: '',
    labelHidden: false,
    noLabel: false,
    type: 'text',
    value: '',
    placeholder: '',
    rows: 4,
    cols: 50,
    size: 'default',
    isRounded: false,
    isUnderlined: false,
    isUnderlinedWithBackground: false,
    isInline: false,
    hasLeftAddon: false,
    hasRightAddon: false,
    required: false,
    disabled: false,
    readonly: false,
    invalid: false,
    errorMessage: '',
    helpText: '',
  },
} satisfies Meta<typeof VueInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    helpText: 'We will never share your email with anyone else.',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    type: 'text',
    required: true,
    helpText: 'This field must be filled out',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    value: 'invalid-email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    type: 'text',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    type: 'text',
    value: 'This value is read-only',
    readonly: true,
    helpText: 'This field cannot be edited',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small sized input',
    type: 'text',
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large sized input',
    type: 'text',
    size: 'large',
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded Input',
    placeholder: 'Rounded corners',
    type: 'text',
    isRounded: true,
  },
};

export const Underlined: Story = {
  args: {
    label: 'Underlined Input',
    placeholder: 'Underlined style',
    type: 'text',
    isUnderlined: true,
  },
};

export const UnderlinedWithBackground: Story = {
  args: {
    label: 'Underlined with Background',
    placeholder: 'Underlined with background',
    type: 'text',
    isUnderlinedWithBackground: true,
  },
};

export const HiddenLabel: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    type: 'search',
    labelHidden: true,
    helpText: 'The label is visually hidden but still accessible to screen readers',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helpText: 'Password must be at least 8 characters',
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
  },
};

export const Telephone: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+1 (555) 000-0000',
    type: 'tel',
  },
};

export const URL: Story = {
  args: {
    label: 'Website',
    placeholder: 'https://example.com',
    type: 'url',
  },
};

export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for something...',
    type: 'search',
    isRounded: true,
  },
};

export const Textarea: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments...',
    type: 'textarea',
    rows: 6,
    helpText: 'Please provide detailed feedback',
  },
};

export const TextareaInvalid: Story = {
  args: {
    label: 'Message',
    placeholder: 'Your message here...',
    type: 'textarea',
    rows: 4,
    value: 'Too short',
    invalid: true,
    errorMessage: 'Message must be at least 20 characters long',
  },
};

export const Inline: Story = {
  render: (args: VueInputProps) => ({
    components: { VueInput },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <VueInput
          label="Name"
          placeholder="John Doe"
          type="text"
          :is-inline="true"
        />
        <VueInput
          label="Email"
          placeholder="john@example.com"
          type="email"
          :is-inline="true"
        />
      </div>
    `,
  }),
};

export const ComplexForm: Story = {
  render: (args: VueInputProps) => ({
    components: { VueInput },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
        <h3 style="margin-top: 0;">Registration Form</h3>

        <VueInput
          label="Full Name"
          placeholder="John Doe"
          type="text"
          :required="true"
        />

        <VueInput
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          :required="true"
          help-text="We'll send you a confirmation email"
        />

        <VueInput
          label="Password"
          placeholder="At least 8 characters"
          type="password"
          :required="true"
          help-text="Must include uppercase, lowercase, and numbers"
        />

        <VueInput
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          type="tel"
        />

        <VueInput
          label="Bio"
          placeholder="Tell us about yourself..."
          type="textarea"
          :rows="4"
          help-text="Optional: Share a brief description"
        />
      </div>
    `,
  }),
};

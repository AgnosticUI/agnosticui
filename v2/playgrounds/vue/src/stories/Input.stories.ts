import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VueInput from 'agnosticui-core/input/vue';
import type { VueInputProps } from 'agnosticui-core/input/vue';

const meta = {
  title: 'AgnosticUI Vue/Input',
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

// CSS Parts Customization
export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueInput },
    template: `
      <style scoped>
        /* Modern gradient input style */
        .custom-gradient-input::part(ag-input) {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .custom-gradient-input::part(ag-input):focus {
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          transform: translateY(-1px);
        }

        .custom-gradient-input::part(ag-input-label) {
          font-weight: 700;
          color: #667eea;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        /* Neumorphic style */
        .custom-neumorphic-input::part(ag-input) {
          background: #e0e5ec;
          border: none;
          border-radius: 16px;
          padding: 0.875rem 1.25rem;
          box-shadow:
            6px 6px 12px rgba(163, 177, 198, 0.6),
            -6px -6px 12px rgba(255, 255, 255, 0.9);
          transition: box-shadow 0.3s ease;
        }

        .custom-neumorphic-input::part(ag-input):focus {
          box-shadow:
            inset 3px 3px 6px rgba(163, 177, 198, 0.6),
            inset -3px -3px 6px rgba(255, 255, 255, 0.9);
        }

        .custom-neumorphic-input::part(ag-input-label) {
          font-weight: 600;
          color: #6b7280;
        }

        /* Glassmorphism style */
        .custom-glass-input {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          padding: 2rem;
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .custom-glass-input::part(ag-input) {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          backdrop-filter: blur(10px);
          color: #1f2937;
          transition: all 0.3s ease;
        }

        .custom-glass-input::part(ag-input)::placeholder {
          color: rgba(31, 41, 55, 0.5);
        }

        .custom-glass-input::part(ag-input):focus {
          background: rgba(255, 255, 255, 0.4);
          border-color: rgba(102, 126, 234, 0.6);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
        }

        .custom-glass-input::part(ag-input-label) {
          font-weight: 600;
          color: #4b5563;
        }

        /* Material Design-inspired */
        .custom-material-input::part(ag-input) {
          border: none;
          border-bottom: 2px solid #e5e7eb;
          border-radius: 0;
          padding: 0.5rem 0;
          background: transparent;
          transition: border-color 0.2s ease;
        }

        .custom-material-input::part(ag-input):focus {
          border-bottom-color: #667eea;
          outline: none;
        }

        .custom-material-input::part(ag-input-label) {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        /* Error state customization */
        .custom-error-input::part(ag-input-error) {
          color: #dc2626;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 0.5rem;
          background: #fee2e2;
          border-left: 3px solid #dc2626;
          border-radius: 4px;
          margin-top: 0.5rem;
        }

        .custom-error-input::part(ag-input) {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .custom-error-input::part(ag-input):focus {
          outline-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        /* Textarea customization */
        .custom-textarea::part(ag-textarea) {
          border: 2px dashed #9ca3af;
          border-radius: 12px;
          background: #f9fafb;
          padding: 1rem;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          transition: all 0.3s ease;
        }

        .custom-textarea::part(ag-textarea):focus {
          border-style: solid;
          border-color: #667eea;
          background: white;
        }

        .custom-textarea::part(ag-input-label) {
          font-weight: 700;
          color: #374151;
        }
      </style>

      <div style="padding: 50px; max-width: 800px;">
        <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
        <p style="margin-bottom: 2rem; color: #6b7280;">
          Input can be customized using CSS Shadow Parts:
          <code>::part(ag-input)</code>,
          <code>::part(ag-textarea)</code>,
          <code>::part(ag-input-label)</code>,
          <code>::part(ag-input-error)</code>,
          <code>::part(ag-input-help)</code>
        </p>

        <div style="display: flex; flex-direction: column; gap: 2.5rem;">
          <div>
            <h4>Modern Gradient Border</h4>
            <VueInput
              class="custom-gradient-input"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <h4>Neumorphic Design</h4>
            <VueInput
              class="custom-neumorphic-input"
              label="Username"
              type="text"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <h4>Glassmorphism Effect</h4>
            <VueInput
              class="custom-glass-input"
              label="Password"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div>
            <h4>Material Design Style</h4>
            <VueInput
              class="custom-material-input"
              label="Full Name"
              type="text"
              placeholder="John Doe"
            />
          </div>

          <div>
            <h4>Custom Error Styling</h4>
            <VueInput
              class="custom-error-input"
              label="Email"
              type="email"
              value="invalid-email"
              :invalid="true"
              error-message="Please enter a valid email address"
            />
          </div>

          <div>
            <h4>Styled Textarea</h4>
            <VueInput
              class="custom-textarea"
              label="Code Snippet"
              type="textarea"
              :rows="6"
              placeholder="Paste your code here..."
              help-text="Monospace font with dashed border"
            />
          </div>
        </div>
      </div>
    `,
  }),
};

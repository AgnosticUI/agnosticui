import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactInput } from 'agnosticui-core/react';
import { action } from 'storybook/actions';
import type { ReactInputProps } from 'agnosticui-core/input/react';

const meta: Meta<ReactInputProps> = {
  title: 'AgnosticUI React/Input',
  component: ReactInput,
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
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
    id: {
      control: 'text',
      description: 'Custom ID for the input element',
    },
    children: {
      control: false,
      description: 'Child elements (not typically used for Input)',
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
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the input',
    },
    capsule: {
      control: 'boolean',
      description: 'Full rounded (pill-shaped) styling',
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded corners styling',
    },
    underlined: {
      control: 'boolean',
      description: 'Underlined styling without background',
    },
    underlinedWithBackground: {
      control: 'boolean',
      description: 'Underlined styling with background',
    },
    inline: {
      control: 'boolean',
      description: 'Inline display mode',
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
    hasLeftAddon: {
      control: 'boolean',
      description: 'Enables left addon slot',
    },
    hasRightAddon: {
      control: 'boolean',
      description: 'Enables right addon slot',
    },
    rows: {
      control: 'number',
      description: 'Number of rows for textarea',
    },
    cols: {
      control: 'number',
      description: 'Number of columns for textarea',
    },
    onChange: {
      action: 'change',
      description: 'Emitted when input value changes',
    },
    onInput: {
      action: 'input',
      description: 'Emitted on input',
    },
    onFocus: {
      action: 'focus',
      description: 'Emitted when input is focused',
    },
    onBlur: {
      action: 'blur',
      description: 'Emitted when input loses focus',
    },
  },
  args: {
    onChange: fn(),
    onInput: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  parameters: {
    actions: {
      handles: ['input', 'change', 'focus', 'blur'],
    },
    controls: {
      hideNoControlsWarning: false,
    },
    docs: {
      source: {
        state: 'open',
      },
    },
  },
} satisfies Meta<ReactInputProps>;

type Story = StoryObj<typeof meta>;

export default meta;

// Default input
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
  ),
};

// Input with help text
export const WithHelpText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    helpText: 'We will never share your email with anyone else.',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Required input
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    type: 'text',
    required: true,
    helpText: 'This field must be filled out',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Invalid input with error message
export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    value: 'invalid-email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Disabled input
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    type: 'text',
    value: 'Cannot edit this',
    disabled: true,
  },
  render: (args) => (
    <ReactInput {...args} />
  ),
};

// Read-only input
export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    type: 'text',
    value: 'This value is read-only',
    readonly: true,
    helpText: 'This field cannot be edited',
  },
  render: (args) => (
    <ReactInput {...args} />
  ),
};

// Small size
export const SmallSize: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small sized input',
    type: 'text',
    size: 'small',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Large size
export const LargeSize: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large sized input',
    type: 'text',
    size: 'large',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Rounded variant
export const Rounded: Story = {
  args: {
    label: 'Rounded Input',
    placeholder: 'Rounded corners',
    type: 'text',
    rounded: true,
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Capsule variant
export const Capsule: Story = {
  args: {
    label: 'Capsule Input',
    placeholder: 'Fully rounded (pill shape)',
    type: 'text',
    capsule: true,
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Underlined variant
export const Underlined: Story = {
  args: {
    label: 'Underlined Input',
    placeholder: 'Underlined style',
    type: 'text',
    underlined: true,
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Underlined with background
export const UnderlinedWithBackground: Story = {
  args: {
    label: 'Underlined with Background',
    placeholder: 'Underlined with background',
    type: 'text',
    underlinedWithBackground: true,
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Hidden label (still accessible)
export const HiddenLabel: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    type: 'search',
    labelHidden: true,
    helpText: 'The label is visually hidden but still accessible to screen readers',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Password input
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helpText: 'Password must be at least 8 characters',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Number input
export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Telephone input
export const Telephone: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+1 (555) 000-0000',
    type: 'tel',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// URL input
export const URL: Story = {
  args: {
    label: 'Website',
    placeholder: 'https://example.com',
    type: 'url',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Search input
export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for something...',
    type: 'search',
    rounded: true,
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Textarea
export const Textarea: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments...',
    type: 'textarea',
    rows: 6,
    helpText: 'Please provide detailed feedback',
  },
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Textarea with error
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
  render: (args) => (
    <ReactInput
      {...args}
      onChange={action('change')}
      onInput={action('input')}
    />
  ),
};

// Inline input
export const Inline: Story = {
  args: {
    label: 'Name',
    placeholder: 'John Doe',
    type: 'text',
    inline: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <ReactInput
        {...args}
        onChange={action('change')}
        onInput={action('input')}
      />
      <ReactInput
        label="Email"
        placeholder="john@example.com"
        type="email"
        inline
        onChange={action('change')}
        onInput={action('input')}
      />
    </div>
  ),
};

// Complex form example
export const ComplexForm: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h3 style={{ marginTop: 0 }}>Registration Form</h3>

      <ReactInput
        label="Full Name"
        placeholder="John Doe"
        type="text"
        required
        onChange={action('change')}
        onInput={action('input')}
      />

      <ReactInput
        label="Email Address"
        placeholder="you@example.com"
        type="email"
        required
        helpText="We'll send you a confirmation email"
        onChange={action('change')}
        onInput={action('input')}
      />

      <ReactInput
        label="Password"
        placeholder="At least 8 characters"
        type="password"
        required
        helpText="Must include uppercase, lowercase, and numbers"
        onChange={action('change')}
        onInput={action('input')}
      />

      <ReactInput
        label="Phone Number"
        placeholder="+1 (555) 000-0000"
        type="tel"
        onChange={action('change')}
        onInput={action('input')}
      />

      <ReactInput
        label="Bio"
        placeholder="Tell us about yourself..."
        type="textarea"
        rows={4}
        helpText="Optional: Share a brief description"
        onChange={action('change')}
        onInput={action('input')}
      />
    </div>
  ),
};

// CSS Parts Customization
export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
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
      `}</style>

      <div style={{ padding: '50px', maxWidth: '800px' }}>
        <h3 style={{ marginTop: 0 }}>Styled with CSS Shadow Parts</h3>
        <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
          Input can be customized using CSS Shadow Parts:
          <code>::part(ag-input)</code>,
          <code>::part(ag-textarea)</code>,
          <code>::part(ag-input-label)</code>,
          <code>::part(ag-input-error)</code>,
          <code>::part(ag-input-help)</code>
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div>
            <h4>Modern Gradient Border</h4>
            <ReactInput
              className="custom-gradient-input"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              onChange={action('change')}
              onInput={action('input')}
            />
          </div>

          <div>
            <h4>Neumorphic Design</h4>
            <ReactInput
              className="custom-neumorphic-input"
              label="Username"
              type="text"
              placeholder="Enter your username"
              onChange={action('change')}
              onInput={action('input')}
            />
          </div>

          <div>
            <h4>Glassmorphism Effect</h4>
            <ReactInput
              className="custom-glass-input"
              label="Password"
              type="password"
              placeholder="Enter password"
              onChange={action('change')}
              onInput={action('input')}
            />
          </div>

          <div>
            <h4>Material Design Style</h4>
            <ReactInput
              className="custom-material-input"
              label="Full Name"
              type="text"
              placeholder="John Doe"
              onChange={action('change')}
              onInput={action('input')}
            />
          </div>

          <div>
            <h4>Custom Error Styling</h4>
            <ReactInput
              className="custom-error-input"
              label="Email"
              type="email"
              value="invalid-email"
              invalid
              errorMessage="Please enter a valid email address"
              onChange={action('change')}
              onInput={action('input')}
            />
          </div>

          <div>
            <h4>Styled Textarea</h4>
            <ReactInput
              className="custom-textarea"
              label="Code Snippet"
              type="textarea"
              rows={6}
              placeholder="Paste your code here..."
              helpText="Monospace font with dashed border"
              onChange={action('change')}
              onInput={action('input')}
            />
          </div>
        </div>
      </div>
    </>
  ),
};

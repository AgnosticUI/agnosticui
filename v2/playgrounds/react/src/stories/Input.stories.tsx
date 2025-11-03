import { useState } from 'react';
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

// Event Handling Stories - AgnosticUI v2 Event Conventions

// Callback Props Pattern
const CallbackPropsPatternComponent = () => {
  const [events, setEvents] = useState<string[]>([]);

  const logEvent = (eventName: string, detail: Record<string, unknown>) => {
    const timestamp = new Date().toLocaleTimeString();
    const newEvent = `[${timestamp}] ${eventName}: ${JSON.stringify(detail)}`;
    setEvents((prev) => [...prev, newEvent].slice(-5));
  };

  return (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Callback Props Pattern</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Native events work automatically with callback props (onClick, onInput,
        onChange, onFocus, onBlur)
      </p>

      <ReactInput
        label="Test All Events"
        placeholder="Type, focus, blur..."
        helpText="Try typing, focusing, and blurring the input"
        onClick={() => logEvent('click', { type: 'mouse' })}
        onInput={(e) =>
          logEvent('input', {
            value: (e.target as HTMLInputElement).value,
          })
        }
        onChange={(e) =>
          logEvent('change', {
            value: (e.target as HTMLInputElement).value,
          })
        }
        onFocus={() => logEvent('focus', { type: 'focus' })}
        onBlur={() => logEvent('blur', { type: 'blur' })}
      />

      <div style={{ marginTop: '1.5rem' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Event Log (last 5 events):</h4>
        <pre
          style={{
            background: '#f3f4f6',
            padding: '1rem',
            borderRadius: '6px',
            minHeight: '100px',
            fontSize: '0.75rem',
            overflowX: 'auto',
          }}
        >
          {events.length > 0
            ? events.join('\n')
            : 'No events yet. Try interacting with the input above.'}
        </pre>
      </div>
    </div>
  );
};

export const CallbackPropsPattern: Story = {
  render: () => <CallbackPropsPatternComponent />,
};

// Focus and Blur Events
const FocusAndBlurEventsComponent = () => {
  const [focusCount, setFocusCount] = useState(0);
  const [blurCount, setBlurCount] = useState(0);

  return (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Focus & Blur Event Handling</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Focus and blur events are re-dispatched from the host element and work
        with callback props
      </p>

      <ReactInput
        label="Focus me!"
        placeholder="Click in and out..."
        helpText="Try focusing and blurring this input"
        onFocus={() => setFocusCount((c) => c + 1)}
        onBlur={() => setBlurCount((c) => c + 1)}
      />

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem' }}>
        <div>
          <strong>Focus events:</strong>
          <span
            style={{
              display: 'inline-block',
              marginLeft: '0.5rem',
              padding: '0.25rem 0.75rem',
              background: '#dbeafe',
              color: '#1e40af',
              borderRadius: '9999px',
              fontWeight: 'bold',
            }}
          >
            {focusCount}
          </span>
        </div>
        <div>
          <strong>Blur events:</strong>
          <span
            style={{
              display: 'inline-block',
              marginLeft: '0.5rem',
              padding: '0.25rem 0.75rem',
              background: '#fef3c7',
              color: '#92400e',
              borderRadius: '9999px',
              fontWeight: 'bold',
            }}
          >
            {blurCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export const FocusAndBlurEvents: Story = {
  render: () => <FocusAndBlurEventsComponent />,
};

// Reactive Value Updates
const ReactiveValueUpdatesComponent = () => {
  const [currentValue, setCurrentValue] = useState('');

  return (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Reactive Value Updates</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Input events fire on every keystroke, enabling real-time reactive UI
      </p>

      <ReactInput
        label="Type to see reactive updates"
        placeholder="Start typing..."
        onInput={(e) => {
          const value = (e.target as HTMLInputElement).value;
          setCurrentValue(value);
        }}
      />

      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: '#f9fafb',
          borderRadius: '6px',
        }}
      >
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Current value:</strong>
          <code
            style={{
              marginLeft: '0.5rem',
              padding: '0.25rem 0.5rem',
              background: 'white',
              borderRadius: '4px',
              color: currentValue ? '#059669' : '#6b7280',
            }}
          >
            {currentValue || '(empty)'}
          </code>
        </div>
        <div>
          <strong>Character count:</strong>
          <span
            style={{
              marginLeft: '0.5rem',
              fontWeight: 'bold',
              color: '#2563eb',
            }}
          >
            {currentValue.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ReactiveValueUpdates: Story = {
  render: () => <ReactiveValueUpdatesComponent />,
};

// Textarea Events
const TextareaEventsComponent = () => {
  const [events, setEvents] = useState<string[]>([]);

  const logEvent = (eventName: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const newEvent = `[${timestamp}] ${eventName}`;
    setEvents((prev) => [...prev, newEvent].slice(-8));
  };

  return (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Textarea Event Handling</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        All event patterns work the same for textarea type
      </p>

      <ReactInput
        type="textarea"
        label="Comments"
        placeholder="Enter your feedback..."
        rows={6}
        helpText="Try typing, focusing, and blurring"
        onClick={() => logEvent('click')}
        onInput={() => logEvent('input')}
        onChange={() => logEvent('change')}
        onFocus={() => logEvent('focus')}
        onBlur={() => logEvent('blur')}
      />

      <div style={{ marginTop: '1.5rem' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Event Log (last 8 events):</h4>
        <pre
          style={{
            background: '#f3f4f6',
            padding: '1rem',
            borderRadius: '6px',
            minHeight: '120px',
            fontSize: '0.75rem',
            overflowX: 'auto',
          }}
        >
          {events.length > 0
            ? events.join('\n')
            : 'No events yet. Try interacting with the textarea above.'}
        </pre>
      </div>
    </div>
  );
};

export const TextareaEvents: Story = {
  render: () => <TextareaEventsComponent />,
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

// Addon Examples - Automatic Slot Detection
// React components for icons
const SearchIcon = () => (
  <svg
    slot="addon-left"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const SearchIconRight = () => (
  <svg
    slot="addon-right"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);


const DollarIcon = () => (
  <span slot="addon-left" style={{ fontWeight: 'bold', color: 'var(--ag-primary)' }}>
    $
  </span>
);

const PercentIcon = () => (
  <span slot="addon-right" style={{ fontWeight: 'bold', color: 'var(--ag-text-secondary)' }}>
    %
  </span>
);

// Left Addon - Search
export const LeftAddonSearch: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Left Addon - Search Icon</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Addons are automatically detected via slots - no props needed!
      </p>

      <ReactInput
        label="Search"
        type="search"
        placeholder="Search for something..."
        rounded
      >
        <SearchIcon />
      </ReactInput>
    </div>
  ),
};

// Right Addon - Units
export const RightAddonUnits: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Right Addon - Unit Indicator</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Perfect for displaying units or currencies
      </p>

      <ReactInput
        label="Discount Rate"
        type="number"
        placeholder="Enter discount percentage"
        value="15"
      >
        <PercentIcon />
      </ReactInput>
    </div>
  ),
};

// Both Addons - Currency Input
export const BothAddonsCurrency: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Both Addons - Currency Input</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Combine left and right addons for complex inputs
      </p>

      <ReactInput
        label="Amount"
        type="number"
        placeholder="0.00"
        helpText="Enter amount in US Dollars"
      >
        <DollarIcon />
        <span slot="addon-right" style={{ fontWeight: 600, color: 'var(--ag-text-secondary)' }}>
          USD
        </span>
      </ReactInput>
    </div>
  ),
};

// Addons with Different Sizes
export const AddonsWithSizes: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Addons with Size Variants</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Small</p>
          <ReactInput
            label="Small Search"
            type="search"
            placeholder="Small"
            size="small"
            rounded
          >
            <SearchIcon />
          </ReactInput>
        </div>

        <div>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Default</p>
          <ReactInput
            label="Default Search"
            type="search"
            placeholder="Default"
            rounded
          >
            <SearchIcon />
          </ReactInput>
        </div>

        <div>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Large</p>
          <ReactInput
            label="Large Search"
            type="search"
            placeholder="Large"
            size="large"
            rounded
          >
            <SearchIcon />
          </ReactInput>
        </div>
      </div>
    </div>
  ),
};

// Addons with Styling Variants
export const AddonsWithStyles: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Addons with Style Variants</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Rounded</p>
          <ReactInput
            label="Price"
            type="number"
            placeholder="0.00"
            rounded
          >
            <DollarIcon />
            <span slot="addon-right" style={{ fontWeight: 600 }}>USD</span>
          </ReactInput>
        </div>

        <div>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Capsule</p>
          <ReactInput
            label="Search Products"
            type="search"
            placeholder="Find products..."
            capsule
          >
          <SearchIconRight />
          </ReactInput>
        </div>

        <div>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Underlined</p>
          <ReactInput
            label="Discount"
            type="number"
            placeholder="10"
            underlined
          >
            <PercentIcon />
          </ReactInput>
        </div>
      </div>
    </div>
  ),
};

// Textarea with Addons
export const TextareaWithAddons: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Textarea with Addons</h3>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Addons work with textarea type as well
      </p>

      <ReactInput
        label="Notes"
        type="textarea"
        placeholder="Enter your notes..."
        rows={6}
        helpText="Character counter will appear on the right"
      >
        <svg
          slot="addon-left"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        <span slot="addon-right" style={{ fontSize: '0.875rem', color: 'var(--ag-text-muted)' }}>
          0/500
        </span>
      </ReactInput>
    </div>
  ),
};

// Complex Form with Addons
export const ComplexFormWithAddons: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Product Form with Addons</h3>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        <ReactInput
          label="Search Products"
          type="search"
          placeholder="Find products..."
          rounded
        >
          <SearchIcon />
        </ReactInput>

        <ReactInput
          label="Product Name"
          type="text"
          placeholder="Enter product name"
          required
        />

        <ReactInput
          label="Price"
          type="number"
          placeholder="0.00"
          rounded
          required
          helpText="Enter the product price"
        >
          <DollarIcon />
          <span slot="addon-right" style={{ fontWeight: 600 }}>USD</span>
        </ReactInput>

        <ReactInput
          label="Discount"
          type="number"
          placeholder="0"
          helpText="Optional discount percentage"
        >
          <PercentIcon />
        </ReactInput>

        <ReactInput
          label="Website URL"
          type="url"
          placeholder="example.com"
          rounded
        >
          <svg
            slot="addon-left"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </ReactInput>

        <button type="submit" style={{ padding: '0.75rem 1.5rem', cursor: 'pointer', borderRadius: '6px' }}>
          Save Product
        </button>
      </form>
    </div>
  ),
};

// Invalid State with Addons
export const InvalidWithAddons: Story = {
  render: () => (
    <div style={{ padding: '50px', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Validation with Addons</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        <ReactInput
          label="Price"
          type="number"
          value="abc"
          invalid
          errorMessage="Please enter a valid number"
        >
          <DollarIcon />
          <span slot="addon-right" style={{ fontWeight: 600 }}>USD</span>
        </ReactInput>

        <ReactInput
          label="Discount"
          type="number"
          value="150"
          invalid
          errorMessage="Discount cannot exceed 100%"
        >
          <PercentIcon />
        </ReactInput>
      </div>
    </div>
  ),
};

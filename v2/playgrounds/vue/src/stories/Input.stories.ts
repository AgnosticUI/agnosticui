import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
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
    capsule: {
      control: 'boolean',
      description: 'Capsule styling (fully rounded corners)',
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
    capsule: false,
    rounded: false,
    underlined: false,
    underlinedWithBackground: false,
    inline: false,
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
    rounded: true,
  },
};

export const Underlined: Story = {
  args: {
    label: 'Underlined Input',
    placeholder: 'Underlined style',
    type: 'text',
    underlined: true,
  },
};

export const UnderlinedWithBackground: Story = {
  args: {
    label: 'Underlined with Background',
    placeholder: 'Underlined with background',
    type: 'text',
    underlinedWithBackground: true,
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
    rounded: true,
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

// Event Handling Stories - AgnosticUI v2 Event Conventions

// Callback Props Pattern (using @event handlers in Vue)
export const CallbackPropsPattern: Story = {
  render: () => ({
    components: { VueInput },
    setup() {
      const events = ref<string[]>([]);

      const logEvent = (eventName: string, detail: any) => {
        const timestamp = new Date().toLocaleTimeString();
        const newEvent = `[${timestamp}] ${eventName}: ${JSON.stringify(detail)}`;
        events.value = [...events.value, newEvent].slice(-5);
      };

      return { events, logEvent };
    },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Event Handling Pattern</h3>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Vue uses @event syntax for event handling (click, input, change, focus, blur)
        </p>

        <VueInput
          label="Test All Events"
          placeholder="Type, focus, blur..."
          help-text="Try typing, focusing, and blurring the input"
          @click="logEvent('click', { type: 'mouse' })"
          @input="(e) => logEvent('input', { value: e.target?.value })"
          @change="(e) => logEvent('change', { value: e.target?.value })"
          @focus="logEvent('focus', { type: 'focus' })"
          @blur="logEvent('blur', { type: 'blur' })"
        />

        <div style="margin-top: 1.5rem;">
          <h4 style="margin-bottom: 0.5rem;">Event Log (last 5 events):</h4>
          <pre
            style="background: #f3f4f6; padding: 1rem; border-radius: 6px; min-height: 100px; font-size: 0.75rem; overflow-x: auto;"
          >{{ events.length > 0 ? events.join('\\n') : 'No events yet. Try interacting with the input above.' }}</pre>
        </div>
      </div>
    `,
  }),
};

// Focus and Blur Events
export const FocusAndBlurEvents: Story = {
  render: () => ({
    components: { VueInput },
    setup() {
      const focusCount = ref(0);
      const blurCount = ref(0);

      return { focusCount, blurCount };
    },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Focus & Blur Event Handling</h3>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Focus and blur events are re-dispatched from the host element
        </p>

        <VueInput
          label="Focus me!"
          placeholder="Click in and out..."
          help-text="Try focusing and blurring this input"
          @focus="focusCount++"
          @blur="blurCount++"
        />

        <div style="margin-top: 1.5rem; display: flex; gap: 2rem;">
          <div>
            <strong>Focus events:</strong>
            <span style="display: inline-block; margin-left: 0.5rem; padding: 0.25rem 0.75rem; background: #dbeafe; color: #1e40af; border-radius: 9999px; font-weight: bold;">
              {{ focusCount }}
            </span>
          </div>
          <div>
            <strong>Blur events:</strong>
            <span style="display: inline-block; margin-left: 0.5rem; padding: 0.25rem 0.75rem; background: #fef3c7; color: #92400e; border-radius: 9999px; font-weight: bold;">
              {{ blurCount }}
            </span>
          </div>
        </div>
      </div>
    `,
  }),
};

// Reactive Value Updates with v-model
export const ReactiveValueUpdates: Story = {
  render: () => ({
    components: { VueInput },
    setup() {
      const currentValue = ref('');

      return { currentValue };
    },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Reactive Value Updates (v-model)</h3>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Use v-model:value for two-way binding with real-time reactive UI
        </p>

        <VueInput
          v-model:value="currentValue"
          label="Type to see reactive updates"
          placeholder="Start typing..."
        />

        <div style="margin-top: 1.5rem; padding: 1rem; background: #f9fafb; border-radius: 6px;">
          <div style="margin-bottom: 0.5rem;">
            <strong>Current value:</strong>
            <code :style="{ marginLeft: '0.5rem', padding: '0.25rem 0.5rem', background: 'white', borderRadius: '4px', color: currentValue ? '#059669' : '#6b7280' }">
              {{ currentValue || '(empty)' }}
            </code>
          </div>
          <div>
            <strong>Character count:</strong>
            <span style="margin-left: 0.5rem; font-weight: bold; color: #2563eb;">
              {{ currentValue.length }}
            </span>
          </div>
        </div>
      </div>
    `,
  }),
};

// Textarea Events
export const TextareaEvents: Story = {
  render: () => ({
    components: { VueInput },
    setup() {
      const events = ref<string[]>([]);

      const logEvent = (eventName: string) => {
        const timestamp = new Date().toLocaleTimeString();
        const newEvent = `[${timestamp}] ${eventName}`;
        events.value = [...events.value, newEvent].slice(-8);
      };

      return { events, logEvent };
    },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Textarea Event Handling</h3>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          All event patterns work the same for textarea type
        </p>

        <VueInput
          type="textarea"
          label="Comments"
          placeholder="Enter your feedback..."
          :rows="6"
          help-text="Try typing, focusing, and blurring"
          @click="logEvent('click')"
          @input="logEvent('input')"
          @change="logEvent('change')"
          @focus="logEvent('focus')"
          @blur="logEvent('blur')"
        />

        <div style="margin-top: 1.5rem;">
          <h4 style="margin-bottom: 0.5rem;">Event Log (last 8 events):</h4>
          <pre style="background: #f3f4f6; padding: 1rem; border-radius: 6px; min-height: 120px; font-size: 0.75rem; overflow-x: auto;">{{ events.length > 0 ? events.join('\\n') : 'No events yet. Try interacting with the textarea above.' }}</pre>
        </div>
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

// Addon Examples - Automatic Slot Detection
// Left Addon - Search
export const LeftAddonSearch: Story = {
  render: () => ({
    components: { VueInput },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Left Addon - Search Icon</h3>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Addons are automatically detected via slots - no props needed!
        </p>

        <VueInput
          label="Search"
          type="search"
          placeholder="Search for something..."
          :rounded="true"
        >
          <template #addon-left>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </template>
        </VueInput>
      </div>
    `,
  }),
};

// Right Addon - Units
export const RightAddonUnits: Story = {
  render: () => ({
    components: { VueInput },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Right Addon - Unit Indicator</h3>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Perfect for displaying units or currencies
        </p>

        <VueInput
          label="Discount Rate"
          type="number"
          placeholder="Enter discount percentage"
          value="15"
        >
          <template #addon-right>
            <span style="font-weight: bold; color: var(--ag-text-secondary);">%</span>
          </template>
        </VueInput>
      </div>
    `,
  }),
};

// Both Addons - Currency Input
export const BothAddonsCurrency: Story = {
  render: () => ({
    components: { VueInput },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Both Addons - Currency Input</h3>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Combine left and right addons for complex inputs
        </p>

        <VueInput
          label="Amount"
          type="number"
          placeholder="0.00"
          helpText="Enter amount in US Dollars"
        >
          <template #addon-left>
            <span style="font-weight: bold; color: var(--ag-primary);">$</span>
          </template>
          <template #addon-right>
            <span style="font-weight: 600; color: var(--ag-text-secondary);">USD</span>
          </template>
        </VueInput>
      </div>
    `,
  }),
};

// Complex Form with Addons
export const ComplexFormWithAddons: Story = {
  render: () => ({
    components: { VueInput },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Product Form with Addons</h3>

        <form style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
          <VueInput
            label="Search Products"
            type="search"
            placeholder="Find products..."
            :rounded="true"
          >
            <template #addon-left>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </template>
          </VueInput>

          <VueInput
            label="Product Name"
            type="text"
            placeholder="Enter product name"
            :required="true"
          />

          <VueInput
            label="Price"
            type="number"
            placeholder="0.00"
            :required="true"
            helpText="Enter the product price"
          >
            <template #addon-left>
              <span style="font-weight: bold;">$</span>
            </template>
            <template #addon-right>
              <span style="font-weight: 600;">USD</span>
            </template>
          </VueInput>

          <VueInput
            label="Discount"
            type="number"
            placeholder="0"
            helpText="Optional discount percentage"
          >
            <template #addon-right>
              <span style="font-weight: bold;">%</span>
            </template>
          </VueInput>

          <button type="submit" style="padding: 0.75rem 1.5rem; cursor: pointer; border-radius: 6px;">
            Save Product
          </button>
        </form>
      </div>
    `,
  }),
};

// Invalid State with Addons
export const InvalidWithAddons: Story = {
  render: () => ({
    components: { VueInput },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h3 style="margin-top: 0;">Validation with Addons</h3>

        <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
          <VueInput
            label="Price"
            type="number"
            value="abc"
            :invalid="true"
            errorMessage="Please enter a valid number"
          >
            <template #addon-left>
              <span style="font-weight: bold;">$</span>
            </template>
            <template #addon-right>
              <span style="font-weight: 600;">USD</span>
            </template>
          </VueInput>

          <VueInput
            label="Discount"
            type="number"
            value="150"
            :invalid="true"
            errorMessage="Discount cannot exceed 100%"
          >
            <template #addon-right>
              <span style="font-weight: bold;">%</span>
            </template>
          </VueInput>
        </div>
      </div>
    `,
  }),
};

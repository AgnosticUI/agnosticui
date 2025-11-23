import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueSelect } from '../../../../lib/src/components/Select/vue';

const meta = {
  title: 'AgnosticUI Vue/Select',
  component: VueSelect,
  argTypes: {
    size: {
      control: 'select',
      options: ['', 'small', 'large'],
      description: 'Size variant of the select',
    },
    multiple: { control: 'boolean', description: 'Enable multiple selection' },
    disabled: { control: 'boolean', description: 'Disable the select' },
    name: { control: 'text', description: 'Form name attribute' },
    multipleSize: { control: 'number', description: 'Visible options for multiple select' },
    label: { control: 'text', description: 'External label text' },
    labelHidden: { control: 'boolean', description: 'Visually hide the label' },
    noLabel: { control: 'boolean', description: 'Remove the label element' },
    required: { control: 'boolean', description: 'Mark as required' },
    invalid: { control: 'boolean', description: 'Mark as invalid' },
    errorMessage: { control: 'text', description: 'Error message when invalid' },
    helpText: { control: 'text', description: 'Helper text below the select' },
  },
  args: {
    size: '',
    multiple: false,
    disabled: false,
    name: 'tennis-players',
    multipleSize: undefined,
    label: '',
    labelHidden: false,
    noLabel: false,
    required: false,
    invalid: false,
    errorMessage: '',
    helpText: '',
  },
} satisfies Meta<typeof VueSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueSelect },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <label for="tennis-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Greatest Tennis Player
        </label>
        <VueSelect id="tennis-select" v-bind="args">
          <option value="">- Select a player -</option>
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const BasicSelect: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="basic-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Choose a fruit
        </label>
        <VueSelect id="basic-select" name="fruit">
          <option value="">Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const SmallSize: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="small-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Small Select
        </label>
        <VueSelect id="small-select" size="small" name="small">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const LargeSize: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="large-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Large Select
        </label>
        <VueSelect id="large-select" size="large" name="large">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="disabled-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Disabled Select
        </label>
        <VueSelect id="disabled-select" :disabled="true" name="disabled">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const MultipleSelect: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="multiple-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Multiple Select (Ctrl/Cmd + Click)
        </label>
        <VueSelect
          id="multiple-select"
          :multiple="true"
          :multiple-size="4"
          name="multiple"
        >
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <div>
          <label for="small" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
            Small
          </label>
          <VueSelect id="small" size="small">
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </VueSelect>
        </div>

        <div>
          <label for="default" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
            Default
          </label>
          <VueSelect id="default">
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </VueSelect>
        </div>

        <div>
          <label for="large" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
            Large
          </label>
          <VueSelect id="large" size="large">
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </VueSelect>
        </div>
      </div>
    `,
  }),
};

export const WithChangeHandler: Story = {
  render: () => ({
    components: { VueSelect },
    setup() {
      // Vue wrapper emits the detail payload directly, not the full CustomEvent
      const handleChange = (detail: { value: string | string[] }) => {
        alert(`Selected value: ${detail.value}`);
      };
      return { handleChange };
    },
    template: `
      <div style="max-width: 400px;">
        <label for="change-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Select with Change Handler
        </label>
        <VueSelect
          id="change-select"
          name="change"
          @change="handleChange"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Select an option to see the change event
        </p>
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  render: () => ({
    components: { VueSelect },
    setup() {
      const events = ref<string[]>([]);

      const logEvent = (message: string) => {
        events.value.unshift(message);
        if (events.value.length > 8) events.value.pop();
      };

      // Vue wrapper emits detail payload for custom events
      const handleChange = (detail: { value: string | string[] }) => {
        logEvent(`@change - value: ${detail.value}`);
      };

      const handleFocus = () => {
        logEvent('@focus');
      };

      const handleBlur = () => {
        logEvent('@blur');
      };

      const handleClick = () => {
        logEvent('@click');
      };

      return { events, handleChange, handleFocus, handleBlur, handleClick };
    },
    template: `
      <div style="max-width: 600px;">
        <h3 style="margin-bottom: 1rem;">Event Testing - Vue @event Pattern</h3>
        <label for="event-test" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Select an option to see all events
        </label>
        <VueSelect
          id="event-test"
          name="event-test"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @click="handleClick"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <strong>Event Log (newest first):</strong>
          <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
            <div v-if="events.length === 0">(select an option to see events)</div>
            <div v-for="(event, index) in events" :key="index">{{ event }}</div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithVModel: Story = {
  render: () => ({
    components: { VueSelect },
    setup() {
      const selectedValue = ref('');
      return { selectedValue };
    },
    template: `
      <div style="max-width: 400px;">
        <h3 style="margin-bottom: 1rem;">Select with v-model:value</h3>
        <label for="vmodel-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Choose a fruit
        </label>
        <VueSelect
          id="vmodel-select"
          name="fruit"
          v-model:value="selectedValue"
        >
          <option value="">Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </VueSelect>

        <div v-if="selectedValue" style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <strong>Selected:</strong> {{ selectedValue }}
        </div>
      </div>
    `,
  }),
};

export const MultipleWithVModel: Story = {
  render: () => ({
    components: { VueSelect },
    setup() {
      const selectedPlayers = ref<string[]>([]);
      return { selectedPlayers };
    },
    template: `
      <div style="max-width: 400px;">
        <h3 style="margin-bottom: 1rem;">Multiple Select with v-model:value</h3>
        <label for="multiple-vmodel" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Select Tennis Players (Ctrl/Cmd + Click)
        </label>
        <VueSelect
          id="multiple-vmodel"
          name="players"
          :multiple="true"
          :multipleSize="5"
          v-model:value="selectedPlayers"
        >
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
        </VueSelect>

        <div v-if="selectedPlayers.length > 0" style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <strong>Selected ({{ selectedPlayers.length }}):</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li v-for="player in selectedPlayers" :key="player">{{ player }}</li>
          </ul>
        </div>
      </div>
    `,
  }),
};

export const CombinedPatterns: Story = {
  render: () => ({
    components: { VueSelect },
    setup() {
      const selectedValue = ref('');
      const log = ref<string[]>([]);

      const handleChange = (detail: { value: string | string[] }) => {
        log.value.push(`@change event fired - value: ${detail.value}`);
        if (log.value.length > 5) log.value.shift();
      };

      return { selectedValue, log, handleChange };
    },
    template: `
      <div style="max-width: 600px;">
        <h3 style="margin-bottom: 1rem;">Combined: v-model + @change Event</h3>
        <p style="margin-bottom: 1rem; color: var(--ag-text-secondary);">
          Both v-model:value AND @change event work together
        </p>
        <label for="combined-test" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Choose a fruit
        </label>
        <VueSelect
          id="combined-test"
          name="fruit"
          v-model:value="selectedValue"
          @change="handleChange"
        >
          <option value="">Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </VueSelect>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <strong>v-model value:</strong> {{ selectedValue || '(none)' }}
          <div style="margin-top: 0.5rem;">
            <strong>@change Event Log:</strong>
            <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; max-height: 150px; overflow-y: auto;">
              <div v-for="(entry, index) in log" :key="index">{{ entry }}</div>
              <div v-if="log.length === 0">(no events yet)</div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithExternalLabel: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <VueSelect
          label="Favorite Framework"
          name="framework"
        >
          <option value="">Choose a framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </VueSelect>

        <VueSelect
          label="Country"
          help-text="Select your country of residence"
          name="country"
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </VueSelect>

        <VueSelect
          label="Preferred Language"
          :required="true"
          help-text="This field is required"
          name="language"
        >
          <option value="">Select a language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </VueSelect>

        <VueSelect
          label="Payment Method"
          :required="true"
          :invalid="true"
          error-message="Please select a payment method to continue"
          name="payment"
        >
          <option value="">Select payment method</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="paypal">PayPal</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const ComparisonStandaloneVsExternal: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="display: flex; gap: 3rem;">
        <div style="flex: 1;">
          <h3 style="margin-bottom: 1rem;">Standard Select (Manual Label)</h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div>
              <label for="plan-1" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
                Choose Plan
              </label>
              <VueSelect id="plan-1" name="plan-1">
                <option value="">Select a plan</option>
                <option value="free">Free Plan</option>
                <option value="pro">Pro Plan</option>
                <option value="enterprise">Enterprise Plan</option>
              </VueSelect>
            </div>
          </div>
        </div>
        <div style="flex: 1;">
          <h3 style="margin-bottom: 1rem;">
            Select with External Label
          </h3>
          <VueSelect
            label="Choose Plan"
            help-text="Select the plan that best fits your needs"
            name="plan-2"
          >
            <option value="">Select a plan</option>
            <option value="free">Free Plan</option>
            <option value="pro">Pro Plan</option>
            <option value="enterprise">Enterprise Plan</option>
          </VueSelect>
        </div>
      </div>
    `,
  }),
};

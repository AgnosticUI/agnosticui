import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueSlider } from '../../../../lib/src/components/Slider/vue';

const meta = {
  title: 'AgnosticUI Vue/Slider',
  component: VueSlider,
  argTypes: {
    label: { control: 'text', description: 'Label text' },
    labelPosition: {
      control: 'select',
      options: ['top', 'start', 'end', 'bottom'],
      description: 'Label position',
    },
    labelHidden: { control: 'boolean', description: 'Hide label visually' },
    noLabel: { control: 'boolean', description: 'Remove label completely' },
    ariaLabel: { control: 'text', description: 'ARIA label' },
    labelledBy: { control: 'text', description: 'ARIA labelledby' },
    min: { control: 'number', description: 'Minimum value' },
    max: { control: 'number', description: 'Maximum value' },
    step: { control: 'number', description: 'Step increment' },
    value: { control: 'number', description: 'Current value' },
    dual: { control: 'boolean', description: 'Dual range slider' },
    vertical: { control: 'boolean', description: 'Vertical orientation' },
    filled: { control: 'boolean', description: 'Filled thumb style' },
    monochrome: { control: 'boolean', description: 'Monochrome color scheme' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Slider size',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
    readonly: { control: 'boolean', description: 'Readonly state' },
    required: { control: 'boolean', description: 'Required field' },
    invalid: { control: 'boolean', description: 'Invalid state' },
    errorMessage: { control: 'text', description: 'Error message text' },
    helpText: { control: 'text', description: 'Help text' },
    name: { control: 'text', description: 'Form field name' },
    showTooltip: { control: 'boolean', description: 'Show value tooltip' },
    showTicks: { control: 'boolean', description: 'Show tick marks' },
    tickStep: { control: 'number', description: 'Tick mark step' },
  },
  args: {
    label: 'Slider Label',
    labelPosition: 'top',
    labelHidden: false,
    noLabel: false,
    ariaLabel: '',
    labelledBy: '',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    dual: false,
    vertical: false,
    filled: false,
    monochrome: false,
    size: 'default',
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    errorMessage: '',
    helpText: '',
    name: '',
    showTooltip: false,
    showTicks: false,
    tickStep: 25,
  },
} satisfies Meta<typeof VueSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueSlider },
    setup() {
      return { args };
    },
    template: `<VueSlider v-bind="args" />`,
  }),
};

export const WithLabel: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Volume" :value="75" />
      </div>
    `,
  }),
};

export const DualRange: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Price Range" dual :value="[25, 75]" />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
        <VueSlider label="Small" size="small" :value="30" />
        <VueSlider label="Default" size="default" :value="50" />
        <VueSlider label="Large" size="large" :value="70" />
      </div>
    `,
  }),
};

export const Filled: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Filled Variant" filled :value="60" />
      </div>
    `,
  }),
};

export const Monochrome: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Monochrome Variant" monochrome :value="70" />
      </div>
    `,
  }),
};

export const MonochromeFilled: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Monochrome Filled" monochrome filled :value="80" />
      </div>
    `,
  }),
};

export const WithTooltip: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="With Tooltip" show-tooltip :value="45" />
      </div>
    `,
  }),
};

export const WithTicks: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="With Tick Marks" show-ticks :tick-step="25" :value="50" />
      </div>
    `,
  }),
};

export const WithHelpText: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Brightness" help-text="Adjust screen brightness level" :value="75" />
      </div>
    `,
  }),
};

export const Invalid: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Invalid State" invalid error-message="Value must be at least 50" :value="30" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Disabled" disabled :value="50" />
      </div>
    `,
  }),
};

export const Readonly: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Readonly" readonly :value="65" />
      </div>
    `,
  }),
};

export const CustomRange: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem;">
        <VueSlider label="Temperature (°C)" :min="-20" :max="40" :step="5" :value="20" />
      </div>
    `,
  }),
};

export const StepIncrement: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
        <VueSlider label="Step 1" :step="1" :value="50" />
        <VueSlider label="Step 5" :step="5" :value="50" />
        <VueSlider label="Step 10" :step="10" :value="50" />
        <VueSlider label="Step 25" :step="25" :value="50" />
      </div>
    `,
  }),
};

export const Vertical: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="display: flex; gap: 2rem; padding: 2rem; height: 300px;">
        <VueSlider label="Vertical Small" vertical size="small" :value="30" />
        <VueSlider label="Vertical Default" vertical :value="50" />
        <VueSlider label="Vertical Large" vertical size="large" :value="70" />
      </div>
    `,
  }),
};

export const VerticalDualRange: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="padding: 2rem; height: 300px;">
        <VueSlider label="Vertical Range" vertical dual :value="[25, 75]" />
      </div>
    `,
  }),
};

export const LabelVariants: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
        <VueSlider label="With Visible Label" :value="50" />
        <VueSlider label="Visually Hidden Label" label-hidden :value="50" />
        <VueSlider no-label aria-label="No Visual Label" :value="50" />
      </div>
    `,
  }),
};

export const EventHandling: Story = {
  render: () => ({
    components: { VueSlider },
    setup() {
      const events = ref<string[]>([]);
      const value = ref(50);

      const addEvent = (event: string) => {
        events.value = [...events.value, `${new Date().toLocaleTimeString()}: ${event}`].slice(-10);
      };

      const handleInput = (detail: { value: number | [number, number] }) => {
        value.value = detail.value as number;
        addEvent(`📝 input: value=${detail.value}`);
      };

      const handleChange = (detail: { value: number | [number, number] }) => {
        addEvent(`✅ change: value=${detail.value}`);
      };

      const handleFocus = () => {
        addEvent('🎯 focus');
      };

      const handleBlur = () => {
        addEvent('👋 blur');
      };

      return { events, value, handleInput, handleChange, handleFocus, handleBlur };
    },
    template: `
      <div style="padding: 2rem;">
        <VueSlider
          label="Event Testing"
          :value="value"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
          <h4 style="margin-top: 0; margin-bottom: 0.5rem;">Event Log:</h4>
          <div style="font-family: monospace; font-size: 0.875rem;">
            <div v-if="events.length === 0" style="color: #999;">
              Interact with the slider to see events...
            </div>
            <div v-for="(event, i) in events" :key="i">{{ event }}</div>
          </div>
        </div>
        <div style="margin-top: 1rem; color: #666; font-size: 0.875rem;">
          Current value: <strong>{{ value }}</strong>
        </div>
      </div>
    `,
  }),
};

export const CallbackProps: Story = {
  render: () => ({
    components: { VueSlider },
    setup() {
      const events = ref<string[]>([]);
      const value = ref(50);

      const addEvent = (event: string) => {
        events.value = [...events.value, `${new Date().toLocaleTimeString()}: ${event}`].slice(-10);
      };

      const handleInput = (detail: { value: number | [number, number] }) => {
        value.value = detail.value as number;
        addEvent(`📝 onInput: value=${detail.value}`);
      };

      const handleChange = (detail: { value: number | [number, number] }) => {
        addEvent(`✅ onChange: value=${detail.value}`);
      };

      const handleFocus = () => {
        addEvent('🎯 onFocus');
      };

      const handleBlur = () => {
        addEvent('👋 onBlur');
      };

      return { events, value, handleInput, handleChange, handleFocus, handleBlur };
    },
    template: `
      <div style="padding: 2rem;">
        <VueSlider
          label="Callback Props Testing"
          :value="value"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
          <h4 style="margin-top: 0; margin-bottom: 0.5rem;">Callback Log:</h4>
          <div style="font-family: monospace; font-size: 0.875rem;">
            <div v-if="events.length === 0" style="color: #999;">
              Move the slider to trigger callbacks...
            </div>
            <div v-for="(event, i) in events" :key="i">{{ event }}</div>
          </div>
        </div>
        <div style="margin-top: 1rem; color: #666; font-size: 0.875rem;">
          Current value: <strong>{{ value }}</strong>
        </div>
      </div>
    `,
  }),
};

export const DualRangeEvents: Story = {
  render: () => ({
    components: { VueSlider },
    setup() {
      const events = ref<string[]>([]);
      const value = ref<[number, number]>([25, 75]);

      const addEvent = (event: string) => {
        events.value = [...events.value, `${new Date().toLocaleTimeString()}: ${event}`].slice(-10);
      };

      const handleInput = (detail: { value: [number, number] }) => {
        value.value = detail.value;
        addEvent(`📝 input: range=[${detail.value[0]}, ${detail.value[1]}]`);
      };

      const handleChange = (detail: { value: [number, number] }) => {
        addEvent(`✅ change: range=[${detail.value[0]}, ${detail.value[1]}]`);
      };

      const handleFocus = () => {
        addEvent('🎯 focus');
      };

      const handleBlur = () => {
        addEvent('👋 blur');
      };

      return { events, value, handleInput, handleChange, handleFocus, handleBlur };
    },
    template: `
      <div style="padding: 2rem;">
        <VueSlider
          label="Dual Range Events"
          dual
          :value="value"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
          <h4 style="margin-top: 0; margin-bottom: 0.5rem;">Event Log:</h4>
          <div style="font-family: monospace; font-size: 0.875rem;">
            <div v-if="events.length === 0" style="color: #999;">
              Drag the range handles to see events...
            </div>
            <div v-for="(event, i) in events" :key="i">{{ event }}</div>
          </div>
        </div>
        <div style="margin-top: 1rem; color: #666; font-size: 0.875rem;">
          Current range: <strong>[{{ value[0] }}, {{ value[1] }}]</strong>
        </div>
      </div>
    `,
  }),
};

export const ControlledComponent: Story = {
  render: () => ({
    components: { VueSlider },
    setup() {
      const value = ref(50);

      const handleInput = (detail: { value: number | [number, number] }) => {
        value.value = detail.value as number;
      };

      const setValue = (newValue: number) => {
        value.value = newValue;
      };

      return { value, handleInput, setValue };
    },
    template: `
      <div style="padding: 2rem;">
        <VueSlider
          label="Controlled Slider"
          :value="value"
          @input="handleInput"
        />
        <div style="margin-top: 1rem; display: flex; gap: 1rem; align-items: center;">
          <button @click="setValue(0)" style="padding: 0.5rem 1rem;">
            Set to 0
          </button>
          <button @click="setValue(50)" style="padding: 0.5rem 1rem;">
            Set to 50
          </button>
          <button @click="setValue(100)" style="padding: 0.5rem 1rem;">
            Set to 100
          </button>
          <span style="margin-left: auto;">Value: {{ value }}</span>
        </div>
      </div>
    `,
  }),
};

export const FormIntegration: Story = {
  render: () => ({
    components: { VueSlider },
    setup() {
      const submitted = ref('');

      const handleSubmit = (e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        submitted.value = JSON.stringify(data, null, 2);
      };

      return { submitted, handleSubmit };
    },
    template: `
      <div style="padding: 2rem;">
        <form @submit="handleSubmit">
          <VueSlider label="Volume" name="volume" :value="75" />
          <VueSlider label="Brightness" name="brightness" :value="50" />
          <VueSlider label="Price Range" name="priceRange" dual :value="[25, 75]" />
          <button type="submit" style="margin-top: 1rem; padding: 0.5rem 1rem;">
            Submit
          </button>
        </form>
        <div v-if="submitted" style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
          <h4 style="margin-top: 0;">Submitted Data:</h4>
          <pre style="margin: 0; font-size: 0.875rem;">{{ submitted }}</pre>
        </div>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { VueSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
        <VueSlider label="Default" :value="50" />
        <VueSlider label="Small" size="small" :value="50" />
        <VueSlider label="Large" size="large" :value="50" />
        <VueSlider label="Filled" filled :value="50" />
        <VueSlider label="Monochrome" monochrome :value="50" />
        <VueSlider label="Monochrome Filled" monochrome filled :value="50" />
        <VueSlider label="With Tooltip" show-tooltip :value="50" />
        <VueSlider label="With Ticks" show-ticks :value="50" />
        <VueSlider label="Dual Range" dual :value="[25, 75]" />
        <VueSlider label="Disabled" disabled :value="50" />
        <VueSlider label="Readonly" readonly :value="50" />
        <VueSlider label="Invalid" invalid error-message="Error message" :value="50" />
      </div>
    `,
  }),
};

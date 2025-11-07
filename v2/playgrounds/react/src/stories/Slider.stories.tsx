import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReactSlider, type SliderProps } from 'agnosticui-core/slider/react';

const meta: Meta<SliderProps> = {
  title: 'AgnosticUI React/Slider',
  component: ReactSlider,
  argTypes: {
    label: { control: 'text', description: 'Label text' },
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
    invalid: false,
    errorMessage: '',
    helpText: '',
    name: '',
    showTooltip: false,
    showTicks: false,
    tickStep: 25,
  },
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: SliderProps) => <ReactSlider {...args} />,
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Volume" value={75} />
    </div>
  ),
};

export const DualRange: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Price Range" dual value={[25, 75]} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <ReactSlider label="Small" size="small" value={30} />
      <ReactSlider label="Default" size="default" value={50} />
      <ReactSlider label="Large" size="large" value={70} />
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Filled Variant" filled value={60} />
    </div>
  ),
};

export const Monochrome: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Monochrome Variant" monochrome value={70} />
    </div>
  ),
};

export const MonochromeFilled: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Monochrome Filled" monochrome filled value={80} />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="With Tooltip" showTooltip value={45} />
    </div>
  ),
};

export const WithTicks: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="With Tick Marks" showTicks tickStep={25} value={50} />
    </div>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Brightness" helpText="Adjust screen brightness level" value={75} />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Invalid State" invalid errorMessage="Value must be at least 50" value={30} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Disabled" disabled value={50} />
    </div>
  ),
};

export const Readonly: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Readonly" readonly value={65} />
    </div>
  ),
};

export const CustomRange: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ReactSlider label="Temperature (°C)" min={-20} max={40} step={5} value={20} />
    </div>
  ),
};

export const StepIncrement: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <ReactSlider label="Step 1" step={1} value={50} />
      <ReactSlider label="Step 5" step={5} value={50} />
      <ReactSlider label="Step 10" step={10} value={50} />
      <ReactSlider label="Step 25" step={25} value={50} />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem', height: '300px' }}>
      <ReactSlider label="Vertical Small" vertical size="small" value={30} />
      <ReactSlider label="Vertical Default" vertical value={50} />
      <ReactSlider label="Vertical Large" vertical size="large" value={70} />
    </div>
  ),
};

export const VerticalDualRange: Story = {
  render: () => (
    <div style={{ padding: '2rem', height: '300px' }}>
      <ReactSlider label="Vertical Range" vertical dual value={[25, 75]} />
    </div>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <ReactSlider label="With Visible Label" value={50} />
      <ReactSlider label="Visually Hidden Label" labelHidden value={50} />
      <ReactSlider noLabel ariaLabel="No Visual Label" value={50} />
    </div>
  ),
};

export const EventHandling: Story = {
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const [value, setValue] = useState(50);

    const addEvent = (event: string) => {
      setEvents((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${event}`].slice(-10));
    };

    return (
      <div style={{ padding: '2rem' }}>
        <ReactSlider
          label="Event Testing"
          value={value}
          onInput={(e) => {
            const newValue = e.detail.value;
            setValue(newValue as number);
            addEvent(`📝 input: value=${newValue}`);
          }}
          onChange={(e) => {
            addEvent(`✅ change: value=${e.detail.value}`);
          }}
          onFocus={() => {
            addEvent('🎯 focus');
          }}
          onBlur={() => {
            addEvent('👋 blur');
          }}
        />
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Event Log:</h4>
          <div style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
            {events.length === 0 ? (
              <div style={{ color: '#999' }}>Interact with the slider to see events...</div>
            ) : (
              events.map((event, i) => <div key={i}>{event}</div>)
            )}
          </div>
        </div>
        <div style={{ marginTop: '1rem', color: '#666', fontSize: '0.875rem' }}>
          Current value: <strong>{value}</strong>
        </div>
      </div>
    );
  },
};

export const CallbackProps: Story = {
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const [value, setValue] = useState(50);

    const addEvent = (event: string) => {
      setEvents((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${event}`].slice(-10));
    };

    return (
      <div style={{ padding: '2rem' }}>
        <ReactSlider
          label="Callback Props Testing"
          value={value}
          onInput={(e) => {
            const newValue = e.detail.value;
            setValue(newValue as number);
            addEvent(`📝 onInput: value=${newValue}`);
          }}
          onChange={(e) => {
            addEvent(`✅ onChange: value=${e.detail.value}`);
          }}
          onFocus={() => {
            addEvent('🎯 onFocus');
          }}
          onBlur={() => {
            addEvent('👋 onBlur');
          }}
        />
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Callback Log:</h4>
          <div style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
            {events.length === 0 ? (
              <div style={{ color: '#999' }}>Move the slider to trigger callbacks...</div>
            ) : (
              events.map((event, i) => <div key={i}>{event}</div>)
            )}
          </div>
        </div>
        <div style={{ marginTop: '1rem', color: '#666', fontSize: '0.875rem' }}>
          Current value: <strong>{value}</strong>
        </div>
      </div>
    );
  },
};

export const DualRangeEvents: Story = {
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const [value, setValue] = useState<[number, number]>([25, 75]);

    const addEvent = (event: string) => {
      setEvents((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${event}`].slice(-10));
    };

    return (
      <div style={{ padding: '2rem' }}>
        <ReactSlider
          label="Dual Range Events"
          dual
          value={value}
          onInput={(e) => {
            const newValue = e.detail.value as [number, number];
            setValue(newValue);
            addEvent(`📝 input: range=[${newValue[0]}, ${newValue[1]}]`);
          }}
          onChange={(e) => {
            const newValue = e.detail.value as [number, number];
            addEvent(`✅ change: range=[${newValue[0]}, ${newValue[1]}]`);
          }}
          onFocus={() => {
            addEvent('🎯 focus');
          }}
          onBlur={() => {
            addEvent('👋 blur');
          }}
        />
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Event Log:</h4>
          <div style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
            {events.length === 0 ? (
              <div style={{ color: '#999' }}>Drag the range handles to see events...</div>
            ) : (
              events.map((event, i) => <div key={i}>{event}</div>)
            )}
          </div>
        </div>
        <div style={{ marginTop: '1rem', color: '#666', fontSize: '0.875rem' }}>
          Current range: <strong>[{value[0]}, {value[1]}]</strong>
        </div>
      </div>
    );
  },
};

export const ControlledComponent: Story = {
  render: () => {
    const [value, setValue] = useState(50);

    return (
      <div style={{ padding: '2rem' }}>
        <ReactSlider
          label="Controlled Slider"
          value={value}
          onInput={(e) => setValue(e.detail.value as number)}
        />
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={() => setValue(0)} style={{ padding: '0.5rem 1rem' }}>
            Set to 0
          </button>
          <button onClick={() => setValue(50)} style={{ padding: '0.5rem 1rem' }}>
            Set to 50
          </button>
          <button onClick={() => setValue(100)} style={{ padding: '0.5rem 1rem' }}>
            Set to 100
          </button>
          <span style={{ marginLeft: 'auto' }}>Value: {value}</span>
        </div>
      </div>
    );
  },
};

export const FormIntegration: Story = {
  render: () => {
    const [submitted, setSubmitted] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      setSubmitted(JSON.stringify(data, null, 2));
    };

    return (
      <div style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <ReactSlider label="Volume" name="volume" value={75} />
          <ReactSlider label="Brightness" name="brightness" value={50} />
          <ReactSlider label="Price Range" name="priceRange" dual value={[25, 75]} />
          <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
            Submit
          </button>
        </form>
        {submitted && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
            <h4 style={{ marginTop: 0 }}>Submitted Data:</h4>
            <pre style={{ margin: 0, fontSize: '0.875rem' }}>{submitted}</pre>
          </div>
        )}
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <ReactSlider label="Default" value={50} />
      <ReactSlider label="Small" size="small" value={50} />
      <ReactSlider label="Large" size="large" value={50} />
      <ReactSlider label="Filled" filled value={50} />
      <ReactSlider label="Monochrome" monochrome value={50} />
      <ReactSlider label="Monochrome Filled" monochrome filled value={50} />
      <ReactSlider label="With Tooltip" showTooltip value={50} />
      <ReactSlider label="With Ticks" showTicks value={50} />
      <ReactSlider label="Dual Range" dual value={[25, 75]} />
      <ReactSlider label="Disabled" disabled value={50} />
      <ReactSlider label="Readonly" readonly value={50} />
      <ReactSlider label="Invalid" invalid errorMessage="Error message" value={50} />
    </div>
  ),
};

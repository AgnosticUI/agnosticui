import { useState } from "react";
import { ReactSlider } from "agnosticui-core/slider/react";

export default function SliderReactExamples() {
  const [eventValue, setEventValue] = useState(50);
  const [events, setEvents] = useState([]);
  const [rangeValue, setRangeValue] = useState([200, 800]);
  const [rangeEvents, setRangeEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${event}`,
    ].slice(-10));
  };

  const addRangeEvent = (event) => {
    setRangeEvents((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${event}`,
    ].slice(-10));
  };

  const handleInput = (detail) => {
    setEventValue(detail.value);
    addEvent(`📝 input: value=${detail.value}`);
  };

  const handleChange = (detail) => {
    addEvent(`✅ change: value=${detail.value}`);
  };

  const handleFocus = () => {
    addEvent('🎯 focus');
  };

  const handleBlur = () => {
    addEvent('👋 blur');
  };

  const handleRangeInput = (detail) => {
    setRangeValue(detail.value);
    const [min, max] = detail.value;
    addRangeEvent(`📝 input: range=[$${min}, $${max}]`);
  };

  const handleRangeChange = (detail) => {
    const [min, max] = detail.value;
    addRangeEvent(`✅ change: range=[$${min}, $${max}]`);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Slider</h2>
        <p className="mbs2 mbe3">Single value slider with label</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Volume"
          value={75}
        />
      </div>

      <div className="mbe4">
        <h2>Dual Range Slider</h2>
        <p className="mbs2 mbe3">Select a range with two thumbs</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Price Range ($0 - $1000)"
          dual={true}
          min={0}
          max={1000}
          value={[200, 800]}
        />
      </div>

      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">Three size options: small, default, and large</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Small"
          size="small"
          value={30}
        />
        <ReactSlider
          label="Default"
          size="default"
          value={50}
        />
        <ReactSlider
          label="Large"
          size="large"
          value={70}
        />
      </div>

      <div className="mbe4">
        <h2>Style Variants</h2>
        <p className="mbs2 mbe3">Choose from filled and monochrome variants</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Default (Primary Color)</legend>
          <ReactSlider
            label="Standard"
            value={50}
          />
        </fieldset>

        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Filled Variant</legend>
          <ReactSlider
            label="Filled Thumb"
            filled={true}
            value={60}
          />
        </fieldset>

        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Monochrome (Adapts to Dark Mode)</legend>
          <ReactSlider
            label="Monochrome"
            monochrome={true}
            value={70}
          />
        </fieldset>

        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Monochrome Filled</legend>
          <ReactSlider
            label="Monochrome Filled"
            monochrome={true}
            filled={true}
            value={80}
          />
        </fieldset>
      </div>

      <div className="mbe4">
        <h2>With Ticks and Tooltip</h2>
        <p className="mbs2 mbe3">Display tick marks and value tooltip</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="With Tick Marks"
          showTicks={true}
          tickStep={25}
          value={50}
        />
        <ReactSlider
          label="With Tooltip"
          showTooltip={true}
          value={65}
        />
        <ReactSlider
          label="Ticks + Tooltip"
          showTicks={true}
          showTooltip={true}
          tickStep={20}
          value={40}
        />
      </div>

      <div className="mbe4">
        <h2>Step Increments</h2>
        <p className="mbs2 mbe3">Control the granularity of value changes. Tick marks show the step intervals.</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Step 5"
          step={5}
          value={50}
          showTicks={true}
          tickStep={5}
        />
        <ReactSlider
          label="Step 10"
          step={10}
          value={50}
          showTicks={true}
          tickStep={10}
        />
        <ReactSlider
          label="Step 25 (Coarse)"
          step={25}
          value={50}
          showTicks={true}
          tickStep={25}
        />
      </div>

      <div className="mbe4">
        <h2>Custom Range</h2>
        <p className="mbs2 mbe3">Configure min, max, and step values</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Temperature (°C)"
          min={-20}
          max={40}
          step={5}
          value={20}
        />
        <ReactSlider
          label="Percentage"
          min={0}
          max={100}
          step={1}
          value={75}
          helpText="Adjust from 0% to 100%"
        />
      </div>

      <div className="mbe4">
        <h2>Vertical Orientation</h2>
        <p className="mbs2 mbe3">Vertical sliders for compact layouts</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}
      >
        <ReactSlider
          label="Volume"
          vertical={true}
          value={75}
        />
        <ReactSlider
          label="Bass"
          vertical={true}
          size="small"
          value={50}
        />
        <ReactSlider
          label="Treble"
          vertical={true}
          size="large"
          value={60}
        />
        <ReactSlider
          label="Balance"
          vertical={true}
          dual={true}
          value={[25, 75]}
        />
      </div>

      <div className="mbe4">
        <h2>States</h2>
        <p className="mbs2 mbe3">Disabled, readonly, and invalid states</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Disabled"
          disabled={true}
          value={50}
          helpText="This slider is disabled"
        />
        <ReactSlider
          label="Readonly"
          readonly={true}
          value={65}
          helpText="This slider is readonly"
        />
        <ReactSlider
          label="Invalid"
          invalid={true}
          errorMessage="Value must be at least 50"
          value={30}
        />
      </div>

      <div className="mbe4">
        <h2>With Help Text</h2>
        <p className="mbs2 mbe3">Provide additional guidance with help text</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Brightness"
          helpText="Adjust screen brightness level (affects battery life)"
          value={75}
        />
      </div>

      <div className="mbe4">
        <h2>Event Testing</h2>
        <p className="mbs2 mbe3">
          Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change)
          and native events work simultaneously. Drag the slider to see real-time events.
        </p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Interactive Slider"
          value={eventValue}
          onInput={handleInput}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          className="event-log"
          style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--ag-background-secondary)', borderRadius: 'var(--ag-radius-md)', border: '1px solid var(--ag-border)' }}
        >
          <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Event Log (last 10 events):</h3>
          {events.length === 0 ? (
            <div style={{ color: 'var(--ag-text-muted)', fontSize: '0.875rem', fontStyle: 'italic' }}>
              Interact with the slider to see events...
            </div>
          ) : (
            events.map((event, i) => (
              <div
                key={i}
                style={{ fontFamily: 'monospace', fontSize: '0.875rem', padding: '0.25rem 0', color: 'var(--ag-text-primary)' }}
              >
                {event}
              </div>
            ))
          )}
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
          Current value: <strong>{eventValue}</strong>
        </div>
      </div>

      <div className="mbe4">
        <h2>Dual Range Events</h2>
        <p className="mbs2 mbe3">Event handling with dual range sliders</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Price Range Filter"
          dual={true}
          min={0}
          max={1000}
          step={10}
          value={rangeValue}
          onInput={handleRangeInput}
          onChange={handleRangeChange}
        />
        <div
          className="event-log"
          style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--ag-background-secondary)', borderRadius: 'var(--ag-radius-md)', border: '1px solid var(--ag-border)' }}
        >
          <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Range Event Log (last 10 events):</h3>
          {rangeEvents.length === 0 ? (
            <div style={{ color: 'var(--ag-text-muted)', fontSize: '0.875rem', fontStyle: 'italic' }}>
              Drag the range handles to see events...
            </div>
          ) : (
            rangeEvents.map((event, i) => (
              <div
                key={i}
                style={{ fontFamily: 'monospace', fontSize: '0.875rem', padding: '0.25rem 0', color: 'var(--ag-text-primary)' }}
              >
                {event}
              </div>
            ))
          )}
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
          Current range: <strong>${rangeValue[0]} - ${rangeValue[1]}</strong>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
          These examples show customized track, thumb, and label styling.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Gradient Track"
          value={60}
          className="custom-slider-1"
        />
        <ReactSlider
          label="Large Thumb with Shadow"
          value={70}
          className="custom-slider-2"
        />
        <ReactSlider
          label="Fully Customized"
          value={50}
          className="custom-slider-3"
          helpText="Custom colors, sizing, and typography"
        />
      </div>

      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          The Slider component supports external labels with helper text, required fields, and validation states.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: '600px' }}
      >
        <div className="mbe3">
          <ReactSlider
            label="Volume Level"
            min={0}
            max={100}
            value={75}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Brightness"
            helpText="Adjust screen brightness level (affects battery life)"
            min={0}
            max={100}
            value={50}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Temperature"
            required={true}
            helpText="This field is required"
            min={-20}
            max={40}
            value={20}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Price Range"
            required={true}
            invalid={true}
            errorMessage="Please select a valid price range"
            min={0}
            max={1000}
            value={50}
          />
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: '600px' }}
      >
        <div className="mbe3">
          <ReactSlider
            label="Top Label (Default)"
            labelPosition="top"
            min={0}
            max={100}
            value={50}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Start Position"
            labelPosition="start"
            min={0}
            max={100}
            value={60}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="End Position"
            labelPosition="end"
            min={0}
            max={100}
            value={70}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Bottom Position"
            labelPosition="bottom"
            helpText="Bottom label position for alternative layouts"
            min={0}
            max={100}
            value={40}
          />
        </div>
      </div>
    </section>
  );
}

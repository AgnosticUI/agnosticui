<template>
  <section>
    <div class="mbe4">
      <h3>Basic Slider</h3>
      <p class="mbs2 mbe3">Single value slider with label</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Volume"
        :value="75"
      />
    </div>

    <div class="mbe4">
      <h3>Dual Range Slider</h3>
      <p class="mbs2 mbe3">Select a range with two thumbs</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Price Range ($0 - $1000)"
        dual
        :min="0"
        :max="1000"
        :value="[200, 800]"
      />
    </div>

    <div class="mbe4">
      <h3>Size Variants</h3>
      <p class="mbs2 mbe3">Three size options: small, default, and large</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Small"
        size="small"
        :value="30"
      />
      <VueSlider
        label="Default"
        size="default"
        :value="50"
      />
      <VueSlider
        label="Large"
        size="large"
        :value="70"
      />
    </div>

    <div class="mbe4">
      <h3>Style Variants</h3>
      <p class="mbs2 mbe3">Choose from filled and monochrome variants</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Default (Primary Color)</legend>
        <VueSlider
          label="Standard"
          :value="50"
        />
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Filled Variant</legend>
        <VueSlider
          label="Filled Thumb"
          filled
          :value="60"
        />
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome (Adapts to Dark Mode)</legend>
        <VueSlider
          label="Monochrome"
          monochrome
          :value="70"
        />
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Filled</legend>
        <VueSlider
          label="Monochrome Filled"
          monochrome
          filled
          :value="80"
        />
      </fieldset>
    </div>

    <div class="mbe4">
      <h3>With Ticks and Tooltip</h3>
      <p class="mbs2 mbe3">Display tick marks and value tooltip</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="With Tick Marks"
        show-ticks
        :tick-step="25"
        :value="50"
      />
      <VueSlider
        label="With Tooltip"
        show-tooltip
        :value="65"
      />
      <VueSlider
        label="Ticks + Tooltip"
        show-ticks
        show-tooltip
        :tick-step="20"
        :value="40"
      />
    </div>

    <div class="mbe4">
      <h3>Step Increments</h3>
      <p class="mbs2 mbe3">Control the granularity of value changes. Tick marks show the step intervals.</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Step 5"
        :step="5"
        :value="50"
        show-ticks
        :tick-step="5"
      />
      <VueSlider
        label="Step 10"
        :step="10"
        :value="50"
        show-ticks
        :tick-step="10"
      />
      <VueSlider
        label="Step 25 (Coarse)"
        :step="25"
        :value="50"
        show-ticks
        :tick-step="25"
      />
    </div>

    <div class="mbe4">
      <h3>Custom Range</h3>
      <p class="mbs2 mbe3">Configure min, max, and step values</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Temperature (°C)"
        :min="-20"
        :max="40"
        :step="5"
        :value="20"
      />
      <VueSlider
        label="Percentage"
        :min="0"
        :max="100"
        :step="1"
        :value="75"
        help-text="Adjust from 0% to 100%"
      />
    </div>

    <div class="mbe4">
      <h3>Vertical Orientation</h3>
      <p class="mbs2 mbe3">Vertical sliders for compact layouts</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 2rem; align-items: flex-end;"
    >
      <VueSlider
        label="Volume"
        vertical
        :value="75"
      />
      <VueSlider
        label="Bass"
        vertical
        size="small"
        :value="50"
      />
      <VueSlider
        label="Treble"
        vertical
        size="large"
        :value="60"
      />
      <VueSlider
        label="Balance"
        vertical
        dual
        :value="[25, 75]"
      />
    </div>

    <div class="mbe4">
      <h3>States</h3>
      <p class="mbs2 mbe3">Disabled, readonly, and invalid states</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Disabled"
        disabled
        :value="50"
        help-text="This slider is disabled"
      />
      <VueSlider
        label="Readonly"
        readonly
        :value="65"
        help-text="This slider is readonly"
      />
      <VueSlider
        label="Invalid"
        invalid
        error-message="Value must be at least 50"
        :value="30"
      />
    </div>

    <div class="mbe4">
      <h3>With Help Text</h3>
      <p class="mbs2 mbe3">Provide additional guidance with help text</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Brightness"
        help-text="Adjust screen brightness level (affects battery life)"
        :value="75"
      />
    </div>

    <div class="mbe4">
      <h3>Event Testing</h3>
      <p class="mbs2 mbe3">
        Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change)
        and native events work simultaneously. Drag the slider to see real-time events.
      </p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Interactive Slider"
        :value="eventValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div
        class="event-log"
        style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
      >
        <h4 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Event Log (last 10 events):</h4>
        <div
          v-if="events.length === 0"
          style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;"
        >
          Interact with the slider to see events...
        </div>
        <div
          v-for="(event, i) in events"
          :key="i"
          style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);"
        >
          {{ event }}
        </div>
      </div>
      <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        Current value: <strong>{{ eventValue }}</strong>
      </div>
    </div>

    <div class="mbe4">
      <h3>Dual Range Events</h3>
      <p class="mbs2 mbe3">Event handling with dual range sliders</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Price Range Filter"
        dual
        :min="0"
        :max="1000"
        :step="10"
        :value="rangeValue"
        @input="handleRangeInput"
        @change="handleRangeChange"
      />
      <div
        class="event-log"
        style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
      >
        <h4 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Range Event Log (last 10 events):</h4>
        <div
          v-if="rangeEvents.length === 0"
          style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;"
        >
          Drag the range handles to see events...
        </div>
        <div
          v-for="(event, i) in rangeEvents"
          :key="i"
          style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);"
        >
          {{ event }}
        </div>
      </div>
      <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        Current range: <strong>${{ rangeValue[0] }} - ${{ rangeValue[1] }}</strong>
      </div>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
        These examples show customized track, thumb, and label styling.
      </p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Gradient Track"
        :value="60"
        class="custom-slider-1"
      />
      <VueSlider
        label="Large Thumb with Shadow"
        :value="70"
        class="custom-slider-2"
      />
      <VueSlider
        label="Fully Customized"
        :value="50"
        class="custom-slider-3"
        help-text="Custom colors, sizing, and typography"
      />
    </div>

    <div class="mbe4">
      <h3>External Label Support</h3>
      <p class="mbs2 mbe3">
        The Slider component supports external labels with helper text, required fields, and validation states.
      </p>
    </div>
    <div class="mbe4" style="max-width: 600px;">
      <div class="mbe3">
        <VueSlider
          label="Volume Level"
          :min="0"
          :max="100"
          :value="75"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Brightness"
          help-text="Adjust screen brightness level (affects battery life)"
          :min="0"
          :max="100"
          :value="50"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Temperature"
          :required="true"
          help-text="This field is required"
          :min="-20"
          :max="40"
          :value="20"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Price Range"
          :required="true"
          :invalid="true"
          error-message="Please select a valid price range"
          :min="0"
          :max="1000"
          :value="50"
        />
      </div>
    </div>

    <div class="mbe4">
      <h3>Label Positioning</h3>
      <p class="mbs2 mbe3">
        Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
      </p>
    </div>
    <div class="mbe4" style="max-width: 600px;">
      <div class="mbe3">
        <VueSlider
          label="Top Label (Default)"
          label-position="top"
          :min="0"
          :max="100"
          :value="50"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Start Position"
          label-position="start"
          :min="0"
          :max="100"
          :value="60"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="End Position"
          label-position="end"
          :min="0"
          :max="100"
          :value="70"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Bottom Position"
          label-position="bottom"
          help-text="Bottom label position for alternative layouts"
          :min="0"
          :max="100"
          :value="40"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueSlider } from "agnosticui-core/slider/vue";

export default defineComponent({
  name: "SliderExamples",
  components: {
    VueSlider,
  },
  setup() {
    const eventValue = ref(50);
    const events = ref<string[]>([]);

    const rangeValue = ref<[number, number]>([200, 800]);
    const rangeEvents = ref<string[]>([]);

    const addEvent = (event: string) => {
      events.value = [
        ...events.value,
        `${new Date().toLocaleTimeString()}: ${event}`,
      ].slice(-10);
    };

    const addRangeEvent = (event: string) => {
      rangeEvents.value = [
        ...rangeEvents.value,
        `${new Date().toLocaleTimeString()}: ${event}`,
      ].slice(-10);
    };

    const handleInput = (detail: { value: number | [number, number] }) => {
      eventValue.value = detail.value as number;
      addEvent(`📝 input: value=${detail.value}`);
    };

    const handleChange = (detail: { value: number | [number, number] }) => {
      addEvent(`✅ change: value=${detail.value}`);
    };

    const handleFocus = () => {
      addEvent("🎯 focus");
    };

    const handleBlur = () => {
      addEvent("👋 blur");
    };

    const handleRangeInput = (detail: { value: number | [number, number] }) => {
      rangeValue.value = detail.value as [number, number];
      const [min, max] = detail.value as [number, number];
      addRangeEvent(`📝 input: range=[$${min}, $${max}]`);
    };

    const handleRangeChange = (detail: {
      value: number | [number, number];
    }) => {
      const [min, max] = detail.value as [number, number];
      addRangeEvent(`✅ change: range=[$${min}, $${max}]`);
    };

    return {
      eventValue,
      events,
      rangeValue,
      rangeEvents,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleRangeInput,
      handleRangeChange,
    };
  },
});
</script>

<style>
/* CSS Shadow Parts customization examples */

/* Custom slider 1: Gradient track */
.custom-slider-1::part(ag-slider-track) {
  height: 10px;
  background: var(--ag-background-tertiary);
}

.custom-slider-1::part(ag-slider-progress) {
  background: linear-gradient(90deg, var(--ag-green-500), var(--ag-blue-500));
}

/* Custom slider 2: Large thumb with enhanced shadow */
.custom-slider-2::part(ag-slider-thumb) {
  width: 28px;
  height: 28px;
  border: 4px solid var(--ag-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.custom-slider-2::part(ag-slider-track) {
  height: 8px;
}

/* Custom slider 3: Fully customized */
.custom-slider-3::part(ag-slider-label) {
  font-weight: 700;
  color: var(--ag-primary);
  font-size: 1.1rem;
}

.custom-slider-3::part(ag-slider-track) {
  height: 12px;
  background: var(--ag-background-tertiary);
  border-radius: var(--ag-radius-lg);
  border: 2px solid var(--ag-border);
}

.custom-slider-3::part(ag-slider-progress) {
  background: linear-gradient(
    135deg,
    var(--ag-purple-500) 0%,
    var(--ag-blue-500) 100%
  );
  border-radius: var(--ag-radius-lg);
}

.custom-slider-3::part(ag-slider-thumb) {
  width: 32px;
  height: 32px;
  background: var(--ag-white);
  border: 4px solid var(--ag-purple-500);
  box-shadow: 0 4px 16px rgba(137, 87, 229, 0.4);
}

.custom-slider-3::part(ag-slider-help-text) {
  color: var(--ag-purple-500);
  font-style: italic;
}
</style>

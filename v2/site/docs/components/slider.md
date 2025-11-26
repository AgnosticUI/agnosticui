# Slider

Slider allows a user to select a value or range of values by moving a thumb along a track. It's ideal for adjusting settings like volume, brightness, price ranges, and other numeric inputs.

## Examples

<SliderExamples />

<script setup>
import SliderExamples from '../examples/SliderExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic slider -->
    <VueSlider
      label="Volume"
      :min="0"
      :max="100"
      :value="75"
    />

    <!-- Dual range slider -->
    <VueSlider
      label="Price Range"
      dual
      :min="0"
      :max="1000"
      :value="[200, 800]"
    />

    <!-- With ticks and tooltip -->
    <VueSlider
      label="Brightness"
      :min="0"
      :max="100"
      :step="25"
      :value="50"
      show-ticks
      show-tooltip
      :tick-step="25"
    />

    <!-- Filled and monochrome variants -->
    <VueSlider
      label="Filled Variant"
      filled
      :value="60"
    />
    <VueSlider
      label="Monochrome"
      monochrome
      :value="70"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueSlider } from 'agnosticui-core/slider/vue';

export default defineComponent({
  components: { VueSlider }
});
</script>
```
:::

::: details React
```tsx
import { ReactSlider } from 'agnosticui-core/slider/react';

export default function Example() {
  const [value, setValue] = useState(50);
  const [range, setRange] = useState([200, 800]);

  return (
    <section>
      {/* Basic slider */}
      <ReactSlider
        label="Volume"
        min={0}
        max={100}
        value={value}
        onInput={(e) => setValue(e.detail.value as number)}
      />

      {/* Dual range slider */}
      <ReactSlider
        label="Price Range"
        dual
        min={0}
        max={1000}
        value={range}
        onInput={(e) => setRange(e.detail.value as [number, number])}
      />

      {/* With ticks and tooltip */}
      <ReactSlider
        label="Brightness"
        min={0}
        max={100}
        step={25}
        value={50}
        showTicks
        showTooltip
        tickStep={25}
      />

      {/* Filled and monochrome variants */}
      <ReactSlider
        label="Filled Variant"
        filled
        value={60}
      />
      <ReactSlider
        label="Monochrome"
        monochrome
        value={70}
      />
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/slider';
</script>

<section>
  <!-- Basic slider -->
  <ag-slider
    label="Volume"
    min="0"
    max="100"
    value="75"
  ></ag-slider>

  <!-- Dual range slider -->
  <ag-slider
    label="Price Range"
    dual
    min="0"
    max="1000"
    .value=${[200, 800]}
  ></ag-slider>

  <!-- With ticks and tooltip -->
  <ag-slider
    label="Brightness"
    min="0"
    max="100"
    step="25"
    value="50"
    show-ticks
    show-tooltip
    tick-step="25"
  ></ag-slider>

  <!-- Filled and monochrome variants -->
  <ag-slider
    label="Filled Variant"
    filled
    value="60"
  ></ag-slider>

  <ag-slider
    label="Monochrome"
    monochrome
    value="70"
  ></ag-slider>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the slider |
| `labelPosition` | `'top' \| 'start' \| 'end' \| 'bottom'` | `'top'` | Position of the label relative to the slider |
| `labelHidden` | `boolean` | `false` | Visually hide the label (still accessible) |
| `noLabel` | `boolean` | `false` | Remove label completely |
| `ariaLabel` | `string` | `''` | ARIA label when label is hidden |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment for value changes |
| `value` | `number \| [number, number]` | `0` | Current value (single or dual range) |
| `dual` | `boolean` | `false` | Enable dual range mode with two thumbs |
| `vertical` | `boolean` | `false` | Vertical orientation |
| `filled` | `boolean` | `false` | Filled thumb style (solid background) |
| `monochrome` | `boolean` | `false` | Monochrome color scheme (adapts to dark mode) |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Size variant |
| `disabled` | `boolean` | `false` | Disabled state prevents interaction |
| `readonly` | `boolean` | `false` | Readonly state allows focus but prevents changes |
| `required` | `boolean` | `false` | Required field indicator |
| `invalid` | `boolean` | `false` | Invalid state for validation feedback |
| `errorMessage` | `string` | `''` | Error message text displayed when invalid |
| `helpText` | `string` | `''` | Helper text displayed below slider |
| `name` | `string` | `''` | Form field name for submission |
| `showTooltip` | `boolean` | `false` | Show current value in tooltip while dragging |
| `showTicks` | `boolean` | `false` | Display tick marks along track |
| `tickStep` | `number` | `25` | Interval for tick marks |

## Events

| Event    | Framework                                             | Detail                                                  | Description                                                                                |
| -------- | ----------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `input`  | Vue: `@input`<br>React: `onInput`<br>Lit: `@input`   | `{ value: number \| [number, number] }`                 | Fired continuously while dragging the thumb. Use for real-time updates.                    |
| `change` | Vue: `@change`<br>React: `onChange`<br>Lit: `@change`| `{ value: number \| [number, number] }`                 | Fired when the thumb is released after dragging. Use for final value updates.             |
| `focus`  | Vue: `@focus`<br>React: `onFocus`<br>Lit: `@focus`   | `FocusEvent`                                            | Fired when slider receives focus.                                                          |
| `blur`   | Vue: `@blur`<br>React: `onBlur`<br>Lit: `@blur`      | `FocusEvent`                                            | Fired when slider loses focus.                                                             |

**Note:** The Slider component supports **dual-dispatch event propagation**: it dispatches both DOM CustomEvents (usable with `addEventListener`) and invokes callback props (`.onInput`, `.onChange`), giving you flexibility in how you handle events.

### Event Usage Examples

::: details Vue
```vue
<template>
  <section>
    <!-- Event handler with @input -->
    <VueSlider
      label="Volume"
      :value="volume"
      @input="handleInput"
      @change="handleChange"
    />

    <!-- v-model:value for two-way binding -->
    <VueSlider
      label="Brightness"
      v-model:value="brightness"
    />

    <!-- Dual range with events -->
    <VueSlider
      label="Price Range"
      dual
      :value="priceRange"
      @input="handleRangeInput"
      @change="handleRangeChange"
    />

    <p>Current volume: {{ volume }}</p>
    <p>Price range: ${{ priceRange[0] }} - ${{ priceRange[1] }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueSlider } from 'agnosticui-core/slider/vue';

const volume = ref(50);
const brightness = ref(75);
const priceRange = ref([200, 800]);

const handleInput = (detail: { value: number | [number, number] }) => {
  volume.value = detail.value as number;
  console.log('Input (dragging):', detail.value);
};

const handleChange = (detail: { value: number | [number, number] }) => {
  console.log('Change (released):', detail.value);
};

const handleRangeInput = (detail: { value: number | [number, number] }) => {
  priceRange.value = detail.value as [number, number];
};

const handleRangeChange = (detail: { value: number | [number, number] }) => {
  console.log('Range finalized:', detail.value);
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactSlider } from 'agnosticui-core/slider/react';

export default function Example() {
  const [volume, setVolume] = useState(50);
  const [priceRange, setPriceRange] = useState([200, 800]);

  return (
    <section>
      {/* Event handler with onInput */}
      <ReactSlider
        label="Volume"
        value={volume}
        onInput={(e) => {
          setVolume(e.detail.value as number);
          console.log('Input (dragging):', e.detail.value);
        }}
        onChange={(e) => {
          console.log('Change (released):', e.detail.value);
        }}
      />

      {/* Dual range with events */}
      <ReactSlider
        label="Price Range"
        dual
        value={priceRange}
        onInput={(e) => {
          setPriceRange(e.detail.value as [number, number]);
        }}
        onChange={(e) => {
          console.log('Range finalized:', e.detail.value);
        }}
      />

      {/* With focus/blur handlers */}
      <ReactSlider
        label="Brightness"
        value={75}
        onFocus={() => console.log('Slider focused')}
        onBlur={() => console.log('Slider blurred')}
        onInput={(e) => console.log('Value:', e.detail.value)}
      />

      <p>Current volume: {volume}</p>
      <p>Price range: ${priceRange[0]} - ${priceRange[1]}</p>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/slider';

  // Pattern 1: addEventListener (DOM events)
  const slider1 = document.querySelector('#slider1');
  slider1.addEventListener('input', (e) => {
    console.log('Input event (dragging):', e.detail.value);
  });
  slider1.addEventListener('change', (e) => {
    console.log('Change event (released):', e.detail.value);
  });

  // Pattern 2: Callback props
  const slider2 = document.querySelector('#slider2');
  slider2.onInput = (e) => {
    console.log('Input callback:', e.detail.value);
  };
  slider2.onChange = (e) => {
    console.log('Change callback:', e.detail.value);
  };

  // Pattern 3: Both patterns work (dual-dispatch)
  const slider3 = document.querySelector('#slider3');
  slider3.addEventListener('input', (e) => {
    console.log('DOM event:', e.detail.value);
  });
  slider3.onInput = (e) => {
    console.log('Callback also fired:', e.detail.value);
  };

  // Focus and blur events
  const slider4 = document.querySelector('#slider4');
  slider4.addEventListener('focus', (e) => {
    console.log('Slider focused');
  });
  slider4.addEventListener('blur', (e) => {
    console.log('Slider blurred');
  });
</script>

<section>
  <ag-slider
    id="slider1"
    label="addEventListener pattern"
    value="50"
  ></ag-slider>

  <ag-slider
    id="slider2"
    label="Callback prop pattern"
    value="50"
  ></ag-slider>

  <ag-slider
    id="slider3"
    label="Dual-dispatch (both patterns)"
    value="50"
  ></ag-slider>

  <ag-slider
    id="slider4"
    label="With focus/blur handlers"
    value="50"
  ></ag-slider>
</section>
```
:::

**Type:**

```ts
export type SliderInputEvent = CustomEvent<{ value: number | [number, number] }>;
export type SliderChangeEvent = CustomEvent<{ value: number | [number, number] }>;
```

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the slider from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-slider-container` | The outer container wrapper |
| `ag-slider-label` | The label element |
| `ag-slider-track` | The slider track background |
| `ag-slider-progress` | The progress/fill indicator |
| `ag-slider-thumb` | The draggable thumb element |
| `ag-slider-ticks` | Container for tick marks (when showTicks is true) |
| `ag-slider-tick` | Individual tick mark |
| `ag-slider-tooltip` | Tooltip showing current value (when showTooltip is true) |
| `ag-slider-help-text` | Help text element |
| `ag-slider-error` | Error message element |

### Customization Examples

```css
/* Customize track height and color */
ag-slider::part(ag-slider-track) {
  height: 8px;
  background: var(--ag-background-tertiary);
  border-radius: var(--ag-radius-full);
}

/* Customize progress/fill color */
ag-slider::part(ag-slider-progress) {
  background: linear-gradient(90deg, var(--ag-green-500), var(--ag-blue-500));
}

/* Customize thumb appearance */
ag-slider::part(ag-slider-thumb) {
  width: 24px;
  height: 24px;
  border: 4px solid var(--ag-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Style the label */
ag-slider::part(ag-slider-label) {
  font-weight: 700;
  color: var(--ag-primary);
  font-size: 1.1rem;
}

/* Customize tooltip */
ag-slider::part(ag-slider-tooltip) {
  background: var(--ag-primary);
  color: var(--ag-white);
  padding: 0.5rem 0.75rem;
  border-radius: var(--ag-radius-md);
  font-weight: 600;
}
```

## Accessibility

- Slider uses native `<input type="range">` for proper keyboard navigation
- Full keyboard support:
  - Arrow keys: Increment/decrement by step
  - Page Up/Down: Larger increments
  - Home/End: Jump to min/max
  - Tab: Navigate between thumbs in dual mode
- Proper `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes
- Live region announcements when value changes (for screen readers)
- Focus visible with customizable focus ring using design tokens
- Disabled state prevents interaction and is communicated to assistive technologies

## Dark Mode Support

All variants automatically support dark mode through CSS design tokens:

- **Default**: Uses `--ag-primary` which adapts to dark mode
- **Monochrome**: Uses `--ag-text-primary` for progress and borders
  - Light mode: Dark gray/black appearance
  - Dark mode: Light gray/white appearance
- **Monochrome + Filled**: Thumb background adapts using `--ag-text-primary`
  - Light mode: Dark filled thumb
  - Dark mode: Light filled thumb for visibility
- Thumb always uses `--ag-white` background to ensure visibility in both modes

## Notes

- **Dual Range**: When `dual={true}`, value must be a tuple `[min, max]`
- **Form Integration**: Sliders work with standard HTML forms via ElementInternals API
- **Step Snapping**: Values automatically snap to nearest step increment
- **Vertical Mode**: Set `vertical={true}` for vertical orientation (useful for volume controls)
- **Ticks**: Configure `showTicks={true}` and `tickStep` for visual markers
- **Tooltip**: Set `showTooltip={true}` to show current value while dragging
- **Lit**: Properties can be set via attributes or property binding (e.g., `.value=${50}`)
- All three implementations (Lit, React, Vue) share the same underlying styles and behavior

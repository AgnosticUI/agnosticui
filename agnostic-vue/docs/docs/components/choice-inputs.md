# Choice Inputs

`ChoiceInput` component allows you to make choices via the `checkbox` and `radio` elements.

<div class="mbs24"></div>

## Navigation

As a baseline, let's have a look at some examples from the [Web Accessibility Initiative](https://www.w3.org/WAI/)…

### Checkboxes

Looking at the [wai-aria practices checkbox example](https://www.w3.org/WAI/tutorials/forms/grouping/#checkboxes) we see that the `TAB` key is used to tab into the group of checkbox elements, but, is also used to navigate <span class="quoted">within</span> those checkbox elements.

### Radios

Looking at the [wai-aria-practices radio example](https://www.w3.org/WAI/tutorials/forms/grouping/#radio-buttons) we see that the `TAB` key is used to tab into the group of radio elements; but then, the `Arrow` keys are used to navigate <span class="quoted">within</span> those radio elements.

<div class="mbs24"></div>

AgnosticUI's `ChoiceInput` uses the same keyboard navigation strategy as above.

## Examples

<div class="mbe24"></div>

<ChoiceInputExamples />

<script setup>
import ChoiceInputExamples from '../../components/ChoiceInputExamples.vue'
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { ChoiceInput } from "agnostic-vue";
const log = (message, extra) => console.log(message, extra)
</script>
<template>
  <section>
    <ChoiceInput
      id="r1"
      type="radio"
      legend-label="Radio"
      @change="(checkedOptions) => log('ChoiceInput (radio) checkedOptions:', checkedOptions)"
      :options="[
        { name: 'solo', value: 'stevie', label: 'Stevie Wonder' },
        { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
        { name: 'solo', value: 'charlie', label: 'Charlie Wilson' },
      ]"
    />
    <ChoiceInput
      id="c1"
      type="checkbox"
      :options="[
        { name: 'bands', value: 'bonjovi', label: 'Bon Jovi' },
        { name: 'bands', value: 'stones', label: 'Rolling Stones' },
        { name: 'bands', value: 'isleybros', label: 'Isley Brothers' },
      ]"
      legend-label="Large"
      size="large"
      is-inline
    />
    <ChoiceInput
      id="c2"
      type="checkbox"
      legend-label="Checkbox with disabled options"
      :disabledOptions="['stones', 'isleybros']"
      @change="(checkedOptions) => log('ChoiceInput (checkbox) checkedOptions:', checkedOptions)"
      :options="[
        { name: 'bands', value: 'bonjovi', label: 'Bon Jovi'},
        { name: 'bands', value: 'stones', label: 'Rolling Stones' },
        { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }
        { name: 'bands', value: 'parliament', label: 'Parliament-Funkadelic' }
      ]"
    />
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/ChoiceInput.vue) 

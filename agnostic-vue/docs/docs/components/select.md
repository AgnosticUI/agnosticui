# Select

The `Select` component is a wrapper around the native `<select>` element with refinements made to its initial appearance. `Select` is best to use if when there are 4 or more options.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<SelectExamples />

<script setup>
import SelectExamples from '../../components/SelectExamples.vue'
import Alert from "../../../src/components/Alert.vue";
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
import { Select } from "agnostic-vue";
</script>
<template>
  <h2>Select</h2>
  <div class="mbs12 mbe16">
    <Select
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1"
      name="select1"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Customize the first option's text copy</h2>
  <div class="mbe16">
    <p className="mbe24">
      Pass <code>default-option-label</code> to specify the text copy to use for the first option
    </p>
    <Select
      default-option-label="Select your favorite tennis player"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1b"
      name="select1b"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Disabled select</h2>
  <div class="mbs12 mbe16">
    <Select
      is-disabled
      :options="[{ value: 'andre', label: 'Andre Agassi' }]"
      unique-id="sel2"
      name="select2"
      label-copy="Select -- example disabled"
    />
  </div>
  <h2>Small select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="small"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel3"
      name="select3"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Large select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="large"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Multiple select size 4</h2>
  <div class="mbs12 mbe16">
    <Select
      :is-multiple="true"
      :multiple-size="4"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Select.vue)

# Switch

The `Switch` component is best used to immediately toggle a single application item's state on or off. See [these guidelines](https://uxmovement.com/mobile/stop-misusing-toggle-switches/) on when to use a switch vs. checkbox.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<SwitchExamples />

<script setup>
import SwitchExamples from "../../components/SwitchExamples.vue";
import Alert from "../../../src/components/Alert.vue";
let checkedValue = false;
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
<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Switch
    </div>
    <div class="h4"><code>v-model</code> test for checked: {{ switchChecked }}</div>
    <Switch
      id="31"
      v-model="switchChecked"
      label="Switch default"
    />
    <Switch
      id="32"
      size="small"
      label="Switch small"
    />
    <Switch
      id="33"
      size="large"
      label="Switch large"
    />
    <Switch
      id="34"
      is-checked
      label="Prechecked"
    />
    <Switch
      id="35"
      is-disabled
      label="Disabled"
    />
    <Switch
      id="36"
      is-bordered
      label="Bordered"
    />
    <Switch
      id="37"
      is-action
      label="Action"
    />
    <Switch
      id="38"
      is-action
      is-bordered
      label="Action bordered"
    />
    <Switch
      id="39"
      labelPosition="right"
      label="Label on right"
    />
    <div class="h4 mbs24 mbe24">Switch label on right</div>
    <Switch
      id="40"
      is-bordered
      labelPosition="right"
      label="Label on right bordered"
    />
  </section>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { ref } from "vue";
import { Switch } from "agnostic-vue";
const switchChecked = ref(false);
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Switch.vue)

# Close

The `Close` component is often used as a supplemental button to close things.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<CloseExamples />

<script setup>
import CloseExamples from '../../components/CloseExamples.vue'
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
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Close } from "agnostic-vue";
</script>
<template>
  <h3>Default close</h3>
  <Close />
  <h3>Sizes</h3>
  <Close />
  <Close size="small" />
  <Close size="large" />
  <Close size="xlarge" />
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Close.vue)

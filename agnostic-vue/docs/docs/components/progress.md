# Progress

`Progress` components can be used to show user progress, how far along a download is, etc.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<ProgressExamples />

<script setup>
import ProgressExamples from '../../components/ProgressExamples.vue'
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
import { Progress } from "agnostic-vue";
</script>
<template>
  <Progress :value="30" :max="100" />
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Progress.vue)

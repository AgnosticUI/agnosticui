# Spinner

The `Spinner` component appears before a page or section is fully loaded, typically while awaiting an asynchronous data fetch or render cycle.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<SpinnerExamples />

<script setup>
import SpinnerExamples from '../../components/SpinnerExamples.vue'
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
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Spinner } from "agnostic-vue";
</script>
<template>
  <Spinner />
  <Spinner size="small" />
  <Spinner size="large" />
  <Spinner size="xlarge" />
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Spinner.vue)

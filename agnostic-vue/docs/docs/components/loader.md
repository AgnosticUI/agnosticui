# Loader

The `Loader` component is used to assure a user that content is being loaded — typically, when wait times are unknown due to an asynchronous data fetch or render cycle.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<LoaderExamples />

<script setup>
import LoaderExamples from '../../components/LoaderExamples.vue'
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
import { Loader } from "agnostic-vue";
</script>
<template>
  <h3>Default close</h3>
  <Loader />
  <h3>Sizes</h3>
  <Loader />
  <Loader size="small" />
  <Loader size="large" />
  <Loader size="xlarge" />
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Loader.vue)

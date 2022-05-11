# Empty States

The `EmptyState` component (also known as: zero state, first-time-user-experience, or blank state) is used when a table, list, search result, etc., has no data to be displayed. This often occurs during the first use of a product or feature, and provides an opportunity to communicate its benefits and guidance on what to do next. 

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<EmptyStateExamples />

<script setup>
import EmptyStateExamples from "../../components/EmptyStateExamples.vue";
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
<template>
  <EmptyState
    isRounded
    isBordered
  >
    <template #header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#999"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </template>
    <template #body>
      <div class="h4">
        No connections yet
      </div>
      <p
        class="mbe16"
        style="color: var(--agnostic-gray-dark);"
      >
        Click below to add some friends
      </p>
    </template>
    <template #footer>
      <Button
        isRounded
        mode="primary"
      >Invite friend</Button>
    </template>
  </EmptyState>
</template>
<script setup>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, EmptyState } from "agnostic-vue";
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/EmptyState.vue)

# Buttons

Everyone knows buttons are the life of the party :man_dancing:

<div class="mbe24"></div>

## Examples

<ButtonExamples />

<script setup>
import ButtonExamples from '../../components/ButtonExamples.vue'
</script>

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
  <div class="mbs16 mbe16">
    <Button on:click={() => console.log("Button clicked...")}>Go</Button>
    <Button isRounded>Go</Button>
    >Go</Button>
    <Button isBordered>Go</Button>
    <Button
      isBordered
      isRounded
    >Go</Button>
    <Button mode="primary">Go</Button>
    <Button
      mode="primary"
      isRounded
    >Go</Button>
    <Button mode="secondary">Go</Button>
  </div>
  <div class="mbe16">
    <Button size="small">Smaller</Button>
    <Button size="large">Larger</Button>
    <Button isDisabled>Disabled</Button>
  </div>
  <div class="mbe16">
    <Button isBlock>Go</Button>
  </div>
  <div class="mbe16">
    <ButtonGroup ariaLabel="Button group">
      <Button isGrouped isBordered>One</Button>
      <Button isGrouped isBordered>Two</Button>
      <Button isGrouped isBordered>Three</Button>
    </ButtonGroup>
  </div>
  <div class="mbe16">
    <ButtonGroup ariaLabel="Button group">
      <Button isGrouped mode="primary">One</Button>
      <Button isGrouped mode="primary">Two</Button>
      <Button isGrouped mode="primary">Three</Button>
    </ButtonGroup>
  </div>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, ButtonGroup } from "agnostic-vue";
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Button.vue)


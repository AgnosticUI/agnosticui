# Avatars

Avatars provide contextual notifications or messages with [timely information](https://www.w3.org/TR/wai-aria-practices/#Avatar).

<div class="mbe24"></div>

## Examples

<AvatarExamples />

<script setup>
import AvatarExamples from '../../components/AvatarExamples.vue';
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
  <div class="mbs12 mbe16">
    <Avatar
      text="RL"
      size="small"
    ></Avatar>
    <Avatar text="AB"></Avatar>
    <Avatar
      text="RL"
      size="large"
    ></Avatar>
    <Avatar
      text="RL"
      size="xlarge"
    ></Avatar>
  </div>
  <div class="mbs12 mbe16">
    <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
    <Avatar
      isTransparent
      imgUrl="https://joeschmoe.io/api/v1/random"
    ></Avatar>
    <Avatar
      type="success"
      imgUrl="https://joeschmoe.io/api/v1/random"
    ></Avatar>
    <Avatar
      type="info"
      imgUrl="https://joeschmoe.io/api/v1/random"
    ></Avatar>
  </div>
  <div class="mbs12 mbe16">
    <span class="mie6">
      <Avatar
        type="success"
        text="S"
      ></Avatar>
    </span>
    <span class="mie6">
      <Avatar
        type="info"
        text="I"
      ></Avatar>
    </span>
    <span class="mie6">
      <Avatar
        type="warning"
        text="W"
      ></Avatar>
    </span>
    <span class="mie6">
      <Avatar
        type="error"
        text="E"
      ></Avatar>
    </span>
  </div>
  <div class="mbe16">
    <!-- SVG icon slot -->
    <Avatar type="info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </Avatar>
  </div>
  <h3 class="mbe16">Groups</h3>
  <div class="mbe16">
    <AvatarGroup>
      <Avatar text="AB"></Avatar>
      <Avatar text="CD"></Avatar>
      <Avatar text="WX"></Avatar>
      <Avatar text="YZ"></Avatar>
    </AvatarGroup>
  </div>
  <div class="mbe16">
    <AvatarGroup>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
    </AvatarGroup>
  </div>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Avatar } from "agnostic-vue";
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Avatar.vue)
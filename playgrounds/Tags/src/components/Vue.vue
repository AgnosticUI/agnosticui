<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Close
    </div>
    <Tag class="mie6">unknown</Tag>
    <Tag is-uppercase>
      UpperCasE
    </Tag>
    <Tag
      class="mie6"
      shape="round"
      is-uppercase
    >
      round
    </Tag>
    <Tag
      class="mie6"
      shape="pill"
    >
      pill badge
    </Tag>
    <Tag
      class="mie6"
      shape="circle"
      type="error"
    >
      2
    </Tag>
    <Tag
      class="mie6"
      type="success"
    >
      success
    </Tag>
    <Tag
      class="mie6"
      type="info"
    >
      info
    </Tag>
    <Tag
      class="mie6"
      type="warning"
    >
      warning
    </Tag>
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Tag } from "agnostic-vue";
</script>

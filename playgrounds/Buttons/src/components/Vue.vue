<template>
  <section>
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Alerts
    </div>
    <div class="mbe24 flex items-center">
      <Button css="mie8">Default</Button>
      <Button isCircle>Circ</Button>
    </div>
    <div class="mbe24 flex items-center">
      <Button
        css="mie8"
        mode="primary"
      >Primary</Button>
      <Button
        css="mie8"
        mode="primary"
        size="small"
      >Small</Button>
    </div>
    <div class="mbe24 flex items-center">
      <Button
        css="mie8"
        mode="primary"
        size="large"
      >Large</Button>
      <Button
        css="mie8"
        mode="primary"
        :isRounded="true"
      >Rounded</Button>
    </div>
    <div class="mbe24 flex items-center">
      <Button
        css="mie8"
        mode="secondary"
      >Secondary</Button>
      <Button
        css="mie8"
        mode="secondary"
        :isRounded="true"
      >Secondary</Button>
    </div>
    <div class="mbe24 flex items-center">
      <Button
        css="mie8"
        mode="primary"
        :isBordered="true"
      >Bordered</Button>
      <Button
        mode="primary"
        :isBlock="true"
      >Block</Button>
    </div>
    <div class="mbe24 flex items-center">
      <Button
        css="mie8"
        mode="primary"
        :isDisabled="true"
      >Disabled</Button>
      <Button
        css="mie8"
        type="faux"
        mode="primary"
      >Faux Button (div)</Button>
    </div>
    <div class="mbe24 flex items-center">
      <Button
        css="mie8"
        mode="primary"
        :isBlank="true"
      >Blank</Button>
      <Button
        css="mie8"
        mode="primary"
        :isLink="true"
      >Button Link</Button>
      <Button
        css="mie8"
        :isSkinned="false"
      >Unskinned</Button>
    </div>
    <ButtonGroup
      css="mbe24"
      ariaLabel="Button group"
    >
      <Button :isGrouped="true">One</Button>
      <Button :isGrouped="true">Two</Button>
      <Button :isGrouped="true">Three</Button>
    </ButtonGroup>
    <ButtonGroup
      css="mbe24"
      ariaLabel="Button group"
    >
      <Button
        mode="primary"
        :isGrouped="true"
      >One</Button>
      <Button
        mode="primary"
        :isGrouped="true"
      >Two</Button>
      <Button
        mode="primary"
        :isGrouped="true"
      >Three</Button>
    </ButtonGroup>
  </section>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, ButtonGroup } from "agnostic-vue";
</script>

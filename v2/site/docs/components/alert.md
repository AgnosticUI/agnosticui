# Alert

Alerts are used to provide feedback to the user.

## Examples

<AlertExamples />

<script setup>
import AlertExamples from '../examples/AlertExamples.vue'
</script>

## Usage

```vue
<template>
  <section>
    <div class="mbe4">
      <h3>Alerts</h3>
      <VueAlert class="mbe2">Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="danger"
      >Danger alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Bordered</h3>
      <VueAlert
        class="mbe2"
        bordered
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="success"
      >Success alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Border Left</h3>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="success"
      >Success alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Rounded</h3>
      <VueAlert
        class="mbe2"
        rounded
        type="success"
      >Success alert</VueAlert>
    </div>
  </section>
</template>
```

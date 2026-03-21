<template>
  <div class="stacked-mobile mbe4">
    <VueTagFx fx="bounce" variant="success">Bounce</VueTagFx>
    <VueTagFx fx="pulse" variant="info">Pulse</VueTagFx>
    <VueTagFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="primary">Jelly</VueTagFx>
    <VueTagFx fx="shimmer" fx-speed="xl" variant="warning">Shimmer</VueTagFx>
    <VueTagFx fx="glow" variant="error">Glow</VueTagFx>
    <VueTagFx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</VueTagFx>
    <VueTagFx fx="ripple" variant="info">Ripple</VueTagFx>
    <VueTagFx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</VueTagFx>
    <VueTagFx fx="press-pop" variant="primary">Press Pop</VueTagFx>
  </div>
</template>

<script setup>
import { VueTagFx } from "agnosticui-core/tag-fx/vue";
</script>

<template>
  <div class="stacked-mobile mbe4">
      <VueBadgeFx fx="bounce" variant="success">Bounce</VueBadgeFx>
      <VueBadgeFx fx="pulse" variant="info">Pulse</VueBadgeFx>
      <VueBadgeFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="monochrome">Jelly</VueBadgeFx>
      <VueBadgeFx fx="shimmer" fx-speed="xl" variant="danger">Shimmer</VueBadgeFx>
      <VueBadgeFx fx="glow" variant="primary">Glow</VueBadgeFx>
      <VueBadgeFx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</VueBadgeFx>
      <VueBadgeFx fx="ripple" variant="info">Ripple</VueBadgeFx>
      <VueBadgeFx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</VueBadgeFx>
      <VueBadgeFx fx="press-pop" variant="default" interactive>Press Pop</VueBadgeFx>
  </div>
</template>

<script setup>
import { VueBadgeFx } from "agnosticui-core/badge-fx/vue";
</script>

<style scoped>

</style>

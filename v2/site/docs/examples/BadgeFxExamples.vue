<template>
  <div class="example-section">
    <h3>Effects</h3>
    <div class="flex-wrap">
      <VueBadgeFx fx="bounce" variant="success">Bounce</VueBadgeFx>
      <VueBadgeFx fx="pulse" variant="info">Pulse</VueBadgeFx>
      <VueBadgeFx fx="jelly" variant="warning">Jelly</VueBadgeFx>
      <VueBadgeFx fx="shimmer" variant="danger">Shimmer</VueBadgeFx>
      <VueBadgeFx fx="glow" variant="neutral">Glow</VueBadgeFx>
      <VueBadgeFx fx="flip" variant="success">Flip</VueBadgeFx>
      <VueBadgeFx fx="ripple" variant="info">Ripple</VueBadgeFx>
      <VueBadgeFx fx="highlight-sweep" variant="warning">Sweep</VueBadgeFx>
      <VueBadgeFx fx="icon-reveal" variant="danger">Icon Reveal</VueBadgeFx>
    </div>

    <h3>Interactive</h3>
    <div class="flex-wrap">
      <VueBadgeFx fx="press-pop" variant="default" interactive>Press Pop</VueBadgeFx>
      <VueBadgeFx fx="tilt-press" variant="neutral" interactive>Tilt Press</VueBadgeFx>
    </div>

    <h3>Entrance</h3>
    <div class="flex-wrap">
      <VueBadgeFx fx="slide-in" variant="success">Slide In</VueBadgeFx>
    </div>

    <h3>Easings</h3>
    <div class="flex-col">
      <div class="flex-row">
        <span class="label">Bounce:</span>
        <VueBadgeFx fx="bounce" fx-ease="bounce" variant="success">Bounce Ease</VueBadgeFx>
      </div>
      <div class="flex-row">
        <span class="label">Spring SM:</span>
        <VueBadgeFx fx="pulse" fx-ease="spring-sm" variant="info">Spring SM</VueBadgeFx>
      </div>
      <div class="flex-row">
        <span class="label">Spring MD:</span>
        <VueBadgeFx fx="jelly" fx-ease="spring-md" variant="warning">Spring MD</VueBadgeFx>
      </div>
      <div class="flex-row">
        <span class="label">Spring LG:</span>
        <VueBadgeFx fx="flip" fx-ease="spring-lg" variant="danger">Spring LG</VueBadgeFx>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VueBadgeFx } from "agnosticui-core/badge-fx/vue";
</script>

<style scoped>
.example-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
.flex-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.flex-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.label {
  width: 100px;
}
</style>

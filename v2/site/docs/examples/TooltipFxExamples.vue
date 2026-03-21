<template>
  <div class="stacked-mobile mbe4">
    <VueTooltipFx fx="bounce" content="Bounce effect">
      <VueButton>Bounce</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="pulse" content="Pulse effect">
      <VueButton variant="primary">Pulse</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" content="Jelly effect">
      <VueButton variant="success">Jelly</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="shimmer" fx-speed="xl" content="Shimmer effect">
      <VueButton variant="warning">Shimmer</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="glow" content="Glow effect">
      <VueButton variant="danger">Glow</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="flip" fx-speed="lg" fx-ease="ease-in" content="Flip effect">
      <VueButton>Flip</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="ripple" content="Ripple effect">
      <VueButton variant="primary">Ripple</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="highlight-sweep" fx-speed="lg" content="Sweep effect">
      <VueButton variant="success">Sweep</VueButton>
    </VueTooltipFx>
  </div>
</template>

<script setup>
import { VueTooltipFx } from "agnosticui-core/tooltip-fx/vue";
import { VueButton } from "agnosticui-core/button/vue";
</script>

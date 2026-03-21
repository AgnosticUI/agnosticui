<template>
  <div class="stacked-mobile mbe4">
    <VueAvatarFx fx="bounce" variant="info" text="AB" />
    <VueAvatarFx fx="pulse" variant="success" text="CD" />
    <VueAvatarFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="warning" text="EF" />
    <VueAvatarFx fx="shimmer" fx-speed="xl" variant="error" text="GH" />
    <VueAvatarFx fx="glow" variant="monochrome" text="IJ" />
    <VueAvatarFx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="info" shape="rounded" text="KL" />
    <VueAvatarFx fx="ripple" variant="success" shape="square" text="MN" />
    <VueAvatarFx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome" text="OP" />
    <VueAvatarFx fx="press-pop" variant="warning" text="QR" />
  </div>
</template>

<script setup>
import { VueAvatarFx } from "agnosticui-core/avatar-fx/vue";
</script>

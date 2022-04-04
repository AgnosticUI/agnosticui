<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Avatars
    </div>
    <Breadcrumb :routes="trailOfTennisRoutes" />
    <div class="mbe16" />
    <Breadcrumb
      type="slash"
      :routes="trailOfTennisRoutes"
    />
    <div class="mbe16" />
    <Breadcrumb
      type="bullet"
      :routes="trailOfTennisRoutes"
    />
    <div class="mbe16" />
    <Breadcrumb
      type="arrow"
      :routes="trailOfTennisRoutes"
    />
    <div class="mbe16" />
    <Breadcrumb :routes="[{ label: 'A single route looks', url: 'link-less' }]" />
    <div class="mbe16" />
    <Breadcrumb :routes="[{ label: 'First', url: '#foo' }, { label: 'Second', url: '#bar' }]" />
  </section>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Breadcrumb } from "agnostic-vue";
const trailOfTennisRoutes = [
  {
    label: "Tennis",
    url: "#tennis",
  },
  {
    label: "Superstars",
    url: "#tennis-superstars",
  },
  {
    label: "Serena Williams",
    url: "#tennis-superstars-serena",
  },
];
</script>

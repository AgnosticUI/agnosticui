# Breadcrumbs

The `Breadcrumb` component is a <span class="quoted">wayfinding</span> element that helps make users aware of their current location within an application or website.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<BreadcrumbExamples />

<script setup>
import BreadcrumbExamples from '../../components/BreadcrumbExamples.vue'
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
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
<template>
  <h2>Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb :routes="trailOfTennisRoutes" />
    <Breadcrumb
      type="slash"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="bullet"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="arrow"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb :routes="[{ label: 'A single route will look *linkless*' }]" />
    <Breadcrumb :routes="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]" />
  </div>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Breadcrumb.vue)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Breadcrumb } from "agnostic-svelte";

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
<section>
  <h2 class="mbs40 mbe24">Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb routes={ trailOfTennisRoutes } />
    <Breadcrumb
      type="slash"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb
      type="bullet"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb
      type="arrow"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb routes={[{ label: 'A single route will look *linkless*' }]} />
    <Breadcrumb routes={[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]} />
  </div>
</section>
```
</details>

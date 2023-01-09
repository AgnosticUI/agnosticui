# Tooltip

The `Tooltip` component is often used as a supplemental button to close things.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<TooltipsExamples />

<script setup>
import TooltipsExamples from '../../components/TooltipsExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex items-center mbs40 mbe24">
  <a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>


<div class="mbs32 mbe32">
  <h1>TODO</h1>
  <p>Update the codesandbox and blitz examples below</p>
</div>

<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Tooltip?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Tooltip?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<div class="mbs32 mbe32">
  <h1>TODO</h1>
  <p>React example</p>
</div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Tooltip } from "agnostic-react";
export const YourComponent = () => (
  <div>
    <Tooltip />
    <Tooltip size="small" />
    <Tooltip size="large" />
    <Tooltip size="xlarge" />
  </div>
)
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Tooltip.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Tooltip.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Tooltip } from "agnostic-vue";
</script>
<template>
  <div class="tooltips-container">
    <section class="mbs56 mbe40 flex-inline justify-between w-100">
      <Tooltip placement="top-start">
        Tooltip top-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="top">
        Tooltip top
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="top-end">
        Tooltip top-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
    </section>
    <section
      class="flex flex-column items-center"
      style="gap: var(--fluid-18);"
    >
      <Tooltip placement="left-start">
        Tooltip left-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="left">
        Tooltip left
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="left-end">
        Tooltip left-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="right-start">
        Tooltip right-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="right">
        Tooltip right
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="right-end">
        Tooltip right-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
    </section>
    <section class="mbs56 mbe40 flex-inline justify-between w-100">
      <Tooltip placement="bottom-start">
        Tooltip bottom-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="bottom">
        Tooltip bottom
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="bottom-end">
        Tooltip bottom-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
    </section>
  </div>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Tooltip.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Tooltip.stories.js)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<div class="mbs32 mbe32">
  <h1>TODO</h1>
  <p>Svelte example. Also, needs to be agnostic-svelte-ts!</p>
</div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Tooltip } from "agnostic-svelte";
</script>
<div>
  <Tooltip />
  <Tooltip size="small">
  <Tooltip size="large">
  <Tooltip size="xlarge">
</div>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Tooltip/Tooltip.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Tooltip/Tooltip.stories.js)

<div class="mbe24"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, Astro, and Angular (experimental). The following will set up Storybook and run locally:

<details class="mbs24 mbe24 disclose disclose-bordered">
<summary class="disclose-title">How to run Storybook</summary>

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
npm run storybook
```
</details>

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).

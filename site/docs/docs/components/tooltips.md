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

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Tooltip } from "agnostic-react";
export const YourComponent = () => (
  <div class="text-center tooltips-container">
    <section class="mbs56 mbe40 flex-inline justify-between w-100">
      <Tooltip placement="top-start" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (top-start). Hover me!</span>
      </Tooltip>
      <Tooltip placement="top" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (top). Hover me!</span>
      </Tooltip>
      <Tooltip placement="top-right" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (top-right). Hover me!</span>
      </Tooltip>
    </section>
    <section
      class="flex flex-column items-center"
      style={{gap: 'var(--fluid-18)'}}
    >
      <Tooltip placement="left-start" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (left-start). Hover me!</span>
      </Tooltip>
      <Tooltip placement="left" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (left). Hover me!</span>
      </Tooltip>
      <Tooltip placement="left-end" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (left-end). Hover me!</span>
      </Tooltip>
      <Tooltip placement="right-start" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (right-start). Hover me!</span>
      </Tooltip>
      <Tooltip placement="right" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (right). Hover me!</span>
      </Tooltip>
      <Tooltip placement="right-end" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (right-end). Hover me!</span>
      </Tooltip>
    </section>
    <section class="mbs56 mbe40 flex-inline justify-between w-100">
      <Tooltip placement="bottom-start" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (bottom-start). Hover me!</span>
      </Tooltip>
      <Tooltip placement="bottom" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (bottom). Hover me!</span>
      </Tooltip>
      <Tooltip placement="bottom-end" label="Tooltip hover text…">
        <span className='demo-tooltip'>Tooltip (bottom-end). Hover me!</span>
      </Tooltip>
    </section>
  </div>
)
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Tooltip.tsx)

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

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Tooltip.vue)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<div class="mbs32 mbe32">
  <p>Note that Tooltips is only implemneted in the `agnostic-svelte-ts` package (intended to replace agnostic-svelte at some point).</p>
</div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  // agnostic-svelte-ts, at some point, will become agnostic-svelte
  import 'agnostic-svelte-ts/css/common.min.css';
  import { Tooltip } from "agnostic-svelte-ts";
</script>
<div class="text-center tooltips-container">
  <section class="mbs56 mbe40 flex-inline justify-between w-100">
    <Tooltip placement="top-start">
      Tooltip top-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="top">
      Tooltip top
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="top-end">
      Tooltip top-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
  </section>
  <section
    class="flex flex-column items-center"
    style="gap: var(--fluid-18);"
  >
    <Tooltip placement="left-start">
      Tooltip left-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="left">
      Tooltip left
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="left-end">
      Tooltip left-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="right-start">
      Tooltip right-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="right">
      Tooltip right
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="right-end">
      Tooltip right-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
  </section>
  <section class="mbs56 mbe40 flex-inline justify-between w-100">
    <Tooltip placement="bottom-start">
      Tooltip bottom-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="bottom">
      Tooltip bottom
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="bottom-end">
      Tooltip bottom-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
  </section>
</div>
```
</details>

Svelte (Typescript): [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte-ts/src/lib/components/Tooltip/Tooltip.svelte)

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

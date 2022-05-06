# AgnosticUI Component Library

<div class="mbs16"></div>

AgnosticUI is a library of UI component primitives that work in React, Vue, Svelte, and Angular (experimental)!

<div class="mbs24"></div>

### Just want to see it in action?

<div class="flex mbe24">
  <p class="is16">Check out these live <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://vuejs.org/" target="_blank">Vue</a>, and <a href="https://svelte.dev/" target="_blank">Svelte</a> signup form playgrounds leveraging <a href="https://vestjs.dev/" target="_blank">Vest</a> 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/SignupForm?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/SignupForm?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

## Installation

_Before you setup AgnosticUI, we recommend you first have a look at the [browsers supported](#browsers-supported) list._

<div class="mbs16"></div>

### Vue 3

**AgnosticUI supports Vue 3 only!**

<div class="mbe24"></div>

To use the `agnostic-vue` package in your project do the following:

<div class="mbe16"></div>

- **Step 1:** Import AgnosticUI's common CSS 

```vue
<script>
import 'agnostic-vue/dist/common.min.css'
// ...
</script>
```

- **Step 2:** Import the AgnosticUI component-specific CSS

```vue
<script>
// ...
import "agnostic-vue/dist/index.css";
</script>
```

- **Step. 3:** Import the AgnosticUI component(s) you'd like to use and declare component prop

```vue
<script>
// ...
import { Alert } from "agnostic-vue";
export default {
  name: "AlertExample",
  components: {
    Alert,
  },
};
</script>
```

- **Step 4:** Use in your template

```vue
<template>
  <Alert
    isBorderLeft
    type="info"
  >Example alert</Alert>
</template>
```

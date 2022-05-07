# Header

The `Header` component is used as a foundation for top-level application navigation.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<HeaderExamples />

<script setup>
import HeaderExamples from '../../components/HeaderExamples.vue'
import Alert from "../../../src/components/Alert.vue";
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
import { Header, HeaderNav, HeaderNavItem } from "agnostic-vue";
</script>
<template>
  <h3 class="mbe12">Header defaults to space between</h3>
  <Header>
    <template v-slot:logoleft>
      <a href="https://web.dev/">web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav>
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
    <template v-slot:logoright>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </template>
  </Header>
  <h3 class="mbe12">Header content justify left</h3>
  <p class="mbe16">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
    <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
    at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
    in devtools to see an example.
  </p>
  <Header isHeaderContentStart>
    <template v-slot:logoleft>
      <a href="https://web.dev/">web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-flex-fill">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
    <template v-slot:logoright>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </template>
  </Header>
  <h3 class="mbe12">Header content justify right</h3>
  <p class="mbe16">Pass in <code>isHeaderContentEnd</code> and apply
    <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
  </p>
  <Header isHeaderContentEnd>
    <template v-slot:logoleft>
      <a
        class="flex-fill"
        href="https://web.dev/"
      >web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-mbe16">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
    <template v-slot:logoright>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </template>
  </Header> 
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Header.vue)

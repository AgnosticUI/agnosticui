# Icon

The `Icon` component is a light-weight bounding box around your SVG icon.

<div class="mbs24"></div>

## Examples

You should be able to pass in any well constructored icon set, but here are a few examples of a home icon using some popular icons: Material, Octicons, and FontAwesome in order below:

<div class="mbe24"></div>

<IconExamples />

<script setup>
import IconExamples from '../../components/IconExamples.vue'
import Alert from "../../../src/components/Alert.vue";
</script>

<div class="mbe24"></div>

You might want to have a look at [Which SVG technique performs best for way too many icons?](https://cloudfour.com/thinks/svg-icon-stress-test/#takeaways), and consider which technique would work best for your project.

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
import { Icon } from "agnostic-vue";
import IconExFontAwesome from "./IconExFontAwesome.vue";
import IconExMaterial from "./IconExMaterial.vue";
import IconExOcticon from "./IconExOcticon.vue";
</script>
<template>
  <section>
    <div class="flex">
      <div class="mie8">
        <Icon>
          <icon-ex-font-awesome />
        </Icon>
      </div>
      <div class="mie8">
        <Icon>
          <icon-ex-octicon />
        </Icon>
      </div>
      <div class="mie8">
        <Icon>
          <icon-ex-material />
        </Icon>
      </div>
    </div>
  </section>
  <section class="mbs24">
    <p>You can also pass <code>size</code> and <code>type</code></p>
    <div class="mbe16">
      <Icon
        :size="48"
        type="info"
      >
        <icon-ex-font-awesome />
      </Icon>
      <span class="mie8" />
      <Icon
        :size="48"
        type="success"
      >
        <icon-ex-font-awesome />
      </Icon>
      <span class="mie8" />
      <Icon
        :size="48"
        type="warning"
      >
        <icon-ex-font-awesome />
      </Icon>
      <span class="mie8" />
      <Icon
        :size="48"
        type="error"
      >
        <icon-ex-font-awesome />
      </Icon>
    </div>
  </section>
</template>

```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Icon.vue)

# Disclose

The `Disclose` component is often used as a supplemental button to Disclose things.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<DiscloseExamples />

<script setup>
import DiscloseExamples from '../../components/DiscloseExamples.vue'
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
import { Disclose } from "agnostic-vue";
</script>
<template>
  <section>
    <h3>Disclose default</h3>
    <Disclose
      is-open
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player. 
    </Disclose>
    <Disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    </Disclose>
    <Disclose title="Steffi Graf">
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    </Disclose>
    <Disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    </Disclose>
  </section>
  <section class="mbe48">
    <h3>Disclose with background</h3>
    <p class="mbs16 mbe24">The earlier example favors using
      a <span class="quoted">clean</span> if minimalist style. However, there
      may be use cases that that require a stronger visual affordance
      for the disclose elements themeselves. If that's the case, you
      can utilize the <code>isBackground</code> prop which achieves
      the following:
    </p>
    <Disclose
      isBackground
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Serena Williams"
    >
      Serena Jameka Williams is an American professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Steffi Graf"
    >
      Stefanie Maria Graf is a German former professional tennis player.
    </Disclose>
    <Disclose
      isBackground
      title="Andre Agassi"
    >
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    </Disclose>
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Disclose.vue)

<script>
import Vue from "vue";

// Import the required AgnosticUI global common CSS
import "@/css/common.min.css";

// import { FccButton } from "@/entry.esm";
// Uncomment import and local "components" registration if library is not registered globally.
// import { installAgnosticUiVueSample } from '@/entry.esm';

export default Vue.extend({
  name: "ServeDev",
  // components: {
  //  installAgnosticUiVueSample,
  // }
  // components: {
  //   FccButton,
  // },
});
</script>

  <style>
    /* these styles are purely demonstration related styles only */
    body {
      width: 600px;
      margin: 40px auto;
    }
    h1, h3 {
      display: block;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    button:not(:first-child) {
      margin-left: 0.25rem;
    }
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
  </style>
<template>
  <div id="app">
    <h1>AgnosticUI Vue</h1>
    <h3>Default Buttons</h3>
    <section>
      <Button @click="clickHandler">Go</Button>
      <Button :isBordered="true">Go</Button>
      <Button isBlank>Go</Button>
      <Button isBlock>Go</Button>
      <Button isRounded>Go</Button>
      <Button isRaised isRounded>Go</Button>
      <Button isBordered isRounded>Go</Button>
    </section>
    <h3>Primary</h3>
    <section>
      <Button mode="primary">Go</Button>
      <Button mode="primary" :isBordered="true">Go</Button>
      <Button mode="primary" isBlank>Go</Button>
      <Button mode="primary" isBlock>Go</Button>
      <Button mode="primary" isRounded>Go</Button>
      <Button mode="primary" isRaised isRounded>Go</Button>
      <Button mode="primary" isBordered isRounded>Go</Button>
    </section>
    <h3>Secondary</h3>
    <section>
      <Button mode="secondary">Go</Button>
      <Button mode="secondary" :isBordered="true">Go</Button>
      <Button mode="secondary" isBlank>Go</Button>
      <Button mode="secondary" isBlock>Go</Button>
      <Button mode="secondary" isRounded>Go</Button>
      <Button mode="secondary" isRaised isRounded>Go</Button>
      <Button mode="secondary" isBordered isRounded>Go</Button>
    </section>
    <h3>Misc</h3>
    <section>
      <Button :isDisabled="true">Go</Button>
      <Button mode="primary" isDisabled>Go</Button>
      <Button mode="secondary" isDisabled>Go</Button>
      <Button size="small">Go</Button>
      <Button size="large">Go</Button>
      <Button :isSkinned="false">No Skin</Button>
    </section>
  </div>
</template>

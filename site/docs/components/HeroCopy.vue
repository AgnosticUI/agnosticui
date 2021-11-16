<template>
  <p :class="$style.heroMessage">
    AgnosticUI already supports: <a
      href="https://reactjs.org/"
      target="_blank"
    >React</a>, <a
      href="https://vuejs.org/"
      target="_blank"
    >Vue.js</a>,
    <a
      href="https://angular.io/"
      target="_blank"
    >Angular</a>, and <a
      href="https://svelte.dev/"
      target="_blank"
    >Svelte</a>.
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
      target="_blank"
    >Web Components</a>,
    <a
      href="https://reactnative.dev/"
      target="_blank"
    >React Native</a>, and more are on the way. <a href="http://vanilla-js.com/">Vanilla JavaScript</a> <span class="quoted">just works</span>—go figure!
  </p>
</template>

<style module>
.heroMessage {
  margin-block-end: var(--fluid-24);
}
</style>

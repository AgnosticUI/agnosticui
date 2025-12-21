---
home: true
tagline: One branded theme…all the frameworks! UI components that work in React, Vue 3, and Svelte!
actionText: Get Set Up Now
actionLink: /docs/setup.html
features:
  - title: React, Vue 3, Svelte, Astro, and Angular
    details: UI components you can use across multiple projects!
  - title: Synchronized Theming
    details:  Brand your UI components once, then watch them work in all your projects!
  - title: Embraces the Platform
    details: Semantic and accessible HTML. Unprocessed CSS. Code on the platform and towards upcoming web standards.
footer: Apache 2.0 Licensed | Copyright © 2021 Rob Levin
---

<div class="flex justify-center mbs64 mbe32">
  <p class="is16">Live <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://vuejs.org/" target="_blank">Vue</a>, and <a href="https://svelte.dev/" target="_blank">Svelte</a> signup form playgrounds leveraging <a href="https://vestjs.dev/" target="_blank">Vest</a>—side-by-side on a single <a href="https://astro.build/" target="_blank">Astro</a> page 🚀 💥</p>
</div>
<div class="playgrounds flex justify-center mbe48">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/SignupForm?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/SignupForm?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>
<div class="flex flex-column items-center mbe32">
  <a href="https://astro.build/" class="text-centered" target="_blank"><img style="width: 10rem;" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="m0">HTML-First <a href="https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-astro">agnostic-astro</a> is in the works 👀 🚀</p>
</div>
<Frameworks />

<script>
import Frameworks from './components/Frameworks.vue'

export default {
  components: { Frameworks }
}
</script>


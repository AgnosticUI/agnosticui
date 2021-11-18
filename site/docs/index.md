---
home: true
# heroImage: /logo.png
# heroAlt: Logo image
# heroText: Hero Title
tagline: One stylesheet…all the frameworks.
actionText: Get Started
actionLink: /guide/
# features:
#   - title: Simplicity First
#     details: Minimal setup with markdown-centered project structure helps you focus on writing.
#   - title: Vue-Powered
#     details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
#   - title: Performant
#     details: VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2021 Rob Levin
---

<Test />
<!-- <Frameworks /> -->

<!-- <HeroCopy />

<github-button href="https://github.com/ntkme">Follow @ntkme</github-button> -->

<script>
// import ComponentInHeader from './components/ComponentInHeader.vue'
// import Frameworks from './components/Frameworks.vue'
// import HeroCopy from './components/HeroCopy.vue'
// import GithubButton from 'vue-github-button'
import Test from './components/Test.vue'

export default {
  components: { Test/* , Frameworks, HeroCopy, GithubButton*/ }
  // mounted () {
  //   document.querySelector(`.${this.$style.example}`)
  //     .textContent = 'This is rendered by inline script and styled by inline CSS'
  // }
}
// export default {
//   props: ['slot-key'],
//   components: { ComponentInHeader },
//   mounted () {
//     document.querySelector(`.${this.$style.example}`)
//       .textContent = 'This is rendered by inline script and styled by inline CSS'
//   }
// }
</script>

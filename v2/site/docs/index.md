---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AgnosticUI Local"
  text: "The UI kit that lives in your project."
  tagline: Local components. AI-friendly. React. Vue. Svelte. Astro. Angular. Solid. Preact. And more.

features:
  - title: Local Components
    details: The entire UI library lives in your project—no MCP setup, node_modules, or npm. Every component AI-readable and yours to customize.
  - title: AI Can Actually Help
    details: No opaque npm packages. No wasted tokens on documentation. No context limits. No hallucinated APIs. Just instant, accurate help.
  - title: Smooth Migration Path
    details: Already using Shadcn, MUI, or Chakra? Migrate components one at a time. Works with React, Vue, Lit, and Svelte—your timeline, your rules.
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CliPreview from './.vitepress/theme/components/CliPreview.vue'
import CodePreview from './.vitepress/theme/components/CodePreview.vue'
import { VueButtonFx } from 'agnosticui-core/button-fx/vue'
import { VueScrollProgress } from 'agnosticui-core/scroll-progress/vue'
import { VueScrollToButton } from 'agnosticui-core/scroll-to-button/vue'

const showDotTrail = ref(false)

const handleScroll = () => {
  showDotTrail.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<div v-if="showDotTrail" style="position: fixed; top: 5rem; right: 2rem; z-index: 100; animation: fadeIn 0.3s ease-out;">
  <VueScrollProgress mode="dot-trail" :dots="7" badge-variant="primary" />
</div>
<VueScrollToButton :scrollThreshold="300" />

<div class="hero-buttons">
  <VueButtonFx
    fx="jelly"
    fx-ease="spring-lg"
    fx-speed="xl"
    variant="primary"
    shape="capsule"
    size="xl"
    class="jumbo-button"
    @click="() => window.location.href = '/components/button'"
  >
    Show me the components!
  </VueButtonFx>
  <VueButtonFx
    fx="pulse-wobble"
    fx-speed="xl"
    variant="monochrome"
    shape="capsule"
    size="xl"
    class="jumbo-button"
    @click="() => window.location.href = '/installation'"
  >
    View Full Installation Guide →
  </VueButtonFx>
</div>

<CliPreview />
<CodePreview />

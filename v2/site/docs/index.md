---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AgnosticUI Local"
  text: "The UI kit that lives in your project."
  tagline: Local components. AI-friendly. React. Vue. Svelte. Astro. Angular. Solid. Preact. And more.
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

<CliPreview />

<div class="custom-features">
  <div class="custom-feature">
    <h3>Local Components</h3>
    <p>The entire UI library lives in your project—no MCP setup, node_modules, or npm. Every component AI-readable and yours to customize.</p>
  </div>
  <div class="custom-feature">
    <h3>AI Can Actually Help</h3>
    <p>No opaque npm packages. No wasted tokens on documentation. No context limits. No hallucinated APIs. Just instant, accurate help.</p>
  </div>
  <div class="custom-feature">
    <h3>Smooth Migration Path</h3>
    <p>Already using Shadcn, MUI, or Chakra? Migrate components one at a time. Works with React, Vue, Lit, and Svelte—your timeline, your rules.</p>
  </div>
</div>

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

<CodePreview />

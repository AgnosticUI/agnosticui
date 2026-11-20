---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AgnosticUI"
  text: "Local Components & A2UI v1.0 Generative UI"
  tagline: >
    Own your component source locally via CLI, or stream schema-enforced
    A2UI v1.0 agent interfaces across Lit, React, and Vue—powered by 22
    runtime skins and native FACE form validation.
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'
import CliPreview from './.vitepress/theme/components/CliPreview.vue'
import CodePreview from './.vitepress/theme/components/CodePreview.vue'
import { VueButtonFx } from 'agnosticui-core/button-fx/vue'
import { VueScrollProgress } from 'agnosticui-core/scroll-progress/vue'
import { VueScrollToButton } from 'agnosticui-core/scroll-to-button/vue'

const router = useRouter()

const showDotTrail = ref(false)

const handleScroll = () => {
  showDotTrail.value = window.scrollY > 50
}

const openLiveStudio = () => {
  window.open('https://a2ui-support-center-demo.netlify.app', '_blank', 'noopener,noreferrer')
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
<VueScrollToButton :scrollThreshold="300" shape="rounded" />

<CliPreview />

<div class="custom-features">
  <div class="custom-feature">
    <h3>1. Local Components via CLI</h3>
    <p>The entire UI library lives in your project (React, Vue, Lit, Svelte, Solid, and more). No opaque black boxes—every component is readable, customizable, and AI-friendly.</p>
  </div>
  <div class="custom-feature">
    <h3>2. <a href="https://a2ui.org" target="_blank" rel="noopener noreferrer">A2UI v1.0</a> Generative UI</h3>
    <p>Stream schema-validated agent interfaces at runtime with <code>@agnosticui/a2ui-lit</code>, <code>-react</code>, and <code>-vue</code>. Includes native FACE validation, two-way <code>@path</code> binding, and 29 runtime skins.</p>
  </div>
  <div class="custom-feature">
    <h3>3. Arm Your Agent (Zero Hallucinations)</h3>
    <p>Pair <code>ag context</code> for local builds with our machine-readable <code>agnosticui-catalog.json</code> and <code>SKILL.md</code> for A2UI agents—deterministic schemas instead of fragile prompt guesswork.</p>
  </div>
</div>

<div class="hero-buttons">
  <VueButtonFx
    fx="jelly"
    fx-ease="spring-lg"
    fx-speed="xl"
    variant="primary"
    shape="capsule"
    size="lg"
    class="jumbo-button"
    @click="() => router.go('/components/button')"
  >
    Show me the components!
  </VueButtonFx>
  <VueButtonFx
    fx="pulse-wobble"
    fx-speed="xl"
    variant="monochrome"
    shape="capsule"
    size="lg"
    class="jumbo-button"
    @click="() => router.go('/docs/a2ui')"
  >
    Explore A2UI v1.0 →
  </VueButtonFx>
  <VueButtonFx
    fx="pulse-wobble"
    fx-speed="xl"
    variant="secondary"
    bordered
    shape="capsule"
    size="lg"
    class="jumbo-button"
    @click="openLiveStudio"
  >
    Live A2UI Studio ↗
  </VueButtonFx>
</div>

<CodePreview />

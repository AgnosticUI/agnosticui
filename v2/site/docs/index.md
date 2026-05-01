---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AgnosticUI Local"
  text: "The AI-native UI kit"
  tagline: >
    Local source lives in your codebase. Our AG Context Generator arms your
    favorite LLM with exact component locations, types, and usage.
    Claude. Codex. Copilot. Gemini. And more.
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
    <h3>Local Components</h3>
    <p>The entire UI library lives in your project (React, Vue, Lit, Svelte, Solid, and more). No MCP setup, node_modules, or npm. Every component is AI-readable.</p>
  </div>
  <div class="custom-feature">
    <h3>Arm Your Agent</h3>
    <p>Run <code>ag context</code> once and any AI coding assistant (Claude, Copilot, Cursor, Windsurf, Gemini) gets your exact prop types, import paths, and playbook blueprints. No hallucinated APIs.</p>
  </div>
  <div class="custom-feature">
    <h3>AI Can Actually Help</h3>
    <p>No opaque npm packages. No wasted tokens on documentation. No context limits. Just accurate, instant help every session.</p>
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
    @click="() => router.go('/playbooks/')"
  >
    View Agentic Playbooks →
  </VueButtonFx>
</div>

<CodePreview />

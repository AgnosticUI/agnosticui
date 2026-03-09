<template>
  <Teleport to="body">
    <div v-if="isPlaybooksSection">
      <!-- Backdrop -->
      <Transition name="pf-backdrop">
        <div
          v-if="panelOpen"
          class="pf-backdrop"
          aria-hidden="true"
          @click="panelOpen = false"
        ></div>
      </Transition>

      <!-- Slide-in panel -->
      <Transition name="pf-panel">
        <div
          v-if="panelOpen"
          class="pf-panel"
          role="dialog"
          aria-label="Theme Playground"
          aria-modal="true"
        >
          <div class="pf-panel-header">
            <span class="pf-panel-title">
              <VueIcon size="16" no-fill class="pf-panel-title-icon">
                <Palette :size="16" />
              </VueIcon>
              Theme Playground
            </span>
            <VueButton
              variant="monochrome"
              size="small"
              shape="rounded"
              :bordered="false"
              aria-label="Close theme panel"
              @click="panelOpen = false"
            >
              <VueIcon size="16" no-fill><X :size="16" /></VueIcon>
            </VueButton>
          </div>
          <div class="pf-panel-body">
            <PlaybookThemePanel />
          </div>
        </div>
      </Transition>

      <!-- FAB -->
      <button
        class="pf-fab"
        :class="{ 'pf-fab--open': panelOpen }"
        :aria-label="panelOpen ? 'Close theme panel' : 'Open theme panel'"
        :aria-expanded="panelOpen"
        @click="panelOpen = !panelOpen"
      >
        <VueIcon size="22" no-fill>
          <Palette v-if="!panelOpen" :size="22" />
          <X v-else :size="22" />
        </VueIcon>
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'
import { VueIcon } from 'agnosticui-core/icon/vue'
import VueButton from 'agnosticui-core/button/vue'
import { Palette, X } from 'lucide-vue-next'
import PlaybookThemePanel from '../../../components/PlaybookThemePanel.vue'

const route = useRoute()
const panelOpen = ref(false)

const isPlaybooksSection = computed(() => route.path.startsWith('/playbooks'))

function handleKeydown(e) {
  if (e.key === 'Escape' && panelOpen.value) panelOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
/* FAB */
.pf-fab {
  position: fixed;
  bottom: 1.75rem;
  right: 1.75rem;
  z-index: 60;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--ag-primary, var(--vp-c-brand-1));
  color: var(--ag-primary-fg, #fff);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.22);
  transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
}

.pf-fab:hover {
  background: var(--ag-primary-dark, var(--vp-c-brand-2));
  transform: scale(1.07);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
}

.pf-fab:focus-visible {
  outline: 3px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.pf-fab--open {
  background: var(--vp-c-text-2);
}

/* Backdrop */
.pf-backdrop {
  position: fixed;
  inset: 0;
  z-index: 55;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

/* Panel */
.pf-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 56;
  width: min(420px, 92vw);
  background: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.14);
}

.pf-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
}

.pf-panel-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.pf-panel-title-icon {
  color: var(--ag-primary, var(--vp-c-brand-1));
}

.pf-panel-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem;
  overscroll-behavior: contain;
}

/* Transitions */
.pf-backdrop-enter-active,
.pf-backdrop-leave-active {
  transition: opacity 0.22s ease;
}
.pf-backdrop-enter-from,
.pf-backdrop-leave-to {
  opacity: 0;
}

.pf-panel-enter-active,
.pf-panel-leave-active {
  transition: transform 0.26s cubic-bezier(0.4, 0, 0.2, 1);
}
.pf-panel-enter-from,
.pf-panel-leave-to {
  transform: translateX(100%);
}
</style>

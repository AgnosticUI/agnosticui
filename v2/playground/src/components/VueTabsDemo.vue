<template>
  <div v-if="!isReady">Loading Tabs components...</div>
  <div v-else class="vue-demo">
    <h3>Vue Tabs Component</h3>
    <p class="demo-description">
      Demonstrating Vue wrapper with reactive data and computed properties.
      Current active tab: <strong>{{ activeTab }}</strong>
    </p>

    <VueTabs
      activation="automatic"
      :active-tab="activeTab"
      orientation="horizontal"
      aria-label="Vue demo tabs"
      @tab-change="handleTabChange"
    >
      <VueTab panel="vue-panel1">
        🎨 Design
      </VueTab>
      <VueTab panel="vue-panel2">
        ⚡ Performance
      </VueTab>
      <VueTab panel="vue-panel3">
        🔧 Tools
      </VueTab>

      <VueTabPanel id="vue-panel1">
        <h4>Design System</h4>
        <p>Vue 3 Composition API provides reactive data binding with the web component.</p>
        <p>This demonstrates seamless integration between Vue's reactivity and custom elements.</p>
        <p>Tab count: {{ tabCount }}</p>
      </VueTabPanel>

      <VueTabPanel id="vue-panel2">
        <h4>Performance Metrics</h4>
        <p>Automatic activation mode means arrow keys immediately switch tabs.</p>
        <p>Vue's reactive system updates the activeTab value in real-time.</p>
        <p>Total interactions: {{ interactionCount }}</p>
      </VueTabPanel>

      <VueTabPanel id="vue-panel3">
        <h4>Development Tools</h4>
        <p>Vue DevTools can inspect component state and track changes.</p>
        <p>The web component events integrate perfectly with Vue's event system.</p>
        <p>Last activated: {{ lastActivatedTime }}</p>
      </VueTabPanel>
    </VueTabs>

    <div class="vue-features">
      <h4>Vue Features:</h4>
      <ul>
        <li>Vue 3 Composition API with reactive data</li>
        <li>TypeScript support for props and events</li>
        <li>Computed properties and watchers</li>
        <li>Scoped slots and component composition</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { VueTabs, VueTab, VueTabPanel } from 'agnosticui-core/tabs/vue';

// Import web components
import 'agnosticui-core';

const isReady = ref(false);
const activeTab = ref(0);
const interactionCount = ref(0);
const lastActivatedTime = ref('Never');

const tabCount = computed(() => 3);

const handleTabChange = (detail: { activeTab: number; previousTab: number }) => {
  activeTab.value = detail.activeTab;
  interactionCount.value++;
  lastActivatedTime.value = new Date().toLocaleTimeString();
  console.log('Vue: Tab changed from', detail.previousTab, 'to', detail.activeTab);
};

onMounted(async () => {
  try {
    await Promise.all([
      customElements.whenDefined('ag-tabs'),
      customElements.whenDefined('ag-tab'),
      customElements.whenDefined('ag-tab-panel')
    ]);
    isReady.value = true;
  } catch (error) {
    console.error('Error waiting for ag-tabs components:', error);
    isReady.value = true;
  }
});
</script>

<style scoped>
.vue-demo {
  padding: 1.5rem;
  background: var(--c-card-bg);
  border: 1px solid var(--c-border);
  border-radius: 0.5rem;
}

.demo-description {
  color: var(--c-text-light);
  margin-bottom: 1rem;
}

.vue-features {
  margin-top: 1rem;
  padding: 1rem;
  background: var(--c-bg-secondary);
  border-radius: 0.375rem;
}

.vue-features h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.vue-features ul {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.85rem;
  color: var(--c-text-light);
}
</style>
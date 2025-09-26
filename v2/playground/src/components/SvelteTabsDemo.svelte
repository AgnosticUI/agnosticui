<script lang="ts">
  import { onMount } from 'svelte';
  import { Puzzle, Package, Zap } from 'lucide-svelte';

  // Import web components
  import 'agnosticui-core';

  let isReady = false;
  let activeTab = 0;
  let activationCount = 0;
  let tabsElement: HTMLElement;

  const handleTabChange = (event: CustomEvent) => {
    const { activeTab: newActiveTab, previousTab } = event.detail;
    activeTab = newActiveTab;
    activationCount++;
    console.log('Svelte: Tab changed from', previousTab, 'to', newActiveTab);
  };

  onMount(async () => {
    try {
      await Promise.all([
        customElements.whenDefined('ag-tabs'),
        customElements.whenDefined('ag-tab'),
        customElements.whenDefined('ag-tab-panel')
      ]);
      isReady = true;
    } catch (error) {
      console.error('Error waiting for ag-tabs components:', error);
      isReady = true;
    }
  });

  $: currentTabName = activeTab === 0 ? 'Components' : activeTab === 1 ? 'Stores' : 'Actions';
</script>

{#if !isReady}
  <div>Loading Tabs components...</div>
{:else}
  <div class="svelte-demo">
    <h3>Svelte Tabs Component</h3>
    <p class="demo-description">
      Demonstrating direct web component usage with Svelte reactivity.
      Current tab: <strong>{currentTabName}</strong> (activations: {activationCount})
    </p>

    <ag-tabs
      bind:this={tabsElement}
      activation="manual"
      active-tab={activeTab}
      orientation="horizontal"
      aria-label="Svelte demo tabs"
      on:tab-change={handleTabChange}
    >
      <ag-tab slot="tab" panel="svelte-panel1">
        <Puzzle size={16} style="margin-right: 0.5rem; display: inline-block;" />
        Components
      </ag-tab>
      <ag-tab slot="tab" panel="svelte-panel2">
        <Package size={16} style="margin-right: 0.5rem; display: inline-block;" />
        Stores
      </ag-tab>
      <ag-tab slot="tab" panel="svelte-panel3">
        <Zap size={16} style="margin-right: 0.5rem; display: inline-block;" />
        Actions
      </ag-tab>

      <ag-tab-panel slot="panel" id="svelte-panel1">
        <h4>Svelte Components</h4>
        <p>Svelte uses web components directly without wrappers, providing optimal performance.</p>
        <p>The component compiler automatically handles event binding and property updates.</p>
        <p>This approach minimizes bundle size and maximizes runtime performance.</p>
      </ag-tab-panel>

      <ag-tab-panel slot="panel" id="svelte-panel2">
        <h4>Reactive Stores</h4>
        <p>Svelte's reactive stores work seamlessly with web component events.</p>
        <p>Store values can be bound directly to component properties for automatic updates.</p>
        <p>Current activation count from reactive variable: {activationCount}</p>
      </ag-tab-panel>

      <ag-tab-panel slot="panel" id="svelte-panel3">
        <h4>Custom Actions</h4>
        <p>Svelte actions can enhance web components with additional behavior.</p>
        <p>Use actions for complex event handling, accessibility enhancements, or integrations.</p>
        <p>Actions provide a clean way to extend component functionality.</p>
      </ag-tab-panel>
    </ag-tabs>

    <div class="svelte-features">
      <h4>Svelte Advantages:</h4>
      <ul>
        <li>Direct web component usage (no wrapper overhead)</li>
        <li>Automatic event binding with on:tab-change</li>
        <li>Reactive variables update UI automatically</li>
        <li>Smallest bundle size of all framework integrations</li>
      </ul>
    </div>
  </div>
{/if}

<style>
  .svelte-demo {
    padding: 1.5rem;
    background: var(--c-card-bg);
    border: 1px solid var(--c-border);
    border-radius: 0.5rem;
  }

  .demo-description {
    color: var(--c-text-light);
    margin-bottom: 1rem;
  }

  .svelte-features {
    margin-top: 1rem;
    padding: 1rem;
    background: var(--c-bg-secondary);
    border-radius: 0.375rem;
  }

  .svelte-features h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
  }

  .svelte-features ul {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.85rem;
    color: var(--c-text-light);
  }
</style>
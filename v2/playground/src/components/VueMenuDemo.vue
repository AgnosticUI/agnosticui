<template>
  <div style="padding: 1rem;">
    <h3>Vue Menu Component</h3>
    <p>Selected item: <strong>{{ selectedItem || 'None' }}</strong></p>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
      <VueMenu
        @menu-open="handleMenuOpen"
        @menu-close="handleMenuClose"
        @menu-select="handleMenuSelect"
      >
        File Menu
        <template #menu>
          <VueMenuItem
            value="new"
            @menu-select="handleMenuSelect"
          >
            New File
          </VueMenuItem>
          <VueMenuItem
            value="open"
            @menu-select="handleMenuSelect"
          >
            Open File
          </VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem
            value="save"
            @menu-select="handleMenuSelect"
          >
            Save
          </VueMenuItem>
          <VueMenuItem
            value="save-as"
            @menu-select="handleMenuSelect"
          >
            Save As...
          </VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem
            value="exit"
            @menu-select="handleMenuSelect"
          >
            Exit
          </VueMenuItem>
        </template>
      </VueMenu>

      <VueMenu
        aria-label="View menu"
        @menu-open="handleMenuOpen"
        @menu-close="handleMenuClose"
        @menu-select="handleMenuSelect"
      >
        View Options
        <template #menu>
          <VueMenuItem
            value="zoom-in"
            @menu-select="handleMenuSelect"
          >
            Zoom In
          </VueMenuItem>
          <VueMenuItem
            value="zoom-out"
            @menu-select="handleMenuSelect"
          >
            Zoom Out
          </VueMenuItem>
          <VueMenuItem
            value="zoom-reset"
            @menu-select="handleMenuSelect"
          >
            Reset Zoom
          </VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem
            value="fullscreen"
            @menu-select="handleMenuSelect"
          >
            Toggle Fullscreen
          </VueMenuItem>
          <VueMenuItem
            value="disabled-view"
            disabled
            @menu-select="handleMenuSelect"
          >
            Disabled Option
          </VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div style="
      font-size: 0.875rem;
      color: var(--ag-text-secondary);
      margin: 1rem 0;
      padding: 0.5rem;
      background: var(--ag-background-secondary);
      border-radius: 4px;
      border: 1px solid var(--ag-border-primary);
    ">
      💡 <strong>Console Logging:</strong> Open your browser console to see Vue menu interaction events.
      These events demonstrate proper Vue 3 Composition API integration with reactive state management.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueMenu, VueMenuItem, VueMenuSeparator } from 'agnosticui-core/menu/vue';

const selectedItem = ref<string>("");

const handleMenuSelect = (detail: { value: string }) => {
  selectedItem.value = detail.value;
  console.log("Vue Menu - Selected item:", detail.value);
};

const handleMenuOpen = () => {
  console.log("Vue Menu - Menu opened");
};

const handleMenuClose = () => {
  console.log("Vue Menu - Menu closed");
};
</script>

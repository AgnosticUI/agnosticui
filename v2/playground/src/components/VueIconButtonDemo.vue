<template>
  <div class="vue-icon-button-demo">
    <h3 class="demo-title">
      Interactive Vue IconButton Demo
    </h3>

    <div class="demo-section">
      <h4 class="section-title">Basic Actions</h4>
      <div class="button-group">
        <VueIconButton
          label="Edit item"
          variant="primary"
          @click="handleEdit"
        >
          <Edit3 :size="24" />
        </VueIconButton>
        <VueIconButton
          label="Information"
          variant="secondary"
          @click="handleInfo"
        >
          <Info :size="24" />
        </VueIconButton>
        <VueIconButton
          label="Delete item"
          variant="danger"
          @click="handleDelete"
        >
          <Trash2 :size="24" />
        </VueIconButton>
        <VueIconButton
          :label="isLoading ? 'Saving...' : 'Save'"
          variant="primary"
          :loading="isLoading"
          :disabled="isLoading"
          @click="handleSave"
        >
          <Save :size="24" />
        </VueIconButton>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Toggle Favorites</h4>
      <div class="favorites-grid">
        <span class="favorite-item">
          <VueIconButton
            :label="favorites.heart ? 'Remove from favorites' : 'Add to favorites'"
            :variant="favorites.heart ? 'primary' : 'ghost'"
            :pressed="favorites.heart"
            @click="() => handleFavoriteToggle('heart')"
          >
            <Heart :size="24" />
          </VueIconButton>
          <small class="favorite-status">
            {{ favorites.heart ? 'Favorited' : 'Not favorited' }}
          </small>
        </span>

        <span class="favorite-item">
          <VueIconButton
            :label="favorites.star ? 'Remove star' : 'Add star'"
            :variant="favorites.star ? 'secondary' : 'ghost'"
            :pressed="favorites.star"
            @click="() => handleFavoriteToggle('star')"
          >
            <Star :size="24" />
          </VueIconButton>
          <small class="favorite-status">
            {{ favorites.star ? 'Starred' : 'Not starred' }}
          </small>
        </span>

        <span class="favorite-item">
          <VueIconButton
            :label="favorites.bookmark ? 'Remove bookmark' : 'Add bookmark'"
            variant="ghost"
            :pressed="favorites.bookmark"
            @click="() => handleFavoriteToggle('bookmark')"
          >
            <Bookmark :size="24" />
          </VueIconButton>
          <small class="favorite-status">
            {{ favorites.bookmark ? 'Bookmarked' : 'Not bookmarked' }}
          </small>
        </span>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Different Sizes</h4>
      <div class="button-group">
        <VueIconButton
          label="Extra small close"
          size="xs"
          @click="() => addAction('XS button clicked')"
        >
          <X :size="16" />
        </VueIconButton>
        <VueIconButton
          label="Small close"
          size="sm"
          @click="() => addAction('Small button clicked')"
        >
          <X :size="18" />
        </VueIconButton>
        <VueIconButton
          label="Medium close"
          size="md"
          @click="() => addAction('Medium button clicked')"
        >
          <X :size="24" />
        </VueIconButton>
        <VueIconButton
          label="Large close"
          size="lg"
          @click="() => addAction('Large button clicked')"
        >
          <X :size="32" />
        </VueIconButton>
        <VueIconButton
          label="Extra large close"
          size="xl"
          @click="() => addAction('XL button clicked')"
        >
          <X :size="36" />
        </VueIconButton>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Custom SVG Icons</h4>
      <div class="button-group">
        <VueIconButton
          label="Settings"
          variant="secondary"
          @click="() => addAction('Settings opened')"
        >
          <Settings :size="24" />
        </VueIconButton>

        <VueIconButton
          label="Download"
          variant="primary"
          @click="() => addAction('Download started')"
        >
          <Download :size="24" />
        </VueIconButton>

        <VueIconButton
          label="Upload"
          variant="secondary"
          @click="() => addAction('Upload dialog opened')"
        >
          <Upload :size="24" />
        </VueIconButton>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">States Demo</h4>
      <div class="button-group">
        <VueIconButton
          label="Disabled button"
          disabled
          @click="() => addAction('This should not fire')"
        >
          <Ban :size="24" />
        </VueIconButton>
        <VueIconButton
          label="Pressed state"
          pressed
          variant="secondary"
          @click="() => addAction('Pressed button clicked')"
        >
          <ChevronDown :size="24" />
        </VueIconButton>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">
        Action Log
        <button
          @click="clearActions"
          :disabled="actions.length === 0"
          class="clear-button"
        >
          Clear
        </button>
      </h4>
      <div class="action-log">
        <p v-if="actions.length === 0" class="empty-state">
          No actions yet. Click some buttons above!
        </p>
        <ul v-else class="action-list">
          <li
            v-for="(action, index) in actions"
            :key="index"
            class="action-item"
          >
            {{ action }}
          </li>
        </ul>
      </div>
    </div>

    <div class="demo-info">
      <strong>Vue Integration Features:</strong> Composition API integration, reactive props and state,
      Vue event handlers, and seamless integration with Vue's reactivity system while maintaining
      the accessibility and performance of the underlying web component.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { VueIconButton } from 'agnosticui-core/icon-button/vue';
import { Edit3, Info, Trash2, Save, X, Ban, ChevronDown, Settings, Download, Upload, Heart, Star, Bookmark } from 'lucide-vue-next';

const actions = ref<string[]>([]);
const isLoading = ref(false);
const favorites = reactive({
  heart: false,
  star: false,
  bookmark: false,
});

function addAction(message: string) {
  actions.value = [
    `${new Date().toLocaleTimeString()}: ${message}`,
    ...actions.value.slice(0, 9) // Keep last 10 actions
  ];
}

function handleFavoriteToggle(type: keyof typeof favorites) {
  favorites[type] = !favorites[type];
  addAction(`${type} ${favorites[type] ? 'added to' : 'removed from'} favorites`);
}

async function handleSave() {
  if (isLoading.value) return;

  isLoading.value = true;
  addAction('Save operation started...');

  // Simulate async operation
  setTimeout(() => {
    isLoading.value = false;
    addAction('Save completed successfully!');
  }, 2000);
}

function handleEdit() {
  addAction('Edit mode activated');
}

function handleDelete() {
  if (confirm('Are you sure you want to delete this item?')) {
    addAction('Item deleted');
  } else {
    addAction('Delete cancelled');
  }
}

function handleInfo() {
  addAction('Info dialog opened');
}

function clearActions() {
  actions.value = [];
}
</script>

<style scoped>
.vue-icon-button-demo {
  font-family: system-ui, -apple-system, sans-serif;
}

.demo-title {
  margin: 0 0 1rem 0;
  color: var(--ag-text-primary);
}

.demo-section {
  margin-bottom: 2rem;
}

.section-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: var(--ag-text-secondary);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.favorites-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.favorite-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.favorite-status {
  color: var(--ag-text-secondary);
  font-size: 0.75rem;
}

.clear-button {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background: var(--c-bg-secondary);
  border: 1px solid var(--c-border);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.clear-button:hover:not(:disabled) {
  background: var(--c-border);
}

.clear-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.action-log {
  border: 1px solid var(--c-border);
  border-radius: 4px;
  padding: 1rem;
  background: var(--c-card-bg);
  max-height: 200px;
  overflow-y: auto;
}

.empty-state {
  margin: 0;
  color: var(--ag-text-secondary);
  font-style: italic;
}

.action-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.action-item {
  padding: 0.25rem 0;
  border-bottom: 1px solid var(--c-border);
  font-family: monospace;
  font-size: 0.8rem;
  color: var(--ag-text-primary);
}

.action-item:last-child {
  border-bottom: none;
}

.demo-info {
  margin-top: 1rem;
  padding: 0.75rem;
  background: var(--c-bg-secondary);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--ag-text-secondary);
}
</style>
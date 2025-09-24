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
          <Edit3 :size="16" />
        </VueIconButton>
        <VueIconButton
          label="Information"
          variant="secondary"
          @click="handleInfo"
        >
          <Info :size="16" />
        </VueIconButton>
        <VueIconButton
          label="Delete item"
          variant="danger"
          @click="handleDelete"
        >
          <Trash2 :size="16" />
        </VueIconButton>
        <VueIconButton
          :label="isLoading ? 'Saving...' : 'Save'"
          variant="primary"
          :loading="isLoading"
          :disabled="isLoading"
          @click="handleSave"
        >
          <Save :size="16" />
        </VueIconButton>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Toggle Favorites</h4>
      <div class="favorites-grid">
        <span class="favorite-item">
          <VueIconButton
            :label="favorites.heart ? 'Remove from favorites' : 'Add to favorites'"
            :unicode="favorites.heart ? '❤️' : '♡'"
            :variant="favorites.heart ? 'primary' : 'ghost'"
            :pressed="favorites.heart"
            @click="() => handleFavoriteToggle('heart')"
          />
          <small class="favorite-status">
            {{ favorites.heart ? 'Favorited' : 'Not favorited' }}
          </small>
        </span>

        <span class="favorite-item">
          <VueIconButton
            :label="favorites.star ? 'Remove star' : 'Add star'"
            :unicode="favorites.star ? '★' : '☆'"
            :variant="favorites.star ? 'secondary' : 'ghost'"
            :pressed="favorites.star"
            @click="() => handleFavoriteToggle('star')"
          />
          <small class="favorite-status">
            {{ favorites.star ? 'Starred' : 'Not starred' }}
          </small>
        </span>

        <span class="favorite-item">
          <VueIconButton
            :label="favorites.bookmark ? 'Remove bookmark' : 'Add bookmark'"
            :unicode="favorites.bookmark ? '🔖' : '🏷'"
            variant="ghost"
            :pressed="favorites.bookmark"
            @click="() => handleFavoriteToggle('bookmark')"
          />
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
          <X :size="12" />
        </VueIconButton>
        <VueIconButton
          label="Small close"
          size="sm"
          @click="() => addAction('Small button clicked')"
        >
          <X :size="14" />
        </VueIconButton>
        <VueIconButton
          label="Medium close"
          size="md"
          @click="() => addAction('Medium button clicked')"
        >
          <X :size="16" />
        </VueIconButton>
        <VueIconButton
          label="Large close"
          size="lg"
          @click="() => addAction('Large button clicked')"
        >
          <X :size="18" />
        </VueIconButton>
        <VueIconButton
          label="Extra large close"
          size="xl"
          @click="() => addAction('XL button clicked')"
        >
          <X :size="20" />
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
          <svg viewBox="0 0 24 24" style="width: 1em; height: 1em; fill: currentColor;">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
          </svg>
        </VueIconButton>

        <VueIconButton
          label="Download"
          variant="primary"
          @click="() => addAction('Download started')"
        >
          <svg viewBox="0 0 24 24" style="width: 1em; height: 1em; fill: currentColor;">
            <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
          </svg>
        </VueIconButton>

        <VueIconButton
          label="Upload"
          variant="secondary"
          @click="() => addAction('Upload dialog opened')"
        >
          <svg viewBox="0 0 24 24" style="width: 1em; height: 1em; fill: currentColor;">
            <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"/>
          </svg>
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
          <Ban :size="16" />
        </VueIconButton>
        <VueIconButton
          label="Loading spinner"
          loading
          variant="primary"
        >
          <RotateCw :size="16" />
        </VueIconButton>
        <VueIconButton
          label="Pressed state"
          pressed
          variant="secondary"
          @click="() => addAction('Pressed button clicked')"
        >
          <ChevronDown :size="16" />
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
      💡 <strong>Vue Integration Features:</strong> Composition API integration, reactive props and state,
      Vue event handlers, and seamless integration with Vue's reactivity system while maintaining
      the accessibility and performance of the underlying web component.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { VueIconButton } from 'agnosticui-core/icon-button/vue';
import { Edit3, Info, Trash2, Save, X, Ban, RotateCw, ChevronDown } from 'lucide-vue-next';

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
  color: var(--c-text);
}

.demo-section {
  margin-bottom: 2rem;
}

.section-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: var(--c-text-light);
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
  color: var(--c-text-light);
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
  color: var(--c-text-light);
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
  color: var(--c-text);
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
  color: var(--c-text-light);
}
</style>
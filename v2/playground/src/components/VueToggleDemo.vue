<template>
  <div v-if="!isReady" style="padding: 1rem; color: #666;">
    Loading Vue Toggle components...
  </div>
  <div v-else style="padding: 1rem;">
    <h3>Vue Toggle Wrapper Examples</h3>

    <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
      💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see toggle change events from all Vue wrapper examples below.
      <button @click="logTip" style="color: var(--ag-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
    </p>

    <div style="display: grid; gap: 2rem; max-width: 800px;">
      <!-- Basic Toggle Examples -->
      <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
        <h4 style="margin-top: 0;">Basic Toggles</h4>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle
              label="Basic Toggle"
              :checked="basicToggle"
              name="basicToggle"
              @toggle-change="handleBasicToggle"
            />
            <span>State: {{ basicToggle ? 'ON' : 'OFF' }}</span>
          </div>

          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle
              label="Default Checked"
              :checked="true"
              name="defaultChecked"
              @toggle-change="handleToggleChange"
            />
            <span>Always starts checked</span>
          </div>

          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle
              label="With Value"
              :checked="false"
              name="valueToggle"
              value="premium-feature"
              @toggle-change="handleToggleChange"
            />
            <span>Has a form value</span>
          </div>
        </div>
      </div>

      <!-- Size Variants -->
      <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
        <h4 style="margin-top: 0;">Size Variants</h4>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Extra Small" size="xs" name="xsToggle" @toggle-change="handleToggleChange" />
            <span>xs size</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Small" size="sm" name="smToggle" @toggle-change="handleToggleChange" />
            <span>sm size</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Medium (Default)" size="md" name="mdToggle" @toggle-change="handleToggleChange" />
            <span>md size</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Large" size="lg" name="lgToggle" @toggle-change="handleToggleChange" />
            <span>lg size</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Extra Large" size="xl" name="xlToggle" @toggle-change="handleToggleChange" />
            <span>xl size</span>
          </div>
        </div>
      </div>

      <!-- Color Variants -->
      <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
        <h4 style="margin-top: 0;">Color Variants</h4>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Default" variant="default" :checked="true" name="defaultVariant" @toggle-change="handleToggleChange" />
            <span>Default blue</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Success" variant="success" :checked="true" name="successVariant" @toggle-change="handleToggleChange" />
            <span>Success green</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Warning" variant="warning" :checked="true" name="warningVariant" @toggle-change="handleToggleChange" />
            <span>Warning orange</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Danger" variant="danger" :checked="true" name="dangerVariant" @toggle-change="handleToggleChange" />
            <span>Danger red</span>
          </div>
        </div>
      </div>

      <!-- States -->
      <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
        <h4 style="margin-top: 0;">Toggle States</h4>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Disabled Off" :disabled="true" :checked="false" name="disabledOff" @toggle-change="handleToggleChange" />
            <span>Cannot be toggled</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Disabled On" :disabled="true" :checked="true" name="disabledOn" @toggle-change="handleToggleChange" />
            <span>Cannot be toggled</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle label="Read-only" :readonly="true" :checked="true" name="readonly" @toggle-change="handleToggleChange" />
            <span>Looks interactive but won't change</span>
          </div>
        </div>
      </div>

      <!-- Form Integration -->
      <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
        <h4 style="margin-top: 0;">Form Integration Example</h4>
        <form style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle
              label="Newsletter Subscription"
              :checked="formToggle"
              name="newsletter"
              value="subscribed"
              @toggle-change="handleFormToggle"
            />
            <span>Subscribe to our newsletter</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle
              label="Marketing Emails"
              :checked="false"
              name="marketing"
              value="enabled"
              @toggle-change="handleToggleChange"
            />
            <span>Receive marketing emails</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <VueToggle
              label="Dark Mode"
              :checked="false"
              name="theme"
              value="dark"
              @toggle-change="handleToggleChange"
            />
            <span>Enable dark theme</span>
          </div>
        </form>
      </div>

      <!-- Action Log -->
      <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
        <h4 style="margin-top: 0;">Action Log</h4>
        <div style="border: 1px solid #ddd; border-radius: 4px; padding: 1rem; background: white; max-height: 300px; overflow-y: auto;">
          <button
            @click="clearActions"
            :disabled="actions.length === 0"
            :style="{
              padding: '0.5rem 1rem',
              background: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: actions.length === 0 ? 'not-allowed' : 'pointer',
              marginBottom: '1rem',
              opacity: actions.length === 0 ? 0.5 : 1
            }"
          >
            Clear Log
          </button>
          <p v-if="actions.length === 0" style="color: #666; font-style: italic; margin: 0;">
            No actions yet. Toggle some switches above!
          </p>
          <ul v-else style="margin: 0; padding: 0; list-style: none;">
            <li
              v-for="(action, index) in actions"
              :key="index"
              :style="{
                padding: '0.25rem 0',
                borderBottom: index < actions.length - 1 ? '1px solid #f0f0f0' : 'none',
                fontFamily: 'monospace',
                fontSize: '0.9rem'
              }"
            >
              {{ action }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VueToggle } from 'agnosticui-core/toggle/vue';

// Import web components to ensure they're registered
import 'agnosticui-core';

const isReady = ref(false);
const basicToggle = ref(false);
const formToggle = ref(true);
const actions = ref<string[]>([]);

onMounted(async () => {
  // Wait for web components to be defined before rendering
  try {
    await Promise.all([
      customElements.whenDefined('ag-toggle'),
    ]);
    console.log('Toggle web components are ready for Vue wrappers!');
    isReady.value = true;
  } catch (error) {
    console.error('Error waiting for web components:', error);
    // Fall back to rendering anyway after a short delay
    setTimeout(() => isReady.value = true, 1000);
  }
});

const addAction = (message: string) => {
  const timestamp = new Date().toLocaleTimeString();
  actions.value = [
    `${timestamp}: ${message}`,
    ...actions.value.slice(0, 9) // Keep last 10 actions
  ];
};

const handleToggleChange = (detail: { checked: boolean; name: string; value: string }) => {
  console.log(`Toggle changed:`, detail);
  const label = detail.name || 'Toggle';
  const state = detail.checked ? 'ON' : 'OFF';
  addAction(`${label} switched ${state}${detail.value ? ` (value: ${detail.value})` : ''}`);
};

const handleBasicToggle = (detail: { checked: boolean; name: string; value: string }) => {
  basicToggle.value = detail.checked;
  handleToggleChange(detail);
};

const handleFormToggle = (detail: { checked: boolean; name: string; value: string }) => {
  formToggle.value = detail.checked;
  handleToggleChange(detail);
};

const clearActions = () => {
  actions.value = [];
};

const logTip = () => {
  console.log('🎯 TIP: Expand the logged objects to see toggle state, name, value, and other properties from Vue event handlers!');
};
</script>
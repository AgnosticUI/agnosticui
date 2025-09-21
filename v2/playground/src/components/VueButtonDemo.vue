<template>
  <div style="padding: 1rem;">
    <h3>Vue Button Wrapper Examples</h3>

    <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background-color: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
      💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see click and toggle events from all Vue wrapper examples below.
      <button @click="logEventTip" style="color: var(--agnostic-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
    </p>

    <div v-if="!isReady" style="padding: 1rem; color: #666;">
      Loading Vue Button components...
    </div>

    <div v-else>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueButton @click="handleClick">
          Default Button
        </VueButton>

        <VueButton @click="handleClick" class="primary">
          Primary Button
        </VueButton>

        <VueButton @click="handleClick" class="secondary">
          Secondary Button
        </VueButton>

        <VueButton @click="handleClick" class="danger">
          Danger Button
        </VueButton>
      </div>

      <h4>Button Types</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueButton type="button" @click="handleClick">
          Button Type
        </VueButton>

        <VueButton type="submit" @click="handleClick" class="primary">
          Submit Type
        </VueButton>

        <VueButton type="reset" @click="handleClick" class="secondary">
          Reset Type
        </VueButton>
      </div>

      <h4>Button States</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueButton :disabled="true" @click="handleClick">
          Disabled Button
        </VueButton>

        <VueButton :loading="true" @click="handleClick" class="primary">
          Loading Button
        </VueButton>
      </div>

      <h4>Toggle Functionality</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueButton
          :toggle="true"
          :pressed="togglePressed"
          @toggle="handleToggle"
        >
          Toggle Button {{ togglePressed ? "(Pressed)" : "(Not Pressed)" }}
        </VueButton>
      </div>

      <h4>With Icons</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueButton @click="handleClick" class="primary">
          <span style="margin-right: 0.5rem;">📥</span>
          Download
        </VueButton>

        <VueButton @click="handleClick" class="secondary">
          ⚙️
        </VueButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VueButton from 'agnosticui-core/button/vue';

// Import web components to ensure they're registered
import 'agnosticui-core';

const isReady = ref(false);
const togglePressed = ref(false);

onMounted(async () => {
  // Wait for web components to be defined before rendering
  try {
    await Promise.all([
      customElements.whenDefined('ag-button'),
    ]);
    console.log('Web components are ready for Vue wrappers!');
    isReady.value = true;
  } catch (error) {
    console.error('Error waiting for web components:', error);
    // Fall back to rendering anyway after a short delay
    setTimeout(() => {
      isReady.value = true;
    }, 1000);
  }
});

const handleClick = (event: Event) => {
  const target = event.target as any;
  const buttonText = target.textContent?.trim() || 'Unknown Button';
  console.log(`Vue Button clicked: "${buttonText}"`, {
    type: target.type || target.getAttribute('type') || 'button',
    disabled: target.disabled,
    variant: target.className || target.getAttribute('variant') || 'default',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-click'
  });
};

const handleToggle = (detail: { pressed: boolean }) => {
  console.log(`Vue Toggle state changed: ${detail.pressed ? 'PRESSED' : 'NOT PRESSED'}`, {
    ...detail,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-toggle'
  });
  togglePressed.value = detail.pressed;
};

const logEventTip = () => {
  console.log('🎯 TIP: Expand the logged objects to see how we extract button text, type, disabled state, and other properties from Vue event handlers!');
};
</script>
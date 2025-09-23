<template>
  <div style="padding: 1rem;">
    <h3>Vue Tooltip Wrapper Examples</h3>

    <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background-color: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
      💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see show/hide events from all Vue tooltip examples below.
      <button @click="logEventTip" style="color: var(--ag-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
    </p>

    <div v-if="!isReady" style="padding: 1rem; color: #666;">
      Loading Vue Tooltip components...
    </div>

    <div v-else>
      <h4>Basic Tooltip Examples</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueTooltip content="This is a Vue tooltip!" @show="handleShow" @hide="handleHide">
          <button>Basic Tooltip</button>
        </VueTooltip>

        <VueTooltip content="I appear at the bottom!" placement="bottom" @show="handleShow" @hide="handleHide">
          <button>Bottom Placement</button>
        </VueTooltip>

        <VueTooltip content="Left side tooltip" placement="left" @show="handleShow" @hide="handleHide">
          <button>Left Placement</button>
        </VueTooltip>

        <VueTooltip content="Right side tooltip" placement="right" @show="handleShow" @hide="handleHide">
          <button>Right Placement</button>
        </VueTooltip>
      </div>

      <h4>Trigger Methods</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueTooltip content="Click to toggle tooltip" trigger="click" @show="handleShow" @hide="handleHide">
          <button>Click Trigger</button>
        </VueTooltip>

        <VueTooltip content="Focus-triggered tooltip" trigger="focus" @show="handleShow" @hide="handleHide">
          <input type="text" placeholder="Focus me" style="padding: 0.5rem; border: 1px solid var(--c-border); border-radius: 4px;" />
        </VueTooltip>

        <VueTooltip content="Hover and focus both work" trigger="hover focus" @show="handleShow" @hide="handleHide">
          <button>Hover/Focus Trigger</button>
        </VueTooltip>
      </div>

      <h4>Advanced Placements</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueTooltip content="Top-start alignment" placement="top-start" @show="handleShow" @hide="handleHide">
          <button>Top-Start</button>
        </VueTooltip>

        <VueTooltip content="Top-end alignment" placement="top-end" @show="handleShow" @hide="handleHide">
          <button>Top-End</button>
        </VueTooltip>

        <VueTooltip content="Bottom-start alignment" placement="bottom-start" @show="handleShow" @hide="handleHide">
          <button>Bottom-Start</button>
        </VueTooltip>

        <VueTooltip content="Bottom-end alignment" placement="bottom-end" @show="handleShow" @hide="handleHide">
          <button>Bottom-End</button>
        </VueTooltip>
      </div>

      <h4>Distance and Skidding</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueTooltip content="Close to trigger" :distance="2" @show="handleShow" @hide="handleHide">
          <button>Close Distance (2px)</button>
        </VueTooltip>

        <VueTooltip content="Far from trigger" :distance="30" @show="handleShow" @hide="handleHide">
          <button>Far Distance (30px)</button>
        </VueTooltip>

        <VueTooltip content="Skidded tooltip" :skidding="20" @show="handleShow" @hide="handleHide">
          <button>Skidding (20px)</button>
        </VueTooltip>
      </div>

      <h4>Disabled State</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueTooltip content="This won't show" :disabled="true" @show="handleShow" @hide="handleHide">
          <button>Disabled Tooltip</button>
        </VueTooltip>

        <VueTooltip content="Conditionally disabled" :disabled="isDisabled" @show="handleShow" @hide="handleHide">
          <button>Conditionally Disabled</button>
        </VueTooltip>

        <button @click="toggleDisabled" style="margin-left: 1rem; padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); cursor: pointer;">
          {{ isDisabled ? 'Enable' : 'Disable' }} Conditional Tooltip
        </button>
      </div>

      <h4>Rich Content Slots</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
        <VueTooltip @show="handleShow" @hide="handleHide">
          <button>Rich Content Tooltip</button>
          <template #content>
            <div style="padding: 0.5rem;">
              <strong style="color: var(--ag-primary);">Rich Tooltip Content</strong>
              <br />
              <small>This tooltip uses a slot for custom content</small>
              <ul style="margin: 0.5rem 0; padding-left: 1rem;">
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
              </ul>
            </div>
          </template>
        </VueTooltip>

        <VueTooltip @show="handleShow" @hide="handleHide">
          <button>Icon Tooltip</button>
          <template #content>
            <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem;">
              <span style="font-size: 1.2em;">💡</span>
              <span>Tip with icon!</span>
            </div>
          </template>
        </VueTooltip>
      </div>

      <h4>Imperative API Demo</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0; align-items: center;">
        <VueTooltip ref="imperativeTooltip" content="Programmatically controlled tooltip" @show="handleShow" @hide="handleHide">
          <button>Controlled Tooltip</button>
        </VueTooltip>

        <button @click="showImperative" style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); cursor: pointer;">
          Show
        </button>
        <button @click="hideImperative" style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); cursor: pointer;">
          Hide
        </button>
        <button @click="toggleImperative" style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); cursor: pointer;">
          Toggle
        </button>
      </div>

      <h4>Dynamic Content</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0; align-items: center;">
        <VueTooltip :content="dynamicContent" @show="handleShow" @hide="handleHide">
          <button>Dynamic Content</button>
        </VueTooltip>

        <button @click="updateContent" style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); cursor: pointer;">
          Update Content
        </button>
      </div>

      <h4>Edge Case Testing</h4>
      <div style="background-color: var(--c-bg-secondary); padding: 1rem; border-radius: 4px; margin: 1rem 0;">
        <p><strong>Flip Behavior:</strong> These tooltips will automatically flip when they hit viewport edges:</p>
        <div style="display: flex; justify-content: space-between;">
          <VueTooltip content="I flip when near the edge!" placement="top" @show="handleShow" @hide="handleHide">
            <button>Near Left Edge</button>
          </VueTooltip>

          <VueTooltip content="I also flip intelligently!" placement="top" @show="handleShow" @hide="handleHide">
            <button>Near Right Edge</button>
          </VueTooltip>
        </div>
      </div>

      <h4>Accessibility Features</h4>
      <div style="background-color: var(--c-bg-secondary); padding: 1rem; border-radius: 4px; margin: 1rem 0;">
        <p><strong>Keyboard Navigation:</strong></p>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
          <li><kbd>Tab</kbd> to focus elements with tooltips</li>
          <li><kbd>Escape</kbd> to dismiss tooltips</li>
          <li>Screen readers announce tooltip content automatically</li>
        </ul>
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <VueTooltip content="Accessible tooltip with proper ARIA" @show="handleShow" @hide="handleHide">
            <button>Tab Focus Test</button>
          </VueTooltip>

          <VueTooltip content="Press Escape to dismiss" @show="handleShow" @hide="handleHide">
            <button>Escape Test</button>
          </VueTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VueTooltip } from 'agnosticui-core/tooltip/vue';

// Import web components to ensure they're registered
import 'agnosticui-core';

const isReady = ref(false);
const isDisabled = ref(false);
const dynamicContent = ref('Initial tooltip content');
const imperativeTooltip = ref();

onMounted(async () => {
  // Wait for web components to be defined before rendering
  try {
    await Promise.all([
      customElements.whenDefined('ag-tooltip'),
    ]);
    console.log('Web components are ready for Vue Tooltip wrappers!');
    isReady.value = true;
  } catch (error) {
    console.error('Error waiting for web components:', error);
    // Fall back to rendering anyway after a short delay
    setTimeout(() => {
      isReady.value = true;
    }, 1000);
  }
});

const handleShow = () => {
  // Find the tooltip element to get more context
  const tooltipElement = document.activeElement?.closest('ag-tooltip') as any;
  const triggerText = tooltipElement?.querySelector('button, input')?.textContent?.trim() ||
                     tooltipElement?.querySelector('button, input')?.placeholder || 'Unknown Trigger';
  const tooltipContent = tooltipElement?.getAttribute('content') || 'Rich content tooltip';

  console.log(`🌟 Vue Tooltip shown: "${triggerText}"`, {
    trigger: triggerText,
    content: tooltipContent,
    placement: tooltipElement?.getAttribute('placement') || 'top',
    distance: tooltipElement?.distance || 8,
    skidding: tooltipElement?.skidding || 0,
    trigger_method: tooltipElement?.getAttribute('trigger') || 'hover focus',
    disabled: tooltipElement?.disabled || false,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-tooltip-show'
  });
};

const handleHide = () => {
  // Find the tooltip element to get more context
  const tooltipElement = document.activeElement?.closest('ag-tooltip') as any;
  const triggerText = tooltipElement?.querySelector('button, input')?.textContent?.trim() ||
                     tooltipElement?.querySelector('button, input')?.placeholder || 'Unknown Trigger';

  console.log(`🔲 Vue Tooltip hidden: "${triggerText}"`, {
    trigger: triggerText,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-tooltip-hide'
  });
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
  console.log(`🔄 Vue Tooltip disabled state changed: ${isDisabled.value ? 'DISABLED' : 'ENABLED'}`, {
    disabled: isDisabled.value,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-tooltip-state-change'
  });
};

const updateContent = () => {
  const messages = [
    'Updated tooltip content!',
    'Dynamic content works!',
    'Content changed programmatically',
    'Vue reactivity in action',
    'Tooltip content is reactive'
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  dynamicContent.value = randomMessage;

  console.log(`📝 Vue Tooltip content updated: "${randomMessage}"`, {
    newContent: randomMessage,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-tooltip-content-update'
  });
};

const showImperative = () => {
  imperativeTooltip.value?.show();
  console.log('⚡ Vue Tooltip shown imperatively', {
    method: 'show()',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-tooltip-imperative'
  });
};

const hideImperative = () => {
  imperativeTooltip.value?.hide();
  console.log('⚡ Vue Tooltip hidden imperatively', {
    method: 'hide()',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-tooltip-imperative'
  });
};

const toggleImperative = () => {
  imperativeTooltip.value?.toggle();
  console.log('⚡ Vue Tooltip toggled imperatively', {
    method: 'toggle()',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-tooltip-imperative'
  });
};

const logEventTip = () => {
  console.log('🎯 TIP: Expand the logged objects to see how we extract tooltip content, placement, distance, trigger methods, and other properties from Vue event handlers and tooltip elements!');
};
</script>
<template>
  <div style="padding: 1rem;">
    <h3>Vue + AgnosticUI Dialog Integration</h3>

    <p :style="{
      fontSize: '0.875rem',
      color: 'var(--c-text-light)',
      margin: '0 0 1rem 0',
      padding: '0.5rem',
      background: 'var(--c-bg-secondary)',
      borderRadius: '4px',
      border: '1px solid var(--c-border)'
    }">
      💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see dialog events from all Vue examples below.
      <button
        @click="() => console.log('🎯 TIP: Vue wrapper provides proper Vue 3 Composition API integration with reactive props and emit events!')"
        :style="{
          color: 'var(--agnostic-primary)',
          textDecoration: 'underline',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          font: 'inherit'
        }"
      >
        Click here
      </button> for Vue integration tips!
    </p>

    <!-- Dialog Trigger Buttons -->
    <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1rem 0' }">
      <button
        @click="isMainDialogOpen = true"
        :style="{
          padding: '0.5rem 1rem',
          background: 'var(--agnostic-primary)',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }"
      >
        Open Main Dialog
      </button>

      <button
        @click="isSimpleDialogOpen = true"
        :style="{
          padding: '0.5rem 1rem',
          background: 'transparent',
          color: 'var(--agnostic-primary)',
          border: '1px solid var(--agnostic-primary)',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }"
      >
        Open Simple Dialog
      </button>

      <button
        @click="isCustomDialogOpen = true"
        :style="{
          padding: '0.5rem 1rem',
          background: 'transparent',
          color: 'var(--c-text)',
          border: '1px solid var(--c-border)',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }"
      >
        Open Custom Dialog
      </button>
    </div>

    <!-- Main Dialog with Rich Content -->
    <VueDialog
      :open="isMainDialogOpen"
      heading="Vue Dialog Demo"
      description="This dialog demonstrates the VueDialog wrapper component with Vue 3 Composition API."
      :show-close-button="true"
      @dialog-open="handleDialogOpen"
      @dialog-close="handleDialogClose"
      @dialog-cancel="handleDialogCancel"
    >
      <div :style="{ margin: '1rem 0' }">
        <h4>Vue + AgnosticUI Integration</h4>
        <p>This dialog showcases the VueDialog wrapper with:</p>
        <ul>
          <li>Vue 3 Composition API integration</li>
          <li>Reactive props with automatic updates</li>
          <li>Vue-style event emitters (@dialog-open, @dialog-close, etc.)</li>
          <li>Perfect Vue reactivity system integration</li>
          <li>All accessibility features maintained</li>
        </ul>

        <p><strong>Features demonstrated:</strong></p>
        <ul>
          <li>Reactive open state with Vue ref</li>
          <li>Vue event handlers</li>
          <li>Close button functionality</li>
          <li>Interactive content within dialog</li>
        </ul>
      </div>

      <VueDialogFooter>
        <div :style="{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }">
          <button
            @click="() => {
              handleButtonClick('Cancel Action');
              isMainDialogOpen = false;
            }"
            :style="{
              padding: '0.5rem 1rem',
              background: 'transparent',
              color: 'var(--agnostic-primary)',
              border: '1px solid var(--agnostic-primary)',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }"
          >
            Cancel Action
          </button>

          <button
            @click="isMainDialogOpen = false"
            :style="{
              padding: '0.5rem 1rem',
              background: 'var(--agnostic-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }"
          >
            Confirm & Close
          </button>
        </div>
      </VueDialogFooter>
    </VueDialog>

    <!-- Simple Dialog -->
    <VueDialog
      :open="isSimpleDialogOpen"
      heading="Simple Vue Confirmation"
      :close-on-escape="true"
      :close-on-backdrop="true"
      @dialog-open="handleDialogOpen"
      @dialog-close="handleDialogClose"
      @dialog-cancel="handleDialogCancel"
    >
      <p>This is a simple confirmation dialog using the VueDialog wrapper.</p>
      <p><strong>Try:</strong> Press ESC key or click outside to close.</p>

      <VueDialogFooter>
        <div :style="{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }">
          <button
            @click="isSimpleDialogOpen = false"
            :style="{
              padding: '0.5rem 1rem',
              background: 'transparent',
              color: 'var(--agnostic-primary)',
              border: '1px solid var(--agnostic-primary)',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }"
          >
            Cancel
          </button>

          <button
            @click="isSimpleDialogOpen = false"
            :style="{
              padding: '0.5rem 1rem',
              background: 'var(--agnostic-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }"
          >
            OK
          </button>
        </div>
      </VueDialogFooter>
    </VueDialog>

    <!-- Custom Dialog with Slots -->
    <VueDialog
      :open="isCustomDialogOpen"
      :close-on-escape="false"
      :close-on-backdrop="false"
      @dialog-open="handleDialogOpen"
      @dialog-close="handleDialogClose"
      @dialog-cancel="handleDialogCancel"
    >
      <VueDialogHeader>
        <h2 :style="{ margin: '0', color: 'var(--agnostic-primary)' }">
          🍃 Custom Vue Header
        </h2>
        <p :style="{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: 'var(--c-text-light)' }">
          This uses the VueDialogHeader component for custom header content
        </p>
      </VueDialogHeader>

      <div :style="{ margin: '1rem 0' }">
        <p>This dialog demonstrates:</p>
        <ul>
          <li><strong>Custom header component</strong> - using VueDialogHeader</li>
          <li><strong>Disabled ESC/backdrop</strong> - must use buttons to close</li>
          <li><strong>Vue 3 reactivity</strong> - full reactive system integration</li>
          <li><strong>Vue patterns</strong> - familiar component composition</li>
        </ul>

        <div :style="{
          background: 'var(--c-bg-secondary)',
          padding: '1rem',
          borderRadius: '4px',
          border: '1px solid var(--c-border)',
          margin: '1rem 0'
        }">
          <p :style="{ margin: '0', fontSize: '0.875rem' }">
            <strong>Note:</strong> ESC key and backdrop clicks are disabled for this dialog.
            You must use the action buttons below to close it.
          </p>
        </div>
      </div>

      <VueDialogFooter>
        <div :style="{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }">
          <div>
            <button
              @click="handleButtonClick('Help')"
              :style="{
                padding: '0.5rem 1rem',
                background: 'transparent',
                color: 'var(--c-text)',
                border: '1px solid var(--c-border)',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }"
            >
              Help
            </button>
          </div>

          <div :style="{ display: 'flex', gap: '1rem' }">
            <button
              @click="isCustomDialogOpen = false"
              :style="{
                padding: '0.5rem 1rem',
                background: 'transparent',
                color: 'var(--agnostic-primary)',
                border: '1px solid var(--agnostic-primary)',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }"
            >
              Cancel
            </button>

            <button
              @click="isCustomDialogOpen = false"
              :style="{
                padding: '0.5rem 1rem',
                background: 'var(--agnostic-danger)',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }"
            >
              Delete
            </button>

            <button
              @click="isCustomDialogOpen = false"
              :style="{
                padding: '0.5rem 1rem',
                background: 'var(--agnostic-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }"
            >
              Save Changes
            </button>
          </div>
        </div>
      </VueDialogFooter>
    </VueDialog>

    <!-- Implementation Notes -->
    <div :style="{
      margin: '2rem 0',
      padding: '1rem',
      background: 'var(--c-bg-secondary)',
      borderRadius: '4px',
      border: '1px solid var(--c-border)'
    }">
      <h4 :style="{ marginTop: '0' }">Vue Implementation Notes</h4>
      <p>This Vue dialog integration demonstrates:</p>
      <ul>
        <li><strong>VueDialog wrapper</strong> - provides Vue-friendly API</li>
        <li><strong>Composition API integration</strong> - works with ref, reactive, computed</li>
        <li><strong>Vue event system</strong> - uses standard Vue emit events</li>
        <li><strong>Component composition</strong> - VueDialogHeader and VueDialogFooter components</li>
        <li><strong>Reactive props</strong> - automatic updates when props change</li>
        <li><strong>Accessibility preserved</strong> - all web component features maintained</li>
      </ul>

      <p>
        <strong>Why use the wrapper?</strong> The VueDialog wrapper provides a familiar Vue 3 API
        with Composition API support while maintaining all the accessibility and performance benefits
        of the underlying web component.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VueDialog, VueDialogHeader, VueDialogFooter } from 'agnosticui-core/dialog/vue';

// Import web components to ensure they're registered
import 'agnosticui-core';

const isMainDialogOpen = ref(false);
const isSimpleDialogOpen = ref(false);
const isCustomDialogOpen = ref(false);

// Ensure the ag-dialog web component is loaded
onMounted(async () => {
  if (typeof window !== 'undefined') {
    await customElements.whenDefined('ag-dialog');
  }
});

const handleDialogOpen = () => {
  console.log('🗨️ Vue Dialog opened');
};

const handleDialogClose = () => {
  console.log('🗨️ Vue Dialog closed');
};

const handleDialogCancel = () => {
  console.log('🗨️ Vue Dialog cancelled (ESC/backdrop)');
};

const handleButtonClick = (buttonName: string) => {
  console.log(`🔘 Vue Dialog Button clicked: "${buttonName}"`);
};
</script>
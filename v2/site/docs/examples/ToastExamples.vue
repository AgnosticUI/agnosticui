<template>
  <section>
    <!-- Guidance Note -->
    <div class="mbe4 guidance-note">
      <h4>Demo Pattern: Single Toast Display</h4>
      <p>
        This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications.
        See the documentation below for alternative approaches if you need multiple simultaneous toasts.
      </p>
    </div>
    <div class="mbe4">
      <h3>Toast Types</h3>
    </div>
    <div class="stacked mbe4">
      <button
        class="demo-button"
        @click="showToast('showDefault')"
      >
        Show Default Toast
      </button>
      <VueToast
        v-model:open="showDefault"
        @toast-close="showDefault = false"
      >
        Default toast notification
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showSuccess')"
      >
        Show Success Toast
      </button>
      <VueToast
        v-model:open="showSuccess"
        type="success"
        @toast-close="showSuccess = false"
      >
        Operation completed successfully!
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showInfo')"
      >
        Show Info Toast
      </button>
      <VueToast
        v-model:open="showInfo"
        type="info"
        @toast-close="showInfo = false"
      >
        New message received!
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showPrimary')"
      >
        Show Primary Toast
      </button>
      <VueToast
        v-model:open="showPrimary"
        type="primary"
        @toast-close="showPrimary = false"
      >
        New feature available!
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showWarning')"
      >
        Show Warning Toast
      </button>
      <VueToast
        v-model:open="showWarning"
        type="warning"
        @toast-close="showWarning = false"
      >
        <div class="flex-inline items-center">
          <AlertTriangle
            :size="20"
            class="mie3"
          />
          Warning: This action cannot be undone.
        </div>
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showError')"
      >
        Show Error Toast
      </button>
      <VueToast
        v-model:open="showError"
        type="error"
        @toast-close="showError = false"
      >
        <div class="flex-inline items-center">
          <AlertCircle
            :size="20"
            class="mie3"
          />
          An error occurred. Please try again.
        </div>
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showDanger')"
      >
        Show Danger Toast
      </button>
      <VueToast
        v-model:open="showDanger"
        type="danger"
        @toast-close="showDanger = false"
      >
        <div class="flex-inline items-center">
          <XCircle
            :size="20"
            class="mie3"
          />
          Critical error detected!
        </div>
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>Positions</h3>
    </div>
    <div class="stacked mbe4">
      <button
        class="demo-button"
        @click="showToast('showTopStart')"
      >
        Top Start
      </button>
      <VueToast
        v-model:open="showTopStart"
        position="top-start"
        @toast-close="showTopStart = false"
      >
        Toast at top-start
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showTop')"
      >
        Top (Full Width)
      </button>
      <VueToast
        v-model:open="showTop"
        position="top"
        @toast-close="showTop = false"
      >
        Toast at top (full width)
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showTopEnd')"
      >
        Top End (Default)
      </button>
      <VueToast
        v-model:open="showTopEnd"
        position="top-end"
        @toast-close="showTopEnd = false"
      >
        Toast at top-end (default)
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showBottomStart')"
      >
        Bottom Start
      </button>
      <VueToast
        v-model:open="showBottomStart"
        position="bottom-start"
        @toast-close="showBottomStart = false"
      >
        Toast at bottom-start
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showBottom')"
      >
        Bottom (Full Width)
      </button>
      <VueToast
        v-model:open="showBottom"
        position="bottom"
        @toast-close="showBottom = false"
      >
        Toast at bottom (full width)
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showBottomEnd')"
      >
        Bottom End
      </button>
      <VueToast
        v-model:open="showBottomEnd"
        position="bottom-end"
        @toast-close="showBottomEnd = false"
      >
        Toast at bottom-end
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>Border Styles</h3>
    </div>
    <div class="stacked mbe4">
      <button
        class="demo-button"
        @click="showToast('showBordered')"
      >
        Bordered Toast
      </button>
      <VueToast
        v-model:open="showBordered"
        type="info"
        bordered
        @toast-close="showBordered = false"
      >
        Toast with border
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showBorderedLeft')"
      >
        Left Border Toast
      </button>
      <VueToast
        v-model:open="showBorderedLeft"
        type="success"
        borderedLeft
        @toast-close="showBorderedLeft = false"
      >
        <div class="flex-inline items-center">
          <CheckCircle
            :size="20"
            class="mie3"
          />
          Toast with left border accent
        </div>
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showNotRounded')"
      >
        Not Rounded Toast
      </button>
      <VueToast
        v-model:open="showNotRounded"
        type="primary"
        :rounded="false"
        @toast-close="showNotRounded = false"
      >
        Toast without rounded corners
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>Auto-Dismiss Options</h3>
    </div>
    <div class="stacked mbe4">
      <button
        class="demo-button"
        @click="showToast('showQuickDismiss')"
      >
        Quick Dismiss (2s)
      </button>
      <VueToast
        v-model:open="showQuickDismiss"
        :duration="2000"
        type="info"
        @toast-close="showQuickDismiss = false"
      >
        This toast will auto-dismiss in 2 seconds
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showAutoDismiss')"
      >
        Auto-Dismiss (5s)
      </button>
      <VueToast
        v-model:open="showAutoDismiss"
        :duration="5000"
        type="info"
        @toast-close="showAutoDismiss = false"
      >
        This toast will auto-dismiss in 5 seconds (default)
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showNoAutoDismiss')"
      >
        No Auto-Dismiss
      </button>
      <VueToast
        v-model:open="showNoAutoDismiss"
        :auto-dismiss="false"
        type="warning"
        @toast-close="showNoAutoDismiss = false"
      >
        This toast will not auto-dismiss. Click X to close.
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showNoPause')"
      >
        No Pause on Hover
      </button>
      <VueToast
        v-model:open="showNoPause"
        :pause-on-hover="false"
        :duration="3000"
        type="info"
        @toast-close="showNoPause = false"
      >
        Hover won't pause this toast's timer
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>Close Button Options</h3>
    </div>
    <div class="stacked mbe4">
      <button
        class="demo-button"
        @click="showToast('showNoCloseButton')"
      >
        No Close Button
      </button>
      <VueToast
        v-model:open="showNoCloseButton"
        :show-close-button="false"
        type="info"
        :duration="3000"
        @toast-close="showNoCloseButton = false"
      >
        Toast without close button (auto-dismisses)
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>With Icons</h3>
    </div>
    <div class="stacked mbe4">
      <button
        class="demo-button"
        @click="showToast('showIconSuccess')"
      >
        Success with Icon
      </button>
      <VueToast
        v-model:open="showIconSuccess"
        type="success"
        @toast-close="showIconSuccess = false"
      >
        <div class="flex-inline items-center">
          <CheckCircle
            :size="20"
            class="mie3"
          />
          File uploaded successfully!
        </div>
      </VueToast>

      <button
        class="demo-button"
        @click="showToast('showIconInfo')"
      >
        Info with Icon
      </button>
      <VueToast
        v-model:open="showIconInfo"
        type="info"
        @toast-close="showIconInfo = false"
      >
        <div class="flex-inline items-center">
          <Info
            :size="20"
            class="mie3"
          />
          You have 3 unread messages
        </div>
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize toast appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <button
        class="demo-button"
        @click="showToast('showCustomGradient')"
      >
        Custom Gradient Toast
      </button>
      <VueToast
        v-model:open="showCustomGradient"
        class="custom-gradient-toast"
        position="top-end"
        @toast-close="showCustomGradient = false"
      >
        <div class="flex-inline items-center">
          <Sparkles
            :size="20"
            class="mie3"
          />
          Custom styled toast with gradient
        </div>
      </VueToast>
    </div>
    <!-- Implementation Guide -->
    <div class="mbe4 implementation-guide">
      <h3>Implementation Patterns</h3>

      <div class="guide-section">
        <h4>Single Toast (Recommended)</h4>
        <p>
          Show one toast at a time to prevent information overload. This demo uses a registry pattern to automatically dismiss the active toast before showing a new one.
        </p>
        <pre><code>// Create registry and track active toast
const toastRefs = { showSuccess, showError /* ... */ };
let activeToastKey = null;

const showToast = (toastKey) => {
  if (activeToastKey) toastRefs[activeToastKey].value = false;
  toastRefs[toastKey].value = true;
  activeToastKey = toastKey;
};</code></pre>
      </div>

      <div class="guide-section">
        <h4>Multiple Toasts (Advanced)</h4>
        <p>
          For simultaneous toasts, implement a queue with unique IDs and render to document.body using your framework's approach:
        </p>
        <ul>
          <li><strong>Vue:</strong> <code>&lt;teleport to="body"&gt;</code></li>
          <li><strong>React:</strong> <code>ReactDOM.createPortal()</code></li>
          <li><strong>Svelte:</strong> Custom action or <code>onMount</code></li>
          <li><strong>Lit/Web Components:</strong> Append container to <code>document.body</code></li>
        </ul>
        <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">
          Key: Maintain toast queue, calculate offsets for stacking, handle enter/exit animations.
        </p>
      </div>

      <div class="guide-section">
        <h4>Best Practices</h4>
        <ul>
          <li>Limit frequency and keep messages brief</li>
          <li>Use appropriate types (error for critical, info for general)</li>
          <li>Important messages need longer durations or manual dismissal</li>
          <li>Test positioning on mobile to avoid obscuring content</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from "vue";
import { VueToast } from "agnosticui-core/toast/vue";
import {
  AlertTriangle,
  AlertCircle,
  XCircle,
  CheckCircle,
  Info,
  Sparkles,
} from "lucide-vue-next";

export default defineComponent({
  name: "ToastExamples",
  components: {
    VueToast,
    AlertTriangle,
    AlertCircle,
    XCircle,
    CheckCircle,
    Info,
    Sparkles,
  },
  setup() {
    const showDefault = ref(false);
    const showSuccess = ref(false);
    const showInfo = ref(false);
    const showPrimary = ref(false);
    const showWarning = ref(false);
    const showError = ref(false);
    const showDanger = ref(false);

    const showTopStart = ref(false);
    const showTop = ref(false);
    const showTopEnd = ref(false);
    const showBottomStart = ref(false);
    const showBottom = ref(false);
    const showBottomEnd = ref(false);

    const showBordered = ref(false);
    const showBorderedLeft = ref(false);
    const showNotRounded = ref(false);

    const showQuickDismiss = ref(false);
    const showAutoDismiss = ref(false);
    const showNoAutoDismiss = ref(false);
    const showNoPause = ref(false);

    const showNoCloseButton = ref(false);
    const showIconSuccess = ref(false);
    const showIconInfo = ref(false);
    const showCustomGradient = ref(false);

    //
    // === TOAST REGISTRY FOR SINGLE ACTIVE TOAST TRACKING ===
    //
    const toastRefs: Record<string, Ref<boolean>> = {
      showDefault,
      showSuccess,
      showInfo,
      showPrimary,
      showWarning,
      showError,
      showDanger,
      showTopStart,
      showTop,
      showTopEnd,
      showBottomStart,
      showBottom,
      showBottomEnd,
      showBordered,
      showBorderedLeft,
      showNotRounded,
      showQuickDismiss,
      showAutoDismiss,
      showNoAutoDismiss,
      showNoPause,
      showNoCloseButton,
      showIconSuccess,
      showIconInfo,
      showCustomGradient,
    };

    let activeToastKey: string | null = null;

    function showToast(toastKey: string) {
      // If another toast is active and it's not the same one, close it
      if (activeToastKey && activeToastKey !== toastKey) {
        toastRefs[activeToastKey].value = false;
      }

      // Show the new toast
      toastRefs[toastKey].value = true;
      activeToastKey = toastKey;
    }

    //
    // === RETURN EVERYTHING TO TEMPLATE ===
    //
    return {
      showDefault,
      showSuccess,
      showInfo,
      showPrimary,
      showWarning,
      showError,
      showDanger,
      showTopStart,
      showTop,
      showTopEnd,
      showBottomStart,
      showBottom,
      showBottomEnd,
      showBordered,
      showBorderedLeft,
      showNotRounded,
      showQuickDismiss,
      showAutoDismiss,
      showNoAutoDismiss,
      showNoPause,
      showNoCloseButton,
      showIconSuccess,
      showIconInfo,
      showCustomGradient,
      showToast,
    };
  },
});
</script>

<style scoped>
/* Demo button styling */
.demo-button {
  padding: 0.5rem 1rem;
  background: var(--ag-primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
  width: fit-content;
}

.demo-button:hover {
  background: var(--ag-primary-dark);
}

.demo-button:active {
  transform: scale(0.98);
}

/* CSS Shadow Parts customization examples */
.custom-gradient-toast::part(ag-toast) {
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
}

.custom-gradient-toast::part(ag-toast-content) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  border: none;
}
</style>

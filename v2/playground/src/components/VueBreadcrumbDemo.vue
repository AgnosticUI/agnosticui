<template>
  <div v-if="!isReady" style="padding: 1rem; color: #666;">
    Loading Vue Breadcrumb components...
  </div>
  <div v-else class="demo-container">
    <h1>AgnosticUI Breadcrumb - Vue Examples</h1>
    <p>
      Interactive demos showcasing the Breadcrumb component with WAI-ARIA compliance,
      multiple separator styles, and comprehensive click event handling.
    </p>

    <div style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 2rem 0; padding: 1rem; background: var(--c-bg-secondary); border-radius: 6px; border: 1px solid var(--c-border);">
      💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see breadcrumb click events.
      <button @click="logTip" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
    </div>

    <!-- Basic Usage -->
    <section class="demo-section">
      <h2>Basic Breadcrumb</h2>
      <p>Standard breadcrumb navigation with chevron separators</p>
      <div class="demo-example">
        <VueBreadcrumb
          :items="basicBreadcrumbs"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>
    </section>

    <!-- Separator Types -->
    <section class="demo-section">
      <h2>Separator Variations</h2>

      <div class="demo-example">
        <h3>Default (Chevron)</h3>
        <VueBreadcrumb
          :items="simpleBreadcrumbs"
          type="default"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>

      <div class="demo-example">
        <h3>Slash Separator</h3>
        <VueBreadcrumb
          :items="simpleBreadcrumbs"
          type="slash"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>

      <div class="demo-example">
        <h3>Arrow Separator</h3>
        <VueBreadcrumb
          :items="simpleBreadcrumbs"
          type="arrow"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>

      <div class="demo-example">
        <h3>Bullet Separator</h3>
        <VueBreadcrumb
          :items="simpleBreadcrumbs"
          type="bullet"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>
    </section>

    <!-- Edge Cases -->
    <section class="demo-section">
      <h2>Edge Cases & Special Scenarios</h2>

      <div class="demo-example">
        <h3>Single Item</h3>
        <VueBreadcrumb
          :items="singleBreadcrumb"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>

      <div class="demo-example">
        <h3>Mixed Items (with/without links)</h3>
        <VueBreadcrumb
          :items="mixedBreadcrumbs"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>

      <div class="demo-example">
        <h3>Long Breadcrumb Trail</h3>
        <VueBreadcrumb
          :items="longBreadcrumbs"
          type="slash"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>
    </section>

    <!-- Custom Aria Label -->
    <section class="demo-section">
      <h2>Accessibility Features</h2>

      <div class="demo-example">
        <h3>Custom Aria Label</h3>
        <VueBreadcrumb
          :items="basicBreadcrumbs"
          aria-label="Product navigation breadcrumb"
          @breadcrumb-click="handleBreadcrumbClick"
        />
        <p><small>Check with screen reader: This breadcrumb has a custom aria-label</small></p>
      </div>
    </section>

    <!-- Dynamic Updates -->
    <section class="demo-section">
      <h2>Dynamic Updates</h2>
      <p>Vue's reactivity system allows seamless breadcrumb updates:</p>

      <div class="demo-example">
        <div style="margin-bottom: 1rem;">
          <button @click="addBreadcrumbItem" style="margin-right: 0.5rem; padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Add Item
          </button>
          <button @click="removeBreadcrumbItem" :disabled="dynamicBreadcrumbs.length <= 1" style="padding: 0.5rem 1rem; background: #dc2626; color: white; border: none; border-radius: 4px; cursor: pointer; opacity: dynamicBreadcrumbs.length <= 1 ? 0.5 : 1;">
            Remove Last
          </button>
        </div>

        <VueBreadcrumb
          :items="dynamicBreadcrumbs"
          type="arrow"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>
    </section>

    <!-- Interactive Testing -->
    <section class="demo-section">
      <h2>Interactive Testing</h2>
      <p>Click any breadcrumb item to see event details below:</p>

      <div class="demo-example">
        <VueBreadcrumb
          :items="basicBreadcrumbs"
          type="arrow"
          @breadcrumb-click="handleBreadcrumbClick"
        />
      </div>

      <div class="actions-log">
        <h4>Action Log:</h4>
        <p v-if="actions.length === 0"><em>No actions yet. Click a breadcrumb item above!</em></p>
        <ul v-else>
          <li v-for="(action, index) in actions" :key="index">{{ action }}</li>
        </ul>
      </div>
    </section>

    <!-- Form Integration Example -->
    <section class="demo-section">
      <h2>Form Integration</h2>
      <p>Breadcrumbs can be part of form navigation flows:</p>

      <form @submit.prevent="handleFormSubmit">
        <VueBreadcrumb
          :items="formBreadcrumbs"
          @breadcrumb-click="handleBreadcrumbClick"
        />

        <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
          <h4>Step 3: Confirmation</h4>
          <p>Please review your information before submitting.</p>
          <button type="submit">Complete Order</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';
import type { BreadcrumbItem } from 'agnosticui-core/breadcrumb';

// Import web components to ensure they're registered
import 'agnosticui-core';

const isReady = ref(false);
const actions = ref<string[]>([]);

// Sample breadcrumb data sets
const basicBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Laptops", href: "/products/laptops" },
  { label: "MacBook Pro", current: true }
];

const simpleBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Current Page", current: true }
];

const singleBreadcrumb: BreadcrumbItem[] = [
  { label: "Home", current: true }
];

const mixedBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Category" }, // No href
  { label: "Subcategory", href: "/category/subcategory" },
  { label: "Current Item", current: true }
];

const longBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Electronics", href: "/electronics" },
  { label: "Computers", href: "/electronics/computers" },
  { label: "Laptops", href: "/electronics/computers/laptops" },
  { label: "Gaming Laptops", href: "/electronics/computers/laptops/gaming" },
  { label: "High Performance", href: "/electronics/computers/laptops/gaming/high-performance" },
  { label: "ASUS ROG Series", current: true }
];

const formBreadcrumbs: BreadcrumbItem[] = [
  { label: "Step 1: Personal Info", href: "#step1" },
  { label: "Step 2: Payment", href: "#step2" },
  { label: "Step 3: Confirmation", current: true }
];

// Dynamic breadcrumbs for testing reactivity
const dynamicBreadcrumbs = ref<BreadcrumbItem[]>([
  { label: "Home", href: "/" },
  { label: "Current", current: true }
]);

onMounted(async () => {
  try {
    await Promise.all([
      customElements.whenDefined("ag-breadcrumb"),
    ]);
    console.log("Breadcrumb web components are ready for Vue wrappers!");
    isReady.value = true;
  } catch (error) {
    console.error("Error waiting for web components:", error);
    // Fall back to rendering anyway after a short delay
    setTimeout(() => { isReady.value = true; }, 1000);
  }
});

const addAction = (message: string) => {
  const timestamp = new Date().toLocaleTimeString();
  actions.value = [
    `${timestamp}: ${message}`,
    ...actions.value.slice(0, 9) // Keep last 10 actions
  ];
};

const handleBreadcrumbClick = (detail: { item: BreadcrumbItem; index: number; event: MouseEvent }) => {
  console.log(`Breadcrumb clicked:`, detail);
  addAction(`Clicked "${detail.item.label}" at index ${detail.index}${detail.item.href ? ` (href: ${detail.item.href})` : ''}`);
};

const addBreadcrumbItem = () => {
  const itemCount = dynamicBreadcrumbs.value.length;
  // Remove current flag from last item
  if (dynamicBreadcrumbs.value.length > 0) {
    dynamicBreadcrumbs.value[dynamicBreadcrumbs.value.length - 1].current = false;
    dynamicBreadcrumbs.value[dynamicBreadcrumbs.value.length - 1].href = `/item-${itemCount}`;
  }

  // Add new current item
  dynamicBreadcrumbs.value.push({
    label: `Item ${itemCount + 1}`,
    current: true
  });

  addAction(`Added breadcrumb item: "Item ${itemCount + 1}"`);
};

const removeBreadcrumbItem = () => {
  if (dynamicBreadcrumbs.value.length > 1) {
    const removed = dynamicBreadcrumbs.value.pop();
    // Mark the new last item as current
    dynamicBreadcrumbs.value[dynamicBreadcrumbs.value.length - 1].current = true;
    delete dynamicBreadcrumbs.value[dynamicBreadcrumbs.value.length - 1].href;

    addAction(`Removed breadcrumb item: "${removed?.label}"`);
  }
};

const handleFormSubmit = () => {
  addAction("Form submitted!");
};

const logTip = () => {
  console.log("🚀 Vue Breadcrumb Event Debugging Tips:");
  console.log("• All breadcrumb clicks are logged with full event details");
  console.log("• Check the 'detail' property for: { item, index, event }");
  console.log("• The 'item' contains: { label, href?, current? }");
  console.log("• Use Vue DevTools to inspect component state and props");
  console.log("• Try clicking different breadcrumb items to see various event patterns");
};
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
}

.demo-example {
  margin: 1rem 0;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 6px;
  border: 1px solid #f3f4f6;
}

.demo-example h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--c-text);
  font-size: 1rem;
}

.actions-log {
  margin-top: 1rem;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}

.actions-log h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--c-text);
}

.actions-log ul {
  margin: 0;
  padding-left: 1.5rem;
  max-height: 200px;
  overflow-y: auto;
}

.actions-log li {
  margin: 0.25rem 0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
  color: var(--c-text-light);
}

h1 {
  color: #111827;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 0.5rem;
}

h2 {
  color: var(--c-text);
  margin-top: 0;
}

p {
  color: var(--c-text-light);
  line-height: 1.6;
}

form {
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 1rem;
  background: white;
}

button[type="submit"] {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

button[type="submit"]:hover {
  background: #1d4ed8;
}
</style>

<style>
/* Global breadcrumb styling using CSS custom properties */
ag-breadcrumb {
  --ag-space-1: 0.25rem;
  --ag-space-2: 0.5rem;
  --ag-primary: #3b82f6;
  --ag-primary-hover: #1d4ed8;
  --ag-text-primary: #111827;
  --ag-text-secondary: var(--c-text-light);
  --ag-background-secondary: rgba(59, 130, 246, 0.1);
  --ag-focus: #f59e0b;
  --ag-focus-width: 2px;
  --ag-focus-offset: 2px;
  --ag-border-radius: 0.25rem;
  --ag-transition-duration: 200ms;
}
</style>
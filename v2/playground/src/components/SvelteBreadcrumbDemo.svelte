<script>
  import { onMount } from 'svelte';

  // Direct import of web components - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let actions = $state([]);

  // Sample breadcrumb data sets
  const basicBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Laptops", href: "/products/laptops" },
    { label: "MacBook Pro", current: true }
  ];

  const simpleBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Current Page", current: true }
  ];

  const singleBreadcrumb = [
    { label: "Home", current: true }
  ];

  const mixedBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Category" }, // No href
    { label: "Subcategory", href: "/category/subcategory" },
    { label: "Current Item", current: true }
  ];

  const longBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Electronics", href: "/electronics" },
    { label: "Computers", href: "/electronics/computers" },
    { label: "Laptops", href: "/electronics/computers/laptops" },
    { label: "Gaming Laptops", href: "/electronics/computers/laptops/gaming" },
    { label: "High Performance", href: "/electronics/computers/laptops/gaming/high-performance" },
    { label: "ASUS ROG Series", current: true }
  ];

  const formBreadcrumbs = [
    { label: "Step 1: Personal Info", href: "#step1" },
    { label: "Step 2: Payment", href: "#step2" },
    { label: "Step 3: Confirmation", current: true }
  ];

  // Dynamic breadcrumbs for testing reactivity
  let dynamicBreadcrumbs = $state([
    { label: "Home", href: "/" },
    { label: "Current", current: true }
  ]);

  const addAction = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    actions = [
      `${timestamp}: ${message}`,
      ...actions.slice(0, 9) // Keep last 10 actions
    ];
  };

  const handleBreadcrumbClick = (event) => {
    const detail = event.detail;
    console.log(`Breadcrumb clicked:`, detail);
    addAction(`Clicked "${detail.item.label}" at index ${detail.index}${detail.item.href ? ` (href: ${detail.item.href})` : ''}`);
  };

  const addBreadcrumbItem = () => {
    const itemCount = dynamicBreadcrumbs.length;
    // Remove current flag from last item
    if (dynamicBreadcrumbs.length > 0) {
      dynamicBreadcrumbs[dynamicBreadcrumbs.length - 1].current = false;
      dynamicBreadcrumbs[dynamicBreadcrumbs.length - 1].href = `/item-${itemCount}`;
    }

    // Add new current item
    dynamicBreadcrumbs = [...dynamicBreadcrumbs, {
      label: `Item ${itemCount + 1}`,
      current: true
    }];

    addAction(`Added breadcrumb item: "Item ${itemCount + 1}"`);
  };

  const removeBreadcrumbItem = () => {
    if (dynamicBreadcrumbs.length > 1) {
      const removed = dynamicBreadcrumbs.pop();
      // Mark the new last item as current
      dynamicBreadcrumbs[dynamicBreadcrumbs.length - 1].current = true;
      delete dynamicBreadcrumbs[dynamicBreadcrumbs.length - 1].href;

      // Trigger reactivity
      dynamicBreadcrumbs = [...dynamicBreadcrumbs];

      addAction(`Removed breadcrumb item: "${removed?.label}"`);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addAction("Form submitted!");
  };

  const logTip = () => {
    console.log("🚀 Svelte Breadcrumb Event Debugging Tips:");
    console.log("• All breadcrumb clicks are logged with full event details");
    console.log("• Check the 'detail' property for: { item, index, event }");
    console.log("• The 'item' contains: { label, href?, current? }");
    console.log("• Use Svelte DevTools to inspect component state and props");
    console.log("• Try clicking different breadcrumb items to see various event patterns");
  };
</script>

<div class="demo-container">
  <h1>AgnosticUI Breadcrumb - Svelte Examples</h1>
  <p>
    Interactive demos showcasing the Breadcrumb component with WAI-ARIA compliance,
    multiple separator styles, and comprehensive click event handling.
  </p>

  <div class="info-tip">
    💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see breadcrumb click events.
    <button type="button" onclick={logTip} class="log-tip-button">Click here</button> for event debugging tips!
  </div>

  <!-- Basic Usage -->
  <section class="demo-section">
    <h2>Basic Breadcrumb</h2>
    <p>Standard breadcrumb navigation with chevron separators</p>
    <div class="demo-example">
      <ag-breadcrumb
        bind:this={undefined}
        items={basicBreadcrumbs}
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>
  </section>

  <!-- Separator Types -->
  <section class="demo-section">
    <h2>Separator Variations</h2>

    <div class="demo-example">
      <h3>Default (Chevron)</h3>
      <ag-breadcrumb
        items={simpleBreadcrumbs}
        type="default"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>

    <div class="demo-example">
      <h3>Slash Separator</h3>
      <ag-breadcrumb
        items={simpleBreadcrumbs}
        type="slash"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>

    <div class="demo-example">
      <h3>Arrow Separator</h3>
      <ag-breadcrumb
        items={simpleBreadcrumbs}
        type="arrow"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>

    <div class="demo-example">
      <h3>Bullet Separator</h3>
      <ag-breadcrumb
        items={simpleBreadcrumbs}
        type="bullet"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>
  </section>

  <!-- Edge Cases -->
  <section class="demo-section">
    <h2>Edge Cases & Special Scenarios</h2>

    <div class="demo-example">
      <h3>Single Item</h3>
      <ag-breadcrumb
        items={singleBreadcrumb}
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>

    <div class="demo-example">
      <h3>Mixed Items (with/without links)</h3>
      <ag-breadcrumb
        items={mixedBreadcrumbs}
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>

    <div class="demo-example">
      <h3>Long Breadcrumb Trail</h3>
      <ag-breadcrumb
        items={longBreadcrumbs}
        type="slash"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>
  </section>

  <!-- Custom Aria Label -->
  <section class="demo-section">
    <h2>Accessibility Features</h2>

    <div class="demo-example">
      <h3>Custom Aria Label</h3>
      <ag-breadcrumb
        items={basicBreadcrumbs}
        aria-label="Product navigation breadcrumb"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
      <p><small>Check with screen reader: This breadcrumb has a custom aria-label</small></p>
    </div>
  </section>

  <!-- Dynamic Updates -->
  <section class="demo-section">
    <h2>Dynamic Updates</h2>
    <p>Svelte's reactivity system allows seamless breadcrumb updates:</p>

    <div class="demo-example">
      <div style="margin-bottom: 1rem;">
        <button
          type="button"
          onclick={addBreadcrumbItem}
          class="action-button primary"
        >
          Add Item
        </button>
        <button
          type="button"
          onclick={removeBreadcrumbItem}
          disabled={dynamicBreadcrumbs.length <= 1}
          class="action-button danger"
          class:disabled={dynamicBreadcrumbs.length <= 1}
        >
          Remove Last
        </button>
      </div>

      <ag-breadcrumb
        items={dynamicBreadcrumbs}
        type="arrow"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>
  </section>

  <!-- Interactive Testing -->
  <section class="demo-section">
    <h2>Interactive Testing</h2>
    <p>Click any breadcrumb item to see event details below:</p>

    <div class="demo-example">
      <ag-breadcrumb
        items={basicBreadcrumbs}
        type="arrow"
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>
    </div>

    <div class="actions-log">
      <h4>Action Log:</h4>
      {#if actions.length === 0}
        <p><em>No actions yet. Click a breadcrumb item above!</em></p>
      {:else}
        <ul>
          {#each actions as action, index (action)}
            <li>{action}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </section>

  <!-- Form Integration Example -->
  <section class="demo-section">
    <h2>Form Integration</h2>
    <p>Breadcrumbs can be part of form navigation flows:</p>

    <form onsubmit={handleFormSubmit}>
      <ag-breadcrumb
        items={formBreadcrumbs}
        onbreadcrumb-click={handleBreadcrumbClick}
      ></ag-breadcrumb>

      <div class="form-content">
        <h4>Step 3: Confirmation</h4>
        <p>Please review your information before submitting.</p>
        <button type="submit">Complete Order</button>
      </div>
    </form>
  </section>
</div>

<style>
  .demo-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .info-tip {
    font-size: 0.875rem;
    color: var(--ag-text-secondary);
    margin: 0 0 2rem 0;
    padding: 1rem;
    background: var(--ag-background-secondary);
    border-radius: 6px;
    border: 1px solid var(--c-border);
  }

  .log-tip-button {
    color: var(--ag-primary);
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font: inherit;
  }

  .demo-section {
    margin-bottom: 3rem;
    padding: 1.5rem;
    border: 1px solid var(--c-border);
    border-radius: 8px;
    background: var(--c-card-bg);
  }

  .demo-example {
    margin: 1rem 0;
    padding: 1rem;
    background: var(--ag-background-secondary);
    border-radius: 6px;
    border: 1px solid var(--c-border);
  }

  .demo-example h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--ag-text-primary);
    font-size: 1rem;
  }

  .action-button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }

  .action-button.primary {
    background: var(--ag-primary);
    color: white;
  }

  .action-button.danger {
    background: var(--ag-danger);
    color: white;
  }

  .action-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .actions-log {
    margin-top: 1rem;
    padding: 1rem;
    background: var(--ag-background-secondary);
    border-radius: 6px;
    border: 1px solid var(--c-border);
  }

  .actions-log h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--ag-text-primary);
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
    color: var(--ag-text-secondary);
  }

  h1 {
    color: var(--ag-text-primary);
    border-bottom: 2px solid var(--ag-primary);
    padding-bottom: 0.5rem;
  }

  h2 {
    color: var(--ag-text-primary);
    margin-top: 0;
  }

  p {
    color: var(--ag-text-secondary);
    line-height: 1.6;
  }

  form {
    border: 1px solid var(--c-border);
    border-radius: 6px;
    padding: 1rem;
    background: var(--c-card-bg);
  }

  .form-content {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid var(--c-border);
    border-radius: 4px;
  }

  button[type="submit"] {
    background: var(--ag-primary);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }

  button[type="submit"]:hover {
    background: var(--ag-primary-hover);
  }

  /* Global breadcrumb styling using CSS custom properties */
  :global(ag-breadcrumb) {
    --ag-space-1: 0.25rem;
    --ag-space-2: 0.5rem;
    --ag-primary: var(--ag-primary);
    --ag-primary-hover: var(--ag-primary-hover);
    --ag-text-primary: var(--ag-text-primary);
    --ag-text-secondary: var(--ag-text-secondary);
    --ag-background-secondary: var(--ag-background-secondary);
    --ag-focus: var(--ag-focus);
    --ag-focus-width: 2px;
    --ag-focus-offset: 2px;
    --ag-border-radius: 0.25rem;
    --ag-transition-duration: 200ms;
  }
</style>
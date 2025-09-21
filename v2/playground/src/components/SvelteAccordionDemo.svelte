<script>
  import { onMount } from 'svelte';

  // Direct import of web components without wrapper - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let togglePressed = $state(false);

  const handleClick = (event) => {
    const target = event.target;
    const buttonText = target.textContent?.trim() || 'Unknown Button';
    console.log(`🎛️ Svelte Accordion Button clicked: "${buttonText}"`, {
      buttonId: target.id || 'no-id',
      type: target.type || target.getAttribute('type') || 'button',
      disabled: target.disabled,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-accordion-click',
      target: target
    });
  };

  const handleToggle = (event) => {
    const detail = event.detail;
    const itemElement = event.target;
    const headerElement = itemElement.querySelector('[slot="header"]');
    const headerText = headerElement?.textContent?.trim() || 'Unknown Section';

    console.log(`🎛️ Svelte Accordion toggled: "${headerText}" ${detail.open ? 'EXPANDED' : 'COLLAPSED'}`, {
      expanded: detail.open,
      itemId: itemElement.id || 'no-id',
      headerText: headerText,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-accordion-toggle',
      detail: detail
    });
  };
</script>

<div style="padding: 1rem;">
  <h3>Svelte + AgnosticUI Accordion Components</h3>

  <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
    💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see expand/collapse events from all Svelte accordion examples below.
    <button onclick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract accordion item text, open state, and other properties from Svelte event handlers!')} style="color: var(--agnostic-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
  </p>

  <!-- Basic Accordion -->
  <div style="margin: 1rem 0;">
    <h4>Basic Accordion</h4>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-accordion>
      <ag-accordion-item id="svelte-item-1" ontoggle={handleToggle}>
        <span slot="header">Getting Started with Svelte</span>
        <div slot="content">
          <p>This accordion demonstrates Svelte 5 integration with AgnosticUI web components using direct DOM integration. Features include:</p>
          <ul>
            <li>Direct web component usage (no wrapper needed)</li>
            <li>Svelte 5 reactive state with <code>$state()</code></li>
            <li>Event handling with proper logging</li>
            <li>Full accessibility support</li>
          </ul>
        </div>
      </ag-accordion-item>

      <ag-accordion-item id="svelte-item-2" open ontoggle={handleToggle}>
        <span slot="header">Features (This one starts open!)</span>
        <div slot="content">
          <p>This Svelte accordion integration provides:</p>
          <ul>
            <li>Perfect Svelte 5 reactivity</li>
            <li>Keyboard navigation (try arrow keys!)</li>
            <li>ARIA compliance maintained</li>
            <li>Custom event handling</li>
            <li>Console logging for debugging</li>
          </ul>
        </div>
      </ag-accordion-item>

      <ag-accordion-item id="svelte-item-3" ontoggle={handleToggle}>
        <span slot="header">Implementation Details</span>
        <div slot="content">
          <p>The implementation uses direct web component integration:</p>
          <blockquote>
            <p><strong>Why direct integration?</strong> Svelte 5 + Astro + web component wrappers proved fundamentally incompatible. Direct integration provides superior performance, reliability, and zero maintenance overhead.</p>
          </blockquote>
          <div>
            <h5>Technical Benefits:</h5>
            <ul>
              <li>Zero wrapper complexity</li>
              <li>Better performance</li>
              <li>Simpler, cleaner architecture</li>
              <li>Perfect Svelte 5 reactivity</li>
            </ul>
          </div>
        </div>
      </ag-accordion-item>
    </ag-accordion>
  </div>

  <!-- Interactive Accordion with Buttons -->
  <div style="margin: 2rem 0;">
    <h4>Interactive Controls</h4>
    <p>Accordion items can contain interactive elements that work seamlessly with Svelte event handling:</p>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-accordion>
      <ag-accordion-item id="svelte-item-interactive" ontoggle={handleToggle}>
        <span slot="header">Interactive Content Section</span>
        <div slot="content">
          <p>This section contains interactive elements to demonstrate event handling:</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <ag-button onclick={handleClick} class="primary">
              Primary Action
            </ag-button>

            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <ag-button onclick={handleClick} class="secondary">
              Secondary Action
            </ag-button>
          </div>
          <p>Click the buttons above to see Svelte event handling in action!</p>
        </div>
      </ag-accordion-item>
    </ag-accordion>
  </div>
</div>
<script>
  import { onMount } from 'svelte';

  // Direct import of web components without wrapper - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let isDisabled = $state(false);
  let dynamicContent = $state('Initial tooltip content');
  let clickTooltipVisible = $state(false);

  const handleShow = (event) => {
    const target = event.target;
    const trigger = target.querySelector('button, input')?.textContent?.trim() ||
                   target.querySelector('button, input')?.placeholder || 'Unknown Trigger';
    console.log(`🌟 Svelte Tooltip shown: "${trigger}"`, {
      tooltipId: target.id || 'no-id',
      trigger: trigger,
      placement: target.getAttribute('placement') || 'top',
      content: target.getAttribute('content') || 'No content',
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-tooltip-show'
    });
  };

  const handleHide = (event) => {
    const target = event.target;
    const trigger = target.querySelector('button, input')?.textContent?.trim() ||
                   target.querySelector('button, input')?.placeholder || 'Unknown Trigger';
    console.log(`🔲 Svelte Tooltip hidden: "${trigger}"`, {
      tooltipId: target.id || 'no-id',
      trigger: trigger,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-tooltip-hide'
    });
  };

  const handleButtonClick = (event) => {
    const target = event.target;
    const buttonText = target.textContent?.trim() || 'Unknown Button';
    console.log(`🔘 Svelte Tooltip Button clicked: "${buttonText}"`, {
      buttonId: target.id || 'no-id',
      buttonText: buttonText,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-tooltip-button-click'
    });
  };

  const toggleDisabled = () => {
    isDisabled = !isDisabled;
    console.log(`🔧 Tooltip disabled state changed: ${isDisabled ? 'DISABLED' : 'ENABLED'}`);
  };

  const updateContent = () => {
    dynamicContent = `Updated at ${new Date().toLocaleTimeString()}`;
    console.log(`📝 Tooltip content updated: "${dynamicContent}"`);
  };
</script>

<div style="padding: 1rem;">
  <h3>Svelte + AgnosticUI Tooltip Components</h3>

  <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
    💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see show/hide events from all Svelte tooltip examples below.
    <button onclick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract trigger text, tooltip placement, and DOM properties from Event targets in Svelte event handlers!')} style="color: var(--ag-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
  </p>

  <!-- Basic Tooltips -->
  <div style="margin: 1rem 0;">
    <h4>Basic Tooltips</h4>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-1"
        content="This is a helpful tooltip!"
        placement="top"
        onshow={handleShow}
        onhide={handleHide}>
        <button onclick={handleButtonClick}>Hover me (Top)</button>
      </ag-tooltip>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-2"
        content="Bottom placement tooltip"
        placement="bottom"
        onshow={handleShow}
        onhide={handleHide}>
        <button onclick={handleButtonClick}>Hover me (Bottom)</button>
      </ag-tooltip>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-3"
        content="Left side tooltip"
        placement="left"
        onshow={handleShow}
        onhide={handleHide}>
        <button onclick={handleButtonClick}>Hover me (Left)</button>
      </ag-tooltip>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-4"
        content="Right side tooltip"
        placement="right"
        onshow={handleShow}
        onhide={handleHide}>
        <button onclick={handleButtonClick}>Hover me (Right)</button>
      </ag-tooltip>
    </div>
  </div>

  <!-- Different Triggers -->
  <div style="margin: 2rem 0;">
    <h4>Different Trigger Methods</h4>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-hover"
        content="Appears on hover and focus"
        trigger="hover focus"
        onshow={handleShow}
        onhide={handleHide}>
        <button onclick={handleButtonClick}>Hover/Focus</button>
      </ag-tooltip>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-click"
        content="Click to toggle tooltip"
        trigger="click"
        onshow={handleShow}
        onhide={handleHide}>
        <button onclick={handleButtonClick}>Click Toggle</button>
      </ag-tooltip>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-focus"
        content="Focus only tooltip"
        trigger="focus"
        onshow={handleShow}
        onhide={handleHide}>
        <input type="text" placeholder="Focus me" style="padding: 0.5rem; border: 1px solid var(--c-border); border-radius: 4px;" />
      </ag-tooltip>
    </div>
  </div>

  <!-- Dynamic State Control -->
  <div style="margin: 2rem 0; padding: 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg-secondary);">
    <h4>Dynamic State Control (Svelte 5 Reactivity)</h4>

    <div style="margin: 1rem 0;">
      <p>Control tooltip state with Svelte 5 <code>$state()</code> reactivity:</p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
        <button onclick={toggleDisabled} style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-card-bg); cursor: pointer;">
          {isDisabled ? 'Enable' : 'Disable'} Tooltip
        </button>

        <button onclick={updateContent} style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-card-bg); cursor: pointer;">
          Update Content
        </button>
      </div>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-dynamic"
        content={dynamicContent}
        disabled={isDisabled}
        onshow={handleShow}
        onhide={handleHide}>
        <button onclick={handleButtonClick} style="padding: 0.5rem 1rem; border: 1px solid var(--ag-primary); border-radius: 4px; background: var(--ag-primary); color: white; cursor: pointer;">
          Dynamic Tooltip ({isDisabled ? 'Disabled' : 'Enabled'})
        </button>
      </ag-tooltip>
    </div>

    <div style="font-size: 0.875rem; color: var(--c-text-light); margin-top: 1rem;">
      <p><strong>Current State:</strong></p>
      <ul style="font-family: monospace;">
        <li><strong>Disabled:</strong> {isDisabled}</li>
        <li><strong>Content:</strong> "{dynamicContent}"</li>
      </ul>
    </div>
  </div>

  <!-- Form Elements with Tooltips -->
  <div style="margin: 2rem 0;">
    <h4>Form Elements with Tooltips</h4>
    <div style="display: grid; gap: 1rem; max-width: 400px;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-input"
        content="Enter your full name as it appears on official documents"
        placement="top"
        trigger="focus"
        onshow={handleShow}
        onhide={handleHide}>
        <input type="text" placeholder="Full Name" style="padding: 0.75rem; border: 1px solid var(--c-border); border-radius: 4px; width: 100%; box-sizing: border-box;" />
      </ag-tooltip>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-tooltip
        id="svelte-tooltip-email"
        content="We'll never share your email address with third parties"
        placement="bottom"
        trigger="focus hover"
        onshow={handleShow}
        onhide={handleHide}>
        <input type="email" placeholder="Email Address" style="padding: 0.75rem; border: 1px solid var(--c-border); border-radius: 4px; width: 100%; box-sizing: border-box;" />
      </ag-tooltip>
    </div>
  </div>

  <!-- Integration Demo -->
  <div style="margin: 2rem 0; padding: 1rem; border: 2px dashed var(--c-border); border-radius: 4px;">
    <h4>Svelte 5 + AgnosticUI Integration Highlights</h4>
    <ul style="line-height: 1.6;">
      <li><strong>Direct Web Components:</strong> No wrapper complexity - use <code>&lt;ag-tooltip&gt;</code> directly</li>
      <li><strong>Svelte 5 Reactivity:</strong> <code>$state()</code> runes work perfectly with web component attributes</li>
      <li><strong>Event Handling:</strong> Standard <code>onshow</code>/<code>onhide</code> event listeners</li>
      <li><strong>Performance:</strong> Zero framework wrapper overhead</li>
      <li><strong>Accessibility:</strong> Full ARIA support maintained</li>
      <li><strong>Flexibility:</strong> All tooltip features available (placement, triggers, etc.)</li>
    </ul>
  </div>
</div>
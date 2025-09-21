<script>
  import { onMount } from 'svelte';

  // Direct import of web components without the library wrapper - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let togglePressed = $state(false);

  const handleClick = (event) => {
    const target = event.target;
    const buttonText = target.textContent?.trim() || 'Unknown Button';
    console.log(`🔘 Svelte Button clicked: "${buttonText}"`, {
      buttonId: target.id || 'no-id',
      type: target.type || target.getAttribute('type') || 'button',
      disabled: target.disabled,
      variant: target.className || target.getAttribute('class') || 'default',
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-direct-click',
      target: target
    });
  };

  const handleToggle = (event) => {
    const detail = event.detail;
    console.log(`🔀 Svelte Toggle Button: ${detail.pressed ? 'PRESSED' : 'NOT PRESSED'}`, {
      pressed: detail.pressed,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-direct-toggle',
      detail: detail
    });
    togglePressed = detail.pressed;
  };
</script>

<div style="padding: 1rem;">
  <h3>Svelte + AgnosticUI Web Components</h3>

  <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
    💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see click and toggle events from all Svelte examples below.
    <button onclick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract button text, type, disabled state, and other properties from Svelte event handlers!')} style="color: var(--agnostic-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
  </p>

  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={handleClick}>
      Default Button
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={handleClick} class="primary">
      Primary Button
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={handleClick} class="secondary">
      Secondary Button
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={handleClick} class="danger">
      Danger Button
    </ag-button>
  </div>

  <h4>Button Types</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button type="button" onclick={handleClick}>
      Button Type
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button type="submit" onclick={handleClick} class="primary">
      Submit Type
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button type="reset" onclick={handleClick} class="secondary">
      Reset Type
    </ag-button>
  </div>

  <h4>Button States</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button disabled onclick={handleClick}>
      Disabled Button
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button loading onclick={handleClick} class="primary">
      Loading Button
    </ag-button>
  </div>

  <h4>Toggle Functionality</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button
      toggle
      pressed={togglePressed}
      ontoggle={handleToggle}
    >
      Toggle Button {togglePressed ? "(Pressed)" : "(Not Pressed)"}
    </ag-button>
  </div>

  <h4>With Icons</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={handleClick} class="primary">
      <span style="margin-right: 0.5rem;">📥</span>
      Download
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={handleClick} class="secondary">
      ⚙️
    </ag-button>
  </div>
</div>
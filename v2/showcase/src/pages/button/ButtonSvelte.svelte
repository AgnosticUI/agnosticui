<script>
  import { onMount } from 'svelte';

  // Direct import of web components without the library wrapper - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let clickCount = $state(0);
  let togglePressed = $state(false);
  let isLoading = $state(false);

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
    clickCount++;
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

  const handleAsyncAction = async () => {
    isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 2000));
    isLoading = false;
  };
</script>

<div style="padding: 2rem;">
  <h1>Svelte Button Examples</h1>

  <section style="margin-bottom: 2rem;">
    <h2>Basic Variants</h2>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button>Default Button</ag-button>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button onclick={handleClick}>
        Clicked {clickCount} times
      </ag-button>
    </div>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2>Button Types</h2>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button type="button">Button Type</ag-button>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button type="submit">Submit Type</ag-button>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button type="reset">Reset Type</ag-button>
    </div>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2>Button States</h2>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button disabled>Disabled Button</ag-button>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button loading={isLoading} onclick={handleAsyncAction}>
        {isLoading ? "Loading..." : "Async Action"}
      </ag-button>
    </div>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2>Toggle Functionality</h2>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
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
  </section>

  <section style="margin-bottom: 2rem;">
    <h2>With Icons</h2>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button>
        <span style="margin-right: 0.5rem;">📥</span>
        Download
      </ag-button>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button>⚙️</ag-button>
    </div>
  </section>
</div>

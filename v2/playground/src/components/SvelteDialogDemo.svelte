<script>
  import { onMount } from 'svelte';

  // Direct import of web components without wrapper - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let isDialogOpen = $state(false);
  let isSimpleDialogOpen = $state(false);
  let isCustomDialogOpen = $state(false);

  const handleDialogOpen = (event) => {
    const dialogElement = event.target;
    const heading = dialogElement.heading || 'Unknown Dialog';

    console.log(`🗨️ Svelte Dialog opened: "${heading}"`, {
      dialogId: dialogElement.id || 'no-id',
      heading: dialogElement.heading,
      description: dialogElement.description,
      showCloseButton: dialogElement.showCloseButton,
      closeOnEscape: dialogElement.closeOnEscape,
      closeOnBackdrop: dialogElement.closeOnBackdrop,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-dialog-open',
      target: dialogElement
    });
  };

  const handleDialogClose = (event) => {
    const dialogElement = event.target;
    const heading = dialogElement.heading || 'Unknown Dialog';

    console.log(`🗨️ Svelte Dialog closed: "${heading}"`, {
      dialogId: dialogElement.id || 'no-id',
      heading: dialogElement.heading,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-dialog-close',
      target: dialogElement
    });
  };

  const handleDialogCancel = (event) => {
    const dialogElement = event.target;
    const heading = dialogElement.heading || 'Unknown Dialog';

    console.log(`🗨️ Svelte Dialog cancelled (ESC/backdrop): "${heading}"`, {
      dialogId: dialogElement.id || 'no-id',
      heading: dialogElement.heading,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-dialog-cancel',
      target: dialogElement
    });
  };

  const handleButtonClick = (event) => {
    const target = event.target;
    const buttonText = target.textContent?.trim() || 'Unknown Button';
    console.log(`🔘 Svelte Dialog Button clicked: "${buttonText}"`, {
      buttonId: target.id || 'no-id',
      type: target.type || target.getAttribute('type') || 'button',
      disabled: target.disabled,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-dialog-button-click',
      target: target
    });
  };

  const openDialog = () => {
    isDialogOpen = true;
  };

  const closeDialog = () => {
    isDialogOpen = false;
  };

  const openSimpleDialog = () => {
    isSimpleDialogOpen = true;
  };

  const closeSimpleDialog = () => {
    isSimpleDialogOpen = false;
  };

  const openCustomDialog = () => {
    isCustomDialogOpen = true;
  };

  const closeCustomDialog = () => {
    isCustomDialogOpen = false;
  };
</script>

<div style="padding: 1rem;">
  <h3>Svelte + AgnosticUI Dialog Components</h3>

  <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
    💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see dialog events from all Svelte dialog examples below.
    <button onclick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract dialog properties, open state, and event details from Svelte event handlers!')} style="color: var(--ag-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
  </p>

  <!-- Dialog Trigger Buttons -->
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0;">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={openDialog} class="primary">
      Open Main Dialog
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={openSimpleDialog} class="secondary">
      Open Simple Dialog
    </ag-button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-button onclick={openCustomDialog} class="outline">
      Open Custom Dialog
    </ag-button>
  </div>

  <!-- Main Dialog with Rich Content -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <ag-dialog
    id="svelte-main-dialog"
    {...(isDialogOpen ? { open: true } : {})}
    heading="Svelte Dialog Demo"
    description="This dialog demonstrates direct AgnosticUI web component integration with Svelte 5."
    show-close-button={true}
    ondialog-open={handleDialogOpen}
    ondialog-close={handleDialogClose}
    ondialog-cancel={handleDialogCancel}
  >
    <div style="margin: 1rem 0;">
      <h4>Svelte + AgnosticUI Integration</h4>
      <p>This dialog showcases direct web component integration with Svelte 5, providing:</p>
      <ul>
        <li>Perfect reactivity with Svelte's <code>$state()</code></li>
        <li>Focus management and keyboard navigation</li>
        <li>Backdrop click handling</li>
        <li>ESC key support</li>
        <li>ARIA compliance</li>
      </ul>

      <p><strong>Features demonstrated:</strong></p>
      <ul>
        <li>Heading and description props</li>
        <li>Close button (X in top-right)</li>
        <li>Event logging for debugging</li>
        <li>Interactive content within dialog</li>
      </ul>
    </div>

    <div slot="footer" style="display: flex; gap: 1rem; justify-content: flex-end;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button onclick={(event) => {
        handleButtonClick(event);
        closeDialog();
      }} class="secondary">
        Cancel Action
      </ag-button>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button onclick={closeDialog} class="primary">
        Confirm & Close
      </ag-button>
    </div>
  </ag-dialog>

  <!-- Simple Dialog -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <ag-dialog
    id="svelte-simple-dialog"
    {...(isSimpleDialogOpen ? { open: true } : {})}
    heading="Simple Confirmation"
    close-on-escape={true}
    close-on-backdrop={true}
    ondialog-open={handleDialogOpen}
    ondialog-close={handleDialogClose}
    ondialog-cancel={handleDialogCancel}
  >
    <p>This is a simple confirmation dialog without the close button.</p>
    <p><strong>Try:</strong> Press ESC key or click outside to close.</p>

    <div slot="footer" style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button onclick={closeSimpleDialog} class="secondary">
        Cancel
      </ag-button>

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <ag-button onclick={closeSimpleDialog} class="primary">
        OK
      </ag-button>
    </div>
  </ag-dialog>

  <!-- Custom Dialog with Slots -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <ag-dialog
    id="svelte-custom-dialog"
    {...(isCustomDialogOpen ? { open: true } : {})}
    close-on-escape={false}
    close-on-backdrop={false}
    ondialog-open={handleDialogOpen}
    ondialog-close={handleDialogClose}
    ondialog-cancel={handleDialogCancel}
  >
    <div slot="header">
      <h2 style="margin: 0; color: var(--ag-primary);">
        🎛️ Custom Header Slot
      </h2>
      <p style="margin: 0.5rem 0 0 0; font-size: 0.875rem; color: var(--c-text-light);">
        This uses a custom header slot instead of the heading prop
      </p>
    </div>

    <div style="margin: 1rem 0;">
      <p>This dialog demonstrates:</p>
      <ul>
        <li><strong>Custom header slot</strong> - replaces the default heading</li>
        <li><strong>Disabled ESC/backdrop</strong> - must use buttons to close</li>
        <li><strong>Rich content</strong> - custom styling and layout</li>
        <li><strong>Footer actions</strong> - multiple button options</li>
      </ul>

      <div style="background: var(--c-bg-secondary); padding: 1rem; border-radius: 4px; border: 1px solid var(--c-border); margin: 1rem 0;">
        <p style="margin: 0; font-size: 0.875rem;">
          <strong>Note:</strong> ESC key and backdrop clicks are disabled for this dialog.
          You must use the action buttons below to close it.
        </p>
      </div>
    </div>

    <div slot="footer" style="display: flex; gap: 1rem; justify-content: space-between; align-items: center;">
      <div>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <ag-button onclick={handleButtonClick} class="outline">
          Help
        </ag-button>
      </div>

      <div style="display: flex; gap: 1rem;">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <ag-button onclick={closeCustomDialog} class="secondary">
          Cancel
        </ag-button>

        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <ag-button onclick={closeCustomDialog} class="danger">
          Delete
        </ag-button>

        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <ag-button onclick={closeCustomDialog} class="primary">
          Save Changes
        </ag-button>
      </div>
    </div>
  </ag-dialog>

  <!-- Implementation Notes -->
  <div style="margin: 2rem 0; padding: 1rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
    <h4 style="margin-top: 0;">Implementation Notes</h4>
    <p>This Svelte dialog integration demonstrates:</p>
    <ul>
      <li><strong>Direct web component integration</strong> - no wrapper needed</li>
      <li><strong>Svelte 5 reactivity</strong> - using <code>$state()</code> for dialog state</li>
      <li><strong>Event handling</strong> - proper dialog events with logging</li>
      <li><strong>Slot content</strong> - custom headers and footers</li>
      <li><strong>Focus management</strong> - automatic focus handling</li>
      <li><strong>Accessibility</strong> - keyboard navigation and ARIA support</li>
    </ul>

    <p><strong>Why direct integration?</strong> Svelte 5 + Astro + web component wrappers proved fundamentally incompatible. Direct integration provides superior performance, reliability, and zero maintenance overhead.</p>
  </div>
</div>
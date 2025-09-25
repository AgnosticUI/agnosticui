<script>
  import { onMount } from 'svelte';

  // Direct import of web components - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let basicToggle = $state(false);
  let formToggle = $state(true);
  let actions = $state([]);

  const addAction = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    actions = [
      `${timestamp}: ${message}`,
      ...actions.slice(0, 9) // Keep last 10 actions
    ];
  };

  const handleToggleChange = (event) => {
    const detail = event.detail;
    console.log(`Toggle changed:`, detail);
    const label = detail.name || 'Toggle';
    const state = detail.checked ? 'ON' : 'OFF';
    addAction(`${label} switched ${state}${detail.value ? ` (value: ${detail.value})` : ''}`);
  };

  const handleBasicToggle = (event) => {
    const detail = event.detail;
    basicToggle = detail.checked;
    handleToggleChange(event);
  };

  const handleFormToggle = (event) => {
    const detail = event.detail;
    formToggle = detail.checked;
    handleToggleChange(event);
  };

  const clearActions = () => {
    actions = [];
  };

  const logTip = () => {
    console.log('🎯 TIP: Expand the logged objects to see toggle state, name, value, and other properties from Svelte event handlers!');
  };
</script>

<div style="padding: 1rem;">
  <h3>Svelte Toggle Examples</h3>

  <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
    💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see toggle change events from all Svelte examples below.
    <button on:click={logTip} style="color: var(--ag-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
  </p>

  <div style="display: grid; gap: 2rem; max-width: 800px;">
    <!-- Basic Toggle Examples -->
    <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
      <h4 style="margin-top: 0;">Basic Toggles</h4>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle
            label="Basic Toggle"
            checked={basicToggle || undefined}
            name="basicToggle"
            on:toggle-change={handleBasicToggle}
          />
          <span>State: {basicToggle ? 'ON' : 'OFF'}</span>
        </div>

        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle
            label="Default Checked"
            checked={true}
            name="defaultChecked"
            on:toggle-change={handleToggleChange}
          />
          <span>Always starts checked</span>
        </div>

        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle
            label="With Value"
            checked={false}
            name="valueToggle"
            value="premium-feature"
            on:toggle-change={handleToggleChange}
          />
          <span>Has a form value</span>
        </div>
      </div>
    </div>

    <!-- Size Variants -->
    <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
      <h4 style="margin-top: 0;">Size Variants</h4>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Extra Small" size="xs" name="xsToggle" on:toggle-change={handleToggleChange} />
          <span>xs size</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Small" size="sm" name="smToggle" on:toggle-change={handleToggleChange} />
          <span>sm size</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Medium (Default)" size="md" name="mdToggle" on:toggle-change={handleToggleChange} />
          <span>md size</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Large" size="lg" name="lgToggle" on:toggle-change={handleToggleChange} />
          <span>lg size</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Extra Large" size="xl" name="xlToggle" on:toggle-change={handleToggleChange} />
          <span>xl size</span>
        </div>
      </div>
    </div>

    <!-- Color Variants -->
    <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
      <h4 style="margin-top: 0;">Color Variants</h4>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Default" variant="default" checked={true} name="defaultVariant" on:toggle-change={handleToggleChange} />
          <span>Default blue</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Success" variant="success" checked={true} name="successVariant" on:toggle-change={handleToggleChange} />
          <span>Success green</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Warning" variant="warning" checked={true} name="warningVariant" on:toggle-change={handleToggleChange} />
          <span>Warning orange</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Danger" variant="danger" checked={true} name="dangerVariant" on:toggle-change={handleToggleChange} />
          <span>Danger red</span>
        </div>
      </div>
    </div>

    <!-- States -->
    <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
      <h4 style="margin-top: 0;">Toggle States</h4>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Disabled Off" disabled={true} checked={false} name="disabledOff" on:toggle-change={handleToggleChange} />
          <span>Cannot be toggled</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Disabled On" disabled={true} checked={true} name="disabledOn" on:toggle-change={handleToggleChange} />
          <span>Cannot be toggled</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle label="Read-only" readonly={true} checked={true} name="readonly" on:toggle-change={handleToggleChange} />
          <span>Looks interactive but won't change</span>
        </div>
      </div>
    </div>

    <!-- Form Integration -->
    <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
      <h4 style="margin-top: 0;">Form Integration Example</h4>
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle
            label="Newsletter Subscription"
            checked={formToggle || undefined}
            name="newsletter"
            value="subscribed"
            on:toggle-change={handleFormToggle}
          />
          <span>Subscribe to our newsletter</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle
            label="Marketing Emails"
            checked={false}
            name="marketing"
            value="enabled"
            on:toggle-change={handleToggleChange}
          />
          <span>Receive marketing emails</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <ag-toggle
            label="Dark Mode"
            checked={false}
            name="theme"
            value="dark"
            on:toggle-change={handleToggleChange}
          />
          <span>Enable dark theme</span>
        </div>
      </form>
    </div>

    <!-- Action Log -->
    <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
      <h4 style="margin-top: 0;">Action Log</h4>
      <div style="border: 1px solid #ddd; border-radius: 4px; padding: 1rem; background: white; max-height: 300px; overflow-y: auto;">
        <button
          on:click={clearActions}
          disabled={actions.length === 0}
          style="padding: 0.5rem 1rem; background: #f0f0f0; border: 1px solid #ccc; border-radius: 4px; cursor: {actions.length === 0 ? 'not-allowed' : 'pointer'}; margin-bottom: 1rem; opacity: {actions.length === 0 ? 0.5 : 1};"
        >
          Clear Log
        </button>
        {#if actions.length === 0}
          <p style="color: #666; font-style: italic; margin: 0;">
            No actions yet. Toggle some switches above!
          </p>
        {:else}
          <ul style="margin: 0; padding: 0; list-style: none;">
            {#each actions as action, index}
              <li style="padding: 0.25rem 0; border-bottom: {index < actions.length - 1 ? '1px solid #f0f0f0' : 'none'}; font-family: monospace; font-size: 0.9rem;">
                {action}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>

    <!-- Reactive State Demo -->
    <div style="padding: 1.5rem; border: 1px solid var(--c-border); border-radius: 8px; background: var(--c-bg-secondary);">
      <h4 style="margin-top: 0;">Svelte 5 Reactivity Demo</h4>
      <p>Current values (reactive with Svelte 5 <code>$state()</code>):</p>
      <ul style="font-family: monospace; font-size: 0.9rem;">
        <li><strong>Basic Toggle:</strong> {basicToggle ? 'ON' : 'OFF'}</li>
        <li><strong>Form Toggle:</strong> {formToggle ? 'ON' : 'OFF'}</li>
        <li><strong>Actions Count:</strong> {actions.length}</li>
      </ul>
      <p style="font-size: 0.875rem; color: var(--c-text-light);">
        Toggle switches above to see Svelte 5 reactivity in action! The values update automatically using <code>$state()</code> runes.
      </p>
    </div>
  </div>
</div>
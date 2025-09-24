<script lang="ts">
  import '../core/_IconButton';

  let closePressed = false;
  let menuPressed = false;
  let saving = false;
  let actions: string[] = [];

  function handleClose() {
    closePressed = !closePressed;
    addAction(`Close button ${closePressed ? 'pressed' : 'released'}`);
  }

  function handleMenu() {
    menuPressed = !menuPressed;
    addAction(`Menu button ${menuPressed ? 'opened' : 'closed'}`);
  }

  async function handleSave() {
    if (saving) return;

    saving = true;
    addAction('Save started...');

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));

    saving = false;
    addAction('Save completed!');
  }

  function handleEdit() {
    addAction('Edit button clicked');
  }

  function handleDelete() {
    if (confirm('Are you sure you want to delete this item?')) {
      addAction('Item deleted');
    }
  }

  function addAction(message: string) {
    actions = [
      `${new Date().toLocaleTimeString()}: ${message}`,
      ...actions.slice(0, 9) // Keep last 10 actions
    ];
  }

  function clearActions() {
    actions = [];
  }
</script>

<div class="demo-container">
  <h2>IconButton Svelte Integration Demo</h2>

  <div class="demo-section">
    <h3>Basic Icon Buttons</h3>
    <div class="button-group">
      <ag-icon-button
        label="Close"
        unicode="×"
        variant="ghost"
        on:icon-button-click={handleClose}
      />

      <ag-icon-button
        label="Menu"
        unicode="☰"
        pressed={menuPressed}
        on:icon-button-click={handleMenu}
      />

      <ag-icon-button
        label="Edit"
        unicode="✎"
        variant="primary"
        on:icon-button-click={handleEdit}
      />

      <ag-icon-button
        label="Delete"
        unicode="🗑"
        variant="danger"
        on:icon-button-click={handleDelete}
      />
    </div>
  </div>

  <div class="demo-section">
    <h3>Custom Icon with SVG</h3>
    <div class="button-group">
      <ag-icon-button
        label="Settings"
        variant="secondary"
        on:icon-button-click={() => addAction('Settings opened')}
      >
        <svg viewBox="0 0 24 24" style="width: 1em; height: 1em; fill: currentColor;">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
        </svg>
      </ag-icon-button>
    </div>
  </div>

  <div class="demo-section">
    <h3>Different Sizes</h3>
    <div class="button-group">
      <ag-icon-button
        label="Extra small"
        unicode="×"
        size="xs"
        on:icon-button-click={() => addAction('XS button clicked')}
      />
      <ag-icon-button
        label="Small"
        unicode="×"
        size="sm"
        on:icon-button-click={() => addAction('Small button clicked')}
      />
      <ag-icon-button
        label="Medium"
        unicode="×"
        size="md"
        on:icon-button-click={() => addAction('Medium button clicked')}
      />
      <ag-icon-button
        label="Large"
        unicode="×"
        size="lg"
        on:icon-button-click={() => addAction('Large button clicked')}
      />
      <ag-icon-button
        label="Extra large"
        unicode="×"
        size="xl"
        on:icon-button-click={() => addAction('XL button clicked')}
      />
    </div>
  </div>

  <div class="demo-section">
    <h3>Loading State</h3>
    <div class="button-group">
      <ag-icon-button
        label="Save"
        unicode="💾"
        loading={saving}
        disabled={saving}
        variant="primary"
        on:icon-button-click={handleSave}
      >
        <span slot="loading" style="font-size: 0.75em;">Saving...</span>
      </ag-icon-button>
    </div>
  </div>

  <div class="demo-section">
    <h3>Disabled State</h3>
    <div class="button-group">
      <ag-icon-button
        label="Disabled button"
        unicode="🚫"
        disabled={true}
        on:icon-button-click={() => addAction('This should not fire')}
      />
    </div>
  </div>

  <div class="demo-section">
    <h3>Action Log</h3>
    <div class="action-log">
      <button on:click={clearActions} class="clear-button" disabled={actions.length === 0}>
        Clear Log
      </button>
      {#if actions.length === 0}
        <p class="empty-state">No actions yet. Click some buttons above!</p>
      {:else}
        <ul>
          {#each actions as action}
            <li>{action}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>

<style>
  .demo-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .demo-section {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fafafa;
  }

  .demo-section h3 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.1rem;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  .action-log {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    background: white;
    max-height: 300px;
    overflow-y: auto;
  }

  .clear-button {
    padding: 0.5rem 1rem;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .clear-button:hover:not(:disabled) {
    background: #e0e0e0;
  }

  .clear-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .empty-state {
    color: #666;
    font-style: italic;
    margin: 0;
  }

  .action-log ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .action-log li {
    padding: 0.25rem 0;
    border-bottom: 1px solid #f0f0f0;
    font-family: monospace;
    font-size: 0.9rem;
  }

  .action-log li:last-child {
    border-bottom: none;
  }

  /* Custom styling for our icon buttons */
  :global(ag-icon-button) {
    --ag-icon-button-padding: 0.5rem;
    --ag-icon-button-border-radius: 0.25rem;
    --ag-icon-button-font-size: 1rem;
  }

  /* Variant-specific styling */
  :global(ag-icon-button[variant="primary"]) {
    --ag-icon-button-background: #0066cc;
    --ag-icon-button-color: white;
    --ag-icon-button-background-hover: #0052a3;
  }

  :global(ag-icon-button[variant="danger"]) {
    --ag-icon-button-background: transparent;
    --ag-icon-button-color: #d73a49;
    --ag-icon-button-background-hover: rgba(215, 58, 73, 0.1);
    --ag-icon-button-border-hover: 1px solid #d73a49;
  }

  :global(ag-icon-button[variant="secondary"]) {
    --ag-icon-button-background: #f6f8fa;
    --ag-icon-button-color: #24292f;
    --ag-icon-button-border: 1px solid #d0d7de;
    --ag-icon-button-background-hover: #f3f4f6;
  }
</style>
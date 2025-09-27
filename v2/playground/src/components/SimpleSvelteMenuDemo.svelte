<script>
  import { onMount } from 'svelte';

  let selectedItem = '';

  const handleMenuSelect = (event) => {
    selectedItem = event.detail.value;
    console.log('Svelte Menu - Selected item:', event.detail.value);
  };

  const handleMenuOpen = () => {
    console.log('Svelte Menu - Menu opened');
  };

  const handleMenuClose = () => {
    console.log('Svelte Menu - Menu closed');
  };

  onMount(async () => {
    // Import web components on client side
    await import('agnosticui-core/menu');
  });
</script>

<div style="padding: 1rem;">
  <h3>Svelte Menu Component</h3>
  <p>Selected item: <strong>{selectedItem || 'None'}</strong></p>

  <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
    <ag-menu-button
      on:menu-open={handleMenuOpen}
      on:menu-close={handleMenuClose}
    >
      Tools Menu
      <ag-menu slot="menu" on:menu-select={handleMenuSelect}>
        <ag-menu-item value="calculator">Calculator</ag-menu-item>
        <ag-menu-item value="notepad">Notepad</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="preferences">Preferences</ag-menu-item>
        <ag-menu-item value="about">About</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="disabled-tool" disabled>Disabled Tool</ag-menu-item>
      </ag-menu>
    </ag-menu-button>

    <ag-menu-button
      aria-label="Navigation menu"
      on:menu-open={handleMenuOpen}
      on:menu-close={handleMenuClose}
    >
      Navigation
      <ag-menu slot="menu" on:menu-select={handleMenuSelect}>
        <ag-menu-item value="home" href="/">Home</ag-menu-item>
        <ag-menu-item value="dashboard" href="/dashboard">Dashboard</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="profile" href="/profile">Profile</ag-menu-item>
        <ag-menu-item value="settings" href="/settings">Settings</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="help" href="/help" target="_blank">Help</ag-menu-item>
      </ag-menu>
    </ag-menu-button>
  </div>

  <div style="
    font-size: 0.875rem;
    color: var(--ag-text-secondary);
    margin: 1rem 0;
    padding: 0.5rem;
    background: var(--ag-background-secondary);
    border-radius: 4px;
    border: 1px solid var(--ag-border-primary);
  ">
    💡 <strong>Console Logging:</strong> Open your browser console to see Svelte menu interaction events.
    This demonstrates direct web component integration with Svelte 5 for optimal performance.
  </div>
</div>
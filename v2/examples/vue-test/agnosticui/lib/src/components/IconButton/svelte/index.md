# Svelte IconButton Integration

The AgnosticUI IconButton component integrates directly with Svelte through web components. No wrapper component is needed.

## Basic Usage

```svelte
<script>
  import '../core/_IconButton';

  let iconButtonRef;

  function handleClick(event) {
    console.log('Button clicked:', event.detail);
  }

  function handleActivate(event) {
    console.log('Button activated via keyboard:', event.detail);
  }
</script>

<ag-icon-button
  bind:this={iconButtonRef}
  label="Close dialog"
  unicode="×"
  on:icon-button-click={handleClick}
  on:icon-button-activate={handleActivate}
/>
```

## Advanced Usage

### With Custom Icons

```svelte
<script>
  import '../core/_IconButton';
</script>

<ag-icon-button label="Menu" icon="hamburger">
  <svg viewBox="0 0 24 24" style="width: 1em; height: 1em;">
    <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
  </svg>
</ag-icon-button>
```

### With Size and Variant

```svelte
<script>
  import '../core/_IconButton';
</script>

<ag-icon-button
  label="Delete item"
  unicode="🗑"
  size="lg"
  variant="danger"
  on:icon-button-click={(e) => deleteItem(e.detail)}
/>
```

### Toggle Button Example

```svelte
<script>
  import '../core/_IconButton';

  let isPressed = false;

  function toggle(event) {
    isPressed = !isPressed;
    event.target.pressed = isPressed;
  }
</script>

<ag-icon-button
  label={isPressed ? 'Hide menu' : 'Show menu'}
  unicode="☰"
  pressed={isPressed}
  on:icon-button-click={toggle}
/>
```

### With Loading State

```svelte
<script>
  import '../core/_IconButton';

  let saving = false;

  async function save() {
    saving = true;
    try {
      await saveData();
    } finally {
      saving = false;
    }
  }
</script>

<ag-icon-button
  label="Save"
  unicode="💾"
  loading={saving}
  disabled={saving}
  on:icon-button-click={save}
>
  <span slot="loading">Saving...</span>
</ag-icon-button>
```

## TypeScript Support

For TypeScript projects, extend the global HTMLElement interface:

```typescript
declare global {
  namespace svelteHTML {
    interface IntrinsicElements {
      'ag-icon-button': {
        label: string;
        icon?: string;
        unicode?: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        pressed?: boolean;
        loading?: boolean;
        'aria-describedby'?: string;
        'on:icon-button-click'?: (event: CustomEvent) => void;
        'on:icon-button-activate'?: (event: CustomEvent) => void;
      };
    }
  }
}
```

## Event Handling

The ag-icon-button component emits two custom events:

- `icon-button-click`: Fired on mouse click or touch
- `icon-button-activate`: Fired on keyboard activation (Space/Enter)

Both events include a `detail` object with:
- `label`: The button's accessible label
- `pressed`: Current pressed state
- `originalEvent`: The original DOM event

## Accessibility Features

The component automatically handles:
- ARIA roles and attributes
- Keyboard navigation (Space/Enter activation)
- Focus management
- Screen reader announcements
- High contrast mode support

## Styling

Use CSS custom properties for theming:

```svelte
<style>
  :global(ag-icon-button) {
    --ag-icon-button-color: #333;
    --ag-icon-button-background: transparent;
    --ag-icon-button-border: 1px solid transparent;
    --ag-icon-button-border-radius: 0.25rem;
    --ag-icon-button-padding: 0.5rem;
    --ag-icon-button-font-size: 1rem;
    --ag-icon-button-line-height: 1.5;

    /* Hover state */
    --ag-icon-button-color-hover: #000;
    --ag-icon-button-background-hover: rgba(0, 0, 0, 0.05);
    --ag-icon-button-border-hover: 1px solid rgba(0, 0, 0, 0.1);

    /* Focus state */
    --ag-icon-button-color-focus: #000;
    --ag-icon-button-background-focus: rgba(0, 0, 0, 0.05);
    --ag-icon-button-border-focus: 2px solid #0066cc;
    --ag-icon-button-outline-focus: 2px solid transparent;
    --ag-icon-button-outline-offset-focus: 2px;

    /* Disabled state */
    --ag-icon-button-color-disabled: #999;
    --ag-icon-button-background-disabled: transparent;
    --ag-icon-button-border-disabled: 1px solid transparent;
  }
</style>
```
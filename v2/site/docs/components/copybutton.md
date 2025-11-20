# Copy Button

An accessible button component that copies text to the clipboard with visual feedback. The CopyButton automatically toggles between copy and checkmark icons and provides customizable success messaging.

## Examples

<CopyButtonExamples />

<script setup>
import CopyButtonExamples from '../examples/CopyButtonExamples.vue'
</script>

## Basic Usage

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/copybutton';
</script>

<!-- Basic copy button -->
<ag-copy-button
  text="npm install agnosticui-core"
  label="Copy install command"
></ag-copy-button>

<!-- With custom success message -->
<ag-copy-button
  text="console.log('Hello, AgnosticUI!');"
  label="Copy code snippet"
  success-label="Code copied!"
></ag-copy-button>

<!-- Event listener example -->
<ag-copy-button
  id="copy-btn"
  text="Event handling example"
  label="Copy with event"
></ag-copy-button>

<script>
  const copyBtn = document.querySelector('#copy-btn');
  copyBtn?.addEventListener('copy', (e) => {
    console.log('Copied to clipboard:', e.detail.text);
  });
</script>
```
:::

::: details Vue
```vue
<template>
  <section>
    <!-- Basic copy button -->
    <VueCopyButton
      text="npm install agnosticui-core"
      label="Copy install command"
    />

    <!-- With event listener -->
    <VueCopyButton
      id="vue-copy-btn"
      text="Event handling example"
      label="Copy with event"
    />
  </section>
</template>

<script>
import VueCopyButton from 'agnosticui-core/copy-button/vue'

export default {
  components: { VueCopyButton },
  mounted() {
    const copyBtn = document.querySelector('#vue-copy-btn');
    copyBtn?.addEventListener('copy', (e) => {
      console.log('Copied to clipboard (Vue):', e.detail.text);
    });
  }
}
</script>
```
:::

::: details React
```tsx
import React from 'react';
import { ReactCopyButton } from 'agnosticui-core/copy-button/react';

export default function Example() {
  return (
    <div>
      <ReactCopyButton text="npm install agnosticui-core" label="Copy install command" />

      {/* With event handler */}
      <ReactCopyButton
        text="Event handling example"
        label="Copy with event"
        // React wrappers emit DOM events from the underlying web component
        onCopy={(e: any) => console.log('Copied to clipboard (React):', e.detail?.text)}
      />
    </div>
  );
}
```
:::

## Custom Icons

The CopyButton allows you to provide custom SVG icons for both the copy and copied states while maintaining default fallbacks:
```html
<!-- Default icons -->
<ag-copy-button
  text="Uses default Material Design icons"
  label="Copy with defaults"
></ag-copy-button>

<!-- NOTE: If you provide custom icons, you MUST provide both `icon-copy` and `icon-copied` slots.
     Providing only one will throw an error at runtime. The example below shows both slots.
-->

<!-- Both custom icons -->
<ag-copy-button
  text="Both icons customized"
  label="Copy with custom icons"
>
  <!-- visually-distinct custom icons: outline clipboard (copy) + filled green check (copied) -->
  <svg slot="icon-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z" />
    <rect x="8" y="5" width="11" height="14" rx="2" ry="2" stroke="currentColor" fill="none" />
    <path d="M8 7h8" stroke="currentColor" />
  </svg>

  <svg slot="icon-copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#16A34A" stroke="none">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12.5l2 2 4-5" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</ag-copy-button>
```

### Using Icon Libraries

You can use any SVG icon library with the custom icon slots:

```html
<!-- With Heroicons -->
<ag-copy-button text="Heroicons example" label="Copy">
  <svg slot="icon-copy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
  <svg slot="icon-copied" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
</ag-copy-button>

<!-- With Feather Icons -->
<ag-copy-button text="Feather Icons example" label="Copy">
  <svg slot="icon-copy" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
  <svg slot="icon-copied" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
</ag-copy-button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `''` | **Required**. The text to copy to the clipboard. |
| `label` | `string` | `'Copy to clipboard'` | Accessible label for the button (aria-label). Announced by screen readers. |
| `successLabel` | `string` | `'Copied!'` | Label to show when the text has been successfully copied. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the button. Controls button dimensions and icon size. |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'ghost' \| 'monochrome'` | `'ghost'` | Visual style variant. Inherits from IconButton styling. |

## Slots

| Slot | Description |
|------|-------------|
| `icon-copy` | Custom SVG icon for the default copy state. Falls back to a copy icon if not provided. |
| `icon-copied` | Custom SVG icon for the success/copied state. Falls back to checkmark icon if not provided. |

> **Note:** If you provide custom icons, you must supply *both* the `icon-copy` and `icon-copied` slots together. Providing only one will throw a runtime error.

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `copy` | `{ text: string }` | Fired when text is successfully copied to the clipboard. Provides the copied text in the event detail. |

### Event Handling Examples

```html
<!-- Using addEventListener -->
<ag-copy-button id="event-example" text="Event example"></ag-copy-button>

<script>
  const btn = document.querySelector('#event-example');
  btn.addEventListener('copy', (e) => {
    console.log('Copied:', e.detail.text);
    // Show toast notification
    showToast(`Copied: ${e.detail.text}`);
  });
</script>

<!-- Multiple handlers -->
<script>
  const copyBtn = document.querySelector('#multi-handler');

  copyBtn.addEventListener('copy', (e) => {
    // Analytics tracking
    trackEvent('copy_button', { text: e.detail.text });
  });

  copyBtn.addEventListener('copy', (e) => {
    // Update UI
    updateCopyCount();
  });
</script>
```

## Accessibility

The CopyButton is built on top of IconButton and implements proper accessibility:

- Uses semantic `<button>` element
- Provides clear accessible labels via `aria-label`
- Announces state changes to screen readers (copy → copied)
- Keyboard accessible (Space and Enter keys)
- Clear focus indicators for keyboard navigation
- Minimum 44px touch target for mobile accessibility (WCAG 2.1 Level AAA)

### Success Feedback

The success state provides feedback through:
1. **Visual**: Icon changes from copy to checkmark
2. **Text**: Label updates from "Copy to clipboard" to "Copied!"
3. **Assistive tech**: Screen readers announce the new label
4. **Timing**: Automatically reverts after 1 second

## Common Patterns

### Code Snippets

Use CopyButton alongside code blocks in documentation:

```html
<div class="code-example">
  <pre><code>npm install agnosticui-core</code></pre>
  <ag-copy-button
    text="npm install agnosticui-core"
    label="Copy install command"
    size="sm"
    variant="ghost"
  ></ag-copy-button>
</div>

<style>
  .code-example {
    position: relative;
    background: var(--ag-background-secondary);
    padding: var(--ag-space-4);
    border-radius: var(--ag-radius);
  }

  .code-example ag-copy-button {
    position: absolute;
    top: var(--ag-space-2);
    right: var(--ag-space-2);
  }
</style>
```

### API Keys and Tokens

Copy sensitive information with visual confirmation:

```html
<div class="token-display">
  <code id="api-token">sk_test_abc123xyz789...</code>
  <ag-copy-button
    text="sk_test_abc123xyz789..."
    label="Copy API token"
    success-label="Token copied!"
    variant="monochrome"
    size="sm"
  ></ag-copy-button>
</div>

<script>
  const copyBtn = document.querySelector('.token-display ag-copy-button');
  copyBtn.addEventListener('copy', () => {
    // Log security event
    console.log('API token copied at:', new Date().toISOString());
  });
</script>
```

### Share URLs

Make sharing links easier:

```html
<div class="share-section">
  <label for="share-url">Share this page:</label>
  <div class="share-input-group">
    <input
      id="share-url"
      type="text"
      readonly
      value="https://agnosticui.com/components/copybutton"
    />
    <ag-copy-button
      text="https://agnosticui.com/components/copybutton"
      label="Copy share link"
      success-label="Link copied!"
      variant="primary"
    ></ag-copy-button>
  </div>
</div>
```

### Integration with Toast Notifications

Combine with toast notifications for enhanced feedback:

```html
<ag-copy-button
  id="toast-copy"
  text="Content to copy"
  label="Copy"
></ag-copy-button>

<script>
  import 'agnosticui-core/toast';

  const btn = document.querySelector('#toast-copy');
  const toastContainer = document.querySelector('ag-toast-container');

  btn.addEventListener('copy', (e) => {
    const toast = document.createElement('ag-toast');
    toast.type = 'success';
    toast.textContent = `Copied: ${e.detail.text}`;
    toastContainer.appendChild(toast);
  });
</script>
```

## Browser Support

The CopyButton uses the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) which is supported in all modern browsers:

- Chrome/Edge 66+
- Firefox 63+
- Safari 13.1+

For older browsers, the copy operation will fail gracefully and log an error to the console.

## Best Practices

1. **Provide clear context** - Use descriptive labels that indicate what's being copied
2. **Position strategically** - Place copy buttons near the content they copy
3. **Use appropriate variants** - Ghost or monochrome work well in most contexts
4. **Consider mobile** - The default sizes work well on touch devices
5. **Track failures** - Listen for console errors if clipboard access fails
6. **Combine with feedback** - Consider adding toast notifications for important copy actions
7. **Secure sensitive data** - Log or audit when sensitive information is copied

## When to Use

**Use CopyButton when:**
- Users need to copy code snippets, commands, or text
- You want to reduce friction in workflows (API keys, share links)
- Space is limited and you need a compact copy solution
- You have documentation or technical content

**Consider alternatives when:**
- The content is very long (let users select and copy themselves)
- Copy functionality isn't the primary action
- You need more context than a button provides

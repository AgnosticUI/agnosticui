# Dialog

A dialog is a modal window that overlays the main content and requires user interaction before returning to the application. Dialogs are useful for confirmations, alerts, forms, and presenting focused content.

## Examples

<DialogExamples />

<script setup>
import DialogExamples from '../examples/DialogExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic dialog -->
    <VueButton @click="showDialog">Open Dialog</VueButton>
    <VueDialog
      v-model:open="isOpen"
      heading="Dialog Title"
      description="This is a dialog description"
      @dialog-close="handleClose"
    >
      <p>This is the dialog content.</p>
    </VueDialog>

    <!-- With header and footer -->
    <VueButton @click="showCustomDialog">Open Custom Dialog</VueButton>
    <VueDialog v-model:open="isCustomOpen">
      <VueDialogHeader>
        <h2 style="margin: 0;">Custom Header</h2>
      </VueDialogHeader>
      <p>Dialog with custom header and footer.</p>
      <VueDialogFooter>
        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <VueButton @click="isCustomOpen = false">Cancel</VueButton>
          <VueButton variant="primary" @click="isCustomOpen = false">Confirm</VueButton>
        </div>
      </VueDialogFooter>
    </VueDialog>

    <!-- With close button -->
    <VueButton @click="showCloseButtonDialog">Open Dialog</VueButton>
    <VueDialog
      v-model:open="isCloseButtonOpen"
      heading="Dialog with Close Button"
      show-close-button
    >
      <p>This dialog includes a close button.</p>
    </VueDialog>

    <!-- Event handling -->
    <VueButton @click="showEventDialog">Open Dialog</VueButton>
    <VueDialog
      v-model:open="isEventOpen"
      heading="Event Testing"
      show-close-button
      @dialog-open="handleOpen"
      @dialog-close="handleClose"
      @dialog-cancel="handleCancel"
    >
      <p>Try closing this dialog different ways to see events.</p>
    </VueDialog>
  </section>
</template>

<script>
import VueDialog, { VueDialogHeader, VueDialogFooter } from "agnosticui-core/dialog/vue";
import VueButton from "agnosticui-core/button/vue";

export default {
  components: {
    VueDialog,
    VueDialogHeader,
    VueDialogFooter,
    VueButton,
  },
  data() {
    return {
      isOpen: false,
      isCustomOpen: false,
      isCloseButtonOpen: false,
      isEventOpen: false,
    };
  },
  methods: {
    showDialog() {
      this.isOpen = true;
    },
    showCustomDialog() {
      this.isCustomOpen = true;
    },
    showCloseButtonDialog() {
      this.isCloseButtonOpen = true;
    },
    showEventDialog() {
      this.isEventOpen = true;
    },
    handleOpen() {
      console.log("Dialog opened");
    },
    handleClose() {
      console.log("Dialog closed");
    },
    handleCancel() {
      console.log("Dialog cancelled");
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactDialog, DialogHeader, DialogFooter } from 'agnosticui-core/dialog/react';

export default function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isCloseButtonOpen, setIsCloseButtonOpen] = useState(false);

  const handleClose = () => {
    console.log("Dialog closed");
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log("Dialog cancelled");
    setIsOpen(false);
  };

  return (
    <section>
      {/* Basic dialog */}
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <ReactDialog
        open={isOpen}
        heading="Dialog Title"
        description="This is a dialog description"
        onDialogClose={handleClose}
        onDialogCancel={handleCancel}
      >
        <p>This is the dialog content.</p>
      </ReactDialog>

      {/* With header and footer */}
      <button onClick={() => setIsCustomOpen(true)}>Open Custom Dialog</button>
      <ReactDialog
        open={isCustomOpen}
        onDialogClose={() => setIsCustomOpen(false)}
        onDialogCancel={() => setIsCustomOpen(false)}
      >
        <DialogHeader>
          <h2 style={{ margin: 0 }}>Custom Header</h2>
        </DialogHeader>
        <p>Dialog with custom header and footer.</p>
        <DialogFooter>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <button onClick={() => setIsCustomOpen(false)}>Cancel</button>
            <button onClick={() => setIsCustomOpen(false)}>Confirm</button>
          </div>
        </DialogFooter>
      </ReactDialog>

      {/* With close button */}
      <button onClick={() => setIsCloseButtonOpen(true)}>Open Dialog</button>
      <ReactDialog
        open={isCloseButtonOpen}
        heading="Dialog with Close Button"
        showCloseButton={true}
        onDialogClose={() => setIsCloseButtonOpen(false)}
        onDialogCancel={() => setIsCloseButtonOpen(false)}
      >
        <p>This dialog includes a close button.</p>
      </ReactDialog>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/dialog';

  document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('#my-dialog');
    const openButton = document.querySelector('#open-dialog');

    openButton?.addEventListener('click', () => {
      if (dialog) {
        dialog.open = true;
      }
    });

    dialog?.addEventListener('dialog-close', () => {
      dialog.open = false;
      console.log('Dialog closed');
    });

    dialog?.addEventListener('dialog-cancel', () => {
      dialog.open = false;
      console.log('Dialog cancelled');
    });
  });
</script>

<section>
  <!-- Basic dialog -->
  <button id="open-dialog">Open Dialog</button>
  <ag-dialog
    id="my-dialog"
    heading="Dialog Title"
    description="This is a dialog description"
  >
    <p>This is the dialog content.</p>
  </ag-dialog>

  <!-- With header and footer -->
  <ag-dialog id="custom-dialog">
    <div slot="header">
      <h2 style="margin: 0;">Custom Header</h2>
    </div>
    <p>Dialog with custom header and footer.</p>
    <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <button>Cancel</button>
      <button>Confirm</button>
    </div>
  </ag-dialog>

  <!-- With close button -->
  <ag-dialog
    heading="Dialog with Close Button"
    show-close-button
  >
    <p>This dialog includes a close button.</p>
  </ag-dialog>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the dialog is open |
| `heading` | `string` | `''` | The heading text for the dialog |
| `description` | `string` | `''` | The description text for the dialog |
| `noCloseOnEscape` | `boolean` | `false` | Prevents closing the dialog when pressing the Escape key |
| `noCloseOnBackdrop` | `boolean` | `false` | Prevents closing the dialog when clicking the backdrop |
| `showCloseButton` | `boolean` | `false` | Shows a close button (×) in the top-right corner of the dialog |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@dialog-open` (Vue) / `onDialogOpen` (React) / `dialog-open` (Lit) | `void` | Emitted when the dialog is opened |
| `@dialog-close` (Vue) / `onDialogClose` (React) / `dialog-close` (Lit) | `void` | Emitted when the dialog is closed via the close button |
| `@dialog-cancel` (Vue) / `onDialogCancel` (React) / `dialog-cancel` (Lit) | `void` | Emitted when the dialog is cancelled (Escape key or backdrop click) |

## Slots

### Vue
- **Default slot**: Main content of the dialog
- **VueDialogHeader**: Custom header content (replaces `heading` prop when used)
- **VueDialogFooter**: Footer content for action buttons

### React
- **children**: Main content of the dialog
- **DialogHeader**: Custom header content (replaces `heading` prop when used)
- **DialogFooter**: Footer content for action buttons

### Lit
- **Default slot**: Main content of the dialog
- **slot="header"**: Custom header content (replaces `heading` prop when used)
- **slot="footer"**: Footer content for action buttons

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the dialog from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-dialog-backdrop` | The backdrop overlay element behind the dialog |
| `ag-dialog-container` | The main dialog container that holds all dialog content |
| `ag-dialog-header` | The header section wrapper |
| `ag-dialog-heading` | The heading text element (when using `heading` prop) |
| `ag-dialog-close-button` | The close button (when `showCloseButton` is true) |
| `ag-dialog-content` | The main content section wrapper |
| `ag-dialog-footer` | The footer section wrapper |

### Customization Example

```css
/* Customize the backdrop */
ag-dialog::part(ag-dialog-backdrop) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
}

/* Style the dialog container */
ag-dialog::part(ag-dialog-container) {
  background: linear-gradient(to bottom, #ffffff, #f0f4ff);
  border: 3px solid #667eea;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
}

/* Customize the header */
ag-dialog::part(ag-dialog-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
}

/* Style the heading */
ag-dialog::part(ag-dialog-heading) {
  font-size: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Customize the close button */
ag-dialog::part(ag-dialog-close-button) {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
}

/* Style the content section */
ag-dialog::part(ag-dialog-content) {
  padding: 0 0.5rem;
}

/* Customize the footer */
ag-dialog::part(ag-dialog-footer) {
  background: #f0f4ff;
  padding: 1rem;
}
```

## Accessibility

The Dialog implements the [WAI-ARIA Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/):

- Uses `role="dialog"` and `aria-modal="true"` for proper screen reader announcement
- Implements focus trap to keep keyboard focus within the dialog
- Pressing **Escape** closes the dialog (unless `noCloseOnEscape` is true)
- Clicking the backdrop closes the dialog (unless `noCloseOnBackdrop` is true)
- Returns focus to the triggering element when closed
- Prevents background scroll when dialog is open
- Close button has `aria-label="Close dialog"` for screen readers
- Dialog can be labeled via `heading` prop or custom header with proper heading element
- Keyboard navigation cycles through all focusable elements within the dialog
- Supports **Tab** and **Shift+Tab** for navigation within the focus trap

### Best Practices

- Always provide a heading (via `heading` prop or custom header) for accessibility
- Use `showCloseButton` or provide explicit close actions in footer
- For critical actions, consider setting `noCloseOnBackdrop` and `noCloseOnEscape` to prevent accidental dismissal
- Ensure focus is managed properly by using semantic buttons for triggers
- Keep dialog content concise and focused on a single task

## v-model Support (Vue)

The Vue Dialog component supports `v-model:open` for two-way binding:

```vue
<VueDialog v-model:open="isDialogOpen">
  <p>Dialog content</p>
</VueDialog>
```

This automatically syncs the dialog's open state with your component's data.

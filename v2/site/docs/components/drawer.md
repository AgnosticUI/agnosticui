# Drawer

A drawer is a panel that slides in from the edge of the screen, typically used for navigation menus, filters, settings, or other supplementary content. Drawers can slide in from any of the four edges: start (left), end (right), top, or bottom.

## Examples

<DrawerExamples />

<script setup>
import DrawerExamples from '../examples/DrawerExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Drawer from start (left) -->
    <VueButton @click="showStartDrawer">Open Navigation</VueButton>
    <VueDrawer
      :open="isStartDrawerOpen"
      position="start"
      heading="Navigation"
      show-close-button
      @close="isStartDrawerOpen = false"
    >
      <nav>
        <ul style="list-style: none; padding: 0;">
          <li style="padding: 0.5rem 0;"><a href="#">Dashboard</a></li>
          <li style="padding: 0.5rem 0;"><a href="#">Projects</a></li>
          <li style="padding: 0.5rem 0;"><a href="#">Settings</a></li>
        </ul>
      </nav>
    </VueDrawer>

    <!-- Drawer from end (right) with footer -->
    <VueButton @click="showEndDrawer">Open Settings</VueButton>
    <VueDrawer
      :open="isEndDrawerOpen"
      position="end"
      heading="Settings"
      show-close-button
      @close="isEndDrawerOpen = false"
    >
      <div>
        <h4>Preferences</h4>
        <label style="display: block; margin-bottom: 1rem;">
          <input type="checkbox" style="margin-right: 0.5rem;" />
          Enable notifications
        </label>
      </div>
      <div slot="footer">
        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <VueButton @click="isEndDrawerOpen = false">Cancel</VueButton>
          <VueButton variant="primary" @click="isEndDrawerOpen = false">Save</VueButton>
        </div>
      </div>
    </VueDrawer>

    <!-- Drawer from top -->
    <VueButton @click="showTopDrawer">Open Notifications</VueButton>
    <VueDrawer
      :open="isTopDrawerOpen"
      position="top"
      heading="Notifications"
      show-close-button
      @close="isTopDrawerOpen = false"
    >
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="padding: 0.75rem; background: var(--ag-background-secondary);">
          <strong>New message</strong>
          <p style="margin: 0.25rem 0 0 0;">You have a new message</p>
        </div>
      </div>
    </VueDrawer>

    <!-- Drawer from bottom -->
    <VueButton @click="showBottomDrawer">Open Quick Actions</VueButton>
    <VueDrawer
      :open="isBottomDrawerOpen"
      position="bottom"
      heading="Quick Actions"
      show-close-button
      @close="isBottomDrawerOpen = false"
    >
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <VueButton>New Item</VueButton>
        <VueButton>Upload</VueButton>
        <VueButton>Download</VueButton>
      </div>
    </VueDrawer>
  </section>
</template>

<script>
import VueDrawer from "agnosticui-core/drawer/vue";
import VueButton from "agnosticui-core/button/vue";

export default {
  components: {
    VueDrawer,
    VueButton,
  },
  data() {
    return {
      isStartDrawerOpen: false,
      isEndDrawerOpen: false,
      isTopDrawerOpen: false,
      isBottomDrawerOpen: false,
    };
  },
  methods: {
    showStartDrawer() {
      this.isStartDrawerOpen = true;
    },
    showEndDrawer() {
      this.isEndDrawerOpen = true;
    },
    showTopDrawer() {
      this.isTopDrawerOpen = true;
    },
    showBottomDrawer() {
      this.isBottomDrawerOpen = true;
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactDrawer, DrawerHeader, DrawerFooter } from 'agnosticui-core/drawer/react';

export default function DrawerExample() {
  const [isStartDrawerOpen, setIsStartDrawerOpen] = useState(false);
  const [isEndDrawerOpen, setIsEndDrawerOpen] = useState(false);
  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);

  return (
    <section>
      {/* Drawer from start (left) */}
      <button onClick={() => setIsStartDrawerOpen(true)}>Open Navigation</button>
      <ReactDrawer
        open={isStartDrawerOpen}
        position="start"
        heading="Navigation"
        showCloseButton={true}
        onClose={() => setIsStartDrawerOpen(false)}
      >
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0' }}><a href="#">Dashboard</a></li>
            <li style={{ padding: '0.5rem 0' }}><a href="#">Projects</a></li>
            <li style={{ padding: '0.5rem 0' }}><a href="#">Settings</a></li>
          </ul>
        </nav>
      </ReactDrawer>

      {/* Drawer from end (right) with footer */}
      <button onClick={() => setIsEndDrawerOpen(true)}>Open Settings</button>
      <ReactDrawer
        open={isEndDrawerOpen}
        position="end"
        heading="Settings"
        showCloseButton={true}
        onClose={() => setIsEndDrawerOpen(false)}
      >
        <div>
          <h4>Preferences</h4>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            <input type="checkbox" style={{ marginRight: '0.5rem' }} />
            Enable notifications
          </label>
        </div>
        <DrawerFooter>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <button onClick={() => setIsEndDrawerOpen(false)}>Cancel</button>
            <button onClick={() => setIsEndDrawerOpen(false)}>Save</button>
          </div>
        </DrawerFooter>
      </ReactDrawer>

      {/* Drawer from top */}
      <button onClick={() => setIsTopDrawerOpen(true)}>Open Notifications</button>
      <ReactDrawer
        open={isTopDrawerOpen}
        position="top"
        heading="Notifications"
        showCloseButton={true}
        onClose={() => setIsTopDrawerOpen(false)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', background: 'var(--ag-background-secondary)' }}>
            <strong>New message</strong>
            <p style={{ margin: '0.25rem 0 0 0' }}>You have a new message</p>
          </div>
        </div>
      </ReactDrawer>

      {/* Drawer from bottom */}
      <button onClick={() => setIsBottomDrawerOpen(true)}>Open Quick Actions</button>
      <ReactDrawer
        open={isBottomDrawerOpen}
        position="bottom"
        heading="Quick Actions"
        showCloseButton={true}
        onClose={() => setIsBottomDrawerOpen(false)}
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button>New Item</button>
          <button>Upload</button>
          <button>Download</button>
        </div>
      </ReactDrawer>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/drawer';

  document.addEventListener('DOMContentLoaded', () => {
    const startDrawer = document.querySelector('#start-drawer');
    const endDrawer = document.querySelector('#end-drawer');
    const topDrawer = document.querySelector('#top-drawer');
    const bottomDrawer = document.querySelector('#bottom-drawer');

    const openStartBtn = document.querySelector('#open-start');
    const openEndBtn = document.querySelector('#open-end');
    const openTopBtn = document.querySelector('#open-top');
    const openBottomBtn = document.querySelector('#open-bottom');

    openStartBtn?.addEventListener('click', () => {
      if (startDrawer) startDrawer.open = true;
    });

    openEndBtn?.addEventListener('click', () => {
      if (endDrawer) endDrawer.open = true;
    });

    openTopBtn?.addEventListener('click', () => {
      if (topDrawer) topDrawer.open = true;
    });

    openBottomBtn?.addEventListener('click', () => {
      if (bottomDrawer) bottomDrawer.open = true;
    });

    // Handle close events
    [startDrawer, endDrawer, topDrawer, bottomDrawer].forEach(drawer => {
      drawer?.addEventListener('close', () => {
        drawer.open = false;
      });
    });
  });
</script>

<section>
  <!-- Drawer from start (left) -->
  <button id="open-start">Open Navigation</button>
  <ag-drawer
    id="start-drawer"
    position="start"
    heading="Navigation"
    show-close-button
  >
    <nav>
      <ul style="list-style: none; padding: 0;">
        <li style="padding: 0.5rem 0;"><a href="#">Dashboard</a></li>
        <li style="padding: 0.5rem 0;"><a href="#">Projects</a></li>
        <li style="padding: 0.5rem 0;"><a href="#">Settings</a></li>
      </ul>
    </nav>
  </ag-drawer>

  <!-- Drawer from end (right) with footer -->
  <button id="open-end">Open Settings</button>
  <ag-drawer
    id="end-drawer"
    position="end"
    heading="Settings"
    show-close-button
  >
    <div>
      <h4>Preferences</h4>
      <label style="display: block; margin-bottom: 1rem;">
        <input type="checkbox" style="margin-right: 0.5rem;" />
        Enable notifications
      </label>
    </div>
    <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <button>Cancel</button>
      <button>Save</button>
    </div>
  </ag-drawer>

  <!-- Drawer from top -->
  <button id="open-top">Open Notifications</button>
  <ag-drawer
    id="top-drawer"
    position="top"
    heading="Notifications"
    show-close-button
  >
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="padding: 0.75rem; background: var(--ag-background-secondary);">
        <strong>New message</strong>
        <p style="margin: 0.25rem 0 0 0;">You have a new message</p>
      </div>
    </div>
  </ag-drawer>

  <!-- Drawer from bottom -->
  <button id="open-bottom">Open Quick Actions</button>
  <ag-drawer
    id="bottom-drawer"
    position="bottom"
    heading="Quick Actions"
    show-close-button
  >
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button>New Item</button>
      <button>Upload</button>
      <button>Download</button>
    </div>
  </ag-drawer>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the drawer is open |
| `position` | `'start' \| 'end' \| 'top' \| 'bottom'` | `'bottom'` | The edge from which the drawer slides in. 'start' is left in LTR, 'end' is right in LTR |
| `heading` | `string` | `''` | The heading text for the drawer |
| `description` | `string` | `''` | The description text for the drawer |
| `noCloseOnEscape` | `boolean` | `false` | Prevents closing the drawer when pressing the Escape key |
| `noCloseOnBackdrop` | `boolean` | `false` | Prevents closing the drawer when clicking the backdrop |
| `showCloseButton` | `boolean` | `false` | Shows a close button (×) in the top-right corner of the drawer |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@close` (Vue) / `onClose` (React) / `close` (Lit) | `void` | Emitted when the drawer is closed (via close button, Escape key, or backdrop click) |

## Slots

### Vue
- **Default slot**: Main content of the drawer
- **slot="header"**: Custom header content (replaces `heading` prop when used)
- **slot="footer"**: Footer content for action buttons

### React
- **children**: Main content of the drawer
- **DrawerHeader**: Custom header content (replaces `heading` prop when used)
- **DrawerFooter**: Footer content for action buttons

### Lit
- **Default slot**: Main content of the drawer
- **slot="header"**: Custom header content (replaces `heading` prop when used)
- **slot="footer"**: Footer content for action buttons

## Accessibility

The Drawer component follows accessibility best practices for slide-out panels:

- Uses `role="dialog"` and `aria-modal="true"` for proper screen reader announcement
- Implements focus trap to keep keyboard focus within the drawer
- Pressing **Escape** closes the drawer (unless `noCloseOnEscape` is true)
- Clicking the backdrop closes the drawer (unless `noCloseOnBackdrop` is true)
- Returns focus to the triggering element when closed
- Prevents background scroll when drawer is open
- Close button has `aria-label="Close dialog"` for screen readers
- Drawer can be labeled via `heading` prop or custom header with proper heading element
- Keyboard navigation cycles through all focusable elements within the drawer
- Supports **Tab** and **Shift+Tab** for navigation within the focus trap

### Best Practices

- Always provide a heading (via `heading` prop or custom header) for accessibility
- Use `showCloseButton` or provide explicit close actions in footer for easy dismissal
- Use `position="start"` or `position="end"` for primary navigation
- Use `position="top"` or `position="bottom"` for contextual actions or notifications
- Consider the mobile experience - drawers from start/end work well, top/bottom may be harder to reach
- Keep drawer content focused and avoid nesting multiple levels of navigation
- For filters or settings, provide clear "Apply" and "Cancel" actions in the footer

## Use Cases

- **Navigation** (`start`/`end`): Primary navigation menu, contextual actions
- **Settings** (`end`): User preferences, application settings
- **Filters** (`end`): Search filters, data table filters
- **Notifications** (`top`): System notifications, alerts
- **Quick Actions** (`bottom`): Mobile-friendly action menus, sharing options

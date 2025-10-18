# Tabs

Tabs organize content into multiple sections that users can navigate between. Only one tab panel is visible at a time, making tabs ideal for organizing related content without overwhelming the user.

## Examples

<TabsExamples />

<script setup>
import TabsExamples from '../examples/TabsExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic tabs -->
    <VueTabs aria-label="Basic tabs example">
      <VueTab panel="panel-1">Tab 1</VueTab>
      <VueTab panel="panel-2">Tab 2</VueTab>
      <VueTab panel="panel-3">Tab 3</VueTab>
      <VueTabPanel panel="panel-1">
        <p>Content for Tab 1</p>
      </VueTabPanel>
      <VueTabPanel panel="panel-2">
        <p>Content for Tab 2</p>
      </VueTabPanel>
      <VueTabPanel panel="panel-3">
        <p>Content for Tab 3</p>
      </VueTabPanel>
    </VueTabs>

    <!-- Vertical orientation -->
    <VueTabs orientation="vertical" aria-label="Vertical tabs">
      <VueTab panel="panel-1">Profile</VueTab>
      <VueTab panel="panel-2">Settings</VueTab>
      <VueTab panel="panel-3">Notifications</VueTab>
      <VueTabPanel panel="panel-1">Profile content</VueTabPanel>
      <VueTabPanel panel="panel-2">Settings content</VueTabPanel>
      <VueTabPanel panel="panel-3">Notifications content</VueTabPanel>
    </VueTabs>

    <!-- Disabled tab -->
    <VueTabs aria-label="Tabs with disabled tab">
      <VueTab panel="panel-1">Available</VueTab>
      <VueTab panel="panel-2" :disabled="true">Disabled</VueTab>
      <VueTab panel="panel-3">Also Available</VueTab>
      <VueTabPanel panel="panel-1">Available content</VueTabPanel>
      <VueTabPanel panel="panel-2">Disabled content</VueTabPanel>
      <VueTabPanel panel="panel-3">Also available content</VueTabPanel>
    </VueTabs>

    <!-- Automatic activation -->
    <VueTabs activation="automatic" aria-label="Automatic tabs">
      <VueTab panel="panel-1">Tab 1</VueTab>
      <VueTab panel="panel-2">Tab 2</VueTab>
      <VueTab panel="panel-3">Tab 3</VueTab>
      <VueTabPanel panel="panel-1">Content 1</VueTabPanel>
      <VueTabPanel panel="panel-2">Content 2</VueTabPanel>
      <VueTabPanel panel="panel-3">Content 3</VueTabPanel>
    </VueTabs>

    <!-- Event handling -->
    <VueTabs
      :active-tab="activeTab"
      aria-label="Event testing tabs"
      @tab-change="handleTabChange"
    >
      <VueTab panel="panel-1">Tab 1</VueTab>
      <VueTab panel="panel-2">Tab 2</VueTab>
      <VueTab panel="panel-3">Tab 3</VueTab>
      <VueTabPanel panel="panel-1">Content 1</VueTabPanel>
      <VueTabPanel panel="panel-2">Content 2</VueTabPanel>
      <VueTabPanel panel="panel-3">Content 3</VueTabPanel>
    </VueTabs>
  </section>
</template>

<script>
import VueTabs, { VueTab, VueTabPanel } from "agnosticui-core/tabs/vue";

export default {
  components: {
    VueTabs,
    VueTab,
    VueTabPanel,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    handleTabChange(detail) {
      this.activeTab = detail.activeTab;
      console.log(`Tab changed from ${detail.previousTab} to ${detail.activeTab}`);
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactTabs, ReactTab, ReactTabPanel } from 'agnosticui-core/tabs/react';

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (detail) => {
    setActiveTab(detail.activeTab);
    console.log(`Tab changed from ${detail.previousTab} to ${detail.activeTab}`);
  };

  return (
    <section>
      {/* Basic tabs */}
      <ReactTabs ariaLabel="Basic tabs example">
        <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
        <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
        <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
        <ReactTabPanel slot="panel" id="panel-1">
          <p>Content for Tab 1</p>
        </ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-2">
          <p>Content for Tab 2</p>
        </ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-3">
          <p>Content for Tab 3</p>
        </ReactTabPanel>
      </ReactTabs>

      {/* Vertical orientation */}
      <ReactTabs orientation="vertical" ariaLabel="Vertical tabs">
        <ReactTab slot="tab" panel="panel-1">Profile</ReactTab>
        <ReactTab slot="tab" panel="panel-2">Settings</ReactTab>
        <ReactTab slot="tab" panel="panel-3">Notifications</ReactTab>
        <ReactTabPanel slot="panel" id="panel-1">Profile content</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-2">Settings content</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-3">Notifications content</ReactTabPanel>
      </ReactTabs>

      {/* Disabled tab */}
      <ReactTabs ariaLabel="Tabs with disabled tab">
        <ReactTab slot="tab" panel="panel-1">Available</ReactTab>
        <ReactTab slot="tab" panel="panel-2" disabled>Disabled</ReactTab>
        <ReactTab slot="tab" panel="panel-3">Also Available</ReactTab>
        <ReactTabPanel slot="panel" id="panel-1">Available content</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-2">Disabled content</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-3">Also available content</ReactTabPanel>
      </ReactTabs>

      {/* Automatic activation */}
      <ReactTabs activation="automatic" ariaLabel="Automatic tabs">
        <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
        <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
        <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
        <ReactTabPanel slot="panel" id="panel-1">Content 1</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-2">Content 2</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-3">Content 3</ReactTabPanel>
      </ReactTabs>

      {/* Event handling */}
      <ReactTabs
        activeTab={activeTab}
        ariaLabel="Event testing tabs"
        onTabChange={handleTabChange}
      >
        <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
        <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
        <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
        <ReactTabPanel slot="panel" id="panel-1">Content 1</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-2">Content 2</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-3">Content 3</ReactTabPanel>
      </ReactTabs>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/tabs';

  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('#my-tabs');

    tabs?.addEventListener('tab-change', (e) => {
      console.log(`Tab changed from ${e.detail.previousTab} to ${e.detail.activeTab}`);
    });
  });
</script>

<section>
  <!-- Basic tabs -->
  <ag-tabs id="my-tabs" aria-label="Basic tabs example">
    <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
    <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
    <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
    <ag-tab-panel slot="panel" panel="panel-1">
      <p>Content for Tab 1</p>
    </ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-2">
      <p>Content for Tab 2</p>
    </ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-3">
      <p>Content for Tab 3</p>
    </ag-tab-panel>
  </ag-tabs>

  <!-- Vertical orientation -->
  <ag-tabs orientation="vertical" aria-label="Vertical tabs">
    <ag-tab slot="tab" panel="panel-1">Profile</ag-tab>
    <ag-tab slot="tab" panel="panel-2">Settings</ag-tab>
    <ag-tab slot="tab" panel="panel-3">Notifications</ag-tab>
    <ag-tab-panel slot="panel" panel="panel-1">Profile content</ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-2">Settings content</ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-3">Notifications content</ag-tab-panel>
  </ag-tabs>

  <!-- Disabled tab -->
  <ag-tabs aria-label="Tabs with disabled tab">
    <ag-tab slot="tab" panel="panel-1">Available</ag-tab>
    <ag-tab slot="tab" panel="panel-2" disabled>Disabled</ag-tab>
    <ag-tab slot="tab" panel="panel-3">Also Available</ag-tab>
    <ag-tab-panel slot="panel" panel="panel-1">Available content</ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-2">Disabled content</ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-3">Also available content</ag-tab-panel>
  </ag-tabs>

  <!-- Automatic activation -->
  <ag-tabs activation="automatic" aria-label="Automatic tabs">
    <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
    <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
    <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
    <ag-tab-panel slot="panel" panel="panel-1">Content 1</ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-2">Content 2</ag-tab-panel>
    <ag-tab-panel slot="panel" panel="panel-3">Content 3</ag-tab-panel>
  </ag-tabs>
</section>
```
:::

## Props

### Tabs Container

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `activation` | `'manual' \| 'automatic'` | `'manual'` | How tabs are activated. Manual requires Enter/Space, automatic activates on arrow key navigation |
| `activeTab` | `number` | `0` | The index of the currently active tab (0-based) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the tabs |
| `ariaLabel` | `string` | `''` | ARIA label for the tabs container |
| `ariaLabelledBy` | `string` | `''` | ID of the element that labels the tabs container |

### Tab

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `panel` | `string` | `''` | The ID of the panel this tab controls |
| `disabled` | `boolean` | `false` | Whether the tab is disabled |

### Tab Panel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `panel` (Vue/Lit) / `id` (React) | `string` | `''` | The ID of this panel (must match a tab's `panel` prop) |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@tab-change` (Vue) / `onTabChange` (React) / `tab-change` (Lit) | `{ activeTab: number, previousTab: number }` | Emitted when the active tab changes |

## Components

### Vue
- **VueTabs**: Main tabs container
- **VueTab**: Individual tab button
- **VueTabPanel**: Tab content panel

### React
- **ReactTabs**: Main tabs container
- **ReactTab**: Individual tab button (requires `slot="tab"`)
- **ReactTabPanel**: Tab content panel (requires `slot="panel"`)

### Lit
- **ag-tabs**: Main tabs container
- **ag-tab**: Individual tab button (requires `slot="tab"`)
- **ag-tab-panel**: Tab content panel (requires `slot="panel"`)

## Accessibility

The Tabs component implements the [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/):

- Uses `role="tablist"` for the tab list container
- Uses `role="tab"` for individual tabs
- Uses `role="tabpanel"` for tab panels
- Implements keyboard navigation:
  - **Tab**: Moves focus into and out of the tab list
  - **Arrow Left/Right** (horizontal) or **Arrow Up/Down** (vertical): Navigates between tabs
  - **Home**: Moves to first tab
  - **End**: Moves to last tab
  - **Enter/Space**: Activates the focused tab (in manual activation mode)
- Manages focus automatically:
  - Active tab has `aria-selected="true"`
  - Inactive tabs have `aria-selected="false"`
  - Active panel is visible with `hidden` attribute on others
- Disabled tabs are skipped during keyboard navigation
- Each tab has `aria-controls` pointing to its panel
- Each panel has `aria-labelledby` pointing to its tab

### Activation Modes

**Manual Activation** (default):
- Users navigate tabs with arrow keys
- Press Enter or Space to activate the focused tab
- Panel content changes only when tab is activated
- Recommended for tabs with heavy content or when switching could cause side effects

**Automatic Activation**:
- Panel content changes immediately as users navigate with arrow keys
- No need to press Enter/Space
- Recommended for lightweight content or when immediate feedback is helpful

### Best Practices

- Always provide an `aria-label` or `aria-labelledby` for the tabs container
- Keep tab labels concise (1-2 words when possible)
- Use manual activation for tabs with complex or heavy content
- Ensure each tab has a corresponding panel with matching `panel` ID
- Don't nest tabs within tabs (creates confusing navigation)
- Consider using vertical orientation for navigation-heavy interfaces
- Disabled tabs should have a clear visual indicator

## Orientation

### Horizontal (default)
Tabs appear in a row above the content. Best for:
- Page-level navigation
- Section switching
- Content organization

### Vertical
Tabs appear in a column to the left of the content. Best for:
- Settings pages
- Multi-step processes
- Side navigation
- When space allows for longer tab labels

## Panel Matching

Each tab must have a corresponding panel. The connection is made through the `panel` prop:

**Vue:**
```vue
<VueTab panel="my-panel">Tab Label</VueTab>
<VueTabPanel panel="my-panel">Tab content</VueTabPanel>
```

**React:**
```tsx
<ReactTab slot="tab" panel="my-panel">Tab Label</ReactTab>
<ReactTabPanel slot="panel" id="my-panel">Tab content</ReactTabPanel>
```

**Lit:**
```html
<ag-tab slot="tab" panel="my-panel">Tab Label</ag-tab>
<ag-tab-panel slot="panel" panel="my-panel">Tab content</ag-tab-panel>
```

The `panel` value should be unique within each tabs component.

## CSS Shadow Parts

| Part | Description |
| --- | --- |
| `ag-tabs-container` | The main container for the tabs component. |
| `ag-tabs-tablist` | The container for the tab buttons. |
| `ag-tabs-panels` | The container for the tab panels. |
| `ag-tab` | An individual tab button. |
| `ag-tab-panel` | An individual tab panel. |

### Example

```css
.custom-tabs::part(ag-tabs-tablist) {
  border-bottom: 2px solid #bada55;
}
.custom-tabs::part(ag-tab) {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 1.2rem;
  background-color: #f0f0f0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.custom-tabs::part(ag-tab):hover {
  background-color: #e0e0e0;
}
.custom-tabs ag-tab[aria-selected="true"]::part(ag-tab) {
  background-color: #bada55;
  color: #fff;
  border-bottom: 2px solid #bada55;
}
.custom-tabs::part(ag-tabs-panels) {
  border: 2px solid #bada55;
  border-top: none;
  padding: 1rem;
}
.custom-tabs::part(ag-tab-panel) {
  background-color: #f9f9f9;
}
```

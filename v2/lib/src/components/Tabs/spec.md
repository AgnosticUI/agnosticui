# Tabs Component Specification

## Overview
A tabbed interface that displays multiple content panels through a navigation mechanism, allowing users to switch between different views while maintaining the context of the current page.

## WAI-ARIA APG Compliance
- **Pattern**: [WAI-ARIA APG Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- **Examples**: Supports both automatic and manual activation modes
- **Authority**: WAI-ARIA APG takes precedence over other patterns (e.g., BBC GEL)

## Component Architecture

### Core Elements
1. **TabList** (`role="tablist"`) - Container for tab navigation
2. **Tab** (`role="tab"`) - Individual tab button/link
3. **TabPanel** (`role="tabpanel"`) - Content area for each tab

### Activation Modes
- **Manual Activation** (Default) - Focus and activation are separate (recommended)
- **Automatic Activation** - Focus immediately activates tab (use sparingly)

## API Design

### Properties
```typescript
interface TabsProps {
  // Activation behavior
  activation?: 'automatic' | 'manual'; // default: 'manual'

  // Initial state
  activeTab?: number; // default: 0

  // Orientation
  orientation?: 'horizontal' | 'vertical'; // default: 'horizontal'

  // Styling
  tabListClass?: string;
  tabClass?: string;
  tabPanelClass?: string;

  // Accessibility
  ariaLabel?: string;
  ariaLabelledBy?: string;
}
```

### Slots
```html
<ag-tabs>
  <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
  <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
  <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>

  <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
  <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
  <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
</ag-tabs>
```

### Events
```typescript
interface TabsEvents {
  'tab-change': { activeTab: number; previousTab: number; tabElement: HTMLElement };
  'tab-focus': { tabIndex: number; tabElement: HTMLElement };
}
```

## Keyboard Interaction (WAI-ARIA APG)

### Tab List Navigation
- **Tab**: Enter/exit tab list
- **Arrow Keys (←→)**: Navigate between tabs
- **Home**: Move to first tab
- **End**: Move to last tab

### Activation (Mode-Dependent)
- **Manual Mode**:
  - Arrow keys = focus only
  - Enter/Space = activate focused tab
- **Automatic Mode**:
  - Arrow keys = focus AND activate
  - Enter/Space = not needed

### Focus Management
- **Roving Tabindex**: Only active tab has `tabindex="0"`
- **Focus Containment**: Focus stays within tab list during arrow navigation
- **Panel Focus**: Panels are focusable with `tabindex="0"`

## Semantic HTML & ARIA

### Required ARIA Roles
```html
<div role="tablist" aria-label="Main navigation">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2" tabindex="-1">Tab 2</button>
</div>

<div role="tabpanel" aria-labelledby="tab1" id="panel1" tabindex="0">
  Panel 1 content
</div>
<div role="tabpanel" aria-labelledby="tab2" id="panel2" tabindex="0" hidden>
  Panel 2 content
</div>
```

### State Management
- **Active Tab**: `aria-selected="true"`, `tabindex="0"`
- **Inactive Tabs**: `aria-selected="false"`, `tabindex="-1"`
- **Panel Visibility**: Use `hidden` attribute for inactive panels
- **Panel Association**: `aria-controls` (tab → panel), `aria-labelledby` (panel → tab)

## Almost Headless Styling

### Required Functional CSS
```css
/* Display states */
:host { display: block; }
[role="tablist"] { display: flex; }
[role="tabpanel"][hidden] { display: none; }

/* Focus management */
[role="tab"]:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus);
  outline-offset: var(--ag-focus-offset, 2px);
}

/* Disable visual states */
[role="tab"][aria-selected="false"] {
  /* No visual styling - user provides */
}
[role="tab"][aria-selected="true"] {
  /* No visual styling - user provides */
}
```

### Forbidden Visual CSS
- ❌ Colors, backgrounds, borders
- ❌ Typography (font-size, font-weight)
- ❌ Visual spacing (padding, margin)
- ❌ Decorative styling (shadows, animations)

## Design Token Integration

### Semantic Tokens Usage
```css
/* Focus states */
--tab-focus-color: var(--ag-focus);
--tab-focus-width: var(--ag-focus-width, 2px);
--tab-focus-offset: var(--ag-focus-offset, 2px);

/* Spacing (functional only) */
--tab-gap: var(--ag-space-2, 0.5rem); /* Between tabs */
--panel-padding: var(--ag-space-4, 1rem); /* Panel content area */
```

## Accessibility Requirements

### APG Compliance Checklist
- [ ] Implements `role="tablist"`, `role="tab"`, `role="tabpanel"`
- [ ] Manages `aria-selected` state correctly
- [ ] Uses `aria-controls` to link tabs and panels
- [ ] Uses `aria-labelledby` to associate panels with tabs
- [ ] Implements roving tabindex pattern
- [ ] Supports both activation modes (manual/automatic)
- [ ] Handles keyboard navigation (arrows, Home, End)
- [ ] Provides focus indicators
- [ ] Works with screen readers
- [ ] Supports high contrast mode

### Screen Reader Testing
- **NVDA**: Announces tab selection and panel content
- **JAWS**: Properly identifies tab controls and panels
- **VoiceOver**: Maintains context during navigation

## Framework Integration

### React Wrapper
```jsx
<ReactTabs activation="manual" activeTab={0} onTabChange={handleChange}>
  <ReactTab panel="panel1">Tab 1</ReactTab>
  <ReactTab panel="panel2">Tab 2</ReactTab>
  <ReactTabPanel id="panel1">Content 1</ReactTabPanel>
  <ReactTabPanel id="panel2">Content 2</ReactTabPanel>
</ReactTabs>
```

### Vue Wrapper
```vue
<VueTabs :activation="activation" :active-tab="activeTab" @tab-change="handleChange">
  <VueTab panel="panel1">Tab 1</VueTab>
  <VueTab panel="panel2">Tab 2</VueTab>
  <VueTabPanel id="panel1">Content 1</VueTabPanel>
  <VueTabPanel id="panel2">Content 2</VueTabPanel>
</VueTabs>
```

### Svelte Integration (Direct Web Components)
```svelte
<ag-tabs activation="manual" active-tab={activeTab}>
  <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
  <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
  <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
  <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
</ag-tabs>
```

## Testing Strategy

### Unit Tests (35-45 tests)
1. **Component Initialization** (5 tests)
   - Default props, slot content, initial rendering
2. **Keyboard Navigation** (8 tests)
   - Arrow keys, Home/End, Tab, Enter/Space
3. **Activation Modes** (6 tests)
   - Manual vs automatic behavior
4. **ARIA Compliance** (8 tests)
   - Roles, states, properties, associations
5. **Focus Management** (6 tests)
   - Roving tabindex, focus indicators, containment
6. **Events** (4 tests)
   - tab-change, tab-focus events
7. **Edge Cases** (4 tests)
   - Single tab, no content, dynamic tabs
8. **Accessibility** (4 tests)
   - Screen reader, high contrast, keyboard-only

### Integration Tests
- Framework wrapper compatibility
- Playground demonstrations
- Ejection workflow validation

## Browser Support
- **Modern Evergreen**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Progressive Enhancement**: Basic navigation works without JavaScript
- **Assistive Technology**: NVDA, JAWS, VoiceOver compatibility

## Performance Considerations
- **Lazy Panel Rendering**: Only render visible panel content
- **Memory Management**: Clean up event listeners
- **DOM Updates**: Minimize reflows during tab changes
- **Bundle Size**: Core component ~3-4KB gzipped

## Implementation Priority
**High** - Complex interaction pattern required for V1 parity, commonly used component with significant accessibility requirements.
# Tabs Component Specification Sheet

*Consolidated from WAI-ARIA APG patterns and BBC GEL guidelines*

## 🎯 Component Purpose

A tabbed interface that displays multiple content panels through a navigation mechanism, allowing users to switch between different views while maintaining context. Essential for organizing related content sections without overwhelming users.

## 📋 Functional Requirements

### Core Functionality
- **Panel Navigation**: Switch between multiple content sections via tab controls
- **State Management**: Maintain active tab state and panel visibility
- **Activation Modes**: Support both manual and automatic activation patterns
- **Content Association**: Link tabs to their corresponding panels semantically

### Activation Modes
1. **Manual Activation** (Default): Focus and activation are separate actions
   - Arrow keys move focus without changing active panel
   - Enter/Space required to activate focused tab
   - Better for complex content that takes time to load
2. **Automatic Activation**: Focus immediately activates tab
   - Arrow keys both move focus AND activate tab
   - Suitable only for instantly available content

## ⌨️ Keyboard Interaction Requirements

### Tab List Navigation
| Key | Action | Manual Mode | Automatic Mode |
|-----|--------|-------------|----------------|
| **Tab** | Enter/exit tab list | Focus only | Focus only |
| **→/↓** | Move to next tab | Focus only | Focus + Activate |
| **←/↑** | Move to previous tab | Focus only | Focus + Activate |
| **Home** | Move to first tab | Focus only | Focus + Activate |
| **End** | Move to last tab | Focus only | Focus + Activate |
| **Enter** | Activate focused tab | Activate | Not needed |
| **Space** | Activate focused tab | Activate | Not needed |

### Focus Management Requirements
- **Roving Tabindex**: Only active tab has `tabindex="0"`, others have `tabindex="-1"`
- **Focus Containment**: Arrow keys stay within tab list
- **Panel Focus**: Panels should be focusable with `tabindex="0"`
- **Initial Focus**: Tab receives focus on page load if needed

## 🎨 Visual State Requirements

### Required Visual States
1. **Normal Tab**: Default appearance
2. **Hover Tab**: Mouse over indication
3. **Focus Tab**: Keyboard focus indication (outline/ring)
4. **Active Tab**: Selected/current tab visual state
5. **Inactive Tab**: Non-selected tab appearance
6. **Disabled Tab**: Non-interactive state (if supported)

### Panel States
1. **Visible Panel**: Active panel displayed
2. **Hidden Panel**: Inactive panels hidden (using `hidden` attribute)

## 🔧 ARIA Implementation Requirements

### Required ARIA Roles
```html
<div role="tablist" aria-label="Main content sections">
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
- **Panel Association**: `aria-controls` (tab → panel), `aria-labelledby` (panel → tab)
- **Panel Visibility**: Use `hidden` attribute for inactive panels

### Required ARIA Properties
- `role="tablist"` on container
- `role="tab"` on each tab button
- `role="tabpanel"` on each content panel
- `aria-selected` to indicate active tab
- `aria-controls` linking tabs to panels
- `aria-labelledby` linking panels to tabs
- `aria-orientation` for vertical tabs (if supported)

## 🧪 Testing Requirements

### Unit Tests (35-45 tests)
1. **Component Initialization** (5 tests)
   - Default props, slot content, initial rendering, empty state
2. **ARIA Compliance** (8 tests)
   - Roles, states, properties, associations, labeling
3. **Keyboard Navigation** (8 tests)
   - Arrow keys, Home/End, Tab, Enter/Space, focus management
4. **Activation Modes** (6 tests)
   - Manual vs automatic behavior, mode switching
5. **Focus Management** (6 tests)
   - Roving tabindex, focus indicators, containment
6. **State Management** (4 tests)
   - Active tab changes, panel visibility, event handling
7. **Edge Cases** (4 tests)
   - Single tab, no content, dynamic tabs, disabled tabs
8. **Accessibility** (4 tests)
   - Screen reader compatibility, high contrast, keyboard-only navigation

### Accessibility Testing Checklist
- [ ] **Screen Reader Testing**: NVDA, JAWS, VoiceOver announce tab states and content
- [ ] **Keyboard Navigation**: All functionality accessible via keyboard
- [ ] **Focus Indicators**: Clear visual focus indication on all interactive elements
- [ ] **High Contrast Mode**: Component remains usable and visible
- [ ] **Color Independence**: Information not conveyed by color alone
- [ ] **Motion Respect**: Honors `prefers-reduced-motion` setting

### APG Compliance Verification
- [ ] Implements all required ARIA roles and properties
- [ ] Supports both activation modes correctly
- [ ] Handles keyboard navigation per APG specification
- [ ] Manages focus appropriately with roving tabindex
- [ ] Provides proper semantic associations between tabs and panels
- [ ] Works with assistive technologies
- [ ] Maintains backward compatibility

## 🎭 Component Composition

### Basic Structure
```html
<ag-tabs activation="manual" active-tab="0">
  <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
  <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
  <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
  <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
</ag-tabs>
```

### Semantic Requirements
- Tabs must be implemented as `<button>` elements for proper semantics
- Panels should be implemented as `<div>` elements with appropriate roles
- All interactive elements must be keyboard accessible
- Screen reader users should understand the relationship between tabs and panels

## 🚀 Performance Requirements

### DOM Management
- **Efficient Updates**: Only update DOM when active tab changes
- **Memory Management**: Clean up event listeners properly
- **Minimal Reflows**: Batch DOM changes to prevent layout thrashing

### Bundle Considerations
- **Core Component**: ~4-5KB gzipped
- **Progressive Enhancement**: Basic functionality works without JavaScript
- **Tree Shaking**: Unused features should be eliminable

## 🔒 Minimalist & Themeable Styling

### Required Functional CSS
```css
/* Display and layout */
:host { display: block; }
[role="tablist"] { display: flex; }
[role="tabpanel"][hidden] { display: none; }

/* Focus indication (mandatory) */
[role="tab"]:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus);
  outline-offset: var(--ag-focus-offset, 2px);
}

/* Interaction states */
[role="tab"]:disabled {
  pointer-events: none;
  opacity: 0.5;
}
```

### Forbidden Styling
- ❌ Colors, backgrounds, borders (visual only)
- ❌ Typography styling (font-size, font-weight)
- ❌ Visual spacing (padding, margin for aesthetics)
- ❌ Decorative animations or transitions

## 📚 Implementation Priority

**High Priority** - Complex interaction pattern essential for V1 parity. Commonly used component with significant accessibility requirements and multiple interaction modes to support.

## 🎯 Success Criteria

1. **Full APG Compliance**: Passes all WAI-ARIA authoring practices requirements
2. **Test Coverage**: 35+ comprehensive tests with 100% keyboard navigation coverage
3. **Framework Compatibility**: Works seamlessly in React, Vue, and Svelte
4. **Performance**: Smooth interactions with no perceptible delays
5. **Accessibility**: Zero violations in axe testing, works with all major screen readers
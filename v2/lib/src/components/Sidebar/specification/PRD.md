# AgSidebar Component - Product Requirements Document

**Component**: `ag-sidebar` / `AgSidebar`  
**Version**: 2.0.0  
**Created**: 2024-11-25  
**Status**: Planning

## Critical Implementation Notes

### 1. Rail Mode Accessibility (CRITICAL)

**Problem**: Using `display: none` to hide labels in rail mode removes them from the accessibility tree.

**Solution**: Use `<ag-visually-hidden>` component or CSS visually-hidden pattern:

```html
<!-- ✅ CORRECT -->
<a href="/dashboard">
  <ag-icon name="dashboard"></ag-icon>
  <ag-visually-hidden>Dashboard</ag-visually-hidden>
</a>

<!-- ❌ WRONG -->
<a href="/dashboard">
  <ag-icon name="dashboard"></ag-icon>
  <span style="display: none">Dashboard</span>
</a>
```

### 2. FOUC Prevention (CRITICAL)

**Problem**: If JavaScript takes time to load, sidebar might render in wrong mode before hydration.

**Solution**: CSS media queries provide correct initial state before JavaScript runs:

```css
/* Default desktop behavior (no JS needed) */
@media (min-width: 1024px) {
  .sidebar-container {
    position: relative;
    transform: none;
  }
}

/* Default mobile behavior (no JS needed) */
@media (max-width: 1023px) {
  .sidebar-container {
    position: fixed;
    transform: translateX(-100%);
  }
  
  :host([open]) .sidebar-container {
    transform: translateX(0);
  }
}
```

JavaScript `_isMobile` state enhances this with dynamic behavior after hydration.

### 3. Focus Trap Implementation (CRITICAL)

**Solution**: Use the `inert` attribute on main content when mobile drawer is open:

```typescript
private _trapFocus() {
  const mainContent = document.querySelector('main');
  mainContent?.setAttribute('inert', '');
  
  // Focus first interactive element
  const firstFocusable = this.shadowRoot?.querySelector('button, a');
  (firstFocusable as HTMLElement)?.focus();
}

private _releaseFocus() {
  const mainContent = document.querySelector('main');
  mainContent?.removeAttribute('inert');
}
```

**Browser Support**: `inert` is supported in all modern browsers (Chrome 102+, Safari 15.5+, Firefox 112+). For older browsers, use a polyfill or `focus-trap` library.

### 4. Z-Index Management

Mobile overlay uses `position: fixed` with `z-index: 1000`. Consider using the Popover API in future versions to avoid z-index wars.

### 4. Breakpoint Transition Behavior

**Auto-Reset Logic**: When the viewport crosses the breakpoint threshold, the component automatically resets conflicting states:

**Mobile → Desktop Transition** (viewport expands above breakpoint):
- `open` is set to `false` (no overlay needed)
- `collapsed` state is preserved (desktop can use rail mode)

**Desktop → Mobile Transition** (viewport shrinks below breakpoint):
- `open` is set to `false` (drawer hidden by default)
- `collapsed` is set to `false` (mobile doesn't use rail mode)

This prevents confusing states like "mobile overlay that's collapsed" or "desktop sidebar that's open as an overlay".

### 5. Validation & Error Handling

The component includes validation for common misuse patterns:

```typescript
// Breakpoint validation
if (this.breakpoint <= 0) {
  console.warn('ag-sidebar: breakpoint must be a positive number');
  this.breakpoint = 1024;
}

// Warn if ag-visually-hidden is missing (optional dev-mode check)
if (this.collapsed && !customElements.get('ag-visually-hidden')) {
  console.warn('ag-sidebar: Consider using <ag-visually-hidden> for rail mode labels');
}
```

The `width` prop writes to `--ag-sidebar-width` CSS variable for DX convenience:

```html
<ag-sidebar width="300px">
  <!-- Easier than writing custom CSS -->
</ag-sidebar>
```

## Table of Contents

1. [Overview](#overview)
2. [WAI-ARIA Compliance](#wai-aria-compliance)
3. [Component Architecture](#component-architecture)
4. [Props & Attributes](#props--attributes)
5. [Events](#events)
6. [Responsive Behavior](#responsive-behavior)
7. [Slots & CSS Shadow Parts](#slots--css-shadow-parts)
8. [Token System](#token-system)
9. [Keyboard Interactions](#keyboard-interactions)
10. [Implementation Guidelines](#implementation-guidelines)
11. [Examples & Use Cases](#examples--use-cases)

---

## Overview

### Purpose

AgSidebar is a flexible, accessible sidebar navigation component that supports both left and right positioning. It provides collapsible navigation for desktop layouts and responsive drawer behavior for mobile/tablet devices, similar to the navigation patterns seen on claude.ai, GitHub, and modern web applications.

### Key Features

- ✅ **Left or right positioning** - Configurable sidebar placement
- ✅ **Collapsible state** - Toggle between expanded and collapsed (icon-only) states
- ✅ **Responsive behavior** - Automatically adapts from persistent sidebar (desktop) to overlay drawer (mobile/tablet)
- ✅ **Composable navigation** - Uses AgnosticUI's `ag-accordion` for collapsible sections
- ✅ **Icon support** - Integrates with `ag-icon` for consistent iconography
- ✅ **Multiple modes** - Supports persistent, temporary (overlay), and rail (collapsed) modes
- ✅ **Keyboard accessible** - Full keyboard navigation support
- ✅ **Theme-aware** - Works seamlessly in light and dark modes
- ✅ **Shadow DOM encapsulation** - Self-contained accessibility (no cross-boundary aria issues)
- ✅ **Flat navigation structure** - Single-level nesting only (sidebar → accordion items → links)

### Component Variants

1. **Persistent Sidebar** (Desktop default) - Always visible, pushes main content
2. **Temporary Drawer** (Mobile/Tablet) - Overlay with backdrop, dismissible
3. **Rail Mode** (Collapsed) - Icon-only sidebar with tooltips on hover

---

## WAI-ARIA Compliance

### ARIA Pattern: Navigation Landmark + Composable Widgets

AgSidebar provides a `<nav>` landmark container. Navigation structure and collapsible sections are composed using existing AgnosticUI components:

- `<nav>` semantic landmark with `aria-label`
- `<ag-accordion>` handles disclosure pattern (aria-expanded, aria-controls) internally
- `aria-current="page"` for active navigation items (consumer's responsibility)
- No `role="menu"` - preserves natural tab sequence

### Component Separation of Concerns

**AgSidebar is responsible for:**
- Navigation landmark (`<nav>` with `aria-label`)
- Responsive layout (persistent vs. temporary modes)
- Focus management (focus trap in temporary mode)
- Collapse/expand toggle

**AgSidebar is NOT responsible for:**
- Disclosure/accordion ARIA (handled by `ag-accordion`)
- Multi-level nesting logic (consumer composes structure)
- Active state management (consumer adds `aria-current`)

### Example Structure

```html
<ag-sidebar aria-label="Main navigation">
  <!-- Sidebar just provides the container -->
  <nav>
    <!-- Consumer composes navigation using existing components -->
    
    <!-- Flat link -->
    <a href="/" aria-current="page">
      <ag-icon name="home"></ag-icon>
      Dashboard
    </a>
    
    <!-- Collapsible section using ag-accordion -->
    <ag-accordion>
      <ag-accordion-item>
        <span slot="header">
          <ag-icon name="folder"></ag-icon>
          Projects
        </span>
        <ul slot="content">
          <li><a href="/projects/1">Project Alpha</a></li>
          <li><a href="/projects/2">Project Beta</a></li>
        </ul>
      </ag-accordion-item>
    </ag-accordion>
    
    <!-- Another flat link -->
    <a href="/settings">
      <ag-icon name="settings"></ag-icon>
      Settings
    </a>
  </nav>
</ag-sidebar>
```

**Key point**: `ag-accordion` already implements the disclosure pattern correctly with all necessary ARIA attributes. Sidebar doesn't duplicate this logic.

---

## Component Architecture

### Core Structure

```
ag-sidebar
├── Shadow DOM
│   ├── sidebar-container (nav)
│   │   ├── ag-toggle-button (slot with fallback)
│   │   ├── ag-sidebar-header (slot)
│   │   ├── ag-sidebar-content (slot)
│   │   │   └── Consumer provides:
│   │   │       ├── Direct nav links (flat)
│   │   │       └── ag-accordion (for collapsible sections)
│   │   │           └── ag-accordion-item (each section)
│   │   │               └── Links (one level deep max)
│   │   └── ag-sidebar-footer (slot)
│   └── backdrop (for temporary mode)
└── Light DOM (slotted content)
    ├── ag-accordion (collapsible sections)
    └── Direct navigation links
```

### Navigation Structure Philosophy

**CRITICAL**: AgSidebar does **NOT** own multi-level nesting logic. It provides:

1. **Container + Layout** - The sidebar shell with responsive behavior
2. **Toggle Button** - Collapse/expand functionality  
3. **Content Slots** - Areas for consumer-provided navigation

**Navigation composition is the consumer's responsibility:**

- **Flat links**: Consumer adds `<nav><ul><li><a>` directly
- **Collapsible sections**: Consumer adds `<ag-accordion>` with `<ag-accordion-item>` children
- **Icons**: Consumer uses `<ag-icon>` in their navigation markup

**Maximum nesting depth: ONE LEVEL**

```
Sidebar
├── Link (flat)
├── Accordion Item
│   └── Link (one level deep)
└── Link (flat)
```

**We explicitly DO NOT support**:
```
❌ Sidebar → Accordion → Nested Accordion → Links (too deep)
❌ Sidebar → Accordion → Accordion → Accordion (complexity explosion)
```

### Rationale for Flat Structure

1. **Simplicity**: Most navigation is 1-2 levels max (see GitHub, VS Code, claude.ai)
2. **Accessibility**: Deep nesting creates cognitive load and navigation difficulty
3. **Maintainability**: Sidebar doesn't need to understand disclosure/accordion logic
4. **Composability**: Let specialized components (`ag-accordion`) handle their domain
5. **Performance**: Shallow DOM trees render faster

---

## Props & Attributes

### Core Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls sidebar visibility on mobile (below breakpoint) |
| `collapsed` | `boolean` | `false` | Controls collapsed/rail state (icon-only) |
| `position` | `'left' \| 'right'` | `'left'` | Sidebar position on the screen |
| `aria-label` | `string` | `'Navigation'` | Accessible label for the navigation landmark |

### Responsive Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `breakpoint` | `number` | `1024` | Pixel width below which mobile overlay behavior activates |

**Behavior automatically determined by:**
- **Desktop (≥ breakpoint)**: Persistent sidebar, visible by default, can toggle `collapsed` for rail mode
- **Mobile (< breakpoint)**: Overlay drawer controlled by `open` prop, requires toggle button

### Styling Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'bordered' \| 'elevated'` | `'default'` | Visual style variant |
| `no-transition` | `boolean` | `false` | Disable animations (respects prefers-reduced-motion) |

**Note**: There is no `mode` prop. Behavior is automatically determined based on screen size and state:
- Desktop (≥ breakpoint): Persistent, can be `collapsed` for rail mode
- Mobile (< breakpoint): Overlay drawer controlled by `open`

---

## Events

### Custom Events

All events follow the dual-dispatch pattern (dispatchEvent + callback).

#### `sidebar-toggle`
### Phase 4: Event Handlers

Follow DEVELOPMENT_GUIDE.md event patterns:

```typescript
interface SidebarToggleEventDetail {
  open: boolean;
}
type SidebarToggleEvent = CustomEvent<SidebarToggleEventDetail>;
```

**Dispatched when**: Sidebar open state changes (for temporary mode)

**Usage**:
```javascript
sidebar.addEventListener('sidebar-toggle', (e) => {
  console.log('Sidebar is now:', e.detail.open ? 'open' : 'closed');
});
```

#### `sidebar-collapse`
```typescript
interface SidebarCollapseEventDetail {
  collapsed: boolean;
}
type SidebarCollapseEvent = CustomEvent<SidebarCollapseEventDetail>;
```

**Dispatched when**: Sidebar collapsed state changes (rail mode toggle)

#### `sidebar-breakpoint-change`
```typescript
interface SidebarBreakpointChangeEventDetail {
  isMobile: boolean;
  breakpoint: number;
}
type SidebarBreakpointChangeEvent = CustomEvent<SidebarBreakpointChangeEventDetail>;
```

**Dispatched when**: Window resize crosses the breakpoint threshold

**Usage**:
```javascript
sidebar.addEventListener('sidebar-breakpoint-change', (e) => {
  console.log('Is mobile:', e.detail.isMobile);
  console.log('Breakpoint:', e.detail.breakpoint);
});
```

### Native Event Re-dispatch

The following native events are re-dispatched from the host:
- `focus` - When sidebar receives focus
- `blur` - When sidebar loses focus

---

## Responsive Behavior

### Breakpoint Strategy

The component uses a single breakpoint to determine behavior:

| Screen Size | Behavior | open prop | collapsed prop |
|-------------|----------|-----------|----------------|
| **Desktop** (≥ 1024px) | Persistent sidebar, always visible | Ignored | Controls rail mode |
| **Mobile** (< 1024px) | Overlay drawer with backdrop | Controls visibility | Ignored |

**Key Insight**: You don't set "modes" — the component automatically adapts based on screen size. You just control `open` (mobile drawer) and `collapsed` (desktop rail).

### Responsive Patterns

#### Pattern 1: Auto-Responsive (Default - Zero Config)

```html
<ag-sidebar aria-label="Main navigation">
  <!-- Automatically adapts at 1024px breakpoint -->
  <nav-content></nav-content>
</ag-sidebar>
```

**Behavior**:
- Desktop (≥ 1024px): Visible by default, can toggle `collapsed` for rail mode
- Mobile (< 1024px): Hidden by default, toggle `open` to show overlay

#### Pattern 2: Custom Breakpoint

```html
<ag-sidebar :breakpoint="768" aria-label="Main navigation">
  <!-- Switches to mobile behavior at 768px instead of 1024px -->
</ag-sidebar>
```

#### Pattern 3: Start Collapsed on Desktop

```html
<ag-sidebar collapsed aria-label="Main navigation">
  <!-- Desktop: Rail mode (icon-only) -->
  <!-- Mobile: Standard overlay when opened -->
</ag-sidebar>
```

### Responsive State Management

The component internally manages responsive state based on a single breakpoint:

```typescript
@state() private _isMobile = false;

private _handleResize = () => {
  const wasMobile = this._isMobile;
  this._isMobile = window.innerWidth < this.breakpoint;
  
  // Only dispatch if state actually changed
  if (wasMobile !== this._isMobile) {
    const event = new CustomEvent<SidebarBreakpointChangeEventDetail>(
      'sidebar-breakpoint-change',
      {
        detail: { 
          isMobile: this._isMobile,
          breakpoint: this.breakpoint 
        },
        bubbles: true,
        composed: true,
      }
    );
    this.dispatchEvent(event);
    
    if (this.onBreakpointChange) {
      this.onBreakpointChange(event);
    }
  }
};
```

**CSS applies behavior based on internal state:**
```css
/* Desktop: persistent sidebar */
:host(:not([data-mobile])) {
  /* Always visible, can be collapsed */
}

/* Mobile: overlay drawer */
:host([data-mobile]) {
  /* Hidden by default, controlled by open prop */
}

:host([data-mobile][open]) {
  /* Overlay visible with backdrop */
}
```

---

## Slots & CSS Shadow Parts

### Slots

| Slot | Description |
|------|-------------|
| `default` | Main navigation content (nav items, lists) |
| `ag-header` | Optional header content (logo, title) |
| `ag-toggle-button` | Override the built-in collapse toggle button |
| `ag-footer` | Optional footer content (user profile, settings) |

**Toggle Button Slot Pattern**:
```html
<!-- Default built-in button -->
<ag-sidebar aria-label="Main navigation">
  <nav-content></nav-content>
</ag-sidebar>

<!-- Custom toggle button -->
<ag-sidebar aria-label="Main navigation">
  <button slot="ag-toggle-button" aria-label="Toggle sidebar">
    <ag-icon name="chevron-left"></ag-icon>
  </button>
  <nav-content></nav-content>
</ag-sidebar>
```

**Accessibility Note**: The toggle button should be the first interactive element in the sidebar for keyboard users. It appears at the top of the navigation in the DOM order.

### CSS Shadow Parts

| Part | Element | Description |
|------|---------|-------------|
| `ag-sidebar-container` | `<aside>` | The main sidebar container |
| `ag-sidebar-nav` | `<nav>` | The navigation landmark |
| `ag-sidebar-toggle-wrapper` | `<div>` | Wrapper for toggle button slot |
| `ag-sidebar-toggle-button` | `<button>` | Built-in collapse toggle button (if not overridden) |
| `ag-sidebar-header` | `<div>` | Header slot wrapper |
| `ag-sidebar-content` | `<div>` | Main content slot wrapper |
| `ag-sidebar-footer` | `<div>` | Footer slot wrapper |
| `ag-sidebar-backdrop` | `<div>` | Overlay backdrop (temporary mode) |

**Note**: Parts for slotted content (nav items, accordion items) should be exposed by their respective components (`ag-accordion`, etc.) or styled directly via Light DOM CSS.

### Advanced Customization Examples
```css
/* Customize sidebar width and transitions */
ag-sidebar::part(ag-sidebar-container) {
  width: var(--my-sidebar-width, 280px);
  transition: width var(--ag-motion-duration-normal);
}

/* Style the backdrop */
ag-sidebar::part(ag-sidebar-backdrop) {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

/* Customize header with border */
ag-sidebar::part(ag-sidebar-header) {
  border-bottom: 2px solid var(--ag-primary);
  padding: var(--ag-space-4);
}

/* Style the toggle button */
ag-sidebar::part(ag-sidebar-toggle-button) {
  border-radius: var(--ag-radius-full);
  background: var(--ag-background-secondary);
  color: var(--ag-text-primary);
}

ag-sidebar::part(ag-sidebar-toggle-button):hover {
  background: var(--ag-primary);
  color: var(--ag-primary-contrast);
}

/* Adjust content padding in collapsed state */
ag-sidebar[collapsed]::part(ag-sidebar-content) {
  padding: var(--ag-space-2);
}

/* Different footer styling */
ag-sidebar::part(ag-sidebar-footer) {
  border-top: 1px solid var(--ag-border);
  padding-top: var(--ag-space-4);
  margin-top: auto; /* Push to bottom */
}
```

### Styling Boundary
   
   **Shadow Parts (Internal Structure)**:
   - Sidebar container, backdrop, header/footer wrappers
   - Built-in toggle button (if not overridden)
   
   **Light DOM CSS (Slotted Content)**:
   - Navigation links and their icons
   - Accordion components (`ag-accordion`, `ag-accordion-item`)
   - Custom header/footer content
   - Labels in collapsed state (`.nav-label` class pattern)

### Consider exportparts for composed components

Nested components:
```ts
// If ag-icon or other components are used internally
   static styles = css`
     :host {
       /* ... */
     }
   `;
   
   // In render
   render() {
     return html`
       <button part="ag-sidebar-toggle-button">
         <ag-icon 
           name="chevron-left"
           exportparts="ag-icon-svg: ag-sidebar-toggle-icon"
         ></ag-icon>
       </button>
     `;
   }
```

---

## Token System

### Component-Specific Tokens (with Fallbacks)

```css
:host {
  /* Width tokens */
  --ag-sidebar-width: var(--ag-sidebar-width-base, 16rem);
  --ag-sidebar-width-collapsed: var(--ag-sidebar-width-collapsed-base, 4rem);
  --ag-sidebar-width-mobile: var(--ag-sidebar-width-mobile-base, 20rem);
  
  /* Spacing tokens (use global tokens) */
  --ag-sidebar-padding: var(--ag-space-4);
  --ag-sidebar-item-padding: var(--ag-space-3);
  --ag-sidebar-section-gap: var(--ag-space-6);
  
  /* Colors (use global semantic tokens) */
  --ag-sidebar-background: var(--ag-background-primary);
  --ag-sidebar-border: var(--ag-border);
  --ag-sidebar-item-hover: var(--ag-background-secondary);
  --ag-sidebar-item-active: var(--ag-primary);
  
  /* Transition */
  --ag-sidebar-transition-duration: var(--ag-motion-duration-normal);
  --ag-sidebar-transition-easing: var(--ag-motion-easing-standard);
  
  /* Z-index */
  --ag-sidebar-z-index: var(--ag-z-sidebar, 100);
  --ag-sidebar-backdrop-z-index: var(--ag-z-sidebar-backdrop, 99);
}
```

### Variant Tokens

```css
/* Bordered variant */
:host([variant="bordered"]) {
  --ag-sidebar-border-width: 1px;
  --ag-sidebar-border-color: var(--ag-border);
}

/* Elevated variant */
:host([variant="elevated"]) {
  --ag-sidebar-shadow: var(--ag-shadow-md);
}
```

### Responsive Width Adjustments

```css
/* Desktop - full width */
@media (min-width: 1024px) {
  :host {
    --ag-sidebar-width: var(--ag-sidebar-width-base, 16rem);
  }
  
  /* Collapsed/rail width on desktop */
  :host([collapsed]) {
    --ag-sidebar-width: var(--ag-sidebar-width-collapsed, 4rem);
  }
}

/* Mobile - overlay takes most of screen */
@media (max-width: 1023px) {
  :host([open]) {
    --ag-sidebar-width: var(--ag-sidebar-width-mobile, 85vw);
  }
}
```

**Note**: The breakpoint value (1024px) can be customized via the `breakpoint` prop, which updates these media queries dynamically if needed, or consumers can override via CSS tokens.

---

## Keyboard Interactions

### Focus Management

| Key | Action |
|-----|--------|
| `Tab` | Move focus forward through interactive elements |
| `Shift+Tab` | Move focus backward through interactive elements |
| `Enter` / `Space` | Activate focused link or toggle disclosure button |
| `Escape` | Close sidebar (temporary mode only) |

### Optional Arrow Key Navigation

Arrow key support can be optionally enabled but should supplement, not replace, Tab navigation since navigation links are not contained in a composite widget role.

If implemented:
- `↓` / `→` - Focus next navigation item
- `↑` / `←` - Focus previous navigation item
- `Home` - Focus first navigation item
- `End` - Focus last navigation item

### Disclosure Pattern (Nested Sections)

Disclosure buttons toggle visibility using Enter or Space keys and must maintain aria-expanded state:

```html
<button 
  aria-expanded="false"
  aria-controls="projects-list"
  @click=${this._handleToggle}
  @keydown=${this._handleKeydown}
>
  <icon>▶</icon>
  Projects
</button>
<ul id="projects-list" ?hidden=${!this.expanded}>
  <!-- nested items -->
</ul>
```

### Focus Trap (Mobile Overlay)

When sidebar is open on mobile (below breakpoint):
1. Focus moves to first focusable element inside sidebar
2. Tab/Shift+Tab cycles through sidebar only
3. Esc closes sidebar and returns focus to trigger button
4. Clicking backdrop closes sidebar and returns focus

---

## Implementation Guidelines

### Phase 1: Core Structure

```typescript
export class AgSidebar extends LitElement {
  // Follow DEVELOPMENT_GUIDE.md patterns
  
  // ✅ Manual registration (NOT @customElement)
  // ✅ Boolean attributes use [prop] selectors
  // ✅ Multi-word props use kebab-case attributes
  // ✅ Expose CSS Shadow Parts for customization
  // ✅ Use semantic tokens, NEVER hardcode colors
  
  static styles = css`
    :host {
      display: block;
      position: relative;
    }
    
    /* CRITICAL: CSS-first responsive behavior to prevent FOUC */
    /* Default to desktop persistent sidebar */
    .sidebar-container {
      position: relative;
    }
    
    /* Mobile overlay (before JS hydrates) */
    @media (max-width: 1023px) {
      .sidebar-container {
        position: fixed;
        z-index: var(--ag-sidebar-z-index, 1000);
        /* Hidden by default on mobile */
        transform: translateX(-100%);
      }
      
      :host([open]) .sidebar-container {
        transform: translateX(0);
      }
    }
    
    /* Desktop: persistent sidebar */
    @media (min-width: 1024px) {
      .sidebar-container {
        position: relative;
        transform: none;
      }
      
      /* Rail mode (collapsed) */
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-collapsed, 4rem);
      }
    }
    
    /* Prevent rail styles from leaking to mobile */
    @media (max-width: 1023px) {
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-mobile, 85vw);
      }
    }
  `;
}
```

**FOUC Prevention**: CSS media queries provide correct initial rendering during SSR/hydration. JavaScript `_isMobile` state then takes over for dynamic behavior after hydration.

### Phase 2: Responsive Management with State Auto-Reset

```typescript
override connectedCallback() {
  super.connectedCallback();
  
  // Initialize mobile state
  this._updateMobileState();
  
  // Listen for resize
  window.addEventListener('resize', this._handleResize);
}

override disconnectedCallback() {
  super.disconnectedCallback();
  window.removeEventListener('resize', this._handleResize);
}

private _updateMobileState() {
  const wasMobile = this._isMobile;
  this._isMobile = window.innerWidth < this.breakpoint;
  
  return wasMobile !== this._isMobile;
}

private _handleResize = () => {
  if (this._updateMobileState()) {
    // Auto-reset states when crossing breakpoint
    this._handleBreakpointTransition();
    this._dispatchBreakpointChange();
  }
};

private _handleBreakpointTransition() {
  if (this._isMobile) {
    // Desktop → Mobile transition
    // Close overlay and un-collapse (mobile doesn't use collapsed state)
    this.open = false;
    this.collapsed = false;
  } else {
    // Mobile → Desktop transition  
    // Keep collapsed state as-is, but ensure overlay is closed
    this.open = false;
  }
}

// Width prop support
override willUpdate(changedProperties: PropertyValues) {
  if (changedProperties.has('width') && this.width) {
    this.style.setProperty('--ag-sidebar-width', this.width);
  }
  
  // Validate breakpoint
  if (changedProperties.has('breakpoint')) {
    if (this.breakpoint <= 0) {
      console.warn('ag-sidebar: breakpoint must be a positive number');
      this.breakpoint = 1024; // Reset to default
    }
  }
}
```

### Phase 3: Focus Management & Inert

**CRITICAL**: Use the `inert` attribute to implement focus trap on mobile.

```typescript
// Reference to main content (outside sidebar)
private _mainContentRef?: HTMLElement;

override willUpdate(changedProperties: Map<string, unknown>) {
  // Handle keyboard listeners
  if (changedProperties.has('open')) {
    if (this.open && this._isMobile) {
      document.addEventListener('keydown', this._handleKeydown);
      this._trapFocus();
    } else {
      document.removeEventListener('keydown', this._handleKeydown);
      this._releaseFocus();
    }
  }
}

private _findMainContent(): HTMLElement | null {
  // More surgical approach - find closest main content
  return this.closest('main') || 
         this.parentElement?.querySelector('main') ||
         document.querySelector('main') || 
         document.body;
}

private _trapFocus() {
  // Make main content inert (not the entire document)
  const mainContent = this._findMainContent();
  if (mainContent && mainContent !== this && !mainContent.contains(this)) {
    mainContent.setAttribute('inert', '');
    this._mainContentRef = mainContent;
  }
  
  // Focus first interactive element in sidebar
  this.updateComplete.then(() => {
    const firstFocusable = this.shadowRoot?.querySelector(
      'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    firstFocusable?.focus();
  });
}

private _releaseFocus() {
  // Remove inert from main content
  if (this._mainContentRef) {
    this._mainContentRef.removeAttribute('inert');
    this._mainContentRef = undefined;
  }
  
  // Return focus to trigger button if it exists
  const trigger = document.querySelector('[data-sidebar-trigger]') as HTMLElement;
  trigger?.focus();
}
```

**Alternative**: For broader browser support, use a library like `focus-trap` or `tabbable` instead of the `inert` attribute.

**Note**: The `inert` attribute has excellent modern browser support and is the recommended approach. It automatically handles:
- Preventing focus on inert content
- Excluding inert content from assistive technology
- Simpler than manual focus trap implementation

```typescript
// Backdrop click (mobile overlay)
private _handleBackdropClick = () => {
  if (this._isMobile) {
    this.open = false;
    
    const toggleEvent = new CustomEvent<AgSidebarToggleEventDetail>('ag-sidebar-toggle', {
      detail: { open: false },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(toggleEvent);
    
    if (this.onToggle) {
      this.onToggle(toggleEvent);
    }
  }
};

// Escape key (mobile overlay)
private _handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && this._isMobile && this.open) {
    event.preventDefault();
    this._handleBackdropClick();
  }
};

// Toggle collapsed state (desktop only)
private _handleToggleCollapsed = () => {
  if (!this._isMobile) {
    this.collapsed = !this.collapsed;
    
    const collapseEvent = new CustomEvent<AgSidebarCollapseEventDetail>('ag-sidebar-collapse', {
      detail: { collapsed: this.collapsed },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(collapseEvent);
    
    if (this.onCollapse) {
      this.onCollapse(collapseEvent);
    }
  }
};

// Manage in willUpdate
override willUpdate(changedProperties: Map<string, unknown>) {
  if (changedProperties.has('open')) {
    if (this.open && this._isMobile) {
      document.addEventListener('keydown', this._handleKeydown);
    } else {
      document.removeEventListener('keydown', this._handleKeydown);
    }
  }
}
```

### Phase 5: Accessibility

```typescript
render() {
  const showBackdrop = this._isMobile && this.open;
  
  return html`
    ${showBackdrop ? html`
      <div 
        part="ag-sidebar-backdrop"
        @click=${this._handleBackdropClick}
        aria-hidden="true"
      ></div>
    ` : ''}
    
    <aside
      part="ag-sidebar-container"
      role="none"
    >
      <nav
        part="ag-sidebar-nav"
        aria-label=${this.ariaLabel}
      >
        <!-- Toggle button first for keyboard accessibility -->
        <div part="ag-sidebar-toggle-wrapper">
          <slot name="ag-toggle-button">
            <button
              part="ag-sidebar-toggle-button"
              aria-label=${this.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-expanded=${!this.collapsed}
              @click=${this._handleToggleCollapsed}
            >
              <ag-icon name=${this.collapsed ? 'chevron-right' : 'chevron-left'}></ag-icon>
            </button>
          </slot>
        </div>
        
        <div part="ag-sidebar-header">
          <slot name="header"></slot>
        </div>
        
        <div part="ag-sidebar-content">
          <slot></slot>
        </div>
        
        <div part="ag-sidebar-footer">
          <slot name="footer"></slot>
        </div>
      </nav>
    </aside>
  `;
}
```

**CRITICAL - Rail Mode Accessibility**:

Consumer navigation items in rail mode must use visually hidden text, NOT `display: none`:

```html
<ag-sidebar collapsed>
  <nav>
    <a href="/dashboard">
      <ag-icon name="dashboard"></ag-icon>
      <ag-visually-hidden>Dashboard</ag-visually-hidden>
    </a>
    
    <a href="/projects">
      <ag-icon name="folder"></ag-icon>
      <ag-visually-hidden>Projects</ag-visually-hidden>
    </a>
  </nav>
</ag-sidebar>
```

**Alternative**: Icons can have `aria-label` attributes:

```html
<a href="/dashboard">
  <ag-icon name="dashboard" aria-label="Dashboard"></ag-icon>
</a>
```

**DON'T DO THIS** (removes from accessibility tree):
```css
/* ❌ WRONG - Screen readers can't access */
ag-sidebar[collapsed] span {
  display: none;
}
```

**DO THIS INSTEAD** (visually hidden but accessible):
```css
/* ✅ CORRECT - Visually hidden but accessible */
ag-sidebar[collapsed] .nav-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

Or use the `<ag-visually-hidden>` component.

---

## Examples & Use Cases

### Example 1: Basic Left Sidebar with Accordion Navigation

```html
<ag-sidebar aria-label="Main navigation">
  <div slot="header">
    <h2>My App</h2>
  </div>
  
  <nav>
    <!-- Flat links with icons -->
    <a href="/" aria-current="page">
      <ag-icon name="dashboard"></ag-icon>
      <span class="nav-label">Dashboard</span>
    </a>
    
    <!-- Collapsible section using ag-accordion -->
    <ag-accordion>
      <ag-accordion-item>
        <span slot="header">
          <ag-icon name="folder"></ag-icon>
          <span class="nav-label">Projects</span>
        </span>
        <ul slot="content">
          <li>
            <a href="/projects/alpha">
              <ag-icon name="file"></ag-icon>
              <span class="nav-label">Project Alpha</span>
            </a>
          </li>
          <li>
            <a href="/projects/beta">
              <ag-icon name="file"></ag-icon>
              <span class="nav-label">Project Beta</span>
            </a>
          </li>
        </ul>
      </ag-accordion-item>
      
      <ag-accordion-item>
        <span slot="header">
          <ag-icon name="users"></ag-icon>
          <span class="nav-label">Team</span>
        </span>
        <ul slot="content">
          <li><a href="/team/members">Members</a></li>
          <li><a href="/team/roles">Roles</a></li>
        </ul>
      </ag-accordion-item>
    </ag-accordion>
    
    <!-- Another flat link -->
    <a href="/settings">
      <ag-icon name="settings"></ag-icon>
      <span class="nav-label">Settings</span>
    </a>
  </nav>
  
  <div slot="footer">
    <user-profile></user-profile>
  </div>
</ag-sidebar>

<style>
  /* ✅ CORRECT: Visually hide labels in collapsed state, keep accessible */
  ag-sidebar[collapsed] .nav-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Icons remain visible in collapsed state */
  ag-sidebar[collapsed] ag-icon {
    display: block;
  }
</style>
```

### Example 2: Right Sidebar with Table of Contents (Using ag-accordion)

```html
<ag-sidebar position="right" aria-label="Table of contents">
  <ag-accordion>
    <ag-accordion-item expanded>
      <span slot="header">Introduction</span>
      <ul slot="content">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
      </ul>
    </ag-accordion-item>
    
    <ag-accordion-item>
      <span slot="header">Guides</span>
      <ul slot="content">
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
      </ul>
    </ag-accordion-item>
  </ag-accordion>
</ag-sidebar>
```

### Example 3: Responsive with Custom Breakpoint

```html
<ag-sidebar 
  :breakpoint="768"
  aria-label="App navigation"
  @ag-sidebar-toggle="handleToggle"
  @ag-sidebar-breakpoint-change="handleBreakpointChange"
>
  <navigation-menu></navigation-menu>
</ag-sidebar>

<script>
  function handleToggle(e) {
    console.log('Sidebar toggled:', e.detail.open);
  }
  
  function handleBreakpointChange(e) {
    console.log('Is mobile:', e.detail.isMobile);
    console.log('Breakpoint:', e.detail.breakpoint);
    
    // Could adjust layout or show toast notification
    if (e.detail.isMobile) {
      console.log('Switched to mobile overlay mode');
    } else {
      console.log('Switched to desktop persistent mode');
    }
  }
</script>
```

### Example 4: Collapsible Rail Mode (Accessible)

```html
<ag-sidebar 
  collapsed
  aria-label="Main navigation"
  @ag-sidebar-collapse="handleCollapse"
>
  <!-- Built-in toggle button automatically included -->
  <!-- User must explicitly click to expand/collapse -->
  
  <nav>
    <!-- ✅ CORRECT: Use ag-visually-hidden for accessible rail mode -->
    <a href="/" aria-current="page">
      <ag-icon name="dashboard"></ag-icon>
      <ag-visually-hidden>Dashboard</ag-visually-hidden>
    </a>
    
    <a href="/projects">
      <ag-icon name="folder"></ag-icon>
      <ag-visually-hidden>Projects</ag-visually-hidden>
    </a>
    
    <a href="/settings">
      <ag-icon name="settings"></ag-icon>
      <ag-visually-hidden>Settings</ag-visually-hidden>
    </a>
  </nav>
</ag-sidebar>

<style>
  /* Labels are visually hidden but accessible to screen readers */
  /* ag-visually-hidden handles this automatically */
  
  /* NO hover expansion - explicit toggle only */
</style>

<script>
  function handleCollapse(e) {
    console.log('Sidebar collapsed:', e.detail.collapsed);
    // Save preference to localStorage if desired
  }
</script>
```

**Alternative with aria-label on icons**:

```html
<ag-sidebar collapsed aria-label="Main navigation">
  <nav>
    <a href="/">
      <ag-icon name="dashboard" aria-label="Dashboard"></ag-icon>
    </a>
    
    <a href="/projects">
      <ag-icon name="folder" aria-label="Projects"></ag-icon>
    </a>
  </nav>
</ag-sidebar>
```

### Example 5: Custom Toggle Button

```html
<ag-sidebar aria-label="Main navigation">
  <!-- Override default toggle button -->
  <button 
    slot="ag-toggle-button" 
    aria-label="Toggle sidebar collapse"
    class="custom-toggle"
  >
    <svg><!-- custom icon --></svg>
    <span class="sr-only">Toggle sidebar</span>
  </button>
  
  <div slot="header">
    <h2>My App</h2>
  </div>
  
  <nav>
    <navigation-items></navigation-items>
  </nav>
</ag-sidebar>
```

---

## Testing Requirements

### Unit Tests

- [ ] Toggle open/close state
- [ ] Toggle collapsed state (desktop only)
- [ ] Collapsed state ignored on mobile
- [ ] Dispatch sidebar-toggle event
- [ ] Dispatch sidebar-collapse event
- [ ] Dispatch sidebar-breakpoint-change event
- [ ] Escape key closes mobile drawer
- [ ] Backdrop click closes mobile drawer
- [ ] Focus moves to first element when drawer opens
- [ ] Focus returns to trigger when drawer closes
- [ ] Inert attribute applied to main content when drawer open
- [ ] ARIA attributes set correctly (aria-label, aria-expanded)
- [ ] Slot content renders properly
- [ ] Width prop sets CSS variable

### Integration Tests

- [ ] Works in Lit Storybook
- [ ] Works in React Storybook (via @lit/react wrapper)
- [ ] Works in Vue Storybook (with proper prop syncing)
- [ ] Responsive breakpoints trigger correctly
- [ ] CSS-first rendering works without JavaScript
- [ ] No FOUC on initial load
- [ ] Dark mode appearance correct
- [ ] CSS Shadow Parts customizable

### Accessibility Tests

- [ ] Screen reader announces navigation landmark
- [ ] Focus visible on all interactive elements
- [ ] Keyboard-only navigation works
- [ ] Toggle button is first interactive element
- [ ] Rail mode labels accessible (visually-hidden or aria-label)
- [ ] Focus trap works on mobile
- [ ] Main content inert when drawer open
- [ ] aria-expanded toggles correctly on collapse button
- [ ] aria-current="page" works on active items (consumer responsibility)
- [ ] No focus trap issues on desktop
- [ ] Contrast meets WCAG AA standards in both light and dark modes

---

## Design Decisions

### ✅ Decided

1. **Built-in Toggle Button**: Provide a built-in collapse toggle button with ability to override via named slot `ag-toggle-button`
   - Default button with accessible label and ag-icon
   - Consumers can replace with `<button slot="ag-toggle-button">...</button>`

2. **Expand-on-Hover**: **NO** - Explicit interaction only (like claude.ai)
   - User must explicitly click or press Enter on toggle button
   - No automatic expand on hover
   - More predictable and intentional behavior

3. **Icon Integration**: Use `ag-icon` component for all icons
   - Toggle button uses ag-icon
   - Consumer navigation items should use ag-icon
   - Consistent icon sizing and appearance across collapsed/expanded states

4. **Navigation Composition**: Use `ag-accordion` for collapsible sections
   - AgSidebar provides container only
   - Consumer composes navigation using ag-accordion
   - No custom disclosure logic in sidebar component
   - Single-level nesting maximum (sidebar → accordion → links)

5. **Nesting Policy**: **Hard limit of one level deep**
   - Sidebar can contain flat links OR accordion items
   - Accordion items can contain links (one level)
   - NO nested accordions (accordion inside accordion)
   - Rationale: Simplicity, accessibility, and clear component boundaries

### 🔄 To Be Decided

6. **Animation Library**: Should we use Lit's `animate` directive or custom CSS transitions?

7. **Mobile Swipe Gesture**: Should we support swipe-to-open/close gestures on touch devices?

8. **Persistence**: Should we provide built-in support for remembering collapsed state in localStorage?

---

## Success Criteria

- ✅ Passes all WAI-ARIA disclosure pattern requirements
- ✅ Works seamlessly across Lit, React, and Vue
- ✅ Responsive behavior automatic with sensible defaults
- ✅ Fully customizable via CSS Shadow Parts and tokens
- ✅ Zero accessibility violations in testing
- ✅ Works in both light and dark modes
- ✅ Keyboard navigation smooth and intuitive
- ✅ Clear, comprehensive documentation and examples

---

## References

- WAI-ARIA Disclosure Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- Disclosure Navigation Example: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/
- Adrian Roselli - Link + Disclosure Widget Navigation: https://adrianroselli.com/2019/06/link-disclosure-widget-navigation.html
- Mobbin Sidebar Glossary: https://mobbin.com/glossary/sidebar
- shadcn/ui Sidebar: https://ui.shadcn.com/docs/components/sidebar

---

**Next Steps**: 
1. Review and approve PRD
2. Run scaffold command
3. Begin Phase 1 implementation
4. Create Storybook stories for all three frameworks
5. Write comprehensive tests
6. Document in VitePress

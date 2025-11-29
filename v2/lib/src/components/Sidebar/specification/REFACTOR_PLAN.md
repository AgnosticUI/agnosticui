# AgnosticUI Sidebar Component - Final Implementation Plan

## Executive Summary
The component is **85% production-ready**. Core functionality is solid, but there are critical UX gaps and documentation needs before library inclusion.

**Total Time Budget:** 11 hours (extended from 10h to include composable header slots)  
**Team Capacity:** 10-11 developer hours  
**Target Audience:** Frontend developers, vibe coders, general UI builders

---

## Critical Issues Assessment

### 🚨 **Issue 1: Built-in Header Toggle Has Poor UX**
- **Problem:** `showHeaderToggle` hides header slot content when collapsed
- **Impact:** HIGH - Makes "easy mode" unusable
- **Effort:** 1.5 hours
- **Priority:** P0 - Must fix

### 🚨 **Issue 2: Missing Slot Documentation**
- **Problem:** `ag-toggle-icon` slot isn't documented in JSDoc
- **Impact:** HIGH - Developers won't discover customization
- **Effort:** 30 minutes
- **Priority:** P0 - Must fix

### 🚨 **Issue 3: No Public Helper Method**
- **Problem:** Consumers implement mobile/desktop detection themselves
- **Impact:** MEDIUM-HIGH - Violates DRY, creates friction
- **Effort:** 1 hour
- **Priority:** P0 - Must fix

### 🚨 **Issue 4: No Composable Header Slots**
- **Problem:** Consumers must handle all header layout logic manually
- **Impact:** MEDIUM-HIGH - Poor DX, repetitive boilerplate
- **Effort:** 1.5 hours
- **Priority:** P1 - Should fix

### ⚠️ **Issue 5: Storybook Stories Are Cluttered**
- **Problem:** 7 stories with overlapping concerns, unclear naming
- **Impact:** MEDIUM - Confusing for developers learning API
- **Effort:** 2 hours
- **Priority:** P1 - Should fix

---

## Implementation Plan

### **Phase 1: Critical Fixes (5.5 hours)**

#### **Task 1.1: Fix Built-in Header Toggle Layout** ⏱️ 1.5 hours
**Priority:** P0  
**Goal:** Make `showHeaderToggle` work alongside header slot content

**Current Problem:**
```typescript
// Hides header content when collapsed - BAD UX
${this.showHeaderToggle ? html`
  <div style="...">
    <slot name="header" style="${this.collapsed ? 'display: none;' : ''}"></slot>
    <button>...</button>
  </div>
` : html`<slot name="header"></slot>`}
```

**Required Changes:**
1. Remove conditional hiding of header slot
2. Use flexbox with `justify-content: space-between`
3. Add graceful width shrinking for header content
4. Ensure toggle button always visible

**Expected Result:**
```typescript
${this.showHeaderToggle ? html`
  <div class="header-with-toggle">
    <div class="header-content">
      <slot name="header"></slot>
    </div>
    <button class="header-toggle-button" @click=${this._handleHeaderToggleClick}>
      ${this._renderToggleIcon()}
    </button>
  </div>
` : html`<slot name="header"></slot>`}
```

**CSS to add:**
```css
.header-with-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ag-space-2);
  width: 100%;
}

.header-content {
  flex: 1;
  min-width: 0; /* Allow text truncation */
}

:host([collapsed]) .header-content {
  /* In collapsed mode, consider hiding or keeping visible based on design */
  opacity: 0;
  width: 0;
  overflow: hidden;
}

:host([collapsed]) .header-with-toggle {
  justify-content: center;
}
```

**LLM Prompt:**
```
The showHeaderToggle feature currently hides the header slot content when 
collapsed using inline style="display: none". This is poor UX.

Fix this by:
1. Creating a wrapper div with flexbox (space-between)
2. Header slot goes in a flex:1 container with min-width:0
3. Toggle button is always visible at the end
4. When collapsed, fade out or hide header content gracefully via CSS
5. Center the toggle button when collapsed

Update the render() method's header section and add appropriate CSS classes.
The goal is smooth, predictable behavior where the toggle button is always 
accessible.
```

**Acceptance Criteria:**
- ✅ Header content and toggle button coexist
- ✅ Works in expanded state (full header + button)
- ✅ Works in collapsed state (button centered or at end)
- ✅ Mobile behavior unchanged
- ✅ No layout shift during collapse animation

**Testing:**
- Toggle collapsed state in Storybook
- Verify header content shrinks/hides gracefully
- Check mobile overlay mode still works

---

#### **Task 1.2: Add Public `toggleSidebarState()` Method** ⏱️ 1 hour
**Priority:** P0  
**Goal:** Expose helper method for intelligent dual-purpose toggle

**Add to AgSidebar class:**
```typescript
/**
 * Intelligent toggle that handles both mobile and desktop contexts:
 * - Mobile + sidebar open: closes the sidebar overlay
 * - Desktop or mobile closed: toggles collapsed state (rail mode)
 * 
 * Use this method in custom header buttons to get automatic mobile/desktop
 * behavior without implementing viewport detection yourself.
 * 
 * @example
 * ```html
 * <ag-sidebar id="sidebar">
 *   <button slot="header" @click=${() => sidebar.toggleSidebarState()}>
 *     Toggle
 *   </button>
 * </ag-sidebar>
 * ```
 */
public toggleSidebarState(): void {
  const isMobile = window.innerWidth < this.breakpoint;
  
  if (isMobile && this.open) {
    // Mobile + open: close the overlay
    this.open = false;
    this._dispatchToggleEvent();
  } else {
    // Desktop or mobile closed: toggle collapsed state
    this.collapsed = !this.collapsed;
    this._dispatchCollapseEvent();
  }
}
```

**Update existing `_handleHeaderToggleClick`:**
```typescript
private _handleHeaderToggleClick = () => {
  // Built-in header toggle uses the public method
  this.toggleSidebarState();
};
```

**LLM Prompt:**
```
Add a public method called toggleSidebarState() that encapsulates the 
intelligent mobile/desktop toggle logic. 

The method should:
1. Check if current viewport width < this.breakpoint
2. If mobile AND sidebar is open: close it (set open=false, dispatch toggle event)
3. Otherwise: toggle collapsed state (dispatch collapse event)
4. Include comprehensive JSDoc with @example showing usage in custom button
5. Update _handleHeaderToggleClick to call this new public method

Place it after the existing toggleCollapse() method in the class.
This eliminates the need for consumers to implement viewport detection logic.
```

**Acceptance Criteria:**
- ✅ Method is public and documented with JSDoc
- ✅ Works correctly in mobile viewport (closes overlay)
- ✅ Works correctly in desktop viewport (toggles collapse)
- ✅ Example in JSDoc compiles and works
- ✅ `_handleHeaderToggleClick` refactored to use it
- ✅ No breaking changes to existing API

**Testing:**
- Call method from console in mobile mode when open → closes
- Call method from console in desktop mode → toggles collapsed
- Verify built-in header toggle still works

---

#### **Task 1.3: Document All Slots in JSDoc** ⏱️ 30 minutes
**Priority:** P0  
**Goal:** Make slot customization discoverable in IDE autocomplete

**Update class-level JSDoc comment:**
```typescript
/**
 * AgSidebar - A self-contained, accessible sidebar navigation component.
 * 
 * Provides responsive sidebar with mobile overlay and desktop rail/collapse modes.
 * Handles breakpoint detection, focus trapping, and keyboard navigation automatically.
 *
 * @element ag-sidebar
 * 
 * @slot header - Header content (logo, title, actions). In collapsed state, content may be hidden depending on layout.
 * @slot - Default slot for main navigation items. Use with `<ag-sidebar-nav>` components for best results.
 * @slot footer - Footer content (copyright notice, version info, etc.). Remains visible in collapsed state.
 * @slot ag-toggle-icon - Custom SVG icon for the mobile floating toggle button. Replaces the default panel icon. Must be an SVG element sized 18x18.
 *
 * @fires ag-sidebar-toggle - Fired when mobile overlay opens or closes. Detail: `{ open: boolean }`
 * @fires ag-sidebar-collapse - Fired when desktop rail mode is toggled. Detail: `{ collapsed: boolean }`
 *
 * @csspart ag-sidebar-container - The main `<aside>` container element
 * @csspart ag-sidebar-header - Header section wrapper
 * @csspart ag-sidebar-content - Scrollable main content section
 * @csspart ag-sidebar-footer - Footer section wrapper
 * @csspart ag-sidebar-backdrop - Mobile overlay backdrop (darkened background)
 * @csspart ag-sidebar-toggle-button - Floating mobile toggle button
 * @csspart ag-sidebar-header-toggle - Built-in header toggle button (when showHeaderToggle=true)
 * 
 * @cssprop --ag-sidebar-width - Expanded sidebar width (default: 18rem)
 * @cssprop --ag-sidebar-width-collapsed - Collapsed sidebar width (default: 3rem)
 * @cssprop --ag-sidebar-background - Sidebar background color
 * @cssprop --ag-sidebar-border - Border color
 * @cssprop --ag-sidebar-transition-duration - Animation duration (default: 200ms)
 */
export class AgSidebar extends LitElement implements AgSidebarProps {
```

**LLM Prompt:**
```
Update the class-level JSDoc comment to include comprehensive slot documentation.

Add @slot entries for:
1. header - Describe it holds logo/title/actions, mention collapsed behavior
2. (default) - Describe it's for nav content, suggest using ag-sidebar-nav
3. footer - Describe it's for copyright/version, stays visible when collapsed
4. ag-toggle-icon - NEW: Describe it customizes the floating toggle icon, must be SVG 18x18

Also ensure @fires, @csspart, and @cssprop documentation is complete and accurate.
The goal is to make all customization points discoverable in IDE autocomplete.
```

**Acceptance Criteria:**
- ✅ All 4 slots documented with @slot tags
- ✅ Each slot has clear description of purpose
- ✅ `ag-toggle-icon` slot mentions SVG requirement and size
- ✅ Shows in VSCode/WebStorm autocomplete
- ✅ CSS custom properties listed with defaults

**Testing:**
- Open file in VSCode, hover over `<ag-sidebar>` → see slots
- Type `<slot name="` → autocomplete suggests slot names
- Verify documentation is clear and helpful

---

#### **Task 1.4: Make toggleSidebarState() Resize-Aware** ⏱️ 1 hour
**Priority:** P0  
**Goal:** Ensure method always uses current viewport width

**Problem Analysis:**
The `toggleSidebarState()` method checks `window.innerWidth < this.breakpoint`, but this value can become stale if the window resizes between calls. We need the method to always read the current viewport width.

**Solution:** Add a private helper that checks current mobile state:

```typescript
/**
 * Checks if current viewport is below the mobile breakpoint
 * @private
 */
private _isMobileViewport(): boolean {
  return window.innerWidth < this.breakpoint;
}

/**
 * Intelligent toggle that handles both mobile and desktop contexts.
 * Always checks current viewport width to determine behavior.
 */
public toggleSidebarState(): void {
  const isMobile = this._isMobileViewport();
  
  if (isMobile && this.open) {
    this.open = false;
    this._dispatchToggleEvent();
  } else {
    this.collapsed = !this.collapsed;
    this._dispatchCollapseEvent();
  }
}
```

**Alternative approach (if preferred):**
- Reuse the viewport width check pattern consistently
- No need for state tracking since we check on-demand

**LLM Prompt:**
```
The toggleSidebarState() method needs to be resize-aware. Currently it checks
window.innerWidth < this.breakpoint inline, which works but could be extracted
for consistency.

Create a private _isMobileViewport() helper method that returns boolean for
whether current viewport is below breakpoint. Update toggleSidebarState() to
use this helper.

This ensures the method always makes decisions based on current viewport width,
not stale cached values. The goal is correctness across window resizes.

Keep it simple - no need for resize listeners since we check on-demand.
```

**Acceptance Criteria:**
- ✅ Helper method `_isMobileViewport()` added and documented
- ✅ `toggleSidebarState()` uses the helper
- ✅ Behavior correct after window resize
- ✅ No memory leaks or extra listeners
- ✅ Pattern is consistent with codebase style

**Testing:**
- Resize window from desktop → mobile
- Call `toggleSidebarState()` → should close overlay
- Resize back to desktop
- Call again → should toggle collapsed

---

#### **Task 1.5: Add Composable Header Slots** ⏱️ 1.5 hours
**Priority:** P1  
**Goal:** Provide granular header slots for easier composition without manual layout

**Problem Statement:**
Currently, consumers must manually implement all header layout logic:

```html
<!-- Current: Consumer does ALL the work -->
<div slot="header" style="display: flex; justify-content: space-between;">
  <h2>My App</h2>
  <button>Toggle</button>
</div>
```

This is repetitive boilerplate that the component should handle.

**Proposed Solution:**
Add three new granular slots that the component layouts automatically:

```html
<!-- Proposed: Component handles layout -->
<h2 slot="header-start">My App</h2>
<button slot="header-toggle">Toggle</button>
```

**Implementation:**

**1. Update render() header section:**
```typescript
<div part="ag-sidebar-header" class="sidebar-header">
  <slot name="header">
    <!-- Fallback: if no "header" slot, use composable parts -->
    <div class="header-layout">
      <div class="header-start">
        <slot name="header-start"></slot>
      </div>
      <div class="header-end">
        <slot name="header-end"></slot>
        <slot name="header-toggle"></slot>
      </div>
    </div>
  </slot>
</div>
```

**2. Add CSS for layout:**
```css
.header-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ag-space-2);
  width: 100%;
}

.header-start {
  flex: 1;
  min-width: 0; /* Allow text truncation */
  overflow: hidden;
}

.header-end {
  display: flex;
  align-items: center;
  gap: var(--ag-space-2);
  flex-shrink: 0;
}

/* Collapsed state: hide start, center end */
:host([collapsed]) .header-start {
  display: none;
}

:host([collapsed]) .header-layout {
  justify-content: center;
}
```

**3. Update JSDoc:**
```typescript
@slot header-start - Left side of header (logo, title). Hidden when collapsed.
@slot header-end - Right side of header (action buttons). Always visible.
@slot header-toggle - Specific slot for toggle button. Positioned at end.
```

**Backward Compatibility Strategy:**
- If `slot="header"` is provided → use it, ignore part slots
- If part slots are provided → component handles layout
- Both approaches work simultaneously

**LLM Prompt:**
```
Add composable header slots (header-start, header-end, header-toggle) to 
eliminate consumer layout boilerplate.

Requirements:
1. Maintain backward compatibility - existing "header" slot still works
2. If "header" slot has content, ignore the part slots
3. If "header" slot is empty, use the composable layout system
4. header-start: left side content (logo/title), hides when collapsed
5. header-end: right side content (actions), always visible
6. header-toggle: specific slot for toggle button, auto-positioned
7. Add CSS classes: header-layout, header-start, header-end
8. Flexbox with space-between, gap, proper shrinking
9. When collapsed: hide header-start, center header-end/header-toggle

Update both the render() method and styles section. Add @slot documentation
for all three new slots with clear descriptions of their purpose and behavior.
```

**Acceptance Criteria:**
- ✅ Backward compatible (existing `header` slot works unchanged)
- ✅ New part slots work when `header` slot is empty
- ✅ Layout handled automatically by component
- ✅ Collapsed state hides `header-start` only
- ✅ Works alongside `showHeaderToggle` feature
- ✅ All slots documented in JSDoc
- ✅ Example usage in at least one story

**Testing:**
- Use old `header` slot → verify still works
- Use new `header-start` + `header-toggle` → verify layout
- Toggle collapsed state → verify `header-start` hides
- Check both approaches in same Storybook instance

**Example Usage:**
```html
<!-- Simple case -->
<ag-sidebar>
  <h2 slot="header-start">My App</h2>
  <button slot="header-toggle" @click=${handleToggle}>
    ${PanelIcon()}
  </button>
</ag-sidebar>

<!-- Advanced case -->
<ag-sidebar>
  <div slot="header-start">
    <img src="logo.svg" alt="Logo">
    <h2>My App</h2>
  </div>
  <button slot="header-end">Settings</button>
  <button slot="header-toggle">Toggle</button>
</ag-sidebar>
```

---

### **Phase 2: Documentation & Examples (4 hours)**

#### **Task 2.1: Simplify Storybook Stories** ⏱️ 2 hours
**Priority:** P1  
**Goal:** Reduce to 4 essential stories with clear, distinct purposes

**Current State:** 7+ stories with significant overlap and unclear focus

**Target State:** 4 stories, each demonstrating one key feature

**Story Structure:**

**1. "Basic Usage" (replaces "Default")**
- **Purpose:** Show minimal setup with zero configuration
- **Features:** Default behavior, mobile toggle, no customization
- **Code:**
```typescript
export const BasicUsage: Story = {
  render: (args) => html`
    <ag-sidebar>
      <h2 slot="header">My App</h2>
      ${createNavContent()}
      <p slot="footer">© 2025</p>
    </ag-sidebar>
  `
};
```

**2. "Built-in Header Toggle" (new)**
- **Purpose:** Show `showHeaderToggle` feature (easy mode)
- **Features:** Component-managed toggle button
- **Code:**
```typescript
export const BuiltInHeaderToggle: Story = {
  render: (args) => html`
    <ag-sidebar show-header-toggle>
      <h2 slot="header">My App</h2>
      ${createNavContent()}
    </ag-sidebar>
  `
};
```

**3. "Custom Toggle Icon" (consolidate existing)**
- **Purpose:** Show `ag-toggle-icon` slot for branding
- **Features:** Custom SVG in floating toggle
- **Code:**
```typescript
export const CustomToggleIcon: Story = {
  render: (args) => html`
    <ag-sidebar>
      <svg slot="ag-toggle-icon" viewBox="0 0 24 24">
        <!-- Custom branded icon -->
      </svg>
      <h2 slot="header-start">My App</h2>
      <button slot="header-toggle">Toggle</button>
    </ag-sidebar>
  `
};
```

**4. "Advanced Composition" (replaces "WithHeaderFooter")**
- **Purpose:** Show composable slots + `toggleSidebarState()` method
- **Features:** All customization options, programmatic control
- **Code:**
```typescript
export const AdvancedComposition: Story = {
  render: () => {
    const sidebar = useRef();
    
    return html`
      <ag-sidebar id="sidebar">
        <div slot="header-start">
          <img src="logo.svg" />
          <h2>My App</h2>
        </div>
        <button slot="header-end">Settings</button>
        <button 
          slot="header-toggle"
          @click=${() => sidebar.current?.toggleSidebarState()}
        >
          Toggle
        </button>
        ${createNavContent()}
      </ag-sidebar>
    `;
  }
};
```

**Stories to Remove:**
- ❌ `WithHeaderFooter` - consolidated into Advanced
- ❌ `WithCustomToggleIconAndBuiltInHeader` - too niche
- ❌ `Collapsed` - use controls panel instead
- ❌ `CustomMobileControl` - covered by Advanced

**Keep (for reference):**
- ✅ `MobileTogglePositions` - useful demo of positioning options

**LLM Prompt:**
```
Simplify Storybook stories to 4 essential examples that progressively show 
features without repetition.

Stories to create:
1. "Basic Usage" - Zero config, shows defaults
2. "Built-in Header Toggle" - Shows showHeaderToggle=true feature
3. "Custom Toggle Icon" - Shows ag-toggle-icon slot with branded SVG
4. "Advanced Composition" - Shows header-start/end/toggle slots + toggleSidebarState()

Each story should:
- Have a clear, single purpose
- Include a brief description comment
- Be self-contained and copy-pasteable
- Demonstrate one key feature/pattern

Remove these stories:
- WithHeaderFooter (merge into Advanced)
- WithCustomToggleIconAndBuiltInHeader (too similar)
- Collapsed (use controls instead)

Keep MobileTogglePositions as reference.

Update story names, add descriptions, ensure code is clean and minimal.
```

**Acceptance Criteria:**
- ✅ Exactly 4 main stories (+ MobileTogglePositions)
- ✅ Each story has clear, distinct purpose
- ✅ No overlap between stories
- ✅ Stories are ordered by complexity (basic → advanced)
- ✅ Code is clean, minimal, copy-pasteable
- ✅ Each story has descriptive comment

**Testing:**
- Open Storybook
- Verify each story renders correctly
- Check that stories demonstrate different features
- Ensure examples are easy to understand

---

#### **Task 2.2: Create Comprehensive Vitepress Sidebar.md Documentation** ⏱️ 1.5 hours
**Priority:** P1  
**Goal:** Provide copy-paste ready examples for common use cases

**1. Quick Start**
```markdown
## Quick Start

```html
<ag-sidebar>
  <h2 slot="header">My App</h2>
  
  <ag-sidebar-nav>
    <ag-sidebar-nav-item>
      <a href="/">Dashboard</a>
    </ag-sidebar-nav-item>
  </ag-sidebar-nav>
  
  <p slot="footer">© 2025</p>
</ag-sidebar>
```

On mobile (below 1024px), a floating toggle button appears automatically.
On desktop, the sidebar is always visible.
```

**2. Custom Toggle Icon**
```markdown
## Custom Toggle Icon

Customize the floating mobile toggle button icon using the `ag-toggle-icon` slot:

```html
<ag-sidebar>
  <svg slot="ag-toggle-icon" width="18" height="18" viewBox="0 0 24 24">
    <path d="..." fill="currentColor" />
  </svg>
  
  <!-- header and content -->
</ag-sidebar>
```

The icon must be an SVG element. The component applies 18x18 sizing automatically.
```

**3. Header Toggle Button**
```markdown
## Adding a Header Toggle Button

### Option 1: Built-in Toggle (Easiest)

```html
<ag-sidebar show-header-toggle>
  <h2 slot="header">My App</h2>
  <!-- content -->
</ag-sidebar>
```

The component handles the toggle button automatically.

### Option 2: Custom Toggle with Helper Method

```html
<ag-sidebar id="sidebar">
  <div slot="header-start">
    <h2>My App</h2>
  </div>
  <button 
    slot="header-toggle"
    @click=${() => document.getElementById('sidebar').toggleSidebarState()}
  >
    Toggle
  </button>
</ag-sidebar>
```

The `toggleSidebarState()` method intelligently:
- Closes the overlay in mobile mode (when open)
- Toggles collapsed state in desktop mode
```

**4. Composable Header Slots**
```markdown
## Composable Header Slots

Use granular slots to avoid manual layout code:

```html
<ag-sidebar>
  <!-- Left side: logo and title -->
  <div slot="header-start">
    <img src="logo.svg" alt="Logo" />
    <h2>My App</h2>
  </div>
  
  <!-- Right side: action buttons -->
  <button slot="header-end">Settings</button>
  <button slot="header-toggle">Toggle</button>
</ag-sidebar>
```

- `header-start`: Left side, hidden when collapsed
- `header-end`: Right side, always visible
- `header-toggle`: Auto-positioned toggle button
```

**5. Styling Guide**
```markdown
## Styling

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ag-sidebar-width` | `18rem` | Expanded sidebar width |
| `--ag-sidebar-width-collapsed` | `3rem` | Collapsed (rail) width |
| `--ag-sidebar-background` | `#ffffff` | Background color |
| `--ag-sidebar-border` | `#e5e7eb` | Border color |
| `--ag-sidebar-transition-duration` | `200ms` | Animation speed |

### Example: Custom Width

```css
ag-sidebar {
  --ag-sidebar-width: 20rem;
  --ag-sidebar-width-collapsed: 4rem;
}
```
```

**6. Common Patterns**
```markdown
## Common Patterns

### Always Start Collapsed on Desktop

```html
<ag-sidebar collapsed>
  <!-- content -->
</ag-sidebar>
```

### Right-Side Sidebar

```html
<ag-sidebar position="right">
  <!-- content -->
</ag-sidebar>
```

### Custom Breakpoint

```html
<ag-sidebar breakpoint="768">
  <!-- Mobile behavior below 768px -->
</ag-sidebar>
```

### Disable Mobile Toggle

```html
<ag-sidebar show-mobile-toggle="false">
  <!-- Provide your own toggle button -->
</ag-sidebar>
```
```

**NOTE: Above can be integrated into the Vitepress page markdown for Sidebar otherwise following existing conventions for our Vitepress docs in v2/site**

**LLM Prompt:**
```
Create a comprehensive README.md for the Sidebar component with copy-paste
ready examples.

Required sections:
1. Quick Start - Minimal working example (5-10 lines)
2. Custom Toggle Icon - Show ag-toggle-icon slot usage
3. Header Toggle Button - Show both built-in and custom approaches
4. Composable Header Slots - Explain header-start/end/toggle slots
5. Styling Guide - Table of CSS custom properties with defaults
6. Common Patterns - 4-5 quick recipes (collapsed, right-side, etc.)

Each code example should:
- Be complete and runnable
- Use realistic component names (ag-sidebar-nav, etc.)
- Be under 20 lines
- Include brief explanation before/after code

Use markdown formatting with proper syntax highlighting.
Target audience: developers new to the component.
```

**Acceptance Criteria:**
- ✅ All 6 sections present and complete
- ✅ Code examples are tested and work
- ✅ Examples cover 80%+ of common use cases
- ✅ Markdown is well-formatted with code blocks
- ✅ CSS properties table is accurate
- ✅ Explanations are concise (1-2 sentences)

**NOTE: Above should be integrated into the Vitepress page markdown for Sidebar otherwise following existing conventions for our Vitepress docs in v2/site**

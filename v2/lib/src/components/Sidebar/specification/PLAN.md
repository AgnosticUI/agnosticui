# Claude Code Pro Prompts for Sidebar Storybook Stories

## Prompt 1: React Sidebar Stories

````
Create a comprehensive Storybook stories file for the React Sidebar component at:
`v2/playgrounds/react/src/stories/Sidebar.stories.tsx`

Reference the existing React Tabs stories (Tabs.stories.tsx) for the structural pattern and conventions.

Reference the existing Lit Sidebar stories (v2/playgrounds/lit/src/stories/Sidebar.stories.ts) for all the story variations and examples to replicate.

**Component imports:**
```typescript
import { ReactSidebar, type ReactSidebarProps } from 'agnosticui-core/sidebar/react';
import { ReactSidebarNav, ReactSidebarNavItem, ReactSidebarNavSubmenu, ReactSidebarNavPopoverSubmenu } from 'agnosticui-core/sidebar-nav/react';
````

**Additional imports needed:**

- Import lucide-react icons: `Home`, `Folder`, `User`, `Settings`, `Command`, `ChevronRight`
- Import React: `{ useState }` from 'react'
- Import Storybook: `type { Meta, StoryObj }` from '@storybook/react'
- Import fn: `{ fn }` from 'storybook/test'

**Requirements:**

1. **Meta configuration:**

   - Title: `'AgnosticUI React/Sidebar'`
   - Component: `ReactSidebar`
   - Tags: `['autodocs']`
   - ArgTypes: Mirror all props from the Lit stories (open, collapsed, position, ariaLabel, variant, noTransition, width, disableCompactMode, showMobileToggle, mobileTogglePosition, showHeaderToggle)
   - Include proper descriptions for each prop
   - Set sensible defaults in args
   - Add event handler: `onToggle: fn()`, `onCollapse: fn()`

2. **Stories to create** (replicate from Lit stories):

   - `Default` - Uses toggleCollapse() for consistent collapse behavior
   - `WithHeaderActions` - Shows header-end slot with proper overflow handling
   - `WithBuiltInToggle` - Shows the built-in header toggle feature
   - `LegacyHeaderSlot` - Logo as toggle pattern using monolithic header slot
   - `DisableCompactMode` - AI Studio pattern
   - `WithActiveItemTracking` - Demonstrates active state handling with submenus

3. **Navigation content helper:**
   Create a reusable `createNavContent` function that returns JSX for the navigation structure, including:

   - Dashboard (Home icon, active by default)
   - Projects with submenu (Folder icon, with inline submenu and popover submenu for collapsed mode)
   - Team (User icon)
   - Settings with submenu (Settings icon, with inline submenu and popover submenu for collapsed mode)

4. **Submenu toggle handler:**
   Create a `handleSubmenuToggle` function that manages aria-expanded and open attributes for inline submenus.

5. **Styling:**
   Include all necessary inline styles from the Lit stories for:

   - Nav button layouts with icons, labels, and chevrons
   - Collapsed state transitions and visibility
   - Active state styling
   - Popover submenu styling
   - Logo-as-toggle pattern styling

6. **Key patterns to implement:**

   - Both inline submenus (for expanded mode) and popover submenus (for collapsed mode)
   - Proper show/hide logic based on collapsed state
   - Chevron rotation animations
   - Collapsed indicator (small corner arrow) for submenus in rail mode
   - Active item tracking with aria-current="page"

7. **Event handling:**

   - Show proper usage of onToggle and onCollapse callbacks
   - Demonstrate controlled component pattern with useState
   - Show active state management in the WithActiveItemTracking story

8. **Follow React conventions:**
   - Use camelCase for props (showMobileToggle not show-mobile-toggle)
   - Use boolean props correctly (showMobileToggle={true} or just showMobileToggle)
   - Use proper React event handlers (@click becomes onClick)
   - Use className instead of class

Match the quality, completeness, and educational value of the Tabs stories while adapting all patterns from the Lit Sidebar stories.

```

STOP! Once you've created the v2/playgrounds/react/src/stories/Sidebar.stories.tsx prompt ME to build and install and verify.

## React Storybooks Issues

### Critical Issues Identified (2025-12-01)

#### 1. **Submenu Toggle Not Working (Expanded Mode)**
- **Issue**: Clicking on "Projects" or "Settings" nav buttons does NOT open the inline submenu
- **Location**: All stories with submenus (Default, WithHeaderActions, WithActiveItemTracking)
- **Current Behavior**: Nothing happens when clicking the nav-button with `aria-expanded="false"`
- **Expected Behavior**: Submenu should expand and `aria-expanded` should change to "true"
- **Root Cause**: The `handleSubmenuToggle` function is defined but may not be properly bound to React synthetic events, or the submenu component isn't responding to attribute changes
- **Code Reference**: Lines 210-219, 268-277 in Sidebar.stories.tsx

#### 2. **Header Slots Not Rendering**
- **Issue**: The sidebar header shows empty slots - no visible content renders in the header
- **Location**: WithHeaderActions story
- **DevTools Evidence**:
  ```html
  <div part="ag-sidebar-header" class="sidebar-header">
    <!--?lit$600242449$-->
    <slot name="ag-header">
      <div class="header-layout">
        <div class="header-start">
          <slot name="ag-header-start"></slot>  <!-- EMPTY -->
        </div>
        <div class="header-end">
          <slot name="ag-header-end"></slot>  <!-- EMPTY -->
        </div>
        <slot name="ag-header-toggle"></slot>  <!-- EMPTY -->
      </div>
    </slot>
  </div>
  ```
- **Current Behavior**: Header is visible but contains no visible elements
- **Expected Behavior**: Should show logo/title in header-start and settings button in header-end
- **Potential Cause**: React's slot syntax may differ from Lit. In React with web components, slots might need `slot="ag-header-start"` instead of `slot="header-start"`
- **Code Reference**: Lines 381-396 in Sidebar.stories.tsx (WithHeaderActions story)

#### 3. **Built-in Toggle Renders But Missing Header Content**
- **Issue**: WithBuiltInToggle story shows the toggle button, but header-start (logo/title) is empty
- **Location**: WithBuiltInToggle story
- **Current Behavior**: Only the built-in toggle renders, header-start slot is empty
- **Expected Behavior**: Should show "Built-in Toggle" heading in header-start
- **Related To**: Issue #2 (header slots not rendering)
- **Code Reference**: Lines 445-449 in Sidebar.stories.tsx

#### 4. **Collapsed Mode: Missing Collapsed Indicator and Chevron**
- **Issue**: In collapsed (rail) mode, trigger buttons inside ReactPopover are unstyled and missing the collapsed-indicator arrow
- **Location**: All stories when sidebar is collapsed
- **DevTools Evidence**:
  ```html
  <div slot="trigger" aria-expanded="false" aria-haspopup="dialog">
    <button type="button" class="nav-button">
      <svg><!-- Folder icon --></svg>
      <span class="nav-label">Projects</span>
      <span class="collapsed-indicator">  <!-- Present but not visible -->
        <svg viewBox="0 0 8 8">
          <path d="M2 3l2 2 2-2" stroke="currentColor"/>
        </svg>
      </span>
    </button>
  </div>
  ```
- **Current Behavior**:
  - `nav-label` is visible (should be hidden when collapsed)
  - `collapsed-indicator` is present but not visible (should be visible when collapsed)
  - Button appears unstyled
- **Expected Behavior**:
  - `nav-label` should have `opacity: 0` and `display: none`
  - `collapsed-indicator` should be visible
  - Button should show only icon and small corner arrow
- **Root Cause**: CSS selector `ag-sidebar[collapsed] .nav-button .nav-label` may not be working because:
  1. The styles are defined inside `createNavContent()` which is called per-story
  2. React doesn't have access to the web component's `[collapsed]` attribute from within the shadow DOM
  3. The styles might need to be in the web component's CSS, not in the React JSX
- **Code Reference**: Lines 169-182 in Sidebar.stories.tsx (CSS rules)

#### 5. **ReactPopover Structure Mismatch**
- **Issue**: ReactPopover wraps content differently than Lit's `ag-popover` web component
- **Current Implementation**:
  ```tsx
  <ReactPopover>
    <PopoverTrigger>
      <button>...</button>
    </PopoverTrigger>
    <PopoverContent>
      <ReactSidebarNavPopoverSubmenu>...</ReactSidebarNavPopoverSubmenu>
    </PopoverContent>
  </ReactPopover>
  ```
- **Potential Issue**: This creates a wrapper structure that might not integrate properly with the web component's CSS selectors
- **Investigation Needed**: Check if PopoverTrigger adds extra DOM elements that break the CSS cascade

### Recommended Fixes

#### Fix #1: Submenu Toggle Event Binding
The `handleSubmenuToggle` function needs to properly update the React-managed DOM. Consider:
1. Using React state to manage `aria-expanded` instead of direct DOM manipulation
2. Using a ref to access the web component and call its methods
3. Investigating if the web component has a proper API for controlling submenu state

#### Fix #2 & #3: Slot Name Mapping
React's integration with web components might require the `ag-` prefix on all slot names:
```tsx
// Try changing from:
<h2 slot="header-start">My Application</h2>

// To:
<h2 slot="ag-header-start">My Application</h2>
```

#### Fix #4: CSS Scope and Collapsed State
The styling approach needs revision:
1. **Option A**: Move all nav-button styles to the web component's CSS (not in React stories)
2. **Option B**: Use React state to add classes based on sidebar's collapsed state:
   ```tsx
   const [isCollapsed, setIsCollapsed] = useState(false);
   // Listen to collapse events and update state
   // Add classes conditionally: className={`nav-button ${isCollapsed ? 'collapsed' : ''}`}
   ```
3. **Option C**: Use CSS variables or data attributes that React can control

#### Fix #5: ReactPopover Investigation
1. Inspect the actual DOM output of ReactPopover to see the wrapper structure
2. Compare with Lit's `ag-popover` output
3. Adjust CSS selectors or component structure accordingly

### Testing Checklist

Once fixes are applied, verify:
- [ ] Clicking Projects/Settings expands inline submenu in expanded mode
- [ ] Header slots render visible content (logo, title, buttons)
- [ ] Built-in toggle story shows both toggle AND header content
- [ ] Collapsed mode hides nav labels and shows only icons
- [ ] Collapsed mode shows small corner indicator on submenu items
- [ ] Collapsed mode popovers open when clicking icon-only buttons
- [ ] Active state tracking works (WithActiveItemTracking story)
- [ ] Chevron rotates when submenu is expanded

---

## Prompt 2: Vue Sidebar Stories

```

Create a comprehensive Storybook stories file for the Vue Sidebar component at:
`v2/playgrounds/vue/src/stories/Sidebar.stories.tsx`

Reference the existing Vue Tabs stories (Tabs.stories.ts) for the structural pattern and Vue-specific conventions.

Reference the existing Lit Sidebar stories (v2/playgrounds/lit/src/stories/Sidebar.stories.ts) for all the story variations and examples to replicate.

**Component imports:**

```typescript
import VueSidebar from "agnosticui-core/sidebar/vue";
import {
  VueSidebarNav,
  VueSidebarNavItem,
  VueSidebarNavSubmenu,
  VueSidebarNavPopoverSubmenu,
} from "agnosticui-core/sidebar-nav/vue";
import type { VueSidebarProps } from "agnosticui-core/sidebar/vue";
```

**Additional imports needed:**

- Import Vue composition API: `{ ref }` from 'vue'
- Import lucide-vue-next icons: Import the createElement function and specific icons (Home, Folder, User, Settings, Command, ChevronRight)
- Import Storybook: `type { Meta, StoryObj }` from '@storybook/vue3-vite'
- Import fn: `{ fn }` from 'storybook/test'

**Requirements:**

1. **Meta configuration:**

   - Title: `'AgnosticUI Vue/Sidebar'`
   - Component: `VueSidebar as any`
   - Tags: `['autodocs']`
   - ArgTypes: Mirror all props from the Lit stories with proper Vue prop names (kebab-case in templates, camelCase in types)
   - Include proper descriptions for each prop
   - Set sensible defaults in args
   - Add event handlers: `onToggle: fn()`, `onCollapse: fn()`

2. **Stories to create** (replicate from Lit stories):

   - `Default` - Uses toggleCollapse() for consistent collapse behavior
   - `WithHeaderActions` - Shows header-end slot with proper overflow handling
   - `WithBuiltInToggle` - Shows the built-in header toggle feature
   - `LegacyHeaderSlot` - Logo as toggle pattern using monolithic header slot
   - `DisableCompactMode` - AI Studio pattern
   - `WithActiveItemTracking` - Demonstrates active state handling with submenus

3. **Vue template patterns:**
   Each story should return an object with:

   - `components: { VueSidebar, VueSidebarNav, VueSidebarNavItem, VueSidebarNavSubmenu, VueSidebarNavPopoverSubmenu }`
   - `setup()` function that returns reactive refs and methods
   - `template` string with proper Vue syntax

4. **Navigation content:**
   Create the navigation structure in each story's template, including:

   - Dashboard (Home icon, active by default)
   - Projects with submenu (Folder icon, with inline submenu and popover for collapsed)
   - Team (User icon)
   - Settings with submenu (Settings icon, with inline submenu and popover for collapsed)

5. **Event handling in Vue:**

   - Use `@ag-sidebar-toggle` for toggle events
   - Use `@ag-sidebar-collapse` for collapse events
   - Use `@click` for button handlers
   - Demonstrate v-model patterns where appropriate (though sidebar doesn't use v-model, show reactive state management)

6. **Styling:**
   Use `<style>` tag within the template literal or separate style string, including:

   - Nav button layouts with icons, labels, and chevrons
   - Collapsed state transitions and visibility
   - Active state styling
   - Popover submenu styling
   - Logo-as-toggle pattern styling

7. **Key patterns to implement:**

   - Both inline submenus (for expanded mode) and popover submenus (for collapsed mode)
   - Proper show/hide logic based on collapsed state using v-show or CSS
   - Chevron rotation animations
   - Collapsed indicator for submenus in rail mode
   - Active item tracking with aria-current="page"
   - Reactive state management with ref()

8. **Vue-specific conventions:**

   - Use kebab-case for props in templates (show-mobile-toggle not showMobileToggle)
   - Use v-bind shorthand (`:open="open"` or just `:open="open"`)
   - Use @ shorthand for events (@click not v-on:click)
   - Use proper ref() for reactive state
   - Access DOM elements using template refs where needed

9. **WithActiveItemTracking story specifics:**
   - Create reactive refs for activeRoute and any state
   - Implement handleNavClick function in setup()
   - Implement handleSubmenuToggle function in setup()
   - Show how to update both top-level nav buttons and sublinks
   - Use querySelector to find elements and update classes/aria attributes

Match the quality, completeness, and educational value of the Vue Tabs stories while adapting all patterns from the Lit Sidebar stories.

STOP! Once you've created the v2/playgrounds/vue/src/stories/Sidebar.stories.ts prompt ME to build and install and verify.

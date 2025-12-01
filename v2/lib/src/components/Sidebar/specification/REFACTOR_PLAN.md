# Sidebar Refactoring Plan

## Leverage new .nav-sublink-popover SMACSS modifier.

- If we create a <ag-sidebar-nav-popover-submenu> (or similar) we could share
  styles between v2/lib/src/components/SidebarNav/core/\_SidebarNavSubmenu.ts and
  v2/lib/src/components/SidebarNav/core/\_SidebarNavPopoverSubmenu.ts as follows.

- We could tease out these existing styles into v2/lib/src/styles/nav-sublink-styles.ts:

```ts
      ::slotted(.nav-sublink) {
        display: block;
        padding: var(--ag-space-2);
        border-radius: var(--ag-radius-sm);
        text-decoration: none;
        color: var(--ag-text-primary);
        font-size: var(--ag-font-size-sm);
        transition: background 0.15s;
      }
      ::slotted(.nav-sublink:hover) {
        background: var(--ag-background-secondary);
      }
      ::slotted(.nav-sublink.active) {
        background: var(--ag-primary-background);
        color: var(--ag-primary-text);
        font-weight: 500;
      }
```

- Simalarly to how we already do in v2/lib/src/styles/nav-button-styles.ts and add in our web components like:
  `${NAV_SUBLINK_STYLES}` in both \_SidebarNavSubmenu.ts and \_SidebarNavPopoverSubmenu.

  Then, in \_SidebarNavPopoverSubmenu.ts we could additionally use
  `${NAV_SUBLINK_POPOVER_STYLES}` which would allow use to port styles over from the v2/playgrounds/lit/src/stories/Sidebar.stories.ts that look like:

```ts
/* THe following would get moved to NAV_SUBLINK_POPOVER_STYLES */
      .nav-sublink-popover { /* <-- in NAV_SUBLINK_POPOVER_STYLES might need to become ::slotted(.nav-sublink-popover) */
        display: block;
        padding: var(--ag-space-2) var(--ag-space-3);
        border-radius: var(--ag-radius-sm);
        text-decoration: none;
        color: var(--ag-text-primary);
        font-size: var(--ag-font-size-sm);
        transition: background 0.15s;
        white-space: nowrap;
      }

      .nav-sublink-popover:hover {
        background: var(--ag-background-secondary);
      }

      .nav-sublink-popover.active {
        background: var(--ag-primary-background);
        color: var(--ag-primary-text);
        font-weight: 500;
      }
```

So above chunk would then be available to be imported and used like ${NAV_SUBLINK_POPOVER_STYLES}. Again, I believe we'd need to convert these to use ::slotted convention.

**Context:**
Here's the diff of last refactoring which shows the .nav-sublink-popover now available for above idea:

```shell
 const createNavContent = () => {
   // Define the toggle handler outside the template for better debugging
   const handleSubmenuToggle = (e: Event) => {
@@ -131,7 +128,6 @@ const createNavContent = () => {
         text-overflow: ellipsis;
       }
       .nav-button .chevron {
-        margin-left: auto;
         transition: transform var(--ag-fx-duration-md);
       }
       .nav-button[aria-expanded="true"] .chevron ag-icon {
@@ -218,7 +214,7 @@ const createNavContent = () => {
         padding: var(--ag-space-1);
       }

-      .popover-submenu-content .nav-sublink {
+      .nav-sublink-popover {
         display: block;
         padding: var(--ag-space-2) var(--ag-space-3);
         border-radius: var(--ag-radius-sm);
@@ -229,11 +225,11 @@ const createNavContent = () => {
         white-space: nowrap;
       }

-      .popover-submenu-content .nav-sublink:hover {
+      .nav-sublink-popover:hover {
         background: var(--ag-background-secondary);
       }

-      .popover-submenu-content .nav-sublink.active {
+      .nav-sublink-popover.active {
         background: var(--ag-primary-background);
         color: var(--ag-primary-text);
         font-weight: 500;
@@ -295,9 +291,9 @@ const createNavContent = () => {
           </button>

           <div slot="content" class="popover-submenu-content">
-            <a href="#" class="nav-sublink">Project Alpha</a>
-            <a href="#" class="nav-sublink">Project Beta</a>
-            <a href="#" class="nav-sublink">Project Gamma</a>
+            <a href="#" class="nav-sublink nav-sublink-popover">Project Alpha</a>
+            <a href="#" class="nav-sublink nav-sublink-popover">Project Beta</a>
+            <a href="#" class="nav-sublink nav-sublink-popover">Project Gamma</a>
           </div>
         </ag-popover>

@@ -356,7 +352,6 @@ const createNavContent = () => {
           </div>
         </ag-popover>

-        <!-- Inline submenu for expanded mode -->
         <ag-sidebar-nav-submenu>
           <a class="nav-sublink" href="#">Profile</a></div>
           <a class="nav-sublink" href="#">Billing</a></div>
@@ -902,9 +897,9 @@ export const WithActiveItemTracking: Story = {
                 </button>

                 <div slot="content" class="popover-submenu-content">
-                  <a href="#" class="nav-sublink" data-route="/settings/profile" @click=${handleNavClick("/settings/profile")}>Profile</a>
-                  <a href="#" class="nav-sublink" data-route="/settings/billing" @click=${handleNavClick("/settings/billing")}>Billing</a>
-                  <a href="#" class="nav-sublink" data-route="/settings/security" @click=${handleNavClick("/settings/security")}>Security</a>
+                  <a href="#" class="nav-sublink nav-sublink-popover" data-route="/settings/profile" @click=${handleNavClick("/settings/profile")}>Profile</a>
+                  <a href="#" class="nav-sublink nav-sublink-popover" data-route="/settings/billing" @click=${handleNavClick("/settings/billing")}>Billing</a>
+                  <a href="#" class="nav-sublink nav-sublink-popover" data-route="/settings/security" @click=${handleNavClick("/settings/security")}>Security</a>
                 </div>
               </ag-popover>

@@ -1042,7 +1037,7 @@ export const WithActiveItemTracking: Story = {
         }

         /* Ensure popover content is styled correctly */
-        .popover-submenu-content .nav-sublink {
+        .nav-sublink-popover {
           display: block;
           padding: var(--ag-space-2) var(--ag-space-3);
           border-radius: var(--ag-radius-sm);
@@ -1053,12 +1048,12 @@ export const WithActiveItemTracking: Story = {
           white-space: nowrap;
         }

-        .popover-submenu-content .nav-sublink:hover {
+        .nav-sublink-popover:hover {
           background: var(--ag-background-secondary);
         }

         /* Re-apply active state for popover content specifically if needed due to specificity */
-        .popover-submenu-content .nav-sublink.active {
+        .nav-sublink-popover.active {
           background: var(--ag-primary-background);
           color: var(--ag-primary-text);
         }
```

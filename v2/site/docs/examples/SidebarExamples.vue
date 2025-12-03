<template>
  <section>
    <div class="mbe4">
      <h3>Default Sidebar with Navigation</h3>
      <p>
        Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states.
        Click the header toggle to collapse into rail mode (icon-only).
      </p>
    </div>
    <div class="mbe6">
      <div style="display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="sidebar1.isOpen"
          :collapsed="sidebar1.isCollapsed"
          :show-mobile-toggle="true"
          @update:open="sidebar1.isOpen = $event"
          @update:collapsed="sidebar1.isCollapsed = $event"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            Dashboard
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar1Collapse"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="M9 3v18"/>
            </svg>
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button type="button" class="nav-button active" aria-current="page">
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button nav-button-expanded"
                aria-expanded="false"
                @click="handleSubmenuToggle"
              >
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
                <span class="chevron"><ChevronRight :size="16" /></span>
              </button>

              <!-- Popover for COLLAPSED mode -->
              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
              >
                <button slot="trigger" type="button" class="nav-button">
                  <Folder :size="20" />
                  <span class="nav-label">Projects</span>
                  <span class="collapsed-indicator">
                    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                    </svg>
                  </span>
                </button>
                <VueSidebarNavPopoverSubmenu slot="content" class="popover-submenu">
                  <a href="#" class="nav-sublink" @click.prevent>Project Alpha</a>
                  <a href="#" class="nav-sublink" @click.prevent>Project Beta</a>
                  <a href="#" class="nav-sublink" @click.prevent>Project Gamma</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <!-- Inline submenu for expanded mode -->
              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#" @click.prevent>Project Alpha</a>
                <a class="nav-sublink" href="#" @click.prevent>Project Beta</a>
                <a class="nav-sublink" href="#" @click.prevent>Project Gamma</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button nav-button-expanded"
                aria-expanded="false"
                @click="handleSubmenuToggle"
              >
                <Settings :size="20" />
                <span class="nav-label">Settings</span>
                <span class="chevron"><ChevronRight :size="16" /></span>
              </button>

              <!-- Popover for COLLAPSED mode -->
              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
              >
                <button slot="trigger" type="button" class="nav-button">
                  <Settings :size="20" />
                  <span class="nav-label">Settings</span>
                  <span class="collapsed-indicator">
                    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                    </svg>
                  </span>
                </button>
                <VueSidebarNavPopoverSubmenu slot="content" class="popover-submenu">
                  <a href="#" class="nav-sublink" @click.prevent>Profile</a>
                  <a href="#" class="nav-sublink" @click.prevent>Billing</a>
                  <a href="#" class="nav-sublink" @click.prevent>Security</a>
                  <a href="#" class="nav-sublink" @click.prevent>Preferences</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#" @click.prevent>Profile</a>
                <a class="nav-sublink" href="#" @click.prevent>Billing</a>
                <a class="nav-sublink" href="#" @click.prevent>Security</a>
                <a class="nav-sublink" href="#" @click.prevent>Preferences</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Main Content</h1>
          <p>Click the header toggle to collapse the sidebar into rail mode.</p>
          <p>When collapsed, hover over items with submenus to see them in popovers.</p>
        </main>
      </div>
    </div>

    <div class="mbe4">
      <h3>Sidebar with Header Actions</h3>
      <p>
        Demonstrates using <code>ag-header-start</code>, <code>ag-header-end</code>, and <code>ag-header-toggle</code> slots
        for a composable header layout with action buttons.
      </p>
    </div>
    <div class="mbe6">
      <div style="display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="sidebar2.isOpen"
          :collapsed="sidebar2.isCollapsed"
          :show-mobile-toggle="true"
          @update:open="sidebar2.isOpen = $event"
          @update:collapsed="sidebar2.isCollapsed = $event"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            My Application
          </h2>
          <button
            type="button"
            slot="ag-header-end"
            @click="() => {}"
            style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; color: inherit; border-radius: 0.25rem;"
            aria-label="Settings"
            title="Settings"
          >
            <Settings :size="20" />
          </button>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar2Collapse"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="M9 3v18"/>
            </svg>
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button type="button" class="nav-button active" aria-current="page">
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Header Actions Pattern</h1>
          <p>The header includes a settings button in the <code>ag-header-end</code> slot.</p>
          <p>This allows for flexible header layouts with multiple action buttons.</p>
        </main>
      </div>
    </div>

    <div class="mbe4">
      <h3>Sidebar with Built-in Toggle</h3>
      <p>
        Using <code>show-header-toggle</code> adds a built-in collapse button automatically.
      </p>
    </div>
    <div class="mbe6">
      <div style="display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="sidebar3.isOpen"
          :collapsed="sidebar3.isCollapsed"
          :show-header-toggle="true"
          :show-mobile-toggle="true"
          @update:open="sidebar3.isOpen = $event"
          @update:collapsed="sidebar3.isCollapsed = $event"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            Built-in Toggle
          </h2>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button type="button" class="nav-button active" aria-current="page">
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Built-in Header Toggle</h1>
          <p>No need to provide a custom toggle button—the sidebar includes one automatically.</p>
        </main>
      </div>
    </div>

    <div class="mbe4">
      <h3>Disable Compact Mode</h3>
      <p>
        With <code>disable-compact-mode</code>, the sidebar has no intermediate collapsed/rail state.
        It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio.
      </p>
    </div>
    <div class="mbe6">
      <div style="display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="sidebar4.isOpen"
          :disable-compact-mode="true"
          :show-mobile-toggle="true"
          @update:open="sidebar4.isOpen = $event"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            AI Studio
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar4Responsive"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <Command :size="20" />
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button type="button" class="nav-button active" aria-current="page">
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="nav-button">
                <Settings :size="20" />
                <span class="nav-label">Settings</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Disable Compact Mode</h1>
          <p>Use the mobile toggle button to show/hide the sidebar.</p>
          <p>Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.</p>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import VueSidebar from "agnosticui-core/sidebar/vue";
import {
  VueSidebarNav,
  VueSidebarNavItem,
  VueSidebarNavSubmenu,
  VueSidebarNavPopoverSubmenu,
} from "agnosticui-core/sidebar-nav/vue";
import { VuePopover } from "agnosticui-core/popover/vue";
import {
  Home,
  Folder,
  User,
  Settings,
  ChevronRight,
  Command,
} from "lucide-vue-next";

export default {
  name: "SidebarExamples",
  components: {
    VueSidebar,
    VueSidebarNav,
    VueSidebarNavItem,
    VueSidebarNavSubmenu,
    VueSidebarNavPopoverSubmenu,
    VuePopover,
    Home,
    Folder,
    User,
    Settings,
    ChevronRight,
    Command,
  },
  data() {
    return {
      sidebar1: {
        isOpen: true,
        isCollapsed: false,
      },
      sidebar2: {
        isOpen: true,
        isCollapsed: false,
      },
      sidebar3: {
        isOpen: true,
        isCollapsed: false,
      },
      sidebar4: {
        isOpen: true,
      },
    };
  },
  watch: {
    'sidebar2.isCollapsed'(newVal) {
      console.log('[Sidebar 2] Collapsed state changed to:', newVal);
      setTimeout(() => {
        const sidebar = document.querySelectorAll('ag-sidebar')[1]; // Second sidebar
        if (!sidebar) return;

        const header = sidebar.shadowRoot?.querySelector('.sidebar-header') || sidebar.querySelector('.sidebar-header');
        const headerLayout = sidebar.shadowRoot?.querySelector('.header-layout') || sidebar.querySelector('.header-layout');
        const h2 = sidebar.querySelector('h2[slot="ag-header-start"]');

        console.log('[Sidebar 2 After Toggle] Collapsed attr:', sidebar.hasAttribute('collapsed'));
        console.log('[Sidebar 2 After Toggle] Header height:', header?.offsetHeight);
        console.log('[Sidebar 2 After Toggle] Header display:', header ? window.getComputedStyle(header).display : null);
        console.log('[Sidebar 2 After Toggle] Header flexGrow:', header ? window.getComputedStyle(header).flexGrow : null);
        console.log('[Sidebar 2 After Toggle] Header flexShrink:', header ? window.getComputedStyle(header).flexShrink : null);
        console.log('[Sidebar 2 After Toggle] Header flexBasis:', header ? window.getComputedStyle(header).flexBasis : null);
        console.log('[Sidebar 2 After Toggle] Header layout height:', headerLayout?.offsetHeight);
        console.log('[Sidebar 2 After Toggle] H2 height:', h2?.offsetHeight);
        console.log('[Sidebar 2 After Toggle] H2 marginTop:', h2 ? window.getComputedStyle(h2).marginTop : null);
        console.log('[Sidebar 2 After Toggle] H2 marginBottom:', h2 ? window.getComputedStyle(h2).marginBottom : null);
      }, 100);
    }
  },
  mounted() {
    // Debug sidebar header heights
    setTimeout(() => {
      const sidebars = document.querySelectorAll('ag-sidebar');
      sidebars.forEach((sidebar, index) => {
        const header = sidebar.shadowRoot?.querySelector('.sidebar-header') || sidebar.querySelector('.sidebar-header');
        const headerLayout = sidebar.shadowRoot?.querySelector('.header-layout') || sidebar.querySelector('.header-layout');
        const h2 = sidebar.querySelector('h2[slot="ag-header-start"]');

        console.log(`[Sidebar ${index}] Header:`, header);
        console.log(`[Sidebar ${index}] Header computed styles:`, header ? window.getComputedStyle(header) : null);
        console.log(`[Sidebar ${index}] Header height:`, header?.offsetHeight);
        console.log(`[Sidebar ${index}] Header layout:`, headerLayout);
        console.log(`[Sidebar ${index}] Header layout computed:`, headerLayout ? window.getComputedStyle(headerLayout) : null);
        console.log(`[Sidebar ${index}] H2:`, h2);
        console.log(`[Sidebar ${index}] H2 computed:`, h2 ? window.getComputedStyle(h2) : null);
        console.log(`[Sidebar ${index}] H2 height:`, h2?.offsetHeight);
      });
    }, 500);

    // Inject nav button styles
    const styleId = 'sidebar-nav-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* Overrides VitePress theme - resets .vp-doc h2 styles */
        ag-sidebar h2[slot="ag-header-start"] {
          border-top: none !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          letter-spacing: normal !important;
          line-height: normal !important;
          overflow-wrap: normal !important;
        }

        /* Overrides VitePress theme - resets .vp-doc a styles */
        ag-sidebar .nav-sublink {
          font-weight: normal !important;
          color: inherit !important;
          text-decoration: none !important;
          text-underline-offset: unset !important;
        }

        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--ag-space-3);
          position: relative;
          padding: var(--ag-space-2) var(--ag-space-3);
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-radius: var(--ag-border-radius);
          transition: background var(--ag-fx-duration-sm);
          color: inherit;
        }

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button:hover {
          background: var(--ag-background-secondary);
        }

        .nav-button.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        .nav-button .chevron {
          transition: transform var(--ag-fx-duration-md);
          margin-left: auto;
        }

        .nav-button[aria-expanded="true"] .chevron {
          transform: rotate(90deg);
        }

        .nav-button .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -3px;
          right: 0;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
        }

        .nav-button .collapsed-indicator svg {
          color: var(--ag-text-muted);
          transform: rotate(315deg);
        }

        ag-sidebar[collapsed] .nav-button {
          padding-inline: var(--ag-space-2);
        }

        .nav-button .nav-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-button .nav-label,
        .nav-button .chevron {
          transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
          white-space: nowrap;
        }

        ag-sidebar[collapsed] .nav-button .nav-label,
        ag-sidebar[collapsed] .nav-button .chevron {
          opacity: 0;
          pointer-events: none;
          display: none;
        }

        ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
          display: block;
        }

        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }

        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
        ag-sidebar:not([collapsed]) ag-popover,
        ag-sidebar[collapsed] .nav-button-expanded,
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }

        .nav-sublink {
          display: block;
          padding: var(--ag-space-2) var(--ag-space-3);
          color: inherit;
          text-decoration: none;
          border-radius: var(--ag-border-radius);
          transition: background var(--ag-fx-duration-sm);
        }

        .nav-sublink:hover {
          background: var(--ag-background-secondary);
        }
      `;
      document.head.appendChild(style);
    }
  },
  methods: {
    toggleSidebar1Collapse(e) {
      const sidebar = e.target.closest('ag-sidebar');
      if (sidebar && sidebar.toggleCollapse) {
        sidebar.toggleCollapse();
      }
    },
    toggleSidebar2Collapse(e) {
      const sidebar = e.target.closest('ag-sidebar');
      if (sidebar && sidebar.toggleCollapse) {
        sidebar.toggleCollapse();
      }
    },
    toggleSidebar4Responsive(e) {
      const sidebar = e.target.closest('ag-sidebar');
      if (sidebar && sidebar.toggleResponsive) {
        sidebar.toggleResponsive();
      }
    },
    handleSubmenuToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      const button = e.currentTarget;
      const navItem = button.closest("ag-sidebar-nav-item");
      const submenu = navItem?.querySelector("ag-sidebar-nav-submenu");

      if (!submenu) return;

      const currentAriaExpanded = button.getAttribute("aria-expanded");
      const isCurrentlyExpanded = currentAriaExpanded === "true";

      if (isCurrentlyExpanded) {
        button.setAttribute("aria-expanded", "false");
        submenu.removeAttribute("open");
      } else {
        button.setAttribute("aria-expanded", "true");
        submenu.setAttribute("open", "");
      }
    },
  },
};
</script>

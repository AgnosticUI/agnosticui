import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import { ref, onMounted, h } from "vue";
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
  Command,
  ChevronRight,
} from "lucide-vue-next";

// Shared styles for navigation buttons
const navButtonStyles = `
  .nav-button {
    display: flex;
    align-items: center;
    gap: var(--ag-space-3);
    position: relative;
  }

  .nav-button svg {
    flex-shrink: 0;
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
`;

// Icon component helper for rendering Lucide icons
const PanelIcon = {
  template: `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/>
      <path d="M9 3v18"/>
    </svg>
  `,
};

const meta = {
  title: "AgnosticUI Vue/Sidebar",
  component: VueSidebar as any,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls sidebar visibility on mobile",
    },
    collapsed: {
      control: "boolean",
      description: "Controls collapsed/rail state (icon-only) on desktop",
    },
    position: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the sidebar",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for the sidebar",
    },
    variant: {
      control: "select",
      options: ["default", "bordered", "elevated"],
      description: "Visual variant of the sidebar",
    },
    noTransition: {
      control: "boolean",
      description: "Disable transitions",
    },
    width: {
      control: "text",
      description: "Custom width for the sidebar",
    },
    disableCompactMode: {
      control: "boolean",
      description:
        "Disable compact/rail mode (sidebar is either full-width or hidden)",
    },
    showMobileToggle: {
      control: "boolean",
      description: "Show the mobile toggle button",
    },
    mobileTogglePosition: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
      description: "Position of the mobile toggle button",
    },
    showHeaderToggle: {
      control: "boolean",
      description: "Show the built-in header toggle button",
    },
  },
  args: {
    open: false,
    collapsed: false,
    position: "left",
    ariaLabel: "Navigation",
    variant: "default",
    noTransition: false,
    disableCompactMode: false,
    showMobileToggle: true,
    mobileTogglePosition: "top-left",
    showHeaderToggle: false,
    onToggle: fn(),
    onCollapse: fn(),
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Sidebar with navigation items and submenus
 */
export const Default: Story = {
  render: (args) => ({
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
    },
    setup() {
      // Inject styles on mount
      onMounted(() => {
        const styleId = 'sidebar-nav-styles';
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = navButtonStyles;
          document.head.appendChild(style);
        }
      });

      const handleSubmenuToggle = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        const button = e.currentTarget as HTMLElement;
        const navItem = button.closest("ag-sidebar-nav-item");
        const submenu = navItem?.querySelector(
          "ag-sidebar-nav-submenu"
        ) as HTMLElement;

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
      };

      return { args, handleSubmenuToggle, PanelIcon };
    },
    template: `
      <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="args.open"
          :collapsed="args.collapsed"
          :show-mobile-toggle="args.showMobileToggle"
          @update:open="args.onToggle"
          @update:collapsed="args.onCollapse"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            Dashboard
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="(e) => {
              const sidebar = e.target.closest('ag-sidebar');
              if (sidebar && sidebar.toggleCollapse) {
                sidebar.toggleCollapse();
              }
            }"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <component :is="PanelIcon" />
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
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Project Alpha</a>
                  <a href="#" class="nav-sublink">Project Beta</a>
                  <a href="#" class="nav-sublink">Project Gamma</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <!-- Inline submenu for expanded mode -->
              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Project Alpha</a>
                <a class="nav-sublink" href="#">Project Beta</a>
                <a class="nav-sublink" href="#">Project Gamma</a>
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
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Profile</a>
                  <a href="#" class="nav-sublink">Billing</a>
                  <a href="#" class="nav-sublink">Security</a>
                  <a href="#" class="nav-sublink">Preferences</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Profile</a>
                <a class="nav-sublink" href="#">Billing</a>
                <a class="nav-sublink" href="#">Security</a>
                <a class="nav-sublink" href="#">Preferences</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Default Sidebar</h1>
          <p>Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states.</p>
          <ul>
            <li><strong>Collapsed mode:</strong> Click the header toggle to collapse into rail mode (icon-only)</li>
            <li><strong>Submenu navigation:</strong> Click "Projects" or "Settings" to expand inline submenus</li>
            <li><strong>Rail mode popovers:</strong> When collapsed, hover over submenu items to access via popover</li>
          </ul>
          <div style="background: #dbeafe; padding: 1rem; border-radius: 0.375rem; border: 1px solid #3b82f6; margin-top: 1rem;">
            <strong>Try it:</strong> Collapse the sidebar and hover over Projects or Settings to access their submenus via popover!
          </div>
        </main>
      </div>
    `,
  }),
};

/**
 * Sidebar with header actions (settings button in header-end)
 */
export const WithHeaderActions: Story = {
  render: (args) => ({
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
    },
    setup() {
      // Inject styles on mount
      onMounted(() => {
        const styleId = 'sidebar-nav-styles';
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = navButtonStyles;
          document.head.appendChild(style);
        }
      });

      const handleSubmenuToggle = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        const button = e.currentTarget as HTMLElement;
        const navItem = button.closest("ag-sidebar-nav-item");
        const submenu = navItem?.querySelector(
          "ag-sidebar-nav-submenu"
        ) as HTMLElement;

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
      };

      return { args, handleSubmenuToggle, PanelIcon };
    },
    template: `
      <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="args.open"
          :collapsed="args.collapsed"
          :show-mobile-toggle="args.showMobileToggle"
          @update:open="args.onToggle"
          @update:collapsed="args.onCollapse"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            My Application
          </h2>
          <button
            type="button"
            slot="ag-header-end"
            @click="() => alert('Settings clicked')"
            style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; color: inherit; border-radius: 0.25rem;"
            aria-label="Settings"
            title="Settings"
          >
            <Settings :size="20" />
          </button>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="(e) => {
              const sidebar = e.target.closest('ag-sidebar');
              if (sidebar && sidebar.toggleCollapse) {
                sidebar.toggleCollapse();
              }
            }"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <component :is="PanelIcon" />
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

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Project Alpha</a>
                  <a href="#" class="nav-sublink">Project Beta</a>
                  <a href="#" class="nav-sublink">Project Gamma</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Project Alpha</a>
                <a class="nav-sublink" href="#">Project Beta</a>
                <a class="nav-sublink" href="#">Project Gamma</a>
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

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Profile</a>
                  <a href="#" class="nav-sublink">Billing</a>
                  <a href="#" class="nav-sublink">Security</a>
                  <a href="#" class="nav-sublink">Preferences</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Profile</a>
                <a class="nav-sublink" href="#">Billing</a>
                <a class="nav-sublink" href="#">Security</a>
                <a class="nav-sublink" href="#">Preferences</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Header Actions Pattern</h1>
          <p>
            Demonstrates using <code>ag-header-start</code>, <code>ag-header-end</code>, and <code>ag-header-toggle</code> slots
            for a composable header layout.
          </p>
          <ul>
            <li><strong>ag-header-start:</strong> Logo or title (left-aligned)</li>
            <li><strong>ag-header-end:</strong> Action buttons like settings (right-aligned before toggle)</li>
            <li><strong>ag-header-toggle:</strong> Custom collapse toggle (always rightmost)</li>
          </ul>
          <p>The header layout automatically handles overflow and proper spacing between elements.</p>
        </main>
      </div>
    `,
  }),
};

/**
 * Sidebar with built-in header toggle
 */
export const WithBuiltInToggle: Story = {
  render: (args) => ({
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
    },
    setup() {
      const handleSubmenuToggle = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        const button = e.currentTarget as HTMLElement;
        const navItem = button.closest("ag-sidebar-nav-item");
        const submenu = navItem?.querySelector(
          "ag-sidebar-nav-submenu"
        ) as HTMLElement;

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
      };

      return { args, handleSubmenuToggle };
    },
    template: `
      <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="args.open"
          :collapsed="args.collapsed"
          :show-header-toggle="true"
          :show-mobile-toggle="args.showMobileToggle"
          @update:open="args.onToggle"
          @update:collapsed="args.onCollapse"
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

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Project Alpha</a>
                  <a href="#" class="nav-sublink">Project Beta</a>
                  <a href="#" class="nav-sublink">Project Gamma</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Project Alpha</a>
                <a class="nav-sublink" href="#">Project Beta</a>
                <a class="nav-sublink" href="#">Project Gamma</a>
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

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Profile</a>
                  <a href="#" class="nav-sublink">Billing</a>
                  <a href="#" class="nav-sublink">Security</a>
                  <a href="#" class="nav-sublink">Preferences</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Profile</a>
                <a class="nav-sublink" href="#">Billing</a>
                <a class="nav-sublink" href="#">Security</a>
                <a class="nav-sublink" href="#">Preferences</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Built-in Header Toggle</h1>
          <p>Using <code>show-header-toggle</code> adds a built-in collapse button automatically.</p>
          <p>The built-in toggle always uses <code>toggleCollapse()</code> internally for consistent behavior.</p>
          <p>
            <strong>Note:</strong> Built-in toggle works correctly - it always toggles collapsed state. Hover over submenu items when collapsed!
          </p>
        </main>
      </div>
    `,
  }),
};

/**
 * Legacy monolithic header slot - Logo as Toggle Pattern
 */
export const LegacyHeaderSlot: Story = {
  render: (args) => ({
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
    setup() {
      const handleSubmenuToggle = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        const button = e.currentTarget as HTMLElement;
        const navItem = button.closest("ag-sidebar-nav-item");
        const submenu = navItem?.querySelector(
          "ag-sidebar-nav-submenu"
        ) as HTMLElement;

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
      };

      return { args, handleSubmenuToggle };
    },
    template: `
      <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="args.open"
          :collapsed="args.collapsed"
          :show-mobile-toggle="args.showMobileToggle"
          @update:open="args.onToggle"
          @update:collapsed="args.onCollapse"
        >
          <button
            slot="ag-header"
            type="button"
            class="logo-toggle"
            @click="(e) => {
              const sidebar = e.target.closest('ag-sidebar');
              if (sidebar && sidebar.toggleCollapse) {
                sidebar.toggleCollapse();
              }
            }"
            aria-label="Toggle sidebar"
          >
            <Command :size="28" />
            <span class="logo-text">Acme Corp</span>
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

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Project Alpha</a>
                  <a href="#" class="nav-sublink">Project Beta</a>
                  <a href="#" class="nav-sublink">Project Gamma</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Project Alpha</a>
                <a class="nav-sublink" href="#">Project Beta</a>
                <a class="nav-sublink" href="#">Project Gamma</a>
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

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                :show-header="false"
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
                  <a href="#" class="nav-sublink">Profile</a>
                  <a href="#" class="nav-sublink">Billing</a>
                  <a href="#" class="nav-sublink">Security</a>
                  <a href="#" class="nav-sublink">Preferences</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#">Profile</a>
                <a class="nav-sublink" href="#">Billing</a>
                <a class="nav-sublink" href="#">Security</a>
                <a class="nav-sublink" href="#">Preferences</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Logo as Toggle Pattern</h1>
          <p>
            Uses the monolithic <code>ag-header</code> slot for full control. The entire header acts as a clickable
            toggle button.
          </p>
          <p>
            This pattern is common in applications where the logo itself is the primary interaction point for
            collapsing/expanding the sidebar.
          </p>
          <ul>
            <li>Click the logo/header area to collapse/expand</li>
            <li>Text fades out smoothly when collapsed</li>
            <li>Icon remains visible in rail mode</li>
          </ul>
        </main>
      </div>
    `,
  }),
};

/**
 * Disable Compact Mode - AI Studio Pattern
 */
export const DisableCompactMode: Story = {
  render: (args) => ({
    components: {
      VueSidebar,
      VueSidebarNav,
      VueSidebarNavItem,
      Home,
      Folder,
      User,
      Settings,
      Command,
    },
    setup() {
      // Inject styles on mount
      onMounted(() => {
        const styleId = 'sidebar-nav-styles';
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = navButtonStyles;
          document.head.appendChild(style);
        }
      });

      const handleToggle = (e: Event) => {
        const sidebar = (e.target as HTMLElement).closest('ag-sidebar');
        if (sidebar && 'toggleResponsive' in sidebar) {
          (sidebar as { toggleResponsive: () => void }).toggleResponsive();
        }
      };

      return { args, PanelIcon, handleToggle };
    },
    template: `
      <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="args.open"
          disable-compact-mode
          :show-mobile-toggle="true"
          @update:open="args.onToggle"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            AI Studio
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="handleToggle"
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

        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Disable Compact Mode</h1>
          <p>
            With <code>disable-compact-mode</code>, the sidebar has no intermediate collapsed/rail state.
          </p>
          <p>It's either fully open (expanded) or completely hidden.</p>
          <p>This pattern is used in applications like Claude AI Studio where:</p>
          <ul>
            <li>The sidebar is toggled entirely on/off with the mobile toggle</li>
            <li>There's no rail/icon-only mode</li>
            <li>Desktop maintains full-width sidebar always</li>
            <li>Mobile shows/hides the entire sidebar</li>
          </ul>
          <div style="background: #fef3c7; padding: 1rem; border-radius: 0.375rem; border: 1px solid #f59e0b; margin-top: 1rem;">
            <strong>Try it:</strong> Use the mobile toggle button to show/hide the sidebar. Notice there's no collapsed/rail mode.
          </div>
        </main>
      </div>
    `,
  }),
};

/**
 * Active Item Tracking Example
 */
export const WithActiveItemTracking: Story = {
  render: (args) => ({
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
    },
    setup() {
      // Inject styles on mount (including active state styles)
      onMounted(() => {
        const styleId = 'sidebar-nav-styles';
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = navButtonStyles + `
            .nav-button.active,
            .nav-sublink.active {
              background: var(--ag-primary-background);
              color: var(--ag-primary-text);
              font-weight: 500;
            }
          `;
          document.head.appendChild(style);
        }
      });

      const activeRoute = ref("/dashboard");
      const isOpen = ref(true);

      const handleNavClick = (route: string) => (e: Event) => {
        e.preventDefault();
        activeRoute.value = route;

        const sidebar = (e.target as HTMLElement).closest("ag-sidebar");

        // Update top-level nav buttons
        const buttons = sidebar?.querySelectorAll(".nav-button");
        buttons?.forEach((btn) => {
          const isActive = btn.getAttribute("data-route") === route;
          btn.classList.toggle("active", isActive);
          if (isActive) {
            btn.setAttribute("aria-current", "page");
          } else {
            btn.removeAttribute("aria-current");
          }
        });

        // Update sublinks (both inline and in popovers)
        const sublinks = sidebar?.querySelectorAll(".nav-sublink");
        sublinks?.forEach((link) => {
          const isActive = link.getAttribute("data-route") === route;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      };

      const handleSubmenuToggle = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        const button = e.currentTarget as HTMLElement;
        const navItem = button.closest("ag-sidebar-nav-item");
        const submenu = navItem?.querySelector(
          "ag-sidebar-nav-submenu"
        ) as HTMLElement;

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
      };

      return { args, activeRoute, isOpen, handleNavClick, handleSubmenuToggle, PanelIcon };
    },
    template: `
      <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
        <VueSidebar
          :open="isOpen"
          :collapsed="args.collapsed"
          :show-mobile-toggle="true"
          @update:open="(val) => { isOpen = val; args.onToggle?.(val); }"
          @update:collapsed="args.onCollapse"
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            Navigation
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="(e) => {
              const sidebar = e.target.closest('ag-sidebar');
              if (sidebar && sidebar.toggleCollapse) {
                sidebar.toggleCollapse();
              }
            }"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <component :is="PanelIcon" />
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button active"
                aria-current="page"
                data-route="/dashboard"
                @click="handleNavClick('/dashboard')"
              >
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
                data-route="/projects"
                @click="handleNavClick('/projects')"
              >
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
                data-route="/team"
                @click="handleNavClick('/team')"
              >
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button nav-button-expanded"
                aria-expanded="false"
                data-route="/settings"
                @click="(e) => {
                  handleNavClick('/settings')(e);
                  handleSubmenuToggle(e);
                }"
              >
                <Settings :size="20" />
                <span class="nav-label">Settings</span>
                <span class="chevron"><ChevronRight :size="16" /></span>
              </button>

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                :show-header="false"
              >
                <button
                  slot="trigger"
                  type="button"
                  class="nav-button"
                  data-route="/settings"
                  @click="handleNavClick('/settings')"
                >
                  <Settings :size="20" />
                  <span class="nav-label">Settings</span>
                  <span class="collapsed-indicator">
                    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                    </svg>
                  </span>
                </button>
                <VueSidebarNavPopoverSubmenu slot="content" class="popover-submenu">
                  <a href="#" class="nav-sublink" data-route="/settings/profile" @click="handleNavClick('/settings/profile')">Profile</a>
                  <a href="#" class="nav-sublink" data-route="/settings/billing" @click="handleNavClick('/settings/billing')">Billing</a>
                  <a href="#" class="nav-sublink" data-route="/settings/security" @click="handleNavClick('/settings/security')">Security</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a class="nav-sublink" href="#" data-route="/settings/profile" @click="handleNavClick('/settings/profile')">Profile</a>
                <a class="nav-sublink" href="#" data-route="/settings/billing" @click="handleNavClick('/settings/billing')">Billing</a>
                <a class="nav-sublink" href="#" data-route="/settings/security" @click="handleNavClick('/settings/security')">Security</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Active Item Tracking</h1>
          <p>Current route: <strong>{{ activeRoute }}</strong></p>
          <p>Click navigation items to see the active state change.</p>
          <ul>
            <li><strong>Active styling:</strong> Background color and font weight change</li>
            <li><strong>ARIA current:</strong> The active item has aria-current="page" for accessibility</li>
            <li><strong>Submenu support:</strong> Sublinks also track active state</li>
            <li><strong>Popover sync:</strong> Active state works in both inline and popover modes</li>
          </ul>
          <p>
            In a real application, you'd integrate this with your router (Vue Router, etc.) to automatically
            update the active state based on the current route.
          </p>
        </main>
      </div>
    `,
  }),
};

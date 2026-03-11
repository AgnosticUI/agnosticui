import type { Meta, StoryObj } from '@storybook/vue3';
import { onMounted } from 'vue';
import VueSidebar from './VueSidebar.vue';
import { VueSidebarNav, VueSidebarNavItem, VueSidebarNavSubmenu } from '../../SidebarNav/vue/index';
import VuePopover from '../../Popover/vue/VuePopover.vue';
import { VueSidebarNavPopoverSubmenu } from '../../SidebarNav/vue/index';

const HOME_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
const FOLDER_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
const USERS_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const SETTINGS_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`;
const CHEVRON_RIGHT_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
const PANEL_TOGGLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/></svg>`;

const NAV_STYLES = `
  .nav-button {
    display: flex;
    align-items: center;
    gap: var(--ag-space-3);
    position: relative;
    padding: var(--ag-space-2) var(--ag-space-3);
    margin-block-end: var(--ag-space-1);
    border: none;
    background: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border-radius: var(--ag-radius-sm);
    transition: background var(--ag-fx-duration-sm);
    color: inherit;
  }
  .nav-button svg { flex-shrink: 0; }
  .nav-button:hover { background: var(--ag-background-secondary); }
  .nav-button.active {
    background: var(--ag-primary-background);
    color: var(--ag-primary-text);
    font-weight: 500;
  }
  .nav-label {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
  }
  .chevron {
    display: flex;
    align-items: center;
    transition: transform var(--ag-fx-duration-md), opacity var(--ag-fx-duration-sm);
    margin-left: auto;
  }
  .nav-button[aria-expanded="true"] .chevron { transform: rotate(90deg); }
  ag-sidebar[collapsed] .nav-label,
  ag-sidebar[collapsed] .chevron {
    opacity: 0;
    pointer-events: none;
    display: none;
  }
  ag-sidebar[collapsed] .nav-button {
    width: auto;
    padding: var(--ag-space-2);
  }
  ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
  ag-sidebar:not([collapsed]) ag-popover,
  ag-sidebar[collapsed] .nav-button-expanded,
  ag-sidebar:not([collapsed]) .nav-button-collapsed {
    display: none !important;
  }
  ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
    display: block !important;
  }
  ag-sidebar-nav-submenu {
    display: none;
    overflow: hidden;
  }
  ag-sidebar-nav-submenu[open] {
    display: block;
  }
  .nav-sublink {
    display: block;
    padding: var(--ag-space-2) var(--ag-space-3);
    margin-block-end: var(--ag-space-1);
    color: inherit;
    text-decoration: none;
    border-radius: var(--ag-radius-sm);
    transition: background var(--ag-fx-duration-sm);
  }
  .nav-sublink:hover { background: var(--ag-background-secondary); }
  .nav-button-collapsed::part(ag-popover-body) { padding: var(--ag-space-1); }
`;

const meta = {
  title: 'AgnosticUI/Sidebar',
  component: VueSidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof VueSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

function makeStory(initialCollapsed = false, variant = 'default') {
  return {
    render: () => ({
      components: { VueSidebar, VueSidebarNav, VueSidebarNavItem, VueSidebarNavSubmenu, VueSidebarNavPopoverSubmenu, VuePopover },
      setup() {
        onMounted(() => {
          const id = 'ag-sidebar-story-styles';
          if (!document.getElementById(id)) {
            const el = document.createElement('style');
            el.id = id;
            el.textContent = NAV_STYLES;
            document.head.appendChild(el);
          }
        });

        const toggleCollapse = (e: Event) => {
          const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
          if (sidebar && sidebar.toggleCollapse) sidebar.toggleCollapse();
        };

        const handleSubmenuToggle = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          const button = e.currentTarget as HTMLElement;
          const navItem = button.closest('ag-sidebar-nav-item');
          const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');
          if (!submenu) return;
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
          if (isExpanded) submenu.removeAttribute('open');
          else submenu.setAttribute('open', '');
        };

        return {
          initialCollapsed, variant, toggleCollapse, handleSubmenuToggle,
          HOME_SVG, FOLDER_SVG, USERS_SVG, SETTINGS_SVG, CHEVRON_RIGHT_SVG, PANEL_TOGGLE_SVG,
        };
      },
      template: `
        <div style="position:relative;display:flex;height:500px;border:1px solid var(--ag-border-color);border-radius:0.5rem;overflow:hidden;contain:layout">
          <VueSidebar :collapsed="initialCollapsed" :variant="variant" aria-label="Main navigation" show-mobile-toggle>
            <h2 slot="ag-header-start" style="margin:0;font-size:1.125rem;font-weight:600">Dashboard</h2>
            <button type="button" slot="ag-header-toggle" @click="toggleCollapse"
              style="background:none;border:none;padding:8px 0;cursor:pointer;display:flex;align-items:center;color:inherit"
              aria-label="Toggle sidebar">
              <span v-html="PANEL_TOGGLE_SVG"></span>
            </button>
            <VueSidebarNav>
              <VueSidebarNavItem>
                <button type="button" class="nav-button active" aria-current="page">
                  <span v-html="HOME_SVG"></span>
                  <span class="nav-label">Dashboard</span>
                </button>
              </VueSidebarNavItem>
              <VueSidebarNavItem>
                <button type="button" class="nav-button nav-button-expanded" aria-expanded="false" @click="handleSubmenuToggle">
                  <span v-html="FOLDER_SVG"></span>
                  <span class="nav-label">Projects</span>
                  <span class="chevron" v-html="CHEVRON_RIGHT_SVG"></span>
                </button>
                <VuePopover class="nav-button-collapsed" placement="right-start" trigger-type="click" :distance="8" :arrow="true">
                  <button slot="trigger" type="button" class="nav-button">
                    <span v-html="FOLDER_SVG"></span>
                  </button>
                  <VueSidebarNavPopoverSubmenu slot="content">
                    <a href="#" class="nav-sublink" @click.prevent>Project Alpha</a>
                    <a href="#" class="nav-sublink" @click.prevent>Project Beta</a>
                    <a href="#" class="nav-sublink" @click.prevent>Project Gamma</a>
                  </VueSidebarNavPopoverSubmenu>
                </VuePopover>
                <VueSidebarNavSubmenu>
                  <a class="nav-sublink" href="#" @click.prevent>Project Alpha</a>
                  <a class="nav-sublink" href="#" @click.prevent>Project Beta</a>
                  <a class="nav-sublink" href="#" @click.prevent>Project Gamma</a>
                </VueSidebarNavSubmenu>
              </VueSidebarNavItem>
              <VueSidebarNavItem>
                <button type="button" class="nav-button">
                  <span v-html="USERS_SVG"></span>
                  <span class="nav-label">Team</span>
                </button>
              </VueSidebarNavItem>
              <VueSidebarNavItem>
                <button type="button" class="nav-button nav-button-expanded" aria-expanded="false" @click="handleSubmenuToggle">
                  <span v-html="SETTINGS_SVG"></span>
                  <span class="nav-label">Settings</span>
                  <span class="chevron" v-html="CHEVRON_RIGHT_SVG"></span>
                </button>
                <VuePopover class="nav-button-collapsed" placement="right-start" trigger-type="click" :distance="8" :arrow="true">
                  <button slot="trigger" type="button" class="nav-button">
                    <span v-html="SETTINGS_SVG"></span>
                  </button>
                  <VueSidebarNavPopoverSubmenu slot="content">
                    <a href="#" class="nav-sublink" @click.prevent>Profile</a>
                    <a href="#" class="nav-sublink" @click.prevent>Billing</a>
                    <a href="#" class="nav-sublink" @click.prevent>Security</a>
                  </VueSidebarNavPopoverSubmenu>
                </VuePopover>
                <VueSidebarNavSubmenu>
                  <a class="nav-sublink" href="#" @click.prevent>Profile</a>
                  <a class="nav-sublink" href="#" @click.prevent>Billing</a>
                  <a class="nav-sublink" href="#" @click.prevent>Security</a>
                </VueSidebarNavSubmenu>
              </VueSidebarNavItem>
            </VueSidebarNav>
            <div slot="ag-footer" style="font-size:0.875rem;color:var(--ag-text-secondary)">
              © 2024 Company
            </div>
          </VueSidebar>
          <main style="flex:1;padding:2rem;overflow:auto;background:var(--ag-background)">
            <h1 style="margin-top:0">Main Content</h1>
            <p>Click the header toggle to collapse the sidebar into rail mode.</p>
            <p>When collapsed, click icon-only items with submenus to see them in popovers.</p>
          </main>
        </div>
      `,
    }),
  };
}

export const Default: Story = makeStory() as Story;
export const Collapsed: Story = makeStory(true) as Story;
export const Elevated: Story = makeStory(false, 'elevated') as Story;

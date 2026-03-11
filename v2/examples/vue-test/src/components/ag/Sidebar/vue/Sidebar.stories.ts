import type { Meta, StoryObj } from '@storybook/vue3';
import { onMounted } from 'vue';
import VueSidebar from './VueSidebar.vue';
import { VueSidebarNav, VueSidebarNavItem, VueSidebarNavSubmenu } from '../../SidebarNav/vue/index';
import VuePopover from '../../Popover/vue/VuePopover.vue';
import { VueSidebarNavPopoverSubmenu } from '../../SidebarNav/vue/index';

const NAV_STYLES = `
  .ag-nav-btn {
    display: flex; align-items: center; gap: var(--ag-space-3);
    width: 100%; background: none; border: none; padding: 0.5rem 1rem;
    cursor: pointer; color: inherit; font-size: inherit;
    border-radius: var(--ag-border-radius-sm);
    text-align: left; position: relative;
  }
  .ag-nav-btn:hover { background: var(--ag-background-secondary); }
  .ag-nav-btn .ag-nav-label { flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .ag-nav-btn .ag-nav-chevron { margin-left: auto; transition: transform 200ms; }
  .ag-nav-btn[aria-expanded="true"] .ag-nav-chevron { transform: rotate(90deg); }
  ag-sidebar[collapsed] .ag-nav-btn .ag-nav-label,
  ag-sidebar[collapsed] .ag-nav-btn .ag-nav-chevron { opacity: 0; pointer-events: none; display: none; }
  ag-sidebar[collapsed] .ag-nav-btn { padding-inline: var(--ag-space-2); justify-content: center; }
  ag-sidebar:not([collapsed]) .ag-popover-submenu-trigger,
  ag-sidebar[collapsed] .ag-inline-submenu { display: none !important; }
`;

const meta = {
  title: 'AgnosticUI/Sidebar',
  component: VueSidebar,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    collapsed: { control: 'boolean' },
    position: { control: 'select', options: ['left', 'right'] },
    variant: { control: 'select', options: ['default', 'bordered', 'elevated'] },
    showMobileToggle: { control: 'boolean' },
  },
  args: { open: false, collapsed: false, position: 'left', variant: 'default', showMobileToggle: true },
} satisfies Meta<typeof VueSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
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
      const toggle = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        const item = btn.closest('ag-sidebar-nav-item');
        const sub = item?.querySelector('ag-sidebar-nav-submenu') as any;
        if (!sub) return;
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        if (open) sub.removeAttribute('open'); else sub.setAttribute('open', '');
      };
      return { args, toggle };
    },
    template: `
      <div style="display:flex;height:420px;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:hidden">
        <VueSidebar v-bind="args" @update:open="args.onToggle" @update:collapsed="args.onCollapse">
          <h2 slot="ag-header-start" style="margin:0;font-size:1.125rem;font-weight:600;padding:0 1rem">Dashboard</h2>
          <VueSidebarNav>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn" aria-current="page">
                <span>🏠</span><span class="ag-nav-label">Home</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn ag-inline-submenu" aria-expanded="false" @click="toggle">
                <span>📁</span><span class="ag-nav-label">Projects</span>
                <span class="ag-nav-chevron">›</span>
              </button>
              <VuePopover class="ag-popover-submenu-trigger" placement="right-start" trigger-type="click" :distance="8">
                <button slot="trigger" type="button" class="ag-nav-btn"><span>📁</span></button>
                <VueSidebarNavPopoverSubmenu slot="content">
                  <a href="#">Alpha</a><a href="#">Beta</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>
              <VueSidebarNavSubmenu class="ag-inline-submenu">
                <a href="#" style="display:block;padding:0.375rem 1rem 0.375rem 2.5rem">Alpha</a>
                <a href="#" style="display:block;padding:0.375rem 1rem 0.375rem 2.5rem">Beta</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn">
                <span>👤</span><span class="ag-nav-label">Profile</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn">
                <span>⚙️</span><span class="ag-nav-label">Settings</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>
        </VueSidebar>
        <main style="flex:1;padding:1.5rem;overflow:auto">
          <h1 style="margin:0 0 1rem">Main content</h1>
          <p>The sidebar is to the left. Use the toggle button to collapse it to rail mode on desktop.</p>
        </main>
      </div>
    `,
  }),
};

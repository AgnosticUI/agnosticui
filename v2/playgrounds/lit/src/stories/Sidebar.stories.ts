import type { Meta, StoryObj } from '@storybook/web-components';
import { useArgs } from "storybook/preview-api";
import { html } from 'lit';
import { createElement, Folder, User, Settings, Home, PanelLeftOpen, PanelLeftClose } from 'lucide';
import {type AgSidebarProps } from 'agnosticui-core/sidebar';
import 'agnosticui-core/icon';
import 'agnosticui-core/visually-hidden';
import 'agnosticui-core/accordion';

const meta: Meta<AgSidebarProps> = {
  title: 'AgnosticUI Lit/Sidebar',
  component: 'ag-sidebar',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls sidebar visibility on mobile (below breakpoint)',
    },
    collapsed: {
      control: 'boolean',
      description: 'Controls collapsed/rail state (icon-only) on desktop',
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Sidebar position on the screen',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the navigation landmark',
    },
    breakpoint: {
      control: { type: 'number', min: 320, max: 1920, step: 1 },
      description: 'Pixel width below which mobile overlay behavior activates',
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: 'Visual style variant',
    },
    noTransition: {
      control: 'boolean',
      description: 'Disable animations (respects prefers-reduced-motion)',
    },
    width: {
      control: 'text',
      description: 'Custom width (sets CSS variable)',
    },
  },
  args: {
    open: false,
    collapsed: false,
    position: 'left',
    ariaLabel: 'Main navigation',
    breakpoint: 1024,
    variant: 'default',
    noTransition: false,
  },
};

export default meta;
type Story = StoryObj<AgSidebarProps>;

// Helper to create navigation content
const createNavContent = () => html`
  <style>
    .nav-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.75rem;
      padding: 0.75rem 1.25rem;
      color: var(--ag-text-primary);
      text-decoration: none;
      border-radius: var(--ag-radius-md);
      transition: background-color 150ms ease;
    }
    .nav-item:hover {
      background-color: var(--ag-background-secondary);
    }
    .nav-item[aria-current="page"] {
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
      font-weight: 600;
    }
    .nav-label {
      font-size: 0.875rem;
    }
    ag-sidebar[collapsed] .nav-item {
      justify-content: center;
    }
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
  </style>

  <a href="#" class="nav-item" aria-current="page">
    <ag-icon no-fill>${createElement(Home)}</ag-icon>
    <span class="nav-label">Dashboard</span>
  </a>
  
  <a href="#" class="nav-item">
    <ag-icon no-fill>${createElement(Folder)}</ag-icon>
    <span class="nav-label">Projects</span>
  </a>
  
  <a href="#" class="nav-item">
    <ag-icon no-fill>${createElement(User)}</ag-icon>
    <span class="nav-label">Team</span>
  </a>
  
  <a href="#" class="nav-item">
    <ag-icon no-fill>${createElement(Settings)}</ag-icon>
    <span class="nav-label">Settings</span>
  </a>
`;

export const Default: Story = {
  render: (args) => html`
    <div style="display: flex; min-height: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?open=${args.open}
        ?collapsed=${args.collapsed}
        .position=${args.position}
        aria-label=${args['ariaLabel']}
        .breakpoint=${args.breakpoint}
        .variant=${args.variant}
        ?no-transition=${args['noTransition']}
        .width=${args.width}
      >
        ${createNavContent()}
      </ag-sidebar>
      
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Main Content</h1>
        <p style="color: #6b7280;">
          This is the main content area. The sidebar adapts responsively:
        </p>
        <ul style="color: #6b7280; margin-top: 1rem;">
          <li>Desktop (≥1024px): Persistent sidebar, can toggle collapsed state</li>
          <li>Mobile (&lt;1024px): Overlay drawer, toggle open state</li>
        </ul>
        <button 
          style="margin-top: 1rem; padding: 0.5rem 1rem; border-radius: 0.375rem; background: #3b82f6; color: white; border: none; cursor: pointer;"
          onclick="document.querySelector('ag-sidebar').open = !document.querySelector('ag-sidebar').open"
        >
          Toggle Sidebar (Mobile)
        </button>
      </main>
    </div>
  `,
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
  render: (args) => html`
    <div style="display: flex; min-height: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?collapsed=${args.collapsed}
        .position=${args.position}
        aria-label=${args['ariaLabel']}
        .variant=${args.variant}
      >
        ${createNavContent()}
      </ag-sidebar>
      
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Collapsed/Rail Mode</h1>
        <p style="color: #6b7280;">
          The sidebar is in collapsed (rail) mode, showing only icons. Labels are visually hidden but accessible to screen readers.
        </p>
        <p style="color: #6b7280; margin-top: 1rem;">
          Click the toggle button in the sidebar to expand it.
        </p>
      </main>
    </div>
  `,
};

export const CustomToggleIcon: Story = {
  render: (args) => {
    const [{ collapsed }, updateArgs] = useArgs();

    const handleCollapse = (e: CustomEvent) => {
      // We need to update the story's args when the component's state changes
      updateArgs({ collapsed: e.detail.collapsed });
    };

    return html`
    <div style="display: flex; min-height: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?collapsed=${collapsed}
        .position=${args.position}
        aria-label=${args['ariaLabel']}
        .variant=${args.variant}
        @ag-sidebar-collapse=${handleCollapse}
      >
        <div slot="ag-toggle-icon">
          ${collapsed
            ? html`<ag-icon no-fill>${createElement(PanelLeftOpen)}</ag-icon>`
            : html`<ag-icon no-fill>${createElement(PanelLeftClose)}</ag-icon>`
          }
        </div>
        ${createNavContent()}
      </ag-sidebar>
      
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Custom Toggle Icon</h1>
        <p style="color: #6b7280;">
          This story demonstrates how to use the <code>ag-toggle-icon</code> slot to provide custom icons for the expanded and collapsed states.
        </p>
        <p style="color: #6b7280; margin-top: 1rem;">
          We are using the <code>PanelLeftOpen</code> and <code>PanelLeftClose</code> icons from Lucide.
        </p>
      </main>
    </div>
  `},
};

export const RightPosition: Story = {
  args: {
    position: 'right',
  },
  render: (args) => html`
    <div style="display: flex; min-height: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Right Sidebar</h1>
        <p style="color: #6b7280;">
          The sidebar can be positioned on the right side of the screen.
        </p>
        <p style="color: #6b7280; margin-top: 1rem;">
          This is useful for table of contents, metadata panels, or secondary navigation.
        </p>
      </main>
      
      <ag-sidebar
        .position=${args.position}
        aria-label="Secondary navigation"
        .variant=${args.variant}
      >
        <style>
          .toc-item {
            display: block;
            padding: 0.5rem 1rem;
            color: var(--ag-text-secondary, #6b7280);
            text-decoration: none;
            font-size: 0.875rem;
            border-radius: var(--ag-radius-md, 0.375rem);
          }
          .toc-item:hover {
            background-color: var(--ag-background-secondary, #f3f4f6);
            color: var(--ag-text-primary, #111827);
          }
        </style>
        <div slot="ag-header" style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">
          <h3 style="margin: 0; font-size: 0.875rem; font-weight: 600; text-transform: uppercase; color: #6b7280;">
            On This Page
          </h3>
        </div>
        
        <a href="#intro" class="toc-item">Introduction</a>
        <a href="#features" class="toc-item">Features</a>
        <a href="#installation" class="toc-item">Installation</a>
        <a href="#usage" class="toc-item">Usage</a>
        <a href="#api" class="toc-item">API Reference</a>
      </ag-sidebar>
    </div>
  `,
};

export const WithAccordion: Story = {
  render: (args) => html`
    <div style="display: flex; min-height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        aria-label="Main navigation"
        .variant=${args.variant}
      >
        <style>
          .nav-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            color: var(--ag-text-primary, #111827);
            text-decoration: none;
            border-radius: var(--ag-radius-md, 0.375rem);
            transition: background-color 150ms ease;
          }
          .nav-item:hover {
            background-color: var(--ag-background-secondary, #f3f4f6);
          }
          .accordion-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.875rem;
          }
          .accordion-content {
            padding-left: 2.5rem;
          }
          .accordion-content a {
            display: block;
            padding: 0.5rem 1rem;
            color: var(--ag-text-secondary, #6b7280);
            text-decoration: none;
            font-size: 0.875rem;
            border-radius: var(--ag-radius-md, 0.375rem);
          }
          .accordion-content a:hover {
            background-color: var(--ag-background-secondary, #f3f4f6);
            color: var(--ag-text-primary, #111827);
          }
        </style>
        
        <a href="#" class="nav-item" aria-current="page">
          <ag-icon no-fill>${createElement(Home)}</ag-icon>
          <span>Dashboard</span>
        </a>
        
        <ag-accordion>
          <ag-accordion-item>
            <div slot="header" class="accordion-header">
              <ag-icon no-fill>${createElement(Folder)}</ag-icon>
              <span>Projects</span>
            </div>
            <div slot="content" class="accordion-content">
              <a href="#">Project Alpha</a>
              <a href="#">Project Beta</a>
              <a href="#">Project Gamma</a>
            </div>
          </ag-accordion-item>
          
          <ag-accordion-item>
            <div slot="header" class="accordion-header">
              <ag-icon no-fill>${createElement(User)}</ag-icon>
              <span>Team</span>
            </div>
            <div slot="content" class="accordion-content">
              <a href="#">Members</a>
              <a href="#">Roles</a>
              <a href="#">Permissions</a>
            </div>
          </ag-accordion-item>
        </ag-accordion>
        
        <a href="#" class="nav-item">
          <ag-icon no-fill>${createElement(Settings)}</ag-icon>
          <span>Settings</span>
        </a>
      </ag-sidebar>
      
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Accordion Navigation</h1>
        <p style="color: #6b7280;">
          The sidebar uses <code>ag-accordion</code> for collapsible sections, providing a clean navigation structure.
        </p>
      </main>
    </div>
  `,
};

export const WithHeaderFooter: Story = {
  render: (args) => html`
    <div style="display: flex; min-height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        aria-label="Main navigation"
        .variant=${args.variant}
      >
        <div slot="ag-header" style="padding: 1.5rem 1rem; border-bottom: 1px solid #e5e7eb;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 2rem; height: 2rem; border-radius: 0.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
            <div>
              <div style="font-weight: 600; font-size: 0.875rem;">My App</div>
              <div style="font-size: 0.75rem; color: #6b7280;">v2.0.0</div>
            </div>
          </div>
        </div>
        
        ${createNavContent()}
        
        <div slot="ag-footer" style="padding: 1rem; border-top: 1px solid #e5e7eb; margin-top: auto;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 2rem; height: 2rem; border-radius: 50%; background: #dbeafe; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #3b82f6; font-size: 0.75rem;">
              JD
            </div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-weight: 500; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                John Doe
              </div>
              <div style="font-size: 0.75rem; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                john@example.com
              </div>
            </div>
          </div>
        </div>
      </ag-sidebar>
      
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Header & Footer Slots</h1>
        <p style="color: #6b7280;">
          The sidebar provides header and footer slots for branding, user profiles, and additional content.
        </p>
      </main>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: grid; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">Default</h3>
        <div style="display: flex; min-height: 300px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
          <ag-sidebar variant="default" aria-label="Default navigation">
            ${createNavContent()}
          </ag-sidebar>
          <main style="flex: 1; padding: 2rem; background: #f9fafb;">
            <p style="color: #6b7280;">Clean sidebar with no border or shadow.</p>
          </main>
        </div>
      </div>
      
      <div>
        <h3 style="margin: 0 0 1rem 0;">Bordered</h3>
        <div style="display: flex; min-height: 300px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
          <ag-sidebar variant="bordered" aria-label="Bordered navigation">
            ${createNavContent()}
          </ag-sidebar>
          <main style="flex: 1; padding: 2rem; background: #f9fafb;">
            <p style="color: #6b7280;">Sidebar with a subtle border on the right edge.</p>
          </main>
        </div>
      </div>
      
      <div>
        <h3 style="margin: 0 0 1rem 0;">Elevated</h3>
        <div style="display: flex; min-height: 300px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
          <ag-sidebar variant="elevated" aria-label="Elevated navigation">
            ${createNavContent()}
          </ag-sidebar>
          <main style="flex: 1; padding: 2rem; background: #f9fafb;">
            <p style="color: #6b7280;">Sidebar with a shadow for elevated appearance.</p>
          </main>
        </div>
      </div>
    </div>
  `,
};

export const CustomWidth: Story = {
  args: {
    width: '300px',
  },
  render: (args) => html`
    <div style="display: flex; min-height: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        aria-label="Main navigation"
        .width=${args.width}
        .variant=${args.variant}
      >
        ${createNavContent()}
      </ag-sidebar>
      
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Custom Width</h1>
        <p style="color: #6b7280;">
          The sidebar width is set to <strong>${args.width}</strong> using the width prop.
        </p>
      </main>
    </div>
  `,
};

export const ResponsiveDemo: Story = {
  render: () => html`
    <div style="max-width: 1200px; margin: 0 auto;">
      <div style="margin-bottom: 1rem; padding: 1rem; background: #fef3c7; border: 1px solid #fbbf24; border-radius: 0.5rem;">
        <strong>Responsive Demo:</strong> Resize your browser window to see the sidebar adapt. Below 1024px, it becomes an overlay drawer.
      </div>
      
      <div style="display: flex; min-height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; position: relative;">
        <ag-sidebar
          aria-label="Main navigation"
          variant="bordered"
        >
          ${createNavContent()}
        </ag-sidebar>
        
        <main style="flex: 1; padding: 2rem;">
          <button 
            data-sidebar-trigger
            style="display: none; margin-bottom: 1rem; padding: 0.5rem 1rem; border-radius: 0.375rem; background: #3b82f6; color: white; border: none; cursor: pointer;"
            onclick="document.querySelector('ag-sidebar').open = !document.querySelector('ag-sidebar').open"
          >
            ☰ Open Menu
          </button>
          
          <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Responsive Behavior</h1>
          <p style="color: #6b7280;">
            The sidebar automatically adapts based on viewport width:
          </p>
          <ul style="color: #6b7280; margin-top: 1rem;">
            <li><strong>Desktop (≥1024px):</strong> Persistent sidebar, always visible</li>
            <li><strong>Mobile (&lt;1024px):</strong> Overlay drawer with backdrop</li>
          </ul>
          
          <div style="margin-top: 2rem; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
            <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
              <strong>Current viewport:</strong> <span id="viewport-width"></span>px
            </p>
          </div>
        </main>
      </div>
    </div>
    
    <script>
      // Show viewport width
      function updateViewport() {
        const width = window.innerWidth;
        document.getElementById('viewport-width').textContent = width;
        
        const button = document.querySelector('[data-sidebar-trigger]');
        if (width < 1024) {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
      }
      updateViewport();
      window.addEventListener('resize', updateViewport);
    </script>
  `,
};

export const Events: Story = {
  render: () => html`
    <div style="display: flex; min-height: 400px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        id="event-sidebar"
        aria-label="Main navigation"
        @ag-sidebar-collapse=${(e: CustomEvent) => {
          const log = document.getElementById('event-log');
          log!.innerHTML += `<div>✓ Collapsed: ${e.detail.collapsed}</div>`;
        }}
        @ag-sidebar-breakpoint-change=${(e: CustomEvent) => {
          const log = document.getElementById('event-log');
          log!.innerHTML += `<div>📱 Breakpoint crossed: ${e.detail.isMobile ? 'Mobile' : 'Desktop'}</div>`;
        }}
      >
        ${createNavContent()}
      </ag-sidebar>
      
      <main style="flex: 1; padding: 2rem;">
        <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Event Handling</h1>
        <p style="color: #6b7280;">
          The sidebar dispatches custom events for state changes. Try toggling the sidebar or resizing the window.
        </p>
        
        <div style="margin-top: 1rem;">
          <button 
            style="padding: 0.5rem 1rem; border-radius: 0.375rem; background: #3b82f6; color: white; border: none; cursor: pointer;"
            onclick="document.getElementById('event-sidebar').collapsed = !document.getElementById('event-sidebar').collapsed"
          >
            Toggle Collapsed
          </button>
        </div>
        
        <div style="margin-top: 2rem; padding: 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; max-height: 200px; overflow-y: auto; font-family: monospace; font-size: 0.875rem;">
          <div style="margin-bottom: 0.5rem; font-weight: 600;">Event Log:</div>
          <div id="event-log"></div>
        </div>
      </main>
    </div>
  `,
};

# Sidebar Refactoring Plan

1. [x] Rail Mode Naming: `disableCompactMode?: boolean`

Behavior when true:
  * Sidebar is either full-width or hidden (no intermediate state)
  * collapsed prop is ignored
  * Desktop behaves like mobile: overlay pattern only

```ts
<!-- AI Studio pattern: full or hidden only -->
<ag-sidebar 
  disableCompactMode
  ?open=${isOpen}
>
  ...
</ag-sidebar>
```

2. Active Item Styling: We should provide CSS hooks to ensure the consumer can simply apply an .active class or [aria-current="page"] selector, and then the component can apply  proper styling:
```ts
<ag-sidebar-nav-item>
  <button class="nav-button ${isActive ? 'active' : ''}" aria-current="${isActive ? 'page' : undefined}">
    Dashboard
  </button>
</ag-sidebar-nav-item>
```
Flexible: Consumer can use any class name or attribute they want
Stylish: Component provides css active item styling affordance "for free":
```css
/* In the component's styles */
.nav-button.active,
.nav-button[aria-current="page"] {
  background: var(--ag-primary-background);
  color: var(--ag-primary-text);
  font-weight: 500;
}
```

## Lit Storybook Pattern for Active State

Example:
```ts
export const WithActiveItemTracking: Story = {
  render: (args) => {
    // Simulated route state (in a real app, this would come from your router)
    let activeRoute = '/dashboard';
    
    const handleNavClick = (route: string) => (e: Event) => {
      e.preventDefault();
      activeRoute = route;
      
      // Update all nav buttons
      const sidebar = (e.target as HTMLElement).closest('ag-sidebar');
      const buttons = sidebar?.querySelectorAll('.nav-button');
      buttons?.forEach(btn => {
        const isActive = btn.getAttribute('data-route') === route;
        btn.classList.toggle('active', isActive);
        if (isActive) {
          btn.setAttribute('aria-current', 'page');
        } else {
          btn.removeAttribute('aria-current');
        }
      });
    };
    
    return html`
      <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
        <ag-sidebar
          ?open=${args.open}
          ?collapsed=${args.collapsed}
          ?show-mobile-toggle=${args['showMobileToggle']}
        >
          <h2 slot="header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            Navigation
          </h2>
          <button 
            slot="header-toggle"
            @click=${(e: Event) => {
              const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
              sidebar?.toggleCollapse();
            }}
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            ${PanelIcon()}
          </button>

          <ag-sidebar-nav>
            <ag-sidebar-nav-item>
              <button 
                class="nav-button active" 
                aria-current="page"
                data-route="/dashboard"
                @click=${handleNavClick('/dashboard')}
              >
                <ag-icon no-fill>${createElement(Home)}</ag-icon>
                <span class="nav-label">Dashboard</span>
              </button>
            </ag-sidebar-nav-item>

            <ag-sidebar-nav-item>
              <button 
                class="nav-button"
                data-route="/projects"
                @click=${handleNavClick('/projects')}
              >
                <ag-icon no-fill>${createElement(Folder)}</ag-icon>
                <span class="nav-label">Projects</span>
              </button>
            </ag-sidebar-nav-item>

            <ag-sidebar-nav-item>
              <button 
                class="nav-button"
                data-route="/team"
                @click=${handleNavClick('/team')}
              >
                <ag-icon no-fill>${createElement(User)}</ag-icon>
                <span class="nav-label">Team</span>
              </button>
            </ag-sidebar-nav-item>

            <ag-sidebar-nav-item>
              <button 
                class="nav-button"
                data-route="/settings"
                @click=${handleNavClick('/settings')}
              >
                <ag-icon no-fill>${createElement(Settings)}</ag-icon>
                <span class="nav-label">Settings</span>
              </button>
            </ag-sidebar-nav-item>
          </ag-sidebar-nav>
        </ag-sidebar>
        
        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Active Item Tracking</h1>
          <p>Click navigation items to see the active state change.</p>
          <ul>
            <li><strong>Active styling:</strong> Background color and font weight change</li>
            <li><strong>Accessibility:</strong> <code>aria-current="page"</code> is set on active item</li>
            <li><strong>Framework agnostic:</strong> Uses standard classes and attributes</li>
          </ul>
          <p style="background: #dbeafe; padding: 1rem; border-radius: 0.375rem; border: 1px solid #3b82f6; margin-top: 1rem;">
            <strong>In a real app:</strong> Your router (React Router, Vue Router, etc.) would manage the active state. 
            This example simulates that behavior with vanilla JavaScript.
          </p>
        </main>
      </div>
    `;
  },
};
```

### Key Points:

* State Management: Uses a closure variable activeRoute to track state
* Event Handler: handleNavClick updates the DOM directly
* Data Attribute: Uses data-route to identify which route each button represents
* Class Toggle: Uses classList.toggle() to add/remove the active class
* ARIA: Manages aria-current attribute for accessibility

```css
.nav-button.active,
.nav-button[aria-current="page"] {
  background: var(--ag-primary-background);
  color: var(--ag-primary-text);
  font-weight: 500;
}
```

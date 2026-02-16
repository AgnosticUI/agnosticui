import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// AgnosticUI core components (web components register themselves)
import './components/ag/Breadcrumb/core/Breadcrumb';
import './components/ag/Avatar/core/Avatar';
import './components/ag/Badge/core/Badge';
import './components/ag/Button/core/Button';
import './components/ag/Card/core/Card';
import './components/ag/Tag/core/Tag';
import './components/ag/IconButton/core/IconButton';
import './components/ag/Divider/core/Divider';
import './components/ag/Progress/core/Progress';
import './components/ag/Accordion/core/Accordion';
import './components/ag/Alert/core/Alert';
import './components/ag/EmptyState/core/EmptyState';
import './components/ag/SkeletonLoader/core/SkeletonLoader';
import './components/ag/Tabs/core/Tabs';
import './components/ag/Toast/core/Toast';
import './skin-switcher';

// ===== Inline SVG Icons =====

const menuIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
const closeIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const bellIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
const searchIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
const bookmarkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`;
const shareIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`;
const arrowRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
const chevronRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
// Nav icons (size 20)
const homeIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
const bookOpenIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
const starIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
const bellNavIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
const zapIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
const settingsIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`;

// ===== Types =====

interface OnboardingData {
  selectedPath: 'personal' | 'team' | 'enterprise' | null;
  selectedInterests: string[];
  userName: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  tag: string;
}

// ===== Data =====

const allResources: Resource[] = [
  { id: '1', title: 'Building Accessible Components', description: "Learn how to create ARIA-compliant components with AgnosticUI's built-in accessibility features.", category: 'accessibility', tag: 'Accessibility' },
  { id: '2', title: 'React Component Patterns', description: 'Best practices for composing AgnosticUI components in React applications.', category: 'react', tag: 'React' },
  { id: '3', title: 'Design Token Architecture', description: 'How AgnosticUI uses CSS custom properties for theming.', category: 'design-systems', tag: 'Design Systems' },
  { id: '4', title: 'Vue 3 Composition API with Web Components', description: 'Integrate AgnosticUI web components seamlessly in Vue 3.', category: 'vue', tag: 'Vue' },
  { id: '5', title: 'Web Component Fundamentals', description: 'Understanding the standards behind AgnosticUI components.', category: 'web-components', tag: 'Web Components' },
  { id: '6', title: 'Responsive Layout Patterns', description: 'Build fluid layouts using AgnosticUI Flex and CSS Grid.', category: 'responsive-design', tag: 'Responsive Design' },
  { id: '7', title: 'Performance Optimization Guide', description: 'Lazy loading, tree-shaking, and bundle optimization with AgnosticUI.', category: 'performance', tag: 'Performance' },
  { id: '8', title: 'Testing AgnosticUI Components', description: 'Unit and integration testing strategies for web components.', category: 'testing', tag: 'Testing' },
  { id: '9', title: 'Custom Theming Deep Dive', description: 'Override and extend design tokens for brand-specific styling.', category: 'theming', tag: 'Theming' },
];

const workflowsByPath: Record<string, { header: string; content: string; cta: string }[]> = {
  personal: [
    { header: 'Set Up Your First Project', content: 'Create a new project using our CLI and add your first components. Start with Button, Input, and Card for a quick win.', cta: 'Start Tutorial' },
    { header: 'Customize Your Theme', content: 'Use design tokens to match your brand colors. Override CSS custom properties in your token file.', cta: 'Open Theming Guide' },
    { header: 'Deploy Your App', content: 'Learn how to optimize and deploy your AgnosticUI application to production.', cta: 'View Deploy Guide' },
  ],
  team: [
    { header: 'Invite Team Members', content: 'Add collaborators to your project and configure role-based permissions.', cta: 'Manage Team' },
    { header: 'Set Up Shared Component Library', content: 'Create a shared component library that your team can consume across projects.', cta: 'Library Setup Guide' },
    { header: 'Configure CI/CD Pipeline', content: 'Set up automated testing and deployment for your AgnosticUI applications.', cta: 'CI/CD Guide' },
  ],
  enterprise: [
    { header: 'Organization Setup', content: 'Configure your organization profile with branding, SSO, and team structure.', cta: 'Organization Settings' },
    { header: 'Role-Based Access Control', content: 'Define roles and permissions for developers, designers, and admins.', cta: 'RBAC Guide' },
    { header: 'Multi-Team Architecture', content: 'Learn patterns for sharing components across multiple teams and repositories.', cta: 'Architecture Guide' },
  ],
};

const alertByPath: Record<string, { variant: string; content: string }> = {
  personal: { variant: 'info', content: '<strong>Getting Started:</strong> Check out our starter templates to jumpstart your personal project.' },
  team: { variant: 'warning', content: '<strong>Team Invitation Pending:</strong> You have 2 pending team invitations. Review them in Settings.' },
  enterprise: { variant: 'info', content: '<strong>Organization Setup:</strong> Complete your organization profile to unlock enterprise features.' },
};

const navItems = [
  { icon: homeIcon, label: 'Dashboard', id: 'dashboard' },
  { icon: bookOpenIcon, label: 'Resources', id: 'resources' },
  { icon: starIcon, label: 'Curated', id: 'curated' },
  { icon: bellNavIcon, label: 'Notifications', id: 'notifications', badgeValue: '3', badgeVariant: 'info' },
  { icon: zapIcon, label: 'Updates', id: 'updates', badgeText: 'New', badgeVariant: 'success' },
  { icon: settingsIcon, label: 'Settings', id: 'settings' },
];

// ===== Helpers =====

function loadOnboardingData(): OnboardingData {
  const stored = localStorage.getItem('onboarding');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fall through
    }
  }
  return {
    selectedPath: 'team',
    selectedInterests: ['react', 'design-systems', 'web-components', 'accessibility'],
    userName: 'Jane',
  };
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ===== Component =====

@customElement('dashboard-app')
export class DashboardApp extends LitElement {
  @state() private _sidebarOpen = false;
  @state() private _activeNav = 'dashboard';
  @state() private _isLoading = true;
  @state() private _toastOpen = false;
  @state() private _toastMessage = '';

  private _onboardingData: OnboardingData = loadOnboardingData();

  get _selectedPath() { return this._onboardingData.selectedPath; }
  get _selectedInterests() { return this._onboardingData.selectedInterests; }
  get _userName() { return this._onboardingData.userName; }
  get _pathName() { return this._selectedPath ? capitalize(this._selectedPath) : 'Personal'; }
  get _hasInterests() { return this._selectedInterests.length > 0; }
  get _curatedResources() { return allResources.filter(r => this._selectedInterests.includes(r.category)); }
  get _workflows() { return workflowsByPath[this._selectedPath || 'personal'] || workflowsByPath.personal; }
  get _alert() { return alertByPath[this._selectedPath || 'personal'] || alertByPath.personal; }
  get _isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
  get _logoSrc() { return this._isDark ? '/logo-dark-mode.svg' : '/logo.svg'; }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => { this._isLoading = false; }, 1500);
  }

  private _handleBookmark(id: string) {
    const resource = allResources.find(r => r.id === id);
    if (resource) {
      this._toastMessage = `Bookmarked "${resource.title}"`;
      this._toastOpen = true;
    }
  }

  private _handleNavClick(id: string) {
    this._activeNav = id;
    this._sidebarOpen = false;
  }

  private _renderNavItems() {
    return navItems.map(item => html`
      <button
        class="nav-item ${this._activeNav === item.id ? 'active' : ''}"
        @click=${() => this._handleNavClick(item.id)}
      >
        ${item.icon}
        <span class="nav-label">${item.label}</span>
        ${item.badgeValue ? html`<span class="nav-badge"><ag-badge variant="${item.badgeVariant}" size="sm">${item.badgeValue}</ag-badge></span>` : ''}
        ${item.badgeText ? html`<span class="nav-badge"><ag-badge variant="${item.badgeVariant}" size="sm">${item.badgeText}</ag-badge></span>` : ''}
      </button>
    `);
  }

  private _renderResourceCard(resource: Resource) {
    return html`
      <ag-card shadow rounded="md">
        <div class="resource-card">
          <ag-tag variant="info" uppercase>${resource.tag}</ag-tag>
          <h3 class="resource-title">${resource.title}</h3>
          <p class="resource-description">${resource.description}</p>
          <div class="resource-actions">
            <div class="action-icons">
              <ag-icon-button label="Bookmark" variant="ghost" size="sm" @icon-button-click=${() => this._handleBookmark(resource.id)}>
                ${bookmarkIcon}
              </ag-icon-button>
              <ag-icon-button label="Share" variant="ghost" size="sm">
                ${shareIcon}
              </ag-icon-button>
            </div>
            <ag-button variant="primary" size="sm" shape="rounded">
              View Resource ${arrowRightIcon}
            </ag-button>
          </div>
        </div>
      </ag-card>
    `;
  }

  private _renderSkeletons() {
    return html`
      <div class="skeleton-grid">
        <ag-skeleton-loader variant="rounded" width="100%" height="250px"></ag-skeleton-loader>
        <ag-skeleton-loader variant="rounded" width="100%" height="250px"></ag-skeleton-loader>
        <ag-skeleton-loader variant="rounded" width="100%" height="250px"></ag-skeleton-loader>
      </div>
    `;
  }

  render() {
    const breadcrumbItems = [
      { label: 'Home', href: '#' },
      { label: 'Dashboard', href: '#' },
      { label: `${this._pathName} Path`, current: true },
    ];

    return html`
      <div class="dashboard-layout">
        <!-- Header -->
        <div class="dashboard-header">
          <div class="header-inner">
            <div class="header-left">
              <button class="menu-toggle" aria-label="Toggle sidebar" @click=${() => { this._sidebarOpen = true; }}>
                ${menuIcon}
              </button>
              <img src=${this._logoSrc} alt="AgnosticUI" class="header-logo" />
            </div>
            <div class="header-center">
              <div class="search-wrapper">
                <span class="search-icon">${searchIcon}</span>
                <input type="text" placeholder="Search resources..." class="search-input" />
              </div>
            </div>
            <div class="header-right">
              <div class="notification-wrapper">
                ${bellIcon}
                <ag-badge variant="info" size="xs">3</ag-badge>
              </div>
              <ag-avatar text="JD" size="sm"></ag-avatar>
            </div>
          </div>
        </div>

        <!-- Desktop/Tablet Sidebar -->
        <aside class="dashboard-sidebar">
          <nav class="sidebar-nav">
            ${this._renderNavItems()}
          </nav>
        </aside>

        <!-- Mobile Sidebar Overlay -->
        ${this._sidebarOpen ? html`<div class="sidebar-overlay" @click=${() => { this._sidebarOpen = false; }}></div>` : ''}
        <div class="mobile-sidebar ${this._sidebarOpen ? 'open' : ''}">
          <div class="mobile-sidebar-header">
            <img src=${this._logoSrc} alt="AgnosticUI" />
            <button class="close-sidebar" aria-label="Close sidebar" @click=${() => { this._sidebarOpen = false; }}>
              ${closeIcon}
            </button>
          </div>
          <nav class="sidebar-nav">
            ${this._renderNavItems()}
          </nav>
        </div>

        <!-- Main Content -->
        <main class="dashboard-main">
          <!-- Breadcrumb -->
          <div class="breadcrumb-section">
            <ag-breadcrumb type="slash" .items=${breadcrumbItems}></ag-breadcrumb>
          </div>

          <!-- Welcome Hero -->
          <section class="welcome-hero">
            <div class="welcome-inner">
              <div>
                <h2 class="welcome-title">Welcome back, ${this._userName}!</h2>
                <p class="welcome-subtitle">Here's what's new in your ${this._pathName} dashboard</p>
              </div>
              <div class="setup-progress">
                <span class="progress-label">Setup Completion</span>
                <ag-progress value="66" max="100" label="Setup completion"></ag-progress>
                <span class="progress-value">66%</span>
              </div>
            </div>
          </section>

          <!-- Path Alert -->
          <div class="alert-section">
            <ag-alert variant=${this._alert.variant} bordered-left>
              <span .innerHTML=${this._alert.content}></span>
            </ag-alert>
          </div>

          <!-- Content Feed -->
          ${!this._hasInterests ? html`
            <div class="empty-state-wrapper">
              <ag-empty-state title="No Interests Selected" subtitle="Complete the onboarding wizard to get personalized content recommendations.">
                <div slot="actions">
                  <ag-button variant="primary" shape="rounded">
                    Complete Onboarding ${arrowRightIcon}
                  </ag-button>
                </div>
              </ag-empty-state>
            </div>
          ` : html`
            <div class="tabs-section">
              <ag-tabs aria-label="Content feed">
                <ag-tab slot="tab" panel="curated">Curated for You</ag-tab>
                <ag-tab slot="tab" panel="all">All Resources</ag-tab>
                <ag-tab-panel slot="panel">
                  ${this._isLoading ? this._renderSkeletons() : html`
                    <div class="card-grid">
                      ${this._curatedResources.map(r => this._renderResourceCard(r))}
                    </div>
                  `}
                </ag-tab-panel>
                <ag-tab-panel slot="panel">
                  ${this._isLoading ? this._renderSkeletons() : html`
                    <div class="card-grid">
                      ${allResources.map(r => this._renderResourceCard(r))}
                    </div>
                  `}
                </ag-tab-panel>
              </ag-tabs>
            </div>
          `}

          <!-- Divider -->
          <div class="section-divider">
            <ag-divider></ag-divider>
          </div>

          <!-- Suggested Workflows -->
          <h3 class="section-title">Suggested Workflows</h3>
          <ag-accordion>
            ${this._workflows.map(wf => html`
              <ag-accordion-item bordered>
                <span slot="header" style="display: flex; align-items: center; gap: var(--ag-space-2)">
                  ${chevronRightIcon}
                  ${wf.header}
                </span>
                <div slot="content">
                  <p class="workflow-content">${wf.content}</p>
                  <ag-button variant="primary" size="sm" shape="rounded">${wf.cta}</ag-button>
                </div>
              </ag-accordion-item>
            `)}
          </ag-accordion>
        </main>

        <!-- Toast -->
        <ag-toast
          .open=${this._toastOpen}
          type="success"
          position="bottom-end"
          duration="3000"
          @toast-close=${() => { this._toastOpen = false; }}
          @toast-dismiss=${() => { this._toastOpen = false; }}
        >
          ${this._toastMessage}
        </ag-toast>

        <skin-switcher></skin-switcher>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    /* ===== Dashboard Layout ===== */
    .dashboard-layout {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
      grid-template-areas:
        "header"
        "main";
      height: 100vh;
      overflow: hidden;
    }

    .dashboard-header {
      grid-area: header;
      border-bottom: 1px solid var(--ag-border);
      z-index: 10;
    }

    .dashboard-sidebar {
      display: none;
    }

    .dashboard-main {
      grid-area: main;
      overflow-y: auto;
      padding: var(--ag-space-4);
    }

    /* ===== Header ===== */
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--ag-space-3) var(--ag-space-4);
      gap: var(--ag-space-3);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: var(--ag-space-3);
    }

    .header-logo {
      height: var(--ag-space-6);
      width: auto;
    }

    .header-center {
      flex: 1;
      max-width: 400px;
      display: none;
    }

    .search-wrapper {
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: var(--ag-space-3);
      top: 50%;
      transform: translateY(-50%);
      color: var(--ag-text-secondary);
      pointer-events: none;
      display: inline-flex;
    }

    .search-input {
      width: 100%;
      padding: var(--ag-space-2) var(--ag-space-3) var(--ag-space-2) var(--ag-space-8);
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      font-size: var(--ag-font-size-sm);
      background: var(--ag-background-primary);
      color: var(--ag-text-primary);
      font-family: inherit;
      outline: none;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: var(--ag-space-4);
    }

    .notification-wrapper {
      display: inline-flex;
      position: relative;
      cursor: pointer;
      color: var(--ag-text-secondary);
    }

    .notification-wrapper ag-badge {
      position: absolute;
      top: calc(-1 * var(--ag-space-2));
      right: calc(-1 * var(--ag-space-2));
    }

    .menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ag-text-primary);
      padding: var(--ag-space-1);
    }

    /* ===== Sidebar ===== */
    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-1);
      padding: var(--ag-space-4);
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: var(--ag-space-3);
      padding: var(--ag-space-3) var(--ag-space-4);
      border-radius: var(--ag-radius-md);
      color: var(--ag-text-secondary);
      text-decoration: none;
      transition: background-color var(--ag-motion-medium, 0.2s);
      cursor: pointer;
      position: relative;
      border: none;
      background: none;
      font-size: var(--ag-font-size-sm);
      font-family: inherit;
      width: 100%;
      text-align: left;
    }

    .nav-item:hover {
      background-color: var(--ag-surface-hover, rgba(0, 0, 0, 0.04));
    }

    .nav-item.active {
      background-color: var(--ag-primary-light, rgba(41, 122, 255, 0.08));
      color: var(--ag-primary);
      font-weight: 600;
    }

    .nav-label {
      font-size: var(--ag-font-size-sm);
    }

    .nav-item svg {
      width: var(--ag-space-5);
      height: var(--ag-space-5);
      flex-shrink: 0;
    }

    .nav-badge {
      margin-left: auto;
    }

    /* ===== Mobile Sidebar Overlay ===== */
    .sidebar-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 99;
    }

    .mobile-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 280px;
      z-index: 100;
      background: var(--ag-background-primary);
      transform: translateX(-100%);
      transition: transform var(--ag-motion-medium, 0.3s) ease;
      border-right: 1px solid var(--ag-border);
    }

    .mobile-sidebar.open {
      transform: translateX(0);
    }

    .mobile-sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--ag-space-4);
      border-bottom: 1px solid var(--ag-border);
    }

    .mobile-sidebar-header img {
      height: var(--ag-space-6);
      width: auto;
    }

    .close-sidebar {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ag-text-secondary);
      padding: var(--ag-space-1);
    }

    /* ===== Welcome Hero ===== */
    .welcome-hero {
      padding: var(--ag-space-6);
      margin-bottom: var(--ag-space-6);
      background: var(--ag-surface, var(--ag-background-secondary, #f8f9fa));
      border-radius: var(--ag-radius-md);
    }

    .welcome-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--ag-space-4);
    }

    .welcome-title {
      font-family: 'Inter', sans-serif;
      font-size: var(--ag-font-size-2x);
      font-weight: 700;
      margin: 0 0 var(--ag-space-2) 0;
      color: var(--ag-text-primary);
    }

    .welcome-subtitle {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
      margin: 0;
    }

    .setup-progress {
      min-width: 12.5rem;
    }

    .progress-label {
      font-size: var(--ag-font-size-xs, 0.75rem);
      color: var(--ag-text-secondary);
      display: block;
      margin-bottom: var(--ag-space-2);
    }

    .progress-value {
      font-size: var(--ag-font-size-sm);
      font-weight: 600;
      color: var(--ag-primary);
      display: block;
      margin-top: var(--ag-space-1);
    }

    /* ===== Content ===== */
    .breadcrumb-section {
      margin-bottom: var(--ag-space-4);
    }

    .alert-section {
      margin-bottom: var(--ag-space-6);
    }

    .tabs-section {
      margin-bottom: var(--ag-space-6);
    }

    .card-grid {
      display: grid;
      gap: var(--ag-space-4);
      grid-template-columns: 1fr;
      margin-top: var(--ag-space-4);
    }

    /* Card full-height fix */
    .card-grid ag-card {
      height: 100%;
    }

    .card-grid ag-card::part(ag-card-wrapper) {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card-grid ag-card::part(ag-card-content) {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .resource-card {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .resource-title {
      font-size: var(--ag-font-size-lg, 1.125rem);
      font-weight: 600;
      margin: var(--ag-space-3) 0 var(--ag-space-2) 0;
      color: var(--ag-text-primary);
    }

    .resource-description {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
      margin: 0 0 var(--ag-space-4) 0;
      line-height: 1.5;
    }

    .resource-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: var(--ag-space-3);
    }

    .action-icons {
      display: flex;
      gap: var(--ag-space-2);
    }

    /* ===== Section Titles ===== */
    .section-title {
      font-size: var(--ag-font-size-lg, 1.125rem);
      font-weight: 600;
      margin: var(--ag-space-6) 0 var(--ag-space-4) 0;
      color: var(--ag-text-primary);
    }

    .section-divider {
      margin: var(--ag-space-6) 0;
    }

    /* ===== Empty State ===== */
    .empty-state-wrapper {
      padding: var(--ag-space-8) 0;
    }

    /* ===== Skeleton Grid ===== */
    .skeleton-grid {
      display: grid;
      gap: var(--ag-space-4);
      grid-template-columns: 1fr;
      margin-top: var(--ag-space-4);
    }

    /* ===== Workflow Content ===== */
    .workflow-content {
      margin: 0 0 var(--ag-space-4) 0;
      color: var(--ag-text-secondary);
      font-size: var(--ag-font-size-sm);
    }

    /* ===== Tablet (768px - 1199px) ===== */
    @media (min-width: 768px) {
      .dashboard-layout {
        grid-template-columns: 64px 1fr;
        grid-template-areas:
          "header header"
          "sidebar main";
      }

      .dashboard-sidebar {
        display: block;
        grid-area: sidebar;
        width: 64px;
        border-right: 1px solid var(--ag-border);
        overflow-y: auto;
        background: var(--ag-background-primary);
      }

      .dashboard-main {
        padding: var(--ag-space-6);
      }

      .header-center {
        display: block;
      }

      .menu-toggle {
        display: none;
      }

      /* Icons only in sidebar */
      .dashboard-sidebar .nav-label,
      .dashboard-sidebar .nav-badge {
        display: none;
      }

      .dashboard-sidebar .nav-item {
        justify-content: center;
        padding: var(--ag-space-3);
      }

      .card-grid,
      .skeleton-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* ===== Desktop (>= 1200px) ===== */
    @media (min-width: 1200px) {
      .dashboard-layout {
        grid-template-columns: 240px 1fr;
      }

      .dashboard-sidebar {
        width: 240px;
      }

      .dashboard-sidebar .nav-label,
      .dashboard-sidebar .nav-badge {
        display: inline;
      }

      .dashboard-sidebar .nav-item {
        justify-content: flex-start;
        padding: var(--ag-space-3) var(--ag-space-4);
      }

      .card-grid,
      .skeleton-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* ===== Mobile Welcome Hero ===== */
    @media (max-width: 767px) {
      .welcome-inner {
        flex-direction: column;
        align-items: flex-start;
      }

      .setup-progress {
        width: 100%;
        margin-top: var(--ag-space-4);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'dashboard-app': DashboardApp;
  }
}

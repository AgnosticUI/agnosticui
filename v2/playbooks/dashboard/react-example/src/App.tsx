import { useState, useEffect } from 'react';
import {
  Home, BookOpen, Star, Bell, Zap, Settings, Search, Menu, X,
  Bookmark, Share2, ArrowRight, ChevronRight, Sun, Moon,
} from 'lucide-react';

// AgnosticUI React wrappers
import { ReactBreadcrumb, type BreadcrumbItem } from './components/ag/Breadcrumb/react/ReactBreadcrumb';
import { ReactAvatar } from './components/ag/Avatar/react/ReactAvatar';
import { ReactBadge } from './components/ag/Badge/react/ReactBadge';
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactCard } from './components/ag/Card/react/ReactCard';
import { ReactTag } from './components/ag/Tag/react/ReactTag';
import { ReactIconButton } from './components/ag/IconButton/react/ReactIconButton';
import { ReactDivider } from './components/ag/Divider/react/ReactDivider';
import { ReactProgress } from './components/ag/Progress/react/ReactProgress';
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './components/ag/Accordion/react/ReactAccordion';
import { ReactAlert } from './components/ag/Alert/react/ReactAlert';
import { ReactEmptyState } from './components/ag/EmptyState/react/ReactEmptyState';
import { ReactSkeletonLoader } from './components/ag/SkeletonLoader/react/ReactSkeletonLoader';
import { ReactTabs, ReactTab, ReactTabPanel } from './components/ag/Tabs/react/ReactTabs';
import { ReactToast } from './components/ag/Toast/react/ReactToast';

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
  {
    id: '1',
    title: 'Building Accessible Components',
    description: 'Learn how to create ARIA-compliant components with AgnosticUI\'s built-in accessibility features.',
    category: 'accessibility',
    tag: 'Accessibility',
  },
  {
    id: '2',
    title: 'React Component Patterns',
    description: 'Best practices for composing AgnosticUI components in React applications.',
    category: 'react',
    tag: 'React',
  },
  {
    id: '3',
    title: 'Design Token Architecture',
    description: 'How AgnosticUI uses CSS custom properties for theming.',
    category: 'design-systems',
    tag: 'Design Systems',
  },
  {
    id: '4',
    title: 'Vue 3 Composition API with Web Components',
    description: 'Integrate AgnosticUI web components seamlessly in Vue 3.',
    category: 'vue',
    tag: 'Vue',
  },
  {
    id: '5',
    title: 'Web Component Fundamentals',
    description: 'Understanding the standards behind AgnosticUI components.',
    category: 'web-components',
    tag: 'Web Components',
  },
  {
    id: '6',
    title: 'Responsive Layout Patterns',
    description: 'Build fluid layouts using AgnosticUI Flex and CSS Grid.',
    category: 'responsive-design',
    tag: 'Responsive Design',
  },
  {
    id: '7',
    title: 'Performance Optimization Guide',
    description: 'Lazy loading, tree-shaking, and bundle optimization with AgnosticUI.',
    category: 'performance',
    tag: 'Performance',
  },
  {
    id: '8',
    title: 'Testing AgnosticUI Components',
    description: 'Unit and integration testing strategies for web components.',
    category: 'testing',
    tag: 'Testing',
  },
  {
    id: '9',
    title: 'Custom Theming Deep Dive',
    description: 'Override and extend design tokens for brand-specific styling.',
    category: 'theming',
    tag: 'Theming',
  },
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

const alertByPath: Record<string, { variant: 'info' | 'warning'; content: React.ReactNode }> = {
  personal: {
    variant: 'info',
    content: <><strong>Getting Started:</strong> Check out our starter templates to jumpstart your personal project.</>,
  },
  team: {
    variant: 'warning',
    content: <><strong>Team Invitation Pending:</strong> You have 2 pending team invitations. Review them in Settings.</>,
  },
  enterprise: {
    variant: 'info',
    content: <><strong>Organization Setup:</strong> Complete your organization profile to unlock enterprise features.</>,
  },
};

const navItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Resources', id: 'resources' },
  { icon: Star, label: 'Curated', id: 'curated' },
  { icon: Bell, label: 'Notifications', id: 'notifications', badgeValue: 3, badgeVariant: 'info' as const },
  { icon: Zap, label: 'Updates', id: 'updates', badgeText: 'New', badgeVariant: 'success' as const },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

// ===== Helpers =====

function loadOnboardingData(): OnboardingData {
  const stored = localStorage.getItem('onboarding');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fall through to defaults
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

// ===== Sidebar Nav Component =====

function SidebarNav({ activeNav, onNavClick }: {
  activeNav: string;
  onNavClick: (id: string) => void;
}) {
  return (
    <nav className="sidebar-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item${activeNav === item.id ? ' active' : ''}`}
          onClick={() => onNavClick(item.id)}
        >
          <item.icon size={20} />
          <span className="nav-label">{item.label}</span>
          {item.badgeValue != null && (
            <span className="nav-badge">
              <ReactBadge variant={item.badgeVariant} size="sm">{item.badgeValue}</ReactBadge>
            </span>
          )}
          {item.badgeText && (
            <span className="nav-badge">
              <ReactBadge variant={item.badgeVariant} size="sm">{item.badgeText}</ReactBadge>
            </span>
          )}
        </button>
      ))}
    </nav>
  );
}

// ===== Resource Card Component =====

function ResourceCard({ resource, onBookmark }: {
  resource: Resource;
  onBookmark: (id: string) => void;
}) {
  return (
    <ReactCard shadow rounded="md">
      <div className="resource-card">
        <ReactTag variant="info" uppercase>{resource.tag}</ReactTag>
        <h3 className="resource-title">{resource.title}</h3>
        <p className="resource-description">{resource.description}</p>
        <ReactDivider />
        <div className="resource-actions">
          <div className="action-icons">
            <ReactIconButton label="Bookmark" variant="ghost" size="sm" onIconButtonClick={() => onBookmark(resource.id)}>
              <Bookmark size={16} />
            </ReactIconButton>
            <ReactIconButton label="Share" variant="ghost" size="sm">
              <Share2 size={16} />
            </ReactIconButton>
          </div>
          <ReactButton variant="primary" size="sm" shape="rounded">
            View Resource <ArrowRight size={14} style={{ marginLeft: '4px' }} />
          </ReactButton>
        </div>
      </div>
    </ReactCard>
  );
}

// ===== Main App =====

function App() {
  const [onboardingData] = useState<OnboardingData>(loadOnboardingData);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );

  const { selectedPath, selectedInterests, userName } = onboardingData;
  const pathName = selectedPath ? capitalize(selectedPath) : 'Personal';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    if (isDark) {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', 'dark');
    }
    setIsDark(!isDark);
  }

  const curatedResources = allResources.filter((r) =>
    selectedInterests.includes(r.category)
  );

  const hasInterests = selectedInterests.length > 0;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Dashboard', href: '#' },
    { label: `${pathName} Path`, current: true },
  ];

  const workflows = workflowsByPath[selectedPath || 'personal'] || workflowsByPath.personal;
  const alert = alertByPath[selectedPath || 'personal'] || alertByPath.personal;

  function handleBookmark(id: string) {
    const resource = allResources.find((r) => r.id === id);
    if (resource) {
      setToastMessage(`Bookmarked "${resource.title}"`);
      setToastOpen(true);
    }
  }

  function handleNavClick(id: string) {
    setActiveNav(id);
    setSidebarOpen(false);
  }

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-inner">
          <div className="header-left">
            <button
              className="menu-toggle"
              aria-label="Toggle sidebar"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <img src={isDark ? '/logo-dark-mode.svg' : '/logo.svg'} alt="AgnosticUI" className="header-logo" />
          </div>
          <div className="header-center">
            <div style={{ position: 'relative' }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: 'var(--ag-space-3)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--ag-text-secondary)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Search resources..."
                style={{
                  width: '100%',
                  padding: 'var(--ag-space-2) var(--ag-space-3) var(--ag-space-2) var(--ag-space-8)',
                  border: '1px solid var(--ag-border)',
                  borderRadius: 'var(--ag-radius-md)',
                  fontSize: 'var(--ag-font-size-sm)',
                  background: 'var(--ag-background-primary)',
                  color: 'var(--ag-text-primary)',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />
            </div>
          </div>
          <div className="header-right">
            <div className="notification-wrapper">
              <Bell size={20} style={{ color: 'var(--ag-text-secondary)' }} />
              <ReactBadge variant="info" size="xs">3</ReactBadge>
            </div>
            <button
              className="theme-toggle"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <ReactAvatar text="JD" size="sm" />
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Sidebar */}
      <aside className="dashboard-sidebar">
        <SidebarNav activeNav={activeNav} onNavClick={handleNavClick} />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`mobile-sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="mobile-sidebar-header">
          <img src={isDark ? '/logo-dark-mode.svg' : '/logo.svg'} alt="AgnosticUI" />
          <button
            className="close-sidebar"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <SidebarNav activeNav={activeNav} onNavClick={handleNavClick} />
      </div>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <ReactBreadcrumb items={breadcrumbItems} type="slash" />
        </div>

        {/* Welcome Hero */}
        <section className="welcome-hero">
          <div className="welcome-inner">
            <div>
              <h2 className="welcome-title">Welcome back, {userName}!</h2>
              <p className="welcome-subtitle">
                Here's what's new in your {pathName} dashboard
              </p>
            </div>
            <div className="setup-progress">
              <span className="progress-label">Setup Completion</span>
              <ReactProgress value={66} max={100} label="Setup completion" />
              <span className="progress-value">66%</span>
            </div>
          </div>
        </section>

        {/* Path Alert */}
        <div className="alert-section">
          <ReactAlert variant={alert.variant} borderedLeft>
            {alert.content}
          </ReactAlert>
        </div>

        {/* Content Feed */}
        {!hasInterests ? (
          <div className="empty-state-wrapper">
            <ReactEmptyState
              title="No Interests Selected"
              subtitle="Complete the onboarding wizard to get personalized content recommendations."
            >
              <div slot="actions">
                <ReactButton variant="primary" shape="rounded">
                  Complete Onboarding <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                </ReactButton>
              </div>
            </ReactEmptyState>
          </div>
        ) : (
          <div className="tabs-section">
            <ReactTabs aria-label="Content feed">
              <ReactTab slot="tab" panel="curated">Curated for You</ReactTab>
              <ReactTab slot="tab" panel="all">All Resources</ReactTab>
              <ReactTabPanel slot="panel">
                {isLoading ? (
                  <div className="skeleton-grid">
                    <ReactSkeletonLoader variant="rounded" width="100%" height="250px" />
                    <ReactSkeletonLoader variant="rounded" width="100%" height="250px" />
                    <ReactSkeletonLoader variant="rounded" width="100%" height="250px" />
                  </div>
                ) : (
                  <div className="card-grid">
                    {curatedResources.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        resource={resource}
                        onBookmark={handleBookmark}
                      />
                    ))}
                  </div>
                )}
              </ReactTabPanel>
              <ReactTabPanel slot="panel">
                {isLoading ? (
                  <div className="skeleton-grid">
                    <ReactSkeletonLoader variant="rounded" width="100%" height="250px" />
                    <ReactSkeletonLoader variant="rounded" width="100%" height="250px" />
                    <ReactSkeletonLoader variant="rounded" width="100%" height="250px" />
                  </div>
                ) : (
                  <div className="card-grid">
                    {allResources.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        resource={resource}
                        onBookmark={handleBookmark}
                      />
                    ))}
                  </div>
                )}
              </ReactTabPanel>
            </ReactTabs>
          </div>
        )}

        {/* Divider */}
        <div className="section-divider">
          <ReactDivider />
        </div>

        {/* Suggested Workflows */}
        <h3 className="section-title">Suggested Workflows</h3>
        <ReactAccordion>
          {workflows.map((wf, i) => (
            <AccordionItem key={i} bordered>
              <ItemHeader>
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--ag-space-2)' }}>
                  <ChevronRight size={16} />
                  {wf.header}
                </span>
              </ItemHeader>
              <ItemContent>
                <p style={{ margin: '0 0 var(--ag-space-4) 0', color: 'var(--ag-text-secondary)', fontSize: 'var(--ag-font-size-sm)' }}>
                  {wf.content}
                </p>
                <ReactButton variant="primary" size="sm" shape="rounded">
                  {wf.cta}
                </ReactButton>
              </ItemContent>
            </AccordionItem>
          ))}
        </ReactAccordion>
      </main>

      {/* Toast for bookmark feedback */}
      <ReactToast
        open={toastOpen}
        type="success"
        position="bottom-end"
        duration={3000}
        onToastClose={() => setToastOpen(false)}
        onToastDismiss={() => setToastOpen(false)}
      >
        {toastMessage}
      </ReactToast>
    </div>
  );
}

export default App;

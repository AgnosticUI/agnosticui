<template>
  <div class="dashboard-layout">
    <!-- Header -->
    <div class="dashboard-header">
      <div class="header-inner">
        <div class="header-left">
          <button
            class="menu-toggle"
            aria-label="Toggle sidebar"
            @click="sidebarOpen = true"
          >
            <Menu :size="24" />
          </button>
          <img :src="isDark ? '/logo-dark-mode.svg' : '/logo.svg'" alt="AgnosticUI" class="header-logo" />
        </div>
        <div class="header-center">
          <div style="position: relative">
            <Search
              :size="16"
              :style="{
                position: 'absolute',
                left: 'var(--ag-space-3)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--ag-text-secondary)',
                pointerEvents: 'none',
              }"
            />
            <input
              type="text"
              placeholder="Search resources..."
              :style="{
                width: '100%',
                padding: 'var(--ag-space-2) var(--ag-space-3) var(--ag-space-2) var(--ag-space-8)',
                border: '1px solid var(--ag-border)',
                borderRadius: 'var(--ag-radius-md)',
                fontSize: 'var(--ag-font-size-sm)',
                background: 'var(--ag-background-primary)',
                color: 'var(--ag-text-primary)',
                fontFamily: 'inherit',
                outline: 'none',
              }"
            />
          </div>
        </div>
        <div class="header-right">
          <div class="notification-wrapper">
            <Bell :size="20" :style="{ color: 'var(--ag-text-secondary)' }" />
            <VueBadge variant="info" size="xs">3</VueBadge>
          </div>
          <button
            class="theme-toggle"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>
          <VueAvatar text="JD" size="sm" />
        </div>
      </div>
    </div>

    <!-- Desktop/Tablet Sidebar -->
    <aside class="dashboard-sidebar">
      <nav class="sidebar-nav">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="['nav-item', { active: activeNav === item.id }]"
          @click="handleNavClick(item.id)"
        >
          <component :is="item.icon" :size="20" />
          <span class="nav-label">{{ item.label }}</span>
          <span v-if="item.badgeValue != null" class="nav-badge">
            <VueBadge :variant="item.badgeVariant" size="sm">{{ item.badgeValue }}</VueBadge>
          </span>
          <span v-if="item.badgeText" class="nav-badge">
            <VueBadge :variant="item.badgeVariant" size="sm">{{ item.badgeText }}</VueBadge>
          </span>
        </button>
      </nav>
    </aside>

    <!-- Mobile Sidebar Overlay -->
    <div v-if="sidebarOpen" class="sidebar-overlay" @click="sidebarOpen = false" />
    <div :class="['mobile-sidebar', { open: sidebarOpen }]">
      <div class="mobile-sidebar-header">
        <img :src="isDark ? '/logo-dark-mode.svg' : '/logo.svg'" alt="AgnosticUI" />
        <button class="close-sidebar" aria-label="Close sidebar" @click="sidebarOpen = false">
          <X :size="20" />
        </button>
      </div>
      <nav class="sidebar-nav">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="['nav-item', { active: activeNav === item.id }]"
          @click="handleNavClick(item.id)"
        >
          <component :is="item.icon" :size="20" />
          <span class="nav-label">{{ item.label }}</span>
          <span v-if="item.badgeValue != null" class="nav-badge">
            <VueBadge :variant="item.badgeVariant" size="sm">{{ item.badgeValue }}</VueBadge>
          </span>
          <span v-if="item.badgeText" class="nav-badge">
            <VueBadge :variant="item.badgeVariant" size="sm">{{ item.badgeText }}</VueBadge>
          </span>
        </button>
      </nav>
    </div>

    <!-- Main Content -->
    <main class="dashboard-main">
      <!-- Breadcrumb -->
      <div class="breadcrumb-section">
        <VueBreadcrumb :items="breadcrumbItems" type="slash" />
      </div>

      <!-- Welcome Hero -->
      <section class="welcome-hero">
        <div class="welcome-inner">
          <div>
            <h2 class="welcome-title">Welcome back, {{ userName }}!</h2>
            <p class="welcome-subtitle">
              Here's what's new in your {{ pathName }} dashboard
            </p>
          </div>
          <div class="setup-progress">
            <span class="progress-label">Setup Completion</span>
            <VueProgress :value="66" :max="100" label="Setup completion" />
            <span class="progress-value">66%</span>
          </div>
        </div>
      </section>

      <!-- Path Alert -->
      <div class="alert-section">
        <VueAlert :variant="currentAlert.variant" bordered-left>
          <span v-html="currentAlert.content"></span>
        </VueAlert>
      </div>

      <!-- Content Feed -->
      <div v-if="!hasInterests" class="empty-state-wrapper">
        <VueEmptyState
          title="No Interests Selected"
          subtitle="Complete the onboarding wizard to get personalized content recommendations."
        >
          <div slot="actions">
            <VueButton variant="primary" shape="rounded">
              Complete Onboarding <ArrowRight :size="14" style="margin-left: 4px" />
            </VueButton>
          </div>
        </VueEmptyState>
      </div>

      <div v-else class="tabs-section">
        <VueTabs aria-label="Content feed">
          <VueTab panel="curated">Curated for You</VueTab>
          <VueTab panel="all">All Resources</VueTab>
          <VueTabPanel id="curated">
            <div v-if="isLoading" class="skeleton-grid">
              <VueSkeletonLoader variant="rounded" width="100%" height="250px" />
              <VueSkeletonLoader variant="rounded" width="100%" height="250px" />
              <VueSkeletonLoader variant="rounded" width="100%" height="250px" />
            </div>
            <div v-else class="card-grid">
              <VueCard
                v-for="resource in curatedResources"
                :key="resource.id"
                shadow
                rounded="md"
              >
                <div class="resource-card">
                  <VueTag variant="info" uppercase>{{ resource.tag }}</VueTag>
                  <h3 class="resource-title">{{ resource.title }}</h3>
                  <p class="resource-description">{{ resource.description }}</p>
                  <div class="resource-actions">
                    <div class="action-icons">
                      <VueIconButton label="Bookmark" variant="ghost" size="sm" @icon-button-click="handleBookmark(resource.id)">
                        <Bookmark :size="16" />
                      </VueIconButton>
                      <VueIconButton label="Share" variant="ghost" size="sm">
                        <Share2 :size="16" />
                      </VueIconButton>
                    </div>
                    <VueButton variant="primary" size="sm" shape="rounded">
                      View Resource <ArrowRight :size="14" style="margin-left: 4px" />
                    </VueButton>
                  </div>
                </div>
              </VueCard>
            </div>
          </VueTabPanel>
          <VueTabPanel id="all">
            <div v-if="isLoading" class="skeleton-grid">
              <VueSkeletonLoader variant="rounded" width="100%" height="250px" />
              <VueSkeletonLoader variant="rounded" width="100%" height="250px" />
              <VueSkeletonLoader variant="rounded" width="100%" height="250px" />
            </div>
            <div v-else class="card-grid">
              <VueCard
                v-for="resource in allResources"
                :key="resource.id"
                shadow
                rounded="md"
              >
                <div class="resource-card">
                  <VueTag variant="info" uppercase>{{ resource.tag }}</VueTag>
                  <h3 class="resource-title">{{ resource.title }}</h3>
                  <p class="resource-description">{{ resource.description }}</p>
                  <div class="resource-actions">
                    <div class="action-icons">
                      <VueIconButton label="Bookmark" variant="ghost" size="sm" @icon-button-click="handleBookmark(resource.id)">
                        <Bookmark :size="16" />
                      </VueIconButton>
                      <VueIconButton label="Share" variant="ghost" size="sm">
                        <Share2 :size="16" />
                      </VueIconButton>
                    </div>
                    <VueButton variant="primary" size="sm" shape="rounded">
                      View Resource <ArrowRight :size="14" style="margin-left: 4px" />
                    </VueButton>
                  </div>
                </div>
              </VueCard>
            </div>
          </VueTabPanel>
        </VueTabs>
      </div>

      <!-- Divider -->
      <div class="section-divider">
        <VueDivider />
      </div>

      <!-- Suggested Workflows -->
      <h3 class="section-title">Suggested Workflows</h3>
      <VueAccordion>
        <VueAccordionItem v-for="(wf, i) in workflows" :key="i" bordered>
          <VueAccordionHeader>
            <span style="display: flex; align-items: center; gap: var(--ag-space-2)">
              <ChevronRight :size="16" />
              {{ wf.header }}
            </span>
          </VueAccordionHeader>
          <VueAccordionContent>
            <p :style="{ margin: '0 0 var(--ag-space-4) 0', color: 'var(--ag-text-secondary)', fontSize: 'var(--ag-font-size-sm)' }">
              {{ wf.content }}
            </p>
            <VueButton variant="primary" size="sm" shape="rounded">
              {{ wf.cta }}
            </VueButton>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </main>

    <!-- Toast for bookmark feedback -->
    <VueToast
      :open="toastOpen"
      type="success"
      position="bottom-end"
      :duration="3000"
      @toast-close="toastOpen = false"
      @toast-dismiss="toastOpen = false"
    >
      {{ toastMessage }}
    </VueToast>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  Home, BookOpen, Star, Bell, Zap, Settings, Search, Menu, X,
  Bookmark, Share2, ArrowRight, ChevronRight, Sun, Moon,
} from 'lucide-vue-next';

// AgnosticUI Vue wrappers
import VueBreadcrumb from './components/ag/Breadcrumb/vue/VueBreadcrumb.vue';
import VueAvatar from './components/ag/Avatar/vue/VueAvatar.vue';
import VueBadge from './components/ag/Badge/vue/VueBadge.vue';
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueCard from './components/ag/Card/vue/VueCard.vue';
import VueTag from './components/ag/Tag/vue/VueTag.vue';
import VueIconButton from './components/ag/IconButton/vue/VueIconButton.vue';
import VueDivider from './components/ag/Divider/vue/VueDivider.vue';
import VueProgress from './components/ag/Progress/vue/VueProgress.vue';
import VueAccordion from './components/ag/Accordion/vue/VueAccordion.vue';
import VueAccordionItem from './components/ag/Accordion/vue/VueAccordionItem.vue';
import VueAccordionHeader from './components/ag/Accordion/vue/VueAccordionHeader.vue';
import VueAccordionContent from './components/ag/Accordion/vue/VueAccordionContent.vue';
import VueAlert from './components/ag/Alert/vue/VueAlert.vue';
import VueEmptyState from './components/ag/EmptyState/vue/VueEmptyState.vue';
import VueSkeletonLoader from './components/ag/SkeletonLoader/vue/VueSkeletonLoader.vue';
import VueTabs from './components/ag/Tabs/vue/VueTabs.vue';
import VueTab from './components/ag/Tabs/vue/VueTab.vue';
import VueTabPanel from './components/ag/Tabs/vue/VueTabPanel.vue';
import VueToast from './components/ag/Toast/vue/VueToast.vue';

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

const alertByPath: Record<string, { variant: 'info' | 'warning'; content: string }> = {
  personal: {
    variant: 'info',
    content: '<strong>Getting Started:</strong> Check out our starter templates to jumpstart your personal project.',
  },
  team: {
    variant: 'warning',
    content: '<strong>Team Invitation Pending:</strong> You have 2 pending team invitations. Review them in Settings.',
  },
  enterprise: {
    variant: 'info',
    content: '<strong>Organization Setup:</strong> Complete your organization profile to unlock enterprise features.',
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

// ===== State =====

const onboardingData = loadOnboardingData();
const { selectedPath, selectedInterests, userName } = onboardingData;
const pathName = selectedPath ? capitalize(selectedPath) : 'Personal';

const isLoading = ref(true);
const sidebarOpen = ref(false);
const activeNav = ref('dashboard');
const toastOpen = ref(false);
const toastMessage = ref('');
const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark');

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});

function toggleTheme() {
  const html = document.documentElement;
  if (isDark.value) {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
  isDark.value = !isDark.value;
}

const curatedResources = computed(() =>
  allResources.filter((r) => selectedInterests.includes(r.category))
);

const hasInterests = selectedInterests.length > 0;

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Dashboard', href: '#' },
  { label: `${pathName} Path`, current: true },
];

const workflows = workflowsByPath[selectedPath || 'personal'] || workflowsByPath.personal;
const currentAlert = alertByPath[selectedPath || 'personal'] || alertByPath.personal;

function handleBookmark(id: string) {
  const resource = allResources.find((r) => r.id === id);
  if (resource) {
    toastMessage.value = `Bookmarked "${resource.title}"`;
    toastOpen.value = true;
  }
}

function handleNavClick(id: string) {
  activeNav.value = id;
  sidebarOpen.value = false;
}
</script>

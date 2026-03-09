<template>
  <div class="pbg">
    <a
      v-for="pb in playbooks"
      :key="pb.link"
      :href="pb.link"
      class="pbg-card"
    >
      <span class="pbg-icon">
        <VueIcon size="22" no-fill>
          <component :is="pb.icon" :size="22" />
        </VueIcon>
      </span>
      <span class="pbg-body">
        <span class="pbg-title">{{ pb.title }}</span>
        <span class="pbg-desc">{{ pb.desc }}</span>
      </span>
    </a>
  </div>
</template>

<script setup>
import { VueIcon } from 'agnosticui-core/icon/vue'
import {
  LogIn,
  Compass,
  LayoutDashboard,
  Headphones,
  Table2,
  BookOpen,
  Rocket,
  ClipboardList,
} from 'lucide-vue-next'

const playbooks = [
  {
    link: '/playbooks/login',
    title: 'Login Form',
    desc: 'Split-screen and gradient card variants for authentication flows.',
    icon: LogIn,
  },
  {
    link: '/playbooks/onboarding',
    title: 'Onboarding Wizard',
    desc: 'Multi-step onboarding flow with progress tracking and transitions.',
    icon: Compass,
  },
  {
    link: '/playbooks/dashboard',
    title: 'Discovery Dashboard',
    desc: 'Data-rich dashboard with charts, metrics cards, and activity feeds.',
    icon: LayoutDashboard,
  },
  {
    link: '/playbooks/support',
    title: 'Support Center',
    desc: 'Help desk interface with ticket management and knowledge base search.',
    icon: Headphones,
  },
  {
    link: '/playbooks/grid',
    title: 'Data Grid',
    desc: 'High-performance table with sorting, filtering, and pagination.',
    icon: Table2,
  },
  {
    link: '/playbooks/blog',
    title: 'Blog / Article Reader',
    desc: 'Clean reading experience with navigation, sidebar, and typography focus.',
    icon: BookOpen,
  },
  {
    link: '/playbooks/landing',
    title: 'Landing / Marketing Page',
    desc: 'Conversion-focused marketing page with hero, features, and CTA sections.',
    icon: Rocket,
  },
  {
    link: '/playbooks/form-association',
    title: 'Contact Form (FACE)',
    desc: 'Form-associated custom elements — fully accessible, native form integration.',
    icon: ClipboardList,
  },
]
</script>

<style scoped>
.pbg {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.pbg-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.125rem 1.25rem;
  border: 1.5px solid var(--ag-border, var(--vp-c-divider));
  border-radius: var(--ag-radius-lg, 10px);
  background: var(--ag-background-secondary, var(--vp-c-bg-soft));
  text-decoration: none;
  color: var(--ag-text-primary, var(--vp-c-text-1));
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
}

.pbg-card:hover {
  border-color: var(--ag-primary, var(--vp-c-brand-1));
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-decoration: none;
}

.pbg-icon {
  color: var(--ag-primary, var(--vp-c-brand-1));
  flex-shrink: 0;
  margin-top: 2px;
}

.pbg-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.pbg-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ag-text-primary, var(--vp-c-text-1));
}

.pbg-desc {
  font-size: 0.875rem;
  color: var(--ag-text-secondary, var(--vp-c-text-2));
  line-height: 1.5;
}
</style>

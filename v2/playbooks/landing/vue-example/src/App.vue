<script setup lang="ts">
import { ref } from 'vue'
import SkinSwitcher from './SkinSwitcher.vue'
import { VueHeader } from './components/ag/Header/vue/index.ts'
import { VueAvatar } from './components/ag/Avatar/vue/index.ts'
import { VueBadge } from './components/ag/Badge/vue/index.ts'
import { VueBadgeFx } from './components/ag/BadgeFx/vue/index.ts'
import { VueButton } from './components/ag/Button/vue/index.ts'
import { VueButtonFx } from './components/ag/ButtonFx/vue/index.ts'
import { VueCard } from './components/ag/Card/vue/index.ts'
import { VueDivider } from './components/ag/Divider/vue/index.ts'
import { VueIconButtonFx } from './components/ag/IconButtonFx/vue/index.ts'
import { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent } from './components/ag/Accordion/vue/index.ts'
import { VueTabs, VueTab, VueTabPanel } from './components/ag/Tabs/vue/index.ts'
import { hero, features, testimonials, pricing, faqs } from './data/landing'

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`

const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark')
const pricingTab = ref<'monthly' | 'annual'>('monthly')

function toggleTheme() {
  if (isDark.value) {
    document.documentElement.removeAttribute('data-theme')
    isDark.value = false
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    isDark.value = true
  }
}

const year = new Date().getFullYear()
</script>

<template>
  <SkinSwitcher />

  <!-- Header -->
  <VueHeader content-justify="between">
    <template #logo>
      <span style="font-weight: 700; font-size: 1.125rem; color: var(--ag-primary)">AgnosticUI</span>
    </template>
    <nav class="site-nav">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
    <button class="theme-toggle" aria-label="Toggle theme" @click="toggleTheme">
      <span v-html="isDark ? sunIcon : moonIcon" />
    </button>
    <VueButton variant="primary" size="sm" shape="rounded">Get Started</VueButton>
  </VueHeader>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-badge-wrap">
      <VueBadgeFx variant="info" fx="shimmer" :fx-speed="'xl'">{{ hero.badge }}</VueBadgeFx>
    </div>
    <h1 class="hero-headline">{{ hero.headline }}</h1>
    <p class="hero-sub">{{ hero.subheadline }}</p>
    <div class="hero-actions">
      <VueButtonFx variant="primary" size="lg" shape="rounded" fx="pulse-wobble" fx-speed="lg" fx-ease="spring-md">
        {{ hero.primaryCta }}
      </VueButtonFx>
      <VueButton size="lg" shape="rounded" :bordered="true">{{ hero.secondaryCta }}</VueButton>
    </div>
  </section>

  <!-- Features -->
  <section class="section" id="features">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Features</p>
        <h2 class="section-title">Everything your team needs</h2>
        <p class="section-sub">Production-ready components that adapt to your stack, your brand, and your workflow.</p>
      </div>
      <div class="features-grid">
        <VueCard v-for="f in features" :key="f.id" rounded="lg">
          <VueIconButtonFx :label="f.label" :icon="f.icon" :variant="(f.variant as any)" fx="bounce" fx-ease="spring-md" />
          <p class="feature-card-title">{{ f.title }}</p>
          <p class="feature-card-desc">{{ f.description }}</p>
        </VueCard>
      </div>
    </div>
  </section>

  <VueDivider />

  <!-- Testimonials -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Testimonials</p>
        <h2 class="section-title">Trusted by engineering teams</h2>
      </div>
      <div class="testimonials-grid">
        <VueCard v-for="t in testimonials" :key="t.id" rounded="md" :shadow="true">
          <p class="testimonial-quote">"{{ t.quote }}"</p>
          <div class="testimonial-author">
            <VueAvatar :text="t.initials" :variant="(t.variant as any)" />
            <div>
              <p class="testimonial-name">{{ t.name }}</p>
              <p class="testimonial-role">{{ t.role }}</p>
            </div>
          </div>
        </VueCard>
      </div>
    </div>
  </section>

  <VueDivider />

  <!-- Pricing -->
  <section class="section" id="pricing">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Pricing</p>
        <h2 class="section-title">Simple, transparent pricing</h2>
        <p class="section-sub">Start free. Scale when you're ready.</p>
      </div>
      <div style="display: flex; justify-content: center; margin-bottom: 2rem">
        <VueTabs aria-label="Pricing period">
          <VueTab slot="tab" panel="monthly" @click="pricingTab = 'monthly'">Monthly</VueTab>
          <VueTab slot="tab" panel="annual" @click="pricingTab = 'annual'">Annual (save 20%)</VueTab>
          <VueTabPanel slot="panel" id="monthly" />
          <VueTabPanel slot="panel" id="annual" />
        </VueTabs>
      </div>
      <div class="pricing-grid">
        <VueCard v-for="tier in pricing.tiers" :key="tier.id" rounded="lg" :class="{ featured: tier.featured }">
          <div class="pricing-card-header">
            <p class="pricing-tier-name">{{ tier.name }}</p>
            <VueBadge :variant="tier.badgeVariant">{{ tier.badge }}</VueBadge>
          </div>
          <p class="pricing-price">{{ tier.price[pricingTab] }}</p>
          <p class="pricing-period">{{ pricingTab === 'monthly' ? 'per month' : 'per month, billed annually' }}</p>
          <p class="pricing-desc">{{ tier.description }}</p>
          <ul class="pricing-features">
            <li v-for="(feat, i) in tier.features" :key="i">{{ feat }}</li>
          </ul>
          <VueButton :variant="tier.ctaVariant || undefined" shape="rounded" :full-width="true">{{ tier.cta }}</VueButton>
        </VueCard>
      </div>
    </div>
  </section>

  <VueDivider />

  <!-- FAQ -->
  <section class="section" id="faq">
    <div class="container">
      <div class="section-header">
        <p class="section-label">FAQ</p>
        <h2 class="section-title">Common questions</h2>
      </div>
      <div class="faq-wrap">
        <VueAccordion>
          <VueAccordionItem v-for="faq in faqs" :key="faq.id" :use-chevron="true">
            <VueAccordionHeader>{{ faq.question }}</VueAccordionHeader>
            <VueAccordionContent>{{ faq.answer }}</VueAccordionContent>
          </VueAccordionItem>
        </VueAccordion>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <VueDivider />
      <p class="footer-copy">© {{ year }} AgnosticUI. Built with AgnosticUI components.</p>
    </div>
  </footer>
</template>

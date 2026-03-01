import { LitElement, html } from 'lit'
import { state } from 'lit/decorators.js'

import './components/ag/Header/core/Header'
import './components/ag/Avatar/core/Avatar'
import './components/ag/Badge/core/Badge'
import './components/ag/BadgeFx/core/BadgeFx'
import './components/ag/Button/core/Button'
import './components/ag/ButtonFx/core/ButtonFx'
import './components/ag/Card/core/Card'
import './components/ag/Divider/core/Divider'
import './components/ag/IconButtonFx/core/IconButtonFx'
import './components/ag/Accordion/core/Accordion'
import './components/ag/Tabs/core/Tabs'
import './skin-switcher'
import { hero, features, testimonials, pricing, faqs } from './data/landing'

const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`

export class LandingApp extends LitElement {
  override createRenderRoot() { return this }

  @state() private _isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  @state() private _pricingTab: 'monthly' | 'annual' = 'monthly'

  private _toggleTheme() {
    const root = document.documentElement
    if (this._isDark) { root.removeAttribute('data-theme'); this._isDark = false }
    else { root.setAttribute('data-theme', 'dark'); this._isDark = true }
  }

  override render() {
    const year = new Date().getFullYear()

    return html`
      <skin-switcher></skin-switcher>

      <!-- Header -->
      <ag-header content-justify="between">
        <span slot="logo" style="font-weight:700;font-size:1.125rem;color:var(--ag-primary)">AgnosticUI</span>
        <nav class="site-nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button class="theme-toggle" aria-label="Toggle theme" @click=${() => this._toggleTheme()}>
          ${this._isDark ? sunIcon : moonIcon}
        </button>
        <ag-button variant="primary" size="sm" shape="rounded">Get Started</ag-button>
      </ag-header>

      <!-- Hero -->
      <section class="hero">
        <div class="hero-badge-wrap">
          <ag-badge-fx variant="info" fx="shimmer" fx-speed="xl">${hero.badge}</ag-badge-fx>
        </div>
        <h1 class="hero-headline">${hero.headline}</h1>
        <p class="hero-sub">${hero.subheadline}</p>
        <div class="hero-actions">
          <ag-button-fx variant="primary" size="lg" shape="rounded" fx="pulse-wobble" fx-speed="lg" fx-ease="spring-md">
            ${hero.primaryCta}
          </ag-button-fx>
          <ag-button size="lg" shape="rounded" bordered>${hero.secondaryCta}</ag-button>
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
            ${features.map(f => html`
              <ag-card rounded="lg">
                <ag-icon-button-fx
                  label="${f.label}"
                  icon="${f.icon}"
                  variant="${f.variant}"
                  fx="bounce"
                  fx-ease="spring-md"
                ></ag-icon-button-fx>
                <p class="feature-card-title">${f.title}</p>
                <p class="feature-card-desc">${f.description}</p>
              </ag-card>
            `)}
          </div>
        </div>
      </section>

      <ag-divider></ag-divider>

      <!-- Testimonials -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-label">Testimonials</p>
            <h2 class="section-title">Trusted by engineering teams</h2>
          </div>
          <div class="testimonials-grid">
            ${testimonials.map(t => html`
              <ag-card rounded="md" shadow>
                <p class="testimonial-quote">"${t.quote}"</p>
                <div class="testimonial-author">
                  <ag-avatar text="${t.initials}" variant="${t.variant}"></ag-avatar>
                  <div>
                    <p class="testimonial-name">${t.name}</p>
                    <p class="testimonial-role">${t.role}</p>
                  </div>
                </div>
              </ag-card>
            `)}
          </div>
        </div>
      </section>

      <ag-divider></ag-divider>

      <!-- Pricing -->
      <section class="section" id="pricing">
        <div class="container">
          <div class="section-header">
            <p class="section-label">Pricing</p>
            <h2 class="section-title">Simple, transparent pricing</h2>
            <p class="section-sub">Start free. Scale when you're ready.</p>
          </div>
          <div style="display:flex;justify-content:center;margin-bottom:2rem">
            <ag-tabs aria-label="Pricing period">
              <ag-tab slot="tab" panel="monthly" @click=${() => { this._pricingTab = 'monthly' }}>Monthly</ag-tab>
              <ag-tab slot="tab" panel="annual" @click=${() => { this._pricingTab = 'annual' }}>Annual (save 20%)</ag-tab>
              <ag-tab-panel slot="panel" id="monthly"></ag-tab-panel>
              <ag-tab-panel slot="panel" id="annual"></ag-tab-panel>
            </ag-tabs>
          </div>
          <div class="pricing-grid">
            ${pricing.tiers.map(tier => html`
              <ag-card rounded="lg" class="${tier.featured ? 'featured' : ''}">
                <div class="pricing-card-header">
                  <p class="pricing-tier-name">${tier.name}</p>
                  <ag-badge variant="${tier.badgeVariant}">${tier.badge}</ag-badge>
                </div>
                <p class="pricing-price">${tier.price[this._pricingTab]}</p>
                <p class="pricing-period">${this._pricingTab === 'monthly' ? 'per month' : 'per month, billed annually'}</p>
                <p class="pricing-desc">${tier.description}</p>
                <ul class="pricing-features">
                  ${tier.features.map(f => html`<li>${f}</li>`)}
                </ul>
                <ag-button variant="${tier.ctaVariant}" shape="rounded" full-width>${tier.cta}</ag-button>
              </ag-card>
            `)}
          </div>
        </div>
      </section>

      <ag-divider></ag-divider>

      <!-- FAQ -->
      <section class="section" id="faq">
        <div class="container">
          <div class="section-header">
            <p class="section-label">FAQ</p>
            <h2 class="section-title">Common questions</h2>
          </div>
          <div class="faq-wrap">
            <ag-accordion>
              ${faqs.map(faq => html`
                <ag-accordion-item use-chevron>
                  <span slot="header">${faq.question}</span>
                  <div slot="content">${faq.answer}</div>
                </ag-accordion-item>
              `)}
            </ag-accordion>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <ag-divider></ag-divider>
          <p class="footer-copy">© ${year} AgnosticUI. Built with AgnosticUI components.</p>
        </div>
      </footer>
    `
  }
}

if (!customElements.get('landing-app')) {
  customElements.define('landing-app', LandingApp)
}

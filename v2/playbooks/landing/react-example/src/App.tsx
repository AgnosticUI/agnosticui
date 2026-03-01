import { useState } from 'react'
import { SkinSwitcher } from './SkinSwitcher'
import { ReactHeader } from './components/ag/Header/react/ReactHeader'
import { ReactAvatar } from './components/ag/Avatar/react/ReactAvatar'
import { ReactBadge } from './components/ag/Badge/react/ReactBadge'
import { ReactBadgeFx } from './components/ag/BadgeFx/react/ReactBadgeFx'
import { ReactButton } from './components/ag/Button/react/ReactButton'
import { ReactButtonFx } from './components/ag/ButtonFx/react/ReactButtonFx'
import { ReactCard } from './components/ag/Card/react/ReactCard'
import { ReactDivider } from './components/ag/Divider/react/ReactDivider'
import { ReactIconButtonFx } from './components/ag/IconButtonFx/react/ReactIconButtonFx'
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './components/ag/Accordion/react/ReactAccordion'
import { ReactTabs, ReactTab, ReactTabPanel } from './components/ag/Tabs/react/ReactTabs'
import { hero, features, testimonials, pricing, faqs } from './data/landing'

const sunIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
)
const moonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
)

function App() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  )
  const [pricingTab, setPricingTab] = useState<'monthly' | 'annual'>('monthly')

  function toggleTheme() {
    const html = document.documentElement
    if (isDark) { html.removeAttribute('data-theme'); setIsDark(false) }
    else { html.setAttribute('data-theme', 'dark'); setIsDark(true) }
  }

  return (
    <>
      <SkinSwitcher />

      {/* Header */}
      <ReactHeader contentJustify="between">
        <span slot="logo" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--ag-primary)' }}>
          AgnosticUI
        </span>
        <nav className="site-nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          {isDark ? sunIcon : moonIcon}
        </button>
        <ReactButton variant="primary" size="sm" shape="rounded">Get Started</ReactButton>
      </ReactHeader>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge-wrap">
          <ReactBadgeFx variant="info" fx="shimmer" fxSpeed="xl">
            {hero.badge}
          </ReactBadgeFx>
        </div>
        <h1 className="hero-headline">{hero.headline}</h1>
        <p className="hero-sub">{hero.subheadline}</p>
        <div className="hero-actions">
          <ReactButtonFx variant="primary" size="lg" shape="rounded" fx="pulse-wobble" fxSpeed="lg" fxEase="spring-md">
            {hero.primaryCta}
          </ReactButtonFx>
          <ReactButton size="lg" shape="rounded" bordered>{hero.secondaryCta}</ReactButton>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Features</p>
            <h2 className="section-title">Everything your team needs</h2>
            <p className="section-sub">Production-ready components that adapt to your stack, your brand, and your workflow.</p>
          </div>
          <div className="features-grid">
            {features.map(f => (
              <ReactCard rounded="lg" key={f.id}>
                <ReactIconButtonFx
                  label={f.label}
                  icon={f.icon}
                  variant={f.variant as any}
                  fx="bounce"
                  fxEase="spring-md"
                />
                <p className="feature-card-title">{f.title}</p>
                <p className="feature-card-desc">{f.description}</p>
              </ReactCard>
            ))}
          </div>
        </div>
      </section>

      <ReactDivider />

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">Trusted by engineering teams</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <ReactCard key={t.id} rounded="md" shadow>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <ReactAvatar text={t.initials} variant={t.variant as any} />
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </ReactCard>
            ))}
          </div>
        </div>
      </section>

      <ReactDivider />

      {/* Pricing */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-sub">Start free. Scale when you're ready.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <ReactTabs aria-label="Pricing period">
              <ReactTab slot="tab" panel="monthly" onClick={() => setPricingTab('monthly')}>Monthly</ReactTab>
              <ReactTab slot="tab" panel="annual" onClick={() => setPricingTab('annual')}>Annual (save 20%)</ReactTab>
              <ReactTabPanel slot="panel" id="monthly" />
              <ReactTabPanel slot="panel" id="annual" />
            </ReactTabs>
          </div>
          <div className="pricing-grid">
            {pricing.tiers.map(tier => (
              <ReactCard rounded="lg" className={tier.featured ? 'featured' : ''} key={tier.id}>
                <div className="pricing-card-header">
                  <p className="pricing-tier-name">{tier.name}</p>
                  <ReactBadge variant={tier.badgeVariant}>{tier.badge}</ReactBadge>
                </div>
                <p className="pricing-price">{tier.price[pricingTab]}</p>
                <p className="pricing-period">{pricingTab === 'monthly' ? 'per month' : 'per month, billed annually'}</p>
                <p className="pricing-desc">{tier.description}</p>
                <ul className="pricing-features">
                  {tier.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <ReactButton variant={tier.ctaVariant || undefined} shape="rounded" fullWidth>{tier.cta}</ReactButton>
              </ReactCard>
            ))}
          </div>
        </div>
      </section>

      <ReactDivider />

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div className="faq-wrap">
            <ReactAccordion>
              {faqs.map(faq => (
                <AccordionItem key={faq.id} useChevron>
                  <ItemHeader>{faq.question}</ItemHeader>
                  <ItemContent>{faq.answer}</ItemContent>
                </AccordionItem>
              ))}
            </ReactAccordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <ReactDivider />
          <p className="footer-copy">© {new Date().getFullYear()} AgnosticUI. Built with AgnosticUI components.</p>
        </div>
      </footer>
    </>
  )
}

export default App

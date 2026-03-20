import type { AgNode } from '@agnosticui/schema';

export const fixtureBank: Record<string, AgNode[][]> = {
  'contact-form': [
    // variation 1 — minimal
    [
      { id: 'cf1-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf1-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'jane@example.com',    required: true, rounded: true },
      { id: 'cf1-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'How can we help?',    rows: 4, rounded: true },
      { id: 'cf1-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', children: ['cf1-submit-label'] },
      { id: 'cf1-submit-label', component: 'AgText',   text: 'Send message' },
    ],
    // variation 2 — with phone + subject
    [
      { id: 'cf2-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf2-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'jane@example.com',    required: true, rounded: true },
      { id: 'cf2-phone',        component: 'AgInput',  label: 'Phone',        type: 'tel',      placeholder: '+1 555 000 0000', rounded: true },
      { id: 'cf2-subject',      component: 'AgInput',  label: 'Subject',      type: 'text',     placeholder: 'How can we help?',    required: true, rounded: true },
      { id: 'cf2-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'Tell us more...',     rows: 5, rounded: true },
      { id: 'cf2-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', children: ['cf2-submit-label'] },
      { id: 'cf2-submit-label', component: 'AgText',   text: 'Submit' },
    ],
    // variation 3 — with newsletter opt-in
    [
      { id: 'cf3-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf3-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'jane@example.com',    required: true, rounded: true },
      { id: 'cf3-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'How can we help?',    rows: 4, rounded: true },
      { id: 'cf3-newsletter',   component: 'AgToggle', label: 'Send me updates and news' },
      { id: 'cf3-divider',      component: 'AgDivider' },
      { id: 'cf3-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', children: ['cf3-submit-label'] },
      { id: 'cf3-submit-label', component: 'AgText',   text: 'Get in touch' },
    ],
    // variation 4 — with company + priority
    [
      { id: 'cf4-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf4-company',      component: 'AgInput',  label: 'Company',      type: 'text',     placeholder: 'Acme Corp', rounded: true },
      { id: 'cf4-email',        component: 'AgInput',  label: 'Work email',   type: 'email',    placeholder: 'jane@acme.com',       required: true, rounded: true },
      { id: 'cf4-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'Describe your issue', rows: 4, rounded: true },
      { id: 'cf4-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', children: ['cf4-submit-label'] },
      { id: 'cf4-submit-label', component: 'AgText',   text: 'Send request' },
    ],
    // variation 5 — with badge heading + divider
    [
      { id: 'cf5-heading',      component: 'AgText',   text: 'Contact Sales', el: 'h2' },
      { id: 'cf5-badge',        component: 'AgBadge',  variant: 'primary',    children: ['cf5-badge-text'] },
      { id: 'cf5-badge-text',   component: 'AgText',   text: 'Responds in 24h' },
      { id: 'cf5-divider',      component: 'AgDivider' },
      { id: 'cf5-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf5-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'jane@example.com',    required: true, rounded: true },
      { id: 'cf5-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'How can we help?',    rows: 4, rounded: true },
      { id: 'cf5-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', fullWidth: true, children: ['cf5-submit-label'] },
      { id: 'cf5-submit-label', component: 'AgText',   text: 'Send message' },
    ],
  ],

  'login-form': [
    // variation 1 — minimal
    [
      { id: 'lf1-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'you@example.com',  required: true, rounded: true },
      { id: 'lf1-password',     component: 'AgInput',  label: 'Password',     type: 'password', required: true, rounded: true },
      { id: 'lf1-remember',     component: 'AgToggle', label: 'Remember me' },
      { id: 'lf1-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', children: ['lf1-submit-label'] },
      { id: 'lf1-submit-label', component: 'AgText',   text: 'Sign in' },
    ],
    // variation 2 — with forgot password link
    [
      { id: 'lf2-heading',      component: 'AgText',   text: 'Welcome back',  el: 'h2' },
      { id: 'lf2-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'you@example.com',  required: true, rounded: true },
      { id: 'lf2-password',     component: 'AgInput',  label: 'Password',     type: 'password', required: true, rounded: true },
      { id: 'lf2-forgot',       component: 'AgLink',   href: '#',             children: ['lf2-forgot-text'] },
      { id: 'lf2-forgot-text',  component: 'AgText',   text: 'Forgot password?' },
      { id: 'lf2-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', fullWidth: true, children: ['lf2-submit-label'] },
      { id: 'lf2-submit-label', component: 'AgText',   text: 'Sign in' },
    ],
    // variation 3 — with divider and alternate copy
    [
      { id: 'lf3-email',        component: 'AgInput',  label: 'Email address', type: 'email',   placeholder: 'you@example.com',  required: true, rounded: true },
      { id: 'lf3-password',     component: 'AgInput',  label: 'Password',      type: 'password', required: true, rounded: true },
      { id: 'lf3-divider',      component: 'AgDivider' },
      { id: 'lf3-submit',       component: 'AgButton', variant: 'primary',     type: 'submit',  shape: 'rounded', children: ['lf3-submit-label'] },
      { id: 'lf3-submit-label', component: 'AgText',   text: 'Log in to your account' },
    ],
    // variation 4 — with terms checkbox
    [
      { id: 'lf4-email',        component: 'AgInput',    label: 'Email',    type: 'email',    placeholder: 'you@example.com',           required: true, rounded: true },
      { id: 'lf4-password',     component: 'AgInput',    label: 'Password', type: 'password', required: true, rounded: true },
      { id: 'lf4-terms',        component: 'AgCheckbox', name: 'terms',     value: 'agreed',  labelText: 'I agree to the terms of service', required: true },
      { id: 'lf4-submit',       component: 'AgButton',   variant: 'primary', type: 'submit',  shape: 'rounded', children: ['lf4-submit-label'] },
      { id: 'lf4-submit-label', component: 'AgText',     text: 'Create account' },
    ],
    // variation 5 — with badge + full-width button
    [
      { id: 'lf5-badge',        component: 'AgBadge',  variant: 'success',  children: ['lf5-badge-text'] },
      { id: 'lf5-badge-text',   component: 'AgText',   text: 'Secure login' },
      { id: 'lf5-email',        component: 'AgInput',  label: 'Email',      type: 'email',    placeholder: 'you@example.com', required: true, rounded: true },
      { id: 'lf5-password',     component: 'AgInput',  label: 'Password',   type: 'password', required: true, rounded: true },
      { id: 'lf5-remember',     component: 'AgToggle', label: 'Stay signed in' },
      { id: 'lf5-submit',       component: 'AgButton', variant: 'primary',  type: 'submit',   shape: 'rounded', fullWidth: true, children: ['lf5-submit-label'] },
      { id: 'lf5-submit-label', component: 'AgText',   text: 'Sign in' },
    ],
  ],

  'pricing-card': [
    // variation 1 — Pro plan
    [
      { id: 'pc1-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc1-badge', 'pc1-title', 'pc1-price', 'pc1-divider', 'pc1-cta'] },
      { id: 'pc1-badge',       component: 'AgBadge',   variant: 'primary',  children: ['pc1-badge-text'] },
      { id: 'pc1-badge-text',  component: 'AgText',    text: 'Most popular' },
      { id: 'pc1-title',       component: 'AgText',    text: 'Pro plan',    el: 'h2' },
      { id: 'pc1-price',       component: 'AgText',    text: '$12 / month', el: 'p' },
      { id: 'pc1-divider',     component: 'AgDivider' },
      { id: 'pc1-cta',         component: 'AgButton',  variant: 'primary',  shape: 'rounded', fullWidth: true, children: ['pc1-cta-label'] },
      { id: 'pc1-cta-label',   component: 'AgText',    text: 'Get started' },
    ],
    // variation 2 — Starter plan
    [
      { id: 'pc2-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc2-title', 'pc2-price', 'pc2-desc', 'pc2-divider', 'pc2-cta'] },
      { id: 'pc2-title',       component: 'AgText',    text: 'Starter',     el: 'h2' },
      { id: 'pc2-price',       component: 'AgText',    text: '$5 / month',  el: 'p' },
      { id: 'pc2-desc',        component: 'AgText',    text: 'Perfect for individuals and small projects', el: 'p' },
      { id: 'pc2-divider',     component: 'AgDivider' },
      { id: 'pc2-cta',         component: 'AgButton',  bordered: true,      shape: 'rounded', fullWidth: true, children: ['pc2-cta-label'] },
      { id: 'pc2-cta-label',   component: 'AgText',    text: 'Start free trial' },
    ],
    // variation 3 — Enterprise
    [
      { id: 'pc3-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc3-badge', 'pc3-title', 'pc3-price', 'pc3-divider', 'pc3-cta'] },
      { id: 'pc3-badge',       component: 'AgBadge',   variant: 'warning',  children: ['pc3-badge-text'] },
      { id: 'pc3-badge-text',  component: 'AgText',    text: 'Enterprise' },
      { id: 'pc3-title',       component: 'AgText',    text: 'Custom pricing', el: 'h2' },
      { id: 'pc3-price',       component: 'AgText',    text: 'Contact us',  el: 'p' },
      { id: 'pc3-divider',     component: 'AgDivider' },
      { id: 'pc3-cta',         component: 'AgButton',  variant: 'primary',  shape: 'rounded', fullWidth: true, children: ['pc3-cta-label'] },
      { id: 'pc3-cta-label',   component: 'AgText',    text: 'Talk to sales' },
    ],
    // variation 4 — Annual plan
    [
      { id: 'pc4-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc4-badge', 'pc4-title', 'pc4-price', 'pc4-saving', 'pc4-divider', 'pc4-cta'] },
      { id: 'pc4-badge',       component: 'AgBadge',   variant: 'success',  children: ['pc4-badge-text'] },
      { id: 'pc4-badge-text',  component: 'AgText',    text: 'Save 20%' },
      { id: 'pc4-title',       component: 'AgText',    text: 'Annual plan',   el: 'h2' },
      { id: 'pc4-price',       component: 'AgText',    text: '$99 / year',    el: 'p' },
      { id: 'pc4-saving',      component: 'AgText',    text: 'Billed annually — that\'s $8.25/mo', el: 'p' },
      { id: 'pc4-divider',     component: 'AgDivider' },
      { id: 'pc4-cta',         component: 'AgButton',  variant: 'primary',    shape: 'rounded', fullWidth: true, children: ['pc4-cta-label'] },
      { id: 'pc4-cta-label',   component: 'AgText',    text: 'Get annual plan' },
    ],
    // variation 5 — Team plan
    [
      { id: 'pc5-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc5-title', 'pc5-price', 'pc5-desc', 'pc5-divider', 'pc5-cta-primary', 'pc5-cta-secondary'] },
      { id: 'pc5-title',       component: 'AgText',    text: 'Team plan',       el: 'h2' },
      { id: 'pc5-price',       component: 'AgText',    text: '$8 / user / month', el: 'p' },
      { id: 'pc5-desc',        component: 'AgText',    text: 'Minimum 5 seats — scales as your team grows', el: 'p' },
      { id: 'pc5-divider',     component: 'AgDivider' },
      { id: 'pc5-cta-primary',    component: 'AgButton', variant: 'primary',  shape: 'rounded', fullWidth: true, children: ['pc5-cta-primary-label'] },
      { id: 'pc5-cta-primary-label', component: 'AgText', text: 'Start team trial' },
      { id: 'pc5-cta-secondary',   component: 'AgButton', bordered: true,      shape: 'rounded', fullWidth: true, children: ['pc5-cta-secondary-label'] },
      { id: 'pc5-cta-secondary-label', component: 'AgText', text: 'View all plans' },
    ],
  ],
};

export function pickVariation(workflow: string): AgNode[] {
  const variations = fixtureBank[workflow];
  if (!variations?.length) return fixtureBank['contact-form'][0];
  return variations[Math.floor(Math.random() * variations.length)];
}

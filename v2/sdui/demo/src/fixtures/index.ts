import type { AgNode } from '@agnosticui/schema';

// Wizard step 1 is shared between fixtureBank (initial render) and
// confirmFixtures (so WZ_RESTART can navigate back to it).
const wzStep1: AgNode[] = [
  { id: 'wz1-heading',           component: 'AgText',    text: 'Set up your account',                        el: 'h2' },
  { id: 'wz1-sub',               component: 'AgText',    text: 'Choose your account type to get started.',   el: 'p' },
  { id: 'wz1-badge',             component: 'AgBadge',   variant: 'info',  children: ['wz1-badge-text'] },
  { id: 'wz1-badge-text',        component: 'AgText',    text: 'Step 1 of 3' },
  { id: 'wz1-divider',           component: 'AgDivider' },
  { id: 'wz1-btn-personal',      component: 'AgButton',  variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'WZ_PLAN_PERSONAL', children: ['wz1-btn-personal-label'] },
  { id: 'wz1-btn-personal-label', component: 'AgText',   text: 'Personal account' },
  { id: 'wz1-btn-team',          component: 'AgButton',  bordered: true,     shape: 'rounded', fullWidth: true, on_click: 'WZ_PLAN_TEAM',     children: ['wz1-btn-team-label'] },
  { id: 'wz1-btn-team-label',    component: 'AgText',    text: 'Team account' },
];

export const fixtureBank: Record<string, AgNode[][]> = {
  'contact-form': [
    // variation 1 — minimal
    [
      { id: 'cf1-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf1-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'jane@example.com',    required: true, rounded: true },
      { id: 'cf1-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'How can we help?',    rows: 4, rounded: true },
      { id: 'cf1-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', on_click: 'SUBMIT_FORM', children: ['cf1-submit-label'] },
      { id: 'cf1-submit-label', component: 'AgText',   text: 'Send message' },
    ],
    // variation 2 — with phone + subject
    [
      { id: 'cf2-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf2-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'jane@example.com',    required: true, rounded: true },
      { id: 'cf2-phone',        component: 'AgInput',  label: 'Phone',        type: 'tel',      placeholder: '+1 555 000 0000', rounded: true },
      { id: 'cf2-subject',      component: 'AgInput',  label: 'Subject',      type: 'text',     placeholder: 'How can we help?',    required: true, rounded: true },
      { id: 'cf2-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'Tell us more...',     rows: 5, rounded: true },
      { id: 'cf2-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', on_click: 'SUBMIT_FORM', children: ['cf2-submit-label'] },
      { id: 'cf2-submit-label', component: 'AgText',   text: 'Submit' },
    ],
    // variation 3 — with newsletter opt-in
    [
      { id: 'cf3-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf3-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'jane@example.com',    required: true, rounded: true },
      { id: 'cf3-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'How can we help?',    rows: 4, rounded: true },
      { id: 'cf3-newsletter',   component: 'AgToggle', label: 'Send me updates and news' },
      { id: 'cf3-divider',      component: 'AgDivider' },
      { id: 'cf3-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', on_click: 'SUBMIT_FORM', children: ['cf3-submit-label'] },
      { id: 'cf3-submit-label', component: 'AgText',   text: 'Get in touch' },
    ],
    // variation 4 — with company + priority
    [
      { id: 'cf4-name',         component: 'AgInput',  label: 'Full name',    type: 'text',     placeholder: 'Jane Smith',          required: true, rounded: true },
      { id: 'cf4-company',      component: 'AgInput',  label: 'Company',      type: 'text',     placeholder: 'Acme Corp', rounded: true },
      { id: 'cf4-email',        component: 'AgInput',  label: 'Work email',   type: 'email',    placeholder: 'jane@acme.com',       required: true, rounded: true },
      { id: 'cf4-msg',          component: 'AgInput',  label: 'Message',      type: 'text',     placeholder: 'Describe your issue', rows: 4, rounded: true },
      { id: 'cf4-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', on_click: 'SUBMIT_FORM', children: ['cf4-submit-label'] },
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
      { id: 'cf5-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', fullWidth: true, on_click: 'SUBMIT_FORM', children: ['cf5-submit-label'] },
      { id: 'cf5-submit-label', component: 'AgText',   text: 'Send message' },
    ],
  ],

  'login-form': [
    // variation 1 — minimal
    [
      { id: 'lf1-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'you@example.com',  required: true, rounded: true },
      { id: 'lf1-password',     component: 'AgInput',  label: 'Password',     type: 'password', required: true, rounded: true },
      { id: 'lf1-remember',     component: 'AgToggle', label: 'Remember me' },
      { id: 'lf1-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', on_click: 'SUBMIT_LOGIN', children: ['lf1-submit-label'] },
      { id: 'lf1-submit-label', component: 'AgText',   text: 'Sign in' },
    ],
    // variation 2 — with forgot password link
    [
      { id: 'lf2-heading',      component: 'AgText',   text: 'Welcome back',  el: 'h2' },
      { id: 'lf2-email',        component: 'AgInput',  label: 'Email',        type: 'email',    placeholder: 'you@example.com',  required: true, rounded: true },
      { id: 'lf2-password',     component: 'AgInput',  label: 'Password',     type: 'password', required: true, rounded: true },
      { id: 'lf2-forgot',       component: 'AgLink',   href: '#',             children: ['lf2-forgot-text'] },
      { id: 'lf2-forgot-text',  component: 'AgText',   text: 'Forgot password?' },
      { id: 'lf2-submit',       component: 'AgButton', variant: 'primary',    type: 'submit',   shape: 'rounded', fullWidth: true, on_click: 'SUBMIT_LOGIN', children: ['lf2-submit-label'] },
      { id: 'lf2-submit-label', component: 'AgText',   text: 'Sign in' },
    ],
    // variation 3 — with divider and alternate copy
    [
      { id: 'lf3-email',        component: 'AgInput',  label: 'Email address', type: 'email',   placeholder: 'you@example.com',  required: true, rounded: true },
      { id: 'lf3-password',     component: 'AgInput',  label: 'Password',      type: 'password', required: true, rounded: true },
      { id: 'lf3-divider',      component: 'AgDivider' },
      { id: 'lf3-submit',       component: 'AgButton', variant: 'primary',     type: 'submit',  shape: 'rounded', on_click: 'SUBMIT_LOGIN', children: ['lf3-submit-label'] },
      { id: 'lf3-submit-label', component: 'AgText',   text: 'Log in to your account' },
    ],
    // variation 4 — with terms checkbox
    [
      { id: 'lf4-email',        component: 'AgInput',    label: 'Email',    type: 'email',    placeholder: 'you@example.com',           required: true, rounded: true },
      { id: 'lf4-password',     component: 'AgInput',    label: 'Password', type: 'password', required: true, rounded: true },
      { id: 'lf4-terms',        component: 'AgCheckbox', name: 'terms',     value: 'agreed',  labelText: 'I agree to the terms of service', required: true },
      { id: 'lf4-submit',       component: 'AgButton',   variant: 'primary', type: 'submit',  shape: 'rounded', on_click: 'SUBMIT_LOGIN', children: ['lf4-submit-label'] },
      { id: 'lf4-submit-label', component: 'AgText',     text: 'Create account' },
    ],
    // variation 5 — with badge + full-width button
    [
      { id: 'lf5-badge',        component: 'AgBadge',  variant: 'success',  children: ['lf5-badge-text'] },
      { id: 'lf5-badge-text',   component: 'AgText',   text: 'Secure login' },
      { id: 'lf5-email',        component: 'AgInput',  label: 'Email',      type: 'email',    placeholder: 'you@example.com', required: true, rounded: true },
      { id: 'lf5-password',     component: 'AgInput',  label: 'Password',   type: 'password', required: true, rounded: true },
      { id: 'lf5-remember',     component: 'AgToggle', label: 'Stay signed in' },
      { id: 'lf5-submit',       component: 'AgButton', variant: 'primary',  type: 'submit',   shape: 'rounded', fullWidth: true, on_click: 'SUBMIT_LOGIN', children: ['lf5-submit-label'] },
      { id: 'lf5-submit-label', component: 'AgText',   text: 'Sign in' },
    ],
  ],

  'account-setup': [wzStep1],

  'pricing-card': [
    // variation 1 — Pro plan
    [
      { id: 'pc1-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc1-badge', 'pc1-title', 'pc1-price', 'pc1-divider', 'pc1-cta'] },
      { id: 'pc1-badge',       component: 'AgBadge',   variant: 'primary',  children: ['pc1-badge-text'] },
      { id: 'pc1-badge-text',  component: 'AgText',    text: 'Most popular' },
      { id: 'pc1-title',       component: 'AgText',    text: 'Pro plan',    el: 'h2' },
      { id: 'pc1-price',       component: 'AgText',    text: '$12 / month', el: 'p' },
      { id: 'pc1-divider',     component: 'AgDivider' },
      { id: 'pc1-cta',         component: 'AgButton',  variant: 'primary',  shape: 'rounded', fullWidth: true, on_click: 'START_TRIAL', children: ['pc1-cta-label'] },
      { id: 'pc1-cta-label',   component: 'AgText',    text: 'Get started' },
    ],
    // variation 2 — Starter plan
    [
      { id: 'pc2-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc2-title', 'pc2-price', 'pc2-desc', 'pc2-divider', 'pc2-cta'] },
      { id: 'pc2-title',       component: 'AgText',    text: 'Starter',     el: 'h2' },
      { id: 'pc2-price',       component: 'AgText',    text: '$5 / month',  el: 'p' },
      { id: 'pc2-desc',        component: 'AgText',    text: 'Perfect for individuals and small projects', el: 'p' },
      { id: 'pc2-divider',     component: 'AgDivider' },
      { id: 'pc2-cta',         component: 'AgButton',  bordered: true,      shape: 'rounded', fullWidth: true, on_click: 'START_TRIAL', children: ['pc2-cta-label'] },
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
      { id: 'pc3-cta',         component: 'AgButton',  variant: 'primary',  shape: 'rounded', fullWidth: true, on_click: 'START_TRIAL', children: ['pc3-cta-label'] },
      { id: 'pc3-cta-label',   component: 'AgText',    text: 'Talk to sales' },
    ],
    // variation 4 — Annual plan
    [
      { id: 'pc4-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc4-badge', 'pc4-title', 'pc4-price', 'pc4-saving', 'pc4-divider', 'pc4-cta'] },
      { id: 'pc4-badge',       component: 'AgBadge',   variant: 'success',  children: ['pc4-badge-text'] },
      { id: 'pc4-badge-text',  component: 'AgText',    text: 'Save 20%' },
      { id: 'pc4-title',       component: 'AgText',    text: 'Annual plan',   el: 'h2' },
      { id: 'pc4-price',       component: 'AgText',    text: '$99 / year',    el: 'p' },
      { id: 'pc4-saving',      component: 'AgText',    text: 'Billed annually, that\'s $8.25/mo', el: 'p' },
      { id: 'pc4-divider',     component: 'AgDivider' },
      { id: 'pc4-cta',         component: 'AgButton',  variant: 'primary',    shape: 'rounded', fullWidth: true, on_click: 'START_TRIAL', children: ['pc4-cta-label'] },
      { id: 'pc4-cta-label',   component: 'AgText',    text: 'Get annual plan' },
    ],
    // variation 5 — Team plan (two CTAs: trial + view plans)
    [
      { id: 'pc5-card',        component: 'AgCard',    shadow: true, rounded: 'md', children: ['pc5-title', 'pc5-price', 'pc5-desc', 'pc5-divider', 'pc5-cta-primary', 'pc5-cta-secondary'] },
      { id: 'pc5-title',       component: 'AgText',    text: 'Team plan',       el: 'h2' },
      { id: 'pc5-price',       component: 'AgText',    text: '$8 / user / month', el: 'p' },
      { id: 'pc5-desc',        component: 'AgText',    text: 'Minimum 5 seats, scales as your team grows', el: 'p' },
      { id: 'pc5-divider',     component: 'AgDivider' },
      { id: 'pc5-cta-primary',    component: 'AgButton', variant: 'primary',  shape: 'rounded', fullWidth: true, on_click: 'START_TRIAL', children: ['pc5-cta-primary-label'] },
      { id: 'pc5-cta-primary-label', component: 'AgText', text: 'Start team trial' },
      { id: 'pc5-cta-secondary',   component: 'AgButton', bordered: true,      shape: 'rounded', fullWidth: true, on_click: 'VIEW_PLANS', children: ['pc5-cta-secondary-label'] },
      { id: 'pc5-cta-secondary-label', component: 'AgText', text: 'View all plans' },
    ],
  ],
};

// Step-2 confirmation fixtures — single screens shown after an action fires.
// The renderer is stateless; only the node array swaps.
export const confirmFixtures: Record<string, AgNode[]> = {
  'contact-form-confirm': [
    { id: 'cf-ok-alert',    component: 'AgAlert',  variant: 'success', bordered: true, rounded: true, children: ['cf-ok-alert-text'] },
    { id: 'cf-ok-alert-text', component: 'AgText', text: "You're now signed up! We'll be in touch within 24 hours." },
    { id: 'cf-ok-card',    component: 'AgCard',   shadow: true, rounded: 'md', children: ['cf-ok-heading', 'cf-ok-body'] },
    { id: 'cf-ok-heading', component: 'AgText',   text: 'Message received', el: 'h2' },
    { id: 'cf-ok-body',    component: 'AgText',   text: 'Our team will review your message and get back to you shortly. Check your inbox for a confirmation email.', el: 'p' },
  ],

  'login-form-confirm': [
    { id: 'lf-ok-card',    component: 'AgCard',   shadow: true, rounded: 'md', children: ['lf-ok-badge', 'lf-ok-heading', 'lf-ok-body'] },
    { id: 'lf-ok-badge',   component: 'AgBadge',  variant: 'success', children: ['lf-ok-badge-text'] },
    { id: 'lf-ok-badge-text', component: 'AgText', text: 'Authenticated' },
    { id: 'lf-ok-heading', component: 'AgText',   text: 'Welcome back!', el: 'h2' },
    { id: 'lf-ok-body',    component: 'AgText',   text: "You're now signed in. Redirecting you to your dashboard...", el: 'p' },
  ],

  'pricing-trial-confirm': [
    { id: 'tr-ok-alert',    component: 'AgAlert',  variant: 'success', bordered: true, rounded: true, children: ['tr-ok-alert-text'] },
    { id: 'tr-ok-alert-text', component: 'AgText', text: 'Your 14-day trial has been started!' },
    { id: 'tr-ok-card',    component: 'AgCard',   shadow: true, rounded: 'md', children: ['tr-ok-heading', 'tr-ok-body', 'tr-ok-divider', 'tr-ok-badge'] },
    { id: 'tr-ok-heading', component: 'AgText',   text: 'Trial activated', el: 'h2' },
    { id: 'tr-ok-body',    component: 'AgText',   text: 'Full access is unlocked for 14 days. No credit card required until you upgrade.', el: 'p' },
    { id: 'tr-ok-divider', component: 'AgDivider' },
    { id: 'tr-ok-badge',   component: 'AgBadge',  variant: 'info', children: ['tr-ok-badge-text'] },
    { id: 'tr-ok-badge-text', component: 'AgText', text: 'Expires in 14 days' },
  ],

  // ── Account-setup wizard ────────────────────────────────────────────────

  // Step 1 is also the restart target (referenced by WZ_RESTART).
  'wz-step-1': wzStep1,

  // Step 2a — personal path
  'wz-step-2-personal': [
    { id: 'wz2p-heading',       component: 'AgText',    text: 'Your profile',                   el: 'h2' },
    { id: 'wz2p-badge',         component: 'AgBadge',   variant: 'info',  children: ['wz2p-badge-text'] },
    { id: 'wz2p-badge-text',    component: 'AgText',    text: 'Step 2 of 3 · Personal' },
    { id: 'wz2p-divider',       component: 'AgDivider' },
    { id: 'wz2p-name',          component: 'AgInput',   label: 'Full name',     type: 'text',  placeholder: 'Jane Smith',          required: true, rounded: true },
    { id: 'wz2p-email',         component: 'AgInput',   label: 'Email',         type: 'email', placeholder: 'jane@example.com',    required: true, rounded: true },
    { id: 'wz2p-next',          component: 'AgButton',  variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'WZ_PROFILE_NEXT', children: ['wz2p-next-label'] },
    { id: 'wz2p-next-label',    component: 'AgText',    text: 'Continue' },
  ],

  // Step 2b — team path (branch)
  'wz-step-2-team': [
    { id: 'wz2t-heading',       component: 'AgText',    text: 'Team details',                   el: 'h2' },
    { id: 'wz2t-badge',         component: 'AgBadge',   variant: 'warning', children: ['wz2t-badge-text'] },
    { id: 'wz2t-badge-text',    component: 'AgText',    text: 'Step 2 of 3 · Team' },
    { id: 'wz2t-divider',       component: 'AgDivider' },
    { id: 'wz2t-company',       component: 'AgInput',   label: 'Company name',  type: 'text',  placeholder: 'Acme Corp',           required: true, rounded: true },
    { id: 'wz2t-email',         component: 'AgInput',   label: 'Work email',    type: 'email', placeholder: 'you@acme.com',        required: true, rounded: true },
    { id: 'wz2t-next',          component: 'AgButton',  variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'WZ_PROFILE_NEXT', children: ['wz2t-next-label'] },
    { id: 'wz2t-next-label',    component: 'AgText',    text: 'Continue' },
  ],

  // Step 3 — shared review step (both paths converge here)
  'wz-step-3-review': [
    { id: 'wz3-heading',        component: 'AgText',    text: 'Almost done',                    el: 'h2' },
    { id: 'wz3-badge',          component: 'AgBadge',   variant: 'info',  children: ['wz3-badge-text'] },
    { id: 'wz3-badge-text',     component: 'AgText',    text: 'Step 3 of 3' },
    { id: 'wz3-divider',        component: 'AgDivider' },
    { id: 'wz3-card',           component: 'AgCard',    shadow: true, rounded: 'md', children: ['wz3-card-body'] },
    { id: 'wz3-card-body',      component: 'AgText',    text: 'Review your details above and click Finish to create your account. You can change everything later in settings.', el: 'p' },
    { id: 'wz3-submit',         component: 'AgButton',  variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'WZ_SUBMIT',  children: ['wz3-submit-label'] },
    { id: 'wz3-submit-label',   component: 'AgText',    text: 'Finish setup' },
    { id: 'wz3-restart',        component: 'AgButton',  bordered: true,     shape: 'rounded', fullWidth: true, on_click: 'WZ_RESTART', children: ['wz3-restart-label'] },
    { id: 'wz3-restart-label',  component: 'AgText',    text: 'Start over' },
  ],

  // Step 4 — success
  'wz-confirm-success': [
    { id: 'wz4-alert',          component: 'AgAlert',   variant: 'success', bordered: true, rounded: true, children: ['wz4-alert-text'] },
    { id: 'wz4-alert-text',     component: 'AgText',    text: 'Account created! Welcome aboard.' },
    { id: 'wz4-card',           component: 'AgCard',    shadow: true, rounded: 'md', children: ['wz4-badge', 'wz4-heading', 'wz4-body'] },
    { id: 'wz4-badge',          component: 'AgBadge',   variant: 'success', children: ['wz4-badge-text'] },
    { id: 'wz4-badge-text',     component: 'AgText',    text: 'Setup complete' },
    { id: 'wz4-heading',        component: 'AgText',    text: "You're all set!",                el: 'h2' },
    { id: 'wz4-body',           component: 'AgText',    text: 'Check your email for a confirmation link. Your account will be ready within a few minutes.', el: 'p' },
  ],

  // ── /Account-setup wizard ────────────────────────────────────────────────

  'pricing-plans': [
    { id: 'pl-heading',    component: 'AgText',   text: 'All plans', el: 'h2' },
    { id: 'pl-divider',    component: 'AgDivider' },
    { id: 'pl-starter',    component: 'AgCard',   shadow: true, rounded: 'sm', children: ['pl-starter-title', 'pl-starter-price', 'pl-starter-cta'] },
    { id: 'pl-starter-title', component: 'AgText', text: 'Starter', el: 'h3' },
    { id: 'pl-starter-price', component: 'AgText', text: 'Free — up to 3 projects', el: 'p' },
    { id: 'pl-starter-cta',   component: 'AgButton', bordered: true, shape: 'rounded', fullWidth: true, children: ['pl-starter-cta-label'] },
    { id: 'pl-starter-cta-label', component: 'AgText', text: 'Get started free' },
    { id: 'pl-pro',        component: 'AgCard',   shadow: true, rounded: 'sm', children: ['pl-pro-badge', 'pl-pro-title', 'pl-pro-price', 'pl-pro-cta'] },
    { id: 'pl-pro-badge',  component: 'AgBadge',  variant: 'primary', children: ['pl-pro-badge-text'] },
    { id: 'pl-pro-badge-text', component: 'AgText', text: 'Most popular' },
    { id: 'pl-pro-title',  component: 'AgText',   text: 'Pro', el: 'h3' },
    { id: 'pl-pro-price',  component: 'AgText',   text: '$12 / month', el: 'p' },
    { id: 'pl-pro-cta',    component: 'AgButton', variant: 'primary', shape: 'rounded', fullWidth: true, children: ['pl-pro-cta-label'] },
    { id: 'pl-pro-cta-label', component: 'AgText', text: 'Start Pro trial' },
    { id: 'pl-ent',        component: 'AgCard',   shadow: true, rounded: 'sm', children: ['pl-ent-title', 'pl-ent-price', 'pl-ent-cta'] },
    { id: 'pl-ent-title',  component: 'AgText',   text: 'Enterprise', el: 'h3' },
    { id: 'pl-ent-price',  component: 'AgText',   text: 'Custom pricing', el: 'p' },
    { id: 'pl-ent-cta',    component: 'AgButton', variant: 'monochrome', shape: 'rounded', fullWidth: true, children: ['pl-ent-cta-label'] },
    { id: 'pl-ent-cta-label', component: 'AgText', text: 'Talk to sales' },
  ],
};

// Maps each workflow's action aliases to the confirm fixture key they trigger.
export const workflowActions: Record<string, Record<string, string>> = {
  'account-setup': {
    WZ_PLAN_PERSONAL: 'wz-step-2-personal', // branch A
    WZ_PLAN_TEAM:     'wz-step-2-team',     // branch B
    WZ_PROFILE_NEXT:  'wz-step-3-review',   // both branches converge here
    WZ_SUBMIT:        'wz-confirm-success',
    WZ_RESTART:       'wz-step-1',
  },
  'contact-form': {
    SUBMIT_FORM: 'contact-form-confirm',
  },
  'login-form': {
    SUBMIT_LOGIN: 'login-form-confirm',
  },
  'pricing-card': {
    START_TRIAL: 'pricing-trial-confirm',
    VIEW_PLANS:  'pricing-plans',
  },
};

export function pickVariation(workflow: string): AgNode[] {
  const variations = fixtureBank[workflow];
  if (!variations?.length) return fixtureBank['contact-form'][0];
  return variations[Math.floor(Math.random() * variations.length)];
}

import type { AgNode } from '@agnosticui/schema';

export const pickerFixture: AgNode[] = [
  {
    id: 'picker-group',
    component: 'AgSelectionCardGroup',
    type: 'radio',
    name: 'workflow',
    legend: 'Choose a workflow to generate',
    on_change: 'workflow-select',
    children: ['card-contact', 'card-login', 'card-pricing'],
  },
  {
    id: 'card-contact',
    component: 'AgSelectionCard',
    value: 'contact-form',
    label: 'Contact form',
    children: ['card-contact-title', 'card-contact-desc'],
  },
  {
    id: 'card-contact-title',
    component: 'AgText',
    text: 'Contact form',
    el: 'p',
  },
  {
    id: 'card-contact-desc',
    component: 'AgText',
    text: 'Name, email, message, submit',
    el: 'p',
  },
  {
    id: 'card-login',
    component: 'AgSelectionCard',
    value: 'login-form',
    label: 'Login form',
    children: ['card-login-title', 'card-login-desc'],
  },
  {
    id: 'card-login-title',
    component: 'AgText',
    text: 'Login form',
    el: 'p',
  },
  {
    id: 'card-login-desc',
    component: 'AgText',
    text: 'Email, password, remember me',
    el: 'p',
  },
  {
    id: 'card-pricing',
    component: 'AgSelectionCard',
    value: 'pricing-card',
    label: 'Pricing card',
    children: ['card-pricing-title', 'card-pricing-desc'],
  },
  {
    id: 'card-pricing-title',
    component: 'AgText',
    text: 'Pricing card',
    el: 'p',
  },
  {
    id: 'card-pricing-desc',
    component: 'AgText',
    text: 'Plan tiers, feature list, CTA',
    el: 'p',
  },
];

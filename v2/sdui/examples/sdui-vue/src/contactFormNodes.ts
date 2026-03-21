import type { AgNode } from '@agnosticui/schema';

/**
 * Shared SDUI payload: a contact form card.
 * Identical JSON drives all three renderer smoke tests (React, Vue, Lit).
 */
export const contactFormNodes: AgNode[] = [
  {
    id: 'name-input',
    component: 'AgInput',
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Jane Smith',
    required: true,
  },
  {
    id: 'email-input',
    component: 'AgInput',
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'jane@example.com',
    required: true,
  },
  {
    id: 'agree-checkbox',
    component: 'AgCheckbox',
    name: 'agree',
    labelText: 'I agree to the terms',
    required: true,
  },
  {
    id: 'subscribe-toggle',
    component: 'AgToggle',
    name: 'subscribe',
    label: 'Subscribe to updates',
  },
  {
    id: 'submit-btn',
    component: 'AgButton',
    label: 'Submit',
    variant: 'primary',
    type: 'submit',
    on_click: 'SUBMIT_FORM',
  },
  {
    id: 'contact-card',
    component: 'AgCard',
    shadow: true,
    rounded: 'md',
    children: ['name-input', 'email-input', 'agree-checkbox', 'subscribe-toggle', 'submit-btn'],
  },
];

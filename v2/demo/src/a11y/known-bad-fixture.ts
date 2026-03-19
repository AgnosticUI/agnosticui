// Fixtures used to verify the axe-core gate actually fires.
// knownBadFixture: intentionally inaccessible — must produce critical/serious violations.
// knownGoodFixture: intentionally accessible — must pass with zero critical/serious violations.

import type { AgNode } from '@agnosticui/schema';

/**
 * Bad: an unlabeled input (placeholder is not a substitute for a label) and
 * a button with no accessible text. Both are WCAG 2A violations axe will flag.
 */
export const knownBadFixture: AgNode[] = [
  {
    id: 'bad-input',
    component: 'AgInput',
    type: 'text',
    placeholder: 'Enter value',
    // intentionally no label
  },
  {
    id: 'bad-button',
    component: 'AgButton',
    variant: 'primary',
    type: 'submit',
    // intentionally no children, so button has no accessible name
  },
];

/**
 * Good: a properly labeled input and a button with visible text.
 */
export const knownGoodFixture: AgNode[] = [
  {
    id: 'good-email',
    component: 'AgInput',
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    required: true,
  },
  {
    id: 'good-submit',
    component: 'AgButton',
    variant: 'primary',
    type: 'submit',
    children: ['good-submit-label'],
  },
  {
    id: 'good-submit-label',
    component: 'AgText',
    text: 'Sign in',
  },
];

import type { AgNode } from '@agnosticui/schema';

export const collapsibleFixture: AgNode[] = [
  {
    id: 'col-heading',
    component: 'AgText',
    text: 'Collapsible Demo',
    el: 'h2',
  },
  {
    id: 'col-intro',
    component: 'AgText',
    text: 'Click a section to expand it. Opening one closes the others (accordion behavior driven by on_toggle actions).',
    el: 'p',
  },
  {
    id: 'collapsible-1',
    component: 'AgCollapsible',
    summary: 'What is AgnosticUI?',
    bordered: true,
    open: false,
    on_toggle: 'COLLAPSIBLE_TOGGLE',
    children: ['collapsible-1-content'],
  },
  {
    id: 'collapsible-1-content',
    component: 'AgText',
    text: 'AgnosticUI is a framework-agnostic component library. The same design tokens and component logic work across React, Vue, Lit, Svelte, and more.',
    el: 'p',
  },
  {
    id: 'collapsible-2',
    component: 'AgCollapsible',
    summary: 'What is Schema-Driven UI (SDUI)?',
    bordered: true,
    open: false,
    on_toggle: 'COLLAPSIBLE_TOGGLE',
    children: ['collapsible-2-content'],
  },
  {
    id: 'collapsible-2-content',
    component: 'AgText',
    text: 'SDUI lets you describe your interface as a JSON node tree. A renderer turns the schema into live framework components without any template code.',
    el: 'p',
  },
  {
    id: 'collapsible-3',
    component: 'AgCollapsible',
    summary: 'How do actions work?',
    bordered: true,
    open: false,
    on_toggle: 'COLLAPSIBLE_TOGGLE',
    children: ['collapsible-3-content'],
  },
  {
    id: 'collapsible-3-content',
    component: 'AgText',
    text: 'Each node declares an on_toggle alias. When the component fires a toggle event the renderer dispatches the alias with a { id, value } payload. The consumer updates node state, closing others to create accordion behavior.',
    el: 'p',
  },
];

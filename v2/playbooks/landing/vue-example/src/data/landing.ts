export const hero = {
  badge: "v2.0 Now Available",
  headline: "Build Once,\nRun Everywhere",
  subheadline: "AgnosticUI delivers production-ready components working identically in React, Vue, and Lit via a single CSS token system.",
  primaryCta: "Get Started Free",
  secondaryCta: "View Docs",
}

export const features = [
  {
    id: 1,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>',
    label: "Framework Agnostic",
    title: "One API, Every Framework",
    description: "The same component props and events across React, Vue, and Lit. Write once, deploy to any stack.",
    variant: "primary",
  },
  {
    id: 2,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>',
    label: "Token-based Theming",
    title: "CSS Token System",
    description: "Every color, spacing, and radius value is a CSS custom property. Skin your entire design system in minutes.",
    variant: "success",
  },
  {
    id: 3,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    label: "Accessible by Default",
    title: "WCAG 2.1 AA Built-in",
    description: "ARIA roles, keyboard navigation, and focus management are baked in. Accessibility is never an afterthought.",
    variant: "info",
  },
  {
    id: 4,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m4.93-14.93 1.41-1.41M5.66 18.34l-1.41 1.41M20 12h2M2 12h2m14.93 4.93 1.41 1.41M5.66 5.66 4.25 4.25"/></svg>',
    label: "Dark Mode Ready",
    title: "First-class Dark Mode",
    description: "Light and dark themes ship out of the box via a single data-theme attribute. No extra configuration.",
    variant: "warning",
  },
  {
    id: 5,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    label: "Animated Lab Components",
    title: "Motion That Delights",
    description: "ButtonFx, BadgeFx, and IconButtonFx add tasteful CSS animations with full reduced-motion support.",
    variant: "secondary",
  },
  {
    id: 6,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    label: "Developer Experience",
    title: "CLI-first Workflow",
    description: "A single CLI command scaffolds any component directly into your project. No wrappers, no magic — just code.",
    variant: "monochrome",
  },
]

export const testimonials = [
  {
    id: 1,
    quote: "AgnosticUI let us ship the same design system to our React and Vue apps without duplicating a single line of CSS.",
    name: "Sarah K.",
    initials: "SK",
    role: "CTO, Layered Labs",
    variant: "info",
  },
  {
    id: 2,
    quote: "The CLI is brilliant. We scaffolded a full component library in minutes, not days. Our team was up and running before lunch.",
    name: "Marcus R.",
    initials: "MR",
    role: "Lead Frontend, Pulse",
    variant: "success",
  },
  {
    id: 3,
    quote: "Finally a UI library that doesn't force a framework opinion on us. Production-ready components from day one.",
    name: "Jamie L.",
    initials: "JL",
    role: "Principal Engineer, Orbit",
    variant: "warning",
  },
]

export const pricing = {
  tiers: [
    {
      id: "starter",
      name: "Starter",
      badge: "Free",
      badgeVariant: "success" as const,
      price: { monthly: "$0", annual: "$0" },
      description: "Perfect for side projects and open source.",
      features: [
        "All core components",
        "React + Vue + Lit",
        "CSS token system",
        "Community support",
      ],
      cta: "Start for Free",
      ctaVariant: "" as const,
      featured: false,
    },
    {
      id: "pro",
      name: "Pro",
      badge: "Most Popular",
      badgeVariant: "info" as const,
      price: { monthly: "$19", annual: "$15" },
      description: "For teams shipping production apps.",
      features: [
        "Everything in Starter",
        "Lab (Fx) components",
        "All skin presets",
        "Priority email support",
        "Figma kit",
      ],
      cta: "Start Free Trial",
      ctaVariant: "primary" as const,
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "Custom",
      badgeVariant: "warning" as const,
      price: { monthly: "Custom", annual: "Custom" },
      description: "Dedicated support and SLA for large orgs.",
      features: [
        "Everything in Pro",
        "Dedicated Slack channel",
        "Custom skin development",
        "SLA guarantee",
        "On-site training",
      ],
      cta: "Contact Sales",
      ctaVariant: "secondary" as const,
      featured: false,
    },
  ],
}

export const faqs = [
  {
    id: 1,
    question: "What frameworks does AgnosticUI support?",
    answer: "AgnosticUI provides first-class wrappers for React, Vue 3, and Lit. Every component ships with identical props, events, and styling across all three — written once from a shared web component core.",
  },
  {
    id: 2,
    question: "How does the theming system work?",
    answer: "Every visual decision — color, spacing, border radius, shadow — is expressed as a CSS custom property. Switching themes is a single data-theme attribute on the root element. Custom skins are just a set of variable overrides.",
  },
  {
    id: 3,
    question: "Is it accessible out of the box?",
    answer: "Yes. Every component is built to WCAG 2.1 AA. That includes ARIA roles and properties, full keyboard navigation, visible focus indicators, and screen reader testing. Accessibility is never an opt-in.",
  },
  {
    id: 4,
    question: "How do I add a component to my project?",
    answer: "Run `npx agnosticui-cli init` to set up your project, then `npx agnosticui-cli add Button` (or any component name). The CLI copies the source directly into your project — no runtime dependency, no magic.",
  },
  {
    id: 5,
    question: "Can I use AgnosticUI alongside an existing design system?",
    answer: "Absolutely. Because all styles are CSS custom properties, AgnosticUI integrates cleanly with any existing token system. You can adopt individual components without committing to a full migration.",
  },
]

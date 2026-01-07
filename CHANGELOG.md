# Changelog

All notable changes to AgnosticUI are documented in this file.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> **Note:** AgnosticUI 2.0 represents a fundamental shift in architecture and philosophy.
> It moves from distributed abstractions to a local-first UI kit built on Lit, where
> components are generated directly into your codebase and fully owned by you.

---

## [Unreleased]

### Added
- **Enhanced Landing Page**
  Interactive landing page with VueButtonFx animations (jelly and pulse-wobble effects), scroll indicators (dot-trail progress and scroll-to-top button), typing terminal animation that loops infinitely, and subtle dot pattern background texture.

- **Interactive Components Showcase**
  CliPreview and CodePreview components for the landing page featuring terminal typing effects, hover animations, and framework-agnostic code examples.

- **Framework Examples Documentation**
  Complete framework integration examples (Lit, React, Vue, Svelte) for all remaining components: Spinner, Slider, SkeletonLoader, Sidebar, ScrollToButton, Select, ScrollProgress, Rating, MessageBubble, Pagination, ContentPagination, Popover, Progress, ProgressRing, Radio, Menu, Mark, Loader, Link, IntlFormatter, Kbd, Input, Image, Icon components, Flex, Header, Tag, EmptyState, Fieldset, Timeline, Drawer, Divider, Checkbox, Collapsible, Combobox, CopyButton, and Dialog.

- **LLM Context Guide** (`llm.txt`)
  Root-level context file for LLM tools with project overview, architecture, theme system, and complete project structure documentation.

- **Component Documentation Template** (`v2/docs/component-template.md`)
  Reusable markdown template for component documentation with sections for interface, usage examples, accessibility notes, and styling.

- **Component README Files**
  Auto-generated README.md files for all 54 components with extracted TypeScript Props interfaces, usage examples, and documentation placeholders.

### Changed
- **Landing Page Architecture**
  Reordered sections for better narrative flow (hero → terminal preview → feature cards → action buttons → code preview). Removed emoji icons from feature cards. Improved above-the-fold content visibility by reducing hero height from 80vh to 60vh.

- **Accessibility Improvements**
  Updated CliPreview terminal colors to meet WCAG AA contrast requirements (4.5:1 minimum) in both light and dark modes. All text now has documented contrast ratios exceeding accessibility standards.

- **Framework-Agnostic Messaging**
  Updated code examples to show `.vue`, `.tsx`, or `.ts` file extensions with clarifying comments to avoid React-first bias and reflect AgnosticUI's true framework-agnostic nature.

- **Node.js Version**
  Updated `.nvmrc` from v16.9.1 to v22.12.0 (latest LTS).

- **Implementation Plan Documentation**
  Existing README.md files for Button, Input, and Tooltip components renamed to IMPLEMENTATION_PLAN.md to distinguish from user-facing documentation.

### Fixed
- **Lit Examples Shadow DOM**
  Documented and fixed createRenderRoot requirement in Lit examples to prevent shadow DOM style encapsulation issues.

- **Menu Component Examples**
  Fixed missing sections in Lit and React Menu examples to match complete functionality shown in Vue examples.

### Removed
- **Netlify Configuration**
  Removed outdated `netlify.toml` referencing non-existent `agnostic-astro` directory. Project now uses GitHub Pages deployment via `v2/site/deploy.sh`.

---

## [2.0.0-alpha.2] – 2025-12-22

### Added
- **Local, Lit-Based UI Kit**
  Complete architectural rewrite using Lit. Components are generated as source code into the consuming project—no runtime wrappers, no hidden abstractions.

- **Core Components**
  Initial set of production-ready components including IconButton, Toggle, Breadcrumb, Menu, and Tabs, with full keyboard navigation and WAI-ARIA APG compliance.

- **Semantic Design Tokens**
  Token-driven theming system with light/dark support, enabling consistent styling without manual CSS variable management.

### Changed
- **Local Ownership Model**
  Shifted from framework wrappers to transparent, inspectable components that developers can edit, extend, and ship as their own.

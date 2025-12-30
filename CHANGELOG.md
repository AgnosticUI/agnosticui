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
- **LLM Context Guide** (`llm.txt`)
  Root-level context file for LLM tools with project overview, architecture, theme system, and complete project structure documentation.

- **Component Documentation Template** (`v2/docs/component-template.md`)
  Reusable markdown template for component documentation with sections for interface, usage examples, accessibility notes, and styling.

- **Component README Files**
  Auto-generated README.md files for all 54 components with extracted TypeScript Props interfaces, usage examples, and documentation placeholders.

### Changed
- **Node.js Version**
  Updated `.nvmrc` from v16.9.1 to v22.12.0 (latest LTS).

- **Implementation Plan Documentation**
  Existing README.md files for Button, Input, and Tooltip components renamed to IMPLEMENTATION_PLAN.md to distinguish from user-facing documentation.

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

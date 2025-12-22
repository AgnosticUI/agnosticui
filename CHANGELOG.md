# Changelog

All notable changes to AgnosticUI are documented in this file.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> **Note:** AgnosticUI 2.0 represents a fundamental shift in architecture and philosophy.
> It moves from distributed abstractions to a local-first UI kit built on Lit, where
> components are generated directly into your codebase and fully owned by you.

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

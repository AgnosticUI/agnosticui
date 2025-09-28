# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2025-09-28
### Menu & Tabs Component Development

#### Added
- **Comprehensive Menu and Tabs Components** - Full keyboard navigation, ARIA compliance, and multi-framework support (React, Vue, Svelte). Build accessible dropdown menus and tabbed interfaces without accessibility complexity.
- **Enhanced Playground Experience** - Interactive Preview | Code tab interface for Accordion component demos. View live examples alongside source code without switching contexts.
- **Advanced Theme Integration** - Automatic syntax highlighting adaptation to light/dark themes with comprehensive theme token coverage. Maintains code readability across theme switches.

#### Fixed
- **Framework Integration Issues** - Resolved Vue Tab component createElement errors, missing React/Vue exports, and Svelte 5 compatibility issues blocking multi-framework adoption
- **Dark Mode Consistency** - Fixed text visibility and contrast issues across playground components; ensures seamless experience regardless of theme
- **Build and Development Workflow** - Eliminated TypeScript errors, removed console debugging statements, improved HMR reliability for faster development

## [Unreleased] - 2025-09-18
### Core Component Foundation

#### Added
- **Complete Component Foundation** - New IconButton, Toggle, and Breadcrumb components with comprehensive accessibility and multi-framework wrappers. Production-ready components work consistently across React, Vue, and Svelte.
- **Semantic Design Token System** - Token-based theming with 52+ semantic tokens supporting light/dark themes. Eliminates burden of managing CSS variables; maintains brand consistency across entire app.
- **Multi-Framework Playground** - Interactive Astro-based playground with live component examples. Preview component behavior before implementation.

#### Changed
- **Almost Headless Architecture** - Migrated to Lit-based web components with functional CSS only. Complete control over appearance while maintaining accessibility and behavior consistency.
- **Enhanced Accessibility** - Full WAI-ARIA APG compliance with comprehensive keyboard navigation and screen reader support. Meets accessibility standards without additional implementation work.

#### Fixed
- **Production Build Issues** - Resolved TypeScript errors, test failures, and build configuration problems preventing deployment
- **Cross-Framework Compatibility** - Fixed import/export issues and framework-specific bugs blocking adoption in diverse tech stacks
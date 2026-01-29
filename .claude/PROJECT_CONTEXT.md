# AgnosticUI Project Context

## Repository Structure

### Core Library
- **Component source:** `v2/lib/src/components/*` - Framework-agnostic web components
- **Design tokens:** `v2/theme-registry/README.md` - CSS custom properties and theming

### Documentation
- **VitePress site:** `v2/site/docs/components/` - Main component documentation
- **Playbooks:** `v2/playbooks/[PLAYBOOK]/README.md` - Workflow-specific guides
- **CLI docs:** `v2/cli/README.md` - Command-line tool documentation

### Framework Playgrounds (Storybook)
- **Lit:** `v2/playgrounds/lit/src/stories/`
- **React:** `v2/playgrounds/react/src/stories/`
- **Vue:** `v2/playgrounds/vue/src/stories/`

### Examples
- **Lit examples:** `v2/examples/lit-test/`
- **React examples:** `v2/examples/react-test/`
- **Vue examples:** `v2/examples/vue-test/`

## Key Principles

- **CSS-first approach:** Components use CSS custom properties for theming
- **Framework-agnostic core:** Web components work across Lit, React, Vue
- **Accessibility-focused:** WCAG 2.1 AA compliance is required
- **Design token system:** Consistent theming via CSS variables

## Common Workflows

### Testing a Component
1. Core: Test in `v2/lib/`
2. Playgrounds: Verify in Lit, React, and Vue Storybook
3. Examples: Check example implementations still work

### Documenting a Component
1. Core API in VitePress (`v2/site/docs/components/`)
2. Interactive stories in all three playgrounds
3. Update examples if API changed
4. Add/update playbook if component has specific use case

## Branch Convention
- Feature branches: `issue-[number]/[description]`
- Always branch from `master`
- Never commit directly to `master`

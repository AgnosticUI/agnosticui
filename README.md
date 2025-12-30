# AgnosticUI Local

AgnosticUI Local (v2) is a CLI-based UI component library that copies Lit web components directly into your project. You own the code, customize it freely, and avoid dependency lock-in.

> **For LLM Tools:** See [`llm.txt`](./llm.txt) for comprehensive project context, architecture, and structure information.

## Quick Start

```bash
# Initialize AgnosticUI in your project
npx agnosticui-cli init

# Add components
npx agnosticui-cli add button input card
```

## Documentation

- **Installation & Usage:** See [`v2/site/docs/installation.md`](v2/site/docs/installation.md)
- **Component Docs:** Each component has a README in [`v2/lib/src/components/`](v2/lib/src/components/)
- **Theme System:** See [`v2/theme-registry/`](v2/theme-registry/) for design tokens
- **Full Documentation:** [www.agnosticui.com](https://www.agnosticui.com)

## Project Structure

- `/v2/lib/` - Core component library
- `/v2/cli/` - CLI tool for component management
- `/v2/site/` - VitePress documentation site
- `/v2/theme-registry/` - Design token system
- `/v2/playgrounds/` - Development playgrounds (React, Vue, Lit)
- `/v2/examples/` - Integration examples

## Version 2 Status

AgnosticUI v2 is in **alpha** and represents a complete architectural rewrite:
- Built with Lit web components
- CLI-first approach (copy components to your project)
- 54+ production-ready components
- Systematic design token system
- Full React and Vue framework wrappers

Development is ongoing in the `/v2` directory.

## Where is v1?

AgnosticUI v2 is a complete rewrite and is not compatible with v1. If you need v1, it remains available via git tags:
- Packages: `agnostic-angular`, `agnostic-react`, `agnostic-vue`, `agnostic-svelte`, etc.
- Tag: `v1-legacy`

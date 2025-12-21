# AgnosticUI v2 Documentation

This directory contains the core architectural and development documentation for AgnosticUI v2.

## Document Structure

### Core Documents

1. **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)** - **START HERE**
   - Comprehensive development guide consolidating all patterns and best practices
   - Covers:
     - Design token system
     - Component development workflow
     - Event patterns
     - Vue integration patterns
     - Testing & verification
     - Critical patterns & rules
   - **Use this as your primary reference for all development work**

2. **[AGNOSTICUI_LOCAL.md](./AGNOSTICUI_LOCAL.md)** - Local development setup
   - PRD for local development tooling
   - Independent from main development guide
   - Covers workspace setup and local testing

3. **[TODO.md](./TODO.md)** - Working document
   - Temporary tracking document
   - Can be safely ignored or deleted when no longer needed

## For LLM Assistants

When asked to develop an AgnosticUI v2 component:

1. **Read** `DEVELOPMENT_GUIDE.md` first - it contains all patterns you need
2. **Follow** the component development workflow section
3. **Reference** specific pattern sections as needed (event patterns, Vue integration, etc.)
4. **Test** using the verification workflow in the testing section

## For Human Developers

The `DEVELOPMENT_GUIDE.md` is organized into logical sections:

- **Start** with "Core Philosophy" to understand the design principles
- **Use** "Design Token System" for theming and styling
- **Follow** "Component Development Workflow" step-by-step
- **Reference** specific pattern sections when needed:
  - Event patterns for component interactions
  - Vue integration for Vue-specific issues
  - Testing for verification procedures
- **Check** "Critical Patterns & Rules" for common mistakes to avoid

## Document Maintenance

When discovering new patterns or making architectural decisions:

1. Update `DEVELOPMENT_GUIDE.md` with the new pattern
2. Add to the appropriate section (or create a new section if needed)
3. Update the "Quick Reference: Common Mistakes" table if applicable
4. Update the "Last Updated" date at the bottom

## Previous Documentation

The following documents were consolidated into `DEVELOPMENT_GUIDE.md`:

- `barrel-file-refactoring-pattern.md` (archived/removed)
- `CLASS_FIELD_SHADOWING.md` (archived/removed)
- `COLOR_USAGE_GUIDELINES.md` (archived/removed)
- `COMPONENT_DEVELOPMENT_WORKFLOW.md` (archived/removed)
- `DESIGN_TOKENS.md` (archived/removed)
- `EVENT_REFACTOR_PROGRESS.md` (archived/removed)
- `EVENT_REFACTOR_STRATEGY.md` (archived/removed)
- `GEMINI.md` (archived/removed)
- `INTERFACE_AND_STORYBOOK_STANDARDS.md` (archived/removed)
- `WORKFLOW.md` (archived/removed)

All critical information from these documents has been preserved and organized in the consolidated guide.

---

**Note**: This documentation is versioned and evolves with the project. Always check the "Last Updated" date in `DEVELOPMENT_GUIDE.md` to ensure you're working with current patterns.

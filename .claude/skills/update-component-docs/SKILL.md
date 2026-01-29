---
name: update-component-docs
description: Update component documentation when code changes
disable-model-invocation: true
allowed-tools: Read, Grep, Glob
---

**Usage:** `/update-component-docs COMPONENT_NAME`

**Examples:**
- `/update-component-docs button`
- `/update-component-docs alert`

Update docs for component: $ARGUMENTS

**Setup:**
1. Read `.claude/PROJECT_CONTEXT.md` for AgnosticUI structure and paths

**Process:**

2. **Locate component files:**
```
   Read v2/lib/src/components/$ARGUMENTS*
   Read v2/site/docs/components/$ARGUMENTS.md
   Glob v2/playgrounds/*/src/stories/*$ARGUMENTS*
   Glob v2/examples/*/src/*$ARGUMENTS*
```

3. **Identify what changed:**
   - Core component API (props, slots, events)
   - CSS custom properties or design tokens
   - Behavior or interaction patterns
   - Accessibility features
   - Breaking changes vs additions

4. **Check related documentation:**
   - VitePress component page for API tables and usage examples
   - Storybook stories across Lit, React, and Vue playgrounds
   - Example implementations in each framework
   - Related playbook if component has specific use case docs
   - Design tokens if styling/theming changed

5. **Propose documentation updates:**
   - **VitePress:** Update props tables, events, slots, CSS custom properties, usage examples
   - **Storybook stories:** Update args, controls, story descriptions across all three frameworks
   - **Examples:** Verify examples still work with new API
   - **Playbooks:** Update if related to specific workflow/pattern
   - **Design tokens:** Note if component uses new/changed tokens

6. **WAIT FOR USER APPROVAL**

7. **Update consistently across frameworks:**
   - Ensure Lit, React, and Vue stories show equivalent functionality
   - Use framework-appropriate syntax but consistent examples
   - Same terminology and descriptions across all docs
   - Code examples match current API
   - Note framework-specific differences where relevant

8. **Verify completeness:**
   - All frameworks (Lit, React, Vue) documented
   - VitePress and Storybook in sync
   - Examples updated if API changed
   - Design token references accurate

**Token Optimization:**
- Start with core component to understand changes
- Only read framework-specific files if API differs by framework
- Skip playbooks unless component has dedicated workflow docs
- Check design tokens only if styling/theming aspects changed

---
name: explain-code
description: Explain what code does in plain English
disable-model-invocation: true
allowed-tools: Read, Grep, Glob
---

**Usage:** `/explain-code PATH_OR_DESCRIPTION`

**Examples:**
- `/explain-code v2/lib/src/components/Button.ts`
- `/explain-code the button ripple effect`
- `/explain-code design token system`

Explain: $ARGUMENTS

**Setup:**
1. Read `.claude/PROJECT_CONTEXT.md` to understand AgnosticUI's architecture

**Process:**

2. **Locate and read the code:**
   - Identify if it's a core component, framework implementation, or utility
   - Read the specified file(s)
   - Use Grep/Glob to find related files if needed:
     - If explaining core component, show framework usage examples
     - If explaining framework story, reference core component
     - If explaining utility, show where it's used

3. **Understand the context:**
   - Where does this fit in AgnosticUI's architecture?
   - Is it framework-agnostic or framework-specific?
   - Does it use design tokens or CSS custom properties?
   - Are there related files in other frameworks?

4. **Explain clearly:**
   - **What it does** (high level, user-facing behavior)
   - **How it works** (key logic, algorithms, patterns)
   - **Why it's structured this way** (architectural decisions)
   - **AgnosticUI-specific context:**
     - How it fits the CSS-first approach
     - Framework-agnostic vs framework-specific aspects
     - Design token usage
     - Accessibility considerations
   - **Common usage patterns** with examples
   - **Edge cases or gotchas** to be aware of

5. **Provide helpful context:**
   - Show where it's used (examples, stories, playgrounds)
   - Note framework differences if applicable
   - Link to related components or utilities
   - Reference relevant playbooks if they exist

**Keep explanations:**
- Clear and jargon-free (or explain jargon)
- Organized from high-level to details
- Focused on understanding, not just describing
- Contextualized within AgnosticUI's multi-framework architecture
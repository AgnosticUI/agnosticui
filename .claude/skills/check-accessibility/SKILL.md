---
name: check-accessibility
description: Review component for accessibility issues
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch
---

**Usage:** `/check-accessibility COMPONENT_NAME`

**Examples:** 
- `/check-accessibility button`
- `/check-accessibility alert`
- `/check-accessibility v2/lib/src/components/Button.ts`

Check accessibility for: $ARGUMENTS

**Setup:**
1. Read `.claude/PROJECT_CONTEXT.md` for AgnosticUI structure and accessibility principles

**Process:**

2. **Search for latest standards:**
   - Use WebSearch for "WCAG 2.2 [component-type] accessibility"
   - Use WebSearch for "ARIA [specific-pattern] best practices"
   - Fetch W3C WAI-ARIA documentation if needed for specific patterns

3. **Locate component files:**
   - Core component: `v2/lib/src/components/$ARGUMENTS*`
   - Framework implementations if relevant: `v2/playgrounds/*/src/stories/*$ARGUMENTS*`
   - Check PROJECT_CONTEXT for AgnosticUI's accessibility standards location

4. **Analyze against current standards:**
   - **Semantic HTML:** Proper element usage for meaning and structure
   - **ARIA attributes:** Correct, necessary, and following latest specs
   - **Keyboard navigation:** Tab order, focus management, keyboard shortcuts
   - **Focus indicators:** Visible focus styles meeting contrast requirements
   - **Screen reader support:** Meaningful labels, descriptions, live regions
   - **Color contrast:** WCAG 2.2 AA requirements (4.5:1 text, 3:1 UI)
   - **Touch targets:** Minimum 44x44px for interactive elements
   - **Motion/animation:** Respects prefers-reduced-motion

5. **Framework-specific considerations:**
   - Check if accessibility differs across Lit, React, Vue implementations
   - Verify ARIA is applied correctly in each framework's rendering
   - Test that events work with keyboard in all frameworks

6. **Report findings:**
   - List issues with severity (Critical/High/Medium/Low)
   - Reference specific WCAG 2.2 success criteria
   - Provide remediation steps with code examples
   - Link to current W3C/MDN documentation
   - Note AgnosticUI-specific patterns to follow

7. **If fixes requested:**
   - Propose changes that work across all frameworks
   - Ensure fixes align with AgnosticUI's CSS-first approach
   - **WAIT FOR USER APPROVAL** before implementing

**AgnosticUI Accessibility Requirements:**
- WCAG 2.1 AA compliance minimum
- Framework-agnostic solutions preferred
- CSS custom properties for focus indicators
- Consistent behavior across Lit, React, Vue
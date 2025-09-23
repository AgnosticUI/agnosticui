# AgnosticUI v2 – Project Global Rules (Claude Code)

## Purpose
AgnosticUI v2 is more than a component library: it's an AI-ready, ejectable component system with upgrade-safe design patterns. Components are built **almost headless** and Lit-based, providing maximum flexibility for styling while ensuring accessibility, maintainability, and seamless ejection workflows.

## Component Sources
- `_component.ts` – Canonical, immutable, upgrade-safe source of truth.
- `component.ts` – Editable override version for experimentation or AI-assisted adaptations.

## AI-Assisted Development Workflow
1. **Reference Spec Sheet:** Always consult `spec.md` first.
2. **Plan:** Outline goals, rationale, decomposed task list, and test plan.
3. **Implement:** One task at a time. Prefer headless-first, minimal styling.
4. **Verify:** Run tests or human review to confirm behavior and accessibility.
5. **MANDATORY Accessibility Verification:** Before marking any component as complete, ALL WAI-ARIA APG requirements MUST be verified working, especially keyboard navigation.
6. **Package Export:** Add component to `agnostic/lib/src/index.ts` exports for public API availability.
7. **Integration:** Add to playground showcase, test ejection workflow, update documentation.
8. **Announce Completion:** Await human approval before starting next task.

## WAI-ARIA APG Compliance (MANDATORY & BLOCKING)
**CRITICAL**: No component may be marked as complete until ALL WAI-ARIA APG requirements are implemented and verified working.

### Required Accessibility Features (Non-Negotiable)
- **Keyboard Navigation**: All interactive components MUST support full keyboard navigation as specified in WAI-ARIA APG
- **Screen Reader Support**: All components MUST provide proper semantic markup and ARIA attributes
- **Focus Management**: Components MUST manage focus appropriately, especially for complex widgets
- **State Communication**: All component states MUST be communicated to assistive technologies

### Verification Requirements
Before marking any component complete, you MUST complete every item in **ACCESSIBILITY_CHECKLIST.md**:
1. Test keyboard navigation manually (Tab, Arrow keys, Space, Enter, Home, End as applicable)
2. Verify all ARIA attributes are present and correctly implemented
3. Run axe accessibility tests and ensure zero violations
4. Check that the component matches its APG specification exactly
5. **Complete all 11 sections of ACCESSIBILITY_CHECKLIST.md** - no exceptions

### Enforcement
- Components lacking required accessibility features are considered **broken and incomplete**
- No exceptions will be made - accessibility is not optional
- If accessibility requirements are discovered missing after "completion", this represents a process failure requiring immediate correction

## Best Practices
- **Modular and Reusable Code**: Encapsulate shared logic into reusable utility functions. Strive for high cohesion and apply principles like DRY (Don't Repeat Yourself) and SRP (Single Responsibility Principle) to create a scalable and maintainable codebase.
- Use Lit idioms (`updateComplete`, reactive props, shadow DOM).
- **CRITICAL: Keep components almost headless** - provide minimal CSS for essential functionality only (visibility, display states). No visual styling, colors, fonts, spacing, or decorative properties.
- **Use Lucide Icons, Not Emoji**: When adding visual indicators to documentation, playground demos, or UI elements, use Lucide icons (`<Check>`, `<AlertTriangle>`, `<X>`) instead of emoji. This maintains a professional appearance and ensures consistent rendering across all platforms.
- **Atomic Commits**: After each successfully verified task, `git add` and `git commit` the changes with a clear message.
- Never commit or merge code without approval.

## Almost Headless Component Philosophy
Components should provide **functional CSS only** - styles required for the component to work:

### **[CHECK]** REQUIRED - Functional CSS
- `:host { display: block }` - Basic element display behavior
- `.content { display: none }` / `:host([open]) .content { display: block }` - State-based visibility
- `pointer-events: none` - Disable interactions for disabled states
- `visibility: hidden/visible` - FOUC prevention
- Structural resets affecting functionality (`margin: 0; padding: 0` on headings)

### **[X]** FORBIDDEN - Skinning/Visual CSS
- Colors, backgrounds, fonts, typography
- Visual spacing (padding/margin for layout)
- Decorative borders, shadows, animations
- Visual feedback styles (`cursor: pointer`, `opacity` for aesthetics)

## Hover State Guidelines (MANDATORY)
**Critical UX Pattern - All hoverable elements MUST follow:**

### Contrast-Aware Hover Pattern
- **White text on colored background**: DARKEN the background on hover
- **Dark text on light background**: LIGHTEN the background on hover

### Implementation
- Use CSS variables from semantic token system:
  - `--ag-primary` → `--ag-primary-hover` (darker)
  - `--ag-danger` → `--ag-danger-hover` (darker)
- For buttons with light backgrounds: use `--ag-background-secondary` for subtle lightening
- **Never break contrast** - hover states must maintain or improve text readability

## Focus State Guidelines (MANDATORY)
**Critical Accessibility Pattern - All focusable elements MUST follow:**

### High-Contrast Focus Ring
- **Always use** `--ag-focus` for focus outlines
- **Never use** `currentColor` for focus rings (poor contrast on colored backgrounds)
- Standard pattern: `outline: var(--ag-focus-width, 2px) solid var(--ag-focus); outline-offset: var(--ag-focus-offset, 2px);`
- Blue focus color provides excellent contrast on all button variants (blue, red, light, dark)

### Implementation
```css
button:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus);
  outline-offset: var(--ag-focus-offset, 2px);
}
```

### Example
```css
/* PRIMARY BUTTON: Blue bg + white text = darken on hover */
button { background: var(--ag-primary); color: white; }
button:hover { background: var(--ag-primary-hover); }

/* SECONDARY BUTTON: Light bg + dark text = lighten on hover */
button { background: var(--c-card-bg); color: var(--c-text); }
button:hover { background: var(--c-bg-secondary); }
```

## Optional Styling Tiers
Components are designed to be styled externally through:
- `--style`: Prebuilt, stable component skins for production use
- `--experiments`: Experimental, AI-assisted styling variations stored in `/experiments`
- **User CSS**: Components should accept any external styling without conflicts

## Simple Component Ejection (agui CLI)
The `agui` CLI provides **dead-simple component ejection** by copying source files:

### **[CHECK]** Simple Ejection Model
- **File copy operation** - no code generation
- **Source files as-is** - copy from `agnostic/lib/src/components/`
- **Framework agnostic** - Lit components work everywhere
- **No transformation** - just recursive directory copy
- **Simple command**: `agui eject <component> [destination]`

### **[X]** What We Don't Do
- Framework-specific generators
- Template systems
- Complex dependency management
- Project structure detection
- Configuration files

### Command Syntax
```bash
# Simple ejection
agui eject accordion
agui eject accordion ./components/ui/my-accordion
agui eject accordion --force
```

### Integration Philosophy
**Priority Focus:**
1. **Astro Playground** - Primary development environment
2. **Lib Quality** - Core component library excellence
3. **Simple Ejection** - Copy files when customization needed

## Reference
- Component spec sheets (`spec.md`) are the single source of truth for all decisions.

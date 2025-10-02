# AgnosticUI v2 – Project Global Rules (Claude Code)

## Purpose
AgnosticUI v2 is an AI-ready component library with upgrade-safe design patterns. Components are **minimalist & highly themeable** - providing beautiful defaults via design tokens with complete customization. Built with Lit for maximum compatibility and accessibility.

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
7. **Integration:** Add to showcase with framework demos, update documentation.
8. **Final Verification:** Run full validation suite: `npm run lint && npm run typecheck && npm run test && npm run build` to ensure all systems are working correctly.
9. **Announce Completion:** Await human approval before starting next task.

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

## Minimalist & Themeable Component Philosophy
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

## Theming Philosophy
Components use design tokens (`--ag-*` CSS custom properties) for all visual styling:

### Token-Based Customization
- **Minimal Defaults**: Clean, professional appearance out of the box
- **Complete Override**: Every visual aspect controlled by tokens
- **Theme Registry**: Centralized token definitions in `theme-registry/`
- **Dark Mode**: Automatic support via `data-theme="dark"`

### Development Focus
1. **Showcase** - Primary development/testing environment
2. **Lib Quality** - Core component library excellence
3. **Token System** - Systematic theming via design tokens

## Recent Patterns and Improvements

### **Spec Sheet System (September 2024)**
**Status: 8/9 components now have complete spec sheets**

All major components now include comprehensive `spec.md` files with:
- WAI-ARIA APG compliance requirements
- Design token integration patterns
- Framework wrapper specifications
- Usage examples and testing requirements
- Quality assurance checklists

**Pattern**: Each spec sheet serves as single source of truth for component decisions.

### **Design Token Enhancements**
**New Token Pattern: `--ag-text-locked`**

For contrast issues where text needs to remain dark in both light and dark themes:
```css
/* Theme Registry Enhancement */
"text-locked": {
  "value": "#374151",
  "description": "Text color that remains dark in both light and dark themes for special cases like hover states on light backgrounds"
}

/* Usage Pattern */
color: var(--icon-button-color, var(--ag-text-locked, #374151));
```

**Use Case**: IconButton hover states, settings icons, upload indicators where contrast is critical.

### **Playground Integration Pattern**
**Demo Component Structure**:
```
src/components/ComponentName/ComponentNamePlayground.astro
src/components/ReactComponentNameDemo.tsx
src/components/VueComponentNameDemo.vue
src/components/SvelteComponentNameDemo.svelte
```

**Integration Pattern**:
```astro
---
import ReactComponentDemo from "../ReactComponentDemo.tsx";
import VueComponentDemo from "../VueComponentDemo.vue";
import SvelteComponentDemo from "../SvelteComponentDemo.svelte";
---

<section>
  <h2>React Integration</h2>
  <ReactComponentDemo client:only="react" />
</section>

<section>
  <h2>Vue Integration</h2>
  <VueComponentDemo client:only="vue" />
</section>

<section>
  <h2>Svelte Integration</h2>
  <SvelteComponentDemo client:only="svelte" />
</section>
```

### **Component Export Checklist**
**CRITICAL**: All new components must be exported in main library index:

1. **Add to `/lib/src/index.ts`**:
   ```typescript
   export * from './components/ComponentName/core/_ComponentName';
   ```

2. **Verify playground page exists**:
   ```
   /playground/src/pages/component-name.astro
   /playground/src/components/ComponentName/ComponentNamePlayground.astro
   ```

3. **Add to main index navigation**:
   ```astro
   <a href="/component-name" class="component-card">
     <div class="component-icon"><IconName /></div>
     <div class="component-title">ComponentName</div>
     <span class="status-badge status-ready">Ready</span>
   </a>
   ```

### **Quality Validation Process**
Recent validation identified key patterns:

1. **Build Verification**: `npm run build` must succeed for all 9+ playground pages
2. **Demo Integration**: All components should have React/Vue/Svelte demo components
3. **Export Verification**: Components must be exported from main library index
4. **Spec Sheet Compliance**: All production components need complete spec sheets

### **Toggle Component Integration (New)**
Toggle component represents the complete integration pattern:
- ✅ Core component implementation
- ✅ Framework wrappers (React, Vue, Svelte)
- ✅ Complete spec sheet with WAI-ARIA Switch pattern
- ✅ Playground page with demo integration
- ✅ Main library export
- ✅ Index page navigation

## Reference
- Component spec sheets (`spec.md`) are the single source of truth for all decisions.
- Component status tracking in `/docs/COMPONENT_STATUS.md`
- Design tokens in `/theme-registry/tokens/semantic.json`

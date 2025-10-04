# Component Refactor Template

> Use this template when refactoring existing components to comply with AgnosticUI v2 standards (design tokens, color usage, accessibility)

## PHASE 1 - REQUIREMENTS ANALYSIS (no code)

### Read these files in order and extract patterns:

#### 1. Current Component Implementation
- `lib/src/components/[Component]/core/_[Component].ts`

#### 2. Guidelines & Standards
- `docs/COLOR_USAGE_GUIDELINES.md`
- `docs/COMPONENT_DEVELOPMENT_WORKFLOW.md`

#### 3. Reference Implementations (for compliance patterns)
- `lib/src/components/Accordion/core/_Accordion.ts`
- `lib/src/components/Button/core/_Button.ts`

#### 4. V1 Implementation (for feature parity)
- `lib/src/components/[Component]/v1/[component].css`
- `lib/src/components/[Component]/v1/[component].hbs`

### Create a compliance analysis showing:

#### 1. Current Issues Found
- Design token violations (list all `var(--ag-*, fallback)` instances)
- Color usage violations (using `--ag-primary` for text, etc.)
- Missing features from v1 version

#### 2. Reference Implementation Patterns
- How Accordion uses tokens (no fallbacks)
- How Button uses tokens (no fallbacks)
- Hover state patterns (darken/lighten rules)
- Focus state patterns (always `--ag-focus`)

#### 3. Required Changes
- Token fixes needed (remove fallbacks, fix semantic usage)
- New features to add (from v1 parity)
- Prop additions (if any)

**⛔ STOP - wait for my verification before Phase 2.**

---

## PHASE 2 - IMPLEMENTATION

Apply the refactor following these priorities:

1. Remove ALL hardcoded fallbacks from `var(--ag-*)` tokens
2. Fix color token semantics (text uses `--ag-text-*`, not `--ag-primary`)
3. Verify hover/focus patterns match guidelines
4. Add any missing v1 features

**⛔ STOP - show me the changes before committing.**

---

## PHASE 3 - ITERATION (if needed)

After implementation:

1. Audit Accordion component (remove fallbacks if found)
2. Audit Button component (remove fallbacks if found)
3. Update `COMPONENT_DEVELOPMENT_WORKFLOW.md` with "no fallbacks" rule
4. Commit each change separately

---

## VERIFICATION CHECKLIST

Before marking complete, verify:

- [ ] All `var(--ag-*)` calls have NO fallback values
- [ ] Text content uses `--ag-text-*` tokens (not `--ag-primary`)
- [ ] Focus states use `--ag-focus` (not `currentColor`)
- [ ] Hover states follow contrast-aware pattern
- [ ] V1 feature parity achieved
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors (`npm run typecheck`)

---

## Usage Example

```markdown
Refactor the Card component following:
/Users/roblevin/workspace/opensource/agnosticui/v2/docs/COMPONENT_REFACTOR_TEMPLATE.md

Component-specific notes:
- V1 files located in lib/src/components/Card/v1/
- Also reference Tooltip component for elevation patterns
- Focus on shadow/border token compliance
```

---

## Template Variables

Replace these placeholders when using:

- `[Component]` → Actual component name (PascalCase)
- `[component]` → Actual component name (kebab-case)

Example: For Card component
- `[Component]` = `Card`
- `[component]` = `card`

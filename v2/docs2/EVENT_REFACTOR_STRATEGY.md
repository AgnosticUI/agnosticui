# Event Refactor Strategy

## Overview

This document outlines a structured, safe approach to refactoring all AgnosticUI v2 components to follow the standardized event conventions documented in `COMPONENT_DEVELOPMENT_WORKFLOW.md`.

**Completed**: Button, Collapsible
**Remaining**: ~29 components

## Component Inventory & Prioritization

### Tier 1: Interactive Components with Custom Events (HIGH PRIORITY)
Components with custom state changes that dispatch events:

1. **Toggle** - Binary state (on/off), dispatches toggle event
2. **Checkbox** - Binary/indeterminate state, dispatches change event
3. **Radio** - Selection state, dispatches change event
4. **Input** - Text state + validation, dispatches input/change/blur/focus events
5. **Select** - Selection state, dispatches change event
6. **Tabs** - Active tab state, dispatches tab-change event
7. **Accordion** - Expanded state, dispatches expand/collapse events
8. **Dialog** - Open/close state, dispatches open/close events
9. **Drawer** - Open/close state, dispatches open/close events
10. **Toast** - Dismiss action, dispatches dismiss event
11. **Menu** - Selection + open/close, dispatches select/open/close events
12. **Tooltip** - Show/hide state, may dispatch show/hide events

**Why First**: These have the most complex event patterns and highest consumer impact. Getting these right establishes patterns for the rest.

### Tier 2: Components with Native Event Exposure (MEDIUM PRIORITY)
Components that primarily expose native events but may need callback props:

13. **IconButton** - Extends Button patterns, click + focus/blur
14. **Alert** - Close button, dispatches dismiss event
15. **Tag** - Optional remove button, dispatches remove event
16. **Breadcrumb** - Click navigation, may expose click events
17. **Header** - May have interactive elements (burger menu), dispatches events

**Why Second**: Simpler patterns, often just adding callback props for native events.

### Tier 3: Display-Only Components (LOW PRIORITY)
Components with minimal or no interactive events:

18. **Card** - Mostly presentational, may have click for clickable cards
19. **Avatar** - Presentational, no custom events
20. **Badge** - Presentational, no custom events
21. **Divider** - Presentational, no events
22. **Icon** - Presentational, no events
23. **Kbd** - Presentational, no events
24. **Loader** - Presentational, no events
25. **Progress** - Presentational, no events
26. **Spinner** - Presentational, no events

**Why Last**: Minimal impact, can be batch-processed quickly if needed at all.

### Tier 4: Container/Utility Components
27. **AccordionGroup** - Coordinates Accordions, may need event coordination
28. **CloseButton** (shared) - Simple click event

## Refactor Process (Per Component)

### Phase 1: Audit & Planning (5-10 min per component)

Create a component audit document:

```markdown
## [ComponentName] Event Audit

### Current Events
- [ ] Event: `eventname` - Description
  - Current pattern: [DOM only / Callback only / Inconsistent]
  - Event type: [Native Composed / Native Non-Bubbling / Custom]

### Required Changes
- [ ] Add event type definitions
- [ ] Add callback props to Props interface
- [ ] Add @property declarations
- [ ] Implement dual-dispatch for custom events
- [ ] Re-dispatch for non-bubbling native events
- [ ] Update React wrapper events mapping
- [ ] Update Vue wrapper with emits
- [ ] Add v-model support for [stateProp]

### Breaking Changes
- [ ] None
- [ ] [List any breaking changes]

### Risk Level: [LOW / MEDIUM / HIGH]
```

**How to perform audit**:
```bash
# 1. Read the core component
# 2. Search for dispatchEvent calls
# 3. Identify what events consumers might expect
# 4. Categorize each event
# 5. Note any existing callback props
```

### Phase 2: Implementation (30-60 min per component)

**Step-by-step checklist** (can be automated with LLM):

#### A. Core Component (_ComponentName.ts)

1. **Add event type definitions** (top of file)
   ```typescript
   export interface MyEventDetail {
     value: string;
   }
   export type MyCustomEvent = CustomEvent<MyEventDetail>;
   ```

2. **Update Props interface**
   ```typescript
   export interface MyComponentProps {
     // Add callback props
     onClick?: (event: MouseEvent) => void;
     onMyEvent?: (event: MyCustomEvent) => void;
   }
   ```

3. **Add property declarations**
   ```typescript
   @property({ attribute: false })
   declare onClick?: (event: MouseEvent) => void;

   @property({ attribute: false })
   declare onMyEvent?: (event: MyCustomEvent) => void;
   ```

4. **Implement event handlers**
   ```typescript
   private _handleClick(event: MouseEvent) {
     // Native composed - just invoke callback
     if (this.onClick) {
       this.onClick(event);
     }
   }

   private _handleMyEvent() {
     // Custom event - dual dispatch
     const customEvent = new CustomEvent<MyEventDetail>('myevent', {
       detail: { value: this.value },
       bubbles: true,
       composed: true,
     });
     this.dispatchEvent(customEvent);
     if (this.onMyEvent) {
       this.onMyEvent(customEvent);
     }
   }
   ```

5. **Run tests**
   ```bash
   npm run test -- ComponentName
   ```

#### B. React Wrapper (ReactComponentName.tsx)

1. **Update props interface**
   ```typescript
   export interface ReactComponentProps extends ComponentProps {
     children?: React.ReactNode;
     className?: string;
     id?: string;
     onClick?: (event: MouseEvent) => void;
     onMyEvent?: (event: MyCustomEvent) => void;
   }
   ```

2. **Map custom events**
   ```typescript
   export const ReactComponent = createComponent({
     tagName: "ag-component",
     elementClass: AgComponent,
     react: React,
     events: {
       onMyEvent: "myevent" as EventName<MyCustomEvent>,
       // Don't map native composed events like onClick
     },
   });
   ```

3. **Re-export types**
   ```typescript
   export type { MyCustomEvent } from "../core/Component";
   ```

#### C. Vue Wrapper (VueComponentName.vue)

1. **Update props interface**
   ```typescript
   export interface VueComponentProps
     extends Omit<ComponentProps, "onClick" | "onMyEvent"> {}
   ```

2. **Add emit definitions**
   ```typescript
   const emit = defineEmits<{
     click: [event: MouseEvent];
     myevent: [detail: MyEventDetail];
     "update:value": [value: string];  // if v-model needed
   }>();
   ```

3. **Add event handlers**
   ```typescript
   const handleClick = (event: MouseEvent) => {
     emit("click", event);
   };

   const handleMyEvent = (event: Event) => {
     const customEvent = event as MyCustomEvent;
     emit("myevent", customEvent.detail);
     emit("update:value", customEvent.detail.value);
   };
   ```

4. **Wire in template**
   ```vue
   <ag-component
     @click="handleClick"
     @myevent="handleMyEvent"
   />
   ```

#### D. Update Tests (_ComponentName.spec.ts)

Add test coverage for both patterns:

```typescript
it('dispatches myevent (addEventListener pattern)', async () => {
  const el = await fixture<AgComponent>(html`<ag-component></ag-component>`);
  const spy = vi.fn();
  el.addEventListener('myevent', spy);

  // trigger event
  await el.updateComplete;

  expect(spy).toHaveBeenCalledOnce();
  expect(spy.mock.calls[0][0].detail).toEqual({ value: 'expected' });
});

it('invokes onMyEvent callback (prop pattern)', async () => {
  const spy = vi.fn();
  const el = await fixture<AgComponent>(
    html`<ag-component .onMyEvent=${spy}></ag-component>`
  );

  // trigger event
  await el.updateComplete;

  expect(spy).toHaveBeenCalledOnce();
  expect(spy.mock.calls[0][0].detail).toEqual({ value: 'expected' });
});
```

#### E. Update Storybook Stories

For each framework (Lit, React, Vue):

1. **Add interactive event story**
   ```typescript
   export const WithEventHandling: Story = {
     args: { /* ... */ },
     render: (args) => ({
       setup() {
         const handleMyEvent = (e) => {
           console.log('Event fired:', e.detail);
           // Could also show in UI with reactive state
         };
         return { args, handleMyEvent };
       },
       template: `
         <ComponentName v-bind="args" @myevent="handleMyEvent" />
       `,
     }),
   };
   ```

2. **Verify in browser**
   ```bash
   npm run storybook
   ```

#### F. Update VitePress Documentation

1. **Update events table** (`docs/components/componentname.md`)
   ```markdown
   ## Events

   | Event Name | Type | Description | Detail Payload |
   |------------|------|-------------|----------------|
   | `myevent` | `MyCustomEvent` | Fired when... | `{ value: string }` |
   | `click` | `MouseEvent` | Native click event | Standard MouseEvent |
   ```

2. **Add usage examples**
   ```markdown
   ### Handling Events

   #### Lit
   \`\`\`typescript
   // Method 1: addEventListener
   component.addEventListener('myevent', (e) => {
     console.log(e.detail.value);
   });

   // Method 2: Callback prop
   html\`<ag-component .onMyEvent=\${(e) => console.log(e.detail.value)}></ag-component>\`
   \`\`\`

   #### React
   \`\`\`tsx
   <ReactComponent onMyEvent={(e) => console.log(e.detail.value)} />
   \`\`\`

   #### Vue
   \`\`\`vue
   <VueComponent @myevent="handleEvent" />
   <!-- or with v-model if applicable -->
   <VueComponent v-model:value="myValue" />
   \`\`\`
   ```

3. **Update interactive examples** (`docs/examples/ComponentNameExamples.vue`)

### Phase 3: Verification & Testing (15-30 min per component)

**Pre-commit checklist**:

```bash
# 1. Build library
cd v2/lib
npm run build

# 2. Run validation suite
npm run lint && npm run typecheck && npm run test

# 3. Verify Storybook (all 3 frameworks)
cd v2/playgrounds/lit && npm run storybook &
cd v2/playgrounds/react && npm run storybook &
cd v2/playgrounds/vue && npm run storybook &

# 4. Verify documentation site
cd v2/site
npm run reinstall:lib
npm run docs:dev

# 5. Manual testing checklist
- [ ] Component renders in all 3 Storybooks
- [ ] addEventListener pattern works
- [ ] Callback prop pattern works
- [ ] React wrapper events work
- [ ] Vue wrapper events + v-model work
- [ ] Documentation examples are correct
- [ ] No console errors in any environment
```

### Phase 4: Commit & Document (5 min per component)

```bash
# Commit pattern
git add v2/lib/src/components/ComponentName
git add v2/playgrounds/*/src/stories/ComponentName.stories.*
git add v2/site/docs/components/componentname.md
git add v2/site/docs/examples/ComponentNameExamples.vue

git commit -m "refactor(ComponentName): standardize event propagation

- Add dual-dispatch pattern for custom events
- Add callback props (onClick, onMyEvent)
- Update React wrapper with event mapping
- Update Vue wrapper with emits + v-model support
- Add event tests for both addEventListener and callback patterns
- Update Storybook stories with event handling examples
- Update VitePress docs with event API table and examples

Follows event conventions from COMPONENT_DEVELOPMENT_WORKFLOW.md
Related to Button and Collapsible refactors (commits 442432d, 11a657a)"
```

## Batch Processing Strategy

### Option 1: Component-by-Component (SAFEST)
- **Timeline**: 1-2 components per day
- **Pros**: Thorough testing, easy rollback, learn as you go
- **Cons**: Slow (~2-3 weeks for all Tier 1)

### Option 2: Tier-Based Batches (BALANCED - RECOMMENDED)
- **Timeline**: 1 tier per week
- **Process**:
  - Week 1: Tier 1 components (12 components)
    - Day 1-2: Audit all Tier 1
    - Day 3-5: Implement 2-3 per day
    - Weekend: Verify, test, fix issues
  - Week 2: Tier 2 components (5 components)
  - Week 3: Tier 3+4 if needed (batched)
- **Pros**: Systematic, manageable pace, good testing windows
- **Cons**: Still requires 2-3 weeks

### Option 3: Parallel Processing with Feature Branches (FASTEST)
- **Timeline**: 1-2 weeks total
- **Process**:
  - Create feature branch per tier: `feature/event-refactor-tier1`
  - Implement 3-4 components per day across branches
  - Merge tiers sequentially after verification
- **Pros**: Fastest completion
- **Cons**: More complex git management, harder to track issues

**Recommended**: **Option 2 (Tier-Based Batches)**

## Automation Opportunities

### Semi-Automated Refactor with LLM

Create a refactor prompt template:

```markdown
Refactor the [ComponentName] component to follow AgnosticUI v2 event conventions.

Context files:
- v2/docs2/COMPONENT_DEVELOPMENT_WORKFLOW.md (Event Conventions section)
- v2/lib/src/components/Button (reference implementation)
- v2/lib/src/components/Collapsible (reference implementation)

Component files:
- v2/lib/src/components/[ComponentName]/core/_[ComponentName].ts
- v2/lib/src/components/[ComponentName]/react/React[ComponentName].tsx
- v2/lib/src/components/[ComponentName]/vue/Vue[ComponentName].vue

Tasks:
1. Audit current events (list all dispatchEvent calls)
2. Categorize events (Native Composed / Native Non-Bubbling / Custom)
3. Implement standardized patterns:
   - Add event type definitions
   - Add callback props to Props interface
   - Add @property declarations with attribute: false
   - Implement dual-dispatch for custom events
   - Update React wrapper (map custom events only)
   - Update Vue wrapper (emits + v-model support)
4. Add tests for both addEventListener and callback patterns
5. Update Storybook stories with event handling examples (all 3 frameworks)
6. Update VitePress docs with event API table and examples

Follow these rules:
- Native composed events (click, input): Only add callback props, don't re-dispatch
- Native non-bubbling events (focus, blur): Re-dispatch from host + callback
- Custom events: Always dual-dispatch (DOM event + callback)
- Use lowercase event names, camelCase callback props
- Set bubbles: true, composed: true for all CustomEvents

Provide a summary of changes when complete.
```

You can run this for each component and review the output.

## Risk Mitigation

### 1. Feature Flags (If Needed)
For high-risk components, consider a compatibility mode:

```typescript
export interface ComponentProps {
  // New pattern
  onMyEvent?: (event: MyCustomEvent) => void;

  // Legacy support (deprecated)
  /** @deprecated Use onMyEvent instead */
  myEventHandler?: (value: string) => void;
}

private _handleMyEvent() {
  const customEvent = new CustomEvent<MyEventDetail>('myevent', {
    detail: { value: this.value },
    bubbles: true,
    composed: true,
  });
  this.dispatchEvent(customEvent);

  // New pattern
  if (this.onMyEvent) {
    this.onMyEvent(customEvent);
  }

  // Legacy support
  if (this.myEventHandler) {
    console.warn('myEventHandler is deprecated, use onMyEvent');
    this.myEventHandler(this.value);
  }
}
```

### 2. Git Strategy

**🚨 CRITICAL: V2 BRANCH INFORMATION 🚨**

**⚠️ DO NOT MERGE TO `master` OR `develop`! ⚠️**

**AgnosticUI v2 Working Branch**: `feature/agnosticui-v2-integration`

All v2 work, including event refactors, MUST be merged to `feature/agnosticui-v2-integration`, NOT to `master` or `develop`. Those branches are for v1.

```bash
# CORRECT: Create refactor branch from v2 working branch
git checkout feature/agnosticui-v2-integration
git checkout -b feature/[component]-event-refactor

# For each component, implement with individual commits
# ... make changes ...

# CORRECT: Merge back to v2 working branch
git checkout feature/agnosticui-v2-integration
git merge feature/[component]-event-refactor
# Test thoroughly
npm run build && npm run lint && npm run typecheck && npm run test

# CORRECT: Push to v2 working branch
git push origin feature/agnosticui-v2-integration

# ❌ WRONG - DO NOT DO THIS:
# git checkout master  # ← NO!
# git checkout develop # ← NO!
# git merge ...        # ← NO!
```

**Branch Hierarchy**:
```
master (v1) ← DO NOT TOUCH
develop (v1) ← DO NOT TOUCH
feature/agnosticui-v2-integration (v2) ← MERGE HERE
  └── feature/[component]-event-refactor ← Work here
```

### 3. Rollback Strategy

```bash
# If issues discovered in Tier 1:
git revert <commit-hash>  # Revert specific component
# OR
git reset --hard <pre-tier-commit>  # Reset entire tier (before push)

# After push to main:
git revert <merge-commit>  # Revert entire tier merge
```

### 4. Testing Checkpoints

After each tier:
```bash
# Run full test suite
npm run test

# Check for type regressions
npm run typecheck

# Verify Storybooks build
cd playgrounds/lit && npm run build-storybook
cd playgrounds/react && npm run build-storybook
cd playgrounds/vue && npm run build-storybook

# Smoke test docs site
cd site && npm run docs:build
```

## Progress Tracking

Create a tracking file `EVENT_REFACTOR_PROGRESS.md`:

```markdown
# Event Refactor Progress

## Tier 1: Interactive Components (12 total)

- [x] Button ✅ (commits: 442432d, 11a657a)
- [x] Collapsible ✅ (commits: 442432d, 11a657a, 6888e11)
- [ ] Toggle
- [ ] Checkbox
- [ ] Radio
- [ ] Input
- [ ] Select
- [ ] Tabs
- [ ] Accordion
- [ ] Dialog
- [ ] Drawer
- [ ] Toast
- [ ] Menu
- [ ] Tooltip

## Tier 2: Native Event Exposure (5 total)

- [ ] IconButton
- [ ] Alert
- [ ] Tag
- [ ] Breadcrumb
- [ ] Header

## Tier 3: Display-Only (12 total)

(Batch these if needed)

## Tier 4: Container/Utility (2 total)

- [ ] AccordionGroup
- [ ] CloseButton

---

**Current Status**: Tier 1 in progress (2/12 complete)
**Target Completion**: [Date]
**Blockers**: None
```

## Next Steps

1. **Review this strategy** - Adjust timeline/approach based on your availability
2. **Create tracking branch** - `feature/event-refactor-standardization`
3. **Audit Tier 1 components** - Spend 1-2 hours creating audit documents for all Tier 1
4. **Start with Toggle or Checkbox** - Both are similar to Button pattern
5. **Establish rhythm** - Once you complete 2-3 components, the process becomes mechanical
6. **Iterate** - Adjust this strategy based on what you learn

Would you like me to:
1. Create the progress tracking file?
2. Start with an audit of a specific Tier 1 component (e.g., Toggle)?
3. Generate the LLM refactor prompt template as a reusable file?
4. Help with any other aspect of this refactor strategy?

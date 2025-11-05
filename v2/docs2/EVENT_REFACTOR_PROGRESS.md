# Event Refactor Progress

**⚠️ ALL v2 work merges to `feature/agnosticui-v2-integration` - NOT `master` or `develop`! ⚠️**

See [EVENT_REFACTOR_STRATEGY.md](./EVENT_REFACTOR_STRATEGY.md#2-git-strategy) for complete Git workflow.

## Related Documentation

- **[EVENT_REFACTOR_STRATEGY.md](./EVENT_REFACTOR_STRATEGY.md)** - Comprehensive refactor strategy including:
  - Detailed component prioritization rationale (4 tiers)
  - Complete phase-by-phase refactor process with time estimates
  - Three execution strategies (component-by-component, tier-based, parallel)
  - Risk mitigation strategies (feature flags, git workflow, rollback procedures)
  - Testing checkpoints and verification procedures
  - Batch processing options and automation opportunities
- **[COMPONENT_DEVELOPMENT_WORKFLOW.md](./COMPONENT_DEVELOPMENT_WORKFLOW.md#event-conventions)** - Event Conventions section with technical implementation details

**Use this file (EVENT_REFACTOR_PROGRESS.md) for**:
- Quick-start LLM prompt template
- Real-time progress tracking
- Per-component status and notes

**Use EVENT_REFACTOR_STRATEGY.md for**:
- Understanding the overall approach and timeline
- Risk management and rollback procedures
- Detailed per-phase checklists and automation strategies

---

## Quick Start for LLM Agents

When asked to refactor a component, follow this process:

1. **Read context files**:
   - `v2/docs2/COMPONENT_DEVELOPMENT_WORKFLOW.md` (Event Conventions section)
   - `v2/lib/src/components/Button` (reference implementation)
   - `v2/lib/src/components/Collapsible` (reference implementation)
   - This file (EVENT_REFACTOR_PROGRESS.md) for status and prompt template

2. **Use the LLM Refactor Prompt Template below**

3. **Update progress tracking** at the bottom of this file when complete

---

## LLM Refactor Prompt Template

```
Refactor the [ComponentName] component to follow AgnosticUI v2 event conventions.

IMPORTANT CONTEXT FILES (read these first):
- v2/docs2/COMPONENT_DEVELOPMENT_WORKFLOW.md (Event Conventions section)
- v2/lib/src/components/Button/core/_Button.ts (reference implementation)
- v2/lib/src/components/Collapsible/core/_Collapsible.ts (reference implementation)

TARGET COMPONENT FILES:
- v2/lib/src/components/[ComponentName]/core/_[ComponentName].ts
- v2/lib/src/components/[ComponentName]/react/React[ComponentName].tsx
- v2/lib/src/components/[ComponentName]/vue/Vue[ComponentName].vue
- v2/lib/src/components/[ComponentName]/core/_[ComponentName].spec.ts

TASKS (complete in order):

Phase 1: AUDIT (provide summary before proceeding)
1. Read the core component file
2. List all current events:
   - DOM events dispatched (search for dispatchEvent)
   - Native events that should be exposed (focus, blur, etc.)
   - Events consumers might expect
3. Categorize each event:
   - [Native Composed] - click, input, change, etc. (works automatically)
   - [Native Non-Bubbling] - focus, blur (must re-dispatch from host)
   - [Custom] - component-specific state changes (must dual-dispatch)
4. Identify required changes and risk level (LOW/MEDIUM/HIGH)

Phase 2: IMPLEMENTATION

A. Core Component (_[ComponentName].ts):
   1. Add event type definitions at top of file:
      - export interface [Event]Detail { ... }
      - export type [Event]Event = CustomEvent<[Event]Detail>
   2. Update Props interface with callback props:
      - onClick?, onFocus?, onBlur?, on[CustomEvent]?
   3. Add @property({ attribute: false }) declarations for all callbacks
   4. Implement event handlers following patterns:
      - Native composed events: Just invoke callback if provided
      - Native non-bubbling events: Re-dispatch from host + invoke callback
      - Custom events: Dual-dispatch (dispatchEvent + callback)
   5. Ensure all CustomEvents use: bubbles: true, composed: true

B. React Wrapper (React[ComponentName].tsx):
   1. Update ReactComponentProps interface with all event callbacks
   2. Map ONLY custom events in createComponent events object
   3. Use: as EventName<CustomEventType> for typing
   4. Re-export event types

C. Vue Wrapper (Vue[ComponentName].vue):
   1. Update VueComponentProps to Omit callback props
   2. Add defineEmits with all events (native + custom)
   3. For custom events: emit detail payload (not full CustomEvent)
   4. For native events: emit full event object
   5. Add "update:propName" emits for v-model support where appropriate
   6. Create handler functions that bridge web component events to Vue emits
   7. Wire handlers in template with @eventname

D. Tests (_[ComponentName].spec.ts):
   1. Add test for addEventListener pattern (custom events)
   2. Add test for callback prop pattern (custom events)
   3. Add test for native composed event propagation
   4. Verify tests pass: npm run test -- [ComponentName]

Phase 3: STORYBOOK & DOCS (if time permits, otherwise note as TODO)

E. Storybook Stories (all 3 frameworks):
   - Add interactive event handling stories
   - Show console logging or reactive UI updates
   - Verify in browser

F. VitePress Documentation:
   - Update events API table in docs/components/[componentname].md
     - **CRITICAL**: Use standard format: `Event | Framework | Detail | Description`
     - Framework column shows: `Vue: @eventname`<br>`React: onEventName`<br>`Lit: @eventname`
     - Match Button/Collapsible format for consistency
     - Example:
       ```markdown
       | Event    | Framework                                             | Detail              | Description                    |
       | -------- | ----------------------------------------------------- | ------------------- | ------------------------------ |
       | `toggle` | Vue: `@toggle`<br>React: `onToggle`<br>Lit: `@toggle` | `{ open: boolean }` | Fired when state changes.      |
       ```
   - Add usage examples for all 3 frameworks
   - Update interactive examples in docs/examples/[ComponentName]Examples.vue

Phase 4: VERIFICATION

Run these checks:
1. npm run build (from v2/lib)
2. npm run lint && npm run typecheck && npm run test
3. Review changes for correctness
4. Summarize what was changed

CRITICAL RULES TO FOLLOW:
- Native composed events (click, input, change): Only add callback props, don't re-dispatch
- Native non-bubbling events (focus, blur): Re-dispatch from host + invoke callback
- Custom events: Always dual-dispatch (dispatchEvent then callback)
- Use lowercase event names ('toggle'), camelCase callback props (onToggle)
- Always set bubbles: true, composed: true for CustomEvents
- Use @property({ attribute: false }) for all callback props
- In React: Only map custom events, native events work automatically
- In Vue: Emit detail for custom events, full event for native events

OUTPUT FORMAT:

Provide a structured response:

## [ComponentName] Event Refactor Summary

### Audit Results
- Current events: [list]
- Event categorization: [list with categories]
- Risk level: [LOW/MEDIUM/HIGH]

### Changes Made

#### Core Component
- [List of changes]

#### React Wrapper
- [List of changes]

#### Vue Wrapper
- [List of changes]

#### Tests
- [List of new/updated tests]

### Verification
- [ ] Build successful
- [ ] Tests passing
- [ ] No TypeScript errors
- [ ] No lint errors

### Storybook & Docs Status
- [ ] Storybook stories updated (or TODO)
- [ ] VitePress docs updated (or TODO)

### Breaking Changes
- [None or list any breaking changes]

### Next Steps
- [Any remaining tasks or notes]
```

---

## Progress Tracking

### Overview

- **Total Components**: 31
- **Completed**: 2 (Button, Collapsible)
- **Remaining**: 29
- **Current Focus**: Tier 1 (Interactive Components)

---

## Tier 1: Interactive Components with Custom Events (12 total)

**Priority**: HIGH - These have the most complex event patterns and highest consumer impact

**Status**: 7/12 complete (58%)

| Component | Status | Branch | Commits | Risk | Notes |
|-----------|--------|--------|---------|------|-------|
| Button | ✅ Complete | main | 442432d, 11a657a | LOW | Reference implementation |
| Collapsible | ✅ Complete | main | 442432d, 11a657a, 6888e11 | LOW | Reference implementation |
| Toggle | ✅ Complete | feature/toggle-event-refactor | 47db8e6, 0881575, b9028ca, 056a9f7, adb05d5 | LOW | Dual-dispatch + v-model:checked + unified docs |
| Checkbox | ✅ Complete | feature/checkbox-event-refactor | 38222d0, 295e06d | MEDIUM | Dual-dispatch + v-model:checked/indeterminate + comprehensive event stories |
| Radio | ✅ Complete | feature/radio-event-refactor | 10eeca4, 85e05b8 | MEDIUM | Dual-dispatch + v-model:checked + radio group patterns |
| Input | ✅ Complete | feature/radio-event-refactor | (on radio branch) | HIGH | Complex: input/change/blur/focus/validation |
| Select | ✅ Complete | feature/select-event-refactor | (pending commit) | HIGH | Dual-dispatch + v-model:value + comprehensive event stories |
| Tabs | ✅ Complete | feature/tabs-event-refactor | (merged) | MEDIUM | Active tab state, navigation |
| Accordion | ✅ Complete | feature/accordion-event-refactor | (merged) | MEDIUM | Expand/collapse, group coordination |
| Dialog  ✅| ⏳ Pending | - | - | MEDIUM | Open/close, modal behavior |
| Drawer  ✅| ⏳ Pending | - | - | MEDIUM | Open/close, slide behavior |
| Toast ✅| ⏳ Pending | - | - | LOW | Dismiss action |
| Menu | ⏳ Pending | - | - | HIGH | Selection + open/close, keyboard nav |
| Tooltip | ⏳ Pending | - | - | LOW | Show/hide state |

---

## Tier 2: Components with Native Event Exposure (5 total)

**Priority**: MEDIUM - Simpler patterns, often just adding callback props

**Status**: 0/5 complete (0%)

| Component | Status | Branch | Commits | Risk | Notes |
|-----------|--------|--------|---------|------|-------|
| IconButton | ⏳ Pending | - | - | LOW | Extends Button patterns |
| Alert | ⏳ Pending | - | - | LOW | Close button, dismiss event |
| Tag | ⏳ Pending | - | - | LOW | Optional remove button |
| Breadcrumb | ⏳ Pending | - | - | LOW | Click navigation |
| Header | ⏳ Pending | - | - | LOW | Interactive elements (burger menu) |

---

## Tier 3: Display-Only Components (12 total)

**Priority**: LOW - Minimal or no interactive events

**Status**: 0/12 complete (0%)

| Component | Status | Notes |
|-----------|--------|-------|
| Card | ⏳ Pending | May have click for clickable variant |
| Avatar | ⏳ Pending | Presentational, no custom events |
| Badge | ⏳ Pending | Presentational, no custom events |
| Divider | ⏳ Pending | Presentational, no events |
| Icon | ⏳ Pending | Presentational, no events |
| Kbd | ⏳ Pending | Presentational, no events |
| Loader | ⏳ Pending | Presentational, no events |
| Progress | ⏳ Pending | Presentational, no events |
| Spinner | ⏳ Pending | Presentational, no events |

**Note**: These may be batch-processed or skipped if no event exposure is needed.

---

## Tier 4: Container/Utility Components (2 total)

**Priority**: MEDIUM - Special coordination logic

**Status**: 0/2 complete (0%)

| Component | Status | Branch | Commits | Risk | Notes |
|-----------|--------|--------|---------|------|-------|
| AccordionGroup | ⏳ Pending | - | - | MEDIUM | Coordinates Accordion events |
| CloseButton | ⏳ Pending | - | - | LOW | Simple click event |

---

## Timeline & Milestones

### Week 1: Tier 1 Interactive Components (Target: 12 components)
- **Days 1-2**: Audit all Tier 1 components
- **Days 3-5**: Implement 2-3 components per day
- **Weekend**: Verify, test, fix issues

### Week 2: Tier 2 Native Event Exposure (Target: 5 components)
- **Days 1-3**: Implement all Tier 2 components
- **Days 4-5**: Verify, update docs, fix issues

### Week 3: Tier 3 & 4 (Optional/Batch)
- **Days 1-2**: Audit and batch-process Tier 3 if needed
- **Days 3-4**: Handle Tier 4 (coordination components)
- **Day 5**: Final verification, documentation updates

---

## Git Strategy

```bash
# Main refactor branch
feature/event-refactor-standardization

# Per-component branches (merge to main when verified)
feature/[component]-event-refactor

# Commit message template
refactor([ComponentName]): standardize event propagation

- Add dual-dispatch pattern for custom events
- Add callback props (onClick, on[Event])
- Update React wrapper with event mapping
- Update Vue wrapper with emits + v-model support
- Add event tests for both addEventListener and callback patterns
- Update Storybook stories with event handling examples
- Update VitePress docs with event API table and examples

Follows event conventions from COMPONENT_DEVELOPMENT_WORKFLOW.md
Ref: Button (442432d, 11a657a), Collapsible (6888e11)
```

## Notes & Lessons Learned

### Best Practices Discovered
1. Start with audit phase - prevents mid-refactor surprises
2. Toggle/Checkbox are easiest after Button (similar patterns)
3. Input/Select are most complex (multiple native + custom events)
4. Vue v-model support is straightforward with update:propName emits

### Common Pitfalls to Avoid
1. Forgetting `attribute: false` on callback props
2. Re-dispatching native composed events (unnecessary)
3. Not setting `bubbles: true, composed: true` on CustomEvents
4. Mapping native events in React wrapper (they work automatically)

### Time Estimates (Actual)
- **Simple components** (Toggle, Toast, IconButton): 30-45 min
- **Medium components** (Checkbox, Radio, Tabs): 45-60 min
- **Complex components** (Input, Select, Menu): 60-90 min

---

**Last Updated**: 2025-10-30
**Current Phase**: Tier 1 - Radio complete (5/12, 42%), ready for next component

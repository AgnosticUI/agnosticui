# React Onboarding Wizard Simple Test Spec

You are a Senior Frontend Platform Engineer. Output a complete, production-ready React component code file that implements a multi-step onboarding wizard layout based on these strict guidelines:

## Strict Execution Guardrails

- Output ONLY the unified wizard main component file layout (e.g., `App.tsx`).
- Do NOT rewrite, outline, or output implementation files for the underlying components (ReactButton.tsx, ReactProgress.tsx, etc.).
- Assume the primitives already exist at their local relative paths and work as intended.
- You MUST maintain a rigorous state machine configuration mapping a total of 6 view positions: Position 1 (`path` views), Positions 2, 4, 5 (`interests` multi-category views), Position 3 (`interstitial` confirmation view), and Position 6 (`review` summary step).

## CSS Architecture

- Do NOT use CSS Modules for layout styles (no module.css).
- All layout components must use global CSS utilities and design token parameters.

## Token Reference

- You MUST use the modern border-radius token: `--ag-radius-md`
- Do NOT use the deprecated token: `--ag-border-radius-md`

## Component Hierarchy & Imports

- You MUST import individual AgnosticUI React primitives using standard destructuring or explicit paths.
- Component paths MUST resolve locally relative to the component ecosystem directory layout.
- You MUST import each primitive exclusively from its own distinct relative path. Do NOT combine multiple different primitives into a single component import path.

### Reference Import Pattern

Use this exact style with explicit relative paths for linking your UI primitives:
{% raw %}

```tsx
import { ReactButton } from "./components/ag/Button/react/ReactButton";
import { ReactProgress } from "./components/ag/Progress/react/ReactProgress";
import { ReactAlert } from "./components/ag/Alert/react/ReactAlert";
import { ReactSelectionCardGroup } from "./components/ag/SelectionCardGroup/react/ReactSelectionCardGroup";
import { ReactSelectionCard } from "./components/ag/SelectionCard/react/ReactSelectionCard";
```

{% endraw %}

## Reference Implementation Patterns

Use these exact code block patterns for state bindings, layout loops, slots, and events. Do NOT use sub-components or dot-notation wrappers:

{% raw %}

```tsx
// Progress Indicator State Mapping
<ReactProgress value={progressValue} />

// Single Selection Path Layout (Radio Style)
<ReactSelectionCardGroup
  type="radio"
  name="path"
  legend="Choose your path"
  legendHidden
  onSelectionChange={handlePathChange}
>
  <ReactSelectionCard value="personal" label="Personal Projects">
    <div className="path-card-content">
      <User size={48} />
      <h3>Personal Projects</h3>
    </div>
  </ReactSelectionCard>
</ReactSelectionCardGroup>

// Conditional Multi-Selection Interest Layouts (Checkbox Style)
<ReactSelectionCardGroup
  type="checkbox"
  name={`interests-${currentCategory.id}`}
  legend={currentCategory.title}
  legendHidden
  values={selectedByCategory[currentCategory.id] ?? []}
  onSelectionChange={(e) => handleInterestChange(e as unknown as Event, currentCategory.id)}
>
  {currentCategory.items.map(item => (
    <ReactSelectionCard key={item.value} value={item.value} label={item.label}>
      {item.label}
    </ReactSelectionCard>
  ))}
</ReactSelectionCardGroup>

// Safe Structural Alerts for Summaries
<ReactAlert variant="info">
  <strong>What's next?</strong>
  <p>Based on your selections, we've customized your dashboard.</p>
</ReactAlert>

// Navigation Actions
<ReactButton bordered shape="rounded" onClick={handleBack}>
  Back
</ReactButton>
```

{% endraw %}

## Multi-Step Interaction Architecture

- State evaluation for proceeding (`disabled` state logic) must require:
  - Position 1: `selectedPath` must not be null.
  - Positions 2, 4, 5: At least one checked item inside the actively mounted interest category.
  - Position 3 & 6: Unlocked navigation.
- Listen directly to custom component lifecycle hooks: parse values exclusively out of `e.detail.selectedValues`.

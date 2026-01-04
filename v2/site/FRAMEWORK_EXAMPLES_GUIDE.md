# Framework Examples Implementation Guide

**Quick Start**: Add Vue/Lit/React examples to any AgnosticUI component in 2 steps.

## Components Completed

- ✅ Accordion
- ✅ Alert
- ✅ AspectRatio
- ✅ Button

## Reference Implementation

**See complete working example (Button component)**:
- Vue: `v2/site/docs/examples/ButtonExamples.vue`
- Lit: `v2/site/docs/examples/ButtonLitExamples.js`
- React: `v2/site/docs/examples/ButtonReactExamples.jsx`
- Markdown: `v2/site/docs/components/button.md`
- Core Component: `v2/site/docs/.vitepress/theme/components/FrameworkExample.vue`

## Prerequisites

- ✅ `@stackblitz/sdk@1.11.0` installed
- ✅ Custom element config in `v2/site/docs/.vitepress/config.mts`:
  ```typescript
  isCustomElement: (tag) => tag.startsWith('ag-') || tag.endsWith('-lit-examples')
  ```
- ✅ FrameworkExample.vue exists at `v2/site/docs/.vitepress/theme/components/FrameworkExample.vue`
- ✅ Utilities.css exists at `v2/site/docs/.vitepress/theme/utilities.css`

## Implementation Pattern

### Step 1: Create React Example File

**Location**: `v2/site/docs/examples/[Component]ReactExamples.jsx`

**Template**:
```jsx
import { useState } from "react";
import { React[Component] } from "agnosticui-core/[component]/react";
import { ReactIcon } from "agnosticui-core/icon/react";
import { ReactVisuallyHidden } from "agnosticui-core/visually-hidden/react";

export default function [Component]ReactExamples() {
  return (
    <section>
      {/* Default Example */}
      <div className="mbe4">
        <React[Component]>Default</React[Component]>
      </div>

      {/* Add all variants following Vue/Lit examples */}
      {/* Use className (not class) */}
      {/* Use utility classes: mbe4, mie2, mie3, mis1, mis2, stacked-mobile, flex-inline */}
    </section>
  );
}
```

**Rules**:
- Mirror `[Component]Examples.vue` structure exactly
- Use `className` instead of `class`
- Import from `agnosticui-core/[component]/react`
- Use utility classes from utilities.css: `mbe4`, `mie2`, `stacked-mobile`, etc.
- Wrap icons with `<ReactIcon size="18" noFill>`
- Use `ReactVisuallyHidden` for icon-only buttons

### Step 2: Update Component Documentation

**Location**: `v2/site/docs/components/[component].md`

**Find the `## Examples` section and replace with**:

```markdown
## Examples

<FrameworkExample
  component="[component]"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <[Component]Examples />
  </template>
  <template #lit>
    <[component]-lit-examples></[component]-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import [Component]Examples from '../examples/[Component]Examples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/[Component]LitExamples.js'
import vueCode from '../examples/[Component]Examples.vue?raw'
import litCode from '../examples/[Component]LitExamples.js?raw'
import reactCode from '../examples/[Component]ReactExamples.jsx?raw'
</script>
```

**Key Points**:
- Import React code with `?raw` suffix (treats as text, not executable)
- NO `<template #react>` - React shows code only, no live preview
- Vue and Lit tabs show live previews
- React tab shows syntax-highlighted code + "Open in StackBlitz" button

## That's It! ✅

No other files need modification. FrameworkExample.vue handles:
- ✅ All 3 tabs (Vue, Lit, React)
- ✅ Syntax highlighting with Shiki
- ✅ StackBlitz SDK integration
- ✅ Theme toggle in StackBlitz
- ✅ Utilities.css bundled in StackBlitz
- ✅ AgnosticUI token CSS imports

## Testing Checklist

After implementing:

- [ ] Navigate to `/components/[component]`
- [ ] Verify 3 tabs appear: Vue | Lit | React
- [ ] Click Vue tab → Live preview + code visible
- [ ] Click Lit tab → Live preview + code visible
- [ ] Click React tab → Code visible + "Open in StackBlitz" button
- [ ] Click StackBlitz button → Opens in new window
- [ ] In StackBlitz: Verify theme toggle (top-right circle button)
- [ ] In StackBlitz: Toggle theme → Verify colors change smoothly
- [ ] In StackBlitz: Verify examples render with proper spacing

## Common Patterns

### Icon Usage in React
```jsx
<ReactButton variant="primary" shape="rounded">
  <ReactIcon size="18" noFill>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  </ReactIcon>
  <span className="mis1">Button Text</span>
</ReactButton>
```

### Icon-Only Button
```jsx
<ReactButton variant="primary" size="sm" shape="rounded" title="Action">
  <ReactIcon size="16" noFill>
    <svg>{/* icon */}</svg>
  </ReactIcon>
  <ReactVisuallyHidden>Action Label</ReactVisuallyHidden>
</ReactButton>
```

### State Management
```jsx
const [isPressed, setIsPressed] = useState(false);

const handleToggle = (event) => {
  setIsPressed(event.detail.pressed);
};

<ReactButton toggle pressed={isPressed} onToggle={handleToggle}>
  Toggle Me
</ReactButton>
```

## Utility Classes Reference

Available in StackBlitz automatically:

**Margin Block End**: `mbe0`, `mbe1`, `mbe2`, `mbe3`, `mbe4`, `mbe5`, `mbe6`, `mbe8`
**Margin Inline End**: `mie0`, `mie1`, `mie2`, `mie3`, `mie4`, `mie5`, `mie6`, `mie8`
**Margin Block Start**: `mbs0-mbs8` (same pattern)
**Margin Inline Start**: `mis0-mis8` (same pattern)
**Layout**: `flex`, `flex-inline`, `flex-col`, `stacked`, `stacked-mobile`
**Alignment**: `items-center`, `justify-center`, `text-center`

## Complete Working Example

**Button Component** (full implementation):

| File | Purpose | Location |
|------|---------|----------|
| React Examples | All button variants in React | `v2/site/docs/examples/ButtonReactExamples.jsx` |
| Vue Examples | All button variants in Vue | `v2/site/docs/examples/ButtonExamples.vue` |
| Lit Examples | All button variants in Lit | `v2/site/docs/examples/ButtonLitExamples.js` |
| Documentation | Integration in markdown | `v2/site/docs/components/button.md` |
| Framework Component | Tab handler + StackBlitz | `v2/site/docs/.vitepress/theme/components/FrameworkExample.vue` |

**Pattern**: Copy the Button structure and replace `Button` with your component name.

---

**One-Shot Prompt Template**:

"Implement framework examples for the [COMPONENT] component following the pattern in FRAMEWORK_EXAMPLES_GUIDE.md. Create [Component]ReactExamples.jsx mirroring the Vue examples structure, and update [component].md with the FrameworkExample component."

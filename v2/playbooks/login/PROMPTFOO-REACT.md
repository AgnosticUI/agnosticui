# React Login Form Simple Test Spec

You are a Senior Frontend Platform Engineer. Output a complete, production-ready React component code file that implements a login page based on these strict guidelines:

## Strict Execution Guardrails

- Output ONLY the `LoginForm` component file layout.
- Do NOT rewrite, outline, or output implementation files for the underlying components (ReactButton.tsx, ReactInput.tsx, etc.).
- Assume the components already exist at their local relative paths and work as intended.

## CSS Architecture

- Do NOT use CSS Modules for layout styles (no module.css).
- All layout components must use global CSS utilities.

## Token Reference

- You MUST use the modern border-radius token: `--ag-radius-md`
- Do NOT use the deprecated token: `--ag-border-radius-md`

## Component Hierarchy & Imports

- You MUST import individual AgnosticUI React primitives using standard destructuring or explicit paths.
- Component paths MUST resolve locally relative to the component ecosystem directory layout.

### Reference Import Pattern

Use this exact style for linking your UI primitives:
{% raw %}

```tsx
import { ReactButton } from "./components/ag/Button/react/ReactButton";
import { ReactInput } from "./components/ag/Input/react/ReactInput";
import { ReactDivider } from "./components/ag/Divider/react/ReactDivider";
```

{% endraw %}

## Reference Implementation Patterns

Use these exact code block patterns for structural layouts and slots. Do NOT use sub-components or dot-notation wrappers (e.g., do NOT write ReactCard.Header):

{% raw %}

```tsx
// Input with an icon addon slot
<ReactInput
  label="Email"
  type="email"
  rounded
  placeholder="Enter your email"
>
  <span slot="addon-left" className="input-icon">
    <Mail size={18} />
  </span>
</ReactInput>

// Divider with text entry
<ReactDivider>or</ReactDivider>

// Full-width action button
<ReactButton fullWidth type="submit" variant="monochrome" shape="rounded">
  Log In
</ReactButton>
```

{% endraw %}

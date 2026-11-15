# `@agnosticui/a2ui-react`

Spec-compliant **A2UI `v1.0`** React 18/19 renderer (`<AgA2uiSurface>`) and `useA2uiSurface()` hook backed by `@agnosticui/a2ui-lit`.

## Quick Usage

```tsx
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import {
  AgA2uiSurface,
  useA2uiSurface,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-react';

export function SupportPanel({ messages }: { messages: A2uiWireMessage[] }) {
  const { surface, surfaceRef, processMessages } = useA2uiSurface({
    validateOnAction: true,
    onAction: (detail) => console.log('Validated A2UI action:', detail),
  });

  React.useEffect(() => {
    processMessages(messages);
  }, [messages, processMessages]);

  return <AgA2uiSurface ref={surfaceRef} surface={surface} />;
}
```

## Local Development Workflow

`@agnosticui/a2ui-react` depends on compiled types and runtime re-exports from `@agnosticui/a2ui-lit` (`../lit/dist`). Always build `renderers/lit` first when testing or building from the **repository root**:

```bash
# Build lit first, then test and build react
(cd v2/a2ui/renderers/lit && npm test && npm run build) && \
(cd v2/a2ui/renderers/react && npm test && npm run build)
```

### Monorepo Deduplication (`vitest.shared.mts`)

Vitest uses `v2/a2ui/vitest.shared.mts` (`sharedA2uiResolve(['react', 'react-dom'])`) so `lit` and `@lit-labs/signals` resolve to a single runtime instance across `file:../lit` during local test runs.

### Updating `agnosticui-core` Local Tarball

If you modify components in `v2/lib`, rebuild and re-pack `v2/lib`, then reinstall in both `lit` and `react`:

```bash
(cd v2/lib && npm run build && npm pack)
(cd v2/a2ui/renderers/lit && npm install && npm run build)
(cd v2/a2ui/renderers/react && npm install && npm test && npm run build)
```

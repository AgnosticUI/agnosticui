# Generative UI (A2UI v1.0)

AgnosticUI provides a spec-compliant **A2UI `v1.0`** component catalog and multi-framework Web Component renderers (**`@agnosticui/a2ui-lit`**, **`@agnosticui/a2ui-react`**, and **`@agnosticui/a2ui-vue`**) that let AI agents stream rich, accessible, form-validated UI surfaces at runtime—while preserving AgnosticUI's **21+ runtime skins** and **Light/Dark mode** CSS custom properties (`--ag-*`).

::: info Protocol & Catalog Metadata
- **Live Interactive Studio:** [https://agnosticui-a2ui.netlify.app](https://agnosticui-a2ui.netlify.app) (`$0` Local UI Compiler default + 22 runtime skins + optional BYOK Gemini key)
- **Supported A2UI Protocol Version:** `v1.0`
- **Catalog ID:** `https://agnosticui.com/a2ui/v1/catalog.json`
- **Catalog Schema:** [`v2/a2ui/catalog/agnosticui-catalog.json`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/a2ui/catalog/agnosticui-catalog.json)
- **npm Packages:** `@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, `@agnosticui/a2ui-vue`
:::

---

## How A2UI v1.0 Works with AgnosticUI

An agent emits a stream of **A2UI `v1.0` wire messages** (`createSurface`, `updateComponents`, `updateDataModel`). `@a2ui/web_core` processes the stream into a reactive surface model, and `<a2ui-surface>` renders native `ag-*` custom elements in Light DOM:

```json
[
  {
    "version": "1.0",
    "createSurface": {
      "surfaceId": "support_surface",
      "catalogId": "https://agnosticui.com/a2ui/v1/catalog.json"
    }
  },
  {
    "version": "1.0",
    "updateComponents": {
      "surfaceId": "support_surface",
      "components": [
        {
          "id": "root",
          "component": "AgCard",
          "shadow": true,
          "stacked": true,
          "children": ["heading_text", "email_input", "submit_btn"]
        },
        {
          "id": "heading_text",
          "component": "AgText",
          "el": "h2",
          "text": "Enterprise Account Escalation"
        },
        {
          "id": "email_input",
          "component": "AgInput",
          "label": "Work Email",
          "type": "email",
          "required": true,
          "value": { "@path": "/form/email" }
        },
        {
          "id": "submit_btn",
          "component": "AgButton",
          "variant": "primary",
          "shape": "rounded",
          "label": "Submit Escalation",
          "action": { "event": { "name": "submit_escalation" } }
        }
      ]
    }
  },
  {
    "version": "1.0",
    "updateDataModel": {
      "surfaceId": "support_surface",
      "path": "/",
      "value": { "form": { "email": "" } }
    }
  }
]
```

---

## Registering & Rendering a Surface

The example below uses **`@agnosticui/a2ui-lit`**. AgnosticUI also publishes **`@agnosticui/a2ui-react`** and **`@agnosticui/a2ui-vue`**, which wrap `<a2ui-surface>` with idiomatic hooks/composables and automatic FACE validation.

::: code-group

```ts [Lit (@agnosticui/a2ui-lit)]
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import { MessageProcessor } from '@a2ui/web_core/v1_0';
import { A2uiSurface, type LitComponentApi } from '@a2ui/lit';
import {
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
} from '@agnosticui/a2ui-lit';

registerAgnosticUICatalog();

const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
const surfaceEl = new A2uiSurface();
document.getElementById('mount')?.appendChild(surfaceEl);

surfaceEl.addEventListener('a2uiaction', (event: Event) => {
  if (!runSurfaceValidation(surfaceEl, true)) return;
  console.log('Validated A2UI action:', (event as CustomEvent).detail);
});
```

```tsx [React (@agnosticui/a2ui-react)]
import { useEffect } from 'react';
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import {
  AgA2uiSurface,
  useA2uiSurface,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-react';

// Wire messages shown in the JSON payload above
const messages: A2uiWireMessage[] = [/* ... */];

export function AgentSurface() {
  const { surfaceRef, surface, streamMessages } = useA2uiSurface({
    onAction: (detail) => console.log('Validated A2UI action:', detail),
  });

  useEffect(() => {
    void streamMessages(messages);
  }, [streamMessages]);

  return <AgA2uiSurface ref={surfaceRef} surface={surface} />;
}
```

```vue [Vue (@agnosticui/a2ui-vue)]
<script setup lang="ts">
import { onMounted } from 'vue';
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import {
  AgA2uiSurface,
  useA2uiSurface,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-vue';

// Wire messages shown in the JSON payload above
const messages: A2uiWireMessage[] = [/* ... */];

const { surfaceRef, surface, streamMessages } = useA2uiSurface({
  onAction: (detail) => console.log('Validated A2UI action:', detail),
});

onMounted(() => {
  void streamMessages(messages);
});
</script>

<template>
  <AgA2uiSurface ref="surfaceRef" :surface="surface" />
</template>
```
:::

---

## Supported Catalog Components (25)

Generated deterministically via `ts-morph` from AgnosticUI's core TypeScript prop interfaces:

- **Layout & Structure:** `AgCard`, `AgFieldset`, `AgDivider`, `AgHeader`, `AgAccordion`, `AgTabs`
- **Conversational & Feedback:** `AgMessageBubble`, `AgAlert`, `AgBadge`, `AgAvatar`, `AgTag`, `AgEmptyState`, `AgTimeline`, `AgProgress`, `AgProgressRing`, `AgSpinner`
- **Interactive Form & Action Controls (FACE-enabled):** `AgButton`, `AgInput`, `AgCombobox`, `AgSelect`, `AgCheckbox`, `AgRadio`, `AgRating`, `AgToggle`
- **Primitives:** `AgText`

All component IDs must follow **UAX #31** identifier syntax (`^[A-Za-z_][A-Za-z0-9_]*$` — letters, digits, and underscores only; no hyphens).

---

## Form Validation (FACE) & Two-Way `@path` Binding

Interactive form components (`AgInput`, `AgCombobox`, `AgSelect`, `AgCheckbox`, `AgRadio`, `AgRating`, `AgToggle`) automatically sync user edits back to the surface `DataModel` via `{"@path": "/..."}` pointers.

Because `<a2ui-surface>` renders AgnosticUI's [Form-Associated Custom Elements (FACE)](/docs/form-association) in Light DOM, `runSurfaceValidation()` (and the catalog's `validateSurface` client function) validates every control using native `ElementInternals` `reportValidity()`:

```ts
import { runSurfaceValidation } from '@agnosticui/a2ui-lit';

function handleSurfaceSubmit(surfaceEl: HTMLElement): boolean {
  // Optional custom cross-field check using native setCustomValidity
  const codeInput = surfaceEl.querySelector('ag-input[name="tenantCode"]') as
    | (HTMLInputElement & { setCustomValidity?: (msg: string) => void })
    | null;

  if (codeInput) {
    const validCode = /^[A-Z]{3}-\d{4}\$/.test(codeInput.value ?? '');
    codeInput.setCustomValidity?.(
      validCode ? '' : 'Tenant code must match ABC-1234',
    );
  }

  // Validates all required, email, pattern, and custom constraints across the surface
  return runSurfaceValidation(surfaceEl, true);
}
```

---

## Arming AI Agents (`SKILL.md` & `agnosticui-catalog.json`)

- **`v2/a2ui/catalog/SKILL.md`**: Concise agent skill instructions with valid A2UI `v1.0` wire examples, UAX #31 rules, and component inventory.
- **`v2/a2ui/catalog/agnosticui-catalog.json`**: Machine-readable A2UI `v1.0` JSON Schema emitted directly from `AgnosticUICatalog.toJson()` (also exported via `@agnosticui/a2ui-lit/catalog.json` and `@agnosticui/a2ui-lit/SKILL.md`).
- **CI Drift Check:** Run `npm run check` in `v2/a2ui/catalog` to verify that generated wrappers, `agnosticui-catalog.json`, `SKILL.md`, and `v2/site/docs/public/a2ui/v1/catalog.json` match `v2/lib` component interfaces.

---

## Further Reading

- [Form Association (FACE)](/docs/form-association) — how AgnosticUI form controls implement `ElementInternals`
- [Theming & 21 Runtime Skins](/docs/theming) — how `--ag-*` tokens re-theme any A2UI surface at runtime
- [A2UI Specification (`v1.0`)](https://a2ui.org) — official Google A2UI protocol documentation

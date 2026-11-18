# AgnosticUI A2UI v1.0 Component Catalog Skill

Use this skill when generating **A2UI `v1.0`** JSONL/JSON message streams targeting AgnosticUI surfaces.

## Catalog Metadata

- **Protocol Version:** `1.0`
- **Catalog ID:** `https://agnosticui.com/a2ui/v1/catalog.json`
- **Total Components:** 35 (`AgText`, `Accordion`, `Alert`, `Avatar`, `Badge`, `Breadcrumb`, `Button`, `Card`, `Checkbox`, `Combobox`, `Divider`, `EmptyState`, `Fieldset`, `Header`, `Icon`, `Image`, `Input`, `IntlFormatter`, `Kbd`, `Link`, `Mark`, `MessageBubble`, `Pagination`, `Progress`, `ProgressRing`, `Radio`, `Rating`, `Select`, `SkeletonLoader`, `Slider`, `Spinner`, `Tabs`, `Tag`, `Timeline`, `Toggle`)
- **Client Validation Function:** `validateSurface` (validates FACE controls via `reportValidity()`)

## Strict Authoring Rules

1. **Envelope Version & Catalog ID:** Every wire message MUST include `"version": "1.0"`, and `createSurface` MUST set `"catalogId": "https://agnosticui.com/a2ui/v1/catalog.json"`.
2. **UAX #31 Component IDs:** Every component `id` MUST match `^[A-Za-z_][A-Za-z0-9_]*$` (letters, digits, underscores only; **never** hyphens).
3. **Adjacency List Children:** Container components (`AgCard`, `AgFieldset`, `AgAccordion`, `AgCollapsible`, `AgTabs`, `AgHeader`, `AgMessageBubble`, `AgAlert`, `AgBadge`, `AgButton`, `AgTag`, `AgProgress`, `AgIcon`, `AgLink`, `AgKbd`, `AgMark`) reference child component IDs via `"children": ["child_id_1", ...]`.
4. **Two-Way `@path` Data Binding:** Bind interactive form inputs (`AgInput`, `AgCombobox`, `AgSelect`, `AgCheckbox`, `AgRadio`, `AgRating`, `AgToggle`, `AgSlider`) using `{"@path": "/form/field"}` pointers and initialize values via `updateDataModel`.
5. **Actions:** Interactive buttons and controls trigger actions via `"action": { "event": { "name": "ACTION_NAME" } }`.

## Minimal A2UI v1.0 Wire Example

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
        { "id": "root", "component": "AgCard", "shadow": true, "stacked": true, "children": ["title_text", "email_input", "submit_btn"] },
        { "id": "title_text", "component": "AgText", "el": "h2", "text": "Account Support" },
        { "id": "email_input", "component": "AgInput", "label": "Work Email", "type": "email", "required": true, "value": { "@path": "/form/email" } },
        { "id": "submit_btn", "component": "AgButton", "variant": "primary", "shape": "rounded", "label": "Submit", "action": { "event": { "name": "SUBMIT_TICKET" } } }
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

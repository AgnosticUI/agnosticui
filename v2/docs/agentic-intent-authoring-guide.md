# Agentic Intent Authoring Guide

Every AgnosticUI playbook can include a `sdui.json` file that makes the playbook machine-readable. This file conforms to `v2/playbooks/playbook-sdui.schema.json` and is the foundation of the **Agentic Intent** system: the ability for AI coding assistants to automatically select the right playbook when a user expresses a UI goal ("I need a dashboard", "build me a login page").

Think of it as SEO for LLMs. The same way websites structured metadata for search crawlers, AgnosticUI structures playbook recipes for AI agents.

---

## File location

```
v2/playbooks/[name]/sdui.json
```

For example: `v2/playbooks/dashboard/sdui.json`

---

## Fields

### `version` (integer, required)

Schema version number. Start at `1`. Increment only when the shape of `sdui.json` itself changes in a breaking way.

```json
"version": 1
```

The CLI uses this to warn contributors when a file was authored against an older schema version.

---

### `slug` (string, required)

The exact directory name of the playbook. Must match the folder under `v2/playbooks/`.

```json
"slug": "dashboard"
```

---

### `displayName` (string, required)

Human-readable name used in UIs, docs, and LLM prompts.

```json
"displayName": "Dashboard"
```

---

### `description` (string, required)

One sentence describing what the playbook demonstrates. Keep it factual and specific.

```json
"description": "A metrics-first home screen with live data cards, navigation sidebar, and tabbed content panels."
```

---

### `intent` (object, required)

Signals to AI agents when to recommend this playbook.

#### `intent.triggers` (array of strings, required)

Natural-language phrases a user might type when they want this kind of page. Include synonyms, domain terms, and common phrasings. At least one entry is required.

```json
"triggers": ["dashboard", "admin panel", "analytics", "home screen", "metrics overview"]
```

#### `intent.summary` (string, required)

A single directive sentence for the LLM. Use the pattern: *"When the user asks for X, refer to the AgnosticUI Y Playbook."*

```json
"summary": "When the user asks for a dashboard, admin panel, or analytics screen, refer to the AgnosticUI Dashboard Playbook."
```

---

### `recipe` (object, required)

Describes the structural recipe an LLM should follow.

#### `recipe.layout` (string, required)

Plain-English description of the page layout skeleton. Describe regions, not components.

```json
"layout": "Fixed sidebar on the left, top header bar, main content area with a metrics row at the top followed by tabbed panels below."
```

#### `recipe.components` (array, required)

List of AgnosticUI components used and what role each plays in this specific playbook. At least one entry is required.

Each entry has two fields:

- `component` (string): The AgnosticUI component name, prefixed with `Ag` (e.g. `AgCard`).
- `role` (string): What this component does in this playbook context.

```json
"components": [
  { "component": "AgCard",    "role": "Wraps each metric in a bordered, elevated tile" },
  { "component": "AgSidebar", "role": "Persistent left-nav with icon links to sections" },
  { "component": "AgTabs",    "role": "Switches between Summary, Details, and Alerts views" }
]
```

#### `recipe.notes` (string, optional)

Implementation hints for the LLM. Include 1-2 small JSON snippets as "syntax flavor" so the LLM can generate correct `AgNode` graphs without a full sample graph. Full sample graphs are deferred to a follow-on issue.

```json
"notes": "Metric cards use AgCard with a Badge for the delta indicator. Example AgNode snippet: { \"type\": \"AgCard\", \"props\": { \"isBordered\": true }, \"children\": [ { \"type\": \"AgBadge\", \"props\": { \"label\": \"+12%\", \"variant\": \"success\" } } ] }"
```

---

## Complete example

```json
{
  "version": 1,
  "slug": "dashboard",
  "displayName": "Dashboard",
  "description": "A metrics-first home screen with live data cards, navigation sidebar, and tabbed content panels.",
  "intent": {
    "triggers": ["dashboard", "admin panel", "analytics", "home screen", "metrics overview"],
    "summary": "When the user asks for a dashboard, admin panel, or analytics screen, refer to the AgnosticUI Dashboard Playbook."
  },
  "recipe": {
    "layout": "Fixed sidebar on the left, top header bar, main content area with a metrics row at the top followed by tabbed panels below.",
    "components": [
      { "component": "AgCard",          "role": "Wraps each metric in a bordered, elevated tile" },
      { "component": "AgSidebar",       "role": "Persistent left-nav with icon links to sections" },
      { "component": "AgHeader",        "role": "Top bar with branding and user avatar" },
      { "component": "AgTabs",          "role": "Switches between Summary, Details, and Alerts views" },
      { "component": "AgBadge",         "role": "Shows delta percentage on metric cards" },
      { "component": "AgProgress",      "role": "Visualizes completion percentage for task rows" },
      { "component": "AgSkeletonLoader","role": "Placeholder while data loads" }
    ],
    "notes": "Metric cards use AgCard with a Badge for the delta indicator. Example AgNode snippet: { \"type\": \"AgCard\", \"props\": { \"isBordered\": true }, \"children\": [ { \"type\": \"AgBadge\", \"props\": { \"label\": \"+12%\", \"variant\": \"success\" } } ] }"
  }
}
```

---

## Validation

Run the validation script locally before committing:

```bash
node v2/scripts/validate-playbook-schemas.mjs
```

CI runs this automatically on any change to `v2/playbooks/**`.

---

## Schema reference

The canonical schema lives at `v2/playbooks/playbook-sdui.schema.json`. When the schema version increments, update the `version` field in your `sdui.json` and adjust any fields that changed.

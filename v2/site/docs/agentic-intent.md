# Agentic Intent

## Overview: SEO for LLMs

The same way websites use `<meta>` tags so search crawlers understand their content, AgnosticUI structures **playbook recipes** so AI agents understand your UI intent.

When a user asks their AI assistant "build me a dashboard," the assistant knows to reach for `ag-card` for metric tiles, `ag-tabs` for content sections, and `ag-avatar` in the header, following the proven AgnosticUI Discovery Dashboard Playbook layout. That is the win.

Agentic Intent is an additive layer on top of the existing playbook system. It does not rewrite your prompt files or change how components work. Each playbook ships with a machine-readable `sdui.json` file that the CLI reads and injects into your AI context.

## How It Works

Every AgnosticUI playbook ships with an `sdui.json` file that describes:

- **Trigger phrases**: natural-language expressions that signal the user wants this pattern
- **Layout recipe**: a plain-English description of the page skeleton
- **Component recipe**: which AgnosticUI components to use and the role each plays
- **Notes**: optional implementation hints with small JSON snippets

When you run `npx agnosticui-cli context`, the CLI scans `src/playbooks/` for installed playbooks, reads their `sdui.json` files, and injects an **AgnosticUI Agentic Intent** section into your AI context file alongside the component prop references.

```bash
npx agnosticui-cli context
```

If playbooks are present, the CLI announces them:

```
Detected 2 installed playbooks (dashboard, login) - including intent recipes.
```

No extra flags are needed. The intent section is injected automatically.

## Bundled Playbooks

All eight bundled playbooks ship with `sdui.json` agentic intent files. Install any of them with:

```bash
npx agnosticui-cli playbook <slug> --framework <react|vue|lit>
```

Then re-run `npx agnosticui-cli context` to pick up the intent recipes.

| Playbook | Slug | Trigger Phrases |
| --- | --- | --- |
| Login Form | `login` | login, sign in, authentication, auth form, user login, sign up |
| Onboarding Wizard | `onboarding` | onboarding, wizard, multi-step, getting started, user setup, setup flow, step wizard |
| Discovery Dashboard | `dashboard` | dashboard, analytics, metrics, admin panel, overview, data view, home screen |
| Support Center | `support` | support, help center, knowledge base, FAQ, tickets, live chat, customer support, help desk |
| Data Grid | `grid` | data grid, table, sortable list, data table, inventory, admin table, spreadsheet view |
| Blog / Article Reader | `blog` | blog, articles, content listing, post detail, editorial, article reader, reading experience |
| Landing / Marketing Page | `landing` | landing page, marketing, hero section, homepage, marketing page, product page, promotional page |
| Contact Form (FACE) | `form-association` | form, native form, form submission, form validation, contact form, FACE, form associated custom elements |

## Authoring a Custom sdui.json

If you have a project-specific playbook, add an `sdui.json` at the root of its directory (e.g. `src/playbooks/my-playbook/sdui.json`) to teach your AI assistant how to use it:

```json
{
  "$schema": "https://raw.githubusercontent.com/AgnosticUI/agnosticui/master/v2/playbooks/playbook-sdui.schema.json",
  "version": 1,
  "slug": "my-playbook",
  "displayName": "My Playbook",
  "description": "One-sentence description of what this playbook demonstrates.",
  "intent": {
    "triggers": ["my feature", "my page", "relevant phrase"],
    "summary": "When the user asks for my feature, refer to the My Playbook layout."
  },
  "recipe": {
    "layout": "Plain-English description of the page layout skeleton.",
    "components": [
      { "component": "AgCard", "role": "Primary content container" },
      { "component": "AgButton", "role": "Primary call-to-action" }
    ],
    "notes": "Optional: 1-2 small JSON snippets to give the LLM syntax flavor."
  }
}
```

The CLI reads any `src/playbooks/*/sdui.json` it finds. After creating the file, run `npx agnosticui-cli context` to pick it up.

### Required Fields

| Field | Type | Description |
| --- | --- | --- |
| `version` | integer | Schema version (currently `1`). Increment when the shape changes. |
| `slug` | string | Matches the playbook directory name |
| `displayName` | string | Human-readable name shown in the injected context |
| `description` | string | One-sentence description |
| `intent.triggers` | string[] | Natural-language phrases that signal this playbook |
| `intent.summary` | string | One-sentence directive for the LLM |
| `recipe.layout` | string | Plain-English layout description |
| `recipe.components` | array | List of `{ component, role }` objects |

### Optional Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe.notes` | string | Implementation hints and small JSON snippets for syntax flavor |

## The version Field and Stale Files

The `version` field tracks schema compatibility. The current expected version is `1`.

If you later update the CLI to a version that expects a higher `version` number, the CLI warns you:

```
sdui.json for 'dashboard' uses schema version 1, expected 2 - recipe may be stale.
Re-install: npx agnosticui-cli playbook dashboard --force
```

Re-installing with `--force` replaces `sdui.json` with the latest version while leaving your application code untouched.

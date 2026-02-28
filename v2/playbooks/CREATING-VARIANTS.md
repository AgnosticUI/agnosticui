# Creating a Playbook Variant

This guide explains how to take an existing AgnosticUI playbook and produce a clean variant that reuses proven infrastructure while expressing a new design pattern.

See [Worked Example: Login Variant II](#worked-example-login-variant-ii) at the bottom for a concrete reference.

---

## Step 1 — Audit What Stays vs. What Changes

Before writing a single line of prompt, compare the variant's design against the original across these axes:

| Axis                    | Original | Variant |
| ----------------------- | -------- | ------- |
| **Layout (Desktop)**    |          |         |
| **Layout (Tablet)**     |          |         |
| **Layout (Mobile)**     |          |         |
| **Component hierarchy** |          |         |
| **Background treatment**|          |         |
| **Assets needed**       |          |         |
| **Typography**          |          |         |

Fill in both columns before proceeding. Anything identical in both columns can be copied verbatim from the original PROMPT. Only differing rows need rewriting.

As a rule of thumb, these sections carry over unchanged:

- Project Setup (Vite scaffold, dependency installs, CLI init)
- AgnosticUI CLI `add` commands (same components, same framework)
- Font setup
- SkinSwitcher setup
- Icon import patterns (lucide-react / lucide-vue-next / inline SVG for Lit)
- TypeScript configuration relaxations
- Framework-specific gotchas (Vue scoped styles, Lit shadow DOM, React `@lit/react`)

Only these typically need rewriting:

- Design Specification
- Layout Specifications and ASCII diagrams
- Component Hierarchy (ordering, additions, removals)
- Asset copying instructions

---

## Step 2 — Define the New Visual Language Up Front

Specify exact values before writing the PROMPT so the LLM is never left to invent them. Cover:

- **Background treatment** — gradient values (use AG CSS tokens where possible), background image path, or plain color
- **Card / container treatment** — background, border-radius, box-shadow
- **Typography** — font family, sizes (use AG tokens)
- **Spacing** — padding, gaps (use AG tokens)
- **Dark mode considerations** — any assets or colors that need to swap (e.g., logo variants)

Using AG CSS tokens (e.g., `var(--ag-blue-500)`, `var(--ag-primary)`) instead of hardcoded hex means the variant automatically responds to skin changes.

---

## Step 3 — Establish Output Directories

Variant outputs live in parallel sibling directories inside the same playbook folder:

```
v2/playbooks/[name]/
├── react-example/        ← V1 (existing)
├── vue-example/          ← V1 (existing)
├── lit-example/          ← V1 (existing)
│
├── react-example-v2/     ← Variant II output
├── vue-example-v2/       ← Variant II output
└── lit-example-v2/       ← Variant II output
```

Name subsequent variants `-v3`, `-v4`, etc. Never modify the original directories.

---

## Step 4 — Create the Variant PROMPT

The fastest approach is a surgical diff of the original `PROMPT-3-FRAMEWORKS.md`:

1. Copy `PROMPT-3-FRAMEWORKS.md` → `PROMPT-3-FRAMEWORKS-V2.md`
2. Change all output directory references (`react-example` → `react-example-v2`, etc.)
3. Replace the sections identified as "different" in Step 1
4. Preserve all framework-specific implementation learnings verbatim

Name the new PROMPT to match the variant number: `PROMPT-3-FRAMEWORKS-V2.md`, `PROMPT-3-FRAMEWORKS-V3.md`, etc.

---

## Step 5 — Site Integration

### StackBlitz config (`playbooks-config.ts`)

Because variant example directories don't follow the default `${framework}-example` naming, use the `basePath` and `frameworkDirs` overrides in `PlaybookConfig`:

```typescript
'[name]-v2': {
  title: '[Name] Variant II',
  basePath: '[name]',          // GitHub subdir — points to login/, dashboard/, etc.
  frameworkDirs: {             // per-framework dir overrides
    react: 'react-example-v2',
    vue: 'vue-example-v2',
    lit: 'lit-example-v2',
  },
  frameworks: {
    react: [ /* same file list as V1, plus any new assets */ ],
    vue:   [ /* same file list as V1, plus any new assets */ ],
    lit:   [ /* same file list as V1, plus any new assets */ ],
  },
  externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
  contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
},
```

No `binaryFiles` entry is needed if the variant has no binary assets (e.g., no background `.jpg`).

### Documentation page

Add a new `## Variant II` section to the existing playbook page (`v2/site/docs/playbooks/[name].md`):

```md
## Variant II — [Short Description]

[One sentence describing the design difference.]

<PlaybookStackBlitz playbook="[name]-v2" />

<div class="playbook-screenshots mbs6 mbe6">
  <!-- Phone-v2.png, Tablet-v2.png, Desktop-v2.png -->
</div>
```

Keep screenshots to three light-mode shots (Phone, Tablet, Desktop). The skin-switcher tip on the page already handles dark mode.

---

## Step 6 — Validate Before Committing

- [ ] No stale asset references from the original remain in the variant PROMPT (e.g., old background image paths)
- [ ] All three layout breakpoints described with the new background/layout treatment
- [ ] Component hierarchy matches the variant's intended order
- [ ] Framework-specific gotchas preserved in the variant PROMPT
- [ ] Output directory names consistently end in `-v2` (or `-v3`, etc.)
- [ ] `logo-dark-mode.svg` included if the variant shows the logo on a dark/colored background
- [ ] `playbooks-config.ts` entry added with correct `basePath` + `frameworkDirs`
- [ ] Screenshots added to `v2/site/docs/public/playbooks/` and referenced in the docs page
- [ ] `README.md` playbook table updated if the variant introduces a meaningfully different component set

---

## Worked Example: Login Variant II

The Login playbook is the reference implementation of this process.

### Audit table (Step 1)

| Axis                    | Login V1 (Original)                                                       | Login V2 (Variant II)                                                                          |
| ----------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Layout (Desktop)**    | Split-screen: 40% white form / 60% photo                                  | Full-bleed gradient + shapes behind floating card                                              |
| **Layout (Tablet)**     | Floating card on full-viewport photo                                      | Floating card on same full-bleed gradient                                                      |
| **Layout (Mobile)**     | Form only, white background                                               | Floating card with gradient visible as backdrop                                                |
| **Component hierarchy** | Logo → Title → Email → Password → Aux row → Login btn → Divider → Social  | Logo → Title → Social (SSO first) → Divider → Email → Password → Aux row → Login btn → Footer |
| **Background treatment**| Photograph (`.jpg`)                                                       | Pure CSS: `linear-gradient` + four `border-radius: 50%` shapes                                |
| **Assets needed**       | `login-bg.jpg`, `logo.svg`, social icons                                  | `logo.svg`, `logo-dark-mode.svg`, social icons — no background image                          |
| **Typography**          | Merriweather                                                              | Merriweather (unchanged)                                                                       |

### Visual language (Step 2)

- **Gradient:** `linear-gradient(135deg, var(--ag-blue-500) 0%, var(--ag-primary) 55%, var(--ag-blue-800) 100%)`
- **Shapes:** 4 `border-radius: 50%` circles at corners/edges, `rgba(255,255,255,0.1)`
- **Card:** `var(--ag-background-primary)`, `border-radius: var(--ag-radius-md)`, elevated shadow
- **Card width:** `max-width: 375px` mobile / `max-width: 425px` at `≥640px`
- **Dark logo swap:** `logo-dark-mode.svg` (near-white `#F0F0F0` wordmark) when dark state is active
- **Lit shadow DOM:** Add `*, *::before, *::after { box-sizing: border-box }` inside `static styles` — the global reset doesn't pierce shadow DOM, causing `padding` to inflate `max-width`

### Output directories (Step 3)

```
v2/playbooks/login/
├── react-example/     ← V1
├── vue-example/       ← V1
├── lit-example/       ← V1
├── react-example-v2/  ← V2
├── vue-example-v2/    ← V2
└── lit-example-v2/    ← V2
```

### StackBlitz config key (Step 5)

```typescript
'login-v2': {
  basePath: 'login',
  frameworkDirs: { react: 'react-example-v2', vue: 'vue-example-v2', lit: 'lit-example-v2' },
  // ...same file lists as login, plus public/logo-dark-mode.svg; no binaryFiles
}
```

### Prompt file

`v2/playbooks/login/PROMPT-3-FRAMEWORKS-V2.md`

# Plan for Deriving a Playbook Variant

This outlines the general approach for taking an existing AgnosticUI playbook and producing a well-structured variant that reuses proven infrastructure while cleanly expressing a new design pattern.

### Step 1 — Audit What Stays vs. What Changes

Before writing a single line of prompt, compare the variant's design against the original across three axes:

| Axis                     | Original Login                                                           | Variant II                                                                                    |
| ------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| **Layout (Desktop)**     | Split-screen: 40% white form / 60% photo                                 | Full-bleed gradient + shapes behind floating card                                             |
| **Layout (Tablet)**      | Floating card on full-viewport photo                                     | Floating card on same full-bleed gradient                                                     |
| **Layout (Mobile)**      | Form only, no image                                                      | Form card with gradient visible behind it as backdrop                                         |
| **Component hierarchy**  | Logo → Title → Email → Password → Aux row → Login btn → Divider → Social | Logo → Title → Social (SSO first) → Divider → Email → Password → Aux row → Login btn → Footer |
| **SSO buttons**          | Stacked vertically below form fields                                     | Side-by-side (or stacked) **above** the credential fields                                     |
| **Background treatment** | Photograph (`.jpg`)                                                      | Pure CSS: linear-gradient + CSS geometric shapes                                              |
| **Assets needed**        | `login-bg.jpg`, `logo.svg`, icons                                        | `logo.svg`, `logo-dark-mode.svg`, icons — **no background image required**                    |
| **Typography**           | Merriweather                                                             | Inherit Merriweather (keep brand consistency)                                                 |

Everything in the **Project Setup**, **AgnosticUI CLI initialization**, **font setup**, **icon patterns**, **common pitfalls**, and **implementation learnings** sections carries over verbatim or with trivial edits. Only the **Design Specification**, **Layout Specifications**, **ASCII Diagrams**, and **Component Hierarchy** sections need to be rewritten.

### Step 2 — Define the New Design Tokens / Visual Language

Because Variant II introduces a gradient background with geometric shapes in place of a photo, document the exact CSS values up front so the LLM is never left to invent them:

- **Primary gradient:** `linear-gradient(135deg, var(--ag-blue-500) 0%, var(--ag-primary) 55%, var(--ag-blue-800) 100%)` — uses AG CSS tokens so it responds to skin changes
- **Geometric shapes:** 4 semi-transparent `border-radius: 50%` circles positioned with `position: absolute` at corners/edges using `rgba(255,255,255,0.1)` — subtle, not distracting
- **Card background:** `var(--ag-background-primary)` (white) with `border-radius: var(--ag-radius-md)` and the same elevated shadow as V1 tablet
- **Mobile backdrop:** On mobile the gradient is visible but fades — the form card floats with the same white card treatment used at tablet; no removal of the background

### Step 3 — Establish Output Directories

Variant II outputs should live in parallel sibling directories to keep the two variants independent:

```
v2/playbooks/login/
├── react-example/          ← V1 (existing)
├── vue-example/            ← V1 (existing)
├── lit-example/            ← V1 (existing)
│
├── react-example-v2/       ← Variant II output
├── vue-example-v2/         ← Variant II output
└── lit-example-v2/         ← Variant II output
```

### Step 4 — Copy the Original Prompt, Apply a Surgical Diff

Work through the original `PROMPT-3-FRAMEWORKS.md` section by section:

1. **Project Setup** — Change output directory names (`react-example-v2`, etc.). Everything else is identical.
2. **Asset Setup** — Remove the `cp design/login-bg*.jpg` lines. Background is now CSS. Keep icon and logo copies.
3. **Design Specification** — Fully replace with the gradient/geometry description (see Part 2 below).
4. **Component Hierarchy** — Reorder so Social buttons (Google + Facebook) appear _above_ the credential fields, with Divider between them and the fields. Remove the bottom Divider.
5. **Layout Specifications** — Replace photo references with gradient references. Mobile now keeps the gradient (not a white-only screen).
6. **ASCII Diagrams** — Redraw all three.
7. **Implementation Learnings** — Keep the framework-specific gotchas (Vue scoped styles, Lit icon approach, etc.) — they are just as applicable.

### Step 5 — Validate Against the Checklist Before Shipping

Before finalizing the variant prompt, verify:

- [ ] No references to `login-bg.jpg` or `login-bg-3-frameworks.jpg` remain in the variant prompt
- [ ] Both `logo.svg` and `logo-dark-mode.svg` are copied to each project's `public/` and the logo swaps based on dark state
- [ ] All three layout breakpoints are described with the new background treatment
- [ ] SSO-first component order is specified in every layout diagram
- [ ] The "Implementation Learnings" section preserves all framework gotchas
- [ ] Output directory names are consistently `*-v2`
- [ ] StackBlitz config notes indicate a new entry will be needed in `playbooks-config.ts`

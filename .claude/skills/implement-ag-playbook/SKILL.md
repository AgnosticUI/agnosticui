---
name: implement-ag-playbook
description: Implement a playbook from its PROMPT specification files. Supports both single-framework (PROMPT-REACT.md, etc.) and 3-framework (PROMPT-3-FRAMEWORKS.md) modes.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Edit, Write, Bash(npm *), Bash(npx *), Bash(ls *), Bash(cp *), Bash(mkdir *), Bash(git status), Bash(git diff *), Bash(git log *), Bash(git add *), Bash(git commit *)
---

**Usage:** `/implement-ag-playbook PLAYBOOK_NAME [MODE]`

**Examples:**
- `/implement-ag-playbook onboarding` - Implement all available prompts
- `/implement-ag-playbook login 3-frameworks` - Implement only PROMPT-3-FRAMEWORKS.md
- `/implement-ag-playbook login react` - Implement only PROMPT-REACT.md

Implement the specified playbook based on its existing PROMPT specification files.

---

## Playbook Structure Reference

Complete playbooks have this structure (see `v2/playbooks/README.md`):

```
v2/playbooks/[name]/
├── PROMPT-3-FRAMEWORKS.md    # Builds → react-example/, vue-example/, lit-example/
├── PROMPT-REACT.md           # Builds → react/
├── PROMPT-VUE.md             # Builds → vue/
├── PROMPT-LIT.md             # Builds → lit/
└── design/                   # Shared assets (mockups, icons, images)
```

**Single-Framework vs 3-Frameworks differences:**
- Different fonts (e.g., Playfair Display vs Merriweather)
- Different social icons (e.g., Apple vs Facebook)
- Different asset filenames (e.g., `logo.svg` vs `logo-3-frameworks.svg`)

---

## Phase 0: Validation

1. **Verify playbook exists**
   - Check `v2/playbooks/$ARGUMENTS/` exists
   - List available PROMPT files:
     - `PROMPT-3-FRAMEWORKS.md`
     - `PROMPT-REACT.md`
     - `PROMPT-VUE.md`
     - `PROMPT-LIT.md`
   - If MODE specified, verify that PROMPT file exists
   - If no MODE specified, ask user which to implement

2. **Read the prompt specification**
   - Read the target PROMPT file(s)
   - Extract:
     - Required components (for `agnosticui-cli add`)
     - Design specifications
     - Font requirements
     - Asset copying instructions
     - Framework-specific configurations

---

## Phase 1: Project Scaffolding

3. **Create Vite project(s)**
   - Navigate to `v2/playbooks/$ARGUMENTS/`
   - Create appropriate project(s):

   **For 3-frameworks mode:**
   ```bash
   npm create vite@latest react-example -- --template react-ts
   npm create vite@latest vue-example -- --template vue-ts
   npm create vite@latest lit-example -- --template lit-ts
   ```

   **For single-framework mode:**
   ```bash
   npm create vite@latest react -- --template react-ts   # PROMPT-REACT.md
   npm create vite@latest vue -- --template vue-ts       # PROMPT-VUE.md
   npm create vite@latest lit -- --template lit-ts       # PROMPT-LIT.md
   ```

4. **Install dependencies**
   - **React:** `npm install && npm install lucide-react lit`
   - **Vue:** `npm install && npm install lucide-vue-next lit`
   - **Lit:** `npm install && npm install lit`

5. **Initialize AgnosticUI CLI**
   - For each project:
   ```bash
   npx agnosticui-cli init --framework [react|vue|lit] --skip-prompts
   npx agnosticui-cli add [COMPONENTS from prompt]
   ```

---

## Phase 2: Configuration

6. **Copy design assets (if applicable)**
   - Check `design/` folder for assets beyond mockups
   - **Not all playbooks have assets to copy** - some only have mockups (e.g., `onboarding`)
   - If assets exist (icons, logos, background images), copy to each project's `public/` folder
   - Follow asset instructions in the PROMPT file

7. **Vue vite.config.ts**
   - Add custom element recognition for `ag-*` tags:
   ```typescript
   vue({
     template: {
       compilerOptions: {
         isCustomElement: (tag) => tag.startsWith('ag-'),
       },
     },
   })
   ```

8. **Token imports**
   - Import in each project's entry point:
   ```typescript
   import './components/ag/styles/ag-tokens.css'
   import './components/ag/styles/ag-tokens-dark.css'
   ```

9. **Font setup**
   - Add Google Fonts link to each `index.html` per PROMPT specification

10. **TypeScript configuration (Vue)**
    - If CLI-generated code causes errors, relax `tsconfig.app.json`:
    ```json
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false
    ```

---

## Phase 3: Implementation

11. **Implement each framework**
    - Follow the PROMPT specification exactly
    - **React:** `src/App.tsx` using React wrappers + lucide-react
    - **Vue:** `src/App.vue` using Vue wrappers + lucide-vue-next
    - **Lit:** Custom element using core components + inline SVG icons

12. **Verify builds**
    - Run `npm run build` in each project
    - Fix any TypeScript or build errors
    - Test with `npm run dev`

---

## Phase 4: Verification

13. **Visual verification**
    - Run each example
    - Compare against design mockups in `design/`
    - Check responsive breakpoints
    - Verify component interactions

14. **Cross-framework consistency**
    - All implementations should behave identically
    - State management works correctly
    - Styling matches across frameworks

---

## Phase 5: Commit

15. **Stage and commit**
    - Show `git diff --stat`
    - Commit with descriptive message
    - **WAIT FOR USER APPROVAL**

---

## Key Patterns

### Icon Imports
- **React:** `import { Icon } from "lucide-react"`
- **Vue:** `import { Icon } from "lucide-vue-next"`
- **Lit:** Inline SVG templates (lucide doesn't work directly)

### Component Imports
- **React:** `./components/ag/[Component]/react/`
- **Vue:** `./components/ag/[Component]/vue/`
- **Lit:** `./components/ag/[Component]/core/`

### Event Handling
- Selection components emit `selection-change` events
- Event detail: `{ value, checked, selectedValues }`

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Vue `ag-*` warnings | Add `isCustomElement` to vite.config.ts |
| TypeScript strict errors | Relax `tsconfig.app.json` settings |
| Missing dark mode | Import both `ag-tokens.css` AND `ag-tokens-dark.css` |
| Button `isDisabled` prop | Use `disabled` not `isDisabled` |
| Timeline connector misalignment | Ensure core component has `::slotted(*) { box-sizing: border-box }` |

---

## Incomplete Playbook Warning

If a playbook is missing PROMPT files, notify the user:

> **Warning:** The `$ARGUMENTS` playbook is incomplete.
>
> **Present:** [list files]
> **Missing:** [list files]
>
> Complete playbooks should have:
> - `PROMPT-3-FRAMEWORKS.md` → `react-example/`, `vue-example/`, `lit-example/`
> - `PROMPT-REACT.md` → `react/`
> - `PROMPT-VUE.md` → `vue/`
> - `PROMPT-LIT.md` → `lit/`
>
> Would you like to:
> 1. Implement only the available prompts
> 2. Generate the missing PROMPT files first

---

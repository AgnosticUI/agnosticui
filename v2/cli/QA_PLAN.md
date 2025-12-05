# QA Verification Plan for AgnosticUI CLI

## Objective

Verify that the `@agnosticui/cli` functions correctly across **Lit**, **React**, and **Vue** frameworks for all **56 components**.

## Scope

1.  **Frameworks**: Lit, React, Vue.
2.  **Commands**: `init`, `sync`, `list`, `add`.
3.  **Components**: All 56 available components.

## Prerequisites

- Node.js & npm installed.
- Access to `agnosticui/v2` codebase.
- CLI built and packed (`agnosticui-cli-VERSION.tgz`).
- Local reference tarball built (`agnosticui-local-vVERSION.tar.gz`).

## Verification Phases

### Phase 1: Setup & Core Commands

**Goal**: Ensure the CLI can be installed, initialized, and perform basic operations.

**Automated Steps**:

1.  **Build Artifacts**:
    - Run `npm run build` in `v2/cli`.
    - Run `./scripts/build-local-tarball.sh` in `v2`.
    - Run `npm pack` in `v2/cli`.
2.  **Scaffold Test Projects**:
    - Create a directory `qa_workspace`.
    - Initialize 3 projects using standard scaffolding tools (or minimal setups):
      - `lit-test`: (e.g., `npm create vite@latest lit-test -- --template lit`)
      - `react-test`: (e.g., `npm create vite@latest react-test -- --template react`)
      - `vue-test`: (e.g., `npm create vite@latest vue-test -- --template vue`)
3.  **Install CLI**:
    - In each test project, install the packed CLI: `npm install ../../v2/cli/agnosticui-cli-*.tgz`.
4.  **Verify `init`**:
    - Run `npx ag init --framework <framework>` in each project.
    - **Pass/Fail Criteria**:
      - `agnosticui.config.json` exists.
      - `agnosticui/` directory exists and contains `tokens`, `docs`, etc.
5.  **Verify `list`**:
    - Run `npx ag list`.
    - **Pass/Fail Criteria**: Output lists all 56 components.
6.  **Verify `sync`**:
    - Run `npx ag sync` (re-syncs the current tarball).
    - **Pass/Fail Criteria**: Command completes successfully, `agnosticui/` content is refreshed.

### Phase 2: Component Verification (Batched Strategy)

**Goal**: Verify `add` works for all components and they integrate correctly.
**Strategy**: Batch components into groups of ~10. Pause for human verification after each batch.

**Component Bundles**:
_Total Components: 56_

**Batch 1: Primitives & Layout** (10)
`Avatar`, `Badge`, `Button`, `Card`, `Divider`, `Icon`, `Image`, `Tag`, `VisuallyHidden`, `Flex`

**Batch 2: Inputs & Forms - Part 1** (10)
`Checkbox`, `Input`, `Radio`, `Select`, `Slider`, `Toggle`, `Fieldset`, `Rating`, `Combobox`, `Mark`

**Batch 3: Inputs & Forms - Part 2 & Overlays** (10)
`ButtonFx`, `CopyButton`, `IconButton`, `IconButtonFx`, `Dialog`, `Drawer`, `Header`, `Menu`, `Popover`, `Tooltip`

**Batch 4: Navigation & Feedback** (10)
`Breadcrumb`, `Pagination`, `Sidebar`, `SidebarNav`, `Tabs`, `Alert`, `EmptyState`, `Loader`, `Spinner`, `Toast`

**Batch 5: Advanced & Groups** (10)
`Accordion`, `AccordionGroup`, `AvatarGroup`, `Collapsible`, `MessageBubble`, `Progress`, `ProgressRing`, `ScrollProgress`, `ScrollToButton`, `Timeline`

**Batch 6: Remaining** (6)
`BadgeFx`, `IntlFormatter`, `Kbd`, `Link`, `SkeletonLoader`, `BadgeFx`

**Execution Steps (Per Framework)**:
For each Batch $N:

1.  **Add**: Run `npx ag add <component1> <component2> ...`
2.  **Verify Files**: Check `src/components/ag/<Component>` exists.
3.  **Human-in-the-loop Verification**:
    - **Action**: Development server (`npm run dev`) should be running.
    - **Task**: Import ~1-2 representative components from the batch into `App.{jsx,vue,ts}` and check if they render.
    - **Command**: User enters "y" to proceed to next batch if successful.

## Automation Script Plan

Create a script `scripts/qa-verify.js` (or `.sh`) that:

1.  Accepts arguments: `--framework <framework>` `--batch <batch_num>`.
2.  Or an interactive mode that guides the user through the process.

## Success Criteria

- All 3 frameworks initialized successfully.
- All 56 components added without error.
- Representative components render in the browser (human verified).
